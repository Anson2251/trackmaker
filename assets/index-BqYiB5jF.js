const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["./App-ASGYRXlM.js","./SelectorDrawer.vue_vue_type_script_setup_true_lang-BAhoGA20.js","./index-C62BHZf1.js","./SelectorDrawer-Dg3sM_aP.css","./index-De6vnxxQ.js","./App-Bp_jwbR1.css","./index-DudGwjU_.js","./index-pPOOvXlB.css"])))=>i.map(i=>d[i]);
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
let Tr, Ko, Df, Cp, Mi, pr, Lt, Xo, Ta, NR, QO, AR, Ns, LR, xf, Vf, po, zi, Nf, us, CR, DR, ct, Ka, mf, Ls, So, pR, Ve, VR, bR, yR, RR, wR, ep, FR, JR, MR, ta, wa, BI, fn, Ol, _E, Wi, xh, pn, GI, zI, _h, cI, yi, FE, em, NE, Gh, Rm, Ef, Rt, en, gs, gu, Xd, Mf, IR, $i, PR, As, BR, WR, xR, kR, GR, _R, jR, YR, SR, QR, eA, UR, si, lg, br, Io, To, on, rl, JT, eI, iI, XT, kh, Bh, $f, zR, $R, KR, qR, XR, Jl, Pe, Di, Yf, Za, Vt, fs, kp, Pn, nc, ku, gR, tr, Ba, ii, Ff, OR, ca, Qa, vp, ER, vR, mR, ZR, HR, vt;
let __tla = (async () => {
  var _a2;
  (function() {
    const t = document.createElement("link").relList;
    if (t && t.supports && t.supports("modulepreload")) return;
    for (const c of document.querySelectorAll('link[rel="modulepreload"]')) o(c);
    new MutationObserver((c) => {
      for (const l of c) if (l.type === "childList") for (const h of l.addedNodes) h.tagName === "LINK" && h.rel === "modulepreload" && o(h);
    }).observe(document, {
      childList: true,
      subtree: true
    });
    function i(c) {
      const l = {};
      return c.integrity && (l.integrity = c.integrity), c.referrerPolicy && (l.referrerPolicy = c.referrerPolicy), c.crossOrigin === "use-credentials" ? l.credentials = "include" : c.crossOrigin === "anonymous" ? l.credentials = "omit" : l.credentials = "same-origin", l;
    }
    function o(c) {
      if (c.ep) return;
      c.ep = true;
      const l = i(c);
      fetch(c.href, l);
    }
  })();
  function Ga(e) {
    const t = /* @__PURE__ */ Object.create(null);
    for (const i of e.split(",")) t[i] = 1;
    return (i) => i in t;
  }
  const _e = {}, zo = [], li = () => {
  }, lu = () => false, rs = (e) => e.charCodeAt(0) === 111 && e.charCodeAt(1) === 110 && (e.charCodeAt(2) > 122 || e.charCodeAt(2) < 97), ka = (e) => e.startsWith("onUpdate:"), dt = Object.assign, _a = (e, t) => {
    const i = e.indexOf(t);
    i > -1 && e.splice(i, 1);
  }, Pd = Object.prototype.hasOwnProperty, ze = (e, t) => Pd.call(e, t), ge = Array.isArray, $o = (e) => dn(e) === "[object Map]", uu = (e) => dn(e) === "[object Set]", Oc = (e) => dn(e) === "[object Date]", Ud = (e) => dn(e) === "[object RegExp]", we = (e) => typeof e == "function", at = (e) => typeof e == "string", di = (e) => typeof e == "symbol", je = (e) => e !== null && typeof e == "object", hu = (e) => (je(e) || we(e)) && we(e.then) && we(e.catch), du = Object.prototype.toString, dn = (e) => du.call(e), Wd = (e) => dn(e).slice(8, -1), fu = (e) => dn(e) === "[object Object]", ss = (e) => at(e) && e !== "NaN" && e[0] !== "-" && "" + parseInt(e, 10) === e, Hn = Ga(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"), as = (e) => {
    const t = /* @__PURE__ */ Object.create(null);
    return ((i) => t[i] || (t[i] = e(i)));
  }, Gd = /-\w/g, Xt = as((e) => e.replace(Gd, (t) => t.slice(1).toUpperCase())), kd = /\B([A-Z])/g, Ki = as((e) => e.replace(kd, "-$1").toLowerCase()), cs = as((e) => e.charAt(0).toUpperCase() + e.slice(1)), Fs = as((e) => e ? `on${cs(e)}` : ""), kt = (e, t) => !Object.is(e, t), Dn = (e, ...t) => {
    for (let i = 0; i < e.length; i++) e[i](...t);
  }, pu = (e, t, i, o = false) => {
    Object.defineProperty(e, t, {
      configurable: true,
      enumerable: false,
      writable: o,
      value: i
    });
  }, _d = (e) => {
    const t = parseFloat(e);
    return isNaN(t) ? e : t;
  }, Bd = (e) => {
    const t = at(e) ? Number(e) : NaN;
    return isNaN(t) ? e : t;
  };
  let gc;
  const ls = () => gc || (gc = typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : typeof window < "u" ? window : typeof global < "u" ? global : {});
  us = function(e) {
    if (ge(e)) {
      const t = {};
      for (let i = 0; i < e.length; i++) {
        const o = e[i], c = at(o) ? Vd(o) : us(o);
        if (c) for (const l in c) t[l] = c[l];
      }
      return t;
    } else if (at(e) || je(e)) return e;
  };
  const Yd = /;(?![^(]*\))/g, jd = /:([^]+)/, xd = /\/\*[^]*?\*\//g;
  function Vd(e) {
    const t = {};
    return e.replace(xd, "").split(Yd).forEach((i) => {
      if (i) {
        const o = i.split(jd);
        o.length > 1 && (t[o[0].trim()] = o[1].trim());
      }
    }), t;
  }
  Ba = function(e) {
    let t = "";
    if (at(e)) t = e;
    else if (ge(e)) for (let i = 0; i < e.length; i++) {
      const o = Ba(e[i]);
      o && (t += o + " ");
    }
    else if (je(e)) for (const i in e) e[i] && (t += i + " ");
    return t.trim();
  };
  const zd = "itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly", $d = Ga(zd);
  function Tu(e) {
    return !!e || e === "";
  }
  function Kd(e, t) {
    if (e.length !== t.length) return false;
    let i = true;
    for (let o = 0; i && o < e.length; o++) i = Ya(e[o], t[o]);
    return i;
  }
  function Ya(e, t) {
    if (e === t) return true;
    let i = Oc(e), o = Oc(t);
    if (i || o) return i && o ? e.getTime() === t.getTime() : false;
    if (i = di(e), o = di(t), i || o) return e === t;
    if (i = ge(e), o = ge(t), i || o) return i && o ? Kd(e, t) : false;
    if (i = je(e), o = je(t), i || o) {
      if (!i || !o) return false;
      const c = Object.keys(e).length, l = Object.keys(t).length;
      if (c !== l) return false;
      for (const h in e) {
        const d = e.hasOwnProperty(h), p = t.hasOwnProperty(h);
        if (d && !p || !d && p || !Ya(e[h], t[h])) return false;
      }
    }
    return String(e) === String(t);
  }
  let Iu, Eu, Ms;
  Iu = (e) => !!(e && e.__v_isRef === true);
  Mi = (e) => at(e) ? e : e == null ? "" : ge(e) || je(e) && (e.toString === du || !we(e.toString)) ? Iu(e) ? Mi(e.value) : JSON.stringify(e, Eu, 2) : String(e);
  Eu = (e, t) => Iu(t) ? Eu(e, t.value) : $o(t) ? {
    [`Map(${t.size})`]: [
      ...t.entries()
    ].reduce((i, [o, c], l) => (i[Ms(o, l) + " =>"] = c, i), {})
  } : uu(t) ? {
    [`Set(${t.size})`]: [
      ...t.values()
    ].map((i) => Ms(i))
  } : di(t) ? Ms(t) : je(t) && !ge(t) && !fu(t) ? String(t) : t;
  Ms = (e, t = "") => {
    var i;
    return di(e) ? `Symbol(${(i = e.description) != null ? i : t})` : e;
  };
  function qd(e) {
    return e == null ? "initial" : typeof e == "string" ? e === "" ? " " : e : String(e);
  }
  let yt;
  class mu {
    constructor(t = false) {
      this.detached = t, this._active = true, this._on = 0, this.effects = [], this.cleanups = [], this._isPaused = false, this.__v_skip = true, this.parent = yt, !t && yt && (this.index = (yt.scopes || (yt.scopes = [])).push(this) - 1);
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
        const i = yt;
        try {
          return yt = this, t();
        } finally {
          yt = i;
        }
      }
    }
    on() {
      ++this._on === 1 && (this.prevScope = yt, yt = this);
    }
    off() {
      this._on > 0 && --this._on === 0 && (yt = this.prevScope, this.prevScope = void 0);
    }
    stop(t) {
      if (this._active) {
        this._active = false;
        let i, o;
        for (i = 0, o = this.effects.length; i < o; i++) this.effects[i].stop();
        for (this.effects.length = 0, i = 0, o = this.cleanups.length; i < o; i++) this.cleanups[i]();
        if (this.cleanups.length = 0, this.scopes) {
          for (i = 0, o = this.scopes.length; i < o; i++) this.scopes[i].stop(true);
          this.scopes.length = 0;
        }
        if (!this.detached && this.parent && !t) {
          const c = this.parent.scopes.pop();
          c && c !== this && (this.parent.scopes[this.index] = c, c.index = this.index);
        }
        this.parent = void 0;
      }
    }
  }
  function Ou(e) {
    return new mu(e);
  }
  gu = function() {
    return yt;
  };
  Xd = function(e, t = false) {
    yt && yt.cleanups.push(e);
  };
  let Qe;
  const Ps = /* @__PURE__ */ new WeakSet();
  class Ru {
    constructor(t) {
      this.fn = t, this.deps = void 0, this.depsTail = void 0, this.flags = 5, this.next = void 0, this.cleanup = void 0, this.scheduler = void 0, yt && yt.active && yt.effects.push(this);
    }
    pause() {
      this.flags |= 64;
    }
    resume() {
      this.flags & 64 && (this.flags &= -65, Ps.has(this) && (Ps.delete(this), this.trigger()));
    }
    notify() {
      this.flags & 2 && !(this.flags & 32) || this.flags & 8 || Nu(this);
    }
    run() {
      if (!(this.flags & 1)) return this.fn();
      this.flags |= 2, Rc(this), Su(this);
      const t = Qe, i = ui;
      Qe = this, ui = true;
      try {
        return this.fn();
      } finally {
        wu(this), Qe = t, ui = i, this.flags &= -3;
      }
    }
    stop() {
      if (this.flags & 1) {
        for (let t = this.deps; t; t = t.nextDep) Va(t);
        this.deps = this.depsTail = void 0, Rc(this), this.onStop && this.onStop(), this.flags &= -2;
      }
    }
    trigger() {
      this.flags & 64 ? Ps.add(this) : this.scheduler ? this.scheduler() : this.runIfDirty();
    }
    runIfDirty() {
      ra(this) && this.run();
    }
    get dirty() {
      return ra(this);
    }
  }
  let Au = 0, Fn, Mn;
  function Nu(e, t = false) {
    if (e.flags |= 8, t) {
      e.next = Mn, Mn = e;
      return;
    }
    e.next = Fn, Fn = e;
  }
  function ja() {
    Au++;
  }
  function xa() {
    if (--Au > 0) return;
    if (Mn) {
      let t = Mn;
      for (Mn = void 0; t; ) {
        const i = t.next;
        t.next = void 0, t.flags &= -9, t = i;
      }
    }
    let e;
    for (; Fn; ) {
      let t = Fn;
      for (Fn = void 0; t; ) {
        const i = t.next;
        if (t.next = void 0, t.flags &= -9, t.flags & 1) try {
          t.trigger();
        } catch (o) {
          e || (e = o);
        }
        t = i;
      }
    }
    if (e) throw e;
  }
  function Su(e) {
    for (let t = e.deps; t; t = t.nextDep) t.version = -1, t.prevActiveLink = t.dep.activeLink, t.dep.activeLink = t;
  }
  function wu(e) {
    let t, i = e.depsTail, o = i;
    for (; o; ) {
      const c = o.prevDep;
      o.version === -1 ? (o === i && (i = c), Va(o), Jd(o)) : t = o, o.dep.activeLink = o.prevActiveLink, o.prevActiveLink = void 0, o = c;
    }
    e.deps = t, e.depsTail = i;
  }
  function ra(e) {
    for (let t = e.deps; t; t = t.nextDep) if (t.dep.version !== t.version || t.dep.computed && (yu(t.dep.computed) || t.dep.version !== t.version)) return true;
    return !!e._dirty;
  }
  function yu(e) {
    if (e.flags & 4 && !(e.flags & 16) || (e.flags &= -17, e.globalVersion === xn) || (e.globalVersion = xn, !e.isSSR && e.flags & 128 && (!e.deps && !e._dirty || !ra(e)))) return;
    e.flags |= 2;
    const t = e.dep, i = Qe, o = ui;
    Qe = e, ui = true;
    try {
      Su(e);
      const c = e.fn(e._value);
      (t.version === 0 || kt(c, e._value)) && (e.flags |= 128, e._value = c, t.version++);
    } catch (c) {
      throw t.version++, c;
    } finally {
      Qe = i, ui = o, wu(e), e.flags &= -3;
    }
  }
  function Va(e, t = false) {
    const { dep: i, prevSub: o, nextSub: c } = e;
    if (o && (o.nextSub = c, e.prevSub = void 0), c && (c.prevSub = o, e.nextSub = void 0), i.subs === e && (i.subs = o, !o && i.computed)) {
      i.computed.flags &= -5;
      for (let l = i.computed.deps; l; l = l.nextDep) Va(l, true);
    }
    !t && !--i.sc && i.map && i.map.delete(i.key);
  }
  function Jd(e) {
    const { prevDep: t, nextDep: i } = e;
    t && (t.nextDep = i, e.prevDep = void 0), i && (i.prevDep = t, e.nextDep = void 0);
  }
  let ui = true;
  const bu = [];
  function ji() {
    bu.push(ui), ui = false;
  }
  function xi() {
    const e = bu.pop();
    ui = e === void 0 ? true : e;
  }
  function Rc(e) {
    const { cleanup: t } = e;
    if (e.cleanup = void 0, t) {
      const i = Qe;
      Qe = void 0;
      try {
        t();
      } finally {
        Qe = i;
      }
    }
  }
  let xn = 0;
  class Zd {
    constructor(t, i) {
      this.sub = t, this.dep = i, this.version = i.version, this.nextDep = this.prevDep = this.nextSub = this.prevSub = this.prevActiveLink = void 0;
    }
  }
  class hs {
    constructor(t) {
      this.computed = t, this.version = 0, this.activeLink = void 0, this.subs = void 0, this.map = void 0, this.key = void 0, this.sc = 0, this.__v_skip = true;
    }
    track(t) {
      if (!Qe || !ui || Qe === this.computed) return;
      let i = this.activeLink;
      if (i === void 0 || i.sub !== Qe) i = this.activeLink = new Zd(Qe, this), Qe.deps ? (i.prevDep = Qe.depsTail, Qe.depsTail.nextDep = i, Qe.depsTail = i) : Qe.deps = Qe.depsTail = i, Lu(i);
      else if (i.version === -1 && (i.version = this.version, i.nextDep)) {
        const o = i.nextDep;
        o.prevDep = i.prevDep, i.prevDep && (i.prevDep.nextDep = o), i.prevDep = Qe.depsTail, i.nextDep = void 0, Qe.depsTail.nextDep = i, Qe.depsTail = i, Qe.deps === i && (Qe.deps = o);
      }
      return i;
    }
    trigger(t) {
      this.version++, xn++, this.notify(t);
    }
    notify(t) {
      ja();
      try {
        for (let i = this.subs; i; i = i.prevSub) i.sub.notify() && i.sub.dep.notify();
      } finally {
        xa();
      }
    }
  }
  function Lu(e) {
    if (e.dep.sc++, e.sub.flags & 4) {
      const t = e.dep.computed;
      if (t && !e.dep.subs) {
        t.flags |= 20;
        for (let o = t.deps; o; o = o.nextDep) Lu(o);
      }
      const i = e.dep.subs;
      i !== e && (e.prevSub = i, i && (i.nextSub = e)), e.dep.subs = e;
    }
  }
  const Pr = /* @__PURE__ */ new WeakMap(), Do = /* @__PURE__ */ Symbol(""), sa = /* @__PURE__ */ Symbol(""), Vn = /* @__PURE__ */ Symbol("");
  function bt(e, t, i) {
    if (ui && Qe) {
      let o = Pr.get(e);
      o || Pr.set(e, o = /* @__PURE__ */ new Map());
      let c = o.get(i);
      c || (o.set(i, c = new hs()), c.map = o, c.key = i), c.track();
    }
  }
  function Gi(e, t, i, o, c, l) {
    const h = Pr.get(e);
    if (!h) {
      xn++;
      return;
    }
    const d = (p) => {
      p && p.trigger();
    };
    if (ja(), t === "clear") h.forEach(d);
    else {
      const p = ge(e), g = p && ss(i);
      if (p && i === "length") {
        const T = Number(o);
        h.forEach((N, H) => {
          (H === "length" || H === Vn || !di(H) && H >= T) && d(N);
        });
      } else switch ((i !== void 0 || h.has(void 0)) && d(h.get(i)), g && d(h.get(Vn)), t) {
        case "add":
          p ? g && d(h.get("length")) : (d(h.get(Do)), $o(e) && d(h.get(sa)));
          break;
        case "delete":
          p || (d(h.get(Do)), $o(e) && d(h.get(sa)));
          break;
        case "set":
          $o(e) && d(h.get(Do));
          break;
      }
    }
    xa();
  }
  function Qd(e, t) {
    const i = Pr.get(e);
    return i && i.get(t);
  }
  function Go(e) {
    const t = Pe(e);
    return t === e ? t : (bt(t, "iterate", Vn), qt(e) ? t : t.map(fi));
  }
  function ds(e) {
    return bt(e = Pe(e), "iterate", Vn), e;
  }
  function no(e, t) {
    return Vi(e) ? Qo(Bi(e) ? fi(t) : t) : fi(t);
  }
  const ef = {
    __proto__: null,
    [Symbol.iterator]() {
      return Us(this, Symbol.iterator, (e) => no(this, e));
    },
    concat(...e) {
      return Go(this).concat(...e.map((t) => ge(t) ? Go(t) : t));
    },
    entries() {
      return Us(this, "entries", (e) => (e[1] = no(this, e[1]), e));
    },
    every(e, t) {
      return Hi(this, "every", e, t, void 0, arguments);
    },
    filter(e, t) {
      return Hi(this, "filter", e, t, (i) => i.map((o) => no(this, o)), arguments);
    },
    find(e, t) {
      return Hi(this, "find", e, t, (i) => no(this, i), arguments);
    },
    findIndex(e, t) {
      return Hi(this, "findIndex", e, t, void 0, arguments);
    },
    findLast(e, t) {
      return Hi(this, "findLast", e, t, (i) => no(this, i), arguments);
    },
    findLastIndex(e, t) {
      return Hi(this, "findLastIndex", e, t, void 0, arguments);
    },
    forEach(e, t) {
      return Hi(this, "forEach", e, t, void 0, arguments);
    },
    includes(...e) {
      return Ws(this, "includes", e);
    },
    indexOf(...e) {
      return Ws(this, "indexOf", e);
    },
    join(e) {
      return Go(this).join(e);
    },
    lastIndexOf(...e) {
      return Ws(this, "lastIndexOf", e);
    },
    map(e, t) {
      return Hi(this, "map", e, t, void 0, arguments);
    },
    pop() {
      return mn(this, "pop");
    },
    push(...e) {
      return mn(this, "push", e);
    },
    reduce(e, ...t) {
      return Ac(this, "reduce", e, t);
    },
    reduceRight(e, ...t) {
      return Ac(this, "reduceRight", e, t);
    },
    shift() {
      return mn(this, "shift");
    },
    some(e, t) {
      return Hi(this, "some", e, t, void 0, arguments);
    },
    splice(...e) {
      return mn(this, "splice", e);
    },
    toReversed() {
      return Go(this).toReversed();
    },
    toSorted(e) {
      return Go(this).toSorted(e);
    },
    toSpliced(...e) {
      return Go(this).toSpliced(...e);
    },
    unshift(...e) {
      return mn(this, "unshift", e);
    },
    values() {
      return Us(this, "values", (e) => no(this, e));
    }
  };
  function Us(e, t, i) {
    const o = ds(e), c = o[t]();
    return o !== e && !qt(e) && (c._next = c.next, c.next = () => {
      const l = c._next();
      return l.done || (l.value = i(l.value)), l;
    }), c;
  }
  const tf = Array.prototype;
  function Hi(e, t, i, o, c, l) {
    const h = ds(e), d = h !== e && !qt(e), p = h[t];
    if (p !== tf[t]) {
      const N = p.apply(e, l);
      return d ? fi(N) : N;
    }
    let g = i;
    h !== e && (d ? g = function(N, H) {
      return i.call(this, no(e, N), H, e);
    } : i.length > 2 && (g = function(N, H) {
      return i.call(this, N, H, e);
    }));
    const T = p.call(h, g, o);
    return d && c ? c(T) : T;
  }
  function Ac(e, t, i, o) {
    const c = ds(e);
    let l = i;
    return c !== e && (qt(e) ? i.length > 3 && (l = function(h, d, p) {
      return i.call(this, h, d, p, e);
    }) : l = function(h, d, p) {
      return i.call(this, h, no(e, d), p, e);
    }), c[t](l, ...o);
  }
  function Ws(e, t, i) {
    const o = Pe(e);
    bt(o, "iterate", Vn);
    const c = o[t](...i);
    return (c === -1 || c === false) && ps(i[0]) ? (i[0] = Pe(i[0]), o[t](...i)) : c;
  }
  function mn(e, t, i = []) {
    ji(), ja();
    const o = Pe(e)[t].apply(e, i);
    return xa(), xi(), o;
  }
  const of = Ga("__proto__,__v_isRef,__isVue"), Cu = new Set(Object.getOwnPropertyNames(Symbol).filter((e) => e !== "arguments" && e !== "caller").map((e) => Symbol[e]).filter(di));
  function nf(e) {
    di(e) || (e = String(e));
    const t = Pe(this);
    return bt(t, "has", e), t.hasOwnProperty(e);
  }
  class vu {
    constructor(t = false, i = false) {
      this._isReadonly = t, this._isShallow = i;
    }
    get(t, i, o) {
      if (i === "__v_skip") return t.__v_skip;
      const c = this._isReadonly, l = this._isShallow;
      if (i === "__v_isReactive") return !c;
      if (i === "__v_isReadonly") return c;
      if (i === "__v_isShallow") return l;
      if (i === "__v_raw") return o === (c ? l ? pf : Mu : l ? Fu : Du).get(t) || Object.getPrototypeOf(t) === Object.getPrototypeOf(o) ? t : void 0;
      const h = ge(t);
      if (!c) {
        let p;
        if (h && (p = ef[i])) return p;
        if (i === "hasOwnProperty") return nf;
      }
      const d = Reflect.get(t, i, ct(t) ? t : o);
      if ((di(i) ? Cu.has(i) : of(i)) || (c || bt(t, "get", i), l)) return d;
      if (ct(d)) {
        const p = h && ss(i) ? d : d.value;
        return c && je(p) ? ca(p) : p;
      }
      return je(d) ? c ? ca(d) : fs(d) : d;
    }
  }
  class Hu extends vu {
    constructor(t = false) {
      super(false, t);
    }
    set(t, i, o, c) {
      let l = t[i];
      const h = ge(t) && ss(i);
      if (!this._isShallow) {
        const g = Vi(l);
        if (!qt(o) && !Vi(o) && (l = Pe(l), o = Pe(o)), !h && ct(l) && !ct(o)) return g || (l.value = o), true;
      }
      const d = h ? Number(i) < t.length : ze(t, i), p = Reflect.set(t, i, o, ct(t) ? t : c);
      return t === Pe(c) && (d ? kt(o, l) && Gi(t, "set", i, o) : Gi(t, "add", i, o)), p;
    }
    deleteProperty(t, i) {
      const o = ze(t, i);
      t[i];
      const c = Reflect.deleteProperty(t, i);
      return c && o && Gi(t, "delete", i, void 0), c;
    }
    has(t, i) {
      const o = Reflect.has(t, i);
      return (!di(i) || !Cu.has(i)) && bt(t, "has", i), o;
    }
    ownKeys(t) {
      return bt(t, "iterate", ge(t) ? "length" : Do), Reflect.ownKeys(t);
    }
  }
  class rf extends vu {
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
  const sf = new Hu(), af = new rf(), cf = new Hu(true);
  const aa = (e) => e, lr = (e) => Reflect.getPrototypeOf(e);
  function lf(e, t, i) {
    return function(...o) {
      const c = this.__v_raw, l = Pe(c), h = $o(l), d = e === "entries" || e === Symbol.iterator && h, p = e === "keys" && h, g = c[e](...o), T = i ? aa : t ? Qo : fi;
      return !t && bt(l, "iterate", p ? sa : Do), dt(Object.create(g), {
        next() {
          const { value: N, done: H } = g.next();
          return H ? {
            value: N,
            done: H
          } : {
            value: d ? [
              T(N[0]),
              T(N[1])
            ] : T(N),
            done: H
          };
        }
      });
    };
  }
  function ur(e) {
    return function(...t) {
      return e === "delete" ? false : e === "clear" ? void 0 : this;
    };
  }
  function uf(e, t) {
    const i = {
      get(c) {
        const l = this.__v_raw, h = Pe(l), d = Pe(c);
        e || (kt(c, d) && bt(h, "get", c), bt(h, "get", d));
        const { has: p } = lr(h), g = t ? aa : e ? Qo : fi;
        if (p.call(h, c)) return g(l.get(c));
        if (p.call(h, d)) return g(l.get(d));
        l !== h && l.get(c);
      },
      get size() {
        const c = this.__v_raw;
        return !e && bt(Pe(c), "iterate", Do), c.size;
      },
      has(c) {
        const l = this.__v_raw, h = Pe(l), d = Pe(c);
        return e || (kt(c, d) && bt(h, "has", c), bt(h, "has", d)), c === d ? l.has(c) : l.has(c) || l.has(d);
      },
      forEach(c, l) {
        const h = this, d = h.__v_raw, p = Pe(d), g = t ? aa : e ? Qo : fi;
        return !e && bt(p, "iterate", Do), d.forEach((T, N) => c.call(l, g(T), g(N), h));
      }
    };
    return dt(i, e ? {
      add: ur("add"),
      set: ur("set"),
      delete: ur("delete"),
      clear: ur("clear")
    } : {
      add(c) {
        !t && !qt(c) && !Vi(c) && (c = Pe(c));
        const l = Pe(this);
        return lr(l).has.call(l, c) || (l.add(c), Gi(l, "add", c, c)), this;
      },
      set(c, l) {
        !t && !qt(l) && !Vi(l) && (l = Pe(l));
        const h = Pe(this), { has: d, get: p } = lr(h);
        let g = d.call(h, c);
        g || (c = Pe(c), g = d.call(h, c));
        const T = p.call(h, c);
        return h.set(c, l), g ? kt(l, T) && Gi(h, "set", c, l) : Gi(h, "add", c, l), this;
      },
      delete(c) {
        const l = Pe(this), { has: h, get: d } = lr(l);
        let p = h.call(l, c);
        p || (c = Pe(c), p = h.call(l, c)), d && d.call(l, c);
        const g = l.delete(c);
        return p && Gi(l, "delete", c, void 0), g;
      },
      clear() {
        const c = Pe(this), l = c.size !== 0, h = c.clear();
        return l && Gi(c, "clear", void 0, void 0), h;
      }
    }), [
      "keys",
      "values",
      "entries",
      Symbol.iterator
    ].forEach((c) => {
      i[c] = lf(c, e, t);
    }), i;
  }
  function za(e, t) {
    const i = uf(e, t);
    return (o, c, l) => c === "__v_isReactive" ? !e : c === "__v_isReadonly" ? e : c === "__v_raw" ? o : Reflect.get(ze(i, c) && c in o ? i : o, c, l);
  }
  const hf = {
    get: za(false, false)
  }, df = {
    get: za(false, true)
  }, ff = {
    get: za(true, false)
  };
  const Du = /* @__PURE__ */ new WeakMap(), Fu = /* @__PURE__ */ new WeakMap(), Mu = /* @__PURE__ */ new WeakMap(), pf = /* @__PURE__ */ new WeakMap();
  function Tf(e) {
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
  function If(e) {
    return e.__v_skip || !Object.isExtensible(e) ? 0 : Tf(Wd(e));
  }
  fs = function(e) {
    return Vi(e) ? e : $a(e, false, sf, hf, Du);
  };
  Ef = function(e) {
    return $a(e, false, cf, df, Fu);
  };
  ca = function(e) {
    return $a(e, true, af, ff, Mu);
  };
  function $a(e, t, i, o, c) {
    if (!je(e) || e.__v_raw && !(t && e.__v_isReactive)) return e;
    const l = If(e);
    if (l === 0) return e;
    const h = c.get(e);
    if (h) return h;
    const d = new Proxy(e, l === 2 ? o : i);
    return c.set(e, d), d;
  }
  function Bi(e) {
    return Vi(e) ? Bi(e.__v_raw) : !!(e && e.__v_isReactive);
  }
  function Vi(e) {
    return !!(e && e.__v_isReadonly);
  }
  function qt(e) {
    return !!(e && e.__v_isShallow);
  }
  function ps(e) {
    return e ? !!e.__v_raw : false;
  }
  Pe = function(e) {
    const t = e && e.__v_raw;
    return t ? Pe(t) : e;
  };
  Ka = function(e) {
    return !ze(e, "__v_skip") && Object.isExtensible(e) && pu(e, "__v_skip", true), e;
  };
  const fi = (e) => je(e) ? fs(e) : e, Qo = (e) => je(e) ? ca(e) : e;
  ct = function(e) {
    return e ? e.__v_isRef === true : false;
  };
  Vt = function(e) {
    return Pu(e, false);
  };
  mf = function(e) {
    return Pu(e, true);
  };
  function Pu(e, t) {
    return ct(e) ? e : new Of(e, t);
  }
  class Of {
    constructor(t, i) {
      this.dep = new hs(), this.__v_isRef = true, this.__v_isShallow = false, this._rawValue = i ? t : Pe(t), this._value = i ? t : fi(t), this.__v_isShallow = i;
    }
    get value() {
      return this.dep.track(), this._value;
    }
    set value(t) {
      const i = this._rawValue, o = this.__v_isShallow || qt(t) || Vi(t);
      t = o ? t : Pe(t), kt(t, i) && (this._rawValue = t, this._value = o ? t : fi(t), this.dep.trigger());
    }
  }
  Ko = function(e) {
    return ct(e) ? e.value : e;
  };
  IR = function(e) {
    return we(e) ? e() : Ko(e);
  };
  const gf = {
    get: (e, t, i) => t === "__v_raw" ? e : Ko(Reflect.get(e, t, i)),
    set: (e, t, i, o) => {
      const c = e[t];
      return ct(c) && !ct(i) ? (c.value = i, true) : Reflect.set(e, t, i, o);
    }
  };
  function Uu(e) {
    return Bi(e) ? e : new Proxy(e, gf);
  }
  class Rf {
    constructor(t) {
      this.__v_isRef = true, this._value = void 0;
      const i = this.dep = new hs(), { get: o, set: c } = t(i.track.bind(i), i.trigger.bind(i));
      this._get = o, this._set = c;
    }
    get value() {
      return this._value = this._get();
    }
    set value(t) {
      this._set(t);
    }
  }
  function Af(e) {
    return new Rf(e);
  }
  Nf = function(e) {
    const t = ge(e) ? new Array(e.length) : {};
    for (const i in e) t[i] = Wu(e, i);
    return t;
  };
  class Sf {
    constructor(t, i, o) {
      this._object = t, this._key = i, this._defaultValue = o, this.__v_isRef = true, this._value = void 0, this._raw = Pe(t);
      let c = true, l = t;
      if (!ge(t) || !ss(String(i))) do
        c = !ps(l) || qt(l);
      while (c && (l = l.__v_raw));
      this._shallow = c;
    }
    get value() {
      let t = this._object[this._key];
      return this._shallow && (t = Ko(t)), this._value = t === void 0 ? this._defaultValue : t;
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
      return Qd(this._raw, this._key);
    }
  }
  class wf {
    constructor(t) {
      this._getter = t, this.__v_isRef = true, this.__v_isReadonly = true, this._value = void 0;
    }
    get value() {
      return this._value = this._getter();
    }
  }
  ER = function(e, t, i) {
    return ct(e) ? e : we(e) ? new wf(e) : je(e) && arguments.length > 1 ? Wu(e, t, i) : Vt(e);
  };
  function Wu(e, t, i) {
    return new Sf(e, t, i);
  }
  class yf {
    constructor(t, i, o) {
      this.fn = t, this.setter = i, this._value = void 0, this.dep = new hs(this), this.__v_isRef = true, this.deps = void 0, this.depsTail = void 0, this.flags = 16, this.globalVersion = xn - 1, this.next = void 0, this.effect = this, this.__v_isReadonly = !i, this.isSSR = o;
    }
    notify() {
      if (this.flags |= 16, !(this.flags & 8) && Qe !== this) return Nu(this, true), true;
    }
    get value() {
      const t = this.dep.track();
      return yu(this), t && (t.version = this.dep.version), this._value;
    }
    set value(t) {
      this.setter && this.setter(t);
    }
  }
  function bf(e, t, i = false) {
    let o, c;
    return we(e) ? o = e : (o = e.get, c = e.set), new yf(o, c, i);
  }
  const hr = {}, Ur = /* @__PURE__ */ new WeakMap();
  let bo;
  function Lf(e, t = false, i = bo) {
    if (i) {
      let o = Ur.get(i);
      o || Ur.set(i, o = []), o.push(e);
    }
  }
  function Cf(e, t, i = _e) {
    const { immediate: o, deep: c, once: l, scheduler: h, augmentJob: d, call: p } = i, g = (Y) => c ? Y : qt(Y) || c === false || c === 0 ? ki(Y, 1) : ki(Y);
    let T, N, H, C, G = false, F = false;
    if (ct(e) ? (N = () => e.value, G = qt(e)) : Bi(e) ? (N = () => g(e), G = true) : ge(e) ? (F = true, G = e.some((Y) => Bi(Y) || qt(Y)), N = () => e.map((Y) => {
      if (ct(Y)) return Y.value;
      if (Bi(Y)) return g(Y);
      if (we(Y)) return p ? p(Y, 2) : Y();
    })) : we(e) ? t ? N = p ? () => p(e, 2) : e : N = () => {
      if (H) {
        ji();
        try {
          H();
        } finally {
          xi();
        }
      }
      const Y = bo;
      bo = T;
      try {
        return p ? p(e, 3, [
          C
        ]) : e(C);
      } finally {
        bo = Y;
      }
    } : N = li, t && c) {
      const Y = N, ue = c === true ? 1 / 0 : c;
      N = () => ki(Y(), ue);
    }
    const pe = gu(), re = () => {
      T.stop(), pe && pe.active && _a(pe.effects, T);
    };
    if (l && t) {
      const Y = t;
      t = (...ue) => {
        Y(...ue), re();
      };
    }
    let k = F ? new Array(e.length).fill(hr) : hr;
    const J = (Y) => {
      if (!(!(T.flags & 1) || !T.dirty && !Y)) if (t) {
        const ue = T.run();
        if (c || G || (F ? ue.some((Te, oe) => kt(Te, k[oe])) : kt(ue, k))) {
          H && H();
          const Te = bo;
          bo = T;
          try {
            const oe = [
              ue,
              k === hr ? void 0 : F && k[0] === hr ? [] : k,
              C
            ];
            k = ue, p ? p(t, 3, oe) : t(...oe);
          } finally {
            bo = Te;
          }
        }
      } else T.run();
    };
    return d && d(J), T = new Ru(N), T.scheduler = h ? () => h(J, false) : J, C = (Y) => Lf(Y, false, T), H = T.onStop = () => {
      const Y = Ur.get(T);
      if (Y) {
        if (p) p(Y, 4);
        else for (const ue of Y) ue();
        Ur.delete(T);
      }
    }, t ? o ? J(true) : k = T.run() : h ? h(J.bind(null, true), true) : T.run(), re.pause = T.pause.bind(T), re.resume = T.resume.bind(T), re.stop = re, re;
  }
  function ki(e, t = 1 / 0, i) {
    if (t <= 0 || !je(e) || e.__v_skip || (i = i || /* @__PURE__ */ new Map(), (i.get(e) || 0) >= t)) return e;
    if (i.set(e, t), t--, ct(e)) ki(e.value, t, i);
    else if (ge(e)) for (let o = 0; o < e.length; o++) ki(e[o], t, i);
    else if (uu(e) || $o(e)) e.forEach((o) => {
      ki(o, t, i);
    });
    else if (fu(e)) {
      for (const o in e) ki(e[o], t, i);
      for (const o of Object.getOwnPropertySymbols(e)) Object.prototype.propertyIsEnumerable.call(e, o) && ki(e[o], t, i);
    }
    return e;
  }
  function er(e, t, i, o) {
    try {
      return o ? e(...o) : e();
    } catch (c) {
      Ts(c, t, i);
    }
  }
  function pi(e, t, i, o) {
    if (we(e)) {
      const c = er(e, t, i, o);
      return c && hu(c) && c.catch((l) => {
        Ts(l, t, i);
      }), c;
    }
    if (ge(e)) {
      const c = [];
      for (let l = 0; l < e.length; l++) c.push(pi(e[l], t, i, o));
      return c;
    }
  }
  function Ts(e, t, i, o = true) {
    const c = t ? t.vnode : null, { errorHandler: l, throwUnhandledErrorInProduction: h } = t && t.appContext.config || _e;
    if (t) {
      let d = t.parent;
      const p = t.proxy, g = `https://vuejs.org/error-reference/#runtime-${i}`;
      for (; d; ) {
        const T = d.ec;
        if (T) {
          for (let N = 0; N < T.length; N++) if (T[N](e, p, g) === false) return;
        }
        d = d.parent;
      }
      if (l) {
        ji(), er(l, null, 10, [
          e,
          p,
          g
        ]), xi();
        return;
      }
    }
    vf(e, i, c, o, h);
  }
  function vf(e, t, i, o = true, c = false) {
    if (c) throw e;
    console.error(e);
  }
  const Pt = [];
  let gi = -1;
  const qo = [];
  let ro = null, Vo = 0;
  const Gu = Promise.resolve();
  let Wr = null;
  ku = function(e) {
    const t = Wr || Gu;
    return e ? t.then(this ? e.bind(this) : e) : t;
  };
  function Hf(e) {
    let t = gi + 1, i = Pt.length;
    for (; t < i; ) {
      const o = t + i >>> 1, c = Pt[o], l = zn(c);
      l < e || l === e && c.flags & 2 ? t = o + 1 : i = o;
    }
    return t;
  }
  function qa(e) {
    if (!(e.flags & 1)) {
      const t = zn(e), i = Pt[Pt.length - 1];
      !i || !(e.flags & 2) && t >= zn(i) ? Pt.push(e) : Pt.splice(Hf(t), 0, e), e.flags |= 1, _u();
    }
  }
  function _u() {
    Wr || (Wr = Gu.then(ju));
  }
  function Bu(e) {
    ge(e) ? qo.push(...e) : ro && e.id === -1 ? ro.splice(Vo + 1, 0, e) : e.flags & 1 || (qo.push(e), e.flags |= 1), _u();
  }
  function Nc(e, t, i = gi + 1) {
    for (; i < Pt.length; i++) {
      const o = Pt[i];
      if (o && o.flags & 2) {
        if (e && o.id !== e.uid) continue;
        Pt.splice(i, 1), i--, o.flags & 4 && (o.flags &= -2), o(), o.flags & 4 || (o.flags &= -2);
      }
    }
  }
  function Yu(e) {
    if (qo.length) {
      const t = [
        ...new Set(qo)
      ].sort((i, o) => zn(i) - zn(o));
      if (qo.length = 0, ro) {
        ro.push(...t);
        return;
      }
      for (ro = t, Vo = 0; Vo < ro.length; Vo++) {
        const i = ro[Vo];
        i.flags & 4 && (i.flags &= -2), i.flags & 8 || i(), i.flags &= -2;
      }
      ro = null, Vo = 0;
    }
  }
  const zn = (e) => e.id == null ? e.flags & 2 ? -1 : 1 / 0 : e.id;
  function ju(e) {
    try {
      for (gi = 0; gi < Pt.length; gi++) {
        const t = Pt[gi];
        t && !(t.flags & 8) && (t.flags & 4 && (t.flags &= -2), er(t, t.i, t.i ? 15 : 14), t.flags & 4 || (t.flags &= -2));
      }
    } finally {
      for (; gi < Pt.length; gi++) {
        const t = Pt[gi];
        t && (t.flags &= -2);
      }
      gi = -1, Pt.length = 0, Yu(), Wr = null, (Pt.length || qo.length) && ju();
    }
  }
  let At = null, xu = null;
  function Gr(e) {
    const t = At;
    return At = e, xu = e && e.type.__scopeId || null, t;
  }
  Df = function(e, t = At, i) {
    if (!t || e._n) return e;
    const o = (...c) => {
      o._d && xr(-1);
      const l = Gr(t);
      let h;
      try {
        h = e(...c);
      } finally {
        Gr(l), o._d && xr(1);
      }
      return h;
    };
    return o._n = true, o._c = true, o._d = true, o;
  };
  mR = function(e, t) {
    if (At === null) return e;
    const i = Rs(At), o = e.dirs || (e.dirs = []);
    for (let c = 0; c < t.length; c++) {
      let [l, h, d, p = _e] = t[c];
      l && (we(l) && (l = {
        mounted: l,
        updated: l
      }), l.deep && ki(h), o.push({
        dir: l,
        instance: i,
        value: h,
        oldValue: void 0,
        arg: d,
        modifiers: p
      }));
    }
    return e;
  };
  function go(e, t, i, o) {
    const c = e.dirs, l = t && t.dirs;
    for (let h = 0; h < c.length; h++) {
      const d = c[h];
      l && (d.oldValue = l[h].value);
      let p = d.dir[o];
      p && (ji(), pi(p, i, 8, [
        e.el,
        d,
        e,
        t
      ]), xi());
    }
  }
  Ff = function(e, t) {
    if (Ct) {
      let i = Ct.provides;
      const o = Ct.parent && Ct.parent.provides;
      o === i && (i = Ct.provides = Object.create(o)), i[e] = t;
    }
  };
  Pn = function(e, t, i = false) {
    const o = po();
    if (o || Fo) {
      let c = Fo ? Fo._context.provides : o ? o.parent == null || o.ce ? o.vnode.appContext && o.vnode.appContext.provides : o.parent.provides : void 0;
      if (c && e in c) return c[e];
      if (arguments.length > 1) return i && we(t) ? t.call(o && o.proxy) : t;
    }
  };
  Mf = function() {
    return !!(po() || Fo);
  };
  const Pf = /* @__PURE__ */ Symbol.for("v-scx"), Uf = () => Pn(Pf);
  OR = function(e, t) {
    return Is(e, null, t);
  };
  function Wf(e, t) {
    return Is(e, null, {
      flush: "sync"
    });
  }
  Xo = function(e, t, i) {
    return Is(e, t, i);
  };
  function Is(e, t, i = _e) {
    const { immediate: o, deep: c, flush: l, once: h } = i, d = dt({}, i), p = t && o || !t && l !== "post";
    let g;
    if (qn) {
      if (l === "sync") {
        const C = Uf();
        g = C.__watcherHandles || (C.__watcherHandles = []);
      } else if (!p) {
        const C = () => {
        };
        return C.stop = li, C.resume = li, C.pause = li, C;
      }
    }
    const T = Ct;
    d.call = (C, G, F) => pi(C, T, G, F);
    let N = false;
    l === "post" ? d.scheduler = (C) => {
      Tt(C, T && T.suspense);
    } : l !== "sync" && (N = true, d.scheduler = (C, G) => {
      G ? C() : qa(C);
    }), d.augmentJob = (C) => {
      t && (C.flags |= 4), N && (C.flags |= 2, T && (C.id = T.uid, C.i = T));
    };
    const H = Cf(e, t, d);
    return qn && (g ? g.push(H) : p && H()), H;
  }
  function Gf(e, t, i) {
    const o = this.proxy, c = at(e) ? e.includes(".") ? Vu(o, e) : () => o[e] : e.bind(o, o);
    let l;
    we(t) ? l = t : (l = t.handler, i = t);
    const h = ir(this), d = Is(c, l.bind(o), i);
    return h(), d;
  }
  function Vu(e, t) {
    const i = t.split(".");
    return () => {
      let o = e;
      for (let c = 0; c < i.length && o; c++) o = o[i[c]];
      return o;
    };
  }
  const zu = /* @__PURE__ */ Symbol("_vte"), $u = (e) => e.__isTeleport, Un = (e) => e && (e.disabled || e.disabled === ""), Sc = (e) => e && (e.defer || e.defer === ""), wc = (e) => typeof SVGElement < "u" && e instanceof SVGElement, yc = (e) => typeof MathMLElement == "function" && e instanceof MathMLElement, la = (e, t) => {
    const i = e && e.to;
    return at(i) ? t ? t(i) : null : i;
  }, Ku = {
    name: "Teleport",
    __isTeleport: true,
    process(e, t, i, o, c, l, h, d, p, g) {
      const { mc: T, pc: N, pbc: H, o: { insert: C, querySelector: G, createText: F, createComment: pe } } = g, re = Un(t.props);
      let { shapeFlag: k, children: J, dynamicChildren: Y } = t;
      if (e == null) {
        const ue = t.el = F(""), Te = t.anchor = F("");
        C(ue, i, o), C(Te, i, o);
        const oe = (Q, Ie) => {
          k & 16 && T(J, Q, Ie, c, l, h, d, p);
        }, he = () => {
          const Q = t.target = la(t.props, G), Ie = ua(Q, t, F, C);
          Q && (h !== "svg" && wc(Q) ? h = "svg" : h !== "mathml" && yc(Q) && (h = "mathml"), c && c.isCE && (c.ce._teleportTargets || (c.ce._teleportTargets = /* @__PURE__ */ new Set())).add(Q), re || (oe(Q, Ie), Nr(t, false)));
        };
        re && (oe(i, Te), Nr(t, true)), Sc(t.props) ? (t.el.__isMounted = false, Tt(() => {
          he(), delete t.el.__isMounted;
        }, l)) : he();
      } else {
        if (Sc(t.props) && e.el.__isMounted === false) {
          Tt(() => {
            Ku.process(e, t, i, o, c, l, h, d, p, g);
          }, l);
          return;
        }
        t.el = e.el, t.targetStart = e.targetStart;
        const ue = t.anchor = e.anchor, Te = t.target = e.target, oe = t.targetAnchor = e.targetAnchor, he = Un(e.props), Q = he ? i : Te, Ie = he ? ue : oe;
        if (h === "svg" || wc(Te) ? h = "svg" : (h === "mathml" || yc(Te)) && (h = "mathml"), Y ? (H(e.dynamicChildren, Y, Q, c, l, h, d), ic(e, t, true)) : p || N(e, t, Q, Ie, c, l, h, d, false), re) he ? t.props && e.props && t.props.to !== e.props.to && (t.props.to = e.props.to) : dr(t, i, ue, g, 1);
        else if ((t.props && t.props.to) !== (e.props && e.props.to)) {
          const Le = t.target = la(t.props, G);
          Le && dr(t, Le, null, g, 0);
        } else he && dr(t, Te, oe, g, 1);
        Nr(t, re);
      }
    },
    remove(e, t, i, { um: o, o: { remove: c } }, l) {
      const { shapeFlag: h, children: d, anchor: p, targetStart: g, targetAnchor: T, target: N, props: H } = e;
      if (N && (c(g), c(T)), l && c(p), h & 16) {
        const C = l || !Un(H);
        for (let G = 0; G < d.length; G++) {
          const F = d[G];
          o(F, t, i, C, !!F.dynamicChildren);
        }
      }
    },
    move: dr,
    hydrate: kf
  };
  function dr(e, t, i, { o: { insert: o }, m: c }, l = 2) {
    l === 0 && o(e.targetAnchor, t, i);
    const { el: h, anchor: d, shapeFlag: p, children: g, props: T } = e, N = l === 2;
    if (N && o(h, t, i), (!N || Un(T)) && p & 16) for (let H = 0; H < g.length; H++) c(g[H], t, i, 2);
    N && o(d, t, i);
  }
  function kf(e, t, i, o, c, l, { o: { nextSibling: h, parentNode: d, querySelector: p, insert: g, createText: T } }, N) {
    function H(pe, re) {
      let k = re;
      for (; k; ) {
        if (k && k.nodeType === 8) {
          if (k.data === "teleport start anchor") t.targetStart = k;
          else if (k.data === "teleport anchor") {
            t.targetAnchor = k, pe._lpa = t.targetAnchor && h(t.targetAnchor);
            break;
          }
        }
        k = h(k);
      }
    }
    function C(pe, re) {
      re.anchor = N(h(pe), re, d(pe), i, o, c, l);
    }
    const G = t.target = la(t.props, p), F = Un(t.props);
    if (G) {
      const pe = G._lpa || G.firstChild;
      t.shapeFlag & 16 && (F ? (C(e, t), H(G, pe), t.targetAnchor || ua(G, t, T, g, d(e) === G ? e : null)) : (t.anchor = h(e), H(G, pe), t.targetAnchor || ua(G, t, T, g), N(pe && h(pe), t, G, i, o, c, l))), Nr(t, F);
    } else F && t.shapeFlag & 16 && (C(e, t), t.targetStart = e, t.targetAnchor = h(e));
    return t.anchor && h(t.anchor);
  }
  gR = Ku;
  function Nr(e, t) {
    const i = e.ctx;
    if (i && i.ut) {
      let o, c;
      for (t ? (o = e.el, c = e.anchor) : (o = e.targetStart, c = e.targetAnchor); o && o !== c; ) o.nodeType === 1 && o.setAttribute("data-v-owner", i.uid), o = o.nextSibling;
      i.ut();
    }
  }
  function ua(e, t, i, o, c = null) {
    const l = t.targetStart = i(""), h = t.targetAnchor = i("");
    return l[zu] = h, e && (o(l, e, c), o(h, e, c)), h;
  }
  const Ai = /* @__PURE__ */ Symbol("_leaveCb"), On = /* @__PURE__ */ Symbol("_enterCb");
  function qu() {
    const e = {
      isMounted: false,
      isLeaving: false,
      isUnmounting: false,
      leavingVNodes: /* @__PURE__ */ new Map()
    };
    return tr(() => {
      e.isMounted = true;
    }), Za(() => {
      e.isUnmounting = true;
    }), e;
  }
  const ei = [
    Function,
    Array
  ], Xu = {
    mode: String,
    appear: Boolean,
    persisted: Boolean,
    onBeforeEnter: ei,
    onEnter: ei,
    onAfterEnter: ei,
    onEnterCancelled: ei,
    onBeforeLeave: ei,
    onLeave: ei,
    onAfterLeave: ei,
    onLeaveCancelled: ei,
    onBeforeAppear: ei,
    onAppear: ei,
    onAfterAppear: ei,
    onAppearCancelled: ei
  }, Ju = (e) => {
    const t = e.subTree;
    return t.component ? Ju(t.component) : t;
  }, _f = {
    name: "BaseTransition",
    props: Xu,
    setup(e, { slots: t }) {
      const i = po(), o = qu();
      return () => {
        const c = t.default && Xa(t.default(), true);
        if (!c || !c.length) return;
        const l = Zu(c), h = Pe(e), { mode: d } = h;
        if (o.isLeaving) return Gs(l);
        const p = bc(l);
        if (!p) return Gs(l);
        let g = $n(p, h, o, i, (N) => g = N);
        p.type !== Rt && ho(p, g);
        let T = i.subTree && bc(i.subTree);
        if (T && T.type !== Rt && !so(T, p) && Ju(i).type !== Rt) {
          let N = $n(T, h, o, i);
          if (ho(T, N), d === "out-in" && p.type !== Rt) return o.isLeaving = true, N.afterLeave = () => {
            o.isLeaving = false, i.job.flags & 8 || i.update(), delete N.afterLeave, T = void 0;
          }, Gs(l);
          d === "in-out" && p.type !== Rt ? N.delayLeave = (H, C, G) => {
            const F = Qu(o, T);
            F[String(T.key)] = T, H[Ai] = () => {
              C(), H[Ai] = void 0, delete g.delayedLeave, T = void 0;
            }, g.delayedLeave = () => {
              G(), delete g.delayedLeave, T = void 0;
            };
          } : T = void 0;
        } else T && (T = void 0);
        return l;
      };
    }
  };
  function Zu(e) {
    let t = e[0];
    if (e.length > 1) {
      for (const i of e) if (i.type !== Rt) {
        t = i;
        break;
      }
    }
    return t;
  }
  const Bf = _f;
  function Qu(e, t) {
    const { leavingVNodes: i } = e;
    let o = i.get(t.type);
    return o || (o = /* @__PURE__ */ Object.create(null), i.set(t.type, o)), o;
  }
  function $n(e, t, i, o, c) {
    const { appear: l, mode: h, persisted: d = false, onBeforeEnter: p, onEnter: g, onAfterEnter: T, onEnterCancelled: N, onBeforeLeave: H, onLeave: C, onAfterLeave: G, onLeaveCancelled: F, onBeforeAppear: pe, onAppear: re, onAfterAppear: k, onAppearCancelled: J } = t, Y = String(e.key), ue = Qu(i, e), Te = (Q, Ie) => {
      Q && pi(Q, o, 9, Ie);
    }, oe = (Q, Ie) => {
      const Le = Ie[1];
      Te(Q, Ie), ge(Q) ? Q.every((de) => de.length <= 1) && Le() : Q.length <= 1 && Le();
    }, he = {
      mode: h,
      persisted: d,
      beforeEnter(Q) {
        let Ie = p;
        if (!i.isMounted) if (l) Ie = pe || p;
        else return;
        Q[Ai] && Q[Ai](true);
        const Le = ue[Y];
        Le && so(e, Le) && Le.el[Ai] && Le.el[Ai](), Te(Ie, [
          Q
        ]);
      },
      enter(Q) {
        let Ie = g, Le = T, de = N;
        if (!i.isMounted) if (l) Ie = re || g, Le = k || T, de = J || N;
        else return;
        let xe = false;
        Q[On] = (Bt) => {
          xe || (xe = true, Bt ? Te(de, [
            Q
          ]) : Te(Le, [
            Q
          ]), he.delayedLeave && he.delayedLeave(), Q[On] = void 0);
        };
        const ft = Q[On].bind(null, false);
        Ie ? oe(Ie, [
          Q,
          ft
        ]) : ft();
      },
      leave(Q, Ie) {
        const Le = String(e.key);
        if (Q[On] && Q[On](true), i.isUnmounting) return Ie();
        Te(H, [
          Q
        ]);
        let de = false;
        Q[Ai] = (ft) => {
          de || (de = true, Ie(), ft ? Te(F, [
            Q
          ]) : Te(G, [
            Q
          ]), Q[Ai] = void 0, ue[Le] === e && delete ue[Le]);
        };
        const xe = Q[Ai].bind(null, false);
        ue[Le] = e, C ? oe(C, [
          Q,
          xe
        ]) : xe();
      },
      clone(Q) {
        const Ie = $n(Q, t, i, o, c);
        return c && c(Ie), Ie;
      }
    };
    return he;
  }
  function Gs(e) {
    if (Es(e)) return e = zi(e), e.children = null, e;
  }
  function bc(e) {
    if (!Es(e)) return $u(e.type) && e.children ? Zu(e.children) : e;
    if (e.component) return e.component.subTree;
    const { shapeFlag: t, children: i } = e;
    if (i) {
      if (t & 16) return i[0];
      if (t & 32 && we(i.default)) return i.default();
    }
  }
  function ho(e, t) {
    e.shapeFlag & 6 && e.component ? (e.transition = t, ho(e.component.subTree, t)) : e.shapeFlag & 128 ? (e.ssContent.transition = t.clone(e.ssContent), e.ssFallback.transition = t.clone(e.ssFallback)) : e.transition = t;
  }
  function Xa(e, t = false, i) {
    let o = [], c = 0;
    for (let l = 0; l < e.length; l++) {
      let h = e[l];
      const d = i == null ? h.key : String(i) + String(h.key != null ? h.key : l);
      h.type === Lt ? (h.patchFlag & 128 && c++, o = o.concat(Xa(h.children, t, d))) : (t || h.type !== Rt) && o.push(d != null ? zi(h, {
        key: d
      }) : h);
    }
    if (c > 1) for (let l = 0; l < o.length; l++) o[l].patchFlag = -2;
    return o;
  }
  Yf = function(e, t) {
    return we(e) ? dt({
      name: e.name
    }, t, {
      setup: e
    }) : e;
  };
  function eh(e) {
    e.ids = [
      e.ids[0] + e.ids[2]++ + "-",
      0,
      0
    ];
  }
  RR = function(e) {
    const t = po(), i = mf(null);
    if (t) {
      const c = t.refs === _e ? t.refs = {} : t.refs;
      Object.defineProperty(c, e, {
        enumerable: true,
        get: () => i.value,
        set: (l) => i.value = l
      });
    }
    return i;
  };
  function Lc(e, t) {
    let i;
    return !!((i = Object.getOwnPropertyDescriptor(e, t)) && !i.configurable);
  }
  const kr = /* @__PURE__ */ new WeakMap();
  function Wn(e, t, i, o, c = false) {
    if (ge(e)) {
      e.forEach((F, pe) => Wn(F, t && (ge(t) ? t[pe] : t), i, o, c));
      return;
    }
    if (lo(o) && !c) {
      o.shapeFlag & 512 && o.type.__asyncResolved && o.component.subTree.component && Wn(e, t, i, o.component.subTree);
      return;
    }
    const l = o.shapeFlag & 4 ? Rs(o.component) : o.el, h = c ? null : l, { i: d, r: p } = e, g = t && t.r, T = d.refs === _e ? d.refs = {} : d.refs, N = d.setupState, H = Pe(N), C = N === _e ? lu : (F) => Lc(T, F) ? false : ze(H, F), G = (F, pe) => !(pe && Lc(T, pe));
    if (g != null && g !== p) {
      if (Cc(t), at(g)) T[g] = null, C(g) && (N[g] = null);
      else if (ct(g)) {
        const F = t;
        G(g, F.k) && (g.value = null), F.k && (T[F.k] = null);
      }
    }
    if (we(p)) er(p, d, 12, [
      h,
      T
    ]);
    else {
      const F = at(p), pe = ct(p);
      if (F || pe) {
        const re = () => {
          if (e.f) {
            const k = F ? C(p) ? N[p] : T[p] : G() || !e.k ? p.value : T[e.k];
            if (c) ge(k) && _a(k, l);
            else if (ge(k)) k.includes(l) || k.push(l);
            else if (F) T[p] = [
              l
            ], C(p) && (N[p] = T[p]);
            else {
              const J = [
                l
              ];
              G(p, e.k) && (p.value = J), e.k && (T[e.k] = J);
            }
          } else F ? (T[p] = h, C(p) && (N[p] = h)) : pe && (G(p, e.k) && (p.value = h), e.k && (T[e.k] = h));
        };
        if (h) {
          const k = () => {
            re(), kr.delete(e);
          };
          k.id = -1, kr.set(e, k), Tt(k, i);
        } else Cc(e), re();
      }
    }
  }
  function Cc(e) {
    const t = kr.get(e);
    t && (t.flags |= 8, kr.delete(e));
  }
  ls().requestIdleCallback;
  ls().cancelIdleCallback;
  let lo, Es, jf;
  lo = (e) => !!e.type.__asyncLoader;
  Es = (e) => e.type.__isKeepAlive;
  jf = {
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
      const i = po(), o = i.ctx;
      if (!o.renderer) return () => {
        const k = t.default && t.default();
        return k && k.length === 1 ? k[0] : k;
      };
      const c = /* @__PURE__ */ new Map(), l = /* @__PURE__ */ new Set();
      let h = null;
      const d = i.suspense, { renderer: { p, m: g, um: T, o: { createElement: N } } } = o, H = N("div");
      o.activate = (k, J, Y, ue, Te) => {
        const oe = k.component;
        g(k, J, Y, 0, d), p(oe.vnode, k, J, Y, oe, d, ue, k.slotScopeIds, Te), Tt(() => {
          oe.isDeactivated = false, oe.a && Dn(oe.a);
          const he = k.props && k.props.onVnodeMounted;
          he && ti(he, oe.parent, k);
        }, d);
      }, o.deactivate = (k) => {
        const J = k.component;
        Yr(J.m), Yr(J.a), g(k, H, null, 1, d), Tt(() => {
          J.da && Dn(J.da);
          const Y = k.props && k.props.onVnodeUnmounted;
          Y && ti(Y, J.parent, k), J.isDeactivated = true;
        }, d);
      };
      function C(k) {
        ks(k), T(k, i, d, true);
      }
      function G(k) {
        c.forEach((J, Y) => {
          const ue = Ea(lo(J) ? J.type.__asyncResolved || {} : J.type);
          ue && !k(ue) && F(Y);
        });
      }
      function F(k) {
        const J = c.get(k);
        J && (!h || !so(J, h)) ? C(J) : h && ks(h), c.delete(k), l.delete(k);
      }
      Xo(() => [
        e.include,
        e.exclude
      ], ([k, J]) => {
        k && G((Y) => bn(k, Y)), J && G((Y) => !bn(J, Y));
      }, {
        flush: "post",
        deep: true
      });
      let pe = null;
      const re = () => {
        pe != null && (jr(i.subTree.type) ? Tt(() => {
          c.set(pe, fr(i.subTree));
        }, i.subTree.suspense) : c.set(pe, fr(i.subTree)));
      };
      return tr(re), Ja(re), Za(() => {
        c.forEach((k) => {
          const { subTree: J, suspense: Y } = i, ue = fr(J);
          if (k.type === ue.type && k.key === ue.key) {
            ks(ue);
            const Te = ue.component.da;
            Te && Tt(Te, Y);
            return;
          }
          C(k);
        });
      }), () => {
        if (pe = null, !t.default) return h = null;
        const k = t.default(), J = k[0];
        if (k.length > 1) return h = null, k;
        if (!en(J) || !(J.shapeFlag & 4) && !(J.shapeFlag & 128)) return h = null, J;
        let Y = fr(J);
        if (Y.type === Rt) return h = null, Y;
        const ue = Y.type, Te = Ea(lo(Y) ? Y.type.__asyncResolved || {} : ue), { include: oe, exclude: he, max: Q } = e;
        if (oe && (!Te || !bn(oe, Te)) || he && Te && bn(he, Te)) return Y.shapeFlag &= -257, h = Y, J;
        const Ie = Y.key == null ? ue : Y.key, Le = c.get(Ie);
        return Y.el && (Y = zi(Y), J.shapeFlag & 128 && (J.ssContent = Y)), pe = Ie, Le ? (Y.el = Le.el, Y.component = Le.component, Y.transition && ho(Y, Y.transition), Y.shapeFlag |= 512, l.delete(Ie), l.add(Ie)) : (l.add(Ie), Q && l.size > parseInt(Q, 10) && F(l.values().next().value)), Y.shapeFlag |= 256, h = Y, jr(J.type) ? J : Y;
      };
    }
  };
  AR = jf;
  function bn(e, t) {
    return ge(e) ? e.some((i) => bn(i, t)) : at(e) ? e.split(",").includes(t) : Ud(e) ? (e.lastIndex = 0, e.test(t)) : false;
  }
  xf = function(e, t) {
    th(e, "a", t);
  };
  Vf = function(e, t) {
    th(e, "da", t);
  };
  function th(e, t, i = Ct) {
    const o = e.__wdc || (e.__wdc = () => {
      let c = i;
      for (; c; ) {
        if (c.isDeactivated) return;
        c = c.parent;
      }
      return e();
    });
    if (ms(t, o, i), i) {
      let c = i.parent;
      for (; c && c.parent; ) Es(c.parent.vnode) && zf(o, t, i, c), c = c.parent;
    }
  }
  function zf(e, t, i, o) {
    const c = ms(t, e, o, true);
    Qa(() => {
      _a(o[t], c);
    }, i);
  }
  function ks(e) {
    e.shapeFlag &= -257, e.shapeFlag &= -513;
  }
  function fr(e) {
    return e.shapeFlag & 128 ? e.ssContent : e;
  }
  function ms(e, t, i = Ct, o = false) {
    if (i) {
      const c = i[e] || (i[e] = []), l = t.__weh || (t.__weh = (...h) => {
        ji();
        const d = ir(i), p = pi(t, i, e, h);
        return d(), xi(), p;
      });
      return o ? c.unshift(l) : c.push(l), l;
    }
  }
  let qi, ih, Ja, Kf, qf, Xf;
  qi = (e) => (t, i = Ct) => {
    (!qn || e === "sp") && ms(e, (...o) => t(...o), i);
  };
  $f = qi("bm");
  tr = qi("m");
  ih = qi("bu");
  Ja = qi("u");
  Za = qi("bum");
  Qa = qi("um");
  Kf = qi("sp");
  qf = qi("rtg");
  Xf = qi("rtc");
  function Jf(e, t = Ct) {
    ms("ec", e, t);
  }
  const Zf = "components", oh = /* @__PURE__ */ Symbol.for("v-ndc");
  NR = function(e) {
    return at(e) ? Qf(Zf, e, false) || e : e || oh;
  };
  function Qf(e, t, i = true, o = false) {
    const c = At || Ct;
    if (c) {
      const l = c.type;
      {
        const d = Ea(l, false);
        if (d && (d === t || d === Xt(t) || d === cs(Xt(t)))) return l;
      }
      const h = vc(c[e] || l[e], t) || vc(c.appContext[e], t);
      return !h && o ? l : h;
    }
  }
  function vc(e, t) {
    return e && (e[t] || e[Xt(t)] || e[cs(Xt(t))]);
  }
  ep = function(e, t, i, o) {
    let c;
    const l = i, h = ge(e);
    if (h || at(e)) {
      const d = h && Bi(e);
      let p = false, g = false;
      d && (p = !qt(e), g = Vi(e), e = ds(e)), c = new Array(e.length);
      for (let T = 0, N = e.length; T < N; T++) c[T] = t(p ? g ? Qo(fi(e[T])) : fi(e[T]) : e[T], T, void 0, l);
    } else if (typeof e == "number") {
      c = new Array(e);
      for (let d = 0; d < e; d++) c[d] = t(d + 1, d, void 0, l);
    } else if (je(e)) if (e[Symbol.iterator]) c = Array.from(e, (d, p) => t(d, p, void 0, l));
    else {
      const d = Object.keys(e);
      c = new Array(d.length);
      for (let p = 0, g = d.length; p < g; p++) {
        const T = d[p];
        c[p] = t(e[T], T, p, l);
      }
    }
    else c = [];
    return c;
  };
  SR = function(e, t) {
    for (let i = 0; i < t.length; i++) {
      const o = t[i];
      if (ge(o)) for (let c = 0; c < o.length; c++) e[o[c].name] = o[c].fn;
      else o && (e[o.name] = o.key ? (...c) => {
        const l = o.fn(...c);
        return l && (l.key = o.key), l;
      } : o.fn);
    }
    return e;
  };
  wR = function(e, t, i = {}, o, c) {
    if (At.ce || At.parent && lo(At.parent) && At.parent.ce) {
      const g = Object.keys(i).length > 0;
      return t !== "default" && (i.name = t), ii(), Ta(Lt, null, [
        vt("slot", i, o && o())
      ], g ? -2 : 64);
    }
    let l = e[t];
    l && l._c && (l._d = false), ii();
    const h = l && nh(l(i)), d = i.key || h && h.key, p = Ta(Lt, {
      key: (d && !di(d) ? d : `_${t}`) + (!h && o ? "_fb" : "")
    }, h || (o ? o() : []), h && e._ === 1 ? 64 : -2);
    return !c && p.scopeId && (p.slotScopeIds = [
      p.scopeId + "-s"
    ]), l && l._c && (l._d = true), p;
  };
  function nh(e) {
    return e.some((t) => en(t) ? !(t.type === Rt || t.type === Lt && !nh(t.children)) : true) ? e : null;
  }
  const ha = (e) => e ? Nh(e) ? Rs(e) : ha(e.parent) : null, Gn = dt(/* @__PURE__ */ Object.create(null), {
    $: (e) => e,
    $el: (e) => e.vnode.el,
    $data: (e) => e.data,
    $props: (e) => e.props,
    $attrs: (e) => e.attrs,
    $slots: (e) => e.slots,
    $refs: (e) => e.refs,
    $parent: (e) => ha(e.parent),
    $root: (e) => ha(e.root),
    $host: (e) => e.ce,
    $emit: (e) => e.emit,
    $options: (e) => sh(e),
    $forceUpdate: (e) => e.f || (e.f = () => {
      qa(e.update);
    }),
    $nextTick: (e) => e.n || (e.n = ku.bind(e.proxy)),
    $watch: (e) => Gf.bind(e)
  }), _s = (e, t) => e !== _e && !e.__isScriptSetup && ze(e, t), tp = {
    get({ _: e }, t) {
      if (t === "__v_skip") return true;
      const { ctx: i, setupState: o, data: c, props: l, accessCache: h, type: d, appContext: p } = e;
      if (t[0] !== "$") {
        const H = h[t];
        if (H !== void 0) switch (H) {
          case 1:
            return o[t];
          case 2:
            return c[t];
          case 4:
            return i[t];
          case 3:
            return l[t];
        }
        else {
          if (_s(o, t)) return h[t] = 1, o[t];
          if (c !== _e && ze(c, t)) return h[t] = 2, c[t];
          if (ze(l, t)) return h[t] = 3, l[t];
          if (i !== _e && ze(i, t)) return h[t] = 4, i[t];
          da && (h[t] = 0);
        }
      }
      const g = Gn[t];
      let T, N;
      if (g) return t === "$attrs" && bt(e.attrs, "get", ""), g(e);
      if ((T = d.__cssModules) && (T = T[t])) return T;
      if (i !== _e && ze(i, t)) return h[t] = 4, i[t];
      if (N = p.config.globalProperties, ze(N, t)) return N[t];
    },
    set({ _: e }, t, i) {
      const { data: o, setupState: c, ctx: l } = e;
      return _s(c, t) ? (c[t] = i, true) : o !== _e && ze(o, t) ? (o[t] = i, true) : ze(e.props, t) || t[0] === "$" && t.slice(1) in e ? false : (l[t] = i, true);
    },
    has({ _: { data: e, setupState: t, accessCache: i, ctx: o, appContext: c, props: l, type: h } }, d) {
      let p;
      return !!(i[d] || e !== _e && d[0] !== "$" && ze(e, d) || _s(t, d) || ze(l, d) || ze(o, d) || ze(Gn, d) || ze(c.config.globalProperties, d) || (p = h.__cssModules) && p[d]);
    },
    defineProperty(e, t, i) {
      return i.get != null ? e._.accessCache[t] = 0 : ze(i, "value") && this.set(e, t, i.value, null), Reflect.defineProperty(e, t, i);
    }
  };
  function _r(e) {
    return ge(e) ? e.reduce((t, i) => (t[i] = null, t), {}) : e;
  }
  yR = function(e, t) {
    return !e || !t ? e || t : ge(e) && ge(t) ? e.concat(t) : dt({}, _r(e), _r(t));
  };
  let da = true;
  function ip(e) {
    const t = sh(e), i = e.proxy, o = e.ctx;
    da = false, t.beforeCreate && Hc(t.beforeCreate, e, "bc");
    const { data: c, computed: l, methods: h, watch: d, provide: p, inject: g, created: T, beforeMount: N, mounted: H, beforeUpdate: C, updated: G, activated: F, deactivated: pe, beforeDestroy: re, beforeUnmount: k, destroyed: J, unmounted: Y, render: ue, renderTracked: Te, renderTriggered: oe, errorCaptured: he, serverPrefetch: Q, expose: Ie, inheritAttrs: Le, components: de, directives: xe, filters: ft } = t;
    if (g && op(g, o, null), h) for (const He in h) {
      const Ke = h[He];
      we(Ke) && (o[He] = Ke.bind(i));
    }
    if (c) {
      const He = c.call(i, i);
      je(He) && (e.data = fs(He));
    }
    if (da = true, l) for (const He in l) {
      const Ke = l[He], bi = we(Ke) ? Ke.bind(i, i) : we(Ke.get) ? Ke.get.bind(i, i) : li, Wo = !we(Ke) && we(Ke.set) ? Ke.set.bind(i) : li, Li = nc({
        get: bi,
        set: Wo
      });
      Object.defineProperty(o, He, {
        enumerable: true,
        configurable: true,
        get: () => Li.value,
        set: (Re) => Li.value = Re
      });
    }
    if (d) for (const He in d) rh(d[He], o, i, He);
    if (p) {
      const He = we(p) ? p.call(i) : p;
      Reflect.ownKeys(He).forEach((Ke) => {
        Ff(Ke, He[Ke]);
      });
    }
    T && Hc(T, e, "c");
    function Je(He, Ke) {
      ge(Ke) ? Ke.forEach((bi) => He(bi.bind(i))) : Ke && He(Ke.bind(i));
    }
    if (Je($f, N), Je(tr, H), Je(ih, C), Je(Ja, G), Je(xf, F), Je(Vf, pe), Je(Jf, he), Je(Xf, Te), Je(qf, oe), Je(Za, k), Je(Qa, Y), Je(Kf, Q), ge(Ie)) if (Ie.length) {
      const He = e.exposed || (e.exposed = {});
      Ie.forEach((Ke) => {
        Object.defineProperty(He, Ke, {
          get: () => i[Ke],
          set: (bi) => i[Ke] = bi,
          enumerable: true
        });
      });
    } else e.exposed || (e.exposed = {});
    ue && e.render === li && (e.render = ue), Le != null && (e.inheritAttrs = Le), de && (e.components = de), xe && (e.directives = xe), Q && eh(e);
  }
  function op(e, t, i = li) {
    ge(e) && (e = fa(e));
    for (const o in e) {
      const c = e[o];
      let l;
      je(c) ? "default" in c ? l = Pn(c.from || o, c.default, true) : l = Pn(c.from || o) : l = Pn(c), ct(l) ? Object.defineProperty(t, o, {
        enumerable: true,
        configurable: true,
        get: () => l.value,
        set: (h) => l.value = h
      }) : t[o] = l;
    }
  }
  function Hc(e, t, i) {
    pi(ge(e) ? e.map((o) => o.bind(t.proxy)) : e.bind(t.proxy), t, i);
  }
  function rh(e, t, i, o) {
    let c = o.includes(".") ? Vu(i, o) : () => i[o];
    if (at(e)) {
      const l = t[e];
      we(l) && Xo(c, l);
    } else if (we(e)) Xo(c, e.bind(i));
    else if (je(e)) if (ge(e)) e.forEach((l) => rh(l, t, i, o));
    else {
      const l = we(e.handler) ? e.handler.bind(i) : t[e.handler];
      we(l) && Xo(c, l, e);
    }
  }
  function sh(e) {
    const t = e.type, { mixins: i, extends: o } = t, { mixins: c, optionsCache: l, config: { optionMergeStrategies: h } } = e.appContext, d = l.get(t);
    let p;
    return d ? p = d : !c.length && !i && !o ? p = t : (p = {}, c.length && c.forEach((g) => Br(p, g, h, true)), Br(p, t, h)), je(t) && l.set(t, p), p;
  }
  function Br(e, t, i, o = false) {
    const { mixins: c, extends: l } = t;
    l && Br(e, l, i, true), c && c.forEach((h) => Br(e, h, i, true));
    for (const h in t) if (!(o && h === "expose")) {
      const d = np[h] || i && i[h];
      e[h] = d ? d(e[h], t[h]) : t[h];
    }
    return e;
  }
  const np = {
    data: Dc,
    props: Fc,
    emits: Fc,
    methods: Ln,
    computed: Ln,
    beforeCreate: Ft,
    created: Ft,
    beforeMount: Ft,
    mounted: Ft,
    beforeUpdate: Ft,
    updated: Ft,
    beforeDestroy: Ft,
    beforeUnmount: Ft,
    destroyed: Ft,
    unmounted: Ft,
    activated: Ft,
    deactivated: Ft,
    errorCaptured: Ft,
    serverPrefetch: Ft,
    components: Ln,
    directives: Ln,
    watch: sp,
    provide: Dc,
    inject: rp
  };
  function Dc(e, t) {
    return t ? e ? function() {
      return dt(we(e) ? e.call(this, this) : e, we(t) ? t.call(this, this) : t);
    } : t : e;
  }
  function rp(e, t) {
    return Ln(fa(e), fa(t));
  }
  function fa(e) {
    if (ge(e)) {
      const t = {};
      for (let i = 0; i < e.length; i++) t[e[i]] = e[i];
      return t;
    }
    return e;
  }
  function Ft(e, t) {
    return e ? [
      ...new Set([].concat(e, t))
    ] : t;
  }
  function Ln(e, t) {
    return e ? dt(/* @__PURE__ */ Object.create(null), e, t) : t;
  }
  function Fc(e, t) {
    return e ? ge(e) && ge(t) ? [
      .../* @__PURE__ */ new Set([
        ...e,
        ...t
      ])
    ] : dt(/* @__PURE__ */ Object.create(null), _r(e), _r(t ?? {})) : t;
  }
  function sp(e, t) {
    if (!e) return t;
    if (!t) return e;
    const i = dt(/* @__PURE__ */ Object.create(null), e);
    for (const o in t) i[o] = Ft(e[o], t[o]);
    return i;
  }
  function ah() {
    return {
      app: null,
      config: {
        isNativeTag: lu,
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
  let ap = 0;
  function cp(e, t) {
    return function(o, c = null) {
      we(o) || (o = dt({}, o)), c != null && !je(c) && (c = null);
      const l = ah(), h = /* @__PURE__ */ new WeakSet(), d = [];
      let p = false;
      const g = l.app = {
        _uid: ap++,
        _component: o,
        _props: c,
        _container: null,
        _context: l,
        _instance: null,
        version: _p,
        get config() {
          return l.config;
        },
        set config(T) {
        },
        use(T, ...N) {
          return h.has(T) || (T && we(T.install) ? (h.add(T), T.install(g, ...N)) : we(T) && (h.add(T), T(g, ...N))), g;
        },
        mixin(T) {
          return l.mixins.includes(T) || l.mixins.push(T), g;
        },
        component(T, N) {
          return N ? (l.components[T] = N, g) : l.components[T];
        },
        directive(T, N) {
          return N ? (l.directives[T] = N, g) : l.directives[T];
        },
        mount(T, N, H) {
          if (!p) {
            const C = g._ceVNode || vt(o, c);
            return C.appContext = l, H === true ? H = "svg" : H === false && (H = void 0), e(C, T, H), p = true, g._container = T, T.__vue_app__ = g, Rs(C.component);
          }
        },
        onUnmount(T) {
          d.push(T);
        },
        unmount() {
          p && (pi(d, g._instance, 16), e(null, g._container), delete g._container.__vue_app__);
        },
        provide(T, N) {
          return l.provides[T] = N, g;
        },
        runWithContext(T) {
          const N = Fo;
          Fo = g;
          try {
            return T();
          } finally {
            Fo = N;
          }
        }
      };
      return g;
    };
  }
  let Fo = null;
  bR = function(e, t, i = _e) {
    const o = po(), c = Xt(t), l = Ki(t), h = ch(e, c), d = Af((p, g) => {
      let T, N = _e, H;
      return Wf(() => {
        const C = e[c];
        kt(T, C) && (T = C, g());
      }), {
        get() {
          return p(), i.get ? i.get(T) : T;
        },
        set(C) {
          const G = i.set ? i.set(C) : C;
          if (!kt(G, T) && !(N !== _e && kt(C, N))) return;
          const F = o.vnode.props;
          F && (t in F || c in F || l in F) && (`onUpdate:${t}` in F || `onUpdate:${c}` in F || `onUpdate:${l}` in F) || (T = C, g()), o.emit(`update:${t}`, G), kt(C, G) && kt(C, N) && !kt(G, H) && g(), N = C, H = G;
        }
      };
    });
    return d[Symbol.iterator] = () => {
      let p = 0;
      return {
        next() {
          return p < 2 ? {
            value: p++ ? h || _e : d,
            done: false
          } : {
            done: true
          };
        }
      };
    }, d;
  };
  const ch = (e, t) => t === "modelValue" || t === "model-value" ? e.modelModifiers : e[`${t}Modifiers`] || e[`${Xt(t)}Modifiers`] || e[`${Ki(t)}Modifiers`];
  function lp(e, t, ...i) {
    if (e.isUnmounted) return;
    const o = e.vnode.props || _e;
    let c = i;
    const l = t.startsWith("update:"), h = l && ch(o, t.slice(7));
    h && (h.trim && (c = i.map((T) => at(T) ? T.trim() : T)), h.number && (c = i.map(_d)));
    let d, p = o[d = Fs(t)] || o[d = Fs(Xt(t))];
    !p && l && (p = o[d = Fs(Ki(t))]), p && pi(p, e, 6, c);
    const g = o[d + "Once"];
    if (g) {
      if (!e.emitted) e.emitted = {};
      else if (e.emitted[d]) return;
      e.emitted[d] = true, pi(g, e, 6, c);
    }
  }
  const up = /* @__PURE__ */ new WeakMap();
  function lh(e, t, i = false) {
    const o = i ? up : t.emitsCache, c = o.get(e);
    if (c !== void 0) return c;
    const l = e.emits;
    let h = {}, d = false;
    if (!we(e)) {
      const p = (g) => {
        const T = lh(g, t, true);
        T && (d = true, dt(h, T));
      };
      !i && t.mixins.length && t.mixins.forEach(p), e.extends && p(e.extends), e.mixins && e.mixins.forEach(p);
    }
    return !l && !d ? (je(e) && o.set(e, null), null) : (ge(l) ? l.forEach((p) => h[p] = null) : dt(h, l), je(e) && o.set(e, h), h);
  }
  function Os(e, t) {
    return !e || !rs(t) ? false : (t = t.slice(2).replace(/Once$/, ""), ze(e, t[0].toLowerCase() + t.slice(1)) || ze(e, Ki(t)) || ze(e, t));
  }
  function Mc(e) {
    const { type: t, vnode: i, proxy: o, withProxy: c, propsOptions: [l], slots: h, attrs: d, emit: p, render: g, renderCache: T, props: N, data: H, setupState: C, ctx: G, inheritAttrs: F } = e, pe = Gr(e);
    let re, k;
    try {
      if (i.shapeFlag & 4) {
        const Y = c || o, ue = Y;
        re = Ni(g.call(ue, Y, T, N, C, H, G)), k = d;
      } else {
        const Y = t;
        re = Ni(Y.length > 1 ? Y(N, {
          attrs: d,
          slots: h,
          emit: p
        }) : Y(N, null)), k = t.props ? d : hp(d);
      }
    } catch (Y) {
      _n.length = 0, Ts(Y, e, 1), re = vt(Rt);
    }
    let J = re;
    if (k && F !== false) {
      const Y = Object.keys(k), { shapeFlag: ue } = J;
      Y.length && ue & 7 && (l && Y.some(ka) && (k = dp(k, l)), J = zi(J, k, false, true));
    }
    return i.dirs && (J = zi(J, null, false, true), J.dirs = J.dirs ? J.dirs.concat(i.dirs) : i.dirs), i.transition && ho(J, i.transition), re = J, Gr(pe), re;
  }
  const hp = (e) => {
    let t;
    for (const i in e) (i === "class" || i === "style" || rs(i)) && ((t || (t = {}))[i] = e[i]);
    return t;
  }, dp = (e, t) => {
    const i = {};
    for (const o in e) (!ka(o) || !(o.slice(9) in t)) && (i[o] = e[o]);
    return i;
  };
  function fp(e, t, i) {
    const { props: o, children: c, component: l } = e, { props: h, children: d, patchFlag: p } = t, g = l.emitsOptions;
    if (t.dirs || t.transition) return true;
    if (i && p >= 0) {
      if (p & 1024) return true;
      if (p & 16) return o ? Pc(o, h, g) : !!h;
      if (p & 8) {
        const T = t.dynamicProps;
        for (let N = 0; N < T.length; N++) {
          const H = T[N];
          if (uh(h, o, H) && !Os(g, H)) return true;
        }
      }
    } else return (c || d) && (!d || !d.$stable) ? true : o === h ? false : o ? h ? Pc(o, h, g) : true : !!h;
    return false;
  }
  function Pc(e, t, i) {
    const o = Object.keys(t);
    if (o.length !== Object.keys(e).length) return true;
    for (let c = 0; c < o.length; c++) {
      const l = o[c];
      if (uh(t, e, l) && !Os(i, l)) return true;
    }
    return false;
  }
  function uh(e, t, i) {
    const o = e[i], c = t[i];
    return i === "style" && je(o) && je(c) ? !Ya(o, c) : o !== c;
  }
  function pp({ vnode: e, parent: t }, i) {
    for (; t; ) {
      const o = t.subTree;
      if (o.suspense && o.suspense.activeBranch === e && (o.el = e.el), o === e) (e = t.vnode).el = i, t = t.parent;
      else break;
    }
  }
  const hh = {}, dh = () => Object.create(hh), fh = (e) => Object.getPrototypeOf(e) === hh;
  function Tp(e, t, i, o = false) {
    const c = {}, l = dh();
    e.propsDefaults = /* @__PURE__ */ Object.create(null), ph(e, t, c, l);
    for (const h in e.propsOptions[0]) h in c || (c[h] = void 0);
    i ? e.props = o ? c : Ef(c) : e.type.props ? e.props = c : e.props = l, e.attrs = l;
  }
  function Ip(e, t, i, o) {
    const { props: c, attrs: l, vnode: { patchFlag: h } } = e, d = Pe(c), [p] = e.propsOptions;
    let g = false;
    if ((o || h > 0) && !(h & 16)) {
      if (h & 8) {
        const T = e.vnode.dynamicProps;
        for (let N = 0; N < T.length; N++) {
          let H = T[N];
          if (Os(e.emitsOptions, H)) continue;
          const C = t[H];
          if (p) if (ze(l, H)) C !== l[H] && (l[H] = C, g = true);
          else {
            const G = Xt(H);
            c[G] = pa(p, d, G, C, e, false);
          }
          else C !== l[H] && (l[H] = C, g = true);
        }
      }
    } else {
      ph(e, t, c, l) && (g = true);
      let T;
      for (const N in d) (!t || !ze(t, N) && ((T = Ki(N)) === N || !ze(t, T))) && (p ? i && (i[N] !== void 0 || i[T] !== void 0) && (c[N] = pa(p, d, N, void 0, e, true)) : delete c[N]);
      if (l !== d) for (const N in l) (!t || !ze(t, N)) && (delete l[N], g = true);
    }
    g && Gi(e.attrs, "set", "");
  }
  function ph(e, t, i, o) {
    const [c, l] = e.propsOptions;
    let h = false, d;
    if (t) for (let p in t) {
      if (Hn(p)) continue;
      const g = t[p];
      let T;
      c && ze(c, T = Xt(p)) ? !l || !l.includes(T) ? i[T] = g : (d || (d = {}))[T] = g : Os(e.emitsOptions, p) || (!(p in o) || g !== o[p]) && (o[p] = g, h = true);
    }
    if (l) {
      const p = Pe(i), g = d || _e;
      for (let T = 0; T < l.length; T++) {
        const N = l[T];
        i[N] = pa(c, p, N, g[N], e, !ze(g, N));
      }
    }
    return h;
  }
  function pa(e, t, i, o, c, l) {
    const h = e[i];
    if (h != null) {
      const d = ze(h, "default");
      if (d && o === void 0) {
        const p = h.default;
        if (h.type !== Function && !h.skipFactory && we(p)) {
          const { propsDefaults: g } = c;
          if (i in g) o = g[i];
          else {
            const T = ir(c);
            o = g[i] = p.call(null, t), T();
          }
        } else o = p;
        c.ce && c.ce._setProp(i, o);
      }
      h[0] && (l && !d ? o = false : h[1] && (o === "" || o === Ki(i)) && (o = true));
    }
    return o;
  }
  const Ep = /* @__PURE__ */ new WeakMap();
  function Th(e, t, i = false) {
    const o = i ? Ep : t.propsCache, c = o.get(e);
    if (c) return c;
    const l = e.props, h = {}, d = [];
    let p = false;
    if (!we(e)) {
      const T = (N) => {
        p = true;
        const [H, C] = Th(N, t, true);
        dt(h, H), C && d.push(...C);
      };
      !i && t.mixins.length && t.mixins.forEach(T), e.extends && T(e.extends), e.mixins && e.mixins.forEach(T);
    }
    if (!l && !p) return je(e) && o.set(e, zo), zo;
    if (ge(l)) for (let T = 0; T < l.length; T++) {
      const N = Xt(l[T]);
      Uc(N) && (h[N] = _e);
    }
    else if (l) for (const T in l) {
      const N = Xt(T);
      if (Uc(N)) {
        const H = l[T], C = h[N] = ge(H) || we(H) ? {
          type: H
        } : dt({}, H), G = C.type;
        let F = false, pe = true;
        if (ge(G)) for (let re = 0; re < G.length; ++re) {
          const k = G[re], J = we(k) && k.name;
          if (J === "Boolean") {
            F = true;
            break;
          } else J === "String" && (pe = false);
        }
        else F = we(G) && G.name === "Boolean";
        C[0] = F, C[1] = pe, (F || ze(C, "default")) && d.push(N);
      }
    }
    const g = [
      h,
      d
    ];
    return je(e) && o.set(e, g), g;
  }
  function Uc(e) {
    return e[0] !== "$" && !Hn(e);
  }
  const ec = (e) => e === "_" || e === "_ctx" || e === "$stable", tc = (e) => ge(e) ? e.map(Ni) : [
    Ni(e)
  ], mp = (e, t, i) => {
    if (t._n) return t;
    const o = Df((...c) => tc(t(...c)), i);
    return o._c = false, o;
  }, Ih = (e, t, i) => {
    const o = e._ctx;
    for (const c in e) {
      if (ec(c)) continue;
      const l = e[c];
      if (we(l)) t[c] = mp(c, l, o);
      else if (l != null) {
        const h = tc(l);
        t[c] = () => h;
      }
    }
  }, Eh = (e, t) => {
    const i = tc(t);
    e.slots.default = () => i;
  }, mh = (e, t, i) => {
    for (const o in t) (i || !ec(o)) && (e[o] = t[o]);
  }, Op = (e, t, i) => {
    const o = e.slots = dh();
    if (e.vnode.shapeFlag & 32) {
      const c = t._;
      c ? (mh(o, t, i), i && pu(o, "_", c, true)) : Ih(t, o);
    } else t && Eh(e, t);
  }, gp = (e, t, i) => {
    const { vnode: o, slots: c } = e;
    let l = true, h = _e;
    if (o.shapeFlag & 32) {
      const d = t._;
      d ? i && d === 1 ? l = false : mh(c, t, i) : (l = !t.$stable, Ih(t, c)), h = t;
    } else t && (Eh(e, t), h = {
      default: 1
    });
    if (l) for (const d in c) !ec(d) && h[d] == null && delete c[d];
  }, Tt = wp;
  function Rp(e) {
    return Ap(e);
  }
  function Ap(e, t) {
    const i = ls();
    i.__VUE__ = true;
    const { insert: o, remove: c, patchProp: l, createElement: h, createText: d, createComment: p, setText: g, setElementText: T, parentNode: N, nextSibling: H, setScopeId: C = li, insertStaticContent: G } = e, F = (A, y, M, K = null, $ = null, q = null, se = void 0, Z = null, ie = !!y.dynamicChildren) => {
      if (A === y) return;
      A && !so(A, y) && (K = Ci(A), Re(A, $, q, true), A = null), y.patchFlag === -2 && (ie = false, y.dynamicChildren = null);
      const { type: z, ref: Ee, shapeFlag: ae } = y;
      switch (z) {
        case gs:
          pe(A, y, M, K);
          break;
        case Rt:
          re(A, y, M, K);
          break;
        case kn:
          A == null && k(y, M, K, se);
          break;
        case Lt:
          de(A, y, M, K, $, q, se, Z, ie);
          break;
        default:
          ae & 1 ? ue(A, y, M, K, $, q, se, Z, ie) : ae & 6 ? xe(A, y, M, K, $, q, se, Z, ie) : (ae & 64 || ae & 128) && z.process(A, y, M, K, $, q, se, Z, ie, mo);
      }
      Ee != null && $ ? Wn(Ee, A && A.ref, q, y || A, !y) : Ee == null && A && A.ref != null && Wn(A.ref, null, q, A, true);
    }, pe = (A, y, M, K) => {
      if (A == null) o(y.el = d(y.children), M, K);
      else {
        const $ = y.el = A.el;
        y.children !== A.children && g($, y.children);
      }
    }, re = (A, y, M, K) => {
      A == null ? o(y.el = p(y.children || ""), M, K) : y.el = A.el;
    }, k = (A, y, M, K) => {
      [A.el, A.anchor] = G(A.children, y, M, K, A.el, A.anchor);
    }, J = ({ el: A, anchor: y }, M, K) => {
      let $;
      for (; A && A !== y; ) $ = H(A), o(A, M, K), A = $;
      o(y, M, K);
    }, Y = ({ el: A, anchor: y }) => {
      let M;
      for (; A && A !== y; ) M = H(A), c(A), A = M;
      c(y);
    }, ue = (A, y, M, K, $, q, se, Z, ie) => {
      if (y.type === "svg" ? se = "svg" : y.type === "math" && (se = "mathml"), A == null) Te(y, M, K, $, q, se, Z, ie);
      else {
        const z = A.el && A.el._isVueCE ? A.el : null;
        try {
          z && z._beginPatch(), Q(A, y, $, q, se, Z, ie);
        } finally {
          z && z._endPatch();
        }
      }
    }, Te = (A, y, M, K, $, q, se, Z) => {
      let ie, z;
      const { props: Ee, shapeFlag: ae, transition: me, dirs: Ne } = A;
      if (ie = A.el = h(A.type, q, Ee && Ee.is, Ee), ae & 8 ? T(ie, A.children) : ae & 16 && he(A.children, ie, null, K, $, Bs(A, q), se, Z), Ne && go(A, null, K, "created"), oe(ie, A, A.scopeId, se, K), Ee) {
        for (const Be in Ee) Be !== "value" && !Hn(Be) && l(ie, Be, null, Ee[Be], q, K);
        "value" in Ee && l(ie, "value", null, Ee.value, q), (z = Ee.onVnodeBeforeMount) && ti(z, K, A);
      }
      Ne && go(A, null, K, "beforeMount");
      const Fe = Np($, me);
      Fe && me.beforeEnter(ie), o(ie, y, M), ((z = Ee && Ee.onVnodeMounted) || Fe || Ne) && Tt(() => {
        z && ti(z, K, A), Fe && me.enter(ie), Ne && go(A, null, K, "mounted");
      }, $);
    }, oe = (A, y, M, K, $) => {
      if (M && C(A, M), K) for (let q = 0; q < K.length; q++) C(A, K[q]);
      if ($) {
        let q = $.subTree;
        if (y === q || jr(q.type) && (q.ssContent === y || q.ssFallback === y)) {
          const se = $.vnode;
          oe(A, se, se.scopeId, se.slotScopeIds, $.parent);
        }
      }
    }, he = (A, y, M, K, $, q, se, Z, ie = 0) => {
      for (let z = ie; z < A.length; z++) {
        const Ee = A[z] = Z ? Ui(A[z]) : Ni(A[z]);
        F(null, Ee, y, M, K, $, q, se, Z);
      }
    }, Q = (A, y, M, K, $, q, se) => {
      const Z = y.el = A.el;
      let { patchFlag: ie, dynamicChildren: z, dirs: Ee } = y;
      ie |= A.patchFlag & 16;
      const ae = A.props || _e, me = y.props || _e;
      let Ne;
      if (M && Ro(M, false), (Ne = me.onVnodeBeforeUpdate) && ti(Ne, M, y, A), Ee && go(y, A, M, "beforeUpdate"), M && Ro(M, true), (ae.innerHTML && me.innerHTML == null || ae.textContent && me.textContent == null) && T(Z, ""), z ? Ie(A.dynamicChildren, z, Z, M, K, Bs(y, $), q) : se || Ke(A, y, Z, null, M, K, Bs(y, $), q, false), ie > 0) {
        if (ie & 16) Le(Z, ae, me, M, $);
        else if (ie & 2 && ae.class !== me.class && l(Z, "class", null, me.class, $), ie & 4 && l(Z, "style", ae.style, me.style, $), ie & 8) {
          const Fe = y.dynamicProps;
          for (let Be = 0; Be < Fe.length; Be++) {
            const Ye = Fe[Be], Nt = ae[Ye], St = me[Ye];
            (St !== Nt || Ye === "value") && l(Z, Ye, Nt, St, $, M);
          }
        }
        ie & 1 && A.children !== y.children && T(Z, y.children);
      } else !se && z == null && Le(Z, ae, me, M, $);
      ((Ne = me.onVnodeUpdated) || Ee) && Tt(() => {
        Ne && ti(Ne, M, y, A), Ee && go(y, A, M, "updated");
      }, K);
    }, Ie = (A, y, M, K, $, q, se) => {
      for (let Z = 0; Z < y.length; Z++) {
        const ie = A[Z], z = y[Z], Ee = ie.el && (ie.type === Lt || !so(ie, z) || ie.shapeFlag & 198) ? N(ie.el) : M;
        F(ie, z, Ee, null, K, $, q, se, true);
      }
    }, Le = (A, y, M, K, $) => {
      if (y !== M) {
        if (y !== _e) for (const q in y) !Hn(q) && !(q in M) && l(A, q, y[q], null, $, K);
        for (const q in M) {
          if (Hn(q)) continue;
          const se = M[q], Z = y[q];
          se !== Z && q !== "value" && l(A, q, Z, se, $, K);
        }
        "value" in M && l(A, "value", y.value, M.value, $);
      }
    }, de = (A, y, M, K, $, q, se, Z, ie) => {
      const z = y.el = A ? A.el : d(""), Ee = y.anchor = A ? A.anchor : d("");
      let { patchFlag: ae, dynamicChildren: me, slotScopeIds: Ne } = y;
      Ne && (Z = Z ? Z.concat(Ne) : Ne), A == null ? (o(z, M, K), o(Ee, M, K), he(y.children || [], M, Ee, $, q, se, Z, ie)) : ae > 0 && ae & 64 && me && A.dynamicChildren && A.dynamicChildren.length === me.length ? (Ie(A.dynamicChildren, me, M, $, q, se, Z), (y.key != null || $ && y === $.subTree) && ic(A, y, true)) : Ke(A, y, M, Ee, $, q, se, Z, ie);
    }, xe = (A, y, M, K, $, q, se, Z, ie) => {
      y.slotScopeIds = Z, A == null ? y.shapeFlag & 512 ? $.ctx.activate(y, M, K, se, ie) : ft(y, M, K, $, q, se, ie) : Bt(A, y, ie);
    }, ft = (A, y, M, K, $, q, se) => {
      const Z = A.component = Fp(A, K, $);
      if (Es(A) && (Z.ctx.renderer = mo), Mp(Z, false, se), Z.asyncDep) {
        if ($ && $.registerDep(Z, Je, se), !A.el) {
          const ie = Z.subTree = vt(Rt);
          re(null, ie, y, M), A.placeholder = ie.el;
        }
      } else Je(Z, A, y, M, $, q, se);
    }, Bt = (A, y, M) => {
      const K = y.component = A.component;
      if (fp(A, y, M)) if (K.asyncDep && !K.asyncResolved) {
        He(K, y, M);
        return;
      } else K.next = y, K.update();
      else y.el = A.el, K.vnode = y;
    }, Je = (A, y, M, K, $, q, se) => {
      const Z = () => {
        if (A.isMounted) {
          let { next: ae, bu: me, u: Ne, parent: Fe, vnode: Be } = A;
          {
            const Zt = Oh(A);
            if (Zt) {
              ae && (ae.el = Be.el, He(A, ae, se)), Zt.asyncDep.then(() => {
                Tt(() => {
                  A.isUnmounted || z();
                }, $);
              });
              return;
            }
          }
          let Ye = ae, Nt;
          Ro(A, false), ae ? (ae.el = Be.el, He(A, ae, se)) : ae = Be, me && Dn(me), (Nt = ae.props && ae.props.onVnodeBeforeUpdate) && ti(Nt, Fe, ae, Be), Ro(A, true);
          const St = Mc(A), Jt = A.subTree;
          A.subTree = St, F(Jt, St, N(Jt.el), Ci(Jt), A, $, q), ae.el = St.el, Ye === null && pp(A, St.el), Ne && Tt(Ne, $), (Nt = ae.props && ae.props.onVnodeUpdated) && Tt(() => ti(Nt, Fe, ae, Be), $);
        } else {
          let ae;
          const { el: me, props: Ne } = y, { bm: Fe, m: Be, parent: Ye, root: Nt, type: St } = A, Jt = lo(y);
          Ro(A, false), Fe && Dn(Fe), !Jt && (ae = Ne && Ne.onVnodeBeforeMount) && ti(ae, Ye, y), Ro(A, true);
          {
            Nt.ce && Nt.ce._hasShadowRoot() && Nt.ce._injectChildStyle(St);
            const Zt = A.subTree = Mc(A);
            F(null, Zt, M, K, A, $, q), y.el = Zt.el;
          }
          if (Be && Tt(Be, $), !Jt && (ae = Ne && Ne.onVnodeMounted)) {
            const Zt = y;
            Tt(() => ti(ae, Ye, Zt), $);
          }
          (y.shapeFlag & 256 || Ye && lo(Ye.vnode) && Ye.vnode.shapeFlag & 256) && A.a && Tt(A.a, $), A.isMounted = true, y = M = K = null;
        }
      };
      A.scope.on();
      const ie = A.effect = new Ru(Z);
      A.scope.off();
      const z = A.update = ie.run.bind(ie), Ee = A.job = ie.runIfDirty.bind(ie);
      Ee.i = A, Ee.id = A.uid, ie.scheduler = () => qa(Ee), Ro(A, true), z();
    }, He = (A, y, M) => {
      y.component = A;
      const K = A.vnode.props;
      A.vnode = y, A.next = null, Ip(A, y.props, K, M), gp(A, y.children, M), ji(), Nc(A), xi();
    }, Ke = (A, y, M, K, $, q, se, Z, ie = false) => {
      const z = A && A.children, Ee = A ? A.shapeFlag : 0, ae = y.children, { patchFlag: me, shapeFlag: Ne } = y;
      if (me > 0) {
        if (me & 128) {
          Wo(z, ae, M, K, $, q, se, Z, ie);
          return;
        } else if (me & 256) {
          bi(z, ae, M, K, $, q, se, Z, ie);
          return;
        }
      }
      Ne & 8 ? (Ee & 16 && Wt(z, $, q), ae !== z && T(M, ae)) : Ee & 16 ? Ne & 16 ? Wo(z, ae, M, K, $, q, se, Z, ie) : Wt(z, $, q, true) : (Ee & 8 && T(M, ""), Ne & 16 && he(ae, M, K, $, q, se, Z, ie));
    }, bi = (A, y, M, K, $, q, se, Z, ie) => {
      A = A || zo, y = y || zo;
      const z = A.length, Ee = y.length, ae = Math.min(z, Ee);
      let me;
      for (me = 0; me < ae; me++) {
        const Ne = y[me] = ie ? Ui(y[me]) : Ni(y[me]);
        F(A[me], Ne, M, null, $, q, se, Z, ie);
      }
      z > Ee ? Wt(A, $, q, true, false, ae) : he(y, M, K, $, q, se, Z, ie, ae);
    }, Wo = (A, y, M, K, $, q, se, Z, ie) => {
      let z = 0;
      const Ee = y.length;
      let ae = A.length - 1, me = Ee - 1;
      for (; z <= ae && z <= me; ) {
        const Ne = A[z], Fe = y[z] = ie ? Ui(y[z]) : Ni(y[z]);
        if (so(Ne, Fe)) F(Ne, Fe, M, null, $, q, se, Z, ie);
        else break;
        z++;
      }
      for (; z <= ae && z <= me; ) {
        const Ne = A[ae], Fe = y[me] = ie ? Ui(y[me]) : Ni(y[me]);
        if (so(Ne, Fe)) F(Ne, Fe, M, null, $, q, se, Z, ie);
        else break;
        ae--, me--;
      }
      if (z > ae) {
        if (z <= me) {
          const Ne = me + 1, Fe = Ne < Ee ? y[Ne].el : K;
          for (; z <= me; ) F(null, y[z] = ie ? Ui(y[z]) : Ni(y[z]), M, Fe, $, q, se, Z, ie), z++;
        }
      } else if (z > me) for (; z <= ae; ) Re(A[z], $, q, true), z++;
      else {
        const Ne = z, Fe = z, Be = /* @__PURE__ */ new Map();
        for (z = Fe; z <= me; z++) {
          const Ht = y[z] = ie ? Ui(y[z]) : Ni(y[z]);
          Ht.key != null && Be.set(Ht.key, z);
        }
        let Ye, Nt = 0;
        const St = me - Fe + 1;
        let Jt = false, Zt = 0;
        const Oo = new Array(St);
        for (z = 0; z < St; z++) Oo[z] = 0;
        for (z = Ne; z <= ae; z++) {
          const Ht = A[z];
          if (Nt >= St) {
            Re(Ht, $, q, true);
            continue;
          }
          let Qt;
          if (Ht.key != null) Qt = Be.get(Ht.key);
          else for (Ye = Fe; Ye <= me; Ye++) if (Oo[Ye - Fe] === 0 && so(Ht, y[Ye])) {
            Qt = Ye;
            break;
          }
          Qt === void 0 ? Re(Ht, $, q, true) : (Oo[Qt - Fe] = z + 1, Qt >= Zt ? Zt = Qt : Jt = true, F(Ht, y[Qt], M, null, $, q, se, Z, ie), Nt++);
        }
        const En = Jt ? Sp(Oo) : zo;
        for (Ye = En.length - 1, z = St - 1; z >= 0; z--) {
          const Ht = Fe + z, Qt = y[Ht], sr = y[Ht + 1], ar = Ht + 1 < Ee ? sr.el || gh(sr) : K;
          Oo[z] === 0 ? F(null, Qt, M, ar, $, q, se, Z, ie) : Jt && (Ye < 0 || z !== En[Ye] ? Li(Qt, M, ar, 2) : Ye--);
        }
      }
    }, Li = (A, y, M, K, $ = null) => {
      const { el: q, type: se, transition: Z, children: ie, shapeFlag: z } = A;
      if (z & 6) {
        Li(A.component.subTree, y, M, K);
        return;
      }
      if (z & 128) {
        A.suspense.move(y, M, K);
        return;
      }
      if (z & 64) {
        se.move(A, y, M, mo);
        return;
      }
      if (se === Lt) {
        o(q, y, M);
        for (let ae = 0; ae < ie.length; ae++) Li(ie[ae], y, M, K);
        o(A.anchor, y, M);
        return;
      }
      if (se === kn) {
        J(A, y, M);
        return;
      }
      if (K !== 2 && z & 1 && Z) if (K === 0) Z.beforeEnter(q), o(q, y, M), Tt(() => Z.enter(q), $);
      else {
        const { leave: ae, delayLeave: me, afterLeave: Ne } = Z, Fe = () => {
          A.ctx.isUnmounted ? c(q) : o(q, y, M);
        }, Be = () => {
          q._isLeaving && q[Ai](true), ae(q, () => {
            Fe(), Ne && Ne();
          });
        };
        me ? me(q, Fe, Be) : Be();
      }
      else o(q, y, M);
    }, Re = (A, y, M, K = false, $ = false) => {
      const { type: q, props: se, ref: Z, children: ie, dynamicChildren: z, shapeFlag: Ee, patchFlag: ae, dirs: me, cacheIndex: Ne } = A;
      if (ae === -2 && ($ = false), Z != null && (ji(), Wn(Z, null, M, A, true), xi()), Ne != null && (y.renderCache[Ne] = void 0), Ee & 256) {
        y.ctx.deactivate(A);
        return;
      }
      const Fe = Ee & 1 && me, Be = !lo(A);
      let Ye;
      if (Be && (Ye = se && se.onVnodeBeforeUnmount) && ti(Ye, y, A), Ee & 6) ne(A.component, M, K);
      else {
        if (Ee & 128) {
          A.suspense.unmount(M, K);
          return;
        }
        Fe && go(A, null, y, "beforeUnmount"), Ee & 64 ? A.type.remove(A, y, M, mo, K) : z && !z.hasOnce && (q !== Lt || ae > 0 && ae & 64) ? Wt(z, y, M, false, true) : (q === Lt && ae & 384 || !$ && Ee & 16) && Wt(ie, y, M), K && In(A);
      }
      (Be && (Ye = se && se.onVnodeUnmounted) || Fe) && Tt(() => {
        Ye && ti(Ye, y, A), Fe && go(A, null, y, "unmounted");
      }, M);
    }, In = (A) => {
      const { type: y, el: M, anchor: K, transition: $ } = A;
      if (y === Lt) {
        Ds(M, K);
        return;
      }
      if (y === kn) {
        Y(A);
        return;
      }
      const q = () => {
        c(M), $ && !$.persisted && $.afterLeave && $.afterLeave();
      };
      if (A.shapeFlag & 1 && $ && !$.persisted) {
        const { leave: se, delayLeave: Z } = $, ie = () => se(M, q);
        Z ? Z(A.el, q, ie) : ie();
      } else q();
    }, Ds = (A, y) => {
      let M;
      for (; A !== y; ) M = H(A), c(A), A = M;
      c(y);
    }, ne = (A, y, M) => {
      const { bum: K, scope: $, job: q, subTree: se, um: Z, m: ie, a: z } = A;
      Yr(ie), Yr(z), K && Dn(K), $.stop(), q && (q.flags |= 8, Re(se, A, y, M)), Z && Tt(Z, y), Tt(() => {
        A.isUnmounted = true;
      }, y);
    }, Wt = (A, y, M, K = false, $ = false, q = 0) => {
      for (let se = q; se < A.length; se++) Re(A[se], y, M, K, $);
    }, Ci = (A) => {
      if (A.shapeFlag & 6) return Ci(A.component.subTree);
      if (A.shapeFlag & 128) return A.suspense.next();
      const y = H(A.anchor || A.el), M = y && y[zu];
      return M ? H(M) : y;
    };
    let Yt = false;
    const rr = (A, y, M) => {
      let K;
      A == null ? y._vnode && (Re(y._vnode, null, null, true), K = y._vnode.component) : F(y._vnode || null, A, y, null, null, null, M), y._vnode = A, Yt || (Yt = true, Nc(K), Yu(), Yt = false);
    }, mo = {
      p: F,
      um: Re,
      m: Li,
      r: In,
      mt: ft,
      mc: he,
      pc: Ke,
      pbc: Ie,
      n: Ci,
      o: e
    };
    return {
      render: rr,
      hydrate: void 0,
      createApp: cp(rr)
    };
  }
  function Bs({ type: e, props: t }, i) {
    return i === "svg" && e === "foreignObject" || i === "mathml" && e === "annotation-xml" && t && t.encoding && t.encoding.includes("html") ? void 0 : i;
  }
  function Ro({ effect: e, job: t }, i) {
    i ? (e.flags |= 32, t.flags |= 4) : (e.flags &= -33, t.flags &= -5);
  }
  function Np(e, t) {
    return (!e || e && !e.pendingBranch) && t && !t.persisted;
  }
  function ic(e, t, i = false) {
    const o = e.children, c = t.children;
    if (ge(o) && ge(c)) for (let l = 0; l < o.length; l++) {
      const h = o[l];
      let d = c[l];
      d.shapeFlag & 1 && !d.dynamicChildren && ((d.patchFlag <= 0 || d.patchFlag === 32) && (d = c[l] = Ui(c[l]), d.el = h.el), !i && d.patchFlag !== -2 && ic(h, d)), d.type === gs && (d.patchFlag === -1 && (d = c[l] = Ui(d)), d.el = h.el), d.type === Rt && !d.el && (d.el = h.el);
    }
  }
  function Sp(e) {
    const t = e.slice(), i = [
      0
    ];
    let o, c, l, h, d;
    const p = e.length;
    for (o = 0; o < p; o++) {
      const g = e[o];
      if (g !== 0) {
        if (c = i[i.length - 1], e[c] < g) {
          t[o] = c, i.push(o);
          continue;
        }
        for (l = 0, h = i.length - 1; l < h; ) d = l + h >> 1, e[i[d]] < g ? l = d + 1 : h = d;
        g < e[i[l]] && (l > 0 && (t[o] = i[l - 1]), i[l] = o);
      }
    }
    for (l = i.length, h = i[l - 1]; l-- > 0; ) i[l] = h, h = t[h];
    return i;
  }
  function Oh(e) {
    const t = e.subTree.component;
    if (t) return t.asyncDep && !t.asyncResolved ? t : Oh(t);
  }
  function Yr(e) {
    if (e) for (let t = 0; t < e.length; t++) e[t].flags |= 8;
  }
  function gh(e) {
    if (e.placeholder) return e.placeholder;
    const t = e.component;
    return t ? gh(t.subTree) : null;
  }
  const jr = (e) => e.__isSuspense;
  function wp(e, t) {
    t && t.pendingBranch ? ge(e) ? t.effects.push(...e) : t.effects.push(e) : Bu(e);
  }
  let kn, _n;
  Lt = /* @__PURE__ */ Symbol.for("v-fgt");
  gs = /* @__PURE__ */ Symbol.for("v-txt");
  Rt = /* @__PURE__ */ Symbol.for("v-cmt");
  kn = /* @__PURE__ */ Symbol.for("v-stc");
  _n = [];
  let $t = null;
  ii = function(e = false) {
    _n.push($t = e ? null : []);
  };
  function yp() {
    _n.pop(), $t = _n[_n.length - 1] || null;
  }
  let Kn = 1;
  function xr(e, t = false) {
    Kn += e, e < 0 && $t && t && ($t.hasOnce = true);
  }
  function Rh(e) {
    return e.dynamicChildren = Kn > 0 ? $t || zo : null, yp(), Kn > 0 && $t && $t.push(e), e;
  }
  Di = function(e, t, i, o, c, l) {
    return Rh(Ve(e, t, i, o, c, l, true));
  };
  Ta = function(e, t, i, o, c) {
    return Rh(vt(e, t, i, o, c, true));
  };
  en = function(e) {
    return e ? e.__v_isVNode === true : false;
  };
  function so(e, t) {
    return e.type === t.type && e.key === t.key;
  }
  const Ah = ({ key: e }) => e ?? null, Sr = ({ ref: e, ref_key: t, ref_for: i }) => (typeof e == "number" && (e = "" + e), e != null ? at(e) || ct(e) || we(e) ? {
    i: At,
    r: e,
    k: t,
    f: !!i
  } : e : null);
  Ve = function(e, t = null, i = null, o = 0, c = null, l = e === Lt ? 0 : 1, h = false, d = false) {
    const p = {
      __v_isVNode: true,
      __v_skip: true,
      type: e,
      props: t,
      key: t && Ah(t),
      ref: t && Sr(t),
      scopeId: xu,
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
      shapeFlag: l,
      patchFlag: o,
      dynamicProps: c,
      dynamicChildren: null,
      appContext: null,
      ctx: At
    };
    return d ? (oc(p, i), l & 128 && e.normalize(p)) : i && (p.shapeFlag |= at(i) ? 8 : 16), Kn > 0 && !h && $t && (p.patchFlag > 0 || l & 6) && p.patchFlag !== 32 && $t.push(p), p;
  };
  vt = bp;
  function bp(e, t = null, i = null, o = 0, c = null, l = false) {
    if ((!e || e === oh) && (e = Rt), en(e)) {
      const d = zi(e, t, true);
      return i && oc(d, i), Kn > 0 && !l && $t && (d.shapeFlag & 6 ? $t[$t.indexOf(e)] = d : $t.push(d)), d.patchFlag = -2, d;
    }
    if (Gp(e) && (e = e.__vccOpts), t) {
      t = Lp(t);
      let { class: d, style: p } = t;
      d && !at(d) && (t.class = Ba(d)), je(p) && (ps(p) && !ge(p) && (p = dt({}, p)), t.style = us(p));
    }
    const h = at(e) ? 1 : jr(e) ? 128 : $u(e) ? 64 : je(e) ? 4 : we(e) ? 2 : 0;
    return Ve(e, t, i, o, c, h, l, true);
  }
  function Lp(e) {
    return e ? ps(e) || fh(e) ? dt({}, e) : e : null;
  }
  zi = function(e, t, i = false, o = false) {
    const { props: c, ref: l, patchFlag: h, children: d, transition: p } = e, g = t ? vp(c || {}, t) : c, T = {
      __v_isVNode: true,
      __v_skip: true,
      type: e.type,
      props: g,
      key: g && Ah(g),
      ref: t && t.ref ? i && l ? ge(l) ? l.concat(Sr(t)) : [
        l,
        Sr(t)
      ] : Sr(t) : l,
      scopeId: e.scopeId,
      slotScopeIds: e.slotScopeIds,
      children: d,
      target: e.target,
      targetStart: e.targetStart,
      targetAnchor: e.targetAnchor,
      staticCount: e.staticCount,
      shapeFlag: e.shapeFlag,
      patchFlag: t && e.type !== Lt ? h === -1 ? 16 : h | 16 : h,
      dynamicProps: e.dynamicProps,
      dynamicChildren: e.dynamicChildren,
      appContext: e.appContext,
      dirs: e.dirs,
      transition: p,
      component: e.component,
      suspense: e.suspense,
      ssContent: e.ssContent && zi(e.ssContent),
      ssFallback: e.ssFallback && zi(e.ssFallback),
      placeholder: e.placeholder,
      el: e.el,
      anchor: e.anchor,
      ctx: e.ctx,
      ce: e.ce
    };
    return p && o && ho(T, p.clone(T)), T;
  };
  Cp = function(e = " ", t = 0) {
    return vt(gs, null, e, t);
  };
  LR = function(e, t) {
    const i = vt(kn, null, e);
    return i.staticCount = t, i;
  };
  pr = function(e = "", t = false) {
    return t ? (ii(), Ta(Rt, null, e)) : vt(Rt, null, e);
  };
  function Ni(e) {
    return e == null || typeof e == "boolean" ? vt(Rt) : ge(e) ? vt(Lt, null, e.slice()) : en(e) ? Ui(e) : vt(gs, null, String(e));
  }
  function Ui(e) {
    return e.el === null && e.patchFlag !== -1 || e.memo ? e : zi(e);
  }
  function oc(e, t) {
    let i = 0;
    const { shapeFlag: o } = e;
    if (t == null) t = null;
    else if (ge(t)) i = 16;
    else if (typeof t == "object") if (o & 65) {
      const c = t.default;
      c && (c._c && (c._d = false), oc(e, c()), c._c && (c._d = true));
      return;
    } else {
      i = 32;
      const c = t._;
      !c && !fh(t) ? t._ctx = At : c === 3 && At && (At.slots._ === 1 ? t._ = 1 : (t._ = 2, e.patchFlag |= 1024));
    }
    else we(t) ? (t = {
      default: t,
      _ctx: At
    }, i = 32) : (t = String(t), o & 64 ? (i = 16, t = [
      Cp(t)
    ]) : i = 8);
    e.children = t, e.shapeFlag |= i;
  }
  vp = function(...e) {
    const t = {};
    for (let i = 0; i < e.length; i++) {
      const o = e[i];
      for (const c in o) if (c === "class") t.class !== o.class && (t.class = Ba([
        t.class,
        o.class
      ]));
      else if (c === "style") t.style = us([
        t.style,
        o.style
      ]);
      else if (rs(c)) {
        const l = t[c], h = o[c];
        h && l !== h && !(ge(l) && l.includes(h)) && (t[c] = l ? [].concat(l, h) : h);
      } else c !== "" && (t[c] = o[c]);
    }
    return t;
  };
  function ti(e, t, i, o = null) {
    pi(e, t, 7, [
      i,
      o
    ]);
  }
  const Hp = ah();
  let Dp = 0;
  function Fp(e, t, i) {
    const o = e.type, c = (t ? t.appContext : e.appContext) || Hp, l = {
      uid: Dp++,
      vnode: e,
      type: o,
      parent: t,
      appContext: c,
      root: null,
      next: null,
      subTree: null,
      effect: null,
      update: null,
      job: null,
      scope: new mu(true),
      render: null,
      proxy: null,
      exposed: null,
      exposeProxy: null,
      withProxy: null,
      provides: t ? t.provides : Object.create(c.provides),
      ids: t ? t.ids : [
        "",
        0,
        0
      ],
      accessCache: null,
      renderCache: [],
      components: null,
      directives: null,
      propsOptions: Th(o, c),
      emitsOptions: lh(o, c),
      emit: null,
      emitted: null,
      propsDefaults: _e,
      inheritAttrs: o.inheritAttrs,
      ctx: _e,
      data: _e,
      props: _e,
      attrs: _e,
      slots: _e,
      refs: _e,
      setupState: _e,
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
    return l.ctx = {
      _: l
    }, l.root = t ? t.root : l, l.emit = lp.bind(null, l), e.ce && e.ce(l), l;
  }
  let Ct = null;
  po = () => Ct || At;
  let Vr, Ia;
  {
    const e = ls(), t = (i, o) => {
      let c;
      return (c = e[i]) || (c = e[i] = []), c.push(o), (l) => {
        c.length > 1 ? c.forEach((h) => h(l)) : c[0](l);
      };
    };
    Vr = t("__VUE_INSTANCE_SETTERS__", (i) => Ct = i), Ia = t("__VUE_SSR_SETTERS__", (i) => qn = i);
  }
  const ir = (e) => {
    const t = Ct;
    return Vr(e), e.scope.on(), () => {
      e.scope.off(), Vr(t);
    };
  }, Wc = () => {
    Ct && Ct.scope.off(), Vr(null);
  };
  function Nh(e) {
    return e.vnode.shapeFlag & 4;
  }
  let qn = false;
  function Mp(e, t = false, i = false) {
    t && Ia(t);
    const { props: o, children: c } = e.vnode, l = Nh(e);
    Tp(e, o, l, t), Op(e, c, i || t);
    const h = l ? Pp(e, t) : void 0;
    return t && Ia(false), h;
  }
  function Pp(e, t) {
    const i = e.type;
    e.accessCache = /* @__PURE__ */ Object.create(null), e.proxy = new Proxy(e.ctx, tp);
    const { setup: o } = i;
    if (o) {
      ji();
      const c = e.setupContext = o.length > 1 ? Wp(e) : null, l = ir(e), h = er(o, e, 0, [
        e.props,
        c
      ]), d = hu(h);
      if (xi(), l(), (d || e.sp) && !lo(e) && eh(e), d) {
        if (h.then(Wc, Wc), t) return h.then((p) => {
          Gc(e, p);
        }).catch((p) => {
          Ts(p, e, 0);
        });
        e.asyncDep = h;
      } else Gc(e, h);
    } else Sh(e);
  }
  function Gc(e, t, i) {
    we(t) ? e.type.__ssrInlineRender ? e.ssrRender = t : e.render = t : je(t) && (e.setupState = Uu(t)), Sh(e);
  }
  function Sh(e, t, i) {
    const o = e.type;
    e.render || (e.render = o.render || li);
    {
      const c = ir(e);
      ji();
      try {
        ip(e);
      } finally {
        xi(), c();
      }
    }
  }
  const Up = {
    get(e, t) {
      return bt(e, "get", ""), e[t];
    }
  };
  function Wp(e) {
    const t = (i) => {
      e.exposed = i || {};
    };
    return {
      attrs: new Proxy(e.attrs, Up),
      slots: e.slots,
      emit: e.emit,
      expose: t
    };
  }
  function Rs(e) {
    return e.exposed ? e.exposeProxy || (e.exposeProxy = new Proxy(Uu(Ka(e.exposed)), {
      get(t, i) {
        if (i in t) return t[i];
        if (i in Gn) return Gn[i](e);
      },
      has(t, i) {
        return i in t || i in Gn;
      }
    })) : e.proxy;
  }
  function Ea(e, t = true) {
    return we(e) ? e.displayName || e.name : e.name || t && e.__name;
  }
  function Gp(e) {
    return we(e) && "__vccOpts" in e;
  }
  nc = (e, t) => bf(e, t, qn);
  kp = function(e, t, i) {
    try {
      xr(-1);
      const o = arguments.length;
      return o === 2 ? je(t) && !ge(t) ? en(t) ? vt(e, null, [
        t
      ]) : vt(e, t) : vt(e, null, t) : (o > 3 ? i = Array.prototype.slice.call(arguments, 2) : o === 3 && en(i) && (i = [
        i
      ]), vt(e, t, i));
    } finally {
      xr(1);
    }
  };
  const _p = "3.5.28";
  let ma;
  const kc = typeof window < "u" && window.trustedTypes;
  if (kc) try {
    ma = kc.createPolicy("vue", {
      createHTML: (e) => e
    });
  } catch {
  }
  let wh, Bp, Yp, Pi, _c, jp, Ji, gn, tn, yh, bh, xp, Ao, Bc;
  wh = ma ? (e) => ma.createHTML(e) : (e) => e;
  Bp = "http://www.w3.org/2000/svg";
  Yp = "http://www.w3.org/1998/Math/MathML";
  Pi = typeof document < "u" ? document : null;
  _c = Pi && Pi.createElement("template");
  jp = {
    insert: (e, t, i) => {
      t.insertBefore(e, i || null);
    },
    remove: (e) => {
      const t = e.parentNode;
      t && t.removeChild(e);
    },
    createElement: (e, t, i, o) => {
      const c = t === "svg" ? Pi.createElementNS(Bp, e) : t === "mathml" ? Pi.createElementNS(Yp, e) : i ? Pi.createElement(e, {
        is: i
      }) : Pi.createElement(e);
      return e === "select" && o && o.multiple != null && c.setAttribute("multiple", o.multiple), c;
    },
    createText: (e) => Pi.createTextNode(e),
    createComment: (e) => Pi.createComment(e),
    setText: (e, t) => {
      e.nodeValue = t;
    },
    setElementText: (e, t) => {
      e.textContent = t;
    },
    parentNode: (e) => e.parentNode,
    nextSibling: (e) => e.nextSibling,
    querySelector: (e) => Pi.querySelector(e),
    setScopeId(e, t) {
      e.setAttribute(t, "");
    },
    insertStaticContent(e, t, i, o, c, l) {
      const h = i ? i.previousSibling : t.lastChild;
      if (c && (c === l || c.nextSibling)) for (; t.insertBefore(c.cloneNode(true), i), !(c === l || !(c = c.nextSibling)); ) ;
      else {
        _c.innerHTML = wh(o === "svg" ? `<svg>${e}</svg>` : o === "mathml" ? `<math>${e}</math>` : e);
        const d = _c.content;
        if (o === "svg" || o === "mathml") {
          const p = d.firstChild;
          for (; p.firstChild; ) d.appendChild(p.firstChild);
          d.removeChild(p);
        }
        t.insertBefore(d, i);
      }
      return [
        h ? h.nextSibling : t.firstChild,
        i ? i.previousSibling : t.lastChild
      ];
    }
  };
  Ji = "transition";
  gn = "animation";
  tn = /* @__PURE__ */ Symbol("_vtc");
  yh = {
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
  bh = dt({}, Xu, yh);
  xp = (e) => (e.displayName = "Transition", e.props = bh, e);
  CR = xp((e, { slots: t }) => kp(Bf, Lh(e), t));
  Ao = (e, t = []) => {
    ge(e) ? e.forEach((i) => i(...t)) : e && e(...t);
  };
  Bc = (e) => e ? ge(e) ? e.some((t) => t.length > 1) : e.length > 1 : false;
  function Lh(e) {
    const t = {};
    for (const de in e) de in yh || (t[de] = e[de]);
    if (e.css === false) return t;
    const { name: i = "v", type: o, duration: c, enterFromClass: l = `${i}-enter-from`, enterActiveClass: h = `${i}-enter-active`, enterToClass: d = `${i}-enter-to`, appearFromClass: p = l, appearActiveClass: g = h, appearToClass: T = d, leaveFromClass: N = `${i}-leave-from`, leaveActiveClass: H = `${i}-leave-active`, leaveToClass: C = `${i}-leave-to` } = e, G = Vp(c), F = G && G[0], pe = G && G[1], { onBeforeEnter: re, onEnter: k, onEnterCancelled: J, onLeave: Y, onLeaveCancelled: ue, onBeforeAppear: Te = re, onAppear: oe = k, onAppearCancelled: he = J } = t, Q = (de, xe, ft, Bt) => {
      de._enterCancelled = Bt, to(de, xe ? T : d), to(de, xe ? g : h), ft && ft();
    }, Ie = (de, xe) => {
      de._isLeaving = false, to(de, N), to(de, C), to(de, H), xe && xe();
    }, Le = (de) => (xe, ft) => {
      const Bt = de ? oe : k, Je = () => Q(xe, de, ft);
      Ao(Bt, [
        xe,
        Je
      ]), Yc(() => {
        to(xe, de ? p : l), Ei(xe, de ? T : d), Bc(Bt) || jc(xe, o, F, Je);
      });
    };
    return dt(t, {
      onBeforeEnter(de) {
        Ao(re, [
          de
        ]), Ei(de, l), Ei(de, h);
      },
      onBeforeAppear(de) {
        Ao(Te, [
          de
        ]), Ei(de, p), Ei(de, g);
      },
      onEnter: Le(false),
      onAppear: Le(true),
      onLeave(de, xe) {
        de._isLeaving = true;
        const ft = () => Ie(de, xe);
        Ei(de, N), de._enterCancelled ? (Ei(de, H), Oa(de)) : (Oa(de), Ei(de, H)), Yc(() => {
          de._isLeaving && (to(de, N), Ei(de, C), Bc(Y) || jc(de, o, pe, ft));
        }), Ao(Y, [
          de,
          ft
        ]);
      },
      onEnterCancelled(de) {
        Q(de, false, void 0, true), Ao(J, [
          de
        ]);
      },
      onAppearCancelled(de) {
        Q(de, true, void 0, true), Ao(he, [
          de
        ]);
      },
      onLeaveCancelled(de) {
        Ie(de), Ao(ue, [
          de
        ]);
      }
    });
  }
  function Vp(e) {
    if (e == null) return null;
    if (je(e)) return [
      Ys(e.enter),
      Ys(e.leave)
    ];
    {
      const t = Ys(e);
      return [
        t,
        t
      ];
    }
  }
  function Ys(e) {
    return Bd(e);
  }
  function Ei(e, t) {
    t.split(/\s+/).forEach((i) => i && e.classList.add(i)), (e[tn] || (e[tn] = /* @__PURE__ */ new Set())).add(t);
  }
  function to(e, t) {
    t.split(/\s+/).forEach((o) => o && e.classList.remove(o));
    const i = e[tn];
    i && (i.delete(t), i.size || (e[tn] = void 0));
  }
  function Yc(e) {
    requestAnimationFrame(() => {
      requestAnimationFrame(e);
    });
  }
  let zp = 0;
  function jc(e, t, i, o) {
    const c = e._endId = ++zp, l = () => {
      c === e._endId && o();
    };
    if (i != null) return setTimeout(l, i);
    const { type: h, timeout: d, propCount: p } = Ch(e, t);
    if (!h) return o();
    const g = h + "end";
    let T = 0;
    const N = () => {
      e.removeEventListener(g, H), l();
    }, H = (C) => {
      C.target === e && ++T >= p && N();
    };
    setTimeout(() => {
      T < p && N();
    }, d + 1), e.addEventListener(g, H);
  }
  function Ch(e, t) {
    const i = window.getComputedStyle(e), o = (G) => (i[G] || "").split(", "), c = o(`${Ji}Delay`), l = o(`${Ji}Duration`), h = xc(c, l), d = o(`${gn}Delay`), p = o(`${gn}Duration`), g = xc(d, p);
    let T = null, N = 0, H = 0;
    t === Ji ? h > 0 && (T = Ji, N = h, H = l.length) : t === gn ? g > 0 && (T = gn, N = g, H = p.length) : (N = Math.max(h, g), T = N > 0 ? h > g ? Ji : gn : null, H = T ? T === Ji ? l.length : p.length : 0);
    const C = T === Ji && /\b(?:transform|all)(?:,|$)/.test(o(`${Ji}Property`).toString());
    return {
      type: T,
      timeout: N,
      propCount: H,
      hasTransform: C
    };
  }
  function xc(e, t) {
    for (; e.length < t.length; ) e = e.concat(e);
    return Math.max(...t.map((i, o) => Vc(i) + Vc(e[o])));
  }
  function Vc(e) {
    return e === "auto" ? 0 : Number(e.slice(0, -1).replace(",", ".")) * 1e3;
  }
  function Oa(e) {
    return (e ? e.ownerDocument : document).body.offsetHeight;
  }
  function $p(e, t, i) {
    const o = e[tn];
    o && (t = (t ? [
      t,
      ...o
    ] : [
      ...o
    ]).join(" ")), t == null ? e.removeAttribute("class") : i ? e.setAttribute("class", t) : e.className = t;
  }
  let zr, vh;
  zr = /* @__PURE__ */ Symbol("_vod");
  vh = /* @__PURE__ */ Symbol("_vsh");
  vR = {
    name: "show",
    beforeMount(e, { value: t }, { transition: i }) {
      e[zr] = e.style.display === "none" ? "" : e.style.display, i && t ? i.beforeEnter(e) : Rn(e, t);
    },
    mounted(e, { value: t }, { transition: i }) {
      i && t && i.enter(e);
    },
    updated(e, { value: t, oldValue: i }, { transition: o }) {
      !t != !i && (o ? t ? (o.beforeEnter(e), Rn(e, true), o.enter(e)) : o.leave(e, () => {
        Rn(e, false);
      }) : Rn(e, t));
    },
    beforeUnmount(e, { value: t }) {
      Rn(e, t);
    }
  };
  function Rn(e, t) {
    e.style.display = t ? e[zr] : "none", e[vh] = !t;
  }
  const Hh = /* @__PURE__ */ Symbol("");
  HR = function(e) {
    const t = po();
    if (!t) return;
    const i = t.ut = (c = e(t.proxy)) => {
      Array.from(document.querySelectorAll(`[data-v-owner="${t.uid}"]`)).forEach((l) => $r(l, c));
    }, o = () => {
      const c = e(t.proxy);
      t.ce ? $r(t.ce, c) : ga(t.subTree, c), i(c);
    };
    ih(() => {
      Bu(o);
    }), tr(() => {
      Xo(o, li, {
        flush: "post"
      });
      const c = new MutationObserver(o);
      c.observe(t.subTree.el.parentNode, {
        childList: true
      }), Qa(() => c.disconnect());
    });
  };
  function ga(e, t) {
    if (e.shapeFlag & 128) {
      const i = e.suspense;
      e = i.activeBranch, i.pendingBranch && !i.isHydrating && i.effects.push(() => {
        ga(i.activeBranch, t);
      });
    }
    for (; e.component; ) e = e.component.subTree;
    if (e.shapeFlag & 1 && e.el) $r(e.el, t);
    else if (e.type === Lt) e.children.forEach((i) => ga(i, t));
    else if (e.type === kn) {
      let { el: i, anchor: o } = e;
      for (; i && ($r(i, t), i !== o); ) i = i.nextSibling;
    }
  }
  function $r(e, t) {
    if (e.nodeType === 1) {
      const i = e.style;
      let o = "";
      for (const c in t) {
        const l = qd(t[c]);
        i.setProperty(`--${c}`, l), o += `--${c}: ${l};`;
      }
      i[Hh] = o;
    }
  }
  const Kp = /(?:^|;)\s*display\s*:/;
  function qp(e, t, i) {
    const o = e.style, c = at(i);
    let l = false;
    if (i && !c) {
      if (t) if (at(t)) for (const h of t.split(";")) {
        const d = h.slice(0, h.indexOf(":")).trim();
        i[d] == null && wr(o, d, "");
      }
      else for (const h in t) i[h] == null && wr(o, h, "");
      for (const h in i) h === "display" && (l = true), wr(o, h, i[h]);
    } else if (c) {
      if (t !== i) {
        const h = o[Hh];
        h && (i += ";" + h), o.cssText = i, l = Kp.test(i);
      }
    } else t && e.removeAttribute("style");
    zr in e && (e[zr] = l ? o.display : "", e[vh] && (o.display = "none"));
  }
  const zc = /\s*!important$/;
  function wr(e, t, i) {
    if (ge(i)) i.forEach((o) => wr(e, t, o));
    else if (i == null && (i = ""), t.startsWith("--")) e.setProperty(t, i);
    else {
      const o = Xp(e, t);
      zc.test(i) ? e.setProperty(Ki(o), i.replace(zc, ""), "important") : e[o] = i;
    }
  }
  const $c = [
    "Webkit",
    "Moz",
    "ms"
  ], js = {};
  function Xp(e, t) {
    const i = js[t];
    if (i) return i;
    let o = Xt(t);
    if (o !== "filter" && o in e) return js[t] = o;
    o = cs(o);
    for (let c = 0; c < $c.length; c++) {
      const l = $c[c] + o;
      if (l in e) return js[t] = l;
    }
    return t;
  }
  const Kc = "http://www.w3.org/1999/xlink";
  function qc(e, t, i, o, c, l = $d(t)) {
    o && t.startsWith("xlink:") ? i == null ? e.removeAttributeNS(Kc, t.slice(6, t.length)) : e.setAttributeNS(Kc, t, i) : i == null || l && !Tu(i) ? e.removeAttribute(t) : e.setAttribute(t, l ? "" : di(i) ? String(i) : i);
  }
  function Xc(e, t, i, o, c) {
    if (t === "innerHTML" || t === "textContent") {
      i != null && (e[t] = t === "innerHTML" ? wh(i) : i);
      return;
    }
    const l = e.tagName;
    if (t === "value" && l !== "PROGRESS" && !l.includes("-")) {
      const d = l === "OPTION" ? e.getAttribute("value") || "" : e.value, p = i == null ? e.type === "checkbox" ? "on" : "" : String(i);
      (d !== p || !("_value" in e)) && (e.value = p), i == null && e.removeAttribute(t), e._value = i;
      return;
    }
    let h = false;
    if (i === "" || i == null) {
      const d = typeof e[t];
      d === "boolean" ? i = Tu(i) : i == null && d === "string" ? (i = "", h = true) : d === "number" && (i = 0, h = true);
    }
    try {
      e[t] = i;
    } catch {
    }
    h && e.removeAttribute(c || t);
  }
  function Jp(e, t, i, o) {
    e.addEventListener(t, i, o);
  }
  function Zp(e, t, i, o) {
    e.removeEventListener(t, i, o);
  }
  const Jc = /* @__PURE__ */ Symbol("_vei");
  function Qp(e, t, i, o, c = null) {
    const l = e[Jc] || (e[Jc] = {}), h = l[t];
    if (o && h) h.value = o;
    else {
      const [d, p] = eT(t);
      if (o) {
        const g = l[t] = oT(o, c);
        Jp(e, d, g, p);
      } else h && (Zp(e, d, h, p), l[t] = void 0);
    }
  }
  const Zc = /(?:Once|Passive|Capture)$/;
  function eT(e) {
    let t;
    if (Zc.test(e)) {
      t = {};
      let o;
      for (; o = e.match(Zc); ) e = e.slice(0, e.length - o[0].length), t[o[0].toLowerCase()] = true;
    }
    return [
      e[2] === ":" ? e.slice(3) : Ki(e.slice(2)),
      t
    ];
  }
  let xs = 0;
  const tT = Promise.resolve(), iT = () => xs || (tT.then(() => xs = 0), xs = Date.now());
  function oT(e, t) {
    const i = (o) => {
      if (!o._vts) o._vts = Date.now();
      else if (o._vts <= i.attached) return;
      pi(nT(o, i.value), t, 5, [
        o
      ]);
    };
    return i.value = e, i.attached = iT(), i;
  }
  function nT(e, t) {
    if (ge(t)) {
      const i = e.stopImmediatePropagation;
      return e.stopImmediatePropagation = () => {
        i.call(e), e._stopped = true;
      }, t.map((o) => (c) => !c._stopped && o && o(c));
    } else return t;
  }
  const Qc = (e) => e.charCodeAt(0) === 111 && e.charCodeAt(1) === 110 && e.charCodeAt(2) > 96 && e.charCodeAt(2) < 123, rT = (e, t, i, o, c, l) => {
    const h = c === "svg";
    t === "class" ? $p(e, o, h) : t === "style" ? qp(e, i, o) : rs(t) ? ka(t) || Qp(e, t, i, o, l) : (t[0] === "." ? (t = t.slice(1), true) : t[0] === "^" ? (t = t.slice(1), false) : sT(e, t, o, h)) ? (Xc(e, t, o), !e.tagName.includes("-") && (t === "value" || t === "checked" || t === "selected") && qc(e, t, o, h, l, t !== "value")) : e._isVueCE && (/[A-Z]/.test(t) || !at(o)) ? Xc(e, Xt(t), o, l, t) : (t === "true-value" ? e._trueValue = o : t === "false-value" && (e._falseValue = o), qc(e, t, o, h));
  };
  function sT(e, t, i, o) {
    if (o) return !!(t === "innerHTML" || t === "textContent" || t in e && Qc(t) && we(i));
    if (t === "spellcheck" || t === "draggable" || t === "translate" || t === "autocorrect" || t === "sandbox" && e.tagName === "IFRAME" || t === "form" || t === "list" && e.tagName === "INPUT" || t === "type" && e.tagName === "TEXTAREA") return false;
    if (t === "width" || t === "height") {
      const c = e.tagName;
      if (c === "IMG" || c === "VIDEO" || c === "CANVAS" || c === "SOURCE") return false;
    }
    return Qc(t) && at(i) ? false : t in e;
  }
  let Dh, Fh, Kr, el, aT, cT;
  Dh = /* @__PURE__ */ new WeakMap();
  Fh = /* @__PURE__ */ new WeakMap();
  Kr = /* @__PURE__ */ Symbol("_moveCb");
  el = /* @__PURE__ */ Symbol("_enterCb");
  aT = (e) => (delete e.props.mode, e);
  cT = aT({
    name: "TransitionGroup",
    props: dt({}, bh, {
      tag: String,
      moveClass: String
    }),
    setup(e, { slots: t }) {
      const i = po(), o = qu();
      let c, l;
      return Ja(() => {
        if (!c.length) return;
        const h = e.moveClass || `${e.name || "v"}-move`;
        if (!dT(c[0].el, i.vnode.el, h)) {
          c = [];
          return;
        }
        c.forEach(lT), c.forEach(uT);
        const d = c.filter(hT);
        Oa(i.vnode.el), d.forEach((p) => {
          const g = p.el, T = g.style;
          Ei(g, h), T.transform = T.webkitTransform = T.transitionDuration = "";
          const N = g[Kr] = (H) => {
            H && H.target !== g || (!H || H.propertyName.endsWith("transform")) && (g.removeEventListener("transitionend", N), g[Kr] = null, to(g, h));
          };
          g.addEventListener("transitionend", N);
        }), c = [];
      }), () => {
        const h = Pe(e), d = Lh(h);
        let p = h.tag || Lt;
        if (c = [], l) for (let g = 0; g < l.length; g++) {
          const T = l[g];
          T.el && T.el instanceof Element && (c.push(T), ho(T, $n(T, d, o, i)), Dh.set(T, Mh(T.el)));
        }
        l = t.default ? Xa(t.default()) : [];
        for (let g = 0; g < l.length; g++) {
          const T = l[g];
          T.key != null && ho(T, $n(T, d, o, i));
        }
        return vt(p, null, l);
      };
    }
  });
  DR = cT;
  function lT(e) {
    const t = e.el;
    t[Kr] && t[Kr](), t[el] && t[el]();
  }
  function uT(e) {
    Fh.set(e, Mh(e.el));
  }
  function hT(e) {
    const t = Dh.get(e), i = Fh.get(e), o = t.left - i.left, c = t.top - i.top;
    if (o || c) {
      const l = e.el, h = l.style, d = l.getBoundingClientRect();
      let p = 1, g = 1;
      return l.offsetWidth && (p = d.width / l.offsetWidth), l.offsetHeight && (g = d.height / l.offsetHeight), (!Number.isFinite(p) || p === 0) && (p = 1), (!Number.isFinite(g) || g === 0) && (g = 1), Math.abs(p - 1) < 0.01 && (p = 1), Math.abs(g - 1) < 0.01 && (g = 1), h.transform = h.webkitTransform = `translate(${o / p}px,${c / g}px)`, h.transitionDuration = "0s", e;
    }
  }
  function Mh(e) {
    const t = e.getBoundingClientRect();
    return {
      left: t.left,
      top: t.top
    };
  }
  function dT(e, t, i) {
    const o = e.cloneNode(), c = e[tn];
    c && c.forEach((d) => {
      d.split(/\s+/).forEach((p) => p && o.classList.remove(p));
    }), i.split(/\s+/).forEach((d) => d && o.classList.add(d)), o.style.display = "none";
    const l = t.nodeType === 1 ? t : t.parentNode;
    l.appendChild(o);
    const { hasTransform: h } = Ch(o);
    return l.removeChild(o), h;
  }
  let fT, pT, TT, IT;
  fT = [
    "ctrl",
    "shift",
    "alt",
    "meta"
  ];
  pT = {
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
    exact: (e, t) => fT.some((i) => e[`${i}Key`] && !t.includes(i))
  };
  FR = (e, t) => {
    if (!e) return e;
    const i = e._withMods || (e._withMods = {}), o = t.join(".");
    return i[o] || (i[o] = ((c, ...l) => {
      for (let h = 0; h < t.length; h++) {
        const d = pT[t[h]];
        if (d && d(c, t)) return;
      }
      return e(c, ...l);
    }));
  };
  TT = {
    esc: "escape",
    space: " ",
    up: "arrow-up",
    left: "arrow-left",
    right: "arrow-right",
    down: "arrow-down",
    delete: "backspace"
  };
  MR = (e, t) => {
    const i = e._withKeys || (e._withKeys = {}), o = t.join(".");
    return i[o] || (i[o] = ((c) => {
      if (!("key" in c)) return;
      const l = Ki(c.key);
      if (t.some((h) => h === l || TT[h] === l)) return e(c);
    }));
  };
  IT = dt({
    patchProp: rT
  }, jp);
  let tl;
  function ET() {
    return tl || (tl = Rp(IT));
  }
  const Ph = ((...e) => {
    const t = ET().createApp(...e), { mount: i } = t;
    return t.mount = (o) => {
      const c = OT(o);
      if (!c) return;
      const l = t._component;
      !we(l) && !l.render && !l.template && (l.template = c.innerHTML), c.nodeType === 1 && (c.textContent = "");
      const h = i(c, false, mT(c));
      return c instanceof Element && (c.removeAttribute("v-cloak"), c.setAttribute("data-v-app", "")), h;
    }, t;
  });
  function mT(e) {
    if (e instanceof SVGElement) return "svg";
    if (typeof MathMLElement == "function" && e instanceof MathMLElement) return "mathml";
  }
  function OT(e) {
    return at(e) ? document.querySelector(e) : e;
  }
  const gT = "" + new URL("../favicon.svg", import.meta.url).href;
  let Uh, RT, Wh, AT, NT, An;
  Uh = typeof global == "object" && global && global.Object === Object && global;
  RT = typeof self == "object" && self && self.Object === Object && self;
  yi = Uh || RT || Function("return this")();
  on = yi.Symbol;
  Wh = Object.prototype;
  AT = Wh.hasOwnProperty;
  NT = Wh.toString;
  An = on ? on.toStringTag : void 0;
  function ST(e) {
    var t = AT.call(e, An), i = e[An];
    try {
      e[An] = void 0;
      var o = true;
    } catch {
    }
    var c = NT.call(e);
    return o && (t ? e[An] = i : delete e[An]), c;
  }
  var wT = Object.prototype, yT = wT.toString;
  function bT(e) {
    return yT.call(e);
  }
  var LT = "[object Null]", CT = "[object Undefined]", il = on ? on.toStringTag : void 0;
  To = function(e) {
    return e == null ? e === void 0 ? CT : LT : il && il in Object(e) ? ST(e) : bT(e);
  };
  Io = function(e) {
    return e != null && typeof e == "object";
  };
  As = Array.isArray;
  Ns = function(e) {
    var t = typeof e;
    return e != null && (t == "object" || t == "function");
  };
  var vT = "[object AsyncFunction]", HT = "[object Function]", DT = "[object GeneratorFunction]", FT = "[object Proxy]";
  Gh = function(e) {
    if (!Ns(e)) return false;
    var t = To(e);
    return t == HT || t == DT || t == vT || t == FT;
  };
  var Vs = yi["__core-js_shared__"], ol = (function() {
    var e = /[^.]+$/.exec(Vs && Vs.keys && Vs.keys.IE_PROTO || "");
    return e ? "Symbol(src)_1." + e : "";
  })();
  function MT(e) {
    return !!ol && ol in e;
  }
  var PT = Function.prototype, UT = PT.toString;
  function Po(e) {
    if (e != null) {
      try {
        return UT.call(e);
      } catch {
      }
      try {
        return e + "";
      } catch {
      }
    }
    return "";
  }
  var WT = /[\\^$.*+?()[\]{}|]/g, GT = /^\[object .+?Constructor\]$/, kT = Function.prototype, _T = Object.prototype, BT = kT.toString, YT = _T.hasOwnProperty, jT = RegExp("^" + BT.call(YT).replace(WT, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$");
  function xT(e) {
    if (!Ns(e) || MT(e)) return false;
    var t = Gh(e) ? jT : GT;
    return t.test(Po(e));
  }
  function VT(e, t) {
    return e == null ? void 0 : e[t];
  }
  function Uo(e, t) {
    var i = VT(e, t);
    return xT(i) ? i : void 0;
  }
  let Ra, nl, zT;
  Ra = Uo(yi, "WeakMap");
  nl = Object.create;
  zT = /* @__PURE__ */ (function() {
    function e() {
    }
    return function(t) {
      if (!Ns(t)) return {};
      if (nl) return nl(t);
      e.prototype = t;
      var i = new e();
      return e.prototype = void 0, i;
    };
  })();
  rl = (function() {
    try {
      var e = Uo(Object, "defineProperty");
      return e({}, "", {}), e;
    } catch {
    }
  })();
  function $T(e, t) {
    for (var i = -1, o = e == null ? 0 : e.length; ++i < o && t(e[i], i, e) !== false; ) ;
    return e;
  }
  var KT = 9007199254740991, qT = /^(?:0|[1-9]\d*)$/;
  XT = function(e, t) {
    var i = typeof e;
    return t = t ?? KT, !!t && (i == "number" || i != "symbol" && qT.test(e)) && e > -1 && e % 1 == 0 && e < t;
  };
  JT = function(e, t, i) {
    t == "__proto__" && rl ? rl(e, t, {
      configurable: true,
      enumerable: true,
      value: i,
      writable: true
    }) : e[t] = i;
  };
  kh = function(e, t) {
    return e === t || e !== e && t !== t;
  };
  var ZT = Object.prototype, QT = ZT.hasOwnProperty;
  eI = function(e, t, i) {
    var o = e[t];
    (!(QT.call(e, t) && kh(o, i)) || i === void 0 && !(t in e)) && JT(e, t, i);
  };
  var tI = 9007199254740991;
  _h = function(e) {
    return typeof e == "number" && e > -1 && e % 1 == 0 && e <= tI;
  };
  iI = function(e) {
    return e != null && _h(e.length) && !Gh(e);
  };
  var oI = Object.prototype;
  Bh = function(e) {
    var t = e && e.constructor, i = typeof t == "function" && t.prototype || oI;
    return e === i;
  };
  function nI(e, t) {
    for (var i = -1, o = Array(e); ++i < e; ) o[i] = t(i);
    return o;
  }
  var rI = "[object Arguments]";
  function sl(e) {
    return Io(e) && To(e) == rI;
  }
  let Yh, sI, aI;
  Yh = Object.prototype;
  sI = Yh.hasOwnProperty;
  aI = Yh.propertyIsEnumerable;
  cI = sl(/* @__PURE__ */ (function() {
    return arguments;
  })()) ? sl : function(e) {
    return Io(e) && sI.call(e, "callee") && !aI.call(e, "callee");
  };
  function lI() {
    return false;
  }
  let jh, al, uI, cl, hI, dI, fI, pI, TI, II, EI, mI, OI, gI, RI, AI, NI, SI, wI, yI, bI, LI, CI, vI, HI, DI, FI, MI, PI, tt;
  jh = typeof exports == "object" && exports && !exports.nodeType && exports;
  al = jh && typeof module == "object" && module && !module.nodeType && module;
  uI = al && al.exports === jh;
  cl = uI ? yi.Buffer : void 0;
  hI = cl ? cl.isBuffer : void 0;
  xh = hI || lI;
  dI = "[object Arguments]";
  fI = "[object Array]";
  pI = "[object Boolean]";
  TI = "[object Date]";
  II = "[object Error]";
  EI = "[object Function]";
  mI = "[object Map]";
  OI = "[object Number]";
  gI = "[object Object]";
  RI = "[object RegExp]";
  AI = "[object Set]";
  NI = "[object String]";
  SI = "[object WeakMap]";
  wI = "[object ArrayBuffer]";
  yI = "[object DataView]";
  bI = "[object Float32Array]";
  LI = "[object Float64Array]";
  CI = "[object Int8Array]";
  vI = "[object Int16Array]";
  HI = "[object Int32Array]";
  DI = "[object Uint8Array]";
  FI = "[object Uint8ClampedArray]";
  MI = "[object Uint16Array]";
  PI = "[object Uint32Array]";
  tt = {};
  tt[bI] = tt[LI] = tt[CI] = tt[vI] = tt[HI] = tt[DI] = tt[FI] = tt[MI] = tt[PI] = true;
  tt[dI] = tt[fI] = tt[wI] = tt[pI] = tt[yI] = tt[TI] = tt[II] = tt[EI] = tt[mI] = tt[OI] = tt[gI] = tt[RI] = tt[AI] = tt[NI] = tt[SI] = false;
  function UI(e) {
    return Io(e) && _h(e.length) && !!tt[To(e)];
  }
  function rc(e) {
    return function(t) {
      return e(t);
    };
  }
  let Vh, Bn, WI, zs, nn, ll, kI, _I;
  Vh = typeof exports == "object" && exports && !exports.nodeType && exports;
  Bn = Vh && typeof module == "object" && module && !module.nodeType && module;
  WI = Bn && Bn.exports === Vh;
  zs = WI && Uh.process;
  nn = (function() {
    try {
      var e = Bn && Bn.require && Bn.require("util").types;
      return e || zs && zs.binding && zs.binding("util");
    } catch {
    }
  })();
  ll = nn && nn.isTypedArray;
  GI = ll ? rc(ll) : UI;
  kI = Object.prototype;
  _I = kI.hasOwnProperty;
  BI = function(e, t) {
    var i = As(e), o = !i && cI(e), c = !i && !o && xh(e), l = !i && !o && !c && GI(e), h = i || o || c || l, d = h ? nI(e.length, String) : [], p = d.length;
    for (var g in e) (t || _I.call(e, g)) && !(h && (g == "length" || c && (g == "offset" || g == "parent") || l && (g == "buffer" || g == "byteLength" || g == "byteOffset") || XT(g, p))) && d.push(g);
    return d;
  };
  function zh(e, t) {
    return function(i) {
      return e(t(i));
    };
  }
  var YI = zh(Object.keys, Object), jI = Object.prototype, xI = jI.hasOwnProperty;
  function VI(e) {
    if (!Bh(e)) return YI(e);
    var t = [];
    for (var i in Object(e)) xI.call(e, i) && i != "constructor" && t.push(i);
    return t;
  }
  zI = function(e) {
    return iI(e) ? BI(e) : VI(e);
  };
  var Xn = Uo(Object, "create");
  function $I() {
    this.__data__ = Xn ? Xn(null) : {}, this.size = 0;
  }
  function KI(e) {
    var t = this.has(e) && delete this.__data__[e];
    return this.size -= t ? 1 : 0, t;
  }
  var qI = "__lodash_hash_undefined__", XI = Object.prototype, JI = XI.hasOwnProperty;
  function ZI(e) {
    var t = this.__data__;
    if (Xn) {
      var i = t[e];
      return i === qI ? void 0 : i;
    }
    return JI.call(t, e) ? t[e] : void 0;
  }
  var QI = Object.prototype, eE = QI.hasOwnProperty;
  function tE(e) {
    var t = this.__data__;
    return Xn ? t[e] !== void 0 : eE.call(t, e);
  }
  var iE = "__lodash_hash_undefined__";
  function oE(e, t) {
    var i = this.__data__;
    return this.size += this.has(e) ? 0 : 1, i[e] = Xn && t === void 0 ? iE : t, this;
  }
  function Mo(e) {
    var t = -1, i = e == null ? 0 : e.length;
    for (this.clear(); ++t < i; ) {
      var o = e[t];
      this.set(o[0], o[1]);
    }
  }
  Mo.prototype.clear = $I;
  Mo.prototype.delete = KI;
  Mo.prototype.get = ZI;
  Mo.prototype.has = tE;
  Mo.prototype.set = oE;
  function nE() {
    this.__data__ = [], this.size = 0;
  }
  function Ss(e, t) {
    for (var i = e.length; i--; ) if (kh(e[i][0], t)) return i;
    return -1;
  }
  var rE = Array.prototype, sE = rE.splice;
  function aE(e) {
    var t = this.__data__, i = Ss(t, e);
    if (i < 0) return false;
    var o = t.length - 1;
    return i == o ? t.pop() : sE.call(t, i, 1), --this.size, true;
  }
  function cE(e) {
    var t = this.__data__, i = Ss(t, e);
    return i < 0 ? void 0 : t[i][1];
  }
  function lE(e) {
    return Ss(this.__data__, e) > -1;
  }
  function uE(e, t) {
    var i = this.__data__, o = Ss(i, e);
    return o < 0 ? (++this.size, i.push([
      e,
      t
    ])) : i[o][1] = t, this;
  }
  function Xi(e) {
    var t = -1, i = e == null ? 0 : e.length;
    for (this.clear(); ++t < i; ) {
      var o = e[t];
      this.set(o[0], o[1]);
    }
  }
  Xi.prototype.clear = nE;
  Xi.prototype.delete = aE;
  Xi.prototype.get = cE;
  Xi.prototype.has = lE;
  Xi.prototype.set = uE;
  var Jn = Uo(yi, "Map");
  function hE() {
    this.size = 0, this.__data__ = {
      hash: new Mo(),
      map: new (Jn || Xi)(),
      string: new Mo()
    };
  }
  function dE(e) {
    var t = typeof e;
    return t == "string" || t == "number" || t == "symbol" || t == "boolean" ? e !== "__proto__" : e === null;
  }
  function ws(e, t) {
    var i = e.__data__;
    return dE(t) ? i[typeof t == "string" ? "string" : "hash"] : i.map;
  }
  function fE(e) {
    var t = ws(this, e).delete(e);
    return this.size -= t ? 1 : 0, t;
  }
  function pE(e) {
    return ws(this, e).get(e);
  }
  function TE(e) {
    return ws(this, e).has(e);
  }
  function IE(e, t) {
    var i = ws(this, e), o = i.size;
    return i.set(e, t), this.size += i.size == o ? 0 : 1, this;
  }
  fn = function(e) {
    var t = -1, i = e == null ? 0 : e.length;
    for (this.clear(); ++t < i; ) {
      var o = e[t];
      this.set(o[0], o[1]);
    }
  };
  fn.prototype.clear = hE;
  fn.prototype.delete = fE;
  fn.prototype.get = pE;
  fn.prototype.has = TE;
  fn.prototype.set = IE;
  function EE(e, t) {
    for (var i = -1, o = t.length, c = e.length; ++i < o; ) e[c + i] = t[i];
    return e;
  }
  var $h = zh(Object.getPrototypeOf, Object), mE = "[object Object]", OE = Function.prototype, gE = Object.prototype, Kh = OE.toString, RE = gE.hasOwnProperty, AE = Kh.call(Object);
  NE = function(e) {
    if (!Io(e) || To(e) != mE) return false;
    var t = $h(e);
    if (t === null) return true;
    var i = RE.call(t, "constructor") && t.constructor;
    return typeof i == "function" && i instanceof i && Kh.call(i) == AE;
  };
  var SE = "[object DOMException]", wE = "[object Error]";
  function qh(e) {
    if (!Io(e)) return false;
    var t = To(e);
    return t == wE || t == SE || typeof e.message == "string" && typeof e.name == "string" && !NE(e);
  }
  function yE() {
    this.__data__ = new Xi(), this.size = 0;
  }
  function bE(e) {
    var t = this.__data__, i = t.delete(e);
    return this.size = t.size, i;
  }
  function LE(e) {
    return this.__data__.get(e);
  }
  function CE(e) {
    return this.__data__.has(e);
  }
  var vE = 200;
  function HE(e, t) {
    var i = this.__data__;
    if (i instanceof Xi) {
      var o = i.__data__;
      if (!Jn || o.length < vE - 1) return o.push([
        e,
        t
      ]), this.size = ++i.size, this;
      i = this.__data__ = new fn(o);
    }
    return i.set(e, t), this.size = i.size, this;
  }
  pn = function(e) {
    var t = this.__data__ = new Xi(e);
    this.size = t.size;
  };
  pn.prototype.clear = yE;
  pn.prototype.delete = bE;
  pn.prototype.get = LE;
  pn.prototype.has = CE;
  pn.prototype.set = HE;
  var Xh = typeof exports == "object" && exports && !exports.nodeType && exports, ul = Xh && typeof module == "object" && module && !module.nodeType && module, DE = ul && ul.exports === Xh, hl = DE ? yi.Buffer : void 0, dl = hl ? hl.allocUnsafe : void 0;
  FE = function(e, t) {
    if (t) return e.slice();
    var i = e.length, o = dl ? dl(i) : new e.constructor(i);
    return e.copy(o), o;
  };
  function ME(e, t) {
    for (var i = -1, o = e == null ? 0 : e.length, c = 0, l = []; ++i < o; ) {
      var h = e[i];
      t(h, i, e) && (l[c++] = h);
    }
    return l;
  }
  function PE() {
    return [];
  }
  var UE = Object.prototype, WE = UE.propertyIsEnumerable, fl = Object.getOwnPropertySymbols, GE = fl ? function(e) {
    return e == null ? [] : (e = Object(e), ME(fl(e), function(t) {
      return WE.call(e, t);
    }));
  } : PE;
  function kE(e, t, i) {
    var o = t(e);
    return As(e) ? o : EE(o, i(e));
  }
  _E = function(e) {
    return kE(e, zI, GE);
  };
  let Aa, Na, Sa, pl, BE, Tl, Il, El, ml, YE, jE, xE, VE, zE;
  Aa = Uo(yi, "DataView");
  Na = Uo(yi, "Promise");
  Sa = Uo(yi, "Set");
  pl = "[object Map]";
  BE = "[object Object]";
  Tl = "[object Promise]";
  Il = "[object Set]";
  El = "[object WeakMap]";
  ml = "[object DataView]";
  YE = Po(Aa);
  jE = Po(Jn);
  xE = Po(Na);
  VE = Po(Sa);
  zE = Po(Ra);
  Wi = To;
  (Aa && Wi(new Aa(new ArrayBuffer(1))) != ml || Jn && Wi(new Jn()) != pl || Na && Wi(Na.resolve()) != Tl || Sa && Wi(new Sa()) != Il || Ra && Wi(new Ra()) != El) && (Wi = function(e) {
    var t = To(e), i = t == BE ? e.constructor : void 0, o = i ? Po(i) : "";
    if (o) switch (o) {
      case YE:
        return ml;
      case jE:
        return pl;
      case xE:
        return Tl;
      case VE:
        return Il;
      case zE:
        return El;
    }
    return t;
  });
  var $E = Object.prototype, KE = $E.hasOwnProperty;
  function qE(e) {
    var t = e.length, i = new e.constructor(t);
    return t && typeof e[0] == "string" && KE.call(e, "index") && (i.index = e.index, i.input = e.input), i;
  }
  Ol = yi.Uint8Array;
  function sc(e) {
    var t = new e.constructor(e.byteLength);
    return new Ol(t).set(new Ol(e)), t;
  }
  function XE(e, t) {
    var i = sc(e.buffer);
    return new e.constructor(i, e.byteOffset, e.byteLength);
  }
  var JE = /\w*$/;
  function ZE(e) {
    var t = new e.constructor(e.source, JE.exec(e));
    return t.lastIndex = e.lastIndex, t;
  }
  var gl = on ? on.prototype : void 0, Rl = gl ? gl.valueOf : void 0;
  function QE(e) {
    return Rl ? Object(Rl.call(e)) : {};
  }
  em = function(e, t) {
    var i = t ? sc(e.buffer) : e.buffer;
    return new e.constructor(i, e.byteOffset, e.length);
  };
  var tm = "[object Boolean]", im = "[object Date]", om = "[object Map]", nm = "[object Number]", rm = "[object RegExp]", sm = "[object Set]", am = "[object String]", cm = "[object Symbol]", lm = "[object ArrayBuffer]", um = "[object DataView]", hm = "[object Float32Array]", dm = "[object Float64Array]", fm = "[object Int8Array]", pm = "[object Int16Array]", Tm = "[object Int32Array]", Im = "[object Uint8Array]", Em = "[object Uint8ClampedArray]", mm = "[object Uint16Array]", Om = "[object Uint32Array]";
  function gm(e, t, i) {
    var o = e.constructor;
    switch (t) {
      case lm:
        return sc(e);
      case tm:
      case im:
        return new o(+e);
      case um:
        return XE(e);
      case hm:
      case dm:
      case fm:
      case pm:
      case Tm:
      case Im:
      case Em:
      case mm:
      case Om:
        return em(e, i);
      case om:
        return new o();
      case nm:
      case am:
        return new o(e);
      case rm:
        return ZE(e);
      case sm:
        return new o();
      case cm:
        return QE(e);
    }
  }
  Rm = function(e) {
    return typeof e.constructor == "function" && !Bh(e) ? zT($h(e)) : {};
  };
  var Am = "[object Map]";
  function Nm(e) {
    return Io(e) && Wi(e) == Am;
  }
  var Al = nn && nn.isMap, Sm = Al ? rc(Al) : Nm, wm = "[object Set]";
  function ym(e) {
    return Io(e) && Wi(e) == wm;
  }
  var Nl = nn && nn.isSet, bm = Nl ? rc(Nl) : ym, Lm = 1, Jh = "[object Arguments]", Cm = "[object Array]", vm = "[object Boolean]", Hm = "[object Date]", Dm = "[object Error]", Zh = "[object Function]", Fm = "[object GeneratorFunction]", Mm = "[object Map]", Pm = "[object Number]", Qh = "[object Object]", Um = "[object RegExp]", Wm = "[object Set]", Gm = "[object String]", km = "[object Symbol]", _m = "[object WeakMap]", Bm = "[object ArrayBuffer]", Ym = "[object DataView]", jm = "[object Float32Array]", xm = "[object Float64Array]", Vm = "[object Int8Array]", zm = "[object Int16Array]", $m = "[object Int32Array]", Km = "[object Uint8Array]", qm = "[object Uint8ClampedArray]", Xm = "[object Uint16Array]", Jm = "[object Uint32Array]", Ze = {};
  Ze[Jh] = Ze[Cm] = Ze[Bm] = Ze[Ym] = Ze[vm] = Ze[Hm] = Ze[jm] = Ze[xm] = Ze[Vm] = Ze[zm] = Ze[$m] = Ze[Mm] = Ze[Pm] = Ze[Qh] = Ze[Um] = Ze[Wm] = Ze[Gm] = Ze[km] = Ze[Km] = Ze[qm] = Ze[Xm] = Ze[Jm] = true;
  Ze[Dm] = Ze[Zh] = Ze[_m] = false;
  function yr(e, t, i, o, c, l) {
    var h, d = t & Lm;
    if (h !== void 0) return h;
    if (!Ns(e)) return e;
    var p = As(e);
    if (p) h = qE(e);
    else {
      var g = Wi(e), T = g == Zh || g == Fm;
      if (xh(e)) return FE(e, d);
      if (g == Qh || g == Jh || T && !c) h = T ? {} : Rm(e);
      else {
        if (!Ze[g]) return c ? e : {};
        h = gm(e, g, d);
      }
    }
    l || (l = new pn());
    var N = l.get(e);
    if (N) return N;
    l.set(e, h), bm(e) ? e.forEach(function(G) {
      h.add(yr(G, t, i, G, e, l));
    }) : Sm(e) && e.forEach(function(G, F) {
      h.set(F, yr(G, t, i, F, e, l));
    });
    var H = _E, C = p ? void 0 : H(e);
    return $T(C || e, function(G, F) {
      C && (F = G, G = e[F]), eI(h, F, yr(G, t, i, F, e, l));
    }), h;
  }
  var Zm = 1, Qm = 4;
  wa = function(e) {
    return yr(e, Zm | Qm);
  };
  var eO = "[object String]";
  function ya(e) {
    return typeof e == "string" || !As(e) && Io(e) && To(e) == eO;
  }
  const Dt = (e) => ya(e) ? e : qh(e) ? String(e) : JSON.stringify(e), Ii = {
    unloaded: (...e) => `[loadModules] Module "${Dt(e[0])}" has not been loaded yet`,
    loading: (...e) => `[loadModules] Module "${Dt(e[0])}" is loading`,
    loaded: (...e) => `[loadModules] Module "${Dt(e[0])}" has been loaded`,
    error: (...e) => `[loadModules] Module "${Dt(e[0])}" failed to load.
Trackback: 
${Dt(e[1])}`,
    errorDetermined: (...e) => `[loadModules] Module "${Dt(e[0])}" failed to load, asserted by another instance, skip`,
    alreadyLoading: (...e) => `[loadModules] Module "${Dt(e[0])}" is already loading by another instance, skip`,
    alreadyLoaded: (...e) => `[loadModules] Module "${Dt(e[0])}" has been loaded by another instance, skip`,
    missingDependencies: (...e) => `[loadModules] Module "${Dt(e[0])}" is missing the following dependencies: ${Dt(e[1])}`,
    loadDependencies: (...e) => `[loadModules] Module "${Dt(e[0])}" is loading its dependencies (${e.slice(1).map((t) => Dt(t)).join(", ")})`,
    dependenciesReady: (...e) => `[loadModules] Module "${Dt(e[0])}" dependencies are ready`,
    dependenciesFailure: (...e) => `[loadModules] Module "${Dt(e[0])}" dependencies failed to load. 

Trackback: 
${Dt(e[1])}`
  }, tO = {
    info: console.info,
    warn: console.warn,
    error: console.error,
    debug: console.debug
  };
  async function ed(e, t, i = 1e4, o = {}, c = 0, l = 0, h = 0) {
    var _a3, _b, _c2, _d2, _e2, _f2;
    const { logger: d = tO, progressReporter: p, printLog: g = true } = o, T = e.find((F) => F.name === t);
    if (!T) throw new Error(`cannot exactly find module "${t}" from the library`);
    const N = e.findIndex((F) => F.name === T.name);
    if (e[N].status === "loaded") return g && d.info(Ii.alreadyLoaded(T.name)), {
      completed: h,
      total: l
    };
    const H = T.dependencies || [], C = e.filter((F) => H.includes(F.name)), G = H.filter((F) => !e.find((pe) => pe.name === F));
    if (G.length > 0) {
      const F = Ii.missingDependencies(T.name, G.join(", "));
      throw g && d.error(F), new Error(F);
    }
    if (e[N].status === "error") {
      const F = Ii.errorDetermined(T.name);
      throw g && d.info(F), new Error(F);
    }
    if (e[N].status === "loading") return g && d.info(Ii.alreadyLoading(T.name)), await iO(e, T.name, i, d), {
      completed: h,
      total: l
    };
    try {
      let F = l, pe = h;
      if (c === 0) {
        const re = /* @__PURE__ */ new Set(), k = (J) => {
          if (re.has(J)) return;
          re.add(J);
          const Y = e.find((ue) => ue.name === J);
          if (Y && Y.dependencies) for (const ue of Y.dependencies) k(ue);
        };
        k(t), F = re.size, pe = 0;
      }
      if (C.length > 0) {
        d.info(Ii.loadDependencies(T.name, C.map((re) => re.name)));
        for (const re of C) {
          const k = await ed(e, re.name, i, {
            logger: d,
            progressReporter: p,
            printLog: g
          }, c + 1, F, pe);
          pe = k.completed, F = k.total, (_a3 = p == null ? void 0 : p.onOverallProgress) == null ? void 0 : _a3.call(p, pe, F);
        }
        g && d.info(Ii.dependenciesReady(T.name));
      }
      e[N].status = "loading", (_b = p == null ? void 0 : p.onModuleStart) == null ? void 0 : _b.call(p, T.displayName);
      try {
        return g && d.info(Ii.loading(T.name)), await T.moduleInit(i), e[N].status = "loaded", pe++, (_c2 = p == null ? void 0 : p.onModuleComplete) == null ? void 0 : _c2.call(p, T.displayName), (_d2 = p == null ? void 0 : p.onOverallProgress) == null ? void 0 : _d2.call(p, pe, F), g && d.info(Ii.loaded(T.name)), {
          completed: pe,
          total: F
        };
      } catch (re) {
        e[N].status = "error";
        const k = Ii.error(T.name, ya(re) ? re : qh(re) ? re.message : JSON.stringify(re));
        throw d.error(k), (_e2 = p == null ? void 0 : p.onModuleError) == null ? void 0 : _e2.call(p, T.displayName, ya(re) ? new Error(re) : re), new Error(k);
      }
    } catch (F) {
      e[N].status = "error", console.log(F);
      const pe = Ii.error(T.name, F);
      throw d.error(pe), (_f2 = p == null ? void 0 : p.onModuleError) == null ? void 0 : _f2.call(p, T.displayName, F), new Error(pe);
    }
  }
  async function iO(e, t, i = 1e4, o) {
    const c = Date.now();
    return new Promise((l, h) => {
      const d = setInterval(() => {
        const p = e.find((g) => g.name === t);
        if (p && p.status === "loaded") clearInterval(d), l();
        else if (Date.now() - c > i) {
          clearInterval(d);
          const g = new Error(`Load module ${t} timeout`);
          o == null ? void 0 : o.error(g.message), h(g);
        }
      }, 10);
    });
  }
  let oO, nO, Sl, rO, sO, td;
  oO = "modulepreload";
  nO = function(e, t) {
    return new URL(e, t).href;
  };
  Sl = {};
  br = function(t, i, o) {
    let c = Promise.resolve();
    if (i && i.length > 0) {
      let g = function(T) {
        return Promise.all(T.map((N) => Promise.resolve(N).then((H) => ({
          status: "fulfilled",
          value: H
        }), (H) => ({
          status: "rejected",
          reason: H
        }))));
      };
      const h = document.getElementsByTagName("link"), d = document.querySelector("meta[property=csp-nonce]"), p = (d == null ? void 0 : d.nonce) || (d == null ? void 0 : d.getAttribute("nonce"));
      c = g(i.map((T) => {
        if (T = nO(T, o), T in Sl) return;
        Sl[T] = true;
        const N = T.endsWith(".css"), H = N ? '[rel="stylesheet"]' : "";
        if (o) for (let G = h.length - 1; G >= 0; G--) {
          const F = h[G];
          if (F.href === T && (!N || F.rel === "stylesheet")) return;
        }
        else if (document.querySelector(`link[href="${T}"]${H}`)) return;
        const C = document.createElement("link");
        if (C.rel = N ? "stylesheet" : oO, N || (C.as = "script"), C.crossOrigin = "", C.href = T, p && C.setAttribute("nonce", p), document.head.appendChild(C), N) return new Promise((G, F) => {
          C.addEventListener("load", G), C.addEventListener("error", () => F(new Error(`Unable to preload CSS for ${T}`)));
        });
      }));
    }
    function l(h) {
      const d = new Event("vite:preloadError", {
        cancelable: true
      });
      if (d.payload = h, window.dispatchEvent(d), !d.defaultPrevented) throw h;
    }
    return c.then((h) => {
      for (const d of h || []) d.status === "rejected" && l(d.reason);
      return t().catch(l);
    });
  };
  rO = [
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
  sO = {
    withStackTrace: false
  };
  td = (e, t, i = sO) => {
    const o = t.isOk() ? {
      type: "Ok",
      value: t.value
    } : {
      type: "Err",
      value: t.error
    }, c = i.withStackTrace ? new Error().stack : void 0;
    return {
      data: o,
      message: e,
      stack: c
    };
  };
  function No(e, t, i, o) {
    function c(l) {
      return l instanceof i ? l : new i(function(h) {
        h(l);
      });
    }
    return new (i || (i = Promise))(function(l, h) {
      function d(T) {
        try {
          g(o.next(T));
        } catch (N) {
          h(N);
        }
      }
      function p(T) {
        try {
          g(o.throw(T));
        } catch (N) {
          h(N);
        }
      }
      function g(T) {
        T.done ? l(T.value) : c(T.value).then(d, p);
      }
      g((o = o.apply(e, [])).next());
    });
  }
  function wl(e) {
    var t = typeof Symbol == "function" && Symbol.iterator, i = t && e[t], o = 0;
    if (i) return i.call(e);
    if (e && typeof e.length == "number") return {
      next: function() {
        return e && o >= e.length && (e = void 0), {
          value: e && e[o++],
          done: !e
        };
      }
    };
    throw new TypeError(t ? "Object is not iterable." : "Symbol.iterator is not defined.");
  }
  function Si(e) {
    return this instanceof Si ? (this.v = e, this) : new Si(e);
  }
  function yl(e, t, i) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var o = i.apply(e, t || []), c, l = [];
    return c = Object.create((typeof AsyncIterator == "function" ? AsyncIterator : Object).prototype), d("next"), d("throw"), d("return", h), c[Symbol.asyncIterator] = function() {
      return this;
    }, c;
    function h(C) {
      return function(G) {
        return Promise.resolve(G).then(C, N);
      };
    }
    function d(C, G) {
      o[C] && (c[C] = function(F) {
        return new Promise(function(pe, re) {
          l.push([
            C,
            F,
            pe,
            re
          ]) > 1 || p(C, F);
        });
      }, G && (c[C] = G(c[C])));
    }
    function p(C, G) {
      try {
        g(o[C](G));
      } catch (F) {
        H(l[0][3], F);
      }
    }
    function g(C) {
      C.value instanceof Si ? Promise.resolve(C.value.v).then(T, N) : H(l[0][2], C);
    }
    function T(C) {
      p("next", C);
    }
    function N(C) {
      p("throw", C);
    }
    function H(C, G) {
      C(G), l.shift(), l.length && p(l[0][0], l[0][1]);
    }
  }
  function aO(e) {
    var t, i;
    return t = {}, o("next"), o("throw", function(c) {
      throw c;
    }), o("return"), t[Symbol.iterator] = function() {
      return this;
    }, t;
    function o(c, l) {
      t[c] = e[c] ? function(h) {
        return (i = !i) ? {
          value: Si(e[c](h)),
          done: false
        } : l ? l(h) : h;
      } : l;
    }
  }
  function cO(e) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var t = e[Symbol.asyncIterator], i;
    return t ? t.call(e) : (e = typeof wl == "function" ? wl(e) : e[Symbol.iterator](), i = {}, o("next"), o("throw"), o("return"), i[Symbol.asyncIterator] = function() {
      return this;
    }, i);
    function o(l) {
      i[l] = e[l] && function(h) {
        return new Promise(function(d, p) {
          h = e[l](h), c(d, p, h.done, h.value);
        });
      };
    }
    function c(l, h, d, p) {
      Promise.resolve(p).then(function(g) {
        l({
          value: g,
          done: d
        });
      }, h);
    }
  }
  class wt {
    constructor(t) {
      this._promise = t;
    }
    static fromSafePromise(t) {
      const i = t.then((o) => new mi(o));
      return new wt(i);
    }
    static fromPromise(t, i) {
      const o = t.then((c) => new mi(c)).catch((c) => new ri(i(c)));
      return new wt(o);
    }
    static fromThrowable(t, i) {
      return (...o) => new wt(No(this, void 0, void 0, function* () {
        try {
          return new mi(yield t(...o));
        } catch (c) {
          return new ri(i ? i(c) : c);
        }
      }));
    }
    static combine(t) {
      return lO(t);
    }
    static combineWithAllErrors(t) {
      return uO(t);
    }
    map(t) {
      return new wt(this._promise.then((i) => No(this, void 0, void 0, function* () {
        return i.isErr() ? new ri(i.error) : new mi(yield t(i.value));
      })));
    }
    andThrough(t) {
      return new wt(this._promise.then((i) => No(this, void 0, void 0, function* () {
        if (i.isErr()) return new ri(i.error);
        const o = yield t(i.value);
        return o.isErr() ? new ri(o.error) : new mi(i.value);
      })));
    }
    andTee(t) {
      return new wt(this._promise.then((i) => No(this, void 0, void 0, function* () {
        if (i.isErr()) return new ri(i.error);
        try {
          yield t(i.value);
        } catch {
        }
        return new mi(i.value);
      })));
    }
    orTee(t) {
      return new wt(this._promise.then((i) => No(this, void 0, void 0, function* () {
        if (i.isOk()) return new mi(i.value);
        try {
          yield t(i.error);
        } catch {
        }
        return new ri(i.error);
      })));
    }
    mapErr(t) {
      return new wt(this._promise.then((i) => No(this, void 0, void 0, function* () {
        return i.isOk() ? new mi(i.value) : new ri(yield t(i.error));
      })));
    }
    andThen(t) {
      return new wt(this._promise.then((i) => {
        if (i.isErr()) return new ri(i.error);
        const o = t(i.value);
        return o instanceof wt ? o._promise : o;
      }));
    }
    orElse(t) {
      return new wt(this._promise.then((i) => No(this, void 0, void 0, function* () {
        return i.isErr() ? t(i.error) : new mi(i.value);
      })));
    }
    match(t, i) {
      return this._promise.then((o) => o.match(t, i));
    }
    unwrapOr(t) {
      return this._promise.then((i) => i.unwrapOr(t));
    }
    safeUnwrap() {
      return yl(this, arguments, function* () {
        return yield Si(yield Si(yield* aO(cO(yield Si(this._promise.then((i) => i.safeUnwrap()))))));
      });
    }
    then(t, i) {
      return this._promise.then(t, i);
    }
    [Symbol.asyncIterator]() {
      return yl(this, arguments, function* () {
        const i = yield Si(this._promise);
        return i.isErr() && (yield yield Si(Lr(i.error))), yield Si(i.value);
      });
    }
  }
  function Lr(e) {
    return new wt(Promise.resolve(new ri(e)));
  }
  const id = (e) => {
    let t = P([]);
    for (const i of e) if (i.isErr()) {
      t = L(i.error);
      break;
    } else t.map((o) => o.push(i.value));
    return t;
  }, lO = (e) => wt.fromSafePromise(Promise.all(e)).andThen(id), od = (e) => {
    let t = P([]);
    for (const i of e) i.isErr() && t.isErr() ? t.error.push(i.error) : i.isErr() && t.isOk() ? t = L([
      i.error
    ]) : i.isOk() && t.isOk() && t.value.push(i.value);
    return t;
  }, uO = (e) => wt.fromSafePromise(Promise.all(e)).andThen(od);
  var ba;
  (function(e) {
    function t(c, l) {
      return (...h) => {
        try {
          const d = c(...h);
          return P(d);
        } catch (d) {
          return L(l ? l(d) : d);
        }
      };
    }
    e.fromThrowable = t;
    function i(c) {
      return id(c);
    }
    e.combine = i;
    function o(c) {
      return od(c);
    }
    e.combineWithAllErrors = o;
  })(ba || (ba = {}));
  function P(e) {
    return new mi(e);
  }
  function L(e) {
    return new ri(e);
  }
  class mi {
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
      return P(t(this.value));
    }
    mapErr(t) {
      return P(this.value);
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
      return P(this.value);
    }
    orTee(t) {
      return P(this.value);
    }
    orElse(t) {
      return P(this.value);
    }
    asyncAndThen(t) {
      return t(this.value);
    }
    asyncAndThrough(t) {
      return t(this.value).map(() => this.value);
    }
    asyncMap(t) {
      return wt.fromSafePromise(t(this.value));
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
      throw td("Called `_unsafeUnwrapErr` on an Ok", this, t);
    }
    *[Symbol.iterator]() {
      return this.value;
    }
  }
  class ri {
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
      return Lr(this.error);
    }
    asyncAndThrough(t) {
      return Lr(this.error);
    }
    asyncMap(t) {
      return Lr(this.error);
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
        throw yield L(t), new Error("Do not use this generator out of `safeTry`");
      })();
    }
    _unsafeUnwrap(t) {
      throw td("Called `_unsafeUnwrap` on an Err", this, t);
    }
    _unsafeUnwrapErr(t) {
      return this.error;
    }
    *[Symbol.iterator]() {
      const t = this;
      return yield t, t;
    }
  }
  ba.fromThrowable;
  var or = ((e) => (e.GENERIC = "generic", e.VALIDATION = "validation", e.NETWORK = "network", e.GEOLOCATION = "geolocation", e.STORAGE = "storage", e.CONVERSION = "conversion", e.UPDATE_SERVICE = "update_service", e))(or || {});
  class Tn extends Error {
    constructor(t, i) {
      super(t), this.cause = i, this.name = this.constructor.name, i && (this.message = `${t} (caused by: ${i.message})`);
    }
  }
  class Ue extends Tn {
    constructor(t, i = "GENERIC_ERROR", o) {
      super(t, o);
      __publicField(this, "code");
      __publicField(this, "domain", "generic");
      this.code = i;
    }
  }
  function hO(e) {
    return e instanceof Tn;
  }
  Tr = function(e, t = "Unknown error occurred") {
    return hO(e) ? e : e instanceof Error ? new Ue(t, "UNKNOWN_ERROR", e) : new Ue(t, "UNKNOWN_ERROR");
  };
  So = function(e, t) {
    const i = t ? `[${t}] ` : "";
    console.error(`${i}${e.domain}.${e.code}: ${e.message}`, {
      error: e,
      cause: e.cause,
      stack: e.stack
    });
  };
  class ve extends Tn {
    constructor(t, i, o) {
      super(t, o);
      __publicField(this, "code");
      __publicField(this, "domain", or.GEOLOCATION);
      this.code = i;
    }
  }
  class Fi extends ve {
    constructor(t = "Geolocation update service error", i, o) {
      super(t, "UPDATE_SERVICE_ERROR", o), this.serviceName = i;
    }
  }
  var dO = "2.0.9", fO = 500, bl = "user-agent", rn = "", Ll = "?", ht = {
    FUNCTION: "function",
    OBJECT: "object",
    STRING: "string",
    UNDEFINED: "undefined"
  }, _t = "browser", Yi = "cpu", wi = "device", ci = "engine", Kt = "os", sn = "result", B = "name", U = "type", V = "vendor", j = "version", Mt = "architecture", Zn = "major", _ = "model", Cr = "console", be = "mobile", qe = "tablet", pt = "smarttv", Oi = "wearable", Ir = "xr", Cn = "embedded", pO = "fetcher", ko = "inapp", ac = "brands", Co = "formFactors", cc = "fullVersionList", an = "platform", lc = "platformVersion", ys = "bitness", Eo = "sec-ch-ua", TO = Eo + "-full-version-list", IO = Eo + "-arch", EO = Eo + "-" + ys, mO = Eo + "-form-factors", OO = Eo + "-" + be, gO = Eo + "-" + _, nd = Eo + "-" + an, RO = nd + "-version", rd = [
    ac,
    cc,
    be,
    _,
    an,
    lc,
    Mt,
    Co,
    ys
  ], Er = "Amazon", _o = "Apple", Cl = "ASUS", vl = "BlackBerry", wo = "Google", Hl = "Huawei", $s = "Lenovo", Dl = "Honor", mr = "LG", Ks = "Microsoft", qs = "Motorola", Fl = "Nvidia", Ml = "OnePlus", Xs = "OPPO", Nn = "Samsung", Pl = "Sharp", Sn = "Sony", Js = "Xiaomi", Zs = "Zebra", Ul = "Chrome", Wl = "Chromium", Zi = "Chromecast", vr = "Edge", wn = "Firefox", Bo = "Opera", Qs = "Facebook", Gl = "Sogou", Yo = "Mobile ", jo = " Browser", La = "Windows", AO = typeof window !== ht.UNDEFINED, Gt = AO && window.navigator ? window.navigator : void 0, vo = Gt && Gt.userAgentData ? Gt.userAgentData : void 0, NO = function(e, t) {
    var i = {}, o = t;
    if (!qr(t)) {
      o = {};
      for (var c in t) for (var l in t[c]) o[l] = t[c][l].concat(o[l] ? o[l] : []);
    }
    for (var h in e) i[h] = o[h] && o[h].length % 2 === 0 ? o[h].concat(e[h]) : e[h];
    return i;
  }, bs = function(e) {
    for (var t = {}, i = 0; i < e.length; i++) t[e[i].toUpperCase()] = e[i];
    return t;
  }, Ca = function(e, t) {
    if (typeof e === ht.OBJECT && e.length > 0) {
      for (var i in e) if (co(t) == co(e[i])) return true;
      return false;
    }
    return nr(e) ? co(t) == co(e) : false;
  }, qr = function(e, t) {
    for (var i in e) return /^(browser|cpu|device|engine|os)$/.test(i) || (t ? qr(e[i]) : false);
  }, nr = function(e) {
    return typeof e === ht.STRING;
  }, ea = function(e) {
    if (e) {
      for (var t = [], i = cn(/\\?\"/g, e).split(","), o = 0; o < i.length; o++) if (i[o].indexOf(";") > -1) {
        var c = Xr(i[o]).split(";v=");
        t[o] = {
          brand: c[0],
          version: c[1]
        };
      } else t[o] = Xr(i[o]);
      return t;
    }
  }, co = function(e) {
    return nr(e) ? e.toLowerCase() : e;
  }, va = function(e) {
    return nr(e) ? cn(/[^\d\.]/g, e).split(".")[0] : void 0;
  }, _i = function(e) {
    for (var t in e) if (e.hasOwnProperty(t)) {
      var i = e[t];
      typeof i == ht.OBJECT && i.length == 2 ? this[i[0]] = i[1] : this[i] = void 0;
    }
    return this;
  }, cn = function(e, t) {
    return nr(t) ? t.replace(e, rn) : t;
  }, yn = function(e) {
    return cn(/\\?\"/g, e);
  }, Xr = function(e, t) {
    return e = cn(/^\s\s*/, String(e)), typeof t === ht.UNDEFINED ? e : e.substring(0, t);
  }, Ha = function(e, t) {
    if (!(!e || !t)) for (var i = 0, o, c, l, h, d, p; i < t.length && !d; ) {
      var g = t[i], T = t[i + 1];
      for (o = c = 0; o < g.length && !d && g[o]; ) if (d = g[o++].exec(e), d) for (l = 0; l < T.length; l++) p = d[++c], h = T[l], typeof h === ht.OBJECT && h.length > 0 ? h.length === 2 ? typeof h[1] == ht.FUNCTION ? this[h[0]] = h[1].call(this, p) : this[h[0]] = h[1] : h.length >= 3 && (typeof h[1] === ht.FUNCTION && !(h[1].exec && h[1].test) ? h.length > 3 ? this[h[0]] = p ? h[1].apply(this, h.slice(2)) : void 0 : this[h[0]] = p ? h[1].call(this, p, h[2]) : void 0 : h.length == 3 ? this[h[0]] = p ? p.replace(h[1], h[2]) : void 0 : h.length == 4 ? this[h[0]] = p ? h[3].call(this, p.replace(h[1], h[2])) : void 0 : h.length > 4 && (this[h[0]] = p ? h[3].apply(this, [
        p.replace(h[1], h[2])
      ].concat(h.slice(4))) : void 0)) : this[h] = p || void 0;
      i += 2;
    }
  }, ai = function(e, t) {
    for (var i in t) if (typeof t[i] === ht.OBJECT && t[i].length > 0) {
      for (var o = 0; o < t[i].length; o++) if (Ca(t[i][o], e)) return i === Ll ? void 0 : i;
    } else if (Ca(t[i], e)) return i === Ll ? void 0 : i;
    return t.hasOwnProperty("*") ? t["*"] : e;
  }, kl = {
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
  }, _l = {
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
  }, SO = {
    Chrome: "Google Chrome",
    Edge: "Microsoft Edge",
    "Edge WebView2": "Microsoft Edge WebView2",
    "Chrome WebView": "Android WebView",
    "Chrome Headless": "HeadlessChrome",
    "Huawei Browser": "HuaweiBrowser",
    "MIUI Browser": "Miui Browser",
    "Opera Mobi": "OperaMobile",
    Yandex: "YaBrowser"
  }, Bl = {
    browser: [
      [
        /\b(?:crmo|crios)\/([\w\.]+)/i
      ],
      [
        j,
        [
          B,
          Yo + "Chrome"
        ]
      ],
      [
        /webview.+edge\/([\w\.]+)/i
      ],
      [
        j,
        [
          B,
          vr + " WebView"
        ]
      ],
      [
        /edg(?:e|ios|a)?\/([\w\.]+)/i
      ],
      [
        j,
        [
          B,
          "Edge"
        ]
      ],
      [
        /(opera mini)\/([-\w\.]+)/i,
        /(opera [mobiletab]{3,6})\b.+version\/([-\w\.]+)/i,
        /(opera)(?:.+version\/|[\/ ]+)([\w\.]+)/i
      ],
      [
        B,
        j
      ],
      [
        /opios[\/ ]+([\w\.]+)/i
      ],
      [
        j,
        [
          B,
          Bo + " Mini"
        ]
      ],
      [
        /\bop(?:rg)?x\/([\w\.]+)/i
      ],
      [
        j,
        [
          B,
          Bo + " GX"
        ]
      ],
      [
        /\bopr\/([\w\.]+)/i
      ],
      [
        j,
        [
          B,
          Bo
        ]
      ],
      [
        /\bb[ai]*d(?:uhd|[ub]*[aekoprswx]{5,6})[\/ ]?([\w\.]+)/i
      ],
      [
        j,
        [
          B,
          "Baidu"
        ]
      ],
      [
        /\b(?:mxbrowser|mxios|myie2)\/?([-\w\.]*)\b/i
      ],
      [
        j,
        [
          B,
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
        B,
        j
      ],
      [
        /quark(?:pc)?\/([-\w\.]+)/i
      ],
      [
        j,
        [
          B,
          "Quark"
        ]
      ],
      [
        /\bddg\/([\w\.]+)/i
      ],
      [
        j,
        [
          B,
          "DuckDuckGo"
        ]
      ],
      [
        /(?:\buc? ?browser|(?:juc.+)ucweb)[\/ ]?([\w\.]+)/i
      ],
      [
        j,
        [
          B,
          "UCBrowser"
        ]
      ],
      [
        /microm.+\bqbcore\/([\w\.]+)/i,
        /\bqbcore\/([\w\.]+).+microm/i,
        /micromessenger\/([\w\.]+)/i
      ],
      [
        j,
        [
          B,
          "WeChat"
        ]
      ],
      [
        /konqueror\/([\w\.]+)/i
      ],
      [
        j,
        [
          B,
          "Konqueror"
        ]
      ],
      [
        /trident.+rv[: ]([\w\.]{1,9})\b.+like gecko/i
      ],
      [
        j,
        [
          B,
          "IE"
        ]
      ],
      [
        /ya(?:search)?browser\/([\w\.]+)/i
      ],
      [
        j,
        [
          B,
          "Yandex"
        ]
      ],
      [
        /slbrowser\/([\w\.]+)/i
      ],
      [
        j,
        [
          B,
          "Smart " + $s + jo
        ]
      ],
      [
        /(av(?:ast|g|ira))\/([\w\.]+)/i
      ],
      [
        [
          B,
          /(.+)/,
          "$1 Secure" + jo
        ],
        j
      ],
      [
        /norton\/([\w\.]+)/i
      ],
      [
        j,
        [
          B,
          "Norton Private" + jo
        ]
      ],
      [
        /\bfocus\/([\w\.]+)/i
      ],
      [
        j,
        [
          B,
          wn + " Focus"
        ]
      ],
      [
        / mms\/([\w\.]+)$/i
      ],
      [
        j,
        [
          B,
          Bo + " Neon"
        ]
      ],
      [
        / opt\/([\w\.]+)$/i
      ],
      [
        j,
        [
          B,
          Bo + " Touch"
        ]
      ],
      [
        /coc_coc\w+\/([\w\.]+)/i
      ],
      [
        j,
        [
          B,
          "Coc Coc"
        ]
      ],
      [
        /dolfin\/([\w\.]+)/i
      ],
      [
        j,
        [
          B,
          "Dolphin"
        ]
      ],
      [
        /coast\/([\w\.]+)/i
      ],
      [
        j,
        [
          B,
          Bo + " Coast"
        ]
      ],
      [
        /miuibrowser\/([\w\.]+)/i
      ],
      [
        j,
        [
          B,
          "MIUI" + jo
        ]
      ],
      [
        /fxios\/([\w\.-]+)/i
      ],
      [
        j,
        [
          B,
          Yo + wn
        ]
      ],
      [
        /\bqihoobrowser\/?([\w\.]*)/i
      ],
      [
        j,
        [
          B,
          "360"
        ]
      ],
      [
        /\b(qq)\/([\w\.]+)/i
      ],
      [
        [
          B,
          /(.+)/,
          "$1Browser"
        ],
        j
      ],
      [
        /(oculus|sailfish|huawei|vivo|pico)browser\/([\w\.]+)/i
      ],
      [
        [
          B,
          /(.+)/,
          "$1" + jo
        ],
        j
      ],
      [
        /samsungbrowser\/([\w\.]+)/i
      ],
      [
        j,
        [
          B,
          Nn + " Internet"
        ]
      ],
      [
        /metasr[\/ ]?([\d\.]+)/i
      ],
      [
        j,
        [
          B,
          Gl + " Explorer"
        ]
      ],
      [
        /(sogou)mo\w+\/([\d\.]+)/i
      ],
      [
        [
          B,
          Gl + " Mobile"
        ],
        j
      ],
      [
        /(electron)\/([\w\.]+) safari/i,
        /(tesla)(?: qtcarbrowser|\/(20\d\d\.[-\w\.]+))/i,
        /m?(qqbrowser|2345(?=browser|chrome|explorer))\w*[\/ ]?v?([\w\.]+)/i
      ],
      [
        B,
        j
      ],
      [
        /(lbbrowser|luakit|rekonq|steam(?= (clie|tenf|gameo)))/i
      ],
      [
        B
      ],
      [
        /ome\/([\w\.]+).+(iron(?= saf)|360(?=[es]e$))/i
      ],
      [
        j,
        B
      ],
      [
        /((?:fban\/fbios|fb_iab\/fb4a)(?!.+fbav)|;fbav\/([\w\.]+);)/i
      ],
      [
        [
          B,
          Qs
        ],
        j,
        [
          U,
          ko
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
        B,
        j,
        [
          U,
          ko
        ]
      ],
      [
        /\bgsa\/([\w\.]+) .*safari\//i
      ],
      [
        j,
        [
          B,
          "GSA"
        ],
        [
          U,
          ko
        ]
      ],
      [
        /(?:musical_ly|trill)(?:.+app_?version\/|_)([\w\.]+)/i
      ],
      [
        j,
        [
          B,
          "TikTok"
        ],
        [
          U,
          ko
        ]
      ],
      [
        /\[(linkedin)app\]/i
      ],
      [
        B,
        [
          U,
          ko
        ]
      ],
      [
        /(zalo(?:app)?)[\/\sa-z]*([\w\.-]+)/i
      ],
      [
        [
          B,
          /(.+)/,
          "Zalo"
        ],
        j,
        [
          U,
          ko
        ]
      ],
      [
        /(chromium)[\/ ]([-\w\.]+)/i
      ],
      [
        B,
        j
      ],
      [
        /ome-(lighthouse)$/i
      ],
      [
        B,
        [
          U,
          pO
        ]
      ],
      [
        /headlesschrome(?:\/([\w\.]+)| )/i
      ],
      [
        j,
        [
          B,
          Ul + " Headless"
        ]
      ],
      [
        /wv\).+chrome\/([\w\.]+).+edgw\//i
      ],
      [
        j,
        [
          B,
          vr + " WebView2"
        ]
      ],
      [
        / wv\).+(chrome)\/([\w\.]+)/i
      ],
      [
        [
          B,
          Ul + " WebView"
        ],
        j
      ],
      [
        /droid.+ version\/([\w\.]+)\b.+(?:mobile safari|safari)/i
      ],
      [
        j,
        [
          B,
          "Android" + jo
        ]
      ],
      [
        /chrome\/([\w\.]+) mobile/i
      ],
      [
        j,
        [
          B,
          Yo + "Chrome"
        ]
      ],
      [
        /(chrome|omniweb|arora|[tizenoka]{5} ?browser)\/v?([\w\.]+)/i
      ],
      [
        B,
        j
      ],
      [
        /version\/([\w\.\,]+) .*mobile(?:\/\w+ | ?)safari/i
      ],
      [
        j,
        [
          B,
          Yo + "Safari"
        ]
      ],
      [
        /iphone .*mobile(?:\/\w+ | ?)safari/i
      ],
      [
        [
          B,
          Yo + "Safari"
        ]
      ],
      [
        /version\/([\w\.\,]+) .*(safari)/i
      ],
      [
        j,
        B
      ],
      [
        /webkit.+?(mobile ?safari|safari)(\/[\w\.]+)/i
      ],
      [
        B,
        [
          j,
          "1"
        ]
      ],
      [
        /(webkit|khtml)\/([\w\.]+)/i
      ],
      [
        B,
        j
      ],
      [
        /(?:mobile|tablet);.*(firefox)\/([\w\.-]+)/i
      ],
      [
        [
          B,
          Yo + wn
        ],
        j
      ],
      [
        /(navigator|netscape\d?)\/([-\w\.]+)/i
      ],
      [
        [
          B,
          "Netscape"
        ],
        j
      ],
      [
        /(wolvic|librewolf)\/([\w\.]+)/i
      ],
      [
        B,
        j
      ],
      [
        /mobile vr; rv:([\w\.]+)\).+firefox/i
      ],
      [
        j,
        [
          B,
          wn + " Reality"
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
        B,
        [
          j,
          /_/g,
          "."
        ]
      ],
      [
        /(cobalt)\/([\w\.]+)/i
      ],
      [
        B,
        [
          j,
          /[^\d\.]+./,
          rn
        ]
      ]
    ],
    cpu: [
      [
        /\b((amd|x|x86[-_]?|wow|win)64)\b/i
      ],
      [
        [
          Mt,
          "amd64"
        ]
      ],
      [
        /(ia32(?=;))/i,
        /\b((i[346]|x)86)(pc)?\b/i
      ],
      [
        [
          Mt,
          "ia32"
        ]
      ],
      [
        /\b(aarch64|arm(v?[89]e?l?|_?64))\b/i
      ],
      [
        [
          Mt,
          "arm64"
        ]
      ],
      [
        /\b(arm(v[67])?ht?n?[fl]p?)\b/i
      ],
      [
        [
          Mt,
          "armhf"
        ]
      ],
      [
        /( (ce|mobile); ppc;|\/[\w\.]+arm\b)/i
      ],
      [
        [
          Mt,
          "arm"
        ]
      ],
      [
        / sun4\w[;\)]/i
      ],
      [
        [
          Mt,
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
          Mt,
          /ower/,
          rn,
          co
        ]
      ],
      [
        /mc680.0/i
      ],
      [
        [
          Mt,
          "68k"
        ]
      ],
      [
        /winnt.+\[axp/i
      ],
      [
        [
          Mt,
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
          V,
          Nn
        ],
        [
          U,
          qe
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
          V,
          Nn
        ],
        [
          U,
          be
        ]
      ],
      [
        /(?:\/|\()(ip(?:hone|od)[\w, ]*)[\/\);]/i
      ],
      [
        _,
        [
          V,
          _o
        ],
        [
          U,
          be
        ]
      ],
      [
        /\b(?:ios|apple\w+)\/.+[\(\/](ipad)/i,
        /\b(ipad)[\d,]*[;\] ].+(mac |i(pad)?)os/i
      ],
      [
        _,
        [
          V,
          _o
        ],
        [
          U,
          qe
        ]
      ],
      [
        /(macintosh);/i
      ],
      [
        _,
        [
          V,
          _o
        ]
      ],
      [
        /\b(sh-?[altvz]?\d\d[a-ekm]?)/i
      ],
      [
        _,
        [
          V,
          Pl
        ],
        [
          U,
          be
        ]
      ],
      [
        /\b((?:brt|eln|hey2?|gdi|jdn)-a?[lnw]09|(?:ag[rm]3?|jdn2|kob2)-a?[lw]0[09]hn)(?: bui|\)|;)/i
      ],
      [
        _,
        [
          V,
          Dl
        ],
        [
          U,
          qe
        ]
      ],
      [
        /honor([-\w ]+)[;\)]/i
      ],
      [
        _,
        [
          V,
          Dl
        ],
        [
          U,
          be
        ]
      ],
      [
        /\b((?:ag[rs][2356]?k?|bah[234]?|bg[2o]|bt[kv]|cmr|cpn|db[ry]2?|jdn2|got|kob2?k?|mon|pce|scm|sht?|[tw]gr|vrd)-[ad]?[lw][0125][09]b?|605hw|bg2-u03|(?:gem|fdr|m2|ple|t1)-[7a]0[1-4][lu]|t1-a2[13][lw]|mediapad[\w\. ]*(?= bui|\)))\b(?!.+d\/s)/i
      ],
      [
        _,
        [
          V,
          Hl
        ],
        [
          U,
          qe
        ]
      ],
      [
        /(?:huawei) ?([-\w ]+)[;\)]/i,
        /\b(nexus 6p|\w{2,4}e?-[atu]?[ln][\dx][\dc][adnt]?)\b(?!.+d\/s)/i
      ],
      [
        _,
        [
          V,
          Hl
        ],
        [
          U,
          be
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
          V,
          Js
        ],
        [
          U,
          qe
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
          _,
          /_/g,
          " "
        ],
        [
          V,
          Js
        ],
        [
          U,
          be
        ]
      ],
      [
        /droid.+; (cph2[3-6]\d[13579]|((gm|hd)19|(ac|be|in|kb)20|(d[en]|eb|le|mt)21|ne22)[0-2]\d|p[g-l]\w[1m]10)\b/i,
        /(?:one)?(?:plus)? (a\d0\d\d)(?: b|\))/i
      ],
      [
        _,
        [
          V,
          Ml
        ],
        [
          U,
          be
        ]
      ],
      [
        /; (\w+) bui.+ oppo/i,
        /\b(cph[12]\d{3}|p(?:af|c[al]|d\w|e[ar])[mt]\d0|x9007|a101op)\b/i
      ],
      [
        _,
        [
          V,
          Xs
        ],
        [
          U,
          be
        ]
      ],
      [
        /\b(opd2(\d{3}a?))(?: bui|\))/i
      ],
      [
        _,
        [
          V,
          ai,
          {
            OnePlus: [
              "203",
              "304",
              "403",
              "404",
              "413",
              "415"
            ],
            "*": Xs
          }
        ],
        [
          U,
          qe
        ]
      ],
      [
        /(vivo (5r?|6|8l?|go|one|s|x[il]?[2-4]?)[\w\+ ]*)(?: bui|\))/i
      ],
      [
        _,
        [
          V,
          "BLU"
        ],
        [
          U,
          be
        ]
      ],
      [
        /; vivo (\w+)(?: bui|\))/i,
        /\b(v[12]\d{3}\w?[at])(?: bui|;)/i
      ],
      [
        _,
        [
          V,
          "Vivo"
        ],
        [
          U,
          be
        ]
      ],
      [
        /\b(rmx[1-3]\d{3})(?: bui|;|\))/i
      ],
      [
        _,
        [
          V,
          "Realme"
        ],
        [
          U,
          be
        ]
      ],
      [
        /(ideatab[-\w ]+|602lv|d-42a|a101lv|a2109a|a3500-hv|s[56]000|pb-6505[my]|tb-?x?\d{3,4}(?:f[cu]|xu|[av])|yt\d?-[jx]?\d+[lfmx])( bui|;|\)|\/)/i,
        /lenovo ?(b[68]0[08]0-?[hf]?|tab(?:[\w- ]+?)|tb[\w-]{6,7})( bui|;|\)|\/)/i
      ],
      [
        _,
        [
          V,
          $s
        ],
        [
          U,
          qe
        ]
      ],
      [
        /lenovo[-_ ]?([-\w ]+?)(?: bui|\)|\/)/i
      ],
      [
        _,
        [
          V,
          $s
        ],
        [
          U,
          be
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
          V,
          qs
        ],
        [
          U,
          be
        ]
      ],
      [
        /\b(mz60\d|xoom[2 ]{0,2}) build\//i
      ],
      [
        _,
        [
          V,
          qs
        ],
        [
          U,
          qe
        ]
      ],
      [
        /\b(?:lg)?([vl]k\-?\d{3}) bui| 3\.[-\w; ]{10}lg?-([06cv9]{3,4})/i
      ],
      [
        _,
        [
          V,
          mr
        ],
        [
          U,
          qe
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
          V,
          mr
        ],
        [
          U,
          be
        ]
      ],
      [
        /(nokia) (t[12][01])/i
      ],
      [
        V,
        _,
        [
          U,
          qe
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
          U,
          be
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
        _,
        [
          V,
          wo
        ],
        [
          U,
          qe
        ]
      ],
      [
        /droid.+;(?: google)? (g(01[13]a|020[aem]|025[jn]|1b60|1f8f|2ybb|4s1m|576d|5nz6|8hhn|8vou|a02099|c15s|d1yq|e2ae|ec77|gh2x|kv4x|p4bc|pj41|r83y|tt9q|ur25|wvk6)|pixel[\d ]*a?( pro)?( xl)?( fold)?( \(5g\))?)( bui|\))/i
      ],
      [
        _,
        [
          V,
          wo
        ],
        [
          U,
          be
        ]
      ],
      [
        /(google) (pixelbook( go)?)/i
      ],
      [
        V,
        _
      ],
      [
        /droid.+; (a?\d[0-2]{2}so|[c-g]\d{4}|so[-gl]\w+|xq-\w\w\d\d)(?= bui|\).+chrome\/(?![1-6]{0,1}\d\.))/i
      ],
      [
        _,
        [
          V,
          Sn
        ],
        [
          U,
          be
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
          V,
          Sn
        ],
        [
          U,
          qe
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
          V,
          Er
        ],
        [
          U,
          qe
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
          V,
          Er
        ],
        [
          U,
          be
        ]
      ],
      [
        /(playbook);[-\w\),; ]+(rim)/i
      ],
      [
        _,
        V,
        [
          U,
          qe
        ]
      ],
      [
        /\b((?:bb[a-f]|st[hv])100-\d)/i,
        /(?:blackberry|\(bb10;) (\w+)/i
      ],
      [
        _,
        [
          V,
          vl
        ],
        [
          U,
          be
        ]
      ],
      [
        /(?:\b|asus_)(transfo[prime ]{4,10} \w+|eeepc|slider \w+|nexus 7|padfone|p00[cj])/i
      ],
      [
        _,
        [
          V,
          Cl
        ],
        [
          U,
          qe
        ]
      ],
      [
        / (z[bes]6[027][012][km][ls]|zenfone \d\w?)\b/i
      ],
      [
        _,
        [
          V,
          Cl
        ],
        [
          U,
          be
        ]
      ],
      [
        /(nexus 9)/i
      ],
      [
        _,
        [
          V,
          "HTC"
        ],
        [
          U,
          qe
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
          _,
          /_/g,
          " "
        ],
        [
          U,
          be
        ]
      ],
      [
        /tcl (xess p17aa)/i,
        /droid [\w\.]+; ((?:8[14]9[16]|9(?:0(?:48|60|8[01])|1(?:3[27]|66)|2(?:6[69]|9[56])|466))[gqswx])(_\w(\w|\w\w))?(\)| bui)/i
      ],
      [
        _,
        [
          V,
          "TCL"
        ],
        [
          U,
          qe
        ]
      ],
      [
        /droid [\w\.]+; (418(?:7d|8v)|5087z|5102l|61(?:02[dh]|25[adfh]|27[ai]|56[dh]|59k|65[ah])|a509dl|t(?:43(?:0w|1[adepqu])|50(?:6d|7[adju])|6(?:09dl|10k|12b|71[efho]|76[hjk])|7(?:66[ahju]|67[hw]|7[045][bh]|71[hk]|73o|76[ho]|79w|81[hks]?|82h|90[bhsy]|99b)|810[hs]))(_\w(\w|\w\w))?(\)| bui)/i
      ],
      [
        _,
        [
          V,
          "TCL"
        ],
        [
          U,
          be
        ]
      ],
      [
        /(itel) ((\w+))/i
      ],
      [
        [
          V,
          co
        ],
        _,
        [
          U,
          ai,
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
          V,
          "Acer"
        ],
        [
          U,
          qe
        ]
      ],
      [
        /droid.+; (m[1-5] note) bui/i,
        /\bmz-([-\w]{2,})/i
      ],
      [
        _,
        [
          V,
          "Meizu"
        ],
        [
          U,
          be
        ]
      ],
      [
        /; ((?:power )?armor(?:[\w ]{0,8}))(?: bui|\))/i
      ],
      [
        _,
        [
          V,
          "Ulefone"
        ],
        [
          U,
          be
        ]
      ],
      [
        /; (energy ?\w+)(?: bui|\))/i,
        /; energizer ([\w ]+)(?: bui|\))/i
      ],
      [
        _,
        [
          V,
          "Energizer"
        ],
        [
          U,
          be
        ]
      ],
      [
        /; cat (b35);/i,
        /; (b15q?|s22 flip|s48c|s62 pro)(?: bui|\))/i
      ],
      [
        _,
        [
          V,
          "Cat"
        ],
        [
          U,
          be
        ]
      ],
      [
        /((?:new )?andromax[\w- ]+)(?: bui|\))/i
      ],
      [
        _,
        [
          V,
          "Smartfren"
        ],
        [
          U,
          be
        ]
      ],
      [
        /droid.+; (a(in)?(0(15|59|6[35])|142)p?)/i
      ],
      [
        _,
        [
          V,
          "Nothing"
        ],
        [
          U,
          be
        ]
      ],
      [
        /; (x67 5g|tikeasy \w+|ac[1789]\d\w+)( b|\))/i,
        /archos ?(5|gamepad2?|([\w ]*[t1789]|hello) ?\d+[\w ]*)( b|\))/i
      ],
      [
        _,
        [
          V,
          "Archos"
        ],
        [
          U,
          qe
        ]
      ],
      [
        /archos ([\w ]+)( b|\))/i,
        /; (ac[3-6]\d\w{2,8})( b|\))/i
      ],
      [
        _,
        [
          V,
          "Archos"
        ],
        [
          U,
          be
        ]
      ],
      [
        /; (n159v)/i
      ],
      [
        _,
        [
          V,
          "HMD"
        ],
        [
          U,
          be
        ]
      ],
      [
        /(imo) (tab \w+)/i,
        /(infinix|tecno) (x1101b?|p904|dp(7c|8d|10a)( pro)?|p70[1-3]a?|p904|t1101)/i
      ],
      [
        V,
        _,
        [
          U,
          qe
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
        _,
        [
          U,
          be
        ]
      ],
      [
        /(kobo)\s(ereader|touch)/i,
        /(hp).+(touchpad(?!.+tablet)|tablet)/i,
        /(kindle)\/([\w\.]+)/i
      ],
      [
        V,
        _,
        [
          U,
          qe
        ]
      ],
      [
        /(surface duo)/i
      ],
      [
        _,
        [
          V,
          Ks
        ],
        [
          U,
          qe
        ]
      ],
      [
        /droid [\d\.]+; (fp\du?)(?: b|\))/i
      ],
      [
        _,
        [
          V,
          "Fairphone"
        ],
        [
          U,
          be
        ]
      ],
      [
        /((?:tegranote|shield t(?!.+d tv))[\w- ]*?)(?: b|\))/i
      ],
      [
        _,
        [
          V,
          Fl
        ],
        [
          U,
          qe
        ]
      ],
      [
        /(sprint) (\w+)/i
      ],
      [
        V,
        _,
        [
          U,
          be
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
          V,
          Ks
        ],
        [
          U,
          be
        ]
      ],
      [
        /droid.+; ([c6]+|et5[16]|mc[239][23]x?|vc8[03]x?)\)/i
      ],
      [
        _,
        [
          V,
          Zs
        ],
        [
          U,
          qe
        ]
      ],
      [
        /droid.+; (ec30|ps20|tc[2-8]\d[kx])\)/i
      ],
      [
        _,
        [
          V,
          Zs
        ],
        [
          U,
          be
        ]
      ],
      [
        /(philips)[\w ]+tv/i,
        /smart-tv.+(samsung)/i
      ],
      [
        V,
        [
          U,
          pt
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
          V,
          Nn
        ],
        [
          U,
          pt
        ]
      ],
      [
        /(vizio)(?: |.+model\/)(\w+-\w+)/i,
        /tcast.+(lg)e?. ([-\w]+)/i
      ],
      [
        V,
        _,
        [
          U,
          pt
        ]
      ],
      [
        /(nux; netcast.+smarttv|lg (netcast\.tv-201\d|android tv))/i
      ],
      [
        [
          V,
          mr
        ],
        [
          U,
          pt
        ]
      ],
      [
        /(apple) ?tv/i
      ],
      [
        V,
        [
          _,
          _o + " TV"
        ],
        [
          U,
          pt
        ]
      ],
      [
        /crkey.*devicetype\/chromecast/i
      ],
      [
        [
          _,
          Zi + " Third Generation"
        ],
        [
          V,
          wo
        ],
        [
          U,
          pt
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
          V,
          wo
        ],
        [
          U,
          pt
        ]
      ],
      [
        /fuchsia.*crkey/i
      ],
      [
        [
          _,
          Zi + " Nest Hub"
        ],
        [
          V,
          wo
        ],
        [
          U,
          pt
        ]
      ],
      [
        /crkey/i
      ],
      [
        [
          _,
          Zi
        ],
        [
          V,
          wo
        ],
        [
          U,
          pt
        ]
      ],
      [
        /(portaltv)/i
      ],
      [
        _,
        [
          V,
          Qs
        ],
        [
          U,
          pt
        ]
      ],
      [
        /droid.+aft(\w+)( bui|\))/i
      ],
      [
        _,
        [
          V,
          Er
        ],
        [
          U,
          pt
        ]
      ],
      [
        /(shield \w+ tv)/i
      ],
      [
        _,
        [
          V,
          Fl
        ],
        [
          U,
          pt
        ]
      ],
      [
        /\(dtv[\);].+(aquos)/i,
        /(aquos-tv[\w ]+)\)/i
      ],
      [
        _,
        [
          V,
          Pl
        ],
        [
          U,
          pt
        ]
      ],
      [
        /(bravia[\w ]+)( bui|\))/i
      ],
      [
        _,
        [
          V,
          Sn
        ],
        [
          U,
          pt
        ]
      ],
      [
        /(mi(tv|box)-?\w+) bui/i
      ],
      [
        _,
        [
          V,
          Js
        ],
        [
          U,
          pt
        ]
      ],
      [
        /Hbbtv.*(technisat) (.*);/i
      ],
      [
        V,
        _,
        [
          U,
          pt
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
          ai,
          {
            LG: "lge"
          }
        ],
        [
          _,
          Xr
        ],
        [
          U,
          pt
        ]
      ],
      [
        /(playstation \w+)/i
      ],
      [
        _,
        [
          V,
          Sn
        ],
        [
          U,
          Cr
        ]
      ],
      [
        /\b(xbox(?: one)?(?!; xbox))[\); ]/i
      ],
      [
        _,
        [
          V,
          Ks
        ],
        [
          U,
          Cr
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
          ai,
          {
            Nvidia: "Shield",
            Anbernic: "RGCUBE",
            Logitech: "GR0006"
          }
        ],
        _,
        [
          U,
          Cr
        ]
      ],
      [
        /\b(sm-[lr]\d\d[0156][fnuw]?s?|gear live)\b/i
      ],
      [
        _,
        [
          V,
          Nn
        ],
        [
          U,
          Oi
        ]
      ],
      [
        /((pebble))app/i,
        /(asus|google|lg|oppo|xiaomi) ((pixel |zen)?watch[\w ]*)( bui|\))/i
      ],
      [
        V,
        _,
        [
          U,
          Oi
        ]
      ],
      [
        /(ow(?:19|20)?we?[1-3]{1,3})/i
      ],
      [
        _,
        [
          V,
          Xs
        ],
        [
          U,
          Oi
        ]
      ],
      [
        /(watch)(?: ?os[,\/]|\d,\d\/)[\d\.]+/i
      ],
      [
        _,
        [
          V,
          _o
        ],
        [
          U,
          Oi
        ]
      ],
      [
        /(opwwe\d{3})/i
      ],
      [
        _,
        [
          V,
          Ml
        ],
        [
          U,
          Oi
        ]
      ],
      [
        /(moto 360)/i
      ],
      [
        _,
        [
          V,
          qs
        ],
        [
          U,
          Oi
        ]
      ],
      [
        /(smartwatch 3)/i
      ],
      [
        _,
        [
          V,
          Sn
        ],
        [
          U,
          Oi
        ]
      ],
      [
        /(g watch r)/i
      ],
      [
        _,
        [
          V,
          mr
        ],
        [
          U,
          Oi
        ]
      ],
      [
        /droid.+; (wt63?0{2,3})\)/i
      ],
      [
        _,
        [
          V,
          Zs
        ],
        [
          U,
          Oi
        ]
      ],
      [
        /droid.+; (glass) \d/i
      ],
      [
        _,
        [
          V,
          wo
        ],
        [
          U,
          Ir
        ]
      ],
      [
        /(pico) ([\w ]+) os\d/i
      ],
      [
        V,
        _,
        [
          U,
          Ir
        ]
      ],
      [
        /(quest( \d| pro)?s?).+vr/i
      ],
      [
        _,
        [
          V,
          Qs
        ],
        [
          U,
          Ir
        ]
      ],
      [
        /mobile vr; rv.+firefox/i
      ],
      [
        [
          U,
          Ir
        ]
      ],
      [
        /(tesla)(?: qtcarbrowser|\/[-\w\.]+)/i
      ],
      [
        V,
        [
          U,
          Cn
        ]
      ],
      [
        /(aeobc)\b/i
      ],
      [
        _,
        [
          V,
          Er
        ],
        [
          U,
          Cn
        ]
      ],
      [
        /(homepod).+mac os/i
      ],
      [
        _,
        [
          V,
          _o
        ],
        [
          U,
          Cn
        ]
      ],
      [
        /windows iot/i
      ],
      [
        [
          U,
          Cn
        ]
      ],
      [
        /droid.+; ([\w- ]+) (4k|android|smart|google)[- ]?tv/i
      ],
      [
        _,
        [
          U,
          pt
        ]
      ],
      [
        /\b((4k|android|smart|opera)[- ]?tv|tv; rv:|large screen[\w ]+safari)\b/i
      ],
      [
        [
          U,
          pt
        ]
      ],
      [
        /droid .+?; ([^;]+?)(?: bui|; wv\)|\) applew|; hmsc).+?(mobile|vr|\d) safari/i
      ],
      [
        _,
        [
          U,
          ai,
          {
            mobile: "Mobile",
            xr: "VR",
            "*": qe
          }
        ]
      ],
      [
        /\b((tablet|tab)[;\/]|focus\/\d(?!.+mobile))/i
      ],
      [
        [
          U,
          qe
        ]
      ],
      [
        /(phone|mobile(?:[;\/]| [ \w\/\.]*safari)|pda(?=.+windows ce))/i
      ],
      [
        [
          U,
          be
        ]
      ],
      [
        /droid .+?; ([\w\. -]+)( bui|\))/i
      ],
      [
        _,
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
        j,
        [
          B,
          vr + "HTML"
        ]
      ],
      [
        /(arkweb)\/([\w\.]+)/i
      ],
      [
        B,
        j
      ],
      [
        /webkit\/537\.36.+chrome\/(?!27)([\w\.]+)/i
      ],
      [
        j,
        [
          B,
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
        B,
        j
      ],
      [
        /ladybird\//i
      ],
      [
        [
          B,
          "LibWeb"
        ]
      ],
      [
        /rv\:([\w\.]{1,9})\b.+(gecko)/i
      ],
      [
        j,
        B
      ]
    ],
    os: [
      [
        /(windows nt) (6\.[23]); arm/i
      ],
      [
        [
          B,
          /N/,
          "R"
        ],
        [
          j,
          ai,
          kl
        ]
      ],
      [
        /(windows (?:phone|mobile|iot))(?: os)?[\/ ]?([\d\.]*( se)?)/i,
        /(windows)[\/ ](1[01]|2000|3\.1|7|8(\.1)?|9[58]|me|server 20\d\d( r2)?|vista|xp)/i
      ],
      [
        B,
        j
      ],
      [
        /windows nt ?([\d\.\)]*)(?!.+xbox)/i,
        /\bwin(?=3| ?9|n)(?:nt| 9x )?([\d\.;]*)/i
      ],
      [
        [
          j,
          /(;|\))/g,
          "",
          ai,
          kl
        ],
        [
          B,
          La
        ]
      ],
      [
        /(windows ce)\/?([\d\.]*)/i
      ],
      [
        B,
        j
      ],
      [
        /[adehimnop]{4,7}\b(?:.*os ([\w]+) like mac|; opera)/i,
        /(?:ios;fbsv|ios(?=.+ip(?:ad|hone)|.+apple ?tv)|ip(?:ad|hone)(?: |.+i(?:pad)?)os|apple ?tv.+ios)[\/ ]([\w\.]+)/i,
        /\btvos ?([\w\.]+)/i,
        /cfnetwork\/.+darwin/i
      ],
      [
        [
          j,
          /_/g,
          "."
        ],
        [
          B,
          "iOS"
        ]
      ],
      [
        /(mac os x) ?([\w\. ]*)/i,
        /(macintosh|mac_powerpc\b)(?!.+(haiku|morphos))/i
      ],
      [
        [
          B,
          "macOS"
        ],
        [
          j,
          /_/g,
          "."
        ]
      ],
      [
        /android ([\d\.]+).*crkey/i
      ],
      [
        j,
        [
          B,
          Zi + " Android"
        ]
      ],
      [
        /fuchsia.*crkey\/([\d\.]+)/i
      ],
      [
        j,
        [
          B,
          Zi + " Fuchsia"
        ]
      ],
      [
        /crkey\/([\d\.]+).*devicetype\/smartspeaker/i
      ],
      [
        j,
        [
          B,
          Zi + " SmartSpeaker"
        ]
      ],
      [
        /linux.*crkey\/([\d\.]+)/i
      ],
      [
        j,
        [
          B,
          Zi + " Linux"
        ]
      ],
      [
        /crkey\/([\d\.]+)/i
      ],
      [
        j,
        [
          B,
          Zi
        ]
      ],
      [
        /droid ([\w\.]+)\b.+(android[- ]x86)/i
      ],
      [
        j,
        B
      ],
      [
        /(ubuntu) ([\w\.]+) like android/i
      ],
      [
        [
          B,
          /(.+)/,
          "$1 Touch"
        ],
        j
      ],
      [
        /(harmonyos)[\/ ]?([\d\.]*)/i,
        /(android|bada|blackberry|kaios|maemo|meego|openharmony|qnx|rim tablet os|sailfish|series40|symbian|tizen)\w*[-\/\.; ]?([\d\.]*)/i
      ],
      [
        B,
        j
      ],
      [
        /\(bb(10);/i
      ],
      [
        j,
        [
          B,
          vl
        ]
      ],
      [
        /(?:symbian ?os|symbos|s60(?=;)|series ?60)[-\/ ]?([\w\.]*)/i
      ],
      [
        j,
        [
          B,
          "Symbian"
        ]
      ],
      [
        /mozilla\/[\d\.]+ \((?:mobile[;\w ]*|tablet|tv|[^\)]*(?:viera|lg(?:l25|-d300)|alcatel ?o.+|y300-f1)); rv:([\w\.]+)\).+gecko\//i
      ],
      [
        j,
        [
          B,
          wn + " OS"
        ]
      ],
      [
        /\b(?:hp)?wos(?:browser)?\/([\w\.]+)/i,
        /webos(?:[ \/]?|\.tv-20(?=2[2-9]))(\d[\d\.]*)/i
      ],
      [
        j,
        [
          B,
          "webOS"
        ]
      ],
      [
        /web0s;.+?(?:chr[o0]me|safari)\/(\d+)/i
      ],
      [
        [
          j,
          ai,
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
          B,
          "webOS"
        ]
      ],
      [
        /watch(?: ?os[,\/ ]|\d,\d\/)([\d\.]+)/i
      ],
      [
        j,
        [
          B,
          "watchOS"
        ]
      ],
      [
        /cros [\w]+(?:\)| ([\w\.]+)\b)/i
      ],
      [
        j,
        [
          B,
          "Chrome OS"
        ]
      ],
      [
        /kepler ([\w\.]+); (aft|aeo)/i
      ],
      [
        j,
        [
          B,
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
        B,
        j
      ],
      [
        /(sunos) ?([\d\.]*)/i
      ],
      [
        [
          B,
          "Solaris"
        ],
        j
      ],
      [
        /\b(beos|os\/2|amigaos|openvms|hp-ux|serenityos)/i,
        /(unix) ?([\w\.]*)/i
      ],
      [
        B,
        j
      ]
    ]
  }, Or = (function() {
    var e = {
      init: {},
      isIgnore: {},
      isIgnoreRgx: {},
      toString: {}
    };
    return _i.call(e.init, [
      [
        _t,
        [
          B,
          j,
          Zn,
          U
        ]
      ],
      [
        Yi,
        [
          Mt
        ]
      ],
      [
        wi,
        [
          U,
          _,
          V
        ]
      ],
      [
        ci,
        [
          B,
          j
        ]
      ],
      [
        Kt,
        [
          B,
          j
        ]
      ]
    ]), _i.call(e.isIgnore, [
      [
        _t,
        [
          j,
          Zn
        ]
      ],
      [
        ci,
        [
          j
        ]
      ],
      [
        Kt,
        [
          j
        ]
      ]
    ]), _i.call(e.isIgnoreRgx, [
      [
        _t,
        / ?browser$/i
      ],
      [
        Kt,
        / ?os$/i
      ]
    ]), _i.call(e.toString, [
      [
        _t,
        [
          B,
          j
        ]
      ],
      [
        Yi,
        [
          Mt
        ]
      ],
      [
        wi,
        [
          V,
          _
        ]
      ],
      [
        ci,
        [
          B,
          j
        ]
      ],
      [
        Kt,
        [
          B,
          j
        ]
      ]
    ]), e;
  })(), wO = function(e, t) {
    var i = Or.init[t], o = Or.isIgnore[t] || 0, c = Or.isIgnoreRgx[t] || 0, l = Or.toString[t] || 0;
    function h() {
      _i.call(this, i);
    }
    return h.prototype.getItem = function() {
      return e;
    }, h.prototype.withClientHints = function() {
      return vo ? vo.getHighEntropyValues(rd).then(function(d) {
        return e.setCH(new sd(d, false)).parseCH().get();
      }) : e.parseCH().get();
    }, h.prototype.withFeatureCheck = function() {
      return e.detectFeature().get();
    }, t != sn && (h.prototype.is = function(d) {
      var p = false;
      for (var g in this) if (this.hasOwnProperty(g) && !Ca(o, g) && co(c ? cn(c, this[g]) : this[g]) == co(c ? cn(c, d) : d)) {
        if (p = true, d != ht.UNDEFINED) break;
      } else if (d == ht.UNDEFINED && p) {
        p = !p;
        break;
      }
      return p;
    }, h.prototype.toString = function() {
      var d = rn;
      for (var p in l) typeof this[l[p]] !== ht.UNDEFINED && (d += (d ? " " : rn) + this[l[p]]);
      return d || ht.UNDEFINED;
    }), h.prototype.then = function(d) {
      var p = this, g = function() {
        for (var N in p) p.hasOwnProperty(N) && (this[N] = p[N]);
      };
      g.prototype = {
        is: h.prototype.is,
        toString: h.prototype.toString,
        withClientHints: h.prototype.withClientHints,
        withFeatureCheck: h.prototype.withFeatureCheck
      };
      var T = new g();
      return d(T), T;
    }, new h();
  };
  function sd(e, t) {
    if (e = e || {}, _i.call(this, rd), t) _i.call(this, [
      [
        ac,
        ea(e[Eo])
      ],
      [
        cc,
        ea(e[TO])
      ],
      [
        be,
        /\?1/.test(e[OO])
      ],
      [
        _,
        yn(e[gO])
      ],
      [
        an,
        yn(e[nd])
      ],
      [
        lc,
        yn(e[RO])
      ],
      [
        Mt,
        yn(e[IO])
      ],
      [
        Co,
        ea(e[mO])
      ],
      [
        ys,
        yn(e[EO])
      ]
    ]);
    else for (var i in e) this.hasOwnProperty(i) && typeof e[i] !== ht.UNDEFINED && (this[i] = e[i]);
  }
  function fo(e, t, i, o) {
    return _i.call(this, [
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
        i
      ],
      [
        "data",
        wO(this, e)
      ]
    ]), this;
  }
  fo.prototype.get = function(e) {
    return e ? this.data.hasOwnProperty(e) ? this.data[e] : void 0 : this.data;
  };
  fo.prototype.set = function(e, t) {
    return this.data[e] = t, this;
  };
  fo.prototype.setCH = function(e) {
    return this.uaCH = e, this;
  };
  fo.prototype.detectFeature = function() {
    if (Gt && Gt.userAgent == this.ua) switch (this.itemType) {
      case _t:
        Gt.brave && typeof Gt.brave.isBrave == ht.FUNCTION && this.set(B, "Brave");
        break;
      case wi:
        !this.get(U) && vo && vo[be] && this.set(U, be), this.get(_) == "Macintosh" && Gt && typeof Gt.standalone !== ht.UNDEFINED && Gt.maxTouchPoints && Gt.maxTouchPoints > 2 && this.set(_, "iPad").set(U, qe);
        break;
      case Kt:
        !this.get(B) && vo && vo[an] && this.set(B, vo[an]);
        break;
      case sn:
        var e = this.data, t = function(i) {
          return e[i].getItem().detectFeature().get();
        };
        this.set(_t, t(_t)).set(Yi, t(Yi)).set(wi, t(wi)).set(ci, t(ci)).set(Kt, t(Kt));
    }
    return this;
  };
  fo.prototype.parseUA = function() {
    switch (this.itemType != sn && Ha.call(this.data, this.ua, this.rgxMap), this.itemType) {
      case _t:
        this.set(Zn, va(this.get(j)));
        break;
      case Kt:
        if (this.get(B) == "iOS" && this.get(j) == "18.6") {
          var e = /\) Version\/([\d\.]+)/.exec(this.ua);
          e && parseInt(e[1].substring(0, 2), 10) >= 26 && this.set(j, e[1]);
        }
        break;
    }
    return this;
  };
  fo.prototype.parseCH = function() {
    var e = this.uaCH, t = this.rgxMap;
    switch (this.itemType) {
      case _t:
      case ci:
        var i = e[cc] || e[ac], o;
        if (i) for (var c = 0; c < i.length; c++) {
          var l = i[c].brand || i[c], h = i[c].version;
          this.itemType == _t && !/not.a.brand/i.test(l) && (!o || /Chrom/.test(o) && l != Wl || o == vr && /WebView2/.test(l)) && (l = ai(l, SO), o = this.get(B), o && !/Chrom/.test(o) && /Chrom/.test(l) || this.set(B, l).set(j, h).set(Zn, va(h)), o = l), this.itemType == ci && l == Wl && this.set(j, h);
        }
        break;
      case Yi:
        var d = e[Mt];
        d && (d && e[ys] == "64" && (d += "64"), Ha.call(this.data, d + ";", t));
        break;
      case wi:
        if (e[be] && this.set(U, be), e[_] && (this.set(_, e[_]), !this.get(U) || !this.get(V))) {
          var p = {};
          Ha.call(p, "droid 9; " + e[_] + ")", t), !this.get(U) && p.type && this.set(U, p.type), !this.get(V) && p.vendor && this.set(V, p.vendor);
        }
        if (e[Co]) {
          var g;
          if (typeof e[Co] != "string") for (var T = 0; !g && T < e[Co].length; ) g = ai(e[Co][T++], _l);
          else g = ai(e[Co], _l);
          this.set(U, g);
        }
        break;
      case Kt:
        var N = e[an];
        if (N) {
          var H = e[lc];
          N == La && (H = parseInt(va(H), 10) >= 13 ? "11" : "10"), this.set(B, N).set(j, H);
        }
        this.get(B) == La && e[_] == "Xbox" && this.set(B, "Xbox").set(j, void 0);
        break;
      case sn:
        var C = this.data, G = function(F) {
          return C[F].getItem().setCH(e).parseCH().get();
        };
        this.set(_t, G(_t)).set(Yi, G(Yi)).set(wi, G(wi)).set(ci, G(ci)).set(Kt, G(Kt));
    }
    return this;
  };
  $i = function(e, t, i) {
    if (typeof e === ht.OBJECT ? (qr(e, true) ? (typeof t === ht.OBJECT && (i = t), t = e) : (i = e, t = void 0), e = void 0) : typeof e === ht.STRING && !qr(t, true) && (i = t, t = void 0), i) if (typeof i.append === ht.FUNCTION) {
      var o = {};
      i.forEach(function(T, N) {
        o[String(N).toLowerCase()] = T;
      }), i = o;
    } else {
      var c = {};
      for (var l in i) i.hasOwnProperty(l) && (c[String(l).toLowerCase()] = i[l]);
      i = c;
    }
    if (!(this instanceof $i)) return new $i(e, t, i).getResult();
    var h = typeof e === ht.STRING ? e : i && i[bl] ? i[bl] : Gt && Gt.userAgent ? Gt.userAgent : rn, d = new sd(i, true), p = t ? NO(Bl, t) : Bl, g = function(T) {
      return T == sn ? function() {
        return new fo(T, h, p, d).set("ua", h).set(_t, this.getBrowser()).set(Yi, this.getCPU()).set(wi, this.getDevice()).set(ci, this.getEngine()).set(Kt, this.getOS()).get();
      } : function() {
        return new fo(T, h, p[T], d).parseUA().get();
      };
    };
    return _i.call(this, [
      [
        "getBrowser",
        g(_t)
      ],
      [
        "getCPU",
        g(Yi)
      ],
      [
        "getDevice",
        g(wi)
      ],
      [
        "getEngine",
        g(ci)
      ],
      [
        "getOS",
        g(Kt)
      ],
      [
        "getResult",
        g(sn)
      ],
      [
        "getUA",
        function() {
          return h;
        }
      ],
      [
        "setUA",
        function(T) {
          return nr(T) && (h = Xr(T, fO)), this;
        }
      ]
    ]).setUA(h), this;
  };
  $i.VERSION = dO;
  $i.BROWSER = bs([
    B,
    j,
    Zn,
    U
  ]);
  $i.CPU = bs([
    Mt
  ]);
  $i.DEVICE = bs([
    _,
    V,
    U,
    Cr,
    be,
    pt,
    qe,
    Oi,
    Cn
  ]);
  $i.ENGINE = $i.OS = bs([
    B,
    j
  ]);
  var ut = ((e) => (e.TAURI = "tauri", e.WEB = "web", e.MOBILE_WEB = "mobile_web", e.UNKNOWN = "unknown", e))(ut || {});
  class yO {
    constructor() {
      __publicField(this, "parser");
      const t = typeof navigator < "u" ? navigator.userAgent : "";
      this.parser = new $i(t);
    }
    detectEnvironment() {
      return this.isTauriEnvironment() ? ut.TAURI : this.parser.getDevice().type === "mobile" ? ut.MOBILE_WEB : ut.WEB;
    }
    isTauriEnvironment() {
      return false;
    }
    getPlatformContext() {
      const t = this.detectEnvironment(), i = this.parser.getDevice(), o = this.parser.getBrowser(), c = this.parser.getOS();
      return {
        environment: t,
        capabilities: this.getPlatformCapabilities(t),
        configuration: this.getDefaultConfiguration(t),
        userAgent: typeof navigator < "u" ? navigator.userAgent : "",
        isMobile: i.type === "mobile",
        isTablet: i.type === "tablet",
        browser: o.name || void 0,
        os: c.name || void 0
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
        case ut.TAURI:
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
        case ut.MOBILE_WEB:
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
        case ut.WEB:
        case ut.UNKNOWN:
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
        case ut.TAURI:
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
        case ut.MOBILE_WEB:
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
        case ut.WEB:
        case ut.UNKNOWN:
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
        return !t.environment || !t.capabilities ? L(new Ue("Invalid platform detection results")) : (console.info("[PlatformDetector] Platform detected:", {
          environment: t.environment,
          isMobile: t.isMobile,
          isTablet: t.isTablet,
          browser: t.browser,
          os: t.os
        }), P(true));
      } catch (t) {
        return L(new Ue("Platform detection failed", void 0, t));
      }
    }
  }
  const uc = new yO();
  PR = function() {
    return uc.getPlatformContext();
  };
  function bO(e, t, i, o) {
    if (typeof t == "function" ? e !== t || !o : !t.has(e)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
    return i === "m" ? o : i === "a" ? o.call(e) : o ? o.value : t.get(e);
  }
  function LO(e, t, i, o, c) {
    if (typeof t == "function" ? e !== t || true : !t.has(e)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
    return t.set(e, i), i;
  }
  var Hr;
  function CO(e, t = false) {
    return window.__TAURI_INTERNALS__.transformCallback(e, t);
  }
  async function lt(e, t = {}, i) {
    return window.__TAURI_INTERNALS__.invoke(e, t, i);
  }
  class vO {
    get rid() {
      return bO(this, Hr, "f");
    }
    constructor(t) {
      Hr.set(this, void 0), LO(this, Hr, t);
    }
    async close() {
      return lt("plugin:resources|close", {
        rid: this.rid
      });
    }
  }
  Hr = /* @__PURE__ */ new WeakMap();
  var Yl;
  (function(e) {
    e.WINDOW_RESIZED = "tauri://resize", e.WINDOW_MOVED = "tauri://move", e.WINDOW_CLOSE_REQUESTED = "tauri://close-requested", e.WINDOW_DESTROYED = "tauri://destroyed", e.WINDOW_FOCUS = "tauri://focus", e.WINDOW_BLUR = "tauri://blur", e.WINDOW_SCALE_FACTOR_CHANGED = "tauri://scale-change", e.WINDOW_THEME_CHANGED = "tauri://theme-changed", e.WINDOW_CREATED = "tauri://window-created", e.WEBVIEW_CREATED = "tauri://webview-created", e.DRAG_ENTER = "tauri://drag-enter", e.DRAG_OVER = "tauri://drag-over", e.DRAG_DROP = "tauri://drag-drop", e.DRAG_LEAVE = "tauri://drag-leave";
  })(Yl || (Yl = {}));
  async function HO(e, t) {
    window.__TAURI_EVENT_PLUGIN_INTERNALS__.unregisterListener(e, t), await lt("plugin:event|unlisten", {
      event: e,
      eventId: t
    });
  }
  async function jl(e, t, i) {
    var o;
    const c = (o = void 0) !== null && o !== void 0 ? o : {
      kind: "Any"
    };
    return lt("plugin:event|listen", {
      event: e,
      target: c,
      handler: CO(t)
    }).then((l) => async () => HO(e, l));
  }
  async function DO(e, t) {
    return await Jr.load(e, t);
  }
  class Jr extends vO {
    constructor(t) {
      super(t);
    }
    static async load(t, i) {
      const o = await lt("plugin:store|load", {
        path: t,
        options: i
      });
      return new Jr(o);
    }
    static async get(t) {
      return await lt("plugin:store|get_store", {
        path: t
      }).then((i) => i ? new Jr(i) : null);
    }
    async set(t, i) {
      await lt("plugin:store|set", {
        rid: this.rid,
        key: t,
        value: i
      });
    }
    async get(t) {
      const [i, o] = await lt("plugin:store|get", {
        rid: this.rid,
        key: t
      });
      return o ? i : void 0;
    }
    async has(t) {
      return await lt("plugin:store|has", {
        rid: this.rid,
        key: t
      });
    }
    async delete(t) {
      return await lt("plugin:store|delete", {
        rid: this.rid,
        key: t
      });
    }
    async clear() {
      await lt("plugin:store|clear", {
        rid: this.rid
      });
    }
    async reset() {
      await lt("plugin:store|reset", {
        rid: this.rid
      });
    }
    async keys() {
      return await lt("plugin:store|keys", {
        rid: this.rid
      });
    }
    async values() {
      return await lt("plugin:store|values", {
        rid: this.rid
      });
    }
    async entries() {
      return await lt("plugin:store|entries", {
        rid: this.rid
      });
    }
    async length() {
      return await lt("plugin:store|length", {
        rid: this.rid
      });
    }
    async reload(t) {
      await lt("plugin:store|reload", {
        rid: this.rid,
        ...t
      });
    }
    async save() {
      await lt("plugin:store|save", {
        rid: this.rid
      });
    }
    async onKeyChange(t, i) {
      return await jl("store://change", (o) => {
        o.payload.resourceId === this.rid && o.payload.key === t && i(o.payload.exists ? o.payload.value : void 0);
      });
    }
    async onChange(t) {
      return await jl("store://change", (i) => {
        i.payload.resourceId === this.rid && t(i.payload.key, i.payload.exists ? i.payload.value : void 0);
      });
    }
  }
  class ke extends Tn {
    constructor(t, i, o) {
      super(t, o);
      __publicField(this, "domain", or.STORAGE);
      this.code = i;
    }
  }
  var Ge = ((e) => (e.INITIALIZATION_FAILED = "INITIALIZATION_FAILED", e.NOT_INITIALIZED = "NOT_INITIALIZED", e.SET_FAILED = "SET_FAILED", e.GET_FAILED = "GET_FAILED", e.SAVE_FAILED = "SAVE_FAILED", e.EXPORT_FAILED = "EXPORT_FAILED", e.CLEAR_FAILED = "CLEAR_FAILED", e.REMOVE_FAILED = "REMOVE_FAILED", e))(Ge || {});
  class It extends Tn {
    constructor(t, i, o) {
      super(t, o);
      __publicField(this, "domain", or.GEOLOCATION);
      this.code = i;
    }
  }
  var rt = ((e) => (e.INITIALIZATION_FAILED = "INITIALIZATION_FAILED", e.NOT_INITIALIZED = "NOT_INITIALIZED", e.PERMISSION_DENIED = "PERMISSION_DENIED", e.POSITION_UNAVAILABLE = "POSITION_UNAVAILABLE", e.TIMEOUT = "TIMEOUT", e.UNSUPPORTED = "UNSUPPORTED", e.WATCH_FAILED = "WATCH_FAILED", e.CLEAR_WATCH_FAILED = "CLEAR_WATCH_FAILED", e))(rt || {});
  class yo extends Tn {
    constructor(t, i, o) {
      super(t, o);
      __publicField(this, "domain", or.GENERIC);
      this.code = i;
    }
  }
  var io = ((e) => (e.DETECTION_FAILED = "DETECTION_FAILED", e.INVALID_CONTEXT = "INVALID_CONTEXT", e.UNSUPPORTED_PLATFORM = "UNSUPPORTED_PLATFORM", e.NOT_INITIALIZED = "NOT_INITIALIZED", e))(io || {});
  class FO {
    constructor(t = "user-data.json") {
      __publicField(this, "store", null);
      __publicField(this, "initialized", false);
      __publicField(this, "storePath");
      this.storePath = t;
    }
    async init() {
      if (this.initialized) return P(void 0);
      try {
        return this.store = await DO(this.storePath, {
          autoSave: false,
          defaults: {}
        }), this.initialized = true, P(void 0);
      } catch (t) {
        return L(new ke("Failed to initialize Tauri storage", Ge.INITIALIZATION_FAILED, t));
      }
    }
    async set(t, i) {
      if (!this.store) return L(new ke("Tauri store not initialized", Ge.NOT_INITIALIZED));
      try {
        return await this.store.set(t, i), P(void 0);
      } catch (o) {
        return L(new ke(`Failed to set value for key: ${t}`, Ge.SET_FAILED, o));
      }
    }
    async get(t) {
      if (!this.store) return L(new ke("Tauri store not initialized", Ge.NOT_INITIALIZED));
      try {
        const i = await this.store.get(t);
        return P(i ?? null);
      } catch (i) {
        return L(new ke(`Failed to get value for key: ${t}`, Ge.GET_FAILED, i));
      }
    }
    async save() {
      if (!this.store) return L(new ke("Tauri store not initialized", Ge.NOT_INITIALIZED));
      try {
        return await this.store.save(), P(void 0);
      } catch (t) {
        return L(new ke("Failed to save store", Ge.SAVE_FAILED, t));
      }
    }
    async exportToJson() {
      if (!this.store) return L(new ke("Tauri store not initialized", Ge.NOT_INITIALIZED));
      try {
        const t = await this.store.keys(), i = {};
        for (const o of t) {
          const c = await this.store.get(o);
          i[o] = c;
        }
        return P(JSON.stringify(i, null, 2));
      } catch (t) {
        return L(new ke("Failed to export data to JSON", Ge.EXPORT_FAILED, t));
      }
    }
    async clear() {
      if (!this.store) return L(new ke("Tauri store not initialized", Ge.NOT_INITIALIZED));
      try {
        const t = await this.store.keys();
        for (const i of t) await this.store.delete(i);
        return P(void 0);
      } catch (t) {
        return L(new ke("Failed to clear store", Ge.CLEAR_FAILED, t));
      }
    }
    async remove(t) {
      if (!this.store) return L(new ke("Tauri store not initialized", Ge.NOT_INITIALIZED));
      try {
        return await this.store.delete(t), P(void 0);
      } catch (i) {
        return L(new ke(`Failed to remove key: ${t}`, Ge.REMOVE_FAILED, i));
      }
    }
    async scanKeys(t) {
      if (!this.store) return L(new ke("Tauri store not initialized", Ge.NOT_INITIALIZED));
      try {
        const o = (await this.store.keys()).filter((c) => c.startsWith(t));
        return P(o);
      } catch (i) {
        return L(new ke("Failed to scan keys", Ge.GET_FAILED, i));
      }
    }
    async batchSet(t) {
      if (!this.store) return L(new ke("Tauri store not initialized", Ge.NOT_INITIALIZED));
      try {
        for (const { key: i, value: o } of t) await this.store.set(i, o);
        return P(void 0);
      } catch (i) {
        return L(new ke("Failed to batch set values", Ge.SET_FAILED, i));
      }
    }
  }
  let MO, PO;
  ta = {
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
    kalmanImuAccelerationUncertainty: 0.1,
    kalmanVelocityProcessNoise: 0.01,
    zuptEnabled: true,
    zuptThreshold: 0.3,
    zuptConsecutiveSamples: 5,
    zuptVelocityNoise: 0.1,
    routeSimplificationChunkSize: 100,
    routeSimplificationThreshold: 0.01,
    routeSimplificationMaxIterations: 3,
    routeSimplificationMaxDistance: 5,
    routeSimplificationMinDistance: 0.5
  };
  UR = [
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
      key: "kalmanImuAccelerationUncertainty",
      name: "IMU Acceleration Uncertainty",
      type: "number",
      description: "IMU acceleration uncertainty (m/s\xB2)"
    },
    {
      key: "kalmanVelocityProcessNoise",
      name: "Velocity Process Noise",
      type: "number",
      description: "Process noise coefficient for velocity in Kalman filter"
    },
    {
      key: "zuptEnabled",
      name: "ZUPT Enabled",
      type: "boolean",
      description: "Enable Zero-Velocity Update to improve position accuracy when stationary"
    },
    {
      key: "zuptThreshold",
      name: "ZUPT Threshold",
      type: "number",
      description: "Acceleration magnitude threshold for stationary detection (m/s\xB2)"
    },
    {
      key: "zuptConsecutiveSamples",
      name: "ZUPT Consecutive Samples",
      type: "number",
      description: "Number of consecutive samples below threshold to trigger ZUPT"
    },
    {
      key: "zuptVelocityNoise",
      name: "ZUPT Velocity Noise",
      type: "number",
      description: "Measurement noise for zero-velocity assumption (m/s)"
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
  MO = "trackmaker_settings";
  PO = typeof window < "u" && window.__TAURI_INTERNALS__ !== void 0;
  function We(e) {
    try {
      if (typeof localStorage > "u") return ta[e];
      const t = localStorage.getItem(MO);
      if (t !== null) return JSON.parse(t)[e] ?? ta[e];
    } catch {
    }
    return ta[e];
  }
  function Da() {
    return We("debugMode");
  }
  function hc() {
    return We("gpsUpdateInterval");
  }
  function UO() {
    return We("kalmanGpsUpdateInterval");
  }
  function WO() {
    return We("enableKalmanFilter");
  }
  WR = function() {
    return We("mapZoomLevel");
  };
  GR = function() {
    return We("keepScreenOn");
  };
  kR = function() {
    return We("mapTileServer");
  };
  _R = function() {
    return We("showCompass");
  };
  BR = function() {
    return We("autoRecenterTimeout");
  };
  YR = function() {
    return We("customMapTileUrl");
  };
  jR = function() {
    return We("mapTilerApiKey");
  };
  xR = function() {
    return We("nightModeMapStyleUrl");
  };
  function Fa() {
    return We("imuUpdateFrequency");
  }
  function GO() {
    return We("kalmanInitialAccelerationUncertainty");
  }
  function kO() {
    return We("kalmanInitialPositionUncertainty");
  }
  function _O() {
    return We("kalmanInitialVelocityUncertainty");
  }
  function BO() {
    return We("kalmanGpsSpeedUncertainty");
  }
  function YO() {
    return We("kalmanImuAccelerationUncertainty");
  }
  function jO() {
    return We("kalmanVelocityProcessNoise");
  }
  function xO() {
    return We("zuptEnabled");
  }
  function VO() {
    return We("zuptThreshold");
  }
  function zO() {
    return We("zuptConsecutiveSamples");
  }
  function $O() {
    return We("zuptVelocityNoise");
  }
  VR = function() {
    return We("routeSimplificationChunkSize");
  };
  zR = function() {
    return We("routeSimplificationThreshold");
  };
  $R = function() {
    return We("routeSimplificationMaxIterations");
  };
  KR = function() {
    return We("routeSimplificationMaxDistance");
  };
  qR = function() {
    return We("routeSimplificationMinDistance");
  };
  class KO {
    constructor(t = "trackmaker-db", i = "user-data") {
      __publicField(this, "db", null);
      __publicField(this, "initialized", false);
      __publicField(this, "dbName");
      __publicField(this, "storeName");
      this.dbName = t, this.storeName = i;
    }
    getMaxCacheSize() {
      try {
        return We("maxCacheSize") || 100;
      } catch {
        return 100;
      }
    }
    async shouldPruneCache() {
      return this.db ? new Promise((t) => {
        const c = this.db.transaction(this.storeName, "readonly").objectStore(this.storeName).count();
        c.onsuccess = () => {
          const l = this.getMaxCacheSize() * 10;
          t(c.result > l);
        }, c.onerror = () => t(false);
      }) : false;
    }
    async pruneCache() {
      if (this.db) return new Promise((t, i) => {
        const o = this.db.transaction(this.storeName, "readwrite"), l = o.objectStore(this.storeName).index("timestamp").openCursor(null, "prev"), h = 100;
        let d = 0;
        l.onsuccess = (p) => {
          const g = p.target.result;
          g && d < h && (g.delete(), d++, g.continue());
        }, o.oncomplete = () => t(), o.onerror = () => i(new Error("Failed to prune cache"));
      });
    }
    async init() {
      if (this.initialized) return P(void 0);
      try {
        return this.db = await this.openDatabase(), this.initialized = true, P(void 0);
      } catch (t) {
        return L(new ke("Failed to initialize Web storage", Ge.INITIALIZATION_FAILED, t));
      }
    }
    openDatabase() {
      return new Promise((t, i) => {
        const o = indexedDB.open(this.dbName, 1);
        o.onupgradeneeded = (c) => {
          const l = c.target.result;
          l.objectStoreNames.contains(this.storeName) || l.createObjectStore(this.storeName);
        }, o.onsuccess = (c) => {
          t(c.target.result);
        }, o.onerror = (c) => {
          i(c.target.error ?? Error("Failed to open database"));
        };
      });
    }
    async set(t, i) {
      if (!this.db) return L(new ke("Database not initialized", Ge.NOT_INITIALIZED));
      try {
        return await this.shouldPruneCache() && await this.pruneCache(), await this.executeTransaction("readwrite", (o) => new Promise((c, l) => {
          const h = o.put(wa(i), t);
          h.onsuccess = () => c(), h.onerror = () => l(new Error("Failed to set value"));
        })), P(void 0);
      } catch (o) {
        return L(new ke(`Failed to set value for key: ${t}`, Ge.SET_FAILED, o));
      }
    }
    async get(t) {
      if (!this.db) return L(new ke("Database not initialized", Ge.NOT_INITIALIZED));
      try {
        const i = await this.executeTransaction("readonly", (o) => new Promise((c, l) => {
          const h = o.get(t);
          h.onsuccess = () => c(h.result), h.onerror = () => l(new Error("Failed to get value"));
        }));
        return P(i);
      } catch (i) {
        return L(new ke(`Failed to get value for key: ${t}`, Ge.GET_FAILED, i));
      }
    }
    async save() {
      return P(void 0);
    }
    async exportToJson() {
      if (!this.db) return L(new ke("Database not initialized", Ge.NOT_INITIALIZED));
      try {
        const t = await this.executeTransaction("readonly", (i) => new Promise((o, c) => {
          const l = i.getAll();
          l.onsuccess = () => {
            const d = l.result.reduce((p, g, T) => (p[T] = g, p), {});
            o(d);
          }, l.onerror = () => c(new Error("Failed to export data"));
        }));
        return P(JSON.stringify(t, null, 2));
      } catch (t) {
        return L(new ke("Failed to export data to JSON", Ge.EXPORT_FAILED, t));
      }
    }
    async clear() {
      if (!this.db) return L(new ke("Database not initialized", Ge.NOT_INITIALIZED));
      try {
        return await this.executeTransaction("readwrite", (t) => new Promise((i, o) => {
          const c = t.clear();
          c.onsuccess = () => i(), c.onerror = () => o(new Error("Failed to clear store"));
        })), P(void 0);
      } catch (t) {
        return L(new ke("Failed to clear store", Ge.CLEAR_FAILED, t));
      }
    }
    async remove(t) {
      if (!this.db) return L(new ke("Database not initialized", Ge.NOT_INITIALIZED));
      try {
        return await this.executeTransaction("readwrite", (i) => new Promise((o, c) => {
          const l = i.delete(t);
          l.onsuccess = () => o(), l.onerror = () => c(new Error("Failed to remove key"));
        })), P(void 0);
      } catch (i) {
        return L(new ke(`Failed to remove key: ${t}`, Ge.REMOVE_FAILED, i));
      }
    }
    async scanKeys(t) {
      if (!this.db) return L(new ke("Database not initialized", Ge.NOT_INITIALIZED));
      try {
        const i = await this.executeTransaction("readonly", (o) => new Promise((c, l) => {
          const h = IDBKeyRange.bound(t, t + "\uFFFF"), d = o.openCursor(h), p = [];
          d.onsuccess = (g) => {
            const T = g.target.result;
            if (T) {
              const N = T.key;
              p.push(String(N)), T.continue();
            } else c(p);
          }, d.onerror = () => l(new Error("Failed to scan keys"));
        }));
        return P(i);
      } catch (i) {
        return L(new ke("Scan failed", Ge.GET_FAILED, i));
      }
    }
    async batchSet(t) {
      if (!this.db) return L(new ke("Database not initialized", Ge.NOT_INITIALIZED));
      try {
        return await this.executeTransaction("readwrite", (i) => new Promise((o, c) => {
          let l = 0;
          for (const { key: h, value: d } of t) {
            const p = i.put(wa(d), h);
            p.onsuccess = () => {
              l++, l === t.length && o();
            }, p.onerror = () => c(new Error("Batch set failed"));
          }
          t.length === 0 && o();
        })), P(void 0);
      } catch (i) {
        return L(new ke("Batch set failed", Ge.SET_FAILED, i));
      }
    }
    executeTransaction(t, i) {
      return new Promise((o, c) => {
        if (!this.db) {
          c(new Error("Database not initialized"));
          return;
        }
        const l = this.db.transaction(this.storeName, t), h = l.objectStore(this.storeName);
        i(h).then(o).catch(c), l.onerror = () => {
          c(new Error("Transaction failed"));
        };
      });
    }
  }
  class qO {
    constructor(t = "get_geolocation") {
      __publicField(this, "initialized", false);
      __publicField(this, "tauriHandlerName");
      __publicField(this, "watchCallbacks", /* @__PURE__ */ new Map());
      this.tauriHandlerName = t;
    }
    async init(t) {
      if (this.initialized) return P(void 0);
      const i = await this.getPermissionStatus();
      if (i.isErr()) return L(i.error);
      if (i.value === "prompt") {
        let o = false;
        try {
          await lt("request_geolocation_permission"), o = true;
          const c = await this.getPermissionStatus();
          if (c.isErr()) return L(c.error);
          if (c.value === "denied") return L(new It("Geolocation permission denied by system", rt.PERMISSION_DENIED));
        } catch {
        }
        if (!o && t) {
          if (!await t(i.value, "permission.location.prompt")) return L(new It("Geolocation permission denied", rt.PERMISSION_DENIED));
          const l = await this.getPermissionStatus();
          if (l.isErr()) return L(l.error);
          if (l.value === "denied") return L(new It("Geolocation permission denied", rt.PERMISSION_DENIED));
        } else if (!o) return L(new It("Geolocation permission not granted", rt.PERMISSION_DENIED));
      } else if (i.value === "denied") return L(new It("Geolocation permission denied", rt.PERMISSION_DENIED));
      try {
        return await this.injectTauriProvider(), this.initialized = true, P(void 0);
      } catch (o) {
        return L(new It("Failed to initialize Tauri geolocation provider", rt.INITIALIZATION_FAILED, o));
      }
    }
    async injectTauriProvider() {
      if (navigator.geolocation.injected) return;
      const t = new XO(this.tauriHandlerName);
      navigator.geolocation.getCurrentPosition = t.getCurrentPosition.bind(t), navigator.geolocation.watchPosition = t.watchPosition.bind(t), navigator.geolocation.clearWatch = t.clearWatch.bind(t), navigator.geolocation.injected = true;
    }
    async getPermissionStatus() {
      try {
        const t = await lt("get_geolocation_permission_status");
        return P(t);
      } catch {
        if (!navigator.permissions) return await this.fallbackPermissionCheck();
        try {
          const t = await navigator.permissions.query({
            name: "geolocation"
          });
          return P(t.state);
        } catch (t) {
          return L(new It("Failed to get permission status", rt.PERMISSION_DENIED, t));
        }
      }
    }
    async fallbackPermissionCheck() {
      return new Promise((t) => {
        navigator.geolocation.getCurrentPosition(() => t(P("granted")), (i) => {
          i.code === i.PERMISSION_DENIED ? t(P("denied")) : t(P("prompt"));
        }, {
          timeout: 5e3,
          maximumAge: 1 / 0,
          enableHighAccuracy: true
        });
      });
    }
    async requestPermission() {
      try {
        return await this.getCurrentPosition(), P("granted");
      } catch (t) {
        return this.isPositionError(t) && t.code === t.PERMISSION_DENIED ? P("denied") : L(new It("Failed to request permission", rt.PERMISSION_DENIED, t));
      }
    }
    async getCurrentPosition() {
      try {
        const t = await this.locateTauri();
        return P(this.convertToGeolocationPosition(t));
      } catch (t) {
        return L(new It("Failed to get current position", rt.POSITION_UNAVAILABLE, t));
      }
    }
    async locateTauri() {
      return await lt(this.tauriHandlerName);
    }
    convertToGeolocationPosition(t) {
      const i = {
        latitude: t.point.latitude,
        longitude: t.point.longitude,
        altitude: null,
        accuracy: 0,
        altitudeAccuracy: null,
        heading: null,
        speed: null
      }, o = {
        coords: {
          ...i,
          toJSON: () => JSON.stringify(i)
        },
        timestamp: performance.now()
      };
      return {
        ...o,
        toJSON: () => JSON.stringify(o)
      };
    }
    async watchPosition(t, i) {
      try {
        const o = hc(), c = (i == null ? void 0 : i.highFrequency) ?? false, l = window.setInterval(async () => {
          try {
            const h = await this.getCurrentPosition();
            h.isOk() && t(h.value);
          } catch (h) {
            console.error("Error in watch position:", h);
          }
        }, c ? 100 : o);
        return this.watchCallbacks.set(l, l), P(l);
      } catch (o) {
        return L(new It("Failed to start watching position", rt.WATCH_FAILED, o));
      }
    }
    clearWatch(t) {
      try {
        return this.watchCallbacks.has(t) && (clearInterval(t), this.watchCallbacks.delete(t)), P(void 0);
      } catch (i) {
        return L(new It("Failed to clear watch", rt.CLEAR_WATCH_FAILED, i));
      }
    }
    isSupported() {
      return false;
    }
    isPositionError(t) {
      return typeof t == "object" && t !== null && "code" in t && "message" in t && typeof t.code == "number";
    }
  }
  class XO {
    constructor(t) {
      __publicField(this, "tauriHandlerName");
      this.tauriHandlerName = t;
    }
    getCurrentPosition(t, i) {
      this.getTauriPosition().then(t).catch((o) => {
        i == null ? void 0 : i(this.createPositionError(o));
      });
    }
    watchPosition(t, i, o) {
      const c = hc(), l = (o == null ? void 0 : o.highFrequency) ?? false;
      return window.setInterval(() => {
        this.getTauriPosition().then(t).catch((d) => {
          i == null ? void 0 : i(this.createPositionError(d));
        });
      }, l ? 100 : c);
    }
    clearWatch(t) {
      clearInterval(t);
    }
    async getTauriPosition() {
      const t = await lt(this.tauriHandlerName), i = {
        latitude: t.point.latitude,
        longitude: t.point.longitude,
        altitude: null,
        accuracy: 0,
        altitudeAccuracy: null,
        heading: null,
        speed: null
      }, o = {
        coords: {
          ...i,
          toJSON: () => JSON.stringify(i)
        },
        timestamp: performance.now()
      };
      return {
        ...o,
        toJSON: () => JSON.stringify(o)
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
  class JO {
    constructor() {
      __publicField(this, "initialized", false);
      __publicField(this, "compatibilityModeWatches", /* @__PURE__ */ new Map());
      __publicField(this, "compatibilityModeCallbacks", /* @__PURE__ */ new Map());
      __publicField(this, "lastCompatibilityPosition", null);
      __publicField(this, "lastCompatibilityUpdateTime", 0);
      __publicField(this, "compatibilityIntervalId", null);
      __publicField(this, "initPromise", null);
    }
    async init(t) {
      if (this.initialized) return P(void 0);
      if (this.initPromise) return this.initPromise;
      this.initPromise = this.doInit(t);
      const i = await this.initPromise;
      return i.isErr() && (this.initPromise = null), i;
    }
    async doInit(t) {
      if (this.initialized) return P(void 0);
      if (!this.isSupported()) return L(new It("Geolocation is not supported by this browser", rt.UNSUPPORTED));
      const i = await this.getPermissionStatus();
      if (i.isErr()) return L(i.error);
      if (i.value === "prompt" && t) {
        if (!await t(i.value, "permission.location.prompt")) return L(new It("Geolocation permission denied", rt.PERMISSION_DENIED));
        const c = await this.getPermissionStatus();
        if (c.isErr()) return L(c.error);
        if (c.value === "denied") return L(new It("Geolocation permission denied", rt.PERMISSION_DENIED));
      }
      return this.initialized = true, P(void 0);
    }
    async getPermissionStatus() {
      if (!navigator.permissions) return this.fallbackPermissionCheck();
      try {
        const t = await navigator.permissions.query({
          name: "geolocation"
        });
        return P(t.state);
      } catch (t) {
        return L(new It("Failed to get permission status", rt.PERMISSION_DENIED, t));
      }
    }
    async fallbackPermissionCheck() {
      return new Promise((t) => {
        navigator.geolocation.getCurrentPosition(() => t(P("granted")), (i) => {
          i.code === i.PERMISSION_DENIED ? t(P("denied")) : t(P("prompt"));
        }, {
          timeout: 5e3,
          maximumAge: 1 / 0,
          enableHighAccuracy: true
        });
      });
    }
    async requestPermission() {
      try {
        return (await this.getCurrentPosition()).isOk() ? P("granted") : P("denied");
      } catch (t) {
        return this.isPositionError(t) ? t.code === t.PERMISSION_DENIED ? P("denied") : P("prompt") : L(new It("Failed to request permission", rt.PERMISSION_DENIED, t));
      }
    }
    async getCurrentPosition() {
      if (!this.initialized) {
        const t = await this.init();
        if (t.isErr()) return L(t.error);
      }
      return new Promise((t) => {
        navigator.geolocation.getCurrentPosition((i) => {
          t(P(i));
        }, (i) => {
          let o;
          const c = i.message;
          switch (i.code) {
            case i.PERMISSION_DENIED:
              o = rt.PERMISSION_DENIED;
              break;
            case i.POSITION_UNAVAILABLE:
              o = rt.POSITION_UNAVAILABLE;
              break;
            case i.TIMEOUT:
              o = rt.TIMEOUT;
              break;
            default:
              o = rt.POSITION_UNAVAILABLE;
          }
          t(L(new It(c, o, new Error(i.message))));
        }, {
          enableHighAccuracy: true,
          timeout: 3e4,
          maximumAge: 0
        });
      });
    }
    async watchPosition(t, i) {
      if (!this.initialized) {
        const d = await this.init();
        if (d.isErr()) return L(d.error);
      }
      const o = UO(), c = hc(), l = We("watchCompatibilityMode"), h = (i == null ? void 0 : i.highFrequency) ?? false;
      if (l || h) {
        h ? console.log("[Geolocation] High frequency mode enabled") : console.info("[Geolocation] Using compatibility mode for position watch");
        try {
          const d = Date.now();
          return this.compatibilityModeCallbacks.set(d, t), this.compatibilityIntervalId === null && (this.compatibilityIntervalId = setInterval(async () => {
            const p = await this.getCurrentPosition();
            if (p.isOk()) {
              const g = p.value, T = {
                lat: g.coords.latitude,
                lng: g.coords.longitude,
                acc: g.coords.accuracy
              }, N = Date.now();
              if (!(!h && N - this.lastCompatibilityUpdateTime > c) && !h && this.lastCompatibilityPosition && this.lastCompatibilityPosition.lat === T.lat && this.lastCompatibilityPosition.lng === T.lng && this.lastCompatibilityPosition.acc === T.acc) return;
              this.lastCompatibilityPosition = T;
              for (const C of this.compatibilityModeCallbacks.values()) try {
                C(g);
              } catch (G) {
                console.error("[Geolocation] Callback error:", G);
              }
              this.lastCompatibilityUpdateTime = N;
            }
          }, h ? o : c)), this.compatibilityModeWatches.set(d, this.compatibilityIntervalId), P(d);
        } catch (d) {
          return L(new It("Failed to start watching position (compatibility mode)", rt.WATCH_FAILED, d));
        }
      }
      try {
        const d = navigator.geolocation.watchPosition(t, (p) => {
          console.error("Geolocation watch error:", p);
        }, {
          enableHighAccuracy: true,
          timeout: 3e4,
          maximumAge: h ? 0 : c
        });
        return P(d);
      } catch (d) {
        return L(new It("Failed to start watching position", rt.WATCH_FAILED, d));
      }
    }
    clearWatch(t) {
      try {
        return this.compatibilityModeWatches.has(t) ? (this.compatibilityModeCallbacks.delete(t), this.compatibilityModeWatches.delete(t), this.compatibilityModeCallbacks.size === 0 && this.compatibilityIntervalId !== null && (window.clearInterval(this.compatibilityIntervalId), this.compatibilityIntervalId = null, this.lastCompatibilityPosition = null)) : navigator.geolocation.clearWatch(t), P(void 0);
      } catch (i) {
        return L(new It("Failed to clear watch", rt.CLEAR_WATCH_FAILED, i));
      }
    }
    isSupported() {
      return "geolocation" in navigator;
    }
    isPositionError(t) {
      return typeof t == "object" && t !== null && "code" in t && "message" in t && typeof t.code == "number";
    }
  }
  class ZO {
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
      if (this.initialized) return P(void 0);
      if (this.initPromise) return this.initPromise;
      this.initPromise = this.doInit(t);
      const i = await this.initPromise;
      return i.isErr() && (this.initPromise = null), i;
    }
    async doInit(t) {
      if (this.disposed) return L(new Ue("Device orientation provider has been disposed"));
      const i = await this.requestPermissionIfNeeded(t);
      return i.isErr() ? L(i.error) : await this.checkHardwareSupport() ? (this.initialized = true, P(void 0)) : L(new Ue("Device orientation is not supported by this browser"));
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
            if (!await t("prompt", "permission.device-orientation.required")) return L(new Ue("User declined to grant device orientation permission"));
            if (await DeviceOrientationEvent.requestPermission() !== "granted") return L(new Ue("Device orientation permission denied"));
          } else return i === "denied" ? L(new Ue("Device orientation permission denied")) : P(void 0);
        }
        return P(void 0);
      } catch (i) {
        return L(new Ue("Failed to request device orientation permission", void 0, i));
      }
    }
    async checkHardwareSupport() {
      return "DeviceOrientationEvent" in window ? new Promise((t) => {
        let i = false;
        const o = () => {
          window.removeEventListener("deviceorientation", h);
        }, c = () => {
          i || (i = true, o(), t(true));
        }, l = () => {
          i || (i = true, o(), t(false));
        }, h = (d) => {
          (d.alpha !== null || d.beta !== null || d.gamma !== null) && c();
        };
        window.addEventListener("deviceorientation", h), setTimeout(l, 1e3);
      }) : false;
    }
    async start() {
      if (this.disposed) return L(new Ue("Device orientation provider has been disposed"));
      if (!this.initialized) {
        const t = await this.init();
        if (t.isErr()) return L(t.error);
      }
      if (this.isWatching) return P(void 0);
      try {
        return this.orientationEventListenerCount === 0 && window.addEventListener("deviceorientation", this.boundHandleOrientationEvent, true), this.orientationEventListenerCount++, this.isWatching = true, P(void 0);
      } catch (t) {
        return L(new Ue("Failed to start device orientation", void 0, t));
      }
    }
    stop() {
      if (!this.isWatching) return P(void 0);
      try {
        return this.orientationEventListenerCount--, this.isWatching = false, this.lastReading = null, this.orientationEventListenerCount === 0 && window.removeEventListener("deviceorientation", this.boundHandleOrientationEvent, true), P(void 0);
      } catch (t) {
        return L(new Ue("Failed to stop device orientation", void 0, t));
      }
    }
    async getCurrentOrientation() {
      if (this.disposed) return L(new Ue("Device orientation provider has been disposed"));
      if (!this.initialized) {
        const t = await this.init();
        if (t.isErr()) return L(t.error);
      }
      return P(this.lastReading);
    }
    onOrientationChange(t) {
      const i = this.nextListenerId++;
      return this.listeners.set(i, t), this.lastReading && t(this.lastReading), i;
    }
    removeEventListener(t) {
      return this.listeners.delete(t), P(void 0);
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
      for (const o of this.listeners.values()) try {
        o(i);
      } catch (c) {
        console.error("Error in device orientation callback:", c);
      }
    }
  }
  QO = function(e) {
    return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
  };
  function ad(e) {
    if (Object.prototype.hasOwnProperty.call(e, "__esModule")) return e;
    var t = e.default;
    if (typeof t == "function") {
      var i = function o() {
        var c = false;
        try {
          c = this instanceof o;
        } catch {
        }
        return c ? Reflect.construct(t, arguments, this.constructor) : t.apply(this, arguments);
      };
      i.prototype = t.prototype;
    } else i = {};
    return Object.defineProperty(i, "__esModule", {
      value: true
    }), Object.keys(e).forEach(function(o) {
      var c = Object.getOwnPropertyDescriptor(e, o);
      Object.defineProperty(i, o, c.get ? c : {
        enumerable: true,
        get: function() {
          return e[o];
        }
      });
    }), i;
  }
  var Ce = {};
  const eg = Object.prototype.toString;
  function Qn(e) {
    const t = eg.call(e);
    return t.endsWith("Array]") && !t.includes("Big");
  }
  const tg = Object.freeze(Object.defineProperty({
    __proto__: null,
    isAnyArray: Qn
  }, Symbol.toStringTag, {
    value: "Module"
  })), ig = ad(tg);
  function og(e) {
    var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
    if (!Qn(e)) throw new TypeError("input must be an array");
    if (e.length === 0) throw new TypeError("input must not be empty");
    var i = t.fromIndex, o = i === void 0 ? 0 : i, c = t.toIndex, l = c === void 0 ? e.length : c;
    if (o < 0 || o >= e.length || !Number.isInteger(o)) throw new Error("fromIndex must be a positive integer smaller than length");
    if (l <= o || l > e.length || !Number.isInteger(l)) throw new Error("toIndex must be an integer greater than fromIndex and at most equal to length");
    for (var h = e[o], d = o + 1; d < l; d++) e[d] > h && (h = e[d]);
    return h;
  }
  function ng(e) {
    var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
    if (!Qn(e)) throw new TypeError("input must be an array");
    if (e.length === 0) throw new TypeError("input must not be empty");
    var i = t.fromIndex, o = i === void 0 ? 0 : i, c = t.toIndex, l = c === void 0 ? e.length : c;
    if (o < 0 || o >= e.length || !Number.isInteger(o)) throw new Error("fromIndex must be a positive integer smaller than length");
    if (l <= o || l > e.length || !Number.isInteger(l)) throw new Error("toIndex must be an integer greater than fromIndex and at most equal to length");
    for (var h = e[o], d = o + 1; d < l; d++) e[d] < h && (h = e[d]);
    return h;
  }
  function rg(e) {
    var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
    if (Qn(e)) {
      if (e.length === 0) throw new TypeError("input must not be empty");
    } else throw new TypeError("input must be an array");
    var i;
    if (t.output !== void 0) {
      if (!Qn(t.output)) throw new TypeError("output option must be an array if specified");
      i = t.output;
    } else i = new Array(e.length);
    var o = ng(e), c = og(e);
    if (o === c) throw new RangeError("minimum and maximum input values are equal. Cannot rescale a constant array");
    var l = t.min, h = l === void 0 ? t.autoMinMax ? o : 0 : l, d = t.max, p = d === void 0 ? t.autoMinMax ? c : 1 : d;
    if (h >= p) throw new RangeError("min option must be smaller than max option");
    for (var g = (p - h) / (c - o), T = 0; T < e.length; T++) i[T] = (e[T] - o) * g + h;
    return i;
  }
  const sg = Object.freeze(Object.defineProperty({
    __proto__: null,
    default: rg
  }, Symbol.toStringTag, {
    value: "Module"
  })), ag = ad(sg);
  var xl;
  function cg() {
    var _ne_instances, e_fn, _e2;
    if (xl) return Ce;
    xl = 1, Object.defineProperty(Ce, "__esModule", {
      value: true
    });
    var e = ig, t = ag;
    const i = " ".repeat(2), o = " ".repeat(4);
    function c() {
      return l(this);
    }
    function l(f, r = {}) {
      const { maxRows: s = 15, maxColumns: n = 10, maxNumSize: a = 8, padMinus: u = "auto" } = r;
      return `${f.constructor.name} {
${i}[
${o}${h(f, s, n, a, u)}
${i}]
${i}rows: ${f.rows}
${i}columns: ${f.columns}
}`;
    }
    function h(f, r, s, n, a) {
      const { rows: u, columns: I } = f, E = Math.min(u, r), m = Math.min(I, s), O = [];
      if (a === "auto") {
        a = false;
        e: for (let b = 0; b < E; b++) for (let R = 0; R < m; R++) if (f.get(b, R) < 0) {
          a = true;
          break e;
        }
      }
      for (let b = 0; b < E; b++) {
        let R = [];
        for (let D = 0; D < m; D++) R.push(d(f.get(b, D), n, a));
        O.push(`${R.join(" ")}`);
      }
      return m !== I && (O[O.length - 1] += ` ... ${I - s} more columns`), E !== u && O.push(`... ${u - r} more rows`), O.join(`
${o}`);
    }
    function d(f, r, s) {
      return (f >= 0 && s ? ` ${p(f, r - 1)}` : p(f, r)).padEnd(r);
    }
    function p(f, r) {
      let s = f.toString();
      if (s.length <= r) return s;
      let n = f.toFixed(r);
      if (n.length > r && (n = f.toFixed(Math.max(0, r - (n.length - r)))), n.length <= r && !n.startsWith("0.000") && !n.startsWith("-0.000")) return n;
      let a = f.toExponential(r);
      return a.length > r && (a = f.toExponential(Math.max(0, r - (a.length - r)))), a.slice(0);
    }
    function g(f, r) {
      f.prototype.add = function(n) {
        return typeof n == "number" ? this.addS(n) : this.addM(n);
      }, f.prototype.addS = function(n) {
        for (let a = 0; a < this.rows; a++) for (let u = 0; u < this.columns; u++) this.set(a, u, this.get(a, u) + n);
        return this;
      }, f.prototype.addM = function(n) {
        if (n = r.checkMatrix(n), this.rows !== n.rows || this.columns !== n.columns) throw new RangeError("Matrices dimensions must be equal");
        for (let a = 0; a < this.rows; a++) for (let u = 0; u < this.columns; u++) this.set(a, u, this.get(a, u) + n.get(a, u));
        return this;
      }, f.add = function(n, a) {
        return new r(n).add(a);
      }, f.prototype.sub = function(n) {
        return typeof n == "number" ? this.subS(n) : this.subM(n);
      }, f.prototype.subS = function(n) {
        for (let a = 0; a < this.rows; a++) for (let u = 0; u < this.columns; u++) this.set(a, u, this.get(a, u) - n);
        return this;
      }, f.prototype.subM = function(n) {
        if (n = r.checkMatrix(n), this.rows !== n.rows || this.columns !== n.columns) throw new RangeError("Matrices dimensions must be equal");
        for (let a = 0; a < this.rows; a++) for (let u = 0; u < this.columns; u++) this.set(a, u, this.get(a, u) - n.get(a, u));
        return this;
      }, f.sub = function(n, a) {
        return new r(n).sub(a);
      }, f.prototype.subtract = f.prototype.sub, f.prototype.subtractS = f.prototype.subS, f.prototype.subtractM = f.prototype.subM, f.subtract = f.sub, f.prototype.mul = function(n) {
        return typeof n == "number" ? this.mulS(n) : this.mulM(n);
      }, f.prototype.mulS = function(n) {
        for (let a = 0; a < this.rows; a++) for (let u = 0; u < this.columns; u++) this.set(a, u, this.get(a, u) * n);
        return this;
      }, f.prototype.mulM = function(n) {
        if (n = r.checkMatrix(n), this.rows !== n.rows || this.columns !== n.columns) throw new RangeError("Matrices dimensions must be equal");
        for (let a = 0; a < this.rows; a++) for (let u = 0; u < this.columns; u++) this.set(a, u, this.get(a, u) * n.get(a, u));
        return this;
      }, f.mul = function(n, a) {
        return new r(n).mul(a);
      }, f.prototype.multiply = f.prototype.mul, f.prototype.multiplyS = f.prototype.mulS, f.prototype.multiplyM = f.prototype.mulM, f.multiply = f.mul, f.prototype.div = function(n) {
        return typeof n == "number" ? this.divS(n) : this.divM(n);
      }, f.prototype.divS = function(n) {
        for (let a = 0; a < this.rows; a++) for (let u = 0; u < this.columns; u++) this.set(a, u, this.get(a, u) / n);
        return this;
      }, f.prototype.divM = function(n) {
        if (n = r.checkMatrix(n), this.rows !== n.rows || this.columns !== n.columns) throw new RangeError("Matrices dimensions must be equal");
        for (let a = 0; a < this.rows; a++) for (let u = 0; u < this.columns; u++) this.set(a, u, this.get(a, u) / n.get(a, u));
        return this;
      }, f.div = function(n, a) {
        return new r(n).div(a);
      }, f.prototype.divide = f.prototype.div, f.prototype.divideS = f.prototype.divS, f.prototype.divideM = f.prototype.divM, f.divide = f.div, f.prototype.mod = function(n) {
        return typeof n == "number" ? this.modS(n) : this.modM(n);
      }, f.prototype.modS = function(n) {
        for (let a = 0; a < this.rows; a++) for (let u = 0; u < this.columns; u++) this.set(a, u, this.get(a, u) % n);
        return this;
      }, f.prototype.modM = function(n) {
        if (n = r.checkMatrix(n), this.rows !== n.rows || this.columns !== n.columns) throw new RangeError("Matrices dimensions must be equal");
        for (let a = 0; a < this.rows; a++) for (let u = 0; u < this.columns; u++) this.set(a, u, this.get(a, u) % n.get(a, u));
        return this;
      }, f.mod = function(n, a) {
        return new r(n).mod(a);
      }, f.prototype.modulus = f.prototype.mod, f.prototype.modulusS = f.prototype.modS, f.prototype.modulusM = f.prototype.modM, f.modulus = f.mod, f.prototype.and = function(n) {
        return typeof n == "number" ? this.andS(n) : this.andM(n);
      }, f.prototype.andS = function(n) {
        for (let a = 0; a < this.rows; a++) for (let u = 0; u < this.columns; u++) this.set(a, u, this.get(a, u) & n);
        return this;
      }, f.prototype.andM = function(n) {
        if (n = r.checkMatrix(n), this.rows !== n.rows || this.columns !== n.columns) throw new RangeError("Matrices dimensions must be equal");
        for (let a = 0; a < this.rows; a++) for (let u = 0; u < this.columns; u++) this.set(a, u, this.get(a, u) & n.get(a, u));
        return this;
      }, f.and = function(n, a) {
        return new r(n).and(a);
      }, f.prototype.or = function(n) {
        return typeof n == "number" ? this.orS(n) : this.orM(n);
      }, f.prototype.orS = function(n) {
        for (let a = 0; a < this.rows; a++) for (let u = 0; u < this.columns; u++) this.set(a, u, this.get(a, u) | n);
        return this;
      }, f.prototype.orM = function(n) {
        if (n = r.checkMatrix(n), this.rows !== n.rows || this.columns !== n.columns) throw new RangeError("Matrices dimensions must be equal");
        for (let a = 0; a < this.rows; a++) for (let u = 0; u < this.columns; u++) this.set(a, u, this.get(a, u) | n.get(a, u));
        return this;
      }, f.or = function(n, a) {
        return new r(n).or(a);
      }, f.prototype.xor = function(n) {
        return typeof n == "number" ? this.xorS(n) : this.xorM(n);
      }, f.prototype.xorS = function(n) {
        for (let a = 0; a < this.rows; a++) for (let u = 0; u < this.columns; u++) this.set(a, u, this.get(a, u) ^ n);
        return this;
      }, f.prototype.xorM = function(n) {
        if (n = r.checkMatrix(n), this.rows !== n.rows || this.columns !== n.columns) throw new RangeError("Matrices dimensions must be equal");
        for (let a = 0; a < this.rows; a++) for (let u = 0; u < this.columns; u++) this.set(a, u, this.get(a, u) ^ n.get(a, u));
        return this;
      }, f.xor = function(n, a) {
        return new r(n).xor(a);
      }, f.prototype.leftShift = function(n) {
        return typeof n == "number" ? this.leftShiftS(n) : this.leftShiftM(n);
      }, f.prototype.leftShiftS = function(n) {
        for (let a = 0; a < this.rows; a++) for (let u = 0; u < this.columns; u++) this.set(a, u, this.get(a, u) << n);
        return this;
      }, f.prototype.leftShiftM = function(n) {
        if (n = r.checkMatrix(n), this.rows !== n.rows || this.columns !== n.columns) throw new RangeError("Matrices dimensions must be equal");
        for (let a = 0; a < this.rows; a++) for (let u = 0; u < this.columns; u++) this.set(a, u, this.get(a, u) << n.get(a, u));
        return this;
      }, f.leftShift = function(n, a) {
        return new r(n).leftShift(a);
      }, f.prototype.signPropagatingRightShift = function(n) {
        return typeof n == "number" ? this.signPropagatingRightShiftS(n) : this.signPropagatingRightShiftM(n);
      }, f.prototype.signPropagatingRightShiftS = function(n) {
        for (let a = 0; a < this.rows; a++) for (let u = 0; u < this.columns; u++) this.set(a, u, this.get(a, u) >> n);
        return this;
      }, f.prototype.signPropagatingRightShiftM = function(n) {
        if (n = r.checkMatrix(n), this.rows !== n.rows || this.columns !== n.columns) throw new RangeError("Matrices dimensions must be equal");
        for (let a = 0; a < this.rows; a++) for (let u = 0; u < this.columns; u++) this.set(a, u, this.get(a, u) >> n.get(a, u));
        return this;
      }, f.signPropagatingRightShift = function(n, a) {
        return new r(n).signPropagatingRightShift(a);
      }, f.prototype.rightShift = function(n) {
        return typeof n == "number" ? this.rightShiftS(n) : this.rightShiftM(n);
      }, f.prototype.rightShiftS = function(n) {
        for (let a = 0; a < this.rows; a++) for (let u = 0; u < this.columns; u++) this.set(a, u, this.get(a, u) >>> n);
        return this;
      }, f.prototype.rightShiftM = function(n) {
        if (n = r.checkMatrix(n), this.rows !== n.rows || this.columns !== n.columns) throw new RangeError("Matrices dimensions must be equal");
        for (let a = 0; a < this.rows; a++) for (let u = 0; u < this.columns; u++) this.set(a, u, this.get(a, u) >>> n.get(a, u));
        return this;
      }, f.rightShift = function(n, a) {
        return new r(n).rightShift(a);
      }, f.prototype.zeroFillRightShift = f.prototype.rightShift, f.prototype.zeroFillRightShiftS = f.prototype.rightShiftS, f.prototype.zeroFillRightShiftM = f.prototype.rightShiftM, f.zeroFillRightShift = f.rightShift, f.prototype.not = function() {
        for (let n = 0; n < this.rows; n++) for (let a = 0; a < this.columns; a++) this.set(n, a, ~this.get(n, a));
        return this;
      }, f.not = function(n) {
        return new r(n).not();
      }, f.prototype.abs = function() {
        for (let n = 0; n < this.rows; n++) for (let a = 0; a < this.columns; a++) this.set(n, a, Math.abs(this.get(n, a)));
        return this;
      }, f.abs = function(n) {
        return new r(n).abs();
      }, f.prototype.acos = function() {
        for (let n = 0; n < this.rows; n++) for (let a = 0; a < this.columns; a++) this.set(n, a, Math.acos(this.get(n, a)));
        return this;
      }, f.acos = function(n) {
        return new r(n).acos();
      }, f.prototype.acosh = function() {
        for (let n = 0; n < this.rows; n++) for (let a = 0; a < this.columns; a++) this.set(n, a, Math.acosh(this.get(n, a)));
        return this;
      }, f.acosh = function(n) {
        return new r(n).acosh();
      }, f.prototype.asin = function() {
        for (let n = 0; n < this.rows; n++) for (let a = 0; a < this.columns; a++) this.set(n, a, Math.asin(this.get(n, a)));
        return this;
      }, f.asin = function(n) {
        return new r(n).asin();
      }, f.prototype.asinh = function() {
        for (let n = 0; n < this.rows; n++) for (let a = 0; a < this.columns; a++) this.set(n, a, Math.asinh(this.get(n, a)));
        return this;
      }, f.asinh = function(n) {
        return new r(n).asinh();
      }, f.prototype.atan = function() {
        for (let n = 0; n < this.rows; n++) for (let a = 0; a < this.columns; a++) this.set(n, a, Math.atan(this.get(n, a)));
        return this;
      }, f.atan = function(n) {
        return new r(n).atan();
      }, f.prototype.atanh = function() {
        for (let n = 0; n < this.rows; n++) for (let a = 0; a < this.columns; a++) this.set(n, a, Math.atanh(this.get(n, a)));
        return this;
      }, f.atanh = function(n) {
        return new r(n).atanh();
      }, f.prototype.cbrt = function() {
        for (let n = 0; n < this.rows; n++) for (let a = 0; a < this.columns; a++) this.set(n, a, Math.cbrt(this.get(n, a)));
        return this;
      }, f.cbrt = function(n) {
        return new r(n).cbrt();
      }, f.prototype.ceil = function() {
        for (let n = 0; n < this.rows; n++) for (let a = 0; a < this.columns; a++) this.set(n, a, Math.ceil(this.get(n, a)));
        return this;
      }, f.ceil = function(n) {
        return new r(n).ceil();
      }, f.prototype.clz32 = function() {
        for (let n = 0; n < this.rows; n++) for (let a = 0; a < this.columns; a++) this.set(n, a, Math.clz32(this.get(n, a)));
        return this;
      }, f.clz32 = function(n) {
        return new r(n).clz32();
      }, f.prototype.cos = function() {
        for (let n = 0; n < this.rows; n++) for (let a = 0; a < this.columns; a++) this.set(n, a, Math.cos(this.get(n, a)));
        return this;
      }, f.cos = function(n) {
        return new r(n).cos();
      }, f.prototype.cosh = function() {
        for (let n = 0; n < this.rows; n++) for (let a = 0; a < this.columns; a++) this.set(n, a, Math.cosh(this.get(n, a)));
        return this;
      }, f.cosh = function(n) {
        return new r(n).cosh();
      }, f.prototype.exp = function() {
        for (let n = 0; n < this.rows; n++) for (let a = 0; a < this.columns; a++) this.set(n, a, Math.exp(this.get(n, a)));
        return this;
      }, f.exp = function(n) {
        return new r(n).exp();
      }, f.prototype.expm1 = function() {
        for (let n = 0; n < this.rows; n++) for (let a = 0; a < this.columns; a++) this.set(n, a, Math.expm1(this.get(n, a)));
        return this;
      }, f.expm1 = function(n) {
        return new r(n).expm1();
      }, f.prototype.floor = function() {
        for (let n = 0; n < this.rows; n++) for (let a = 0; a < this.columns; a++) this.set(n, a, Math.floor(this.get(n, a)));
        return this;
      }, f.floor = function(n) {
        return new r(n).floor();
      }, f.prototype.fround = function() {
        for (let n = 0; n < this.rows; n++) for (let a = 0; a < this.columns; a++) this.set(n, a, Math.fround(this.get(n, a)));
        return this;
      }, f.fround = function(n) {
        return new r(n).fround();
      }, f.prototype.log = function() {
        for (let n = 0; n < this.rows; n++) for (let a = 0; a < this.columns; a++) this.set(n, a, Math.log(this.get(n, a)));
        return this;
      }, f.log = function(n) {
        return new r(n).log();
      }, f.prototype.log1p = function() {
        for (let n = 0; n < this.rows; n++) for (let a = 0; a < this.columns; a++) this.set(n, a, Math.log1p(this.get(n, a)));
        return this;
      }, f.log1p = function(n) {
        return new r(n).log1p();
      }, f.prototype.log10 = function() {
        for (let n = 0; n < this.rows; n++) for (let a = 0; a < this.columns; a++) this.set(n, a, Math.log10(this.get(n, a)));
        return this;
      }, f.log10 = function(n) {
        return new r(n).log10();
      }, f.prototype.log2 = function() {
        for (let n = 0; n < this.rows; n++) for (let a = 0; a < this.columns; a++) this.set(n, a, Math.log2(this.get(n, a)));
        return this;
      }, f.log2 = function(n) {
        return new r(n).log2();
      }, f.prototype.round = function() {
        for (let n = 0; n < this.rows; n++) for (let a = 0; a < this.columns; a++) this.set(n, a, Math.round(this.get(n, a)));
        return this;
      }, f.round = function(n) {
        return new r(n).round();
      }, f.prototype.sign = function() {
        for (let n = 0; n < this.rows; n++) for (let a = 0; a < this.columns; a++) this.set(n, a, Math.sign(this.get(n, a)));
        return this;
      }, f.sign = function(n) {
        return new r(n).sign();
      }, f.prototype.sin = function() {
        for (let n = 0; n < this.rows; n++) for (let a = 0; a < this.columns; a++) this.set(n, a, Math.sin(this.get(n, a)));
        return this;
      }, f.sin = function(n) {
        return new r(n).sin();
      }, f.prototype.sinh = function() {
        for (let n = 0; n < this.rows; n++) for (let a = 0; a < this.columns; a++) this.set(n, a, Math.sinh(this.get(n, a)));
        return this;
      }, f.sinh = function(n) {
        return new r(n).sinh();
      }, f.prototype.sqrt = function() {
        for (let n = 0; n < this.rows; n++) for (let a = 0; a < this.columns; a++) this.set(n, a, Math.sqrt(this.get(n, a)));
        return this;
      }, f.sqrt = function(n) {
        return new r(n).sqrt();
      }, f.prototype.tan = function() {
        for (let n = 0; n < this.rows; n++) for (let a = 0; a < this.columns; a++) this.set(n, a, Math.tan(this.get(n, a)));
        return this;
      }, f.tan = function(n) {
        return new r(n).tan();
      }, f.prototype.tanh = function() {
        for (let n = 0; n < this.rows; n++) for (let a = 0; a < this.columns; a++) this.set(n, a, Math.tanh(this.get(n, a)));
        return this;
      }, f.tanh = function(n) {
        return new r(n).tanh();
      }, f.prototype.trunc = function() {
        for (let n = 0; n < this.rows; n++) for (let a = 0; a < this.columns; a++) this.set(n, a, Math.trunc(this.get(n, a)));
        return this;
      }, f.trunc = function(n) {
        return new r(n).trunc();
      }, f.pow = function(n, a) {
        return new r(n).pow(a);
      }, f.prototype.pow = function(n) {
        return typeof n == "number" ? this.powS(n) : this.powM(n);
      }, f.prototype.powS = function(n) {
        for (let a = 0; a < this.rows; a++) for (let u = 0; u < this.columns; u++) this.set(a, u, this.get(a, u) ** n);
        return this;
      }, f.prototype.powM = function(n) {
        if (n = r.checkMatrix(n), this.rows !== n.rows || this.columns !== n.columns) throw new RangeError("Matrices dimensions must be equal");
        for (let a = 0; a < this.rows; a++) for (let u = 0; u < this.columns; u++) this.set(a, u, this.get(a, u) ** n.get(a, u));
        return this;
      };
    }
    function T(f, r, s) {
      let n = s ? f.rows : f.rows - 1;
      if (r < 0 || r > n) throw new RangeError("Row index out of range");
    }
    function N(f, r, s) {
      let n = s ? f.columns : f.columns - 1;
      if (r < 0 || r > n) throw new RangeError("Column index out of range");
    }
    function H(f, r) {
      if (r.to1DArray && (r = r.to1DArray()), r.length !== f.columns) throw new RangeError("vector size must be the same as the number of columns");
      return r;
    }
    function C(f, r) {
      if (r.to1DArray && (r = r.to1DArray()), r.length !== f.rows) throw new RangeError("vector size must be the same as the number of rows");
      return r;
    }
    function G(f, r) {
      if (!e.isAnyArray(r)) throw new TypeError("row indices must be an array");
      for (let s = 0; s < r.length; s++) if (r[s] < 0 || r[s] >= f.rows) throw new RangeError("row indices are out of range");
    }
    function F(f, r) {
      if (!e.isAnyArray(r)) throw new TypeError("column indices must be an array");
      for (let s = 0; s < r.length; s++) if (r[s] < 0 || r[s] >= f.columns) throw new RangeError("column indices are out of range");
    }
    function pe(f, r, s, n, a) {
      if (arguments.length !== 5) throw new RangeError("expected 4 arguments");
      if (k("startRow", r), k("endRow", s), k("startColumn", n), k("endColumn", a), r > s || n > a || r < 0 || r >= f.rows || s < 0 || s >= f.rows || n < 0 || n >= f.columns || a < 0 || a >= f.columns) throw new RangeError("Submatrix indices are out of range");
    }
    function re(f, r = 0) {
      let s = [];
      for (let n = 0; n < f; n++) s.push(r);
      return s;
    }
    function k(f, r) {
      if (typeof r != "number") throw new TypeError(`${f} must be a number`);
    }
    function J(f) {
      if (f.isEmpty()) throw new Error("Empty matrix has no elements to index");
    }
    function Y(f) {
      let r = re(f.rows);
      for (let s = 0; s < f.rows; ++s) for (let n = 0; n < f.columns; ++n) r[s] += f.get(s, n);
      return r;
    }
    function ue(f) {
      let r = re(f.columns);
      for (let s = 0; s < f.rows; ++s) for (let n = 0; n < f.columns; ++n) r[n] += f.get(s, n);
      return r;
    }
    function Te(f) {
      let r = 0;
      for (let s = 0; s < f.rows; s++) for (let n = 0; n < f.columns; n++) r += f.get(s, n);
      return r;
    }
    function oe(f) {
      let r = re(f.rows, 1);
      for (let s = 0; s < f.rows; ++s) for (let n = 0; n < f.columns; ++n) r[s] *= f.get(s, n);
      return r;
    }
    function he(f) {
      let r = re(f.columns, 1);
      for (let s = 0; s < f.rows; ++s) for (let n = 0; n < f.columns; ++n) r[n] *= f.get(s, n);
      return r;
    }
    function Q(f) {
      let r = 1;
      for (let s = 0; s < f.rows; s++) for (let n = 0; n < f.columns; n++) r *= f.get(s, n);
      return r;
    }
    function Ie(f, r, s) {
      const n = f.rows, a = f.columns, u = [];
      for (let I = 0; I < n; I++) {
        let E = 0, m = 0, O = 0;
        for (let b = 0; b < a; b++) O = f.get(I, b) - s[I], E += O, m += O * O;
        r ? u.push((m - E * E / a) / (a - 1)) : u.push((m - E * E / a) / a);
      }
      return u;
    }
    function Le(f, r, s) {
      const n = f.rows, a = f.columns, u = [];
      for (let I = 0; I < a; I++) {
        let E = 0, m = 0, O = 0;
        for (let b = 0; b < n; b++) O = f.get(b, I) - s[I], E += O, m += O * O;
        r ? u.push((m - E * E / n) / (n - 1)) : u.push((m - E * E / n) / n);
      }
      return u;
    }
    function de(f, r, s) {
      const n = f.rows, a = f.columns, u = n * a;
      let I = 0, E = 0, m = 0;
      for (let O = 0; O < n; O++) for (let b = 0; b < a; b++) m = f.get(O, b) - s, I += m, E += m * m;
      return r ? (E - I * I / u) / (u - 1) : (E - I * I / u) / u;
    }
    function xe(f, r) {
      for (let s = 0; s < f.rows; s++) for (let n = 0; n < f.columns; n++) f.set(s, n, f.get(s, n) - r[s]);
    }
    function ft(f, r) {
      for (let s = 0; s < f.rows; s++) for (let n = 0; n < f.columns; n++) f.set(s, n, f.get(s, n) - r[n]);
    }
    function Bt(f, r) {
      for (let s = 0; s < f.rows; s++) for (let n = 0; n < f.columns; n++) f.set(s, n, f.get(s, n) - r);
    }
    function Je(f) {
      const r = [];
      for (let s = 0; s < f.rows; s++) {
        let n = 0;
        for (let a = 0; a < f.columns; a++) n += f.get(s, a) ** 2 / (f.columns - 1);
        r.push(Math.sqrt(n));
      }
      return r;
    }
    function He(f, r) {
      for (let s = 0; s < f.rows; s++) for (let n = 0; n < f.columns; n++) f.set(s, n, f.get(s, n) / r[s]);
    }
    function Ke(f) {
      const r = [];
      for (let s = 0; s < f.columns; s++) {
        let n = 0;
        for (let a = 0; a < f.rows; a++) n += f.get(a, s) ** 2 / (f.rows - 1);
        r.push(Math.sqrt(n));
      }
      return r;
    }
    function bi(f, r) {
      for (let s = 0; s < f.rows; s++) for (let n = 0; n < f.columns; n++) f.set(s, n, f.get(s, n) / r[n]);
    }
    function Wo(f) {
      const r = f.size - 1;
      let s = 0;
      for (let n = 0; n < f.columns; n++) for (let a = 0; a < f.rows; a++) s += f.get(a, n) ** 2 / r;
      return Math.sqrt(s);
    }
    function Li(f, r) {
      for (let s = 0; s < f.rows; s++) for (let n = 0; n < f.columns; n++) f.set(s, n, f.get(s, n) / r);
    }
    class Re {
      static from1DArray(r, s, n) {
        if (r * s !== n.length) throw new RangeError("data length does not match given dimensions");
        let u = new ne(r, s);
        for (let I = 0; I < r; I++) for (let E = 0; E < s; E++) u.set(I, E, n[I * s + E]);
        return u;
      }
      static rowVector(r) {
        let s = new ne(1, r.length);
        for (let n = 0; n < r.length; n++) s.set(0, n, r[n]);
        return s;
      }
      static columnVector(r) {
        let s = new ne(r.length, 1);
        for (let n = 0; n < r.length; n++) s.set(n, 0, r[n]);
        return s;
      }
      static zeros(r, s) {
        return new ne(r, s);
      }
      static ones(r, s) {
        return new ne(r, s).fill(1);
      }
      static rand(r, s, n = {}) {
        if (typeof n != "object") throw new TypeError("options must be an object");
        const { random: a = Math.random } = n;
        let u = new ne(r, s);
        for (let I = 0; I < r; I++) for (let E = 0; E < s; E++) u.set(I, E, a());
        return u;
      }
      static randInt(r, s, n = {}) {
        if (typeof n != "object") throw new TypeError("options must be an object");
        const { min: a = 0, max: u = 1e3, random: I = Math.random } = n;
        if (!Number.isInteger(a)) throw new TypeError("min must be an integer");
        if (!Number.isInteger(u)) throw new TypeError("max must be an integer");
        if (a >= u) throw new RangeError("min must be smaller than max");
        let E = u - a, m = new ne(r, s);
        for (let O = 0; O < r; O++) for (let b = 0; b < s; b++) {
          let R = a + Math.round(I() * E);
          m.set(O, b, R);
        }
        return m;
      }
      static eye(r, s, n) {
        s === void 0 && (s = r), n === void 0 && (n = 1);
        let a = Math.min(r, s), u = this.zeros(r, s);
        for (let I = 0; I < a; I++) u.set(I, I, n);
        return u;
      }
      static diag(r, s, n) {
        let a = r.length;
        s === void 0 && (s = a), n === void 0 && (n = s);
        let u = Math.min(a, s, n), I = this.zeros(s, n);
        for (let E = 0; E < u; E++) I.set(E, E, r[E]);
        return I;
      }
      static min(r, s) {
        r = this.checkMatrix(r), s = this.checkMatrix(s);
        let n = r.rows, a = r.columns, u = new ne(n, a);
        for (let I = 0; I < n; I++) for (let E = 0; E < a; E++) u.set(I, E, Math.min(r.get(I, E), s.get(I, E)));
        return u;
      }
      static max(r, s) {
        r = this.checkMatrix(r), s = this.checkMatrix(s);
        let n = r.rows, a = r.columns, u = new this(n, a);
        for (let I = 0; I < n; I++) for (let E = 0; E < a; E++) u.set(I, E, Math.max(r.get(I, E), s.get(I, E)));
        return u;
      }
      static checkMatrix(r) {
        return Re.isMatrix(r) ? r : new ne(r);
      }
      static isMatrix(r) {
        return r != null && r.klass === "Matrix";
      }
      get size() {
        return this.rows * this.columns;
      }
      apply(r) {
        if (typeof r != "function") throw new TypeError("callback must be a function");
        for (let s = 0; s < this.rows; s++) for (let n = 0; n < this.columns; n++) r.call(this, s, n);
        return this;
      }
      to1DArray() {
        let r = [];
        for (let s = 0; s < this.rows; s++) for (let n = 0; n < this.columns; n++) r.push(this.get(s, n));
        return r;
      }
      to2DArray() {
        let r = [];
        for (let s = 0; s < this.rows; s++) {
          r.push([]);
          for (let n = 0; n < this.columns; n++) r[s].push(this.get(s, n));
        }
        return r;
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
          for (let r = 0; r < this.rows; r++) for (let s = 0; s <= r; s++) if (this.get(r, s) !== this.get(s, r)) return false;
          return true;
        }
        return false;
      }
      isDistance() {
        if (!this.isSymmetric()) return false;
        for (let r = 0; r < this.rows; r++) if (this.get(r, r) !== 0) return false;
        return true;
      }
      isEchelonForm() {
        let r = 0, s = 0, n = -1, a = true, u = false;
        for (; r < this.rows && a; ) {
          for (s = 0, u = false; s < this.columns && u === false; ) this.get(r, s) === 0 ? s++ : this.get(r, s) === 1 && s > n ? (u = true, n = s) : (a = false, u = true);
          r++;
        }
        return a;
      }
      isReducedEchelonForm() {
        let r = 0, s = 0, n = -1, a = true, u = false;
        for (; r < this.rows && a; ) {
          for (s = 0, u = false; s < this.columns && u === false; ) this.get(r, s) === 0 ? s++ : this.get(r, s) === 1 && s > n ? (u = true, n = s) : (a = false, u = true);
          for (let I = s + 1; I < this.rows; I++) this.get(r, I) !== 0 && (a = false);
          r++;
        }
        return a;
      }
      echelonForm() {
        let r = this.clone(), s = 0, n = 0;
        for (; s < r.rows && n < r.columns; ) {
          let a = s;
          for (let u = s; u < r.rows; u++) r.get(u, n) > r.get(a, n) && (a = u);
          if (r.get(a, n) === 0) n++;
          else {
            r.swapRows(s, a);
            let u = r.get(s, n);
            for (let I = n; I < r.columns; I++) r.set(s, I, r.get(s, I) / u);
            for (let I = s + 1; I < r.rows; I++) {
              let E = r.get(I, n) / r.get(s, n);
              r.set(I, n, 0);
              for (let m = n + 1; m < r.columns; m++) r.set(I, m, r.get(I, m) - r.get(s, m) * E);
            }
            s++, n++;
          }
        }
        return r;
      }
      reducedEchelonForm() {
        let r = this.echelonForm(), s = r.columns, n = r.rows, a = n - 1;
        for (; a >= 0; ) if (r.maxRow(a) === 0) a--;
        else {
          let u = 0, I = false;
          for (; u < n && I === false; ) r.get(a, u) === 1 ? I = true : u++;
          for (let E = 0; E < a; E++) {
            let m = r.get(E, u);
            for (let O = u; O < s; O++) {
              let b = r.get(E, O) - m * r.get(a, O);
              r.set(E, O, b);
            }
          }
          a--;
        }
        return r;
      }
      set() {
        throw new Error("set method is unimplemented");
      }
      get() {
        throw new Error("get method is unimplemented");
      }
      repeat(r = {}) {
        if (typeof r != "object") throw new TypeError("options must be an object");
        const { rows: s = 1, columns: n = 1 } = r;
        if (!Number.isInteger(s) || s <= 0) throw new TypeError("rows must be a positive integer");
        if (!Number.isInteger(n) || n <= 0) throw new TypeError("columns must be a positive integer");
        let a = new ne(this.rows * s, this.columns * n);
        for (let u = 0; u < s; u++) for (let I = 0; I < n; I++) a.setSubMatrix(this, this.rows * u, this.columns * I);
        return a;
      }
      fill(r) {
        for (let s = 0; s < this.rows; s++) for (let n = 0; n < this.columns; n++) this.set(s, n, r);
        return this;
      }
      neg() {
        return this.mulS(-1);
      }
      getRow(r) {
        T(this, r);
        let s = [];
        for (let n = 0; n < this.columns; n++) s.push(this.get(r, n));
        return s;
      }
      getRowVector(r) {
        return ne.rowVector(this.getRow(r));
      }
      setRow(r, s) {
        T(this, r), s = H(this, s);
        for (let n = 0; n < this.columns; n++) this.set(r, n, s[n]);
        return this;
      }
      swapRows(r, s) {
        T(this, r), T(this, s);
        for (let n = 0; n < this.columns; n++) {
          let a = this.get(r, n);
          this.set(r, n, this.get(s, n)), this.set(s, n, a);
        }
        return this;
      }
      getColumn(r) {
        N(this, r);
        let s = [];
        for (let n = 0; n < this.rows; n++) s.push(this.get(n, r));
        return s;
      }
      getColumnVector(r) {
        return ne.columnVector(this.getColumn(r));
      }
      setColumn(r, s) {
        N(this, r), s = C(this, s);
        for (let n = 0; n < this.rows; n++) this.set(n, r, s[n]);
        return this;
      }
      swapColumns(r, s) {
        N(this, r), N(this, s);
        for (let n = 0; n < this.rows; n++) {
          let a = this.get(n, r);
          this.set(n, r, this.get(n, s)), this.set(n, s, a);
        }
        return this;
      }
      addRowVector(r) {
        r = H(this, r);
        for (let s = 0; s < this.rows; s++) for (let n = 0; n < this.columns; n++) this.set(s, n, this.get(s, n) + r[n]);
        return this;
      }
      subRowVector(r) {
        r = H(this, r);
        for (let s = 0; s < this.rows; s++) for (let n = 0; n < this.columns; n++) this.set(s, n, this.get(s, n) - r[n]);
        return this;
      }
      mulRowVector(r) {
        r = H(this, r);
        for (let s = 0; s < this.rows; s++) for (let n = 0; n < this.columns; n++) this.set(s, n, this.get(s, n) * r[n]);
        return this;
      }
      divRowVector(r) {
        r = H(this, r);
        for (let s = 0; s < this.rows; s++) for (let n = 0; n < this.columns; n++) this.set(s, n, this.get(s, n) / r[n]);
        return this;
      }
      addColumnVector(r) {
        r = C(this, r);
        for (let s = 0; s < this.rows; s++) for (let n = 0; n < this.columns; n++) this.set(s, n, this.get(s, n) + r[s]);
        return this;
      }
      subColumnVector(r) {
        r = C(this, r);
        for (let s = 0; s < this.rows; s++) for (let n = 0; n < this.columns; n++) this.set(s, n, this.get(s, n) - r[s]);
        return this;
      }
      mulColumnVector(r) {
        r = C(this, r);
        for (let s = 0; s < this.rows; s++) for (let n = 0; n < this.columns; n++) this.set(s, n, this.get(s, n) * r[s]);
        return this;
      }
      divColumnVector(r) {
        r = C(this, r);
        for (let s = 0; s < this.rows; s++) for (let n = 0; n < this.columns; n++) this.set(s, n, this.get(s, n) / r[s]);
        return this;
      }
      mulRow(r, s) {
        T(this, r);
        for (let n = 0; n < this.columns; n++) this.set(r, n, this.get(r, n) * s);
        return this;
      }
      mulColumn(r, s) {
        N(this, r);
        for (let n = 0; n < this.rows; n++) this.set(n, r, this.get(n, r) * s);
        return this;
      }
      max(r) {
        if (this.isEmpty()) return NaN;
        switch (r) {
          case "row": {
            const s = new Array(this.rows).fill(Number.NEGATIVE_INFINITY);
            for (let n = 0; n < this.rows; n++) for (let a = 0; a < this.columns; a++) this.get(n, a) > s[n] && (s[n] = this.get(n, a));
            return s;
          }
          case "column": {
            const s = new Array(this.columns).fill(Number.NEGATIVE_INFINITY);
            for (let n = 0; n < this.rows; n++) for (let a = 0; a < this.columns; a++) this.get(n, a) > s[a] && (s[a] = this.get(n, a));
            return s;
          }
          case void 0: {
            let s = this.get(0, 0);
            for (let n = 0; n < this.rows; n++) for (let a = 0; a < this.columns; a++) this.get(n, a) > s && (s = this.get(n, a));
            return s;
          }
          default:
            throw new Error(`invalid option: ${r}`);
        }
      }
      maxIndex() {
        J(this);
        let r = this.get(0, 0), s = [
          0,
          0
        ];
        for (let n = 0; n < this.rows; n++) for (let a = 0; a < this.columns; a++) this.get(n, a) > r && (r = this.get(n, a), s[0] = n, s[1] = a);
        return s;
      }
      min(r) {
        if (this.isEmpty()) return NaN;
        switch (r) {
          case "row": {
            const s = new Array(this.rows).fill(Number.POSITIVE_INFINITY);
            for (let n = 0; n < this.rows; n++) for (let a = 0; a < this.columns; a++) this.get(n, a) < s[n] && (s[n] = this.get(n, a));
            return s;
          }
          case "column": {
            const s = new Array(this.columns).fill(Number.POSITIVE_INFINITY);
            for (let n = 0; n < this.rows; n++) for (let a = 0; a < this.columns; a++) this.get(n, a) < s[a] && (s[a] = this.get(n, a));
            return s;
          }
          case void 0: {
            let s = this.get(0, 0);
            for (let n = 0; n < this.rows; n++) for (let a = 0; a < this.columns; a++) this.get(n, a) < s && (s = this.get(n, a));
            return s;
          }
          default:
            throw new Error(`invalid option: ${r}`);
        }
      }
      minIndex() {
        J(this);
        let r = this.get(0, 0), s = [
          0,
          0
        ];
        for (let n = 0; n < this.rows; n++) for (let a = 0; a < this.columns; a++) this.get(n, a) < r && (r = this.get(n, a), s[0] = n, s[1] = a);
        return s;
      }
      maxRow(r) {
        if (T(this, r), this.isEmpty()) return NaN;
        let s = this.get(r, 0);
        for (let n = 1; n < this.columns; n++) this.get(r, n) > s && (s = this.get(r, n));
        return s;
      }
      maxRowIndex(r) {
        T(this, r), J(this);
        let s = this.get(r, 0), n = [
          r,
          0
        ];
        for (let a = 1; a < this.columns; a++) this.get(r, a) > s && (s = this.get(r, a), n[1] = a);
        return n;
      }
      minRow(r) {
        if (T(this, r), this.isEmpty()) return NaN;
        let s = this.get(r, 0);
        for (let n = 1; n < this.columns; n++) this.get(r, n) < s && (s = this.get(r, n));
        return s;
      }
      minRowIndex(r) {
        T(this, r), J(this);
        let s = this.get(r, 0), n = [
          r,
          0
        ];
        for (let a = 1; a < this.columns; a++) this.get(r, a) < s && (s = this.get(r, a), n[1] = a);
        return n;
      }
      maxColumn(r) {
        if (N(this, r), this.isEmpty()) return NaN;
        let s = this.get(0, r);
        for (let n = 1; n < this.rows; n++) this.get(n, r) > s && (s = this.get(n, r));
        return s;
      }
      maxColumnIndex(r) {
        N(this, r), J(this);
        let s = this.get(0, r), n = [
          0,
          r
        ];
        for (let a = 1; a < this.rows; a++) this.get(a, r) > s && (s = this.get(a, r), n[0] = a);
        return n;
      }
      minColumn(r) {
        if (N(this, r), this.isEmpty()) return NaN;
        let s = this.get(0, r);
        for (let n = 1; n < this.rows; n++) this.get(n, r) < s && (s = this.get(n, r));
        return s;
      }
      minColumnIndex(r) {
        N(this, r), J(this);
        let s = this.get(0, r), n = [
          0,
          r
        ];
        for (let a = 1; a < this.rows; a++) this.get(a, r) < s && (s = this.get(a, r), n[0] = a);
        return n;
      }
      diag() {
        let r = Math.min(this.rows, this.columns), s = [];
        for (let n = 0; n < r; n++) s.push(this.get(n, n));
        return s;
      }
      norm(r = "frobenius") {
        switch (r) {
          case "max":
            return this.max();
          case "frobenius":
            return Math.sqrt(this.dot(this));
          default:
            throw new RangeError(`unknown norm type: ${r}`);
        }
      }
      cumulativeSum() {
        let r = 0;
        for (let s = 0; s < this.rows; s++) for (let n = 0; n < this.columns; n++) r += this.get(s, n), this.set(s, n, r);
        return this;
      }
      dot(r) {
        Re.isMatrix(r) && (r = r.to1DArray());
        let s = this.to1DArray();
        if (s.length !== r.length) throw new RangeError("vectors do not have the same size");
        let n = 0;
        for (let a = 0; a < s.length; a++) n += s[a] * r[a];
        return n;
      }
      mmul(r) {
        r = ne.checkMatrix(r);
        let s = this.rows, n = this.columns, a = r.columns, u = new ne(s, a), I = new Float64Array(n);
        for (let E = 0; E < a; E++) {
          for (let m = 0; m < n; m++) I[m] = r.get(m, E);
          for (let m = 0; m < s; m++) {
            let O = 0;
            for (let b = 0; b < n; b++) O += this.get(m, b) * I[b];
            u.set(m, E, O);
          }
        }
        return u;
      }
      mpow(r) {
        if (!this.isSquare()) throw new RangeError("Matrix must be square");
        if (!Number.isInteger(r) || r < 0) throw new RangeError("Exponent must be a non-negative integer");
        let s = ne.eye(this.rows), n = this;
        for (let a = r; a >= 1; a /= 2) (a & 1) !== 0 && (s = s.mmul(n)), n = n.mmul(n);
        return s;
      }
      strassen2x2(r) {
        r = ne.checkMatrix(r);
        let s = new ne(2, 2);
        const n = this.get(0, 0), a = r.get(0, 0), u = this.get(0, 1), I = r.get(0, 1), E = this.get(1, 0), m = r.get(1, 0), O = this.get(1, 1), b = r.get(1, 1), R = (n + O) * (a + b), D = (E + O) * a, te = n * (I - b), v = O * (m - a), W = (n + u) * b, ce = (E - n) * (a + I), S = (u - O) * (m + b), ee = R + v - W + S, fe = te + W, Se = D + v, ye = R - D + te + ce;
        return s.set(0, 0, ee), s.set(0, 1, fe), s.set(1, 0, Se), s.set(1, 1, ye), s;
      }
      strassen3x3(r) {
        r = ne.checkMatrix(r);
        let s = new ne(3, 3);
        const n = this.get(0, 0), a = this.get(0, 1), u = this.get(0, 2), I = this.get(1, 0), E = this.get(1, 1), m = this.get(1, 2), O = this.get(2, 0), b = this.get(2, 1), R = this.get(2, 2), D = r.get(0, 0), te = r.get(0, 1), v = r.get(0, 2), W = r.get(1, 0), ce = r.get(1, 1), S = r.get(1, 2), ee = r.get(2, 0), fe = r.get(2, 1), Se = r.get(2, 2), ye = (n + a + u - I - E - b - R) * ce, it = (n - I) * (-te + ce), Oe = E * (-D + te + W - ce - S - ee + Se), Ae = (-n + I + E) * (D - te + ce), Xe = (I + E) * (-D + te), w = n * D, x = (-n + O + b) * (D - v + S), le = (-n + O) * (v - S), X = (O + b) * (-D + v), ot = (n + a + u - E - m - O - b) * S, $e = b * (-D + v + W - ce - S - ee + fe), et = (-u + b + R) * (ce + ee - fe), nt = (u - R) * (ce - fe), Ot = u * ee, ni = (b + R) * (-ee + fe), Et = (-u + E + m) * (S + ee - Se), Ti = (u - m) * (S - Se), vi = (E + m) * (-ee + Se), Me = a * W, gt = m * fe, jt = I * v, xt = O * te, mt = R * Se, yd = w + Ot + Me, bd = ye + Ae + Xe + w + et + Ot + ni, Ld = w + x + X + ot + Ot + Et + vi, Cd = it + Oe + Ae + w + Ot + Et + Ti, vd = it + Ae + Xe + w + gt, Hd = Ot + Et + Ti + vi + jt, Dd = w + x + le + $e + et + nt + Ot, Fd = et + nt + Ot + ni + xt, Md = w + x + le + X + mt;
        return s.set(0, 0, yd), s.set(0, 1, bd), s.set(0, 2, Ld), s.set(1, 0, Cd), s.set(1, 1, vd), s.set(1, 2, Hd), s.set(2, 0, Dd), s.set(2, 1, Fd), s.set(2, 2, Md), s;
      }
      mmulStrassen(r) {
        r = ne.checkMatrix(r);
        let s = this.clone(), n = s.rows, a = s.columns, u = r.rows, I = r.columns;
        a !== u && console.warn(`Multiplying ${n} x ${a} and ${u} x ${I} matrix: dimensions do not match.`);
        function E(R, D, te) {
          let v = R.rows, W = R.columns;
          if (v === D && W === te) return R;
          {
            let ce = Re.zeros(D, te);
            return ce = ce.setSubMatrix(R, 0, 0), ce;
          }
        }
        let m = Math.max(n, u), O = Math.max(a, I);
        s = E(s, m, O), r = E(r, m, O);
        function b(R, D, te, v) {
          if (te <= 512 || v <= 512) return R.mmul(D);
          te % 2 === 1 && v % 2 === 1 ? (R = E(R, te + 1, v + 1), D = E(D, te + 1, v + 1)) : te % 2 === 1 ? (R = E(R, te + 1, v), D = E(D, te + 1, v)) : v % 2 === 1 && (R = E(R, te, v + 1), D = E(D, te, v + 1));
          let W = parseInt(R.rows / 2, 10), ce = parseInt(R.columns / 2, 10), S = R.subMatrix(0, W - 1, 0, ce - 1), ee = D.subMatrix(0, W - 1, 0, ce - 1), fe = R.subMatrix(0, W - 1, ce, R.columns - 1), Se = D.subMatrix(0, W - 1, ce, D.columns - 1), ye = R.subMatrix(W, R.rows - 1, 0, ce - 1), it = D.subMatrix(W, D.rows - 1, 0, ce - 1), Oe = R.subMatrix(W, R.rows - 1, ce, R.columns - 1), Ae = D.subMatrix(W, D.rows - 1, ce, D.columns - 1), Xe = b(Re.add(S, Oe), Re.add(ee, Ae), W, ce), w = b(Re.add(ye, Oe), ee, W, ce), x = b(S, Re.sub(Se, Ae), W, ce), le = b(Oe, Re.sub(it, ee), W, ce), X = b(Re.add(S, fe), Ae, W, ce), ot = b(Re.sub(ye, S), Re.add(ee, Se), W, ce), $e = b(Re.sub(fe, Oe), Re.add(it, Ae), W, ce), et = Re.add(Xe, le);
          et.sub(X), et.add($e);
          let nt = Re.add(x, X), Ot = Re.add(w, le), ni = Re.sub(Xe, w);
          ni.add(x), ni.add(ot);
          let Et = Re.zeros(2 * et.rows, 2 * et.columns);
          return Et = Et.setSubMatrix(et, 0, 0), Et = Et.setSubMatrix(nt, et.rows, 0), Et = Et.setSubMatrix(Ot, 0, et.columns), Et = Et.setSubMatrix(ni, et.rows, et.columns), Et.subMatrix(0, te - 1, 0, v - 1);
        }
        return b(s, r, m, O);
      }
      scaleRows(r = {}) {
        if (typeof r != "object") throw new TypeError("options must be an object");
        const { min: s = 0, max: n = 1 } = r;
        if (!Number.isFinite(s)) throw new TypeError("min must be a number");
        if (!Number.isFinite(n)) throw new TypeError("max must be a number");
        if (s >= n) throw new RangeError("min must be smaller than max");
        let a = new ne(this.rows, this.columns);
        for (let u = 0; u < this.rows; u++) {
          const I = this.getRow(u);
          I.length > 0 && t(I, {
            min: s,
            max: n,
            output: I
          }), a.setRow(u, I);
        }
        return a;
      }
      scaleColumns(r = {}) {
        if (typeof r != "object") throw new TypeError("options must be an object");
        const { min: s = 0, max: n = 1 } = r;
        if (!Number.isFinite(s)) throw new TypeError("min must be a number");
        if (!Number.isFinite(n)) throw new TypeError("max must be a number");
        if (s >= n) throw new RangeError("min must be smaller than max");
        let a = new ne(this.rows, this.columns);
        for (let u = 0; u < this.columns; u++) {
          const I = this.getColumn(u);
          I.length && t(I, {
            min: s,
            max: n,
            output: I
          }), a.setColumn(u, I);
        }
        return a;
      }
      flipRows() {
        const r = Math.ceil(this.columns / 2);
        for (let s = 0; s < this.rows; s++) for (let n = 0; n < r; n++) {
          let a = this.get(s, n), u = this.get(s, this.columns - 1 - n);
          this.set(s, n, u), this.set(s, this.columns - 1 - n, a);
        }
        return this;
      }
      flipColumns() {
        const r = Math.ceil(this.rows / 2);
        for (let s = 0; s < this.columns; s++) for (let n = 0; n < r; n++) {
          let a = this.get(n, s), u = this.get(this.rows - 1 - n, s);
          this.set(n, s, u), this.set(this.rows - 1 - n, s, a);
        }
        return this;
      }
      kroneckerProduct(r) {
        r = ne.checkMatrix(r);
        let s = this.rows, n = this.columns, a = r.rows, u = r.columns, I = new ne(s * a, n * u);
        for (let E = 0; E < s; E++) for (let m = 0; m < n; m++) for (let O = 0; O < a; O++) for (let b = 0; b < u; b++) I.set(a * E + O, u * m + b, this.get(E, m) * r.get(O, b));
        return I;
      }
      kroneckerSum(r) {
        if (r = ne.checkMatrix(r), !this.isSquare() || !r.isSquare()) throw new Error("Kronecker Sum needs two Square Matrices");
        let s = this.rows, n = r.rows, a = this.kroneckerProduct(ne.eye(n, n)), u = ne.eye(s, s).kroneckerProduct(r);
        return a.add(u);
      }
      transpose() {
        let r = new ne(this.columns, this.rows);
        for (let s = 0; s < this.rows; s++) for (let n = 0; n < this.columns; n++) r.set(n, s, this.get(s, n));
        return r;
      }
      sortRows(r = In) {
        for (let s = 0; s < this.rows; s++) this.setRow(s, this.getRow(s).sort(r));
        return this;
      }
      sortColumns(r = In) {
        for (let s = 0; s < this.columns; s++) this.setColumn(s, this.getColumn(s).sort(r));
        return this;
      }
      subMatrix(r, s, n, a) {
        pe(this, r, s, n, a);
        let u = new ne(s - r + 1, a - n + 1);
        for (let I = r; I <= s; I++) for (let E = n; E <= a; E++) u.set(I - r, E - n, this.get(I, E));
        return u;
      }
      subMatrixRow(r, s, n) {
        if (s === void 0 && (s = 0), n === void 0 && (n = this.columns - 1), s > n || s < 0 || s >= this.columns || n < 0 || n >= this.columns) throw new RangeError("Argument out of range");
        let a = new ne(r.length, n - s + 1);
        for (let u = 0; u < r.length; u++) for (let I = s; I <= n; I++) {
          if (r[u] < 0 || r[u] >= this.rows) throw new RangeError(`Row index out of range: ${r[u]}`);
          a.set(u, I - s, this.get(r[u], I));
        }
        return a;
      }
      subMatrixColumn(r, s, n) {
        if (s === void 0 && (s = 0), n === void 0 && (n = this.rows - 1), s > n || s < 0 || s >= this.rows || n < 0 || n >= this.rows) throw new RangeError("Argument out of range");
        let a = new ne(n - s + 1, r.length);
        for (let u = 0; u < r.length; u++) for (let I = s; I <= n; I++) {
          if (r[u] < 0 || r[u] >= this.columns) throw new RangeError(`Column index out of range: ${r[u]}`);
          a.set(I - s, u, this.get(I, r[u]));
        }
        return a;
      }
      setSubMatrix(r, s, n) {
        if (r = ne.checkMatrix(r), r.isEmpty()) return this;
        let a = s + r.rows - 1, u = n + r.columns - 1;
        pe(this, s, a, n, u);
        for (let I = 0; I < r.rows; I++) for (let E = 0; E < r.columns; E++) this.set(s + I, n + E, r.get(I, E));
        return this;
      }
      selection(r, s) {
        G(this, r), F(this, s);
        let n = new ne(r.length, s.length);
        for (let a = 0; a < r.length; a++) {
          let u = r[a];
          for (let I = 0; I < s.length; I++) {
            let E = s[I];
            n.set(a, I, this.get(u, E));
          }
        }
        return n;
      }
      trace() {
        let r = Math.min(this.rows, this.columns), s = 0;
        for (let n = 0; n < r; n++) s += this.get(n, n);
        return s;
      }
      clone() {
        return this.constructor.copy(this, new ne(this.rows, this.columns));
      }
      static copy(r, s) {
        for (const [n, a, u] of r.entries()) s.set(n, a, u);
        return s;
      }
      sum(r) {
        switch (r) {
          case "row":
            return Y(this);
          case "column":
            return ue(this);
          case void 0:
            return Te(this);
          default:
            throw new Error(`invalid option: ${r}`);
        }
      }
      product(r) {
        switch (r) {
          case "row":
            return oe(this);
          case "column":
            return he(this);
          case void 0:
            return Q(this);
          default:
            throw new Error(`invalid option: ${r}`);
        }
      }
      mean(r) {
        const s = this.sum(r);
        switch (r) {
          case "row": {
            for (let n = 0; n < this.rows; n++) s[n] /= this.columns;
            return s;
          }
          case "column": {
            for (let n = 0; n < this.columns; n++) s[n] /= this.rows;
            return s;
          }
          case void 0:
            return s / this.size;
          default:
            throw new Error(`invalid option: ${r}`);
        }
      }
      variance(r, s = {}) {
        if (typeof r == "object" && (s = r, r = void 0), typeof s != "object") throw new TypeError("options must be an object");
        const { unbiased: n = true, mean: a = this.mean(r) } = s;
        if (typeof n != "boolean") throw new TypeError("unbiased must be a boolean");
        switch (r) {
          case "row": {
            if (!e.isAnyArray(a)) throw new TypeError("mean must be an array");
            return Ie(this, n, a);
          }
          case "column": {
            if (!e.isAnyArray(a)) throw new TypeError("mean must be an array");
            return Le(this, n, a);
          }
          case void 0: {
            if (typeof a != "number") throw new TypeError("mean must be a number");
            return de(this, n, a);
          }
          default:
            throw new Error(`invalid option: ${r}`);
        }
      }
      standardDeviation(r, s) {
        typeof r == "object" && (s = r, r = void 0);
        const n = this.variance(r, s);
        if (r === void 0) return Math.sqrt(n);
        for (let a = 0; a < n.length; a++) n[a] = Math.sqrt(n[a]);
        return n;
      }
      center(r, s = {}) {
        if (typeof r == "object" && (s = r, r = void 0), typeof s != "object") throw new TypeError("options must be an object");
        const { center: n = this.mean(r) } = s;
        switch (r) {
          case "row": {
            if (!e.isAnyArray(n)) throw new TypeError("center must be an array");
            return xe(this, n), this;
          }
          case "column": {
            if (!e.isAnyArray(n)) throw new TypeError("center must be an array");
            return ft(this, n), this;
          }
          case void 0: {
            if (typeof n != "number") throw new TypeError("center must be a number");
            return Bt(this, n), this;
          }
          default:
            throw new Error(`invalid option: ${r}`);
        }
      }
      scale(r, s = {}) {
        if (typeof r == "object" && (s = r, r = void 0), typeof s != "object") throw new TypeError("options must be an object");
        let n = s.scale;
        switch (r) {
          case "row": {
            if (n === void 0) n = Je(this);
            else if (!e.isAnyArray(n)) throw new TypeError("scale must be an array");
            return He(this, n), this;
          }
          case "column": {
            if (n === void 0) n = Ke(this);
            else if (!e.isAnyArray(n)) throw new TypeError("scale must be an array");
            return bi(this, n), this;
          }
          case void 0: {
            if (n === void 0) n = Wo(this);
            else if (typeof n != "number") throw new TypeError("scale must be a number");
            return Li(this, n), this;
          }
          default:
            throw new Error(`invalid option: ${r}`);
        }
      }
      toString(r) {
        return l(this, r);
      }
      [Symbol.iterator]() {
        return this.entries();
      }
      *entries() {
        for (let r = 0; r < this.rows; r++) for (let s = 0; s < this.columns; s++) yield [
          r,
          s,
          this.get(r, s)
        ];
      }
      *values() {
        for (let r = 0; r < this.rows; r++) for (let s = 0; s < this.columns; s++) yield this.get(r, s);
      }
    }
    Re.prototype.klass = "Matrix", typeof Symbol < "u" && (Re.prototype[/* @__PURE__ */ Symbol.for("nodejs.util.inspect.custom")] = c);
    function In(f, r) {
      return f - r;
    }
    function Ds(f) {
      return f.every((r) => typeof r == "number");
    }
    Re.random = Re.rand, Re.randomInt = Re.randInt, Re.diagonal = Re.diag, Re.prototype.diagonal = Re.prototype.diag, Re.identity = Re.eye, Re.prototype.negate = Re.prototype.neg, Re.prototype.tensorProduct = Re.prototype.kroneckerProduct;
    const _ne = class _ne extends Re {
      constructor(r, s) {
        super();
        __privateAdd(this, _ne_instances);
        __publicField(this, "data");
        if (_ne.isMatrix(r)) __privateMethod(this, _ne_instances, e_fn).call(this, r.rows, r.columns), _ne.copy(r, this);
        else if (Number.isInteger(r) && r >= 0) __privateMethod(this, _ne_instances, e_fn).call(this, r, s);
        else if (e.isAnyArray(r)) {
          const n = r;
          if (r = n.length, s = r ? n[0].length : 0, typeof s != "number") throw new TypeError("Data must be a 2D array with at least one element");
          this.data = [];
          for (let a = 0; a < r; a++) {
            if (n[a].length !== s) throw new RangeError("Inconsistent array dimensions");
            if (!Ds(n[a])) throw new TypeError("Input data contains non-numeric values");
            this.data.push(Float64Array.from(n[a]));
          }
          this.rows = r, this.columns = s;
        } else throw new TypeError("First argument must be a positive number or an array");
      }
      set(r, s, n) {
        return this.data[r][s] = n, this;
      }
      get(r, s) {
        return this.data[r][s];
      }
      removeRow(r) {
        return T(this, r), this.data.splice(r, 1), this.rows -= 1, this;
      }
      addRow(r, s) {
        return s === void 0 && (s = r, r = this.rows), T(this, r, true), s = Float64Array.from(H(this, s)), this.data.splice(r, 0, s), this.rows += 1, this;
      }
      removeColumn(r) {
        N(this, r);
        for (let s = 0; s < this.rows; s++) {
          const n = new Float64Array(this.columns - 1);
          for (let a = 0; a < r; a++) n[a] = this.data[s][a];
          for (let a = r + 1; a < this.columns; a++) n[a - 1] = this.data[s][a];
          this.data[s] = n;
        }
        return this.columns -= 1, this;
      }
      addColumn(r, s) {
        typeof s > "u" && (s = r, r = this.columns), N(this, r, true), s = C(this, s);
        for (let n = 0; n < this.rows; n++) {
          const a = new Float64Array(this.columns + 1);
          let u = 0;
          for (; u < r; u++) a[u] = this.data[n][u];
          for (a[u++] = s[n]; u < this.columns + 1; u++) a[u] = this.data[n][u - 1];
          this.data[n] = a;
        }
        return this.columns += 1, this;
      }
    };
    _ne_instances = new WeakSet();
    e_fn = function(r, s) {
      if (this.data = [], Number.isInteger(s) && s >= 0) for (let n = 0; n < r; n++) this.data.push(new Float64Array(s));
      else throw new TypeError("nColumns must be a positive integer");
      this.rows = r, this.columns = s;
    };
    let ne = _ne;
    g(Re, ne);
    const _Wt = class _Wt extends Re {
      constructor(r) {
        super();
        __privateAdd(this, _e2);
        if (ne.isMatrix(r)) {
          if (!r.isSymmetric()) throw new TypeError("not symmetric data");
          __privateSet(this, _e2, ne.copy(r, new ne(r.rows, r.rows)));
        } else if (Number.isInteger(r) && r >= 0) __privateSet(this, _e2, new ne(r, r));
        else if (__privateSet(this, _e2, new ne(r)), !this.isSymmetric()) throw new TypeError("not symmetric data");
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
      static isSymmetricMatrix(r) {
        return ne.isMatrix(r) && r.klassType === "SymmetricMatrix";
      }
      static zeros(r) {
        return new this(r);
      }
      static ones(r) {
        return new this(r).fill(1);
      }
      clone() {
        const r = new _Wt(this.diagonalSize);
        for (const [s, n, a] of this.upperRightEntries()) r.set(s, n, a);
        return r;
      }
      toMatrix() {
        return new ne(this);
      }
      get(r, s) {
        return __privateGet(this, _e2).get(r, s);
      }
      set(r, s, n) {
        return __privateGet(this, _e2).set(r, s, n), __privateGet(this, _e2).set(s, r, n), this;
      }
      removeCross(r) {
        return __privateGet(this, _e2).removeRow(r), __privateGet(this, _e2).removeColumn(r), this;
      }
      addCross(r, s) {
        s === void 0 && (s = r, r = this.diagonalSize);
        const n = s.slice();
        return n.splice(r, 1), __privateGet(this, _e2).addRow(r, n), __privateGet(this, _e2).addColumn(r, s), this;
      }
      applyMask(r) {
        if (r.length !== this.diagonalSize) throw new RangeError("Mask size do not match with matrix size");
        const s = [];
        for (const [n, a] of r.entries()) a || s.push(n);
        s.reverse();
        for (const n of s) this.removeCross(n);
        return this;
      }
      toCompact() {
        const { diagonalSize: r } = this, s = new Array(r * (r + 1) / 2);
        for (let n = 0, a = 0, u = 0; u < s.length; u++) s[u] = this.get(a, n), ++n >= r && (n = ++a);
        return s;
      }
      static fromCompact(r) {
        const s = r.length, n = (Math.sqrt(8 * s + 1) - 1) / 2;
        if (!Number.isInteger(n)) throw new TypeError(`This array is not a compact representation of a Symmetric Matrix, ${JSON.stringify(r)}`);
        const a = new _Wt(n);
        for (let u = 0, I = 0, E = 0; E < s; E++) a.set(u, I, r[E]), ++u >= n && (u = ++I);
        return a;
      }
      *upperRightEntries() {
        for (let r = 0, s = 0; r < this.diagonalSize; void 0) {
          const n = this.get(r, s);
          yield [
            r,
            s,
            n
          ], ++s >= this.diagonalSize && (s = ++r);
        }
      }
      *upperRightValues() {
        for (let r = 0, s = 0; r < this.diagonalSize; void 0) yield this.get(r, s), ++s >= this.diagonalSize && (s = ++r);
      }
    };
    _e2 = new WeakMap();
    let Wt = _Wt;
    Wt.prototype.klassType = "SymmetricMatrix";
    class Ci extends Wt {
      static isDistanceMatrix(r) {
        return Wt.isSymmetricMatrix(r) && r.klassSubType === "DistanceMatrix";
      }
      constructor(r) {
        if (super(r), !this.isDistance()) throw new TypeError("Provided arguments do no produce a distance matrix");
      }
      set(r, s, n) {
        return r === s && (n = 0), super.set(r, s, n);
      }
      addCross(r, s) {
        return s === void 0 && (s = r, r = this.diagonalSize), s = s.slice(), s[r] = 0, super.addCross(r, s);
      }
      toSymmetricMatrix() {
        return new Wt(this);
      }
      clone() {
        const r = new Ci(this.diagonalSize);
        for (const [s, n, a] of this.upperRightEntries()) s !== n && r.set(s, n, a);
        return r;
      }
      toCompact() {
        const { diagonalSize: r } = this, s = (r - 1) * r / 2, n = new Array(s);
        for (let a = 1, u = 0, I = 0; I < n.length; I++) n[I] = this.get(u, a), ++a >= r && (a = ++u + 1);
        return n;
      }
      static fromCompact(r) {
        const s = r.length;
        if (s === 0) return new this(0);
        const n = (Math.sqrt(8 * s + 1) + 1) / 2;
        if (!Number.isInteger(n)) throw new TypeError(`This array is not a compact representation of a DistanceMatrix, ${JSON.stringify(r)}`);
        const a = new this(n);
        for (let u = 1, I = 0, E = 0; E < s; E++) a.set(u, I, r[E]), ++u >= n && (u = ++I + 1);
        return a;
      }
    }
    Ci.prototype.klassSubType = "DistanceMatrix";
    class Yt extends Re {
      constructor(r, s, n) {
        super(), this.matrix = r, this.rows = s, this.columns = n;
      }
    }
    class rr extends Yt {
      constructor(r, s) {
        N(r, s), super(r, r.rows, 1), this.column = s;
      }
      set(r, s, n) {
        return this.matrix.set(r, this.column, n), this;
      }
      get(r) {
        return this.matrix.get(r, this.column);
      }
    }
    class mo extends Yt {
      constructor(r, s) {
        F(r, s), super(r, r.rows, s.length), this.columnIndices = s;
      }
      set(r, s, n) {
        return this.matrix.set(r, this.columnIndices[s], n), this;
      }
      get(r, s) {
        return this.matrix.get(r, this.columnIndices[s]);
      }
    }
    class Ic extends Yt {
      constructor(r) {
        super(r, r.rows, r.columns);
      }
      set(r, s, n) {
        return this.matrix.set(r, this.columns - s - 1, n), this;
      }
      get(r, s) {
        return this.matrix.get(r, this.columns - s - 1);
      }
    }
    class A extends Yt {
      constructor(r) {
        super(r, r.rows, r.columns);
      }
      set(r, s, n) {
        return this.matrix.set(this.rows - r - 1, s, n), this;
      }
      get(r, s) {
        return this.matrix.get(this.rows - r - 1, s);
      }
    }
    class y extends Yt {
      constructor(r, s) {
        T(r, s), super(r, 1, r.columns), this.row = s;
      }
      set(r, s, n) {
        return this.matrix.set(this.row, s, n), this;
      }
      get(r, s) {
        return this.matrix.get(this.row, s);
      }
    }
    class M extends Yt {
      constructor(r, s) {
        G(r, s), super(r, s.length, r.columns), this.rowIndices = s;
      }
      set(r, s, n) {
        return this.matrix.set(this.rowIndices[r], s, n), this;
      }
      get(r, s) {
        return this.matrix.get(this.rowIndices[r], s);
      }
    }
    class K extends Yt {
      constructor(r, s, n) {
        G(r, s), F(r, n), super(r, s.length, n.length), this.rowIndices = s, this.columnIndices = n;
      }
      set(r, s, n) {
        return this.matrix.set(this.rowIndices[r], this.columnIndices[s], n), this;
      }
      get(r, s) {
        return this.matrix.get(this.rowIndices[r], this.columnIndices[s]);
      }
    }
    class $ extends Yt {
      constructor(r, s, n, a, u) {
        pe(r, s, n, a, u), super(r, n - s + 1, u - a + 1), this.startRow = s, this.startColumn = a;
      }
      set(r, s, n) {
        return this.matrix.set(this.startRow + r, this.startColumn + s, n), this;
      }
      get(r, s) {
        return this.matrix.get(this.startRow + r, this.startColumn + s);
      }
    }
    class q extends Yt {
      constructor(r) {
        super(r, r.columns, r.rows);
      }
      set(r, s, n) {
        return this.matrix.set(s, r, n), this;
      }
      get(r, s) {
        return this.matrix.get(s, r);
      }
    }
    class se extends Re {
      constructor(r, s = {}) {
        const { rows: n = 1 } = s;
        if (r.length % n !== 0) throw new Error("the data length is not divisible by the number of rows");
        super(), this.rows = n, this.columns = r.length / n, this.data = r;
      }
      set(r, s, n) {
        let a = this._calculateIndex(r, s);
        return this.data[a] = n, this;
      }
      get(r, s) {
        let n = this._calculateIndex(r, s);
        return this.data[n];
      }
      _calculateIndex(r, s) {
        return r * this.columns + s;
      }
    }
    class Z extends Re {
      constructor(r) {
        super(), this.data = r, this.rows = r.length, this.columns = r[0].length;
      }
      set(r, s, n) {
        return this.data[r][s] = n, this;
      }
      get(r, s) {
        return this.data[r][s];
      }
    }
    function ie(f, r) {
      if (e.isAnyArray(f)) return f[0] && e.isAnyArray(f[0]) ? new Z(f) : new se(f, r);
      throw new Error("the argument is not an array");
    }
    class z {
      constructor(r) {
        r = Z.checkMatrix(r);
        let s = r.clone(), n = s.rows, a = s.columns, u = new Float64Array(n), I = 1, E, m, O, b, R, D, te, v, W;
        for (E = 0; E < n; E++) u[E] = E;
        for (v = new Float64Array(n), m = 0; m < a; m++) {
          for (E = 0; E < n; E++) v[E] = s.get(E, m);
          for (E = 0; E < n; E++) {
            for (W = Math.min(E, m), R = 0, O = 0; O < W; O++) R += s.get(E, O) * v[O];
            v[E] -= R, s.set(E, m, v[E]);
          }
          for (b = m, E = m + 1; E < n; E++) Math.abs(v[E]) > Math.abs(v[b]) && (b = E);
          if (b !== m) {
            for (O = 0; O < a; O++) D = s.get(b, O), s.set(b, O, s.get(m, O)), s.set(m, O, D);
            te = u[b], u[b] = u[m], u[m] = te, I = -I;
          }
          if (m < n && s.get(m, m) !== 0) for (E = m + 1; E < n; E++) s.set(E, m, s.get(E, m) / s.get(m, m));
        }
        this.LU = s, this.pivotVector = u, this.pivotSign = I;
      }
      isSingular() {
        let r = this.LU, s = r.columns;
        for (let n = 0; n < s; n++) if (r.get(n, n) === 0) return true;
        return false;
      }
      solve(r) {
        r = ne.checkMatrix(r);
        let s = this.LU;
        if (s.rows !== r.rows) throw new Error("Invalid matrix dimensions");
        if (this.isSingular()) throw new Error("LU matrix is singular");
        let a = r.columns, u = r.subMatrixRow(this.pivotVector, 0, a - 1), I = s.columns, E, m, O;
        for (O = 0; O < I; O++) for (E = O + 1; E < I; E++) for (m = 0; m < a; m++) u.set(E, m, u.get(E, m) - u.get(O, m) * s.get(E, O));
        for (O = I - 1; O >= 0; O--) {
          for (m = 0; m < a; m++) u.set(O, m, u.get(O, m) / s.get(O, O));
          for (E = 0; E < O; E++) for (m = 0; m < a; m++) u.set(E, m, u.get(E, m) - u.get(O, m) * s.get(E, O));
        }
        return u;
      }
      get determinant() {
        let r = this.LU;
        if (!r.isSquare()) throw new Error("Matrix must be square");
        let s = this.pivotSign, n = r.columns;
        for (let a = 0; a < n; a++) s *= r.get(a, a);
        return s;
      }
      get lowerTriangularMatrix() {
        let r = this.LU, s = r.rows, n = r.columns, a = new ne(s, n);
        for (let u = 0; u < s; u++) for (let I = 0; I < n; I++) u > I ? a.set(u, I, r.get(u, I)) : u === I ? a.set(u, I, 1) : a.set(u, I, 0);
        return a;
      }
      get upperTriangularMatrix() {
        let r = this.LU, s = r.rows, n = r.columns, a = new ne(s, n);
        for (let u = 0; u < s; u++) for (let I = 0; I < n; I++) u <= I ? a.set(u, I, r.get(u, I)) : a.set(u, I, 0);
        return a;
      }
      get pivotPermutationVector() {
        return Array.from(this.pivotVector);
      }
    }
    function Ee(f, r) {
      let s = 0;
      return Math.abs(f) > Math.abs(r) ? (s = r / f, Math.abs(f) * Math.sqrt(1 + s * s)) : r !== 0 ? (s = f / r, Math.abs(r) * Math.sqrt(1 + s * s)) : 0;
    }
    class ae {
      constructor(r) {
        r = Z.checkMatrix(r);
        let s = r.clone(), n = r.rows, a = r.columns, u = new Float64Array(a), I, E, m, O;
        for (m = 0; m < a; m++) {
          let b = 0;
          for (I = m; I < n; I++) b = Ee(b, s.get(I, m));
          if (b !== 0) {
            for (s.get(m, m) < 0 && (b = -b), I = m; I < n; I++) s.set(I, m, s.get(I, m) / b);
            for (s.set(m, m, s.get(m, m) + 1), E = m + 1; E < a; E++) {
              for (O = 0, I = m; I < n; I++) O += s.get(I, m) * s.get(I, E);
              for (O = -O / s.get(m, m), I = m; I < n; I++) s.set(I, E, s.get(I, E) + O * s.get(I, m));
            }
          }
          u[m] = -b;
        }
        this.QR = s, this.Rdiag = u;
      }
      solve(r) {
        r = ne.checkMatrix(r);
        let s = this.QR, n = s.rows;
        if (r.rows !== n) throw new Error("Matrix row dimensions must agree");
        if (!this.isFullRank()) throw new Error("Matrix is rank deficient");
        let a = r.columns, u = r.clone(), I = s.columns, E, m, O, b;
        for (O = 0; O < I; O++) for (m = 0; m < a; m++) {
          for (b = 0, E = O; E < n; E++) b += s.get(E, O) * u.get(E, m);
          for (b = -b / s.get(O, O), E = O; E < n; E++) u.set(E, m, u.get(E, m) + b * s.get(E, O));
        }
        for (O = I - 1; O >= 0; O--) {
          for (m = 0; m < a; m++) u.set(O, m, u.get(O, m) / this.Rdiag[O]);
          for (E = 0; E < O; E++) for (m = 0; m < a; m++) u.set(E, m, u.get(E, m) - u.get(O, m) * s.get(E, O));
        }
        return u.subMatrix(0, I - 1, 0, a - 1);
      }
      isFullRank() {
        let r = this.QR.columns;
        for (let s = 0; s < r; s++) if (this.Rdiag[s] === 0) return false;
        return true;
      }
      get upperTriangularMatrix() {
        let r = this.QR, s = r.columns, n = new ne(s, s), a, u;
        for (a = 0; a < s; a++) for (u = 0; u < s; u++) a < u ? n.set(a, u, r.get(a, u)) : a === u ? n.set(a, u, this.Rdiag[a]) : n.set(a, u, 0);
        return n;
      }
      get orthogonalMatrix() {
        let r = this.QR, s = r.rows, n = r.columns, a = new ne(s, n), u, I, E, m;
        for (E = n - 1; E >= 0; E--) {
          for (u = 0; u < s; u++) a.set(u, E, 0);
          for (a.set(E, E, 1), I = E; I < n; I++) if (r.get(E, E) !== 0) {
            for (m = 0, u = E; u < s; u++) m += r.get(u, E) * a.get(u, I);
            for (m = -m / r.get(E, E), u = E; u < s; u++) a.set(u, I, a.get(u, I) + m * r.get(u, E));
          }
        }
        return a;
      }
    }
    class me {
      constructor(r, s = {}) {
        if (r = Z.checkMatrix(r), r.isEmpty()) throw new Error("Matrix must be non-empty");
        let n = r.rows, a = r.columns;
        const { computeLeftSingularVectors: u = true, computeRightSingularVectors: I = true, autoTranspose: E = false } = s;
        let m = !!u, O = !!I, b = false, R;
        if (n < a) if (!E) R = r.clone(), console.warn("Computing SVD on a matrix with more columns than rows. Consider enabling autoTranspose");
        else {
          R = r.transpose(), n = R.rows, a = R.columns, b = true;
          let w = m;
          m = O, O = w;
        }
        else R = r.clone();
        let D = Math.min(n, a), te = Math.min(n + 1, a), v = new Float64Array(te), W = new ne(n, D), ce = new ne(a, a), S = new Float64Array(a), ee = new Float64Array(n), fe = new Float64Array(te);
        for (let w = 0; w < te; w++) fe[w] = w;
        let Se = Math.min(n - 1, a), ye = Math.max(0, Math.min(a - 2, n)), it = Math.max(Se, ye);
        for (let w = 0; w < it; w++) {
          if (w < Se) {
            v[w] = 0;
            for (let x = w; x < n; x++) v[w] = Ee(v[w], R.get(x, w));
            if (v[w] !== 0) {
              R.get(w, w) < 0 && (v[w] = -v[w]);
              for (let x = w; x < n; x++) R.set(x, w, R.get(x, w) / v[w]);
              R.set(w, w, R.get(w, w) + 1);
            }
            v[w] = -v[w];
          }
          for (let x = w + 1; x < a; x++) {
            if (w < Se && v[w] !== 0) {
              let le = 0;
              for (let X = w; X < n; X++) le += R.get(X, w) * R.get(X, x);
              le = -le / R.get(w, w);
              for (let X = w; X < n; X++) R.set(X, x, R.get(X, x) + le * R.get(X, w));
            }
            S[x] = R.get(w, x);
          }
          if (m && w < Se) for (let x = w; x < n; x++) W.set(x, w, R.get(x, w));
          if (w < ye) {
            S[w] = 0;
            for (let x = w + 1; x < a; x++) S[w] = Ee(S[w], S[x]);
            if (S[w] !== 0) {
              S[w + 1] < 0 && (S[w] = 0 - S[w]);
              for (let x = w + 1; x < a; x++) S[x] /= S[w];
              S[w + 1] += 1;
            }
            if (S[w] = -S[w], w + 1 < n && S[w] !== 0) {
              for (let x = w + 1; x < n; x++) ee[x] = 0;
              for (let x = w + 1; x < n; x++) for (let le = w + 1; le < a; le++) ee[x] += S[le] * R.get(x, le);
              for (let x = w + 1; x < a; x++) {
                let le = -S[x] / S[w + 1];
                for (let X = w + 1; X < n; X++) R.set(X, x, R.get(X, x) + le * ee[X]);
              }
            }
            if (O) for (let x = w + 1; x < a; x++) ce.set(x, w, S[x]);
          }
        }
        let Oe = Math.min(a, n + 1);
        if (Se < a && (v[Se] = R.get(Se, Se)), n < Oe && (v[Oe - 1] = 0), ye + 1 < Oe && (S[ye] = R.get(ye, Oe - 1)), S[Oe - 1] = 0, m) {
          for (let w = Se; w < D; w++) {
            for (let x = 0; x < n; x++) W.set(x, w, 0);
            W.set(w, w, 1);
          }
          for (let w = Se - 1; w >= 0; w--) if (v[w] !== 0) {
            for (let x = w + 1; x < D; x++) {
              let le = 0;
              for (let X = w; X < n; X++) le += W.get(X, w) * W.get(X, x);
              le = -le / W.get(w, w);
              for (let X = w; X < n; X++) W.set(X, x, W.get(X, x) + le * W.get(X, w));
            }
            for (let x = w; x < n; x++) W.set(x, w, -W.get(x, w));
            W.set(w, w, 1 + W.get(w, w));
            for (let x = 0; x < w - 1; x++) W.set(x, w, 0);
          } else {
            for (let x = 0; x < n; x++) W.set(x, w, 0);
            W.set(w, w, 1);
          }
        }
        if (O) for (let w = a - 1; w >= 0; w--) {
          if (w < ye && S[w] !== 0) for (let x = w + 1; x < a; x++) {
            let le = 0;
            for (let X = w + 1; X < a; X++) le += ce.get(X, w) * ce.get(X, x);
            le = -le / ce.get(w + 1, w);
            for (let X = w + 1; X < a; X++) ce.set(X, x, ce.get(X, x) + le * ce.get(X, w));
          }
          for (let x = 0; x < a; x++) ce.set(x, w, 0);
          ce.set(w, w, 1);
        }
        let Ae = Oe - 1, Xe = Number.EPSILON;
        for (; Oe > 0; ) {
          let w, x;
          for (w = Oe - 2; w >= -1 && w !== -1; w--) {
            const le = Number.MIN_VALUE + Xe * Math.abs(v[w] + Math.abs(v[w + 1]));
            if (Math.abs(S[w]) <= le || Number.isNaN(S[w])) {
              S[w] = 0;
              break;
            }
          }
          if (w === Oe - 2) x = 4;
          else {
            let le;
            for (le = Oe - 1; le >= w && le !== w; le--) {
              let X = (le !== Oe ? Math.abs(S[le]) : 0) + (le !== w + 1 ? Math.abs(S[le - 1]) : 0);
              if (Math.abs(v[le]) <= Xe * X) {
                v[le] = 0;
                break;
              }
            }
            le === w ? x = 3 : le === Oe - 1 ? x = 1 : (x = 2, w = le);
          }
          switch (w++, x) {
            case 1: {
              let le = S[Oe - 2];
              S[Oe - 2] = 0;
              for (let X = Oe - 2; X >= w; X--) {
                let ot = Ee(v[X], le), $e = v[X] / ot, et = le / ot;
                if (v[X] = ot, X !== w && (le = -et * S[X - 1], S[X - 1] = $e * S[X - 1]), O) for (let nt = 0; nt < a; nt++) ot = $e * ce.get(nt, X) + et * ce.get(nt, Oe - 1), ce.set(nt, Oe - 1, -et * ce.get(nt, X) + $e * ce.get(nt, Oe - 1)), ce.set(nt, X, ot);
              }
              break;
            }
            case 2: {
              let le = S[w - 1];
              S[w - 1] = 0;
              for (let X = w; X < Oe; X++) {
                let ot = Ee(v[X], le), $e = v[X] / ot, et = le / ot;
                if (v[X] = ot, le = -et * S[X], S[X] = $e * S[X], m) for (let nt = 0; nt < n; nt++) ot = $e * W.get(nt, X) + et * W.get(nt, w - 1), W.set(nt, w - 1, -et * W.get(nt, X) + $e * W.get(nt, w - 1)), W.set(nt, X, ot);
              }
              break;
            }
            case 3: {
              const le = Math.max(Math.abs(v[Oe - 1]), Math.abs(v[Oe - 2]), Math.abs(S[Oe - 2]), Math.abs(v[w]), Math.abs(S[w])), X = v[Oe - 1] / le, ot = v[Oe - 2] / le, $e = S[Oe - 2] / le, et = v[w] / le, nt = S[w] / le, Ot = ((ot + X) * (ot - X) + $e * $e) / 2, ni = X * $e * (X * $e);
              let Et = 0;
              (Ot !== 0 || ni !== 0) && (Ot < 0 ? Et = 0 - Math.sqrt(Ot * Ot + ni) : Et = Math.sqrt(Ot * Ot + ni), Et = ni / (Ot + Et));
              let Ti = (et + X) * (et - X) + Et, vi = et * nt;
              for (let Me = w; Me < Oe - 1; Me++) {
                let gt = Ee(Ti, vi);
                gt === 0 && (gt = Number.MIN_VALUE);
                let jt = Ti / gt, xt = vi / gt;
                if (Me !== w && (S[Me - 1] = gt), Ti = jt * v[Me] + xt * S[Me], S[Me] = jt * S[Me] - xt * v[Me], vi = xt * v[Me + 1], v[Me + 1] = jt * v[Me + 1], O) for (let mt = 0; mt < a; mt++) gt = jt * ce.get(mt, Me) + xt * ce.get(mt, Me + 1), ce.set(mt, Me + 1, -xt * ce.get(mt, Me) + jt * ce.get(mt, Me + 1)), ce.set(mt, Me, gt);
                if (gt = Ee(Ti, vi), gt === 0 && (gt = Number.MIN_VALUE), jt = Ti / gt, xt = vi / gt, v[Me] = gt, Ti = jt * S[Me] + xt * v[Me + 1], v[Me + 1] = -xt * S[Me] + jt * v[Me + 1], vi = xt * S[Me + 1], S[Me + 1] = jt * S[Me + 1], m && Me < n - 1) for (let mt = 0; mt < n; mt++) gt = jt * W.get(mt, Me) + xt * W.get(mt, Me + 1), W.set(mt, Me + 1, -xt * W.get(mt, Me) + jt * W.get(mt, Me + 1)), W.set(mt, Me, gt);
              }
              S[Oe - 2] = Ti;
              break;
            }
            case 4: {
              if (v[w] <= 0 && (v[w] = v[w] < 0 ? -v[w] : 0, O)) for (let le = 0; le <= Ae; le++) ce.set(le, w, -ce.get(le, w));
              for (; w < Ae && !(v[w] >= v[w + 1]); ) {
                let le = v[w];
                if (v[w] = v[w + 1], v[w + 1] = le, O && w < a - 1) for (let X = 0; X < a; X++) le = ce.get(X, w + 1), ce.set(X, w + 1, ce.get(X, w)), ce.set(X, w, le);
                if (m && w < n - 1) for (let X = 0; X < n; X++) le = W.get(X, w + 1), W.set(X, w + 1, W.get(X, w)), W.set(X, w, le);
                w++;
              }
              Oe--;
              break;
            }
          }
        }
        if (b) {
          let w = ce;
          ce = W, W = w;
        }
        this.m = n, this.n = a, this.s = v, this.U = W, this.V = ce;
      }
      solve(r) {
        let s = r, n = this.threshold, a = this.s.length, u = ne.zeros(a, a);
        for (let D = 0; D < a; D++) Math.abs(this.s[D]) <= n ? u.set(D, D, 0) : u.set(D, D, 1 / this.s[D]);
        let I = this.U, E = this.rightSingularVectors, m = E.mmul(u), O = E.rows, b = I.rows, R = ne.zeros(O, b);
        for (let D = 0; D < O; D++) for (let te = 0; te < b; te++) {
          let v = 0;
          for (let W = 0; W < a; W++) v += m.get(D, W) * I.get(te, W);
          R.set(D, te, v);
        }
        return R.mmul(s);
      }
      solveForDiagonal(r) {
        return this.solve(ne.diag(r));
      }
      inverse() {
        let r = this.V, s = this.threshold, n = r.rows, a = r.columns, u = new ne(n, this.s.length);
        for (let b = 0; b < n; b++) for (let R = 0; R < a; R++) Math.abs(this.s[R]) > s && u.set(b, R, r.get(b, R) / this.s[R]);
        let I = this.U, E = I.rows, m = I.columns, O = new ne(n, E);
        for (let b = 0; b < n; b++) for (let R = 0; R < E; R++) {
          let D = 0;
          for (let te = 0; te < m; te++) D += u.get(b, te) * I.get(R, te);
          O.set(b, R, D);
        }
        return O;
      }
      get condition() {
        return this.s[0] / this.s[Math.min(this.m, this.n) - 1];
      }
      get norm2() {
        return this.s[0];
      }
      get rank() {
        let r = Math.max(this.m, this.n) * this.s[0] * Number.EPSILON, s = 0, n = this.s;
        for (let a = 0, u = n.length; a < u; a++) n[a] > r && s++;
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
        return ne.diag(this.s);
      }
    }
    function Ne(f, r = false) {
      return f = Z.checkMatrix(f), r ? new me(f).inverse() : Fe(f, ne.eye(f.rows));
    }
    function Fe(f, r, s = false) {
      return f = Z.checkMatrix(f), r = Z.checkMatrix(r), s ? new me(f).solve(r) : f.isSquare() ? new z(f).solve(r) : new ae(f).solve(r);
    }
    function Be(f) {
      if (f = ne.checkMatrix(f), f.isSquare()) {
        if (f.columns === 0) return 1;
        let r, s, n, a;
        if (f.columns === 2) return r = f.get(0, 0), s = f.get(0, 1), n = f.get(1, 0), a = f.get(1, 1), r * a - s * n;
        if (f.columns === 3) {
          let u, I, E;
          return u = new K(f, [
            1,
            2
          ], [
            1,
            2
          ]), I = new K(f, [
            1,
            2
          ], [
            0,
            2
          ]), E = new K(f, [
            1,
            2
          ], [
            0,
            1
          ]), r = f.get(0, 0), s = f.get(0, 1), n = f.get(0, 2), r * Be(u) - s * Be(I) + n * Be(E);
        } else return new z(f).determinant;
      } else throw Error("determinant can only be calculated for a square matrix");
    }
    function Ye(f, r) {
      let s = [];
      for (let n = 0; n < f; n++) n !== r && s.push(n);
      return s;
    }
    function Nt(f, r, s, n = 1e-9, a = 1e-9) {
      if (f > a) return new Array(r.rows + 1).fill(0);
      {
        let u = r.addRow(s, [
          0
        ]);
        for (let I = 0; I < u.rows; I++) Math.abs(u.get(I, 0)) < n && u.set(I, 0, 0);
        return u.to1DArray();
      }
    }
    function St(f, r = {}) {
      const { thresholdValue: s = 1e-9, thresholdError: n = 1e-9 } = r;
      f = ne.checkMatrix(f);
      let a = f.rows, u = new ne(a, a);
      for (let I = 0; I < a; I++) {
        let E = ne.columnVector(f.getRow(I)), m = f.subMatrixRow(Ye(a, I)).transpose(), b = new me(m).solve(E), R = ne.sub(E, m.mmul(b)).abs().max();
        u.setRow(I, Nt(R, b, I, s, n));
      }
      return u;
    }
    function Jt(f, r = Number.EPSILON) {
      if (f = ne.checkMatrix(f), f.isEmpty()) return f.transpose();
      let s = new me(f, {
        autoTranspose: true
      }), n = s.leftSingularVectors, a = s.rightSingularVectors, u = s.diagonal;
      for (let I = 0; I < u.length; I++) Math.abs(u[I]) > r ? u[I] = 1 / u[I] : u[I] = 0;
      return a.mmul(ne.diag(u).mmul(n.transpose()));
    }
    function Zt(f, r = f, s = {}) {
      f = new ne(f);
      let n = false;
      if (typeof r == "object" && !ne.isMatrix(r) && !e.isAnyArray(r) ? (s = r, r = f, n = true) : r = new ne(r), f.rows !== r.rows) throw new TypeError("Both matrices must have the same number of rows");
      const { center: a = true } = s;
      a && (f = f.center("column"), n || (r = r.center("column")));
      const u = f.transpose().mmul(r);
      for (let I = 0; I < u.rows; I++) for (let E = 0; E < u.columns; E++) u.set(I, E, u.get(I, E) * (1 / (f.rows - 1)));
      return u;
    }
    function Oo(f, r = f, s = {}) {
      f = new ne(f);
      let n = false;
      if (typeof r == "object" && !ne.isMatrix(r) && !e.isAnyArray(r) ? (s = r, r = f, n = true) : r = new ne(r), f.rows !== r.rows) throw new TypeError("Both matrices must have the same number of rows");
      const { center: a = true, scale: u = true } = s;
      a && (f.center("column"), n || r.center("column")), u && (f.scale("column"), n || r.scale("column"));
      const I = f.standardDeviation("column", {
        unbiased: true
      }), E = n ? I : r.standardDeviation("column", {
        unbiased: true
      }), m = f.transpose().mmul(r);
      for (let O = 0; O < m.rows; O++) for (let b = 0; b < m.columns; b++) m.set(O, b, m.get(O, b) * (1 / (I[O] * E[b])) * (1 / (f.rows - 1)));
      return m;
    }
    class En {
      constructor(r, s = {}) {
        const { assumeSymmetric: n = false } = s;
        if (r = Z.checkMatrix(r), !r.isSquare()) throw new Error("Matrix is not a square matrix");
        if (r.isEmpty()) throw new Error("Matrix must be non-empty");
        let a = r.columns, u = new ne(a, a), I = new Float64Array(a), E = new Float64Array(a), m = r, O, b, R = false;
        if (n ? R = true : R = r.isSymmetric(), R) {
          for (O = 0; O < a; O++) for (b = 0; b < a; b++) u.set(O, b, m.get(O, b));
          Ht(a, E, I, u), Qt(a, E, I, u);
        } else {
          let D = new ne(a, a), te = new Float64Array(a);
          for (b = 0; b < a; b++) for (O = 0; O < a; O++) D.set(O, b, m.get(O, b));
          sr(a, D, te, u), ar(a, E, I, u, D);
        }
        this.n = a, this.e = E, this.d = I, this.V = u;
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
        let r = this.n, s = this.e, n = this.d, a = new ne(r, r), u, I;
        for (u = 0; u < r; u++) {
          for (I = 0; I < r; I++) a.set(u, I, 0);
          a.set(u, u, n[u]), s[u] > 0 ? a.set(u, u + 1, s[u]) : s[u] < 0 && a.set(u, u - 1, s[u]);
        }
        return a;
      }
    }
    function Ht(f, r, s, n) {
      let a, u, I, E, m, O, b, R;
      for (m = 0; m < f; m++) s[m] = n.get(f - 1, m);
      for (E = f - 1; E > 0; E--) {
        for (R = 0, I = 0, O = 0; O < E; O++) R = R + Math.abs(s[O]);
        if (R === 0) for (r[E] = s[E - 1], m = 0; m < E; m++) s[m] = n.get(E - 1, m), n.set(E, m, 0), n.set(m, E, 0);
        else {
          for (O = 0; O < E; O++) s[O] /= R, I += s[O] * s[O];
          for (a = s[E - 1], u = Math.sqrt(I), a > 0 && (u = -u), r[E] = R * u, I = I - a * u, s[E - 1] = a - u, m = 0; m < E; m++) r[m] = 0;
          for (m = 0; m < E; m++) {
            for (a = s[m], n.set(m, E, a), u = r[m] + n.get(m, m) * a, O = m + 1; O <= E - 1; O++) u += n.get(O, m) * s[O], r[O] += n.get(O, m) * a;
            r[m] = u;
          }
          for (a = 0, m = 0; m < E; m++) r[m] /= I, a += r[m] * s[m];
          for (b = a / (I + I), m = 0; m < E; m++) r[m] -= b * s[m];
          for (m = 0; m < E; m++) {
            for (a = s[m], u = r[m], O = m; O <= E - 1; O++) n.set(O, m, n.get(O, m) - (a * r[O] + u * s[O]));
            s[m] = n.get(E - 1, m), n.set(E, m, 0);
          }
        }
        s[E] = I;
      }
      for (E = 0; E < f - 1; E++) {
        if (n.set(f - 1, E, n.get(E, E)), n.set(E, E, 1), I = s[E + 1], I !== 0) {
          for (O = 0; O <= E; O++) s[O] = n.get(O, E + 1) / I;
          for (m = 0; m <= E; m++) {
            for (u = 0, O = 0; O <= E; O++) u += n.get(O, E + 1) * n.get(O, m);
            for (O = 0; O <= E; O++) n.set(O, m, n.get(O, m) - u * s[O]);
          }
        }
        for (O = 0; O <= E; O++) n.set(O, E + 1, 0);
      }
      for (m = 0; m < f; m++) s[m] = n.get(f - 1, m), n.set(f - 1, m, 0);
      n.set(f - 1, f - 1, 1), r[0] = 0;
    }
    function Qt(f, r, s, n) {
      let a, u, I, E, m, O, b, R, D, te, v, W, ce, S, ee, fe;
      for (I = 1; I < f; I++) r[I - 1] = r[I];
      r[f - 1] = 0;
      let Se = 0, ye = 0, it = Number.EPSILON;
      for (O = 0; O < f; O++) {
        for (ye = Math.max(ye, Math.abs(s[O]) + Math.abs(r[O])), b = O; b < f && !(Math.abs(r[b]) <= it * ye); ) b++;
        if (b > O) do {
          for (a = s[O], R = (s[O + 1] - a) / (2 * r[O]), D = Ee(R, 1), R < 0 && (D = -D), s[O] = r[O] / (R + D), s[O + 1] = r[O] * (R + D), te = s[O + 1], u = a - s[O], I = O + 2; I < f; I++) s[I] -= u;
          for (Se = Se + u, R = s[b], v = 1, W = v, ce = v, S = r[O + 1], ee = 0, fe = 0, I = b - 1; I >= O; I--) for (ce = W, W = v, fe = ee, a = v * r[I], u = v * R, D = Ee(R, r[I]), r[I + 1] = ee * D, ee = r[I] / D, v = R / D, R = v * s[I] - ee * a, s[I + 1] = u + ee * (v * a + ee * s[I]), m = 0; m < f; m++) u = n.get(m, I + 1), n.set(m, I + 1, ee * n.get(m, I) + v * u), n.set(m, I, v * n.get(m, I) - ee * u);
          R = -ee * fe * ce * S * r[O] / te, r[O] = ee * R, s[O] = v * R;
        } while (Math.abs(r[O]) > it * ye);
        s[O] = s[O] + Se, r[O] = 0;
      }
      for (I = 0; I < f - 1; I++) {
        for (m = I, R = s[I], E = I + 1; E < f; E++) s[E] < R && (m = E, R = s[E]);
        if (m !== I) for (s[m] = s[I], s[I] = R, E = 0; E < f; E++) R = n.get(E, I), n.set(E, I, n.get(E, m)), n.set(E, m, R);
      }
    }
    function sr(f, r, s, n) {
      let a = 0, u = f - 1, I, E, m, O, b, R, D;
      for (R = a + 1; R <= u - 1; R++) {
        for (D = 0, O = R; O <= u; O++) D = D + Math.abs(r.get(O, R - 1));
        if (D !== 0) {
          for (m = 0, O = u; O >= R; O--) s[O] = r.get(O, R - 1) / D, m += s[O] * s[O];
          for (E = Math.sqrt(m), s[R] > 0 && (E = -E), m = m - s[R] * E, s[R] = s[R] - E, b = R; b < f; b++) {
            for (I = 0, O = u; O >= R; O--) I += s[O] * r.get(O, b);
            for (I = I / m, O = R; O <= u; O++) r.set(O, b, r.get(O, b) - I * s[O]);
          }
          for (O = 0; O <= u; O++) {
            for (I = 0, b = u; b >= R; b--) I += s[b] * r.get(O, b);
            for (I = I / m, b = R; b <= u; b++) r.set(O, b, r.get(O, b) - I * s[b]);
          }
          s[R] = D * s[R], r.set(R, R - 1, D * E);
        }
      }
      for (O = 0; O < f; O++) for (b = 0; b < f; b++) n.set(O, b, O === b ? 1 : 0);
      for (R = u - 1; R >= a + 1; R--) if (r.get(R, R - 1) !== 0) {
        for (O = R + 1; O <= u; O++) s[O] = r.get(O, R - 1);
        for (b = R; b <= u; b++) {
          for (E = 0, O = R; O <= u; O++) E += s[O] * n.get(O, b);
          for (E = E / s[R] / r.get(R, R - 1), O = R; O <= u; O++) n.set(O, b, n.get(O, b) + E * s[O]);
        }
      }
    }
    function ar(f, r, s, n, a) {
      let u = f - 1, I = 0, E = f - 1, m = Number.EPSILON, O = 0, b = 0, R = 0, D = 0, te = 0, v = 0, W = 0, ce = 0, S, ee, fe, Se, ye, it, Oe, Ae, Xe, w, x, le, X, ot, $e;
      for (S = 0; S < f; S++) for ((S < I || S > E) && (s[S] = a.get(S, S), r[S] = 0), ee = Math.max(S - 1, 0); ee < f; ee++) b = b + Math.abs(a.get(S, ee));
      for (; u >= I; ) {
        for (Se = u; Se > I && (v = Math.abs(a.get(Se - 1, Se - 1)) + Math.abs(a.get(Se, Se)), v === 0 && (v = b), !(Math.abs(a.get(Se, Se - 1)) < m * v)); ) Se--;
        if (Se === u) a.set(u, u, a.get(u, u) + O), s[u] = a.get(u, u), r[u] = 0, u--, ce = 0;
        else if (Se === u - 1) {
          if (Oe = a.get(u, u - 1) * a.get(u - 1, u), R = (a.get(u - 1, u - 1) - a.get(u, u)) / 2, D = R * R + Oe, W = Math.sqrt(Math.abs(D)), a.set(u, u, a.get(u, u) + O), a.set(u - 1, u - 1, a.get(u - 1, u - 1) + O), Ae = a.get(u, u), D >= 0) {
            for (W = R >= 0 ? R + W : R - W, s[u - 1] = Ae + W, s[u] = s[u - 1], W !== 0 && (s[u] = Ae - Oe / W), r[u - 1] = 0, r[u] = 0, Ae = a.get(u, u - 1), v = Math.abs(Ae) + Math.abs(W), R = Ae / v, D = W / v, te = Math.sqrt(R * R + D * D), R = R / te, D = D / te, ee = u - 1; ee < f; ee++) W = a.get(u - 1, ee), a.set(u - 1, ee, D * W + R * a.get(u, ee)), a.set(u, ee, D * a.get(u, ee) - R * W);
            for (S = 0; S <= u; S++) W = a.get(S, u - 1), a.set(S, u - 1, D * W + R * a.get(S, u)), a.set(S, u, D * a.get(S, u) - R * W);
            for (S = I; S <= E; S++) W = n.get(S, u - 1), n.set(S, u - 1, D * W + R * n.get(S, u)), n.set(S, u, D * n.get(S, u) - R * W);
          } else s[u - 1] = Ae + R, s[u] = Ae + R, r[u - 1] = W, r[u] = -W;
          u = u - 2, ce = 0;
        } else {
          if (Ae = a.get(u, u), Xe = 0, Oe = 0, Se < u && (Xe = a.get(u - 1, u - 1), Oe = a.get(u, u - 1) * a.get(u - 1, u)), ce === 10) {
            for (O += Ae, S = I; S <= u; S++) a.set(S, S, a.get(S, S) - Ae);
            v = Math.abs(a.get(u, u - 1)) + Math.abs(a.get(u - 1, u - 2)), Ae = Xe = 0.75 * v, Oe = -0.4375 * v * v;
          }
          if (ce === 30 && (v = (Xe - Ae) / 2, v = v * v + Oe, v > 0)) {
            for (v = Math.sqrt(v), Xe < Ae && (v = -v), v = Ae - Oe / ((Xe - Ae) / 2 + v), S = I; S <= u; S++) a.set(S, S, a.get(S, S) - v);
            O += v, Ae = Xe = Oe = 0.964;
          }
          for (ce = ce + 1, ye = u - 2; ye >= Se && (W = a.get(ye, ye), te = Ae - W, v = Xe - W, R = (te * v - Oe) / a.get(ye + 1, ye) + a.get(ye, ye + 1), D = a.get(ye + 1, ye + 1) - W - te - v, te = a.get(ye + 2, ye + 1), v = Math.abs(R) + Math.abs(D) + Math.abs(te), R = R / v, D = D / v, te = te / v, !(ye === Se || Math.abs(a.get(ye, ye - 1)) * (Math.abs(D) + Math.abs(te)) < m * (Math.abs(R) * (Math.abs(a.get(ye - 1, ye - 1)) + Math.abs(W) + Math.abs(a.get(ye + 1, ye + 1)))))); ) ye--;
          for (S = ye + 2; S <= u; S++) a.set(S, S - 2, 0), S > ye + 2 && a.set(S, S - 3, 0);
          for (fe = ye; fe <= u - 1 && (ot = fe !== u - 1, fe !== ye && (R = a.get(fe, fe - 1), D = a.get(fe + 1, fe - 1), te = ot ? a.get(fe + 2, fe - 1) : 0, Ae = Math.abs(R) + Math.abs(D) + Math.abs(te), Ae !== 0 && (R = R / Ae, D = D / Ae, te = te / Ae)), Ae !== 0); fe++) if (v = Math.sqrt(R * R + D * D + te * te), R < 0 && (v = -v), v !== 0) {
            for (fe !== ye ? a.set(fe, fe - 1, -v * Ae) : Se !== ye && a.set(fe, fe - 1, -a.get(fe, fe - 1)), R = R + v, Ae = R / v, Xe = D / v, W = te / v, D = D / R, te = te / R, ee = fe; ee < f; ee++) R = a.get(fe, ee) + D * a.get(fe + 1, ee), ot && (R = R + te * a.get(fe + 2, ee), a.set(fe + 2, ee, a.get(fe + 2, ee) - R * W)), a.set(fe, ee, a.get(fe, ee) - R * Ae), a.set(fe + 1, ee, a.get(fe + 1, ee) - R * Xe);
            for (S = 0; S <= Math.min(u, fe + 3); S++) R = Ae * a.get(S, fe) + Xe * a.get(S, fe + 1), ot && (R = R + W * a.get(S, fe + 2), a.set(S, fe + 2, a.get(S, fe + 2) - R * te)), a.set(S, fe, a.get(S, fe) - R), a.set(S, fe + 1, a.get(S, fe + 1) - R * D);
            for (S = I; S <= E; S++) R = Ae * n.get(S, fe) + Xe * n.get(S, fe + 1), ot && (R = R + W * n.get(S, fe + 2), n.set(S, fe + 2, n.get(S, fe + 2) - R * te)), n.set(S, fe, n.get(S, fe) - R), n.set(S, fe + 1, n.get(S, fe + 1) - R * D);
          }
        }
      }
      if (b !== 0) {
        for (u = f - 1; u >= 0; u--) if (R = s[u], D = r[u], D === 0) for (Se = u, a.set(u, u, 1), S = u - 1; S >= 0; S--) {
          for (Oe = a.get(S, S) - R, te = 0, ee = Se; ee <= u; ee++) te = te + a.get(S, ee) * a.get(ee, u);
          if (r[S] < 0) W = Oe, v = te;
          else if (Se = S, r[S] === 0 ? a.set(S, u, Oe !== 0 ? -te / Oe : -te / (m * b)) : (Ae = a.get(S, S + 1), Xe = a.get(S + 1, S), D = (s[S] - R) * (s[S] - R) + r[S] * r[S], it = (Ae * v - W * te) / D, a.set(S, u, it), a.set(S + 1, u, Math.abs(Ae) > Math.abs(W) ? (-te - Oe * it) / Ae : (-v - Xe * it) / W)), it = Math.abs(a.get(S, u)), m * it * it > 1) for (ee = S; ee <= u; ee++) a.set(ee, u, a.get(ee, u) / it);
        }
        else if (D < 0) for (Se = u - 1, Math.abs(a.get(u, u - 1)) > Math.abs(a.get(u - 1, u)) ? (a.set(u - 1, u - 1, D / a.get(u, u - 1)), a.set(u - 1, u, -(a.get(u, u) - R) / a.get(u, u - 1))) : ($e = cr(0, -a.get(u - 1, u), a.get(u - 1, u - 1) - R, D), a.set(u - 1, u - 1, $e[0]), a.set(u - 1, u, $e[1])), a.set(u, u - 1, 0), a.set(u, u, 1), S = u - 2; S >= 0; S--) {
          for (w = 0, x = 0, ee = Se; ee <= u; ee++) w = w + a.get(S, ee) * a.get(ee, u - 1), x = x + a.get(S, ee) * a.get(ee, u);
          if (Oe = a.get(S, S) - R, r[S] < 0) W = Oe, te = w, v = x;
          else if (Se = S, r[S] === 0 ? ($e = cr(-w, -x, Oe, D), a.set(S, u - 1, $e[0]), a.set(S, u, $e[1])) : (Ae = a.get(S, S + 1), Xe = a.get(S + 1, S), le = (s[S] - R) * (s[S] - R) + r[S] * r[S] - D * D, X = (s[S] - R) * 2 * D, le === 0 && X === 0 && (le = m * b * (Math.abs(Oe) + Math.abs(D) + Math.abs(Ae) + Math.abs(Xe) + Math.abs(W))), $e = cr(Ae * te - W * w + D * x, Ae * v - W * x - D * w, le, X), a.set(S, u - 1, $e[0]), a.set(S, u, $e[1]), Math.abs(Ae) > Math.abs(W) + Math.abs(D) ? (a.set(S + 1, u - 1, (-w - Oe * a.get(S, u - 1) + D * a.get(S, u)) / Ae), a.set(S + 1, u, (-x - Oe * a.get(S, u) - D * a.get(S, u - 1)) / Ae)) : ($e = cr(-te - Xe * a.get(S, u - 1), -v - Xe * a.get(S, u), W, D), a.set(S + 1, u - 1, $e[0]), a.set(S + 1, u, $e[1]))), it = Math.max(Math.abs(a.get(S, u - 1)), Math.abs(a.get(S, u))), m * it * it > 1) for (ee = S; ee <= u; ee++) a.set(ee, u - 1, a.get(ee, u - 1) / it), a.set(ee, u, a.get(ee, u) / it);
        }
        for (S = 0; S < f; S++) if (S < I || S > E) for (ee = S; ee < f; ee++) n.set(S, ee, a.get(S, ee));
        for (ee = f - 1; ee >= I; ee--) for (S = I; S <= E; S++) {
          for (W = 0, fe = I; fe <= Math.min(ee, E); fe++) W = W + n.get(S, fe) * a.get(fe, ee);
          n.set(S, ee, W);
        }
      }
    }
    function cr(f, r, s, n) {
      let a, u;
      return Math.abs(s) > Math.abs(n) ? (a = n / s, u = s + a * n, [
        (f + a * r) / u,
        (r - a * f) / u
      ]) : (a = s / n, u = n + a * s, [
        (a * f + r) / u,
        (a * r - f) / u
      ]);
    }
    class Ec {
      constructor(r) {
        if (r = Z.checkMatrix(r), !r.isSymmetric()) throw new Error("Matrix is not symmetric");
        let s = r, n = s.rows, a = new ne(n, n), u = true, I, E, m;
        for (E = 0; E < n; E++) {
          let O = 0;
          for (m = 0; m < E; m++) {
            let b = 0;
            for (I = 0; I < m; I++) b += a.get(m, I) * a.get(E, I);
            b = (s.get(E, m) - b) / a.get(m, m), a.set(E, m, b), O = O + b * b;
          }
          for (O = s.get(E, E) - O, u && (u = O > 0), a.set(E, E, Math.sqrt(Math.max(O, 0))), m = E + 1; m < n; m++) a.set(E, m, 0);
        }
        this.L = a, this.positiveDefinite = u;
      }
      isPositiveDefinite() {
        return this.positiveDefinite;
      }
      solve(r) {
        r = Z.checkMatrix(r);
        let s = this.L, n = s.rows;
        if (r.rows !== n) throw new Error("Matrix dimensions do not match");
        if (this.isPositiveDefinite() === false) throw new Error("Matrix is not positive definite");
        let a = r.columns, u = r.clone(), I, E, m;
        for (m = 0; m < n; m++) for (E = 0; E < a; E++) {
          for (I = 0; I < m; I++) u.set(m, E, u.get(m, E) - u.get(I, E) * s.get(m, I));
          u.set(m, E, u.get(m, E) / s.get(m, m));
        }
        for (m = n - 1; m >= 0; m--) for (E = 0; E < a; E++) {
          for (I = m + 1; I < n; I++) u.set(m, E, u.get(m, E) - u.get(I, E) * s.get(I, m));
          u.set(m, E, u.get(m, E) / s.get(m, m));
        }
        return u;
      }
      get lowerTriangularMatrix() {
        return this.L;
      }
    }
    class mc {
      constructor(r, s = {}) {
        r = Z.checkMatrix(r);
        let { Y: n } = s;
        const { scaleScores: a = false, maxIterations: u = 1e3, terminationCriteria: I = 1e-10 } = s;
        let E;
        if (n) {
          if (e.isAnyArray(n) && typeof n[0] == "number" ? n = ne.columnVector(n) : n = Z.checkMatrix(n), n.rows !== r.rows) throw new Error("Y should have the same number of rows as X");
          E = n.getColumnVector(0);
        } else E = r.getColumnVector(0);
        let m = 1, O, b, R, D;
        for (let te = 0; te < u && m > I; te++) R = r.transpose().mmul(E).div(E.transpose().mmul(E).get(0, 0)), R = R.div(R.norm()), O = r.mmul(R).div(R.transpose().mmul(R).get(0, 0)), te > 0 && (m = O.clone().sub(D).pow(2).sum()), D = O.clone(), n ? (b = n.transpose().mmul(O).div(O.transpose().mmul(O).get(0, 0)), b = b.div(b.norm()), E = n.mmul(b).div(b.transpose().mmul(b).get(0, 0))) : E = O;
        if (n) {
          let te = r.transpose().mmul(O).div(O.transpose().mmul(O).get(0, 0));
          te = te.div(te.norm());
          let v = r.clone().sub(O.clone().mmul(te.transpose())), W = E.transpose().mmul(O).div(O.transpose().mmul(O).get(0, 0)), ce = n.clone().sub(O.clone().mulS(W.get(0, 0)).mmul(b.transpose()));
          this.t = O, this.p = te.transpose(), this.w = R.transpose(), this.q = b, this.u = E, this.s = O.transpose().mmul(O), this.xResidual = v, this.yResidual = ce, this.betas = W;
        } else this.w = R.transpose(), this.s = O.transpose().mmul(O).sqrt(), a ? this.t = O.clone().div(this.s.get(0, 0)) : this.t = O, this.xResidual = r.sub(O.mmul(R.transpose()));
      }
    }
    return Ce.AbstractMatrix = Re, Ce.CHO = Ec, Ce.CholeskyDecomposition = Ec, Ce.DistanceMatrix = Ci, Ce.EVD = En, Ce.EigenvalueDecomposition = En, Ce.LU = z, Ce.LuDecomposition = z, Ce.Matrix = ne, Ce.MatrixColumnSelectionView = mo, Ce.MatrixColumnView = rr, Ce.MatrixFlipColumnView = Ic, Ce.MatrixFlipRowView = A, Ce.MatrixRowSelectionView = M, Ce.MatrixRowView = y, Ce.MatrixSelectionView = K, Ce.MatrixSubView = $, Ce.MatrixTransposeView = q, Ce.NIPALS = mc, Ce.Nipals = mc, Ce.QR = ae, Ce.QrDecomposition = ae, Ce.SVD = me, Ce.SingularValueDecomposition = me, Ce.SymmetricMatrix = Wt, Ce.WrapperMatrix1D = se, Ce.WrapperMatrix2D = Z, Ce.correlation = Oo, Ce.covariance = Zt, Ce.default = ne, Ce.determinant = Be, Ce.inverse = Ne, Ce.linearDependencies = St, Ce.pseudoInverse = Jt, Ce.solve = Fe, Ce.wrap = ie, Ce;
  }
  var dc = cg();
  const Vl = QO(dc), Ri = dc.Matrix;
  Vl.Matrix ? Vl.Matrix : dc.Matrix;
  const _Yn = class _Yn {
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
      this.boundHandleMotionEvent = this.handleMotionEvent.bind(this), this.boundHandleOrientationEvent = this.handleOrientationEvent.bind(this), this.matrixRz = Ri.zeros(3, 3), this.matrixRy = Ri.zeros(3, 3), this.matrixRx = Ri.zeros(3, 3), this.matrixR = Ri.zeros(3, 3), this.matrixRTemp = Ri.zeros(3, 3), this.vectorInput = Ri.zeros(3, 1), this.vectorOutput = Ri.zeros(3, 1), this.gravityENU = new Ri([
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
      if (this.initialized) return P(void 0);
      if (this.initPromise) return this.initPromise;
      this.initPromise = this.doInit(t);
      const i = await this.initPromise;
      return i.isErr() && (this.initPromise = null), i;
    }
    async doInit(t) {
      if (this.disposed) return L(new Ue("IMU provider has been disposed"));
      const i = await this.requestPermissionIfNeeded(t);
      return i.isErr() ? L(i.error) : await this.checkHardwareSupport() ? ("DeviceOrientationEvent" in window && window.addEventListener("deviceorientation", this.boundHandleOrientationEvent), this.initialized = true, P(void 0)) : L(new Ue("Device motion is not supported by this browser"));
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
            if (!await t("prompt", "permission.imu.required")) return L(new Ue("User declined to grant IMU permission"));
            if (await DeviceMotionEvent.requestPermission() !== "granted") return L(new Ue("IMU permission denied"));
          } else return i === "denied" ? L(new Ue("IMU permission denied")) : P(void 0);
        }
        return P(void 0);
      } catch (i) {
        return L(new Ue("Failed to request IMU permission", void 0, i));
      }
    }
    async checkHardwareSupport() {
      return !("DeviceOrientationEvent" in window) || !("DeviceMotionEvent" in window) ? false : new Promise((t) => {
        let i = false;
        const o = () => {
          window.removeEventListener("deviceorientation", h), window.removeEventListener("devicemotion", d);
        }, c = () => {
          i || (i = true, o(), t(true));
        }, l = () => {
          i || (i = true, o(), t(false));
        }, h = (p) => {
          (p.alpha !== null || p.beta !== null || p.gamma !== null) && c();
        }, d = (p) => {
          (p.acceleration || p.accelerationIncludingGravity || p.rotationRate) && c();
        };
        window.addEventListener("deviceorientation", h), window.addEventListener("devicemotion", d), setTimeout(l, 1e3);
      });
    }
    async startAcceleration(t = {}) {
      if (this.disposed) return L(new Ue("IMU provider has been disposed"));
      if (!this.initialized) {
        const i = await this.init();
        if (i.isErr()) return L(i.error);
      }
      if (this.isAccelerationActive) return P(void 0);
      this.normalizeAccelerationToENU = t.normalizeToENU ?? false, this.accelerationIntervalMs = t.frequency !== void 0 ? Math.floor(1e3 / t.frequency) : 0, this.accelerationPrevReading = null, this.accelerationAccumulatedX = 0, this.accelerationAccumulatedY = 0, this.accelerationAccumulatedZ = 0, this.accelerationAccumulatedTime = 0, this.accelerationLastEmitTime = 0, this.accelerationTimer !== null && (clearTimeout(this.accelerationTimer), this.accelerationTimer = null);
      try {
        return this.motionEventListenerCount === 0 && window.addEventListener("devicemotion", this.boundHandleMotionEvent, true), this.motionEventListenerCount++, this.isAccelerationActive = true, P(void 0);
      } catch (i) {
        return L(new Ue("Failed to start acceleration monitoring", void 0, i));
      }
    }
    async startGyroscope(t = {}) {
      if (this.disposed) return L(new Ue("IMU provider has been disposed"));
      if (!this.initialized) {
        const i = await this.init();
        if (i.isErr()) return L(i.error);
      }
      if (this.isGyroscopeActive) return P(void 0);
      this.normalizeGyroscopeToENU = t.normalizeToENU ?? false, this.gyroscopeIntervalMs = t.frequency !== void 0 ? Math.floor(1e3 / t.frequency) : 0, this.gyroscopePrevReading = null, this.gyroscopeAccumulatedX = 0, this.gyroscopeAccumulatedY = 0, this.gyroscopeAccumulatedZ = 0, this.gyroscopeAccumulatedTime = 0, this.gyroscopeLastEmitTime = 0, this.gyroscopeTimer !== null && (clearTimeout(this.gyroscopeTimer), this.gyroscopeTimer = null);
      try {
        return this.motionEventListenerCount === 0 && window.addEventListener("devicemotion", this.boundHandleMotionEvent, true), this.motionEventListenerCount++, this.isGyroscopeActive = true, P(void 0);
      } catch (i) {
        return L(new Ue("Failed to start gyroscope monitoring", void 0, i));
      }
    }
    stopAcceleration() {
      if (!this.isAccelerationActive) return P(void 0);
      try {
        return this.motionEventListenerCount--, this.isAccelerationActive = false, this.lastAccelerationReading = null, this.normalizeAccelerationToENU = false, this.accelerationIntervalMs = 0, this.accelerationPrevReading = null, this.accelerationAccumulatedX = 0, this.accelerationAccumulatedY = 0, this.accelerationAccumulatedZ = 0, this.accelerationAccumulatedTime = 0, this.accelerationLastEmitTime = 0, this.accelerationTimer !== null && (clearTimeout(this.accelerationTimer), this.accelerationTimer = null), this.motionEventListenerCount === 0 && window.removeEventListener("devicemotion", this.boundHandleMotionEvent, true), P(void 0);
      } catch (t) {
        return L(new Ue("Failed to stop acceleration monitoring", void 0, t));
      }
    }
    stopGyroscope() {
      if (!this.isGyroscopeActive) return P(void 0);
      try {
        return this.motionEventListenerCount--, this.isGyroscopeActive = false, this.lastGyroscopeReading = null, this.normalizeGyroscopeToENU = false, this.gyroscopeIntervalMs = 0, this.gyroscopePrevReading = null, this.gyroscopeAccumulatedX = 0, this.gyroscopeAccumulatedY = 0, this.gyroscopeAccumulatedZ = 0, this.gyroscopeAccumulatedTime = 0, this.gyroscopeLastEmitTime = 0, this.gyroscopeTimer !== null && (clearTimeout(this.gyroscopeTimer), this.gyroscopeTimer = null), this.motionEventListenerCount === 0 && window.removeEventListener("devicemotion", this.boundHandleMotionEvent, true), P(void 0);
      } catch (t) {
        return L(new Ue("Failed to stop gyroscope monitoring", void 0, t));
      }
    }
    async getAccelerationReading() {
      if (this.disposed) return L(new Ue("IMU provider has been disposed"));
      if (!this.initialized) {
        const t = await this.init();
        if (t.isErr()) return L(t.error);
      }
      return P(this.lastAccelerationReading);
    }
    async getGyroscopeReading() {
      if (this.disposed) return L(new Ue("IMU provider has been disposed"));
      if (!this.initialized) {
        const t = await this.init();
        if (t.isErr()) return L(t.error);
      }
      return P(this.lastGyroscopeReading);
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
      return this.accelerationListeners.delete(t), this.gyroscopeListeners.delete(t), P(void 0);
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
        const i = this.accelerationAccumulatedX / this.accelerationAccumulatedTime, o = this.accelerationAccumulatedY / this.accelerationAccumulatedTime, c = this.accelerationAccumulatedZ / this.accelerationAccumulatedTime;
        t = {
          x: i,
          y: o,
          z: c,
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
        const i = this.gyroscopeAccumulatedX / this.gyroscopeAccumulatedTime, o = this.gyroscopeAccumulatedY / this.gyroscopeAccumulatedTime, c = this.gyroscopeAccumulatedZ / this.gyroscopeAccumulatedTime;
        t = {
          x: i,
          y: o,
          z: c,
          timestamp: this.gyroscopePrevReading.timestamp
        };
      }
      this.lastGyroscopeReading = t, this.notifyListeners(this.gyroscopeListeners, t, "gyroscope"), this.gyroscopePrevReading = null, this.gyroscopeAccumulatedX = 0, this.gyroscopeAccumulatedY = 0, this.gyroscopeAccumulatedZ = 0, this.gyroscopeAccumulatedTime = 0, this.gyroscopeTimer !== null && (clearTimeout(this.gyroscopeTimer), this.gyroscopeTimer = null);
    }
    processAccelerationData(t, i) {
      let o = t.acceleration, c = false;
      if ((!o || o.x === null || o.y === null || o.z === null) && (o = t.accelerationIncludingGravity, c = true), !o || o.x === null || o.y === null || o.z === null) return;
      let l = o.x, h = o.y, d = o.z;
      if (c && this.deviceOrientation) {
        const g = this.computeGravityInDeviceFrame(this.deviceOrientation);
        l -= g.x, h -= g.y, d -= g.z;
      }
      let p;
      this.normalizeAccelerationToENU && this.deviceOrientation ? p = this.transformToENU(l, h, d, i, this.deviceOrientation) : p = {
        x: l,
        y: h,
        z: d,
        timestamp: i
      }, this.addAccelerationReading(p);
    }
    processGyroscopeData(t, i) {
      const o = t.rotationRate;
      if (!o || o.alpha === null || o.beta === null || o.gamma === null) return;
      const c = o.beta, l = o.gamma, h = o.alpha;
      let d;
      this.normalizeGyroscopeToENU && this.deviceOrientation ? d = this.transformToENU(c, l, h, i, this.deviceOrientation) : d = {
        x: c,
        y: l,
        z: h,
        timestamp: i
      }, this.addGyroscopeReading(d);
    }
    notifyListeners(t, i, o) {
      for (const c of t.values()) try {
        c(i);
      } catch (l) {
        console.error(`Error in ${o} callback:`, l);
      }
    }
    updateRotationMatrices(t) {
      const i = -t.alpha * _Yn.DEG_TO_RAD, o = -t.beta * _Yn.DEG_TO_RAD, c = -t.gamma * _Yn.DEG_TO_RAD, l = Math.cos(i), h = Math.sin(i), d = Math.cos(o), p = Math.sin(o), g = Math.cos(c), T = Math.sin(c);
      this.matrixRz.set(0, 0, l), this.matrixRz.set(0, 1, -h), this.matrixRz.set(0, 2, 0), this.matrixRz.set(1, 0, h), this.matrixRz.set(1, 1, l), this.matrixRz.set(1, 2, 0), this.matrixRz.set(2, 0, 0), this.matrixRz.set(2, 1, 0), this.matrixRz.set(2, 2, 1), this.matrixRy.set(0, 0, g), this.matrixRy.set(0, 1, 0), this.matrixRy.set(0, 2, T), this.matrixRy.set(1, 0, 0), this.matrixRy.set(1, 1, 1), this.matrixRy.set(1, 2, 0), this.matrixRy.set(2, 0, -T), this.matrixRy.set(2, 1, 0), this.matrixRy.set(2, 2, g), this.matrixRx.set(0, 0, 1), this.matrixRx.set(0, 1, 0), this.matrixRx.set(0, 2, 0), this.matrixRx.set(1, 0, 0), this.matrixRx.set(1, 1, d), this.matrixRx.set(1, 2, -p), this.matrixRx.set(2, 0, 0), this.matrixRx.set(2, 1, p), this.matrixRx.set(2, 2, d), this.multiplyMatricesInPlace(this.matrixRx, this.matrixRy, this.matrixRTemp), this.multiplyMatricesInPlace(this.matrixRTemp, this.matrixRz, this.matrixR);
    }
    multiplyMatricesInPlace(t, i, o) {
      for (let c = 0; c < 3; c++) for (let l = 0; l < 3; l++) {
        let h = 0;
        for (let d = 0; d < 3; d++) h += t.get(c, d) * i.get(d, l);
        o.set(c, l, h);
      }
    }
    multiplyMatrixVectorInPlace(t, i, o) {
      for (let c = 0; c < 3; c++) {
        let l = 0;
        for (let h = 0; h < 3; h++) l += t.get(c, h) * i.get(h, 0);
        o.set(c, 0, l);
      }
    }
    transformToENU(t, i, o, c, l) {
      return this.updateRotationMatrices(l), this.vectorInput.set(0, 0, t), this.vectorInput.set(1, 0, i), this.vectorInput.set(2, 0, o), this.multiplyMatrixVectorInPlace(this.matrixR, this.vectorInput, this.vectorOutput), {
        x: this.vectorOutput.get(0, 0),
        y: this.vectorOutput.get(1, 0),
        z: this.vectorOutput.get(2, 0),
        timestamp: c
      };
    }
    computeGravityInDeviceFrame(t) {
      this.updateRotationMatrices(t);
      let i = 0, o = 0, c = 0;
      for (let l = 0; l < 3; l++) {
        const h = this.gravityENU.get(l, 0);
        i += this.matrixR.get(l, 0) * h, o += this.matrixR.get(l, 1) * h, c += this.matrixR.get(l, 2) * h;
      }
      return {
        x: i,
        y: o,
        z: c
      };
    }
  };
  __publicField(_Yn, "GRAVITY", 9.81);
  __publicField(_Yn, "DEG_TO_RAD", Math.PI / 180);
  let Yn = _Yn;
  const _ao = class _ao {
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
      const i = uc.getPlatformContext(), o = new _ao(i), c = await o.initializeProviders(t);
      return c.isErr() ? L(c.error) : (_ao.instance = o, P(o));
    }
    static getInstance() {
      return _ao.instance ? P(_ao.instance) : L(new yo("Platform services not initialized", io.NOT_INITIALIZED));
    }
    async initializeProviders(t) {
      try {
        this.storageProvider = this.createStorageProvider(t == null ? void 0 : t.storage);
        const i = await Promise.all([
          this.createIMUProvider(t == null ? void 0 : t.imu),
          this.createDeviceOrientationProvider(t == null ? void 0 : t.deviceOrientation)
        ]);
        return this.imuProvider = i[0], this.deviceOrientationProvider = i[1], this.geolocationProvider = await this.createGeolocationProvider(t == null ? void 0 : t.geolocation), this.fileProvider = this.createFileProvider(), this.initialized = true, P(void 0);
      } catch (i) {
        return L(new yo("Failed to initialize platform providers", io.DETECTION_FAILED, i));
      }
    }
    createStorageProvider(t) {
      switch (this.context.environment) {
        case ut.TAURI:
          return new FO((t == null ? void 0 : t.tauriStorePath) || "user-data.json");
        case ut.WEB:
        case ut.MOBILE_WEB:
        case ut.UNKNOWN:
        default:
          return new KO((t == null ? void 0 : t.webDbName) || "trackmaker-db", (t == null ? void 0 : t.webStoreName) || "user-data");
      }
    }
    async createGeolocationProvider(t) {
      let i;
      switch (this.context.environment) {
        case ut.TAURI:
          i = new qO((t == null ? void 0 : t.tauriHandlerName) || "get_geolocation");
          break;
        case ut.WEB:
        case ut.MOBILE_WEB:
        case ut.UNKNOWN:
        default:
          i = new JO();
          break;
      }
      const o = await i.init(t == null ? void 0 : t.permissionCallback);
      return o.isErr() ? (console.error("Failed to initialize geolocation provider", o.error), null) : i;
    }
    createFileProvider() {
      return {
        init: async () => L(new Ue("File provider not implemented")),
        readFile: async () => L(new Ue("File provider not implemented")),
        writeFile: async () => L(new Ue("File provider not implemented")),
        deleteFile: async () => L(new Ue("File provider not implemented")),
        listFiles: async () => L(new Ue("File provider not implemented")),
        exists: async () => L(new Ue("File provider not implemented")),
        isSupported: () => false
      };
    }
    async createIMUProvider(t) {
      const i = new Yn(), o = await i.init(t == null ? void 0 : t.permissionCallback);
      return o.isErr() ? (console.error("Failed to initialize IMU provider", o.error), null) : i;
    }
    async createDeviceOrientationProvider(t) {
      const i = new ZO(), o = await i.init(t == null ? void 0 : t.permissionCallback);
      return o.isErr() ? (console.error("Failed to initialize device orientation provider", o.error), null) : i;
    }
    getContext() {
      return this.context;
    }
    getStorage() {
      return this.storageProvider ? P(this.storageProvider) : L(new yo("Storage provider not initialized", io.DETECTION_FAILED));
    }
    getGeolocation() {
      return this.geolocationProvider ? P(this.geolocationProvider) : L(new yo("Geolocation provider not initialized", io.DETECTION_FAILED));
    }
    getFile() {
      return this.fileProvider ? P(this.fileProvider) : L(new yo("File provider not initialized", io.DETECTION_FAILED));
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
      _ao.instance = null;
    }
    getGeolocationProvider() {
      return this.geolocationProvider;
    }
    getIMU() {
      return this.imuProvider ? P(this.imuProvider) : L(new yo("IMU provider not initialized", io.DETECTION_FAILED));
    }
    getDeviceOrientation() {
      return this.deviceOrientationProvider ? P(this.deviceOrientationProvider) : L(new yo("Device orientation provider not initialized", io.DETECTION_FAILED));
    }
  };
  __publicField(_ao, "instance", null);
  let ao = _ao;
  Ls = function() {
    return ao.getInstance();
  };
  lg = function() {
    return typeof navigator > "u" ? false : uc.detectEnvironment() === ut.TAURI;
  };
  class hi {
    constructor(t, i, o = 0) {
      __publicField(this, "latitude");
      __publicField(this, "longitude");
      __publicField(this, "accuracy");
      this.latitude = t, this.longitude = i, this.accuracy = o;
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
  class ug {
    constructor(t) {
      __publicField(this, "strategies", []);
      __publicField(this, "activeStrategy", null);
      __publicField(this, "watcherCount", 0);
      __publicField(this, "isInitialized", false);
      this.strategies = t;
    }
    async initialise() {
      if (this.isInitialized) return P(void 0);
      for (const t of this.strategies) try {
        if (await t.isAvailable()) {
          if (this.activeStrategy = t, (await this.activeStrategy.initialize()).isErr()) {
            console.info(`[BackendManager] Backend ${t.name} not initialised`);
            continue;
          }
          return this.isInitialized = true, console.info(`[BackendManager] Initialised with ${t.name} backend`), P(void 0);
        } else console.info(`[BackendManager] Fail to initialise with ${t.name} backend, trying fallbacks`);
      } catch (i) {
        console.warn(`[BackendManager] Failed to test ${t.name} backend:`, i);
        continue;
      }
      return L(new ve("No backend available", "BACKEND_NOT_AVAILABLE"));
    }
    async startWatching(t) {
      if (!this.isInitialized) return L(new ve("Backend not initialized", "BACKEND_NOT_INITIALIZED"));
      if (!this.activeStrategy) return L(new ve("No backend available", "BACKEND_NOT_AVAILABLE"));
      if (this.watcherCount === 0) {
        const i = await this.activeStrategy.startWatching(t);
        if (i.isErr()) return console.warn(`[BackendManager] Failed to start ${this.activeStrategy.name} backend:`, i.error), L(i.error);
      } else {
        const i = await this.activeStrategy.startWatching(t);
        if (i.isErr()) return L(i.error);
      }
      return this.watcherCount++, console.info(`[BackendManager] Started watching with ${this.activeStrategy.name} backend (count: ${this.watcherCount})`), P(this.activeStrategy.name);
    }
    async stopWatching() {
      var _a3;
      if (this.watcherCount === 0 || !this.activeStrategy) return P(void 0);
      if (this.watcherCount--, this.watcherCount === 0) {
        const t = await this.activeStrategy.stopWatching();
        if (t.isErr()) return L(new ve(`Failed to stop ${((_a3 = this.activeStrategy) == null ? void 0 : _a3.name) || "unknown"} backend`, "UPDATE_SERVICE_ERROR", t.error));
        console.info("[BackendManager] Stopped watching location");
      } else console.info(`[BackendManager] Decremented watcher count (count: ${this.watcherCount})`);
      return P(void 0);
    }
    async getCurrentPosition() {
      if (!this.isInitialized) return L(new ve("Backend not initialized", "BACKEND_NOT_INITIALIZED"));
      if (!this.activeStrategy) return L(new ve("No backend available for current position", "BACKEND_NOT_AVAILABLE"));
      const t = await this.activeStrategy.getCurrentPosition();
      return t.isErr() ? (console.warn(`[BackendManager] Failed to get location from ${this.activeStrategy.name}:`, t.error), L(t.error)) : t;
    }
    getActiveBackend() {
      var _a3;
      return ((_a3 = this.activeStrategy) == null ? void 0 : _a3.name) || null;
    }
    isWatchingActive() {
      return this.watcherCount > 0;
    }
  }
  class hg {
    constructor() {
      __publicField(this, "callbacks", /* @__PURE__ */ new Set());
    }
    subscribe(t) {
      return this.callbacks.add(t), () => this.callbacks.delete(t);
    }
    emit(t, i) {
      for (const o of this.callbacks) try {
        o(t, i);
      } catch (c) {
        console.error("[LocationEventEmitter] Callback error:", c);
      }
    }
    clear() {
      this.callbacks.clear();
    }
    get size() {
      return this.callbacks.size;
    }
  }
  class dg {
    constructor() {
      __publicField(this, "currentLocation", null);
      __publicField(this, "currentBackend", null);
      __publicField(this, "eventEmitter");
      this.eventEmitter = new hg();
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
  class fg {
    constructor() {
      __publicField(this, "name", "gps");
      __publicField(this, "provider", null);
      __publicField(this, "watchId", null);
      __publicField(this, "isInitialized", false);
    }
    async initialize() {
      if (this.isInitialized) return P(void 0);
      try {
        const t = Ls();
        if (t.isErr()) return L(new ve("Platform services not available", "BACKEND_NOT_AVAILABLE", t.error));
        const i = t.value.getGeolocationProvider();
        return i ? (this.provider = i, this.isInitialized = true, P(void 0)) : L(new ve("Geolocation provider not available", "BACKEND_NOT_AVAILABLE"));
      } catch (t) {
        return L(new ve("Exception during GPS backend initialization", "UPDATE_SERVICE_ERROR", t));
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
      if (!this.provider) return L(new ve("GPS backend not initialized", "BACKEND_NOT_AVAILABLE"));
      const i = await this.provider.watchPosition((o) => {
        const c = new hi(o.coords.latitude, o.coords.longitude, o.coords.accuracy);
        t(c, "gps");
      });
      return i.isErr() ? L(new ve("Failed to start watching position", "UPDATE_SERVICE_ERROR", i.error)) : (this.watchId = i.value, P(void 0));
    }
    async stopWatching() {
      if (this.watchId !== null && this.provider) {
        const t = this.provider.clearWatch(this.watchId);
        if (t.isErr()) return L(new ve("Failed to stop watching position", "UPDATE_SERVICE_ERROR", t.error));
        this.watchId = null;
      }
      return P(void 0);
    }
    async getCurrentPosition() {
      if (!this.provider) return L(new ve("GPS backend not initialized", "BACKEND_NOT_AVAILABLE"));
      const t = await this.provider.getCurrentPosition();
      if (t.isErr()) return L(new ve("Failed to get current position", "UPDATE_SERVICE_ERROR", t.error));
      const i = t.value;
      return P(new hi(i.coords.latitude, i.coords.longitude, i.coords.accuracy));
    }
  }
  const zl = "https://ipapi.co/json/";
  class pg {
    constructor() {
      __publicField(this, "name", "ip");
      __publicField(this, "watchCallbacks", /* @__PURE__ */ new Map());
      __publicField(this, "watchInterval", null);
      __publicField(this, "lastLocation", null);
      __publicField(this, "nextCallbackId", 1);
      __publicField(this, "activeWatcherCount", 0);
    }
    async initialize() {
      return P();
    }
    async isAvailable() {
      try {
        return (await fetch(zl, {
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
      }, 3e4), this.updateLocation()), P(void 0);
    }
    async stopWatching() {
      try {
        return this.watchCallbacks.clear(), this.activeWatcherCount = 0, this.watchInterval !== null && (clearInterval(this.watchInterval), this.watchInterval = null), this.lastLocation = null, P(void 0);
      } catch (t) {
        return L(new ve("Failed to stop IP location watching", "UPDATE_SERVICE_ERROR", t));
      }
    }
    async getCurrentPosition() {
      try {
        console.info("[IPFallbackBackend] Getting location from IP service");
        const t = await fetch(zl, {
          signal: AbortSignal.timeout(1e4)
        });
        if (!t.ok) throw new Error(`HTTP error! Status: ${t.status}`);
        const i = await t.json(), o = new hi(i.latitude, i.longitude, 5e4);
        return console.info("[IPFallbackBackend] Successfully retrieved location from IP service"), P(o);
      } catch (t) {
        return L(new ve("Failed to get location from IP service", "POSITION_UNAVAILABLE", t));
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
          for (const o of this.watchCallbacks.values()) try {
            o(i, "ip");
          } catch (c) {
            console.error("[IPFallbackBackend] Callback error:", c);
          }
        }
      } catch (t) {
        console.error("[IPFallbackBackend] Error updating location:", t);
      }
    }
  }
  class Tg {
    constructor(t = 100) {
      __publicField(this, "imuProvider", null);
      __publicField(this, "isListening", false);
      __publicField(this, "imuCallbacks", []);
      __publicField(this, "imuUpdateInterval", null);
      this.imuUpdateIntervalMs = t;
    }
    async initialize() {
      try {
        const t = Ls();
        if (t.isErr()) return L(new ve("Platform services not available for IMU", "BACKEND_NOT_AVAILABLE", t.error));
        const i = t.value.getIMU();
        return i.isErr() ? L(new ve("IMU provider not available", "BACKEND_NOT_AVAILABLE", i.error)) : (this.imuProvider = i.value, P(void 0));
      } catch (t) {
        return L(new ve("Exception during IMU initialization", "UPDATE_SERVICE_ERROR", t));
      }
    }
    async isAvailable() {
      return !this.imuProvider && (await this.initialize()).isErr() ? false : !!this.imuProvider;
    }
    async startListening(t) {
      if (!this.imuProvider) return L(new ve("IMU not initialized", "BACKEND_NOT_AVAILABLE"));
      if (this.isListening) return this.imuCallbacks.push(t), P(void 0);
      try {
        return this.imuCallbacks.push(t), this.isListening = true, this.startIMUPolling(), console.info("[IMUFusionManager] Started IMU sensor fusion"), P(void 0);
      } catch (i) {
        return L(new ve("Failed to start IMU listening", "UPDATE_SERVICE_ERROR", i));
      }
    }
    async stopListening() {
      if (!this.isListening || !this.imuProvider) return P(void 0);
      try {
        this.imuUpdateInterval && (clearInterval(this.imuUpdateInterval), this.imuUpdateInterval = null);
        const t = this.imuProvider.stopAcceleration();
        t.isErr() && console.warn("[IMUFusionManager] Failed to stop acceleration sensor:", t.error);
        const i = this.imuProvider.stopGyroscope();
        return i.isErr() && console.warn("[IMUFusionManager] Failed to stop gyroscope sensor:", i.error), this.imuCallbacks = [], this.isListening = false, console.info("[IMUFusionManager] Stopped IMU sensor fusion"), P(void 0);
      } catch (t) {
        return L(new ve("Failed to stop IMU listening", "UPDATE_SERVICE_ERROR", t));
      }
    }
    startIMUPolling() {
      this.imuProvider && (this.imuUpdateInterval = setInterval(async () => {
        try {
          const t = await this.getCombinedIMUReading();
          if (t) for (const i of this.imuCallbacks) try {
            i(t);
          } catch (o) {
            console.error("[IMUFusionManager] IMU callback error:", o);
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
        ]), o = {
          timestamp: performance.now()
        };
        return t.isOk() && t.value && (o.acceleration = {
          x: t.value.x,
          y: t.value.y,
          z: t.value.z
        }), i.isOk() && i.value && (o.gyroscope = {
          x: i.value.x,
          y: i.value.y,
          z: i.value.z
        }), o;
      } catch (t) {
        return console.error("[IMUFusionManager] Error getting combined IMU reading:", t), null;
      }
    }
  }
  class Ig {
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
          this.workerModulePromise || (this.workerModulePromise = br(() => import("./worker-MQK90cII.js"), [], import.meta.url));
          const l = await this.workerModulePromise;
          console.log("[KalmanWorkerClient] Worker module loaded"), this.worker = new l.default(), console.log("[KalmanWorkerClient] Worker instance created"), this.worker.onmessage = this.handleWorkerMessage.bind(this), this.worker.onerror = this.handleWorkerError.bind(this);
        } catch (l) {
          throw console.error("[KalmanWorkerClient] Failed to create worker:", l), new Error(`Failed to create Kalman worker: ${l instanceof Error ? l.message : String(l)}`);
        }
      }
      const o = {
        type: "INITIALIZE",
        id: this.nextId++,
        config: t,
        initialReading: i
      }, c = await this.sendMessage(o);
      if (!c.success) throw new Error(c.error || "Failed to initialize worker");
      this.isInitialized = true;
    }
    async processGPS(t) {
      if (!this.isInitialized || !this.worker) throw new Error("Worker not initialized");
      const i = {
        type: "PROCESS_GPS",
        id: this.nextId++,
        reading: t
      }, o = await this.sendMessage(i);
      if (!o.success) throw new Error(o.error || "Failed to process GPS reading");
    }
    async processIMU(t) {
      if (!this.isInitialized || !this.worker) throw new Error("Worker not initialized");
      const i = {
        type: "PROCESS_IMU",
        id: this.nextId++,
        reading: t
      }, o = await this.sendMessage(i);
      if (!o.success) throw new Error(o.error || "Failed to process IMU reading");
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
      return new Promise((i, o) => {
        if (!this.worker) {
          o(new Error("Worker not available"));
          return;
        }
        this.pendingRequests.set(t.id, {
          resolve: i,
          reject: o
        }), this.worker.postMessage(t);
      });
    }
    handleWorkerMessage(t) {
      const i = t.data;
      if (i.type === "RESULT") {
        const o = this.pendingRequests.get(i.originalId);
        o && (this.pendingRequests.delete(i.originalId), o.resolve({
          success: true,
          data: i.data
        }));
      } else if (i.type === "ERROR") if (i.originalId !== void 0) {
        const o = this.pendingRequests.get(i.originalId);
        o && (this.pendingRequests.delete(i.originalId), console.error("[KalmanWorkerClient] Worker error for request", i.originalId, ":", i.error), o.resolve({
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
  let De;
  const cd = typeof TextDecoder < "u" ? new TextDecoder("utf-8", {
    ignoreBOM: true,
    fatal: true
  }) : {
    decode: () => {
      throw Error("TextDecoder not available");
    }
  };
  typeof TextDecoder < "u" && cd.decode();
  let vn = null;
  function Dr() {
    return (vn === null || vn.byteLength === 0) && (vn = new Uint8Array(De.memory.buffer)), vn;
  }
  function Ho(e, t) {
    return e = e >>> 0, cd.decode(Dr().subarray(e, e + t));
  }
  let Zr = 0;
  const Fr = typeof TextEncoder < "u" ? new TextEncoder("utf-8") : {
    encode: () => {
      throw Error("TextEncoder not available");
    }
  }, Eg = typeof Fr.encodeInto == "function" ? function(e, t) {
    return Fr.encodeInto(e, t);
  } : function(e, t) {
    const i = Fr.encode(e);
    return t.set(i), {
      read: e.length,
      written: i.length
    };
  };
  function ld(e, t, i) {
    if (i === void 0) {
      const d = Fr.encode(e), p = t(d.length, 1) >>> 0;
      return Dr().subarray(p, p + d.length).set(d), Zr = d.length, p;
    }
    let o = e.length, c = t(o, 1) >>> 0;
    const l = Dr();
    let h = 0;
    for (; h < o; h++) {
      const d = e.charCodeAt(h);
      if (d > 127) break;
      l[c + h] = d;
    }
    if (h !== o) {
      h !== 0 && (e = e.slice(h)), c = i(c, o, o = h + e.length * 3, 1) >>> 0;
      const d = Dr().subarray(c + h, c + o), p = Eg(e, d);
      h += p.written, c = i(c, o, h, 1) >>> 0;
    }
    return Zr = h, c;
  }
  function mg(e) {
    return e == null;
  }
  let Lo = null;
  function $l() {
    return (Lo === null || Lo.buffer.detached === true || Lo.buffer.detached === void 0 && Lo.buffer !== De.memory.buffer) && (Lo = new DataView(De.memory.buffer)), Lo;
  }
  function ud(e) {
    const t = De.__wbindgen_export_0.get(e);
    return De.__externref_table_dealloc(e), t;
  }
  function ia(e, t) {
    if (!(e instanceof t)) throw new Error(`expected instance of ${t.name}`);
  }
  function Ma(e, t, i) {
    ia(e, ln), ia(t, ln), ia(i, fc);
    const o = De.transform(e.__wbg_ptr, t.__wbg_ptr, i.__wbg_ptr);
    if (o[1]) throw ud(o[0]);
  }
  const Kl = typeof FinalizationRegistry > "u" ? {
    register: () => {
    },
    unregister: () => {
    }
  } : new FinalizationRegistry((e) => De.__wbg_point_free(e >>> 0, 1));
  class fc {
    __destroy_into_raw() {
      const t = this.__wbg_ptr;
      return this.__wbg_ptr = 0, Kl.unregister(this), t;
    }
    free() {
      const t = this.__destroy_into_raw();
      De.__wbg_point_free(t, 0);
    }
    get x() {
      return De.__wbg_get_point_x(this.__wbg_ptr);
    }
    set x(t) {
      De.__wbg_set_point_x(this.__wbg_ptr, t);
    }
    get y() {
      return De.__wbg_get_point_y(this.__wbg_ptr);
    }
    set y(t) {
      De.__wbg_set_point_y(this.__wbg_ptr, t);
    }
    get z() {
      return De.__wbg_get_point_z(this.__wbg_ptr);
    }
    set z(t) {
      De.__wbg_set_point_z(this.__wbg_ptr, t);
    }
    constructor(t, i, o) {
      const c = De.point_new(t, i, o);
      return this.__wbg_ptr = c >>> 0, Kl.register(this, this.__wbg_ptr, this), this;
    }
  }
  const ql = typeof FinalizationRegistry > "u" ? {
    register: () => {
    },
    unregister: () => {
    }
  } : new FinalizationRegistry((e) => De.__wbg_projection_free(e >>> 0, 1));
  class ln {
    __destroy_into_raw() {
      const t = this.__wbg_ptr;
      return this.__wbg_ptr = 0, ql.unregister(this), t;
    }
    free() {
      const t = this.__destroy_into_raw();
      De.__wbg_projection_free(t, 0);
    }
    constructor(t) {
      const i = ld(t, De.__wbindgen_malloc, De.__wbindgen_realloc), o = Zr, c = De.projection_new(i, o);
      if (c[2]) throw ud(c[1]);
      return this.__wbg_ptr = c[0] >>> 0, ql.register(this, this.__wbg_ptr, this), this;
    }
    get projName() {
      let t, i;
      try {
        const o = De.projection_projName(this.__wbg_ptr);
        return t = o[0], i = o[1], Ho(o[0], o[1]);
      } finally {
        De.__wbindgen_free(t, i, 1);
      }
    }
    get isLatlon() {
      return De.projection_isLatlon(this.__wbg_ptr) !== 0;
    }
    get isGeocentric() {
      return De.projection_isGeocentric(this.__wbg_ptr) !== 0;
    }
    get axis() {
      let t, i;
      try {
        const o = De.projection_axis(this.__wbg_ptr);
        return t = o[0], i = o[1], Ho(o[0], o[1]);
      } finally {
        De.__wbindgen_free(t, i, 1);
      }
    }
    get isNormalizedAxis() {
      return De.projection_isNormalizedAxis(this.__wbg_ptr) !== 0;
    }
    get to_meter() {
      return De.projection_to_meter(this.__wbg_ptr);
    }
    get units() {
      let t, i;
      try {
        const o = De.projection_units(this.__wbg_ptr);
        return t = o[0], i = o[1], Ho(o[0], o[1]);
      } finally {
        De.__wbindgen_free(t, i, 1);
      }
    }
  }
  async function Og(e, t) {
    if (typeof Response == "function" && e instanceof Response) {
      if (typeof WebAssembly.instantiateStreaming == "function") try {
        return await WebAssembly.instantiateStreaming(e, t);
      } catch (o) {
        if (e.headers.get("Content-Type") != "application/wasm") console.warn("`WebAssembly.instantiateStreaming` failed because your server does not serve Wasm with `application/wasm` MIME type. Falling back to `WebAssembly.instantiate` which is slower. Original error:\n", o);
        else throw o;
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
  function gg() {
    const e = {};
    return e.wbg = {}, e.wbg.__wbg_buffer_e6c6daaa78528d53 = function(t) {
      return t.buffer;
    }, e.wbg.__wbg_getFloat32_e0872364daa466bb = function(t, i, o) {
      return t.getFloat32(i >>> 0, o !== 0);
    }, e.wbg.__wbg_getFloat64_3c55a5d18420aa12 = function(t, i, o) {
      return t.getFloat64(i >>> 0, o !== 0);
    }, e.wbg.__wbg_getInt32_6ea30555a7e6366d = function(t, i, o) {
      return t.getInt32(i >>> 0, o !== 0);
    }, e.wbg.__wbg_getUint32_78580012d2915dec = function(t, i, o) {
      return t.getUint32(i >>> 0, o !== 0);
    }, e.wbg.__wbg_parseFloat_40655e71a57d91e0 = function(t, i) {
      return parseFloat(Ho(t, i));
    }, e.wbg.__wbg_parseInt_7deceafc75400ae4 = function(t, i, o) {
      return parseInt(Ho(t, i), o);
    }, e.wbg.__wbg_slice_ab0b7e3d75dccdee = function(t, i, o) {
      return t.slice(i >>> 0, o >>> 0);
    }, e.wbg.__wbindgen_error_new = function(t, i) {
      return new Error(Ho(t, i));
    }, e.wbg.__wbindgen_init_externref_table = function() {
      const t = De.__wbindgen_export_0, i = t.grow(4);
      t.set(0, void 0), t.set(i + 0, void 0), t.set(i + 1, null), t.set(i + 2, true), t.set(i + 3, false);
    }, e.wbg.__wbindgen_string_get = function(t, i) {
      const o = i, c = typeof o == "string" ? o : void 0;
      var l = mg(c) ? 0 : ld(c, De.__wbindgen_malloc, De.__wbindgen_realloc), h = Zr;
      $l().setInt32(t + 4, h, true), $l().setInt32(t + 0, l, true);
    }, e.wbg.__wbindgen_throw = function(t, i) {
      throw new Error(Ho(t, i));
    }, e;
  }
  function Rg(e, t) {
    return De = e.exports, hd.__wbindgen_wasm_module = t, Lo = null, vn = null, De.__wbindgen_start(), De;
  }
  async function hd(e) {
    if (De !== void 0) return De;
    typeof e < "u" && (Object.getPrototypeOf(e) === Object.prototype ? { module_or_path: e } = e : console.warn("using deprecated parameters for the initialization function; pass a single object instead")), typeof e > "u" && (e = new URL("" + new URL("proj4rs_bg-Biz-E4lt.wasm", import.meta.url).href, import.meta.url));
    const t = gg();
    (typeof e == "string" || typeof Request == "function" && e instanceof Request || typeof URL == "function" && e instanceof URL) && (e = fetch(e));
    const { instance: i, module: o } = await Og(await e, t);
    return Rg(i, o);
  }
  const Ag = "" + new URL("proj4rs_bg-Biz-E4lt.wasm", import.meta.url).href, Mr = {
    WGS84: "+proj=longlat +datum=WGS84 +no_defs",
    GRS80: "+proj=latlong +ellps=GRS80 +no_defs",
    UTM_ZONE_50N: "+proj=utm +zone=50 +datum=WGS84 +units=m +no_defs",
    UTM_ZONE_51N: "+proj=utm +zone=51 +datum=WGS84 +units=m +no_defs",
    CGCS2000_3_DEGREE: "+proj=tmerc +lat_0=0 +lon_0=117 +k=1 +x_0=500000 +y_0=0 +ellps=GRS80 +units=m +no_defs",
    BEIJING_1954: "+proj=tmerc +lat_0=0 +lon_0=117 +k=1 +x_0=500000 +y_0=0 +ellps=krass +units=m +no_defs",
    WEB_MERCATOR: "+proj=merc +a=6378137 +b=6378137 +lat_ts=0.0 +lon_0=0.0 +x_0=0.0 +y_0=0 +k=1.0 +units=m +nadgrids=@null +wktext +no_defs"
  };
  let oa = false;
  async function dd() {
    if (!oa) try {
      console.log("[Proj4WASM] Fetching WASM module..."), await hd({
        module_or_path: Ag
      }), oa = true, console.log("[Proj4WASM] WASM module loaded successfully.");
    } catch (e) {
      console.warn("[Proj4WASM] Failed to load WASM module, using the JS fallback."), console.error(e), oa = true;
    }
  }
  async function Xl(e, t, i) {
    await dd();
    const o = new ln(e), c = new ln(t), l = new fc(i[0], i[1], 0);
    try {
      return Ma(o, c, l), [
        l.x,
        l.y
      ];
    } catch (h) {
      throw new Error(`Failed to transform coordinate: ${h instanceof Error ? h.message : String(h)}`);
    } finally {
      o.free(), c.free(), l.free();
    }
  }
  function Ng(e, t) {
    const i = t.x - e.x, o = t.y - e.y;
    return Math.sqrt(i * i + o * o);
  }
  Jl = function(e, t) {
    const o = e.latitude * Math.PI / 180, c = t.latitude * Math.PI / 180, l = (t.latitude - e.latitude) * Math.PI / 180, h = (t.longitude - e.longitude) * Math.PI / 180, d = Math.sin(l / 2) * Math.sin(l / 2) + Math.cos(o) * Math.cos(c) * Math.sin(h / 2) * Math.sin(h / 2);
    return 6371e3 * (2 * Math.atan2(Math.sqrt(d), Math.sqrt(1 - d)));
  };
  async function Sg(e, t, i = {}) {
    const { projection: o = Mr.CGCS2000_3_DEGREE, useHaversine: c = false } = i;
    if (c) return Jl(e, t);
    try {
      const l = await Xl(Mr.WGS84, o, [
        e.longitude,
        e.latitude
      ]), h = await Xl(Mr.WGS84, o, [
        t.longitude,
        t.latitude
      ]);
      return Ng({
        x: l[0],
        y: l[1]
      }, {
        x: h[0],
        y: h[1]
      });
    } catch (l) {
      return console.warn("Failed to use proj4 distance calculation, falling back to haversine:", l), Jl(e, t);
    }
  }
  XR = async function(e, t = {}) {
    if (e.length < 2) return 0;
    let i = 0;
    for (let o = 1; o < e.length; o++) i += await Sg(e[o - 1], e[o], t);
    return i;
  };
  JR = function(e) {
    return e < 1e3 ? `${Math.round(e)} m` : e < 1e4 ? `${(e / 1e3).toFixed(1)} km` : `${Math.round(e / 1e3)} km`;
  };
  const { sin: zt, cos: wg, sqrt: pc, abs: Qr, PI: Ut } = Math, Zl = 6378245, Ql = 0.006693421622965823;
  function fd(e, t) {
    return e >= 72.004 && e <= 137.8347 && t >= 0.8293 && t <= 55.8271;
  }
  function yg(e, t) {
    let i = -100 + 2 * e + 3 * t + 0.2 * t * t + 0.1 * e * t + 0.2 * pc(Qr(e));
    return i += (20 * zt(6 * e * Ut) + 20 * zt(2 * e * Ut)) * 2 / 3, i += (20 * zt(t * Ut) + 40 * zt(t / 3 * Ut)) * 2 / 3, i += (160 * zt(t / 12 * Ut) + 320 * zt(t * Ut / 30)) * 2 / 3, i;
  }
  function bg(e, t) {
    let i = 300 + e + 2 * t + 0.1 * e * e + 0.1 * e * t + 0.1 * pc(Qr(e));
    return i += (20 * zt(6 * e * Ut) + 20 * zt(2 * e * Ut)) * 2 / 3, i += (20 * zt(e * Ut) + 40 * zt(e / 3 * Ut)) * 2 / 3, i += (150 * zt(e / 12 * Ut) + 300 * zt(e / 30 * Ut)) * 2 / 3, i;
  }
  function Lg(e, t) {
    let i = bg(e - 105, t - 35), o = yg(e - 105, t - 35);
    const c = t / 180 * Ut;
    let l = zt(c);
    l = 1 - Ql * l * l;
    const h = pc(l);
    return i = i * 180 / (Zl / h * wg(c) * Ut), o = o * 180 / (Zl * (1 - Ql) / (l * h) * Ut), [
      i,
      o
    ];
  }
  function uo(e) {
    const [t, i] = e;
    if (!fd(t, i)) return [
      t,
      i
    ];
    const o = Lg(t, i);
    return [
      t + o[0],
      i + o[1]
    ];
  }
  function un(e) {
    const [t, i] = e;
    if (!fd(t, i)) return [
      t,
      i
    ];
    let [o, c] = [
      t,
      i
    ], l = uo([
      o,
      c
    ]), h = l[0] - t, d = l[1] - i;
    for (; Qr(h) > 1e-6 || Qr(d) > 1e-6; ) o -= h, c -= d, l = uo([
      o,
      c
    ]), h = l[0] - t, d = l[1] - i;
    return [
      o,
      c
    ];
  }
  const { sin: es, cos: ts, atan2: pd, sqrt: Td, PI: Cg } = Math, is = Cg * 3e3 / 180;
  function Jo(e) {
    const [t, i] = e, o = t - 65e-4, c = i - 6e-3, l = Td(o * o + c * c) - 2e-5 * es(c * is), h = pd(c, o) - 3e-6 * ts(o * is), d = l * ts(h), p = l * es(h);
    return [
      d,
      p
    ];
  }
  function hn(e) {
    const [t, i] = e, o = t, c = i, l = Td(o * o + c * c) + 2e-5 * es(c * is), h = pd(c, o) + 3e-6 * ts(o * is), d = l * ts(h) + 65e-4, p = l * es(h) + 6e-3;
    return [
      d,
      p
    ];
  }
  const eu = 180 / Math.PI, tu = Math.PI / 180, os = 6378137, Qi = 20037508342789244e-9;
  function gr(e) {
    return [
      e[0] * eu / os,
      (Math.PI * 0.5 - 2 * Math.atan(Math.exp(-e[1] / os))) * eu
    ];
  }
  function Cs(e) {
    const t = Math.abs(e[0]) <= 180 ? e[0] : e[0] - (e[0] < 0 ? -1 : 1) * 360, i = [
      os * t * tu,
      os * Math.log(Math.tan(Math.PI * 0.25 + 0.5 * e[1] * tu))
    ];
    return i[0] > Qi && (i[0] = Qi), i[0] < -Qi && (i[0] = -Qi), i[1] > Qi && (i[1] = Qi), i[1] < -Qi && (i[1] = -Qi), i;
  }
  const { abs: ns } = Math, iu = [
    1289059486e-2,
    836237787e-2,
    5591021,
    348198983e-2,
    167804312e-2,
    0
  ], ou = [
    75,
    60,
    45,
    30,
    15,
    0
  ], vg = [
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
  ], Hg = [
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
  function Id(e, t, i) {
    const o = ns(t) / i[9];
    let c = i[0] + i[1] * ns(e), l = i[2] + i[3] * o + i[4] * Math.pow(o, 2) + i[5] * Math.pow(o, 3) + i[6] * Math.pow(o, 4) + i[7] * Math.pow(o, 5) + i[8] * Math.pow(o, 6);
    return c *= e < 0 ? -1 : 1, l *= t < 0 ? -1 : 1, [
      c,
      l
    ];
  }
  function vs(e) {
    const [t, i] = e;
    let o = [];
    for (let c = 0; c < ou.length; c++) if (ns(i) > ou[c]) {
      o = Hg[c];
      break;
    }
    return Id(t, i, o);
  }
  function Rr(e) {
    const [t, i] = e;
    let o = [];
    for (let c = 0; c < iu.length; c++) if (ns(i) >= iu[c]) {
      o = vg[c];
      break;
    }
    return Id(t, i, o);
  }
  function eo(e, t) {
    if (!e) throw new Error(t);
  }
  function Ed(e) {
    return !!e && Object.prototype.toString.call(e) === "[object Array]";
  }
  function nu(e) {
    return !isNaN(Number(e)) && e !== null && !Ed(e);
  }
  function oi(...e) {
    const t = e.length - 1;
    return function(...i) {
      let o = t, c = e[t].apply(null, i);
      for (; o--; ) c = e[o].call(null, c);
      return c;
    };
  }
  function md(e, t, i = false) {
    if (e === null) return;
    let o, c, l, h, d, p, g = 0, T = 0, N, H;
    const { type: C } = e, G = C === "FeatureCollection", F = C === "Feature", pe = G ? e.features.length : 1;
    for (let re = 0; re < pe; re++) {
      N = G ? e.features[re].geometry : F ? e.geometry : e, H = N ? N.type === "GeometryCollection" : false, p = H ? N.geometries.length : 1;
      for (let k = 0; k < p; k++) {
        let J = 0, Y = 0;
        if (h = H ? N.geometries[k] : N, h === null) continue;
        const ue = h.type;
        switch (g = i && (ue === "Polygon" || ue === "MultiPolygon") ? 1 : 0, ue) {
          case null:
            break;
          case "Point":
            if (d = h.coordinates, t(d, T, re, J, Y) === false) return false;
            T++, J++;
            break;
          case "LineString":
          case "MultiPoint":
            for (d = h.coordinates, o = 0; o < d.length; o++) {
              if (t(d[o], T, re, J, Y) === false) return false;
              T++, ue === "MultiPoint" && J++;
            }
            ue === "LineString" && J++;
            break;
          case "Polygon":
          case "MultiLineString":
            for (d = h.coordinates, o = 0; o < d.length; o++) {
              for (c = 0; c < d[o].length - g; c++) {
                if (t(d[o][c], T, re, J, Y) === false) return false;
                T++;
              }
              ue === "MultiLineString" && J++, ue === "Polygon" && Y++;
            }
            ue === "Polygon" && J++;
            break;
          case "MultiPolygon":
            for (d = h.coordinates, o = 0; o < d.length; o++) {
              for (Y = 0, c = 0; c < d[o].length; c++) {
                for (l = 0; l < d[o][c].length - g; l++) {
                  if (t(d[o][c][l], T, re, J, Y) === false) return false;
                  T++;
                }
                Y++;
              }
              J++;
            }
            break;
          case "GeometryCollection":
            for (o = 0; o < h.geometries.length; o++) if (md(h.geometries[o], t, i) === false) return false;
            break;
          default:
            throw new Error("Unknown Geometry Type");
        }
      }
    }
  }
  var st;
  (function(e) {
    e.WGS84 = "WGS84", e.WGS1984 = "WGS84", e.EPSG4326 = "WGS84", e.GCJ02 = "GCJ02", e.AMap = "GCJ02", e.BD09 = "BD09", e.BD09LL = "BD09", e.Baidu = "BD09", e.BMap = "BD09", e.BD09MC = "BD09MC", e.BD09Meter = "BD09MC", e.EPSG3857 = "EPSG3857", e.EPSG900913 = "EPSG3857", e.EPSG102100 = "EPSG3857", e.WebMercator = "EPSG3857", e.WM = "EPSG3857";
  })(st || (st = {}));
  const Dg = {
    to: {
      [st.GCJ02]: uo,
      [st.BD09]: oi(hn, uo),
      [st.BD09MC]: oi(vs, hn, uo),
      [st.EPSG3857]: Cs
    }
  }, Fg = {
    to: {
      [st.WGS84]: un,
      [st.BD09]: hn,
      [st.BD09MC]: oi(vs, hn),
      [st.EPSG3857]: oi(Cs, un)
    }
  }, Mg = {
    to: {
      [st.WGS84]: oi(un, Jo),
      [st.GCJ02]: Jo,
      [st.EPSG3857]: oi(Cs, un, Jo),
      [st.BD09MC]: vs
    }
  }, Pg = {
    to: {
      [st.WGS84]: gr,
      [st.GCJ02]: oi(uo, gr),
      [st.BD09]: oi(hn, uo, gr),
      [st.BD09MC]: oi(vs, hn, uo, gr)
    }
  }, Ug = {
    to: {
      [st.WGS84]: oi(un, Jo, Rr),
      [st.GCJ02]: oi(Jo, Rr),
      [st.EPSG3857]: oi(Cs, un, Jo, Rr),
      [st.BD09]: Rr
    }
  }, Wg = {
    WGS84: Dg,
    GCJ02: Fg,
    BD09: Mg,
    EPSG3857: Pg,
    BD09MC: Ug
  };
  var Gg = Wg;
  function kg(e, t, i) {
    if (eo(!!e, "The args[0] input coordinate is required"), eo(!!t, "The args[1] original coordinate system is required"), eo(!!i, "The args[2] target coordinate system is required"), t === i) return e;
    const o = Gg[t];
    eo(!!o, `Invalid original coordinate system: ${t}`);
    const c = o.to[i];
    eo(!!c, `Invalid target coordinate system: ${i}`);
    const l = typeof e;
    if (eo(l === "string" || l === "object", `Invalid input coordinate type: ${l}`), l === "string") try {
      e = JSON.parse(e);
    } catch {
      throw new Error(`Invalid input coordinate: ${e}`);
    }
    let h = false;
    Ed(e) && (eo(e.length >= 2, `Invalid input coordinate: ${e}`), eo(nu(e[0]) && nu(e[1]), `Invalid input coordinate: ${e}`), e = e.map(Number), h = true);
    const d = c;
    return h ? d(e) : (md(e, (p) => {
      [p[0], p[1]] = d(p);
    }), e);
  }
  const Zo = Object.assign(Object.assign({}, st), {
    CRSTypes: st,
    transform: kg
  }), ru = 6378137;
  class Od {
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
      return this.cachedWGS84Projection || (this.cachedWGS84Projection = new ln(Mr.WGS84)), this.cachedWGS84Projection;
    }
    getLocalProjectionObj() {
      if (!this.cachedLocalProjection || !this.localProjection) throw new Error("Reference point not set. Call setReferencePoint() first.");
      return this.cachedLocalProjection;
    }
    getPoint() {
      return this.cachedPoint || (this.cachedPoint = new fc(0, 0, 0)), this.cachedPoint;
    }
    getGeolocationCorrectionSetting() {
      return We("geolocationCorrection") ?? false;
    }
    setReferencePoint(t, i) {
      this.referencePoint = t, this.localProjection = i || `+proj=tmerc +lat_0=${t.latitude} +lon_0=${t.longitude} +k=1 +x_0=0 +y_0=0 +datum=WGS84 +units=m +no_defs`, this.cachedLocalProjection && this.cachedLocalProjection.free(), this.cachedLocalProjection = new ln(this.localProjection);
    }
    async geographicToLocal(t) {
      if (!this.referencePoint || !this.localProjection) throw new Error("Reference point not set. Call setReferencePoint() first.");
      let i = t;
      if (this.geolocationCorrectionEnabled) {
        const h = new hi(t.latitude, t.longitude);
        i = gd(h);
      }
      const o = this.getWGS84Projection(), c = this.getLocalProjectionObj(), l = this.getPoint();
      l.x = i.longitude, l.y = i.latitude, l.z = 0;
      try {
        return Ma(o, c, l), {
          x: l.x,
          y: l.y
        };
      } catch {
        return this.geographicToLocalFallback(t);
      }
    }
    async localToGeographic(t) {
      if (!this.referencePoint || !this.localProjection) throw new Error("Reference point not set. Call setReferencePoint() first.");
      const i = this.getLocalProjectionObj(), o = this.getWGS84Projection(), c = this.getPoint();
      c.x = t.x, c.y = t.y, c.z = 0;
      try {
        Ma(i, o, c);
        const l = {
          longitude: c.x,
          latitude: c.y
        };
        if (this.geolocationCorrectionEnabled) {
          const h = new hi(l.latitude, l.longitude);
          return _g(h);
        }
        return l;
      } catch {
        return this.localToGeographicFallback(t);
      }
    }
    geographicToLocalFallback(t) {
      if (!this.referencePoint) throw new Error("Reference point not set");
      const i = 6371e3, o = this.referencePoint.latitude * Math.PI / 180, c = this.referencePoint.longitude * Math.PI / 180, l = t.latitude * Math.PI / 180, h = t.longitude * Math.PI / 180, d = i * (h - c) * Math.cos((o + l) / 2), p = i * (l - o);
      return {
        x: d,
        y: p
      };
    }
    localToGeographicFallback(t) {
      if (!this.referencePoint) throw new Error("Reference point not set");
      const i = this.referencePoint.latitude * Math.PI / 180, o = this.referencePoint.longitude * Math.PI / 180, c = (t.y / ru + i) * 180 / Math.PI, l = (t.x / (ru * Math.cos(i)) + o) * 180 / Math.PI;
      return {
        latitude: c,
        longitude: l
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
  function gd(e) {
    const t = Zo.transform([
      e.longitude,
      e.latitude
    ], Zo.WGS84, Zo.GCJ02);
    return new hi(t[1], t[0]);
  }
  function _g(e) {
    const t = Zo.transform([
      e.longitude,
      e.latitude
    ], Zo.GCJ02, Zo.WGS84);
    return new hi(t[1], t[0]);
  }
  new Od();
  class Bg {
    constructor(t, i = 100, o) {
      __publicField(this, "workerClient");
      __publicField(this, "coordinateTransformer");
      __publicField(this, "imuManager");
      __publicField(this, "callback", null);
      __publicField(this, "isInitialized", false);
      __publicField(this, "lastOutputTime", 0);
      __publicField(this, "lastOutputAccuracy", 0);
      __publicField(this, "debugEnabled", false);
      __publicField(this, "withoutIMU", false);
      __publicField(this, "config");
      __publicField(this, "cachedState", null);
      __publicField(this, "cachedGain", null);
      this.workerClient = new Ig(), this.coordinateTransformer = new Od(), this.imuManager = new Tg(i), this.callback = t, this.debugEnabled = (o == null ? void 0 : o.debugEnabled) ?? Da();
      const c = We("geolocationBackend");
      this.withoutIMU = c === "kalman-no-imu", this.config = {
        initialAccelerationUncertainty: (o == null ? void 0 : o.initialAccelerationUncertainty) ?? GO(),
        initialPositionUncertainty: (o == null ? void 0 : o.initialPositionUncertainty) ?? kO(),
        initialVelocityUncertainty: (o == null ? void 0 : o.initialVelocityUncertainty) ?? _O(),
        gpsSpeedUncertainty: (o == null ? void 0 : o.gpsSpeedUncertainty) ?? BO(),
        imuAccelerationUncertainty: (o == null ? void 0 : o.imuAccelerationUncertainty) ?? YO(),
        velocityProcessNoise: (o == null ? void 0 : o.velocityProcessNoise) ?? jO(),
        zuptEnabled: (o == null ? void 0 : o.zuptEnabled) ?? xO(),
        zuptThreshold: (o == null ? void 0 : o.zuptThreshold) ?? VO(),
        zuptConsecutiveSamples: (o == null ? void 0 : o.zuptConsecutiveSamples) ?? zO(),
        zuptVelocityNoise: (o == null ? void 0 : o.zuptVelocityNoise) ?? $O(),
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
        });
        let o;
        t.speed !== void 0 && t.heading !== void 0 && (o = this.gpsVelocityToLocal(t.speed, t.heading));
        const c = {
          x: i.x,
          y: i.y,
          accuracy: t.accuracy,
          timestamp: t.timestamp,
          velocity: o
        };
        this.withoutIMU ? console.info("[LocationProcessor] Running in no-IMU mode, skipping IMU initialization") : (await this.imuManager.initialize()).isErr() && console.warn("[LocationProcessor] IMU not available, using GPS-only mode");
        const l = {
          ...this.config,
          debugEnabled: this.debugEnabled
        };
        return await this.workerClient.initialize(l, c), this.isInitialized = true, await this.updateCachedState(), P(void 0);
      } catch (i) {
        return L(new ve("Failed to initialize location processor", "UPDATE_SERVICE_ERROR", i));
      }
    }
    async startGPS() {
      try {
        return this.withoutIMU ? (this.isInitialized = true, console.info("[LocationProcessor] Started location processing (no-IMU mode)"), P(void 0)) : (await this.imuManager.isAvailable() && (await this.imuManager.startListening((o) => {
          this.processIMUReading(o);
        })).isErr() && console.warn("[LocationProcessor] Failed to start IMU, using GPS-only"), this.isInitialized = true, console.info("[LocationProcessor] Started location processing"), P(void 0));
      } catch (t) {
        return L(new ve("Failed to start GPS processing", "UPDATE_SERVICE_ERROR", t));
      }
    }
    async stopGPS() {
      try {
        const t = await this.imuManager.stopListening();
        return t.isErr() && console.warn("[LocationProcessor] Failed to stop IMU:", t.error), this.workerClient.dispose(), this.isInitialized = false, this.cachedState = null, this.cachedGain = null, console.info("[LocationProcessor] Stopped location processing"), P(void 0);
      } catch (t) {
        return L(new ve("Failed to stop GPS processing", "UPDATE_SERVICE_ERROR", t));
      }
    }
    async processGPSLocation(t) {
      if (!this.isInitialized) {
        console.warn("[LocationProcessor] Processor not initialized, ignoring GPS reading");
        return;
      }
      try {
        const i = await this.coordinateTransformer.geographicToLocal({
          longitude: t.longitude,
          latitude: t.latitude
        });
        let o;
        t.speed !== void 0 && t.heading !== void 0 && (o = this.gpsVelocityToLocal(t.speed, t.heading));
        const c = {
          x: i.x,
          y: i.y,
          accuracy: t.accuracy,
          timestamp: t.timestamp,
          velocity: o
        };
        await this.workerClient.processGPS(c), this.lastOutputAccuracy = t.accuracy, await this.outputFilteredPosition();
      } catch (i) {
        console.error("[LocationProcessor] Error processing GPS location:", i);
      }
    }
    async processIMUReading(t) {
      if (!this.isInitialized || !this.workerClient.isReady()) {
        this.isInitialized && !this.workerClient.isReady() && console.log("[LocationProcessor] Kalman filter not yet initialized, buffering IMU reading");
        return;
      }
      try {
        this.debugEnabled && console.log("[LocationProcessor] Processing IMU reading:", {
          timestamp: t.timestamp,
          acceleration: t.acceleration
        }), await this.workerClient.processIMU(t), await this.outputPredictedPosition();
      } catch (i) {
        console.error("[LocationProcessor] Error processing IMU reading:", i);
      }
    }
    async outputFilteredPosition() {
      try {
        const t = await this.workerClient.getFilteredPosition(), i = await this.coordinateTransformer.localToGeographic(t), o = new hi(i.latitude, i.longitude, this.lastOutputAccuracy || 10);
        await this.updateCachedState(), this.notifyCallback(o);
      } catch (t) {
        console.error("[LocationProcessor] Error outputting filtered position:", t);
      }
    }
    async outputPredictedPosition() {
      const t = performance.now();
      if (!(t - this.lastOutputTime < 50)) {
        this.lastOutputTime = t;
        try {
          const i = await this.workerClient.getFilteredPosition(), o = await this.coordinateTransformer.localToGeographic(i), c = new hi(o.latitude, o.longitude, this.lastOutputAccuracy || 10);
          await this.updateCachedState(), this.notifyCallback(c);
        } catch (i) {
          console.error("[LocationProcessor] Error outputting predicted position:", i);
        }
      }
    }
    async getCurrentFilteredPosition() {
      if (!this.workerClient.isReady()) return L(new ve("Kalman filter not initialized", "UPDATE_SERVICE_ERROR"));
      try {
        const t = await this.workerClient.getFilteredPosition(), i = await this.coordinateTransformer.localToGeographic(t), o = new hi(i.latitude, i.longitude, this.lastOutputAccuracy || 10);
        return P(o);
      } catch (t) {
        return L(new ve("Failed to get filtered position", "UPDATE_SERVICE_ERROR", t));
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
    async updateCachedState() {
      try {
        const t = await this.workerClient.getState(), i = new Ri(t.covariance);
        this.cachedState = {
          position: t.position,
          velocity: t.velocity,
          acceleration: t.acceleration,
          covariance: i,
          timestamp: t.timestamp
        };
        const o = await this.workerClient.getLastKalmanGain();
        this.cachedGain = o ? new Ri(o) : null;
      } catch (t) {
        console.error("[LocationProcessor] Failed to update cached Kalman state:", t);
      }
    }
    gpsVelocityToLocal(t, i) {
      const o = i * Math.PI / 180, c = t * Math.sin(o), l = t * Math.cos(o);
      return {
        x: c,
        y: l
      };
    }
    notifyCallback(t) {
      if (this.callback) try {
        this.callback(t, "kalman");
      } catch (i) {
        console.error("[LocationProcessor] Callback error:", i);
      }
    }
  }
  class Yg {
    constructor(t = 100) {
      __publicField(this, "name", "kalman");
      __publicField(this, "provider", null);
      __publicField(this, "processor", null);
      __publicField(this, "watchId", null);
      __publicField(this, "isInitialized", false);
      __publicField(this, "userCallback", null);
      __publicField(this, "imuUpdateInterval");
      this.imuUpdateInterval = t;
    }
    async initialize() {
      if (this.isInitialized) return P(void 0);
      try {
        const t = Ls();
        if (t.isErr()) return L(new ve("Platform services not available", "BACKEND_NOT_AVAILABLE", t.error));
        const i = t.value.getGeolocationProvider();
        if (!i) return L(new ve("Geolocation provider not available", "BACKEND_NOT_AVAILABLE"));
        this.provider = i;
        const o = await this.provider.getCurrentPosition();
        if (o.isErr()) return L(new ve("Failed to get the initial geolocation", "UPDATE_SERVICE_ERROR", o.error));
        this.processor = new Bg((l, h) => this.handleLocationUpdate(l), this.imuUpdateInterval);
        const c = await this.processor.initialize({
          latitude: o.value.coords.latitude,
          longitude: o.value.coords.longitude,
          accuracy: o.value.coords.accuracy,
          timestamp: performance.now(),
          speed: o.value.coords.speed ?? void 0,
          heading: o.value.coords.heading ?? void 0
        });
        return c.isErr() ? c : (this.isInitialized = true, P(void 0));
      } catch (t) {
        return L(new ve("Exception during Kalman backend initialization", "UPDATE_SERVICE_ERROR", t));
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
      if (!this.provider || !this.processor) return L(new ve("Kalman backend not properly initialized", "BACKEND_NOT_AVAILABLE"));
      try {
        this.userCallback = t;
        const i = await this.provider.watchPosition((c) => {
          var _a3;
          const l = {
            latitude: c.coords.latitude,
            longitude: c.coords.longitude,
            accuracy: c.coords.accuracy,
            timestamp: performance.now(),
            speed: c.coords.speed ?? void 0,
            heading: c.coords.heading ?? void 0
          };
          (_a3 = this.processor) == null ? void 0 : _a3.processGPSLocation(l);
        }, {
          highFrequency: true
        });
        if (i.isErr()) return L(new ve("Failed to start watching position", "UPDATE_SERVICE_ERROR", i.error));
        this.watchId = i.value;
        const o = await this.processor.startGPS();
        return o.isErr() ? (this.watchId !== null && this.provider && this.provider.clearWatch(this.watchId), o) : (console.info("[KalmanBackend] Started Kalman-filtered location watching"), P(void 0));
      } catch (i) {
        return L(new ve("Exception during start watching", "UPDATE_SERVICE_ERROR", i));
      }
    }
    async stopWatching() {
      if (!this.provider || !this.processor) return P(void 0);
      try {
        const t = await this.processor.stopGPS();
        if (t.isErr() && console.warn("[KalmanBackend] Failed to stop processor cleanly:", t.error), this.watchId !== null) {
          const i = this.provider.clearWatch(this.watchId);
          i.isErr() && console.warn("[KalmanBackend] Failed to clear watch:", i.error), this.watchId = null;
        }
        return console.info("[KalmanBackend] Stopped Kalman-filtered location watching"), P(void 0);
      } catch (t) {
        return L(new ve("Exception during stop watching", "UPDATE_SERVICE_ERROR", t));
      }
    }
    async getCurrentPosition() {
      if (!this.provider || !this.processor) return L(new ve("Kalman backend not properly initialized", "BACKEND_NOT_AVAILABLE"));
      try {
        const t = await this.provider.getCurrentPosition();
        if (t.isErr()) return L(new ve("Failed to get current position", "UPDATE_SERVICE_ERROR", t.error));
        const i = t.value, o = {
          latitude: i.coords.latitude,
          longitude: i.coords.longitude,
          accuracy: i.coords.accuracy,
          timestamp: performance.now(),
          speed: i.coords.speed ?? void 0,
          heading: i.coords.heading ?? void 0
        };
        return await this.processor.processGPSLocation(o), await this.processor.getCurrentFilteredPosition();
      } catch (t) {
        return L(new ve("Exception getting current position", "UPDATE_SERVICE_ERROR", t));
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
        this.userCallback(t, "kalman");
      } catch (i) {
        console.error("[KalmanBackend] User callback error:", i);
      }
    }
  }
  si = (_a2 = class {
    constructor() {
      __publicField(this, "isInitialized", false);
      __publicField(this, "backendManager");
      __publicField(this, "stateManager");
      __publicField(this, "locationUpdateCallbacks", /* @__PURE__ */ new Map());
      __publicField(this, "nextCallbackId", 1);
      const t = [], i = We("geolocationBackend"), o = i === "auto" ? WO() : i === "kalman" || i === "kalman-no-imu", c = i === "auto" || i === "gps", l = i === "auto" || i === "ip";
      if (o) {
        const h = Fa(), d = h > 0 ? Math.floor(1e3 / h) : 50;
        t.push(new Yg(d));
      }
      c && t.push(new fg()), l && t.push(new pg()), console.info(`[GeolocationManager] Initializing with backend preference: ${i}, strategies: ${t.map((h) => h.name).join(", ")}`), this.backendManager = new ug(t), this.stateManager = new dg();
    }
    static async getInstance() {
      if (si.instance || (si.instance = new si()), !si.instance.isInitialized) {
        const t = await si.instance.initialize();
        if (t.isErr()) return L(t.error);
      }
      return P(si.instance);
    }
    static getExistingInstance() {
      if (!si.instance) throw new Error("GeolocationManager not initialized. Call getInstance() first.");
      return si.instance;
    }
    static reset() {
      si.instance = null;
    }
    async initialize() {
      if (this.isInitialized) return console.info("[GeolocationManager] Already initialized"), P(void 0);
      console.info("[GeolocationManager] Initializing geolocation services with new architecture");
      try {
        this.stateManager.subscribe((o, c) => {
          this.notifyCallbacks(o);
        });
        const t = await this.backendManager.initialise();
        if (t.isErr()) return console.warn("[GeolocationManager] No backend available for location"), L(new Fi("No geolocation backend available", "no_backend_available", t.error));
        const i = await this.backendManager.getCurrentPosition();
        return i.isOk() ? (this.stateManager.updateLocation(i.value, this.backendManager.getActiveBackend()), this.isInitialized = true, console.info("[GeolocationManager] Geolocation services initialized successfully"), P(void 0)) : L(new Fi("Backend selected fail to obtain geolocation", "backend_error", i.error));
      } catch (t) {
        const i = Tr(t, "Failed to initialize geolocation manager");
        return So(i, "GeolocationManager.initialize"), L(new Fi("Exception during initialization", "initialization_failed", i));
      }
    }
    async getCurrentLocation() {
      if (!this.isInitialized) {
        const t = new Fi("Geolocation manager not initialized", "not_initialized");
        return So(t, "GeolocationManager.getCurrentLocation"), L(t);
      }
      try {
        const t = await this.backendManager.getCurrentPosition();
        return t.isOk() && this.stateManager.updateLocation(t.value, this.backendManager.getActiveBackend() || "gps"), t;
      } catch (t) {
        const i = Tr(t, "Failed to get current location");
        return So(i, "GeolocationManager.getCurrentLocation"), L(new Fi("Failed to get current location", "get_location_failed", i));
      }
    }
    async startLocationUpdates(t) {
      if (!this.isInitialized) {
        const i = new Fi("Geolocation manager not initialized", "not_initialized");
        return So(i, "GeolocationManager.startLocationUpdates"), L(i);
      }
      console.info("[GeolocationManager] Starting location updates");
      try {
        const i = this.nextCallbackId++;
        this.locationUpdateCallbacks.set(i, t);
        const o = await this.backendManager.startWatching((c, l) => {
          this.stateManager.updateLocation(c, l), this.notifyCallbacks(c);
        });
        return o.isErr() ? (this.locationUpdateCallbacks.delete(i), L(o.error)) : (console.info(`[GeolocationManager] Location updates started with handler ${i}`), P(i));
      } catch (i) {
        const o = Tr(i, "Failed to start location updates");
        return So(o, "GeolocationManager.startLocationUpdates"), L(new Fi("Failed to start location updates", "start_updates_failed", o));
      }
    }
    async stopLocationUpdates(t) {
      if (!this.isInitialized) {
        const i = new Fi("Geolocation manager not initialized", "not_initialized");
        return So(i, "GeolocationManager.stopLocationUpdates"), L(i);
      }
      console.info("[GeolocationManager] Stopping location updates");
      try {
        if (this.locationUpdateCallbacks.delete(t), this.locationUpdateCallbacks.size === 0) {
          const i = await this.backendManager.stopWatching();
          if (i.isErr()) return L(i.error);
        }
        return console.info(`[GeolocationManager] Location updates stopped for handler ${t}`), P(void 0);
      } catch (i) {
        const o = Tr(i, "Failed to stop location updates");
        return So(o, "GeolocationManager.stopLocationUpdates"), L(new Fi("Failed to stop location updates", "stop_updates_failed", o));
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
      return t || (console.warn("[GeolocationManager] No known location available - returning default coordinates (0, 0)"), new hi(0, 0));
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
        const i = this.backendManager.strategies.find((o) => o.name === "kalman");
        if (i && "getLastKalmanGain" in i) return i.getLastKalmanGain();
      }
      return null;
    }
    getKalmanState() {
      if (this.backendManager.getActiveBackend() === "kalman") {
        const i = this.backendManager.strategies.find((o) => o.name === "kalman");
        if (i && "getKalmanState" in i) return i.getKalmanState();
      }
      return null;
    }
    applyGeolocationCorrection(t) {
      return We("geolocationCorrection") ? gd(t) : t;
    }
    notifyCallbacks(t) {
      const i = this.applyGeolocationCorrection(t), o = wa(i);
      for (const c of this.locationUpdateCallbacks.values()) try {
        c(o);
      } catch (l) {
        console.error("[GeolocationManager] Callback error:", l);
      }
    }
    async refreshBackend() {
      return P(void 0);
    }
  }, __publicField(_a2, "instance", null), _a2);
  let Rd;
  const Hs = (e) => Rd = e, Ad = /* @__PURE__ */ Symbol();
  function Pa(e) {
    return e && typeof e == "object" && Object.prototype.toString.call(e) === "[object Object]" && typeof e.toJSON != "function";
  }
  var jn;
  (function(e) {
    e.direct = "direct", e.patchObject = "patch object", e.patchFunction = "patch function";
  })(jn || (jn = {}));
  function Nd() {
    const e = Ou(true), t = e.run(() => Vt({}));
    let i = [], o = [];
    const c = Ka({
      install(l) {
        Hs(c), c._a = l, l.provide(Ad, c), l.config.globalProperties.$pinia = c, o.forEach((h) => i.push(h)), o = [];
      },
      use(l) {
        return this._a ? i.push(l) : o.push(l), this;
      },
      _p: i,
      _a: null,
      _e: e,
      _s: /* @__PURE__ */ new Map(),
      state: t
    });
    return c;
  }
  const Sd = () => {
  };
  function su(e, t, i, o = Sd) {
    e.add(t);
    const c = () => {
      e.delete(t) && o();
    };
    return !i && gu() && Xd(c), c;
  }
  function xo(e, ...t) {
    e.forEach((i) => {
      i(...t);
    });
  }
  const jg = (e) => e(), au = /* @__PURE__ */ Symbol(), na = /* @__PURE__ */ Symbol();
  function Ua(e, t) {
    e instanceof Map && t instanceof Map ? t.forEach((i, o) => e.set(o, i)) : e instanceof Set && t instanceof Set && t.forEach(e.add, e);
    for (const i in t) {
      if (!t.hasOwnProperty(i)) continue;
      const o = t[i], c = e[i];
      Pa(c) && Pa(o) && e.hasOwnProperty(i) && !ct(o) && !Bi(o) ? e[i] = Ua(c, o) : e[i] = o;
    }
    return e;
  }
  const xg = /* @__PURE__ */ Symbol();
  function Vg(e) {
    return !Pa(e) || !Object.prototype.hasOwnProperty.call(e, xg);
  }
  const { assign: oo } = Object;
  function zg(e) {
    return !!(ct(e) && e.effect);
  }
  function $g(e, t, i, o) {
    const { state: c, actions: l, getters: h } = t, d = i.state.value[e];
    let p;
    function g() {
      d || (i.state.value[e] = c ? c() : {});
      const T = Nf(i.state.value[e]);
      return oo(T, l, Object.keys(h || {}).reduce((N, H) => (N[H] = Ka(nc(() => {
        Hs(i);
        const C = i._s.get(e);
        return h[H].call(C, C);
      })), N), {}));
    }
    return p = wd(e, g, t, i, o, true), p;
  }
  function wd(e, t, i = {}, o, c, l) {
    let h;
    const d = oo({
      actions: {}
    }, i), p = {
      deep: true
    };
    let g, T, N = /* @__PURE__ */ new Set(), H = /* @__PURE__ */ new Set(), C;
    const G = o.state.value[e];
    !l && !G && (o.state.value[e] = {});
    let F;
    function pe(he) {
      let Q;
      g = T = false, typeof he == "function" ? (he(o.state.value[e]), Q = {
        type: jn.patchFunction,
        storeId: e,
        events: C
      }) : (Ua(o.state.value[e], he), Q = {
        type: jn.patchObject,
        payload: he,
        storeId: e,
        events: C
      });
      const Ie = F = /* @__PURE__ */ Symbol();
      ku().then(() => {
        F === Ie && (g = true);
      }), T = true, xo(N, Q, o.state.value[e]);
    }
    const re = l ? function() {
      const { state: Q } = i, Ie = Q ? Q() : {};
      this.$patch((Le) => {
        oo(Le, Ie);
      });
    } : Sd;
    function k() {
      h.stop(), N.clear(), H.clear(), o._s.delete(e);
    }
    const J = (he, Q = "") => {
      if (au in he) return he[na] = Q, he;
      const Ie = function() {
        Hs(o);
        const Le = Array.from(arguments), de = /* @__PURE__ */ new Set(), xe = /* @__PURE__ */ new Set();
        function ft(He) {
          de.add(He);
        }
        function Bt(He) {
          xe.add(He);
        }
        xo(H, {
          args: Le,
          name: Ie[na],
          store: ue,
          after: ft,
          onError: Bt
        });
        let Je;
        try {
          Je = he.apply(this && this.$id === e ? this : ue, Le);
        } catch (He) {
          throw xo(xe, He), He;
        }
        return Je instanceof Promise ? Je.then((He) => (xo(de, He), He)).catch((He) => (xo(xe, He), Promise.reject(He))) : (xo(de, Je), Je);
      };
      return Ie[au] = true, Ie[na] = Q, Ie;
    }, Y = {
      _p: o,
      $id: e,
      $onAction: su.bind(null, H),
      $patch: pe,
      $reset: re,
      $subscribe(he, Q = {}) {
        const Ie = su(N, he, Q.detached, () => Le()), Le = h.run(() => Xo(() => o.state.value[e], (de) => {
          (Q.flush === "sync" ? T : g) && he({
            storeId: e,
            type: jn.direct,
            events: C
          }, de);
        }, oo({}, p, Q)));
        return Ie;
      },
      $dispose: k
    }, ue = fs(Y);
    o._s.set(e, ue);
    const oe = (o._a && o._a.runWithContext || jg)(() => o._e.run(() => (h = Ou()).run(() => t({
      action: J
    }))));
    for (const he in oe) {
      const Q = oe[he];
      if (ct(Q) && !zg(Q) || Bi(Q)) l || (G && Vg(Q) && (ct(Q) ? Q.value = G[he] : Ua(Q, G[he])), o.state.value[e][he] = Q);
      else if (typeof Q == "function") {
        const Ie = J(Q, he);
        oe[he] = Ie, d.actions[he] = Q;
      }
    }
    return oo(ue, oe), oo(Pe(ue), oe), Object.defineProperty(ue, "$state", {
      get: () => o.state.value[e],
      set: (he) => {
        pe((Q) => {
          oo(Q, he);
        });
      }
    }), o._p.forEach((he) => {
      oo(ue, h.run(() => he({
        store: ue,
        app: o._a,
        pinia: o,
        options: d
      })));
    }), G && l && i.hydrate && i.hydrate(ue.$state, G), g = true, T = true, ue;
  }
  ZR = function(e, t, i) {
    let o;
    const c = typeof t == "function";
    o = c ? i : t;
    function l(h, d) {
      const p = Mf();
      return h = h || (p ? Pn(Ad, null) : null), h && Hs(h), h = Rd, h._s.has(e) || (c ? wd(e, t, o, h) : $g(e, o, h)), h._s.get(e);
    }
    return l.$id = e, l;
  };
  var Kg = [
    {
      id: "indoorequal-vue-maplibre-gl",
      name: "@indoorequal/vue-maplibre-gl",
      description: "Vue 3 plugin for maplibre-gl",
      url: "https://github.com/indoorequal/vue-maplibre-gl",
      homepage: "https://github.com/indoorequal/vue-maplibre-gl",
      licenseType: "MIT",
      license: `MIT License

Copyright (c) 2021 Volker Nauruhn, 2024 Fran\xE7ois de Metz

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.`,
      isDev: false
    },
    {
      id: "tauri-apps-api",
      name: "@tauri-apps/api",
      description: "Tauri API definitions",
      url: "https://github.com/tauri-apps/tauri",
      homepage: "https://github.com/tauri-apps/tauri#readme",
      licenseType: "Apache-2.0 OR MIT",
      license: "",
      isDev: false
    },
    {
      id: "tauri-apps-plugin-fs",
      name: "@tauri-apps/plugin-fs",
      description: "Access the file system.",
      url: "https://github.com/tauri-apps/plugins-workspace",
      homepage: "https://github.com/tauri-apps/plugins-workspace",
      licenseType: "MIT OR Apache-2.0",
      license: "",
      isDev: false
    },
    {
      id: "tauri-apps-plugin-store",
      name: "@tauri-apps/plugin-store",
      description: "Simple, persistent key-value store.",
      url: "https://github.com/tauri-apps/plugins-workspace",
      homepage: "https://github.com/tauri-apps/plugins-workspace",
      licenseType: "MIT OR Apache-2.0",
      license: "",
      isDev: false
    },
    {
      id: "vicons-tabler",
      name: "@vicons/tabler",
      description: "Vue3 SVG icon components integrated from [`tabler`](https://github.com/tabler/tabler-icons)",
      url: "",
      homepage: "",
      licenseType: "MIT",
      license: "",
      isDev: false
    },
    {
      id: "vueuse-core",
      name: "@vueuse/core",
      description: "Collection of essential Vue Composition Utilities",
      url: "https://github.com/vueuse/vueuse",
      homepage: "https://github.com/vueuse/vueuse#readme",
      licenseType: "MIT",
      license: `MIT License

Copyright (c) 2019-PRESENT Anthony Fu<https://github.com/antfu>

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
`,
      isDev: false
    },
    {
      id: "wangeditor-editor",
      name: "@wangeditor/editor",
      description: "Web rich text editor, Web \u5BCC\u6587\u672C\u7F16\u8F91\u5668",
      url: "https://github.com/wangeditor-team/wangEditor",
      homepage: "https://www.wangeditor.com/",
      licenseType: "MIT",
      license: `MIT License

Copyright (c) 2021 - present wangEditor-team

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
`,
      isDev: false
    },
    {
      id: "wangeditor-editor-for-vue",
      name: "@wangeditor/editor-for-vue",
      description: "wangEditor component for vue@next",
      url: "https://github.com/wangeditor-team/wangEditor-for-vue3",
      homepage: "http://www.wangeditor.com/",
      licenseType: "MIT",
      license: "",
      isDev: false
    },
    {
      id: "gcoord",
      name: "gcoord",
      description: "geographic coordinate library",
      url: "https://github.com/hujiulong/gcoord",
      homepage: "https://github.com/hujiulong/gcoord#readme",
      licenseType: "MIT",
      license: `MIT License

Copyright (c) 2018-present, Jiulong Hu

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
`,
      isDev: false
    },
    {
      id: "lodash-es",
      name: "lodash-es",
      description: "Lodash exported as ES modules.",
      url: "https://github.com/lodash/lodash",
      homepage: "https://lodash.com/custom-builds",
      licenseType: "MIT",
      license: `Copyright OpenJS Foundation and other contributors <https://openjsf.org/>

Based on Underscore.js, copyright Jeremy Ashkenas,
DocumentCloud and Investigative Reporters & Editors <http://underscorejs.org/>

This software consists of voluntary contributions made by many
individuals. For exact contribution history, see the revision history
available at https://github.com/lodash/lodash

The following license applies to all parts of this software except as
documented below:

====

Permission is hereby granted, free of charge, to any person obtaining
a copy of this software and associated documentation files (the
"Software"), to deal in the Software without restriction, including
without limitation the rights to use, copy, modify, merge, publish,
distribute, sublicense, and/or sell copies of the Software, and to
permit persons to whom the Software is furnished to do so, subject to
the following conditions:

The above copyright notice and this permission notice shall be
included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND
NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE
LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION
OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION
WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.

====

Copyright and related rights for sample code are waived via CC0. Sample
code is defined as all source code displayed within the prose of the
documentation.

CC0: http://creativecommons.org/publicdomain/zero/1.0/

====

Files located in the node_modules and vendor directories are externally
maintained libraries used by this software which have their own
licenses; we recommend you read them, as their terms may differ from the
terms above.
`,
      isDev: false
    },
    {
      id: "maplibre-gl",
      name: "maplibre-gl",
      description: "BSD licensed community fork of mapbox-gl, a WebGL interactive maps library",
      url: "https:////github.com/maplibre/maplibre-gl-js",
      homepage: "https://maplibre.org/",
      licenseType: "BSD-3-Clause",
      license: `Copyright (c) 2023, MapLibre contributors

All rights reserved.

Redistribution and use in source and binary forms, with or without modification,
are permitted provided that the following conditions are met:

    * Redistributions of source code must retain the above copyright notice,
      this list of conditions and the following disclaimer.
    * Redistributions in binary form must reproduce the above copyright notice,
      this list of conditions and the following disclaimer in the documentation
      and/or other materials provided with the distribution.
    * Neither the name of MapLibre GL JS nor the names of its contributors
      may be used to endorse or promote products derived from this software
      without specific prior written permission.

THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS
"AS IS" AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT
LIMITED TO, THE IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR
A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT OWNER OR
CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL,
EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED TO,
PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; LOSS OF USE, DATA, OR
PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY OF
LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING
NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS
SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.


-------------------------------------------------------------------------------

Contains code from mapbox-gl-js v1.13 and earlier

Version v1.13 of mapbox-gl-js and earlier are licensed under a BSD-3-Clause license

Copyright (c) 2020, Mapbox
Redistribution and use in source and binary forms, with or without modification,
are permitted provided that the following conditions are met:

* Redistributions of source code must retain the above copyright notice,
  this list of conditions and the following disclaimer.
* Redistributions in binary form must reproduce the above copyright notice,
  this list of conditions and the following disclaimer in the documentation
  and/or other materials provided with the distribution.
* Neither the name of Mapbox GL JS nor the names of its contributors
  may be used to endorse or promote products derived from this software
  without specific prior written permission.

THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS
"AS IS" AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT
LIMITED TO, THE IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR
A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT OWNER OR
CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL,
EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED TO,
PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; LOSS OF USE, DATA, OR
PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY OF
LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING
NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE,
EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.


-------------------------------------------------------------------------------

Contains code from glfx.js

Copyright (C) 2011 by Evan Wallace

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in
all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
THE SOFTWARE.

--------------------------------------------------------------------------------

Contains a portion of d3-color https://github.com/d3/d3-color

Copyright 2010-2016 Mike Bostock
All rights reserved.

Redistribution and use in source and binary forms, with or without modification,
are permitted provided that the following conditions are met:

* Redistributions of source code must retain the above copyright notice, this
  list of conditions and the following disclaimer.

* Redistributions in binary form must reproduce the above copyright notice,
  this list of conditions and the following disclaimer in the documentation
  and/or other materials provided with the distribution.

* Neither the name of the author nor the names of contributors may be used to
  endorse or promote products derived from this software without specific prior
  written permission.

THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS" AND
ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED
WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE
DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT OWNER OR CONTRIBUTORS BE LIABLE FOR
ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES
(INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES;
LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON
ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT
(INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS
SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
`,
      isDev: false
    },
    {
      id: "markdown-it-task-lists",
      name: "markdown-it-task-lists",
      description: "A markdown-it plugin to create GitHub-style task lists",
      url: "https://github.com/git@github.com:revin/markdown-it-task-lists",
      homepage: "https://github.com/revin/markdown-it-task-lists#readme",
      licenseType: "ISC",
      license: `Copyright (c) 2016, Revin Guillen

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted, provided that the above
copyright notice and this permission notice appear in all copies.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
`,
      isDev: false
    },
    {
      id: "markdown-it-ts",
      name: "markdown-it-ts",
      description: "A TypeScript implementation of the markdown-it library with separate parse and render functionalities.",
      url: "",
      homepage: "",
      licenseType: "MIT",
      license: `Copyright (c) 2014 Vitaly Puzrin, Alex Kocharin.

Permission is hereby granted, free of charge, to any person
obtaining a copy of this software and associated documentation
files (the "Software"), to deal in the Software without
restriction, including without limitation the rights to use,
copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the
Software is furnished to do so, subject to the following
conditions:

The above copyright notice and this permission notice shall be
included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES
OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND
NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT
HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY,
WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING
FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR
OTHER DEALINGS IN THE SOFTWARE.
`,
      isDev: false
    },
    {
      id: "ml-matrix",
      name: "ml-matrix",
      description: "Matrix manipulation and computation library",
      url: "https://github.com/mljs/matrix",
      homepage: "https://github.com/mljs/matrix",
      licenseType: "MIT",
      license: `The MIT License (MIT)

Copyright (c) 2014 Micha\xEBl Zasso

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.

`,
      isDev: false
    },
    {
      id: "nano-vue-i18n",
      name: "nano-vue-i18n",
      description: "A stupidly simple yet ultra-lightweight i18n plugin for Vue 3, designed for high-frequency rendering scenarios.",
      url: "https://github.com/git@github.com:Anson2251/nano-vue-i18n",
      homepage: "https://github.com/Anson2251/nano-vue-i18n#readme",
      licenseType: "MIT",
      license: `MIT License

Copyright (c) 2026 Anson2251

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
`,
      isDev: false
    },
    {
      id: "neverthrow",
      name: "neverthrow",
      description: "Stop throwing errors, and instead return Results!",
      url: "https://github.com/supermacro/neverthrow",
      homepage: "https://github.com/supermacro/neverthrow#readme",
      licenseType: "MIT",
      license: `MIT License

Copyright (c) 2019 Giorgio Delgado

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.

`,
      isDev: false
    },
    {
      id: "nosleep-js",
      name: "nosleep.js",
      description: "Prevent display sleep and enable wake lock in any Android or iOS web browser",
      url: "https://github.com/richtr/NoSleep.js",
      homepage: "https://github.com/richtr/NoSleep.js",
      licenseType: "MIT",
      license: `The MIT License (MIT)

Copyright (c) Rich Tibbett

Permission is hereby granted, free of charge, to any person obtaining
a copy of this software and associated documentation files (the
"Software"), to deal in the Software without restriction, including
without limitation the rights to use, copy, modify, merge, publish,
distribute, sublicense, and/or sell copies of the Software, and to
permit persons to whom the Software is furnished to do so, subject to
the following conditions:

The above copyright notice and this permission notice shall be
included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND
NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE
LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION
OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION
WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
`,
      isDev: false
    },
    {
      id: "openpgp",
      name: "openpgp",
      description: "OpenPGP.js is a Javascript implementation of the OpenPGP protocol. This is defined in RFC 4880.",
      url: "https://github.com/openpgpjs/openpgpjs",
      homepage: "https://openpgpjs.org/",
      licenseType: "LGPL-3.0+",
      license: `                   GNU LESSER GENERAL PUBLIC LICENSE
                       Version 3, 29 June 2007

 Copyright (C) 2007 Free Software Foundation, Inc. <https://fsf.org/>
 Everyone is permitted to copy and distribute verbatim copies
 of this license document, but changing it is not allowed.


  This version of the GNU Lesser General Public License incorporates
the terms and conditions of version 3 of the GNU General Public
License, supplemented by the additional permissions listed below.

  0. Additional Definitions.

  As used herein, "this License" refers to version 3 of the GNU Lesser
General Public License, and the "GNU GPL" refers to version 3 of the GNU
General Public License.

  "The Library" refers to a covered work governed by this License,
other than an Application or a Combined Work as defined below.

  An "Application" is any work that makes use of an interface provided
by the Library, but which is not otherwise based on the Library.
Defining a subclass of a class defined by the Library is deemed a mode
of using an interface provided by the Library.

  A "Combined Work" is a work produced by combining or linking an
Application with the Library.  The particular version of the Library
with which the Combined Work was made is also called the "Linked
Version".

  The "Minimal Corresponding Source" for a Combined Work means the
Corresponding Source for the Combined Work, excluding any source code
for portions of the Combined Work that, considered in isolation, are
based on the Application, and not on the Linked Version.

  The "Corresponding Application Code" for a Combined Work means the
object code and/or source code for the Application, including any data
and utility programs needed for reproducing the Combined Work from the
Application, but excluding the System Libraries of the Combined Work.

  1. Exception to Section 3 of the GNU GPL.

  You may convey a covered work under sections 3 and 4 of this License
without being bound by section 3 of the GNU GPL.

  2. Conveying Modified Versions.

  If you modify a copy of the Library, and, in your modifications, a
facility refers to a function or data to be supplied by an Application
that uses the facility (other than as an argument passed when the
facility is invoked), then you may convey a copy of the modified
version:

   a) under this License, provided that you make a good faith effort to
   ensure that, in the event an Application does not supply the
   function or data, the facility still operates, and performs
   whatever part of its purpose remains meaningful, or

   b) under the GNU GPL, with none of the additional permissions of
   this License applicable to that copy.

  3. Object Code Incorporating Material from Library Header Files.

  The object code form of an Application may incorporate material from
a header file that is part of the Library.  You may convey such object
code under terms of your choice, provided that, if the incorporated
material is not limited to numerical parameters, data structure
layouts and accessors, or small macros, inline functions and templates
(ten or fewer lines in length), you do both of the following:

   a) Give prominent notice with each copy of the object code that the
   Library is used in it and that the Library and its use are
   covered by this License.

   b) Accompany the object code with a copy of the GNU GPL and this license
   document.

  4. Combined Works.

  You may convey a Combined Work under terms of your choice that,
taken together, effectively do not restrict modification of the
portions of the Library contained in the Combined Work and reverse
engineering for debugging such modifications, if you also do each of
the following:

   a) Give prominent notice with each copy of the Combined Work that
   the Library is used in it and that the Library and its use are
   covered by this License.

   b) Accompany the Combined Work with a copy of the GNU GPL and this license
   document.

   c) For a Combined Work that displays copyright notices during
   execution, include the copyright notice for the Library among
   these notices, as well as a reference directing the user to the
   copies of the GNU GPL and this license document.

   d) Do one of the following:

       0) Convey the Minimal Corresponding Source under the terms of this
       License, and the Corresponding Application Code in a form
       suitable for, and under terms that permit, the user to
       recombine or relink the Application with a modified version of
       the Linked Version to produce a modified Combined Work, in the
       manner specified by section 6 of the GNU GPL for conveying
       Corresponding Source.

       1) Use a suitable shared library mechanism for linking with the
       Library.  A suitable mechanism is one that (a) uses at run time
       a copy of the Library already present on the user's computer
       system, and (b) will operate properly with a modified version
       of the Library that is interface-compatible with the Linked
       Version.

   e) Provide Installation Information, but only if you would otherwise
   be required to provide such information under section 6 of the
   GNU GPL, and only to the extent that such information is
   necessary to install and execute a modified version of the
   Combined Work produced by recombining or relinking the
   Application with a modified version of the Linked Version. (If
   you use option 4d0, the Installation Information must accompany
   the Minimal Corresponding Source and Corresponding Application
   Code. If you use option 4d1, you must provide the Installation
   Information in the manner specified by section 6 of the GNU GPL
   for conveying Corresponding Source.)

  5. Combined Libraries.

  You may place library facilities that are a work based on the
Library side by side in a single library together with other library
facilities that are not Applications and are not covered by this
License, and convey such a combined library under terms of your
choice, if you do both of the following:

   a) Accompany the combined library with a copy of the same work based
   on the Library, uncombined with any other library facilities,
   conveyed under the terms of this License.

   b) Give prominent notice with the combined library that part of it
   is a work based on the Library, and explaining where to find the
   accompanying uncombined form of the same work.

  6. Revised Versions of the GNU Lesser General Public License.

  The Free Software Foundation may publish revised and/or new versions
of the GNU Lesser General Public License from time to time. Such new
versions will be similar in spirit to the present version, but may
differ in detail to address new problems or concerns.

  Each version is given a distinguishing version number. If the
Library as you received it specifies that a certain numbered version
of the GNU Lesser General Public License "or any later version"
applies to it, you have the option of following the terms and
conditions either of that published version or of any later version
published by the Free Software Foundation. If the Library as you
received it does not specify a version number of the GNU Lesser
General Public License, you may choose any version of the GNU Lesser
General Public License ever published by the Free Software Foundation.

  If the Library as you received it specifies that a proxy can decide
whether future versions of the GNU Lesser General Public License shall
apply, that proxy's public statement of acceptance of any version is
permanent authorization for you to choose that version for the
Library.
`,
      isDev: false
    },
    {
      id: "pinia",
      name: "pinia",
      description: "Intuitive, type safe and flexible Store for Vue",
      url: "https://github.com/vuejs/pinia",
      homepage: "https://pinia.vuejs.org",
      licenseType: "MIT",
      license: `The MIT License (MIT)

Copyright (c) 2019-present Eduardo San Martin Morote

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
`,
      isDev: false
    },
    {
      id: "proj4rs",
      name: "proj4rs",
      description: "Rust adaptation of Proj4",
      url: "https://github.com/3liz/proj4rs/",
      homepage: "https://github.com/3liz/proj4rs/",
      licenseType: "MIT OR Apache-2.0",
      license: "",
      isDev: false
    },
    {
      id: "sitdown",
      name: "sitdown",
      description: "Convert HTML into Markdown with JavaScript.Support GitHub Flavored Markdown Spec.Also support almost wechat/zhihu/csdn/juejin HTML.",
      url: "https://github.com/mdnice/sitdown",
      homepage: "https://github.com/mdnice/sitdown#readme",
      licenseType: "MIT",
      license: "",
      isDev: false
    },
    {
      id: "terra-draw",
      name: "terra-draw",
      description: "Frictionless map drawing across mapping provider",
      url: "https://github.com/JamesLMilner/terra-draw",
      homepage: "https://github.com/JamesLMilner/terra-draw",
      licenseType: "MIT",
      license: "",
      isDev: false
    },
    {
      id: "terra-draw-maplibre-gl-adapter",
      name: "terra-draw-maplibre-gl-adapter",
      description: "Terra Draw Adapter for Maplibre GL JS",
      url: "https://github.com/JamesLMilner/terra-draw",
      homepage: "https://github.com/JamesLMilner/terra-draw",
      licenseType: "MIT",
      license: "",
      isDev: false
    },
    {
      id: "typescript",
      name: "typescript",
      description: "TypeScript is a language for application scale JavaScript development",
      url: "https://github.com/microsoft/TypeScript",
      homepage: "https://www.typescriptlang.org/",
      licenseType: "Apache-2.0",
      license: `Apache License\r
\r
Version 2.0, January 2004\r
\r
http://www.apache.org/licenses/ \r
\r
TERMS AND CONDITIONS FOR USE, REPRODUCTION, AND DISTRIBUTION\r
\r
1. Definitions.\r
\r
"License" shall mean the terms and conditions for use, reproduction, and distribution as defined by Sections 1 through 9 of this document.\r
\r
"Licensor" shall mean the copyright owner or entity authorized by the copyright owner that is granting the License.\r
\r
"Legal Entity" shall mean the union of the acting entity and all other entities that control, are controlled by, or are under common control with that entity. For the purposes of this definition, "control" means (i) the power, direct or indirect, to cause the direction or management of such entity, whether by contract or otherwise, or (ii) ownership of fifty percent (50%) or more of the outstanding shares, or (iii) beneficial ownership of such entity.\r
\r
"You" (or "Your") shall mean an individual or Legal Entity exercising permissions granted by this License.\r
\r
"Source" form shall mean the preferred form for making modifications, including but not limited to software source code, documentation source, and configuration files.\r
\r
"Object" form shall mean any form resulting from mechanical transformation or translation of a Source form, including but not limited to compiled object code, generated documentation, and conversions to other media types.\r
\r
"Work" shall mean the work of authorship, whether in Source or Object form, made available under the License, as indicated by a copyright notice that is included in or attached to the work (an example is provided in the Appendix below).\r
\r
"Derivative Works" shall mean any work, whether in Source or Object form, that is based on (or derived from) the Work and for which the editorial revisions, annotations, elaborations, or other modifications represent, as a whole, an original work of authorship. For the purposes of this License, Derivative Works shall not include works that remain separable from, or merely link (or bind by name) to the interfaces of, the Work and Derivative Works thereof.\r
\r
"Contribution" shall mean any work of authorship, including the original version of the Work and any modifications or additions to that Work or Derivative Works thereof, that is intentionally submitted to Licensor for inclusion in the Work by the copyright owner or by an individual or Legal Entity authorized to submit on behalf of the copyright owner. For the purposes of this definition, "submitted" means any form of electronic, verbal, or written communication sent to the Licensor or its representatives, including but not limited to communication on electronic mailing lists, source code control systems, and issue tracking systems that are managed by, or on behalf of, the Licensor for the purpose of discussing and improving the Work, but excluding communication that is conspicuously marked or otherwise designated in writing by the copyright owner as "Not a Contribution."\r
\r
"Contributor" shall mean Licensor and any individual or Legal Entity on behalf of whom a Contribution has been received by Licensor and subsequently incorporated within the Work.\r
\r
2. Grant of Copyright License. Subject to the terms and conditions of this License, each Contributor hereby grants to You a perpetual, worldwide, non-exclusive, no-charge, royalty-free, irrevocable copyright license to reproduce, prepare Derivative Works of, publicly display, publicly perform, sublicense, and distribute the Work and such Derivative Works in Source or Object form.\r
\r
3. Grant of Patent License. Subject to the terms and conditions of this License, each Contributor hereby grants to You a perpetual, worldwide, non-exclusive, no-charge, royalty-free, irrevocable (except as stated in this section) patent license to make, have made, use, offer to sell, sell, import, and otherwise transfer the Work, where such license applies only to those patent claims licensable by such Contributor that are necessarily infringed by their Contribution(s) alone or by combination of their Contribution(s) with the Work to which such Contribution(s) was submitted. If You institute patent litigation against any entity (including a cross-claim or counterclaim in a lawsuit) alleging that the Work or a Contribution incorporated within the Work constitutes direct or contributory patent infringement, then any patent licenses granted to You under this License for that Work shall terminate as of the date such litigation is filed.\r
\r
4. Redistribution. You may reproduce and distribute copies of the Work or Derivative Works thereof in any medium, with or without modifications, and in Source or Object form, provided that You meet the following conditions:\r
\r
You must give any other recipients of the Work or Derivative Works a copy of this License; and\r
\r
You must cause any modified files to carry prominent notices stating that You changed the files; and\r
\r
You must retain, in the Source form of any Derivative Works that You distribute, all copyright, patent, trademark, and attribution notices from the Source form of the Work, excluding those notices that do not pertain to any part of the Derivative Works; and\r
\r
If the Work includes a "NOTICE" text file as part of its distribution, then any Derivative Works that You distribute must include a readable copy of the attribution notices contained within such NOTICE file, excluding those notices that do not pertain to any part of the Derivative Works, in at least one of the following places: within a NOTICE text file distributed as part of the Derivative Works; within the Source form or documentation, if provided along with the Derivative Works; or, within a display generated by the Derivative Works, if and wherever such third-party notices normally appear. The contents of the NOTICE file are for informational purposes only and do not modify the License. You may add Your own attribution notices within Derivative Works that You distribute, alongside or as an addendum to the NOTICE text from the Work, provided that such additional attribution notices cannot be construed as modifying the License. You may add Your own copyright statement to Your modifications and may provide additional or different license terms and conditions for use, reproduction, or distribution of Your modifications, or for any such Derivative Works as a whole, provided Your use, reproduction, and distribution of the Work otherwise complies with the conditions stated in this License.\r
\r
5. Submission of Contributions. Unless You explicitly state otherwise, any Contribution intentionally submitted for inclusion in the Work by You to the Licensor shall be under the terms and conditions of this License, without any additional terms or conditions. Notwithstanding the above, nothing herein shall supersede or modify the terms of any separate license agreement you may have executed with Licensor regarding such Contributions.\r
\r
6. Trademarks. This License does not grant permission to use the trade names, trademarks, service marks, or product names of the Licensor, except as required for reasonable and customary use in describing the origin of the Work and reproducing the content of the NOTICE file.\r
\r
7. Disclaimer of Warranty. Unless required by applicable law or agreed to in writing, Licensor provides the Work (and each Contributor provides its Contributions) on an "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied, including, without limitation, any warranties or conditions of TITLE, NON-INFRINGEMENT, MERCHANTABILITY, or FITNESS FOR A PARTICULAR PURPOSE. You are solely responsible for determining the appropriateness of using or redistributing the Work and assume any risks associated with Your exercise of permissions under this License.\r
\r
8. Limitation of Liability. In no event and under no legal theory, whether in tort (including negligence), contract, or otherwise, unless required by applicable law (such as deliberate and grossly negligent acts) or agreed to in writing, shall any Contributor be liable to You for damages, including any direct, indirect, special, incidental, or consequential damages of any character arising as a result of this License or out of the use or inability to use the Work (including but not limited to damages for loss of goodwill, work stoppage, computer failure or malfunction, or any and all other commercial damages or losses), even if such Contributor has been advised of the possibility of such damages.\r
\r
9. Accepting Warranty or Additional Liability. While redistributing the Work or Derivative Works thereof, You may choose to offer, and charge a fee for, acceptance of support, warranty, indemnity, or other liability obligations and/or rights consistent with this License. However, in accepting such obligations, You may act only on Your own behalf and on Your sole responsibility, not on behalf of any other Contributor, and only if You agree to indemnify, defend, and hold each Contributor harmless for any liability incurred by, or claims asserted against, such Contributor by reason of your accepting any such warranty or additional liability.\r
\r
END OF TERMS AND CONDITIONS\r
`,
      isDev: false
    },
    {
      id: "ua-parser-js",
      name: "ua-parser-js",
      description: "Detect Browser, Engine, OS, CPU, and Device type/model from User-Agent & Client Hints data. Supports browser & node.js environment",
      url: "https://github.com/faisalman/ua-parser-js",
      homepage: "https://uaparser.dev",
      licenseType: "AGPL-3.0-or-later",
      license: `# GNU AFFERO GENERAL PUBLIC LICENSE

Version 3, 19 November 2007

Copyright (C) 2007 Free Software Foundation, Inc.
<https://fsf.org/>

Everyone is permitted to copy and distribute verbatim copies of this
license document, but changing it is not allowed.

## Preamble

The GNU Affero General Public License is a free, copyleft license for
software and other kinds of works, specifically designed to ensure
cooperation with the community in the case of network server software.

The licenses for most software and other practical works are designed
to take away your freedom to share and change the works. By contrast,
our General Public Licenses are intended to guarantee your freedom to
share and change all versions of a program--to make sure it remains
free software for all its users.

When we speak of free software, we are referring to freedom, not
price. Our General Public Licenses are designed to make sure that you
have the freedom to distribute copies of free software (and charge for
them if you wish), that you receive source code or can get it if you
want it, that you can change the software or use pieces of it in new
free programs, and that you know you can do these things.

Developers that use our General Public Licenses protect your rights
with two steps: (1) assert copyright on the software, and (2) offer
you this License which gives you legal permission to copy, distribute
and/or modify the software.

A secondary benefit of defending all users' freedom is that
improvements made in alternate versions of the program, if they
receive widespread use, become available for other developers to
incorporate. Many developers of free software are heartened and
encouraged by the resulting cooperation. However, in the case of
software used on network servers, this result may fail to come about.
The GNU General Public License permits making a modified version and
letting the public access it on a server without ever releasing its
source code to the public.

The GNU Affero General Public License is designed specifically to
ensure that, in such cases, the modified source code becomes available
to the community. It requires the operator of a network server to
provide the source code of the modified version running there to the
users of that server. Therefore, public use of a modified version, on
a publicly accessible server, gives the public access to the source
code of the modified version.

An older license, called the Affero General Public License and
published by Affero, was designed to accomplish similar goals. This is
a different license, not a version of the Affero GPL, but Affero has
released a new version of the Affero GPL which permits relicensing
under this license.

The precise terms and conditions for copying, distribution and
modification follow.

## TERMS AND CONDITIONS

### 0. Definitions.

"This License" refers to version 3 of the GNU Affero General Public
License.

"Copyright" also means copyright-like laws that apply to other kinds
of works, such as semiconductor masks.

"The Program" refers to any copyrightable work licensed under this
License. Each licensee is addressed as "you". "Licensees" and
"recipients" may be individuals or organizations.

To "modify" a work means to copy from or adapt all or part of the work
in a fashion requiring copyright permission, other than the making of
an exact copy. The resulting work is called a "modified version" of
the earlier work or a work "based on" the earlier work.

A "covered work" means either the unmodified Program or a work based
on the Program.

To "propagate" a work means to do anything with it that, without
permission, would make you directly or secondarily liable for
infringement under applicable copyright law, except executing it on a
computer or modifying a private copy. Propagation includes copying,
distribution (with or without modification), making available to the
public, and in some countries other activities as well.

To "convey" a work means any kind of propagation that enables other
parties to make or receive copies. Mere interaction with a user
through a computer network, with no transfer of a copy, is not
conveying.

An interactive user interface displays "Appropriate Legal Notices" to
the extent that it includes a convenient and prominently visible
feature that (1) displays an appropriate copyright notice, and (2)
tells the user that there is no warranty for the work (except to the
extent that warranties are provided), that licensees may convey the
work under this License, and how to view a copy of this License. If
the interface presents a list of user commands or options, such as a
menu, a prominent item in the list meets this criterion.

### 1. Source Code.

The "source code" for a work means the preferred form of the work for
making modifications to it. "Object code" means any non-source form of
a work.

A "Standard Interface" means an interface that either is an official
standard defined by a recognized standards body, or, in the case of
interfaces specified for a particular programming language, one that
is widely used among developers working in that language.

The "System Libraries" of an executable work include anything, other
than the work as a whole, that (a) is included in the normal form of
packaging a Major Component, but which is not part of that Major
Component, and (b) serves only to enable use of the work with that
Major Component, or to implement a Standard Interface for which an
implementation is available to the public in source code form. A
"Major Component", in this context, means a major essential component
(kernel, window system, and so on) of the specific operating system
(if any) on which the executable work runs, or a compiler used to
produce the work, or an object code interpreter used to run it.

The "Corresponding Source" for a work in object code form means all
the source code needed to generate, install, and (for an executable
work) run the object code and to modify the work, including scripts to
control those activities. However, it does not include the work's
System Libraries, or general-purpose tools or generally available free
programs which are used unmodified in performing those activities but
which are not part of the work. For example, Corresponding Source
includes interface definition files associated with source files for
the work, and the source code for shared libraries and dynamically
linked subprograms that the work is specifically designed to require,
such as by intimate data communication or control flow between those
subprograms and other parts of the work.

The Corresponding Source need not include anything that users can
regenerate automatically from other parts of the Corresponding Source.

The Corresponding Source for a work in source code form is that same
work.

### 2. Basic Permissions.

All rights granted under this License are granted for the term of
copyright on the Program, and are irrevocable provided the stated
conditions are met. This License explicitly affirms your unlimited
permission to run the unmodified Program. The output from running a
covered work is covered by this License only if the output, given its
content, constitutes a covered work. This License acknowledges your
rights of fair use or other equivalent, as provided by copyright law.

You may make, run and propagate covered works that you do not convey,
without conditions so long as your license otherwise remains in force.
You may convey covered works to others for the sole purpose of having
them make modifications exclusively for you, or provide you with
facilities for running those works, provided that you comply with the
terms of this License in conveying all material for which you do not
control copyright. Those thus making or running the covered works for
you must do so exclusively on your behalf, under your direction and
control, on terms that prohibit them from making any copies of your
copyrighted material outside their relationship with you.

Conveying under any other circumstances is permitted solely under the
conditions stated below. Sublicensing is not allowed; section 10 makes
it unnecessary.

### 3. Protecting Users' Legal Rights From Anti-Circumvention Law.

No covered work shall be deemed part of an effective technological
measure under any applicable law fulfilling obligations under article
11 of the WIPO copyright treaty adopted on 20 December 1996, or
similar laws prohibiting or restricting circumvention of such
measures.

When you convey a covered work, you waive any legal power to forbid
circumvention of technological measures to the extent such
circumvention is effected by exercising rights under this License with
respect to the covered work, and you disclaim any intention to limit
operation or modification of the work as a means of enforcing, against
the work's users, your or third parties' legal rights to forbid
circumvention of technological measures.

### 4. Conveying Verbatim Copies.

You may convey verbatim copies of the Program's source code as you
receive it, in any medium, provided that you conspicuously and
appropriately publish on each copy an appropriate copyright notice;
keep intact all notices stating that this License and any
non-permissive terms added in accord with section 7 apply to the code;
keep intact all notices of the absence of any warranty; and give all
recipients a copy of this License along with the Program.

You may charge any price or no price for each copy that you convey,
and you may offer support or warranty protection for a fee.

### 5. Conveying Modified Source Versions.

You may convey a work based on the Program, or the modifications to
produce it from the Program, in the form of source code under the
terms of section 4, provided that you also meet all of these
conditions:

-   a) The work must carry prominent notices stating that you modified
    it, and giving a relevant date.
-   b) The work must carry prominent notices stating that it is
    released under this License and any conditions added under
    section 7. This requirement modifies the requirement in section 4
    to "keep intact all notices".
-   c) You must license the entire work, as a whole, under this
    License to anyone who comes into possession of a copy. This
    License will therefore apply, along with any applicable section 7
    additional terms, to the whole of the work, and all its parts,
    regardless of how they are packaged. This License gives no
    permission to license the work in any other way, but it does not
    invalidate such permission if you have separately received it.
-   d) If the work has interactive user interfaces, each must display
    Appropriate Legal Notices; however, if the Program has interactive
    interfaces that do not display Appropriate Legal Notices, your
    work need not make them do so.

A compilation of a covered work with other separate and independent
works, which are not by their nature extensions of the covered work,
and which are not combined with it such as to form a larger program,
in or on a volume of a storage or distribution medium, is called an
"aggregate" if the compilation and its resulting copyright are not
used to limit the access or legal rights of the compilation's users
beyond what the individual works permit. Inclusion of a covered work
in an aggregate does not cause this License to apply to the other
parts of the aggregate.

### 6. Conveying Non-Source Forms.

You may convey a covered work in object code form under the terms of
sections 4 and 5, provided that you also convey the machine-readable
Corresponding Source under the terms of this License, in one of these
ways:

-   a) Convey the object code in, or embodied in, a physical product
    (including a physical distribution medium), accompanied by the
    Corresponding Source fixed on a durable physical medium
    customarily used for software interchange.
-   b) Convey the object code in, or embodied in, a physical product
    (including a physical distribution medium), accompanied by a
    written offer, valid for at least three years and valid for as
    long as you offer spare parts or customer support for that product
    model, to give anyone who possesses the object code either (1) a
    copy of the Corresponding Source for all the software in the
    product that is covered by this License, on a durable physical
    medium customarily used for software interchange, for a price no
    more than your reasonable cost of physically performing this
    conveying of source, or (2) access to copy the Corresponding
    Source from a network server at no charge.
-   c) Convey individual copies of the object code with a copy of the
    written offer to provide the Corresponding Source. This
    alternative is allowed only occasionally and noncommercially, and
    only if you received the object code with such an offer, in accord
    with subsection 6b.
-   d) Convey the object code by offering access from a designated
    place (gratis or for a charge), and offer equivalent access to the
    Corresponding Source in the same way through the same place at no
    further charge. You need not require recipients to copy the
    Corresponding Source along with the object code. If the place to
    copy the object code is a network server, the Corresponding Source
    may be on a different server (operated by you or a third party)
    that supports equivalent copying facilities, provided you maintain
    clear directions next to the object code saying where to find the
    Corresponding Source. Regardless of what server hosts the
    Corresponding Source, you remain obligated to ensure that it is
    available for as long as needed to satisfy these requirements.
-   e) Convey the object code using peer-to-peer transmission,
    provided you inform other peers where the object code and
    Corresponding Source of the work are being offered to the general
    public at no charge under subsection 6d.

A separable portion of the object code, whose source code is excluded
from the Corresponding Source as a System Library, need not be
included in conveying the object code work.

A "User Product" is either (1) a "consumer product", which means any
tangible personal property which is normally used for personal,
family, or household purposes, or (2) anything designed or sold for
incorporation into a dwelling. In determining whether a product is a
consumer product, doubtful cases shall be resolved in favor of
coverage. For a particular product received by a particular user,
"normally used" refers to a typical or common use of that class of
product, regardless of the status of the particular user or of the way
in which the particular user actually uses, or expects or is expected
to use, the product. A product is a consumer product regardless of
whether the product has substantial commercial, industrial or
non-consumer uses, unless such uses represent the only significant
mode of use of the product.

"Installation Information" for a User Product means any methods,
procedures, authorization keys, or other information required to
install and execute modified versions of a covered work in that User
Product from a modified version of its Corresponding Source. The
information must suffice to ensure that the continued functioning of
the modified object code is in no case prevented or interfered with
solely because modification has been made.

If you convey an object code work under this section in, or with, or
specifically for use in, a User Product, and the conveying occurs as
part of a transaction in which the right of possession and use of the
User Product is transferred to the recipient in perpetuity or for a
fixed term (regardless of how the transaction is characterized), the
Corresponding Source conveyed under this section must be accompanied
by the Installation Information. But this requirement does not apply
if neither you nor any third party retains the ability to install
modified object code on the User Product (for example, the work has
been installed in ROM).

The requirement to provide Installation Information does not include a
requirement to continue to provide support service, warranty, or
updates for a work that has been modified or installed by the
recipient, or for the User Product in which it has been modified or
installed. Access to a network may be denied when the modification
itself materially and adversely affects the operation of the network
or violates the rules and protocols for communication across the
network.

Corresponding Source conveyed, and Installation Information provided,
in accord with this section must be in a format that is publicly
documented (and with an implementation available to the public in
source code form), and must require no special password or key for
unpacking, reading or copying.

### 7. Additional Terms.

"Additional permissions" are terms that supplement the terms of this
License by making exceptions from one or more of its conditions.
Additional permissions that are applicable to the entire Program shall
be treated as though they were included in this License, to the extent
that they are valid under applicable law. If additional permissions
apply only to part of the Program, that part may be used separately
under those permissions, but the entire Program remains governed by
this License without regard to the additional permissions.

When you convey a copy of a covered work, you may at your option
remove any additional permissions from that copy, or from any part of
it. (Additional permissions may be written to require their own
removal in certain cases when you modify the work.) You may place
additional permissions on material, added by you to a covered work,
for which you have or can give appropriate copyright permission.

Notwithstanding any other provision of this License, for material you
add to a covered work, you may (if authorized by the copyright holders
of that material) supplement the terms of this License with terms:

-   a) Disclaiming warranty or limiting liability differently from the
    terms of sections 15 and 16 of this License; or
-   b) Requiring preservation of specified reasonable legal notices or
    author attributions in that material or in the Appropriate Legal
    Notices displayed by works containing it; or
-   c) Prohibiting misrepresentation of the origin of that material,
    or requiring that modified versions of such material be marked in
    reasonable ways as different from the original version; or
-   d) Limiting the use for publicity purposes of names of licensors
    or authors of the material; or
-   e) Declining to grant rights under trademark law for use of some
    trade names, trademarks, or service marks; or
-   f) Requiring indemnification of licensors and authors of that
    material by anyone who conveys the material (or modified versions
    of it) with contractual assumptions of liability to the recipient,
    for any liability that these contractual assumptions directly
    impose on those licensors and authors.

All other non-permissive additional terms are considered "further
restrictions" within the meaning of section 10. If the Program as you
received it, or any part of it, contains a notice stating that it is
governed by this License along with a term that is a further
restriction, you may remove that term. If a license document contains
a further restriction but permits relicensing or conveying under this
License, you may add to a covered work material governed by the terms
of that license document, provided that the further restriction does
not survive such relicensing or conveying.

If you add terms to a covered work in accord with this section, you
must place, in the relevant source files, a statement of the
additional terms that apply to those files, or a notice indicating
where to find the applicable terms.

Additional terms, permissive or non-permissive, may be stated in the
form of a separately written license, or stated as exceptions; the
above requirements apply either way.

### 8. Termination.

You may not propagate or modify a covered work except as expressly
provided under this License. Any attempt otherwise to propagate or
modify it is void, and will automatically terminate your rights under
this License (including any patent licenses granted under the third
paragraph of section 11).

However, if you cease all violation of this License, then your license
from a particular copyright holder is reinstated (a) provisionally,
unless and until the copyright holder explicitly and finally
terminates your license, and (b) permanently, if the copyright holder
fails to notify you of the violation by some reasonable means prior to
60 days after the cessation.

Moreover, your license from a particular copyright holder is
reinstated permanently if the copyright holder notifies you of the
violation by some reasonable means, this is the first time you have
received notice of violation of this License (for any work) from that
copyright holder, and you cure the violation prior to 30 days after
your receipt of the notice.

Termination of your rights under this section does not terminate the
licenses of parties who have received copies or rights from you under
this License. If your rights have been terminated and not permanently
reinstated, you do not qualify to receive new licenses for the same
material under section 10.

### 9. Acceptance Not Required for Having Copies.

You are not required to accept this License in order to receive or run
a copy of the Program. Ancillary propagation of a covered work
occurring solely as a consequence of using peer-to-peer transmission
to receive a copy likewise does not require acceptance. However,
nothing other than this License grants you permission to propagate or
modify any covered work. These actions infringe copyright if you do
not accept this License. Therefore, by modifying or propagating a
covered work, you indicate your acceptance of this License to do so.

### 10. Automatic Licensing of Downstream Recipients.

Each time you convey a covered work, the recipient automatically
receives a license from the original licensors, to run, modify and
propagate that work, subject to this License. You are not responsible
for enforcing compliance by third parties with this License.

An "entity transaction" is a transaction transferring control of an
organization, or substantially all assets of one, or subdividing an
organization, or merging organizations. If propagation of a covered
work results from an entity transaction, each party to that
transaction who receives a copy of the work also receives whatever
licenses to the work the party's predecessor in interest had or could
give under the previous paragraph, plus a right to possession of the
Corresponding Source of the work from the predecessor in interest, if
the predecessor has it or can get it with reasonable efforts.

You may not impose any further restrictions on the exercise of the
rights granted or affirmed under this License. For example, you may
not impose a license fee, royalty, or other charge for exercise of
rights granted under this License, and you may not initiate litigation
(including a cross-claim or counterclaim in a lawsuit) alleging that
any patent claim is infringed by making, using, selling, offering for
sale, or importing the Program or any portion of it.

### 11. Patents.

A "contributor" is a copyright holder who authorizes use under this
License of the Program or a work on which the Program is based. The
work thus licensed is called the contributor's "contributor version".

A contributor's "essential patent claims" are all patent claims owned
or controlled by the contributor, whether already acquired or
hereafter acquired, that would be infringed by some manner, permitted
by this License, of making, using, or selling its contributor version,
but do not include claims that would be infringed only as a
consequence of further modification of the contributor version. For
purposes of this definition, "control" includes the right to grant
patent sublicenses in a manner consistent with the requirements of
this License.

Each contributor grants you a non-exclusive, worldwide, royalty-free
patent license under the contributor's essential patent claims, to
make, use, sell, offer for sale, import and otherwise run, modify and
propagate the contents of its contributor version.

In the following three paragraphs, a "patent license" is any express
agreement or commitment, however denominated, not to enforce a patent
(such as an express permission to practice a patent or covenant not to
sue for patent infringement). To "grant" such a patent license to a
party means to make such an agreement or commitment not to enforce a
patent against the party.

If you convey a covered work, knowingly relying on a patent license,
and the Corresponding Source of the work is not available for anyone
to copy, free of charge and under the terms of this License, through a
publicly available network server or other readily accessible means,
then you must either (1) cause the Corresponding Source to be so
available, or (2) arrange to deprive yourself of the benefit of the
patent license for this particular work, or (3) arrange, in a manner
consistent with the requirements of this License, to extend the patent
license to downstream recipients. "Knowingly relying" means you have
actual knowledge that, but for the patent license, your conveying the
covered work in a country, or your recipient's use of the covered work
in a country, would infringe one or more identifiable patents in that
country that you have reason to believe are valid.

If, pursuant to or in connection with a single transaction or
arrangement, you convey, or propagate by procuring conveyance of, a
covered work, and grant a patent license to some of the parties
receiving the covered work authorizing them to use, propagate, modify
or convey a specific copy of the covered work, then the patent license
you grant is automatically extended to all recipients of the covered
work and works based on it.

A patent license is "discriminatory" if it does not include within the
scope of its coverage, prohibits the exercise of, or is conditioned on
the non-exercise of one or more of the rights that are specifically
granted under this License. You may not convey a covered work if you
are a party to an arrangement with a third party that is in the
business of distributing software, under which you make payment to the
third party based on the extent of your activity of conveying the
work, and under which the third party grants, to any of the parties
who would receive the covered work from you, a discriminatory patent
license (a) in connection with copies of the covered work conveyed by
you (or copies made from those copies), or (b) primarily for and in
connection with specific products or compilations that contain the
covered work, unless you entered into that arrangement, or that patent
license was granted, prior to 28 March 2007.

Nothing in this License shall be construed as excluding or limiting
any implied license or other defenses to infringement that may
otherwise be available to you under applicable patent law.

### 12. No Surrender of Others' Freedom.

If conditions are imposed on you (whether by court order, agreement or
otherwise) that contradict the conditions of this License, they do not
excuse you from the conditions of this License. If you cannot convey a
covered work so as to satisfy simultaneously your obligations under
this License and any other pertinent obligations, then as a
consequence you may not convey it at all. For example, if you agree to
terms that obligate you to collect a royalty for further conveying
from those to whom you convey the Program, the only way you could
satisfy both those terms and this License would be to refrain entirely
from conveying the Program.

### 13. Remote Network Interaction; Use with the GNU General Public License.

Notwithstanding any other provision of this License, if you modify the
Program, your modified version must prominently offer all users
interacting with it remotely through a computer network (if your
version supports such interaction) an opportunity to receive the
Corresponding Source of your version by providing access to the
Corresponding Source from a network server at no charge, through some
standard or customary means of facilitating copying of software. This
Corresponding Source shall include the Corresponding Source for any
work covered by version 3 of the GNU General Public License that is
incorporated pursuant to the following paragraph.

Notwithstanding any other provision of this License, you have
permission to link or combine any covered work with a work licensed
under version 3 of the GNU General Public License into a single
combined work, and to convey the resulting work. The terms of this
License will continue to apply to the part which is the covered work,
but the work with which it is combined will remain governed by version
3 of the GNU General Public License.

### 14. Revised Versions of this License.

The Free Software Foundation may publish revised and/or new versions
of the GNU Affero General Public License from time to time. Such new
versions will be similar in spirit to the present version, but may
differ in detail to address new problems or concerns.

Each version is given a distinguishing version number. If the Program
specifies that a certain numbered version of the GNU Affero General
Public License "or any later version" applies to it, you have the
option of following the terms and conditions either of that numbered
version or of any later version published by the Free Software
Foundation. If the Program does not specify a version number of the
GNU Affero General Public License, you may choose any version ever
published by the Free Software Foundation.

If the Program specifies that a proxy can decide which future versions
of the GNU Affero General Public License can be used, that proxy's
public statement of acceptance of a version permanently authorizes you
to choose that version for the Program.

Later license versions may give you additional or different
permissions. However, no additional obligations are imposed on any
author or copyright holder as a result of your choosing to follow a
later version.

### 15. Disclaimer of Warranty.

THERE IS NO WARRANTY FOR THE PROGRAM, TO THE EXTENT PERMITTED BY
APPLICABLE LAW. EXCEPT WHEN OTHERWISE STATED IN WRITING THE COPYRIGHT
HOLDERS AND/OR OTHER PARTIES PROVIDE THE PROGRAM "AS IS" WITHOUT
WARRANTY OF ANY KIND, EITHER EXPRESSED OR IMPLIED, INCLUDING, BUT NOT
LIMITED TO, THE IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR
A PARTICULAR PURPOSE. THE ENTIRE RISK AS TO THE QUALITY AND
PERFORMANCE OF THE PROGRAM IS WITH YOU. SHOULD THE PROGRAM PROVE
DEFECTIVE, YOU ASSUME THE COST OF ALL NECESSARY SERVICING, REPAIR OR
CORRECTION.

### 16. Limitation of Liability.

IN NO EVENT UNLESS REQUIRED BY APPLICABLE LAW OR AGREED TO IN WRITING
WILL ANY COPYRIGHT HOLDER, OR ANY OTHER PARTY WHO MODIFIES AND/OR
CONVEYS THE PROGRAM AS PERMITTED ABOVE, BE LIABLE TO YOU FOR DAMAGES,
INCLUDING ANY GENERAL, SPECIAL, INCIDENTAL OR CONSEQUENTIAL DAMAGES
ARISING OUT OF THE USE OR INABILITY TO USE THE PROGRAM (INCLUDING BUT
NOT LIMITED TO LOSS OF DATA OR DATA BEING RENDERED INACCURATE OR
LOSSES SUSTAINED BY YOU OR THIRD PARTIES OR A FAILURE OF THE PROGRAM
TO OPERATE WITH ANY OTHER PROGRAMS), EVEN IF SUCH HOLDER OR OTHER
PARTY HAS BEEN ADVISED OF THE POSSIBILITY OF SUCH DAMAGES.

### 17. Interpretation of Sections 15 and 16.

If the disclaimer of warranty and limitation of liability provided
above cannot be given local legal effect according to their terms,
reviewing courts shall apply local law that most closely approximates
an absolute waiver of all civil liability in connection with the
Program, unless a warranty or assumption of liability accompanies a
copy of the Program in return for a fee.

END OF TERMS AND CONDITIONS`,
      isDev: false
    },
    {
      id: "uuid",
      name: "uuid",
      description: "RFC9562 UUIDs",
      url: "https://github.com/uuidjs/uuid",
      homepage: "https://github.com/uuidjs/uuid",
      licenseType: "MIT",
      license: `The MIT License (MIT)

Copyright (c) 2010-2020 Robert Kieffer and other contributors

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
`,
      isDev: false
    },
    {
      id: "vue",
      name: "vue",
      description: "The progressive JavaScript framework for building modern web UI.",
      url: "https://github.com/vuejs/core",
      homepage: "https://github.com/vuejs/core/tree/main/packages/vue#readme",
      licenseType: "MIT",
      license: `The MIT License (MIT)

Copyright (c) 2018-present, Yuxi (Evan) You

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in
all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
THE SOFTWARE.
`,
      isDev: false
    },
    {
      id: "zod",
      name: "zod",
      description: "TypeScript-first schema declaration and validation library with static type inference",
      url: "https://github.com/colinhacks/zod",
      homepage: "https://zod.dev",
      licenseType: "MIT",
      license: `MIT License

Copyright (c) 2025 Colin McDonnell

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
`,
      isDev: false
    },
    {
      id: "tauri-apps-cli",
      name: "@tauri-apps/cli",
      description: "Command line interface for building Tauri apps",
      url: "https://github.com/tauri-apps/tauri",
      homepage: "https://github.com/tauri-apps/tauri#readme",
      licenseType: "Apache-2.0 OR MIT",
      license: "",
      isDev: true
    },
    {
      id: "tsconfig-node-lts",
      name: "@tsconfig/node-lts",
      description: "A base TSConfig for working with Node LTS (22).",
      url: "https://github.com/tsconfig/bases",
      homepage: "https://github.com/tsconfig/bases",
      licenseType: "MIT",
      license: `MIT License

Copyright (c) Microsoft Corporation.

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE
`,
      isDev: true
    },
    {
      id: "types-geojson",
      name: "@types/geojson",
      description: "TypeScript definitions for geojson",
      url: "https://github.com/DefinitelyTyped/DefinitelyTyped",
      homepage: "https://github.com/DefinitelyTyped/DefinitelyTyped/tree/master/types/geojson",
      licenseType: "MIT",
      license: `    MIT License

    Copyright (c) Microsoft Corporation.

    Permission is hereby granted, free of charge, to any person obtaining a copy
    of this software and associated documentation files (the "Software"), to deal
    in the Software without restriction, including without limitation the rights
    to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
    copies of the Software, and to permit persons to whom the Software is
    furnished to do so, subject to the following conditions:

    The above copyright notice and this permission notice shall be included in all
    copies or substantial portions of the Software.

    THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
    IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
    FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
    AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
    LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
    OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
    SOFTWARE
`,
      isDev: true
    },
    {
      id: "types-lodash-es",
      name: "@types/lodash-es",
      description: "TypeScript definitions for lodash-es",
      url: "https://github.com/DefinitelyTyped/DefinitelyTyped",
      homepage: "https://github.com/DefinitelyTyped/DefinitelyTyped/tree/master/types/lodash-es",
      licenseType: "MIT",
      license: `    MIT License

    Copyright (c) Microsoft Corporation.

    Permission is hereby granted, free of charge, to any person obtaining a copy
    of this software and associated documentation files (the "Software"), to deal
    in the Software without restriction, including without limitation the rights
    to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
    copies of the Software, and to permit persons to whom the Software is
    furnished to do so, subject to the following conditions:

    The above copyright notice and this permission notice shall be included in all
    copies or substantial portions of the Software.

    THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
    IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
    FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
    AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
    LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
    OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
    SOFTWARE
`,
      isDev: true
    },
    {
      id: "types-node",
      name: "@types/node",
      description: "TypeScript definitions for node",
      url: "https://github.com/DefinitelyTyped/DefinitelyTyped",
      homepage: "https://github.com/DefinitelyTyped/DefinitelyTyped/tree/master/types/node",
      licenseType: "MIT",
      license: `    MIT License

    Copyright (c) Microsoft Corporation.

    Permission is hereby granted, free of charge, to any person obtaining a copy
    of this software and associated documentation files (the "Software"), to deal
    in the Software without restriction, including without limitation the rights
    to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
    copies of the Software, and to permit persons to whom the Software is
    furnished to do so, subject to the following conditions:

    The above copyright notice and this permission notice shall be included in all
    copies or substantial portions of the Software.

    THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
    IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
    FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
    AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
    LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
    OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
    SOFTWARE
`,
      isDev: true
    },
    {
      id: "types-ua-parser-js",
      name: "@types/ua-parser-js",
      description: "TypeScript definitions for ua-parser-js",
      url: "https://github.com/DefinitelyTyped/DefinitelyTyped",
      homepage: "https://github.com/DefinitelyTyped/DefinitelyTyped/tree/master/types/ua-parser-js",
      licenseType: "MIT",
      license: `    MIT License

    Copyright (c) Microsoft Corporation.

    Permission is hereby granted, free of charge, to any person obtaining a copy
    of this software and associated documentation files (the "Software"), to deal
    in the Software without restriction, including without limitation the rights
    to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
    copies of the Software, and to permit persons to whom the Software is
    furnished to do so, subject to the following conditions:

    The above copyright notice and this permission notice shall be included in all
    copies or substantial portions of the Software.

    THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
    IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
    FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
    AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
    LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
    OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
    SOFTWARE
`,
      isDev: true
    },
    {
      id: "types-uuid",
      name: "@types/uuid",
      description: "TypeScript definitions for uuid",
      url: "https://github.com/DefinitelyTyped/DefinitelyTyped",
      homepage: "https://github.com/DefinitelyTyped/DefinitelyTyped/tree/master/types/uuid",
      licenseType: "MIT",
      license: `    MIT License

    Copyright (c) Microsoft Corporation.

    Permission is hereby granted, free of charge, to any person obtaining a copy
    of this software and associated documentation files (the "Software"), to deal
    in the Software without restriction, including without limitation the rights
    to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
    copies of the Software, and to permit persons to whom the Software is
    furnished to do so, subject to the following conditions:

    The above copyright notice and this permission notice shall be included in all
    copies or substantial portions of the Software.

    THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
    IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
    FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
    AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
    LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
    OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
    SOFTWARE
`,
      isDev: true
    },
    {
      id: "vitejs-plugin-basic-ssl",
      name: "@vitejs/plugin-basic-ssl",
      description: "A Vite plugin to generate untrusted certificates for HTTPS dev servers",
      url: "https://github.com/vitejs/vite-plugin-basic-ssl",
      homepage: "https://github.com/vitejs/vite-plugin-basic-ssl/#readme",
      licenseType: "MIT",
      license: `MIT License

Copyright (c) 2019-present, Yuxi (Evan) You and contributors

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
`,
      isDev: true
    },
    {
      id: "vitejs-plugin-vue",
      name: "@vitejs/plugin-vue",
      description: "The official plugin for Vue SFC support in Vite.",
      url: "https://github.com/vitejs/vite-plugin-vue",
      homepage: "https://github.com/vitejs/vite-plugin-vue/tree/main/packages/plugin-vue#readme",
      licenseType: "MIT",
      license: `MIT License

Copyright (c) 2019-present, Yuxi (Evan) You and Vite contributors

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
`,
      isDev: true
    },
    {
      id: "vue-eslint-config-typescript",
      name: "@vue/eslint-config-typescript",
      description: "ESLint config for TypeScript + Vue.js projects",
      url: "https://github.com/vuejs/eslint-config-typescript",
      homepage: "https://github.com/vuejs/eslint-config-typescript#readme",
      licenseType: "MIT",
      license: `MIT License

Copyright (c) 2018-present Evan You

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
`,
      isDev: true
    },
    {
      id: "vue-tsconfig",
      name: "@vue/tsconfig",
      description: "A base TSConfig for working with Vue.js",
      url: "https://github.com/vuejs/tsconfig",
      homepage: "https://github.com/vuejs/tsconfig#readme",
      licenseType: "MIT",
      license: `The MIT License (MIT)

Copyright (c) 2022-present vuejs

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
`,
      isDev: true
    },
    {
      id: "dotenv",
      name: "dotenv",
      description: "Loads environment variables from .env file",
      url: "https:////github.com/motdotla/dotenv",
      homepage: "https://github.com/motdotla/dotenv#readme",
      licenseType: "BSD-2-Clause",
      license: `Copyright (c) 2015, Scott Motte
All rights reserved.

Redistribution and use in source and binary forms, with or without
modification, are permitted provided that the following conditions are met:

* Redistributions of source code must retain the above copyright notice, this
  list of conditions and the following disclaimer.

* Redistributions in binary form must reproduce the above copyright notice,
  this list of conditions and the following disclaimer in the documentation
  and/or other materials provided with the distribution.

THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS"
AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE
IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE
DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT HOLDER OR CONTRIBUTORS BE LIABLE
FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL
DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR
SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER
CAUSED AND ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY,
OR TORT (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE
OF THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
`,
      isDev: true
    },
    {
      id: "globals",
      name: "globals",
      description: "Global identifiers from different JavaScript environments",
      url: "https://github.com/sindresorhus/globals",
      homepage: "https://github.com/sindresorhus/globals",
      licenseType: "MIT",
      license: "",
      isDev: true
    },
    {
      id: "naive-ui",
      name: "naive-ui",
      description: "A Vue 3 Component Library. Fairly Complete, Theme Customizable, Uses TypeScript, Fast",
      url: "https://github.com/tusen-ai/naive-ui",
      homepage: "https://www.naiveui.com",
      licenseType: "MIT",
      license: `MIT License

Copyright (c) 2021 TuSimple

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
`,
      isDev: true
    },
    {
      id: "oxlint",
      name: "oxlint",
      description: "Linter for the JavaScript Oxidation Compiler",
      url: "https://github.com/oxc-project/oxc",
      homepage: "https://oxc.rs/docs/guide/usage/linter",
      licenseType: "MIT",
      license: `MIT License

Copyright (c) 2024-present VoidZero Inc. & Contributors
Copyright (c) 2023 Boshen

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
`,
      isDev: true
    },
    {
      id: "oxlint-tsgolint",
      name: "oxlint-tsgolint",
      description: "High-performance type-aware TypeScript linter powered by typescript-go, for use with oxlint.",
      url: "https://github.com/github:oxc-project/tsgolint",
      homepage: "https://github.com/oxc-project/tsgolint#readme",
      licenseType: "MIT",
      license: `MIT License

Copyright (c) 2025 July-present VoidZero Inc. & Contributors
Copyright (c) 2025 July typescript-eslint and other contributors

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
`,
      isDev: true
    },
    {
      id: "typedoc",
      name: "typedoc",
      description: "Create api documentation for TypeScript projects.",
      url: "https:////github.com/TypeStrong/TypeDoc",
      homepage: "https://typedoc.org",
      licenseType: "Apache-2.0",
      license: `Apache License
                           Version 2.0, January 2004
                        http://www.apache.org/licenses/

   TERMS AND CONDITIONS FOR USE, REPRODUCTION, AND DISTRIBUTION

   1. Definitions.

      "License" shall mean the terms and conditions for use, reproduction,
      and distribution as defined by Sections 1 through 9 of this document.

      "Licensor" shall mean the copyright owner or entity authorized by
      the copyright owner that is granting the License.

      "Legal Entity" shall mean the union of the acting entity and all
      other entities that control, are controlled by, or are under common
      control with that entity. For the purposes of this definition,
      "control" means (i) the power, direct or indirect, to cause the
      direction or management of such entity, whether by contract or
      otherwise, or (ii) ownership of fifty percent (50%) or more of the
      outstanding shares, or (iii) beneficial ownership of such entity.

      "You" (or "Your") shall mean an individual or Legal Entity
      exercising permissions granted by this License.

      "Source" form shall mean the preferred form for making modifications,
      including but not limited to software source code, documentation
      source, and configuration files.

      "Object" form shall mean any form resulting from mechanical
      transformation or translation of a Source form, including but
      not limited to compiled object code, generated documentation,
      and conversions to other media types.

      "Work" shall mean the work of authorship, whether in Source or
      Object form, made available under the License, as indicated by a
      copyright notice that is included in or attached to the work
      (an example is provided in the Appendix below).

      "Derivative Works" shall mean any work, whether in Source or Object
      form, that is based on (or derived from) the Work and for which the
      editorial revisions, annotations, elaborations, or other modifications
      represent, as a whole, an original work of authorship. For the purposes
      of this License, Derivative Works shall not include works that remain
      separable from, or merely link (or bind by name) to the interfaces of,
      the Work and Derivative Works thereof.

      "Contribution" shall mean any work of authorship, including
      the original version of the Work and any modifications or additions
      to that Work or Derivative Works thereof, that is intentionally
      submitted to Licensor for inclusion in the Work by the copyright owner
      or by an individual or Legal Entity authorized to submit on behalf of
      the copyright owner. For the purposes of this definition, "submitted"
      means any form of electronic, verbal, or written communication sent
      to the Licensor or its representatives, including but not limited to
      communication on electronic mailing lists, source code control systems,
      and issue tracking systems that are managed by, or on behalf of, the
      Licensor for the purpose of discussing and improving the Work, but
      excluding communication that is conspicuously marked or otherwise
      designated in writing by the copyright owner as "Not a Contribution."

      "Contributor" shall mean Licensor and any individual or Legal Entity
      on behalf of whom a Contribution has been received by Licensor and
      subsequently incorporated within the Work.

   2. Grant of Copyright License. Subject to the terms and conditions of
      this License, each Contributor hereby grants to You a perpetual,
      worldwide, non-exclusive, no-charge, royalty-free, irrevocable
      copyright license to reproduce, prepare Derivative Works of,
      publicly display, publicly perform, sublicense, and distribute the
      Work and such Derivative Works in Source or Object form.

   3. Grant of Patent License. Subject to the terms and conditions of
      this License, each Contributor hereby grants to You a perpetual,
      worldwide, non-exclusive, no-charge, royalty-free, irrevocable
      (except as stated in this section) patent license to make, have made,
      use, offer to sell, sell, import, and otherwise transfer the Work,
      where such license applies only to those patent claims licensable
      by such Contributor that are necessarily infringed by their
      Contribution(s) alone or by combination of their Contribution(s)
      with the Work to which such Contribution(s) was submitted. If You
      institute patent litigation against any entity (including a
      cross-claim or counterclaim in a lawsuit) alleging that the Work
      or a Contribution incorporated within the Work constitutes direct
      or contributory patent infringement, then any patent licenses
      granted to You under this License for that Work shall terminate
      as of the date such litigation is filed.

   4. Redistribution. You may reproduce and distribute copies of the
      Work or Derivative Works thereof in any medium, with or without
      modifications, and in Source or Object form, provided that You
      meet the following conditions:

      (a) You must give any other recipients of the Work or
          Derivative Works a copy of this License; and

      (b) You must cause any modified files to carry prominent notices
          stating that You changed the files; and

      (c) You must retain, in the Source form of any Derivative Works
          that You distribute, all copyright, patent, trademark, and
          attribution notices from the Source form of the Work,
          excluding those notices that do not pertain to any part of
          the Derivative Works; and

      (d) If the Work includes a "NOTICE" text file as part of its
          distribution, then any Derivative Works that You distribute must
          include a readable copy of the attribution notices contained
          within such NOTICE file, excluding those notices that do not
          pertain to any part of the Derivative Works, in at least one
          of the following places: within a NOTICE text file distributed
          as part of the Derivative Works; within the Source form or
          documentation, if provided along with the Derivative Works; or,
          within a display generated by the Derivative Works, if and
          wherever such third-party notices normally appear. The contents
          of the NOTICE file are for informational purposes only and
          do not modify the License. You may add Your own attribution
          notices within Derivative Works that You distribute, alongside
          or as an addendum to the NOTICE text from the Work, provided
          that such additional attribution notices cannot be construed
          as modifying the License.

      You may add Your own copyright statement to Your modifications and
      may provide additional or different license terms and conditions
      for use, reproduction, or distribution of Your modifications, or
      for any such Derivative Works as a whole, provided Your use,
      reproduction, and distribution of the Work otherwise complies with
      the conditions stated in this License.

   5. Submission of Contributions. Unless You explicitly state otherwise,
      any Contribution intentionally submitted for inclusion in the Work
      by You to the Licensor shall be under the terms and conditions of
      this License, without any additional terms or conditions.
      Notwithstanding the above, nothing herein shall supersede or modify
      the terms of any separate license agreement you may have executed
      with Licensor regarding such Contributions.

   6. Trademarks. This License does not grant permission to use the trade
      names, trademarks, service marks, or product names of the Licensor,
      except as required for reasonable and customary use in describing the
      origin of the Work and reproducing the content of the NOTICE file.

   7. Disclaimer of Warranty. Unless required by applicable law or
      agreed to in writing, Licensor provides the Work (and each
      Contributor provides its Contributions) on an "AS IS" BASIS,
      WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or
      implied, including, without limitation, any warranties or conditions
      of TITLE, NON-INFRINGEMENT, MERCHANTABILITY, or FITNESS FOR A
      PARTICULAR PURPOSE. You are solely responsible for determining the
      appropriateness of using or redistributing the Work and assume any
      risks associated with Your exercise of permissions under this License.

   8. Limitation of Liability. In no event and under no legal theory,
      whether in tort (including negligence), contract, or otherwise,
      unless required by applicable law (such as deliberate and grossly
      negligent acts) or agreed to in writing, shall any Contributor be
      liable to You for damages, including any direct, indirect, special,
      incidental, or consequential damages of any character arising as a
      result of this License or out of the use or inability to use the
      Work (including but not limited to damages for loss of goodwill,
      work stoppage, computer failure or malfunction, or any and all
      other commercial damages or losses), even if such Contributor
      has been advised of the possibility of such damages.

   9. Accepting Warranty or Additional Liability. While redistributing
      the Work or Derivative Works thereof, You may choose to offer,
      and charge a fee for, acceptance of support, warranty, indemnity,
      or other liability obligations and/or rights consistent with this
      License. However, in accepting such obligations, You may act only
      on Your own behalf and on Your sole responsibility, not on behalf
      of any other Contributor, and only if You agree to indemnify,
      defend, and hold each Contributor harmless for any liability
      incurred by, or claims asserted against, such Contributor by reason
      of your accepting any such warranty or additional liability.

   END OF TERMS AND CONDITIONS

   APPENDIX: How to apply the Apache License to your work.

      To apply the Apache License to your work, attach the following
      boilerplate notice, with the fields enclosed by brackets "{}"
      replaced with your own identifying information. (Don't include
      the brackets!)  The text should be enclosed in the appropriate
      comment syntax for the file format. We also recommend that a
      file or class name and description of purpose be included on the
      same "printed page" as the copyright notice for easier
      identification within third-party archives.

   Copyright {yyyy} {name of copyright owner}

   Licensed under the Apache License, Version 2.0 (the "License");
   you may not use this file except in compliance with the License.
   You may obtain a copy of the License at

       http://www.apache.org/licenses/LICENSE-2.0

   Unless required by applicable law or agreed to in writing, software
   distributed under the License is distributed on an "AS IS" BASIS,
   WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   See the License for the specific language governing permissions and
   limitations under the License.`,
      isDev: true
    },
    {
      id: "typedoc-plugin-markdown",
      name: "typedoc-plugin-markdown",
      description: "A plugin for TypeDoc that enables TypeScript API documentation to be generated in Markdown.",
      url: "https://github.com/typedoc2md/typedoc-plugin-markdown",
      homepage: "https://typedoc-plugin-markdown.org",
      licenseType: "MIT",
      license: `MIT License

Copyright (c) 2024 Thomas Grey

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
`,
      isDev: true
    },
    {
      id: "vite",
      name: "vite",
      description: "Native-ESM powered web dev build tool",
      url: "https://github.com/vitejs/vite",
      homepage: "https://vite.dev",
      licenseType: "MIT",
      license: `# Vite core license
Vite is released under the MIT license:

MIT License

Copyright (c) 2019-present, VoidZero Inc. and Vite contributors

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.

# Licenses of bundled dependencies
The published Vite artifact additionally contains code with the following licenses:
BSD-2-Clause, CC0-1.0, ISC, MIT

# Bundled dependencies:
## @jridgewell/gen-mapping, @jridgewell/remapping, @jridgewell/sourcemap-codec, @jridgewell/trace-mapping
License: MIT
By: Justin Ridgewell
Repositories: https://github.com/jridgewell/sourcemaps, https://github.com/jridgewell/sourcemaps, https://github.com/jridgewell/sourcemaps, https://github.com/jridgewell/sourcemaps

> Copyright 2024 Justin Ridgewell <justin@ridgewell.name>
> 
> Permission is hereby granted, free of charge, to any person obtaining a copy
> of this software and associated documentation files (the "Software"), to deal
> in the Software without restriction, including without limitation the rights
> to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
> copies of the Software, and to permit persons to whom the Software is
> furnished to do so, subject to the following conditions:
> 
> The above copyright notice and this permission notice shall be included in
> all copies or substantial portions of the Software.
> 
> THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
> IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
> FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
> AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
> LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
> OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
> SOFTWARE.

---------------------------------------

## @jridgewell/resolve-uri
License: MIT
By: Justin Ridgewell
Repository: https://github.com/jridgewell/resolve-uri

> Copyright 2019 Justin Ridgewell <jridgewell@google.com>
> 
> Permission is hereby granted, free of charge, to any person obtaining a copy
> of this software and associated documentation files (the "Software"), to deal
> in the Software without restriction, including without limitation the rights
> to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
> copies of the Software, and to permit persons to whom the Software is
> furnished to do so, subject to the following conditions:
> 
> The above copyright notice and this permission notice shall be included in
> all copies or substantial portions of the Software.
> 
> THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
> IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
> FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
> AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
> LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
> OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
> SOFTWARE.

---------------------------------------

## @polka/compression
License: MIT
Repository: https://github.com/lukeed/polka

---------------------------------------

## @polka/url
License: MIT
By: Luke Edwards
Repository: https://github.com/lukeed/polka

---------------------------------------

## @rolldown/pluginutils
License: MIT
Repository: https://github.com/rolldown/rolldown

> MIT License
> 
> Copyright (c) 2024-present VoidZero Inc. & Contributors
> 
> Permission is hereby granted, free of charge, to any person obtaining a copy
> of this software and associated documentation files (the "Software"), to deal
> in the Software without restriction, including without limitation the rights
> to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
> copies of the Software, and to permit persons to whom the Software is
> furnished to do so, subject to the following conditions:
> 
> The above copyright notice and this permission notice shall be included in all
> copies or substantial portions of the Software.
> 
> THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
> IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
> FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
> AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
> LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
> OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
> SOFTWARE.
> 
> end of terms and conditions
> 
> The licenses of externally maintained libraries from which parts of the Software is derived are listed [here](https://github.com/rolldown/rolldown/blob/main/THIRD-PARTY-LICENSE).

---------------------------------------

## @rollup/plugin-alias, @rollup/plugin-commonjs, @rollup/plugin-dynamic-import-vars, @rollup/pluginutils
License: MIT
By: Johannes Stein
Repository: https://github.com/rollup/plugins

License: MIT
By: Rich Harris
Repository: https://github.com/rollup/plugins

License: MIT
By: LarsDenBakker
Repository: https://github.com/rollup/plugins

License: MIT
By: Rich Harris
Repository: https://github.com/rollup/plugins

> The MIT License (MIT)
> 
> Copyright (c) 2019 RollupJS Plugin Contributors (https://github.com/rollup/plugins/graphs/contributors)
> 
> Permission is hereby granted, free of charge, to any person obtaining a copy
> of this software and associated documentation files (the "Software"), to deal
> in the Software without restriction, including without limitation the rights
> to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
> copies of the Software, and to permit persons to whom the Software is
> furnished to do so, subject to the following conditions:
> 
> The above copyright notice and this permission notice shall be included in
> all copies or substantial portions of the Software.
> 
> THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
> IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
> FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
> AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
> LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
> OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
> THE SOFTWARE.

---------------------------------------

## anymatch
License: ISC
By: Elan Shanker
Repository: https://github.com/micromatch/anymatch

> The ISC License
> 
> Copyright (c) 2019 Elan Shanker, Paul Miller (https://paulmillr.com)
> 
> Permission to use, copy, modify, and/or distribute this software for any
> purpose with or without fee is hereby granted, provided that the above
> copyright notice and this permission notice appear in all copies.
> 
> THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
> WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
> MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
> ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
> WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
> ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF OR
> IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.

---------------------------------------

## artichokie
License: MIT
By: sapphi-red, Evan You
Repository: https://github.com/sapphi-red/artichokie

> MIT License
> 
> Copyright (c) 2020-present, Yuxi (Evan) You
> Copyright (c) 2023-present, sapphi-red
> 
> Permission is hereby granted, free of charge, to any person obtaining a copy
> of this software and associated documentation files (the "Software"), to deal
> in the Software without restriction, including without limitation the rights
> to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
> copies of the Software, and to permit persons to whom the Software is
> furnished to do so, subject to the following conditions:
> 
> The above copyright notice and this permission notice shall be included in all
> copies or substantial portions of the Software.
> 
> THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
> IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
> FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
> AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
> LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
> OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
> SOFTWARE.

---------------------------------------

## binary-extensions
License: MIT
By: Sindre Sorhus
Repository: https://github.com/sindresorhus/binary-extensions

> MIT License
> 
> Copyright (c) Sindre Sorhus <sindresorhus@gmail.com> (https://sindresorhus.com)
> Copyright (c) Paul Miller (https://paulmillr.com)
> 
> Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:
> 
> The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
> 
> THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.

---------------------------------------

## braces, fill-range, is-number
License: MIT
By: Jon Schlinkert, Brian Woodward, Elan Shanker, Eugene Sharygin, hemanth.hm
Repository: https://github.com/micromatch/braces

License: MIT
By: Jon Schlinkert, Edo Rivai, Paul Miller, Rouven We\xDFling
Repository: https://github.com/jonschlinkert/fill-range

License: MIT
By: Jon Schlinkert, Olsten Larck, Rouven We\xDFling
Repository: https://github.com/jonschlinkert/is-number

> The MIT License (MIT)
> 
> Copyright (c) 2014-present, Jon Schlinkert.
> 
> Permission is hereby granted, free of charge, to any person obtaining a copy
> of this software and associated documentation files (the "Software"), to deal
> in the Software without restriction, including without limitation the rights
> to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
> copies of the Software, and to permit persons to whom the Software is
> furnished to do so, subject to the following conditions:
> 
> The above copyright notice and this permission notice shall be included in
> all copies or substantial portions of the Software.
> 
> THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
> IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
> FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
> AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
> LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
> OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
> THE SOFTWARE.

---------------------------------------

## bundle-name, default-browser, default-browser-id, define-lazy-prop, is-docker, is-inside-container, is-wsl, open, run-applescript, wsl-utils
License: MIT
By: Sindre Sorhus
Repositories: https://github.com/sindresorhus/bundle-name, https://github.com/sindresorhus/default-browser, https://github.com/sindresorhus/default-browser-id, https://github.com/sindresorhus/define-lazy-prop, https://github.com/sindresorhus/is-docker, https://github.com/sindresorhus/is-inside-container, https://github.com/sindresorhus/is-wsl, https://github.com/sindresorhus/open, https://github.com/sindresorhus/run-applescript, https://github.com/sindresorhus/wsl-utils

> MIT License
> 
> Copyright (c) Sindre Sorhus <sindresorhus@gmail.com> (https://sindresorhus.com)
> 
> Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:
> 
> The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
> 
> THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.

---------------------------------------

## cac
License: MIT
By: egoist
Repository: https://github.com/egoist/cac

> The MIT License (MIT)
> 
> Copyright (c) EGOIST <0x142857@gmail.com> (https://github.com/egoist)
> 
> Permission is hereby granted, free of charge, to any person obtaining a copy
> of this software and associated documentation files (the "Software"), to deal
> in the Software without restriction, including without limitation the rights
> to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
> copies of the Software, and to permit persons to whom the Software is
> furnished to do so, subject to the following conditions:
> 
> The above copyright notice and this permission notice shall be included in
> all copies or substantial portions of the Software.
> 
> THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
> IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
> FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
> AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
> LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
> OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
> THE SOFTWARE.

---------------------------------------

## chokidar
License: MIT
By: Paul Miller, Elan Shanker
Repository: https://github.com/paulmillr/chokidar

> The MIT License (MIT)
> 
> Copyright (c) 2012-2019 Paul Miller (https://paulmillr.com), Elan Shanker
> 
> Permission is hereby granted, free of charge, to any person obtaining a copy
> of this software and associated documentation files (the \u201CSoftware\u201D), to deal
> in the Software without restriction, including without limitation the rights
> to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
> copies of the Software, and to permit persons to whom the Software is
> furnished to do so, subject to the following conditions:
> 
> The above copyright notice and this permission notice shall be included in
> all copies or substantial portions of the Software.
> 
> THE SOFTWARE IS PROVIDED \u201CAS IS\u201D, WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
> IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
> FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
> AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
> LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
> OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
> THE SOFTWARE.

---------------------------------------

## commondir, shell-quote
License: MIT
By: James Halliday
Repositories: http://github.com/substack/node-commondir, http://github.com/ljharb/shell-quote

> The MIT License
> 
> Copyright (c) 2013 James Halliday (mail@substack.net)
> 
> Permission is hereby granted, free of charge, 
> to any person obtaining a copy of this software and 
> associated documentation files (the "Software"), to 
> deal in the Software without restriction, including 
> without limitation the rights to use, copy, modify, 
> merge, publish, distribute, sublicense, and/or sell 
> copies of the Software, and to permit persons to whom 
> the Software is furnished to do so, 
> subject to the following conditions:
> 
> The above copyright notice and this permission notice 
> shall be included in all copies or substantial portions of the Software.
> 
> THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, 
> EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES 
> OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. 
> IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR 
> ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, 
> TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE 
> SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.

---------------------------------------

## connect
License: MIT
By: TJ Holowaychuk, Douglas Christopher Wilson, Jonathan Ong, Tim Caswell
Repository: https://github.com/senchalabs/connect

> (The MIT License)
> 
> Copyright (c) 2010 Sencha Inc.
> Copyright (c) 2011 LearnBoost
> Copyright (c) 2011-2014 TJ Holowaychuk
> Copyright (c) 2015 Douglas Christopher Wilson
> 
> Permission is hereby granted, free of charge, to any person obtaining
> a copy of this software and associated documentation files (the
> 'Software'), to deal in the Software without restriction, including
> without limitation the rights to use, copy, modify, merge, publish,
> distribute, sublicense, and/or sell copies of the Software, and to
> permit persons to whom the Software is furnished to do so, subject to
> the following conditions:
> 
> The above copyright notice and this permission notice shall be
> included in all copies or substantial portions of the Software.
> 
> THE SOFTWARE IS PROVIDED 'AS IS', WITHOUT WARRANTY OF ANY KIND,
> EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
> MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT.
> IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY
> CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT,
> TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE
> SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.

---------------------------------------

## convert-source-map
License: MIT
By: Thorsten Lorenz
Repository: https://github.com/thlorenz/convert-source-map

> Copyright 2013 Thorsten Lorenz. 
> All rights reserved.
> 
> Permission is hereby granted, free of charge, to any person
> obtaining a copy of this software and associated documentation
> files (the "Software"), to deal in the Software without
> restriction, including without limitation the rights to use,
> copy, modify, merge, publish, distribute, sublicense, and/or sell
> copies of the Software, and to permit persons to whom the
> Software is furnished to do so, subject to the following
> conditions:
> 
> The above copyright notice and this permission notice shall be
> included in all copies or substantial portions of the Software.
> 
> THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
> EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES
> OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND
> NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT
> HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY,
> WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING
> FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR
> OTHER DEALINGS IN THE SOFTWARE.

---------------------------------------

## cors
License: MIT
By: Troy Goode
Repository: https://github.com/expressjs/cors

> (The MIT License)
> 
> Copyright (c) 2013 Troy Goode <troygoode@gmail.com>
> 
> Permission is hereby granted, free of charge, to any person obtaining
> a copy of this software and associated documentation files (the
> 'Software'), to deal in the Software without restriction, including
> without limitation the rights to use, copy, modify, merge, publish,
> distribute, sublicense, and/or sell copies of the Software, and to
> permit persons to whom the Software is furnished to do so, subject to
> the following conditions:
> 
> The above copyright notice and this permission notice shall be
> included in all copies or substantial portions of the Software.
> 
> THE SOFTWARE IS PROVIDED 'AS IS', WITHOUT WARRANTY OF ANY KIND,
> EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
> MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT.
> IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY
> CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT,
> TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE
> SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.

---------------------------------------

## cross-spawn
License: MIT
By: Andr\xE9 Cruz
Repository: https://github.com/moxystudio/node-cross-spawn

> The MIT License (MIT)
> 
> Copyright (c) 2018 Made With MOXY Lda <hello@moxy.studio>
> 
> Permission is hereby granted, free of charge, to any person obtaining a copy
> of this software and associated documentation files (the "Software"), to deal
> in the Software without restriction, including without limitation the rights
> to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
> copies of the Software, and to permit persons to whom the Software is
> furnished to do so, subject to the following conditions:
> 
> The above copyright notice and this permission notice shall be included in
> all copies or substantial portions of the Software.
> 
> THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
> IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
> FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
> AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
> LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
> OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
> THE SOFTWARE.

---------------------------------------

## cssesc
License: MIT
By: Mathias Bynens
Repository: https://github.com/mathiasbynens/cssesc

> Copyright Mathias Bynens <https://mathiasbynens.be/>
> 
> Permission is hereby granted, free of charge, to any person obtaining
> a copy of this software and associated documentation files (the
> "Software"), to deal in the Software without restriction, including
> without limitation the rights to use, copy, modify, merge, publish,
> distribute, sublicense, and/or sell copies of the Software, and to
> permit persons to whom the Software is furnished to do so, subject to
> the following conditions:
> 
> The above copyright notice and this permission notice shall be
> included in all copies or substantial portions of the Software.
> 
> THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
> EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
> MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND
> NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE
> LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION
> OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION
> WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.

---------------------------------------

## dotenv
License: BSD-2-Clause
Repository: https://github.com/motdotla/dotenv

> Copyright (c) 2015, Scott Motte
> All rights reserved.
> 
> Redistribution and use in source and binary forms, with or without
> modification, are permitted provided that the following conditions are met:
> 
> * Redistributions of source code must retain the above copyright notice, this
>   list of conditions and the following disclaimer.
> 
> * Redistributions in binary form must reproduce the above copyright notice,
>   this list of conditions and the following disclaimer in the documentation
>   and/or other materials provided with the distribution.
> 
> THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS"
> AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE
> IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE
> DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT HOLDER OR CONTRIBUTORS BE LIABLE
> FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL
> DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR
> SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER
> CAUSED AND ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY,
> OR TORT (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE
> OF THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.

---------------------------------------

## dotenv-expand
License: BSD-2-Clause
By: motdotla
Repository: https://github.com/motdotla/dotenv-expand

> Copyright (c) 2016, Scott Motte
> All rights reserved.
> 
> Redistribution and use in source and binary forms, with or without
> modification, are permitted provided that the following conditions are met:
> 
> * Redistributions of source code must retain the above copyright notice, this
>   list of conditions and the following disclaimer.
> 
> * Redistributions in binary form must reproduce the above copyright notice,
>   this list of conditions and the following disclaimer in the documentation
>   and/or other materials provided with the distribution.
> 
> THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS"
> AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE
> IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE
> DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT HOLDER OR CONTRIBUTORS BE LIABLE
> FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL
> DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR
> SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER
> CAUSED AND ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY,
> OR TORT (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE
> OF THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.

---------------------------------------

## ee-first
License: MIT
By: Jonathan Ong, Douglas Christopher Wilson
Repository: https://github.com/jonathanong/ee-first

> The MIT License (MIT)
> 
> Copyright (c) 2014 Jonathan Ong me@jongleberry.com
> 
> Permission is hereby granted, free of charge, to any person obtaining a copy
> of this software and associated documentation files (the "Software"), to deal
> in the Software without restriction, including without limitation the rights
> to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
> copies of the Software, and to permit persons to whom the Software is
> furnished to do so, subject to the following conditions:
> 
> The above copyright notice and this permission notice shall be included in
> all copies or substantial portions of the Software.
> 
> THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
> IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
> FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
> AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
> LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
> OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
> THE SOFTWARE.

---------------------------------------

## encodeurl
License: MIT
By: Douglas Christopher Wilson
Repository: https://github.com/pillarjs/encodeurl

> (The MIT License)
> 
> Copyright (c) 2016 Douglas Christopher Wilson
> 
> Permission is hereby granted, free of charge, to any person obtaining
> a copy of this software and associated documentation files (the
> 'Software'), to deal in the Software without restriction, including
> without limitation the rights to use, copy, modify, merge, publish,
> distribute, sublicense, and/or sell copies of the Software, and to
> permit persons to whom the Software is furnished to do so, subject to
> the following conditions:
> 
> The above copyright notice and this permission notice shall be
> included in all copies or substantial portions of the Software.
> 
> THE SOFTWARE IS PROVIDED 'AS IS', WITHOUT WARRANTY OF ANY KIND,
> EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
> MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT.
> IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY
> CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT,
> TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE
> SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.

---------------------------------------

## entities
License: BSD-2-Clause
By: Felix Boehm
Repository: https://github.com/fb55/entities

> Copyright (c) Felix B\xF6hm
> All rights reserved.
> 
> Redistribution and use in source and binary forms, with or without modification, are permitted provided that the following conditions are met:
> 
> Redistributions of source code must retain the above copyright notice, this list of conditions and the following disclaimer.
> 
> Redistributions in binary form must reproduce the above copyright notice, this list of conditions and the following disclaimer in the documentation and/or other materials provided with the distribution.
> 
> THIS IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS" AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT HOLDER OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS,
> EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.

---------------------------------------

## es-module-lexer
License: MIT
By: Guy Bedford
Repository: https://github.com/guybedford/es-module-lexer

> MIT License
> -----------
> 
> Copyright (C) 2018-2022 Guy Bedford
> 
> Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:
> 
> The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
> 
> THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.

---------------------------------------

## escape-html
License: MIT
Repository: https://github.com/component/escape-html

> (The MIT License)
> 
> Copyright (c) 2012-2013 TJ Holowaychuk
> Copyright (c) 2015 Andreas Lubbe
> Copyright (c) 2015 Tiancheng "Timothy" Gu
> 
> Permission is hereby granted, free of charge, to any person obtaining
> a copy of this software and associated documentation files (the
> 'Software'), to deal in the Software without restriction, including
> without limitation the rights to use, copy, modify, merge, publish,
> distribute, sublicense, and/or sell copies of the Software, and to
> permit persons to whom the Software is furnished to do so, subject to
> the following conditions:
> 
> The above copyright notice and this permission notice shall be
> included in all copies or substantial portions of the Software.
> 
> THE SOFTWARE IS PROVIDED 'AS IS', WITHOUT WARRANTY OF ANY KIND,
> EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
> MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT.
> IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY
> CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT,
> TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE
> SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.

---------------------------------------

## estree-walker
License: MIT
By: Rich Harris
Repository: https://github.com/Rich-Harris/estree-walker

> Copyright (c) 2015-20 [these people](https://github.com/Rich-Harris/estree-walker/graphs/contributors)
> 
> Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:
> 
> The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
> 
> THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.

---------------------------------------

## etag
License: MIT
By: Douglas Christopher Wilson, David Bj\xF6rklund
Repository: https://github.com/jshttp/etag

> (The MIT License)
> 
> Copyright (c) 2014-2016 Douglas Christopher Wilson
> 
> Permission is hereby granted, free of charge, to any person obtaining
> a copy of this software and associated documentation files (the
> 'Software'), to deal in the Software without restriction, including
> without limitation the rights to use, copy, modify, merge, publish,
> distribute, sublicense, and/or sell copies of the Software, and to
> permit persons to whom the Software is furnished to do so, subject to
> the following conditions:
> 
> The above copyright notice and this permission notice shall be
> included in all copies or substantial portions of the Software.
> 
> THE SOFTWARE IS PROVIDED 'AS IS', WITHOUT WARRANTY OF ANY KIND,
> EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
> MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT.
> IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY
> CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT,
> TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE
> SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.

---------------------------------------

## finalhandler
License: MIT
By: Douglas Christopher Wilson
Repository: https://github.com/pillarjs/finalhandler

> (The MIT License)
> 
> Copyright (c) 2014-2017 Douglas Christopher Wilson <doug@somethingdoug.com>
> 
> Permission is hereby granted, free of charge, to any person obtaining
> a copy of this software and associated documentation files (the
> 'Software'), to deal in the Software without restriction, including
> without limitation the rights to use, copy, modify, merge, publish,
> distribute, sublicense, and/or sell copies of the Software, and to
> permit persons to whom the Software is furnished to do so, subject to
> the following conditions:
> 
> The above copyright notice and this permission notice shall be
> included in all copies or substantial portions of the Software.
> 
> THE SOFTWARE IS PROVIDED 'AS IS', WITHOUT WARRANTY OF ANY KIND,
> EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
> MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT.
> IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY
> CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT,
> TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE
> SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.

---------------------------------------

## follow-redirects
License: MIT
By: Ruben Verborgh, Olivier Lalonde, James Talmage
Repository: https://github.com/follow-redirects/follow-redirects

> Copyright 2014\u2013present Olivier Lalonde <olalonde@gmail.com>, James Talmage <james@talmage.io>, Ruben Verborgh
> 
> Permission is hereby granted, free of charge, to any person obtaining a copy of
> this software and associated documentation files (the "Software"), to deal in
> the Software without restriction, including without limitation the rights to
> use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies
> of the Software, and to permit persons to whom the Software is furnished to do
> so, subject to the following conditions:
> 
> The above copyright notice and this permission notice shall be included in all
> copies or substantial portions of the Software.
> 
> THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
> IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
> FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
> AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY,
> WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR
> IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.

---------------------------------------

## generic-names
License: MIT
By: Alexey Litvinov
Repository: https://github.com/css-modules/generic-names

> The MIT License (MIT)
> 
> Copyright (c) 2015 Alexey Litvinov
> 
> Permission is hereby granted, free of charge, to any person obtaining a copy
> of this software and associated documentation files (the "Software"), to deal
> in the Software without restriction, including without limitation the rights
> to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
> copies of the Software, and to permit persons to whom the Software is
> furnished to do so, subject to the following conditions:
> 
> The above copyright notice and this permission notice shall be included in all
> copies or substantial portions of the Software.
> 
> THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
> IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
> FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
> AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
> LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
> OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
> SOFTWARE.

---------------------------------------

## glob-parent
License: ISC
By: Gulp Team, Elan Shanker, Blaine Bublitz
Repository: https://github.com/gulpjs/glob-parent

> The ISC License
> 
> Copyright (c) 2015, 2019 Elan Shanker
> 
> Permission to use, copy, modify, and/or distribute this software for any
> purpose with or without fee is hereby granted, provided that the above
> copyright notice and this permission notice appear in all copies.
> 
> THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
> WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
> MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
> ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
> WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
> ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF OR
> IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.

---------------------------------------

## host-validation-middleware
License: MIT
By: sapphi-red
Repository: https://github.com/sapphi-red/host-validation-middleware

> MIT License
> 
> Copyright (c) 2025 sapphi-red
> 
> Permission is hereby granted, free of charge, to any person obtaining a copy
> of this software and associated documentation files (the "Software"), to deal
> in the Software without restriction, including without limitation the rights
> to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
> copies of the Software, and to permit persons to whom the Software is
> furnished to do so, subject to the following conditions:
> 
> The above copyright notice and this permission notice shall be included in all
> copies or substantial portions of the Software.
> 
> THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
> IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
> FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
> AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
> LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
> OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
> SOFTWARE.

---------------------------------------

## http-proxy-3
License: MIT
By: William Stein, Charlie Robbins, Jimb Esser, jcrugzz
Repository: https://github.com/sagemathinc/http-proxy-3

> node-http-3
> 
> Copyright (c) 2010-2025 William Stein, Charlie Robbins, Jarrett Cruger & the Contributors.
> 
> Permission is hereby granted, free of charge, to any person obtaining
> a copy of this software and associated documentation files (the
> "Software"), to deal in the Software without restriction, including
> without limitation the rights to use, copy, modify, merge, publish,
> distribute, sublicense, and/or sell copies of the Software, and to
> permit persons to whom the Software is furnished to do so, subject to
> the following conditions:
> 
> The above copyright notice and this permission notice shall be
> included in all copies or substantial portions of the Software.
> 
> THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
> EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
> MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND
> NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE
> LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION
> OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION
> WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.

---------------------------------------

## icss-utils
License: ISC
By: Glen Maddern
Repository: https://github.com/css-modules/icss-utils

> ISC License (ISC)
> Copyright 2018 Glen Maddern
> 
> Permission to use, copy, modify, and/or distribute this software for any purpose with or without fee is hereby granted, provided that the above copyright notice and this permission notice appear in all copies.
> 
> THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.

---------------------------------------

## is-binary-path
License: MIT
By: Sindre Sorhus
Repository: https://github.com/sindresorhus/is-binary-path

> MIT License
> 
> Copyright (c) 2019 Sindre Sorhus <sindresorhus@gmail.com> (https://sindresorhus.com), Paul Miller (https://paulmillr.com)
> 
> Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:
> 
> The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
> 
> THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.

---------------------------------------

## is-extglob
License: MIT
By: Jon Schlinkert
Repository: https://github.com/jonschlinkert/is-extglob

> The MIT License (MIT)
> 
> Copyright (c) 2014-2016, Jon Schlinkert
> 
> Permission is hereby granted, free of charge, to any person obtaining a copy
> of this software and associated documentation files (the "Software"), to deal
> in the Software without restriction, including without limitation the rights
> to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
> copies of the Software, and to permit persons to whom the Software is
> furnished to do so, subject to the following conditions:
> 
> The above copyright notice and this permission notice shall be included in
> all copies or substantial portions of the Software.
> 
> THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
> IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
> FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
> AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
> LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
> OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
> THE SOFTWARE.

---------------------------------------

## is-glob
License: MIT
By: Jon Schlinkert, Brian Woodward, Daniel Perez
Repository: https://github.com/micromatch/is-glob

> The MIT License (MIT)
> 
> Copyright (c) 2014-2017, Jon Schlinkert.
> 
> Permission is hereby granted, free of charge, to any person obtaining a copy
> of this software and associated documentation files (the "Software"), to deal
> in the Software without restriction, including without limitation the rights
> to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
> copies of the Software, and to permit persons to whom the Software is
> furnished to do so, subject to the following conditions:
> 
> The above copyright notice and this permission notice shall be included in
> all copies or substantial portions of the Software.
> 
> THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
> IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
> FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
> AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
> LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
> OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
> THE SOFTWARE.

---------------------------------------

## is-reference
License: MIT
By: Rich Harris
Repository: https://github.com/Rich-Harris/is-reference

---------------------------------------

## isexe, which
License: ISC
By: Isaac Z. Schlueter
Repositories: https://github.com/isaacs/isexe, https://github.com/isaacs/node-which

> The ISC License
> 
> Copyright (c) Isaac Z. Schlueter and Contributors
> 
> Permission to use, copy, modify, and/or distribute this software for any
> purpose with or without fee is hereby granted, provided that the above
> copyright notice and this permission notice appear in all copies.
> 
> THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
> WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
> MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
> ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
> WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
> ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF OR
> IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.

---------------------------------------

## js-tokens
License: MIT
By: Simon Lydell
Repository: https://github.com/lydell/js-tokens

> The MIT License (MIT)
> 
> Copyright (c) 2014, 2015, 2016, 2017, 2018, 2019, 2020, 2021, 2022, 2023, 2024 Simon Lydell
> 
> Permission is hereby granted, free of charge, to any person obtaining a copy
> of this software and associated documentation files (the "Software"), to deal
> in the Software without restriction, including without limitation the rights
> to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
> copies of the Software, and to permit persons to whom the Software is
> furnished to do so, subject to the following conditions:
> 
> The above copyright notice and this permission notice shall be included in
> all copies or substantial portions of the Software.
> 
> THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
> IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
> FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
> AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
> LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
> OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
> THE SOFTWARE.

---------------------------------------

## launch-editor, launch-editor-middleware
License: MIT
By: Evan You
Repositories: https://github.com/yyx990803/launch-editor, https://github.com/yyx990803/launch-editor

> The MIT License (MIT)
> 
> Copyright (c) 2017-present, Yuxi (Evan) You
> 
> Permission is hereby granted, free of charge, to any person obtaining a copy
> of this software and associated documentation files (the "Software"), to deal
> in the Software without restriction, including without limitation the rights
> to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
> copies of the Software, and to permit persons to whom the Software is
> furnished to do so, subject to the following conditions:
> 
> The above copyright notice and this permission notice shall be included in
> all copies or substantial portions of the Software.
> 
> THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
> IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
> FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
> AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
> LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
> OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
> THE SOFTWARE.

---------------------------------------

## lilconfig
License: MIT
By: antonk52
Repository: https://github.com/antonk52/lilconfig

> MIT License
> 
> Copyright (c) 2022 Anton Kastritskiy
> 
> Permission is hereby granted, free of charge, to any person obtaining a copy
> of this software and associated documentation files (the "Software"), to deal
> in the Software without restriction, including without limitation the rights
> to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
> copies of the Software, and to permit persons to whom the Software is
> furnished to do so, subject to the following conditions:
> 
> The above copyright notice and this permission notice shall be included in all
> copies or substantial portions of the Software.
> 
> THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
> IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
> FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
> AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
> LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
> OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
> SOFTWARE.

---------------------------------------

## loader-utils
License: MIT
By: Tobias Koppers @sokra
Repository: https://github.com/webpack/loader-utils

> Copyright JS Foundation and other contributors
> 
> Permission is hereby granted, free of charge, to any person obtaining
> a copy of this software and associated documentation files (the
> 'Software'), to deal in the Software without restriction, including
> without limitation the rights to use, copy, modify, merge, publish,
> distribute, sublicense, and/or sell copies of the Software, and to
> permit persons to whom the Software is furnished to do so, subject to
> the following conditions:
> 
> The above copyright notice and this permission notice shall be
> included in all copies or substantial portions of the Software.
> 
> THE SOFTWARE IS PROVIDED 'AS IS', WITHOUT WARRANTY OF ANY KIND,
> EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
> MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT.
> IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY
> CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT,
> TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE
> SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.

---------------------------------------

## lodash.camelcase
License: MIT
By: John-David Dalton, Blaine Bublitz, Mathias Bynens
Repository: https://github.com/lodash/lodash

> Copyright jQuery Foundation and other contributors <https://jquery.org/>
> 
> Based on Underscore.js, copyright Jeremy Ashkenas,
> DocumentCloud and Investigative Reporters & Editors <http://underscorejs.org/>
> 
> This software consists of voluntary contributions made by many
> individuals. For exact contribution history, see the revision history
> available at https://github.com/lodash/lodash
> 
> The following license applies to all parts of this software except as
> documented below:
> 
> ====
> 
> Permission is hereby granted, free of charge, to any person obtaining
> a copy of this software and associated documentation files (the
> "Software"), to deal in the Software without restriction, including
> without limitation the rights to use, copy, modify, merge, publish,
> distribute, sublicense, and/or sell copies of the Software, and to
> permit persons to whom the Software is furnished to do so, subject to
> the following conditions:
> 
> The above copyright notice and this permission notice shall be
> included in all copies or substantial portions of the Software.
> 
> THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
> EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
> MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND
> NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE
> LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION
> OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION
> WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
> 
> ====
> 
> Copyright and related rights for sample code are waived via CC0. Sample
> code is defined as all source code displayed within the prose of the
> documentation.
> 
> CC0: http://creativecommons.org/publicdomain/zero/1.0/
> 
> ====
> 
> Files located in the node_modules and vendor directories are externally
> maintained libraries used by this software which have their own
> licenses; we recommend you read them, as their terms may differ from the
> terms above.

---------------------------------------

## magic-string
License: MIT
By: Rich Harris
Repository: https://github.com/Rich-Harris/magic-string

> Copyright 2018 Rich Harris
> 
> Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:
> 
> The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
> 
> THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.

---------------------------------------

## mlly, ufo
License: MIT
Repositories: https://github.com/unjs/mlly, https://github.com/unjs/ufo

> MIT License
> 
> Copyright (c) Pooya Parsa <pooya@pi0.io>
> 
> Permission is hereby granted, free of charge, to any person obtaining a copy
> of this software and associated documentation files (the "Software"), to deal
> in the Software without restriction, including without limitation the rights
> to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
> copies of the Software, and to permit persons to whom the Software is
> furnished to do so, subject to the following conditions:
> 
> The above copyright notice and this permission notice shall be included in all
> copies or substantial portions of the Software.
> 
> THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
> IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
> FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
> AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
> LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
> OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
> SOFTWARE.

---------------------------------------

## mrmime
License: MIT
By: Luke Edwards
Repository: https://github.com/lukeed/mrmime

> The MIT License (MIT)
> 
> Copyright (c) Luke Edwards <luke.edwards05@gmail.com> (https://lukeed.com)
> 
> Permission is hereby granted, free of charge, to any person obtaining a copy
> of this software and associated documentation files (the "Software"), to deal
> in the Software without restriction, including without limitation the rights
> to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
> copies of the Software, and to permit persons to whom the Software is
> furnished to do so, subject to the following conditions:
> 
> The above copyright notice and this permission notice shall be included in
> all copies or substantial portions of the Software.
> 
> THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
> IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
> FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
> AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
> LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
> OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
> THE SOFTWARE.

---------------------------------------

## normalize-path
License: MIT
By: Jon Schlinkert, Blaine Bublitz
Repository: https://github.com/jonschlinkert/normalize-path

> The MIT License (MIT)
> 
> Copyright (c) 2014-2018, Jon Schlinkert.
> 
> Permission is hereby granted, free of charge, to any person obtaining a copy
> of this software and associated documentation files (the "Software"), to deal
> in the Software without restriction, including without limitation the rights
> to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
> copies of the Software, and to permit persons to whom the Software is
> furnished to do so, subject to the following conditions:
> 
> The above copyright notice and this permission notice shall be included in
> all copies or substantial portions of the Software.
> 
> THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
> IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
> FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
> AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
> LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
> OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
> THE SOFTWARE.

---------------------------------------

## object-assign
License: MIT
By: Sindre Sorhus
Repository: https://github.com/sindresorhus/object-assign

> The MIT License (MIT)
> 
> Copyright (c) Sindre Sorhus <sindresorhus@gmail.com> (sindresorhus.com)
> 
> Permission is hereby granted, free of charge, to any person obtaining a copy
> of this software and associated documentation files (the "Software"), to deal
> in the Software without restriction, including without limitation the rights
> to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
> copies of the Software, and to permit persons to whom the Software is
> furnished to do so, subject to the following conditions:
> 
> The above copyright notice and this permission notice shall be included in
> all copies or substantial portions of the Software.
> 
> THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
> IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
> FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
> AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
> LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
> OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
> THE SOFTWARE.

---------------------------------------

## obug
License: MIT
By: Kevin Deng
Repository: https://github.com/sxzz/obug

> The MIT License (MIT)
> 
> Copyright \xA9 2025-PRESENT Kevin Deng (https://github.com/sxzz)
> Copyright (c) 2014-2017 TJ Holowaychuk <tj@vision-media.ca>
> Copyright (c) 2018-2021 Josh Junon
> 
> Permission is hereby granted, free of charge, to any person obtaining a copy
> of this software and associated documentation files (the "Software"), to deal
> in the Software without restriction, including without limitation the rights
> to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
> copies of the Software, and to permit persons to whom the Software is
> furnished to do so, subject to the following conditions:
> 
> The above copyright notice and this permission notice shall be included in all
> copies or substantial portions of the Software.
> 
> THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
> IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
> FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
> AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
> LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
> OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
> SOFTWARE.

---------------------------------------

## on-finished
License: MIT
By: Douglas Christopher Wilson, Jonathan Ong
Repository: https://github.com/jshttp/on-finished

> (The MIT License)
> 
> Copyright (c) 2013 Jonathan Ong <me@jongleberry.com>
> Copyright (c) 2014 Douglas Christopher Wilson <doug@somethingdoug.com>
> 
> Permission is hereby granted, free of charge, to any person obtaining
> a copy of this software and associated documentation files (the
> 'Software'), to deal in the Software without restriction, including
> without limitation the rights to use, copy, modify, merge, publish,
> distribute, sublicense, and/or sell copies of the Software, and to
> permit persons to whom the Software is furnished to do so, subject to
> the following conditions:
> 
> The above copyright notice and this permission notice shall be
> included in all copies or substantial portions of the Software.
> 
> THE SOFTWARE IS PROVIDED 'AS IS', WITHOUT WARRANTY OF ANY KIND,
> EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
> MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT.
> IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY
> CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT,
> TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE
> SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.

---------------------------------------

## parse5
License: MIT
By: Ivan Nikulin, https://github.com/inikulin/parse5/graphs/contributors
Repository: https://github.com/inikulin/parse5

> Copyright (c) 2013-2019 Ivan Nikulin (ifaaan@gmail.com, https://github.com/inikulin)
> 
> Permission is hereby granted, free of charge, to any person obtaining a copy
> of this software and associated documentation files (the "Software"), to deal
> in the Software without restriction, including without limitation the rights
> to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
> copies of the Software, and to permit persons to whom the Software is
> furnished to do so, subject to the following conditions:
> 
> The above copyright notice and this permission notice shall be included in
> all copies or substantial portions of the Software.
> 
> THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
> IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
> FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
> AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
> LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
> OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
> THE SOFTWARE.

---------------------------------------

## parseurl
License: MIT
By: Douglas Christopher Wilson, Jonathan Ong
Repository: https://github.com/pillarjs/parseurl

> (The MIT License)
> 
> Copyright (c) 2014 Jonathan Ong <me@jongleberry.com>
> Copyright (c) 2014-2017 Douglas Christopher Wilson <doug@somethingdoug.com>
> 
> Permission is hereby granted, free of charge, to any person obtaining
> a copy of this software and associated documentation files (the
> 'Software'), to deal in the Software without restriction, including
> without limitation the rights to use, copy, modify, merge, publish,
> distribute, sublicense, and/or sell copies of the Software, and to
> permit persons to whom the Software is furnished to do so, subject to
> the following conditions:
> 
> The above copyright notice and this permission notice shall be
> included in all copies or substantial portions of the Software.
> 
> THE SOFTWARE IS PROVIDED 'AS IS', WITHOUT WARRANTY OF ANY KIND,
> EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
> MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT.
> IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY
> CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT,
> TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE
> SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.

---------------------------------------

## path-key, shebang-regex
License: MIT
By: Sindre Sorhus
Repositories: https://github.com/sindresorhus/path-key, https://github.com/sindresorhus/shebang-regex

> MIT License
> 
> Copyright (c) Sindre Sorhus <sindresorhus@gmail.com> (sindresorhus.com)
> 
> Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:
> 
> The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
> 
> THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.

---------------------------------------

## periscopic
License: MIT
Repository: https://github.com/Rich-Harris/periscopic

> Copyright (c) 2019 Rich Harris
> 
> Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:
> 
> The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
> 
> THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.

---------------------------------------

## picocolors
License: ISC
By: Alexey Raspopov
Repository: https://github.com/alexeyraspopov/picocolors

> ISC License
> 
> Copyright (c) 2021-2024 Oleksii Raspopov, Kostiantyn Denysov, Anton Verinov
> 
> Permission to use, copy, modify, and/or distribute this software for any
> purpose with or without fee is hereby granted, provided that the above
> copyright notice and this permission notice appear in all copies.
> 
> THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
> WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
> MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
> ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
> WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
> ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
> OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.

---------------------------------------

## postcss-import
License: MIT
By: Maxime Thirouin
Repository: https://github.com/postcss/postcss-import

> The MIT License (MIT)
> 
> Copyright (c) 2014 Maxime Thirouin, Jason Campbell & Kevin M\xE5rtensson
> 
> Permission is hereby granted, free of charge, to any person obtaining a copy of
> this software and associated documentation files (the "Software"), to deal in
> the Software without restriction, including without limitation the rights to
> use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of
> the Software, and to permit persons to whom the Software is furnished to do so,
> subject to the following conditions:
> 
> The above copyright notice and this permission notice shall be included in all
> copies or substantial portions of the Software.
> 
> THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
> IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS
> FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR
> COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER
> IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN
> CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.

---------------------------------------

## postcss-load-config
License: MIT
By: Michael Ciniawky, Ryan Dunckel, Mateusz Derks, Dalton Santos, Patrick Gilday, Fran\xE7ois Wouts
Repository: https://github.com/postcss/postcss-load-config

> The MIT License (MIT)
> 
> Copyright Michael Ciniawsky <michael.ciniawsky@gmail.com>
> 
> Permission is hereby granted, free of charge, to any person obtaining a copy of
> this software and associated documentation files (the "Software"), to deal in
> the Software without restriction, including without limitation the rights to
> use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of
> the Software, and to permit persons to whom the Software is furnished to do so,
> subject to the following conditions:
> 
> The above copyright notice and this permission notice shall be included in all
> copies or substantial portions of the Software.
> 
> THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
> IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS
> FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR
> COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER
> IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN
> CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.

---------------------------------------

## postcss-modules
License: MIT
By: Alexander Madyankin
Repository: https://github.com/css-modules/postcss-modules

> The MIT License (MIT)
> 
> Copyright 2015-present Alexander Madyankin <alexander@madyankin.name>
> 
> Permission is hereby granted, free of charge, to any person obtaining a copy of
> this software and associated documentation files (the "Software"), to deal in
> the Software without restriction, including without limitation the rights to
> use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of
> the Software, and to permit persons to whom the Software is furnished to do so,
> subject to the following conditions:
> 
> The above copyright notice and this permission notice shall be included in all
> copies or substantial portions of the Software.
> 
> THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
> IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS
> FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR
> COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER
> IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN
> CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.

---------------------------------------

## postcss-modules-extract-imports
License: ISC
By: Glen Maddern
Repository: https://github.com/css-modules/postcss-modules-extract-imports

> Copyright 2015 Glen Maddern
> 
> Permission to use, copy, modify, and/or distribute this software for any purpose with or without fee is hereby granted, provided that the above copyright notice and this permission notice appear in all copies.
> 
> THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.

---------------------------------------

## postcss-modules-local-by-default
License: MIT
By: Mark Dalgleish
Repository: https://github.com/css-modules/postcss-modules-local-by-default

> The MIT License (MIT)
> 
> Copyright 2015 Mark Dalgleish <mark.john.dalgleish@gmail.com>
> 
> Permission is hereby granted, free of charge, to any person obtaining a copy of
> this software and associated documentation files (the "Software"), to deal in
> the Software without restriction, including without limitation the rights to
> use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of
> the Software, and to permit persons to whom the Software is furnished to do so,
> subject to the following conditions:
> 
> The above copyright notice and this permission notice shall be included in all
> copies or substantial portions of the Software.
> 
> THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
> IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS
> FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR
> COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER
> IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN
> CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.

---------------------------------------

## postcss-modules-scope
License: ISC
By: Glen Maddern
Repository: https://github.com/css-modules/postcss-modules-scope

> ISC License (ISC)
> 
> Copyright (c) 2015, Glen Maddern
> 
> Permission to use, copy, modify, and/or distribute this software for any purpose with or without fee is hereby granted, provided that the above copyright notice and this permission notice appear in all copies.
> 
> THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.

---------------------------------------

## postcss-modules-values
License: ISC
By: Glen Maddern
Repository: https://github.com/css-modules/postcss-modules-values

> ISC License (ISC)
> 
> Copyright (c) 2015, Glen Maddern
> 
> Permission to use, copy, modify, and/or distribute this software for any purpose with or without fee is hereby granted, provided that the above copyright notice and this permission notice appear in all copies.
> 
> THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.

---------------------------------------

## postcss-selector-parser
License: MIT
By: Ben Briggs, Chris Eppstein
Repository: https://github.com/postcss/postcss-selector-parser

> Copyright (c) Ben Briggs <beneb.info@gmail.com> (http://beneb.info)
> 
> Permission is hereby granted, free of charge, to any person
> obtaining a copy of this software and associated documentation
> files (the "Software"), to deal in the Software without
> restriction, including without limitation the rights to use,
> copy, modify, merge, publish, distribute, sublicense, and/or sell
> copies of the Software, and to permit persons to whom the
> Software is furnished to do so, subject to the following
> conditions:
> 
> The above copyright notice and this permission notice shall be
> included in all copies or substantial portions of the Software.
> 
> THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
> EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES
> OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND
> NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT
> HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY,
> WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING
> FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR
> OTHER DEALINGS IN THE SOFTWARE.

---------------------------------------

## postcss-value-parser
License: MIT
By: Bogdan Chadkin
Repository: https://github.com/TrySound/postcss-value-parser

> Copyright (c) Bogdan Chadkin <trysound@yandex.ru>
> 
> Permission is hereby granted, free of charge, to any person
> obtaining a copy of this software and associated documentation
> files (the "Software"), to deal in the Software without
> restriction, including without limitation the rights to use,
> copy, modify, merge, publish, distribute, sublicense, and/or sell
> copies of the Software, and to permit persons to whom the
> Software is furnished to do so, subject to the following
> conditions:
> 
> The above copyright notice and this permission notice shall be
> included in all copies or substantial portions of the Software.
> 
> THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
> EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES
> OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND
> NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT
> HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY,
> WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING
> FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR
> OTHER DEALINGS IN THE SOFTWARE.

---------------------------------------

## readdirp
License: MIT
By: Thorsten Lorenz, Paul Miller
Repository: https://github.com/paulmillr/readdirp

> MIT License
> 
> Copyright (c) 2012-2019 Thorsten Lorenz, Paul Miller (https://paulmillr.com)
> 
> Permission is hereby granted, free of charge, to any person obtaining a copy
> of this software and associated documentation files (the "Software"), to deal
> in the Software without restriction, including without limitation the rights
> to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
> copies of the Software, and to permit persons to whom the Software is
> furnished to do so, subject to the following conditions:
> 
> The above copyright notice and this permission notice shall be included in all
> copies or substantial portions of the Software.
> 
> THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
> IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
> FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
> AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
> LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
> OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
> SOFTWARE.

---------------------------------------

## resolve.exports, totalist
License: MIT
By: Luke Edwards
Repositories: https://github.com/lukeed/resolve.exports, https://github.com/lukeed/totalist

> The MIT License (MIT)
> 
> Copyright (c) Luke Edwards <luke.edwards05@gmail.com> (lukeed.com)
> 
> Permission is hereby granted, free of charge, to any person obtaining a copy
> of this software and associated documentation files (the "Software"), to deal
> in the Software without restriction, including without limitation the rights
> to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
> copies of the Software, and to permit persons to whom the Software is
> furnished to do so, subject to the following conditions:
> 
> The above copyright notice and this permission notice shall be included in
> all copies or substantial portions of the Software.
> 
> THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
> IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
> FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
> AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
> LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
> OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
> THE SOFTWARE.

---------------------------------------

## shebang-command
License: MIT
By: Kevin M\xE5rtensson
Repository: https://github.com/kevva/shebang-command

> MIT License
> 
> Copyright (c) Kevin M\xE5rtensson <kevinmartensson@gmail.com> (github.com/kevva)
> 
> Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:
> 
> The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
> 
> THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.

---------------------------------------

## sirv
License: MIT
By: Luke Edwards
Repository: https://github.com/lukeed/sirv

---------------------------------------

## statuses
License: MIT
By: Douglas Christopher Wilson, Jonathan Ong
Repository: https://github.com/jshttp/statuses

> The MIT License (MIT)
> 
> Copyright (c) 2014 Jonathan Ong <me@jongleberry.com>
> Copyright (c) 2016 Douglas Christopher Wilson <doug@somethingdoug.com>
> 
> Permission is hereby granted, free of charge, to any person obtaining a copy
> of this software and associated documentation files (the "Software"), to deal
> in the Software without restriction, including without limitation the rights
> to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
> copies of the Software, and to permit persons to whom the Software is
> furnished to do so, subject to the following conditions:
> 
> The above copyright notice and this permission notice shall be included in
> all copies or substantial portions of the Software.
> 
> THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
> IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
> FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
> AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
> LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
> OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
> THE SOFTWARE.

---------------------------------------

## string-hash
License: CC0-1.0
By: The Dark Sky Company
Repository: https://github.com/darkskyapp/string-hash

---------------------------------------

## strip-literal
License: MIT
By: Anthony Fu
Repository: https://github.com/antfu/strip-literal

> MIT License
> 
> Copyright (c) 2022 Anthony Fu <https://github.com/antfu>
> 
> Permission is hereby granted, free of charge, to any person obtaining a copy
> of this software and associated documentation files (the "Software"), to deal
> in the Software without restriction, including without limitation the rights
> to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
> copies of the Software, and to permit persons to whom the Software is
> furnished to do so, subject to the following conditions:
> 
> The above copyright notice and this permission notice shall be included in all
> copies or substantial portions of the Software.
> 
> THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
> IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
> FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
> AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
> LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
> OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
> SOFTWARE.

---------------------------------------

## to-regex-range
License: MIT
By: Jon Schlinkert, Rouven We\xDFling
Repository: https://github.com/micromatch/to-regex-range

> The MIT License (MIT)
> 
> Copyright (c) 2015-present, Jon Schlinkert.
> 
> Permission is hereby granted, free of charge, to any person obtaining a copy
> of this software and associated documentation files (the "Software"), to deal
> in the Software without restriction, including without limitation the rights
> to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
> copies of the Software, and to permit persons to whom the Software is
> furnished to do so, subject to the following conditions:
> 
> The above copyright notice and this permission notice shall be included in
> all copies or substantial portions of the Software.
> 
> THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
> IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
> FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
> AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
> LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
> OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
> THE SOFTWARE.

---------------------------------------

## tsconfck
License: MIT
By: dominikg
Repository: https://github.com/dominikg/tsconfck

> MIT License
> 
> Copyright (c) 2021-present dominikg and [contributors](https://github.com/dominikg/tsconfck/graphs/contributors)
> 
> Permission is hereby granted, free of charge, to any person obtaining a copy
> of this software and associated documentation files (the "Software"), to deal
> in the Software without restriction, including without limitation the rights
> to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
> copies of the Software, and to permit persons to whom the Software is
> furnished to do so, subject to the following conditions:
> 
> The above copyright notice and this permission notice shall be included in all
> copies or substantial portions of the Software.
> 
> THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
> IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
> FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
> AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
> LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
> OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
> SOFTWARE.
> 
> -- Licenses for 3rd-party code included in tsconfck --
> 
> # strip-bom and strip-json-comments
> MIT License
> 
> Copyright (c) Sindre Sorhus <sindresorhus@gmail.com> (https://sindresorhus.com)
> 
> Permission is hereby granted, free of charge, to any person obtaining a copy
> of this software and associated documentation files (the "Software"), to deal
> in the Software without restriction, including without limitation the rights
> to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
> copies of the Software, and to permit persons to whom the Software is
> furnished to do so, subject to the following conditions:
> 
> The above copyright notice and this permission notice shall be included in all
> copies or substantial portions of the Software.
> 
> THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
> IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
> FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
> AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
> LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
> OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
> SOFTWARE.

---------------------------------------

## unpipe
License: MIT
By: Douglas Christopher Wilson
Repository: https://github.com/stream-utils/unpipe

> (The MIT License)
> 
> Copyright (c) 2015 Douglas Christopher Wilson <doug@somethingdoug.com>
> 
> Permission is hereby granted, free of charge, to any person obtaining
> a copy of this software and associated documentation files (the
> 'Software'), to deal in the Software without restriction, including
> without limitation the rights to use, copy, modify, merge, publish,
> distribute, sublicense, and/or sell copies of the Software, and to
> permit persons to whom the Software is furnished to do so, subject to
> the following conditions:
> 
> The above copyright notice and this permission notice shall be
> included in all copies or substantial portions of the Software.
> 
> THE SOFTWARE IS PROVIDED 'AS IS', WITHOUT WARRANTY OF ANY KIND,
> EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
> MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT.
> IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY
> CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT,
> TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE
> SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.

---------------------------------------

## util-deprecate
License: MIT
By: Nathan Rajlich
Repository: https://github.com/TooTallNate/util-deprecate

> (The MIT License)
> 
> Copyright (c) 2014 Nathan Rajlich <nathan@tootallnate.net>
> 
> Permission is hereby granted, free of charge, to any person
> obtaining a copy of this software and associated documentation
> files (the "Software"), to deal in the Software without
> restriction, including without limitation the rights to use,
> copy, modify, merge, publish, distribute, sublicense, and/or sell
> copies of the Software, and to permit persons to whom the
> Software is furnished to do so, subject to the following
> conditions:
> 
> The above copyright notice and this permission notice shall be
> included in all copies or substantial portions of the Software.
> 
> THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
> EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES
> OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND
> NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT
> HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY,
> WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING
> FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR
> OTHER DEALINGS IN THE SOFTWARE.

---------------------------------------

## utils-merge
License: MIT
By: Jared Hanson
Repository: https://github.com/jaredhanson/utils-merge

> The MIT License (MIT)
> 
> Copyright (c) 2013-2017 Jared Hanson
> 
> Permission is hereby granted, free of charge, to any person obtaining a copy of
> this software and associated documentation files (the "Software"), to deal in
> the Software without restriction, including without limitation the rights to
> use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of
> the Software, and to permit persons to whom the Software is furnished to do so,
> subject to the following conditions:
> 
> The above copyright notice and this permission notice shall be included in all
> copies or substantial portions of the Software.
> 
> THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
> IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS
> FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR
> COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER
> IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN
> CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.

---------------------------------------

## vary
License: MIT
By: Douglas Christopher Wilson
Repository: https://github.com/jshttp/vary

> (The MIT License)
> 
> Copyright (c) 2014-2017 Douglas Christopher Wilson
> 
> Permission is hereby granted, free of charge, to any person obtaining
> a copy of this software and associated documentation files (the
> 'Software'), to deal in the Software without restriction, including
> without limitation the rights to use, copy, modify, merge, publish,
> distribute, sublicense, and/or sell copies of the Software, and to
> permit persons to whom the Software is furnished to do so, subject to
> the following conditions:
> 
> The above copyright notice and this permission notice shall be
> included in all copies or substantial portions of the Software.
> 
> THE SOFTWARE IS PROVIDED 'AS IS', WITHOUT WARRANTY OF ANY KIND,
> EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
> MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT.
> IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY
> CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT,
> TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE
> SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.

---------------------------------------

## ws
License: MIT
By: Einar Otto Stangvik
Repository: https://github.com/websockets/ws

> Copyright (c) 2011 Einar Otto Stangvik <einaros@gmail.com>
> Copyright (c) 2013 Arnout Kazemier and contributors
> Copyright (c) 2016 Luigi Pinca and contributors
> 
> Permission is hereby granted, free of charge, to any person obtaining a copy of
> this software and associated documentation files (the "Software"), to deal in
> the Software without restriction, including without limitation the rights to
> use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of
> the Software, and to permit persons to whom the Software is furnished to do so,
> subject to the following conditions:
> 
> The above copyright notice and this permission notice shall be included in all
> copies or substantial portions of the Software.
> 
> THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
> IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS
> FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR
> COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER
> IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN
> CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
`,
      isDev: true
    },
    {
      id: "vite-plugin-compression",
      name: "vite-plugin-compression",
      description: "Use gzip or brotli to compress resources.",
      url: "https://github.com/anncwb/vite-plugin-compression",
      homepage: "https://github.com/anncwb/vite-plugin-compression/tree/master/#readme",
      licenseType: "MIT",
      license: `MIT License

Copyright (c) 2020-present, Vben

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
`,
      isDev: true
    },
    {
      id: "vite-plugin-top-level-await",
      name: "vite-plugin-top-level-await",
      description: "Transform code to support top-level await in normal browsers for Vite.",
      url: "https://github.com/Menci/vite-plugin-top-level-await",
      homepage: "https://github.com/Menci/vite-plugin-top-level-await",
      licenseType: "MIT",
      license: `MIT License

Copyright (c) 2022 Menci

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
`,
      isDev: true
    },
    {
      id: "vite-plugin-wasm",
      name: "vite-plugin-wasm",
      description: "Add WebAssembly ESM integration (aka. Webpack's `asyncWebAssembly`) to Vite and support `wasm-pack` generated modules.",
      url: "https://github.com/Menci/vite-plugin-wasm",
      homepage: "https://github.com/Menci/vite-plugin-wasm",
      licenseType: "MIT",
      license: `MIT License

Copyright (c) 2022 Menci

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
`,
      isDev: true
    },
    {
      id: "vitest",
      name: "vitest",
      description: "Next generation testing framework powered by Vite",
      url: "https://github.com/vitest-dev/vitest",
      homepage: "https://vitest.dev",
      licenseType: "MIT",
      license: `# Vitest core license
Vitest is released under the MIT license:

MIT License

Copyright (c) 2021-Present VoidZero Inc. and Vitest contributors

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.

# Licenses of bundled dependencies
The published Vitest artifact additionally contains code with the following licenses:
BSD-3-Clause, ISC, MIT

# Bundled dependencies:
## @antfu/install-pkg
License: MIT
By: Anthony Fu
Repository: git+https://github.com/antfu/install-pkg.git

> MIT License
>
> Copyright (c) 2021 Anthony Fu <https://github.com/antfu>
>
> Permission is hereby granted, free of charge, to any person obtaining a copy
> of this software and associated documentation files (the "Software"), to deal
> in the Software without restriction, including without limitation the rights
> to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
> copies of the Software, and to permit persons to whom the Software is
> furnished to do so, subject to the following conditions:
>
> The above copyright notice and this permission notice shall be included in all
> copies or substantial portions of the Software.
>
> THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
> IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
> FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
> AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
> LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
> OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
> SOFTWARE.

---------------------------------------

## @jridgewell/resolve-uri
License: MIT
By: Justin Ridgewell
Repository: https://github.com/jridgewell/resolve-uri

> Copyright 2019 Justin Ridgewell <jridgewell@google.com>
>
> Permission is hereby granted, free of charge, to any person obtaining a copy
> of this software and associated documentation files (the "Software"), to deal
> in the Software without restriction, including without limitation the rights
> to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
> copies of the Software, and to permit persons to whom the Software is
> furnished to do so, subject to the following conditions:
>
> The above copyright notice and this permission notice shall be included in
> all copies or substantial portions of the Software.
>
> THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
> IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
> FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
> AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
> LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
> OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
> SOFTWARE.

---------------------------------------

## @jridgewell/sourcemap-codec
License: MIT
By: Justin Ridgewell
Repository: git+https://github.com/jridgewell/sourcemaps.git

> Copyright 2024 Justin Ridgewell <justin@ridgewell.name>
>
> Permission is hereby granted, free of charge, to any person obtaining a copy
> of this software and associated documentation files (the "Software"), to deal
> in the Software without restriction, including without limitation the rights
> to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
> copies of the Software, and to permit persons to whom the Software is
> furnished to do so, subject to the following conditions:
>
> The above copyright notice and this permission notice shall be included in
> all copies or substantial portions of the Software.
>
> THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
> IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
> FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
> AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
> LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
> OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
> SOFTWARE.

---------------------------------------

## @jridgewell/trace-mapping
License: MIT
By: Justin Ridgewell
Repository: git+https://github.com/jridgewell/sourcemaps.git

> Copyright 2024 Justin Ridgewell <justin@ridgewell.name>
>
> Permission is hereby granted, free of charge, to any person obtaining a copy
> of this software and associated documentation files (the "Software"), to deal
> in the Software without restriction, including without limitation the rights
> to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
> copies of the Software, and to permit persons to whom the Software is
> furnished to do so, subject to the following conditions:
>
> The above copyright notice and this permission notice shall be included in
> all copies or substantial portions of the Software.
>
> THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
> IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
> FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
> AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
> LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
> OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
> SOFTWARE.

---------------------------------------

## @sinonjs/commons
License: BSD-3-Clause
Repository: git+https://github.com/sinonjs/commons.git

> BSD 3-Clause License
>
> Copyright (c) 2018, Sinon.JS
> All rights reserved.
>
> Redistribution and use in source and binary forms, with or without
> modification, are permitted provided that the following conditions are met:
>
> * Redistributions of source code must retain the above copyright notice, this
>   list of conditions and the following disclaimer.
>
> * Redistributions in binary form must reproduce the above copyright notice,
>   this list of conditions and the following disclaimer in the documentation
>   and/or other materials provided with the distribution.
>
> * Neither the name of the copyright holder nor the names of its
>   contributors may be used to endorse or promote products derived from
>   this software without specific prior written permission.
>
> THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS"
> AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE
> IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE
> DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT HOLDER OR CONTRIBUTORS BE LIABLE
> FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL
> DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR
> SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER
> CAUSED AND ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY,
> OR TORT (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE
> OF THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.

---------------------------------------

## @sinonjs/fake-timers
License: BSD-3-Clause
By: Christian Johansen
Repository: git+https://github.com/sinonjs/fake-timers.git

> Copyright (c) 2010-2014, Christian Johansen, christian@cjohansen.no. All rights reserved.
>
> Redistribution and use in source and binary forms, with or without modification, are permitted provided that the following conditions are met:
>
> 1. Redistributions of source code must retain the above copyright notice, this list of conditions and the following disclaimer.
>
> 2. Redistributions in binary form must reproduce the above copyright notice, this list of conditions and the following disclaimer in the documentation and/or other materials provided with the distribution.
>
> 3. Neither the name of the copyright holder nor the names of its contributors may be used to endorse or promote products derived from this software without specific prior written permission.
>
> THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS" AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT HOLDER OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.

---------------------------------------

## acorn-walk
License: MIT
By: Marijn Haverbeke, Ingvar Stepanyan, Adrian Heine
Repository: https://github.com/acornjs/acorn.git

> MIT License
>
> Copyright (C) 2012-2020 by various contributors (see AUTHORS)
>
> Permission is hereby granted, free of charge, to any person obtaining a copy
> of this software and associated documentation files (the "Software"), to deal
> in the Software without restriction, including without limitation the rights
> to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
> copies of the Software, and to permit persons to whom the Software is
> furnished to do so, subject to the following conditions:
>
> The above copyright notice and this permission notice shall be included in
> all copies or substantial portions of the Software.
>
> THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
> IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
> FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
> AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
> LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
> OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
> THE SOFTWARE.

---------------------------------------

## birpc
License: MIT
By: Anthony Fu
Repository: git+https://github.com/antfu-collective/birpc.git

> MIT License
>
> Copyright (c) 2021 Anthony Fu <https://github.com/antfu>
>
> Permission is hereby granted, free of charge, to any person obtaining a copy
> of this software and associated documentation files (the "Software"), to deal
> in the Software without restriction, including without limitation the rights
> to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
> copies of the Software, and to permit persons to whom the Software is
> furnished to do so, subject to the following conditions:
>
> The above copyright notice and this permission notice shall be included in all
> copies or substantial portions of the Software.
>
> THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
> IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
> FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
> AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
> LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
> OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
> SOFTWARE.

---------------------------------------

## cac
License: MIT
By: egoist
Repository: egoist/cac

> The MIT License (MIT)
>
> Copyright (c) EGOIST <0x142857@gmail.com> (https://github.com/egoist)
>
> Permission is hereby granted, free of charge, to any person obtaining a copy
> of this software and associated documentation files (the "Software"), to deal
> in the Software without restriction, including without limitation the rights
> to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
> copies of the Software, and to permit persons to whom the Software is
> furnished to do so, subject to the following conditions:
>
> The above copyright notice and this permission notice shall be included in
> all copies or substantial portions of the Software.
>
> THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
> IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
> FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
> AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
> LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
> OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
> THE SOFTWARE.

---------------------------------------

## empathic
License: MIT
By: Luke Edwards
Repository: lukeed/empathic

> MIT License
>
> Copyright (c) Luke Edwards <luke.edwards05@gmail.com> (lukeed.com)
>
> Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:
>
> The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
>
> THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.

---------------------------------------

## flatted
License: ISC
By: Andrea Giammarchi
Repository: git+https://github.com/WebReflection/flatted.git

> ISC License
>
> Copyright (c) 2018-2020, Andrea Giammarchi, @WebReflection
>
> Permission to use, copy, modify, and/or distribute this software for any
> purpose with or without fee is hereby granted, provided that the above
> copyright notice and this permission notice appear in all copies.
>
> THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
> REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
> AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
> INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
> LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE
> OR OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
> PERFORMANCE OF THIS SOFTWARE.

---------------------------------------

## js-tokens
License: MIT
By: Simon Lydell
Repository: lydell/js-tokens

> The MIT License (MIT)
>
> Copyright (c) 2014, 2015, 2016, 2017, 2018, 2019, 2020, 2021, 2022, 2023, 2024 Simon Lydell
>
> Permission is hereby granted, free of charge, to any person obtaining a copy
> of this software and associated documentation files (the "Software"), to deal
> in the Software without restriction, including without limitation the rights
> to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
> copies of the Software, and to permit persons to whom the Software is
> furnished to do so, subject to the following conditions:
>
> The above copyright notice and this permission notice shall be included in
> all copies or substantial portions of the Software.
>
> THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
> IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
> FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
> AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
> LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
> OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
> THE SOFTWARE.

---------------------------------------

## kleur
License: MIT
By: Luke Edwards
Repository: lukeed/kleur

> The MIT License (MIT)
>
> Copyright (c) Luke Edwards <luke.edwards05@gmail.com> (lukeed.com)
>
> Permission is hereby granted, free of charge, to any person obtaining a copy
> of this software and associated documentation files (the "Software"), to deal
> in the Software without restriction, including without limitation the rights
> to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
> copies of the Software, and to permit persons to whom the Software is
> furnished to do so, subject to the following conditions:
>
> The above copyright notice and this permission notice shall be included in
> all copies or substantial portions of the Software.
>
> THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
> IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
> FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
> AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
> LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
> OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
> THE SOFTWARE.

---------------------------------------

## local-pkg
License: MIT
By: Anthony Fu
Repository: git+https://github.com/antfu-collective/local-pkg.git

> MIT License
>
> Copyright (c) 2021 Anthony Fu <https://github.com/antfu>
>
> Permission is hereby granted, free of charge, to any person obtaining a copy
> of this software and associated documentation files (the "Software"), to deal
> in the Software without restriction, including without limitation the rights
> to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
> copies of the Software, and to permit persons to whom the Software is
> furnished to do so, subject to the following conditions:
>
> The above copyright notice and this permission notice shall be included in all
> copies or substantial portions of the Software.
>
> THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
> IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
> FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
> AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
> LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
> OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
> SOFTWARE.

---------------------------------------

## mime
License: MIT
By: Robert Kieffer
Repository: https://github.com/broofa/mime

> MIT License
>
> Copyright (c) 2023 Robert Kieffer
>
> Permission is hereby granted, free of charge, to any person obtaining a copy
> of this software and associated documentation files (the "Software"), to deal
> in the Software without restriction, including without limitation the rights
> to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
> copies of the Software, and to permit persons to whom the Software is
> furnished to do so, subject to the following conditions:
>
> The above copyright notice and this permission notice shall be included in all
> copies or substantial portions of the Software.
>
> THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
> IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
> FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
> AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
> LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
> OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
> SOFTWARE.

---------------------------------------

## mlly
License: MIT
Repository: unjs/mlly

> MIT License
>
> Copyright (c) Pooya Parsa <pooya@pi0.io>
>
> Permission is hereby granted, free of charge, to any person obtaining a copy
> of this software and associated documentation files (the "Software"), to deal
> in the Software without restriction, including without limitation the rights
> to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
> copies of the Software, and to permit persons to whom the Software is
> furnished to do so, subject to the following conditions:
>
> The above copyright notice and this permission notice shall be included in all
> copies or substantial portions of the Software.
>
> THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
> IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
> FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
> AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
> LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
> OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
> SOFTWARE.

---------------------------------------

## package-manager-detector
License: MIT
By: Anthony Fu
Repository: git+https://github.com/antfu-collective/package-manager-detector.git

> MIT License
>
> Copyright (c) 2020-PRESENT Anthony Fu <https://github.com/antfu>
>
> Permission is hereby granted, free of charge, to any person obtaining a copy
> of this software and associated documentation files (the "Software"), to deal
> in the Software without restriction, including without limitation the rights
> to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
> copies of the Software, and to permit persons to whom the Software is
> furnished to do so, subject to the following conditions:
>
> The above copyright notice and this permission notice shall be included in all
> copies or substantial portions of the Software.
>
> THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
> IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
> FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
> AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
> LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
> OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
> SOFTWARE.

---------------------------------------

## prompts
License: MIT
By: Terkel Gjervig
Repository: terkelg/prompts

> MIT License
>
> Copyright (c) 2018 Terkel Gjervig Nielsen
>
> Permission is hereby granted, free of charge, to any person obtaining a copy
> of this software and associated documentation files (the "Software"), to deal
> in the Software without restriction, including without limitation the rights
> to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
> copies of the Software, and to permit persons to whom the Software is
> furnished to do so, subject to the following conditions:
>
> The above copyright notice and this permission notice shall be included in all
> copies or substantial portions of the Software.
>
> THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
> IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
> FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
> AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
> LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
> OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
> SOFTWARE.

---------------------------------------

## quansync
License: MIT
By: Anthony Fu, \u4E09\u54B2\u667A\u5B50 Kevin Deng
Repository: git+https://github.com/quansync-dev/quansync.git

> MIT License
>
> Copyright (c) 2025-PRESENT Anthony Fu <https://github.com/antfu> and Kevin Deng <https://github.com/sxzz>
>
> Permission is hereby granted, free of charge, to any person obtaining a copy
> of this software and associated documentation files (the "Software"), to deal
> in the Software without restriction, including without limitation the rights
> to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
> copies of the Software, and to permit persons to whom the Software is
> furnished to do so, subject to the following conditions:
>
> The above copyright notice and this permission notice shall be included in all
> copies or substantial portions of the Software.
>
> THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
> IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
> FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
> AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
> LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
> OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
> SOFTWARE.

---------------------------------------

## sisteransi
License: MIT
By: Terkel Gjervig
Repository: https://github.com/terkelg/sisteransi

> MIT License
>
> Copyright (c) 2018 Terkel Gjervig Nielsen
>
> Permission is hereby granted, free of charge, to any person obtaining a copy
> of this software and associated documentation files (the "Software"), to deal
> in the Software without restriction, including without limitation the rights
> to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
> copies of the Software, and to permit persons to whom the Software is
> furnished to do so, subject to the following conditions:
>
> The above copyright notice and this permission notice shall be included in all
> copies or substantial portions of the Software.
>
> THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
> IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
> FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
> AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
> LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
> OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
> SOFTWARE.

---------------------------------------

## strip-literal
License: MIT
By: Anthony Fu
Repository: git+https://github.com/antfu/strip-literal.git

> MIT License
>
> Copyright (c) 2022 Anthony Fu <https://github.com/antfu>
>
> Permission is hereby granted, free of charge, to any person obtaining a copy
> of this software and associated documentation files (the "Software"), to deal
> in the Software without restriction, including without limitation the rights
> to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
> copies of the Software, and to permit persons to whom the Software is
> furnished to do so, subject to the following conditions:
>
> The above copyright notice and this permission notice shall be included in all
> copies or substantial portions of the Software.
>
> THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
> IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
> FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
> AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
> LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
> OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
> SOFTWARE.

---------------------------------------

## type-detect
License: MIT
By: Jake Luer, Keith Cirkel, David Losert, Aleksey Shvayka, Lucas Fernandes da Costa, Grant Snodgrass, Jeremy Tice, Edward Betts, dvlsg, Amila Welihinda, Jake Champion, Miroslav Bajto\u0161
Repository: git+ssh://git@github.com/chaijs/type-detect.git

> Copyright (c) 2013 Jake Luer <jake@alogicalparadox.com> (http://alogicalparadox.com)
>
> Permission is hereby granted, free of charge, to any person obtaining a copy
> of this software and associated documentation files (the "Software"), to deal
> in the Software without restriction, including without limitation the rights
> to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
> copies of the Software, and to permit persons to whom the Software is
> furnished to do so, subject to the following conditions:
>
> The above copyright notice and this permission notice shall be included in
> all copies or substantial portions of the Software.
>
> THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
> IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
> FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
> AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
> LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
> OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
> THE SOFTWARE.

---------------------------------------

## ufo
License: MIT
Repository: unjs/ufo

> MIT License
>
> Copyright (c) Pooya Parsa <pooya@pi0.io>
>
> Permission is hereby granted, free of charge, to any person obtaining a copy
> of this software and associated documentation files (the "Software"), to deal
> in the Software without restriction, including without limitation the rights
> to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
> copies of the Software, and to permit persons to whom the Software is
> furnished to do so, subject to the following conditions:
>
> The above copyright notice and this permission notice shall be included in all
> copies or substantial portions of the Software.
>
> THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
> IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
> FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
> AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
> LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
> OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
> SOFTWARE.

---------------------------------------

## ws
License: MIT
By: Einar Otto Stangvik
Repository: git+https://github.com/websockets/ws.git

> Copyright (c) 2011 Einar Otto Stangvik <einaros@gmail.com>
> Copyright (c) 2013 Arnout Kazemier and contributors
> Copyright (c) 2016 Luigi Pinca and contributors
>
> Permission is hereby granted, free of charge, to any person obtaining a copy of
> this software and associated documentation files (the "Software"), to deal in
> the Software without restriction, including without limitation the rights to
> use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of
> the Software, and to permit persons to whom the Software is furnished to do so,
> subject to the following conditions:
>
> The above copyright notice and this permission notice shall be included in all
> copies or substantial portions of the Software.
>
> THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
> IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS
> FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR
> COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER
> IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN
> CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
`,
      isDev: true
    }
  ];
  let cu, Wa, qg, Xg, Ar, Jg, Zg, Qg, eR, tR, iR, oR, nR, rR, sR, aR, cR, lR, uR, hR, dR, fR, TR, Tc;
  cu = [
    {
      name: "trackmaker",
      displayName: "TrackMaker",
      moduleInit: async () => {
        var _a3;
        const e = Ph((await br(async () => {
          const { default: i } = await import("./App-ASGYRXlM.js");
          return {
            default: i
          };
        }, __vite__mapDeps([0,1,2,3,4,5]), import.meta.url)).default);
        e.use(Nd()), e.use((await br(async () => {
          const { default: i } = await import("./index-DudGwjU_.js");
          return {
            default: i
          };
        }, __vite__mapDeps([6,2,1,3,7]), import.meta.url)).default), e.use((await br(async () => {
          const { i18n: i } = await import("./index-De6vnxxQ.js");
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
        await dd();
      },
      dependencies: []
    },
    {
      name: "platform-services",
      displayName: "Platform Services",
      moduleInit: async () => {
        let e = false;
        try {
          e = Da();
        } catch {
        }
        try {
          e && console.time("Platform services initialise");
          const t = async (p, g) => lg() ? false : window.permissionConfirm ? window.permissionConfirm(g) : false, i = await ao.init({
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
          const o = i.value, c = o.getStorage();
          if (c.isErr()) throw c.error;
          const l = await c.value.init();
          if (l.isErr()) throw l.error;
          const h = o.getDeviceOrientation();
          if (h.isOk()) {
            const p = h.value;
            (await p.init()).isErr() ? console.warn("[Platform] DeviceOrientation not supported on this platform") : await p.start();
          }
          const d = o.getIMU();
          if (d.isOk()) {
            const p = d.value;
            (await p.init()).isErr() ? console.warn("[Platform] IMU not supported on this platform") : (await p.startAcceleration({
              frequency: Fa(),
              normalizeToENU: true
            }), await p.startGyroscope({
              frequency: Fa(),
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
          e = Da();
        } catch {
        }
        try {
          if (!Ls()) throw new Error("Platform services not initialized");
          e && console.time("Geolocation service initialise");
          const i = await si.getInstance();
          if (i.isErr()) throw i.error;
          const o = i.value;
          e && console.timeEnd("Geolocation service initialise"), e && console.time("Geolocation service start"), await o.startLocationUpdates(() => {
          }), e && console.timeEnd("Geolocation service start"), window.GeolocationManager = o, console.info("[Geolocation] Unified geolocation service initialized successfully using platform providers");
        } catch (t) {
          return console.error("[Geolocation] Failed to initialize geolocation service:", t), Promise.reject(t instanceof Error ? t : new Error(String(t)));
        }
      },
      dependencies: [
        "platform-services"
      ]
    }
  ];
  QR = rO;
  eA = Kg;
  Wa = {
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
  qg = () => {
    try {
      const t = localStorage.getItem("interface-language");
      if (t && Wa[t]) return t;
    } catch {
    }
    return navigator.language.startsWith("zh") ? "zh-CN" : "en";
  };
  Xg = qg();
  Ar = (e) => Wa[Xg][e] || Wa.en[e] || e;
  Jg = {
    class: "splash-container"
  };
  Zg = {
    class: "splash-content"
  };
  Qg = {
    key: 0,
    class: "loading-section"
  };
  eR = {
    class: "progress-container"
  };
  tR = {
    class: "progress-bar"
  };
  iR = {
    class: "progress-text"
  };
  oR = {
    class: "loading-details"
  };
  nR = {
    class: "current-module"
  };
  rR = {
    key: 1,
    class: "error-section"
  };
  sR = {
    class: "error-message"
  };
  aR = {
    key: 0
  };
  cR = {
    key: 1
  };
  lR = {
    key: 2,
    class: "timeout-section"
  };
  uR = {
    key: 3,
    class: "permission-section"
  };
  hR = {
    class: "permission-message"
  };
  dR = {
    class: "permission-buttons"
  };
  fR = Yf({
    __name: "SplashScreen",
    setup(e) {
      const t = Vt(0), i = Vt(""), o = Vt(""), c = Vt(0), l = Vt(0), h = Vt(false), d = Vt(false), p = Vt(""), g = Vt(false), T = Vt("");
      let N = null;
      const H = Vt("light"), C = () => {
        try {
          window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches ? H.value = "dark" : H.value = "light";
        } catch {
          H.value = "light";
        }
      }, G = () => {
        H.value === "dark" ? document.documentElement.setAttribute("data-theme", "dark") : document.documentElement.setAttribute("data-theme", "light"), console.info("[Splash Screen] Theme applied:", H.value);
      }, F = nc(() => Math.round(t.value / 100 * 100)), pe = {
        info: (...Te) => {
          const oe = Te.join(" ");
          console.info(oe), i.value = String(oe);
        },
        warn: (...Te) => {
          const oe = Te.join(" ");
          console.warn(oe), i.value = String(oe);
        },
        error: (...Te) => {
          const oe = Te.join(" ");
          console.error(oe), i.value = String(oe), p.value = String(oe);
        },
        debug: (...Te) => {
          console.debug(...Te);
        }
      }, re = {
        onModuleStart: (Te) => {
          o.value = Te, i.value = `Loading ${Te}...`;
        },
        onModuleComplete: (Te) => {
          l.value++, t.value = Math.min(100, l.value / c.value * 100), i.value = `Loaded ${Te}`;
        },
        onModuleError: (Te, oe) => {
          i.value = `Failed to load ${Te}`, p.value = oe.message;
        },
        onOverallProgress: (Te, oe) => {
          c.value = oe, l.value = Te, t.value = Math.min(100, Te / oe * 100);
        }
      }, k = () => {
        window.location.reload();
      }, J = (Te) => (T.value = Ar(Te), g.value = true, new Promise((oe) => {
        N = (he) => {
          g.value = false, oe(he);
        };
      })), Y = () => {
        N == null ? void 0 : N(true);
      }, ue = () => {
        N == null ? void 0 : N(false);
      };
      return window.permissionConfirm = J, tr(() => {
        var _a3;
        C(), G(), (_a3 = document.getElementById("pre-splash")) == null ? void 0 : _a3.remove();
        const Te = (oe, he = /* @__PURE__ */ new Set()) => {
          if (he.has(oe)) return 0;
          he.add(oe);
          const Q = cu.find((Le) => Le.name === oe);
          if (!Q) return 0;
          let Ie = 1;
          if (Q.dependencies) for (const Le of Q.dependencies) Ie += Te(Le, he);
          return Ie;
        };
        c.value = Te("trackmaker"), console.log("=== Start Loading Modules ==="), ed(cu, "trackmaker", 3e4, {
          logger: pe,
          progressReporter: re,
          printLog: true
        }).then(() => {
          i.value = "All modules loaded successfully", o.value = "TrackMaker", t.value = 100, console.log("=== All Modules Loaded ===");
        }).catch((oe) => {
          const he = String(oe.toString());
          if (he.toLowerCase().includes("timeout")) {
            const Q = he.split("Trackback").map((Ie) => Ie.replace(/((^:\s*)|(,\s*$))/g, ""));
            console.table(Q.map((Ie) => ({
              Trackback: Ie
            })), [
              "Trackback"
            ]), d.value = true;
          } else p.value = he, h.value = true;
          console.log("=== Failed to initialize all modules ==="), console.error(oe);
        });
      }), (Te, oe) => (ii(), Di("div", Jg, [
        Ve("div", Zg, [
          oe[8] || (oe[8] = Ve("div", {
            class: "logo-section"
          }, [
            Ve("div", {
              class: "app-logo"
            }, [
              Ve("img", {
                src: gT,
                alt: "TrackMaker Logo",
                height: "80",
                width: "80"
              })
            ]),
            Ve("h1", {
              class: "app-title"
            }, " TrackMaker ")
          ], -1)),
          !h.value && !d.value ? (ii(), Di("div", Qg, [
            Ve("div", eR, [
              Ve("div", tR, [
                Ve("div", {
                  class: "progress-fill",
                  style: us({
                    width: `${F.value}%`
                  })
                }, null, 4)
              ]),
              Ve("div", iR, Mi(F.value) + "% ", 1)
            ]),
            Ve("div", oR, [
              Ve("p", nR, " Loading: " + Mi(o.value), 1)
            ]),
            oe[0] || (oe[0] = Ve("div", {
              class: "loading-animation"
            }, [
              Ve("div", {
                class: "spinner"
              })
            ], -1))
          ])) : pr("", true),
          h.value ? (ii(), Di("div", rR, [
            oe[1] || (oe[1] = Ve("div", {
              class: "error-icon"
            }, " \u26A0\uFE0F ", -1)),
            oe[2] || (oe[2] = Ve("h2", null, "Loading Error", -1)),
            Ve("div", sR, [
              (ii(true), Di(Lt, null, ep((p.value ?? "").split(`
`), (he) => (ii(), Di("div", {
                key: he,
                style: {
                  display: "block",
                  "font-family": "monospace",
                  overflow: "auto"
                }
              }, [
                he.toLocaleLowerCase().includes("trackback") ? (ii(), Di("strong", aR, Mi(he), 1)) : (ii(), Di("span", cR, Mi(he), 1))
              ]))), 128))
            ]),
            Ve("button", {
              class: "retry-button",
              onClick: k
            }, " Retry ")
          ])) : pr("", true),
          d.value ? (ii(), Di("div", lR, [
            oe[3] || (oe[3] = Ve("div", {
              class: "timeout-icon"
            }, " \u23F0 ", -1)),
            oe[4] || (oe[4] = Ve("h2", null, "Connection Timeout", -1)),
            oe[5] || (oe[5] = Ve("p", null, "Unable to load required modules within the timeout period.", -1)),
            oe[6] || (oe[6] = Ve("p", null, "Please check your internet connection and try again.", -1)),
            Ve("button", {
              class: "retry-button",
              onClick: k
            }, " Retry ")
          ])) : pr("", true),
          g.value ? (ii(), Di("div", uR, [
            oe[7] || (oe[7] = Ve("div", {
              class: "permission-icon"
            }, " \u{1F4CD} ", -1)),
            Ve("h2", null, Mi(Ko(Ar)("permission.title")), 1),
            Ve("p", hR, Mi(T.value), 1),
            Ve("div", dR, [
              Ve("button", {
                class: "permission-button deny",
                onClick: ue
              }, Mi(Ko(Ar)("permission.deny")), 1),
              Ve("button", {
                class: "permission-button allow",
                onClick: Y
              }, Mi(Ko(Ar)("permission.allow")), 1)
            ])
          ])) : pr("", true)
        ])
      ]));
    }
  });
  pR = (e, t) => {
    const i = e.__vccOpts || e;
    for (const [o, c] of t) i[o] = c;
    return i;
  };
  TR = pR(fR, [
    [
      "__scopeId",
      "data-v-975c59e1"
    ]
  ]);
  Tc = Ph(TR);
  Tc.use(Nd());
  Tc.mount("#splash");
  window.splashScreen = Tc;
})();
export {
  Tr as $,
  Ko as A,
  Df as B,
  Cp as C,
  Mi as D,
  pr as E,
  Lt as F,
  Xo as G,
  Ta as H,
  NR as I,
  QO as J,
  AR as K,
  Ns as L,
  LR as M,
  xf as N,
  Vf as O,
  po as P,
  zi as Q,
  Nf as R,
  us as S,
  CR as T,
  DR as U,
  ct as V,
  Ka as W,
  mf as X,
  Ls as Y,
  So as Z,
  pR as _,
  __tla,
  Ve as a,
  VR as a$,
  bR as a0,
  yR as a1,
  RR as a2,
  wR as a3,
  ep as a4,
  FR as a5,
  JR as a6,
  MR as a7,
  ta as a8,
  wa as a9,
  BI as aA,
  fn as aB,
  Ol as aC,
  _E as aD,
  Wi as aE,
  xh as aF,
  pn as aG,
  GI as aH,
  zI as aI,
  _h as aJ,
  cI as aK,
  yi as aL,
  FE as aM,
  em as aN,
  NE as aO,
  Gh as aP,
  Rm as aQ,
  Ef as aR,
  Rt as aS,
  en as aT,
  gs as aU,
  gu as aV,
  Xd as aW,
  Mf as aX,
  IR as aY,
  $i as aZ,
  PR as a_,
  As as aa,
  BR as ab,
  WR as ac,
  xR as ad,
  kR as ae,
  GR as af,
  _R as ag,
  jR as ah,
  YR as ai,
  SR as aj,
  QR as ak,
  eA as al,
  UR as am,
  si as an,
  lg as ao,
  br as ap,
  Io as aq,
  To as ar,
  on as as,
  rl as at,
  JT as au,
  eI as av,
  iI as aw,
  XT as ax,
  kh as ay,
  Bh as az,
  $f as b,
  zR as b0,
  $R as b1,
  KR as b2,
  qR as b3,
  XR as b4,
  Jl as b5,
  Pe as b6,
  Di as c,
  Yf as d,
  Za as e,
  Vt as f,
  fs as g,
  kp as h,
  Pn as i,
  nc as j,
  ku as k,
  gR as l,
  tr as m,
  Ba as n,
  ii as o,
  Ff as p,
  OR as q,
  ca as r,
  Qa as s,
  vp as t,
  ER as u,
  vR as v,
  mR as w,
  ZR as x,
  HR as y,
  vt as z
};
