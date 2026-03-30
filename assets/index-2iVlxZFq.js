const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["./App-gxjcllkI.js","./SelectorDrawer.vue_vue_type_script_setup_true_lang-C4JjErTE.js","./index-CMc5YzZA.js","./SelectorDrawer-Dg3sM_aP.css","./index-CmzhANMy.js","./App-Bp_jwbR1.css","./index-C2MtSpP6.js","./index-pPOOvXlB.css"])))=>i.map(i=>d[i]);
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
let vs, Xr, zd, jp, Di, bs, At, en, _a, Iv, Xy, Ev, Ao, kv, Xd, Qd, gr, Zi, Cd, mo, Av, Ov, ct, el, Md, Lo, Tr, pv, We, Kv, Pv, Mv, _v, Tv, lp, xv, Qv, Lv, aa, Ca, Jm, wn, Sc, Zw, Ui, Yf, yn, qm, ew, Kf, mm, ki, Gw, l0, Cw, Vf, A0, Td, Et, sn, Mo, Mu, sd, $d, mv, Ji, Nv, ko, Bv, Uv, qv, Gv, zv, $v, Vv, Wv, Sv, t1, i1, Fv, li, lb, qn, wr, mr, an, uc, sm, lm, um, nm, qf, Zf, tp, Zv, Jv, Hv, Yv, Xv, ru, Ne, jv, ut, Dv, Li, Hd, nl, qt, bo, Kp, Un, ul, Vu, vv, os, Ka, ni, Gd, bv, pa, sl, Fp, wv, Rv, yv, e1, Cv, Ct;
let __tla = (async () => {
  var _a2;
  (function() {
    const t = document.createElement("link").relList;
    if (t && t.supports && t.supports("modulepreload")) return;
    for (const a of document.querySelectorAll('link[rel="modulepreload"]')) r(a);
    new MutationObserver((a) => {
      for (const c of a) if (c.type === "childList") for (const f of c.addedNodes) f.tagName === "LINK" && f.rel === "modulepreload" && r(f);
    }).observe(document, {
      childList: true,
      subtree: true
    });
    function i(a) {
      const c = {};
      return a.integrity && (c.integrity = a.integrity), a.referrerPolicy && (c.referrerPolicy = a.referrerPolicy), a.crossOrigin === "use-credentials" ? c.credentials = "include" : a.crossOrigin === "anonymous" ? c.credentials = "omit" : c.credentials = "same-origin", c;
    }
    function r(a) {
      if (a.ep) return;
      a.ep = true;
      const c = i(a);
      fetch(a.href, c);
    }
  })();
  function Wa(e) {
    const t = /* @__PURE__ */ Object.create(null);
    for (const i of e.split(",")) t[i] = 1;
    return (i) => i in t;
  }
  const Ue = {}, Hr = [], fi = () => {
  }, gu = () => false, uo = (e) => e.charCodeAt(0) === 111 && e.charCodeAt(1) === 110 && (e.charCodeAt(2) > 122 || e.charCodeAt(2) < 97), Va = (e) => e.startsWith("onUpdate:"), dt = Object.assign, qa = (e, t) => {
    const i = e.indexOf(t);
    i > -1 && e.splice(i, 1);
  }, Wh = Object.prototype.hasOwnProperty, Ve = (e, t) => Wh.call(e, t), ve = Array.isArray, Yr = (e) => mn(e) === "[object Map]", mu = (e) => mn(e) === "[object Set]", Sl = (e) => mn(e) === "[object Date]", Vh = (e) => mn(e) === "[object RegExp]", Te = (e) => typeof e == "function", lt = (e) => typeof e == "string", pi = (e) => typeof e == "symbol", $e = (e) => e !== null && typeof e == "object", wu = (e) => ($e(e) || Te(e)) && Te(e.then) && Te(e.catch), yu = Object.prototype.toString, mn = (e) => yu.call(e), qh = (e) => mn(e).slice(8, -1), bu = (e) => mn(e) === "[object Object]", fo = (e) => lt(e) && e !== "NaN" && e[0] !== "-" && "" + parseInt(e, 10) === e, Nn = Wa(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"), ho = (e) => {
    const t = /* @__PURE__ */ Object.create(null);
    return ((i) => t[i] || (t[i] = e(i)));
  }, Kh = /-\w/g, Yt = ho((e) => e.replace(Kh, (t) => t.slice(1).toUpperCase())), Zh = /\B([A-Z])/g, Hi = ho((e) => e.replace(Zh, "-$1").toLowerCase()), po = ho((e) => e.charAt(0).toUpperCase() + e.slice(1)), Uo = ho((e) => e ? `on${po(e)}` : ""), zt = (e, t) => !Object.is(e, t), Dn = (e, ...t) => {
    for (let i = 0; i < e.length; i++) e[i](...t);
  }, vu = (e, t, i, r = false) => {
    Object.defineProperty(e, t, {
      configurable: true,
      enumerable: false,
      writable: r,
      value: i
    });
  }, Jh = (e) => {
    const t = parseFloat(e);
    return isNaN(t) ? e : t;
  }, Hh = (e) => {
    const t = lt(e) ? Number(e) : NaN;
    return isNaN(t) ? e : t;
  };
  let Tl;
  const go = () => Tl || (Tl = typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : typeof window < "u" ? window : typeof global < "u" ? global : {});
  mo = function(e) {
    if (ve(e)) {
      const t = {};
      for (let i = 0; i < e.length; i++) {
        const r = e[i], a = lt(r) ? ed(r) : mo(r);
        if (a) for (const c in a) t[c] = a[c];
      }
      return t;
    } else if (lt(e) || $e(e)) return e;
  };
  const Yh = /;(?![^(]*\))/g, Xh = /:([^]+)/, Qh = /\/\*[^]*?\*\//g;
  function ed(e) {
    const t = {};
    return e.replace(Qh, "").split(Yh).forEach((i) => {
      if (i) {
        const r = i.split(Xh);
        r.length > 1 && (t[r[0].trim()] = r[1].trim());
      }
    }), t;
  }
  Ka = function(e) {
    let t = "";
    if (lt(e)) t = e;
    else if (ve(e)) for (let i = 0; i < e.length; i++) {
      const r = Ka(e[i]);
      r && (t += r + " ");
    }
    else if ($e(e)) for (const i in e) e[i] && (t += i + " ");
    return t.trim();
  };
  const td = "itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly", id = Wa(td);
  function _u(e) {
    return !!e || e === "";
  }
  function rd(e, t) {
    if (e.length !== t.length) return false;
    let i = true;
    for (let r = 0; i && r < e.length; r++) i = Za(e[r], t[r]);
    return i;
  }
  function Za(e, t) {
    if (e === t) return true;
    let i = Sl(e), r = Sl(t);
    if (i || r) return i && r ? e.getTime() === t.getTime() : false;
    if (i = pi(e), r = pi(t), i || r) return e === t;
    if (i = ve(e), r = ve(t), i || r) return i && r ? rd(e, t) : false;
    if (i = $e(e), r = $e(t), i || r) {
      if (!i || !r) return false;
      const a = Object.keys(e).length, c = Object.keys(t).length;
      if (a !== c) return false;
      for (const f in e) {
        const h = e.hasOwnProperty(f), p = t.hasOwnProperty(f);
        if (h && !p || !h && p || !Za(e[f], t[f])) return false;
      }
    }
    return String(e) === String(t);
  }
  let Eu, Iu, zo;
  Eu = (e) => !!(e && e.__v_isRef === true);
  Di = (e) => lt(e) ? e : e == null ? "" : ve(e) || $e(e) && (e.toString === yu || !Te(e.toString)) ? Eu(e) ? Di(e.value) : JSON.stringify(e, Iu, 2) : String(e);
  Iu = (e, t) => Eu(t) ? Iu(e, t.value) : Yr(t) ? {
    [`Map(${t.size})`]: [
      ...t.entries()
    ].reduce((i, [r, a], c) => (i[zo(r, c) + " =>"] = a, i), {})
  } : mu(t) ? {
    [`Set(${t.size})`]: [
      ...t.values()
    ].map((i) => zo(i))
  } : pi(t) ? zo(t) : $e(t) && !ve(t) && !bu(t) ? String(t) : t;
  zo = (e, t = "") => {
    var i;
    return pi(e) ? `Symbol(${(i = e.description) != null ? i : t})` : e;
  };
  function nd(e) {
    return e == null ? "initial" : typeof e == "string" ? e === "" ? " " : e : String(e);
  }
  let Pt;
  class Su {
    constructor(t = false) {
      this.detached = t, this._active = true, this._on = 0, this.effects = [], this.cleanups = [], this._isPaused = false, this.__v_skip = true, this.parent = Pt, !t && Pt && (this.index = (Pt.scopes || (Pt.scopes = [])).push(this) - 1);
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
        const i = Pt;
        try {
          return Pt = this, t();
        } finally {
          Pt = i;
        }
      }
    }
    on() {
      ++this._on === 1 && (this.prevScope = Pt, Pt = this);
    }
    off() {
      this._on > 0 && --this._on === 0 && (Pt = this.prevScope, this.prevScope = void 0);
    }
    stop(t) {
      if (this._active) {
        this._active = false;
        let i, r;
        for (i = 0, r = this.effects.length; i < r; i++) this.effects[i].stop();
        for (this.effects.length = 0, i = 0, r = this.cleanups.length; i < r; i++) this.cleanups[i]();
        if (this.cleanups.length = 0, this.scopes) {
          for (i = 0, r = this.scopes.length; i < r; i++) this.scopes[i].stop(true);
          this.scopes.length = 0;
        }
        if (!this.detached && this.parent && !t) {
          const a = this.parent.scopes.pop();
          a && a !== this && (this.parent.scopes[this.index] = a, a.index = this.index);
        }
        this.parent = void 0;
      }
    }
  }
  function Tu(e) {
    return new Su(e);
  }
  Mu = function() {
    return Pt;
  };
  sd = function(e, t = false) {
    Pt && Pt.cleanups.push(e);
  };
  let tt;
  const Go = /* @__PURE__ */ new WeakSet();
  class Pu {
    constructor(t) {
      this.fn = t, this.deps = void 0, this.depsTail = void 0, this.flags = 5, this.next = void 0, this.cleanup = void 0, this.scheduler = void 0, Pt && Pt.active && Pt.effects.push(this);
    }
    pause() {
      this.flags |= 64;
    }
    resume() {
      this.flags & 64 && (this.flags &= -65, Go.has(this) && (Go.delete(this), this.trigger()));
    }
    notify() {
      this.flags & 2 && !(this.flags & 32) || this.flags & 8 || Au(this);
    }
    run() {
      if (!(this.flags & 1)) return this.fn();
      this.flags |= 2, Ml(this), Ru(this);
      const t = tt, i = hi;
      tt = this, hi = true;
      try {
        return this.fn();
      } finally {
        Cu(this), tt = t, hi = i, this.flags &= -3;
      }
    }
    stop() {
      if (this.flags & 1) {
        for (let t = this.deps; t; t = t.nextDep) Ya(t);
        this.deps = this.depsTail = void 0, Ml(this), this.onStop && this.onStop(), this.flags &= -2;
      }
    }
    trigger() {
      this.flags & 64 ? Go.add(this) : this.scheduler ? this.scheduler() : this.runIfDirty();
    }
    runIfDirty() {
      fa(this) && this.run();
    }
    get dirty() {
      return fa(this);
    }
  }
  let ku = 0, jn, Fn;
  function Au(e, t = false) {
    if (e.flags |= 8, t) {
      e.next = Fn, Fn = e;
      return;
    }
    e.next = jn, jn = e;
  }
  function Ja() {
    ku++;
  }
  function Ha() {
    if (--ku > 0) return;
    if (Fn) {
      let t = Fn;
      for (Fn = void 0; t; ) {
        const i = t.next;
        t.next = void 0, t.flags &= -9, t = i;
      }
    }
    let e;
    for (; jn; ) {
      let t = jn;
      for (jn = void 0; t; ) {
        const i = t.next;
        if (t.next = void 0, t.flags &= -9, t.flags & 1) try {
          t.trigger();
        } catch (r) {
          e || (e = r);
        }
        t = i;
      }
    }
    if (e) throw e;
  }
  function Ru(e) {
    for (let t = e.deps; t; t = t.nextDep) t.version = -1, t.prevActiveLink = t.dep.activeLink, t.dep.activeLink = t;
  }
  function Cu(e) {
    let t, i = e.depsTail, r = i;
    for (; r; ) {
      const a = r.prevDep;
      r.version === -1 ? (r === i && (i = a), Ya(r), od(r)) : t = r, r.dep.activeLink = r.prevActiveLink, r.prevActiveLink = void 0, r = a;
    }
    e.deps = t, e.depsTail = i;
  }
  function fa(e) {
    for (let t = e.deps; t; t = t.nextDep) if (t.dep.version !== t.version || t.dep.computed && (Ou(t.dep.computed) || t.dep.version !== t.version)) return true;
    return !!e._dirty;
  }
  function Ou(e) {
    if (e.flags & 4 && !(e.flags & 16) || (e.flags &= -17, e.globalVersion === Jn) || (e.globalVersion = Jn, !e.isSSR && e.flags & 128 && (!e.deps && !e._dirty || !fa(e)))) return;
    e.flags |= 2;
    const t = e.dep, i = tt, r = hi;
    tt = e, hi = true;
    try {
      Ru(e);
      const a = e.fn(e._value);
      (t.version === 0 || zt(a, e._value)) && (e.flags |= 128, e._value = a, t.version++);
    } catch (a) {
      throw t.version++, a;
    } finally {
      tt = i, hi = r, Cu(e), e.flags &= -3;
    }
  }
  function Ya(e, t = false) {
    const { dep: i, prevSub: r, nextSub: a } = e;
    if (r && (r.nextSub = a, e.prevSub = void 0), a && (a.prevSub = r, e.nextSub = void 0), i.subs === e && (i.subs = r, !r && i.computed)) {
      i.computed.flags &= -5;
      for (let c = i.computed.deps; c; c = c.nextDep) Ya(c, true);
    }
    !t && !--i.sc && i.map && i.map.delete(i.key);
  }
  function od(e) {
    const { prevDep: t, nextDep: i } = e;
    t && (t.nextDep = i, e.prevDep = void 0), i && (i.prevDep = t, e.nextDep = void 0);
  }
  let hi = true;
  const xu = [];
  function Vi() {
    xu.push(hi), hi = false;
  }
  function qi() {
    const e = xu.pop();
    hi = e === void 0 ? true : e;
  }
  function Ml(e) {
    const { cleanup: t } = e;
    if (e.cleanup = void 0, t) {
      const i = tt;
      tt = void 0;
      try {
        t();
      } finally {
        tt = i;
      }
    }
  }
  let Jn = 0;
  class ad {
    constructor(t, i) {
      this.sub = t, this.dep = i, this.version = i.version, this.nextDep = this.prevDep = this.nextSub = this.prevSub = this.prevActiveLink = void 0;
    }
  }
  class wo {
    constructor(t) {
      this.computed = t, this.version = 0, this.activeLink = void 0, this.subs = void 0, this.map = void 0, this.key = void 0, this.sc = 0, this.__v_skip = true;
    }
    track(t) {
      if (!tt || !hi || tt === this.computed) return;
      let i = this.activeLink;
      if (i === void 0 || i.sub !== tt) i = this.activeLink = new ad(tt, this), tt.deps ? (i.prevDep = tt.depsTail, tt.depsTail.nextDep = i, tt.depsTail = i) : tt.deps = tt.depsTail = i, Lu(i);
      else if (i.version === -1 && (i.version = this.version, i.nextDep)) {
        const r = i.nextDep;
        r.prevDep = i.prevDep, i.prevDep && (i.prevDep.nextDep = r), i.prevDep = tt.depsTail, i.nextDep = void 0, tt.depsTail.nextDep = i, tt.depsTail = i, tt.deps === i && (tt.deps = r);
      }
      return i;
    }
    trigger(t) {
      this.version++, Jn++, this.notify(t);
    }
    notify(t) {
      Ja();
      try {
        for (let i = this.subs; i; i = i.prevSub) i.sub.notify() && i.sub.dep.notify();
      } finally {
        Ha();
      }
    }
  }
  function Lu(e) {
    if (e.dep.sc++, e.sub.flags & 4) {
      const t = e.dep.computed;
      if (t && !e.dep.subs) {
        t.flags |= 20;
        for (let r = t.deps; r; r = r.nextDep) Lu(r);
      }
      const i = e.dep.subs;
      i !== e && (e.prevSub = i, i && (i.nextSub = e)), e.dep.subs = e;
    }
  }
  const zs = /* @__PURE__ */ new WeakMap(), Lr = /* @__PURE__ */ Symbol(""), ha = /* @__PURE__ */ Symbol(""), Hn = /* @__PURE__ */ Symbol("");
  function kt(e, t, i) {
    if (hi && tt) {
      let r = zs.get(e);
      r || zs.set(e, r = /* @__PURE__ */ new Map());
      let a = r.get(i);
      a || (r.set(i, a = new wo()), a.map = r, a.key = i), a.track();
    }
  }
  function zi(e, t, i, r, a, c) {
    const f = zs.get(e);
    if (!f) {
      Jn++;
      return;
    }
    const h = (p) => {
      p && p.trigger();
    };
    if (Ja(), t === "clear") f.forEach(h);
    else {
      const p = ve(e), v = p && fo(i);
      if (p && i === "length") {
        const g = Number(r);
        f.forEach((I, C) => {
          (C === "length" || C === Hn || !pi(C) && C >= g) && h(I);
        });
      } else switch ((i !== void 0 || f.has(void 0)) && h(f.get(i)), v && h(f.get(Hn)), t) {
        case "add":
          p ? v && h(f.get("length")) : (h(f.get(Lr)), Yr(e) && h(f.get(ha)));
          break;
        case "delete":
          p || (h(f.get(Lr)), Yr(e) && h(f.get(ha)));
          break;
        case "set":
          Yr(e) && h(f.get(Lr));
          break;
      }
    }
    Ha();
  }
  function ld(e, t) {
    const i = zs.get(e);
    return i && i.get(t);
  }
  function zr(e) {
    const t = Ne(e);
    return t === e ? t : (kt(t, "iterate", Hn), Ht(e) ? t : t.map(gi));
  }
  function yo(e) {
    return kt(e = Ne(e), "iterate", Hn), e;
  }
  function or(e, t) {
    return Ki(e) ? nn(Bi(e) ? gi(t) : t) : gi(t);
  }
  const cd = {
    __proto__: null,
    [Symbol.iterator]() {
      return $o(this, Symbol.iterator, (e) => or(this, e));
    },
    concat(...e) {
      return zr(this).concat(...e.map((t) => ve(t) ? zr(t) : t));
    },
    entries() {
      return $o(this, "entries", (e) => (e[1] = or(this, e[1]), e));
    },
    every(e, t) {
      return xi(this, "every", e, t, void 0, arguments);
    },
    filter(e, t) {
      return xi(this, "filter", e, t, (i) => i.map((r) => or(this, r)), arguments);
    },
    find(e, t) {
      return xi(this, "find", e, t, (i) => or(this, i), arguments);
    },
    findIndex(e, t) {
      return xi(this, "findIndex", e, t, void 0, arguments);
    },
    findLast(e, t) {
      return xi(this, "findLast", e, t, (i) => or(this, i), arguments);
    },
    findLastIndex(e, t) {
      return xi(this, "findLastIndex", e, t, void 0, arguments);
    },
    forEach(e, t) {
      return xi(this, "forEach", e, t, void 0, arguments);
    },
    includes(...e) {
      return Bo(this, "includes", e);
    },
    indexOf(...e) {
      return Bo(this, "indexOf", e);
    },
    join(e) {
      return zr(this).join(e);
    },
    lastIndexOf(...e) {
      return Bo(this, "lastIndexOf", e);
    },
    map(e, t) {
      return xi(this, "map", e, t, void 0, arguments);
    },
    pop() {
      return En(this, "pop");
    },
    push(...e) {
      return En(this, "push", e);
    },
    reduce(e, ...t) {
      return Pl(this, "reduce", e, t);
    },
    reduceRight(e, ...t) {
      return Pl(this, "reduceRight", e, t);
    },
    shift() {
      return En(this, "shift");
    },
    some(e, t) {
      return xi(this, "some", e, t, void 0, arguments);
    },
    splice(...e) {
      return En(this, "splice", e);
    },
    toReversed() {
      return zr(this).toReversed();
    },
    toSorted(e) {
      return zr(this).toSorted(e);
    },
    toSpliced(...e) {
      return zr(this).toSpliced(...e);
    },
    unshift(...e) {
      return En(this, "unshift", e);
    },
    values() {
      return $o(this, "values", (e) => or(this, e));
    }
  };
  function $o(e, t, i) {
    const r = yo(e), a = r[t]();
    return r !== e && !Ht(e) && (a._next = a.next, a.next = () => {
      const c = a._next();
      return c.done || (c.value = i(c.value)), c;
    }), a;
  }
  const ud = Array.prototype;
  function xi(e, t, i, r, a, c) {
    const f = yo(e), h = f !== e && !Ht(e), p = f[t];
    if (p !== ud[t]) {
      const I = p.apply(e, c);
      return h ? gi(I) : I;
    }
    let v = i;
    f !== e && (h ? v = function(I, C) {
      return i.call(this, or(e, I), C, e);
    } : i.length > 2 && (v = function(I, C) {
      return i.call(this, I, C, e);
    }));
    const g = p.call(f, v, r);
    return h && a ? a(g) : g;
  }
  function Pl(e, t, i, r) {
    const a = yo(e);
    let c = i;
    return a !== e && (Ht(e) ? i.length > 3 && (c = function(f, h, p) {
      return i.call(this, f, h, p, e);
    }) : c = function(f, h, p) {
      return i.call(this, f, or(e, h), p, e);
    }), a[t](c, ...r);
  }
  function Bo(e, t, i) {
    const r = Ne(e);
    kt(r, "iterate", Hn);
    const a = r[t](...i);
    return (a === -1 || a === false) && vo(i[0]) ? (i[0] = Ne(i[0]), r[t](...i)) : a;
  }
  function En(e, t, i = []) {
    Vi(), Ja();
    const r = Ne(e)[t].apply(e, i);
    return Ha(), qi(), r;
  }
  const fd = Wa("__proto__,__v_isRef,__isVue"), Nu = new Set(Object.getOwnPropertyNames(Symbol).filter((e) => e !== "arguments" && e !== "caller").map((e) => Symbol[e]).filter(pi));
  function hd(e) {
    pi(e) || (e = String(e));
    const t = Ne(this);
    return kt(t, "has", e), t.hasOwnProperty(e);
  }
  class Du {
    constructor(t = false, i = false) {
      this._isReadonly = t, this._isShallow = i;
    }
    get(t, i, r) {
      if (i === "__v_skip") return t.__v_skip;
      const a = this._isReadonly, c = this._isShallow;
      if (i === "__v_isReactive") return !a;
      if (i === "__v_isReadonly") return a;
      if (i === "__v_isShallow") return c;
      if (i === "__v_raw") return r === (a ? c ? Ed : zu : c ? Uu : Fu).get(t) || Object.getPrototypeOf(t) === Object.getPrototypeOf(r) ? t : void 0;
      const f = ve(t);
      if (!a) {
        let p;
        if (f && (p = cd[i])) return p;
        if (i === "hasOwnProperty") return hd;
      }
      const h = Reflect.get(t, i, ct(t) ? t : r);
      if ((pi(i) ? Nu.has(i) : fd(i)) || (a || kt(t, "get", i), c)) return h;
      if (ct(h)) {
        const p = f && fo(i) ? h : h.value;
        return a && $e(p) ? pa(p) : p;
      }
      return $e(h) ? a ? pa(h) : bo(h) : h;
    }
  }
  class ju extends Du {
    constructor(t = false) {
      super(false, t);
    }
    set(t, i, r, a) {
      let c = t[i];
      const f = ve(t) && fo(i);
      if (!this._isShallow) {
        const v = Ki(c);
        if (!Ht(r) && !Ki(r) && (c = Ne(c), r = Ne(r)), !f && ct(c) && !ct(r)) return v || (c.value = r), true;
      }
      const h = f ? Number(i) < t.length : Ve(t, i), p = Reflect.set(t, i, r, ct(t) ? t : a);
      return t === Ne(a) && (h ? zt(r, c) && zi(t, "set", i, r) : zi(t, "add", i, r)), p;
    }
    deleteProperty(t, i) {
      const r = Ve(t, i);
      t[i];
      const a = Reflect.deleteProperty(t, i);
      return a && r && zi(t, "delete", i, void 0), a;
    }
    has(t, i) {
      const r = Reflect.has(t, i);
      return (!pi(i) || !Nu.has(i)) && kt(t, "has", i), r;
    }
    ownKeys(t) {
      return kt(t, "iterate", ve(t) ? "length" : Lr), Reflect.ownKeys(t);
    }
  }
  class dd extends Du {
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
  const pd = new ju(), gd = new dd(), md = new ju(true);
  const da = (e) => e, ps = (e) => Reflect.getPrototypeOf(e);
  function wd(e, t, i) {
    return function(...r) {
      const a = this.__v_raw, c = Ne(a), f = Yr(c), h = e === "entries" || e === Symbol.iterator && f, p = e === "keys" && f, v = a[e](...r), g = i ? da : t ? nn : gi;
      return !t && kt(c, "iterate", p ? ha : Lr), dt(Object.create(v), {
        next() {
          const { value: I, done: C } = v.next();
          return C ? {
            value: I,
            done: C
          } : {
            value: h ? [
              g(I[0]),
              g(I[1])
            ] : g(I),
            done: C
          };
        }
      });
    };
  }
  function gs(e) {
    return function(...t) {
      return e === "delete" ? false : e === "clear" ? void 0 : this;
    };
  }
  function yd(e, t) {
    const i = {
      get(a) {
        const c = this.__v_raw, f = Ne(c), h = Ne(a);
        e || (zt(a, h) && kt(f, "get", a), kt(f, "get", h));
        const { has: p } = ps(f), v = t ? da : e ? nn : gi;
        if (p.call(f, a)) return v(c.get(a));
        if (p.call(f, h)) return v(c.get(h));
        c !== f && c.get(a);
      },
      get size() {
        const a = this.__v_raw;
        return !e && kt(Ne(a), "iterate", Lr), a.size;
      },
      has(a) {
        const c = this.__v_raw, f = Ne(c), h = Ne(a);
        return e || (zt(a, h) && kt(f, "has", a), kt(f, "has", h)), a === h ? c.has(a) : c.has(a) || c.has(h);
      },
      forEach(a, c) {
        const f = this, h = f.__v_raw, p = Ne(h), v = t ? da : e ? nn : gi;
        return !e && kt(p, "iterate", Lr), h.forEach((g, I) => a.call(c, v(g), v(I), f));
      }
    };
    return dt(i, e ? {
      add: gs("add"),
      set: gs("set"),
      delete: gs("delete"),
      clear: gs("clear")
    } : {
      add(a) {
        !t && !Ht(a) && !Ki(a) && (a = Ne(a));
        const c = Ne(this);
        return ps(c).has.call(c, a) || (c.add(a), zi(c, "add", a, a)), this;
      },
      set(a, c) {
        !t && !Ht(c) && !Ki(c) && (c = Ne(c));
        const f = Ne(this), { has: h, get: p } = ps(f);
        let v = h.call(f, a);
        v || (a = Ne(a), v = h.call(f, a));
        const g = p.call(f, a);
        return f.set(a, c), v ? zt(c, g) && zi(f, "set", a, c) : zi(f, "add", a, c), this;
      },
      delete(a) {
        const c = Ne(this), { has: f, get: h } = ps(c);
        let p = f.call(c, a);
        p || (a = Ne(a), p = f.call(c, a)), h && h.call(c, a);
        const v = c.delete(a);
        return p && zi(c, "delete", a, void 0), v;
      },
      clear() {
        const a = Ne(this), c = a.size !== 0, f = a.clear();
        return c && zi(a, "clear", void 0, void 0), f;
      }
    }), [
      "keys",
      "values",
      "entries",
      Symbol.iterator
    ].forEach((a) => {
      i[a] = wd(a, e, t);
    }), i;
  }
  function Xa(e, t) {
    const i = yd(e, t);
    return (r, a, c) => a === "__v_isReactive" ? !e : a === "__v_isReadonly" ? e : a === "__v_raw" ? r : Reflect.get(Ve(i, a) && a in r ? i : r, a, c);
  }
  const bd = {
    get: Xa(false, false)
  }, vd = {
    get: Xa(false, true)
  }, _d = {
    get: Xa(true, false)
  };
  const Fu = /* @__PURE__ */ new WeakMap(), Uu = /* @__PURE__ */ new WeakMap(), zu = /* @__PURE__ */ new WeakMap(), Ed = /* @__PURE__ */ new WeakMap();
  function Id(e) {
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
  function Sd(e) {
    return e.__v_skip || !Object.isExtensible(e) ? 0 : Id(qh(e));
  }
  bo = function(e) {
    return Ki(e) ? e : Qa(e, false, pd, bd, Fu);
  };
  Td = function(e) {
    return Qa(e, false, md, vd, Uu);
  };
  pa = function(e) {
    return Qa(e, true, gd, _d, zu);
  };
  function Qa(e, t, i, r, a) {
    if (!$e(e) || e.__v_raw && !(t && e.__v_isReactive)) return e;
    const c = Sd(e);
    if (c === 0) return e;
    const f = a.get(e);
    if (f) return f;
    const h = new Proxy(e, c === 2 ? r : i);
    return a.set(e, h), h;
  }
  function Bi(e) {
    return Ki(e) ? Bi(e.__v_raw) : !!(e && e.__v_isReactive);
  }
  function Ki(e) {
    return !!(e && e.__v_isReadonly);
  }
  function Ht(e) {
    return !!(e && e.__v_isShallow);
  }
  function vo(e) {
    return e ? !!e.__v_raw : false;
  }
  Ne = function(e) {
    const t = e && e.__v_raw;
    return t ? Ne(t) : e;
  };
  el = function(e) {
    return !Ve(e, "__v_skip") && Object.isExtensible(e) && vu(e, "__v_skip", true), e;
  };
  const gi = (e) => $e(e) ? bo(e) : e, nn = (e) => $e(e) ? pa(e) : e;
  ct = function(e) {
    return e ? e.__v_isRef === true : false;
  };
  qt = function(e) {
    return Gu(e, false);
  };
  Md = function(e) {
    return Gu(e, true);
  };
  function Gu(e, t) {
    return ct(e) ? e : new Pd(e, t);
  }
  class Pd {
    constructor(t, i) {
      this.dep = new wo(), this.__v_isRef = true, this.__v_isShallow = false, this._rawValue = i ? t : Ne(t), this._value = i ? t : gi(t), this.__v_isShallow = i;
    }
    get value() {
      return this.dep.track(), this._value;
    }
    set value(t) {
      const i = this._rawValue, r = this.__v_isShallow || Ht(t) || Ki(t);
      t = r ? t : Ne(t), zt(t, i) && (this._rawValue = t, this._value = r ? t : gi(t), this.dep.trigger());
    }
  }
  Xr = function(e) {
    return ct(e) ? e.value : e;
  };
  mv = function(e) {
    return Te(e) ? e() : Xr(e);
  };
  const kd = {
    get: (e, t, i) => t === "__v_raw" ? e : Xr(Reflect.get(e, t, i)),
    set: (e, t, i, r) => {
      const a = e[t];
      return ct(a) && !ct(i) ? (a.value = i, true) : Reflect.set(e, t, i, r);
    }
  };
  function $u(e) {
    return Bi(e) ? e : new Proxy(e, kd);
  }
  class Ad {
    constructor(t) {
      this.__v_isRef = true, this._value = void 0;
      const i = this.dep = new wo(), { get: r, set: a } = t(i.track.bind(i), i.trigger.bind(i));
      this._get = r, this._set = a;
    }
    get value() {
      return this._value = this._get();
    }
    set value(t) {
      this._set(t);
    }
  }
  function Rd(e) {
    return new Ad(e);
  }
  Cd = function(e) {
    const t = ve(e) ? new Array(e.length) : {};
    for (const i in e) t[i] = Bu(e, i);
    return t;
  };
  class Od {
    constructor(t, i, r) {
      this._object = t, this._key = i, this._defaultValue = r, this.__v_isRef = true, this._value = void 0, this._raw = Ne(t);
      let a = true, c = t;
      if (!ve(t) || !fo(String(i))) do
        a = !vo(c) || Ht(c);
      while (a && (c = c.__v_raw));
      this._shallow = a;
    }
    get value() {
      let t = this._object[this._key];
      return this._shallow && (t = Xr(t)), this._value = t === void 0 ? this._defaultValue : t;
    }
    set value(t) {
      if (this._shallow && ct(this._raw[this._key])) {
        const i = this._object[this._key];
        if (ct(i)) {
          i.value = t;
          return;
        }
      }
      this._object[this._key] = t;
    }
    get dep() {
      return ld(this._raw, this._key);
    }
  }
  class xd {
    constructor(t) {
      this._getter = t, this.__v_isRef = true, this.__v_isReadonly = true, this._value = void 0;
    }
    get value() {
      return this._value = this._getter();
    }
  }
  wv = function(e, t, i) {
    return ct(e) ? e : Te(e) ? new xd(e) : $e(e) && arguments.length > 1 ? Bu(e, t, i) : qt(e);
  };
  function Bu(e, t, i) {
    return new Od(e, t, i);
  }
  class Ld {
    constructor(t, i, r) {
      this.fn = t, this.setter = i, this._value = void 0, this.dep = new wo(this), this.__v_isRef = true, this.deps = void 0, this.depsTail = void 0, this.flags = 16, this.globalVersion = Jn - 1, this.next = void 0, this.effect = this, this.__v_isReadonly = !i, this.isSSR = r;
    }
    notify() {
      if (this.flags |= 16, !(this.flags & 8) && tt !== this) return Au(this, true), true;
    }
    get value() {
      const t = this.dep.track();
      return Ou(this), t && (t.version = this.dep.version), this._value;
    }
    set value(t) {
      this.setter && this.setter(t);
    }
  }
  function Nd(e, t, i = false) {
    let r, a;
    return Te(e) ? r = e : (r = e.get, a = e.set), new Ld(r, a, i);
  }
  const ms = {}, Gs = /* @__PURE__ */ new WeakMap();
  let Ar;
  function Dd(e, t = false, i = Ar) {
    if (i) {
      let r = Gs.get(i);
      r || Gs.set(i, r = []), r.push(e);
    }
  }
  function jd(e, t, i = Ue) {
    const { immediate: r, deep: a, once: c, scheduler: f, augmentJob: h, call: p } = i, v = ($) => a ? $ : Ht($) || a === false || a === 0 ? Gi($, 1) : Gi($);
    let g, I, C, A, F = false, x = false;
    if (ct(e) ? (I = () => e.value, F = Ht(e)) : Bi(e) ? (I = () => v(e), F = true) : ve(e) ? (x = true, F = e.some(($) => Bi($) || Ht($)), I = () => e.map(($) => {
      if (ct($)) return $.value;
      if (Bi($)) return v($);
      if (Te($)) return p ? p($, 2) : $();
    })) : Te(e) ? t ? I = p ? () => p(e, 2) : e : I = () => {
      if (C) {
        Vi();
        try {
          C();
        } finally {
          qi();
        }
      }
      const $ = Ar;
      Ar = g;
      try {
        return p ? p(e, 3, [
          A
        ]) : e(A);
      } finally {
        Ar = $;
      }
    } : I = fi, t && a) {
      const $ = I, ue = a === true ? 1 / 0 : a;
      I = () => Gi($(), ue);
    }
    const pe = Mu(), se = () => {
      g.stop(), pe && pe.active && qa(pe.effects, g);
    };
    if (c && t) {
      const $ = t;
      t = (...ue) => {
        $(...ue), se();
      };
    }
    let U = x ? new Array(e.length).fill(ms) : ms;
    const Y = ($) => {
      if (!(!(g.flags & 1) || !g.dirty && !$)) if (t) {
        const ue = g.run();
        if (a || F || (x ? ue.some((ge, re) => zt(ge, U[re])) : zt(ue, U))) {
          C && C();
          const ge = Ar;
          Ar = g;
          try {
            const re = [
              ue,
              U === ms ? void 0 : x && U[0] === ms ? [] : U,
              A
            ];
            U = ue, p ? p(t, 3, re) : t(...re);
          } finally {
            Ar = ge;
          }
        }
      } else g.run();
    };
    return h && h(Y), g = new Pu(I), g.scheduler = f ? () => f(Y, false) : Y, A = ($) => Dd($, false, g), C = g.onStop = () => {
      const $ = Gs.get(g);
      if ($) {
        if (p) p($, 4);
        else for (const ue of $) ue();
        Gs.delete(g);
      }
    }, t ? r ? Y(true) : U = g.run() : f ? f(Y.bind(null, true), true) : g.run(), se.pause = g.pause.bind(g), se.resume = g.resume.bind(g), se.stop = se, se;
  }
  function Gi(e, t = 1 / 0, i) {
    if (t <= 0 || !$e(e) || e.__v_skip || (i = i || /* @__PURE__ */ new Map(), (i.get(e) || 0) >= t)) return e;
    if (i.set(e, t), t--, ct(e)) Gi(e.value, t, i);
    else if (ve(e)) for (let r = 0; r < e.length; r++) Gi(e[r], t, i);
    else if (mu(e) || Yr(e)) e.forEach((r) => {
      Gi(r, t, i);
    });
    else if (bu(e)) {
      for (const r in e) Gi(e[r], t, i);
      for (const r of Object.getOwnPropertySymbols(e)) Object.prototype.propertyIsEnumerable.call(e, r) && Gi(e[r], t, i);
    }
    return e;
  }
  function ss(e, t, i, r) {
    try {
      return r ? e(...r) : e();
    } catch (a) {
      _o(a, t, i);
    }
  }
  function mi(e, t, i, r) {
    if (Te(e)) {
      const a = ss(e, t, i, r);
      return a && wu(a) && a.catch((c) => {
        _o(c, t, i);
      }), a;
    }
    if (ve(e)) {
      const a = [];
      for (let c = 0; c < e.length; c++) a.push(mi(e[c], t, i, r));
      return a;
    }
  }
  function _o(e, t, i, r = true) {
    const a = t ? t.vnode : null, { errorHandler: c, throwUnhandledErrorInProduction: f } = t && t.appContext.config || Ue;
    if (t) {
      let h = t.parent;
      const p = t.proxy, v = `https://vuejs.org/error-reference/#runtime-${i}`;
      for (; h; ) {
        const g = h.ec;
        if (g) {
          for (let I = 0; I < g.length; I++) if (g[I](e, p, v) === false) return;
        }
        h = h.parent;
      }
      if (c) {
        Vi(), ss(c, null, 10, [
          e,
          p,
          v
        ]), qi();
        return;
      }
    }
    Fd(e, i, a, r, f);
  }
  function Fd(e, t, i, r = true, a = false) {
    if (a) throw e;
    console.error(e);
  }
  const Dt = [];
  let Ei = -1;
  const Qr = [];
  let ar = null, Zr = 0;
  const Wu = Promise.resolve();
  let $s = null;
  Vu = function(e) {
    const t = $s || Wu;
    return e ? t.then(this ? e.bind(this) : e) : t;
  };
  function Ud(e) {
    let t = Ei + 1, i = Dt.length;
    for (; t < i; ) {
      const r = t + i >>> 1, a = Dt[r], c = Yn(a);
      c < e || c === e && a.flags & 2 ? t = r + 1 : i = r;
    }
    return t;
  }
  function tl(e) {
    if (!(e.flags & 1)) {
      const t = Yn(e), i = Dt[Dt.length - 1];
      !i || !(e.flags & 2) && t >= Yn(i) ? Dt.push(e) : Dt.splice(Ud(t), 0, e), e.flags |= 1, qu();
    }
  }
  function qu() {
    $s || ($s = Wu.then(Ju));
  }
  function Ku(e) {
    ve(e) ? Qr.push(...e) : ar && e.id === -1 ? ar.splice(Zr + 1, 0, e) : e.flags & 1 || (Qr.push(e), e.flags |= 1), qu();
  }
  function kl(e, t, i = Ei + 1) {
    for (; i < Dt.length; i++) {
      const r = Dt[i];
      if (r && r.flags & 2) {
        if (e && r.id !== e.uid) continue;
        Dt.splice(i, 1), i--, r.flags & 4 && (r.flags &= -2), r(), r.flags & 4 || (r.flags &= -2);
      }
    }
  }
  function Zu(e) {
    if (Qr.length) {
      const t = [
        ...new Set(Qr)
      ].sort((i, r) => Yn(i) - Yn(r));
      if (Qr.length = 0, ar) {
        ar.push(...t);
        return;
      }
      for (ar = t, Zr = 0; Zr < ar.length; Zr++) {
        const i = ar[Zr];
        i.flags & 4 && (i.flags &= -2), i.flags & 8 || i(), i.flags &= -2;
      }
      ar = null, Zr = 0;
    }
  }
  const Yn = (e) => e.id == null ? e.flags & 2 ? -1 : 1 / 0 : e.id;
  function Ju(e) {
    try {
      for (Ei = 0; Ei < Dt.length; Ei++) {
        const t = Dt[Ei];
        t && !(t.flags & 8) && (t.flags & 4 && (t.flags &= -2), ss(t, t.i, t.i ? 15 : 14), t.flags & 4 || (t.flags &= -2));
      }
    } finally {
      for (; Ei < Dt.length; Ei++) {
        const t = Dt[Ei];
        t && (t.flags &= -2);
      }
      Ei = -1, Dt.length = 0, Zu(), $s = null, (Dt.length || Qr.length) && Ju();
    }
  }
  let It = null, Hu = null;
  function Bs(e) {
    const t = It;
    return It = e, Hu = e && e.type.__scopeId || null, t;
  }
  zd = function(e, t = It, i) {
    if (!t || e._n) return e;
    const r = (...a) => {
      r._d && Js(-1);
      const c = Bs(t);
      let f;
      try {
        f = e(...a);
      } finally {
        Bs(c), r._d && Js(1);
      }
      return f;
    };
    return r._n = true, r._c = true, r._d = true, r;
  };
  yv = function(e, t) {
    if (It === null) return e;
    const i = Po(It), r = e.dirs || (e.dirs = []);
    for (let a = 0; a < t.length; a++) {
      let [c, f, h, p = Ue] = t[a];
      c && (Te(c) && (c = {
        mounted: c,
        updated: c
      }), c.deep && Gi(f), r.push({
        dir: c,
        instance: i,
        value: f,
        oldValue: void 0,
        arg: h,
        modifiers: p
      }));
    }
    return e;
  };
  function _r(e, t, i, r) {
    const a = e.dirs, c = t && t.dirs;
    for (let f = 0; f < a.length; f++) {
      const h = a[f];
      c && (h.oldValue = c[f].value);
      let p = h.dir[r];
      p && (Vi(), mi(p, i, 8, [
        e.el,
        h,
        e,
        t
      ]), qi());
    }
  }
  Gd = function(e, t) {
    if (Rt) {
      let i = Rt.provides;
      const r = Rt.parent && Rt.parent.provides;
      r === i && (i = Rt.provides = Object.create(r)), i[e] = t;
    }
  };
  Un = function(e, t, i = false) {
    const r = gr();
    if (r || Nr) {
      let a = Nr ? Nr._context.provides : r ? r.parent == null || r.ce ? r.vnode.appContext && r.vnode.appContext.provides : r.parent.provides : void 0;
      if (a && e in a) return a[e];
      if (arguments.length > 1) return i && Te(t) ? t.call(r && r.proxy) : t;
    }
  };
  $d = function() {
    return !!(gr() || Nr);
  };
  const Bd = /* @__PURE__ */ Symbol.for("v-scx"), Wd = () => Un(Bd);
  bv = function(e, t) {
    return Eo(e, null, t);
  };
  function Vd(e, t) {
    return Eo(e, null, {
      flush: "sync"
    });
  }
  en = function(e, t, i) {
    return Eo(e, t, i);
  };
  function Eo(e, t, i = Ue) {
    const { immediate: r, deep: a, flush: c, once: f } = i, h = dt({}, i), p = t && r || !t && c !== "post";
    let v;
    if (es) {
      if (c === "sync") {
        const A = Wd();
        v = A.__watcherHandles || (A.__watcherHandles = []);
      } else if (!p) {
        const A = () => {
        };
        return A.stop = fi, A.resume = fi, A.pause = fi, A;
      }
    }
    const g = Rt;
    h.call = (A, F, x) => mi(A, g, F, x);
    let I = false;
    c === "post" ? h.scheduler = (A) => {
      mt(A, g && g.suspense);
    } : c !== "sync" && (I = true, h.scheduler = (A, F) => {
      F ? A() : tl(A);
    }), h.augmentJob = (A) => {
      t && (A.flags |= 4), I && (A.flags |= 2, g && (A.id = g.uid, A.i = g));
    };
    const C = jd(e, t, h);
    return es && (v ? v.push(C) : p && C()), C;
  }
  function qd(e, t, i) {
    const r = this.proxy, a = lt(e) ? e.includes(".") ? Yu(r, e) : () => r[e] : e.bind(r, r);
    let c;
    Te(t) ? c = t : (c = t.handler, i = t);
    const f = as(this), h = Eo(a, c.bind(r), i);
    return f(), h;
  }
  function Yu(e, t) {
    const i = t.split(".");
    return () => {
      let r = e;
      for (let a = 0; a < i.length && r; a++) r = r[i[a]];
      return r;
    };
  }
  const Xu = /* @__PURE__ */ Symbol("_vte"), Qu = (e) => e.__isTeleport, zn = (e) => e && (e.disabled || e.disabled === ""), Al = (e) => e && (e.defer || e.defer === ""), Rl = (e) => typeof SVGElement < "u" && e instanceof SVGElement, Cl = (e) => typeof MathMLElement == "function" && e instanceof MathMLElement, ga = (e, t) => {
    const i = e && e.to;
    return lt(i) ? t ? t(i) : null : i;
  }, ef = {
    name: "Teleport",
    __isTeleport: true,
    process(e, t, i, r, a, c, f, h, p, v) {
      const { mc: g, pc: I, pbc: C, o: { insert: A, querySelector: F, createText: x, createComment: pe } } = v, se = zn(t.props);
      let { shapeFlag: U, children: Y, dynamicChildren: $ } = t;
      if (e == null) {
        const ue = t.el = x(""), ge = t.anchor = x("");
        A(ue, i, r), A(ge, i, r);
        const re = (Q, me) => {
          U & 16 && g(Y, Q, me, a, c, f, h, p);
        }, fe = () => {
          const Q = t.target = ga(t.props, F), me = ma(Q, t, x, A);
          Q && (f !== "svg" && Rl(Q) ? f = "svg" : f !== "mathml" && Cl(Q) && (f = "mathml"), a && a.isCE && (a.ce._teleportTargets || (a.ce._teleportTargets = /* @__PURE__ */ new Set())).add(Q), se || (re(Q, me), As(t, false)));
        };
        se && (re(i, ge), As(t, true)), Al(t.props) ? (t.el.__isMounted = false, mt(() => {
          fe(), delete t.el.__isMounted;
        }, c)) : fe();
      } else {
        if (Al(t.props) && e.el.__isMounted === false) {
          mt(() => {
            ef.process(e, t, i, r, a, c, f, h, p, v);
          }, c);
          return;
        }
        t.el = e.el, t.targetStart = e.targetStart;
        const ue = t.anchor = e.anchor, ge = t.target = e.target, re = t.targetAnchor = e.targetAnchor, fe = zn(e.props), Q = fe ? i : ge, me = fe ? ue : re;
        if (f === "svg" || Rl(ge) ? f = "svg" : (f === "mathml" || Cl(ge)) && (f = "mathml"), $ ? (C(e.dynamicChildren, $, Q, a, c, f, h), ll(e, t, true)) : p || I(e, t, Q, me, a, c, f, h, false), se) fe ? t.props && e.props && t.props.to !== e.props.to && (t.props.to = e.props.to) : ws(t, i, ue, v, 1);
        else if ((t.props && t.props.to) !== (e.props && e.props.to)) {
          const ke = t.target = ga(t.props, F);
          ke && ws(t, ke, null, v, 0);
        } else fe && ws(t, ge, re, v, 1);
        As(t, se);
      }
    },
    remove(e, t, i, { um: r, o: { remove: a } }, c) {
      const { shapeFlag: f, children: h, anchor: p, targetStart: v, targetAnchor: g, target: I, props: C } = e;
      if (I && (a(v), a(g)), c && a(p), f & 16) {
        const A = c || !zn(C);
        for (let F = 0; F < h.length; F++) {
          const x = h[F];
          r(x, t, i, A, !!x.dynamicChildren);
        }
      }
    },
    move: ws,
    hydrate: Kd
  };
  function ws(e, t, i, { o: { insert: r }, m: a }, c = 2) {
    c === 0 && r(e.targetAnchor, t, i);
    const { el: f, anchor: h, shapeFlag: p, children: v, props: g } = e, I = c === 2;
    if (I && r(f, t, i), (!I || zn(g)) && p & 16) for (let C = 0; C < v.length; C++) a(v[C], t, i, 2);
    I && r(h, t, i);
  }
  function Kd(e, t, i, r, a, c, { o: { nextSibling: f, parentNode: h, querySelector: p, insert: v, createText: g } }, I) {
    function C(pe, se) {
      let U = se;
      for (; U; ) {
        if (U && U.nodeType === 8) {
          if (U.data === "teleport start anchor") t.targetStart = U;
          else if (U.data === "teleport anchor") {
            t.targetAnchor = U, pe._lpa = t.targetAnchor && f(t.targetAnchor);
            break;
          }
        }
        U = f(U);
      }
    }
    function A(pe, se) {
      se.anchor = I(f(pe), se, h(pe), i, r, a, c);
    }
    const F = t.target = ga(t.props, p), x = zn(t.props);
    if (F) {
      const pe = F._lpa || F.firstChild;
      t.shapeFlag & 16 && (x ? (A(e, t), C(F, pe), t.targetAnchor || ma(F, t, g, v, h(e) === F ? e : null)) : (t.anchor = f(e), C(F, pe), t.targetAnchor || ma(F, t, g, v), I(pe && f(pe), t, F, i, r, a, c))), As(t, x);
    } else x && t.shapeFlag & 16 && (A(e, t), t.targetStart = e, t.targetAnchor = f(e));
    return t.anchor && f(t.anchor);
  }
  vv = ef;
  function As(e, t) {
    const i = e.ctx;
    if (i && i.ut) {
      let r, a;
      for (t ? (r = e.el, a = e.anchor) : (r = e.targetStart, a = e.targetAnchor); r && r !== a; ) r.nodeType === 1 && r.setAttribute("data-v-owner", i.uid), r = r.nextSibling;
      i.ut();
    }
  }
  function ma(e, t, i, r, a = null) {
    const c = t.targetStart = i(""), f = t.targetAnchor = i("");
    return c[Xu] = f, e && (r(c, e, a), r(f, e, a)), f;
  }
  const Si = /* @__PURE__ */ Symbol("_leaveCb"), In = /* @__PURE__ */ Symbol("_enterCb");
  function tf() {
    const e = {
      isMounted: false,
      isLeaving: false,
      isUnmounting: false,
      leavingVNodes: /* @__PURE__ */ new Map()
    };
    return os(() => {
      e.isMounted = true;
    }), nl(() => {
      e.isUnmounting = true;
    }), e;
  }
  const ti = [
    Function,
    Array
  ], rf = {
    mode: String,
    appear: Boolean,
    persisted: Boolean,
    onBeforeEnter: ti,
    onEnter: ti,
    onAfterEnter: ti,
    onEnterCancelled: ti,
    onBeforeLeave: ti,
    onLeave: ti,
    onAfterLeave: ti,
    onLeaveCancelled: ti,
    onBeforeAppear: ti,
    onAppear: ti,
    onAfterAppear: ti,
    onAppearCancelled: ti
  }, nf = (e) => {
    const t = e.subTree;
    return t.component ? nf(t.component) : t;
  }, Zd = {
    name: "BaseTransition",
    props: rf,
    setup(e, { slots: t }) {
      const i = gr(), r = tf();
      return () => {
        const a = t.default && il(t.default(), true);
        if (!a || !a.length) return;
        const c = sf(a), f = Ne(e), { mode: h } = f;
        if (r.isLeaving) return Wo(c);
        const p = Ol(c);
        if (!p) return Wo(c);
        let v = Xn(p, f, r, i, (I) => v = I);
        p.type !== Et && dr(p, v);
        let g = i.subTree && Ol(i.subTree);
        if (g && g.type !== Et && !lr(g, p) && nf(i).type !== Et) {
          let I = Xn(g, f, r, i);
          if (dr(g, I), h === "out-in" && p.type !== Et) return r.isLeaving = true, I.afterLeave = () => {
            r.isLeaving = false, i.job.flags & 8 || i.update(), delete I.afterLeave, g = void 0;
          }, Wo(c);
          h === "in-out" && p.type !== Et ? I.delayLeave = (C, A, F) => {
            const x = of(r, g);
            x[String(g.key)] = g, C[Si] = () => {
              A(), C[Si] = void 0, delete v.delayedLeave, g = void 0;
            }, v.delayedLeave = () => {
              F(), delete v.delayedLeave, g = void 0;
            };
          } : g = void 0;
        } else g && (g = void 0);
        return c;
      };
    }
  };
  function sf(e) {
    let t = e[0];
    if (e.length > 1) {
      for (const i of e) if (i.type !== Et) {
        t = i;
        break;
      }
    }
    return t;
  }
  const Jd = Zd;
  function of(e, t) {
    const { leavingVNodes: i } = e;
    let r = i.get(t.type);
    return r || (r = /* @__PURE__ */ Object.create(null), i.set(t.type, r)), r;
  }
  function Xn(e, t, i, r, a) {
    const { appear: c, mode: f, persisted: h = false, onBeforeEnter: p, onEnter: v, onAfterEnter: g, onEnterCancelled: I, onBeforeLeave: C, onLeave: A, onAfterLeave: F, onLeaveCancelled: x, onBeforeAppear: pe, onAppear: se, onAfterAppear: U, onAppearCancelled: Y } = t, $ = String(e.key), ue = of(i, e), ge = (Q, me) => {
      Q && mi(Q, r, 9, me);
    }, re = (Q, me) => {
      const ke = me[1];
      ge(Q, me), ve(Q) ? Q.every((he) => he.length <= 1) && ke() : Q.length <= 1 && ke();
    }, fe = {
      mode: f,
      persisted: h,
      beforeEnter(Q) {
        let me = p;
        if (!i.isMounted) if (c) me = pe || p;
        else return;
        Q[Si] && Q[Si](true);
        const ke = ue[$];
        ke && lr(e, ke) && ke.el[Si] && ke.el[Si](), ge(me, [
          Q
        ]);
      },
      enter(Q) {
        let me = v, ke = g, he = I;
        if (!i.isMounted) if (c) me = se || v, ke = U || g, he = Y || I;
        else return;
        let Be = false;
        Q[In] = ($t) => {
          Be || (Be = true, $t ? ge(he, [
            Q
          ]) : ge(ke, [
            Q
          ]), fe.delayedLeave && fe.delayedLeave(), Q[In] = void 0);
        };
        const pt = Q[In].bind(null, false);
        me ? re(me, [
          Q,
          pt
        ]) : pt();
      },
      leave(Q, me) {
        const ke = String(e.key);
        if (Q[In] && Q[In](true), i.isUnmounting) return me();
        ge(C, [
          Q
        ]);
        let he = false;
        Q[Si] = (pt) => {
          he || (he = true, me(), pt ? ge(x, [
            Q
          ]) : ge(F, [
            Q
          ]), Q[Si] = void 0, ue[ke] === e && delete ue[ke]);
        };
        const Be = Q[Si].bind(null, false);
        ue[ke] = e, A ? re(A, [
          Q,
          Be
        ]) : Be();
      },
      clone(Q) {
        const me = Xn(Q, t, i, r, a);
        return a && a(me), me;
      }
    };
    return fe;
  }
  function Wo(e) {
    if (Io(e)) return e = Zi(e), e.children = null, e;
  }
  function Ol(e) {
    if (!Io(e)) return Qu(e.type) && e.children ? sf(e.children) : e;
    if (e.component) return e.component.subTree;
    const { shapeFlag: t, children: i } = e;
    if (i) {
      if (t & 16) return i[0];
      if (t & 32 && Te(i.default)) return i.default();
    }
  }
  function dr(e, t) {
    e.shapeFlag & 6 && e.component ? (e.transition = t, dr(e.component.subTree, t)) : e.shapeFlag & 128 ? (e.ssContent.transition = t.clone(e.ssContent), e.ssFallback.transition = t.clone(e.ssFallback)) : e.transition = t;
  }
  function il(e, t = false, i) {
    let r = [], a = 0;
    for (let c = 0; c < e.length; c++) {
      let f = e[c];
      const h = i == null ? f.key : String(i) + String(f.key != null ? f.key : c);
      f.type === At ? (f.patchFlag & 128 && a++, r = r.concat(il(f.children, t, h))) : (t || f.type !== Et) && r.push(h != null ? Zi(f, {
        key: h
      }) : f);
    }
    if (a > 1) for (let c = 0; c < r.length; c++) r[c].patchFlag = -2;
    return r;
  }
  Hd = function(e, t) {
    return Te(e) ? dt({
      name: e.name
    }, t, {
      setup: e
    }) : e;
  };
  function af(e) {
    e.ids = [
      e.ids[0] + e.ids[2]++ + "-",
      0,
      0
    ];
  }
  _v = function(e) {
    const t = gr(), i = Md(null);
    if (t) {
      const a = t.refs === Ue ? t.refs = {} : t.refs;
      Object.defineProperty(a, e, {
        enumerable: true,
        get: () => i.value,
        set: (c) => i.value = c
      });
    }
    return i;
  };
  function xl(e, t) {
    let i;
    return !!((i = Object.getOwnPropertyDescriptor(e, t)) && !i.configurable);
  }
  const Ws = /* @__PURE__ */ new WeakMap();
  function Gn(e, t, i, r, a = false) {
    if (ve(e)) {
      e.forEach((x, pe) => Gn(x, t && (ve(t) ? t[pe] : t), i, r, a));
      return;
    }
    if (fr(r) && !a) {
      r.shapeFlag & 512 && r.type.__asyncResolved && r.component.subTree.component && Gn(e, t, i, r.component.subTree);
      return;
    }
    const c = r.shapeFlag & 4 ? Po(r.component) : r.el, f = a ? null : c, { i: h, r: p } = e, v = t && t.r, g = h.refs === Ue ? h.refs = {} : h.refs, I = h.setupState, C = Ne(I), A = I === Ue ? gu : (x) => xl(g, x) ? false : Ve(C, x), F = (x, pe) => !(pe && xl(g, pe));
    if (v != null && v !== p) {
      if (Ll(t), lt(v)) g[v] = null, A(v) && (I[v] = null);
      else if (ct(v)) {
        const x = t;
        F(v, x.k) && (v.value = null), x.k && (g[x.k] = null);
      }
    }
    if (Te(p)) ss(p, h, 12, [
      f,
      g
    ]);
    else {
      const x = lt(p), pe = ct(p);
      if (x || pe) {
        const se = () => {
          if (e.f) {
            const U = x ? A(p) ? I[p] : g[p] : F() || !e.k ? p.value : g[e.k];
            if (a) ve(U) && qa(U, c);
            else if (ve(U)) U.includes(c) || U.push(c);
            else if (x) g[p] = [
              c
            ], A(p) && (I[p] = g[p]);
            else {
              const Y = [
                c
              ];
              F(p, e.k) && (p.value = Y), e.k && (g[e.k] = Y);
            }
          } else x ? (g[p] = f, A(p) && (I[p] = f)) : pe && (F(p, e.k) && (p.value = f), e.k && (g[e.k] = f));
        };
        if (f) {
          const U = () => {
            se(), Ws.delete(e);
          };
          U.id = -1, Ws.set(e, U), mt(U, i);
        } else Ll(e), se();
      }
    }
  }
  function Ll(e) {
    const t = Ws.get(e);
    t && (t.flags |= 8, Ws.delete(e));
  }
  go().requestIdleCallback;
  go().cancelIdleCallback;
  let fr, Io, Yd;
  fr = (e) => !!e.type.__asyncLoader;
  Io = (e) => e.type.__isKeepAlive;
  Yd = {
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
      const i = gr(), r = i.ctx;
      if (!r.renderer) return () => {
        const U = t.default && t.default();
        return U && U.length === 1 ? U[0] : U;
      };
      const a = /* @__PURE__ */ new Map(), c = /* @__PURE__ */ new Set();
      let f = null;
      const h = i.suspense, { renderer: { p, m: v, um: g, o: { createElement: I } } } = r, C = I("div");
      r.activate = (U, Y, $, ue, ge) => {
        const re = U.component;
        v(U, Y, $, 0, h), p(re.vnode, U, Y, $, re, h, ue, U.slotScopeIds, ge), mt(() => {
          re.isDeactivated = false, re.a && Dn(re.a);
          const fe = U.props && U.props.onVnodeMounted;
          fe && ri(fe, re.parent, U);
        }, h);
      }, r.deactivate = (U) => {
        const Y = U.component;
        Ks(Y.m), Ks(Y.a), v(U, C, null, 1, h), mt(() => {
          Y.da && Dn(Y.da);
          const $ = U.props && U.props.onVnodeUnmounted;
          $ && ri($, Y.parent, U), Y.isDeactivated = true;
        }, h);
      };
      function A(U) {
        Vo(U), g(U, i, h, true);
      }
      function F(U) {
        a.forEach((Y, $) => {
          const ue = Ia(fr(Y) ? Y.type.__asyncResolved || {} : Y.type);
          ue && !U(ue) && x($);
        });
      }
      function x(U) {
        const Y = a.get(U);
        Y && (!f || !lr(Y, f)) ? A(Y) : f && Vo(f), a.delete(U), c.delete(U);
      }
      en(() => [
        e.include,
        e.exclude
      ], ([U, Y]) => {
        U && F(($) => Cn(U, $)), Y && F(($) => !Cn(Y, $));
      }, {
        flush: "post",
        deep: true
      });
      let pe = null;
      const se = () => {
        pe != null && (Zs(i.subTree.type) ? mt(() => {
          a.set(pe, ys(i.subTree));
        }, i.subTree.suspense) : a.set(pe, ys(i.subTree)));
      };
      return os(se), rl(se), nl(() => {
        a.forEach((U) => {
          const { subTree: Y, suspense: $ } = i, ue = ys(Y);
          if (U.type === ue.type && U.key === ue.key) {
            Vo(ue);
            const ge = ue.component.da;
            ge && mt(ge, $);
            return;
          }
          A(U);
        });
      }), () => {
        if (pe = null, !t.default) return f = null;
        const U = t.default(), Y = U[0];
        if (U.length > 1) return f = null, U;
        if (!sn(Y) || !(Y.shapeFlag & 4) && !(Y.shapeFlag & 128)) return f = null, Y;
        let $ = ys(Y);
        if ($.type === Et) return f = null, $;
        const ue = $.type, ge = Ia(fr($) ? $.type.__asyncResolved || {} : ue), { include: re, exclude: fe, max: Q } = e;
        if (re && (!ge || !Cn(re, ge)) || fe && ge && Cn(fe, ge)) return $.shapeFlag &= -257, f = $, Y;
        const me = $.key == null ? ue : $.key, ke = a.get(me);
        return $.el && ($ = Zi($), Y.shapeFlag & 128 && (Y.ssContent = $)), pe = me, ke ? ($.el = ke.el, $.component = ke.component, $.transition && dr($, $.transition), $.shapeFlag |= 512, c.delete(me), c.add(me)) : (c.add(me), Q && c.size > parseInt(Q, 10) && x(c.values().next().value)), $.shapeFlag |= 256, f = $, Zs(Y.type) ? Y : $;
      };
    }
  };
  Ev = Yd;
  function Cn(e, t) {
    return ve(e) ? e.some((i) => Cn(i, t)) : lt(e) ? e.split(",").includes(t) : Vh(e) ? (e.lastIndex = 0, e.test(t)) : false;
  }
  Xd = function(e, t) {
    lf(e, "a", t);
  };
  Qd = function(e, t) {
    lf(e, "da", t);
  };
  function lf(e, t, i = Rt) {
    const r = e.__wdc || (e.__wdc = () => {
      let a = i;
      for (; a; ) {
        if (a.isDeactivated) return;
        a = a.parent;
      }
      return e();
    });
    if (So(t, r, i), i) {
      let a = i.parent;
      for (; a && a.parent; ) Io(a.parent.vnode) && ep(r, t, i, a), a = a.parent;
    }
  }
  function ep(e, t, i, r) {
    const a = So(t, e, r, true);
    sl(() => {
      qa(r[t], a);
    }, i);
  }
  function Vo(e) {
    e.shapeFlag &= -257, e.shapeFlag &= -513;
  }
  function ys(e) {
    return e.shapeFlag & 128 ? e.ssContent : e;
  }
  function So(e, t, i = Rt, r = false) {
    if (i) {
      const a = i[e] || (i[e] = []), c = t.__weh || (t.__weh = (...f) => {
        Vi();
        const h = as(i), p = mi(t, i, e, f);
        return h(), qi(), p;
      });
      return r ? a.unshift(c) : a.push(c), c;
    }
  }
  let Yi, cf, rl, ip, rp, np;
  Yi = (e) => (t, i = Rt) => {
    (!es || e === "sp") && So(e, (...r) => t(...r), i);
  };
  tp = Yi("bm");
  os = Yi("m");
  cf = Yi("bu");
  rl = Yi("u");
  nl = Yi("bum");
  sl = Yi("um");
  ip = Yi("sp");
  rp = Yi("rtg");
  np = Yi("rtc");
  function sp(e, t = Rt) {
    So("ec", e, t);
  }
  const op = "components", uf = /* @__PURE__ */ Symbol.for("v-ndc");
  Iv = function(e) {
    return lt(e) ? ap(op, e, false) || e : e || uf;
  };
  function ap(e, t, i = true, r = false) {
    const a = It || Rt;
    if (a) {
      const c = a.type;
      {
        const h = Ia(c, false);
        if (h && (h === t || h === Yt(t) || h === po(Yt(t)))) return c;
      }
      const f = Nl(a[e] || c[e], t) || Nl(a.appContext[e], t);
      return !f && r ? c : f;
    }
  }
  function Nl(e, t) {
    return e && (e[t] || e[Yt(t)] || e[po(Yt(t))]);
  }
  lp = function(e, t, i, r) {
    let a;
    const c = i, f = ve(e);
    if (f || lt(e)) {
      const h = f && Bi(e);
      let p = false, v = false;
      h && (p = !Ht(e), v = Ki(e), e = yo(e)), a = new Array(e.length);
      for (let g = 0, I = e.length; g < I; g++) a[g] = t(p ? v ? nn(gi(e[g])) : gi(e[g]) : e[g], g, void 0, c);
    } else if (typeof e == "number") {
      a = new Array(e);
      for (let h = 0; h < e; h++) a[h] = t(h + 1, h, void 0, c);
    } else if ($e(e)) if (e[Symbol.iterator]) a = Array.from(e, (h, p) => t(h, p, void 0, c));
    else {
      const h = Object.keys(e);
      a = new Array(h.length);
      for (let p = 0, v = h.length; p < v; p++) {
        const g = h[p];
        a[p] = t(e[g], g, p, c);
      }
    }
    else a = [];
    return a;
  };
  Sv = function(e, t) {
    for (let i = 0; i < t.length; i++) {
      const r = t[i];
      if (ve(r)) for (let a = 0; a < r.length; a++) e[r[a].name] = r[a].fn;
      else r && (e[r.name] = r.key ? (...a) => {
        const c = r.fn(...a);
        return c && (c.key = r.key), c;
      } : r.fn);
    }
    return e;
  };
  Tv = function(e, t, i = {}, r, a) {
    if (It.ce || It.parent && fr(It.parent) && It.parent.ce) {
      const v = Object.keys(i).length > 0;
      return t !== "default" && (i.name = t), ni(), _a(At, null, [
        Ct("slot", i, r && r())
      ], v ? -2 : 64);
    }
    let c = e[t];
    c && c._c && (c._d = false), ni();
    const f = c && ff(c(i)), h = i.key || f && f.key, p = _a(At, {
      key: (h && !pi(h) ? h : `_${t}`) + (!f && r ? "_fb" : "")
    }, f || (r ? r() : []), f && e._ === 1 ? 64 : -2);
    return !a && p.scopeId && (p.slotScopeIds = [
      p.scopeId + "-s"
    ]), c && c._c && (c._d = true), p;
  };
  function ff(e) {
    return e.some((t) => sn(t) ? !(t.type === Et || t.type === At && !ff(t.children)) : true) ? e : null;
  }
  const wa = (e) => e ? Rf(e) ? Po(e) : wa(e.parent) : null, $n = dt(/* @__PURE__ */ Object.create(null), {
    $: (e) => e,
    $el: (e) => e.vnode.el,
    $data: (e) => e.data,
    $props: (e) => e.props,
    $attrs: (e) => e.attrs,
    $slots: (e) => e.slots,
    $refs: (e) => e.refs,
    $parent: (e) => wa(e.parent),
    $root: (e) => wa(e.root),
    $host: (e) => e.ce,
    $emit: (e) => e.emit,
    $options: (e) => df(e),
    $forceUpdate: (e) => e.f || (e.f = () => {
      tl(e.update);
    }),
    $nextTick: (e) => e.n || (e.n = Vu.bind(e.proxy)),
    $watch: (e) => qd.bind(e)
  }), qo = (e, t) => e !== Ue && !e.__isScriptSetup && Ve(e, t), cp = {
    get({ _: e }, t) {
      if (t === "__v_skip") return true;
      const { ctx: i, setupState: r, data: a, props: c, accessCache: f, type: h, appContext: p } = e;
      if (t[0] !== "$") {
        const C = f[t];
        if (C !== void 0) switch (C) {
          case 1:
            return r[t];
          case 2:
            return a[t];
          case 4:
            return i[t];
          case 3:
            return c[t];
        }
        else {
          if (qo(r, t)) return f[t] = 1, r[t];
          if (a !== Ue && Ve(a, t)) return f[t] = 2, a[t];
          if (Ve(c, t)) return f[t] = 3, c[t];
          if (i !== Ue && Ve(i, t)) return f[t] = 4, i[t];
          ya && (f[t] = 0);
        }
      }
      const v = $n[t];
      let g, I;
      if (v) return t === "$attrs" && kt(e.attrs, "get", ""), v(e);
      if ((g = h.__cssModules) && (g = g[t])) return g;
      if (i !== Ue && Ve(i, t)) return f[t] = 4, i[t];
      if (I = p.config.globalProperties, Ve(I, t)) return I[t];
    },
    set({ _: e }, t, i) {
      const { data: r, setupState: a, ctx: c } = e;
      return qo(a, t) ? (a[t] = i, true) : r !== Ue && Ve(r, t) ? (r[t] = i, true) : Ve(e.props, t) || t[0] === "$" && t.slice(1) in e ? false : (c[t] = i, true);
    },
    has({ _: { data: e, setupState: t, accessCache: i, ctx: r, appContext: a, props: c, type: f } }, h) {
      let p;
      return !!(i[h] || e !== Ue && h[0] !== "$" && Ve(e, h) || qo(t, h) || Ve(c, h) || Ve(r, h) || Ve($n, h) || Ve(a.config.globalProperties, h) || (p = f.__cssModules) && p[h]);
    },
    defineProperty(e, t, i) {
      return i.get != null ? e._.accessCache[t] = 0 : Ve(i, "value") && this.set(e, t, i.value, null), Reflect.defineProperty(e, t, i);
    }
  };
  function Vs(e) {
    return ve(e) ? e.reduce((t, i) => (t[i] = null, t), {}) : e;
  }
  Mv = function(e, t) {
    return !e || !t ? e || t : ve(e) && ve(t) ? e.concat(t) : dt({}, Vs(e), Vs(t));
  };
  let ya = true;
  function up(e) {
    const t = df(e), i = e.proxy, r = e.ctx;
    ya = false, t.beforeCreate && Dl(t.beforeCreate, e, "bc");
    const { data: a, computed: c, methods: f, watch: h, provide: p, inject: v, created: g, beforeMount: I, mounted: C, beforeUpdate: A, updated: F, activated: x, deactivated: pe, beforeDestroy: se, beforeUnmount: U, destroyed: Y, unmounted: $, render: ue, renderTracked: ge, renderTriggered: re, errorCaptured: fe, serverPrefetch: Q, expose: me, inheritAttrs: ke, components: he, directives: Be, filters: pt } = t;
    if (v && fp(v, r, null), f) for (const Re in f) {
      const Ze = f[Re];
      Te(Ze) && (r[Re] = Ze.bind(i));
    }
    if (a) {
      const Re = a.call(i, i);
      $e(Re) && (e.data = bo(Re));
    }
    if (ya = true, c) for (const Re in c) {
      const Ze = c[Re], Ai = Te(Ze) ? Ze.bind(i, i) : Te(Ze.get) ? Ze.get.bind(i, i) : fi, Ur = !Te(Ze) && Te(Ze.set) ? Ze.set.bind(i) : fi, Ri = ul({
        get: Ai,
        set: Ur
      });
      Object.defineProperty(r, Re, {
        enumerable: true,
        configurable: true,
        get: () => Ri.value,
        set: (_e) => Ri.value = _e
      });
    }
    if (h) for (const Re in h) hf(h[Re], r, i, Re);
    if (p) {
      const Re = Te(p) ? p.call(i) : p;
      Reflect.ownKeys(Re).forEach((Ze) => {
        Gd(Ze, Re[Ze]);
      });
    }
    g && Dl(g, e, "c");
    function Xe(Re, Ze) {
      ve(Ze) ? Ze.forEach((Ai) => Re(Ai.bind(i))) : Ze && Re(Ze.bind(i));
    }
    if (Xe(tp, I), Xe(os, C), Xe(cf, A), Xe(rl, F), Xe(Xd, x), Xe(Qd, pe), Xe(sp, fe), Xe(np, ge), Xe(rp, re), Xe(nl, U), Xe(sl, $), Xe(ip, Q), ve(me)) if (me.length) {
      const Re = e.exposed || (e.exposed = {});
      me.forEach((Ze) => {
        Object.defineProperty(Re, Ze, {
          get: () => i[Ze],
          set: (Ai) => i[Ze] = Ai,
          enumerable: true
        });
      });
    } else e.exposed || (e.exposed = {});
    ue && e.render === fi && (e.render = ue), ke != null && (e.inheritAttrs = ke), he && (e.components = he), Be && (e.directives = Be), Q && af(e);
  }
  function fp(e, t, i = fi) {
    ve(e) && (e = ba(e));
    for (const r in e) {
      const a = e[r];
      let c;
      $e(a) ? "default" in a ? c = Un(a.from || r, a.default, true) : c = Un(a.from || r) : c = Un(a), ct(c) ? Object.defineProperty(t, r, {
        enumerable: true,
        configurable: true,
        get: () => c.value,
        set: (f) => c.value = f
      }) : t[r] = c;
    }
  }
  function Dl(e, t, i) {
    mi(ve(e) ? e.map((r) => r.bind(t.proxy)) : e.bind(t.proxy), t, i);
  }
  function hf(e, t, i, r) {
    let a = r.includes(".") ? Yu(i, r) : () => i[r];
    if (lt(e)) {
      const c = t[e];
      Te(c) && en(a, c);
    } else if (Te(e)) en(a, e.bind(i));
    else if ($e(e)) if (ve(e)) e.forEach((c) => hf(c, t, i, r));
    else {
      const c = Te(e.handler) ? e.handler.bind(i) : t[e.handler];
      Te(c) && en(a, c, e);
    }
  }
  function df(e) {
    const t = e.type, { mixins: i, extends: r } = t, { mixins: a, optionsCache: c, config: { optionMergeStrategies: f } } = e.appContext, h = c.get(t);
    let p;
    return h ? p = h : !a.length && !i && !r ? p = t : (p = {}, a.length && a.forEach((v) => qs(p, v, f, true)), qs(p, t, f)), $e(t) && c.set(t, p), p;
  }
  function qs(e, t, i, r = false) {
    const { mixins: a, extends: c } = t;
    c && qs(e, c, i, true), a && a.forEach((f) => qs(e, f, i, true));
    for (const f in t) if (!(r && f === "expose")) {
      const h = hp[f] || i && i[f];
      e[f] = h ? h(e[f], t[f]) : t[f];
    }
    return e;
  }
  const hp = {
    data: jl,
    props: Fl,
    emits: Fl,
    methods: On,
    computed: On,
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
    components: On,
    directives: On,
    watch: pp,
    provide: jl,
    inject: dp
  };
  function jl(e, t) {
    return t ? e ? function() {
      return dt(Te(e) ? e.call(this, this) : e, Te(t) ? t.call(this, this) : t);
    } : t : e;
  }
  function dp(e, t) {
    return On(ba(e), ba(t));
  }
  function ba(e) {
    if (ve(e)) {
      const t = {};
      for (let i = 0; i < e.length; i++) t[e[i]] = e[i];
      return t;
    }
    return e;
  }
  function Lt(e, t) {
    return e ? [
      ...new Set([].concat(e, t))
    ] : t;
  }
  function On(e, t) {
    return e ? dt(/* @__PURE__ */ Object.create(null), e, t) : t;
  }
  function Fl(e, t) {
    return e ? ve(e) && ve(t) ? [
      .../* @__PURE__ */ new Set([
        ...e,
        ...t
      ])
    ] : dt(/* @__PURE__ */ Object.create(null), Vs(e), Vs(t ?? {})) : t;
  }
  function pp(e, t) {
    if (!e) return t;
    if (!t) return e;
    const i = dt(/* @__PURE__ */ Object.create(null), e);
    for (const r in t) i[r] = Lt(e[r], t[r]);
    return i;
  }
  function pf() {
    return {
      app: null,
      config: {
        isNativeTag: gu,
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
  let gp = 0;
  function mp(e, t) {
    return function(r, a = null) {
      Te(r) || (r = dt({}, r)), a != null && !$e(a) && (a = null);
      const c = pf(), f = /* @__PURE__ */ new WeakSet(), h = [];
      let p = false;
      const v = c.app = {
        _uid: gp++,
        _component: r,
        _props: a,
        _container: null,
        _context: c,
        _instance: null,
        version: Zp,
        get config() {
          return c.config;
        },
        set config(g) {
        },
        use(g, ...I) {
          return f.has(g) || (g && Te(g.install) ? (f.add(g), g.install(v, ...I)) : Te(g) && (f.add(g), g(v, ...I))), v;
        },
        mixin(g) {
          return c.mixins.includes(g) || c.mixins.push(g), v;
        },
        component(g, I) {
          return I ? (c.components[g] = I, v) : c.components[g];
        },
        directive(g, I) {
          return I ? (c.directives[g] = I, v) : c.directives[g];
        },
        mount(g, I, C) {
          if (!p) {
            const A = v._ceVNode || Ct(r, a);
            return A.appContext = c, C === true ? C = "svg" : C === false && (C = void 0), e(A, g, C), p = true, v._container = g, g.__vue_app__ = v, Po(A.component);
          }
        },
        onUnmount(g) {
          h.push(g);
        },
        unmount() {
          p && (mi(h, v._instance, 16), e(null, v._container), delete v._container.__vue_app__);
        },
        provide(g, I) {
          return c.provides[g] = I, v;
        },
        runWithContext(g) {
          const I = Nr;
          Nr = v;
          try {
            return g();
          } finally {
            Nr = I;
          }
        }
      };
      return v;
    };
  }
  let Nr = null;
  Pv = function(e, t, i = Ue) {
    const r = gr(), a = Yt(t), c = Hi(t), f = gf(e, a), h = Rd((p, v) => {
      let g, I = Ue, C;
      return Vd(() => {
        const A = e[a];
        zt(g, A) && (g = A, v());
      }), {
        get() {
          return p(), i.get ? i.get(g) : g;
        },
        set(A) {
          const F = i.set ? i.set(A) : A;
          if (!zt(F, g) && !(I !== Ue && zt(A, I))) return;
          const x = r.vnode.props;
          x && (t in x || a in x || c in x) && (`onUpdate:${t}` in x || `onUpdate:${a}` in x || `onUpdate:${c}` in x) || (g = A, v()), r.emit(`update:${t}`, F), zt(A, F) && zt(A, I) && !zt(F, C) && v(), I = A, C = F;
        }
      };
    });
    return h[Symbol.iterator] = () => {
      let p = 0;
      return {
        next() {
          return p < 2 ? {
            value: p++ ? f || Ue : h,
            done: false
          } : {
            done: true
          };
        }
      };
    }, h;
  };
  const gf = (e, t) => t === "modelValue" || t === "model-value" ? e.modelModifiers : e[`${t}Modifiers`] || e[`${Yt(t)}Modifiers`] || e[`${Hi(t)}Modifiers`];
  function wp(e, t, ...i) {
    if (e.isUnmounted) return;
    const r = e.vnode.props || Ue;
    let a = i;
    const c = t.startsWith("update:"), f = c && gf(r, t.slice(7));
    f && (f.trim && (a = i.map((g) => lt(g) ? g.trim() : g)), f.number && (a = i.map(Jh)));
    let h, p = r[h = Uo(t)] || r[h = Uo(Yt(t))];
    !p && c && (p = r[h = Uo(Hi(t))]), p && mi(p, e, 6, a);
    const v = r[h + "Once"];
    if (v) {
      if (!e.emitted) e.emitted = {};
      else if (e.emitted[h]) return;
      e.emitted[h] = true, mi(v, e, 6, a);
    }
  }
  const yp = /* @__PURE__ */ new WeakMap();
  function mf(e, t, i = false) {
    const r = i ? yp : t.emitsCache, a = r.get(e);
    if (a !== void 0) return a;
    const c = e.emits;
    let f = {}, h = false;
    if (!Te(e)) {
      const p = (v) => {
        const g = mf(v, t, true);
        g && (h = true, dt(f, g));
      };
      !i && t.mixins.length && t.mixins.forEach(p), e.extends && p(e.extends), e.mixins && e.mixins.forEach(p);
    }
    return !c && !h ? ($e(e) && r.set(e, null), null) : (ve(c) ? c.forEach((p) => f[p] = null) : dt(f, c), $e(e) && r.set(e, f), f);
  }
  function To(e, t) {
    return !e || !uo(t) ? false : (t = t.slice(2).replace(/Once$/, ""), Ve(e, t[0].toLowerCase() + t.slice(1)) || Ve(e, Hi(t)) || Ve(e, t));
  }
  function Ul(e) {
    const { type: t, vnode: i, proxy: r, withProxy: a, propsOptions: [c], slots: f, attrs: h, emit: p, render: v, renderCache: g, props: I, data: C, setupState: A, ctx: F, inheritAttrs: x } = e, pe = Bs(e);
    let se, U;
    try {
      if (i.shapeFlag & 4) {
        const $ = a || r, ue = $;
        se = Ti(v.call(ue, $, g, I, A, C, F)), U = h;
      } else {
        const $ = t;
        se = Ti($.length > 1 ? $(I, {
          attrs: h,
          slots: f,
          emit: p
        }) : $(I, null)), U = t.props ? h : bp(h);
      }
    } catch ($) {
      Wn.length = 0, _o($, e, 1), se = Ct(Et);
    }
    let Y = se;
    if (U && x !== false) {
      const $ = Object.keys(U), { shapeFlag: ue } = Y;
      $.length && ue & 7 && (c && $.some(Va) && (U = vp(U, c)), Y = Zi(Y, U, false, true));
    }
    return i.dirs && (Y = Zi(Y, null, false, true), Y.dirs = Y.dirs ? Y.dirs.concat(i.dirs) : i.dirs), i.transition && dr(Y, i.transition), se = Y, Bs(pe), se;
  }
  const bp = (e) => {
    let t;
    for (const i in e) (i === "class" || i === "style" || uo(i)) && ((t || (t = {}))[i] = e[i]);
    return t;
  }, vp = (e, t) => {
    const i = {};
    for (const r in e) (!Va(r) || !(r.slice(9) in t)) && (i[r] = e[r]);
    return i;
  };
  function _p(e, t, i) {
    const { props: r, children: a, component: c } = e, { props: f, children: h, patchFlag: p } = t, v = c.emitsOptions;
    if (t.dirs || t.transition) return true;
    if (i && p >= 0) {
      if (p & 1024) return true;
      if (p & 16) return r ? zl(r, f, v) : !!f;
      if (p & 8) {
        const g = t.dynamicProps;
        for (let I = 0; I < g.length; I++) {
          const C = g[I];
          if (wf(f, r, C) && !To(v, C)) return true;
        }
      }
    } else return (a || h) && (!h || !h.$stable) ? true : r === f ? false : r ? f ? zl(r, f, v) : true : !!f;
    return false;
  }
  function zl(e, t, i) {
    const r = Object.keys(t);
    if (r.length !== Object.keys(e).length) return true;
    for (let a = 0; a < r.length; a++) {
      const c = r[a];
      if (wf(t, e, c) && !To(i, c)) return true;
    }
    return false;
  }
  function wf(e, t, i) {
    const r = e[i], a = t[i];
    return i === "style" && $e(r) && $e(a) ? !Za(r, a) : r !== a;
  }
  function Ep({ vnode: e, parent: t }, i) {
    for (; t; ) {
      const r = t.subTree;
      if (r.suspense && r.suspense.activeBranch === e && (r.el = e.el), r === e) (e = t.vnode).el = i, t = t.parent;
      else break;
    }
  }
  const yf = {}, bf = () => Object.create(yf), vf = (e) => Object.getPrototypeOf(e) === yf;
  function Ip(e, t, i, r = false) {
    const a = {}, c = bf();
    e.propsDefaults = /* @__PURE__ */ Object.create(null), _f(e, t, a, c);
    for (const f in e.propsOptions[0]) f in a || (a[f] = void 0);
    i ? e.props = r ? a : Td(a) : e.type.props ? e.props = a : e.props = c, e.attrs = c;
  }
  function Sp(e, t, i, r) {
    const { props: a, attrs: c, vnode: { patchFlag: f } } = e, h = Ne(a), [p] = e.propsOptions;
    let v = false;
    if ((r || f > 0) && !(f & 16)) {
      if (f & 8) {
        const g = e.vnode.dynamicProps;
        for (let I = 0; I < g.length; I++) {
          let C = g[I];
          if (To(e.emitsOptions, C)) continue;
          const A = t[C];
          if (p) if (Ve(c, C)) A !== c[C] && (c[C] = A, v = true);
          else {
            const F = Yt(C);
            a[F] = va(p, h, F, A, e, false);
          }
          else A !== c[C] && (c[C] = A, v = true);
        }
      }
    } else {
      _f(e, t, a, c) && (v = true);
      let g;
      for (const I in h) (!t || !Ve(t, I) && ((g = Hi(I)) === I || !Ve(t, g))) && (p ? i && (i[I] !== void 0 || i[g] !== void 0) && (a[I] = va(p, h, I, void 0, e, true)) : delete a[I]);
      if (c !== h) for (const I in c) (!t || !Ve(t, I)) && (delete c[I], v = true);
    }
    v && zi(e.attrs, "set", "");
  }
  function _f(e, t, i, r) {
    const [a, c] = e.propsOptions;
    let f = false, h;
    if (t) for (let p in t) {
      if (Nn(p)) continue;
      const v = t[p];
      let g;
      a && Ve(a, g = Yt(p)) ? !c || !c.includes(g) ? i[g] = v : (h || (h = {}))[g] = v : To(e.emitsOptions, p) || (!(p in r) || v !== r[p]) && (r[p] = v, f = true);
    }
    if (c) {
      const p = Ne(i), v = h || Ue;
      for (let g = 0; g < c.length; g++) {
        const I = c[g];
        i[I] = va(a, p, I, v[I], e, !Ve(v, I));
      }
    }
    return f;
  }
  function va(e, t, i, r, a, c) {
    const f = e[i];
    if (f != null) {
      const h = Ve(f, "default");
      if (h && r === void 0) {
        const p = f.default;
        if (f.type !== Function && !f.skipFactory && Te(p)) {
          const { propsDefaults: v } = a;
          if (i in v) r = v[i];
          else {
            const g = as(a);
            r = v[i] = p.call(null, t), g();
          }
        } else r = p;
        a.ce && a.ce._setProp(i, r);
      }
      f[0] && (c && !h ? r = false : f[1] && (r === "" || r === Hi(i)) && (r = true));
    }
    return r;
  }
  const Tp = /* @__PURE__ */ new WeakMap();
  function Ef(e, t, i = false) {
    const r = i ? Tp : t.propsCache, a = r.get(e);
    if (a) return a;
    const c = e.props, f = {}, h = [];
    let p = false;
    if (!Te(e)) {
      const g = (I) => {
        p = true;
        const [C, A] = Ef(I, t, true);
        dt(f, C), A && h.push(...A);
      };
      !i && t.mixins.length && t.mixins.forEach(g), e.extends && g(e.extends), e.mixins && e.mixins.forEach(g);
    }
    if (!c && !p) return $e(e) && r.set(e, Hr), Hr;
    if (ve(c)) for (let g = 0; g < c.length; g++) {
      const I = Yt(c[g]);
      Gl(I) && (f[I] = Ue);
    }
    else if (c) for (const g in c) {
      const I = Yt(g);
      if (Gl(I)) {
        const C = c[g], A = f[I] = ve(C) || Te(C) ? {
          type: C
        } : dt({}, C), F = A.type;
        let x = false, pe = true;
        if (ve(F)) for (let se = 0; se < F.length; ++se) {
          const U = F[se], Y = Te(U) && U.name;
          if (Y === "Boolean") {
            x = true;
            break;
          } else Y === "String" && (pe = false);
        }
        else x = Te(F) && F.name === "Boolean";
        A[0] = x, A[1] = pe, (x || Ve(A, "default")) && h.push(I);
      }
    }
    const v = [
      f,
      h
    ];
    return $e(e) && r.set(e, v), v;
  }
  function Gl(e) {
    return e[0] !== "$" && !Nn(e);
  }
  const ol = (e) => e === "_" || e === "_ctx" || e === "$stable", al = (e) => ve(e) ? e.map(Ti) : [
    Ti(e)
  ], Mp = (e, t, i) => {
    if (t._n) return t;
    const r = zd((...a) => al(t(...a)), i);
    return r._c = false, r;
  }, If = (e, t, i) => {
    const r = e._ctx;
    for (const a in e) {
      if (ol(a)) continue;
      const c = e[a];
      if (Te(c)) t[a] = Mp(a, c, r);
      else if (c != null) {
        const f = al(c);
        t[a] = () => f;
      }
    }
  }, Sf = (e, t) => {
    const i = al(t);
    e.slots.default = () => i;
  }, Tf = (e, t, i) => {
    for (const r in t) (i || !ol(r)) && (e[r] = t[r]);
  }, Pp = (e, t, i) => {
    const r = e.slots = bf();
    if (e.vnode.shapeFlag & 32) {
      const a = t._;
      a ? (Tf(r, t, i), i && vu(r, "_", a, true)) : If(t, r);
    } else t && Sf(e, t);
  }, kp = (e, t, i) => {
    const { vnode: r, slots: a } = e;
    let c = true, f = Ue;
    if (r.shapeFlag & 32) {
      const h = t._;
      h ? i && h === 1 ? c = false : Tf(a, t, i) : (c = !t.$stable, If(t, a)), f = t;
    } else t && (Sf(e, t), f = {
      default: 1
    });
    if (c) for (const h in a) !ol(h) && f[h] == null && delete a[h];
  }, mt = xp;
  function Ap(e) {
    return Rp(e);
  }
  function Rp(e, t) {
    const i = go();
    i.__VUE__ = true;
    const { insert: r, remove: a, patchProp: c, createElement: f, createText: h, createComment: p, setText: v, setElementText: g, parentNode: I, nextSibling: C, setScopeId: A = fi, insertStaticContent: F } = e, x = (E, M, L, Z = null, K = null, J = null, oe = void 0, X = null, ie = !!M.dynamicChildren) => {
      if (E === M) return;
      E && !lr(E, M) && (Z = Ci(E), _e(E, K, J, true), E = null), M.patchFlag === -2 && (ie = false, M.dynamicChildren = null);
      const { type: q, ref: we, shapeFlag: ae } = M;
      switch (q) {
        case Mo:
          pe(E, M, L, Z);
          break;
        case Et:
          se(E, M, L, Z);
          break;
        case Bn:
          E == null && U(M, L, Z, oe);
          break;
        case At:
          he(E, M, L, Z, K, J, oe, X, ie);
          break;
        default:
          ae & 1 ? ue(E, M, L, Z, K, J, oe, X, ie) : ae & 6 ? Be(E, M, L, Z, K, J, oe, X, ie) : (ae & 64 || ae & 128) && q.process(E, M, L, Z, K, J, oe, X, ie, br);
      }
      we != null && K ? Gn(we, E && E.ref, J, M || E, !M) : we == null && E && E.ref != null && Gn(E.ref, null, J, E, true);
    }, pe = (E, M, L, Z) => {
      if (E == null) r(M.el = h(M.children), L, Z);
      else {
        const K = M.el = E.el;
        M.children !== E.children && v(K, M.children);
      }
    }, se = (E, M, L, Z) => {
      E == null ? r(M.el = p(M.children || ""), L, Z) : M.el = E.el;
    }, U = (E, M, L, Z) => {
      [E.el, E.anchor] = F(E.children, M, L, Z, E.el, E.anchor);
    }, Y = ({ el: E, anchor: M }, L, Z) => {
      let K;
      for (; E && E !== M; ) K = C(E), r(E, L, Z), E = K;
      r(M, L, Z);
    }, $ = ({ el: E, anchor: M }) => {
      let L;
      for (; E && E !== M; ) L = C(E), a(E), E = L;
      a(M);
    }, ue = (E, M, L, Z, K, J, oe, X, ie) => {
      if (M.type === "svg" ? oe = "svg" : M.type === "math" && (oe = "mathml"), E == null) ge(M, L, Z, K, J, oe, X, ie);
      else {
        const q = E.el && E.el._isVueCE ? E.el : null;
        try {
          q && q._beginPatch(), Q(E, M, K, J, oe, X, ie);
        } finally {
          q && q._endPatch();
        }
      }
    }, ge = (E, M, L, Z, K, J, oe, X) => {
      let ie, q;
      const { props: we, shapeFlag: ae, transition: ye, dirs: Ie } = E;
      if (ie = E.el = f(E.type, J, we && we.is, we), ae & 8 ? g(ie, E.children) : ae & 16 && fe(E.children, ie, null, Z, K, Ko(E, J), oe, X), Ie && _r(E, null, Z, "created"), re(ie, E, E.scopeId, oe, Z), we) {
        for (const ze in we) ze !== "value" && !Nn(ze) && c(ie, ze, null, we[ze], J, Z);
        "value" in we && c(ie, "value", null, we.value, J), (q = we.onVnodeBeforeMount) && ri(q, Z, E);
      }
      Ie && _r(E, null, Z, "beforeMount");
      const xe = Cp(K, ye);
      xe && ye.beforeEnter(ie), r(ie, M, L), ((q = we && we.onVnodeMounted) || xe || Ie) && mt(() => {
        q && ri(q, Z, E), xe && ye.enter(ie), Ie && _r(E, null, Z, "mounted");
      }, K);
    }, re = (E, M, L, Z, K) => {
      if (L && A(E, L), Z) for (let J = 0; J < Z.length; J++) A(E, Z[J]);
      if (K) {
        let J = K.subTree;
        if (M === J || Zs(J.type) && (J.ssContent === M || J.ssFallback === M)) {
          const oe = K.vnode;
          re(E, oe, oe.scopeId, oe.slotScopeIds, K.parent);
        }
      }
    }, fe = (E, M, L, Z, K, J, oe, X, ie = 0) => {
      for (let q = ie; q < E.length; q++) {
        const we = E[q] = X ? Fi(E[q]) : Ti(E[q]);
        x(null, we, M, L, Z, K, J, oe, X);
      }
    }, Q = (E, M, L, Z, K, J, oe) => {
      const X = M.el = E.el;
      let { patchFlag: ie, dynamicChildren: q, dirs: we } = M;
      ie |= E.patchFlag & 16;
      const ae = E.props || Ue, ye = M.props || Ue;
      let Ie;
      if (L && Er(L, false), (Ie = ye.onVnodeBeforeUpdate) && ri(Ie, L, M, E), we && _r(M, E, L, "beforeUpdate"), L && Er(L, true), (ae.innerHTML && ye.innerHTML == null || ae.textContent && ye.textContent == null) && g(X, ""), q ? me(E.dynamicChildren, q, X, L, Z, Ko(M, K), J) : oe || Ze(E, M, X, null, L, Z, Ko(M, K), J, false), ie > 0) {
        if (ie & 16) ke(X, ae, ye, L, K);
        else if (ie & 2 && ae.class !== ye.class && c(X, "class", null, ye.class, K), ie & 4 && c(X, "style", ae.style, ye.style, K), ie & 8) {
          const xe = M.dynamicProps;
          for (let ze = 0; ze < xe.length; ze++) {
            const Ge = xe[ze], St = ae[Ge], Tt = ye[Ge];
            (Tt !== St || Ge === "value") && c(X, Ge, St, Tt, K, L);
          }
        }
        ie & 1 && E.children !== M.children && g(X, M.children);
      } else !oe && q == null && ke(X, ae, ye, L, K);
      ((Ie = ye.onVnodeUpdated) || we) && mt(() => {
        Ie && ri(Ie, L, M, E), we && _r(M, E, L, "updated");
      }, Z);
    }, me = (E, M, L, Z, K, J, oe) => {
      for (let X = 0; X < M.length; X++) {
        const ie = E[X], q = M[X], we = ie.el && (ie.type === At || !lr(ie, q) || ie.shapeFlag & 198) ? I(ie.el) : L;
        x(ie, q, we, null, Z, K, J, oe, true);
      }
    }, ke = (E, M, L, Z, K) => {
      if (M !== L) {
        if (M !== Ue) for (const J in M) !Nn(J) && !(J in L) && c(E, J, M[J], null, K, Z);
        for (const J in L) {
          if (Nn(J)) continue;
          const oe = L[J], X = M[J];
          oe !== X && J !== "value" && c(E, J, X, oe, K, Z);
        }
        "value" in L && c(E, "value", M.value, L.value, K);
      }
    }, he = (E, M, L, Z, K, J, oe, X, ie) => {
      const q = M.el = E ? E.el : h(""), we = M.anchor = E ? E.anchor : h("");
      let { patchFlag: ae, dynamicChildren: ye, slotScopeIds: Ie } = M;
      Ie && (X = X ? X.concat(Ie) : Ie), E == null ? (r(q, L, Z), r(we, L, Z), fe(M.children || [], L, we, K, J, oe, X, ie)) : ae > 0 && ae & 64 && ye && E.dynamicChildren && E.dynamicChildren.length === ye.length ? (me(E.dynamicChildren, ye, L, K, J, oe, X), (M.key != null || K && M === K.subTree) && ll(E, M, true)) : Ze(E, M, L, we, K, J, oe, X, ie);
    }, Be = (E, M, L, Z, K, J, oe, X, ie) => {
      M.slotScopeIds = X, E == null ? M.shapeFlag & 512 ? K.ctx.activate(M, L, Z, oe, ie) : pt(M, L, Z, K, J, oe, ie) : $t(E, M, ie);
    }, pt = (E, M, L, Z, K, J, oe) => {
      const X = E.component = Gp(E, Z, K);
      if (Io(E) && (X.ctx.renderer = br), $p(X, false, oe), X.asyncDep) {
        if (K && K.registerDep(X, Xe, oe), !E.el) {
          const ie = X.subTree = Ct(Et);
          se(null, ie, M, L), E.placeholder = ie.el;
        }
      } else Xe(X, E, M, L, K, J, oe);
    }, $t = (E, M, L) => {
      const Z = M.component = E.component;
      if (_p(E, M, L)) if (Z.asyncDep && !Z.asyncResolved) {
        Re(Z, M, L);
        return;
      } else Z.next = M, Z.update();
      else M.el = E.el, Z.vnode = M;
    }, Xe = (E, M, L, Z, K, J, oe) => {
      const X = () => {
        if (E.isMounted) {
          let { next: ae, bu: ye, u: Ie, parent: xe, vnode: ze } = E;
          {
            const Qt = Mf(E);
            if (Qt) {
              ae && (ae.el = ze.el, Re(E, ae, oe)), Qt.asyncDep.then(() => {
                mt(() => {
                  E.isUnmounted || q();
                }, K);
              });
              return;
            }
          }
          let Ge = ae, St;
          Er(E, false), ae ? (ae.el = ze.el, Re(E, ae, oe)) : ae = ze, ye && Dn(ye), (St = ae.props && ae.props.onVnodeBeforeUpdate) && ri(St, xe, ae, ze), Er(E, true);
          const Tt = Ul(E), Xt = E.subTree;
          E.subTree = Tt, x(Xt, Tt, I(Xt.el), Ci(Xt), E, K, J), ae.el = Tt.el, Ge === null && Ep(E, Tt.el), Ie && mt(Ie, K), (St = ae.props && ae.props.onVnodeUpdated) && mt(() => ri(St, xe, ae, ze), K);
        } else {
          let ae;
          const { el: ye, props: Ie } = M, { bm: xe, m: ze, parent: Ge, root: St, type: Tt } = E, Xt = fr(M);
          Er(E, false), xe && Dn(xe), !Xt && (ae = Ie && Ie.onVnodeBeforeMount) && ri(ae, Ge, M), Er(E, true);
          {
            St.ce && St.ce._hasShadowRoot() && St.ce._injectChildStyle(Tt);
            const Qt = E.subTree = Ul(E);
            x(null, Qt, L, Z, E, K, J), M.el = Qt.el;
          }
          if (ze && mt(ze, K), !Xt && (ae = Ie && Ie.onVnodeMounted)) {
            const Qt = M;
            mt(() => ri(ae, Ge, Qt), K);
          }
          (M.shapeFlag & 256 || Ge && fr(Ge.vnode) && Ge.vnode.shapeFlag & 256) && E.a && mt(E.a, K), E.isMounted = true, M = L = Z = null;
        }
      };
      E.scope.on();
      const ie = E.effect = new Pu(X);
      E.scope.off();
      const q = E.update = ie.run.bind(ie), we = E.job = ie.runIfDirty.bind(ie);
      we.i = E, we.id = E.uid, ie.scheduler = () => tl(we), Er(E, true), q();
    }, Re = (E, M, L) => {
      M.component = E;
      const Z = E.vnode.props;
      E.vnode = M, E.next = null, Sp(E, M.props, Z, L), kp(E, M.children, L), Vi(), kl(E), qi();
    }, Ze = (E, M, L, Z, K, J, oe, X, ie = false) => {
      const q = E && E.children, we = E ? E.shapeFlag : 0, ae = M.children, { patchFlag: ye, shapeFlag: Ie } = M;
      if (ye > 0) {
        if (ye & 128) {
          Ur(q, ae, L, Z, K, J, oe, X, ie);
          return;
        } else if (ye & 256) {
          Ai(q, ae, L, Z, K, J, oe, X, ie);
          return;
        }
      }
      Ie & 8 ? (we & 16 && Ft(q, K, J), ae !== q && g(L, ae)) : we & 16 ? Ie & 16 ? Ur(q, ae, L, Z, K, J, oe, X, ie) : Ft(q, K, J, true) : (we & 8 && g(L, ""), Ie & 16 && fe(ae, L, Z, K, J, oe, X, ie));
    }, Ai = (E, M, L, Z, K, J, oe, X, ie) => {
      E = E || Hr, M = M || Hr;
      const q = E.length, we = M.length, ae = Math.min(q, we);
      let ye;
      for (ye = 0; ye < ae; ye++) {
        const Ie = M[ye] = ie ? Fi(M[ye]) : Ti(M[ye]);
        x(E[ye], Ie, L, null, K, J, oe, X, ie);
      }
      q > we ? Ft(E, K, J, true, false, ae) : fe(M, L, Z, K, J, oe, X, ie, ae);
    }, Ur = (E, M, L, Z, K, J, oe, X, ie) => {
      let q = 0;
      const we = M.length;
      let ae = E.length - 1, ye = we - 1;
      for (; q <= ae && q <= ye; ) {
        const Ie = E[q], xe = M[q] = ie ? Fi(M[q]) : Ti(M[q]);
        if (lr(Ie, xe)) x(Ie, xe, L, null, K, J, oe, X, ie);
        else break;
        q++;
      }
      for (; q <= ae && q <= ye; ) {
        const Ie = E[ae], xe = M[ye] = ie ? Fi(M[ye]) : Ti(M[ye]);
        if (lr(Ie, xe)) x(Ie, xe, L, null, K, J, oe, X, ie);
        else break;
        ae--, ye--;
      }
      if (q > ae) {
        if (q <= ye) {
          const Ie = ye + 1, xe = Ie < we ? M[Ie].el : Z;
          for (; q <= ye; ) x(null, M[q] = ie ? Fi(M[q]) : Ti(M[q]), L, xe, K, J, oe, X, ie), q++;
        }
      } else if (q > ye) for (; q <= ae; ) _e(E[q], K, J, true), q++;
      else {
        const Ie = q, xe = q, ze = /* @__PURE__ */ new Map();
        for (q = xe; q <= ye; q++) {
          const Ot = M[q] = ie ? Fi(M[q]) : Ti(M[q]);
          Ot.key != null && ze.set(Ot.key, q);
        }
        let Ge, St = 0;
        const Tt = ye - xe + 1;
        let Xt = false, Qt = 0;
        const vr = new Array(Tt);
        for (q = 0; q < Tt; q++) vr[q] = 0;
        for (q = Ie; q <= ae; q++) {
          const Ot = E[q];
          if (St >= Tt) {
            _e(Ot, K, J, true);
            continue;
          }
          let ei;
          if (Ot.key != null) ei = ze.get(Ot.key);
          else for (Ge = xe; Ge <= ye; Ge++) if (vr[Ge - xe] === 0 && lr(Ot, M[Ge])) {
            ei = Ge;
            break;
          }
          ei === void 0 ? _e(Ot, K, J, true) : (vr[ei - xe] = q + 1, ei >= Qt ? Qt = ei : Xt = true, x(Ot, M[ei], L, null, K, J, oe, X, ie), St++);
        }
        const _n = Xt ? Op(vr) : Hr;
        for (Ge = _n.length - 1, q = Tt - 1; q >= 0; q--) {
          const Ot = xe + q, ei = M[Ot], fs = M[Ot + 1], hs = Ot + 1 < we ? fs.el || Pf(fs) : Z;
          vr[q] === 0 ? x(null, ei, L, hs, K, J, oe, X, ie) : Xt && (Ge < 0 || q !== _n[Ge] ? Ri(ei, L, hs, 2) : Ge--);
        }
      }
    }, Ri = (E, M, L, Z, K = null) => {
      const { el: J, type: oe, transition: X, children: ie, shapeFlag: q } = E;
      if (q & 6) {
        Ri(E.component.subTree, M, L, Z);
        return;
      }
      if (q & 128) {
        E.suspense.move(M, L, Z);
        return;
      }
      if (q & 64) {
        oe.move(E, M, L, br);
        return;
      }
      if (oe === At) {
        r(J, M, L);
        for (let ae = 0; ae < ie.length; ae++) Ri(ie[ae], M, L, Z);
        r(E.anchor, M, L);
        return;
      }
      if (oe === Bn) {
        Y(E, M, L);
        return;
      }
      if (Z !== 2 && q & 1 && X) if (Z === 0) X.beforeEnter(J), r(J, M, L), mt(() => X.enter(J), K);
      else {
        const { leave: ae, delayLeave: ye, afterLeave: Ie } = X, xe = () => {
          E.ctx.isUnmounted ? a(J) : r(J, M, L);
        }, ze = () => {
          J._isLeaving && J[Si](true), ae(J, () => {
            xe(), Ie && Ie();
          });
        };
        ye ? ye(J, xe, ze) : ze();
      }
      else r(J, M, L);
    }, _e = (E, M, L, Z = false, K = false) => {
      const { type: J, props: oe, ref: X, children: ie, dynamicChildren: q, shapeFlag: we, patchFlag: ae, dirs: ye, cacheIndex: Ie } = E;
      if (ae === -2 && (K = false), X != null && (Vi(), Gn(X, null, L, E, true), qi()), Ie != null && (M.renderCache[Ie] = void 0), we & 256) {
        M.ctx.deactivate(E);
        return;
      }
      const xe = we & 1 && ye, ze = !fr(E);
      let Ge;
      if (ze && (Ge = oe && oe.onVnodeBeforeUnmount) && ri(Ge, M, E), we & 6) ne(E.component, L, Z);
      else {
        if (we & 128) {
          E.suspense.unmount(L, Z);
          return;
        }
        xe && _r(E, null, M, "beforeUnmount"), we & 64 ? E.type.remove(E, M, L, br, Z) : q && !q.hasOnce && (J !== At || ae > 0 && ae & 64) ? Ft(q, M, L, false, true) : (J === At && ae & 384 || !K && we & 16) && Ft(ie, M, L), Z && vn(E);
      }
      (ze && (Ge = oe && oe.onVnodeUnmounted) || xe) && mt(() => {
        Ge && ri(Ge, M, E), xe && _r(E, null, M, "unmounted");
      }, L);
    }, vn = (E) => {
      const { type: M, el: L, anchor: Z, transition: K } = E;
      if (M === At) {
        Fo(L, Z);
        return;
      }
      if (M === Bn) {
        $(E);
        return;
      }
      const J = () => {
        a(L), K && !K.persisted && K.afterLeave && K.afterLeave();
      };
      if (E.shapeFlag & 1 && K && !K.persisted) {
        const { leave: oe, delayLeave: X } = K, ie = () => oe(L, J);
        X ? X(E.el, J, ie) : ie();
      } else J();
    }, Fo = (E, M) => {
      let L;
      for (; E !== M; ) L = C(E), a(E), E = L;
      a(M);
    }, ne = (E, M, L) => {
      const { bum: Z, scope: K, job: J, subTree: oe, um: X, m: ie, a: q } = E;
      Ks(ie), Ks(q), Z && Dn(Z), K.stop(), J && (J.flags |= 8, _e(oe, E, M, L)), X && mt(X, M), mt(() => {
        E.isUnmounted = true;
      }, M);
    }, Ft = (E, M, L, Z = false, K = false, J = 0) => {
      for (let oe = J; oe < E.length; oe++) _e(E[oe], M, L, Z, K);
    }, Ci = (E) => {
      if (E.shapeFlag & 6) return Ci(E.component.subTree);
      if (E.shapeFlag & 128) return E.suspense.next();
      const M = C(E.anchor || E.el), L = M && M[Xu];
      return L ? C(L) : M;
    };
    let Bt = false;
    const us = (E, M, L) => {
      let Z;
      E == null ? M._vnode && (_e(M._vnode, null, null, true), Z = M._vnode.component) : x(M._vnode || null, E, M, null, null, null, L), M._vnode = E, Bt || (Bt = true, kl(Z), Zu(), Bt = false);
    }, br = {
      p: x,
      um: _e,
      m: Ri,
      r: vn,
      mt: pt,
      mc: fe,
      pc: Ze,
      pbc: me,
      n: Ci,
      o: e
    };
    return {
      render: us,
      hydrate: void 0,
      createApp: mp(us)
    };
  }
  function Ko({ type: e, props: t }, i) {
    return i === "svg" && e === "foreignObject" || i === "mathml" && e === "annotation-xml" && t && t.encoding && t.encoding.includes("html") ? void 0 : i;
  }
  function Er({ effect: e, job: t }, i) {
    i ? (e.flags |= 32, t.flags |= 4) : (e.flags &= -33, t.flags &= -5);
  }
  function Cp(e, t) {
    return (!e || e && !e.pendingBranch) && t && !t.persisted;
  }
  function ll(e, t, i = false) {
    const r = e.children, a = t.children;
    if (ve(r) && ve(a)) for (let c = 0; c < r.length; c++) {
      const f = r[c];
      let h = a[c];
      h.shapeFlag & 1 && !h.dynamicChildren && ((h.patchFlag <= 0 || h.patchFlag === 32) && (h = a[c] = Fi(a[c]), h.el = f.el), !i && h.patchFlag !== -2 && ll(f, h)), h.type === Mo && (h.patchFlag === -1 && (h = a[c] = Fi(h)), h.el = f.el), h.type === Et && !h.el && (h.el = f.el);
    }
  }
  function Op(e) {
    const t = e.slice(), i = [
      0
    ];
    let r, a, c, f, h;
    const p = e.length;
    for (r = 0; r < p; r++) {
      const v = e[r];
      if (v !== 0) {
        if (a = i[i.length - 1], e[a] < v) {
          t[r] = a, i.push(r);
          continue;
        }
        for (c = 0, f = i.length - 1; c < f; ) h = c + f >> 1, e[i[h]] < v ? c = h + 1 : f = h;
        v < e[i[c]] && (c > 0 && (t[r] = i[c - 1]), i[c] = r);
      }
    }
    for (c = i.length, f = i[c - 1]; c-- > 0; ) i[c] = f, f = t[f];
    return i;
  }
  function Mf(e) {
    const t = e.subTree.component;
    if (t) return t.asyncDep && !t.asyncResolved ? t : Mf(t);
  }
  function Ks(e) {
    if (e) for (let t = 0; t < e.length; t++) e[t].flags |= 8;
  }
  function Pf(e) {
    if (e.placeholder) return e.placeholder;
    const t = e.component;
    return t ? Pf(t.subTree) : null;
  }
  const Zs = (e) => e.__isSuspense;
  function xp(e, t) {
    t && t.pendingBranch ? ve(e) ? t.effects.push(...e) : t.effects.push(e) : Ku(e);
  }
  let Bn, Wn;
  At = /* @__PURE__ */ Symbol.for("v-fgt");
  Mo = /* @__PURE__ */ Symbol.for("v-txt");
  Et = /* @__PURE__ */ Symbol.for("v-cmt");
  Bn = /* @__PURE__ */ Symbol.for("v-stc");
  Wn = [];
  let Zt = null;
  ni = function(e = false) {
    Wn.push(Zt = e ? null : []);
  };
  function Lp() {
    Wn.pop(), Zt = Wn[Wn.length - 1] || null;
  }
  let Qn = 1;
  function Js(e, t = false) {
    Qn += e, e < 0 && Zt && t && (Zt.hasOnce = true);
  }
  function kf(e) {
    return e.dynamicChildren = Qn > 0 ? Zt || Hr : null, Lp(), Qn > 0 && Zt && Zt.push(e), e;
  }
  Li = function(e, t, i, r, a, c) {
    return kf(We(e, t, i, r, a, c, true));
  };
  _a = function(e, t, i, r, a) {
    return kf(Ct(e, t, i, r, a, true));
  };
  sn = function(e) {
    return e ? e.__v_isVNode === true : false;
  };
  function lr(e, t) {
    return e.type === t.type && e.key === t.key;
  }
  const Af = ({ key: e }) => e ?? null, Rs = ({ ref: e, ref_key: t, ref_for: i }) => (typeof e == "number" && (e = "" + e), e != null ? lt(e) || ct(e) || Te(e) ? {
    i: It,
    r: e,
    k: t,
    f: !!i
  } : e : null);
  We = function(e, t = null, i = null, r = 0, a = null, c = e === At ? 0 : 1, f = false, h = false) {
    const p = {
      __v_isVNode: true,
      __v_skip: true,
      type: e,
      props: t,
      key: t && Af(t),
      ref: t && Rs(t),
      scopeId: Hu,
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
      shapeFlag: c,
      patchFlag: r,
      dynamicProps: a,
      dynamicChildren: null,
      appContext: null,
      ctx: It
    };
    return h ? (cl(p, i), c & 128 && e.normalize(p)) : i && (p.shapeFlag |= lt(i) ? 8 : 16), Qn > 0 && !f && Zt && (p.patchFlag > 0 || c & 6) && p.patchFlag !== 32 && Zt.push(p), p;
  };
  Ct = Np;
  function Np(e, t = null, i = null, r = 0, a = null, c = false) {
    if ((!e || e === uf) && (e = Et), sn(e)) {
      const h = Zi(e, t, true);
      return i && cl(h, i), Qn > 0 && !c && Zt && (h.shapeFlag & 6 ? Zt[Zt.indexOf(e)] = h : Zt.push(h)), h.patchFlag = -2, h;
    }
    if (qp(e) && (e = e.__vccOpts), t) {
      t = Dp(t);
      let { class: h, style: p } = t;
      h && !lt(h) && (t.class = Ka(h)), $e(p) && (vo(p) && !ve(p) && (p = dt({}, p)), t.style = mo(p));
    }
    const f = lt(e) ? 1 : Zs(e) ? 128 : Qu(e) ? 64 : $e(e) ? 4 : Te(e) ? 2 : 0;
    return We(e, t, i, r, a, f, c, true);
  }
  function Dp(e) {
    return e ? vo(e) || vf(e) ? dt({}, e) : e : null;
  }
  Zi = function(e, t, i = false, r = false) {
    const { props: a, ref: c, patchFlag: f, children: h, transition: p } = e, v = t ? Fp(a || {}, t) : a, g = {
      __v_isVNode: true,
      __v_skip: true,
      type: e.type,
      props: v,
      key: v && Af(v),
      ref: t && t.ref ? i && c ? ve(c) ? c.concat(Rs(t)) : [
        c,
        Rs(t)
      ] : Rs(t) : c,
      scopeId: e.scopeId,
      slotScopeIds: e.slotScopeIds,
      children: h,
      target: e.target,
      targetStart: e.targetStart,
      targetAnchor: e.targetAnchor,
      staticCount: e.staticCount,
      shapeFlag: e.shapeFlag,
      patchFlag: t && e.type !== At ? f === -1 ? 16 : f | 16 : f,
      dynamicProps: e.dynamicProps,
      dynamicChildren: e.dynamicChildren,
      appContext: e.appContext,
      dirs: e.dirs,
      transition: p,
      component: e.component,
      suspense: e.suspense,
      ssContent: e.ssContent && Zi(e.ssContent),
      ssFallback: e.ssFallback && Zi(e.ssFallback),
      placeholder: e.placeholder,
      el: e.el,
      anchor: e.anchor,
      ctx: e.ctx,
      ce: e.ce
    };
    return p && r && dr(g, p.clone(g)), g;
  };
  jp = function(e = " ", t = 0) {
    return Ct(Mo, null, e, t);
  };
  kv = function(e, t) {
    const i = Ct(Bn, null, e);
    return i.staticCount = t, i;
  };
  bs = function(e = "", t = false) {
    return t ? (ni(), _a(Et, null, e)) : Ct(Et, null, e);
  };
  function Ti(e) {
    return e == null || typeof e == "boolean" ? Ct(Et) : ve(e) ? Ct(At, null, e.slice()) : sn(e) ? Fi(e) : Ct(Mo, null, String(e));
  }
  function Fi(e) {
    return e.el === null && e.patchFlag !== -1 || e.memo ? e : Zi(e);
  }
  function cl(e, t) {
    let i = 0;
    const { shapeFlag: r } = e;
    if (t == null) t = null;
    else if (ve(t)) i = 16;
    else if (typeof t == "object") if (r & 65) {
      const a = t.default;
      a && (a._c && (a._d = false), cl(e, a()), a._c && (a._d = true));
      return;
    } else {
      i = 32;
      const a = t._;
      !a && !vf(t) ? t._ctx = It : a === 3 && It && (It.slots._ === 1 ? t._ = 1 : (t._ = 2, e.patchFlag |= 1024));
    }
    else Te(t) ? (t = {
      default: t,
      _ctx: It
    }, i = 32) : (t = String(t), r & 64 ? (i = 16, t = [
      jp(t)
    ]) : i = 8);
    e.children = t, e.shapeFlag |= i;
  }
  Fp = function(...e) {
    const t = {};
    for (let i = 0; i < e.length; i++) {
      const r = e[i];
      for (const a in r) if (a === "class") t.class !== r.class && (t.class = Ka([
        t.class,
        r.class
      ]));
      else if (a === "style") t.style = mo([
        t.style,
        r.style
      ]);
      else if (uo(a)) {
        const c = t[a], f = r[a];
        f && c !== f && !(ve(c) && c.includes(f)) && (t[a] = c ? [].concat(c, f) : f);
      } else a !== "" && (t[a] = r[a]);
    }
    return t;
  };
  function ri(e, t, i, r = null) {
    mi(e, t, 7, [
      i,
      r
    ]);
  }
  const Up = pf();
  let zp = 0;
  function Gp(e, t, i) {
    const r = e.type, a = (t ? t.appContext : e.appContext) || Up, c = {
      uid: zp++,
      vnode: e,
      type: r,
      parent: t,
      appContext: a,
      root: null,
      next: null,
      subTree: null,
      effect: null,
      update: null,
      job: null,
      scope: new Su(true),
      render: null,
      proxy: null,
      exposed: null,
      exposeProxy: null,
      withProxy: null,
      provides: t ? t.provides : Object.create(a.provides),
      ids: t ? t.ids : [
        "",
        0,
        0
      ],
      accessCache: null,
      renderCache: [],
      components: null,
      directives: null,
      propsOptions: Ef(r, a),
      emitsOptions: mf(r, a),
      emit: null,
      emitted: null,
      propsDefaults: Ue,
      inheritAttrs: r.inheritAttrs,
      ctx: Ue,
      data: Ue,
      props: Ue,
      attrs: Ue,
      slots: Ue,
      refs: Ue,
      setupState: Ue,
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
    return c.ctx = {
      _: c
    }, c.root = t ? t.root : c, c.emit = wp.bind(null, c), e.ce && e.ce(c), c;
  }
  let Rt = null;
  gr = () => Rt || It;
  let Hs, Ea;
  {
    const e = go(), t = (i, r) => {
      let a;
      return (a = e[i]) || (a = e[i] = []), a.push(r), (c) => {
        a.length > 1 ? a.forEach((f) => f(c)) : a[0](c);
      };
    };
    Hs = t("__VUE_INSTANCE_SETTERS__", (i) => Rt = i), Ea = t("__VUE_SSR_SETTERS__", (i) => es = i);
  }
  const as = (e) => {
    const t = Rt;
    return Hs(e), e.scope.on(), () => {
      e.scope.off(), Hs(t);
    };
  }, $l = () => {
    Rt && Rt.scope.off(), Hs(null);
  };
  function Rf(e) {
    return e.vnode.shapeFlag & 4;
  }
  let es = false;
  function $p(e, t = false, i = false) {
    t && Ea(t);
    const { props: r, children: a } = e.vnode, c = Rf(e);
    Ip(e, r, c, t), Pp(e, a, i || t);
    const f = c ? Bp(e, t) : void 0;
    return t && Ea(false), f;
  }
  function Bp(e, t) {
    const i = e.type;
    e.accessCache = /* @__PURE__ */ Object.create(null), e.proxy = new Proxy(e.ctx, cp);
    const { setup: r } = i;
    if (r) {
      Vi();
      const a = e.setupContext = r.length > 1 ? Vp(e) : null, c = as(e), f = ss(r, e, 0, [
        e.props,
        a
      ]), h = wu(f);
      if (qi(), c(), (h || e.sp) && !fr(e) && af(e), h) {
        if (f.then($l, $l), t) return f.then((p) => {
          Bl(e, p);
        }).catch((p) => {
          _o(p, e, 0);
        });
        e.asyncDep = f;
      } else Bl(e, f);
    } else Cf(e);
  }
  function Bl(e, t, i) {
    Te(t) ? e.type.__ssrInlineRender ? e.ssrRender = t : e.render = t : $e(t) && (e.setupState = $u(t)), Cf(e);
  }
  function Cf(e, t, i) {
    const r = e.type;
    e.render || (e.render = r.render || fi);
    {
      const a = as(e);
      Vi();
      try {
        up(e);
      } finally {
        qi(), a();
      }
    }
  }
  const Wp = {
    get(e, t) {
      return kt(e, "get", ""), e[t];
    }
  };
  function Vp(e) {
    const t = (i) => {
      e.exposed = i || {};
    };
    return {
      attrs: new Proxy(e.attrs, Wp),
      slots: e.slots,
      emit: e.emit,
      expose: t
    };
  }
  function Po(e) {
    return e.exposed ? e.exposeProxy || (e.exposeProxy = new Proxy($u(el(e.exposed)), {
      get(t, i) {
        if (i in t) return t[i];
        if (i in $n) return $n[i](e);
      },
      has(t, i) {
        return i in t || i in $n;
      }
    })) : e.proxy;
  }
  function Ia(e, t = true) {
    return Te(e) ? e.displayName || e.name : e.name || t && e.__name;
  }
  function qp(e) {
    return Te(e) && "__vccOpts" in e;
  }
  ul = (e, t) => Nd(e, t, es);
  Kp = function(e, t, i) {
    try {
      Js(-1);
      const r = arguments.length;
      return r === 2 ? $e(t) && !ve(t) ? sn(t) ? Ct(e, null, [
        t
      ]) : Ct(e, t) : Ct(e, null, t) : (r > 3 ? i = Array.prototype.slice.call(arguments, 2) : r === 3 && sn(i) && (i = [
        i
      ]), Ct(e, t, i));
    } finally {
      Js(1);
    }
  };
  const Zp = "3.5.28";
  let Sa;
  const Wl = typeof window < "u" && window.trustedTypes;
  if (Wl) try {
    Sa = Wl.createPolicy("vue", {
      createHTML: (e) => e
    });
  } catch {
  }
  let Of, Jp, Hp, ji, Vl, Yp, Qi, Sn, on, xf, Lf, Xp, Ir, ql;
  Of = Sa ? (e) => Sa.createHTML(e) : (e) => e;
  Jp = "http://www.w3.org/2000/svg";
  Hp = "http://www.w3.org/1998/Math/MathML";
  ji = typeof document < "u" ? document : null;
  Vl = ji && ji.createElement("template");
  Yp = {
    insert: (e, t, i) => {
      t.insertBefore(e, i || null);
    },
    remove: (e) => {
      const t = e.parentNode;
      t && t.removeChild(e);
    },
    createElement: (e, t, i, r) => {
      const a = t === "svg" ? ji.createElementNS(Jp, e) : t === "mathml" ? ji.createElementNS(Hp, e) : i ? ji.createElement(e, {
        is: i
      }) : ji.createElement(e);
      return e === "select" && r && r.multiple != null && a.setAttribute("multiple", r.multiple), a;
    },
    createText: (e) => ji.createTextNode(e),
    createComment: (e) => ji.createComment(e),
    setText: (e, t) => {
      e.nodeValue = t;
    },
    setElementText: (e, t) => {
      e.textContent = t;
    },
    parentNode: (e) => e.parentNode,
    nextSibling: (e) => e.nextSibling,
    querySelector: (e) => ji.querySelector(e),
    setScopeId(e, t) {
      e.setAttribute(t, "");
    },
    insertStaticContent(e, t, i, r, a, c) {
      const f = i ? i.previousSibling : t.lastChild;
      if (a && (a === c || a.nextSibling)) for (; t.insertBefore(a.cloneNode(true), i), !(a === c || !(a = a.nextSibling)); ) ;
      else {
        Vl.innerHTML = Of(r === "svg" ? `<svg>${e}</svg>` : r === "mathml" ? `<math>${e}</math>` : e);
        const h = Vl.content;
        if (r === "svg" || r === "mathml") {
          const p = h.firstChild;
          for (; p.firstChild; ) h.appendChild(p.firstChild);
          h.removeChild(p);
        }
        t.insertBefore(h, i);
      }
      return [
        f ? f.nextSibling : t.firstChild,
        i ? i.previousSibling : t.lastChild
      ];
    }
  };
  Qi = "transition";
  Sn = "animation";
  on = /* @__PURE__ */ Symbol("_vtc");
  xf = {
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
  Lf = dt({}, rf, xf);
  Xp = (e) => (e.displayName = "Transition", e.props = Lf, e);
  Av = Xp((e, { slots: t }) => Kp(Jd, Nf(e), t));
  Ir = (e, t = []) => {
    ve(e) ? e.forEach((i) => i(...t)) : e && e(...t);
  };
  ql = (e) => e ? ve(e) ? e.some((t) => t.length > 1) : e.length > 1 : false;
  function Nf(e) {
    const t = {};
    for (const he in e) he in xf || (t[he] = e[he]);
    if (e.css === false) return t;
    const { name: i = "v", type: r, duration: a, enterFromClass: c = `${i}-enter-from`, enterActiveClass: f = `${i}-enter-active`, enterToClass: h = `${i}-enter-to`, appearFromClass: p = c, appearActiveClass: v = f, appearToClass: g = h, leaveFromClass: I = `${i}-leave-from`, leaveActiveClass: C = `${i}-leave-active`, leaveToClass: A = `${i}-leave-to` } = e, F = Qp(a), x = F && F[0], pe = F && F[1], { onBeforeEnter: se, onEnter: U, onEnterCancelled: Y, onLeave: $, onLeaveCancelled: ue, onBeforeAppear: ge = se, onAppear: re = U, onAppearCancelled: fe = Y } = t, Q = (he, Be, pt, $t) => {
      he._enterCancelled = $t, rr(he, Be ? g : h), rr(he, Be ? v : f), pt && pt();
    }, me = (he, Be) => {
      he._isLeaving = false, rr(he, I), rr(he, A), rr(he, C), Be && Be();
    }, ke = (he) => (Be, pt) => {
      const $t = he ? re : U, Xe = () => Q(Be, he, pt);
      Ir($t, [
        Be,
        Xe
      ]), Kl(() => {
        rr(Be, he ? p : c), bi(Be, he ? g : h), ql($t) || Zl(Be, r, x, Xe);
      });
    };
    return dt(t, {
      onBeforeEnter(he) {
        Ir(se, [
          he
        ]), bi(he, c), bi(he, f);
      },
      onBeforeAppear(he) {
        Ir(ge, [
          he
        ]), bi(he, p), bi(he, v);
      },
      onEnter: ke(false),
      onAppear: ke(true),
      onLeave(he, Be) {
        he._isLeaving = true;
        const pt = () => me(he, Be);
        bi(he, I), he._enterCancelled ? (bi(he, C), Ta(he)) : (Ta(he), bi(he, C)), Kl(() => {
          he._isLeaving && (rr(he, I), bi(he, A), ql($) || Zl(he, r, pe, pt));
        }), Ir($, [
          he,
          pt
        ]);
      },
      onEnterCancelled(he) {
        Q(he, false, void 0, true), Ir(Y, [
          he
        ]);
      },
      onAppearCancelled(he) {
        Q(he, true, void 0, true), Ir(fe, [
          he
        ]);
      },
      onLeaveCancelled(he) {
        me(he), Ir(ue, [
          he
        ]);
      }
    });
  }
  function Qp(e) {
    if (e == null) return null;
    if ($e(e)) return [
      Zo(e.enter),
      Zo(e.leave)
    ];
    {
      const t = Zo(e);
      return [
        t,
        t
      ];
    }
  }
  function Zo(e) {
    return Hh(e);
  }
  function bi(e, t) {
    t.split(/\s+/).forEach((i) => i && e.classList.add(i)), (e[on] || (e[on] = /* @__PURE__ */ new Set())).add(t);
  }
  function rr(e, t) {
    t.split(/\s+/).forEach((r) => r && e.classList.remove(r));
    const i = e[on];
    i && (i.delete(t), i.size || (e[on] = void 0));
  }
  function Kl(e) {
    requestAnimationFrame(() => {
      requestAnimationFrame(e);
    });
  }
  let eg = 0;
  function Zl(e, t, i, r) {
    const a = e._endId = ++eg, c = () => {
      a === e._endId && r();
    };
    if (i != null) return setTimeout(c, i);
    const { type: f, timeout: h, propCount: p } = Df(e, t);
    if (!f) return r();
    const v = f + "end";
    let g = 0;
    const I = () => {
      e.removeEventListener(v, C), c();
    }, C = (A) => {
      A.target === e && ++g >= p && I();
    };
    setTimeout(() => {
      g < p && I();
    }, h + 1), e.addEventListener(v, C);
  }
  function Df(e, t) {
    const i = window.getComputedStyle(e), r = (F) => (i[F] || "").split(", "), a = r(`${Qi}Delay`), c = r(`${Qi}Duration`), f = Jl(a, c), h = r(`${Sn}Delay`), p = r(`${Sn}Duration`), v = Jl(h, p);
    let g = null, I = 0, C = 0;
    t === Qi ? f > 0 && (g = Qi, I = f, C = c.length) : t === Sn ? v > 0 && (g = Sn, I = v, C = p.length) : (I = Math.max(f, v), g = I > 0 ? f > v ? Qi : Sn : null, C = g ? g === Qi ? c.length : p.length : 0);
    const A = g === Qi && /\b(?:transform|all)(?:,|$)/.test(r(`${Qi}Property`).toString());
    return {
      type: g,
      timeout: I,
      propCount: C,
      hasTransform: A
    };
  }
  function Jl(e, t) {
    for (; e.length < t.length; ) e = e.concat(e);
    return Math.max(...t.map((i, r) => Hl(i) + Hl(e[r])));
  }
  function Hl(e) {
    return e === "auto" ? 0 : Number(e.slice(0, -1).replace(",", ".")) * 1e3;
  }
  function Ta(e) {
    return (e ? e.ownerDocument : document).body.offsetHeight;
  }
  function tg(e, t, i) {
    const r = e[on];
    r && (t = (t ? [
      t,
      ...r
    ] : [
      ...r
    ]).join(" ")), t == null ? e.removeAttribute("class") : i ? e.setAttribute("class", t) : e.className = t;
  }
  let Ys, jf;
  Ys = /* @__PURE__ */ Symbol("_vod");
  jf = /* @__PURE__ */ Symbol("_vsh");
  Rv = {
    name: "show",
    beforeMount(e, { value: t }, { transition: i }) {
      e[Ys] = e.style.display === "none" ? "" : e.style.display, i && t ? i.beforeEnter(e) : Tn(e, t);
    },
    mounted(e, { value: t }, { transition: i }) {
      i && t && i.enter(e);
    },
    updated(e, { value: t, oldValue: i }, { transition: r }) {
      !t != !i && (r ? t ? (r.beforeEnter(e), Tn(e, true), r.enter(e)) : r.leave(e, () => {
        Tn(e, false);
      }) : Tn(e, t));
    },
    beforeUnmount(e, { value: t }) {
      Tn(e, t);
    }
  };
  function Tn(e, t) {
    e.style.display = t ? e[Ys] : "none", e[jf] = !t;
  }
  const Ff = /* @__PURE__ */ Symbol("");
  Cv = function(e) {
    const t = gr();
    if (!t) return;
    const i = t.ut = (a = e(t.proxy)) => {
      Array.from(document.querySelectorAll(`[data-v-owner="${t.uid}"]`)).forEach((c) => Xs(c, a));
    }, r = () => {
      const a = e(t.proxy);
      t.ce ? Xs(t.ce, a) : Ma(t.subTree, a), i(a);
    };
    cf(() => {
      Ku(r);
    }), os(() => {
      en(r, fi, {
        flush: "post"
      });
      const a = new MutationObserver(r);
      a.observe(t.subTree.el.parentNode, {
        childList: true
      }), sl(() => a.disconnect());
    });
  };
  function Ma(e, t) {
    if (e.shapeFlag & 128) {
      const i = e.suspense;
      e = i.activeBranch, i.pendingBranch && !i.isHydrating && i.effects.push(() => {
        Ma(i.activeBranch, t);
      });
    }
    for (; e.component; ) e = e.component.subTree;
    if (e.shapeFlag & 1 && e.el) Xs(e.el, t);
    else if (e.type === At) e.children.forEach((i) => Ma(i, t));
    else if (e.type === Bn) {
      let { el: i, anchor: r } = e;
      for (; i && (Xs(i, t), i !== r); ) i = i.nextSibling;
    }
  }
  function Xs(e, t) {
    if (e.nodeType === 1) {
      const i = e.style;
      let r = "";
      for (const a in t) {
        const c = nd(t[a]);
        i.setProperty(`--${a}`, c), r += `--${a}: ${c};`;
      }
      i[Ff] = r;
    }
  }
  const ig = /(?:^|;)\s*display\s*:/;
  function rg(e, t, i) {
    const r = e.style, a = lt(i);
    let c = false;
    if (i && !a) {
      if (t) if (lt(t)) for (const f of t.split(";")) {
        const h = f.slice(0, f.indexOf(":")).trim();
        i[h] == null && Cs(r, h, "");
      }
      else for (const f in t) i[f] == null && Cs(r, f, "");
      for (const f in i) f === "display" && (c = true), Cs(r, f, i[f]);
    } else if (a) {
      if (t !== i) {
        const f = r[Ff];
        f && (i += ";" + f), r.cssText = i, c = ig.test(i);
      }
    } else t && e.removeAttribute("style");
    Ys in e && (e[Ys] = c ? r.display : "", e[jf] && (r.display = "none"));
  }
  const Yl = /\s*!important$/;
  function Cs(e, t, i) {
    if (ve(i)) i.forEach((r) => Cs(e, t, r));
    else if (i == null && (i = ""), t.startsWith("--")) e.setProperty(t, i);
    else {
      const r = ng(e, t);
      Yl.test(i) ? e.setProperty(Hi(r), i.replace(Yl, ""), "important") : e[r] = i;
    }
  }
  const Xl = [
    "Webkit",
    "Moz",
    "ms"
  ], Jo = {};
  function ng(e, t) {
    const i = Jo[t];
    if (i) return i;
    let r = Yt(t);
    if (r !== "filter" && r in e) return Jo[t] = r;
    r = po(r);
    for (let a = 0; a < Xl.length; a++) {
      const c = Xl[a] + r;
      if (c in e) return Jo[t] = c;
    }
    return t;
  }
  const Ql = "http://www.w3.org/1999/xlink";
  function ec(e, t, i, r, a, c = id(t)) {
    r && t.startsWith("xlink:") ? i == null ? e.removeAttributeNS(Ql, t.slice(6, t.length)) : e.setAttributeNS(Ql, t, i) : i == null || c && !_u(i) ? e.removeAttribute(t) : e.setAttribute(t, c ? "" : pi(i) ? String(i) : i);
  }
  function tc(e, t, i, r, a) {
    if (t === "innerHTML" || t === "textContent") {
      i != null && (e[t] = t === "innerHTML" ? Of(i) : i);
      return;
    }
    const c = e.tagName;
    if (t === "value" && c !== "PROGRESS" && !c.includes("-")) {
      const h = c === "OPTION" ? e.getAttribute("value") || "" : e.value, p = i == null ? e.type === "checkbox" ? "on" : "" : String(i);
      (h !== p || !("_value" in e)) && (e.value = p), i == null && e.removeAttribute(t), e._value = i;
      return;
    }
    let f = false;
    if (i === "" || i == null) {
      const h = typeof e[t];
      h === "boolean" ? i = _u(i) : i == null && h === "string" ? (i = "", f = true) : h === "number" && (i = 0, f = true);
    }
    try {
      e[t] = i;
    } catch {
    }
    f && e.removeAttribute(a || t);
  }
  function sg(e, t, i, r) {
    e.addEventListener(t, i, r);
  }
  function og(e, t, i, r) {
    e.removeEventListener(t, i, r);
  }
  const ic = /* @__PURE__ */ Symbol("_vei");
  function ag(e, t, i, r, a = null) {
    const c = e[ic] || (e[ic] = {}), f = c[t];
    if (r && f) f.value = r;
    else {
      const [h, p] = lg(t);
      if (r) {
        const v = c[t] = fg(r, a);
        sg(e, h, v, p);
      } else f && (og(e, h, f, p), c[t] = void 0);
    }
  }
  const rc = /(?:Once|Passive|Capture)$/;
  function lg(e) {
    let t;
    if (rc.test(e)) {
      t = {};
      let r;
      for (; r = e.match(rc); ) e = e.slice(0, e.length - r[0].length), t[r[0].toLowerCase()] = true;
    }
    return [
      e[2] === ":" ? e.slice(3) : Hi(e.slice(2)),
      t
    ];
  }
  let Ho = 0;
  const cg = Promise.resolve(), ug = () => Ho || (cg.then(() => Ho = 0), Ho = Date.now());
  function fg(e, t) {
    const i = (r) => {
      if (!r._vts) r._vts = Date.now();
      else if (r._vts <= i.attached) return;
      mi(hg(r, i.value), t, 5, [
        r
      ]);
    };
    return i.value = e, i.attached = ug(), i;
  }
  function hg(e, t) {
    if (ve(t)) {
      const i = e.stopImmediatePropagation;
      return e.stopImmediatePropagation = () => {
        i.call(e), e._stopped = true;
      }, t.map((r) => (a) => !a._stopped && r && r(a));
    } else return t;
  }
  const nc = (e) => e.charCodeAt(0) === 111 && e.charCodeAt(1) === 110 && e.charCodeAt(2) > 96 && e.charCodeAt(2) < 123, dg = (e, t, i, r, a, c) => {
    const f = a === "svg";
    t === "class" ? tg(e, r, f) : t === "style" ? rg(e, i, r) : uo(t) ? Va(t) || ag(e, t, i, r, c) : (t[0] === "." ? (t = t.slice(1), true) : t[0] === "^" ? (t = t.slice(1), false) : pg(e, t, r, f)) ? (tc(e, t, r), !e.tagName.includes("-") && (t === "value" || t === "checked" || t === "selected") && ec(e, t, r, f, c, t !== "value")) : e._isVueCE && (/[A-Z]/.test(t) || !lt(r)) ? tc(e, Yt(t), r, c, t) : (t === "true-value" ? e._trueValue = r : t === "false-value" && (e._falseValue = r), ec(e, t, r, f));
  };
  function pg(e, t, i, r) {
    if (r) return !!(t === "innerHTML" || t === "textContent" || t in e && nc(t) && Te(i));
    if (t === "spellcheck" || t === "draggable" || t === "translate" || t === "autocorrect" || t === "sandbox" && e.tagName === "IFRAME" || t === "form" || t === "list" && e.tagName === "INPUT" || t === "type" && e.tagName === "TEXTAREA") return false;
    if (t === "width" || t === "height") {
      const a = e.tagName;
      if (a === "IMG" || a === "VIDEO" || a === "CANVAS" || a === "SOURCE") return false;
    }
    return nc(t) && lt(i) ? false : t in e;
  }
  let Uf, zf, Qs, sc, gg, mg;
  Uf = /* @__PURE__ */ new WeakMap();
  zf = /* @__PURE__ */ new WeakMap();
  Qs = /* @__PURE__ */ Symbol("_moveCb");
  sc = /* @__PURE__ */ Symbol("_enterCb");
  gg = (e) => (delete e.props.mode, e);
  mg = gg({
    name: "TransitionGroup",
    props: dt({}, Lf, {
      tag: String,
      moveClass: String
    }),
    setup(e, { slots: t }) {
      const i = gr(), r = tf();
      let a, c;
      return rl(() => {
        if (!a.length) return;
        const f = e.moveClass || `${e.name || "v"}-move`;
        if (!vg(a[0].el, i.vnode.el, f)) {
          a = [];
          return;
        }
        a.forEach(wg), a.forEach(yg);
        const h = a.filter(bg);
        Ta(i.vnode.el), h.forEach((p) => {
          const v = p.el, g = v.style;
          bi(v, f), g.transform = g.webkitTransform = g.transitionDuration = "";
          const I = v[Qs] = (C) => {
            C && C.target !== v || (!C || C.propertyName.endsWith("transform")) && (v.removeEventListener("transitionend", I), v[Qs] = null, rr(v, f));
          };
          v.addEventListener("transitionend", I);
        }), a = [];
      }), () => {
        const f = Ne(e), h = Nf(f);
        let p = f.tag || At;
        if (a = [], c) for (let v = 0; v < c.length; v++) {
          const g = c[v];
          g.el && g.el instanceof Element && (a.push(g), dr(g, Xn(g, h, r, i)), Uf.set(g, Gf(g.el)));
        }
        c = t.default ? il(t.default()) : [];
        for (let v = 0; v < c.length; v++) {
          const g = c[v];
          g.key != null && dr(g, Xn(g, h, r, i));
        }
        return Ct(p, null, c);
      };
    }
  });
  Ov = mg;
  function wg(e) {
    const t = e.el;
    t[Qs] && t[Qs](), t[sc] && t[sc]();
  }
  function yg(e) {
    zf.set(e, Gf(e.el));
  }
  function bg(e) {
    const t = Uf.get(e), i = zf.get(e), r = t.left - i.left, a = t.top - i.top;
    if (r || a) {
      const c = e.el, f = c.style, h = c.getBoundingClientRect();
      let p = 1, v = 1;
      return c.offsetWidth && (p = h.width / c.offsetWidth), c.offsetHeight && (v = h.height / c.offsetHeight), (!Number.isFinite(p) || p === 0) && (p = 1), (!Number.isFinite(v) || v === 0) && (v = 1), Math.abs(p - 1) < 0.01 && (p = 1), Math.abs(v - 1) < 0.01 && (v = 1), f.transform = f.webkitTransform = `translate(${r / p}px,${a / v}px)`, f.transitionDuration = "0s", e;
    }
  }
  function Gf(e) {
    const t = e.getBoundingClientRect();
    return {
      left: t.left,
      top: t.top
    };
  }
  function vg(e, t, i) {
    const r = e.cloneNode(), a = e[on];
    a && a.forEach((h) => {
      h.split(/\s+/).forEach((p) => p && r.classList.remove(p));
    }), i.split(/\s+/).forEach((h) => h && r.classList.add(h)), r.style.display = "none";
    const c = t.nodeType === 1 ? t : t.parentNode;
    c.appendChild(r);
    const { hasTransform: f } = Df(r);
    return c.removeChild(r), f;
  }
  let _g, Eg, Ig, Sg;
  _g = [
    "ctrl",
    "shift",
    "alt",
    "meta"
  ];
  Eg = {
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
    exact: (e, t) => _g.some((i) => e[`${i}Key`] && !t.includes(i))
  };
  xv = (e, t) => {
    if (!e) return e;
    const i = e._withMods || (e._withMods = {}), r = t.join(".");
    return i[r] || (i[r] = ((a, ...c) => {
      for (let f = 0; f < t.length; f++) {
        const h = Eg[t[f]];
        if (h && h(a, t)) return;
      }
      return e(a, ...c);
    }));
  };
  Ig = {
    esc: "escape",
    space: " ",
    up: "arrow-up",
    left: "arrow-left",
    right: "arrow-right",
    down: "arrow-down",
    delete: "backspace"
  };
  Lv = (e, t) => {
    const i = e._withKeys || (e._withKeys = {}), r = t.join(".");
    return i[r] || (i[r] = ((a) => {
      if (!("key" in a)) return;
      const c = Hi(a.key);
      if (t.some((f) => f === c || Ig[f] === c)) return e(a);
    }));
  };
  Sg = dt({
    patchProp: dg
  }, Yp);
  let oc;
  function Tg() {
    return oc || (oc = Ap(Sg));
  }
  const $f = ((...e) => {
    const t = Tg().createApp(...e), { mount: i } = t;
    return t.mount = (r) => {
      const a = Pg(r);
      if (!a) return;
      const c = t._component;
      !Te(c) && !c.render && !c.template && (c.template = a.innerHTML), a.nodeType === 1 && (a.textContent = "");
      const f = i(a, false, Mg(a));
      return a instanceof Element && (a.removeAttribute("v-cloak"), a.setAttribute("data-v-app", "")), f;
    }, t;
  });
  function Mg(e) {
    if (e instanceof SVGElement) return "svg";
    if (typeof MathMLElement == "function" && e instanceof MathMLElement) return "mathml";
  }
  function Pg(e) {
    return lt(e) ? document.querySelector(e) : e;
  }
  const kg = "" + new URL("../favicon.svg", import.meta.url).href;
  let Bf, Ag, Wf, Rg, Cg, Mn;
  Bf = typeof global == "object" && global && global.Object === Object && global;
  Ag = typeof self == "object" && self && self.Object === Object && self;
  ki = Bf || Ag || Function("return this")();
  an = ki.Symbol;
  Wf = Object.prototype;
  Rg = Wf.hasOwnProperty;
  Cg = Wf.toString;
  Mn = an ? an.toStringTag : void 0;
  function Og(e) {
    var t = Rg.call(e, Mn), i = e[Mn];
    try {
      e[Mn] = void 0;
      var r = true;
    } catch {
    }
    var a = Cg.call(e);
    return r && (t ? e[Mn] = i : delete e[Mn]), a;
  }
  var xg = Object.prototype, Lg = xg.toString;
  function Ng(e) {
    return Lg.call(e);
  }
  var Dg = "[object Null]", jg = "[object Undefined]", ac = an ? an.toStringTag : void 0;
  mr = function(e) {
    return e == null ? e === void 0 ? jg : Dg : ac && ac in Object(e) ? Og(e) : Ng(e);
  };
  wr = function(e) {
    return e != null && typeof e == "object";
  };
  ko = Array.isArray;
  Ao = function(e) {
    var t = typeof e;
    return e != null && (t == "object" || t == "function");
  };
  var Fg = "[object AsyncFunction]", Ug = "[object Function]", zg = "[object GeneratorFunction]", Gg = "[object Proxy]";
  Vf = function(e) {
    if (!Ao(e)) return false;
    var t = mr(e);
    return t == Ug || t == zg || t == Fg || t == Gg;
  };
  var Yo = ki["__core-js_shared__"], lc = (function() {
    var e = /[^.]+$/.exec(Yo && Yo.keys && Yo.keys.IE_PROTO || "");
    return e ? "Symbol(src)_1." + e : "";
  })();
  function $g(e) {
    return !!lc && lc in e;
  }
  var Bg = Function.prototype, Wg = Bg.toString;
  function jr(e) {
    if (e != null) {
      try {
        return Wg.call(e);
      } catch {
      }
      try {
        return e + "";
      } catch {
      }
    }
    return "";
  }
  var Vg = /[\\^$.*+?()[\]{}|]/g, qg = /^\[object .+?Constructor\]$/, Kg = Function.prototype, Zg = Object.prototype, Jg = Kg.toString, Hg = Zg.hasOwnProperty, Yg = RegExp("^" + Jg.call(Hg).replace(Vg, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$");
  function Xg(e) {
    if (!Ao(e) || $g(e)) return false;
    var t = Vf(e) ? Yg : qg;
    return t.test(jr(e));
  }
  function Qg(e, t) {
    return e == null ? void 0 : e[t];
  }
  function Fr(e, t) {
    var i = Qg(e, t);
    return Xg(i) ? i : void 0;
  }
  let Pa, cc, em;
  Pa = Fr(ki, "WeakMap");
  cc = Object.create;
  em = /* @__PURE__ */ (function() {
    function e() {
    }
    return function(t) {
      if (!Ao(t)) return {};
      if (cc) return cc(t);
      e.prototype = t;
      var i = new e();
      return e.prototype = void 0, i;
    };
  })();
  uc = (function() {
    try {
      var e = Fr(Object, "defineProperty");
      return e({}, "", {}), e;
    } catch {
    }
  })();
  function tm(e, t) {
    for (var i = -1, r = e == null ? 0 : e.length; ++i < r && t(e[i], i, e) !== false; ) ;
    return e;
  }
  var im = 9007199254740991, rm = /^(?:0|[1-9]\d*)$/;
  nm = function(e, t) {
    var i = typeof e;
    return t = t ?? im, !!t && (i == "number" || i != "symbol" && rm.test(e)) && e > -1 && e % 1 == 0 && e < t;
  };
  sm = function(e, t, i) {
    t == "__proto__" && uc ? uc(e, t, {
      configurable: true,
      enumerable: true,
      value: i,
      writable: true
    }) : e[t] = i;
  };
  qf = function(e, t) {
    return e === t || e !== e && t !== t;
  };
  var om = Object.prototype, am = om.hasOwnProperty;
  lm = function(e, t, i) {
    var r = e[t];
    (!(am.call(e, t) && qf(r, i)) || i === void 0 && !(t in e)) && sm(e, t, i);
  };
  var cm = 9007199254740991;
  Kf = function(e) {
    return typeof e == "number" && e > -1 && e % 1 == 0 && e <= cm;
  };
  um = function(e) {
    return e != null && Kf(e.length) && !Vf(e);
  };
  var fm = Object.prototype;
  Zf = function(e) {
    var t = e && e.constructor, i = typeof t == "function" && t.prototype || fm;
    return e === i;
  };
  function hm(e, t) {
    for (var i = -1, r = Array(e); ++i < e; ) r[i] = t(i);
    return r;
  }
  var dm = "[object Arguments]";
  function fc(e) {
    return wr(e) && mr(e) == dm;
  }
  let Jf, pm, gm;
  Jf = Object.prototype;
  pm = Jf.hasOwnProperty;
  gm = Jf.propertyIsEnumerable;
  mm = fc(/* @__PURE__ */ (function() {
    return arguments;
  })()) ? fc : function(e) {
    return wr(e) && pm.call(e, "callee") && !gm.call(e, "callee");
  };
  function wm() {
    return false;
  }
  let Hf, hc, ym, dc, bm, vm, _m, Em, Im, Sm, Tm, Mm, Pm, km, Am, Rm, Cm, Om, xm, Lm, Nm, Dm, jm, Fm, Um, zm, Gm, $m, Bm, rt;
  Hf = typeof exports == "object" && exports && !exports.nodeType && exports;
  hc = Hf && typeof module == "object" && module && !module.nodeType && module;
  ym = hc && hc.exports === Hf;
  dc = ym ? ki.Buffer : void 0;
  bm = dc ? dc.isBuffer : void 0;
  Yf = bm || wm;
  vm = "[object Arguments]";
  _m = "[object Array]";
  Em = "[object Boolean]";
  Im = "[object Date]";
  Sm = "[object Error]";
  Tm = "[object Function]";
  Mm = "[object Map]";
  Pm = "[object Number]";
  km = "[object Object]";
  Am = "[object RegExp]";
  Rm = "[object Set]";
  Cm = "[object String]";
  Om = "[object WeakMap]";
  xm = "[object ArrayBuffer]";
  Lm = "[object DataView]";
  Nm = "[object Float32Array]";
  Dm = "[object Float64Array]";
  jm = "[object Int8Array]";
  Fm = "[object Int16Array]";
  Um = "[object Int32Array]";
  zm = "[object Uint8Array]";
  Gm = "[object Uint8ClampedArray]";
  $m = "[object Uint16Array]";
  Bm = "[object Uint32Array]";
  rt = {};
  rt[Nm] = rt[Dm] = rt[jm] = rt[Fm] = rt[Um] = rt[zm] = rt[Gm] = rt[$m] = rt[Bm] = true;
  rt[vm] = rt[_m] = rt[xm] = rt[Em] = rt[Lm] = rt[Im] = rt[Sm] = rt[Tm] = rt[Mm] = rt[Pm] = rt[km] = rt[Am] = rt[Rm] = rt[Cm] = rt[Om] = false;
  function Wm(e) {
    return wr(e) && Kf(e.length) && !!rt[mr(e)];
  }
  function fl(e) {
    return function(t) {
      return e(t);
    };
  }
  let Xf, Vn, Vm, Xo, ln, pc, Km, Zm;
  Xf = typeof exports == "object" && exports && !exports.nodeType && exports;
  Vn = Xf && typeof module == "object" && module && !module.nodeType && module;
  Vm = Vn && Vn.exports === Xf;
  Xo = Vm && Bf.process;
  ln = (function() {
    try {
      var e = Vn && Vn.require && Vn.require("util").types;
      return e || Xo && Xo.binding && Xo.binding("util");
    } catch {
    }
  })();
  pc = ln && ln.isTypedArray;
  qm = pc ? fl(pc) : Wm;
  Km = Object.prototype;
  Zm = Km.hasOwnProperty;
  Jm = function(e, t) {
    var i = ko(e), r = !i && mm(e), a = !i && !r && Yf(e), c = !i && !r && !a && qm(e), f = i || r || a || c, h = f ? hm(e.length, String) : [], p = h.length;
    for (var v in e) (t || Zm.call(e, v)) && !(f && (v == "length" || a && (v == "offset" || v == "parent") || c && (v == "buffer" || v == "byteLength" || v == "byteOffset") || nm(v, p))) && h.push(v);
    return h;
  };
  function Qf(e, t) {
    return function(i) {
      return e(t(i));
    };
  }
  var Hm = Qf(Object.keys, Object), Ym = Object.prototype, Xm = Ym.hasOwnProperty;
  function Qm(e) {
    if (!Zf(e)) return Hm(e);
    var t = [];
    for (var i in Object(e)) Xm.call(e, i) && i != "constructor" && t.push(i);
    return t;
  }
  ew = function(e) {
    return um(e) ? Jm(e) : Qm(e);
  };
  var ts = Fr(Object, "create");
  function tw() {
    this.__data__ = ts ? ts(null) : {}, this.size = 0;
  }
  function iw(e) {
    var t = this.has(e) && delete this.__data__[e];
    return this.size -= t ? 1 : 0, t;
  }
  var rw = "__lodash_hash_undefined__", nw = Object.prototype, sw = nw.hasOwnProperty;
  function ow(e) {
    var t = this.__data__;
    if (ts) {
      var i = t[e];
      return i === rw ? void 0 : i;
    }
    return sw.call(t, e) ? t[e] : void 0;
  }
  var aw = Object.prototype, lw = aw.hasOwnProperty;
  function cw(e) {
    var t = this.__data__;
    return ts ? t[e] !== void 0 : lw.call(t, e);
  }
  var uw = "__lodash_hash_undefined__";
  function fw(e, t) {
    var i = this.__data__;
    return this.size += this.has(e) ? 0 : 1, i[e] = ts && t === void 0 ? uw : t, this;
  }
  function Dr(e) {
    var t = -1, i = e == null ? 0 : e.length;
    for (this.clear(); ++t < i; ) {
      var r = e[t];
      this.set(r[0], r[1]);
    }
  }
  Dr.prototype.clear = tw;
  Dr.prototype.delete = iw;
  Dr.prototype.get = ow;
  Dr.prototype.has = cw;
  Dr.prototype.set = fw;
  function hw() {
    this.__data__ = [], this.size = 0;
  }
  function Ro(e, t) {
    for (var i = e.length; i--; ) if (qf(e[i][0], t)) return i;
    return -1;
  }
  var dw = Array.prototype, pw = dw.splice;
  function gw(e) {
    var t = this.__data__, i = Ro(t, e);
    if (i < 0) return false;
    var r = t.length - 1;
    return i == r ? t.pop() : pw.call(t, i, 1), --this.size, true;
  }
  function mw(e) {
    var t = this.__data__, i = Ro(t, e);
    return i < 0 ? void 0 : t[i][1];
  }
  function ww(e) {
    return Ro(this.__data__, e) > -1;
  }
  function yw(e, t) {
    var i = this.__data__, r = Ro(i, e);
    return r < 0 ? (++this.size, i.push([
      e,
      t
    ])) : i[r][1] = t, this;
  }
  function Xi(e) {
    var t = -1, i = e == null ? 0 : e.length;
    for (this.clear(); ++t < i; ) {
      var r = e[t];
      this.set(r[0], r[1]);
    }
  }
  Xi.prototype.clear = hw;
  Xi.prototype.delete = gw;
  Xi.prototype.get = mw;
  Xi.prototype.has = ww;
  Xi.prototype.set = yw;
  var is = Fr(ki, "Map");
  function bw() {
    this.size = 0, this.__data__ = {
      hash: new Dr(),
      map: new (is || Xi)(),
      string: new Dr()
    };
  }
  function vw(e) {
    var t = typeof e;
    return t == "string" || t == "number" || t == "symbol" || t == "boolean" ? e !== "__proto__" : e === null;
  }
  function Co(e, t) {
    var i = e.__data__;
    return vw(t) ? i[typeof t == "string" ? "string" : "hash"] : i.map;
  }
  function _w(e) {
    var t = Co(this, e).delete(e);
    return this.size -= t ? 1 : 0, t;
  }
  function Ew(e) {
    return Co(this, e).get(e);
  }
  function Iw(e) {
    return Co(this, e).has(e);
  }
  function Sw(e, t) {
    var i = Co(this, e), r = i.size;
    return i.set(e, t), this.size += i.size == r ? 0 : 1, this;
  }
  wn = function(e) {
    var t = -1, i = e == null ? 0 : e.length;
    for (this.clear(); ++t < i; ) {
      var r = e[t];
      this.set(r[0], r[1]);
    }
  };
  wn.prototype.clear = bw;
  wn.prototype.delete = _w;
  wn.prototype.get = Ew;
  wn.prototype.has = Iw;
  wn.prototype.set = Sw;
  function Tw(e, t) {
    for (var i = -1, r = t.length, a = e.length; ++i < r; ) e[a + i] = t[i];
    return e;
  }
  var eh = Qf(Object.getPrototypeOf, Object), Mw = "[object Object]", Pw = Function.prototype, kw = Object.prototype, th = Pw.toString, Aw = kw.hasOwnProperty, Rw = th.call(Object);
  Cw = function(e) {
    if (!wr(e) || mr(e) != Mw) return false;
    var t = eh(e);
    if (t === null) return true;
    var i = Aw.call(t, "constructor") && t.constructor;
    return typeof i == "function" && i instanceof i && th.call(i) == Rw;
  };
  var Ow = "[object DOMException]", xw = "[object Error]";
  function ih(e) {
    if (!wr(e)) return false;
    var t = mr(e);
    return t == xw || t == Ow || typeof e.message == "string" && typeof e.name == "string" && !Cw(e);
  }
  function Lw() {
    this.__data__ = new Xi(), this.size = 0;
  }
  function Nw(e) {
    var t = this.__data__, i = t.delete(e);
    return this.size = t.size, i;
  }
  function Dw(e) {
    return this.__data__.get(e);
  }
  function jw(e) {
    return this.__data__.has(e);
  }
  var Fw = 200;
  function Uw(e, t) {
    var i = this.__data__;
    if (i instanceof Xi) {
      var r = i.__data__;
      if (!is || r.length < Fw - 1) return r.push([
        e,
        t
      ]), this.size = ++i.size, this;
      i = this.__data__ = new wn(r);
    }
    return i.set(e, t), this.size = i.size, this;
  }
  yn = function(e) {
    var t = this.__data__ = new Xi(e);
    this.size = t.size;
  };
  yn.prototype.clear = Lw;
  yn.prototype.delete = Nw;
  yn.prototype.get = Dw;
  yn.prototype.has = jw;
  yn.prototype.set = Uw;
  var rh = typeof exports == "object" && exports && !exports.nodeType && exports, gc = rh && typeof module == "object" && module && !module.nodeType && module, zw = gc && gc.exports === rh, mc = zw ? ki.Buffer : void 0, wc = mc ? mc.allocUnsafe : void 0;
  Gw = function(e, t) {
    if (t) return e.slice();
    var i = e.length, r = wc ? wc(i) : new e.constructor(i);
    return e.copy(r), r;
  };
  function $w(e, t) {
    for (var i = -1, r = e == null ? 0 : e.length, a = 0, c = []; ++i < r; ) {
      var f = e[i];
      t(f, i, e) && (c[a++] = f);
    }
    return c;
  }
  function Bw() {
    return [];
  }
  var Ww = Object.prototype, Vw = Ww.propertyIsEnumerable, yc = Object.getOwnPropertySymbols, qw = yc ? function(e) {
    return e == null ? [] : (e = Object(e), $w(yc(e), function(t) {
      return Vw.call(e, t);
    }));
  } : Bw;
  function Kw(e, t, i) {
    var r = t(e);
    return ko(e) ? r : Tw(r, i(e));
  }
  Zw = function(e) {
    return Kw(e, ew, qw);
  };
  let ka, Aa, Ra, bc, Jw, vc, _c, Ec, Ic, Hw, Yw, Xw, Qw, e0;
  ka = Fr(ki, "DataView");
  Aa = Fr(ki, "Promise");
  Ra = Fr(ki, "Set");
  bc = "[object Map]";
  Jw = "[object Object]";
  vc = "[object Promise]";
  _c = "[object Set]";
  Ec = "[object WeakMap]";
  Ic = "[object DataView]";
  Hw = jr(ka);
  Yw = jr(is);
  Xw = jr(Aa);
  Qw = jr(Ra);
  e0 = jr(Pa);
  Ui = mr;
  (ka && Ui(new ka(new ArrayBuffer(1))) != Ic || is && Ui(new is()) != bc || Aa && Ui(Aa.resolve()) != vc || Ra && Ui(new Ra()) != _c || Pa && Ui(new Pa()) != Ec) && (Ui = function(e) {
    var t = mr(e), i = t == Jw ? e.constructor : void 0, r = i ? jr(i) : "";
    if (r) switch (r) {
      case Hw:
        return Ic;
      case Yw:
        return bc;
      case Xw:
        return vc;
      case Qw:
        return _c;
      case e0:
        return Ec;
    }
    return t;
  });
  var t0 = Object.prototype, i0 = t0.hasOwnProperty;
  function r0(e) {
    var t = e.length, i = new e.constructor(t);
    return t && typeof e[0] == "string" && i0.call(e, "index") && (i.index = e.index, i.input = e.input), i;
  }
  Sc = ki.Uint8Array;
  function hl(e) {
    var t = new e.constructor(e.byteLength);
    return new Sc(t).set(new Sc(e)), t;
  }
  function n0(e, t) {
    var i = hl(e.buffer);
    return new e.constructor(i, e.byteOffset, e.byteLength);
  }
  var s0 = /\w*$/;
  function o0(e) {
    var t = new e.constructor(e.source, s0.exec(e));
    return t.lastIndex = e.lastIndex, t;
  }
  var Tc = an ? an.prototype : void 0, Mc = Tc ? Tc.valueOf : void 0;
  function a0(e) {
    return Mc ? Object(Mc.call(e)) : {};
  }
  l0 = function(e, t) {
    var i = t ? hl(e.buffer) : e.buffer;
    return new e.constructor(i, e.byteOffset, e.length);
  };
  var c0 = "[object Boolean]", u0 = "[object Date]", f0 = "[object Map]", h0 = "[object Number]", d0 = "[object RegExp]", p0 = "[object Set]", g0 = "[object String]", m0 = "[object Symbol]", w0 = "[object ArrayBuffer]", y0 = "[object DataView]", b0 = "[object Float32Array]", v0 = "[object Float64Array]", _0 = "[object Int8Array]", E0 = "[object Int16Array]", I0 = "[object Int32Array]", S0 = "[object Uint8Array]", T0 = "[object Uint8ClampedArray]", M0 = "[object Uint16Array]", P0 = "[object Uint32Array]";
  function k0(e, t, i) {
    var r = e.constructor;
    switch (t) {
      case w0:
        return hl(e);
      case c0:
      case u0:
        return new r(+e);
      case y0:
        return n0(e);
      case b0:
      case v0:
      case _0:
      case E0:
      case I0:
      case S0:
      case T0:
      case M0:
      case P0:
        return l0(e, i);
      case f0:
        return new r();
      case h0:
      case g0:
        return new r(e);
      case d0:
        return o0(e);
      case p0:
        return new r();
      case m0:
        return a0(e);
    }
  }
  A0 = function(e) {
    return typeof e.constructor == "function" && !Zf(e) ? em(eh(e)) : {};
  };
  var R0 = "[object Map]";
  function C0(e) {
    return wr(e) && Ui(e) == R0;
  }
  var Pc = ln && ln.isMap, O0 = Pc ? fl(Pc) : C0, x0 = "[object Set]";
  function L0(e) {
    return wr(e) && Ui(e) == x0;
  }
  var kc = ln && ln.isSet, N0 = kc ? fl(kc) : L0, D0 = 1, nh = "[object Arguments]", j0 = "[object Array]", F0 = "[object Boolean]", U0 = "[object Date]", z0 = "[object Error]", sh = "[object Function]", G0 = "[object GeneratorFunction]", $0 = "[object Map]", B0 = "[object Number]", oh = "[object Object]", W0 = "[object RegExp]", V0 = "[object Set]", q0 = "[object String]", K0 = "[object Symbol]", Z0 = "[object WeakMap]", J0 = "[object ArrayBuffer]", H0 = "[object DataView]", Y0 = "[object Float32Array]", X0 = "[object Float64Array]", Q0 = "[object Int8Array]", ey = "[object Int16Array]", ty = "[object Int32Array]", iy = "[object Uint8Array]", ry = "[object Uint8ClampedArray]", ny = "[object Uint16Array]", sy = "[object Uint32Array]", Qe = {};
  Qe[nh] = Qe[j0] = Qe[J0] = Qe[H0] = Qe[F0] = Qe[U0] = Qe[Y0] = Qe[X0] = Qe[Q0] = Qe[ey] = Qe[ty] = Qe[$0] = Qe[B0] = Qe[oh] = Qe[W0] = Qe[V0] = Qe[q0] = Qe[K0] = Qe[iy] = Qe[ry] = Qe[ny] = Qe[sy] = true;
  Qe[z0] = Qe[sh] = Qe[Z0] = false;
  function Os(e, t, i, r, a, c) {
    var f, h = t & D0;
    if (f !== void 0) return f;
    if (!Ao(e)) return e;
    var p = ko(e);
    if (p) f = r0(e);
    else {
      var v = Ui(e), g = v == sh || v == G0;
      if (Yf(e)) return Gw(e, h);
      if (v == oh || v == nh || g && !a) f = g ? {} : A0(e);
      else {
        if (!Qe[v]) return a ? e : {};
        f = k0(e, v, h);
      }
    }
    c || (c = new yn());
    var I = c.get(e);
    if (I) return I;
    c.set(e, f), N0(e) ? e.forEach(function(F) {
      f.add(Os(F, t, i, F, e, c));
    }) : O0(e) && e.forEach(function(F, x) {
      f.set(x, Os(F, t, i, x, e, c));
    });
    var C = Zw, A = p ? void 0 : C(e);
    return tm(A || e, function(F, x) {
      A && (x = F, F = e[x]), lm(f, x, Os(F, t, i, x, e, c));
    }), f;
  }
  var oy = 1, ay = 4;
  Ca = function(e) {
    return Os(e, oy | ay);
  };
  var ly = "[object String]";
  function Oa(e) {
    return typeof e == "string" || !ko(e) && wr(e) && mr(e) == ly;
  }
  const xt = (e) => Oa(e) ? e : ih(e) ? String(e) : JSON.stringify(e), yi = {
    unloaded: (...e) => `[loadModules] Module "${xt(e[0])}" has not been loaded yet`,
    loading: (...e) => `[loadModules] Module "${xt(e[0])}" is loading`,
    loaded: (...e) => `[loadModules] Module "${xt(e[0])}" has been loaded`,
    error: (...e) => `[loadModules] Module "${xt(e[0])}" failed to load.
Trackback: 
${xt(e[1])}`,
    errorDetermined: (...e) => `[loadModules] Module "${xt(e[0])}" failed to load, asserted by another instance, skip`,
    alreadyLoading: (...e) => `[loadModules] Module "${xt(e[0])}" is already loading by another instance, skip`,
    alreadyLoaded: (...e) => `[loadModules] Module "${xt(e[0])}" has been loaded by another instance, skip`,
    missingDependencies: (...e) => `[loadModules] Module "${xt(e[0])}" is missing the following dependencies: ${xt(e[1])}`,
    loadDependencies: (...e) => `[loadModules] Module "${xt(e[0])}" is loading its dependencies (${e.slice(1).map((t) => xt(t)).join(", ")})`,
    dependenciesReady: (...e) => `[loadModules] Module "${xt(e[0])}" dependencies are ready`,
    dependenciesFailure: (...e) => `[loadModules] Module "${xt(e[0])}" dependencies failed to load. 

Trackback: 
${xt(e[1])}`
  }, cy = {
    info: console.info,
    warn: console.warn,
    error: console.error,
    debug: console.debug
  };
  async function ah(e, t, i = 1e4, r = {}, a = 0, c = 0, f = 0) {
    var _a3, _b2, _c2, _d2, _e, _f2;
    const { logger: h = cy, progressReporter: p, printLog: v = true } = r, g = e.find((x) => x.name === t);
    if (!g) throw new Error(`cannot exactly find module "${t}" from the library`);
    const I = e.findIndex((x) => x.name === g.name);
    if (e[I].status === "loaded") return v && h.info(yi.alreadyLoaded(g.name)), {
      completed: f,
      total: c
    };
    const C = g.dependencies || [], A = e.filter((x) => C.includes(x.name)), F = C.filter((x) => !e.find((pe) => pe.name === x));
    if (F.length > 0) {
      const x = yi.missingDependencies(g.name, F.join(", "));
      throw v && h.error(x), new Error(x);
    }
    if (e[I].status === "error") {
      const x = yi.errorDetermined(g.name);
      throw v && h.info(x), new Error(x);
    }
    if (e[I].status === "loading") return v && h.info(yi.alreadyLoading(g.name)), await uy(e, g.name, i, h), {
      completed: f,
      total: c
    };
    try {
      let x = c, pe = f;
      if (a === 0) {
        const se = /* @__PURE__ */ new Set(), U = (Y) => {
          if (se.has(Y)) return;
          se.add(Y);
          const $ = e.find((ue) => ue.name === Y);
          if ($ && $.dependencies) for (const ue of $.dependencies) U(ue);
        };
        U(t), x = se.size, pe = 0;
      }
      if (A.length > 0) {
        h.info(yi.loadDependencies(g.name, A.map((se) => se.name)));
        for (const se of A) {
          const U = await ah(e, se.name, i, {
            logger: h,
            progressReporter: p,
            printLog: v
          }, a + 1, x, pe);
          pe = U.completed, x = U.total, (_a3 = p == null ? void 0 : p.onOverallProgress) == null ? void 0 : _a3.call(p, pe, x);
        }
        v && h.info(yi.dependenciesReady(g.name));
      }
      e[I].status = "loading", (_b2 = p == null ? void 0 : p.onModuleStart) == null ? void 0 : _b2.call(p, g.displayName);
      try {
        return v && h.info(yi.loading(g.name)), await g.moduleInit(i), e[I].status = "loaded", pe++, (_c2 = p == null ? void 0 : p.onModuleComplete) == null ? void 0 : _c2.call(p, g.displayName), (_d2 = p == null ? void 0 : p.onOverallProgress) == null ? void 0 : _d2.call(p, pe, x), v && h.info(yi.loaded(g.name)), {
          completed: pe,
          total: x
        };
      } catch (se) {
        e[I].status = "error";
        const U = yi.error(g.name, Oa(se) ? se : ih(se) ? se.message : JSON.stringify(se));
        throw h.error(U), (_e = p == null ? void 0 : p.onModuleError) == null ? void 0 : _e.call(p, g.displayName, Oa(se) ? new Error(se) : se), new Error(U);
      }
    } catch (x) {
      e[I].status = "error", console.log(x);
      const pe = yi.error(g.name, x);
      throw h.error(pe), (_f2 = p == null ? void 0 : p.onModuleError) == null ? void 0 : _f2.call(p, g.displayName, x), new Error(pe);
    }
  }
  async function uy(e, t, i = 1e4, r) {
    const a = Date.now();
    return new Promise((c, f) => {
      const h = setInterval(() => {
        const p = e.find((v) => v.name === t);
        if (p && p.status === "loaded") clearInterval(h), c();
        else if (Date.now() - a > i) {
          clearInterval(h);
          const v = new Error(`Load module ${t} timeout`);
          r == null ? void 0 : r.error(v.message), f(v);
        }
      }, 10);
    });
  }
  let fy, hy, Ac, dy, py, lh;
  fy = "modulepreload";
  hy = function(e, t) {
    return new URL(e, t).href;
  };
  Ac = {};
  qn = function(t, i, r) {
    let a = Promise.resolve();
    if (i && i.length > 0) {
      let v = function(g) {
        return Promise.all(g.map((I) => Promise.resolve(I).then((C) => ({
          status: "fulfilled",
          value: C
        }), (C) => ({
          status: "rejected",
          reason: C
        }))));
      };
      const f = document.getElementsByTagName("link"), h = document.querySelector("meta[property=csp-nonce]"), p = (h == null ? void 0 : h.nonce) || (h == null ? void 0 : h.getAttribute("nonce"));
      a = v(i.map((g) => {
        if (g = hy(g, r), g in Ac) return;
        Ac[g] = true;
        const I = g.endsWith(".css"), C = I ? '[rel="stylesheet"]' : "";
        if (r) for (let F = f.length - 1; F >= 0; F--) {
          const x = f[F];
          if (x.href === g && (!I || x.rel === "stylesheet")) return;
        }
        else if (document.querySelector(`link[href="${g}"]${C}`)) return;
        const A = document.createElement("link");
        if (A.rel = I ? "stylesheet" : fy, I || (A.as = "script"), A.crossOrigin = "", A.href = g, p && A.setAttribute("nonce", p), document.head.appendChild(A), I) return new Promise((F, x) => {
          A.addEventListener("load", F), A.addEventListener("error", () => x(new Error(`Unable to preload CSS for ${g}`)));
        });
      }));
    }
    function c(f) {
      const h = new Event("vite:preloadError", {
        cancelable: true
      });
      if (h.payload = f, window.dispatchEvent(h), !h.defaultPrevented) throw f;
    }
    return a.then((f) => {
      for (const h of f || []) h.status === "rejected" && c(h.reason);
      return t().catch(c);
    });
  };
  dy = [
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
  py = {
    withStackTrace: false
  };
  lh = (e, t, i = py) => {
    const r = t.isOk() ? {
      type: "Ok",
      value: t.value
    } : {
      type: "Err",
      value: t.error
    }, a = i.withStackTrace ? new Error().stack : void 0;
    return {
      data: r,
      message: e,
      stack: a
    };
  };
  function Sr(e, t, i, r) {
    function a(c) {
      return c instanceof i ? c : new i(function(f) {
        f(c);
      });
    }
    return new (i || (i = Promise))(function(c, f) {
      function h(g) {
        try {
          v(r.next(g));
        } catch (I) {
          f(I);
        }
      }
      function p(g) {
        try {
          v(r.throw(g));
        } catch (I) {
          f(I);
        }
      }
      function v(g) {
        g.done ? c(g.value) : a(g.value).then(h, p);
      }
      v((r = r.apply(e, [])).next());
    });
  }
  function Rc(e) {
    var t = typeof Symbol == "function" && Symbol.iterator, i = t && e[t], r = 0;
    if (i) return i.call(e);
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
  function Mi(e) {
    return this instanceof Mi ? (this.v = e, this) : new Mi(e);
  }
  function Cc(e, t, i) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var r = i.apply(e, t || []), a, c = [];
    return a = Object.create((typeof AsyncIterator == "function" ? AsyncIterator : Object).prototype), h("next"), h("throw"), h("return", f), a[Symbol.asyncIterator] = function() {
      return this;
    }, a;
    function f(A) {
      return function(F) {
        return Promise.resolve(F).then(A, I);
      };
    }
    function h(A, F) {
      r[A] && (a[A] = function(x) {
        return new Promise(function(pe, se) {
          c.push([
            A,
            x,
            pe,
            se
          ]) > 1 || p(A, x);
        });
      }, F && (a[A] = F(a[A])));
    }
    function p(A, F) {
      try {
        v(r[A](F));
      } catch (x) {
        C(c[0][3], x);
      }
    }
    function v(A) {
      A.value instanceof Mi ? Promise.resolve(A.value.v).then(g, I) : C(c[0][2], A);
    }
    function g(A) {
      p("next", A);
    }
    function I(A) {
      p("throw", A);
    }
    function C(A, F) {
      A(F), c.shift(), c.length && p(c[0][0], c[0][1]);
    }
  }
  function gy(e) {
    var t, i;
    return t = {}, r("next"), r("throw", function(a) {
      throw a;
    }), r("return"), t[Symbol.iterator] = function() {
      return this;
    }, t;
    function r(a, c) {
      t[a] = e[a] ? function(f) {
        return (i = !i) ? {
          value: Mi(e[a](f)),
          done: false
        } : c ? c(f) : f;
      } : c;
    }
  }
  function my(e) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var t = e[Symbol.asyncIterator], i;
    return t ? t.call(e) : (e = typeof Rc == "function" ? Rc(e) : e[Symbol.iterator](), i = {}, r("next"), r("throw"), r("return"), i[Symbol.asyncIterator] = function() {
      return this;
    }, i);
    function r(c) {
      i[c] = e[c] && function(f) {
        return new Promise(function(h, p) {
          f = e[c](f), a(h, p, f.done, f.value);
        });
      };
    }
    function a(c, f, h, p) {
      Promise.resolve(p).then(function(v) {
        c({
          value: v,
          done: h
        });
      }, f);
    }
  }
  class Mt {
    constructor(t) {
      this._promise = t;
    }
    static fromSafePromise(t) {
      const i = t.then((r) => new vi(r));
      return new Mt(i);
    }
    static fromPromise(t, i) {
      const r = t.then((a) => new vi(a)).catch((a) => new ai(i(a)));
      return new Mt(r);
    }
    static fromThrowable(t, i) {
      return (...r) => new Mt(Sr(this, void 0, void 0, function* () {
        try {
          return new vi(yield t(...r));
        } catch (a) {
          return new ai(i ? i(a) : a);
        }
      }));
    }
    static combine(t) {
      return wy(t);
    }
    static combineWithAllErrors(t) {
      return yy(t);
    }
    map(t) {
      return new Mt(this._promise.then((i) => Sr(this, void 0, void 0, function* () {
        return i.isErr() ? new ai(i.error) : new vi(yield t(i.value));
      })));
    }
    andThrough(t) {
      return new Mt(this._promise.then((i) => Sr(this, void 0, void 0, function* () {
        if (i.isErr()) return new ai(i.error);
        const r = yield t(i.value);
        return r.isErr() ? new ai(r.error) : new vi(i.value);
      })));
    }
    andTee(t) {
      return new Mt(this._promise.then((i) => Sr(this, void 0, void 0, function* () {
        if (i.isErr()) return new ai(i.error);
        try {
          yield t(i.value);
        } catch {
        }
        return new vi(i.value);
      })));
    }
    orTee(t) {
      return new Mt(this._promise.then((i) => Sr(this, void 0, void 0, function* () {
        if (i.isOk()) return new vi(i.value);
        try {
          yield t(i.error);
        } catch {
        }
        return new ai(i.error);
      })));
    }
    mapErr(t) {
      return new Mt(this._promise.then((i) => Sr(this, void 0, void 0, function* () {
        return i.isOk() ? new vi(i.value) : new ai(yield t(i.error));
      })));
    }
    andThen(t) {
      return new Mt(this._promise.then((i) => {
        if (i.isErr()) return new ai(i.error);
        const r = t(i.value);
        return r instanceof Mt ? r._promise : r;
      }));
    }
    orElse(t) {
      return new Mt(this._promise.then((i) => Sr(this, void 0, void 0, function* () {
        return i.isErr() ? t(i.error) : new vi(i.value);
      })));
    }
    match(t, i) {
      return this._promise.then((r) => r.match(t, i));
    }
    unwrapOr(t) {
      return this._promise.then((i) => i.unwrapOr(t));
    }
    safeUnwrap() {
      return Cc(this, arguments, function* () {
        return yield Mi(yield Mi(yield* gy(my(yield Mi(this._promise.then((i) => i.safeUnwrap()))))));
      });
    }
    then(t, i) {
      return this._promise.then(t, i);
    }
    [Symbol.asyncIterator]() {
      return Cc(this, arguments, function* () {
        const i = yield Mi(this._promise);
        return i.isErr() && (yield yield Mi(xs(i.error))), yield Mi(i.value);
      });
    }
  }
  function xs(e) {
    return new Mt(Promise.resolve(new ai(e)));
  }
  const ch = (e) => {
    let t = N([]);
    for (const i of e) if (i.isErr()) {
      t = k(i.error);
      break;
    } else t.map((r) => r.push(i.value));
    return t;
  }, wy = (e) => Mt.fromSafePromise(Promise.all(e)).andThen(ch), uh = (e) => {
    let t = N([]);
    for (const i of e) i.isErr() && t.isErr() ? t.error.push(i.error) : i.isErr() && t.isOk() ? t = k([
      i.error
    ]) : i.isOk() && t.isOk() && t.value.push(i.value);
    return t;
  }, yy = (e) => Mt.fromSafePromise(Promise.all(e)).andThen(uh);
  var xa;
  (function(e) {
    function t(a, c) {
      return (...f) => {
        try {
          const h = a(...f);
          return N(h);
        } catch (h) {
          return k(c ? c(h) : h);
        }
      };
    }
    e.fromThrowable = t;
    function i(a) {
      return ch(a);
    }
    e.combine = i;
    function r(a) {
      return uh(a);
    }
    e.combineWithAllErrors = r;
  })(xa || (xa = {}));
  function N(e) {
    return new vi(e);
  }
  function k(e) {
    return new ai(e);
  }
  class vi {
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
      return N(t(this.value));
    }
    mapErr(t) {
      return N(this.value);
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
      return N(this.value);
    }
    orTee(t) {
      return N(this.value);
    }
    orElse(t) {
      return N(this.value);
    }
    asyncAndThen(t) {
      return t(this.value);
    }
    asyncAndThrough(t) {
      return t(this.value).map(() => this.value);
    }
    asyncMap(t) {
      return Mt.fromSafePromise(t(this.value));
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
      throw lh("Called `_unsafeUnwrapErr` on an Ok", this, t);
    }
    *[Symbol.iterator]() {
      return this.value;
    }
  }
  class ai {
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
      return k(this.error);
    }
    mapErr(t) {
      return k(t(this.error));
    }
    andThrough(t) {
      return k(this.error);
    }
    andTee(t) {
      return k(this.error);
    }
    orTee(t) {
      try {
        t(this.error);
      } catch {
      }
      return k(this.error);
    }
    andThen(t) {
      return k(this.error);
    }
    orElse(t) {
      return t(this.error);
    }
    asyncAndThen(t) {
      return xs(this.error);
    }
    asyncAndThrough(t) {
      return xs(this.error);
    }
    asyncMap(t) {
      return xs(this.error);
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
        throw yield k(t), new Error("Do not use this generator out of `safeTry`");
      })();
    }
    _unsafeUnwrap(t) {
      throw lh("Called `_unsafeUnwrap` on an Err", this, t);
    }
    _unsafeUnwrapErr(t) {
      return this.error;
    }
    *[Symbol.iterator]() {
      const t = this;
      return yield t, t;
    }
  }
  xa.fromThrowable;
  var ls = ((e) => (e.GENERIC = "generic", e.VALIDATION = "validation", e.NETWORK = "network", e.GEOLOCATION = "geolocation", e.STORAGE = "storage", e.CONVERSION = "conversion", e.UPDATE_SERVICE = "update_service", e))(ls || {});
  class bn extends Error {
    constructor(t, i) {
      super(t), this.cause = i, this.name = this.constructor.name, i && (this.message = `${t} (caused by: ${i.message})`);
    }
  }
  class De extends bn {
    constructor(t, i = "GENERIC_ERROR", r) {
      super(t, r);
      __publicField(this, "code");
      __publicField(this, "domain", "generic");
      this.code = i;
    }
  }
  function by(e) {
    return e instanceof bn;
  }
  vs = function(e, t = "Unknown error occurred") {
    return by(e) ? e : e instanceof Error ? new De(t, "UNKNOWN_ERROR", e) : new De(t, "UNKNOWN_ERROR");
  };
  Tr = function(e, t) {
    const i = t ? `[${t}] ` : "";
    console.error(`${i}${e.domain}.${e.code}: ${e.message}`, {
      error: e,
      cause: e.cause,
      stack: e.stack
    });
  };
  class Oe extends bn {
    constructor(t, i, r) {
      super(t, r);
      __publicField(this, "code");
      __publicField(this, "domain", ls.GEOLOCATION);
      this.code = i;
    }
  }
  class Ni extends Oe {
    constructor(t = "Geolocation update service error", i, r) {
      super(t, "UPDATE_SERVICE_ERROR", r), this.serviceName = i;
    }
  }
  var vy = "2.0.9", _y = 500, Oc = "user-agent", cn = "", xc = "?", ht = {
    FUNCTION: "function",
    OBJECT: "object",
    STRING: "string",
    UNDEFINED: "undefined"
  }, Gt = "browser", Wi = "cpu", Pi = "device", ui = "engine", Jt = "os", un = "result", G = "name", D = "type", V = "vendor", B = "version", Nt = "architecture", rs = "major", z = "model", Ls = "console", Pe = "mobile", Je = "tablet", gt = "smarttv", _i = "wearable", _s = "xr", xn = "embedded", Ey = "fetcher", Gr = "inapp", dl = "brands", Cr = "formFactors", pl = "fullVersionList", fn = "platform", gl = "platformVersion", Oo = "bitness", yr = "sec-ch-ua", Iy = yr + "-full-version-list", Sy = yr + "-arch", Ty = yr + "-" + Oo, My = yr + "-form-factors", Py = yr + "-" + Pe, ky = yr + "-" + z, fh = yr + "-" + fn, Ay = fh + "-version", hh = [
    dl,
    pl,
    Pe,
    z,
    fn,
    gl,
    Nt,
    Cr,
    Oo
  ], Es = "Amazon", $r = "Apple", Lc = "ASUS", Nc = "BlackBerry", Mr = "Google", Dc = "Huawei", Qo = "Lenovo", jc = "Honor", Is = "LG", ea = "Microsoft", ta = "Motorola", Fc = "Nvidia", Uc = "OnePlus", ia = "OPPO", Pn = "Samsung", zc = "Sharp", kn = "Sony", ra = "Xiaomi", na = "Zebra", Gc = "Chrome", $c = "Chromium", er = "Chromecast", Ns = "Edge", An = "Firefox", Br = "Opera", sa = "Facebook", Bc = "Sogou", Wr = "Mobile ", Vr = " Browser", La = "Windows", Ry = typeof window !== ht.UNDEFINED, Ut = Ry && window.navigator ? window.navigator : void 0, Or = Ut && Ut.userAgentData ? Ut.userAgentData : void 0, Cy = function(e, t) {
    var i = {}, r = t;
    if (!eo(t)) {
      r = {};
      for (var a in t) for (var c in t[a]) r[c] = t[a][c].concat(r[c] ? r[c] : []);
    }
    for (var f in e) i[f] = r[f] && r[f].length % 2 === 0 ? r[f].concat(e[f]) : e[f];
    return i;
  }, xo = function(e) {
    for (var t = {}, i = 0; i < e.length; i++) t[e[i].toUpperCase()] = e[i];
    return t;
  }, Na = function(e, t) {
    if (typeof e === ht.OBJECT && e.length > 0) {
      for (var i in e) if (ur(t) == ur(e[i])) return true;
      return false;
    }
    return cs(e) ? ur(t) == ur(e) : false;
  }, eo = function(e, t) {
    for (var i in e) return /^(browser|cpu|device|engine|os)$/.test(i) || (t ? eo(e[i]) : false);
  }, cs = function(e) {
    return typeof e === ht.STRING;
  }, oa = function(e) {
    if (e) {
      for (var t = [], i = hn(/\\?\"/g, e).split(","), r = 0; r < i.length; r++) if (i[r].indexOf(";") > -1) {
        var a = to(i[r]).split(";v=");
        t[r] = {
          brand: a[0],
          version: a[1]
        };
      } else t[r] = to(i[r]);
      return t;
    }
  }, ur = function(e) {
    return cs(e) ? e.toLowerCase() : e;
  }, Da = function(e) {
    return cs(e) ? hn(/[^\d\.]/g, e).split(".")[0] : void 0;
  }, $i = function(e) {
    for (var t in e) if (e.hasOwnProperty(t)) {
      var i = e[t];
      typeof i == ht.OBJECT && i.length == 2 ? this[i[0]] = i[1] : this[i] = void 0;
    }
    return this;
  }, hn = function(e, t) {
    return cs(t) ? t.replace(e, cn) : t;
  }, Rn = function(e) {
    return hn(/\\?\"/g, e);
  }, to = function(e, t) {
    return e = hn(/^\s\s*/, String(e)), typeof t === ht.UNDEFINED ? e : e.substring(0, t);
  }, ja = function(e, t) {
    if (!(!e || !t)) for (var i = 0, r, a, c, f, h, p; i < t.length && !h; ) {
      var v = t[i], g = t[i + 1];
      for (r = a = 0; r < v.length && !h && v[r]; ) if (h = v[r++].exec(e), h) for (c = 0; c < g.length; c++) p = h[++a], f = g[c], typeof f === ht.OBJECT && f.length > 0 ? f.length === 2 ? typeof f[1] == ht.FUNCTION ? this[f[0]] = f[1].call(this, p) : this[f[0]] = f[1] : f.length >= 3 && (typeof f[1] === ht.FUNCTION && !(f[1].exec && f[1].test) ? f.length > 3 ? this[f[0]] = p ? f[1].apply(this, f.slice(2)) : void 0 : this[f[0]] = p ? f[1].call(this, p, f[2]) : void 0 : f.length == 3 ? this[f[0]] = p ? p.replace(f[1], f[2]) : void 0 : f.length == 4 ? this[f[0]] = p ? f[3].call(this, p.replace(f[1], f[2])) : void 0 : f.length > 4 && (this[f[0]] = p ? f[3].apply(this, [
        p.replace(f[1], f[2])
      ].concat(f.slice(4))) : void 0)) : this[f] = p || void 0;
      i += 2;
    }
  }, ci = function(e, t) {
    for (var i in t) if (typeof t[i] === ht.OBJECT && t[i].length > 0) {
      for (var r = 0; r < t[i].length; r++) if (Na(t[i][r], e)) return i === xc ? void 0 : i;
    } else if (Na(t[i], e)) return i === xc ? void 0 : i;
    return t.hasOwnProperty("*") ? t["*"] : e;
  }, Wc = {
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
  }, Vc = {
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
  }, Oy = {
    Chrome: "Google Chrome",
    Edge: "Microsoft Edge",
    "Edge WebView2": "Microsoft Edge WebView2",
    "Chrome WebView": "Android WebView",
    "Chrome Headless": "HeadlessChrome",
    "Huawei Browser": "HuaweiBrowser",
    "MIUI Browser": "Miui Browser",
    "Opera Mobi": "OperaMobile",
    Yandex: "YaBrowser"
  }, qc = {
    browser: [
      [
        /\b(?:crmo|crios)\/([\w\.]+)/i
      ],
      [
        B,
        [
          G,
          Wr + "Chrome"
        ]
      ],
      [
        /webview.+edge\/([\w\.]+)/i
      ],
      [
        B,
        [
          G,
          Ns + " WebView"
        ]
      ],
      [
        /edg(?:e|ios|a)?\/([\w\.]+)/i
      ],
      [
        B,
        [
          G,
          "Edge"
        ]
      ],
      [
        /(opera mini)\/([-\w\.]+)/i,
        /(opera [mobiletab]{3,6})\b.+version\/([-\w\.]+)/i,
        /(opera)(?:.+version\/|[\/ ]+)([\w\.]+)/i
      ],
      [
        G,
        B
      ],
      [
        /opios[\/ ]+([\w\.]+)/i
      ],
      [
        B,
        [
          G,
          Br + " Mini"
        ]
      ],
      [
        /\bop(?:rg)?x\/([\w\.]+)/i
      ],
      [
        B,
        [
          G,
          Br + " GX"
        ]
      ],
      [
        /\bopr\/([\w\.]+)/i
      ],
      [
        B,
        [
          G,
          Br
        ]
      ],
      [
        /\bb[ai]*d(?:uhd|[ub]*[aekoprswx]{5,6})[\/ ]?([\w\.]+)/i
      ],
      [
        B,
        [
          G,
          "Baidu"
        ]
      ],
      [
        /\b(?:mxbrowser|mxios|myie2)\/?([-\w\.]*)\b/i
      ],
      [
        B,
        [
          G,
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
        /(aloha|heytap|ovi|115|surf|qwant)browser\/([\d\.]+)/i,
        /(qwant)(?:ios|mobile)\/([\d\.]+)/i,
        /(ecosia|weibo)(?:__| \w+@)([\d\.]+)/i
      ],
      [
        G,
        B
      ],
      [
        /quark(?:pc)?\/([-\w\.]+)/i
      ],
      [
        B,
        [
          G,
          "Quark"
        ]
      ],
      [
        /\bddg\/([\w\.]+)/i
      ],
      [
        B,
        [
          G,
          "DuckDuckGo"
        ]
      ],
      [
        /(?:\buc? ?browser|(?:juc.+)ucweb)[\/ ]?([\w\.]+)/i
      ],
      [
        B,
        [
          G,
          "UCBrowser"
        ]
      ],
      [
        /microm.+\bqbcore\/([\w\.]+)/i,
        /\bqbcore\/([\w\.]+).+microm/i,
        /micromessenger\/([\w\.]+)/i
      ],
      [
        B,
        [
          G,
          "WeChat"
        ]
      ],
      [
        /konqueror\/([\w\.]+)/i
      ],
      [
        B,
        [
          G,
          "Konqueror"
        ]
      ],
      [
        /trident.+rv[: ]([\w\.]{1,9})\b.+like gecko/i
      ],
      [
        B,
        [
          G,
          "IE"
        ]
      ],
      [
        /ya(?:search)?browser\/([\w\.]+)/i
      ],
      [
        B,
        [
          G,
          "Yandex"
        ]
      ],
      [
        /slbrowser\/([\w\.]+)/i
      ],
      [
        B,
        [
          G,
          "Smart " + Qo + Vr
        ]
      ],
      [
        /(av(?:ast|g|ira))\/([\w\.]+)/i
      ],
      [
        [
          G,
          /(.+)/,
          "$1 Secure" + Vr
        ],
        B
      ],
      [
        /norton\/([\w\.]+)/i
      ],
      [
        B,
        [
          G,
          "Norton Private" + Vr
        ]
      ],
      [
        /\bfocus\/([\w\.]+)/i
      ],
      [
        B,
        [
          G,
          An + " Focus"
        ]
      ],
      [
        / mms\/([\w\.]+)$/i
      ],
      [
        B,
        [
          G,
          Br + " Neon"
        ]
      ],
      [
        / opt\/([\w\.]+)$/i
      ],
      [
        B,
        [
          G,
          Br + " Touch"
        ]
      ],
      [
        /coc_coc\w+\/([\w\.]+)/i
      ],
      [
        B,
        [
          G,
          "Coc Coc"
        ]
      ],
      [
        /dolfin\/([\w\.]+)/i
      ],
      [
        B,
        [
          G,
          "Dolphin"
        ]
      ],
      [
        /coast\/([\w\.]+)/i
      ],
      [
        B,
        [
          G,
          Br + " Coast"
        ]
      ],
      [
        /miuibrowser\/([\w\.]+)/i
      ],
      [
        B,
        [
          G,
          "MIUI" + Vr
        ]
      ],
      [
        /fxios\/([\w\.-]+)/i
      ],
      [
        B,
        [
          G,
          Wr + An
        ]
      ],
      [
        /\bqihoobrowser\/?([\w\.]*)/i
      ],
      [
        B,
        [
          G,
          "360"
        ]
      ],
      [
        /\b(qq)\/([\w\.]+)/i
      ],
      [
        [
          G,
          /(.+)/,
          "$1Browser"
        ],
        B
      ],
      [
        /(oculus|sailfish|huawei|vivo|pico)browser\/([\w\.]+)/i
      ],
      [
        [
          G,
          /(.+)/,
          "$1" + Vr
        ],
        B
      ],
      [
        /samsungbrowser\/([\w\.]+)/i
      ],
      [
        B,
        [
          G,
          Pn + " Internet"
        ]
      ],
      [
        /metasr[\/ ]?([\d\.]+)/i
      ],
      [
        B,
        [
          G,
          Bc + " Explorer"
        ]
      ],
      [
        /(sogou)mo\w+\/([\d\.]+)/i
      ],
      [
        [
          G,
          Bc + " Mobile"
        ],
        B
      ],
      [
        /(electron)\/([\w\.]+) safari/i,
        /(tesla)(?: qtcarbrowser|\/(20\d\d\.[-\w\.]+))/i,
        /m?(qqbrowser|2345(?=browser|chrome|explorer))\w*[\/ ]?v?([\w\.]+)/i
      ],
      [
        G,
        B
      ],
      [
        /(lbbrowser|luakit|rekonq|steam(?= (clie|tenf|gameo)))/i
      ],
      [
        G
      ],
      [
        /ome\/([\w\.]+).+(iron(?= saf)|360(?=[es]e$))/i
      ],
      [
        B,
        G
      ],
      [
        /((?:fban\/fbios|fb_iab\/fb4a)(?!.+fbav)|;fbav\/([\w\.]+);)/i
      ],
      [
        [
          G,
          sa
        ],
        B,
        [
          D,
          Gr
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
        G,
        B,
        [
          D,
          Gr
        ]
      ],
      [
        /\bgsa\/([\w\.]+) .*safari\//i
      ],
      [
        B,
        [
          G,
          "GSA"
        ],
        [
          D,
          Gr
        ]
      ],
      [
        /(?:musical_ly|trill)(?:.+app_?version\/|_)([\w\.]+)/i
      ],
      [
        B,
        [
          G,
          "TikTok"
        ],
        [
          D,
          Gr
        ]
      ],
      [
        /\[(linkedin)app\]/i
      ],
      [
        G,
        [
          D,
          Gr
        ]
      ],
      [
        /(zalo(?:app)?)[\/\sa-z]*([\w\.-]+)/i
      ],
      [
        [
          G,
          /(.+)/,
          "Zalo"
        ],
        B,
        [
          D,
          Gr
        ]
      ],
      [
        /(chromium)[\/ ]([-\w\.]+)/i
      ],
      [
        G,
        B
      ],
      [
        /ome-(lighthouse)$/i
      ],
      [
        G,
        [
          D,
          Ey
        ]
      ],
      [
        /headlesschrome(?:\/([\w\.]+)| )/i
      ],
      [
        B,
        [
          G,
          Gc + " Headless"
        ]
      ],
      [
        /wv\).+chrome\/([\w\.]+).+edgw\//i
      ],
      [
        B,
        [
          G,
          Ns + " WebView2"
        ]
      ],
      [
        / wv\).+(chrome)\/([\w\.]+)/i
      ],
      [
        [
          G,
          Gc + " WebView"
        ],
        B
      ],
      [
        /droid.+ version\/([\w\.]+)\b.+(?:mobile safari|safari)/i
      ],
      [
        B,
        [
          G,
          "Android" + Vr
        ]
      ],
      [
        /chrome\/([\w\.]+) mobile/i
      ],
      [
        B,
        [
          G,
          Wr + "Chrome"
        ]
      ],
      [
        /(chrome|omniweb|arora|[tizenoka]{5} ?browser)\/v?([\w\.]+)/i
      ],
      [
        G,
        B
      ],
      [
        /version\/([\w\.\,]+) .*mobile(?:\/\w+ | ?)safari/i
      ],
      [
        B,
        [
          G,
          Wr + "Safari"
        ]
      ],
      [
        /iphone .*mobile(?:\/\w+ | ?)safari/i
      ],
      [
        [
          G,
          Wr + "Safari"
        ]
      ],
      [
        /version\/([\w\.\,]+) .*(safari)/i
      ],
      [
        B,
        G
      ],
      [
        /webkit.+?(mobile ?safari|safari)(\/[\w\.]+)/i
      ],
      [
        G,
        [
          B,
          "1"
        ]
      ],
      [
        /(webkit|khtml)\/([\w\.]+)/i
      ],
      [
        G,
        B
      ],
      [
        /(?:mobile|tablet);.*(firefox)\/([\w\.-]+)/i
      ],
      [
        [
          G,
          Wr + An
        ],
        B
      ],
      [
        /(navigator|netscape\d?)\/([-\w\.]+)/i
      ],
      [
        [
          G,
          "Netscape"
        ],
        B
      ],
      [
        /(wolvic|librewolf)\/([\w\.]+)/i
      ],
      [
        G,
        B
      ],
      [
        /mobile vr; rv:([\w\.]+)\).+firefox/i
      ],
      [
        B,
        [
          G,
          An + " Reality"
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
        G,
        [
          B,
          /_/g,
          "."
        ]
      ],
      [
        /(cobalt)\/([\w\.]+)/i
      ],
      [
        G,
        [
          B,
          /[^\d\.]+./,
          cn
        ]
      ]
    ],
    cpu: [
      [
        /\b((amd|x|x86[-_]?|wow|win)64)\b/i
      ],
      [
        [
          Nt,
          "amd64"
        ]
      ],
      [
        /(ia32(?=;))/i,
        /\b((i[346]|x)86)(pc)?\b/i
      ],
      [
        [
          Nt,
          "ia32"
        ]
      ],
      [
        /\b(aarch64|arm(v?[89]e?l?|_?64))\b/i
      ],
      [
        [
          Nt,
          "arm64"
        ]
      ],
      [
        /\b(arm(v[67])?ht?n?[fl]p?)\b/i
      ],
      [
        [
          Nt,
          "armhf"
        ]
      ],
      [
        /( (ce|mobile); ppc;|\/[\w\.]+arm\b)/i
      ],
      [
        [
          Nt,
          "arm"
        ]
      ],
      [
        / sun4\w[;\)]/i
      ],
      [
        [
          Nt,
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
          Nt,
          /ower/,
          cn,
          ur
        ]
      ],
      [
        /mc680.0/i
      ],
      [
        [
          Nt,
          "68k"
        ]
      ],
      [
        /winnt.+\[axp/i
      ],
      [
        [
          Nt,
          "alpha"
        ]
      ]
    ],
    device: [
      [
        /\b(sch-i[89]0\d|shw-m380s|sm-[ptx]\w{2,4}|gt-[pn]\d{2,4}|sgh-t8[56]9|nexus 10)/i
      ],
      [
        z,
        [
          V,
          Pn
        ],
        [
          D,
          Je
        ]
      ],
      [
        /\b((?:s[cgp]h|gt|sm)-(?![lr])\w+|sc[g-]?[\d]+a?|galaxy nexus)/i,
        /samsung[- ]((?!sm-[lr]|browser)[-\w]+)/i,
        /sec-(sgh\w+)/i
      ],
      [
        z,
        [
          V,
          Pn
        ],
        [
          D,
          Pe
        ]
      ],
      [
        /(?:\/|\()(ip(?:hone|od)[\w, ]*)[\/\);]/i
      ],
      [
        z,
        [
          V,
          $r
        ],
        [
          D,
          Pe
        ]
      ],
      [
        /\b(?:ios|apple\w+)\/.+[\(\/](ipad)/i,
        /\b(ipad)[\d,]*[;\] ].+(mac |i(pad)?)os/i
      ],
      [
        z,
        [
          V,
          $r
        ],
        [
          D,
          Je
        ]
      ],
      [
        /(macintosh);/i
      ],
      [
        z,
        [
          V,
          $r
        ]
      ],
      [
        /\b(sh-?[altvz]?\d\d[a-ekm]?)/i
      ],
      [
        z,
        [
          V,
          zc
        ],
        [
          D,
          Pe
        ]
      ],
      [
        /\b((?:brt|eln|hey2?|gdi|jdn)-a?[lnw]09|(?:ag[rm]3?|jdn2|kob2)-a?[lw]0[09]hn)(?: bui|\)|;)/i
      ],
      [
        z,
        [
          V,
          jc
        ],
        [
          D,
          Je
        ]
      ],
      [
        /honor([-\w ]+)[;\)]/i
      ],
      [
        z,
        [
          V,
          jc
        ],
        [
          D,
          Pe
        ]
      ],
      [
        /\b((?:ag[rs][2356]?k?|bah[234]?|bg[2o]|bt[kv]|cmr|cpn|db[ry]2?|jdn2|got|kob2?k?|mon|pce|scm|sht?|[tw]gr|vrd)-[ad]?[lw][0125][09]b?|605hw|bg2-u03|(?:gem|fdr|m2|ple|t1)-[7a]0[1-4][lu]|t1-a2[13][lw]|mediapad[\w\. ]*(?= bui|\)))\b(?!.+d\/s)/i
      ],
      [
        z,
        [
          V,
          Dc
        ],
        [
          D,
          Je
        ]
      ],
      [
        /(?:huawei) ?([-\w ]+)[;\)]/i,
        /\b(nexus 6p|\w{2,4}e?-[atu]?[ln][\dx][\dc][adnt]?)\b(?!.+d\/s)/i
      ],
      [
        z,
        [
          V,
          Dc
        ],
        [
          D,
          Pe
        ]
      ],
      [
        /oid[^\)]+; (2[\dbc]{4}(182|283|rp\w{2})[cgl]|m2105k81a?c)(?: bui|\))/i,
        /\b(?:xiao)?((?:red)?mi[-_ ]?pad[\w- ]*)(?: bui|\))/i
      ],
      [
        [
          z,
          /_/g,
          " "
        ],
        [
          V,
          ra
        ],
        [
          D,
          Je
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
          z,
          /_/g,
          " "
        ],
        [
          V,
          ra
        ],
        [
          D,
          Pe
        ]
      ],
      [
        /droid.+; (cph2[3-6]\d[13579]|((gm|hd)19|(ac|be|in|kb)20|(d[en]|eb|le|mt)21|ne22)[0-2]\d|p[g-l]\w[1m]10)\b/i,
        /(?:one)?(?:plus)? (a\d0\d\d)(?: b|\))/i
      ],
      [
        z,
        [
          V,
          Uc
        ],
        [
          D,
          Pe
        ]
      ],
      [
        /; (\w+) bui.+ oppo/i,
        /\b(cph[12]\d{3}|p(?:af|c[al]|d\w|e[ar])[mt]\d0|x9007|a101op)\b/i
      ],
      [
        z,
        [
          V,
          ia
        ],
        [
          D,
          Pe
        ]
      ],
      [
        /\b(opd2(\d{3}a?))(?: bui|\))/i
      ],
      [
        z,
        [
          V,
          ci,
          {
            OnePlus: [
              "203",
              "304",
              "403",
              "404",
              "413",
              "415"
            ],
            "*": ia
          }
        ],
        [
          D,
          Je
        ]
      ],
      [
        /(vivo (5r?|6|8l?|go|one|s|x[il]?[2-4]?)[\w\+ ]*)(?: bui|\))/i
      ],
      [
        z,
        [
          V,
          "BLU"
        ],
        [
          D,
          Pe
        ]
      ],
      [
        /; vivo (\w+)(?: bui|\))/i,
        /\b(v[12]\d{3}\w?[at])(?: bui|;)/i
      ],
      [
        z,
        [
          V,
          "Vivo"
        ],
        [
          D,
          Pe
        ]
      ],
      [
        /\b(rmx[1-3]\d{3})(?: bui|;|\))/i
      ],
      [
        z,
        [
          V,
          "Realme"
        ],
        [
          D,
          Pe
        ]
      ],
      [
        /(ideatab[-\w ]+|602lv|d-42a|a101lv|a2109a|a3500-hv|s[56]000|pb-6505[my]|tb-?x?\d{3,4}(?:f[cu]|xu|[av])|yt\d?-[jx]?\d+[lfmx])( bui|;|\)|\/)/i,
        /lenovo ?(b[68]0[08]0-?[hf]?|tab(?:[\w- ]+?)|tb[\w-]{6,7})( bui|;|\)|\/)/i
      ],
      [
        z,
        [
          V,
          Qo
        ],
        [
          D,
          Je
        ]
      ],
      [
        /lenovo[-_ ]?([-\w ]+?)(?: bui|\)|\/)/i
      ],
      [
        z,
        [
          V,
          Qo
        ],
        [
          D,
          Pe
        ]
      ],
      [
        /\b(milestone|droid(?:[2-4x]| (?:bionic|x2|pro|razr))?:?( 4g)?)\b[\w ]+build\//i,
        /\bmot(?:orola)?[- ]([\w\s]+)(\)| bui)/i,
        /((?:moto(?! 360)[-\w\(\) ]+|xt\d{3,4}[cgkosw\+]?[-\d]*|nexus 6)(?= bui|\)))/i
      ],
      [
        z,
        [
          V,
          ta
        ],
        [
          D,
          Pe
        ]
      ],
      [
        /\b(mz60\d|xoom[2 ]{0,2}) build\//i
      ],
      [
        z,
        [
          V,
          ta
        ],
        [
          D,
          Je
        ]
      ],
      [
        /\b(?:lg)?([vl]k\-?\d{3}) bui| 3\.[-\w; ]{10}lg?-([06cv9]{3,4})/i
      ],
      [
        z,
        [
          V,
          Is
        ],
        [
          D,
          Je
        ]
      ],
      [
        /(lm(?:-?f100[nv]?|-[\w\.]+)(?= bui|\))|nexus [45])/i,
        /\blg[-e;\/ ]+(?!.*(?:browser|netcast|android tv|watch|webos))(\w+)/i,
        /\blg-?([\d\w]+) bui/i
      ],
      [
        z,
        [
          V,
          Is
        ],
        [
          D,
          Pe
        ]
      ],
      [
        /(nokia) (t[12][01])/i
      ],
      [
        V,
        z,
        [
          D,
          Je
        ]
      ],
      [
        /(?:maemo|nokia).*(n900|lumia \d+|rm-\d+)/i,
        /nokia[-_ ]?(([-\w\. ]*?))( bui|\)|;|\/)/i
      ],
      [
        [
          z,
          /_/g,
          " "
        ],
        [
          D,
          Pe
        ],
        [
          V,
          "Nokia"
        ]
      ],
      [
        /(pixel (c|tablet))\b/i
      ],
      [
        z,
        [
          V,
          Mr
        ],
        [
          D,
          Je
        ]
      ],
      [
        /droid.+;(?: google)? (g(01[13]a|020[aem]|025[jn]|1b60|1f8f|2ybb|4s1m|576d|5nz6|8hhn|8vou|a02099|c15s|d1yq|e2ae|ec77|gh2x|kv4x|p4bc|pj41|r83y|tt9q|ur25|wvk6)|pixel[\d ]*a?( pro)?( xl)?( fold)?( \(5g\))?)( bui|\))/i
      ],
      [
        z,
        [
          V,
          Mr
        ],
        [
          D,
          Pe
        ]
      ],
      [
        /(google) (pixelbook( go)?)/i
      ],
      [
        V,
        z
      ],
      [
        /droid.+; (a?\d[0-2]{2}so|[c-g]\d{4}|so[-gl]\w+|xq-\w\w\d\d)(?= bui|\).+chrome\/(?![1-6]{0,1}\d\.))/i
      ],
      [
        z,
        [
          V,
          kn
        ],
        [
          D,
          Pe
        ]
      ],
      [
        /sony tablet [ps]/i,
        /\b(?:sony)?sgp\w+(?: bui|\))/i
      ],
      [
        [
          z,
          "Xperia Tablet"
        ],
        [
          V,
          kn
        ],
        [
          D,
          Je
        ]
      ],
      [
        /(alexa)webm/i,
        /(kf[a-z]{2}wi|aeo(?!bc)\w\w)( bui|\))/i,
        /(kf[a-z]+)( bui|\)).+silk\//i
      ],
      [
        z,
        [
          V,
          Es
        ],
        [
          D,
          Je
        ]
      ],
      [
        /((?:sd|kf)[0349hijorstuw]+)( bui|\)).+silk\//i
      ],
      [
        [
          z,
          /(.+)/g,
          "Fire Phone $1"
        ],
        [
          V,
          Es
        ],
        [
          D,
          Pe
        ]
      ],
      [
        /(playbook);[-\w\),; ]+(rim)/i
      ],
      [
        z,
        V,
        [
          D,
          Je
        ]
      ],
      [
        /\b((?:bb[a-f]|st[hv])100-\d)/i,
        /(?:blackberry|\(bb10;) (\w+)/i
      ],
      [
        z,
        [
          V,
          Nc
        ],
        [
          D,
          Pe
        ]
      ],
      [
        /(?:\b|asus_)(transfo[prime ]{4,10} \w+|eeepc|slider \w+|nexus 7|padfone|p00[cj])/i
      ],
      [
        z,
        [
          V,
          Lc
        ],
        [
          D,
          Je
        ]
      ],
      [
        / (z[bes]6[027][012][km][ls]|zenfone \d\w?)\b/i
      ],
      [
        z,
        [
          V,
          Lc
        ],
        [
          D,
          Pe
        ]
      ],
      [
        /(nexus 9)/i
      ],
      [
        z,
        [
          V,
          "HTC"
        ],
        [
          D,
          Je
        ]
      ],
      [
        /(htc)[-;_ ]{1,2}([\w ]+(?=\)| bui)|\w+)/i,
        /(zte)[- ]([\w ]+?)(?: bui|\/|\))/i,
        /(alcatel|geeksphone|nexian|panasonic(?!(?:;|\.))|sony(?!-bra))[-_ ]?([-\w]*)/i
      ],
      [
        V,
        [
          z,
          /_/g,
          " "
        ],
        [
          D,
          Pe
        ]
      ],
      [
        /tcl (xess p17aa)/i,
        /droid [\w\.]+; ((?:8[14]9[16]|9(?:0(?:48|60|8[01])|1(?:3[27]|66)|2(?:6[69]|9[56])|466))[gqswx])(_\w(\w|\w\w))?(\)| bui)/i
      ],
      [
        z,
        [
          V,
          "TCL"
        ],
        [
          D,
          Je
        ]
      ],
      [
        /droid [\w\.]+; (418(?:7d|8v)|5087z|5102l|61(?:02[dh]|25[adfh]|27[ai]|56[dh]|59k|65[ah])|a509dl|t(?:43(?:0w|1[adepqu])|50(?:6d|7[adju])|6(?:09dl|10k|12b|71[efho]|76[hjk])|7(?:66[ahju]|67[hw]|7[045][bh]|71[hk]|73o|76[ho]|79w|81[hks]?|82h|90[bhsy]|99b)|810[hs]))(_\w(\w|\w\w))?(\)| bui)/i
      ],
      [
        z,
        [
          V,
          "TCL"
        ],
        [
          D,
          Pe
        ]
      ],
      [
        /(itel) ((\w+))/i
      ],
      [
        [
          V,
          ur
        ],
        z,
        [
          D,
          ci,
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
        z,
        [
          V,
          "Acer"
        ],
        [
          D,
          Je
        ]
      ],
      [
        /droid.+; (m[1-5] note) bui/i,
        /\bmz-([-\w]{2,})/i
      ],
      [
        z,
        [
          V,
          "Meizu"
        ],
        [
          D,
          Pe
        ]
      ],
      [
        /; ((?:power )?armor(?:[\w ]{0,8}))(?: bui|\))/i
      ],
      [
        z,
        [
          V,
          "Ulefone"
        ],
        [
          D,
          Pe
        ]
      ],
      [
        /; (energy ?\w+)(?: bui|\))/i,
        /; energizer ([\w ]+)(?: bui|\))/i
      ],
      [
        z,
        [
          V,
          "Energizer"
        ],
        [
          D,
          Pe
        ]
      ],
      [
        /; cat (b35);/i,
        /; (b15q?|s22 flip|s48c|s62 pro)(?: bui|\))/i
      ],
      [
        z,
        [
          V,
          "Cat"
        ],
        [
          D,
          Pe
        ]
      ],
      [
        /((?:new )?andromax[\w- ]+)(?: bui|\))/i
      ],
      [
        z,
        [
          V,
          "Smartfren"
        ],
        [
          D,
          Pe
        ]
      ],
      [
        /droid.+; (a(in)?(0(15|59|6[35])|142)p?)/i
      ],
      [
        z,
        [
          V,
          "Nothing"
        ],
        [
          D,
          Pe
        ]
      ],
      [
        /; (x67 5g|tikeasy \w+|ac[1789]\d\w+)( b|\))/i,
        /archos ?(5|gamepad2?|([\w ]*[t1789]|hello) ?\d+[\w ]*)( b|\))/i
      ],
      [
        z,
        [
          V,
          "Archos"
        ],
        [
          D,
          Je
        ]
      ],
      [
        /archos ([\w ]+)( b|\))/i,
        /; (ac[3-6]\d\w{2,8})( b|\))/i
      ],
      [
        z,
        [
          V,
          "Archos"
        ],
        [
          D,
          Pe
        ]
      ],
      [
        /; (n159v)/i
      ],
      [
        z,
        [
          V,
          "HMD"
        ],
        [
          D,
          Pe
        ]
      ],
      [
        /(imo) (tab \w+)/i,
        /(infinix|tecno) (x1101b?|p904|dp(7c|8d|10a)( pro)?|p70[1-3]a?|p904|t1101)/i
      ],
      [
        V,
        z,
        [
          D,
          Je
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
        V,
        z,
        [
          D,
          Pe
        ]
      ],
      [
        /(kobo)\s(ereader|touch)/i,
        /(hp).+(touchpad(?!.+tablet)|tablet)/i,
        /(kindle)\/([\w\.]+)/i
      ],
      [
        V,
        z,
        [
          D,
          Je
        ]
      ],
      [
        /(surface duo)/i
      ],
      [
        z,
        [
          V,
          ea
        ],
        [
          D,
          Je
        ]
      ],
      [
        /droid [\d\.]+; (fp\du?)(?: b|\))/i
      ],
      [
        z,
        [
          V,
          "Fairphone"
        ],
        [
          D,
          Pe
        ]
      ],
      [
        /((?:tegranote|shield t(?!.+d tv))[\w- ]*?)(?: b|\))/i
      ],
      [
        z,
        [
          V,
          Fc
        ],
        [
          D,
          Je
        ]
      ],
      [
        /(sprint) (\w+)/i
      ],
      [
        V,
        z,
        [
          D,
          Pe
        ]
      ],
      [
        /(kin\.[onetw]{3})/i
      ],
      [
        [
          z,
          /\./g,
          " "
        ],
        [
          V,
          ea
        ],
        [
          D,
          Pe
        ]
      ],
      [
        /droid.+; ([c6]+|et5[16]|mc[239][23]x?|vc8[03]x?)\)/i
      ],
      [
        z,
        [
          V,
          na
        ],
        [
          D,
          Je
        ]
      ],
      [
        /droid.+; (ec30|ps20|tc[2-8]\d[kx])\)/i
      ],
      [
        z,
        [
          V,
          na
        ],
        [
          D,
          Pe
        ]
      ],
      [
        /(philips)[\w ]+tv/i,
        /smart-tv.+(samsung)/i
      ],
      [
        V,
        [
          D,
          gt
        ]
      ],
      [
        /hbbtv.+maple;(\d+)/i
      ],
      [
        [
          z,
          /^/,
          "SmartTV"
        ],
        [
          V,
          Pn
        ],
        [
          D,
          gt
        ]
      ],
      [
        /(vizio)(?: |.+model\/)(\w+-\w+)/i,
        /tcast.+(lg)e?. ([-\w]+)/i
      ],
      [
        V,
        z,
        [
          D,
          gt
        ]
      ],
      [
        /(nux; netcast.+smarttv|lg (netcast\.tv-201\d|android tv))/i
      ],
      [
        [
          V,
          Is
        ],
        [
          D,
          gt
        ]
      ],
      [
        /(apple) ?tv/i
      ],
      [
        V,
        [
          z,
          $r + " TV"
        ],
        [
          D,
          gt
        ]
      ],
      [
        /crkey.*devicetype\/chromecast/i
      ],
      [
        [
          z,
          er + " Third Generation"
        ],
        [
          V,
          Mr
        ],
        [
          D,
          gt
        ]
      ],
      [
        /crkey.*devicetype\/([^/]*)/i
      ],
      [
        [
          z,
          /^/,
          "Chromecast "
        ],
        [
          V,
          Mr
        ],
        [
          D,
          gt
        ]
      ],
      [
        /fuchsia.*crkey/i
      ],
      [
        [
          z,
          er + " Nest Hub"
        ],
        [
          V,
          Mr
        ],
        [
          D,
          gt
        ]
      ],
      [
        /crkey/i
      ],
      [
        [
          z,
          er
        ],
        [
          V,
          Mr
        ],
        [
          D,
          gt
        ]
      ],
      [
        /(portaltv)/i
      ],
      [
        z,
        [
          V,
          sa
        ],
        [
          D,
          gt
        ]
      ],
      [
        /droid.+aft(\w+)( bui|\))/i
      ],
      [
        z,
        [
          V,
          Es
        ],
        [
          D,
          gt
        ]
      ],
      [
        /(shield \w+ tv)/i
      ],
      [
        z,
        [
          V,
          Fc
        ],
        [
          D,
          gt
        ]
      ],
      [
        /\(dtv[\);].+(aquos)/i,
        /(aquos-tv[\w ]+)\)/i
      ],
      [
        z,
        [
          V,
          zc
        ],
        [
          D,
          gt
        ]
      ],
      [
        /(bravia[\w ]+)( bui|\))/i
      ],
      [
        z,
        [
          V,
          kn
        ],
        [
          D,
          gt
        ]
      ],
      [
        /(mi(tv|box)-?\w+) bui/i
      ],
      [
        z,
        [
          V,
          ra
        ],
        [
          D,
          gt
        ]
      ],
      [
        /Hbbtv.*(technisat) (.*);/i
      ],
      [
        V,
        z,
        [
          D,
          gt
        ]
      ],
      [
        /\b(roku)[\dx]*[\)\/]((?:dvp-)?[\d\.]*)/i,
        /hbbtv\/\d+\.\d+\.\d+ +\([\w\+ ]*; *([\w\d][^;]*);([^;]*)/i
      ],
      [
        [
          V,
          /.+\/(\w+)/,
          "$1",
          ci,
          {
            LG: "lge"
          }
        ],
        [
          z,
          to
        ],
        [
          D,
          gt
        ]
      ],
      [
        /(playstation \w+)/i
      ],
      [
        z,
        [
          V,
          kn
        ],
        [
          D,
          Ls
        ]
      ],
      [
        /\b(xbox(?: one)?(?!; xbox))[\); ]/i
      ],
      [
        z,
        [
          V,
          ea
        ],
        [
          D,
          Ls
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
          V,
          ci,
          {
            Nvidia: "Shield",
            Anbernic: "RGCUBE",
            Logitech: "GR0006"
          }
        ],
        z,
        [
          D,
          Ls
        ]
      ],
      [
        /\b(sm-[lr]\d\d[0156][fnuw]?s?|gear live)\b/i
      ],
      [
        z,
        [
          V,
          Pn
        ],
        [
          D,
          _i
        ]
      ],
      [
        /((pebble))app/i,
        /(asus|google|lg|oppo|xiaomi) ((pixel |zen)?watch[\w ]*)( bui|\))/i
      ],
      [
        V,
        z,
        [
          D,
          _i
        ]
      ],
      [
        /(ow(?:19|20)?we?[1-3]{1,3})/i
      ],
      [
        z,
        [
          V,
          ia
        ],
        [
          D,
          _i
        ]
      ],
      [
        /(watch)(?: ?os[,\/]|\d,\d\/)[\d\.]+/i
      ],
      [
        z,
        [
          V,
          $r
        ],
        [
          D,
          _i
        ]
      ],
      [
        /(opwwe\d{3})/i
      ],
      [
        z,
        [
          V,
          Uc
        ],
        [
          D,
          _i
        ]
      ],
      [
        /(moto 360)/i
      ],
      [
        z,
        [
          V,
          ta
        ],
        [
          D,
          _i
        ]
      ],
      [
        /(smartwatch 3)/i
      ],
      [
        z,
        [
          V,
          kn
        ],
        [
          D,
          _i
        ]
      ],
      [
        /(g watch r)/i
      ],
      [
        z,
        [
          V,
          Is
        ],
        [
          D,
          _i
        ]
      ],
      [
        /droid.+; (wt63?0{2,3})\)/i
      ],
      [
        z,
        [
          V,
          na
        ],
        [
          D,
          _i
        ]
      ],
      [
        /droid.+; (glass) \d/i
      ],
      [
        z,
        [
          V,
          Mr
        ],
        [
          D,
          _s
        ]
      ],
      [
        /(pico) ([\w ]+) os\d/i
      ],
      [
        V,
        z,
        [
          D,
          _s
        ]
      ],
      [
        /(quest( \d| pro)?s?).+vr/i
      ],
      [
        z,
        [
          V,
          sa
        ],
        [
          D,
          _s
        ]
      ],
      [
        /mobile vr; rv.+firefox/i
      ],
      [
        [
          D,
          _s
        ]
      ],
      [
        /(tesla)(?: qtcarbrowser|\/[-\w\.]+)/i
      ],
      [
        V,
        [
          D,
          xn
        ]
      ],
      [
        /(aeobc)\b/i
      ],
      [
        z,
        [
          V,
          Es
        ],
        [
          D,
          xn
        ]
      ],
      [
        /(homepod).+mac os/i
      ],
      [
        z,
        [
          V,
          $r
        ],
        [
          D,
          xn
        ]
      ],
      [
        /windows iot/i
      ],
      [
        [
          D,
          xn
        ]
      ],
      [
        /droid.+; ([\w- ]+) (4k|android|smart|google)[- ]?tv/i
      ],
      [
        z,
        [
          D,
          gt
        ]
      ],
      [
        /\b((4k|android|smart|opera)[- ]?tv|tv; rv:|large screen[\w ]+safari)\b/i
      ],
      [
        [
          D,
          gt
        ]
      ],
      [
        /droid .+?; ([^;]+?)(?: bui|; wv\)|\) applew|; hmsc).+?(mobile|vr|\d) safari/i
      ],
      [
        z,
        [
          D,
          ci,
          {
            mobile: "Mobile",
            xr: "VR",
            "*": Je
          }
        ]
      ],
      [
        /\b((tablet|tab)[;\/]|focus\/\d(?!.+mobile))/i
      ],
      [
        [
          D,
          Je
        ]
      ],
      [
        /(phone|mobile(?:[;\/]| [ \w\/\.]*safari)|pda(?=.+windows ce))/i
      ],
      [
        [
          D,
          Pe
        ]
      ],
      [
        /droid .+?; ([\w\. -]+)( bui|\))/i
      ],
      [
        z,
        [
          V,
          "Generic"
        ]
      ]
    ],
    engine: [
      [
        /windows.+ edge\/([\w\.]+)/i
      ],
      [
        B,
        [
          G,
          Ns + "HTML"
        ]
      ],
      [
        /(arkweb)\/([\w\.]+)/i
      ],
      [
        G,
        B
      ],
      [
        /webkit\/537\.36.+chrome\/(?!27)([\w\.]+)/i
      ],
      [
        B,
        [
          G,
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
        G,
        B
      ],
      [
        /ladybird\//i
      ],
      [
        [
          G,
          "LibWeb"
        ]
      ],
      [
        /rv\:([\w\.]{1,9})\b.+(gecko)/i
      ],
      [
        B,
        G
      ]
    ],
    os: [
      [
        /(windows nt) (6\.[23]); arm/i
      ],
      [
        [
          G,
          /N/,
          "R"
        ],
        [
          B,
          ci,
          Wc
        ]
      ],
      [
        /(windows (?:phone|mobile|iot))(?: os)?[\/ ]?([\d\.]*( se)?)/i,
        /(windows)[\/ ](1[01]|2000|3\.1|7|8(\.1)?|9[58]|me|server 20\d\d( r2)?|vista|xp)/i
      ],
      [
        G,
        B
      ],
      [
        /windows nt ?([\d\.\)]*)(?!.+xbox)/i,
        /\bwin(?=3| ?9|n)(?:nt| 9x )?([\d\.;]*)/i
      ],
      [
        [
          B,
          /(;|\))/g,
          "",
          ci,
          Wc
        ],
        [
          G,
          La
        ]
      ],
      [
        /(windows ce)\/?([\d\.]*)/i
      ],
      [
        G,
        B
      ],
      [
        /[adehimnop]{4,7}\b(?:.*os ([\w]+) like mac|; opera)/i,
        /(?:ios;fbsv|ios(?=.+ip(?:ad|hone)|.+apple ?tv)|ip(?:ad|hone)(?: |.+i(?:pad)?)os|apple ?tv.+ios)[\/ ]([\w\.]+)/i,
        /\btvos ?([\w\.]+)/i,
        /cfnetwork\/.+darwin/i
      ],
      [
        [
          B,
          /_/g,
          "."
        ],
        [
          G,
          "iOS"
        ]
      ],
      [
        /(mac os x) ?([\w\. ]*)/i,
        /(macintosh|mac_powerpc\b)(?!.+(haiku|morphos))/i
      ],
      [
        [
          G,
          "macOS"
        ],
        [
          B,
          /_/g,
          "."
        ]
      ],
      [
        /android ([\d\.]+).*crkey/i
      ],
      [
        B,
        [
          G,
          er + " Android"
        ]
      ],
      [
        /fuchsia.*crkey\/([\d\.]+)/i
      ],
      [
        B,
        [
          G,
          er + " Fuchsia"
        ]
      ],
      [
        /crkey\/([\d\.]+).*devicetype\/smartspeaker/i
      ],
      [
        B,
        [
          G,
          er + " SmartSpeaker"
        ]
      ],
      [
        /linux.*crkey\/([\d\.]+)/i
      ],
      [
        B,
        [
          G,
          er + " Linux"
        ]
      ],
      [
        /crkey\/([\d\.]+)/i
      ],
      [
        B,
        [
          G,
          er
        ]
      ],
      [
        /droid ([\w\.]+)\b.+(android[- ]x86)/i
      ],
      [
        B,
        G
      ],
      [
        /(ubuntu) ([\w\.]+) like android/i
      ],
      [
        [
          G,
          /(.+)/,
          "$1 Touch"
        ],
        B
      ],
      [
        /(harmonyos)[\/ ]?([\d\.]*)/i,
        /(android|bada|blackberry|kaios|maemo|meego|openharmony|qnx|rim tablet os|sailfish|series40|symbian|tizen)\w*[-\/\.; ]?([\d\.]*)/i
      ],
      [
        G,
        B
      ],
      [
        /\(bb(10);/i
      ],
      [
        B,
        [
          G,
          Nc
        ]
      ],
      [
        /(?:symbian ?os|symbos|s60(?=;)|series ?60)[-\/ ]?([\w\.]*)/i
      ],
      [
        B,
        [
          G,
          "Symbian"
        ]
      ],
      [
        /mozilla\/[\d\.]+ \((?:mobile[;\w ]*|tablet|tv|[^\)]*(?:viera|lg(?:l25|-d300)|alcatel ?o.+|y300-f1)); rv:([\w\.]+)\).+gecko\//i
      ],
      [
        B,
        [
          G,
          An + " OS"
        ]
      ],
      [
        /\b(?:hp)?wos(?:browser)?\/([\w\.]+)/i,
        /webos(?:[ \/]?|\.tv-20(?=2[2-9]))(\d[\d\.]*)/i
      ],
      [
        B,
        [
          G,
          "webOS"
        ]
      ],
      [
        /web0s;.+?(?:chr[o0]me|safari)\/(\d+)/i
      ],
      [
        [
          B,
          ci,
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
          G,
          "webOS"
        ]
      ],
      [
        /watch(?: ?os[,\/ ]|\d,\d\/)([\d\.]+)/i
      ],
      [
        B,
        [
          G,
          "watchOS"
        ]
      ],
      [
        /cros [\w]+(?:\)| ([\w\.]+)\b)/i
      ],
      [
        B,
        [
          G,
          "Chrome OS"
        ]
      ],
      [
        /kepler ([\w\.]+); (aft|aeo)/i
      ],
      [
        B,
        [
          G,
          "Vega OS"
        ]
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
        G,
        B
      ],
      [
        /(sunos) ?([\d\.]*)/i
      ],
      [
        [
          G,
          "Solaris"
        ],
        B
      ],
      [
        /\b(beos|os\/2|amigaos|openvms|hp-ux|serenityos)/i,
        /(unix) ?([\w\.]*)/i
      ],
      [
        G,
        B
      ]
    ]
  }, Ss = (function() {
    var e = {
      init: {},
      isIgnore: {},
      isIgnoreRgx: {},
      toString: {}
    };
    return $i.call(e.init, [
      [
        Gt,
        [
          G,
          B,
          rs,
          D
        ]
      ],
      [
        Wi,
        [
          Nt
        ]
      ],
      [
        Pi,
        [
          D,
          z,
          V
        ]
      ],
      [
        ui,
        [
          G,
          B
        ]
      ],
      [
        Jt,
        [
          G,
          B
        ]
      ]
    ]), $i.call(e.isIgnore, [
      [
        Gt,
        [
          B,
          rs
        ]
      ],
      [
        ui,
        [
          B
        ]
      ],
      [
        Jt,
        [
          B
        ]
      ]
    ]), $i.call(e.isIgnoreRgx, [
      [
        Gt,
        / ?browser$/i
      ],
      [
        Jt,
        / ?os$/i
      ]
    ]), $i.call(e.toString, [
      [
        Gt,
        [
          G,
          B
        ]
      ],
      [
        Wi,
        [
          Nt
        ]
      ],
      [
        Pi,
        [
          V,
          z
        ]
      ],
      [
        ui,
        [
          G,
          B
        ]
      ],
      [
        Jt,
        [
          G,
          B
        ]
      ]
    ]), e;
  })(), xy = function(e, t) {
    var i = Ss.init[t], r = Ss.isIgnore[t] || 0, a = Ss.isIgnoreRgx[t] || 0, c = Ss.toString[t] || 0;
    function f() {
      $i.call(this, i);
    }
    return f.prototype.getItem = function() {
      return e;
    }, f.prototype.withClientHints = function() {
      return Or ? Or.getHighEntropyValues(hh).then(function(h) {
        return e.setCH(new dh(h, false)).parseCH().get();
      }) : e.parseCH().get();
    }, f.prototype.withFeatureCheck = function() {
      return e.detectFeature().get();
    }, t != un && (f.prototype.is = function(h) {
      var p = false;
      for (var v in this) if (this.hasOwnProperty(v) && !Na(r, v) && ur(a ? hn(a, this[v]) : this[v]) == ur(a ? hn(a, h) : h)) {
        if (p = true, h != ht.UNDEFINED) break;
      } else if (h == ht.UNDEFINED && p) {
        p = !p;
        break;
      }
      return p;
    }, f.prototype.toString = function() {
      var h = cn;
      for (var p in c) typeof this[c[p]] !== ht.UNDEFINED && (h += (h ? " " : cn) + this[c[p]]);
      return h || ht.UNDEFINED;
    }), f.prototype.then = function(h) {
      var p = this, v = function() {
        for (var I in p) p.hasOwnProperty(I) && (this[I] = p[I]);
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
  function dh(e, t) {
    if (e = e || {}, $i.call(this, hh), t) $i.call(this, [
      [
        dl,
        oa(e[yr])
      ],
      [
        pl,
        oa(e[Iy])
      ],
      [
        Pe,
        /\?1/.test(e[Py])
      ],
      [
        z,
        Rn(e[ky])
      ],
      [
        fn,
        Rn(e[fh])
      ],
      [
        gl,
        Rn(e[Ay])
      ],
      [
        Nt,
        Rn(e[Sy])
      ],
      [
        Cr,
        oa(e[My])
      ],
      [
        Oo,
        Rn(e[Ty])
      ]
    ]);
    else for (var i in e) this.hasOwnProperty(i) && typeof e[i] !== ht.UNDEFINED && (this[i] = e[i]);
  }
  function pr(e, t, i, r) {
    return $i.call(this, [
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
        i
      ],
      [
        "data",
        xy(this, e)
      ]
    ]), this;
  }
  pr.prototype.get = function(e) {
    return e ? this.data.hasOwnProperty(e) ? this.data[e] : void 0 : this.data;
  };
  pr.prototype.set = function(e, t) {
    return this.data[e] = t, this;
  };
  pr.prototype.setCH = function(e) {
    return this.uaCH = e, this;
  };
  pr.prototype.detectFeature = function() {
    if (Ut && Ut.userAgent == this.ua) switch (this.itemType) {
      case Gt:
        Ut.brave && typeof Ut.brave.isBrave == ht.FUNCTION && this.set(G, "Brave");
        break;
      case Pi:
        !this.get(D) && Or && Or[Pe] && this.set(D, Pe), this.get(z) == "Macintosh" && Ut && typeof Ut.standalone !== ht.UNDEFINED && Ut.maxTouchPoints && Ut.maxTouchPoints > 2 && this.set(z, "iPad").set(D, Je);
        break;
      case Jt:
        !this.get(G) && Or && Or[fn] && this.set(G, Or[fn]);
        break;
      case un:
        var e = this.data, t = function(i) {
          return e[i].getItem().detectFeature().get();
        };
        this.set(Gt, t(Gt)).set(Wi, t(Wi)).set(Pi, t(Pi)).set(ui, t(ui)).set(Jt, t(Jt));
    }
    return this;
  };
  pr.prototype.parseUA = function() {
    switch (this.itemType != un && ja.call(this.data, this.ua, this.rgxMap), this.itemType) {
      case Gt:
        this.set(rs, Da(this.get(B)));
        break;
      case Jt:
        if (this.get(G) == "iOS" && this.get(B) == "18.6") {
          var e = /\) Version\/([\d\.]+)/.exec(this.ua);
          e && parseInt(e[1].substring(0, 2), 10) >= 26 && this.set(B, e[1]);
        }
        break;
    }
    return this;
  };
  pr.prototype.parseCH = function() {
    var e = this.uaCH, t = this.rgxMap;
    switch (this.itemType) {
      case Gt:
      case ui:
        var i = e[pl] || e[dl], r;
        if (i) for (var a = 0; a < i.length; a++) {
          var c = i[a].brand || i[a], f = i[a].version;
          this.itemType == Gt && !/not.a.brand/i.test(c) && (!r || /Chrom/.test(r) && c != $c || r == Ns && /WebView2/.test(c)) && (c = ci(c, Oy), r = this.get(G), r && !/Chrom/.test(r) && /Chrom/.test(c) || this.set(G, c).set(B, f).set(rs, Da(f)), r = c), this.itemType == ui && c == $c && this.set(B, f);
        }
        break;
      case Wi:
        var h = e[Nt];
        h && (h && e[Oo] == "64" && (h += "64"), ja.call(this.data, h + ";", t));
        break;
      case Pi:
        if (e[Pe] && this.set(D, Pe), e[z] && (this.set(z, e[z]), !this.get(D) || !this.get(V))) {
          var p = {};
          ja.call(p, "droid 9; " + e[z] + ")", t), !this.get(D) && p.type && this.set(D, p.type), !this.get(V) && p.vendor && this.set(V, p.vendor);
        }
        if (e[Cr]) {
          var v;
          if (typeof e[Cr] != "string") for (var g = 0; !v && g < e[Cr].length; ) v = ci(e[Cr][g++], Vc);
          else v = ci(e[Cr], Vc);
          this.set(D, v);
        }
        break;
      case Jt:
        var I = e[fn];
        if (I) {
          var C = e[gl];
          I == La && (C = parseInt(Da(C), 10) >= 13 ? "11" : "10"), this.set(G, I).set(B, C);
        }
        this.get(G) == La && e[z] == "Xbox" && this.set(G, "Xbox").set(B, void 0);
        break;
      case un:
        var A = this.data, F = function(x) {
          return A[x].getItem().setCH(e).parseCH().get();
        };
        this.set(Gt, F(Gt)).set(Wi, F(Wi)).set(Pi, F(Pi)).set(ui, F(ui)).set(Jt, F(Jt));
    }
    return this;
  };
  Ji = function(e, t, i) {
    if (typeof e === ht.OBJECT ? (eo(e, true) ? (typeof t === ht.OBJECT && (i = t), t = e) : (i = e, t = void 0), e = void 0) : typeof e === ht.STRING && !eo(t, true) && (i = t, t = void 0), i) if (typeof i.append === ht.FUNCTION) {
      var r = {};
      i.forEach(function(g, I) {
        r[String(I).toLowerCase()] = g;
      }), i = r;
    } else {
      var a = {};
      for (var c in i) i.hasOwnProperty(c) && (a[String(c).toLowerCase()] = i[c]);
      i = a;
    }
    if (!(this instanceof Ji)) return new Ji(e, t, i).getResult();
    var f = typeof e === ht.STRING ? e : i && i[Oc] ? i[Oc] : Ut && Ut.userAgent ? Ut.userAgent : cn, h = new dh(i, true), p = t ? Cy(qc, t) : qc, v = function(g) {
      return g == un ? function() {
        return new pr(g, f, p, h).set("ua", f).set(Gt, this.getBrowser()).set(Wi, this.getCPU()).set(Pi, this.getDevice()).set(ui, this.getEngine()).set(Jt, this.getOS()).get();
      } : function() {
        return new pr(g, f, p[g], h).parseUA().get();
      };
    };
    return $i.call(this, [
      [
        "getBrowser",
        v(Gt)
      ],
      [
        "getCPU",
        v(Wi)
      ],
      [
        "getDevice",
        v(Pi)
      ],
      [
        "getEngine",
        v(ui)
      ],
      [
        "getOS",
        v(Jt)
      ],
      [
        "getResult",
        v(un)
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
          return cs(g) && (f = to(g, _y)), this;
        }
      ]
    ]).setUA(f), this;
  };
  Ji.VERSION = vy;
  Ji.BROWSER = xo([
    G,
    B,
    rs,
    D
  ]);
  Ji.CPU = xo([
    Nt
  ]);
  Ji.DEVICE = xo([
    z,
    V,
    D,
    Ls,
    Pe,
    gt,
    Je,
    _i,
    xn
  ]);
  Ji.ENGINE = Ji.OS = xo([
    G,
    B
  ]);
  var ft = ((e) => (e.TAURI = "tauri", e.WEB = "web", e.MOBILE_WEB = "mobile_web", e.UNKNOWN = "unknown", e))(ft || {});
  class Ly {
    constructor() {
      __publicField(this, "parser");
      const t = typeof navigator < "u" ? navigator.userAgent : "";
      this.parser = new Ji(t);
    }
    detectEnvironment() {
      return this.isTauriEnvironment() ? ft.TAURI : this.parser.getDevice().type === "mobile" ? ft.MOBILE_WEB : ft.WEB;
    }
    isTauriEnvironment() {
      return false;
    }
    getPlatformContext() {
      const t = this.detectEnvironment(), i = this.parser.getDevice(), r = this.parser.getBrowser(), a = this.parser.getOS();
      return {
        environment: t,
        capabilities: this.getPlatformCapabilities(t),
        configuration: this.getDefaultConfiguration(t),
        userAgent: typeof navigator < "u" ? navigator.userAgent : "",
        isMobile: i.type === "mobile",
        isTablet: i.type === "tablet",
        browser: r.name || void 0,
        os: a.name || void 0
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
        case ft.TAURI:
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
        case ft.MOBILE_WEB:
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
        case ft.WEB:
        case ft.UNKNOWN:
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
        case ft.TAURI:
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
        case ft.MOBILE_WEB:
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
        case ft.WEB:
        case ft.UNKNOWN:
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
        return !t.environment || !t.capabilities ? k(new De("Invalid platform detection results")) : (console.info("[PlatformDetector] Platform detected:", {
          environment: t.environment,
          isMobile: t.isMobile,
          isTablet: t.isTablet,
          browser: t.browser,
          os: t.os
        }), N(true));
      } catch (t) {
        return k(new De("Platform detection failed", void 0, t));
      }
    }
  }
  const ml = new Ly();
  Nv = function() {
    return ml.getPlatformContext();
  };
  function _t(e, t, i, r) {
    if (typeof t == "function" ? e !== t || !r : !t.has(e)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
    return i === "m" ? r : i === "a" ? r.call(e) : r ? r.value : t.get(e);
  }
  function Jr(e, t, i, r, a) {
    if (typeof t == "function" ? e !== t || true : !t.has(e)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
    return t.set(e, i), i;
  }
  var Pr, ii, qr, Ts, Ds;
  const Kc = "__TAURI_TO_IPC_KEY__";
  function ph(e, t = false) {
    return window.__TAURI_INTERNALS__.transformCallback(e, t);
  }
  Dv = class {
    constructor(t) {
      Pr.set(this, void 0), ii.set(this, 0), qr.set(this, []), Ts.set(this, void 0), Jr(this, Pr, t || (() => {
      })), this.id = ph((i) => {
        const r = i.index;
        if ("end" in i) {
          r == _t(this, ii, "f") ? this.cleanupCallback() : Jr(this, Ts, r);
          return;
        }
        const a = i.message;
        if (r == _t(this, ii, "f")) {
          for (_t(this, Pr, "f").call(this, a), Jr(this, ii, _t(this, ii, "f") + 1); _t(this, ii, "f") in _t(this, qr, "f"); ) {
            const c = _t(this, qr, "f")[_t(this, ii, "f")];
            _t(this, Pr, "f").call(this, c), delete _t(this, qr, "f")[_t(this, ii, "f")], Jr(this, ii, _t(this, ii, "f") + 1);
          }
          _t(this, ii, "f") === _t(this, Ts, "f") && this.cleanupCallback();
        } else _t(this, qr, "f")[r] = a;
      });
    }
    cleanupCallback() {
      window.__TAURI_INTERNALS__.unregisterCallback(this.id);
    }
    set onmessage(t) {
      Jr(this, Pr, t);
    }
    get onmessage() {
      return _t(this, Pr, "f");
    }
    [(Pr = /* @__PURE__ */ new WeakMap(), ii = /* @__PURE__ */ new WeakMap(), qr = /* @__PURE__ */ new WeakMap(), Ts = /* @__PURE__ */ new WeakMap(), Kc)]() {
      return `__CHANNEL__:${this.id}`;
    }
    toJSON() {
      return this[Kc]();
    }
  };
  jv = async function(e) {
    return ut(`plugin:${e}|check_permissions`);
  };
  ut = async function(e, t = {}, i) {
    return window.__TAURI_INTERNALS__.invoke(e, t, i);
  };
  class Ny {
    get rid() {
      return _t(this, Ds, "f");
    }
    constructor(t) {
      Ds.set(this, void 0), Jr(this, Ds, t);
    }
    async close() {
      return ut("plugin:resources|close", {
        rid: this.rid
      });
    }
  }
  Ds = /* @__PURE__ */ new WeakMap();
  var Zc;
  (function(e) {
    e.WINDOW_RESIZED = "tauri://resize", e.WINDOW_MOVED = "tauri://move", e.WINDOW_CLOSE_REQUESTED = "tauri://close-requested", e.WINDOW_DESTROYED = "tauri://destroyed", e.WINDOW_FOCUS = "tauri://focus", e.WINDOW_BLUR = "tauri://blur", e.WINDOW_SCALE_FACTOR_CHANGED = "tauri://scale-change", e.WINDOW_THEME_CHANGED = "tauri://theme-changed", e.WINDOW_CREATED = "tauri://window-created", e.WEBVIEW_CREATED = "tauri://webview-created", e.DRAG_ENTER = "tauri://drag-enter", e.DRAG_OVER = "tauri://drag-over", e.DRAG_DROP = "tauri://drag-drop", e.DRAG_LEAVE = "tauri://drag-leave";
  })(Zc || (Zc = {}));
  async function Dy(e, t) {
    window.__TAURI_EVENT_PLUGIN_INTERNALS__.unregisterListener(e, t), await ut("plugin:event|unlisten", {
      event: e,
      eventId: t
    });
  }
  async function Jc(e, t, i) {
    var r;
    const a = (r = void 0) !== null && r !== void 0 ? r : {
      kind: "Any"
    };
    return ut("plugin:event|listen", {
      event: e,
      target: a,
      handler: ph(t)
    }).then((c) => async () => Dy(e, c));
  }
  async function jy(e, t) {
    return await io.load(e, t);
  }
  class io extends Ny {
    constructor(t) {
      super(t);
    }
    static async load(t, i) {
      const r = await ut("plugin:store|load", {
        path: t,
        options: i
      });
      return new io(r);
    }
    static async get(t) {
      return await ut("plugin:store|get_store", {
        path: t
      }).then((i) => i ? new io(i) : null);
    }
    async set(t, i) {
      await ut("plugin:store|set", {
        rid: this.rid,
        key: t,
        value: i
      });
    }
    async get(t) {
      const [i, r] = await ut("plugin:store|get", {
        rid: this.rid,
        key: t
      });
      return r ? i : void 0;
    }
    async has(t) {
      return await ut("plugin:store|has", {
        rid: this.rid,
        key: t
      });
    }
    async delete(t) {
      return await ut("plugin:store|delete", {
        rid: this.rid,
        key: t
      });
    }
    async clear() {
      await ut("plugin:store|clear", {
        rid: this.rid
      });
    }
    async reset() {
      await ut("plugin:store|reset", {
        rid: this.rid
      });
    }
    async keys() {
      return await ut("plugin:store|keys", {
        rid: this.rid
      });
    }
    async values() {
      return await ut("plugin:store|values", {
        rid: this.rid
      });
    }
    async entries() {
      return await ut("plugin:store|entries", {
        rid: this.rid
      });
    }
    async length() {
      return await ut("plugin:store|length", {
        rid: this.rid
      });
    }
    async reload(t) {
      await ut("plugin:store|reload", {
        rid: this.rid,
        ...t
      });
    }
    async save() {
      await ut("plugin:store|save", {
        rid: this.rid
      });
    }
    async onKeyChange(t, i) {
      return await Jc("store://change", (r) => {
        r.payload.resourceId === this.rid && r.payload.key === t && i(r.payload.exists ? r.payload.value : void 0);
      });
    }
    async onChange(t) {
      return await Jc("store://change", (i) => {
        i.payload.resourceId === this.rid && t(i.payload.key, i.payload.exists ? i.payload.value : void 0);
      });
    }
  }
  class Fe extends bn {
    constructor(t, i, r) {
      super(t, r);
      __publicField(this, "domain", ls.STORAGE);
      this.code = i;
    }
  }
  var je = ((e) => (e.INITIALIZATION_FAILED = "INITIALIZATION_FAILED", e.NOT_INITIALIZED = "NOT_INITIALIZED", e.SET_FAILED = "SET_FAILED", e.GET_FAILED = "GET_FAILED", e.SAVE_FAILED = "SAVE_FAILED", e.EXPORT_FAILED = "EXPORT_FAILED", e.CLEAR_FAILED = "CLEAR_FAILED", e.REMOVE_FAILED = "REMOVE_FAILED", e))(je || {});
  class et extends bn {
    constructor(t, i, r) {
      super(t, r);
      __publicField(this, "domain", ls.GEOLOCATION);
      this.code = i;
    }
  }
  var Ke = ((e) => (e.INITIALIZATION_FAILED = "INITIALIZATION_FAILED", e.NOT_INITIALIZED = "NOT_INITIALIZED", e.PERMISSION_DENIED = "PERMISSION_DENIED", e.POSITION_UNAVAILABLE = "POSITION_UNAVAILABLE", e.TIMEOUT = "TIMEOUT", e.UNSUPPORTED = "UNSUPPORTED", e.WATCH_FAILED = "WATCH_FAILED", e.CLEAR_WATCH_FAILED = "CLEAR_WATCH_FAILED", e))(Ke || {});
  class kr extends bn {
    constructor(t, i, r) {
      super(t, r);
      __publicField(this, "domain", ls.GENERIC);
      this.code = i;
    }
  }
  var nr = ((e) => (e.DETECTION_FAILED = "DETECTION_FAILED", e.INVALID_CONTEXT = "INVALID_CONTEXT", e.UNSUPPORTED_PLATFORM = "UNSUPPORTED_PLATFORM", e.NOT_INITIALIZED = "NOT_INITIALIZED", e))(nr || {});
  class Fy {
    constructor(t = "user-data.json") {
      __publicField(this, "store", null);
      __publicField(this, "initialized", false);
      __publicField(this, "storePath");
      this.storePath = t;
    }
    async init() {
      if (this.initialized) return N(void 0);
      try {
        return this.store = await jy(this.storePath, {
          autoSave: false,
          defaults: {}
        }), this.initialized = true, N(void 0);
      } catch (t) {
        return k(new Fe("Failed to initialize Tauri storage", je.INITIALIZATION_FAILED, t));
      }
    }
    async set(t, i) {
      if (!this.store) return k(new Fe("Tauri store not initialized", je.NOT_INITIALIZED));
      try {
        return await this.store.set(t, i), N(void 0);
      } catch (r) {
        return k(new Fe(`Failed to set value for key: ${t}`, je.SET_FAILED, r));
      }
    }
    async get(t) {
      if (!this.store) return k(new Fe("Tauri store not initialized", je.NOT_INITIALIZED));
      try {
        const i = await this.store.get(t);
        return N(i ?? null);
      } catch (i) {
        return k(new Fe(`Failed to get value for key: ${t}`, je.GET_FAILED, i));
      }
    }
    async save() {
      if (!this.store) return k(new Fe("Tauri store not initialized", je.NOT_INITIALIZED));
      try {
        return await this.store.save(), N(void 0);
      } catch (t) {
        return k(new Fe("Failed to save store", je.SAVE_FAILED, t));
      }
    }
    async exportToJson() {
      if (!this.store) return k(new Fe("Tauri store not initialized", je.NOT_INITIALIZED));
      try {
        const t = await this.store.keys(), i = {};
        for (const r of t) {
          const a = await this.store.get(r);
          i[r] = a;
        }
        return N(JSON.stringify(i, null, 2));
      } catch (t) {
        return k(new Fe("Failed to export data to JSON", je.EXPORT_FAILED, t));
      }
    }
    async clear() {
      if (!this.store) return k(new Fe("Tauri store not initialized", je.NOT_INITIALIZED));
      try {
        const t = await this.store.keys();
        for (const i of t) await this.store.delete(i);
        return N(void 0);
      } catch (t) {
        return k(new Fe("Failed to clear store", je.CLEAR_FAILED, t));
      }
    }
    async remove(t) {
      if (!this.store) return k(new Fe("Tauri store not initialized", je.NOT_INITIALIZED));
      try {
        return await this.store.delete(t), N(void 0);
      } catch (i) {
        return k(new Fe(`Failed to remove key: ${t}`, je.REMOVE_FAILED, i));
      }
    }
    async scanKeys(t) {
      if (!this.store) return k(new Fe("Tauri store not initialized", je.NOT_INITIALIZED));
      try {
        const r = (await this.store.keys()).filter((a) => a.startsWith(t));
        return N(r);
      } catch (i) {
        return k(new Fe("Failed to scan keys", je.GET_FAILED, i));
      }
    }
    async batchSet(t) {
      if (!this.store) return k(new Fe("Tauri store not initialized", je.NOT_INITIALIZED));
      try {
        for (const { key: i, value: r } of t) await this.store.set(i, r);
        return N(void 0);
      } catch (i) {
        return k(new Fe("Failed to batch set values", je.SET_FAILED, i));
      }
    }
  }
  let Uy, zy;
  aa = {
    theme: "system",
    nightMode: false,
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
    imuUpdateFrequency: 20,
    kalmanGpsUpdateInterval: 1e3,
    nightModeMapStyleUrl: "",
    kalmanInitialAccelerationUncertainty: 0.1,
    kalmanInitialPositionUncertainty: 1,
    kalmanInitialVelocityUncertainty: 0.1,
    kalmanGpsSpeedUncertainty: 1,
    routeSimplificationChunkSize: 100,
    routeSimplificationThreshold: 0.01,
    routeSimplificationMaxIterations: 3,
    routeSimplificationMaxDistance: 5,
    routeSimplificationMinDistance: 0.5
  };
  Fv = [
    {
      key: "theme",
      name: "Theme",
      type: "string",
      description: "Application theme (light, dark, or system default)",
      userFacing: true
    },
    {
      key: "nightMode",
      name: "Night Mode",
      type: "boolean",
      description: "Enable night mode with red tint for low-light conditions",
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
      description: "Backend strategy for geolocation (auto, kalman, kalman-no-imu, gps, or ip)",
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
      key: "nightModeMapStyleUrl",
      name: "Night Mode Map Style URL",
      type: "string",
      description: "Custom map style URL for night mode (leave empty to use default toner-v2 style)"
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
      description: "Use Kalman filter for GPS position smoothing",
      userFacing: true
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
    },
    {
      key: "kalmanInitialAccelerationUncertainty",
      name: "Initial Acceleration Uncertainty",
      type: "number",
      description: "Initial uncertainty for acceleration in Kalman filter (m/s\xB2)"
    },
    {
      key: "kalmanInitialPositionUncertainty",
      name: "Initial Position Uncertainty",
      type: "number",
      description: "Initial uncertainty for position in Kalman filter (meters)"
    },
    {
      key: "kalmanInitialVelocityUncertainty",
      name: "Initial Velocity Uncertainty",
      type: "number",
      description: "Initial uncertainty for velocity in Kalman filter (m/s)"
    },
    {
      key: "kalmanGpsSpeedUncertainty",
      name: "GPS Speed Uncertainty",
      type: "number",
      description: "GPS speed uncertainty (m/s)"
    },
    {
      key: "routeSimplificationChunkSize",
      name: "Route Simplification Chunk Size",
      type: "number",
      description: "Number of points to accumulate before running route simplification algorithm"
    },
    {
      key: "routeSimplificationThreshold",
      name: "Route Simplification Threshold",
      type: "number",
      description: "Distance threshold as percentage of line segment length (0.0-1.0) for removing points during simplification"
    },
    {
      key: "routeSimplificationMaxIterations",
      name: "Route Simplification Max Iterations",
      type: "number",
      description: "Maximum number of iterations for route simplification to prevent excessive simplification"
    },
    {
      key: "routeSimplificationMaxDistance",
      name: "Route Simplification Max Distance",
      type: "number",
      description: "Maximum absolute distance (in meters) for removing points, regardless of percentage threshold. Prevents excessive simplification on long line segments."
    },
    {
      key: "routeSimplificationMinDistance",
      name: "Route Simplification Min Distance",
      type: "number",
      description: "Minimum absolute distance (in meters) required to remove a point. Points closer than this distance will not be removed, preventing over-simplification of short segments."
    }
  ];
  Uy = "trackmaker_settings";
  zy = typeof window < "u" && window.__TAURI_INTERNALS__ !== void 0;
  function Ye(e) {
    try {
      if (typeof localStorage > "u") return aa[e];
      const t = localStorage.getItem(Uy);
      if (t !== null) return JSON.parse(t)[e] ?? aa[e];
    } catch {
    }
    return aa[e];
  }
  function Fa() {
    return Ye("debugMode");
  }
  function gh() {
    return Ye("gpsUpdateInterval");
  }
  function Gy() {
    return Ye("kalmanGpsUpdateInterval");
  }
  function $y() {
    return Ye("enableKalmanFilter");
  }
  Uv = function() {
    return Ye("mapZoomLevel");
  };
  zv = function() {
    return Ye("keepScreenOn");
  };
  Gv = function() {
    return Ye("mapTileServer");
  };
  $v = function() {
    return Ye("showCompass");
  };
  Bv = function() {
    return Ye("autoRecenterTimeout");
  };
  Wv = function() {
    return Ye("customMapTileUrl");
  };
  Vv = function() {
    return Ye("mapTilerApiKey");
  };
  qv = function() {
    return Ye("nightModeMapStyleUrl");
  };
  function Ua() {
    return Ye("imuUpdateFrequency");
  }
  function By() {
    return Ye("kalmanInitialAccelerationUncertainty");
  }
  function Wy() {
    return Ye("kalmanInitialPositionUncertainty");
  }
  function Vy() {
    return Ye("kalmanInitialVelocityUncertainty");
  }
  function qy() {
    return Ye("kalmanGpsSpeedUncertainty");
  }
  Kv = function() {
    return Ye("routeSimplificationChunkSize");
  };
  Zv = function() {
    return Ye("routeSimplificationThreshold");
  };
  Jv = function() {
    return Ye("routeSimplificationMaxIterations");
  };
  Hv = function() {
    return Ye("routeSimplificationMaxDistance");
  };
  Yv = function() {
    return Ye("routeSimplificationMinDistance");
  };
  class Ky {
    constructor(t = "trackmaker-db", i = "user-data") {
      __publicField(this, "db", null);
      __publicField(this, "initialized", false);
      __publicField(this, "dbName");
      __publicField(this, "storeName");
      this.dbName = t, this.storeName = i;
    }
    getMaxCacheSize() {
      try {
        return Ye("maxCacheSize") || 100;
      } catch {
        return 100;
      }
    }
    async shouldPruneCache() {
      return this.db ? new Promise((t) => {
        const a = this.db.transaction(this.storeName, "readonly").objectStore(this.storeName).count();
        a.onsuccess = () => {
          const c = this.getMaxCacheSize() * 10;
          t(a.result > c);
        }, a.onerror = () => t(false);
      }) : false;
    }
    async pruneCache() {
      if (this.db) return new Promise((t, i) => {
        const r = this.db.transaction(this.storeName, "readwrite"), c = r.objectStore(this.storeName).index("timestamp").openCursor(null, "prev"), f = 100;
        let h = 0;
        c.onsuccess = (p) => {
          const v = p.target.result;
          v && h < f && (v.delete(), h++, v.continue());
        }, r.oncomplete = () => t(), r.onerror = () => i(new Error("Failed to prune cache"));
      });
    }
    async init() {
      if (this.initialized) return N(void 0);
      try {
        return this.db = await this.openDatabase(), this.initialized = true, N(void 0);
      } catch (t) {
        return k(new Fe("Failed to initialize Web storage", je.INITIALIZATION_FAILED, t));
      }
    }
    openDatabase() {
      return new Promise((t, i) => {
        const r = indexedDB.open(this.dbName, 1);
        r.onupgradeneeded = (a) => {
          const c = a.target.result;
          c.objectStoreNames.contains(this.storeName) || c.createObjectStore(this.storeName);
        }, r.onsuccess = (a) => {
          t(a.target.result);
        }, r.onerror = (a) => {
          i(a.target.error ?? Error("Failed to open database"));
        };
      });
    }
    async set(t, i) {
      if (!this.db) return k(new Fe("Database not initialized", je.NOT_INITIALIZED));
      try {
        return await this.shouldPruneCache() && await this.pruneCache(), await this.executeTransaction("readwrite", (r) => new Promise((a, c) => {
          const f = r.put(Ca(i), t);
          f.onsuccess = () => a(), f.onerror = () => c(new Error("Failed to set value"));
        })), N(void 0);
      } catch (r) {
        return k(new Fe(`Failed to set value for key: ${t}`, je.SET_FAILED, r));
      }
    }
    async get(t) {
      if (!this.db) return k(new Fe("Database not initialized", je.NOT_INITIALIZED));
      try {
        const i = await this.executeTransaction("readonly", (r) => new Promise((a, c) => {
          const f = r.get(t);
          f.onsuccess = () => a(f.result), f.onerror = () => c(new Error("Failed to get value"));
        }));
        return N(i);
      } catch (i) {
        return k(new Fe(`Failed to get value for key: ${t}`, je.GET_FAILED, i));
      }
    }
    async save() {
      return N(void 0);
    }
    async exportToJson() {
      if (!this.db) return k(new Fe("Database not initialized", je.NOT_INITIALIZED));
      try {
        const t = await this.executeTransaction("readonly", (i) => new Promise((r, a) => {
          const c = i.getAll();
          c.onsuccess = () => {
            const h = c.result.reduce((p, v, g) => (p[g] = v, p), {});
            r(h);
          }, c.onerror = () => a(new Error("Failed to export data"));
        }));
        return N(JSON.stringify(t, null, 2));
      } catch (t) {
        return k(new Fe("Failed to export data to JSON", je.EXPORT_FAILED, t));
      }
    }
    async clear() {
      if (!this.db) return k(new Fe("Database not initialized", je.NOT_INITIALIZED));
      try {
        return await this.executeTransaction("readwrite", (t) => new Promise((i, r) => {
          const a = t.clear();
          a.onsuccess = () => i(), a.onerror = () => r(new Error("Failed to clear store"));
        })), N(void 0);
      } catch (t) {
        return k(new Fe("Failed to clear store", je.CLEAR_FAILED, t));
      }
    }
    async remove(t) {
      if (!this.db) return k(new Fe("Database not initialized", je.NOT_INITIALIZED));
      try {
        return await this.executeTransaction("readwrite", (i) => new Promise((r, a) => {
          const c = i.delete(t);
          c.onsuccess = () => r(), c.onerror = () => a(new Error("Failed to remove key"));
        })), N(void 0);
      } catch (i) {
        return k(new Fe(`Failed to remove key: ${t}`, je.REMOVE_FAILED, i));
      }
    }
    async scanKeys(t) {
      if (!this.db) return k(new Fe("Database not initialized", je.NOT_INITIALIZED));
      try {
        const i = await this.executeTransaction("readonly", (r) => new Promise((a, c) => {
          const f = IDBKeyRange.bound(t, t + "\uFFFF"), h = r.openCursor(f), p = [];
          h.onsuccess = (v) => {
            const g = v.target.result;
            if (g) {
              const I = g.key;
              p.push(String(I)), g.continue();
            } else a(p);
          }, h.onerror = () => c(new Error("Failed to scan keys"));
        }));
        return N(i);
      } catch (i) {
        return k(new Fe("Scan failed", je.GET_FAILED, i));
      }
    }
    async batchSet(t) {
      if (!this.db) return k(new Fe("Database not initialized", je.NOT_INITIALIZED));
      try {
        return await this.executeTransaction("readwrite", (i) => new Promise((r, a) => {
          let c = 0;
          for (const { key: f, value: h } of t) {
            const p = i.put(Ca(h), f);
            p.onsuccess = () => {
              c++, c === t.length && r();
            }, p.onerror = () => a(new Error("Batch set failed"));
          }
          t.length === 0 && r();
        })), N(void 0);
      } catch (i) {
        return k(new Fe("Batch set failed", je.SET_FAILED, i));
      }
    }
    executeTransaction(t, i) {
      return new Promise((r, a) => {
        if (!this.db) {
          a(new Error("Database not initialized"));
          return;
        }
        const c = this.db.transaction(this.storeName, t), f = c.objectStore(this.storeName);
        i(f).then(r).catch(a), c.onerror = () => {
          a(new Error("Transaction failed"));
        };
      });
    }
  }
  function Zy() {
    return window.__TAURI_OS_PLUGIN_INTERNALS__.platform;
  }
  class Jy {
    constructor() {
      __publicField(this, "initialized", false);
      __publicField(this, "isMobile", false);
      __publicField(this, "watchCallbacks", /* @__PURE__ */ new Map());
      __publicField(this, "mobileUnwatchFn", null);
      __publicField(this, "tauriGeolocation", null);
      const t = Zy();
      this.isMobile = t === "ios" || t === "android";
    }
    async init(t) {
      return this.initialized ? N(void 0) : this.isMobile ? this.initMobile(t) : this.initDesktop(t);
    }
    async initMobile(t) {
      try {
        const i = await qn(() => import("./index-DrW_jyfB.js"), [], import.meta.url);
        this.tauriGeolocation = {
          checkPermissions: i.checkPermissions,
          requestPermissions: i.requestPermissions,
          getCurrentPosition: i.getCurrentPosition,
          watchPosition: i.watchPosition,
          clearWatch: i.clearWatch
        };
        const r = await this.tauriGeolocation.checkPermissions();
        if (r.location === "prompt" || r.location === "prompt-with-rationale") {
          const a = await this.tauriGeolocation.requestPermissions([
            "location"
          ]);
          if (a.location !== "granted") if (t) {
            if (!await t(a.location, "permission.location.prompt")) return k(new et("Geolocation permission denied", Ke.PERMISSION_DENIED));
          } else return k(new et("Geolocation permission not granted", Ke.PERMISSION_DENIED));
        } else if (r.location === "denied") return k(new et("Geolocation permission denied", Ke.PERMISSION_DENIED));
        return this.initialized = true, N(void 0);
      } catch (i) {
        return k(new et("Failed to initialize mobile geolocation", Ke.INITIALIZATION_FAILED, i));
      }
    }
    async initDesktop(t) {
      try {
        await ut("init_geolocation_manager");
        const i = await this.getPermissionStatus();
        if (i.isErr()) return k(i.error);
        if (i.value === "prompt") {
          let r = false;
          try {
            await ut("request_geolocation_permission"), r = true;
            const a = await this.getPermissionStatus();
            if (a.isErr() || a.value === "denied") return k(new et("Geolocation permission denied by system", Ke.PERMISSION_DENIED));
          } catch {
          }
          if (!r && t) {
            if (!await t("prompt", "permission.location.prompt")) return k(new et("Geolocation permission denied", Ke.PERMISSION_DENIED));
          } else if (!r) return k(new et("Geolocation permission not granted", Ke.PERMISSION_DENIED));
        } else if (i.value === "denied") return k(new et("Geolocation permission denied", Ke.PERMISSION_DENIED));
        return this.initialized = true, N(void 0);
      } catch (i) {
        return k(new et("Failed to initialize desktop geolocation", Ke.INITIALIZATION_FAILED, i));
      }
    }
    async getPermissionStatus() {
      if (this.isMobile && this.tauriGeolocation) try {
        const t = await this.tauriGeolocation.checkPermissions();
        return N(t.location);
      } catch (t) {
        return k(new et("Failed to get mobile permission status", Ke.PERMISSION_DENIED, t));
      }
      else try {
        const t = await ut("get_geolocation_permission_status");
        return N(t);
      } catch {
        if (!navigator.permissions) return N("prompt");
        try {
          const t = await navigator.permissions.query({
            name: "geolocation"
          });
          return N(t.state);
        } catch (t) {
          return k(new et("Failed to get permission status", Ke.PERMISSION_DENIED, t));
        }
      }
    }
    async requestPermission() {
      if (this.isMobile && this.tauriGeolocation) try {
        const t = await this.tauriGeolocation.requestPermissions([
          "location"
        ]);
        return N(t.location);
      } catch (t) {
        return k(new et("Failed to request mobile permission", Ke.PERMISSION_DENIED, t));
      }
      else try {
        return await this.getCurrentPosition(), N("granted");
      } catch (t) {
        return k(new et("Failed to request permission", Ke.PERMISSION_DENIED, t));
      }
    }
    async getCurrentPosition() {
      if (!this.initialized) {
        const t = await this.init();
        if (t.isErr()) return k(t.error);
      }
      try {
        if (this.isMobile && this.tauriGeolocation) {
          const t = await this.tauriGeolocation.getCurrentPosition({
            enableHighAccuracy: true,
            timeout: 1e4
          });
          return N(this.convertTauriPositionToGeolocationPosition(t));
        } else {
          const t = await ut("get_current_position");
          return N(this.convertRustPositionToGeolocationPosition(t));
        }
      } catch (t) {
        return k(new et("Failed to get current position", Ke.POSITION_UNAVAILABLE, t));
      }
    }
    async watchPosition(t, i) {
      if (!this.initialized) {
        const r = await this.init();
        if (r.isErr()) return k(r.error);
      }
      try {
        if (this.isMobile && this.tauriGeolocation) {
          const r = await this.tauriGeolocation.watchPosition({
            enableHighAccuracy: true,
            timeout: 1e4
          }, (a) => {
            t(this.convertTauriPositionToGeolocationPosition(a));
          });
          return this.watchCallbacks.set(r, r), N(r);
        } else {
          const r = gh(), a = (i == null ? void 0 : i.highFrequency) ? 100 : r, c = window.setInterval(async () => {
            try {
              const f = await this.getCurrentPosition();
              f.isOk() && t(f.value);
            } catch (f) {
              console.error("Error in watch position:", f);
            }
          }, a);
          return this.watchCallbacks.set(c, c), N(c);
        }
      } catch (r) {
        return k(new et("Failed to start watching position", Ke.WATCH_FAILED, r));
      }
    }
    clearWatch(t) {
      try {
        return this.isMobile && this.tauriGeolocation ? this.tauriGeolocation.clearWatch(t).catch(console.error) : clearInterval(t), this.watchCallbacks.delete(t), N(void 0);
      } catch (i) {
        return k(new et("Failed to clear watch", Ke.CLEAR_WATCH_FAILED, i));
      }
    }
    convertTauriPositionToGeolocationPosition(t) {
      return {
        coords: {
          latitude: t.coords.latitude,
          longitude: t.coords.longitude,
          altitude: t.coords.altitude,
          accuracy: t.coords.accuracy,
          altitudeAccuracy: t.coords.altitudeAccuracy,
          heading: t.coords.heading,
          speed: t.coords.speed
        },
        timestamp: t.timestamp
      };
    }
    convertRustPositionToGeolocationPosition(t) {
      return {
        coords: {
          latitude: t.coords.latitude,
          longitude: t.coords.longitude,
          altitude: t.coords.altitude,
          accuracy: t.coords.accuracy,
          altitudeAccuracy: t.coords.altitude_accuracy,
          heading: t.coords.heading,
          speed: t.coords.speed
        },
        timestamp: t.timestamp
      };
    }
    injectNavigatorGeolocation() {
      navigator.geolocation.injected || (navigator.geolocation.getCurrentPosition = (t, i, r) => {
        this.getCurrentPosition().then((a) => {
          a.isOk() ? t(a.value) : i == null ? void 0 : i(this.createPositionError(a.error));
        }).catch((a) => {
          i == null ? void 0 : i(this.createPositionError(a));
        });
      }, navigator.geolocation.watchPosition = (t, i, r) => (this.watchPosition((c) => t(c), {
        highFrequency: r == null ? void 0 : r.enableHighAccuracy
      }).then((c) => {
        c.isErr() && i && i(this.createPositionError(c.error));
      }), 0), navigator.geolocation.clearWatch = (t) => {
        this.clearWatch(t);
      }, navigator.geolocation.injected = true);
    }
    createPositionError(t) {
      return {
        code: 2,
        message: (t instanceof et, t.message),
        PERMISSION_DENIED: 1,
        POSITION_UNAVAILABLE: 2,
        TIMEOUT: 3
      };
    }
  }
  class Hy {
    constructor() {
      __publicField(this, "initialized", false);
      __publicField(this, "compatibilityModeWatches", /* @__PURE__ */ new Map());
      __publicField(this, "compatibilityModeCallbacks", /* @__PURE__ */ new Map());
      __publicField(this, "highFrequencyCallbacks", /* @__PURE__ */ new Map());
      __publicField(this, "lastCompatibilityPosition", null);
      __publicField(this, "lastCompatibilityUpdateTime", 0);
      __publicField(this, "compatibilityIntervalId", null);
      __publicField(this, "highFrequencyIntervalId", null);
      __publicField(this, "initPromise", null);
      __publicField(this, "nextCompatibilityWatchId", -1);
    }
    async init(t) {
      if (this.initialized) return N(void 0);
      if (this.initPromise) return this.initPromise;
      this.initPromise = this.doInit(t);
      const i = await this.initPromise;
      return i.isErr() && (this.initPromise = null), i;
    }
    async doInit(t) {
      if (this.initialized) return N(void 0);
      if (!this.isSupported()) return k(new et("Geolocation is not supported by this browser", Ke.UNSUPPORTED));
      const i = await this.getPermissionStatus();
      if (i.isErr()) return k(i.error);
      if (i.value === "prompt" && t) {
        if (!await t(i.value, "permission.location.prompt")) return k(new et("Geolocation permission denied", Ke.PERMISSION_DENIED));
        const a = await this.getPermissionStatus();
        if (a.isErr()) return k(a.error);
        if (a.value === "denied") return k(new et("Geolocation permission denied", Ke.PERMISSION_DENIED));
      }
      return this.initialized = true, N(void 0);
    }
    async getPermissionStatus() {
      if (!navigator.permissions) return this.fallbackPermissionCheck();
      try {
        const t = await navigator.permissions.query({
          name: "geolocation"
        });
        return N(t.state);
      } catch (t) {
        return k(new et("Failed to get permission status", Ke.PERMISSION_DENIED, t));
      }
    }
    async fallbackPermissionCheck() {
      return new Promise((t) => {
        navigator.geolocation.getCurrentPosition(() => t(N("granted")), (i) => {
          i.code === i.PERMISSION_DENIED ? t(N("denied")) : t(N("prompt"));
        }, {
          timeout: 5e3,
          maximumAge: 1 / 0,
          enableHighAccuracy: true
        });
      });
    }
    async requestPermission() {
      try {
        return (await this.getCurrentPosition()).isOk() ? N("granted") : N("denied");
      } catch (t) {
        return this.isPositionError(t) ? t.code === t.PERMISSION_DENIED ? N("denied") : N("prompt") : k(new et("Failed to request permission", Ke.PERMISSION_DENIED, t));
      }
    }
    async getCurrentPosition() {
      if (!this.initialized) {
        const t = await this.init();
        if (t.isErr()) return k(t.error);
      }
      return new Promise((t) => {
        navigator.geolocation.getCurrentPosition((i) => {
          t(N(i));
        }, (i) => {
          let r;
          const a = i.message;
          switch (i.code) {
            case i.PERMISSION_DENIED:
              r = Ke.PERMISSION_DENIED;
              break;
            case i.POSITION_UNAVAILABLE:
              r = Ke.POSITION_UNAVAILABLE;
              break;
            case i.TIMEOUT:
              r = Ke.TIMEOUT;
              break;
            default:
              r = Ke.POSITION_UNAVAILABLE;
          }
          t(k(new et(a, r, new Error(i.message))));
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
        if (h.isErr()) return k(h.error);
      }
      const r = Gy(), a = gh(), c = Ye("watchCompatibilityMode"), f = (i == null ? void 0 : i.highFrequency) ?? false;
      if (c || f) {
        f ? console.log("[Geolocation] High frequency mode enabled") : console.info("[Geolocation] Using compatibility mode for position watch");
        try {
          const h = this.nextCompatibilityWatchId--;
          return (f ? this.highFrequencyCallbacks : this.compatibilityModeCallbacks).set(h, t), f ? this.highFrequencyIntervalId === null && (this.highFrequencyIntervalId = window.setInterval(() => {
            this.pollCompatibilityWatch(true, r);
          }, r)) : this.compatibilityIntervalId === null && (this.compatibilityIntervalId = window.setInterval(() => {
            this.pollCompatibilityWatch(false, a);
          }, a)), this.compatibilityModeWatches.set(h, {
            highFrequency: f
          }), N(h);
        } catch (h) {
          return k(new et("Failed to start watching position (compatibility mode)", Ke.WATCH_FAILED, h));
        }
      }
      try {
        const h = navigator.geolocation.watchPosition(t, (p) => {
          console.error("Geolocation watch error:", p);
        }, {
          enableHighAccuracy: true,
          timeout: 3e4,
          maximumAge: f ? 0 : a
        });
        return N(h);
      } catch (h) {
        return k(new et("Failed to start watching position", Ke.WATCH_FAILED, h));
      }
    }
    clearWatch(t) {
      try {
        return this.compatibilityModeWatches.has(t) ? (this.compatibilityModeWatches.get(t).highFrequency ? this.highFrequencyCallbacks.delete(t) : this.compatibilityModeCallbacks.delete(t), this.compatibilityModeWatches.delete(t), this.compatibilityModeCallbacks.size === 0 && this.compatibilityIntervalId !== null && (window.clearInterval(this.compatibilityIntervalId), this.compatibilityIntervalId = null, this.lastCompatibilityPosition = null, this.lastCompatibilityUpdateTime = 0), this.highFrequencyCallbacks.size === 0 && this.highFrequencyIntervalId !== null && (window.clearInterval(this.highFrequencyIntervalId), this.highFrequencyIntervalId = null)) : navigator.geolocation.clearWatch(t), N(void 0);
      } catch (i) {
        return k(new et("Failed to clear watch", Ke.CLEAR_WATCH_FAILED, i));
      }
    }
    isSupported() {
      return "geolocation" in navigator;
    }
    async pollCompatibilityWatch(t, i) {
      const r = t ? this.highFrequencyCallbacks : this.compatibilityModeCallbacks;
      if (r.size === 0) return;
      const a = await this.getCurrentPosition();
      if (a.isErr()) return;
      const c = a.value;
      if (!t) {
        const f = {
          lat: c.coords.latitude,
          lng: c.coords.longitude,
          acc: c.coords.accuracy
        }, h = Date.now();
        if (!(h - this.lastCompatibilityUpdateTime > i) && this.lastCompatibilityPosition && this.lastCompatibilityPosition.lat === f.lat && this.lastCompatibilityPosition.lng === f.lng && this.lastCompatibilityPosition.acc === f.acc) return;
        this.lastCompatibilityPosition = f, this.lastCompatibilityUpdateTime = h;
      }
      for (const f of r.values()) try {
        f(c);
      } catch (h) {
        console.error("[Geolocation] Callback error:", h);
      }
    }
    isPositionError(t) {
      return typeof t == "object" && t !== null && "code" in t && "message" in t && typeof t.code == "number";
    }
  }
  class Yy {
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
      if (this.initialized) return N(void 0);
      if (this.initPromise) return this.initPromise;
      this.initPromise = this.doInit(t);
      const i = await this.initPromise;
      return i.isErr() && (this.initPromise = null), i;
    }
    async doInit(t) {
      if (this.disposed) return k(new De("Device orientation provider has been disposed"));
      const i = await this.requestPermissionIfNeeded(t);
      return i.isErr() ? k(i.error) : await this.checkHardwareSupport() ? (this.initialized = true, N(void 0)) : k(new De("Device orientation is not supported by this browser"));
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
            if (!await t("prompt", "permission.device-orientation.required")) return k(new De("User declined to grant device orientation permission"));
            if (await DeviceOrientationEvent.requestPermission() !== "granted") return k(new De("Device orientation permission denied"));
          } else return i === "denied" ? k(new De("Device orientation permission denied")) : N(void 0);
        }
        return N(void 0);
      } catch (i) {
        return k(new De("Failed to request device orientation permission", void 0, i));
      }
    }
    async checkHardwareSupport() {
      return "DeviceOrientationEvent" in window ? new Promise((t) => {
        let i = false;
        const r = () => {
          window.removeEventListener("deviceorientation", f);
        }, a = () => {
          i || (i = true, r(), t(true));
        }, c = () => {
          i || (i = true, r(), t(false));
        }, f = (h) => {
          (h.alpha !== null || h.beta !== null || h.gamma !== null) && a();
        };
        window.addEventListener("deviceorientation", f), setTimeout(c, 1e3);
      }) : false;
    }
    async start() {
      if (this.disposed) return k(new De("Device orientation provider has been disposed"));
      if (!this.initialized) {
        const t = await this.init();
        if (t.isErr()) return k(t.error);
      }
      if (this.isWatching) return N(void 0);
      try {
        return this.orientationEventListenerCount === 0 && window.addEventListener("deviceorientation", this.boundHandleOrientationEvent, true), this.orientationEventListenerCount++, this.isWatching = true, N(void 0);
      } catch (t) {
        return k(new De("Failed to start device orientation", void 0, t));
      }
    }
    stop() {
      if (!this.isWatching) return N(void 0);
      try {
        return this.orientationEventListenerCount--, this.isWatching = false, this.lastReading = null, this.orientationEventListenerCount === 0 && window.removeEventListener("deviceorientation", this.boundHandleOrientationEvent, true), N(void 0);
      } catch (t) {
        return k(new De("Failed to stop device orientation", void 0, t));
      }
    }
    async getCurrentOrientation() {
      if (this.disposed) return k(new De("Device orientation provider has been disposed"));
      if (!this.initialized) {
        const t = await this.init();
        if (t.isErr()) return k(t.error);
      }
      return N(this.lastReading);
    }
    onOrientationChange(t) {
      const i = this.nextListenerId++;
      return this.listeners.set(i, t), this.lastReading && t(this.lastReading), i;
    }
    removeEventListener(t) {
      return this.listeners.delete(t), N(void 0);
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
      for (const r of this.listeners.values()) try {
        r(i);
      } catch (a) {
        console.error("Error in device orientation callback:", a);
      }
    }
  }
  Xy = function(e) {
    return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
  };
  function mh(e) {
    if (Object.prototype.hasOwnProperty.call(e, "__esModule")) return e;
    var t = e.default;
    if (typeof t == "function") {
      var i = function r() {
        var a = false;
        try {
          a = this instanceof r;
        } catch {
        }
        return a ? Reflect.construct(t, arguments, this.constructor) : t.apply(this, arguments);
      };
      i.prototype = t.prototype;
    } else i = {};
    return Object.defineProperty(i, "__esModule", {
      value: true
    }), Object.keys(e).forEach(function(r) {
      var a = Object.getOwnPropertyDescriptor(e, r);
      Object.defineProperty(i, r, a.get ? a : {
        enumerable: true,
        get: function() {
          return e[r];
        }
      });
    }), i;
  }
  var Ae = {};
  const Qy = Object.prototype.toString;
  function ns(e) {
    const t = Qy.call(e);
    return t.endsWith("Array]") && !t.includes("Big");
  }
  const eb = Object.freeze(Object.defineProperty({
    __proto__: null,
    isAnyArray: ns
  }, Symbol.toStringTag, {
    value: "Module"
  })), tb = mh(eb);
  function ib(e) {
    var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
    if (!ns(e)) throw new TypeError("input must be an array");
    if (e.length === 0) throw new TypeError("input must not be empty");
    var i = t.fromIndex, r = i === void 0 ? 0 : i, a = t.toIndex, c = a === void 0 ? e.length : a;
    if (r < 0 || r >= e.length || !Number.isInteger(r)) throw new Error("fromIndex must be a positive integer smaller than length");
    if (c <= r || c > e.length || !Number.isInteger(c)) throw new Error("toIndex must be an integer greater than fromIndex and at most equal to length");
    for (var f = e[r], h = r + 1; h < c; h++) e[h] > f && (f = e[h]);
    return f;
  }
  function rb(e) {
    var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
    if (!ns(e)) throw new TypeError("input must be an array");
    if (e.length === 0) throw new TypeError("input must not be empty");
    var i = t.fromIndex, r = i === void 0 ? 0 : i, a = t.toIndex, c = a === void 0 ? e.length : a;
    if (r < 0 || r >= e.length || !Number.isInteger(r)) throw new Error("fromIndex must be a positive integer smaller than length");
    if (c <= r || c > e.length || !Number.isInteger(c)) throw new Error("toIndex must be an integer greater than fromIndex and at most equal to length");
    for (var f = e[r], h = r + 1; h < c; h++) e[h] < f && (f = e[h]);
    return f;
  }
  function nb(e) {
    var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
    if (ns(e)) {
      if (e.length === 0) throw new TypeError("input must not be empty");
    } else throw new TypeError("input must be an array");
    var i;
    if (t.output !== void 0) {
      if (!ns(t.output)) throw new TypeError("output option must be an array if specified");
      i = t.output;
    } else i = new Array(e.length);
    var r = rb(e), a = ib(e);
    if (r === a) throw new RangeError("minimum and maximum input values are equal. Cannot rescale a constant array");
    var c = t.min, f = c === void 0 ? t.autoMinMax ? r : 0 : c, h = t.max, p = h === void 0 ? t.autoMinMax ? a : 1 : h;
    if (f >= p) throw new RangeError("min option must be smaller than max option");
    for (var v = (p - f) / (a - r), g = 0; g < e.length; g++) i[g] = (e[g] - r) * v + f;
    return i;
  }
  const sb = Object.freeze(Object.defineProperty({
    __proto__: null,
    default: nb
  }, Symbol.toStringTag, {
    value: "Module"
  })), ob = mh(sb);
  var Hc;
  function ab() {
    var _ne_instances, e_fn, _e2;
    if (Hc) return Ae;
    Hc = 1, Object.defineProperty(Ae, "__esModule", {
      value: true
    });
    var e = tb, t = ob;
    const i = " ".repeat(2), r = " ".repeat(4);
    function a() {
      return c(this);
    }
    function c(d, s = {}) {
      const { maxRows: o = 15, maxColumns: n = 10, maxNumSize: l = 8, padMinus: u = "auto" } = s;
      return `${d.constructor.name} {
${i}[
${r}${f(d, o, n, l, u)}
${i}]
${i}rows: ${d.rows}
${i}columns: ${d.columns}
}`;
    }
    function f(d, s, o, n, l) {
      const { rows: u, columns: m } = d, w = Math.min(u, s), y = Math.min(m, o), b = [];
      if (l === "auto") {
        l = false;
        e: for (let P = 0; P < w; P++) for (let _ = 0; _ < y; _++) if (d.get(P, _) < 0) {
          l = true;
          break e;
        }
      }
      for (let P = 0; P < w; P++) {
        let _ = [];
        for (let O = 0; O < y; O++) _.push(h(d.get(P, O), n, l));
        b.push(`${_.join(" ")}`);
      }
      return y !== m && (b[b.length - 1] += ` ... ${m - o} more columns`), w !== u && b.push(`... ${u - s} more rows`), b.join(`
${r}`);
    }
    function h(d, s, o) {
      return (d >= 0 && o ? ` ${p(d, s - 1)}` : p(d, s)).padEnd(s);
    }
    function p(d, s) {
      let o = d.toString();
      if (o.length <= s) return o;
      let n = d.toFixed(s);
      if (n.length > s && (n = d.toFixed(Math.max(0, s - (n.length - s)))), n.length <= s && !n.startsWith("0.000") && !n.startsWith("-0.000")) return n;
      let l = d.toExponential(s);
      return l.length > s && (l = d.toExponential(Math.max(0, s - (l.length - s)))), l.slice(0);
    }
    function v(d, s) {
      d.prototype.add = function(n) {
        return typeof n == "number" ? this.addS(n) : this.addM(n);
      }, d.prototype.addS = function(n) {
        for (let l = 0; l < this.rows; l++) for (let u = 0; u < this.columns; u++) this.set(l, u, this.get(l, u) + n);
        return this;
      }, d.prototype.addM = function(n) {
        if (n = s.checkMatrix(n), this.rows !== n.rows || this.columns !== n.columns) throw new RangeError("Matrices dimensions must be equal");
        for (let l = 0; l < this.rows; l++) for (let u = 0; u < this.columns; u++) this.set(l, u, this.get(l, u) + n.get(l, u));
        return this;
      }, d.add = function(n, l) {
        return new s(n).add(l);
      }, d.prototype.sub = function(n) {
        return typeof n == "number" ? this.subS(n) : this.subM(n);
      }, d.prototype.subS = function(n) {
        for (let l = 0; l < this.rows; l++) for (let u = 0; u < this.columns; u++) this.set(l, u, this.get(l, u) - n);
        return this;
      }, d.prototype.subM = function(n) {
        if (n = s.checkMatrix(n), this.rows !== n.rows || this.columns !== n.columns) throw new RangeError("Matrices dimensions must be equal");
        for (let l = 0; l < this.rows; l++) for (let u = 0; u < this.columns; u++) this.set(l, u, this.get(l, u) - n.get(l, u));
        return this;
      }, d.sub = function(n, l) {
        return new s(n).sub(l);
      }, d.prototype.subtract = d.prototype.sub, d.prototype.subtractS = d.prototype.subS, d.prototype.subtractM = d.prototype.subM, d.subtract = d.sub, d.prototype.mul = function(n) {
        return typeof n == "number" ? this.mulS(n) : this.mulM(n);
      }, d.prototype.mulS = function(n) {
        for (let l = 0; l < this.rows; l++) for (let u = 0; u < this.columns; u++) this.set(l, u, this.get(l, u) * n);
        return this;
      }, d.prototype.mulM = function(n) {
        if (n = s.checkMatrix(n), this.rows !== n.rows || this.columns !== n.columns) throw new RangeError("Matrices dimensions must be equal");
        for (let l = 0; l < this.rows; l++) for (let u = 0; u < this.columns; u++) this.set(l, u, this.get(l, u) * n.get(l, u));
        return this;
      }, d.mul = function(n, l) {
        return new s(n).mul(l);
      }, d.prototype.multiply = d.prototype.mul, d.prototype.multiplyS = d.prototype.mulS, d.prototype.multiplyM = d.prototype.mulM, d.multiply = d.mul, d.prototype.div = function(n) {
        return typeof n == "number" ? this.divS(n) : this.divM(n);
      }, d.prototype.divS = function(n) {
        for (let l = 0; l < this.rows; l++) for (let u = 0; u < this.columns; u++) this.set(l, u, this.get(l, u) / n);
        return this;
      }, d.prototype.divM = function(n) {
        if (n = s.checkMatrix(n), this.rows !== n.rows || this.columns !== n.columns) throw new RangeError("Matrices dimensions must be equal");
        for (let l = 0; l < this.rows; l++) for (let u = 0; u < this.columns; u++) this.set(l, u, this.get(l, u) / n.get(l, u));
        return this;
      }, d.div = function(n, l) {
        return new s(n).div(l);
      }, d.prototype.divide = d.prototype.div, d.prototype.divideS = d.prototype.divS, d.prototype.divideM = d.prototype.divM, d.divide = d.div, d.prototype.mod = function(n) {
        return typeof n == "number" ? this.modS(n) : this.modM(n);
      }, d.prototype.modS = function(n) {
        for (let l = 0; l < this.rows; l++) for (let u = 0; u < this.columns; u++) this.set(l, u, this.get(l, u) % n);
        return this;
      }, d.prototype.modM = function(n) {
        if (n = s.checkMatrix(n), this.rows !== n.rows || this.columns !== n.columns) throw new RangeError("Matrices dimensions must be equal");
        for (let l = 0; l < this.rows; l++) for (let u = 0; u < this.columns; u++) this.set(l, u, this.get(l, u) % n.get(l, u));
        return this;
      }, d.mod = function(n, l) {
        return new s(n).mod(l);
      }, d.prototype.modulus = d.prototype.mod, d.prototype.modulusS = d.prototype.modS, d.prototype.modulusM = d.prototype.modM, d.modulus = d.mod, d.prototype.and = function(n) {
        return typeof n == "number" ? this.andS(n) : this.andM(n);
      }, d.prototype.andS = function(n) {
        for (let l = 0; l < this.rows; l++) for (let u = 0; u < this.columns; u++) this.set(l, u, this.get(l, u) & n);
        return this;
      }, d.prototype.andM = function(n) {
        if (n = s.checkMatrix(n), this.rows !== n.rows || this.columns !== n.columns) throw new RangeError("Matrices dimensions must be equal");
        for (let l = 0; l < this.rows; l++) for (let u = 0; u < this.columns; u++) this.set(l, u, this.get(l, u) & n.get(l, u));
        return this;
      }, d.and = function(n, l) {
        return new s(n).and(l);
      }, d.prototype.or = function(n) {
        return typeof n == "number" ? this.orS(n) : this.orM(n);
      }, d.prototype.orS = function(n) {
        for (let l = 0; l < this.rows; l++) for (let u = 0; u < this.columns; u++) this.set(l, u, this.get(l, u) | n);
        return this;
      }, d.prototype.orM = function(n) {
        if (n = s.checkMatrix(n), this.rows !== n.rows || this.columns !== n.columns) throw new RangeError("Matrices dimensions must be equal");
        for (let l = 0; l < this.rows; l++) for (let u = 0; u < this.columns; u++) this.set(l, u, this.get(l, u) | n.get(l, u));
        return this;
      }, d.or = function(n, l) {
        return new s(n).or(l);
      }, d.prototype.xor = function(n) {
        return typeof n == "number" ? this.xorS(n) : this.xorM(n);
      }, d.prototype.xorS = function(n) {
        for (let l = 0; l < this.rows; l++) for (let u = 0; u < this.columns; u++) this.set(l, u, this.get(l, u) ^ n);
        return this;
      }, d.prototype.xorM = function(n) {
        if (n = s.checkMatrix(n), this.rows !== n.rows || this.columns !== n.columns) throw new RangeError("Matrices dimensions must be equal");
        for (let l = 0; l < this.rows; l++) for (let u = 0; u < this.columns; u++) this.set(l, u, this.get(l, u) ^ n.get(l, u));
        return this;
      }, d.xor = function(n, l) {
        return new s(n).xor(l);
      }, d.prototype.leftShift = function(n) {
        return typeof n == "number" ? this.leftShiftS(n) : this.leftShiftM(n);
      }, d.prototype.leftShiftS = function(n) {
        for (let l = 0; l < this.rows; l++) for (let u = 0; u < this.columns; u++) this.set(l, u, this.get(l, u) << n);
        return this;
      }, d.prototype.leftShiftM = function(n) {
        if (n = s.checkMatrix(n), this.rows !== n.rows || this.columns !== n.columns) throw new RangeError("Matrices dimensions must be equal");
        for (let l = 0; l < this.rows; l++) for (let u = 0; u < this.columns; u++) this.set(l, u, this.get(l, u) << n.get(l, u));
        return this;
      }, d.leftShift = function(n, l) {
        return new s(n).leftShift(l);
      }, d.prototype.signPropagatingRightShift = function(n) {
        return typeof n == "number" ? this.signPropagatingRightShiftS(n) : this.signPropagatingRightShiftM(n);
      }, d.prototype.signPropagatingRightShiftS = function(n) {
        for (let l = 0; l < this.rows; l++) for (let u = 0; u < this.columns; u++) this.set(l, u, this.get(l, u) >> n);
        return this;
      }, d.prototype.signPropagatingRightShiftM = function(n) {
        if (n = s.checkMatrix(n), this.rows !== n.rows || this.columns !== n.columns) throw new RangeError("Matrices dimensions must be equal");
        for (let l = 0; l < this.rows; l++) for (let u = 0; u < this.columns; u++) this.set(l, u, this.get(l, u) >> n.get(l, u));
        return this;
      }, d.signPropagatingRightShift = function(n, l) {
        return new s(n).signPropagatingRightShift(l);
      }, d.prototype.rightShift = function(n) {
        return typeof n == "number" ? this.rightShiftS(n) : this.rightShiftM(n);
      }, d.prototype.rightShiftS = function(n) {
        for (let l = 0; l < this.rows; l++) for (let u = 0; u < this.columns; u++) this.set(l, u, this.get(l, u) >>> n);
        return this;
      }, d.prototype.rightShiftM = function(n) {
        if (n = s.checkMatrix(n), this.rows !== n.rows || this.columns !== n.columns) throw new RangeError("Matrices dimensions must be equal");
        for (let l = 0; l < this.rows; l++) for (let u = 0; u < this.columns; u++) this.set(l, u, this.get(l, u) >>> n.get(l, u));
        return this;
      }, d.rightShift = function(n, l) {
        return new s(n).rightShift(l);
      }, d.prototype.zeroFillRightShift = d.prototype.rightShift, d.prototype.zeroFillRightShiftS = d.prototype.rightShiftS, d.prototype.zeroFillRightShiftM = d.prototype.rightShiftM, d.zeroFillRightShift = d.rightShift, d.prototype.not = function() {
        for (let n = 0; n < this.rows; n++) for (let l = 0; l < this.columns; l++) this.set(n, l, ~this.get(n, l));
        return this;
      }, d.not = function(n) {
        return new s(n).not();
      }, d.prototype.abs = function() {
        for (let n = 0; n < this.rows; n++) for (let l = 0; l < this.columns; l++) this.set(n, l, Math.abs(this.get(n, l)));
        return this;
      }, d.abs = function(n) {
        return new s(n).abs();
      }, d.prototype.acos = function() {
        for (let n = 0; n < this.rows; n++) for (let l = 0; l < this.columns; l++) this.set(n, l, Math.acos(this.get(n, l)));
        return this;
      }, d.acos = function(n) {
        return new s(n).acos();
      }, d.prototype.acosh = function() {
        for (let n = 0; n < this.rows; n++) for (let l = 0; l < this.columns; l++) this.set(n, l, Math.acosh(this.get(n, l)));
        return this;
      }, d.acosh = function(n) {
        return new s(n).acosh();
      }, d.prototype.asin = function() {
        for (let n = 0; n < this.rows; n++) for (let l = 0; l < this.columns; l++) this.set(n, l, Math.asin(this.get(n, l)));
        return this;
      }, d.asin = function(n) {
        return new s(n).asin();
      }, d.prototype.asinh = function() {
        for (let n = 0; n < this.rows; n++) for (let l = 0; l < this.columns; l++) this.set(n, l, Math.asinh(this.get(n, l)));
        return this;
      }, d.asinh = function(n) {
        return new s(n).asinh();
      }, d.prototype.atan = function() {
        for (let n = 0; n < this.rows; n++) for (let l = 0; l < this.columns; l++) this.set(n, l, Math.atan(this.get(n, l)));
        return this;
      }, d.atan = function(n) {
        return new s(n).atan();
      }, d.prototype.atanh = function() {
        for (let n = 0; n < this.rows; n++) for (let l = 0; l < this.columns; l++) this.set(n, l, Math.atanh(this.get(n, l)));
        return this;
      }, d.atanh = function(n) {
        return new s(n).atanh();
      }, d.prototype.cbrt = function() {
        for (let n = 0; n < this.rows; n++) for (let l = 0; l < this.columns; l++) this.set(n, l, Math.cbrt(this.get(n, l)));
        return this;
      }, d.cbrt = function(n) {
        return new s(n).cbrt();
      }, d.prototype.ceil = function() {
        for (let n = 0; n < this.rows; n++) for (let l = 0; l < this.columns; l++) this.set(n, l, Math.ceil(this.get(n, l)));
        return this;
      }, d.ceil = function(n) {
        return new s(n).ceil();
      }, d.prototype.clz32 = function() {
        for (let n = 0; n < this.rows; n++) for (let l = 0; l < this.columns; l++) this.set(n, l, Math.clz32(this.get(n, l)));
        return this;
      }, d.clz32 = function(n) {
        return new s(n).clz32();
      }, d.prototype.cos = function() {
        for (let n = 0; n < this.rows; n++) for (let l = 0; l < this.columns; l++) this.set(n, l, Math.cos(this.get(n, l)));
        return this;
      }, d.cos = function(n) {
        return new s(n).cos();
      }, d.prototype.cosh = function() {
        for (let n = 0; n < this.rows; n++) for (let l = 0; l < this.columns; l++) this.set(n, l, Math.cosh(this.get(n, l)));
        return this;
      }, d.cosh = function(n) {
        return new s(n).cosh();
      }, d.prototype.exp = function() {
        for (let n = 0; n < this.rows; n++) for (let l = 0; l < this.columns; l++) this.set(n, l, Math.exp(this.get(n, l)));
        return this;
      }, d.exp = function(n) {
        return new s(n).exp();
      }, d.prototype.expm1 = function() {
        for (let n = 0; n < this.rows; n++) for (let l = 0; l < this.columns; l++) this.set(n, l, Math.expm1(this.get(n, l)));
        return this;
      }, d.expm1 = function(n) {
        return new s(n).expm1();
      }, d.prototype.floor = function() {
        for (let n = 0; n < this.rows; n++) for (let l = 0; l < this.columns; l++) this.set(n, l, Math.floor(this.get(n, l)));
        return this;
      }, d.floor = function(n) {
        return new s(n).floor();
      }, d.prototype.fround = function() {
        for (let n = 0; n < this.rows; n++) for (let l = 0; l < this.columns; l++) this.set(n, l, Math.fround(this.get(n, l)));
        return this;
      }, d.fround = function(n) {
        return new s(n).fround();
      }, d.prototype.log = function() {
        for (let n = 0; n < this.rows; n++) for (let l = 0; l < this.columns; l++) this.set(n, l, Math.log(this.get(n, l)));
        return this;
      }, d.log = function(n) {
        return new s(n).log();
      }, d.prototype.log1p = function() {
        for (let n = 0; n < this.rows; n++) for (let l = 0; l < this.columns; l++) this.set(n, l, Math.log1p(this.get(n, l)));
        return this;
      }, d.log1p = function(n) {
        return new s(n).log1p();
      }, d.prototype.log10 = function() {
        for (let n = 0; n < this.rows; n++) for (let l = 0; l < this.columns; l++) this.set(n, l, Math.log10(this.get(n, l)));
        return this;
      }, d.log10 = function(n) {
        return new s(n).log10();
      }, d.prototype.log2 = function() {
        for (let n = 0; n < this.rows; n++) for (let l = 0; l < this.columns; l++) this.set(n, l, Math.log2(this.get(n, l)));
        return this;
      }, d.log2 = function(n) {
        return new s(n).log2();
      }, d.prototype.round = function() {
        for (let n = 0; n < this.rows; n++) for (let l = 0; l < this.columns; l++) this.set(n, l, Math.round(this.get(n, l)));
        return this;
      }, d.round = function(n) {
        return new s(n).round();
      }, d.prototype.sign = function() {
        for (let n = 0; n < this.rows; n++) for (let l = 0; l < this.columns; l++) this.set(n, l, Math.sign(this.get(n, l)));
        return this;
      }, d.sign = function(n) {
        return new s(n).sign();
      }, d.prototype.sin = function() {
        for (let n = 0; n < this.rows; n++) for (let l = 0; l < this.columns; l++) this.set(n, l, Math.sin(this.get(n, l)));
        return this;
      }, d.sin = function(n) {
        return new s(n).sin();
      }, d.prototype.sinh = function() {
        for (let n = 0; n < this.rows; n++) for (let l = 0; l < this.columns; l++) this.set(n, l, Math.sinh(this.get(n, l)));
        return this;
      }, d.sinh = function(n) {
        return new s(n).sinh();
      }, d.prototype.sqrt = function() {
        for (let n = 0; n < this.rows; n++) for (let l = 0; l < this.columns; l++) this.set(n, l, Math.sqrt(this.get(n, l)));
        return this;
      }, d.sqrt = function(n) {
        return new s(n).sqrt();
      }, d.prototype.tan = function() {
        for (let n = 0; n < this.rows; n++) for (let l = 0; l < this.columns; l++) this.set(n, l, Math.tan(this.get(n, l)));
        return this;
      }, d.tan = function(n) {
        return new s(n).tan();
      }, d.prototype.tanh = function() {
        for (let n = 0; n < this.rows; n++) for (let l = 0; l < this.columns; l++) this.set(n, l, Math.tanh(this.get(n, l)));
        return this;
      }, d.tanh = function(n) {
        return new s(n).tanh();
      }, d.prototype.trunc = function() {
        for (let n = 0; n < this.rows; n++) for (let l = 0; l < this.columns; l++) this.set(n, l, Math.trunc(this.get(n, l)));
        return this;
      }, d.trunc = function(n) {
        return new s(n).trunc();
      }, d.pow = function(n, l) {
        return new s(n).pow(l);
      }, d.prototype.pow = function(n) {
        return typeof n == "number" ? this.powS(n) : this.powM(n);
      }, d.prototype.powS = function(n) {
        for (let l = 0; l < this.rows; l++) for (let u = 0; u < this.columns; u++) this.set(l, u, this.get(l, u) ** n);
        return this;
      }, d.prototype.powM = function(n) {
        if (n = s.checkMatrix(n), this.rows !== n.rows || this.columns !== n.columns) throw new RangeError("Matrices dimensions must be equal");
        for (let l = 0; l < this.rows; l++) for (let u = 0; u < this.columns; u++) this.set(l, u, this.get(l, u) ** n.get(l, u));
        return this;
      };
    }
    function g(d, s, o) {
      let n = o ? d.rows : d.rows - 1;
      if (s < 0 || s > n) throw new RangeError("Row index out of range");
    }
    function I(d, s, o) {
      let n = o ? d.columns : d.columns - 1;
      if (s < 0 || s > n) throw new RangeError("Column index out of range");
    }
    function C(d, s) {
      if (s.to1DArray && (s = s.to1DArray()), s.length !== d.columns) throw new RangeError("vector size must be the same as the number of columns");
      return s;
    }
    function A(d, s) {
      if (s.to1DArray && (s = s.to1DArray()), s.length !== d.rows) throw new RangeError("vector size must be the same as the number of rows");
      return s;
    }
    function F(d, s) {
      if (!e.isAnyArray(s)) throw new TypeError("row indices must be an array");
      for (let o = 0; o < s.length; o++) if (s[o] < 0 || s[o] >= d.rows) throw new RangeError("row indices are out of range");
    }
    function x(d, s) {
      if (!e.isAnyArray(s)) throw new TypeError("column indices must be an array");
      for (let o = 0; o < s.length; o++) if (s[o] < 0 || s[o] >= d.columns) throw new RangeError("column indices are out of range");
    }
    function pe(d, s, o, n, l) {
      if (arguments.length !== 5) throw new RangeError("expected 4 arguments");
      if (U("startRow", s), U("endRow", o), U("startColumn", n), U("endColumn", l), s > o || n > l || s < 0 || s >= d.rows || o < 0 || o >= d.rows || n < 0 || n >= d.columns || l < 0 || l >= d.columns) throw new RangeError("Submatrix indices are out of range");
    }
    function se(d, s = 0) {
      let o = [];
      for (let n = 0; n < d; n++) o.push(s);
      return o;
    }
    function U(d, s) {
      if (typeof s != "number") throw new TypeError(`${d} must be a number`);
    }
    function Y(d) {
      if (d.isEmpty()) throw new Error("Empty matrix has no elements to index");
    }
    function $(d) {
      let s = se(d.rows);
      for (let o = 0; o < d.rows; ++o) for (let n = 0; n < d.columns; ++n) s[o] += d.get(o, n);
      return s;
    }
    function ue(d) {
      let s = se(d.columns);
      for (let o = 0; o < d.rows; ++o) for (let n = 0; n < d.columns; ++n) s[n] += d.get(o, n);
      return s;
    }
    function ge(d) {
      let s = 0;
      for (let o = 0; o < d.rows; o++) for (let n = 0; n < d.columns; n++) s += d.get(o, n);
      return s;
    }
    function re(d) {
      let s = se(d.rows, 1);
      for (let o = 0; o < d.rows; ++o) for (let n = 0; n < d.columns; ++n) s[o] *= d.get(o, n);
      return s;
    }
    function fe(d) {
      let s = se(d.columns, 1);
      for (let o = 0; o < d.rows; ++o) for (let n = 0; n < d.columns; ++n) s[n] *= d.get(o, n);
      return s;
    }
    function Q(d) {
      let s = 1;
      for (let o = 0; o < d.rows; o++) for (let n = 0; n < d.columns; n++) s *= d.get(o, n);
      return s;
    }
    function me(d, s, o) {
      const n = d.rows, l = d.columns, u = [];
      for (let m = 0; m < n; m++) {
        let w = 0, y = 0, b = 0;
        for (let P = 0; P < l; P++) b = d.get(m, P) - o[m], w += b, y += b * b;
        s ? u.push((y - w * w / l) / (l - 1)) : u.push((y - w * w / l) / l);
      }
      return u;
    }
    function ke(d, s, o) {
      const n = d.rows, l = d.columns, u = [];
      for (let m = 0; m < l; m++) {
        let w = 0, y = 0, b = 0;
        for (let P = 0; P < n; P++) b = d.get(P, m) - o[m], w += b, y += b * b;
        s ? u.push((y - w * w / n) / (n - 1)) : u.push((y - w * w / n) / n);
      }
      return u;
    }
    function he(d, s, o) {
      const n = d.rows, l = d.columns, u = n * l;
      let m = 0, w = 0, y = 0;
      for (let b = 0; b < n; b++) for (let P = 0; P < l; P++) y = d.get(b, P) - o, m += y, w += y * y;
      return s ? (w - m * m / u) / (u - 1) : (w - m * m / u) / u;
    }
    function Be(d, s) {
      for (let o = 0; o < d.rows; o++) for (let n = 0; n < d.columns; n++) d.set(o, n, d.get(o, n) - s[o]);
    }
    function pt(d, s) {
      for (let o = 0; o < d.rows; o++) for (let n = 0; n < d.columns; n++) d.set(o, n, d.get(o, n) - s[n]);
    }
    function $t(d, s) {
      for (let o = 0; o < d.rows; o++) for (let n = 0; n < d.columns; n++) d.set(o, n, d.get(o, n) - s);
    }
    function Xe(d) {
      const s = [];
      for (let o = 0; o < d.rows; o++) {
        let n = 0;
        for (let l = 0; l < d.columns; l++) n += d.get(o, l) ** 2 / (d.columns - 1);
        s.push(Math.sqrt(n));
      }
      return s;
    }
    function Re(d, s) {
      for (let o = 0; o < d.rows; o++) for (let n = 0; n < d.columns; n++) d.set(o, n, d.get(o, n) / s[o]);
    }
    function Ze(d) {
      const s = [];
      for (let o = 0; o < d.columns; o++) {
        let n = 0;
        for (let l = 0; l < d.rows; l++) n += d.get(l, o) ** 2 / (d.rows - 1);
        s.push(Math.sqrt(n));
      }
      return s;
    }
    function Ai(d, s) {
      for (let o = 0; o < d.rows; o++) for (let n = 0; n < d.columns; n++) d.set(o, n, d.get(o, n) / s[n]);
    }
    function Ur(d) {
      const s = d.size - 1;
      let o = 0;
      for (let n = 0; n < d.columns; n++) for (let l = 0; l < d.rows; l++) o += d.get(l, n) ** 2 / s;
      return Math.sqrt(o);
    }
    function Ri(d, s) {
      for (let o = 0; o < d.rows; o++) for (let n = 0; n < d.columns; n++) d.set(o, n, d.get(o, n) / s);
    }
    class _e {
      static from1DArray(s, o, n) {
        if (s * o !== n.length) throw new RangeError("data length does not match given dimensions");
        let u = new ne(s, o);
        for (let m = 0; m < s; m++) for (let w = 0; w < o; w++) u.set(m, w, n[m * o + w]);
        return u;
      }
      static rowVector(s) {
        let o = new ne(1, s.length);
        for (let n = 0; n < s.length; n++) o.set(0, n, s[n]);
        return o;
      }
      static columnVector(s) {
        let o = new ne(s.length, 1);
        for (let n = 0; n < s.length; n++) o.set(n, 0, s[n]);
        return o;
      }
      static zeros(s, o) {
        return new ne(s, o);
      }
      static ones(s, o) {
        return new ne(s, o).fill(1);
      }
      static rand(s, o, n = {}) {
        if (typeof n != "object") throw new TypeError("options must be an object");
        const { random: l = Math.random } = n;
        let u = new ne(s, o);
        for (let m = 0; m < s; m++) for (let w = 0; w < o; w++) u.set(m, w, l());
        return u;
      }
      static randInt(s, o, n = {}) {
        if (typeof n != "object") throw new TypeError("options must be an object");
        const { min: l = 0, max: u = 1e3, random: m = Math.random } = n;
        if (!Number.isInteger(l)) throw new TypeError("min must be an integer");
        if (!Number.isInteger(u)) throw new TypeError("max must be an integer");
        if (l >= u) throw new RangeError("min must be smaller than max");
        let w = u - l, y = new ne(s, o);
        for (let b = 0; b < s; b++) for (let P = 0; P < o; P++) {
          let _ = l + Math.round(m() * w);
          y.set(b, P, _);
        }
        return y;
      }
      static eye(s, o, n) {
        o === void 0 && (o = s), n === void 0 && (n = 1);
        let l = Math.min(s, o), u = this.zeros(s, o);
        for (let m = 0; m < l; m++) u.set(m, m, n);
        return u;
      }
      static diag(s, o, n) {
        let l = s.length;
        o === void 0 && (o = l), n === void 0 && (n = o);
        let u = Math.min(l, o, n), m = this.zeros(o, n);
        for (let w = 0; w < u; w++) m.set(w, w, s[w]);
        return m;
      }
      static min(s, o) {
        s = this.checkMatrix(s), o = this.checkMatrix(o);
        let n = s.rows, l = s.columns, u = new ne(n, l);
        for (let m = 0; m < n; m++) for (let w = 0; w < l; w++) u.set(m, w, Math.min(s.get(m, w), o.get(m, w)));
        return u;
      }
      static max(s, o) {
        s = this.checkMatrix(s), o = this.checkMatrix(o);
        let n = s.rows, l = s.columns, u = new this(n, l);
        for (let m = 0; m < n; m++) for (let w = 0; w < l; w++) u.set(m, w, Math.max(s.get(m, w), o.get(m, w)));
        return u;
      }
      static checkMatrix(s) {
        return _e.isMatrix(s) ? s : new ne(s);
      }
      static isMatrix(s) {
        return s != null && s.klass === "Matrix";
      }
      get size() {
        return this.rows * this.columns;
      }
      apply(s) {
        if (typeof s != "function") throw new TypeError("callback must be a function");
        for (let o = 0; o < this.rows; o++) for (let n = 0; n < this.columns; n++) s.call(this, o, n);
        return this;
      }
      to1DArray() {
        let s = [];
        for (let o = 0; o < this.rows; o++) for (let n = 0; n < this.columns; n++) s.push(this.get(o, n));
        return s;
      }
      to2DArray() {
        let s = [];
        for (let o = 0; o < this.rows; o++) {
          s.push([]);
          for (let n = 0; n < this.columns; n++) s[o].push(this.get(o, n));
        }
        return s;
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
          for (let s = 0; s < this.rows; s++) for (let o = 0; o <= s; o++) if (this.get(s, o) !== this.get(o, s)) return false;
          return true;
        }
        return false;
      }
      isDistance() {
        if (!this.isSymmetric()) return false;
        for (let s = 0; s < this.rows; s++) if (this.get(s, s) !== 0) return false;
        return true;
      }
      isEchelonForm() {
        let s = 0, o = 0, n = -1, l = true, u = false;
        for (; s < this.rows && l; ) {
          for (o = 0, u = false; o < this.columns && u === false; ) this.get(s, o) === 0 ? o++ : this.get(s, o) === 1 && o > n ? (u = true, n = o) : (l = false, u = true);
          s++;
        }
        return l;
      }
      isReducedEchelonForm() {
        let s = 0, o = 0, n = -1, l = true, u = false;
        for (; s < this.rows && l; ) {
          for (o = 0, u = false; o < this.columns && u === false; ) this.get(s, o) === 0 ? o++ : this.get(s, o) === 1 && o > n ? (u = true, n = o) : (l = false, u = true);
          for (let m = o + 1; m < this.rows; m++) this.get(s, m) !== 0 && (l = false);
          s++;
        }
        return l;
      }
      echelonForm() {
        let s = this.clone(), o = 0, n = 0;
        for (; o < s.rows && n < s.columns; ) {
          let l = o;
          for (let u = o; u < s.rows; u++) s.get(u, n) > s.get(l, n) && (l = u);
          if (s.get(l, n) === 0) n++;
          else {
            s.swapRows(o, l);
            let u = s.get(o, n);
            for (let m = n; m < s.columns; m++) s.set(o, m, s.get(o, m) / u);
            for (let m = o + 1; m < s.rows; m++) {
              let w = s.get(m, n) / s.get(o, n);
              s.set(m, n, 0);
              for (let y = n + 1; y < s.columns; y++) s.set(m, y, s.get(m, y) - s.get(o, y) * w);
            }
            o++, n++;
          }
        }
        return s;
      }
      reducedEchelonForm() {
        let s = this.echelonForm(), o = s.columns, n = s.rows, l = n - 1;
        for (; l >= 0; ) if (s.maxRow(l) === 0) l--;
        else {
          let u = 0, m = false;
          for (; u < n && m === false; ) s.get(l, u) === 1 ? m = true : u++;
          for (let w = 0; w < l; w++) {
            let y = s.get(w, u);
            for (let b = u; b < o; b++) {
              let P = s.get(w, b) - y * s.get(l, b);
              s.set(w, b, P);
            }
          }
          l--;
        }
        return s;
      }
      set() {
        throw new Error("set method is unimplemented");
      }
      get() {
        throw new Error("get method is unimplemented");
      }
      repeat(s = {}) {
        if (typeof s != "object") throw new TypeError("options must be an object");
        const { rows: o = 1, columns: n = 1 } = s;
        if (!Number.isInteger(o) || o <= 0) throw new TypeError("rows must be a positive integer");
        if (!Number.isInteger(n) || n <= 0) throw new TypeError("columns must be a positive integer");
        let l = new ne(this.rows * o, this.columns * n);
        for (let u = 0; u < o; u++) for (let m = 0; m < n; m++) l.setSubMatrix(this, this.rows * u, this.columns * m);
        return l;
      }
      fill(s) {
        for (let o = 0; o < this.rows; o++) for (let n = 0; n < this.columns; n++) this.set(o, n, s);
        return this;
      }
      neg() {
        return this.mulS(-1);
      }
      getRow(s) {
        g(this, s);
        let o = [];
        for (let n = 0; n < this.columns; n++) o.push(this.get(s, n));
        return o;
      }
      getRowVector(s) {
        return ne.rowVector(this.getRow(s));
      }
      setRow(s, o) {
        g(this, s), o = C(this, o);
        for (let n = 0; n < this.columns; n++) this.set(s, n, o[n]);
        return this;
      }
      swapRows(s, o) {
        g(this, s), g(this, o);
        for (let n = 0; n < this.columns; n++) {
          let l = this.get(s, n);
          this.set(s, n, this.get(o, n)), this.set(o, n, l);
        }
        return this;
      }
      getColumn(s) {
        I(this, s);
        let o = [];
        for (let n = 0; n < this.rows; n++) o.push(this.get(n, s));
        return o;
      }
      getColumnVector(s) {
        return ne.columnVector(this.getColumn(s));
      }
      setColumn(s, o) {
        I(this, s), o = A(this, o);
        for (let n = 0; n < this.rows; n++) this.set(n, s, o[n]);
        return this;
      }
      swapColumns(s, o) {
        I(this, s), I(this, o);
        for (let n = 0; n < this.rows; n++) {
          let l = this.get(n, s);
          this.set(n, s, this.get(n, o)), this.set(n, o, l);
        }
        return this;
      }
      addRowVector(s) {
        s = C(this, s);
        for (let o = 0; o < this.rows; o++) for (let n = 0; n < this.columns; n++) this.set(o, n, this.get(o, n) + s[n]);
        return this;
      }
      subRowVector(s) {
        s = C(this, s);
        for (let o = 0; o < this.rows; o++) for (let n = 0; n < this.columns; n++) this.set(o, n, this.get(o, n) - s[n]);
        return this;
      }
      mulRowVector(s) {
        s = C(this, s);
        for (let o = 0; o < this.rows; o++) for (let n = 0; n < this.columns; n++) this.set(o, n, this.get(o, n) * s[n]);
        return this;
      }
      divRowVector(s) {
        s = C(this, s);
        for (let o = 0; o < this.rows; o++) for (let n = 0; n < this.columns; n++) this.set(o, n, this.get(o, n) / s[n]);
        return this;
      }
      addColumnVector(s) {
        s = A(this, s);
        for (let o = 0; o < this.rows; o++) for (let n = 0; n < this.columns; n++) this.set(o, n, this.get(o, n) + s[o]);
        return this;
      }
      subColumnVector(s) {
        s = A(this, s);
        for (let o = 0; o < this.rows; o++) for (let n = 0; n < this.columns; n++) this.set(o, n, this.get(o, n) - s[o]);
        return this;
      }
      mulColumnVector(s) {
        s = A(this, s);
        for (let o = 0; o < this.rows; o++) for (let n = 0; n < this.columns; n++) this.set(o, n, this.get(o, n) * s[o]);
        return this;
      }
      divColumnVector(s) {
        s = A(this, s);
        for (let o = 0; o < this.rows; o++) for (let n = 0; n < this.columns; n++) this.set(o, n, this.get(o, n) / s[o]);
        return this;
      }
      mulRow(s, o) {
        g(this, s);
        for (let n = 0; n < this.columns; n++) this.set(s, n, this.get(s, n) * o);
        return this;
      }
      mulColumn(s, o) {
        I(this, s);
        for (let n = 0; n < this.rows; n++) this.set(n, s, this.get(n, s) * o);
        return this;
      }
      max(s) {
        if (this.isEmpty()) return NaN;
        switch (s) {
          case "row": {
            const o = new Array(this.rows).fill(Number.NEGATIVE_INFINITY);
            for (let n = 0; n < this.rows; n++) for (let l = 0; l < this.columns; l++) this.get(n, l) > o[n] && (o[n] = this.get(n, l));
            return o;
          }
          case "column": {
            const o = new Array(this.columns).fill(Number.NEGATIVE_INFINITY);
            for (let n = 0; n < this.rows; n++) for (let l = 0; l < this.columns; l++) this.get(n, l) > o[l] && (o[l] = this.get(n, l));
            return o;
          }
          case void 0: {
            let o = this.get(0, 0);
            for (let n = 0; n < this.rows; n++) for (let l = 0; l < this.columns; l++) this.get(n, l) > o && (o = this.get(n, l));
            return o;
          }
          default:
            throw new Error(`invalid option: ${s}`);
        }
      }
      maxIndex() {
        Y(this);
        let s = this.get(0, 0), o = [
          0,
          0
        ];
        for (let n = 0; n < this.rows; n++) for (let l = 0; l < this.columns; l++) this.get(n, l) > s && (s = this.get(n, l), o[0] = n, o[1] = l);
        return o;
      }
      min(s) {
        if (this.isEmpty()) return NaN;
        switch (s) {
          case "row": {
            const o = new Array(this.rows).fill(Number.POSITIVE_INFINITY);
            for (let n = 0; n < this.rows; n++) for (let l = 0; l < this.columns; l++) this.get(n, l) < o[n] && (o[n] = this.get(n, l));
            return o;
          }
          case "column": {
            const o = new Array(this.columns).fill(Number.POSITIVE_INFINITY);
            for (let n = 0; n < this.rows; n++) for (let l = 0; l < this.columns; l++) this.get(n, l) < o[l] && (o[l] = this.get(n, l));
            return o;
          }
          case void 0: {
            let o = this.get(0, 0);
            for (let n = 0; n < this.rows; n++) for (let l = 0; l < this.columns; l++) this.get(n, l) < o && (o = this.get(n, l));
            return o;
          }
          default:
            throw new Error(`invalid option: ${s}`);
        }
      }
      minIndex() {
        Y(this);
        let s = this.get(0, 0), o = [
          0,
          0
        ];
        for (let n = 0; n < this.rows; n++) for (let l = 0; l < this.columns; l++) this.get(n, l) < s && (s = this.get(n, l), o[0] = n, o[1] = l);
        return o;
      }
      maxRow(s) {
        if (g(this, s), this.isEmpty()) return NaN;
        let o = this.get(s, 0);
        for (let n = 1; n < this.columns; n++) this.get(s, n) > o && (o = this.get(s, n));
        return o;
      }
      maxRowIndex(s) {
        g(this, s), Y(this);
        let o = this.get(s, 0), n = [
          s,
          0
        ];
        for (let l = 1; l < this.columns; l++) this.get(s, l) > o && (o = this.get(s, l), n[1] = l);
        return n;
      }
      minRow(s) {
        if (g(this, s), this.isEmpty()) return NaN;
        let o = this.get(s, 0);
        for (let n = 1; n < this.columns; n++) this.get(s, n) < o && (o = this.get(s, n));
        return o;
      }
      minRowIndex(s) {
        g(this, s), Y(this);
        let o = this.get(s, 0), n = [
          s,
          0
        ];
        for (let l = 1; l < this.columns; l++) this.get(s, l) < o && (o = this.get(s, l), n[1] = l);
        return n;
      }
      maxColumn(s) {
        if (I(this, s), this.isEmpty()) return NaN;
        let o = this.get(0, s);
        for (let n = 1; n < this.rows; n++) this.get(n, s) > o && (o = this.get(n, s));
        return o;
      }
      maxColumnIndex(s) {
        I(this, s), Y(this);
        let o = this.get(0, s), n = [
          0,
          s
        ];
        for (let l = 1; l < this.rows; l++) this.get(l, s) > o && (o = this.get(l, s), n[0] = l);
        return n;
      }
      minColumn(s) {
        if (I(this, s), this.isEmpty()) return NaN;
        let o = this.get(0, s);
        for (let n = 1; n < this.rows; n++) this.get(n, s) < o && (o = this.get(n, s));
        return o;
      }
      minColumnIndex(s) {
        I(this, s), Y(this);
        let o = this.get(0, s), n = [
          0,
          s
        ];
        for (let l = 1; l < this.rows; l++) this.get(l, s) < o && (o = this.get(l, s), n[0] = l);
        return n;
      }
      diag() {
        let s = Math.min(this.rows, this.columns), o = [];
        for (let n = 0; n < s; n++) o.push(this.get(n, n));
        return o;
      }
      norm(s = "frobenius") {
        switch (s) {
          case "max":
            return this.max();
          case "frobenius":
            return Math.sqrt(this.dot(this));
          default:
            throw new RangeError(`unknown norm type: ${s}`);
        }
      }
      cumulativeSum() {
        let s = 0;
        for (let o = 0; o < this.rows; o++) for (let n = 0; n < this.columns; n++) s += this.get(o, n), this.set(o, n, s);
        return this;
      }
      dot(s) {
        _e.isMatrix(s) && (s = s.to1DArray());
        let o = this.to1DArray();
        if (o.length !== s.length) throw new RangeError("vectors do not have the same size");
        let n = 0;
        for (let l = 0; l < o.length; l++) n += o[l] * s[l];
        return n;
      }
      mmul(s) {
        s = ne.checkMatrix(s);
        let o = this.rows, n = this.columns, l = s.columns, u = new ne(o, l), m = new Float64Array(n);
        for (let w = 0; w < l; w++) {
          for (let y = 0; y < n; y++) m[y] = s.get(y, w);
          for (let y = 0; y < o; y++) {
            let b = 0;
            for (let P = 0; P < n; P++) b += this.get(y, P) * m[P];
            u.set(y, w, b);
          }
        }
        return u;
      }
      mpow(s) {
        if (!this.isSquare()) throw new RangeError("Matrix must be square");
        if (!Number.isInteger(s) || s < 0) throw new RangeError("Exponent must be a non-negative integer");
        let o = ne.eye(this.rows), n = this;
        for (let l = s; l >= 1; l /= 2) (l & 1) !== 0 && (o = o.mmul(n)), n = n.mmul(n);
        return o;
      }
      strassen2x2(s) {
        s = ne.checkMatrix(s);
        let o = new ne(2, 2);
        const n = this.get(0, 0), l = s.get(0, 0), u = this.get(0, 1), m = s.get(0, 1), w = this.get(1, 0), y = s.get(1, 0), b = this.get(1, 1), P = s.get(1, 1), _ = (n + b) * (l + P), O = (w + b) * l, te = n * (m - P), R = b * (y - l), j = (n + u) * P, le = (w - n) * (l + m), S = (u - b) * (y + P), ee = _ + R - j + S, de = te + j, Se = O + R, Me = _ - O + te + le;
        return o.set(0, 0, ee), o.set(0, 1, de), o.set(1, 0, Se), o.set(1, 1, Me), o;
      }
      strassen3x3(s) {
        s = ne.checkMatrix(s);
        let o = new ne(3, 3);
        const n = this.get(0, 0), l = this.get(0, 1), u = this.get(0, 2), m = this.get(1, 0), w = this.get(1, 1), y = this.get(1, 2), b = this.get(2, 0), P = this.get(2, 1), _ = this.get(2, 2), O = s.get(0, 0), te = s.get(0, 1), R = s.get(0, 2), j = s.get(1, 0), le = s.get(1, 1), S = s.get(1, 2), ee = s.get(2, 0), de = s.get(2, 1), Se = s.get(2, 2), Me = (n + l + u - m - w - P - _) * le, nt = (n - m) * (-te + le), be = w * (-O + te + j - le - S - ee + Se), Ee = (-n + m + w) * (O - te + le), He = (m + w) * (-O + te), T = n * O, W = (-n + b + P) * (O - R + S), ce = (-n + b) * (R - S), H = (b + P) * (-O + R), st = (n + l + u - w - y - b - P) * S, qe = P * (-O + R + j - le - S - ee + de), it = (-u + P + _) * (le + ee - de), ot = (u - _) * (le - de), bt = u * ee, oi = (P + _) * (-ee + de), wt = (-u + w + y) * (S + ee - Se), wi = (u - y) * (S - Se), Oi = (w + y) * (-ee + Se), Le = l * j, vt = y * de, Wt = m * R, Vt = b * te, yt = _ * Se, Nh = T + bt + Le, Dh = Me + Ee + He + T + it + bt + oi, jh = T + W + H + st + bt + wt + Oi, Fh = nt + be + Ee + T + bt + wt + wi, Uh = nt + Ee + He + T + vt, zh = bt + wt + wi + Oi + Wt, Gh = T + W + ce + qe + it + ot + bt, $h = it + ot + bt + oi + Vt, Bh = T + W + ce + H + yt;
        return o.set(0, 0, Nh), o.set(0, 1, Dh), o.set(0, 2, jh), o.set(1, 0, Fh), o.set(1, 1, Uh), o.set(1, 2, zh), o.set(2, 0, Gh), o.set(2, 1, $h), o.set(2, 2, Bh), o;
      }
      mmulStrassen(s) {
        s = ne.checkMatrix(s);
        let o = this.clone(), n = o.rows, l = o.columns, u = s.rows, m = s.columns;
        l !== u && console.warn(`Multiplying ${n} x ${l} and ${u} x ${m} matrix: dimensions do not match.`);
        function w(_, O, te) {
          let R = _.rows, j = _.columns;
          if (R === O && j === te) return _;
          {
            let le = _e.zeros(O, te);
            return le = le.setSubMatrix(_, 0, 0), le;
          }
        }
        let y = Math.max(n, u), b = Math.max(l, m);
        o = w(o, y, b), s = w(s, y, b);
        function P(_, O, te, R) {
          if (te <= 512 || R <= 512) return _.mmul(O);
          te % 2 === 1 && R % 2 === 1 ? (_ = w(_, te + 1, R + 1), O = w(O, te + 1, R + 1)) : te % 2 === 1 ? (_ = w(_, te + 1, R), O = w(O, te + 1, R)) : R % 2 === 1 && (_ = w(_, te, R + 1), O = w(O, te, R + 1));
          let j = parseInt(_.rows / 2, 10), le = parseInt(_.columns / 2, 10), S = _.subMatrix(0, j - 1, 0, le - 1), ee = O.subMatrix(0, j - 1, 0, le - 1), de = _.subMatrix(0, j - 1, le, _.columns - 1), Se = O.subMatrix(0, j - 1, le, O.columns - 1), Me = _.subMatrix(j, _.rows - 1, 0, le - 1), nt = O.subMatrix(j, O.rows - 1, 0, le - 1), be = _.subMatrix(j, _.rows - 1, le, _.columns - 1), Ee = O.subMatrix(j, O.rows - 1, le, O.columns - 1), He = P(_e.add(S, be), _e.add(ee, Ee), j, le), T = P(_e.add(Me, be), ee, j, le), W = P(S, _e.sub(Se, Ee), j, le), ce = P(be, _e.sub(nt, ee), j, le), H = P(_e.add(S, de), Ee, j, le), st = P(_e.sub(Me, S), _e.add(ee, Se), j, le), qe = P(_e.sub(de, be), _e.add(nt, Ee), j, le), it = _e.add(He, ce);
          it.sub(H), it.add(qe);
          let ot = _e.add(W, H), bt = _e.add(T, ce), oi = _e.sub(He, T);
          oi.add(W), oi.add(st);
          let wt = _e.zeros(2 * it.rows, 2 * it.columns);
          return wt = wt.setSubMatrix(it, 0, 0), wt = wt.setSubMatrix(ot, it.rows, 0), wt = wt.setSubMatrix(bt, 0, it.columns), wt = wt.setSubMatrix(oi, it.rows, it.columns), wt.subMatrix(0, te - 1, 0, R - 1);
        }
        return P(o, s, y, b);
      }
      scaleRows(s = {}) {
        if (typeof s != "object") throw new TypeError("options must be an object");
        const { min: o = 0, max: n = 1 } = s;
        if (!Number.isFinite(o)) throw new TypeError("min must be a number");
        if (!Number.isFinite(n)) throw new TypeError("max must be a number");
        if (o >= n) throw new RangeError("min must be smaller than max");
        let l = new ne(this.rows, this.columns);
        for (let u = 0; u < this.rows; u++) {
          const m = this.getRow(u);
          m.length > 0 && t(m, {
            min: o,
            max: n,
            output: m
          }), l.setRow(u, m);
        }
        return l;
      }
      scaleColumns(s = {}) {
        if (typeof s != "object") throw new TypeError("options must be an object");
        const { min: o = 0, max: n = 1 } = s;
        if (!Number.isFinite(o)) throw new TypeError("min must be a number");
        if (!Number.isFinite(n)) throw new TypeError("max must be a number");
        if (o >= n) throw new RangeError("min must be smaller than max");
        let l = new ne(this.rows, this.columns);
        for (let u = 0; u < this.columns; u++) {
          const m = this.getColumn(u);
          m.length && t(m, {
            min: o,
            max: n,
            output: m
          }), l.setColumn(u, m);
        }
        return l;
      }
      flipRows() {
        const s = Math.ceil(this.columns / 2);
        for (let o = 0; o < this.rows; o++) for (let n = 0; n < s; n++) {
          let l = this.get(o, n), u = this.get(o, this.columns - 1 - n);
          this.set(o, n, u), this.set(o, this.columns - 1 - n, l);
        }
        return this;
      }
      flipColumns() {
        const s = Math.ceil(this.rows / 2);
        for (let o = 0; o < this.columns; o++) for (let n = 0; n < s; n++) {
          let l = this.get(n, o), u = this.get(this.rows - 1 - n, o);
          this.set(n, o, u), this.set(this.rows - 1 - n, o, l);
        }
        return this;
      }
      kroneckerProduct(s) {
        s = ne.checkMatrix(s);
        let o = this.rows, n = this.columns, l = s.rows, u = s.columns, m = new ne(o * l, n * u);
        for (let w = 0; w < o; w++) for (let y = 0; y < n; y++) for (let b = 0; b < l; b++) for (let P = 0; P < u; P++) m.set(l * w + b, u * y + P, this.get(w, y) * s.get(b, P));
        return m;
      }
      kroneckerSum(s) {
        if (s = ne.checkMatrix(s), !this.isSquare() || !s.isSquare()) throw new Error("Kronecker Sum needs two Square Matrices");
        let o = this.rows, n = s.rows, l = this.kroneckerProduct(ne.eye(n, n)), u = ne.eye(o, o).kroneckerProduct(s);
        return l.add(u);
      }
      transpose() {
        let s = new ne(this.columns, this.rows);
        for (let o = 0; o < this.rows; o++) for (let n = 0; n < this.columns; n++) s.set(n, o, this.get(o, n));
        return s;
      }
      sortRows(s = vn) {
        for (let o = 0; o < this.rows; o++) this.setRow(o, this.getRow(o).sort(s));
        return this;
      }
      sortColumns(s = vn) {
        for (let o = 0; o < this.columns; o++) this.setColumn(o, this.getColumn(o).sort(s));
        return this;
      }
      subMatrix(s, o, n, l) {
        pe(this, s, o, n, l);
        let u = new ne(o - s + 1, l - n + 1);
        for (let m = s; m <= o; m++) for (let w = n; w <= l; w++) u.set(m - s, w - n, this.get(m, w));
        return u;
      }
      subMatrixRow(s, o, n) {
        if (o === void 0 && (o = 0), n === void 0 && (n = this.columns - 1), o > n || o < 0 || o >= this.columns || n < 0 || n >= this.columns) throw new RangeError("Argument out of range");
        let l = new ne(s.length, n - o + 1);
        for (let u = 0; u < s.length; u++) for (let m = o; m <= n; m++) {
          if (s[u] < 0 || s[u] >= this.rows) throw new RangeError(`Row index out of range: ${s[u]}`);
          l.set(u, m - o, this.get(s[u], m));
        }
        return l;
      }
      subMatrixColumn(s, o, n) {
        if (o === void 0 && (o = 0), n === void 0 && (n = this.rows - 1), o > n || o < 0 || o >= this.rows || n < 0 || n >= this.rows) throw new RangeError("Argument out of range");
        let l = new ne(n - o + 1, s.length);
        for (let u = 0; u < s.length; u++) for (let m = o; m <= n; m++) {
          if (s[u] < 0 || s[u] >= this.columns) throw new RangeError(`Column index out of range: ${s[u]}`);
          l.set(m - o, u, this.get(m, s[u]));
        }
        return l;
      }
      setSubMatrix(s, o, n) {
        if (s = ne.checkMatrix(s), s.isEmpty()) return this;
        let l = o + s.rows - 1, u = n + s.columns - 1;
        pe(this, o, l, n, u);
        for (let m = 0; m < s.rows; m++) for (let w = 0; w < s.columns; w++) this.set(o + m, n + w, s.get(m, w));
        return this;
      }
      selection(s, o) {
        F(this, s), x(this, o);
        let n = new ne(s.length, o.length);
        for (let l = 0; l < s.length; l++) {
          let u = s[l];
          for (let m = 0; m < o.length; m++) {
            let w = o[m];
            n.set(l, m, this.get(u, w));
          }
        }
        return n;
      }
      trace() {
        let s = Math.min(this.rows, this.columns), o = 0;
        for (let n = 0; n < s; n++) o += this.get(n, n);
        return o;
      }
      clone() {
        return this.constructor.copy(this, new ne(this.rows, this.columns));
      }
      static copy(s, o) {
        for (const [n, l, u] of s.entries()) o.set(n, l, u);
        return o;
      }
      sum(s) {
        switch (s) {
          case "row":
            return $(this);
          case "column":
            return ue(this);
          case void 0:
            return ge(this);
          default:
            throw new Error(`invalid option: ${s}`);
        }
      }
      product(s) {
        switch (s) {
          case "row":
            return re(this);
          case "column":
            return fe(this);
          case void 0:
            return Q(this);
          default:
            throw new Error(`invalid option: ${s}`);
        }
      }
      mean(s) {
        const o = this.sum(s);
        switch (s) {
          case "row": {
            for (let n = 0; n < this.rows; n++) o[n] /= this.columns;
            return o;
          }
          case "column": {
            for (let n = 0; n < this.columns; n++) o[n] /= this.rows;
            return o;
          }
          case void 0:
            return o / this.size;
          default:
            throw new Error(`invalid option: ${s}`);
        }
      }
      variance(s, o = {}) {
        if (typeof s == "object" && (o = s, s = void 0), typeof o != "object") throw new TypeError("options must be an object");
        const { unbiased: n = true, mean: l = this.mean(s) } = o;
        if (typeof n != "boolean") throw new TypeError("unbiased must be a boolean");
        switch (s) {
          case "row": {
            if (!e.isAnyArray(l)) throw new TypeError("mean must be an array");
            return me(this, n, l);
          }
          case "column": {
            if (!e.isAnyArray(l)) throw new TypeError("mean must be an array");
            return ke(this, n, l);
          }
          case void 0: {
            if (typeof l != "number") throw new TypeError("mean must be a number");
            return he(this, n, l);
          }
          default:
            throw new Error(`invalid option: ${s}`);
        }
      }
      standardDeviation(s, o) {
        typeof s == "object" && (o = s, s = void 0);
        const n = this.variance(s, o);
        if (s === void 0) return Math.sqrt(n);
        for (let l = 0; l < n.length; l++) n[l] = Math.sqrt(n[l]);
        return n;
      }
      center(s, o = {}) {
        if (typeof s == "object" && (o = s, s = void 0), typeof o != "object") throw new TypeError("options must be an object");
        const { center: n = this.mean(s) } = o;
        switch (s) {
          case "row": {
            if (!e.isAnyArray(n)) throw new TypeError("center must be an array");
            return Be(this, n), this;
          }
          case "column": {
            if (!e.isAnyArray(n)) throw new TypeError("center must be an array");
            return pt(this, n), this;
          }
          case void 0: {
            if (typeof n != "number") throw new TypeError("center must be a number");
            return $t(this, n), this;
          }
          default:
            throw new Error(`invalid option: ${s}`);
        }
      }
      scale(s, o = {}) {
        if (typeof s == "object" && (o = s, s = void 0), typeof o != "object") throw new TypeError("options must be an object");
        let n = o.scale;
        switch (s) {
          case "row": {
            if (n === void 0) n = Xe(this);
            else if (!e.isAnyArray(n)) throw new TypeError("scale must be an array");
            return Re(this, n), this;
          }
          case "column": {
            if (n === void 0) n = Ze(this);
            else if (!e.isAnyArray(n)) throw new TypeError("scale must be an array");
            return Ai(this, n), this;
          }
          case void 0: {
            if (n === void 0) n = Ur(this);
            else if (typeof n != "number") throw new TypeError("scale must be a number");
            return Ri(this, n), this;
          }
          default:
            throw new Error(`invalid option: ${s}`);
        }
      }
      toString(s) {
        return c(this, s);
      }
      [Symbol.iterator]() {
        return this.entries();
      }
      *entries() {
        for (let s = 0; s < this.rows; s++) for (let o = 0; o < this.columns; o++) yield [
          s,
          o,
          this.get(s, o)
        ];
      }
      *values() {
        for (let s = 0; s < this.rows; s++) for (let o = 0; o < this.columns; o++) yield this.get(s, o);
      }
    }
    _e.prototype.klass = "Matrix", typeof Symbol < "u" && (_e.prototype[/* @__PURE__ */ Symbol.for("nodejs.util.inspect.custom")] = a);
    function vn(d, s) {
      return d - s;
    }
    function Fo(d) {
      return d.every((s) => typeof s == "number");
    }
    _e.random = _e.rand, _e.randomInt = _e.randInt, _e.diagonal = _e.diag, _e.prototype.diagonal = _e.prototype.diag, _e.identity = _e.eye, _e.prototype.negate = _e.prototype.neg, _e.prototype.tensorProduct = _e.prototype.kroneckerProduct;
    const _ne = class _ne extends _e {
      constructor(s, o) {
        super();
        __privateAdd(this, _ne_instances);
        __publicField(this, "data");
        if (_ne.isMatrix(s)) __privateMethod(this, _ne_instances, e_fn).call(this, s.rows, s.columns), _ne.copy(s, this);
        else if (Number.isInteger(s) && s >= 0) __privateMethod(this, _ne_instances, e_fn).call(this, s, o);
        else if (e.isAnyArray(s)) {
          const n = s;
          if (s = n.length, o = s ? n[0].length : 0, typeof o != "number") throw new TypeError("Data must be a 2D array with at least one element");
          this.data = [];
          for (let l = 0; l < s; l++) {
            if (n[l].length !== o) throw new RangeError("Inconsistent array dimensions");
            if (!Fo(n[l])) throw new TypeError("Input data contains non-numeric values");
            this.data.push(Float64Array.from(n[l]));
          }
          this.rows = s, this.columns = o;
        } else throw new TypeError("First argument must be a positive number or an array");
      }
      set(s, o, n) {
        return this.data[s][o] = n, this;
      }
      get(s, o) {
        return this.data[s][o];
      }
      removeRow(s) {
        return g(this, s), this.data.splice(s, 1), this.rows -= 1, this;
      }
      addRow(s, o) {
        return o === void 0 && (o = s, s = this.rows), g(this, s, true), o = Float64Array.from(C(this, o)), this.data.splice(s, 0, o), this.rows += 1, this;
      }
      removeColumn(s) {
        I(this, s);
        for (let o = 0; o < this.rows; o++) {
          const n = new Float64Array(this.columns - 1);
          for (let l = 0; l < s; l++) n[l] = this.data[o][l];
          for (let l = s + 1; l < this.columns; l++) n[l - 1] = this.data[o][l];
          this.data[o] = n;
        }
        return this.columns -= 1, this;
      }
      addColumn(s, o) {
        typeof o > "u" && (o = s, s = this.columns), I(this, s, true), o = A(this, o);
        for (let n = 0; n < this.rows; n++) {
          const l = new Float64Array(this.columns + 1);
          let u = 0;
          for (; u < s; u++) l[u] = this.data[n][u];
          for (l[u++] = o[n]; u < this.columns + 1; u++) l[u] = this.data[n][u - 1];
          this.data[n] = l;
        }
        return this.columns += 1, this;
      }
    };
    _ne_instances = new WeakSet();
    e_fn = function(s, o) {
      if (this.data = [], Number.isInteger(o) && o >= 0) for (let n = 0; n < s; n++) this.data.push(new Float64Array(o));
      else throw new TypeError("nColumns must be a positive integer");
      this.rows = s, this.columns = o;
    };
    let ne = _ne;
    v(_e, ne);
    const _Ft = class _Ft extends _e {
      constructor(s) {
        super();
        __privateAdd(this, _e2);
        if (ne.isMatrix(s)) {
          if (!s.isSymmetric()) throw new TypeError("not symmetric data");
          __privateSet(this, _e2, ne.copy(s, new ne(s.rows, s.rows)));
        } else if (Number.isInteger(s) && s >= 0) __privateSet(this, _e2, new ne(s, s));
        else if (__privateSet(this, _e2, new ne(s)), !this.isSymmetric()) throw new TypeError("not symmetric data");
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
      static isSymmetricMatrix(s) {
        return ne.isMatrix(s) && s.klassType === "SymmetricMatrix";
      }
      static zeros(s) {
        return new this(s);
      }
      static ones(s) {
        return new this(s).fill(1);
      }
      clone() {
        const s = new _Ft(this.diagonalSize);
        for (const [o, n, l] of this.upperRightEntries()) s.set(o, n, l);
        return s;
      }
      toMatrix() {
        return new ne(this);
      }
      get(s, o) {
        return __privateGet(this, _e2).get(s, o);
      }
      set(s, o, n) {
        return __privateGet(this, _e2).set(s, o, n), __privateGet(this, _e2).set(o, s, n), this;
      }
      removeCross(s) {
        return __privateGet(this, _e2).removeRow(s), __privateGet(this, _e2).removeColumn(s), this;
      }
      addCross(s, o) {
        o === void 0 && (o = s, s = this.diagonalSize);
        const n = o.slice();
        return n.splice(s, 1), __privateGet(this, _e2).addRow(s, n), __privateGet(this, _e2).addColumn(s, o), this;
      }
      applyMask(s) {
        if (s.length !== this.diagonalSize) throw new RangeError("Mask size do not match with matrix size");
        const o = [];
        for (const [n, l] of s.entries()) l || o.push(n);
        o.reverse();
        for (const n of o) this.removeCross(n);
        return this;
      }
      toCompact() {
        const { diagonalSize: s } = this, o = new Array(s * (s + 1) / 2);
        for (let n = 0, l = 0, u = 0; u < o.length; u++) o[u] = this.get(l, n), ++n >= s && (n = ++l);
        return o;
      }
      static fromCompact(s) {
        const o = s.length, n = (Math.sqrt(8 * o + 1) - 1) / 2;
        if (!Number.isInteger(n)) throw new TypeError(`This array is not a compact representation of a Symmetric Matrix, ${JSON.stringify(s)}`);
        const l = new _Ft(n);
        for (let u = 0, m = 0, w = 0; w < o; w++) l.set(u, m, s[w]), ++u >= n && (u = ++m);
        return l;
      }
      *upperRightEntries() {
        for (let s = 0, o = 0; s < this.diagonalSize; void 0) {
          const n = this.get(s, o);
          yield [
            s,
            o,
            n
          ], ++o >= this.diagonalSize && (o = ++s);
        }
      }
      *upperRightValues() {
        for (let s = 0, o = 0; s < this.diagonalSize; void 0) yield this.get(s, o), ++o >= this.diagonalSize && (o = ++s);
      }
    };
    _e2 = new WeakMap();
    let Ft = _Ft;
    Ft.prototype.klassType = "SymmetricMatrix";
    class Ci extends Ft {
      static isDistanceMatrix(s) {
        return Ft.isSymmetricMatrix(s) && s.klassSubType === "DistanceMatrix";
      }
      constructor(s) {
        if (super(s), !this.isDistance()) throw new TypeError("Provided arguments do no produce a distance matrix");
      }
      set(s, o, n) {
        return s === o && (n = 0), super.set(s, o, n);
      }
      addCross(s, o) {
        return o === void 0 && (o = s, s = this.diagonalSize), o = o.slice(), o[s] = 0, super.addCross(s, o);
      }
      toSymmetricMatrix() {
        return new Ft(this);
      }
      clone() {
        const s = new Ci(this.diagonalSize);
        for (const [o, n, l] of this.upperRightEntries()) o !== n && s.set(o, n, l);
        return s;
      }
      toCompact() {
        const { diagonalSize: s } = this, o = (s - 1) * s / 2, n = new Array(o);
        for (let l = 1, u = 0, m = 0; m < n.length; m++) n[m] = this.get(u, l), ++l >= s && (l = ++u + 1);
        return n;
      }
      static fromCompact(s) {
        const o = s.length;
        if (o === 0) return new this(0);
        const n = (Math.sqrt(8 * o + 1) + 1) / 2;
        if (!Number.isInteger(n)) throw new TypeError(`This array is not a compact representation of a DistanceMatrix, ${JSON.stringify(s)}`);
        const l = new this(n);
        for (let u = 1, m = 0, w = 0; w < o; w++) l.set(u, m, s[w]), ++u >= n && (u = ++m + 1);
        return l;
      }
    }
    Ci.prototype.klassSubType = "DistanceMatrix";
    class Bt extends _e {
      constructor(s, o, n) {
        super(), this.matrix = s, this.rows = o, this.columns = n;
      }
    }
    class us extends Bt {
      constructor(s, o) {
        I(s, o), super(s, s.rows, 1), this.column = o;
      }
      set(s, o, n) {
        return this.matrix.set(s, this.column, n), this;
      }
      get(s) {
        return this.matrix.get(s, this.column);
      }
    }
    class br extends Bt {
      constructor(s, o) {
        x(s, o), super(s, s.rows, o.length), this.columnIndices = o;
      }
      set(s, o, n) {
        return this.matrix.set(s, this.columnIndices[o], n), this;
      }
      get(s, o) {
        return this.matrix.get(s, this.columnIndices[o]);
      }
    }
    class _l extends Bt {
      constructor(s) {
        super(s, s.rows, s.columns);
      }
      set(s, o, n) {
        return this.matrix.set(s, this.columns - o - 1, n), this;
      }
      get(s, o) {
        return this.matrix.get(s, this.columns - o - 1);
      }
    }
    class E extends Bt {
      constructor(s) {
        super(s, s.rows, s.columns);
      }
      set(s, o, n) {
        return this.matrix.set(this.rows - s - 1, o, n), this;
      }
      get(s, o) {
        return this.matrix.get(this.rows - s - 1, o);
      }
    }
    class M extends Bt {
      constructor(s, o) {
        g(s, o), super(s, 1, s.columns), this.row = o;
      }
      set(s, o, n) {
        return this.matrix.set(this.row, o, n), this;
      }
      get(s, o) {
        return this.matrix.get(this.row, o);
      }
    }
    class L extends Bt {
      constructor(s, o) {
        F(s, o), super(s, o.length, s.columns), this.rowIndices = o;
      }
      set(s, o, n) {
        return this.matrix.set(this.rowIndices[s], o, n), this;
      }
      get(s, o) {
        return this.matrix.get(this.rowIndices[s], o);
      }
    }
    class Z extends Bt {
      constructor(s, o, n) {
        F(s, o), x(s, n), super(s, o.length, n.length), this.rowIndices = o, this.columnIndices = n;
      }
      set(s, o, n) {
        return this.matrix.set(this.rowIndices[s], this.columnIndices[o], n), this;
      }
      get(s, o) {
        return this.matrix.get(this.rowIndices[s], this.columnIndices[o]);
      }
    }
    class K extends Bt {
      constructor(s, o, n, l, u) {
        pe(s, o, n, l, u), super(s, n - o + 1, u - l + 1), this.startRow = o, this.startColumn = l;
      }
      set(s, o, n) {
        return this.matrix.set(this.startRow + s, this.startColumn + o, n), this;
      }
      get(s, o) {
        return this.matrix.get(this.startRow + s, this.startColumn + o);
      }
    }
    class J extends Bt {
      constructor(s) {
        super(s, s.columns, s.rows);
      }
      set(s, o, n) {
        return this.matrix.set(o, s, n), this;
      }
      get(s, o) {
        return this.matrix.get(o, s);
      }
    }
    class oe extends _e {
      constructor(s, o = {}) {
        const { rows: n = 1 } = o;
        if (s.length % n !== 0) throw new Error("the data length is not divisible by the number of rows");
        super(), this.rows = n, this.columns = s.length / n, this.data = s;
      }
      set(s, o, n) {
        let l = this._calculateIndex(s, o);
        return this.data[l] = n, this;
      }
      get(s, o) {
        let n = this._calculateIndex(s, o);
        return this.data[n];
      }
      _calculateIndex(s, o) {
        return s * this.columns + o;
      }
    }
    class X extends _e {
      constructor(s) {
        super(), this.data = s, this.rows = s.length, this.columns = s[0].length;
      }
      set(s, o, n) {
        return this.data[s][o] = n, this;
      }
      get(s, o) {
        return this.data[s][o];
      }
    }
    function ie(d, s) {
      if (e.isAnyArray(d)) return d[0] && e.isAnyArray(d[0]) ? new X(d) : new oe(d, s);
      throw new Error("the argument is not an array");
    }
    class q {
      constructor(s) {
        s = X.checkMatrix(s);
        let o = s.clone(), n = o.rows, l = o.columns, u = new Float64Array(n), m = 1, w, y, b, P, _, O, te, R, j;
        for (w = 0; w < n; w++) u[w] = w;
        for (R = new Float64Array(n), y = 0; y < l; y++) {
          for (w = 0; w < n; w++) R[w] = o.get(w, y);
          for (w = 0; w < n; w++) {
            for (j = Math.min(w, y), _ = 0, b = 0; b < j; b++) _ += o.get(w, b) * R[b];
            R[w] -= _, o.set(w, y, R[w]);
          }
          for (P = y, w = y + 1; w < n; w++) Math.abs(R[w]) > Math.abs(R[P]) && (P = w);
          if (P !== y) {
            for (b = 0; b < l; b++) O = o.get(P, b), o.set(P, b, o.get(y, b)), o.set(y, b, O);
            te = u[P], u[P] = u[y], u[y] = te, m = -m;
          }
          if (y < n && o.get(y, y) !== 0) for (w = y + 1; w < n; w++) o.set(w, y, o.get(w, y) / o.get(y, y));
        }
        this.LU = o, this.pivotVector = u, this.pivotSign = m;
      }
      isSingular() {
        let s = this.LU, o = s.columns;
        for (let n = 0; n < o; n++) if (s.get(n, n) === 0) return true;
        return false;
      }
      solve(s) {
        s = ne.checkMatrix(s);
        let o = this.LU;
        if (o.rows !== s.rows) throw new Error("Invalid matrix dimensions");
        if (this.isSingular()) throw new Error("LU matrix is singular");
        let l = s.columns, u = s.subMatrixRow(this.pivotVector, 0, l - 1), m = o.columns, w, y, b;
        for (b = 0; b < m; b++) for (w = b + 1; w < m; w++) for (y = 0; y < l; y++) u.set(w, y, u.get(w, y) - u.get(b, y) * o.get(w, b));
        for (b = m - 1; b >= 0; b--) {
          for (y = 0; y < l; y++) u.set(b, y, u.get(b, y) / o.get(b, b));
          for (w = 0; w < b; w++) for (y = 0; y < l; y++) u.set(w, y, u.get(w, y) - u.get(b, y) * o.get(w, b));
        }
        return u;
      }
      get determinant() {
        let s = this.LU;
        if (!s.isSquare()) throw new Error("Matrix must be square");
        let o = this.pivotSign, n = s.columns;
        for (let l = 0; l < n; l++) o *= s.get(l, l);
        return o;
      }
      get lowerTriangularMatrix() {
        let s = this.LU, o = s.rows, n = s.columns, l = new ne(o, n);
        for (let u = 0; u < o; u++) for (let m = 0; m < n; m++) u > m ? l.set(u, m, s.get(u, m)) : u === m ? l.set(u, m, 1) : l.set(u, m, 0);
        return l;
      }
      get upperTriangularMatrix() {
        let s = this.LU, o = s.rows, n = s.columns, l = new ne(o, n);
        for (let u = 0; u < o; u++) for (let m = 0; m < n; m++) u <= m ? l.set(u, m, s.get(u, m)) : l.set(u, m, 0);
        return l;
      }
      get pivotPermutationVector() {
        return Array.from(this.pivotVector);
      }
    }
    function we(d, s) {
      let o = 0;
      return Math.abs(d) > Math.abs(s) ? (o = s / d, Math.abs(d) * Math.sqrt(1 + o * o)) : s !== 0 ? (o = d / s, Math.abs(s) * Math.sqrt(1 + o * o)) : 0;
    }
    class ae {
      constructor(s) {
        s = X.checkMatrix(s);
        let o = s.clone(), n = s.rows, l = s.columns, u = new Float64Array(l), m, w, y, b;
        for (y = 0; y < l; y++) {
          let P = 0;
          for (m = y; m < n; m++) P = we(P, o.get(m, y));
          if (P !== 0) {
            for (o.get(y, y) < 0 && (P = -P), m = y; m < n; m++) o.set(m, y, o.get(m, y) / P);
            for (o.set(y, y, o.get(y, y) + 1), w = y + 1; w < l; w++) {
              for (b = 0, m = y; m < n; m++) b += o.get(m, y) * o.get(m, w);
              for (b = -b / o.get(y, y), m = y; m < n; m++) o.set(m, w, o.get(m, w) + b * o.get(m, y));
            }
          }
          u[y] = -P;
        }
        this.QR = o, this.Rdiag = u;
      }
      solve(s) {
        s = ne.checkMatrix(s);
        let o = this.QR, n = o.rows;
        if (s.rows !== n) throw new Error("Matrix row dimensions must agree");
        if (!this.isFullRank()) throw new Error("Matrix is rank deficient");
        let l = s.columns, u = s.clone(), m = o.columns, w, y, b, P;
        for (b = 0; b < m; b++) for (y = 0; y < l; y++) {
          for (P = 0, w = b; w < n; w++) P += o.get(w, b) * u.get(w, y);
          for (P = -P / o.get(b, b), w = b; w < n; w++) u.set(w, y, u.get(w, y) + P * o.get(w, b));
        }
        for (b = m - 1; b >= 0; b--) {
          for (y = 0; y < l; y++) u.set(b, y, u.get(b, y) / this.Rdiag[b]);
          for (w = 0; w < b; w++) for (y = 0; y < l; y++) u.set(w, y, u.get(w, y) - u.get(b, y) * o.get(w, b));
        }
        return u.subMatrix(0, m - 1, 0, l - 1);
      }
      isFullRank() {
        let s = this.QR.columns;
        for (let o = 0; o < s; o++) if (this.Rdiag[o] === 0) return false;
        return true;
      }
      get upperTriangularMatrix() {
        let s = this.QR, o = s.columns, n = new ne(o, o), l, u;
        for (l = 0; l < o; l++) for (u = 0; u < o; u++) l < u ? n.set(l, u, s.get(l, u)) : l === u ? n.set(l, u, this.Rdiag[l]) : n.set(l, u, 0);
        return n;
      }
      get orthogonalMatrix() {
        let s = this.QR, o = s.rows, n = s.columns, l = new ne(o, n), u, m, w, y;
        for (w = n - 1; w >= 0; w--) {
          for (u = 0; u < o; u++) l.set(u, w, 0);
          for (l.set(w, w, 1), m = w; m < n; m++) if (s.get(w, w) !== 0) {
            for (y = 0, u = w; u < o; u++) y += s.get(u, w) * l.get(u, m);
            for (y = -y / s.get(w, w), u = w; u < o; u++) l.set(u, m, l.get(u, m) + y * s.get(u, w));
          }
        }
        return l;
      }
    }
    class ye {
      constructor(s, o = {}) {
        if (s = X.checkMatrix(s), s.isEmpty()) throw new Error("Matrix must be non-empty");
        let n = s.rows, l = s.columns;
        const { computeLeftSingularVectors: u = true, computeRightSingularVectors: m = true, autoTranspose: w = false } = o;
        let y = !!u, b = !!m, P = false, _;
        if (n < l) if (!w) _ = s.clone(), console.warn("Computing SVD on a matrix with more columns than rows. Consider enabling autoTranspose");
        else {
          _ = s.transpose(), n = _.rows, l = _.columns, P = true;
          let T = y;
          y = b, b = T;
        }
        else _ = s.clone();
        let O = Math.min(n, l), te = Math.min(n + 1, l), R = new Float64Array(te), j = new ne(n, O), le = new ne(l, l), S = new Float64Array(l), ee = new Float64Array(n), de = new Float64Array(te);
        for (let T = 0; T < te; T++) de[T] = T;
        let Se = Math.min(n - 1, l), Me = Math.max(0, Math.min(l - 2, n)), nt = Math.max(Se, Me);
        for (let T = 0; T < nt; T++) {
          if (T < Se) {
            R[T] = 0;
            for (let W = T; W < n; W++) R[T] = we(R[T], _.get(W, T));
            if (R[T] !== 0) {
              _.get(T, T) < 0 && (R[T] = -R[T]);
              for (let W = T; W < n; W++) _.set(W, T, _.get(W, T) / R[T]);
              _.set(T, T, _.get(T, T) + 1);
            }
            R[T] = -R[T];
          }
          for (let W = T + 1; W < l; W++) {
            if (T < Se && R[T] !== 0) {
              let ce = 0;
              for (let H = T; H < n; H++) ce += _.get(H, T) * _.get(H, W);
              ce = -ce / _.get(T, T);
              for (let H = T; H < n; H++) _.set(H, W, _.get(H, W) + ce * _.get(H, T));
            }
            S[W] = _.get(T, W);
          }
          if (y && T < Se) for (let W = T; W < n; W++) j.set(W, T, _.get(W, T));
          if (T < Me) {
            S[T] = 0;
            for (let W = T + 1; W < l; W++) S[T] = we(S[T], S[W]);
            if (S[T] !== 0) {
              S[T + 1] < 0 && (S[T] = 0 - S[T]);
              for (let W = T + 1; W < l; W++) S[W] /= S[T];
              S[T + 1] += 1;
            }
            if (S[T] = -S[T], T + 1 < n && S[T] !== 0) {
              for (let W = T + 1; W < n; W++) ee[W] = 0;
              for (let W = T + 1; W < n; W++) for (let ce = T + 1; ce < l; ce++) ee[W] += S[ce] * _.get(W, ce);
              for (let W = T + 1; W < l; W++) {
                let ce = -S[W] / S[T + 1];
                for (let H = T + 1; H < n; H++) _.set(H, W, _.get(H, W) + ce * ee[H]);
              }
            }
            if (b) for (let W = T + 1; W < l; W++) le.set(W, T, S[W]);
          }
        }
        let be = Math.min(l, n + 1);
        if (Se < l && (R[Se] = _.get(Se, Se)), n < be && (R[be - 1] = 0), Me + 1 < be && (S[Me] = _.get(Me, be - 1)), S[be - 1] = 0, y) {
          for (let T = Se; T < O; T++) {
            for (let W = 0; W < n; W++) j.set(W, T, 0);
            j.set(T, T, 1);
          }
          for (let T = Se - 1; T >= 0; T--) if (R[T] !== 0) {
            for (let W = T + 1; W < O; W++) {
              let ce = 0;
              for (let H = T; H < n; H++) ce += j.get(H, T) * j.get(H, W);
              ce = -ce / j.get(T, T);
              for (let H = T; H < n; H++) j.set(H, W, j.get(H, W) + ce * j.get(H, T));
            }
            for (let W = T; W < n; W++) j.set(W, T, -j.get(W, T));
            j.set(T, T, 1 + j.get(T, T));
            for (let W = 0; W < T - 1; W++) j.set(W, T, 0);
          } else {
            for (let W = 0; W < n; W++) j.set(W, T, 0);
            j.set(T, T, 1);
          }
        }
        if (b) for (let T = l - 1; T >= 0; T--) {
          if (T < Me && S[T] !== 0) for (let W = T + 1; W < l; W++) {
            let ce = 0;
            for (let H = T + 1; H < l; H++) ce += le.get(H, T) * le.get(H, W);
            ce = -ce / le.get(T + 1, T);
            for (let H = T + 1; H < l; H++) le.set(H, W, le.get(H, W) + ce * le.get(H, T));
          }
          for (let W = 0; W < l; W++) le.set(W, T, 0);
          le.set(T, T, 1);
        }
        let Ee = be - 1, He = Number.EPSILON;
        for (; be > 0; ) {
          let T, W;
          for (T = be - 2; T >= -1 && T !== -1; T--) {
            const ce = Number.MIN_VALUE + He * Math.abs(R[T] + Math.abs(R[T + 1]));
            if (Math.abs(S[T]) <= ce || Number.isNaN(S[T])) {
              S[T] = 0;
              break;
            }
          }
          if (T === be - 2) W = 4;
          else {
            let ce;
            for (ce = be - 1; ce >= T && ce !== T; ce--) {
              let H = (ce !== be ? Math.abs(S[ce]) : 0) + (ce !== T + 1 ? Math.abs(S[ce - 1]) : 0);
              if (Math.abs(R[ce]) <= He * H) {
                R[ce] = 0;
                break;
              }
            }
            ce === T ? W = 3 : ce === be - 1 ? W = 1 : (W = 2, T = ce);
          }
          switch (T++, W) {
            case 1: {
              let ce = S[be - 2];
              S[be - 2] = 0;
              for (let H = be - 2; H >= T; H--) {
                let st = we(R[H], ce), qe = R[H] / st, it = ce / st;
                if (R[H] = st, H !== T && (ce = -it * S[H - 1], S[H - 1] = qe * S[H - 1]), b) for (let ot = 0; ot < l; ot++) st = qe * le.get(ot, H) + it * le.get(ot, be - 1), le.set(ot, be - 1, -it * le.get(ot, H) + qe * le.get(ot, be - 1)), le.set(ot, H, st);
              }
              break;
            }
            case 2: {
              let ce = S[T - 1];
              S[T - 1] = 0;
              for (let H = T; H < be; H++) {
                let st = we(R[H], ce), qe = R[H] / st, it = ce / st;
                if (R[H] = st, ce = -it * S[H], S[H] = qe * S[H], y) for (let ot = 0; ot < n; ot++) st = qe * j.get(ot, H) + it * j.get(ot, T - 1), j.set(ot, T - 1, -it * j.get(ot, H) + qe * j.get(ot, T - 1)), j.set(ot, H, st);
              }
              break;
            }
            case 3: {
              const ce = Math.max(Math.abs(R[be - 1]), Math.abs(R[be - 2]), Math.abs(S[be - 2]), Math.abs(R[T]), Math.abs(S[T])), H = R[be - 1] / ce, st = R[be - 2] / ce, qe = S[be - 2] / ce, it = R[T] / ce, ot = S[T] / ce, bt = ((st + H) * (st - H) + qe * qe) / 2, oi = H * qe * (H * qe);
              let wt = 0;
              (bt !== 0 || oi !== 0) && (bt < 0 ? wt = 0 - Math.sqrt(bt * bt + oi) : wt = Math.sqrt(bt * bt + oi), wt = oi / (bt + wt));
              let wi = (it + H) * (it - H) + wt, Oi = it * ot;
              for (let Le = T; Le < be - 1; Le++) {
                let vt = we(wi, Oi);
                vt === 0 && (vt = Number.MIN_VALUE);
                let Wt = wi / vt, Vt = Oi / vt;
                if (Le !== T && (S[Le - 1] = vt), wi = Wt * R[Le] + Vt * S[Le], S[Le] = Wt * S[Le] - Vt * R[Le], Oi = Vt * R[Le + 1], R[Le + 1] = Wt * R[Le + 1], b) for (let yt = 0; yt < l; yt++) vt = Wt * le.get(yt, Le) + Vt * le.get(yt, Le + 1), le.set(yt, Le + 1, -Vt * le.get(yt, Le) + Wt * le.get(yt, Le + 1)), le.set(yt, Le, vt);
                if (vt = we(wi, Oi), vt === 0 && (vt = Number.MIN_VALUE), Wt = wi / vt, Vt = Oi / vt, R[Le] = vt, wi = Wt * S[Le] + Vt * R[Le + 1], R[Le + 1] = -Vt * S[Le] + Wt * R[Le + 1], Oi = Vt * S[Le + 1], S[Le + 1] = Wt * S[Le + 1], y && Le < n - 1) for (let yt = 0; yt < n; yt++) vt = Wt * j.get(yt, Le) + Vt * j.get(yt, Le + 1), j.set(yt, Le + 1, -Vt * j.get(yt, Le) + Wt * j.get(yt, Le + 1)), j.set(yt, Le, vt);
              }
              S[be - 2] = wi;
              break;
            }
            case 4: {
              if (R[T] <= 0 && (R[T] = R[T] < 0 ? -R[T] : 0, b)) for (let ce = 0; ce <= Ee; ce++) le.set(ce, T, -le.get(ce, T));
              for (; T < Ee && !(R[T] >= R[T + 1]); ) {
                let ce = R[T];
                if (R[T] = R[T + 1], R[T + 1] = ce, b && T < l - 1) for (let H = 0; H < l; H++) ce = le.get(H, T + 1), le.set(H, T + 1, le.get(H, T)), le.set(H, T, ce);
                if (y && T < n - 1) for (let H = 0; H < n; H++) ce = j.get(H, T + 1), j.set(H, T + 1, j.get(H, T)), j.set(H, T, ce);
                T++;
              }
              be--;
              break;
            }
          }
        }
        if (P) {
          let T = le;
          le = j, j = T;
        }
        this.m = n, this.n = l, this.s = R, this.U = j, this.V = le;
      }
      solve(s) {
        let o = s, n = this.threshold, l = this.s.length, u = ne.zeros(l, l);
        for (let O = 0; O < l; O++) Math.abs(this.s[O]) <= n ? u.set(O, O, 0) : u.set(O, O, 1 / this.s[O]);
        let m = this.U, w = this.rightSingularVectors, y = w.mmul(u), b = w.rows, P = m.rows, _ = ne.zeros(b, P);
        for (let O = 0; O < b; O++) for (let te = 0; te < P; te++) {
          let R = 0;
          for (let j = 0; j < l; j++) R += y.get(O, j) * m.get(te, j);
          _.set(O, te, R);
        }
        return _.mmul(o);
      }
      solveForDiagonal(s) {
        return this.solve(ne.diag(s));
      }
      inverse() {
        let s = this.V, o = this.threshold, n = s.rows, l = s.columns, u = new ne(n, this.s.length);
        for (let P = 0; P < n; P++) for (let _ = 0; _ < l; _++) Math.abs(this.s[_]) > o && u.set(P, _, s.get(P, _) / this.s[_]);
        let m = this.U, w = m.rows, y = m.columns, b = new ne(n, w);
        for (let P = 0; P < n; P++) for (let _ = 0; _ < w; _++) {
          let O = 0;
          for (let te = 0; te < y; te++) O += u.get(P, te) * m.get(_, te);
          b.set(P, _, O);
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
        let s = Math.max(this.m, this.n) * this.s[0] * Number.EPSILON, o = 0, n = this.s;
        for (let l = 0, u = n.length; l < u; l++) n[l] > s && o++;
        return o;
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
        return ne.diag(this.s);
      }
    }
    function Ie(d, s = false) {
      return d = X.checkMatrix(d), s ? new ye(d).inverse() : xe(d, ne.eye(d.rows));
    }
    function xe(d, s, o = false) {
      return d = X.checkMatrix(d), s = X.checkMatrix(s), o ? new ye(d).solve(s) : d.isSquare() ? new q(d).solve(s) : new ae(d).solve(s);
    }
    function ze(d) {
      if (d = ne.checkMatrix(d), d.isSquare()) {
        if (d.columns === 0) return 1;
        let s, o, n, l;
        if (d.columns === 2) return s = d.get(0, 0), o = d.get(0, 1), n = d.get(1, 0), l = d.get(1, 1), s * l - o * n;
        if (d.columns === 3) {
          let u, m, w;
          return u = new Z(d, [
            1,
            2
          ], [
            1,
            2
          ]), m = new Z(d, [
            1,
            2
          ], [
            0,
            2
          ]), w = new Z(d, [
            1,
            2
          ], [
            0,
            1
          ]), s = d.get(0, 0), o = d.get(0, 1), n = d.get(0, 2), s * ze(u) - o * ze(m) + n * ze(w);
        } else return new q(d).determinant;
      } else throw Error("determinant can only be calculated for a square matrix");
    }
    function Ge(d, s) {
      let o = [];
      for (let n = 0; n < d; n++) n !== s && o.push(n);
      return o;
    }
    function St(d, s, o, n = 1e-9, l = 1e-9) {
      if (d > l) return new Array(s.rows + 1).fill(0);
      {
        let u = s.addRow(o, [
          0
        ]);
        for (let m = 0; m < u.rows; m++) Math.abs(u.get(m, 0)) < n && u.set(m, 0, 0);
        return u.to1DArray();
      }
    }
    function Tt(d, s = {}) {
      const { thresholdValue: o = 1e-9, thresholdError: n = 1e-9 } = s;
      d = ne.checkMatrix(d);
      let l = d.rows, u = new ne(l, l);
      for (let m = 0; m < l; m++) {
        let w = ne.columnVector(d.getRow(m)), y = d.subMatrixRow(Ge(l, m)).transpose(), P = new ye(y).solve(w), _ = ne.sub(w, y.mmul(P)).abs().max();
        u.setRow(m, St(_, P, m, o, n));
      }
      return u;
    }
    function Xt(d, s = Number.EPSILON) {
      if (d = ne.checkMatrix(d), d.isEmpty()) return d.transpose();
      let o = new ye(d, {
        autoTranspose: true
      }), n = o.leftSingularVectors, l = o.rightSingularVectors, u = o.diagonal;
      for (let m = 0; m < u.length; m++) Math.abs(u[m]) > s ? u[m] = 1 / u[m] : u[m] = 0;
      return l.mmul(ne.diag(u).mmul(n.transpose()));
    }
    function Qt(d, s = d, o = {}) {
      d = new ne(d);
      let n = false;
      if (typeof s == "object" && !ne.isMatrix(s) && !e.isAnyArray(s) ? (o = s, s = d, n = true) : s = new ne(s), d.rows !== s.rows) throw new TypeError("Both matrices must have the same number of rows");
      const { center: l = true } = o;
      l && (d = d.center("column"), n || (s = s.center("column")));
      const u = d.transpose().mmul(s);
      for (let m = 0; m < u.rows; m++) for (let w = 0; w < u.columns; w++) u.set(m, w, u.get(m, w) * (1 / (d.rows - 1)));
      return u;
    }
    function vr(d, s = d, o = {}) {
      d = new ne(d);
      let n = false;
      if (typeof s == "object" && !ne.isMatrix(s) && !e.isAnyArray(s) ? (o = s, s = d, n = true) : s = new ne(s), d.rows !== s.rows) throw new TypeError("Both matrices must have the same number of rows");
      const { center: l = true, scale: u = true } = o;
      l && (d.center("column"), n || s.center("column")), u && (d.scale("column"), n || s.scale("column"));
      const m = d.standardDeviation("column", {
        unbiased: true
      }), w = n ? m : s.standardDeviation("column", {
        unbiased: true
      }), y = d.transpose().mmul(s);
      for (let b = 0; b < y.rows; b++) for (let P = 0; P < y.columns; P++) y.set(b, P, y.get(b, P) * (1 / (m[b] * w[P])) * (1 / (d.rows - 1)));
      return y;
    }
    class _n {
      constructor(s, o = {}) {
        const { assumeSymmetric: n = false } = o;
        if (s = X.checkMatrix(s), !s.isSquare()) throw new Error("Matrix is not a square matrix");
        if (s.isEmpty()) throw new Error("Matrix must be non-empty");
        let l = s.columns, u = new ne(l, l), m = new Float64Array(l), w = new Float64Array(l), y = s, b, P, _ = false;
        if (n ? _ = true : _ = s.isSymmetric(), _) {
          for (b = 0; b < l; b++) for (P = 0; P < l; P++) u.set(b, P, y.get(b, P));
          Ot(l, w, m, u), ei(l, w, m, u);
        } else {
          let O = new ne(l, l), te = new Float64Array(l);
          for (P = 0; P < l; P++) for (b = 0; b < l; b++) O.set(b, P, y.get(b, P));
          fs(l, O, te, u), hs(l, w, m, u, O);
        }
        this.n = l, this.e = w, this.d = m, this.V = u;
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
        let s = this.n, o = this.e, n = this.d, l = new ne(s, s), u, m;
        for (u = 0; u < s; u++) {
          for (m = 0; m < s; m++) l.set(u, m, 0);
          l.set(u, u, n[u]), o[u] > 0 ? l.set(u, u + 1, o[u]) : o[u] < 0 && l.set(u, u - 1, o[u]);
        }
        return l;
      }
    }
    function Ot(d, s, o, n) {
      let l, u, m, w, y, b, P, _;
      for (y = 0; y < d; y++) o[y] = n.get(d - 1, y);
      for (w = d - 1; w > 0; w--) {
        for (_ = 0, m = 0, b = 0; b < w; b++) _ = _ + Math.abs(o[b]);
        if (_ === 0) for (s[w] = o[w - 1], y = 0; y < w; y++) o[y] = n.get(w - 1, y), n.set(w, y, 0), n.set(y, w, 0);
        else {
          for (b = 0; b < w; b++) o[b] /= _, m += o[b] * o[b];
          for (l = o[w - 1], u = Math.sqrt(m), l > 0 && (u = -u), s[w] = _ * u, m = m - l * u, o[w - 1] = l - u, y = 0; y < w; y++) s[y] = 0;
          for (y = 0; y < w; y++) {
            for (l = o[y], n.set(y, w, l), u = s[y] + n.get(y, y) * l, b = y + 1; b <= w - 1; b++) u += n.get(b, y) * o[b], s[b] += n.get(b, y) * l;
            s[y] = u;
          }
          for (l = 0, y = 0; y < w; y++) s[y] /= m, l += s[y] * o[y];
          for (P = l / (m + m), y = 0; y < w; y++) s[y] -= P * o[y];
          for (y = 0; y < w; y++) {
            for (l = o[y], u = s[y], b = y; b <= w - 1; b++) n.set(b, y, n.get(b, y) - (l * s[b] + u * o[b]));
            o[y] = n.get(w - 1, y), n.set(w, y, 0);
          }
        }
        o[w] = m;
      }
      for (w = 0; w < d - 1; w++) {
        if (n.set(d - 1, w, n.get(w, w)), n.set(w, w, 1), m = o[w + 1], m !== 0) {
          for (b = 0; b <= w; b++) o[b] = n.get(b, w + 1) / m;
          for (y = 0; y <= w; y++) {
            for (u = 0, b = 0; b <= w; b++) u += n.get(b, w + 1) * n.get(b, y);
            for (b = 0; b <= w; b++) n.set(b, y, n.get(b, y) - u * o[b]);
          }
        }
        for (b = 0; b <= w; b++) n.set(b, w + 1, 0);
      }
      for (y = 0; y < d; y++) o[y] = n.get(d - 1, y), n.set(d - 1, y, 0);
      n.set(d - 1, d - 1, 1), s[0] = 0;
    }
    function ei(d, s, o, n) {
      let l, u, m, w, y, b, P, _, O, te, R, j, le, S, ee, de;
      for (m = 1; m < d; m++) s[m - 1] = s[m];
      s[d - 1] = 0;
      let Se = 0, Me = 0, nt = Number.EPSILON;
      for (b = 0; b < d; b++) {
        for (Me = Math.max(Me, Math.abs(o[b]) + Math.abs(s[b])), P = b; P < d && !(Math.abs(s[P]) <= nt * Me); ) P++;
        if (P > b) do {
          for (l = o[b], _ = (o[b + 1] - l) / (2 * s[b]), O = we(_, 1), _ < 0 && (O = -O), o[b] = s[b] / (_ + O), o[b + 1] = s[b] * (_ + O), te = o[b + 1], u = l - o[b], m = b + 2; m < d; m++) o[m] -= u;
          for (Se = Se + u, _ = o[P], R = 1, j = R, le = R, S = s[b + 1], ee = 0, de = 0, m = P - 1; m >= b; m--) for (le = j, j = R, de = ee, l = R * s[m], u = R * _, O = we(_, s[m]), s[m + 1] = ee * O, ee = s[m] / O, R = _ / O, _ = R * o[m] - ee * l, o[m + 1] = u + ee * (R * l + ee * o[m]), y = 0; y < d; y++) u = n.get(y, m + 1), n.set(y, m + 1, ee * n.get(y, m) + R * u), n.set(y, m, R * n.get(y, m) - ee * u);
          _ = -ee * de * le * S * s[b] / te, s[b] = ee * _, o[b] = R * _;
        } while (Math.abs(s[b]) > nt * Me);
        o[b] = o[b] + Se, s[b] = 0;
      }
      for (m = 0; m < d - 1; m++) {
        for (y = m, _ = o[m], w = m + 1; w < d; w++) o[w] < _ && (y = w, _ = o[w]);
        if (y !== m) for (o[y] = o[m], o[m] = _, w = 0; w < d; w++) _ = n.get(w, m), n.set(w, m, n.get(w, y)), n.set(w, y, _);
      }
    }
    function fs(d, s, o, n) {
      let l = 0, u = d - 1, m, w, y, b, P, _, O;
      for (_ = l + 1; _ <= u - 1; _++) {
        for (O = 0, b = _; b <= u; b++) O = O + Math.abs(s.get(b, _ - 1));
        if (O !== 0) {
          for (y = 0, b = u; b >= _; b--) o[b] = s.get(b, _ - 1) / O, y += o[b] * o[b];
          for (w = Math.sqrt(y), o[_] > 0 && (w = -w), y = y - o[_] * w, o[_] = o[_] - w, P = _; P < d; P++) {
            for (m = 0, b = u; b >= _; b--) m += o[b] * s.get(b, P);
            for (m = m / y, b = _; b <= u; b++) s.set(b, P, s.get(b, P) - m * o[b]);
          }
          for (b = 0; b <= u; b++) {
            for (m = 0, P = u; P >= _; P--) m += o[P] * s.get(b, P);
            for (m = m / y, P = _; P <= u; P++) s.set(b, P, s.get(b, P) - m * o[P]);
          }
          o[_] = O * o[_], s.set(_, _ - 1, O * w);
        }
      }
      for (b = 0; b < d; b++) for (P = 0; P < d; P++) n.set(b, P, b === P ? 1 : 0);
      for (_ = u - 1; _ >= l + 1; _--) if (s.get(_, _ - 1) !== 0) {
        for (b = _ + 1; b <= u; b++) o[b] = s.get(b, _ - 1);
        for (P = _; P <= u; P++) {
          for (w = 0, b = _; b <= u; b++) w += o[b] * n.get(b, P);
          for (w = w / o[_] / s.get(_, _ - 1), b = _; b <= u; b++) n.set(b, P, n.get(b, P) + w * o[b]);
        }
      }
    }
    function hs(d, s, o, n, l) {
      let u = d - 1, m = 0, w = d - 1, y = Number.EPSILON, b = 0, P = 0, _ = 0, O = 0, te = 0, R = 0, j = 0, le = 0, S, ee, de, Se, Me, nt, be, Ee, He, T, W, ce, H, st, qe;
      for (S = 0; S < d; S++) for ((S < m || S > w) && (o[S] = l.get(S, S), s[S] = 0), ee = Math.max(S - 1, 0); ee < d; ee++) P = P + Math.abs(l.get(S, ee));
      for (; u >= m; ) {
        for (Se = u; Se > m && (R = Math.abs(l.get(Se - 1, Se - 1)) + Math.abs(l.get(Se, Se)), R === 0 && (R = P), !(Math.abs(l.get(Se, Se - 1)) < y * R)); ) Se--;
        if (Se === u) l.set(u, u, l.get(u, u) + b), o[u] = l.get(u, u), s[u] = 0, u--, le = 0;
        else if (Se === u - 1) {
          if (be = l.get(u, u - 1) * l.get(u - 1, u), _ = (l.get(u - 1, u - 1) - l.get(u, u)) / 2, O = _ * _ + be, j = Math.sqrt(Math.abs(O)), l.set(u, u, l.get(u, u) + b), l.set(u - 1, u - 1, l.get(u - 1, u - 1) + b), Ee = l.get(u, u), O >= 0) {
            for (j = _ >= 0 ? _ + j : _ - j, o[u - 1] = Ee + j, o[u] = o[u - 1], j !== 0 && (o[u] = Ee - be / j), s[u - 1] = 0, s[u] = 0, Ee = l.get(u, u - 1), R = Math.abs(Ee) + Math.abs(j), _ = Ee / R, O = j / R, te = Math.sqrt(_ * _ + O * O), _ = _ / te, O = O / te, ee = u - 1; ee < d; ee++) j = l.get(u - 1, ee), l.set(u - 1, ee, O * j + _ * l.get(u, ee)), l.set(u, ee, O * l.get(u, ee) - _ * j);
            for (S = 0; S <= u; S++) j = l.get(S, u - 1), l.set(S, u - 1, O * j + _ * l.get(S, u)), l.set(S, u, O * l.get(S, u) - _ * j);
            for (S = m; S <= w; S++) j = n.get(S, u - 1), n.set(S, u - 1, O * j + _ * n.get(S, u)), n.set(S, u, O * n.get(S, u) - _ * j);
          } else o[u - 1] = Ee + _, o[u] = Ee + _, s[u - 1] = j, s[u] = -j;
          u = u - 2, le = 0;
        } else {
          if (Ee = l.get(u, u), He = 0, be = 0, Se < u && (He = l.get(u - 1, u - 1), be = l.get(u, u - 1) * l.get(u - 1, u)), le === 10) {
            for (b += Ee, S = m; S <= u; S++) l.set(S, S, l.get(S, S) - Ee);
            R = Math.abs(l.get(u, u - 1)) + Math.abs(l.get(u - 1, u - 2)), Ee = He = 0.75 * R, be = -0.4375 * R * R;
          }
          if (le === 30 && (R = (He - Ee) / 2, R = R * R + be, R > 0)) {
            for (R = Math.sqrt(R), He < Ee && (R = -R), R = Ee - be / ((He - Ee) / 2 + R), S = m; S <= u; S++) l.set(S, S, l.get(S, S) - R);
            b += R, Ee = He = be = 0.964;
          }
          for (le = le + 1, Me = u - 2; Me >= Se && (j = l.get(Me, Me), te = Ee - j, R = He - j, _ = (te * R - be) / l.get(Me + 1, Me) + l.get(Me, Me + 1), O = l.get(Me + 1, Me + 1) - j - te - R, te = l.get(Me + 2, Me + 1), R = Math.abs(_) + Math.abs(O) + Math.abs(te), _ = _ / R, O = O / R, te = te / R, !(Me === Se || Math.abs(l.get(Me, Me - 1)) * (Math.abs(O) + Math.abs(te)) < y * (Math.abs(_) * (Math.abs(l.get(Me - 1, Me - 1)) + Math.abs(j) + Math.abs(l.get(Me + 1, Me + 1)))))); ) Me--;
          for (S = Me + 2; S <= u; S++) l.set(S, S - 2, 0), S > Me + 2 && l.set(S, S - 3, 0);
          for (de = Me; de <= u - 1 && (st = de !== u - 1, de !== Me && (_ = l.get(de, de - 1), O = l.get(de + 1, de - 1), te = st ? l.get(de + 2, de - 1) : 0, Ee = Math.abs(_) + Math.abs(O) + Math.abs(te), Ee !== 0 && (_ = _ / Ee, O = O / Ee, te = te / Ee)), Ee !== 0); de++) if (R = Math.sqrt(_ * _ + O * O + te * te), _ < 0 && (R = -R), R !== 0) {
            for (de !== Me ? l.set(de, de - 1, -R * Ee) : Se !== Me && l.set(de, de - 1, -l.get(de, de - 1)), _ = _ + R, Ee = _ / R, He = O / R, j = te / R, O = O / _, te = te / _, ee = de; ee < d; ee++) _ = l.get(de, ee) + O * l.get(de + 1, ee), st && (_ = _ + te * l.get(de + 2, ee), l.set(de + 2, ee, l.get(de + 2, ee) - _ * j)), l.set(de, ee, l.get(de, ee) - _ * Ee), l.set(de + 1, ee, l.get(de + 1, ee) - _ * He);
            for (S = 0; S <= Math.min(u, de + 3); S++) _ = Ee * l.get(S, de) + He * l.get(S, de + 1), st && (_ = _ + j * l.get(S, de + 2), l.set(S, de + 2, l.get(S, de + 2) - _ * te)), l.set(S, de, l.get(S, de) - _), l.set(S, de + 1, l.get(S, de + 1) - _ * O);
            for (S = m; S <= w; S++) _ = Ee * n.get(S, de) + He * n.get(S, de + 1), st && (_ = _ + j * n.get(S, de + 2), n.set(S, de + 2, n.get(S, de + 2) - _ * te)), n.set(S, de, n.get(S, de) - _), n.set(S, de + 1, n.get(S, de + 1) - _ * O);
          }
        }
      }
      if (P !== 0) {
        for (u = d - 1; u >= 0; u--) if (_ = o[u], O = s[u], O === 0) for (Se = u, l.set(u, u, 1), S = u - 1; S >= 0; S--) {
          for (be = l.get(S, S) - _, te = 0, ee = Se; ee <= u; ee++) te = te + l.get(S, ee) * l.get(ee, u);
          if (s[S] < 0) j = be, R = te;
          else if (Se = S, s[S] === 0 ? l.set(S, u, be !== 0 ? -te / be : -te / (y * P)) : (Ee = l.get(S, S + 1), He = l.get(S + 1, S), O = (o[S] - _) * (o[S] - _) + s[S] * s[S], nt = (Ee * R - j * te) / O, l.set(S, u, nt), l.set(S + 1, u, Math.abs(Ee) > Math.abs(j) ? (-te - be * nt) / Ee : (-R - He * nt) / j)), nt = Math.abs(l.get(S, u)), y * nt * nt > 1) for (ee = S; ee <= u; ee++) l.set(ee, u, l.get(ee, u) / nt);
        }
        else if (O < 0) for (Se = u - 1, Math.abs(l.get(u, u - 1)) > Math.abs(l.get(u - 1, u)) ? (l.set(u - 1, u - 1, O / l.get(u, u - 1)), l.set(u - 1, u, -(l.get(u, u) - _) / l.get(u, u - 1))) : (qe = ds(0, -l.get(u - 1, u), l.get(u - 1, u - 1) - _, O), l.set(u - 1, u - 1, qe[0]), l.set(u - 1, u, qe[1])), l.set(u, u - 1, 0), l.set(u, u, 1), S = u - 2; S >= 0; S--) {
          for (T = 0, W = 0, ee = Se; ee <= u; ee++) T = T + l.get(S, ee) * l.get(ee, u - 1), W = W + l.get(S, ee) * l.get(ee, u);
          if (be = l.get(S, S) - _, s[S] < 0) j = be, te = T, R = W;
          else if (Se = S, s[S] === 0 ? (qe = ds(-T, -W, be, O), l.set(S, u - 1, qe[0]), l.set(S, u, qe[1])) : (Ee = l.get(S, S + 1), He = l.get(S + 1, S), ce = (o[S] - _) * (o[S] - _) + s[S] * s[S] - O * O, H = (o[S] - _) * 2 * O, ce === 0 && H === 0 && (ce = y * P * (Math.abs(be) + Math.abs(O) + Math.abs(Ee) + Math.abs(He) + Math.abs(j))), qe = ds(Ee * te - j * T + O * W, Ee * R - j * W - O * T, ce, H), l.set(S, u - 1, qe[0]), l.set(S, u, qe[1]), Math.abs(Ee) > Math.abs(j) + Math.abs(O) ? (l.set(S + 1, u - 1, (-T - be * l.get(S, u - 1) + O * l.get(S, u)) / Ee), l.set(S + 1, u, (-W - be * l.get(S, u) - O * l.get(S, u - 1)) / Ee)) : (qe = ds(-te - He * l.get(S, u - 1), -R - He * l.get(S, u), j, O), l.set(S + 1, u - 1, qe[0]), l.set(S + 1, u, qe[1]))), nt = Math.max(Math.abs(l.get(S, u - 1)), Math.abs(l.get(S, u))), y * nt * nt > 1) for (ee = S; ee <= u; ee++) l.set(ee, u - 1, l.get(ee, u - 1) / nt), l.set(ee, u, l.get(ee, u) / nt);
        }
        for (S = 0; S < d; S++) if (S < m || S > w) for (ee = S; ee < d; ee++) n.set(S, ee, l.get(S, ee));
        for (ee = d - 1; ee >= m; ee--) for (S = m; S <= w; S++) {
          for (j = 0, de = m; de <= Math.min(ee, w); de++) j = j + n.get(S, de) * l.get(de, ee);
          n.set(S, ee, j);
        }
      }
    }
    function ds(d, s, o, n) {
      let l, u;
      return Math.abs(o) > Math.abs(n) ? (l = n / o, u = o + l * n, [
        (d + l * s) / u,
        (s - l * d) / u
      ]) : (l = o / n, u = n + l * o, [
        (l * d + s) / u,
        (l * s - d) / u
      ]);
    }
    class El {
      constructor(s) {
        if (s = X.checkMatrix(s), !s.isSymmetric()) throw new Error("Matrix is not symmetric");
        let o = s, n = o.rows, l = new ne(n, n), u = true, m, w, y;
        for (w = 0; w < n; w++) {
          let b = 0;
          for (y = 0; y < w; y++) {
            let P = 0;
            for (m = 0; m < y; m++) P += l.get(y, m) * l.get(w, m);
            P = (o.get(w, y) - P) / l.get(y, y), l.set(w, y, P), b = b + P * P;
          }
          for (b = o.get(w, w) - b, u && (u = b > 0), l.set(w, w, Math.sqrt(Math.max(b, 0))), y = w + 1; y < n; y++) l.set(w, y, 0);
        }
        this.L = l, this.positiveDefinite = u;
      }
      isPositiveDefinite() {
        return this.positiveDefinite;
      }
      solve(s) {
        s = X.checkMatrix(s);
        let o = this.L, n = o.rows;
        if (s.rows !== n) throw new Error("Matrix dimensions do not match");
        if (this.isPositiveDefinite() === false) throw new Error("Matrix is not positive definite");
        let l = s.columns, u = s.clone(), m, w, y;
        for (y = 0; y < n; y++) for (w = 0; w < l; w++) {
          for (m = 0; m < y; m++) u.set(y, w, u.get(y, w) - u.get(m, w) * o.get(y, m));
          u.set(y, w, u.get(y, w) / o.get(y, y));
        }
        for (y = n - 1; y >= 0; y--) for (w = 0; w < l; w++) {
          for (m = y + 1; m < n; m++) u.set(y, w, u.get(y, w) - u.get(m, w) * o.get(m, y));
          u.set(y, w, u.get(y, w) / o.get(y, y));
        }
        return u;
      }
      get lowerTriangularMatrix() {
        return this.L;
      }
    }
    class Il {
      constructor(s, o = {}) {
        s = X.checkMatrix(s);
        let { Y: n } = o;
        const { scaleScores: l = false, maxIterations: u = 1e3, terminationCriteria: m = 1e-10 } = o;
        let w;
        if (n) {
          if (e.isAnyArray(n) && typeof n[0] == "number" ? n = ne.columnVector(n) : n = X.checkMatrix(n), n.rows !== s.rows) throw new Error("Y should have the same number of rows as X");
          w = n.getColumnVector(0);
        } else w = s.getColumnVector(0);
        let y = 1, b, P, _, O;
        for (let te = 0; te < u && y > m; te++) _ = s.transpose().mmul(w).div(w.transpose().mmul(w).get(0, 0)), _ = _.div(_.norm()), b = s.mmul(_).div(_.transpose().mmul(_).get(0, 0)), te > 0 && (y = b.clone().sub(O).pow(2).sum()), O = b.clone(), n ? (P = n.transpose().mmul(b).div(b.transpose().mmul(b).get(0, 0)), P = P.div(P.norm()), w = n.mmul(P).div(P.transpose().mmul(P).get(0, 0))) : w = b;
        if (n) {
          let te = s.transpose().mmul(b).div(b.transpose().mmul(b).get(0, 0));
          te = te.div(te.norm());
          let R = s.clone().sub(b.clone().mmul(te.transpose())), j = w.transpose().mmul(b).div(b.transpose().mmul(b).get(0, 0)), le = n.clone().sub(b.clone().mulS(j.get(0, 0)).mmul(P.transpose()));
          this.t = b, this.p = te.transpose(), this.w = _.transpose(), this.q = P, this.u = w, this.s = b.transpose().mmul(b), this.xResidual = R, this.yResidual = le, this.betas = j;
        } else this.w = _.transpose(), this.s = b.transpose().mmul(b).sqrt(), l ? this.t = b.clone().div(this.s.get(0, 0)) : this.t = b, this.xResidual = s.sub(b.mmul(_.transpose()));
      }
    }
    return Ae.AbstractMatrix = _e, Ae.CHO = El, Ae.CholeskyDecomposition = El, Ae.DistanceMatrix = Ci, Ae.EVD = _n, Ae.EigenvalueDecomposition = _n, Ae.LU = q, Ae.LuDecomposition = q, Ae.Matrix = ne, Ae.MatrixColumnSelectionView = br, Ae.MatrixColumnView = us, Ae.MatrixFlipColumnView = _l, Ae.MatrixFlipRowView = E, Ae.MatrixRowSelectionView = L, Ae.MatrixRowView = M, Ae.MatrixSelectionView = Z, Ae.MatrixSubView = K, Ae.MatrixTransposeView = J, Ae.NIPALS = Il, Ae.Nipals = Il, Ae.QR = ae, Ae.QrDecomposition = ae, Ae.SVD = ye, Ae.SingularValueDecomposition = ye, Ae.SymmetricMatrix = Ft, Ae.WrapperMatrix1D = oe, Ae.WrapperMatrix2D = X, Ae.correlation = vr, Ae.covariance = Qt, Ae.default = ne, Ae.determinant = ze, Ae.inverse = Ie, Ae.linearDependencies = Tt, Ae.pseudoInverse = Xt, Ae.solve = xe, Ae.wrap = ie, Ae;
  }
  var wl = ab();
  const Yc = Xy(wl), Ii = wl.Matrix;
  Yc.Matrix ? Yc.Matrix : wl.Matrix;
  const _Kn = class _Kn {
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
      this.boundHandleMotionEvent = this.handleMotionEvent.bind(this), this.boundHandleOrientationEvent = this.handleOrientationEvent.bind(this), this.matrixRz = Ii.zeros(3, 3), this.matrixRy = Ii.zeros(3, 3), this.matrixRx = Ii.zeros(3, 3), this.matrixR = Ii.zeros(3, 3), this.matrixRTemp = Ii.zeros(3, 3), this.vectorInput = Ii.zeros(3, 1), this.vectorOutput = Ii.zeros(3, 1), this.gravityENU = new Ii([
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
      if (this.initialized) return N(void 0);
      if (this.initPromise) return this.initPromise;
      this.initPromise = this.doInit(t);
      const i = await this.initPromise;
      return i.isErr() && (this.initPromise = null), i;
    }
    async doInit(t) {
      if (this.disposed) return k(new De("IMU provider has been disposed"));
      const i = await this.requestPermissionIfNeeded(t);
      return i.isErr() ? k(i.error) : await this.checkHardwareSupport() ? ("DeviceOrientationEvent" in window && window.addEventListener("deviceorientation", this.boundHandleOrientationEvent), this.initialized = true, N(void 0)) : k(new De("Device motion is not supported by this browser"));
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
            if (!await t("prompt", "permission.imu.required")) return k(new De("User declined to grant IMU permission"));
            if (await DeviceMotionEvent.requestPermission() !== "granted") return k(new De("IMU permission denied"));
          } else return i === "denied" ? k(new De("IMU permission denied")) : N(void 0);
        }
        return N(void 0);
      } catch (i) {
        return k(new De("Failed to request IMU permission", void 0, i));
      }
    }
    async checkHardwareSupport() {
      return !("DeviceOrientationEvent" in window) || !("DeviceMotionEvent" in window) ? false : new Promise((t) => {
        let i = false;
        const r = () => {
          window.removeEventListener("deviceorientation", f), window.removeEventListener("devicemotion", h);
        }, a = () => {
          i || (i = true, r(), t(true));
        }, c = () => {
          i || (i = true, r(), t(false));
        }, f = (p) => {
          (p.alpha !== null || p.beta !== null || p.gamma !== null) && a();
        }, h = (p) => {
          (p.acceleration || p.accelerationIncludingGravity || p.rotationRate) && a();
        };
        window.addEventListener("deviceorientation", f), window.addEventListener("devicemotion", h), setTimeout(c, 1e3);
      });
    }
    async startAcceleration(t = {}) {
      if (this.disposed) return k(new De("IMU provider has been disposed"));
      if (!this.initialized) {
        const i = await this.init();
        if (i.isErr()) return k(i.error);
      }
      if (this.isAccelerationActive) return N(void 0);
      this.normalizeAccelerationToENU = t.normalizeToENU ?? false, this.accelerationIntervalMs = t.frequency !== void 0 ? Math.floor(1e3 / t.frequency) : 0, this.accelerationPrevReading = null, this.accelerationAccumulatedX = 0, this.accelerationAccumulatedY = 0, this.accelerationAccumulatedZ = 0, this.accelerationAccumulatedTime = 0, this.accelerationLastEmitTime = 0, this.accelerationTimer !== null && (clearTimeout(this.accelerationTimer), this.accelerationTimer = null);
      try {
        return this.motionEventListenerCount === 0 && window.addEventListener("devicemotion", this.boundHandleMotionEvent, true), this.motionEventListenerCount++, this.isAccelerationActive = true, N(void 0);
      } catch (i) {
        return k(new De("Failed to start acceleration monitoring", void 0, i));
      }
    }
    async startGyroscope(t = {}) {
      if (this.disposed) return k(new De("IMU provider has been disposed"));
      if (!this.initialized) {
        const i = await this.init();
        if (i.isErr()) return k(i.error);
      }
      if (this.isGyroscopeActive) return N(void 0);
      this.normalizeGyroscopeToENU = t.normalizeToENU ?? false, this.gyroscopeIntervalMs = t.frequency !== void 0 ? Math.floor(1e3 / t.frequency) : 0, this.gyroscopePrevReading = null, this.gyroscopeAccumulatedX = 0, this.gyroscopeAccumulatedY = 0, this.gyroscopeAccumulatedZ = 0, this.gyroscopeAccumulatedTime = 0, this.gyroscopeLastEmitTime = 0, this.gyroscopeTimer !== null && (clearTimeout(this.gyroscopeTimer), this.gyroscopeTimer = null);
      try {
        return this.motionEventListenerCount === 0 && window.addEventListener("devicemotion", this.boundHandleMotionEvent, true), this.motionEventListenerCount++, this.isGyroscopeActive = true, N(void 0);
      } catch (i) {
        return k(new De("Failed to start gyroscope monitoring", void 0, i));
      }
    }
    stopAcceleration() {
      if (!this.isAccelerationActive) return N(void 0);
      try {
        return this.motionEventListenerCount--, this.isAccelerationActive = false, this.lastAccelerationReading = null, this.normalizeAccelerationToENU = false, this.accelerationIntervalMs = 0, this.accelerationPrevReading = null, this.accelerationAccumulatedX = 0, this.accelerationAccumulatedY = 0, this.accelerationAccumulatedZ = 0, this.accelerationAccumulatedTime = 0, this.accelerationLastEmitTime = 0, this.accelerationTimer !== null && (clearTimeout(this.accelerationTimer), this.accelerationTimer = null), this.motionEventListenerCount === 0 && window.removeEventListener("devicemotion", this.boundHandleMotionEvent, true), N(void 0);
      } catch (t) {
        return k(new De("Failed to stop acceleration monitoring", void 0, t));
      }
    }
    stopGyroscope() {
      if (!this.isGyroscopeActive) return N(void 0);
      try {
        return this.motionEventListenerCount--, this.isGyroscopeActive = false, this.lastGyroscopeReading = null, this.normalizeGyroscopeToENU = false, this.gyroscopeIntervalMs = 0, this.gyroscopePrevReading = null, this.gyroscopeAccumulatedX = 0, this.gyroscopeAccumulatedY = 0, this.gyroscopeAccumulatedZ = 0, this.gyroscopeAccumulatedTime = 0, this.gyroscopeLastEmitTime = 0, this.gyroscopeTimer !== null && (clearTimeout(this.gyroscopeTimer), this.gyroscopeTimer = null), this.motionEventListenerCount === 0 && window.removeEventListener("devicemotion", this.boundHandleMotionEvent, true), N(void 0);
      } catch (t) {
        return k(new De("Failed to stop gyroscope monitoring", void 0, t));
      }
    }
    async getAccelerationReading() {
      if (this.disposed) return k(new De("IMU provider has been disposed"));
      if (!this.initialized) {
        const t = await this.init();
        if (t.isErr()) return k(t.error);
      }
      return N(this.lastAccelerationReading);
    }
    async getGyroscopeReading() {
      if (this.disposed) return k(new De("IMU provider has been disposed"));
      if (!this.initialized) {
        const t = await this.init();
        if (t.isErr()) return k(t.error);
      }
      return N(this.lastGyroscopeReading);
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
      return this.accelerationListeners.delete(t), this.gyroscopeListeners.delete(t), N(void 0);
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
      if (this.accelerationIntervalMs <= 0) {
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
        const i = this.accelerationAccumulatedX / this.accelerationAccumulatedTime, r = this.accelerationAccumulatedY / this.accelerationAccumulatedTime, a = this.accelerationAccumulatedZ / this.accelerationAccumulatedTime;
        t = {
          x: i,
          y: r,
          z: a,
          timestamp: this.accelerationPrevReading.timestamp
        };
      }
      this.lastAccelerationReading = t, this.notifyListeners(this.accelerationListeners, t, "acceleration"), this.accelerationPrevReading = null, this.accelerationAccumulatedX = 0, this.accelerationAccumulatedY = 0, this.accelerationAccumulatedZ = 0, this.accelerationAccumulatedTime = 0, this.accelerationTimer !== null && (clearTimeout(this.accelerationTimer), this.accelerationTimer = null);
    }
    addGyroscopeReading(t) {
      if (this.gyroscopeIntervalMs <= 0) {
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
        const i = this.gyroscopeAccumulatedX / this.gyroscopeAccumulatedTime, r = this.gyroscopeAccumulatedY / this.gyroscopeAccumulatedTime, a = this.gyroscopeAccumulatedZ / this.gyroscopeAccumulatedTime;
        t = {
          x: i,
          y: r,
          z: a,
          timestamp: this.gyroscopePrevReading.timestamp
        };
      }
      this.lastGyroscopeReading = t, this.notifyListeners(this.gyroscopeListeners, t, "gyroscope"), this.gyroscopePrevReading = null, this.gyroscopeAccumulatedX = 0, this.gyroscopeAccumulatedY = 0, this.gyroscopeAccumulatedZ = 0, this.gyroscopeAccumulatedTime = 0, this.gyroscopeTimer !== null && (clearTimeout(this.gyroscopeTimer), this.gyroscopeTimer = null);
    }
    processAccelerationData(t, i) {
      let r = t.acceleration, a = false;
      if ((!r || r.x === null || r.y === null || r.z === null) && (r = t.accelerationIncludingGravity, a = true), !r || r.x === null || r.y === null || r.z === null) return;
      let c = r.x, f = r.y, h = r.z;
      if (a && this.deviceOrientation) {
        const v = this.computeGravityInDeviceFrame(this.deviceOrientation);
        c -= v.x, f -= v.y, h -= v.z;
      }
      let p;
      this.normalizeAccelerationToENU && this.deviceOrientation ? p = this.transformToENU(c, f, h, i, this.deviceOrientation) : p = {
        x: c,
        y: f,
        z: h,
        timestamp: i
      }, this.addAccelerationReading(p);
    }
    processGyroscopeData(t, i) {
      const r = t.rotationRate;
      if (!r || r.alpha === null || r.beta === null || r.gamma === null) return;
      const a = r.beta, c = r.gamma, f = r.alpha;
      let h;
      this.normalizeGyroscopeToENU && this.deviceOrientation ? h = this.transformToENU(a, c, f, i, this.deviceOrientation) : h = {
        x: a,
        y: c,
        z: f,
        timestamp: i
      }, this.addGyroscopeReading(h);
    }
    notifyListeners(t, i, r) {
      for (const a of t.values()) try {
        a(i);
      } catch (c) {
        console.error(`Error in ${r} callback:`, c);
      }
    }
    updateRotationMatrices(t) {
      const i = -t.alpha * _Kn.DEG_TO_RAD, r = -t.beta * _Kn.DEG_TO_RAD, a = -t.gamma * _Kn.DEG_TO_RAD, c = Math.cos(i), f = Math.sin(i), h = Math.cos(r), p = Math.sin(r), v = Math.cos(a), g = Math.sin(a);
      this.matrixRz.set(0, 0, c), this.matrixRz.set(0, 1, -f), this.matrixRz.set(0, 2, 0), this.matrixRz.set(1, 0, f), this.matrixRz.set(1, 1, c), this.matrixRz.set(1, 2, 0), this.matrixRz.set(2, 0, 0), this.matrixRz.set(2, 1, 0), this.matrixRz.set(2, 2, 1), this.matrixRy.set(0, 0, v), this.matrixRy.set(0, 1, 0), this.matrixRy.set(0, 2, g), this.matrixRy.set(1, 0, 0), this.matrixRy.set(1, 1, 1), this.matrixRy.set(1, 2, 0), this.matrixRy.set(2, 0, -g), this.matrixRy.set(2, 1, 0), this.matrixRy.set(2, 2, v), this.matrixRx.set(0, 0, 1), this.matrixRx.set(0, 1, 0), this.matrixRx.set(0, 2, 0), this.matrixRx.set(1, 0, 0), this.matrixRx.set(1, 1, h), this.matrixRx.set(1, 2, -p), this.matrixRx.set(2, 0, 0), this.matrixRx.set(2, 1, p), this.matrixRx.set(2, 2, h), this.multiplyMatricesInPlace(this.matrixRx, this.matrixRy, this.matrixRTemp), this.multiplyMatricesInPlace(this.matrixRTemp, this.matrixRz, this.matrixR);
    }
    multiplyMatricesInPlace(t, i, r) {
      for (let a = 0; a < 3; a++) for (let c = 0; c < 3; c++) {
        let f = 0;
        for (let h = 0; h < 3; h++) f += t.get(a, h) * i.get(h, c);
        r.set(a, c, f);
      }
    }
    multiplyMatrixVectorInPlace(t, i, r) {
      for (let a = 0; a < 3; a++) {
        let c = 0;
        for (let f = 0; f < 3; f++) c += t.get(a, f) * i.get(f, 0);
        r.set(a, 0, c);
      }
    }
    transformToENU(t, i, r, a, c) {
      return this.updateRotationMatrices(c), this.vectorInput.set(0, 0, t), this.vectorInput.set(1, 0, i), this.vectorInput.set(2, 0, r), this.multiplyMatrixVectorInPlace(this.matrixR, this.vectorInput, this.vectorOutput), {
        x: this.vectorOutput.get(0, 0),
        y: this.vectorOutput.get(1, 0),
        z: this.vectorOutput.get(2, 0),
        timestamp: a
      };
    }
    computeGravityInDeviceFrame(t) {
      this.updateRotationMatrices(t);
      let i = 0, r = 0, a = 0;
      for (let c = 0; c < 3; c++) {
        const f = this.gravityENU.get(c, 0);
        i += this.matrixR.get(c, 0) * f, r += this.matrixR.get(c, 1) * f, a += this.matrixR.get(c, 2) * f;
      }
      return {
        x: i,
        y: r,
        z: a
      };
    }
  };
  __publicField(_Kn, "GRAVITY", 9.81);
  __publicField(_Kn, "DEG_TO_RAD", Math.PI / 180);
  let Kn = _Kn;
  const _cr = class _cr {
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
      const i = ml.getPlatformContext(), r = new _cr(i), a = await r.initializeProviders(t);
      return a.isErr() ? k(a.error) : (_cr.instance = r, N(r));
    }
    static getInstance() {
      return _cr.instance ? N(_cr.instance) : k(new kr("Platform services not initialized", nr.NOT_INITIALIZED));
    }
    async initializeProviders(t) {
      try {
        this.storageProvider = this.createStorageProvider(t == null ? void 0 : t.storage);
        const i = await Promise.all([
          this.createIMUProvider(t == null ? void 0 : t.imu),
          this.createDeviceOrientationProvider(t == null ? void 0 : t.deviceOrientation)
        ]);
        return this.imuProvider = i[0], this.deviceOrientationProvider = i[1], this.geolocationProvider = await this.createGeolocationProvider(t == null ? void 0 : t.geolocation), this.fileProvider = this.createFileProvider(), this.initialized = true, N(void 0);
      } catch (i) {
        return k(new kr("Failed to initialize platform providers", nr.DETECTION_FAILED, i));
      }
    }
    createStorageProvider(t) {
      switch (this.context.environment) {
        case ft.TAURI:
          return new Fy((t == null ? void 0 : t.tauriStorePath) || "user-data.json");
        case ft.WEB:
        case ft.MOBILE_WEB:
        case ft.UNKNOWN:
        default:
          return new Ky((t == null ? void 0 : t.webDbName) || "trackmaker-db", (t == null ? void 0 : t.webStoreName) || "user-data");
      }
    }
    async createGeolocationProvider(t) {
      let i;
      switch (this.context.environment) {
        case ft.TAURI:
          i = new Jy((t == null ? void 0 : t.tauriHandlerName) || "get_geolocation");
          break;
        case ft.WEB:
        case ft.MOBILE_WEB:
        case ft.UNKNOWN:
        default:
          i = new Hy();
          break;
      }
      const r = await i.init(t == null ? void 0 : t.permissionCallback);
      return r.isErr() ? (console.error("Failed to initialize geolocation provider", r.error), null) : i;
    }
    createFileProvider() {
      return {
        init: async () => k(new De("File provider not implemented")),
        readFile: async () => k(new De("File provider not implemented")),
        writeFile: async () => k(new De("File provider not implemented")),
        deleteFile: async () => k(new De("File provider not implemented")),
        listFiles: async () => k(new De("File provider not implemented")),
        exists: async () => k(new De("File provider not implemented")),
        isSupported: () => false
      };
    }
    async createIMUProvider(t) {
      const i = new Kn(), r = await i.init(t == null ? void 0 : t.permissionCallback);
      return r.isErr() ? (console.error("Failed to initialize IMU provider", r.error), null) : i;
    }
    async createDeviceOrientationProvider(t) {
      const i = new Yy(), r = await i.init(t == null ? void 0 : t.permissionCallback);
      return r.isErr() ? (console.error("Failed to initialize device orientation provider", r.error), null) : i;
    }
    getContext() {
      return this.context;
    }
    getStorage() {
      return this.storageProvider ? N(this.storageProvider) : k(new kr("Storage provider not initialized", nr.DETECTION_FAILED));
    }
    getGeolocation() {
      return this.geolocationProvider ? N(this.geolocationProvider) : k(new kr("Geolocation provider not initialized", nr.DETECTION_FAILED));
    }
    getFile() {
      return this.fileProvider ? N(this.fileProvider) : k(new kr("File provider not initialized", nr.DETECTION_FAILED));
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
      _cr.instance = null;
    }
    getGeolocationProvider() {
      return this.geolocationProvider;
    }
    getIMU() {
      return this.imuProvider ? N(this.imuProvider) : k(new kr("IMU provider not initialized", nr.DETECTION_FAILED));
    }
    getDeviceOrientation() {
      return this.deviceOrientationProvider ? N(this.deviceOrientationProvider) : k(new kr("Device orientation provider not initialized", nr.DETECTION_FAILED));
    }
  };
  __publicField(_cr, "instance", null);
  let cr = _cr;
  Lo = function() {
    return cr.getInstance();
  };
  lb = function() {
    return typeof navigator > "u" ? false : ml.detectEnvironment() === ft.TAURI;
  };
  class di {
    constructor(t, i, r = 0) {
      __publicField(this, "latitude");
      __publicField(this, "longitude");
      __publicField(this, "accuracy");
      this.latitude = t, this.longitude = i, this.accuracy = r;
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
  class cb {
    constructor(t) {
      __publicField(this, "strategies", []);
      __publicField(this, "activeStrategy", null);
      __publicField(this, "watcherCount", 0);
      __publicField(this, "isInitialized", false);
      this.strategies = t;
    }
    async initialise() {
      if (this.isInitialized) return N(void 0);
      for (const t of this.strategies) try {
        if (await t.isAvailable()) {
          if (this.activeStrategy = t, (await this.activeStrategy.initialize()).isErr()) {
            console.info(`[BackendManager] Backend ${t.name} not initialised`);
            continue;
          }
          return this.isInitialized = true, console.info(`[BackendManager] Initialised with ${t.name} backend`), N(void 0);
        } else console.info(`[BackendManager] Fail to initialise with ${t.name} backend, trying fallbacks`);
      } catch (i) {
        console.warn(`[BackendManager] Failed to test ${t.name} backend:`, i);
        continue;
      }
      return k(new Oe("No backend available", "BACKEND_NOT_AVAILABLE"));
    }
    async startWatching(t) {
      if (!this.isInitialized) return k(new Oe("Backend not initialized", "BACKEND_NOT_INITIALIZED"));
      if (!this.activeStrategy) return k(new Oe("No backend available", "BACKEND_NOT_AVAILABLE"));
      if (this.watcherCount === 0) {
        const i = await this.activeStrategy.startWatching(t);
        if (i.isErr()) return console.warn(`[BackendManager] Failed to start ${this.activeStrategy.name} backend:`, i.error), k(i.error);
      }
      return this.watcherCount++, console.info(`[BackendManager] Started watching with ${this.activeStrategy.name} backend (count: ${this.watcherCount})`), N(this.activeStrategy.name);
    }
    async stopWatching() {
      var _a3;
      if (this.watcherCount === 0 || !this.activeStrategy) return N(void 0);
      if (this.watcherCount--, this.watcherCount === 0) {
        const t = await this.activeStrategy.stopWatching();
        if (t.isErr()) return k(new Oe(`Failed to stop ${((_a3 = this.activeStrategy) == null ? void 0 : _a3.name) || "unknown"} backend`, "UPDATE_SERVICE_ERROR", t.error));
        console.info("[BackendManager] Stopped watching location");
      } else console.info(`[BackendManager] Decremented watcher count (count: ${this.watcherCount})`);
      return N(void 0);
    }
    async getCurrentPosition() {
      if (!this.isInitialized) return k(new Oe("Backend not initialized", "BACKEND_NOT_INITIALIZED"));
      if (!this.activeStrategy) return k(new Oe("No backend available for current position", "BACKEND_NOT_AVAILABLE"));
      const t = await this.activeStrategy.getCurrentPosition();
      return t.isErr() ? (console.warn(`[BackendManager] Failed to get location from ${this.activeStrategy.name}:`, t.error), k(t.error)) : t;
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
    emit(t, i) {
      for (const r of this.callbacks) try {
        r(t, i);
      } catch (a) {
        console.error("[LocationEventEmitter] Callback error:", a);
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
      this.eventEmitter = new ub();
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
  class hb {
    constructor() {
      __publicField(this, "name", "gps");
      __publicField(this, "provider", null);
      __publicField(this, "watchId", null);
      __publicField(this, "isInitialized", false);
    }
    async initialize() {
      if (this.isInitialized) return N(void 0);
      try {
        const t = Lo();
        if (t.isErr()) return k(new Oe("Platform services not available", "BACKEND_NOT_AVAILABLE", t.error));
        const i = t.value.getGeolocationProvider();
        return i ? (this.provider = i, this.isInitialized = true, N(void 0)) : k(new Oe("Geolocation provider not available", "BACKEND_NOT_AVAILABLE"));
      } catch (t) {
        return k(new Oe("Exception during GPS backend initialization", "UPDATE_SERVICE_ERROR", t));
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
      if (!this.provider) return k(new Oe("GPS backend not initialized", "BACKEND_NOT_AVAILABLE"));
      const i = await this.provider.watchPosition((r) => {
        const a = new di(r.coords.latitude, r.coords.longitude, r.coords.accuracy);
        t(a, "gps");
      });
      return i.isErr() ? k(new Oe("Failed to start watching position", "UPDATE_SERVICE_ERROR", i.error)) : (this.watchId = i.value, N(void 0));
    }
    async stopWatching() {
      if (this.watchId !== null && this.provider) {
        const t = this.provider.clearWatch(this.watchId);
        if (t.isErr()) return k(new Oe("Failed to stop watching position", "UPDATE_SERVICE_ERROR", t.error));
        this.watchId = null;
      }
      return N(void 0);
    }
    async getCurrentPosition() {
      if (!this.provider) return k(new Oe("GPS backend not initialized", "BACKEND_NOT_AVAILABLE"));
      const t = await this.provider.getCurrentPosition();
      if (t.isErr()) return k(new Oe("Failed to get current position", "UPDATE_SERVICE_ERROR", t.error));
      const i = t.value;
      return N(new di(i.coords.latitude, i.coords.longitude, i.coords.accuracy));
    }
  }
  const Xc = "https://ipapi.co/json/";
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
      return N();
    }
    async isAvailable() {
      try {
        return (await fetch(Xc, {
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
      }, 3e4), this.updateLocation()), N(void 0);
    }
    async stopWatching() {
      try {
        return this.watchCallbacks.clear(), this.activeWatcherCount = 0, this.watchInterval !== null && (clearInterval(this.watchInterval), this.watchInterval = null), this.lastLocation = null, N(void 0);
      } catch (t) {
        return k(new Oe("Failed to stop IP location watching", "UPDATE_SERVICE_ERROR", t));
      }
    }
    async getCurrentPosition() {
      try {
        console.info("[IPFallbackBackend] Getting location from IP service");
        const t = await fetch(Xc, {
          signal: AbortSignal.timeout(1e4)
        });
        if (!t.ok) throw new Error(`HTTP error! Status: ${t.status}`);
        const i = await t.json(), r = new di(i.latitude, i.longitude, 5e4);
        return console.info("[IPFallbackBackend] Successfully retrieved location from IP service"), N(r);
      } catch (t) {
        return k(new Oe("Failed to get location from IP service", "POSITION_UNAVAILABLE", t));
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
          for (const r of this.watchCallbacks.values()) try {
            r(i, "ip");
          } catch (a) {
            console.error("[IPFallbackBackend] Callback error:", a);
          }
        }
      } catch (t) {
        console.error("[IPFallbackBackend] Error updating location:", t);
      }
    }
  }
  class pb {
    constructor(t = 100) {
      __publicField(this, "imuProvider", null);
      __publicField(this, "isListening", false);
      __publicField(this, "imuCallbacks", []);
      __publicField(this, "imuUpdateInterval", null);
      this.imuUpdateIntervalMs = t;
    }
    async initialize() {
      try {
        const t = Lo();
        if (t.isErr()) return k(new Oe("Platform services not available for IMU", "BACKEND_NOT_AVAILABLE", t.error));
        const i = t.value.getIMU();
        return i.isErr() ? k(new Oe("IMU provider not available", "BACKEND_NOT_AVAILABLE", i.error)) : (this.imuProvider = i.value, N(void 0));
      } catch (t) {
        return k(new Oe("Exception during IMU initialization", "UPDATE_SERVICE_ERROR", t));
      }
    }
    async isAvailable() {
      return !this.imuProvider && (await this.initialize()).isErr() ? false : !!this.imuProvider;
    }
    async startListening(t) {
      if (!this.imuProvider) return k(new Oe("IMU not initialized", "BACKEND_NOT_AVAILABLE"));
      if (this.isListening) return this.imuCallbacks.push(t), N(void 0);
      try {
        return this.imuCallbacks.push(t), this.isListening = true, this.startIMUPolling(), console.info("[IMUFusionManager] Started IMU sensor fusion"), N(void 0);
      } catch (i) {
        return k(new Oe("Failed to start IMU listening", "UPDATE_SERVICE_ERROR", i));
      }
    }
    async stopListening() {
      if (!this.isListening || !this.imuProvider) return N(void 0);
      try {
        return this.imuUpdateInterval && (clearInterval(this.imuUpdateInterval), this.imuUpdateInterval = null), this.imuCallbacks = [], this.isListening = false, console.info("[IMUFusionManager] Stopped IMU sensor fusion"), N(void 0);
      } catch (t) {
        return k(new Oe("Failed to stop IMU listening", "UPDATE_SERVICE_ERROR", t));
      }
    }
    startIMUPolling() {
      this.imuProvider && (this.imuUpdateInterval = setInterval(async () => {
        try {
          const t = await this.getCombinedIMUReading();
          if (t) for (const i of this.imuCallbacks) try {
            i(t);
          } catch (r) {
            console.error("[IMUFusionManager] IMU callback error:", r);
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
        ]), r = {
          timestamp: performance.now()
        };
        return t.isOk() && t.value && (r.acceleration = {
          x: t.value.x,
          y: t.value.y,
          z: t.value.z
        }), i.isOk() && i.value && (r.gyroscope = {
          x: i.value.x,
          y: i.value.y,
          z: i.value.z
        }), r;
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
    async initialize(t, i) {
      if (!this.worker) {
        console.log("[KalmanWorkerClient] Creating worker...");
        try {
          this.workerModulePromise || (this.workerModulePromise = qn(() => import("./worker-CY9e0CVQ.js"), [], import.meta.url));
          const c = await this.workerModulePromise;
          console.log("[KalmanWorkerClient] Worker module loaded"), this.worker = new c.default(), console.log("[KalmanWorkerClient] Worker instance created"), this.worker.onmessage = this.handleWorkerMessage.bind(this), this.worker.onerror = this.handleWorkerError.bind(this);
        } catch (c) {
          throw console.error("[KalmanWorkerClient] Failed to create worker:", c), new Error(`Failed to create Kalman worker: ${c instanceof Error ? c.message : String(c)}`);
        }
      }
      const r = {
        type: "INITIALIZE",
        id: this.nextId++,
        config: t,
        initialReading: i
      }, a = await this.sendMessage(r);
      if (!a.success) throw new Error(a.error || "Failed to initialize worker");
      this.isInitialized = true;
    }
    async processGPS(t) {
      if (!this.isInitialized || !this.worker) throw new Error("Worker not initialized");
      const i = {
        type: "PROCESS_GPS",
        id: this.nextId++,
        reading: t
      }, r = await this.sendMessage(i);
      if (!r.success) throw new Error(r.error || "Failed to process GPS reading");
    }
    async processIMU(t) {
      if (!this.isInitialized || !this.worker) throw new Error("Worker not initialized");
      const i = {
        type: "PROCESS_IMU",
        id: this.nextId++,
        reading: t
      }, r = await this.sendMessage(i);
      if (!r.success) throw new Error(r.error || "Failed to process IMU reading");
    }
    async getFilteredPosition() {
      if (!this.isInitialized || !this.worker) throw new Error("Worker not initialized");
      const t = {
        type: "GET_FILTERED_POSITION",
        id: this.nextId++
      }, i = await this.sendMessage(t);
      if (!i.success) throw new Error(i.error || "Failed to get filtered position");
      return i.data.position;
    }
    async getState() {
      if (!this.isInitialized || !this.worker) throw new Error("Worker not initialized");
      const t = {
        type: "GET_STATE",
        id: this.nextId++
      }, i = await this.sendMessage(t);
      if (!i.success) throw new Error(i.error || "Failed to get state");
      return i.data.state;
    }
    async getLastKalmanGain() {
      if (!this.isInitialized || !this.worker) throw new Error("Worker not initialized");
      const t = {
        type: "GET_KALMAN_GAIN",
        id: this.nextId++
      }, i = await this.sendMessage(t);
      if (!i.success) throw new Error(i.error || "Failed to get Kalman gain");
      return i.data.gain;
    }
    async reset() {
      const t = {
        type: "RESET",
        id: this.nextId++
      }, i = await this.sendMessage(t);
      if (!i.success) throw new Error(i.error || "Failed to reset worker");
      this.isInitialized = false;
    }
    dispose() {
      this.worker && (this.worker.terminate(), this.worker = null), this.workerModulePromise = null, this.pendingRequests.clear(), this.isInitialized = false;
    }
    isReady() {
      return this.isInitialized && this.worker !== null;
    }
    sendMessage(t) {
      return new Promise((i, r) => {
        if (!this.worker) {
          r(new Error("Worker not available"));
          return;
        }
        this.pendingRequests.set(t.id, {
          resolve: i,
          reject: r
        }), this.worker.postMessage(t);
      });
    }
    handleWorkerMessage(t) {
      const i = t.data;
      if (i.type === "RESULT") {
        const r = this.pendingRequests.get(i.originalId);
        r && (this.pendingRequests.delete(i.originalId), r.resolve({
          success: true,
          data: i.data
        }));
      } else if (i.type === "ERROR") if (i.originalId !== void 0) {
        const r = this.pendingRequests.get(i.originalId);
        r && (this.pendingRequests.delete(i.originalId), console.error("[KalmanWorkerClient] Worker error for request", i.originalId, ":", i.error), r.resolve({
          success: false,
          error: i.error
        }));
      } else console.error("[KalmanWorkerClient] Worker error without originalId:", i.error);
    }
    handleWorkerError(t) {
      console.error("[KalmanWorkerClient] Worker error:", t);
      for (const [, i] of this.pendingRequests) i.reject(new Error(`Worker error: ${t.message}`));
      this.pendingRequests.clear(), this.isInitialized = false, this.worker = null;
    }
  }
  let Ce;
  const wh = typeof TextDecoder < "u" ? new TextDecoder("utf-8", {
    ignoreBOM: true,
    fatal: true
  }) : {
    decode: () => {
      throw Error("TextDecoder not available");
    }
  };
  typeof TextDecoder < "u" && wh.decode();
  let Ln = null;
  function js() {
    return (Ln === null || Ln.byteLength === 0) && (Ln = new Uint8Array(Ce.memory.buffer)), Ln;
  }
  function xr(e, t) {
    return e = e >>> 0, wh.decode(js().subarray(e, e + t));
  }
  let ro = 0;
  const Fs = typeof TextEncoder < "u" ? new TextEncoder("utf-8") : {
    encode: () => {
      throw Error("TextEncoder not available");
    }
  }, mb = typeof Fs.encodeInto == "function" ? function(e, t) {
    return Fs.encodeInto(e, t);
  } : function(e, t) {
    const i = Fs.encode(e);
    return t.set(i), {
      read: e.length,
      written: i.length
    };
  };
  function yh(e, t, i) {
    if (i === void 0) {
      const h = Fs.encode(e), p = t(h.length, 1) >>> 0;
      return js().subarray(p, p + h.length).set(h), ro = h.length, p;
    }
    let r = e.length, a = t(r, 1) >>> 0;
    const c = js();
    let f = 0;
    for (; f < r; f++) {
      const h = e.charCodeAt(f);
      if (h > 127) break;
      c[a + f] = h;
    }
    if (f !== r) {
      f !== 0 && (e = e.slice(f)), a = i(a, r, r = f + e.length * 3, 1) >>> 0;
      const h = js().subarray(a + f, a + r), p = mb(e, h);
      f += p.written, a = i(a, r, f, 1) >>> 0;
    }
    return ro = f, a;
  }
  function wb(e) {
    return e == null;
  }
  let Rr = null;
  function Qc() {
    return (Rr === null || Rr.buffer.detached === true || Rr.buffer.detached === void 0 && Rr.buffer !== Ce.memory.buffer) && (Rr = new DataView(Ce.memory.buffer)), Rr;
  }
  function bh(e) {
    const t = Ce.__wbindgen_export_0.get(e);
    return Ce.__externref_table_dealloc(e), t;
  }
  function la(e, t) {
    if (!(e instanceof t)) throw new Error(`expected instance of ${t.name}`);
  }
  function za(e, t, i) {
    la(e, dn), la(t, dn), la(i, yl);
    const r = Ce.transform(e.__wbg_ptr, t.__wbg_ptr, i.__wbg_ptr);
    if (r[1]) throw bh(r[0]);
  }
  const eu = typeof FinalizationRegistry > "u" ? {
    register: () => {
    },
    unregister: () => {
    }
  } : new FinalizationRegistry((e) => Ce.__wbg_point_free(e >>> 0, 1));
  class yl {
    __destroy_into_raw() {
      const t = this.__wbg_ptr;
      return this.__wbg_ptr = 0, eu.unregister(this), t;
    }
    free() {
      const t = this.__destroy_into_raw();
      Ce.__wbg_point_free(t, 0);
    }
    get x() {
      return Ce.__wbg_get_point_x(this.__wbg_ptr);
    }
    set x(t) {
      Ce.__wbg_set_point_x(this.__wbg_ptr, t);
    }
    get y() {
      return Ce.__wbg_get_point_y(this.__wbg_ptr);
    }
    set y(t) {
      Ce.__wbg_set_point_y(this.__wbg_ptr, t);
    }
    get z() {
      return Ce.__wbg_get_point_z(this.__wbg_ptr);
    }
    set z(t) {
      Ce.__wbg_set_point_z(this.__wbg_ptr, t);
    }
    constructor(t, i, r) {
      const a = Ce.point_new(t, i, r);
      return this.__wbg_ptr = a >>> 0, eu.register(this, this.__wbg_ptr, this), this;
    }
  }
  const tu = typeof FinalizationRegistry > "u" ? {
    register: () => {
    },
    unregister: () => {
    }
  } : new FinalizationRegistry((e) => Ce.__wbg_projection_free(e >>> 0, 1));
  class dn {
    __destroy_into_raw() {
      const t = this.__wbg_ptr;
      return this.__wbg_ptr = 0, tu.unregister(this), t;
    }
    free() {
      const t = this.__destroy_into_raw();
      Ce.__wbg_projection_free(t, 0);
    }
    constructor(t) {
      const i = yh(t, Ce.__wbindgen_malloc, Ce.__wbindgen_realloc), r = ro, a = Ce.projection_new(i, r);
      if (a[2]) throw bh(a[1]);
      return this.__wbg_ptr = a[0] >>> 0, tu.register(this, this.__wbg_ptr, this), this;
    }
    get projName() {
      let t, i;
      try {
        const r = Ce.projection_projName(this.__wbg_ptr);
        return t = r[0], i = r[1], xr(r[0], r[1]);
      } finally {
        Ce.__wbindgen_free(t, i, 1);
      }
    }
    get isLatlon() {
      return Ce.projection_isLatlon(this.__wbg_ptr) !== 0;
    }
    get isGeocentric() {
      return Ce.projection_isGeocentric(this.__wbg_ptr) !== 0;
    }
    get axis() {
      let t, i;
      try {
        const r = Ce.projection_axis(this.__wbg_ptr);
        return t = r[0], i = r[1], xr(r[0], r[1]);
      } finally {
        Ce.__wbindgen_free(t, i, 1);
      }
    }
    get isNormalizedAxis() {
      return Ce.projection_isNormalizedAxis(this.__wbg_ptr) !== 0;
    }
    get to_meter() {
      return Ce.projection_to_meter(this.__wbg_ptr);
    }
    get units() {
      let t, i;
      try {
        const r = Ce.projection_units(this.__wbg_ptr);
        return t = r[0], i = r[1], xr(r[0], r[1]);
      } finally {
        Ce.__wbindgen_free(t, i, 1);
      }
    }
  }
  async function yb(e, t) {
    if (typeof Response == "function" && e instanceof Response) {
      if (typeof WebAssembly.instantiateStreaming == "function") try {
        return await WebAssembly.instantiateStreaming(e, t);
      } catch (r) {
        if (e.headers.get("Content-Type") != "application/wasm") console.warn("`WebAssembly.instantiateStreaming` failed because your server does not serve Wasm with `application/wasm` MIME type. Falling back to `WebAssembly.instantiate` which is slower. Original error:\n", r);
        else throw r;
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
  function bb() {
    const e = {};
    return e.wbg = {}, e.wbg.__wbg_buffer_e6c6daaa78528d53 = function(t) {
      return t.buffer;
    }, e.wbg.__wbg_getFloat32_e0872364daa466bb = function(t, i, r) {
      return t.getFloat32(i >>> 0, r !== 0);
    }, e.wbg.__wbg_getFloat64_3c55a5d18420aa12 = function(t, i, r) {
      return t.getFloat64(i >>> 0, r !== 0);
    }, e.wbg.__wbg_getInt32_6ea30555a7e6366d = function(t, i, r) {
      return t.getInt32(i >>> 0, r !== 0);
    }, e.wbg.__wbg_getUint32_78580012d2915dec = function(t, i, r) {
      return t.getUint32(i >>> 0, r !== 0);
    }, e.wbg.__wbg_parseFloat_40655e71a57d91e0 = function(t, i) {
      return parseFloat(xr(t, i));
    }, e.wbg.__wbg_parseInt_7deceafc75400ae4 = function(t, i, r) {
      return parseInt(xr(t, i), r);
    }, e.wbg.__wbg_slice_ab0b7e3d75dccdee = function(t, i, r) {
      return t.slice(i >>> 0, r >>> 0);
    }, e.wbg.__wbindgen_error_new = function(t, i) {
      return new Error(xr(t, i));
    }, e.wbg.__wbindgen_init_externref_table = function() {
      const t = Ce.__wbindgen_export_0, i = t.grow(4);
      t.set(0, void 0), t.set(i + 0, void 0), t.set(i + 1, null), t.set(i + 2, true), t.set(i + 3, false);
    }, e.wbg.__wbindgen_string_get = function(t, i) {
      const r = i, a = typeof r == "string" ? r : void 0;
      var c = wb(a) ? 0 : yh(a, Ce.__wbindgen_malloc, Ce.__wbindgen_realloc), f = ro;
      Qc().setInt32(t + 4, f, true), Qc().setInt32(t + 0, c, true);
    }, e.wbg.__wbindgen_throw = function(t, i) {
      throw new Error(xr(t, i));
    }, e;
  }
  function vb(e, t) {
    return Ce = e.exports, vh.__wbindgen_wasm_module = t, Rr = null, Ln = null, Ce.__wbindgen_start(), Ce;
  }
  async function vh(e) {
    if (Ce !== void 0) return Ce;
    typeof e < "u" && (Object.getPrototypeOf(e) === Object.prototype ? { module_or_path: e } = e : console.warn("using deprecated parameters for the initialization function; pass a single object instead")), typeof e > "u" && (e = new URL("" + new URL("proj4rs_bg-Biz-E4lt.wasm", import.meta.url).href, import.meta.url));
    const t = bb();
    (typeof e == "string" || typeof Request == "function" && e instanceof Request || typeof URL == "function" && e instanceof URL) && (e = fetch(e));
    const { instance: i, module: r } = await yb(await e, t);
    return vb(i, r);
  }
  const _b = "" + new URL("proj4rs_bg-Biz-E4lt.wasm", import.meta.url).href, Us = {
    WGS84: "+proj=longlat +datum=WGS84 +no_defs",
    GRS80: "+proj=latlong +ellps=GRS80 +no_defs",
    UTM_ZONE_50N: "+proj=utm +zone=50 +datum=WGS84 +units=m +no_defs",
    UTM_ZONE_51N: "+proj=utm +zone=51 +datum=WGS84 +units=m +no_defs",
    CGCS2000_3_DEGREE: "+proj=tmerc +lat_0=0 +lon_0=117 +k=1 +x_0=500000 +y_0=0 +ellps=GRS80 +units=m +no_defs",
    BEIJING_1954: "+proj=tmerc +lat_0=0 +lon_0=117 +k=1 +x_0=500000 +y_0=0 +ellps=krass +units=m +no_defs",
    WEB_MERCATOR: "+proj=merc +a=6378137 +b=6378137 +lat_ts=0.0 +lon_0=0.0 +x_0=0.0 +y_0=0 +k=1.0 +units=m +nadgrids=@null +wktext +no_defs"
  };
  let ca = false;
  async function _h() {
    if (!ca) try {
      console.log("[Proj4WASM] Fetching WASM module..."), await vh({
        module_or_path: _b
      }), ca = true, console.log("[Proj4WASM] WASM module loaded successfully.");
    } catch (e) {
      console.warn("[Proj4WASM] Failed to load WASM module, using the JS fallback."), console.error(e), ca = true;
    }
  }
  async function iu(e, t, i) {
    await _h();
    const r = new dn(e), a = new dn(t), c = new yl(i[0], i[1], 0);
    try {
      return za(r, a, c), [
        c.x,
        c.y
      ];
    } catch (f) {
      throw new Error(`Failed to transform coordinate: ${f instanceof Error ? f.message : String(f)}`);
    } finally {
      r.free(), a.free(), c.free();
    }
  }
  function Eb(e, t) {
    const i = t.x - e.x, r = t.y - e.y;
    return Math.sqrt(i * i + r * r);
  }
  ru = function(e, t) {
    const r = e.latitude * Math.PI / 180, a = t.latitude * Math.PI / 180, c = (t.latitude - e.latitude) * Math.PI / 180, f = (t.longitude - e.longitude) * Math.PI / 180, h = Math.sin(c / 2) * Math.sin(c / 2) + Math.cos(r) * Math.cos(a) * Math.sin(f / 2) * Math.sin(f / 2);
    return 6371e3 * (2 * Math.atan2(Math.sqrt(h), Math.sqrt(1 - h)));
  };
  async function Ib(e, t, i = {}) {
    const { projection: r = Us.CGCS2000_3_DEGREE, useHaversine: a = false } = i;
    if (a) return ru(e, t);
    try {
      const c = await iu(Us.WGS84, r, [
        e.longitude,
        e.latitude
      ]), f = await iu(Us.WGS84, r, [
        t.longitude,
        t.latitude
      ]);
      return Eb({
        x: c[0],
        y: c[1]
      }, {
        x: f[0],
        y: f[1]
      });
    } catch (c) {
      return console.warn("Failed to use proj4 distance calculation, falling back to haversine:", c), ru(e, t);
    }
  }
  Xv = async function(e, t = {}) {
    if (e.length < 2) return 0;
    let i = 0;
    for (let r = 1; r < e.length; r++) i += await Ib(e[r - 1], e[r], t);
    return i;
  };
  Qv = function(e) {
    return e < 1e3 ? `${Math.round(e)} m` : e < 1e4 ? `${(e / 1e3).toFixed(1)} km` : `${Math.round(e / 1e3)} km`;
  };
  const { sin: Kt, cos: Sb, sqrt: bl, abs: no, PI: jt } = Math, nu = 6378245, su = 0.006693421622965823;
  function Eh(e, t) {
    return e >= 72.004 && e <= 137.8347 && t >= 0.8293 && t <= 55.8271;
  }
  function Tb(e, t) {
    let i = -100 + 2 * e + 3 * t + 0.2 * t * t + 0.1 * e * t + 0.2 * bl(no(e));
    return i += (20 * Kt(6 * e * jt) + 20 * Kt(2 * e * jt)) * 2 / 3, i += (20 * Kt(t * jt) + 40 * Kt(t / 3 * jt)) * 2 / 3, i += (160 * Kt(t / 12 * jt) + 320 * Kt(t * jt / 30)) * 2 / 3, i;
  }
  function Mb(e, t) {
    let i = 300 + e + 2 * t + 0.1 * e * e + 0.1 * e * t + 0.1 * bl(no(e));
    return i += (20 * Kt(6 * e * jt) + 20 * Kt(2 * e * jt)) * 2 / 3, i += (20 * Kt(e * jt) + 40 * Kt(e / 3 * jt)) * 2 / 3, i += (150 * Kt(e / 12 * jt) + 300 * Kt(e / 30 * jt)) * 2 / 3, i;
  }
  function Pb(e, t) {
    let i = Mb(e - 105, t - 35), r = Tb(e - 105, t - 35);
    const a = t / 180 * jt;
    let c = Kt(a);
    c = 1 - su * c * c;
    const f = bl(c);
    return i = i * 180 / (nu / f * Sb(a) * jt), r = r * 180 / (nu * (1 - su) / (c * f) * jt), [
      i,
      r
    ];
  }
  function hr(e) {
    const [t, i] = e;
    if (!Eh(t, i)) return [
      t,
      i
    ];
    const r = Pb(t, i);
    return [
      t + r[0],
      i + r[1]
    ];
  }
  function pn(e) {
    const [t, i] = e;
    if (!Eh(t, i)) return [
      t,
      i
    ];
    let [r, a] = [
      t,
      i
    ], c = hr([
      r,
      a
    ]), f = c[0] - t, h = c[1] - i;
    for (; no(f) > 1e-6 || no(h) > 1e-6; ) r -= f, a -= h, c = hr([
      r,
      a
    ]), f = c[0] - t, h = c[1] - i;
    return [
      r,
      a
    ];
  }
  const { sin: so, cos: oo, atan2: Ih, sqrt: Sh, PI: kb } = Math, ao = kb * 3e3 / 180;
  function tn(e) {
    const [t, i] = e, r = t - 65e-4, a = i - 6e-3, c = Sh(r * r + a * a) - 2e-5 * so(a * ao), f = Ih(a, r) - 3e-6 * oo(r * ao), h = c * oo(f), p = c * so(f);
    return [
      h,
      p
    ];
  }
  function gn(e) {
    const [t, i] = e, r = t, a = i, c = Sh(r * r + a * a) + 2e-5 * so(a * ao), f = Ih(a, r) + 3e-6 * oo(r * ao), h = c * oo(f) + 65e-4, p = c * so(f) + 6e-3;
    return [
      h,
      p
    ];
  }
  const ou = 180 / Math.PI, au = Math.PI / 180, lo = 6378137, tr = 20037508342789244e-9;
  function Ms(e) {
    return [
      e[0] * ou / lo,
      (Math.PI * 0.5 - 2 * Math.atan(Math.exp(-e[1] / lo))) * ou
    ];
  }
  function No(e) {
    const t = Math.abs(e[0]) <= 180 ? e[0] : e[0] - (e[0] < 0 ? -1 : 1) * 360, i = [
      lo * t * au,
      lo * Math.log(Math.tan(Math.PI * 0.25 + 0.5 * e[1] * au))
    ];
    return i[0] > tr && (i[0] = tr), i[0] < -tr && (i[0] = -tr), i[1] > tr && (i[1] = tr), i[1] < -tr && (i[1] = -tr), i;
  }
  const { abs: co } = Math, lu = [
    1289059486e-2,
    836237787e-2,
    5591021,
    348198983e-2,
    167804312e-2,
    0
  ], cu = [
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
  function Th(e, t, i) {
    const r = co(t) / i[9];
    let a = i[0] + i[1] * co(e), c = i[2] + i[3] * r + i[4] * Math.pow(r, 2) + i[5] * Math.pow(r, 3) + i[6] * Math.pow(r, 4) + i[7] * Math.pow(r, 5) + i[8] * Math.pow(r, 6);
    return a *= e < 0 ? -1 : 1, c *= t < 0 ? -1 : 1, [
      a,
      c
    ];
  }
  function Do(e) {
    const [t, i] = e;
    let r = [];
    for (let a = 0; a < cu.length; a++) if (co(i) > cu[a]) {
      r = Rb[a];
      break;
    }
    return Th(t, i, r);
  }
  function Ps(e) {
    const [t, i] = e;
    let r = [];
    for (let a = 0; a < lu.length; a++) if (co(i) >= lu[a]) {
      r = Ab[a];
      break;
    }
    return Th(t, i, r);
  }
  function ir(e, t) {
    if (!e) throw new Error(t);
  }
  function Mh(e) {
    return !!e && Object.prototype.toString.call(e) === "[object Array]";
  }
  function uu(e) {
    return !isNaN(Number(e)) && e !== null && !Mh(e);
  }
  function si(...e) {
    const t = e.length - 1;
    return function(...i) {
      let r = t, a = e[t].apply(null, i);
      for (; r--; ) a = e[r].call(null, a);
      return a;
    };
  }
  function Ph(e, t, i = false) {
    if (e === null) return;
    let r, a, c, f, h, p, v = 0, g = 0, I, C;
    const { type: A } = e, F = A === "FeatureCollection", x = A === "Feature", pe = F ? e.features.length : 1;
    for (let se = 0; se < pe; se++) {
      I = F ? e.features[se].geometry : x ? e.geometry : e, C = I ? I.type === "GeometryCollection" : false, p = C ? I.geometries.length : 1;
      for (let U = 0; U < p; U++) {
        let Y = 0, $ = 0;
        if (f = C ? I.geometries[U] : I, f === null) continue;
        const ue = f.type;
        switch (v = i && (ue === "Polygon" || ue === "MultiPolygon") ? 1 : 0, ue) {
          case null:
            break;
          case "Point":
            if (h = f.coordinates, t(h, g, se, Y, $) === false) return false;
            g++, Y++;
            break;
          case "LineString":
          case "MultiPoint":
            for (h = f.coordinates, r = 0; r < h.length; r++) {
              if (t(h[r], g, se, Y, $) === false) return false;
              g++, ue === "MultiPoint" && Y++;
            }
            ue === "LineString" && Y++;
            break;
          case "Polygon":
          case "MultiLineString":
            for (h = f.coordinates, r = 0; r < h.length; r++) {
              for (a = 0; a < h[r].length - v; a++) {
                if (t(h[r][a], g, se, Y, $) === false) return false;
                g++;
              }
              ue === "MultiLineString" && Y++, ue === "Polygon" && $++;
            }
            ue === "Polygon" && Y++;
            break;
          case "MultiPolygon":
            for (h = f.coordinates, r = 0; r < h.length; r++) {
              for ($ = 0, a = 0; a < h[r].length; a++) {
                for (c = 0; c < h[r][a].length - v; c++) {
                  if (t(h[r][a][c], g, se, Y, $) === false) return false;
                  g++;
                }
                $++;
              }
              Y++;
            }
            break;
          case "GeometryCollection":
            for (r = 0; r < f.geometries.length; r++) if (Ph(f.geometries[r], t, i) === false) return false;
            break;
          default:
            throw new Error("Unknown Geometry Type");
        }
      }
    }
  }
  var at;
  (function(e) {
    e.WGS84 = "WGS84", e.WGS1984 = "WGS84", e.EPSG4326 = "WGS84", e.GCJ02 = "GCJ02", e.AMap = "GCJ02", e.BD09 = "BD09", e.BD09LL = "BD09", e.Baidu = "BD09", e.BMap = "BD09", e.BD09MC = "BD09MC", e.BD09Meter = "BD09MC", e.EPSG3857 = "EPSG3857", e.EPSG900913 = "EPSG3857", e.EPSG102100 = "EPSG3857", e.WebMercator = "EPSG3857", e.WM = "EPSG3857";
  })(at || (at = {}));
  const Cb = {
    to: {
      [at.GCJ02]: hr,
      [at.BD09]: si(gn, hr),
      [at.BD09MC]: si(Do, gn, hr),
      [at.EPSG3857]: No
    }
  }, Ob = {
    to: {
      [at.WGS84]: pn,
      [at.BD09]: gn,
      [at.BD09MC]: si(Do, gn),
      [at.EPSG3857]: si(No, pn)
    }
  }, xb = {
    to: {
      [at.WGS84]: si(pn, tn),
      [at.GCJ02]: tn,
      [at.EPSG3857]: si(No, pn, tn),
      [at.BD09MC]: Do
    }
  }, Lb = {
    to: {
      [at.WGS84]: Ms,
      [at.GCJ02]: si(hr, Ms),
      [at.BD09]: si(gn, hr, Ms),
      [at.BD09MC]: si(Do, gn, hr, Ms)
    }
  }, Nb = {
    to: {
      [at.WGS84]: si(pn, tn, Ps),
      [at.GCJ02]: si(tn, Ps),
      [at.EPSG3857]: si(No, pn, tn, Ps),
      [at.BD09]: Ps
    }
  }, Db = {
    WGS84: Cb,
    GCJ02: Ob,
    BD09: xb,
    EPSG3857: Lb,
    BD09MC: Nb
  };
  var jb = Db;
  function Fb(e, t, i) {
    if (ir(!!e, "The args[0] input coordinate is required"), ir(!!t, "The args[1] original coordinate system is required"), ir(!!i, "The args[2] target coordinate system is required"), t === i) return e;
    const r = jb[t];
    ir(!!r, `Invalid original coordinate system: ${t}`);
    const a = r.to[i];
    ir(!!a, `Invalid target coordinate system: ${i}`);
    const c = typeof e;
    if (ir(c === "string" || c === "object", `Invalid input coordinate type: ${c}`), c === "string") try {
      e = JSON.parse(e);
    } catch {
      throw new Error(`Invalid input coordinate: ${e}`);
    }
    let f = false;
    Mh(e) && (ir(e.length >= 2, `Invalid input coordinate: ${e}`), ir(uu(e[0]) && uu(e[1]), `Invalid input coordinate: ${e}`), e = e.map(Number), f = true);
    const h = a;
    return f ? h(e) : (Ph(e, (p) => {
      [p[0], p[1]] = h(p);
    }), e);
  }
  const rn = Object.assign(Object.assign({}, at), {
    CRSTypes: at,
    transform: Fb
  }), fu = 6378137;
  class kh {
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
      return this.cachedWGS84Projection || (this.cachedWGS84Projection = new dn(Us.WGS84)), this.cachedWGS84Projection;
    }
    getLocalProjectionObj() {
      if (!this.cachedLocalProjection || !this.localProjection) throw new Error("Reference point not set. Call setReferencePoint() first.");
      return this.cachedLocalProjection;
    }
    getPoint() {
      return this.cachedPoint || (this.cachedPoint = new yl(0, 0, 0)), this.cachedPoint;
    }
    getGeolocationCorrectionSetting() {
      return Ye("geolocationCorrection") ?? false;
    }
    setReferencePoint(t, i) {
      this.referencePoint = t, this.localProjection = i || `+proj=tmerc +lat_0=${t.latitude} +lon_0=${t.longitude} +k=1 +x_0=0 +y_0=0 +datum=WGS84 +units=m +no_defs`, this.cachedLocalProjection && this.cachedLocalProjection.free(), this.cachedLocalProjection = new dn(this.localProjection);
    }
    async geographicToLocal(t) {
      if (!this.referencePoint || !this.localProjection) throw new Error("Reference point not set. Call setReferencePoint() first.");
      let i = t;
      if (this.geolocationCorrectionEnabled) {
        const f = new di(t.latitude, t.longitude);
        i = Ah(f);
      }
      const r = this.getWGS84Projection(), a = this.getLocalProjectionObj(), c = this.getPoint();
      c.x = i.longitude, c.y = i.latitude, c.z = 0;
      try {
        return za(r, a, c), {
          x: c.x,
          y: c.y
        };
      } catch {
        return this.geographicToLocalFallback(t);
      }
    }
    async localToGeographic(t) {
      if (!this.referencePoint || !this.localProjection) throw new Error("Reference point not set. Call setReferencePoint() first.");
      const i = this.getLocalProjectionObj(), r = this.getWGS84Projection(), a = this.getPoint();
      a.x = t.x, a.y = t.y, a.z = 0;
      try {
        za(i, r, a);
        const c = {
          longitude: a.x,
          latitude: a.y
        };
        if (this.geolocationCorrectionEnabled) {
          const f = new di(c.latitude, c.longitude);
          return Ub(f);
        }
        return c;
      } catch {
        return this.localToGeographicFallback(t);
      }
    }
    geographicToLocalFallback(t) {
      if (!this.referencePoint) throw new Error("Reference point not set");
      const i = 6371e3, r = this.referencePoint.latitude * Math.PI / 180, a = this.referencePoint.longitude * Math.PI / 180, c = t.latitude * Math.PI / 180, f = t.longitude * Math.PI / 180, h = i * (f - a) * Math.cos((r + c) / 2), p = i * (c - r);
      return {
        x: h,
        y: p
      };
    }
    localToGeographicFallback(t) {
      if (!this.referencePoint) throw new Error("Reference point not set");
      const i = this.referencePoint.latitude * Math.PI / 180, r = this.referencePoint.longitude * Math.PI / 180, a = (t.y / fu + i) * 180 / Math.PI, c = (t.x / (fu * Math.cos(i)) + r) * 180 / Math.PI;
      return {
        latitude: a,
        longitude: c
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
  function Ah(e) {
    const t = rn.transform([
      e.longitude,
      e.latitude
    ], rn.WGS84, rn.GCJ02);
    return new di(t[1], t[0]);
  }
  function Ub(e) {
    const t = rn.transform([
      e.longitude,
      e.latitude
    ], rn.GCJ02, rn.WGS84);
    return new di(t[1], t[0]);
  }
  new kh();
  const zb = 2;
  class Gb {
    constructor(t, i = 100, r) {
      __publicField(this, "workerClient");
      __publicField(this, "coordinateTransformer");
      __publicField(this, "imuManager");
      __publicField(this, "callback", null);
      __publicField(this, "isInitialized", false);
      __publicField(this, "lastOutputTime", 0);
      __publicField(this, "lastOutputAccuracy", 0);
      __publicField(this, "debugEnabled", false);
      __publicField(this, "withoutIMU", false);
      __publicField(this, "source", "kalman");
      __publicField(this, "config");
      __publicField(this, "cachedState", null);
      __publicField(this, "cachedGain", null);
      __publicField(this, "processingQueue", Promise.resolve());
      this.workerClient = new gb(), this.coordinateTransformer = new kh(), this.imuManager = new pb(i), this.callback = t, this.debugEnabled = (r == null ? void 0 : r.debugEnabled) ?? Fa(), this.withoutIMU = (r == null ? void 0 : r.useIMU) === false, this.source = (r == null ? void 0 : r.source) ?? "kalman", this.config = {
        initialAccelerationUncertainty: (r == null ? void 0 : r.initialAccelerationUncertainty) ?? By(),
        initialPositionUncertainty: (r == null ? void 0 : r.initialPositionUncertainty) ?? Wy(),
        initialVelocityUncertainty: (r == null ? void 0 : r.initialVelocityUncertainty) ?? Vy(),
        gpsSpeedUncertainty: (r == null ? void 0 : r.gpsSpeedUncertainty) ?? qy(),
        debugEnabled: this.debugEnabled
      };
    }
    async initialize(t) {
      try {
        this.coordinateTransformer.setReferencePoint({
          longitude: t.longitude,
          latitude: t.latitude
        });
        const i = await this.coordinateTransformer.geographicToLocal({
          longitude: t.longitude,
          latitude: t.latitude
        }), r = this.getTrustedGPSVelocity(t), a = {
          x: i.x,
          y: i.y,
          accuracy: t.accuracy,
          timestamp: t.timestamp,
          velocity: r
        };
        this.lastOutputAccuracy = t.accuracy, this.withoutIMU ? console.info("[LocationProcessor] Running in no-IMU mode, skipping IMU initialization") : (await this.imuManager.initialize()).isErr() && (console.warn("[LocationProcessor] IMU not available, using GPS-only mode"), this.withoutIMU = true, this.source = "kalman-no-imu");
        const c = {
          ...this.config,
          debugEnabled: this.debugEnabled
        };
        return await this.workerClient.initialize(c, a), this.isInitialized = true, await this.updateCachedState(), N(void 0);
      } catch (i) {
        return k(new Oe("Failed to initialize location processor", "UPDATE_SERVICE_ERROR", i));
      }
    }
    async startGPS() {
      try {
        return this.withoutIMU ? (this.isInitialized = true, console.info("[LocationProcessor] Started location processing (no-IMU mode)"), N(void 0)) : (await this.imuManager.isAvailable() ? (await this.imuManager.startListening((r) => {
          this.processIMUReading(r);
        })).isErr() && (console.warn("[LocationProcessor] Failed to start IMU, using GPS-only"), this.withoutIMU = true, this.source = "kalman-no-imu") : (this.withoutIMU = true, this.source = "kalman-no-imu"), this.isInitialized = true, console.info("[LocationProcessor] Started location processing"), N(void 0));
      } catch (t) {
        return k(new Oe("Failed to start GPS processing", "UPDATE_SERVICE_ERROR", t));
      }
    }
    async stopGPS() {
      try {
        const t = await this.imuManager.stopListening();
        return t.isErr() && console.warn("[LocationProcessor] Failed to stop IMU:", t.error), this.workerClient.dispose(), this.isInitialized = false, this.cachedState = null, this.cachedGain = null, console.info("[LocationProcessor] Stopped location processing"), N(void 0);
      } catch (t) {
        return k(new Oe("Failed to stop GPS processing", "UPDATE_SERVICE_ERROR", t));
      }
    }
    async processGPSLocation(t) {
      if (!this.isInitialized) {
        console.warn("[LocationProcessor] Processor not initialized, ignoring GPS reading");
        return;
      }
      await this.enqueueProcessing(async () => {
        const i = await this.coordinateTransformer.geographicToLocal({
          longitude: t.longitude,
          latitude: t.latitude
        }), r = this.getTrustedGPSVelocity(t), a = {
          x: i.x,
          y: i.y,
          accuracy: t.accuracy,
          timestamp: t.timestamp,
          velocity: r
        };
        await this.workerClient.processGPS(a), this.lastOutputAccuracy = t.accuracy, await this.outputFilteredPosition();
      }, "[LocationProcessor] Error processing GPS location:");
    }
    async processIMUReading(t) {
      if (!this.isInitialized || !this.workerClient.isReady()) {
        this.isInitialized && !this.workerClient.isReady() && console.log("[LocationProcessor] Kalman filter not yet initialized, buffering IMU reading");
        return;
      }
      await this.enqueueProcessing(async () => {
        this.debugEnabled && console.log("[LocationProcessor] Processing IMU reading:", {
          timestamp: t.timestamp,
          acceleration: t.acceleration
        }), await this.workerClient.processIMU(t), await this.outputPredictedPosition();
      }, "[LocationProcessor] Error processing IMU reading:");
    }
    async outputFilteredPosition() {
      try {
        const t = await this.workerClient.getFilteredPosition(), i = await this.coordinateTransformer.localToGeographic(t), r = new di(i.latitude, i.longitude, this.lastOutputAccuracy || 10);
        await this.updateCachedState(), this.notifyCallback(r);
      } catch (t) {
        console.error("[LocationProcessor] Error outputting filtered position:", t);
      }
    }
    async outputPredictedPosition() {
      const t = performance.now();
      if (!(t - this.lastOutputTime < 50)) {
        this.lastOutputTime = t;
        try {
          const i = await this.workerClient.getFilteredPosition(), r = await this.coordinateTransformer.localToGeographic(i), a = new di(r.latitude, r.longitude, this.lastOutputAccuracy || 10);
          await this.updateCachedState(), this.notifyCallback(a);
        } catch (i) {
          console.error("[LocationProcessor] Error outputting predicted position:", i);
        }
      }
    }
    async getCurrentFilteredPosition() {
      if (!this.workerClient.isReady()) return k(new Oe("Kalman filter not initialized", "UPDATE_SERVICE_ERROR"));
      try {
        await this.processingQueue;
        const t = await this.workerClient.getFilteredPosition(), i = await this.coordinateTransformer.localToGeographic(t), r = new di(i.latitude, i.longitude, this.lastOutputAccuracy || 10);
        return N(r);
      } catch (t) {
        return k(new Oe("Failed to get filtered position", "UPDATE_SERVICE_ERROR", t));
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
    async enqueueProcessing(t, i) {
      const r = this.processingQueue.then(t);
      this.processingQueue = r.catch(() => {
      });
      try {
        await r;
      } catch (a) {
        console.error(i, a);
      }
    }
    async updateCachedState() {
      try {
        const t = await this.workerClient.getState(), i = new Ii(t.covariance);
        this.cachedState = {
          position: t.position,
          velocity: t.velocity,
          acceleration: t.acceleration,
          covariance: i,
          timestamp: t.timestamp
        };
        const r = await this.workerClient.getLastKalmanGain();
        this.cachedGain = r ? new Ii(r) : null;
      } catch (t) {
        console.error("[LocationProcessor] Failed to update cached Kalman state:", t);
      }
    }
    getTrustedGPSVelocity(t) {
      const { speed: i, heading: r } = t;
      if (!(i === void 0 || r === void 0) && !(!Number.isFinite(i) || !Number.isFinite(r) || i < zb)) return this.gpsVelocityToLocal(i, r);
    }
    gpsVelocityToLocal(t, i) {
      const r = i * Math.PI / 180, a = t * Math.sin(r), c = t * Math.cos(r);
      return {
        x: a,
        y: c
      };
    }
    notifyCallback(t) {
      if (this.callback) try {
        this.callback(t, this.source);
      } catch (i) {
        console.error("[LocationProcessor] Callback error:", i);
      }
    }
  }
  class $b {
    constructor(t = "kalman", i = 100) {
      __publicField(this, "name");
      __publicField(this, "provider", null);
      __publicField(this, "processor", null);
      __publicField(this, "watchId", null);
      __publicField(this, "isInitialized", false);
      __publicField(this, "userCallback", null);
      __publicField(this, "imuUpdateInterval");
      __publicField(this, "useIMU");
      this.name = t, this.imuUpdateInterval = i, this.useIMU = t !== "kalman-no-imu";
    }
    async initialize() {
      if (this.isInitialized) return N(void 0);
      try {
        const t = Lo();
        if (t.isErr()) return k(new Oe("Platform services not available", "BACKEND_NOT_AVAILABLE", t.error));
        const i = t.value.getGeolocationProvider();
        if (!i) return k(new Oe("Geolocation provider not available", "BACKEND_NOT_AVAILABLE"));
        this.provider = i;
        const r = await this.provider.getCurrentPosition();
        if (r.isErr()) return k(new Oe("Failed to get the initial geolocation", "UPDATE_SERVICE_ERROR", r.error));
        this.processor = new Gb((c, f) => this.handleLocationUpdate(c), this.imuUpdateInterval, {
          useIMU: this.useIMU,
          source: this.name
        });
        const a = await this.processor.initialize({
          latitude: r.value.coords.latitude,
          longitude: r.value.coords.longitude,
          accuracy: r.value.coords.accuracy,
          timestamp: performance.now(),
          speed: r.value.coords.speed ?? void 0,
          heading: r.value.coords.heading ?? void 0
        });
        return a.isErr() ? a : (this.isInitialized = true, N(void 0));
      } catch (t) {
        return k(new Oe("Exception during Kalman backend initialization", "UPDATE_SERVICE_ERROR", t));
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
      if (!this.provider || !this.processor) return k(new Oe("Kalman backend not properly initialized", "BACKEND_NOT_AVAILABLE"));
      try {
        this.userCallback = t;
        const i = await this.provider.watchPosition((a) => {
          var _a3;
          const c = {
            latitude: a.coords.latitude,
            longitude: a.coords.longitude,
            accuracy: a.coords.accuracy,
            timestamp: performance.now(),
            speed: a.coords.speed ?? void 0,
            heading: a.coords.heading ?? void 0
          };
          (_a3 = this.processor) == null ? void 0 : _a3.processGPSLocation(c);
        }, {
          highFrequency: true
        });
        if (i.isErr()) return k(new Oe("Failed to start watching position", "UPDATE_SERVICE_ERROR", i.error));
        this.watchId = i.value;
        const r = await this.processor.startGPS();
        return r.isErr() ? (this.watchId !== null && this.provider && this.provider.clearWatch(this.watchId), r) : (console.info("[KalmanBackend] Started Kalman-filtered location watching"), N(void 0));
      } catch (i) {
        return k(new Oe("Exception during start watching", "UPDATE_SERVICE_ERROR", i));
      }
    }
    async stopWatching() {
      if (!this.provider || !this.processor) return N(void 0);
      try {
        const t = await this.processor.stopGPS();
        if (t.isErr() && console.warn("[KalmanBackend] Failed to stop processor cleanly:", t.error), this.watchId !== null) {
          const i = this.provider.clearWatch(this.watchId);
          i.isErr() && console.warn("[KalmanBackend] Failed to clear watch:", i.error), this.watchId = null;
        }
        return console.info("[KalmanBackend] Stopped Kalman-filtered location watching"), N(void 0);
      } catch (t) {
        return k(new Oe("Exception during stop watching", "UPDATE_SERVICE_ERROR", t));
      }
    }
    async getCurrentPosition() {
      if (!this.provider || !this.processor) return k(new Oe("Kalman backend not properly initialized", "BACKEND_NOT_AVAILABLE"));
      try {
        return await this.processor.getCurrentFilteredPosition();
      } catch (t) {
        return k(new Oe("Exception getting current position", "UPDATE_SERVICE_ERROR", t));
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
        this.userCallback(t, this.name);
      } catch (i) {
        console.error("[KalmanBackend] User callback error:", i);
      }
    }
  }
  li = (_a2 = class {
    constructor() {
      __publicField(this, "isInitialized", false);
      __publicField(this, "backendManager");
      __publicField(this, "stateManager");
      __publicField(this, "locationUpdateCallbacks", /* @__PURE__ */ new Map());
      __publicField(this, "nextCallbackId", 1);
      const t = [], i = Ye("geolocationBackend"), r = i === "auto" ? $y() : i === "kalman" || i === "kalman-no-imu", a = i === "auto" || i === "gps", c = i === "auto" || i === "ip";
      if (r) {
        const f = Ua(), h = f > 0 ? Math.floor(1e3 / f) : 50, p = i === "kalman-no-imu" ? "kalman-no-imu" : "kalman";
        t.push(new $b(p, h));
      }
      a && t.push(new hb()), c && t.push(new db()), console.info(`[GeolocationManager] Initializing with backend preference: ${i}, strategies: ${t.map((f) => f.name).join(", ")}`), this.backendManager = new cb(t), this.stateManager = new fb();
    }
    static async getInstance() {
      if (li.instance || (li.instance = new li()), !li.instance.isInitialized) {
        const t = await li.instance.initialize();
        if (t.isErr()) return k(t.error);
      }
      return N(li.instance);
    }
    static getExistingInstance() {
      if (!li.instance) throw new Error("GeolocationManager not initialized. Call getInstance() first.");
      return li.instance;
    }
    static reset() {
      li.instance = null;
    }
    async initialize() {
      if (this.isInitialized) return console.info("[GeolocationManager] Already initialized"), N(void 0);
      console.info("[GeolocationManager] Initializing geolocation services with new architecture");
      try {
        this.stateManager.subscribe((r, a) => {
          this.notifyCallbacks(r);
        });
        const t = await this.backendManager.initialise();
        if (t.isErr()) return console.warn("[GeolocationManager] No backend available for location"), k(new Ni("No geolocation backend available", "no_backend_available", t.error));
        const i = await this.backendManager.getCurrentPosition();
        return i.isOk() ? (this.stateManager.updateLocation(i.value, this.backendManager.getActiveBackend()), this.isInitialized = true, console.info("[GeolocationManager] Geolocation services initialized successfully"), N(void 0)) : k(new Ni("Backend selected fail to obtain geolocation", "backend_error", i.error));
      } catch (t) {
        const i = vs(t, "Failed to initialize geolocation manager");
        return Tr(i, "GeolocationManager.initialize"), k(new Ni("Exception during initialization", "initialization_failed", i));
      }
    }
    async getCurrentLocation() {
      if (!this.isInitialized) {
        const t = new Ni("Geolocation manager not initialized", "not_initialized");
        return Tr(t, "GeolocationManager.getCurrentLocation"), k(t);
      }
      try {
        const t = await this.backendManager.getCurrentPosition();
        return t.isOk() && this.stateManager.updateLocation(t.value, this.backendManager.getActiveBackend() || "gps"), t;
      } catch (t) {
        const i = vs(t, "Failed to get current location");
        return Tr(i, "GeolocationManager.getCurrentLocation"), k(new Ni("Failed to get current location", "get_location_failed", i));
      }
    }
    async startLocationUpdates(t) {
      if (!this.isInitialized) {
        const i = new Ni("Geolocation manager not initialized", "not_initialized");
        return Tr(i, "GeolocationManager.startLocationUpdates"), k(i);
      }
      console.info("[GeolocationManager] Starting location updates");
      try {
        const i = this.nextCallbackId++;
        this.locationUpdateCallbacks.set(i, t);
        const r = await this.backendManager.startWatching((a, c) => {
          this.stateManager.updateLocation(a, c);
        });
        return r.isErr() ? (this.locationUpdateCallbacks.delete(i), k(r.error)) : (console.info(`[GeolocationManager] Location updates started with handler ${i}`), N(i));
      } catch (i) {
        const r = vs(i, "Failed to start location updates");
        return Tr(r, "GeolocationManager.startLocationUpdates"), k(new Ni("Failed to start location updates", "start_updates_failed", r));
      }
    }
    async stopLocationUpdates(t) {
      if (!this.isInitialized) {
        const i = new Ni("Geolocation manager not initialized", "not_initialized");
        return Tr(i, "GeolocationManager.stopLocationUpdates"), k(i);
      }
      console.info("[GeolocationManager] Stopping location updates");
      try {
        if (this.locationUpdateCallbacks.delete(t), this.locationUpdateCallbacks.size === 0) {
          const i = await this.backendManager.stopWatching();
          if (i.isErr()) return k(i.error);
        }
        return console.info(`[GeolocationManager] Location updates stopped for handler ${t}`), N(void 0);
      } catch (i) {
        const r = vs(i, "Failed to stop location updates");
        return Tr(r, "GeolocationManager.stopLocationUpdates"), k(new Ni("Failed to stop location updates", "stop_updates_failed", r));
      }
    }
    isServiceRunning() {
      return this.backendManager.isWatchingActive();
    }
    isUsingGPS() {
      const t = this.backendManager.getActiveBackend();
      return t === "gps" || t === "kalman" || t === "kalman-no-imu";
    }
    getCurrentBackend() {
      return this.backendManager.getActiveBackend();
    }
    getLastKnownLocation() {
      const t = this.stateManager.getCurrentLocation();
      return t || (console.warn("[GeolocationManager] No known location available - returning default coordinates (0, 0)"), new di(0, 0));
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
        const i = this.backendManager.strategies.find((r) => r.name === "kalman");
        if (i && "getLastKalmanGain" in i) return i.getLastKalmanGain();
      }
      return null;
    }
    getKalmanState() {
      if (this.backendManager.getActiveBackend() === "kalman") {
        const i = this.backendManager.strategies.find((r) => r.name === "kalman");
        if (i && "getKalmanState" in i) return i.getKalmanState();
      }
      return null;
    }
    applyGeolocationCorrection(t) {
      return Ye("geolocationCorrection") ? Ah(t) : t;
    }
    notifyCallbacks(t) {
      const i = this.applyGeolocationCorrection(t), r = Ca(i);
      for (const a of this.locationUpdateCallbacks.values()) try {
        a(r);
      } catch (c) {
        console.error("[GeolocationManager] Callback error:", c);
      }
    }
    async refreshBackend() {
      return N(void 0);
    }
  }, __publicField(_a2, "instance", null), _a2);
  let Rh;
  const jo = (e) => Rh = e, Ch = /* @__PURE__ */ Symbol();
  function Ga(e) {
    return e && typeof e == "object" && Object.prototype.toString.call(e) === "[object Object]" && typeof e.toJSON != "function";
  }
  var Zn;
  (function(e) {
    e.direct = "direct", e.patchObject = "patch object", e.patchFunction = "patch function";
  })(Zn || (Zn = {}));
  function Oh() {
    const e = Tu(true), t = e.run(() => qt({}));
    let i = [], r = [];
    const a = el({
      install(c) {
        jo(a), a._a = c, c.provide(Ch, a), c.config.globalProperties.$pinia = a, r.forEach((f) => i.push(f)), r = [];
      },
      use(c) {
        return this._a ? i.push(c) : r.push(c), this;
      },
      _p: i,
      _a: null,
      _e: e,
      _s: /* @__PURE__ */ new Map(),
      state: t
    });
    return a;
  }
  const xh = () => {
  };
  function hu(e, t, i, r = xh) {
    e.add(t);
    const a = () => {
      e.delete(t) && r();
    };
    return !i && Mu() && sd(a), a;
  }
  function Kr(e, ...t) {
    e.forEach((i) => {
      i(...t);
    });
  }
  const Bb = (e) => e(), du = /* @__PURE__ */ Symbol(), ua = /* @__PURE__ */ Symbol();
  function $a(e, t) {
    e instanceof Map && t instanceof Map ? t.forEach((i, r) => e.set(r, i)) : e instanceof Set && t instanceof Set && t.forEach(e.add, e);
    for (const i in t) {
      if (!t.hasOwnProperty(i)) continue;
      const r = t[i], a = e[i];
      Ga(a) && Ga(r) && e.hasOwnProperty(i) && !ct(r) && !Bi(r) ? e[i] = $a(a, r) : e[i] = r;
    }
    return e;
  }
  const Wb = /* @__PURE__ */ Symbol();
  function Vb(e) {
    return !Ga(e) || !Object.prototype.hasOwnProperty.call(e, Wb);
  }
  const { assign: sr } = Object;
  function qb(e) {
    return !!(ct(e) && e.effect);
  }
  function Kb(e, t, i, r) {
    const { state: a, actions: c, getters: f } = t, h = i.state.value[e];
    let p;
    function v() {
      h || (i.state.value[e] = a ? a() : {});
      const g = Cd(i.state.value[e]);
      return sr(g, c, Object.keys(f || {}).reduce((I, C) => (I[C] = el(ul(() => {
        jo(i);
        const A = i._s.get(e);
        return f[C].call(A, A);
      })), I), {}));
    }
    return p = Lh(e, v, t, i, r, true), p;
  }
  function Lh(e, t, i = {}, r, a, c) {
    let f;
    const h = sr({
      actions: {}
    }, i), p = {
      deep: true
    };
    let v, g, I = /* @__PURE__ */ new Set(), C = /* @__PURE__ */ new Set(), A;
    const F = r.state.value[e];
    !c && !F && (r.state.value[e] = {});
    let x;
    function pe(fe) {
      let Q;
      v = g = false, typeof fe == "function" ? (fe(r.state.value[e]), Q = {
        type: Zn.patchFunction,
        storeId: e,
        events: A
      }) : ($a(r.state.value[e], fe), Q = {
        type: Zn.patchObject,
        payload: fe,
        storeId: e,
        events: A
      });
      const me = x = /* @__PURE__ */ Symbol();
      Vu().then(() => {
        x === me && (v = true);
      }), g = true, Kr(I, Q, r.state.value[e]);
    }
    const se = c ? function() {
      const { state: Q } = i, me = Q ? Q() : {};
      this.$patch((ke) => {
        sr(ke, me);
      });
    } : xh;
    function U() {
      f.stop(), I.clear(), C.clear(), r._s.delete(e);
    }
    const Y = (fe, Q = "") => {
      if (du in fe) return fe[ua] = Q, fe;
      const me = function() {
        jo(r);
        const ke = Array.from(arguments), he = /* @__PURE__ */ new Set(), Be = /* @__PURE__ */ new Set();
        function pt(Re) {
          he.add(Re);
        }
        function $t(Re) {
          Be.add(Re);
        }
        Kr(C, {
          args: ke,
          name: me[ua],
          store: ue,
          after: pt,
          onError: $t
        });
        let Xe;
        try {
          Xe = fe.apply(this && this.$id === e ? this : ue, ke);
        } catch (Re) {
          throw Kr(Be, Re), Re;
        }
        return Xe instanceof Promise ? Xe.then((Re) => (Kr(he, Re), Re)).catch((Re) => (Kr(Be, Re), Promise.reject(Re))) : (Kr(he, Xe), Xe);
      };
      return me[du] = true, me[ua] = Q, me;
    }, $ = {
      _p: r,
      $id: e,
      $onAction: hu.bind(null, C),
      $patch: pe,
      $reset: se,
      $subscribe(fe, Q = {}) {
        const me = hu(I, fe, Q.detached, () => ke()), ke = f.run(() => en(() => r.state.value[e], (he) => {
          (Q.flush === "sync" ? g : v) && fe({
            storeId: e,
            type: Zn.direct,
            events: A
          }, he);
        }, sr({}, p, Q)));
        return me;
      },
      $dispose: U
    }, ue = bo($);
    r._s.set(e, ue);
    const re = (r._a && r._a.runWithContext || Bb)(() => r._e.run(() => (f = Tu()).run(() => t({
      action: Y
    }))));
    for (const fe in re) {
      const Q = re[fe];
      if (ct(Q) && !qb(Q) || Bi(Q)) c || (F && Vb(Q) && (ct(Q) ? Q.value = F[fe] : $a(Q, F[fe])), r.state.value[e][fe] = Q);
      else if (typeof Q == "function") {
        const me = Y(Q, fe);
        re[fe] = me, h.actions[fe] = Q;
      }
    }
    return sr(ue, re), sr(Ne(ue), re), Object.defineProperty(ue, "$state", {
      get: () => r.state.value[e],
      set: (fe) => {
        pe((Q) => {
          sr(Q, fe);
        });
      }
    }), r._p.forEach((fe) => {
      sr(ue, f.run(() => fe({
        store: ue,
        app: r._a,
        pinia: r,
        options: h
      })));
    }), F && c && i.hydrate && i.hydrate(ue.$state, F), v = true, g = true, ue;
  }
  e1 = function(e, t, i) {
    let r;
    const a = typeof t == "function";
    r = a ? i : t;
    function c(f, h) {
      const p = $d();
      return f = f || (p ? Un(Ch, null) : null), f && jo(f), f = Rh, f._s.has(e) || (a ? Lh(e, t, r, f) : Kb(e, r, f)), f._s.get(e);
    }
    return c.$id = e, c;
  };
  var Zb = [];
  let pu, Ba, Jb, Hb, ks, Yb, Xb, Qb, ev, tv, iv, rv, nv, sv, ov, av, lv, cv, uv, fv, hv, dv, gv, vl;
  pu = [
    {
      name: "trackmaker",
      displayName: "TrackMaker",
      moduleInit: async () => {
        var _a3;
        const e = $f((await qn(async () => {
          const { default: i } = await import("./App-gxjcllkI.js");
          return {
            default: i
          };
        }, __vite__mapDeps([0,1,2,3,4,5]), import.meta.url)).default);
        e.use(Oh()), e.use((await qn(async () => {
          const { default: i } = await import("./index-C2MtSpP6.js");
          return {
            default: i
          };
        }, __vite__mapDeps([6,2,1,3,7]), import.meta.url)).default), e.use((await qn(async () => {
          const { i18n: i } = await import("./index-CmzhANMy.js");
          return {
            i18n: i
          };
        }, __vite__mapDeps([4,2]), import.meta.url)).i18n), window.splashScreen && window.splashScreen.unmount(), (_a3 = document.getElementById("splash")) == null ? void 0 : _a3.remove();
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
        await _h();
      },
      dependencies: []
    },
    {
      name: "platform-services",
      displayName: "Platform Services",
      moduleInit: async () => {
        let e = false;
        try {
          e = Fa();
        } catch {
        }
        try {
          e && console.time("Platform services initialise");
          const t = async (p, v) => lb() ? false : window.permissionConfirm ? window.permissionConfirm(v) : false, i = await cr.init({
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
          const r = i.value, a = r.getStorage();
          if (a.isErr()) throw a.error;
          const c = await a.value.init();
          if (c.isErr()) throw c.error;
          const f = r.getDeviceOrientation();
          if (f.isOk()) {
            const p = f.value;
            (await p.init()).isErr() ? console.warn("[Platform] DeviceOrientation not supported on this platform") : await p.start();
          }
          const h = r.getIMU();
          if (h.isOk()) {
            const p = h.value;
            (await p.init()).isErr() ? console.warn("[Platform] IMU not supported on this platform") : (await p.startAcceleration({
              frequency: Ua(),
              normalizeToENU: true
            }), await p.startGyroscope({
              frequency: Ua(),
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
          e = Fa();
        } catch {
        }
        try {
          if (!Lo()) throw new Error("Platform services not initialized");
          e && console.time("Geolocation service initialise");
          const i = await li.getInstance();
          if (i.isErr()) throw i.error;
          const r = i.value;
          e && console.timeEnd("Geolocation service initialise"), e && console.time("Geolocation service start"), await r.startLocationUpdates(() => {
          }), e && console.timeEnd("Geolocation service start"), window.GeolocationManager = r, console.info("[Geolocation] Unified geolocation service initialized successfully using platform providers");
        } catch (t) {
          return console.error("[Geolocation] Failed to initialize geolocation service:", t), Promise.reject(t instanceof Error ? t : new Error(String(t)));
        }
      },
      dependencies: [
        "platform-services"
      ]
    }
  ];
  t1 = dy;
  i1 = Zb;
  Ba = {
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
  Jb = () => {
    try {
      const t = localStorage.getItem("interface-language");
      if (t && Ba[t]) return t;
    } catch {
    }
    return navigator.language.startsWith("zh") ? "zh-CN" : "en";
  };
  Hb = Jb();
  ks = (e) => Ba[Hb][e] || Ba.en[e] || e;
  Yb = {
    class: "splash-container"
  };
  Xb = {
    class: "splash-content"
  };
  Qb = {
    key: 0,
    class: "loading-section"
  };
  ev = {
    class: "progress-container"
  };
  tv = {
    class: "progress-bar"
  };
  iv = {
    class: "progress-text"
  };
  rv = {
    class: "loading-details"
  };
  nv = {
    class: "current-module"
  };
  sv = {
    key: 1,
    class: "error-section"
  };
  ov = {
    class: "error-message"
  };
  av = {
    key: 0
  };
  lv = {
    key: 1
  };
  cv = {
    key: 2,
    class: "timeout-section"
  };
  uv = {
    key: 3,
    class: "permission-section"
  };
  fv = {
    class: "permission-message"
  };
  hv = {
    class: "permission-buttons"
  };
  dv = Hd({
    __name: "SplashScreen",
    setup(e) {
      const t = qt(0), i = qt(""), r = qt(""), a = qt(0), c = qt(0), f = qt(false), h = qt(false), p = qt(""), v = qt(false), g = qt("");
      let I = null;
      const C = qt("light"), A = () => {
        try {
          window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches ? C.value = "dark" : C.value = "light";
        } catch {
          C.value = "light";
        }
      }, F = () => {
        C.value === "dark" ? document.documentElement.setAttribute("data-theme", "dark") : document.documentElement.setAttribute("data-theme", "light"), console.info("[Splash Screen] Theme applied:", C.value);
      }, x = ul(() => Math.round(t.value / 100 * 100)), pe = {
        info: (...ge) => {
          const re = ge.join(" ");
          console.info(re), i.value = String(re);
        },
        warn: (...ge) => {
          const re = ge.join(" ");
          console.warn(re), i.value = String(re);
        },
        error: (...ge) => {
          const re = ge.join(" ");
          console.error(re), i.value = String(re), p.value = String(re);
        },
        debug: (...ge) => {
          console.debug(...ge);
        }
      }, se = {
        onModuleStart: (ge) => {
          r.value = ge, i.value = `Loading ${ge}...`;
        },
        onModuleComplete: (ge) => {
          c.value++, t.value = Math.min(100, c.value / a.value * 100), i.value = `Loaded ${ge}`;
        },
        onModuleError: (ge, re) => {
          i.value = `Failed to load ${ge}`, p.value = re.message;
        },
        onOverallProgress: (ge, re) => {
          a.value = re, c.value = ge, t.value = Math.min(100, ge / re * 100);
        }
      }, U = () => {
        window.location.reload();
      }, Y = (ge) => (g.value = ks(ge), v.value = true, new Promise((re) => {
        I = (fe) => {
          v.value = false, re(fe);
        };
      })), $ = () => {
        I == null ? void 0 : I(true);
      }, ue = () => {
        I == null ? void 0 : I(false);
      };
      return window.permissionConfirm = Y, os(() => {
        var _a3;
        A(), F(), (_a3 = document.getElementById("pre-splash")) == null ? void 0 : _a3.remove();
        const ge = (re, fe = /* @__PURE__ */ new Set()) => {
          if (fe.has(re)) return 0;
          fe.add(re);
          const Q = pu.find((ke) => ke.name === re);
          if (!Q) return 0;
          let me = 1;
          if (Q.dependencies) for (const ke of Q.dependencies) me += ge(ke, fe);
          return me;
        };
        a.value = ge("trackmaker"), console.log("=== Start Loading Modules ==="), ah(pu, "trackmaker", 3e4, {
          logger: pe,
          progressReporter: se,
          printLog: true
        }).then(() => {
          i.value = "All modules loaded successfully", r.value = "TrackMaker", t.value = 100, console.log("=== All Modules Loaded ===");
        }).catch((re) => {
          const fe = String(re.toString());
          if (fe.toLowerCase().includes("timeout")) {
            const Q = fe.split("Trackback").map((me) => me.replace(/((^:\s*)|(,\s*$))/g, ""));
            console.table(Q.map((me) => ({
              Trackback: me
            })), [
              "Trackback"
            ]), h.value = true;
          } else p.value = fe, f.value = true;
          console.log("=== Failed to initialize all modules ==="), console.error(re);
        });
      }), (ge, re) => (ni(), Li("div", Yb, [
        We("div", Xb, [
          re[8] || (re[8] = We("div", {
            class: "logo-section"
          }, [
            We("div", {
              class: "app-logo"
            }, [
              We("img", {
                src: kg,
                alt: "TrackMaker Logo",
                height: "80",
                width: "80"
              })
            ]),
            We("h1", {
              class: "app-title"
            }, " TrackMaker ")
          ], -1)),
          !f.value && !h.value ? (ni(), Li("div", Qb, [
            We("div", ev, [
              We("div", tv, [
                We("div", {
                  class: "progress-fill",
                  style: mo({
                    width: `${x.value}%`
                  })
                }, null, 4)
              ]),
              We("div", iv, Di(x.value) + "% ", 1)
            ]),
            We("div", rv, [
              We("p", nv, " Loading: " + Di(r.value), 1)
            ]),
            re[0] || (re[0] = We("div", {
              class: "loading-animation"
            }, [
              We("div", {
                class: "spinner"
              })
            ], -1))
          ])) : bs("", true),
          f.value ? (ni(), Li("div", sv, [
            re[1] || (re[1] = We("div", {
              class: "error-icon"
            }, " \u26A0\uFE0F ", -1)),
            re[2] || (re[2] = We("h2", null, "Loading Error", -1)),
            We("div", ov, [
              (ni(true), Li(At, null, lp((p.value ?? "").split(`
`), (fe) => (ni(), Li("div", {
                key: fe,
                style: {
                  display: "block",
                  "font-family": "monospace",
                  overflow: "auto"
                }
              }, [
                fe.toLocaleLowerCase().includes("trackback") ? (ni(), Li("strong", av, Di(fe), 1)) : (ni(), Li("span", lv, Di(fe), 1))
              ]))), 128))
            ]),
            We("button", {
              class: "retry-button",
              onClick: U
            }, " Retry ")
          ])) : bs("", true),
          h.value ? (ni(), Li("div", cv, [
            re[3] || (re[3] = We("div", {
              class: "timeout-icon"
            }, " \u23F0 ", -1)),
            re[4] || (re[4] = We("h2", null, "Connection Timeout", -1)),
            re[5] || (re[5] = We("p", null, "Unable to load required modules within the timeout period.", -1)),
            re[6] || (re[6] = We("p", null, "Please check your internet connection and try again.", -1)),
            We("button", {
              class: "retry-button",
              onClick: U
            }, " Retry ")
          ])) : bs("", true),
          v.value ? (ni(), Li("div", uv, [
            re[7] || (re[7] = We("div", {
              class: "permission-icon"
            }, " \u{1F4CD} ", -1)),
            We("h2", null, Di(Xr(ks)("permission.title")), 1),
            We("p", fv, Di(g.value), 1),
            We("div", hv, [
              We("button", {
                class: "permission-button deny",
                onClick: ue
              }, Di(Xr(ks)("permission.deny")), 1),
              We("button", {
                class: "permission-button allow",
                onClick: $
              }, Di(Xr(ks)("permission.allow")), 1)
            ])
          ])) : bs("", true)
        ])
      ]));
    }
  });
  pv = (e, t) => {
    const i = e.__vccOpts || e;
    for (const [r, a] of t) i[r] = a;
    return i;
  };
  gv = pv(dv, [
    [
      "__scopeId",
      "data-v-975c59e1"
    ]
  ]);
  vl = $f(gv);
  vl.use(Oh());
  vl.mount("#splash");
  window.splashScreen = vl;
})();
export {
  vs as $,
  Xr as A,
  zd as B,
  jp as C,
  Di as D,
  bs as E,
  At as F,
  en as G,
  _a as H,
  Iv as I,
  Xy as J,
  Ev as K,
  Ao as L,
  kv as M,
  Xd as N,
  Qd as O,
  gr as P,
  Zi as Q,
  Cd as R,
  mo as S,
  Av as T,
  Ov as U,
  ct as V,
  el as W,
  Md as X,
  Lo as Y,
  Tr as Z,
  pv as _,
  __tla,
  We as a,
  Kv as a$,
  Pv as a0,
  Mv as a1,
  _v as a2,
  Tv as a3,
  lp as a4,
  xv as a5,
  Qv as a6,
  Lv as a7,
  aa as a8,
  Ca as a9,
  Jm as aA,
  wn as aB,
  Sc as aC,
  Zw as aD,
  Ui as aE,
  Yf as aF,
  yn as aG,
  qm as aH,
  ew as aI,
  Kf as aJ,
  mm as aK,
  ki as aL,
  Gw as aM,
  l0 as aN,
  Cw as aO,
  Vf as aP,
  A0 as aQ,
  Td as aR,
  Et as aS,
  sn as aT,
  Mo as aU,
  Mu as aV,
  sd as aW,
  $d as aX,
  mv as aY,
  Ji as aZ,
  Nv as a_,
  ko as aa,
  Bv as ab,
  Uv as ac,
  qv as ad,
  Gv as ae,
  zv as af,
  $v as ag,
  Vv as ah,
  Wv as ai,
  Sv as aj,
  t1 as ak,
  i1 as al,
  Fv as am,
  li as an,
  lb as ao,
  qn as ap,
  wr as aq,
  mr as ar,
  an as as,
  uc as at,
  sm as au,
  lm as av,
  um as aw,
  nm as ax,
  qf as ay,
  Zf as az,
  tp as b,
  Zv as b0,
  Jv as b1,
  Hv as b2,
  Yv as b3,
  Xv as b4,
  ru as b5,
  Ne as b6,
  jv as b7,
  ut as b8,
  Dv as b9,
  Li as c,
  Hd as d,
  nl as e,
  qt as f,
  bo as g,
  Kp as h,
  Un as i,
  ul as j,
  Vu as k,
  vv as l,
  os as m,
  Ka as n,
  ni as o,
  Gd as p,
  bv as q,
  pa as r,
  sl as s,
  Fp as t,
  wv as u,
  Rv as v,
  yv as w,
  e1 as x,
  Cv as y,
  Ct as z
};
