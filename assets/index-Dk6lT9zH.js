const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["./App-6oE-IHza.js","./SelectorDrawer.vue_vue_type_script_setup_true_lang-bgPFXQ_B.js","./index-Bww9bJUL.js","./SelectorDrawer-Dg3sM_aP.css","./index-DdQgVSXq.js","./App-Bp_jwbR1.css","./index-CTPKtQ9i.js","./index-Cp21oPTf.css"])))=>i.map(i=>d[i]);
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
let Tr, Qr, Bd, zp, Di, vs, At, tn, Ia, Av, tb, kv, Ro, xv, tp, ip, gr, Hi, xd, yo, Nv, jv, ct, il, Ad, Do, o1, vv, We, ld, _s, Lv, Fr, Ov, Pv, Rv, fp, Uv, l1, zv, dm, am, Hf, Jf, Xm, yn, Mc, Yw, Ui, Qf, bn, Zm, rw, Zf, bm, ki, Ww, f0, xw, Kf, O0, kd, Et, on, ko, Wv, ku, ca, La, Co, n1, s1, Zv, Vv, Xv, Kv, qv, Hv, Yv, Jv, Cv, u1, f1, $y, li, pb, Kn, wr, mr, ln, hc, lm, fm, np, Vd, Ev, Zi, Gv, Qv, e1, t1, i1, r1, a1, su, Ne, Bv, ut, $v, xi, Qd, ol, qt, _o, Jp, zn, hl, Ku, Mv, as, Za, ni, Wd, Tv, ma, al, Gp, Iv, Dv, Sv, c1, Fv, Rt;
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
  function qa(e) {
    const t = /* @__PURE__ */ Object.create(null);
    for (const i of e.split(",")) t[i] = 1;
    return (i) => i in t;
  }
  const Ue = {}, Yr = [], fi = () => {
  }, wu = () => false, ho = (e) => e.charCodeAt(0) === 111 && e.charCodeAt(1) === 110 && (e.charCodeAt(2) > 122 || e.charCodeAt(2) < 97), Ka = (e) => e.startsWith("onUpdate:"), dt = Object.assign, Ha = (e, t) => {
    const i = e.indexOf(t);
    i > -1 && e.splice(i, 1);
  }, Kh = Object.prototype.hasOwnProperty, Ve = (e, t) => Kh.call(e, t), ve = Array.isArray, Xr = (e) => wn(e) === "[object Map]", yu = (e) => wn(e) === "[object Set]", Ml = (e) => wn(e) === "[object Date]", Hh = (e) => wn(e) === "[object RegExp]", Te = (e) => typeof e == "function", lt = (e) => typeof e == "string", pi = (e) => typeof e == "symbol", $e = (e) => e !== null && typeof e == "object", bu = (e) => ($e(e) || Te(e)) && Te(e.then) && Te(e.catch), vu = Object.prototype.toString, wn = (e) => vu.call(e), Zh = (e) => wn(e).slice(8, -1), _u = (e) => wn(e) === "[object Object]", po = (e) => lt(e) && e !== "NaN" && e[0] !== "-" && "" + parseInt(e, 10) === e, Dn = qa(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"), go = (e) => {
    const t = /* @__PURE__ */ Object.create(null);
    return ((i) => t[i] || (t[i] = e(i)));
  }, Jh = /-\w/g, Yt = go((e) => e.replace(Jh, (t) => t.slice(1).toUpperCase())), Yh = /\B([A-Z])/g, Ji = go((e) => e.replace(Yh, "-$1").toLowerCase()), mo = go((e) => e.charAt(0).toUpperCase() + e.slice(1)), Go = go((e) => e ? `on${mo(e)}` : ""), zt = (e, t) => !Object.is(e, t), Fn = (e, ...t) => {
    for (let i = 0; i < e.length; i++) e[i](...t);
  }, Eu = (e, t, i, r = false) => {
    Object.defineProperty(e, t, {
      configurable: true,
      enumerable: false,
      writable: r,
      value: i
    });
  }, Xh = (e) => {
    const t = parseFloat(e);
    return isNaN(t) ? e : t;
  }, Qh = (e) => {
    const t = lt(e) ? Number(e) : NaN;
    return isNaN(t) ? e : t;
  };
  let Pl;
  const wo = () => Pl || (Pl = typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : typeof window < "u" ? window : typeof global < "u" ? global : {});
  yo = function(e) {
    if (ve(e)) {
      const t = {};
      for (let i = 0; i < e.length; i++) {
        const r = e[i], a = lt(r) ? rd(r) : yo(r);
        if (a) for (const c in a) t[c] = a[c];
      }
      return t;
    } else if (lt(e) || $e(e)) return e;
  };
  const ed = /;(?![^(]*\))/g, td = /:([^]+)/, id = /\/\*[^]*?\*\//g;
  function rd(e) {
    const t = {};
    return e.replace(id, "").split(ed).forEach((i) => {
      if (i) {
        const r = i.split(td);
        r.length > 1 && (t[r[0].trim()] = r[1].trim());
      }
    }), t;
  }
  Za = function(e) {
    let t = "";
    if (lt(e)) t = e;
    else if (ve(e)) for (let i = 0; i < e.length; i++) {
      const r = Za(e[i]);
      r && (t += r + " ");
    }
    else if ($e(e)) for (const i in e) e[i] && (t += i + " ");
    return t.trim();
  };
  const nd = "itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly", sd = qa(nd);
  function Iu(e) {
    return !!e || e === "";
  }
  function od(e, t) {
    if (e.length !== t.length) return false;
    let i = true;
    for (let r = 0; i && r < e.length; r++) i = Ja(e[r], t[r]);
    return i;
  }
  function Ja(e, t) {
    if (e === t) return true;
    let i = Ml(e), r = Ml(t);
    if (i || r) return i && r ? e.getTime() === t.getTime() : false;
    if (i = pi(e), r = pi(t), i || r) return e === t;
    if (i = ve(e), r = ve(t), i || r) return i && r ? od(e, t) : false;
    if (i = $e(e), r = $e(t), i || r) {
      if (!i || !r) return false;
      const a = Object.keys(e).length, c = Object.keys(t).length;
      if (a !== c) return false;
      for (const f in e) {
        const h = e.hasOwnProperty(f), p = t.hasOwnProperty(f);
        if (h && !p || !h && p || !Ja(e[f], t[f])) return false;
      }
    }
    return String(e) === String(t);
  }
  let Su, Tu, $o;
  Su = (e) => !!(e && e.__v_isRef === true);
  Di = (e) => lt(e) ? e : e == null ? "" : ve(e) || $e(e) && (e.toString === vu || !Te(e.toString)) ? Su(e) ? Di(e.value) : JSON.stringify(e, Tu, 2) : String(e);
  Tu = (e, t) => Su(t) ? Tu(e, t.value) : Xr(t) ? {
    [`Map(${t.size})`]: [
      ...t.entries()
    ].reduce((i, [r, a], c) => (i[$o(r, c) + " =>"] = a, i), {})
  } : yu(t) ? {
    [`Set(${t.size})`]: [
      ...t.values()
    ].map((i) => $o(i))
  } : pi(t) ? $o(t) : $e(t) && !ve(t) && !_u(t) ? String(t) : t;
  $o = (e, t = "") => {
    var i;
    return pi(e) ? `Symbol(${(i = e.description) != null ? i : t})` : e;
  };
  function ad(e) {
    return e == null ? "initial" : typeof e == "string" ? e === "" ? " " : e : String(e);
  }
  let Pt;
  class Mu {
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
  function Pu(e) {
    return new Mu(e);
  }
  ku = function() {
    return Pt;
  };
  ld = function(e, t = false) {
    Pt && Pt.cleanups.push(e);
  };
  let tt;
  const Bo = /* @__PURE__ */ new WeakSet();
  class Au {
    constructor(t) {
      this.fn = t, this.deps = void 0, this.depsTail = void 0, this.flags = 5, this.next = void 0, this.cleanup = void 0, this.scheduler = void 0, Pt && Pt.active && Pt.effects.push(this);
    }
    pause() {
      this.flags |= 64;
    }
    resume() {
      this.flags & 64 && (this.flags &= -65, Bo.has(this) && (Bo.delete(this), this.trigger()));
    }
    notify() {
      this.flags & 2 && !(this.flags & 32) || this.flags & 8 || Ru(this);
    }
    run() {
      if (!(this.flags & 1)) return this.fn();
      this.flags |= 2, kl(this), Ou(this);
      const t = tt, i = hi;
      tt = this, hi = true;
      try {
        return this.fn();
      } finally {
        Lu(this), tt = t, hi = i, this.flags &= -3;
      }
    }
    stop() {
      if (this.flags & 1) {
        for (let t = this.deps; t; t = t.nextDep) Qa(t);
        this.deps = this.depsTail = void 0, kl(this), this.onStop && this.onStop(), this.flags &= -2;
      }
    }
    trigger() {
      this.flags & 64 ? Bo.add(this) : this.scheduler ? this.scheduler() : this.runIfDirty();
    }
    runIfDirty() {
      da(this) && this.run();
    }
    get dirty() {
      return da(this);
    }
  }
  let Cu = 0, jn, Un;
  function Ru(e, t = false) {
    if (e.flags |= 8, t) {
      e.next = Un, Un = e;
      return;
    }
    e.next = jn, jn = e;
  }
  function Ya() {
    Cu++;
  }
  function Xa() {
    if (--Cu > 0) return;
    if (Un) {
      let t = Un;
      for (Un = void 0; t; ) {
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
  function Ou(e) {
    for (let t = e.deps; t; t = t.nextDep) t.version = -1, t.prevActiveLink = t.dep.activeLink, t.dep.activeLink = t;
  }
  function Lu(e) {
    let t, i = e.depsTail, r = i;
    for (; r; ) {
      const a = r.prevDep;
      r.version === -1 ? (r === i && (i = a), Qa(r), cd(r)) : t = r, r.dep.activeLink = r.prevActiveLink, r.prevActiveLink = void 0, r = a;
    }
    e.deps = t, e.depsTail = i;
  }
  function da(e) {
    for (let t = e.deps; t; t = t.nextDep) if (t.dep.version !== t.version || t.dep.computed && (xu(t.dep.computed) || t.dep.version !== t.version)) return true;
    return !!e._dirty;
  }
  function xu(e) {
    if (e.flags & 4 && !(e.flags & 16) || (e.flags &= -17, e.globalVersion === Jn) || (e.globalVersion = Jn, !e.isSSR && e.flags & 128 && (!e.deps && !e._dirty || !da(e)))) return;
    e.flags |= 2;
    const t = e.dep, i = tt, r = hi;
    tt = e, hi = true;
    try {
      Ou(e);
      const a = e.fn(e._value);
      (t.version === 0 || zt(a, e._value)) && (e.flags |= 128, e._value = a, t.version++);
    } catch (a) {
      throw t.version++, a;
    } finally {
      tt = i, hi = r, Lu(e), e.flags &= -3;
    }
  }
  function Qa(e, t = false) {
    const { dep: i, prevSub: r, nextSub: a } = e;
    if (r && (r.nextSub = a, e.prevSub = void 0), a && (a.prevSub = r, e.nextSub = void 0), i.subs === e && (i.subs = r, !r && i.computed)) {
      i.computed.flags &= -5;
      for (let c = i.computed.deps; c; c = c.nextDep) Qa(c, true);
    }
    !t && !--i.sc && i.map && i.map.delete(i.key);
  }
  function cd(e) {
    const { prevDep: t, nextDep: i } = e;
    t && (t.nextDep = i, e.prevDep = void 0), i && (i.prevDep = t, e.nextDep = void 0);
  }
  let hi = true;
  const Nu = [];
  function Vi() {
    Nu.push(hi), hi = false;
  }
  function qi() {
    const e = Nu.pop();
    hi = e === void 0 ? true : e;
  }
  function kl(e) {
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
  class ud {
    constructor(t, i) {
      this.sub = t, this.dep = i, this.version = i.version, this.nextDep = this.prevDep = this.nextSub = this.prevSub = this.prevActiveLink = void 0;
    }
  }
  class bo {
    constructor(t) {
      this.computed = t, this.version = 0, this.activeLink = void 0, this.subs = void 0, this.map = void 0, this.key = void 0, this.sc = 0, this.__v_skip = true;
    }
    track(t) {
      if (!tt || !hi || tt === this.computed) return;
      let i = this.activeLink;
      if (i === void 0 || i.sub !== tt) i = this.activeLink = new ud(tt, this), tt.deps ? (i.prevDep = tt.depsTail, tt.depsTail.nextDep = i, tt.depsTail = i) : tt.deps = tt.depsTail = i, Du(i);
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
      Ya();
      try {
        for (let i = this.subs; i; i = i.prevSub) i.sub.notify() && i.sub.dep.notify();
      } finally {
        Xa();
      }
    }
  }
  function Du(e) {
    if (e.dep.sc++, e.sub.flags & 4) {
      const t = e.dep.computed;
      if (t && !e.dep.subs) {
        t.flags |= 20;
        for (let r = t.deps; r; r = r.nextDep) Du(r);
      }
      const i = e.dep.subs;
      i !== e && (e.prevSub = i, i && (i.nextSub = e)), e.dep.subs = e;
    }
  }
  const Gs = /* @__PURE__ */ new WeakMap(), xr = /* @__PURE__ */ Symbol(""), pa = /* @__PURE__ */ Symbol(""), Yn = /* @__PURE__ */ Symbol("");
  function kt(e, t, i) {
    if (hi && tt) {
      let r = Gs.get(e);
      r || Gs.set(e, r = /* @__PURE__ */ new Map());
      let a = r.get(i);
      a || (r.set(i, a = new bo()), a.map = r, a.key = i), a.track();
    }
  }
  function zi(e, t, i, r, a, c) {
    const f = Gs.get(e);
    if (!f) {
      Jn++;
      return;
    }
    const h = (p) => {
      p && p.trigger();
    };
    if (Ya(), t === "clear") f.forEach(h);
    else {
      const p = ve(e), y = p && po(i);
      if (p && i === "length") {
        const g = Number(r);
        f.forEach((I, C) => {
          (C === "length" || C === Yn || !pi(C) && C >= g) && h(I);
        });
      } else switch ((i !== void 0 || f.has(void 0)) && h(f.get(i)), y && h(f.get(Yn)), t) {
        case "add":
          p ? y && h(f.get("length")) : (h(f.get(xr)), Xr(e) && h(f.get(pa)));
          break;
        case "delete":
          p || (h(f.get(xr)), Xr(e) && h(f.get(pa)));
          break;
        case "set":
          Xr(e) && h(f.get(xr));
          break;
      }
    }
    Xa();
  }
  function fd(e, t) {
    const i = Gs.get(e);
    return i && i.get(t);
  }
  function Gr(e) {
    const t = Ne(e);
    return t === e ? t : (kt(t, "iterate", Yn), Jt(e) ? t : t.map(gi));
  }
  function vo(e) {
    return kt(e = Ne(e), "iterate", Yn), e;
  }
  function or(e, t) {
    return Ki(e) ? sn(Bi(e) ? gi(t) : t) : gi(t);
  }
  const hd = {
    __proto__: null,
    [Symbol.iterator]() {
      return Wo(this, Symbol.iterator, (e) => or(this, e));
    },
    concat(...e) {
      return Gr(this).concat(...e.map((t) => ve(t) ? Gr(t) : t));
    },
    entries() {
      return Wo(this, "entries", (e) => (e[1] = or(this, e[1]), e));
    },
    every(e, t) {
      return Li(this, "every", e, t, void 0, arguments);
    },
    filter(e, t) {
      return Li(this, "filter", e, t, (i) => i.map((r) => or(this, r)), arguments);
    },
    find(e, t) {
      return Li(this, "find", e, t, (i) => or(this, i), arguments);
    },
    findIndex(e, t) {
      return Li(this, "findIndex", e, t, void 0, arguments);
    },
    findLast(e, t) {
      return Li(this, "findLast", e, t, (i) => or(this, i), arguments);
    },
    findLastIndex(e, t) {
      return Li(this, "findLastIndex", e, t, void 0, arguments);
    },
    forEach(e, t) {
      return Li(this, "forEach", e, t, void 0, arguments);
    },
    includes(...e) {
      return Vo(this, "includes", e);
    },
    indexOf(...e) {
      return Vo(this, "indexOf", e);
    },
    join(e) {
      return Gr(this).join(e);
    },
    lastIndexOf(...e) {
      return Vo(this, "lastIndexOf", e);
    },
    map(e, t) {
      return Li(this, "map", e, t, void 0, arguments);
    },
    pop() {
      return In(this, "pop");
    },
    push(...e) {
      return In(this, "push", e);
    },
    reduce(e, ...t) {
      return Al(this, "reduce", e, t);
    },
    reduceRight(e, ...t) {
      return Al(this, "reduceRight", e, t);
    },
    shift() {
      return In(this, "shift");
    },
    some(e, t) {
      return Li(this, "some", e, t, void 0, arguments);
    },
    splice(...e) {
      return In(this, "splice", e);
    },
    toReversed() {
      return Gr(this).toReversed();
    },
    toSorted(e) {
      return Gr(this).toSorted(e);
    },
    toSpliced(...e) {
      return Gr(this).toSpliced(...e);
    },
    unshift(...e) {
      return In(this, "unshift", e);
    },
    values() {
      return Wo(this, "values", (e) => or(this, e));
    }
  };
  function Wo(e, t, i) {
    const r = vo(e), a = r[t]();
    return r !== e && !Jt(e) && (a._next = a.next, a.next = () => {
      const c = a._next();
      return c.done || (c.value = i(c.value)), c;
    }), a;
  }
  const dd = Array.prototype;
  function Li(e, t, i, r, a, c) {
    const f = vo(e), h = f !== e && !Jt(e), p = f[t];
    if (p !== dd[t]) {
      const I = p.apply(e, c);
      return h ? gi(I) : I;
    }
    let y = i;
    f !== e && (h ? y = function(I, C) {
      return i.call(this, or(e, I), C, e);
    } : i.length > 2 && (y = function(I, C) {
      return i.call(this, I, C, e);
    }));
    const g = p.call(f, y, r);
    return h && a ? a(g) : g;
  }
  function Al(e, t, i, r) {
    const a = vo(e);
    let c = i;
    return a !== e && (Jt(e) ? i.length > 3 && (c = function(f, h, p) {
      return i.call(this, f, h, p, e);
    }) : c = function(f, h, p) {
      return i.call(this, f, or(e, h), p, e);
    }), a[t](c, ...r);
  }
  function Vo(e, t, i) {
    const r = Ne(e);
    kt(r, "iterate", Yn);
    const a = r[t](...i);
    return (a === -1 || a === false) && Eo(i[0]) ? (i[0] = Ne(i[0]), r[t](...i)) : a;
  }
  function In(e, t, i = []) {
    Vi(), Ya();
    const r = Ne(e)[t].apply(e, i);
    return Xa(), qi(), r;
  }
  const pd = qa("__proto__,__v_isRef,__isVue"), Fu = new Set(Object.getOwnPropertyNames(Symbol).filter((e) => e !== "arguments" && e !== "caller").map((e) => Symbol[e]).filter(pi));
  function gd(e) {
    pi(e) || (e = String(e));
    const t = Ne(this);
    return kt(t, "has", e), t.hasOwnProperty(e);
  }
  class ju {
    constructor(t = false, i = false) {
      this._isReadonly = t, this._isShallow = i;
    }
    get(t, i, r) {
      if (i === "__v_skip") return t.__v_skip;
      const a = this._isReadonly, c = this._isShallow;
      if (i === "__v_isReactive") return !a;
      if (i === "__v_isReadonly") return a;
      if (i === "__v_isShallow") return c;
      if (i === "__v_raw") return r === (a ? c ? Td : $u : c ? Gu : zu).get(t) || Object.getPrototypeOf(t) === Object.getPrototypeOf(r) ? t : void 0;
      const f = ve(t);
      if (!a) {
        let p;
        if (f && (p = hd[i])) return p;
        if (i === "hasOwnProperty") return gd;
      }
      const h = Reflect.get(t, i, ct(t) ? t : r);
      if ((pi(i) ? Fu.has(i) : pd(i)) || (a || kt(t, "get", i), c)) return h;
      if (ct(h)) {
        const p = f && po(i) ? h : h.value;
        return a && $e(p) ? ma(p) : p;
      }
      return $e(h) ? a ? ma(h) : _o(h) : h;
    }
  }
  class Uu extends ju {
    constructor(t = false) {
      super(false, t);
    }
    set(t, i, r, a) {
      let c = t[i];
      const f = ve(t) && po(i);
      if (!this._isShallow) {
        const y = Ki(c);
        if (!Jt(r) && !Ki(r) && (c = Ne(c), r = Ne(r)), !f && ct(c) && !ct(r)) return y || (c.value = r), true;
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
      return (!pi(i) || !Fu.has(i)) && kt(t, "has", i), r;
    }
    ownKeys(t) {
      return kt(t, "iterate", ve(t) ? "length" : xr), Reflect.ownKeys(t);
    }
  }
  class md extends ju {
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
  const wd = new Uu(), yd = new md(), bd = new Uu(true);
  const ga = (e) => e, gs = (e) => Reflect.getPrototypeOf(e);
  function vd(e, t, i) {
    return function(...r) {
      const a = this.__v_raw, c = Ne(a), f = Xr(c), h = e === "entries" || e === Symbol.iterator && f, p = e === "keys" && f, y = a[e](...r), g = i ? ga : t ? sn : gi;
      return !t && kt(c, "iterate", p ? pa : xr), dt(Object.create(y), {
        next() {
          const { value: I, done: C } = y.next();
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
  function ms(e) {
    return function(...t) {
      return e === "delete" ? false : e === "clear" ? void 0 : this;
    };
  }
  function _d(e, t) {
    const i = {
      get(a) {
        const c = this.__v_raw, f = Ne(c), h = Ne(a);
        e || (zt(a, h) && kt(f, "get", a), kt(f, "get", h));
        const { has: p } = gs(f), y = t ? ga : e ? sn : gi;
        if (p.call(f, a)) return y(c.get(a));
        if (p.call(f, h)) return y(c.get(h));
        c !== f && c.get(a);
      },
      get size() {
        const a = this.__v_raw;
        return !e && kt(Ne(a), "iterate", xr), a.size;
      },
      has(a) {
        const c = this.__v_raw, f = Ne(c), h = Ne(a);
        return e || (zt(a, h) && kt(f, "has", a), kt(f, "has", h)), a === h ? c.has(a) : c.has(a) || c.has(h);
      },
      forEach(a, c) {
        const f = this, h = f.__v_raw, p = Ne(h), y = t ? ga : e ? sn : gi;
        return !e && kt(p, "iterate", xr), h.forEach((g, I) => a.call(c, y(g), y(I), f));
      }
    };
    return dt(i, e ? {
      add: ms("add"),
      set: ms("set"),
      delete: ms("delete"),
      clear: ms("clear")
    } : {
      add(a) {
        !t && !Jt(a) && !Ki(a) && (a = Ne(a));
        const c = Ne(this);
        return gs(c).has.call(c, a) || (c.add(a), zi(c, "add", a, a)), this;
      },
      set(a, c) {
        !t && !Jt(c) && !Ki(c) && (c = Ne(c));
        const f = Ne(this), { has: h, get: p } = gs(f);
        let y = h.call(f, a);
        y || (a = Ne(a), y = h.call(f, a));
        const g = p.call(f, a);
        return f.set(a, c), y ? zt(c, g) && zi(f, "set", a, c) : zi(f, "add", a, c), this;
      },
      delete(a) {
        const c = Ne(this), { has: f, get: h } = gs(c);
        let p = f.call(c, a);
        p || (a = Ne(a), p = f.call(c, a)), h && h.call(c, a);
        const y = c.delete(a);
        return p && zi(c, "delete", a, void 0), y;
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
      i[a] = vd(a, e, t);
    }), i;
  }
  function el(e, t) {
    const i = _d(e, t);
    return (r, a, c) => a === "__v_isReactive" ? !e : a === "__v_isReadonly" ? e : a === "__v_raw" ? r : Reflect.get(Ve(i, a) && a in r ? i : r, a, c);
  }
  const Ed = {
    get: el(false, false)
  }, Id = {
    get: el(false, true)
  }, Sd = {
    get: el(true, false)
  };
  const zu = /* @__PURE__ */ new WeakMap(), Gu = /* @__PURE__ */ new WeakMap(), $u = /* @__PURE__ */ new WeakMap(), Td = /* @__PURE__ */ new WeakMap();
  function Md(e) {
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
  function Pd(e) {
    return e.__v_skip || !Object.isExtensible(e) ? 0 : Md(Zh(e));
  }
  _o = function(e) {
    return Ki(e) ? e : tl(e, false, wd, Ed, zu);
  };
  kd = function(e) {
    return tl(e, false, bd, Id, Gu);
  };
  ma = function(e) {
    return tl(e, true, yd, Sd, $u);
  };
  function tl(e, t, i, r, a) {
    if (!$e(e) || e.__v_raw && !(t && e.__v_isReactive)) return e;
    const c = Pd(e);
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
  function Jt(e) {
    return !!(e && e.__v_isShallow);
  }
  function Eo(e) {
    return e ? !!e.__v_raw : false;
  }
  Ne = function(e) {
    const t = e && e.__v_raw;
    return t ? Ne(t) : e;
  };
  il = function(e) {
    return !Ve(e, "__v_skip") && Object.isExtensible(e) && Eu(e, "__v_skip", true), e;
  };
  const gi = (e) => $e(e) ? _o(e) : e, sn = (e) => $e(e) ? ma(e) : e;
  ct = function(e) {
    return e ? e.__v_isRef === true : false;
  };
  qt = function(e) {
    return Bu(e, false);
  };
  Ad = function(e) {
    return Bu(e, true);
  };
  function Bu(e, t) {
    return ct(e) ? e : new Cd(e, t);
  }
  class Cd {
    constructor(t, i) {
      this.dep = new bo(), this.__v_isRef = true, this.__v_isShallow = false, this._rawValue = i ? t : Ne(t), this._value = i ? t : gi(t), this.__v_isShallow = i;
    }
    get value() {
      return this.dep.track(), this._value;
    }
    set value(t) {
      const i = this._rawValue, r = this.__v_isShallow || Jt(t) || Ki(t);
      t = r ? t : Ne(t), zt(t, i) && (this._rawValue = t, this._value = r ? t : gi(t), this.dep.trigger());
    }
  }
  Qr = function(e) {
    return ct(e) ? e.value : e;
  };
  Ev = function(e) {
    return Te(e) ? e() : Qr(e);
  };
  const Rd = {
    get: (e, t, i) => t === "__v_raw" ? e : Qr(Reflect.get(e, t, i)),
    set: (e, t, i, r) => {
      const a = e[t];
      return ct(a) && !ct(i) ? (a.value = i, true) : Reflect.set(e, t, i, r);
    }
  };
  function Wu(e) {
    return Bi(e) ? e : new Proxy(e, Rd);
  }
  class Od {
    constructor(t) {
      this.__v_isRef = true, this._value = void 0;
      const i = this.dep = new bo(), { get: r, set: a } = t(i.track.bind(i), i.trigger.bind(i));
      this._get = r, this._set = a;
    }
    get value() {
      return this._value = this._get();
    }
    set value(t) {
      this._set(t);
    }
  }
  function Ld(e) {
    return new Od(e);
  }
  xd = function(e) {
    const t = ve(e) ? new Array(e.length) : {};
    for (const i in e) t[i] = Vu(e, i);
    return t;
  };
  class Nd {
    constructor(t, i, r) {
      this._object = t, this._key = i, this._defaultValue = r, this.__v_isRef = true, this._value = void 0, this._raw = Ne(t);
      let a = true, c = t;
      if (!ve(t) || !po(String(i))) do
        a = !Eo(c) || Jt(c);
      while (a && (c = c.__v_raw));
      this._shallow = a;
    }
    get value() {
      let t = this._object[this._key];
      return this._shallow && (t = Qr(t)), this._value = t === void 0 ? this._defaultValue : t;
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
      return fd(this._raw, this._key);
    }
  }
  class Dd {
    constructor(t) {
      this._getter = t, this.__v_isRef = true, this.__v_isReadonly = true, this._value = void 0;
    }
    get value() {
      return this._value = this._getter();
    }
  }
  Iv = function(e, t, i) {
    return ct(e) ? e : Te(e) ? new Dd(e) : $e(e) && arguments.length > 1 ? Vu(e, t, i) : qt(e);
  };
  function Vu(e, t, i) {
    return new Nd(e, t, i);
  }
  class Fd {
    constructor(t, i, r) {
      this.fn = t, this.setter = i, this._value = void 0, this.dep = new bo(this), this.__v_isRef = true, this.deps = void 0, this.depsTail = void 0, this.flags = 16, this.globalVersion = Jn - 1, this.next = void 0, this.effect = this, this.__v_isReadonly = !i, this.isSSR = r;
    }
    notify() {
      if (this.flags |= 16, !(this.flags & 8) && tt !== this) return Ru(this, true), true;
    }
    get value() {
      const t = this.dep.track();
      return xu(this), t && (t.version = this.dep.version), this._value;
    }
    set value(t) {
      this.setter && this.setter(t);
    }
  }
  function jd(e, t, i = false) {
    let r, a;
    return Te(e) ? r = e : (r = e.get, a = e.set), new Fd(r, a, i);
  }
  const ws = {}, $s = /* @__PURE__ */ new WeakMap();
  let Ar;
  function Ud(e, t = false, i = Ar) {
    if (i) {
      let r = $s.get(i);
      r || $s.set(i, r = []), r.push(e);
    }
  }
  function zd(e, t, i = Ue) {
    const { immediate: r, deep: a, once: c, scheduler: f, augmentJob: h, call: p } = i, y = ($) => a ? $ : Jt($) || a === false || a === 0 ? Gi($, 1) : Gi($);
    let g, I, C, A, j = false, L = false;
    if (ct(e) ? (I = () => e.value, j = Jt(e)) : Bi(e) ? (I = () => y(e), j = true) : ve(e) ? (L = true, j = e.some(($) => Bi($) || Jt($)), I = () => e.map(($) => {
      if (ct($)) return $.value;
      if (Bi($)) return y($);
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
    const pe = ku(), se = () => {
      g.stop(), pe && pe.active && Ha(pe.effects, g);
    };
    if (c && t) {
      const $ = t;
      t = (...ue) => {
        $(...ue), se();
      };
    }
    let U = L ? new Array(e.length).fill(ws) : ws;
    const Y = ($) => {
      if (!(!(g.flags & 1) || !g.dirty && !$)) if (t) {
        const ue = g.run();
        if (a || j || (L ? ue.some((ge, re) => zt(ge, U[re])) : zt(ue, U))) {
          C && C();
          const ge = Ar;
          Ar = g;
          try {
            const re = [
              ue,
              U === ws ? void 0 : L && U[0] === ws ? [] : U,
              A
            ];
            U = ue, p ? p(t, 3, re) : t(...re);
          } finally {
            Ar = ge;
          }
        }
      } else g.run();
    };
    return h && h(Y), g = new Au(I), g.scheduler = f ? () => f(Y, false) : Y, A = ($) => Ud($, false, g), C = g.onStop = () => {
      const $ = $s.get(g);
      if ($) {
        if (p) p($, 4);
        else for (const ue of $) ue();
        $s.delete(g);
      }
    }, t ? r ? Y(true) : U = g.run() : f ? f(Y.bind(null, true), true) : g.run(), se.pause = g.pause.bind(g), se.resume = g.resume.bind(g), se.stop = se, se;
  }
  function Gi(e, t = 1 / 0, i) {
    if (t <= 0 || !$e(e) || e.__v_skip || (i = i || /* @__PURE__ */ new Map(), (i.get(e) || 0) >= t)) return e;
    if (i.set(e, t), t--, ct(e)) Gi(e.value, t, i);
    else if (ve(e)) for (let r = 0; r < e.length; r++) Gi(e[r], t, i);
    else if (yu(e) || Xr(e)) e.forEach((r) => {
      Gi(r, t, i);
    });
    else if (_u(e)) {
      for (const r in e) Gi(e[r], t, i);
      for (const r of Object.getOwnPropertySymbols(e)) Object.prototype.propertyIsEnumerable.call(e, r) && Gi(e[r], t, i);
    }
    return e;
  }
  function os(e, t, i, r) {
    try {
      return r ? e(...r) : e();
    } catch (a) {
      Io(a, t, i);
    }
  }
  function mi(e, t, i, r) {
    if (Te(e)) {
      const a = os(e, t, i, r);
      return a && bu(a) && a.catch((c) => {
        Io(c, t, i);
      }), a;
    }
    if (ve(e)) {
      const a = [];
      for (let c = 0; c < e.length; c++) a.push(mi(e[c], t, i, r));
      return a;
    }
  }
  function Io(e, t, i, r = true) {
    const a = t ? t.vnode : null, { errorHandler: c, throwUnhandledErrorInProduction: f } = t && t.appContext.config || Ue;
    if (t) {
      let h = t.parent;
      const p = t.proxy, y = `https://vuejs.org/error-reference/#runtime-${i}`;
      for (; h; ) {
        const g = h.ec;
        if (g) {
          for (let I = 0; I < g.length; I++) if (g[I](e, p, y) === false) return;
        }
        h = h.parent;
      }
      if (c) {
        Vi(), os(c, null, 10, [
          e,
          p,
          y
        ]), qi();
        return;
      }
    }
    Gd(e, i, a, r, f);
  }
  function Gd(e, t, i, r = true, a = false) {
    if (a) throw e;
    console.error(e);
  }
  const Dt = [];
  let Ei = -1;
  const en = [];
  let ar = null, Zr = 0;
  const qu = Promise.resolve();
  let Bs = null;
  Ku = function(e) {
    const t = Bs || qu;
    return e ? t.then(this ? e.bind(this) : e) : t;
  };
  function $d(e) {
    let t = Ei + 1, i = Dt.length;
    for (; t < i; ) {
      const r = t + i >>> 1, a = Dt[r], c = Xn(a);
      c < e || c === e && a.flags & 2 ? t = r + 1 : i = r;
    }
    return t;
  }
  function rl(e) {
    if (!(e.flags & 1)) {
      const t = Xn(e), i = Dt[Dt.length - 1];
      !i || !(e.flags & 2) && t >= Xn(i) ? Dt.push(e) : Dt.splice($d(t), 0, e), e.flags |= 1, Hu();
    }
  }
  function Hu() {
    Bs || (Bs = qu.then(Yu));
  }
  function Zu(e) {
    ve(e) ? en.push(...e) : ar && e.id === -1 ? ar.splice(Zr + 1, 0, e) : e.flags & 1 || (en.push(e), e.flags |= 1), Hu();
  }
  function Cl(e, t, i = Ei + 1) {
    for (; i < Dt.length; i++) {
      const r = Dt[i];
      if (r && r.flags & 2) {
        if (e && r.id !== e.uid) continue;
        Dt.splice(i, 1), i--, r.flags & 4 && (r.flags &= -2), r(), r.flags & 4 || (r.flags &= -2);
      }
    }
  }
  function Ju(e) {
    if (en.length) {
      const t = [
        ...new Set(en)
      ].sort((i, r) => Xn(i) - Xn(r));
      if (en.length = 0, ar) {
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
  const Xn = (e) => e.id == null ? e.flags & 2 ? -1 : 1 / 0 : e.id;
  function Yu(e) {
    try {
      for (Ei = 0; Ei < Dt.length; Ei++) {
        const t = Dt[Ei];
        t && !(t.flags & 8) && (t.flags & 4 && (t.flags &= -2), os(t, t.i, t.i ? 15 : 14), t.flags & 4 || (t.flags &= -2));
      }
    } finally {
      for (; Ei < Dt.length; Ei++) {
        const t = Dt[Ei];
        t && (t.flags &= -2);
      }
      Ei = -1, Dt.length = 0, Ju(), Bs = null, (Dt.length || en.length) && Yu();
    }
  }
  let It = null, Xu = null;
  function Ws(e) {
    const t = It;
    return It = e, Xu = e && e.type.__scopeId || null, t;
  }
  Bd = function(e, t = It, i) {
    if (!t || e._n) return e;
    const r = (...a) => {
      r._d && Js(-1);
      const c = Ws(t);
      let f;
      try {
        f = e(...a);
      } finally {
        Ws(c), r._d && Js(1);
      }
      return f;
    };
    return r._n = true, r._c = true, r._d = true, r;
  };
  Sv = function(e, t) {
    if (It === null) return e;
    const i = Ao(It), r = e.dirs || (e.dirs = []);
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
  Wd = function(e, t) {
    if (Ct) {
      let i = Ct.provides;
      const r = Ct.parent && Ct.parent.provides;
      r === i && (i = Ct.provides = Object.create(r)), i[e] = t;
    }
  };
  zn = function(e, t, i = false) {
    const r = gr();
    if (r || Nr) {
      let a = Nr ? Nr._context.provides : r ? r.parent == null || r.ce ? r.vnode.appContext && r.vnode.appContext.provides : r.parent.provides : void 0;
      if (a && e in a) return a[e];
      if (arguments.length > 1) return i && Te(t) ? t.call(r && r.proxy) : t;
    }
  };
  Vd = function() {
    return !!(gr() || Nr);
  };
  const qd = /* @__PURE__ */ Symbol.for("v-scx"), Kd = () => zn(qd);
  Tv = function(e, t) {
    return So(e, null, t);
  };
  function Hd(e, t) {
    return So(e, null, {
      flush: "sync"
    });
  }
  tn = function(e, t, i) {
    return So(e, t, i);
  };
  function So(e, t, i = Ue) {
    const { immediate: r, deep: a, flush: c, once: f } = i, h = dt({}, i), p = t && r || !t && c !== "post";
    let y;
    if (ts) {
      if (c === "sync") {
        const A = Kd();
        y = A.__watcherHandles || (A.__watcherHandles = []);
      } else if (!p) {
        const A = () => {
        };
        return A.stop = fi, A.resume = fi, A.pause = fi, A;
      }
    }
    const g = Ct;
    h.call = (A, j, L) => mi(A, g, j, L);
    let I = false;
    c === "post" ? h.scheduler = (A) => {
      mt(A, g && g.suspense);
    } : c !== "sync" && (I = true, h.scheduler = (A, j) => {
      j ? A() : rl(A);
    }), h.augmentJob = (A) => {
      t && (A.flags |= 4), I && (A.flags |= 2, g && (A.id = g.uid, A.i = g));
    };
    const C = zd(e, t, h);
    return ts && (y ? y.push(C) : p && C()), C;
  }
  function Zd(e, t, i) {
    const r = this.proxy, a = lt(e) ? e.includes(".") ? Qu(r, e) : () => r[e] : e.bind(r, r);
    let c;
    Te(t) ? c = t : (c = t.handler, i = t);
    const f = ls(this), h = So(a, c.bind(r), i);
    return f(), h;
  }
  function Qu(e, t) {
    const i = t.split(".");
    return () => {
      let r = e;
      for (let a = 0; a < i.length && r; a++) r = r[i[a]];
      return r;
    };
  }
  const ef = /* @__PURE__ */ Symbol("_vte"), tf = (e) => e.__isTeleport, Gn = (e) => e && (e.disabled || e.disabled === ""), Rl = (e) => e && (e.defer || e.defer === ""), Ol = (e) => typeof SVGElement < "u" && e instanceof SVGElement, Ll = (e) => typeof MathMLElement == "function" && e instanceof MathMLElement, wa = (e, t) => {
    const i = e && e.to;
    return lt(i) ? t ? t(i) : null : i;
  }, rf = {
    name: "Teleport",
    __isTeleport: true,
    process(e, t, i, r, a, c, f, h, p, y) {
      const { mc: g, pc: I, pbc: C, o: { insert: A, querySelector: j, createText: L, createComment: pe } } = y, se = Gn(t.props);
      let { shapeFlag: U, children: Y, dynamicChildren: $ } = t;
      if (e == null) {
        const ue = t.el = L(""), ge = t.anchor = L("");
        A(ue, i, r), A(ge, i, r);
        const re = (Q, me) => {
          U & 16 && g(Y, Q, me, a, c, f, h, p);
        }, fe = () => {
          const Q = t.target = wa(t.props, j), me = ya(Q, t, L, A);
          Q && (f !== "svg" && Ol(Q) ? f = "svg" : f !== "mathml" && Ll(Q) && (f = "mathml"), a && a.isCE && (a.ce._teleportTargets || (a.ce._teleportTargets = /* @__PURE__ */ new Set())).add(Q), se || (re(Q, me), Cs(t, false)));
        };
        se && (re(i, ge), Cs(t, true)), Rl(t.props) ? (t.el.__isMounted = false, mt(() => {
          fe(), delete t.el.__isMounted;
        }, c)) : fe();
      } else {
        if (Rl(t.props) && e.el.__isMounted === false) {
          mt(() => {
            rf.process(e, t, i, r, a, c, f, h, p, y);
          }, c);
          return;
        }
        t.el = e.el, t.targetStart = e.targetStart;
        const ue = t.anchor = e.anchor, ge = t.target = e.target, re = t.targetAnchor = e.targetAnchor, fe = Gn(e.props), Q = fe ? i : ge, me = fe ? ue : re;
        if (f === "svg" || Ol(ge) ? f = "svg" : (f === "mathml" || Ll(ge)) && (f = "mathml"), $ ? (C(e.dynamicChildren, $, Q, a, c, f, h), ul(e, t, true)) : p || I(e, t, Q, me, a, c, f, h, false), se) fe ? t.props && e.props && t.props.to !== e.props.to && (t.props.to = e.props.to) : ys(t, i, ue, y, 1);
        else if ((t.props && t.props.to) !== (e.props && e.props.to)) {
          const ke = t.target = wa(t.props, j);
          ke && ys(t, ke, null, y, 0);
        } else fe && ys(t, ge, re, y, 1);
        Cs(t, se);
      }
    },
    remove(e, t, i, { um: r, o: { remove: a } }, c) {
      const { shapeFlag: f, children: h, anchor: p, targetStart: y, targetAnchor: g, target: I, props: C } = e;
      if (I && (a(y), a(g)), c && a(p), f & 16) {
        const A = c || !Gn(C);
        for (let j = 0; j < h.length; j++) {
          const L = h[j];
          r(L, t, i, A, !!L.dynamicChildren);
        }
      }
    },
    move: ys,
    hydrate: Jd
  };
  function ys(e, t, i, { o: { insert: r }, m: a }, c = 2) {
    c === 0 && r(e.targetAnchor, t, i);
    const { el: f, anchor: h, shapeFlag: p, children: y, props: g } = e, I = c === 2;
    if (I && r(f, t, i), (!I || Gn(g)) && p & 16) for (let C = 0; C < y.length; C++) a(y[C], t, i, 2);
    I && r(h, t, i);
  }
  function Jd(e, t, i, r, a, c, { o: { nextSibling: f, parentNode: h, querySelector: p, insert: y, createText: g } }, I) {
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
    const j = t.target = wa(t.props, p), L = Gn(t.props);
    if (j) {
      const pe = j._lpa || j.firstChild;
      t.shapeFlag & 16 && (L ? (A(e, t), C(j, pe), t.targetAnchor || ya(j, t, g, y, h(e) === j ? e : null)) : (t.anchor = f(e), C(j, pe), t.targetAnchor || ya(j, t, g, y), I(pe && f(pe), t, j, i, r, a, c))), Cs(t, L);
    } else L && t.shapeFlag & 16 && (A(e, t), t.targetStart = e, t.targetAnchor = f(e));
    return t.anchor && f(t.anchor);
  }
  Mv = rf;
  function Cs(e, t) {
    const i = e.ctx;
    if (i && i.ut) {
      let r, a;
      for (t ? (r = e.el, a = e.anchor) : (r = e.targetStart, a = e.targetAnchor); r && r !== a; ) r.nodeType === 1 && r.setAttribute("data-v-owner", i.uid), r = r.nextSibling;
      i.ut();
    }
  }
  function ya(e, t, i, r, a = null) {
    const c = t.targetStart = i(""), f = t.targetAnchor = i("");
    return c[ef] = f, e && (r(c, e, a), r(f, e, a)), f;
  }
  const Si = /* @__PURE__ */ Symbol("_leaveCb"), Sn = /* @__PURE__ */ Symbol("_enterCb");
  function nf() {
    const e = {
      isMounted: false,
      isLeaving: false,
      isUnmounting: false,
      leavingVNodes: /* @__PURE__ */ new Map()
    };
    return as(() => {
      e.isMounted = true;
    }), ol(() => {
      e.isUnmounting = true;
    }), e;
  }
  const ti = [
    Function,
    Array
  ], sf = {
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
  }, of = (e) => {
    const t = e.subTree;
    return t.component ? of(t.component) : t;
  }, Yd = {
    name: "BaseTransition",
    props: sf,
    setup(e, { slots: t }) {
      const i = gr(), r = nf();
      return () => {
        const a = t.default && nl(t.default(), true);
        if (!a || !a.length) return;
        const c = af(a), f = Ne(e), { mode: h } = f;
        if (r.isLeaving) return qo(c);
        const p = xl(c);
        if (!p) return qo(c);
        let y = Qn(p, f, r, i, (I) => y = I);
        p.type !== Et && dr(p, y);
        let g = i.subTree && xl(i.subTree);
        if (g && g.type !== Et && !lr(g, p) && of(i).type !== Et) {
          let I = Qn(g, f, r, i);
          if (dr(g, I), h === "out-in" && p.type !== Et) return r.isLeaving = true, I.afterLeave = () => {
            r.isLeaving = false, i.job.flags & 8 || i.update(), delete I.afterLeave, g = void 0;
          }, qo(c);
          h === "in-out" && p.type !== Et ? I.delayLeave = (C, A, j) => {
            const L = lf(r, g);
            L[String(g.key)] = g, C[Si] = () => {
              A(), C[Si] = void 0, delete y.delayedLeave, g = void 0;
            }, y.delayedLeave = () => {
              j(), delete y.delayedLeave, g = void 0;
            };
          } : g = void 0;
        } else g && (g = void 0);
        return c;
      };
    }
  };
  function af(e) {
    let t = e[0];
    if (e.length > 1) {
      for (const i of e) if (i.type !== Et) {
        t = i;
        break;
      }
    }
    return t;
  }
  const Xd = Yd;
  function lf(e, t) {
    const { leavingVNodes: i } = e;
    let r = i.get(t.type);
    return r || (r = /* @__PURE__ */ Object.create(null), i.set(t.type, r)), r;
  }
  function Qn(e, t, i, r, a) {
    const { appear: c, mode: f, persisted: h = false, onBeforeEnter: p, onEnter: y, onAfterEnter: g, onEnterCancelled: I, onBeforeLeave: C, onLeave: A, onAfterLeave: j, onLeaveCancelled: L, onBeforeAppear: pe, onAppear: se, onAfterAppear: U, onAppearCancelled: Y } = t, $ = String(e.key), ue = lf(i, e), ge = (Q, me) => {
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
        let me = y, ke = g, he = I;
        if (!i.isMounted) if (c) me = se || y, ke = U || g, he = Y || I;
        else return;
        let Be = false;
        Q[Sn] = ($t) => {
          Be || (Be = true, $t ? ge(he, [
            Q
          ]) : ge(ke, [
            Q
          ]), fe.delayedLeave && fe.delayedLeave(), Q[Sn] = void 0);
        };
        const pt = Q[Sn].bind(null, false);
        me ? re(me, [
          Q,
          pt
        ]) : pt();
      },
      leave(Q, me) {
        const ke = String(e.key);
        if (Q[Sn] && Q[Sn](true), i.isUnmounting) return me();
        ge(C, [
          Q
        ]);
        let he = false;
        Q[Si] = (pt) => {
          he || (he = true, me(), pt ? ge(L, [
            Q
          ]) : ge(j, [
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
        const me = Qn(Q, t, i, r, a);
        return a && a(me), me;
      }
    };
    return fe;
  }
  function qo(e) {
    if (To(e)) return e = Hi(e), e.children = null, e;
  }
  function xl(e) {
    if (!To(e)) return tf(e.type) && e.children ? af(e.children) : e;
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
  function nl(e, t = false, i) {
    let r = [], a = 0;
    for (let c = 0; c < e.length; c++) {
      let f = e[c];
      const h = i == null ? f.key : String(i) + String(f.key != null ? f.key : c);
      f.type === At ? (f.patchFlag & 128 && a++, r = r.concat(nl(f.children, t, h))) : (t || f.type !== Et) && r.push(h != null ? Hi(f, {
        key: h
      }) : f);
    }
    if (a > 1) for (let c = 0; c < r.length; c++) r[c].patchFlag = -2;
    return r;
  }
  Qd = function(e, t) {
    return Te(e) ? dt({
      name: e.name
    }, t, {
      setup: e
    }) : e;
  };
  function cf(e) {
    e.ids = [
      e.ids[0] + e.ids[2]++ + "-",
      0,
      0
    ];
  }
  Pv = function(e) {
    const t = gr(), i = Ad(null);
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
  function Nl(e, t) {
    let i;
    return !!((i = Object.getOwnPropertyDescriptor(e, t)) && !i.configurable);
  }
  const Vs = /* @__PURE__ */ new WeakMap();
  function $n(e, t, i, r, a = false) {
    if (ve(e)) {
      e.forEach((L, pe) => $n(L, t && (ve(t) ? t[pe] : t), i, r, a));
      return;
    }
    if (fr(r) && !a) {
      r.shapeFlag & 512 && r.type.__asyncResolved && r.component.subTree.component && $n(e, t, i, r.component.subTree);
      return;
    }
    const c = r.shapeFlag & 4 ? Ao(r.component) : r.el, f = a ? null : c, { i: h, r: p } = e, y = t && t.r, g = h.refs === Ue ? h.refs = {} : h.refs, I = h.setupState, C = Ne(I), A = I === Ue ? wu : (L) => Nl(g, L) ? false : Ve(C, L), j = (L, pe) => !(pe && Nl(g, pe));
    if (y != null && y !== p) {
      if (Dl(t), lt(y)) g[y] = null, A(y) && (I[y] = null);
      else if (ct(y)) {
        const L = t;
        j(y, L.k) && (y.value = null), L.k && (g[L.k] = null);
      }
    }
    if (Te(p)) os(p, h, 12, [
      f,
      g
    ]);
    else {
      const L = lt(p), pe = ct(p);
      if (L || pe) {
        const se = () => {
          if (e.f) {
            const U = L ? A(p) ? I[p] : g[p] : j() || !e.k ? p.value : g[e.k];
            if (a) ve(U) && Ha(U, c);
            else if (ve(U)) U.includes(c) || U.push(c);
            else if (L) g[p] = [
              c
            ], A(p) && (I[p] = g[p]);
            else {
              const Y = [
                c
              ];
              j(p, e.k) && (p.value = Y), e.k && (g[e.k] = Y);
            }
          } else L ? (g[p] = f, A(p) && (I[p] = f)) : pe && (j(p, e.k) && (p.value = f), e.k && (g[e.k] = f));
        };
        if (f) {
          const U = () => {
            se(), Vs.delete(e);
          };
          U.id = -1, Vs.set(e, U), mt(U, i);
        } else Dl(e), se();
      }
    }
  }
  function Dl(e) {
    const t = Vs.get(e);
    t && (t.flags |= 8, Vs.delete(e));
  }
  wo().requestIdleCallback;
  wo().cancelIdleCallback;
  let fr, To, ep;
  fr = (e) => !!e.type.__asyncLoader;
  To = (e) => e.type.__isKeepAlive;
  ep = {
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
      const h = i.suspense, { renderer: { p, m: y, um: g, o: { createElement: I } } } = r, C = I("div");
      r.activate = (U, Y, $, ue, ge) => {
        const re = U.component;
        y(U, Y, $, 0, h), p(re.vnode, U, Y, $, re, h, ue, U.slotScopeIds, ge), mt(() => {
          re.isDeactivated = false, re.a && Fn(re.a);
          const fe = U.props && U.props.onVnodeMounted;
          fe && ri(fe, re.parent, U);
        }, h);
      }, r.deactivate = (U) => {
        const Y = U.component;
        Hs(Y.m), Hs(Y.a), y(U, C, null, 1, h), mt(() => {
          Y.da && Fn(Y.da);
          const $ = U.props && U.props.onVnodeUnmounted;
          $ && ri($, Y.parent, U), Y.isDeactivated = true;
        }, h);
      };
      function A(U) {
        Ko(U), g(U, i, h, true);
      }
      function j(U) {
        a.forEach((Y, $) => {
          const ue = Ta(fr(Y) ? Y.type.__asyncResolved || {} : Y.type);
          ue && !U(ue) && L($);
        });
      }
      function L(U) {
        const Y = a.get(U);
        Y && (!f || !lr(Y, f)) ? A(Y) : f && Ko(f), a.delete(U), c.delete(U);
      }
      tn(() => [
        e.include,
        e.exclude
      ], ([U, Y]) => {
        U && j(($) => On(U, $)), Y && j(($) => !On(Y, $));
      }, {
        flush: "post",
        deep: true
      });
      let pe = null;
      const se = () => {
        pe != null && (Zs(i.subTree.type) ? mt(() => {
          a.set(pe, bs(i.subTree));
        }, i.subTree.suspense) : a.set(pe, bs(i.subTree)));
      };
      return as(se), sl(se), ol(() => {
        a.forEach((U) => {
          const { subTree: Y, suspense: $ } = i, ue = bs(Y);
          if (U.type === ue.type && U.key === ue.key) {
            Ko(ue);
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
        if (!on(Y) || !(Y.shapeFlag & 4) && !(Y.shapeFlag & 128)) return f = null, Y;
        let $ = bs(Y);
        if ($.type === Et) return f = null, $;
        const ue = $.type, ge = Ta(fr($) ? $.type.__asyncResolved || {} : ue), { include: re, exclude: fe, max: Q } = e;
        if (re && (!ge || !On(re, ge)) || fe && ge && On(fe, ge)) return $.shapeFlag &= -257, f = $, Y;
        const me = $.key == null ? ue : $.key, ke = a.get(me);
        return $.el && ($ = Hi($), Y.shapeFlag & 128 && (Y.ssContent = $)), pe = me, ke ? ($.el = ke.el, $.component = ke.component, $.transition && dr($, $.transition), $.shapeFlag |= 512, c.delete(me), c.add(me)) : (c.add(me), Q && c.size > parseInt(Q, 10) && L(c.values().next().value)), $.shapeFlag |= 256, f = $, Zs(Y.type) ? Y : $;
      };
    }
  };
  kv = ep;
  function On(e, t) {
    return ve(e) ? e.some((i) => On(i, t)) : lt(e) ? e.split(",").includes(t) : Hh(e) ? (e.lastIndex = 0, e.test(t)) : false;
  }
  tp = function(e, t) {
    uf(e, "a", t);
  };
  ip = function(e, t) {
    uf(e, "da", t);
  };
  function uf(e, t, i = Ct) {
    const r = e.__wdc || (e.__wdc = () => {
      let a = i;
      for (; a; ) {
        if (a.isDeactivated) return;
        a = a.parent;
      }
      return e();
    });
    if (Mo(t, r, i), i) {
      let a = i.parent;
      for (; a && a.parent; ) To(a.parent.vnode) && rp(r, t, i, a), a = a.parent;
    }
  }
  function rp(e, t, i, r) {
    const a = Mo(t, e, r, true);
    al(() => {
      Ha(r[t], a);
    }, i);
  }
  function Ko(e) {
    e.shapeFlag &= -257, e.shapeFlag &= -513;
  }
  function bs(e) {
    return e.shapeFlag & 128 ? e.ssContent : e;
  }
  function Mo(e, t, i = Ct, r = false) {
    if (i) {
      const a = i[e] || (i[e] = []), c = t.__weh || (t.__weh = (...f) => {
        Vi();
        const h = ls(i), p = mi(t, i, e, f);
        return h(), qi(), p;
      });
      return r ? a.unshift(c) : a.push(c), c;
    }
  }
  let Yi, ff, sl, sp, op, ap;
  Yi = (e) => (t, i = Ct) => {
    (!ts || e === "sp") && Mo(e, (...r) => t(...r), i);
  };
  np = Yi("bm");
  as = Yi("m");
  ff = Yi("bu");
  sl = Yi("u");
  ol = Yi("bum");
  al = Yi("um");
  sp = Yi("sp");
  op = Yi("rtg");
  ap = Yi("rtc");
  function lp(e, t = Ct) {
    Mo("ec", e, t);
  }
  const cp = "components", hf = /* @__PURE__ */ Symbol.for("v-ndc");
  Av = function(e) {
    return lt(e) ? up(cp, e, false) || e : e || hf;
  };
  function up(e, t, i = true, r = false) {
    const a = It || Ct;
    if (a) {
      const c = a.type;
      {
        const h = Ta(c, false);
        if (h && (h === t || h === Yt(t) || h === mo(Yt(t)))) return c;
      }
      const f = Fl(a[e] || c[e], t) || Fl(a.appContext[e], t);
      return !f && r ? c : f;
    }
  }
  function Fl(e, t) {
    return e && (e[t] || e[Yt(t)] || e[mo(Yt(t))]);
  }
  fp = function(e, t, i, r) {
    let a;
    const c = i, f = ve(e);
    if (f || lt(e)) {
      const h = f && Bi(e);
      let p = false, y = false;
      h && (p = !Jt(e), y = Ki(e), e = vo(e)), a = new Array(e.length);
      for (let g = 0, I = e.length; g < I; g++) a[g] = t(p ? y ? sn(gi(e[g])) : gi(e[g]) : e[g], g, void 0, c);
    } else if (typeof e == "number") {
      a = new Array(e);
      for (let h = 0; h < e; h++) a[h] = t(h + 1, h, void 0, c);
    } else if ($e(e)) if (e[Symbol.iterator]) a = Array.from(e, (h, p) => t(h, p, void 0, c));
    else {
      const h = Object.keys(e);
      a = new Array(h.length);
      for (let p = 0, y = h.length; p < y; p++) {
        const g = h[p];
        a[p] = t(e[g], g, p, c);
      }
    }
    else a = [];
    return a;
  };
  Cv = function(e, t) {
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
  Rv = function(e, t, i = {}, r, a) {
    if (It.ce || It.parent && fr(It.parent) && It.parent.ce) {
      const y = Object.keys(i).length > 0;
      return t !== "default" && (i.name = t), ni(), Ia(At, null, [
        Rt("slot", i, r && r())
      ], y ? -2 : 64);
    }
    let c = e[t];
    c && c._c && (c._d = false), ni();
    const f = c && df(c(i)), h = i.key || f && f.key, p = Ia(At, {
      key: (h && !pi(h) ? h : `_${t}`) + (!f && r ? "_fb" : "")
    }, f || (r ? r() : []), f && e._ === 1 ? 64 : -2);
    return !a && p.scopeId && (p.slotScopeIds = [
      p.scopeId + "-s"
    ]), c && c._c && (c._d = true), p;
  };
  function df(e) {
    return e.some((t) => on(t) ? !(t.type === Et || t.type === At && !df(t.children)) : true) ? e : null;
  }
  const ba = (e) => e ? Of(e) ? Ao(e) : ba(e.parent) : null, Bn = dt(/* @__PURE__ */ Object.create(null), {
    $: (e) => e,
    $el: (e) => e.vnode.el,
    $data: (e) => e.data,
    $props: (e) => e.props,
    $attrs: (e) => e.attrs,
    $slots: (e) => e.slots,
    $refs: (e) => e.refs,
    $parent: (e) => ba(e.parent),
    $root: (e) => ba(e.root),
    $host: (e) => e.ce,
    $emit: (e) => e.emit,
    $options: (e) => gf(e),
    $forceUpdate: (e) => e.f || (e.f = () => {
      rl(e.update);
    }),
    $nextTick: (e) => e.n || (e.n = Ku.bind(e.proxy)),
    $watch: (e) => Zd.bind(e)
  }), Ho = (e, t) => e !== Ue && !e.__isScriptSetup && Ve(e, t), hp = {
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
          if (Ho(r, t)) return f[t] = 1, r[t];
          if (a !== Ue && Ve(a, t)) return f[t] = 2, a[t];
          if (Ve(c, t)) return f[t] = 3, c[t];
          if (i !== Ue && Ve(i, t)) return f[t] = 4, i[t];
          va && (f[t] = 0);
        }
      }
      const y = Bn[t];
      let g, I;
      if (y) return t === "$attrs" && kt(e.attrs, "get", ""), y(e);
      if ((g = h.__cssModules) && (g = g[t])) return g;
      if (i !== Ue && Ve(i, t)) return f[t] = 4, i[t];
      if (I = p.config.globalProperties, Ve(I, t)) return I[t];
    },
    set({ _: e }, t, i) {
      const { data: r, setupState: a, ctx: c } = e;
      return Ho(a, t) ? (a[t] = i, true) : r !== Ue && Ve(r, t) ? (r[t] = i, true) : Ve(e.props, t) || t[0] === "$" && t.slice(1) in e ? false : (c[t] = i, true);
    },
    has({ _: { data: e, setupState: t, accessCache: i, ctx: r, appContext: a, props: c, type: f } }, h) {
      let p;
      return !!(i[h] || e !== Ue && h[0] !== "$" && Ve(e, h) || Ho(t, h) || Ve(c, h) || Ve(r, h) || Ve(Bn, h) || Ve(a.config.globalProperties, h) || (p = f.__cssModules) && p[h]);
    },
    defineProperty(e, t, i) {
      return i.get != null ? e._.accessCache[t] = 0 : Ve(i, "value") && this.set(e, t, i.value, null), Reflect.defineProperty(e, t, i);
    }
  };
  function qs(e) {
    return ve(e) ? e.reduce((t, i) => (t[i] = null, t), {}) : e;
  }
  Ov = function(e, t) {
    return !e || !t ? e || t : ve(e) && ve(t) ? e.concat(t) : dt({}, qs(e), qs(t));
  };
  let va = true;
  function dp(e) {
    const t = gf(e), i = e.proxy, r = e.ctx;
    va = false, t.beforeCreate && jl(t.beforeCreate, e, "bc");
    const { data: a, computed: c, methods: f, watch: h, provide: p, inject: y, created: g, beforeMount: I, mounted: C, beforeUpdate: A, updated: j, activated: L, deactivated: pe, beforeDestroy: se, beforeUnmount: U, destroyed: Y, unmounted: $, render: ue, renderTracked: ge, renderTriggered: re, errorCaptured: fe, serverPrefetch: Q, expose: me, inheritAttrs: ke, components: he, directives: Be, filters: pt } = t;
    if (y && pp(y, r, null), f) for (const Ce in f) {
      const He = f[Ce];
      Te(He) && (r[Ce] = He.bind(i));
    }
    if (a) {
      const Ce = a.call(i, i);
      $e(Ce) && (e.data = _o(Ce));
    }
    if (va = true, c) for (const Ce in c) {
      const He = c[Ce], Ai = Te(He) ? He.bind(i, i) : Te(He.get) ? He.get.bind(i, i) : fi, zr = !Te(He) && Te(He.set) ? He.set.bind(i) : fi, Ci = hl({
        get: Ai,
        set: zr
      });
      Object.defineProperty(r, Ce, {
        enumerable: true,
        configurable: true,
        get: () => Ci.value,
        set: (_e) => Ci.value = _e
      });
    }
    if (h) for (const Ce in h) pf(h[Ce], r, i, Ce);
    if (p) {
      const Ce = Te(p) ? p.call(i) : p;
      Reflect.ownKeys(Ce).forEach((He) => {
        Wd(He, Ce[He]);
      });
    }
    g && jl(g, e, "c");
    function Xe(Ce, He) {
      ve(He) ? He.forEach((Ai) => Ce(Ai.bind(i))) : He && Ce(He.bind(i));
    }
    if (Xe(np, I), Xe(as, C), Xe(ff, A), Xe(sl, j), Xe(tp, L), Xe(ip, pe), Xe(lp, fe), Xe(ap, ge), Xe(op, re), Xe(ol, U), Xe(al, $), Xe(sp, Q), ve(me)) if (me.length) {
      const Ce = e.exposed || (e.exposed = {});
      me.forEach((He) => {
        Object.defineProperty(Ce, He, {
          get: () => i[He],
          set: (Ai) => i[He] = Ai,
          enumerable: true
        });
      });
    } else e.exposed || (e.exposed = {});
    ue && e.render === fi && (e.render = ue), ke != null && (e.inheritAttrs = ke), he && (e.components = he), Be && (e.directives = Be), Q && cf(e);
  }
  function pp(e, t, i = fi) {
    ve(e) && (e = _a(e));
    for (const r in e) {
      const a = e[r];
      let c;
      $e(a) ? "default" in a ? c = zn(a.from || r, a.default, true) : c = zn(a.from || r) : c = zn(a), ct(c) ? Object.defineProperty(t, r, {
        enumerable: true,
        configurable: true,
        get: () => c.value,
        set: (f) => c.value = f
      }) : t[r] = c;
    }
  }
  function jl(e, t, i) {
    mi(ve(e) ? e.map((r) => r.bind(t.proxy)) : e.bind(t.proxy), t, i);
  }
  function pf(e, t, i, r) {
    let a = r.includes(".") ? Qu(i, r) : () => i[r];
    if (lt(e)) {
      const c = t[e];
      Te(c) && tn(a, c);
    } else if (Te(e)) tn(a, e.bind(i));
    else if ($e(e)) if (ve(e)) e.forEach((c) => pf(c, t, i, r));
    else {
      const c = Te(e.handler) ? e.handler.bind(i) : t[e.handler];
      Te(c) && tn(a, c, e);
    }
  }
  function gf(e) {
    const t = e.type, { mixins: i, extends: r } = t, { mixins: a, optionsCache: c, config: { optionMergeStrategies: f } } = e.appContext, h = c.get(t);
    let p;
    return h ? p = h : !a.length && !i && !r ? p = t : (p = {}, a.length && a.forEach((y) => Ks(p, y, f, true)), Ks(p, t, f)), $e(t) && c.set(t, p), p;
  }
  function Ks(e, t, i, r = false) {
    const { mixins: a, extends: c } = t;
    c && Ks(e, c, i, true), a && a.forEach((f) => Ks(e, f, i, true));
    for (const f in t) if (!(r && f === "expose")) {
      const h = gp[f] || i && i[f];
      e[f] = h ? h(e[f], t[f]) : t[f];
    }
    return e;
  }
  const gp = {
    data: Ul,
    props: zl,
    emits: zl,
    methods: Ln,
    computed: Ln,
    beforeCreate: xt,
    created: xt,
    beforeMount: xt,
    mounted: xt,
    beforeUpdate: xt,
    updated: xt,
    beforeDestroy: xt,
    beforeUnmount: xt,
    destroyed: xt,
    unmounted: xt,
    activated: xt,
    deactivated: xt,
    errorCaptured: xt,
    serverPrefetch: xt,
    components: Ln,
    directives: Ln,
    watch: wp,
    provide: Ul,
    inject: mp
  };
  function Ul(e, t) {
    return t ? e ? function() {
      return dt(Te(e) ? e.call(this, this) : e, Te(t) ? t.call(this, this) : t);
    } : t : e;
  }
  function mp(e, t) {
    return Ln(_a(e), _a(t));
  }
  function _a(e) {
    if (ve(e)) {
      const t = {};
      for (let i = 0; i < e.length; i++) t[e[i]] = e[i];
      return t;
    }
    return e;
  }
  function xt(e, t) {
    return e ? [
      ...new Set([].concat(e, t))
    ] : t;
  }
  function Ln(e, t) {
    return e ? dt(/* @__PURE__ */ Object.create(null), e, t) : t;
  }
  function zl(e, t) {
    return e ? ve(e) && ve(t) ? [
      .../* @__PURE__ */ new Set([
        ...e,
        ...t
      ])
    ] : dt(/* @__PURE__ */ Object.create(null), qs(e), qs(t ?? {})) : t;
  }
  function wp(e, t) {
    if (!e) return t;
    if (!t) return e;
    const i = dt(/* @__PURE__ */ Object.create(null), e);
    for (const r in t) i[r] = xt(e[r], t[r]);
    return i;
  }
  function mf() {
    return {
      app: null,
      config: {
        isNativeTag: wu,
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
  let yp = 0;
  function bp(e, t) {
    return function(r, a = null) {
      Te(r) || (r = dt({}, r)), a != null && !$e(a) && (a = null);
      const c = mf(), f = /* @__PURE__ */ new WeakSet(), h = [];
      let p = false;
      const y = c.app = {
        _uid: yp++,
        _component: r,
        _props: a,
        _container: null,
        _context: c,
        _instance: null,
        version: Yp,
        get config() {
          return c.config;
        },
        set config(g) {
        },
        use(g, ...I) {
          return f.has(g) || (g && Te(g.install) ? (f.add(g), g.install(y, ...I)) : Te(g) && (f.add(g), g(y, ...I))), y;
        },
        mixin(g) {
          return c.mixins.includes(g) || c.mixins.push(g), y;
        },
        component(g, I) {
          return I ? (c.components[g] = I, y) : c.components[g];
        },
        directive(g, I) {
          return I ? (c.directives[g] = I, y) : c.directives[g];
        },
        mount(g, I, C) {
          if (!p) {
            const A = y._ceVNode || Rt(r, a);
            return A.appContext = c, C === true ? C = "svg" : C === false && (C = void 0), e(A, g, C), p = true, y._container = g, g.__vue_app__ = y, Ao(A.component);
          }
        },
        onUnmount(g) {
          h.push(g);
        },
        unmount() {
          p && (mi(h, y._instance, 16), e(null, y._container), delete y._container.__vue_app__);
        },
        provide(g, I) {
          return c.provides[g] = I, y;
        },
        runWithContext(g) {
          const I = Nr;
          Nr = y;
          try {
            return g();
          } finally {
            Nr = I;
          }
        }
      };
      return y;
    };
  }
  let Nr = null;
  Lv = function(e, t, i = Ue) {
    const r = gr(), a = Yt(t), c = Ji(t), f = wf(e, a), h = Ld((p, y) => {
      let g, I = Ue, C;
      return Hd(() => {
        const A = e[a];
        zt(g, A) && (g = A, y());
      }), {
        get() {
          return p(), i.get ? i.get(g) : g;
        },
        set(A) {
          const j = i.set ? i.set(A) : A;
          if (!zt(j, g) && !(I !== Ue && zt(A, I))) return;
          const L = r.vnode.props;
          L && (t in L || a in L || c in L) && (`onUpdate:${t}` in L || `onUpdate:${a}` in L || `onUpdate:${c}` in L) || (g = A, y()), r.emit(`update:${t}`, j), zt(A, j) && zt(A, I) && !zt(j, C) && y(), I = A, C = j;
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
  const wf = (e, t) => t === "modelValue" || t === "model-value" ? e.modelModifiers : e[`${t}Modifiers`] || e[`${Yt(t)}Modifiers`] || e[`${Ji(t)}Modifiers`];
  function vp(e, t, ...i) {
    if (e.isUnmounted) return;
    const r = e.vnode.props || Ue;
    let a = i;
    const c = t.startsWith("update:"), f = c && wf(r, t.slice(7));
    f && (f.trim && (a = i.map((g) => lt(g) ? g.trim() : g)), f.number && (a = i.map(Xh)));
    let h, p = r[h = Go(t)] || r[h = Go(Yt(t))];
    !p && c && (p = r[h = Go(Ji(t))]), p && mi(p, e, 6, a);
    const y = r[h + "Once"];
    if (y) {
      if (!e.emitted) e.emitted = {};
      else if (e.emitted[h]) return;
      e.emitted[h] = true, mi(y, e, 6, a);
    }
  }
  const _p = /* @__PURE__ */ new WeakMap();
  function yf(e, t, i = false) {
    const r = i ? _p : t.emitsCache, a = r.get(e);
    if (a !== void 0) return a;
    const c = e.emits;
    let f = {}, h = false;
    if (!Te(e)) {
      const p = (y) => {
        const g = yf(y, t, true);
        g && (h = true, dt(f, g));
      };
      !i && t.mixins.length && t.mixins.forEach(p), e.extends && p(e.extends), e.mixins && e.mixins.forEach(p);
    }
    return !c && !h ? ($e(e) && r.set(e, null), null) : (ve(c) ? c.forEach((p) => f[p] = null) : dt(f, c), $e(e) && r.set(e, f), f);
  }
  function Po(e, t) {
    return !e || !ho(t) ? false : (t = t.slice(2).replace(/Once$/, ""), Ve(e, t[0].toLowerCase() + t.slice(1)) || Ve(e, Ji(t)) || Ve(e, t));
  }
  function Gl(e) {
    const { type: t, vnode: i, proxy: r, withProxy: a, propsOptions: [c], slots: f, attrs: h, emit: p, render: y, renderCache: g, props: I, data: C, setupState: A, ctx: j, inheritAttrs: L } = e, pe = Ws(e);
    let se, U;
    try {
      if (i.shapeFlag & 4) {
        const $ = a || r, ue = $;
        se = Ti(y.call(ue, $, g, I, A, C, j)), U = h;
      } else {
        const $ = t;
        se = Ti($.length > 1 ? $(I, {
          attrs: h,
          slots: f,
          emit: p
        }) : $(I, null)), U = t.props ? h : Ep(h);
      }
    } catch ($) {
      Vn.length = 0, Io($, e, 1), se = Rt(Et);
    }
    let Y = se;
    if (U && L !== false) {
      const $ = Object.keys(U), { shapeFlag: ue } = Y;
      $.length && ue & 7 && (c && $.some(Ka) && (U = Ip(U, c)), Y = Hi(Y, U, false, true));
    }
    return i.dirs && (Y = Hi(Y, null, false, true), Y.dirs = Y.dirs ? Y.dirs.concat(i.dirs) : i.dirs), i.transition && dr(Y, i.transition), se = Y, Ws(pe), se;
  }
  const Ep = (e) => {
    let t;
    for (const i in e) (i === "class" || i === "style" || ho(i)) && ((t || (t = {}))[i] = e[i]);
    return t;
  }, Ip = (e, t) => {
    const i = {};
    for (const r in e) (!Ka(r) || !(r.slice(9) in t)) && (i[r] = e[r]);
    return i;
  };
  function Sp(e, t, i) {
    const { props: r, children: a, component: c } = e, { props: f, children: h, patchFlag: p } = t, y = c.emitsOptions;
    if (t.dirs || t.transition) return true;
    if (i && p >= 0) {
      if (p & 1024) return true;
      if (p & 16) return r ? $l(r, f, y) : !!f;
      if (p & 8) {
        const g = t.dynamicProps;
        for (let I = 0; I < g.length; I++) {
          const C = g[I];
          if (bf(f, r, C) && !Po(y, C)) return true;
        }
      }
    } else return (a || h) && (!h || !h.$stable) ? true : r === f ? false : r ? f ? $l(r, f, y) : true : !!f;
    return false;
  }
  function $l(e, t, i) {
    const r = Object.keys(t);
    if (r.length !== Object.keys(e).length) return true;
    for (let a = 0; a < r.length; a++) {
      const c = r[a];
      if (bf(t, e, c) && !Po(i, c)) return true;
    }
    return false;
  }
  function bf(e, t, i) {
    const r = e[i], a = t[i];
    return i === "style" && $e(r) && $e(a) ? !Ja(r, a) : r !== a;
  }
  function Tp({ vnode: e, parent: t }, i) {
    for (; t; ) {
      const r = t.subTree;
      if (r.suspense && r.suspense.activeBranch === e && (r.el = e.el), r === e) (e = t.vnode).el = i, t = t.parent;
      else break;
    }
  }
  const vf = {}, _f = () => Object.create(vf), Ef = (e) => Object.getPrototypeOf(e) === vf;
  function Mp(e, t, i, r = false) {
    const a = {}, c = _f();
    e.propsDefaults = /* @__PURE__ */ Object.create(null), If(e, t, a, c);
    for (const f in e.propsOptions[0]) f in a || (a[f] = void 0);
    i ? e.props = r ? a : kd(a) : e.type.props ? e.props = a : e.props = c, e.attrs = c;
  }
  function Pp(e, t, i, r) {
    const { props: a, attrs: c, vnode: { patchFlag: f } } = e, h = Ne(a), [p] = e.propsOptions;
    let y = false;
    if ((r || f > 0) && !(f & 16)) {
      if (f & 8) {
        const g = e.vnode.dynamicProps;
        for (let I = 0; I < g.length; I++) {
          let C = g[I];
          if (Po(e.emitsOptions, C)) continue;
          const A = t[C];
          if (p) if (Ve(c, C)) A !== c[C] && (c[C] = A, y = true);
          else {
            const j = Yt(C);
            a[j] = Ea(p, h, j, A, e, false);
          }
          else A !== c[C] && (c[C] = A, y = true);
        }
      }
    } else {
      If(e, t, a, c) && (y = true);
      let g;
      for (const I in h) (!t || !Ve(t, I) && ((g = Ji(I)) === I || !Ve(t, g))) && (p ? i && (i[I] !== void 0 || i[g] !== void 0) && (a[I] = Ea(p, h, I, void 0, e, true)) : delete a[I]);
      if (c !== h) for (const I in c) (!t || !Ve(t, I)) && (delete c[I], y = true);
    }
    y && zi(e.attrs, "set", "");
  }
  function If(e, t, i, r) {
    const [a, c] = e.propsOptions;
    let f = false, h;
    if (t) for (let p in t) {
      if (Dn(p)) continue;
      const y = t[p];
      let g;
      a && Ve(a, g = Yt(p)) ? !c || !c.includes(g) ? i[g] = y : (h || (h = {}))[g] = y : Po(e.emitsOptions, p) || (!(p in r) || y !== r[p]) && (r[p] = y, f = true);
    }
    if (c) {
      const p = Ne(i), y = h || Ue;
      for (let g = 0; g < c.length; g++) {
        const I = c[g];
        i[I] = Ea(a, p, I, y[I], e, !Ve(y, I));
      }
    }
    return f;
  }
  function Ea(e, t, i, r, a, c) {
    const f = e[i];
    if (f != null) {
      const h = Ve(f, "default");
      if (h && r === void 0) {
        const p = f.default;
        if (f.type !== Function && !f.skipFactory && Te(p)) {
          const { propsDefaults: y } = a;
          if (i in y) r = y[i];
          else {
            const g = ls(a);
            r = y[i] = p.call(null, t), g();
          }
        } else r = p;
        a.ce && a.ce._setProp(i, r);
      }
      f[0] && (c && !h ? r = false : f[1] && (r === "" || r === Ji(i)) && (r = true));
    }
    return r;
  }
  const kp = /* @__PURE__ */ new WeakMap();
  function Sf(e, t, i = false) {
    const r = i ? kp : t.propsCache, a = r.get(e);
    if (a) return a;
    const c = e.props, f = {}, h = [];
    let p = false;
    if (!Te(e)) {
      const g = (I) => {
        p = true;
        const [C, A] = Sf(I, t, true);
        dt(f, C), A && h.push(...A);
      };
      !i && t.mixins.length && t.mixins.forEach(g), e.extends && g(e.extends), e.mixins && e.mixins.forEach(g);
    }
    if (!c && !p) return $e(e) && r.set(e, Yr), Yr;
    if (ve(c)) for (let g = 0; g < c.length; g++) {
      const I = Yt(c[g]);
      Bl(I) && (f[I] = Ue);
    }
    else if (c) for (const g in c) {
      const I = Yt(g);
      if (Bl(I)) {
        const C = c[g], A = f[I] = ve(C) || Te(C) ? {
          type: C
        } : dt({}, C), j = A.type;
        let L = false, pe = true;
        if (ve(j)) for (let se = 0; se < j.length; ++se) {
          const U = j[se], Y = Te(U) && U.name;
          if (Y === "Boolean") {
            L = true;
            break;
          } else Y === "String" && (pe = false);
        }
        else L = Te(j) && j.name === "Boolean";
        A[0] = L, A[1] = pe, (L || Ve(A, "default")) && h.push(I);
      }
    }
    const y = [
      f,
      h
    ];
    return $e(e) && r.set(e, y), y;
  }
  function Bl(e) {
    return e[0] !== "$" && !Dn(e);
  }
  const ll = (e) => e === "_" || e === "_ctx" || e === "$stable", cl = (e) => ve(e) ? e.map(Ti) : [
    Ti(e)
  ], Ap = (e, t, i) => {
    if (t._n) return t;
    const r = Bd((...a) => cl(t(...a)), i);
    return r._c = false, r;
  }, Tf = (e, t, i) => {
    const r = e._ctx;
    for (const a in e) {
      if (ll(a)) continue;
      const c = e[a];
      if (Te(c)) t[a] = Ap(a, c, r);
      else if (c != null) {
        const f = cl(c);
        t[a] = () => f;
      }
    }
  }, Mf = (e, t) => {
    const i = cl(t);
    e.slots.default = () => i;
  }, Pf = (e, t, i) => {
    for (const r in t) (i || !ll(r)) && (e[r] = t[r]);
  }, Cp = (e, t, i) => {
    const r = e.slots = _f();
    if (e.vnode.shapeFlag & 32) {
      const a = t._;
      a ? (Pf(r, t, i), i && Eu(r, "_", a, true)) : Tf(t, r);
    } else t && Mf(e, t);
  }, Rp = (e, t, i) => {
    const { vnode: r, slots: a } = e;
    let c = true, f = Ue;
    if (r.shapeFlag & 32) {
      const h = t._;
      h ? i && h === 1 ? c = false : Pf(a, t, i) : (c = !t.$stable, Tf(t, a)), f = t;
    } else t && (Mf(e, t), f = {
      default: 1
    });
    if (c) for (const h in a) !ll(h) && f[h] == null && delete a[h];
  }, mt = Dp;
  function Op(e) {
    return Lp(e);
  }
  function Lp(e, t) {
    const i = wo();
    i.__VUE__ = true;
    const { insert: r, remove: a, patchProp: c, createElement: f, createText: h, createComment: p, setText: y, setElementText: g, parentNode: I, nextSibling: C, setScopeId: A = fi, insertStaticContent: j } = e, L = (E, M, x, H = null, K = null, Z = null, oe = void 0, X = null, ie = !!M.dynamicChildren) => {
      if (E === M) return;
      E && !lr(E, M) && (H = Ri(E), _e(E, K, Z, true), E = null), M.patchFlag === -2 && (ie = false, M.dynamicChildren = null);
      const { type: q, ref: we, shapeFlag: ae } = M;
      switch (q) {
        case ko:
          pe(E, M, x, H);
          break;
        case Et:
          se(E, M, x, H);
          break;
        case Wn:
          E == null && U(M, x, H, oe);
          break;
        case At:
          he(E, M, x, H, K, Z, oe, X, ie);
          break;
        default:
          ae & 1 ? ue(E, M, x, H, K, Z, oe, X, ie) : ae & 6 ? Be(E, M, x, H, K, Z, oe, X, ie) : (ae & 64 || ae & 128) && q.process(E, M, x, H, K, Z, oe, X, ie, br);
      }
      we != null && K ? $n(we, E && E.ref, Z, M || E, !M) : we == null && E && E.ref != null && $n(E.ref, null, Z, E, true);
    }, pe = (E, M, x, H) => {
      if (E == null) r(M.el = h(M.children), x, H);
      else {
        const K = M.el = E.el;
        M.children !== E.children && y(K, M.children);
      }
    }, se = (E, M, x, H) => {
      E == null ? r(M.el = p(M.children || ""), x, H) : M.el = E.el;
    }, U = (E, M, x, H) => {
      [E.el, E.anchor] = j(E.children, M, x, H, E.el, E.anchor);
    }, Y = ({ el: E, anchor: M }, x, H) => {
      let K;
      for (; E && E !== M; ) K = C(E), r(E, x, H), E = K;
      r(M, x, H);
    }, $ = ({ el: E, anchor: M }) => {
      let x;
      for (; E && E !== M; ) x = C(E), a(E), E = x;
      a(M);
    }, ue = (E, M, x, H, K, Z, oe, X, ie) => {
      if (M.type === "svg" ? oe = "svg" : M.type === "math" && (oe = "mathml"), E == null) ge(M, x, H, K, Z, oe, X, ie);
      else {
        const q = E.el && E.el._isVueCE ? E.el : null;
        try {
          q && q._beginPatch(), Q(E, M, K, Z, oe, X, ie);
        } finally {
          q && q._endPatch();
        }
      }
    }, ge = (E, M, x, H, K, Z, oe, X) => {
      let ie, q;
      const { props: we, shapeFlag: ae, transition: ye, dirs: Ie } = E;
      if (ie = E.el = f(E.type, Z, we && we.is, we), ae & 8 ? g(ie, E.children) : ae & 16 && fe(E.children, ie, null, H, K, Zo(E, Z), oe, X), Ie && _r(E, null, H, "created"), re(ie, E, E.scopeId, oe, H), we) {
        for (const ze in we) ze !== "value" && !Dn(ze) && c(ie, ze, null, we[ze], Z, H);
        "value" in we && c(ie, "value", null, we.value, Z), (q = we.onVnodeBeforeMount) && ri(q, H, E);
      }
      Ie && _r(E, null, H, "beforeMount");
      const Le = xp(K, ye);
      Le && ye.beforeEnter(ie), r(ie, M, x), ((q = we && we.onVnodeMounted) || Le || Ie) && mt(() => {
        q && ri(q, H, E), Le && ye.enter(ie), Ie && _r(E, null, H, "mounted");
      }, K);
    }, re = (E, M, x, H, K) => {
      if (x && A(E, x), H) for (let Z = 0; Z < H.length; Z++) A(E, H[Z]);
      if (K) {
        let Z = K.subTree;
        if (M === Z || Zs(Z.type) && (Z.ssContent === M || Z.ssFallback === M)) {
          const oe = K.vnode;
          re(E, oe, oe.scopeId, oe.slotScopeIds, K.parent);
        }
      }
    }, fe = (E, M, x, H, K, Z, oe, X, ie = 0) => {
      for (let q = ie; q < E.length; q++) {
        const we = E[q] = X ? ji(E[q]) : Ti(E[q]);
        L(null, we, M, x, H, K, Z, oe, X);
      }
    }, Q = (E, M, x, H, K, Z, oe) => {
      const X = M.el = E.el;
      let { patchFlag: ie, dynamicChildren: q, dirs: we } = M;
      ie |= E.patchFlag & 16;
      const ae = E.props || Ue, ye = M.props || Ue;
      let Ie;
      if (x && Er(x, false), (Ie = ye.onVnodeBeforeUpdate) && ri(Ie, x, M, E), we && _r(M, E, x, "beforeUpdate"), x && Er(x, true), (ae.innerHTML && ye.innerHTML == null || ae.textContent && ye.textContent == null) && g(X, ""), q ? me(E.dynamicChildren, q, X, x, H, Zo(M, K), Z) : oe || He(E, M, X, null, x, H, Zo(M, K), Z, false), ie > 0) {
        if (ie & 16) ke(X, ae, ye, x, K);
        else if (ie & 2 && ae.class !== ye.class && c(X, "class", null, ye.class, K), ie & 4 && c(X, "style", ae.style, ye.style, K), ie & 8) {
          const Le = M.dynamicProps;
          for (let ze = 0; ze < Le.length; ze++) {
            const Ge = Le[ze], St = ae[Ge], Tt = ye[Ge];
            (Tt !== St || Ge === "value") && c(X, Ge, St, Tt, K, x);
          }
        }
        ie & 1 && E.children !== M.children && g(X, M.children);
      } else !oe && q == null && ke(X, ae, ye, x, K);
      ((Ie = ye.onVnodeUpdated) || we) && mt(() => {
        Ie && ri(Ie, x, M, E), we && _r(M, E, x, "updated");
      }, H);
    }, me = (E, M, x, H, K, Z, oe) => {
      for (let X = 0; X < M.length; X++) {
        const ie = E[X], q = M[X], we = ie.el && (ie.type === At || !lr(ie, q) || ie.shapeFlag & 198) ? I(ie.el) : x;
        L(ie, q, we, null, H, K, Z, oe, true);
      }
    }, ke = (E, M, x, H, K) => {
      if (M !== x) {
        if (M !== Ue) for (const Z in M) !Dn(Z) && !(Z in x) && c(E, Z, M[Z], null, K, H);
        for (const Z in x) {
          if (Dn(Z)) continue;
          const oe = x[Z], X = M[Z];
          oe !== X && Z !== "value" && c(E, Z, X, oe, K, H);
        }
        "value" in x && c(E, "value", M.value, x.value, K);
      }
    }, he = (E, M, x, H, K, Z, oe, X, ie) => {
      const q = M.el = E ? E.el : h(""), we = M.anchor = E ? E.anchor : h("");
      let { patchFlag: ae, dynamicChildren: ye, slotScopeIds: Ie } = M;
      Ie && (X = X ? X.concat(Ie) : Ie), E == null ? (r(q, x, H), r(we, x, H), fe(M.children || [], x, we, K, Z, oe, X, ie)) : ae > 0 && ae & 64 && ye && E.dynamicChildren && E.dynamicChildren.length === ye.length ? (me(E.dynamicChildren, ye, x, K, Z, oe, X), (M.key != null || K && M === K.subTree) && ul(E, M, true)) : He(E, M, x, we, K, Z, oe, X, ie);
    }, Be = (E, M, x, H, K, Z, oe, X, ie) => {
      M.slotScopeIds = X, E == null ? M.shapeFlag & 512 ? K.ctx.activate(M, x, H, oe, ie) : pt(M, x, H, K, Z, oe, ie) : $t(E, M, ie);
    }, pt = (E, M, x, H, K, Z, oe) => {
      const X = E.component = Wp(E, H, K);
      if (To(E) && (X.ctx.renderer = br), Vp(X, false, oe), X.asyncDep) {
        if (K && K.registerDep(X, Xe, oe), !E.el) {
          const ie = X.subTree = Rt(Et);
          se(null, ie, M, x), E.placeholder = ie.el;
        }
      } else Xe(X, E, M, x, K, Z, oe);
    }, $t = (E, M, x) => {
      const H = M.component = E.component;
      if (Sp(E, M, x)) if (H.asyncDep && !H.asyncResolved) {
        Ce(H, M, x);
        return;
      } else H.next = M, H.update();
      else M.el = E.el, H.vnode = M;
    }, Xe = (E, M, x, H, K, Z, oe) => {
      const X = () => {
        if (E.isMounted) {
          let { next: ae, bu: ye, u: Ie, parent: Le, vnode: ze } = E;
          {
            const Qt = kf(E);
            if (Qt) {
              ae && (ae.el = ze.el, Ce(E, ae, oe)), Qt.asyncDep.then(() => {
                mt(() => {
                  E.isUnmounted || q();
                }, K);
              });
              return;
            }
          }
          let Ge = ae, St;
          Er(E, false), ae ? (ae.el = ze.el, Ce(E, ae, oe)) : ae = ze, ye && Fn(ye), (St = ae.props && ae.props.onVnodeBeforeUpdate) && ri(St, Le, ae, ze), Er(E, true);
          const Tt = Gl(E), Xt = E.subTree;
          E.subTree = Tt, L(Xt, Tt, I(Xt.el), Ri(Xt), E, K, Z), ae.el = Tt.el, Ge === null && Tp(E, Tt.el), Ie && mt(Ie, K), (St = ae.props && ae.props.onVnodeUpdated) && mt(() => ri(St, Le, ae, ze), K);
        } else {
          let ae;
          const { el: ye, props: Ie } = M, { bm: Le, m: ze, parent: Ge, root: St, type: Tt } = E, Xt = fr(M);
          Er(E, false), Le && Fn(Le), !Xt && (ae = Ie && Ie.onVnodeBeforeMount) && ri(ae, Ge, M), Er(E, true);
          {
            St.ce && St.ce._hasShadowRoot() && St.ce._injectChildStyle(Tt);
            const Qt = E.subTree = Gl(E);
            L(null, Qt, x, H, E, K, Z), M.el = Qt.el;
          }
          if (ze && mt(ze, K), !Xt && (ae = Ie && Ie.onVnodeMounted)) {
            const Qt = M;
            mt(() => ri(ae, Ge, Qt), K);
          }
          (M.shapeFlag & 256 || Ge && fr(Ge.vnode) && Ge.vnode.shapeFlag & 256) && E.a && mt(E.a, K), E.isMounted = true, M = x = H = null;
        }
      };
      E.scope.on();
      const ie = E.effect = new Au(X);
      E.scope.off();
      const q = E.update = ie.run.bind(ie), we = E.job = ie.runIfDirty.bind(ie);
      we.i = E, we.id = E.uid, ie.scheduler = () => rl(we), Er(E, true), q();
    }, Ce = (E, M, x) => {
      M.component = E;
      const H = E.vnode.props;
      E.vnode = M, E.next = null, Pp(E, M.props, H, x), Rp(E, M.children, x), Vi(), Cl(E), qi();
    }, He = (E, M, x, H, K, Z, oe, X, ie = false) => {
      const q = E && E.children, we = E ? E.shapeFlag : 0, ae = M.children, { patchFlag: ye, shapeFlag: Ie } = M;
      if (ye > 0) {
        if (ye & 128) {
          zr(q, ae, x, H, K, Z, oe, X, ie);
          return;
        } else if (ye & 256) {
          Ai(q, ae, x, H, K, Z, oe, X, ie);
          return;
        }
      }
      Ie & 8 ? (we & 16 && jt(q, K, Z), ae !== q && g(x, ae)) : we & 16 ? Ie & 16 ? zr(q, ae, x, H, K, Z, oe, X, ie) : jt(q, K, Z, true) : (we & 8 && g(x, ""), Ie & 16 && fe(ae, x, H, K, Z, oe, X, ie));
    }, Ai = (E, M, x, H, K, Z, oe, X, ie) => {
      E = E || Yr, M = M || Yr;
      const q = E.length, we = M.length, ae = Math.min(q, we);
      let ye;
      for (ye = 0; ye < ae; ye++) {
        const Ie = M[ye] = ie ? ji(M[ye]) : Ti(M[ye]);
        L(E[ye], Ie, x, null, K, Z, oe, X, ie);
      }
      q > we ? jt(E, K, Z, true, false, ae) : fe(M, x, H, K, Z, oe, X, ie, ae);
    }, zr = (E, M, x, H, K, Z, oe, X, ie) => {
      let q = 0;
      const we = M.length;
      let ae = E.length - 1, ye = we - 1;
      for (; q <= ae && q <= ye; ) {
        const Ie = E[q], Le = M[q] = ie ? ji(M[q]) : Ti(M[q]);
        if (lr(Ie, Le)) L(Ie, Le, x, null, K, Z, oe, X, ie);
        else break;
        q++;
      }
      for (; q <= ae && q <= ye; ) {
        const Ie = E[ae], Le = M[ye] = ie ? ji(M[ye]) : Ti(M[ye]);
        if (lr(Ie, Le)) L(Ie, Le, x, null, K, Z, oe, X, ie);
        else break;
        ae--, ye--;
      }
      if (q > ae) {
        if (q <= ye) {
          const Ie = ye + 1, Le = Ie < we ? M[Ie].el : H;
          for (; q <= ye; ) L(null, M[q] = ie ? ji(M[q]) : Ti(M[q]), x, Le, K, Z, oe, X, ie), q++;
        }
      } else if (q > ye) for (; q <= ae; ) _e(E[q], K, Z, true), q++;
      else {
        const Ie = q, Le = q, ze = /* @__PURE__ */ new Map();
        for (q = Le; q <= ye; q++) {
          const Ot = M[q] = ie ? ji(M[q]) : Ti(M[q]);
          Ot.key != null && ze.set(Ot.key, q);
        }
        let Ge, St = 0;
        const Tt = ye - Le + 1;
        let Xt = false, Qt = 0;
        const vr = new Array(Tt);
        for (q = 0; q < Tt; q++) vr[q] = 0;
        for (q = Ie; q <= ae; q++) {
          const Ot = E[q];
          if (St >= Tt) {
            _e(Ot, K, Z, true);
            continue;
          }
          let ei;
          if (Ot.key != null) ei = ze.get(Ot.key);
          else for (Ge = Le; Ge <= ye; Ge++) if (vr[Ge - Le] === 0 && lr(Ot, M[Ge])) {
            ei = Ge;
            break;
          }
          ei === void 0 ? _e(Ot, K, Z, true) : (vr[ei - Le] = q + 1, ei >= Qt ? Qt = ei : Xt = true, L(Ot, M[ei], x, null, K, Z, oe, X, ie), St++);
        }
        const En = Xt ? Np(vr) : Yr;
        for (Ge = En.length - 1, q = Tt - 1; q >= 0; q--) {
          const Ot = Le + q, ei = M[Ot], hs = M[Ot + 1], ds = Ot + 1 < we ? hs.el || Af(hs) : H;
          vr[q] === 0 ? L(null, ei, x, ds, K, Z, oe, X, ie) : Xt && (Ge < 0 || q !== En[Ge] ? Ci(ei, x, ds, 2) : Ge--);
        }
      }
    }, Ci = (E, M, x, H, K = null) => {
      const { el: Z, type: oe, transition: X, children: ie, shapeFlag: q } = E;
      if (q & 6) {
        Ci(E.component.subTree, M, x, H);
        return;
      }
      if (q & 128) {
        E.suspense.move(M, x, H);
        return;
      }
      if (q & 64) {
        oe.move(E, M, x, br);
        return;
      }
      if (oe === At) {
        r(Z, M, x);
        for (let ae = 0; ae < ie.length; ae++) Ci(ie[ae], M, x, H);
        r(E.anchor, M, x);
        return;
      }
      if (oe === Wn) {
        Y(E, M, x);
        return;
      }
      if (H !== 2 && q & 1 && X) if (H === 0) X.beforeEnter(Z), r(Z, M, x), mt(() => X.enter(Z), K);
      else {
        const { leave: ae, delayLeave: ye, afterLeave: Ie } = X, Le = () => {
          E.ctx.isUnmounted ? a(Z) : r(Z, M, x);
        }, ze = () => {
          Z._isLeaving && Z[Si](true), ae(Z, () => {
            Le(), Ie && Ie();
          });
        };
        ye ? ye(Z, Le, ze) : ze();
      }
      else r(Z, M, x);
    }, _e = (E, M, x, H = false, K = false) => {
      const { type: Z, props: oe, ref: X, children: ie, dynamicChildren: q, shapeFlag: we, patchFlag: ae, dirs: ye, cacheIndex: Ie } = E;
      if (ae === -2 && (K = false), X != null && (Vi(), $n(X, null, x, E, true), qi()), Ie != null && (M.renderCache[Ie] = void 0), we & 256) {
        M.ctx.deactivate(E);
        return;
      }
      const Le = we & 1 && ye, ze = !fr(E);
      let Ge;
      if (ze && (Ge = oe && oe.onVnodeBeforeUnmount) && ri(Ge, M, E), we & 6) ne(E.component, x, H);
      else {
        if (we & 128) {
          E.suspense.unmount(x, H);
          return;
        }
        Le && _r(E, null, M, "beforeUnmount"), we & 64 ? E.type.remove(E, M, x, br, H) : q && !q.hasOnce && (Z !== At || ae > 0 && ae & 64) ? jt(q, M, x, false, true) : (Z === At && ae & 384 || !K && we & 16) && jt(ie, M, x), H && _n(E);
      }
      (ze && (Ge = oe && oe.onVnodeUnmounted) || Le) && mt(() => {
        Ge && ri(Ge, M, E), Le && _r(E, null, M, "unmounted");
      }, x);
    }, _n = (E) => {
      const { type: M, el: x, anchor: H, transition: K } = E;
      if (M === At) {
        zo(x, H);
        return;
      }
      if (M === Wn) {
        $(E);
        return;
      }
      const Z = () => {
        a(x), K && !K.persisted && K.afterLeave && K.afterLeave();
      };
      if (E.shapeFlag & 1 && K && !K.persisted) {
        const { leave: oe, delayLeave: X } = K, ie = () => oe(x, Z);
        X ? X(E.el, Z, ie) : ie();
      } else Z();
    }, zo = (E, M) => {
      let x;
      for (; E !== M; ) x = C(E), a(E), E = x;
      a(M);
    }, ne = (E, M, x) => {
      const { bum: H, scope: K, job: Z, subTree: oe, um: X, m: ie, a: q } = E;
      Hs(ie), Hs(q), H && Fn(H), K.stop(), Z && (Z.flags |= 8, _e(oe, E, M, x)), X && mt(X, M), mt(() => {
        E.isUnmounted = true;
      }, M);
    }, jt = (E, M, x, H = false, K = false, Z = 0) => {
      for (let oe = Z; oe < E.length; oe++) _e(E[oe], M, x, H, K);
    }, Ri = (E) => {
      if (E.shapeFlag & 6) return Ri(E.component.subTree);
      if (E.shapeFlag & 128) return E.suspense.next();
      const M = C(E.anchor || E.el), x = M && M[ef];
      return x ? C(x) : M;
    };
    let Bt = false;
    const fs = (E, M, x) => {
      let H;
      E == null ? M._vnode && (_e(M._vnode, null, null, true), H = M._vnode.component) : L(M._vnode || null, E, M, null, null, null, x), M._vnode = E, Bt || (Bt = true, Cl(H), Ju(), Bt = false);
    }, br = {
      p: L,
      um: _e,
      m: Ci,
      r: _n,
      mt: pt,
      mc: fe,
      pc: He,
      pbc: me,
      n: Ri,
      o: e
    };
    return {
      render: fs,
      hydrate: void 0,
      createApp: bp(fs)
    };
  }
  function Zo({ type: e, props: t }, i) {
    return i === "svg" && e === "foreignObject" || i === "mathml" && e === "annotation-xml" && t && t.encoding && t.encoding.includes("html") ? void 0 : i;
  }
  function Er({ effect: e, job: t }, i) {
    i ? (e.flags |= 32, t.flags |= 4) : (e.flags &= -33, t.flags &= -5);
  }
  function xp(e, t) {
    return (!e || e && !e.pendingBranch) && t && !t.persisted;
  }
  function ul(e, t, i = false) {
    const r = e.children, a = t.children;
    if (ve(r) && ve(a)) for (let c = 0; c < r.length; c++) {
      const f = r[c];
      let h = a[c];
      h.shapeFlag & 1 && !h.dynamicChildren && ((h.patchFlag <= 0 || h.patchFlag === 32) && (h = a[c] = ji(a[c]), h.el = f.el), !i && h.patchFlag !== -2 && ul(f, h)), h.type === ko && (h.patchFlag === -1 && (h = a[c] = ji(h)), h.el = f.el), h.type === Et && !h.el && (h.el = f.el);
    }
  }
  function Np(e) {
    const t = e.slice(), i = [
      0
    ];
    let r, a, c, f, h;
    const p = e.length;
    for (r = 0; r < p; r++) {
      const y = e[r];
      if (y !== 0) {
        if (a = i[i.length - 1], e[a] < y) {
          t[r] = a, i.push(r);
          continue;
        }
        for (c = 0, f = i.length - 1; c < f; ) h = c + f >> 1, e[i[h]] < y ? c = h + 1 : f = h;
        y < e[i[c]] && (c > 0 && (t[r] = i[c - 1]), i[c] = r);
      }
    }
    for (c = i.length, f = i[c - 1]; c-- > 0; ) i[c] = f, f = t[f];
    return i;
  }
  function kf(e) {
    const t = e.subTree.component;
    if (t) return t.asyncDep && !t.asyncResolved ? t : kf(t);
  }
  function Hs(e) {
    if (e) for (let t = 0; t < e.length; t++) e[t].flags |= 8;
  }
  function Af(e) {
    if (e.placeholder) return e.placeholder;
    const t = e.component;
    return t ? Af(t.subTree) : null;
  }
  const Zs = (e) => e.__isSuspense;
  function Dp(e, t) {
    t && t.pendingBranch ? ve(e) ? t.effects.push(...e) : t.effects.push(e) : Zu(e);
  }
  let Wn, Vn;
  At = /* @__PURE__ */ Symbol.for("v-fgt");
  ko = /* @__PURE__ */ Symbol.for("v-txt");
  Et = /* @__PURE__ */ Symbol.for("v-cmt");
  Wn = /* @__PURE__ */ Symbol.for("v-stc");
  Vn = [];
  let Ht = null;
  ni = function(e = false) {
    Vn.push(Ht = e ? null : []);
  };
  function Fp() {
    Vn.pop(), Ht = Vn[Vn.length - 1] || null;
  }
  let es = 1;
  function Js(e, t = false) {
    es += e, e < 0 && Ht && t && (Ht.hasOnce = true);
  }
  function Cf(e) {
    return e.dynamicChildren = es > 0 ? Ht || Yr : null, Fp(), es > 0 && Ht && Ht.push(e), e;
  }
  xi = function(e, t, i, r, a, c) {
    return Cf(We(e, t, i, r, a, c, true));
  };
  Ia = function(e, t, i, r, a) {
    return Cf(Rt(e, t, i, r, a, true));
  };
  on = function(e) {
    return e ? e.__v_isVNode === true : false;
  };
  function lr(e, t) {
    return e.type === t.type && e.key === t.key;
  }
  const Rf = ({ key: e }) => e ?? null, Rs = ({ ref: e, ref_key: t, ref_for: i }) => (typeof e == "number" && (e = "" + e), e != null ? lt(e) || ct(e) || Te(e) ? {
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
      key: t && Rf(t),
      ref: t && Rs(t),
      scopeId: Xu,
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
    return h ? (fl(p, i), c & 128 && e.normalize(p)) : i && (p.shapeFlag |= lt(i) ? 8 : 16), es > 0 && !f && Ht && (p.patchFlag > 0 || c & 6) && p.patchFlag !== 32 && Ht.push(p), p;
  };
  Rt = jp;
  function jp(e, t = null, i = null, r = 0, a = null, c = false) {
    if ((!e || e === hf) && (e = Et), on(e)) {
      const h = Hi(e, t, true);
      return i && fl(h, i), es > 0 && !c && Ht && (h.shapeFlag & 6 ? Ht[Ht.indexOf(e)] = h : Ht.push(h)), h.patchFlag = -2, h;
    }
    if (Zp(e) && (e = e.__vccOpts), t) {
      t = Up(t);
      let { class: h, style: p } = t;
      h && !lt(h) && (t.class = Za(h)), $e(p) && (Eo(p) && !ve(p) && (p = dt({}, p)), t.style = yo(p));
    }
    const f = lt(e) ? 1 : Zs(e) ? 128 : tf(e) ? 64 : $e(e) ? 4 : Te(e) ? 2 : 0;
    return We(e, t, i, r, a, f, c, true);
  }
  function Up(e) {
    return e ? Eo(e) || Ef(e) ? dt({}, e) : e : null;
  }
  Hi = function(e, t, i = false, r = false) {
    const { props: a, ref: c, patchFlag: f, children: h, transition: p } = e, y = t ? Gp(a || {}, t) : a, g = {
      __v_isVNode: true,
      __v_skip: true,
      type: e.type,
      props: y,
      key: y && Rf(y),
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
      ssContent: e.ssContent && Hi(e.ssContent),
      ssFallback: e.ssFallback && Hi(e.ssFallback),
      placeholder: e.placeholder,
      el: e.el,
      anchor: e.anchor,
      ctx: e.ctx,
      ce: e.ce
    };
    return p && r && dr(g, p.clone(g)), g;
  };
  zp = function(e = " ", t = 0) {
    return Rt(ko, null, e, t);
  };
  xv = function(e, t) {
    const i = Rt(Wn, null, e);
    return i.staticCount = t, i;
  };
  vs = function(e = "", t = false) {
    return t ? (ni(), Ia(Et, null, e)) : Rt(Et, null, e);
  };
  function Ti(e) {
    return e == null || typeof e == "boolean" ? Rt(Et) : ve(e) ? Rt(At, null, e.slice()) : on(e) ? ji(e) : Rt(ko, null, String(e));
  }
  function ji(e) {
    return e.el === null && e.patchFlag !== -1 || e.memo ? e : Hi(e);
  }
  function fl(e, t) {
    let i = 0;
    const { shapeFlag: r } = e;
    if (t == null) t = null;
    else if (ve(t)) i = 16;
    else if (typeof t == "object") if (r & 65) {
      const a = t.default;
      a && (a._c && (a._d = false), fl(e, a()), a._c && (a._d = true));
      return;
    } else {
      i = 32;
      const a = t._;
      !a && !Ef(t) ? t._ctx = It : a === 3 && It && (It.slots._ === 1 ? t._ = 1 : (t._ = 2, e.patchFlag |= 1024));
    }
    else Te(t) ? (t = {
      default: t,
      _ctx: It
    }, i = 32) : (t = String(t), r & 64 ? (i = 16, t = [
      zp(t)
    ]) : i = 8);
    e.children = t, e.shapeFlag |= i;
  }
  Gp = function(...e) {
    const t = {};
    for (let i = 0; i < e.length; i++) {
      const r = e[i];
      for (const a in r) if (a === "class") t.class !== r.class && (t.class = Za([
        t.class,
        r.class
      ]));
      else if (a === "style") t.style = yo([
        t.style,
        r.style
      ]);
      else if (ho(a)) {
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
  const $p = mf();
  let Bp = 0;
  function Wp(e, t, i) {
    const r = e.type, a = (t ? t.appContext : e.appContext) || $p, c = {
      uid: Bp++,
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
      scope: new Mu(true),
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
      propsOptions: Sf(r, a),
      emitsOptions: yf(r, a),
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
    }, c.root = t ? t.root : c, c.emit = vp.bind(null, c), e.ce && e.ce(c), c;
  }
  let Ct = null;
  gr = () => Ct || It;
  let Ys, Sa;
  {
    const e = wo(), t = (i, r) => {
      let a;
      return (a = e[i]) || (a = e[i] = []), a.push(r), (c) => {
        a.length > 1 ? a.forEach((f) => f(c)) : a[0](c);
      };
    };
    Ys = t("__VUE_INSTANCE_SETTERS__", (i) => Ct = i), Sa = t("__VUE_SSR_SETTERS__", (i) => ts = i);
  }
  const ls = (e) => {
    const t = Ct;
    return Ys(e), e.scope.on(), () => {
      e.scope.off(), Ys(t);
    };
  }, Wl = () => {
    Ct && Ct.scope.off(), Ys(null);
  };
  function Of(e) {
    return e.vnode.shapeFlag & 4;
  }
  let ts = false;
  function Vp(e, t = false, i = false) {
    t && Sa(t);
    const { props: r, children: a } = e.vnode, c = Of(e);
    Mp(e, r, c, t), Cp(e, a, i || t);
    const f = c ? qp(e, t) : void 0;
    return t && Sa(false), f;
  }
  function qp(e, t) {
    const i = e.type;
    e.accessCache = /* @__PURE__ */ Object.create(null), e.proxy = new Proxy(e.ctx, hp);
    const { setup: r } = i;
    if (r) {
      Vi();
      const a = e.setupContext = r.length > 1 ? Hp(e) : null, c = ls(e), f = os(r, e, 0, [
        e.props,
        a
      ]), h = bu(f);
      if (qi(), c(), (h || e.sp) && !fr(e) && cf(e), h) {
        if (f.then(Wl, Wl), t) return f.then((p) => {
          Vl(e, p);
        }).catch((p) => {
          Io(p, e, 0);
        });
        e.asyncDep = f;
      } else Vl(e, f);
    } else Lf(e);
  }
  function Vl(e, t, i) {
    Te(t) ? e.type.__ssrInlineRender ? e.ssrRender = t : e.render = t : $e(t) && (e.setupState = Wu(t)), Lf(e);
  }
  function Lf(e, t, i) {
    const r = e.type;
    e.render || (e.render = r.render || fi);
    {
      const a = ls(e);
      Vi();
      try {
        dp(e);
      } finally {
        qi(), a();
      }
    }
  }
  const Kp = {
    get(e, t) {
      return kt(e, "get", ""), e[t];
    }
  };
  function Hp(e) {
    const t = (i) => {
      e.exposed = i || {};
    };
    return {
      attrs: new Proxy(e.attrs, Kp),
      slots: e.slots,
      emit: e.emit,
      expose: t
    };
  }
  function Ao(e) {
    return e.exposed ? e.exposeProxy || (e.exposeProxy = new Proxy(Wu(il(e.exposed)), {
      get(t, i) {
        if (i in t) return t[i];
        if (i in Bn) return Bn[i](e);
      },
      has(t, i) {
        return i in t || i in Bn;
      }
    })) : e.proxy;
  }
  function Ta(e, t = true) {
    return Te(e) ? e.displayName || e.name : e.name || t && e.__name;
  }
  function Zp(e) {
    return Te(e) && "__vccOpts" in e;
  }
  hl = (e, t) => jd(e, t, ts);
  Jp = function(e, t, i) {
    try {
      Js(-1);
      const r = arguments.length;
      return r === 2 ? $e(t) && !ve(t) ? on(t) ? Rt(e, null, [
        t
      ]) : Rt(e, t) : Rt(e, null, t) : (r > 3 ? i = Array.prototype.slice.call(arguments, 2) : r === 3 && on(i) && (i = [
        i
      ]), Rt(e, t, i));
    } finally {
      Js(1);
    }
  };
  const Yp = "3.5.28";
  let Ma;
  const ql = typeof window < "u" && window.trustedTypes;
  if (ql) try {
    Ma = ql.createPolicy("vue", {
      createHTML: (e) => e
    });
  } catch {
  }
  let xf, Xp, Qp, Fi, Kl, eg, Qi, Tn, an, Nf, Df, tg, Ir, Hl;
  xf = Ma ? (e) => Ma.createHTML(e) : (e) => e;
  Xp = "http://www.w3.org/2000/svg";
  Qp = "http://www.w3.org/1998/Math/MathML";
  Fi = typeof document < "u" ? document : null;
  Kl = Fi && Fi.createElement("template");
  eg = {
    insert: (e, t, i) => {
      t.insertBefore(e, i || null);
    },
    remove: (e) => {
      const t = e.parentNode;
      t && t.removeChild(e);
    },
    createElement: (e, t, i, r) => {
      const a = t === "svg" ? Fi.createElementNS(Xp, e) : t === "mathml" ? Fi.createElementNS(Qp, e) : i ? Fi.createElement(e, {
        is: i
      }) : Fi.createElement(e);
      return e === "select" && r && r.multiple != null && a.setAttribute("multiple", r.multiple), a;
    },
    createText: (e) => Fi.createTextNode(e),
    createComment: (e) => Fi.createComment(e),
    setText: (e, t) => {
      e.nodeValue = t;
    },
    setElementText: (e, t) => {
      e.textContent = t;
    },
    parentNode: (e) => e.parentNode,
    nextSibling: (e) => e.nextSibling,
    querySelector: (e) => Fi.querySelector(e),
    setScopeId(e, t) {
      e.setAttribute(t, "");
    },
    insertStaticContent(e, t, i, r, a, c) {
      const f = i ? i.previousSibling : t.lastChild;
      if (a && (a === c || a.nextSibling)) for (; t.insertBefore(a.cloneNode(true), i), !(a === c || !(a = a.nextSibling)); ) ;
      else {
        Kl.innerHTML = xf(r === "svg" ? `<svg>${e}</svg>` : r === "mathml" ? `<math>${e}</math>` : e);
        const h = Kl.content;
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
  Tn = "animation";
  an = /* @__PURE__ */ Symbol("_vtc");
  Nf = {
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
  Df = dt({}, sf, Nf);
  tg = (e) => (e.displayName = "Transition", e.props = Df, e);
  Nv = tg((e, { slots: t }) => Jp(Xd, Ff(e), t));
  Ir = (e, t = []) => {
    ve(e) ? e.forEach((i) => i(...t)) : e && e(...t);
  };
  Hl = (e) => e ? ve(e) ? e.some((t) => t.length > 1) : e.length > 1 : false;
  function Ff(e) {
    const t = {};
    for (const he in e) he in Nf || (t[he] = e[he]);
    if (e.css === false) return t;
    const { name: i = "v", type: r, duration: a, enterFromClass: c = `${i}-enter-from`, enterActiveClass: f = `${i}-enter-active`, enterToClass: h = `${i}-enter-to`, appearFromClass: p = c, appearActiveClass: y = f, appearToClass: g = h, leaveFromClass: I = `${i}-leave-from`, leaveActiveClass: C = `${i}-leave-active`, leaveToClass: A = `${i}-leave-to` } = e, j = ig(a), L = j && j[0], pe = j && j[1], { onBeforeEnter: se, onEnter: U, onEnterCancelled: Y, onLeave: $, onLeaveCancelled: ue, onBeforeAppear: ge = se, onAppear: re = U, onAppearCancelled: fe = Y } = t, Q = (he, Be, pt, $t) => {
      he._enterCancelled = $t, rr(he, Be ? g : h), rr(he, Be ? y : f), pt && pt();
    }, me = (he, Be) => {
      he._isLeaving = false, rr(he, I), rr(he, A), rr(he, C), Be && Be();
    }, ke = (he) => (Be, pt) => {
      const $t = he ? re : U, Xe = () => Q(Be, he, pt);
      Ir($t, [
        Be,
        Xe
      ]), Zl(() => {
        rr(Be, he ? p : c), bi(Be, he ? g : h), Hl($t) || Jl(Be, r, L, Xe);
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
        ]), bi(he, p), bi(he, y);
      },
      onEnter: ke(false),
      onAppear: ke(true),
      onLeave(he, Be) {
        he._isLeaving = true;
        const pt = () => me(he, Be);
        bi(he, I), he._enterCancelled ? (bi(he, C), Pa(he)) : (Pa(he), bi(he, C)), Zl(() => {
          he._isLeaving && (rr(he, I), bi(he, A), Hl($) || Jl(he, r, pe, pt));
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
  function ig(e) {
    if (e == null) return null;
    if ($e(e)) return [
      Jo(e.enter),
      Jo(e.leave)
    ];
    {
      const t = Jo(e);
      return [
        t,
        t
      ];
    }
  }
  function Jo(e) {
    return Qh(e);
  }
  function bi(e, t) {
    t.split(/\s+/).forEach((i) => i && e.classList.add(i)), (e[an] || (e[an] = /* @__PURE__ */ new Set())).add(t);
  }
  function rr(e, t) {
    t.split(/\s+/).forEach((r) => r && e.classList.remove(r));
    const i = e[an];
    i && (i.delete(t), i.size || (e[an] = void 0));
  }
  function Zl(e) {
    requestAnimationFrame(() => {
      requestAnimationFrame(e);
    });
  }
  let rg = 0;
  function Jl(e, t, i, r) {
    const a = e._endId = ++rg, c = () => {
      a === e._endId && r();
    };
    if (i != null) return setTimeout(c, i);
    const { type: f, timeout: h, propCount: p } = jf(e, t);
    if (!f) return r();
    const y = f + "end";
    let g = 0;
    const I = () => {
      e.removeEventListener(y, C), c();
    }, C = (A) => {
      A.target === e && ++g >= p && I();
    };
    setTimeout(() => {
      g < p && I();
    }, h + 1), e.addEventListener(y, C);
  }
  function jf(e, t) {
    const i = window.getComputedStyle(e), r = (j) => (i[j] || "").split(", "), a = r(`${Qi}Delay`), c = r(`${Qi}Duration`), f = Yl(a, c), h = r(`${Tn}Delay`), p = r(`${Tn}Duration`), y = Yl(h, p);
    let g = null, I = 0, C = 0;
    t === Qi ? f > 0 && (g = Qi, I = f, C = c.length) : t === Tn ? y > 0 && (g = Tn, I = y, C = p.length) : (I = Math.max(f, y), g = I > 0 ? f > y ? Qi : Tn : null, C = g ? g === Qi ? c.length : p.length : 0);
    const A = g === Qi && /\b(?:transform|all)(?:,|$)/.test(r(`${Qi}Property`).toString());
    return {
      type: g,
      timeout: I,
      propCount: C,
      hasTransform: A
    };
  }
  function Yl(e, t) {
    for (; e.length < t.length; ) e = e.concat(e);
    return Math.max(...t.map((i, r) => Xl(i) + Xl(e[r])));
  }
  function Xl(e) {
    return e === "auto" ? 0 : Number(e.slice(0, -1).replace(",", ".")) * 1e3;
  }
  function Pa(e) {
    return (e ? e.ownerDocument : document).body.offsetHeight;
  }
  function ng(e, t, i) {
    const r = e[an];
    r && (t = (t ? [
      t,
      ...r
    ] : [
      ...r
    ]).join(" ")), t == null ? e.removeAttribute("class") : i ? e.setAttribute("class", t) : e.className = t;
  }
  let Xs, Uf;
  Xs = /* @__PURE__ */ Symbol("_vod");
  Uf = /* @__PURE__ */ Symbol("_vsh");
  Dv = {
    name: "show",
    beforeMount(e, { value: t }, { transition: i }) {
      e[Xs] = e.style.display === "none" ? "" : e.style.display, i && t ? i.beforeEnter(e) : Mn(e, t);
    },
    mounted(e, { value: t }, { transition: i }) {
      i && t && i.enter(e);
    },
    updated(e, { value: t, oldValue: i }, { transition: r }) {
      !t != !i && (r ? t ? (r.beforeEnter(e), Mn(e, true), r.enter(e)) : r.leave(e, () => {
        Mn(e, false);
      }) : Mn(e, t));
    },
    beforeUnmount(e, { value: t }) {
      Mn(e, t);
    }
  };
  function Mn(e, t) {
    e.style.display = t ? e[Xs] : "none", e[Uf] = !t;
  }
  const zf = /* @__PURE__ */ Symbol("");
  Fv = function(e) {
    const t = gr();
    if (!t) return;
    const i = t.ut = (a = e(t.proxy)) => {
      Array.from(document.querySelectorAll(`[data-v-owner="${t.uid}"]`)).forEach((c) => Qs(c, a));
    }, r = () => {
      const a = e(t.proxy);
      t.ce ? Qs(t.ce, a) : ka(t.subTree, a), i(a);
    };
    ff(() => {
      Zu(r);
    }), as(() => {
      tn(r, fi, {
        flush: "post"
      });
      const a = new MutationObserver(r);
      a.observe(t.subTree.el.parentNode, {
        childList: true
      }), al(() => a.disconnect());
    });
  };
  function ka(e, t) {
    if (e.shapeFlag & 128) {
      const i = e.suspense;
      e = i.activeBranch, i.pendingBranch && !i.isHydrating && i.effects.push(() => {
        ka(i.activeBranch, t);
      });
    }
    for (; e.component; ) e = e.component.subTree;
    if (e.shapeFlag & 1 && e.el) Qs(e.el, t);
    else if (e.type === At) e.children.forEach((i) => ka(i, t));
    else if (e.type === Wn) {
      let { el: i, anchor: r } = e;
      for (; i && (Qs(i, t), i !== r); ) i = i.nextSibling;
    }
  }
  function Qs(e, t) {
    if (e.nodeType === 1) {
      const i = e.style;
      let r = "";
      for (const a in t) {
        const c = ad(t[a]);
        i.setProperty(`--${a}`, c), r += `--${a}: ${c};`;
      }
      i[zf] = r;
    }
  }
  const sg = /(?:^|;)\s*display\s*:/;
  function og(e, t, i) {
    const r = e.style, a = lt(i);
    let c = false;
    if (i && !a) {
      if (t) if (lt(t)) for (const f of t.split(";")) {
        const h = f.slice(0, f.indexOf(":")).trim();
        i[h] == null && Os(r, h, "");
      }
      else for (const f in t) i[f] == null && Os(r, f, "");
      for (const f in i) f === "display" && (c = true), Os(r, f, i[f]);
    } else if (a) {
      if (t !== i) {
        const f = r[zf];
        f && (i += ";" + f), r.cssText = i, c = sg.test(i);
      }
    } else t && e.removeAttribute("style");
    Xs in e && (e[Xs] = c ? r.display : "", e[Uf] && (r.display = "none"));
  }
  const Ql = /\s*!important$/;
  function Os(e, t, i) {
    if (ve(i)) i.forEach((r) => Os(e, t, r));
    else if (i == null && (i = ""), t.startsWith("--")) e.setProperty(t, i);
    else {
      const r = ag(e, t);
      Ql.test(i) ? e.setProperty(Ji(r), i.replace(Ql, ""), "important") : e[r] = i;
    }
  }
  const ec = [
    "Webkit",
    "Moz",
    "ms"
  ], Yo = {};
  function ag(e, t) {
    const i = Yo[t];
    if (i) return i;
    let r = Yt(t);
    if (r !== "filter" && r in e) return Yo[t] = r;
    r = mo(r);
    for (let a = 0; a < ec.length; a++) {
      const c = ec[a] + r;
      if (c in e) return Yo[t] = c;
    }
    return t;
  }
  const tc = "http://www.w3.org/1999/xlink";
  function ic(e, t, i, r, a, c = sd(t)) {
    r && t.startsWith("xlink:") ? i == null ? e.removeAttributeNS(tc, t.slice(6, t.length)) : e.setAttributeNS(tc, t, i) : i == null || c && !Iu(i) ? e.removeAttribute(t) : e.setAttribute(t, c ? "" : pi(i) ? String(i) : i);
  }
  function rc(e, t, i, r, a) {
    if (t === "innerHTML" || t === "textContent") {
      i != null && (e[t] = t === "innerHTML" ? xf(i) : i);
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
      h === "boolean" ? i = Iu(i) : i == null && h === "string" ? (i = "", f = true) : h === "number" && (i = 0, f = true);
    }
    try {
      e[t] = i;
    } catch {
    }
    f && e.removeAttribute(a || t);
  }
  function lg(e, t, i, r) {
    e.addEventListener(t, i, r);
  }
  function cg(e, t, i, r) {
    e.removeEventListener(t, i, r);
  }
  const nc = /* @__PURE__ */ Symbol("_vei");
  function ug(e, t, i, r, a = null) {
    const c = e[nc] || (e[nc] = {}), f = c[t];
    if (r && f) f.value = r;
    else {
      const [h, p] = fg(t);
      if (r) {
        const y = c[t] = pg(r, a);
        lg(e, h, y, p);
      } else f && (cg(e, h, f, p), c[t] = void 0);
    }
  }
  const sc = /(?:Once|Passive|Capture)$/;
  function fg(e) {
    let t;
    if (sc.test(e)) {
      t = {};
      let r;
      for (; r = e.match(sc); ) e = e.slice(0, e.length - r[0].length), t[r[0].toLowerCase()] = true;
    }
    return [
      e[2] === ":" ? e.slice(3) : Ji(e.slice(2)),
      t
    ];
  }
  let Xo = 0;
  const hg = Promise.resolve(), dg = () => Xo || (hg.then(() => Xo = 0), Xo = Date.now());
  function pg(e, t) {
    const i = (r) => {
      if (!r._vts) r._vts = Date.now();
      else if (r._vts <= i.attached) return;
      mi(gg(r, i.value), t, 5, [
        r
      ]);
    };
    return i.value = e, i.attached = dg(), i;
  }
  function gg(e, t) {
    if (ve(t)) {
      const i = e.stopImmediatePropagation;
      return e.stopImmediatePropagation = () => {
        i.call(e), e._stopped = true;
      }, t.map((r) => (a) => !a._stopped && r && r(a));
    } else return t;
  }
  const oc = (e) => e.charCodeAt(0) === 111 && e.charCodeAt(1) === 110 && e.charCodeAt(2) > 96 && e.charCodeAt(2) < 123, mg = (e, t, i, r, a, c) => {
    const f = a === "svg";
    t === "class" ? ng(e, r, f) : t === "style" ? og(e, i, r) : ho(t) ? Ka(t) || ug(e, t, i, r, c) : (t[0] === "." ? (t = t.slice(1), true) : t[0] === "^" ? (t = t.slice(1), false) : wg(e, t, r, f)) ? (rc(e, t, r), !e.tagName.includes("-") && (t === "value" || t === "checked" || t === "selected") && ic(e, t, r, f, c, t !== "value")) : e._isVueCE && (/[A-Z]/.test(t) || !lt(r)) ? rc(e, Yt(t), r, c, t) : (t === "true-value" ? e._trueValue = r : t === "false-value" && (e._falseValue = r), ic(e, t, r, f));
  };
  function wg(e, t, i, r) {
    if (r) return !!(t === "innerHTML" || t === "textContent" || t in e && oc(t) && Te(i));
    if (t === "spellcheck" || t === "draggable" || t === "translate" || t === "autocorrect" || t === "sandbox" && e.tagName === "IFRAME" || t === "form" || t === "list" && e.tagName === "INPUT" || t === "type" && e.tagName === "TEXTAREA") return false;
    if (t === "width" || t === "height") {
      const a = e.tagName;
      if (a === "IMG" || a === "VIDEO" || a === "CANVAS" || a === "SOURCE") return false;
    }
    return oc(t) && lt(i) ? false : t in e;
  }
  let Gf, $f, eo, ac, yg, bg;
  Gf = /* @__PURE__ */ new WeakMap();
  $f = /* @__PURE__ */ new WeakMap();
  eo = /* @__PURE__ */ Symbol("_moveCb");
  ac = /* @__PURE__ */ Symbol("_enterCb");
  yg = (e) => (delete e.props.mode, e);
  bg = yg({
    name: "TransitionGroup",
    props: dt({}, Df, {
      tag: String,
      moveClass: String
    }),
    setup(e, { slots: t }) {
      const i = gr(), r = nf();
      let a, c;
      return sl(() => {
        if (!a.length) return;
        const f = e.moveClass || `${e.name || "v"}-move`;
        if (!Ig(a[0].el, i.vnode.el, f)) {
          a = [];
          return;
        }
        a.forEach(vg), a.forEach(_g);
        const h = a.filter(Eg);
        Pa(i.vnode.el), h.forEach((p) => {
          const y = p.el, g = y.style;
          bi(y, f), g.transform = g.webkitTransform = g.transitionDuration = "";
          const I = y[eo] = (C) => {
            C && C.target !== y || (!C || C.propertyName.endsWith("transform")) && (y.removeEventListener("transitionend", I), y[eo] = null, rr(y, f));
          };
          y.addEventListener("transitionend", I);
        }), a = [];
      }), () => {
        const f = Ne(e), h = Ff(f);
        let p = f.tag || At;
        if (a = [], c) for (let y = 0; y < c.length; y++) {
          const g = c[y];
          g.el && g.el instanceof Element && (a.push(g), dr(g, Qn(g, h, r, i)), Gf.set(g, Bf(g.el)));
        }
        c = t.default ? nl(t.default()) : [];
        for (let y = 0; y < c.length; y++) {
          const g = c[y];
          g.key != null && dr(g, Qn(g, h, r, i));
        }
        return Rt(p, null, c);
      };
    }
  });
  jv = bg;
  function vg(e) {
    const t = e.el;
    t[eo] && t[eo](), t[ac] && t[ac]();
  }
  function _g(e) {
    $f.set(e, Bf(e.el));
  }
  function Eg(e) {
    const t = Gf.get(e), i = $f.get(e), r = t.left - i.left, a = t.top - i.top;
    if (r || a) {
      const c = e.el, f = c.style, h = c.getBoundingClientRect();
      let p = 1, y = 1;
      return c.offsetWidth && (p = h.width / c.offsetWidth), c.offsetHeight && (y = h.height / c.offsetHeight), (!Number.isFinite(p) || p === 0) && (p = 1), (!Number.isFinite(y) || y === 0) && (y = 1), Math.abs(p - 1) < 0.01 && (p = 1), Math.abs(y - 1) < 0.01 && (y = 1), f.transform = f.webkitTransform = `translate(${r / p}px,${a / y}px)`, f.transitionDuration = "0s", e;
    }
  }
  function Bf(e) {
    const t = e.getBoundingClientRect();
    return {
      left: t.left,
      top: t.top
    };
  }
  function Ig(e, t, i) {
    const r = e.cloneNode(), a = e[an];
    a && a.forEach((h) => {
      h.split(/\s+/).forEach((p) => p && r.classList.remove(p));
    }), i.split(/\s+/).forEach((h) => h && r.classList.add(h)), r.style.display = "none";
    const c = t.nodeType === 1 ? t : t.parentNode;
    c.appendChild(r);
    const { hasTransform: f } = jf(r);
    return c.removeChild(r), f;
  }
  let Sg, Tg, Mg, Pg;
  Sg = [
    "ctrl",
    "shift",
    "alt",
    "meta"
  ];
  Tg = {
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
    exact: (e, t) => Sg.some((i) => e[`${i}Key`] && !t.includes(i))
  };
  Uv = (e, t) => {
    if (!e) return e;
    const i = e._withMods || (e._withMods = {}), r = t.join(".");
    return i[r] || (i[r] = ((a, ...c) => {
      for (let f = 0; f < t.length; f++) {
        const h = Tg[t[f]];
        if (h && h(a, t)) return;
      }
      return e(a, ...c);
    }));
  };
  Mg = {
    esc: "escape",
    space: " ",
    up: "arrow-up",
    left: "arrow-left",
    right: "arrow-right",
    down: "arrow-down",
    delete: "backspace"
  };
  zv = (e, t) => {
    const i = e._withKeys || (e._withKeys = {}), r = t.join(".");
    return i[r] || (i[r] = ((a) => {
      if (!("key" in a)) return;
      const c = Ji(a.key);
      if (t.some((f) => f === c || Mg[f] === c)) return e(a);
    }));
  };
  Pg = dt({
    patchProp: mg
  }, eg);
  let lc;
  function kg() {
    return lc || (lc = Op(Pg));
  }
  const Wf = ((...e) => {
    const t = kg().createApp(...e), { mount: i } = t;
    return t.mount = (r) => {
      const a = Cg(r);
      if (!a) return;
      const c = t._component;
      !Te(c) && !c.render && !c.template && (c.template = a.innerHTML), a.nodeType === 1 && (a.textContent = "");
      const f = i(a, false, Ag(a));
      return a instanceof Element && (a.removeAttribute("v-cloak"), a.setAttribute("data-v-app", "")), f;
    }, t;
  });
  function Ag(e) {
    if (e instanceof SVGElement) return "svg";
    if (typeof MathMLElement == "function" && e instanceof MathMLElement) return "mathml";
  }
  function Cg(e) {
    return lt(e) ? document.querySelector(e) : e;
  }
  const Rg = "" + new URL("../favicon.svg", import.meta.url).href;
  let Vf, Og, qf, Lg, xg, Pn;
  Vf = typeof global == "object" && global && global.Object === Object && global;
  Og = typeof self == "object" && self && self.Object === Object && self;
  ki = Vf || Og || Function("return this")();
  ln = ki.Symbol;
  qf = Object.prototype;
  Lg = qf.hasOwnProperty;
  xg = qf.toString;
  Pn = ln ? ln.toStringTag : void 0;
  function Ng(e) {
    var t = Lg.call(e, Pn), i = e[Pn];
    try {
      e[Pn] = void 0;
      var r = true;
    } catch {
    }
    var a = xg.call(e);
    return r && (t ? e[Pn] = i : delete e[Pn]), a;
  }
  var Dg = Object.prototype, Fg = Dg.toString;
  function jg(e) {
    return Fg.call(e);
  }
  var Ug = "[object Null]", zg = "[object Undefined]", cc = ln ? ln.toStringTag : void 0;
  mr = function(e) {
    return e == null ? e === void 0 ? zg : Ug : cc && cc in Object(e) ? Ng(e) : jg(e);
  };
  wr = function(e) {
    return e != null && typeof e == "object";
  };
  Co = Array.isArray;
  Ro = function(e) {
    var t = typeof e;
    return e != null && (t == "object" || t == "function");
  };
  var Gg = "[object AsyncFunction]", $g = "[object Function]", Bg = "[object GeneratorFunction]", Wg = "[object Proxy]";
  Kf = function(e) {
    if (!Ro(e)) return false;
    var t = mr(e);
    return t == $g || t == Bg || t == Gg || t == Wg;
  };
  var Qo = ki["__core-js_shared__"], uc = (function() {
    var e = /[^.]+$/.exec(Qo && Qo.keys && Qo.keys.IE_PROTO || "");
    return e ? "Symbol(src)_1." + e : "";
  })();
  function Vg(e) {
    return !!uc && uc in e;
  }
  var qg = Function.prototype, Kg = qg.toString;
  function jr(e) {
    if (e != null) {
      try {
        return Kg.call(e);
      } catch {
      }
      try {
        return e + "";
      } catch {
      }
    }
    return "";
  }
  var Hg = /[\\^$.*+?()[\]{}|]/g, Zg = /^\[object .+?Constructor\]$/, Jg = Function.prototype, Yg = Object.prototype, Xg = Jg.toString, Qg = Yg.hasOwnProperty, em = RegExp("^" + Xg.call(Qg).replace(Hg, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$");
  function tm(e) {
    if (!Ro(e) || Vg(e)) return false;
    var t = Kf(e) ? em : Zg;
    return t.test(jr(e));
  }
  function im(e, t) {
    return e == null ? void 0 : e[t];
  }
  function Ur(e, t) {
    var i = im(e, t);
    return tm(i) ? i : void 0;
  }
  let Aa, fc, rm;
  Aa = Ur(ki, "WeakMap");
  fc = Object.create;
  rm = /* @__PURE__ */ (function() {
    function e() {
    }
    return function(t) {
      if (!Ro(t)) return {};
      if (fc) return fc(t);
      e.prototype = t;
      var i = new e();
      return e.prototype = void 0, i;
    };
  })();
  hc = (function() {
    try {
      var e = Ur(Object, "defineProperty");
      return e({}, "", {}), e;
    } catch {
    }
  })();
  function nm(e, t) {
    for (var i = -1, r = e == null ? 0 : e.length; ++i < r && t(e[i], i, e) !== false; ) ;
    return e;
  }
  var sm = 9007199254740991, om = /^(?:0|[1-9]\d*)$/;
  am = function(e, t) {
    var i = typeof e;
    return t = t ?? sm, !!t && (i == "number" || i != "symbol" && om.test(e)) && e > -1 && e % 1 == 0 && e < t;
  };
  lm = function(e, t, i) {
    t == "__proto__" && hc ? hc(e, t, {
      configurable: true,
      enumerable: true,
      value: i,
      writable: true
    }) : e[t] = i;
  };
  Hf = function(e, t) {
    return e === t || e !== e && t !== t;
  };
  var cm = Object.prototype, um = cm.hasOwnProperty;
  fm = function(e, t, i) {
    var r = e[t];
    (!(um.call(e, t) && Hf(r, i)) || i === void 0 && !(t in e)) && lm(e, t, i);
  };
  var hm = 9007199254740991;
  Zf = function(e) {
    return typeof e == "number" && e > -1 && e % 1 == 0 && e <= hm;
  };
  dm = function(e) {
    return e != null && Zf(e.length) && !Kf(e);
  };
  var pm = Object.prototype;
  Jf = function(e) {
    var t = e && e.constructor, i = typeof t == "function" && t.prototype || pm;
    return e === i;
  };
  function gm(e, t) {
    for (var i = -1, r = Array(e); ++i < e; ) r[i] = t(i);
    return r;
  }
  var mm = "[object Arguments]";
  function dc(e) {
    return wr(e) && mr(e) == mm;
  }
  let Yf, wm, ym;
  Yf = Object.prototype;
  wm = Yf.hasOwnProperty;
  ym = Yf.propertyIsEnumerable;
  bm = dc(/* @__PURE__ */ (function() {
    return arguments;
  })()) ? dc : function(e) {
    return wr(e) && wm.call(e, "callee") && !ym.call(e, "callee");
  };
  function vm() {
    return false;
  }
  let Xf, pc, _m, gc, Em, Im, Sm, Tm, Mm, Pm, km, Am, Cm, Rm, Om, Lm, xm, Nm, Dm, Fm, jm, Um, zm, Gm, $m, Bm, Wm, Vm, qm, rt;
  Xf = typeof exports == "object" && exports && !exports.nodeType && exports;
  pc = Xf && typeof module == "object" && module && !module.nodeType && module;
  _m = pc && pc.exports === Xf;
  gc = _m ? ki.Buffer : void 0;
  Em = gc ? gc.isBuffer : void 0;
  Qf = Em || vm;
  Im = "[object Arguments]";
  Sm = "[object Array]";
  Tm = "[object Boolean]";
  Mm = "[object Date]";
  Pm = "[object Error]";
  km = "[object Function]";
  Am = "[object Map]";
  Cm = "[object Number]";
  Rm = "[object Object]";
  Om = "[object RegExp]";
  Lm = "[object Set]";
  xm = "[object String]";
  Nm = "[object WeakMap]";
  Dm = "[object ArrayBuffer]";
  Fm = "[object DataView]";
  jm = "[object Float32Array]";
  Um = "[object Float64Array]";
  zm = "[object Int8Array]";
  Gm = "[object Int16Array]";
  $m = "[object Int32Array]";
  Bm = "[object Uint8Array]";
  Wm = "[object Uint8ClampedArray]";
  Vm = "[object Uint16Array]";
  qm = "[object Uint32Array]";
  rt = {};
  rt[jm] = rt[Um] = rt[zm] = rt[Gm] = rt[$m] = rt[Bm] = rt[Wm] = rt[Vm] = rt[qm] = true;
  rt[Im] = rt[Sm] = rt[Dm] = rt[Tm] = rt[Fm] = rt[Mm] = rt[Pm] = rt[km] = rt[Am] = rt[Cm] = rt[Rm] = rt[Om] = rt[Lm] = rt[xm] = rt[Nm] = false;
  function Km(e) {
    return wr(e) && Zf(e.length) && !!rt[mr(e)];
  }
  function dl(e) {
    return function(t) {
      return e(t);
    };
  }
  let eh, qn, Hm, ea, cn, mc, Jm, Ym;
  eh = typeof exports == "object" && exports && !exports.nodeType && exports;
  qn = eh && typeof module == "object" && module && !module.nodeType && module;
  Hm = qn && qn.exports === eh;
  ea = Hm && Vf.process;
  cn = (function() {
    try {
      var e = qn && qn.require && qn.require("util").types;
      return e || ea && ea.binding && ea.binding("util");
    } catch {
    }
  })();
  mc = cn && cn.isTypedArray;
  Zm = mc ? dl(mc) : Km;
  Jm = Object.prototype;
  Ym = Jm.hasOwnProperty;
  Xm = function(e, t) {
    var i = Co(e), r = !i && bm(e), a = !i && !r && Qf(e), c = !i && !r && !a && Zm(e), f = i || r || a || c, h = f ? gm(e.length, String) : [], p = h.length;
    for (var y in e) (t || Ym.call(e, y)) && !(f && (y == "length" || a && (y == "offset" || y == "parent") || c && (y == "buffer" || y == "byteLength" || y == "byteOffset") || am(y, p))) && h.push(y);
    return h;
  };
  function th(e, t) {
    return function(i) {
      return e(t(i));
    };
  }
  var Qm = th(Object.keys, Object), ew = Object.prototype, tw = ew.hasOwnProperty;
  function iw(e) {
    if (!Jf(e)) return Qm(e);
    var t = [];
    for (var i in Object(e)) tw.call(e, i) && i != "constructor" && t.push(i);
    return t;
  }
  rw = function(e) {
    return dm(e) ? Xm(e) : iw(e);
  };
  var is = Ur(Object, "create");
  function nw() {
    this.__data__ = is ? is(null) : {}, this.size = 0;
  }
  function sw(e) {
    var t = this.has(e) && delete this.__data__[e];
    return this.size -= t ? 1 : 0, t;
  }
  var ow = "__lodash_hash_undefined__", aw = Object.prototype, lw = aw.hasOwnProperty;
  function cw(e) {
    var t = this.__data__;
    if (is) {
      var i = t[e];
      return i === ow ? void 0 : i;
    }
    return lw.call(t, e) ? t[e] : void 0;
  }
  var uw = Object.prototype, fw = uw.hasOwnProperty;
  function hw(e) {
    var t = this.__data__;
    return is ? t[e] !== void 0 : fw.call(t, e);
  }
  var dw = "__lodash_hash_undefined__";
  function pw(e, t) {
    var i = this.__data__;
    return this.size += this.has(e) ? 0 : 1, i[e] = is && t === void 0 ? dw : t, this;
  }
  function Dr(e) {
    var t = -1, i = e == null ? 0 : e.length;
    for (this.clear(); ++t < i; ) {
      var r = e[t];
      this.set(r[0], r[1]);
    }
  }
  Dr.prototype.clear = nw;
  Dr.prototype.delete = sw;
  Dr.prototype.get = cw;
  Dr.prototype.has = hw;
  Dr.prototype.set = pw;
  function gw() {
    this.__data__ = [], this.size = 0;
  }
  function Oo(e, t) {
    for (var i = e.length; i--; ) if (Hf(e[i][0], t)) return i;
    return -1;
  }
  var mw = Array.prototype, ww = mw.splice;
  function yw(e) {
    var t = this.__data__, i = Oo(t, e);
    if (i < 0) return false;
    var r = t.length - 1;
    return i == r ? t.pop() : ww.call(t, i, 1), --this.size, true;
  }
  function bw(e) {
    var t = this.__data__, i = Oo(t, e);
    return i < 0 ? void 0 : t[i][1];
  }
  function vw(e) {
    return Oo(this.__data__, e) > -1;
  }
  function _w(e, t) {
    var i = this.__data__, r = Oo(i, e);
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
  Xi.prototype.clear = gw;
  Xi.prototype.delete = yw;
  Xi.prototype.get = bw;
  Xi.prototype.has = vw;
  Xi.prototype.set = _w;
  var rs = Ur(ki, "Map");
  function Ew() {
    this.size = 0, this.__data__ = {
      hash: new Dr(),
      map: new (rs || Xi)(),
      string: new Dr()
    };
  }
  function Iw(e) {
    var t = typeof e;
    return t == "string" || t == "number" || t == "symbol" || t == "boolean" ? e !== "__proto__" : e === null;
  }
  function Lo(e, t) {
    var i = e.__data__;
    return Iw(t) ? i[typeof t == "string" ? "string" : "hash"] : i.map;
  }
  function Sw(e) {
    var t = Lo(this, e).delete(e);
    return this.size -= t ? 1 : 0, t;
  }
  function Tw(e) {
    return Lo(this, e).get(e);
  }
  function Mw(e) {
    return Lo(this, e).has(e);
  }
  function Pw(e, t) {
    var i = Lo(this, e), r = i.size;
    return i.set(e, t), this.size += i.size == r ? 0 : 1, this;
  }
  yn = function(e) {
    var t = -1, i = e == null ? 0 : e.length;
    for (this.clear(); ++t < i; ) {
      var r = e[t];
      this.set(r[0], r[1]);
    }
  };
  yn.prototype.clear = Ew;
  yn.prototype.delete = Sw;
  yn.prototype.get = Tw;
  yn.prototype.has = Mw;
  yn.prototype.set = Pw;
  function kw(e, t) {
    for (var i = -1, r = t.length, a = e.length; ++i < r; ) e[a + i] = t[i];
    return e;
  }
  var ih = th(Object.getPrototypeOf, Object), Aw = "[object Object]", Cw = Function.prototype, Rw = Object.prototype, rh = Cw.toString, Ow = Rw.hasOwnProperty, Lw = rh.call(Object);
  xw = function(e) {
    if (!wr(e) || mr(e) != Aw) return false;
    var t = ih(e);
    if (t === null) return true;
    var i = Ow.call(t, "constructor") && t.constructor;
    return typeof i == "function" && i instanceof i && rh.call(i) == Lw;
  };
  var Nw = "[object DOMException]", Dw = "[object Error]";
  function nh(e) {
    if (!wr(e)) return false;
    var t = mr(e);
    return t == Dw || t == Nw || typeof e.message == "string" && typeof e.name == "string" && !xw(e);
  }
  function Fw() {
    this.__data__ = new Xi(), this.size = 0;
  }
  function jw(e) {
    var t = this.__data__, i = t.delete(e);
    return this.size = t.size, i;
  }
  function Uw(e) {
    return this.__data__.get(e);
  }
  function zw(e) {
    return this.__data__.has(e);
  }
  var Gw = 200;
  function $w(e, t) {
    var i = this.__data__;
    if (i instanceof Xi) {
      var r = i.__data__;
      if (!rs || r.length < Gw - 1) return r.push([
        e,
        t
      ]), this.size = ++i.size, this;
      i = this.__data__ = new yn(r);
    }
    return i.set(e, t), this.size = i.size, this;
  }
  bn = function(e) {
    var t = this.__data__ = new Xi(e);
    this.size = t.size;
  };
  bn.prototype.clear = Fw;
  bn.prototype.delete = jw;
  bn.prototype.get = Uw;
  bn.prototype.has = zw;
  bn.prototype.set = $w;
  var sh = typeof exports == "object" && exports && !exports.nodeType && exports, wc = sh && typeof module == "object" && module && !module.nodeType && module, Bw = wc && wc.exports === sh, yc = Bw ? ki.Buffer : void 0, bc = yc ? yc.allocUnsafe : void 0;
  Ww = function(e, t) {
    if (t) return e.slice();
    var i = e.length, r = bc ? bc(i) : new e.constructor(i);
    return e.copy(r), r;
  };
  function Vw(e, t) {
    for (var i = -1, r = e == null ? 0 : e.length, a = 0, c = []; ++i < r; ) {
      var f = e[i];
      t(f, i, e) && (c[a++] = f);
    }
    return c;
  }
  function qw() {
    return [];
  }
  var Kw = Object.prototype, Hw = Kw.propertyIsEnumerable, vc = Object.getOwnPropertySymbols, Zw = vc ? function(e) {
    return e == null ? [] : (e = Object(e), Vw(vc(e), function(t) {
      return Hw.call(e, t);
    }));
  } : qw;
  function Jw(e, t, i) {
    var r = t(e);
    return Co(e) ? r : kw(r, i(e));
  }
  Yw = function(e) {
    return Jw(e, rw, Zw);
  };
  let Ca, Ra, Oa, _c, Xw, Ec, Ic, Sc, Tc, Qw, e0, t0, i0, r0;
  Ca = Ur(ki, "DataView");
  Ra = Ur(ki, "Promise");
  Oa = Ur(ki, "Set");
  _c = "[object Map]";
  Xw = "[object Object]";
  Ec = "[object Promise]";
  Ic = "[object Set]";
  Sc = "[object WeakMap]";
  Tc = "[object DataView]";
  Qw = jr(Ca);
  e0 = jr(rs);
  t0 = jr(Ra);
  i0 = jr(Oa);
  r0 = jr(Aa);
  Ui = mr;
  (Ca && Ui(new Ca(new ArrayBuffer(1))) != Tc || rs && Ui(new rs()) != _c || Ra && Ui(Ra.resolve()) != Ec || Oa && Ui(new Oa()) != Ic || Aa && Ui(new Aa()) != Sc) && (Ui = function(e) {
    var t = mr(e), i = t == Xw ? e.constructor : void 0, r = i ? jr(i) : "";
    if (r) switch (r) {
      case Qw:
        return Tc;
      case e0:
        return _c;
      case t0:
        return Ec;
      case i0:
        return Ic;
      case r0:
        return Sc;
    }
    return t;
  });
  var n0 = Object.prototype, s0 = n0.hasOwnProperty;
  function o0(e) {
    var t = e.length, i = new e.constructor(t);
    return t && typeof e[0] == "string" && s0.call(e, "index") && (i.index = e.index, i.input = e.input), i;
  }
  Mc = ki.Uint8Array;
  function pl(e) {
    var t = new e.constructor(e.byteLength);
    return new Mc(t).set(new Mc(e)), t;
  }
  function a0(e, t) {
    var i = pl(e.buffer);
    return new e.constructor(i, e.byteOffset, e.byteLength);
  }
  var l0 = /\w*$/;
  function c0(e) {
    var t = new e.constructor(e.source, l0.exec(e));
    return t.lastIndex = e.lastIndex, t;
  }
  var Pc = ln ? ln.prototype : void 0, kc = Pc ? Pc.valueOf : void 0;
  function u0(e) {
    return kc ? Object(kc.call(e)) : {};
  }
  f0 = function(e, t) {
    var i = t ? pl(e.buffer) : e.buffer;
    return new e.constructor(i, e.byteOffset, e.length);
  };
  var h0 = "[object Boolean]", d0 = "[object Date]", p0 = "[object Map]", g0 = "[object Number]", m0 = "[object RegExp]", w0 = "[object Set]", y0 = "[object String]", b0 = "[object Symbol]", v0 = "[object ArrayBuffer]", _0 = "[object DataView]", E0 = "[object Float32Array]", I0 = "[object Float64Array]", S0 = "[object Int8Array]", T0 = "[object Int16Array]", M0 = "[object Int32Array]", P0 = "[object Uint8Array]", k0 = "[object Uint8ClampedArray]", A0 = "[object Uint16Array]", C0 = "[object Uint32Array]";
  function R0(e, t, i) {
    var r = e.constructor;
    switch (t) {
      case v0:
        return pl(e);
      case h0:
      case d0:
        return new r(+e);
      case _0:
        return a0(e);
      case E0:
      case I0:
      case S0:
      case T0:
      case M0:
      case P0:
      case k0:
      case A0:
      case C0:
        return f0(e, i);
      case p0:
        return new r();
      case g0:
      case y0:
        return new r(e);
      case m0:
        return c0(e);
      case w0:
        return new r();
      case b0:
        return u0(e);
    }
  }
  O0 = function(e) {
    return typeof e.constructor == "function" && !Jf(e) ? rm(ih(e)) : {};
  };
  var L0 = "[object Map]";
  function x0(e) {
    return wr(e) && Ui(e) == L0;
  }
  var Ac = cn && cn.isMap, N0 = Ac ? dl(Ac) : x0, D0 = "[object Set]";
  function F0(e) {
    return wr(e) && Ui(e) == D0;
  }
  var Cc = cn && cn.isSet, j0 = Cc ? dl(Cc) : F0, U0 = 1, oh = "[object Arguments]", z0 = "[object Array]", G0 = "[object Boolean]", $0 = "[object Date]", B0 = "[object Error]", ah = "[object Function]", W0 = "[object GeneratorFunction]", V0 = "[object Map]", q0 = "[object Number]", lh = "[object Object]", K0 = "[object RegExp]", H0 = "[object Set]", Z0 = "[object String]", J0 = "[object Symbol]", Y0 = "[object WeakMap]", X0 = "[object ArrayBuffer]", Q0 = "[object DataView]", ey = "[object Float32Array]", ty = "[object Float64Array]", iy = "[object Int8Array]", ry = "[object Int16Array]", ny = "[object Int32Array]", sy = "[object Uint8Array]", oy = "[object Uint8ClampedArray]", ay = "[object Uint16Array]", ly = "[object Uint32Array]", Qe = {};
  Qe[oh] = Qe[z0] = Qe[X0] = Qe[Q0] = Qe[G0] = Qe[$0] = Qe[ey] = Qe[ty] = Qe[iy] = Qe[ry] = Qe[ny] = Qe[V0] = Qe[q0] = Qe[lh] = Qe[K0] = Qe[H0] = Qe[Z0] = Qe[J0] = Qe[sy] = Qe[oy] = Qe[ay] = Qe[ly] = true;
  Qe[B0] = Qe[ah] = Qe[Y0] = false;
  function Ls(e, t, i, r, a, c) {
    var f, h = t & U0;
    if (f !== void 0) return f;
    if (!Ro(e)) return e;
    var p = Co(e);
    if (p) f = o0(e);
    else {
      var y = Ui(e), g = y == ah || y == W0;
      if (Qf(e)) return Ww(e, h);
      if (y == lh || y == oh || g && !a) f = g ? {} : O0(e);
      else {
        if (!Qe[y]) return a ? e : {};
        f = R0(e, y, h);
      }
    }
    c || (c = new bn());
    var I = c.get(e);
    if (I) return I;
    c.set(e, f), j0(e) ? e.forEach(function(j) {
      f.add(Ls(j, t, i, j, e, c));
    }) : N0(e) && e.forEach(function(j, L) {
      f.set(L, Ls(j, t, i, L, e, c));
    });
    var C = Yw, A = p ? void 0 : C(e);
    return nm(A || e, function(j, L) {
      A && (L = j, j = e[L]), fm(f, L, Ls(j, t, i, L, e, c));
    }), f;
  }
  var cy = 1, uy = 4;
  La = function(e) {
    return Ls(e, cy | uy);
  };
  var fy = "[object String]";
  function xa(e) {
    return typeof e == "string" || !Co(e) && wr(e) && mr(e) == fy;
  }
  const Lt = (e) => xa(e) ? e : nh(e) ? String(e) : JSON.stringify(e), yi = {
    unloaded: (...e) => `[loadModules] Module "${Lt(e[0])}" has not been loaded yet`,
    loading: (...e) => `[loadModules] Module "${Lt(e[0])}" is loading`,
    loaded: (...e) => `[loadModules] Module "${Lt(e[0])}" has been loaded`,
    error: (...e) => `[loadModules] Module "${Lt(e[0])}" failed to load.
Trackback: 
${Lt(e[1])}`,
    errorDetermined: (...e) => `[loadModules] Module "${Lt(e[0])}" failed to load, asserted by another instance, skip`,
    alreadyLoading: (...e) => `[loadModules] Module "${Lt(e[0])}" is already loading by another instance, skip`,
    alreadyLoaded: (...e) => `[loadModules] Module "${Lt(e[0])}" has been loaded by another instance, skip`,
    missingDependencies: (...e) => `[loadModules] Module "${Lt(e[0])}" is missing the following dependencies: ${Lt(e[1])}`,
    loadDependencies: (...e) => `[loadModules] Module "${Lt(e[0])}" is loading its dependencies (${e.slice(1).map((t) => Lt(t)).join(", ")})`,
    dependenciesReady: (...e) => `[loadModules] Module "${Lt(e[0])}" dependencies are ready`,
    dependenciesFailure: (...e) => `[loadModules] Module "${Lt(e[0])}" dependencies failed to load. 

Trackback: 
${Lt(e[1])}`
  }, hy = {
    info: console.info,
    warn: console.warn,
    error: console.error,
    debug: console.debug
  };
  async function ch(e, t, i = 1e4, r = {}, a = 0, c = 0, f = 0) {
    var _a3, _b2, _c2, _d2, _e, _f2;
    const { logger: h = hy, progressReporter: p, printLog: y = true } = r, g = e.find((L) => L.name === t);
    if (!g) throw new Error(`cannot exactly find module "${t}" from the library`);
    const I = e.findIndex((L) => L.name === g.name);
    if (e[I].status === "loaded") return y && h.info(yi.alreadyLoaded(g.name)), {
      completed: f,
      total: c
    };
    const C = g.dependencies || [], A = e.filter((L) => C.includes(L.name)), j = C.filter((L) => !e.find((pe) => pe.name === L));
    if (j.length > 0) {
      const L = yi.missingDependencies(g.name, j.join(", "));
      throw y && h.error(L), new Error(L);
    }
    if (e[I].status === "error") {
      const L = yi.errorDetermined(g.name);
      throw y && h.info(L), new Error(L);
    }
    if (e[I].status === "loading") return y && h.info(yi.alreadyLoading(g.name)), await dy(e, g.name, i, h), {
      completed: f,
      total: c
    };
    try {
      let L = c, pe = f;
      if (a === 0) {
        const se = /* @__PURE__ */ new Set(), U = (Y) => {
          if (se.has(Y)) return;
          se.add(Y);
          const $ = e.find((ue) => ue.name === Y);
          if ($ && $.dependencies) for (const ue of $.dependencies) U(ue);
        };
        U(t), L = se.size, pe = 0;
      }
      if (A.length > 0) {
        h.info(yi.loadDependencies(g.name, A.map((se) => se.name)));
        for (const se of A) {
          const U = await ch(e, se.name, i, {
            logger: h,
            progressReporter: p,
            printLog: y
          }, a + 1, L, pe);
          pe = U.completed, L = U.total, (_a3 = p == null ? void 0 : p.onOverallProgress) == null ? void 0 : _a3.call(p, pe, L);
        }
        y && h.info(yi.dependenciesReady(g.name));
      }
      e[I].status = "loading", (_b2 = p == null ? void 0 : p.onModuleStart) == null ? void 0 : _b2.call(p, g.displayName);
      try {
        return y && h.info(yi.loading(g.name)), await g.moduleInit(i), e[I].status = "loaded", pe++, (_c2 = p == null ? void 0 : p.onModuleComplete) == null ? void 0 : _c2.call(p, g.displayName), (_d2 = p == null ? void 0 : p.onOverallProgress) == null ? void 0 : _d2.call(p, pe, L), y && h.info(yi.loaded(g.name)), {
          completed: pe,
          total: L
        };
      } catch (se) {
        e[I].status = "error";
        const U = yi.error(g.name, xa(se) ? se : nh(se) ? se.message : JSON.stringify(se));
        throw h.error(U), (_e = p == null ? void 0 : p.onModuleError) == null ? void 0 : _e.call(p, g.displayName, xa(se) ? new Error(se) : se), new Error(U);
      }
    } catch (L) {
      e[I].status = "error", console.log(L);
      const pe = yi.error(g.name, L);
      throw h.error(pe), (_f2 = p == null ? void 0 : p.onModuleError) == null ? void 0 : _f2.call(p, g.displayName, L), new Error(pe);
    }
  }
  async function dy(e, t, i = 1e4, r) {
    const a = Date.now();
    return new Promise((c, f) => {
      const h = setInterval(() => {
        const p = e.find((y) => y.name === t);
        if (p && p.status === "loaded") clearInterval(h), c();
        else if (Date.now() - a > i) {
          clearInterval(h);
          const y = new Error(`Load module ${t} timeout`);
          r == null ? void 0 : r.error(y.message), f(y);
        }
      }, 10);
    });
  }
  let py, gy, Rc, my, wy, uh;
  py = "modulepreload";
  gy = function(e, t) {
    return new URL(e, t).href;
  };
  Rc = {};
  Kn = function(t, i, r) {
    let a = Promise.resolve();
    if (i && i.length > 0) {
      let y = function(g) {
        return Promise.all(g.map((I) => Promise.resolve(I).then((C) => ({
          status: "fulfilled",
          value: C
        }), (C) => ({
          status: "rejected",
          reason: C
        }))));
      };
      const f = document.getElementsByTagName("link"), h = document.querySelector("meta[property=csp-nonce]"), p = (h == null ? void 0 : h.nonce) || (h == null ? void 0 : h.getAttribute("nonce"));
      a = y(i.map((g) => {
        if (g = gy(g, r), g in Rc) return;
        Rc[g] = true;
        const I = g.endsWith(".css"), C = I ? '[rel="stylesheet"]' : "";
        if (r) for (let j = f.length - 1; j >= 0; j--) {
          const L = f[j];
          if (L.href === g && (!I || L.rel === "stylesheet")) return;
        }
        else if (document.querySelector(`link[href="${g}"]${C}`)) return;
        const A = document.createElement("link");
        if (A.rel = I ? "stylesheet" : py, I || (A.as = "script"), A.crossOrigin = "", A.href = g, p && A.setAttribute("nonce", p), document.head.appendChild(A), I) return new Promise((j, L) => {
          A.addEventListener("load", j), A.addEventListener("error", () => L(new Error(`Unable to preload CSS for ${g}`)));
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
  my = [
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
  wy = {
    withStackTrace: false
  };
  uh = (e, t, i = wy) => {
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
          y(r.next(g));
        } catch (I) {
          f(I);
        }
      }
      function p(g) {
        try {
          y(r.throw(g));
        } catch (I) {
          f(I);
        }
      }
      function y(g) {
        g.done ? c(g.value) : a(g.value).then(h, p);
      }
      y((r = r.apply(e, [])).next());
    });
  }
  function Oc(e) {
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
  function Lc(e, t, i) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var r = i.apply(e, t || []), a, c = [];
    return a = Object.create((typeof AsyncIterator == "function" ? AsyncIterator : Object).prototype), h("next"), h("throw"), h("return", f), a[Symbol.asyncIterator] = function() {
      return this;
    }, a;
    function f(A) {
      return function(j) {
        return Promise.resolve(j).then(A, I);
      };
    }
    function h(A, j) {
      r[A] && (a[A] = function(L) {
        return new Promise(function(pe, se) {
          c.push([
            A,
            L,
            pe,
            se
          ]) > 1 || p(A, L);
        });
      }, j && (a[A] = j(a[A])));
    }
    function p(A, j) {
      try {
        y(r[A](j));
      } catch (L) {
        C(c[0][3], L);
      }
    }
    function y(A) {
      A.value instanceof Mi ? Promise.resolve(A.value.v).then(g, I) : C(c[0][2], A);
    }
    function g(A) {
      p("next", A);
    }
    function I(A) {
      p("throw", A);
    }
    function C(A, j) {
      A(j), c.shift(), c.length && p(c[0][0], c[0][1]);
    }
  }
  function yy(e) {
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
  function by(e) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var t = e[Symbol.asyncIterator], i;
    return t ? t.call(e) : (e = typeof Oc == "function" ? Oc(e) : e[Symbol.iterator](), i = {}, r("next"), r("throw"), r("return"), i[Symbol.asyncIterator] = function() {
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
      Promise.resolve(p).then(function(y) {
        c({
          value: y,
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
      return vy(t);
    }
    static combineWithAllErrors(t) {
      return _y(t);
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
      return Lc(this, arguments, function* () {
        return yield Mi(yield Mi(yield* yy(by(yield Mi(this._promise.then((i) => i.safeUnwrap()))))));
      });
    }
    then(t, i) {
      return this._promise.then(t, i);
    }
    [Symbol.asyncIterator]() {
      return Lc(this, arguments, function* () {
        const i = yield Mi(this._promise);
        return i.isErr() && (yield yield Mi(xs(i.error))), yield Mi(i.value);
      });
    }
  }
  function xs(e) {
    return new Mt(Promise.resolve(new ai(e)));
  }
  const fh = (e) => {
    let t = N([]);
    for (const i of e) if (i.isErr()) {
      t = k(i.error);
      break;
    } else t.map((r) => r.push(i.value));
    return t;
  }, vy = (e) => Mt.fromSafePromise(Promise.all(e)).andThen(fh), hh = (e) => {
    let t = N([]);
    for (const i of e) i.isErr() && t.isErr() ? t.error.push(i.error) : i.isErr() && t.isOk() ? t = k([
      i.error
    ]) : i.isOk() && t.isOk() && t.value.push(i.value);
    return t;
  }, _y = (e) => Mt.fromSafePromise(Promise.all(e)).andThen(hh);
  var Na;
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
      return fh(a);
    }
    e.combine = i;
    function r(a) {
      return hh(a);
    }
    e.combineWithAllErrors = r;
  })(Na || (Na = {}));
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
      throw uh("Called `_unsafeUnwrapErr` on an Ok", this, t);
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
      throw uh("Called `_unsafeUnwrap` on an Err", this, t);
    }
    _unsafeUnwrapErr(t) {
      return this.error;
    }
    *[Symbol.iterator]() {
      const t = this;
      return yield t, t;
    }
  }
  Na.fromThrowable;
  var cs = ((e) => (e.GENERIC = "generic", e.VALIDATION = "validation", e.NETWORK = "network", e.GEOLOCATION = "geolocation", e.STORAGE = "storage", e.CONVERSION = "conversion", e.UPDATE_SERVICE = "update_service", e))(cs || {});
  class vn extends Error {
    constructor(t, i) {
      super(t), this.cause = i, this.name = this.constructor.name, i && (this.message = `${t} (caused by: ${i.message})`);
    }
  }
  class De extends vn {
    constructor(t, i = "GENERIC_ERROR", r) {
      super(t, r);
      __publicField(this, "code");
      __publicField(this, "domain", "generic");
      this.code = i;
    }
  }
  function Ey(e) {
    return e instanceof vn;
  }
  _s = function(e, t = "Unknown error occurred") {
    return Ey(e) ? e : e instanceof Error ? new De(t, "UNKNOWN_ERROR", e) : new De(t, "UNKNOWN_ERROR");
  };
  Tr = function(e, t) {
    const i = t ? `[${t}] ` : "";
    console.error(`${i}${e.domain}.${e.code}: ${e.message}`, {
      error: e,
      cause: e.cause,
      stack: e.stack
    });
  };
  class Oe extends vn {
    constructor(t, i, r) {
      super(t, r);
      __publicField(this, "code");
      __publicField(this, "domain", cs.GEOLOCATION);
      this.code = i;
    }
  }
  class Ni extends Oe {
    constructor(t = "Geolocation update service error", i, r) {
      super(t, "UPDATE_SERVICE_ERROR", r), this.serviceName = i;
    }
  }
  var Iy = "2.0.9", Sy = 500, xc = "user-agent", un = "", Nc = "?", ht = {
    FUNCTION: "function",
    OBJECT: "object",
    STRING: "string",
    UNDEFINED: "undefined"
  }, Gt = "browser", Wi = "cpu", Pi = "device", ui = "engine", Zt = "os", fn = "result", G = "name", D = "type", V = "vendor", B = "version", Nt = "architecture", ns = "major", z = "model", Ns = "console", Pe = "mobile", Ze = "tablet", gt = "smarttv", _i = "wearable", Es = "xr", xn = "embedded", Ty = "fetcher", $r = "inapp", gl = "brands", Rr = "formFactors", ml = "fullVersionList", hn = "platform", wl = "platformVersion", xo = "bitness", yr = "sec-ch-ua", My = yr + "-full-version-list", Py = yr + "-arch", ky = yr + "-" + xo, Ay = yr + "-form-factors", Cy = yr + "-" + Pe, Ry = yr + "-" + z, dh = yr + "-" + hn, Oy = dh + "-version", ph = [
    gl,
    ml,
    Pe,
    z,
    hn,
    wl,
    Nt,
    Rr,
    xo
  ], Is = "Amazon", Br = "Apple", Dc = "ASUS", Fc = "BlackBerry", Mr = "Google", jc = "Huawei", ta = "Lenovo", Uc = "Honor", Ss = "LG", ia = "Microsoft", ra = "Motorola", zc = "Nvidia", Gc = "OnePlus", na = "OPPO", kn = "Samsung", $c = "Sharp", An = "Sony", sa = "Xiaomi", oa = "Zebra", Bc = "Chrome", Wc = "Chromium", er = "Chromecast", Ds = "Edge", Cn = "Firefox", Wr = "Opera", aa = "Facebook", Vc = "Sogou", Vr = "Mobile ", qr = " Browser", Da = "Windows", Ly = typeof window !== ht.UNDEFINED, Ut = Ly && window.navigator ? window.navigator : void 0, Or = Ut && Ut.userAgentData ? Ut.userAgentData : void 0, xy = function(e, t) {
    var i = {}, r = t;
    if (!to(t)) {
      r = {};
      for (var a in t) for (var c in t[a]) r[c] = t[a][c].concat(r[c] ? r[c] : []);
    }
    for (var f in e) i[f] = r[f] && r[f].length % 2 === 0 ? r[f].concat(e[f]) : e[f];
    return i;
  }, No = function(e) {
    for (var t = {}, i = 0; i < e.length; i++) t[e[i].toUpperCase()] = e[i];
    return t;
  }, Fa = function(e, t) {
    if (typeof e === ht.OBJECT && e.length > 0) {
      for (var i in e) if (ur(t) == ur(e[i])) return true;
      return false;
    }
    return us(e) ? ur(t) == ur(e) : false;
  }, to = function(e, t) {
    for (var i in e) return /^(browser|cpu|device|engine|os)$/.test(i) || (t ? to(e[i]) : false);
  }, us = function(e) {
    return typeof e === ht.STRING;
  }, la = function(e) {
    if (e) {
      for (var t = [], i = dn(/\\?\"/g, e).split(","), r = 0; r < i.length; r++) if (i[r].indexOf(";") > -1) {
        var a = io(i[r]).split(";v=");
        t[r] = {
          brand: a[0],
          version: a[1]
        };
      } else t[r] = io(i[r]);
      return t;
    }
  }, ur = function(e) {
    return us(e) ? e.toLowerCase() : e;
  }, ja = function(e) {
    return us(e) ? dn(/[^\d\.]/g, e).split(".")[0] : void 0;
  }, $i = function(e) {
    for (var t in e) if (e.hasOwnProperty(t)) {
      var i = e[t];
      typeof i == ht.OBJECT && i.length == 2 ? this[i[0]] = i[1] : this[i] = void 0;
    }
    return this;
  }, dn = function(e, t) {
    return us(t) ? t.replace(e, un) : t;
  }, Rn = function(e) {
    return dn(/\\?\"/g, e);
  }, io = function(e, t) {
    return e = dn(/^\s\s*/, String(e)), typeof t === ht.UNDEFINED ? e : e.substring(0, t);
  }, Ua = function(e, t) {
    if (!(!e || !t)) for (var i = 0, r, a, c, f, h, p; i < t.length && !h; ) {
      var y = t[i], g = t[i + 1];
      for (r = a = 0; r < y.length && !h && y[r]; ) if (h = y[r++].exec(e), h) for (c = 0; c < g.length; c++) p = h[++a], f = g[c], typeof f === ht.OBJECT && f.length > 0 ? f.length === 2 ? typeof f[1] == ht.FUNCTION ? this[f[0]] = f[1].call(this, p) : this[f[0]] = f[1] : f.length >= 3 && (typeof f[1] === ht.FUNCTION && !(f[1].exec && f[1].test) ? f.length > 3 ? this[f[0]] = p ? f[1].apply(this, f.slice(2)) : void 0 : this[f[0]] = p ? f[1].call(this, p, f[2]) : void 0 : f.length == 3 ? this[f[0]] = p ? p.replace(f[1], f[2]) : void 0 : f.length == 4 ? this[f[0]] = p ? f[3].call(this, p.replace(f[1], f[2])) : void 0 : f.length > 4 && (this[f[0]] = p ? f[3].apply(this, [
        p.replace(f[1], f[2])
      ].concat(f.slice(4))) : void 0)) : this[f] = p || void 0;
      i += 2;
    }
  }, ci = function(e, t) {
    for (var i in t) if (typeof t[i] === ht.OBJECT && t[i].length > 0) {
      for (var r = 0; r < t[i].length; r++) if (Fa(t[i][r], e)) return i === Nc ? void 0 : i;
    } else if (Fa(t[i], e)) return i === Nc ? void 0 : i;
    return t.hasOwnProperty("*") ? t["*"] : e;
  }, qc = {
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
  }, Kc = {
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
  }, Ny = {
    Chrome: "Google Chrome",
    Edge: "Microsoft Edge",
    "Edge WebView2": "Microsoft Edge WebView2",
    "Chrome WebView": "Android WebView",
    "Chrome Headless": "HeadlessChrome",
    "Huawei Browser": "HuaweiBrowser",
    "MIUI Browser": "Miui Browser",
    "Opera Mobi": "OperaMobile",
    Yandex: "YaBrowser"
  }, Hc = {
    browser: [
      [
        /\b(?:crmo|crios)\/([\w\.]+)/i
      ],
      [
        B,
        [
          G,
          Vr + "Chrome"
        ]
      ],
      [
        /webview.+edge\/([\w\.]+)/i
      ],
      [
        B,
        [
          G,
          Ds + " WebView"
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
          Wr + " Mini"
        ]
      ],
      [
        /\bop(?:rg)?x\/([\w\.]+)/i
      ],
      [
        B,
        [
          G,
          Wr + " GX"
        ]
      ],
      [
        /\bopr\/([\w\.]+)/i
      ],
      [
        B,
        [
          G,
          Wr
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
          "Smart " + ta + qr
        ]
      ],
      [
        /(av(?:ast|g|ira))\/([\w\.]+)/i
      ],
      [
        [
          G,
          /(.+)/,
          "$1 Secure" + qr
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
          "Norton Private" + qr
        ]
      ],
      [
        /\bfocus\/([\w\.]+)/i
      ],
      [
        B,
        [
          G,
          Cn + " Focus"
        ]
      ],
      [
        / mms\/([\w\.]+)$/i
      ],
      [
        B,
        [
          G,
          Wr + " Neon"
        ]
      ],
      [
        / opt\/([\w\.]+)$/i
      ],
      [
        B,
        [
          G,
          Wr + " Touch"
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
          Wr + " Coast"
        ]
      ],
      [
        /miuibrowser\/([\w\.]+)/i
      ],
      [
        B,
        [
          G,
          "MIUI" + qr
        ]
      ],
      [
        /fxios\/([\w\.-]+)/i
      ],
      [
        B,
        [
          G,
          Vr + Cn
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
          "$1" + qr
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
          kn + " Internet"
        ]
      ],
      [
        /metasr[\/ ]?([\d\.]+)/i
      ],
      [
        B,
        [
          G,
          Vc + " Explorer"
        ]
      ],
      [
        /(sogou)mo\w+\/([\d\.]+)/i
      ],
      [
        [
          G,
          Vc + " Mobile"
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
          aa
        ],
        B,
        [
          D,
          $r
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
          $r
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
          $r
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
          $r
        ]
      ],
      [
        /\[(linkedin)app\]/i
      ],
      [
        G,
        [
          D,
          $r
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
          $r
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
          Ty
        ]
      ],
      [
        /headlesschrome(?:\/([\w\.]+)| )/i
      ],
      [
        B,
        [
          G,
          Bc + " Headless"
        ]
      ],
      [
        /wv\).+chrome\/([\w\.]+).+edgw\//i
      ],
      [
        B,
        [
          G,
          Ds + " WebView2"
        ]
      ],
      [
        / wv\).+(chrome)\/([\w\.]+)/i
      ],
      [
        [
          G,
          Bc + " WebView"
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
          "Android" + qr
        ]
      ],
      [
        /chrome\/([\w\.]+) mobile/i
      ],
      [
        B,
        [
          G,
          Vr + "Chrome"
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
          Vr + "Safari"
        ]
      ],
      [
        /iphone .*mobile(?:\/\w+ | ?)safari/i
      ],
      [
        [
          G,
          Vr + "Safari"
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
          Vr + Cn
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
          Cn + " Reality"
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
          un
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
          un,
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
          kn
        ],
        [
          D,
          Ze
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
          kn
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
          Br
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
          Br
        ],
        [
          D,
          Ze
        ]
      ],
      [
        /(macintosh);/i
      ],
      [
        z,
        [
          V,
          Br
        ]
      ],
      [
        /\b(sh-?[altvz]?\d\d[a-ekm]?)/i
      ],
      [
        z,
        [
          V,
          $c
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
          Uc
        ],
        [
          D,
          Ze
        ]
      ],
      [
        /honor([-\w ]+)[;\)]/i
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
        /\b((?:ag[rs][2356]?k?|bah[234]?|bg[2o]|bt[kv]|cmr|cpn|db[ry]2?|jdn2|got|kob2?k?|mon|pce|scm|sht?|[tw]gr|vrd)-[ad]?[lw][0125][09]b?|605hw|bg2-u03|(?:gem|fdr|m2|ple|t1)-[7a]0[1-4][lu]|t1-a2[13][lw]|mediapad[\w\. ]*(?= bui|\)))\b(?!.+d\/s)/i
      ],
      [
        z,
        [
          V,
          jc
        ],
        [
          D,
          Ze
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
          jc
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
          sa
        ],
        [
          D,
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
          z,
          /_/g,
          " "
        ],
        [
          V,
          sa
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
          Gc
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
          na
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
            "*": na
          }
        ],
        [
          D,
          Ze
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
          ta
        ],
        [
          D,
          Ze
        ]
      ],
      [
        /lenovo[-_ ]?([-\w ]+?)(?: bui|\)|\/)/i
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
        /\b(milestone|droid(?:[2-4x]| (?:bionic|x2|pro|razr))?:?( 4g)?)\b[\w ]+build\//i,
        /\bmot(?:orola)?[- ]([\w\s]+)(\)| bui)/i,
        /((?:moto(?! 360)[-\w\(\) ]+|xt\d{3,4}[cgkosw\+]?[-\d]*|nexus 6)(?= bui|\)))/i
      ],
      [
        z,
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
        /\b(mz60\d|xoom[2 ]{0,2}) build\//i
      ],
      [
        z,
        [
          V,
          ra
        ],
        [
          D,
          Ze
        ]
      ],
      [
        /\b(?:lg)?([vl]k\-?\d{3}) bui| 3\.[-\w; ]{10}lg?-([06cv9]{3,4})/i
      ],
      [
        z,
        [
          V,
          Ss
        ],
        [
          D,
          Ze
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
          Ss
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
          Ze
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
          Ze
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
          An
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
          An
        ],
        [
          D,
          Ze
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
          Is
        ],
        [
          D,
          Ze
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
          Is
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
          Ze
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
          Fc
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
          Dc
        ],
        [
          D,
          Ze
        ]
      ],
      [
        / (z[bes]6[027][012][km][ls]|zenfone \d\w?)\b/i
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
          Ze
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
          Ze
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
          Ze
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
          Ze
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
          Ze
        ]
      ],
      [
        /(surface duo)/i
      ],
      [
        z,
        [
          V,
          ia
        ],
        [
          D,
          Ze
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
          zc
        ],
        [
          D,
          Ze
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
          ia
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
          oa
        ],
        [
          D,
          Ze
        ]
      ],
      [
        /droid.+; (ec30|ps20|tc[2-8]\d[kx])\)/i
      ],
      [
        z,
        [
          V,
          oa
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
          kn
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
          Ss
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
          Br + " TV"
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
          aa
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
          Is
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
          zc
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
          $c
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
          An
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
          sa
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
          io
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
          An
        ],
        [
          D,
          Ns
        ]
      ],
      [
        /\b(xbox(?: one)?(?!; xbox))[\); ]/i
      ],
      [
        z,
        [
          V,
          ia
        ],
        [
          D,
          Ns
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
          Ns
        ]
      ],
      [
        /\b(sm-[lr]\d\d[0156][fnuw]?s?|gear live)\b/i
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
          na
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
          Br
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
          Gc
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
          ra
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
          An
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
          Ss
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
          oa
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
          Es
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
          Es
        ]
      ],
      [
        /(quest( \d| pro)?s?).+vr/i
      ],
      [
        z,
        [
          V,
          aa
        ],
        [
          D,
          Es
        ]
      ],
      [
        /mobile vr; rv.+firefox/i
      ],
      [
        [
          D,
          Es
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
          Is
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
          Br
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
            "*": Ze
          }
        ]
      ],
      [
        /\b((tablet|tab)[;\/]|focus\/\d(?!.+mobile))/i
      ],
      [
        [
          D,
          Ze
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
          Ds + "HTML"
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
          qc
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
          qc
        ],
        [
          G,
          Da
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
          Fc
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
          Cn + " OS"
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
  }, Ts = (function() {
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
          ns,
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
        Zt,
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
          ns
        ]
      ],
      [
        ui,
        [
          B
        ]
      ],
      [
        Zt,
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
        Zt,
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
        Zt,
        [
          G,
          B
        ]
      ]
    ]), e;
  })(), Dy = function(e, t) {
    var i = Ts.init[t], r = Ts.isIgnore[t] || 0, a = Ts.isIgnoreRgx[t] || 0, c = Ts.toString[t] || 0;
    function f() {
      $i.call(this, i);
    }
    return f.prototype.getItem = function() {
      return e;
    }, f.prototype.withClientHints = function() {
      return Or ? Or.getHighEntropyValues(ph).then(function(h) {
        return e.setCH(new gh(h, false)).parseCH().get();
      }) : e.parseCH().get();
    }, f.prototype.withFeatureCheck = function() {
      return e.detectFeature().get();
    }, t != fn && (f.prototype.is = function(h) {
      var p = false;
      for (var y in this) if (this.hasOwnProperty(y) && !Fa(r, y) && ur(a ? dn(a, this[y]) : this[y]) == ur(a ? dn(a, h) : h)) {
        if (p = true, h != ht.UNDEFINED) break;
      } else if (h == ht.UNDEFINED && p) {
        p = !p;
        break;
      }
      return p;
    }, f.prototype.toString = function() {
      var h = un;
      for (var p in c) typeof this[c[p]] !== ht.UNDEFINED && (h += (h ? " " : un) + this[c[p]]);
      return h || ht.UNDEFINED;
    }), f.prototype.then = function(h) {
      var p = this, y = function() {
        for (var I in p) p.hasOwnProperty(I) && (this[I] = p[I]);
      };
      y.prototype = {
        is: f.prototype.is,
        toString: f.prototype.toString,
        withClientHints: f.prototype.withClientHints,
        withFeatureCheck: f.prototype.withFeatureCheck
      };
      var g = new y();
      return h(g), g;
    }, new f();
  };
  function gh(e, t) {
    if (e = e || {}, $i.call(this, ph), t) $i.call(this, [
      [
        gl,
        la(e[yr])
      ],
      [
        ml,
        la(e[My])
      ],
      [
        Pe,
        /\?1/.test(e[Cy])
      ],
      [
        z,
        Rn(e[Ry])
      ],
      [
        hn,
        Rn(e[dh])
      ],
      [
        wl,
        Rn(e[Oy])
      ],
      [
        Nt,
        Rn(e[Py])
      ],
      [
        Rr,
        la(e[Ay])
      ],
      [
        xo,
        Rn(e[ky])
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
        Dy(this, e)
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
        !this.get(D) && Or && Or[Pe] && this.set(D, Pe), this.get(z) == "Macintosh" && Ut && typeof Ut.standalone !== ht.UNDEFINED && Ut.maxTouchPoints && Ut.maxTouchPoints > 2 && this.set(z, "iPad").set(D, Ze);
        break;
      case Zt:
        !this.get(G) && Or && Or[hn] && this.set(G, Or[hn]);
        break;
      case fn:
        var e = this.data, t = function(i) {
          return e[i].getItem().detectFeature().get();
        };
        this.set(Gt, t(Gt)).set(Wi, t(Wi)).set(Pi, t(Pi)).set(ui, t(ui)).set(Zt, t(Zt));
    }
    return this;
  };
  pr.prototype.parseUA = function() {
    switch (this.itemType != fn && Ua.call(this.data, this.ua, this.rgxMap), this.itemType) {
      case Gt:
        this.set(ns, ja(this.get(B)));
        break;
      case Zt:
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
        var i = e[ml] || e[gl], r;
        if (i) for (var a = 0; a < i.length; a++) {
          var c = i[a].brand || i[a], f = i[a].version;
          this.itemType == Gt && !/not.a.brand/i.test(c) && (!r || /Chrom/.test(r) && c != Wc || r == Ds && /WebView2/.test(c)) && (c = ci(c, Ny), r = this.get(G), r && !/Chrom/.test(r) && /Chrom/.test(c) || this.set(G, c).set(B, f).set(ns, ja(f)), r = c), this.itemType == ui && c == Wc && this.set(B, f);
        }
        break;
      case Wi:
        var h = e[Nt];
        h && (h && e[xo] == "64" && (h += "64"), Ua.call(this.data, h + ";", t));
        break;
      case Pi:
        if (e[Pe] && this.set(D, Pe), e[z] && (this.set(z, e[z]), !this.get(D) || !this.get(V))) {
          var p = {};
          Ua.call(p, "droid 9; " + e[z] + ")", t), !this.get(D) && p.type && this.set(D, p.type), !this.get(V) && p.vendor && this.set(V, p.vendor);
        }
        if (e[Rr]) {
          var y;
          if (typeof e[Rr] != "string") for (var g = 0; !y && g < e[Rr].length; ) y = ci(e[Rr][g++], Kc);
          else y = ci(e[Rr], Kc);
          this.set(D, y);
        }
        break;
      case Zt:
        var I = e[hn];
        if (I) {
          var C = e[wl];
          I == Da && (C = parseInt(ja(C), 10) >= 13 ? "11" : "10"), this.set(G, I).set(B, C);
        }
        this.get(G) == Da && e[z] == "Xbox" && this.set(G, "Xbox").set(B, void 0);
        break;
      case fn:
        var A = this.data, j = function(L) {
          return A[L].getItem().setCH(e).parseCH().get();
        };
        this.set(Gt, j(Gt)).set(Wi, j(Wi)).set(Pi, j(Pi)).set(ui, j(ui)).set(Zt, j(Zt));
    }
    return this;
  };
  Zi = function(e, t, i) {
    if (typeof e === ht.OBJECT ? (to(e, true) ? (typeof t === ht.OBJECT && (i = t), t = e) : (i = e, t = void 0), e = void 0) : typeof e === ht.STRING && !to(t, true) && (i = t, t = void 0), i) if (typeof i.append === ht.FUNCTION) {
      var r = {};
      i.forEach(function(g, I) {
        r[String(I).toLowerCase()] = g;
      }), i = r;
    } else {
      var a = {};
      for (var c in i) i.hasOwnProperty(c) && (a[String(c).toLowerCase()] = i[c]);
      i = a;
    }
    if (!(this instanceof Zi)) return new Zi(e, t, i).getResult();
    var f = typeof e === ht.STRING ? e : i && i[xc] ? i[xc] : Ut && Ut.userAgent ? Ut.userAgent : un, h = new gh(i, true), p = t ? xy(Hc, t) : Hc, y = function(g) {
      return g == fn ? function() {
        return new pr(g, f, p, h).set("ua", f).set(Gt, this.getBrowser()).set(Wi, this.getCPU()).set(Pi, this.getDevice()).set(ui, this.getEngine()).set(Zt, this.getOS()).get();
      } : function() {
        return new pr(g, f, p[g], h).parseUA().get();
      };
    };
    return $i.call(this, [
      [
        "getBrowser",
        y(Gt)
      ],
      [
        "getCPU",
        y(Wi)
      ],
      [
        "getDevice",
        y(Pi)
      ],
      [
        "getEngine",
        y(ui)
      ],
      [
        "getOS",
        y(Zt)
      ],
      [
        "getResult",
        y(fn)
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
          return us(g) && (f = io(g, Sy)), this;
        }
      ]
    ]).setUA(f), this;
  };
  Zi.VERSION = Iy;
  Zi.BROWSER = No([
    G,
    B,
    ns,
    D
  ]);
  Zi.CPU = No([
    Nt
  ]);
  Zi.DEVICE = No([
    z,
    V,
    D,
    Ns,
    Pe,
    gt,
    Ze,
    _i,
    xn
  ]);
  Zi.ENGINE = Zi.OS = No([
    G,
    B
  ]);
  var ft = ((e) => (e.TAURI = "tauri", e.WEB = "web", e.MOBILE_WEB = "mobile_web", e.UNKNOWN = "unknown", e))(ft || {});
  class Fy {
    constructor() {
      __publicField(this, "parser");
      const t = typeof navigator < "u" ? navigator.userAgent : "";
      this.parser = new Zi(t);
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
  const yl = new Fy();
  Gv = function() {
    return yl.getPlatformContext();
  };
  function _t(e, t, i, r) {
    if (typeof t == "function" ? e !== t || !r : !t.has(e)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
    return i === "m" ? r : i === "a" ? r.call(e) : r ? r.value : t.get(e);
  }
  function Jr(e, t, i, r, a) {
    if (typeof t == "function" ? e !== t || true : !t.has(e)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
    return t.set(e, i), i;
  }
  var Pr, ii, Kr, Ms, Fs;
  const Zc = "__TAURI_TO_IPC_KEY__";
  function mh(e, t = false) {
    return window.__TAURI_INTERNALS__.transformCallback(e, t);
  }
  $v = class {
    constructor(t) {
      Pr.set(this, void 0), ii.set(this, 0), Kr.set(this, []), Ms.set(this, void 0), Jr(this, Pr, t || (() => {
      })), this.id = mh((i) => {
        const r = i.index;
        if ("end" in i) {
          r == _t(this, ii, "f") ? this.cleanupCallback() : Jr(this, Ms, r);
          return;
        }
        const a = i.message;
        if (r == _t(this, ii, "f")) {
          for (_t(this, Pr, "f").call(this, a), Jr(this, ii, _t(this, ii, "f") + 1); _t(this, ii, "f") in _t(this, Kr, "f"); ) {
            const c = _t(this, Kr, "f")[_t(this, ii, "f")];
            _t(this, Pr, "f").call(this, c), delete _t(this, Kr, "f")[_t(this, ii, "f")], Jr(this, ii, _t(this, ii, "f") + 1);
          }
          _t(this, ii, "f") === _t(this, Ms, "f") && this.cleanupCallback();
        } else _t(this, Kr, "f")[r] = a;
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
    [(Pr = /* @__PURE__ */ new WeakMap(), ii = /* @__PURE__ */ new WeakMap(), Kr = /* @__PURE__ */ new WeakMap(), Ms = /* @__PURE__ */ new WeakMap(), Zc)]() {
      return `__CHANNEL__:${this.id}`;
    }
    toJSON() {
      return this[Zc]();
    }
  };
  Bv = async function(e) {
    return ut(`plugin:${e}|check_permissions`);
  };
  ut = async function(e, t = {}, i) {
    return window.__TAURI_INTERNALS__.invoke(e, t, i);
  };
  class jy {
    get rid() {
      return _t(this, Fs, "f");
    }
    constructor(t) {
      Fs.set(this, void 0), Jr(this, Fs, t);
    }
    async close() {
      return ut("plugin:resources|close", {
        rid: this.rid
      });
    }
  }
  Fs = /* @__PURE__ */ new WeakMap();
  var Jc;
  (function(e) {
    e.WINDOW_RESIZED = "tauri://resize", e.WINDOW_MOVED = "tauri://move", e.WINDOW_CLOSE_REQUESTED = "tauri://close-requested", e.WINDOW_DESTROYED = "tauri://destroyed", e.WINDOW_FOCUS = "tauri://focus", e.WINDOW_BLUR = "tauri://blur", e.WINDOW_SCALE_FACTOR_CHANGED = "tauri://scale-change", e.WINDOW_THEME_CHANGED = "tauri://theme-changed", e.WINDOW_CREATED = "tauri://window-created", e.WEBVIEW_CREATED = "tauri://webview-created", e.DRAG_ENTER = "tauri://drag-enter", e.DRAG_OVER = "tauri://drag-over", e.DRAG_DROP = "tauri://drag-drop", e.DRAG_LEAVE = "tauri://drag-leave";
  })(Jc || (Jc = {}));
  async function Uy(e, t) {
    window.__TAURI_EVENT_PLUGIN_INTERNALS__.unregisterListener(e, t), await ut("plugin:event|unlisten", {
      event: e,
      eventId: t
    });
  }
  async function Yc(e, t, i) {
    var r;
    const a = (r = void 0) !== null && r !== void 0 ? r : {
      kind: "Any"
    };
    return ut("plugin:event|listen", {
      event: e,
      target: a,
      handler: mh(t)
    }).then((c) => async () => Uy(e, c));
  }
  async function zy(e, t) {
    return await ro.load(e, t);
  }
  class ro extends jy {
    constructor(t) {
      super(t);
    }
    static async load(t, i) {
      const r = await ut("plugin:store|load", {
        path: t,
        options: i
      });
      return new ro(r);
    }
    static async get(t) {
      return await ut("plugin:store|get_store", {
        path: t
      }).then((i) => i ? new ro(i) : null);
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
      return await Yc("store://change", (r) => {
        r.payload.resourceId === this.rid && r.payload.key === t && i(r.payload.exists ? r.payload.value : void 0);
      });
    }
    async onChange(t) {
      return await Yc("store://change", (i) => {
        i.payload.resourceId === this.rid && t(i.payload.key, i.payload.exists ? i.payload.value : void 0);
      });
    }
  }
  class je extends vn {
    constructor(t, i, r) {
      super(t, r);
      __publicField(this, "domain", cs.STORAGE);
      this.code = i;
    }
  }
  var Fe = ((e) => (e.INITIALIZATION_FAILED = "INITIALIZATION_FAILED", e.NOT_INITIALIZED = "NOT_INITIALIZED", e.SET_FAILED = "SET_FAILED", e.GET_FAILED = "GET_FAILED", e.SAVE_FAILED = "SAVE_FAILED", e.EXPORT_FAILED = "EXPORT_FAILED", e.CLEAR_FAILED = "CLEAR_FAILED", e.REMOVE_FAILED = "REMOVE_FAILED", e))(Fe || {});
  class et extends vn {
    constructor(t, i, r) {
      super(t, r);
      __publicField(this, "domain", cs.GEOLOCATION);
      this.code = i;
    }
  }
  var Ke = ((e) => (e.INITIALIZATION_FAILED = "INITIALIZATION_FAILED", e.NOT_INITIALIZED = "NOT_INITIALIZED", e.PERMISSION_DENIED = "PERMISSION_DENIED", e.POSITION_UNAVAILABLE = "POSITION_UNAVAILABLE", e.TIMEOUT = "TIMEOUT", e.UNSUPPORTED = "UNSUPPORTED", e.WATCH_FAILED = "WATCH_FAILED", e.CLEAR_WATCH_FAILED = "CLEAR_WATCH_FAILED", e))(Ke || {});
  class kr extends vn {
    constructor(t, i, r) {
      super(t, r);
      __publicField(this, "domain", cs.GENERIC);
      this.code = i;
    }
  }
  var nr = ((e) => (e.DETECTION_FAILED = "DETECTION_FAILED", e.INVALID_CONTEXT = "INVALID_CONTEXT", e.UNSUPPORTED_PLATFORM = "UNSUPPORTED_PLATFORM", e.NOT_INITIALIZED = "NOT_INITIALIZED", e))(nr || {});
  class Gy {
    constructor(t = "user-data.json") {
      __publicField(this, "store", null);
      __publicField(this, "initialized", false);
      __publicField(this, "storePath");
      this.storePath = t;
    }
    async init() {
      if (this.initialized) return N(void 0);
      try {
        return this.store = await zy(this.storePath, {
          autoSave: false,
          defaults: {}
        }), this.initialized = true, N(void 0);
      } catch (t) {
        return k(new je("Failed to initialize Tauri storage", Fe.INITIALIZATION_FAILED, t));
      }
    }
    async set(t, i) {
      if (!this.store) return k(new je("Tauri store not initialized", Fe.NOT_INITIALIZED));
      try {
        return await this.store.set(t, i), N(void 0);
      } catch (r) {
        return k(new je(`Failed to set value for key: ${t}`, Fe.SET_FAILED, r));
      }
    }
    async get(t) {
      if (!this.store) return k(new je("Tauri store not initialized", Fe.NOT_INITIALIZED));
      try {
        const i = await this.store.get(t);
        return N(i ?? null);
      } catch (i) {
        return k(new je(`Failed to get value for key: ${t}`, Fe.GET_FAILED, i));
      }
    }
    async save() {
      if (!this.store) return k(new je("Tauri store not initialized", Fe.NOT_INITIALIZED));
      try {
        return await this.store.save(), N(void 0);
      } catch (t) {
        return k(new je("Failed to save store", Fe.SAVE_FAILED, t));
      }
    }
    async exportToJson() {
      if (!this.store) return k(new je("Tauri store not initialized", Fe.NOT_INITIALIZED));
      try {
        const t = await this.store.keys(), i = {};
        for (const r of t) {
          const a = await this.store.get(r);
          i[r] = a;
        }
        return N(JSON.stringify(i, null, 2));
      } catch (t) {
        return k(new je("Failed to export data to JSON", Fe.EXPORT_FAILED, t));
      }
    }
    async clear() {
      if (!this.store) return k(new je("Tauri store not initialized", Fe.NOT_INITIALIZED));
      try {
        const t = await this.store.keys();
        for (const i of t) await this.store.delete(i);
        return N(void 0);
      } catch (t) {
        return k(new je("Failed to clear store", Fe.CLEAR_FAILED, t));
      }
    }
    async remove(t) {
      if (!this.store) return k(new je("Tauri store not initialized", Fe.NOT_INITIALIZED));
      try {
        return await this.store.delete(t), N(void 0);
      } catch (i) {
        return k(new je(`Failed to remove key: ${t}`, Fe.REMOVE_FAILED, i));
      }
    }
    async scanKeys(t) {
      if (!this.store) return k(new je("Tauri store not initialized", Fe.NOT_INITIALIZED));
      try {
        const r = (await this.store.keys()).filter((a) => a.startsWith(t));
        return N(r);
      } catch (i) {
        return k(new je("Failed to scan keys", Fe.GET_FAILED, i));
      }
    }
    async batchSet(t) {
      if (!this.store) return k(new je("Tauri store not initialized", Fe.NOT_INITIALIZED));
      try {
        for (const { key: i, value: r } of t) await this.store.set(i, r);
        return N(void 0);
      } catch (i) {
        return k(new je("Failed to batch set values", Fe.SET_FAILED, i));
      }
    }
  }
  let By, Wy;
  ca = {
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
  $y = [
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
  Wv = () => $y.filter((e) => e.userFacing);
  By = "trackmaker_settings";
  Wy = typeof window < "u" && window.__TAURI_INTERNALS__ !== void 0;
  function Ye(e) {
    try {
      if (typeof localStorage > "u") return ca[e];
      const t = localStorage.getItem(By);
      if (t !== null) return JSON.parse(t)[e] ?? ca[e];
    } catch {
    }
    return ca[e];
  }
  function za() {
    return Ye("debugMode");
  }
  function wh() {
    return Ye("gpsUpdateInterval");
  }
  function Vy() {
    return Ye("kalmanGpsUpdateInterval");
  }
  function qy() {
    return Ye("enableKalmanFilter");
  }
  Vv = function() {
    return Ye("mapZoomLevel");
  };
  qv = function() {
    return Ye("keepScreenOn");
  };
  Kv = function() {
    return Ye("mapTileServer");
  };
  Hv = function() {
    return Ye("showCompass");
  };
  Zv = function() {
    return Ye("autoRecenterTimeout");
  };
  Jv = function() {
    return Ye("customMapTileUrl");
  };
  Yv = function() {
    return Ye("mapTilerApiKey");
  };
  Xv = function() {
    return Ye("nightModeMapStyleUrl");
  };
  function Ga() {
    return Ye("imuUpdateFrequency");
  }
  function Ky() {
    return Ye("kalmanInitialAccelerationUncertainty");
  }
  function Hy() {
    return Ye("kalmanInitialPositionUncertainty");
  }
  function Zy() {
    return Ye("kalmanInitialVelocityUncertainty");
  }
  function Jy() {
    return Ye("kalmanGpsSpeedUncertainty");
  }
  Qv = function() {
    return Ye("routeSimplificationChunkSize");
  };
  e1 = function() {
    return Ye("routeSimplificationThreshold");
  };
  t1 = function() {
    return Ye("routeSimplificationMaxIterations");
  };
  i1 = function() {
    return Ye("routeSimplificationMaxDistance");
  };
  r1 = function() {
    return Ye("routeSimplificationMinDistance");
  };
  class Yy {
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
          const y = p.target.result;
          y && h < f && (y.delete(), h++, y.continue());
        }, r.oncomplete = () => t(), r.onerror = () => i(new Error("Failed to prune cache"));
      });
    }
    async init() {
      if (this.initialized) return N(void 0);
      try {
        return this.db = await this.openDatabase(), this.initialized = true, N(void 0);
      } catch (t) {
        return k(new je("Failed to initialize Web storage", Fe.INITIALIZATION_FAILED, t));
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
      if (!this.db) return k(new je("Database not initialized", Fe.NOT_INITIALIZED));
      try {
        return await this.shouldPruneCache() && await this.pruneCache(), await this.executeTransaction("readwrite", (r) => new Promise((a, c) => {
          const f = r.put(La(i), t);
          f.onsuccess = () => a(), f.onerror = () => c(new Error("Failed to set value"));
        })), N(void 0);
      } catch (r) {
        return k(new je(`Failed to set value for key: ${t}`, Fe.SET_FAILED, r));
      }
    }
    async get(t) {
      if (!this.db) return k(new je("Database not initialized", Fe.NOT_INITIALIZED));
      try {
        const i = await this.executeTransaction("readonly", (r) => new Promise((a, c) => {
          const f = r.get(t);
          f.onsuccess = () => a(f.result), f.onerror = () => c(new Error("Failed to get value"));
        }));
        return N(i);
      } catch (i) {
        return k(new je(`Failed to get value for key: ${t}`, Fe.GET_FAILED, i));
      }
    }
    async save() {
      return N(void 0);
    }
    async exportToJson() {
      if (!this.db) return k(new je("Database not initialized", Fe.NOT_INITIALIZED));
      try {
        const t = await this.executeTransaction("readonly", (i) => new Promise((r, a) => {
          const c = i.getAll();
          c.onsuccess = () => {
            const h = c.result.reduce((p, y, g) => (p[g] = y, p), {});
            r(h);
          }, c.onerror = () => a(new Error("Failed to export data"));
        }));
        return N(JSON.stringify(t, null, 2));
      } catch (t) {
        return k(new je("Failed to export data to JSON", Fe.EXPORT_FAILED, t));
      }
    }
    async clear() {
      if (!this.db) return k(new je("Database not initialized", Fe.NOT_INITIALIZED));
      try {
        return await this.executeTransaction("readwrite", (t) => new Promise((i, r) => {
          const a = t.clear();
          a.onsuccess = () => i(), a.onerror = () => r(new Error("Failed to clear store"));
        })), N(void 0);
      } catch (t) {
        return k(new je("Failed to clear store", Fe.CLEAR_FAILED, t));
      }
    }
    async remove(t) {
      if (!this.db) return k(new je("Database not initialized", Fe.NOT_INITIALIZED));
      try {
        return await this.executeTransaction("readwrite", (i) => new Promise((r, a) => {
          const c = i.delete(t);
          c.onsuccess = () => r(), c.onerror = () => a(new Error("Failed to remove key"));
        })), N(void 0);
      } catch (i) {
        return k(new je(`Failed to remove key: ${t}`, Fe.REMOVE_FAILED, i));
      }
    }
    async scanKeys(t) {
      if (!this.db) return k(new je("Database not initialized", Fe.NOT_INITIALIZED));
      try {
        const i = await this.executeTransaction("readonly", (r) => new Promise((a, c) => {
          const f = IDBKeyRange.bound(t, t + "\uFFFF"), h = r.openCursor(f), p = [];
          h.onsuccess = (y) => {
            const g = y.target.result;
            if (g) {
              const I = g.key;
              p.push(String(I)), g.continue();
            } else a(p);
          }, h.onerror = () => c(new Error("Failed to scan keys"));
        }));
        return N(i);
      } catch (i) {
        return k(new je("Scan failed", Fe.GET_FAILED, i));
      }
    }
    async batchSet(t) {
      if (!this.db) return k(new je("Database not initialized", Fe.NOT_INITIALIZED));
      try {
        return await this.executeTransaction("readwrite", (i) => new Promise((r, a) => {
          let c = 0;
          for (const { key: f, value: h } of t) {
            const p = i.put(La(h), f);
            p.onsuccess = () => {
              c++, c === t.length && r();
            }, p.onerror = () => a(new Error("Batch set failed"));
          }
          t.length === 0 && r();
        })), N(void 0);
      } catch (i) {
        return k(new je("Batch set failed", Fe.SET_FAILED, i));
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
  function Xy() {
    return window.__TAURI_OS_PLUGIN_INTERNALS__.platform;
  }
  class Qy {
    constructor() {
      __publicField(this, "initialized", false);
      __publicField(this, "isMobile", false);
      __publicField(this, "watchCallbacks", /* @__PURE__ */ new Map());
      __publicField(this, "mobileUnwatchFn", null);
      __publicField(this, "tauriGeolocation", null);
      const t = Xy();
      this.isMobile = t === "ios" || t === "android";
    }
    async init(t) {
      return this.initialized ? N(void 0) : this.isMobile ? this.initMobile(t) : this.initDesktop(t);
    }
    async initMobile(t) {
      try {
        const i = await Kn(() => import("./index-BLEQJGFe.js"), [], import.meta.url);
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
          const r = wh(), a = (i == null ? void 0 : i.highFrequency) ? 100 : r, c = window.setInterval(async () => {
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
  const _no = class _no {
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
      __publicField(this, "regularPollInFlight", false);
      __publicField(this, "highFrequencyPollInFlight", false);
      __publicField(this, "lastHighFrequencyNativeUpdateTime", 0);
      __publicField(this, "lastHighFrequencyNativeAccuracy", null);
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
        const y = await this.init();
        if (y.isErr()) return k(y.error);
      }
      const r = Vy(), a = wh(), c = Ye("watchCompatibilityMode"), f = (i == null ? void 0 : i.highFrequency) ?? false, h = f;
      if (c && !f || h) {
        console.info(f ? "[Geolocation] Using hybrid watch + polling fallback for high-frequency tracking" : "[Geolocation] Using compatibility mode for position watch");
        try {
          const y = this.nextCompatibilityWatchId--;
          (f ? this.highFrequencyCallbacks : this.compatibilityModeCallbacks).set(y, t);
          let I = null;
          if (h) {
            const C = this.startNativeWatch((A) => {
              this.lastHighFrequencyNativeUpdateTime = performance.now(), this.lastHighFrequencyNativeAccuracy = A.coords.accuracy, t(A);
            });
            C.isOk() ? I = C.value : console.warn("[Geolocation] Native watchPosition failed, continuing with polling fallback only:", C.error);
          }
          return f ? this.highFrequencyIntervalId === null && (this.highFrequencyIntervalId = window.setInterval(() => {
            this.pollCompatibilityWatch(true, r);
          }, r)) : this.compatibilityIntervalId === null && (this.compatibilityIntervalId = window.setInterval(() => {
            this.pollCompatibilityWatch(false, a);
          }, a)), this.compatibilityModeWatches.set(y, {
            highFrequency: f,
            nativeWatchId: I
          }), N(y);
        } catch (y) {
          return k(new et("Failed to start watching position (compatibility mode)", Ke.WATCH_FAILED, y));
        }
      }
      return this.startNativeWatch(t);
    }
    clearWatch(t) {
      try {
        if (this.compatibilityModeWatches.has(t)) {
          const i = this.compatibilityModeWatches.get(t);
          i.highFrequency ? this.highFrequencyCallbacks.delete(t) : this.compatibilityModeCallbacks.delete(t), this.compatibilityModeWatches.delete(t), i.nativeWatchId !== null && navigator.geolocation.clearWatch(i.nativeWatchId), this.compatibilityModeCallbacks.size === 0 && this.compatibilityIntervalId !== null && (window.clearInterval(this.compatibilityIntervalId), this.compatibilityIntervalId = null, this.lastCompatibilityPosition = null, this.lastCompatibilityUpdateTime = 0, this.regularPollInFlight = false), this.highFrequencyCallbacks.size === 0 && this.highFrequencyIntervalId !== null && (window.clearInterval(this.highFrequencyIntervalId), this.highFrequencyIntervalId = null, this.highFrequencyPollInFlight = false, this.lastHighFrequencyNativeUpdateTime = 0, this.lastHighFrequencyNativeAccuracy = null);
        } else navigator.geolocation.clearWatch(t);
        return N(void 0);
      } catch (i) {
        return k(new et("Failed to clear watch", Ke.CLEAR_WATCH_FAILED, i));
      }
    }
    isSupported() {
      return "geolocation" in navigator;
    }
    async pollCompatibilityWatch(t, i) {
      const r = t ? this.highFrequencyCallbacks : this.compatibilityModeCallbacks;
      if (r.size !== 0) {
        if (t) {
          if (this.highFrequencyPollInFlight) return;
          this.highFrequencyPollInFlight = true;
        } else {
          if (this.regularPollInFlight) return;
          this.regularPollInFlight = true;
        }
        try {
          const a = await this.getCurrentPosition();
          if (a.isErr()) return;
          const c = a.value;
          if (t) {
            const f = performance.now(), h = i * _no.HIGH_FREQUENCY_NATIVE_STALE_FACTOR, p = this.lastHighFrequencyNativeUpdateTime > 0 && f - this.lastHighFrequencyNativeUpdateTime < h, y = this.lastHighFrequencyNativeAccuracy !== null && c.coords.accuracy > this.lastHighFrequencyNativeAccuracy * _no.POLL_ACCURACY_WORSE_FACTOR;
            if (p || y) return;
          }
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
        } finally {
          t ? this.highFrequencyPollInFlight = false : this.regularPollInFlight = false;
        }
      }
    }
    startNativeWatch(t) {
      try {
        const i = navigator.geolocation.watchPosition(t, (r) => {
          console.error("[Geolocation] Native watchPosition error:", r);
        }, {
          enableHighAccuracy: true,
          timeout: 3e4,
          maximumAge: 0
        });
        return N(i);
      } catch (i) {
        return k(new et("Failed to start watching position", Ke.WATCH_FAILED, i));
      }
    }
    isPositionError(t) {
      return typeof t == "object" && t !== null && "code" in t && "message" in t && typeof t.code == "number";
    }
  };
  __publicField(_no, "HIGH_FREQUENCY_NATIVE_STALE_FACTOR", 1.5);
  __publicField(_no, "POLL_ACCURACY_WORSE_FACTOR", 1.5);
  let no = _no;
  class eb {
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
  tb = function(e) {
    return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
  };
  function yh(e) {
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
  const ib = Object.prototype.toString;
  function ss(e) {
    const t = ib.call(e);
    return t.endsWith("Array]") && !t.includes("Big");
  }
  const rb = Object.freeze(Object.defineProperty({
    __proto__: null,
    isAnyArray: ss
  }, Symbol.toStringTag, {
    value: "Module"
  })), nb = yh(rb);
  function sb(e) {
    var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
    if (!ss(e)) throw new TypeError("input must be an array");
    if (e.length === 0) throw new TypeError("input must not be empty");
    var i = t.fromIndex, r = i === void 0 ? 0 : i, a = t.toIndex, c = a === void 0 ? e.length : a;
    if (r < 0 || r >= e.length || !Number.isInteger(r)) throw new Error("fromIndex must be a positive integer smaller than length");
    if (c <= r || c > e.length || !Number.isInteger(c)) throw new Error("toIndex must be an integer greater than fromIndex and at most equal to length");
    for (var f = e[r], h = r + 1; h < c; h++) e[h] > f && (f = e[h]);
    return f;
  }
  function ob(e) {
    var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
    if (!ss(e)) throw new TypeError("input must be an array");
    if (e.length === 0) throw new TypeError("input must not be empty");
    var i = t.fromIndex, r = i === void 0 ? 0 : i, a = t.toIndex, c = a === void 0 ? e.length : a;
    if (r < 0 || r >= e.length || !Number.isInteger(r)) throw new Error("fromIndex must be a positive integer smaller than length");
    if (c <= r || c > e.length || !Number.isInteger(c)) throw new Error("toIndex must be an integer greater than fromIndex and at most equal to length");
    for (var f = e[r], h = r + 1; h < c; h++) e[h] < f && (f = e[h]);
    return f;
  }
  function ab(e) {
    var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
    if (ss(e)) {
      if (e.length === 0) throw new TypeError("input must not be empty");
    } else throw new TypeError("input must be an array");
    var i;
    if (t.output !== void 0) {
      if (!ss(t.output)) throw new TypeError("output option must be an array if specified");
      i = t.output;
    } else i = new Array(e.length);
    var r = ob(e), a = sb(e);
    if (r === a) throw new RangeError("minimum and maximum input values are equal. Cannot rescale a constant array");
    var c = t.min, f = c === void 0 ? t.autoMinMax ? r : 0 : c, h = t.max, p = h === void 0 ? t.autoMinMax ? a : 1 : h;
    if (f >= p) throw new RangeError("min option must be smaller than max option");
    for (var y = (p - f) / (a - r), g = 0; g < e.length; g++) i[g] = (e[g] - r) * y + f;
    return i;
  }
  const lb = Object.freeze(Object.defineProperty({
    __proto__: null,
    default: ab
  }, Symbol.toStringTag, {
    value: "Module"
  })), cb = yh(lb);
  var Xc;
  function ub() {
    var _ne_instances, e_fn, _e2;
    if (Xc) return Ae;
    Xc = 1, Object.defineProperty(Ae, "__esModule", {
      value: true
    });
    var e = nb, t = cb;
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
      const { rows: u, columns: m } = d, w = Math.min(u, s), b = Math.min(m, o), v = [];
      if (l === "auto") {
        l = false;
        e: for (let P = 0; P < w; P++) for (let _ = 0; _ < b; _++) if (d.get(P, _) < 0) {
          l = true;
          break e;
        }
      }
      for (let P = 0; P < w; P++) {
        let _ = [];
        for (let O = 0; O < b; O++) _.push(h(d.get(P, O), n, l));
        v.push(`${_.join(" ")}`);
      }
      return b !== m && (v[v.length - 1] += ` ... ${m - o} more columns`), w !== u && v.push(`... ${u - s} more rows`), v.join(`
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
    function y(d, s) {
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
    function j(d, s) {
      if (!e.isAnyArray(s)) throw new TypeError("row indices must be an array");
      for (let o = 0; o < s.length; o++) if (s[o] < 0 || s[o] >= d.rows) throw new RangeError("row indices are out of range");
    }
    function L(d, s) {
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
        let w = 0, b = 0, v = 0;
        for (let P = 0; P < l; P++) v = d.get(m, P) - o[m], w += v, b += v * v;
        s ? u.push((b - w * w / l) / (l - 1)) : u.push((b - w * w / l) / l);
      }
      return u;
    }
    function ke(d, s, o) {
      const n = d.rows, l = d.columns, u = [];
      for (let m = 0; m < l; m++) {
        let w = 0, b = 0, v = 0;
        for (let P = 0; P < n; P++) v = d.get(P, m) - o[m], w += v, b += v * v;
        s ? u.push((b - w * w / n) / (n - 1)) : u.push((b - w * w / n) / n);
      }
      return u;
    }
    function he(d, s, o) {
      const n = d.rows, l = d.columns, u = n * l;
      let m = 0, w = 0, b = 0;
      for (let v = 0; v < n; v++) for (let P = 0; P < l; P++) b = d.get(v, P) - o, m += b, w += b * b;
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
    function Ce(d, s) {
      for (let o = 0; o < d.rows; o++) for (let n = 0; n < d.columns; n++) d.set(o, n, d.get(o, n) / s[o]);
    }
    function He(d) {
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
    function zr(d) {
      const s = d.size - 1;
      let o = 0;
      for (let n = 0; n < d.columns; n++) for (let l = 0; l < d.rows; l++) o += d.get(l, n) ** 2 / s;
      return Math.sqrt(o);
    }
    function Ci(d, s) {
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
        let w = u - l, b = new ne(s, o);
        for (let v = 0; v < s; v++) for (let P = 0; P < o; P++) {
          let _ = l + Math.round(m() * w);
          b.set(v, P, _);
        }
        return b;
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
              for (let b = n + 1; b < s.columns; b++) s.set(m, b, s.get(m, b) - s.get(o, b) * w);
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
            let b = s.get(w, u);
            for (let v = u; v < o; v++) {
              let P = s.get(w, v) - b * s.get(l, v);
              s.set(w, v, P);
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
          for (let b = 0; b < n; b++) m[b] = s.get(b, w);
          for (let b = 0; b < o; b++) {
            let v = 0;
            for (let P = 0; P < n; P++) v += this.get(b, P) * m[P];
            u.set(b, w, v);
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
        const n = this.get(0, 0), l = s.get(0, 0), u = this.get(0, 1), m = s.get(0, 1), w = this.get(1, 0), b = s.get(1, 0), v = this.get(1, 1), P = s.get(1, 1), _ = (n + v) * (l + P), O = (w + v) * l, te = n * (m - P), R = v * (b - l), F = (n + u) * P, le = (w - n) * (l + m), S = (u - v) * (b + P), ee = _ + R - F + S, de = te + F, Se = O + R, Me = _ - O + te + le;
        return o.set(0, 0, ee), o.set(0, 1, de), o.set(1, 0, Se), o.set(1, 1, Me), o;
      }
      strassen3x3(s) {
        s = ne.checkMatrix(s);
        let o = new ne(3, 3);
        const n = this.get(0, 0), l = this.get(0, 1), u = this.get(0, 2), m = this.get(1, 0), w = this.get(1, 1), b = this.get(1, 2), v = this.get(2, 0), P = this.get(2, 1), _ = this.get(2, 2), O = s.get(0, 0), te = s.get(0, 1), R = s.get(0, 2), F = s.get(1, 0), le = s.get(1, 1), S = s.get(1, 2), ee = s.get(2, 0), de = s.get(2, 1), Se = s.get(2, 2), Me = (n + l + u - m - w - P - _) * le, nt = (n - m) * (-te + le), be = w * (-O + te + F - le - S - ee + Se), Ee = (-n + m + w) * (O - te + le), Je = (m + w) * (-O + te), T = n * O, W = (-n + v + P) * (O - R + S), ce = (-n + v) * (R - S), J = (v + P) * (-O + R), st = (n + l + u - w - b - v - P) * S, qe = P * (-O + R + F - le - S - ee + de), it = (-u + P + _) * (le + ee - de), ot = (u - _) * (le - de), bt = u * ee, oi = (P + _) * (-ee + de), wt = (-u + w + b) * (S + ee - Se), wi = (u - b) * (S - Se), Oi = (w + b) * (-ee + Se), xe = l * F, vt = b * de, Wt = m * R, Vt = v * te, yt = _ * Se, jh = T + bt + xe, Uh = Me + Ee + Je + T + it + bt + oi, zh = T + W + J + st + bt + wt + Oi, Gh = nt + be + Ee + T + bt + wt + wi, $h = nt + Ee + Je + T + vt, Bh = bt + wt + wi + Oi + Wt, Wh = T + W + ce + qe + it + ot + bt, Vh = it + ot + bt + oi + Vt, qh = T + W + ce + J + yt;
        return o.set(0, 0, jh), o.set(0, 1, Uh), o.set(0, 2, zh), o.set(1, 0, Gh), o.set(1, 1, $h), o.set(1, 2, Bh), o.set(2, 0, Wh), o.set(2, 1, Vh), o.set(2, 2, qh), o;
      }
      mmulStrassen(s) {
        s = ne.checkMatrix(s);
        let o = this.clone(), n = o.rows, l = o.columns, u = s.rows, m = s.columns;
        l !== u && console.warn(`Multiplying ${n} x ${l} and ${u} x ${m} matrix: dimensions do not match.`);
        function w(_, O, te) {
          let R = _.rows, F = _.columns;
          if (R === O && F === te) return _;
          {
            let le = _e.zeros(O, te);
            return le = le.setSubMatrix(_, 0, 0), le;
          }
        }
        let b = Math.max(n, u), v = Math.max(l, m);
        o = w(o, b, v), s = w(s, b, v);
        function P(_, O, te, R) {
          if (te <= 512 || R <= 512) return _.mmul(O);
          te % 2 === 1 && R % 2 === 1 ? (_ = w(_, te + 1, R + 1), O = w(O, te + 1, R + 1)) : te % 2 === 1 ? (_ = w(_, te + 1, R), O = w(O, te + 1, R)) : R % 2 === 1 && (_ = w(_, te, R + 1), O = w(O, te, R + 1));
          let F = parseInt(_.rows / 2, 10), le = parseInt(_.columns / 2, 10), S = _.subMatrix(0, F - 1, 0, le - 1), ee = O.subMatrix(0, F - 1, 0, le - 1), de = _.subMatrix(0, F - 1, le, _.columns - 1), Se = O.subMatrix(0, F - 1, le, O.columns - 1), Me = _.subMatrix(F, _.rows - 1, 0, le - 1), nt = O.subMatrix(F, O.rows - 1, 0, le - 1), be = _.subMatrix(F, _.rows - 1, le, _.columns - 1), Ee = O.subMatrix(F, O.rows - 1, le, O.columns - 1), Je = P(_e.add(S, be), _e.add(ee, Ee), F, le), T = P(_e.add(Me, be), ee, F, le), W = P(S, _e.sub(Se, Ee), F, le), ce = P(be, _e.sub(nt, ee), F, le), J = P(_e.add(S, de), Ee, F, le), st = P(_e.sub(Me, S), _e.add(ee, Se), F, le), qe = P(_e.sub(de, be), _e.add(nt, Ee), F, le), it = _e.add(Je, ce);
          it.sub(J), it.add(qe);
          let ot = _e.add(W, J), bt = _e.add(T, ce), oi = _e.sub(Je, T);
          oi.add(W), oi.add(st);
          let wt = _e.zeros(2 * it.rows, 2 * it.columns);
          return wt = wt.setSubMatrix(it, 0, 0), wt = wt.setSubMatrix(ot, it.rows, 0), wt = wt.setSubMatrix(bt, 0, it.columns), wt = wt.setSubMatrix(oi, it.rows, it.columns), wt.subMatrix(0, te - 1, 0, R - 1);
        }
        return P(o, s, b, v);
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
        for (let w = 0; w < o; w++) for (let b = 0; b < n; b++) for (let v = 0; v < l; v++) for (let P = 0; P < u; P++) m.set(l * w + v, u * b + P, this.get(w, b) * s.get(v, P));
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
      sortRows(s = _n) {
        for (let o = 0; o < this.rows; o++) this.setRow(o, this.getRow(o).sort(s));
        return this;
      }
      sortColumns(s = _n) {
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
        j(this, s), L(this, o);
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
            return Ce(this, n), this;
          }
          case "column": {
            if (n === void 0) n = He(this);
            else if (!e.isAnyArray(n)) throw new TypeError("scale must be an array");
            return Ai(this, n), this;
          }
          case void 0: {
            if (n === void 0) n = zr(this);
            else if (typeof n != "number") throw new TypeError("scale must be a number");
            return Ci(this, n), this;
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
    function _n(d, s) {
      return d - s;
    }
    function zo(d) {
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
            if (!zo(n[l])) throw new TypeError("Input data contains non-numeric values");
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
    y(_e, ne);
    const _jt = class _jt extends _e {
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
        const s = new _jt(this.diagonalSize);
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
        const l = new _jt(n);
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
    let jt = _jt;
    jt.prototype.klassType = "SymmetricMatrix";
    class Ri extends jt {
      static isDistanceMatrix(s) {
        return jt.isSymmetricMatrix(s) && s.klassSubType === "DistanceMatrix";
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
        return new jt(this);
      }
      clone() {
        const s = new Ri(this.diagonalSize);
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
    Ri.prototype.klassSubType = "DistanceMatrix";
    class Bt extends _e {
      constructor(s, o, n) {
        super(), this.matrix = s, this.rows = o, this.columns = n;
      }
    }
    class fs extends Bt {
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
        L(s, o), super(s, s.rows, o.length), this.columnIndices = o;
      }
      set(s, o, n) {
        return this.matrix.set(s, this.columnIndices[o], n), this;
      }
      get(s, o) {
        return this.matrix.get(s, this.columnIndices[o]);
      }
    }
    class Il extends Bt {
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
    class x extends Bt {
      constructor(s, o) {
        j(s, o), super(s, o.length, s.columns), this.rowIndices = o;
      }
      set(s, o, n) {
        return this.matrix.set(this.rowIndices[s], o, n), this;
      }
      get(s, o) {
        return this.matrix.get(this.rowIndices[s], o);
      }
    }
    class H extends Bt {
      constructor(s, o, n) {
        j(s, o), L(s, n), super(s, o.length, n.length), this.rowIndices = o, this.columnIndices = n;
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
    class Z extends Bt {
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
        let o = s.clone(), n = o.rows, l = o.columns, u = new Float64Array(n), m = 1, w, b, v, P, _, O, te, R, F;
        for (w = 0; w < n; w++) u[w] = w;
        for (R = new Float64Array(n), b = 0; b < l; b++) {
          for (w = 0; w < n; w++) R[w] = o.get(w, b);
          for (w = 0; w < n; w++) {
            for (F = Math.min(w, b), _ = 0, v = 0; v < F; v++) _ += o.get(w, v) * R[v];
            R[w] -= _, o.set(w, b, R[w]);
          }
          for (P = b, w = b + 1; w < n; w++) Math.abs(R[w]) > Math.abs(R[P]) && (P = w);
          if (P !== b) {
            for (v = 0; v < l; v++) O = o.get(P, v), o.set(P, v, o.get(b, v)), o.set(b, v, O);
            te = u[P], u[P] = u[b], u[b] = te, m = -m;
          }
          if (b < n && o.get(b, b) !== 0) for (w = b + 1; w < n; w++) o.set(w, b, o.get(w, b) / o.get(b, b));
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
        let l = s.columns, u = s.subMatrixRow(this.pivotVector, 0, l - 1), m = o.columns, w, b, v;
        for (v = 0; v < m; v++) for (w = v + 1; w < m; w++) for (b = 0; b < l; b++) u.set(w, b, u.get(w, b) - u.get(v, b) * o.get(w, v));
        for (v = m - 1; v >= 0; v--) {
          for (b = 0; b < l; b++) u.set(v, b, u.get(v, b) / o.get(v, v));
          for (w = 0; w < v; w++) for (b = 0; b < l; b++) u.set(w, b, u.get(w, b) - u.get(v, b) * o.get(w, v));
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
        let o = s.clone(), n = s.rows, l = s.columns, u = new Float64Array(l), m, w, b, v;
        for (b = 0; b < l; b++) {
          let P = 0;
          for (m = b; m < n; m++) P = we(P, o.get(m, b));
          if (P !== 0) {
            for (o.get(b, b) < 0 && (P = -P), m = b; m < n; m++) o.set(m, b, o.get(m, b) / P);
            for (o.set(b, b, o.get(b, b) + 1), w = b + 1; w < l; w++) {
              for (v = 0, m = b; m < n; m++) v += o.get(m, b) * o.get(m, w);
              for (v = -v / o.get(b, b), m = b; m < n; m++) o.set(m, w, o.get(m, w) + v * o.get(m, b));
            }
          }
          u[b] = -P;
        }
        this.QR = o, this.Rdiag = u;
      }
      solve(s) {
        s = ne.checkMatrix(s);
        let o = this.QR, n = o.rows;
        if (s.rows !== n) throw new Error("Matrix row dimensions must agree");
        if (!this.isFullRank()) throw new Error("Matrix is rank deficient");
        let l = s.columns, u = s.clone(), m = o.columns, w, b, v, P;
        for (v = 0; v < m; v++) for (b = 0; b < l; b++) {
          for (P = 0, w = v; w < n; w++) P += o.get(w, v) * u.get(w, b);
          for (P = -P / o.get(v, v), w = v; w < n; w++) u.set(w, b, u.get(w, b) + P * o.get(w, v));
        }
        for (v = m - 1; v >= 0; v--) {
          for (b = 0; b < l; b++) u.set(v, b, u.get(v, b) / this.Rdiag[v]);
          for (w = 0; w < v; w++) for (b = 0; b < l; b++) u.set(w, b, u.get(w, b) - u.get(v, b) * o.get(w, v));
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
        let s = this.QR, o = s.rows, n = s.columns, l = new ne(o, n), u, m, w, b;
        for (w = n - 1; w >= 0; w--) {
          for (u = 0; u < o; u++) l.set(u, w, 0);
          for (l.set(w, w, 1), m = w; m < n; m++) if (s.get(w, w) !== 0) {
            for (b = 0, u = w; u < o; u++) b += s.get(u, w) * l.get(u, m);
            for (b = -b / s.get(w, w), u = w; u < o; u++) l.set(u, m, l.get(u, m) + b * s.get(u, w));
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
        let b = !!u, v = !!m, P = false, _;
        if (n < l) if (!w) _ = s.clone(), console.warn("Computing SVD on a matrix with more columns than rows. Consider enabling autoTranspose");
        else {
          _ = s.transpose(), n = _.rows, l = _.columns, P = true;
          let T = b;
          b = v, v = T;
        }
        else _ = s.clone();
        let O = Math.min(n, l), te = Math.min(n + 1, l), R = new Float64Array(te), F = new ne(n, O), le = new ne(l, l), S = new Float64Array(l), ee = new Float64Array(n), de = new Float64Array(te);
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
              for (let J = T; J < n; J++) ce += _.get(J, T) * _.get(J, W);
              ce = -ce / _.get(T, T);
              for (let J = T; J < n; J++) _.set(J, W, _.get(J, W) + ce * _.get(J, T));
            }
            S[W] = _.get(T, W);
          }
          if (b && T < Se) for (let W = T; W < n; W++) F.set(W, T, _.get(W, T));
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
                for (let J = T + 1; J < n; J++) _.set(J, W, _.get(J, W) + ce * ee[J]);
              }
            }
            if (v) for (let W = T + 1; W < l; W++) le.set(W, T, S[W]);
          }
        }
        let be = Math.min(l, n + 1);
        if (Se < l && (R[Se] = _.get(Se, Se)), n < be && (R[be - 1] = 0), Me + 1 < be && (S[Me] = _.get(Me, be - 1)), S[be - 1] = 0, b) {
          for (let T = Se; T < O; T++) {
            for (let W = 0; W < n; W++) F.set(W, T, 0);
            F.set(T, T, 1);
          }
          for (let T = Se - 1; T >= 0; T--) if (R[T] !== 0) {
            for (let W = T + 1; W < O; W++) {
              let ce = 0;
              for (let J = T; J < n; J++) ce += F.get(J, T) * F.get(J, W);
              ce = -ce / F.get(T, T);
              for (let J = T; J < n; J++) F.set(J, W, F.get(J, W) + ce * F.get(J, T));
            }
            for (let W = T; W < n; W++) F.set(W, T, -F.get(W, T));
            F.set(T, T, 1 + F.get(T, T));
            for (let W = 0; W < T - 1; W++) F.set(W, T, 0);
          } else {
            for (let W = 0; W < n; W++) F.set(W, T, 0);
            F.set(T, T, 1);
          }
        }
        if (v) for (let T = l - 1; T >= 0; T--) {
          if (T < Me && S[T] !== 0) for (let W = T + 1; W < l; W++) {
            let ce = 0;
            for (let J = T + 1; J < l; J++) ce += le.get(J, T) * le.get(J, W);
            ce = -ce / le.get(T + 1, T);
            for (let J = T + 1; J < l; J++) le.set(J, W, le.get(J, W) + ce * le.get(J, T));
          }
          for (let W = 0; W < l; W++) le.set(W, T, 0);
          le.set(T, T, 1);
        }
        let Ee = be - 1, Je = Number.EPSILON;
        for (; be > 0; ) {
          let T, W;
          for (T = be - 2; T >= -1 && T !== -1; T--) {
            const ce = Number.MIN_VALUE + Je * Math.abs(R[T] + Math.abs(R[T + 1]));
            if (Math.abs(S[T]) <= ce || Number.isNaN(S[T])) {
              S[T] = 0;
              break;
            }
          }
          if (T === be - 2) W = 4;
          else {
            let ce;
            for (ce = be - 1; ce >= T && ce !== T; ce--) {
              let J = (ce !== be ? Math.abs(S[ce]) : 0) + (ce !== T + 1 ? Math.abs(S[ce - 1]) : 0);
              if (Math.abs(R[ce]) <= Je * J) {
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
              for (let J = be - 2; J >= T; J--) {
                let st = we(R[J], ce), qe = R[J] / st, it = ce / st;
                if (R[J] = st, J !== T && (ce = -it * S[J - 1], S[J - 1] = qe * S[J - 1]), v) for (let ot = 0; ot < l; ot++) st = qe * le.get(ot, J) + it * le.get(ot, be - 1), le.set(ot, be - 1, -it * le.get(ot, J) + qe * le.get(ot, be - 1)), le.set(ot, J, st);
              }
              break;
            }
            case 2: {
              let ce = S[T - 1];
              S[T - 1] = 0;
              for (let J = T; J < be; J++) {
                let st = we(R[J], ce), qe = R[J] / st, it = ce / st;
                if (R[J] = st, ce = -it * S[J], S[J] = qe * S[J], b) for (let ot = 0; ot < n; ot++) st = qe * F.get(ot, J) + it * F.get(ot, T - 1), F.set(ot, T - 1, -it * F.get(ot, J) + qe * F.get(ot, T - 1)), F.set(ot, J, st);
              }
              break;
            }
            case 3: {
              const ce = Math.max(Math.abs(R[be - 1]), Math.abs(R[be - 2]), Math.abs(S[be - 2]), Math.abs(R[T]), Math.abs(S[T])), J = R[be - 1] / ce, st = R[be - 2] / ce, qe = S[be - 2] / ce, it = R[T] / ce, ot = S[T] / ce, bt = ((st + J) * (st - J) + qe * qe) / 2, oi = J * qe * (J * qe);
              let wt = 0;
              (bt !== 0 || oi !== 0) && (bt < 0 ? wt = 0 - Math.sqrt(bt * bt + oi) : wt = Math.sqrt(bt * bt + oi), wt = oi / (bt + wt));
              let wi = (it + J) * (it - J) + wt, Oi = it * ot;
              for (let xe = T; xe < be - 1; xe++) {
                let vt = we(wi, Oi);
                vt === 0 && (vt = Number.MIN_VALUE);
                let Wt = wi / vt, Vt = Oi / vt;
                if (xe !== T && (S[xe - 1] = vt), wi = Wt * R[xe] + Vt * S[xe], S[xe] = Wt * S[xe] - Vt * R[xe], Oi = Vt * R[xe + 1], R[xe + 1] = Wt * R[xe + 1], v) for (let yt = 0; yt < l; yt++) vt = Wt * le.get(yt, xe) + Vt * le.get(yt, xe + 1), le.set(yt, xe + 1, -Vt * le.get(yt, xe) + Wt * le.get(yt, xe + 1)), le.set(yt, xe, vt);
                if (vt = we(wi, Oi), vt === 0 && (vt = Number.MIN_VALUE), Wt = wi / vt, Vt = Oi / vt, R[xe] = vt, wi = Wt * S[xe] + Vt * R[xe + 1], R[xe + 1] = -Vt * S[xe] + Wt * R[xe + 1], Oi = Vt * S[xe + 1], S[xe + 1] = Wt * S[xe + 1], b && xe < n - 1) for (let yt = 0; yt < n; yt++) vt = Wt * F.get(yt, xe) + Vt * F.get(yt, xe + 1), F.set(yt, xe + 1, -Vt * F.get(yt, xe) + Wt * F.get(yt, xe + 1)), F.set(yt, xe, vt);
              }
              S[be - 2] = wi;
              break;
            }
            case 4: {
              if (R[T] <= 0 && (R[T] = R[T] < 0 ? -R[T] : 0, v)) for (let ce = 0; ce <= Ee; ce++) le.set(ce, T, -le.get(ce, T));
              for (; T < Ee && !(R[T] >= R[T + 1]); ) {
                let ce = R[T];
                if (R[T] = R[T + 1], R[T + 1] = ce, v && T < l - 1) for (let J = 0; J < l; J++) ce = le.get(J, T + 1), le.set(J, T + 1, le.get(J, T)), le.set(J, T, ce);
                if (b && T < n - 1) for (let J = 0; J < n; J++) ce = F.get(J, T + 1), F.set(J, T + 1, F.get(J, T)), F.set(J, T, ce);
                T++;
              }
              be--;
              break;
            }
          }
        }
        if (P) {
          let T = le;
          le = F, F = T;
        }
        this.m = n, this.n = l, this.s = R, this.U = F, this.V = le;
      }
      solve(s) {
        let o = s, n = this.threshold, l = this.s.length, u = ne.zeros(l, l);
        for (let O = 0; O < l; O++) Math.abs(this.s[O]) <= n ? u.set(O, O, 0) : u.set(O, O, 1 / this.s[O]);
        let m = this.U, w = this.rightSingularVectors, b = w.mmul(u), v = w.rows, P = m.rows, _ = ne.zeros(v, P);
        for (let O = 0; O < v; O++) for (let te = 0; te < P; te++) {
          let R = 0;
          for (let F = 0; F < l; F++) R += b.get(O, F) * m.get(te, F);
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
        let m = this.U, w = m.rows, b = m.columns, v = new ne(n, w);
        for (let P = 0; P < n; P++) for (let _ = 0; _ < w; _++) {
          let O = 0;
          for (let te = 0; te < b; te++) O += u.get(P, te) * m.get(_, te);
          v.set(P, _, O);
        }
        return v;
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
      return d = X.checkMatrix(d), s ? new ye(d).inverse() : Le(d, ne.eye(d.rows));
    }
    function Le(d, s, o = false) {
      return d = X.checkMatrix(d), s = X.checkMatrix(s), o ? new ye(d).solve(s) : d.isSquare() ? new q(d).solve(s) : new ae(d).solve(s);
    }
    function ze(d) {
      if (d = ne.checkMatrix(d), d.isSquare()) {
        if (d.columns === 0) return 1;
        let s, o, n, l;
        if (d.columns === 2) return s = d.get(0, 0), o = d.get(0, 1), n = d.get(1, 0), l = d.get(1, 1), s * l - o * n;
        if (d.columns === 3) {
          let u, m, w;
          return u = new H(d, [
            1,
            2
          ], [
            1,
            2
          ]), m = new H(d, [
            1,
            2
          ], [
            0,
            2
          ]), w = new H(d, [
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
        let w = ne.columnVector(d.getRow(m)), b = d.subMatrixRow(Ge(l, m)).transpose(), P = new ye(b).solve(w), _ = ne.sub(w, b.mmul(P)).abs().max();
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
      }), b = d.transpose().mmul(s);
      for (let v = 0; v < b.rows; v++) for (let P = 0; P < b.columns; P++) b.set(v, P, b.get(v, P) * (1 / (m[v] * w[P])) * (1 / (d.rows - 1)));
      return b;
    }
    class En {
      constructor(s, o = {}) {
        const { assumeSymmetric: n = false } = o;
        if (s = X.checkMatrix(s), !s.isSquare()) throw new Error("Matrix is not a square matrix");
        if (s.isEmpty()) throw new Error("Matrix must be non-empty");
        let l = s.columns, u = new ne(l, l), m = new Float64Array(l), w = new Float64Array(l), b = s, v, P, _ = false;
        if (n ? _ = true : _ = s.isSymmetric(), _) {
          for (v = 0; v < l; v++) for (P = 0; P < l; P++) u.set(v, P, b.get(v, P));
          Ot(l, w, m, u), ei(l, w, m, u);
        } else {
          let O = new ne(l, l), te = new Float64Array(l);
          for (P = 0; P < l; P++) for (v = 0; v < l; v++) O.set(v, P, b.get(v, P));
          hs(l, O, te, u), ds(l, w, m, u, O);
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
      let l, u, m, w, b, v, P, _;
      for (b = 0; b < d; b++) o[b] = n.get(d - 1, b);
      for (w = d - 1; w > 0; w--) {
        for (_ = 0, m = 0, v = 0; v < w; v++) _ = _ + Math.abs(o[v]);
        if (_ === 0) for (s[w] = o[w - 1], b = 0; b < w; b++) o[b] = n.get(w - 1, b), n.set(w, b, 0), n.set(b, w, 0);
        else {
          for (v = 0; v < w; v++) o[v] /= _, m += o[v] * o[v];
          for (l = o[w - 1], u = Math.sqrt(m), l > 0 && (u = -u), s[w] = _ * u, m = m - l * u, o[w - 1] = l - u, b = 0; b < w; b++) s[b] = 0;
          for (b = 0; b < w; b++) {
            for (l = o[b], n.set(b, w, l), u = s[b] + n.get(b, b) * l, v = b + 1; v <= w - 1; v++) u += n.get(v, b) * o[v], s[v] += n.get(v, b) * l;
            s[b] = u;
          }
          for (l = 0, b = 0; b < w; b++) s[b] /= m, l += s[b] * o[b];
          for (P = l / (m + m), b = 0; b < w; b++) s[b] -= P * o[b];
          for (b = 0; b < w; b++) {
            for (l = o[b], u = s[b], v = b; v <= w - 1; v++) n.set(v, b, n.get(v, b) - (l * s[v] + u * o[v]));
            o[b] = n.get(w - 1, b), n.set(w, b, 0);
          }
        }
        o[w] = m;
      }
      for (w = 0; w < d - 1; w++) {
        if (n.set(d - 1, w, n.get(w, w)), n.set(w, w, 1), m = o[w + 1], m !== 0) {
          for (v = 0; v <= w; v++) o[v] = n.get(v, w + 1) / m;
          for (b = 0; b <= w; b++) {
            for (u = 0, v = 0; v <= w; v++) u += n.get(v, w + 1) * n.get(v, b);
            for (v = 0; v <= w; v++) n.set(v, b, n.get(v, b) - u * o[v]);
          }
        }
        for (v = 0; v <= w; v++) n.set(v, w + 1, 0);
      }
      for (b = 0; b < d; b++) o[b] = n.get(d - 1, b), n.set(d - 1, b, 0);
      n.set(d - 1, d - 1, 1), s[0] = 0;
    }
    function ei(d, s, o, n) {
      let l, u, m, w, b, v, P, _, O, te, R, F, le, S, ee, de;
      for (m = 1; m < d; m++) s[m - 1] = s[m];
      s[d - 1] = 0;
      let Se = 0, Me = 0, nt = Number.EPSILON;
      for (v = 0; v < d; v++) {
        for (Me = Math.max(Me, Math.abs(o[v]) + Math.abs(s[v])), P = v; P < d && !(Math.abs(s[P]) <= nt * Me); ) P++;
        if (P > v) do {
          for (l = o[v], _ = (o[v + 1] - l) / (2 * s[v]), O = we(_, 1), _ < 0 && (O = -O), o[v] = s[v] / (_ + O), o[v + 1] = s[v] * (_ + O), te = o[v + 1], u = l - o[v], m = v + 2; m < d; m++) o[m] -= u;
          for (Se = Se + u, _ = o[P], R = 1, F = R, le = R, S = s[v + 1], ee = 0, de = 0, m = P - 1; m >= v; m--) for (le = F, F = R, de = ee, l = R * s[m], u = R * _, O = we(_, s[m]), s[m + 1] = ee * O, ee = s[m] / O, R = _ / O, _ = R * o[m] - ee * l, o[m + 1] = u + ee * (R * l + ee * o[m]), b = 0; b < d; b++) u = n.get(b, m + 1), n.set(b, m + 1, ee * n.get(b, m) + R * u), n.set(b, m, R * n.get(b, m) - ee * u);
          _ = -ee * de * le * S * s[v] / te, s[v] = ee * _, o[v] = R * _;
        } while (Math.abs(s[v]) > nt * Me);
        o[v] = o[v] + Se, s[v] = 0;
      }
      for (m = 0; m < d - 1; m++) {
        for (b = m, _ = o[m], w = m + 1; w < d; w++) o[w] < _ && (b = w, _ = o[w]);
        if (b !== m) for (o[b] = o[m], o[m] = _, w = 0; w < d; w++) _ = n.get(w, m), n.set(w, m, n.get(w, b)), n.set(w, b, _);
      }
    }
    function hs(d, s, o, n) {
      let l = 0, u = d - 1, m, w, b, v, P, _, O;
      for (_ = l + 1; _ <= u - 1; _++) {
        for (O = 0, v = _; v <= u; v++) O = O + Math.abs(s.get(v, _ - 1));
        if (O !== 0) {
          for (b = 0, v = u; v >= _; v--) o[v] = s.get(v, _ - 1) / O, b += o[v] * o[v];
          for (w = Math.sqrt(b), o[_] > 0 && (w = -w), b = b - o[_] * w, o[_] = o[_] - w, P = _; P < d; P++) {
            for (m = 0, v = u; v >= _; v--) m += o[v] * s.get(v, P);
            for (m = m / b, v = _; v <= u; v++) s.set(v, P, s.get(v, P) - m * o[v]);
          }
          for (v = 0; v <= u; v++) {
            for (m = 0, P = u; P >= _; P--) m += o[P] * s.get(v, P);
            for (m = m / b, P = _; P <= u; P++) s.set(v, P, s.get(v, P) - m * o[P]);
          }
          o[_] = O * o[_], s.set(_, _ - 1, O * w);
        }
      }
      for (v = 0; v < d; v++) for (P = 0; P < d; P++) n.set(v, P, v === P ? 1 : 0);
      for (_ = u - 1; _ >= l + 1; _--) if (s.get(_, _ - 1) !== 0) {
        for (v = _ + 1; v <= u; v++) o[v] = s.get(v, _ - 1);
        for (P = _; P <= u; P++) {
          for (w = 0, v = _; v <= u; v++) w += o[v] * n.get(v, P);
          for (w = w / o[_] / s.get(_, _ - 1), v = _; v <= u; v++) n.set(v, P, n.get(v, P) + w * o[v]);
        }
      }
    }
    function ds(d, s, o, n, l) {
      let u = d - 1, m = 0, w = d - 1, b = Number.EPSILON, v = 0, P = 0, _ = 0, O = 0, te = 0, R = 0, F = 0, le = 0, S, ee, de, Se, Me, nt, be, Ee, Je, T, W, ce, J, st, qe;
      for (S = 0; S < d; S++) for ((S < m || S > w) && (o[S] = l.get(S, S), s[S] = 0), ee = Math.max(S - 1, 0); ee < d; ee++) P = P + Math.abs(l.get(S, ee));
      for (; u >= m; ) {
        for (Se = u; Se > m && (R = Math.abs(l.get(Se - 1, Se - 1)) + Math.abs(l.get(Se, Se)), R === 0 && (R = P), !(Math.abs(l.get(Se, Se - 1)) < b * R)); ) Se--;
        if (Se === u) l.set(u, u, l.get(u, u) + v), o[u] = l.get(u, u), s[u] = 0, u--, le = 0;
        else if (Se === u - 1) {
          if (be = l.get(u, u - 1) * l.get(u - 1, u), _ = (l.get(u - 1, u - 1) - l.get(u, u)) / 2, O = _ * _ + be, F = Math.sqrt(Math.abs(O)), l.set(u, u, l.get(u, u) + v), l.set(u - 1, u - 1, l.get(u - 1, u - 1) + v), Ee = l.get(u, u), O >= 0) {
            for (F = _ >= 0 ? _ + F : _ - F, o[u - 1] = Ee + F, o[u] = o[u - 1], F !== 0 && (o[u] = Ee - be / F), s[u - 1] = 0, s[u] = 0, Ee = l.get(u, u - 1), R = Math.abs(Ee) + Math.abs(F), _ = Ee / R, O = F / R, te = Math.sqrt(_ * _ + O * O), _ = _ / te, O = O / te, ee = u - 1; ee < d; ee++) F = l.get(u - 1, ee), l.set(u - 1, ee, O * F + _ * l.get(u, ee)), l.set(u, ee, O * l.get(u, ee) - _ * F);
            for (S = 0; S <= u; S++) F = l.get(S, u - 1), l.set(S, u - 1, O * F + _ * l.get(S, u)), l.set(S, u, O * l.get(S, u) - _ * F);
            for (S = m; S <= w; S++) F = n.get(S, u - 1), n.set(S, u - 1, O * F + _ * n.get(S, u)), n.set(S, u, O * n.get(S, u) - _ * F);
          } else o[u - 1] = Ee + _, o[u] = Ee + _, s[u - 1] = F, s[u] = -F;
          u = u - 2, le = 0;
        } else {
          if (Ee = l.get(u, u), Je = 0, be = 0, Se < u && (Je = l.get(u - 1, u - 1), be = l.get(u, u - 1) * l.get(u - 1, u)), le === 10) {
            for (v += Ee, S = m; S <= u; S++) l.set(S, S, l.get(S, S) - Ee);
            R = Math.abs(l.get(u, u - 1)) + Math.abs(l.get(u - 1, u - 2)), Ee = Je = 0.75 * R, be = -0.4375 * R * R;
          }
          if (le === 30 && (R = (Je - Ee) / 2, R = R * R + be, R > 0)) {
            for (R = Math.sqrt(R), Je < Ee && (R = -R), R = Ee - be / ((Je - Ee) / 2 + R), S = m; S <= u; S++) l.set(S, S, l.get(S, S) - R);
            v += R, Ee = Je = be = 0.964;
          }
          for (le = le + 1, Me = u - 2; Me >= Se && (F = l.get(Me, Me), te = Ee - F, R = Je - F, _ = (te * R - be) / l.get(Me + 1, Me) + l.get(Me, Me + 1), O = l.get(Me + 1, Me + 1) - F - te - R, te = l.get(Me + 2, Me + 1), R = Math.abs(_) + Math.abs(O) + Math.abs(te), _ = _ / R, O = O / R, te = te / R, !(Me === Se || Math.abs(l.get(Me, Me - 1)) * (Math.abs(O) + Math.abs(te)) < b * (Math.abs(_) * (Math.abs(l.get(Me - 1, Me - 1)) + Math.abs(F) + Math.abs(l.get(Me + 1, Me + 1)))))); ) Me--;
          for (S = Me + 2; S <= u; S++) l.set(S, S - 2, 0), S > Me + 2 && l.set(S, S - 3, 0);
          for (de = Me; de <= u - 1 && (st = de !== u - 1, de !== Me && (_ = l.get(de, de - 1), O = l.get(de + 1, de - 1), te = st ? l.get(de + 2, de - 1) : 0, Ee = Math.abs(_) + Math.abs(O) + Math.abs(te), Ee !== 0 && (_ = _ / Ee, O = O / Ee, te = te / Ee)), Ee !== 0); de++) if (R = Math.sqrt(_ * _ + O * O + te * te), _ < 0 && (R = -R), R !== 0) {
            for (de !== Me ? l.set(de, de - 1, -R * Ee) : Se !== Me && l.set(de, de - 1, -l.get(de, de - 1)), _ = _ + R, Ee = _ / R, Je = O / R, F = te / R, O = O / _, te = te / _, ee = de; ee < d; ee++) _ = l.get(de, ee) + O * l.get(de + 1, ee), st && (_ = _ + te * l.get(de + 2, ee), l.set(de + 2, ee, l.get(de + 2, ee) - _ * F)), l.set(de, ee, l.get(de, ee) - _ * Ee), l.set(de + 1, ee, l.get(de + 1, ee) - _ * Je);
            for (S = 0; S <= Math.min(u, de + 3); S++) _ = Ee * l.get(S, de) + Je * l.get(S, de + 1), st && (_ = _ + F * l.get(S, de + 2), l.set(S, de + 2, l.get(S, de + 2) - _ * te)), l.set(S, de, l.get(S, de) - _), l.set(S, de + 1, l.get(S, de + 1) - _ * O);
            for (S = m; S <= w; S++) _ = Ee * n.get(S, de) + Je * n.get(S, de + 1), st && (_ = _ + F * n.get(S, de + 2), n.set(S, de + 2, n.get(S, de + 2) - _ * te)), n.set(S, de, n.get(S, de) - _), n.set(S, de + 1, n.get(S, de + 1) - _ * O);
          }
        }
      }
      if (P !== 0) {
        for (u = d - 1; u >= 0; u--) if (_ = o[u], O = s[u], O === 0) for (Se = u, l.set(u, u, 1), S = u - 1; S >= 0; S--) {
          for (be = l.get(S, S) - _, te = 0, ee = Se; ee <= u; ee++) te = te + l.get(S, ee) * l.get(ee, u);
          if (s[S] < 0) F = be, R = te;
          else if (Se = S, s[S] === 0 ? l.set(S, u, be !== 0 ? -te / be : -te / (b * P)) : (Ee = l.get(S, S + 1), Je = l.get(S + 1, S), O = (o[S] - _) * (o[S] - _) + s[S] * s[S], nt = (Ee * R - F * te) / O, l.set(S, u, nt), l.set(S + 1, u, Math.abs(Ee) > Math.abs(F) ? (-te - be * nt) / Ee : (-R - Je * nt) / F)), nt = Math.abs(l.get(S, u)), b * nt * nt > 1) for (ee = S; ee <= u; ee++) l.set(ee, u, l.get(ee, u) / nt);
        }
        else if (O < 0) for (Se = u - 1, Math.abs(l.get(u, u - 1)) > Math.abs(l.get(u - 1, u)) ? (l.set(u - 1, u - 1, O / l.get(u, u - 1)), l.set(u - 1, u, -(l.get(u, u) - _) / l.get(u, u - 1))) : (qe = ps(0, -l.get(u - 1, u), l.get(u - 1, u - 1) - _, O), l.set(u - 1, u - 1, qe[0]), l.set(u - 1, u, qe[1])), l.set(u, u - 1, 0), l.set(u, u, 1), S = u - 2; S >= 0; S--) {
          for (T = 0, W = 0, ee = Se; ee <= u; ee++) T = T + l.get(S, ee) * l.get(ee, u - 1), W = W + l.get(S, ee) * l.get(ee, u);
          if (be = l.get(S, S) - _, s[S] < 0) F = be, te = T, R = W;
          else if (Se = S, s[S] === 0 ? (qe = ps(-T, -W, be, O), l.set(S, u - 1, qe[0]), l.set(S, u, qe[1])) : (Ee = l.get(S, S + 1), Je = l.get(S + 1, S), ce = (o[S] - _) * (o[S] - _) + s[S] * s[S] - O * O, J = (o[S] - _) * 2 * O, ce === 0 && J === 0 && (ce = b * P * (Math.abs(be) + Math.abs(O) + Math.abs(Ee) + Math.abs(Je) + Math.abs(F))), qe = ps(Ee * te - F * T + O * W, Ee * R - F * W - O * T, ce, J), l.set(S, u - 1, qe[0]), l.set(S, u, qe[1]), Math.abs(Ee) > Math.abs(F) + Math.abs(O) ? (l.set(S + 1, u - 1, (-T - be * l.get(S, u - 1) + O * l.get(S, u)) / Ee), l.set(S + 1, u, (-W - be * l.get(S, u) - O * l.get(S, u - 1)) / Ee)) : (qe = ps(-te - Je * l.get(S, u - 1), -R - Je * l.get(S, u), F, O), l.set(S + 1, u - 1, qe[0]), l.set(S + 1, u, qe[1]))), nt = Math.max(Math.abs(l.get(S, u - 1)), Math.abs(l.get(S, u))), b * nt * nt > 1) for (ee = S; ee <= u; ee++) l.set(ee, u - 1, l.get(ee, u - 1) / nt), l.set(ee, u, l.get(ee, u) / nt);
        }
        for (S = 0; S < d; S++) if (S < m || S > w) for (ee = S; ee < d; ee++) n.set(S, ee, l.get(S, ee));
        for (ee = d - 1; ee >= m; ee--) for (S = m; S <= w; S++) {
          for (F = 0, de = m; de <= Math.min(ee, w); de++) F = F + n.get(S, de) * l.get(de, ee);
          n.set(S, ee, F);
        }
      }
    }
    function ps(d, s, o, n) {
      let l, u;
      return Math.abs(o) > Math.abs(n) ? (l = n / o, u = o + l * n, [
        (d + l * s) / u,
        (s - l * d) / u
      ]) : (l = o / n, u = n + l * o, [
        (l * d + s) / u,
        (l * s - d) / u
      ]);
    }
    class Sl {
      constructor(s) {
        if (s = X.checkMatrix(s), !s.isSymmetric()) throw new Error("Matrix is not symmetric");
        let o = s, n = o.rows, l = new ne(n, n), u = true, m, w, b;
        for (w = 0; w < n; w++) {
          let v = 0;
          for (b = 0; b < w; b++) {
            let P = 0;
            for (m = 0; m < b; m++) P += l.get(b, m) * l.get(w, m);
            P = (o.get(w, b) - P) / l.get(b, b), l.set(w, b, P), v = v + P * P;
          }
          for (v = o.get(w, w) - v, u && (u = v > 0), l.set(w, w, Math.sqrt(Math.max(v, 0))), b = w + 1; b < n; b++) l.set(w, b, 0);
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
        let l = s.columns, u = s.clone(), m, w, b;
        for (b = 0; b < n; b++) for (w = 0; w < l; w++) {
          for (m = 0; m < b; m++) u.set(b, w, u.get(b, w) - u.get(m, w) * o.get(b, m));
          u.set(b, w, u.get(b, w) / o.get(b, b));
        }
        for (b = n - 1; b >= 0; b--) for (w = 0; w < l; w++) {
          for (m = b + 1; m < n; m++) u.set(b, w, u.get(b, w) - u.get(m, w) * o.get(m, b));
          u.set(b, w, u.get(b, w) / o.get(b, b));
        }
        return u;
      }
      get lowerTriangularMatrix() {
        return this.L;
      }
    }
    class Tl {
      constructor(s, o = {}) {
        s = X.checkMatrix(s);
        let { Y: n } = o;
        const { scaleScores: l = false, maxIterations: u = 1e3, terminationCriteria: m = 1e-10 } = o;
        let w;
        if (n) {
          if (e.isAnyArray(n) && typeof n[0] == "number" ? n = ne.columnVector(n) : n = X.checkMatrix(n), n.rows !== s.rows) throw new Error("Y should have the same number of rows as X");
          w = n.getColumnVector(0);
        } else w = s.getColumnVector(0);
        let b = 1, v, P, _, O;
        for (let te = 0; te < u && b > m; te++) _ = s.transpose().mmul(w).div(w.transpose().mmul(w).get(0, 0)), _ = _.div(_.norm()), v = s.mmul(_).div(_.transpose().mmul(_).get(0, 0)), te > 0 && (b = v.clone().sub(O).pow(2).sum()), O = v.clone(), n ? (P = n.transpose().mmul(v).div(v.transpose().mmul(v).get(0, 0)), P = P.div(P.norm()), w = n.mmul(P).div(P.transpose().mmul(P).get(0, 0))) : w = v;
        if (n) {
          let te = s.transpose().mmul(v).div(v.transpose().mmul(v).get(0, 0));
          te = te.div(te.norm());
          let R = s.clone().sub(v.clone().mmul(te.transpose())), F = w.transpose().mmul(v).div(v.transpose().mmul(v).get(0, 0)), le = n.clone().sub(v.clone().mulS(F.get(0, 0)).mmul(P.transpose()));
          this.t = v, this.p = te.transpose(), this.w = _.transpose(), this.q = P, this.u = w, this.s = v.transpose().mmul(v), this.xResidual = R, this.yResidual = le, this.betas = F;
        } else this.w = _.transpose(), this.s = v.transpose().mmul(v).sqrt(), l ? this.t = v.clone().div(this.s.get(0, 0)) : this.t = v, this.xResidual = s.sub(v.mmul(_.transpose()));
      }
    }
    return Ae.AbstractMatrix = _e, Ae.CHO = Sl, Ae.CholeskyDecomposition = Sl, Ae.DistanceMatrix = Ri, Ae.EVD = En, Ae.EigenvalueDecomposition = En, Ae.LU = q, Ae.LuDecomposition = q, Ae.Matrix = ne, Ae.MatrixColumnSelectionView = br, Ae.MatrixColumnView = fs, Ae.MatrixFlipColumnView = Il, Ae.MatrixFlipRowView = E, Ae.MatrixRowSelectionView = x, Ae.MatrixRowView = M, Ae.MatrixSelectionView = H, Ae.MatrixSubView = K, Ae.MatrixTransposeView = Z, Ae.NIPALS = Tl, Ae.Nipals = Tl, Ae.QR = ae, Ae.QrDecomposition = ae, Ae.SVD = ye, Ae.SingularValueDecomposition = ye, Ae.SymmetricMatrix = jt, Ae.WrapperMatrix1D = oe, Ae.WrapperMatrix2D = X, Ae.correlation = vr, Ae.covariance = Qt, Ae.default = ne, Ae.determinant = ze, Ae.inverse = Ie, Ae.linearDependencies = Tt, Ae.pseudoInverse = Xt, Ae.solve = Le, Ae.wrap = ie, Ae;
  }
  var bl = ub();
  const Qc = tb(bl), Ii = bl.Matrix;
  Qc.Matrix ? Qc.Matrix : bl.Matrix;
  Fr = function(e) {
    if (!Number.isFinite(e)) return 0;
    const t = e % 360;
    return t < 0 ? t + 360 : t;
  };
  n1 = function(e, t) {
    return Fr(e - t);
  };
  function fb(e) {
    return Fr(e) * Math.PI / 180;
  }
  function hb(e, t) {
    const i = fb(t);
    return {
      x: e * Math.sin(i),
      y: e * Math.cos(i)
    };
  }
  s1 = function(e, t) {
    return !Number.isFinite(e) || !Number.isFinite(t) ? 0 : Fr(Math.atan2(e, t) * 180 / Math.PI);
  };
  function db() {
    var _a3, _b2;
    return typeof window > "u" ? 0 : typeof ((_b2 = (_a3 = window.screen) == null ? void 0 : _a3.orientation) == null ? void 0 : _b2.angle) == "number" ? window.screen.orientation.angle : typeof window.orientation == "number" ? window.orientation : 0;
  }
  function bh(e) {
    return {
      ...e,
      alpha: Fr(e.alpha + db())
    };
  }
  o1 = function(e) {
    if (e.webkitCompassHeading !== void 0) return Fr(e.webkitCompassHeading);
    const t = bh(e).alpha;
    return Number.isFinite(t) ? Fr(360 - t) : 0;
  };
  const _Hn = class _Hn {
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
      if (t.alpha !== null && t.beta !== null && t.gamma !== null) {
        const i = bh({
          alpha: t.alpha,
          beta: t.beta,
          gamma: t.gamma,
          timestamp: t.timeStamp || performance.now()
        });
        this.deviceOrientation = {
          alpha: i.alpha,
          beta: i.beta,
          gamma: i.gamma
        };
      }
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
        const y = this.computeGravityInDeviceFrame(this.deviceOrientation);
        c -= y.x, f -= y.y, h -= y.z;
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
      const i = -t.alpha * _Hn.DEG_TO_RAD, r = -t.beta * _Hn.DEG_TO_RAD, a = -t.gamma * _Hn.DEG_TO_RAD, c = Math.cos(i), f = Math.sin(i), h = Math.cos(r), p = Math.sin(r), y = Math.cos(a), g = Math.sin(a);
      this.matrixRz.set(0, 0, c), this.matrixRz.set(0, 1, -f), this.matrixRz.set(0, 2, 0), this.matrixRz.set(1, 0, f), this.matrixRz.set(1, 1, c), this.matrixRz.set(1, 2, 0), this.matrixRz.set(2, 0, 0), this.matrixRz.set(2, 1, 0), this.matrixRz.set(2, 2, 1), this.matrixRy.set(0, 0, y), this.matrixRy.set(0, 1, 0), this.matrixRy.set(0, 2, g), this.matrixRy.set(1, 0, 0), this.matrixRy.set(1, 1, 1), this.matrixRy.set(1, 2, 0), this.matrixRy.set(2, 0, -g), this.matrixRy.set(2, 1, 0), this.matrixRy.set(2, 2, y), this.matrixRx.set(0, 0, 1), this.matrixRx.set(0, 1, 0), this.matrixRx.set(0, 2, 0), this.matrixRx.set(1, 0, 0), this.matrixRx.set(1, 1, h), this.matrixRx.set(1, 2, -p), this.matrixRx.set(2, 0, 0), this.matrixRx.set(2, 1, p), this.matrixRx.set(2, 2, h), this.multiplyMatricesInPlace(this.matrixRx, this.matrixRy, this.matrixRTemp), this.multiplyMatricesInPlace(this.matrixRTemp, this.matrixRz, this.matrixR);
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
  __publicField(_Hn, "GRAVITY", 9.81);
  __publicField(_Hn, "DEG_TO_RAD", Math.PI / 180);
  let Hn = _Hn;
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
      const i = yl.getPlatformContext(), r = new _cr(i), a = await r.initializeProviders(t);
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
          return new Gy((t == null ? void 0 : t.tauriStorePath) || "user-data.json");
        case ft.WEB:
        case ft.MOBILE_WEB:
        case ft.UNKNOWN:
        default:
          return new Yy((t == null ? void 0 : t.webDbName) || "trackmaker-db", (t == null ? void 0 : t.webStoreName) || "user-data");
      }
    }
    async createGeolocationProvider(t) {
      let i;
      switch (this.context.environment) {
        case ft.TAURI:
          i = new Qy((t == null ? void 0 : t.tauriHandlerName) || "get_geolocation");
          break;
        case ft.WEB:
        case ft.MOBILE_WEB:
        case ft.UNKNOWN:
        default:
          i = new no();
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
      const i = new Hn(), r = await i.init(t == null ? void 0 : t.permissionCallback);
      return r.isErr() ? (console.error("Failed to initialize IMU provider", r.error), null) : i;
    }
    async createDeviceOrientationProvider(t) {
      const i = new eb(), r = await i.init(t == null ? void 0 : t.permissionCallback);
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
  Do = function() {
    return cr.getInstance();
  };
  pb = function() {
    return typeof navigator > "u" ? false : yl.detectEnvironment() === ft.TAURI;
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
  class gb {
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
  class mb {
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
  class wb {
    constructor() {
      __publicField(this, "currentLocation", null);
      __publicField(this, "currentBackend", null);
      __publicField(this, "eventEmitter");
      this.eventEmitter = new mb();
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
  class yb {
    constructor() {
      __publicField(this, "name", "gps");
      __publicField(this, "provider", null);
      __publicField(this, "watchId", null);
      __publicField(this, "isInitialized", false);
    }
    async initialize() {
      if (this.isInitialized) return N(void 0);
      try {
        const t = Do();
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
  const eu = "https://ipapi.co/json/";
  class bb {
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
        return (await fetch(eu, {
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
        const t = await fetch(eu, {
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
  class vb {
    constructor(t = 100) {
      __publicField(this, "imuProvider", null);
      __publicField(this, "isListening", false);
      __publicField(this, "imuCallbacks", []);
      __publicField(this, "imuUpdateInterval", null);
      this.imuUpdateIntervalMs = t;
    }
    async initialize() {
      try {
        const t = Do();
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
  class _b {
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
          this.workerModulePromise || (this.workerModulePromise = Kn(() => import("./worker-TqJZ-_e0.js"), [], import.meta.url));
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
  let Re;
  const vh = typeof TextDecoder < "u" ? new TextDecoder("utf-8", {
    ignoreBOM: true,
    fatal: true
  }) : {
    decode: () => {
      throw Error("TextDecoder not available");
    }
  };
  typeof TextDecoder < "u" && vh.decode();
  let Nn = null;
  function js() {
    return (Nn === null || Nn.byteLength === 0) && (Nn = new Uint8Array(Re.memory.buffer)), Nn;
  }
  function Lr(e, t) {
    return e = e >>> 0, vh.decode(js().subarray(e, e + t));
  }
  let so = 0;
  const Us = typeof TextEncoder < "u" ? new TextEncoder("utf-8") : {
    encode: () => {
      throw Error("TextEncoder not available");
    }
  }, Eb = typeof Us.encodeInto == "function" ? function(e, t) {
    return Us.encodeInto(e, t);
  } : function(e, t) {
    const i = Us.encode(e);
    return t.set(i), {
      read: e.length,
      written: i.length
    };
  };
  function _h(e, t, i) {
    if (i === void 0) {
      const h = Us.encode(e), p = t(h.length, 1) >>> 0;
      return js().subarray(p, p + h.length).set(h), so = h.length, p;
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
      const h = js().subarray(a + f, a + r), p = Eb(e, h);
      f += p.written, a = i(a, r, f, 1) >>> 0;
    }
    return so = f, a;
  }
  function Ib(e) {
    return e == null;
  }
  let Cr = null;
  function tu() {
    return (Cr === null || Cr.buffer.detached === true || Cr.buffer.detached === void 0 && Cr.buffer !== Re.memory.buffer) && (Cr = new DataView(Re.memory.buffer)), Cr;
  }
  function Eh(e) {
    const t = Re.__wbindgen_export_0.get(e);
    return Re.__externref_table_dealloc(e), t;
  }
  function ua(e, t) {
    if (!(e instanceof t)) throw new Error(`expected instance of ${t.name}`);
  }
  function $a(e, t, i) {
    ua(e, pn), ua(t, pn), ua(i, vl);
    const r = Re.transform(e.__wbg_ptr, t.__wbg_ptr, i.__wbg_ptr);
    if (r[1]) throw Eh(r[0]);
  }
  const iu = typeof FinalizationRegistry > "u" ? {
    register: () => {
    },
    unregister: () => {
    }
  } : new FinalizationRegistry((e) => Re.__wbg_point_free(e >>> 0, 1));
  class vl {
    __destroy_into_raw() {
      const t = this.__wbg_ptr;
      return this.__wbg_ptr = 0, iu.unregister(this), t;
    }
    free() {
      const t = this.__destroy_into_raw();
      Re.__wbg_point_free(t, 0);
    }
    get x() {
      return Re.__wbg_get_point_x(this.__wbg_ptr);
    }
    set x(t) {
      Re.__wbg_set_point_x(this.__wbg_ptr, t);
    }
    get y() {
      return Re.__wbg_get_point_y(this.__wbg_ptr);
    }
    set y(t) {
      Re.__wbg_set_point_y(this.__wbg_ptr, t);
    }
    get z() {
      return Re.__wbg_get_point_z(this.__wbg_ptr);
    }
    set z(t) {
      Re.__wbg_set_point_z(this.__wbg_ptr, t);
    }
    constructor(t, i, r) {
      const a = Re.point_new(t, i, r);
      return this.__wbg_ptr = a >>> 0, iu.register(this, this.__wbg_ptr, this), this;
    }
  }
  const ru = typeof FinalizationRegistry > "u" ? {
    register: () => {
    },
    unregister: () => {
    }
  } : new FinalizationRegistry((e) => Re.__wbg_projection_free(e >>> 0, 1));
  class pn {
    __destroy_into_raw() {
      const t = this.__wbg_ptr;
      return this.__wbg_ptr = 0, ru.unregister(this), t;
    }
    free() {
      const t = this.__destroy_into_raw();
      Re.__wbg_projection_free(t, 0);
    }
    constructor(t) {
      const i = _h(t, Re.__wbindgen_malloc, Re.__wbindgen_realloc), r = so, a = Re.projection_new(i, r);
      if (a[2]) throw Eh(a[1]);
      return this.__wbg_ptr = a[0] >>> 0, ru.register(this, this.__wbg_ptr, this), this;
    }
    get projName() {
      let t, i;
      try {
        const r = Re.projection_projName(this.__wbg_ptr);
        return t = r[0], i = r[1], Lr(r[0], r[1]);
      } finally {
        Re.__wbindgen_free(t, i, 1);
      }
    }
    get isLatlon() {
      return Re.projection_isLatlon(this.__wbg_ptr) !== 0;
    }
    get isGeocentric() {
      return Re.projection_isGeocentric(this.__wbg_ptr) !== 0;
    }
    get axis() {
      let t, i;
      try {
        const r = Re.projection_axis(this.__wbg_ptr);
        return t = r[0], i = r[1], Lr(r[0], r[1]);
      } finally {
        Re.__wbindgen_free(t, i, 1);
      }
    }
    get isNormalizedAxis() {
      return Re.projection_isNormalizedAxis(this.__wbg_ptr) !== 0;
    }
    get to_meter() {
      return Re.projection_to_meter(this.__wbg_ptr);
    }
    get units() {
      let t, i;
      try {
        const r = Re.projection_units(this.__wbg_ptr);
        return t = r[0], i = r[1], Lr(r[0], r[1]);
      } finally {
        Re.__wbindgen_free(t, i, 1);
      }
    }
  }
  async function Sb(e, t) {
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
  function Tb() {
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
      return parseFloat(Lr(t, i));
    }, e.wbg.__wbg_parseInt_7deceafc75400ae4 = function(t, i, r) {
      return parseInt(Lr(t, i), r);
    }, e.wbg.__wbg_slice_ab0b7e3d75dccdee = function(t, i, r) {
      return t.slice(i >>> 0, r >>> 0);
    }, e.wbg.__wbindgen_error_new = function(t, i) {
      return new Error(Lr(t, i));
    }, e.wbg.__wbindgen_init_externref_table = function() {
      const t = Re.__wbindgen_export_0, i = t.grow(4);
      t.set(0, void 0), t.set(i + 0, void 0), t.set(i + 1, null), t.set(i + 2, true), t.set(i + 3, false);
    }, e.wbg.__wbindgen_string_get = function(t, i) {
      const r = i, a = typeof r == "string" ? r : void 0;
      var c = Ib(a) ? 0 : _h(a, Re.__wbindgen_malloc, Re.__wbindgen_realloc), f = so;
      tu().setInt32(t + 4, f, true), tu().setInt32(t + 0, c, true);
    }, e.wbg.__wbindgen_throw = function(t, i) {
      throw new Error(Lr(t, i));
    }, e;
  }
  function Mb(e, t) {
    return Re = e.exports, Ih.__wbindgen_wasm_module = t, Cr = null, Nn = null, Re.__wbindgen_start(), Re;
  }
  async function Ih(e) {
    if (Re !== void 0) return Re;
    typeof e < "u" && (Object.getPrototypeOf(e) === Object.prototype ? { module_or_path: e } = e : console.warn("using deprecated parameters for the initialization function; pass a single object instead")), typeof e > "u" && (e = new URL("" + new URL("proj4rs_bg-Biz-E4lt.wasm", import.meta.url).href, import.meta.url));
    const t = Tb();
    (typeof e == "string" || typeof Request == "function" && e instanceof Request || typeof URL == "function" && e instanceof URL) && (e = fetch(e));
    const { instance: i, module: r } = await Sb(await e, t);
    return Mb(i, r);
  }
  const Pb = "" + new URL("proj4rs_bg-Biz-E4lt.wasm", import.meta.url).href, zs = {
    WGS84: "+proj=longlat +datum=WGS84 +no_defs",
    GRS80: "+proj=latlong +ellps=GRS80 +no_defs",
    UTM_ZONE_50N: "+proj=utm +zone=50 +datum=WGS84 +units=m +no_defs",
    UTM_ZONE_51N: "+proj=utm +zone=51 +datum=WGS84 +units=m +no_defs",
    CGCS2000_3_DEGREE: "+proj=tmerc +lat_0=0 +lon_0=117 +k=1 +x_0=500000 +y_0=0 +ellps=GRS80 +units=m +no_defs",
    BEIJING_1954: "+proj=tmerc +lat_0=0 +lon_0=117 +k=1 +x_0=500000 +y_0=0 +ellps=krass +units=m +no_defs",
    WEB_MERCATOR: "+proj=merc +a=6378137 +b=6378137 +lat_ts=0.0 +lon_0=0.0 +x_0=0.0 +y_0=0 +k=1.0 +units=m +nadgrids=@null +wktext +no_defs"
  };
  let fa = false;
  async function Sh() {
    if (!fa) try {
      console.log("[Proj4WASM] Fetching WASM module..."), await Ih({
        module_or_path: Pb
      }), fa = true, console.log("[Proj4WASM] WASM module loaded successfully.");
    } catch (e) {
      console.warn("[Proj4WASM] Failed to load WASM module, using the JS fallback."), console.error(e), fa = true;
    }
  }
  async function nu(e, t, i) {
    await Sh();
    const r = new pn(e), a = new pn(t), c = new vl(i[0], i[1], 0);
    try {
      return $a(r, a, c), [
        c.x,
        c.y
      ];
    } catch (f) {
      throw new Error(`Failed to transform coordinate: ${f instanceof Error ? f.message : String(f)}`);
    } finally {
      r.free(), a.free(), c.free();
    }
  }
  function kb(e, t) {
    const i = t.x - e.x, r = t.y - e.y;
    return Math.sqrt(i * i + r * r);
  }
  su = function(e, t) {
    const r = e.latitude * Math.PI / 180, a = t.latitude * Math.PI / 180, c = (t.latitude - e.latitude) * Math.PI / 180, f = (t.longitude - e.longitude) * Math.PI / 180, h = Math.sin(c / 2) * Math.sin(c / 2) + Math.cos(r) * Math.cos(a) * Math.sin(f / 2) * Math.sin(f / 2);
    return 6371e3 * (2 * Math.atan2(Math.sqrt(h), Math.sqrt(1 - h)));
  };
  async function Ab(e, t, i = {}) {
    const { projection: r = zs.CGCS2000_3_DEGREE, useHaversine: a = false } = i;
    if (a) return su(e, t);
    try {
      const c = await nu(zs.WGS84, r, [
        e.longitude,
        e.latitude
      ]), f = await nu(zs.WGS84, r, [
        t.longitude,
        t.latitude
      ]);
      return kb({
        x: c[0],
        y: c[1]
      }, {
        x: f[0],
        y: f[1]
      });
    } catch (c) {
      return console.warn("Failed to use proj4 distance calculation, falling back to haversine:", c), su(e, t);
    }
  }
  a1 = async function(e, t = {}) {
    if (e.length < 2) return 0;
    let i = 0;
    for (let r = 1; r < e.length; r++) i += await Ab(e[r - 1], e[r], t);
    return i;
  };
  l1 = function(e) {
    return e < 1e3 ? `${Math.round(e)} m` : e < 1e4 ? `${(e / 1e3).toFixed(1)} km` : `${Math.round(e / 1e3)} km`;
  };
  const { sin: Kt, cos: Cb, sqrt: _l, abs: oo, PI: Ft } = Math, ou = 6378245, au = 0.006693421622965823;
  function Th(e, t) {
    return e >= 72.004 && e <= 137.8347 && t >= 0.8293 && t <= 55.8271;
  }
  function Rb(e, t) {
    let i = -100 + 2 * e + 3 * t + 0.2 * t * t + 0.1 * e * t + 0.2 * _l(oo(e));
    return i += (20 * Kt(6 * e * Ft) + 20 * Kt(2 * e * Ft)) * 2 / 3, i += (20 * Kt(t * Ft) + 40 * Kt(t / 3 * Ft)) * 2 / 3, i += (160 * Kt(t / 12 * Ft) + 320 * Kt(t * Ft / 30)) * 2 / 3, i;
  }
  function Ob(e, t) {
    let i = 300 + e + 2 * t + 0.1 * e * e + 0.1 * e * t + 0.1 * _l(oo(e));
    return i += (20 * Kt(6 * e * Ft) + 20 * Kt(2 * e * Ft)) * 2 / 3, i += (20 * Kt(e * Ft) + 40 * Kt(e / 3 * Ft)) * 2 / 3, i += (150 * Kt(e / 12 * Ft) + 300 * Kt(e / 30 * Ft)) * 2 / 3, i;
  }
  function Lb(e, t) {
    let i = Ob(e - 105, t - 35), r = Rb(e - 105, t - 35);
    const a = t / 180 * Ft;
    let c = Kt(a);
    c = 1 - au * c * c;
    const f = _l(c);
    return i = i * 180 / (ou / f * Cb(a) * Ft), r = r * 180 / (ou * (1 - au) / (c * f) * Ft), [
      i,
      r
    ];
  }
  function hr(e) {
    const [t, i] = e;
    if (!Th(t, i)) return [
      t,
      i
    ];
    const r = Lb(t, i);
    return [
      t + r[0],
      i + r[1]
    ];
  }
  function gn(e) {
    const [t, i] = e;
    if (!Th(t, i)) return [
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
    for (; oo(f) > 1e-6 || oo(h) > 1e-6; ) r -= f, a -= h, c = hr([
      r,
      a
    ]), f = c[0] - t, h = c[1] - i;
    return [
      r,
      a
    ];
  }
  const { sin: ao, cos: lo, atan2: Mh, sqrt: Ph, PI: xb } = Math, co = xb * 3e3 / 180;
  function rn(e) {
    const [t, i] = e, r = t - 65e-4, a = i - 6e-3, c = Ph(r * r + a * a) - 2e-5 * ao(a * co), f = Mh(a, r) - 3e-6 * lo(r * co), h = c * lo(f), p = c * ao(f);
    return [
      h,
      p
    ];
  }
  function mn(e) {
    const [t, i] = e, r = t, a = i, c = Ph(r * r + a * a) + 2e-5 * ao(a * co), f = Mh(a, r) + 3e-6 * lo(r * co), h = c * lo(f) + 65e-4, p = c * ao(f) + 6e-3;
    return [
      h,
      p
    ];
  }
  const lu = 180 / Math.PI, cu = Math.PI / 180, uo = 6378137, tr = 20037508342789244e-9;
  function Ps(e) {
    return [
      e[0] * lu / uo,
      (Math.PI * 0.5 - 2 * Math.atan(Math.exp(-e[1] / uo))) * lu
    ];
  }
  function Fo(e) {
    const t = Math.abs(e[0]) <= 180 ? e[0] : e[0] - (e[0] < 0 ? -1 : 1) * 360, i = [
      uo * t * cu,
      uo * Math.log(Math.tan(Math.PI * 0.25 + 0.5 * e[1] * cu))
    ];
    return i[0] > tr && (i[0] = tr), i[0] < -tr && (i[0] = -tr), i[1] > tr && (i[1] = tr), i[1] < -tr && (i[1] = -tr), i;
  }
  const { abs: fo } = Math, uu = [
    1289059486e-2,
    836237787e-2,
    5591021,
    348198983e-2,
    167804312e-2,
    0
  ], fu = [
    75,
    60,
    45,
    30,
    15,
    0
  ], Nb = [
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
  ], Db = [
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
  function kh(e, t, i) {
    const r = fo(t) / i[9];
    let a = i[0] + i[1] * fo(e), c = i[2] + i[3] * r + i[4] * Math.pow(r, 2) + i[5] * Math.pow(r, 3) + i[6] * Math.pow(r, 4) + i[7] * Math.pow(r, 5) + i[8] * Math.pow(r, 6);
    return a *= e < 0 ? -1 : 1, c *= t < 0 ? -1 : 1, [
      a,
      c
    ];
  }
  function jo(e) {
    const [t, i] = e;
    let r = [];
    for (let a = 0; a < fu.length; a++) if (fo(i) > fu[a]) {
      r = Db[a];
      break;
    }
    return kh(t, i, r);
  }
  function ks(e) {
    const [t, i] = e;
    let r = [];
    for (let a = 0; a < uu.length; a++) if (fo(i) >= uu[a]) {
      r = Nb[a];
      break;
    }
    return kh(t, i, r);
  }
  function ir(e, t) {
    if (!e) throw new Error(t);
  }
  function Ah(e) {
    return !!e && Object.prototype.toString.call(e) === "[object Array]";
  }
  function hu(e) {
    return !isNaN(Number(e)) && e !== null && !Ah(e);
  }
  function si(...e) {
    const t = e.length - 1;
    return function(...i) {
      let r = t, a = e[t].apply(null, i);
      for (; r--; ) a = e[r].call(null, a);
      return a;
    };
  }
  function Ch(e, t, i = false) {
    if (e === null) return;
    let r, a, c, f, h, p, y = 0, g = 0, I, C;
    const { type: A } = e, j = A === "FeatureCollection", L = A === "Feature", pe = j ? e.features.length : 1;
    for (let se = 0; se < pe; se++) {
      I = j ? e.features[se].geometry : L ? e.geometry : e, C = I ? I.type === "GeometryCollection" : false, p = C ? I.geometries.length : 1;
      for (let U = 0; U < p; U++) {
        let Y = 0, $ = 0;
        if (f = C ? I.geometries[U] : I, f === null) continue;
        const ue = f.type;
        switch (y = i && (ue === "Polygon" || ue === "MultiPolygon") ? 1 : 0, ue) {
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
              for (a = 0; a < h[r].length - y; a++) {
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
                for (c = 0; c < h[r][a].length - y; c++) {
                  if (t(h[r][a][c], g, se, Y, $) === false) return false;
                  g++;
                }
                $++;
              }
              Y++;
            }
            break;
          case "GeometryCollection":
            for (r = 0; r < f.geometries.length; r++) if (Ch(f.geometries[r], t, i) === false) return false;
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
  const Fb = {
    to: {
      [at.GCJ02]: hr,
      [at.BD09]: si(mn, hr),
      [at.BD09MC]: si(jo, mn, hr),
      [at.EPSG3857]: Fo
    }
  }, jb = {
    to: {
      [at.WGS84]: gn,
      [at.BD09]: mn,
      [at.BD09MC]: si(jo, mn),
      [at.EPSG3857]: si(Fo, gn)
    }
  }, Ub = {
    to: {
      [at.WGS84]: si(gn, rn),
      [at.GCJ02]: rn,
      [at.EPSG3857]: si(Fo, gn, rn),
      [at.BD09MC]: jo
    }
  }, zb = {
    to: {
      [at.WGS84]: Ps,
      [at.GCJ02]: si(hr, Ps),
      [at.BD09]: si(mn, hr, Ps),
      [at.BD09MC]: si(jo, mn, hr, Ps)
    }
  }, Gb = {
    to: {
      [at.WGS84]: si(gn, rn, ks),
      [at.GCJ02]: si(rn, ks),
      [at.EPSG3857]: si(Fo, gn, rn, ks),
      [at.BD09]: ks
    }
  }, $b = {
    WGS84: Fb,
    GCJ02: jb,
    BD09: Ub,
    EPSG3857: zb,
    BD09MC: Gb
  };
  var Bb = $b;
  function Wb(e, t, i) {
    if (ir(!!e, "The args[0] input coordinate is required"), ir(!!t, "The args[1] original coordinate system is required"), ir(!!i, "The args[2] target coordinate system is required"), t === i) return e;
    const r = Bb[t];
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
    Ah(e) && (ir(e.length >= 2, `Invalid input coordinate: ${e}`), ir(hu(e[0]) && hu(e[1]), `Invalid input coordinate: ${e}`), e = e.map(Number), f = true);
    const h = a;
    return f ? h(e) : (Ch(e, (p) => {
      [p[0], p[1]] = h(p);
    }), e);
  }
  const nn = Object.assign(Object.assign({}, at), {
    CRSTypes: at,
    transform: Wb
  }), du = 6378137;
  class Rh {
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
      return this.cachedWGS84Projection || (this.cachedWGS84Projection = new pn(zs.WGS84)), this.cachedWGS84Projection;
    }
    getLocalProjectionObj() {
      if (!this.cachedLocalProjection || !this.localProjection) throw new Error("Reference point not set. Call setReferencePoint() first.");
      return this.cachedLocalProjection;
    }
    getPoint() {
      return this.cachedPoint || (this.cachedPoint = new vl(0, 0, 0)), this.cachedPoint;
    }
    getGeolocationCorrectionSetting() {
      return Ye("geolocationCorrection") ?? false;
    }
    setReferencePoint(t, i) {
      this.referencePoint = t, this.localProjection = i || `+proj=tmerc +lat_0=${t.latitude} +lon_0=${t.longitude} +k=1 +x_0=0 +y_0=0 +datum=WGS84 +units=m +no_defs`, this.cachedLocalProjection && this.cachedLocalProjection.free(), this.cachedLocalProjection = new pn(this.localProjection);
    }
    async geographicToLocal(t) {
      if (!this.referencePoint || !this.localProjection) throw new Error("Reference point not set. Call setReferencePoint() first.");
      let i = t;
      if (this.geolocationCorrectionEnabled) {
        const f = new di(t.latitude, t.longitude);
        i = Oh(f);
      }
      const r = this.getWGS84Projection(), a = this.getLocalProjectionObj(), c = this.getPoint();
      c.x = i.longitude, c.y = i.latitude, c.z = 0;
      try {
        return $a(r, a, c), {
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
        $a(i, r, a);
        const c = {
          longitude: a.x,
          latitude: a.y
        };
        if (this.geolocationCorrectionEnabled) {
          const f = new di(c.latitude, c.longitude);
          return Vb(f);
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
      const i = this.referencePoint.latitude * Math.PI / 180, r = this.referencePoint.longitude * Math.PI / 180, a = (t.y / du + i) * 180 / Math.PI, c = (t.x / (du * Math.cos(i)) + r) * 180 / Math.PI;
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
  function Oh(e) {
    const t = nn.transform([
      e.longitude,
      e.latitude
    ], nn.WGS84, nn.GCJ02);
    return new di(t[1], t[0]);
  }
  function Vb(e) {
    const t = nn.transform([
      e.longitude,
      e.latitude
    ], nn.GCJ02, nn.WGS84);
    return new di(t[1], t[0]);
  }
  new Rh();
  const qb = 2;
  class Kb {
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
      this.workerClient = new _b(), this.coordinateTransformer = new Rh(), this.imuManager = new vb(i), this.callback = t, this.debugEnabled = (r == null ? void 0 : r.debugEnabled) ?? za(), this.withoutIMU = (r == null ? void 0 : r.useIMU) === false, this.source = (r == null ? void 0 : r.source) ?? "kalman", this.config = {
        initialAccelerationUncertainty: (r == null ? void 0 : r.initialAccelerationUncertainty) ?? Ky(),
        initialPositionUncertainty: (r == null ? void 0 : r.initialPositionUncertainty) ?? Hy(),
        initialVelocityUncertainty: (r == null ? void 0 : r.initialVelocityUncertainty) ?? Zy(),
        gpsSpeedUncertainty: (r == null ? void 0 : r.gpsSpeedUncertainty) ?? Jy(),
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
          speed: this.getTrustedGPSSpeed(t),
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
          speed: this.getTrustedGPSSpeed(t),
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
      if (!(i === void 0 || r === void 0) && !(!Number.isFinite(i) || !Number.isFinite(r) || i < qb)) return this.gpsVelocityToLocal(i, Fr(r));
    }
    getTrustedGPSSpeed(t) {
      const { speed: i } = t;
      if (!(i === void 0 || !Number.isFinite(i) || i < 0)) return i;
    }
    gpsVelocityToLocal(t, i) {
      return hb(t, i);
    }
    notifyCallback(t) {
      if (this.callback) try {
        this.callback(t, this.source);
      } catch (i) {
        console.error("[LocationProcessor] Callback error:", i);
      }
    }
  }
  class Hb {
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
        const t = Do();
        if (t.isErr()) return k(new Oe("Platform services not available", "BACKEND_NOT_AVAILABLE", t.error));
        const i = t.value.getGeolocationProvider();
        if (!i) return k(new Oe("Geolocation provider not available", "BACKEND_NOT_AVAILABLE"));
        this.provider = i;
        const r = await this.provider.getCurrentPosition();
        if (r.isErr()) return k(new Oe("Failed to get the initial geolocation", "UPDATE_SERVICE_ERROR", r.error));
        this.processor = new Kb((c, f) => this.handleLocationUpdate(c), this.imuUpdateInterval, {
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
      const t = [], i = Ye("geolocationBackend"), r = i === "auto" ? qy() : i === "kalman" || i === "kalman-no-imu", a = i === "auto" || i === "gps", c = i === "auto" || i === "ip";
      if (r) {
        const f = Ga(), h = f > 0 ? Math.floor(1e3 / f) : 50, p = i === "kalman-no-imu" ? "kalman-no-imu" : "kalman";
        t.push(new Hb(p, h));
      }
      a && t.push(new yb()), c && t.push(new bb()), console.info(`[GeolocationManager] Initializing with backend preference: ${i}, strategies: ${t.map((f) => f.name).join(", ")}`), this.backendManager = new gb(t), this.stateManager = new wb();
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
        const i = _s(t, "Failed to initialize geolocation manager");
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
        const i = _s(t, "Failed to get current location");
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
        const r = _s(i, "Failed to start location updates");
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
        const r = _s(i, "Failed to stop location updates");
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
      return Ye("geolocationCorrection") ? Oh(t) : t;
    }
    notifyCallbacks(t) {
      const i = this.applyGeolocationCorrection(t), r = La(i);
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
  let Lh;
  const Uo = (e) => Lh = e, xh = /* @__PURE__ */ Symbol();
  function Ba(e) {
    return e && typeof e == "object" && Object.prototype.toString.call(e) === "[object Object]" && typeof e.toJSON != "function";
  }
  var Zn;
  (function(e) {
    e.direct = "direct", e.patchObject = "patch object", e.patchFunction = "patch function";
  })(Zn || (Zn = {}));
  function Nh() {
    const e = Pu(true), t = e.run(() => qt({}));
    let i = [], r = [];
    const a = il({
      install(c) {
        Uo(a), a._a = c, c.provide(xh, a), c.config.globalProperties.$pinia = a, r.forEach((f) => i.push(f)), r = [];
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
  const Dh = () => {
  };
  function pu(e, t, i, r = Dh) {
    e.add(t);
    const a = () => {
      e.delete(t) && r();
    };
    return !i && ku() && ld(a), a;
  }
  function Hr(e, ...t) {
    e.forEach((i) => {
      i(...t);
    });
  }
  const Zb = (e) => e(), gu = /* @__PURE__ */ Symbol(), ha = /* @__PURE__ */ Symbol();
  function Wa(e, t) {
    e instanceof Map && t instanceof Map ? t.forEach((i, r) => e.set(r, i)) : e instanceof Set && t instanceof Set && t.forEach(e.add, e);
    for (const i in t) {
      if (!t.hasOwnProperty(i)) continue;
      const r = t[i], a = e[i];
      Ba(a) && Ba(r) && e.hasOwnProperty(i) && !ct(r) && !Bi(r) ? e[i] = Wa(a, r) : e[i] = r;
    }
    return e;
  }
  const Jb = /* @__PURE__ */ Symbol();
  function Yb(e) {
    return !Ba(e) || !Object.prototype.hasOwnProperty.call(e, Jb);
  }
  const { assign: sr } = Object;
  function Xb(e) {
    return !!(ct(e) && e.effect);
  }
  function Qb(e, t, i, r) {
    const { state: a, actions: c, getters: f } = t, h = i.state.value[e];
    let p;
    function y() {
      h || (i.state.value[e] = a ? a() : {});
      const g = xd(i.state.value[e]);
      return sr(g, c, Object.keys(f || {}).reduce((I, C) => (I[C] = il(hl(() => {
        Uo(i);
        const A = i._s.get(e);
        return f[C].call(A, A);
      })), I), {}));
    }
    return p = Fh(e, y, t, i, r, true), p;
  }
  function Fh(e, t, i = {}, r, a, c) {
    let f;
    const h = sr({
      actions: {}
    }, i), p = {
      deep: true
    };
    let y, g, I = /* @__PURE__ */ new Set(), C = /* @__PURE__ */ new Set(), A;
    const j = r.state.value[e];
    !c && !j && (r.state.value[e] = {});
    let L;
    function pe(fe) {
      let Q;
      y = g = false, typeof fe == "function" ? (fe(r.state.value[e]), Q = {
        type: Zn.patchFunction,
        storeId: e,
        events: A
      }) : (Wa(r.state.value[e], fe), Q = {
        type: Zn.patchObject,
        payload: fe,
        storeId: e,
        events: A
      });
      const me = L = /* @__PURE__ */ Symbol();
      Ku().then(() => {
        L === me && (y = true);
      }), g = true, Hr(I, Q, r.state.value[e]);
    }
    const se = c ? function() {
      const { state: Q } = i, me = Q ? Q() : {};
      this.$patch((ke) => {
        sr(ke, me);
      });
    } : Dh;
    function U() {
      f.stop(), I.clear(), C.clear(), r._s.delete(e);
    }
    const Y = (fe, Q = "") => {
      if (gu in fe) return fe[ha] = Q, fe;
      const me = function() {
        Uo(r);
        const ke = Array.from(arguments), he = /* @__PURE__ */ new Set(), Be = /* @__PURE__ */ new Set();
        function pt(Ce) {
          he.add(Ce);
        }
        function $t(Ce) {
          Be.add(Ce);
        }
        Hr(C, {
          args: ke,
          name: me[ha],
          store: ue,
          after: pt,
          onError: $t
        });
        let Xe;
        try {
          Xe = fe.apply(this && this.$id === e ? this : ue, ke);
        } catch (Ce) {
          throw Hr(Be, Ce), Ce;
        }
        return Xe instanceof Promise ? Xe.then((Ce) => (Hr(he, Ce), Ce)).catch((Ce) => (Hr(Be, Ce), Promise.reject(Ce))) : (Hr(he, Xe), Xe);
      };
      return me[gu] = true, me[ha] = Q, me;
    }, $ = {
      _p: r,
      $id: e,
      $onAction: pu.bind(null, C),
      $patch: pe,
      $reset: se,
      $subscribe(fe, Q = {}) {
        const me = pu(I, fe, Q.detached, () => ke()), ke = f.run(() => tn(() => r.state.value[e], (he) => {
          (Q.flush === "sync" ? g : y) && fe({
            storeId: e,
            type: Zn.direct,
            events: A
          }, he);
        }, sr({}, p, Q)));
        return me;
      },
      $dispose: U
    }, ue = _o($);
    r._s.set(e, ue);
    const re = (r._a && r._a.runWithContext || Zb)(() => r._e.run(() => (f = Pu()).run(() => t({
      action: Y
    }))));
    for (const fe in re) {
      const Q = re[fe];
      if (ct(Q) && !Xb(Q) || Bi(Q)) c || (j && Yb(Q) && (ct(Q) ? Q.value = j[fe] : Wa(Q, j[fe])), r.state.value[e][fe] = Q);
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
    }), j && c && i.hydrate && i.hydrate(ue.$state, j), y = true, g = true, ue;
  }
  c1 = function(e, t, i) {
    let r;
    const a = typeof t == "function";
    r = a ? i : t;
    function c(f, h) {
      const p = Vd();
      return f = f || (p ? zn(xh, null) : null), f && Uo(f), f = Lh, f._s.has(e) || (a ? Fh(e, t, r, f) : Qb(e, r, f)), f._s.get(e);
    }
    return c.$id = e, c;
  };
  var ev = [];
  let mu, Va, tv, iv, As, rv, nv, sv, ov, av, lv, cv, uv, fv, hv, dv, pv, gv, mv, wv, yv, bv, _v, El;
  mu = [
    {
      name: "trackmaker",
      displayName: "TrackMaker",
      moduleInit: async () => {
        var _a3;
        const e = Wf((await Kn(async () => {
          const { default: i } = await import("./App-6oE-IHza.js");
          return {
            default: i
          };
        }, __vite__mapDeps([0,1,2,3,4,5]), import.meta.url)).default);
        e.use(Nh()), e.use((await Kn(async () => {
          const { default: i } = await import("./index-CTPKtQ9i.js");
          return {
            default: i
          };
        }, __vite__mapDeps([6,2,1,3,7]), import.meta.url)).default), e.use((await Kn(async () => {
          const { i18n: i } = await import("./index-DdQgVSXq.js");
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
        await Sh();
      },
      dependencies: []
    },
    {
      name: "platform-services",
      displayName: "Platform Services",
      moduleInit: async () => {
        let e = false;
        try {
          e = za();
        } catch {
        }
        try {
          e && console.time("Platform services initialise");
          const t = async (p, y) => pb() ? false : window.permissionConfirm ? window.permissionConfirm(y) : false, i = await cr.init({
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
              frequency: Ga(),
              normalizeToENU: true
            }), await p.startGyroscope({
              frequency: Ga(),
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
          e = za();
        } catch {
        }
        try {
          if (!Do()) throw new Error("Platform services not initialized");
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
  u1 = my;
  f1 = ev;
  Va = {
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
  tv = () => {
    try {
      const t = localStorage.getItem("interface-language");
      if (t && Va[t]) return t;
    } catch {
    }
    return navigator.language.startsWith("zh") ? "zh-CN" : "en";
  };
  iv = tv();
  As = (e) => Va[iv][e] || Va.en[e] || e;
  rv = {
    class: "splash-container"
  };
  nv = {
    class: "splash-content"
  };
  sv = {
    key: 0,
    class: "loading-section"
  };
  ov = {
    class: "progress-container"
  };
  av = {
    class: "progress-bar"
  };
  lv = {
    class: "progress-text"
  };
  cv = {
    class: "loading-details"
  };
  uv = {
    class: "current-module"
  };
  fv = {
    key: 1,
    class: "error-section"
  };
  hv = {
    class: "error-message"
  };
  dv = {
    key: 0
  };
  pv = {
    key: 1
  };
  gv = {
    key: 2,
    class: "timeout-section"
  };
  mv = {
    key: 3,
    class: "permission-section"
  };
  wv = {
    class: "permission-message"
  };
  yv = {
    class: "permission-buttons"
  };
  bv = Qd({
    __name: "SplashScreen",
    setup(e) {
      const t = qt(0), i = qt(""), r = qt(""), a = qt(0), c = qt(0), f = qt(false), h = qt(false), p = qt(""), y = qt(false), g = qt("");
      let I = null;
      const C = qt("light"), A = () => {
        try {
          window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches ? C.value = "dark" : C.value = "light";
        } catch {
          C.value = "light";
        }
      }, j = () => {
        C.value === "dark" ? document.documentElement.setAttribute("data-theme", "dark") : document.documentElement.setAttribute("data-theme", "light"), console.info("[Splash Screen] Theme applied:", C.value);
      }, L = hl(() => Math.round(t.value / 100 * 100)), pe = {
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
      }, Y = (ge) => (g.value = As(ge), y.value = true, new Promise((re) => {
        I = (fe) => {
          y.value = false, re(fe);
        };
      })), $ = () => {
        I == null ? void 0 : I(true);
      }, ue = () => {
        I == null ? void 0 : I(false);
      };
      return window.permissionConfirm = Y, as(() => {
        var _a3;
        A(), j(), (_a3 = document.getElementById("pre-splash")) == null ? void 0 : _a3.remove();
        const ge = (re, fe = /* @__PURE__ */ new Set()) => {
          if (fe.has(re)) return 0;
          fe.add(re);
          const Q = mu.find((ke) => ke.name === re);
          if (!Q) return 0;
          let me = 1;
          if (Q.dependencies) for (const ke of Q.dependencies) me += ge(ke, fe);
          return me;
        };
        a.value = ge("trackmaker"), console.log("=== Start Loading Modules ==="), ch(mu, "trackmaker", 3e4, {
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
      }), (ge, re) => (ni(), xi("div", rv, [
        We("div", nv, [
          re[8] || (re[8] = We("div", {
            class: "logo-section"
          }, [
            We("div", {
              class: "app-logo"
            }, [
              We("img", {
                src: Rg,
                alt: "TrackMaker Logo",
                height: "80",
                width: "80"
              })
            ]),
            We("h1", {
              class: "app-title"
            }, " TrackMaker ")
          ], -1)),
          !f.value && !h.value ? (ni(), xi("div", sv, [
            We("div", ov, [
              We("div", av, [
                We("div", {
                  class: "progress-fill",
                  style: yo({
                    width: `${L.value}%`
                  })
                }, null, 4)
              ]),
              We("div", lv, Di(L.value) + "% ", 1)
            ]),
            We("div", cv, [
              We("p", uv, " Loading: " + Di(r.value), 1)
            ]),
            re[0] || (re[0] = We("div", {
              class: "loading-animation"
            }, [
              We("div", {
                class: "spinner"
              })
            ], -1))
          ])) : vs("", true),
          f.value ? (ni(), xi("div", fv, [
            re[1] || (re[1] = We("div", {
              class: "error-icon"
            }, " \u26A0\uFE0F ", -1)),
            re[2] || (re[2] = We("h2", null, "Loading Error", -1)),
            We("div", hv, [
              (ni(true), xi(At, null, fp((p.value ?? "").split(`
`), (fe) => (ni(), xi("div", {
                key: fe,
                style: {
                  display: "block",
                  "font-family": "monospace",
                  overflow: "auto"
                }
              }, [
                fe.toLocaleLowerCase().includes("trackback") ? (ni(), xi("strong", dv, Di(fe), 1)) : (ni(), xi("span", pv, Di(fe), 1))
              ]))), 128))
            ]),
            We("button", {
              class: "retry-button",
              onClick: U
            }, " Retry ")
          ])) : vs("", true),
          h.value ? (ni(), xi("div", gv, [
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
          ])) : vs("", true),
          y.value ? (ni(), xi("div", mv, [
            re[7] || (re[7] = We("div", {
              class: "permission-icon"
            }, " \u{1F4CD} ", -1)),
            We("h2", null, Di(Qr(As)("permission.title")), 1),
            We("p", wv, Di(g.value), 1),
            We("div", yv, [
              We("button", {
                class: "permission-button deny",
                onClick: ue
              }, Di(Qr(As)("permission.deny")), 1),
              We("button", {
                class: "permission-button allow",
                onClick: $
              }, Di(Qr(As)("permission.allow")), 1)
            ])
          ])) : vs("", true)
        ])
      ]));
    }
  });
  vv = (e, t) => {
    const i = e.__vccOpts || e;
    for (const [r, a] of t) i[r] = a;
    return i;
  };
  _v = vv(bv, [
    [
      "__scopeId",
      "data-v-975c59e1"
    ]
  ]);
  El = Wf(_v);
  El.use(Nh());
  El.mount("#splash");
  window.splashScreen = El;
})();
export {
  Tr as $,
  Qr as A,
  Bd as B,
  zp as C,
  Di as D,
  vs as E,
  At as F,
  tn as G,
  Ia as H,
  Av as I,
  tb as J,
  kv as K,
  Ro as L,
  xv as M,
  tp as N,
  ip as O,
  gr as P,
  Hi as Q,
  xd as R,
  yo as S,
  Nv as T,
  jv as U,
  ct as V,
  il as W,
  Ad as X,
  Do as Y,
  o1 as Z,
  vv as _,
  __tla,
  We as a,
  ld as a$,
  _s as a0,
  Lv as a1,
  Fr as a2,
  Ov as a3,
  Pv as a4,
  Rv as a5,
  fp as a6,
  Uv as a7,
  l1 as a8,
  zv as a9,
  dm as aA,
  am as aB,
  Hf as aC,
  Jf as aD,
  Xm as aE,
  yn as aF,
  Mc as aG,
  Yw as aH,
  Ui as aI,
  Qf as aJ,
  bn as aK,
  Zm as aL,
  rw as aM,
  Zf as aN,
  bm as aO,
  ki as aP,
  Ww as aQ,
  f0 as aR,
  xw as aS,
  Kf as aT,
  O0 as aU,
  kd as aV,
  Et as aW,
  on as aX,
  ko as aY,
  Wv as aZ,
  ku as a_,
  ca as aa,
  La as ab,
  Co as ac,
  n1 as ad,
  s1 as ae,
  Zv as af,
  Vv as ag,
  Xv as ah,
  Kv as ai,
  qv as aj,
  Hv as ak,
  Yv as al,
  Jv as am,
  Cv as an,
  u1 as ao,
  f1 as ap,
  $y as aq,
  li as ar,
  pb as as,
  Kn as at,
  wr as au,
  mr as av,
  ln as aw,
  hc as ax,
  lm as ay,
  fm as az,
  np as b,
  Vd as b0,
  Ev as b1,
  Zi as b2,
  Gv as b3,
  Qv as b4,
  e1 as b5,
  t1 as b6,
  i1 as b7,
  r1 as b8,
  a1 as b9,
  su as ba,
  Ne as bb,
  Bv as bc,
  ut as bd,
  $v as be,
  xi as c,
  Qd as d,
  ol as e,
  qt as f,
  _o as g,
  Jp as h,
  zn as i,
  hl as j,
  Ku as k,
  Mv as l,
  as as m,
  Za as n,
  ni as o,
  Wd as p,
  Tv as q,
  ma as r,
  al as s,
  Gp as t,
  Iv as u,
  Dv as v,
  Sv as w,
  c1 as x,
  Fv as y,
  Rt as z
};
