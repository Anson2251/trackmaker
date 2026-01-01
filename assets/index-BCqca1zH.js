const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["./App-C1Nt4I_R.js","./platform-tFHq3AVL.js","./vue-i18n-0ahQXcxG.js","./App-jBe8gYQr.css","./index-Dl4gMFCz.js","./index-jL_kevqP.css","./index-DUoxD_Ih.js"])))=>i.map(i=>d[i]);
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
let jv, pi, $v, Zs, Fv, xb, Pt, is, Tn, In, lr, xv, Wv, ar, sd, ad, Bv, mu, Lv, Et, Cv, Un, qo, Hv, at, Ra, Gh, Pv, tt, Gv, Ct, Mr, Zr, G, N, Xv, Kv, kv, Dv, Rg, ko, vf, ew, vw, Bm, pf, Ww, Uh, Hr, ns, Bi, Kc, bh, Od, Mv, Gn, Yv, Yc, md, Vv, Jv, qv, Df, Zv, Qv, di, sv, Ps, tv, qr, sr, Fl, yg, Eg, Tg, wg, Ga, mf, am, Rr, Fn, Rf, hm, gf, en, Hn, id, cd, Ca, Jo, sp, Ai, Ua, Vi, ka, Xd, Ia, sn, Sd, $r, uu, Mt, Nv, zv, hu, Uv, Es, ed, Jd;
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
  function ya(e) {
    const t = /* @__PURE__ */ Object.create(null);
    for (const n of e.split(",")) t[n] = 1;
    return (n) => n in t;
  }
  const xe = {}, Ur = [], cn = () => {
  }, jc = () => false, Bo = (e) => e.charCodeAt(0) === 111 && e.charCodeAt(1) === 110 && (e.charCodeAt(2) > 122 || e.charCodeAt(2) < 97), ba = (e) => e.startsWith("onUpdate:"), ft = Object.assign, va = (e, t) => {
    const n = e.indexOf(t);
    n > -1 && e.splice(n, 1);
  }, oh = Object.prototype.hasOwnProperty, Ue = (e, t) => oh.call(e, t), ve = Array.isArray, Gr = (e) => zi(e) === "[object Map]", Uc = (e) => zi(e) === "[object Set]", sh = (e) => zi(e) === "[object RegExp]", Te = (e) => typeof e == "function", rt = (e) => typeof e == "string", Wn = (e) => typeof e == "symbol", Ye = (e) => e !== null && typeof e == "object", Gc = (e) => (Ye(e) || Te(e)) && Te(e.then) && Te(e.catch), Wc = Object.prototype.toString, zi = (e) => Wc.call(e), ah = (e) => zi(e).slice(8, -1), $c = (e) => zi(e) === "[object Object]", Ea = (e) => rt(e) && e !== "NaN" && e[0] !== "-" && "" + parseInt(e, 10) === e, vi = ya(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"), zo = (e) => {
    const t = /* @__PURE__ */ Object.create(null);
    return ((n) => t[n] || (t[n] = e(n)));
  }, lh = /-(\w)/g, qt = zo((e) => e.replace(lh, (t, n) => n ? n.toUpperCase() : "")), ch = /\B([A-Z])/g, $n = zo((e) => e.replace(ch, "-$1").toLowerCase()), Ho = zo((e) => e.charAt(0).toUpperCase() + e.slice(1)), hs = zo((e) => e ? `on${Ho(e)}` : ""), Gt = (e, t) => !Object.is(e, t), Ei = (e, ...t) => {
    for (let n = 0; n < e.length; n++) e[n](...t);
  }, Bc = (e, t, n, i = false) => {
    Object.defineProperty(e, t, {
      configurable: true,
      enumerable: false,
      writable: i,
      value: n
    });
  }, uh = (e) => {
    const t = parseFloat(e);
    return isNaN(t) ? e : t;
  }, fh = (e) => {
    const t = rt(e) ? Number(e) : NaN;
    return isNaN(t) ? e : t;
  };
  let Za;
  const Vo = () => Za || (Za = typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : typeof window < "u" ? window : typeof global < "u" ? global : {});
  qo = function(e) {
    if (ve(e)) {
      const t = {};
      for (let n = 0; n < e.length; n++) {
        const i = e[n], l = rt(i) ? gh(i) : qo(i);
        if (l) for (const c in l) t[c] = l[c];
      }
      return t;
    } else if (rt(e) || Ye(e)) return e;
  };
  const hh = /;(?![^(]*\))/g, dh = /:([^]+)/, ph = /\/\*[^]*?\*\//g;
  function gh(e) {
    const t = {};
    return e.replace(ph, "").split(hh).forEach((n) => {
      if (n) {
        const i = n.split(dh);
        i.length > 1 && (t[i[0].trim()] = i[1].trim());
      }
    }), t;
  }
  Ia = function(e) {
    let t = "";
    if (rt(e)) t = e;
    else if (ve(e)) for (let n = 0; n < e.length; n++) {
      const i = Ia(e[n]);
      i && (t += i + " ");
    }
    else if (Ye(e)) for (const n in e) e[n] && (t += n + " ");
    return t.trim();
  };
  const mh = "itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly", wh = ya(mh);
  function zc(e) {
    return !!e || e === "";
  }
  let Hc, Vc, ds;
  Hc = (e) => !!(e && e.__v_isRef === true);
  pi = (e) => rt(e) ? e : e == null ? "" : ve(e) || Ye(e) && (e.toString === Wc || !Te(e.toString)) ? Hc(e) ? pi(e.value) : JSON.stringify(e, Vc, 2) : String(e);
  Vc = (e, t) => Hc(t) ? Vc(e, t.value) : Gr(t) ? {
    [`Map(${t.size})`]: [
      ...t.entries()
    ].reduce((n, [i, l], c) => (n[ds(i, c) + " =>"] = l, n), {})
  } : Uc(t) ? {
    [`Set(${t.size})`]: [
      ...t.values()
    ].map((n) => ds(n))
  } : Wn(t) ? ds(t) : Ye(t) && !ve(t) && !$c(t) ? String(t) : t;
  ds = (e, t = "") => {
    var n;
    return Wn(e) ? `Symbol(${(n = e.description) != null ? n : t})` : e;
  };
  function yh(e) {
    return e == null ? "initial" : typeof e == "string" ? e === "" ? " " : e : String(e);
  }
  let Ot;
  class qc {
    constructor(t = false) {
      this.detached = t, this._active = true, this._on = 0, this.effects = [], this.cleanups = [], this._isPaused = false, this.parent = Ot, !t && Ot && (this.index = (Ot.scopes || (Ot.scopes = [])).push(this) - 1);
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
        const n = Ot;
        try {
          return Ot = this, t();
        } finally {
          Ot = n;
        }
      }
    }
    on() {
      ++this._on === 1 && (this.prevScope = Ot, Ot = this);
    }
    off() {
      this._on > 0 && --this._on === 0 && (Ot = this.prevScope, this.prevScope = void 0);
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
  Yc = function(e) {
    return new qc(e);
  };
  Kc = function() {
    return Ot;
  };
  bh = function(e, t = false) {
    Ot && Ot.cleanups.push(e);
  };
  let qe;
  const ps = /* @__PURE__ */ new WeakSet();
  class Jc {
    constructor(t) {
      this.fn = t, this.deps = void 0, this.depsTail = void 0, this.flags = 5, this.next = void 0, this.cleanup = void 0, this.scheduler = void 0, Ot && Ot.active && Ot.effects.push(this);
    }
    pause() {
      this.flags |= 64;
    }
    resume() {
      this.flags & 64 && (this.flags &= -65, ps.has(this) && (ps.delete(this), this.trigger()));
    }
    notify() {
      this.flags & 2 && !(this.flags & 32) || this.flags & 8 || Zc(this);
    }
    run() {
      if (!(this.flags & 1)) return this.fn();
      this.flags |= 2, Qa(this), Qc(this);
      const t = qe, n = un;
      qe = this, un = true;
      try {
        return this.fn();
      } finally {
        eu(this), qe = t, un = n, this.flags &= -3;
      }
    }
    stop() {
      if (this.flags & 1) {
        for (let t = this.deps; t; t = t.nextDep) Sa(t);
        this.deps = this.depsTail = void 0, Qa(this), this.onStop && this.onStop(), this.flags &= -2;
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
  let Xc = 0, Ii, Ti;
  function Zc(e, t = false) {
    if (e.flags |= 8, t) {
      e.next = Ti, Ti = e;
      return;
    }
    e.next = Ii, Ii = e;
  }
  function Ta() {
    Xc++;
  }
  function _a() {
    if (--Xc > 0) return;
    if (Ti) {
      let t = Ti;
      for (Ti = void 0; t; ) {
        const n = t.next;
        t.next = void 0, t.flags &= -9, t = n;
      }
    }
    let e;
    for (; Ii; ) {
      let t = Ii;
      for (Ii = void 0; t; ) {
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
  function Qc(e) {
    for (let t = e.deps; t; t = t.nextDep) t.version = -1, t.prevActiveLink = t.dep.activeLink, t.dep.activeLink = t;
  }
  function eu(e) {
    let t, n = e.depsTail, i = n;
    for (; i; ) {
      const l = i.prevDep;
      i.version === -1 ? (i === n && (n = l), Sa(i), vh(i)) : t = i, i.dep.activeLink = i.prevActiveLink, i.prevActiveLink = void 0, i = l;
    }
    e.deps = t, e.depsTail = n;
  }
  function zs(e) {
    for (let t = e.deps; t; t = t.nextDep) if (t.dep.version !== t.version || t.dep.computed && (tu(t.dep.computed) || t.dep.version !== t.version)) return true;
    return !!e._dirty;
  }
  function tu(e) {
    if (e.flags & 4 && !(e.flags & 16) || (e.flags &= -17, e.globalVersion === Ci) || (e.globalVersion = Ci, !e.isSSR && e.flags & 128 && (!e.deps && !e._dirty || !zs(e)))) return;
    e.flags |= 2;
    const t = e.dep, n = qe, i = un;
    qe = e, un = true;
    try {
      Qc(e);
      const l = e.fn(e._value);
      (t.version === 0 || Gt(l, e._value)) && (e.flags |= 128, e._value = l, t.version++);
    } catch (l) {
      throw t.version++, l;
    } finally {
      qe = n, un = i, eu(e), e.flags &= -3;
    }
  }
  function Sa(e, t = false) {
    const { dep: n, prevSub: i, nextSub: l } = e;
    if (i && (i.nextSub = l, e.prevSub = void 0), l && (l.prevSub = i, e.nextSub = void 0), n.subs === e && (n.subs = i, !i && n.computed)) {
      n.computed.flags &= -5;
      for (let c = n.computed.deps; c; c = c.nextDep) Sa(c, true);
    }
    !t && !--n.sc && n.map && n.map.delete(n.key);
  }
  function vh(e) {
    const { prevDep: t, nextDep: n } = e;
    t && (t.nextDep = n, e.prevDep = void 0), n && (n.prevDep = t, e.nextDep = void 0);
  }
  let un = true;
  const nu = [];
  function Dn() {
    nu.push(un), un = false;
  }
  function jn() {
    const e = nu.pop();
    un = e === void 0 ? true : e;
  }
  function Qa(e) {
    const { cleanup: t } = e;
    if (e.cleanup = void 0, t) {
      const n = qe;
      qe = void 0;
      try {
        t();
      } finally {
        qe = n;
      }
    }
  }
  let Ci = 0;
  class Eh {
    constructor(t, n) {
      this.sub = t, this.dep = n, this.version = n.version, this.nextDep = this.prevDep = this.nextSub = this.prevSub = this.prevActiveLink = void 0;
    }
  }
  class Yo {
    constructor(t) {
      this.computed = t, this.version = 0, this.activeLink = void 0, this.subs = void 0, this.map = void 0, this.key = void 0, this.sc = 0, this.__v_skip = true;
    }
    track(t) {
      if (!qe || !un || qe === this.computed) return;
      let n = this.activeLink;
      if (n === void 0 || n.sub !== qe) n = this.activeLink = new Eh(qe, this), qe.deps ? (n.prevDep = qe.depsTail, qe.depsTail.nextDep = n, qe.depsTail = n) : qe.deps = qe.depsTail = n, ru(n);
      else if (n.version === -1 && (n.version = this.version, n.nextDep)) {
        const i = n.nextDep;
        i.prevDep = n.prevDep, n.prevDep && (n.prevDep.nextDep = i), n.prevDep = qe.depsTail, n.nextDep = void 0, qe.depsTail.nextDep = n, qe.depsTail = n, qe.deps === n && (qe.deps = i);
      }
      return n;
    }
    trigger(t) {
      this.version++, Ci++, this.notify(t);
    }
    notify(t) {
      Ta();
      try {
        for (let n = this.subs; n; n = n.prevSub) n.sub.notify() && n.sub.dep.notify();
      } finally {
        _a();
      }
    }
  }
  function ru(e) {
    if (e.dep.sc++, e.sub.flags & 4) {
      const t = e.dep.computed;
      if (t && !e.dep.subs) {
        t.flags |= 20;
        for (let i = t.deps; i; i = i.nextDep) ru(i);
      }
      const n = e.dep.subs;
      n !== e && (e.prevSub = n, n && (n.nextSub = e)), e.dep.subs = e;
    }
  }
  const Eo = /* @__PURE__ */ new WeakMap(), Tr = Symbol(""), Hs = Symbol(""), ki = Symbol("");
  function At(e, t, n) {
    if (un && qe) {
      let i = Eo.get(e);
      i || Eo.set(e, i = /* @__PURE__ */ new Map());
      let l = i.get(n);
      l || (i.set(n, l = new Yo()), l.map = i, l.key = n), l.track();
    }
  }
  function Nn(e, t, n, i, l, c) {
    const f = Eo.get(e);
    if (!f) {
      Ci++;
      return;
    }
    const h = (p) => {
      p && p.trigger();
    };
    if (Ta(), t === "clear") f.forEach(h);
    else {
      const p = ve(e), v = p && Ea(n);
      if (p && n === "length") {
        const w = Number(i);
        f.forEach((I, P) => {
          (P === "length" || P === ki || !Wn(P) && P >= w) && h(I);
        });
      } else switch ((n !== void 0 || f.has(void 0)) && h(f.get(n)), v && h(f.get(ki)), t) {
        case "add":
          p ? v && h(f.get("length")) : (h(f.get(Tr)), Gr(e) && h(f.get(Hs)));
          break;
        case "delete":
          p || (h(f.get(Tr)), Gr(e) && h(f.get(Hs)));
          break;
        case "set":
          Gr(e) && h(f.get(Tr));
          break;
      }
    }
    _a();
  }
  function Ih(e, t) {
    const n = Eo.get(e);
    return n && n.get(t);
  }
  function Lr(e) {
    const t = ke(e);
    return t === e ? t : (At(t, "iterate", ki), nn(e) ? t : t.map(vt));
  }
  function Ko(e) {
    return At(e = ke(e), "iterate", ki), e;
  }
  const Th = {
    __proto__: null,
    [Symbol.iterator]() {
      return gs(this, Symbol.iterator, vt);
    },
    concat(...e) {
      return Lr(this).concat(...e.map((t) => ve(t) ? Lr(t) : t));
    },
    entries() {
      return gs(this, "entries", (e) => (e[1] = vt(e[1]), e));
    },
    every(e, t) {
      return Pn(this, "every", e, t, void 0, arguments);
    },
    filter(e, t) {
      return Pn(this, "filter", e, t, (n) => n.map(vt), arguments);
    },
    find(e, t) {
      return Pn(this, "find", e, t, vt, arguments);
    },
    findIndex(e, t) {
      return Pn(this, "findIndex", e, t, void 0, arguments);
    },
    findLast(e, t) {
      return Pn(this, "findLast", e, t, vt, arguments);
    },
    findLastIndex(e, t) {
      return Pn(this, "findLastIndex", e, t, void 0, arguments);
    },
    forEach(e, t) {
      return Pn(this, "forEach", e, t, void 0, arguments);
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
      return Pn(this, "map", e, t, void 0, arguments);
    },
    pop() {
      return ni(this, "pop");
    },
    push(...e) {
      return ni(this, "push", e);
    },
    reduce(e, ...t) {
      return el(this, "reduce", e, t);
    },
    reduceRight(e, ...t) {
      return el(this, "reduceRight", e, t);
    },
    shift() {
      return ni(this, "shift");
    },
    some(e, t) {
      return Pn(this, "some", e, t, void 0, arguments);
    },
    splice(...e) {
      return ni(this, "splice", e);
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
      return ni(this, "unshift", e);
    },
    values() {
      return gs(this, "values", vt);
    }
  };
  function gs(e, t, n) {
    const i = Ko(e), l = i[t]();
    return i !== e && !nn(e) && (l._next = l.next, l.next = () => {
      const c = l._next();
      return c.value && (c.value = n(c.value)), c;
    }), l;
  }
  const _h = Array.prototype;
  function Pn(e, t, n, i, l, c) {
    const f = Ko(e), h = f !== e && !nn(e), p = f[t];
    if (p !== _h[t]) {
      const I = p.apply(e, c);
      return h ? vt(I) : I;
    }
    let v = n;
    f !== e && (h ? v = function(I, P) {
      return n.call(this, vt(I), P, e);
    } : n.length > 2 && (v = function(I, P) {
      return n.call(this, I, P, e);
    }));
    const w = p.call(f, v, i);
    return h && l ? l(w) : w;
  }
  function el(e, t, n, i) {
    const l = Ko(e);
    let c = n;
    return l !== e && (nn(e) ? n.length > 3 && (c = function(f, h, p) {
      return n.call(this, f, h, p, e);
    }) : c = function(f, h, p) {
      return n.call(this, f, vt(h), p, e);
    }), l[t](c, ...i);
  }
  function ms(e, t, n) {
    const i = ke(e);
    At(i, "iterate", ki);
    const l = i[t](...n);
    return (l === -1 || l === false) && Pa(n[0]) ? (n[0] = ke(n[0]), i[t](...n)) : l;
  }
  function ni(e, t, n = []) {
    Dn(), Ta();
    const i = ke(e)[t].apply(e, n);
    return _a(), jn(), i;
  }
  const Sh = ya("__proto__,__v_isRef,__isVue"), iu = new Set(Object.getOwnPropertyNames(Symbol).filter((e) => e !== "arguments" && e !== "caller").map((e) => Symbol[e]).filter(Wn));
  function Oh(e) {
    Wn(e) || (e = String(e));
    const t = ke(this);
    return At(t, "has", e), t.hasOwnProperty(e);
  }
  class ou {
    constructor(t = false, n = false) {
      this._isReadonly = t, this._isShallow = n;
    }
    get(t, n, i) {
      if (n === "__v_skip") return t.__v_skip;
      const l = this._isReadonly, c = this._isShallow;
      if (n === "__v_isReactive") return !l;
      if (n === "__v_isReadonly") return l;
      if (n === "__v_isShallow") return c;
      if (n === "__v_raw") return i === (l ? c ? Fh : cu : c ? lu : au).get(t) || Object.getPrototypeOf(t) === Object.getPrototypeOf(i) ? t : void 0;
      const f = ve(t);
      if (!l) {
        let p;
        if (f && (p = Th[n])) return p;
        if (n === "hasOwnProperty") return Oh;
      }
      const h = Reflect.get(t, n, at(t) ? t : i);
      return (Wn(n) ? iu.has(n) : Sh(n)) || (l || At(t, "get", n), c) ? h : at(h) ? f && Ea(n) ? h : h.value : Ye(h) ? l ? uu(h) : Jo(h) : h;
    }
  }
  class su extends ou {
    constructor(t = false) {
      super(false, t);
    }
    set(t, n, i, l) {
      let c = t[n];
      if (!this._isShallow) {
        const p = ir(c);
        if (!nn(i) && !ir(i) && (c = ke(c), i = ke(i)), !ve(t) && at(c) && !at(i)) return p || (c.value = i), true;
      }
      const f = ve(t) && Ea(n) ? Number(n) < t.length : Ue(t, n), h = Reflect.set(t, n, i, at(t) ? t : l);
      return t === ke(l) && (f ? Gt(i, c) && Nn(t, "set", n, i) : Nn(t, "add", n, i)), h;
    }
    deleteProperty(t, n) {
      const i = Ue(t, n);
      t[n];
      const l = Reflect.deleteProperty(t, n);
      return l && i && Nn(t, "delete", n, void 0), l;
    }
    has(t, n) {
      const i = Reflect.has(t, n);
      return (!Wn(n) || !iu.has(n)) && At(t, "has", n), i;
    }
    ownKeys(t) {
      return At(t, "iterate", ve(t) ? "length" : Tr), Reflect.ownKeys(t);
    }
  }
  class Ah extends ou {
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
  const Ph = new su(), Rh = new Ah(), Mh = new su(true);
  const Vs = (e) => e, Zi = (e) => Reflect.getPrototypeOf(e);
  function Nh(e, t, n) {
    return function(...i) {
      const l = this.__v_raw, c = ke(l), f = Gr(c), h = e === "entries" || e === Symbol.iterator && f, p = e === "keys" && f, v = l[e](...i), w = n ? Vs : t ? Io : vt;
      return !t && At(c, "iterate", p ? Hs : Tr), {
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
  function Qi(e) {
    return function(...t) {
      return e === "delete" ? false : e === "clear" ? void 0 : this;
    };
  }
  function Lh(e, t) {
    const n = {
      get(l) {
        const c = this.__v_raw, f = ke(c), h = ke(l);
        e || (Gt(l, h) && At(f, "get", l), At(f, "get", h));
        const { has: p } = Zi(f), v = t ? Vs : e ? Io : vt;
        if (p.call(f, l)) return v(c.get(l));
        if (p.call(f, h)) return v(c.get(h));
        c !== f && c.get(l);
      },
      get size() {
        const l = this.__v_raw;
        return !e && At(ke(l), "iterate", Tr), l.size;
      },
      has(l) {
        const c = this.__v_raw, f = ke(c), h = ke(l);
        return e || (Gt(l, h) && At(f, "has", l), At(f, "has", h)), l === h ? c.has(l) : c.has(l) || c.has(h);
      },
      forEach(l, c) {
        const f = this, h = f.__v_raw, p = ke(h), v = t ? Vs : e ? Io : vt;
        return !e && At(p, "iterate", Tr), h.forEach((w, I) => l.call(c, v(w), v(I), f));
      }
    };
    return ft(n, e ? {
      add: Qi("add"),
      set: Qi("set"),
      delete: Qi("delete"),
      clear: Qi("clear")
    } : {
      add(l) {
        !t && !nn(l) && !ir(l) && (l = ke(l));
        const c = ke(this);
        return Zi(c).has.call(c, l) || (c.add(l), Nn(c, "add", l, l)), this;
      },
      set(l, c) {
        !t && !nn(c) && !ir(c) && (c = ke(c));
        const f = ke(this), { has: h, get: p } = Zi(f);
        let v = h.call(f, l);
        v || (l = ke(l), v = h.call(f, l));
        const w = p.call(f, l);
        return f.set(l, c), v ? Gt(c, w) && Nn(f, "set", l, c) : Nn(f, "add", l, c), this;
      },
      delete(l) {
        const c = ke(this), { has: f, get: h } = Zi(c);
        let p = f.call(c, l);
        p || (l = ke(l), p = f.call(c, l)), h && h.call(c, l);
        const v = c.delete(l);
        return p && Nn(c, "delete", l, void 0), v;
      },
      clear() {
        const l = ke(this), c = l.size !== 0, f = l.clear();
        return c && Nn(l, "clear", void 0, void 0), f;
      }
    }), [
      "keys",
      "values",
      "entries",
      Symbol.iterator
    ].forEach((l) => {
      n[l] = Nh(l, e, t);
    }), n;
  }
  function Oa(e, t) {
    const n = Lh(e, t);
    return (i, l, c) => l === "__v_isReactive" ? !e : l === "__v_isReadonly" ? e : l === "__v_raw" ? i : Reflect.get(Ue(n, l) && l in i ? n : i, l, c);
  }
  const Ch = {
    get: Oa(false, false)
  }, kh = {
    get: Oa(false, true)
  }, xh = {
    get: Oa(true, false)
  };
  const au = /* @__PURE__ */ new WeakMap(), lu = /* @__PURE__ */ new WeakMap(), cu = /* @__PURE__ */ new WeakMap(), Fh = /* @__PURE__ */ new WeakMap();
  function Dh(e) {
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
  function jh(e) {
    return e.__v_skip || !Object.isExtensible(e) ? 0 : Dh(ah(e));
  }
  Jo = function(e) {
    return ir(e) ? e : Aa(e, false, Ph, Ch, au);
  };
  Uh = function(e) {
    return Aa(e, false, Mh, kh, lu);
  };
  uu = function(e) {
    return Aa(e, true, Rh, xh, cu);
  };
  function Aa(e, t, n, i, l) {
    if (!Ye(e) || e.__v_raw && !(t && e.__v_isReactive)) return e;
    const c = jh(e);
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
  function nn(e) {
    return !!(e && e.__v_isShallow);
  }
  function Pa(e) {
    return e ? !!e.__v_raw : false;
  }
  function ke(e) {
    const t = e && e.__v_raw;
    return t ? ke(t) : e;
  }
  Ra = function(e) {
    return !Ue(e, "__v_skip") && Object.isExtensible(e) && Bc(e, "__v_skip", true), e;
  };
  const vt = (e) => Ye(e) ? Jo(e) : e, Io = (e) => Ye(e) ? uu(e) : e;
  at = function(e) {
    return e ? e.__v_isRef === true : false;
  };
  en = function(e) {
    return fu(e, false);
  };
  Gh = function(e) {
    return fu(e, true);
  };
  function fu(e, t) {
    return at(e) ? e : new Wh(e, t);
  }
  class Wh {
    constructor(t, n) {
      this.dep = new Yo(), this.__v_isRef = true, this.__v_isShallow = false, this._rawValue = n ? t : ke(t), this._value = n ? t : vt(t), this.__v_isShallow = n;
    }
    get value() {
      return this.dep.track(), this._value;
    }
    set value(t) {
      const n = this._rawValue, i = this.__v_isShallow || nn(t) || ir(t);
      t = i ? t : ke(t), Gt(t, n) && (this._rawValue = t, this._value = i ? t : vt(t), this.dep.trigger());
    }
  }
  hu = function(e) {
    return at(e) ? e.value : e;
  };
  Mv = function(e) {
    return Te(e) ? e() : hu(e);
  };
  const $h = {
    get: (e, t, n) => t === "__v_raw" ? e : hu(Reflect.get(e, t, n)),
    set: (e, t, n, i) => {
      const l = e[t];
      return at(l) && !at(n) ? (l.value = n, true) : Reflect.set(e, t, n, i);
    }
  };
  function du(e) {
    return rr(e) ? e : new Proxy(e, $h);
  }
  class Bh {
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
  function zh(e) {
    return new Bh(e);
  }
  function Hh(e) {
    const t = ve(e) ? new Array(e.length) : {};
    for (const n in e) t[n] = pu(e, n);
    return t;
  }
  class Vh {
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
      return Ih(ke(this._object), this._key);
    }
  }
  class qh {
    constructor(t) {
      this._getter = t, this.__v_isRef = true, this.__v_isReadonly = true, this._value = void 0;
    }
    get value() {
      return this._value = this._getter();
    }
  }
  Nv = function(e, t, n) {
    return at(e) ? e : Te(e) ? new qh(e) : Ye(e) && arguments.length > 1 ? pu(e, t, n) : en(e);
  };
  function pu(e, t, n) {
    const i = e[t];
    return at(i) ? i : new Vh(e, t, n);
  }
  class Yh {
    constructor(t, n, i) {
      this.fn = t, this.setter = n, this._value = void 0, this.dep = new Yo(this), this.__v_isRef = true, this.deps = void 0, this.depsTail = void 0, this.flags = 16, this.globalVersion = Ci - 1, this.next = void 0, this.effect = this, this.__v_isReadonly = !n, this.isSSR = i;
    }
    notify() {
      if (this.flags |= 16, !(this.flags & 8) && qe !== this) return Zc(this, true), true;
    }
    get value() {
      const t = this.dep.track();
      return tu(this), t && (t.version = this.dep.version), this._value;
    }
    set value(t) {
      this.setter && this.setter(t);
    }
  }
  function Kh(e, t, n = false) {
    let i, l;
    return Te(e) ? i = e : (i = e.get, l = e.set), new Yh(i, l, n);
  }
  const eo = {}, To = /* @__PURE__ */ new WeakMap();
  let wr;
  function Jh(e, t = false, n = wr) {
    if (n) {
      let i = To.get(n);
      i || To.set(n, i = []), i.push(e);
    }
  }
  function Xh(e, t, n = xe) {
    const { immediate: i, deep: l, once: c, scheduler: f, augmentJob: h, call: p } = n, v = (W) => l ? W : nn(W) || l === false || l === 0 ? Ln(W, 1) : Ln(W);
    let w, I, P, R, C = false, L = false;
    if (at(e) ? (I = () => e.value, C = nn(e)) : rr(e) ? (I = () => v(e), C = true) : ve(e) ? (L = true, C = e.some((W) => rr(W) || nn(W)), I = () => e.map((W) => {
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
    } : I = cn, t && l) {
      const W = I, ue = l === true ? 1 / 0 : l;
      I = () => Ln(W(), ue);
    }
    const Z = Kc(), j = () => {
      w.stop(), Z && Z.active && va(Z.effects, w);
    };
    if (c && t) {
      const W = t;
      t = (...ue) => {
        W(...ue), j();
      };
    }
    let U = L ? new Array(e.length).fill(eo) : eo;
    const ne = (W) => {
      if (!(!(w.flags & 1) || !w.dirty && !W)) if (t) {
        const ue = w.run();
        if (l || C || (L ? ue.some((Oe, Ae) => Gt(Oe, U[Ae])) : Gt(ue, U))) {
          P && P();
          const Oe = wr;
          wr = w;
          try {
            const Ae = [
              ue,
              U === eo ? void 0 : L && U[0] === eo ? [] : U,
              R
            ];
            U = ue, p ? p(t, 3, Ae) : t(...Ae);
          } finally {
            wr = Oe;
          }
        }
      } else w.run();
    };
    return h && h(ne), w = new Jc(I), w.scheduler = f ? () => f(ne, false) : ne, R = (W) => Jh(W, false, w), P = w.onStop = () => {
      const W = To.get(w);
      if (W) {
        if (p) p(W, 4);
        else for (const ue of W) ue();
        To.delete(w);
      }
    }, t ? i ? ne(true) : U = w.run() : f ? f(ne.bind(null, true), true) : w.run(), j.pause = w.pause.bind(w), j.resume = w.resume.bind(w), j.stop = j, j;
  }
  function Ln(e, t = 1 / 0, n) {
    if (t <= 0 || !Ye(e) || e.__v_skip || (n = n || /* @__PURE__ */ new Set(), n.has(e))) return e;
    if (n.add(e), t--, at(e)) Ln(e.value, t, n);
    else if (ve(e)) for (let i = 0; i < e.length; i++) Ln(e[i], t, n);
    else if (Uc(e) || Gr(e)) e.forEach((i) => {
      Ln(i, t, n);
    });
    else if ($c(e)) {
      for (const i in e) Ln(e[i], t, n);
      for (const i of Object.getOwnPropertySymbols(e)) Object.prototype.propertyIsEnumerable.call(e, i) && Ln(e[i], t, n);
    }
    return e;
  }
  function Hi(e, t, n, i) {
    try {
      return i ? e(...i) : e();
    } catch (l) {
      Xo(l, t, n);
    }
  }
  function fn(e, t, n, i) {
    if (Te(e)) {
      const l = Hi(e, t, n, i);
      return l && Gc(l) && l.catch((c) => {
        Xo(c, t, n);
      }), l;
    }
    if (ve(e)) {
      const l = [];
      for (let c = 0; c < e.length; c++) l.push(fn(e[c], t, n, i));
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
        Dn(), Hi(c, null, 10, [
          e,
          p,
          v
        ]), jn();
        return;
      }
    }
    Zh(e, n, l, i, f);
  }
  function Zh(e, t, n, i = true, l = false) {
    if (l) throw e;
    console.error(e);
  }
  const kt = [];
  let wn = -1;
  const Wr = [];
  let Jn = null, jr = 0;
  const gu = Promise.resolve();
  let _o = null;
  mu = function(e) {
    const t = _o || gu;
    return e ? t.then(this ? e.bind(this) : e) : t;
  };
  function Qh(e) {
    let t = wn + 1, n = kt.length;
    for (; t < n; ) {
      const i = t + n >>> 1, l = kt[i], c = xi(l);
      c < e || c === e && l.flags & 2 ? t = i + 1 : n = i;
    }
    return t;
  }
  function Ma(e) {
    if (!(e.flags & 1)) {
      const t = xi(e), n = kt[kt.length - 1];
      !n || !(e.flags & 2) && t >= xi(n) ? kt.push(e) : kt.splice(Qh(t), 0, e), e.flags |= 1, wu();
    }
  }
  function wu() {
    _o || (_o = gu.then(vu));
  }
  function yu(e) {
    ve(e) ? Wr.push(...e) : Jn && e.id === -1 ? Jn.splice(jr + 1, 0, e) : e.flags & 1 || (Wr.push(e), e.flags |= 1), wu();
  }
  function tl(e, t, n = wn + 1) {
    for (; n < kt.length; n++) {
      const i = kt[n];
      if (i && i.flags & 2) {
        if (e && i.id !== e.uid) continue;
        kt.splice(n, 1), n--, i.flags & 4 && (i.flags &= -2), i(), i.flags & 4 || (i.flags &= -2);
      }
    }
  }
  function bu(e) {
    if (Wr.length) {
      const t = [
        ...new Set(Wr)
      ].sort((n, i) => xi(n) - xi(i));
      if (Wr.length = 0, Jn) {
        Jn.push(...t);
        return;
      }
      for (Jn = t, jr = 0; jr < Jn.length; jr++) {
        const n = Jn[jr];
        n.flags & 4 && (n.flags &= -2), n.flags & 8 || n(), n.flags &= -2;
      }
      Jn = null, jr = 0;
    }
  }
  const xi = (e) => e.id == null ? e.flags & 2 ? -1 : 1 / 0 : e.id;
  function vu(e) {
    try {
      for (wn = 0; wn < kt.length; wn++) {
        const t = kt[wn];
        t && !(t.flags & 8) && (t.flags & 4 && (t.flags &= -2), Hi(t, t.i, t.i ? 15 : 14), t.flags & 4 || (t.flags &= -2));
      }
    } finally {
      for (; wn < kt.length; wn++) {
        const t = kt[wn];
        t && (t.flags &= -2);
      }
      wn = -1, kt.length = 0, bu(), _o = null, (kt.length || Wr.length) && vu();
    }
  }
  let It = null, Eu = null;
  function So(e) {
    const t = It;
    return It = e, Eu = e && e.type.__scopeId || null, t;
  }
  ed = function(e, t = It, n) {
    if (!t || e._n) return e;
    const i = (...l) => {
      i._d && dl(-1);
      const c = So(t);
      let f;
      try {
        f = e(...l);
      } finally {
        So(c), i._d && dl(1);
      }
      return f;
    };
    return i._n = true, i._c = true, i._d = true, i;
  };
  Lv = function(e, t) {
    if (It === null) return e;
    const n = rs(It), i = e.dirs || (e.dirs = []);
    for (let l = 0; l < t.length; l++) {
      let [c, f, h, p = xe] = t[l];
      c && (Te(c) && (c = {
        mounted: c,
        updated: c
      }), c.deep && Ln(f), i.push({
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
      p && (Dn(), fn(p, n, 8, [
        e.el,
        h,
        e,
        t
      ]), jn());
    }
  }
  const Iu = Symbol("_vte"), Tu = (e) => e.__isTeleport, _i = (e) => e && (e.disabled || e.disabled === ""), nl = (e) => e && (e.defer || e.defer === ""), rl = (e) => typeof SVGElement < "u" && e instanceof SVGElement, il = (e) => typeof MathMLElement == "function" && e instanceof MathMLElement, qs = (e, t) => {
    const n = e && e.to;
    return rt(n) ? t ? t(n) : null : n;
  }, _u = {
    name: "Teleport",
    __isTeleport: true,
    process(e, t, n, i, l, c, f, h, p, v) {
      const { mc: w, pc: I, pbc: P, o: { insert: R, querySelector: C, createText: L, createComment: Z } } = v, j = _i(t.props);
      let { shapeFlag: U, children: ne, dynamicChildren: W } = t;
      if (e == null) {
        const ue = t.el = L(""), Oe = t.anchor = L("");
        R(ue, n, i), R(Oe, n, i);
        const Ae = (ie, we) => {
          U & 16 && (l && l.isCE && (l.ce._teleportTarget = ie), w(ne, ie, we, l, c, f, h, p));
        }, me = () => {
          const ie = t.target = qs(t.props, C), we = Su(ie, t, L, R);
          ie && (f !== "svg" && rl(ie) ? f = "svg" : f !== "mathml" && il(ie) && (f = "mathml"), j || (Ae(ie, we), fo(t, false)));
        };
        j && (Ae(n, Oe), fo(t, true)), nl(t.props) ? (t.el.__isMounted = false, gt(() => {
          me(), delete t.el.__isMounted;
        }, c)) : me();
      } else {
        if (nl(t.props) && e.el.__isMounted === false) {
          gt(() => {
            _u.process(e, t, n, i, l, c, f, h, p, v);
          }, c);
          return;
        }
        t.el = e.el, t.targetStart = e.targetStart;
        const ue = t.anchor = e.anchor, Oe = t.target = e.target, Ae = t.targetAnchor = e.targetAnchor, me = _i(e.props), ie = me ? n : Oe, we = me ? ue : Ae;
        if (f === "svg" || rl(Oe) ? f = "svg" : (f === "mathml" || il(Oe)) && (f = "mathml"), W ? (P(e.dynamicChildren, W, ie, l, c, f, h), Da(e, t, true)) : p || I(e, t, ie, we, l, c, f, h, false), j) me ? t.props && e.props && t.props.to !== e.props.to && (t.props.to = e.props.to) : to(t, n, ue, v, 1);
        else if ((t.props && t.props.to) !== (e.props && e.props.to)) {
          const Pe = t.target = qs(t.props, C);
          Pe && to(t, Pe, null, v, 0);
        } else me && to(t, Oe, Ae, v, 1);
        fo(t, j);
      }
    },
    remove(e, t, n, { um: i, o: { remove: l } }, c) {
      const { shapeFlag: f, children: h, anchor: p, targetStart: v, targetAnchor: w, target: I, props: P } = e;
      if (I && (l(v), l(w)), c && l(p), f & 16) {
        const R = c || !_i(P);
        for (let C = 0; C < h.length; C++) {
          const L = h[C];
          i(L, t, n, R, !!L.dynamicChildren);
        }
      }
    },
    move: to,
    hydrate: td
  };
  function to(e, t, n, { o: { insert: i }, m: l }, c = 2) {
    c === 0 && i(e.targetAnchor, t, n);
    const { el: f, anchor: h, shapeFlag: p, children: v, props: w } = e, I = c === 2;
    if (I && i(f, t, n), (!I || _i(w)) && p & 16) for (let P = 0; P < v.length; P++) l(v[P], t, n, 2);
    I && i(h, t, n);
  }
  function td(e, t, n, i, l, c, { o: { nextSibling: f, parentNode: h, querySelector: p, insert: v, createText: w } }, I) {
    const P = t.target = qs(t.props, p);
    if (P) {
      const R = _i(t.props), C = P._lpa || P.firstChild;
      if (t.shapeFlag & 16) if (R) t.anchor = I(f(e), t, h(e), n, i, l, c), t.targetStart = C, t.targetAnchor = C && f(C);
      else {
        t.anchor = f(e);
        let L = C;
        for (; L; ) {
          if (L && L.nodeType === 8) {
            if (L.data === "teleport start anchor") t.targetStart = L;
            else if (L.data === "teleport anchor") {
              t.targetAnchor = L, P._lpa = t.targetAnchor && f(t.targetAnchor);
              break;
            }
          }
          L = f(L);
        }
        t.targetAnchor || Su(P, t, w, v), I(C && f(C), t, P, n, i, l, c);
      }
      fo(t, R);
    }
    return t.anchor && f(t.anchor);
  }
  Cv = _u;
  function fo(e, t) {
    const n = e.ctx;
    if (n && n.ut) {
      let i, l;
      for (t ? (i = e.el, l = e.anchor) : (i = e.targetStart, l = e.targetAnchor); i && i !== l; ) i.nodeType === 1 && i.setAttribute("data-v-owner", n.uid), i = i.nextSibling;
      n.ut();
    }
  }
  function Su(e, t, n, i) {
    const l = t.targetStart = n(""), c = t.targetAnchor = n("");
    return l[Iu] = c, e && (i(l, e), i(c, e)), c;
  }
  const Mn = Symbol("_leaveCb"), no = Symbol("_enterCb");
  function Ou() {
    const e = {
      isMounted: false,
      isLeaving: false,
      isUnmounting: false,
      leavingVNodes: /* @__PURE__ */ new Map()
    };
    return Vi(() => {
      e.isMounted = true;
    }), Ca(() => {
      e.isUnmounting = true;
    }), e;
  }
  const Xt = [
    Function,
    Array
  ], Au = {
    mode: String,
    appear: Boolean,
    persisted: Boolean,
    onBeforeEnter: Xt,
    onEnter: Xt,
    onAfterEnter: Xt,
    onEnterCancelled: Xt,
    onBeforeLeave: Xt,
    onLeave: Xt,
    onAfterLeave: Xt,
    onLeaveCancelled: Xt,
    onBeforeAppear: Xt,
    onAppear: Xt,
    onAfterAppear: Xt,
    onAppearCancelled: Xt
  }, Pu = (e) => {
    const t = e.subTree;
    return t.component ? Pu(t.component) : t;
  }, nd = {
    name: "BaseTransition",
    props: Au,
    setup(e, { slots: t }) {
      const n = ar(), i = Ou();
      return () => {
        const l = t.default && Na(t.default(), true);
        if (!l || !l.length) return;
        const c = Ru(l), f = ke(e), { mode: h } = f;
        if (i.isLeaving) return ws(c);
        const p = ol(c);
        if (!p) return ws(c);
        let v = Fi(p, f, i, n, (I) => v = I);
        p.type !== Et && or(p, v);
        let w = n.subTree && ol(n.subTree);
        if (w && w.type !== Et && !Zn(p, w) && Pu(n).type !== Et) {
          let I = Fi(w, f, i, n);
          if (or(w, I), h === "out-in" && p.type !== Et) return i.isLeaving = true, I.afterLeave = () => {
            i.isLeaving = false, n.job.flags & 8 || n.update(), delete I.afterLeave, w = void 0;
          }, ws(c);
          h === "in-out" && p.type !== Et ? I.delayLeave = (P, R, C) => {
            const L = Mu(i, w);
            L[String(w.key)] = w, P[Mn] = () => {
              R(), P[Mn] = void 0, delete v.delayedLeave, w = void 0;
            }, v.delayedLeave = () => {
              C(), delete v.delayedLeave, w = void 0;
            };
          } : w = void 0;
        } else w && (w = void 0);
        return c;
      };
    }
  };
  function Ru(e) {
    let t = e[0];
    if (e.length > 1) {
      for (const n of e) if (n.type !== Et) {
        t = n;
        break;
      }
    }
    return t;
  }
  const rd = nd;
  function Mu(e, t) {
    const { leavingVNodes: n } = e;
    let i = n.get(t.type);
    return i || (i = /* @__PURE__ */ Object.create(null), n.set(t.type, i)), i;
  }
  function Fi(e, t, n, i, l) {
    const { appear: c, mode: f, persisted: h = false, onBeforeEnter: p, onEnter: v, onAfterEnter: w, onEnterCancelled: I, onBeforeLeave: P, onLeave: R, onAfterLeave: C, onLeaveCancelled: L, onBeforeAppear: Z, onAppear: j, onAfterAppear: U, onAppearCancelled: ne } = t, W = String(e.key), ue = Mu(n, e), Oe = (ie, we) => {
      ie && fn(ie, i, 9, we);
    }, Ae = (ie, we) => {
      const Pe = we[1];
      Oe(ie, we), ve(ie) ? ie.every((he) => he.length <= 1) && Pe() : ie.length <= 1 && Pe();
    }, me = {
      mode: f,
      persisted: h,
      beforeEnter(ie) {
        let we = p;
        if (!n.isMounted) if (c) we = Z || p;
        else return;
        ie[Mn] && ie[Mn](true);
        const Pe = ue[W];
        Pe && Zn(e, Pe) && Pe.el[Mn] && Pe.el[Mn](), Oe(we, [
          ie
        ]);
      },
      enter(ie) {
        let we = v, Pe = w, he = I;
        if (!n.isMounted) if (c) we = j || v, Pe = U || w, he = ne || I;
        else return;
        let je = false;
        const lt = ie[no] = (Wt) => {
          je || (je = true, Wt ? Oe(he, [
            ie
          ]) : Oe(Pe, [
            ie
          ]), me.delayedLeave && me.delayedLeave(), ie[no] = void 0);
        };
        we ? Ae(we, [
          ie,
          lt
        ]) : lt();
      },
      leave(ie, we) {
        const Pe = String(e.key);
        if (ie[no] && ie[no](true), n.isUnmounting) return we();
        Oe(P, [
          ie
        ]);
        let he = false;
        const je = ie[Mn] = (lt) => {
          he || (he = true, we(), lt ? Oe(L, [
            ie
          ]) : Oe(C, [
            ie
          ]), ie[Mn] = void 0, ue[Pe] === e && delete ue[Pe]);
        };
        ue[Pe] = e, R ? Ae(R, [
          ie,
          je
        ]) : je();
      },
      clone(ie) {
        const we = Fi(ie, t, n, i, l);
        return l && l(we), we;
      }
    };
    return me;
  }
  function ws(e) {
    if (Zo(e)) return e = Un(e), e.children = null, e;
  }
  function ol(e) {
    if (!Zo(e)) return Tu(e.type) && e.children ? Ru(e.children) : e;
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
      f.type === Pt ? (f.patchFlag & 128 && l++, i = i.concat(Na(f.children, t, h))) : (t || f.type !== Et) && i.push(h != null ? Un(f, {
        key: h
      }) : f);
    }
    if (l > 1) for (let c = 0; c < i.length; c++) i[c].patchFlag = -2;
    return i;
  }
  id = function(e, t) {
    return Te(e) ? ft({
      name: e.name
    }, t, {
      setup: e
    }) : e;
  };
  function Nu(e) {
    e.ids = [
      e.ids[0] + e.ids[2]++ + "-",
      0,
      0
    ];
  }
  kv = function(e) {
    const t = ar(), n = Gh(null);
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
  function Si(e, t, n, i, l = false) {
    if (ve(e)) {
      e.forEach((C, L) => Si(C, t && (ve(t) ? t[L] : t), n, i, l));
      return;
    }
    if (_r(i) && !l) {
      i.shapeFlag & 512 && i.type.__asyncResolved && i.component.subTree.component && Si(e, t, n, i.component.subTree);
      return;
    }
    const c = i.shapeFlag & 4 ? rs(i.component) : i.el, f = l ? null : c, { i: h, r: p } = e, v = t && t.r, w = h.refs === xe ? h.refs = {} : h.refs, I = h.setupState, P = ke(I), R = I === xe ? jc : (C) => Ue(P, C);
    if (v != null && v !== p) {
      if (rt(v)) w[v] = null, R(v) && (I[v] = null);
      else if (at(v)) {
        v.value = null;
        const C = t;
        C.k && (w[C.k] = null);
      }
    }
    if (Te(p)) Hi(p, h, 12, [
      f,
      w
    ]);
    else {
      const C = rt(p), L = at(p);
      if (C || L) {
        const Z = () => {
          if (e.f) {
            const j = C ? R(p) ? I[p] : w[p] : p.value;
            if (l) ve(j) && va(j, c);
            else if (ve(j)) j.includes(c) || j.push(c);
            else if (C) w[p] = [
              c
            ], R(p) && (I[p] = w[p]);
            else {
              const U = [
                c
              ];
              p.value = U, e.k && (w[e.k] = U);
            }
          } else C ? (w[p] = f, R(p) && (I[p] = f)) : L && (p.value = f, e.k && (w[e.k] = f));
        };
        f ? (Z.id = -1, gt(Z, n)) : Z();
      }
    }
  }
  Vo().requestIdleCallback;
  Vo().cancelIdleCallback;
  let _r, Zo, od;
  _r = (e) => !!e.type.__asyncLoader;
  Zo = (e) => e.type.__isKeepAlive;
  od = {
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
        v(U, ne, W, 0, h), p(Ae.vnode, U, ne, W, Ae, h, ue, U.slotScopeIds, Oe), gt(() => {
          Ae.isDeactivated = false, Ae.a && Ei(Ae.a);
          const me = U.props && U.props.onVnodeMounted;
          me && Qt(me, Ae.parent, U);
        }, h);
      }, i.deactivate = (U) => {
        const ne = U.component;
        Po(ne.m), Po(ne.a), v(U, P, null, 1, h), gt(() => {
          ne.da && Ei(ne.da);
          const W = U.props && U.props.onVnodeUnmounted;
          W && Qt(W, ne.parent, U), ne.isDeactivated = true;
        }, h);
      };
      function R(U) {
        ys(U), w(U, n, h, true);
      }
      function C(U) {
        l.forEach((ne, W) => {
          const ue = ea(ne.type);
          ue && !U(ue) && L(W);
        });
      }
      function L(U) {
        const ne = l.get(U);
        ne && (!f || !Zn(ne, f)) ? R(ne) : f && ys(f), l.delete(U), c.delete(U);
      }
      $r(() => [
        e.include,
        e.exclude
      ], ([U, ne]) => {
        U && C((W) => gi(U, W)), ne && C((W) => !gi(ne, W));
      }, {
        flush: "post",
        deep: true
      });
      let Z = null;
      const j = () => {
        Z != null && (Ro(n.subTree.type) ? gt(() => {
          l.set(Z, ro(n.subTree));
        }, n.subTree.suspense) : l.set(Z, ro(n.subTree)));
      };
      return Vi(j), La(j), Ca(() => {
        l.forEach((U) => {
          const { subTree: ne, suspense: W } = n, ue = ro(ne);
          if (U.type === ue.type && U.key === ue.key) {
            ys(ue);
            const Oe = ue.component.da;
            Oe && gt(Oe, W);
            return;
          }
          R(U);
        });
      }), () => {
        if (Z = null, !t.default) return f = null;
        const U = t.default(), ne = U[0];
        if (U.length > 1) return f = null, U;
        if (!Hr(ne) || !(ne.shapeFlag & 4) && !(ne.shapeFlag & 128)) return f = null, ne;
        let W = ro(ne);
        if (W.type === Et) return f = null, W;
        const ue = W.type, Oe = ea(_r(W) ? W.type.__asyncResolved || {} : ue), { include: Ae, exclude: me, max: ie } = e;
        if (Ae && (!Oe || !gi(Ae, Oe)) || me && Oe && gi(me, Oe)) return W.shapeFlag &= -257, f = W, ne;
        const we = W.key == null ? ue : W.key, Pe = l.get(we);
        return W.el && (W = Un(W), ne.shapeFlag & 128 && (ne.ssContent = W)), Z = we, Pe ? (W.el = Pe.el, W.component = Pe.component, W.transition && or(W, W.transition), W.shapeFlag |= 512, c.delete(we), c.add(we)) : (c.add(we), ie && c.size > parseInt(ie, 10) && L(c.values().next().value)), W.shapeFlag |= 256, f = W, Ro(ne.type) ? ne : W;
      };
    }
  };
  xv = od;
  function gi(e, t) {
    return ve(e) ? e.some((n) => gi(n, t)) : rt(e) ? e.split(",").includes(t) : sh(e) ? (e.lastIndex = 0, e.test(t)) : false;
  }
  sd = function(e, t) {
    Lu(e, "a", t);
  };
  ad = function(e, t) {
    Lu(e, "da", t);
  };
  function Lu(e, t, n = Rt) {
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
      for (; l && l.parent; ) Zo(l.parent.vnode) && ld(i, t, n, l), l = l.parent;
    }
  }
  function ld(e, t, n, i) {
    const l = Qo(t, e, i, true);
    ka(() => {
      va(i[t], l);
    }, n);
  }
  function ys(e) {
    e.shapeFlag &= -257, e.shapeFlag &= -513;
  }
  function ro(e) {
    return e.shapeFlag & 128 ? e.ssContent : e;
  }
  function Qo(e, t, n = Rt, i = false) {
    if (n) {
      const l = n[e] || (n[e] = []), c = t.__weh || (t.__weh = (...f) => {
        Dn();
        const h = qi(n), p = fn(t, n, e, f);
        return h(), jn(), p;
      });
      return i ? l.unshift(c) : l.push(c), c;
    }
  }
  let Bn, Cu, La, ud, fd, hd;
  Bn = (e) => (t, n = Rt) => {
    (!ji || e === "sp") && Qo(e, (...i) => t(...i), n);
  };
  cd = Bn("bm");
  Vi = Bn("m");
  Cu = Bn("bu");
  La = Bn("u");
  Ca = Bn("bum");
  ka = Bn("um");
  ud = Bn("sp");
  fd = Bn("rtg");
  hd = Bn("rtc");
  function dd(e, t = Rt) {
    Qo("ec", e, t);
  }
  const pd = "components", ku = Symbol.for("v-ndc");
  Fv = function(e) {
    return rt(e) ? gd(pd, e, false) || e : e || ku;
  };
  function gd(e, t, n = true, i = false) {
    const l = It || Rt;
    if (l) {
      const c = l.type;
      {
        const h = ea(c, false);
        if (h && (h === t || h === qt(t) || h === Ho(qt(t)))) return c;
      }
      const f = sl(l[e] || c[e], t) || sl(l.appContext[e], t);
      return !f && i ? c : f;
    }
  }
  function sl(e, t) {
    return e && (e[t] || e[qt(t)] || e[Ho(qt(t))]);
  }
  md = function(e, t, n, i) {
    let l;
    const c = n, f = ve(e);
    if (f || rt(e)) {
      const h = f && rr(e);
      let p = false, v = false;
      h && (p = !nn(e), v = ir(e), e = Ko(e)), l = new Array(e.length);
      for (let w = 0, I = e.length; w < I; w++) l[w] = t(p ? v ? Io(vt(e[w])) : vt(e[w]) : e[w], w, void 0, c);
    } else if (typeof e == "number") {
      l = new Array(e);
      for (let h = 0; h < e; h++) l[h] = t(h + 1, h, void 0, c);
    } else if (Ye(e)) if (e[Symbol.iterator]) l = Array.from(e, (h, p) => t(h, p, void 0, c));
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
    if (It.ce || It.parent && _r(It.parent) && It.parent.ce) return t !== "default" && (n.name = t), sn(), Zs(Pt, null, [
      Mt("slot", n, i && i())
    ], 64);
    let c = e[t];
    c && c._c && (c._d = false), sn();
    const f = c && xu(c(n)), h = n.key || f && f.key, p = Zs(Pt, {
      key: (h && !Wn(h) ? h : `_${t}`) + (!f && i ? "_fb" : "")
    }, f || (i ? i() : []), f && e._ === 1 ? 64 : -2);
    return !l && p.scopeId && (p.slotScopeIds = [
      p.scopeId + "-s"
    ]), c && c._c && (c._d = true), p;
  };
  function xu(e) {
    return e.some((t) => Hr(t) ? !(t.type === Et || t.type === Pt && !xu(t.children)) : true) ? e : null;
  }
  const Ys = (e) => e ? Qu(e) ? rs(e) : Ys(e.parent) : null, Oi = ft(/* @__PURE__ */ Object.create(null), {
    $: (e) => e,
    $el: (e) => e.vnode.el,
    $data: (e) => e.data,
    $props: (e) => e.props,
    $attrs: (e) => e.attrs,
    $slots: (e) => e.slots,
    $refs: (e) => e.refs,
    $parent: (e) => Ys(e.parent),
    $root: (e) => Ys(e.root),
    $host: (e) => e.ce,
    $emit: (e) => e.emit,
    $options: (e) => Du(e),
    $forceUpdate: (e) => e.f || (e.f = () => {
      Ma(e.update);
    }),
    $nextTick: (e) => e.n || (e.n = mu.bind(e.proxy)),
    $watch: (e) => Gd.bind(e)
  }), bs = (e, t) => e !== xe && !e.__isScriptSetup && Ue(e, t), wd = {
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
          Ks && (f[t] = 0);
        }
      }
      const w = Oi[t];
      let I, P;
      if (w) return t === "$attrs" && At(e.attrs, "get", ""), w(e);
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
      return !!(n[h] || e !== xe && h[0] !== "$" && Ue(e, h) || bs(t, h) || (p = c[0]) && Ue(p, h) || Ue(i, h) || Ue(Oi, h) || Ue(l.config.globalProperties, h) || (v = f.__cssModules) && v[h]);
    },
    defineProperty(e, t, n) {
      return n.get != null ? e._.accessCache[t] = 0 : Ue(n, "value") && this.set(e, t, n.value, null), Reflect.defineProperty(e, t, n);
    }
  };
  function Oo(e) {
    return ve(e) ? e.reduce((t, n) => (t[n] = null, t), {}) : e;
  }
  jv = function(e, t) {
    return !e || !t ? e || t : ve(e) && ve(t) ? e.concat(t) : ft({}, Oo(e), Oo(t));
  };
  let Ks = true;
  function yd(e) {
    const t = Du(e), n = e.proxy, i = e.ctx;
    Ks = false, t.beforeCreate && al(t.beforeCreate, e, "bc");
    const { data: l, computed: c, methods: f, watch: h, provide: p, inject: v, created: w, beforeMount: I, mounted: P, beforeUpdate: R, updated: C, activated: L, deactivated: Z, beforeDestroy: j, beforeUnmount: U, destroyed: ne, unmounted: W, render: ue, renderTracked: Oe, renderTriggered: Ae, errorCaptured: me, serverPrefetch: ie, expose: we, inheritAttrs: Pe, components: he, directives: je, filters: lt } = t;
    if (v && bd(v, i, null), f) for (const Me in f) {
      const We = f[Me];
      Te(We) && (i[Me] = We.bind(n));
    }
    if (l) {
      const Me = l.call(n, n);
      Ye(Me) && (e.data = Jo(Me));
    }
    if (Ks = true, c) for (const Me in c) {
      const We = c[Me], _n = Te(We) ? We.bind(n, n) : Te(We.get) ? We.get.bind(n, n) : cn, Nr = !Te(We) && Te(We.set) ? We.set.bind(n) : cn, Sn = Ua({
        get: _n,
        set: Nr
      });
      Object.defineProperty(i, Me, {
        enumerable: true,
        configurable: true,
        get: () => Sn.value,
        set: (ye) => Sn.value = ye
      });
    }
    if (h) for (const Me in h) Fu(h[Me], i, n, Me);
    if (p) {
      const Me = Te(p) ? p.call(n) : p;
      Reflect.ownKeys(Me).forEach((We) => {
        Sd(We, Me[We]);
      });
    }
    w && al(w, e, "c");
    function ze(Me, We) {
      ve(We) ? We.forEach((_n) => Me(_n.bind(n))) : We && Me(We.bind(n));
    }
    if (ze(cd, I), ze(Vi, P), ze(Cu, R), ze(La, C), ze(sd, L), ze(ad, Z), ze(dd, me), ze(hd, Oe), ze(fd, Ae), ze(Ca, U), ze(ka, W), ze(ud, ie), ve(we)) if (we.length) {
      const Me = e.exposed || (e.exposed = {});
      we.forEach((We) => {
        Object.defineProperty(Me, We, {
          get: () => n[We],
          set: (_n) => n[We] = _n,
          enumerable: true
        });
      });
    } else e.exposed || (e.exposed = {});
    ue && e.render === cn && (e.render = ue), Pe != null && (e.inheritAttrs = Pe), he && (e.components = he), je && (e.directives = je), ie && Nu(e);
  }
  function bd(e, t, n = cn) {
    ve(e) && (e = Js(e));
    for (const i in e) {
      const l = e[i];
      let c;
      Ye(l) ? "default" in l ? c = Ai(l.from || i, l.default, true) : c = Ai(l.from || i) : c = Ai(l), at(c) ? Object.defineProperty(t, i, {
        enumerable: true,
        configurable: true,
        get: () => c.value,
        set: (f) => c.value = f
      }) : t[i] = c;
    }
  }
  function al(e, t, n) {
    fn(ve(e) ? e.map((i) => i.bind(t.proxy)) : e.bind(t.proxy), t, n);
  }
  function Fu(e, t, n, i) {
    let l = i.includes(".") ? Yu(n, i) : () => n[i];
    if (rt(e)) {
      const c = t[e];
      Te(c) && $r(l, c);
    } else if (Te(e)) $r(l, e.bind(n));
    else if (Ye(e)) if (ve(e)) e.forEach((c) => Fu(c, t, n, i));
    else {
      const c = Te(e.handler) ? e.handler.bind(n) : t[e.handler];
      Te(c) && $r(l, c, e);
    }
  }
  function Du(e) {
    const t = e.type, { mixins: n, extends: i } = t, { mixins: l, optionsCache: c, config: { optionMergeStrategies: f } } = e.appContext, h = c.get(t);
    let p;
    return h ? p = h : !l.length && !n && !i ? p = t : (p = {}, l.length && l.forEach((v) => Ao(p, v, f, true)), Ao(p, t, f)), Ye(t) && c.set(t, p), p;
  }
  function Ao(e, t, n, i = false) {
    const { mixins: l, extends: c } = t;
    c && Ao(e, c, n, true), l && l.forEach((f) => Ao(e, f, n, true));
    for (const f in t) if (!(i && f === "expose")) {
      const h = vd[f] || n && n[f];
      e[f] = h ? h(e[f], t[f]) : t[f];
    }
    return e;
  }
  const vd = {
    data: ll,
    props: cl,
    emits: cl,
    methods: mi,
    computed: mi,
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
    components: mi,
    directives: mi,
    watch: Id,
    provide: ll,
    inject: Ed
  };
  function ll(e, t) {
    return t ? e ? function() {
      return ft(Te(e) ? e.call(this, this) : e, Te(t) ? t.call(this, this) : t);
    } : t : e;
  }
  function Ed(e, t) {
    return mi(Js(e), Js(t));
  }
  function Js(e) {
    if (ve(e)) {
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
  function mi(e, t) {
    return e ? ft(/* @__PURE__ */ Object.create(null), e, t) : t;
  }
  function cl(e, t) {
    return e ? ve(e) && ve(t) ? [
      .../* @__PURE__ */ new Set([
        ...e,
        ...t
      ])
    ] : ft(/* @__PURE__ */ Object.create(null), Oo(e), Oo(t ?? {})) : t;
  }
  function Id(e, t) {
    if (!e) return t;
    if (!t) return e;
    const n = ft(/* @__PURE__ */ Object.create(null), e);
    for (const i in t) n[i] = Lt(e[i], t[i]);
    return n;
  }
  function ju() {
    return {
      app: null,
      config: {
        isNativeTag: jc,
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
  let Td = 0;
  function _d(e, t) {
    return function(i, l = null) {
      Te(i) || (i = ft({}, i)), l != null && !Ye(l) && (l = null);
      const c = ju(), f = /* @__PURE__ */ new WeakSet(), h = [];
      let p = false;
      const v = c.app = {
        _uid: Td++,
        _component: i,
        _props: l,
        _container: null,
        _context: c,
        _instance: null,
        version: ap,
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
          p && (fn(h, v._instance, 16), e(null, v._container), delete v._container.__vue_app__);
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
  Sd = function(e, t) {
    if (Rt) {
      let n = Rt.provides;
      const i = Rt.parent && Rt.parent.provides;
      i === n && (n = Rt.provides = Object.create(i)), n[e] = t;
    }
  };
  Ai = function(e, t, n = false) {
    const i = ar();
    if (i || Sr) {
      let l = Sr ? Sr._context.provides : i ? i.parent == null || i.ce ? i.vnode.appContext && i.vnode.appContext.provides : i.parent.provides : void 0;
      if (l && e in l) return l[e];
      if (arguments.length > 1) return n && Te(t) ? t.call(i && i.proxy) : t;
    }
  };
  Od = function() {
    return !!(ar() || Sr);
  };
  const Uu = {}, Gu = () => Object.create(Uu), Wu = (e) => Object.getPrototypeOf(e) === Uu;
  function Ad(e, t, n, i = false) {
    const l = {}, c = Gu();
    e.propsDefaults = /* @__PURE__ */ Object.create(null), $u(e, t, l, c);
    for (const f in e.propsOptions[0]) f in l || (l[f] = void 0);
    n ? e.props = i ? l : Uh(l) : e.type.props ? e.props = l : e.props = c, e.attrs = c;
  }
  function Pd(e, t, n, i) {
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
            const C = qt(P);
            l[C] = Xs(p, h, C, R, e, false);
          }
          else R !== c[P] && (c[P] = R, v = true);
        }
      }
    } else {
      $u(e, t, l, c) && (v = true);
      let w;
      for (const I in h) (!t || !Ue(t, I) && ((w = $n(I)) === I || !Ue(t, w))) && (p ? n && (n[I] !== void 0 || n[w] !== void 0) && (l[I] = Xs(p, h, I, void 0, e, true)) : delete l[I]);
      if (c !== h) for (const I in c) (!t || !Ue(t, I)) && (delete c[I], v = true);
    }
    v && Nn(e.attrs, "set", "");
  }
  function $u(e, t, n, i) {
    const [l, c] = e.propsOptions;
    let f = false, h;
    if (t) for (let p in t) {
      if (vi(p)) continue;
      const v = t[p];
      let w;
      l && Ue(l, w = qt(p)) ? !c || !c.includes(w) ? n[w] = v : (h || (h = {}))[w] = v : ts(e.emitsOptions, p) || (!(p in i) || v !== i[p]) && (i[p] = v, f = true);
    }
    if (c) {
      const p = ke(n), v = h || xe;
      for (let w = 0; w < c.length; w++) {
        const I = c[w];
        n[I] = Xs(l, p, I, v[I], e, !Ue(v, I));
      }
    }
    return f;
  }
  function Xs(e, t, n, i, l, c) {
    const f = e[n];
    if (f != null) {
      const h = Ue(f, "default");
      if (h && i === void 0) {
        const p = f.default;
        if (f.type !== Function && !f.skipFactory && Te(p)) {
          const { propsDefaults: v } = l;
          if (n in v) i = v[n];
          else {
            const w = qi(l);
            i = v[n] = p.call(null, t), w();
          }
        } else i = p;
        l.ce && l.ce._setProp(n, i);
      }
      f[0] && (c && !h ? i = false : f[1] && (i === "" || i === $n(n)) && (i = true));
    }
    return i;
  }
  const Rd = /* @__PURE__ */ new WeakMap();
  function Bu(e, t, n = false) {
    const i = n ? Rd : t.propsCache, l = i.get(e);
    if (l) return l;
    const c = e.props, f = {}, h = [];
    let p = false;
    if (!Te(e)) {
      const w = (I) => {
        p = true;
        const [P, R] = Bu(I, t, true);
        ft(f, P), R && h.push(...R);
      };
      !n && t.mixins.length && t.mixins.forEach(w), e.extends && w(e.extends), e.mixins && e.mixins.forEach(w);
    }
    if (!c && !p) return Ye(e) && i.set(e, Ur), Ur;
    if (ve(c)) for (let w = 0; w < c.length; w++) {
      const I = qt(c[w]);
      ul(I) && (f[I] = xe);
    }
    else if (c) for (const w in c) {
      const I = qt(w);
      if (ul(I)) {
        const P = c[w], R = f[I] = ve(P) || Te(P) ? {
          type: P
        } : ft({}, P), C = R.type;
        let L = false, Z = true;
        if (ve(C)) for (let j = 0; j < C.length; ++j) {
          const U = C[j], ne = Te(U) && U.name;
          if (ne === "Boolean") {
            L = true;
            break;
          } else ne === "String" && (Z = false);
        }
        else L = Te(C) && C.name === "Boolean";
        R[0] = L, R[1] = Z, (L || Ue(R, "default")) && h.push(I);
      }
    }
    const v = [
      f,
      h
    ];
    return Ye(e) && i.set(e, v), v;
  }
  function ul(e) {
    return e[0] !== "$" && !vi(e);
  }
  const xa = (e) => e === "_" || e === "_ctx" || e === "$stable", Fa = (e) => ve(e) ? e.map(bn) : [
    bn(e)
  ], Md = (e, t, n) => {
    if (t._n) return t;
    const i = ed((...l) => Fa(t(...l)), n);
    return i._c = false, i;
  }, zu = (e, t, n) => {
    const i = e._ctx;
    for (const l in e) {
      if (xa(l)) continue;
      const c = e[l];
      if (Te(c)) t[l] = Md(l, c, i);
      else if (c != null) {
        const f = Fa(c);
        t[l] = () => f;
      }
    }
  }, Hu = (e, t) => {
    const n = Fa(t);
    e.slots.default = () => n;
  }, Vu = (e, t, n) => {
    for (const i in t) (n || !xa(i)) && (e[i] = t[i]);
  }, Nd = (e, t, n) => {
    const i = e.slots = Gu();
    if (e.vnode.shapeFlag & 32) {
      const l = t._;
      l ? (Vu(i, t, n), n && Bc(i, "_", l, true)) : zu(t, i);
    } else t && Hu(e, t);
  }, Ld = (e, t, n) => {
    const { vnode: i, slots: l } = e;
    let c = true, f = xe;
    if (i.shapeFlag & 32) {
      const h = t._;
      h ? n && h === 1 ? c = false : Vu(l, t, n) : (c = !t.$stable, zu(t, l)), f = t;
    } else t && (Hu(e, t), f = {
      default: 1
    });
    if (c) for (const h in l) !xa(h) && f[h] == null && delete l[h];
  }, gt = Vd;
  function Cd(e) {
    return kd(e);
  }
  function kd(e, t) {
    const n = Vo();
    n.__VUE__ = true;
    const { insert: i, remove: l, patchProp: c, createElement: f, createText: h, createComment: p, setText: v, setElementText: w, parentNode: I, nextSibling: P, setScopeId: R = cn, insertStaticContent: C } = e, L = (T, O, x, K = null, V = null, q = null, se = void 0, Q = null, re = !!O.dynamicChildren) => {
      if (T === O) return;
      T && !Zn(T, O) && (K = On(T), ye(T, V, q, true), T = null), O.patchFlag === -2 && (re = false, O.dynamicChildren = null);
      const { type: J, ref: de, shapeFlag: ae } = O;
      switch (J) {
        case ns:
          Z(T, O, x, K);
          break;
        case Et:
          j(T, O, x, K);
          break;
        case Pi:
          T == null && U(O, x, K, se);
          break;
        case Pt:
          he(T, O, x, K, V, q, se, Q, re);
          break;
        default:
          ae & 1 ? ue(T, O, x, K, V, q, se, Q, re) : ae & 6 ? je(T, O, x, K, V, q, se, Q, re) : (ae & 64 || ae & 128) && J.process(T, O, x, K, V, q, se, Q, re, ur);
      }
      de != null && V ? Si(de, T && T.ref, q, O || T, !O) : de == null && T && T.ref != null && Si(T.ref, null, q, T, true);
    }, Z = (T, O, x, K) => {
      if (T == null) i(O.el = h(O.children), x, K);
      else {
        const V = O.el = T.el;
        O.children !== T.children && v(V, O.children);
      }
    }, j = (T, O, x, K) => {
      T == null ? i(O.el = p(O.children || ""), x, K) : O.el = T.el;
    }, U = (T, O, x, K) => {
      [T.el, T.anchor] = C(T.children, O, x, K, T.el, T.anchor);
    }, ne = ({ el: T, anchor: O }, x, K) => {
      let V;
      for (; T && T !== O; ) V = P(T), i(T, x, K), T = V;
      i(O, x, K);
    }, W = ({ el: T, anchor: O }) => {
      let x;
      for (; T && T !== O; ) x = P(T), l(T), T = x;
      l(O);
    }, ue = (T, O, x, K, V, q, se, Q, re) => {
      O.type === "svg" ? se = "svg" : O.type === "math" && (se = "mathml"), T == null ? Oe(O, x, K, V, q, se, Q, re) : ie(T, O, V, q, se, Q, re);
    }, Oe = (T, O, x, K, V, q, se, Q) => {
      let re, J;
      const { props: de, shapeFlag: ae, transition: pe, dirs: Ee } = T;
      if (re = T.el = f(T.type, q, de && de.is, de), ae & 8 ? w(re, T.children) : ae & 16 && me(T.children, re, null, K, V, vs(T, q), se, Q), Ee && hr(T, null, K, "created"), Ae(re, T, T.scopeId, se, K), de) {
        for (const Fe in de) Fe !== "value" && !vi(Fe) && c(re, Fe, null, de[Fe], q, K);
        "value" in de && c(re, "value", null, de.value, q), (J = de.onVnodeBeforeMount) && Qt(J, K, T);
      }
      Ee && hr(T, null, K, "beforeMount");
      const Le = xd(V, pe);
      Le && pe.beforeEnter(re), i(re, O, x), ((J = de && de.onVnodeMounted) || Le || Ee) && gt(() => {
        J && Qt(J, K, T), Le && pe.enter(re), Ee && hr(T, null, K, "mounted");
      }, V);
    }, Ae = (T, O, x, K, V) => {
      if (x && R(T, x), K) for (let q = 0; q < K.length; q++) R(T, K[q]);
      if (V) {
        let q = V.subTree;
        if (O === q || Ro(q.type) && (q.ssContent === O || q.ssFallback === O)) {
          const se = V.vnode;
          Ae(T, se, se.scopeId, se.slotScopeIds, V.parent);
        }
      }
    }, me = (T, O, x, K, V, q, se, Q, re = 0) => {
      for (let J = re; J < T.length; J++) {
        const de = T[J] = Q ? Xn(T[J]) : bn(T[J]);
        L(null, de, O, x, K, V, q, se, Q);
      }
    }, ie = (T, O, x, K, V, q, se) => {
      const Q = O.el = T.el;
      let { patchFlag: re, dynamicChildren: J, dirs: de } = O;
      re |= T.patchFlag & 16;
      const ae = T.props || xe, pe = O.props || xe;
      let Ee;
      if (x && dr(x, false), (Ee = pe.onVnodeBeforeUpdate) && Qt(Ee, x, O, T), de && hr(O, T, x, "beforeUpdate"), x && dr(x, true), (ae.innerHTML && pe.innerHTML == null || ae.textContent && pe.textContent == null) && w(Q, ""), J ? we(T.dynamicChildren, J, Q, x, K, vs(O, V), q) : se || We(T, O, Q, null, x, K, vs(O, V), q, false), re > 0) {
        if (re & 16) Pe(Q, ae, pe, x, V);
        else if (re & 2 && ae.class !== pe.class && c(Q, "class", null, pe.class, V), re & 4 && c(Q, "style", ae.style, pe.style, V), re & 8) {
          const Le = O.dynamicProps;
          for (let Fe = 0; Fe < Le.length; Fe++) {
            const De = Le[Fe], Tt = ae[De], _t = pe[De];
            (_t !== Tt || De === "value") && c(Q, De, Tt, _t, V, x);
          }
        }
        re & 1 && T.children !== O.children && w(Q, O.children);
      } else !se && J == null && Pe(Q, ae, pe, x, V);
      ((Ee = pe.onVnodeUpdated) || de) && gt(() => {
        Ee && Qt(Ee, x, O, T), de && hr(O, T, x, "updated");
      }, K);
    }, we = (T, O, x, K, V, q, se) => {
      for (let Q = 0; Q < O.length; Q++) {
        const re = T[Q], J = O[Q], de = re.el && (re.type === Pt || !Zn(re, J) || re.shapeFlag & 198) ? I(re.el) : x;
        L(re, J, de, null, K, V, q, se, true);
      }
    }, Pe = (T, O, x, K, V) => {
      if (O !== x) {
        if (O !== xe) for (const q in O) !vi(q) && !(q in x) && c(T, q, O[q], null, V, K);
        for (const q in x) {
          if (vi(q)) continue;
          const se = x[q], Q = O[q];
          se !== Q && q !== "value" && c(T, q, Q, se, V, K);
        }
        "value" in x && c(T, "value", O.value, x.value, V);
      }
    }, he = (T, O, x, K, V, q, se, Q, re) => {
      const J = O.el = T ? T.el : h(""), de = O.anchor = T ? T.anchor : h("");
      let { patchFlag: ae, dynamicChildren: pe, slotScopeIds: Ee } = O;
      Ee && (Q = Q ? Q.concat(Ee) : Ee), T == null ? (i(J, x, K), i(de, x, K), me(O.children || [], x, de, V, q, se, Q, re)) : ae > 0 && ae & 64 && pe && T.dynamicChildren ? (we(T.dynamicChildren, pe, x, V, q, se, Q), (O.key != null || V && O === V.subTree) && Da(T, O, true)) : We(T, O, x, de, V, q, se, Q, re);
    }, je = (T, O, x, K, V, q, se, Q, re) => {
      O.slotScopeIds = Q, T == null ? O.shapeFlag & 512 ? V.ctx.activate(O, x, K, se, re) : lt(O, x, K, V, q, se, re) : Wt(T, O, re);
    }, lt = (T, O, x, K, V, q, se) => {
      const Q = T.component = ep(T, K, V);
      if (Zo(T) && (Q.ctx.renderer = ur), tp(Q, false, se), Q.asyncDep) {
        if (V && V.registerDep(Q, ze, se), !T.el) {
          const re = Q.subTree = Mt(Et);
          j(null, re, O, x), T.placeholder = re.el;
        }
      } else ze(Q, T, O, x, V, q, se);
    }, Wt = (T, O, x) => {
      const K = O.component = T.component;
      if (zd(T, O, x)) if (K.asyncDep && !K.asyncResolved) {
        Me(K, O, x);
        return;
      } else K.next = O, K.update();
      else O.el = T.el, K.vnode = O;
    }, ze = (T, O, x, K, V, q, se) => {
      const Q = () => {
        if (T.isMounted) {
          let { next: ae, bu: pe, u: Ee, parent: Le, vnode: Fe } = T;
          {
            const Kt = qu(T);
            if (Kt) {
              ae && (ae.el = Fe.el, Me(T, ae, se)), Kt.asyncDep.then(() => {
                T.isUnmounted || Q();
              });
              return;
            }
          }
          let De = ae, Tt;
          dr(T, false), ae ? (ae.el = Fe.el, Me(T, ae, se)) : ae = Fe, pe && Ei(pe), (Tt = ae.props && ae.props.onVnodeBeforeUpdate) && Qt(Tt, Le, ae, Fe), dr(T, true);
          const _t = fl(T), Yt = T.subTree;
          T.subTree = _t, L(Yt, _t, I(Yt.el), On(Yt), T, V, q), ae.el = _t.el, De === null && Hd(T, _t.el), Ee && gt(Ee, V), (Tt = ae.props && ae.props.onVnodeUpdated) && gt(() => Qt(Tt, Le, ae, Fe), V);
        } else {
          let ae;
          const { el: pe, props: Ee } = O, { bm: Le, m: Fe, parent: De, root: Tt, type: _t } = T, Yt = _r(O);
          dr(T, false), Le && Ei(Le), !Yt && (ae = Ee && Ee.onVnodeBeforeMount) && Qt(ae, De, O), dr(T, true);
          {
            Tt.ce && Tt.ce._def.shadowRoot !== false && Tt.ce._injectChildStyle(_t);
            const Kt = T.subTree = fl(T);
            L(null, Kt, x, K, T, V, q), O.el = Kt.el;
          }
          if (Fe && gt(Fe, V), !Yt && (ae = Ee && Ee.onVnodeMounted)) {
            const Kt = O;
            gt(() => Qt(ae, De, Kt), V);
          }
          (O.shapeFlag & 256 || De && _r(De.vnode) && De.vnode.shapeFlag & 256) && T.a && gt(T.a, V), T.isMounted = true, O = x = K = null;
        }
      };
      T.scope.on();
      const re = T.effect = new Jc(Q);
      T.scope.off();
      const J = T.update = re.run.bind(re), de = T.job = re.runIfDirty.bind(re);
      de.i = T, de.id = T.uid, re.scheduler = () => Ma(de), dr(T, true), J();
    }, Me = (T, O, x) => {
      O.component = T;
      const K = T.vnode.props;
      T.vnode = O, T.next = null, Pd(T, O.props, K, x), Ld(T, O.children, x), Dn(), tl(T), jn();
    }, We = (T, O, x, K, V, q, se, Q, re = false) => {
      const J = T && T.children, de = T ? T.shapeFlag : 0, ae = O.children, { patchFlag: pe, shapeFlag: Ee } = O;
      if (pe > 0) {
        if (pe & 128) {
          Nr(J, ae, x, K, V, q, se, Q, re);
          return;
        } else if (pe & 256) {
          _n(J, ae, x, K, V, q, se, Q, re);
          return;
        }
      }
      Ee & 8 ? (de & 16 && xt(J, V, q), ae !== J && w(x, ae)) : de & 16 ? Ee & 16 ? Nr(J, ae, x, K, V, q, se, Q, re) : xt(J, V, q, true) : (de & 8 && w(x, ""), Ee & 16 && me(ae, x, K, V, q, se, Q, re));
    }, _n = (T, O, x, K, V, q, se, Q, re) => {
      T = T || Ur, O = O || Ur;
      const J = T.length, de = O.length, ae = Math.min(J, de);
      let pe;
      for (pe = 0; pe < ae; pe++) {
        const Ee = O[pe] = re ? Xn(O[pe]) : bn(O[pe]);
        L(T[pe], Ee, x, null, V, q, se, Q, re);
      }
      J > de ? xt(T, V, q, true, false, ae) : me(O, x, K, V, q, se, Q, re, ae);
    }, Nr = (T, O, x, K, V, q, se, Q, re) => {
      let J = 0;
      const de = O.length;
      let ae = T.length - 1, pe = de - 1;
      for (; J <= ae && J <= pe; ) {
        const Ee = T[J], Le = O[J] = re ? Xn(O[J]) : bn(O[J]);
        if (Zn(Ee, Le)) L(Ee, Le, x, null, V, q, se, Q, re);
        else break;
        J++;
      }
      for (; J <= ae && J <= pe; ) {
        const Ee = T[ae], Le = O[pe] = re ? Xn(O[pe]) : bn(O[pe]);
        if (Zn(Ee, Le)) L(Ee, Le, x, null, V, q, se, Q, re);
        else break;
        ae--, pe--;
      }
      if (J > ae) {
        if (J <= pe) {
          const Ee = pe + 1, Le = Ee < de ? O[Ee].el : K;
          for (; J <= pe; ) L(null, O[J] = re ? Xn(O[J]) : bn(O[J]), x, Le, V, q, se, Q, re), J++;
        }
      } else if (J > pe) for (; J <= ae; ) ye(T[J], V, q, true), J++;
      else {
        const Ee = J, Le = J, Fe = /* @__PURE__ */ new Map();
        for (J = Le; J <= pe; J++) {
          const Nt = O[J] = re ? Xn(O[J]) : bn(O[J]);
          Nt.key != null && Fe.set(Nt.key, J);
        }
        let De, Tt = 0;
        const _t = pe - Le + 1;
        let Yt = false, Kt = 0;
        const fr = new Array(_t);
        for (J = 0; J < _t; J++) fr[J] = 0;
        for (J = Ee; J <= ae; J++) {
          const Nt = T[J];
          if (Tt >= _t) {
            ye(Nt, V, q, true);
            continue;
          }
          let Jt;
          if (Nt.key != null) Jt = Fe.get(Nt.key);
          else for (De = Le; De <= pe; De++) if (fr[De - Le] === 0 && Zn(Nt, O[De])) {
            Jt = De;
            break;
          }
          Jt === void 0 ? ye(Nt, V, q, true) : (fr[Jt - Le] = J + 1, Jt >= Kt ? Kt = Jt : Yt = true, L(Nt, O[Jt], x, null, V, q, se, Q, re), Tt++);
        }
        const ti = Yt ? Fd(fr) : Ur;
        for (De = ti.length - 1, J = _t - 1; J >= 0; J--) {
          const Nt = Le + J, Jt = O[Nt], Ki = O[Nt + 1], Ji = Nt + 1 < de ? Ki.el || Ki.placeholder : K;
          fr[J] === 0 ? L(null, Jt, x, Ji, V, q, se, Q, re) : Yt && (De < 0 || J !== ti[De] ? Sn(Jt, x, Ji, 2) : De--);
        }
      }
    }, Sn = (T, O, x, K, V = null) => {
      const { el: q, type: se, transition: Q, children: re, shapeFlag: J } = T;
      if (J & 6) {
        Sn(T.component.subTree, O, x, K);
        return;
      }
      if (J & 128) {
        T.suspense.move(O, x, K);
        return;
      }
      if (J & 64) {
        se.move(T, O, x, ur);
        return;
      }
      if (se === Pt) {
        i(q, O, x);
        for (let ae = 0; ae < re.length; ae++) Sn(re[ae], O, x, K);
        i(T.anchor, O, x);
        return;
      }
      if (se === Pi) {
        ne(T, O, x);
        return;
      }
      if (K !== 2 && J & 1 && Q) if (K === 0) Q.beforeEnter(q), i(q, O, x), gt(() => Q.enter(q), V);
      else {
        const { leave: ae, delayLeave: pe, afterLeave: Ee } = Q, Le = () => {
          T.ctx.isUnmounted ? l(q) : i(q, O, x);
        }, Fe = () => {
          q._isLeaving && q[Mn](true), ae(q, () => {
            Le(), Ee && Ee();
          });
        };
        pe ? pe(q, Le, Fe) : Fe();
      }
      else i(q, O, x);
    }, ye = (T, O, x, K = false, V = false) => {
      const { type: q, props: se, ref: Q, children: re, dynamicChildren: J, shapeFlag: de, patchFlag: ae, dirs: pe, cacheIndex: Ee } = T;
      if (ae === -2 && (V = false), Q != null && (Dn(), Si(Q, null, x, T, true), jn()), Ee != null && (O.renderCache[Ee] = void 0), de & 256) {
        O.ctx.deactivate(T);
        return;
      }
      const Le = de & 1 && pe, Fe = !_r(T);
      let De;
      if (Fe && (De = se && se.onVnodeBeforeUnmount) && Qt(De, O, T), de & 6) oe(T.component, x, K);
      else {
        if (de & 128) {
          T.suspense.unmount(x, K);
          return;
        }
        Le && hr(T, null, O, "beforeUnmount"), de & 64 ? T.type.remove(T, O, x, ur, K) : J && !J.hasOnce && (q !== Pt || ae > 0 && ae & 64) ? xt(J, O, x, false, true) : (q === Pt && ae & 384 || !V && de & 16) && xt(re, O, x), K && ei(T);
      }
      (Fe && (De = se && se.onVnodeUnmounted) || Le) && gt(() => {
        De && Qt(De, O, T), Le && hr(T, null, O, "unmounted");
      }, x);
    }, ei = (T) => {
      const { type: O, el: x, anchor: K, transition: V } = T;
      if (O === Pt) {
        fs(x, K);
        return;
      }
      if (O === Pi) {
        W(T);
        return;
      }
      const q = () => {
        l(x), V && !V.persisted && V.afterLeave && V.afterLeave();
      };
      if (T.shapeFlag & 1 && V && !V.persisted) {
        const { leave: se, delayLeave: Q } = V, re = () => se(x, q);
        Q ? Q(T.el, q, re) : re();
      } else q();
    }, fs = (T, O) => {
      let x;
      for (; T !== O; ) x = P(T), l(T), T = x;
      l(O);
    }, oe = (T, O, x) => {
      const { bum: K, scope: V, job: q, subTree: se, um: Q, m: re, a: J } = T;
      Po(re), Po(J), K && Ei(K), V.stop(), q && (q.flags |= 8, ye(se, T, O, x)), Q && gt(Q, O), gt(() => {
        T.isUnmounted = true;
      }, O);
    }, xt = (T, O, x, K = false, V = false, q = 0) => {
      for (let se = q; se < T.length; se++) ye(T[se], O, x, K, V);
    }, On = (T) => {
      if (T.shapeFlag & 6) return On(T.component.subTree);
      if (T.shapeFlag & 128) return T.suspense.next();
      const O = P(T.anchor || T.el), x = O && O[Iu];
      return x ? P(x) : O;
    };
    let $t = false;
    const Yi = (T, O, x) => {
      T == null ? O._vnode && ye(O._vnode, null, null, true) : L(O._vnode || null, T, O, null, null, null, x), O._vnode = T, $t || ($t = true, tl(), bu(), $t = false);
    }, ur = {
      p: L,
      um: ye,
      m: Sn,
      r: ei,
      mt: lt,
      mc: me,
      pc: We,
      pbc: we,
      n: On,
      o: e
    };
    return {
      render: Yi,
      hydrate: void 0,
      createApp: _d(Yi)
    };
  }
  function vs({ type: e, props: t }, n) {
    return n === "svg" && e === "foreignObject" || n === "mathml" && e === "annotation-xml" && t && t.encoding && t.encoding.includes("html") ? void 0 : n;
  }
  function dr({ effect: e, job: t }, n) {
    n ? (e.flags |= 32, t.flags |= 4) : (e.flags &= -33, t.flags &= -5);
  }
  function xd(e, t) {
    return (!e || e && !e.pendingBranch) && t && !t.persisted;
  }
  function Da(e, t, n = false) {
    const i = e.children, l = t.children;
    if (ve(i) && ve(l)) for (let c = 0; c < i.length; c++) {
      const f = i[c];
      let h = l[c];
      h.shapeFlag & 1 && !h.dynamicChildren && ((h.patchFlag <= 0 || h.patchFlag === 32) && (h = l[c] = Xn(l[c]), h.el = f.el), !n && h.patchFlag !== -2 && Da(f, h)), h.type === ns && h.patchFlag !== -1 && (h.el = f.el), h.type === Et && !h.el && (h.el = f.el);
    }
  }
  function Fd(e) {
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
  function qu(e) {
    const t = e.subTree.component;
    if (t) return t.asyncDep && !t.asyncResolved ? t : qu(t);
  }
  function Po(e) {
    if (e) for (let t = 0; t < e.length; t++) e[t].flags |= 8;
  }
  const Dd = Symbol.for("v-scx"), jd = () => Ai(Dd);
  Uv = function(e, t) {
    return es(e, null, t);
  };
  function Ud(e, t) {
    return es(e, null, {
      flush: "sync"
    });
  }
  $r = function(e, t, n) {
    return es(e, t, n);
  };
  function es(e, t, n = xe) {
    const { immediate: i, deep: l, flush: c, once: f } = n, h = ft({}, n), p = t && i || !t && c !== "post";
    let v;
    if (ji) {
      if (c === "sync") {
        const R = jd();
        v = R.__watcherHandles || (R.__watcherHandles = []);
      } else if (!p) {
        const R = () => {
        };
        return R.stop = cn, R.resume = cn, R.pause = cn, R;
      }
    }
    const w = Rt;
    h.call = (R, C, L) => fn(R, w, C, L);
    let I = false;
    c === "post" ? h.scheduler = (R) => {
      gt(R, w && w.suspense);
    } : c !== "sync" && (I = true, h.scheduler = (R, C) => {
      C ? R() : Ma(R);
    }), h.augmentJob = (R) => {
      t && (R.flags |= 4), I && (R.flags |= 2, w && (R.id = w.uid, R.i = w));
    };
    const P = Xh(e, t, h);
    return ji && (v ? v.push(P) : p && P()), P;
  }
  function Gd(e, t, n) {
    const i = this.proxy, l = rt(e) ? e.includes(".") ? Yu(i, e) : () => i[e] : e.bind(i, i);
    let c;
    Te(t) ? c = t : (c = t.handler, n = t);
    const f = qi(this), h = es(l, c.bind(i), n);
    return f(), h;
  }
  function Yu(e, t) {
    const n = t.split(".");
    return () => {
      let i = e;
      for (let l = 0; l < n.length && i; l++) i = i[n[l]];
      return i;
    };
  }
  Gv = function(e, t, n = xe) {
    const i = ar(), l = qt(t), c = $n(t), f = Ku(e, l), h = zh((p, v) => {
      let w, I = xe, P;
      return Ud(() => {
        const R = e[l];
        Gt(w, R) && (w = R, v());
      }), {
        get() {
          return p(), n.get ? n.get(w) : w;
        },
        set(R) {
          const C = n.set ? n.set(R) : R;
          if (!Gt(C, w) && !(I !== xe && Gt(R, I))) return;
          const L = i.vnode.props;
          L && (t in L || l in L || c in L) && (`onUpdate:${t}` in L || `onUpdate:${l}` in L || `onUpdate:${c}` in L) || (w = R, v()), i.emit(`update:${t}`, C), Gt(R, C) && Gt(R, I) && !Gt(C, P) && v(), I = R, P = C;
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
  const Ku = (e, t) => t === "modelValue" || t === "model-value" ? e.modelModifiers : e[`${t}Modifiers`] || e[`${qt(t)}Modifiers`] || e[`${$n(t)}Modifiers`];
  function Wd(e, t, ...n) {
    if (e.isUnmounted) return;
    const i = e.vnode.props || xe;
    let l = n;
    const c = t.startsWith("update:"), f = c && Ku(i, t.slice(7));
    f && (f.trim && (l = n.map((w) => rt(w) ? w.trim() : w)), f.number && (l = n.map(uh)));
    let h, p = i[h = hs(t)] || i[h = hs(qt(t))];
    !p && c && (p = i[h = hs($n(t))]), p && fn(p, e, 6, l);
    const v = i[h + "Once"];
    if (v) {
      if (!e.emitted) e.emitted = {};
      else if (e.emitted[h]) return;
      e.emitted[h] = true, fn(v, e, 6, l);
    }
  }
  function Ju(e, t, n = false) {
    const i = t.emitsCache, l = i.get(e);
    if (l !== void 0) return l;
    const c = e.emits;
    let f = {}, h = false;
    if (!Te(e)) {
      const p = (v) => {
        const w = Ju(v, t, true);
        w && (h = true, ft(f, w));
      };
      !n && t.mixins.length && t.mixins.forEach(p), e.extends && p(e.extends), e.mixins && e.mixins.forEach(p);
    }
    return !c && !h ? (Ye(e) && i.set(e, null), null) : (ve(c) ? c.forEach((p) => f[p] = null) : ft(f, c), Ye(e) && i.set(e, f), f);
  }
  function ts(e, t) {
    return !e || !Bo(t) ? false : (t = t.slice(2).replace(/Once$/, ""), Ue(e, t[0].toLowerCase() + t.slice(1)) || Ue(e, $n(t)) || Ue(e, t));
  }
  function fl(e) {
    const { type: t, vnode: n, proxy: i, withProxy: l, propsOptions: [c], slots: f, attrs: h, emit: p, render: v, renderCache: w, props: I, data: P, setupState: R, ctx: C, inheritAttrs: L } = e, Z = So(e);
    let j, U;
    try {
      if (n.shapeFlag & 4) {
        const W = l || i, ue = W;
        j = bn(v.call(ue, W, w, I, R, P, C)), U = h;
      } else {
        const W = t;
        j = bn(W.length > 1 ? W(I, {
          attrs: h,
          slots: f,
          emit: p
        }) : W(I, null)), U = t.props ? h : $d(h);
      }
    } catch (W) {
      Ri.length = 0, Xo(W, e, 1), j = Mt(Et);
    }
    let ne = j;
    if (U && L !== false) {
      const W = Object.keys(U), { shapeFlag: ue } = ne;
      W.length && ue & 7 && (c && W.some(ba) && (U = Bd(U, c)), ne = Un(ne, U, false, true));
    }
    return n.dirs && (ne = Un(ne, null, false, true), ne.dirs = ne.dirs ? ne.dirs.concat(n.dirs) : n.dirs), n.transition && or(ne, n.transition), j = ne, So(Z), j;
  }
  const $d = (e) => {
    let t;
    for (const n in e) (n === "class" || n === "style" || Bo(n)) && ((t || (t = {}))[n] = e[n]);
    return t;
  }, Bd = (e, t) => {
    const n = {};
    for (const i in e) (!ba(i) || !(i.slice(9) in t)) && (n[i] = e[i]);
    return n;
  };
  function zd(e, t, n) {
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
  function Hd({ vnode: e, parent: t }, n) {
    for (; t; ) {
      const i = t.subTree;
      if (i.suspense && i.suspense.activeBranch === e && (i.el = e.el), i === e) (e = t.vnode).el = n, t = t.parent;
      else break;
    }
  }
  const Ro = (e) => e.__isSuspense;
  function Vd(e, t) {
    t && t.pendingBranch ? ve(e) ? t.effects.push(...e) : t.effects.push(e) : yu(e);
  }
  let Pi, Ri;
  Pt = Symbol.for("v-fgt");
  ns = Symbol.for("v-txt");
  Et = Symbol.for("v-cmt");
  Pi = Symbol.for("v-stc");
  Ri = [];
  let Vt = null;
  sn = function(e = false) {
    Ri.push(Vt = e ? null : []);
  };
  function qd() {
    Ri.pop(), Vt = Ri[Ri.length - 1] || null;
  }
  let Di = 1;
  function dl(e, t = false) {
    Di += e, e < 0 && Vt && t && (Vt.hasOnce = true);
  }
  function Xu(e) {
    return e.dynamicChildren = Di > 0 ? Vt || Ur : null, qd(), Di > 0 && Vt && Vt.push(e), e;
  }
  Hn = function(e, t, n, i, l, c) {
    return Xu(tt(e, t, n, i, l, c, true));
  };
  Zs = function(e, t, n, i, l) {
    return Xu(Mt(e, t, n, i, l, true));
  };
  Hr = function(e) {
    return e ? e.__v_isVNode === true : false;
  };
  function Zn(e, t) {
    return e.type === t.type && e.key === t.key;
  }
  const Zu = ({ key: e }) => e ?? null, ho = ({ ref: e, ref_key: t, ref_for: n }) => (typeof e == "number" && (e = "" + e), e != null ? rt(e) || at(e) || Te(e) ? {
    i: It,
    r: e,
    k: t,
    f: !!n
  } : e : null);
  tt = function(e, t = null, n = null, i = 0, l = null, c = e === Pt ? 0 : 1, f = false, h = false) {
    const p = {
      __v_isVNode: true,
      __v_skip: true,
      type: e,
      props: t,
      key: t && Zu(t),
      ref: t && ho(t),
      scopeId: Eu,
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
      ctx: It
    };
    return h ? (ja(p, n), c & 128 && e.normalize(p)) : n && (p.shapeFlag |= rt(n) ? 8 : 16), Di > 0 && !f && Vt && (p.patchFlag > 0 || c & 6) && p.patchFlag !== 32 && Vt.push(p), p;
  };
  Mt = Yd;
  function Yd(e, t = null, n = null, i = 0, l = null, c = false) {
    if ((!e || e === ku) && (e = Et), Hr(e)) {
      const h = Un(e, t, true);
      return n && ja(h, n), Di > 0 && !c && Vt && (h.shapeFlag & 6 ? Vt[Vt.indexOf(e)] = h : Vt.push(h)), h.patchFlag = -2, h;
    }
    if (op(e) && (e = e.__vccOpts), t) {
      t = Kd(t);
      let { class: h, style: p } = t;
      h && !rt(h) && (t.class = Ia(h)), Ye(p) && (Pa(p) && !ve(p) && (p = ft({}, p)), t.style = qo(p));
    }
    const f = rt(e) ? 1 : Ro(e) ? 128 : Tu(e) ? 64 : Ye(e) ? 4 : Te(e) ? 2 : 0;
    return tt(e, t, n, i, l, f, c, true);
  }
  function Kd(e) {
    return e ? Pa(e) || Wu(e) ? ft({}, e) : e : null;
  }
  Un = function(e, t, n = false, i = false) {
    const { props: l, ref: c, patchFlag: f, children: h, transition: p } = e, v = t ? Xd(l || {}, t) : l, w = {
      __v_isVNode: true,
      __v_skip: true,
      type: e.type,
      props: v,
      key: v && Zu(v),
      ref: t && t.ref ? n && c ? ve(c) ? c.concat(ho(t)) : [
        c,
        ho(t)
      ] : ho(t) : c,
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
  Jd = function(e = " ", t = 0) {
    return Mt(ns, null, e, t);
  };
  Wv = function(e, t) {
    const n = Mt(Pi, null, e);
    return n.staticCount = t, n;
  };
  Es = function(e = "", t = false) {
    return t ? (sn(), Zs(Et, null, e)) : Mt(Et, null, e);
  };
  function bn(e) {
    return e == null || typeof e == "boolean" ? Mt(Et) : ve(e) ? Mt(Pt, null, e.slice()) : Hr(e) ? Xn(e) : Mt(ns, null, String(e));
  }
  function Xn(e) {
    return e.el === null && e.patchFlag !== -1 || e.memo ? e : Un(e);
  }
  function ja(e, t) {
    let n = 0;
    const { shapeFlag: i } = e;
    if (t == null) t = null;
    else if (ve(t)) n = 16;
    else if (typeof t == "object") if (i & 65) {
      const l = t.default;
      l && (l._c && (l._d = false), ja(e, l()), l._c && (l._d = true));
      return;
    } else {
      n = 32;
      const l = t._;
      !l && !Wu(t) ? t._ctx = It : l === 3 && It && (It.slots._ === 1 ? t._ = 1 : (t._ = 2, e.patchFlag |= 1024));
    }
    else Te(t) ? (t = {
      default: t,
      _ctx: It
    }, n = 32) : (t = String(t), i & 64 ? (n = 16, t = [
      Jd(t)
    ]) : n = 8);
    e.children = t, e.shapeFlag |= n;
  }
  Xd = function(...e) {
    const t = {};
    for (let n = 0; n < e.length; n++) {
      const i = e[n];
      for (const l in i) if (l === "class") t.class !== i.class && (t.class = Ia([
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
  function Qt(e, t, n, i = null) {
    fn(e, t, 7, [
      n,
      i
    ]);
  }
  const Zd = ju();
  let Qd = 0;
  function ep(e, t, n) {
    const i = e.type, l = (t ? t.appContext : e.appContext) || Zd, c = {
      uid: Qd++,
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
      scope: new qc(true),
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
      propsOptions: Bu(i, l),
      emitsOptions: Ju(i, l),
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
    }, c.root = t ? t.root : c, c.emit = Wd.bind(null, c), e.ce && e.ce(c), c;
  }
  let Rt = null;
  ar = () => Rt || It;
  let Mo, Qs;
  {
    const e = Vo(), t = (n, i) => {
      let l;
      return (l = e[n]) || (l = e[n] = []), l.push(i), (c) => {
        l.length > 1 ? l.forEach((f) => f(c)) : l[0](c);
      };
    };
    Mo = t("__VUE_INSTANCE_SETTERS__", (n) => Rt = n), Qs = t("__VUE_SSR_SETTERS__", (n) => ji = n);
  }
  const qi = (e) => {
    const t = Rt;
    return Mo(e), e.scope.on(), () => {
      e.scope.off(), Mo(t);
    };
  }, pl = () => {
    Rt && Rt.scope.off(), Mo(null);
  };
  function Qu(e) {
    return e.vnode.shapeFlag & 4;
  }
  let ji = false;
  function tp(e, t = false, n = false) {
    t && Qs(t);
    const { props: i, children: l } = e.vnode, c = Qu(e);
    Ad(e, i, c, t), Nd(e, l, n || t);
    const f = c ? np(e, t) : void 0;
    return t && Qs(false), f;
  }
  function np(e, t) {
    const n = e.type;
    e.accessCache = /* @__PURE__ */ Object.create(null), e.proxy = new Proxy(e.ctx, wd);
    const { setup: i } = n;
    if (i) {
      Dn();
      const l = e.setupContext = i.length > 1 ? ip(e) : null, c = qi(e), f = Hi(i, e, 0, [
        e.props,
        l
      ]), h = Gc(f);
      if (jn(), c(), (h || e.sp) && !_r(e) && Nu(e), h) {
        if (f.then(pl, pl), t) return f.then((p) => {
          gl(e, p);
        }).catch((p) => {
          Xo(p, e, 0);
        });
        e.asyncDep = f;
      } else gl(e, f);
    } else ef(e);
  }
  function gl(e, t, n) {
    Te(t) ? e.type.__ssrInlineRender ? e.ssrRender = t : e.render = t : Ye(t) && (e.setupState = du(t)), ef(e);
  }
  function ef(e, t, n) {
    const i = e.type;
    e.render || (e.render = i.render || cn);
    {
      const l = qi(e);
      Dn();
      try {
        yd(e);
      } finally {
        jn(), l();
      }
    }
  }
  const rp = {
    get(e, t) {
      return At(e, "get", ""), e[t];
    }
  };
  function ip(e) {
    const t = (n) => {
      e.exposed = n || {};
    };
    return {
      attrs: new Proxy(e.attrs, rp),
      slots: e.slots,
      emit: e.emit,
      expose: t
    };
  }
  function rs(e) {
    return e.exposed ? e.exposeProxy || (e.exposeProxy = new Proxy(du(Ra(e.exposed)), {
      get(t, n) {
        if (n in t) return t[n];
        if (n in Oi) return Oi[n](e);
      },
      has(t, n) {
        return n in t || n in Oi;
      }
    })) : e.proxy;
  }
  function ea(e, t = true) {
    return Te(e) ? e.displayName || e.name : e.name || t && e.__name;
  }
  function op(e) {
    return Te(e) && "__vccOpts" in e;
  }
  Ua = (e, t) => Kh(e, t, ji);
  sp = function(e, t, n) {
    const i = arguments.length;
    return i === 2 ? Ye(t) && !ve(t) ? Hr(t) ? Mt(e, null, [
      t
    ]) : Mt(e, t) : Mt(e, null, t) : (i > 3 ? n = Array.prototype.slice.call(arguments, 2) : i === 3 && Hr(n) && (n = [
      n
    ]), Mt(e, t, n));
  };
  const ap = "3.5.20";
  let ta;
  const ml = typeof window < "u" && window.trustedTypes;
  if (ml) try {
    ta = ml.createPolicy("vue", {
      createHTML: (e) => e
    });
  } catch {
  }
  let tf, lp, cp, Rn, wl, up, Vn, ri, Vr, nf, rf, fp, pr, yl;
  tf = ta ? (e) => ta.createHTML(e) : (e) => e;
  lp = "http://www.w3.org/2000/svg";
  cp = "http://www.w3.org/1998/Math/MathML";
  Rn = typeof document < "u" ? document : null;
  wl = Rn && Rn.createElement("template");
  up = {
    insert: (e, t, n) => {
      t.insertBefore(e, n || null);
    },
    remove: (e) => {
      const t = e.parentNode;
      t && t.removeChild(e);
    },
    createElement: (e, t, n, i) => {
      const l = t === "svg" ? Rn.createElementNS(lp, e) : t === "mathml" ? Rn.createElementNS(cp, e) : n ? Rn.createElement(e, {
        is: n
      }) : Rn.createElement(e);
      return e === "select" && i && i.multiple != null && l.setAttribute("multiple", i.multiple), l;
    },
    createText: (e) => Rn.createTextNode(e),
    createComment: (e) => Rn.createComment(e),
    setText: (e, t) => {
      e.nodeValue = t;
    },
    setElementText: (e, t) => {
      e.textContent = t;
    },
    parentNode: (e) => e.parentNode,
    nextSibling: (e) => e.nextSibling,
    querySelector: (e) => Rn.querySelector(e),
    setScopeId(e, t) {
      e.setAttribute(t, "");
    },
    insertStaticContent(e, t, n, i, l, c) {
      const f = n ? n.previousSibling : t.lastChild;
      if (l && (l === c || l.nextSibling)) for (; t.insertBefore(l.cloneNode(true), n), !(l === c || !(l = l.nextSibling)); ) ;
      else {
        wl.innerHTML = tf(i === "svg" ? `<svg>${e}</svg>` : i === "mathml" ? `<math>${e}</math>` : e);
        const h = wl.content;
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
  ri = "animation";
  Vr = Symbol("_vtc");
  nf = {
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
  rf = ft({}, Au, nf);
  fp = (e) => (e.displayName = "Transition", e.props = rf, e);
  $v = fp((e, { slots: t }) => sp(rd, of(e), t));
  pr = (e, t = []) => {
    ve(e) ? e.forEach((n) => n(...t)) : e && e(...t);
  };
  yl = (e) => e ? ve(e) ? e.some((t) => t.length > 1) : e.length > 1 : false;
  function of(e) {
    const t = {};
    for (const he in e) he in nf || (t[he] = e[he]);
    if (e.css === false) return t;
    const { name: n = "v", type: i, duration: l, enterFromClass: c = `${n}-enter-from`, enterActiveClass: f = `${n}-enter-active`, enterToClass: h = `${n}-enter-to`, appearFromClass: p = c, appearActiveClass: v = f, appearToClass: w = h, leaveFromClass: I = `${n}-leave-from`, leaveActiveClass: P = `${n}-leave-active`, leaveToClass: R = `${n}-leave-to` } = e, C = hp(l), L = C && C[0], Z = C && C[1], { onBeforeEnter: j, onEnter: U, onEnterCancelled: ne, onLeave: W, onLeaveCancelled: ue, onBeforeAppear: Oe = j, onAppear: Ae = U, onAppearCancelled: me = ne } = t, ie = (he, je, lt, Wt) => {
      he._enterCancelled = Wt, Yn(he, je ? w : h), Yn(he, je ? v : f), lt && lt();
    }, we = (he, je) => {
      he._isLeaving = false, Yn(he, I), Yn(he, R), Yn(he, P), je && je();
    }, Pe = (he) => (je, lt) => {
      const Wt = he ? Ae : U, ze = () => ie(je, he, lt);
      pr(Wt, [
        je,
        ze
      ]), bl(() => {
        Yn(je, he ? p : c), pn(je, he ? w : h), yl(Wt) || vl(je, i, L, ze);
      });
    };
    return ft(t, {
      onBeforeEnter(he) {
        pr(j, [
          he
        ]), pn(he, c), pn(he, f);
      },
      onBeforeAppear(he) {
        pr(Oe, [
          he
        ]), pn(he, p), pn(he, v);
      },
      onEnter: Pe(false),
      onAppear: Pe(true),
      onLeave(he, je) {
        he._isLeaving = true;
        const lt = () => we(he, je);
        pn(he, I), he._enterCancelled ? (pn(he, P), na()) : (na(), pn(he, P)), bl(() => {
          he._isLeaving && (Yn(he, I), pn(he, R), yl(W) || vl(he, i, Z, lt));
        }), pr(W, [
          he,
          lt
        ]);
      },
      onEnterCancelled(he) {
        ie(he, false, void 0, true), pr(ne, [
          he
        ]);
      },
      onAppearCancelled(he) {
        ie(he, true, void 0, true), pr(me, [
          he
        ]);
      },
      onLeaveCancelled(he) {
        we(he), pr(ue, [
          he
        ]);
      }
    });
  }
  function hp(e) {
    if (e == null) return null;
    if (Ye(e)) return [
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
    return fh(e);
  }
  function pn(e, t) {
    t.split(/\s+/).forEach((n) => n && e.classList.add(n)), (e[Vr] || (e[Vr] = /* @__PURE__ */ new Set())).add(t);
  }
  function Yn(e, t) {
    t.split(/\s+/).forEach((i) => i && e.classList.remove(i));
    const n = e[Vr];
    n && (n.delete(t), n.size || (e[Vr] = void 0));
  }
  function bl(e) {
    requestAnimationFrame(() => {
      requestAnimationFrame(e);
    });
  }
  let dp = 0;
  function vl(e, t, n, i) {
    const l = e._endId = ++dp, c = () => {
      l === e._endId && i();
    };
    if (n != null) return setTimeout(c, n);
    const { type: f, timeout: h, propCount: p } = sf(e, t);
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
  function sf(e, t) {
    const n = window.getComputedStyle(e), i = (C) => (n[C] || "").split(", "), l = i(`${Vn}Delay`), c = i(`${Vn}Duration`), f = El(l, c), h = i(`${ri}Delay`), p = i(`${ri}Duration`), v = El(h, p);
    let w = null, I = 0, P = 0;
    t === Vn ? f > 0 && (w = Vn, I = f, P = c.length) : t === ri ? v > 0 && (w = ri, I = v, P = p.length) : (I = Math.max(f, v), w = I > 0 ? f > v ? Vn : ri : null, P = w ? w === Vn ? c.length : p.length : 0);
    const R = w === Vn && /\b(transform|all)(,|$)/.test(i(`${Vn}Property`).toString());
    return {
      type: w,
      timeout: I,
      propCount: P,
      hasTransform: R
    };
  }
  function El(e, t) {
    for (; e.length < t.length; ) e = e.concat(e);
    return Math.max(...t.map((n, i) => Il(n) + Il(e[i])));
  }
  function Il(e) {
    return e === "auto" ? 0 : Number(e.slice(0, -1).replace(",", ".")) * 1e3;
  }
  function na() {
    return document.body.offsetHeight;
  }
  function pp(e, t, n) {
    const i = e[Vr];
    i && (t = (t ? [
      t,
      ...i
    ] : [
      ...i
    ]).join(" ")), t == null ? e.removeAttribute("class") : n ? e.setAttribute("class", t) : e.className = t;
  }
  let No, af;
  No = Symbol("_vod");
  af = Symbol("_vsh");
  Bv = {
    name: "show",
    beforeMount(e, { value: t }, { transition: n }) {
      e[No] = e.style.display === "none" ? "" : e.style.display, n && t ? n.beforeEnter(e) : ii(e, t);
    },
    mounted(e, { value: t }, { transition: n }) {
      n && t && n.enter(e);
    },
    updated(e, { value: t, oldValue: n }, { transition: i }) {
      !t != !n && (i ? t ? (i.beforeEnter(e), ii(e, true), i.enter(e)) : i.leave(e, () => {
        ii(e, false);
      }) : ii(e, t));
    },
    beforeUnmount(e, { value: t }) {
      ii(e, t);
    }
  };
  function ii(e, t) {
    e.style.display = t ? e[No] : "none", e[af] = !t;
  }
  const lf = Symbol("");
  zv = function(e) {
    const t = ar();
    if (!t) return;
    const n = t.ut = (l = e(t.proxy)) => {
      Array.from(document.querySelectorAll(`[data-v-owner="${t.uid}"]`)).forEach((c) => Lo(c, l));
    }, i = () => {
      const l = e(t.proxy);
      t.ce ? Lo(t.ce, l) : ra(t.subTree, l), n(l);
    };
    Cu(() => {
      yu(i);
    }), Vi(() => {
      $r(i, cn, {
        flush: "post"
      });
      const l = new MutationObserver(i);
      l.observe(t.subTree.el.parentNode, {
        childList: true
      }), ka(() => l.disconnect());
    });
  };
  function ra(e, t) {
    if (e.shapeFlag & 128) {
      const n = e.suspense;
      e = n.activeBranch, n.pendingBranch && !n.isHydrating && n.effects.push(() => {
        ra(n.activeBranch, t);
      });
    }
    for (; e.component; ) e = e.component.subTree;
    if (e.shapeFlag & 1 && e.el) Lo(e.el, t);
    else if (e.type === Pt) e.children.forEach((n) => ra(n, t));
    else if (e.type === Pi) {
      let { el: n, anchor: i } = e;
      for (; n && (Lo(n, t), n !== i); ) n = n.nextSibling;
    }
  }
  function Lo(e, t) {
    if (e.nodeType === 1) {
      const n = e.style;
      let i = "";
      for (const l in t) {
        const c = yh(t[l]);
        n.setProperty(`--${l}`, c), i += `--${l}: ${c};`;
      }
      n[lf] = i;
    }
  }
  const gp = /(^|;)\s*display\s*:/;
  function mp(e, t, n) {
    const i = e.style, l = rt(n);
    let c = false;
    if (n && !l) {
      if (t) if (rt(t)) for (const f of t.split(";")) {
        const h = f.slice(0, f.indexOf(":")).trim();
        n[h] == null && po(i, h, "");
      }
      else for (const f in t) n[f] == null && po(i, f, "");
      for (const f in n) f === "display" && (c = true), po(i, f, n[f]);
    } else if (l) {
      if (t !== n) {
        const f = i[lf];
        f && (n += ";" + f), i.cssText = n, c = gp.test(n);
      }
    } else t && e.removeAttribute("style");
    No in e && (e[No] = c ? i.display : "", e[af] && (i.display = "none"));
  }
  const Tl = /\s*!important$/;
  function po(e, t, n) {
    if (ve(n)) n.forEach((i) => po(e, t, i));
    else if (n == null && (n = ""), t.startsWith("--")) e.setProperty(t, n);
    else {
      const i = wp(e, t);
      Tl.test(n) ? e.setProperty($n(i), n.replace(Tl, ""), "important") : e[i] = n;
    }
  }
  const _l = [
    "Webkit",
    "Moz",
    "ms"
  ], Ts = {};
  function wp(e, t) {
    const n = Ts[t];
    if (n) return n;
    let i = qt(t);
    if (i !== "filter" && i in e) return Ts[t] = i;
    i = Ho(i);
    for (let l = 0; l < _l.length; l++) {
      const c = _l[l] + i;
      if (c in e) return Ts[t] = c;
    }
    return t;
  }
  const Sl = "http://www.w3.org/1999/xlink";
  function Ol(e, t, n, i, l, c = wh(t)) {
    i && t.startsWith("xlink:") ? n == null ? e.removeAttributeNS(Sl, t.slice(6, t.length)) : e.setAttributeNS(Sl, t, n) : n == null || c && !zc(n) ? e.removeAttribute(t) : e.setAttribute(t, c ? "" : Wn(n) ? String(n) : n);
  }
  function Al(e, t, n, i, l) {
    if (t === "innerHTML" || t === "textContent") {
      n != null && (e[t] = t === "innerHTML" ? tf(n) : n);
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
      h === "boolean" ? n = zc(n) : n == null && h === "string" ? (n = "", f = true) : h === "number" && (n = 0, f = true);
    }
    try {
      e[t] = n;
    } catch {
    }
    f && e.removeAttribute(l || t);
  }
  function yp(e, t, n, i) {
    e.addEventListener(t, n, i);
  }
  function bp(e, t, n, i) {
    e.removeEventListener(t, n, i);
  }
  const Pl = Symbol("_vei");
  function vp(e, t, n, i, l = null) {
    const c = e[Pl] || (e[Pl] = {}), f = c[t];
    if (i && f) f.value = i;
    else {
      const [h, p] = Ep(t);
      if (i) {
        const v = c[t] = _p(i, l);
        yp(e, h, v, p);
      } else f && (bp(e, h, f, p), c[t] = void 0);
    }
  }
  const Rl = /(?:Once|Passive|Capture)$/;
  function Ep(e) {
    let t;
    if (Rl.test(e)) {
      t = {};
      let i;
      for (; i = e.match(Rl); ) e = e.slice(0, e.length - i[0].length), t[i[0].toLowerCase()] = true;
    }
    return [
      e[2] === ":" ? e.slice(3) : $n(e.slice(2)),
      t
    ];
  }
  let _s = 0;
  const Ip = Promise.resolve(), Tp = () => _s || (Ip.then(() => _s = 0), _s = Date.now());
  function _p(e, t) {
    const n = (i) => {
      if (!i._vts) i._vts = Date.now();
      else if (i._vts <= n.attached) return;
      fn(Sp(i, n.value), t, 5, [
        i
      ]);
    };
    return n.value = e, n.attached = Tp(), n;
  }
  function Sp(e, t) {
    if (ve(t)) {
      const n = e.stopImmediatePropagation;
      return e.stopImmediatePropagation = () => {
        n.call(e), e._stopped = true;
      }, t.map((i) => (l) => !l._stopped && i && i(l));
    } else return t;
  }
  const Ml = (e) => e.charCodeAt(0) === 111 && e.charCodeAt(1) === 110 && e.charCodeAt(2) > 96 && e.charCodeAt(2) < 123, Op = (e, t, n, i, l, c) => {
    const f = l === "svg";
    t === "class" ? pp(e, i, f) : t === "style" ? mp(e, n, i) : Bo(t) ? ba(t) || vp(e, t, n, i, c) : (t[0] === "." ? (t = t.slice(1), true) : t[0] === "^" ? (t = t.slice(1), false) : Ap(e, t, i, f)) ? (Al(e, t, i), !e.tagName.includes("-") && (t === "value" || t === "checked" || t === "selected") && Ol(e, t, i, f, c, t !== "value")) : e._isVueCE && (/[A-Z]/.test(t) || !rt(i)) ? Al(e, qt(t), i, c, t) : (t === "true-value" ? e._trueValue = i : t === "false-value" && (e._falseValue = i), Ol(e, t, i, f));
  };
  function Ap(e, t, n, i) {
    if (i) return !!(t === "innerHTML" || t === "textContent" || t in e && Ml(t) && Te(n));
    if (t === "spellcheck" || t === "draggable" || t === "translate" || t === "autocorrect" || t === "form" || t === "list" && e.tagName === "INPUT" || t === "type" && e.tagName === "TEXTAREA") return false;
    if (t === "width" || t === "height") {
      const l = e.tagName;
      if (l === "IMG" || l === "VIDEO" || l === "CANVAS" || l === "SOURCE") return false;
    }
    return Ml(t) && rt(n) ? false : t in e;
  }
  let cf, uf, Co, Nl, Pp, Rp;
  cf = /* @__PURE__ */ new WeakMap();
  uf = /* @__PURE__ */ new WeakMap();
  Co = Symbol("_moveCb");
  Nl = Symbol("_enterCb");
  Pp = (e) => (delete e.props.mode, e);
  Rp = Pp({
    name: "TransitionGroup",
    props: ft({}, rf, {
      tag: String,
      moveClass: String
    }),
    setup(e, { slots: t }) {
      const n = ar(), i = Ou();
      let l, c;
      return La(() => {
        if (!l.length) return;
        const f = e.moveClass || `${e.name || "v"}-move`;
        if (!Cp(l[0].el, n.vnode.el, f)) {
          l = [];
          return;
        }
        l.forEach(Mp), l.forEach(Np);
        const h = l.filter(Lp);
        na(), h.forEach((p) => {
          const v = p.el, w = v.style;
          pn(v, f), w.transform = w.webkitTransform = w.transitionDuration = "";
          const I = v[Co] = (P) => {
            P && P.target !== v || (!P || /transform$/.test(P.propertyName)) && (v.removeEventListener("transitionend", I), v[Co] = null, Yn(v, f));
          };
          v.addEventListener("transitionend", I);
        }), l = [];
      }), () => {
        const f = ke(e), h = of(f);
        let p = f.tag || Pt;
        if (l = [], c) for (let v = 0; v < c.length; v++) {
          const w = c[v];
          w.el && w.el instanceof Element && (l.push(w), or(w, Fi(w, h, i, n)), cf.set(w, w.el.getBoundingClientRect()));
        }
        c = t.default ? Na(t.default()) : [];
        for (let v = 0; v < c.length; v++) {
          const w = c[v];
          w.key != null && or(w, Fi(w, h, i, n));
        }
        return Mt(p, null, c);
      };
    }
  });
  Hv = Rp;
  function Mp(e) {
    const t = e.el;
    t[Co] && t[Co](), t[Nl] && t[Nl]();
  }
  function Np(e) {
    uf.set(e, e.el.getBoundingClientRect());
  }
  function Lp(e) {
    const t = cf.get(e), n = uf.get(e), i = t.left - n.left, l = t.top - n.top;
    if (i || l) {
      const c = e.el.style;
      return c.transform = c.webkitTransform = `translate(${i}px,${l}px)`, c.transitionDuration = "0s", e;
    }
  }
  function Cp(e, t, n) {
    const i = e.cloneNode(), l = e[Vr];
    l && l.forEach((h) => {
      h.split(/\s+/).forEach((p) => p && i.classList.remove(p));
    }), n.split(/\s+/).forEach((h) => h && i.classList.add(h)), i.style.display = "none";
    const c = t.nodeType === 1 ? t : t.parentNode;
    c.appendChild(i);
    const { hasTransform: f } = sf(i);
    return c.removeChild(i), f;
  }
  let kp, xp, Fp, Dp;
  kp = [
    "ctrl",
    "shift",
    "alt",
    "meta"
  ];
  xp = {
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
    exact: (e, t) => kp.some((n) => e[`${n}Key`] && !t.includes(n))
  };
  Vv = (e, t) => {
    const n = e._withMods || (e._withMods = {}), i = t.join(".");
    return n[i] || (n[i] = ((l, ...c) => {
      for (let f = 0; f < t.length; f++) {
        const h = xp[t[f]];
        if (h && h(l, t)) return;
      }
      return e(l, ...c);
    }));
  };
  Fp = {
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
      if (t.some((f) => f === c || Fp[f] === c)) return e(l);
    }));
  };
  Dp = ft({
    patchProp: Op
  }, up);
  let Ll;
  function jp() {
    return Ll || (Ll = Cd(Dp));
  }
  const ff = ((...e) => {
    const t = jp().createApp(...e), { mount: n } = t;
    return t.mount = (i) => {
      const l = Gp(i);
      if (!l) return;
      const c = t._component;
      !Te(c) && !c.render && !c.template && (c.template = l.innerHTML), l.nodeType === 1 && (l.textContent = "");
      const f = n(l, false, Up(l));
      return l instanceof Element && (l.removeAttribute("v-cloak"), l.setAttribute("data-v-app", "")), f;
    }, t;
  });
  function Up(e) {
    if (e instanceof SVGElement) return "svg";
    if (typeof MathMLElement == "function" && e instanceof MathMLElement) return "mathml";
  }
  function Gp(e) {
    return rt(e) ? document.querySelector(e) : e;
  }
  const Wp = "" + new URL("../favicon.svg", import.meta.url).href;
  let hf, $p, df, Bp, zp, oi;
  hf = typeof global == "object" && global && global.Object === Object && global;
  $p = typeof self == "object" && self && self.Object === Object && self;
  Tn = hf || $p || Function("return this")();
  sr = Tn.Symbol;
  df = Object.prototype;
  Bp = df.hasOwnProperty;
  zp = df.toString;
  oi = sr ? sr.toStringTag : void 0;
  function Hp(e) {
    var t = Bp.call(e, oi), n = e[oi];
    try {
      e[oi] = void 0;
      var i = true;
    } catch {
    }
    var l = zp.call(e);
    return i && (t ? e[oi] = n : delete e[oi]), l;
  }
  var Vp = Object.prototype, qp = Vp.toString;
  function Yp(e) {
    return qp.call(e);
  }
  var Kp = "[object Null]", Jp = "[object Undefined]", Cl = sr ? sr.toStringTag : void 0;
  lr = function(e) {
    return e == null ? e === void 0 ? Jp : Kp : Cl && Cl in Object(e) ? Hp(e) : Yp(e);
  };
  In = function(e) {
    return e != null && typeof e == "object";
  };
  qr = Array.isArray;
  is = function(e) {
    var t = typeof e;
    return e != null && (t == "object" || t == "function");
  };
  var Xp = "[object AsyncFunction]", Zp = "[object Function]", Qp = "[object GeneratorFunction]", eg = "[object Proxy]";
  pf = function(e) {
    if (!is(e)) return false;
    var t = lr(e);
    return t == Zp || t == Qp || t == Xp || t == eg;
  };
  var Ss = Tn["__core-js_shared__"], kl = (function() {
    var e = /[^.]+$/.exec(Ss && Ss.keys && Ss.keys.IE_PROTO || "");
    return e ? "Symbol(src)_1." + e : "";
  })();
  function tg(e) {
    return !!kl && kl in e;
  }
  var ng = Function.prototype, rg = ng.toString;
  function Ar(e) {
    if (e != null) {
      try {
        return rg.call(e);
      } catch {
      }
      try {
        return e + "";
      } catch {
      }
    }
    return "";
  }
  var ig = /[\\^$.*+?()[\]{}|]/g, og = /^\[object .+?Constructor\]$/, sg = Function.prototype, ag = Object.prototype, lg = sg.toString, cg = ag.hasOwnProperty, ug = RegExp("^" + lg.call(cg).replace(ig, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$");
  function fg(e) {
    if (!is(e) || tg(e)) return false;
    var t = pf(e) ? ug : og;
    return t.test(Ar(e));
  }
  function hg(e, t) {
    return e == null ? void 0 : e[t];
  }
  function Pr(e, t) {
    var n = hg(e, t);
    return fg(n) ? n : void 0;
  }
  let ia, xl, dg;
  ia = Pr(Tn, "WeakMap");
  xl = Object.create;
  dg = /* @__PURE__ */ (function() {
    function e() {
    }
    return function(t) {
      if (!is(t)) return {};
      if (xl) return xl(t);
      e.prototype = t;
      var n = new e();
      return e.prototype = void 0, n;
    };
  })();
  Fl = (function() {
    try {
      var e = Pr(Object, "defineProperty");
      return e({}, "", {}), e;
    } catch {
    }
  })();
  function pg(e, t) {
    for (var n = -1, i = e == null ? 0 : e.length; ++n < i && t(e[n], n, e) !== false; ) ;
    return e;
  }
  var gg = 9007199254740991, mg = /^(?:0|[1-9]\d*)$/;
  wg = function(e, t) {
    var n = typeof e;
    return t = t ?? gg, !!t && (n == "number" || n != "symbol" && mg.test(e)) && e > -1 && e % 1 == 0 && e < t;
  };
  yg = function(e, t, n) {
    t == "__proto__" && Fl ? Fl(e, t, {
      configurable: true,
      enumerable: true,
      value: n,
      writable: true
    }) : e[t] = n;
  };
  Ga = function(e, t) {
    return e === t || e !== e && t !== t;
  };
  var bg = Object.prototype, vg = bg.hasOwnProperty;
  Eg = function(e, t, n) {
    var i = e[t];
    (!(vg.call(e, t) && Ga(i, n)) || n === void 0 && !(t in e)) && yg(e, t, n);
  };
  var Ig = 9007199254740991;
  gf = function(e) {
    return typeof e == "number" && e > -1 && e % 1 == 0 && e <= Ig;
  };
  Tg = function(e) {
    return e != null && gf(e.length) && !pf(e);
  };
  var _g = Object.prototype;
  mf = function(e) {
    var t = e && e.constructor, n = typeof t == "function" && t.prototype || _g;
    return e === n;
  };
  function Sg(e, t) {
    for (var n = -1, i = Array(e); ++n < e; ) i[n] = t(n);
    return i;
  }
  var Og = "[object Arguments]";
  function Dl(e) {
    return In(e) && lr(e) == Og;
  }
  let wf, Ag, Pg;
  wf = Object.prototype;
  Ag = wf.hasOwnProperty;
  Pg = wf.propertyIsEnumerable;
  Rg = Dl(/* @__PURE__ */ (function() {
    return arguments;
  })()) ? Dl : function(e) {
    return In(e) && Ag.call(e, "callee") && !Pg.call(e, "callee");
  };
  function Mg() {
    return false;
  }
  let yf, jl, Ng, Ul, Lg, Cg, kg, xg, Fg, Dg, jg, Ug, Gg, Wg, $g, Bg, zg, Hg, Vg, qg, Yg, Kg, Jg, Xg, Zg, Qg, em, tm, nm, Je;
  yf = typeof exports == "object" && exports && !exports.nodeType && exports;
  jl = yf && typeof module == "object" && module && !module.nodeType && module;
  Ng = jl && jl.exports === yf;
  Ul = Ng ? Tn.Buffer : void 0;
  Lg = Ul ? Ul.isBuffer : void 0;
  ko = Lg || Mg;
  Cg = "[object Arguments]";
  kg = "[object Array]";
  xg = "[object Boolean]";
  Fg = "[object Date]";
  Dg = "[object Error]";
  jg = "[object Function]";
  Ug = "[object Map]";
  Gg = "[object Number]";
  Wg = "[object Object]";
  $g = "[object RegExp]";
  Bg = "[object Set]";
  zg = "[object String]";
  Hg = "[object WeakMap]";
  Vg = "[object ArrayBuffer]";
  qg = "[object DataView]";
  Yg = "[object Float32Array]";
  Kg = "[object Float64Array]";
  Jg = "[object Int8Array]";
  Xg = "[object Int16Array]";
  Zg = "[object Int32Array]";
  Qg = "[object Uint8Array]";
  em = "[object Uint8ClampedArray]";
  tm = "[object Uint16Array]";
  nm = "[object Uint32Array]";
  Je = {};
  Je[Yg] = Je[Kg] = Je[Jg] = Je[Xg] = Je[Zg] = Je[Qg] = Je[em] = Je[tm] = Je[nm] = true;
  Je[Cg] = Je[kg] = Je[Vg] = Je[xg] = Je[qg] = Je[Fg] = Je[Dg] = Je[jg] = Je[Ug] = Je[Gg] = Je[Wg] = Je[$g] = Je[Bg] = Je[zg] = Je[Hg] = false;
  function rm(e) {
    return In(e) && gf(e.length) && !!Je[lr(e)];
  }
  function Wa(e) {
    return function(t) {
      return e(t);
    };
  }
  let bf, Mi, im, Os, Yr, Gl, om, sm;
  bf = typeof exports == "object" && exports && !exports.nodeType && exports;
  Mi = bf && typeof module == "object" && module && !module.nodeType && module;
  im = Mi && Mi.exports === bf;
  Os = im && hf.process;
  Yr = (function() {
    try {
      var e = Mi && Mi.require && Mi.require("util").types;
      return e || Os && Os.binding && Os.binding("util");
    } catch {
    }
  })();
  Gl = Yr && Yr.isTypedArray;
  vf = Gl ? Wa(Gl) : rm;
  om = Object.prototype;
  sm = om.hasOwnProperty;
  am = function(e, t) {
    var n = qr(e), i = !n && Rg(e), l = !n && !i && ko(e), c = !n && !i && !l && vf(e), f = n || i || l || c, h = f ? Sg(e.length, String) : [], p = h.length;
    for (var v in e) (t || sm.call(e, v)) && !(f && (v == "length" || l && (v == "offset" || v == "parent") || c && (v == "buffer" || v == "byteLength" || v == "byteOffset") || wg(v, p))) && h.push(v);
    return h;
  };
  function Ef(e, t) {
    return function(n) {
      return e(t(n));
    };
  }
  var lm = Ef(Object.keys, Object), cm = Object.prototype, um = cm.hasOwnProperty;
  function fm(e) {
    if (!mf(e)) return lm(e);
    var t = [];
    for (var n in Object(e)) um.call(e, n) && n != "constructor" && t.push(n);
    return t;
  }
  hm = function(e) {
    return Tg(e) ? am(e) : fm(e);
  };
  var Ui = Pr(Object, "create");
  function dm() {
    this.__data__ = Ui ? Ui(null) : {}, this.size = 0;
  }
  function pm(e) {
    var t = this.has(e) && delete this.__data__[e];
    return this.size -= t ? 1 : 0, t;
  }
  var gm = "__lodash_hash_undefined__", mm = Object.prototype, wm = mm.hasOwnProperty;
  function ym(e) {
    var t = this.__data__;
    if (Ui) {
      var n = t[e];
      return n === gm ? void 0 : n;
    }
    return wm.call(t, e) ? t[e] : void 0;
  }
  var bm = Object.prototype, vm = bm.hasOwnProperty;
  function Em(e) {
    var t = this.__data__;
    return Ui ? t[e] !== void 0 : vm.call(t, e);
  }
  var Im = "__lodash_hash_undefined__";
  function Tm(e, t) {
    var n = this.__data__;
    return this.size += this.has(e) ? 0 : 1, n[e] = Ui && t === void 0 ? Im : t, this;
  }
  function Or(e) {
    var t = -1, n = e == null ? 0 : e.length;
    for (this.clear(); ++t < n; ) {
      var i = e[t];
      this.set(i[0], i[1]);
    }
  }
  Or.prototype.clear = dm;
  Or.prototype.delete = pm;
  Or.prototype.get = ym;
  Or.prototype.has = Em;
  Or.prototype.set = Tm;
  function _m() {
    this.__data__ = [], this.size = 0;
  }
  function os(e, t) {
    for (var n = e.length; n--; ) if (Ga(e[n][0], t)) return n;
    return -1;
  }
  var Sm = Array.prototype, Om = Sm.splice;
  function Am(e) {
    var t = this.__data__, n = os(t, e);
    if (n < 0) return false;
    var i = t.length - 1;
    return n == i ? t.pop() : Om.call(t, n, 1), --this.size, true;
  }
  function Pm(e) {
    var t = this.__data__, n = os(t, e);
    return n < 0 ? void 0 : t[n][1];
  }
  function Rm(e) {
    return os(this.__data__, e) > -1;
  }
  function Mm(e, t) {
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
  zn.prototype.clear = _m;
  zn.prototype.delete = Am;
  zn.prototype.get = Pm;
  zn.prototype.has = Rm;
  zn.prototype.set = Mm;
  var Gi = Pr(Tn, "Map");
  function Nm() {
    this.size = 0, this.__data__ = {
      hash: new Or(),
      map: new (Gi || zn)(),
      string: new Or()
    };
  }
  function Lm(e) {
    var t = typeof e;
    return t == "string" || t == "number" || t == "symbol" || t == "boolean" ? e !== "__proto__" : e === null;
  }
  function ss(e, t) {
    var n = e.__data__;
    return Lm(t) ? n[typeof t == "string" ? "string" : "hash"] : n.map;
  }
  function Cm(e) {
    var t = ss(this, e).delete(e);
    return this.size -= t ? 1 : 0, t;
  }
  function km(e) {
    return ss(this, e).get(e);
  }
  function xm(e) {
    return ss(this, e).has(e);
  }
  function Fm(e, t) {
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
  Rr.prototype.delete = Cm;
  Rr.prototype.get = km;
  Rr.prototype.has = xm;
  Rr.prototype.set = Fm;
  function Dm(e, t) {
    for (var n = -1, i = t.length, l = e.length; ++n < i; ) e[l + n] = t[n];
    return e;
  }
  var If = Ef(Object.getPrototypeOf, Object), jm = "[object Object]", Um = Function.prototype, Gm = Object.prototype, Tf = Um.toString, Wm = Gm.hasOwnProperty, $m = Tf.call(Object);
  Bm = function(e) {
    if (!In(e) || lr(e) != jm) return false;
    var t = If(e);
    if (t === null) return true;
    var n = Wm.call(t, "constructor") && t.constructor;
    return typeof n == "function" && n instanceof n && Tf.call(n) == $m;
  };
  var zm = "[object DOMException]", Hm = "[object Error]";
  function Vm(e) {
    if (!In(e)) return false;
    var t = lr(e);
    return t == Hm || t == zm || typeof e.message == "string" && typeof e.name == "string" && !Bm(e);
  }
  function qm() {
    this.__data__ = new zn(), this.size = 0;
  }
  function Ym(e) {
    var t = this.__data__, n = t.delete(e);
    return this.size = t.size, n;
  }
  function Km(e) {
    return this.__data__.get(e);
  }
  function Jm(e) {
    return this.__data__.has(e);
  }
  var Xm = 200;
  function Zm(e, t) {
    var n = this.__data__;
    if (n instanceof zn) {
      var i = n.__data__;
      if (!Gi || i.length < Xm - 1) return i.push([
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
  Fn.prototype.clear = qm;
  Fn.prototype.delete = Ym;
  Fn.prototype.get = Km;
  Fn.prototype.has = Jm;
  Fn.prototype.set = Zm;
  var _f = typeof exports == "object" && exports && !exports.nodeType && exports, Wl = _f && typeof module == "object" && module && !module.nodeType && module, Qm = Wl && Wl.exports === _f, $l = Qm ? Tn.Buffer : void 0, Bl = $l ? $l.allocUnsafe : void 0;
  ew = function(e, t) {
    if (t) return e.slice();
    var n = e.length, i = Bl ? Bl(n) : new e.constructor(n);
    return e.copy(i), i;
  };
  function tw(e, t) {
    for (var n = -1, i = e == null ? 0 : e.length, l = 0, c = []; ++n < i; ) {
      var f = e[n];
      t(f, n, e) && (c[l++] = f);
    }
    return c;
  }
  function nw() {
    return [];
  }
  var rw = Object.prototype, iw = rw.propertyIsEnumerable, zl = Object.getOwnPropertySymbols, ow = zl ? function(e) {
    return e == null ? [] : (e = Object(e), tw(zl(e), function(t) {
      return iw.call(e, t);
    }));
  } : nw;
  function sw(e, t, n) {
    var i = t(e);
    return qr(e) ? i : Dm(i, n(e));
  }
  function oa(e) {
    return sw(e, hm, ow);
  }
  var sa = Pr(Tn, "DataView"), aa = Pr(Tn, "Promise"), la = Pr(Tn, "Set"), Hl = "[object Map]", aw = "[object Object]", Vl = "[object Promise]", ql = "[object Set]", Yl = "[object WeakMap]", Kl = "[object DataView]", lw = Ar(sa), cw = Ar(Gi), uw = Ar(aa), fw = Ar(la), hw = Ar(ia), an = lr;
  (sa && an(new sa(new ArrayBuffer(1))) != Kl || Gi && an(new Gi()) != Hl || aa && an(aa.resolve()) != Vl || la && an(new la()) != ql || ia && an(new ia()) != Yl) && (an = function(e) {
    var t = lr(e), n = t == aw ? e.constructor : void 0, i = n ? Ar(n) : "";
    if (i) switch (i) {
      case lw:
        return Kl;
      case cw:
        return Hl;
      case uw:
        return Vl;
      case fw:
        return ql;
      case hw:
        return Yl;
    }
    return t;
  });
  var dw = Object.prototype, pw = dw.hasOwnProperty;
  function gw(e) {
    var t = e.length, n = new e.constructor(t);
    return t && typeof e[0] == "string" && pw.call(e, "index") && (n.index = e.index, n.input = e.input), n;
  }
  var xo = Tn.Uint8Array;
  function $a(e) {
    var t = new e.constructor(e.byteLength);
    return new xo(t).set(new xo(e)), t;
  }
  function mw(e, t) {
    var n = $a(e.buffer);
    return new e.constructor(n, e.byteOffset, e.byteLength);
  }
  var ww = /\w*$/;
  function yw(e) {
    var t = new e.constructor(e.source, ww.exec(e));
    return t.lastIndex = e.lastIndex, t;
  }
  var Jl = sr ? sr.prototype : void 0, Xl = Jl ? Jl.valueOf : void 0;
  function bw(e) {
    return Xl ? Object(Xl.call(e)) : {};
  }
  vw = function(e, t) {
    var n = t ? $a(e.buffer) : e.buffer;
    return new e.constructor(n, e.byteOffset, e.length);
  };
  var Ew = "[object Boolean]", Iw = "[object Date]", Tw = "[object Map]", _w = "[object Number]", Sw = "[object RegExp]", Ow = "[object Set]", Aw = "[object String]", Pw = "[object Symbol]", Rw = "[object ArrayBuffer]", Mw = "[object DataView]", Nw = "[object Float32Array]", Lw = "[object Float64Array]", Cw = "[object Int8Array]", kw = "[object Int16Array]", xw = "[object Int32Array]", Fw = "[object Uint8Array]", Dw = "[object Uint8ClampedArray]", jw = "[object Uint16Array]", Uw = "[object Uint32Array]";
  function Gw(e, t, n) {
    var i = e.constructor;
    switch (t) {
      case Rw:
        return $a(e);
      case Ew:
      case Iw:
        return new i(+e);
      case Mw:
        return mw(e);
      case Nw:
      case Lw:
      case Cw:
      case kw:
      case xw:
      case Fw:
      case Dw:
      case jw:
      case Uw:
        return vw(e, n);
      case Tw:
        return new i();
      case _w:
      case Aw:
        return new i(e);
      case Sw:
        return yw(e);
      case Ow:
        return new i();
      case Pw:
        return bw(e);
    }
  }
  Ww = function(e) {
    return typeof e.constructor == "function" && !mf(e) ? dg(If(e)) : {};
  };
  var $w = "[object Map]";
  function Bw(e) {
    return In(e) && an(e) == $w;
  }
  var Zl = Yr && Yr.isMap, zw = Zl ? Wa(Zl) : Bw, Hw = "[object Set]";
  function Vw(e) {
    return In(e) && an(e) == Hw;
  }
  var Ql = Yr && Yr.isSet, qw = Ql ? Wa(Ql) : Vw, Yw = 1, Sf = "[object Arguments]", Kw = "[object Array]", Jw = "[object Boolean]", Xw = "[object Date]", Zw = "[object Error]", Of = "[object Function]", Qw = "[object GeneratorFunction]", ey = "[object Map]", ty = "[object Number]", Af = "[object Object]", ny = "[object RegExp]", ry = "[object Set]", iy = "[object String]", oy = "[object Symbol]", sy = "[object WeakMap]", ay = "[object ArrayBuffer]", ly = "[object DataView]", cy = "[object Float32Array]", uy = "[object Float64Array]", fy = "[object Int8Array]", hy = "[object Int16Array]", dy = "[object Int32Array]", py = "[object Uint8Array]", gy = "[object Uint8ClampedArray]", my = "[object Uint16Array]", wy = "[object Uint32Array]", Ve = {};
  Ve[Sf] = Ve[Kw] = Ve[ay] = Ve[ly] = Ve[Jw] = Ve[Xw] = Ve[cy] = Ve[uy] = Ve[fy] = Ve[hy] = Ve[dy] = Ve[ey] = Ve[ty] = Ve[Af] = Ve[ny] = Ve[ry] = Ve[iy] = Ve[oy] = Ve[py] = Ve[gy] = Ve[my] = Ve[wy] = true;
  Ve[Zw] = Ve[Of] = Ve[sy] = false;
  function go(e, t, n, i, l, c) {
    var f, h = t & Yw;
    if (f !== void 0) return f;
    if (!is(e)) return e;
    var p = qr(e);
    if (p) f = gw(e);
    else {
      var v = an(e), w = v == Of || v == Qw;
      if (ko(e)) return ew(e, h);
      if (v == Af || v == Sf || w && !l) f = w ? {} : Ww(e);
      else {
        if (!Ve[v]) return l ? e : {};
        f = Gw(e, v, h);
      }
    }
    c || (c = new Fn());
    var I = c.get(e);
    if (I) return I;
    c.set(e, f), qw(e) ? e.forEach(function(C) {
      f.add(go(C, t, n, C, e, c));
    }) : zw(e) && e.forEach(function(C, L) {
      f.set(L, go(C, t, n, L, e, c));
    });
    var P = oa, R = p ? void 0 : P(e);
    return pg(R || e, function(C, L) {
      R && (L = C, C = e[L]), Eg(f, L, go(C, t, n, L, e, c));
    }), f;
  }
  var yy = 1, by = 4;
  Ct = function(e) {
    return go(e, yy | by);
  };
  var vy = "__lodash_hash_undefined__";
  function Ey(e) {
    return this.__data__.set(e, vy), this;
  }
  function Iy(e) {
    return this.__data__.has(e);
  }
  function Fo(e) {
    var t = -1, n = e == null ? 0 : e.length;
    for (this.__data__ = new Rr(); ++t < n; ) this.add(e[t]);
  }
  Fo.prototype.add = Fo.prototype.push = Ey;
  Fo.prototype.has = Iy;
  function Ty(e, t) {
    for (var n = -1, i = e == null ? 0 : e.length; ++n < i; ) if (t(e[n], n, e)) return true;
    return false;
  }
  function _y(e, t) {
    return e.has(t);
  }
  var Sy = 1, Oy = 2;
  function Pf(e, t, n, i, l, c) {
    var f = n & Sy, h = e.length, p = t.length;
    if (h != p && !(f && p > h)) return false;
    var v = c.get(e), w = c.get(t);
    if (v && w) return v == t && w == e;
    var I = -1, P = true, R = n & Oy ? new Fo() : void 0;
    for (c.set(e, t), c.set(t, e); ++I < h; ) {
      var C = e[I], L = t[I];
      if (i) var Z = f ? i(L, C, I, t, e, c) : i(C, L, I, e, t, c);
      if (Z !== void 0) {
        if (Z) continue;
        P = false;
        break;
      }
      if (R) {
        if (!Ty(t, function(j, U) {
          if (!_y(R, U) && (C === j || l(C, j, n, i, c))) return R.push(U);
        })) {
          P = false;
          break;
        }
      } else if (!(C === L || l(C, L, n, i, c))) {
        P = false;
        break;
      }
    }
    return c.delete(e), c.delete(t), P;
  }
  function Ay(e) {
    var t = -1, n = Array(e.size);
    return e.forEach(function(i, l) {
      n[++t] = [
        l,
        i
      ];
    }), n;
  }
  function Py(e) {
    var t = -1, n = Array(e.size);
    return e.forEach(function(i) {
      n[++t] = i;
    }), n;
  }
  var Ry = 1, My = 2, Ny = "[object Boolean]", Ly = "[object Date]", Cy = "[object Error]", ky = "[object Map]", xy = "[object Number]", Fy = "[object RegExp]", Dy = "[object Set]", jy = "[object String]", Uy = "[object Symbol]", Gy = "[object ArrayBuffer]", Wy = "[object DataView]", ec = sr ? sr.prototype : void 0, As = ec ? ec.valueOf : void 0;
  function $y(e, t, n, i, l, c, f) {
    switch (n) {
      case Wy:
        if (e.byteLength != t.byteLength || e.byteOffset != t.byteOffset) return false;
        e = e.buffer, t = t.buffer;
      case Gy:
        return !(e.byteLength != t.byteLength || !c(new xo(e), new xo(t)));
      case Ny:
      case Ly:
      case xy:
        return Ga(+e, +t);
      case Cy:
        return e.name == t.name && e.message == t.message;
      case Fy:
      case jy:
        return e == t + "";
      case ky:
        var h = Ay;
      case Dy:
        var p = i & Ry;
        if (h || (h = Py), e.size != t.size && !p) return false;
        var v = f.get(e);
        if (v) return v == t;
        i |= My, f.set(e, t);
        var w = Pf(h(e), h(t), i, l, c, f);
        return f.delete(e), w;
      case Uy:
        if (As) return As.call(e) == As.call(t);
    }
    return false;
  }
  var By = 1, zy = Object.prototype, Hy = zy.hasOwnProperty;
  function Vy(e, t, n, i, l, c) {
    var f = n & By, h = oa(e), p = h.length, v = oa(t), w = v.length;
    if (p != w && !f) return false;
    for (var I = p; I--; ) {
      var P = h[I];
      if (!(f ? P in t : Hy.call(t, P))) return false;
    }
    var R = c.get(e), C = c.get(t);
    if (R && C) return R == t && C == e;
    var L = true;
    c.set(e, t), c.set(t, e);
    for (var Z = f; ++I < p; ) {
      P = h[I];
      var j = e[P], U = t[P];
      if (i) var ne = f ? i(U, j, P, t, e, c) : i(j, U, P, e, t, c);
      if (!(ne === void 0 ? j === U || l(j, U, n, i, c) : ne)) {
        L = false;
        break;
      }
      Z || (Z = P == "constructor");
    }
    if (L && !Z) {
      var W = e.constructor, ue = t.constructor;
      W != ue && "constructor" in e && "constructor" in t && !(typeof W == "function" && W instanceof W && typeof ue == "function" && ue instanceof ue) && (L = false);
    }
    return c.delete(e), c.delete(t), L;
  }
  var qy = 1, tc = "[object Arguments]", nc = "[object Array]", io = "[object Object]", Yy = Object.prototype, rc = Yy.hasOwnProperty;
  function Ky(e, t, n, i, l, c) {
    var f = qr(e), h = qr(t), p = f ? nc : an(e), v = h ? nc : an(t);
    p = p == tc ? io : p, v = v == tc ? io : v;
    var w = p == io, I = v == io, P = p == v;
    if (P && ko(e)) {
      if (!ko(t)) return false;
      f = true, w = false;
    }
    if (P && !w) return c || (c = new Fn()), f || vf(e) ? Pf(e, t, n, i, l, c) : $y(e, t, p, n, i, l, c);
    if (!(n & qy)) {
      var R = w && rc.call(e, "__wrapped__"), C = I && rc.call(t, "__wrapped__");
      if (R || C) {
        var L = R ? e.value() : e, Z = C ? t.value() : t;
        return c || (c = new Fn()), l(L, Z, n, i, c);
      }
    }
    return P ? (c || (c = new Fn()), Vy(e, t, n, i, l, c)) : false;
  }
  Rf = function(e, t, n, i, l) {
    return e === t ? true : e == null || t == null || !In(e) && !In(t) ? e !== e && t !== t : Ky(e, t, n, i, Rf, l);
  };
  var Jy = "[object String]";
  function ca(e) {
    return typeof e == "string" || !qr(e) && In(e) && lr(e) == Jy;
  }
  function Xy(e, t) {
    return Rf(e, t);
  }
  const Ft = (e) => ca(e) ? e : JSON.stringify(e), dn = {
    unloaded: (...e) => `[loadModules] Module "${Ft(e[0])}" has not been loaded yet`,
    loading: (...e) => `[loadModules] Module "${Ft(e[0])}" is loading`,
    loaded: (...e) => `[loadModules] Module "${Ft(e[0])}" has been loaded`,
    error: (...e) => `[loadModules] Module "${Ft(e[0])}" failed to load.
Trackback: 
${Ft(e[1])}`,
    errorDetermined: (...e) => `[loadModules] Module "${Ft(e[0])}" failed to load, asserted by another instance, skip`,
    alreadyLoading: (...e) => `[loadModules] Module "${Ft(e[0])}" is already loading by another instance, skip`,
    alreadyLoaded: (...e) => `[loadModules] Module "${Ft(e[0])}" has been loaded by another instance, skip`,
    missingDependencies: (...e) => `[loadModules] Module "${Ft(e[0])}" is missing the following dependencies: ${Ft(e[1])}`,
    loadDependencies: (...e) => `[loadModules] Module "${Ft(e[0])}" is loading its dependencies (${e.slice(1).join(", ")})`,
    dependenciesReady: (...e) => `[loadModules] Module "${Ft(e[0])}" dependencies are ready`,
    dependenciesFailure: (...e) => `[loadModules] Module "${Ft(e[0])}" dependencies failed to load. 

Trackback: 
${Ft(e[1])}`
  }, Zy = {
    info: console.info,
    warn: console.warn,
    error: console.error,
    debug: console.debug
  };
  async function Mf(e, t, n = 1e4, i = {}, l = 0, c = 0, f = 0) {
    var _a2, _b2, _c2, _d2, _e, _f2;
    const { logger: h = Zy, progressReporter: p, printLog: v = true } = i, w = e.find((L) => L.name === t);
    if (!w) throw new Error(`cannot exactly find module "${t}" from the library`);
    const I = e.findIndex((L) => L.name === w.name);
    if (e[I].status === "loaded") return v && h.info(dn.alreadyLoaded(w.name)), {
      completed: f,
      total: c
    };
    const P = w.dependencies || [], R = e.filter((L) => P.includes(L.name)), C = P.filter((L) => !e.find((Z) => Z.name === L));
    if (C.length > 0) {
      const L = dn.missingDependencies(w.name, C.join(", "));
      throw v && h.error(L), new Error(L);
    }
    if (e[I].status === "error") {
      const L = dn.errorDetermined(w.name);
      throw v && h.info(L), new Error(L);
    }
    if (e[I].status === "loading") return v && h.info(dn.alreadyLoading(w.name)), await Qy(e, w.name, n, h), {
      completed: f,
      total: c
    };
    try {
      let L = c, Z = f;
      if (l === 0) {
        const j = /* @__PURE__ */ new Set(), U = (ne) => {
          if (j.has(ne)) return;
          j.add(ne);
          const W = e.find((ue) => ue.name === ne);
          if (W && W.dependencies) for (const ue of W.dependencies) U(ue);
        };
        U(t), L = j.size, Z = 0;
      }
      if (R.length > 0) {
        h.info(dn.loadDependencies(w.name, R.map((j) => j.name)));
        for (const j of R) {
          const U = await Mf(e, j.name, n, {
            logger: h,
            progressReporter: p,
            printLog: v
          }, l + 1, L, Z);
          Z = U.completed, L = U.total, (_a2 = p == null ? void 0 : p.onOverallProgress) == null ? void 0 : _a2.call(p, Z, L);
        }
        v && h.info(dn.dependenciesReady(w.name));
      }
      e[I].status = "loading", (_b2 = p == null ? void 0 : p.onModuleStart) == null ? void 0 : _b2.call(p, w.displayName);
      try {
        return v && h.info(dn.loading(w.name)), await w.moduleInit(n), e[I].status = "loaded", Z++, (_c2 = p == null ? void 0 : p.onModuleComplete) == null ? void 0 : _c2.call(p, w.displayName), (_d2 = p == null ? void 0 : p.onOverallProgress) == null ? void 0 : _d2.call(p, Z, L), v && h.info(dn.loaded(w.name)), {
          completed: Z,
          total: L
        };
      } catch (j) {
        e[I].status = "error";
        const U = dn.error(w.name, ca(j) ? j : Vm(j) ? j.message : JSON.stringify(j));
        throw h.error(U), (_e = p == null ? void 0 : p.onModuleError) == null ? void 0 : _e.call(p, w.displayName, ca(j) ? new Error(j) : j), new Error(U);
      }
    } catch (L) {
      e[I].status = "error";
      const Z = dn.error(w.name, L);
      throw h.error(Z), (_f2 = p == null ? void 0 : p.onModuleError) == null ? void 0 : _f2.call(p, w.displayName, L), new Error(Z);
    }
  }
  async function Qy(e, t, n = 1e4, i) {
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
  let eb, tb, ic, nb, rb, ib, Nf;
  eb = "modulepreload";
  tb = function(e, t) {
    return new URL(e, t).href;
  };
  ic = {};
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
        if (w = tb(w, i), w in ic) return;
        ic[w] = true;
        const I = w.endsWith(".css"), P = I ? '[rel="stylesheet"]' : "";
        if (!!i) for (let L = h.length - 1; L >= 0; L--) {
          const Z = h[L];
          if (Z.href === w && (!I || Z.rel === "stylesheet")) return;
        }
        else if (document.querySelector(`link[href="${w}"]${P}`)) return;
        const C = document.createElement("link");
        if (C.rel = I ? "stylesheet" : eb, I || (C.as = "script"), C.crossOrigin = "", C.href = w, v && C.setAttribute("nonce", v), document.head.appendChild(C), I) return new Promise((L, Z) => {
          C.addEventListener("load", L), C.addEventListener("error", () => Z(new Error(`Unable to preload CSS for ${w}`)));
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
  nb = JSON.parse(`[{"id":"tauri","name":"Tauri","description":"A framework for building tiny, fast binaries for all major desktop and mobile platforms.","url":"https://github.com/tauri-apps/tauri","homepage":"https://v2.tauri.app/","licenseType":"MIT, Apache-2.0","license":"Code: (c) 2015 - Present - The Tauri Programme within The Commons Conservancy.\\n\\nMIT or MIT/Apache 2.0 where applicable."},{"id":"uuid","name":"uuid","description":"Generate a universally unique identifier (UUID) in JavaScript.","url":"https://github.com/uuidjs/uuid","licenseType":"MIT","license":"The MIT License (MIT)\\n\\n\\t\\tCopyright (c) 2010-2020 Robert Kieffer and other contributors\\n\\n\\t\\tPermission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the \\"Software\\"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:\\n\\n\\t\\tThe above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.\\n\\t\\t\\n\\t\\tTHE SOFTWARE IS PROVIDED \\"AS IS\\", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE."},{"id":"vue","name":"Vue.js","description":"An approachable, performant and versatile framework for building web user interfaces.","url":"https://github.com/vuejs/core","homepage":"https://vuejs.org","licenseType":"MIT","license":"\\n        The MIT License (MIT)\\n\\n\\t\\tCopyright (c) 2018-present, Yuxi (Evan) You and Vue contributors\\n\\n\\t\\tPermission is hereby granted, free of charge, to any person obtaining a copy\\n\\t\\tof this software and associated documentation files (the \\"Software\\"), to deal\\n\\t\\tin the Software without restriction, including without limitation the rights\\n\\t\\tto use, copy, modify, merge, publish, distribute, sublicense, and/or sell\\n\\t\\tcopies of the Software, and to permit persons to whom the Software is\\n\\t\\tfurnished to do so, subject to the following conditions:\\n\\n\\t\\tThe above copyright notice and this permission notice shall be included in\\n\\t\\tall copies or substantial portions of the Software.\\n\\n\\t\\tTHE SOFTWARE IS PROVIDED \\"AS IS\\", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR\\n\\t\\tIMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,\\n\\t\\tFITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE\\n\\t\\tAUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER\\n\\t\\tLIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,\\n\\t\\tOUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN\\n\\t\\tTHE SOFTWARE."},{"id":"vue-router","name":"Vue Router","description":"Expressive, configurable and convenient routing for Vue.js.","url":"https://github.com/vuejs/router","homepage":"https://router.vuejs.org/","licenseType":"MIT","license":"\\n        The MIT License (MIT)\\n\\n        Copyright (c) 2019-present Eduardo San Martin Morote\\n\\n        Permission is hereby granted, free of charge, to any person obtaining a copy\\n        of this software and associated documentation files (the \\"Software\\"), to deal\\n        in the Software without restriction, including without limitation the rights\\n        to use, copy, modify, merge, publish, distribute, sublicense, and/or sell\\n        copies of the Software, and to permit persons to whom the Software is\\n        furnished to do so, subject to the following conditions:\\n\\n        The above copyright notice and this permission notice shall be included in all\\n        copies or substantial portions of the Software.\\n\\n        THE SOFTWARE IS PROVIDED \\"AS IS\\", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR\\n        IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,\\n        FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE\\n        AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER\\n        LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,\\n        OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE\\n        SOFTWARE."},{"id":"naive-ui","name":"Naive UI","description":"A Vue 3 based UI Components Library","url":"https://github.com/tusen-ai/naive-ui","homepage":"https://www.naiveui.com","licenseType":"MIT","license":"\\n        MIT License\\n\\n        Copyright (c) 2021 TuSimple\\n\\n        Permission is hereby granted, free of charge, to any person obtaining a copy\\n        of this software and associated documentation files (the \\"Software\\"), to deal\\n        in the Software without restriction, including without limitation the rights\\n        to use, copy, modify, merge, publish, distribute, sublicense, and/or sell\\n        copies of the Software, and to permit persons to whom the Software is\\n        furnished to do so, subject to the following conditions:\\n\\n        The above copyright notice and this permission notice shall be included in all\\n        copies or substantial portions of the Software.\\n\\n        THE SOFTWARE IS PROVIDED \\"AS IS\\", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR\\n        IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,\\n        FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE\\n        AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER\\n        LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,\\n        OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE\\n        SOFTWARE."},{"id":"uaparser-js","name":"UAParser.js","description":"The most comprehensive, compact, & up-to-date JavaScript library to detect user's Browser.","url":"https://github.com/faisalman/ua-parser-js","homepage":"https://uaparser.js.org/","licenseType":"AGPL-3.0","license":"\\n        GNU AFFERO GENERAL PUBLIC LICENSE\\n\\n        Version 3, 19 November 2007\\n\\nCopyright (C) 2007 Free Software Foundation, Inc. <https://fsf.org/>\\nEveryone is permitted to copy and distribute verbatim copies\\nof this license document, but changing it is not allowed.\\n\\n             Preamble\\n\\nThe GNU Affero General Public License is a free, copyleft license for\\nsoftware and other kinds of works, specifically designed to ensure\\ncooperation with the community in the case of network server software.\\n\\nThe licenses for most software and other practical works are designed\\nto take away your freedom to share and change the works.  By contrast,\\nour General Public Licenses are intended to guarantee your freedom to\\nshare and change all versions of a program--to make sure it remains free\\nsoftware for all its users.\\n\\nWhen we speak of free software, we are referring to freedom, not\\nprice.  Our General Public Licenses are designed to make sure that you\\nhave the freedom to distribute copies of free software (and charge for\\nthem if you wish), that you receive source code or can get it if you\\nwant it, that you can change the software or use pieces of it in new\\nfree programs, and that you know you can do these things.\\n\\nDevelopers that use our General Public Licenses protect your rights\\nwith two steps: (1) assert copyright on the software, and (2) offer\\nyou this License which gives you legal permission to copy, distribute\\nand/or modify the software.\\n\\nA secondary benefit of defending all users' freedom is that\\nimprovements made in alternate versions of the program, if they\\nreceive widespread use, become available for other developers to\\nincorporate.  Many developers of free software are heartened and\\nencouraged by the resulting cooperation.  However, in the case of\\nsoftware used on network servers, this result may fail to come about.\\nThe GNU General Public License permits making a modified version and\\nletting the public access it on a server without ever releasing its\\nsource code to the public.\\n\\nThe GNU Affero General Public License is designed specifically to\\nensure that, in such cases, the modified source code becomes available\\nto the community.  It requires the operator of a network server to\\nprovide the source code of the modified version running there to the\\nusers of that server.  Therefore, public use of a modified version, on\\na publicly accessible server, gives the public access to the source\\ncode of the modified version.\\n\\nAn older license, called the Affero General Public License and\\npublished by Affero, was designed to accomplish similar goals.  This is\\na different license, not a version of the Affero GPL, but Affero has\\nreleased a new version of the Affero GPL which permits relicensing under\\nthis license.\\n\\nThe precise terms and conditions for copying, distribution and\\nmodification follow.\\n\\n        TERMS AND CONDITIONS\\n\\n0. Definitions.\\n\\n\\"This License\\" refers to version 3 of the GNU Affero General Public License.\\n\\n\\"Copyright\\" also means copyright-like laws that apply to other kinds of\\nworks, such as semiconductor masks.\\n\\n\\"The Program\\" refers to any copyrightable work licensed under this\\nLicense.  Each licensee is addressed as \\"you\\".  \\"Licensees\\" and\\n\\"recipients\\" may be individuals or organizations.\\n\\nTo \\"modify\\" a work means to copy from or adapt all or part of the work\\nin a fashion requiring copyright permission, other than the making of an\\nexact copy.  The resulting work is called a \\"modified version\\" of the\\nearlier work or a work \\"based on\\" the earlier work.\\n\\nA \\"covered work\\" means either the unmodified Program or a work based\\non the Program.\\n\\nTo \\"propagate\\" a work means to do anything with it that, without\\npermission, would make you directly or secondarily liable for\\ninfringement under applicable copyright law, except executing it on a\\ncomputer or modifying a private copy.  Propagation includes copying,\\ndistribution (with or without modification), making available to the\\npublic, and in some countries other activities as well.\\n\\nTo \\"convey\\" a work means any kind of propagation that enables other\\nparties to make or receive copies.  Mere interaction with a user through\\na computer network, with no transfer of a copy, is not conveying.\\n\\nAn interactive user interface displays \\"Appropriate Legal Notices\\"\\nto the extent that it includes a convenient and prominently visible\\nfeature that (1) displays an appropriate copyright notice, and (2)\\ntells the user that there is no warranty for the work (except to the\\nextent that warranties are provided), that licensees may convey the\\nwork under this License, and how to view a copy of this License.  If\\nthe interface presents a list of user commands or options, such as a\\nmenu, a prominent item in the list meets this criterion.\\n\\n1. Source Code.\\n\\nThe \\"source code\\" for a work means the preferred form of the work\\nfor making modifications to it.  \\"Object code\\" means any non-source\\nform of a work.\\n\\nA \\"Standard Interface\\" means an interface that either is an official\\nstandard defined by a recognized standards body, or, in the case of\\ninterfaces specified for a particular programming language, one that\\nis widely used among developers working in that language.\\n\\nThe \\"System Libraries\\" of an executable work include anything, other\\nthan the work as a whole, that (a) is included in the normal form of\\npackaging a Major Component, but which is not part of that Major\\nComponent, and (b) serves only to enable use of the work with that\\nMajor Component, or to implement a Standard Interface for which an\\nimplementation is available to the public in source code form.  A\\n\\"Major Component\\", in this context, means a major essential component\\n(kernel, window system, and so on) of the specific operating system\\n(if any) on which the executable work runs, or a compiler used to\\nproduce the work, or an object code interpreter used to run it.\\n\\nThe \\"Corresponding Source\\" for a work in object code form means all\\nthe source code needed to generate, install, and (for an executable\\nwork) run the object code and to modify the work, including scripts to\\ncontrol those activities.  However, it does not include the work's\\nSystem Libraries, or general-purpose tools or generally available free\\nprograms which are used unmodified in performing those activities but\\nwhich are not part of the work.  For example, Corresponding Source\\nincludes interface definition files associated with source files for\\nthe work, and the source code for shared libraries and dynamically\\nlinked subprograms that the work is specifically designed to require,\\nsuch as by intimate data communication or control flow between those\\nsubprograms and other parts of the work.\\n\\nThe Corresponding Source need not include anything that users\\ncan regenerate automatically from other parts of the Corresponding\\nSource.\\n\\nThe Corresponding Source for a work in source code form is that\\nsame work.\\n\\n2. Basic Permissions.\\n\\nAll rights granted under this License are granted for the term of\\ncopyright on the Program, and are irrevocable provided the stated\\nconditions are met.  This License explicitly affirms your unlimited\\npermission to run the unmodified Program.  The output from running a\\ncovered work is covered by this License only if the output, given its\\ncontent, constitutes a covered work.  This License acknowledges your\\nrights of fair use or other equivalent, as provided by copyright law.\\n\\nYou may make, run and propagate covered works that you do not\\nconvey, without conditions so long as your license otherwise remains\\nin force.  You may convey covered works to others for the sole purpose\\nof having them make modifications exclusively for you, or provide you\\nwith facilities for running those works, provided that you comply with\\nthe terms of this License in conveying all material for which you do\\nnot control copyright.  Those thus making or running the covered works\\nfor you must do so exclusively on your behalf, under your direction\\nand control, on terms that prohibit them from making any copies of\\nyour copyrighted material outside their relationship with you.\\n\\nConveying under any other circumstances is permitted solely under\\nthe conditions stated below.  Sublicensing is not allowed; section 10\\nmakes it unnecessary.\\n\\n3. Protecting Users' Legal Rights From Anti-Circumvention Law.\\n\\nNo covered work shall be deemed part of an effective technological\\nmeasure under any applicable law fulfilling obligations under article\\n11 of the WIPO copyright treaty adopted on 20 December 1996, or\\nsimilar laws prohibiting or restricting circumvention of such\\nmeasures.\\n\\nWhen you convey a covered work, you waive any legal power to forbid\\ncircumvention of technological measures to the extent such circumvention\\nis effected by exercising rights under this License with respect to\\nthe covered work, and you disclaim any intention to limit operation or\\nmodification of the work as a means of enforcing, against the work's\\nusers, your or third parties' legal rights to forbid circumvention of\\ntechnological measures.\\n\\n4. Conveying Verbatim Copies.\\n\\nYou may convey verbatim copies of the Program's source code as you\\nreceive it, in any medium, provided that you conspicuously and\\nappropriately publish on each copy an appropriate copyright notice;\\nkeep intact all notices stating that this License and any\\nnon-permissive terms added in accord with section 7 apply to the code;\\nkeep intact all notices of the absence of any warranty; and give all\\nrecipients a copy of this License along with the Program.\\n\\nYou may charge any price or no price for each copy that you convey,\\nand you may offer support or warranty protection for a fee.\\n\\n5. Conveying Modified Source Versions.\\n\\nYou may convey a work based on the Program, or the modifications to\\nproduce it from the Program, in the form of source code under the\\nterms of section 4, provided that you also meet all of these conditions:\\n\\na) The work must carry prominent notices stating that you modified\\nit, and giving a relevant date.\\n\\nb) The work must carry prominent notices stating that it is\\nreleased under this License and any conditions added under section\\n7.  This requirement modifies the requirement in section 4 to\\n\\"keep intact all notices\\".\\n\\nc) You must license the entire work, as a whole, under this\\nLicense to anyone who comes into possession of a copy.  This\\nLicense will therefore apply, along with any applicable section 7\\nadditional terms, to the whole of the work, and all its parts,\\nregardless of how they are packaged.  This License gives no\\npermission to license the work in any other way, but it does not\\ninvalidate such permission if you have separately received it.\\n\\nd) If the work has interactive user interfaces, each must display\\nAppropriate Legal Notices; however, if the Program has interactive\\ninterfaces that do not display Appropriate Legal Notices, your\\nwork need not make them do so.\\n\\nA compilation of a covered work with other separate and independent\\nworks, which are not by their nature extensions of the covered work,\\nand which are not combined with it such as to form a larger program,\\nin or on a volume of a storage or distribution medium, is called an\\n\\"aggregate\\" if the compilation and its resulting copyright are not\\nused to limit the access or legal rights of the compilation's users\\nbeyond what the individual works permit.  Inclusion of a covered work\\nin an aggregate does not cause this License to apply to the other\\nparts of the aggregate.\\n\\n6. Conveying Non-Source Forms.\\n\\nYou may convey a covered work in object code form under the terms\\nof sections 4 and 5, provided that you also convey the\\nmachine-readable Corresponding Source under the terms of this License,\\nin one of these ways:\\n\\na) Convey the object code in, or embodied in, a physical product\\n(including a physical distribution medium), accompanied by the\\nCorresponding Source fixed on a durable physical medium\\ncustomarily used for software interchange.\\n\\nb) Convey the object code in, or embodied in, a physical product\\n(including a physical distribution medium), accompanied by a\\nwritten offer, valid for at least three years and valid for as\\nlong as you offer spare parts or customer support for that product\\nmodel, to give anyone who possesses the object code either (1) a\\ncopy of the Corresponding Source for all the software in the\\nproduct that is covered by this License, on a durable physical\\nmedium customarily used for software interchange, for a price no\\nmore than your reasonable cost of physically performing this\\nconveying of source, or (2) access to copy the\\nCorresponding Source from a network server at no charge.\\n\\nc) Convey individual copies of the object code with a copy of the\\nwritten offer to provide the Corresponding Source.  This\\nalternative is allowed only occasionally and noncommercially, and\\nonly if you received the object code with such an offer, in accord\\nwith subsection 6b.\\n\\nd) Convey the object code by offering access from a designated\\nplace (gratis or for a charge), and offer equivalent access to the\\nCorresponding Source in the same way through the same place at no\\nfurther charge.  You need not require recipients to copy the\\nCorresponding Source along with the object code.  If the place to\\ncopy the object code is a network server, the Corresponding Source\\nmay be on a different server (operated by you or a third party)\\nthat supports equivalent copying facilities, provided you maintain\\nclear directions next to the object code saying where to find the\\nCorresponding Source.  Regardless of what server hosts the\\nCorresponding Source, you remain obligated to ensure that it is\\navailable for as long as needed to satisfy these requirements.\\n\\ne) Convey the object code using peer-to-peer transmission, provided\\nyou inform other peers where the object code and Corresponding\\nSource of the work are being offered to the general public at no\\ncharge under subsection 6d.\\n\\nA separable portion of the object code, whose source code is excluded\\nfrom the Corresponding Source as a System Library, need not be\\nincluded in conveying the object code work.\\n\\nA \\"User Product\\" is either (1) a \\"consumer product\\", which means any\\ntangible personal property which is normally used for personal, family,\\nor household purposes, or (2) anything designed or sold for incorporation\\ninto a dwelling.  In determining whether a product is a consumer product,\\ndoubtful cases shall be resolved in favor of coverage.  For a particular\\nproduct received by a particular user, \\"normally used\\" refers to a\\ntypical or common use of that class of product, regardless of the status\\nof the particular user or of the way in which the particular user\\nactually uses, or expects or is expected to use, the product.  A product\\nis a consumer product regardless of whether the product has substantial\\ncommercial, industrial or non-consumer uses, unless such uses represent\\nthe only significant mode of use of the product.\\n\\n\\"Installation Information\\" for a User Product means any methods,\\nprocedures, authorization keys, or other information required to install\\nand execute modified versions of a covered work in that User Product from\\na modified version of its Corresponding Source.  The information must\\nsuffice to ensure that the continued functioning of the modified object\\ncode is in no case prevented or interfered with solely because\\nmodification has been made.\\n\\nIf you convey an object code work under this section in, or with, or\\nspecifically for use in, a User Product, and the conveying occurs as\\npart of a transaction in which the right of possession and use of the\\nUser Product is transferred to the recipient in perpetuity or for a\\nfixed term (regardless of how the transaction is characterized), the\\nCorresponding Source conveyed under this section must be accompanied\\nby the Installation Information.  But this requirement does not apply\\nif neither you nor any third party retains the ability to install\\nmodified object code on the User Product (for example, the work has\\nbeen installed in ROM).\\n\\nThe requirement to provide Installation Information does not include a\\nrequirement to continue to provide support service, warranty, or updates\\nfor a work that has been modified or installed by the recipient, or for\\nthe User Product in which it has been modified or installed.  Access to a\\nnetwork may be denied when the modification itself materially and\\nadversely affects the operation of the network or violates the rules and\\nprotocols for communication across the network.\\n\\nCorresponding Source conveyed, and Installation Information provided,\\nin accord with this section must be in a format that is publicly\\ndocumented (and with an implementation available to the public in\\nsource code form), and must require no special password or key for\\nunpacking, reading or copying.\\n\\n7. Additional Terms.\\n\\n\\"Additional permissions\\" are terms that supplement the terms of this\\nLicense by making exceptions from one or more of its conditions.\\nAdditional permissions that are applicable to the entire Program shall\\nbe treated as though they were included in this License, to the extent\\nthat they are valid under applicable law.  If additional permissions\\napply only to part of the Program, that part may be used separately\\nunder those permissions, but the entire Program remains governed by\\nthis License without regard to the additional permissions.\\n\\nWhen you convey a copy of a covered work, you may at your option\\nremove any additional permissions from that copy, or from any part of\\nit.  (Additional permissions may be written to require their own\\nremoval in certain cases when you modify the work.)  You may place\\nadditional permissions on material, added by you to a covered work,\\nfor which you have or can give appropriate copyright permission.\\n\\nNotwithstanding any other provision of this License, for material you\\nadd to a covered work, you may (if authorized by the copyright holders of\\nthat material) supplement the terms of this License with terms:\\n\\na) Disclaiming warranty or limiting liability differently from the\\nterms of sections 15 and 16 of this License; or\\n\\nb) Requiring preservation of specified reasonable legal notices or\\nauthor attributions in that material or in the Appropriate Legal\\nNotices displayed by works containing it; or\\n\\nc) Prohibiting misrepresentation of the origin of that material, or\\nrequiring that modified versions of such material be marked in\\nreasonable ways as different from the original version; or\\n\\nd) Limiting the use for publicity purposes of names of licensors or\\nauthors of the material; or\\n\\ne) Declining to grant rights under trademark law for use of some\\ntrade names, trademarks, or service marks; or\\n\\nf) Requiring indemnification of licensors and authors of that\\nmaterial by anyone who conveys the material (or modified versions of\\nit) with contractual assumptions of liability to the recipient, for\\nany liability that these contractual assumptions directly impose on\\nthose licensors and authors.\\n\\nAll other non-permissive additional terms are considered \\"further\\nrestrictions\\" within the meaning of section 10.  If the Program as you\\nreceived it, or any part of it, contains a notice stating that it is\\ngoverned by this License along with a term that is a further\\nrestriction, you may remove that term.  If a license document contains\\na further restriction but permits relicensing or conveying under this\\nLicense, you may add to a covered work material governed by the terms\\nof that license document, provided that the further restriction does\\nnot survive such relicensing or conveying.\\n\\nIf you add terms to a covered work in accord with this section, you\\nmust place, in the relevant source files, a statement of the\\nadditional terms that apply to those files, or a notice indicating\\nwhere to find the applicable terms.\\n\\nAdditional terms, permissive or non-permissive, may be stated in the\\nform of a separately written license, or stated as exceptions;\\nthe above requirements apply either way.\\n\\n8. Termination.\\n\\nYou may not propagate or modify a covered work except as expressly\\nprovided under this License.  Any attempt otherwise to propagate or\\nmodify it is void, and will automatically terminate your rights under\\nthis License (including any patent licenses granted under the third\\nparagraph of section 11).\\n\\nHowever, if you cease all violation of this License, then your\\nlicense from a particular copyright holder is reinstated (a)\\nprovisionally, unless and until the copyright holder explicitly and\\nfinally terminates your license, and (b) permanently, if the copyright\\nholder fails to notify you of the violation by some reasonable means\\nprior to 60 days after the cessation.\\n\\nMoreover, your license from a particular copyright holder is\\nreinstated permanently if the copyright holder notifies you of the\\nviolation by some reasonable means, this is the first time you have\\nreceived notice of violation of this License (for any work) from that\\ncopyright holder, and you cure the violation prior to 30 days after\\nyour receipt of the notice.\\n\\nTermination of your rights under this section does not terminate the\\nlicenses of parties who have received copies or rights from you under\\nthis License.  If your rights have been terminated and not permanently\\nreinstated, you do not qualify to receive new licenses for the same\\nmaterial under section 10.\\n\\n9. Acceptance Not Required for Having Copies.\\n\\nYou are not required to accept this License in order to receive or\\nrun a copy of the Program.  Ancillary propagation of a covered work\\noccurring solely as a consequence of using peer-to-peer transmission\\nto receive a copy likewise does not require acceptance.  However,\\nnothing other than this License grants you permission to propagate or\\nmodify any covered work.  These actions infringe copyright if you do\\nnot accept this License.  Therefore, by modifying or propagating a\\ncovered work, you indicate your acceptance of this License to do so.\\n\\n10. Automatic Licensing of Downstream Recipients.\\n\\nEach time you convey a covered work, the recipient automatically\\nreceives a license from the original licensors, to run, modify and\\npropagate that work, subject to this License.  You are not responsible\\nfor enforcing compliance by third parties with this License.\\n\\nAn \\"entity transaction\\" is a transaction transferring control of an\\norganization, or substantially all assets of one, or subdividing an\\norganization, or merging organizations.  If propagation of a covered\\nwork results from an entity transaction, each party to that\\ntransaction who receives a copy of the work also receives whatever\\nlicenses to the work the party's predecessor in interest had or could\\ngive under the previous paragraph, plus a right to possession of the\\nCorresponding Source of the work from the predecessor in interest, if\\nthe predecessor has it or can get it with reasonable efforts.\\n\\nYou may not impose any further restrictions on the exercise of the\\nrights granted or affirmed under this License.  For example, you may\\nnot impose a license fee, royalty, or other charge for exercise of\\nrights granted under this License, and you may not initiate litigation\\n(including a cross-claim or counterclaim in a lawsuit) alleging that\\nany patent claim is infringed by making, using, selling, offering for\\nsale, or importing the Program or any portion of it.\\n\\n11. Patents.\\n\\nA \\"contributor\\" is a copyright holder who authorizes use under this\\nLicense of the Program or a work on which the Program is based.  The\\nwork thus licensed is called the contributor's \\"contributor version\\".\\n\\nA contributor's \\"essential patent claims\\" are all patent claims\\nowned or controlled by the contributor, whether already acquired or\\nhereafter acquired, that would be infringed by some manner, permitted\\nby this License, of making, using, or selling its contributor version,\\nbut do not include claims that would be infringed only as a\\nconsequence of further modification of the contributor version.  For\\npurposes of this definition, \\"control\\" includes the right to grant\\npatent sublicenses in a manner consistent with the requirements of\\nthis License.\\n\\nEach contributor grants you a non-exclusive, worldwide, royalty-free\\npatent license under the contributor's essential patent claims, to\\nmake, use, sell, offer for sale, import and otherwise run, modify and\\npropagate the contents of its contributor version.\\n\\nIn the following three paragraphs, a \\"patent license\\" is any express\\nagreement or commitment, however denominated, not to enforce a patent\\n(such as an express permission to practice a patent or covenant not to\\nsue for patent infringement).  To \\"grant\\" such a patent license to a\\nparty means to make such an agreement or commitment not to enforce a\\npatent against the party.\\n\\nIf you convey a covered work, knowingly relying on a patent license,\\nand the Corresponding Source of the work is not available for anyone\\nto copy, free of charge and under the terms of this License, through a\\npublicly available network server or other readily accessible means,\\nthen you must either (1) cause the Corresponding Source to be so\\navailable, or (2) arrange to deprive yourself of the benefit of the\\npatent license for this particular work, or (3) arrange, in a manner\\nconsistent with the requirements of this License, to extend the patent\\nlicense to downstream recipients.  \\"Knowingly relying\\" means you have\\nactual knowledge that, but for the patent license, your conveying the\\ncovered work in a country, or your recipient's use of the covered work\\nin a country, would infringe one or more identifiable patents in that\\ncountry that you have reason to believe are valid.\\n\\nIf, pursuant to or in connection with a single transaction or\\narrangement, you convey, or propagate by procuring conveyance of, a\\ncovered work, and grant a patent license to some of the parties\\nreceiving the covered work authorizing them to use, propagate, modify\\nor convey a specific copy of the covered work, then the patent license\\nyou grant is automatically extended to all recipients of the covered\\nwork and works based on it.\\n\\nA patent license is \\"discriminatory\\" if it does not include within\\nthe scope of its coverage, prohibits the exercise of, or is\\nconditioned on the non-exercise of one or more of the rights that are\\nspecifically granted under this License.  You may not convey a covered\\nwork if you are a party to an arrangement with a third party that is\\nin the business of distributing software, under which you make payment\\nto the third party based on the extent of your activity of conveying\\nthe work, and under which the third party grants, to any of the\\nparties who would receive the covered work from you, a discriminatory\\npatent license (a) in connection with copies of the covered work\\nconveyed by you (or copies made from those copies), or (b) primarily\\nfor and in connection with specific products or compilations that\\ncontain the covered work, unless you entered into that arrangement,\\nor that patent license was granted, prior to 28 March 2007.\\n\\nNothing in this License shall be construed as excluding or limiting\\nany implied license or other defenses to infringement that may\\notherwise be available to you under applicable patent law.\\n\\n12. No Surrender of Others' Freedom.\\n\\nIf conditions are imposed on you (whether by court order, agreement or\\notherwise) that contradict the conditions of this License, they do not\\nexcuse you from the conditions of this License.  If you cannot convey a\\ncovered work so as to satisfy simultaneously your obligations under this\\nLicense and any other pertinent obligations, then as a consequence you may\\nnot convey it at all.  For example, if you agree to terms that obligate you\\nto collect a royalty for further conveying from those to whom you convey\\nthe Program, the only way you could satisfy both those terms and this\\nLicense would be to refrain entirely from conveying the Program.\\n\\n13. Remote Network Interaction; Use with the GNU General Public License.\\n\\nNotwithstanding any other provision of this License, if you modify the\\nProgram, your modified version must prominently offer all users\\ninteracting with it remotely through a computer network (if your version\\nsupports such interaction) an opportunity to receive the Corresponding\\nSource of your version by providing access to the Corresponding Source\\nfrom a network server at no charge, through some standard or customary\\nmeans of facilitating copying of software.  This Corresponding Source\\nshall include the Corresponding Source for any work covered by version 3\\nof the GNU General Public License that is incorporated pursuant to the\\nfollowing paragraph.\\n\\nNotwithstanding any other provision of this License, you have\\npermission to link or combine any covered work with a work licensed\\nunder version 3 of the GNU General Public License into a single\\ncombined work, and to convey the resulting work.  The terms of this\\nLicense will continue to apply to the part which is the covered work,\\nbut the work with which it is combined will remain governed by version\\n3 of the GNU General Public License.\\n\\n14. Revised Versions of this License.\\n\\nThe Free Software Foundation may publish revised and/or new versions of\\nthe GNU Affero General Public License from time to time.  Such new versions\\nwill be similar in spirit to the present version, but may differ in detail to\\naddress new problems or concerns.\\n\\nEach version is given a distinguishing version number.  If the\\nProgram specifies that a certain numbered version of the GNU Affero General\\nPublic License \\"or any later version\\" applies to it, you have the\\noption of following the terms and conditions either of that numbered\\nversion or of any later version published by the Free Software\\nFoundation.  If the Program does not specify a version number of the\\nGNU Affero General Public License, you may choose any version ever published\\nby the Free Software Foundation.\\n\\nIf the Program specifies that a proxy can decide which future\\nversions of the GNU Affero General Public License can be used, that proxy's\\npublic statement of acceptance of a version permanently authorizes you\\nto choose that version for the Program.\\n\\nLater license versions may give you additional or different\\npermissions.  However, no additional obligations are imposed on any\\nauthor or copyright holder as a result of your choosing to follow a\\nlater version.\\n\\n15. Disclaimer of Warranty.\\n\\nTHERE IS NO WARRANTY FOR THE PROGRAM, TO THE EXTENT PERMITTED BY\\nAPPLICABLE LAW.  EXCEPT WHEN OTHERWISE STATED IN WRITING THE COPYRIGHT\\nHOLDERS AND/OR OTHER PARTIES PROVIDE THE PROGRAM \\"AS IS\\" WITHOUT WARRANTY\\nOF ANY KIND, EITHER EXPRESSED OR IMPLIED, INCLUDING, BUT NOT LIMITED TO,\\nTHE IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR\\nPURPOSE.  THE ENTIRE RISK AS TO THE QUALITY AND PERFORMANCE OF THE PROGRAM\\nIS WITH YOU.  SHOULD THE PROGRAM PROVE DEFECTIVE, YOU ASSUME THE COST OF\\nALL NECESSARY SERVICING, REPAIR OR CORRECTION.\\n\\n16. Limitation of Liability.\\n\\nIN NO EVENT UNLESS REQUIRED BY APPLICABLE LAW OR AGREED TO IN WRITING\\nWILL ANY COPYRIGHT HOLDER, OR ANY OTHER PARTY WHO MODIFIES AND/OR CONVEYS\\nTHE PROGRAM AS PERMITTED ABOVE, BE LIABLE TO YOU FOR DAMAGES, INCLUDING ANY\\nGENERAL, SPECIAL, INCIDENTAL OR CONSEQUENTIAL DAMAGES ARISING OUT OF THE\\nUSE OR INABILITY TO USE THE PROGRAM (INCLUDING BUT NOT LIMITED TO LOSS OF\\nDATA OR DATA BEING RENDERED INACCURATE OR LOSSES SUSTAINED BY YOU OR THIRD\\nPARTIES OR A FAILURE OF THE PROGRAM TO OPERATE WITH ANY OTHER PROGRAMS),\\nEVEN IF SUCH HOLDER OR OTHER PARTY HAS BEEN ADVISED OF THE POSSIBILITY OF\\nSUCH DAMAGES.\\n\\n17. Interpretation of Sections 15 and 16.\\n\\nIf the disclaimer of warranty and limitation of liability provided\\nabove cannot be given local legal effect according to their terms,\\nreviewing courts shall apply local law that most closely approximates\\nan absolute waiver of all civil liability in connection with the\\nProgram, unless a warranty or assumption of liability accompanies a\\ncopy of the Program in return for a fee.\\n\\n      END OF TERMS AND CONDITIONS\\n\\nHow to Apply These Terms to Your New Programs\\n\\nIf you develop a new program, and you want it to be of the greatest\\npossible use to the public, the best way to achieve this is to make it\\nfree software which everyone can redistribute and change under these terms.\\n\\nTo do so, attach the following notices to the program.  It is safest\\nto attach them to the start of each source file to most effectively\\nstate the exclusion of warranty; and each file should have at least\\nthe \\"copyright\\" line and a pointer to where the full notice is found.\\n\\n<one line to give the program's name and a brief idea of what it does.>\\nCopyright (C) <year>  <name of author>\\n\\nThis program is free software: you can redistribute it and/or modify\\nit under the terms of the GNU Affero General Public License as published by\\nthe Free Software Foundation, either version 3 of the License, or\\n(at your option) any later version.\\n\\nThis program is distributed in the hope that it will be useful,\\nbut WITHOUT ANY WARRANTY; without even the implied warranty of\\nMERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the\\nGNU Affero General Public License for more details.\\n\\nYou should have received a copy of the GNU Affero General Public License\\nalong with this program.  If not, see <https://www.gnu.org/licenses/>.\\n\\nAlso add information on how to contact you by electronic and paper mail.\\n\\nIf your software can interact with users remotely through a computer\\nnetwork, you should also make sure that it provides a way for users to\\nget its source.  For example, if your program is a web application, its\\ninterface could display a \\"Source\\" link that leads users to an archive\\nof the code.  There are many ways you could offer source, and different\\nsolutions will be better for different programs; see section 13 for the\\nspecific requirements.\\n\\nYou should also get your employer (if you work as a programmer) or school,\\nif any, to sign a \\"copyright disclaimer\\" for the program, if necessary.\\nFor more information on this, and how to apply and follow the GNU AGPL, see\\n<https://www.gnu.org/licenses/>."},{"id":"gcoord","name":"gcoord","description":"A coordinates converter","url":"https://github.com/hujiulong/gcoord","licenseType":"MIT","license":"\\n\\t\\tMIT License\\n\\n\\t\\tCopyright (c) 2018-present, Jiulong Hu\\n\\n\\t\\tPermission is hereby granted, free of charge, to any person obtaining a copy\\n\\t\\tof this software and associated documentation files (the \\"Software\\"), to deal\\n\\t\\tin the Software without restriction, including without limitation the rights\\n\\t\\tto use, copy, modify, merge, publish, distribute, sublicense, and/or sell\\n\\t\\tcopies of the Software, and to permit persons to whom the Software is\\n\\t\\tfurnished to do so, subject to the following conditions:\\n\\n\\t\\tThe above copyright notice and this permission notice shall be included in all\\n\\t\\tcopies or substantial portions of the Software.\\n\\n\\t\\tTHE SOFTWARE IS PROVIDED \\"AS IS\\", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR\\n\\t\\tIMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,\\n\\t\\tFITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE\\n\\t\\tAUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER\\n\\t\\tLIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,\\n\\t\\tOUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE\\n\\t\\tSOFTWARE."},{"id":"localforage","name":"localForage","description":"A fast and simple storage library for JavaScript.","url":"https://github.com/localForage/localForage","homepage":"https://localforage.github.io/localForage/","licenseType":"Apache-2.0","license":"\\n        Apache License\\n\\n        Version 2.0, January 2004\\n\\n     http://www.apache.org/licenses/\\n\\nTERMS AND CONDITIONS FOR USE, REPRODUCTION, AND DISTRIBUTION\\n\\n1. Definitions.\\n\\n\\"License\\" shall mean the terms and conditions for use, reproduction,\\nand distribution as defined by Sections 1 through 9 of this document.\\n\\n\\"Licensor\\" shall mean the copyright owner or entity authorized by\\nthe copyright owner that is granting the License.\\n\\n\\"Legal Entity\\" shall mean the union of the acting entity and all\\nother entities that control, are controlled by, or are under common\\ncontrol with that entity. For the purposes of this definition,\\n\\"control\\" means (i) the power, direct or indirect, to cause the\\ndirection or management of such entity, whether by contract or\\notherwise, or (ii) ownership of fifty percent (50%) or more of the\\noutstanding shares, or (iii) beneficial ownership of such entity.\\n\\n\\"You\\" (or \\"Your\\") shall mean an individual or Legal Entity\\nexercising permissions granted by this License.\\n\\n\\"Source\\" form shall mean the preferred form for making modifications,\\nincluding but not limited to software source code, documentation\\nsource, and configuration files.\\n\\n\\"Object\\" form shall mean any form resulting from mechanical\\ntransformation or translation of a Source form, including but\\nnot limited to compiled object code, generated documentation,\\nand conversions to other media types.\\n\\n\\"Work\\" shall mean the work of authorship, whether in Source or\\nObject form, made available under the License, as indicated by a\\ncopyright notice that is included in or attached to the work\\n(an example is provided in the Appendix below).\\n\\n\\"Derivative Works\\" shall mean any work, whether in Source or Object\\nform, that is based on (or derived from) the Work and for which the\\neditorial revisions, annotations, elaborations, or other modifications\\nrepresent, as a whole, an original work of authorship. For the purposes\\nof this License, Derivative Works shall not include works that remain\\nseparable from, or merely link (or bind by name) to the interfaces of,\\nthe Work and Derivative Works thereof.\\n\\n\\"Contribution\\" shall mean any work of authorship, including\\nthe original version of the Work and any modifications or additions\\nto that Work or Derivative Works thereof, that is intentionally\\nsubmitted to Licensor for inclusion in the Work by the copyright owner\\nor by an individual or Legal Entity authorized to submit on behalf of\\nthe copyright owner. For the purposes of this definition, \\"submitted\\"\\nmeans any form of electronic, verbal, or written communication sent\\nto the Licensor or its representatives, including but not limited to\\ncommunication on electronic mailing lists, source code control systems,\\nand issue tracking systems that are managed by, or on behalf of, the\\nLicensor for the purpose of discussing and improving the Work, but\\nexcluding communication that is conspicuously marked or otherwise\\ndesignated in writing by the copyright owner as \\"Not a Contribution.\\"\\n\\n\\"Contributor\\" shall mean Licensor and any individual or Legal Entity\\non behalf of whom a Contribution has been received by Licensor and\\nsubsequently incorporated within the Work.\\n\\n2. Grant of Copyright License. Subject to the terms and conditions of\\nthis License, each Contributor hereby grants to You a perpetual,\\nworldwide, non-exclusive, no-charge, royalty-free, irrevocable\\ncopyright license to reproduce, prepare Derivative Works of,\\npublicly display, publicly perform, sublicense, and distribute the\\nWork and such Derivative Works in Source or Object form.\\n\\n3. Grant of Patent License. Subject to the terms and conditions of\\nthis License, each Contributor hereby grants to You a perpetual,\\nworldwide, non-exclusive, no-charge, royalty-free, irrevocable\\n(except as stated in this section) patent license to make, have made,\\nuse, offer to sell, sell, import, and otherwise transfer the Work,\\nwhere such license applies only to those patent claims licensable\\nby such Contributor that are necessarily infringed by their\\nContribution(s) alone or by combination of their Contribution(s)\\nwith the Work to which such Contribution(s) was submitted. If You\\ninstitute patent litigation against any entity (including a\\ncross-claim or counterclaim in a lawsuit) alleging that the Work\\nor a Contribution incorporated within the Work constitutes direct\\nor contributory patent infringement, then any patent licenses\\ngranted to You under this License for that Work shall terminate\\nas of the date such litigation is filed.\\n\\n4. Redistribution. You may reproduce and distribute copies of the\\nWork or Derivative Works thereof in any medium, with or without\\nmodifications, and in Source or Object form, provided that You\\nmeet the following conditions:\\n\\n(a) You must give any other recipients of the Work or\\nDerivative Works a copy of this License; and\\n\\n(b) You must cause any modified files to carry prominent notices\\nstating that You changed the files; and\\n\\n(c) You must retain, in the Source form of any Derivative Works\\nthat You distribute, all copyright, patent, trademark, and\\nattribution notices from the Source form of the Work,\\nexcluding those notices that do not pertain to any part of\\nthe Derivative Works; and\\n\\n(d) If the Work includes a \\"NOTICE\\" text file as part of its\\ndistribution, then any Derivative Works that You distribute must\\ninclude a readable copy of the attribution notices contained\\nwithin such NOTICE file, excluding those notices that do not\\npertain to any part of the Derivative Works, in at least one\\nof the following places: within a NOTICE text file distributed\\nas part of the Derivative Works; within the Source form or\\ndocumentation, if provided along with the Derivative Works; or,\\nwithin a display generated by the Derivative Works, if and\\nwherever such third-party notices normally appear. The contents\\nof the NOTICE file are for informational purposes only and\\ndo not modify the License. You may add Your own attribution\\nnotices within Derivative Works that You distribute, alongside\\nor as an addendum to the NOTICE text from the Work, provided\\nthat such additional attribution notices cannot be construed\\nas modifying the License.\\n\\nYou may add Your own copyright statement to Your modifications and\\nmay provide additional or different license terms and conditions\\nfor use, reproduction, or distribution of Your modifications, or\\nfor any such Derivative Works as a whole, provided Your use,\\nreproduction, and distribution of the Work otherwise complies with\\nthe conditions stated in this License.\\n\\n5. Submission of Contributions. Unless You explicitly state otherwise,\\nany Contribution intentionally submitted for inclusion in the Work\\nby You to the Licensor shall be under the terms and conditions of\\nthis License, without any additional terms or conditions.\\nNotwithstanding the above, nothing herein shall supersede or modify\\nthe terms of any separate license agreement you may have executed\\nwith Licensor regarding such Contributions.\\n\\n6. Trademarks. This License does not grant permission to use the trade\\nnames, trademarks, service marks, or product names of the Licensor,\\nexcept as required for reasonable and customary use in describing the\\norigin of the Work and reproducing the content of the NOTICE file.\\n\\n7. Disclaimer of Warranty. Unless required by applicable law or\\nagreed to in writing, Licensor provides the Work (and each\\nContributor provides its Contributions) on an \\"AS IS\\" BASIS,\\nWITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or\\nimplied, including, without limitation, any warranties or conditions\\nof TITLE, NON-INFRINGEMENT, MERCHANTABILITY, or FITNESS FOR A\\nPARTICULAR PURPOSE. You are solely responsible for determining the\\nappropriateness of using or redistributing the Work and assume any\\nrisks associated with Your exercise of permissions under this License.\\n\\n8. Limitation of Liability. In no event and under no legal theory,\\nwhether in tort (including negligence), contract, or otherwise,\\nunless required by applicable law (such as deliberate and grossly\\nnegligent acts) or agreed to in writing, shall any Contributor be\\nliable to You for damages, including any direct, indirect, special,\\nincidental, or consequential damages of any character arising as a\\nresult of this License or out of the use or inability to use the\\nWork (including but not limited to damages for loss of goodwill,\\nwork stoppage, computer failure or malfunction, or any and all\\nother commercial damages or losses), even if such Contributor\\nhas been advised of the possibility of such damages.\\n\\n9. Accepting Warranty or Additional Liability. While redistributing\\nthe Work or Derivative Works thereof, You may choose to offer,\\nand charge a fee for, acceptance of support, warranty, indemnity,\\nor other liability obligations and/or rights consistent with this\\nLicense. However, in accepting such obligations, You may act only\\non Your own behalf and on Your sole responsibility, not on behalf\\nof any other Contributor, and only if You agree to indemnify,\\ndefend, and hold each Contributor harmless for any liability\\nincurred by, or claims asserted against, such Contributor by reason\\nof your accepting any such warranty or additional liability.\\n\\nEND OF TERMS AND CONDITIONS\\n\\nAPPENDIX: How to apply the Apache License to your work.\\n\\nTo apply the Apache License to your work, attach the following\\nboilerplate notice, with the fields enclosed by brackets \\"{}\\"\\nreplaced with your own identifying information. (Don't include\\nthe brackets!)  The text should be enclosed in the appropriate\\ncomment syntax for the file format. We also recommend that a\\nfile or class name and description of purpose be included on the\\nsame \\"printed page\\" as the copyright notice for easier\\nidentification within third-party archives.\\n\\nCopyright 2014 Mozilla\\n\\nLicensed under the Apache License, Version 2.0 (the \\"License\\");\\nyou may not use this file except in compliance with the License.\\nYou may obtain a copy of the License at\\n\\nhttp://www.apache.org/licenses/LICENSE-2.0\\n\\nUnless required by applicable law or agreed to in writing, software\\ndistributed under the License is distributed on an \\"AS IS\\" BASIS,\\nWITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.\\nSee the License for the specific language governing permissions and\\nlimitations under the License."},{"id":"lodash-es","name":"Lodash","description":"A modern JavaScript utility library delivering modularity, performance, & extras.","license":"Copyright OpenJS Foundation and other contributors <https://openjsf.org/>\\n\\nBased on Underscore.js, copyright Jeremy Ashkenas,\\nDocumentCloud and Investigative Reporters & Editors <http://underscorejs.org/>\\n\\nThis software consists of voluntary contributions made by many\\nindividuals. For exact contribution history, see the revision history\\navailable at https://github.com/lodash/lodash\\n\\nThe following license applies to all parts of this software except as\\ndocumented below:\\n\\n====\\n\\nPermission is hereby granted, free of charge, to any person obtaining\\na copy of this software and associated documentation files (the\\n\\"Software\\"), to deal in the Software without restriction, including\\nwithout limitation the rights to use, copy, modify, merge, publish,\\ndistribute, sublicense, and/or sell copies of the Software, and to\\npermit persons to whom the Software is furnished to do so, subject to\\nthe following conditions:\\n\\nThe above copyright notice and this permission notice shall be\\nincluded in all copies or substantial portions of the Software.\\n\\nTHE SOFTWARE IS PROVIDED \\"AS IS\\", WITHOUT WARRANTY OF ANY KIND,\\nEXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF\\nMERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND\\nNONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE\\nLIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION\\nOF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION\\nWITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.\\n\\n====\\n\\nCopyright and related rights for sample code are waived via CC0. Sample\\ncode is defined as all source code displayed within the prose of the\\ndocumentation.\\n\\nCC0: http://creativecommons.org/publicdomain/zero/1.0/\\n\\n====\\n\\nFiles located in the node_modules and vendor directories are externally\\nmaintained libraries used by this software which have their own\\nlicenses; we recommend you read them, as their terms may differ from the\\nterms above.","licenseType":"MIT","url":"https://github.com/lodash/lodash","homepage":"https://lodash.com/"},{"id":"terradraw","name":"Terradraw","description":"A library for drawing on maps that supports Mapbox, MapLibre, Google Maps, OpenLayers and Leaflet out the box.","license":"Copyright 2022 James Milner\\n\\nPermission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the \\"Software\\"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:\\n\\nThe above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.\\n\\nTHE SOFTWARE IS PROVIDED \\"AS IS\\", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.","licenseType":"MIT","url":"https://github.com/JamesLMilner/terra-draw","homepage":"https://terradraw.io/"},{"id":"vue-i18n","name":"Vue I18n","description":"Internationalization plugin for Vue.js","license":"The MIT License (MIT)\\n\\nCopyright (c) 2016 kazuya kawaguchi\\n\\nPermission is hereby granted, free of charge, to any person obtaining a copy of\\nthis software and associated documentation files (the \\"Software\\"), to deal in\\nthe Software without restriction, including without limitation the rights to\\nuse, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of\\nthe Software, and to permit persons to whom the Software is furnished to do so,\\nsubject to the following conditions:\\n\\nThe above copyright notice and this permission notice shall be included in all\\ncopies or substantial portions of the Software.\\n\\nTHE SOFTWARE IS PROVIDED \\"AS IS\\", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR\\nIMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS\\nFOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR\\nCOPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER\\nIN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN\\nCONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.","licenseType":"MIT","url":"https://github.com/intlify/vue-i18n","homepage":"https://kazupon.github.io/vue-i18n/"},{"id":"vue-markdown-render","name":"Vue Markdown Render","description":"A simple markdown parser for Vue using markdown-it.","license":"MIT License\\n\\nCopyright (c) 2023 cloudacy OG\\n\\nPermission is hereby granted, free of charge, to any person obtaining a copy\\nof this software and associated documentation files (the \\"Software\\"), to deal\\nin the Software without restriction, including without limitation the rights\\nto use, copy, modify, merge, publish, distribute, sublicense, and/or sell\\ncopies of the Software, and to permit persons to whom the Software is\\nfurnished to do so, subject to the following conditions:\\n\\nThe above copyright notice and this permission notice shall be included in all\\ncopies or substantial portions of the Software.\\n\\nTHE SOFTWARE IS PROVIDED \\"AS IS\\", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR\\nIMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,\\nFITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE\\nAUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER\\nLIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,\\nOUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE\\nSOFTWARE.","licenseType":"MIT","url":"https://github.com/cloudacy/vue-markdown-render"},{"id":"proj4rs","name":"Proj4rs","description":"Rust adaptation of Proj4.","license":"","licenseType":"MIT, Apache-2.0","url":"https://github.com/3liz/proj4rs"}]`);
  rb = [
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
  ib = {
    withStackTrace: false
  };
  Nf = (e, t, n = ib) => {
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
  function oc(e) {
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
  function vn(e) {
    return this instanceof vn ? (this.v = e, this) : new vn(e);
  }
  function sc(e, t, n) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var i = n.apply(e, t || []), l, c = [];
    return l = Object.create((typeof AsyncIterator == "function" ? AsyncIterator : Object).prototype), h("next"), h("throw"), h("return", f), l[Symbol.asyncIterator] = function() {
      return this;
    }, l;
    function f(R) {
      return function(C) {
        return Promise.resolve(C).then(R, I);
      };
    }
    function h(R, C) {
      i[R] && (l[R] = function(L) {
        return new Promise(function(Z, j) {
          c.push([
            R,
            L,
            Z,
            j
          ]) > 1 || p(R, L);
        });
      }, C && (l[R] = C(l[R])));
    }
    function p(R, C) {
      try {
        v(i[R](C));
      } catch (L) {
        P(c[0][3], L);
      }
    }
    function v(R) {
      R.value instanceof vn ? Promise.resolve(R.value.v).then(w, I) : P(c[0][2], R);
    }
    function w(R) {
      p("next", R);
    }
    function I(R) {
      p("throw", R);
    }
    function P(R, C) {
      R(C), c.shift(), c.length && p(c[0][0], c[0][1]);
    }
  }
  function ob(e) {
    var t, n;
    return t = {}, i("next"), i("throw", function(l) {
      throw l;
    }), i("return"), t[Symbol.iterator] = function() {
      return this;
    }, t;
    function i(l, c) {
      t[l] = e[l] ? function(f) {
        return (n = !n) ? {
          value: vn(e[l](f)),
          done: false
        } : c ? c(f) : f;
      } : c;
    }
  }
  function sb(e) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var t = e[Symbol.asyncIterator], n;
    return t ? t.call(e) : (e = typeof oc == "function" ? oc(e) : e[Symbol.iterator](), n = {}, i("next"), i("throw"), i("return"), n[Symbol.asyncIterator] = function() {
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
  class St {
    constructor(t) {
      this._promise = t;
    }
    static fromSafePromise(t) {
      const n = t.then((i) => new gn(i));
      return new St(n);
    }
    static fromPromise(t, n) {
      const i = t.then((l) => new gn(l)).catch((l) => new on(n(l)));
      return new St(i);
    }
    static fromThrowable(t, n) {
      return (...i) => new St(gr(this, void 0, void 0, function* () {
        try {
          return new gn(yield t(...i));
        } catch (l) {
          return new on(n ? n(l) : l);
        }
      }));
    }
    static combine(t) {
      return ab(t);
    }
    static combineWithAllErrors(t) {
      return lb(t);
    }
    map(t) {
      return new St(this._promise.then((n) => gr(this, void 0, void 0, function* () {
        return n.isErr() ? new on(n.error) : new gn(yield t(n.value));
      })));
    }
    andThrough(t) {
      return new St(this._promise.then((n) => gr(this, void 0, void 0, function* () {
        if (n.isErr()) return new on(n.error);
        const i = yield t(n.value);
        return i.isErr() ? new on(i.error) : new gn(n.value);
      })));
    }
    andTee(t) {
      return new St(this._promise.then((n) => gr(this, void 0, void 0, function* () {
        if (n.isErr()) return new on(n.error);
        try {
          yield t(n.value);
        } catch {
        }
        return new gn(n.value);
      })));
    }
    orTee(t) {
      return new St(this._promise.then((n) => gr(this, void 0, void 0, function* () {
        if (n.isOk()) return new gn(n.value);
        try {
          yield t(n.error);
        } catch {
        }
        return new on(n.error);
      })));
    }
    mapErr(t) {
      return new St(this._promise.then((n) => gr(this, void 0, void 0, function* () {
        return n.isOk() ? new gn(n.value) : new on(yield t(n.error));
      })));
    }
    andThen(t) {
      return new St(this._promise.then((n) => {
        if (n.isErr()) return new on(n.error);
        const i = t(n.value);
        return i instanceof St ? i._promise : i;
      }));
    }
    orElse(t) {
      return new St(this._promise.then((n) => gr(this, void 0, void 0, function* () {
        return n.isErr() ? t(n.error) : new gn(n.value);
      })));
    }
    match(t, n) {
      return this._promise.then((i) => i.match(t, n));
    }
    unwrapOr(t) {
      return this._promise.then((n) => n.unwrapOr(t));
    }
    safeUnwrap() {
      return sc(this, arguments, function* () {
        return yield vn(yield vn(yield* ob(sb(yield vn(this._promise.then((n) => n.safeUnwrap()))))));
      });
    }
    then(t, n) {
      return this._promise.then(t, n);
    }
    [Symbol.asyncIterator]() {
      return sc(this, arguments, function* () {
        const n = yield vn(this._promise);
        return n.isErr() && (yield yield vn(mo(n.error))), yield vn(n.value);
      });
    }
  }
  function mo(e) {
    return new St(Promise.resolve(new on(e)));
  }
  const Lf = (e) => {
    let t = G([]);
    for (const n of e) if (n.isErr()) {
      t = N(n.error);
      break;
    } else t.map((i) => i.push(n.value));
    return t;
  }, ab = (e) => St.fromSafePromise(Promise.all(e)).andThen(Lf), Cf = (e) => {
    let t = G([]);
    for (const n of e) n.isErr() && t.isErr() ? t.error.push(n.error) : n.isErr() && t.isOk() ? t = N([
      n.error
    ]) : n.isOk() && t.isOk() && t.value.push(n.value);
    return t;
  }, lb = (e) => St.fromSafePromise(Promise.all(e)).andThen(Cf);
  var ua;
  (function(e) {
    function t(l, c) {
      return (...f) => {
        try {
          const h = l(...f);
          return G(h);
        } catch (h) {
          return N(c ? c(h) : h);
        }
      };
    }
    e.fromThrowable = t;
    function n(l) {
      return Lf(l);
    }
    e.combine = n;
    function i(l) {
      return Cf(l);
    }
    e.combineWithAllErrors = i;
  })(ua || (ua = {}));
  G = function(e) {
    return new gn(e);
  };
  N = function(e) {
    return new on(e);
  };
  class gn {
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
      return St.fromSafePromise(t(this.value));
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
      throw Nf("Called `_unsafeUnwrapErr` on an Ok", this, t);
    }
    *[Symbol.iterator]() {
      return this.value;
    }
  }
  class on {
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
      return N(this.error);
    }
    mapErr(t) {
      return N(t(this.error));
    }
    andThrough(t) {
      return N(this.error);
    }
    andTee(t) {
      return N(this.error);
    }
    orTee(t) {
      try {
        t(this.error);
      } catch {
      }
      return N(this.error);
    }
    andThen(t) {
      return N(this.error);
    }
    orElse(t) {
      return t(this.error);
    }
    asyncAndThen(t) {
      return mo(this.error);
    }
    asyncAndThrough(t) {
      return mo(this.error);
    }
    asyncMap(t) {
      return mo(this.error);
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
        throw yield N(t), new Error("Do not use this generator out of `safeTry`");
      })();
    }
    _unsafeUnwrap(t) {
      throw Nf("Called `_unsafeUnwrap` on an Err", this, t);
    }
    _unsafeUnwrapErr(t) {
      return this.error;
    }
    *[Symbol.iterator]() {
      const t = this;
      return yield t, t;
    }
  }
  ua.fromThrowable;
  Zr = ((e) => (e.GENERIC = "generic", e.VALIDATION = "validation", e.NETWORK = "network", e.GEOLOCATION = "geolocation", e.STORAGE = "storage", e.CONVERSION = "conversion", e.UPDATE_SERVICE = "update_service", e))(Zr || {});
  Mr = class extends Error {
    constructor(t, n) {
      super(t), this.cause = n, this.name = this.constructor.name, n && (this.message = `${t} (caused by: ${n.message})`);
    }
  };
  class wt extends Mr {
    constructor(t, n = "GENERIC_ERROR", i) {
      super(t, i);
      __publicField(this, "code");
      __publicField(this, "domain", "generic");
      this.code = n;
    }
  }
  function cb(e) {
    return e instanceof Mr;
  }
  function Ht(e, t = "Unknown error occurred") {
    return cb(e) ? e : e instanceof Error ? new wt(t, "UNKNOWN_ERROR", e) : new wt(t, "UNKNOWN_ERROR");
  }
  function ut(e, t) {
    const n = t ? `[${t}] ` : "";
    console.error(`${n}${e.domain}.${e.code}: ${e.message}`, {
      error: e,
      cause: e.cause,
      stack: e.stack
    });
  }
  class Ba extends Mr {
    constructor(t, n, i) {
      super(t, i);
      __publicField(this, "code");
      __publicField(this, "domain", Zr.GEOLOCATION);
      this.code = n;
    }
  }
  class Cr extends Ba {
    constructor(t = "User denied geolocation permission", n) {
      super(t, "PERMISSION_DENIED", n);
    }
  }
  class ub extends Ba {
    constructor(t = "Geolocation is not supported by this browser", n) {
      super(t, "UNSUPPORTED_BROWSER", n);
    }
  }
  class it extends Ba {
    constructor(t = "Geolocation update service error", n, i) {
      super(t, "UPDATE_SERVICE_ERROR", i), this.serviceName = n;
    }
  }
  var fb = "2.0.4", fa = 500, ac = "user-agent", Kr = "", lc = "?", Do = "function", er = "undefined", Jr = "object", ha = "string", Dt = "browser", Cn = "cpu", En = "device", ln = "engine", tn = "os", Br = "result", H = "name", F = "type", B = "vendor", Y = "version", jt = "architecture", Wi = "major", $ = "model", wi = "console", Se = "mobile", $e = "tablet", ct = "smarttv", mn = "wearable", oo = "xr", yi = "embedded", si = "inapp", za = "brands", vr = "formFactors", Ha = "fullVersionList", zr = "platform", Va = "platformVersion", as = "bitness", cr = "sec-ch-ua", hb = cr + "-full-version-list", db = cr + "-arch", pb = cr + "-" + as, gb = cr + "-form-factors", mb = cr + "-" + Se, wb = cr + "-" + $, kf = cr + "-" + zr, yb = kf + "-version", xf = [
    za,
    Ha,
    Se,
    $,
    zr,
    Va,
    jt,
    vr,
    as
  ], so = "Amazon", kr = "Apple", cc = "ASUS", uc = "BlackBerry", mr = "Google", fc = "Huawei", Rs = "Lenovo", hc = "Honor", ao = "LG", Ms = "Microsoft", Ns = "Motorola", Ls = "Nvidia", dc = "OnePlus", Cs = "OPPO", ai = "Samsung", pc = "Sharp", li = "Sony", ks = "Xiaomi", xs = "Zebra", gc = "Chrome", mc = "Chromium", qn = "Chromecast", wo = "Edge", ci = "Firefox", ui = "Opera", Fs = "Facebook", wc = "Sogou", xr = "Mobile ", fi = " Browser", da = "Windows", bb = typeof window !== er, Ut = bb && window.navigator ? window.navigator : void 0, Qn = Ut && Ut.userAgentData ? Ut.userAgentData : void 0, vb = function(e, t) {
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
  }, pa = function(e, t) {
    if (typeof e === Jr && e.length > 0) {
      for (var n in e) if (kn(t) == kn(e[n])) return true;
      return false;
    }
    return Qr(e) ? kn(t) == kn(e) : false;
  }, jo = function(e, t) {
    for (var n in e) return /^(browser|cpu|device|engine|os)$/.test(n) || (t ? jo(e[n]) : false);
  }, Qr = function(e) {
    return typeof e === ha;
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
  }, kn = function(e) {
    return Qr(e) ? e.toLowerCase() : e;
  }, js = function(e) {
    return Qr(e) ? Xr(/[^\d\.]/g, e).split(".")[0] : void 0;
  }, xn = function(e) {
    for (var t in e) {
      var n = e[t];
      typeof n == Jr && n.length == 2 ? this[n[0]] = n[1] : this[n] = void 0;
    }
    return this;
  }, Xr = function(e, t) {
    return Qr(t) ? t.replace(e, Kr) : t;
  }, hi = function(e) {
    return Xr(/\\?\"/g, e);
  }, Uo = function(e, t) {
    if (Qr(e)) return e = Xr(/^\s\s*/, e), typeof t === er ? e : e.substring(0, fa);
  }, Us = function(e, t) {
    if (!(!e || !t)) for (var n = 0, i, l, c, f, h, p; n < t.length && !h; ) {
      var v = t[n], w = t[n + 1];
      for (i = l = 0; i < v.length && !h && v[i]; ) if (h = v[i++].exec(e), h) for (c = 0; c < w.length; c++) p = h[++l], f = w[c], typeof f === Jr && f.length > 0 ? f.length === 2 ? typeof f[1] == Do ? this[f[0]] = f[1].call(this, p) : this[f[0]] = f[1] : f.length >= 3 && (typeof f[1] === Do && !(f[1].exec && f[1].test) ? f.length > 3 ? this[f[0]] = p ? f[1].apply(this, f.slice(2)) : void 0 : this[f[0]] = p ? f[1].call(this, p, f[2]) : void 0 : f.length == 3 ? this[f[0]] = p ? p.replace(f[1], f[2]) : void 0 : f.length == 4 ? this[f[0]] = p ? f[3].call(this, p.replace(f[1], f[2])) : void 0 : f.length > 4 && (this[f[0]] = p ? f[3].apply(this, [
        p.replace(f[1], f[2])
      ].concat(f.slice(4))) : void 0)) : this[f] = p || void 0;
      n += 2;
    }
  }, yn = function(e, t) {
    for (var n in t) if (typeof t[n] === Jr && t[n].length > 0) {
      for (var i = 0; i < t[n].length; i++) if (pa(t[n][i], e)) return n === lc ? void 0 : n;
    } else if (pa(t[n], e)) return n === lc ? void 0 : n;
    return t.hasOwnProperty("*") ? t["*"] : e;
  }, yc = {
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
  }, bc = {
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
  }, vc = {
    browser: [
      [
        /\b(?:crmo|crios)\/([\w\.]+)/i
      ],
      [
        Y,
        [
          H,
          xr + "Chrome"
        ]
      ],
      [
        /webview.+edge\/([\w\.]+)/i
      ],
      [
        Y,
        [
          H,
          wo + " WebView"
        ]
      ],
      [
        /edg(?:e|ios|a)?\/([\w\.]+)/i
      ],
      [
        Y,
        [
          H,
          "Edge"
        ]
      ],
      [
        /(opera mini)\/([-\w\.]+)/i,
        /(opera [mobiletab]{3,6})\b.+version\/([-\w\.]+)/i,
        /(opera)(?:.+version\/|[\/ ]+)([\w\.]+)/i
      ],
      [
        H,
        Y
      ],
      [
        /opios[\/ ]+([\w\.]+)/i
      ],
      [
        Y,
        [
          H,
          ui + " Mini"
        ]
      ],
      [
        /\bop(?:rg)?x\/([\w\.]+)/i
      ],
      [
        Y,
        [
          H,
          ui + " GX"
        ]
      ],
      [
        /\bopr\/([\w\.]+)/i
      ],
      [
        Y,
        [
          H,
          ui
        ]
      ],
      [
        /\bb[ai]*d(?:uhd|[ub]*[aekoprswx]{5,6})[\/ ]?([\w\.]+)/i
      ],
      [
        Y,
        [
          H,
          "Baidu"
        ]
      ],
      [
        /\b(?:mxbrowser|mxios|myie2)\/?([-\w\.]*)\b/i
      ],
      [
        Y,
        [
          H,
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
        H,
        Y
      ],
      [
        /quark(?:pc)?\/([-\w\.]+)/i
      ],
      [
        Y,
        [
          H,
          "Quark"
        ]
      ],
      [
        /\bddg\/([\w\.]+)/i
      ],
      [
        Y,
        [
          H,
          "DuckDuckGo"
        ]
      ],
      [
        /(?:\buc? ?browser|(?:juc.+)ucweb)[\/ ]?([\w\.]+)/i
      ],
      [
        Y,
        [
          H,
          "UCBrowser"
        ]
      ],
      [
        /microm.+\bqbcore\/([\w\.]+)/i,
        /\bqbcore\/([\w\.]+).+microm/i,
        /micromessenger\/([\w\.]+)/i
      ],
      [
        Y,
        [
          H,
          "WeChat"
        ]
      ],
      [
        /konqueror\/([\w\.]+)/i
      ],
      [
        Y,
        [
          H,
          "Konqueror"
        ]
      ],
      [
        /trident.+rv[: ]([\w\.]{1,9})\b.+like gecko/i
      ],
      [
        Y,
        [
          H,
          "IE"
        ]
      ],
      [
        /ya(?:search)?browser\/([\w\.]+)/i
      ],
      [
        Y,
        [
          H,
          "Yandex"
        ]
      ],
      [
        /slbrowser\/([\w\.]+)/i
      ],
      [
        Y,
        [
          H,
          "Smart " + Rs + fi
        ]
      ],
      [
        /(avast|avg)\/([\w\.]+)/i
      ],
      [
        [
          H,
          /(.+)/,
          "$1 Secure" + fi
        ],
        Y
      ],
      [
        /\bfocus\/([\w\.]+)/i
      ],
      [
        Y,
        [
          H,
          ci + " Focus"
        ]
      ],
      [
        /\bopt\/([\w\.]+)/i
      ],
      [
        Y,
        [
          H,
          ui + " Touch"
        ]
      ],
      [
        /coc_coc\w+\/([\w\.]+)/i
      ],
      [
        Y,
        [
          H,
          "Coc Coc"
        ]
      ],
      [
        /dolfin\/([\w\.]+)/i
      ],
      [
        Y,
        [
          H,
          "Dolphin"
        ]
      ],
      [
        /coast\/([\w\.]+)/i
      ],
      [
        Y,
        [
          H,
          ui + " Coast"
        ]
      ],
      [
        /miuibrowser\/([\w\.]+)/i
      ],
      [
        Y,
        [
          H,
          "MIUI" + fi
        ]
      ],
      [
        /fxios\/([\w\.-]+)/i
      ],
      [
        Y,
        [
          H,
          xr + ci
        ]
      ],
      [
        /\bqihoobrowser\/?([\w\.]*)/i
      ],
      [
        Y,
        [
          H,
          "360"
        ]
      ],
      [
        /\b(qq)\/([\w\.]+)/i
      ],
      [
        [
          H,
          /(.+)/,
          "$1Browser"
        ],
        Y
      ],
      [
        /(oculus|sailfish|huawei|vivo|pico)browser\/([\w\.]+)/i
      ],
      [
        [
          H,
          /(.+)/,
          "$1" + fi
        ],
        Y
      ],
      [
        /samsungbrowser\/([\w\.]+)/i
      ],
      [
        Y,
        [
          H,
          ai + " Internet"
        ]
      ],
      [
        /metasr[\/ ]?([\d\.]+)/i
      ],
      [
        Y,
        [
          H,
          wc + " Explorer"
        ]
      ],
      [
        /(sogou)mo\w+\/([\d\.]+)/i
      ],
      [
        [
          H,
          wc + " Mobile"
        ],
        Y
      ],
      [
        /(electron)\/([\w\.]+) safari/i,
        /(tesla)(?: qtcarbrowser|\/(20\d\d\.[-\w\.]+))/i,
        /m?(qqbrowser|2345(?=browser|chrome|explorer))\w*[\/ ]?v?([\w\.]+)/i
      ],
      [
        H,
        Y
      ],
      [
        /(lbbrowser|rekonq)/i
      ],
      [
        H
      ],
      [
        /ome\/([\w\.]+) \w* ?(iron) saf/i,
        /ome\/([\w\.]+).+qihu (360)[es]e/i
      ],
      [
        Y,
        H
      ],
      [
        /((?:fban\/fbios|fb_iab\/fb4a)(?!.+fbav)|;fbav\/([\w\.]+);)/i
      ],
      [
        [
          H,
          Fs
        ],
        Y,
        [
          F,
          si
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
        H,
        Y,
        [
          F,
          si
        ]
      ],
      [
        /\bgsa\/([\w\.]+) .*safari\//i
      ],
      [
        Y,
        [
          H,
          "GSA"
        ],
        [
          F,
          si
        ]
      ],
      [
        /musical_ly(?:.+app_?version\/|_)([\w\.]+)/i
      ],
      [
        Y,
        [
          H,
          "TikTok"
        ],
        [
          F,
          si
        ]
      ],
      [
        /\[(linkedin)app\]/i
      ],
      [
        H,
        [
          F,
          si
        ]
      ],
      [
        /(chromium)[\/ ]([-\w\.]+)/i
      ],
      [
        H,
        Y
      ],
      [
        /headlesschrome(?:\/([\w\.]+)| )/i
      ],
      [
        Y,
        [
          H,
          gc + " Headless"
        ]
      ],
      [
        /wv\).+chrome\/([\w\.]+).+edgw\//i
      ],
      [
        Y,
        [
          H,
          wo + " WebView2"
        ]
      ],
      [
        / wv\).+(chrome)\/([\w\.]+)/i
      ],
      [
        [
          H,
          gc + " WebView"
        ],
        Y
      ],
      [
        /droid.+ version\/([\w\.]+)\b.+(?:mobile safari|safari)/i
      ],
      [
        Y,
        [
          H,
          "Android" + fi
        ]
      ],
      [
        /chrome\/([\w\.]+) mobile/i
      ],
      [
        Y,
        [
          H,
          xr + "Chrome"
        ]
      ],
      [
        /(chrome|omniweb|arora|[tizenoka]{5} ?browser)\/v?([\w\.]+)/i
      ],
      [
        H,
        Y
      ],
      [
        /version\/([\w\.\,]+) .*mobile(?:\/\w+ | ?)safari/i
      ],
      [
        Y,
        [
          H,
          xr + "Safari"
        ]
      ],
      [
        /iphone .*mobile(?:\/\w+ | ?)safari/i
      ],
      [
        [
          H,
          xr + "Safari"
        ]
      ],
      [
        /version\/([\w\.\,]+) .*(safari)/i
      ],
      [
        Y,
        H
      ],
      [
        /webkit.+?(mobile ?safari|safari)(\/[\w\.]+)/i
      ],
      [
        H,
        [
          Y,
          "1"
        ]
      ],
      [
        /(webkit|khtml)\/([\w\.]+)/i
      ],
      [
        H,
        Y
      ],
      [
        /(?:mobile|tablet);.*(firefox)\/([\w\.-]+)/i
      ],
      [
        [
          H,
          xr + ci
        ],
        Y
      ],
      [
        /(navigator|netscape\d?)\/([-\w\.]+)/i
      ],
      [
        [
          H,
          "Netscape"
        ],
        Y
      ],
      [
        /(wolvic|librewolf)\/([\w\.]+)/i
      ],
      [
        H,
        Y
      ],
      [
        /mobile vr; rv:([\w\.]+)\).+firefox/i
      ],
      [
        Y,
        [
          H,
          ci + " Reality"
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
        H,
        [
          Y,
          /_/g,
          "."
        ]
      ],
      [
        /(cobalt)\/([\w\.]+)/i
      ],
      [
        H,
        [
          Y,
          /[^\d\.]+./,
          Kr
        ]
      ]
    ],
    cpu: [
      [
        /\b((amd|x|x86[-_]?|wow|win)64)\b/i
      ],
      [
        [
          jt,
          "amd64"
        ]
      ],
      [
        /(ia32(?=;))/i,
        /\b((i[346]|x)86)(pc)?\b/i
      ],
      [
        [
          jt,
          "ia32"
        ]
      ],
      [
        /\b(aarch64|arm(v?[89]e?l?|_?64))\b/i
      ],
      [
        [
          jt,
          "arm64"
        ]
      ],
      [
        /\b(arm(v[67])?ht?n?[fl]p?)\b/i
      ],
      [
        [
          jt,
          "armhf"
        ]
      ],
      [
        /( (ce|mobile); ppc;|\/[\w\.]+arm\b)/i
      ],
      [
        [
          jt,
          "arm"
        ]
      ],
      [
        /((ppc|powerpc)(64)?)( mac|;|\))/i
      ],
      [
        [
          jt,
          /ower/,
          Kr,
          kn
        ]
      ],
      [
        / sun4\w[;\)]/i
      ],
      [
        [
          jt,
          "sparc"
        ]
      ],
      [
        /\b(avr32|ia64(?=;)|68k(?=\))|\barm(?=v([1-7]|[5-7]1)l?|;|eabi)|(irix|mips|sparc)(64)?\b|pa-risc)/i
      ],
      [
        [
          jt,
          kn
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
          B,
          ai
        ],
        [
          F,
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
          B,
          ai
        ],
        [
          F,
          Se
        ]
      ],
      [
        /(?:\/|\()(ip(?:hone|od)[\w, ]*)(?:\/|;)/i
      ],
      [
        $,
        [
          B,
          kr
        ],
        [
          F,
          Se
        ]
      ],
      [
        /\((ipad);[-\w\),; ]+apple/i,
        /applecoremedia\/[\w\.]+ \((ipad)/i,
        /\b(ipad)\d\d?,\d\d?[;\]].+ios/i
      ],
      [
        $,
        [
          B,
          kr
        ],
        [
          F,
          $e
        ]
      ],
      [
        /(macintosh);/i
      ],
      [
        $,
        [
          B,
          kr
        ]
      ],
      [
        /\b(sh-?[altvz]?\d\d[a-ekm]?)/i
      ],
      [
        $,
        [
          B,
          pc
        ],
        [
          F,
          Se
        ]
      ],
      [
        /\b((?:brt|eln|hey2?|gdi|jdn)-a?[lnw]09|(?:ag[rm]3?|jdn2|kob2)-a?[lw]0[09]hn)(?: bui|\)|;)/i
      ],
      [
        $,
        [
          B,
          hc
        ],
        [
          F,
          $e
        ]
      ],
      [
        /honor([-\w ]+)[;\)]/i
      ],
      [
        $,
        [
          B,
          hc
        ],
        [
          F,
          Se
        ]
      ],
      [
        /\b((?:ag[rs][2356]?k?|bah[234]?|bg[2o]|bt[kv]|cmr|cpn|db[ry]2?|jdn2|got|kob2?k?|mon|pce|scm|sht?|[tw]gr|vrd)-[ad]?[lw][0125][09]b?|605hw|bg2-u03|(?:gem|fdr|m2|ple|t1)-[7a]0[1-4][lu]|t1-a2[13][lw]|mediapad[\w\. ]*(?= bui|\)))\b(?!.+d\/s)/i
      ],
      [
        $,
        [
          B,
          fc
        ],
        [
          F,
          $e
        ]
      ],
      [
        /(?:huawei)([-\w ]+)[;\)]/i,
        /\b(nexus 6p|\w{2,4}e?-[atu]?[ln][\dx][012359c][adn]?)\b(?!.+d\/s)/i
      ],
      [
        $,
        [
          B,
          fc
        ],
        [
          F,
          Se
        ]
      ],
      [
        /oid[^\)]+; (2[\dbc]{4}(182|283|rp\w{2})[cgl]|m2105k81a?c)(?: bui|\))/i,
        /\b((?:red)?mi[-_ ]?pad[\w- ]*)(?: bui|\))/i
      ],
      [
        [
          $,
          /_/g,
          " "
        ],
        [
          B,
          ks
        ],
        [
          F,
          $e
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
          $,
          /_/g,
          " "
        ],
        [
          B,
          ks
        ],
        [
          F,
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
          B,
          dc
        ],
        [
          F,
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
          B,
          Cs
        ],
        [
          F,
          Se
        ]
      ],
      [
        /\b(opd2(\d{3}a?))(?: bui|\))/i
      ],
      [
        $,
        [
          B,
          yn,
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
          F,
          $e
        ]
      ],
      [
        /(vivo (5r?|6|8l?|go|one|s|x[il]?[2-4]?)[\w\+ ]*)(?: bui|\))/i
      ],
      [
        $,
        [
          B,
          "BLU"
        ],
        [
          F,
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
          B,
          "Vivo"
        ],
        [
          F,
          Se
        ]
      ],
      [
        /\b(rmx[1-3]\d{3})(?: bui|;|\))/i
      ],
      [
        $,
        [
          B,
          "Realme"
        ],
        [
          F,
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
          B,
          Rs
        ],
        [
          F,
          $e
        ]
      ],
      [
        /lenovo[-_ ]?([-\w ]+?)(?: bui|\)|\/)/i
      ],
      [
        $,
        [
          B,
          Rs
        ],
        [
          F,
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
          B,
          Ns
        ],
        [
          F,
          Se
        ]
      ],
      [
        /\b(mz60\d|xoom[2 ]{0,2}) build\//i
      ],
      [
        $,
        [
          B,
          Ns
        ],
        [
          F,
          $e
        ]
      ],
      [
        /((?=lg)?[vl]k\-?\d{3}) bui| 3\.[-\w; ]{10}lg?-([06cv9]{3,4})/i
      ],
      [
        $,
        [
          B,
          ao
        ],
        [
          F,
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
          B,
          ao
        ],
        [
          F,
          Se
        ]
      ],
      [
        /(nokia) (t[12][01])/i
      ],
      [
        B,
        $,
        [
          F,
          $e
        ]
      ],
      [
        /(?:maemo|nokia).*(n900|lumia \d+|rm-\d+)/i,
        /nokia[-_ ]?(([-\w\. ]*))/i
      ],
      [
        [
          $,
          /_/g,
          " "
        ],
        [
          F,
          Se
        ],
        [
          B,
          "Nokia"
        ]
      ],
      [
        /(pixel (c|tablet))\b/i
      ],
      [
        $,
        [
          B,
          mr
        ],
        [
          F,
          $e
        ]
      ],
      [
        /droid.+;(?: google)? (g(01[13]a|020[aem]|025[jn]|1b60|1f8f|2ybb|4s1m|576d|5nz6|8hhn|8vou|a02099|c15s|d1yq|e2ae|ec77|gh2x|kv4x|p4bc|pj41|r83y|tt9q|ur25|wvk6)|pixel[\d ]*a?( pro)?( xl)?( fold)?( \(5g\))?)( bui|\))/i
      ],
      [
        $,
        [
          B,
          mr
        ],
        [
          F,
          Se
        ]
      ],
      [
        /(google) (pixelbook( go)?)/i
      ],
      [
        B,
        $
      ],
      [
        /droid.+; (a?\d[0-2]{2}so|[c-g]\d{4}|so[-gl]\w+|xq-\w\w\d\d)(?= bui|\).+chrome\/(?![1-6]{0,1}\d\.))/i
      ],
      [
        $,
        [
          B,
          li
        ],
        [
          F,
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
          B,
          li
        ],
        [
          F,
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
          B,
          so
        ],
        [
          F,
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
          B,
          so
        ],
        [
          F,
          Se
        ]
      ],
      [
        /(playbook);[-\w\),; ]+(rim)/i
      ],
      [
        $,
        B,
        [
          F,
          $e
        ]
      ],
      [
        /\b((?:bb[a-f]|st[hv])100-\d)/i,
        /\(bb10; (\w+)/i
      ],
      [
        $,
        [
          B,
          uc
        ],
        [
          F,
          Se
        ]
      ],
      [
        /(?:\b|asus_)(transfo[prime ]{4,10} \w+|eeepc|slider \w+|nexus 7|padfone|p00[cj])/i
      ],
      [
        $,
        [
          B,
          cc
        ],
        [
          F,
          $e
        ]
      ],
      [
        / (z[bes]6[027][012][km][ls]|zenfone \d\w?)\b/i
      ],
      [
        $,
        [
          B,
          cc
        ],
        [
          F,
          Se
        ]
      ],
      [
        /(nexus 9)/i
      ],
      [
        $,
        [
          B,
          "HTC"
        ],
        [
          F,
          $e
        ]
      ],
      [
        /(htc)[-;_ ]{1,2}([\w ]+(?=\)| bui)|\w+)/i,
        /(zte)[- ]([\w ]+?)(?: bui|\/|\))/i,
        /(alcatel|geeksphone|nexian|panasonic(?!(?:;|\.))|sony(?!-bra))[-_ ]?([-\w]*)/i
      ],
      [
        B,
        [
          $,
          /_/g,
          " "
        ],
        [
          F,
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
          B,
          "TCL"
        ],
        [
          F,
          $e
        ]
      ],
      [
        /droid [\w\.]+; (418(?:7d|8v)|5087z|5102l|61(?:02[dh]|25[adfh]|27[ai]|56[dh]|59k|65[ah])|a509dl|t(?:43(?:0w|1[adepqu])|50(?:6d|7[adju])|6(?:09dl|10k|12b|71[efho]|76[hjk])|7(?:66[ahju]|67[hw]|7[045][bh]|71[hk]|73o|76[ho]|79w|81[hks]?|82h|90[bhsy]|99b)|810[hs]))(_\w(\w|\w\w))?(\)| bui)/i
      ],
      [
        $,
        [
          B,
          "TCL"
        ],
        [
          F,
          Se
        ]
      ],
      [
        /(itel) ((\w+))/i
      ],
      [
        [
          B,
          kn
        ],
        $,
        [
          F,
          yn,
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
          B,
          "Acer"
        ],
        [
          F,
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
          B,
          "Meizu"
        ],
        [
          F,
          Se
        ]
      ],
      [
        /; ((?:power )?armor(?:[\w ]{0,8}))(?: bui|\))/i
      ],
      [
        $,
        [
          B,
          "Ulefone"
        ],
        [
          F,
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
          B,
          "Energizer"
        ],
        [
          F,
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
          B,
          "Cat"
        ],
        [
          F,
          Se
        ]
      ],
      [
        /((?:new )?andromax[\w- ]+)(?: bui|\))/i
      ],
      [
        $,
        [
          B,
          "Smartfren"
        ],
        [
          F,
          Se
        ]
      ],
      [
        /droid.+; (a(in)?(0(15|59|6[35])|142)p?)/i
      ],
      [
        $,
        [
          B,
          "Nothing"
        ],
        [
          F,
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
          B,
          "Archos"
        ],
        [
          F,
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
          B,
          "Archos"
        ],
        [
          F,
          Se
        ]
      ],
      [
        /; (n159v)/i
      ],
      [
        $,
        [
          B,
          "HMD"
        ],
        [
          F,
          Se
        ]
      ],
      [
        /(imo) (tab \w+)/i,
        /(infinix|tecno) (x1101b?|p904|dp(7c|8d|10a)( pro)?|p70[1-3]a?|p904|t1101)/i
      ],
      [
        B,
        $,
        [
          F,
          $e
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
        B,
        $,
        [
          F,
          Se
        ]
      ],
      [
        /(kobo)\s(ereader|touch)/i,
        /(hp).+(touchpad(?!.+tablet)|tablet)/i,
        /(kindle)\/([\w\.]+)/i
      ],
      [
        B,
        $,
        [
          F,
          $e
        ]
      ],
      [
        /(surface duo)/i
      ],
      [
        $,
        [
          B,
          Ms
        ],
        [
          F,
          $e
        ]
      ],
      [
        /droid [\d\.]+; (fp\du?)(?: b|\))/i
      ],
      [
        $,
        [
          B,
          "Fairphone"
        ],
        [
          F,
          Se
        ]
      ],
      [
        /((?:tegranote|shield t(?!.+d tv))[\w- ]*?)(?: b|\))/i
      ],
      [
        $,
        [
          B,
          Ls
        ],
        [
          F,
          $e
        ]
      ],
      [
        /(sprint) (\w+)/i
      ],
      [
        B,
        $,
        [
          F,
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
          B,
          Ms
        ],
        [
          F,
          Se
        ]
      ],
      [
        /droid.+; ([c6]+|et5[16]|mc[239][23]x?|vc8[03]x?)\)/i
      ],
      [
        $,
        [
          B,
          xs
        ],
        [
          F,
          $e
        ]
      ],
      [
        /droid.+; (ec30|ps20|tc[2-8]\d[kx])\)/i
      ],
      [
        $,
        [
          B,
          xs
        ],
        [
          F,
          Se
        ]
      ],
      [
        /smart-tv.+(samsung)/i
      ],
      [
        B,
        [
          F,
          ct
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
          B,
          ai
        ],
        [
          F,
          ct
        ]
      ],
      [
        /(vizio)(?: |.+model\/)(\w+-\w+)/i,
        /tcast.+(lg)e?. ([-\w]+)/i
      ],
      [
        B,
        $,
        [
          F,
          ct
        ]
      ],
      [
        /(nux; netcast.+smarttv|lg (netcast\.tv-201\d|android tv))/i
      ],
      [
        [
          B,
          ao
        ],
        [
          F,
          ct
        ]
      ],
      [
        /(apple) ?tv/i
      ],
      [
        B,
        [
          $,
          kr + " TV"
        ],
        [
          F,
          ct
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
          B,
          mr
        ],
        [
          F,
          ct
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
          B,
          mr
        ],
        [
          F,
          ct
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
          B,
          mr
        ],
        [
          F,
          ct
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
          B,
          mr
        ],
        [
          F,
          ct
        ]
      ],
      [
        /(portaltv)/i
      ],
      [
        $,
        [
          B,
          Fs
        ],
        [
          F,
          ct
        ]
      ],
      [
        /droid.+aft(\w+)( bui|\))/i
      ],
      [
        $,
        [
          B,
          so
        ],
        [
          F,
          ct
        ]
      ],
      [
        /(shield \w+ tv)/i
      ],
      [
        $,
        [
          B,
          Ls
        ],
        [
          F,
          ct
        ]
      ],
      [
        /\(dtv[\);].+(aquos)/i,
        /(aquos-tv[\w ]+)\)/i
      ],
      [
        $,
        [
          B,
          pc
        ],
        [
          F,
          ct
        ]
      ],
      [
        /(bravia[\w ]+)( bui|\))/i
      ],
      [
        $,
        [
          B,
          li
        ],
        [
          F,
          ct
        ]
      ],
      [
        /(mi(tv|box)-?\w+) bui/i
      ],
      [
        $,
        [
          B,
          ks
        ],
        [
          F,
          ct
        ]
      ],
      [
        /Hbbtv.*(technisat) (.*);/i
      ],
      [
        B,
        $,
        [
          F,
          ct
        ]
      ],
      [
        /\b(roku)[\dx]*[\)\/]((?:dvp-)?[\d\.]*)/i,
        /hbbtv\/\d+\.\d+\.\d+ +\([\w\+ ]*; *([\w\d][^;]*);([^;]*)/i
      ],
      [
        [
          B,
          /.+\/(\w+)/,
          "$1",
          yn,
          {
            LG: "lge"
          }
        ],
        [
          $,
          Uo
        ],
        [
          F,
          ct
        ]
      ],
      [
        /droid.+; ([\w- ]+) (?:android tv|smart[- ]?tv)/i
      ],
      [
        $,
        [
          F,
          ct
        ]
      ],
      [
        /\b(android tv|smart[- ]?tv|opera tv|tv; rv:|large screen[\w ]+safari)\b/i
      ],
      [
        [
          F,
          ct
        ]
      ],
      [
        /(playstation \w+)/i
      ],
      [
        $,
        [
          B,
          li
        ],
        [
          F,
          wi
        ]
      ],
      [
        /\b(xbox(?: one)?(?!; xbox))[\); ]/i
      ],
      [
        $,
        [
          B,
          Ms
        ],
        [
          F,
          wi
        ]
      ],
      [
        /(ouya)/i,
        /(nintendo) (\w+)/i,
        /(retroid) (pocket ([^\)]+))/i
      ],
      [
        B,
        $,
        [
          F,
          wi
        ]
      ],
      [
        /droid.+; (shield)( bui|\))/i
      ],
      [
        $,
        [
          B,
          Ls
        ],
        [
          F,
          wi
        ]
      ],
      [
        /\b(sm-[lr]\d\d[0156][fnuw]?s?|gear live)\b/i
      ],
      [
        $,
        [
          B,
          ai
        ],
        [
          F,
          mn
        ]
      ],
      [
        /((pebble))app/i,
        /(asus|google|lg|oppo) ((pixel |zen)?watch[\w ]*)( bui|\))/i
      ],
      [
        B,
        $,
        [
          F,
          mn
        ]
      ],
      [
        /(ow(?:19|20)?we?[1-3]{1,3})/i
      ],
      [
        $,
        [
          B,
          Cs
        ],
        [
          F,
          mn
        ]
      ],
      [
        /(watch)(?: ?os[,\/]|\d,\d\/)[\d\.]+/i
      ],
      [
        $,
        [
          B,
          kr
        ],
        [
          F,
          mn
        ]
      ],
      [
        /(opwwe\d{3})/i
      ],
      [
        $,
        [
          B,
          dc
        ],
        [
          F,
          mn
        ]
      ],
      [
        /(moto 360)/i
      ],
      [
        $,
        [
          B,
          Ns
        ],
        [
          F,
          mn
        ]
      ],
      [
        /(smartwatch 3)/i
      ],
      [
        $,
        [
          B,
          li
        ],
        [
          F,
          mn
        ]
      ],
      [
        /(g watch r)/i
      ],
      [
        $,
        [
          B,
          ao
        ],
        [
          F,
          mn
        ]
      ],
      [
        /droid.+; (wt63?0{2,3})\)/i
      ],
      [
        $,
        [
          B,
          xs
        ],
        [
          F,
          mn
        ]
      ],
      [
        /droid.+; (glass) \d/i
      ],
      [
        $,
        [
          B,
          mr
        ],
        [
          F,
          oo
        ]
      ],
      [
        /(pico) (4|neo3(?: link|pro)?)/i
      ],
      [
        B,
        $,
        [
          F,
          oo
        ]
      ],
      [
        /(quest( \d| pro)?s?).+vr/i
      ],
      [
        $,
        [
          B,
          Fs
        ],
        [
          F,
          oo
        ]
      ],
      [
        /mobile vr; rv.+firefox/i
      ],
      [
        [
          F,
          oo
        ]
      ],
      [
        /(tesla)(?: qtcarbrowser|\/[-\w\.]+)/i
      ],
      [
        B,
        [
          F,
          yi
        ]
      ],
      [
        /(aeobc)\b/i
      ],
      [
        $,
        [
          B,
          so
        ],
        [
          F,
          yi
        ]
      ],
      [
        /(homepod).+mac os/i
      ],
      [
        $,
        [
          B,
          kr
        ],
        [
          F,
          yi
        ]
      ],
      [
        /windows iot/i
      ],
      [
        [
          F,
          yi
        ]
      ],
      [
        /droid .+?; ([^;]+?)(?: bui|; wv\)|\) applew).+?(mobile|vr|\d) safari/i
      ],
      [
        $,
        [
          F,
          yn,
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
          F,
          $e
        ]
      ],
      [
        /(phone|mobile(?:[;\/]| [ \w\/\.]*safari)|pda(?=.+windows ce))/i
      ],
      [
        [
          F,
          Se
        ]
      ],
      [
        /droid .+?; ([\w\. -]+)( bui|\))/i
      ],
      [
        $,
        [
          B,
          "Generic"
        ]
      ]
    ],
    engine: [
      [
        /windows.+ edge\/([\w\.]+)/i
      ],
      [
        Y,
        [
          H,
          wo + "HTML"
        ]
      ],
      [
        /(arkweb)\/([\w\.]+)/i
      ],
      [
        H,
        Y
      ],
      [
        /webkit\/537\.36.+chrome\/(?!27)([\w\.]+)/i
      ],
      [
        Y,
        [
          H,
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
        H,
        Y
      ],
      [
        /ladybird\//i
      ],
      [
        [
          H,
          "LibWeb"
        ]
      ],
      [
        /rv\:([\w\.]{1,9})\b.+(gecko)/i
      ],
      [
        Y,
        H
      ]
    ],
    os: [
      [
        /(windows nt) (6\.[23]); arm/i
      ],
      [
        [
          H,
          /N/,
          "R"
        ],
        [
          Y,
          yn,
          yc
        ]
      ],
      [
        /(windows (?:phone|mobile|iot))(?: os)?[\/ ]?([\d\.]*( se)?)/i,
        /(windows)[\/ ](1[01]|2000|3\.1|7|8(\.1)?|9[58]|me|server 20\d\d( r2)?|vista|xp)/i
      ],
      [
        H,
        Y
      ],
      [
        /windows nt ?([\d\.\)]*)(?!.+xbox)/i,
        /\bwin(?=3| ?9|n)(?:nt| 9x )?([\d\.;]*)/i
      ],
      [
        [
          Y,
          /(;|\))/g,
          "",
          yn,
          yc
        ],
        [
          H,
          da
        ]
      ],
      [
        /(windows ce)\/?([\d\.]*)/i
      ],
      [
        H,
        Y
      ],
      [
        /[adehimnop]{4,7}\b(?:.*os ([\w]+) like mac|; opera)/i,
        /(?:ios;fbsv\/|iphone.+ios[\/ ])([\d\.]+)/i,
        /cfnetwork\/.+darwin/i
      ],
      [
        [
          Y,
          /_/g,
          "."
        ],
        [
          H,
          "iOS"
        ]
      ],
      [
        /(mac os x) ?([\w\. ]*)/i,
        /(macintosh|mac_powerpc\b)(?!.+(haiku|morphos))/i
      ],
      [
        [
          H,
          "macOS"
        ],
        [
          Y,
          /_/g,
          "."
        ]
      ],
      [
        /android ([\d\.]+).*crkey/i
      ],
      [
        Y,
        [
          H,
          qn + " Android"
        ]
      ],
      [
        /fuchsia.*crkey\/([\d\.]+)/i
      ],
      [
        Y,
        [
          H,
          qn + " Fuchsia"
        ]
      ],
      [
        /crkey\/([\d\.]+).*devicetype\/smartspeaker/i
      ],
      [
        Y,
        [
          H,
          qn + " SmartSpeaker"
        ]
      ],
      [
        /linux.*crkey\/([\d\.]+)/i
      ],
      [
        Y,
        [
          H,
          qn + " Linux"
        ]
      ],
      [
        /crkey\/([\d\.]+)/i
      ],
      [
        Y,
        [
          H,
          qn
        ]
      ],
      [
        /droid ([\w\.]+)\b.+(android[- ]x86)/i
      ],
      [
        Y,
        H
      ],
      [
        /(ubuntu) ([\w\.]+) like android/i
      ],
      [
        [
          H,
          /(.+)/,
          "$1 Touch"
        ],
        Y
      ],
      [
        /(harmonyos)[\/ ]?([\d\.]*)/i,
        /(android|bada|blackberry|kaios|maemo|meego|openharmony|qnx|rim tablet os|sailfish|series40|symbian|tizen)\w*[-\/\.; ]?([\d\.]*)/i
      ],
      [
        H,
        Y
      ],
      [
        /\(bb(10);/i
      ],
      [
        Y,
        [
          H,
          uc
        ]
      ],
      [
        /(?:symbian ?os|symbos|s60(?=;)|series ?60)[-\/ ]?([\w\.]*)/i
      ],
      [
        Y,
        [
          H,
          "Symbian"
        ]
      ],
      [
        /mozilla\/[\d\.]+ \((?:mobile|tablet|tv|mobile; [\w ]+); rv:.+ gecko\/([\w\.]+)/i
      ],
      [
        Y,
        [
          H,
          ci + " OS"
        ]
      ],
      [
        /\b(?:hp)?wos(?:browser)?\/([\w\.]+)/i,
        /webos(?:[ \/]?|\.tv-20(?=2[2-9]))(\d[\d\.]*)/i
      ],
      [
        Y,
        [
          H,
          "webOS"
        ]
      ],
      [
        /web0s;.+?(?:chr[o0]me|safari)\/(\d+)/i
      ],
      [
        [
          Y,
          yn,
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
          H,
          "webOS"
        ]
      ],
      [
        /watch(?: ?os[,\/]|\d,\d\/)([\d\.]+)/i
      ],
      [
        Y,
        [
          H,
          "watchOS"
        ]
      ],
      [
        /(cros) [\w]+(?:\)| ([\w\.]+)\b)/i
      ],
      [
        [
          H,
          "Chrome OS"
        ],
        Y
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
        H,
        Y
      ],
      [
        /(sunos) ?([\d\.]*)/i
      ],
      [
        [
          H,
          "Solaris"
        ],
        Y
      ],
      [
        /\b(beos|os\/2|amigaos|openvms|hp-ux|serenityos)/i,
        /(unix) ?([\w\.]*)/i
      ],
      [
        H,
        Y
      ]
    ]
  }, lo = (function() {
    var e = {
      init: {},
      isIgnore: {},
      isIgnoreRgx: {},
      toString: {}
    };
    return xn.call(e.init, [
      [
        Dt,
        [
          H,
          Y,
          Wi,
          F
        ]
      ],
      [
        Cn,
        [
          jt
        ]
      ],
      [
        En,
        [
          F,
          $,
          B
        ]
      ],
      [
        ln,
        [
          H,
          Y
        ]
      ],
      [
        tn,
        [
          H,
          Y
        ]
      ]
    ]), xn.call(e.isIgnore, [
      [
        Dt,
        [
          Y,
          Wi
        ]
      ],
      [
        ln,
        [
          Y
        ]
      ],
      [
        tn,
        [
          Y
        ]
      ]
    ]), xn.call(e.isIgnoreRgx, [
      [
        Dt,
        / ?browser$/i
      ],
      [
        tn,
        / ?os$/i
      ]
    ]), xn.call(e.toString, [
      [
        Dt,
        [
          H,
          Y
        ]
      ],
      [
        Cn,
        [
          jt
        ]
      ],
      [
        En,
        [
          B,
          $
        ]
      ],
      [
        ln,
        [
          H,
          Y
        ]
      ],
      [
        tn,
        [
          H,
          Y
        ]
      ]
    ]), e;
  })(), Ib = function(e, t) {
    var n = lo.init[t], i = lo.isIgnore[t] || 0, l = lo.isIgnoreRgx[t] || 0, c = lo.toString[t] || 0;
    function f() {
      xn.call(this, n);
    }
    return f.prototype.getItem = function() {
      return e;
    }, f.prototype.withClientHints = function() {
      return Qn ? Qn.getHighEntropyValues(xf).then(function(h) {
        return e.setCH(new Ff(h, false)).parseCH().get();
      }) : e.parseCH().get();
    }, f.prototype.withFeatureCheck = function() {
      return e.detectFeature().get();
    }, t != Br && (f.prototype.is = function(h) {
      var p = false;
      for (var v in this) if (this.hasOwnProperty(v) && !pa(i, v) && kn(l ? Xr(l, this[v]) : this[v]) == kn(l ? Xr(l, h) : h)) {
        if (p = true, h != er) break;
      } else if (h == er && p) {
        p = !p;
        break;
      }
      return p;
    }, f.prototype.toString = function() {
      var h = Kr;
      for (var p in c) typeof this[c[p]] !== er && (h += (h ? " " : Kr) + this[c[p]]);
      return h || er;
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
  function Ff(e, t) {
    if (e = e || {}, xn.call(this, xf), t) xn.call(this, [
      [
        za,
        Ds(e[cr])
      ],
      [
        Ha,
        Ds(e[hb])
      ],
      [
        Se,
        /\?1/.test(e[mb])
      ],
      [
        $,
        hi(e[wb])
      ],
      [
        zr,
        hi(e[kf])
      ],
      [
        Va,
        hi(e[yb])
      ],
      [
        jt,
        hi(e[db])
      ],
      [
        vr,
        Ds(e[gb])
      ],
      [
        as,
        hi(e[pb])
      ]
    ]);
    else for (var n in e) this.hasOwnProperty(n) && typeof e[n] !== er && (this[n] = e[n]);
  }
  function Ec(e, t, n, i) {
    return this.get = function(l) {
      return l ? this.data.hasOwnProperty(l) ? this.data[l] : void 0 : this.data;
    }, this.set = function(l, c) {
      return this.data[l] = c, this;
    }, this.setCH = function(l) {
      return this.uaCH = l, this;
    }, this.detectFeature = function() {
      if (Ut && Ut.userAgent == this.ua) switch (this.itemType) {
        case Dt:
          Ut.brave && typeof Ut.brave.isBrave == Do && this.set(H, "Brave");
          break;
        case En:
          !this.get(F) && Qn && Qn[Se] && this.set(F, Se), this.get($) == "Macintosh" && Ut && typeof Ut.standalone !== er && Ut.maxTouchPoints && Ut.maxTouchPoints > 2 && this.set($, "iPad").set(F, $e);
          break;
        case tn:
          !this.get(H) && Qn && Qn[zr] && this.set(H, Qn[zr]);
          break;
        case Br:
          var l = this.data, c = function(f) {
            return l[f].getItem().detectFeature().get();
          };
          this.set(Dt, c(Dt)).set(Cn, c(Cn)).set(En, c(En)).set(ln, c(ln)).set(tn, c(tn));
      }
      return this;
    }, this.parseUA = function() {
      return this.itemType != Br && Us.call(this.data, this.ua, this.rgxMap), this.itemType == Dt && this.set(Wi, js(this.get(Y))), this;
    }, this.parseCH = function() {
      var l = this.uaCH, c = this.rgxMap;
      switch (this.itemType) {
        case Dt:
        case ln:
          var f = l[Ha] || l[za], h;
          if (f) for (var p in f) {
            var v = f[p].brand || f[p], w = f[p].version;
            this.itemType == Dt && !/not.a.brand/i.test(v) && (!h || /Chrom/.test(h) && v != mc || h == wo && /WebView2/.test(v)) && (v = yn(v, Eb), h = this.get(H), h && !/Chrom/.test(h) && /Chrom/.test(v) || this.set(H, v).set(Y, w).set(Wi, js(w)), h = v), this.itemType == ln && v == mc && this.set(Y, w);
          }
          break;
        case Cn:
          var I = l[jt];
          I && (I && l[as] == "64" && (I += "64"), Us.call(this.data, I + ";", c));
          break;
        case En:
          if (l[Se] && this.set(F, Se), l[$] && (this.set($, l[$]), !this.get(F) || !this.get(B))) {
            var P = {};
            Us.call(P, "droid 9; " + l[$] + ")", c), !this.get(F) && P.type && this.set(F, P.type), !this.get(B) && P.vendor && this.set(B, P.vendor);
          }
          if (l[vr]) {
            var R;
            if (typeof l[vr] != "string") for (var C = 0; !R && C < l[vr].length; ) R = yn(l[vr][C++], bc);
            else R = yn(l[vr], bc);
            this.set(F, R);
          }
          break;
        case tn:
          var L = l[zr];
          if (L) {
            var Z = l[Va];
            L == da && (Z = parseInt(js(Z), 10) >= 13 ? "11" : "10"), this.set(H, L).set(Y, Z);
          }
          this.get(H) == da && l[$] == "Xbox" && this.set(H, "Xbox").set(Y, void 0);
          break;
        case Br:
          var j = this.data, U = function(ne) {
            return j[ne].getItem().setCH(l).parseCH().get();
          };
          this.set(Dt, U(Dt)).set(Cn, U(Cn)).set(En, U(En)).set(ln, U(ln)).set(tn, U(tn));
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
    if (typeof e === Jr ? (jo(e, true) ? (typeof t === Jr && (n = t), t = e) : (n = e, t = void 0), e = void 0) : typeof e === ha && !jo(t, true) && (n = t, t = void 0), n && typeof n.append === Do) {
      var i = {};
      n.forEach(function(p, v) {
        i[v] = p;
      }), n = i;
    }
    if (!(this instanceof Gn)) return new Gn(e, t, n).getResult();
    var l = typeof e === ha ? e : n && n[ac] ? n[ac] : Ut && Ut.userAgent ? Ut.userAgent : Kr, c = new Ff(n, true), f = t ? vb(vc, t) : vc, h = function(p) {
      return p == Br ? function() {
        return new Ec(p, l, f, c).set("ua", l).set(Dt, this.getBrowser()).set(Cn, this.getCPU()).set(En, this.getDevice()).set(ln, this.getEngine()).set(tn, this.getOS()).get();
      } : function() {
        return new Ec(p, l, f[p], c).parseUA().get();
      };
    };
    return xn.call(this, [
      [
        "getBrowser",
        h(Dt)
      ],
      [
        "getCPU",
        h(Cn)
      ],
      [
        "getDevice",
        h(En)
      ],
      [
        "getEngine",
        h(ln)
      ],
      [
        "getOS",
        h(tn)
      ],
      [
        "getResult",
        h(Br)
      ],
      [
        "getUA",
        function() {
          return l;
        }
      ],
      [
        "setUA",
        function(p) {
          return Qr(p) && (l = p.length > fa ? Uo(p, fa) : p), this;
        }
      ]
    ]).setUA(l), this;
  };
  Gn.VERSION = fb;
  Gn.BROWSER = ls([
    H,
    Y,
    Wi,
    F
  ]);
  Gn.CPU = ls([
    jt
  ]);
  Gn.DEVICE = ls([
    $,
    B,
    F,
    wi,
    Se,
    ct,
    $e,
    mn,
    yi
  ]);
  Gn.ENGINE = Gn.OS = ls([
    H,
    Y
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
        return !t.environment || !t.capabilities ? N(new wt("Invalid platform detection results")) : (console.info("[PlatformDetector] Platform detected:", {
          environment: t.environment,
          isMobile: t.isMobile,
          isTablet: t.isTablet,
          browser: t.browser,
          os: t.os
        }), G(true));
      } catch (t) {
        return N(new wt("Platform detection failed", void 0, t));
      }
    }
  }
  const qa = new Tb();
  Yv = function() {
    return qa.getPlatformContext();
  };
  function _b(e, t, n, i) {
    if (typeof t == "function" ? e !== t || !i : !t.has(e)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
    return n === "m" ? i : n === "a" ? i.call(e) : i ? i.value : t.get(e);
  }
  function Sb(e, t, n, i, l) {
    if (typeof t == "function" ? e !== t || true : !t.has(e)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
    return t.set(e, n), n;
  }
  var yo;
  function Ob(e, t = false) {
    return window.__TAURI_INTERNALS__.transformCallback(e, t);
  }
  async function pt(e, t = {}, n) {
    return window.__TAURI_INTERNALS__.invoke(e, t, n);
  }
  class Ab {
    get rid() {
      return _b(this, yo, "f");
    }
    constructor(t) {
      yo.set(this, void 0), Sb(this, yo, t);
    }
    async close() {
      return pt("plugin:resources|close", {
        rid: this.rid
      });
    }
  }
  yo = /* @__PURE__ */ new WeakMap();
  var Ic;
  (function(e) {
    e.WINDOW_RESIZED = "tauri://resize", e.WINDOW_MOVED = "tauri://move", e.WINDOW_CLOSE_REQUESTED = "tauri://close-requested", e.WINDOW_DESTROYED = "tauri://destroyed", e.WINDOW_FOCUS = "tauri://focus", e.WINDOW_BLUR = "tauri://blur", e.WINDOW_SCALE_FACTOR_CHANGED = "tauri://scale-change", e.WINDOW_THEME_CHANGED = "tauri://theme-changed", e.WINDOW_CREATED = "tauri://window-created", e.WEBVIEW_CREATED = "tauri://webview-created", e.DRAG_ENTER = "tauri://drag-enter", e.DRAG_OVER = "tauri://drag-over", e.DRAG_DROP = "tauri://drag-drop", e.DRAG_LEAVE = "tauri://drag-leave";
  })(Ic || (Ic = {}));
  async function Pb(e, t) {
    window.__TAURI_EVENT_PLUGIN_INTERNALS__.unregisterListener(e, t), await pt("plugin:event|unlisten", {
      event: e,
      eventId: t
    });
  }
  async function Tc(e, t, n) {
    var i;
    const l = (i = void 0) !== null && i !== void 0 ? i : {
      kind: "Any"
    };
    return pt("plugin:event|listen", {
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
      const i = await pt("plugin:store|load", {
        path: t,
        options: n
      });
      return new Go(i);
    }
    static async get(t) {
      return await pt("plugin:store|get_store", {
        path: t
      }).then((n) => n ? new Go(n) : null);
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
      return await Tc("store://change", (i) => {
        i.payload.resourceId === this.rid && i.payload.key === t && n(i.payload.exists ? i.payload.value : void 0);
      });
    }
    async onChange(t) {
      return await Tc("store://change", (n) => {
        n.payload.resourceId === this.rid && t(n.payload.key, n.payload.exists ? n.payload.value : void 0);
      });
    }
  }
  class nt extends Mr {
    constructor(t, n, i) {
      super(t, i);
      __publicField(this, "domain", Zr.STORAGE);
      this.code = n;
    }
  }
  var Xe = ((e) => (e.INITIALIZATION_FAILED = "INITIALIZATION_FAILED", e.NOT_INITIALIZED = "NOT_INITIALIZED", e.SET_FAILED = "SET_FAILED", e.GET_FAILED = "GET_FAILED", e.SAVE_FAILED = "SAVE_FAILED", e.EXPORT_FAILED = "EXPORT_FAILED", e.CLEAR_FAILED = "CLEAR_FAILED", e.REMOVE_FAILED = "REMOVE_FAILED", e))(Xe || {});
  class mt extends Mr {
    constructor(t, n, i) {
      super(t, i);
      __publicField(this, "domain", Zr.GEOLOCATION);
      this.code = n;
    }
  }
  var st = ((e) => (e.INITIALIZATION_FAILED = "INITIALIZATION_FAILED", e.NOT_INITIALIZED = "NOT_INITIALIZED", e.PERMISSION_DENIED = "PERMISSION_DENIED", e.POSITION_UNAVAILABLE = "POSITION_UNAVAILABLE", e.TIMEOUT = "TIMEOUT", e.UNSUPPORTED = "UNSUPPORTED", e.WATCH_FAILED = "WATCH_FAILED", e.CLEAR_WATCH_FAILED = "CLEAR_WATCH_FAILED", e))(st || {});
  class Fr extends Mr {
    constructor(t, n, i) {
      super(t, i);
      __publicField(this, "domain", Zr.GENERIC);
      this.code = n;
    }
  }
  var yr = ((e) => (e.DETECTION_FAILED = "DETECTION_FAILED", e.INVALID_CONTEXT = "INVALID_CONTEXT", e.UNSUPPORTED_PLATFORM = "UNSUPPORTED_PLATFORM", e))(yr || {});
  class Mb {
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
        return N(new nt("Failed to initialize Tauri storage", Xe.INITIALIZATION_FAILED, t));
      }
    }
    async set(t, n) {
      if (!this.store) return N(new nt("Tauri store not initialized", Xe.NOT_INITIALIZED));
      try {
        return await this.store.set(t, n), G(void 0);
      } catch (i) {
        return N(new nt(`Failed to set value for key: ${t}`, Xe.SET_FAILED, i));
      }
    }
    async get(t) {
      if (!this.store) return N(new nt("Tauri store not initialized", Xe.NOT_INITIALIZED));
      try {
        const n = await this.store.get(t);
        return G(n ?? null);
      } catch (n) {
        return N(new nt(`Failed to get value for key: ${t}`, Xe.GET_FAILED, n));
      }
    }
    async save() {
      if (!this.store) return N(new nt("Tauri store not initialized", Xe.NOT_INITIALIZED));
      try {
        return await this.store.save(), G(void 0);
      } catch (t) {
        return N(new nt("Failed to save store", Xe.SAVE_FAILED, t));
      }
    }
    async exportToJson() {
      if (!this.store) return N(new nt("Tauri store not initialized", Xe.NOT_INITIALIZED));
      try {
        const t = await this.store.keys(), n = {};
        for (const i of t) {
          const l = await this.store.get(i);
          n[i] = l;
        }
        return G(JSON.stringify(n, null, 2));
      } catch (t) {
        return N(new nt("Failed to export data to JSON", Xe.EXPORT_FAILED, t));
      }
    }
    async clear() {
      if (!this.store) return N(new nt("Tauri store not initialized", Xe.NOT_INITIALIZED));
      try {
        const t = await this.store.keys();
        for (const n of t) await this.store.delete(n);
        return G(void 0);
      } catch (t) {
        return N(new nt("Failed to clear store", Xe.CLEAR_FAILED, t));
      }
    }
    async remove(t) {
      if (!this.store) return N(new nt("Tauri store not initialized", Xe.NOT_INITIALIZED));
      try {
        return await this.store.delete(t), G(void 0);
      } catch (n) {
        return N(new nt(`Failed to remove key: ${t}`, Xe.REMOVE_FAILED, n));
      }
    }
  }
  class Nb {
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
        return N(new nt("Failed to initialize Web storage", Xe.INITIALIZATION_FAILED, t));
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
      if (!this.db) return N(new nt("Database not initialized", Xe.NOT_INITIALIZED));
      try {
        return await this.executeTransaction("readwrite", (i) => new Promise((l, c) => {
          const f = i.put(Ct(n), t);
          f.onsuccess = () => l(), f.onerror = () => c(new Error("Failed to set value"));
        })), G(void 0);
      } catch (i) {
        return N(new nt(`Failed to set value for key: ${t}`, Xe.SET_FAILED, i));
      }
    }
    async get(t) {
      if (!this.db) return N(new nt("Database not initialized", Xe.NOT_INITIALIZED));
      try {
        const n = await this.executeTransaction("readonly", (i) => new Promise((l, c) => {
          const f = i.get(t);
          f.onsuccess = () => l(f.result), f.onerror = () => c(new Error("Failed to get value"));
        }));
        return G(n);
      } catch (n) {
        return N(new nt(`Failed to get value for key: ${t}`, Xe.GET_FAILED, n));
      }
    }
    async save() {
      return G(void 0);
    }
    async exportToJson() {
      if (!this.db) return N(new nt("Database not initialized", Xe.NOT_INITIALIZED));
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
        return N(new nt("Failed to export data to JSON", Xe.EXPORT_FAILED, t));
      }
    }
    async clear() {
      if (!this.db) return N(new nt("Database not initialized", Xe.NOT_INITIALIZED));
      try {
        return await this.executeTransaction("readwrite", (t) => new Promise((n, i) => {
          const l = t.clear();
          l.onsuccess = () => n(), l.onerror = () => i(new Error("Failed to clear store"));
        })), G(void 0);
      } catch (t) {
        return N(new nt("Failed to clear store", Xe.CLEAR_FAILED, t));
      }
    }
    async remove(t) {
      if (!this.db) return N(new nt("Database not initialized", Xe.NOT_INITIALIZED));
      try {
        return await this.executeTransaction("readwrite", (n) => new Promise((i, l) => {
          const c = n.delete(t);
          c.onsuccess = () => i(), c.onerror = () => l(new Error("Failed to remove key"));
        })), G(void 0);
      } catch (n) {
        return N(new nt(`Failed to remove key: ${t}`, Xe.REMOVE_FAILED, n));
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
        return N(new mt("Failed to initialize Tauri geolocation provider", st.INITIALIZATION_FAILED, t));
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
        return N(new mt("Failed to get permission status", st.PERMISSION_DENIED, t));
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
        return this.isPositionError(t) && t.code === t.PERMISSION_DENIED ? G("denied") : N(new mt("Failed to request permission", st.PERMISSION_DENIED, t));
      }
    }
    async getCurrentPosition() {
      try {
        const t = await this.locateTauri();
        return G(this.convertToGeolocationPosition(t));
      } catch (t) {
        return N(new mt("Failed to get current position", st.POSITION_UNAVAILABLE, t));
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
        return N(new mt("Failed to start watching position", st.WATCH_FAILED, n));
      }
    }
    clearWatch(t) {
      try {
        return this.watchCallbacks.has(t) && (clearInterval(t), this.watchCallbacks.delete(t)), G(void 0);
      } catch (n) {
        return N(new mt("Failed to clear watch", st.CLEAR_WATCH_FAILED, n));
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
      return this.initialized ? G(void 0) : this.isSupported() ? (this.initialized = true, G(void 0)) : N(new mt("Geolocation is not supported by this browser", st.UNSUPPORTED));
    }
    async getPermissionStatus() {
      if (!navigator.permissions) return this.fallbackPermissionCheck();
      try {
        const t = await navigator.permissions.query({
          name: "geolocation"
        });
        return G(t.state);
      } catch (t) {
        return N(new mt("Failed to get permission status", st.PERMISSION_DENIED, t));
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
        return this.isPositionError(t) && t.code === t.PERMISSION_DENIED ? G("denied") : N(new mt("Failed to request permission", st.PERMISSION_DENIED, t));
      }
    }
    async getCurrentPosition() {
      if (!this.initialized) {
        const t = await this.init();
        if (t.isErr()) return N(t.error);
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
          t(N(new mt(l, i, new Error(n.message))));
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
        if (n.isErr()) return N(n.error);
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
        return N(new mt("Failed to start watching position", st.WATCH_FAILED, n));
      }
    }
    clearWatch(t) {
      try {
        return navigator.geolocation.clearWatch(t), G(void 0);
      } catch (n) {
        return N(new mt("Failed to clear watch", st.CLEAR_WATCH_FAILED, n));
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
  Df = function(e) {
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
  };
  var Re = {};
  const Fb = Object.prototype.toString;
  function $i(e) {
    const t = Fb.call(e);
    return t.endsWith("Array]") && !t.includes("Big");
  }
  const Db = Object.freeze(Object.defineProperty({
    __proto__: null,
    isAnyArray: $i
  }, Symbol.toStringTag, {
    value: "Module"
  })), jb = Df(Db);
  function Ub(e) {
    var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
    if (!$i(e)) throw new TypeError("input must be an array");
    if (e.length === 0) throw new TypeError("input must not be empty");
    var n = t.fromIndex, i = n === void 0 ? 0 : n, l = t.toIndex, c = l === void 0 ? e.length : l;
    if (i < 0 || i >= e.length || !Number.isInteger(i)) throw new Error("fromIndex must be a positive integer smaller than length");
    if (c <= i || c > e.length || !Number.isInteger(c)) throw new Error("toIndex must be an integer greater than fromIndex and at most equal to length");
    for (var f = e[i], h = i + 1; h < c; h++) e[h] > f && (f = e[h]);
    return f;
  }
  function Gb(e) {
    var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
    if (!$i(e)) throw new TypeError("input must be an array");
    if (e.length === 0) throw new TypeError("input must not be empty");
    var n = t.fromIndex, i = n === void 0 ? 0 : n, l = t.toIndex, c = l === void 0 ? e.length : l;
    if (i < 0 || i >= e.length || !Number.isInteger(i)) throw new Error("fromIndex must be a positive integer smaller than length");
    if (c <= i || c > e.length || !Number.isInteger(c)) throw new Error("toIndex must be an integer greater than fromIndex and at most equal to length");
    for (var f = e[i], h = i + 1; h < c; h++) e[h] < f && (f = e[h]);
    return f;
  }
  function Wb(e) {
    var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
    if ($i(e)) {
      if (e.length === 0) throw new TypeError("input must not be empty");
    } else throw new TypeError("input must be an array");
    var n;
    if (t.output !== void 0) {
      if (!$i(t.output)) throw new TypeError("output option must be an array if specified");
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
  })), Bb = Df($b);
  var _c;
  function zb() {
    var _oe_instances, e_fn, _e;
    if (_c) return Re;
    _c = 1, Object.defineProperty(Re, "__esModule", {
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
        for (let k = 0; k < y; k++) E.push(h(d.get(A, k), r, a));
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
    function C(d, o) {
      if (!e.isAnyArray(o)) throw new TypeError("row indices must be an array");
      for (let s = 0; s < o.length; s++) if (o[s] < 0 || o[s] >= d.rows) throw new RangeError("row indices are out of range");
    }
    function L(d, o) {
      if (!e.isAnyArray(o)) throw new TypeError("column indices must be an array");
      for (let s = 0; s < o.length; s++) if (o[s] < 0 || o[s] >= d.columns) throw new RangeError("column indices are out of range");
    }
    function Z(d, o, s, r, a) {
      if (arguments.length !== 5) throw new RangeError("expected 4 arguments");
      if (U("startRow", o), U("endRow", s), U("startColumn", r), U("endColumn", a), o > s || r > a || o < 0 || o >= d.rows || s < 0 || s >= d.rows || r < 0 || r >= d.columns || a < 0 || a >= d.columns) throw new RangeError("Submatrix indices are out of range");
    }
    function j(d, o = 0) {
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
      let o = j(d.rows);
      for (let s = 0; s < d.rows; ++s) for (let r = 0; r < d.columns; ++r) o[s] += d.get(s, r);
      return o;
    }
    function ue(d) {
      let o = j(d.columns);
      for (let s = 0; s < d.rows; ++s) for (let r = 0; r < d.columns; ++r) o[r] += d.get(s, r);
      return o;
    }
    function Oe(d) {
      let o = 0;
      for (let s = 0; s < d.rows; s++) for (let r = 0; r < d.columns; r++) o += d.get(s, r);
      return o;
    }
    function Ae(d) {
      let o = j(d.rows, 1);
      for (let s = 0; s < d.rows; ++s) for (let r = 0; r < d.columns; ++r) o[s] *= d.get(s, r);
      return o;
    }
    function me(d) {
      let o = j(d.columns, 1);
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
    function he(d, o, s) {
      const r = d.rows, a = d.columns, u = r * a;
      let g = 0, m = 0, y = 0;
      for (let b = 0; b < r; b++) for (let A = 0; A < a; A++) y = d.get(b, A) - s, g += y, m += y * y;
      return o ? (m - g * g / u) / (u - 1) : (m - g * g / u) / u;
    }
    function je(d, o) {
      for (let s = 0; s < d.rows; s++) for (let r = 0; r < d.columns; r++) d.set(s, r, d.get(s, r) - o[s]);
    }
    function lt(d, o) {
      for (let s = 0; s < d.rows; s++) for (let r = 0; r < d.columns; r++) d.set(s, r, d.get(s, r) - o[r]);
    }
    function Wt(d, o) {
      for (let s = 0; s < d.rows; s++) for (let r = 0; r < d.columns; r++) d.set(s, r, d.get(s, r) - o);
    }
    function ze(d) {
      const o = [];
      for (let s = 0; s < d.rows; s++) {
        let r = 0;
        for (let a = 0; a < d.columns; a++) r += d.get(s, a) ** 2 / (d.columns - 1);
        o.push(Math.sqrt(r));
      }
      return o;
    }
    function Me(d, o) {
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
    function _n(d, o) {
      for (let s = 0; s < d.rows; s++) for (let r = 0; r < d.columns; r++) d.set(s, r, d.get(s, r) / o[r]);
    }
    function Nr(d) {
      const o = d.size - 1;
      let s = 0;
      for (let r = 0; r < d.columns; r++) for (let a = 0; a < d.rows; a++) s += d.get(a, r) ** 2 / o;
      return Math.sqrt(s);
    }
    function Sn(d, o) {
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
        const r = this.get(0, 0), a = o.get(0, 0), u = this.get(0, 1), g = o.get(0, 1), m = this.get(1, 0), y = o.get(1, 0), b = this.get(1, 1), A = o.get(1, 1), E = (r + b) * (a + A), k = (m + b) * a, te = r * (g - A), M = b * (y - a), D = (r + u) * A, le = (m - r) * (a + g), _ = (u - b) * (y + A), ee = E + M - D + _, fe = te + D, Ie = k + M, _e2 = E - k + te + le;
        return s.set(0, 0, ee), s.set(0, 1, fe), s.set(1, 0, Ie), s.set(1, 1, _e2), s;
      }
      strassen3x3(o) {
        o = oe.checkMatrix(o);
        let s = new oe(3, 3);
        const r = this.get(0, 0), a = this.get(0, 1), u = this.get(0, 2), g = this.get(1, 0), m = this.get(1, 1), y = this.get(1, 2), b = this.get(2, 0), A = this.get(2, 1), E = this.get(2, 2), k = o.get(0, 0), te = o.get(0, 1), M = o.get(0, 2), D = o.get(1, 0), le = o.get(1, 1), _ = o.get(1, 2), ee = o.get(2, 0), fe = o.get(2, 1), Ie = o.get(2, 2), _e2 = (r + a + u - g - m - A - E) * le, Ze = (r - g) * (-te + le), ge = m * (-k + te + D - le - _ - ee + Ie), be = (-r + g + m) * (k - te + le), Be = (g + m) * (-k + te), S = r * k, z = (-r + b + A) * (k - M + _), ce = (-r + b) * (M - _), X = (b + A) * (-k + M), Qe = (r + a + u - m - y - b - A) * _, Ge = A * (-k + M + D - le - _ - ee + fe), Ke = (-u + A + E) * (le + ee - fe), et = (u - E) * (le - fe), yt = u * ee, rn = (A + E) * (-ee + fe), ht = (-u + m + y) * (_ + ee - Ie), hn = (u - y) * (_ - Ie), An = (m + y) * (-ee + Ie), Ce = a * D, bt = y * fe, Bt = g * M, zt = b * te, dt = E * Ie, Jf = S + yt + Ce, Xf = _e2 + be + Be + S + Ke + yt + rn, Zf = S + z + X + Qe + yt + ht + An, Qf = Ze + ge + be + S + yt + ht + hn, eh = Ze + be + Be + S + bt, th = yt + ht + hn + An + Bt, nh = S + z + ce + Ge + Ke + et + yt, rh = Ke + et + yt + rn + zt, ih = S + z + ce + X + dt;
        return s.set(0, 0, Jf), s.set(0, 1, Xf), s.set(0, 2, Zf), s.set(1, 0, Qf), s.set(1, 1, eh), s.set(1, 2, th), s.set(2, 0, nh), s.set(2, 1, rh), s.set(2, 2, ih), s;
      }
      mmulStrassen(o) {
        o = oe.checkMatrix(o);
        let s = this.clone(), r = s.rows, a = s.columns, u = o.rows, g = o.columns;
        a !== u && console.warn(`Multiplying ${r} x ${a} and ${u} x ${g} matrix: dimensions do not match.`);
        function m(E, k, te) {
          let M = E.rows, D = E.columns;
          if (M === k && D === te) return E;
          {
            let le = ye.zeros(k, te);
            return le = le.setSubMatrix(E, 0, 0), le;
          }
        }
        let y = Math.max(r, u), b = Math.max(a, g);
        s = m(s, y, b), o = m(o, y, b);
        function A(E, k, te, M) {
          if (te <= 512 || M <= 512) return E.mmul(k);
          te % 2 === 1 && M % 2 === 1 ? (E = m(E, te + 1, M + 1), k = m(k, te + 1, M + 1)) : te % 2 === 1 ? (E = m(E, te + 1, M), k = m(k, te + 1, M)) : M % 2 === 1 && (E = m(E, te, M + 1), k = m(k, te, M + 1));
          let D = parseInt(E.rows / 2, 10), le = parseInt(E.columns / 2, 10), _ = E.subMatrix(0, D - 1, 0, le - 1), ee = k.subMatrix(0, D - 1, 0, le - 1), fe = E.subMatrix(0, D - 1, le, E.columns - 1), Ie = k.subMatrix(0, D - 1, le, k.columns - 1), _e2 = E.subMatrix(D, E.rows - 1, 0, le - 1), Ze = k.subMatrix(D, k.rows - 1, 0, le - 1), ge = E.subMatrix(D, E.rows - 1, le, E.columns - 1), be = k.subMatrix(D, k.rows - 1, le, k.columns - 1), Be = A(ye.add(_, ge), ye.add(ee, be), D, le), S = A(ye.add(_e2, ge), ee, D, le), z = A(_, ye.sub(Ie, be), D, le), ce = A(ge, ye.sub(Ze, ee), D, le), X = A(ye.add(_, fe), be, D, le), Qe = A(ye.sub(_e2, _), ye.add(ee, Ie), D, le), Ge = A(ye.sub(fe, ge), ye.add(Ze, be), D, le), Ke = ye.add(Be, ce);
          Ke.sub(X), Ke.add(Ge);
          let et = ye.add(z, X), yt = ye.add(S, ce), rn = ye.sub(Be, S);
          rn.add(z), rn.add(Qe);
          let ht = ye.zeros(2 * Ke.rows, 2 * Ke.columns);
          return ht = ht.setSubMatrix(Ke, 0, 0), ht = ht.setSubMatrix(et, Ke.rows, 0), ht = ht.setSubMatrix(yt, 0, Ke.columns), ht = ht.setSubMatrix(rn, Ke.rows, Ke.columns), ht.subMatrix(0, te - 1, 0, M - 1);
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
      sortRows(o = ei) {
        for (let s = 0; s < this.rows; s++) this.setRow(s, this.getRow(s).sort(o));
        return this;
      }
      sortColumns(o = ei) {
        for (let s = 0; s < this.columns; s++) this.setColumn(s, this.getColumn(s).sort(o));
        return this;
      }
      subMatrix(o, s, r, a) {
        Z(this, o, s, r, a);
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
        Z(this, s, a, r, u);
        for (let g = 0; g < o.rows; g++) for (let m = 0; m < o.columns; m++) this.set(s + g, r + m, o.get(g, m));
        return this;
      }
      selection(o, s) {
        C(this, o), L(this, s);
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
            return je(this, r), this;
          }
          case "column": {
            if (!e.isAnyArray(r)) throw new TypeError("center must be an array");
            return lt(this, r), this;
          }
          case void 0: {
            if (typeof r != "number") throw new TypeError("center must be a number");
            return Wt(this, r), this;
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
            if (r === void 0) r = ze(this);
            else if (!e.isAnyArray(r)) throw new TypeError("scale must be an array");
            return Me(this, r), this;
          }
          case "column": {
            if (r === void 0) r = We(this);
            else if (!e.isAnyArray(r)) throw new TypeError("scale must be an array");
            return _n(this, r), this;
          }
          case void 0: {
            if (r === void 0) r = Nr(this);
            else if (typeof r != "number") throw new TypeError("scale must be a number");
            return Sn(this, r), this;
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
    function ei(d, o) {
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
    const _xt = class _xt extends ye {
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
        const o = new _xt(this.diagonalSize);
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
        const a = new _xt(r);
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
    let xt = _xt;
    xt.prototype.klassType = "SymmetricMatrix";
    class On extends xt {
      static isDistanceMatrix(o) {
        return xt.isSymmetricMatrix(o) && o.klassSubType === "DistanceMatrix";
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
        return new xt(this);
      }
      clone() {
        const o = new On(this.diagonalSize);
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
    On.prototype.klassSubType = "DistanceMatrix";
    class $t extends ye {
      constructor(o, s, r) {
        super(), this.matrix = o, this.rows = s, this.columns = r;
      }
    }
    class Yi extends $t {
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
    class ur extends $t {
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
    class Ka extends $t {
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
        w(o, s), super(o, 1, o.columns), this.row = s;
      }
      set(o, s, r) {
        return this.matrix.set(this.row, s, r), this;
      }
      get(o, s) {
        return this.matrix.get(this.row, s);
      }
    }
    class x extends $t {
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
    class K extends $t {
      constructor(o, s, r) {
        C(o, s), L(o, r), super(o, s.length, r.length), this.rowIndices = s, this.columnIndices = r;
      }
      set(o, s, r) {
        return this.matrix.set(this.rowIndices[o], this.columnIndices[s], r), this;
      }
      get(o, s) {
        return this.matrix.get(this.rowIndices[o], this.columnIndices[s]);
      }
    }
    class V extends $t {
      constructor(o, s, r, a, u) {
        Z(o, s, r, a, u), super(o, r - s + 1, u - a + 1), this.startRow = s, this.startColumn = a;
      }
      set(o, s, r) {
        return this.matrix.set(this.startRow + o, this.startColumn + s, r), this;
      }
      get(o, s) {
        return this.matrix.get(this.startRow + o, this.startColumn + s);
      }
    }
    class q extends $t {
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
    class J {
      constructor(o) {
        o = Q.checkMatrix(o);
        let s = o.clone(), r = s.rows, a = s.columns, u = new Float64Array(r), g = 1, m, y, b, A, E, k, te, M, D;
        for (m = 0; m < r; m++) u[m] = m;
        for (M = new Float64Array(r), y = 0; y < a; y++) {
          for (m = 0; m < r; m++) M[m] = s.get(m, y);
          for (m = 0; m < r; m++) {
            for (D = Math.min(m, y), E = 0, b = 0; b < D; b++) E += s.get(m, b) * M[b];
            M[m] -= E, s.set(m, y, M[m]);
          }
          for (A = y, m = y + 1; m < r; m++) Math.abs(M[m]) > Math.abs(M[A]) && (A = m);
          if (A !== y) {
            for (b = 0; b < a; b++) k = s.get(A, b), s.set(A, b, s.get(y, b)), s.set(y, b, k);
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
        let k = Math.min(r, a), te = Math.min(r + 1, a), M = new Float64Array(te), D = new oe(r, k), le = new oe(a, a), _ = new Float64Array(a), ee = new Float64Array(r), fe = new Float64Array(te);
        for (let S = 0; S < te; S++) fe[S] = S;
        let Ie = Math.min(r - 1, a), _e2 = Math.max(0, Math.min(a - 2, r)), Ze = Math.max(Ie, _e2);
        for (let S = 0; S < Ze; S++) {
          if (S < Ie) {
            M[S] = 0;
            for (let z = S; z < r; z++) M[S] = de(M[S], E.get(z, S));
            if (M[S] !== 0) {
              E.get(S, S) < 0 && (M[S] = -M[S]);
              for (let z = S; z < r; z++) E.set(z, S, E.get(z, S) / M[S]);
              E.set(S, S, E.get(S, S) + 1);
            }
            M[S] = -M[S];
          }
          for (let z = S + 1; z < a; z++) {
            if (S < Ie && M[S] !== 0) {
              let ce = 0;
              for (let X = S; X < r; X++) ce += E.get(X, S) * E.get(X, z);
              ce = -ce / E.get(S, S);
              for (let X = S; X < r; X++) E.set(X, z, E.get(X, z) + ce * E.get(X, S));
            }
            _[z] = E.get(S, z);
          }
          if (y && S < Ie) for (let z = S; z < r; z++) D.set(z, S, E.get(z, S));
          if (S < _e2) {
            _[S] = 0;
            for (let z = S + 1; z < a; z++) _[S] = de(_[S], _[z]);
            if (_[S] !== 0) {
              _[S + 1] < 0 && (_[S] = 0 - _[S]);
              for (let z = S + 1; z < a; z++) _[z] /= _[S];
              _[S + 1] += 1;
            }
            if (_[S] = -_[S], S + 1 < r && _[S] !== 0) {
              for (let z = S + 1; z < r; z++) ee[z] = 0;
              for (let z = S + 1; z < r; z++) for (let ce = S + 1; ce < a; ce++) ee[z] += _[ce] * E.get(z, ce);
              for (let z = S + 1; z < a; z++) {
                let ce = -_[z] / _[S + 1];
                for (let X = S + 1; X < r; X++) E.set(X, z, E.get(X, z) + ce * ee[X]);
              }
            }
            if (b) for (let z = S + 1; z < a; z++) le.set(z, S, _[z]);
          }
        }
        let ge = Math.min(a, r + 1);
        if (Ie < a && (M[Ie] = E.get(Ie, Ie)), r < ge && (M[ge - 1] = 0), _e2 + 1 < ge && (_[_e2] = E.get(_e2, ge - 1)), _[ge - 1] = 0, y) {
          for (let S = Ie; S < k; S++) {
            for (let z = 0; z < r; z++) D.set(z, S, 0);
            D.set(S, S, 1);
          }
          for (let S = Ie - 1; S >= 0; S--) if (M[S] !== 0) {
            for (let z = S + 1; z < k; z++) {
              let ce = 0;
              for (let X = S; X < r; X++) ce += D.get(X, S) * D.get(X, z);
              ce = -ce / D.get(S, S);
              for (let X = S; X < r; X++) D.set(X, z, D.get(X, z) + ce * D.get(X, S));
            }
            for (let z = S; z < r; z++) D.set(z, S, -D.get(z, S));
            D.set(S, S, 1 + D.get(S, S));
            for (let z = 0; z < S - 1; z++) D.set(z, S, 0);
          } else {
            for (let z = 0; z < r; z++) D.set(z, S, 0);
            D.set(S, S, 1);
          }
        }
        if (b) for (let S = a - 1; S >= 0; S--) {
          if (S < _e2 && _[S] !== 0) for (let z = S + 1; z < a; z++) {
            let ce = 0;
            for (let X = S + 1; X < a; X++) ce += le.get(X, S) * le.get(X, z);
            ce = -ce / le.get(S + 1, S);
            for (let X = S + 1; X < a; X++) le.set(X, z, le.get(X, z) + ce * le.get(X, S));
          }
          for (let z = 0; z < a; z++) le.set(z, S, 0);
          le.set(S, S, 1);
        }
        let be = ge - 1, Be = Number.EPSILON;
        for (; ge > 0; ) {
          let S, z;
          for (S = ge - 2; S >= -1 && S !== -1; S--) {
            const ce = Number.MIN_VALUE + Be * Math.abs(M[S] + Math.abs(M[S + 1]));
            if (Math.abs(_[S]) <= ce || Number.isNaN(_[S])) {
              _[S] = 0;
              break;
            }
          }
          if (S === ge - 2) z = 4;
          else {
            let ce;
            for (ce = ge - 1; ce >= S && ce !== S; ce--) {
              let X = (ce !== ge ? Math.abs(_[ce]) : 0) + (ce !== S + 1 ? Math.abs(_[ce - 1]) : 0);
              if (Math.abs(M[ce]) <= Be * X) {
                M[ce] = 0;
                break;
              }
            }
            ce === S ? z = 3 : ce === ge - 1 ? z = 1 : (z = 2, S = ce);
          }
          switch (S++, z) {
            case 1: {
              let ce = _[ge - 2];
              _[ge - 2] = 0;
              for (let X = ge - 2; X >= S; X--) {
                let Qe = de(M[X], ce), Ge = M[X] / Qe, Ke = ce / Qe;
                if (M[X] = Qe, X !== S && (ce = -Ke * _[X - 1], _[X - 1] = Ge * _[X - 1]), b) for (let et = 0; et < a; et++) Qe = Ge * le.get(et, X) + Ke * le.get(et, ge - 1), le.set(et, ge - 1, -Ke * le.get(et, X) + Ge * le.get(et, ge - 1)), le.set(et, X, Qe);
              }
              break;
            }
            case 2: {
              let ce = _[S - 1];
              _[S - 1] = 0;
              for (let X = S; X < ge; X++) {
                let Qe = de(M[X], ce), Ge = M[X] / Qe, Ke = ce / Qe;
                if (M[X] = Qe, ce = -Ke * _[X], _[X] = Ge * _[X], y) for (let et = 0; et < r; et++) Qe = Ge * D.get(et, X) + Ke * D.get(et, S - 1), D.set(et, S - 1, -Ke * D.get(et, X) + Ge * D.get(et, S - 1)), D.set(et, X, Qe);
              }
              break;
            }
            case 3: {
              const ce = Math.max(Math.abs(M[ge - 1]), Math.abs(M[ge - 2]), Math.abs(_[ge - 2]), Math.abs(M[S]), Math.abs(_[S])), X = M[ge - 1] / ce, Qe = M[ge - 2] / ce, Ge = _[ge - 2] / ce, Ke = M[S] / ce, et = _[S] / ce, yt = ((Qe + X) * (Qe - X) + Ge * Ge) / 2, rn = X * Ge * (X * Ge);
              let ht = 0;
              (yt !== 0 || rn !== 0) && (yt < 0 ? ht = 0 - Math.sqrt(yt * yt + rn) : ht = Math.sqrt(yt * yt + rn), ht = rn / (yt + ht));
              let hn = (Ke + X) * (Ke - X) + ht, An = Ke * et;
              for (let Ce = S; Ce < ge - 1; Ce++) {
                let bt = de(hn, An);
                bt === 0 && (bt = Number.MIN_VALUE);
                let Bt = hn / bt, zt = An / bt;
                if (Ce !== S && (_[Ce - 1] = bt), hn = Bt * M[Ce] + zt * _[Ce], _[Ce] = Bt * _[Ce] - zt * M[Ce], An = zt * M[Ce + 1], M[Ce + 1] = Bt * M[Ce + 1], b) for (let dt = 0; dt < a; dt++) bt = Bt * le.get(dt, Ce) + zt * le.get(dt, Ce + 1), le.set(dt, Ce + 1, -zt * le.get(dt, Ce) + Bt * le.get(dt, Ce + 1)), le.set(dt, Ce, bt);
                if (bt = de(hn, An), bt === 0 && (bt = Number.MIN_VALUE), Bt = hn / bt, zt = An / bt, M[Ce] = bt, hn = Bt * _[Ce] + zt * M[Ce + 1], M[Ce + 1] = -zt * _[Ce] + Bt * M[Ce + 1], An = zt * _[Ce + 1], _[Ce + 1] = Bt * _[Ce + 1], y && Ce < r - 1) for (let dt = 0; dt < r; dt++) bt = Bt * D.get(dt, Ce) + zt * D.get(dt, Ce + 1), D.set(dt, Ce + 1, -zt * D.get(dt, Ce) + Bt * D.get(dt, Ce + 1)), D.set(dt, Ce, bt);
              }
              _[ge - 2] = hn;
              break;
            }
            case 4: {
              if (M[S] <= 0 && (M[S] = M[S] < 0 ? -M[S] : 0, b)) for (let ce = 0; ce <= be; ce++) le.set(ce, S, -le.get(ce, S));
              for (; S < be && !(M[S] >= M[S + 1]); ) {
                let ce = M[S];
                if (M[S] = M[S + 1], M[S + 1] = ce, b && S < a - 1) for (let X = 0; X < a; X++) ce = le.get(X, S + 1), le.set(X, S + 1, le.get(X, S)), le.set(X, S, ce);
                if (y && S < r - 1) for (let X = 0; X < r; X++) ce = D.get(X, S + 1), D.set(X, S + 1, D.get(X, S)), D.set(X, S, ce);
                S++;
              }
              ge--;
              break;
            }
          }
        }
        if (A) {
          let S = le;
          le = D, D = S;
        }
        this.m = r, this.n = a, this.s = M, this.U = D, this.V = le;
      }
      solve(o) {
        let s = o, r = this.threshold, a = this.s.length, u = oe.zeros(a, a);
        for (let k = 0; k < a; k++) Math.abs(this.s[k]) <= r ? u.set(k, k, 0) : u.set(k, k, 1 / this.s[k]);
        let g = this.U, m = this.rightSingularVectors, y = m.mmul(u), b = m.rows, A = g.rows, E = oe.zeros(b, A);
        for (let k = 0; k < b; k++) for (let te = 0; te < A; te++) {
          let M = 0;
          for (let D = 0; D < a; D++) M += y.get(k, D) * g.get(te, D);
          E.set(k, te, M);
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
          let k = 0;
          for (let te = 0; te < y; te++) k += u.get(A, te) * g.get(E, te);
          b.set(A, E, k);
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
      return d = Q.checkMatrix(d), o = Q.checkMatrix(o), s ? new pe(d).solve(o) : d.isSquare() ? new J(d).solve(o) : new ae(d).solve(o);
    }
    function Fe(d) {
      if (d = oe.checkMatrix(d), d.isSquare()) {
        if (d.columns === 0) return 1;
        let o, s, r, a;
        if (d.columns === 2) return o = d.get(0, 0), s = d.get(0, 1), r = d.get(1, 0), a = d.get(1, 1), o * a - s * r;
        if (d.columns === 3) {
          let u, g, m;
          return u = new K(d, [
            1,
            2
          ], [
            1,
            2
          ]), g = new K(d, [
            1,
            2
          ], [
            0,
            2
          ]), m = new K(d, [
            1,
            2
          ], [
            0,
            1
          ]), o = d.get(0, 0), s = d.get(0, 1), r = d.get(0, 2), o * Fe(u) - s * Fe(g) + r * Fe(m);
        } else return new J(d).determinant;
      } else throw Error("determinant can only be calculated for a square matrix");
    }
    function De(d, o) {
      let s = [];
      for (let r = 0; r < d; r++) r !== o && s.push(r);
      return s;
    }
    function Tt(d, o, s, r = 1e-9, a = 1e-9) {
      if (d > a) return new Array(o.rows + 1).fill(0);
      {
        let u = o.addRow(s, [
          0
        ]);
        for (let g = 0; g < u.rows; g++) Math.abs(u.get(g, 0)) < r && u.set(g, 0, 0);
        return u.to1DArray();
      }
    }
    function _t(d, o = {}) {
      const { thresholdValue: s = 1e-9, thresholdError: r = 1e-9 } = o;
      d = oe.checkMatrix(d);
      let a = d.rows, u = new oe(a, a);
      for (let g = 0; g < a; g++) {
        let m = oe.columnVector(d.getRow(g)), y = d.subMatrixRow(De(a, g)).transpose(), A = new pe(y).solve(m), E = oe.sub(m, y.mmul(A)).abs().max();
        u.setRow(g, Tt(E, A, g, s, r));
      }
      return u;
    }
    function Yt(d, o = Number.EPSILON) {
      if (d = oe.checkMatrix(d), d.isEmpty()) return d.transpose();
      let s = new pe(d, {
        autoTranspose: true
      }), r = s.leftSingularVectors, a = s.rightSingularVectors, u = s.diagonal;
      for (let g = 0; g < u.length; g++) Math.abs(u[g]) > o ? u[g] = 1 / u[g] : u[g] = 0;
      return a.mmul(oe.diag(u).mmul(r.transpose()));
    }
    function Kt(d, o = d, s = {}) {
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
    class ti {
      constructor(o, s = {}) {
        const { assumeSymmetric: r = false } = s;
        if (o = Q.checkMatrix(o), !o.isSquare()) throw new Error("Matrix is not a square matrix");
        if (o.isEmpty()) throw new Error("Matrix must be non-empty");
        let a = o.columns, u = new oe(a, a), g = new Float64Array(a), m = new Float64Array(a), y = o, b, A, E = false;
        if (r ? E = true : E = o.isSymmetric(), E) {
          for (b = 0; b < a; b++) for (A = 0; A < a; A++) u.set(b, A, y.get(b, A));
          Nt(a, m, g, u), Jt(a, m, g, u);
        } else {
          let k = new oe(a, a), te = new Float64Array(a);
          for (A = 0; A < a; A++) for (b = 0; b < a; b++) k.set(b, A, y.get(b, A));
          Ki(a, k, te, u), Ji(a, m, g, u, k);
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
    function Nt(d, o, s, r) {
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
    function Jt(d, o, s, r) {
      let a, u, g, m, y, b, A, E, k, te, M, D, le, _, ee, fe;
      for (g = 1; g < d; g++) o[g - 1] = o[g];
      o[d - 1] = 0;
      let Ie = 0, _e2 = 0, Ze = Number.EPSILON;
      for (b = 0; b < d; b++) {
        for (_e2 = Math.max(_e2, Math.abs(s[b]) + Math.abs(o[b])), A = b; A < d && !(Math.abs(o[A]) <= Ze * _e2); ) A++;
        if (A > b) do {
          for (a = s[b], E = (s[b + 1] - a) / (2 * o[b]), k = de(E, 1), E < 0 && (k = -k), s[b] = o[b] / (E + k), s[b + 1] = o[b] * (E + k), te = s[b + 1], u = a - s[b], g = b + 2; g < d; g++) s[g] -= u;
          for (Ie = Ie + u, E = s[A], M = 1, D = M, le = M, _ = o[b + 1], ee = 0, fe = 0, g = A - 1; g >= b; g--) for (le = D, D = M, fe = ee, a = M * o[g], u = M * E, k = de(E, o[g]), o[g + 1] = ee * k, ee = o[g] / k, M = E / k, E = M * s[g] - ee * a, s[g + 1] = u + ee * (M * a + ee * s[g]), y = 0; y < d; y++) u = r.get(y, g + 1), r.set(y, g + 1, ee * r.get(y, g) + M * u), r.set(y, g, M * r.get(y, g) - ee * u);
          E = -ee * fe * le * _ * o[b] / te, o[b] = ee * E, s[b] = M * E;
        } while (Math.abs(o[b]) > Ze * _e2);
        s[b] = s[b] + Ie, o[b] = 0;
      }
      for (g = 0; g < d - 1; g++) {
        for (y = g, E = s[g], m = g + 1; m < d; m++) s[m] < E && (y = m, E = s[m]);
        if (y !== g) for (s[y] = s[g], s[g] = E, m = 0; m < d; m++) E = r.get(m, g), r.set(m, g, r.get(m, y)), r.set(m, y, E);
      }
    }
    function Ki(d, o, s, r) {
      let a = 0, u = d - 1, g, m, y, b, A, E, k;
      for (E = a + 1; E <= u - 1; E++) {
        for (k = 0, b = E; b <= u; b++) k = k + Math.abs(o.get(b, E - 1));
        if (k !== 0) {
          for (y = 0, b = u; b >= E; b--) s[b] = o.get(b, E - 1) / k, y += s[b] * s[b];
          for (m = Math.sqrt(y), s[E] > 0 && (m = -m), y = y - s[E] * m, s[E] = s[E] - m, A = E; A < d; A++) {
            for (g = 0, b = u; b >= E; b--) g += s[b] * o.get(b, A);
            for (g = g / y, b = E; b <= u; b++) o.set(b, A, o.get(b, A) - g * s[b]);
          }
          for (b = 0; b <= u; b++) {
            for (g = 0, A = u; A >= E; A--) g += s[A] * o.get(b, A);
            for (g = g / y, A = E; A <= u; A++) o.set(b, A, o.get(b, A) - g * s[A]);
          }
          s[E] = k * s[E], o.set(E, E - 1, k * m);
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
    function Ji(d, o, s, r, a) {
      let u = d - 1, g = 0, m = d - 1, y = Number.EPSILON, b = 0, A = 0, E = 0, k = 0, te = 0, M = 0, D = 0, le = 0, _, ee, fe, Ie, _e2, Ze, ge, be, Be, S, z, ce, X, Qe, Ge;
      for (_ = 0; _ < d; _++) for ((_ < g || _ > m) && (s[_] = a.get(_, _), o[_] = 0), ee = Math.max(_ - 1, 0); ee < d; ee++) A = A + Math.abs(a.get(_, ee));
      for (; u >= g; ) {
        for (Ie = u; Ie > g && (M = Math.abs(a.get(Ie - 1, Ie - 1)) + Math.abs(a.get(Ie, Ie)), M === 0 && (M = A), !(Math.abs(a.get(Ie, Ie - 1)) < y * M)); ) Ie--;
        if (Ie === u) a.set(u, u, a.get(u, u) + b), s[u] = a.get(u, u), o[u] = 0, u--, le = 0;
        else if (Ie === u - 1) {
          if (ge = a.get(u, u - 1) * a.get(u - 1, u), E = (a.get(u - 1, u - 1) - a.get(u, u)) / 2, k = E * E + ge, D = Math.sqrt(Math.abs(k)), a.set(u, u, a.get(u, u) + b), a.set(u - 1, u - 1, a.get(u - 1, u - 1) + b), be = a.get(u, u), k >= 0) {
            for (D = E >= 0 ? E + D : E - D, s[u - 1] = be + D, s[u] = s[u - 1], D !== 0 && (s[u] = be - ge / D), o[u - 1] = 0, o[u] = 0, be = a.get(u, u - 1), M = Math.abs(be) + Math.abs(D), E = be / M, k = D / M, te = Math.sqrt(E * E + k * k), E = E / te, k = k / te, ee = u - 1; ee < d; ee++) D = a.get(u - 1, ee), a.set(u - 1, ee, k * D + E * a.get(u, ee)), a.set(u, ee, k * a.get(u, ee) - E * D);
            for (_ = 0; _ <= u; _++) D = a.get(_, u - 1), a.set(_, u - 1, k * D + E * a.get(_, u)), a.set(_, u, k * a.get(_, u) - E * D);
            for (_ = g; _ <= m; _++) D = r.get(_, u - 1), r.set(_, u - 1, k * D + E * r.get(_, u)), r.set(_, u, k * r.get(_, u) - E * D);
          } else s[u - 1] = be + E, s[u] = be + E, o[u - 1] = D, o[u] = -D;
          u = u - 2, le = 0;
        } else {
          if (be = a.get(u, u), Be = 0, ge = 0, Ie < u && (Be = a.get(u - 1, u - 1), ge = a.get(u, u - 1) * a.get(u - 1, u)), le === 10) {
            for (b += be, _ = g; _ <= u; _++) a.set(_, _, a.get(_, _) - be);
            M = Math.abs(a.get(u, u - 1)) + Math.abs(a.get(u - 1, u - 2)), be = Be = 0.75 * M, ge = -0.4375 * M * M;
          }
          if (le === 30 && (M = (Be - be) / 2, M = M * M + ge, M > 0)) {
            for (M = Math.sqrt(M), Be < be && (M = -M), M = be - ge / ((Be - be) / 2 + M), _ = g; _ <= u; _++) a.set(_, _, a.get(_, _) - M);
            b += M, be = Be = ge = 0.964;
          }
          for (le = le + 1, _e2 = u - 2; _e2 >= Ie && (D = a.get(_e2, _e2), te = be - D, M = Be - D, E = (te * M - ge) / a.get(_e2 + 1, _e2) + a.get(_e2, _e2 + 1), k = a.get(_e2 + 1, _e2 + 1) - D - te - M, te = a.get(_e2 + 2, _e2 + 1), M = Math.abs(E) + Math.abs(k) + Math.abs(te), E = E / M, k = k / M, te = te / M, !(_e2 === Ie || Math.abs(a.get(_e2, _e2 - 1)) * (Math.abs(k) + Math.abs(te)) < y * (Math.abs(E) * (Math.abs(a.get(_e2 - 1, _e2 - 1)) + Math.abs(D) + Math.abs(a.get(_e2 + 1, _e2 + 1)))))); ) _e2--;
          for (_ = _e2 + 2; _ <= u; _++) a.set(_, _ - 2, 0), _ > _e2 + 2 && a.set(_, _ - 3, 0);
          for (fe = _e2; fe <= u - 1 && (Qe = fe !== u - 1, fe !== _e2 && (E = a.get(fe, fe - 1), k = a.get(fe + 1, fe - 1), te = Qe ? a.get(fe + 2, fe - 1) : 0, be = Math.abs(E) + Math.abs(k) + Math.abs(te), be !== 0 && (E = E / be, k = k / be, te = te / be)), be !== 0); fe++) if (M = Math.sqrt(E * E + k * k + te * te), E < 0 && (M = -M), M !== 0) {
            for (fe !== _e2 ? a.set(fe, fe - 1, -M * be) : Ie !== _e2 && a.set(fe, fe - 1, -a.get(fe, fe - 1)), E = E + M, be = E / M, Be = k / M, D = te / M, k = k / E, te = te / E, ee = fe; ee < d; ee++) E = a.get(fe, ee) + k * a.get(fe + 1, ee), Qe && (E = E + te * a.get(fe + 2, ee), a.set(fe + 2, ee, a.get(fe + 2, ee) - E * D)), a.set(fe, ee, a.get(fe, ee) - E * be), a.set(fe + 1, ee, a.get(fe + 1, ee) - E * Be);
            for (_ = 0; _ <= Math.min(u, fe + 3); _++) E = be * a.get(_, fe) + Be * a.get(_, fe + 1), Qe && (E = E + D * a.get(_, fe + 2), a.set(_, fe + 2, a.get(_, fe + 2) - E * te)), a.set(_, fe, a.get(_, fe) - E), a.set(_, fe + 1, a.get(_, fe + 1) - E * k);
            for (_ = g; _ <= m; _++) E = be * r.get(_, fe) + Be * r.get(_, fe + 1), Qe && (E = E + D * r.get(_, fe + 2), r.set(_, fe + 2, r.get(_, fe + 2) - E * te)), r.set(_, fe, r.get(_, fe) - E), r.set(_, fe + 1, r.get(_, fe + 1) - E * k);
          }
        }
      }
      if (A !== 0) {
        for (u = d - 1; u >= 0; u--) if (E = s[u], k = o[u], k === 0) for (Ie = u, a.set(u, u, 1), _ = u - 1; _ >= 0; _--) {
          for (ge = a.get(_, _) - E, te = 0, ee = Ie; ee <= u; ee++) te = te + a.get(_, ee) * a.get(ee, u);
          if (o[_] < 0) D = ge, M = te;
          else if (Ie = _, o[_] === 0 ? a.set(_, u, ge !== 0 ? -te / ge : -te / (y * A)) : (be = a.get(_, _ + 1), Be = a.get(_ + 1, _), k = (s[_] - E) * (s[_] - E) + o[_] * o[_], Ze = (be * M - D * te) / k, a.set(_, u, Ze), a.set(_ + 1, u, Math.abs(be) > Math.abs(D) ? (-te - ge * Ze) / be : (-M - Be * Ze) / D)), Ze = Math.abs(a.get(_, u)), y * Ze * Ze > 1) for (ee = _; ee <= u; ee++) a.set(ee, u, a.get(ee, u) / Ze);
        }
        else if (k < 0) for (Ie = u - 1, Math.abs(a.get(u, u - 1)) > Math.abs(a.get(u - 1, u)) ? (a.set(u - 1, u - 1, k / a.get(u, u - 1)), a.set(u - 1, u, -(a.get(u, u) - E) / a.get(u, u - 1))) : (Ge = Xi(0, -a.get(u - 1, u), a.get(u - 1, u - 1) - E, k), a.set(u - 1, u - 1, Ge[0]), a.set(u - 1, u, Ge[1])), a.set(u, u - 1, 0), a.set(u, u, 1), _ = u - 2; _ >= 0; _--) {
          for (S = 0, z = 0, ee = Ie; ee <= u; ee++) S = S + a.get(_, ee) * a.get(ee, u - 1), z = z + a.get(_, ee) * a.get(ee, u);
          if (ge = a.get(_, _) - E, o[_] < 0) D = ge, te = S, M = z;
          else if (Ie = _, o[_] === 0 ? (Ge = Xi(-S, -z, ge, k), a.set(_, u - 1, Ge[0]), a.set(_, u, Ge[1])) : (be = a.get(_, _ + 1), Be = a.get(_ + 1, _), ce = (s[_] - E) * (s[_] - E) + o[_] * o[_] - k * k, X = (s[_] - E) * 2 * k, ce === 0 && X === 0 && (ce = y * A * (Math.abs(ge) + Math.abs(k) + Math.abs(be) + Math.abs(Be) + Math.abs(D))), Ge = Xi(be * te - D * S + k * z, be * M - D * z - k * S, ce, X), a.set(_, u - 1, Ge[0]), a.set(_, u, Ge[1]), Math.abs(be) > Math.abs(D) + Math.abs(k) ? (a.set(_ + 1, u - 1, (-S - ge * a.get(_, u - 1) + k * a.get(_, u)) / be), a.set(_ + 1, u, (-z - ge * a.get(_, u) - k * a.get(_, u - 1)) / be)) : (Ge = Xi(-te - Be * a.get(_, u - 1), -M - Be * a.get(_, u), D, k), a.set(_ + 1, u - 1, Ge[0]), a.set(_ + 1, u, Ge[1]))), Ze = Math.max(Math.abs(a.get(_, u - 1)), Math.abs(a.get(_, u))), y * Ze * Ze > 1) for (ee = _; ee <= u; ee++) a.set(ee, u - 1, a.get(ee, u - 1) / Ze), a.set(ee, u, a.get(ee, u) / Ze);
        }
        for (_ = 0; _ < d; _++) if (_ < g || _ > m) for (ee = _; ee < d; ee++) r.set(_, ee, a.get(_, ee));
        for (ee = d - 1; ee >= g; ee--) for (_ = g; _ <= m; _++) {
          for (D = 0, fe = g; fe <= Math.min(ee, m); fe++) D = D + r.get(_, fe) * a.get(fe, ee);
          r.set(_, ee, D);
        }
      }
    }
    function Xi(d, o, s, r) {
      let a, u;
      return Math.abs(s) > Math.abs(r) ? (a = r / s, u = s + a * r, [
        (d + a * o) / u,
        (o - a * d) / u
      ]) : (a = s / r, u = r + a * s, [
        (a * d + o) / u,
        (a * o - d) / u
      ]);
    }
    class Ja {
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
    class Xa {
      constructor(o, s = {}) {
        o = Q.checkMatrix(o);
        let { Y: r } = s;
        const { scaleScores: a = false, maxIterations: u = 1e3, terminationCriteria: g = 1e-10 } = s;
        let m;
        if (r) {
          if (e.isAnyArray(r) && typeof r[0] == "number" ? r = oe.columnVector(r) : r = Q.checkMatrix(r), r.rows !== o.rows) throw new Error("Y should have the same number of rows as X");
          m = r.getColumnVector(0);
        } else m = o.getColumnVector(0);
        let y = 1, b, A, E, k;
        for (let te = 0; te < u && y > g; te++) E = o.transpose().mmul(m).div(m.transpose().mmul(m).get(0, 0)), E = E.div(E.norm()), b = o.mmul(E).div(E.transpose().mmul(E).get(0, 0)), te > 0 && (y = b.clone().sub(k).pow(2).sum()), k = b.clone(), r ? (A = r.transpose().mmul(b).div(b.transpose().mmul(b).get(0, 0)), A = A.div(A.norm()), m = r.mmul(A).div(A.transpose().mmul(A).get(0, 0))) : m = b;
        if (r) {
          let te = o.transpose().mmul(b).div(b.transpose().mmul(b).get(0, 0));
          te = te.div(te.norm());
          let M = o.clone().sub(b.clone().mmul(te.transpose())), D = m.transpose().mmul(b).div(b.transpose().mmul(b).get(0, 0)), le = r.clone().sub(b.clone().mulS(D.get(0, 0)).mmul(A.transpose()));
          this.t = b, this.p = te.transpose(), this.w = E.transpose(), this.q = A, this.u = m, this.s = b.transpose().mmul(b), this.xResidual = M, this.yResidual = le, this.betas = D;
        } else this.w = E.transpose(), this.s = b.transpose().mmul(b).sqrt(), a ? this.t = b.clone().div(this.s.get(0, 0)) : this.t = b, this.xResidual = o.sub(b.mmul(E.transpose()));
      }
    }
    return Re.AbstractMatrix = ye, Re.CHO = Ja, Re.CholeskyDecomposition = Ja, Re.DistanceMatrix = On, Re.EVD = ti, Re.EigenvalueDecomposition = ti, Re.LU = J, Re.LuDecomposition = J, Re.Matrix = oe, Re.MatrixColumnSelectionView = ur, Re.MatrixColumnView = Yi, Re.MatrixFlipColumnView = Ka, Re.MatrixFlipRowView = T, Re.MatrixRowSelectionView = x, Re.MatrixRowView = O, Re.MatrixSelectionView = K, Re.MatrixSubView = V, Re.MatrixTransposeView = q, Re.NIPALS = Xa, Re.Nipals = Xa, Re.QR = ae, Re.QrDecomposition = ae, Re.SVD = pe, Re.SingularValueDecomposition = pe, Re.SymmetricMatrix = xt, Re.WrapperMatrix1D = se, Re.WrapperMatrix2D = Q, Re.correlation = fr, Re.covariance = Kt, Re.default = oe, Re.determinant = Fe, Re.inverse = Ee, Re.linearDependencies = _t, Re.pseudoInverse = Yt, Re.solve = Le, Re.wrap = re, Re;
  }
  var cs = zb();
  const Sc = xb(cs), Zt = cs.Matrix;
  Sc.Matrix ? Sc.Matrix : cs.Matrix;
  const Hb = cs.inverse;
  let Ne;
  const jf = typeof TextDecoder < "u" ? new TextDecoder("utf-8", {
    ignoreBOM: true,
    fatal: true
  }) : {
    decode: () => {
      throw Error("TextDecoder not available");
    }
  };
  typeof TextDecoder < "u" && jf.decode();
  let bi = null;
  function bo() {
    return (bi === null || bi.byteLength === 0) && (bi = new Uint8Array(Ne.memory.buffer)), bi;
  }
  function Ir(e, t) {
    return e = e >>> 0, jf.decode(bo().subarray(e, e + t));
  }
  let Wo = 0;
  const vo = typeof TextEncoder < "u" ? new TextEncoder("utf-8") : {
    encode: () => {
      throw Error("TextEncoder not available");
    }
  }, Vb = typeof vo.encodeInto == "function" ? function(e, t) {
    return vo.encodeInto(e, t);
  } : function(e, t) {
    const n = vo.encode(e);
    return t.set(n), {
      read: e.length,
      written: n.length
    };
  };
  function Uf(e, t, n) {
    if (n === void 0) {
      const h = vo.encode(e), p = t(h.length, 1) >>> 0;
      return bo().subarray(p, p + h.length).set(h), Wo = h.length, p;
    }
    let i = e.length, l = t(i, 1) >>> 0;
    const c = bo();
    let f = 0;
    for (; f < i; f++) {
      const h = e.charCodeAt(f);
      if (h > 127) break;
      c[l + f] = h;
    }
    if (f !== i) {
      f !== 0 && (e = e.slice(f)), l = n(l, i, i = f + e.length * 3, 1) >>> 0;
      const h = bo().subarray(l + f, l + i), p = Vb(e, h);
      f += p.written, l = n(l, i, f, 1) >>> 0;
    }
    return Wo = f, l;
  }
  function qb(e) {
    return e == null;
  }
  let br = null;
  function Oc() {
    return (br === null || br.buffer.detached === true || br.buffer.detached === void 0 && br.buffer !== Ne.memory.buffer) && (br = new DataView(Ne.memory.buffer)), br;
  }
  function Gf(e) {
    const t = Ne.__wbindgen_export_0.get(e);
    return Ne.__externref_table_dealloc(e), t;
  }
  function Gs(e, t) {
    if (!(e instanceof t)) throw new Error(`expected instance of ${t.name}`);
  }
  function ga(e, t, n) {
    Gs(e, tr), Gs(t, tr), Gs(n, $o);
    const i = Ne.transform(e.__wbg_ptr, t.__wbg_ptr, n.__wbg_ptr);
    if (i[1]) throw Gf(i[0]);
  }
  const Ac = typeof FinalizationRegistry > "u" ? {
    register: () => {
    },
    unregister: () => {
    }
  } : new FinalizationRegistry((e) => Ne.__wbg_point_free(e >>> 0, 1));
  class $o {
    __destroy_into_raw() {
      const t = this.__wbg_ptr;
      return this.__wbg_ptr = 0, Ac.unregister(this), t;
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
      return this.__wbg_ptr = l >>> 0, Ac.register(this, this.__wbg_ptr, this), this;
    }
  }
  const Pc = typeof FinalizationRegistry > "u" ? {
    register: () => {
    },
    unregister: () => {
    }
  } : new FinalizationRegistry((e) => Ne.__wbg_projection_free(e >>> 0, 1));
  class tr {
    __destroy_into_raw() {
      const t = this.__wbg_ptr;
      return this.__wbg_ptr = 0, Pc.unregister(this), t;
    }
    free() {
      const t = this.__destroy_into_raw();
      Ne.__wbg_projection_free(t, 0);
    }
    constructor(t) {
      const n = Uf(t, Ne.__wbindgen_malloc, Ne.__wbindgen_realloc), i = Wo, l = Ne.projection_new(n, i);
      if (l[2]) throw Gf(l[1]);
      return this.__wbg_ptr = l[0] >>> 0, Pc.register(this, this.__wbg_ptr, this), this;
    }
    get projName() {
      let t, n;
      try {
        const i = Ne.projection_projName(this.__wbg_ptr);
        return t = i[0], n = i[1], Ir(i[0], i[1]);
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
        return t = i[0], n = i[1], Ir(i[0], i[1]);
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
        return t = i[0], n = i[1], Ir(i[0], i[1]);
      } finally {
        Ne.__wbindgen_free(t, n, 1);
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
      const t = Ne.__wbindgen_export_0, n = t.grow(4);
      t.set(0, void 0), t.set(n + 0, void 0), t.set(n + 1, null), t.set(n + 2, true), t.set(n + 3, false);
    }, e.wbg.__wbindgen_string_get = function(t, n) {
      const i = n, l = typeof i == "string" ? i : void 0;
      var c = qb(l) ? 0 : Uf(l, Ne.__wbindgen_malloc, Ne.__wbindgen_realloc), f = Wo;
      Oc().setInt32(t + 4, f, true), Oc().setInt32(t + 0, c, true);
    }, e.wbg.__wbindgen_throw = function(t, n) {
      throw new Error(Ir(t, n));
    }, e;
  }
  function Jb(e, t) {
    return Ne = e.exports, Wf.__wbindgen_wasm_module = t, br = null, bi = null, Ne.__wbindgen_start(), Ne;
  }
  async function Wf(e) {
    if (Ne !== void 0) return Ne;
    typeof e < "u" && (Object.getPrototypeOf(e) === Object.prototype ? { module_or_path: e } = e : console.warn("using deprecated parameters for the initialization function; pass a single object instead")), typeof e > "u" && (e = new URL("" + new URL("proj4rs_bg-Biz-E4lt.wasm", import.meta.url).href, import.meta.url));
    const t = Kb();
    (typeof e == "string" || typeof Request == "function" && e instanceof Request || typeof URL == "function" && e instanceof URL) && (e = fetch(e));
    const { instance: n, module: i } = await Yb(await e, t);
    return Jb(n, i);
  }
  const Xb = "" + new URL("proj4rs_bg-Biz-E4lt.wasm", import.meta.url).href, Ni = {
    WGS84: "+proj=longlat +datum=WGS84 +no_defs",
    GRS80: "+proj=latlong +ellps=GRS80 +no_defs",
    UTM_ZONE_50N: "+proj=utm +zone=50 +datum=WGS84 +units=m +no_defs",
    UTM_ZONE_51N: "+proj=utm +zone=51 +datum=WGS84 +units=m +no_defs",
    CGCS2000_3_DEGREE: "+proj=tmerc +lat_0=0 +lon_0=117 +k=1 +x_0=500000 +y_0=0 +ellps=GRS80 +units=m +no_defs",
    BEIJING_1954: "+proj=tmerc +lat_0=0 +lon_0=117 +k=1 +x_0=500000 +y_0=0 +ellps=krass +units=m +no_defs",
    WEB_MERCATOR: "+proj=merc +a=6378137 +b=6378137 +lat_ts=0.0 +lon_0=0.0 +x_0=0.0 +y_0=0 +k=1.0 +units=m +nadgrids=@null +wktext +no_defs"
  };
  let Ws = false;
  async function $f() {
    if (!Ws) try {
      console.log("[Proj4WASM] Fetching WASM module..."), await Wf({
        module_or_path: Xb
      }), Ws = true, console.log("[Proj4WASM] WASM module loaded successfully.");
    } catch (e) {
      console.warn("[Proj4WASM] Failed to load WASM module, using the JS fallback."), console.error(e), Ws = true;
    }
  }
  async function Rc(e, t, n) {
    try {
      await $f();
      const i = new tr(e), l = new tr(t), c = new $o(n[0], n[1], 0);
      ga(i, l, c);
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
  function Mc(e, t) {
    const i = e.latitude * Math.PI / 180, l = t.latitude * Math.PI / 180, c = (t.latitude - e.latitude) * Math.PI / 180, f = (t.longitude - e.longitude) * Math.PI / 180, h = Math.sin(c / 2) * Math.sin(c / 2) + Math.cos(i) * Math.cos(l) * Math.sin(f / 2) * Math.sin(f / 2);
    return 6371e3 * (2 * Math.atan2(Math.sqrt(h), Math.sqrt(1 - h)));
  }
  async function Qb(e, t, n = {}) {
    const { projection: i = Ni.CGCS2000_3_DEGREE, useHaversine: l = false } = n;
    if (l) return Mc(e, t);
    try {
      const c = await Rc(Ni.WGS84, i, [
        e.longitude,
        e.latitude
      ]), f = await Rc(Ni.WGS84, i, [
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
      return console.warn("Failed to use proj4 distance calculation, falling back to haversine:", c), Mc(e, t);
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
  class Bf {
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
        const n = new tr(Ni.WGS84), i = new tr(this.localProjection), l = new $o(t.longitude, t.latitude, 0);
        ga(n, i, l);
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
        const n = new tr(this.localProjection), i = new tr(Ni.WGS84), l = new $o(t.x, t.y, 0);
        ga(n, i, l);
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
  new Bf();
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
      }, this.coordinateTransformer = new Bf(), this.state = {
        position: {
          x: 0,
          y: 0
        },
        velocity: {
          x: 0,
          y: 0
        },
        covariance: new Zt([
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
      this.state.covariance = new Zt([
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
      const i = new Zt([
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
      ]), l = new Zt([
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
      ]), c = new Zt([
        [
          n ? n.x : 0
        ],
        [
          n ? n.y : 0
        ]
      ]), f = this.config.sigmaAcceleration, h = new Zt([
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
      ]).mul(f * f), p = new Zt([
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
      const n = new Zt([
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
      }), l = new Zt([
        [
          i.x
        ],
        [
          i.y
        ]
      ]), c = this.gpsAccuracyToSigma(t.accuracy), f = new Zt([
        [
          c * c,
          0
        ],
        [
          0,
          c * c
        ]
      ]), h = new Zt([
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
      ]), p = n.mmul(h), v = n.mmul(this.state.covariance).mmul(n.transpose()).add(f), w = this.state.covariance.mmul(n.transpose()).mmul(Hb(v)), I = l.sub(p), P = h.add(w.mmul(I)), C = Zt.eye(4).sub(w.mmul(n)).mmul(this.state.covariance);
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
      return t.isErr() ? N(new mt(t.error.message, st.INITIALIZATION_FAILED, t.error)) : (this.initialized = true, G(void 0));
    }
    async getPermissionStatus() {
      return (await this.wrappedProvider.getPermissionStatus()).mapErr((n) => new mt(n.message, st.PERMISSION_DENIED, n));
    }
    async requestPermission() {
      return (await this.wrappedProvider.requestPermission()).mapErr((n) => new mt(n.message, st.PERMISSION_DENIED, n));
    }
    async getCurrentPosition() {
      if (!this.initialized) {
        const i = await this.init();
        if (i.isErr()) return N(i.error);
      }
      const t = await this.wrappedProvider.getCurrentPosition();
      if (t.isErr()) return N(new mt(t.error.message, st.POSITION_UNAVAILABLE, t.error));
      const n = await this.applyKalmanFilter(t.value);
      return G(n);
    }
    async watchPosition(t) {
      if (!this.initialized) {
        const i = await this.init();
        if (i.isErr()) return N(i.error);
      }
      if (this.watchId !== null) return N(new mt("Watch already active", st.WATCH_FAILED));
      const n = await this.wrappedProvider.watchPosition(async (i) => {
        const l = await this.applyKalmanFilter(i);
        t(l);
      });
      return n.isErr() ? N(new mt(n.error.message, st.WATCH_FAILED, n.error)) : (this.watchId = n.value, this.config.enableIMUFusion && this.startIMUFusion(), G(this.watchId));
    }
    clearWatch(t) {
      this.stopIMUFusion();
      const n = this.wrappedProvider.clearWatch(t);
      return n.isErr() ? N(new mt(n.error.message, st.CLEAR_WATCH_FAILED, n.error)) : (this.watchId = null, this.lastGPSReading = null, G(void 0));
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
      return this.initialized ? G(void 0) : this.isSupported() ? (this.initialized = true, G(void 0)) : N(new wt("Device orientation is not supported by this browser"));
    }
    async start() {
      if (!this.initialized) {
        const t = await this.init();
        if (t.isErr()) return N(t.error);
      }
      if (this.isWatching) return G(void 0);
      try {
        return window.addEventListener("deviceorientation", this.boundHandleOrientationEvent, true), this.isWatching = true, G(void 0);
      } catch (t) {
        return N(new wt("Failed to start device orientation", void 0, t));
      }
    }
    stop() {
      if (!this.isWatching) return G(void 0);
      try {
        return window.removeEventListener("deviceorientation", this.boundHandleOrientationEvent, true), this.isWatching = false, this.lastReading = null, G(void 0);
      } catch (t) {
        return N(new wt("Failed to stop device orientation", void 0, t));
      }
    }
    async getCurrentOrientation() {
      if (!this.initialized) {
        const t = await this.init();
        if (t.isErr()) return N(t.error);
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
  class Lc {
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
      return this.initialized ? G(void 0) : this.isSupported() ? ("DeviceOrientationEvent" in window && window.addEventListener("deviceorientation", this.handleOrientationEvent.bind(this)), this.initialized = true, G(void 0)) : N(new wt("Device motion is not supported by this browser"));
    }
    async startAcceleration(t = {}) {
      if (!this.initialized) {
        const n = await this.init();
        if (n.isErr()) return N(n.error);
      }
      if (this.isAccelerationActive) return G(void 0);
      this.normalizeAccelerationToENU = t.normalizeToENU ?? false;
      try {
        return this.motionEventListenerCount === 0 && window.addEventListener("devicemotion", this.handleMotionEvent.bind(this), true), this.motionEventListenerCount++, this.isAccelerationActive = true, G(void 0);
      } catch (n) {
        return N(new wt("Failed to start acceleration monitoring", void 0, n));
      }
    }
    async startGyroscope(t = {}) {
      if (!this.initialized) {
        const n = await this.init();
        if (n.isErr()) return N(n.error);
      }
      if (this.isGyroscopeActive) return G(void 0);
      this.normalizeGyroscopeToENU = t.normalizeToENU ?? false;
      try {
        return this.motionEventListenerCount === 0 && window.addEventListener("devicemotion", this.handleMotionEvent.bind(this), true), this.motionEventListenerCount++, this.isGyroscopeActive = true, G(void 0);
      } catch (n) {
        return N(new wt("Failed to start gyroscope monitoring", void 0, n));
      }
    }
    stopAcceleration() {
      if (!this.isAccelerationActive) return G(void 0);
      try {
        return this.motionEventListenerCount--, this.isAccelerationActive = false, this.lastAccelerationReading = null, this.normalizeAccelerationToENU = false, this.motionEventListenerCount === 0 && window.removeEventListener("devicemotion", this.handleMotionEvent.bind(this), true), G(void 0);
      } catch (t) {
        return N(new wt("Failed to stop acceleration monitoring", void 0, t));
      }
    }
    stopGyroscope() {
      if (!this.isGyroscopeActive) return G(void 0);
      try {
        return this.motionEventListenerCount--, this.isGyroscopeActive = false, this.lastGyroscopeReading = null, this.normalizeGyroscopeToENU = false, this.motionEventListenerCount === 0 && window.removeEventListener("devicemotion", this.handleMotionEvent.bind(this), true), G(void 0);
      } catch (t) {
        return N(new wt("Failed to stop gyroscope monitoring", void 0, t));
      }
    }
    async getAccelerationReading() {
      if (!this.initialized) {
        const t = await this.init();
        if (t.isErr()) return N(t.error);
      }
      return G(this.lastAccelerationReading);
    }
    async getGyroscopeReading() {
      if (!this.initialized) {
        const t = await this.init();
        if (t.isErr()) return N(t.error);
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
      const i = n.alpha * Math.PI / 180, l = n.beta * Math.PI / 180, c = n.gamma * Math.PI / 180, f = Math.cos(i), h = Math.sin(i), p = Math.cos(l), v = Math.sin(l), w = Math.cos(c), I = Math.sin(c), P = t.x * f - t.y * h, R = t.x * h + t.y * f, C = t.z, L = P * p + C * v, Z = R, j = -P * v + C * p, U = L, ne = Z * w - j * I, W = Z * I + j * w;
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
        const n = qa.getPlatformContext(), i = new _Er(n), l = i.initializeProviders(t);
        if (l.isErr()) return N(l.error);
        _Er.instance = i;
      }
      return G(_Er.instance);
    }
    initializeProviders(t) {
      var _a2;
      try {
        return this.storageProvider = this.createStorageProvider(t == null ? void 0 : t.storage), this.imuProvider = this.createIMUProvider(), this.deviceOrientationProvider = this.createDeviceOrientationProvider(), this.geolocationProvider = this.createGeolocationProvider(t == null ? void 0 : t.geolocation), ((_a2 = t == null ? void 0 : t.geolocation) == null ? void 0 : _a2.enableKalmanFilter) && this.geolocationProvider instanceof $s && this.imuProvider && this.setupIMUFusion(), this.fileProvider = this.createFileProvider(), this.initialized = true, G(void 0);
      } catch (n) {
        return N(new Fr("Failed to initialize platform providers", yr.DETECTION_FAILED, n));
      }
    }
    createStorageProvider(t) {
      switch (this.context.environment) {
        case ot.TAURI:
          return new Mb((t == null ? void 0 : t.tauriStorePath) || "user-data.json");
        case ot.WEB:
        case ot.MOBILE_WEB:
        default:
          return new Nb((t == null ? void 0 : t.webDbName) || "trackmaker-db", (t == null ? void 0 : t.webStoreName) || "user-data");
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
        init: async () => N(new wt("File provider not implemented")),
        readFile: async () => N(new wt("File provider not implemented")),
        writeFile: async () => N(new wt("File provider not implemented")),
        deleteFile: async () => N(new wt("File provider not implemented")),
        listFiles: async () => N(new wt("File provider not implemented")),
        exists: async () => N(new wt("File provider not implemented")),
        isSupported: () => false
      };
    }
    createIMUProvider() {
      switch (this.context.environment) {
        case ot.TAURI:
          return new Lc();
        case ot.WEB:
        case ot.MOBILE_WEB:
        default:
          return new Lc();
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
      return this.storageProvider ? G(this.storageProvider) : N(new Fr("Storage provider not initialized", yr.DETECTION_FAILED));
    }
    getGeolocation() {
      return this.geolocationProvider ? G(this.geolocationProvider) : N(new Fr("Geolocation provider not initialized", yr.DETECTION_FAILED));
    }
    getFile() {
      return this.fileProvider ? G(this.fileProvider) : N(new Fr("File provider not initialized", yr.DETECTION_FAILED));
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
      return this.imuProvider ? G(this.imuProvider) : N(new Fr("IMU provider not initialized", yr.DETECTION_FAILED));
    }
    getDeviceOrientation() {
      return this.deviceOrientationProvider ? G(this.deviceOrientationProvider) : N(new Fr("Device orientation provider not initialized", yr.DETECTION_FAILED));
    }
  };
  __publicField(_Er, "instance", null);
  let Er = _Er;
  Bi = function(e) {
    return Er.getInstance(e);
  };
  tv = function() {
    return qa.detectEnvironment() === ot.TAURI;
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
        return t.isOk() ? (this.currentPermissionState = t.value, G(t.value)) : N(new Cr("Failed to get permission status from platform provider", t.error));
      } catch (t) {
        return N(new Cr("Platform provider permission check error", t));
      }
      if (!navigator.geolocation) return N(new ub("Geolocation is not supported by this browser"));
      try {
        if (!navigator.permissions) return this.fallbackPermissionCheck();
        const t = await navigator.permissions.query({
          name: "geolocation"
        });
        return this.currentPermissionState = t.state, G(t.state);
      } catch (t) {
        return N(new Cr("Failed to get permission status", t));
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
        return n.isOk() ? (this.currentPermissionState = n.value, G(n.value)) : N(new Cr("Failed to request permission from platform provider", n.error));
      } catch (n) {
        return N(new Cr("Platform provider permission request error", n));
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
        return N(new Cr("Failed to request permission", n));
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
  class co {
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
  let uo = -1, Cc = {
    latitude: 0,
    longitude: 0
  };
  const kc = "https://ipapi.co/json/";
  class ov {
    async getPermissionStatus() {
      try {
        return await fetch(kc), "granted";
      } catch {
        return "denied";
      }
    }
    async fetchRaw(t = 1e4) {
      const n = new Promise(async (l, c) => {
        try {
          const f = await fetch(kc);
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
        if (uo === -1) {
          const l = () => {
            this.getCurrentPosition().then((c) => {
              Xy(c, Cc) || (console.info("[geolocation] IP geolocation position updated"), nr.forEach((f) => f.callback(c)), Cc = Ct(c));
            }).catch((c) => {
              throw console.error("[geolocation] Error in IP geolocation watch:", c), new Error(`Error while watching the geolocation [IP]. Code: ${zf.UNKNOWN}, Msg: ${c}`);
            });
          };
          uo = setInterval(() => l(), 2e4), console.info("[geolocation] IP geolocation watch interval started"), l();
        }
        i(n);
      });
    }
    clearWatch(t) {
      console.info("[geolocation] Clearing IP geolocation watch handler"), iv(t), nr.length === 0 && (console.info("[geolocation] Stopping IP geolocation watch interval"), clearInterval(uo), uo = -1);
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
        const n = Bi();
        if (n.isErr()) return console.warn("[GeolocationManager] Failed to get platform services, will try IP backend"), await this.initializeWithIPBackend();
        const i = n.value.getGeolocation();
        if (i.isErr()) return console.warn("[GeolocationManager] Failed to get geolocation provider, will try IP backend"), await this.initializeWithIPBackend();
        if (this.platformGeolocationProvider = i.value, (await this.platformGeolocationProvider.init()).isErr()) return console.warn("[GeolocationManager] Failed to initialize platform provider, will try IP backend"), await this.initializeWithIPBackend();
        this.permissionService.setPlatformProvider(this.platformGeolocationProvider);
        const c = await this.permissionService.getPermissionStatus();
        if (c.isErr()) return ut(c.error, "GeolocationManager.initialize.permission"), console.warn("[GeolocationManager] Failed to get permission status, will try IP backend"), await this.initializeWithIPBackend();
        const f = c.value;
        if (f === "prompt" && t && await t(f)) {
          const v = await this.platformGeolocationProvider.requestPermission();
          if (v.isErr()) return ut(v.error, "GeolocationManager.initialize.requestPermission"), console.warn("[GeolocationManager] Failed to request permission, will try IP backend"), await this.initializeWithIPBackend();
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
      if (!this.platformGeolocationProvider) return N(new it("No platform geolocation provider available", "no_platform_provider"));
      try {
        const t = await this.platformGeolocationProvider.getCurrentPosition();
        if (t.isOk()) {
          const n = t.value;
          return G(new co(n.coords.latitude, n.coords.longitude, n.coords.accuracy));
        } else return N(new it("Failed to get location from platform provider", "platform_location_failed", t.error));
      } catch (t) {
        return N(new it("Exception while getting location from platform provider", "platform_location_exception", t));
      }
    }
    async initializeWithIPBackend() {
      if (console.info("[GeolocationManager] Initializing with IP backend as fallback"), !this.ipBackend) return N(new it("IP backend not available", "ip_backend_unavailable"));
      try {
        const t = await this.ipBackend.getCurrentPosition();
        return console.info("[GeolocationManager] Successfully got location via IP backend"), this.currentBackend = "ip", this.lastKnownLocation = t, this.isInitialized = true, console.info("[GeolocationManager] Geolocation services initialized successfully using IP backend"), G(void 0);
      } catch (t) {
        const n = new it("Failed to initialize geolocation manager with IP backend", "ip_backend_failed", t);
        return ut(n, "GeolocationManager.initializeWithIPBackend"), N(n);
      }
    }
    async getCurrentLocation() {
      if (!this.isInitialized) {
        const t = new it("Geolocation manager not initialized", "not_initialized");
        return ut(t, "GeolocationManager.getCurrentLocation"), N(t);
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
      return N(new it("No working geolocation backend available", "no_working_backend"));
    }
    async getLocationFromPlatformProvider() {
      if (!this.platformGeolocationProvider) return N(new it("Platform geolocation provider not available", "platform_provider_unavailable"));
      const t = await this.platformGeolocationProvider.getCurrentPosition();
      if (t.isOk()) {
        const n = t.value, i = new co(n.coords.latitude, n.coords.longitude, n.coords.accuracy);
        return console.info("[GeolocationManager] Location retrieved from platform provider"), this.doLocationUpdate(i), G(i);
      } else return ut(t.error, "GeolocationManager.getLocationFromPlatformProvider"), N(new it("Failed to get location from platform provider", "platform_provider_failed", t.error));
    }
    async getLocationFromIPBackend() {
      if (!this.ipBackend) return N(new it("IP backend not available", "ip_backend_unavailable"));
      try {
        const t = await this.ipBackend.getCurrentPosition();
        return console.info("[GeolocationManager] Location retrieved from IP backend"), this.doLocationUpdate(t), G(t);
      } catch (t) {
        const n = Ht(t, "Failed to get location from IP backend");
        return ut(n, "GeolocationManager.getLocationFromIPBackend"), N(new it("Failed to get location from IP backend", "ip_backend_failed", n));
      }
    }
    async startLocationUpdates(t) {
      if (!this.isInitialized) {
        const n = new it("Geolocation manager not initialized", "not_initialized");
        return ut(n, "GeolocationManager.startLocationUpdates"), N(n);
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
      return N(new it("No working geolocation backend available for location updates", "no_working_backend_for_updates"));
    }
    async startPlatformLocationUpdates(t) {
      if (!this.platformGeolocationProvider) return N(new it("Platform geolocation provider not available", "platform_provider_unavailable"));
      const n = await this.platformGeolocationProvider.watchPosition((i) => {
        const l = new co(i.coords.latitude, i.coords.longitude, i.coords.accuracy);
        this.doLocationUpdate(l), t(l);
      });
      return n.isOk() ? (console.info("[GeolocationManager] Location updates started via platform provider"), this.isWatching = true, this.watchId = n.value, G(n.value)) : N(new it("Failed to start location updates via platform provider", "platform_watch_failed", n.error));
    }
    async startIPLocationUpdates(t) {
      if (!this.ipBackend) return N(new it("IP backend not available", "ip_backend_unavailable"));
      try {
        const n = await this.ipBackend.watchPosition((i) => {
          this.lastKnownLocation = i, this.doLocationUpdate(i), t(i);
        });
        return console.info("[GeolocationManager] Location updates started via IP backend"), this.isWatching = true, this.watchId = n, G(n);
      } catch (n) {
        const i = Ht(n, "Failed to start location updates via IP backend");
        return ut(i, "GeolocationManager.startIPLocationUpdates"), N(new it("Failed to start location updates via IP backend", "ip_watch_failed", i));
      }
    }
    stopLocationUpdates(t) {
      if (!this.isInitialized) {
        const n = new it("Geolocation manager not initialized", "not_initialized");
        return ut(n, "GeolocationManager.stopLocationUpdates"), N(n);
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
        return N(n || new it("No working geolocation backend available for stopping updates", "no_working_backend_for_stop"));
      }
    }
    stopPlatformLocationUpdates(t) {
      if (!this.platformGeolocationProvider) return N(new it("Platform geolocation provider not available", "platform_provider_unavailable"));
      const n = this.platformGeolocationProvider.clearWatch(t);
      return n.isOk() ? (console.info("[GeolocationManager] Location updates stopped via platform provider"), this.isWatching = false, this.watchId = null, G(void 0)) : N(new it("Failed to stop location updates via platform provider", "platform_clear_watch_failed", n.error));
    }
    stopIPLocationUpdates(t) {
      if (!this.ipBackend) return N(new it("IP backend not available", "ip_backend_unavailable"));
      try {
        return this.ipBackend.clearWatch(t), console.info("[GeolocationManager] Location updates stopped via IP backend"), this.isWatching = false, this.watchId = null, G(void 0);
      } catch (n) {
        const i = Ht(n, "Failed to stop location updates via IP backend");
        return ut(i, "GeolocationManager.stopIPLocationUpdates"), N(new it("Failed to stop location updates via IP backend", "ip_clear_watch_failed", i));
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
      return this.lastKnownLocation ? this.lastKnownLocation : (console.warn("[GeolocationManager] No known location available - returning default coordinates (0, 0)"), new co(0, 0));
    }
    addLocationListener(t) {
      const n = +`${Date.now()} + ${Math.floor(Math.random() * 1e4)}`;
      return this.locationUpdateCallbacks.set(n, t), n;
    }
    removeLocationListener(t) {
      this.locationUpdateCallbacks.delete(t);
    }
    doLocationUpdate(t) {
      this.lastKnownLocation = Ct(t), this.locationUpdateCallbacks.forEach((n) => n(Ct(t)));
    }
    getPermissionStatus() {
      return this.permissionService.currentPermission;
    }
    async refreshBackend() {
      return G(void 0);
    }
  };
  class av extends Mr {
    constructor(t, n, i) {
      super(t, i);
      __publicField(this, "domain", Zr.UPDATE_SERVICE);
      this.code = n, this.name = "ImuError";
    }
  }
  class He extends av {
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
        const t = Bi();
        if (t.isErr()) return N(new He("Failed to get platform services", "platform_services_failed", t.error));
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
        const n = Ht(t, "Exception during IMU initialization");
        return ut(n, "ImuOrientationManager.initialize"), N(new He("Initialization exception", "initialization_exception", n));
      }
    }
    async getCurrentOrientation() {
      if (!this.isInitialized) return N(new He("Manager not initialized", "not_initialized"));
      if (!this.orientationProvider) return N(new He("Orientation provider unavailable", "no_orientation_provider"));
      try {
        const t = await this.orientationProvider.getCurrentOrientation();
        return t.isOk() ? (t.value && (this.lastKnownOrientation = Ct(t.value), this.notifyOrientationListeners(t.value)), G(t.value)) : N(new He("Failed to get orientation", "get_orientation_failed", t.error));
      } catch (t) {
        const n = Ht(t, "Exception getting orientation");
        return ut(n, "ImuOrientationManager.getCurrentOrientation"), N(new He("Orientation exception", "orientation_exception", n));
      }
    }
    async startOrientationUpdates(t) {
      if (!this.isInitialized) {
        const n = await this.initialize();
        if (n.isErr()) return N(n.error);
      }
      if (!this.orientationProvider) return N(new He("Orientation provider unavailable", "no_orientation_provider"));
      try {
        if (this.orientationListenerCount === 0) {
          const l = await this.orientationProvider.start();
          if (l.isErr()) return N(new He("Failed to start orientation provider", "start_orientation_failed", l.error));
        }
        const n = (l) => {
          this.doOrientationUpdate(l), t(l);
        }, i = this.orientationProvider.onOrientationChange(n);
        return this.orientationListeners.set(i, t), this.orientationListenerCount++, console.info("[ImuOrientationManager] Orientation updates started"), G(i);
      } catch (n) {
        const i = Ht(n, "Exception starting orientation updates");
        return ut(i, "ImuOrientationManager.startOrientationUpdates"), N(new He("Start orientation exception", "start_orientation_exception", i));
      }
    }
    stopOrientationUpdates(t) {
      if (!this.orientationProvider) return G(void 0);
      try {
        const n = this.orientationProvider.removeEventListener(t);
        return n.isErr() && console.warn("[ImuOrientationManager] Failed to remove orientation listener from provider:", n.error), this.orientationListeners.delete(t), this.orientationListenerCount > 0 && this.orientationListenerCount--, this.orientationListenerCount === 0 && (this.orientationProvider.stop(), console.info("[ImuOrientationManager] Orientation provider stopped")), console.info("[ImuOrientationManager] Orientation listener removed"), G(void 0);
      } catch (n) {
        const i = Ht(n, "Exception stopping orientation update");
        return ut(i, "ImuOrientationManager.stopOrientationUpdates"), N(new He("Stop orientation exception", "stop_orientation_exception", i));
      }
    }
    isOrientationServiceRunning() {
      return this.orientationListenerCount > 0;
    }
    getLastKnownOrientation() {
      return this.lastKnownOrientation ? Ct(this.lastKnownOrientation) : null;
    }
    async getCurrentAcceleration() {
      if (!this.isInitialized) return N(new He("Manager not initialized", "not_initialized"));
      if (!this.motionProvider) return N(new He("Motion provider unavailable", "no_motion_provider"));
      try {
        const t = await this.motionProvider.getAccelerationReading();
        return t.isOk() ? (t.value && (this.lastKnownAcceleration = Ct(t.value), this.notifyAccelerationListeners(t.value)), G(t.value)) : N(new He("Failed to get acceleration", "get_acceleration_failed", t.error));
      } catch (t) {
        const n = Ht(t, "Exception getting acceleration");
        return ut(n, "ImuOrientationManager.getCurrentAcceleration"), N(new He("Acceleration exception", "acceleration_exception", n));
      }
    }
    async startAccelerationUpdates(t = {}, n) {
      if (!this.isInitialized) {
        const i = await this.initialize();
        if (i.isErr()) return N(i.error);
      }
      if (!this.motionProvider) return N(new He("Motion provider unavailable", "no_motion_provider"));
      try {
        if (this.accelerationListenerCount === 0) {
          const c = await this.motionProvider.startAcceleration(t);
          if (c.isErr()) return N(new He("Failed to start acceleration provider", "start_acceleration_failed", c.error));
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
        const l = Ht(i, "Exception starting acceleration updates");
        return ut(l, "ImuOrientationManager.startAccelerationUpdates"), N(new He("Start acceleration exception", "start_acceleration_exception", l));
      }
    }
    stopAccelerationUpdates(t) {
      if (!this.motionProvider) return G(void 0);
      try {
        const n = this.motionProvider.removeEventListener(t);
        return n.isErr() && console.warn("[ImuOrientationManager] Failed to remove acceleration listener from provider:", n.error), this.accelerationListeners.delete(t), this.accelerationListenerCount > 0 && this.accelerationListenerCount--, this.accelerationListenerCount === 0 && (this.motionProvider.stopAcceleration(), this.lastKnownAcceleration = null, console.info("[ImuOrientationManager] Acceleration provider stopped")), console.info("[ImuOrientationManager] Acceleration listener removed"), G(void 0);
      } catch (n) {
        const i = Ht(n, "Exception stopping acceleration update");
        return ut(i, "ImuOrientationManager.stopAccelerationUpdates"), N(new He("Stop acceleration exception", "stop_acceleration_exception", i));
      }
    }
    isAccelerationServiceRunning() {
      return this.accelerationListenerCount > 0;
    }
    getLastKnownAcceleration() {
      return this.lastKnownAcceleration ? Ct(this.lastKnownAcceleration) : null;
    }
    async getCurrentGyroscope() {
      if (!this.isInitialized) return N(new He("Manager not initialized", "not_initialized"));
      if (!this.motionProvider) return N(new He("Motion provider unavailable", "no_motion_provider"));
      try {
        const t = await this.motionProvider.getGyroscopeReading();
        return t.isOk() ? (t.value && (this.lastKnownGyroscope = Ct(t.value), this.notifyGyroscopeListeners(t.value)), G(t.value)) : N(new He("Failed to get gyroscope", "get_gyroscope_failed", t.error));
      } catch (t) {
        const n = Ht(t, "Exception getting gyroscope");
        return ut(n, "ImuOrientationManager.getCurrentGyroscope"), N(new He("Gyroscope exception", "gyroscope_exception", n));
      }
    }
    async startGyroscopeUpdates(t = {}, n) {
      if (!this.isInitialized) {
        const i = await this.initialize();
        if (i.isErr()) return N(i.error);
      }
      if (!this.motionProvider) return N(new He("Motion provider unavailable", "no_motion_provider"));
      try {
        if (this.gyroscopeListenerCount === 0) {
          const c = await this.motionProvider.startGyroscope(t);
          if (c.isErr()) return N(new He("Failed to start gyroscope provider", "start_gyroscope_failed", c.error));
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
        const l = Ht(i, "Exception starting gyroscope updates");
        return ut(l, "ImuOrientationManager.startGyroscopeUpdates"), N(new He("Start gyroscope exception", "start_gyroscope_exception", l));
      }
    }
    stopGyroscopeUpdates(t) {
      if (!this.motionProvider) return G(void 0);
      try {
        const n = this.motionProvider.removeEventListener(t);
        return n.isErr() && console.warn("[ImuOrientationManager] Failed to remove gyroscope listener from provider:", n.error), this.gyroscopeListeners.delete(t), this.gyroscopeListenerCount > 0 && this.gyroscopeListenerCount--, this.gyroscopeListenerCount === 0 && (this.motionProvider.stopGyroscope(), this.lastKnownGyroscope = null, console.info("[ImuOrientationManager] Gyroscope provider stopped")), console.info("[ImuOrientationManager] Gyroscope listener removed"), G(void 0);
      } catch (n) {
        const i = Ht(n, "Exception stopping gyroscope update");
        return ut(i, "ImuOrientationManager.stopGyroscopeUpdates"), N(new He("Stop gyroscope exception", "stop_gyroscope_exception", i));
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
      return t.isErr() && n.isErr() ? N(t.error) : G({
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
        const t = Bi();
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
  di = new lv();
  let Hf;
  const us = (e) => Hf = e, Vf = Symbol();
  function ma(e) {
    return e && typeof e == "object" && Object.prototype.toString.call(e) === "[object Object]" && typeof e.toJSON != "function";
  }
  var Li;
  (function(e) {
    e.direct = "direct", e.patchObject = "patch object", e.patchFunction = "patch function";
  })(Li || (Li = {}));
  function qf() {
    const e = Yc(true), t = e.run(() => en({}));
    let n = [], i = [];
    const l = Ra({
      install(c) {
        us(l), l._a = c, c.provide(Vf, l), c.config.globalProperties.$pinia = l, i.forEach((f) => n.push(f)), i = [];
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
  const Yf = () => {
  };
  function xc(e, t, n, i = Yf) {
    e.push(t);
    const l = () => {
      const c = e.indexOf(t);
      c > -1 && (e.splice(c, 1), i());
    };
    return !n && Kc() && bh(l), l;
  }
  function Dr(e, ...t) {
    e.slice().forEach((n) => {
      n(...t);
    });
  }
  const cv = (e) => e(), Fc = Symbol(), Bs = Symbol();
  function wa(e, t) {
    e instanceof Map && t instanceof Map ? t.forEach((n, i) => e.set(i, n)) : e instanceof Set && t instanceof Set && t.forEach(e.add, e);
    for (const n in t) {
      if (!t.hasOwnProperty(n)) continue;
      const i = t[n], l = e[n];
      ma(l) && ma(i) && e.hasOwnProperty(n) && !at(i) && !rr(i) ? e[n] = wa(l, i) : e[n] = i;
    }
    return e;
  }
  const uv = Symbol();
  function fv(e) {
    return !ma(e) || !Object.prototype.hasOwnProperty.call(e, uv);
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
      const w = Hh(n.state.value[e]);
      return Kn(w, c, Object.keys(f || {}).reduce((I, P) => (I[P] = Ra(Ua(() => {
        us(n);
        const R = n._s.get(e);
        return f[P].call(R, R);
      })), I), {}));
    }
    return p = Kf(e, v, t, n, i, true), p;
  }
  function Kf(e, t, n = {}, i, l, c) {
    let f;
    const h = Kn({
      actions: {}
    }, n), p = {
      deep: true
    };
    let v, w, I = [], P = [], R;
    const C = i.state.value[e];
    !c && !C && (i.state.value[e] = {}), en({});
    let L;
    function Z(me) {
      let ie;
      v = w = false, typeof me == "function" ? (me(i.state.value[e]), ie = {
        type: Li.patchFunction,
        storeId: e,
        events: R
      }) : (wa(i.state.value[e], me), ie = {
        type: Li.patchObject,
        payload: me,
        storeId: e,
        events: R
      });
      const we = L = Symbol();
      mu().then(() => {
        L === we && (v = true);
      }), w = true, Dr(I, ie, i.state.value[e]);
    }
    const j = c ? function() {
      const { state: ie } = n, we = ie ? ie() : {};
      this.$patch((Pe) => {
        Kn(Pe, we);
      });
    } : Yf;
    function U() {
      f.stop(), I = [], P = [], i._s.delete(e);
    }
    const ne = (me, ie = "") => {
      if (Fc in me) return me[Bs] = ie, me;
      const we = function() {
        us(i);
        const Pe = Array.from(arguments), he = [], je = [];
        function lt(Me) {
          he.push(Me);
        }
        function Wt(Me) {
          je.push(Me);
        }
        Dr(P, {
          args: Pe,
          name: we[Bs],
          store: ue,
          after: lt,
          onError: Wt
        });
        let ze;
        try {
          ze = me.apply(this && this.$id === e ? this : ue, Pe);
        } catch (Me) {
          throw Dr(je, Me), Me;
        }
        return ze instanceof Promise ? ze.then((Me) => (Dr(he, Me), Me)).catch((Me) => (Dr(je, Me), Promise.reject(Me))) : (Dr(he, ze), ze);
      };
      return we[Fc] = true, we[Bs] = ie, we;
    }, W = {
      _p: i,
      $id: e,
      $onAction: xc.bind(null, P),
      $patch: Z,
      $reset: j,
      $subscribe(me, ie = {}) {
        const we = xc(I, me, ie.detached, () => Pe()), Pe = f.run(() => $r(() => i.state.value[e], (he) => {
          (ie.flush === "sync" ? w : v) && me({
            storeId: e,
            type: Li.direct,
            events: R
          }, he);
        }, Kn({}, p, ie)));
        return we;
      },
      $dispose: U
    }, ue = Jo(W);
    i._s.set(e, ue);
    const Ae = (i._a && i._a.runWithContext || cv)(() => i._e.run(() => (f = Yc()).run(() => t({
      action: ne
    }))));
    for (const me in Ae) {
      const ie = Ae[me];
      if (at(ie) && !hv(ie) || rr(ie)) c || (C && fv(ie) && (at(ie) ? ie.value = C[me] : wa(ie, C[me])), i.state.value[e][me] = ie);
      else if (typeof ie == "function") {
        const we = ne(ie, me);
        Ae[me] = we, h.actions[me] = ie;
      }
    }
    return Kn(ue, Ae), Kn(ke(ue), Ae), Object.defineProperty(ue, "$state", {
      get: () => i.state.value[e],
      set: (me) => {
        Z((ie) => {
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
    }), C && c && n.hydrate && n.hydrate(ue.$state, C), v = true, w = true, ue;
  }
  Xv = function(e, t, n) {
    let i;
    const l = typeof t == "function";
    i = l ? n : t;
    function c(f, h) {
      const p = Od();
      return f = f || (p ? Ai(Vf, null) : null), f && us(f), f = Hf, f._s.has(e) || (l ? Kf(e, t, i, f) : dv(e, i, f)), f._s.get(e);
    }
    return c.$id = e, c;
  };
  let Dc, pv, gv, mv, wv, yv, bv, vv, Ev, Iv, Tv, _v, Sv, Ov, Av, Rv, Ya;
  Dc = [
    {
      name: "trackmaker",
      displayName: "TrackMaker",
      moduleInit: async () => {
        var _a2;
        const e = ff((await Ps(async () => {
          const { default: n } = await import("./App-C1Nt4I_R.js");
          return {
            default: n
          };
        }, __vite__mapDeps([0,1,2,3]), import.meta.url)).default);
        e.use(qf()), e.use((await Ps(async () => {
          const { default: n } = await import("./index-Dl4gMFCz.js");
          return {
            default: n
          };
        }, __vite__mapDeps([4,2,1,5]), import.meta.url)).default), e.use((await Ps(async () => {
          const { i18n: n } = await import("./index-DUoxD_Ih.js");
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
        await $f();
      },
      dependencies: []
    },
    {
      name: "platform-services",
      displayName: "Platform Services",
      moduleInit: async () => {
        try {
          console.time("Platform services initialise");
          const e = Bi();
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
          if (!Bi()) throw new Error("Platform services not initialized");
          const t = new sv();
          console.time("Geolocation service initialise"), await t.initialize(async (n) => tv() ? void 0 : confirm(n === "prompt" ? "Later your browser will request permission to access your location." : "This app requires access to your location to track your movements.")), console.timeEnd("Geolocation service initialise"), console.time("Geolocation service start"), await t.startLocationUpdates(() => {
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
  Zv = rb;
  Qv = nb;
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
  Av = id({
    __name: "SplashScreen",
    setup(e) {
      const t = en(0), n = en("Initializing..."), i = en(""), l = en(0), c = en(0), f = en(false), h = en(false), p = en(""), v = en("light"), w = () => {
        try {
          window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches ? v.value = "dark" : v.value = "light";
        } catch {
          v.value = "light";
        }
      }, I = () => {
        v.value === "dark" ? document.documentElement.setAttribute("data-theme", "dark") : document.documentElement.setAttribute("data-theme", "light"), console.info("[Splash Screen] Theme applied:", v.value);
      }, P = Ua(() => Math.round(t.value / 100 * 100)), R = {
        info: (...Z) => {
          const j = Z.join(" ");
          console.info(j), n.value = String(j);
        },
        warn: (...Z) => {
          const j = Z.join(" ");
          console.warn(j), n.value = String(j);
        },
        error: (...Z) => {
          const j = Z.join(" ");
          console.error(j), n.value = String(j), p.value = String(j);
        },
        debug: (...Z) => {
          console.debug(...Z);
        }
      }, C = {
        onModuleStart: (Z) => {
          i.value = Z, n.value = `Loading ${Z}...`;
        },
        onModuleComplete: (Z) => {
          c.value++, t.value = Math.min(100, c.value / l.value * 100), n.value = `Loaded ${Z}`;
        },
        onModuleError: (Z, j) => {
          n.value = `Failed to load ${Z}`, p.value = j.message;
        },
        onOverallProgress: (Z, j) => {
          l.value = j, c.value = Z, t.value = Math.min(100, Z / j * 100);
        }
      }, L = () => {
        window.location.reload();
      };
      return Vi(() => {
        var _a2;
        w(), I(), (_a2 = document.getElementById("pre-splash")) == null ? void 0 : _a2.remove();
        const Z = (j, U = /* @__PURE__ */ new Set()) => {
          if (U.has(j)) return 0;
          U.add(j);
          const ne = Dc.find((ue) => ue.name === j);
          if (!ne) return 0;
          let W = 1;
          if (ne.dependencies) for (const ue of ne.dependencies) W += Z(ue, U);
          return W;
        };
        l.value = Z("trackmaker"), console.log("=== Start Loading Modules ==="), Mf(Dc, "trackmaker", 3e4, {
          logger: R,
          progressReporter: C,
          printLog: false
        }).then(() => {
          n.value = "All modules loaded successfully", i.value = "TrackMaker", t.value = 100, console.log("=== All Modules Loaded ===");
        }).catch((j) => {
          const U = String(j.toString());
          if (U.toLowerCase().includes("timeout")) {
            const ne = U.split("Trackback").map((W) => W.replace(/((^:\s*)|(,\s*$))/g, ""));
            console.table(ne.map((W) => ({
              Trackback: W
            })), [
              "Trackback"
            ]), h.value = true;
          } else p.value = U, f.value = true;
          console.log("=== Failed to initialize all modules ==="), console.error(j);
        });
      }), (Z, j) => (sn(), Hn("div", pv, [
        tt("div", gv, [
          j[7] || (j[7] = tt("div", {
            class: "logo-section"
          }, [
            tt("div", {
              class: "app-logo"
            }, [
              tt("img", {
                src: Wp,
                alt: "TrackMaker Logo",
                height: "80",
                width: "80"
              })
            ]),
            tt("h1", {
              class: "app-title"
            }, " TrackMaker ")
          ], -1)),
          !f.value && !h.value ? (sn(), Hn("div", mv, [
            tt("div", wv, [
              tt("div", yv, [
                tt("div", {
                  class: "progress-fill",
                  style: qo({
                    width: `${P.value}%`
                  })
                }, null, 4)
              ]),
              tt("div", bv, pi(P.value) + "% ", 1)
            ]),
            tt("div", vv, [
              tt("p", Ev, " Loading: " + pi(i.value), 1)
            ]),
            j[0] || (j[0] = tt("div", {
              class: "loading-animation"
            }, [
              tt("div", {
                class: "spinner"
              })
            ], -1))
          ])) : Es("", true),
          f.value ? (sn(), Hn("div", Iv, [
            j[1] || (j[1] = tt("div", {
              class: "error-icon"
            }, " \u26A0\uFE0F ", -1)),
            j[2] || (j[2] = tt("h2", null, "Loading Error", -1)),
            tt("div", Tv, [
              (sn(true), Hn(Pt, null, md((p.value ?? "").split(`
`), (U) => (sn(), Hn("div", {
                key: U,
                style: {
                  display: "block",
                  "font-family": "monospace",
                  overflow: "auto"
                }
              }, [
                U.toLocaleLowerCase().includes("trackback") ? (sn(), Hn("strong", _v, pi(U), 1)) : (sn(), Hn("span", Sv, pi(U), 1))
              ]))), 128))
            ]),
            tt("button", {
              class: "retry-button",
              onClick: L
            }, " Retry ")
          ])) : Es("", true),
          h.value ? (sn(), Hn("div", Ov, [
            j[3] || (j[3] = tt("div", {
              class: "timeout-icon"
            }, " \u23F0 ", -1)),
            j[4] || (j[4] = tt("h2", null, "Connection Timeout", -1)),
            j[5] || (j[5] = tt("p", null, "Unable to load required modules within the timeout period.", -1)),
            j[6] || (j[6] = tt("p", null, "Please check your internet connection and try again.", -1)),
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
  Ya = ff(Rv);
  Ya.use(qf());
  Ya.mount("#splash");
  window.splashScreen = Ya;
})();
export {
  jv as $,
  pi as A,
  $v as B,
  Zs as C,
  Fv as D,
  xb as E,
  Pt as F,
  is as G,
  Tn as H,
  In as I,
  lr as J,
  xv as K,
  Wv as L,
  ar as M,
  sd as N,
  ad as O,
  Bv as P,
  mu as Q,
  Lv as R,
  Et as S,
  Cv as T,
  Un as U,
  qo as V,
  Hv as W,
  at as X,
  Ra as Y,
  Gh as Z,
  Pv as _,
  __tla,
  tt as a,
  Gv as a0,
  Ct as a1,
  Mr as a2,
  Zr as a3,
  G as a4,
  N as a5,
  Xv as a6,
  Kv as a7,
  kv as a8,
  Dv as a9,
  Rg as aA,
  ko as aB,
  vf as aC,
  ew as aD,
  vw as aE,
  Bm as aF,
  pf as aG,
  Ww as aH,
  Uh as aI,
  Hr as aJ,
  ns as aK,
  Bi as aL,
  Kc as aM,
  bh as aN,
  Od as aO,
  Mv as aP,
  Gn as aQ,
  Yv as aR,
  Yc as aS,
  md as aa,
  Vv as ab,
  Jv as ac,
  qv as ad,
  Df as ae,
  Zv as af,
  Qv as ag,
  di as ah,
  sv as ai,
  Ps as aj,
  tv as ak,
  qr as al,
  sr as am,
  Fl as an,
  yg as ao,
  Eg as ap,
  Tg as aq,
  wg as ar,
  Ga as as,
  mf as at,
  am as au,
  Rr as av,
  Fn as aw,
  Rf as ax,
  hm as ay,
  gf as az,
  en as b,
  Hn as c,
  id as d,
  cd as e,
  Ca as f,
  Jo as g,
  sp as h,
  Ai as i,
  Ua as j,
  Vi as k,
  ka as l,
  Xd as m,
  Ia as n,
  sn as o,
  Sd as p,
  $r as q,
  uu as r,
  Mt as s,
  Nv as t,
  zv as u,
  hu as v,
  Uv as w,
  Es as x,
  ed as y,
  Jd as z
};
