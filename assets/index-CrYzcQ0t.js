const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["./App-DovCffWZ.js","./SelectorDrawer.vue_vue_type_script_setup_true_lang-DKVMGKHb.js","./index-D1E9Vwbb.js","./SelectorDrawer-Dg3sM_aP.css","./index-CjZyYIcs.js","./App-Bp_jwbR1.css","./index-CYcDj7ew.js","./index-0kOERy-5.css"])))=>i.map(i=>d[i]);
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
let Ti, Qi, Bd, zp, Dr, vs, At, tn, Ia, Rv, eb, Av, Co, Lv, tp, rp, pi, Hr, Nd, yo, Dv, Uv, lt, rl, Ad, Do, a1, _v, Be, ld, _s, Nv, yi, xv, kv, Ov, fp, zv, c1, Gv, dm, am, Hf, Jf, Xm, yn, Mc, Yw, Ur, Qf, bn, Zm, iw, Zf, bm, kr, Ww, f0, Nw, Kf, O0, kd, Et, on, ko, Vv, ku, ca, xa, Ro, s1, o1, Jv, qv, Qv, Hv, Kv, Zv, Xv, Yv, Cv, f1, h1, $y, lr, gb, Kn, mi, gi, ln, hc, lm, fm, np, Vd, Iv, Zr, $v, e1, t1, r1, i1, n1, l1, su, Le, Wv, ct, Bv, Nr, Qd, ol, qt, _o, Jp, zn, hl, Ku, Pv, as, Za, nr, Wd, Mv, ma, al, Gp, Sv, Fv, Tv, u1, jv, Ct;
let __tla = (async () => {
  var _a2;
  (function() {
    const t = document.createElement("link").relList;
    if (t && t.supports && t.supports("modulepreload")) return;
    for (const a of document.querySelectorAll('link[rel="modulepreload"]')) i(a);
    new MutationObserver((a) => {
      for (const c of a) if (c.type === "childList") for (const f of c.addedNodes) f.tagName === "LINK" && f.rel === "modulepreload" && i(f);
    }).observe(document, {
      childList: true,
      subtree: true
    });
    function r(a) {
      const c = {};
      return a.integrity && (c.integrity = a.integrity), a.referrerPolicy && (c.referrerPolicy = a.referrerPolicy), a.crossOrigin === "use-credentials" ? c.credentials = "include" : a.crossOrigin === "anonymous" ? c.credentials = "omit" : c.credentials = "same-origin", c;
    }
    function i(a) {
      if (a.ep) return;
      a.ep = true;
      const c = r(a);
      fetch(a.href, c);
    }
  })();
  function qa(e) {
    const t = /* @__PURE__ */ Object.create(null);
    for (const r of e.split(",")) t[r] = 1;
    return (r) => r in t;
  }
  const je = {}, Yi = [], fr = () => {
  }, wu = () => false, ho = (e) => e.charCodeAt(0) === 111 && e.charCodeAt(1) === 110 && (e.charCodeAt(2) > 122 || e.charCodeAt(2) < 97), Ka = (e) => e.startsWith("onUpdate:"), dt = Object.assign, Ha = (e, t) => {
    const r = e.indexOf(t);
    r > -1 && e.splice(r, 1);
  }, Kh = Object.prototype.hasOwnProperty, We = (e, t) => Kh.call(e, t), ve = Array.isArray, Xi = (e) => wn(e) === "[object Map]", yu = (e) => wn(e) === "[object Set]", Ml = (e) => wn(e) === "[object Date]", Hh = (e) => wn(e) === "[object RegExp]", Te = (e) => typeof e == "function", at = (e) => typeof e == "string", pr = (e) => typeof e == "symbol", Ge = (e) => e !== null && typeof e == "object", bu = (e) => (Ge(e) || Te(e)) && Te(e.then) && Te(e.catch), vu = Object.prototype.toString, wn = (e) => vu.call(e), Zh = (e) => wn(e).slice(8, -1), _u = (e) => wn(e) === "[object Object]", po = (e) => at(e) && e !== "NaN" && e[0] !== "-" && "" + parseInt(e, 10) === e, Dn = qa(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"), go = (e) => {
    const t = /* @__PURE__ */ Object.create(null);
    return ((r) => t[r] || (t[r] = e(r)));
  }, Jh = /-\w/g, Yt = go((e) => e.replace(Jh, (t) => t.slice(1).toUpperCase())), Yh = /\B([A-Z])/g, Jr = go((e) => e.replace(Yh, "-$1").toLowerCase()), mo = go((e) => e.charAt(0).toUpperCase() + e.slice(1)), Go = go((e) => e ? `on${mo(e)}` : ""), zt = (e, t) => !Object.is(e, t), Fn = (e, ...t) => {
    for (let r = 0; r < e.length; r++) e[r](...t);
  }, Eu = (e, t, r, i = false) => {
    Object.defineProperty(e, t, {
      configurable: true,
      enumerable: false,
      writable: i,
      value: r
    });
  }, Xh = (e) => {
    const t = parseFloat(e);
    return isNaN(t) ? e : t;
  }, Qh = (e) => {
    const t = at(e) ? Number(e) : NaN;
    return isNaN(t) ? e : t;
  };
  let Pl;
  const wo = () => Pl || (Pl = typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : typeof window < "u" ? window : typeof global < "u" ? global : {});
  yo = function(e) {
    if (ve(e)) {
      const t = {};
      for (let r = 0; r < e.length; r++) {
        const i = e[r], a = at(i) ? id(i) : yo(i);
        if (a) for (const c in a) t[c] = a[c];
      }
      return t;
    } else if (at(e) || Ge(e)) return e;
  };
  const ed = /;(?![^(]*\))/g, td = /:([^]+)/, rd = /\/\*[^]*?\*\//g;
  function id(e) {
    const t = {};
    return e.replace(rd, "").split(ed).forEach((r) => {
      if (r) {
        const i = r.split(td);
        i.length > 1 && (t[i[0].trim()] = i[1].trim());
      }
    }), t;
  }
  Za = function(e) {
    let t = "";
    if (at(e)) t = e;
    else if (ve(e)) for (let r = 0; r < e.length; r++) {
      const i = Za(e[r]);
      i && (t += i + " ");
    }
    else if (Ge(e)) for (const r in e) e[r] && (t += r + " ");
    return t.trim();
  };
  const nd = "itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly", sd = qa(nd);
  function Iu(e) {
    return !!e || e === "";
  }
  function od(e, t) {
    if (e.length !== t.length) return false;
    let r = true;
    for (let i = 0; r && i < e.length; i++) r = Ja(e[i], t[i]);
    return r;
  }
  function Ja(e, t) {
    if (e === t) return true;
    let r = Ml(e), i = Ml(t);
    if (r || i) return r && i ? e.getTime() === t.getTime() : false;
    if (r = pr(e), i = pr(t), r || i) return e === t;
    if (r = ve(e), i = ve(t), r || i) return r && i ? od(e, t) : false;
    if (r = Ge(e), i = Ge(t), r || i) {
      if (!r || !i) return false;
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
  Dr = (e) => at(e) ? e : e == null ? "" : ve(e) || Ge(e) && (e.toString === vu || !Te(e.toString)) ? Su(e) ? Dr(e.value) : JSON.stringify(e, Tu, 2) : String(e);
  Tu = (e, t) => Su(t) ? Tu(e, t.value) : Xi(t) ? {
    [`Map(${t.size})`]: [
      ...t.entries()
    ].reduce((r, [i, a], c) => (r[$o(i, c) + " =>"] = a, r), {})
  } : yu(t) ? {
    [`Set(${t.size})`]: [
      ...t.values()
    ].map((r) => $o(r))
  } : pr(t) ? $o(t) : Ge(t) && !ve(t) && !_u(t) ? String(t) : t;
  $o = (e, t = "") => {
    var r;
    return pr(e) ? `Symbol(${(r = e.description) != null ? r : t})` : e;
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
        let t, r;
        if (this.scopes) for (t = 0, r = this.scopes.length; t < r; t++) this.scopes[t].pause();
        for (t = 0, r = this.effects.length; t < r; t++) this.effects[t].pause();
      }
    }
    resume() {
      if (this._active && this._isPaused) {
        this._isPaused = false;
        let t, r;
        if (this.scopes) for (t = 0, r = this.scopes.length; t < r; t++) this.scopes[t].resume();
        for (t = 0, r = this.effects.length; t < r; t++) this.effects[t].resume();
      }
    }
    run(t) {
      if (this._active) {
        const r = Pt;
        try {
          return Pt = this, t();
        } finally {
          Pt = r;
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
        let r, i;
        for (r = 0, i = this.effects.length; r < i; r++) this.effects[r].stop();
        for (this.effects.length = 0, r = 0, i = this.cleanups.length; r < i; r++) this.cleanups[r]();
        if (this.cleanups.length = 0, this.scopes) {
          for (r = 0, i = this.scopes.length; r < i; r++) this.scopes[r].stop(true);
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
  let et;
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
      this.flags & 2 && !(this.flags & 32) || this.flags & 8 || Cu(this);
    }
    run() {
      if (!(this.flags & 1)) return this.fn();
      this.flags |= 2, kl(this), Ou(this);
      const t = et, r = hr;
      et = this, hr = true;
      try {
        return this.fn();
      } finally {
        xu(this), et = t, hr = r, this.flags &= -3;
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
  let Ru = 0, jn, Un;
  function Cu(e, t = false) {
    if (e.flags |= 8, t) {
      e.next = Un, Un = e;
      return;
    }
    e.next = jn, jn = e;
  }
  function Ya() {
    Ru++;
  }
  function Xa() {
    if (--Ru > 0) return;
    if (Un) {
      let t = Un;
      for (Un = void 0; t; ) {
        const r = t.next;
        t.next = void 0, t.flags &= -9, t = r;
      }
    }
    let e;
    for (; jn; ) {
      let t = jn;
      for (jn = void 0; t; ) {
        const r = t.next;
        if (t.next = void 0, t.flags &= -9, t.flags & 1) try {
          t.trigger();
        } catch (i) {
          e || (e = i);
        }
        t = r;
      }
    }
    if (e) throw e;
  }
  function Ou(e) {
    for (let t = e.deps; t; t = t.nextDep) t.version = -1, t.prevActiveLink = t.dep.activeLink, t.dep.activeLink = t;
  }
  function xu(e) {
    let t, r = e.depsTail, i = r;
    for (; i; ) {
      const a = i.prevDep;
      i.version === -1 ? (i === r && (r = a), Qa(i), cd(i)) : t = i, i.dep.activeLink = i.prevActiveLink, i.prevActiveLink = void 0, i = a;
    }
    e.deps = t, e.depsTail = r;
  }
  function da(e) {
    for (let t = e.deps; t; t = t.nextDep) if (t.dep.version !== t.version || t.dep.computed && (Nu(t.dep.computed) || t.dep.version !== t.version)) return true;
    return !!e._dirty;
  }
  function Nu(e) {
    if (e.flags & 4 && !(e.flags & 16) || (e.flags &= -17, e.globalVersion === Jn) || (e.globalVersion = Jn, !e.isSSR && e.flags & 128 && (!e.deps && !e._dirty || !da(e)))) return;
    e.flags |= 2;
    const t = e.dep, r = et, i = hr;
    et = e, hr = true;
    try {
      Ou(e);
      const a = e.fn(e._value);
      (t.version === 0 || zt(a, e._value)) && (e.flags |= 128, e._value = a, t.version++);
    } catch (a) {
      throw t.version++, a;
    } finally {
      et = r, hr = i, xu(e), e.flags &= -3;
    }
  }
  function Qa(e, t = false) {
    const { dep: r, prevSub: i, nextSub: a } = e;
    if (i && (i.nextSub = a, e.prevSub = void 0), a && (a.prevSub = i, e.nextSub = void 0), r.subs === e && (r.subs = i, !i && r.computed)) {
      r.computed.flags &= -5;
      for (let c = r.computed.deps; c; c = c.nextDep) Qa(c, true);
    }
    !t && !--r.sc && r.map && r.map.delete(r.key);
  }
  function cd(e) {
    const { prevDep: t, nextDep: r } = e;
    t && (t.nextDep = r, e.prevDep = void 0), r && (r.prevDep = t, e.nextDep = void 0);
  }
  let hr = true;
  const Lu = [];
  function Vr() {
    Lu.push(hr), hr = false;
  }
  function qr() {
    const e = Lu.pop();
    hr = e === void 0 ? true : e;
  }
  function kl(e) {
    const { cleanup: t } = e;
    if (e.cleanup = void 0, t) {
      const r = et;
      et = void 0;
      try {
        t();
      } finally {
        et = r;
      }
    }
  }
  let Jn = 0;
  class ud {
    constructor(t, r) {
      this.sub = t, this.dep = r, this.version = r.version, this.nextDep = this.prevDep = this.nextSub = this.prevSub = this.prevActiveLink = void 0;
    }
  }
  class bo {
    constructor(t) {
      this.computed = t, this.version = 0, this.activeLink = void 0, this.subs = void 0, this.map = void 0, this.key = void 0, this.sc = 0, this.__v_skip = true;
    }
    track(t) {
      if (!et || !hr || et === this.computed) return;
      let r = this.activeLink;
      if (r === void 0 || r.sub !== et) r = this.activeLink = new ud(et, this), et.deps ? (r.prevDep = et.depsTail, et.depsTail.nextDep = r, et.depsTail = r) : et.deps = et.depsTail = r, Du(r);
      else if (r.version === -1 && (r.version = this.version, r.nextDep)) {
        const i = r.nextDep;
        i.prevDep = r.prevDep, r.prevDep && (r.prevDep.nextDep = i), r.prevDep = et.depsTail, r.nextDep = void 0, et.depsTail.nextDep = r, et.depsTail = r, et.deps === r && (et.deps = i);
      }
      return r;
    }
    trigger(t) {
      this.version++, Jn++, this.notify(t);
    }
    notify(t) {
      Ya();
      try {
        for (let r = this.subs; r; r = r.prevSub) r.sub.notify() && r.sub.dep.notify();
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
        for (let i = t.deps; i; i = i.nextDep) Du(i);
      }
      const r = e.dep.subs;
      r !== e && (e.prevSub = r, r && (r.nextSub = e)), e.dep.subs = e;
    }
  }
  const Gs = /* @__PURE__ */ new WeakMap(), Ni = /* @__PURE__ */ Symbol(""), pa = /* @__PURE__ */ Symbol(""), Yn = /* @__PURE__ */ Symbol("");
  function kt(e, t, r) {
    if (hr && et) {
      let i = Gs.get(e);
      i || Gs.set(e, i = /* @__PURE__ */ new Map());
      let a = i.get(r);
      a || (i.set(r, a = new bo()), a.map = i, a.key = r), a.track();
    }
  }
  function zr(e, t, r, i, a, c) {
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
      const p = ve(e), v = p && po(r);
      if (p && r === "length") {
        const g = Number(i);
        f.forEach((I, R) => {
          (R === "length" || R === Yn || !pr(R) && R >= g) && h(I);
        });
      } else switch ((r !== void 0 || f.has(void 0)) && h(f.get(r)), v && h(f.get(Yn)), t) {
        case "add":
          p ? v && h(f.get("length")) : (h(f.get(Ni)), Xi(e) && h(f.get(pa)));
          break;
        case "delete":
          p || (h(f.get(Ni)), Xi(e) && h(f.get(pa)));
          break;
        case "set":
          Xi(e) && h(f.get(Ni));
          break;
      }
    }
    Xa();
  }
  function fd(e, t) {
    const r = Gs.get(e);
    return r && r.get(t);
  }
  function zi(e) {
    const t = Le(e);
    return t === e ? t : (kt(t, "iterate", Yn), Jt(e) ? t : t.map(gr));
  }
  function vo(e) {
    return kt(e = Le(e), "iterate", Yn), e;
  }
  function si(e, t) {
    return Kr(e) ? sn(Br(e) ? gr(t) : t) : gr(t);
  }
  const hd = {
    __proto__: null,
    [Symbol.iterator]() {
      return Wo(this, Symbol.iterator, (e) => si(this, e));
    },
    concat(...e) {
      return zi(this).concat(...e.map((t) => ve(t) ? zi(t) : t));
    },
    entries() {
      return Wo(this, "entries", (e) => (e[1] = si(this, e[1]), e));
    },
    every(e, t) {
      return xr(this, "every", e, t, void 0, arguments);
    },
    filter(e, t) {
      return xr(this, "filter", e, t, (r) => r.map((i) => si(this, i)), arguments);
    },
    find(e, t) {
      return xr(this, "find", e, t, (r) => si(this, r), arguments);
    },
    findIndex(e, t) {
      return xr(this, "findIndex", e, t, void 0, arguments);
    },
    findLast(e, t) {
      return xr(this, "findLast", e, t, (r) => si(this, r), arguments);
    },
    findLastIndex(e, t) {
      return xr(this, "findLastIndex", e, t, void 0, arguments);
    },
    forEach(e, t) {
      return xr(this, "forEach", e, t, void 0, arguments);
    },
    includes(...e) {
      return Vo(this, "includes", e);
    },
    indexOf(...e) {
      return Vo(this, "indexOf", e);
    },
    join(e) {
      return zi(this).join(e);
    },
    lastIndexOf(...e) {
      return Vo(this, "lastIndexOf", e);
    },
    map(e, t) {
      return xr(this, "map", e, t, void 0, arguments);
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
      return xr(this, "some", e, t, void 0, arguments);
    },
    splice(...e) {
      return In(this, "splice", e);
    },
    toReversed() {
      return zi(this).toReversed();
    },
    toSorted(e) {
      return zi(this).toSorted(e);
    },
    toSpliced(...e) {
      return zi(this).toSpliced(...e);
    },
    unshift(...e) {
      return In(this, "unshift", e);
    },
    values() {
      return Wo(this, "values", (e) => si(this, e));
    }
  };
  function Wo(e, t, r) {
    const i = vo(e), a = i[t]();
    return i !== e && !Jt(e) && (a._next = a.next, a.next = () => {
      const c = a._next();
      return c.done || (c.value = r(c.value)), c;
    }), a;
  }
  const dd = Array.prototype;
  function xr(e, t, r, i, a, c) {
    const f = vo(e), h = f !== e && !Jt(e), p = f[t];
    if (p !== dd[t]) {
      const I = p.apply(e, c);
      return h ? gr(I) : I;
    }
    let v = r;
    f !== e && (h ? v = function(I, R) {
      return r.call(this, si(e, I), R, e);
    } : r.length > 2 && (v = function(I, R) {
      return r.call(this, I, R, e);
    }));
    const g = p.call(f, v, i);
    return h && a ? a(g) : g;
  }
  function Al(e, t, r, i) {
    const a = vo(e);
    let c = r;
    return a !== e && (Jt(e) ? r.length > 3 && (c = function(f, h, p) {
      return r.call(this, f, h, p, e);
    }) : c = function(f, h, p) {
      return r.call(this, f, si(e, h), p, e);
    }), a[t](c, ...i);
  }
  function Vo(e, t, r) {
    const i = Le(e);
    kt(i, "iterate", Yn);
    const a = i[t](...r);
    return (a === -1 || a === false) && Eo(r[0]) ? (r[0] = Le(r[0]), i[t](...r)) : a;
  }
  function In(e, t, r = []) {
    Vr(), Ya();
    const i = Le(e)[t].apply(e, r);
    return Xa(), qr(), i;
  }
  const pd = qa("__proto__,__v_isRef,__isVue"), Fu = new Set(Object.getOwnPropertyNames(Symbol).filter((e) => e !== "arguments" && e !== "caller").map((e) => Symbol[e]).filter(pr));
  function gd(e) {
    pr(e) || (e = String(e));
    const t = Le(this);
    return kt(t, "has", e), t.hasOwnProperty(e);
  }
  class ju {
    constructor(t = false, r = false) {
      this._isReadonly = t, this._isShallow = r;
    }
    get(t, r, i) {
      if (r === "__v_skip") return t.__v_skip;
      const a = this._isReadonly, c = this._isShallow;
      if (r === "__v_isReactive") return !a;
      if (r === "__v_isReadonly") return a;
      if (r === "__v_isShallow") return c;
      if (r === "__v_raw") return i === (a ? c ? Td : $u : c ? Gu : zu).get(t) || Object.getPrototypeOf(t) === Object.getPrototypeOf(i) ? t : void 0;
      const f = ve(t);
      if (!a) {
        let p;
        if (f && (p = hd[r])) return p;
        if (r === "hasOwnProperty") return gd;
      }
      const h = Reflect.get(t, r, lt(t) ? t : i);
      if ((pr(r) ? Fu.has(r) : pd(r)) || (a || kt(t, "get", r), c)) return h;
      if (lt(h)) {
        const p = f && po(r) ? h : h.value;
        return a && Ge(p) ? ma(p) : p;
      }
      return Ge(h) ? a ? ma(h) : _o(h) : h;
    }
  }
  class Uu extends ju {
    constructor(t = false) {
      super(false, t);
    }
    set(t, r, i, a) {
      let c = t[r];
      const f = ve(t) && po(r);
      if (!this._isShallow) {
        const v = Kr(c);
        if (!Jt(i) && !Kr(i) && (c = Le(c), i = Le(i)), !f && lt(c) && !lt(i)) return v || (c.value = i), true;
      }
      const h = f ? Number(r) < t.length : We(t, r), p = Reflect.set(t, r, i, lt(t) ? t : a);
      return t === Le(a) && (h ? zt(i, c) && zr(t, "set", r, i) : zr(t, "add", r, i)), p;
    }
    deleteProperty(t, r) {
      const i = We(t, r);
      t[r];
      const a = Reflect.deleteProperty(t, r);
      return a && i && zr(t, "delete", r, void 0), a;
    }
    has(t, r) {
      const i = Reflect.has(t, r);
      return (!pr(r) || !Fu.has(r)) && kt(t, "has", r), i;
    }
    ownKeys(t) {
      return kt(t, "iterate", ve(t) ? "length" : Ni), Reflect.ownKeys(t);
    }
  }
  class md extends ju {
    constructor(t = false) {
      super(true, t);
    }
    set(t, r) {
      return true;
    }
    deleteProperty(t, r) {
      return true;
    }
  }
  const wd = new Uu(), yd = new md(), bd = new Uu(true);
  const ga = (e) => e, gs = (e) => Reflect.getPrototypeOf(e);
  function vd(e, t, r) {
    return function(...i) {
      const a = this.__v_raw, c = Le(a), f = Xi(c), h = e === "entries" || e === Symbol.iterator && f, p = e === "keys" && f, v = a[e](...i), g = r ? ga : t ? sn : gr;
      return !t && kt(c, "iterate", p ? pa : Ni), dt(Object.create(v), {
        next() {
          const { value: I, done: R } = v.next();
          return R ? {
            value: I,
            done: R
          } : {
            value: h ? [
              g(I[0]),
              g(I[1])
            ] : g(I),
            done: R
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
    const r = {
      get(a) {
        const c = this.__v_raw, f = Le(c), h = Le(a);
        e || (zt(a, h) && kt(f, "get", a), kt(f, "get", h));
        const { has: p } = gs(f), v = t ? ga : e ? sn : gr;
        if (p.call(f, a)) return v(c.get(a));
        if (p.call(f, h)) return v(c.get(h));
        c !== f && c.get(a);
      },
      get size() {
        const a = this.__v_raw;
        return !e && kt(Le(a), "iterate", Ni), a.size;
      },
      has(a) {
        const c = this.__v_raw, f = Le(c), h = Le(a);
        return e || (zt(a, h) && kt(f, "has", a), kt(f, "has", h)), a === h ? c.has(a) : c.has(a) || c.has(h);
      },
      forEach(a, c) {
        const f = this, h = f.__v_raw, p = Le(h), v = t ? ga : e ? sn : gr;
        return !e && kt(p, "iterate", Ni), h.forEach((g, I) => a.call(c, v(g), v(I), f));
      }
    };
    return dt(r, e ? {
      add: ms("add"),
      set: ms("set"),
      delete: ms("delete"),
      clear: ms("clear")
    } : {
      add(a) {
        !t && !Jt(a) && !Kr(a) && (a = Le(a));
        const c = Le(this);
        return gs(c).has.call(c, a) || (c.add(a), zr(c, "add", a, a)), this;
      },
      set(a, c) {
        !t && !Jt(c) && !Kr(c) && (c = Le(c));
        const f = Le(this), { has: h, get: p } = gs(f);
        let v = h.call(f, a);
        v || (a = Le(a), v = h.call(f, a));
        const g = p.call(f, a);
        return f.set(a, c), v ? zt(c, g) && zr(f, "set", a, c) : zr(f, "add", a, c), this;
      },
      delete(a) {
        const c = Le(this), { has: f, get: h } = gs(c);
        let p = f.call(c, a);
        p || (a = Le(a), p = f.call(c, a)), h && h.call(c, a);
        const v = c.delete(a);
        return p && zr(c, "delete", a, void 0), v;
      },
      clear() {
        const a = Le(this), c = a.size !== 0, f = a.clear();
        return c && zr(a, "clear", void 0, void 0), f;
      }
    }), [
      "keys",
      "values",
      "entries",
      Symbol.iterator
    ].forEach((a) => {
      r[a] = vd(a, e, t);
    }), r;
  }
  function el(e, t) {
    const r = _d(e, t);
    return (i, a, c) => a === "__v_isReactive" ? !e : a === "__v_isReadonly" ? e : a === "__v_raw" ? i : Reflect.get(We(r, a) && a in i ? r : i, a, c);
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
    return Kr(e) ? e : tl(e, false, wd, Ed, zu);
  };
  kd = function(e) {
    return tl(e, false, bd, Id, Gu);
  };
  ma = function(e) {
    return tl(e, true, yd, Sd, $u);
  };
  function tl(e, t, r, i, a) {
    if (!Ge(e) || e.__v_raw && !(t && e.__v_isReactive)) return e;
    const c = Pd(e);
    if (c === 0) return e;
    const f = a.get(e);
    if (f) return f;
    const h = new Proxy(e, c === 2 ? i : r);
    return a.set(e, h), h;
  }
  function Br(e) {
    return Kr(e) ? Br(e.__v_raw) : !!(e && e.__v_isReactive);
  }
  function Kr(e) {
    return !!(e && e.__v_isReadonly);
  }
  function Jt(e) {
    return !!(e && e.__v_isShallow);
  }
  function Eo(e) {
    return e ? !!e.__v_raw : false;
  }
  Le = function(e) {
    const t = e && e.__v_raw;
    return t ? Le(t) : e;
  };
  rl = function(e) {
    return !We(e, "__v_skip") && Object.isExtensible(e) && Eu(e, "__v_skip", true), e;
  };
  const gr = (e) => Ge(e) ? _o(e) : e, sn = (e) => Ge(e) ? ma(e) : e;
  lt = function(e) {
    return e ? e.__v_isRef === true : false;
  };
  qt = function(e) {
    return Bu(e, false);
  };
  Ad = function(e) {
    return Bu(e, true);
  };
  function Bu(e, t) {
    return lt(e) ? e : new Rd(e, t);
  }
  class Rd {
    constructor(t, r) {
      this.dep = new bo(), this.__v_isRef = true, this.__v_isShallow = false, this._rawValue = r ? t : Le(t), this._value = r ? t : gr(t), this.__v_isShallow = r;
    }
    get value() {
      return this.dep.track(), this._value;
    }
    set value(t) {
      const r = this._rawValue, i = this.__v_isShallow || Jt(t) || Kr(t);
      t = i ? t : Le(t), zt(t, r) && (this._rawValue = t, this._value = i ? t : gr(t), this.dep.trigger());
    }
  }
  Qi = function(e) {
    return lt(e) ? e.value : e;
  };
  Iv = function(e) {
    return Te(e) ? e() : Qi(e);
  };
  const Cd = {
    get: (e, t, r) => t === "__v_raw" ? e : Qi(Reflect.get(e, t, r)),
    set: (e, t, r, i) => {
      const a = e[t];
      return lt(a) && !lt(r) ? (a.value = r, true) : Reflect.set(e, t, r, i);
    }
  };
  function Wu(e) {
    return Br(e) ? e : new Proxy(e, Cd);
  }
  class Od {
    constructor(t) {
      this.__v_isRef = true, this._value = void 0;
      const r = this.dep = new bo(), { get: i, set: a } = t(r.track.bind(r), r.trigger.bind(r));
      this._get = i, this._set = a;
    }
    get value() {
      return this._value = this._get();
    }
    set value(t) {
      this._set(t);
    }
  }
  function xd(e) {
    return new Od(e);
  }
  Nd = function(e) {
    const t = ve(e) ? new Array(e.length) : {};
    for (const r in e) t[r] = Vu(e, r);
    return t;
  };
  class Ld {
    constructor(t, r, i) {
      this._object = t, this._key = r, this._defaultValue = i, this.__v_isRef = true, this._value = void 0, this._raw = Le(t);
      let a = true, c = t;
      if (!ve(t) || !po(String(r))) do
        a = !Eo(c) || Jt(c);
      while (a && (c = c.__v_raw));
      this._shallow = a;
    }
    get value() {
      let t = this._object[this._key];
      return this._shallow && (t = Qi(t)), this._value = t === void 0 ? this._defaultValue : t;
    }
    set value(t) {
      if (this._shallow && lt(this._raw[this._key])) {
        const r = this._object[this._key];
        if (lt(r)) {
          r.value = t;
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
  Sv = function(e, t, r) {
    return lt(e) ? e : Te(e) ? new Dd(e) : Ge(e) && arguments.length > 1 ? Vu(e, t, r) : qt(e);
  };
  function Vu(e, t, r) {
    return new Ld(e, t, r);
  }
  class Fd {
    constructor(t, r, i) {
      this.fn = t, this.setter = r, this._value = void 0, this.dep = new bo(this), this.__v_isRef = true, this.deps = void 0, this.depsTail = void 0, this.flags = 16, this.globalVersion = Jn - 1, this.next = void 0, this.effect = this, this.__v_isReadonly = !r, this.isSSR = i;
    }
    notify() {
      if (this.flags |= 16, !(this.flags & 8) && et !== this) return Cu(this, true), true;
    }
    get value() {
      const t = this.dep.track();
      return Nu(this), t && (t.version = this.dep.version), this._value;
    }
    set value(t) {
      this.setter && this.setter(t);
    }
  }
  function jd(e, t, r = false) {
    let i, a;
    return Te(e) ? i = e : (i = e.get, a = e.set), new Fd(i, a, r);
  }
  const ws = {}, $s = /* @__PURE__ */ new WeakMap();
  let ki;
  function Ud(e, t = false, r = ki) {
    if (r) {
      let i = $s.get(r);
      i || $s.set(r, i = []), i.push(e);
    }
  }
  function zd(e, t, r = je) {
    const { immediate: i, deep: a, once: c, scheduler: f, augmentJob: h, call: p } = r, v = ($) => a ? $ : Jt($) || a === false || a === 0 ? Gr($, 1) : Gr($);
    let g, I, R, A, j = false, x = false;
    if (lt(e) ? (I = () => e.value, j = Jt(e)) : Br(e) ? (I = () => v(e), j = true) : ve(e) ? (x = true, j = e.some(($) => Br($) || Jt($)), I = () => e.map(($) => {
      if (lt($)) return $.value;
      if (Br($)) return v($);
      if (Te($)) return p ? p($, 2) : $();
    })) : Te(e) ? t ? I = p ? () => p(e, 2) : e : I = () => {
      if (R) {
        Vr();
        try {
          R();
        } finally {
          qr();
        }
      }
      const $ = ki;
      ki = g;
      try {
        return p ? p(e, 3, [
          A
        ]) : e(A);
      } finally {
        ki = $;
      }
    } : I = fr, t && a) {
      const $ = I, ue = a === true ? 1 / 0 : a;
      I = () => Gr($(), ue);
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
    let U = x ? new Array(e.length).fill(ws) : ws;
    const Y = ($) => {
      if (!(!(g.flags & 1) || !g.dirty && !$)) if (t) {
        const ue = g.run();
        if (a || j || (x ? ue.some((ge, ie) => zt(ge, U[ie])) : zt(ue, U))) {
          R && R();
          const ge = ki;
          ki = g;
          try {
            const ie = [
              ue,
              U === ws ? void 0 : x && U[0] === ws ? [] : U,
              A
            ];
            U = ue, p ? p(t, 3, ie) : t(...ie);
          } finally {
            ki = ge;
          }
        }
      } else g.run();
    };
    return h && h(Y), g = new Au(I), g.scheduler = f ? () => f(Y, false) : Y, A = ($) => Ud($, false, g), R = g.onStop = () => {
      const $ = $s.get(g);
      if ($) {
        if (p) p($, 4);
        else for (const ue of $) ue();
        $s.delete(g);
      }
    }, t ? i ? Y(true) : U = g.run() : f ? f(Y.bind(null, true), true) : g.run(), se.pause = g.pause.bind(g), se.resume = g.resume.bind(g), se.stop = se, se;
  }
  function Gr(e, t = 1 / 0, r) {
    if (t <= 0 || !Ge(e) || e.__v_skip || (r = r || /* @__PURE__ */ new Map(), (r.get(e) || 0) >= t)) return e;
    if (r.set(e, t), t--, lt(e)) Gr(e.value, t, r);
    else if (ve(e)) for (let i = 0; i < e.length; i++) Gr(e[i], t, r);
    else if (yu(e) || Xi(e)) e.forEach((i) => {
      Gr(i, t, r);
    });
    else if (_u(e)) {
      for (const i in e) Gr(e[i], t, r);
      for (const i of Object.getOwnPropertySymbols(e)) Object.prototype.propertyIsEnumerable.call(e, i) && Gr(e[i], t, r);
    }
    return e;
  }
  function os(e, t, r, i) {
    try {
      return i ? e(...i) : e();
    } catch (a) {
      Io(a, t, r);
    }
  }
  function mr(e, t, r, i) {
    if (Te(e)) {
      const a = os(e, t, r, i);
      return a && bu(a) && a.catch((c) => {
        Io(c, t, r);
      }), a;
    }
    if (ve(e)) {
      const a = [];
      for (let c = 0; c < e.length; c++) a.push(mr(e[c], t, r, i));
      return a;
    }
  }
  function Io(e, t, r, i = true) {
    const a = t ? t.vnode : null, { errorHandler: c, throwUnhandledErrorInProduction: f } = t && t.appContext.config || je;
    if (t) {
      let h = t.parent;
      const p = t.proxy, v = `https://vuejs.org/error-reference/#runtime-${r}`;
      for (; h; ) {
        const g = h.ec;
        if (g) {
          for (let I = 0; I < g.length; I++) if (g[I](e, p, v) === false) return;
        }
        h = h.parent;
      }
      if (c) {
        Vr(), os(c, null, 10, [
          e,
          p,
          v
        ]), qr();
        return;
      }
    }
    Gd(e, r, a, i, f);
  }
  function Gd(e, t, r, i = true, a = false) {
    if (a) throw e;
    console.error(e);
  }
  const Dt = [];
  let Er = -1;
  const en = [];
  let oi = null, Zi = 0;
  const qu = Promise.resolve();
  let Bs = null;
  Ku = function(e) {
    const t = Bs || qu;
    return e ? t.then(this ? e.bind(this) : e) : t;
  };
  function $d(e) {
    let t = Er + 1, r = Dt.length;
    for (; t < r; ) {
      const i = t + r >>> 1, a = Dt[i], c = Xn(a);
      c < e || c === e && a.flags & 2 ? t = i + 1 : r = i;
    }
    return t;
  }
  function il(e) {
    if (!(e.flags & 1)) {
      const t = Xn(e), r = Dt[Dt.length - 1];
      !r || !(e.flags & 2) && t >= Xn(r) ? Dt.push(e) : Dt.splice($d(t), 0, e), e.flags |= 1, Hu();
    }
  }
  function Hu() {
    Bs || (Bs = qu.then(Yu));
  }
  function Zu(e) {
    ve(e) ? en.push(...e) : oi && e.id === -1 ? oi.splice(Zi + 1, 0, e) : e.flags & 1 || (en.push(e), e.flags |= 1), Hu();
  }
  function Rl(e, t, r = Er + 1) {
    for (; r < Dt.length; r++) {
      const i = Dt[r];
      if (i && i.flags & 2) {
        if (e && i.id !== e.uid) continue;
        Dt.splice(r, 1), r--, i.flags & 4 && (i.flags &= -2), i(), i.flags & 4 || (i.flags &= -2);
      }
    }
  }
  function Ju(e) {
    if (en.length) {
      const t = [
        ...new Set(en)
      ].sort((r, i) => Xn(r) - Xn(i));
      if (en.length = 0, oi) {
        oi.push(...t);
        return;
      }
      for (oi = t, Zi = 0; Zi < oi.length; Zi++) {
        const r = oi[Zi];
        r.flags & 4 && (r.flags &= -2), r.flags & 8 || r(), r.flags &= -2;
      }
      oi = null, Zi = 0;
    }
  }
  const Xn = (e) => e.id == null ? e.flags & 2 ? -1 : 1 / 0 : e.id;
  function Yu(e) {
    try {
      for (Er = 0; Er < Dt.length; Er++) {
        const t = Dt[Er];
        t && !(t.flags & 8) && (t.flags & 4 && (t.flags &= -2), os(t, t.i, t.i ? 15 : 14), t.flags & 4 || (t.flags &= -2));
      }
    } finally {
      for (; Er < Dt.length; Er++) {
        const t = Dt[Er];
        t && (t.flags &= -2);
      }
      Er = -1, Dt.length = 0, Ju(), Bs = null, (Dt.length || en.length) && Yu();
    }
  }
  let It = null, Xu = null;
  function Ws(e) {
    const t = It;
    return It = e, Xu = e && e.type.__scopeId || null, t;
  }
  Bd = function(e, t = It, r) {
    if (!t || e._n) return e;
    const i = (...a) => {
      i._d && Js(-1);
      const c = Ws(t);
      let f;
      try {
        f = e(...a);
      } finally {
        Ws(c), i._d && Js(1);
      }
      return f;
    };
    return i._n = true, i._c = true, i._d = true, i;
  };
  Tv = function(e, t) {
    if (It === null) return e;
    const r = Ao(It), i = e.dirs || (e.dirs = []);
    for (let a = 0; a < t.length; a++) {
      let [c, f, h, p = je] = t[a];
      c && (Te(c) && (c = {
        mounted: c,
        updated: c
      }), c.deep && Gr(f), i.push({
        dir: c,
        instance: r,
        value: f,
        oldValue: void 0,
        arg: h,
        modifiers: p
      }));
    }
    return e;
  };
  function _i(e, t, r, i) {
    const a = e.dirs, c = t && t.dirs;
    for (let f = 0; f < a.length; f++) {
      const h = a[f];
      c && (h.oldValue = c[f].value);
      let p = h.dir[i];
      p && (Vr(), mr(p, r, 8, [
        e.el,
        h,
        e,
        t
      ]), qr());
    }
  }
  Wd = function(e, t) {
    if (Rt) {
      let r = Rt.provides;
      const i = Rt.parent && Rt.parent.provides;
      i === r && (r = Rt.provides = Object.create(i)), r[e] = t;
    }
  };
  zn = function(e, t, r = false) {
    const i = pi();
    if (i || Li) {
      let a = Li ? Li._context.provides : i ? i.parent == null || i.ce ? i.vnode.appContext && i.vnode.appContext.provides : i.parent.provides : void 0;
      if (a && e in a) return a[e];
      if (arguments.length > 1) return r && Te(t) ? t.call(i && i.proxy) : t;
    }
  };
  Vd = function() {
    return !!(pi() || Li);
  };
  const qd = /* @__PURE__ */ Symbol.for("v-scx"), Kd = () => zn(qd);
  Mv = function(e, t) {
    return So(e, null, t);
  };
  function Hd(e, t) {
    return So(e, null, {
      flush: "sync"
    });
  }
  tn = function(e, t, r) {
    return So(e, t, r);
  };
  function So(e, t, r = je) {
    const { immediate: i, deep: a, flush: c, once: f } = r, h = dt({}, r), p = t && i || !t && c !== "post";
    let v;
    if (ts) {
      if (c === "sync") {
        const A = Kd();
        v = A.__watcherHandles || (A.__watcherHandles = []);
      } else if (!p) {
        const A = () => {
        };
        return A.stop = fr, A.resume = fr, A.pause = fr, A;
      }
    }
    const g = Rt;
    h.call = (A, j, x) => mr(A, g, j, x);
    let I = false;
    c === "post" ? h.scheduler = (A) => {
      mt(A, g && g.suspense);
    } : c !== "sync" && (I = true, h.scheduler = (A, j) => {
      j ? A() : il(A);
    }), h.augmentJob = (A) => {
      t && (A.flags |= 4), I && (A.flags |= 2, g && (A.id = g.uid, A.i = g));
    };
    const R = zd(e, t, h);
    return ts && (v ? v.push(R) : p && R()), R;
  }
  function Zd(e, t, r) {
    const i = this.proxy, a = at(e) ? e.includes(".") ? Qu(i, e) : () => i[e] : e.bind(i, i);
    let c;
    Te(t) ? c = t : (c = t.handler, r = t);
    const f = ls(this), h = So(a, c.bind(i), r);
    return f(), h;
  }
  function Qu(e, t) {
    const r = t.split(".");
    return () => {
      let i = e;
      for (let a = 0; a < r.length && i; a++) i = i[r[a]];
      return i;
    };
  }
  const ef = /* @__PURE__ */ Symbol("_vte"), tf = (e) => e.__isTeleport, Gn = (e) => e && (e.disabled || e.disabled === ""), Cl = (e) => e && (e.defer || e.defer === ""), Ol = (e) => typeof SVGElement < "u" && e instanceof SVGElement, xl = (e) => typeof MathMLElement == "function" && e instanceof MathMLElement, wa = (e, t) => {
    const r = e && e.to;
    return at(r) ? t ? t(r) : null : r;
  }, rf = {
    name: "Teleport",
    __isTeleport: true,
    process(e, t, r, i, a, c, f, h, p, v) {
      const { mc: g, pc: I, pbc: R, o: { insert: A, querySelector: j, createText: x, createComment: pe } } = v, se = Gn(t.props);
      let { shapeFlag: U, children: Y, dynamicChildren: $ } = t;
      if (e == null) {
        const ue = t.el = x(""), ge = t.anchor = x("");
        A(ue, r, i), A(ge, r, i);
        const ie = (Q, me) => {
          U & 16 && g(Y, Q, me, a, c, f, h, p);
        }, fe = () => {
          const Q = t.target = wa(t.props, j), me = ya(Q, t, x, A);
          Q && (f !== "svg" && Ol(Q) ? f = "svg" : f !== "mathml" && xl(Q) && (f = "mathml"), a && a.isCE && (a.ce._teleportTargets || (a.ce._teleportTargets = /* @__PURE__ */ new Set())).add(Q), se || (ie(Q, me), Rs(t, false)));
        };
        se && (ie(r, ge), Rs(t, true)), Cl(t.props) ? (t.el.__isMounted = false, mt(() => {
          fe(), delete t.el.__isMounted;
        }, c)) : fe();
      } else {
        if (Cl(t.props) && e.el.__isMounted === false) {
          mt(() => {
            rf.process(e, t, r, i, a, c, f, h, p, v);
          }, c);
          return;
        }
        t.el = e.el, t.targetStart = e.targetStart;
        const ue = t.anchor = e.anchor, ge = t.target = e.target, ie = t.targetAnchor = e.targetAnchor, fe = Gn(e.props), Q = fe ? r : ge, me = fe ? ue : ie;
        if (f === "svg" || Ol(ge) ? f = "svg" : (f === "mathml" || xl(ge)) && (f = "mathml"), $ ? (R(e.dynamicChildren, $, Q, a, c, f, h), ul(e, t, true)) : p || I(e, t, Q, me, a, c, f, h, false), se) fe ? t.props && e.props && t.props.to !== e.props.to && (t.props.to = e.props.to) : ys(t, r, ue, v, 1);
        else if ((t.props && t.props.to) !== (e.props && e.props.to)) {
          const ke = t.target = wa(t.props, j);
          ke && ys(t, ke, null, v, 0);
        } else fe && ys(t, ge, ie, v, 1);
        Rs(t, se);
      }
    },
    remove(e, t, r, { um: i, o: { remove: a } }, c) {
      const { shapeFlag: f, children: h, anchor: p, targetStart: v, targetAnchor: g, target: I, props: R } = e;
      if (I && (a(v), a(g)), c && a(p), f & 16) {
        const A = c || !Gn(R);
        for (let j = 0; j < h.length; j++) {
          const x = h[j];
          i(x, t, r, A, !!x.dynamicChildren);
        }
      }
    },
    move: ys,
    hydrate: Jd
  };
  function ys(e, t, r, { o: { insert: i }, m: a }, c = 2) {
    c === 0 && i(e.targetAnchor, t, r);
    const { el: f, anchor: h, shapeFlag: p, children: v, props: g } = e, I = c === 2;
    if (I && i(f, t, r), (!I || Gn(g)) && p & 16) for (let R = 0; R < v.length; R++) a(v[R], t, r, 2);
    I && i(h, t, r);
  }
  function Jd(e, t, r, i, a, c, { o: { nextSibling: f, parentNode: h, querySelector: p, insert: v, createText: g } }, I) {
    function R(pe, se) {
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
      se.anchor = I(f(pe), se, h(pe), r, i, a, c);
    }
    const j = t.target = wa(t.props, p), x = Gn(t.props);
    if (j) {
      const pe = j._lpa || j.firstChild;
      t.shapeFlag & 16 && (x ? (A(e, t), R(j, pe), t.targetAnchor || ya(j, t, g, v, h(e) === j ? e : null)) : (t.anchor = f(e), R(j, pe), t.targetAnchor || ya(j, t, g, v), I(pe && f(pe), t, j, r, i, a, c))), Rs(t, x);
    } else x && t.shapeFlag & 16 && (A(e, t), t.targetStart = e, t.targetAnchor = f(e));
    return t.anchor && f(t.anchor);
  }
  Pv = rf;
  function Rs(e, t) {
    const r = e.ctx;
    if (r && r.ut) {
      let i, a;
      for (t ? (i = e.el, a = e.anchor) : (i = e.targetStart, a = e.targetAnchor); i && i !== a; ) i.nodeType === 1 && i.setAttribute("data-v-owner", r.uid), i = i.nextSibling;
      r.ut();
    }
  }
  function ya(e, t, r, i, a = null) {
    const c = t.targetStart = r(""), f = t.targetAnchor = r("");
    return c[ef] = f, e && (i(c, e, a), i(f, e, a)), f;
  }
  const Sr = /* @__PURE__ */ Symbol("_leaveCb"), Sn = /* @__PURE__ */ Symbol("_enterCb");
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
  const tr = [
    Function,
    Array
  ], sf = {
    mode: String,
    appear: Boolean,
    persisted: Boolean,
    onBeforeEnter: tr,
    onEnter: tr,
    onAfterEnter: tr,
    onEnterCancelled: tr,
    onBeforeLeave: tr,
    onLeave: tr,
    onAfterLeave: tr,
    onLeaveCancelled: tr,
    onBeforeAppear: tr,
    onAppear: tr,
    onAfterAppear: tr,
    onAppearCancelled: tr
  }, of = (e) => {
    const t = e.subTree;
    return t.component ? of(t.component) : t;
  }, Yd = {
    name: "BaseTransition",
    props: sf,
    setup(e, { slots: t }) {
      const r = pi(), i = nf();
      return () => {
        const a = t.default && nl(t.default(), true);
        if (!a || !a.length) return;
        const c = af(a), f = Le(e), { mode: h } = f;
        if (i.isLeaving) return qo(c);
        const p = Nl(c);
        if (!p) return qo(c);
        let v = Qn(p, f, i, r, (I) => v = I);
        p.type !== Et && hi(p, v);
        let g = r.subTree && Nl(r.subTree);
        if (g && g.type !== Et && !ai(g, p) && of(r).type !== Et) {
          let I = Qn(g, f, i, r);
          if (hi(g, I), h === "out-in" && p.type !== Et) return i.isLeaving = true, I.afterLeave = () => {
            i.isLeaving = false, r.job.flags & 8 || r.update(), delete I.afterLeave, g = void 0;
          }, qo(c);
          h === "in-out" && p.type !== Et ? I.delayLeave = (R, A, j) => {
            const x = lf(i, g);
            x[String(g.key)] = g, R[Sr] = () => {
              A(), R[Sr] = void 0, delete v.delayedLeave, g = void 0;
            }, v.delayedLeave = () => {
              j(), delete v.delayedLeave, g = void 0;
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
      for (const r of e) if (r.type !== Et) {
        t = r;
        break;
      }
    }
    return t;
  }
  const Xd = Yd;
  function lf(e, t) {
    const { leavingVNodes: r } = e;
    let i = r.get(t.type);
    return i || (i = /* @__PURE__ */ Object.create(null), r.set(t.type, i)), i;
  }
  function Qn(e, t, r, i, a) {
    const { appear: c, mode: f, persisted: h = false, onBeforeEnter: p, onEnter: v, onAfterEnter: g, onEnterCancelled: I, onBeforeLeave: R, onLeave: A, onAfterLeave: j, onLeaveCancelled: x, onBeforeAppear: pe, onAppear: se, onAfterAppear: U, onAppearCancelled: Y } = t, $ = String(e.key), ue = lf(r, e), ge = (Q, me) => {
      Q && mr(Q, i, 9, me);
    }, ie = (Q, me) => {
      const ke = me[1];
      ge(Q, me), ve(Q) ? Q.every((he) => he.length <= 1) && ke() : Q.length <= 1 && ke();
    }, fe = {
      mode: f,
      persisted: h,
      beforeEnter(Q) {
        let me = p;
        if (!r.isMounted) if (c) me = pe || p;
        else return;
        Q[Sr] && Q[Sr](true);
        const ke = ue[$];
        ke && ai(e, ke) && ke.el[Sr] && ke.el[Sr](), ge(me, [
          Q
        ]);
      },
      enter(Q) {
        let me = v, ke = g, he = I;
        if (!r.isMounted) if (c) me = se || v, ke = U || g, he = Y || I;
        else return;
        let $e = false;
        Q[Sn] = ($t) => {
          $e || ($e = true, $t ? ge(he, [
            Q
          ]) : ge(ke, [
            Q
          ]), fe.delayedLeave && fe.delayedLeave(), Q[Sn] = void 0);
        };
        const pt = Q[Sn].bind(null, false);
        me ? ie(me, [
          Q,
          pt
        ]) : pt();
      },
      leave(Q, me) {
        const ke = String(e.key);
        if (Q[Sn] && Q[Sn](true), r.isUnmounting) return me();
        ge(R, [
          Q
        ]);
        let he = false;
        Q[Sr] = (pt) => {
          he || (he = true, me(), pt ? ge(x, [
            Q
          ]) : ge(j, [
            Q
          ]), Q[Sr] = void 0, ue[ke] === e && delete ue[ke]);
        };
        const $e = Q[Sr].bind(null, false);
        ue[ke] = e, A ? ie(A, [
          Q,
          $e
        ]) : $e();
      },
      clone(Q) {
        const me = Qn(Q, t, r, i, a);
        return a && a(me), me;
      }
    };
    return fe;
  }
  function qo(e) {
    if (To(e)) return e = Hr(e), e.children = null, e;
  }
  function Nl(e) {
    if (!To(e)) return tf(e.type) && e.children ? af(e.children) : e;
    if (e.component) return e.component.subTree;
    const { shapeFlag: t, children: r } = e;
    if (r) {
      if (t & 16) return r[0];
      if (t & 32 && Te(r.default)) return r.default();
    }
  }
  function hi(e, t) {
    e.shapeFlag & 6 && e.component ? (e.transition = t, hi(e.component.subTree, t)) : e.shapeFlag & 128 ? (e.ssContent.transition = t.clone(e.ssContent), e.ssFallback.transition = t.clone(e.ssFallback)) : e.transition = t;
  }
  function nl(e, t = false, r) {
    let i = [], a = 0;
    for (let c = 0; c < e.length; c++) {
      let f = e[c];
      const h = r == null ? f.key : String(r) + String(f.key != null ? f.key : c);
      f.type === At ? (f.patchFlag & 128 && a++, i = i.concat(nl(f.children, t, h))) : (t || f.type !== Et) && i.push(h != null ? Hr(f, {
        key: h
      }) : f);
    }
    if (a > 1) for (let c = 0; c < i.length; c++) i[c].patchFlag = -2;
    return i;
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
  kv = function(e) {
    const t = pi(), r = Ad(null);
    if (t) {
      const a = t.refs === je ? t.refs = {} : t.refs;
      Object.defineProperty(a, e, {
        enumerable: true,
        get: () => r.value,
        set: (c) => r.value = c
      });
    }
    return r;
  };
  function Ll(e, t) {
    let r;
    return !!((r = Object.getOwnPropertyDescriptor(e, t)) && !r.configurable);
  }
  const Vs = /* @__PURE__ */ new WeakMap();
  function $n(e, t, r, i, a = false) {
    if (ve(e)) {
      e.forEach((x, pe) => $n(x, t && (ve(t) ? t[pe] : t), r, i, a));
      return;
    }
    if (ui(i) && !a) {
      i.shapeFlag & 512 && i.type.__asyncResolved && i.component.subTree.component && $n(e, t, r, i.component.subTree);
      return;
    }
    const c = i.shapeFlag & 4 ? Ao(i.component) : i.el, f = a ? null : c, { i: h, r: p } = e, v = t && t.r, g = h.refs === je ? h.refs = {} : h.refs, I = h.setupState, R = Le(I), A = I === je ? wu : (x) => Ll(g, x) ? false : We(R, x), j = (x, pe) => !(pe && Ll(g, pe));
    if (v != null && v !== p) {
      if (Dl(t), at(v)) g[v] = null, A(v) && (I[v] = null);
      else if (lt(v)) {
        const x = t;
        j(v, x.k) && (v.value = null), x.k && (g[x.k] = null);
      }
    }
    if (Te(p)) os(p, h, 12, [
      f,
      g
    ]);
    else {
      const x = at(p), pe = lt(p);
      if (x || pe) {
        const se = () => {
          if (e.f) {
            const U = x ? A(p) ? I[p] : g[p] : j() || !e.k ? p.value : g[e.k];
            if (a) ve(U) && Ha(U, c);
            else if (ve(U)) U.includes(c) || U.push(c);
            else if (x) g[p] = [
              c
            ], A(p) && (I[p] = g[p]);
            else {
              const Y = [
                c
              ];
              j(p, e.k) && (p.value = Y), e.k && (g[e.k] = Y);
            }
          } else x ? (g[p] = f, A(p) && (I[p] = f)) : pe && (j(p, e.k) && (p.value = f), e.k && (g[e.k] = f));
        };
        if (f) {
          const U = () => {
            se(), Vs.delete(e);
          };
          U.id = -1, Vs.set(e, U), mt(U, r);
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
  let ui, To, ep;
  ui = (e) => !!e.type.__asyncLoader;
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
      const r = pi(), i = r.ctx;
      if (!i.renderer) return () => {
        const U = t.default && t.default();
        return U && U.length === 1 ? U[0] : U;
      };
      const a = /* @__PURE__ */ new Map(), c = /* @__PURE__ */ new Set();
      let f = null;
      const h = r.suspense, { renderer: { p, m: v, um: g, o: { createElement: I } } } = i, R = I("div");
      i.activate = (U, Y, $, ue, ge) => {
        const ie = U.component;
        v(U, Y, $, 0, h), p(ie.vnode, U, Y, $, ie, h, ue, U.slotScopeIds, ge), mt(() => {
          ie.isDeactivated = false, ie.a && Fn(ie.a);
          const fe = U.props && U.props.onVnodeMounted;
          fe && ir(fe, ie.parent, U);
        }, h);
      }, i.deactivate = (U) => {
        const Y = U.component;
        Hs(Y.m), Hs(Y.a), v(U, R, null, 1, h), mt(() => {
          Y.da && Fn(Y.da);
          const $ = U.props && U.props.onVnodeUnmounted;
          $ && ir($, Y.parent, U), Y.isDeactivated = true;
        }, h);
      };
      function A(U) {
        Ko(U), g(U, r, h, true);
      }
      function j(U) {
        a.forEach((Y, $) => {
          const ue = Ta(ui(Y) ? Y.type.__asyncResolved || {} : Y.type);
          ue && !U(ue) && x($);
        });
      }
      function x(U) {
        const Y = a.get(U);
        Y && (!f || !ai(Y, f)) ? A(Y) : f && Ko(f), a.delete(U), c.delete(U);
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
        pe != null && (Zs(r.subTree.type) ? mt(() => {
          a.set(pe, bs(r.subTree));
        }, r.subTree.suspense) : a.set(pe, bs(r.subTree)));
      };
      return as(se), sl(se), ol(() => {
        a.forEach((U) => {
          const { subTree: Y, suspense: $ } = r, ue = bs(Y);
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
        const ue = $.type, ge = Ta(ui($) ? $.type.__asyncResolved || {} : ue), { include: ie, exclude: fe, max: Q } = e;
        if (ie && (!ge || !On(ie, ge)) || fe && ge && On(fe, ge)) return $.shapeFlag &= -257, f = $, Y;
        const me = $.key == null ? ue : $.key, ke = a.get(me);
        return $.el && ($ = Hr($), Y.shapeFlag & 128 && (Y.ssContent = $)), pe = me, ke ? ($.el = ke.el, $.component = ke.component, $.transition && hi($, $.transition), $.shapeFlag |= 512, c.delete(me), c.add(me)) : (c.add(me), Q && c.size > parseInt(Q, 10) && x(c.values().next().value)), $.shapeFlag |= 256, f = $, Zs(Y.type) ? Y : $;
      };
    }
  };
  Av = ep;
  function On(e, t) {
    return ve(e) ? e.some((r) => On(r, t)) : at(e) ? e.split(",").includes(t) : Hh(e) ? (e.lastIndex = 0, e.test(t)) : false;
  }
  tp = function(e, t) {
    uf(e, "a", t);
  };
  rp = function(e, t) {
    uf(e, "da", t);
  };
  function uf(e, t, r = Rt) {
    const i = e.__wdc || (e.__wdc = () => {
      let a = r;
      for (; a; ) {
        if (a.isDeactivated) return;
        a = a.parent;
      }
      return e();
    });
    if (Mo(t, i, r), r) {
      let a = r.parent;
      for (; a && a.parent; ) To(a.parent.vnode) && ip(i, t, r, a), a = a.parent;
    }
  }
  function ip(e, t, r, i) {
    const a = Mo(t, e, i, true);
    al(() => {
      Ha(i[t], a);
    }, r);
  }
  function Ko(e) {
    e.shapeFlag &= -257, e.shapeFlag &= -513;
  }
  function bs(e) {
    return e.shapeFlag & 128 ? e.ssContent : e;
  }
  function Mo(e, t, r = Rt, i = false) {
    if (r) {
      const a = r[e] || (r[e] = []), c = t.__weh || (t.__weh = (...f) => {
        Vr();
        const h = ls(r), p = mr(t, r, e, f);
        return h(), qr(), p;
      });
      return i ? a.unshift(c) : a.push(c), c;
    }
  }
  let Yr, ff, sl, sp, op, ap;
  Yr = (e) => (t, r = Rt) => {
    (!ts || e === "sp") && Mo(e, (...i) => t(...i), r);
  };
  np = Yr("bm");
  as = Yr("m");
  ff = Yr("bu");
  sl = Yr("u");
  ol = Yr("bum");
  al = Yr("um");
  sp = Yr("sp");
  op = Yr("rtg");
  ap = Yr("rtc");
  function lp(e, t = Rt) {
    Mo("ec", e, t);
  }
  const cp = "components", hf = /* @__PURE__ */ Symbol.for("v-ndc");
  Rv = function(e) {
    return at(e) ? up(cp, e, false) || e : e || hf;
  };
  function up(e, t, r = true, i = false) {
    const a = It || Rt;
    if (a) {
      const c = a.type;
      {
        const h = Ta(c, false);
        if (h && (h === t || h === Yt(t) || h === mo(Yt(t)))) return c;
      }
      const f = Fl(a[e] || c[e], t) || Fl(a.appContext[e], t);
      return !f && i ? c : f;
    }
  }
  function Fl(e, t) {
    return e && (e[t] || e[Yt(t)] || e[mo(Yt(t))]);
  }
  fp = function(e, t, r, i) {
    let a;
    const c = r, f = ve(e);
    if (f || at(e)) {
      const h = f && Br(e);
      let p = false, v = false;
      h && (p = !Jt(e), v = Kr(e), e = vo(e)), a = new Array(e.length);
      for (let g = 0, I = e.length; g < I; g++) a[g] = t(p ? v ? sn(gr(e[g])) : gr(e[g]) : e[g], g, void 0, c);
    } else if (typeof e == "number") {
      a = new Array(e);
      for (let h = 0; h < e; h++) a[h] = t(h + 1, h, void 0, c);
    } else if (Ge(e)) if (e[Symbol.iterator]) a = Array.from(e, (h, p) => t(h, p, void 0, c));
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
  Cv = function(e, t) {
    for (let r = 0; r < t.length; r++) {
      const i = t[r];
      if (ve(i)) for (let a = 0; a < i.length; a++) e[i[a].name] = i[a].fn;
      else i && (e[i.name] = i.key ? (...a) => {
        const c = i.fn(...a);
        return c && (c.key = i.key), c;
      } : i.fn);
    }
    return e;
  };
  Ov = function(e, t, r = {}, i, a) {
    if (It.ce || It.parent && ui(It.parent) && It.parent.ce) {
      const v = Object.keys(r).length > 0;
      return t !== "default" && (r.name = t), nr(), Ia(At, null, [
        Ct("slot", r, i && i())
      ], v ? -2 : 64);
    }
    let c = e[t];
    c && c._c && (c._d = false), nr();
    const f = c && df(c(r)), h = r.key || f && f.key, p = Ia(At, {
      key: (h && !pr(h) ? h : `_${t}`) + (!f && i ? "_fb" : "")
    }, f || (i ? i() : []), f && e._ === 1 ? 64 : -2);
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
      il(e.update);
    }),
    $nextTick: (e) => e.n || (e.n = Ku.bind(e.proxy)),
    $watch: (e) => Zd.bind(e)
  }), Ho = (e, t) => e !== je && !e.__isScriptSetup && We(e, t), hp = {
    get({ _: e }, t) {
      if (t === "__v_skip") return true;
      const { ctx: r, setupState: i, data: a, props: c, accessCache: f, type: h, appContext: p } = e;
      if (t[0] !== "$") {
        const R = f[t];
        if (R !== void 0) switch (R) {
          case 1:
            return i[t];
          case 2:
            return a[t];
          case 4:
            return r[t];
          case 3:
            return c[t];
        }
        else {
          if (Ho(i, t)) return f[t] = 1, i[t];
          if (a !== je && We(a, t)) return f[t] = 2, a[t];
          if (We(c, t)) return f[t] = 3, c[t];
          if (r !== je && We(r, t)) return f[t] = 4, r[t];
          va && (f[t] = 0);
        }
      }
      const v = Bn[t];
      let g, I;
      if (v) return t === "$attrs" && kt(e.attrs, "get", ""), v(e);
      if ((g = h.__cssModules) && (g = g[t])) return g;
      if (r !== je && We(r, t)) return f[t] = 4, r[t];
      if (I = p.config.globalProperties, We(I, t)) return I[t];
    },
    set({ _: e }, t, r) {
      const { data: i, setupState: a, ctx: c } = e;
      return Ho(a, t) ? (a[t] = r, true) : i !== je && We(i, t) ? (i[t] = r, true) : We(e.props, t) || t[0] === "$" && t.slice(1) in e ? false : (c[t] = r, true);
    },
    has({ _: { data: e, setupState: t, accessCache: r, ctx: i, appContext: a, props: c, type: f } }, h) {
      let p;
      return !!(r[h] || e !== je && h[0] !== "$" && We(e, h) || Ho(t, h) || We(c, h) || We(i, h) || We(Bn, h) || We(a.config.globalProperties, h) || (p = f.__cssModules) && p[h]);
    },
    defineProperty(e, t, r) {
      return r.get != null ? e._.accessCache[t] = 0 : We(r, "value") && this.set(e, t, r.value, null), Reflect.defineProperty(e, t, r);
    }
  };
  function qs(e) {
    return ve(e) ? e.reduce((t, r) => (t[r] = null, t), {}) : e;
  }
  xv = function(e, t) {
    return !e || !t ? e || t : ve(e) && ve(t) ? e.concat(t) : dt({}, qs(e), qs(t));
  };
  let va = true;
  function dp(e) {
    const t = gf(e), r = e.proxy, i = e.ctx;
    va = false, t.beforeCreate && jl(t.beforeCreate, e, "bc");
    const { data: a, computed: c, methods: f, watch: h, provide: p, inject: v, created: g, beforeMount: I, mounted: R, beforeUpdate: A, updated: j, activated: x, deactivated: pe, beforeDestroy: se, beforeUnmount: U, destroyed: Y, unmounted: $, render: ue, renderTracked: ge, renderTriggered: ie, errorCaptured: fe, serverPrefetch: Q, expose: me, inheritAttrs: ke, components: he, directives: $e, filters: pt } = t;
    if (v && pp(v, i, null), f) for (const Re in f) {
      const Ke = f[Re];
      Te(Ke) && (i[Re] = Ke.bind(r));
    }
    if (a) {
      const Re = a.call(r, r);
      Ge(Re) && (e.data = _o(Re));
    }
    if (va = true, c) for (const Re in c) {
      const Ke = c[Re], Ar = Te(Ke) ? Ke.bind(r, r) : Te(Ke.get) ? Ke.get.bind(r, r) : fr, Ui = !Te(Ke) && Te(Ke.set) ? Ke.set.bind(r) : fr, Rr = hl({
        get: Ar,
        set: Ui
      });
      Object.defineProperty(i, Re, {
        enumerable: true,
        configurable: true,
        get: () => Rr.value,
        set: (_e) => Rr.value = _e
      });
    }
    if (h) for (const Re in h) pf(h[Re], i, r, Re);
    if (p) {
      const Re = Te(p) ? p.call(r) : p;
      Reflect.ownKeys(Re).forEach((Ke) => {
        Wd(Ke, Re[Ke]);
      });
    }
    g && jl(g, e, "c");
    function Ye(Re, Ke) {
      ve(Ke) ? Ke.forEach((Ar) => Re(Ar.bind(r))) : Ke && Re(Ke.bind(r));
    }
    if (Ye(np, I), Ye(as, R), Ye(ff, A), Ye(sl, j), Ye(tp, x), Ye(rp, pe), Ye(lp, fe), Ye(ap, ge), Ye(op, ie), Ye(ol, U), Ye(al, $), Ye(sp, Q), ve(me)) if (me.length) {
      const Re = e.exposed || (e.exposed = {});
      me.forEach((Ke) => {
        Object.defineProperty(Re, Ke, {
          get: () => r[Ke],
          set: (Ar) => r[Ke] = Ar,
          enumerable: true
        });
      });
    } else e.exposed || (e.exposed = {});
    ue && e.render === fr && (e.render = ue), ke != null && (e.inheritAttrs = ke), he && (e.components = he), $e && (e.directives = $e), Q && cf(e);
  }
  function pp(e, t, r = fr) {
    ve(e) && (e = _a(e));
    for (const i in e) {
      const a = e[i];
      let c;
      Ge(a) ? "default" in a ? c = zn(a.from || i, a.default, true) : c = zn(a.from || i) : c = zn(a), lt(c) ? Object.defineProperty(t, i, {
        enumerable: true,
        configurable: true,
        get: () => c.value,
        set: (f) => c.value = f
      }) : t[i] = c;
    }
  }
  function jl(e, t, r) {
    mr(ve(e) ? e.map((i) => i.bind(t.proxy)) : e.bind(t.proxy), t, r);
  }
  function pf(e, t, r, i) {
    let a = i.includes(".") ? Qu(r, i) : () => r[i];
    if (at(e)) {
      const c = t[e];
      Te(c) && tn(a, c);
    } else if (Te(e)) tn(a, e.bind(r));
    else if (Ge(e)) if (ve(e)) e.forEach((c) => pf(c, t, r, i));
    else {
      const c = Te(e.handler) ? e.handler.bind(r) : t[e.handler];
      Te(c) && tn(a, c, e);
    }
  }
  function gf(e) {
    const t = e.type, { mixins: r, extends: i } = t, { mixins: a, optionsCache: c, config: { optionMergeStrategies: f } } = e.appContext, h = c.get(t);
    let p;
    return h ? p = h : !a.length && !r && !i ? p = t : (p = {}, a.length && a.forEach((v) => Ks(p, v, f, true)), Ks(p, t, f)), Ge(t) && c.set(t, p), p;
  }
  function Ks(e, t, r, i = false) {
    const { mixins: a, extends: c } = t;
    c && Ks(e, c, r, true), a && a.forEach((f) => Ks(e, f, r, true));
    for (const f in t) if (!(i && f === "expose")) {
      const h = gp[f] || r && r[f];
      e[f] = h ? h(e[f], t[f]) : t[f];
    }
    return e;
  }
  const gp = {
    data: Ul,
    props: zl,
    emits: zl,
    methods: xn,
    computed: xn,
    beforeCreate: Nt,
    created: Nt,
    beforeMount: Nt,
    mounted: Nt,
    beforeUpdate: Nt,
    updated: Nt,
    beforeDestroy: Nt,
    beforeUnmount: Nt,
    destroyed: Nt,
    unmounted: Nt,
    activated: Nt,
    deactivated: Nt,
    errorCaptured: Nt,
    serverPrefetch: Nt,
    components: xn,
    directives: xn,
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
    return xn(_a(e), _a(t));
  }
  function _a(e) {
    if (ve(e)) {
      const t = {};
      for (let r = 0; r < e.length; r++) t[e[r]] = e[r];
      return t;
    }
    return e;
  }
  function Nt(e, t) {
    return e ? [
      ...new Set([].concat(e, t))
    ] : t;
  }
  function xn(e, t) {
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
    const r = dt(/* @__PURE__ */ Object.create(null), e);
    for (const i in t) r[i] = Nt(e[i], t[i]);
    return r;
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
    return function(i, a = null) {
      Te(i) || (i = dt({}, i)), a != null && !Ge(a) && (a = null);
      const c = mf(), f = /* @__PURE__ */ new WeakSet(), h = [];
      let p = false;
      const v = c.app = {
        _uid: yp++,
        _component: i,
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
        mount(g, I, R) {
          if (!p) {
            const A = v._ceVNode || Ct(i, a);
            return A.appContext = c, R === true ? R = "svg" : R === false && (R = void 0), e(A, g, R), p = true, v._container = g, g.__vue_app__ = v, Ao(A.component);
          }
        },
        onUnmount(g) {
          h.push(g);
        },
        unmount() {
          p && (mr(h, v._instance, 16), e(null, v._container), delete v._container.__vue_app__);
        },
        provide(g, I) {
          return c.provides[g] = I, v;
        },
        runWithContext(g) {
          const I = Li;
          Li = v;
          try {
            return g();
          } finally {
            Li = I;
          }
        }
      };
      return v;
    };
  }
  let Li = null;
  Nv = function(e, t, r = je) {
    const i = pi(), a = Yt(t), c = Jr(t), f = wf(e, a), h = xd((p, v) => {
      let g, I = je, R;
      return Hd(() => {
        const A = e[a];
        zt(g, A) && (g = A, v());
      }), {
        get() {
          return p(), r.get ? r.get(g) : g;
        },
        set(A) {
          const j = r.set ? r.set(A) : A;
          if (!zt(j, g) && !(I !== je && zt(A, I))) return;
          const x = i.vnode.props;
          x && (t in x || a in x || c in x) && (`onUpdate:${t}` in x || `onUpdate:${a}` in x || `onUpdate:${c}` in x) || (g = A, v()), i.emit(`update:${t}`, j), zt(A, j) && zt(A, I) && !zt(j, R) && v(), I = A, R = j;
        }
      };
    });
    return h[Symbol.iterator] = () => {
      let p = 0;
      return {
        next() {
          return p < 2 ? {
            value: p++ ? f || je : h,
            done: false
          } : {
            done: true
          };
        }
      };
    }, h;
  };
  const wf = (e, t) => t === "modelValue" || t === "model-value" ? e.modelModifiers : e[`${t}Modifiers`] || e[`${Yt(t)}Modifiers`] || e[`${Jr(t)}Modifiers`];
  function vp(e, t, ...r) {
    if (e.isUnmounted) return;
    const i = e.vnode.props || je;
    let a = r;
    const c = t.startsWith("update:"), f = c && wf(i, t.slice(7));
    f && (f.trim && (a = r.map((g) => at(g) ? g.trim() : g)), f.number && (a = r.map(Xh)));
    let h, p = i[h = Go(t)] || i[h = Go(Yt(t))];
    !p && c && (p = i[h = Go(Jr(t))]), p && mr(p, e, 6, a);
    const v = i[h + "Once"];
    if (v) {
      if (!e.emitted) e.emitted = {};
      else if (e.emitted[h]) return;
      e.emitted[h] = true, mr(v, e, 6, a);
    }
  }
  const _p = /* @__PURE__ */ new WeakMap();
  function yf(e, t, r = false) {
    const i = r ? _p : t.emitsCache, a = i.get(e);
    if (a !== void 0) return a;
    const c = e.emits;
    let f = {}, h = false;
    if (!Te(e)) {
      const p = (v) => {
        const g = yf(v, t, true);
        g && (h = true, dt(f, g));
      };
      !r && t.mixins.length && t.mixins.forEach(p), e.extends && p(e.extends), e.mixins && e.mixins.forEach(p);
    }
    return !c && !h ? (Ge(e) && i.set(e, null), null) : (ve(c) ? c.forEach((p) => f[p] = null) : dt(f, c), Ge(e) && i.set(e, f), f);
  }
  function Po(e, t) {
    return !e || !ho(t) ? false : (t = t.slice(2).replace(/Once$/, ""), We(e, t[0].toLowerCase() + t.slice(1)) || We(e, Jr(t)) || We(e, t));
  }
  function Gl(e) {
    const { type: t, vnode: r, proxy: i, withProxy: a, propsOptions: [c], slots: f, attrs: h, emit: p, render: v, renderCache: g, props: I, data: R, setupState: A, ctx: j, inheritAttrs: x } = e, pe = Ws(e);
    let se, U;
    try {
      if (r.shapeFlag & 4) {
        const $ = a || i, ue = $;
        se = Tr(v.call(ue, $, g, I, A, R, j)), U = h;
      } else {
        const $ = t;
        se = Tr($.length > 1 ? $(I, {
          attrs: h,
          slots: f,
          emit: p
        }) : $(I, null)), U = t.props ? h : Ep(h);
      }
    } catch ($) {
      Vn.length = 0, Io($, e, 1), se = Ct(Et);
    }
    let Y = se;
    if (U && x !== false) {
      const $ = Object.keys(U), { shapeFlag: ue } = Y;
      $.length && ue & 7 && (c && $.some(Ka) && (U = Ip(U, c)), Y = Hr(Y, U, false, true));
    }
    return r.dirs && (Y = Hr(Y, null, false, true), Y.dirs = Y.dirs ? Y.dirs.concat(r.dirs) : r.dirs), r.transition && hi(Y, r.transition), se = Y, Ws(pe), se;
  }
  const Ep = (e) => {
    let t;
    for (const r in e) (r === "class" || r === "style" || ho(r)) && ((t || (t = {}))[r] = e[r]);
    return t;
  }, Ip = (e, t) => {
    const r = {};
    for (const i in e) (!Ka(i) || !(i.slice(9) in t)) && (r[i] = e[i]);
    return r;
  };
  function Sp(e, t, r) {
    const { props: i, children: a, component: c } = e, { props: f, children: h, patchFlag: p } = t, v = c.emitsOptions;
    if (t.dirs || t.transition) return true;
    if (r && p >= 0) {
      if (p & 1024) return true;
      if (p & 16) return i ? $l(i, f, v) : !!f;
      if (p & 8) {
        const g = t.dynamicProps;
        for (let I = 0; I < g.length; I++) {
          const R = g[I];
          if (bf(f, i, R) && !Po(v, R)) return true;
        }
      }
    } else return (a || h) && (!h || !h.$stable) ? true : i === f ? false : i ? f ? $l(i, f, v) : true : !!f;
    return false;
  }
  function $l(e, t, r) {
    const i = Object.keys(t);
    if (i.length !== Object.keys(e).length) return true;
    for (let a = 0; a < i.length; a++) {
      const c = i[a];
      if (bf(t, e, c) && !Po(r, c)) return true;
    }
    return false;
  }
  function bf(e, t, r) {
    const i = e[r], a = t[r];
    return r === "style" && Ge(i) && Ge(a) ? !Ja(i, a) : i !== a;
  }
  function Tp({ vnode: e, parent: t }, r) {
    for (; t; ) {
      const i = t.subTree;
      if (i.suspense && i.suspense.activeBranch === e && (i.el = e.el), i === e) (e = t.vnode).el = r, t = t.parent;
      else break;
    }
  }
  const vf = {}, _f = () => Object.create(vf), Ef = (e) => Object.getPrototypeOf(e) === vf;
  function Mp(e, t, r, i = false) {
    const a = {}, c = _f();
    e.propsDefaults = /* @__PURE__ */ Object.create(null), If(e, t, a, c);
    for (const f in e.propsOptions[0]) f in a || (a[f] = void 0);
    r ? e.props = i ? a : kd(a) : e.type.props ? e.props = a : e.props = c, e.attrs = c;
  }
  function Pp(e, t, r, i) {
    const { props: a, attrs: c, vnode: { patchFlag: f } } = e, h = Le(a), [p] = e.propsOptions;
    let v = false;
    if ((i || f > 0) && !(f & 16)) {
      if (f & 8) {
        const g = e.vnode.dynamicProps;
        for (let I = 0; I < g.length; I++) {
          let R = g[I];
          if (Po(e.emitsOptions, R)) continue;
          const A = t[R];
          if (p) if (We(c, R)) A !== c[R] && (c[R] = A, v = true);
          else {
            const j = Yt(R);
            a[j] = Ea(p, h, j, A, e, false);
          }
          else A !== c[R] && (c[R] = A, v = true);
        }
      }
    } else {
      If(e, t, a, c) && (v = true);
      let g;
      for (const I in h) (!t || !We(t, I) && ((g = Jr(I)) === I || !We(t, g))) && (p ? r && (r[I] !== void 0 || r[g] !== void 0) && (a[I] = Ea(p, h, I, void 0, e, true)) : delete a[I]);
      if (c !== h) for (const I in c) (!t || !We(t, I)) && (delete c[I], v = true);
    }
    v && zr(e.attrs, "set", "");
  }
  function If(e, t, r, i) {
    const [a, c] = e.propsOptions;
    let f = false, h;
    if (t) for (let p in t) {
      if (Dn(p)) continue;
      const v = t[p];
      let g;
      a && We(a, g = Yt(p)) ? !c || !c.includes(g) ? r[g] = v : (h || (h = {}))[g] = v : Po(e.emitsOptions, p) || (!(p in i) || v !== i[p]) && (i[p] = v, f = true);
    }
    if (c) {
      const p = Le(r), v = h || je;
      for (let g = 0; g < c.length; g++) {
        const I = c[g];
        r[I] = Ea(a, p, I, v[I], e, !We(v, I));
      }
    }
    return f;
  }
  function Ea(e, t, r, i, a, c) {
    const f = e[r];
    if (f != null) {
      const h = We(f, "default");
      if (h && i === void 0) {
        const p = f.default;
        if (f.type !== Function && !f.skipFactory && Te(p)) {
          const { propsDefaults: v } = a;
          if (r in v) i = v[r];
          else {
            const g = ls(a);
            i = v[r] = p.call(null, t), g();
          }
        } else i = p;
        a.ce && a.ce._setProp(r, i);
      }
      f[0] && (c && !h ? i = false : f[1] && (i === "" || i === Jr(r)) && (i = true));
    }
    return i;
  }
  const kp = /* @__PURE__ */ new WeakMap();
  function Sf(e, t, r = false) {
    const i = r ? kp : t.propsCache, a = i.get(e);
    if (a) return a;
    const c = e.props, f = {}, h = [];
    let p = false;
    if (!Te(e)) {
      const g = (I) => {
        p = true;
        const [R, A] = Sf(I, t, true);
        dt(f, R), A && h.push(...A);
      };
      !r && t.mixins.length && t.mixins.forEach(g), e.extends && g(e.extends), e.mixins && e.mixins.forEach(g);
    }
    if (!c && !p) return Ge(e) && i.set(e, Yi), Yi;
    if (ve(c)) for (let g = 0; g < c.length; g++) {
      const I = Yt(c[g]);
      Bl(I) && (f[I] = je);
    }
    else if (c) for (const g in c) {
      const I = Yt(g);
      if (Bl(I)) {
        const R = c[g], A = f[I] = ve(R) || Te(R) ? {
          type: R
        } : dt({}, R), j = A.type;
        let x = false, pe = true;
        if (ve(j)) for (let se = 0; se < j.length; ++se) {
          const U = j[se], Y = Te(U) && U.name;
          if (Y === "Boolean") {
            x = true;
            break;
          } else Y === "String" && (pe = false);
        }
        else x = Te(j) && j.name === "Boolean";
        A[0] = x, A[1] = pe, (x || We(A, "default")) && h.push(I);
      }
    }
    const v = [
      f,
      h
    ];
    return Ge(e) && i.set(e, v), v;
  }
  function Bl(e) {
    return e[0] !== "$" && !Dn(e);
  }
  const ll = (e) => e === "_" || e === "_ctx" || e === "$stable", cl = (e) => ve(e) ? e.map(Tr) : [
    Tr(e)
  ], Ap = (e, t, r) => {
    if (t._n) return t;
    const i = Bd((...a) => cl(t(...a)), r);
    return i._c = false, i;
  }, Tf = (e, t, r) => {
    const i = e._ctx;
    for (const a in e) {
      if (ll(a)) continue;
      const c = e[a];
      if (Te(c)) t[a] = Ap(a, c, i);
      else if (c != null) {
        const f = cl(c);
        t[a] = () => f;
      }
    }
  }, Mf = (e, t) => {
    const r = cl(t);
    e.slots.default = () => r;
  }, Pf = (e, t, r) => {
    for (const i in t) (r || !ll(i)) && (e[i] = t[i]);
  }, Rp = (e, t, r) => {
    const i = e.slots = _f();
    if (e.vnode.shapeFlag & 32) {
      const a = t._;
      a ? (Pf(i, t, r), r && Eu(i, "_", a, true)) : Tf(t, i);
    } else t && Mf(e, t);
  }, Cp = (e, t, r) => {
    const { vnode: i, slots: a } = e;
    let c = true, f = je;
    if (i.shapeFlag & 32) {
      const h = t._;
      h ? r && h === 1 ? c = false : Pf(a, t, r) : (c = !t.$stable, Tf(t, a)), f = t;
    } else t && (Mf(e, t), f = {
      default: 1
    });
    if (c) for (const h in a) !ll(h) && f[h] == null && delete a[h];
  }, mt = Dp;
  function Op(e) {
    return xp(e);
  }
  function xp(e, t) {
    const r = wo();
    r.__VUE__ = true;
    const { insert: i, remove: a, patchProp: c, createElement: f, createText: h, createComment: p, setText: v, setElementText: g, parentNode: I, nextSibling: R, setScopeId: A = fr, insertStaticContent: j } = e, x = (E, M, N, H = null, K = null, Z = null, oe = void 0, X = null, re = !!M.dynamicChildren) => {
      if (E === M) return;
      E && !ai(E, M) && (H = Cr(E), _e(E, K, Z, true), E = null), M.patchFlag === -2 && (re = false, M.dynamicChildren = null);
      const { type: q, ref: we, shapeFlag: ae } = M;
      switch (q) {
        case ko:
          pe(E, M, N, H);
          break;
        case Et:
          se(E, M, N, H);
          break;
        case Wn:
          E == null && U(M, N, H, oe);
          break;
        case At:
          he(E, M, N, H, K, Z, oe, X, re);
          break;
        default:
          ae & 1 ? ue(E, M, N, H, K, Z, oe, X, re) : ae & 6 ? $e(E, M, N, H, K, Z, oe, X, re) : (ae & 64 || ae & 128) && q.process(E, M, N, H, K, Z, oe, X, re, bi);
      }
      we != null && K ? $n(we, E && E.ref, Z, M || E, !M) : we == null && E && E.ref != null && $n(E.ref, null, Z, E, true);
    }, pe = (E, M, N, H) => {
      if (E == null) i(M.el = h(M.children), N, H);
      else {
        const K = M.el = E.el;
        M.children !== E.children && v(K, M.children);
      }
    }, se = (E, M, N, H) => {
      E == null ? i(M.el = p(M.children || ""), N, H) : M.el = E.el;
    }, U = (E, M, N, H) => {
      [E.el, E.anchor] = j(E.children, M, N, H, E.el, E.anchor);
    }, Y = ({ el: E, anchor: M }, N, H) => {
      let K;
      for (; E && E !== M; ) K = R(E), i(E, N, H), E = K;
      i(M, N, H);
    }, $ = ({ el: E, anchor: M }) => {
      let N;
      for (; E && E !== M; ) N = R(E), a(E), E = N;
      a(M);
    }, ue = (E, M, N, H, K, Z, oe, X, re) => {
      if (M.type === "svg" ? oe = "svg" : M.type === "math" && (oe = "mathml"), E == null) ge(M, N, H, K, Z, oe, X, re);
      else {
        const q = E.el && E.el._isVueCE ? E.el : null;
        try {
          q && q._beginPatch(), Q(E, M, K, Z, oe, X, re);
        } finally {
          q && q._endPatch();
        }
      }
    }, ge = (E, M, N, H, K, Z, oe, X) => {
      let re, q;
      const { props: we, shapeFlag: ae, transition: ye, dirs: Ie } = E;
      if (re = E.el = f(E.type, Z, we && we.is, we), ae & 8 ? g(re, E.children) : ae & 16 && fe(E.children, re, null, H, K, Zo(E, Z), oe, X), Ie && _i(E, null, H, "created"), ie(re, E, E.scopeId, oe, H), we) {
        for (const Ue in we) Ue !== "value" && !Dn(Ue) && c(re, Ue, null, we[Ue], Z, H);
        "value" in we && c(re, "value", null, we.value, Z), (q = we.onVnodeBeforeMount) && ir(q, H, E);
      }
      Ie && _i(E, null, H, "beforeMount");
      const xe = Np(K, ye);
      xe && ye.beforeEnter(re), i(re, M, N), ((q = we && we.onVnodeMounted) || xe || Ie) && mt(() => {
        q && ir(q, H, E), xe && ye.enter(re), Ie && _i(E, null, H, "mounted");
      }, K);
    }, ie = (E, M, N, H, K) => {
      if (N && A(E, N), H) for (let Z = 0; Z < H.length; Z++) A(E, H[Z]);
      if (K) {
        let Z = K.subTree;
        if (M === Z || Zs(Z.type) && (Z.ssContent === M || Z.ssFallback === M)) {
          const oe = K.vnode;
          ie(E, oe, oe.scopeId, oe.slotScopeIds, K.parent);
        }
      }
    }, fe = (E, M, N, H, K, Z, oe, X, re = 0) => {
      for (let q = re; q < E.length; q++) {
        const we = E[q] = X ? jr(E[q]) : Tr(E[q]);
        x(null, we, M, N, H, K, Z, oe, X);
      }
    }, Q = (E, M, N, H, K, Z, oe) => {
      const X = M.el = E.el;
      let { patchFlag: re, dynamicChildren: q, dirs: we } = M;
      re |= E.patchFlag & 16;
      const ae = E.props || je, ye = M.props || je;
      let Ie;
      if (N && Ei(N, false), (Ie = ye.onVnodeBeforeUpdate) && ir(Ie, N, M, E), we && _i(M, E, N, "beforeUpdate"), N && Ei(N, true), (ae.innerHTML && ye.innerHTML == null || ae.textContent && ye.textContent == null) && g(X, ""), q ? me(E.dynamicChildren, q, X, N, H, Zo(M, K), Z) : oe || Ke(E, M, X, null, N, H, Zo(M, K), Z, false), re > 0) {
        if (re & 16) ke(X, ae, ye, N, K);
        else if (re & 2 && ae.class !== ye.class && c(X, "class", null, ye.class, K), re & 4 && c(X, "style", ae.style, ye.style, K), re & 8) {
          const xe = M.dynamicProps;
          for (let Ue = 0; Ue < xe.length; Ue++) {
            const ze = xe[Ue], St = ae[ze], Tt = ye[ze];
            (Tt !== St || ze === "value") && c(X, ze, St, Tt, K, N);
          }
        }
        re & 1 && E.children !== M.children && g(X, M.children);
      } else !oe && q == null && ke(X, ae, ye, N, K);
      ((Ie = ye.onVnodeUpdated) || we) && mt(() => {
        Ie && ir(Ie, N, M, E), we && _i(M, E, N, "updated");
      }, H);
    }, me = (E, M, N, H, K, Z, oe) => {
      for (let X = 0; X < M.length; X++) {
        const re = E[X], q = M[X], we = re.el && (re.type === At || !ai(re, q) || re.shapeFlag & 198) ? I(re.el) : N;
        x(re, q, we, null, H, K, Z, oe, true);
      }
    }, ke = (E, M, N, H, K) => {
      if (M !== N) {
        if (M !== je) for (const Z in M) !Dn(Z) && !(Z in N) && c(E, Z, M[Z], null, K, H);
        for (const Z in N) {
          if (Dn(Z)) continue;
          const oe = N[Z], X = M[Z];
          oe !== X && Z !== "value" && c(E, Z, X, oe, K, H);
        }
        "value" in N && c(E, "value", M.value, N.value, K);
      }
    }, he = (E, M, N, H, K, Z, oe, X, re) => {
      const q = M.el = E ? E.el : h(""), we = M.anchor = E ? E.anchor : h("");
      let { patchFlag: ae, dynamicChildren: ye, slotScopeIds: Ie } = M;
      Ie && (X = X ? X.concat(Ie) : Ie), E == null ? (i(q, N, H), i(we, N, H), fe(M.children || [], N, we, K, Z, oe, X, re)) : ae > 0 && ae & 64 && ye && E.dynamicChildren && E.dynamicChildren.length === ye.length ? (me(E.dynamicChildren, ye, N, K, Z, oe, X), (M.key != null || K && M === K.subTree) && ul(E, M, true)) : Ke(E, M, N, we, K, Z, oe, X, re);
    }, $e = (E, M, N, H, K, Z, oe, X, re) => {
      M.slotScopeIds = X, E == null ? M.shapeFlag & 512 ? K.ctx.activate(M, N, H, oe, re) : pt(M, N, H, K, Z, oe, re) : $t(E, M, re);
    }, pt = (E, M, N, H, K, Z, oe) => {
      const X = E.component = Wp(E, H, K);
      if (To(E) && (X.ctx.renderer = bi), Vp(X, false, oe), X.asyncDep) {
        if (K && K.registerDep(X, Ye, oe), !E.el) {
          const re = X.subTree = Ct(Et);
          se(null, re, M, N), E.placeholder = re.el;
        }
      } else Ye(X, E, M, N, K, Z, oe);
    }, $t = (E, M, N) => {
      const H = M.component = E.component;
      if (Sp(E, M, N)) if (H.asyncDep && !H.asyncResolved) {
        Re(H, M, N);
        return;
      } else H.next = M, H.update();
      else M.el = E.el, H.vnode = M;
    }, Ye = (E, M, N, H, K, Z, oe) => {
      const X = () => {
        if (E.isMounted) {
          let { next: ae, bu: ye, u: Ie, parent: xe, vnode: Ue } = E;
          {
            const Qt = kf(E);
            if (Qt) {
              ae && (ae.el = Ue.el, Re(E, ae, oe)), Qt.asyncDep.then(() => {
                mt(() => {
                  E.isUnmounted || q();
                }, K);
              });
              return;
            }
          }
          let ze = ae, St;
          Ei(E, false), ae ? (ae.el = Ue.el, Re(E, ae, oe)) : ae = Ue, ye && Fn(ye), (St = ae.props && ae.props.onVnodeBeforeUpdate) && ir(St, xe, ae, Ue), Ei(E, true);
          const Tt = Gl(E), Xt = E.subTree;
          E.subTree = Tt, x(Xt, Tt, I(Xt.el), Cr(Xt), E, K, Z), ae.el = Tt.el, ze === null && Tp(E, Tt.el), Ie && mt(Ie, K), (St = ae.props && ae.props.onVnodeUpdated) && mt(() => ir(St, xe, ae, Ue), K);
        } else {
          let ae;
          const { el: ye, props: Ie } = M, { bm: xe, m: Ue, parent: ze, root: St, type: Tt } = E, Xt = ui(M);
          Ei(E, false), xe && Fn(xe), !Xt && (ae = Ie && Ie.onVnodeBeforeMount) && ir(ae, ze, M), Ei(E, true);
          {
            St.ce && St.ce._hasShadowRoot() && St.ce._injectChildStyle(Tt);
            const Qt = E.subTree = Gl(E);
            x(null, Qt, N, H, E, K, Z), M.el = Qt.el;
          }
          if (Ue && mt(Ue, K), !Xt && (ae = Ie && Ie.onVnodeMounted)) {
            const Qt = M;
            mt(() => ir(ae, ze, Qt), K);
          }
          (M.shapeFlag & 256 || ze && ui(ze.vnode) && ze.vnode.shapeFlag & 256) && E.a && mt(E.a, K), E.isMounted = true, M = N = H = null;
        }
      };
      E.scope.on();
      const re = E.effect = new Au(X);
      E.scope.off();
      const q = E.update = re.run.bind(re), we = E.job = re.runIfDirty.bind(re);
      we.i = E, we.id = E.uid, re.scheduler = () => il(we), Ei(E, true), q();
    }, Re = (E, M, N) => {
      M.component = E;
      const H = E.vnode.props;
      E.vnode = M, E.next = null, Pp(E, M.props, H, N), Cp(E, M.children, N), Vr(), Rl(E), qr();
    }, Ke = (E, M, N, H, K, Z, oe, X, re = false) => {
      const q = E && E.children, we = E ? E.shapeFlag : 0, ae = M.children, { patchFlag: ye, shapeFlag: Ie } = M;
      if (ye > 0) {
        if (ye & 128) {
          Ui(q, ae, N, H, K, Z, oe, X, re);
          return;
        } else if (ye & 256) {
          Ar(q, ae, N, H, K, Z, oe, X, re);
          return;
        }
      }
      Ie & 8 ? (we & 16 && jt(q, K, Z), ae !== q && g(N, ae)) : we & 16 ? Ie & 16 ? Ui(q, ae, N, H, K, Z, oe, X, re) : jt(q, K, Z, true) : (we & 8 && g(N, ""), Ie & 16 && fe(ae, N, H, K, Z, oe, X, re));
    }, Ar = (E, M, N, H, K, Z, oe, X, re) => {
      E = E || Yi, M = M || Yi;
      const q = E.length, we = M.length, ae = Math.min(q, we);
      let ye;
      for (ye = 0; ye < ae; ye++) {
        const Ie = M[ye] = re ? jr(M[ye]) : Tr(M[ye]);
        x(E[ye], Ie, N, null, K, Z, oe, X, re);
      }
      q > we ? jt(E, K, Z, true, false, ae) : fe(M, N, H, K, Z, oe, X, re, ae);
    }, Ui = (E, M, N, H, K, Z, oe, X, re) => {
      let q = 0;
      const we = M.length;
      let ae = E.length - 1, ye = we - 1;
      for (; q <= ae && q <= ye; ) {
        const Ie = E[q], xe = M[q] = re ? jr(M[q]) : Tr(M[q]);
        if (ai(Ie, xe)) x(Ie, xe, N, null, K, Z, oe, X, re);
        else break;
        q++;
      }
      for (; q <= ae && q <= ye; ) {
        const Ie = E[ae], xe = M[ye] = re ? jr(M[ye]) : Tr(M[ye]);
        if (ai(Ie, xe)) x(Ie, xe, N, null, K, Z, oe, X, re);
        else break;
        ae--, ye--;
      }
      if (q > ae) {
        if (q <= ye) {
          const Ie = ye + 1, xe = Ie < we ? M[Ie].el : H;
          for (; q <= ye; ) x(null, M[q] = re ? jr(M[q]) : Tr(M[q]), N, xe, K, Z, oe, X, re), q++;
        }
      } else if (q > ye) for (; q <= ae; ) _e(E[q], K, Z, true), q++;
      else {
        const Ie = q, xe = q, Ue = /* @__PURE__ */ new Map();
        for (q = xe; q <= ye; q++) {
          const Ot = M[q] = re ? jr(M[q]) : Tr(M[q]);
          Ot.key != null && Ue.set(Ot.key, q);
        }
        let ze, St = 0;
        const Tt = ye - xe + 1;
        let Xt = false, Qt = 0;
        const vi = new Array(Tt);
        for (q = 0; q < Tt; q++) vi[q] = 0;
        for (q = Ie; q <= ae; q++) {
          const Ot = E[q];
          if (St >= Tt) {
            _e(Ot, K, Z, true);
            continue;
          }
          let er;
          if (Ot.key != null) er = Ue.get(Ot.key);
          else for (ze = xe; ze <= ye; ze++) if (vi[ze - xe] === 0 && ai(Ot, M[ze])) {
            er = ze;
            break;
          }
          er === void 0 ? _e(Ot, K, Z, true) : (vi[er - xe] = q + 1, er >= Qt ? Qt = er : Xt = true, x(Ot, M[er], N, null, K, Z, oe, X, re), St++);
        }
        const En = Xt ? Lp(vi) : Yi;
        for (ze = En.length - 1, q = Tt - 1; q >= 0; q--) {
          const Ot = xe + q, er = M[Ot], hs = M[Ot + 1], ds = Ot + 1 < we ? hs.el || Af(hs) : H;
          vi[q] === 0 ? x(null, er, N, ds, K, Z, oe, X, re) : Xt && (ze < 0 || q !== En[ze] ? Rr(er, N, ds, 2) : ze--);
        }
      }
    }, Rr = (E, M, N, H, K = null) => {
      const { el: Z, type: oe, transition: X, children: re, shapeFlag: q } = E;
      if (q & 6) {
        Rr(E.component.subTree, M, N, H);
        return;
      }
      if (q & 128) {
        E.suspense.move(M, N, H);
        return;
      }
      if (q & 64) {
        oe.move(E, M, N, bi);
        return;
      }
      if (oe === At) {
        i(Z, M, N);
        for (let ae = 0; ae < re.length; ae++) Rr(re[ae], M, N, H);
        i(E.anchor, M, N);
        return;
      }
      if (oe === Wn) {
        Y(E, M, N);
        return;
      }
      if (H !== 2 && q & 1 && X) if (H === 0) X.beforeEnter(Z), i(Z, M, N), mt(() => X.enter(Z), K);
      else {
        const { leave: ae, delayLeave: ye, afterLeave: Ie } = X, xe = () => {
          E.ctx.isUnmounted ? a(Z) : i(Z, M, N);
        }, Ue = () => {
          Z._isLeaving && Z[Sr](true), ae(Z, () => {
            xe(), Ie && Ie();
          });
        };
        ye ? ye(Z, xe, Ue) : Ue();
      }
      else i(Z, M, N);
    }, _e = (E, M, N, H = false, K = false) => {
      const { type: Z, props: oe, ref: X, children: re, dynamicChildren: q, shapeFlag: we, patchFlag: ae, dirs: ye, cacheIndex: Ie } = E;
      if (ae === -2 && (K = false), X != null && (Vr(), $n(X, null, N, E, true), qr()), Ie != null && (M.renderCache[Ie] = void 0), we & 256) {
        M.ctx.deactivate(E);
        return;
      }
      const xe = we & 1 && ye, Ue = !ui(E);
      let ze;
      if (Ue && (ze = oe && oe.onVnodeBeforeUnmount) && ir(ze, M, E), we & 6) ne(E.component, N, H);
      else {
        if (we & 128) {
          E.suspense.unmount(N, H);
          return;
        }
        xe && _i(E, null, M, "beforeUnmount"), we & 64 ? E.type.remove(E, M, N, bi, H) : q && !q.hasOnce && (Z !== At || ae > 0 && ae & 64) ? jt(q, M, N, false, true) : (Z === At && ae & 384 || !K && we & 16) && jt(re, M, N), H && _n(E);
      }
      (Ue && (ze = oe && oe.onVnodeUnmounted) || xe) && mt(() => {
        ze && ir(ze, M, E), xe && _i(E, null, M, "unmounted");
      }, N);
    }, _n = (E) => {
      const { type: M, el: N, anchor: H, transition: K } = E;
      if (M === At) {
        zo(N, H);
        return;
      }
      if (M === Wn) {
        $(E);
        return;
      }
      const Z = () => {
        a(N), K && !K.persisted && K.afterLeave && K.afterLeave();
      };
      if (E.shapeFlag & 1 && K && !K.persisted) {
        const { leave: oe, delayLeave: X } = K, re = () => oe(N, Z);
        X ? X(E.el, Z, re) : re();
      } else Z();
    }, zo = (E, M) => {
      let N;
      for (; E !== M; ) N = R(E), a(E), E = N;
      a(M);
    }, ne = (E, M, N) => {
      const { bum: H, scope: K, job: Z, subTree: oe, um: X, m: re, a: q } = E;
      Hs(re), Hs(q), H && Fn(H), K.stop(), Z && (Z.flags |= 8, _e(oe, E, M, N)), X && mt(X, M), mt(() => {
        E.isUnmounted = true;
      }, M);
    }, jt = (E, M, N, H = false, K = false, Z = 0) => {
      for (let oe = Z; oe < E.length; oe++) _e(E[oe], M, N, H, K);
    }, Cr = (E) => {
      if (E.shapeFlag & 6) return Cr(E.component.subTree);
      if (E.shapeFlag & 128) return E.suspense.next();
      const M = R(E.anchor || E.el), N = M && M[ef];
      return N ? R(N) : M;
    };
    let Bt = false;
    const fs = (E, M, N) => {
      let H;
      E == null ? M._vnode && (_e(M._vnode, null, null, true), H = M._vnode.component) : x(M._vnode || null, E, M, null, null, null, N), M._vnode = E, Bt || (Bt = true, Rl(H), Ju(), Bt = false);
    }, bi = {
      p: x,
      um: _e,
      m: Rr,
      r: _n,
      mt: pt,
      mc: fe,
      pc: Ke,
      pbc: me,
      n: Cr,
      o: e
    };
    return {
      render: fs,
      hydrate: void 0,
      createApp: bp(fs)
    };
  }
  function Zo({ type: e, props: t }, r) {
    return r === "svg" && e === "foreignObject" || r === "mathml" && e === "annotation-xml" && t && t.encoding && t.encoding.includes("html") ? void 0 : r;
  }
  function Ei({ effect: e, job: t }, r) {
    r ? (e.flags |= 32, t.flags |= 4) : (e.flags &= -33, t.flags &= -5);
  }
  function Np(e, t) {
    return (!e || e && !e.pendingBranch) && t && !t.persisted;
  }
  function ul(e, t, r = false) {
    const i = e.children, a = t.children;
    if (ve(i) && ve(a)) for (let c = 0; c < i.length; c++) {
      const f = i[c];
      let h = a[c];
      h.shapeFlag & 1 && !h.dynamicChildren && ((h.patchFlag <= 0 || h.patchFlag === 32) && (h = a[c] = jr(a[c]), h.el = f.el), !r && h.patchFlag !== -2 && ul(f, h)), h.type === ko && (h.patchFlag === -1 && (h = a[c] = jr(h)), h.el = f.el), h.type === Et && !h.el && (h.el = f.el);
    }
  }
  function Lp(e) {
    const t = e.slice(), r = [
      0
    ];
    let i, a, c, f, h;
    const p = e.length;
    for (i = 0; i < p; i++) {
      const v = e[i];
      if (v !== 0) {
        if (a = r[r.length - 1], e[a] < v) {
          t[i] = a, r.push(i);
          continue;
        }
        for (c = 0, f = r.length - 1; c < f; ) h = c + f >> 1, e[r[h]] < v ? c = h + 1 : f = h;
        v < e[r[c]] && (c > 0 && (t[i] = r[c - 1]), r[c] = i);
      }
    }
    for (c = r.length, f = r[c - 1]; c-- > 0; ) r[c] = f, f = t[f];
    return r;
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
  nr = function(e = false) {
    Vn.push(Ht = e ? null : []);
  };
  function Fp() {
    Vn.pop(), Ht = Vn[Vn.length - 1] || null;
  }
  let es = 1;
  function Js(e, t = false) {
    es += e, e < 0 && Ht && t && (Ht.hasOnce = true);
  }
  function Rf(e) {
    return e.dynamicChildren = es > 0 ? Ht || Yi : null, Fp(), es > 0 && Ht && Ht.push(e), e;
  }
  Nr = function(e, t, r, i, a, c) {
    return Rf(Be(e, t, r, i, a, c, true));
  };
  Ia = function(e, t, r, i, a) {
    return Rf(Ct(e, t, r, i, a, true));
  };
  on = function(e) {
    return e ? e.__v_isVNode === true : false;
  };
  function ai(e, t) {
    return e.type === t.type && e.key === t.key;
  }
  const Cf = ({ key: e }) => e ?? null, Cs = ({ ref: e, ref_key: t, ref_for: r }) => (typeof e == "number" && (e = "" + e), e != null ? at(e) || lt(e) || Te(e) ? {
    i: It,
    r: e,
    k: t,
    f: !!r
  } : e : null);
  Be = function(e, t = null, r = null, i = 0, a = null, c = e === At ? 0 : 1, f = false, h = false) {
    const p = {
      __v_isVNode: true,
      __v_skip: true,
      type: e,
      props: t,
      key: t && Cf(t),
      ref: t && Cs(t),
      scopeId: Xu,
      slotScopeIds: null,
      children: r,
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
      dynamicProps: a,
      dynamicChildren: null,
      appContext: null,
      ctx: It
    };
    return h ? (fl(p, r), c & 128 && e.normalize(p)) : r && (p.shapeFlag |= at(r) ? 8 : 16), es > 0 && !f && Ht && (p.patchFlag > 0 || c & 6) && p.patchFlag !== 32 && Ht.push(p), p;
  };
  Ct = jp;
  function jp(e, t = null, r = null, i = 0, a = null, c = false) {
    if ((!e || e === hf) && (e = Et), on(e)) {
      const h = Hr(e, t, true);
      return r && fl(h, r), es > 0 && !c && Ht && (h.shapeFlag & 6 ? Ht[Ht.indexOf(e)] = h : Ht.push(h)), h.patchFlag = -2, h;
    }
    if (Zp(e) && (e = e.__vccOpts), t) {
      t = Up(t);
      let { class: h, style: p } = t;
      h && !at(h) && (t.class = Za(h)), Ge(p) && (Eo(p) && !ve(p) && (p = dt({}, p)), t.style = yo(p));
    }
    const f = at(e) ? 1 : Zs(e) ? 128 : tf(e) ? 64 : Ge(e) ? 4 : Te(e) ? 2 : 0;
    return Be(e, t, r, i, a, f, c, true);
  }
  function Up(e) {
    return e ? Eo(e) || Ef(e) ? dt({}, e) : e : null;
  }
  Hr = function(e, t, r = false, i = false) {
    const { props: a, ref: c, patchFlag: f, children: h, transition: p } = e, v = t ? Gp(a || {}, t) : a, g = {
      __v_isVNode: true,
      __v_skip: true,
      type: e.type,
      props: v,
      key: v && Cf(v),
      ref: t && t.ref ? r && c ? ve(c) ? c.concat(Cs(t)) : [
        c,
        Cs(t)
      ] : Cs(t) : c,
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
      ssContent: e.ssContent && Hr(e.ssContent),
      ssFallback: e.ssFallback && Hr(e.ssFallback),
      placeholder: e.placeholder,
      el: e.el,
      anchor: e.anchor,
      ctx: e.ctx,
      ce: e.ce
    };
    return p && i && hi(g, p.clone(g)), g;
  };
  zp = function(e = " ", t = 0) {
    return Ct(ko, null, e, t);
  };
  Lv = function(e, t) {
    const r = Ct(Wn, null, e);
    return r.staticCount = t, r;
  };
  vs = function(e = "", t = false) {
    return t ? (nr(), Ia(Et, null, e)) : Ct(Et, null, e);
  };
  function Tr(e) {
    return e == null || typeof e == "boolean" ? Ct(Et) : ve(e) ? Ct(At, null, e.slice()) : on(e) ? jr(e) : Ct(ko, null, String(e));
  }
  function jr(e) {
    return e.el === null && e.patchFlag !== -1 || e.memo ? e : Hr(e);
  }
  function fl(e, t) {
    let r = 0;
    const { shapeFlag: i } = e;
    if (t == null) t = null;
    else if (ve(t)) r = 16;
    else if (typeof t == "object") if (i & 65) {
      const a = t.default;
      a && (a._c && (a._d = false), fl(e, a()), a._c && (a._d = true));
      return;
    } else {
      r = 32;
      const a = t._;
      !a && !Ef(t) ? t._ctx = It : a === 3 && It && (It.slots._ === 1 ? t._ = 1 : (t._ = 2, e.patchFlag |= 1024));
    }
    else Te(t) ? (t = {
      default: t,
      _ctx: It
    }, r = 32) : (t = String(t), i & 64 ? (r = 16, t = [
      zp(t)
    ]) : r = 8);
    e.children = t, e.shapeFlag |= r;
  }
  Gp = function(...e) {
    const t = {};
    for (let r = 0; r < e.length; r++) {
      const i = e[r];
      for (const a in i) if (a === "class") t.class !== i.class && (t.class = Za([
        t.class,
        i.class
      ]));
      else if (a === "style") t.style = yo([
        t.style,
        i.style
      ]);
      else if (ho(a)) {
        const c = t[a], f = i[a];
        f && c !== f && !(ve(c) && c.includes(f)) && (t[a] = c ? [].concat(c, f) : f);
      } else a !== "" && (t[a] = i[a]);
    }
    return t;
  };
  function ir(e, t, r, i = null) {
    mr(e, t, 7, [
      r,
      i
    ]);
  }
  const $p = mf();
  let Bp = 0;
  function Wp(e, t, r) {
    const i = e.type, a = (t ? t.appContext : e.appContext) || $p, c = {
      uid: Bp++,
      vnode: e,
      type: i,
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
      propsOptions: Sf(i, a),
      emitsOptions: yf(i, a),
      emit: null,
      emitted: null,
      propsDefaults: je,
      inheritAttrs: i.inheritAttrs,
      ctx: je,
      data: je,
      props: je,
      attrs: je,
      slots: je,
      refs: je,
      setupState: je,
      setupContext: null,
      suspense: r,
      suspenseId: r ? r.pendingId : 0,
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
  let Rt = null;
  pi = () => Rt || It;
  let Ys, Sa;
  {
    const e = wo(), t = (r, i) => {
      let a;
      return (a = e[r]) || (a = e[r] = []), a.push(i), (c) => {
        a.length > 1 ? a.forEach((f) => f(c)) : a[0](c);
      };
    };
    Ys = t("__VUE_INSTANCE_SETTERS__", (r) => Rt = r), Sa = t("__VUE_SSR_SETTERS__", (r) => ts = r);
  }
  const ls = (e) => {
    const t = Rt;
    return Ys(e), e.scope.on(), () => {
      e.scope.off(), Ys(t);
    };
  }, Wl = () => {
    Rt && Rt.scope.off(), Ys(null);
  };
  function Of(e) {
    return e.vnode.shapeFlag & 4;
  }
  let ts = false;
  function Vp(e, t = false, r = false) {
    t && Sa(t);
    const { props: i, children: a } = e.vnode, c = Of(e);
    Mp(e, i, c, t), Rp(e, a, r || t);
    const f = c ? qp(e, t) : void 0;
    return t && Sa(false), f;
  }
  function qp(e, t) {
    const r = e.type;
    e.accessCache = /* @__PURE__ */ Object.create(null), e.proxy = new Proxy(e.ctx, hp);
    const { setup: i } = r;
    if (i) {
      Vr();
      const a = e.setupContext = i.length > 1 ? Hp(e) : null, c = ls(e), f = os(i, e, 0, [
        e.props,
        a
      ]), h = bu(f);
      if (qr(), c(), (h || e.sp) && !ui(e) && cf(e), h) {
        if (f.then(Wl, Wl), t) return f.then((p) => {
          Vl(e, p);
        }).catch((p) => {
          Io(p, e, 0);
        });
        e.asyncDep = f;
      } else Vl(e, f);
    } else xf(e);
  }
  function Vl(e, t, r) {
    Te(t) ? e.type.__ssrInlineRender ? e.ssrRender = t : e.render = t : Ge(t) && (e.setupState = Wu(t)), xf(e);
  }
  function xf(e, t, r) {
    const i = e.type;
    e.render || (e.render = i.render || fr);
    {
      const a = ls(e);
      Vr();
      try {
        dp(e);
      } finally {
        qr(), a();
      }
    }
  }
  const Kp = {
    get(e, t) {
      return kt(e, "get", ""), e[t];
    }
  };
  function Hp(e) {
    const t = (r) => {
      e.exposed = r || {};
    };
    return {
      attrs: new Proxy(e.attrs, Kp),
      slots: e.slots,
      emit: e.emit,
      expose: t
    };
  }
  function Ao(e) {
    return e.exposed ? e.exposeProxy || (e.exposeProxy = new Proxy(Wu(rl(e.exposed)), {
      get(t, r) {
        if (r in t) return t[r];
        if (r in Bn) return Bn[r](e);
      },
      has(t, r) {
        return r in t || r in Bn;
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
  Jp = function(e, t, r) {
    try {
      Js(-1);
      const i = arguments.length;
      return i === 2 ? Ge(t) && !ve(t) ? on(t) ? Ct(e, null, [
        t
      ]) : Ct(e, t) : Ct(e, null, t) : (i > 3 ? r = Array.prototype.slice.call(arguments, 2) : i === 3 && on(r) && (r = [
        r
      ]), Ct(e, t, r));
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
  let Nf, Xp, Qp, Fr, Kl, eg, Qr, Tn, an, Lf, Df, tg, Ii, Hl;
  Nf = Ma ? (e) => Ma.createHTML(e) : (e) => e;
  Xp = "http://www.w3.org/2000/svg";
  Qp = "http://www.w3.org/1998/Math/MathML";
  Fr = typeof document < "u" ? document : null;
  Kl = Fr && Fr.createElement("template");
  eg = {
    insert: (e, t, r) => {
      t.insertBefore(e, r || null);
    },
    remove: (e) => {
      const t = e.parentNode;
      t && t.removeChild(e);
    },
    createElement: (e, t, r, i) => {
      const a = t === "svg" ? Fr.createElementNS(Xp, e) : t === "mathml" ? Fr.createElementNS(Qp, e) : r ? Fr.createElement(e, {
        is: r
      }) : Fr.createElement(e);
      return e === "select" && i && i.multiple != null && a.setAttribute("multiple", i.multiple), a;
    },
    createText: (e) => Fr.createTextNode(e),
    createComment: (e) => Fr.createComment(e),
    setText: (e, t) => {
      e.nodeValue = t;
    },
    setElementText: (e, t) => {
      e.textContent = t;
    },
    parentNode: (e) => e.parentNode,
    nextSibling: (e) => e.nextSibling,
    querySelector: (e) => Fr.querySelector(e),
    setScopeId(e, t) {
      e.setAttribute(t, "");
    },
    insertStaticContent(e, t, r, i, a, c) {
      const f = r ? r.previousSibling : t.lastChild;
      if (a && (a === c || a.nextSibling)) for (; t.insertBefore(a.cloneNode(true), r), !(a === c || !(a = a.nextSibling)); ) ;
      else {
        Kl.innerHTML = Nf(i === "svg" ? `<svg>${e}</svg>` : i === "mathml" ? `<math>${e}</math>` : e);
        const h = Kl.content;
        if (i === "svg" || i === "mathml") {
          const p = h.firstChild;
          for (; p.firstChild; ) h.appendChild(p.firstChild);
          h.removeChild(p);
        }
        t.insertBefore(h, r);
      }
      return [
        f ? f.nextSibling : t.firstChild,
        r ? r.previousSibling : t.lastChild
      ];
    }
  };
  Qr = "transition";
  Tn = "animation";
  an = /* @__PURE__ */ Symbol("_vtc");
  Lf = {
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
  Df = dt({}, sf, Lf);
  tg = (e) => (e.displayName = "Transition", e.props = Df, e);
  Dv = tg((e, { slots: t }) => Jp(Xd, Ff(e), t));
  Ii = (e, t = []) => {
    ve(e) ? e.forEach((r) => r(...t)) : e && e(...t);
  };
  Hl = (e) => e ? ve(e) ? e.some((t) => t.length > 1) : e.length > 1 : false;
  function Ff(e) {
    const t = {};
    for (const he in e) he in Lf || (t[he] = e[he]);
    if (e.css === false) return t;
    const { name: r = "v", type: i, duration: a, enterFromClass: c = `${r}-enter-from`, enterActiveClass: f = `${r}-enter-active`, enterToClass: h = `${r}-enter-to`, appearFromClass: p = c, appearActiveClass: v = f, appearToClass: g = h, leaveFromClass: I = `${r}-leave-from`, leaveActiveClass: R = `${r}-leave-active`, leaveToClass: A = `${r}-leave-to` } = e, j = rg(a), x = j && j[0], pe = j && j[1], { onBeforeEnter: se, onEnter: U, onEnterCancelled: Y, onLeave: $, onLeaveCancelled: ue, onBeforeAppear: ge = se, onAppear: ie = U, onAppearCancelled: fe = Y } = t, Q = (he, $e, pt, $t) => {
      he._enterCancelled = $t, ii(he, $e ? g : h), ii(he, $e ? v : f), pt && pt();
    }, me = (he, $e) => {
      he._isLeaving = false, ii(he, I), ii(he, A), ii(he, R), $e && $e();
    }, ke = (he) => ($e, pt) => {
      const $t = he ? ie : U, Ye = () => Q($e, he, pt);
      Ii($t, [
        $e,
        Ye
      ]), Zl(() => {
        ii($e, he ? p : c), br($e, he ? g : h), Hl($t) || Jl($e, i, x, Ye);
      });
    };
    return dt(t, {
      onBeforeEnter(he) {
        Ii(se, [
          he
        ]), br(he, c), br(he, f);
      },
      onBeforeAppear(he) {
        Ii(ge, [
          he
        ]), br(he, p), br(he, v);
      },
      onEnter: ke(false),
      onAppear: ke(true),
      onLeave(he, $e) {
        he._isLeaving = true;
        const pt = () => me(he, $e);
        br(he, I), he._enterCancelled ? (br(he, R), Pa(he)) : (Pa(he), br(he, R)), Zl(() => {
          he._isLeaving && (ii(he, I), br(he, A), Hl($) || Jl(he, i, pe, pt));
        }), Ii($, [
          he,
          pt
        ]);
      },
      onEnterCancelled(he) {
        Q(he, false, void 0, true), Ii(Y, [
          he
        ]);
      },
      onAppearCancelled(he) {
        Q(he, true, void 0, true), Ii(fe, [
          he
        ]);
      },
      onLeaveCancelled(he) {
        me(he), Ii(ue, [
          he
        ]);
      }
    });
  }
  function rg(e) {
    if (e == null) return null;
    if (Ge(e)) return [
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
  function br(e, t) {
    t.split(/\s+/).forEach((r) => r && e.classList.add(r)), (e[an] || (e[an] = /* @__PURE__ */ new Set())).add(t);
  }
  function ii(e, t) {
    t.split(/\s+/).forEach((i) => i && e.classList.remove(i));
    const r = e[an];
    r && (r.delete(t), r.size || (e[an] = void 0));
  }
  function Zl(e) {
    requestAnimationFrame(() => {
      requestAnimationFrame(e);
    });
  }
  let ig = 0;
  function Jl(e, t, r, i) {
    const a = e._endId = ++ig, c = () => {
      a === e._endId && i();
    };
    if (r != null) return setTimeout(c, r);
    const { type: f, timeout: h, propCount: p } = jf(e, t);
    if (!f) return i();
    const v = f + "end";
    let g = 0;
    const I = () => {
      e.removeEventListener(v, R), c();
    }, R = (A) => {
      A.target === e && ++g >= p && I();
    };
    setTimeout(() => {
      g < p && I();
    }, h + 1), e.addEventListener(v, R);
  }
  function jf(e, t) {
    const r = window.getComputedStyle(e), i = (j) => (r[j] || "").split(", "), a = i(`${Qr}Delay`), c = i(`${Qr}Duration`), f = Yl(a, c), h = i(`${Tn}Delay`), p = i(`${Tn}Duration`), v = Yl(h, p);
    let g = null, I = 0, R = 0;
    t === Qr ? f > 0 && (g = Qr, I = f, R = c.length) : t === Tn ? v > 0 && (g = Tn, I = v, R = p.length) : (I = Math.max(f, v), g = I > 0 ? f > v ? Qr : Tn : null, R = g ? g === Qr ? c.length : p.length : 0);
    const A = g === Qr && /\b(?:transform|all)(?:,|$)/.test(i(`${Qr}Property`).toString());
    return {
      type: g,
      timeout: I,
      propCount: R,
      hasTransform: A
    };
  }
  function Yl(e, t) {
    for (; e.length < t.length; ) e = e.concat(e);
    return Math.max(...t.map((r, i) => Xl(r) + Xl(e[i])));
  }
  function Xl(e) {
    return e === "auto" ? 0 : Number(e.slice(0, -1).replace(",", ".")) * 1e3;
  }
  function Pa(e) {
    return (e ? e.ownerDocument : document).body.offsetHeight;
  }
  function ng(e, t, r) {
    const i = e[an];
    i && (t = (t ? [
      t,
      ...i
    ] : [
      ...i
    ]).join(" ")), t == null ? e.removeAttribute("class") : r ? e.setAttribute("class", t) : e.className = t;
  }
  let Xs, Uf;
  Xs = /* @__PURE__ */ Symbol("_vod");
  Uf = /* @__PURE__ */ Symbol("_vsh");
  Fv = {
    name: "show",
    beforeMount(e, { value: t }, { transition: r }) {
      e[Xs] = e.style.display === "none" ? "" : e.style.display, r && t ? r.beforeEnter(e) : Mn(e, t);
    },
    mounted(e, { value: t }, { transition: r }) {
      r && t && r.enter(e);
    },
    updated(e, { value: t, oldValue: r }, { transition: i }) {
      !t != !r && (i ? t ? (i.beforeEnter(e), Mn(e, true), i.enter(e)) : i.leave(e, () => {
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
  jv = function(e) {
    const t = pi();
    if (!t) return;
    const r = t.ut = (a = e(t.proxy)) => {
      Array.from(document.querySelectorAll(`[data-v-owner="${t.uid}"]`)).forEach((c) => Qs(c, a));
    }, i = () => {
      const a = e(t.proxy);
      t.ce ? Qs(t.ce, a) : ka(t.subTree, a), r(a);
    };
    ff(() => {
      Zu(i);
    }), as(() => {
      tn(i, fr, {
        flush: "post"
      });
      const a = new MutationObserver(i);
      a.observe(t.subTree.el.parentNode, {
        childList: true
      }), al(() => a.disconnect());
    });
  };
  function ka(e, t) {
    if (e.shapeFlag & 128) {
      const r = e.suspense;
      e = r.activeBranch, r.pendingBranch && !r.isHydrating && r.effects.push(() => {
        ka(r.activeBranch, t);
      });
    }
    for (; e.component; ) e = e.component.subTree;
    if (e.shapeFlag & 1 && e.el) Qs(e.el, t);
    else if (e.type === At) e.children.forEach((r) => ka(r, t));
    else if (e.type === Wn) {
      let { el: r, anchor: i } = e;
      for (; r && (Qs(r, t), r !== i); ) r = r.nextSibling;
    }
  }
  function Qs(e, t) {
    if (e.nodeType === 1) {
      const r = e.style;
      let i = "";
      for (const a in t) {
        const c = ad(t[a]);
        r.setProperty(`--${a}`, c), i += `--${a}: ${c};`;
      }
      r[zf] = i;
    }
  }
  const sg = /(?:^|;)\s*display\s*:/;
  function og(e, t, r) {
    const i = e.style, a = at(r);
    let c = false;
    if (r && !a) {
      if (t) if (at(t)) for (const f of t.split(";")) {
        const h = f.slice(0, f.indexOf(":")).trim();
        r[h] == null && Os(i, h, "");
      }
      else for (const f in t) r[f] == null && Os(i, f, "");
      for (const f in r) f === "display" && (c = true), Os(i, f, r[f]);
    } else if (a) {
      if (t !== r) {
        const f = i[zf];
        f && (r += ";" + f), i.cssText = r, c = sg.test(r);
      }
    } else t && e.removeAttribute("style");
    Xs in e && (e[Xs] = c ? i.display : "", e[Uf] && (i.display = "none"));
  }
  const Ql = /\s*!important$/;
  function Os(e, t, r) {
    if (ve(r)) r.forEach((i) => Os(e, t, i));
    else if (r == null && (r = ""), t.startsWith("--")) e.setProperty(t, r);
    else {
      const i = ag(e, t);
      Ql.test(r) ? e.setProperty(Jr(i), r.replace(Ql, ""), "important") : e[i] = r;
    }
  }
  const ec = [
    "Webkit",
    "Moz",
    "ms"
  ], Yo = {};
  function ag(e, t) {
    const r = Yo[t];
    if (r) return r;
    let i = Yt(t);
    if (i !== "filter" && i in e) return Yo[t] = i;
    i = mo(i);
    for (let a = 0; a < ec.length; a++) {
      const c = ec[a] + i;
      if (c in e) return Yo[t] = c;
    }
    return t;
  }
  const tc = "http://www.w3.org/1999/xlink";
  function rc(e, t, r, i, a, c = sd(t)) {
    i && t.startsWith("xlink:") ? r == null ? e.removeAttributeNS(tc, t.slice(6, t.length)) : e.setAttributeNS(tc, t, r) : r == null || c && !Iu(r) ? e.removeAttribute(t) : e.setAttribute(t, c ? "" : pr(r) ? String(r) : r);
  }
  function ic(e, t, r, i, a) {
    if (t === "innerHTML" || t === "textContent") {
      r != null && (e[t] = t === "innerHTML" ? Nf(r) : r);
      return;
    }
    const c = e.tagName;
    if (t === "value" && c !== "PROGRESS" && !c.includes("-")) {
      const h = c === "OPTION" ? e.getAttribute("value") || "" : e.value, p = r == null ? e.type === "checkbox" ? "on" : "" : String(r);
      (h !== p || !("_value" in e)) && (e.value = p), r == null && e.removeAttribute(t), e._value = r;
      return;
    }
    let f = false;
    if (r === "" || r == null) {
      const h = typeof e[t];
      h === "boolean" ? r = Iu(r) : r == null && h === "string" ? (r = "", f = true) : h === "number" && (r = 0, f = true);
    }
    try {
      e[t] = r;
    } catch {
    }
    f && e.removeAttribute(a || t);
  }
  function lg(e, t, r, i) {
    e.addEventListener(t, r, i);
  }
  function cg(e, t, r, i) {
    e.removeEventListener(t, r, i);
  }
  const nc = /* @__PURE__ */ Symbol("_vei");
  function ug(e, t, r, i, a = null) {
    const c = e[nc] || (e[nc] = {}), f = c[t];
    if (i && f) f.value = i;
    else {
      const [h, p] = fg(t);
      if (i) {
        const v = c[t] = pg(i, a);
        lg(e, h, v, p);
      } else f && (cg(e, h, f, p), c[t] = void 0);
    }
  }
  const sc = /(?:Once|Passive|Capture)$/;
  function fg(e) {
    let t;
    if (sc.test(e)) {
      t = {};
      let i;
      for (; i = e.match(sc); ) e = e.slice(0, e.length - i[0].length), t[i[0].toLowerCase()] = true;
    }
    return [
      e[2] === ":" ? e.slice(3) : Jr(e.slice(2)),
      t
    ];
  }
  let Xo = 0;
  const hg = Promise.resolve(), dg = () => Xo || (hg.then(() => Xo = 0), Xo = Date.now());
  function pg(e, t) {
    const r = (i) => {
      if (!i._vts) i._vts = Date.now();
      else if (i._vts <= r.attached) return;
      mr(gg(i, r.value), t, 5, [
        i
      ]);
    };
    return r.value = e, r.attached = dg(), r;
  }
  function gg(e, t) {
    if (ve(t)) {
      const r = e.stopImmediatePropagation;
      return e.stopImmediatePropagation = () => {
        r.call(e), e._stopped = true;
      }, t.map((i) => (a) => !a._stopped && i && i(a));
    } else return t;
  }
  const oc = (e) => e.charCodeAt(0) === 111 && e.charCodeAt(1) === 110 && e.charCodeAt(2) > 96 && e.charCodeAt(2) < 123, mg = (e, t, r, i, a, c) => {
    const f = a === "svg";
    t === "class" ? ng(e, i, f) : t === "style" ? og(e, r, i) : ho(t) ? Ka(t) || ug(e, t, r, i, c) : (t[0] === "." ? (t = t.slice(1), true) : t[0] === "^" ? (t = t.slice(1), false) : wg(e, t, i, f)) ? (ic(e, t, i), !e.tagName.includes("-") && (t === "value" || t === "checked" || t === "selected") && rc(e, t, i, f, c, t !== "value")) : e._isVueCE && (/[A-Z]/.test(t) || !at(i)) ? ic(e, Yt(t), i, c, t) : (t === "true-value" ? e._trueValue = i : t === "false-value" && (e._falseValue = i), rc(e, t, i, f));
  };
  function wg(e, t, r, i) {
    if (i) return !!(t === "innerHTML" || t === "textContent" || t in e && oc(t) && Te(r));
    if (t === "spellcheck" || t === "draggable" || t === "translate" || t === "autocorrect" || t === "sandbox" && e.tagName === "IFRAME" || t === "form" || t === "list" && e.tagName === "INPUT" || t === "type" && e.tagName === "TEXTAREA") return false;
    if (t === "width" || t === "height") {
      const a = e.tagName;
      if (a === "IMG" || a === "VIDEO" || a === "CANVAS" || a === "SOURCE") return false;
    }
    return oc(t) && at(r) ? false : t in e;
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
      const r = pi(), i = nf();
      let a, c;
      return sl(() => {
        if (!a.length) return;
        const f = e.moveClass || `${e.name || "v"}-move`;
        if (!Ig(a[0].el, r.vnode.el, f)) {
          a = [];
          return;
        }
        a.forEach(vg), a.forEach(_g);
        const h = a.filter(Eg);
        Pa(r.vnode.el), h.forEach((p) => {
          const v = p.el, g = v.style;
          br(v, f), g.transform = g.webkitTransform = g.transitionDuration = "";
          const I = v[eo] = (R) => {
            R && R.target !== v || (!R || R.propertyName.endsWith("transform")) && (v.removeEventListener("transitionend", I), v[eo] = null, ii(v, f));
          };
          v.addEventListener("transitionend", I);
        }), a = [];
      }), () => {
        const f = Le(e), h = Ff(f);
        let p = f.tag || At;
        if (a = [], c) for (let v = 0; v < c.length; v++) {
          const g = c[v];
          g.el && g.el instanceof Element && (a.push(g), hi(g, Qn(g, h, i, r)), Gf.set(g, Bf(g.el)));
        }
        c = t.default ? nl(t.default()) : [];
        for (let v = 0; v < c.length; v++) {
          const g = c[v];
          g.key != null && hi(g, Qn(g, h, i, r));
        }
        return Ct(p, null, c);
      };
    }
  });
  Uv = bg;
  function vg(e) {
    const t = e.el;
    t[eo] && t[eo](), t[ac] && t[ac]();
  }
  function _g(e) {
    $f.set(e, Bf(e.el));
  }
  function Eg(e) {
    const t = Gf.get(e), r = $f.get(e), i = t.left - r.left, a = t.top - r.top;
    if (i || a) {
      const c = e.el, f = c.style, h = c.getBoundingClientRect();
      let p = 1, v = 1;
      return c.offsetWidth && (p = h.width / c.offsetWidth), c.offsetHeight && (v = h.height / c.offsetHeight), (!Number.isFinite(p) || p === 0) && (p = 1), (!Number.isFinite(v) || v === 0) && (v = 1), Math.abs(p - 1) < 0.01 && (p = 1), Math.abs(v - 1) < 0.01 && (v = 1), f.transform = f.webkitTransform = `translate(${i / p}px,${a / v}px)`, f.transitionDuration = "0s", e;
    }
  }
  function Bf(e) {
    const t = e.getBoundingClientRect();
    return {
      left: t.left,
      top: t.top
    };
  }
  function Ig(e, t, r) {
    const i = e.cloneNode(), a = e[an];
    a && a.forEach((h) => {
      h.split(/\s+/).forEach((p) => p && i.classList.remove(p));
    }), r.split(/\s+/).forEach((h) => h && i.classList.add(h)), i.style.display = "none";
    const c = t.nodeType === 1 ? t : t.parentNode;
    c.appendChild(i);
    const { hasTransform: f } = jf(i);
    return c.removeChild(i), f;
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
    exact: (e, t) => Sg.some((r) => e[`${r}Key`] && !t.includes(r))
  };
  zv = (e, t) => {
    if (!e) return e;
    const r = e._withMods || (e._withMods = {}), i = t.join(".");
    return r[i] || (r[i] = ((a, ...c) => {
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
  Gv = (e, t) => {
    const r = e._withKeys || (e._withKeys = {}), i = t.join(".");
    return r[i] || (r[i] = ((a) => {
      if (!("key" in a)) return;
      const c = Jr(a.key);
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
    const t = kg().createApp(...e), { mount: r } = t;
    return t.mount = (i) => {
      const a = Rg(i);
      if (!a) return;
      const c = t._component;
      !Te(c) && !c.render && !c.template && (c.template = a.innerHTML), a.nodeType === 1 && (a.textContent = "");
      const f = r(a, false, Ag(a));
      return a instanceof Element && (a.removeAttribute("v-cloak"), a.setAttribute("data-v-app", "")), f;
    }, t;
  });
  function Ag(e) {
    if (e instanceof SVGElement) return "svg";
    if (typeof MathMLElement == "function" && e instanceof MathMLElement) return "mathml";
  }
  function Rg(e) {
    return at(e) ? document.querySelector(e) : e;
  }
  const Cg = "" + new URL("../favicon.svg", import.meta.url).href;
  let Vf, Og, qf, xg, Ng, Pn;
  Vf = typeof global == "object" && global && global.Object === Object && global;
  Og = typeof self == "object" && self && self.Object === Object && self;
  kr = Vf || Og || Function("return this")();
  ln = kr.Symbol;
  qf = Object.prototype;
  xg = qf.hasOwnProperty;
  Ng = qf.toString;
  Pn = ln ? ln.toStringTag : void 0;
  function Lg(e) {
    var t = xg.call(e, Pn), r = e[Pn];
    try {
      e[Pn] = void 0;
      var i = true;
    } catch {
    }
    var a = Ng.call(e);
    return i && (t ? e[Pn] = r : delete e[Pn]), a;
  }
  var Dg = Object.prototype, Fg = Dg.toString;
  function jg(e) {
    return Fg.call(e);
  }
  var Ug = "[object Null]", zg = "[object Undefined]", cc = ln ? ln.toStringTag : void 0;
  gi = function(e) {
    return e == null ? e === void 0 ? zg : Ug : cc && cc in Object(e) ? Lg(e) : jg(e);
  };
  mi = function(e) {
    return e != null && typeof e == "object";
  };
  Ro = Array.isArray;
  Co = function(e) {
    var t = typeof e;
    return e != null && (t == "object" || t == "function");
  };
  var Gg = "[object AsyncFunction]", $g = "[object Function]", Bg = "[object GeneratorFunction]", Wg = "[object Proxy]";
  Kf = function(e) {
    if (!Co(e)) return false;
    var t = gi(e);
    return t == $g || t == Bg || t == Gg || t == Wg;
  };
  var Qo = kr["__core-js_shared__"], uc = (function() {
    var e = /[^.]+$/.exec(Qo && Qo.keys && Qo.keys.IE_PROTO || "");
    return e ? "Symbol(src)_1." + e : "";
  })();
  function Vg(e) {
    return !!uc && uc in e;
  }
  var qg = Function.prototype, Kg = qg.toString;
  function Fi(e) {
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
    if (!Co(e) || Vg(e)) return false;
    var t = Kf(e) ? em : Zg;
    return t.test(Fi(e));
  }
  function rm(e, t) {
    return e == null ? void 0 : e[t];
  }
  function ji(e, t) {
    var r = rm(e, t);
    return tm(r) ? r : void 0;
  }
  let Aa, fc, im;
  Aa = ji(kr, "WeakMap");
  fc = Object.create;
  im = /* @__PURE__ */ (function() {
    function e() {
    }
    return function(t) {
      if (!Co(t)) return {};
      if (fc) return fc(t);
      e.prototype = t;
      var r = new e();
      return e.prototype = void 0, r;
    };
  })();
  hc = (function() {
    try {
      var e = ji(Object, "defineProperty");
      return e({}, "", {}), e;
    } catch {
    }
  })();
  function nm(e, t) {
    for (var r = -1, i = e == null ? 0 : e.length; ++r < i && t(e[r], r, e) !== false; ) ;
    return e;
  }
  var sm = 9007199254740991, om = /^(?:0|[1-9]\d*)$/;
  am = function(e, t) {
    var r = typeof e;
    return t = t ?? sm, !!t && (r == "number" || r != "symbol" && om.test(e)) && e > -1 && e % 1 == 0 && e < t;
  };
  lm = function(e, t, r) {
    t == "__proto__" && hc ? hc(e, t, {
      configurable: true,
      enumerable: true,
      value: r,
      writable: true
    }) : e[t] = r;
  };
  Hf = function(e, t) {
    return e === t || e !== e && t !== t;
  };
  var cm = Object.prototype, um = cm.hasOwnProperty;
  fm = function(e, t, r) {
    var i = e[t];
    (!(um.call(e, t) && Hf(i, r)) || r === void 0 && !(t in e)) && lm(e, t, r);
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
    var t = e && e.constructor, r = typeof t == "function" && t.prototype || pm;
    return e === r;
  };
  function gm(e, t) {
    for (var r = -1, i = Array(e); ++r < e; ) i[r] = t(r);
    return i;
  }
  var mm = "[object Arguments]";
  function dc(e) {
    return mi(e) && gi(e) == mm;
  }
  let Yf, wm, ym;
  Yf = Object.prototype;
  wm = Yf.hasOwnProperty;
  ym = Yf.propertyIsEnumerable;
  bm = dc(/* @__PURE__ */ (function() {
    return arguments;
  })()) ? dc : function(e) {
    return mi(e) && wm.call(e, "callee") && !ym.call(e, "callee");
  };
  function vm() {
    return false;
  }
  let Xf, pc, _m, gc, Em, Im, Sm, Tm, Mm, Pm, km, Am, Rm, Cm, Om, xm, Nm, Lm, Dm, Fm, jm, Um, zm, Gm, $m, Bm, Wm, Vm, qm, rt;
  Xf = typeof exports == "object" && exports && !exports.nodeType && exports;
  pc = Xf && typeof module == "object" && module && !module.nodeType && module;
  _m = pc && pc.exports === Xf;
  gc = _m ? kr.Buffer : void 0;
  Em = gc ? gc.isBuffer : void 0;
  Qf = Em || vm;
  Im = "[object Arguments]";
  Sm = "[object Array]";
  Tm = "[object Boolean]";
  Mm = "[object Date]";
  Pm = "[object Error]";
  km = "[object Function]";
  Am = "[object Map]";
  Rm = "[object Number]";
  Cm = "[object Object]";
  Om = "[object RegExp]";
  xm = "[object Set]";
  Nm = "[object String]";
  Lm = "[object WeakMap]";
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
  rt[Im] = rt[Sm] = rt[Dm] = rt[Tm] = rt[Fm] = rt[Mm] = rt[Pm] = rt[km] = rt[Am] = rt[Rm] = rt[Cm] = rt[Om] = rt[xm] = rt[Nm] = rt[Lm] = false;
  function Km(e) {
    return mi(e) && Zf(e.length) && !!rt[gi(e)];
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
    var r = Ro(e), i = !r && bm(e), a = !r && !i && Qf(e), c = !r && !i && !a && Zm(e), f = r || i || a || c, h = f ? gm(e.length, String) : [], p = h.length;
    for (var v in e) (t || Ym.call(e, v)) && !(f && (v == "length" || a && (v == "offset" || v == "parent") || c && (v == "buffer" || v == "byteLength" || v == "byteOffset") || am(v, p))) && h.push(v);
    return h;
  };
  function th(e, t) {
    return function(r) {
      return e(t(r));
    };
  }
  var Qm = th(Object.keys, Object), ew = Object.prototype, tw = ew.hasOwnProperty;
  function rw(e) {
    if (!Jf(e)) return Qm(e);
    var t = [];
    for (var r in Object(e)) tw.call(e, r) && r != "constructor" && t.push(r);
    return t;
  }
  iw = function(e) {
    return dm(e) ? Xm(e) : rw(e);
  };
  var rs = ji(Object, "create");
  function nw() {
    this.__data__ = rs ? rs(null) : {}, this.size = 0;
  }
  function sw(e) {
    var t = this.has(e) && delete this.__data__[e];
    return this.size -= t ? 1 : 0, t;
  }
  var ow = "__lodash_hash_undefined__", aw = Object.prototype, lw = aw.hasOwnProperty;
  function cw(e) {
    var t = this.__data__;
    if (rs) {
      var r = t[e];
      return r === ow ? void 0 : r;
    }
    return lw.call(t, e) ? t[e] : void 0;
  }
  var uw = Object.prototype, fw = uw.hasOwnProperty;
  function hw(e) {
    var t = this.__data__;
    return rs ? t[e] !== void 0 : fw.call(t, e);
  }
  var dw = "__lodash_hash_undefined__";
  function pw(e, t) {
    var r = this.__data__;
    return this.size += this.has(e) ? 0 : 1, r[e] = rs && t === void 0 ? dw : t, this;
  }
  function Di(e) {
    var t = -1, r = e == null ? 0 : e.length;
    for (this.clear(); ++t < r; ) {
      var i = e[t];
      this.set(i[0], i[1]);
    }
  }
  Di.prototype.clear = nw;
  Di.prototype.delete = sw;
  Di.prototype.get = cw;
  Di.prototype.has = hw;
  Di.prototype.set = pw;
  function gw() {
    this.__data__ = [], this.size = 0;
  }
  function Oo(e, t) {
    for (var r = e.length; r--; ) if (Hf(e[r][0], t)) return r;
    return -1;
  }
  var mw = Array.prototype, ww = mw.splice;
  function yw(e) {
    var t = this.__data__, r = Oo(t, e);
    if (r < 0) return false;
    var i = t.length - 1;
    return r == i ? t.pop() : ww.call(t, r, 1), --this.size, true;
  }
  function bw(e) {
    var t = this.__data__, r = Oo(t, e);
    return r < 0 ? void 0 : t[r][1];
  }
  function vw(e) {
    return Oo(this.__data__, e) > -1;
  }
  function _w(e, t) {
    var r = this.__data__, i = Oo(r, e);
    return i < 0 ? (++this.size, r.push([
      e,
      t
    ])) : r[i][1] = t, this;
  }
  function Xr(e) {
    var t = -1, r = e == null ? 0 : e.length;
    for (this.clear(); ++t < r; ) {
      var i = e[t];
      this.set(i[0], i[1]);
    }
  }
  Xr.prototype.clear = gw;
  Xr.prototype.delete = yw;
  Xr.prototype.get = bw;
  Xr.prototype.has = vw;
  Xr.prototype.set = _w;
  var is = ji(kr, "Map");
  function Ew() {
    this.size = 0, this.__data__ = {
      hash: new Di(),
      map: new (is || Xr)(),
      string: new Di()
    };
  }
  function Iw(e) {
    var t = typeof e;
    return t == "string" || t == "number" || t == "symbol" || t == "boolean" ? e !== "__proto__" : e === null;
  }
  function xo(e, t) {
    var r = e.__data__;
    return Iw(t) ? r[typeof t == "string" ? "string" : "hash"] : r.map;
  }
  function Sw(e) {
    var t = xo(this, e).delete(e);
    return this.size -= t ? 1 : 0, t;
  }
  function Tw(e) {
    return xo(this, e).get(e);
  }
  function Mw(e) {
    return xo(this, e).has(e);
  }
  function Pw(e, t) {
    var r = xo(this, e), i = r.size;
    return r.set(e, t), this.size += r.size == i ? 0 : 1, this;
  }
  yn = function(e) {
    var t = -1, r = e == null ? 0 : e.length;
    for (this.clear(); ++t < r; ) {
      var i = e[t];
      this.set(i[0], i[1]);
    }
  };
  yn.prototype.clear = Ew;
  yn.prototype.delete = Sw;
  yn.prototype.get = Tw;
  yn.prototype.has = Mw;
  yn.prototype.set = Pw;
  function kw(e, t) {
    for (var r = -1, i = t.length, a = e.length; ++r < i; ) e[a + r] = t[r];
    return e;
  }
  var rh = th(Object.getPrototypeOf, Object), Aw = "[object Object]", Rw = Function.prototype, Cw = Object.prototype, ih = Rw.toString, Ow = Cw.hasOwnProperty, xw = ih.call(Object);
  Nw = function(e) {
    if (!mi(e) || gi(e) != Aw) return false;
    var t = rh(e);
    if (t === null) return true;
    var r = Ow.call(t, "constructor") && t.constructor;
    return typeof r == "function" && r instanceof r && ih.call(r) == xw;
  };
  var Lw = "[object DOMException]", Dw = "[object Error]";
  function nh(e) {
    if (!mi(e)) return false;
    var t = gi(e);
    return t == Dw || t == Lw || typeof e.message == "string" && typeof e.name == "string" && !Nw(e);
  }
  function Fw() {
    this.__data__ = new Xr(), this.size = 0;
  }
  function jw(e) {
    var t = this.__data__, r = t.delete(e);
    return this.size = t.size, r;
  }
  function Uw(e) {
    return this.__data__.get(e);
  }
  function zw(e) {
    return this.__data__.has(e);
  }
  var Gw = 200;
  function $w(e, t) {
    var r = this.__data__;
    if (r instanceof Xr) {
      var i = r.__data__;
      if (!is || i.length < Gw - 1) return i.push([
        e,
        t
      ]), this.size = ++r.size, this;
      r = this.__data__ = new yn(i);
    }
    return r.set(e, t), this.size = r.size, this;
  }
  bn = function(e) {
    var t = this.__data__ = new Xr(e);
    this.size = t.size;
  };
  bn.prototype.clear = Fw;
  bn.prototype.delete = jw;
  bn.prototype.get = Uw;
  bn.prototype.has = zw;
  bn.prototype.set = $w;
  var sh = typeof exports == "object" && exports && !exports.nodeType && exports, wc = sh && typeof module == "object" && module && !module.nodeType && module, Bw = wc && wc.exports === sh, yc = Bw ? kr.Buffer : void 0, bc = yc ? yc.allocUnsafe : void 0;
  Ww = function(e, t) {
    if (t) return e.slice();
    var r = e.length, i = bc ? bc(r) : new e.constructor(r);
    return e.copy(i), i;
  };
  function Vw(e, t) {
    for (var r = -1, i = e == null ? 0 : e.length, a = 0, c = []; ++r < i; ) {
      var f = e[r];
      t(f, r, e) && (c[a++] = f);
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
  function Jw(e, t, r) {
    var i = t(e);
    return Ro(e) ? i : kw(i, r(e));
  }
  Yw = function(e) {
    return Jw(e, iw, Zw);
  };
  let Ra, Ca, Oa, _c, Xw, Ec, Ic, Sc, Tc, Qw, e0, t0, r0, i0;
  Ra = ji(kr, "DataView");
  Ca = ji(kr, "Promise");
  Oa = ji(kr, "Set");
  _c = "[object Map]";
  Xw = "[object Object]";
  Ec = "[object Promise]";
  Ic = "[object Set]";
  Sc = "[object WeakMap]";
  Tc = "[object DataView]";
  Qw = Fi(Ra);
  e0 = Fi(is);
  t0 = Fi(Ca);
  r0 = Fi(Oa);
  i0 = Fi(Aa);
  Ur = gi;
  (Ra && Ur(new Ra(new ArrayBuffer(1))) != Tc || is && Ur(new is()) != _c || Ca && Ur(Ca.resolve()) != Ec || Oa && Ur(new Oa()) != Ic || Aa && Ur(new Aa()) != Sc) && (Ur = function(e) {
    var t = gi(e), r = t == Xw ? e.constructor : void 0, i = r ? Fi(r) : "";
    if (i) switch (i) {
      case Qw:
        return Tc;
      case e0:
        return _c;
      case t0:
        return Ec;
      case r0:
        return Ic;
      case i0:
        return Sc;
    }
    return t;
  });
  var n0 = Object.prototype, s0 = n0.hasOwnProperty;
  function o0(e) {
    var t = e.length, r = new e.constructor(t);
    return t && typeof e[0] == "string" && s0.call(e, "index") && (r.index = e.index, r.input = e.input), r;
  }
  Mc = kr.Uint8Array;
  function pl(e) {
    var t = new e.constructor(e.byteLength);
    return new Mc(t).set(new Mc(e)), t;
  }
  function a0(e, t) {
    var r = pl(e.buffer);
    return new e.constructor(r, e.byteOffset, e.byteLength);
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
    var r = t ? pl(e.buffer) : e.buffer;
    return new e.constructor(r, e.byteOffset, e.length);
  };
  var h0 = "[object Boolean]", d0 = "[object Date]", p0 = "[object Map]", g0 = "[object Number]", m0 = "[object RegExp]", w0 = "[object Set]", y0 = "[object String]", b0 = "[object Symbol]", v0 = "[object ArrayBuffer]", _0 = "[object DataView]", E0 = "[object Float32Array]", I0 = "[object Float64Array]", S0 = "[object Int8Array]", T0 = "[object Int16Array]", M0 = "[object Int32Array]", P0 = "[object Uint8Array]", k0 = "[object Uint8ClampedArray]", A0 = "[object Uint16Array]", R0 = "[object Uint32Array]";
  function C0(e, t, r) {
    var i = e.constructor;
    switch (t) {
      case v0:
        return pl(e);
      case h0:
      case d0:
        return new i(+e);
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
      case R0:
        return f0(e, r);
      case p0:
        return new i();
      case g0:
      case y0:
        return new i(e);
      case m0:
        return c0(e);
      case w0:
        return new i();
      case b0:
        return u0(e);
    }
  }
  O0 = function(e) {
    return typeof e.constructor == "function" && !Jf(e) ? im(rh(e)) : {};
  };
  var x0 = "[object Map]";
  function N0(e) {
    return mi(e) && Ur(e) == x0;
  }
  var Ac = cn && cn.isMap, L0 = Ac ? dl(Ac) : N0, D0 = "[object Set]";
  function F0(e) {
    return mi(e) && Ur(e) == D0;
  }
  var Rc = cn && cn.isSet, j0 = Rc ? dl(Rc) : F0, U0 = 1, oh = "[object Arguments]", z0 = "[object Array]", G0 = "[object Boolean]", $0 = "[object Date]", B0 = "[object Error]", ah = "[object Function]", W0 = "[object GeneratorFunction]", V0 = "[object Map]", q0 = "[object Number]", lh = "[object Object]", K0 = "[object RegExp]", H0 = "[object Set]", Z0 = "[object String]", J0 = "[object Symbol]", Y0 = "[object WeakMap]", X0 = "[object ArrayBuffer]", Q0 = "[object DataView]", ey = "[object Float32Array]", ty = "[object Float64Array]", ry = "[object Int8Array]", iy = "[object Int16Array]", ny = "[object Int32Array]", sy = "[object Uint8Array]", oy = "[object Uint8ClampedArray]", ay = "[object Uint16Array]", ly = "[object Uint32Array]", Xe = {};
  Xe[oh] = Xe[z0] = Xe[X0] = Xe[Q0] = Xe[G0] = Xe[$0] = Xe[ey] = Xe[ty] = Xe[ry] = Xe[iy] = Xe[ny] = Xe[V0] = Xe[q0] = Xe[lh] = Xe[K0] = Xe[H0] = Xe[Z0] = Xe[J0] = Xe[sy] = Xe[oy] = Xe[ay] = Xe[ly] = true;
  Xe[B0] = Xe[ah] = Xe[Y0] = false;
  function xs(e, t, r, i, a, c) {
    var f, h = t & U0;
    if (f !== void 0) return f;
    if (!Co(e)) return e;
    var p = Ro(e);
    if (p) f = o0(e);
    else {
      var v = Ur(e), g = v == ah || v == W0;
      if (Qf(e)) return Ww(e, h);
      if (v == lh || v == oh || g && !a) f = g ? {} : O0(e);
      else {
        if (!Xe[v]) return a ? e : {};
        f = C0(e, v, h);
      }
    }
    c || (c = new bn());
    var I = c.get(e);
    if (I) return I;
    c.set(e, f), j0(e) ? e.forEach(function(j) {
      f.add(xs(j, t, r, j, e, c));
    }) : L0(e) && e.forEach(function(j, x) {
      f.set(x, xs(j, t, r, x, e, c));
    });
    var R = Yw, A = p ? void 0 : R(e);
    return nm(A || e, function(j, x) {
      A && (x = j, j = e[x]), fm(f, x, xs(j, t, r, x, e, c));
    }), f;
  }
  var cy = 1, uy = 4;
  xa = function(e) {
    return xs(e, cy | uy);
  };
  var fy = "[object String]";
  function Na(e) {
    return typeof e == "string" || !Ro(e) && mi(e) && gi(e) == fy;
  }
  const xt = (e) => Na(e) ? e : nh(e) ? String(e) : JSON.stringify(e), yr = {
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
  }, hy = {
    info: console.info,
    warn: console.warn,
    error: console.error,
    debug: console.debug
  };
  async function ch(e, t, r = 1e4, i = {}, a = 0, c = 0, f = 0) {
    var _a3, _b2, _c2, _d2, _e, _f2;
    const { logger: h = hy, progressReporter: p, printLog: v = true } = i, g = e.find((x) => x.name === t);
    if (!g) throw new Error(`cannot exactly find module "${t}" from the library`);
    const I = e.findIndex((x) => x.name === g.name);
    if (e[I].status === "loaded") return v && h.info(yr.alreadyLoaded(g.name)), {
      completed: f,
      total: c
    };
    const R = g.dependencies || [], A = e.filter((x) => R.includes(x.name)), j = R.filter((x) => !e.find((pe) => pe.name === x));
    if (j.length > 0) {
      const x = yr.missingDependencies(g.name, j.join(", "));
      throw v && h.error(x), new Error(x);
    }
    if (e[I].status === "error") {
      const x = yr.errorDetermined(g.name);
      throw v && h.info(x), new Error(x);
    }
    if (e[I].status === "loading") return v && h.info(yr.alreadyLoading(g.name)), await dy(e, g.name, r, h), {
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
        h.info(yr.loadDependencies(g.name, A.map((se) => se.name)));
        for (const se of A) {
          const U = await ch(e, se.name, r, {
            logger: h,
            progressReporter: p,
            printLog: v
          }, a + 1, x, pe);
          pe = U.completed, x = U.total, (_a3 = p == null ? void 0 : p.onOverallProgress) == null ? void 0 : _a3.call(p, pe, x);
        }
        v && h.info(yr.dependenciesReady(g.name));
      }
      e[I].status = "loading", (_b2 = p == null ? void 0 : p.onModuleStart) == null ? void 0 : _b2.call(p, g.displayName);
      try {
        return v && h.info(yr.loading(g.name)), await g.moduleInit(r), e[I].status = "loaded", pe++, (_c2 = p == null ? void 0 : p.onModuleComplete) == null ? void 0 : _c2.call(p, g.displayName), (_d2 = p == null ? void 0 : p.onOverallProgress) == null ? void 0 : _d2.call(p, pe, x), v && h.info(yr.loaded(g.name)), {
          completed: pe,
          total: x
        };
      } catch (se) {
        e[I].status = "error";
        const U = yr.error(g.name, Na(se) ? se : nh(se) ? se.message : JSON.stringify(se));
        throw h.error(U), (_e = p == null ? void 0 : p.onModuleError) == null ? void 0 : _e.call(p, g.displayName, Na(se) ? new Error(se) : se), new Error(U);
      }
    } catch (x) {
      e[I].status = "error", console.log(x);
      const pe = yr.error(g.name, x);
      throw h.error(pe), (_f2 = p == null ? void 0 : p.onModuleError) == null ? void 0 : _f2.call(p, g.displayName, x), new Error(pe);
    }
  }
  async function dy(e, t, r = 1e4, i) {
    const a = Date.now();
    return new Promise((c, f) => {
      const h = setInterval(() => {
        const p = e.find((v) => v.name === t);
        if (p && p.status === "loaded") clearInterval(h), c();
        else if (Date.now() - a > r) {
          clearInterval(h);
          const v = new Error(`Load module ${t} timeout`);
          i == null ? void 0 : i.error(v.message), f(v);
        }
      }, 10);
    });
  }
  let py, gy, Cc, my, wy, uh;
  py = "modulepreload";
  gy = function(e, t) {
    return new URL(e, t).href;
  };
  Cc = {};
  Kn = function(t, r, i) {
    let a = Promise.resolve();
    if (r && r.length > 0) {
      let v = function(g) {
        return Promise.all(g.map((I) => Promise.resolve(I).then((R) => ({
          status: "fulfilled",
          value: R
        }), (R) => ({
          status: "rejected",
          reason: R
        }))));
      };
      const f = document.getElementsByTagName("link"), h = document.querySelector("meta[property=csp-nonce]"), p = (h == null ? void 0 : h.nonce) || (h == null ? void 0 : h.getAttribute("nonce"));
      a = v(r.map((g) => {
        if (g = gy(g, i), g in Cc) return;
        Cc[g] = true;
        const I = g.endsWith(".css"), R = I ? '[rel="stylesheet"]' : "";
        if (i) for (let j = f.length - 1; j >= 0; j--) {
          const x = f[j];
          if (x.href === g && (!I || x.rel === "stylesheet")) return;
        }
        else if (document.querySelector(`link[href="${g}"]${R}`)) return;
        const A = document.createElement("link");
        if (A.rel = I ? "stylesheet" : py, I || (A.as = "script"), A.crossOrigin = "", A.href = g, p && A.setAttribute("nonce", p), document.head.appendChild(A), I) return new Promise((j, x) => {
          A.addEventListener("load", j), A.addEventListener("error", () => x(new Error(`Unable to preload CSS for ${g}`)));
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
  uh = (e, t, r = wy) => {
    const i = t.isOk() ? {
      type: "Ok",
      value: t.value
    } : {
      type: "Err",
      value: t.error
    }, a = r.withStackTrace ? new Error().stack : void 0;
    return {
      data: i,
      message: e,
      stack: a
    };
  };
  function Si(e, t, r, i) {
    function a(c) {
      return c instanceof r ? c : new r(function(f) {
        f(c);
      });
    }
    return new (r || (r = Promise))(function(c, f) {
      function h(g) {
        try {
          v(i.next(g));
        } catch (I) {
          f(I);
        }
      }
      function p(g) {
        try {
          v(i.throw(g));
        } catch (I) {
          f(I);
        }
      }
      function v(g) {
        g.done ? c(g.value) : a(g.value).then(h, p);
      }
      v((i = i.apply(e, [])).next());
    });
  }
  function Oc(e) {
    var t = typeof Symbol == "function" && Symbol.iterator, r = t && e[t], i = 0;
    if (r) return r.call(e);
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
  function Mr(e) {
    return this instanceof Mr ? (this.v = e, this) : new Mr(e);
  }
  function xc(e, t, r) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var i = r.apply(e, t || []), a, c = [];
    return a = Object.create((typeof AsyncIterator == "function" ? AsyncIterator : Object).prototype), h("next"), h("throw"), h("return", f), a[Symbol.asyncIterator] = function() {
      return this;
    }, a;
    function f(A) {
      return function(j) {
        return Promise.resolve(j).then(A, I);
      };
    }
    function h(A, j) {
      i[A] && (a[A] = function(x) {
        return new Promise(function(pe, se) {
          c.push([
            A,
            x,
            pe,
            se
          ]) > 1 || p(A, x);
        });
      }, j && (a[A] = j(a[A])));
    }
    function p(A, j) {
      try {
        v(i[A](j));
      } catch (x) {
        R(c[0][3], x);
      }
    }
    function v(A) {
      A.value instanceof Mr ? Promise.resolve(A.value.v).then(g, I) : R(c[0][2], A);
    }
    function g(A) {
      p("next", A);
    }
    function I(A) {
      p("throw", A);
    }
    function R(A, j) {
      A(j), c.shift(), c.length && p(c[0][0], c[0][1]);
    }
  }
  function yy(e) {
    var t, r;
    return t = {}, i("next"), i("throw", function(a) {
      throw a;
    }), i("return"), t[Symbol.iterator] = function() {
      return this;
    }, t;
    function i(a, c) {
      t[a] = e[a] ? function(f) {
        return (r = !r) ? {
          value: Mr(e[a](f)),
          done: false
        } : c ? c(f) : f;
      } : c;
    }
  }
  function by(e) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var t = e[Symbol.asyncIterator], r;
    return t ? t.call(e) : (e = typeof Oc == "function" ? Oc(e) : e[Symbol.iterator](), r = {}, i("next"), i("throw"), i("return"), r[Symbol.asyncIterator] = function() {
      return this;
    }, r);
    function i(c) {
      r[c] = e[c] && function(f) {
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
      const r = t.then((i) => new vr(i));
      return new Mt(r);
    }
    static fromPromise(t, r) {
      const i = t.then((a) => new vr(a)).catch((a) => new ar(r(a)));
      return new Mt(i);
    }
    static fromThrowable(t, r) {
      return (...i) => new Mt(Si(this, void 0, void 0, function* () {
        try {
          return new vr(yield t(...i));
        } catch (a) {
          return new ar(r ? r(a) : a);
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
      return new Mt(this._promise.then((r) => Si(this, void 0, void 0, function* () {
        return r.isErr() ? new ar(r.error) : new vr(yield t(r.value));
      })));
    }
    andThrough(t) {
      return new Mt(this._promise.then((r) => Si(this, void 0, void 0, function* () {
        if (r.isErr()) return new ar(r.error);
        const i = yield t(r.value);
        return i.isErr() ? new ar(i.error) : new vr(r.value);
      })));
    }
    andTee(t) {
      return new Mt(this._promise.then((r) => Si(this, void 0, void 0, function* () {
        if (r.isErr()) return new ar(r.error);
        try {
          yield t(r.value);
        } catch {
        }
        return new vr(r.value);
      })));
    }
    orTee(t) {
      return new Mt(this._promise.then((r) => Si(this, void 0, void 0, function* () {
        if (r.isOk()) return new vr(r.value);
        try {
          yield t(r.error);
        } catch {
        }
        return new ar(r.error);
      })));
    }
    mapErr(t) {
      return new Mt(this._promise.then((r) => Si(this, void 0, void 0, function* () {
        return r.isOk() ? new vr(r.value) : new ar(yield t(r.error));
      })));
    }
    andThen(t) {
      return new Mt(this._promise.then((r) => {
        if (r.isErr()) return new ar(r.error);
        const i = t(r.value);
        return i instanceof Mt ? i._promise : i;
      }));
    }
    orElse(t) {
      return new Mt(this._promise.then((r) => Si(this, void 0, void 0, function* () {
        return r.isErr() ? t(r.error) : new vr(r.value);
      })));
    }
    match(t, r) {
      return this._promise.then((i) => i.match(t, r));
    }
    unwrapOr(t) {
      return this._promise.then((r) => r.unwrapOr(t));
    }
    safeUnwrap() {
      return xc(this, arguments, function* () {
        return yield Mr(yield Mr(yield* yy(by(yield Mr(this._promise.then((r) => r.safeUnwrap()))))));
      });
    }
    then(t, r) {
      return this._promise.then(t, r);
    }
    [Symbol.asyncIterator]() {
      return xc(this, arguments, function* () {
        const r = yield Mr(this._promise);
        return r.isErr() && (yield yield Mr(Ns(r.error))), yield Mr(r.value);
      });
    }
  }
  function Ns(e) {
    return new Mt(Promise.resolve(new ar(e)));
  }
  const fh = (e) => {
    let t = D([]);
    for (const r of e) if (r.isErr()) {
      t = k(r.error);
      break;
    } else t.map((i) => i.push(r.value));
    return t;
  }, vy = (e) => Mt.fromSafePromise(Promise.all(e)).andThen(fh), hh = (e) => {
    let t = D([]);
    for (const r of e) r.isErr() && t.isErr() ? t.error.push(r.error) : r.isErr() && t.isOk() ? t = k([
      r.error
    ]) : r.isOk() && t.isOk() && t.value.push(r.value);
    return t;
  }, _y = (e) => Mt.fromSafePromise(Promise.all(e)).andThen(hh);
  var La;
  (function(e) {
    function t(a, c) {
      return (...f) => {
        try {
          const h = a(...f);
          return D(h);
        } catch (h) {
          return k(c ? c(h) : h);
        }
      };
    }
    e.fromThrowable = t;
    function r(a) {
      return fh(a);
    }
    e.combine = r;
    function i(a) {
      return hh(a);
    }
    e.combineWithAllErrors = i;
  })(La || (La = {}));
  function D(e) {
    return new vr(e);
  }
  function k(e) {
    return new ar(e);
  }
  class vr {
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
      return D(t(this.value));
    }
    mapErr(t) {
      return D(this.value);
    }
    andThen(t) {
      return t(this.value);
    }
    andThrough(t) {
      return t(this.value).map((r) => this.value);
    }
    andTee(t) {
      try {
        t(this.value);
      } catch {
      }
      return D(this.value);
    }
    orTee(t) {
      return D(this.value);
    }
    orElse(t) {
      return D(this.value);
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
    match(t, r) {
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
  class ar {
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
      return Ns(this.error);
    }
    asyncAndThrough(t) {
      return Ns(this.error);
    }
    asyncMap(t) {
      return Ns(this.error);
    }
    unwrapOr(t) {
      return t;
    }
    match(t, r) {
      return r(this.error);
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
  La.fromThrowable;
  var cs = ((e) => (e.GENERIC = "generic", e.VALIDATION = "validation", e.NETWORK = "network", e.GEOLOCATION = "geolocation", e.STORAGE = "storage", e.CONVERSION = "conversion", e.UPDATE_SERVICE = "update_service", e))(cs || {});
  class vn extends Error {
    constructor(t, r) {
      super(t), this.cause = r, this.name = this.constructor.name, r && (this.message = `${t} (caused by: ${r.message})`);
    }
  }
  class ut extends vn {
    constructor(t, r = "GENERIC_ERROR", i) {
      super(t, i);
      __publicField(this, "code");
      __publicField(this, "domain", "generic");
      this.code = r;
    }
  }
  function Ey(e) {
    return e instanceof vn;
  }
  _s = function(e, t = "Unknown error occurred") {
    return Ey(e) ? e : e instanceof Error ? new ut(t, "UNKNOWN_ERROR", e) : new ut(t, "UNKNOWN_ERROR");
  };
  Ti = function(e, t) {
    const r = t ? `[${t}] ` : "";
    console.error(`${r}${e.domain}.${e.code}: ${e.message}`, {
      error: e,
      cause: e.cause,
      stack: e.stack
    });
  };
  class Oe extends vn {
    constructor(t, r, i) {
      super(t, i);
      __publicField(this, "code");
      __publicField(this, "domain", cs.GEOLOCATION);
      this.code = r;
    }
  }
  class Lr extends Oe {
    constructor(t = "Geolocation update service error", r, i) {
      super(t, "UPDATE_SERVICE_ERROR", i), this.serviceName = r;
    }
  }
  var Iy = "2.0.9", Sy = 500, Nc = "user-agent", un = "", Lc = "?", ht = {
    FUNCTION: "function",
    OBJECT: "object",
    STRING: "string",
    UNDEFINED: "undefined"
  }, Gt = "browser", Wr = "cpu", Pr = "device", ur = "engine", Zt = "os", fn = "result", G = "name", L = "type", V = "vendor", B = "version", Lt = "architecture", ns = "major", z = "model", Ls = "console", Pe = "mobile", He = "tablet", gt = "smarttv", _r = "wearable", Es = "xr", Nn = "embedded", Ty = "fetcher", Gi = "inapp", gl = "brands", Ci = "formFactors", ml = "fullVersionList", hn = "platform", wl = "platformVersion", No = "bitness", wi = "sec-ch-ua", My = wi + "-full-version-list", Py = wi + "-arch", ky = wi + "-" + No, Ay = wi + "-form-factors", Ry = wi + "-" + Pe, Cy = wi + "-" + z, dh = wi + "-" + hn, Oy = dh + "-version", ph = [
    gl,
    ml,
    Pe,
    z,
    hn,
    wl,
    Lt,
    Ci,
    No
  ], Is = "Amazon", $i = "Apple", Dc = "ASUS", Fc = "BlackBerry", Mi = "Google", jc = "Huawei", ta = "Lenovo", Uc = "Honor", Ss = "LG", ra = "Microsoft", ia = "Motorola", zc = "Nvidia", Gc = "OnePlus", na = "OPPO", kn = "Samsung", $c = "Sharp", An = "Sony", sa = "Xiaomi", oa = "Zebra", Bc = "Chrome", Wc = "Chromium", ei = "Chromecast", Ds = "Edge", Rn = "Firefox", Bi = "Opera", aa = "Facebook", Vc = "Sogou", Wi = "Mobile ", Vi = " Browser", Da = "Windows", xy = typeof window !== ht.UNDEFINED, Ut = xy && window.navigator ? window.navigator : void 0, Oi = Ut && Ut.userAgentData ? Ut.userAgentData : void 0, Ny = function(e, t) {
    var r = {}, i = t;
    if (!to(t)) {
      i = {};
      for (var a in t) for (var c in t[a]) i[c] = t[a][c].concat(i[c] ? i[c] : []);
    }
    for (var f in e) r[f] = i[f] && i[f].length % 2 === 0 ? i[f].concat(e[f]) : e[f];
    return r;
  }, Lo = function(e) {
    for (var t = {}, r = 0; r < e.length; r++) t[e[r].toUpperCase()] = e[r];
    return t;
  }, Fa = function(e, t) {
    if (typeof e === ht.OBJECT && e.length > 0) {
      for (var r in e) if (ci(t) == ci(e[r])) return true;
      return false;
    }
    return us(e) ? ci(t) == ci(e) : false;
  }, to = function(e, t) {
    for (var r in e) return /^(browser|cpu|device|engine|os)$/.test(r) || (t ? to(e[r]) : false);
  }, us = function(e) {
    return typeof e === ht.STRING;
  }, la = function(e) {
    if (e) {
      for (var t = [], r = dn(/\\?\"/g, e).split(","), i = 0; i < r.length; i++) if (r[i].indexOf(";") > -1) {
        var a = ro(r[i]).split(";v=");
        t[i] = {
          brand: a[0],
          version: a[1]
        };
      } else t[i] = ro(r[i]);
      return t;
    }
  }, ci = function(e) {
    return us(e) ? e.toLowerCase() : e;
  }, ja = function(e) {
    return us(e) ? dn(/[^\d\.]/g, e).split(".")[0] : void 0;
  }, $r = function(e) {
    for (var t in e) if (e.hasOwnProperty(t)) {
      var r = e[t];
      typeof r == ht.OBJECT && r.length == 2 ? this[r[0]] = r[1] : this[r] = void 0;
    }
    return this;
  }, dn = function(e, t) {
    return us(t) ? t.replace(e, un) : t;
  }, Cn = function(e) {
    return dn(/\\?\"/g, e);
  }, ro = function(e, t) {
    return e = dn(/^\s\s*/, String(e)), typeof t === ht.UNDEFINED ? e : e.substring(0, t);
  }, Ua = function(e, t) {
    if (!(!e || !t)) for (var r = 0, i, a, c, f, h, p; r < t.length && !h; ) {
      var v = t[r], g = t[r + 1];
      for (i = a = 0; i < v.length && !h && v[i]; ) if (h = v[i++].exec(e), h) for (c = 0; c < g.length; c++) p = h[++a], f = g[c], typeof f === ht.OBJECT && f.length > 0 ? f.length === 2 ? typeof f[1] == ht.FUNCTION ? this[f[0]] = f[1].call(this, p) : this[f[0]] = f[1] : f.length >= 3 && (typeof f[1] === ht.FUNCTION && !(f[1].exec && f[1].test) ? f.length > 3 ? this[f[0]] = p ? f[1].apply(this, f.slice(2)) : void 0 : this[f[0]] = p ? f[1].call(this, p, f[2]) : void 0 : f.length == 3 ? this[f[0]] = p ? p.replace(f[1], f[2]) : void 0 : f.length == 4 ? this[f[0]] = p ? f[3].call(this, p.replace(f[1], f[2])) : void 0 : f.length > 4 && (this[f[0]] = p ? f[3].apply(this, [
        p.replace(f[1], f[2])
      ].concat(f.slice(4))) : void 0)) : this[f] = p || void 0;
      r += 2;
    }
  }, cr = function(e, t) {
    for (var r in t) if (typeof t[r] === ht.OBJECT && t[r].length > 0) {
      for (var i = 0; i < t[r].length; i++) if (Fa(t[r][i], e)) return r === Lc ? void 0 : r;
    } else if (Fa(t[r], e)) return r === Lc ? void 0 : r;
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
  }, Ly = {
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
          Wi + "Chrome"
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
          Bi + " Mini"
        ]
      ],
      [
        /\bop(?:rg)?x\/([\w\.]+)/i
      ],
      [
        B,
        [
          G,
          Bi + " GX"
        ]
      ],
      [
        /\bopr\/([\w\.]+)/i
      ],
      [
        B,
        [
          G,
          Bi
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
          "Smart " + ta + Vi
        ]
      ],
      [
        /(av(?:ast|g|ira))\/([\w\.]+)/i
      ],
      [
        [
          G,
          /(.+)/,
          "$1 Secure" + Vi
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
          "Norton Private" + Vi
        ]
      ],
      [
        /\bfocus\/([\w\.]+)/i
      ],
      [
        B,
        [
          G,
          Rn + " Focus"
        ]
      ],
      [
        / mms\/([\w\.]+)$/i
      ],
      [
        B,
        [
          G,
          Bi + " Neon"
        ]
      ],
      [
        / opt\/([\w\.]+)$/i
      ],
      [
        B,
        [
          G,
          Bi + " Touch"
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
          Bi + " Coast"
        ]
      ],
      [
        /miuibrowser\/([\w\.]+)/i
      ],
      [
        B,
        [
          G,
          "MIUI" + Vi
        ]
      ],
      [
        /fxios\/([\w\.-]+)/i
      ],
      [
        B,
        [
          G,
          Wi + Rn
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
          "$1" + Vi
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
          L,
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
        G,
        B,
        [
          L,
          Gi
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
          L,
          Gi
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
          L,
          Gi
        ]
      ],
      [
        /\[(linkedin)app\]/i
      ],
      [
        G,
        [
          L,
          Gi
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
          L,
          Gi
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
          L,
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
          "Android" + Vi
        ]
      ],
      [
        /chrome\/([\w\.]+) mobile/i
      ],
      [
        B,
        [
          G,
          Wi + "Chrome"
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
          Wi + "Safari"
        ]
      ],
      [
        /iphone .*mobile(?:\/\w+ | ?)safari/i
      ],
      [
        [
          G,
          Wi + "Safari"
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
          Wi + Rn
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
          Rn + " Reality"
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
          Lt,
          "amd64"
        ]
      ],
      [
        /(ia32(?=;))/i,
        /\b((i[346]|x)86)(pc)?\b/i
      ],
      [
        [
          Lt,
          "ia32"
        ]
      ],
      [
        /\b(aarch64|arm(v?[89]e?l?|_?64))\b/i
      ],
      [
        [
          Lt,
          "arm64"
        ]
      ],
      [
        /\b(arm(v[67])?ht?n?[fl]p?)\b/i
      ],
      [
        [
          Lt,
          "armhf"
        ]
      ],
      [
        /( (ce|mobile); ppc;|\/[\w\.]+arm\b)/i
      ],
      [
        [
          Lt,
          "arm"
        ]
      ],
      [
        / sun4\w[;\)]/i
      ],
      [
        [
          Lt,
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
          Lt,
          /ower/,
          un,
          ci
        ]
      ],
      [
        /mc680.0/i
      ],
      [
        [
          Lt,
          "68k"
        ]
      ],
      [
        /winnt.+\[axp/i
      ],
      [
        [
          Lt,
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
          L,
          He
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
          L,
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
          $i
        ],
        [
          L,
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
          $i
        ],
        [
          L,
          He
        ]
      ],
      [
        /(macintosh);/i
      ],
      [
        z,
        [
          V,
          $i
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
          L,
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
          L,
          He
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
          L,
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
          L,
          He
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
          L,
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
          L,
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
          z,
          /_/g,
          " "
        ],
        [
          V,
          sa
        ],
        [
          L,
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
          L,
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
          L,
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
          cr,
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
          L,
          He
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
          L,
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
          L,
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
          L,
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
          L,
          He
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
          L,
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
          ia
        ],
        [
          L,
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
          ia
        ],
        [
          L,
          He
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
          L,
          He
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
          L,
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
          L,
          He
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
          L,
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
          Mi
        ],
        [
          L,
          He
        ]
      ],
      [
        /droid.+;(?: google)? (g(01[13]a|020[aem]|025[jn]|1b60|1f8f|2ybb|4s1m|576d|5nz6|8hhn|8vou|a02099|c15s|d1yq|e2ae|ec77|gh2x|kv4x|p4bc|pj41|r83y|tt9q|ur25|wvk6)|pixel[\d ]*a?( pro)?( xl)?( fold)?( \(5g\))?)( bui|\))/i
      ],
      [
        z,
        [
          V,
          Mi
        ],
        [
          L,
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
          L,
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
          L,
          He
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
          L,
          He
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
          L,
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
          L,
          He
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
          L,
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
          L,
          He
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
          L,
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
          L,
          He
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
          L,
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
          L,
          He
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
          L,
          Pe
        ]
      ],
      [
        /(itel) ((\w+))/i
      ],
      [
        [
          V,
          ci
        ],
        z,
        [
          L,
          cr,
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
          L,
          He
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
          L,
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
          L,
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
          L,
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
          L,
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
          L,
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
          L,
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
          L,
          He
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
          L,
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
          L,
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
          L,
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
        V,
        z,
        [
          L,
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
          L,
          He
        ]
      ],
      [
        /(surface duo)/i
      ],
      [
        z,
        [
          V,
          ra
        ],
        [
          L,
          He
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
          L,
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
          L,
          He
        ]
      ],
      [
        /(sprint) (\w+)/i
      ],
      [
        V,
        z,
        [
          L,
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
          ra
        ],
        [
          L,
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
          L,
          He
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
          L,
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
          L,
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
          L,
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
          L,
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
          L,
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
          $i + " TV"
        ],
        [
          L,
          gt
        ]
      ],
      [
        /crkey.*devicetype\/chromecast/i
      ],
      [
        [
          z,
          ei + " Third Generation"
        ],
        [
          V,
          Mi
        ],
        [
          L,
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
          Mi
        ],
        [
          L,
          gt
        ]
      ],
      [
        /fuchsia.*crkey/i
      ],
      [
        [
          z,
          ei + " Nest Hub"
        ],
        [
          V,
          Mi
        ],
        [
          L,
          gt
        ]
      ],
      [
        /crkey/i
      ],
      [
        [
          z,
          ei
        ],
        [
          V,
          Mi
        ],
        [
          L,
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
          L,
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
          L,
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
          L,
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
          L,
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
          L,
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
          L,
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
          L,
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
          cr,
          {
            LG: "lge"
          }
        ],
        [
          z,
          ro
        ],
        [
          L,
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
          L,
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
          ra
        ],
        [
          L,
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
          cr,
          {
            Nvidia: "Shield",
            Anbernic: "RGCUBE",
            Logitech: "GR0006"
          }
        ],
        z,
        [
          L,
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
          kn
        ],
        [
          L,
          _r
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
          L,
          _r
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
          L,
          _r
        ]
      ],
      [
        /(watch)(?: ?os[,\/]|\d,\d\/)[\d\.]+/i
      ],
      [
        z,
        [
          V,
          $i
        ],
        [
          L,
          _r
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
          L,
          _r
        ]
      ],
      [
        /(moto 360)/i
      ],
      [
        z,
        [
          V,
          ia
        ],
        [
          L,
          _r
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
          L,
          _r
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
          L,
          _r
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
          L,
          _r
        ]
      ],
      [
        /droid.+; (glass) \d/i
      ],
      [
        z,
        [
          V,
          Mi
        ],
        [
          L,
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
          L,
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
          L,
          Es
        ]
      ],
      [
        /mobile vr; rv.+firefox/i
      ],
      [
        [
          L,
          Es
        ]
      ],
      [
        /(tesla)(?: qtcarbrowser|\/[-\w\.]+)/i
      ],
      [
        V,
        [
          L,
          Nn
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
          L,
          Nn
        ]
      ],
      [
        /(homepod).+mac os/i
      ],
      [
        z,
        [
          V,
          $i
        ],
        [
          L,
          Nn
        ]
      ],
      [
        /windows iot/i
      ],
      [
        [
          L,
          Nn
        ]
      ],
      [
        /droid.+; ([\w- ]+) (4k|android|smart|google)[- ]?tv/i
      ],
      [
        z,
        [
          L,
          gt
        ]
      ],
      [
        /\b((4k|android|smart|opera)[- ]?tv|tv; rv:|large screen[\w ]+safari)\b/i
      ],
      [
        [
          L,
          gt
        ]
      ],
      [
        /droid .+?; ([^;]+?)(?: bui|; wv\)|\) applew|; hmsc).+?(mobile|vr|\d) safari/i
      ],
      [
        z,
        [
          L,
          cr,
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
          L,
          He
        ]
      ],
      [
        /(phone|mobile(?:[;\/]| [ \w\/\.]*safari)|pda(?=.+windows ce))/i
      ],
      [
        [
          L,
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
          cr,
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
          cr,
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
          ei + " Android"
        ]
      ],
      [
        /fuchsia.*crkey\/([\d\.]+)/i
      ],
      [
        B,
        [
          G,
          ei + " Fuchsia"
        ]
      ],
      [
        /crkey\/([\d\.]+).*devicetype\/smartspeaker/i
      ],
      [
        B,
        [
          G,
          ei + " SmartSpeaker"
        ]
      ],
      [
        /linux.*crkey\/([\d\.]+)/i
      ],
      [
        B,
        [
          G,
          ei + " Linux"
        ]
      ],
      [
        /crkey\/([\d\.]+)/i
      ],
      [
        B,
        [
          G,
          ei
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
          Rn + " OS"
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
          cr,
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
    return $r.call(e.init, [
      [
        Gt,
        [
          G,
          B,
          ns,
          L
        ]
      ],
      [
        Wr,
        [
          Lt
        ]
      ],
      [
        Pr,
        [
          L,
          z,
          V
        ]
      ],
      [
        ur,
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
    ]), $r.call(e.isIgnore, [
      [
        Gt,
        [
          B,
          ns
        ]
      ],
      [
        ur,
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
    ]), $r.call(e.isIgnoreRgx, [
      [
        Gt,
        / ?browser$/i
      ],
      [
        Zt,
        / ?os$/i
      ]
    ]), $r.call(e.toString, [
      [
        Gt,
        [
          G,
          B
        ]
      ],
      [
        Wr,
        [
          Lt
        ]
      ],
      [
        Pr,
        [
          V,
          z
        ]
      ],
      [
        ur,
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
    var r = Ts.init[t], i = Ts.isIgnore[t] || 0, a = Ts.isIgnoreRgx[t] || 0, c = Ts.toString[t] || 0;
    function f() {
      $r.call(this, r);
    }
    return f.prototype.getItem = function() {
      return e;
    }, f.prototype.withClientHints = function() {
      return Oi ? Oi.getHighEntropyValues(ph).then(function(h) {
        return e.setCH(new gh(h, false)).parseCH().get();
      }) : e.parseCH().get();
    }, f.prototype.withFeatureCheck = function() {
      return e.detectFeature().get();
    }, t != fn && (f.prototype.is = function(h) {
      var p = false;
      for (var v in this) if (this.hasOwnProperty(v) && !Fa(i, v) && ci(a ? dn(a, this[v]) : this[v]) == ci(a ? dn(a, h) : h)) {
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
  function gh(e, t) {
    if (e = e || {}, $r.call(this, ph), t) $r.call(this, [
      [
        gl,
        la(e[wi])
      ],
      [
        ml,
        la(e[My])
      ],
      [
        Pe,
        /\?1/.test(e[Ry])
      ],
      [
        z,
        Cn(e[Cy])
      ],
      [
        hn,
        Cn(e[dh])
      ],
      [
        wl,
        Cn(e[Oy])
      ],
      [
        Lt,
        Cn(e[Py])
      ],
      [
        Ci,
        la(e[Ay])
      ],
      [
        No,
        Cn(e[ky])
      ]
    ]);
    else for (var r in e) this.hasOwnProperty(r) && typeof e[r] !== ht.UNDEFINED && (this[r] = e[r]);
  }
  function di(e, t, r, i) {
    return $r.call(this, [
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
        r
      ],
      [
        "data",
        Dy(this, e)
      ]
    ]), this;
  }
  di.prototype.get = function(e) {
    return e ? this.data.hasOwnProperty(e) ? this.data[e] : void 0 : this.data;
  };
  di.prototype.set = function(e, t) {
    return this.data[e] = t, this;
  };
  di.prototype.setCH = function(e) {
    return this.uaCH = e, this;
  };
  di.prototype.detectFeature = function() {
    if (Ut && Ut.userAgent == this.ua) switch (this.itemType) {
      case Gt:
        Ut.brave && typeof Ut.brave.isBrave == ht.FUNCTION && this.set(G, "Brave");
        break;
      case Pr:
        !this.get(L) && Oi && Oi[Pe] && this.set(L, Pe), this.get(z) == "Macintosh" && Ut && typeof Ut.standalone !== ht.UNDEFINED && Ut.maxTouchPoints && Ut.maxTouchPoints > 2 && this.set(z, "iPad").set(L, He);
        break;
      case Zt:
        !this.get(G) && Oi && Oi[hn] && this.set(G, Oi[hn]);
        break;
      case fn:
        var e = this.data, t = function(r) {
          return e[r].getItem().detectFeature().get();
        };
        this.set(Gt, t(Gt)).set(Wr, t(Wr)).set(Pr, t(Pr)).set(ur, t(ur)).set(Zt, t(Zt));
    }
    return this;
  };
  di.prototype.parseUA = function() {
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
  di.prototype.parseCH = function() {
    var e = this.uaCH, t = this.rgxMap;
    switch (this.itemType) {
      case Gt:
      case ur:
        var r = e[ml] || e[gl], i;
        if (r) for (var a = 0; a < r.length; a++) {
          var c = r[a].brand || r[a], f = r[a].version;
          this.itemType == Gt && !/not.a.brand/i.test(c) && (!i || /Chrom/.test(i) && c != Wc || i == Ds && /WebView2/.test(c)) && (c = cr(c, Ly), i = this.get(G), i && !/Chrom/.test(i) && /Chrom/.test(c) || this.set(G, c).set(B, f).set(ns, ja(f)), i = c), this.itemType == ur && c == Wc && this.set(B, f);
        }
        break;
      case Wr:
        var h = e[Lt];
        h && (h && e[No] == "64" && (h += "64"), Ua.call(this.data, h + ";", t));
        break;
      case Pr:
        if (e[Pe] && this.set(L, Pe), e[z] && (this.set(z, e[z]), !this.get(L) || !this.get(V))) {
          var p = {};
          Ua.call(p, "droid 9; " + e[z] + ")", t), !this.get(L) && p.type && this.set(L, p.type), !this.get(V) && p.vendor && this.set(V, p.vendor);
        }
        if (e[Ci]) {
          var v;
          if (typeof e[Ci] != "string") for (var g = 0; !v && g < e[Ci].length; ) v = cr(e[Ci][g++], Kc);
          else v = cr(e[Ci], Kc);
          this.set(L, v);
        }
        break;
      case Zt:
        var I = e[hn];
        if (I) {
          var R = e[wl];
          I == Da && (R = parseInt(ja(R), 10) >= 13 ? "11" : "10"), this.set(G, I).set(B, R);
        }
        this.get(G) == Da && e[z] == "Xbox" && this.set(G, "Xbox").set(B, void 0);
        break;
      case fn:
        var A = this.data, j = function(x) {
          return A[x].getItem().setCH(e).parseCH().get();
        };
        this.set(Gt, j(Gt)).set(Wr, j(Wr)).set(Pr, j(Pr)).set(ur, j(ur)).set(Zt, j(Zt));
    }
    return this;
  };
  Zr = function(e, t, r) {
    if (typeof e === ht.OBJECT ? (to(e, true) ? (typeof t === ht.OBJECT && (r = t), t = e) : (r = e, t = void 0), e = void 0) : typeof e === ht.STRING && !to(t, true) && (r = t, t = void 0), r) if (typeof r.append === ht.FUNCTION) {
      var i = {};
      r.forEach(function(g, I) {
        i[String(I).toLowerCase()] = g;
      }), r = i;
    } else {
      var a = {};
      for (var c in r) r.hasOwnProperty(c) && (a[String(c).toLowerCase()] = r[c]);
      r = a;
    }
    if (!(this instanceof Zr)) return new Zr(e, t, r).getResult();
    var f = typeof e === ht.STRING ? e : r && r[Nc] ? r[Nc] : Ut && Ut.userAgent ? Ut.userAgent : un, h = new gh(r, true), p = t ? Ny(Hc, t) : Hc, v = function(g) {
      return g == fn ? function() {
        return new di(g, f, p, h).set("ua", f).set(Gt, this.getBrowser()).set(Wr, this.getCPU()).set(Pr, this.getDevice()).set(ur, this.getEngine()).set(Zt, this.getOS()).get();
      } : function() {
        return new di(g, f, p[g], h).parseUA().get();
      };
    };
    return $r.call(this, [
      [
        "getBrowser",
        v(Gt)
      ],
      [
        "getCPU",
        v(Wr)
      ],
      [
        "getDevice",
        v(Pr)
      ],
      [
        "getEngine",
        v(ur)
      ],
      [
        "getOS",
        v(Zt)
      ],
      [
        "getResult",
        v(fn)
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
          return us(g) && (f = ro(g, Sy)), this;
        }
      ]
    ]).setUA(f), this;
  };
  Zr.VERSION = Iy;
  Zr.BROWSER = Lo([
    G,
    B,
    ns,
    L
  ]);
  Zr.CPU = Lo([
    Lt
  ]);
  Zr.DEVICE = Lo([
    z,
    V,
    L,
    Ls,
    Pe,
    gt,
    He,
    _r,
    Nn
  ]);
  Zr.ENGINE = Zr.OS = Lo([
    G,
    B
  ]);
  var ft = ((e) => (e.TAURI = "tauri", e.WEB = "web", e.MOBILE_WEB = "mobile_web", e.UNKNOWN = "unknown", e))(ft || {});
  class Fy {
    constructor() {
      __publicField(this, "parser");
      const t = typeof navigator < "u" ? navigator.userAgent : "";
      this.parser = new Zr(t);
    }
    detectEnvironment() {
      return this.isTauriEnvironment() ? ft.TAURI : this.parser.getDevice().type === "mobile" ? ft.MOBILE_WEB : ft.WEB;
    }
    isTauriEnvironment() {
      return false;
    }
    getPlatformContext() {
      const t = this.detectEnvironment(), r = this.parser.getDevice(), i = this.parser.getBrowser(), a = this.parser.getOS();
      return {
        environment: t,
        capabilities: this.getPlatformCapabilities(t),
        configuration: this.getDefaultConfiguration(t),
        userAgent: typeof navigator < "u" ? navigator.userAgent : "",
        isMobile: r.type === "mobile",
        isTablet: r.type === "tablet",
        browser: i.name || void 0,
        os: a.name || void 0
      };
    }
    getPlatformCapabilities(t) {
      const r = {
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
            ...r,
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
              ...r.permissions,
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
            ...r,
            geolocation: {
              ...r.geolocation,
              highAccuracy: false,
              kalmanFilter: true
            },
            permissions: {
              ...r.permissions,
              geolocation: true
            },
            sensors: {
              ...r.sensors,
              highAccuracy: true
            }
          };
        case ft.WEB:
        case ft.UNKNOWN:
        default:
          return r;
      }
    }
    getDefaultConfiguration(t) {
      const r = {
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
            ...r,
            storage: {
              ...r.storage,
              filePath: "user-data.json",
              autoSave: false
            },
            geolocation: {
              ...r.geolocation,
              tauriHandler: "get_geolocation"
            },
            fileSystem: {
              ...r.fileSystem,
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
            ...r,
            storage: {
              ...r.storage,
              dbName: "mobile-trackmaker-db",
              storeName: "user-data"
            },
            geolocation: {
              ...r.geolocation,
              timeout: 2e4,
              maximumAge: 5e3,
              enableHighAccuracy: true
            }
          };
        case ft.WEB:
        case ft.UNKNOWN:
        default:
          return {
            ...r,
            storage: {
              ...r.storage,
              dbName: "trackmaker-db",
              storeName: "user-data"
            }
          };
      }
    }
    validate() {
      try {
        const t = this.getPlatformContext();
        return !t.environment || !t.capabilities ? k(new ut("Invalid platform detection results")) : (console.info("[PlatformDetector] Platform detected:", {
          environment: t.environment,
          isMobile: t.isMobile,
          isTablet: t.isTablet,
          browser: t.browser,
          os: t.os
        }), D(true));
      } catch (t) {
        return k(new ut("Platform detection failed", void 0, t));
      }
    }
  }
  const yl = new Fy();
  $v = function() {
    return yl.getPlatformContext();
  };
  function _t(e, t, r, i) {
    if (typeof t == "function" ? e !== t || !i : !t.has(e)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
    return r === "m" ? i : r === "a" ? i.call(e) : i ? i.value : t.get(e);
  }
  function Ji(e, t, r, i, a) {
    if (typeof t == "function" ? e !== t || true : !t.has(e)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
    return t.set(e, r), r;
  }
  var Pi, rr, qi, Ms, Fs;
  const Zc = "__TAURI_TO_IPC_KEY__";
  function mh(e, t = false) {
    return window.__TAURI_INTERNALS__.transformCallback(e, t);
  }
  Bv = class {
    constructor(t) {
      Pi.set(this, void 0), rr.set(this, 0), qi.set(this, []), Ms.set(this, void 0), Ji(this, Pi, t || (() => {
      })), this.id = mh((r) => {
        const i = r.index;
        if ("end" in r) {
          i == _t(this, rr, "f") ? this.cleanupCallback() : Ji(this, Ms, i);
          return;
        }
        const a = r.message;
        if (i == _t(this, rr, "f")) {
          for (_t(this, Pi, "f").call(this, a), Ji(this, rr, _t(this, rr, "f") + 1); _t(this, rr, "f") in _t(this, qi, "f"); ) {
            const c = _t(this, qi, "f")[_t(this, rr, "f")];
            _t(this, Pi, "f").call(this, c), delete _t(this, qi, "f")[_t(this, rr, "f")], Ji(this, rr, _t(this, rr, "f") + 1);
          }
          _t(this, rr, "f") === _t(this, Ms, "f") && this.cleanupCallback();
        } else _t(this, qi, "f")[i] = a;
      });
    }
    cleanupCallback() {
      window.__TAURI_INTERNALS__.unregisterCallback(this.id);
    }
    set onmessage(t) {
      Ji(this, Pi, t);
    }
    get onmessage() {
      return _t(this, Pi, "f");
    }
    [(Pi = /* @__PURE__ */ new WeakMap(), rr = /* @__PURE__ */ new WeakMap(), qi = /* @__PURE__ */ new WeakMap(), Ms = /* @__PURE__ */ new WeakMap(), Zc)]() {
      return `__CHANNEL__:${this.id}`;
    }
    toJSON() {
      return this[Zc]();
    }
  };
  Wv = async function(e) {
    return ct(`plugin:${e}|check_permissions`);
  };
  ct = async function(e, t = {}, r) {
    return window.__TAURI_INTERNALS__.invoke(e, t, r);
  };
  class jy {
    get rid() {
      return _t(this, Fs, "f");
    }
    constructor(t) {
      Fs.set(this, void 0), Ji(this, Fs, t);
    }
    async close() {
      return ct("plugin:resources|close", {
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
    window.__TAURI_EVENT_PLUGIN_INTERNALS__.unregisterListener(e, t), await ct("plugin:event|unlisten", {
      event: e,
      eventId: t
    });
  }
  async function Yc(e, t, r) {
    var i;
    const a = (i = void 0) !== null && i !== void 0 ? i : {
      kind: "Any"
    };
    return ct("plugin:event|listen", {
      event: e,
      target: a,
      handler: mh(t)
    }).then((c) => async () => Uy(e, c));
  }
  async function zy(e, t) {
    return await io.load(e, t);
  }
  class io extends jy {
    constructor(t) {
      super(t);
    }
    static async load(t, r) {
      const i = await ct("plugin:store|load", {
        path: t,
        options: r
      });
      return new io(i);
    }
    static async get(t) {
      return await ct("plugin:store|get_store", {
        path: t
      }).then((r) => r ? new io(r) : null);
    }
    async set(t, r) {
      await ct("plugin:store|set", {
        rid: this.rid,
        key: t,
        value: r
      });
    }
    async get(t) {
      const [r, i] = await ct("plugin:store|get", {
        rid: this.rid,
        key: t
      });
      return i ? r : void 0;
    }
    async has(t) {
      return await ct("plugin:store|has", {
        rid: this.rid,
        key: t
      });
    }
    async delete(t) {
      return await ct("plugin:store|delete", {
        rid: this.rid,
        key: t
      });
    }
    async clear() {
      await ct("plugin:store|clear", {
        rid: this.rid
      });
    }
    async reset() {
      await ct("plugin:store|reset", {
        rid: this.rid
      });
    }
    async keys() {
      return await ct("plugin:store|keys", {
        rid: this.rid
      });
    }
    async values() {
      return await ct("plugin:store|values", {
        rid: this.rid
      });
    }
    async entries() {
      return await ct("plugin:store|entries", {
        rid: this.rid
      });
    }
    async length() {
      return await ct("plugin:store|length", {
        rid: this.rid
      });
    }
    async reload(t) {
      await ct("plugin:store|reload", {
        rid: this.rid,
        ...t
      });
    }
    async save() {
      await ct("plugin:store|save", {
        rid: this.rid
      });
    }
    async onKeyChange(t, r) {
      return await Yc("store://change", (i) => {
        i.payload.resourceId === this.rid && i.payload.key === t && r(i.payload.exists ? i.payload.value : void 0);
      });
    }
    async onChange(t) {
      return await Yc("store://change", (r) => {
        r.payload.resourceId === this.rid && t(r.payload.key, r.payload.exists ? r.payload.value : void 0);
      });
    }
  }
  class Fe extends vn {
    constructor(t, r, i) {
      super(t, i);
      __publicField(this, "domain", cs.STORAGE);
      this.code = r;
    }
  }
  var De = ((e) => (e.INITIALIZATION_FAILED = "INITIALIZATION_FAILED", e.NOT_INITIALIZED = "NOT_INITIALIZED", e.SET_FAILED = "SET_FAILED", e.GET_FAILED = "GET_FAILED", e.SAVE_FAILED = "SAVE_FAILED", e.EXPORT_FAILED = "EXPORT_FAILED", e.CLEAR_FAILED = "CLEAR_FAILED", e.REMOVE_FAILED = "REMOVE_FAILED", e))(De || {});
  class Qe extends vn {
    constructor(t, r, i) {
      super(t, i);
      __publicField(this, "domain", cs.GEOLOCATION);
      this.code = r;
    }
  }
  var qe = ((e) => (e.INITIALIZATION_FAILED = "INITIALIZATION_FAILED", e.NOT_INITIALIZED = "NOT_INITIALIZED", e.PERMISSION_DENIED = "PERMISSION_DENIED", e.POSITION_UNAVAILABLE = "POSITION_UNAVAILABLE", e.TIMEOUT = "TIMEOUT", e.UNSUPPORTED = "UNSUPPORTED", e.WATCH_FAILED = "WATCH_FAILED", e.CLEAR_WATCH_FAILED = "CLEAR_WATCH_FAILED", e))(qe || {});
  class Ki extends vn {
    constructor(t, r, i) {
      super(t, i);
      __publicField(this, "domain", cs.GENERIC);
      this.code = r;
    }
  }
  var Ai = ((e) => (e.DETECTION_FAILED = "DETECTION_FAILED", e.INVALID_CONTEXT = "INVALID_CONTEXT", e.UNSUPPORTED_PLATFORM = "UNSUPPORTED_PLATFORM", e.NOT_INITIALIZED = "NOT_INITIALIZED", e))(Ai || {});
  class Gy {
    constructor(t = "user-data.json") {
      __publicField(this, "store", null);
      __publicField(this, "initialized", false);
      __publicField(this, "storePath");
      this.storePath = t;
    }
    async init() {
      if (this.initialized) return D(void 0);
      try {
        return this.store = await zy(this.storePath, {
          autoSave: false,
          defaults: {}
        }), this.initialized = true, D(void 0);
      } catch (t) {
        return k(new Fe("Failed to initialize Tauri storage", De.INITIALIZATION_FAILED, t));
      }
    }
    async set(t, r) {
      if (!this.store) return k(new Fe("Tauri store not initialized", De.NOT_INITIALIZED));
      try {
        return await this.store.set(t, r), D(void 0);
      } catch (i) {
        return k(new Fe(`Failed to set value for key: ${t}`, De.SET_FAILED, i));
      }
    }
    async get(t) {
      if (!this.store) return k(new Fe("Tauri store not initialized", De.NOT_INITIALIZED));
      try {
        const r = await this.store.get(t);
        return D(r ?? null);
      } catch (r) {
        return k(new Fe(`Failed to get value for key: ${t}`, De.GET_FAILED, r));
      }
    }
    async save() {
      if (!this.store) return k(new Fe("Tauri store not initialized", De.NOT_INITIALIZED));
      try {
        return await this.store.save(), D(void 0);
      } catch (t) {
        return k(new Fe("Failed to save store", De.SAVE_FAILED, t));
      }
    }
    async exportToJson() {
      if (!this.store) return k(new Fe("Tauri store not initialized", De.NOT_INITIALIZED));
      try {
        const t = await this.store.keys(), r = {};
        for (const i of t) {
          const a = await this.store.get(i);
          r[i] = a;
        }
        return D(JSON.stringify(r, null, 2));
      } catch (t) {
        return k(new Fe("Failed to export data to JSON", De.EXPORT_FAILED, t));
      }
    }
    async clear() {
      if (!this.store) return k(new Fe("Tauri store not initialized", De.NOT_INITIALIZED));
      try {
        const t = await this.store.keys();
        for (const r of t) await this.store.delete(r);
        return D(void 0);
      } catch (t) {
        return k(new Fe("Failed to clear store", De.CLEAR_FAILED, t));
      }
    }
    async remove(t) {
      if (!this.store) return k(new Fe("Tauri store not initialized", De.NOT_INITIALIZED));
      try {
        return await this.store.delete(t), D(void 0);
      } catch (r) {
        return k(new Fe(`Failed to remove key: ${t}`, De.REMOVE_FAILED, r));
      }
    }
    async scanKeys(t) {
      if (!this.store) return k(new Fe("Tauri store not initialized", De.NOT_INITIALIZED));
      try {
        const i = (await this.store.keys()).filter((a) => a.startsWith(t));
        return D(i);
      } catch (r) {
        return k(new Fe("Failed to scan keys", De.GET_FAILED, r));
      }
    }
    async batchSet(t) {
      if (!this.store) return k(new Fe("Tauri store not initialized", De.NOT_INITIALIZED));
      try {
        for (const { key: r, value: i } of t) await this.store.set(r, i);
        return D(void 0);
      } catch (r) {
        return k(new Fe("Failed to batch set values", De.SET_FAILED, r));
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
  Vv = () => $y.filter((e) => e.userFacing);
  By = "trackmaker_settings";
  Wy = typeof window < "u" && window.__TAURI_INTERNALS__ !== void 0;
  function Je(e) {
    try {
      if (typeof localStorage > "u") return ca[e];
      const t = localStorage.getItem(By);
      if (t !== null) return JSON.parse(t)[e] ?? ca[e];
    } catch {
    }
    return ca[e];
  }
  function za() {
    return Je("debugMode");
  }
  function wh() {
    return Je("gpsUpdateInterval");
  }
  function Vy() {
    return Je("kalmanGpsUpdateInterval");
  }
  function qy() {
    return Je("enableKalmanFilter");
  }
  qv = function() {
    return Je("mapZoomLevel");
  };
  Kv = function() {
    return Je("keepScreenOn");
  };
  Hv = function() {
    return Je("mapTileServer");
  };
  Zv = function() {
    return Je("showCompass");
  };
  Jv = function() {
    return Je("autoRecenterTimeout");
  };
  Yv = function() {
    return Je("customMapTileUrl");
  };
  Xv = function() {
    return Je("mapTilerApiKey");
  };
  Qv = function() {
    return Je("nightModeMapStyleUrl");
  };
  function Ga() {
    return Je("imuUpdateFrequency");
  }
  function Ky() {
    return Je("kalmanInitialAccelerationUncertainty");
  }
  function Hy() {
    return Je("kalmanInitialPositionUncertainty");
  }
  function Zy() {
    return Je("kalmanInitialVelocityUncertainty");
  }
  function Jy() {
    return Je("kalmanGpsSpeedUncertainty");
  }
  e1 = function() {
    return Je("routeSimplificationChunkSize");
  };
  t1 = function() {
    return Je("routeSimplificationThreshold");
  };
  r1 = function() {
    return Je("routeSimplificationMaxIterations");
  };
  i1 = function() {
    return Je("routeSimplificationMaxDistance");
  };
  n1 = function() {
    return Je("routeSimplificationMinDistance");
  };
  class Yy {
    constructor(t = "trackmaker-db", r = "user-data") {
      __publicField(this, "db", null);
      __publicField(this, "initialized", false);
      __publicField(this, "dbName");
      __publicField(this, "storeName");
      this.dbName = t, this.storeName = r;
    }
    getMaxCacheSize() {
      try {
        return Je("maxCacheSize") || 100;
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
      if (this.db) return new Promise((t, r) => {
        const i = this.db.transaction(this.storeName, "readwrite"), c = i.objectStore(this.storeName).index("timestamp").openCursor(null, "prev"), f = 100;
        let h = 0;
        c.onsuccess = (p) => {
          const v = p.target.result;
          v && h < f && (v.delete(), h++, v.continue());
        }, i.oncomplete = () => t(), i.onerror = () => r(new Error("Failed to prune cache"));
      });
    }
    async init() {
      if (this.initialized) return D(void 0);
      try {
        return this.db = await this.openDatabase(), this.initialized = true, D(void 0);
      } catch (t) {
        return k(new Fe("Failed to initialize Web storage", De.INITIALIZATION_FAILED, t));
      }
    }
    openDatabase() {
      return new Promise((t, r) => {
        const i = indexedDB.open(this.dbName, 1);
        i.onupgradeneeded = (a) => {
          const c = a.target.result;
          c.objectStoreNames.contains(this.storeName) || c.createObjectStore(this.storeName);
        }, i.onsuccess = (a) => {
          t(a.target.result);
        }, i.onerror = (a) => {
          r(a.target.error ?? Error("Failed to open database"));
        };
      });
    }
    async set(t, r) {
      if (!this.db) return k(new Fe("Database not initialized", De.NOT_INITIALIZED));
      try {
        return await this.shouldPruneCache() && await this.pruneCache(), await this.executeTransaction("readwrite", (i) => new Promise((a, c) => {
          const f = i.put(xa(r), t);
          f.onsuccess = () => a(), f.onerror = () => c(new Error("Failed to set value"));
        })), D(void 0);
      } catch (i) {
        return k(new Fe(`Failed to set value for key: ${t}`, De.SET_FAILED, i));
      }
    }
    async get(t) {
      if (!this.db) return k(new Fe("Database not initialized", De.NOT_INITIALIZED));
      try {
        const r = await this.executeTransaction("readonly", (i) => new Promise((a, c) => {
          const f = i.get(t);
          f.onsuccess = () => a(f.result), f.onerror = () => c(new Error("Failed to get value"));
        }));
        return D(r);
      } catch (r) {
        return k(new Fe(`Failed to get value for key: ${t}`, De.GET_FAILED, r));
      }
    }
    async save() {
      return D(void 0);
    }
    async exportToJson() {
      if (!this.db) return k(new Fe("Database not initialized", De.NOT_INITIALIZED));
      try {
        const t = await this.executeTransaction("readonly", (r) => new Promise((i, a) => {
          const c = r.getAll();
          c.onsuccess = () => {
            const h = c.result.reduce((p, v, g) => (p[g] = v, p), {});
            i(h);
          }, c.onerror = () => a(new Error("Failed to export data"));
        }));
        return D(JSON.stringify(t, null, 2));
      } catch (t) {
        return k(new Fe("Failed to export data to JSON", De.EXPORT_FAILED, t));
      }
    }
    async clear() {
      if (!this.db) return k(new Fe("Database not initialized", De.NOT_INITIALIZED));
      try {
        return await this.executeTransaction("readwrite", (t) => new Promise((r, i) => {
          const a = t.clear();
          a.onsuccess = () => r(), a.onerror = () => i(new Error("Failed to clear store"));
        })), D(void 0);
      } catch (t) {
        return k(new Fe("Failed to clear store", De.CLEAR_FAILED, t));
      }
    }
    async remove(t) {
      if (!this.db) return k(new Fe("Database not initialized", De.NOT_INITIALIZED));
      try {
        return await this.executeTransaction("readwrite", (r) => new Promise((i, a) => {
          const c = r.delete(t);
          c.onsuccess = () => i(), c.onerror = () => a(new Error("Failed to remove key"));
        })), D(void 0);
      } catch (r) {
        return k(new Fe(`Failed to remove key: ${t}`, De.REMOVE_FAILED, r));
      }
    }
    async scanKeys(t) {
      if (!this.db) return k(new Fe("Database not initialized", De.NOT_INITIALIZED));
      try {
        const r = await this.executeTransaction("readonly", (i) => new Promise((a, c) => {
          const f = IDBKeyRange.bound(t, t + "\uFFFF"), h = i.openCursor(f), p = [];
          h.onsuccess = (v) => {
            const g = v.target.result;
            if (g) {
              const I = g.key;
              p.push(String(I)), g.continue();
            } else a(p);
          }, h.onerror = () => c(new Error("Failed to scan keys"));
        }));
        return D(r);
      } catch (r) {
        return k(new Fe("Scan failed", De.GET_FAILED, r));
      }
    }
    async batchSet(t) {
      if (!this.db) return k(new Fe("Database not initialized", De.NOT_INITIALIZED));
      try {
        return await this.executeTransaction("readwrite", (r) => new Promise((i, a) => {
          let c = 0;
          for (const { key: f, value: h } of t) {
            const p = r.put(xa(h), f);
            p.onsuccess = () => {
              c++, c === t.length && i();
            }, p.onerror = () => a(new Error("Batch set failed"));
          }
          t.length === 0 && i();
        })), D(void 0);
      } catch (r) {
        return k(new Fe("Batch set failed", De.SET_FAILED, r));
      }
    }
    executeTransaction(t, r) {
      return new Promise((i, a) => {
        if (!this.db) {
          a(new Error("Database not initialized"));
          return;
        }
        const c = this.db.transaction(this.storeName, t), f = c.objectStore(this.storeName);
        r(f).then(i).catch(a), c.onerror = () => {
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
      return this.initialized ? D(void 0) : this.isMobile ? this.initMobile(t) : this.initDesktop(t);
    }
    async initMobile(t) {
      try {
        const r = await Kn(() => import("./index-3j84-nKY.js"), [], import.meta.url);
        this.tauriGeolocation = {
          checkPermissions: r.checkPermissions,
          requestPermissions: r.requestPermissions,
          getCurrentPosition: r.getCurrentPosition,
          watchPosition: r.watchPosition,
          clearWatch: r.clearWatch
        };
        const i = await this.tauriGeolocation.checkPermissions();
        if (i.location === "prompt" || i.location === "prompt-with-rationale") {
          const a = await this.tauriGeolocation.requestPermissions([
            "location"
          ]);
          if (a.location !== "granted") if (t) {
            if (!await t(a.location, "permission.location.prompt")) return k(new Qe("Geolocation permission denied", qe.PERMISSION_DENIED));
          } else return k(new Qe("Geolocation permission not granted", qe.PERMISSION_DENIED));
        } else if (i.location === "denied") return k(new Qe("Geolocation permission denied", qe.PERMISSION_DENIED));
        return this.initialized = true, D(void 0);
      } catch (r) {
        return k(new Qe("Failed to initialize mobile geolocation", qe.INITIALIZATION_FAILED, r));
      }
    }
    async initDesktop(t) {
      try {
        await ct("init_geolocation_manager");
        const r = await this.getPermissionStatus();
        if (r.isErr()) return k(r.error);
        if (r.value === "prompt") {
          let i = false;
          try {
            await ct("request_geolocation_permission"), i = true;
            const a = await this.getPermissionStatus();
            if (a.isErr() || a.value === "denied") return k(new Qe("Geolocation permission denied by system", qe.PERMISSION_DENIED));
          } catch {
          }
          if (!i && t) {
            if (!await t("prompt", "permission.location.prompt")) return k(new Qe("Geolocation permission denied", qe.PERMISSION_DENIED));
          } else if (!i) return k(new Qe("Geolocation permission not granted", qe.PERMISSION_DENIED));
        } else if (r.value === "denied") return k(new Qe("Geolocation permission denied", qe.PERMISSION_DENIED));
        return this.initialized = true, D(void 0);
      } catch (r) {
        return k(new Qe("Failed to initialize desktop geolocation", qe.INITIALIZATION_FAILED, r));
      }
    }
    async getPermissionStatus() {
      if (this.isMobile && this.tauriGeolocation) try {
        const t = await this.tauriGeolocation.checkPermissions();
        return D(t.location);
      } catch (t) {
        return k(new Qe("Failed to get mobile permission status", qe.PERMISSION_DENIED, t));
      }
      else try {
        const t = await ct("get_geolocation_permission_status");
        return D(t);
      } catch {
        if (!navigator.permissions) return D("prompt");
        try {
          const t = await navigator.permissions.query({
            name: "geolocation"
          });
          return D(t.state);
        } catch (t) {
          return k(new Qe("Failed to get permission status", qe.PERMISSION_DENIED, t));
        }
      }
    }
    async requestPermission() {
      if (this.isMobile && this.tauriGeolocation) try {
        const t = await this.tauriGeolocation.requestPermissions([
          "location"
        ]);
        return D(t.location);
      } catch (t) {
        return k(new Qe("Failed to request mobile permission", qe.PERMISSION_DENIED, t));
      }
      else try {
        return await this.getCurrentPosition(), D("granted");
      } catch (t) {
        return k(new Qe("Failed to request permission", qe.PERMISSION_DENIED, t));
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
          return D(this.convertTauriPositionToGeolocationPosition(t));
        } else {
          const t = await ct("get_current_position");
          return D(this.convertRustPositionToGeolocationPosition(t));
        }
      } catch (t) {
        return k(new Qe("Failed to get current position", qe.POSITION_UNAVAILABLE, t));
      }
    }
    async watchPosition(t, r) {
      if (!this.initialized) {
        const i = await this.init();
        if (i.isErr()) return k(i.error);
      }
      try {
        if (this.isMobile && this.tauriGeolocation) {
          const i = await this.tauriGeolocation.watchPosition({
            enableHighAccuracy: true,
            timeout: 1e4
          }, (a) => {
            t(this.convertTauriPositionToGeolocationPosition(a));
          });
          return this.watchCallbacks.set(i, i), D(i);
        } else {
          const i = wh(), a = (r == null ? void 0 : r.highFrequency) ? 100 : i, c = window.setInterval(async () => {
            try {
              const f = await this.getCurrentPosition();
              f.isOk() && t(f.value);
            } catch (f) {
              console.error("Error in watch position:", f);
            }
          }, a);
          return this.watchCallbacks.set(c, c), D(c);
        }
      } catch (i) {
        return k(new Qe("Failed to start watching position", qe.WATCH_FAILED, i));
      }
    }
    clearWatch(t) {
      try {
        return this.isMobile && this.tauriGeolocation ? this.tauriGeolocation.clearWatch(t).catch(console.error) : clearInterval(t), this.watchCallbacks.delete(t), D(void 0);
      } catch (r) {
        return k(new Qe("Failed to clear watch", qe.CLEAR_WATCH_FAILED, r));
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
      navigator.geolocation.injected || (navigator.geolocation.getCurrentPosition = (t, r, i) => {
        this.getCurrentPosition().then((a) => {
          a.isOk() ? t(a.value) : r == null ? void 0 : r(this.createPositionError(a.error));
        }).catch((a) => {
          r == null ? void 0 : r(this.createPositionError(a));
        });
      }, navigator.geolocation.watchPosition = (t, r, i) => (this.watchPosition((c) => t(c), {
        highFrequency: i == null ? void 0 : i.enableHighAccuracy
      }).then((c) => {
        c.isErr() && r && r(this.createPositionError(c.error));
      }), 0), navigator.geolocation.clearWatch = (t) => {
        this.clearWatch(t);
      }, navigator.geolocation.injected = true);
    }
    createPositionError(t) {
      return {
        code: 2,
        message: (t instanceof Qe, t.message),
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
      if (this.initialized) return D(void 0);
      if (this.initPromise) return this.initPromise;
      this.initPromise = this.doInit(t);
      const r = await this.initPromise;
      return r.isErr() && (this.initPromise = null), r;
    }
    async doInit(t) {
      if (this.initialized) return D(void 0);
      if (!this.isSupported()) return k(new Qe("Geolocation is not supported by this browser", qe.UNSUPPORTED));
      const r = await this.getPermissionStatus();
      if (r.isErr()) return k(r.error);
      if (r.value === "prompt" && t) {
        if (!await t(r.value, "permission.location.prompt")) return k(new Qe("Geolocation permission denied", qe.PERMISSION_DENIED));
        const a = await this.getPermissionStatus();
        if (a.isErr()) return k(a.error);
        if (a.value === "denied") return k(new Qe("Geolocation permission denied", qe.PERMISSION_DENIED));
      }
      return this.initialized = true, D(void 0);
    }
    async getPermissionStatus() {
      if (!navigator.permissions) return this.fallbackPermissionCheck();
      try {
        const t = await navigator.permissions.query({
          name: "geolocation"
        });
        return D(t.state);
      } catch (t) {
        return k(new Qe("Failed to get permission status", qe.PERMISSION_DENIED, t));
      }
    }
    async fallbackPermissionCheck() {
      return new Promise((t) => {
        navigator.geolocation.getCurrentPosition(() => t(D("granted")), (r) => {
          r.code === r.PERMISSION_DENIED ? t(D("denied")) : t(D("prompt"));
        }, {
          timeout: 5e3,
          maximumAge: 1 / 0,
          enableHighAccuracy: true
        });
      });
    }
    async requestPermission() {
      try {
        return (await this.getCurrentPosition()).isOk() ? D("granted") : D("denied");
      } catch (t) {
        return this.isPositionError(t) ? t.code === t.PERMISSION_DENIED ? D("denied") : D("prompt") : k(new Qe("Failed to request permission", qe.PERMISSION_DENIED, t));
      }
    }
    async getCurrentPosition() {
      if (!this.initialized) {
        const t = await this.init();
        if (t.isErr()) return k(t.error);
      }
      return new Promise((t) => {
        navigator.geolocation.getCurrentPosition((r) => {
          t(D(r));
        }, (r) => {
          let i;
          const a = r.message;
          switch (r.code) {
            case r.PERMISSION_DENIED:
              i = qe.PERMISSION_DENIED;
              break;
            case r.POSITION_UNAVAILABLE:
              i = qe.POSITION_UNAVAILABLE;
              break;
            case r.TIMEOUT:
              i = qe.TIMEOUT;
              break;
            default:
              i = qe.POSITION_UNAVAILABLE;
          }
          t(k(new Qe(a, i, new Error(r.message))));
        }, {
          enableHighAccuracy: true,
          timeout: 3e4,
          maximumAge: 0
        });
      });
    }
    async watchPosition(t, r) {
      if (!this.initialized) {
        const v = await this.init();
        if (v.isErr()) return k(v.error);
      }
      const i = Vy(), a = wh(), c = Je("watchCompatibilityMode"), f = (r == null ? void 0 : r.highFrequency) ?? false, h = f;
      if (c && !f || h) {
        console.info(f ? "[Geolocation] Using hybrid watch + polling fallback for high-frequency tracking" : "[Geolocation] Using compatibility mode for position watch");
        try {
          const v = this.nextCompatibilityWatchId--;
          (f ? this.highFrequencyCallbacks : this.compatibilityModeCallbacks).set(v, t);
          let I = null;
          if (h) {
            const R = this.startNativeWatch((A) => {
              this.lastHighFrequencyNativeUpdateTime = performance.now(), this.lastHighFrequencyNativeAccuracy = A.coords.accuracy, t(A);
            });
            R.isOk() ? I = R.value : console.warn("[Geolocation] Native watchPosition failed, continuing with polling fallback only:", R.error);
          }
          return f ? this.highFrequencyIntervalId === null && (this.highFrequencyIntervalId = window.setInterval(() => {
            this.pollCompatibilityWatch(true, i);
          }, i)) : this.compatibilityIntervalId === null && (this.compatibilityIntervalId = window.setInterval(() => {
            this.pollCompatibilityWatch(false, a);
          }, a)), this.compatibilityModeWatches.set(v, {
            highFrequency: f,
            nativeWatchId: I
          }), D(v);
        } catch (v) {
          return k(new Qe("Failed to start watching position (compatibility mode)", qe.WATCH_FAILED, v));
        }
      }
      return this.startNativeWatch(t);
    }
    clearWatch(t) {
      try {
        if (this.compatibilityModeWatches.has(t)) {
          const r = this.compatibilityModeWatches.get(t);
          r.highFrequency ? this.highFrequencyCallbacks.delete(t) : this.compatibilityModeCallbacks.delete(t), this.compatibilityModeWatches.delete(t), r.nativeWatchId !== null && navigator.geolocation.clearWatch(r.nativeWatchId), this.compatibilityModeCallbacks.size === 0 && this.compatibilityIntervalId !== null && (window.clearInterval(this.compatibilityIntervalId), this.compatibilityIntervalId = null, this.lastCompatibilityPosition = null, this.lastCompatibilityUpdateTime = 0, this.regularPollInFlight = false), this.highFrequencyCallbacks.size === 0 && this.highFrequencyIntervalId !== null && (window.clearInterval(this.highFrequencyIntervalId), this.highFrequencyIntervalId = null, this.highFrequencyPollInFlight = false, this.lastHighFrequencyNativeUpdateTime = 0, this.lastHighFrequencyNativeAccuracy = null);
        } else navigator.geolocation.clearWatch(t);
        return D(void 0);
      } catch (r) {
        return k(new Qe("Failed to clear watch", qe.CLEAR_WATCH_FAILED, r));
      }
    }
    isSupported() {
      return "geolocation" in navigator;
    }
    async pollCompatibilityWatch(t, r) {
      const i = t ? this.highFrequencyCallbacks : this.compatibilityModeCallbacks;
      if (i.size !== 0) {
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
            const f = performance.now(), h = r * _no.HIGH_FREQUENCY_NATIVE_STALE_FACTOR, p = this.lastHighFrequencyNativeUpdateTime > 0 && f - this.lastHighFrequencyNativeUpdateTime < h, v = this.lastHighFrequencyNativeAccuracy !== null && c.coords.accuracy > this.lastHighFrequencyNativeAccuracy * _no.POLL_ACCURACY_WORSE_FACTOR;
            if (p || v) return;
          }
          if (!t) {
            const f = {
              lat: c.coords.latitude,
              lng: c.coords.longitude,
              acc: c.coords.accuracy
            }, h = Date.now();
            if (!(h - this.lastCompatibilityUpdateTime > r) && this.lastCompatibilityPosition && this.lastCompatibilityPosition.lat === f.lat && this.lastCompatibilityPosition.lng === f.lng && this.lastCompatibilityPosition.acc === f.acc) return;
            this.lastCompatibilityPosition = f, this.lastCompatibilityUpdateTime = h;
          }
          for (const f of i.values()) try {
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
        const r = navigator.geolocation.watchPosition(t, (i) => {
          console.error("[Geolocation] Native watchPosition error:", i);
        }, {
          enableHighAccuracy: true,
          timeout: 3e4,
          maximumAge: 0
        });
        return D(r);
      } catch (r) {
        return k(new Qe("Failed to start watching position", qe.WATCH_FAILED, r));
      }
    }
    isPositionError(t) {
      return typeof t == "object" && t !== null && "code" in t && "message" in t && typeof t.code == "number";
    }
  };
  __publicField(_no, "HIGH_FREQUENCY_NATIVE_STALE_FACTOR", 1.5);
  __publicField(_no, "POLL_ACCURACY_WORSE_FACTOR", 1.5);
  let no = _no;
  eb = function(e) {
    return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
  };
  function yh(e) {
    if (Object.prototype.hasOwnProperty.call(e, "__esModule")) return e;
    var t = e.default;
    if (typeof t == "function") {
      var r = function i() {
        var a = false;
        try {
          a = this instanceof i;
        } catch {
        }
        return a ? Reflect.construct(t, arguments, this.constructor) : t.apply(this, arguments);
      };
      r.prototype = t.prototype;
    } else r = {};
    return Object.defineProperty(r, "__esModule", {
      value: true
    }), Object.keys(e).forEach(function(i) {
      var a = Object.getOwnPropertyDescriptor(e, i);
      Object.defineProperty(r, i, a.get ? a : {
        enumerable: true,
        get: function() {
          return e[i];
        }
      });
    }), r;
  }
  var Ae = {};
  const tb = Object.prototype.toString;
  function ss(e) {
    const t = tb.call(e);
    return t.endsWith("Array]") && !t.includes("Big");
  }
  const rb = Object.freeze(Object.defineProperty({
    __proto__: null,
    isAnyArray: ss
  }, Symbol.toStringTag, {
    value: "Module"
  })), ib = yh(rb);
  function nb(e) {
    var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
    if (!ss(e)) throw new TypeError("input must be an array");
    if (e.length === 0) throw new TypeError("input must not be empty");
    var r = t.fromIndex, i = r === void 0 ? 0 : r, a = t.toIndex, c = a === void 0 ? e.length : a;
    if (i < 0 || i >= e.length || !Number.isInteger(i)) throw new Error("fromIndex must be a positive integer smaller than length");
    if (c <= i || c > e.length || !Number.isInteger(c)) throw new Error("toIndex must be an integer greater than fromIndex and at most equal to length");
    for (var f = e[i], h = i + 1; h < c; h++) e[h] > f && (f = e[h]);
    return f;
  }
  function sb(e) {
    var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
    if (!ss(e)) throw new TypeError("input must be an array");
    if (e.length === 0) throw new TypeError("input must not be empty");
    var r = t.fromIndex, i = r === void 0 ? 0 : r, a = t.toIndex, c = a === void 0 ? e.length : a;
    if (i < 0 || i >= e.length || !Number.isInteger(i)) throw new Error("fromIndex must be a positive integer smaller than length");
    if (c <= i || c > e.length || !Number.isInteger(c)) throw new Error("toIndex must be an integer greater than fromIndex and at most equal to length");
    for (var f = e[i], h = i + 1; h < c; h++) e[h] < f && (f = e[h]);
    return f;
  }
  function ob(e) {
    var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
    if (ss(e)) {
      if (e.length === 0) throw new TypeError("input must not be empty");
    } else throw new TypeError("input must be an array");
    var r;
    if (t.output !== void 0) {
      if (!ss(t.output)) throw new TypeError("output option must be an array if specified");
      r = t.output;
    } else r = new Array(e.length);
    var i = sb(e), a = nb(e);
    if (i === a) throw new RangeError("minimum and maximum input values are equal. Cannot rescale a constant array");
    var c = t.min, f = c === void 0 ? t.autoMinMax ? i : 0 : c, h = t.max, p = h === void 0 ? t.autoMinMax ? a : 1 : h;
    if (f >= p) throw new RangeError("min option must be smaller than max option");
    for (var v = (p - f) / (a - i), g = 0; g < e.length; g++) r[g] = (e[g] - i) * v + f;
    return r;
  }
  const ab = Object.freeze(Object.defineProperty({
    __proto__: null,
    default: ob
  }, Symbol.toStringTag, {
    value: "Module"
  })), lb = yh(ab);
  var Xc;
  function cb() {
    var _ne_instances, e_fn, _e2;
    if (Xc) return Ae;
    Xc = 1, Object.defineProperty(Ae, "__esModule", {
      value: true
    });
    var e = ib, t = lb;
    const r = " ".repeat(2), i = " ".repeat(4);
    function a() {
      return c(this);
    }
    function c(d, s = {}) {
      const { maxRows: o = 15, maxColumns: n = 10, maxNumSize: l = 8, padMinus: u = "auto" } = s;
      return `${d.constructor.name} {
${r}[
${i}${f(d, o, n, l, u)}
${r}]
${r}rows: ${d.rows}
${r}columns: ${d.columns}
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
${i}`);
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
    function R(d, s) {
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
    function ie(d) {
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
    function $e(d, s) {
      for (let o = 0; o < d.rows; o++) for (let n = 0; n < d.columns; n++) d.set(o, n, d.get(o, n) - s[o]);
    }
    function pt(d, s) {
      for (let o = 0; o < d.rows; o++) for (let n = 0; n < d.columns; n++) d.set(o, n, d.get(o, n) - s[n]);
    }
    function $t(d, s) {
      for (let o = 0; o < d.rows; o++) for (let n = 0; n < d.columns; n++) d.set(o, n, d.get(o, n) - s);
    }
    function Ye(d) {
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
    function Ke(d) {
      const s = [];
      for (let o = 0; o < d.columns; o++) {
        let n = 0;
        for (let l = 0; l < d.rows; l++) n += d.get(l, o) ** 2 / (d.rows - 1);
        s.push(Math.sqrt(n));
      }
      return s;
    }
    function Ar(d, s) {
      for (let o = 0; o < d.rows; o++) for (let n = 0; n < d.columns; n++) d.set(o, n, d.get(o, n) / s[n]);
    }
    function Ui(d) {
      const s = d.size - 1;
      let o = 0;
      for (let n = 0; n < d.columns; n++) for (let l = 0; l < d.rows; l++) o += d.get(l, n) ** 2 / s;
      return Math.sqrt(o);
    }
    function Rr(d, s) {
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
        g(this, s), o = R(this, o);
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
        s = R(this, s);
        for (let o = 0; o < this.rows; o++) for (let n = 0; n < this.columns; n++) this.set(o, n, this.get(o, n) + s[n]);
        return this;
      }
      subRowVector(s) {
        s = R(this, s);
        for (let o = 0; o < this.rows; o++) for (let n = 0; n < this.columns; n++) this.set(o, n, this.get(o, n) - s[n]);
        return this;
      }
      mulRowVector(s) {
        s = R(this, s);
        for (let o = 0; o < this.rows; o++) for (let n = 0; n < this.columns; n++) this.set(o, n, this.get(o, n) * s[n]);
        return this;
      }
      divRowVector(s) {
        s = R(this, s);
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
        const n = this.get(0, 0), l = s.get(0, 0), u = this.get(0, 1), m = s.get(0, 1), w = this.get(1, 0), y = s.get(1, 0), b = this.get(1, 1), P = s.get(1, 1), _ = (n + b) * (l + P), O = (w + b) * l, te = n * (m - P), C = b * (y - l), F = (n + u) * P, le = (w - n) * (l + m), S = (u - b) * (y + P), ee = _ + C - F + S, de = te + F, Se = O + C, Me = _ - O + te + le;
        return o.set(0, 0, ee), o.set(0, 1, de), o.set(1, 0, Se), o.set(1, 1, Me), o;
      }
      strassen3x3(s) {
        s = ne.checkMatrix(s);
        let o = new ne(3, 3);
        const n = this.get(0, 0), l = this.get(0, 1), u = this.get(0, 2), m = this.get(1, 0), w = this.get(1, 1), y = this.get(1, 2), b = this.get(2, 0), P = this.get(2, 1), _ = this.get(2, 2), O = s.get(0, 0), te = s.get(0, 1), C = s.get(0, 2), F = s.get(1, 0), le = s.get(1, 1), S = s.get(1, 2), ee = s.get(2, 0), de = s.get(2, 1), Se = s.get(2, 2), Me = (n + l + u - m - w - P - _) * le, it = (n - m) * (-te + le), be = w * (-O + te + F - le - S - ee + Se), Ee = (-n + m + w) * (O - te + le), Ze = (m + w) * (-O + te), T = n * O, W = (-n + b + P) * (O - C + S), ce = (-n + b) * (C - S), J = (b + P) * (-O + C), nt = (n + l + u - w - y - b - P) * S, Ve = P * (-O + C + F - le - S - ee + de), tt = (-u + P + _) * (le + ee - de), st = (u - _) * (le - de), bt = u * ee, or = (P + _) * (-ee + de), wt = (-u + w + y) * (S + ee - Se), wr = (u - y) * (S - Se), Or = (w + y) * (-ee + Se), Ne = l * F, vt = y * de, Wt = m * C, Vt = b * te, yt = _ * Se, jh = T + bt + Ne, Uh = Me + Ee + Ze + T + tt + bt + or, zh = T + W + J + nt + bt + wt + Or, Gh = it + be + Ee + T + bt + wt + wr, $h = it + Ee + Ze + T + vt, Bh = bt + wt + wr + Or + Wt, Wh = T + W + ce + Ve + tt + st + bt, Vh = tt + st + bt + or + Vt, qh = T + W + ce + J + yt;
        return o.set(0, 0, jh), o.set(0, 1, Uh), o.set(0, 2, zh), o.set(1, 0, Gh), o.set(1, 1, $h), o.set(1, 2, Bh), o.set(2, 0, Wh), o.set(2, 1, Vh), o.set(2, 2, qh), o;
      }
      mmulStrassen(s) {
        s = ne.checkMatrix(s);
        let o = this.clone(), n = o.rows, l = o.columns, u = s.rows, m = s.columns;
        l !== u && console.warn(`Multiplying ${n} x ${l} and ${u} x ${m} matrix: dimensions do not match.`);
        function w(_, O, te) {
          let C = _.rows, F = _.columns;
          if (C === O && F === te) return _;
          {
            let le = _e.zeros(O, te);
            return le = le.setSubMatrix(_, 0, 0), le;
          }
        }
        let y = Math.max(n, u), b = Math.max(l, m);
        o = w(o, y, b), s = w(s, y, b);
        function P(_, O, te, C) {
          if (te <= 512 || C <= 512) return _.mmul(O);
          te % 2 === 1 && C % 2 === 1 ? (_ = w(_, te + 1, C + 1), O = w(O, te + 1, C + 1)) : te % 2 === 1 ? (_ = w(_, te + 1, C), O = w(O, te + 1, C)) : C % 2 === 1 && (_ = w(_, te, C + 1), O = w(O, te, C + 1));
          let F = parseInt(_.rows / 2, 10), le = parseInt(_.columns / 2, 10), S = _.subMatrix(0, F - 1, 0, le - 1), ee = O.subMatrix(0, F - 1, 0, le - 1), de = _.subMatrix(0, F - 1, le, _.columns - 1), Se = O.subMatrix(0, F - 1, le, O.columns - 1), Me = _.subMatrix(F, _.rows - 1, 0, le - 1), it = O.subMatrix(F, O.rows - 1, 0, le - 1), be = _.subMatrix(F, _.rows - 1, le, _.columns - 1), Ee = O.subMatrix(F, O.rows - 1, le, O.columns - 1), Ze = P(_e.add(S, be), _e.add(ee, Ee), F, le), T = P(_e.add(Me, be), ee, F, le), W = P(S, _e.sub(Se, Ee), F, le), ce = P(be, _e.sub(it, ee), F, le), J = P(_e.add(S, de), Ee, F, le), nt = P(_e.sub(Me, S), _e.add(ee, Se), F, le), Ve = P(_e.sub(de, be), _e.add(it, Ee), F, le), tt = _e.add(Ze, ce);
          tt.sub(J), tt.add(Ve);
          let st = _e.add(W, J), bt = _e.add(T, ce), or = _e.sub(Ze, T);
          or.add(W), or.add(nt);
          let wt = _e.zeros(2 * tt.rows, 2 * tt.columns);
          return wt = wt.setSubMatrix(tt, 0, 0), wt = wt.setSubMatrix(st, tt.rows, 0), wt = wt.setSubMatrix(bt, 0, tt.columns), wt = wt.setSubMatrix(or, tt.rows, tt.columns), wt.subMatrix(0, te - 1, 0, C - 1);
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
        j(this, s), x(this, o);
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
            return ie(this);
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
            return $e(this, n), this;
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
            if (n === void 0) n = Ye(this);
            else if (!e.isAnyArray(n)) throw new TypeError("scale must be an array");
            return Re(this, n), this;
          }
          case "column": {
            if (n === void 0) n = Ke(this);
            else if (!e.isAnyArray(n)) throw new TypeError("scale must be an array");
            return Ar(this, n), this;
          }
          case void 0: {
            if (n === void 0) n = Ui(this);
            else if (typeof n != "number") throw new TypeError("scale must be a number");
            return Rr(this, n), this;
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
        return o === void 0 && (o = s, s = this.rows), g(this, s, true), o = Float64Array.from(R(this, o)), this.data.splice(s, 0, o), this.rows += 1, this;
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
    class Cr extends jt {
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
        const s = new Cr(this.diagonalSize);
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
    Cr.prototype.klassSubType = "DistanceMatrix";
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
    class bi extends Bt {
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
    class N extends Bt {
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
        j(s, o), x(s, n), super(s, o.length, n.length), this.rowIndices = o, this.columnIndices = n;
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
    function re(d, s) {
      if (e.isAnyArray(d)) return d[0] && e.isAnyArray(d[0]) ? new X(d) : new oe(d, s);
      throw new Error("the argument is not an array");
    }
    class q {
      constructor(s) {
        s = X.checkMatrix(s);
        let o = s.clone(), n = o.rows, l = o.columns, u = new Float64Array(n), m = 1, w, y, b, P, _, O, te, C, F;
        for (w = 0; w < n; w++) u[w] = w;
        for (C = new Float64Array(n), y = 0; y < l; y++) {
          for (w = 0; w < n; w++) C[w] = o.get(w, y);
          for (w = 0; w < n; w++) {
            for (F = Math.min(w, y), _ = 0, b = 0; b < F; b++) _ += o.get(w, b) * C[b];
            C[w] -= _, o.set(w, y, C[w]);
          }
          for (P = y, w = y + 1; w < n; w++) Math.abs(C[w]) > Math.abs(C[P]) && (P = w);
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
        let O = Math.min(n, l), te = Math.min(n + 1, l), C = new Float64Array(te), F = new ne(n, O), le = new ne(l, l), S = new Float64Array(l), ee = new Float64Array(n), de = new Float64Array(te);
        for (let T = 0; T < te; T++) de[T] = T;
        let Se = Math.min(n - 1, l), Me = Math.max(0, Math.min(l - 2, n)), it = Math.max(Se, Me);
        for (let T = 0; T < it; T++) {
          if (T < Se) {
            C[T] = 0;
            for (let W = T; W < n; W++) C[T] = we(C[T], _.get(W, T));
            if (C[T] !== 0) {
              _.get(T, T) < 0 && (C[T] = -C[T]);
              for (let W = T; W < n; W++) _.set(W, T, _.get(W, T) / C[T]);
              _.set(T, T, _.get(T, T) + 1);
            }
            C[T] = -C[T];
          }
          for (let W = T + 1; W < l; W++) {
            if (T < Se && C[T] !== 0) {
              let ce = 0;
              for (let J = T; J < n; J++) ce += _.get(J, T) * _.get(J, W);
              ce = -ce / _.get(T, T);
              for (let J = T; J < n; J++) _.set(J, W, _.get(J, W) + ce * _.get(J, T));
            }
            S[W] = _.get(T, W);
          }
          if (y && T < Se) for (let W = T; W < n; W++) F.set(W, T, _.get(W, T));
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
            if (b) for (let W = T + 1; W < l; W++) le.set(W, T, S[W]);
          }
        }
        let be = Math.min(l, n + 1);
        if (Se < l && (C[Se] = _.get(Se, Se)), n < be && (C[be - 1] = 0), Me + 1 < be && (S[Me] = _.get(Me, be - 1)), S[be - 1] = 0, y) {
          for (let T = Se; T < O; T++) {
            for (let W = 0; W < n; W++) F.set(W, T, 0);
            F.set(T, T, 1);
          }
          for (let T = Se - 1; T >= 0; T--) if (C[T] !== 0) {
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
        if (b) for (let T = l - 1; T >= 0; T--) {
          if (T < Me && S[T] !== 0) for (let W = T + 1; W < l; W++) {
            let ce = 0;
            for (let J = T + 1; J < l; J++) ce += le.get(J, T) * le.get(J, W);
            ce = -ce / le.get(T + 1, T);
            for (let J = T + 1; J < l; J++) le.set(J, W, le.get(J, W) + ce * le.get(J, T));
          }
          for (let W = 0; W < l; W++) le.set(W, T, 0);
          le.set(T, T, 1);
        }
        let Ee = be - 1, Ze = Number.EPSILON;
        for (; be > 0; ) {
          let T, W;
          for (T = be - 2; T >= -1 && T !== -1; T--) {
            const ce = Number.MIN_VALUE + Ze * Math.abs(C[T] + Math.abs(C[T + 1]));
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
              if (Math.abs(C[ce]) <= Ze * J) {
                C[ce] = 0;
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
                let nt = we(C[J], ce), Ve = C[J] / nt, tt = ce / nt;
                if (C[J] = nt, J !== T && (ce = -tt * S[J - 1], S[J - 1] = Ve * S[J - 1]), b) for (let st = 0; st < l; st++) nt = Ve * le.get(st, J) + tt * le.get(st, be - 1), le.set(st, be - 1, -tt * le.get(st, J) + Ve * le.get(st, be - 1)), le.set(st, J, nt);
              }
              break;
            }
            case 2: {
              let ce = S[T - 1];
              S[T - 1] = 0;
              for (let J = T; J < be; J++) {
                let nt = we(C[J], ce), Ve = C[J] / nt, tt = ce / nt;
                if (C[J] = nt, ce = -tt * S[J], S[J] = Ve * S[J], y) for (let st = 0; st < n; st++) nt = Ve * F.get(st, J) + tt * F.get(st, T - 1), F.set(st, T - 1, -tt * F.get(st, J) + Ve * F.get(st, T - 1)), F.set(st, J, nt);
              }
              break;
            }
            case 3: {
              const ce = Math.max(Math.abs(C[be - 1]), Math.abs(C[be - 2]), Math.abs(S[be - 2]), Math.abs(C[T]), Math.abs(S[T])), J = C[be - 1] / ce, nt = C[be - 2] / ce, Ve = S[be - 2] / ce, tt = C[T] / ce, st = S[T] / ce, bt = ((nt + J) * (nt - J) + Ve * Ve) / 2, or = J * Ve * (J * Ve);
              let wt = 0;
              (bt !== 0 || or !== 0) && (bt < 0 ? wt = 0 - Math.sqrt(bt * bt + or) : wt = Math.sqrt(bt * bt + or), wt = or / (bt + wt));
              let wr = (tt + J) * (tt - J) + wt, Or = tt * st;
              for (let Ne = T; Ne < be - 1; Ne++) {
                let vt = we(wr, Or);
                vt === 0 && (vt = Number.MIN_VALUE);
                let Wt = wr / vt, Vt = Or / vt;
                if (Ne !== T && (S[Ne - 1] = vt), wr = Wt * C[Ne] + Vt * S[Ne], S[Ne] = Wt * S[Ne] - Vt * C[Ne], Or = Vt * C[Ne + 1], C[Ne + 1] = Wt * C[Ne + 1], b) for (let yt = 0; yt < l; yt++) vt = Wt * le.get(yt, Ne) + Vt * le.get(yt, Ne + 1), le.set(yt, Ne + 1, -Vt * le.get(yt, Ne) + Wt * le.get(yt, Ne + 1)), le.set(yt, Ne, vt);
                if (vt = we(wr, Or), vt === 0 && (vt = Number.MIN_VALUE), Wt = wr / vt, Vt = Or / vt, C[Ne] = vt, wr = Wt * S[Ne] + Vt * C[Ne + 1], C[Ne + 1] = -Vt * S[Ne] + Wt * C[Ne + 1], Or = Vt * S[Ne + 1], S[Ne + 1] = Wt * S[Ne + 1], y && Ne < n - 1) for (let yt = 0; yt < n; yt++) vt = Wt * F.get(yt, Ne) + Vt * F.get(yt, Ne + 1), F.set(yt, Ne + 1, -Vt * F.get(yt, Ne) + Wt * F.get(yt, Ne + 1)), F.set(yt, Ne, vt);
              }
              S[be - 2] = wr;
              break;
            }
            case 4: {
              if (C[T] <= 0 && (C[T] = C[T] < 0 ? -C[T] : 0, b)) for (let ce = 0; ce <= Ee; ce++) le.set(ce, T, -le.get(ce, T));
              for (; T < Ee && !(C[T] >= C[T + 1]); ) {
                let ce = C[T];
                if (C[T] = C[T + 1], C[T + 1] = ce, b && T < l - 1) for (let J = 0; J < l; J++) ce = le.get(J, T + 1), le.set(J, T + 1, le.get(J, T)), le.set(J, T, ce);
                if (y && T < n - 1) for (let J = 0; J < n; J++) ce = F.get(J, T + 1), F.set(J, T + 1, F.get(J, T)), F.set(J, T, ce);
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
        this.m = n, this.n = l, this.s = C, this.U = F, this.V = le;
      }
      solve(s) {
        let o = s, n = this.threshold, l = this.s.length, u = ne.zeros(l, l);
        for (let O = 0; O < l; O++) Math.abs(this.s[O]) <= n ? u.set(O, O, 0) : u.set(O, O, 1 / this.s[O]);
        let m = this.U, w = this.rightSingularVectors, y = w.mmul(u), b = w.rows, P = m.rows, _ = ne.zeros(b, P);
        for (let O = 0; O < b; O++) for (let te = 0; te < P; te++) {
          let C = 0;
          for (let F = 0; F < l; F++) C += y.get(O, F) * m.get(te, F);
          _.set(O, te, C);
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
    function Ue(d) {
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
          ]), s = d.get(0, 0), o = d.get(0, 1), n = d.get(0, 2), s * Ue(u) - o * Ue(m) + n * Ue(w);
        } else return new q(d).determinant;
      } else throw Error("determinant can only be calculated for a square matrix");
    }
    function ze(d, s) {
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
        let w = ne.columnVector(d.getRow(m)), y = d.subMatrixRow(ze(l, m)).transpose(), P = new ye(y).solve(w), _ = ne.sub(w, y.mmul(P)).abs().max();
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
    function vi(d, s = d, o = {}) {
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
    class En {
      constructor(s, o = {}) {
        const { assumeSymmetric: n = false } = o;
        if (s = X.checkMatrix(s), !s.isSquare()) throw new Error("Matrix is not a square matrix");
        if (s.isEmpty()) throw new Error("Matrix must be non-empty");
        let l = s.columns, u = new ne(l, l), m = new Float64Array(l), w = new Float64Array(l), y = s, b, P, _ = false;
        if (n ? _ = true : _ = s.isSymmetric(), _) {
          for (b = 0; b < l; b++) for (P = 0; P < l; P++) u.set(b, P, y.get(b, P));
          Ot(l, w, m, u), er(l, w, m, u);
        } else {
          let O = new ne(l, l), te = new Float64Array(l);
          for (P = 0; P < l; P++) for (b = 0; b < l; b++) O.set(b, P, y.get(b, P));
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
    function er(d, s, o, n) {
      let l, u, m, w, y, b, P, _, O, te, C, F, le, S, ee, de;
      for (m = 1; m < d; m++) s[m - 1] = s[m];
      s[d - 1] = 0;
      let Se = 0, Me = 0, it = Number.EPSILON;
      for (b = 0; b < d; b++) {
        for (Me = Math.max(Me, Math.abs(o[b]) + Math.abs(s[b])), P = b; P < d && !(Math.abs(s[P]) <= it * Me); ) P++;
        if (P > b) do {
          for (l = o[b], _ = (o[b + 1] - l) / (2 * s[b]), O = we(_, 1), _ < 0 && (O = -O), o[b] = s[b] / (_ + O), o[b + 1] = s[b] * (_ + O), te = o[b + 1], u = l - o[b], m = b + 2; m < d; m++) o[m] -= u;
          for (Se = Se + u, _ = o[P], C = 1, F = C, le = C, S = s[b + 1], ee = 0, de = 0, m = P - 1; m >= b; m--) for (le = F, F = C, de = ee, l = C * s[m], u = C * _, O = we(_, s[m]), s[m + 1] = ee * O, ee = s[m] / O, C = _ / O, _ = C * o[m] - ee * l, o[m + 1] = u + ee * (C * l + ee * o[m]), y = 0; y < d; y++) u = n.get(y, m + 1), n.set(y, m + 1, ee * n.get(y, m) + C * u), n.set(y, m, C * n.get(y, m) - ee * u);
          _ = -ee * de * le * S * s[b] / te, s[b] = ee * _, o[b] = C * _;
        } while (Math.abs(s[b]) > it * Me);
        o[b] = o[b] + Se, s[b] = 0;
      }
      for (m = 0; m < d - 1; m++) {
        for (y = m, _ = o[m], w = m + 1; w < d; w++) o[w] < _ && (y = w, _ = o[w]);
        if (y !== m) for (o[y] = o[m], o[m] = _, w = 0; w < d; w++) _ = n.get(w, m), n.set(w, m, n.get(w, y)), n.set(w, y, _);
      }
    }
    function hs(d, s, o, n) {
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
    function ds(d, s, o, n, l) {
      let u = d - 1, m = 0, w = d - 1, y = Number.EPSILON, b = 0, P = 0, _ = 0, O = 0, te = 0, C = 0, F = 0, le = 0, S, ee, de, Se, Me, it, be, Ee, Ze, T, W, ce, J, nt, Ve;
      for (S = 0; S < d; S++) for ((S < m || S > w) && (o[S] = l.get(S, S), s[S] = 0), ee = Math.max(S - 1, 0); ee < d; ee++) P = P + Math.abs(l.get(S, ee));
      for (; u >= m; ) {
        for (Se = u; Se > m && (C = Math.abs(l.get(Se - 1, Se - 1)) + Math.abs(l.get(Se, Se)), C === 0 && (C = P), !(Math.abs(l.get(Se, Se - 1)) < y * C)); ) Se--;
        if (Se === u) l.set(u, u, l.get(u, u) + b), o[u] = l.get(u, u), s[u] = 0, u--, le = 0;
        else if (Se === u - 1) {
          if (be = l.get(u, u - 1) * l.get(u - 1, u), _ = (l.get(u - 1, u - 1) - l.get(u, u)) / 2, O = _ * _ + be, F = Math.sqrt(Math.abs(O)), l.set(u, u, l.get(u, u) + b), l.set(u - 1, u - 1, l.get(u - 1, u - 1) + b), Ee = l.get(u, u), O >= 0) {
            for (F = _ >= 0 ? _ + F : _ - F, o[u - 1] = Ee + F, o[u] = o[u - 1], F !== 0 && (o[u] = Ee - be / F), s[u - 1] = 0, s[u] = 0, Ee = l.get(u, u - 1), C = Math.abs(Ee) + Math.abs(F), _ = Ee / C, O = F / C, te = Math.sqrt(_ * _ + O * O), _ = _ / te, O = O / te, ee = u - 1; ee < d; ee++) F = l.get(u - 1, ee), l.set(u - 1, ee, O * F + _ * l.get(u, ee)), l.set(u, ee, O * l.get(u, ee) - _ * F);
            for (S = 0; S <= u; S++) F = l.get(S, u - 1), l.set(S, u - 1, O * F + _ * l.get(S, u)), l.set(S, u, O * l.get(S, u) - _ * F);
            for (S = m; S <= w; S++) F = n.get(S, u - 1), n.set(S, u - 1, O * F + _ * n.get(S, u)), n.set(S, u, O * n.get(S, u) - _ * F);
          } else o[u - 1] = Ee + _, o[u] = Ee + _, s[u - 1] = F, s[u] = -F;
          u = u - 2, le = 0;
        } else {
          if (Ee = l.get(u, u), Ze = 0, be = 0, Se < u && (Ze = l.get(u - 1, u - 1), be = l.get(u, u - 1) * l.get(u - 1, u)), le === 10) {
            for (b += Ee, S = m; S <= u; S++) l.set(S, S, l.get(S, S) - Ee);
            C = Math.abs(l.get(u, u - 1)) + Math.abs(l.get(u - 1, u - 2)), Ee = Ze = 0.75 * C, be = -0.4375 * C * C;
          }
          if (le === 30 && (C = (Ze - Ee) / 2, C = C * C + be, C > 0)) {
            for (C = Math.sqrt(C), Ze < Ee && (C = -C), C = Ee - be / ((Ze - Ee) / 2 + C), S = m; S <= u; S++) l.set(S, S, l.get(S, S) - C);
            b += C, Ee = Ze = be = 0.964;
          }
          for (le = le + 1, Me = u - 2; Me >= Se && (F = l.get(Me, Me), te = Ee - F, C = Ze - F, _ = (te * C - be) / l.get(Me + 1, Me) + l.get(Me, Me + 1), O = l.get(Me + 1, Me + 1) - F - te - C, te = l.get(Me + 2, Me + 1), C = Math.abs(_) + Math.abs(O) + Math.abs(te), _ = _ / C, O = O / C, te = te / C, !(Me === Se || Math.abs(l.get(Me, Me - 1)) * (Math.abs(O) + Math.abs(te)) < y * (Math.abs(_) * (Math.abs(l.get(Me - 1, Me - 1)) + Math.abs(F) + Math.abs(l.get(Me + 1, Me + 1)))))); ) Me--;
          for (S = Me + 2; S <= u; S++) l.set(S, S - 2, 0), S > Me + 2 && l.set(S, S - 3, 0);
          for (de = Me; de <= u - 1 && (nt = de !== u - 1, de !== Me && (_ = l.get(de, de - 1), O = l.get(de + 1, de - 1), te = nt ? l.get(de + 2, de - 1) : 0, Ee = Math.abs(_) + Math.abs(O) + Math.abs(te), Ee !== 0 && (_ = _ / Ee, O = O / Ee, te = te / Ee)), Ee !== 0); de++) if (C = Math.sqrt(_ * _ + O * O + te * te), _ < 0 && (C = -C), C !== 0) {
            for (de !== Me ? l.set(de, de - 1, -C * Ee) : Se !== Me && l.set(de, de - 1, -l.get(de, de - 1)), _ = _ + C, Ee = _ / C, Ze = O / C, F = te / C, O = O / _, te = te / _, ee = de; ee < d; ee++) _ = l.get(de, ee) + O * l.get(de + 1, ee), nt && (_ = _ + te * l.get(de + 2, ee), l.set(de + 2, ee, l.get(de + 2, ee) - _ * F)), l.set(de, ee, l.get(de, ee) - _ * Ee), l.set(de + 1, ee, l.get(de + 1, ee) - _ * Ze);
            for (S = 0; S <= Math.min(u, de + 3); S++) _ = Ee * l.get(S, de) + Ze * l.get(S, de + 1), nt && (_ = _ + F * l.get(S, de + 2), l.set(S, de + 2, l.get(S, de + 2) - _ * te)), l.set(S, de, l.get(S, de) - _), l.set(S, de + 1, l.get(S, de + 1) - _ * O);
            for (S = m; S <= w; S++) _ = Ee * n.get(S, de) + Ze * n.get(S, de + 1), nt && (_ = _ + F * n.get(S, de + 2), n.set(S, de + 2, n.get(S, de + 2) - _ * te)), n.set(S, de, n.get(S, de) - _), n.set(S, de + 1, n.get(S, de + 1) - _ * O);
          }
        }
      }
      if (P !== 0) {
        for (u = d - 1; u >= 0; u--) if (_ = o[u], O = s[u], O === 0) for (Se = u, l.set(u, u, 1), S = u - 1; S >= 0; S--) {
          for (be = l.get(S, S) - _, te = 0, ee = Se; ee <= u; ee++) te = te + l.get(S, ee) * l.get(ee, u);
          if (s[S] < 0) F = be, C = te;
          else if (Se = S, s[S] === 0 ? l.set(S, u, be !== 0 ? -te / be : -te / (y * P)) : (Ee = l.get(S, S + 1), Ze = l.get(S + 1, S), O = (o[S] - _) * (o[S] - _) + s[S] * s[S], it = (Ee * C - F * te) / O, l.set(S, u, it), l.set(S + 1, u, Math.abs(Ee) > Math.abs(F) ? (-te - be * it) / Ee : (-C - Ze * it) / F)), it = Math.abs(l.get(S, u)), y * it * it > 1) for (ee = S; ee <= u; ee++) l.set(ee, u, l.get(ee, u) / it);
        }
        else if (O < 0) for (Se = u - 1, Math.abs(l.get(u, u - 1)) > Math.abs(l.get(u - 1, u)) ? (l.set(u - 1, u - 1, O / l.get(u, u - 1)), l.set(u - 1, u, -(l.get(u, u) - _) / l.get(u, u - 1))) : (Ve = ps(0, -l.get(u - 1, u), l.get(u - 1, u - 1) - _, O), l.set(u - 1, u - 1, Ve[0]), l.set(u - 1, u, Ve[1])), l.set(u, u - 1, 0), l.set(u, u, 1), S = u - 2; S >= 0; S--) {
          for (T = 0, W = 0, ee = Se; ee <= u; ee++) T = T + l.get(S, ee) * l.get(ee, u - 1), W = W + l.get(S, ee) * l.get(ee, u);
          if (be = l.get(S, S) - _, s[S] < 0) F = be, te = T, C = W;
          else if (Se = S, s[S] === 0 ? (Ve = ps(-T, -W, be, O), l.set(S, u - 1, Ve[0]), l.set(S, u, Ve[1])) : (Ee = l.get(S, S + 1), Ze = l.get(S + 1, S), ce = (o[S] - _) * (o[S] - _) + s[S] * s[S] - O * O, J = (o[S] - _) * 2 * O, ce === 0 && J === 0 && (ce = y * P * (Math.abs(be) + Math.abs(O) + Math.abs(Ee) + Math.abs(Ze) + Math.abs(F))), Ve = ps(Ee * te - F * T + O * W, Ee * C - F * W - O * T, ce, J), l.set(S, u - 1, Ve[0]), l.set(S, u, Ve[1]), Math.abs(Ee) > Math.abs(F) + Math.abs(O) ? (l.set(S + 1, u - 1, (-T - be * l.get(S, u - 1) + O * l.get(S, u)) / Ee), l.set(S + 1, u, (-W - be * l.get(S, u) - O * l.get(S, u - 1)) / Ee)) : (Ve = ps(-te - Ze * l.get(S, u - 1), -C - Ze * l.get(S, u), F, O), l.set(S + 1, u - 1, Ve[0]), l.set(S + 1, u, Ve[1]))), it = Math.max(Math.abs(l.get(S, u - 1)), Math.abs(l.get(S, u))), y * it * it > 1) for (ee = S; ee <= u; ee++) l.set(ee, u - 1, l.get(ee, u - 1) / it), l.set(ee, u, l.get(ee, u) / it);
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
        let y = 1, b, P, _, O;
        for (let te = 0; te < u && y > m; te++) _ = s.transpose().mmul(w).div(w.transpose().mmul(w).get(0, 0)), _ = _.div(_.norm()), b = s.mmul(_).div(_.transpose().mmul(_).get(0, 0)), te > 0 && (y = b.clone().sub(O).pow(2).sum()), O = b.clone(), n ? (P = n.transpose().mmul(b).div(b.transpose().mmul(b).get(0, 0)), P = P.div(P.norm()), w = n.mmul(P).div(P.transpose().mmul(P).get(0, 0))) : w = b;
        if (n) {
          let te = s.transpose().mmul(b).div(b.transpose().mmul(b).get(0, 0));
          te = te.div(te.norm());
          let C = s.clone().sub(b.clone().mmul(te.transpose())), F = w.transpose().mmul(b).div(b.transpose().mmul(b).get(0, 0)), le = n.clone().sub(b.clone().mulS(F.get(0, 0)).mmul(P.transpose()));
          this.t = b, this.p = te.transpose(), this.w = _.transpose(), this.q = P, this.u = w, this.s = b.transpose().mmul(b), this.xResidual = C, this.yResidual = le, this.betas = F;
        } else this.w = _.transpose(), this.s = b.transpose().mmul(b).sqrt(), l ? this.t = b.clone().div(this.s.get(0, 0)) : this.t = b, this.xResidual = s.sub(b.mmul(_.transpose()));
      }
    }
    return Ae.AbstractMatrix = _e, Ae.CHO = Sl, Ae.CholeskyDecomposition = Sl, Ae.DistanceMatrix = Cr, Ae.EVD = En, Ae.EigenvalueDecomposition = En, Ae.LU = q, Ae.LuDecomposition = q, Ae.Matrix = ne, Ae.MatrixColumnSelectionView = bi, Ae.MatrixColumnView = fs, Ae.MatrixFlipColumnView = Il, Ae.MatrixFlipRowView = E, Ae.MatrixRowSelectionView = N, Ae.MatrixRowView = M, Ae.MatrixSelectionView = H, Ae.MatrixSubView = K, Ae.MatrixTransposeView = Z, Ae.NIPALS = Tl, Ae.Nipals = Tl, Ae.QR = ae, Ae.QrDecomposition = ae, Ae.SVD = ye, Ae.SingularValueDecomposition = ye, Ae.SymmetricMatrix = jt, Ae.WrapperMatrix1D = oe, Ae.WrapperMatrix2D = X, Ae.correlation = vi, Ae.covariance = Qt, Ae.default = ne, Ae.determinant = Ue, Ae.inverse = Ie, Ae.linearDependencies = Tt, Ae.pseudoInverse = Xt, Ae.solve = xe, Ae.wrap = re, Ae;
  }
  var bl = cb();
  const Qc = eb(bl), Ir = bl.Matrix;
  Qc.Matrix ? Qc.Matrix : bl.Matrix;
  yi = function(e) {
    if (!Number.isFinite(e)) return 0;
    const t = e % 360;
    return t < 0 ? t + 360 : t;
  };
  function ub(e) {
    if (!(typeof e != "number" || !Number.isFinite(e))) return yi(e);
  }
  s1 = function(e, t) {
    return yi(e - t);
  };
  function fb(e) {
    return yi(e) * Math.PI / 180;
  }
  function hb(e, t) {
    const r = fb(t);
    return {
      x: e * Math.sin(r),
      y: e * Math.cos(r)
    };
  }
  o1 = function(e, t) {
    return !Number.isFinite(e) || !Number.isFinite(t) ? 0 : yi(Math.atan2(e, t) * 180 / Math.PI);
  };
  function db() {
    var _a3, _b2;
    return typeof window > "u" ? 0 : typeof ((_b2 = (_a3 = window.screen) == null ? void 0 : _a3.orientation) == null ? void 0 : _b2.angle) == "number" ? window.screen.orientation.angle : typeof window.orientation == "number" ? window.orientation : 0;
  }
  function pb() {
    const e = yi(db()), t = Math.round(e / 90) * 90;
    return t === 360 ? 0 : t;
  }
  function bh(e) {
    const t = pb();
    if (t === 0) return e;
    const r = t * Math.PI / 180, i = Math.cos(r), a = Math.sin(r), c = Number.isFinite(e.alpha) ? yi(e.alpha + t) : e.alpha, f = Number.isFinite(e.beta) && Number.isFinite(e.gamma) ? e.beta * i + e.gamma * a : e.beta, h = Number.isFinite(e.beta) && Number.isFinite(e.gamma) ? e.gamma * i - e.beta * a : e.gamma;
    return {
      ...e,
      alpha: c,
      beta: f,
      gamma: h
    };
  }
  a1 = function(e) {
    const t = ub(e.webkitCompassHeading);
    if (t !== void 0) return t;
    if (e.absolute === false) return;
    const r = bh(e).alpha;
    if (Number.isFinite(r)) return yi(360 - r);
  };
  const _Hn = class _Hn {
    constructor() {
      __publicField(this, "initialized", false);
      __publicField(this, "initPromise", null);
      __publicField(this, "accelerationListeners", /* @__PURE__ */ new Map());
      __publicField(this, "gyroscopeListeners", /* @__PURE__ */ new Map());
      __publicField(this, "orientationListeners", /* @__PURE__ */ new Map());
      __publicField(this, "nextListenerId", 0);
      __publicField(this, "lastAccelerationReading", null);
      __publicField(this, "lastGyroscopeReading", null);
      __publicField(this, "lastRawOrientationReading", null);
      __publicField(this, "normalizeAccelerationToENU", false);
      __publicField(this, "normalizeGyroscopeToENU", false);
      __publicField(this, "compensatedOrientation", null);
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
      this.boundHandleMotionEvent = this.handleMotionEvent.bind(this), this.boundHandleOrientationEvent = this.handleOrientationEvent.bind(this), this.matrixRz = Ir.zeros(3, 3), this.matrixRy = Ir.zeros(3, 3), this.matrixRx = Ir.zeros(3, 3), this.matrixR = Ir.zeros(3, 3), this.matrixRTemp = Ir.zeros(3, 3), this.vectorInput = Ir.zeros(3, 1), this.vectorOutput = Ir.zeros(3, 1), this.gravityENU = new Ir([
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
      if (this.initialized) return D(void 0);
      if (this.initPromise) return this.initPromise;
      this.initPromise = this.doInit(t);
      const r = await this.initPromise;
      return r.isErr() && (this.initPromise = null), r;
    }
    async doInit(t) {
      if (this.disposed) return k(new ut("IMU provider has been disposed"));
      const r = await this.requestPermissionIfNeeded(t);
      return r.isErr() ? k(r.error) : await this.checkHardwareSupport() ? (this.startOrientationEvents(), this.initialized = true, D(void 0)) : k(new ut("Device motion is not supported by this browser"));
    }
    async requestPermissionIfNeeded(t) {
      try {
        const r = typeof DeviceMotionEvent < "u" ? DeviceMotionEvent : void 0, i = await this.requestSensorPermission(r, t, "permission.imu.required", "IMU");
        if (i.isErr()) return i;
        const a = typeof DeviceOrientationEvent < "u" ? DeviceOrientationEvent : void 0, c = await this.requestSensorPermission(a, t, "permission.device-orientation.required", "device orientation");
        return c.isErr() ? c : D(void 0);
      } catch (r) {
        return k(new ut("Failed to request IMU permission", void 0, r));
      }
    }
    async requestSensorPermission(t, r, i, a) {
      if (!t || typeof t.requestPermission != "function") return D(void 0);
      let c = "prompt";
      try {
        c = await t.requestPermission();
      } catch {
        return D(void 0);
      }
      return c === "denied" ? k(new ut(`${a} permission denied`)) : c !== "prompt" || !r ? D(void 0) : await r("prompt", i) ? await t.requestPermission() !== "granted" ? k(new ut(`${a} permission denied`)) : D(void 0) : k(new ut(`User declined to grant ${a} permission`));
    }
    async checkHardwareSupport() {
      return !("DeviceOrientationEvent" in window) || !("DeviceMotionEvent" in window) ? false : new Promise((t) => {
        let r = false;
        const i = () => {
          window.removeEventListener("deviceorientation", f), window.removeEventListener("devicemotion", h);
        }, a = () => {
          r || (r = true, i(), t(true));
        }, c = () => {
          r || (r = true, i(), t(false));
        }, f = (p) => {
          (p.alpha !== null || p.beta !== null || p.gamma !== null) && a();
        }, h = (p) => {
          (p.acceleration || p.accelerationIncludingGravity || p.rotationRate) && a();
        };
        window.addEventListener("deviceorientation", f), window.addEventListener("devicemotion", h), setTimeout(c, 1e3);
      });
    }
    async ensureReady() {
      return this.disposed ? k(new ut("IMU provider has been disposed")) : this.initialized ? D(void 0) : this.init();
    }
    startOrientationEvents() {
      "DeviceOrientationEvent" in window && window.addEventListener("deviceorientation", this.boundHandleOrientationEvent);
    }
    stopOrientationEvents() {
      "DeviceOrientationEvent" in window && window.removeEventListener("deviceorientation", this.boundHandleOrientationEvent);
    }
    startMotionEvents() {
      this.motionEventListenerCount === 0 && window.addEventListener("devicemotion", this.boundHandleMotionEvent, true), this.motionEventListenerCount++;
    }
    stopMotionEvents() {
      this.motionEventListenerCount--, this.motionEventListenerCount === 0 && window.removeEventListener("devicemotion", this.boundHandleMotionEvent, true);
    }
    resetAccelerationSamplingState() {
      this.accelerationIntervalMs = 0, this.accelerationPrevReading = null, this.accelerationAccumulatedX = 0, this.accelerationAccumulatedY = 0, this.accelerationAccumulatedZ = 0, this.accelerationAccumulatedTime = 0, this.accelerationLastEmitTime = 0, this.accelerationTimer !== null && (clearTimeout(this.accelerationTimer), this.accelerationTimer = null);
    }
    resetGyroscopeSamplingState() {
      this.gyroscopeIntervalMs = 0, this.gyroscopePrevReading = null, this.gyroscopeAccumulatedX = 0, this.gyroscopeAccumulatedY = 0, this.gyroscopeAccumulatedZ = 0, this.gyroscopeAccumulatedTime = 0, this.gyroscopeLastEmitTime = 0, this.gyroscopeTimer !== null && (clearTimeout(this.gyroscopeTimer), this.gyroscopeTimer = null);
    }
    async startAcceleration(t = {}) {
      const r = await this.ensureReady();
      if (r.isErr()) return k(r.error);
      if (this.isAccelerationActive) return D(void 0);
      try {
        return this.normalizeAccelerationToENU = t.normalizeToENU ?? false, this.accelerationIntervalMs = t.frequency !== void 0 ? Math.floor(1e3 / t.frequency) : 0, this.resetAccelerationSamplingState(), this.accelerationIntervalMs = t.frequency !== void 0 ? Math.floor(1e3 / t.frequency) : 0, this.startMotionEvents(), this.isAccelerationActive = true, D(void 0);
      } catch (i) {
        return k(new ut("Failed to start acceleration monitoring", void 0, i));
      }
    }
    async startGyroscope(t = {}) {
      const r = await this.ensureReady();
      if (r.isErr()) return k(r.error);
      if (this.isGyroscopeActive) return D(void 0);
      try {
        return this.normalizeGyroscopeToENU = t.normalizeToENU ?? false, this.gyroscopeIntervalMs = t.frequency !== void 0 ? Math.floor(1e3 / t.frequency) : 0, this.resetGyroscopeSamplingState(), this.gyroscopeIntervalMs = t.frequency !== void 0 ? Math.floor(1e3 / t.frequency) : 0, this.startMotionEvents(), this.isGyroscopeActive = true, D(void 0);
      } catch (i) {
        return k(new ut("Failed to start gyroscope monitoring", void 0, i));
      }
    }
    stopAcceleration() {
      if (!this.isAccelerationActive) return D(void 0);
      try {
        return this.isAccelerationActive = false, this.lastAccelerationReading = null, this.normalizeAccelerationToENU = false, this.resetAccelerationSamplingState(), this.stopMotionEvents(), D(void 0);
      } catch (t) {
        return k(new ut("Failed to stop acceleration monitoring", void 0, t));
      }
    }
    stopGyroscope() {
      if (!this.isGyroscopeActive) return D(void 0);
      try {
        return this.isGyroscopeActive = false, this.lastGyroscopeReading = null, this.normalizeGyroscopeToENU = false, this.resetGyroscopeSamplingState(), this.stopMotionEvents(), D(void 0);
      } catch (t) {
        return k(new ut("Failed to stop gyroscope monitoring", void 0, t));
      }
    }
    async getAccelerationReading() {
      const t = await this.ensureReady();
      return t.isErr() ? k(t.error) : D(this.lastAccelerationReading);
    }
    async getGyroscopeReading() {
      const t = await this.ensureReady();
      return t.isErr() ? k(t.error) : D(this.lastGyroscopeReading);
    }
    async getCurrentOrientation() {
      const t = await this.ensureReady();
      return t.isErr() ? k(t.error) : D(this.lastRawOrientationReading);
    }
    onAccelerationReading(t) {
      const r = this.nextListenerId++;
      return this.accelerationListeners.set(r, t), this.lastAccelerationReading && t(this.lastAccelerationReading), r;
    }
    onGyroscopeReading(t) {
      const r = this.nextListenerId++;
      return this.gyroscopeListeners.set(r, t), this.lastGyroscopeReading && t(this.lastGyroscopeReading), r;
    }
    onOrientationChange(t) {
      const r = this.nextListenerId++;
      return this.orientationListeners.set(r, t), this.lastRawOrientationReading && t(this.lastRawOrientationReading), r;
    }
    removeEventListener(t) {
      return this.accelerationListeners.delete(t), this.gyroscopeListeners.delete(t), this.orientationListeners.delete(t), D(void 0);
    }
    dispose() {
      this.disposed || (this.disposed = true, this.stopAcceleration(), this.stopGyroscope(), this.stopOrientationEvents(), this.accelerationListeners.clear(), this.gyroscopeListeners.clear(), this.orientationListeners.clear(), this.initialized = false, this.initPromise = null, this.compensatedOrientation = null, this.lastAccelerationReading = null, this.lastGyroscopeReading = null, this.lastRawOrientationReading = null);
    }
    handleOrientationEvent(t) {
      if (t.alpha !== null && t.beta !== null && t.gamma !== null) {
        const r = {
          alpha: t.alpha,
          beta: t.beta,
          gamma: t.gamma,
          absolute: t.absolute,
          webkitCompassHeading: t.webkitCompassHeading,
          timestamp: t.timeStamp || performance.now()
        };
        this.lastRawOrientationReading = r, this.compensatedOrientation = this.getCompensatedOrientation(r);
        for (const i of this.orientationListeners.values()) try {
          i(r);
        } catch (a) {
          console.error("Error in orientation callback:", a);
        }
      }
    }
    getCompensatedOrientation(t) {
      const r = bh(t);
      return {
        alpha: r.alpha,
        beta: r.beta,
        gamma: r.gamma
      };
    }
    handleMotionEvent(t) {
      const r = t.timeStamp || performance.now();
      this.isAccelerationActive && this.processAccelerationData(t, r), this.isGyroscopeActive && this.processGyroscopeData(t, r);
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
      const r = t.timestamp - this.accelerationPrevReading.timestamp;
      if (r <= 0) {
        this.accelerationPrevReading = t;
        return;
      }
      this.accelerationAccumulatedX += (this.accelerationPrevReading.x + t.x) * r / 2, this.accelerationAccumulatedY += (this.accelerationPrevReading.y + t.y) * r / 2, this.accelerationAccumulatedZ += (this.accelerationPrevReading.z + t.z) * r / 2, this.accelerationAccumulatedTime += r, t.timestamp - this.accelerationLastEmitTime >= this.accelerationIntervalMs ? (this.flushAccelerationReadings(), this.accelerationPrevReading = t, this.accelerationAccumulatedX = t.x, this.accelerationAccumulatedY = t.y, this.accelerationAccumulatedZ = t.z, this.accelerationAccumulatedTime = 0, this.accelerationLastEmitTime = t.timestamp, this.accelerationTimer !== null && clearTimeout(this.accelerationTimer), this.accelerationTimer = window.setTimeout(() => this.flushAccelerationReadings(), this.accelerationIntervalMs)) : this.accelerationPrevReading = t;
    }
    flushAccelerationReadings() {
      if (this.accelerationPrevReading === null) {
        this.accelerationTimer !== null && (clearTimeout(this.accelerationTimer), this.accelerationTimer = null);
        return;
      }
      let t;
      if (this.accelerationAccumulatedTime === 0) t = this.accelerationPrevReading;
      else {
        const r = this.accelerationAccumulatedX / this.accelerationAccumulatedTime, i = this.accelerationAccumulatedY / this.accelerationAccumulatedTime, a = this.accelerationAccumulatedZ / this.accelerationAccumulatedTime;
        t = {
          x: r,
          y: i,
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
      const r = t.timestamp - this.gyroscopePrevReading.timestamp;
      if (r <= 0) {
        this.gyroscopePrevReading = t;
        return;
      }
      this.gyroscopeAccumulatedX += (this.gyroscopePrevReading.x + t.x) * r / 2, this.gyroscopeAccumulatedY += (this.gyroscopePrevReading.y + t.y) * r / 2, this.gyroscopeAccumulatedZ += (this.gyroscopePrevReading.z + t.z) * r / 2, this.gyroscopeAccumulatedTime += r, t.timestamp - this.gyroscopeLastEmitTime >= this.gyroscopeIntervalMs ? (this.flushGyroscopeReadings(), this.gyroscopePrevReading = t, this.gyroscopeAccumulatedX = t.x, this.gyroscopeAccumulatedY = t.y, this.gyroscopeAccumulatedZ = t.z, this.gyroscopeAccumulatedTime = 0, this.gyroscopeLastEmitTime = t.timestamp, this.gyroscopeTimer !== null && clearTimeout(this.gyroscopeTimer), this.gyroscopeTimer = window.setTimeout(() => this.flushGyroscopeReadings(), this.gyroscopeIntervalMs)) : this.gyroscopePrevReading = t;
    }
    flushGyroscopeReadings() {
      if (this.gyroscopePrevReading === null) {
        this.gyroscopeTimer !== null && (clearTimeout(this.gyroscopeTimer), this.gyroscopeTimer = null);
        return;
      }
      let t;
      if (this.gyroscopeAccumulatedTime === 0) t = this.gyroscopePrevReading;
      else {
        const r = this.gyroscopeAccumulatedX / this.gyroscopeAccumulatedTime, i = this.gyroscopeAccumulatedY / this.gyroscopeAccumulatedTime, a = this.gyroscopeAccumulatedZ / this.gyroscopeAccumulatedTime;
        t = {
          x: r,
          y: i,
          z: a,
          timestamp: this.gyroscopePrevReading.timestamp
        };
      }
      this.lastGyroscopeReading = t, this.notifyListeners(this.gyroscopeListeners, t, "gyroscope"), this.gyroscopePrevReading = null, this.gyroscopeAccumulatedX = 0, this.gyroscopeAccumulatedY = 0, this.gyroscopeAccumulatedZ = 0, this.gyroscopeAccumulatedTime = 0, this.gyroscopeTimer !== null && (clearTimeout(this.gyroscopeTimer), this.gyroscopeTimer = null);
    }
    processAccelerationData(t, r) {
      let i = t.acceleration, a = false;
      if ((!i || i.x === null || i.y === null || i.z === null) && (i = t.accelerationIncludingGravity, a = true), !i || i.x === null || i.y === null || i.z === null) return;
      let c = i.x, f = i.y, h = i.z;
      if (a && this.compensatedOrientation) {
        const v = this.computeGravityInDeviceFrame(this.compensatedOrientation);
        c -= v.x, f -= v.y, h -= v.z;
      }
      let p;
      this.normalizeAccelerationToENU && this.compensatedOrientation ? p = this.transformToENU(c, f, h, r, this.compensatedOrientation) : p = {
        x: c,
        y: f,
        z: h,
        timestamp: r
      }, this.addAccelerationReading(p);
    }
    processGyroscopeData(t, r) {
      const i = t.rotationRate;
      if (!i || i.alpha === null || i.beta === null || i.gamma === null) return;
      const a = i.beta, c = i.gamma, f = i.alpha;
      let h;
      this.normalizeGyroscopeToENU && this.compensatedOrientation ? h = this.transformToENU(a, c, f, r, this.compensatedOrientation) : h = {
        x: a,
        y: c,
        z: f,
        timestamp: r
      }, this.addGyroscopeReading(h);
    }
    notifyListeners(t, r, i) {
      for (const a of t.values()) try {
        a(r);
      } catch (c) {
        console.error(`Error in ${i} callback:`, c);
      }
    }
    updateRotationMatrices(t) {
      const r = -t.alpha * _Hn.DEG_TO_RAD, i = -t.beta * _Hn.DEG_TO_RAD, a = -t.gamma * _Hn.DEG_TO_RAD, c = Math.cos(r), f = Math.sin(r), h = Math.cos(i), p = Math.sin(i), v = Math.cos(a), g = Math.sin(a);
      this.matrixRz.set(0, 0, c), this.matrixRz.set(0, 1, -f), this.matrixRz.set(0, 2, 0), this.matrixRz.set(1, 0, f), this.matrixRz.set(1, 1, c), this.matrixRz.set(1, 2, 0), this.matrixRz.set(2, 0, 0), this.matrixRz.set(2, 1, 0), this.matrixRz.set(2, 2, 1), this.matrixRy.set(0, 0, v), this.matrixRy.set(0, 1, 0), this.matrixRy.set(0, 2, g), this.matrixRy.set(1, 0, 0), this.matrixRy.set(1, 1, 1), this.matrixRy.set(1, 2, 0), this.matrixRy.set(2, 0, -g), this.matrixRy.set(2, 1, 0), this.matrixRy.set(2, 2, v), this.matrixRx.set(0, 0, 1), this.matrixRx.set(0, 1, 0), this.matrixRx.set(0, 2, 0), this.matrixRx.set(1, 0, 0), this.matrixRx.set(1, 1, h), this.matrixRx.set(1, 2, -p), this.matrixRx.set(2, 0, 0), this.matrixRx.set(2, 1, p), this.matrixRx.set(2, 2, h), this.multiplyMatricesInPlace(this.matrixRx, this.matrixRy, this.matrixRTemp), this.multiplyMatricesInPlace(this.matrixRTemp, this.matrixRz, this.matrixR);
    }
    multiplyMatricesInPlace(t, r, i) {
      for (let a = 0; a < 3; a++) for (let c = 0; c < 3; c++) {
        let f = 0;
        for (let h = 0; h < 3; h++) f += t.get(a, h) * r.get(h, c);
        i.set(a, c, f);
      }
    }
    multiplyMatrixVectorInPlace(t, r, i) {
      for (let a = 0; a < 3; a++) {
        let c = 0;
        for (let f = 0; f < 3; f++) c += t.get(a, f) * r.get(f, 0);
        i.set(a, 0, c);
      }
    }
    transformToENU(t, r, i, a, c) {
      return this.updateRotationMatrices(c), this.vectorInput.set(0, 0, t), this.vectorInput.set(1, 0, r), this.vectorInput.set(2, 0, i), this.multiplyMatrixVectorInPlace(this.matrixR, this.vectorInput, this.vectorOutput), {
        x: this.vectorOutput.get(0, 0),
        y: this.vectorOutput.get(1, 0),
        z: this.vectorOutput.get(2, 0),
        timestamp: a
      };
    }
    computeGravityInDeviceFrame(t) {
      this.updateRotationMatrices(t);
      let r = 0, i = 0, a = 0;
      for (let c = 0; c < 3; c++) {
        const f = this.gravityENU.get(c, 0);
        r += this.matrixR.get(c, 0) * f, i += this.matrixR.get(c, 1) * f, a += this.matrixR.get(c, 2) * f;
      }
      return {
        x: r,
        y: i,
        z: a
      };
    }
  };
  __publicField(_Hn, "GRAVITY", 9.81);
  __publicField(_Hn, "DEG_TO_RAD", Math.PI / 180);
  let Hn = _Hn;
  const _li = class _li {
    constructor(t) {
      __publicField(this, "context");
      __publicField(this, "storageProvider", null);
      __publicField(this, "geolocationProvider", null);
      __publicField(this, "fileProvider", null);
      __publicField(this, "imuProvider", null);
      __publicField(this, "initialized", false);
      this.context = t;
    }
    static async init(t) {
      const r = yl.getPlatformContext(), i = new _li(r), a = await i.initializeProviders(t);
      return a.isErr() ? k(a.error) : (_li.instance = i, D(i));
    }
    static getInstance() {
      return _li.instance ? D(_li.instance) : k(new Ki("Platform services not initialized", Ai.NOT_INITIALIZED));
    }
    async initializeProviders(t) {
      try {
        return this.storageProvider = this.createStorageProvider(t == null ? void 0 : t.storage), this.imuProvider = await this.createIMUProvider(t == null ? void 0 : t.imu), this.geolocationProvider = await this.createGeolocationProvider(t == null ? void 0 : t.geolocation), this.fileProvider = this.createFileProvider(), this.initialized = true, D(void 0);
      } catch (r) {
        return k(new Ki("Failed to initialize platform providers", Ai.DETECTION_FAILED, r));
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
      let r;
      switch (this.context.environment) {
        case ft.TAURI:
          r = new Qy();
          break;
        case ft.WEB:
        case ft.MOBILE_WEB:
        case ft.UNKNOWN:
        default:
          r = new no();
          break;
      }
      const i = await r.init(t == null ? void 0 : t.permissionCallback);
      return i.isErr() ? (console.error("Failed to initialize geolocation provider", i.error), null) : r;
    }
    createFileProvider() {
      return {
        init: async () => k(new ut("File provider not implemented")),
        readFile: async () => k(new ut("File provider not implemented")),
        writeFile: async () => k(new ut("File provider not implemented")),
        deleteFile: async () => k(new ut("File provider not implemented")),
        listFiles: async () => k(new ut("File provider not implemented")),
        exists: async () => k(new ut("File provider not implemented")),
        isSupported: () => false
      };
    }
    async createIMUProvider(t) {
      const r = new Hn(), i = await r.init(t == null ? void 0 : t.permissionCallback);
      return i.isErr() ? (console.error("Failed to initialize IMU provider", i.error), null) : r;
    }
    getContext() {
      return this.context;
    }
    getStorage() {
      return this.storageProvider ? D(this.storageProvider) : k(new Ki("Storage provider not initialized", Ai.DETECTION_FAILED));
    }
    getGeolocation() {
      return this.geolocationProvider ? D(this.geolocationProvider) : k(new Ki("Geolocation provider not initialized", Ai.DETECTION_FAILED));
    }
    getFile() {
      return this.fileProvider ? D(this.fileProvider) : k(new Ki("File provider not initialized", Ai.DETECTION_FAILED));
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
      _li.instance = null;
    }
    getGeolocationProvider() {
      return this.geolocationProvider;
    }
    getIMU() {
      return this.imuProvider ? D(this.imuProvider) : k(new Ki("IMU provider not initialized", Ai.DETECTION_FAILED));
    }
  };
  __publicField(_li, "instance", null);
  let li = _li;
  Do = function() {
    return li.getInstance();
  };
  gb = function() {
    return typeof navigator > "u" ? false : yl.detectEnvironment() === ft.TAURI;
  };
  class dr {
    constructor(t, r, i = 0) {
      __publicField(this, "latitude");
      __publicField(this, "longitude");
      __publicField(this, "accuracy");
      this.latitude = t, this.longitude = r, this.accuracy = i;
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
  class mb {
    constructor(t) {
      __publicField(this, "strategies", []);
      __publicField(this, "activeStrategy", null);
      __publicField(this, "watcherCount", 0);
      __publicField(this, "isInitialized", false);
      this.strategies = t;
    }
    async initialise() {
      if (this.isInitialized) return D(void 0);
      for (const t of this.strategies) try {
        if (await t.isAvailable()) {
          if (this.activeStrategy = t, (await this.activeStrategy.initialize()).isErr()) {
            console.info(`[BackendManager] Backend ${t.name} not initialised`);
            continue;
          }
          return this.isInitialized = true, console.info(`[BackendManager] Initialised with ${t.name} backend`), D(void 0);
        } else console.info(`[BackendManager] Fail to initialise with ${t.name} backend, trying fallbacks`);
      } catch (r) {
        console.warn(`[BackendManager] Failed to test ${t.name} backend:`, r);
        continue;
      }
      return k(new Oe("No backend available", "BACKEND_NOT_AVAILABLE"));
    }
    async startWatching(t) {
      if (!this.isInitialized) return k(new Oe("Backend not initialized", "BACKEND_NOT_INITIALIZED"));
      if (!this.activeStrategy) return k(new Oe("No backend available", "BACKEND_NOT_AVAILABLE"));
      if (this.watcherCount === 0) {
        const r = await this.activeStrategy.startWatching(t);
        if (r.isErr()) return console.warn(`[BackendManager] Failed to start ${this.activeStrategy.name} backend:`, r.error), k(r.error);
      }
      return this.watcherCount++, console.info(`[BackendManager] Started watching with ${this.activeStrategy.name} backend (count: ${this.watcherCount})`), D(this.activeStrategy.name);
    }
    async stopWatching() {
      var _a3;
      if (this.watcherCount === 0 || !this.activeStrategy) return D(void 0);
      if (this.watcherCount--, this.watcherCount === 0) {
        const t = await this.activeStrategy.stopWatching();
        if (t.isErr()) return k(new Oe(`Failed to stop ${((_a3 = this.activeStrategy) == null ? void 0 : _a3.name) || "unknown"} backend`, "UPDATE_SERVICE_ERROR", t.error));
        console.info("[BackendManager] Stopped watching location");
      } else console.info(`[BackendManager] Decremented watcher count (count: ${this.watcherCount})`);
      return D(void 0);
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
  class wb {
    constructor() {
      __publicField(this, "callbacks", /* @__PURE__ */ new Set());
    }
    subscribe(t) {
      return this.callbacks.add(t), () => this.callbacks.delete(t);
    }
    emit(t, r) {
      for (const i of this.callbacks) try {
        i(t, r);
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
  class yb {
    constructor() {
      __publicField(this, "currentLocation", null);
      __publicField(this, "currentBackend", null);
      __publicField(this, "eventEmitter");
      this.eventEmitter = new wb();
    }
    updateLocation(t, r) {
      this.currentLocation = t, this.currentBackend = r, this.eventEmitter.emit(t, r);
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
  class bb {
    constructor() {
      __publicField(this, "name", "gps");
      __publicField(this, "provider", null);
      __publicField(this, "watchId", null);
      __publicField(this, "isInitialized", false);
    }
    async initialize() {
      if (this.isInitialized) return D(void 0);
      try {
        const t = Do();
        if (t.isErr()) return k(new Oe("Platform services not available", "BACKEND_NOT_AVAILABLE", t.error));
        const r = t.value.getGeolocationProvider();
        return r ? (this.provider = r, this.isInitialized = true, D(void 0)) : k(new Oe("Geolocation provider not available", "BACKEND_NOT_AVAILABLE"));
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
      const r = await this.provider.watchPosition((i) => {
        const a = new dr(i.coords.latitude, i.coords.longitude, i.coords.accuracy);
        t(a, "gps");
      });
      return r.isErr() ? k(new Oe("Failed to start watching position", "UPDATE_SERVICE_ERROR", r.error)) : (this.watchId = r.value, D(void 0));
    }
    async stopWatching() {
      if (this.watchId !== null && this.provider) {
        const t = this.provider.clearWatch(this.watchId);
        if (t.isErr()) return k(new Oe("Failed to stop watching position", "UPDATE_SERVICE_ERROR", t.error));
        this.watchId = null;
      }
      return D(void 0);
    }
    async getCurrentPosition() {
      if (!this.provider) return k(new Oe("GPS backend not initialized", "BACKEND_NOT_AVAILABLE"));
      const t = await this.provider.getCurrentPosition();
      if (t.isErr()) return k(new Oe("Failed to get current position", "UPDATE_SERVICE_ERROR", t.error));
      const r = t.value;
      return D(new dr(r.coords.latitude, r.coords.longitude, r.coords.accuracy));
    }
  }
  const eu = "https://ipapi.co/json/";
  class vb {
    constructor() {
      __publicField(this, "name", "ip");
      __publicField(this, "watchCallbacks", /* @__PURE__ */ new Map());
      __publicField(this, "watchInterval", null);
      __publicField(this, "lastLocation", null);
      __publicField(this, "nextCallbackId", 1);
      __publicField(this, "activeWatcherCount", 0);
    }
    async initialize() {
      return D();
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
      const r = this.nextCallbackId++;
      return this.watchCallbacks.set(r, t), this.activeWatcherCount++, this.watchInterval === null && (this.watchInterval = setInterval(() => {
        this.updateLocation();
      }, 3e4), this.updateLocation()), D(void 0);
    }
    async stopWatching() {
      try {
        return this.watchCallbacks.clear(), this.activeWatcherCount = 0, this.watchInterval !== null && (clearInterval(this.watchInterval), this.watchInterval = null), this.lastLocation = null, D(void 0);
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
        const r = await t.json(), i = new dr(r.latitude, r.longitude, 5e4);
        return console.info("[IPFallbackBackend] Successfully retrieved location from IP service"), D(i);
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
        const r = t.value;
        if (!this.lastLocation || Math.abs(r.latitude - this.lastLocation.latitude) > 1e-4 || Math.abs(r.longitude - this.lastLocation.longitude) > 1e-4) {
          this.lastLocation = r;
          for (const i of this.watchCallbacks.values()) try {
            i(r, "ip");
          } catch (a) {
            console.error("[IPFallbackBackend] Callback error:", a);
          }
        }
      } catch (t) {
        console.error("[IPFallbackBackend] Error updating location:", t);
      }
    }
  }
  class _b {
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
        const r = t.value.getIMU();
        return r.isErr() ? k(new Oe("IMU provider not available", "BACKEND_NOT_AVAILABLE", r.error)) : (this.imuProvider = r.value, D(void 0));
      } catch (t) {
        return k(new Oe("Exception during IMU initialization", "UPDATE_SERVICE_ERROR", t));
      }
    }
    async isAvailable() {
      return !this.imuProvider && (await this.initialize()).isErr() ? false : !!this.imuProvider;
    }
    async startListening(t) {
      if (!this.imuProvider) return k(new Oe("IMU not initialized", "BACKEND_NOT_AVAILABLE"));
      if (this.isListening) return this.imuCallbacks.push(t), D(void 0);
      try {
        return this.imuCallbacks.push(t), this.isListening = true, this.startIMUPolling(), console.info("[IMUFusionManager] Started IMU sensor fusion"), D(void 0);
      } catch (r) {
        return k(new Oe("Failed to start IMU listening", "UPDATE_SERVICE_ERROR", r));
      }
    }
    async stopListening() {
      if (!this.isListening || !this.imuProvider) return D(void 0);
      try {
        return this.imuUpdateInterval && (clearInterval(this.imuUpdateInterval), this.imuUpdateInterval = null), this.imuCallbacks = [], this.isListening = false, console.info("[IMUFusionManager] Stopped IMU sensor fusion"), D(void 0);
      } catch (t) {
        return k(new Oe("Failed to stop IMU listening", "UPDATE_SERVICE_ERROR", t));
      }
    }
    startIMUPolling() {
      this.imuProvider && (this.imuUpdateInterval = setInterval(async () => {
        try {
          const t = await this.getCombinedIMUReading();
          if (t) for (const r of this.imuCallbacks) try {
            r(t);
          } catch (i) {
            console.error("[IMUFusionManager] IMU callback error:", i);
          }
        } catch (t) {
          console.error("[IMUFusionManager] Error polling IMU:", t);
        }
      }, this.imuUpdateIntervalMs));
    }
    async getCombinedIMUReading() {
      if (!this.imuProvider) return null;
      try {
        const [t, r] = await Promise.all([
          this.imuProvider.getAccelerationReading(),
          this.imuProvider.getGyroscopeReading()
        ]), i = {
          timestamp: performance.now()
        };
        return t.isOk() && t.value && (i.acceleration = {
          x: t.value.x,
          y: t.value.y,
          z: t.value.z
        }), r.isOk() && r.value && (i.gyroscope = {
          x: r.value.x,
          y: r.value.y,
          z: r.value.z
        }), i;
      } catch (t) {
        return console.error("[IMUFusionManager] Error getting combined IMU reading:", t), null;
      }
    }
  }
  class Eb {
    constructor() {
      __publicField(this, "worker", null);
      __publicField(this, "pendingRequests", /* @__PURE__ */ new Map());
      __publicField(this, "nextId", 0);
      __publicField(this, "isInitialized", false);
      __publicField(this, "workerModulePromise", null);
    }
    async initialize(t, r) {
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
      const i = {
        type: "INITIALIZE",
        id: this.nextId++,
        config: t,
        initialReading: r
      }, a = await this.sendMessage(i);
      if (!a.success) throw new Error(a.error || "Failed to initialize worker");
      this.isInitialized = true;
    }
    async processGPS(t) {
      if (!this.isInitialized || !this.worker) throw new Error("Worker not initialized");
      const r = {
        type: "PROCESS_GPS",
        id: this.nextId++,
        reading: t
      }, i = await this.sendMessage(r);
      if (!i.success) throw new Error(i.error || "Failed to process GPS reading");
    }
    async processIMU(t) {
      if (!this.isInitialized || !this.worker) throw new Error("Worker not initialized");
      const r = {
        type: "PROCESS_IMU",
        id: this.nextId++,
        reading: t
      }, i = await this.sendMessage(r);
      if (!i.success) throw new Error(i.error || "Failed to process IMU reading");
    }
    async getFilteredPosition() {
      if (!this.isInitialized || !this.worker) throw new Error("Worker not initialized");
      const t = {
        type: "GET_FILTERED_POSITION",
        id: this.nextId++
      }, r = await this.sendMessage(t);
      if (!r.success) throw new Error(r.error || "Failed to get filtered position");
      return r.data.position;
    }
    async getState() {
      if (!this.isInitialized || !this.worker) throw new Error("Worker not initialized");
      const t = {
        type: "GET_STATE",
        id: this.nextId++
      }, r = await this.sendMessage(t);
      if (!r.success) throw new Error(r.error || "Failed to get state");
      return r.data.state;
    }
    async getLastKalmanGain() {
      if (!this.isInitialized || !this.worker) throw new Error("Worker not initialized");
      const t = {
        type: "GET_KALMAN_GAIN",
        id: this.nextId++
      }, r = await this.sendMessage(t);
      if (!r.success) throw new Error(r.error || "Failed to get Kalman gain");
      return r.data.gain;
    }
    async reset() {
      const t = {
        type: "RESET",
        id: this.nextId++
      }, r = await this.sendMessage(t);
      if (!r.success) throw new Error(r.error || "Failed to reset worker");
      this.isInitialized = false;
    }
    dispose() {
      this.worker && (this.worker.terminate(), this.worker = null), this.workerModulePromise = null, this.pendingRequests.clear(), this.isInitialized = false;
    }
    isReady() {
      return this.isInitialized && this.worker !== null;
    }
    sendMessage(t) {
      return new Promise((r, i) => {
        if (!this.worker) {
          i(new Error("Worker not available"));
          return;
        }
        this.pendingRequests.set(t.id, {
          resolve: r,
          reject: i
        }), this.worker.postMessage(t);
      });
    }
    handleWorkerMessage(t) {
      const r = t.data;
      if (r.type === "RESULT") {
        const i = this.pendingRequests.get(r.originalId);
        i && (this.pendingRequests.delete(r.originalId), i.resolve({
          success: true,
          data: r.data
        }));
      } else if (r.type === "ERROR") if (r.originalId !== void 0) {
        const i = this.pendingRequests.get(r.originalId);
        i && (this.pendingRequests.delete(r.originalId), console.error("[KalmanWorkerClient] Worker error for request", r.originalId, ":", r.error), i.resolve({
          success: false,
          error: r.error
        }));
      } else console.error("[KalmanWorkerClient] Worker error without originalId:", r.error);
    }
    handleWorkerError(t) {
      console.error("[KalmanWorkerClient] Worker error:", t);
      for (const [, r] of this.pendingRequests) r.reject(new Error(`Worker error: ${t.message}`));
      this.pendingRequests.clear(), this.isInitialized = false, this.worker = null;
    }
  }
  let Ce;
  const vh = typeof TextDecoder < "u" ? new TextDecoder("utf-8", {
    ignoreBOM: true,
    fatal: true
  }) : {
    decode: () => {
      throw Error("TextDecoder not available");
    }
  };
  typeof TextDecoder < "u" && vh.decode();
  let Ln = null;
  function js() {
    return (Ln === null || Ln.byteLength === 0) && (Ln = new Uint8Array(Ce.memory.buffer)), Ln;
  }
  function xi(e, t) {
    return e = e >>> 0, vh.decode(js().subarray(e, e + t));
  }
  let so = 0;
  const Us = typeof TextEncoder < "u" ? new TextEncoder("utf-8") : {
    encode: () => {
      throw Error("TextEncoder not available");
    }
  }, Ib = typeof Us.encodeInto == "function" ? function(e, t) {
    return Us.encodeInto(e, t);
  } : function(e, t) {
    const r = Us.encode(e);
    return t.set(r), {
      read: e.length,
      written: r.length
    };
  };
  function _h(e, t, r) {
    if (r === void 0) {
      const h = Us.encode(e), p = t(h.length, 1) >>> 0;
      return js().subarray(p, p + h.length).set(h), so = h.length, p;
    }
    let i = e.length, a = t(i, 1) >>> 0;
    const c = js();
    let f = 0;
    for (; f < i; f++) {
      const h = e.charCodeAt(f);
      if (h > 127) break;
      c[a + f] = h;
    }
    if (f !== i) {
      f !== 0 && (e = e.slice(f)), a = r(a, i, i = f + e.length * 3, 1) >>> 0;
      const h = js().subarray(a + f, a + i), p = Ib(e, h);
      f += p.written, a = r(a, i, f, 1) >>> 0;
    }
    return so = f, a;
  }
  function Sb(e) {
    return e == null;
  }
  let Ri = null;
  function tu() {
    return (Ri === null || Ri.buffer.detached === true || Ri.buffer.detached === void 0 && Ri.buffer !== Ce.memory.buffer) && (Ri = new DataView(Ce.memory.buffer)), Ri;
  }
  function Eh(e) {
    const t = Ce.__wbindgen_export_0.get(e);
    return Ce.__externref_table_dealloc(e), t;
  }
  function ua(e, t) {
    if (!(e instanceof t)) throw new Error(`expected instance of ${t.name}`);
  }
  function $a(e, t, r) {
    ua(e, pn), ua(t, pn), ua(r, vl);
    const i = Ce.transform(e.__wbg_ptr, t.__wbg_ptr, r.__wbg_ptr);
    if (i[1]) throw Eh(i[0]);
  }
  const ru = typeof FinalizationRegistry > "u" ? {
    register: () => {
    },
    unregister: () => {
    }
  } : new FinalizationRegistry((e) => Ce.__wbg_point_free(e >>> 0, 1));
  class vl {
    __destroy_into_raw() {
      const t = this.__wbg_ptr;
      return this.__wbg_ptr = 0, ru.unregister(this), t;
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
    constructor(t, r, i) {
      const a = Ce.point_new(t, r, i);
      return this.__wbg_ptr = a >>> 0, ru.register(this, this.__wbg_ptr, this), this;
    }
  }
  const iu = typeof FinalizationRegistry > "u" ? {
    register: () => {
    },
    unregister: () => {
    }
  } : new FinalizationRegistry((e) => Ce.__wbg_projection_free(e >>> 0, 1));
  class pn {
    __destroy_into_raw() {
      const t = this.__wbg_ptr;
      return this.__wbg_ptr = 0, iu.unregister(this), t;
    }
    free() {
      const t = this.__destroy_into_raw();
      Ce.__wbg_projection_free(t, 0);
    }
    constructor(t) {
      const r = _h(t, Ce.__wbindgen_malloc, Ce.__wbindgen_realloc), i = so, a = Ce.projection_new(r, i);
      if (a[2]) throw Eh(a[1]);
      return this.__wbg_ptr = a[0] >>> 0, iu.register(this, this.__wbg_ptr, this), this;
    }
    get projName() {
      let t, r;
      try {
        const i = Ce.projection_projName(this.__wbg_ptr);
        return t = i[0], r = i[1], xi(i[0], i[1]);
      } finally {
        Ce.__wbindgen_free(t, r, 1);
      }
    }
    get isLatlon() {
      return Ce.projection_isLatlon(this.__wbg_ptr) !== 0;
    }
    get isGeocentric() {
      return Ce.projection_isGeocentric(this.__wbg_ptr) !== 0;
    }
    get axis() {
      let t, r;
      try {
        const i = Ce.projection_axis(this.__wbg_ptr);
        return t = i[0], r = i[1], xi(i[0], i[1]);
      } finally {
        Ce.__wbindgen_free(t, r, 1);
      }
    }
    get isNormalizedAxis() {
      return Ce.projection_isNormalizedAxis(this.__wbg_ptr) !== 0;
    }
    get to_meter() {
      return Ce.projection_to_meter(this.__wbg_ptr);
    }
    get units() {
      let t, r;
      try {
        const i = Ce.projection_units(this.__wbg_ptr);
        return t = i[0], r = i[1], xi(i[0], i[1]);
      } finally {
        Ce.__wbindgen_free(t, r, 1);
      }
    }
  }
  async function Tb(e, t) {
    if (typeof Response == "function" && e instanceof Response) {
      if (typeof WebAssembly.instantiateStreaming == "function") try {
        return await WebAssembly.instantiateStreaming(e, t);
      } catch (i) {
        if (e.headers.get("Content-Type") != "application/wasm") console.warn("`WebAssembly.instantiateStreaming` failed because your server does not serve Wasm with `application/wasm` MIME type. Falling back to `WebAssembly.instantiate` which is slower. Original error:\n", i);
        else throw i;
      }
      const r = await e.arrayBuffer();
      return await WebAssembly.instantiate(r, t);
    } else {
      const r = await WebAssembly.instantiate(e, t);
      return r instanceof WebAssembly.Instance ? {
        instance: r,
        module: e
      } : r;
    }
  }
  function Mb() {
    const e = {};
    return e.wbg = {}, e.wbg.__wbg_buffer_e6c6daaa78528d53 = function(t) {
      return t.buffer;
    }, e.wbg.__wbg_getFloat32_e0872364daa466bb = function(t, r, i) {
      return t.getFloat32(r >>> 0, i !== 0);
    }, e.wbg.__wbg_getFloat64_3c55a5d18420aa12 = function(t, r, i) {
      return t.getFloat64(r >>> 0, i !== 0);
    }, e.wbg.__wbg_getInt32_6ea30555a7e6366d = function(t, r, i) {
      return t.getInt32(r >>> 0, i !== 0);
    }, e.wbg.__wbg_getUint32_78580012d2915dec = function(t, r, i) {
      return t.getUint32(r >>> 0, i !== 0);
    }, e.wbg.__wbg_parseFloat_40655e71a57d91e0 = function(t, r) {
      return parseFloat(xi(t, r));
    }, e.wbg.__wbg_parseInt_7deceafc75400ae4 = function(t, r, i) {
      return parseInt(xi(t, r), i);
    }, e.wbg.__wbg_slice_ab0b7e3d75dccdee = function(t, r, i) {
      return t.slice(r >>> 0, i >>> 0);
    }, e.wbg.__wbindgen_error_new = function(t, r) {
      return new Error(xi(t, r));
    }, e.wbg.__wbindgen_init_externref_table = function() {
      const t = Ce.__wbindgen_export_0, r = t.grow(4);
      t.set(0, void 0), t.set(r + 0, void 0), t.set(r + 1, null), t.set(r + 2, true), t.set(r + 3, false);
    }, e.wbg.__wbindgen_string_get = function(t, r) {
      const i = r, a = typeof i == "string" ? i : void 0;
      var c = Sb(a) ? 0 : _h(a, Ce.__wbindgen_malloc, Ce.__wbindgen_realloc), f = so;
      tu().setInt32(t + 4, f, true), tu().setInt32(t + 0, c, true);
    }, e.wbg.__wbindgen_throw = function(t, r) {
      throw new Error(xi(t, r));
    }, e;
  }
  function Pb(e, t) {
    return Ce = e.exports, Ih.__wbindgen_wasm_module = t, Ri = null, Ln = null, Ce.__wbindgen_start(), Ce;
  }
  async function Ih(e) {
    if (Ce !== void 0) return Ce;
    typeof e < "u" && (Object.getPrototypeOf(e) === Object.prototype ? { module_or_path: e } = e : console.warn("using deprecated parameters for the initialization function; pass a single object instead")), typeof e > "u" && (e = new URL("" + new URL("proj4rs_bg-Biz-E4lt.wasm", import.meta.url).href, import.meta.url));
    const t = Mb();
    (typeof e == "string" || typeof Request == "function" && e instanceof Request || typeof URL == "function" && e instanceof URL) && (e = fetch(e));
    const { instance: r, module: i } = await Tb(await e, t);
    return Pb(r, i);
  }
  const kb = "" + new URL("proj4rs_bg-Biz-E4lt.wasm", import.meta.url).href, zs = {
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
        module_or_path: kb
      }), fa = true, console.log("[Proj4WASM] WASM module loaded successfully.");
    } catch (e) {
      console.warn("[Proj4WASM] Failed to load WASM module, using the JS fallback."), console.error(e), fa = true;
    }
  }
  async function nu(e, t, r) {
    await Sh();
    const i = new pn(e), a = new pn(t), c = new vl(r[0], r[1], 0);
    try {
      return $a(i, a, c), [
        c.x,
        c.y
      ];
    } catch (f) {
      throw new Error(`Failed to transform coordinate: ${f instanceof Error ? f.message : String(f)}`);
    } finally {
      i.free(), a.free(), c.free();
    }
  }
  function Ab(e, t) {
    const r = t.x - e.x, i = t.y - e.y;
    return Math.sqrt(r * r + i * i);
  }
  su = function(e, t) {
    const i = e.latitude * Math.PI / 180, a = t.latitude * Math.PI / 180, c = (t.latitude - e.latitude) * Math.PI / 180, f = (t.longitude - e.longitude) * Math.PI / 180, h = Math.sin(c / 2) * Math.sin(c / 2) + Math.cos(i) * Math.cos(a) * Math.sin(f / 2) * Math.sin(f / 2);
    return 6371e3 * (2 * Math.atan2(Math.sqrt(h), Math.sqrt(1 - h)));
  };
  async function Rb(e, t, r = {}) {
    const { projection: i = zs.CGCS2000_3_DEGREE, useHaversine: a = false } = r;
    if (a) return su(e, t);
    try {
      const c = await nu(zs.WGS84, i, [
        e.longitude,
        e.latitude
      ]), f = await nu(zs.WGS84, i, [
        t.longitude,
        t.latitude
      ]);
      return Ab({
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
  l1 = async function(e, t = {}) {
    if (e.length < 2) return 0;
    let r = 0;
    for (let i = 1; i < e.length; i++) r += await Rb(e[i - 1], e[i], t);
    return r;
  };
  c1 = function(e) {
    return e < 1e3 ? `${Math.round(e)} m` : e < 1e4 ? `${(e / 1e3).toFixed(1)} km` : `${Math.round(e / 1e3)} km`;
  };
  const { sin: Kt, cos: Cb, sqrt: _l, abs: oo, PI: Ft } = Math, ou = 6378245, au = 0.006693421622965823;
  function Th(e, t) {
    return e >= 72.004 && e <= 137.8347 && t >= 0.8293 && t <= 55.8271;
  }
  function Ob(e, t) {
    let r = -100 + 2 * e + 3 * t + 0.2 * t * t + 0.1 * e * t + 0.2 * _l(oo(e));
    return r += (20 * Kt(6 * e * Ft) + 20 * Kt(2 * e * Ft)) * 2 / 3, r += (20 * Kt(t * Ft) + 40 * Kt(t / 3 * Ft)) * 2 / 3, r += (160 * Kt(t / 12 * Ft) + 320 * Kt(t * Ft / 30)) * 2 / 3, r;
  }
  function xb(e, t) {
    let r = 300 + e + 2 * t + 0.1 * e * e + 0.1 * e * t + 0.1 * _l(oo(e));
    return r += (20 * Kt(6 * e * Ft) + 20 * Kt(2 * e * Ft)) * 2 / 3, r += (20 * Kt(e * Ft) + 40 * Kt(e / 3 * Ft)) * 2 / 3, r += (150 * Kt(e / 12 * Ft) + 300 * Kt(e / 30 * Ft)) * 2 / 3, r;
  }
  function Nb(e, t) {
    let r = xb(e - 105, t - 35), i = Ob(e - 105, t - 35);
    const a = t / 180 * Ft;
    let c = Kt(a);
    c = 1 - au * c * c;
    const f = _l(c);
    return r = r * 180 / (ou / f * Cb(a) * Ft), i = i * 180 / (ou * (1 - au) / (c * f) * Ft), [
      r,
      i
    ];
  }
  function fi(e) {
    const [t, r] = e;
    if (!Th(t, r)) return [
      t,
      r
    ];
    const i = Nb(t, r);
    return [
      t + i[0],
      r + i[1]
    ];
  }
  function gn(e) {
    const [t, r] = e;
    if (!Th(t, r)) return [
      t,
      r
    ];
    let [i, a] = [
      t,
      r
    ], c = fi([
      i,
      a
    ]), f = c[0] - t, h = c[1] - r;
    for (; oo(f) > 1e-6 || oo(h) > 1e-6; ) i -= f, a -= h, c = fi([
      i,
      a
    ]), f = c[0] - t, h = c[1] - r;
    return [
      i,
      a
    ];
  }
  const { sin: ao, cos: lo, atan2: Mh, sqrt: Ph, PI: Lb } = Math, co = Lb * 3e3 / 180;
  function rn(e) {
    const [t, r] = e, i = t - 65e-4, a = r - 6e-3, c = Ph(i * i + a * a) - 2e-5 * ao(a * co), f = Mh(a, i) - 3e-6 * lo(i * co), h = c * lo(f), p = c * ao(f);
    return [
      h,
      p
    ];
  }
  function mn(e) {
    const [t, r] = e, i = t, a = r, c = Ph(i * i + a * a) + 2e-5 * ao(a * co), f = Mh(a, i) + 3e-6 * lo(i * co), h = c * lo(f) + 65e-4, p = c * ao(f) + 6e-3;
    return [
      h,
      p
    ];
  }
  const lu = 180 / Math.PI, cu = Math.PI / 180, uo = 6378137, ti = 20037508342789244e-9;
  function Ps(e) {
    return [
      e[0] * lu / uo,
      (Math.PI * 0.5 - 2 * Math.atan(Math.exp(-e[1] / uo))) * lu
    ];
  }
  function Fo(e) {
    const t = Math.abs(e[0]) <= 180 ? e[0] : e[0] - (e[0] < 0 ? -1 : 1) * 360, r = [
      uo * t * cu,
      uo * Math.log(Math.tan(Math.PI * 0.25 + 0.5 * e[1] * cu))
    ];
    return r[0] > ti && (r[0] = ti), r[0] < -ti && (r[0] = -ti), r[1] > ti && (r[1] = ti), r[1] < -ti && (r[1] = -ti), r;
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
  ], Db = [
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
  ], Fb = [
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
  function kh(e, t, r) {
    const i = fo(t) / r[9];
    let a = r[0] + r[1] * fo(e), c = r[2] + r[3] * i + r[4] * Math.pow(i, 2) + r[5] * Math.pow(i, 3) + r[6] * Math.pow(i, 4) + r[7] * Math.pow(i, 5) + r[8] * Math.pow(i, 6);
    return a *= e < 0 ? -1 : 1, c *= t < 0 ? -1 : 1, [
      a,
      c
    ];
  }
  function jo(e) {
    const [t, r] = e;
    let i = [];
    for (let a = 0; a < fu.length; a++) if (fo(r) > fu[a]) {
      i = Fb[a];
      break;
    }
    return kh(t, r, i);
  }
  function ks(e) {
    const [t, r] = e;
    let i = [];
    for (let a = 0; a < uu.length; a++) if (fo(r) >= uu[a]) {
      i = Db[a];
      break;
    }
    return kh(t, r, i);
  }
  function ri(e, t) {
    if (!e) throw new Error(t);
  }
  function Ah(e) {
    return !!e && Object.prototype.toString.call(e) === "[object Array]";
  }
  function hu(e) {
    return !isNaN(Number(e)) && e !== null && !Ah(e);
  }
  function sr(...e) {
    const t = e.length - 1;
    return function(...r) {
      let i = t, a = e[t].apply(null, r);
      for (; i--; ) a = e[i].call(null, a);
      return a;
    };
  }
  function Rh(e, t, r = false) {
    if (e === null) return;
    let i, a, c, f, h, p, v = 0, g = 0, I, R;
    const { type: A } = e, j = A === "FeatureCollection", x = A === "Feature", pe = j ? e.features.length : 1;
    for (let se = 0; se < pe; se++) {
      I = j ? e.features[se].geometry : x ? e.geometry : e, R = I ? I.type === "GeometryCollection" : false, p = R ? I.geometries.length : 1;
      for (let U = 0; U < p; U++) {
        let Y = 0, $ = 0;
        if (f = R ? I.geometries[U] : I, f === null) continue;
        const ue = f.type;
        switch (v = r && (ue === "Polygon" || ue === "MultiPolygon") ? 1 : 0, ue) {
          case null:
            break;
          case "Point":
            if (h = f.coordinates, t(h, g, se, Y, $) === false) return false;
            g++, Y++;
            break;
          case "LineString":
          case "MultiPoint":
            for (h = f.coordinates, i = 0; i < h.length; i++) {
              if (t(h[i], g, se, Y, $) === false) return false;
              g++, ue === "MultiPoint" && Y++;
            }
            ue === "LineString" && Y++;
            break;
          case "Polygon":
          case "MultiLineString":
            for (h = f.coordinates, i = 0; i < h.length; i++) {
              for (a = 0; a < h[i].length - v; a++) {
                if (t(h[i][a], g, se, Y, $) === false) return false;
                g++;
              }
              ue === "MultiLineString" && Y++, ue === "Polygon" && $++;
            }
            ue === "Polygon" && Y++;
            break;
          case "MultiPolygon":
            for (h = f.coordinates, i = 0; i < h.length; i++) {
              for ($ = 0, a = 0; a < h[i].length; a++) {
                for (c = 0; c < h[i][a].length - v; c++) {
                  if (t(h[i][a][c], g, se, Y, $) === false) return false;
                  g++;
                }
                $++;
              }
              Y++;
            }
            break;
          case "GeometryCollection":
            for (i = 0; i < f.geometries.length; i++) if (Rh(f.geometries[i], t, r) === false) return false;
            break;
          default:
            throw new Error("Unknown Geometry Type");
        }
      }
    }
  }
  var ot;
  (function(e) {
    e.WGS84 = "WGS84", e.WGS1984 = "WGS84", e.EPSG4326 = "WGS84", e.GCJ02 = "GCJ02", e.AMap = "GCJ02", e.BD09 = "BD09", e.BD09LL = "BD09", e.Baidu = "BD09", e.BMap = "BD09", e.BD09MC = "BD09MC", e.BD09Meter = "BD09MC", e.EPSG3857 = "EPSG3857", e.EPSG900913 = "EPSG3857", e.EPSG102100 = "EPSG3857", e.WebMercator = "EPSG3857", e.WM = "EPSG3857";
  })(ot || (ot = {}));
  const jb = {
    to: {
      [ot.GCJ02]: fi,
      [ot.BD09]: sr(mn, fi),
      [ot.BD09MC]: sr(jo, mn, fi),
      [ot.EPSG3857]: Fo
    }
  }, Ub = {
    to: {
      [ot.WGS84]: gn,
      [ot.BD09]: mn,
      [ot.BD09MC]: sr(jo, mn),
      [ot.EPSG3857]: sr(Fo, gn)
    }
  }, zb = {
    to: {
      [ot.WGS84]: sr(gn, rn),
      [ot.GCJ02]: rn,
      [ot.EPSG3857]: sr(Fo, gn, rn),
      [ot.BD09MC]: jo
    }
  }, Gb = {
    to: {
      [ot.WGS84]: Ps,
      [ot.GCJ02]: sr(fi, Ps),
      [ot.BD09]: sr(mn, fi, Ps),
      [ot.BD09MC]: sr(jo, mn, fi, Ps)
    }
  }, $b = {
    to: {
      [ot.WGS84]: sr(gn, rn, ks),
      [ot.GCJ02]: sr(rn, ks),
      [ot.EPSG3857]: sr(Fo, gn, rn, ks),
      [ot.BD09]: ks
    }
  }, Bb = {
    WGS84: jb,
    GCJ02: Ub,
    BD09: zb,
    EPSG3857: Gb,
    BD09MC: $b
  };
  var Wb = Bb;
  function Vb(e, t, r) {
    if (ri(!!e, "The args[0] input coordinate is required"), ri(!!t, "The args[1] original coordinate system is required"), ri(!!r, "The args[2] target coordinate system is required"), t === r) return e;
    const i = Wb[t];
    ri(!!i, `Invalid original coordinate system: ${t}`);
    const a = i.to[r];
    ri(!!a, `Invalid target coordinate system: ${r}`);
    const c = typeof e;
    if (ri(c === "string" || c === "object", `Invalid input coordinate type: ${c}`), c === "string") try {
      e = JSON.parse(e);
    } catch {
      throw new Error(`Invalid input coordinate: ${e}`);
    }
    let f = false;
    Ah(e) && (ri(e.length >= 2, `Invalid input coordinate: ${e}`), ri(hu(e[0]) && hu(e[1]), `Invalid input coordinate: ${e}`), e = e.map(Number), f = true);
    const h = a;
    return f ? h(e) : (Rh(e, (p) => {
      [p[0], p[1]] = h(p);
    }), e);
  }
  const nn = Object.assign(Object.assign({}, ot), {
    CRSTypes: ot,
    transform: Vb
  }), du = 6378137;
  class Ch {
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
      return Je("geolocationCorrection") ?? false;
    }
    setReferencePoint(t, r) {
      this.referencePoint = t, this.localProjection = r || `+proj=tmerc +lat_0=${t.latitude} +lon_0=${t.longitude} +k=1 +x_0=0 +y_0=0 +datum=WGS84 +units=m +no_defs`, this.cachedLocalProjection && this.cachedLocalProjection.free(), this.cachedLocalProjection = new pn(this.localProjection);
    }
    async geographicToLocal(t) {
      if (!this.referencePoint || !this.localProjection) throw new Error("Reference point not set. Call setReferencePoint() first.");
      let r = t;
      if (this.geolocationCorrectionEnabled) {
        const f = new dr(t.latitude, t.longitude);
        r = Oh(f);
      }
      const i = this.getWGS84Projection(), a = this.getLocalProjectionObj(), c = this.getPoint();
      c.x = r.longitude, c.y = r.latitude, c.z = 0;
      try {
        return $a(i, a, c), {
          x: c.x,
          y: c.y
        };
      } catch {
        return this.geographicToLocalFallback(t);
      }
    }
    async localToGeographic(t) {
      if (!this.referencePoint || !this.localProjection) throw new Error("Reference point not set. Call setReferencePoint() first.");
      const r = this.getLocalProjectionObj(), i = this.getWGS84Projection(), a = this.getPoint();
      a.x = t.x, a.y = t.y, a.z = 0;
      try {
        $a(r, i, a);
        const c = {
          longitude: a.x,
          latitude: a.y
        };
        if (this.geolocationCorrectionEnabled) {
          const f = new dr(c.latitude, c.longitude);
          return qb(f);
        }
        return c;
      } catch {
        return this.localToGeographicFallback(t);
      }
    }
    geographicToLocalFallback(t) {
      if (!this.referencePoint) throw new Error("Reference point not set");
      const r = 6371e3, i = this.referencePoint.latitude * Math.PI / 180, a = this.referencePoint.longitude * Math.PI / 180, c = t.latitude * Math.PI / 180, f = t.longitude * Math.PI / 180, h = r * (f - a) * Math.cos((i + c) / 2), p = r * (c - i);
      return {
        x: h,
        y: p
      };
    }
    localToGeographicFallback(t) {
      if (!this.referencePoint) throw new Error("Reference point not set");
      const r = this.referencePoint.latitude * Math.PI / 180, i = this.referencePoint.longitude * Math.PI / 180, a = (t.y / du + r) * 180 / Math.PI, c = (t.x / (du * Math.cos(r)) + i) * 180 / Math.PI;
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
    return new dr(t[1], t[0]);
  }
  function qb(e) {
    const t = nn.transform([
      e.longitude,
      e.latitude
    ], nn.GCJ02, nn.WGS84);
    return new dr(t[1], t[0]);
  }
  new Ch();
  const Kb = 2;
  class Hb {
    constructor(t, r = 100, i) {
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
      this.workerClient = new Eb(), this.coordinateTransformer = new Ch(), this.imuManager = new _b(r), this.callback = t, this.debugEnabled = (i == null ? void 0 : i.debugEnabled) ?? za(), this.withoutIMU = (i == null ? void 0 : i.useIMU) === false, this.source = (i == null ? void 0 : i.source) ?? "kalman", this.config = {
        initialAccelerationUncertainty: (i == null ? void 0 : i.initialAccelerationUncertainty) ?? Ky(),
        initialPositionUncertainty: (i == null ? void 0 : i.initialPositionUncertainty) ?? Hy(),
        initialVelocityUncertainty: (i == null ? void 0 : i.initialVelocityUncertainty) ?? Zy(),
        gpsSpeedUncertainty: (i == null ? void 0 : i.gpsSpeedUncertainty) ?? Jy(),
        debugEnabled: this.debugEnabled
      };
    }
    async initialize(t) {
      try {
        this.coordinateTransformer.setReferencePoint({
          longitude: t.longitude,
          latitude: t.latitude
        });
        const r = await this.coordinateTransformer.geographicToLocal({
          longitude: t.longitude,
          latitude: t.latitude
        }), i = this.getTrustedGPSVelocity(t), a = {
          x: r.x,
          y: r.y,
          accuracy: t.accuracy,
          timestamp: t.timestamp,
          speed: this.getTrustedGPSSpeed(t),
          velocity: i
        };
        this.lastOutputAccuracy = t.accuracy, this.withoutIMU ? console.info("[LocationProcessor] Running in no-IMU mode, skipping IMU initialization") : (await this.imuManager.initialize()).isErr() && (console.warn("[LocationProcessor] IMU not available, using GPS-only mode"), this.withoutIMU = true, this.source = "kalman-no-imu");
        const c = {
          ...this.config,
          debugEnabled: this.debugEnabled
        };
        return await this.workerClient.initialize(c, a), this.isInitialized = true, await this.updateCachedState(), D(void 0);
      } catch (r) {
        return k(new Oe("Failed to initialize location processor", "UPDATE_SERVICE_ERROR", r));
      }
    }
    async startGPS() {
      try {
        return this.withoutIMU ? (this.isInitialized = true, console.info("[LocationProcessor] Started location processing (no-IMU mode)"), D(void 0)) : (await this.imuManager.isAvailable() ? (await this.imuManager.startListening((i) => {
          this.processIMUReading(i);
        })).isErr() && (console.warn("[LocationProcessor] Failed to start IMU, using GPS-only"), this.withoutIMU = true, this.source = "kalman-no-imu") : (this.withoutIMU = true, this.source = "kalman-no-imu"), this.isInitialized = true, console.info("[LocationProcessor] Started location processing"), D(void 0));
      } catch (t) {
        return k(new Oe("Failed to start GPS processing", "UPDATE_SERVICE_ERROR", t));
      }
    }
    async stopGPS() {
      try {
        const t = await this.imuManager.stopListening();
        return t.isErr() && console.warn("[LocationProcessor] Failed to stop IMU:", t.error), this.workerClient.dispose(), this.isInitialized = false, this.cachedState = null, this.cachedGain = null, console.info("[LocationProcessor] Stopped location processing"), D(void 0);
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
        const r = await this.coordinateTransformer.geographicToLocal({
          longitude: t.longitude,
          latitude: t.latitude
        }), i = this.getTrustedGPSVelocity(t), a = {
          x: r.x,
          y: r.y,
          accuracy: t.accuracy,
          timestamp: t.timestamp,
          speed: this.getTrustedGPSSpeed(t),
          velocity: i
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
        const t = await this.workerClient.getFilteredPosition(), r = await this.coordinateTransformer.localToGeographic(t), i = new dr(r.latitude, r.longitude, this.lastOutputAccuracy || 10);
        await this.updateCachedState(), this.notifyCallback(i);
      } catch (t) {
        console.error("[LocationProcessor] Error outputting filtered position:", t);
      }
    }
    async outputPredictedPosition() {
      const t = performance.now();
      if (!(t - this.lastOutputTime < 50)) {
        this.lastOutputTime = t;
        try {
          const r = await this.workerClient.getFilteredPosition(), i = await this.coordinateTransformer.localToGeographic(r), a = new dr(i.latitude, i.longitude, this.lastOutputAccuracy || 10);
          await this.updateCachedState(), this.notifyCallback(a);
        } catch (r) {
          console.error("[LocationProcessor] Error outputting predicted position:", r);
        }
      }
    }
    async getCurrentFilteredPosition() {
      if (!this.workerClient.isReady()) return k(new Oe("Kalman filter not initialized", "UPDATE_SERVICE_ERROR"));
      try {
        await this.processingQueue;
        const t = await this.workerClient.getFilteredPosition(), r = await this.coordinateTransformer.localToGeographic(t), i = new dr(r.latitude, r.longitude, this.lastOutputAccuracy || 10);
        return D(i);
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
    async enqueueProcessing(t, r) {
      const i = this.processingQueue.then(t);
      this.processingQueue = i.catch(() => {
      });
      try {
        await i;
      } catch (a) {
        console.error(r, a);
      }
    }
    async updateCachedState() {
      try {
        const t = await this.workerClient.getState(), r = new Ir(t.covariance);
        this.cachedState = {
          position: t.position,
          velocity: t.velocity,
          acceleration: t.acceleration,
          covariance: r,
          timestamp: t.timestamp
        };
        const i = await this.workerClient.getLastKalmanGain();
        this.cachedGain = i ? new Ir(i) : null;
      } catch (t) {
        console.error("[LocationProcessor] Failed to update cached Kalman state:", t);
      }
    }
    getTrustedGPSVelocity(t) {
      const { speed: r, heading: i } = t;
      if (!(r === void 0 || i === void 0) && !(!Number.isFinite(r) || !Number.isFinite(i) || r < Kb)) return this.gpsVelocityToLocal(r, yi(i));
    }
    getTrustedGPSSpeed(t) {
      const { speed: r } = t;
      if (!(r === void 0 || !Number.isFinite(r) || r < 0)) return r;
    }
    gpsVelocityToLocal(t, r) {
      return hb(t, r);
    }
    notifyCallback(t) {
      if (this.callback) try {
        this.callback(t, this.source);
      } catch (r) {
        console.error("[LocationProcessor] Callback error:", r);
      }
    }
  }
  class Zb {
    constructor(t = "kalman", r = 100) {
      __publicField(this, "name");
      __publicField(this, "provider", null);
      __publicField(this, "processor", null);
      __publicField(this, "watchId", null);
      __publicField(this, "isInitialized", false);
      __publicField(this, "userCallback", null);
      __publicField(this, "imuUpdateInterval");
      __publicField(this, "useIMU");
      this.name = t, this.imuUpdateInterval = r, this.useIMU = t !== "kalman-no-imu";
    }
    async initialize() {
      if (this.isInitialized) return D(void 0);
      try {
        const t = Do();
        if (t.isErr()) return k(new Oe("Platform services not available", "BACKEND_NOT_AVAILABLE", t.error));
        const r = t.value.getGeolocationProvider();
        if (!r) return k(new Oe("Geolocation provider not available", "BACKEND_NOT_AVAILABLE"));
        this.provider = r;
        const i = await this.provider.getCurrentPosition();
        if (i.isErr()) return k(new Oe("Failed to get the initial geolocation", "UPDATE_SERVICE_ERROR", i.error));
        this.processor = new Hb((c, f) => this.handleLocationUpdate(c), this.imuUpdateInterval, {
          useIMU: this.useIMU,
          source: this.name
        });
        const a = await this.processor.initialize({
          latitude: i.value.coords.latitude,
          longitude: i.value.coords.longitude,
          accuracy: i.value.coords.accuracy,
          timestamp: performance.now(),
          speed: i.value.coords.speed ?? void 0,
          heading: i.value.coords.heading ?? void 0
        });
        return a.isErr() ? a : (this.isInitialized = true, D(void 0));
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
        const r = await this.provider.watchPosition((a) => {
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
        if (r.isErr()) return k(new Oe("Failed to start watching position", "UPDATE_SERVICE_ERROR", r.error));
        this.watchId = r.value;
        const i = await this.processor.startGPS();
        return i.isErr() ? (this.watchId !== null && this.provider && this.provider.clearWatch(this.watchId), i) : (console.info("[KalmanBackend] Started Kalman-filtered location watching"), D(void 0));
      } catch (r) {
        return k(new Oe("Exception during start watching", "UPDATE_SERVICE_ERROR", r));
      }
    }
    async stopWatching() {
      if (!this.provider || !this.processor) return D(void 0);
      try {
        const t = await this.processor.stopGPS();
        if (t.isErr() && console.warn("[KalmanBackend] Failed to stop processor cleanly:", t.error), this.watchId !== null) {
          const r = this.provider.clearWatch(this.watchId);
          r.isErr() && console.warn("[KalmanBackend] Failed to clear watch:", r.error), this.watchId = null;
        }
        return console.info("[KalmanBackend] Stopped Kalman-filtered location watching"), D(void 0);
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
      } catch (r) {
        console.error("[KalmanBackend] User callback error:", r);
      }
    }
  }
  lr = (_a2 = class {
    constructor() {
      __publicField(this, "isInitialized", false);
      __publicField(this, "backendManager");
      __publicField(this, "stateManager");
      __publicField(this, "locationUpdateCallbacks", /* @__PURE__ */ new Map());
      __publicField(this, "nextCallbackId", 1);
      const t = [], r = Je("geolocationBackend"), i = r === "auto" ? qy() : r === "kalman" || r === "kalman-no-imu", a = r === "auto" || r === "gps", c = r === "auto" || r === "ip";
      if (i) {
        const f = Ga(), h = f > 0 ? Math.floor(1e3 / f) : 50, p = r === "kalman-no-imu" ? "kalman-no-imu" : "kalman";
        t.push(new Zb(p, h));
      }
      a && t.push(new bb()), c && t.push(new vb()), console.info(`[GeolocationManager] Initializing with backend preference: ${r}, strategies: ${t.map((f) => f.name).join(", ")}`), this.backendManager = new mb(t), this.stateManager = new yb();
    }
    static async getInstance() {
      if (lr.instance || (lr.instance = new lr()), !lr.instance.isInitialized) {
        const t = await lr.instance.initialize();
        if (t.isErr()) return k(t.error);
      }
      return D(lr.instance);
    }
    static getExistingInstance() {
      if (!lr.instance) throw new Error("GeolocationManager not initialized. Call getInstance() first.");
      return lr.instance;
    }
    static reset() {
      lr.instance = null;
    }
    async initialize() {
      if (this.isInitialized) return console.info("[GeolocationManager] Already initialized"), D(void 0);
      console.info("[GeolocationManager] Initializing geolocation services with new architecture");
      try {
        this.stateManager.subscribe((i, a) => {
          this.notifyCallbacks(i);
        });
        const t = await this.backendManager.initialise();
        if (t.isErr()) return console.warn("[GeolocationManager] No backend available for location"), k(new Lr("No geolocation backend available", "no_backend_available", t.error));
        const r = await this.backendManager.getCurrentPosition();
        return r.isOk() ? (this.stateManager.updateLocation(r.value, this.backendManager.getActiveBackend()), this.isInitialized = true, console.info("[GeolocationManager] Geolocation services initialized successfully"), D(void 0)) : k(new Lr("Backend selected fail to obtain geolocation", "backend_error", r.error));
      } catch (t) {
        const r = _s(t, "Failed to initialize geolocation manager");
        return Ti(r, "GeolocationManager.initialize"), k(new Lr("Exception during initialization", "initialization_failed", r));
      }
    }
    async getCurrentLocation() {
      if (!this.isInitialized) {
        const t = new Lr("Geolocation manager not initialized", "not_initialized");
        return Ti(t, "GeolocationManager.getCurrentLocation"), k(t);
      }
      try {
        const t = await this.backendManager.getCurrentPosition();
        return t.isOk() && this.stateManager.updateLocation(t.value, this.backendManager.getActiveBackend() || "gps"), t;
      } catch (t) {
        const r = _s(t, "Failed to get current location");
        return Ti(r, "GeolocationManager.getCurrentLocation"), k(new Lr("Failed to get current location", "get_location_failed", r));
      }
    }
    async startLocationUpdates(t) {
      if (!this.isInitialized) {
        const r = new Lr("Geolocation manager not initialized", "not_initialized");
        return Ti(r, "GeolocationManager.startLocationUpdates"), k(r);
      }
      console.info("[GeolocationManager] Starting location updates");
      try {
        const r = this.nextCallbackId++;
        this.locationUpdateCallbacks.set(r, t);
        const i = await this.backendManager.startWatching((a, c) => {
          this.stateManager.updateLocation(a, c);
        });
        return i.isErr() ? (this.locationUpdateCallbacks.delete(r), k(i.error)) : (console.info(`[GeolocationManager] Location updates started with handler ${r}`), D(r));
      } catch (r) {
        const i = _s(r, "Failed to start location updates");
        return Ti(i, "GeolocationManager.startLocationUpdates"), k(new Lr("Failed to start location updates", "start_updates_failed", i));
      }
    }
    async stopLocationUpdates(t) {
      if (!this.isInitialized) {
        const r = new Lr("Geolocation manager not initialized", "not_initialized");
        return Ti(r, "GeolocationManager.stopLocationUpdates"), k(r);
      }
      console.info("[GeolocationManager] Stopping location updates");
      try {
        if (this.locationUpdateCallbacks.delete(t), this.locationUpdateCallbacks.size === 0) {
          const r = await this.backendManager.stopWatching();
          if (r.isErr()) return k(r.error);
        }
        return console.info(`[GeolocationManager] Location updates stopped for handler ${t}`), D(void 0);
      } catch (r) {
        const i = _s(r, "Failed to stop location updates");
        return Ti(i, "GeolocationManager.stopLocationUpdates"), k(new Lr("Failed to stop location updates", "stop_updates_failed", i));
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
      return t || (console.warn("[GeolocationManager] No known location available - returning default coordinates (0, 0)"), new dr(0, 0));
    }
    addLocationListener(t) {
      const r = this.nextCallbackId++;
      return this.locationUpdateCallbacks.set(r, t), r;
    }
    removeLocationListener(t) {
      this.locationUpdateCallbacks.delete(t);
    }
    getLastKalmanGain() {
      if (this.backendManager.getActiveBackend() === "kalman") {
        const r = this.backendManager.strategies.find((i) => i.name === "kalman");
        if (r && "getLastKalmanGain" in r) return r.getLastKalmanGain();
      }
      return null;
    }
    getKalmanState() {
      if (this.backendManager.getActiveBackend() === "kalman") {
        const r = this.backendManager.strategies.find((i) => i.name === "kalman");
        if (r && "getKalmanState" in r) return r.getKalmanState();
      }
      return null;
    }
    applyGeolocationCorrection(t) {
      return Je("geolocationCorrection") ? Oh(t) : t;
    }
    notifyCallbacks(t) {
      const r = this.applyGeolocationCorrection(t), i = xa(r);
      for (const a of this.locationUpdateCallbacks.values()) try {
        a(i);
      } catch (c) {
        console.error("[GeolocationManager] Callback error:", c);
      }
    }
    async refreshBackend() {
      return D(void 0);
    }
  }, __publicField(_a2, "instance", null), _a2);
  let xh;
  const Uo = (e) => xh = e, Nh = /* @__PURE__ */ Symbol();
  function Ba(e) {
    return e && typeof e == "object" && Object.prototype.toString.call(e) === "[object Object]" && typeof e.toJSON != "function";
  }
  var Zn;
  (function(e) {
    e.direct = "direct", e.patchObject = "patch object", e.patchFunction = "patch function";
  })(Zn || (Zn = {}));
  function Lh() {
    const e = Pu(true), t = e.run(() => qt({}));
    let r = [], i = [];
    const a = rl({
      install(c) {
        Uo(a), a._a = c, c.provide(Nh, a), c.config.globalProperties.$pinia = a, i.forEach((f) => r.push(f)), i = [];
      },
      use(c) {
        return this._a ? r.push(c) : i.push(c), this;
      },
      _p: r,
      _a: null,
      _e: e,
      _s: /* @__PURE__ */ new Map(),
      state: t
    });
    return a;
  }
  const Dh = () => {
  };
  function pu(e, t, r, i = Dh) {
    e.add(t);
    const a = () => {
      e.delete(t) && i();
    };
    return !r && ku() && ld(a), a;
  }
  function Hi(e, ...t) {
    e.forEach((r) => {
      r(...t);
    });
  }
  const Jb = (e) => e(), gu = /* @__PURE__ */ Symbol(), ha = /* @__PURE__ */ Symbol();
  function Wa(e, t) {
    e instanceof Map && t instanceof Map ? t.forEach((r, i) => e.set(i, r)) : e instanceof Set && t instanceof Set && t.forEach(e.add, e);
    for (const r in t) {
      if (!t.hasOwnProperty(r)) continue;
      const i = t[r], a = e[r];
      Ba(a) && Ba(i) && e.hasOwnProperty(r) && !lt(i) && !Br(i) ? e[r] = Wa(a, i) : e[r] = i;
    }
    return e;
  }
  const Yb = /* @__PURE__ */ Symbol();
  function Xb(e) {
    return !Ba(e) || !Object.prototype.hasOwnProperty.call(e, Yb);
  }
  const { assign: ni } = Object;
  function Qb(e) {
    return !!(lt(e) && e.effect);
  }
  function ev(e, t, r, i) {
    const { state: a, actions: c, getters: f } = t, h = r.state.value[e];
    let p;
    function v() {
      h || (r.state.value[e] = a ? a() : {});
      const g = Nd(r.state.value[e]);
      return ni(g, c, Object.keys(f || {}).reduce((I, R) => (I[R] = rl(hl(() => {
        Uo(r);
        const A = r._s.get(e);
        return f[R].call(A, A);
      })), I), {}));
    }
    return p = Fh(e, v, t, r, i, true), p;
  }
  function Fh(e, t, r = {}, i, a, c) {
    let f;
    const h = ni({
      actions: {}
    }, r), p = {
      deep: true
    };
    let v, g, I = /* @__PURE__ */ new Set(), R = /* @__PURE__ */ new Set(), A;
    const j = i.state.value[e];
    !c && !j && (i.state.value[e] = {});
    let x;
    function pe(fe) {
      let Q;
      v = g = false, typeof fe == "function" ? (fe(i.state.value[e]), Q = {
        type: Zn.patchFunction,
        storeId: e,
        events: A
      }) : (Wa(i.state.value[e], fe), Q = {
        type: Zn.patchObject,
        payload: fe,
        storeId: e,
        events: A
      });
      const me = x = /* @__PURE__ */ Symbol();
      Ku().then(() => {
        x === me && (v = true);
      }), g = true, Hi(I, Q, i.state.value[e]);
    }
    const se = c ? function() {
      const { state: Q } = r, me = Q ? Q() : {};
      this.$patch((ke) => {
        ni(ke, me);
      });
    } : Dh;
    function U() {
      f.stop(), I.clear(), R.clear(), i._s.delete(e);
    }
    const Y = (fe, Q = "") => {
      if (gu in fe) return fe[ha] = Q, fe;
      const me = function() {
        Uo(i);
        const ke = Array.from(arguments), he = /* @__PURE__ */ new Set(), $e = /* @__PURE__ */ new Set();
        function pt(Re) {
          he.add(Re);
        }
        function $t(Re) {
          $e.add(Re);
        }
        Hi(R, {
          args: ke,
          name: me[ha],
          store: ue,
          after: pt,
          onError: $t
        });
        let Ye;
        try {
          Ye = fe.apply(this && this.$id === e ? this : ue, ke);
        } catch (Re) {
          throw Hi($e, Re), Re;
        }
        return Ye instanceof Promise ? Ye.then((Re) => (Hi(he, Re), Re)).catch((Re) => (Hi($e, Re), Promise.reject(Re))) : (Hi(he, Ye), Ye);
      };
      return me[gu] = true, me[ha] = Q, me;
    }, $ = {
      _p: i,
      $id: e,
      $onAction: pu.bind(null, R),
      $patch: pe,
      $reset: se,
      $subscribe(fe, Q = {}) {
        const me = pu(I, fe, Q.detached, () => ke()), ke = f.run(() => tn(() => i.state.value[e], (he) => {
          (Q.flush === "sync" ? g : v) && fe({
            storeId: e,
            type: Zn.direct,
            events: A
          }, he);
        }, ni({}, p, Q)));
        return me;
      },
      $dispose: U
    }, ue = _o($);
    i._s.set(e, ue);
    const ie = (i._a && i._a.runWithContext || Jb)(() => i._e.run(() => (f = Pu()).run(() => t({
      action: Y
    }))));
    for (const fe in ie) {
      const Q = ie[fe];
      if (lt(Q) && !Qb(Q) || Br(Q)) c || (j && Xb(Q) && (lt(Q) ? Q.value = j[fe] : Wa(Q, j[fe])), i.state.value[e][fe] = Q);
      else if (typeof Q == "function") {
        const me = Y(Q, fe);
        ie[fe] = me, h.actions[fe] = Q;
      }
    }
    return ni(ue, ie), ni(Le(ue), ie), Object.defineProperty(ue, "$state", {
      get: () => i.state.value[e],
      set: (fe) => {
        pe((Q) => {
          ni(Q, fe);
        });
      }
    }), i._p.forEach((fe) => {
      ni(ue, f.run(() => fe({
        store: ue,
        app: i._a,
        pinia: i,
        options: h
      })));
    }), j && c && r.hydrate && r.hydrate(ue.$state, j), v = true, g = true, ue;
  }
  u1 = function(e, t, r) {
    let i;
    const a = typeof t == "function";
    i = a ? r : t;
    function c(f, h) {
      const p = Vd();
      return f = f || (p ? zn(Nh, null) : null), f && Uo(f), f = xh, f._s.has(e) || (a ? Fh(e, t, i, f) : ev(e, i, f)), f._s.get(e);
    }
    return c.$id = e, c;
  };
  var tv = [];
  let mu, Va, rv, iv, As, nv, sv, ov, av, lv, cv, uv, fv, hv, dv, pv, gv, mv, wv, yv, bv, vv, Ev, El;
  mu = [
    {
      name: "trackmaker",
      displayName: "TrackMaker",
      moduleInit: async () => {
        var _a3;
        const e = Wf((await Kn(async () => {
          const { default: r } = await import("./App-DovCffWZ.js");
          return {
            default: r
          };
        }, __vite__mapDeps([0,1,2,3,4,5]), import.meta.url)).default);
        e.use(Lh()), e.use((await Kn(async () => {
          const { default: r } = await import("./index-CYcDj7ew.js");
          return {
            default: r
          };
        }, __vite__mapDeps([6,2,1,3,7]), import.meta.url)).default), e.use((await Kn(async () => {
          const { i18n: r } = await import("./index-CjZyYIcs.js");
          return {
            i18n: r
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
          const t = async (h, p) => gb() ? false : window.permissionConfirm ? window.permissionConfirm(p) : false, r = await li.init({
            geolocation: {
              permissionCallback: t
            },
            imu: {
              permissionCallback: t
            }
          });
          if (r.isErr()) throw r.error;
          const i = r.value, a = i.getStorage();
          if (a.isErr()) throw a.error;
          const c = await a.value.init();
          if (c.isErr()) throw c.error;
          const f = i.getIMU();
          if (f.isOk()) {
            const h = f.value;
            (await h.init()).isErr() ? console.warn("[Platform] IMU not supported on this platform") : (await h.startAcceleration({
              frequency: Ga(),
              normalizeToENU: true
            }), await h.startGyroscope({
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
          const r = await lr.getInstance();
          if (r.isErr()) throw r.error;
          const i = r.value;
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
  f1 = my;
  h1 = tv;
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
  rv = () => {
    try {
      const t = localStorage.getItem("interface-language");
      if (t && Va[t]) return t;
    } catch {
    }
    return navigator.language.startsWith("zh") ? "zh-CN" : "en";
  };
  iv = rv();
  As = (e) => Va[iv][e] || Va.en[e] || e;
  nv = {
    class: "splash-container"
  };
  sv = {
    class: "splash-content"
  };
  ov = {
    key: 0,
    class: "loading-section"
  };
  av = {
    class: "progress-container"
  };
  lv = {
    class: "progress-bar"
  };
  cv = {
    class: "progress-text"
  };
  uv = {
    class: "loading-details"
  };
  fv = {
    class: "current-module"
  };
  hv = {
    key: 1,
    class: "error-section"
  };
  dv = {
    class: "error-message"
  };
  pv = {
    key: 0
  };
  gv = {
    key: 1
  };
  mv = {
    key: 2,
    class: "timeout-section"
  };
  wv = {
    key: 3,
    class: "permission-section"
  };
  yv = {
    class: "permission-message"
  };
  bv = {
    class: "permission-buttons"
  };
  vv = Qd({
    __name: "SplashScreen",
    setup(e) {
      const t = qt(0), r = qt(""), i = qt(""), a = qt(0), c = qt(0), f = qt(false), h = qt(false), p = qt(""), v = qt(false), g = qt("");
      let I = null;
      const R = qt("light"), A = () => {
        try {
          window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches ? R.value = "dark" : R.value = "light";
        } catch {
          R.value = "light";
        }
      }, j = () => {
        R.value === "dark" ? document.documentElement.setAttribute("data-theme", "dark") : document.documentElement.setAttribute("data-theme", "light"), console.info("[Splash Screen] Theme applied:", R.value);
      }, x = hl(() => Math.round(t.value / 100 * 100)), pe = {
        info: (...ge) => {
          const ie = ge.join(" ");
          console.info(ie), r.value = String(ie);
        },
        warn: (...ge) => {
          const ie = ge.join(" ");
          console.warn(ie), r.value = String(ie);
        },
        error: (...ge) => {
          const ie = ge.join(" ");
          console.error(ie), r.value = String(ie), p.value = String(ie);
        },
        debug: (...ge) => {
          console.debug(...ge);
        }
      }, se = {
        onModuleStart: (ge) => {
          i.value = ge, r.value = `Loading ${ge}...`;
        },
        onModuleComplete: (ge) => {
          c.value++, t.value = Math.min(100, c.value / a.value * 100), r.value = `Loaded ${ge}`;
        },
        onModuleError: (ge, ie) => {
          r.value = `Failed to load ${ge}`, p.value = ie.message;
        },
        onOverallProgress: (ge, ie) => {
          a.value = ie, c.value = ge, t.value = Math.min(100, ge / ie * 100);
        }
      }, U = () => {
        window.location.reload();
      }, Y = (ge) => (g.value = As(ge), v.value = true, new Promise((ie) => {
        I = (fe) => {
          v.value = false, ie(fe);
        };
      })), $ = () => {
        I == null ? void 0 : I(true);
      }, ue = () => {
        I == null ? void 0 : I(false);
      };
      return window.permissionConfirm = Y, as(() => {
        var _a3;
        A(), j(), (_a3 = document.getElementById("pre-splash")) == null ? void 0 : _a3.remove();
        const ge = (ie, fe = /* @__PURE__ */ new Set()) => {
          if (fe.has(ie)) return 0;
          fe.add(ie);
          const Q = mu.find((ke) => ke.name === ie);
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
          r.value = "All modules loaded successfully", i.value = "TrackMaker", t.value = 100, console.log("=== All Modules Loaded ===");
        }).catch((ie) => {
          const fe = String(ie.toString());
          if (fe.toLowerCase().includes("timeout")) {
            const Q = fe.split("Trackback").map((me) => me.replace(/((^:\s*)|(,\s*$))/g, ""));
            console.table(Q.map((me) => ({
              Trackback: me
            })), [
              "Trackback"
            ]), h.value = true;
          } else p.value = fe, f.value = true;
          console.log("=== Failed to initialize all modules ==="), console.error(ie);
        });
      }), (ge, ie) => (nr(), Nr("div", nv, [
        Be("div", sv, [
          ie[8] || (ie[8] = Be("div", {
            class: "logo-section"
          }, [
            Be("div", {
              class: "app-logo"
            }, [
              Be("img", {
                src: Cg,
                alt: "TrackMaker Logo",
                height: "80",
                width: "80"
              })
            ]),
            Be("h1", {
              class: "app-title"
            }, " TrackMaker ")
          ], -1)),
          !f.value && !h.value ? (nr(), Nr("div", ov, [
            Be("div", av, [
              Be("div", lv, [
                Be("div", {
                  class: "progress-fill",
                  style: yo({
                    width: `${x.value}%`
                  })
                }, null, 4)
              ]),
              Be("div", cv, Dr(x.value) + "% ", 1)
            ]),
            Be("div", uv, [
              Be("p", fv, " Loading: " + Dr(i.value), 1)
            ]),
            ie[0] || (ie[0] = Be("div", {
              class: "loading-animation"
            }, [
              Be("div", {
                class: "spinner"
              })
            ], -1))
          ])) : vs("", true),
          f.value ? (nr(), Nr("div", hv, [
            ie[1] || (ie[1] = Be("div", {
              class: "error-icon"
            }, " \u26A0\uFE0F ", -1)),
            ie[2] || (ie[2] = Be("h2", null, "Loading Error", -1)),
            Be("div", dv, [
              (nr(true), Nr(At, null, fp((p.value ?? "").split(`
`), (fe) => (nr(), Nr("div", {
                key: fe,
                style: {
                  display: "block",
                  "font-family": "monospace",
                  overflow: "auto"
                }
              }, [
                fe.toLocaleLowerCase().includes("trackback") ? (nr(), Nr("strong", pv, Dr(fe), 1)) : (nr(), Nr("span", gv, Dr(fe), 1))
              ]))), 128))
            ]),
            Be("button", {
              class: "retry-button",
              onClick: U
            }, " Retry ")
          ])) : vs("", true),
          h.value ? (nr(), Nr("div", mv, [
            ie[3] || (ie[3] = Be("div", {
              class: "timeout-icon"
            }, " \u23F0 ", -1)),
            ie[4] || (ie[4] = Be("h2", null, "Connection Timeout", -1)),
            ie[5] || (ie[5] = Be("p", null, "Unable to load required modules within the timeout period.", -1)),
            ie[6] || (ie[6] = Be("p", null, "Please check your internet connection and try again.", -1)),
            Be("button", {
              class: "retry-button",
              onClick: U
            }, " Retry ")
          ])) : vs("", true),
          v.value ? (nr(), Nr("div", wv, [
            ie[7] || (ie[7] = Be("div", {
              class: "permission-icon"
            }, " \u{1F4CD} ", -1)),
            Be("h2", null, Dr(Qi(As)("permission.title")), 1),
            Be("p", yv, Dr(g.value), 1),
            Be("div", bv, [
              Be("button", {
                class: "permission-button deny",
                onClick: ue
              }, Dr(Qi(As)("permission.deny")), 1),
              Be("button", {
                class: "permission-button allow",
                onClick: $
              }, Dr(Qi(As)("permission.allow")), 1)
            ])
          ])) : vs("", true)
        ])
      ]));
    }
  });
  _v = (e, t) => {
    const r = e.__vccOpts || e;
    for (const [i, a] of t) r[i] = a;
    return r;
  };
  Ev = _v(vv, [
    [
      "__scopeId",
      "data-v-975c59e1"
    ]
  ]);
  El = Wf(Ev);
  El.use(Lh());
  El.mount("#splash");
  window.splashScreen = El;
})();
export {
  Ti as $,
  Qi as A,
  Bd as B,
  zp as C,
  Dr as D,
  vs as E,
  At as F,
  tn as G,
  Ia as H,
  Rv as I,
  eb as J,
  Av as K,
  Co as L,
  Lv as M,
  tp as N,
  rp as O,
  pi as P,
  Hr as Q,
  Nd as R,
  yo as S,
  Dv as T,
  Uv as U,
  lt as V,
  rl as W,
  Ad as X,
  Do as Y,
  a1 as Z,
  _v as _,
  __tla,
  Be as a,
  ld as a$,
  _s as a0,
  Nv as a1,
  yi as a2,
  xv as a3,
  kv as a4,
  Ov as a5,
  fp as a6,
  zv as a7,
  c1 as a8,
  Gv as a9,
  dm as aA,
  am as aB,
  Hf as aC,
  Jf as aD,
  Xm as aE,
  yn as aF,
  Mc as aG,
  Yw as aH,
  Ur as aI,
  Qf as aJ,
  bn as aK,
  Zm as aL,
  iw as aM,
  Zf as aN,
  bm as aO,
  kr as aP,
  Ww as aQ,
  f0 as aR,
  Nw as aS,
  Kf as aT,
  O0 as aU,
  kd as aV,
  Et as aW,
  on as aX,
  ko as aY,
  Vv as aZ,
  ku as a_,
  ca as aa,
  xa as ab,
  Ro as ac,
  s1 as ad,
  o1 as ae,
  Jv as af,
  qv as ag,
  Qv as ah,
  Hv as ai,
  Kv as aj,
  Zv as ak,
  Xv as al,
  Yv as am,
  Cv as an,
  f1 as ao,
  h1 as ap,
  $y as aq,
  lr as ar,
  gb as as,
  Kn as at,
  mi as au,
  gi as av,
  ln as aw,
  hc as ax,
  lm as ay,
  fm as az,
  np as b,
  Vd as b0,
  Iv as b1,
  Zr as b2,
  $v as b3,
  e1 as b4,
  t1 as b5,
  r1 as b6,
  i1 as b7,
  n1 as b8,
  l1 as b9,
  su as ba,
  Le as bb,
  Wv as bc,
  ct as bd,
  Bv as be,
  Nr as c,
  Qd as d,
  ol as e,
  qt as f,
  _o as g,
  Jp as h,
  zn as i,
  hl as j,
  Ku as k,
  Pv as l,
  as as m,
  Za as n,
  nr as o,
  Wd as p,
  Mv as q,
  ma as r,
  al as s,
  Gp as t,
  Sv as u,
  Fv as v,
  Tv as w,
  u1 as x,
  jv as y,
  Ct as z
};
