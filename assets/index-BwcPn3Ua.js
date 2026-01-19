const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["./App-pCgip8V6.js","./sketch-store-CCDTaTa-.js","./vue-i18n-CHuvWltl.js","./index-DOHjoVFI.js","./App-BkoMreV2.css","./index-Wr8_Y8Cc.js","./index-CdfVsmwz.css"])))=>i.map(i=>d[i]);
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
let Ls, fR, Xo, hR, Ia, rR, Rt, Pg, As, wi, uR, nR, To, Wf, _f, dR, Fu, eR, At, ji, iR, If, ls, pR, at, za, hf, XO, Be, dn, No, Tr, cR, lR, oR, aR, $f, TR, bR, IR, Mh, Ph, FI, un, fl, ME, Fi, _h, hn, HI, GI, Fh, tI, yE, $E, IE, Dh, pm, uf, Qo, gs, Tu, xd, bf, ZO, Vi, ER, ia, Kh, Rs, Pe, sR, NR, RR, SR, wR, gR, AR, OR, vR, CR, mR, ai, $s, Vg, Eo, Io, tn, Qc, jT, $T, qT, xT, Gt, ir, _, v, $l, yR, pu, vi, Pf, kf, Xa, ds, Dp, Dn, ic, er, Ja, wp, ka, oi, yf, LR, ua, pr, QO, Ct, Ko, tR, Nf, Ap, Hi;
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
  function Wa(e) {
    const t = /* @__PURE__ */ Object.create(null);
    for (const i of e.split(",")) t[i] = 1;
    return (i) => i in t;
  }
  const We = {}, zo = [], ui = () => {
  }, nu = () => false, ns = (e) => e.charCodeAt(0) === 111 && e.charCodeAt(1) === 110 && (e.charCodeAt(2) > 122 || e.charCodeAt(2) < 97), _a = (e) => e.startsWith("onUpdate:"), ft = Object.assign, Ga = (e, t) => {
    const i = e.indexOf(t);
    i > -1 && e.splice(i, 1);
  }, vd = Object.prototype.hasOwnProperty, xe = (e, t) => vd.call(e, t), Ae = Array.isArray, $o = (e) => Zn(e) === "[object Map]", ru = (e) => Zn(e) === "[object Set]", Cd = (e) => Zn(e) === "[object RegExp]", Ne = (e) => typeof e == "function", st = (e) => typeof e == "string", zi = (e) => typeof e == "symbol", Ke = (e) => e !== null && typeof e == "object", su = (e) => (Ke(e) || Ne(e)) && Ne(e.then) && Ne(e.catch), au = Object.prototype.toString, Zn = (e) => au.call(e), Hd = (e) => Zn(e).slice(8, -1), cu = (e) => Zn(e) === "[object Object]", rs = (e) => st(e) && e !== "NaN" && e[0] !== "-" && "" + parseInt(e, 10) === e, Ln = Wa(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"), ss = (e) => {
    const t = /* @__PURE__ */ Object.create(null);
    return ((i) => t[i] || (t[i] = e(i)));
  }, Dd = /-\w/g, Jt = ss((e) => e.replace(Dd, (t) => t.slice(1).toUpperCase())), Md = /\B([A-Z])/g, $i = ss((e) => e.replace(Md, "-$1").toLowerCase()), as = ss((e) => e.charAt(0).toUpperCase() + e.slice(1)), Ms = ss((e) => e ? `on${as(e)}` : ""), Bt = (e, t) => !Object.is(e, t), vn = (e, ...t) => {
    for (let i = 0; i < e.length; i++) e[i](...t);
  }, lu = (e, t, i, o = false) => {
    Object.defineProperty(e, t, {
      configurable: true,
      enumerable: false,
      writable: o,
      value: i
    });
  }, Fd = (e) => {
    const t = parseFloat(e);
    return isNaN(t) ? e : t;
  }, Pd = (e) => {
    const t = st(e) ? Number(e) : NaN;
    return isNaN(t) ? e : t;
  };
  let Tc;
  const cs = () => Tc || (Tc = typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : typeof window < "u" ? window : typeof global < "u" ? global : {});
  ls = function(e) {
    if (Ae(e)) {
      const t = {};
      for (let i = 0; i < e.length; i++) {
        const o = e[i], c = st(o) ? Gd(o) : ls(o);
        if (c) for (const l in c) t[l] = c[l];
      }
      return t;
    } else if (st(e) || Ke(e)) return e;
  };
  const Ud = /;(?![^(]*\))/g, Wd = /:([^]+)/, _d = /\/\*[^]*?\*\//g;
  function Gd(e) {
    const t = {};
    return e.replace(_d, "").split(Ud).forEach((i) => {
      if (i) {
        const o = i.split(Wd);
        o.length > 1 && (t[o[0].trim()] = o[1].trim());
      }
    }), t;
  }
  ka = function(e) {
    let t = "";
    if (st(e)) t = e;
    else if (Ae(e)) for (let i = 0; i < e.length; i++) {
      const o = ka(e[i]);
      o && (t += o + " ");
    }
    else if (Ke(e)) for (const i in e) e[i] && (t += i + " ");
    return t.trim();
  };
  const kd = "itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly", Bd = Wa(kd);
  function uu(e) {
    return !!e || e === "";
  }
  let hu, du, Fs;
  hu = (e) => !!(e && e.__v_isRef === true);
  Hi = (e) => st(e) ? e : e == null ? "" : Ae(e) || Ke(e) && (e.toString === au || !Ne(e.toString)) ? hu(e) ? Hi(e.value) : JSON.stringify(e, du, 2) : String(e);
  du = (e, t) => hu(t) ? du(e, t.value) : $o(t) ? {
    [`Map(${t.size})`]: [
      ...t.entries()
    ].reduce((i, [o, c], l) => (i[Fs(o, l) + " =>"] = c, i), {})
  } : ru(t) ? {
    [`Set(${t.size})`]: [
      ...t.values()
    ].map((i) => Fs(i))
  } : zi(t) ? Fs(t) : Ke(t) && !Ae(t) && !cu(t) ? String(t) : t;
  Fs = (e, t = "") => {
    var i;
    return zi(e) ? `Symbol(${(i = e.description) != null ? i : t})` : e;
  };
  function Yd(e) {
    return e == null ? "initial" : typeof e == "string" ? e === "" ? " " : e : String(e);
  }
  let bt;
  class fu {
    constructor(t = false) {
      this.detached = t, this._active = true, this._on = 0, this.effects = [], this.cleanups = [], this._isPaused = false, this.parent = bt, !t && bt && (this.index = (bt.scopes || (bt.scopes = [])).push(this) - 1);
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
        const i = bt;
        try {
          return bt = this, t();
        } finally {
          bt = i;
        }
      }
    }
    on() {
      ++this._on === 1 && (this.prevScope = bt, bt = this);
    }
    off() {
      this._on > 0 && --this._on === 0 && (bt = this.prevScope, this.prevScope = void 0);
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
  pu = function(e) {
    return new fu(e);
  };
  Tu = function() {
    return bt;
  };
  xd = function(e, t = false) {
    bt && bt.cleanups.push(e);
  };
  let Je;
  const Ps = /* @__PURE__ */ new WeakSet();
  class Iu {
    constructor(t) {
      this.fn = t, this.deps = void 0, this.depsTail = void 0, this.flags = 5, this.next = void 0, this.cleanup = void 0, this.scheduler = void 0, bt && bt.active && bt.effects.push(this);
    }
    pause() {
      this.flags |= 64;
    }
    resume() {
      this.flags & 64 && (this.flags &= -65, Ps.has(this) && (Ps.delete(this), this.trigger()));
    }
    notify() {
      this.flags & 2 && !(this.flags & 32) || this.flags & 8 || mu(this);
    }
    run() {
      if (!(this.flags & 1)) return this.fn();
      this.flags |= 2, Ic(this), gu(this);
      const t = Je, i = hi;
      Je = this, hi = true;
      try {
        return this.fn();
      } finally {
        Ou(this), Je = t, hi = i, this.flags &= -3;
      }
    }
    stop() {
      if (this.flags & 1) {
        for (let t = this.deps; t; t = t.nextDep) xa(t);
        this.deps = this.depsTail = void 0, Ic(this), this.onStop && this.onStop(), this.flags &= -2;
      }
    }
    trigger() {
      this.flags & 64 ? Ps.add(this) : this.scheduler ? this.scheduler() : this.runIfDirty();
    }
    runIfDirty() {
      aa(this) && this.run();
    }
    get dirty() {
      return aa(this);
    }
  }
  let Eu = 0, Cn, Hn;
  function mu(e, t = false) {
    if (e.flags |= 8, t) {
      e.next = Hn, Hn = e;
      return;
    }
    e.next = Cn, Cn = e;
  }
  function Ba() {
    Eu++;
  }
  function Ya() {
    if (--Eu > 0) return;
    if (Hn) {
      let t = Hn;
      for (Hn = void 0; t; ) {
        const i = t.next;
        t.next = void 0, t.flags &= -9, t = i;
      }
    }
    let e;
    for (; Cn; ) {
      let t = Cn;
      for (Cn = void 0; t; ) {
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
  function gu(e) {
    for (let t = e.deps; t; t = t.nextDep) t.version = -1, t.prevActiveLink = t.dep.activeLink, t.dep.activeLink = t;
  }
  function Ou(e) {
    let t, i = e.depsTail, o = i;
    for (; o; ) {
      const c = o.prevDep;
      o.version === -1 ? (o === i && (i = c), xa(o), jd(o)) : t = o, o.dep.activeLink = o.prevActiveLink, o.prevActiveLink = void 0, o = c;
    }
    e.deps = t, e.depsTail = i;
  }
  function aa(e) {
    for (let t = e.deps; t; t = t.nextDep) if (t.dep.version !== t.version || t.dep.computed && (Ru(t.dep.computed) || t.dep.version !== t.version)) return true;
    return !!e._dirty;
  }
  function Ru(e) {
    if (e.flags & 4 && !(e.flags & 16) || (e.flags &= -17, e.globalVersion === Yn) || (e.globalVersion = Yn, !e.isSSR && e.flags & 128 && (!e.deps && !e._dirty || !aa(e)))) return;
    e.flags |= 2;
    const t = e.dep, i = Je, o = hi;
    Je = e, hi = true;
    try {
      gu(e);
      const c = e.fn(e._value);
      (t.version === 0 || Bt(c, e._value)) && (e.flags |= 128, e._value = c, t.version++);
    } catch (c) {
      throw t.version++, c;
    } finally {
      Je = i, hi = o, Ou(e), e.flags &= -3;
    }
  }
  function xa(e, t = false) {
    const { dep: i, prevSub: o, nextSub: c } = e;
    if (o && (o.nextSub = c, e.prevSub = void 0), c && (c.prevSub = o, e.nextSub = void 0), i.subs === e && (i.subs = o, !o && i.computed)) {
      i.computed.flags &= -5;
      for (let l = i.computed.deps; l; l = l.nextDep) xa(l, true);
    }
    !t && !--i.sc && i.map && i.map.delete(i.key);
  }
  function jd(e) {
    const { prevDep: t, nextDep: i } = e;
    t && (t.nextDep = i, e.prevDep = void 0), i && (i.prevDep = t, e.nextDep = void 0);
  }
  let hi = true;
  const Au = [];
  function Bi() {
    Au.push(hi), hi = false;
  }
  function Yi() {
    const e = Au.pop();
    hi = e === void 0 ? true : e;
  }
  function Ic(e) {
    const { cleanup: t } = e;
    if (e.cleanup = void 0, t) {
      const i = Je;
      Je = void 0;
      try {
        t();
      } finally {
        Je = i;
      }
    }
  }
  let Yn = 0;
  class Vd {
    constructor(t, i) {
      this.sub = t, this.dep = i, this.version = i.version, this.nextDep = this.prevDep = this.nextSub = this.prevSub = this.prevActiveLink = void 0;
    }
  }
  class us {
    constructor(t) {
      this.computed = t, this.version = 0, this.activeLink = void 0, this.subs = void 0, this.map = void 0, this.key = void 0, this.sc = 0, this.__v_skip = true;
    }
    track(t) {
      if (!Je || !hi || Je === this.computed) return;
      let i = this.activeLink;
      if (i === void 0 || i.sub !== Je) i = this.activeLink = new Vd(Je, this), Je.deps ? (i.prevDep = Je.depsTail, Je.depsTail.nextDep = i, Je.depsTail = i) : Je.deps = Je.depsTail = i, wu(i);
      else if (i.version === -1 && (i.version = this.version, i.nextDep)) {
        const o = i.nextDep;
        o.prevDep = i.prevDep, i.prevDep && (i.prevDep.nextDep = o), i.prevDep = Je.depsTail, i.nextDep = void 0, Je.depsTail.nextDep = i, Je.depsTail = i, Je.deps === i && (Je.deps = o);
      }
      return i;
    }
    trigger(t) {
      this.version++, Yn++, this.notify(t);
    }
    notify(t) {
      Ba();
      try {
        for (let i = this.subs; i; i = i.prevSub) i.sub.notify() && i.sub.dep.notify();
      } finally {
        Ya();
      }
    }
  }
  function wu(e) {
    if (e.dep.sc++, e.sub.flags & 4) {
      const t = e.dep.computed;
      if (t && !e.dep.subs) {
        t.flags |= 20;
        for (let o = t.deps; o; o = o.nextDep) wu(o);
      }
      const i = e.dep.subs;
      i !== e && (e.prevSub = i, i && (i.nextSub = e)), e.dep.subs = e;
    }
  }
  const Mr = /* @__PURE__ */ new WeakMap(), Mo = /* @__PURE__ */ Symbol(""), ca = /* @__PURE__ */ Symbol(""), xn = /* @__PURE__ */ Symbol("");
  function Lt(e, t, i) {
    if (hi && Je) {
      let o = Mr.get(e);
      o || Mr.set(e, o = /* @__PURE__ */ new Map());
      let c = o.get(i);
      c || (o.set(i, c = new us()), c.map = o, c.key = i), c.track();
    }
  }
  function Pi(e, t, i, o, c, l) {
    const h = Mr.get(e);
    if (!h) {
      Yn++;
      return;
    }
    const d = (p) => {
      p && p.trigger();
    };
    if (Ba(), t === "clear") h.forEach(d);
    else {
      const p = Ae(e), O = p && rs(i);
      if (p && i === "length") {
        const T = Number(o);
        h.forEach((w, C) => {
          (C === "length" || C === xn || !zi(C) && C >= T) && d(w);
        });
      } else switch ((i !== void 0 || h.has(void 0)) && d(h.get(i)), O && d(h.get(xn)), t) {
        case "add":
          p ? O && d(h.get("length")) : (d(h.get(Mo)), $o(e) && d(h.get(ca)));
          break;
        case "delete":
          p || (d(h.get(Mo)), $o(e) && d(h.get(ca)));
          break;
        case "set":
          $o(e) && d(h.get(Mo));
          break;
      }
    }
    Ya();
  }
  function zd(e, t) {
    const i = Mr.get(e);
    return i && i.get(t);
  }
  function Go(e) {
    const t = Pe(e);
    return t === e ? t : (Lt(t, "iterate", xn), Xt(e) ? t : t.map(di));
  }
  function hs(e) {
    return Lt(e = Pe(e), "iterate", xn), e;
  }
  function oo(e, t) {
    return xi(e) ? Gi(e) ? Zo(di(t)) : Zo(t) : di(t);
  }
  const $d = {
    __proto__: null,
    [Symbol.iterator]() {
      return Us(this, Symbol.iterator, (e) => oo(this, e));
    },
    concat(...e) {
      return Go(this).concat(...e.map((t) => Ae(t) ? Go(t) : t));
    },
    entries() {
      return Us(this, "entries", (e) => (e[1] = oo(this, e[1]), e));
    },
    every(e, t) {
      return Li(this, "every", e, t, void 0, arguments);
    },
    filter(e, t) {
      return Li(this, "filter", e, t, (i) => i.map((o) => oo(this, o)), arguments);
    },
    find(e, t) {
      return Li(this, "find", e, t, (i) => oo(this, i), arguments);
    },
    findIndex(e, t) {
      return Li(this, "findIndex", e, t, void 0, arguments);
    },
    findLast(e, t) {
      return Li(this, "findLast", e, t, (i) => oo(this, i), arguments);
    },
    findLastIndex(e, t) {
      return Li(this, "findLastIndex", e, t, void 0, arguments);
    },
    forEach(e, t) {
      return Li(this, "forEach", e, t, void 0, arguments);
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
      return Li(this, "map", e, t, void 0, arguments);
    },
    pop() {
      return Tn(this, "pop");
    },
    push(...e) {
      return Tn(this, "push", e);
    },
    reduce(e, ...t) {
      return Ec(this, "reduce", e, t);
    },
    reduceRight(e, ...t) {
      return Ec(this, "reduceRight", e, t);
    },
    shift() {
      return Tn(this, "shift");
    },
    some(e, t) {
      return Li(this, "some", e, t, void 0, arguments);
    },
    splice(...e) {
      return Tn(this, "splice", e);
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
      return Tn(this, "unshift", e);
    },
    values() {
      return Us(this, "values", (e) => oo(this, e));
    }
  };
  function Us(e, t, i) {
    const o = hs(e), c = o[t]();
    return o !== e && !Xt(e) && (c._next = c.next, c.next = () => {
      const l = c._next();
      return l.done || (l.value = i(l.value)), l;
    }), c;
  }
  const Kd = Array.prototype;
  function Li(e, t, i, o, c, l) {
    const h = hs(e), d = h !== e && !Xt(e), p = h[t];
    if (p !== Kd[t]) {
      const w = p.apply(e, l);
      return d ? di(w) : w;
    }
    let O = i;
    h !== e && (d ? O = function(w, C) {
      return i.call(this, oo(e, w), C, e);
    } : i.length > 2 && (O = function(w, C) {
      return i.call(this, w, C, e);
    }));
    const T = p.call(h, O, o);
    return d && c ? c(T) : T;
  }
  function Ec(e, t, i, o) {
    const c = hs(e);
    let l = i;
    return c !== e && (Xt(e) ? i.length > 3 && (l = function(h, d, p) {
      return i.call(this, h, d, p, e);
    }) : l = function(h, d, p) {
      return i.call(this, h, oo(e, d), p, e);
    }), c[t](l, ...o);
  }
  function Ws(e, t, i) {
    const o = Pe(e);
    Lt(o, "iterate", xn);
    const c = o[t](...i);
    return (c === -1 || c === false) && fs(i[0]) ? (i[0] = Pe(i[0]), o[t](...i)) : c;
  }
  function Tn(e, t, i = []) {
    Bi(), Ba();
    const o = Pe(e)[t].apply(e, i);
    return Ya(), Yi(), o;
  }
  const qd = Wa("__proto__,__v_isRef,__isVue"), Su = new Set(Object.getOwnPropertyNames(Symbol).filter((e) => e !== "arguments" && e !== "caller").map((e) => Symbol[e]).filter(zi));
  function Xd(e) {
    zi(e) || (e = String(e));
    const t = Pe(this);
    return Lt(t, "has", e), t.hasOwnProperty(e);
  }
  class Nu {
    constructor(t = false, i = false) {
      this._isReadonly = t, this._isShallow = i;
    }
    get(t, i, o) {
      if (i === "__v_skip") return t.__v_skip;
      const c = this._isReadonly, l = this._isShallow;
      if (i === "__v_isReactive") return !c;
      if (i === "__v_isReadonly") return c;
      if (i === "__v_isShallow") return l;
      if (i === "__v_raw") return o === (c ? l ? af : vu : l ? Lu : bu).get(t) || Object.getPrototypeOf(t) === Object.getPrototypeOf(o) ? t : void 0;
      const h = Ae(t);
      if (!c) {
        let p;
        if (h && (p = $d[i])) return p;
        if (i === "hasOwnProperty") return Xd;
      }
      const d = Reflect.get(t, i, at(t) ? t : o);
      if ((zi(i) ? Su.has(i) : qd(i)) || (c || Lt(t, "get", i), l)) return d;
      if (at(d)) {
        const p = h && rs(i) ? d : d.value;
        return c && Ke(p) ? ua(p) : p;
      }
      return Ke(d) ? c ? ua(d) : ds(d) : d;
    }
  }
  class yu extends Nu {
    constructor(t = false) {
      super(false, t);
    }
    set(t, i, o, c) {
      let l = t[i];
      const h = Ae(t) && rs(i);
      if (!this._isShallow) {
        const O = xi(l);
        if (!Xt(o) && !xi(o) && (l = Pe(l), o = Pe(o)), !h && at(l) && !at(o)) return O || (l.value = o), true;
      }
      const d = h ? Number(i) < t.length : xe(t, i), p = Reflect.set(t, i, o, at(t) ? t : c);
      return t === Pe(c) && (d ? Bt(o, l) && Pi(t, "set", i, o) : Pi(t, "add", i, o)), p;
    }
    deleteProperty(t, i) {
      const o = xe(t, i);
      t[i];
      const c = Reflect.deleteProperty(t, i);
      return c && o && Pi(t, "delete", i, void 0), c;
    }
    has(t, i) {
      const o = Reflect.has(t, i);
      return (!zi(i) || !Su.has(i)) && Lt(t, "has", i), o;
    }
    ownKeys(t) {
      return Lt(t, "iterate", Ae(t) ? "length" : Mo), Reflect.ownKeys(t);
    }
  }
  class Jd extends Nu {
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
  const Zd = new yu(), Qd = new Jd(), ef = new yu(true);
  const la = (e) => e, cr = (e) => Reflect.getPrototypeOf(e);
  function tf(e, t, i) {
    return function(...o) {
      const c = this.__v_raw, l = Pe(c), h = $o(l), d = e === "entries" || e === Symbol.iterator && h, p = e === "keys" && h, O = c[e](...o), T = i ? la : t ? Zo : di;
      return !t && Lt(l, "iterate", p ? ca : Mo), {
        next() {
          const { value: w, done: C } = O.next();
          return C ? {
            value: w,
            done: C
          } : {
            value: d ? [
              T(w[0]),
              T(w[1])
            ] : T(w),
            done: C
          };
        },
        [Symbol.iterator]() {
          return this;
        }
      };
    };
  }
  function lr(e) {
    return function(...t) {
      return e === "delete" ? false : e === "clear" ? void 0 : this;
    };
  }
  function of(e, t) {
    const i = {
      get(c) {
        const l = this.__v_raw, h = Pe(l), d = Pe(c);
        e || (Bt(c, d) && Lt(h, "get", c), Lt(h, "get", d));
        const { has: p } = cr(h), O = t ? la : e ? Zo : di;
        if (p.call(h, c)) return O(l.get(c));
        if (p.call(h, d)) return O(l.get(d));
        l !== h && l.get(c);
      },
      get size() {
        const c = this.__v_raw;
        return !e && Lt(Pe(c), "iterate", Mo), c.size;
      },
      has(c) {
        const l = this.__v_raw, h = Pe(l), d = Pe(c);
        return e || (Bt(c, d) && Lt(h, "has", c), Lt(h, "has", d)), c === d ? l.has(c) : l.has(c) || l.has(d);
      },
      forEach(c, l) {
        const h = this, d = h.__v_raw, p = Pe(d), O = t ? la : e ? Zo : di;
        return !e && Lt(p, "iterate", Mo), d.forEach((T, w) => c.call(l, O(T), O(w), h));
      }
    };
    return ft(i, e ? {
      add: lr("add"),
      set: lr("set"),
      delete: lr("delete"),
      clear: lr("clear")
    } : {
      add(c) {
        !t && !Xt(c) && !xi(c) && (c = Pe(c));
        const l = Pe(this);
        return cr(l).has.call(l, c) || (l.add(c), Pi(l, "add", c, c)), this;
      },
      set(c, l) {
        !t && !Xt(l) && !xi(l) && (l = Pe(l));
        const h = Pe(this), { has: d, get: p } = cr(h);
        let O = d.call(h, c);
        O || (c = Pe(c), O = d.call(h, c));
        const T = p.call(h, c);
        return h.set(c, l), O ? Bt(l, T) && Pi(h, "set", c, l) : Pi(h, "add", c, l), this;
      },
      delete(c) {
        const l = Pe(this), { has: h, get: d } = cr(l);
        let p = h.call(l, c);
        p || (c = Pe(c), p = h.call(l, c)), d && d.call(l, c);
        const O = l.delete(c);
        return p && Pi(l, "delete", c, void 0), O;
      },
      clear() {
        const c = Pe(this), l = c.size !== 0, h = c.clear();
        return l && Pi(c, "clear", void 0, void 0), h;
      }
    }), [
      "keys",
      "values",
      "entries",
      Symbol.iterator
    ].forEach((c) => {
      i[c] = tf(c, e, t);
    }), i;
  }
  function ja(e, t) {
    const i = of(e, t);
    return (o, c, l) => c === "__v_isReactive" ? !e : c === "__v_isReadonly" ? e : c === "__v_raw" ? o : Reflect.get(xe(i, c) && c in o ? i : o, c, l);
  }
  const nf = {
    get: ja(false, false)
  }, rf = {
    get: ja(false, true)
  }, sf = {
    get: ja(true, false)
  };
  const bu = /* @__PURE__ */ new WeakMap(), Lu = /* @__PURE__ */ new WeakMap(), vu = /* @__PURE__ */ new WeakMap(), af = /* @__PURE__ */ new WeakMap();
  function cf(e) {
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
  function lf(e) {
    return e.__v_skip || !Object.isExtensible(e) ? 0 : cf(Hd(e));
  }
  ds = function(e) {
    return xi(e) ? e : Va(e, false, Zd, nf, bu);
  };
  uf = function(e) {
    return Va(e, false, ef, rf, Lu);
  };
  ua = function(e) {
    return Va(e, true, Qd, sf, vu);
  };
  function Va(e, t, i, o, c) {
    if (!Ke(e) || e.__v_raw && !(t && e.__v_isReactive)) return e;
    const l = lf(e);
    if (l === 0) return e;
    const h = c.get(e);
    if (h) return h;
    const d = new Proxy(e, l === 2 ? o : i);
    return c.set(e, d), d;
  }
  function Gi(e) {
    return xi(e) ? Gi(e.__v_raw) : !!(e && e.__v_isReactive);
  }
  function xi(e) {
    return !!(e && e.__v_isReadonly);
  }
  function Xt(e) {
    return !!(e && e.__v_isShallow);
  }
  function fs(e) {
    return e ? !!e.__v_raw : false;
  }
  Pe = function(e) {
    const t = e && e.__v_raw;
    return t ? Pe(t) : e;
  };
  za = function(e) {
    return !xe(e, "__v_skip") && Object.isExtensible(e) && lu(e, "__v_skip", true), e;
  };
  const di = (e) => Ke(e) ? ds(e) : e, Zo = (e) => Ke(e) ? ua(e) : e;
  at = function(e) {
    return e ? e.__v_isRef === true : false;
  };
  Gt = function(e) {
    return Cu(e, false);
  };
  hf = function(e) {
    return Cu(e, true);
  };
  function Cu(e, t) {
    return at(e) ? e : new df(e, t);
  }
  class df {
    constructor(t, i) {
      this.dep = new us(), this.__v_isRef = true, this.__v_isShallow = false, this._rawValue = i ? t : Pe(t), this._value = i ? t : di(t), this.__v_isShallow = i;
    }
    get value() {
      return this.dep.track(), this._value;
    }
    set value(t) {
      const i = this._rawValue, o = this.__v_isShallow || Xt(t) || xi(t);
      t = o ? t : Pe(t), Bt(t, i) && (this._rawValue = t, this._value = o ? t : di(t), this.dep.trigger());
    }
  }
  Ko = function(e) {
    return at(e) ? e.value : e;
  };
  ZO = function(e) {
    return Ne(e) ? e() : Ko(e);
  };
  const ff = {
    get: (e, t, i) => t === "__v_raw" ? e : Ko(Reflect.get(e, t, i)),
    set: (e, t, i, o) => {
      const c = e[t];
      return at(c) && !at(i) ? (c.value = i, true) : Reflect.set(e, t, i, o);
    }
  };
  function Hu(e) {
    return Gi(e) ? e : new Proxy(e, ff);
  }
  class pf {
    constructor(t) {
      this.__v_isRef = true, this._value = void 0;
      const i = this.dep = new us(), { get: o, set: c } = t(i.track.bind(i), i.trigger.bind(i));
      this._get = o, this._set = c;
    }
    get value() {
      return this._value = this._get();
    }
    set value(t) {
      this._set(t);
    }
  }
  function Tf(e) {
    return new pf(e);
  }
  If = function(e) {
    const t = Ae(e) ? new Array(e.length) : {};
    for (const i in e) t[i] = Du(e, i);
    return t;
  };
  class Ef {
    constructor(t, i, o) {
      this._object = t, this._key = i, this._defaultValue = o, this.__v_isRef = true, this._value = void 0, this._raw = Pe(t);
      let c = true, l = t;
      if (!Ae(t) || !rs(String(i))) do
        c = !fs(l) || Xt(l);
      while (c && (l = l.__v_raw));
      this._shallow = c;
    }
    get value() {
      let t = this._object[this._key];
      return this._shallow && (t = Ko(t)), this._value = t === void 0 ? this._defaultValue : t;
    }
    set value(t) {
      if (this._shallow && at(this._raw[this._key])) {
        const i = this._object[this._key];
        if (at(i)) {
          i.value = t;
          return;
        }
      }
      this._object[this._key] = t;
    }
    get dep() {
      return zd(this._raw, this._key);
    }
  }
  class mf {
    constructor(t) {
      this._getter = t, this.__v_isRef = true, this.__v_isReadonly = true, this._value = void 0;
    }
    get value() {
      return this._value = this._getter();
    }
  }
  QO = function(e, t, i) {
    return at(e) ? e : Ne(e) ? new mf(e) : Ke(e) && arguments.length > 1 ? Du(e, t, i) : Gt(e);
  };
  function Du(e, t, i) {
    return new Ef(e, t, i);
  }
  class gf {
    constructor(t, i, o) {
      this.fn = t, this.setter = i, this._value = void 0, this.dep = new us(this), this.__v_isRef = true, this.deps = void 0, this.depsTail = void 0, this.flags = 16, this.globalVersion = Yn - 1, this.next = void 0, this.effect = this, this.__v_isReadonly = !i, this.isSSR = o;
    }
    notify() {
      if (this.flags |= 16, !(this.flags & 8) && Je !== this) return mu(this, true), true;
    }
    get value() {
      const t = this.dep.track();
      return Ru(this), t && (t.version = this.dep.version), this._value;
    }
    set value(t) {
      this.setter && this.setter(t);
    }
  }
  function Of(e, t, i = false) {
    let o, c;
    return Ne(e) ? o = e : (o = e.get, c = e.set), new gf(o, c, i);
  }
  const ur = {}, Fr = /* @__PURE__ */ new WeakMap();
  let Lo;
  function Rf(e, t = false, i = Lo) {
    if (i) {
      let o = Fr.get(i);
      o || Fr.set(i, o = []), o.push(e);
    }
  }
  function Af(e, t, i = We) {
    const { immediate: o, deep: c, once: l, scheduler: h, augmentJob: d, call: p } = i, O = (G) => c ? G : Xt(G) || c === false || c === 0 ? Ui(G, 1) : Ui(G);
    let T, w, C, L, P = false, D = false;
    if (at(e) ? (w = () => e.value, P = Xt(e)) : Gi(e) ? (w = () => O(e), P = true) : Ae(e) ? (D = true, P = e.some((G) => Gi(G) || Xt(G)), w = () => e.map((G) => {
      if (at(G)) return G.value;
      if (Gi(G)) return O(G);
      if (Ne(G)) return p ? p(G, 2) : G();
    })) : Ne(e) ? t ? w = p ? () => p(e, 2) : e : w = () => {
      if (C) {
        Bi();
        try {
          C();
        } finally {
          Yi();
        }
      }
      const G = Lo;
      Lo = T;
      try {
        return p ? p(e, 3, [
          L
        ]) : e(L);
      } finally {
        Lo = G;
      }
    } : w = ui, t && c) {
      const G = w, ue = c === true ? 1 / 0 : c;
      w = () => Ui(G(), ue);
    }
    const de = Tu(), ie = () => {
      T.stop(), de && de.active && Ga(de.effects, T);
    };
    if (l && t) {
      const G = t;
      t = (...ue) => {
        G(...ue), ie();
      };
    }
    let K = D ? new Array(e.length).fill(ur) : ur;
    const V = (G) => {
      if (!(!(T.flags & 1) || !T.dirty && !G)) if (t) {
        const ue = T.run();
        if (c || P || (D ? ue.some((Te, ne) => Bt(Te, K[ne])) : Bt(ue, K))) {
          C && C();
          const Te = Lo;
          Lo = T;
          try {
            const ne = [
              ue,
              K === ur ? void 0 : D && K[0] === ur ? [] : K,
              L
            ];
            K = ue, p ? p(t, 3, ne) : t(...ne);
          } finally {
            Lo = Te;
          }
        }
      } else T.run();
    };
    return d && d(V), T = new Iu(w), T.scheduler = h ? () => h(V, false) : V, L = (G) => Rf(G, false, T), C = T.onStop = () => {
      const G = Fr.get(T);
      if (G) {
        if (p) p(G, 4);
        else for (const ue of G) ue();
        Fr.delete(T);
      }
    }, t ? o ? V(true) : K = T.run() : h ? h(V.bind(null, true), true) : T.run(), ie.pause = T.pause.bind(T), ie.resume = T.resume.bind(T), ie.stop = ie, ie;
  }
  function Ui(e, t = 1 / 0, i) {
    if (t <= 0 || !Ke(e) || e.__v_skip || (i = i || /* @__PURE__ */ new Map(), (i.get(e) || 0) >= t)) return e;
    if (i.set(e, t), t--, at(e)) Ui(e.value, t, i);
    else if (Ae(e)) for (let o = 0; o < e.length; o++) Ui(e[o], t, i);
    else if (ru(e) || $o(e)) e.forEach((o) => {
      Ui(o, t, i);
    });
    else if (cu(e)) {
      for (const o in e) Ui(e[o], t, i);
      for (const o of Object.getOwnPropertySymbols(e)) Object.prototype.propertyIsEnumerable.call(e, o) && Ui(e[o], t, i);
    }
    return e;
  }
  function Qn(e, t, i, o) {
    try {
      return o ? e(...o) : e();
    } catch (c) {
      ps(c, t, i);
    }
  }
  function fi(e, t, i, o) {
    if (Ne(e)) {
      const c = Qn(e, t, i, o);
      return c && su(c) && c.catch((l) => {
        ps(l, t, i);
      }), c;
    }
    if (Ae(e)) {
      const c = [];
      for (let l = 0; l < e.length; l++) c.push(fi(e[l], t, i, o));
      return c;
    }
  }
  function ps(e, t, i, o = true) {
    const c = t ? t.vnode : null, { errorHandler: l, throwUnhandledErrorInProduction: h } = t && t.appContext.config || We;
    if (t) {
      let d = t.parent;
      const p = t.proxy, O = `https://vuejs.org/error-reference/#runtime-${i}`;
      for (; d; ) {
        const T = d.ec;
        if (T) {
          for (let w = 0; w < T.length; w++) if (T[w](e, p, O) === false) return;
        }
        d = d.parent;
      }
      if (l) {
        Bi(), Qn(l, null, 10, [
          e,
          p,
          O
        ]), Yi();
        return;
      }
    }
    wf(e, i, c, o, h);
  }
  function wf(e, t, i, o = true, c = false) {
    if (c) throw e;
    console.error(e);
  }
  const Ut = [];
  let gi = -1;
  const qo = [];
  let no = null, Vo = 0;
  const Mu = Promise.resolve();
  let Pr = null;
  Fu = function(e) {
    const t = Pr || Mu;
    return e ? t.then(this ? e.bind(this) : e) : t;
  };
  function Sf(e) {
    let t = gi + 1, i = Ut.length;
    for (; t < i; ) {
      const o = t + i >>> 1, c = Ut[o], l = jn(c);
      l < e || l === e && c.flags & 2 ? t = o + 1 : i = o;
    }
    return t;
  }
  function $a(e) {
    if (!(e.flags & 1)) {
      const t = jn(e), i = Ut[Ut.length - 1];
      !i || !(e.flags & 2) && t >= jn(i) ? Ut.push(e) : Ut.splice(Sf(t), 0, e), e.flags |= 1, Pu();
    }
  }
  function Pu() {
    Pr || (Pr = Mu.then(_u));
  }
  function Uu(e) {
    Ae(e) ? qo.push(...e) : no && e.id === -1 ? no.splice(Vo + 1, 0, e) : e.flags & 1 || (qo.push(e), e.flags |= 1), Pu();
  }
  function mc(e, t, i = gi + 1) {
    for (; i < Ut.length; i++) {
      const o = Ut[i];
      if (o && o.flags & 2) {
        if (e && o.id !== e.uid) continue;
        Ut.splice(i, 1), i--, o.flags & 4 && (o.flags &= -2), o(), o.flags & 4 || (o.flags &= -2);
      }
    }
  }
  function Wu(e) {
    if (qo.length) {
      const t = [
        ...new Set(qo)
      ].sort((i, o) => jn(i) - jn(o));
      if (qo.length = 0, no) {
        no.push(...t);
        return;
      }
      for (no = t, Vo = 0; Vo < no.length; Vo++) {
        const i = no[Vo];
        i.flags & 4 && (i.flags &= -2), i.flags & 8 || i(), i.flags &= -2;
      }
      no = null, Vo = 0;
    }
  }
  const jn = (e) => e.id == null ? e.flags & 2 ? -1 : 1 / 0 : e.id;
  function _u(e) {
    try {
      for (gi = 0; gi < Ut.length; gi++) {
        const t = Ut[gi];
        t && !(t.flags & 8) && (t.flags & 4 && (t.flags &= -2), Qn(t, t.i, t.i ? 15 : 14), t.flags & 4 || (t.flags &= -2));
      }
    } finally {
      for (; gi < Ut.length; gi++) {
        const t = Ut[gi];
        t && (t.flags &= -2);
      }
      gi = -1, Ut.length = 0, Wu(), Pr = null, (Ut.length || qo.length) && _u();
    }
  }
  let wt = null, Gu = null;
  function Ur(e) {
    const t = wt;
    return wt = e, Gu = e && e.type.__scopeId || null, t;
  }
  Nf = function(e, t = wt, i) {
    if (!t || e._n) return e;
    const o = (...c) => {
      o._d && Yr(-1);
      const l = Ur(t);
      let h;
      try {
        h = e(...c);
      } finally {
        Ur(l), o._d && Yr(1);
      }
      return h;
    };
    return o._n = true, o._c = true, o._d = true, o;
  };
  eR = function(e, t) {
    if (wt === null) return e;
    const i = Os(wt), o = e.dirs || (e.dirs = []);
    for (let c = 0; c < t.length; c++) {
      let [l, h, d, p = We] = t[c];
      l && (Ne(l) && (l = {
        mounted: l,
        updated: l
      }), l.deep && Ui(h), o.push({
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
  function Ro(e, t, i, o) {
    const c = e.dirs, l = t && t.dirs;
    for (let h = 0; h < c.length; h++) {
      const d = c[h];
      l && (d.oldValue = l[h].value);
      let p = d.dir[o];
      p && (Bi(), fi(p, i, 8, [
        e.el,
        d,
        e,
        t
      ]), Yi());
    }
  }
  yf = function(e, t) {
    if (vt) {
      let i = vt.provides;
      const o = vt.parent && vt.parent.provides;
      o === i && (i = vt.provides = Object.create(o)), i[e] = t;
    }
  };
  Dn = function(e, t, i = false) {
    const o = To();
    if (o || Fo) {
      let c = Fo ? Fo._context.provides : o ? o.parent == null || o.ce ? o.vnode.appContext && o.vnode.appContext.provides : o.parent.provides : void 0;
      if (c && e in c) return c[e];
      if (arguments.length > 1) return i && Ne(t) ? t.call(o && o.proxy) : t;
    }
  };
  bf = function() {
    return !!(To() || Fo);
  };
  const Lf = /* @__PURE__ */ Symbol.for("v-scx"), vf = () => Dn(Lf);
  tR = function(e, t) {
    return Ts(e, null, t);
  };
  function Cf(e, t) {
    return Ts(e, null, {
      flush: "sync"
    });
  }
  Xo = function(e, t, i) {
    return Ts(e, t, i);
  };
  function Ts(e, t, i = We) {
    const { immediate: o, deep: c, flush: l, once: h } = i, d = ft({}, i), p = t && o || !t && l !== "post";
    let O;
    if ($n) {
      if (l === "sync") {
        const L = vf();
        O = L.__watcherHandles || (L.__watcherHandles = []);
      } else if (!p) {
        const L = () => {
        };
        return L.stop = ui, L.resume = ui, L.pause = ui, L;
      }
    }
    const T = vt;
    d.call = (L, P, D) => fi(L, T, P, D);
    let w = false;
    l === "post" ? d.scheduler = (L) => {
      Et(L, T && T.suspense);
    } : l !== "sync" && (w = true, d.scheduler = (L, P) => {
      P ? L() : $a(L);
    }), d.augmentJob = (L) => {
      t && (L.flags |= 4), w && (L.flags |= 2, T && (L.id = T.uid, L.i = T));
    };
    const C = Af(e, t, d);
    return $n && (O ? O.push(C) : p && C()), C;
  }
  function Hf(e, t, i) {
    const o = this.proxy, c = st(e) ? e.includes(".") ? ku(o, e) : () => o[e] : e.bind(o, o);
    let l;
    Ne(t) ? l = t : (l = t.handler, i = t);
    const h = tr(this), d = Ts(c, l.bind(o), i);
    return h(), d;
  }
  function ku(e, t) {
    const i = t.split(".");
    return () => {
      let o = e;
      for (let c = 0; c < i.length && o; c++) o = o[i[c]];
      return o;
    };
  }
  const Bu = /* @__PURE__ */ Symbol("_vte"), Yu = (e) => e.__isTeleport, Mn = (e) => e && (e.disabled || e.disabled === ""), gc = (e) => e && (e.defer || e.defer === ""), Oc = (e) => typeof SVGElement < "u" && e instanceof SVGElement, Rc = (e) => typeof MathMLElement == "function" && e instanceof MathMLElement, ha = (e, t) => {
    const i = e && e.to;
    return st(i) ? t ? t(i) : null : i;
  }, xu = {
    name: "Teleport",
    __isTeleport: true,
    process(e, t, i, o, c, l, h, d, p, O) {
      const { mc: T, pc: w, pbc: C, o: { insert: L, querySelector: P, createText: D, createComment: de } } = O, ie = Mn(t.props);
      let { shapeFlag: K, children: V, dynamicChildren: G } = t;
      if (e == null) {
        const ue = t.el = D(""), Te = t.anchor = D("");
        L(ue, i, o), L(Te, i, o);
        const ne = (te, Ie) => {
          K & 16 && T(V, te, Ie, c, l, h, d, p);
        }, he = () => {
          const te = t.target = ha(t.props, P), Ie = ju(te, t, D, L);
          te && (h !== "svg" && Oc(te) ? h = "svg" : h !== "mathml" && Rc(te) && (h = "mathml"), c && c.isCE && (c.ce._teleportTargets || (c.ce._teleportTargets = /* @__PURE__ */ new Set())).add(te), ie || (ne(te, Ie), wr(t, false)));
        };
        ie && (ne(i, Te), wr(t, true)), gc(t.props) ? (t.el.__isMounted = false, Et(() => {
          he(), delete t.el.__isMounted;
        }, l)) : he();
      } else {
        if (gc(t.props) && e.el.__isMounted === false) {
          Et(() => {
            xu.process(e, t, i, o, c, l, h, d, p, O);
          }, l);
          return;
        }
        t.el = e.el, t.targetStart = e.targetStart;
        const ue = t.anchor = e.anchor, Te = t.target = e.target, ne = t.targetAnchor = e.targetAnchor, he = Mn(e.props), te = he ? i : Te, Ie = he ? ue : ne;
        if (h === "svg" || Oc(Te) ? h = "svg" : (h === "mathml" || Rc(Te)) && (h = "mathml"), G ? (C(e.dynamicChildren, G, te, c, l, h, d), ec(e, t, true)) : p || w(e, t, te, Ie, c, l, h, d, false), ie) he ? t.props && e.props && t.props.to !== e.props.to && (t.props.to = e.props.to) : hr(t, i, ue, O, 1);
        else if ((t.props && t.props.to) !== (e.props && e.props.to)) {
          const Le = t.target = ha(t.props, P);
          Le && hr(t, Le, null, O, 0);
        } else he && hr(t, Te, ne, O, 1);
        wr(t, ie);
      }
    },
    remove(e, t, i, { um: o, o: { remove: c } }, l) {
      const { shapeFlag: h, children: d, anchor: p, targetStart: O, targetAnchor: T, target: w, props: C } = e;
      if (w && (c(O), c(T)), l && c(p), h & 16) {
        const L = l || !Mn(C);
        for (let P = 0; P < d.length; P++) {
          const D = d[P];
          o(D, t, i, L, !!D.dynamicChildren);
        }
      }
    },
    move: hr,
    hydrate: Df
  };
  function hr(e, t, i, { o: { insert: o }, m: c }, l = 2) {
    l === 0 && o(e.targetAnchor, t, i);
    const { el: h, anchor: d, shapeFlag: p, children: O, props: T } = e, w = l === 2;
    if (w && o(h, t, i), (!w || Mn(T)) && p & 16) for (let C = 0; C < O.length; C++) c(O[C], t, i, 2);
    w && o(d, t, i);
  }
  function Df(e, t, i, o, c, l, { o: { nextSibling: h, parentNode: d, querySelector: p, insert: O, createText: T } }, w) {
    function C(D, de, ie, K) {
      de.anchor = w(h(D), de, d(D), i, o, c, l), de.targetStart = ie, de.targetAnchor = K;
    }
    const L = t.target = ha(t.props, p), P = Mn(t.props);
    if (L) {
      const D = L._lpa || L.firstChild;
      if (t.shapeFlag & 16) if (P) C(e, t, D, D && h(D));
      else {
        t.anchor = h(e);
        let de = D;
        for (; de; ) {
          if (de && de.nodeType === 8) {
            if (de.data === "teleport start anchor") t.targetStart = de;
            else if (de.data === "teleport anchor") {
              t.targetAnchor = de, L._lpa = t.targetAnchor && h(t.targetAnchor);
              break;
            }
          }
          de = h(de);
        }
        t.targetAnchor || ju(L, t, T, O), w(D && h(D), t, L, i, o, c, l);
      }
      wr(t, P);
    } else P && t.shapeFlag & 16 && C(e, t, e, h(e));
    return t.anchor && h(t.anchor);
  }
  iR = xu;
  function wr(e, t) {
    const i = e.ctx;
    if (i && i.ut) {
      let o, c;
      for (t ? (o = e.el, c = e.anchor) : (o = e.targetStart, c = e.targetAnchor); o && o !== c; ) o.nodeType === 1 && o.setAttribute("data-v-owner", i.uid), o = o.nextSibling;
      i.ut();
    }
  }
  function ju(e, t, i, o) {
    const c = t.targetStart = i(""), l = t.targetAnchor = i("");
    return c[Bu] = l, e && (o(c, e), o(l, e)), l;
  }
  const Mi = /* @__PURE__ */ Symbol("_leaveCb"), dr = /* @__PURE__ */ Symbol("_enterCb");
  function Vu() {
    const e = {
      isMounted: false,
      isLeaving: false,
      isUnmounting: false,
      leavingVNodes: /* @__PURE__ */ new Map()
    };
    return er(() => {
      e.isMounted = true;
    }), Xa(() => {
      e.isUnmounting = true;
    }), e;
  }
  const ti = [
    Function,
    Array
  ], zu = {
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
  }, $u = (e) => {
    const t = e.subTree;
    return t.component ? $u(t.component) : t;
  }, Mf = {
    name: "BaseTransition",
    props: zu,
    setup(e, { slots: t }) {
      const i = To(), o = Vu();
      return () => {
        const c = t.default && Ka(t.default(), true);
        if (!c || !c.length) return;
        const l = Ku(c), h = Pe(e), { mode: d } = h;
        if (o.isLeaving) return _s(l);
        const p = Ac(l);
        if (!p) return _s(l);
        let O = Vn(p, h, o, i, (w) => O = w);
        p.type !== At && fo(p, O);
        let T = i.subTree && Ac(i.subTree);
        if (T && T.type !== At && !so(T, p) && $u(i).type !== At) {
          let w = Vn(T, h, o, i);
          if (fo(T, w), d === "out-in" && p.type !== At) return o.isLeaving = true, w.afterLeave = () => {
            o.isLeaving = false, i.job.flags & 8 || i.update(), delete w.afterLeave, T = void 0;
          }, _s(l);
          d === "in-out" && p.type !== At ? w.delayLeave = (C, L, P) => {
            const D = qu(o, T);
            D[String(T.key)] = T, C[Mi] = () => {
              L(), C[Mi] = void 0, delete O.delayedLeave, T = void 0;
            }, O.delayedLeave = () => {
              P(), delete O.delayedLeave, T = void 0;
            };
          } : T = void 0;
        } else T && (T = void 0);
        return l;
      };
    }
  };
  function Ku(e) {
    let t = e[0];
    if (e.length > 1) {
      for (const i of e) if (i.type !== At) {
        t = i;
        break;
      }
    }
    return t;
  }
  const Ff = Mf;
  function qu(e, t) {
    const { leavingVNodes: i } = e;
    let o = i.get(t.type);
    return o || (o = /* @__PURE__ */ Object.create(null), i.set(t.type, o)), o;
  }
  function Vn(e, t, i, o, c) {
    const { appear: l, mode: h, persisted: d = false, onBeforeEnter: p, onEnter: O, onAfterEnter: T, onEnterCancelled: w, onBeforeLeave: C, onLeave: L, onAfterLeave: P, onLeaveCancelled: D, onBeforeAppear: de, onAppear: ie, onAfterAppear: K, onAppearCancelled: V } = t, G = String(e.key), ue = qu(i, e), Te = (te, Ie) => {
      te && fi(te, o, 9, Ie);
    }, ne = (te, Ie) => {
      const Le = Ie[1];
      Te(te, Ie), Ae(te) ? te.every((fe) => fe.length <= 1) && Le() : te.length <= 1 && Le();
    }, he = {
      mode: h,
      persisted: d,
      beforeEnter(te) {
        let Ie = p;
        if (!i.isMounted) if (l) Ie = de || p;
        else return;
        te[Mi] && te[Mi](true);
        const Le = ue[G];
        Le && so(e, Le) && Le.el[Mi] && Le.el[Mi](), Te(Ie, [
          te
        ]);
      },
      enter(te) {
        let Ie = O, Le = T, fe = w;
        if (!i.isMounted) if (l) Ie = ie || O, Le = K || T, fe = V || w;
        else return;
        let ke = false;
        const ht = te[dr] = (xt) => {
          ke || (ke = true, xt ? Te(fe, [
            te
          ]) : Te(Le, [
            te
          ]), he.delayedLeave && he.delayedLeave(), te[dr] = void 0);
        };
        Ie ? ne(Ie, [
          te,
          ht
        ]) : ht();
      },
      leave(te, Ie) {
        const Le = String(e.key);
        if (te[dr] && te[dr](true), i.isUnmounting) return Ie();
        Te(C, [
          te
        ]);
        let fe = false;
        const ke = te[Mi] = (ht) => {
          fe || (fe = true, Ie(), ht ? Te(D, [
            te
          ]) : Te(P, [
            te
          ]), te[Mi] = void 0, ue[Le] === e && delete ue[Le]);
        };
        ue[Le] = e, L ? ne(L, [
          te,
          ke
        ]) : ke();
      },
      clone(te) {
        const Ie = Vn(te, t, i, o, c);
        return c && c(Ie), Ie;
      }
    };
    return he;
  }
  function _s(e) {
    if (Is(e)) return e = ji(e), e.children = null, e;
  }
  function Ac(e) {
    if (!Is(e)) return Yu(e.type) && e.children ? Ku(e.children) : e;
    if (e.component) return e.component.subTree;
    const { shapeFlag: t, children: i } = e;
    if (i) {
      if (t & 16) return i[0];
      if (t & 32 && Ne(i.default)) return i.default();
    }
  }
  function fo(e, t) {
    e.shapeFlag & 6 && e.component ? (e.transition = t, fo(e.component.subTree, t)) : e.shapeFlag & 128 ? (e.ssContent.transition = t.clone(e.ssContent), e.ssFallback.transition = t.clone(e.ssFallback)) : e.transition = t;
  }
  function Ka(e, t = false, i) {
    let o = [], c = 0;
    for (let l = 0; l < e.length; l++) {
      let h = e[l];
      const d = i == null ? h.key : String(i) + String(h.key != null ? h.key : l);
      h.type === Rt ? (h.patchFlag & 128 && c++, o = o.concat(Ka(h.children, t, d))) : (t || h.type !== At) && o.push(d != null ? ji(h, {
        key: d
      }) : h);
    }
    if (c > 1) for (let l = 0; l < o.length; l++) o[l].patchFlag = -2;
    return o;
  }
  Pf = function(e, t) {
    return Ne(e) ? ft({
      name: e.name
    }, t, {
      setup: e
    }) : e;
  };
  function Xu(e) {
    e.ids = [
      e.ids[0] + e.ids[2]++ + "-",
      0,
      0
    ];
  }
  oR = function(e) {
    const t = To(), i = hf(null);
    if (t) {
      const c = t.refs === We ? t.refs = {} : t.refs;
      Object.defineProperty(c, e, {
        enumerable: true,
        get: () => i.value,
        set: (l) => i.value = l
      });
    }
    return i;
  };
  const Wr = /* @__PURE__ */ new WeakMap();
  function Fn(e, t, i, o, c = false) {
    if (Ae(e)) {
      e.forEach((P, D) => Fn(P, t && (Ae(t) ? t[D] : t), i, o, c));
      return;
    }
    if (uo(o) && !c) {
      o.shapeFlag & 512 && o.type.__asyncResolved && o.component.subTree.component && Fn(e, t, i, o.component.subTree);
      return;
    }
    const l = o.shapeFlag & 4 ? Os(o.component) : o.el, h = c ? null : l, { i: d, r: p } = e, O = t && t.r, T = d.refs === We ? d.refs = {} : d.refs, w = d.setupState, C = Pe(w), L = w === We ? nu : (P) => xe(C, P);
    if (O != null && O !== p) {
      if (wc(t), st(O)) T[O] = null, L(O) && (w[O] = null);
      else if (at(O)) {
        O.value = null;
        const P = t;
        P.k && (T[P.k] = null);
      }
    }
    if (Ne(p)) Qn(p, d, 12, [
      h,
      T
    ]);
    else {
      const P = st(p), D = at(p);
      if (P || D) {
        const de = () => {
          if (e.f) {
            const ie = P ? L(p) ? w[p] : T[p] : p.value;
            if (c) Ae(ie) && Ga(ie, l);
            else if (Ae(ie)) ie.includes(l) || ie.push(l);
            else if (P) T[p] = [
              l
            ], L(p) && (w[p] = T[p]);
            else {
              const K = [
                l
              ];
              p.value = K, e.k && (T[e.k] = K);
            }
          } else P ? (T[p] = h, L(p) && (w[p] = h)) : D && (p.value = h, e.k && (T[e.k] = h));
        };
        if (h) {
          const ie = () => {
            de(), Wr.delete(e);
          };
          ie.id = -1, Wr.set(e, ie), Et(ie, i);
        } else wc(e), de();
      }
    }
  }
  function wc(e) {
    const t = Wr.get(e);
    t && (t.flags |= 8, Wr.delete(e));
  }
  cs().requestIdleCallback;
  cs().cancelIdleCallback;
  let uo, Is, Uf;
  uo = (e) => !!e.type.__asyncLoader;
  Is = (e) => e.type.__isKeepAlive;
  Uf = {
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
      const i = To(), o = i.ctx;
      if (!o.renderer) return () => {
        const K = t.default && t.default();
        return K && K.length === 1 ? K[0] : K;
      };
      const c = /* @__PURE__ */ new Map(), l = /* @__PURE__ */ new Set();
      let h = null;
      const d = i.suspense, { renderer: { p, m: O, um: T, o: { createElement: w } } } = o, C = w("div");
      o.activate = (K, V, G, ue, Te) => {
        const ne = K.component;
        O(K, V, G, 0, d), p(ne.vnode, K, V, G, ne, d, ue, K.slotScopeIds, Te), Et(() => {
          ne.isDeactivated = false, ne.a && vn(ne.a);
          const he = K.props && K.props.onVnodeMounted;
          he && ii(he, ne.parent, K);
        }, d);
      }, o.deactivate = (K) => {
        const V = K.component;
        kr(V.m), kr(V.a), O(K, C, null, 1, d), Et(() => {
          V.da && vn(V.da);
          const G = K.props && K.props.onVnodeUnmounted;
          G && ii(G, V.parent, K), V.isDeactivated = true;
        }, d);
      };
      function L(K) {
        Gs(K), T(K, i, d, true);
      }
      function P(K) {
        c.forEach((V, G) => {
          const ue = ma(uo(V) ? V.type.__asyncResolved || {} : V.type);
          ue && !K(ue) && D(G);
        });
      }
      function D(K) {
        const V = c.get(K);
        V && (!h || !so(V, h)) ? L(V) : h && Gs(h), c.delete(K), l.delete(K);
      }
      Xo(() => [
        e.include,
        e.exclude
      ], ([K, V]) => {
        K && P((G) => Sn(K, G)), V && P((G) => !Sn(V, G));
      }, {
        flush: "post",
        deep: true
      });
      let de = null;
      const ie = () => {
        de != null && (Br(i.subTree.type) ? Et(() => {
          c.set(de, fr(i.subTree));
        }, i.subTree.suspense) : c.set(de, fr(i.subTree)));
      };
      return er(ie), qa(ie), Xa(() => {
        c.forEach((K) => {
          const { subTree: V, suspense: G } = i, ue = fr(V);
          if (K.type === ue.type && K.key === ue.key) {
            Gs(ue);
            const Te = ue.component.da;
            Te && Et(Te, G);
            return;
          }
          L(K);
        });
      }), () => {
        if (de = null, !t.default) return h = null;
        const K = t.default(), V = K[0];
        if (K.length > 1) return h = null, K;
        if (!Qo(V) || !(V.shapeFlag & 4) && !(V.shapeFlag & 128)) return h = null, V;
        let G = fr(V);
        if (G.type === At) return h = null, G;
        const ue = G.type, Te = ma(uo(G) ? G.type.__asyncResolved || {} : ue), { include: ne, exclude: he, max: te } = e;
        if (ne && (!Te || !Sn(ne, Te)) || he && Te && Sn(he, Te)) return G.shapeFlag &= -257, h = G, V;
        const Ie = G.key == null ? ue : G.key, Le = c.get(Ie);
        return G.el && (G = ji(G), V.shapeFlag & 128 && (V.ssContent = G)), de = Ie, Le ? (G.el = Le.el, G.component = Le.component, G.transition && fo(G, G.transition), G.shapeFlag |= 512, l.delete(Ie), l.add(Ie)) : (l.add(Ie), te && l.size > parseInt(te, 10) && D(l.values().next().value)), G.shapeFlag |= 256, h = G, Br(V.type) ? V : G;
      };
    }
  };
  nR = Uf;
  function Sn(e, t) {
    return Ae(e) ? e.some((i) => Sn(i, t)) : st(e) ? e.split(",").includes(t) : Cd(e) ? (e.lastIndex = 0, e.test(t)) : false;
  }
  Wf = function(e, t) {
    Ju(e, "a", t);
  };
  _f = function(e, t) {
    Ju(e, "da", t);
  };
  function Ju(e, t, i = vt) {
    const o = e.__wdc || (e.__wdc = () => {
      let c = i;
      for (; c; ) {
        if (c.isDeactivated) return;
        c = c.parent;
      }
      return e();
    });
    if (Es(t, o, i), i) {
      let c = i.parent;
      for (; c && c.parent; ) Is(c.parent.vnode) && Gf(o, t, i, c), c = c.parent;
    }
  }
  function Gf(e, t, i, o) {
    const c = Es(t, e, o, true);
    Ja(() => {
      Ga(o[t], c);
    }, i);
  }
  function Gs(e) {
    e.shapeFlag &= -257, e.shapeFlag &= -513;
  }
  function fr(e) {
    return e.shapeFlag & 128 ? e.ssContent : e;
  }
  function Es(e, t, i = vt, o = false) {
    if (i) {
      const c = i[e] || (i[e] = []), l = t.__weh || (t.__weh = (...h) => {
        Bi();
        const d = tr(i), p = fi(t, i, e, h);
        return d(), Yi(), p;
      });
      return o ? c.unshift(l) : c.push(l), l;
    }
  }
  let Ki, Zu, qa, Bf, Yf, xf;
  Ki = (e) => (t, i = vt) => {
    (!$n || e === "sp") && Es(e, (...o) => t(...o), i);
  };
  kf = Ki("bm");
  er = Ki("m");
  Zu = Ki("bu");
  qa = Ki("u");
  Xa = Ki("bum");
  Ja = Ki("um");
  Bf = Ki("sp");
  Yf = Ki("rtg");
  xf = Ki("rtc");
  function jf(e, t = vt) {
    Es("ec", e, t);
  }
  const Vf = "components", Qu = /* @__PURE__ */ Symbol.for("v-ndc");
  rR = function(e) {
    return st(e) ? zf(Vf, e, false) || e : e || Qu;
  };
  function zf(e, t, i = true, o = false) {
    const c = wt || vt;
    if (c) {
      const l = c.type;
      {
        const d = ma(l, false);
        if (d && (d === t || d === Jt(t) || d === as(Jt(t)))) return l;
      }
      const h = Sc(c[e] || l[e], t) || Sc(c.appContext[e], t);
      return !h && o ? l : h;
    }
  }
  function Sc(e, t) {
    return e && (e[t] || e[Jt(t)] || e[as(Jt(t))]);
  }
  $f = function(e, t, i, o) {
    let c;
    const l = i, h = Ae(e);
    if (h || st(e)) {
      const d = h && Gi(e);
      let p = false, O = false;
      d && (p = !Xt(e), O = xi(e), e = hs(e)), c = new Array(e.length);
      for (let T = 0, w = e.length; T < w; T++) c[T] = t(p ? O ? Zo(di(e[T])) : di(e[T]) : e[T], T, void 0, l);
    } else if (typeof e == "number") {
      c = new Array(e);
      for (let d = 0; d < e; d++) c[d] = t(d + 1, d, void 0, l);
    } else if (Ke(e)) if (e[Symbol.iterator]) c = Array.from(e, (d, p) => t(d, p, void 0, l));
    else {
      const d = Object.keys(e);
      c = new Array(d.length);
      for (let p = 0, O = d.length; p < O; p++) {
        const T = d[p];
        c[p] = t(e[T], T, p, l);
      }
    }
    else c = [];
    return c;
  };
  sR = function(e, t) {
    for (let i = 0; i < t.length; i++) {
      const o = t[i];
      if (Ae(o)) for (let c = 0; c < o.length; c++) e[o[c].name] = o[c].fn;
      else o && (e[o.name] = o.key ? (...c) => {
        const l = o.fn(...c);
        return l && (l.key = o.key), l;
      } : o.fn);
    }
    return e;
  };
  aR = function(e, t, i = {}, o, c) {
    if (wt.ce || wt.parent && uo(wt.parent) && wt.parent.ce) {
      const O = Object.keys(i).length > 0;
      return t !== "default" && (i.name = t), oi(), Ia(Rt, null, [
        Ct("slot", i, o && o())
      ], O ? -2 : 64);
    }
    let l = e[t];
    l && l._c && (l._d = false), oi();
    const h = l && eh(l(i)), d = i.key || h && h.key, p = Ia(Rt, {
      key: (d && !zi(d) ? d : `_${t}`) + (!h && o ? "_fb" : "")
    }, h || (o ? o() : []), h && e._ === 1 ? 64 : -2);
    return !c && p.scopeId && (p.slotScopeIds = [
      p.scopeId + "-s"
    ]), l && l._c && (l._d = true), p;
  };
  function eh(e) {
    return e.some((t) => Qo(t) ? !(t.type === At || t.type === Rt && !eh(t.children)) : true) ? e : null;
  }
  const da = (e) => e ? mh(e) ? Os(e) : da(e.parent) : null, Pn = ft(/* @__PURE__ */ Object.create(null), {
    $: (e) => e,
    $el: (e) => e.vnode.el,
    $data: (e) => e.data,
    $props: (e) => e.props,
    $attrs: (e) => e.attrs,
    $slots: (e) => e.slots,
    $refs: (e) => e.refs,
    $parent: (e) => da(e.parent),
    $root: (e) => da(e.root),
    $host: (e) => e.ce,
    $emit: (e) => e.emit,
    $options: (e) => ih(e),
    $forceUpdate: (e) => e.f || (e.f = () => {
      $a(e.update);
    }),
    $nextTick: (e) => e.n || (e.n = Fu.bind(e.proxy)),
    $watch: (e) => Hf.bind(e)
  }), ks = (e, t) => e !== We && !e.__isScriptSetup && xe(e, t), Kf = {
    get({ _: e }, t) {
      if (t === "__v_skip") return true;
      const { ctx: i, setupState: o, data: c, props: l, accessCache: h, type: d, appContext: p } = e;
      if (t[0] !== "$") {
        const C = h[t];
        if (C !== void 0) switch (C) {
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
          if (ks(o, t)) return h[t] = 1, o[t];
          if (c !== We && xe(c, t)) return h[t] = 2, c[t];
          if (xe(l, t)) return h[t] = 3, l[t];
          if (i !== We && xe(i, t)) return h[t] = 4, i[t];
          fa && (h[t] = 0);
        }
      }
      const O = Pn[t];
      let T, w;
      if (O) return t === "$attrs" && Lt(e.attrs, "get", ""), O(e);
      if ((T = d.__cssModules) && (T = T[t])) return T;
      if (i !== We && xe(i, t)) return h[t] = 4, i[t];
      if (w = p.config.globalProperties, xe(w, t)) return w[t];
    },
    set({ _: e }, t, i) {
      const { data: o, setupState: c, ctx: l } = e;
      return ks(c, t) ? (c[t] = i, true) : o !== We && xe(o, t) ? (o[t] = i, true) : xe(e.props, t) || t[0] === "$" && t.slice(1) in e ? false : (l[t] = i, true);
    },
    has({ _: { data: e, setupState: t, accessCache: i, ctx: o, appContext: c, props: l, type: h } }, d) {
      let p;
      return !!(i[d] || e !== We && d[0] !== "$" && xe(e, d) || ks(t, d) || xe(l, d) || xe(o, d) || xe(Pn, d) || xe(c.config.globalProperties, d) || (p = h.__cssModules) && p[d]);
    },
    defineProperty(e, t, i) {
      return i.get != null ? e._.accessCache[t] = 0 : xe(i, "value") && this.set(e, t, i.value, null), Reflect.defineProperty(e, t, i);
    }
  };
  function _r(e) {
    return Ae(e) ? e.reduce((t, i) => (t[i] = null, t), {}) : e;
  }
  cR = function(e, t) {
    return !e || !t ? e || t : Ae(e) && Ae(t) ? e.concat(t) : ft({}, _r(e), _r(t));
  };
  let fa = true;
  function qf(e) {
    const t = ih(e), i = e.proxy, o = e.ctx;
    fa = false, t.beforeCreate && Nc(t.beforeCreate, e, "bc");
    const { data: c, computed: l, methods: h, watch: d, provide: p, inject: O, created: T, beforeMount: w, mounted: C, beforeUpdate: L, updated: P, activated: D, deactivated: de, beforeDestroy: ie, beforeUnmount: K, destroyed: V, unmounted: G, render: ue, renderTracked: Te, renderTriggered: ne, errorCaptured: he, serverPrefetch: te, expose: Ie, inheritAttrs: Le, components: fe, directives: ke, filters: ht } = t;
    if (O && Xf(O, o, null), h) for (const He in h) {
      const Ve = h[He];
      Ne(Ve) && (o[He] = Ve.bind(i));
    }
    if (c) {
      const He = c.call(i, i);
      Ke(He) && (e.data = ds(He));
    }
    if (fa = true, l) for (const He in l) {
      const Ve = l[He], Si = Ne(Ve) ? Ve.bind(i, i) : Ne(Ve.get) ? Ve.get.bind(i, i) : ui, _o = !Ne(Ve) && Ne(Ve.set) ? Ve.set.bind(i) : ui, Ni = ic({
        get: Si,
        set: _o
      });
      Object.defineProperty(o, He, {
        enumerable: true,
        configurable: true,
        get: () => Ni.value,
        set: (Oe) => Ni.value = Oe
      });
    }
    if (d) for (const He in d) th(d[He], o, i, He);
    if (p) {
      const He = Ne(p) ? p.call(i) : p;
      Reflect.ownKeys(He).forEach((Ve) => {
        yf(Ve, He[Ve]);
      });
    }
    T && Nc(T, e, "c");
    function qe(He, Ve) {
      Ae(Ve) ? Ve.forEach((Si) => He(Si.bind(i))) : Ve && He(Ve.bind(i));
    }
    if (qe(kf, w), qe(er, C), qe(Zu, L), qe(qa, P), qe(Wf, D), qe(_f, de), qe(jf, he), qe(xf, Te), qe(Yf, ne), qe(Xa, K), qe(Ja, G), qe(Bf, te), Ae(Ie)) if (Ie.length) {
      const He = e.exposed || (e.exposed = {});
      Ie.forEach((Ve) => {
        Object.defineProperty(He, Ve, {
          get: () => i[Ve],
          set: (Si) => i[Ve] = Si,
          enumerable: true
        });
      });
    } else e.exposed || (e.exposed = {});
    ue && e.render === ui && (e.render = ue), Le != null && (e.inheritAttrs = Le), fe && (e.components = fe), ke && (e.directives = ke), te && Xu(e);
  }
  function Xf(e, t, i = ui) {
    Ae(e) && (e = pa(e));
    for (const o in e) {
      const c = e[o];
      let l;
      Ke(c) ? "default" in c ? l = Dn(c.from || o, c.default, true) : l = Dn(c.from || o) : l = Dn(c), at(l) ? Object.defineProperty(t, o, {
        enumerable: true,
        configurable: true,
        get: () => l.value,
        set: (h) => l.value = h
      }) : t[o] = l;
    }
  }
  function Nc(e, t, i) {
    fi(Ae(e) ? e.map((o) => o.bind(t.proxy)) : e.bind(t.proxy), t, i);
  }
  function th(e, t, i, o) {
    let c = o.includes(".") ? ku(i, o) : () => i[o];
    if (st(e)) {
      const l = t[e];
      Ne(l) && Xo(c, l);
    } else if (Ne(e)) Xo(c, e.bind(i));
    else if (Ke(e)) if (Ae(e)) e.forEach((l) => th(l, t, i, o));
    else {
      const l = Ne(e.handler) ? e.handler.bind(i) : t[e.handler];
      Ne(l) && Xo(c, l, e);
    }
  }
  function ih(e) {
    const t = e.type, { mixins: i, extends: o } = t, { mixins: c, optionsCache: l, config: { optionMergeStrategies: h } } = e.appContext, d = l.get(t);
    let p;
    return d ? p = d : !c.length && !i && !o ? p = t : (p = {}, c.length && c.forEach((O) => Gr(p, O, h, true)), Gr(p, t, h)), Ke(t) && l.set(t, p), p;
  }
  function Gr(e, t, i, o = false) {
    const { mixins: c, extends: l } = t;
    l && Gr(e, l, i, true), c && c.forEach((h) => Gr(e, h, i, true));
    for (const h in t) if (!(o && h === "expose")) {
      const d = Jf[h] || i && i[h];
      e[h] = d ? d(e[h], t[h]) : t[h];
    }
    return e;
  }
  const Jf = {
    data: yc,
    props: bc,
    emits: bc,
    methods: Nn,
    computed: Nn,
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
    components: Nn,
    directives: Nn,
    watch: Qf,
    provide: yc,
    inject: Zf
  };
  function yc(e, t) {
    return t ? e ? function() {
      return ft(Ne(e) ? e.call(this, this) : e, Ne(t) ? t.call(this, this) : t);
    } : t : e;
  }
  function Zf(e, t) {
    return Nn(pa(e), pa(t));
  }
  function pa(e) {
    if (Ae(e)) {
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
  function Nn(e, t) {
    return e ? ft(/* @__PURE__ */ Object.create(null), e, t) : t;
  }
  function bc(e, t) {
    return e ? Ae(e) && Ae(t) ? [
      .../* @__PURE__ */ new Set([
        ...e,
        ...t
      ])
    ] : ft(/* @__PURE__ */ Object.create(null), _r(e), _r(t ?? {})) : t;
  }
  function Qf(e, t) {
    if (!e) return t;
    if (!t) return e;
    const i = ft(/* @__PURE__ */ Object.create(null), e);
    for (const o in t) i[o] = Ft(e[o], t[o]);
    return i;
  }
  function oh() {
    return {
      app: null,
      config: {
        isNativeTag: nu,
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
  let ep = 0;
  function tp(e, t) {
    return function(o, c = null) {
      Ne(o) || (o = ft({}, o)), c != null && !Ke(c) && (c = null);
      const l = oh(), h = /* @__PURE__ */ new WeakSet(), d = [];
      let p = false;
      const O = l.app = {
        _uid: ep++,
        _component: o,
        _props: c,
        _container: null,
        _context: l,
        _instance: null,
        version: Mp,
        get config() {
          return l.config;
        },
        set config(T) {
        },
        use(T, ...w) {
          return h.has(T) || (T && Ne(T.install) ? (h.add(T), T.install(O, ...w)) : Ne(T) && (h.add(T), T(O, ...w))), O;
        },
        mixin(T) {
          return l.mixins.includes(T) || l.mixins.push(T), O;
        },
        component(T, w) {
          return w ? (l.components[T] = w, O) : l.components[T];
        },
        directive(T, w) {
          return w ? (l.directives[T] = w, O) : l.directives[T];
        },
        mount(T, w, C) {
          if (!p) {
            const L = O._ceVNode || Ct(o, c);
            return L.appContext = l, C === true ? C = "svg" : C === false && (C = void 0), e(L, T, C), p = true, O._container = T, T.__vue_app__ = O, Os(L.component);
          }
        },
        onUnmount(T) {
          d.push(T);
        },
        unmount() {
          p && (fi(d, O._instance, 16), e(null, O._container), delete O._container.__vue_app__);
        },
        provide(T, w) {
          return l.provides[T] = w, O;
        },
        runWithContext(T) {
          const w = Fo;
          Fo = O;
          try {
            return T();
          } finally {
            Fo = w;
          }
        }
      };
      return O;
    };
  }
  let Fo = null;
  lR = function(e, t, i = We) {
    const o = To(), c = Jt(t), l = $i(t), h = nh(e, c), d = Tf((p, O) => {
      let T, w = We, C;
      return Cf(() => {
        const L = e[c];
        Bt(T, L) && (T = L, O());
      }), {
        get() {
          return p(), i.get ? i.get(T) : T;
        },
        set(L) {
          const P = i.set ? i.set(L) : L;
          if (!Bt(P, T) && !(w !== We && Bt(L, w))) return;
          const D = o.vnode.props;
          D && (t in D || c in D || l in D) && (`onUpdate:${t}` in D || `onUpdate:${c}` in D || `onUpdate:${l}` in D) || (T = L, O()), o.emit(`update:${t}`, P), Bt(L, P) && Bt(L, w) && !Bt(P, C) && O(), w = L, C = P;
        }
      };
    });
    return d[Symbol.iterator] = () => {
      let p = 0;
      return {
        next() {
          return p < 2 ? {
            value: p++ ? h || We : d,
            done: false
          } : {
            done: true
          };
        }
      };
    }, d;
  };
  const nh = (e, t) => t === "modelValue" || t === "model-value" ? e.modelModifiers : e[`${t}Modifiers`] || e[`${Jt(t)}Modifiers`] || e[`${$i(t)}Modifiers`];
  function ip(e, t, ...i) {
    if (e.isUnmounted) return;
    const o = e.vnode.props || We;
    let c = i;
    const l = t.startsWith("update:"), h = l && nh(o, t.slice(7));
    h && (h.trim && (c = i.map((T) => st(T) ? T.trim() : T)), h.number && (c = i.map(Fd)));
    let d, p = o[d = Ms(t)] || o[d = Ms(Jt(t))];
    !p && l && (p = o[d = Ms($i(t))]), p && fi(p, e, 6, c);
    const O = o[d + "Once"];
    if (O) {
      if (!e.emitted) e.emitted = {};
      else if (e.emitted[d]) return;
      e.emitted[d] = true, fi(O, e, 6, c);
    }
  }
  const op = /* @__PURE__ */ new WeakMap();
  function rh(e, t, i = false) {
    const o = i ? op : t.emitsCache, c = o.get(e);
    if (c !== void 0) return c;
    const l = e.emits;
    let h = {}, d = false;
    if (!Ne(e)) {
      const p = (O) => {
        const T = rh(O, t, true);
        T && (d = true, ft(h, T));
      };
      !i && t.mixins.length && t.mixins.forEach(p), e.extends && p(e.extends), e.mixins && e.mixins.forEach(p);
    }
    return !l && !d ? (Ke(e) && o.set(e, null), null) : (Ae(l) ? l.forEach((p) => h[p] = null) : ft(h, l), Ke(e) && o.set(e, h), h);
  }
  function ms(e, t) {
    return !e || !ns(t) ? false : (t = t.slice(2).replace(/Once$/, ""), xe(e, t[0].toLowerCase() + t.slice(1)) || xe(e, $i(t)) || xe(e, t));
  }
  function Lc(e) {
    const { type: t, vnode: i, proxy: o, withProxy: c, propsOptions: [l], slots: h, attrs: d, emit: p, render: O, renderCache: T, props: w, data: C, setupState: L, ctx: P, inheritAttrs: D } = e, de = Ur(e);
    let ie, K;
    try {
      if (i.shapeFlag & 4) {
        const G = c || o, ue = G;
        ie = Oi(O.call(ue, G, T, w, L, C, P)), K = d;
      } else {
        const G = t;
        ie = Oi(G.length > 1 ? G(w, {
          attrs: d,
          slots: h,
          emit: p
        }) : G(w, null)), K = t.props ? d : np(d);
      }
    } catch (G) {
      Wn.length = 0, ps(G, e, 1), ie = Ct(At);
    }
    let V = ie;
    if (K && D !== false) {
      const G = Object.keys(K), { shapeFlag: ue } = V;
      G.length && ue & 7 && (l && G.some(_a) && (K = rp(K, l)), V = ji(V, K, false, true));
    }
    return i.dirs && (V = ji(V, null, false, true), V.dirs = V.dirs ? V.dirs.concat(i.dirs) : i.dirs), i.transition && fo(V, i.transition), ie = V, Ur(de), ie;
  }
  const np = (e) => {
    let t;
    for (const i in e) (i === "class" || i === "style" || ns(i)) && ((t || (t = {}))[i] = e[i]);
    return t;
  }, rp = (e, t) => {
    const i = {};
    for (const o in e) (!_a(o) || !(o.slice(9) in t)) && (i[o] = e[o]);
    return i;
  };
  function sp(e, t, i) {
    const { props: o, children: c, component: l } = e, { props: h, children: d, patchFlag: p } = t, O = l.emitsOptions;
    if (t.dirs || t.transition) return true;
    if (i && p >= 0) {
      if (p & 1024) return true;
      if (p & 16) return o ? vc(o, h, O) : !!h;
      if (p & 8) {
        const T = t.dynamicProps;
        for (let w = 0; w < T.length; w++) {
          const C = T[w];
          if (h[C] !== o[C] && !ms(O, C)) return true;
        }
      }
    } else return (c || d) && (!d || !d.$stable) ? true : o === h ? false : o ? h ? vc(o, h, O) : true : !!h;
    return false;
  }
  function vc(e, t, i) {
    const o = Object.keys(t);
    if (o.length !== Object.keys(e).length) return true;
    for (let c = 0; c < o.length; c++) {
      const l = o[c];
      if (t[l] !== e[l] && !ms(i, l)) return true;
    }
    return false;
  }
  function ap({ vnode: e, parent: t }, i) {
    for (; t; ) {
      const o = t.subTree;
      if (o.suspense && o.suspense.activeBranch === e && (o.el = e.el), o === e) (e = t.vnode).el = i, t = t.parent;
      else break;
    }
  }
  const sh = {}, ah = () => Object.create(sh), ch = (e) => Object.getPrototypeOf(e) === sh;
  function cp(e, t, i, o = false) {
    const c = {}, l = ah();
    e.propsDefaults = /* @__PURE__ */ Object.create(null), lh(e, t, c, l);
    for (const h in e.propsOptions[0]) h in c || (c[h] = void 0);
    i ? e.props = o ? c : uf(c) : e.type.props ? e.props = c : e.props = l, e.attrs = l;
  }
  function lp(e, t, i, o) {
    const { props: c, attrs: l, vnode: { patchFlag: h } } = e, d = Pe(c), [p] = e.propsOptions;
    let O = false;
    if ((o || h > 0) && !(h & 16)) {
      if (h & 8) {
        const T = e.vnode.dynamicProps;
        for (let w = 0; w < T.length; w++) {
          let C = T[w];
          if (ms(e.emitsOptions, C)) continue;
          const L = t[C];
          if (p) if (xe(l, C)) L !== l[C] && (l[C] = L, O = true);
          else {
            const P = Jt(C);
            c[P] = Ta(p, d, P, L, e, false);
          }
          else L !== l[C] && (l[C] = L, O = true);
        }
      }
    } else {
      lh(e, t, c, l) && (O = true);
      let T;
      for (const w in d) (!t || !xe(t, w) && ((T = $i(w)) === w || !xe(t, T))) && (p ? i && (i[w] !== void 0 || i[T] !== void 0) && (c[w] = Ta(p, d, w, void 0, e, true)) : delete c[w]);
      if (l !== d) for (const w in l) (!t || !xe(t, w)) && (delete l[w], O = true);
    }
    O && Pi(e.attrs, "set", "");
  }
  function lh(e, t, i, o) {
    const [c, l] = e.propsOptions;
    let h = false, d;
    if (t) for (let p in t) {
      if (Ln(p)) continue;
      const O = t[p];
      let T;
      c && xe(c, T = Jt(p)) ? !l || !l.includes(T) ? i[T] = O : (d || (d = {}))[T] = O : ms(e.emitsOptions, p) || (!(p in o) || O !== o[p]) && (o[p] = O, h = true);
    }
    if (l) {
      const p = Pe(i), O = d || We;
      for (let T = 0; T < l.length; T++) {
        const w = l[T];
        i[w] = Ta(c, p, w, O[w], e, !xe(O, w));
      }
    }
    return h;
  }
  function Ta(e, t, i, o, c, l) {
    const h = e[i];
    if (h != null) {
      const d = xe(h, "default");
      if (d && o === void 0) {
        const p = h.default;
        if (h.type !== Function && !h.skipFactory && Ne(p)) {
          const { propsDefaults: O } = c;
          if (i in O) o = O[i];
          else {
            const T = tr(c);
            o = O[i] = p.call(null, t), T();
          }
        } else o = p;
        c.ce && c.ce._setProp(i, o);
      }
      h[0] && (l && !d ? o = false : h[1] && (o === "" || o === $i(i)) && (o = true));
    }
    return o;
  }
  const up = /* @__PURE__ */ new WeakMap();
  function uh(e, t, i = false) {
    const o = i ? up : t.propsCache, c = o.get(e);
    if (c) return c;
    const l = e.props, h = {}, d = [];
    let p = false;
    if (!Ne(e)) {
      const T = (w) => {
        p = true;
        const [C, L] = uh(w, t, true);
        ft(h, C), L && d.push(...L);
      };
      !i && t.mixins.length && t.mixins.forEach(T), e.extends && T(e.extends), e.mixins && e.mixins.forEach(T);
    }
    if (!l && !p) return Ke(e) && o.set(e, zo), zo;
    if (Ae(l)) for (let T = 0; T < l.length; T++) {
      const w = Jt(l[T]);
      Cc(w) && (h[w] = We);
    }
    else if (l) for (const T in l) {
      const w = Jt(T);
      if (Cc(w)) {
        const C = l[T], L = h[w] = Ae(C) || Ne(C) ? {
          type: C
        } : ft({}, C), P = L.type;
        let D = false, de = true;
        if (Ae(P)) for (let ie = 0; ie < P.length; ++ie) {
          const K = P[ie], V = Ne(K) && K.name;
          if (V === "Boolean") {
            D = true;
            break;
          } else V === "String" && (de = false);
        }
        else D = Ne(P) && P.name === "Boolean";
        L[0] = D, L[1] = de, (D || xe(L, "default")) && d.push(w);
      }
    }
    const O = [
      h,
      d
    ];
    return Ke(e) && o.set(e, O), O;
  }
  function Cc(e) {
    return e[0] !== "$" && !Ln(e);
  }
  const Za = (e) => e === "_" || e === "_ctx" || e === "$stable", Qa = (e) => Ae(e) ? e.map(Oi) : [
    Oi(e)
  ], hp = (e, t, i) => {
    if (t._n) return t;
    const o = Nf((...c) => Qa(t(...c)), i);
    return o._c = false, o;
  }, hh = (e, t, i) => {
    const o = e._ctx;
    for (const c in e) {
      if (Za(c)) continue;
      const l = e[c];
      if (Ne(l)) t[c] = hp(c, l, o);
      else if (l != null) {
        const h = Qa(l);
        t[c] = () => h;
      }
    }
  }, dh = (e, t) => {
    const i = Qa(t);
    e.slots.default = () => i;
  }, fh = (e, t, i) => {
    for (const o in t) (i || !Za(o)) && (e[o] = t[o]);
  }, dp = (e, t, i) => {
    const o = e.slots = ah();
    if (e.vnode.shapeFlag & 32) {
      const c = t._;
      c ? (fh(o, t, i), i && lu(o, "_", c, true)) : hh(t, o);
    } else t && dh(e, t);
  }, fp = (e, t, i) => {
    const { vnode: o, slots: c } = e;
    let l = true, h = We;
    if (o.shapeFlag & 32) {
      const d = t._;
      d ? i && d === 1 ? l = false : fh(c, t, i) : (l = !t.$stable, hh(t, c)), h = t;
    } else t && (dh(e, t), h = {
      default: 1
    });
    if (l) for (const d in c) !Za(d) && h[d] == null && delete c[d];
  }, Et = mp;
  function pp(e) {
    return Tp(e);
  }
  function Tp(e, t) {
    const i = cs();
    i.__VUE__ = true;
    const { insert: o, remove: c, patchProp: l, createElement: h, createText: d, createComment: p, setText: O, setElementText: T, parentNode: w, nextSibling: C, setScopeId: L = ui, insertStaticContent: P } = e, D = (A, y, F, q = null, $ = null, X = null, se = void 0, Z = null, oe = !!y.dynamicChildren) => {
      if (A === y) return;
      A && !so(A, y) && (q = yi(A), Oe(A, $, X, true), A = null), y.patchFlag === -2 && (oe = false, y.dynamicChildren = null);
      const { type: z, ref: Ee, shapeFlag: ae } = y;
      switch (z) {
        case gs:
          de(A, y, F, q);
          break;
        case At:
          ie(A, y, F, q);
          break;
        case Un:
          A == null && K(y, F, q, se);
          break;
        case Rt:
          fe(A, y, F, q, $, X, se, Z, oe);
          break;
        default:
          ae & 1 ? ue(A, y, F, q, $, X, se, Z, oe) : ae & 6 ? ke(A, y, F, q, $, X, se, Z, oe) : (ae & 64 || ae & 128) && z.process(A, y, F, q, $, X, se, Z, oe, go);
      }
      Ee != null && $ ? Fn(Ee, A && A.ref, X, y || A, !y) : Ee == null && A && A.ref != null && Fn(A.ref, null, X, A, true);
    }, de = (A, y, F, q) => {
      if (A == null) o(y.el = d(y.children), F, q);
      else {
        const $ = y.el = A.el;
        y.children !== A.children && O($, y.children);
      }
    }, ie = (A, y, F, q) => {
      A == null ? o(y.el = p(y.children || ""), F, q) : y.el = A.el;
    }, K = (A, y, F, q) => {
      [A.el, A.anchor] = P(A.children, y, F, q, A.el, A.anchor);
    }, V = ({ el: A, anchor: y }, F, q) => {
      let $;
      for (; A && A !== y; ) $ = C(A), o(A, F, q), A = $;
      o(y, F, q);
    }, G = ({ el: A, anchor: y }) => {
      let F;
      for (; A && A !== y; ) F = C(A), c(A), A = F;
      c(y);
    }, ue = (A, y, F, q, $, X, se, Z, oe) => {
      if (y.type === "svg" ? se = "svg" : y.type === "math" && (se = "mathml"), A == null) Te(y, F, q, $, X, se, Z, oe);
      else {
        const z = A.el && A.el._isVueCE ? A.el : null;
        try {
          z && z._beginPatch(), te(A, y, $, X, se, Z, oe);
        } finally {
          z && z._endPatch();
        }
      }
    }, Te = (A, y, F, q, $, X, se, Z) => {
      let oe, z;
      const { props: Ee, shapeFlag: ae, transition: me, dirs: we } = A;
      if (oe = A.el = h(A.type, X, Ee && Ee.is, Ee), ae & 8 ? T(oe, A.children) : ae & 16 && he(A.children, oe, null, q, $, Bs(A, X), se, Z), we && Ro(A, null, q, "created"), ne(oe, A, A.scopeId, se, q), Ee) {
        for (const _e in Ee) _e !== "value" && !Ln(_e) && l(oe, _e, null, Ee[_e], X, q);
        "value" in Ee && l(oe, "value", null, Ee.value, X), (z = Ee.onVnodeBeforeMount) && ii(z, q, A);
      }
      we && Ro(A, null, q, "beforeMount");
      const Me = Ip($, me);
      Me && me.beforeEnter(oe), o(oe, y, F), ((z = Ee && Ee.onVnodeMounted) || Me || we) && Et(() => {
        z && ii(z, q, A), Me && me.enter(oe), we && Ro(A, null, q, "mounted");
      }, $);
    }, ne = (A, y, F, q, $) => {
      if (F && L(A, F), q) for (let X = 0; X < q.length; X++) L(A, q[X]);
      if ($) {
        let X = $.subTree;
        if (y === X || Br(X.type) && (X.ssContent === y || X.ssFallback === y)) {
          const se = $.vnode;
          ne(A, se, se.scopeId, se.slotScopeIds, $.parent);
        }
      }
    }, he = (A, y, F, q, $, X, se, Z, oe = 0) => {
      for (let z = oe; z < A.length; z++) {
        const Ee = A[z] = Z ? ro(A[z]) : Oi(A[z]);
        D(null, Ee, y, F, q, $, X, se, Z);
      }
    }, te = (A, y, F, q, $, X, se) => {
      const Z = y.el = A.el;
      let { patchFlag: oe, dynamicChildren: z, dirs: Ee } = y;
      oe |= A.patchFlag & 16;
      const ae = A.props || We, me = y.props || We;
      let we;
      if (F && Ao(F, false), (we = me.onVnodeBeforeUpdate) && ii(we, F, y, A), Ee && Ro(y, A, F, "beforeUpdate"), F && Ao(F, true), (ae.innerHTML && me.innerHTML == null || ae.textContent && me.textContent == null) && T(Z, ""), z ? Ie(A.dynamicChildren, z, Z, F, q, Bs(y, $), X) : se || Ve(A, y, Z, null, F, q, Bs(y, $), X, false), oe > 0) {
        if (oe & 16) Le(Z, ae, me, F, $);
        else if (oe & 2 && ae.class !== me.class && l(Z, "class", null, me.class, $), oe & 4 && l(Z, "style", ae.style, me.style, $), oe & 8) {
          const Me = y.dynamicProps;
          for (let _e = 0; _e < Me.length; _e++) {
            const Ge = Me[_e], St = ae[Ge], Nt = me[Ge];
            (Nt !== St || Ge === "value") && l(Z, Ge, St, Nt, $, F);
          }
        }
        oe & 1 && A.children !== y.children && T(Z, y.children);
      } else !se && z == null && Le(Z, ae, me, F, $);
      ((we = me.onVnodeUpdated) || Ee) && Et(() => {
        we && ii(we, F, y, A), Ee && Ro(y, A, F, "updated");
      }, q);
    }, Ie = (A, y, F, q, $, X, se) => {
      for (let Z = 0; Z < y.length; Z++) {
        const oe = A[Z], z = y[Z], Ee = oe.el && (oe.type === Rt || !so(oe, z) || oe.shapeFlag & 198) ? w(oe.el) : F;
        D(oe, z, Ee, null, q, $, X, se, true);
      }
    }, Le = (A, y, F, q, $) => {
      if (y !== F) {
        if (y !== We) for (const X in y) !Ln(X) && !(X in F) && l(A, X, y[X], null, $, q);
        for (const X in F) {
          if (Ln(X)) continue;
          const se = F[X], Z = y[X];
          se !== Z && X !== "value" && l(A, X, Z, se, $, q);
        }
        "value" in F && l(A, "value", y.value, F.value, $);
      }
    }, fe = (A, y, F, q, $, X, se, Z, oe) => {
      const z = y.el = A ? A.el : d(""), Ee = y.anchor = A ? A.anchor : d("");
      let { patchFlag: ae, dynamicChildren: me, slotScopeIds: we } = y;
      we && (Z = Z ? Z.concat(we) : we), A == null ? (o(z, F, q), o(Ee, F, q), he(y.children || [], F, Ee, $, X, se, Z, oe)) : ae > 0 && ae & 64 && me && A.dynamicChildren && A.dynamicChildren.length === me.length ? (Ie(A.dynamicChildren, me, F, $, X, se, Z), (y.key != null || $ && y === $.subTree) && ec(A, y, true)) : Ve(A, y, F, Ee, $, X, se, Z, oe);
    }, ke = (A, y, F, q, $, X, se, Z, oe) => {
      y.slotScopeIds = Z, A == null ? y.shapeFlag & 512 ? $.ctx.activate(y, F, q, se, oe) : ht(y, F, q, $, X, se, oe) : xt(A, y, oe);
    }, ht = (A, y, F, q, $, X, se) => {
      const Z = A.component = yp(A, q, $);
      if (Is(A) && (Z.ctx.renderer = go), bp(Z, false, se), Z.asyncDep) {
        if ($ && $.registerDep(Z, qe, se), !A.el) {
          const oe = Z.subTree = Ct(At);
          ie(null, oe, y, F), A.placeholder = oe.el;
        }
      } else qe(Z, A, y, F, $, X, se);
    }, xt = (A, y, F) => {
      const q = y.component = A.component;
      if (sp(A, y, F)) if (q.asyncDep && !q.asyncResolved) {
        He(q, y, F);
        return;
      } else q.next = y, q.update();
      else y.el = A.el, q.vnode = y;
    }, qe = (A, y, F, q, $, X, se) => {
      const Z = () => {
        if (A.isMounted) {
          let { next: ae, bu: me, u: we, parent: Me, vnode: _e } = A;
          {
            const Qt = ph(A);
            if (Qt) {
              ae && (ae.el = _e.el, He(A, ae, se)), Qt.asyncDep.then(() => {
                A.isUnmounted || Z();
              });
              return;
            }
          }
          let Ge = ae, St;
          Ao(A, false), ae ? (ae.el = _e.el, He(A, ae, se)) : ae = _e, me && vn(me), (St = ae.props && ae.props.onVnodeBeforeUpdate) && ii(St, Me, ae, _e), Ao(A, true);
          const Nt = Lc(A), Zt = A.subTree;
          A.subTree = Nt, D(Zt, Nt, w(Zt.el), yi(Zt), A, $, X), ae.el = Nt.el, Ge === null && ap(A, Nt.el), we && Et(we, $), (St = ae.props && ae.props.onVnodeUpdated) && Et(() => ii(St, Me, ae, _e), $);
        } else {
          let ae;
          const { el: me, props: we } = y, { bm: Me, m: _e, parent: Ge, root: St, type: Nt } = A, Zt = uo(y);
          Ao(A, false), Me && vn(Me), !Zt && (ae = we && we.onVnodeBeforeMount) && ii(ae, Ge, y), Ao(A, true);
          {
            St.ce && St.ce._def.shadowRoot !== false && St.ce._injectChildStyle(Nt);
            const Qt = A.subTree = Lc(A);
            D(null, Qt, F, q, A, $, X), y.el = Qt.el;
          }
          if (_e && Et(_e, $), !Zt && (ae = we && we.onVnodeMounted)) {
            const Qt = y;
            Et(() => ii(ae, Ge, Qt), $);
          }
          (y.shapeFlag & 256 || Ge && uo(Ge.vnode) && Ge.vnode.shapeFlag & 256) && A.a && Et(A.a, $), A.isMounted = true, y = F = q = null;
        }
      };
      A.scope.on();
      const oe = A.effect = new Iu(Z);
      A.scope.off();
      const z = A.update = oe.run.bind(oe), Ee = A.job = oe.runIfDirty.bind(oe);
      Ee.i = A, Ee.id = A.uid, oe.scheduler = () => $a(Ee), Ao(A, true), z();
    }, He = (A, y, F) => {
      y.component = A;
      const q = A.vnode.props;
      A.vnode = y, A.next = null, lp(A, y.props, q, F), fp(A, y.children, F), Bi(), mc(A), Yi();
    }, Ve = (A, y, F, q, $, X, se, Z, oe = false) => {
      const z = A && A.children, Ee = A ? A.shapeFlag : 0, ae = y.children, { patchFlag: me, shapeFlag: we } = y;
      if (me > 0) {
        if (me & 128) {
          _o(z, ae, F, q, $, X, se, Z, oe);
          return;
        } else if (me & 256) {
          Si(z, ae, F, q, $, X, se, Z, oe);
          return;
        }
      }
      we & 8 ? (Ee & 16 && _t(z, $, X), ae !== z && T(F, ae)) : Ee & 16 ? we & 16 ? _o(z, ae, F, q, $, X, se, Z, oe) : _t(z, $, X, true) : (Ee & 8 && T(F, ""), we & 16 && he(ae, F, q, $, X, se, Z, oe));
    }, Si = (A, y, F, q, $, X, se, Z, oe) => {
      A = A || zo, y = y || zo;
      const z = A.length, Ee = y.length, ae = Math.min(z, Ee);
      let me;
      for (me = 0; me < ae; me++) {
        const we = y[me] = oe ? ro(y[me]) : Oi(y[me]);
        D(A[me], we, F, null, $, X, se, Z, oe);
      }
      z > Ee ? _t(A, $, X, true, false, ae) : he(y, F, q, $, X, se, Z, oe, ae);
    }, _o = (A, y, F, q, $, X, se, Z, oe) => {
      let z = 0;
      const Ee = y.length;
      let ae = A.length - 1, me = Ee - 1;
      for (; z <= ae && z <= me; ) {
        const we = A[z], Me = y[z] = oe ? ro(y[z]) : Oi(y[z]);
        if (so(we, Me)) D(we, Me, F, null, $, X, se, Z, oe);
        else break;
        z++;
      }
      for (; z <= ae && z <= me; ) {
        const we = A[ae], Me = y[me] = oe ? ro(y[me]) : Oi(y[me]);
        if (so(we, Me)) D(we, Me, F, null, $, X, se, Z, oe);
        else break;
        ae--, me--;
      }
      if (z > ae) {
        if (z <= me) {
          const we = me + 1, Me = we < Ee ? y[we].el : q;
          for (; z <= me; ) D(null, y[z] = oe ? ro(y[z]) : Oi(y[z]), F, Me, $, X, se, Z, oe), z++;
        }
      } else if (z > me) for (; z <= ae; ) Oe(A[z], $, X, true), z++;
      else {
        const we = z, Me = z, _e = /* @__PURE__ */ new Map();
        for (z = Me; z <= me; z++) {
          const Dt = y[z] = oe ? ro(y[z]) : Oi(y[z]);
          Dt.key != null && _e.set(Dt.key, z);
        }
        let Ge, St = 0;
        const Nt = me - Me + 1;
        let Zt = false, Qt = 0;
        const Oo = new Array(Nt);
        for (z = 0; z < Nt; z++) Oo[z] = 0;
        for (z = we; z <= ae; z++) {
          const Dt = A[z];
          if (St >= Nt) {
            Oe(Dt, $, X, true);
            continue;
          }
          let ei;
          if (Dt.key != null) ei = _e.get(Dt.key);
          else for (Ge = Me; Ge <= me; Ge++) if (Oo[Ge - Me] === 0 && so(Dt, y[Ge])) {
            ei = Ge;
            break;
          }
          ei === void 0 ? Oe(Dt, $, X, true) : (Oo[ei - Me] = z + 1, ei >= Qt ? Qt = ei : Zt = true, D(Dt, y[ei], F, null, $, X, se, Z, oe), St++);
        }
        const pn = Zt ? Ep(Oo) : zo;
        for (Ge = pn.length - 1, z = Nt - 1; z >= 0; z--) {
          const Dt = Me + z, ei = y[Dt], rr = y[Dt + 1], sr = Dt + 1 < Ee ? rr.el || Th(rr) : q;
          Oo[z] === 0 ? D(null, ei, F, sr, $, X, se, Z, oe) : Zt && (Ge < 0 || z !== pn[Ge] ? Ni(ei, F, sr, 2) : Ge--);
        }
      }
    }, Ni = (A, y, F, q, $ = null) => {
      const { el: X, type: se, transition: Z, children: oe, shapeFlag: z } = A;
      if (z & 6) {
        Ni(A.component.subTree, y, F, q);
        return;
      }
      if (z & 128) {
        A.suspense.move(y, F, q);
        return;
      }
      if (z & 64) {
        se.move(A, y, F, go);
        return;
      }
      if (se === Rt) {
        o(X, y, F);
        for (let ae = 0; ae < oe.length; ae++) Ni(oe[ae], y, F, q);
        o(A.anchor, y, F);
        return;
      }
      if (se === Un) {
        V(A, y, F);
        return;
      }
      if (q !== 2 && z & 1 && Z) if (q === 0) Z.beforeEnter(X), o(X, y, F), Et(() => Z.enter(X), $);
      else {
        const { leave: ae, delayLeave: me, afterLeave: we } = Z, Me = () => {
          A.ctx.isUnmounted ? c(X) : o(X, y, F);
        }, _e = () => {
          X._isLeaving && X[Mi](true), ae(X, () => {
            Me(), we && we();
          });
        };
        me ? me(X, Me, _e) : _e();
      }
      else o(X, y, F);
    }, Oe = (A, y, F, q = false, $ = false) => {
      const { type: X, props: se, ref: Z, children: oe, dynamicChildren: z, shapeFlag: Ee, patchFlag: ae, dirs: me, cacheIndex: we } = A;
      if (ae === -2 && ($ = false), Z != null && (Bi(), Fn(Z, null, F, A, true), Yi()), we != null && (y.renderCache[we] = void 0), Ee & 256) {
        y.ctx.deactivate(A);
        return;
      }
      const Me = Ee & 1 && me, _e = !uo(A);
      let Ge;
      if (_e && (Ge = se && se.onVnodeBeforeUnmount) && ii(Ge, y, A), Ee & 6) re(A.component, F, q);
      else {
        if (Ee & 128) {
          A.suspense.unmount(F, q);
          return;
        }
        Me && Ro(A, null, y, "beforeUnmount"), Ee & 64 ? A.type.remove(A, y, F, go, q) : z && !z.hasOnce && (X !== Rt || ae > 0 && ae & 64) ? _t(z, y, F, false, true) : (X === Rt && ae & 384 || !$ && Ee & 16) && _t(oe, y, F), q && fn(A);
      }
      (_e && (Ge = se && se.onVnodeUnmounted) || Me) && Et(() => {
        Ge && ii(Ge, y, A), Me && Ro(A, null, y, "unmounted");
      }, F);
    }, fn = (A) => {
      const { type: y, el: F, anchor: q, transition: $ } = A;
      if (y === Rt) {
        Ds(F, q);
        return;
      }
      if (y === Un) {
        G(A);
        return;
      }
      const X = () => {
        c(F), $ && !$.persisted && $.afterLeave && $.afterLeave();
      };
      if (A.shapeFlag & 1 && $ && !$.persisted) {
        const { leave: se, delayLeave: Z } = $, oe = () => se(F, X);
        Z ? Z(A.el, X, oe) : oe();
      } else X();
    }, Ds = (A, y) => {
      let F;
      for (; A !== y; ) F = C(A), c(A), A = F;
      c(y);
    }, re = (A, y, F) => {
      const { bum: q, scope: $, job: X, subTree: se, um: Z, m: oe, a: z } = A;
      kr(oe), kr(z), q && vn(q), $.stop(), X && (X.flags |= 8, Oe(se, A, y, F)), Z && Et(Z, y), Et(() => {
        A.isUnmounted = true;
      }, y);
    }, _t = (A, y, F, q = false, $ = false, X = 0) => {
      for (let se = X; se < A.length; se++) Oe(A[se], y, F, q, $);
    }, yi = (A) => {
      if (A.shapeFlag & 6) return yi(A.component.subTree);
      if (A.shapeFlag & 128) return A.suspense.next();
      const y = C(A.anchor || A.el), F = y && y[Bu];
      return F ? C(F) : y;
    };
    let jt = false;
    const nr = (A, y, F) => {
      let q;
      A == null ? y._vnode && (Oe(y._vnode, null, null, true), q = y._vnode.component) : D(y._vnode || null, A, y, null, null, null, F), y._vnode = A, jt || (jt = true, mc(q), Wu(), jt = false);
    }, go = {
      p: D,
      um: Oe,
      m: Ni,
      r: fn,
      mt: ht,
      mc: he,
      pc: Ve,
      pbc: Ie,
      n: yi,
      o: e
    };
    return {
      render: nr,
      hydrate: void 0,
      createApp: tp(nr)
    };
  }
  function Bs({ type: e, props: t }, i) {
    return i === "svg" && e === "foreignObject" || i === "mathml" && e === "annotation-xml" && t && t.encoding && t.encoding.includes("html") ? void 0 : i;
  }
  function Ao({ effect: e, job: t }, i) {
    i ? (e.flags |= 32, t.flags |= 4) : (e.flags &= -33, t.flags &= -5);
  }
  function Ip(e, t) {
    return (!e || e && !e.pendingBranch) && t && !t.persisted;
  }
  function ec(e, t, i = false) {
    const o = e.children, c = t.children;
    if (Ae(o) && Ae(c)) for (let l = 0; l < o.length; l++) {
      const h = o[l];
      let d = c[l];
      d.shapeFlag & 1 && !d.dynamicChildren && ((d.patchFlag <= 0 || d.patchFlag === 32) && (d = c[l] = ro(c[l]), d.el = h.el), !i && d.patchFlag !== -2 && ec(h, d)), d.type === gs && (d.patchFlag !== -1 ? d.el = h.el : d.__elIndex = l + (e.type === Rt ? 1 : 0)), d.type === At && !d.el && (d.el = h.el);
    }
  }
  function Ep(e) {
    const t = e.slice(), i = [
      0
    ];
    let o, c, l, h, d;
    const p = e.length;
    for (o = 0; o < p; o++) {
      const O = e[o];
      if (O !== 0) {
        if (c = i[i.length - 1], e[c] < O) {
          t[o] = c, i.push(o);
          continue;
        }
        for (l = 0, h = i.length - 1; l < h; ) d = l + h >> 1, e[i[d]] < O ? l = d + 1 : h = d;
        O < e[i[l]] && (l > 0 && (t[o] = i[l - 1]), i[l] = o);
      }
    }
    for (l = i.length, h = i[l - 1]; l-- > 0; ) i[l] = h, h = t[h];
    return i;
  }
  function ph(e) {
    const t = e.subTree.component;
    if (t) return t.asyncDep && !t.asyncResolved ? t : ph(t);
  }
  function kr(e) {
    if (e) for (let t = 0; t < e.length; t++) e[t].flags |= 8;
  }
  function Th(e) {
    if (e.placeholder) return e.placeholder;
    const t = e.component;
    return t ? Th(t.subTree) : null;
  }
  const Br = (e) => e.__isSuspense;
  function mp(e, t) {
    t && t.pendingBranch ? Ae(e) ? t.effects.push(...e) : t.effects.push(e) : Uu(e);
  }
  let Un, Wn;
  Rt = /* @__PURE__ */ Symbol.for("v-fgt");
  gs = /* @__PURE__ */ Symbol.for("v-txt");
  At = /* @__PURE__ */ Symbol.for("v-cmt");
  Un = /* @__PURE__ */ Symbol.for("v-stc");
  Wn = [];
  let Kt = null;
  oi = function(e = false) {
    Wn.push(Kt = e ? null : []);
  };
  function gp() {
    Wn.pop(), Kt = Wn[Wn.length - 1] || null;
  }
  let zn = 1;
  function Yr(e, t = false) {
    zn += e, e < 0 && Kt && t && (Kt.hasOnce = true);
  }
  function Ih(e) {
    return e.dynamicChildren = zn > 0 ? Kt || zo : null, gp(), zn > 0 && Kt && Kt.push(e), e;
  }
  vi = function(e, t, i, o, c, l) {
    return Ih(Be(e, t, i, o, c, l, true));
  };
  Ia = function(e, t, i, o, c) {
    return Ih(Ct(e, t, i, o, c, true));
  };
  Qo = function(e) {
    return e ? e.__v_isVNode === true : false;
  };
  function so(e, t) {
    return e.type === t.type && e.key === t.key;
  }
  const Eh = ({ key: e }) => e ?? null, Sr = ({ ref: e, ref_key: t, ref_for: i }) => (typeof e == "number" && (e = "" + e), e != null ? st(e) || at(e) || Ne(e) ? {
    i: wt,
    r: e,
    k: t,
    f: !!i
  } : e : null);
  Be = function(e, t = null, i = null, o = 0, c = null, l = e === Rt ? 0 : 1, h = false, d = false) {
    const p = {
      __v_isVNode: true,
      __v_skip: true,
      type: e,
      props: t,
      key: t && Eh(t),
      ref: t && Sr(t),
      scopeId: Gu,
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
      ctx: wt
    };
    return d ? (tc(p, i), l & 128 && e.normalize(p)) : i && (p.shapeFlag |= st(i) ? 8 : 16), zn > 0 && !h && Kt && (p.patchFlag > 0 || l & 6) && p.patchFlag !== 32 && Kt.push(p), p;
  };
  Ct = Op;
  function Op(e, t = null, i = null, o = 0, c = null, l = false) {
    if ((!e || e === Qu) && (e = At), Qo(e)) {
      const d = ji(e, t, true);
      return i && tc(d, i), zn > 0 && !l && Kt && (d.shapeFlag & 6 ? Kt[Kt.indexOf(e)] = d : Kt.push(d)), d.patchFlag = -2, d;
    }
    if (Hp(e) && (e = e.__vccOpts), t) {
      t = Rp(t);
      let { class: d, style: p } = t;
      d && !st(d) && (t.class = ka(d)), Ke(p) && (fs(p) && !Ae(p) && (p = ft({}, p)), t.style = ls(p));
    }
    const h = st(e) ? 1 : Br(e) ? 128 : Yu(e) ? 64 : Ke(e) ? 4 : Ne(e) ? 2 : 0;
    return Be(e, t, i, o, c, h, l, true);
  }
  function Rp(e) {
    return e ? fs(e) || ch(e) ? ft({}, e) : e : null;
  }
  ji = function(e, t, i = false, o = false) {
    const { props: c, ref: l, patchFlag: h, children: d, transition: p } = e, O = t ? wp(c || {}, t) : c, T = {
      __v_isVNode: true,
      __v_skip: true,
      type: e.type,
      props: O,
      key: O && Eh(O),
      ref: t && t.ref ? i && l ? Ae(l) ? l.concat(Sr(t)) : [
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
      patchFlag: t && e.type !== Rt ? h === -1 ? 16 : h | 16 : h,
      dynamicProps: e.dynamicProps,
      dynamicChildren: e.dynamicChildren,
      appContext: e.appContext,
      dirs: e.dirs,
      transition: p,
      component: e.component,
      suspense: e.suspense,
      ssContent: e.ssContent && ji(e.ssContent),
      ssFallback: e.ssFallback && ji(e.ssFallback),
      placeholder: e.placeholder,
      el: e.el,
      anchor: e.anchor,
      ctx: e.ctx,
      ce: e.ce
    };
    return p && o && fo(T, p.clone(T)), T;
  };
  Ap = function(e = " ", t = 0) {
    return Ct(gs, null, e, t);
  };
  uR = function(e, t) {
    const i = Ct(Un, null, e);
    return i.staticCount = t, i;
  };
  pr = function(e = "", t = false) {
    return t ? (oi(), Ia(At, null, e)) : Ct(At, null, e);
  };
  function Oi(e) {
    return e == null || typeof e == "boolean" ? Ct(At) : Ae(e) ? Ct(Rt, null, e.slice()) : Qo(e) ? ro(e) : Ct(gs, null, String(e));
  }
  function ro(e) {
    return e.el === null && e.patchFlag !== -1 || e.memo ? e : ji(e);
  }
  function tc(e, t) {
    let i = 0;
    const { shapeFlag: o } = e;
    if (t == null) t = null;
    else if (Ae(t)) i = 16;
    else if (typeof t == "object") if (o & 65) {
      const c = t.default;
      c && (c._c && (c._d = false), tc(e, c()), c._c && (c._d = true));
      return;
    } else {
      i = 32;
      const c = t._;
      !c && !ch(t) ? t._ctx = wt : c === 3 && wt && (wt.slots._ === 1 ? t._ = 1 : (t._ = 2, e.patchFlag |= 1024));
    }
    else Ne(t) ? (t = {
      default: t,
      _ctx: wt
    }, i = 32) : (t = String(t), o & 64 ? (i = 16, t = [
      Ap(t)
    ]) : i = 8);
    e.children = t, e.shapeFlag |= i;
  }
  wp = function(...e) {
    const t = {};
    for (let i = 0; i < e.length; i++) {
      const o = e[i];
      for (const c in o) if (c === "class") t.class !== o.class && (t.class = ka([
        t.class,
        o.class
      ]));
      else if (c === "style") t.style = ls([
        t.style,
        o.style
      ]);
      else if (ns(c)) {
        const l = t[c], h = o[c];
        h && l !== h && !(Ae(l) && l.includes(h)) && (t[c] = l ? [].concat(l, h) : h);
      } else c !== "" && (t[c] = o[c]);
    }
    return t;
  };
  function ii(e, t, i, o = null) {
    fi(e, t, 7, [
      i,
      o
    ]);
  }
  const Sp = oh();
  let Np = 0;
  function yp(e, t, i) {
    const o = e.type, c = (t ? t.appContext : e.appContext) || Sp, l = {
      uid: Np++,
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
      scope: new fu(true),
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
      propsOptions: uh(o, c),
      emitsOptions: rh(o, c),
      emit: null,
      emitted: null,
      propsDefaults: We,
      inheritAttrs: o.inheritAttrs,
      ctx: We,
      data: We,
      props: We,
      attrs: We,
      slots: We,
      refs: We,
      setupState: We,
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
    }, l.root = t ? t.root : l, l.emit = ip.bind(null, l), e.ce && e.ce(l), l;
  }
  let vt = null;
  To = () => vt || wt;
  let xr, Ea;
  {
    const e = cs(), t = (i, o) => {
      let c;
      return (c = e[i]) || (c = e[i] = []), c.push(o), (l) => {
        c.length > 1 ? c.forEach((h) => h(l)) : c[0](l);
      };
    };
    xr = t("__VUE_INSTANCE_SETTERS__", (i) => vt = i), Ea = t("__VUE_SSR_SETTERS__", (i) => $n = i);
  }
  const tr = (e) => {
    const t = vt;
    return xr(e), e.scope.on(), () => {
      e.scope.off(), xr(t);
    };
  }, Hc = () => {
    vt && vt.scope.off(), xr(null);
  };
  function mh(e) {
    return e.vnode.shapeFlag & 4;
  }
  let $n = false;
  function bp(e, t = false, i = false) {
    t && Ea(t);
    const { props: o, children: c } = e.vnode, l = mh(e);
    cp(e, o, l, t), dp(e, c, i || t);
    const h = l ? Lp(e, t) : void 0;
    return t && Ea(false), h;
  }
  function Lp(e, t) {
    const i = e.type;
    e.accessCache = /* @__PURE__ */ Object.create(null), e.proxy = new Proxy(e.ctx, Kf);
    const { setup: o } = i;
    if (o) {
      Bi();
      const c = e.setupContext = o.length > 1 ? Cp(e) : null, l = tr(e), h = Qn(o, e, 0, [
        e.props,
        c
      ]), d = su(h);
      if (Yi(), l(), (d || e.sp) && !uo(e) && Xu(e), d) {
        if (h.then(Hc, Hc), t) return h.then((p) => {
          Dc(e, p);
        }).catch((p) => {
          ps(p, e, 0);
        });
        e.asyncDep = h;
      } else Dc(e, h);
    } else gh(e);
  }
  function Dc(e, t, i) {
    Ne(t) ? e.type.__ssrInlineRender ? e.ssrRender = t : e.render = t : Ke(t) && (e.setupState = Hu(t)), gh(e);
  }
  function gh(e, t, i) {
    const o = e.type;
    e.render || (e.render = o.render || ui);
    {
      const c = tr(e);
      Bi();
      try {
        qf(e);
      } finally {
        Yi(), c();
      }
    }
  }
  const vp = {
    get(e, t) {
      return Lt(e, "get", ""), e[t];
    }
  };
  function Cp(e) {
    const t = (i) => {
      e.exposed = i || {};
    };
    return {
      attrs: new Proxy(e.attrs, vp),
      slots: e.slots,
      emit: e.emit,
      expose: t
    };
  }
  function Os(e) {
    return e.exposed ? e.exposeProxy || (e.exposeProxy = new Proxy(Hu(za(e.exposed)), {
      get(t, i) {
        if (i in t) return t[i];
        if (i in Pn) return Pn[i](e);
      },
      has(t, i) {
        return i in t || i in Pn;
      }
    })) : e.proxy;
  }
  function ma(e, t = true) {
    return Ne(e) ? e.displayName || e.name : e.name || t && e.__name;
  }
  function Hp(e) {
    return Ne(e) && "__vccOpts" in e;
  }
  ic = (e, t) => Of(e, t, $n);
  Dp = function(e, t, i) {
    try {
      Yr(-1);
      const o = arguments.length;
      return o === 2 ? Ke(t) && !Ae(t) ? Qo(t) ? Ct(e, null, [
        t
      ]) : Ct(e, t) : Ct(e, null, t) : (o > 3 ? i = Array.prototype.slice.call(arguments, 2) : o === 3 && Qo(i) && (i = [
        i
      ]), Ct(e, t, i));
    } finally {
      Yr(1);
    }
  };
  const Mp = "3.5.26";
  let ga;
  const Mc = typeof window < "u" && window.trustedTypes;
  if (Mc) try {
    ga = Mc.createPolicy("vue", {
      createHTML: (e) => e
    });
  } catch {
  }
  let Oh, Fp, Pp, Di, Fc, Up, Xi, In, en, Rh, Ah, Wp, wo, Pc;
  Oh = ga ? (e) => ga.createHTML(e) : (e) => e;
  Fp = "http://www.w3.org/2000/svg";
  Pp = "http://www.w3.org/1998/Math/MathML";
  Di = typeof document < "u" ? document : null;
  Fc = Di && Di.createElement("template");
  Up = {
    insert: (e, t, i) => {
      t.insertBefore(e, i || null);
    },
    remove: (e) => {
      const t = e.parentNode;
      t && t.removeChild(e);
    },
    createElement: (e, t, i, o) => {
      const c = t === "svg" ? Di.createElementNS(Fp, e) : t === "mathml" ? Di.createElementNS(Pp, e) : i ? Di.createElement(e, {
        is: i
      }) : Di.createElement(e);
      return e === "select" && o && o.multiple != null && c.setAttribute("multiple", o.multiple), c;
    },
    createText: (e) => Di.createTextNode(e),
    createComment: (e) => Di.createComment(e),
    setText: (e, t) => {
      e.nodeValue = t;
    },
    setElementText: (e, t) => {
      e.textContent = t;
    },
    parentNode: (e) => e.parentNode,
    nextSibling: (e) => e.nextSibling,
    querySelector: (e) => Di.querySelector(e),
    setScopeId(e, t) {
      e.setAttribute(t, "");
    },
    insertStaticContent(e, t, i, o, c, l) {
      const h = i ? i.previousSibling : t.lastChild;
      if (c && (c === l || c.nextSibling)) for (; t.insertBefore(c.cloneNode(true), i), !(c === l || !(c = c.nextSibling)); ) ;
      else {
        Fc.innerHTML = Oh(o === "svg" ? `<svg>${e}</svg>` : o === "mathml" ? `<math>${e}</math>` : e);
        const d = Fc.content;
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
  Xi = "transition";
  In = "animation";
  en = /* @__PURE__ */ Symbol("_vtc");
  Rh = {
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
  Ah = ft({}, zu, Rh);
  Wp = (e) => (e.displayName = "Transition", e.props = Ah, e);
  hR = Wp((e, { slots: t }) => Dp(Ff, wh(e), t));
  wo = (e, t = []) => {
    Ae(e) ? e.forEach((i) => i(...t)) : e && e(...t);
  };
  Pc = (e) => e ? Ae(e) ? e.some((t) => t.length > 1) : e.length > 1 : false;
  function wh(e) {
    const t = {};
    for (const fe in e) fe in Rh || (t[fe] = e[fe]);
    if (e.css === false) return t;
    const { name: i = "v", type: o, duration: c, enterFromClass: l = `${i}-enter-from`, enterActiveClass: h = `${i}-enter-active`, enterToClass: d = `${i}-enter-to`, appearFromClass: p = l, appearActiveClass: O = h, appearToClass: T = d, leaveFromClass: w = `${i}-leave-from`, leaveActiveClass: C = `${i}-leave-active`, leaveToClass: L = `${i}-leave-to` } = e, P = _p(c), D = P && P[0], de = P && P[1], { onBeforeEnter: ie, onEnter: K, onEnterCancelled: V, onLeave: G, onLeaveCancelled: ue, onBeforeAppear: Te = ie, onAppear: ne = K, onAppearCancelled: he = V } = t, te = (fe, ke, ht, xt) => {
      fe._enterCancelled = xt, eo(fe, ke ? T : d), eo(fe, ke ? O : h), ht && ht();
    }, Ie = (fe, ke) => {
      fe._isLeaving = false, eo(fe, w), eo(fe, L), eo(fe, C), ke && ke();
    }, Le = (fe) => (ke, ht) => {
      const xt = fe ? ne : K, qe = () => te(ke, fe, ht);
      wo(xt, [
        ke,
        qe
      ]), Uc(() => {
        eo(ke, fe ? p : l), Ii(ke, fe ? T : d), Pc(xt) || Wc(ke, o, D, qe);
      });
    };
    return ft(t, {
      onBeforeEnter(fe) {
        wo(ie, [
          fe
        ]), Ii(fe, l), Ii(fe, h);
      },
      onBeforeAppear(fe) {
        wo(Te, [
          fe
        ]), Ii(fe, p), Ii(fe, O);
      },
      onEnter: Le(false),
      onAppear: Le(true),
      onLeave(fe, ke) {
        fe._isLeaving = true;
        const ht = () => Ie(fe, ke);
        Ii(fe, w), fe._enterCancelled ? (Ii(fe, C), Oa(fe)) : (Oa(fe), Ii(fe, C)), Uc(() => {
          fe._isLeaving && (eo(fe, w), Ii(fe, L), Pc(G) || Wc(fe, o, de, ht));
        }), wo(G, [
          fe,
          ht
        ]);
      },
      onEnterCancelled(fe) {
        te(fe, false, void 0, true), wo(V, [
          fe
        ]);
      },
      onAppearCancelled(fe) {
        te(fe, true, void 0, true), wo(he, [
          fe
        ]);
      },
      onLeaveCancelled(fe) {
        Ie(fe), wo(ue, [
          fe
        ]);
      }
    });
  }
  function _p(e) {
    if (e == null) return null;
    if (Ke(e)) return [
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
    return Pd(e);
  }
  function Ii(e, t) {
    t.split(/\s+/).forEach((i) => i && e.classList.add(i)), (e[en] || (e[en] = /* @__PURE__ */ new Set())).add(t);
  }
  function eo(e, t) {
    t.split(/\s+/).forEach((o) => o && e.classList.remove(o));
    const i = e[en];
    i && (i.delete(t), i.size || (e[en] = void 0));
  }
  function Uc(e) {
    requestAnimationFrame(() => {
      requestAnimationFrame(e);
    });
  }
  let Gp = 0;
  function Wc(e, t, i, o) {
    const c = e._endId = ++Gp, l = () => {
      c === e._endId && o();
    };
    if (i != null) return setTimeout(l, i);
    const { type: h, timeout: d, propCount: p } = Sh(e, t);
    if (!h) return o();
    const O = h + "end";
    let T = 0;
    const w = () => {
      e.removeEventListener(O, C), l();
    }, C = (L) => {
      L.target === e && ++T >= p && w();
    };
    setTimeout(() => {
      T < p && w();
    }, d + 1), e.addEventListener(O, C);
  }
  function Sh(e, t) {
    const i = window.getComputedStyle(e), o = (P) => (i[P] || "").split(", "), c = o(`${Xi}Delay`), l = o(`${Xi}Duration`), h = _c(c, l), d = o(`${In}Delay`), p = o(`${In}Duration`), O = _c(d, p);
    let T = null, w = 0, C = 0;
    t === Xi ? h > 0 && (T = Xi, w = h, C = l.length) : t === In ? O > 0 && (T = In, w = O, C = p.length) : (w = Math.max(h, O), T = w > 0 ? h > O ? Xi : In : null, C = T ? T === Xi ? l.length : p.length : 0);
    const L = T === Xi && /\b(?:transform|all)(?:,|$)/.test(o(`${Xi}Property`).toString());
    return {
      type: T,
      timeout: w,
      propCount: C,
      hasTransform: L
    };
  }
  function _c(e, t) {
    for (; e.length < t.length; ) e = e.concat(e);
    return Math.max(...t.map((i, o) => Gc(i) + Gc(e[o])));
  }
  function Gc(e) {
    return e === "auto" ? 0 : Number(e.slice(0, -1).replace(",", ".")) * 1e3;
  }
  function Oa(e) {
    return (e ? e.ownerDocument : document).body.offsetHeight;
  }
  function kp(e, t, i) {
    const o = e[en];
    o && (t = (t ? [
      t,
      ...o
    ] : [
      ...o
    ]).join(" ")), t == null ? e.removeAttribute("class") : i ? e.setAttribute("class", t) : e.className = t;
  }
  let jr, Nh;
  jr = /* @__PURE__ */ Symbol("_vod");
  Nh = /* @__PURE__ */ Symbol("_vsh");
  dR = {
    name: "show",
    beforeMount(e, { value: t }, { transition: i }) {
      e[jr] = e.style.display === "none" ? "" : e.style.display, i && t ? i.beforeEnter(e) : En(e, t);
    },
    mounted(e, { value: t }, { transition: i }) {
      i && t && i.enter(e);
    },
    updated(e, { value: t, oldValue: i }, { transition: o }) {
      !t != !i && (o ? t ? (o.beforeEnter(e), En(e, true), o.enter(e)) : o.leave(e, () => {
        En(e, false);
      }) : En(e, t));
    },
    beforeUnmount(e, { value: t }) {
      En(e, t);
    }
  };
  function En(e, t) {
    e.style.display = t ? e[jr] : "none", e[Nh] = !t;
  }
  const yh = /* @__PURE__ */ Symbol("");
  fR = function(e) {
    const t = To();
    if (!t) return;
    const i = t.ut = (c = e(t.proxy)) => {
      Array.from(document.querySelectorAll(`[data-v-owner="${t.uid}"]`)).forEach((l) => Vr(l, c));
    }, o = () => {
      const c = e(t.proxy);
      t.ce ? Vr(t.ce, c) : Ra(t.subTree, c), i(c);
    };
    Zu(() => {
      Uu(o);
    }), er(() => {
      Xo(o, ui, {
        flush: "post"
      });
      const c = new MutationObserver(o);
      c.observe(t.subTree.el.parentNode, {
        childList: true
      }), Ja(() => c.disconnect());
    });
  };
  function Ra(e, t) {
    if (e.shapeFlag & 128) {
      const i = e.suspense;
      e = i.activeBranch, i.pendingBranch && !i.isHydrating && i.effects.push(() => {
        Ra(i.activeBranch, t);
      });
    }
    for (; e.component; ) e = e.component.subTree;
    if (e.shapeFlag & 1 && e.el) Vr(e.el, t);
    else if (e.type === Rt) e.children.forEach((i) => Ra(i, t));
    else if (e.type === Un) {
      let { el: i, anchor: o } = e;
      for (; i && (Vr(i, t), i !== o); ) i = i.nextSibling;
    }
  }
  function Vr(e, t) {
    if (e.nodeType === 1) {
      const i = e.style;
      let o = "";
      for (const c in t) {
        const l = Yd(t[c]);
        i.setProperty(`--${c}`, l), o += `--${c}: ${l};`;
      }
      i[yh] = o;
    }
  }
  const Bp = /(?:^|;)\s*display\s*:/;
  function Yp(e, t, i) {
    const o = e.style, c = st(i);
    let l = false;
    if (i && !c) {
      if (t) if (st(t)) for (const h of t.split(";")) {
        const d = h.slice(0, h.indexOf(":")).trim();
        i[d] == null && Nr(o, d, "");
      }
      else for (const h in t) i[h] == null && Nr(o, h, "");
      for (const h in i) h === "display" && (l = true), Nr(o, h, i[h]);
    } else if (c) {
      if (t !== i) {
        const h = o[yh];
        h && (i += ";" + h), o.cssText = i, l = Bp.test(i);
      }
    } else t && e.removeAttribute("style");
    jr in e && (e[jr] = l ? o.display : "", e[Nh] && (o.display = "none"));
  }
  const kc = /\s*!important$/;
  function Nr(e, t, i) {
    if (Ae(i)) i.forEach((o) => Nr(e, t, o));
    else if (i == null && (i = ""), t.startsWith("--")) e.setProperty(t, i);
    else {
      const o = xp(e, t);
      kc.test(i) ? e.setProperty($i(o), i.replace(kc, ""), "important") : e[o] = i;
    }
  }
  const Bc = [
    "Webkit",
    "Moz",
    "ms"
  ], xs = {};
  function xp(e, t) {
    const i = xs[t];
    if (i) return i;
    let o = Jt(t);
    if (o !== "filter" && o in e) return xs[t] = o;
    o = as(o);
    for (let c = 0; c < Bc.length; c++) {
      const l = Bc[c] + o;
      if (l in e) return xs[t] = l;
    }
    return t;
  }
  const Yc = "http://www.w3.org/1999/xlink";
  function xc(e, t, i, o, c, l = Bd(t)) {
    o && t.startsWith("xlink:") ? i == null ? e.removeAttributeNS(Yc, t.slice(6, t.length)) : e.setAttributeNS(Yc, t, i) : i == null || l && !uu(i) ? e.removeAttribute(t) : e.setAttribute(t, l ? "" : zi(i) ? String(i) : i);
  }
  function jc(e, t, i, o, c) {
    if (t === "innerHTML" || t === "textContent") {
      i != null && (e[t] = t === "innerHTML" ? Oh(i) : i);
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
      d === "boolean" ? i = uu(i) : i == null && d === "string" ? (i = "", h = true) : d === "number" && (i = 0, h = true);
    }
    try {
      e[t] = i;
    } catch {
    }
    h && e.removeAttribute(c || t);
  }
  function jp(e, t, i, o) {
    e.addEventListener(t, i, o);
  }
  function Vp(e, t, i, o) {
    e.removeEventListener(t, i, o);
  }
  const Vc = /* @__PURE__ */ Symbol("_vei");
  function zp(e, t, i, o, c = null) {
    const l = e[Vc] || (e[Vc] = {}), h = l[t];
    if (o && h) h.value = o;
    else {
      const [d, p] = $p(t);
      if (o) {
        const O = l[t] = Xp(o, c);
        jp(e, d, O, p);
      } else h && (Vp(e, d, h, p), l[t] = void 0);
    }
  }
  const zc = /(?:Once|Passive|Capture)$/;
  function $p(e) {
    let t;
    if (zc.test(e)) {
      t = {};
      let o;
      for (; o = e.match(zc); ) e = e.slice(0, e.length - o[0].length), t[o[0].toLowerCase()] = true;
    }
    return [
      e[2] === ":" ? e.slice(3) : $i(e.slice(2)),
      t
    ];
  }
  let js = 0;
  const Kp = Promise.resolve(), qp = () => js || (Kp.then(() => js = 0), js = Date.now());
  function Xp(e, t) {
    const i = (o) => {
      if (!o._vts) o._vts = Date.now();
      else if (o._vts <= i.attached) return;
      fi(Jp(o, i.value), t, 5, [
        o
      ]);
    };
    return i.value = e, i.attached = qp(), i;
  }
  function Jp(e, t) {
    if (Ae(t)) {
      const i = e.stopImmediatePropagation;
      return e.stopImmediatePropagation = () => {
        i.call(e), e._stopped = true;
      }, t.map((o) => (c) => !c._stopped && o && o(c));
    } else return t;
  }
  const $c = (e) => e.charCodeAt(0) === 111 && e.charCodeAt(1) === 110 && e.charCodeAt(2) > 96 && e.charCodeAt(2) < 123, Zp = (e, t, i, o, c, l) => {
    const h = c === "svg";
    t === "class" ? kp(e, o, h) : t === "style" ? Yp(e, i, o) : ns(t) ? _a(t) || zp(e, t, i, o, l) : (t[0] === "." ? (t = t.slice(1), true) : t[0] === "^" ? (t = t.slice(1), false) : Qp(e, t, o, h)) ? (jc(e, t, o), !e.tagName.includes("-") && (t === "value" || t === "checked" || t === "selected") && xc(e, t, o, h, l, t !== "value")) : e._isVueCE && (/[A-Z]/.test(t) || !st(o)) ? jc(e, Jt(t), o, l, t) : (t === "true-value" ? e._trueValue = o : t === "false-value" && (e._falseValue = o), xc(e, t, o, h));
  };
  function Qp(e, t, i, o) {
    if (o) return !!(t === "innerHTML" || t === "textContent" || t in e && $c(t) && Ne(i));
    if (t === "spellcheck" || t === "draggable" || t === "translate" || t === "autocorrect" || t === "sandbox" && e.tagName === "IFRAME" || t === "form" || t === "list" && e.tagName === "INPUT" || t === "type" && e.tagName === "TEXTAREA") return false;
    if (t === "width" || t === "height") {
      const c = e.tagName;
      if (c === "IMG" || c === "VIDEO" || c === "CANVAS" || c === "SOURCE") return false;
    }
    return $c(t) && st(i) ? false : t in e;
  }
  let bh, Lh, zr, Kc, eT, tT;
  bh = /* @__PURE__ */ new WeakMap();
  Lh = /* @__PURE__ */ new WeakMap();
  zr = /* @__PURE__ */ Symbol("_moveCb");
  Kc = /* @__PURE__ */ Symbol("_enterCb");
  eT = (e) => (delete e.props.mode, e);
  tT = eT({
    name: "TransitionGroup",
    props: ft({}, Ah, {
      tag: String,
      moveClass: String
    }),
    setup(e, { slots: t }) {
      const i = To(), o = Vu();
      let c, l;
      return qa(() => {
        if (!c.length) return;
        const h = e.moveClass || `${e.name || "v"}-move`;
        if (!rT(c[0].el, i.vnode.el, h)) {
          c = [];
          return;
        }
        c.forEach(iT), c.forEach(oT);
        const d = c.filter(nT);
        Oa(i.vnode.el), d.forEach((p) => {
          const O = p.el, T = O.style;
          Ii(O, h), T.transform = T.webkitTransform = T.transitionDuration = "";
          const w = O[zr] = (C) => {
            C && C.target !== O || (!C || C.propertyName.endsWith("transform")) && (O.removeEventListener("transitionend", w), O[zr] = null, eo(O, h));
          };
          O.addEventListener("transitionend", w);
        }), c = [];
      }), () => {
        const h = Pe(e), d = wh(h);
        let p = h.tag || Rt;
        if (c = [], l) for (let O = 0; O < l.length; O++) {
          const T = l[O];
          T.el && T.el instanceof Element && (c.push(T), fo(T, Vn(T, d, o, i)), bh.set(T, {
            left: T.el.offsetLeft,
            top: T.el.offsetTop
          }));
        }
        l = t.default ? Ka(t.default()) : [];
        for (let O = 0; O < l.length; O++) {
          const T = l[O];
          T.key != null && fo(T, Vn(T, d, o, i));
        }
        return Ct(p, null, l);
      };
    }
  });
  pR = tT;
  function iT(e) {
    const t = e.el;
    t[zr] && t[zr](), t[Kc] && t[Kc]();
  }
  function oT(e) {
    Lh.set(e, {
      left: e.el.offsetLeft,
      top: e.el.offsetTop
    });
  }
  function nT(e) {
    const t = bh.get(e), i = Lh.get(e), o = t.left - i.left, c = t.top - i.top;
    if (o || c) {
      const l = e.el.style;
      return l.transform = l.webkitTransform = `translate(${o}px,${c}px)`, l.transitionDuration = "0s", e;
    }
  }
  function rT(e, t, i) {
    const o = e.cloneNode(), c = e[en];
    c && c.forEach((d) => {
      d.split(/\s+/).forEach((p) => p && o.classList.remove(p));
    }), i.split(/\s+/).forEach((d) => d && o.classList.add(d)), o.style.display = "none";
    const l = t.nodeType === 1 ? t : t.parentNode;
    l.appendChild(o);
    const { hasTransform: h } = Sh(o);
    return l.removeChild(o), h;
  }
  let sT, aT, cT, lT;
  sT = [
    "ctrl",
    "shift",
    "alt",
    "meta"
  ];
  aT = {
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
    exact: (e, t) => sT.some((i) => e[`${i}Key`] && !t.includes(i))
  };
  TR = (e, t) => {
    const i = e._withMods || (e._withMods = {}), o = t.join(".");
    return i[o] || (i[o] = ((c, ...l) => {
      for (let h = 0; h < t.length; h++) {
        const d = aT[t[h]];
        if (d && d(c, t)) return;
      }
      return e(c, ...l);
    }));
  };
  cT = {
    esc: "escape",
    space: " ",
    up: "arrow-up",
    left: "arrow-left",
    right: "arrow-right",
    down: "arrow-down",
    delete: "backspace"
  };
  IR = (e, t) => {
    const i = e._withKeys || (e._withKeys = {}), o = t.join(".");
    return i[o] || (i[o] = ((c) => {
      if (!("key" in c)) return;
      const l = $i(c.key);
      if (t.some((h) => h === l || cT[h] === l)) return e(c);
    }));
  };
  lT = ft({
    patchProp: Zp
  }, Up);
  let qc;
  function uT() {
    return qc || (qc = pp(lT));
  }
  const vh = ((...e) => {
    const t = uT().createApp(...e), { mount: i } = t;
    return t.mount = (o) => {
      const c = dT(o);
      if (!c) return;
      const l = t._component;
      !Ne(l) && !l.render && !l.template && (l.template = c.innerHTML), c.nodeType === 1 && (c.textContent = "");
      const h = i(c, false, hT(c));
      return c instanceof Element && (c.removeAttribute("v-cloak"), c.setAttribute("data-v-app", "")), h;
    }, t;
  });
  function hT(e) {
    if (e instanceof SVGElement) return "svg";
    if (typeof MathMLElement == "function" && e instanceof MathMLElement) return "mathml";
  }
  function dT(e) {
    return st(e) ? document.querySelector(e) : e;
  }
  const fT = "" + new URL("../favicon.svg", import.meta.url).href;
  let Ch, pT, Hh, TT, IT, mn;
  Ch = typeof global == "object" && global && global.Object === Object && global;
  pT = typeof self == "object" && self && self.Object === Object && self;
  wi = Ch || pT || Function("return this")();
  tn = wi.Symbol;
  Hh = Object.prototype;
  TT = Hh.hasOwnProperty;
  IT = Hh.toString;
  mn = tn ? tn.toStringTag : void 0;
  function ET(e) {
    var t = TT.call(e, mn), i = e[mn];
    try {
      e[mn] = void 0;
      var o = true;
    } catch {
    }
    var c = IT.call(e);
    return o && (t ? e[mn] = i : delete e[mn]), c;
  }
  var mT = Object.prototype, gT = mT.toString;
  function OT(e) {
    return gT.call(e);
  }
  var RT = "[object Null]", AT = "[object Undefined]", Xc = tn ? tn.toStringTag : void 0;
  Io = function(e) {
    return e == null ? e === void 0 ? AT : RT : Xc && Xc in Object(e) ? ET(e) : OT(e);
  };
  Eo = function(e) {
    return e != null && typeof e == "object";
  };
  Rs = Array.isArray;
  As = function(e) {
    var t = typeof e;
    return e != null && (t == "object" || t == "function");
  };
  var wT = "[object AsyncFunction]", ST = "[object Function]", NT = "[object GeneratorFunction]", yT = "[object Proxy]";
  Dh = function(e) {
    if (!As(e)) return false;
    var t = Io(e);
    return t == ST || t == NT || t == wT || t == yT;
  };
  var Vs = wi["__core-js_shared__"], Jc = (function() {
    var e = /[^.]+$/.exec(Vs && Vs.keys && Vs.keys.IE_PROTO || "");
    return e ? "Symbol(src)_1." + e : "";
  })();
  function bT(e) {
    return !!Jc && Jc in e;
  }
  var LT = Function.prototype, vT = LT.toString;
  function Uo(e) {
    if (e != null) {
      try {
        return vT.call(e);
      } catch {
      }
      try {
        return e + "";
      } catch {
      }
    }
    return "";
  }
  var CT = /[\\^$.*+?()[\]{}|]/g, HT = /^\[object .+?Constructor\]$/, DT = Function.prototype, MT = Object.prototype, FT = DT.toString, PT = MT.hasOwnProperty, UT = RegExp("^" + FT.call(PT).replace(CT, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$");
  function WT(e) {
    if (!As(e) || bT(e)) return false;
    var t = Dh(e) ? UT : HT;
    return t.test(Uo(e));
  }
  function _T(e, t) {
    return e == null ? void 0 : e[t];
  }
  function Wo(e, t) {
    var i = _T(e, t);
    return WT(i) ? i : void 0;
  }
  let Aa, Zc, GT;
  Aa = Wo(wi, "WeakMap");
  Zc = Object.create;
  GT = /* @__PURE__ */ (function() {
    function e() {
    }
    return function(t) {
      if (!As(t)) return {};
      if (Zc) return Zc(t);
      e.prototype = t;
      var i = new e();
      return e.prototype = void 0, i;
    };
  })();
  Qc = (function() {
    try {
      var e = Wo(Object, "defineProperty");
      return e({}, "", {}), e;
    } catch {
    }
  })();
  function kT(e, t) {
    for (var i = -1, o = e == null ? 0 : e.length; ++i < o && t(e[i], i, e) !== false; ) ;
    return e;
  }
  var BT = 9007199254740991, YT = /^(?:0|[1-9]\d*)$/;
  xT = function(e, t) {
    var i = typeof e;
    return t = t ?? BT, !!t && (i == "number" || i != "symbol" && YT.test(e)) && e > -1 && e % 1 == 0 && e < t;
  };
  jT = function(e, t, i) {
    t == "__proto__" && Qc ? Qc(e, t, {
      configurable: true,
      enumerable: true,
      value: i,
      writable: true
    }) : e[t] = i;
  };
  Mh = function(e, t) {
    return e === t || e !== e && t !== t;
  };
  var VT = Object.prototype, zT = VT.hasOwnProperty;
  $T = function(e, t, i) {
    var o = e[t];
    (!(zT.call(e, t) && Mh(o, i)) || i === void 0 && !(t in e)) && jT(e, t, i);
  };
  var KT = 9007199254740991;
  Fh = function(e) {
    return typeof e == "number" && e > -1 && e % 1 == 0 && e <= KT;
  };
  qT = function(e) {
    return e != null && Fh(e.length) && !Dh(e);
  };
  var XT = Object.prototype;
  Ph = function(e) {
    var t = e && e.constructor, i = typeof t == "function" && t.prototype || XT;
    return e === i;
  };
  function JT(e, t) {
    for (var i = -1, o = Array(e); ++i < e; ) o[i] = t(i);
    return o;
  }
  var ZT = "[object Arguments]";
  function el(e) {
    return Eo(e) && Io(e) == ZT;
  }
  let Uh, QT, eI;
  Uh = Object.prototype;
  QT = Uh.hasOwnProperty;
  eI = Uh.propertyIsEnumerable;
  tI = el(/* @__PURE__ */ (function() {
    return arguments;
  })()) ? el : function(e) {
    return Eo(e) && QT.call(e, "callee") && !eI.call(e, "callee");
  };
  function iI() {
    return false;
  }
  let Wh, tl, oI, il, nI, rI, sI, aI, cI, lI, uI, hI, dI, fI, pI, TI, II, EI, mI, gI, OI, RI, AI, wI, SI, NI, yI, bI, LI, Qe;
  Wh = typeof exports == "object" && exports && !exports.nodeType && exports;
  tl = Wh && typeof module == "object" && module && !module.nodeType && module;
  oI = tl && tl.exports === Wh;
  il = oI ? wi.Buffer : void 0;
  nI = il ? il.isBuffer : void 0;
  _h = nI || iI;
  rI = "[object Arguments]";
  sI = "[object Array]";
  aI = "[object Boolean]";
  cI = "[object Date]";
  lI = "[object Error]";
  uI = "[object Function]";
  hI = "[object Map]";
  dI = "[object Number]";
  fI = "[object Object]";
  pI = "[object RegExp]";
  TI = "[object Set]";
  II = "[object String]";
  EI = "[object WeakMap]";
  mI = "[object ArrayBuffer]";
  gI = "[object DataView]";
  OI = "[object Float32Array]";
  RI = "[object Float64Array]";
  AI = "[object Int8Array]";
  wI = "[object Int16Array]";
  SI = "[object Int32Array]";
  NI = "[object Uint8Array]";
  yI = "[object Uint8ClampedArray]";
  bI = "[object Uint16Array]";
  LI = "[object Uint32Array]";
  Qe = {};
  Qe[OI] = Qe[RI] = Qe[AI] = Qe[wI] = Qe[SI] = Qe[NI] = Qe[yI] = Qe[bI] = Qe[LI] = true;
  Qe[rI] = Qe[sI] = Qe[mI] = Qe[aI] = Qe[gI] = Qe[cI] = Qe[lI] = Qe[uI] = Qe[hI] = Qe[dI] = Qe[fI] = Qe[pI] = Qe[TI] = Qe[II] = Qe[EI] = false;
  function vI(e) {
    return Eo(e) && Fh(e.length) && !!Qe[Io(e)];
  }
  function oc(e) {
    return function(t) {
      return e(t);
    };
  }
  let Gh, _n, CI, zs, on, ol, DI, MI;
  Gh = typeof exports == "object" && exports && !exports.nodeType && exports;
  _n = Gh && typeof module == "object" && module && !module.nodeType && module;
  CI = _n && _n.exports === Gh;
  zs = CI && Ch.process;
  on = (function() {
    try {
      var e = _n && _n.require && _n.require("util").types;
      return e || zs && zs.binding && zs.binding("util");
    } catch {
    }
  })();
  ol = on && on.isTypedArray;
  HI = ol ? oc(ol) : vI;
  DI = Object.prototype;
  MI = DI.hasOwnProperty;
  FI = function(e, t) {
    var i = Rs(e), o = !i && tI(e), c = !i && !o && _h(e), l = !i && !o && !c && HI(e), h = i || o || c || l, d = h ? JT(e.length, String) : [], p = d.length;
    for (var O in e) (t || MI.call(e, O)) && !(h && (O == "length" || c && (O == "offset" || O == "parent") || l && (O == "buffer" || O == "byteLength" || O == "byteOffset") || xT(O, p))) && d.push(O);
    return d;
  };
  function kh(e, t) {
    return function(i) {
      return e(t(i));
    };
  }
  var PI = kh(Object.keys, Object), UI = Object.prototype, WI = UI.hasOwnProperty;
  function _I(e) {
    if (!Ph(e)) return PI(e);
    var t = [];
    for (var i in Object(e)) WI.call(e, i) && i != "constructor" && t.push(i);
    return t;
  }
  GI = function(e) {
    return qT(e) ? FI(e) : _I(e);
  };
  var Kn = Wo(Object, "create");
  function kI() {
    this.__data__ = Kn ? Kn(null) : {}, this.size = 0;
  }
  function BI(e) {
    var t = this.has(e) && delete this.__data__[e];
    return this.size -= t ? 1 : 0, t;
  }
  var YI = "__lodash_hash_undefined__", xI = Object.prototype, jI = xI.hasOwnProperty;
  function VI(e) {
    var t = this.__data__;
    if (Kn) {
      var i = t[e];
      return i === YI ? void 0 : i;
    }
    return jI.call(t, e) ? t[e] : void 0;
  }
  var zI = Object.prototype, $I = zI.hasOwnProperty;
  function KI(e) {
    var t = this.__data__;
    return Kn ? t[e] !== void 0 : $I.call(t, e);
  }
  var qI = "__lodash_hash_undefined__";
  function XI(e, t) {
    var i = this.__data__;
    return this.size += this.has(e) ? 0 : 1, i[e] = Kn && t === void 0 ? qI : t, this;
  }
  function Po(e) {
    var t = -1, i = e == null ? 0 : e.length;
    for (this.clear(); ++t < i; ) {
      var o = e[t];
      this.set(o[0], o[1]);
    }
  }
  Po.prototype.clear = kI;
  Po.prototype.delete = BI;
  Po.prototype.get = VI;
  Po.prototype.has = KI;
  Po.prototype.set = XI;
  function JI() {
    this.__data__ = [], this.size = 0;
  }
  function ws(e, t) {
    for (var i = e.length; i--; ) if (Mh(e[i][0], t)) return i;
    return -1;
  }
  var ZI = Array.prototype, QI = ZI.splice;
  function eE(e) {
    var t = this.__data__, i = ws(t, e);
    if (i < 0) return false;
    var o = t.length - 1;
    return i == o ? t.pop() : QI.call(t, i, 1), --this.size, true;
  }
  function tE(e) {
    var t = this.__data__, i = ws(t, e);
    return i < 0 ? void 0 : t[i][1];
  }
  function iE(e) {
    return ws(this.__data__, e) > -1;
  }
  function oE(e, t) {
    var i = this.__data__, o = ws(i, e);
    return o < 0 ? (++this.size, i.push([
      e,
      t
    ])) : i[o][1] = t, this;
  }
  function qi(e) {
    var t = -1, i = e == null ? 0 : e.length;
    for (this.clear(); ++t < i; ) {
      var o = e[t];
      this.set(o[0], o[1]);
    }
  }
  qi.prototype.clear = JI;
  qi.prototype.delete = eE;
  qi.prototype.get = tE;
  qi.prototype.has = iE;
  qi.prototype.set = oE;
  var qn = Wo(wi, "Map");
  function nE() {
    this.size = 0, this.__data__ = {
      hash: new Po(),
      map: new (qn || qi)(),
      string: new Po()
    };
  }
  function rE(e) {
    var t = typeof e;
    return t == "string" || t == "number" || t == "symbol" || t == "boolean" ? e !== "__proto__" : e === null;
  }
  function Ss(e, t) {
    var i = e.__data__;
    return rE(t) ? i[typeof t == "string" ? "string" : "hash"] : i.map;
  }
  function sE(e) {
    var t = Ss(this, e).delete(e);
    return this.size -= t ? 1 : 0, t;
  }
  function aE(e) {
    return Ss(this, e).get(e);
  }
  function cE(e) {
    return Ss(this, e).has(e);
  }
  function lE(e, t) {
    var i = Ss(this, e), o = i.size;
    return i.set(e, t), this.size += i.size == o ? 0 : 1, this;
  }
  un = function(e) {
    var t = -1, i = e == null ? 0 : e.length;
    for (this.clear(); ++t < i; ) {
      var o = e[t];
      this.set(o[0], o[1]);
    }
  };
  un.prototype.clear = nE;
  un.prototype.delete = sE;
  un.prototype.get = aE;
  un.prototype.has = cE;
  un.prototype.set = lE;
  function uE(e, t) {
    for (var i = -1, o = t.length, c = e.length; ++i < o; ) e[c + i] = t[i];
    return e;
  }
  var Bh = kh(Object.getPrototypeOf, Object), hE = "[object Object]", dE = Function.prototype, fE = Object.prototype, Yh = dE.toString, pE = fE.hasOwnProperty, TE = Yh.call(Object);
  IE = function(e) {
    if (!Eo(e) || Io(e) != hE) return false;
    var t = Bh(e);
    if (t === null) return true;
    var i = pE.call(t, "constructor") && t.constructor;
    return typeof i == "function" && i instanceof i && Yh.call(i) == TE;
  };
  var EE = "[object DOMException]", mE = "[object Error]";
  function xh(e) {
    if (!Eo(e)) return false;
    var t = Io(e);
    return t == mE || t == EE || typeof e.message == "string" && typeof e.name == "string" && !IE(e);
  }
  function gE() {
    this.__data__ = new qi(), this.size = 0;
  }
  function OE(e) {
    var t = this.__data__, i = t.delete(e);
    return this.size = t.size, i;
  }
  function RE(e) {
    return this.__data__.get(e);
  }
  function AE(e) {
    return this.__data__.has(e);
  }
  var wE = 200;
  function SE(e, t) {
    var i = this.__data__;
    if (i instanceof qi) {
      var o = i.__data__;
      if (!qn || o.length < wE - 1) return o.push([
        e,
        t
      ]), this.size = ++i.size, this;
      i = this.__data__ = new un(o);
    }
    return i.set(e, t), this.size = i.size, this;
  }
  hn = function(e) {
    var t = this.__data__ = new qi(e);
    this.size = t.size;
  };
  hn.prototype.clear = gE;
  hn.prototype.delete = OE;
  hn.prototype.get = RE;
  hn.prototype.has = AE;
  hn.prototype.set = SE;
  var jh = typeof exports == "object" && exports && !exports.nodeType && exports, nl = jh && typeof module == "object" && module && !module.nodeType && module, NE = nl && nl.exports === jh, rl = NE ? wi.Buffer : void 0, sl = rl ? rl.allocUnsafe : void 0;
  yE = function(e, t) {
    if (t) return e.slice();
    var i = e.length, o = sl ? sl(i) : new e.constructor(i);
    return e.copy(o), o;
  };
  function bE(e, t) {
    for (var i = -1, o = e == null ? 0 : e.length, c = 0, l = []; ++i < o; ) {
      var h = e[i];
      t(h, i, e) && (l[c++] = h);
    }
    return l;
  }
  function LE() {
    return [];
  }
  var vE = Object.prototype, CE = vE.propertyIsEnumerable, al = Object.getOwnPropertySymbols, HE = al ? function(e) {
    return e == null ? [] : (e = Object(e), bE(al(e), function(t) {
      return CE.call(e, t);
    }));
  } : LE;
  function DE(e, t, i) {
    var o = t(e);
    return Rs(e) ? o : uE(o, i(e));
  }
  ME = function(e) {
    return DE(e, GI, HE);
  };
  let wa, Sa, Na, cl, FE, ll, ul, hl, dl, PE, UE, WE, _E, GE;
  wa = Wo(wi, "DataView");
  Sa = Wo(wi, "Promise");
  Na = Wo(wi, "Set");
  cl = "[object Map]";
  FE = "[object Object]";
  ll = "[object Promise]";
  ul = "[object Set]";
  hl = "[object WeakMap]";
  dl = "[object DataView]";
  PE = Uo(wa);
  UE = Uo(qn);
  WE = Uo(Sa);
  _E = Uo(Na);
  GE = Uo(Aa);
  Fi = Io;
  (wa && Fi(new wa(new ArrayBuffer(1))) != dl || qn && Fi(new qn()) != cl || Sa && Fi(Sa.resolve()) != ll || Na && Fi(new Na()) != ul || Aa && Fi(new Aa()) != hl) && (Fi = function(e) {
    var t = Io(e), i = t == FE ? e.constructor : void 0, o = i ? Uo(i) : "";
    if (o) switch (o) {
      case PE:
        return dl;
      case UE:
        return cl;
      case WE:
        return ll;
      case _E:
        return ul;
      case GE:
        return hl;
    }
    return t;
  });
  var kE = Object.prototype, BE = kE.hasOwnProperty;
  function YE(e) {
    var t = e.length, i = new e.constructor(t);
    return t && typeof e[0] == "string" && BE.call(e, "index") && (i.index = e.index, i.input = e.input), i;
  }
  fl = wi.Uint8Array;
  function nc(e) {
    var t = new e.constructor(e.byteLength);
    return new fl(t).set(new fl(e)), t;
  }
  function xE(e, t) {
    var i = nc(e.buffer);
    return new e.constructor(i, e.byteOffset, e.byteLength);
  }
  var jE = /\w*$/;
  function VE(e) {
    var t = new e.constructor(e.source, jE.exec(e));
    return t.lastIndex = e.lastIndex, t;
  }
  var pl = tn ? tn.prototype : void 0, Tl = pl ? pl.valueOf : void 0;
  function zE(e) {
    return Tl ? Object(Tl.call(e)) : {};
  }
  $E = function(e, t) {
    var i = t ? nc(e.buffer) : e.buffer;
    return new e.constructor(i, e.byteOffset, e.length);
  };
  var KE = "[object Boolean]", qE = "[object Date]", XE = "[object Map]", JE = "[object Number]", ZE = "[object RegExp]", QE = "[object Set]", em = "[object String]", tm = "[object Symbol]", im = "[object ArrayBuffer]", om = "[object DataView]", nm = "[object Float32Array]", rm = "[object Float64Array]", sm = "[object Int8Array]", am = "[object Int16Array]", cm = "[object Int32Array]", lm = "[object Uint8Array]", um = "[object Uint8ClampedArray]", hm = "[object Uint16Array]", dm = "[object Uint32Array]";
  function fm(e, t, i) {
    var o = e.constructor;
    switch (t) {
      case im:
        return nc(e);
      case KE:
      case qE:
        return new o(+e);
      case om:
        return xE(e);
      case nm:
      case rm:
      case sm:
      case am:
      case cm:
      case lm:
      case um:
      case hm:
      case dm:
        return $E(e, i);
      case XE:
        return new o();
      case JE:
      case em:
        return new o(e);
      case ZE:
        return VE(e);
      case QE:
        return new o();
      case tm:
        return zE(e);
    }
  }
  pm = function(e) {
    return typeof e.constructor == "function" && !Ph(e) ? GT(Bh(e)) : {};
  };
  var Tm = "[object Map]";
  function Im(e) {
    return Eo(e) && Fi(e) == Tm;
  }
  var Il = on && on.isMap, Em = Il ? oc(Il) : Im, mm = "[object Set]";
  function gm(e) {
    return Eo(e) && Fi(e) == mm;
  }
  var El = on && on.isSet, Om = El ? oc(El) : gm, Rm = 1, Vh = "[object Arguments]", Am = "[object Array]", wm = "[object Boolean]", Sm = "[object Date]", Nm = "[object Error]", zh = "[object Function]", ym = "[object GeneratorFunction]", bm = "[object Map]", Lm = "[object Number]", $h = "[object Object]", vm = "[object RegExp]", Cm = "[object Set]", Hm = "[object String]", Dm = "[object Symbol]", Mm = "[object WeakMap]", Fm = "[object ArrayBuffer]", Pm = "[object DataView]", Um = "[object Float32Array]", Wm = "[object Float64Array]", _m = "[object Int8Array]", Gm = "[object Int16Array]", km = "[object Int32Array]", Bm = "[object Uint8Array]", Ym = "[object Uint8ClampedArray]", xm = "[object Uint16Array]", jm = "[object Uint32Array]", Xe = {};
  Xe[Vh] = Xe[Am] = Xe[Fm] = Xe[Pm] = Xe[wm] = Xe[Sm] = Xe[Um] = Xe[Wm] = Xe[_m] = Xe[Gm] = Xe[km] = Xe[bm] = Xe[Lm] = Xe[$h] = Xe[vm] = Xe[Cm] = Xe[Hm] = Xe[Dm] = Xe[Bm] = Xe[Ym] = Xe[xm] = Xe[jm] = true;
  Xe[Nm] = Xe[zh] = Xe[Mm] = false;
  function yr(e, t, i, o, c, l) {
    var h, d = t & Rm;
    if (h !== void 0) return h;
    if (!As(e)) return e;
    var p = Rs(e);
    if (p) h = YE(e);
    else {
      var O = Fi(e), T = O == zh || O == ym;
      if (_h(e)) return yE(e, d);
      if (O == $h || O == Vh || T && !c) h = T ? {} : pm(e);
      else {
        if (!Xe[O]) return c ? e : {};
        h = fm(e, O, d);
      }
    }
    l || (l = new hn());
    var w = l.get(e);
    if (w) return w;
    l.set(e, h), Om(e) ? e.forEach(function(P) {
      h.add(yr(P, t, i, P, e, l));
    }) : Em(e) && e.forEach(function(P, D) {
      h.set(D, yr(P, t, i, D, e, l));
    });
    var C = ME, L = p ? void 0 : C(e);
    return kT(L || e, function(P, D) {
      L && (D = P, P = e[D]), $T(h, D, yr(P, t, i, D, e, l));
    }), h;
  }
  var Vm = 1, zm = 4;
  Kh = function(e) {
    return yr(e, Vm | zm);
  };
  var $m = "[object String]";
  function ya(e) {
    return typeof e == "string" || !Rs(e) && Eo(e) && Io(e) == $m;
  }
  const Mt = (e) => ya(e) ? e : xh(e) ? String(e) : JSON.stringify(e), Ti = {
    unloaded: (...e) => `[loadModules] Module "${Mt(e[0])}" has not been loaded yet`,
    loading: (...e) => `[loadModules] Module "${Mt(e[0])}" is loading`,
    loaded: (...e) => `[loadModules] Module "${Mt(e[0])}" has been loaded`,
    error: (...e) => `[loadModules] Module "${Mt(e[0])}" failed to load.
Trackback: 
${Mt(e[1])}`,
    errorDetermined: (...e) => `[loadModules] Module "${Mt(e[0])}" failed to load, asserted by another instance, skip`,
    alreadyLoading: (...e) => `[loadModules] Module "${Mt(e[0])}" is already loading by another instance, skip`,
    alreadyLoaded: (...e) => `[loadModules] Module "${Mt(e[0])}" has been loaded by another instance, skip`,
    missingDependencies: (...e) => `[loadModules] Module "${Mt(e[0])}" is missing the following dependencies: ${Mt(e[1])}`,
    loadDependencies: (...e) => `[loadModules] Module "${Mt(e[0])}" is loading its dependencies (${e.slice(1).map((t) => Mt(t)).join(", ")})`,
    dependenciesReady: (...e) => `[loadModules] Module "${Mt(e[0])}" dependencies are ready`,
    dependenciesFailure: (...e) => `[loadModules] Module "${Mt(e[0])}" dependencies failed to load. 

Trackback: 
${Mt(e[1])}`
  }, Km = {
    info: console.info,
    warn: console.warn,
    error: console.error,
    debug: console.debug
  };
  async function qh(e, t, i = 1e4, o = {}, c = 0, l = 0, h = 0) {
    var _a3, _b, _c2, _d2, _e, _f2;
    const { logger: d = Km, progressReporter: p, printLog: O = true } = o, T = e.find((D) => D.name === t);
    if (!T) throw new Error(`cannot exactly find module "${t}" from the library`);
    const w = e.findIndex((D) => D.name === T.name);
    if (e[w].status === "loaded") return O && d.info(Ti.alreadyLoaded(T.name)), {
      completed: h,
      total: l
    };
    const C = T.dependencies || [], L = e.filter((D) => C.includes(D.name)), P = C.filter((D) => !e.find((de) => de.name === D));
    if (P.length > 0) {
      const D = Ti.missingDependencies(T.name, P.join(", "));
      throw O && d.error(D), new Error(D);
    }
    if (e[w].status === "error") {
      const D = Ti.errorDetermined(T.name);
      throw O && d.info(D), new Error(D);
    }
    if (e[w].status === "loading") return O && d.info(Ti.alreadyLoading(T.name)), await qm(e, T.name, i, d), {
      completed: h,
      total: l
    };
    try {
      let D = l, de = h;
      if (c === 0) {
        const ie = /* @__PURE__ */ new Set(), K = (V) => {
          if (ie.has(V)) return;
          ie.add(V);
          const G = e.find((ue) => ue.name === V);
          if (G && G.dependencies) for (const ue of G.dependencies) K(ue);
        };
        K(t), D = ie.size, de = 0;
      }
      if (L.length > 0) {
        d.info(Ti.loadDependencies(T.name, L.map((ie) => ie.name)));
        for (const ie of L) {
          const K = await qh(e, ie.name, i, {
            logger: d,
            progressReporter: p,
            printLog: O
          }, c + 1, D, de);
          de = K.completed, D = K.total, (_a3 = p == null ? void 0 : p.onOverallProgress) == null ? void 0 : _a3.call(p, de, D);
        }
        O && d.info(Ti.dependenciesReady(T.name));
      }
      e[w].status = "loading", (_b = p == null ? void 0 : p.onModuleStart) == null ? void 0 : _b.call(p, T.displayName);
      try {
        return O && d.info(Ti.loading(T.name)), await T.moduleInit(i), e[w].status = "loaded", de++, (_c2 = p == null ? void 0 : p.onModuleComplete) == null ? void 0 : _c2.call(p, T.displayName), (_d2 = p == null ? void 0 : p.onOverallProgress) == null ? void 0 : _d2.call(p, de, D), O && d.info(Ti.loaded(T.name)), {
          completed: de,
          total: D
        };
      } catch (ie) {
        e[w].status = "error";
        const K = Ti.error(T.name, ya(ie) ? ie : xh(ie) ? ie.message : JSON.stringify(ie));
        throw d.error(K), (_e = p == null ? void 0 : p.onModuleError) == null ? void 0 : _e.call(p, T.displayName, ya(ie) ? new Error(ie) : ie), new Error(K);
      }
    } catch (D) {
      e[w].status = "error", console.log(D);
      const de = Ti.error(T.name, D);
      throw d.error(de), (_f2 = p == null ? void 0 : p.onModuleError) == null ? void 0 : _f2.call(p, T.displayName, D), new Error(de);
    }
  }
  async function qm(e, t, i = 1e4, o) {
    const c = Date.now();
    return new Promise((l, h) => {
      const d = setInterval(() => {
        const p = e.find((O) => O.name === t);
        if (p && p.status === "loaded") clearInterval(d), l();
        else if (Date.now() - c > i) {
          clearInterval(d);
          const O = new Error(`Load module ${t} timeout`);
          o == null ? void 0 : o.error(O.message), h(O);
        }
      }, 100);
    });
  }
  let Xm, Jm, ml, Zm, Qm, Xh;
  Xm = "modulepreload";
  Jm = function(e, t) {
    return new URL(e, t).href;
  };
  ml = {};
  $s = function(t, i, o) {
    let c = Promise.resolve();
    if (i && i.length > 0) {
      let O = function(T) {
        return Promise.all(T.map((w) => Promise.resolve(w).then((C) => ({
          status: "fulfilled",
          value: C
        }), (C) => ({
          status: "rejected",
          reason: C
        }))));
      };
      const h = document.getElementsByTagName("link"), d = document.querySelector("meta[property=csp-nonce]"), p = (d == null ? void 0 : d.nonce) || (d == null ? void 0 : d.getAttribute("nonce"));
      c = O(i.map((T) => {
        if (T = Jm(T, o), T in ml) return;
        ml[T] = true;
        const w = T.endsWith(".css"), C = w ? '[rel="stylesheet"]' : "";
        if (o) for (let P = h.length - 1; P >= 0; P--) {
          const D = h[P];
          if (D.href === T && (!w || D.rel === "stylesheet")) return;
        }
        else if (document.querySelector(`link[href="${T}"]${C}`)) return;
        const L = document.createElement("link");
        if (L.rel = w ? "stylesheet" : Xm, w || (L.as = "script"), L.crossOrigin = "", L.href = T, p && L.setAttribute("nonce", p), document.head.appendChild(L), w) return new Promise((P, D) => {
          L.addEventListener("load", P), L.addEventListener("error", () => D(new Error(`Unable to preload CSS for ${T}`)));
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
  Zm = [
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
  Qm = {
    withStackTrace: false
  };
  Xh = (e, t, i = Qm) => {
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
  function So(e, t, i, o) {
    function c(l) {
      return l instanceof i ? l : new i(function(h) {
        h(l);
      });
    }
    return new (i || (i = Promise))(function(l, h) {
      function d(T) {
        try {
          O(o.next(T));
        } catch (w) {
          h(w);
        }
      }
      function p(T) {
        try {
          O(o.throw(T));
        } catch (w) {
          h(w);
        }
      }
      function O(T) {
        T.done ? l(T.value) : c(T.value).then(d, p);
      }
      O((o = o.apply(e, [])).next());
    });
  }
  function gl(e) {
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
  function Ri(e) {
    return this instanceof Ri ? (this.v = e, this) : new Ri(e);
  }
  function Ol(e, t, i) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var o = i.apply(e, t || []), c, l = [];
    return c = Object.create((typeof AsyncIterator == "function" ? AsyncIterator : Object).prototype), d("next"), d("throw"), d("return", h), c[Symbol.asyncIterator] = function() {
      return this;
    }, c;
    function h(L) {
      return function(P) {
        return Promise.resolve(P).then(L, w);
      };
    }
    function d(L, P) {
      o[L] && (c[L] = function(D) {
        return new Promise(function(de, ie) {
          l.push([
            L,
            D,
            de,
            ie
          ]) > 1 || p(L, D);
        });
      }, P && (c[L] = P(c[L])));
    }
    function p(L, P) {
      try {
        O(o[L](P));
      } catch (D) {
        C(l[0][3], D);
      }
    }
    function O(L) {
      L.value instanceof Ri ? Promise.resolve(L.value.v).then(T, w) : C(l[0][2], L);
    }
    function T(L) {
      p("next", L);
    }
    function w(L) {
      p("throw", L);
    }
    function C(L, P) {
      L(P), l.shift(), l.length && p(l[0][0], l[0][1]);
    }
  }
  function eg(e) {
    var t, i;
    return t = {}, o("next"), o("throw", function(c) {
      throw c;
    }), o("return"), t[Symbol.iterator] = function() {
      return this;
    }, t;
    function o(c, l) {
      t[c] = e[c] ? function(h) {
        return (i = !i) ? {
          value: Ri(e[c](h)),
          done: false
        } : l ? l(h) : h;
      } : l;
    }
  }
  function tg(e) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var t = e[Symbol.asyncIterator], i;
    return t ? t.call(e) : (e = typeof gl == "function" ? gl(e) : e[Symbol.iterator](), i = {}, o("next"), o("throw"), o("return"), i[Symbol.asyncIterator] = function() {
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
      Promise.resolve(p).then(function(O) {
        l({
          value: O,
          done: d
        });
      }, h);
    }
  }
  class yt {
    constructor(t) {
      this._promise = t;
    }
    static fromSafePromise(t) {
      const i = t.then((o) => new Ei(o));
      return new yt(i);
    }
    static fromPromise(t, i) {
      const o = t.then((c) => new Ei(c)).catch((c) => new si(i(c)));
      return new yt(o);
    }
    static fromThrowable(t, i) {
      return (...o) => new yt(So(this, void 0, void 0, function* () {
        try {
          return new Ei(yield t(...o));
        } catch (c) {
          return new si(i ? i(c) : c);
        }
      }));
    }
    static combine(t) {
      return ig(t);
    }
    static combineWithAllErrors(t) {
      return og(t);
    }
    map(t) {
      return new yt(this._promise.then((i) => So(this, void 0, void 0, function* () {
        return i.isErr() ? new si(i.error) : new Ei(yield t(i.value));
      })));
    }
    andThrough(t) {
      return new yt(this._promise.then((i) => So(this, void 0, void 0, function* () {
        if (i.isErr()) return new si(i.error);
        const o = yield t(i.value);
        return o.isErr() ? new si(o.error) : new Ei(i.value);
      })));
    }
    andTee(t) {
      return new yt(this._promise.then((i) => So(this, void 0, void 0, function* () {
        if (i.isErr()) return new si(i.error);
        try {
          yield t(i.value);
        } catch {
        }
        return new Ei(i.value);
      })));
    }
    orTee(t) {
      return new yt(this._promise.then((i) => So(this, void 0, void 0, function* () {
        if (i.isOk()) return new Ei(i.value);
        try {
          yield t(i.error);
        } catch {
        }
        return new si(i.error);
      })));
    }
    mapErr(t) {
      return new yt(this._promise.then((i) => So(this, void 0, void 0, function* () {
        return i.isOk() ? new Ei(i.value) : new si(yield t(i.error));
      })));
    }
    andThen(t) {
      return new yt(this._promise.then((i) => {
        if (i.isErr()) return new si(i.error);
        const o = t(i.value);
        return o instanceof yt ? o._promise : o;
      }));
    }
    orElse(t) {
      return new yt(this._promise.then((i) => So(this, void 0, void 0, function* () {
        return i.isErr() ? t(i.error) : new Ei(i.value);
      })));
    }
    match(t, i) {
      return this._promise.then((o) => o.match(t, i));
    }
    unwrapOr(t) {
      return this._promise.then((i) => i.unwrapOr(t));
    }
    safeUnwrap() {
      return Ol(this, arguments, function* () {
        return yield Ri(yield Ri(yield* eg(tg(yield Ri(this._promise.then((i) => i.safeUnwrap()))))));
      });
    }
    then(t, i) {
      return this._promise.then(t, i);
    }
    [Symbol.asyncIterator]() {
      return Ol(this, arguments, function* () {
        const i = yield Ri(this._promise);
        return i.isErr() && (yield yield Ri(br(i.error))), yield Ri(i.value);
      });
    }
  }
  function br(e) {
    return new yt(Promise.resolve(new si(e)));
  }
  const Jh = (e) => {
    let t = _([]);
    for (const i of e) if (i.isErr()) {
      t = v(i.error);
      break;
    } else t.map((o) => o.push(i.value));
    return t;
  }, ig = (e) => yt.fromSafePromise(Promise.all(e)).andThen(Jh), Zh = (e) => {
    let t = _([]);
    for (const i of e) i.isErr() && t.isErr() ? t.error.push(i.error) : i.isErr() && t.isOk() ? t = v([
      i.error
    ]) : i.isOk() && t.isOk() && t.value.push(i.value);
    return t;
  }, og = (e) => yt.fromSafePromise(Promise.all(e)).andThen(Zh);
  var ba;
  (function(e) {
    function t(c, l) {
      return (...h) => {
        try {
          const d = c(...h);
          return _(d);
        } catch (d) {
          return v(l ? l(d) : d);
        }
      };
    }
    e.fromThrowable = t;
    function i(c) {
      return Jh(c);
    }
    e.combine = i;
    function o(c) {
      return Zh(c);
    }
    e.combineWithAllErrors = o;
  })(ba || (ba = {}));
  _ = function(e) {
    return new Ei(e);
  };
  v = function(e) {
    return new si(e);
  };
  class Ei {
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
      return _(t(this.value));
    }
    mapErr(t) {
      return _(this.value);
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
      return _(this.value);
    }
    orTee(t) {
      return _(this.value);
    }
    orElse(t) {
      return _(this.value);
    }
    asyncAndThen(t) {
      return t(this.value);
    }
    asyncAndThrough(t) {
      return t(this.value).map(() => this.value);
    }
    asyncMap(t) {
      return yt.fromSafePromise(t(this.value));
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
      throw Xh("Called `_unsafeUnwrapErr` on an Ok", this, t);
    }
    *[Symbol.iterator]() {
      return this.value;
    }
  }
  class si {
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
      return v(this.error);
    }
    mapErr(t) {
      return v(t(this.error));
    }
    andThrough(t) {
      return v(this.error);
    }
    andTee(t) {
      return v(this.error);
    }
    orTee(t) {
      try {
        t(this.error);
      } catch {
      }
      return v(this.error);
    }
    andThen(t) {
      return v(this.error);
    }
    orElse(t) {
      return t(this.error);
    }
    asyncAndThen(t) {
      return br(this.error);
    }
    asyncAndThrough(t) {
      return br(this.error);
    }
    asyncMap(t) {
      return br(this.error);
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
        throw yield v(t), new Error("Do not use this generator out of `safeTry`");
      })();
    }
    _unsafeUnwrap(t) {
      throw Xh("Called `_unsafeUnwrap` on an Err", this, t);
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
  ir = ((e) => (e.GENERIC = "generic", e.VALIDATION = "validation", e.NETWORK = "network", e.GEOLOCATION = "geolocation", e.STORAGE = "storage", e.CONVERSION = "conversion", e.UPDATE_SERVICE = "update_service", e))(ir || {});
  dn = class extends Error {
    constructor(t, i) {
      super(t), this.cause = i, this.name = this.constructor.name, i && (this.message = `${t} (caused by: ${i.message})`);
    }
  };
  class Ue extends dn {
    constructor(t, i = "GENERIC_ERROR", o) {
      super(t, o);
      __publicField(this, "code");
      __publicField(this, "domain", "generic");
      this.code = i;
    }
  }
  function ng(e) {
    return e instanceof dn;
  }
  Tr = function(e, t = "Unknown error occurred") {
    return ng(e) ? e : e instanceof Error ? new Ue(t, "UNKNOWN_ERROR", e) : new Ue(t, "UNKNOWN_ERROR");
  };
  No = function(e, t) {
    const i = t ? `[${t}] ` : "";
    console.error(`${i}${e.domain}.${e.code}: ${e.message}`, {
      error: e,
      cause: e.cause,
      stack: e.stack
    });
  };
  class ve extends dn {
    constructor(t, i, o) {
      super(t, o);
      __publicField(this, "code");
      __publicField(this, "domain", ir.GEOLOCATION);
      this.code = i;
    }
  }
  class Ci extends ve {
    constructor(t = "Geolocation update service error", i, o) {
      super(t, "UPDATE_SERVICE_ERROR", o), this.serviceName = i;
    }
  }
  var rg = "2.0.8", sg = 500, Rl = "user-agent", nn = "", Al = "?", ut = {
    FUNCTION: "function",
    OBJECT: "object",
    STRING: "string",
    UNDEFINED: "undefined"
  }, Yt = "browser", ki = "cpu", Ai = "device", li = "engine", qt = "os", rn = "result", B = "name", U = "type", x = "vendor", j = "version", Pt = "architecture", Xn = "major", k = "model", Lr = "console", be = "mobile", ze = "tablet", dt = "smarttv", mi = "wearable", Ir = "xr", yn = "embedded", ko = "inapp", rc = "brands", Co = "formFactors", sc = "fullVersionList", sn = "platform", ac = "platformVersion", Ns = "bitness", mo = "sec-ch-ua", ag = mo + "-full-version-list", cg = mo + "-arch", lg = mo + "-" + Ns, ug = mo + "-form-factors", hg = mo + "-" + be, dg = mo + "-" + k, Qh = mo + "-" + sn, fg = Qh + "-version", ed = [
    rc,
    sc,
    be,
    k,
    sn,
    ac,
    Pt,
    Co,
    Ns
  ], Er = "Amazon", Bo = "Apple", wl = "ASUS", Sl = "BlackBerry", yo = "Google", Nl = "Huawei", Ks = "Lenovo", yl = "Honor", mr = "LG", qs = "Microsoft", Xs = "Motorola", bl = "Nvidia", Ll = "OnePlus", Js = "OPPO", gn = "Samsung", vl = "Sharp", On = "Sony", Zs = "Xiaomi", Qs = "Zebra", Cl = "Chrome", Hl = "Chromium", Ji = "Chromecast", vr = "Edge", Rn = "Firefox", Yo = "Opera", ea = "Facebook", Dl = "Sogou", xo = "Mobile ", An = " Browser", La = "Windows", pg = typeof window !== ut.UNDEFINED, kt = pg && window.navigator ? window.navigator : void 0, Ho = kt && kt.userAgentData ? kt.userAgentData : void 0, Tg = function(e, t) {
    var i = {}, o = t;
    if (!$r(t)) {
      o = {};
      for (var c in t) for (var l in t[c]) o[l] = t[c][l].concat(o[l] ? o[l] : []);
    }
    for (var h in e) i[h] = o[h] && o[h].length % 2 === 0 ? o[h].concat(e[h]) : e[h];
    return i;
  }, ys = function(e) {
    for (var t = {}, i = 0; i < e.length; i++) t[e[i].toUpperCase()] = e[i];
    return t;
  }, va = function(e, t) {
    if (typeof e === ut.OBJECT && e.length > 0) {
      for (var i in e) if (co(t) == co(e[i])) return true;
      return false;
    }
    return or(e) ? co(t) == co(e) : false;
  }, $r = function(e, t) {
    for (var i in e) return /^(browser|cpu|device|engine|os)$/.test(i) || (t ? $r(e[i]) : false);
  }, or = function(e) {
    return typeof e === ut.STRING;
  }, ta = function(e) {
    if (e) {
      for (var t = [], i = an(/\\?\"/g, e).split(","), o = 0; o < i.length; o++) if (i[o].indexOf(";") > -1) {
        var c = Kr(i[o]).split(";v=");
        t[o] = {
          brand: c[0],
          version: c[1]
        };
      } else t[o] = Kr(i[o]);
      return t;
    }
  }, co = function(e) {
    return or(e) ? e.toLowerCase() : e;
  }, Ca = function(e) {
    return or(e) ? an(/[^\d\.]/g, e).split(".")[0] : void 0;
  }, Wi = function(e) {
    for (var t in e) if (e.hasOwnProperty(t)) {
      var i = e[t];
      typeof i == ut.OBJECT && i.length == 2 ? this[i[0]] = i[1] : this[i] = void 0;
    }
    return this;
  }, an = function(e, t) {
    return or(t) ? t.replace(e, nn) : t;
  }, wn = function(e) {
    return an(/\\?\"/g, e);
  }, Kr = function(e, t) {
    return e = an(/^\s\s*/, String(e)), typeof t === ut.UNDEFINED ? e : e.substring(0, t);
  }, Ha = function(e, t) {
    if (!(!e || !t)) for (var i = 0, o, c, l, h, d, p; i < t.length && !d; ) {
      var O = t[i], T = t[i + 1];
      for (o = c = 0; o < O.length && !d && O[o]; ) if (d = O[o++].exec(e), d) for (l = 0; l < T.length; l++) p = d[++c], h = T[l], typeof h === ut.OBJECT && h.length > 0 ? h.length === 2 ? typeof h[1] == ut.FUNCTION ? this[h[0]] = h[1].call(this, p) : this[h[0]] = h[1] : h.length >= 3 && (typeof h[1] === ut.FUNCTION && !(h[1].exec && h[1].test) ? h.length > 3 ? this[h[0]] = p ? h[1].apply(this, h.slice(2)) : void 0 : this[h[0]] = p ? h[1].call(this, p, h[2]) : void 0 : h.length == 3 ? this[h[0]] = p ? p.replace(h[1], h[2]) : void 0 : h.length == 4 ? this[h[0]] = p ? h[3].call(this, p.replace(h[1], h[2])) : void 0 : h.length > 4 && (this[h[0]] = p ? h[3].apply(this, [
        p.replace(h[1], h[2])
      ].concat(h.slice(4))) : void 0)) : this[h] = p || void 0;
      i += 2;
    }
  }, ci = function(e, t) {
    for (var i in t) if (typeof t[i] === ut.OBJECT && t[i].length > 0) {
      for (var o = 0; o < t[i].length; o++) if (va(t[i][o], e)) return i === Al ? void 0 : i;
    } else if (va(t[i], e)) return i === Al ? void 0 : i;
    return t.hasOwnProperty("*") ? t["*"] : e;
  }, Ml = {
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
  }, Fl = {
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
  }, Ig = {
    Chrome: "Google Chrome",
    Edge: "Microsoft Edge",
    "Edge WebView2": "Microsoft Edge WebView2",
    "Chrome WebView": "Android WebView",
    "Chrome Headless": "HeadlessChrome",
    "Huawei Browser": "HuaweiBrowser",
    "MIUI Browser": "Miui Browser",
    "Opera Mobi": "OperaMobile",
    Yandex: "YaBrowser"
  }, Pl = {
    browser: [
      [
        /\b(?:crmo|crios)\/([\w\.]+)/i
      ],
      [
        j,
        [
          B,
          xo + "Chrome"
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
          Yo + " Mini"
        ]
      ],
      [
        /\bop(?:rg)?x\/([\w\.]+)/i
      ],
      [
        j,
        [
          B,
          Yo + " GX"
        ]
      ],
      [
        /\bopr\/([\w\.]+)/i
      ],
      [
        j,
        [
          B,
          Yo
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
        /(heytap|ovi|115|surf|qwant)browser\/([\d\.]+)/i,
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
          "Smart " + Ks + An
        ]
      ],
      [
        /(avast|avg)\/([\w\.]+)/i
      ],
      [
        [
          B,
          /(.+)/,
          "$1 Secure" + An
        ],
        j
      ],
      [
        /\bfocus\/([\w\.]+)/i
      ],
      [
        j,
        [
          B,
          Rn + " Focus"
        ]
      ],
      [
        / mms\/([\w\.]+)$/i
      ],
      [
        j,
        [
          B,
          Yo + " Neon"
        ]
      ],
      [
        / opt\/([\w\.]+)$/i
      ],
      [
        j,
        [
          B,
          Yo + " Touch"
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
          Yo + " Coast"
        ]
      ],
      [
        /miuibrowser\/([\w\.]+)/i
      ],
      [
        j,
        [
          B,
          "MIUI" + An
        ]
      ],
      [
        /fxios\/([\w\.-]+)/i
      ],
      [
        j,
        [
          B,
          xo + Rn
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
          "$1" + An
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
          gn + " Internet"
        ]
      ],
      [
        /metasr[\/ ]?([\d\.]+)/i
      ],
      [
        j,
        [
          B,
          Dl + " Explorer"
        ]
      ],
      [
        /(sogou)mo\w+\/([\d\.]+)/i
      ],
      [
        [
          B,
          Dl + " Mobile"
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
        /(lbbrowser|rekonq|steam(?= (clie|tenf|gameo)))/i
      ],
      [
        B
      ],
      [
        /ome\/([\w\.]+) \w* ?(iron) saf/i,
        /ome\/([\w\.]+).+qihu (360)[es]e/i
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
          ea
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
        /headlesschrome(?:\/([\w\.]+)| )/i
      ],
      [
        j,
        [
          B,
          Cl + " Headless"
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
          Cl + " WebView"
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
          "Android" + An
        ]
      ],
      [
        /chrome\/([\w\.]+) mobile/i
      ],
      [
        j,
        [
          B,
          xo + "Chrome"
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
          xo + "Safari"
        ]
      ],
      [
        /iphone .*mobile(?:\/\w+ | ?)safari/i
      ],
      [
        [
          B,
          xo + "Safari"
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
          xo + Rn
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
          nn
        ]
      ]
    ],
    cpu: [
      [
        /\b((amd|x|x86[-_]?|wow|win)64)\b/i
      ],
      [
        [
          Pt,
          "amd64"
        ]
      ],
      [
        /(ia32(?=;))/i,
        /\b((i[346]|x)86)(pc)?\b/i
      ],
      [
        [
          Pt,
          "ia32"
        ]
      ],
      [
        /\b(aarch64|arm(v?[89]e?l?|_?64))\b/i
      ],
      [
        [
          Pt,
          "arm64"
        ]
      ],
      [
        /\b(arm(v[67])?ht?n?[fl]p?)\b/i
      ],
      [
        [
          Pt,
          "armhf"
        ]
      ],
      [
        /( (ce|mobile); ppc;|\/[\w\.]+arm\b)/i
      ],
      [
        [
          Pt,
          "arm"
        ]
      ],
      [
        / sun4\w[;\)]/i
      ],
      [
        [
          Pt,
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
          Pt,
          /ower/,
          nn,
          co
        ]
      ],
      [
        /mc680.0/i
      ],
      [
        [
          Pt,
          "68k"
        ]
      ],
      [
        /winnt.+\[axp/i
      ],
      [
        [
          Pt,
          "alpha"
        ]
      ]
    ],
    device: [
      [
        /\b(sch-i[89]0\d|shw-m380s|sm-[ptx]\w{2,4}|gt-[pn]\d{2,4}|sgh-t8[56]9|nexus 10)/i
      ],
      [
        k,
        [
          x,
          gn
        ],
        [
          U,
          ze
        ]
      ],
      [
        /\b((?:s[cgp]h|gt|sm)-(?![lr])\w+|sc[g-]?[\d]+a?|galaxy nexus)/i,
        /samsung[- ]((?!sm-[lr]|browser)[-\w]+)/i,
        /sec-(sgh\w+)/i
      ],
      [
        k,
        [
          x,
          gn
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
        k,
        [
          x,
          Bo
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
        k,
        [
          x,
          Bo
        ],
        [
          U,
          ze
        ]
      ],
      [
        /(macintosh);/i
      ],
      [
        k,
        [
          x,
          Bo
        ]
      ],
      [
        /\b(sh-?[altvz]?\d\d[a-ekm]?)/i
      ],
      [
        k,
        [
          x,
          vl
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
        k,
        [
          x,
          yl
        ],
        [
          U,
          ze
        ]
      ],
      [
        /honor([-\w ]+)[;\)]/i
      ],
      [
        k,
        [
          x,
          yl
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
        k,
        [
          x,
          Nl
        ],
        [
          U,
          ze
        ]
      ],
      [
        /(?:huawei) ?([-\w ]+)[;\)]/i,
        /\b(nexus 6p|\w{2,4}e?-[atu]?[ln][\dx][\dc][adnt]?)\b(?!.+d\/s)/i
      ],
      [
        k,
        [
          x,
          Nl
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
          k,
          /_/g,
          " "
        ],
        [
          x,
          Zs
        ],
        [
          U,
          ze
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
          k,
          /_/g,
          " "
        ],
        [
          x,
          Zs
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
        k,
        [
          x,
          Ll
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
        k,
        [
          x,
          Js
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
        k,
        [
          x,
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
            "*": Js
          }
        ],
        [
          U,
          ze
        ]
      ],
      [
        /(vivo (5r?|6|8l?|go|one|s|x[il]?[2-4]?)[\w\+ ]*)(?: bui|\))/i
      ],
      [
        k,
        [
          x,
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
        k,
        [
          x,
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
        k,
        [
          x,
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
        k,
        [
          x,
          Ks
        ],
        [
          U,
          ze
        ]
      ],
      [
        /lenovo[-_ ]?([-\w ]+?)(?: bui|\)|\/)/i
      ],
      [
        k,
        [
          x,
          Ks
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
        k,
        [
          x,
          Xs
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
        k,
        [
          x,
          Xs
        ],
        [
          U,
          ze
        ]
      ],
      [
        /\b(?:lg)?([vl]k\-?\d{3}) bui| 3\.[-\w; ]{10}lg?-([06cv9]{3,4})/i
      ],
      [
        k,
        [
          x,
          mr
        ],
        [
          U,
          ze
        ]
      ],
      [
        /(lm(?:-?f100[nv]?|-[\w\.]+)(?= bui|\))|nexus [45])/i,
        /\blg[-e;\/ ]+(?!.*(?:browser|netcast|android tv|watch|webos))(\w+)/i,
        /\blg-?([\d\w]+) bui/i
      ],
      [
        k,
        [
          x,
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
        x,
        k,
        [
          U,
          ze
        ]
      ],
      [
        /(?:maemo|nokia).*(n900|lumia \d+|rm-\d+)/i,
        /nokia[-_ ]?(([-\w\. ]*?))( bui|\)|;|\/)/i
      ],
      [
        [
          k,
          /_/g,
          " "
        ],
        [
          U,
          be
        ],
        [
          x,
          "Nokia"
        ]
      ],
      [
        /(pixel (c|tablet))\b/i
      ],
      [
        k,
        [
          x,
          yo
        ],
        [
          U,
          ze
        ]
      ],
      [
        /droid.+;(?: google)? (g(01[13]a|020[aem]|025[jn]|1b60|1f8f|2ybb|4s1m|576d|5nz6|8hhn|8vou|a02099|c15s|d1yq|e2ae|ec77|gh2x|kv4x|p4bc|pj41|r83y|tt9q|ur25|wvk6)|pixel[\d ]*a?( pro)?( xl)?( fold)?( \(5g\))?)( bui|\))/i
      ],
      [
        k,
        [
          x,
          yo
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
        x,
        k
      ],
      [
        /droid.+; (a?\d[0-2]{2}so|[c-g]\d{4}|so[-gl]\w+|xq-\w\w\d\d)(?= bui|\).+chrome\/(?![1-6]{0,1}\d\.))/i
      ],
      [
        k,
        [
          x,
          On
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
          k,
          "Xperia Tablet"
        ],
        [
          x,
          On
        ],
        [
          U,
          ze
        ]
      ],
      [
        /(alexa)webm/i,
        /(kf[a-z]{2}wi|aeo(?!bc)\w\w)( bui|\))/i,
        /(kf[a-z]+)( bui|\)).+silk\//i
      ],
      [
        k,
        [
          x,
          Er
        ],
        [
          U,
          ze
        ]
      ],
      [
        /((?:sd|kf)[0349hijorstuw]+)( bui|\)).+silk\//i
      ],
      [
        [
          k,
          /(.+)/g,
          "Fire Phone $1"
        ],
        [
          x,
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
        k,
        x,
        [
          U,
          ze
        ]
      ],
      [
        /\b((?:bb[a-f]|st[hv])100-\d)/i,
        /(?:blackberry|\(bb10;) (\w+)/i
      ],
      [
        k,
        [
          x,
          Sl
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
        k,
        [
          x,
          wl
        ],
        [
          U,
          ze
        ]
      ],
      [
        / (z[bes]6[027][012][km][ls]|zenfone \d\w?)\b/i
      ],
      [
        k,
        [
          x,
          wl
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
        k,
        [
          x,
          "HTC"
        ],
        [
          U,
          ze
        ]
      ],
      [
        /(htc)[-;_ ]{1,2}([\w ]+(?=\)| bui)|\w+)/i,
        /(zte)[- ]([\w ]+?)(?: bui|\/|\))/i,
        /(alcatel|geeksphone|nexian|panasonic(?!(?:;|\.))|sony(?!-bra))[-_ ]?([-\w]*)/i
      ],
      [
        x,
        [
          k,
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
        k,
        [
          x,
          "TCL"
        ],
        [
          U,
          ze
        ]
      ],
      [
        /droid [\w\.]+; (418(?:7d|8v)|5087z|5102l|61(?:02[dh]|25[adfh]|27[ai]|56[dh]|59k|65[ah])|a509dl|t(?:43(?:0w|1[adepqu])|50(?:6d|7[adju])|6(?:09dl|10k|12b|71[efho]|76[hjk])|7(?:66[ahju]|67[hw]|7[045][bh]|71[hk]|73o|76[ho]|79w|81[hks]?|82h|90[bhsy]|99b)|810[hs]))(_\w(\w|\w\w))?(\)| bui)/i
      ],
      [
        k,
        [
          x,
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
          x,
          co
        ],
        k,
        [
          U,
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
        k,
        [
          x,
          "Acer"
        ],
        [
          U,
          ze
        ]
      ],
      [
        /droid.+; (m[1-5] note) bui/i,
        /\bmz-([-\w]{2,})/i
      ],
      [
        k,
        [
          x,
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
        k,
        [
          x,
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
        k,
        [
          x,
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
        k,
        [
          x,
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
        k,
        [
          x,
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
        k,
        [
          x,
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
        k,
        [
          x,
          "Archos"
        ],
        [
          U,
          ze
        ]
      ],
      [
        /archos ([\w ]+)( b|\))/i,
        /; (ac[3-6]\d\w{2,8})( b|\))/i
      ],
      [
        k,
        [
          x,
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
        k,
        [
          x,
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
        x,
        k,
        [
          U,
          ze
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
        x,
        k,
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
        x,
        k,
        [
          U,
          ze
        ]
      ],
      [
        /(surface duo)/i
      ],
      [
        k,
        [
          x,
          qs
        ],
        [
          U,
          ze
        ]
      ],
      [
        /droid [\d\.]+; (fp\du?)(?: b|\))/i
      ],
      [
        k,
        [
          x,
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
        k,
        [
          x,
          bl
        ],
        [
          U,
          ze
        ]
      ],
      [
        /(sprint) (\w+)/i
      ],
      [
        x,
        k,
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
          k,
          /\./g,
          " "
        ],
        [
          x,
          qs
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
        k,
        [
          x,
          Qs
        ],
        [
          U,
          ze
        ]
      ],
      [
        /droid.+; (ec30|ps20|tc[2-8]\d[kx])\)/i
      ],
      [
        k,
        [
          x,
          Qs
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
        x,
        [
          U,
          dt
        ]
      ],
      [
        /hbbtv.+maple;(\d+)/i
      ],
      [
        [
          k,
          /^/,
          "SmartTV"
        ],
        [
          x,
          gn
        ],
        [
          U,
          dt
        ]
      ],
      [
        /(vizio)(?: |.+model\/)(\w+-\w+)/i,
        /tcast.+(lg)e?. ([-\w]+)/i
      ],
      [
        x,
        k,
        [
          U,
          dt
        ]
      ],
      [
        /(nux; netcast.+smarttv|lg (netcast\.tv-201\d|android tv))/i
      ],
      [
        [
          x,
          mr
        ],
        [
          U,
          dt
        ]
      ],
      [
        /(apple) ?tv/i
      ],
      [
        x,
        [
          k,
          Bo + " TV"
        ],
        [
          U,
          dt
        ]
      ],
      [
        /crkey.*devicetype\/chromecast/i
      ],
      [
        [
          k,
          Ji + " Third Generation"
        ],
        [
          x,
          yo
        ],
        [
          U,
          dt
        ]
      ],
      [
        /crkey.*devicetype\/([^/]*)/i
      ],
      [
        [
          k,
          /^/,
          "Chromecast "
        ],
        [
          x,
          yo
        ],
        [
          U,
          dt
        ]
      ],
      [
        /fuchsia.*crkey/i
      ],
      [
        [
          k,
          Ji + " Nest Hub"
        ],
        [
          x,
          yo
        ],
        [
          U,
          dt
        ]
      ],
      [
        /crkey/i
      ],
      [
        [
          k,
          Ji
        ],
        [
          x,
          yo
        ],
        [
          U,
          dt
        ]
      ],
      [
        /(portaltv)/i
      ],
      [
        k,
        [
          x,
          ea
        ],
        [
          U,
          dt
        ]
      ],
      [
        /droid.+aft(\w+)( bui|\))/i
      ],
      [
        k,
        [
          x,
          Er
        ],
        [
          U,
          dt
        ]
      ],
      [
        /(shield \w+ tv)/i
      ],
      [
        k,
        [
          x,
          bl
        ],
        [
          U,
          dt
        ]
      ],
      [
        /\(dtv[\);].+(aquos)/i,
        /(aquos-tv[\w ]+)\)/i
      ],
      [
        k,
        [
          x,
          vl
        ],
        [
          U,
          dt
        ]
      ],
      [
        /(bravia[\w ]+)( bui|\))/i
      ],
      [
        k,
        [
          x,
          On
        ],
        [
          U,
          dt
        ]
      ],
      [
        /(mi(tv|box)-?\w+) bui/i
      ],
      [
        k,
        [
          x,
          Zs
        ],
        [
          U,
          dt
        ]
      ],
      [
        /Hbbtv.*(technisat) (.*);/i
      ],
      [
        x,
        k,
        [
          U,
          dt
        ]
      ],
      [
        /\b(roku)[\dx]*[\)\/]((?:dvp-)?[\d\.]*)/i,
        /hbbtv\/\d+\.\d+\.\d+ +\([\w\+ ]*; *([\w\d][^;]*);([^;]*)/i
      ],
      [
        [
          x,
          /.+\/(\w+)/,
          "$1",
          ci,
          {
            LG: "lge"
          }
        ],
        [
          k,
          Kr
        ],
        [
          U,
          dt
        ]
      ],
      [
        /(playstation \w+)/i
      ],
      [
        k,
        [
          x,
          On
        ],
        [
          U,
          Lr
        ]
      ],
      [
        /\b(xbox(?: one)?(?!; xbox))[\); ]/i
      ],
      [
        k,
        [
          x,
          qs
        ],
        [
          U,
          Lr
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
          x,
          ci,
          {
            Nvidia: "Shield",
            Anbernic: "RGCUBE",
            Logitech: "GR0006"
          }
        ],
        k,
        [
          U,
          Lr
        ]
      ],
      [
        /\b(sm-[lr]\d\d[0156][fnuw]?s?|gear live)\b/i
      ],
      [
        k,
        [
          x,
          gn
        ],
        [
          U,
          mi
        ]
      ],
      [
        /((pebble))app/i,
        /(asus|google|lg|oppo|xiaomi) ((pixel |zen)?watch[\w ]*)( bui|\))/i
      ],
      [
        x,
        k,
        [
          U,
          mi
        ]
      ],
      [
        /(ow(?:19|20)?we?[1-3]{1,3})/i
      ],
      [
        k,
        [
          x,
          Js
        ],
        [
          U,
          mi
        ]
      ],
      [
        /(watch)(?: ?os[,\/]|\d,\d\/)[\d\.]+/i
      ],
      [
        k,
        [
          x,
          Bo
        ],
        [
          U,
          mi
        ]
      ],
      [
        /(opwwe\d{3})/i
      ],
      [
        k,
        [
          x,
          Ll
        ],
        [
          U,
          mi
        ]
      ],
      [
        /(moto 360)/i
      ],
      [
        k,
        [
          x,
          Xs
        ],
        [
          U,
          mi
        ]
      ],
      [
        /(smartwatch 3)/i
      ],
      [
        k,
        [
          x,
          On
        ],
        [
          U,
          mi
        ]
      ],
      [
        /(g watch r)/i
      ],
      [
        k,
        [
          x,
          mr
        ],
        [
          U,
          mi
        ]
      ],
      [
        /droid.+; (wt63?0{2,3})\)/i
      ],
      [
        k,
        [
          x,
          Qs
        ],
        [
          U,
          mi
        ]
      ],
      [
        /droid.+; (glass) \d/i
      ],
      [
        k,
        [
          x,
          yo
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
        x,
        k,
        [
          U,
          Ir
        ]
      ],
      [
        /(quest( \d| pro)?s?).+vr/i
      ],
      [
        k,
        [
          x,
          ea
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
        x,
        [
          U,
          yn
        ]
      ],
      [
        /(aeobc)\b/i
      ],
      [
        k,
        [
          x,
          Er
        ],
        [
          U,
          yn
        ]
      ],
      [
        /(homepod).+mac os/i
      ],
      [
        k,
        [
          x,
          Bo
        ],
        [
          U,
          yn
        ]
      ],
      [
        /windows iot/i
      ],
      [
        [
          U,
          yn
        ]
      ],
      [
        /droid.+; ([\w- ]+) (4k|android|smart|google)[- ]?tv/i
      ],
      [
        k,
        [
          U,
          dt
        ]
      ],
      [
        /\b((4k|android|smart|opera)[- ]?tv|tv; rv:|large screen[\w ]+safari)\b/i
      ],
      [
        [
          U,
          dt
        ]
      ],
      [
        /droid .+?; ([^;]+?)(?: bui|; wv\)|\) applew|; hmsc).+?(mobile|vr|\d) safari/i
      ],
      [
        k,
        [
          U,
          ci,
          {
            mobile: "Mobile",
            xr: "VR",
            "*": ze
          }
        ]
      ],
      [
        /\b((tablet|tab)[;\/]|focus\/\d(?!.+mobile))/i
      ],
      [
        [
          U,
          ze
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
        k,
        [
          x,
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
          ci,
          Ml
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
          ci,
          Ml
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
          Ji + " Android"
        ]
      ],
      [
        /fuchsia.*crkey\/([\d\.]+)/i
      ],
      [
        j,
        [
          B,
          Ji + " Fuchsia"
        ]
      ],
      [
        /crkey\/([\d\.]+).*devicetype\/smartspeaker/i
      ],
      [
        j,
        [
          B,
          Ji + " SmartSpeaker"
        ]
      ],
      [
        /linux.*crkey\/([\d\.]+)/i
      ],
      [
        j,
        [
          B,
          Ji + " Linux"
        ]
      ],
      [
        /crkey\/([\d\.]+)/i
      ],
      [
        j,
        [
          B,
          Ji
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
          Sl
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
          Rn + " OS"
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
          B,
          "webOS"
        ]
      ],
      [
        /watch(?: ?os[,\/]|\d,\d\/)([\d\.]+)/i
      ],
      [
        j,
        [
          B,
          "watchOS"
        ]
      ],
      [
        /(cros) [\w]+(?:\)| ([\w\.]+)\b)/i
      ],
      [
        [
          B,
          "Chrome OS"
        ],
        j
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
  }, gr = (function() {
    var e = {
      init: {},
      isIgnore: {},
      isIgnoreRgx: {},
      toString: {}
    };
    return Wi.call(e.init, [
      [
        Yt,
        [
          B,
          j,
          Xn,
          U
        ]
      ],
      [
        ki,
        [
          Pt
        ]
      ],
      [
        Ai,
        [
          U,
          k,
          x
        ]
      ],
      [
        li,
        [
          B,
          j
        ]
      ],
      [
        qt,
        [
          B,
          j
        ]
      ]
    ]), Wi.call(e.isIgnore, [
      [
        Yt,
        [
          j,
          Xn
        ]
      ],
      [
        li,
        [
          j
        ]
      ],
      [
        qt,
        [
          j
        ]
      ]
    ]), Wi.call(e.isIgnoreRgx, [
      [
        Yt,
        / ?browser$/i
      ],
      [
        qt,
        / ?os$/i
      ]
    ]), Wi.call(e.toString, [
      [
        Yt,
        [
          B,
          j
        ]
      ],
      [
        ki,
        [
          Pt
        ]
      ],
      [
        Ai,
        [
          x,
          k
        ]
      ],
      [
        li,
        [
          B,
          j
        ]
      ],
      [
        qt,
        [
          B,
          j
        ]
      ]
    ]), e;
  })(), Eg = function(e, t) {
    var i = gr.init[t], o = gr.isIgnore[t] || 0, c = gr.isIgnoreRgx[t] || 0, l = gr.toString[t] || 0;
    function h() {
      Wi.call(this, i);
    }
    return h.prototype.getItem = function() {
      return e;
    }, h.prototype.withClientHints = function() {
      return Ho ? Ho.getHighEntropyValues(ed).then(function(d) {
        return e.setCH(new td(d, false)).parseCH().get();
      }) : e.parseCH().get();
    }, h.prototype.withFeatureCheck = function() {
      return e.detectFeature().get();
    }, t != rn && (h.prototype.is = function(d) {
      var p = false;
      for (var O in this) if (this.hasOwnProperty(O) && !va(o, O) && co(c ? an(c, this[O]) : this[O]) == co(c ? an(c, d) : d)) {
        if (p = true, d != ut.UNDEFINED) break;
      } else if (d == ut.UNDEFINED && p) {
        p = !p;
        break;
      }
      return p;
    }, h.prototype.toString = function() {
      var d = nn;
      for (var p in l) typeof this[l[p]] !== ut.UNDEFINED && (d += (d ? " " : nn) + this[l[p]]);
      return d || ut.UNDEFINED;
    }), h.prototype.then = function(d) {
      var p = this, O = function() {
        for (var w in p) p.hasOwnProperty(w) && (this[w] = p[w]);
      };
      O.prototype = {
        is: h.prototype.is,
        toString: h.prototype.toString,
        withClientHints: h.prototype.withClientHints,
        withFeatureCheck: h.prototype.withFeatureCheck
      };
      var T = new O();
      return d(T), T;
    }, new h();
  };
  function td(e, t) {
    if (e = e || {}, Wi.call(this, ed), t) Wi.call(this, [
      [
        rc,
        ta(e[mo])
      ],
      [
        sc,
        ta(e[ag])
      ],
      [
        be,
        /\?1/.test(e[hg])
      ],
      [
        k,
        wn(e[dg])
      ],
      [
        sn,
        wn(e[Qh])
      ],
      [
        ac,
        wn(e[fg])
      ],
      [
        Pt,
        wn(e[cg])
      ],
      [
        Co,
        ta(e[ug])
      ],
      [
        Ns,
        wn(e[lg])
      ]
    ]);
    else for (var i in e) this.hasOwnProperty(i) && typeof e[i] !== ut.UNDEFINED && (this[i] = e[i]);
  }
  function po(e, t, i, o) {
    return Wi.call(this, [
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
        Eg(this, e)
      ]
    ]), this;
  }
  po.prototype.get = function(e) {
    return e ? this.data.hasOwnProperty(e) ? this.data[e] : void 0 : this.data;
  };
  po.prototype.set = function(e, t) {
    return this.data[e] = t, this;
  };
  po.prototype.setCH = function(e) {
    return this.uaCH = e, this;
  };
  po.prototype.detectFeature = function() {
    if (kt && kt.userAgent == this.ua) switch (this.itemType) {
      case Yt:
        kt.brave && typeof kt.brave.isBrave == ut.FUNCTION && this.set(B, "Brave");
        break;
      case Ai:
        !this.get(U) && Ho && Ho[be] && this.set(U, be), this.get(k) == "Macintosh" && kt && typeof kt.standalone !== ut.UNDEFINED && kt.maxTouchPoints && kt.maxTouchPoints > 2 && this.set(k, "iPad").set(U, ze);
        break;
      case qt:
        !this.get(B) && Ho && Ho[sn] && this.set(B, Ho[sn]);
        break;
      case rn:
        var e = this.data, t = function(i) {
          return e[i].getItem().detectFeature().get();
        };
        this.set(Yt, t(Yt)).set(ki, t(ki)).set(Ai, t(Ai)).set(li, t(li)).set(qt, t(qt));
    }
    return this;
  };
  po.prototype.parseUA = function() {
    switch (this.itemType != rn && Ha.call(this.data, this.ua, this.rgxMap), this.itemType) {
      case Yt:
        this.set(Xn, Ca(this.get(j)));
        break;
      case qt:
        if (this.get(B) == "iOS" && this.get(j) == "18.6") {
          var e = /\) Version\/([\d\.]+)/.exec(this.ua);
          e && parseInt(e[1].substring(0, 2), 10) >= 26 && this.set(j, e[1]);
        }
        break;
    }
    return this;
  };
  po.prototype.parseCH = function() {
    var e = this.uaCH, t = this.rgxMap;
    switch (this.itemType) {
      case Yt:
      case li:
        var i = e[sc] || e[rc], o;
        if (i) for (var c = 0; c < i.length; c++) {
          var l = i[c].brand || i[c], h = i[c].version;
          this.itemType == Yt && !/not.a.brand/i.test(l) && (!o || /Chrom/.test(o) && l != Hl || o == vr && /WebView2/.test(l)) && (l = ci(l, Ig), o = this.get(B), o && !/Chrom/.test(o) && /Chrom/.test(l) || this.set(B, l).set(j, h).set(Xn, Ca(h)), o = l), this.itemType == li && l == Hl && this.set(j, h);
        }
        break;
      case ki:
        var d = e[Pt];
        d && (d && e[Ns] == "64" && (d += "64"), Ha.call(this.data, d + ";", t));
        break;
      case Ai:
        if (e[be] && this.set(U, be), e[k] && (this.set(k, e[k]), !this.get(U) || !this.get(x))) {
          var p = {};
          Ha.call(p, "droid 9; " + e[k] + ")", t), !this.get(U) && p.type && this.set(U, p.type), !this.get(x) && p.vendor && this.set(x, p.vendor);
        }
        if (e[Co]) {
          var O;
          if (typeof e[Co] != "string") for (var T = 0; !O && T < e[Co].length; ) O = ci(e[Co][T++], Fl);
          else O = ci(e[Co], Fl);
          this.set(U, O);
        }
        break;
      case qt:
        var w = e[sn];
        if (w) {
          var C = e[ac];
          w == La && (C = parseInt(Ca(C), 10) >= 13 ? "11" : "10"), this.set(B, w).set(j, C);
        }
        this.get(B) == La && e[k] == "Xbox" && this.set(B, "Xbox").set(j, void 0);
        break;
      case rn:
        var L = this.data, P = function(D) {
          return L[D].getItem().setCH(e).parseCH().get();
        };
        this.set(Yt, P(Yt)).set(ki, P(ki)).set(Ai, P(Ai)).set(li, P(li)).set(qt, P(qt));
    }
    return this;
  };
  Vi = function(e, t, i) {
    if (typeof e === ut.OBJECT ? ($r(e, true) ? (typeof t === ut.OBJECT && (i = t), t = e) : (i = e, t = void 0), e = void 0) : typeof e === ut.STRING && !$r(t, true) && (i = t, t = void 0), i) if (typeof i.append === ut.FUNCTION) {
      var o = {};
      i.forEach(function(T, w) {
        o[String(w).toLowerCase()] = T;
      }), i = o;
    } else {
      var c = {};
      for (var l in i) i.hasOwnProperty(l) && (c[String(l).toLowerCase()] = i[l]);
      i = c;
    }
    if (!(this instanceof Vi)) return new Vi(e, t, i).getResult();
    var h = typeof e === ut.STRING ? e : i && i[Rl] ? i[Rl] : kt && kt.userAgent ? kt.userAgent : nn, d = new td(i, true), p = t ? Tg(Pl, t) : Pl, O = function(T) {
      return T == rn ? function() {
        return new po(T, h, p, d).set("ua", h).set(Yt, this.getBrowser()).set(ki, this.getCPU()).set(Ai, this.getDevice()).set(li, this.getEngine()).set(qt, this.getOS()).get();
      } : function() {
        return new po(T, h, p[T], d).parseUA().get();
      };
    };
    return Wi.call(this, [
      [
        "getBrowser",
        O(Yt)
      ],
      [
        "getCPU",
        O(ki)
      ],
      [
        "getDevice",
        O(Ai)
      ],
      [
        "getEngine",
        O(li)
      ],
      [
        "getOS",
        O(qt)
      ],
      [
        "getResult",
        O(rn)
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
          return or(T) && (h = Kr(T, sg)), this;
        }
      ]
    ]).setUA(h), this;
  };
  Vi.VERSION = rg;
  Vi.BROWSER = ys([
    B,
    j,
    Xn,
    U
  ]);
  Vi.CPU = ys([
    Pt
  ]);
  Vi.DEVICE = ys([
    k,
    x,
    U,
    Lr,
    be,
    dt,
    ze,
    mi,
    yn
  ]);
  Vi.ENGINE = Vi.OS = ys([
    B,
    j
  ]);
  var lt = ((e) => (e.TAURI = "tauri", e.WEB = "web", e.MOBILE_WEB = "mobile_web", e.UNKNOWN = "unknown", e))(lt || {});
  class mg {
    constructor() {
      __publicField(this, "parser");
      const t = typeof navigator < "u" ? navigator.userAgent : "";
      this.parser = new Vi(t);
    }
    detectEnvironment() {
      return this.isTauriEnvironment() ? lt.TAURI : this.parser.getDevice().type === "mobile" ? lt.MOBILE_WEB : lt.WEB;
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
        case lt.TAURI:
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
        case lt.MOBILE_WEB:
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
        case lt.WEB:
        case lt.UNKNOWN:
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
        case lt.TAURI:
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
        case lt.MOBILE_WEB:
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
        case lt.WEB:
        case lt.UNKNOWN:
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
        return !t.environment || !t.capabilities ? v(new Ue("Invalid platform detection results")) : (console.info("[PlatformDetector] Platform detected:", {
          environment: t.environment,
          isMobile: t.isMobile,
          isTablet: t.isTablet,
          browser: t.browser,
          os: t.os
        }), _(true));
      } catch (t) {
        return v(new Ue("Platform detection failed", void 0, t));
      }
    }
  }
  const cc = new mg();
  ER = function() {
    return cc.getPlatformContext();
  };
  function gg(e, t, i, o) {
    if (typeof t == "function" ? e !== t || !o : !t.has(e)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
    return i === "m" ? o : i === "a" ? o.call(e) : o ? o.value : t.get(e);
  }
  function Og(e, t, i, o, c) {
    if (typeof t == "function" ? e !== t || true : !t.has(e)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
    return t.set(e, i), i;
  }
  var Cr;
  function Rg(e, t = false) {
    return window.__TAURI_INTERNALS__.transformCallback(e, t);
  }
  async function It(e, t = {}, i) {
    return window.__TAURI_INTERNALS__.invoke(e, t, i);
  }
  class Ag {
    get rid() {
      return gg(this, Cr, "f");
    }
    constructor(t) {
      Cr.set(this, void 0), Og(this, Cr, t);
    }
    async close() {
      return It("plugin:resources|close", {
        rid: this.rid
      });
    }
  }
  Cr = /* @__PURE__ */ new WeakMap();
  var Ul;
  (function(e) {
    e.WINDOW_RESIZED = "tauri://resize", e.WINDOW_MOVED = "tauri://move", e.WINDOW_CLOSE_REQUESTED = "tauri://close-requested", e.WINDOW_DESTROYED = "tauri://destroyed", e.WINDOW_FOCUS = "tauri://focus", e.WINDOW_BLUR = "tauri://blur", e.WINDOW_SCALE_FACTOR_CHANGED = "tauri://scale-change", e.WINDOW_THEME_CHANGED = "tauri://theme-changed", e.WINDOW_CREATED = "tauri://window-created", e.WEBVIEW_CREATED = "tauri://webview-created", e.DRAG_ENTER = "tauri://drag-enter", e.DRAG_OVER = "tauri://drag-over", e.DRAG_DROP = "tauri://drag-drop", e.DRAG_LEAVE = "tauri://drag-leave";
  })(Ul || (Ul = {}));
  async function wg(e, t) {
    window.__TAURI_EVENT_PLUGIN_INTERNALS__.unregisterListener(e, t), await It("plugin:event|unlisten", {
      event: e,
      eventId: t
    });
  }
  async function Wl(e, t, i) {
    var o;
    const c = (o = void 0) !== null && o !== void 0 ? o : {
      kind: "Any"
    };
    return It("plugin:event|listen", {
      event: e,
      target: c,
      handler: Rg(t)
    }).then((l) => async () => wg(e, l));
  }
  async function Sg(e, t) {
    return await qr.load(e, t);
  }
  class qr extends Ag {
    constructor(t) {
      super(t);
    }
    static async load(t, i) {
      const o = await It("plugin:store|load", {
        path: t,
        options: i
      });
      return new qr(o);
    }
    static async get(t) {
      return await It("plugin:store|get_store", {
        path: t
      }).then((i) => i ? new qr(i) : null);
    }
    async set(t, i) {
      await It("plugin:store|set", {
        rid: this.rid,
        key: t,
        value: i
      });
    }
    async get(t) {
      const [i, o] = await It("plugin:store|get", {
        rid: this.rid,
        key: t
      });
      return o ? i : void 0;
    }
    async has(t) {
      return await It("plugin:store|has", {
        rid: this.rid,
        key: t
      });
    }
    async delete(t) {
      return await It("plugin:store|delete", {
        rid: this.rid,
        key: t
      });
    }
    async clear() {
      await It("plugin:store|clear", {
        rid: this.rid
      });
    }
    async reset() {
      await It("plugin:store|reset", {
        rid: this.rid
      });
    }
    async keys() {
      return await It("plugin:store|keys", {
        rid: this.rid
      });
    }
    async values() {
      return await It("plugin:store|values", {
        rid: this.rid
      });
    }
    async entries() {
      return await It("plugin:store|entries", {
        rid: this.rid
      });
    }
    async length() {
      return await It("plugin:store|length", {
        rid: this.rid
      });
    }
    async reload(t) {
      await It("plugin:store|reload", {
        rid: this.rid,
        ...t
      });
    }
    async save() {
      await It("plugin:store|save", {
        rid: this.rid
      });
    }
    async onKeyChange(t, i) {
      return await Wl("store://change", (o) => {
        o.payload.resourceId === this.rid && o.payload.key === t && i(o.payload.exists ? o.payload.value : void 0);
      });
    }
    async onChange(t) {
      return await Wl("store://change", (i) => {
        i.payload.resourceId === this.rid && t(i.payload.key, i.payload.exists ? i.payload.value : void 0);
      });
    }
  }
  class nt extends dn {
    constructor(t, i, o) {
      super(t, o);
      __publicField(this, "domain", ir.STORAGE);
      this.code = i;
    }
  }
  var et = ((e) => (e.INITIALIZATION_FAILED = "INITIALIZATION_FAILED", e.NOT_INITIALIZED = "NOT_INITIALIZED", e.SET_FAILED = "SET_FAILED", e.GET_FAILED = "GET_FAILED", e.SAVE_FAILED = "SAVE_FAILED", e.EXPORT_FAILED = "EXPORT_FAILED", e.CLEAR_FAILED = "CLEAR_FAILED", e.REMOVE_FAILED = "REMOVE_FAILED", e))(et || {});
  class Ot extends dn {
    constructor(t, i, o) {
      super(t, o);
      __publicField(this, "domain", ir.GEOLOCATION);
      this.code = i;
    }
  }
  var ct = ((e) => (e.INITIALIZATION_FAILED = "INITIALIZATION_FAILED", e.NOT_INITIALIZED = "NOT_INITIALIZED", e.PERMISSION_DENIED = "PERMISSION_DENIED", e.POSITION_UNAVAILABLE = "POSITION_UNAVAILABLE", e.TIMEOUT = "TIMEOUT", e.UNSUPPORTED = "UNSUPPORTED", e.WATCH_FAILED = "WATCH_FAILED", e.CLEAR_WATCH_FAILED = "CLEAR_WATCH_FAILED", e))(ct || {});
  class bo extends dn {
    constructor(t, i, o) {
      super(t, o);
      __publicField(this, "domain", ir.GENERIC);
      this.code = i;
    }
  }
  var to = ((e) => (e.DETECTION_FAILED = "DETECTION_FAILED", e.INVALID_CONTEXT = "INVALID_CONTEXT", e.UNSUPPORTED_PLATFORM = "UNSUPPORTED_PLATFORM", e.NOT_INITIALIZED = "NOT_INITIALIZED", e))(to || {});
  class Ng {
    constructor(t = "user-data.json") {
      __publicField(this, "store", null);
      __publicField(this, "initialized", false);
      __publicField(this, "storePath");
      this.storePath = t;
    }
    async init() {
      if (this.initialized) return _(void 0);
      try {
        return this.store = await Sg(this.storePath, {
          autoSave: false,
          defaults: {}
        }), this.initialized = true, _(void 0);
      } catch (t) {
        return v(new nt("Failed to initialize Tauri storage", et.INITIALIZATION_FAILED, t));
      }
    }
    async set(t, i) {
      if (!this.store) return v(new nt("Tauri store not initialized", et.NOT_INITIALIZED));
      try {
        return await this.store.set(t, i), _(void 0);
      } catch (o) {
        return v(new nt(`Failed to set value for key: ${t}`, et.SET_FAILED, o));
      }
    }
    async get(t) {
      if (!this.store) return v(new nt("Tauri store not initialized", et.NOT_INITIALIZED));
      try {
        const i = await this.store.get(t);
        return _(i ?? null);
      } catch (i) {
        return v(new nt(`Failed to get value for key: ${t}`, et.GET_FAILED, i));
      }
    }
    async save() {
      if (!this.store) return v(new nt("Tauri store not initialized", et.NOT_INITIALIZED));
      try {
        return await this.store.save(), _(void 0);
      } catch (t) {
        return v(new nt("Failed to save store", et.SAVE_FAILED, t));
      }
    }
    async exportToJson() {
      if (!this.store) return v(new nt("Tauri store not initialized", et.NOT_INITIALIZED));
      try {
        const t = await this.store.keys(), i = {};
        for (const o of t) {
          const c = await this.store.get(o);
          i[o] = c;
        }
        return _(JSON.stringify(i, null, 2));
      } catch (t) {
        return v(new nt("Failed to export data to JSON", et.EXPORT_FAILED, t));
      }
    }
    async clear() {
      if (!this.store) return v(new nt("Tauri store not initialized", et.NOT_INITIALIZED));
      try {
        const t = await this.store.keys();
        for (const i of t) await this.store.delete(i);
        return _(void 0);
      } catch (t) {
        return v(new nt("Failed to clear store", et.CLEAR_FAILED, t));
      }
    }
    async remove(t) {
      if (!this.store) return v(new nt("Tauri store not initialized", et.NOT_INITIALIZED));
      try {
        return await this.store.delete(t), _(void 0);
      } catch (i) {
        return v(new nt(`Failed to remove key: ${t}`, et.REMOVE_FAILED, i));
      }
    }
  }
  let yg, bg;
  ia = {
    theme: "system",
    interfaceLanguage: "system",
    mapLanguage: "interface",
    watchCompatibilityMode: true,
    geolocationCorrection: false,
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
    imuUpdateFrequency: 10,
    kalmanGpsUpdateInterval: 1
  };
  mR = [
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
    },
    {
      key: "imuUpdateFrequency",
      name: "IMU Update Frequency (Hz)",
      type: "number",
      description: "Update frequency for IMU sensors (0 = immediate, 10-20Hz recommended)"
    }
  ];
  yg = "trackmaker_settings";
  bg = typeof window < "u" && window.__TAURI_INTERNALS__ !== void 0;
  function Ht(e) {
    try {
      if (typeof localStorage > "u") return ia[e];
      const t = localStorage.getItem(yg);
      if (t !== null) return JSON.parse(t)[e] ?? ia[e];
    } catch {
    }
    return ia[e];
  }
  function _l() {
    return Ht("debugMode");
  }
  function lc() {
    return Ht("gpsUpdateInterval");
  }
  function Lg() {
    return Ht("kalmanGpsUpdateInterval");
  }
  function vg() {
    return Ht("enableKalmanFilter");
  }
  gR = function() {
    return Ht("mapZoomLevel");
  };
  OR = function() {
    return Ht("keepScreenOn");
  };
  RR = function() {
    return Ht("mapTileServer");
  };
  AR = function() {
    return Ht("showCompass");
  };
  wR = function() {
    return Ht("autoRecenterTimeout");
  };
  SR = function() {
    return Ht("customMapTileUrl");
  };
  NR = function() {
    return Ht("mapTilerApiKey");
  };
  function Da() {
    return Ht("imuUpdateFrequency");
  }
  class Cg {
    constructor(t = "trackmaker-db", i = "user-data") {
      __publicField(this, "db", null);
      __publicField(this, "initialized", false);
      __publicField(this, "dbName");
      __publicField(this, "storeName");
      this.dbName = t, this.storeName = i;
    }
    getMaxCacheSize() {
      try {
        return Ht("maxCacheSize") || 100;
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
          const O = p.target.result;
          O && d < h && (O.delete(), d++, O.continue());
        }, o.oncomplete = () => t(), o.onerror = () => i(new Error("Failed to prune cache"));
      });
    }
    async init() {
      if (this.initialized) return _(void 0);
      try {
        return this.db = await this.openDatabase(), this.initialized = true, _(void 0);
      } catch (t) {
        return v(new nt("Failed to initialize Web storage", et.INITIALIZATION_FAILED, t));
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
      if (!this.db) return v(new nt("Database not initialized", et.NOT_INITIALIZED));
      try {
        return await this.shouldPruneCache() && await this.pruneCache(), await this.executeTransaction("readwrite", (o) => new Promise((c, l) => {
          const h = o.put(Kh(i), t);
          h.onsuccess = () => c(), h.onerror = () => l(new Error("Failed to set value"));
        })), _(void 0);
      } catch (o) {
        return v(new nt(`Failed to set value for key: ${t}`, et.SET_FAILED, o));
      }
    }
    async get(t) {
      if (!this.db) return v(new nt("Database not initialized", et.NOT_INITIALIZED));
      try {
        const i = await this.executeTransaction("readonly", (o) => new Promise((c, l) => {
          const h = o.get(t);
          h.onsuccess = () => c(h.result), h.onerror = () => l(new Error("Failed to get value"));
        }));
        return _(i);
      } catch (i) {
        return v(new nt(`Failed to get value for key: ${t}`, et.GET_FAILED, i));
      }
    }
    async save() {
      return _(void 0);
    }
    async exportToJson() {
      if (!this.db) return v(new nt("Database not initialized", et.NOT_INITIALIZED));
      try {
        const t = await this.executeTransaction("readonly", (i) => new Promise((o, c) => {
          const l = i.getAll();
          l.onsuccess = () => {
            const d = l.result.reduce((p, O, T) => (p[T] = O, p), {});
            o(d);
          }, l.onerror = () => c(new Error("Failed to export data"));
        }));
        return _(JSON.stringify(t, null, 2));
      } catch (t) {
        return v(new nt("Failed to export data to JSON", et.EXPORT_FAILED, t));
      }
    }
    async clear() {
      if (!this.db) return v(new nt("Database not initialized", et.NOT_INITIALIZED));
      try {
        return await this.executeTransaction("readwrite", (t) => new Promise((i, o) => {
          const c = t.clear();
          c.onsuccess = () => i(), c.onerror = () => o(new Error("Failed to clear store"));
        })), _(void 0);
      } catch (t) {
        return v(new nt("Failed to clear store", et.CLEAR_FAILED, t));
      }
    }
    async remove(t) {
      if (!this.db) return v(new nt("Database not initialized", et.NOT_INITIALIZED));
      try {
        return await this.executeTransaction("readwrite", (i) => new Promise((o, c) => {
          const l = i.delete(t);
          l.onsuccess = () => o(), l.onerror = () => c(new Error("Failed to remove key"));
        })), _(void 0);
      } catch (i) {
        return v(new nt(`Failed to remove key: ${t}`, et.REMOVE_FAILED, i));
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
  class Hg {
    constructor(t = "get_geolocation") {
      __publicField(this, "initialized", false);
      __publicField(this, "tauriHandlerName");
      __publicField(this, "watchCallbacks", /* @__PURE__ */ new Map());
      this.tauriHandlerName = t;
    }
    async init(t) {
      if (this.initialized) return _(void 0);
      const i = await this.getPermissionStatus();
      if (i.isErr()) return v(i.error);
      if (i.value === "prompt" && t) {
        if (!await t(i.value, "permission.location.prompt")) return v(new Ot("Geolocation permission denied", ct.PERMISSION_DENIED));
        const c = await this.getPermissionStatus();
        if (c.isErr()) return v(c.error);
        if (c.value === "denied") return v(new Ot("Geolocation permission denied", ct.PERMISSION_DENIED));
      }
      try {
        return await this.injectTauriProvider(), this.initialized = true, _(void 0);
      } catch (o) {
        return v(new Ot("Failed to initialize Tauri geolocation provider", ct.INITIALIZATION_FAILED, o));
      }
    }
    async injectTauriProvider() {
      if (navigator.geolocation.injected) return;
      const t = new Dg(this.tauriHandlerName);
      navigator.geolocation.getCurrentPosition = t.getCurrentPosition.bind(t), navigator.geolocation.watchPosition = t.watchPosition.bind(t), navigator.geolocation.clearWatch = t.clearWatch.bind(t), navigator.geolocation.injected = true;
    }
    async getPermissionStatus() {
      try {
        if (!navigator.permissions) return await this.fallbackPermissionCheck();
        const t = await navigator.permissions.query({
          name: "geolocation"
        });
        return _(t.state);
      } catch (t) {
        return v(new Ot("Failed to get permission status", ct.PERMISSION_DENIED, t));
      }
    }
    async fallbackPermissionCheck() {
      return new Promise((t) => {
        navigator.geolocation.getCurrentPosition(() => t(_("granted")), (i) => {
          i.code === i.PERMISSION_DENIED ? t(_("denied")) : t(_("prompt"));
        }, {
          timeout: 5e3,
          maximumAge: 1 / 0,
          enableHighAccuracy: true
        });
      });
    }
    async requestPermission() {
      try {
        return await this.getCurrentPosition(), _("granted");
      } catch (t) {
        return this.isPositionError(t) && t.code === t.PERMISSION_DENIED ? _("denied") : v(new Ot("Failed to request permission", ct.PERMISSION_DENIED, t));
      }
    }
    async getCurrentPosition() {
      try {
        const t = await this.locateTauri();
        return _(this.convertToGeolocationPosition(t));
      } catch (t) {
        return v(new Ot("Failed to get current position", ct.POSITION_UNAVAILABLE, t));
      }
    }
    async locateTauri() {
      return await It(this.tauriHandlerName);
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
        const o = lc(), c = (i == null ? void 0 : i.highFrequency) ?? false, l = window.setInterval(async () => {
          try {
            const h = await this.getCurrentPosition();
            h.isOk() && t(h.value);
          } catch (h) {
            console.error("Error in watch position:", h);
          }
        }, c ? 100 : o);
        return this.watchCallbacks.set(l, l), _(l);
      } catch (o) {
        return v(new Ot("Failed to start watching position", ct.WATCH_FAILED, o));
      }
    }
    clearWatch(t) {
      try {
        return this.watchCallbacks.has(t) && (clearInterval(t), this.watchCallbacks.delete(t)), _(void 0);
      } catch (i) {
        return v(new Ot("Failed to clear watch", ct.CLEAR_WATCH_FAILED, i));
      }
    }
    isSupported() {
      return false;
    }
    isPositionError(t) {
      return typeof t == "object" && t !== null && "code" in t && "message" in t && typeof t.code == "number";
    }
  }
  class Dg {
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
      const c = lc(), l = (o == null ? void 0 : o.highFrequency) ?? false;
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
      const t = await It(this.tauriHandlerName), i = {
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
  class Mg {
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
      if (this.initialized) return _(void 0);
      if (this.initPromise) return this.initPromise;
      this.initPromise = this.doInit(t);
      const i = await this.initPromise;
      return i.isErr() && (this.initPromise = null), i;
    }
    async doInit(t) {
      if (this.initialized) return _(void 0);
      if (!this.isSupported()) return v(new Ot("Geolocation is not supported by this browser", ct.UNSUPPORTED));
      const i = await this.getPermissionStatus();
      if (i.isErr()) return v(i.error);
      if (i.value === "prompt" && t) {
        if (!await t(i.value, "permission.location.prompt")) return v(new Ot("Geolocation permission denied", ct.PERMISSION_DENIED));
        const c = await this.getPermissionStatus();
        if (c.isErr()) return v(c.error);
        if (c.value === "denied") return v(new Ot("Geolocation permission denied", ct.PERMISSION_DENIED));
      }
      return this.initialized = true, _(void 0);
    }
    async getPermissionStatus() {
      if (!navigator.permissions) return this.fallbackPermissionCheck();
      try {
        const t = await navigator.permissions.query({
          name: "geolocation"
        });
        return _(t.state);
      } catch (t) {
        return v(new Ot("Failed to get permission status", ct.PERMISSION_DENIED, t));
      }
    }
    async fallbackPermissionCheck() {
      return new Promise((t) => {
        navigator.geolocation.getCurrentPosition(() => t(_("granted")), (i) => {
          i.code === i.PERMISSION_DENIED ? t(_("denied")) : t(_("prompt"));
        }, {
          timeout: 5e3,
          maximumAge: 1 / 0,
          enableHighAccuracy: true
        });
      });
    }
    async requestPermission() {
      try {
        return (await this.getCurrentPosition()).isOk() ? _("granted") : _("denied");
      } catch (t) {
        return this.isPositionError(t) ? t.code === t.PERMISSION_DENIED ? _("denied") : _("prompt") : v(new Ot("Failed to request permission", ct.PERMISSION_DENIED, t));
      }
    }
    async getCurrentPosition() {
      if (!this.initialized) {
        const t = await this.init();
        if (t.isErr()) return v(t.error);
      }
      return new Promise((t) => {
        navigator.geolocation.getCurrentPosition((i) => {
          t(_(i));
        }, (i) => {
          let o;
          const c = i.message;
          switch (i.code) {
            case i.PERMISSION_DENIED:
              o = ct.PERMISSION_DENIED;
              break;
            case i.POSITION_UNAVAILABLE:
              o = ct.POSITION_UNAVAILABLE;
              break;
            case i.TIMEOUT:
              o = ct.TIMEOUT;
              break;
            default:
              o = ct.POSITION_UNAVAILABLE;
          }
          t(v(new Ot(c, o, new Error(i.message))));
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
        if (d.isErr()) return v(d.error);
      }
      const o = Lg(), c = lc(), l = Ht("watchCompatibilityMode"), h = (i == null ? void 0 : i.highFrequency) ?? false;
      if (l || h) {
        h ? console.log("[Geolocation] High frequency mode enabled") : console.info("[Geolocation] Using compatibility mode for position watch");
        try {
          const d = Date.now();
          return this.compatibilityModeCallbacks.set(d, t), this.compatibilityIntervalId === null && (this.compatibilityIntervalId = window.setInterval(async () => {
            const p = await this.getCurrentPosition();
            if (p.isOk()) {
              const O = p.value, T = {
                lat: O.coords.latitude,
                lng: O.coords.longitude,
                acc: O.coords.accuracy
              }, w = Date.now();
              if (!(!h && w - this.lastCompatibilityUpdateTime > c) && !h && this.lastCompatibilityPosition && this.lastCompatibilityPosition.lat === T.lat && this.lastCompatibilityPosition.lng === T.lng && this.lastCompatibilityPosition.acc === T.acc) return;
              this.lastCompatibilityPosition = T;
              for (const L of this.compatibilityModeCallbacks.values()) try {
                L(O);
              } catch (P) {
                console.error("[Geolocation] Callback error:", P);
              }
              this.lastCompatibilityUpdateTime = w;
            }
          }, h ? o : c)), this.compatibilityModeWatches.set(d, this.compatibilityIntervalId), _(d);
        } catch (d) {
          return v(new Ot("Failed to start watching position (compatibility mode)", ct.WATCH_FAILED, d));
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
        return _(d);
      } catch (d) {
        return v(new Ot("Failed to start watching position", ct.WATCH_FAILED, d));
      }
    }
    clearWatch(t) {
      try {
        return this.compatibilityModeWatches.has(t) ? (this.compatibilityModeCallbacks.delete(t), this.compatibilityModeWatches.delete(t), this.compatibilityModeCallbacks.size === 0 && this.compatibilityIntervalId !== null && (window.clearInterval(this.compatibilityIntervalId), this.compatibilityIntervalId = null, this.lastCompatibilityPosition = null)) : navigator.geolocation.clearWatch(t), _(void 0);
      } catch (i) {
        return v(new Ot("Failed to clear watch", ct.CLEAR_WATCH_FAILED, i));
      }
    }
    isSupported() {
      return "geolocation" in navigator;
    }
    isPositionError(t) {
      return typeof t == "object" && t !== null && "code" in t && "message" in t && typeof t.code == "number";
    }
  }
  class Fg {
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
      if (this.initialized) return _(void 0);
      if (this.initPromise) return this.initPromise;
      this.initPromise = this.doInit(t);
      const i = await this.initPromise;
      return i.isErr() && (this.initPromise = null), i;
    }
    async doInit(t) {
      if (this.disposed) return v(new Ue("Device orientation provider has been disposed"));
      const i = await this.requestPermissionIfNeeded(t);
      return i.isErr() ? v(i.error) : await this.checkHardwareSupport() ? (this.initialized = true, _(void 0)) : v(new Ue("Device orientation is not supported by this browser"));
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
            if (!await t("prompt", "permission.device-orientation.required")) return v(new Ue("User declined to grant device orientation permission"));
            if (await DeviceOrientationEvent.requestPermission() !== "granted") return v(new Ue("Device orientation permission denied"));
          } else return i === "denied" ? v(new Ue("Device orientation permission denied")) : _(void 0);
        }
        return _(void 0);
      } catch (i) {
        return v(new Ue("Failed to request device orientation permission", void 0, i));
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
      if (this.disposed) return v(new Ue("Device orientation provider has been disposed"));
      if (!this.initialized) {
        const t = await this.init();
        if (t.isErr()) return v(t.error);
      }
      if (this.isWatching) return _(void 0);
      try {
        return this.orientationEventListenerCount === 0 && window.addEventListener("deviceorientation", this.boundHandleOrientationEvent, true), this.orientationEventListenerCount++, this.isWatching = true, _(void 0);
      } catch (t) {
        return v(new Ue("Failed to start device orientation", void 0, t));
      }
    }
    stop() {
      if (!this.isWatching) return _(void 0);
      try {
        return this.orientationEventListenerCount--, this.isWatching = false, this.lastReading = null, this.orientationEventListenerCount === 0 && window.removeEventListener("deviceorientation", this.boundHandleOrientationEvent, true), _(void 0);
      } catch (t) {
        return v(new Ue("Failed to stop device orientation", void 0, t));
      }
    }
    async getCurrentOrientation() {
      if (this.disposed) return v(new Ue("Device orientation provider has been disposed"));
      if (!this.initialized) {
        const t = await this.init();
        if (t.isErr()) return v(t.error);
      }
      return _(this.lastReading);
    }
    onOrientationChange(t) {
      const i = this.nextListenerId++;
      return this.listeners.set(i, t), this.lastReading && t(this.lastReading), i;
    }
    removeEventListener(t) {
      return this.listeners.delete(t), _(void 0);
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
  Pg = function(e) {
    return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
  };
  function id(e) {
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
  const Ug = Object.prototype.toString;
  function Jn(e) {
    const t = Ug.call(e);
    return t.endsWith("Array]") && !t.includes("Big");
  }
  const Wg = Object.freeze(Object.defineProperty({
    __proto__: null,
    isAnyArray: Jn
  }, Symbol.toStringTag, {
    value: "Module"
  })), _g = id(Wg);
  function Gg(e) {
    var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
    if (!Jn(e)) throw new TypeError("input must be an array");
    if (e.length === 0) throw new TypeError("input must not be empty");
    var i = t.fromIndex, o = i === void 0 ? 0 : i, c = t.toIndex, l = c === void 0 ? e.length : c;
    if (o < 0 || o >= e.length || !Number.isInteger(o)) throw new Error("fromIndex must be a positive integer smaller than length");
    if (l <= o || l > e.length || !Number.isInteger(l)) throw new Error("toIndex must be an integer greater than fromIndex and at most equal to length");
    for (var h = e[o], d = o + 1; d < l; d++) e[d] > h && (h = e[d]);
    return h;
  }
  function kg(e) {
    var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
    if (!Jn(e)) throw new TypeError("input must be an array");
    if (e.length === 0) throw new TypeError("input must not be empty");
    var i = t.fromIndex, o = i === void 0 ? 0 : i, c = t.toIndex, l = c === void 0 ? e.length : c;
    if (o < 0 || o >= e.length || !Number.isInteger(o)) throw new Error("fromIndex must be a positive integer smaller than length");
    if (l <= o || l > e.length || !Number.isInteger(l)) throw new Error("toIndex must be an integer greater than fromIndex and at most equal to length");
    for (var h = e[o], d = o + 1; d < l; d++) e[d] < h && (h = e[d]);
    return h;
  }
  function Bg(e) {
    var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
    if (Jn(e)) {
      if (e.length === 0) throw new TypeError("input must not be empty");
    } else throw new TypeError("input must be an array");
    var i;
    if (t.output !== void 0) {
      if (!Jn(t.output)) throw new TypeError("output option must be an array if specified");
      i = t.output;
    } else i = new Array(e.length);
    var o = kg(e), c = Gg(e);
    if (o === c) throw new RangeError("minimum and maximum input values are equal. Cannot rescale a constant array");
    var l = t.min, h = l === void 0 ? t.autoMinMax ? o : 0 : l, d = t.max, p = d === void 0 ? t.autoMinMax ? c : 1 : d;
    if (h >= p) throw new RangeError("min option must be smaller than max option");
    for (var O = (p - h) / (c - o), T = 0; T < e.length; T++) i[T] = (e[T] - o) * O + h;
    return i;
  }
  const Yg = Object.freeze(Object.defineProperty({
    __proto__: null,
    default: Bg
  }, Symbol.toStringTag, {
    value: "Module"
  })), xg = id(Yg);
  var Gl;
  function jg() {
    var _re_instances, e_fn, _e2;
    if (Gl) return Ce;
    Gl = 1, Object.defineProperty(Ce, "__esModule", {
      value: true
    });
    var e = _g, t = xg;
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
      const { rows: u, columns: I } = f, E = Math.min(u, r), m = Math.min(I, s), g = [];
      if (a === "auto") {
        a = false;
        e: for (let b = 0; b < E; b++) for (let R = 0; R < m; R++) if (f.get(b, R) < 0) {
          a = true;
          break e;
        }
      }
      for (let b = 0; b < E; b++) {
        let R = [];
        for (let M = 0; M < m; M++) R.push(d(f.get(b, M), n, a));
        g.push(`${R.join(" ")}`);
      }
      return m !== I && (g[g.length - 1] += ` ... ${I - s} more columns`), E !== u && g.push(`... ${u - r} more rows`), g.join(`
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
    function O(f, r) {
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
    function w(f, r, s) {
      let n = s ? f.columns : f.columns - 1;
      if (r < 0 || r > n) throw new RangeError("Column index out of range");
    }
    function C(f, r) {
      if (r.to1DArray && (r = r.to1DArray()), r.length !== f.columns) throw new RangeError("vector size must be the same as the number of columns");
      return r;
    }
    function L(f, r) {
      if (r.to1DArray && (r = r.to1DArray()), r.length !== f.rows) throw new RangeError("vector size must be the same as the number of rows");
      return r;
    }
    function P(f, r) {
      if (!e.isAnyArray(r)) throw new TypeError("row indices must be an array");
      for (let s = 0; s < r.length; s++) if (r[s] < 0 || r[s] >= f.rows) throw new RangeError("row indices are out of range");
    }
    function D(f, r) {
      if (!e.isAnyArray(r)) throw new TypeError("column indices must be an array");
      for (let s = 0; s < r.length; s++) if (r[s] < 0 || r[s] >= f.columns) throw new RangeError("column indices are out of range");
    }
    function de(f, r, s, n, a) {
      if (arguments.length !== 5) throw new RangeError("expected 4 arguments");
      if (K("startRow", r), K("endRow", s), K("startColumn", n), K("endColumn", a), r > s || n > a || r < 0 || r >= f.rows || s < 0 || s >= f.rows || n < 0 || n >= f.columns || a < 0 || a >= f.columns) throw new RangeError("Submatrix indices are out of range");
    }
    function ie(f, r = 0) {
      let s = [];
      for (let n = 0; n < f; n++) s.push(r);
      return s;
    }
    function K(f, r) {
      if (typeof r != "number") throw new TypeError(`${f} must be a number`);
    }
    function V(f) {
      if (f.isEmpty()) throw new Error("Empty matrix has no elements to index");
    }
    function G(f) {
      let r = ie(f.rows);
      for (let s = 0; s < f.rows; ++s) for (let n = 0; n < f.columns; ++n) r[s] += f.get(s, n);
      return r;
    }
    function ue(f) {
      let r = ie(f.columns);
      for (let s = 0; s < f.rows; ++s) for (let n = 0; n < f.columns; ++n) r[n] += f.get(s, n);
      return r;
    }
    function Te(f) {
      let r = 0;
      for (let s = 0; s < f.rows; s++) for (let n = 0; n < f.columns; n++) r += f.get(s, n);
      return r;
    }
    function ne(f) {
      let r = ie(f.rows, 1);
      for (let s = 0; s < f.rows; ++s) for (let n = 0; n < f.columns; ++n) r[s] *= f.get(s, n);
      return r;
    }
    function he(f) {
      let r = ie(f.columns, 1);
      for (let s = 0; s < f.rows; ++s) for (let n = 0; n < f.columns; ++n) r[n] *= f.get(s, n);
      return r;
    }
    function te(f) {
      let r = 1;
      for (let s = 0; s < f.rows; s++) for (let n = 0; n < f.columns; n++) r *= f.get(s, n);
      return r;
    }
    function Ie(f, r, s) {
      const n = f.rows, a = f.columns, u = [];
      for (let I = 0; I < n; I++) {
        let E = 0, m = 0, g = 0;
        for (let b = 0; b < a; b++) g = f.get(I, b) - s[I], E += g, m += g * g;
        r ? u.push((m - E * E / a) / (a - 1)) : u.push((m - E * E / a) / a);
      }
      return u;
    }
    function Le(f, r, s) {
      const n = f.rows, a = f.columns, u = [];
      for (let I = 0; I < a; I++) {
        let E = 0, m = 0, g = 0;
        for (let b = 0; b < n; b++) g = f.get(b, I) - s[I], E += g, m += g * g;
        r ? u.push((m - E * E / n) / (n - 1)) : u.push((m - E * E / n) / n);
      }
      return u;
    }
    function fe(f, r, s) {
      const n = f.rows, a = f.columns, u = n * a;
      let I = 0, E = 0, m = 0;
      for (let g = 0; g < n; g++) for (let b = 0; b < a; b++) m = f.get(g, b) - s, I += m, E += m * m;
      return r ? (E - I * I / u) / (u - 1) : (E - I * I / u) / u;
    }
    function ke(f, r) {
      for (let s = 0; s < f.rows; s++) for (let n = 0; n < f.columns; n++) f.set(s, n, f.get(s, n) - r[s]);
    }
    function ht(f, r) {
      for (let s = 0; s < f.rows; s++) for (let n = 0; n < f.columns; n++) f.set(s, n, f.get(s, n) - r[n]);
    }
    function xt(f, r) {
      for (let s = 0; s < f.rows; s++) for (let n = 0; n < f.columns; n++) f.set(s, n, f.get(s, n) - r);
    }
    function qe(f) {
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
    function Ve(f) {
      const r = [];
      for (let s = 0; s < f.columns; s++) {
        let n = 0;
        for (let a = 0; a < f.rows; a++) n += f.get(a, s) ** 2 / (f.rows - 1);
        r.push(Math.sqrt(n));
      }
      return r;
    }
    function Si(f, r) {
      for (let s = 0; s < f.rows; s++) for (let n = 0; n < f.columns; n++) f.set(s, n, f.get(s, n) / r[n]);
    }
    function _o(f) {
      const r = f.size - 1;
      let s = 0;
      for (let n = 0; n < f.columns; n++) for (let a = 0; a < f.rows; a++) s += f.get(a, n) ** 2 / r;
      return Math.sqrt(s);
    }
    function Ni(f, r) {
      for (let s = 0; s < f.rows; s++) for (let n = 0; n < f.columns; n++) f.set(s, n, f.get(s, n) / r);
    }
    class Oe {
      static from1DArray(r, s, n) {
        if (r * s !== n.length) throw new RangeError("data length does not match given dimensions");
        let u = new re(r, s);
        for (let I = 0; I < r; I++) for (let E = 0; E < s; E++) u.set(I, E, n[I * s + E]);
        return u;
      }
      static rowVector(r) {
        let s = new re(1, r.length);
        for (let n = 0; n < r.length; n++) s.set(0, n, r[n]);
        return s;
      }
      static columnVector(r) {
        let s = new re(r.length, 1);
        for (let n = 0; n < r.length; n++) s.set(n, 0, r[n]);
        return s;
      }
      static zeros(r, s) {
        return new re(r, s);
      }
      static ones(r, s) {
        return new re(r, s).fill(1);
      }
      static rand(r, s, n = {}) {
        if (typeof n != "object") throw new TypeError("options must be an object");
        const { random: a = Math.random } = n;
        let u = new re(r, s);
        for (let I = 0; I < r; I++) for (let E = 0; E < s; E++) u.set(I, E, a());
        return u;
      }
      static randInt(r, s, n = {}) {
        if (typeof n != "object") throw new TypeError("options must be an object");
        const { min: a = 0, max: u = 1e3, random: I = Math.random } = n;
        if (!Number.isInteger(a)) throw new TypeError("min must be an integer");
        if (!Number.isInteger(u)) throw new TypeError("max must be an integer");
        if (a >= u) throw new RangeError("min must be smaller than max");
        let E = u - a, m = new re(r, s);
        for (let g = 0; g < r; g++) for (let b = 0; b < s; b++) {
          let R = a + Math.round(I() * E);
          m.set(g, b, R);
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
        let n = r.rows, a = r.columns, u = new re(n, a);
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
        return Oe.isMatrix(r) ? r : new re(r);
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
            for (let g = u; g < s; g++) {
              let b = r.get(E, g) - m * r.get(a, g);
              r.set(E, g, b);
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
        let a = new re(this.rows * s, this.columns * n);
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
        return re.rowVector(this.getRow(r));
      }
      setRow(r, s) {
        T(this, r), s = C(this, s);
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
        w(this, r);
        let s = [];
        for (let n = 0; n < this.rows; n++) s.push(this.get(n, r));
        return s;
      }
      getColumnVector(r) {
        return re.columnVector(this.getColumn(r));
      }
      setColumn(r, s) {
        w(this, r), s = L(this, s);
        for (let n = 0; n < this.rows; n++) this.set(n, r, s[n]);
        return this;
      }
      swapColumns(r, s) {
        w(this, r), w(this, s);
        for (let n = 0; n < this.rows; n++) {
          let a = this.get(n, r);
          this.set(n, r, this.get(n, s)), this.set(n, s, a);
        }
        return this;
      }
      addRowVector(r) {
        r = C(this, r);
        for (let s = 0; s < this.rows; s++) for (let n = 0; n < this.columns; n++) this.set(s, n, this.get(s, n) + r[n]);
        return this;
      }
      subRowVector(r) {
        r = C(this, r);
        for (let s = 0; s < this.rows; s++) for (let n = 0; n < this.columns; n++) this.set(s, n, this.get(s, n) - r[n]);
        return this;
      }
      mulRowVector(r) {
        r = C(this, r);
        for (let s = 0; s < this.rows; s++) for (let n = 0; n < this.columns; n++) this.set(s, n, this.get(s, n) * r[n]);
        return this;
      }
      divRowVector(r) {
        r = C(this, r);
        for (let s = 0; s < this.rows; s++) for (let n = 0; n < this.columns; n++) this.set(s, n, this.get(s, n) / r[n]);
        return this;
      }
      addColumnVector(r) {
        r = L(this, r);
        for (let s = 0; s < this.rows; s++) for (let n = 0; n < this.columns; n++) this.set(s, n, this.get(s, n) + r[s]);
        return this;
      }
      subColumnVector(r) {
        r = L(this, r);
        for (let s = 0; s < this.rows; s++) for (let n = 0; n < this.columns; n++) this.set(s, n, this.get(s, n) - r[s]);
        return this;
      }
      mulColumnVector(r) {
        r = L(this, r);
        for (let s = 0; s < this.rows; s++) for (let n = 0; n < this.columns; n++) this.set(s, n, this.get(s, n) * r[s]);
        return this;
      }
      divColumnVector(r) {
        r = L(this, r);
        for (let s = 0; s < this.rows; s++) for (let n = 0; n < this.columns; n++) this.set(s, n, this.get(s, n) / r[s]);
        return this;
      }
      mulRow(r, s) {
        T(this, r);
        for (let n = 0; n < this.columns; n++) this.set(r, n, this.get(r, n) * s);
        return this;
      }
      mulColumn(r, s) {
        w(this, r);
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
        V(this);
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
        V(this);
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
        T(this, r), V(this);
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
        T(this, r), V(this);
        let s = this.get(r, 0), n = [
          r,
          0
        ];
        for (let a = 1; a < this.columns; a++) this.get(r, a) < s && (s = this.get(r, a), n[1] = a);
        return n;
      }
      maxColumn(r) {
        if (w(this, r), this.isEmpty()) return NaN;
        let s = this.get(0, r);
        for (let n = 1; n < this.rows; n++) this.get(n, r) > s && (s = this.get(n, r));
        return s;
      }
      maxColumnIndex(r) {
        w(this, r), V(this);
        let s = this.get(0, r), n = [
          0,
          r
        ];
        for (let a = 1; a < this.rows; a++) this.get(a, r) > s && (s = this.get(a, r), n[0] = a);
        return n;
      }
      minColumn(r) {
        if (w(this, r), this.isEmpty()) return NaN;
        let s = this.get(0, r);
        for (let n = 1; n < this.rows; n++) this.get(n, r) < s && (s = this.get(n, r));
        return s;
      }
      minColumnIndex(r) {
        w(this, r), V(this);
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
        Oe.isMatrix(r) && (r = r.to1DArray());
        let s = this.to1DArray();
        if (s.length !== r.length) throw new RangeError("vectors do not have the same size");
        let n = 0;
        for (let a = 0; a < s.length; a++) n += s[a] * r[a];
        return n;
      }
      mmul(r) {
        r = re.checkMatrix(r);
        let s = this.rows, n = this.columns, a = r.columns, u = new re(s, a), I = new Float64Array(n);
        for (let E = 0; E < a; E++) {
          for (let m = 0; m < n; m++) I[m] = r.get(m, E);
          for (let m = 0; m < s; m++) {
            let g = 0;
            for (let b = 0; b < n; b++) g += this.get(m, b) * I[b];
            u.set(m, E, g);
          }
        }
        return u;
      }
      mpow(r) {
        if (!this.isSquare()) throw new RangeError("Matrix must be square");
        if (!Number.isInteger(r) || r < 0) throw new RangeError("Exponent must be a non-negative integer");
        let s = re.eye(this.rows), n = this;
        for (let a = r; a >= 1; a /= 2) (a & 1) !== 0 && (s = s.mmul(n)), n = n.mmul(n);
        return s;
      }
      strassen2x2(r) {
        r = re.checkMatrix(r);
        let s = new re(2, 2);
        const n = this.get(0, 0), a = r.get(0, 0), u = this.get(0, 1), I = r.get(0, 1), E = this.get(1, 0), m = r.get(1, 0), g = this.get(1, 1), b = r.get(1, 1), R = (n + g) * (a + b), M = (E + g) * a, ee = n * (I - b), H = g * (m - a), W = (n + u) * b, ce = (E - n) * (a + I), S = (u - g) * (m + b), Q = R + H - W + S, pe = ee + W, Se = M + H, ye = R - M + ee + ce;
        return s.set(0, 0, Q), s.set(0, 1, pe), s.set(1, 0, Se), s.set(1, 1, ye), s;
      }
      strassen3x3(r) {
        r = re.checkMatrix(r);
        let s = new re(3, 3);
        const n = this.get(0, 0), a = this.get(0, 1), u = this.get(0, 2), I = this.get(1, 0), E = this.get(1, 1), m = this.get(1, 2), g = this.get(2, 0), b = this.get(2, 1), R = this.get(2, 2), M = r.get(0, 0), ee = r.get(0, 1), H = r.get(0, 2), W = r.get(1, 0), ce = r.get(1, 1), S = r.get(1, 2), Q = r.get(2, 0), pe = r.get(2, 1), Se = r.get(2, 2), ye = (n + a + u - I - E - b - R) * ce, tt = (n - I) * (-ee + ce), ge = E * (-M + ee + W - ce - S - Q + Se), Re = (-n + I + E) * (M - ee + ce), $e = (I + E) * (-M + ee), N = n * M, Y = (-n + g + b) * (M - H + S), le = (-n + g) * (H - S), J = (g + b) * (-M + H), it = (n + a + u - E - m - g - b) * S, je = b * (-M + H + W - ce - S - Q + pe), Ze = (-u + b + R) * (ce + Q - pe), ot = (u - R) * (ce - pe), mt = u * Q, ri = (b + R) * (-Q + pe), pt = (-u + E + m) * (S + Q - Se), pi = (u - m) * (S - Se), bi = (E + m) * (-Q + Se), Fe = a * W, gt = m * pe, Vt = I * H, zt = g * ee, Tt = R * Se, Od = N + mt + Fe, Rd = ye + Re + $e + N + Ze + mt + ri, Ad = N + Y + J + it + mt + pt + bi, wd = tt + ge + Re + N + mt + pt + pi, Sd = tt + Re + $e + N + gt, Nd = mt + pt + pi + bi + Vt, yd = N + Y + le + je + Ze + ot + mt, bd = Ze + ot + mt + ri + zt, Ld = N + Y + le + J + Tt;
        return s.set(0, 0, Od), s.set(0, 1, Rd), s.set(0, 2, Ad), s.set(1, 0, wd), s.set(1, 1, Sd), s.set(1, 2, Nd), s.set(2, 0, yd), s.set(2, 1, bd), s.set(2, 2, Ld), s;
      }
      mmulStrassen(r) {
        r = re.checkMatrix(r);
        let s = this.clone(), n = s.rows, a = s.columns, u = r.rows, I = r.columns;
        a !== u && console.warn(`Multiplying ${n} x ${a} and ${u} x ${I} matrix: dimensions do not match.`);
        function E(R, M, ee) {
          let H = R.rows, W = R.columns;
          if (H === M && W === ee) return R;
          {
            let ce = Oe.zeros(M, ee);
            return ce = ce.setSubMatrix(R, 0, 0), ce;
          }
        }
        let m = Math.max(n, u), g = Math.max(a, I);
        s = E(s, m, g), r = E(r, m, g);
        function b(R, M, ee, H) {
          if (ee <= 512 || H <= 512) return R.mmul(M);
          ee % 2 === 1 && H % 2 === 1 ? (R = E(R, ee + 1, H + 1), M = E(M, ee + 1, H + 1)) : ee % 2 === 1 ? (R = E(R, ee + 1, H), M = E(M, ee + 1, H)) : H % 2 === 1 && (R = E(R, ee, H + 1), M = E(M, ee, H + 1));
          let W = parseInt(R.rows / 2, 10), ce = parseInt(R.columns / 2, 10), S = R.subMatrix(0, W - 1, 0, ce - 1), Q = M.subMatrix(0, W - 1, 0, ce - 1), pe = R.subMatrix(0, W - 1, ce, R.columns - 1), Se = M.subMatrix(0, W - 1, ce, M.columns - 1), ye = R.subMatrix(W, R.rows - 1, 0, ce - 1), tt = M.subMatrix(W, M.rows - 1, 0, ce - 1), ge = R.subMatrix(W, R.rows - 1, ce, R.columns - 1), Re = M.subMatrix(W, M.rows - 1, ce, M.columns - 1), $e = b(Oe.add(S, ge), Oe.add(Q, Re), W, ce), N = b(Oe.add(ye, ge), Q, W, ce), Y = b(S, Oe.sub(Se, Re), W, ce), le = b(ge, Oe.sub(tt, Q), W, ce), J = b(Oe.add(S, pe), Re, W, ce), it = b(Oe.sub(ye, S), Oe.add(Q, Se), W, ce), je = b(Oe.sub(pe, ge), Oe.add(tt, Re), W, ce), Ze = Oe.add($e, le);
          Ze.sub(J), Ze.add(je);
          let ot = Oe.add(Y, J), mt = Oe.add(N, le), ri = Oe.sub($e, N);
          ri.add(Y), ri.add(it);
          let pt = Oe.zeros(2 * Ze.rows, 2 * Ze.columns);
          return pt = pt.setSubMatrix(Ze, 0, 0), pt = pt.setSubMatrix(ot, Ze.rows, 0), pt = pt.setSubMatrix(mt, 0, Ze.columns), pt = pt.setSubMatrix(ri, Ze.rows, Ze.columns), pt.subMatrix(0, ee - 1, 0, H - 1);
        }
        return b(s, r, m, g);
      }
      scaleRows(r = {}) {
        if (typeof r != "object") throw new TypeError("options must be an object");
        const { min: s = 0, max: n = 1 } = r;
        if (!Number.isFinite(s)) throw new TypeError("min must be a number");
        if (!Number.isFinite(n)) throw new TypeError("max must be a number");
        if (s >= n) throw new RangeError("min must be smaller than max");
        let a = new re(this.rows, this.columns);
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
        let a = new re(this.rows, this.columns);
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
        r = re.checkMatrix(r);
        let s = this.rows, n = this.columns, a = r.rows, u = r.columns, I = new re(s * a, n * u);
        for (let E = 0; E < s; E++) for (let m = 0; m < n; m++) for (let g = 0; g < a; g++) for (let b = 0; b < u; b++) I.set(a * E + g, u * m + b, this.get(E, m) * r.get(g, b));
        return I;
      }
      kroneckerSum(r) {
        if (r = re.checkMatrix(r), !this.isSquare() || !r.isSquare()) throw new Error("Kronecker Sum needs two Square Matrices");
        let s = this.rows, n = r.rows, a = this.kroneckerProduct(re.eye(n, n)), u = re.eye(s, s).kroneckerProduct(r);
        return a.add(u);
      }
      transpose() {
        let r = new re(this.columns, this.rows);
        for (let s = 0; s < this.rows; s++) for (let n = 0; n < this.columns; n++) r.set(n, s, this.get(s, n));
        return r;
      }
      sortRows(r = fn) {
        for (let s = 0; s < this.rows; s++) this.setRow(s, this.getRow(s).sort(r));
        return this;
      }
      sortColumns(r = fn) {
        for (let s = 0; s < this.columns; s++) this.setColumn(s, this.getColumn(s).sort(r));
        return this;
      }
      subMatrix(r, s, n, a) {
        de(this, r, s, n, a);
        let u = new re(s - r + 1, a - n + 1);
        for (let I = r; I <= s; I++) for (let E = n; E <= a; E++) u.set(I - r, E - n, this.get(I, E));
        return u;
      }
      subMatrixRow(r, s, n) {
        if (s === void 0 && (s = 0), n === void 0 && (n = this.columns - 1), s > n || s < 0 || s >= this.columns || n < 0 || n >= this.columns) throw new RangeError("Argument out of range");
        let a = new re(r.length, n - s + 1);
        for (let u = 0; u < r.length; u++) for (let I = s; I <= n; I++) {
          if (r[u] < 0 || r[u] >= this.rows) throw new RangeError(`Row index out of range: ${r[u]}`);
          a.set(u, I - s, this.get(r[u], I));
        }
        return a;
      }
      subMatrixColumn(r, s, n) {
        if (s === void 0 && (s = 0), n === void 0 && (n = this.rows - 1), s > n || s < 0 || s >= this.rows || n < 0 || n >= this.rows) throw new RangeError("Argument out of range");
        let a = new re(n - s + 1, r.length);
        for (let u = 0; u < r.length; u++) for (let I = s; I <= n; I++) {
          if (r[u] < 0 || r[u] >= this.columns) throw new RangeError(`Column index out of range: ${r[u]}`);
          a.set(I - s, u, this.get(I, r[u]));
        }
        return a;
      }
      setSubMatrix(r, s, n) {
        if (r = re.checkMatrix(r), r.isEmpty()) return this;
        let a = s + r.rows - 1, u = n + r.columns - 1;
        de(this, s, a, n, u);
        for (let I = 0; I < r.rows; I++) for (let E = 0; E < r.columns; E++) this.set(s + I, n + E, r.get(I, E));
        return this;
      }
      selection(r, s) {
        P(this, r), D(this, s);
        let n = new re(r.length, s.length);
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
        return this.constructor.copy(this, new re(this.rows, this.columns));
      }
      static copy(r, s) {
        for (const [n, a, u] of r.entries()) s.set(n, a, u);
        return s;
      }
      sum(r) {
        switch (r) {
          case "row":
            return G(this);
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
            return ne(this);
          case "column":
            return he(this);
          case void 0:
            return te(this);
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
            return fe(this, n, a);
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
            return ke(this, n), this;
          }
          case "column": {
            if (!e.isAnyArray(n)) throw new TypeError("center must be an array");
            return ht(this, n), this;
          }
          case void 0: {
            if (typeof n != "number") throw new TypeError("center must be a number");
            return xt(this, n), this;
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
            if (n === void 0) n = qe(this);
            else if (!e.isAnyArray(n)) throw new TypeError("scale must be an array");
            return He(this, n), this;
          }
          case "column": {
            if (n === void 0) n = Ve(this);
            else if (!e.isAnyArray(n)) throw new TypeError("scale must be an array");
            return Si(this, n), this;
          }
          case void 0: {
            if (n === void 0) n = _o(this);
            else if (typeof n != "number") throw new TypeError("scale must be a number");
            return Ni(this, n), this;
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
    Oe.prototype.klass = "Matrix", typeof Symbol < "u" && (Oe.prototype[/* @__PURE__ */ Symbol.for("nodejs.util.inspect.custom")] = c);
    function fn(f, r) {
      return f - r;
    }
    function Ds(f) {
      return f.every((r) => typeof r == "number");
    }
    Oe.random = Oe.rand, Oe.randomInt = Oe.randInt, Oe.diagonal = Oe.diag, Oe.prototype.diagonal = Oe.prototype.diag, Oe.identity = Oe.eye, Oe.prototype.negate = Oe.prototype.neg, Oe.prototype.tensorProduct = Oe.prototype.kroneckerProduct;
    const _re = class _re extends Oe {
      constructor(r, s) {
        super();
        __privateAdd(this, _re_instances);
        __publicField(this, "data");
        if (_re.isMatrix(r)) __privateMethod(this, _re_instances, e_fn).call(this, r.rows, r.columns), _re.copy(r, this);
        else if (Number.isInteger(r) && r >= 0) __privateMethod(this, _re_instances, e_fn).call(this, r, s);
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
        return s === void 0 && (s = r, r = this.rows), T(this, r, true), s = Float64Array.from(C(this, s)), this.data.splice(r, 0, s), this.rows += 1, this;
      }
      removeColumn(r) {
        w(this, r);
        for (let s = 0; s < this.rows; s++) {
          const n = new Float64Array(this.columns - 1);
          for (let a = 0; a < r; a++) n[a] = this.data[s][a];
          for (let a = r + 1; a < this.columns; a++) n[a - 1] = this.data[s][a];
          this.data[s] = n;
        }
        return this.columns -= 1, this;
      }
      addColumn(r, s) {
        typeof s > "u" && (s = r, r = this.columns), w(this, r, true), s = L(this, s);
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
    _re_instances = new WeakSet();
    e_fn = function(r, s) {
      if (this.data = [], Number.isInteger(s) && s >= 0) for (let n = 0; n < r; n++) this.data.push(new Float64Array(s));
      else throw new TypeError("nColumns must be a positive integer");
      this.rows = r, this.columns = s;
    };
    let re = _re;
    O(Oe, re);
    const __t = class __t extends Oe {
      constructor(r) {
        super();
        __privateAdd(this, _e2);
        if (re.isMatrix(r)) {
          if (!r.isSymmetric()) throw new TypeError("not symmetric data");
          __privateSet(this, _e2, re.copy(r, new re(r.rows, r.rows)));
        } else if (Number.isInteger(r) && r >= 0) __privateSet(this, _e2, new re(r, r));
        else if (__privateSet(this, _e2, new re(r)), !this.isSymmetric()) throw new TypeError("not symmetric data");
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
        return re.isMatrix(r) && r.klassType === "SymmetricMatrix";
      }
      static zeros(r) {
        return new this(r);
      }
      static ones(r) {
        return new this(r).fill(1);
      }
      clone() {
        const r = new __t(this.diagonalSize);
        for (const [s, n, a] of this.upperRightEntries()) r.set(s, n, a);
        return r;
      }
      toMatrix() {
        return new re(this);
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
        const a = new __t(n);
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
    let _t = __t;
    _t.prototype.klassType = "SymmetricMatrix";
    class yi extends _t {
      static isDistanceMatrix(r) {
        return _t.isSymmetricMatrix(r) && r.klassSubType === "DistanceMatrix";
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
        return new _t(this);
      }
      clone() {
        const r = new yi(this.diagonalSize);
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
    yi.prototype.klassSubType = "DistanceMatrix";
    class jt extends Oe {
      constructor(r, s, n) {
        super(), this.matrix = r, this.rows = s, this.columns = n;
      }
    }
    class nr extends jt {
      constructor(r, s) {
        w(r, s), super(r, r.rows, 1), this.column = s;
      }
      set(r, s, n) {
        return this.matrix.set(r, this.column, n), this;
      }
      get(r) {
        return this.matrix.get(r, this.column);
      }
    }
    class go extends jt {
      constructor(r, s) {
        D(r, s), super(r, r.rows, s.length), this.columnIndices = s;
      }
      set(r, s, n) {
        return this.matrix.set(r, this.columnIndices[s], n), this;
      }
      get(r, s) {
        return this.matrix.get(r, this.columnIndices[s]);
      }
    }
    class dc extends jt {
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
    class A extends jt {
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
    class y extends jt {
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
    class F extends jt {
      constructor(r, s) {
        P(r, s), super(r, s.length, r.columns), this.rowIndices = s;
      }
      set(r, s, n) {
        return this.matrix.set(this.rowIndices[r], s, n), this;
      }
      get(r, s) {
        return this.matrix.get(this.rowIndices[r], s);
      }
    }
    class q extends jt {
      constructor(r, s, n) {
        P(r, s), D(r, n), super(r, s.length, n.length), this.rowIndices = s, this.columnIndices = n;
      }
      set(r, s, n) {
        return this.matrix.set(this.rowIndices[r], this.columnIndices[s], n), this;
      }
      get(r, s) {
        return this.matrix.get(this.rowIndices[r], this.columnIndices[s]);
      }
    }
    class $ extends jt {
      constructor(r, s, n, a, u) {
        de(r, s, n, a, u), super(r, n - s + 1, u - a + 1), this.startRow = s, this.startColumn = a;
      }
      set(r, s, n) {
        return this.matrix.set(this.startRow + r, this.startColumn + s, n), this;
      }
      get(r, s) {
        return this.matrix.get(this.startRow + r, this.startColumn + s);
      }
    }
    class X extends jt {
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
    class se extends Oe {
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
    class Z extends Oe {
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
    function oe(f, r) {
      if (e.isAnyArray(f)) return f[0] && e.isAnyArray(f[0]) ? new Z(f) : new se(f, r);
      throw new Error("the argument is not an array");
    }
    class z {
      constructor(r) {
        r = Z.checkMatrix(r);
        let s = r.clone(), n = s.rows, a = s.columns, u = new Float64Array(n), I = 1, E, m, g, b, R, M, ee, H, W;
        for (E = 0; E < n; E++) u[E] = E;
        for (H = new Float64Array(n), m = 0; m < a; m++) {
          for (E = 0; E < n; E++) H[E] = s.get(E, m);
          for (E = 0; E < n; E++) {
            for (W = Math.min(E, m), R = 0, g = 0; g < W; g++) R += s.get(E, g) * H[g];
            H[E] -= R, s.set(E, m, H[E]);
          }
          for (b = m, E = m + 1; E < n; E++) Math.abs(H[E]) > Math.abs(H[b]) && (b = E);
          if (b !== m) {
            for (g = 0; g < a; g++) M = s.get(b, g), s.set(b, g, s.get(m, g)), s.set(m, g, M);
            ee = u[b], u[b] = u[m], u[m] = ee, I = -I;
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
        r = re.checkMatrix(r);
        let s = this.LU;
        if (s.rows !== r.rows) throw new Error("Invalid matrix dimensions");
        if (this.isSingular()) throw new Error("LU matrix is singular");
        let a = r.columns, u = r.subMatrixRow(this.pivotVector, 0, a - 1), I = s.columns, E, m, g;
        for (g = 0; g < I; g++) for (E = g + 1; E < I; E++) for (m = 0; m < a; m++) u.set(E, m, u.get(E, m) - u.get(g, m) * s.get(E, g));
        for (g = I - 1; g >= 0; g--) {
          for (m = 0; m < a; m++) u.set(g, m, u.get(g, m) / s.get(g, g));
          for (E = 0; E < g; E++) for (m = 0; m < a; m++) u.set(E, m, u.get(E, m) - u.get(g, m) * s.get(E, g));
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
        let r = this.LU, s = r.rows, n = r.columns, a = new re(s, n);
        for (let u = 0; u < s; u++) for (let I = 0; I < n; I++) u > I ? a.set(u, I, r.get(u, I)) : u === I ? a.set(u, I, 1) : a.set(u, I, 0);
        return a;
      }
      get upperTriangularMatrix() {
        let r = this.LU, s = r.rows, n = r.columns, a = new re(s, n);
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
        let s = r.clone(), n = r.rows, a = r.columns, u = new Float64Array(a), I, E, m, g;
        for (m = 0; m < a; m++) {
          let b = 0;
          for (I = m; I < n; I++) b = Ee(b, s.get(I, m));
          if (b !== 0) {
            for (s.get(m, m) < 0 && (b = -b), I = m; I < n; I++) s.set(I, m, s.get(I, m) / b);
            for (s.set(m, m, s.get(m, m) + 1), E = m + 1; E < a; E++) {
              for (g = 0, I = m; I < n; I++) g += s.get(I, m) * s.get(I, E);
              for (g = -g / s.get(m, m), I = m; I < n; I++) s.set(I, E, s.get(I, E) + g * s.get(I, m));
            }
          }
          u[m] = -b;
        }
        this.QR = s, this.Rdiag = u;
      }
      solve(r) {
        r = re.checkMatrix(r);
        let s = this.QR, n = s.rows;
        if (r.rows !== n) throw new Error("Matrix row dimensions must agree");
        if (!this.isFullRank()) throw new Error("Matrix is rank deficient");
        let a = r.columns, u = r.clone(), I = s.columns, E, m, g, b;
        for (g = 0; g < I; g++) for (m = 0; m < a; m++) {
          for (b = 0, E = g; E < n; E++) b += s.get(E, g) * u.get(E, m);
          for (b = -b / s.get(g, g), E = g; E < n; E++) u.set(E, m, u.get(E, m) + b * s.get(E, g));
        }
        for (g = I - 1; g >= 0; g--) {
          for (m = 0; m < a; m++) u.set(g, m, u.get(g, m) / this.Rdiag[g]);
          for (E = 0; E < g; E++) for (m = 0; m < a; m++) u.set(E, m, u.get(E, m) - u.get(g, m) * s.get(E, g));
        }
        return u.subMatrix(0, I - 1, 0, a - 1);
      }
      isFullRank() {
        let r = this.QR.columns;
        for (let s = 0; s < r; s++) if (this.Rdiag[s] === 0) return false;
        return true;
      }
      get upperTriangularMatrix() {
        let r = this.QR, s = r.columns, n = new re(s, s), a, u;
        for (a = 0; a < s; a++) for (u = 0; u < s; u++) a < u ? n.set(a, u, r.get(a, u)) : a === u ? n.set(a, u, this.Rdiag[a]) : n.set(a, u, 0);
        return n;
      }
      get orthogonalMatrix() {
        let r = this.QR, s = r.rows, n = r.columns, a = new re(s, n), u, I, E, m;
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
        let m = !!u, g = !!I, b = false, R;
        if (n < a) if (!E) R = r.clone(), console.warn("Computing SVD on a matrix with more columns than rows. Consider enabling autoTranspose");
        else {
          R = r.transpose(), n = R.rows, a = R.columns, b = true;
          let N = m;
          m = g, g = N;
        }
        else R = r.clone();
        let M = Math.min(n, a), ee = Math.min(n + 1, a), H = new Float64Array(ee), W = new re(n, M), ce = new re(a, a), S = new Float64Array(a), Q = new Float64Array(n), pe = new Float64Array(ee);
        for (let N = 0; N < ee; N++) pe[N] = N;
        let Se = Math.min(n - 1, a), ye = Math.max(0, Math.min(a - 2, n)), tt = Math.max(Se, ye);
        for (let N = 0; N < tt; N++) {
          if (N < Se) {
            H[N] = 0;
            for (let Y = N; Y < n; Y++) H[N] = Ee(H[N], R.get(Y, N));
            if (H[N] !== 0) {
              R.get(N, N) < 0 && (H[N] = -H[N]);
              for (let Y = N; Y < n; Y++) R.set(Y, N, R.get(Y, N) / H[N]);
              R.set(N, N, R.get(N, N) + 1);
            }
            H[N] = -H[N];
          }
          for (let Y = N + 1; Y < a; Y++) {
            if (N < Se && H[N] !== 0) {
              let le = 0;
              for (let J = N; J < n; J++) le += R.get(J, N) * R.get(J, Y);
              le = -le / R.get(N, N);
              for (let J = N; J < n; J++) R.set(J, Y, R.get(J, Y) + le * R.get(J, N));
            }
            S[Y] = R.get(N, Y);
          }
          if (m && N < Se) for (let Y = N; Y < n; Y++) W.set(Y, N, R.get(Y, N));
          if (N < ye) {
            S[N] = 0;
            for (let Y = N + 1; Y < a; Y++) S[N] = Ee(S[N], S[Y]);
            if (S[N] !== 0) {
              S[N + 1] < 0 && (S[N] = 0 - S[N]);
              for (let Y = N + 1; Y < a; Y++) S[Y] /= S[N];
              S[N + 1] += 1;
            }
            if (S[N] = -S[N], N + 1 < n && S[N] !== 0) {
              for (let Y = N + 1; Y < n; Y++) Q[Y] = 0;
              for (let Y = N + 1; Y < n; Y++) for (let le = N + 1; le < a; le++) Q[Y] += S[le] * R.get(Y, le);
              for (let Y = N + 1; Y < a; Y++) {
                let le = -S[Y] / S[N + 1];
                for (let J = N + 1; J < n; J++) R.set(J, Y, R.get(J, Y) + le * Q[J]);
              }
            }
            if (g) for (let Y = N + 1; Y < a; Y++) ce.set(Y, N, S[Y]);
          }
        }
        let ge = Math.min(a, n + 1);
        if (Se < a && (H[Se] = R.get(Se, Se)), n < ge && (H[ge - 1] = 0), ye + 1 < ge && (S[ye] = R.get(ye, ge - 1)), S[ge - 1] = 0, m) {
          for (let N = Se; N < M; N++) {
            for (let Y = 0; Y < n; Y++) W.set(Y, N, 0);
            W.set(N, N, 1);
          }
          for (let N = Se - 1; N >= 0; N--) if (H[N] !== 0) {
            for (let Y = N + 1; Y < M; Y++) {
              let le = 0;
              for (let J = N; J < n; J++) le += W.get(J, N) * W.get(J, Y);
              le = -le / W.get(N, N);
              for (let J = N; J < n; J++) W.set(J, Y, W.get(J, Y) + le * W.get(J, N));
            }
            for (let Y = N; Y < n; Y++) W.set(Y, N, -W.get(Y, N));
            W.set(N, N, 1 + W.get(N, N));
            for (let Y = 0; Y < N - 1; Y++) W.set(Y, N, 0);
          } else {
            for (let Y = 0; Y < n; Y++) W.set(Y, N, 0);
            W.set(N, N, 1);
          }
        }
        if (g) for (let N = a - 1; N >= 0; N--) {
          if (N < ye && S[N] !== 0) for (let Y = N + 1; Y < a; Y++) {
            let le = 0;
            for (let J = N + 1; J < a; J++) le += ce.get(J, N) * ce.get(J, Y);
            le = -le / ce.get(N + 1, N);
            for (let J = N + 1; J < a; J++) ce.set(J, Y, ce.get(J, Y) + le * ce.get(J, N));
          }
          for (let Y = 0; Y < a; Y++) ce.set(Y, N, 0);
          ce.set(N, N, 1);
        }
        let Re = ge - 1, $e = Number.EPSILON;
        for (; ge > 0; ) {
          let N, Y;
          for (N = ge - 2; N >= -1 && N !== -1; N--) {
            const le = Number.MIN_VALUE + $e * Math.abs(H[N] + Math.abs(H[N + 1]));
            if (Math.abs(S[N]) <= le || Number.isNaN(S[N])) {
              S[N] = 0;
              break;
            }
          }
          if (N === ge - 2) Y = 4;
          else {
            let le;
            for (le = ge - 1; le >= N && le !== N; le--) {
              let J = (le !== ge ? Math.abs(S[le]) : 0) + (le !== N + 1 ? Math.abs(S[le - 1]) : 0);
              if (Math.abs(H[le]) <= $e * J) {
                H[le] = 0;
                break;
              }
            }
            le === N ? Y = 3 : le === ge - 1 ? Y = 1 : (Y = 2, N = le);
          }
          switch (N++, Y) {
            case 1: {
              let le = S[ge - 2];
              S[ge - 2] = 0;
              for (let J = ge - 2; J >= N; J--) {
                let it = Ee(H[J], le), je = H[J] / it, Ze = le / it;
                if (H[J] = it, J !== N && (le = -Ze * S[J - 1], S[J - 1] = je * S[J - 1]), g) for (let ot = 0; ot < a; ot++) it = je * ce.get(ot, J) + Ze * ce.get(ot, ge - 1), ce.set(ot, ge - 1, -Ze * ce.get(ot, J) + je * ce.get(ot, ge - 1)), ce.set(ot, J, it);
              }
              break;
            }
            case 2: {
              let le = S[N - 1];
              S[N - 1] = 0;
              for (let J = N; J < ge; J++) {
                let it = Ee(H[J], le), je = H[J] / it, Ze = le / it;
                if (H[J] = it, le = -Ze * S[J], S[J] = je * S[J], m) for (let ot = 0; ot < n; ot++) it = je * W.get(ot, J) + Ze * W.get(ot, N - 1), W.set(ot, N - 1, -Ze * W.get(ot, J) + je * W.get(ot, N - 1)), W.set(ot, J, it);
              }
              break;
            }
            case 3: {
              const le = Math.max(Math.abs(H[ge - 1]), Math.abs(H[ge - 2]), Math.abs(S[ge - 2]), Math.abs(H[N]), Math.abs(S[N])), J = H[ge - 1] / le, it = H[ge - 2] / le, je = S[ge - 2] / le, Ze = H[N] / le, ot = S[N] / le, mt = ((it + J) * (it - J) + je * je) / 2, ri = J * je * (J * je);
              let pt = 0;
              (mt !== 0 || ri !== 0) && (mt < 0 ? pt = 0 - Math.sqrt(mt * mt + ri) : pt = Math.sqrt(mt * mt + ri), pt = ri / (mt + pt));
              let pi = (Ze + J) * (Ze - J) + pt, bi = Ze * ot;
              for (let Fe = N; Fe < ge - 1; Fe++) {
                let gt = Ee(pi, bi);
                gt === 0 && (gt = Number.MIN_VALUE);
                let Vt = pi / gt, zt = bi / gt;
                if (Fe !== N && (S[Fe - 1] = gt), pi = Vt * H[Fe] + zt * S[Fe], S[Fe] = Vt * S[Fe] - zt * H[Fe], bi = zt * H[Fe + 1], H[Fe + 1] = Vt * H[Fe + 1], g) for (let Tt = 0; Tt < a; Tt++) gt = Vt * ce.get(Tt, Fe) + zt * ce.get(Tt, Fe + 1), ce.set(Tt, Fe + 1, -zt * ce.get(Tt, Fe) + Vt * ce.get(Tt, Fe + 1)), ce.set(Tt, Fe, gt);
                if (gt = Ee(pi, bi), gt === 0 && (gt = Number.MIN_VALUE), Vt = pi / gt, zt = bi / gt, H[Fe] = gt, pi = Vt * S[Fe] + zt * H[Fe + 1], H[Fe + 1] = -zt * S[Fe] + Vt * H[Fe + 1], bi = zt * S[Fe + 1], S[Fe + 1] = Vt * S[Fe + 1], m && Fe < n - 1) for (let Tt = 0; Tt < n; Tt++) gt = Vt * W.get(Tt, Fe) + zt * W.get(Tt, Fe + 1), W.set(Tt, Fe + 1, -zt * W.get(Tt, Fe) + Vt * W.get(Tt, Fe + 1)), W.set(Tt, Fe, gt);
              }
              S[ge - 2] = pi;
              break;
            }
            case 4: {
              if (H[N] <= 0 && (H[N] = H[N] < 0 ? -H[N] : 0, g)) for (let le = 0; le <= Re; le++) ce.set(le, N, -ce.get(le, N));
              for (; N < Re && !(H[N] >= H[N + 1]); ) {
                let le = H[N];
                if (H[N] = H[N + 1], H[N + 1] = le, g && N < a - 1) for (let J = 0; J < a; J++) le = ce.get(J, N + 1), ce.set(J, N + 1, ce.get(J, N)), ce.set(J, N, le);
                if (m && N < n - 1) for (let J = 0; J < n; J++) le = W.get(J, N + 1), W.set(J, N + 1, W.get(J, N)), W.set(J, N, le);
                N++;
              }
              ge--;
              break;
            }
          }
        }
        if (b) {
          let N = ce;
          ce = W, W = N;
        }
        this.m = n, this.n = a, this.s = H, this.U = W, this.V = ce;
      }
      solve(r) {
        let s = r, n = this.threshold, a = this.s.length, u = re.zeros(a, a);
        for (let M = 0; M < a; M++) Math.abs(this.s[M]) <= n ? u.set(M, M, 0) : u.set(M, M, 1 / this.s[M]);
        let I = this.U, E = this.rightSingularVectors, m = E.mmul(u), g = E.rows, b = I.rows, R = re.zeros(g, b);
        for (let M = 0; M < g; M++) for (let ee = 0; ee < b; ee++) {
          let H = 0;
          for (let W = 0; W < a; W++) H += m.get(M, W) * I.get(ee, W);
          R.set(M, ee, H);
        }
        return R.mmul(s);
      }
      solveForDiagonal(r) {
        return this.solve(re.diag(r));
      }
      inverse() {
        let r = this.V, s = this.threshold, n = r.rows, a = r.columns, u = new re(n, this.s.length);
        for (let b = 0; b < n; b++) for (let R = 0; R < a; R++) Math.abs(this.s[R]) > s && u.set(b, R, r.get(b, R) / this.s[R]);
        let I = this.U, E = I.rows, m = I.columns, g = new re(n, E);
        for (let b = 0; b < n; b++) for (let R = 0; R < E; R++) {
          let M = 0;
          for (let ee = 0; ee < m; ee++) M += u.get(b, ee) * I.get(R, ee);
          g.set(b, R, M);
        }
        return g;
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
        return re.diag(this.s);
      }
    }
    function we(f, r = false) {
      return f = Z.checkMatrix(f), r ? new me(f).inverse() : Me(f, re.eye(f.rows));
    }
    function Me(f, r, s = false) {
      return f = Z.checkMatrix(f), r = Z.checkMatrix(r), s ? new me(f).solve(r) : f.isSquare() ? new z(f).solve(r) : new ae(f).solve(r);
    }
    function _e(f) {
      if (f = re.checkMatrix(f), f.isSquare()) {
        if (f.columns === 0) return 1;
        let r, s, n, a;
        if (f.columns === 2) return r = f.get(0, 0), s = f.get(0, 1), n = f.get(1, 0), a = f.get(1, 1), r * a - s * n;
        if (f.columns === 3) {
          let u, I, E;
          return u = new q(f, [
            1,
            2
          ], [
            1,
            2
          ]), I = new q(f, [
            1,
            2
          ], [
            0,
            2
          ]), E = new q(f, [
            1,
            2
          ], [
            0,
            1
          ]), r = f.get(0, 0), s = f.get(0, 1), n = f.get(0, 2), r * _e(u) - s * _e(I) + n * _e(E);
        } else return new z(f).determinant;
      } else throw Error("determinant can only be calculated for a square matrix");
    }
    function Ge(f, r) {
      let s = [];
      for (let n = 0; n < f; n++) n !== r && s.push(n);
      return s;
    }
    function St(f, r, s, n = 1e-9, a = 1e-9) {
      if (f > a) return new Array(r.rows + 1).fill(0);
      {
        let u = r.addRow(s, [
          0
        ]);
        for (let I = 0; I < u.rows; I++) Math.abs(u.get(I, 0)) < n && u.set(I, 0, 0);
        return u.to1DArray();
      }
    }
    function Nt(f, r = {}) {
      const { thresholdValue: s = 1e-9, thresholdError: n = 1e-9 } = r;
      f = re.checkMatrix(f);
      let a = f.rows, u = new re(a, a);
      for (let I = 0; I < a; I++) {
        let E = re.columnVector(f.getRow(I)), m = f.subMatrixRow(Ge(a, I)).transpose(), b = new me(m).solve(E), R = re.sub(E, m.mmul(b)).abs().max();
        u.setRow(I, St(R, b, I, s, n));
      }
      return u;
    }
    function Zt(f, r = Number.EPSILON) {
      if (f = re.checkMatrix(f), f.isEmpty()) return f.transpose();
      let s = new me(f, {
        autoTranspose: true
      }), n = s.leftSingularVectors, a = s.rightSingularVectors, u = s.diagonal;
      for (let I = 0; I < u.length; I++) Math.abs(u[I]) > r ? u[I] = 1 / u[I] : u[I] = 0;
      return a.mmul(re.diag(u).mmul(n.transpose()));
    }
    function Qt(f, r = f, s = {}) {
      f = new re(f);
      let n = false;
      if (typeof r == "object" && !re.isMatrix(r) && !e.isAnyArray(r) ? (s = r, r = f, n = true) : r = new re(r), f.rows !== r.rows) throw new TypeError("Both matrices must have the same number of rows");
      const { center: a = true } = s;
      a && (f = f.center("column"), n || (r = r.center("column")));
      const u = f.transpose().mmul(r);
      for (let I = 0; I < u.rows; I++) for (let E = 0; E < u.columns; E++) u.set(I, E, u.get(I, E) * (1 / (f.rows - 1)));
      return u;
    }
    function Oo(f, r = f, s = {}) {
      f = new re(f);
      let n = false;
      if (typeof r == "object" && !re.isMatrix(r) && !e.isAnyArray(r) ? (s = r, r = f, n = true) : r = new re(r), f.rows !== r.rows) throw new TypeError("Both matrices must have the same number of rows");
      const { center: a = true, scale: u = true } = s;
      a && (f.center("column"), n || r.center("column")), u && (f.scale("column"), n || r.scale("column"));
      const I = f.standardDeviation("column", {
        unbiased: true
      }), E = n ? I : r.standardDeviation("column", {
        unbiased: true
      }), m = f.transpose().mmul(r);
      for (let g = 0; g < m.rows; g++) for (let b = 0; b < m.columns; b++) m.set(g, b, m.get(g, b) * (1 / (I[g] * E[b])) * (1 / (f.rows - 1)));
      return m;
    }
    class pn {
      constructor(r, s = {}) {
        const { assumeSymmetric: n = false } = s;
        if (r = Z.checkMatrix(r), !r.isSquare()) throw new Error("Matrix is not a square matrix");
        if (r.isEmpty()) throw new Error("Matrix must be non-empty");
        let a = r.columns, u = new re(a, a), I = new Float64Array(a), E = new Float64Array(a), m = r, g, b, R = false;
        if (n ? R = true : R = r.isSymmetric(), R) {
          for (g = 0; g < a; g++) for (b = 0; b < a; b++) u.set(g, b, m.get(g, b));
          Dt(a, E, I, u), ei(a, E, I, u);
        } else {
          let M = new re(a, a), ee = new Float64Array(a);
          for (b = 0; b < a; b++) for (g = 0; g < a; g++) M.set(g, b, m.get(g, b));
          rr(a, M, ee, u), sr(a, E, I, u, M);
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
        let r = this.n, s = this.e, n = this.d, a = new re(r, r), u, I;
        for (u = 0; u < r; u++) {
          for (I = 0; I < r; I++) a.set(u, I, 0);
          a.set(u, u, n[u]), s[u] > 0 ? a.set(u, u + 1, s[u]) : s[u] < 0 && a.set(u, u - 1, s[u]);
        }
        return a;
      }
    }
    function Dt(f, r, s, n) {
      let a, u, I, E, m, g, b, R;
      for (m = 0; m < f; m++) s[m] = n.get(f - 1, m);
      for (E = f - 1; E > 0; E--) {
        for (R = 0, I = 0, g = 0; g < E; g++) R = R + Math.abs(s[g]);
        if (R === 0) for (r[E] = s[E - 1], m = 0; m < E; m++) s[m] = n.get(E - 1, m), n.set(E, m, 0), n.set(m, E, 0);
        else {
          for (g = 0; g < E; g++) s[g] /= R, I += s[g] * s[g];
          for (a = s[E - 1], u = Math.sqrt(I), a > 0 && (u = -u), r[E] = R * u, I = I - a * u, s[E - 1] = a - u, m = 0; m < E; m++) r[m] = 0;
          for (m = 0; m < E; m++) {
            for (a = s[m], n.set(m, E, a), u = r[m] + n.get(m, m) * a, g = m + 1; g <= E - 1; g++) u += n.get(g, m) * s[g], r[g] += n.get(g, m) * a;
            r[m] = u;
          }
          for (a = 0, m = 0; m < E; m++) r[m] /= I, a += r[m] * s[m];
          for (b = a / (I + I), m = 0; m < E; m++) r[m] -= b * s[m];
          for (m = 0; m < E; m++) {
            for (a = s[m], u = r[m], g = m; g <= E - 1; g++) n.set(g, m, n.get(g, m) - (a * r[g] + u * s[g]));
            s[m] = n.get(E - 1, m), n.set(E, m, 0);
          }
        }
        s[E] = I;
      }
      for (E = 0; E < f - 1; E++) {
        if (n.set(f - 1, E, n.get(E, E)), n.set(E, E, 1), I = s[E + 1], I !== 0) {
          for (g = 0; g <= E; g++) s[g] = n.get(g, E + 1) / I;
          for (m = 0; m <= E; m++) {
            for (u = 0, g = 0; g <= E; g++) u += n.get(g, E + 1) * n.get(g, m);
            for (g = 0; g <= E; g++) n.set(g, m, n.get(g, m) - u * s[g]);
          }
        }
        for (g = 0; g <= E; g++) n.set(g, E + 1, 0);
      }
      for (m = 0; m < f; m++) s[m] = n.get(f - 1, m), n.set(f - 1, m, 0);
      n.set(f - 1, f - 1, 1), r[0] = 0;
    }
    function ei(f, r, s, n) {
      let a, u, I, E, m, g, b, R, M, ee, H, W, ce, S, Q, pe;
      for (I = 1; I < f; I++) r[I - 1] = r[I];
      r[f - 1] = 0;
      let Se = 0, ye = 0, tt = Number.EPSILON;
      for (g = 0; g < f; g++) {
        for (ye = Math.max(ye, Math.abs(s[g]) + Math.abs(r[g])), b = g; b < f && !(Math.abs(r[b]) <= tt * ye); ) b++;
        if (b > g) do {
          for (a = s[g], R = (s[g + 1] - a) / (2 * r[g]), M = Ee(R, 1), R < 0 && (M = -M), s[g] = r[g] / (R + M), s[g + 1] = r[g] * (R + M), ee = s[g + 1], u = a - s[g], I = g + 2; I < f; I++) s[I] -= u;
          for (Se = Se + u, R = s[b], H = 1, W = H, ce = H, S = r[g + 1], Q = 0, pe = 0, I = b - 1; I >= g; I--) for (ce = W, W = H, pe = Q, a = H * r[I], u = H * R, M = Ee(R, r[I]), r[I + 1] = Q * M, Q = r[I] / M, H = R / M, R = H * s[I] - Q * a, s[I + 1] = u + Q * (H * a + Q * s[I]), m = 0; m < f; m++) u = n.get(m, I + 1), n.set(m, I + 1, Q * n.get(m, I) + H * u), n.set(m, I, H * n.get(m, I) - Q * u);
          R = -Q * pe * ce * S * r[g] / ee, r[g] = Q * R, s[g] = H * R;
        } while (Math.abs(r[g]) > tt * ye);
        s[g] = s[g] + Se, r[g] = 0;
      }
      for (I = 0; I < f - 1; I++) {
        for (m = I, R = s[I], E = I + 1; E < f; E++) s[E] < R && (m = E, R = s[E]);
        if (m !== I) for (s[m] = s[I], s[I] = R, E = 0; E < f; E++) R = n.get(E, I), n.set(E, I, n.get(E, m)), n.set(E, m, R);
      }
    }
    function rr(f, r, s, n) {
      let a = 0, u = f - 1, I, E, m, g, b, R, M;
      for (R = a + 1; R <= u - 1; R++) {
        for (M = 0, g = R; g <= u; g++) M = M + Math.abs(r.get(g, R - 1));
        if (M !== 0) {
          for (m = 0, g = u; g >= R; g--) s[g] = r.get(g, R - 1) / M, m += s[g] * s[g];
          for (E = Math.sqrt(m), s[R] > 0 && (E = -E), m = m - s[R] * E, s[R] = s[R] - E, b = R; b < f; b++) {
            for (I = 0, g = u; g >= R; g--) I += s[g] * r.get(g, b);
            for (I = I / m, g = R; g <= u; g++) r.set(g, b, r.get(g, b) - I * s[g]);
          }
          for (g = 0; g <= u; g++) {
            for (I = 0, b = u; b >= R; b--) I += s[b] * r.get(g, b);
            for (I = I / m, b = R; b <= u; b++) r.set(g, b, r.get(g, b) - I * s[b]);
          }
          s[R] = M * s[R], r.set(R, R - 1, M * E);
        }
      }
      for (g = 0; g < f; g++) for (b = 0; b < f; b++) n.set(g, b, g === b ? 1 : 0);
      for (R = u - 1; R >= a + 1; R--) if (r.get(R, R - 1) !== 0) {
        for (g = R + 1; g <= u; g++) s[g] = r.get(g, R - 1);
        for (b = R; b <= u; b++) {
          for (E = 0, g = R; g <= u; g++) E += s[g] * n.get(g, b);
          for (E = E / s[R] / r.get(R, R - 1), g = R; g <= u; g++) n.set(g, b, n.get(g, b) + E * s[g]);
        }
      }
    }
    function sr(f, r, s, n, a) {
      let u = f - 1, I = 0, E = f - 1, m = Number.EPSILON, g = 0, b = 0, R = 0, M = 0, ee = 0, H = 0, W = 0, ce = 0, S, Q, pe, Se, ye, tt, ge, Re, $e, N, Y, le, J, it, je;
      for (S = 0; S < f; S++) for ((S < I || S > E) && (s[S] = a.get(S, S), r[S] = 0), Q = Math.max(S - 1, 0); Q < f; Q++) b = b + Math.abs(a.get(S, Q));
      for (; u >= I; ) {
        for (Se = u; Se > I && (H = Math.abs(a.get(Se - 1, Se - 1)) + Math.abs(a.get(Se, Se)), H === 0 && (H = b), !(Math.abs(a.get(Se, Se - 1)) < m * H)); ) Se--;
        if (Se === u) a.set(u, u, a.get(u, u) + g), s[u] = a.get(u, u), r[u] = 0, u--, ce = 0;
        else if (Se === u - 1) {
          if (ge = a.get(u, u - 1) * a.get(u - 1, u), R = (a.get(u - 1, u - 1) - a.get(u, u)) / 2, M = R * R + ge, W = Math.sqrt(Math.abs(M)), a.set(u, u, a.get(u, u) + g), a.set(u - 1, u - 1, a.get(u - 1, u - 1) + g), Re = a.get(u, u), M >= 0) {
            for (W = R >= 0 ? R + W : R - W, s[u - 1] = Re + W, s[u] = s[u - 1], W !== 0 && (s[u] = Re - ge / W), r[u - 1] = 0, r[u] = 0, Re = a.get(u, u - 1), H = Math.abs(Re) + Math.abs(W), R = Re / H, M = W / H, ee = Math.sqrt(R * R + M * M), R = R / ee, M = M / ee, Q = u - 1; Q < f; Q++) W = a.get(u - 1, Q), a.set(u - 1, Q, M * W + R * a.get(u, Q)), a.set(u, Q, M * a.get(u, Q) - R * W);
            for (S = 0; S <= u; S++) W = a.get(S, u - 1), a.set(S, u - 1, M * W + R * a.get(S, u)), a.set(S, u, M * a.get(S, u) - R * W);
            for (S = I; S <= E; S++) W = n.get(S, u - 1), n.set(S, u - 1, M * W + R * n.get(S, u)), n.set(S, u, M * n.get(S, u) - R * W);
          } else s[u - 1] = Re + R, s[u] = Re + R, r[u - 1] = W, r[u] = -W;
          u = u - 2, ce = 0;
        } else {
          if (Re = a.get(u, u), $e = 0, ge = 0, Se < u && ($e = a.get(u - 1, u - 1), ge = a.get(u, u - 1) * a.get(u - 1, u)), ce === 10) {
            for (g += Re, S = I; S <= u; S++) a.set(S, S, a.get(S, S) - Re);
            H = Math.abs(a.get(u, u - 1)) + Math.abs(a.get(u - 1, u - 2)), Re = $e = 0.75 * H, ge = -0.4375 * H * H;
          }
          if (ce === 30 && (H = ($e - Re) / 2, H = H * H + ge, H > 0)) {
            for (H = Math.sqrt(H), $e < Re && (H = -H), H = Re - ge / (($e - Re) / 2 + H), S = I; S <= u; S++) a.set(S, S, a.get(S, S) - H);
            g += H, Re = $e = ge = 0.964;
          }
          for (ce = ce + 1, ye = u - 2; ye >= Se && (W = a.get(ye, ye), ee = Re - W, H = $e - W, R = (ee * H - ge) / a.get(ye + 1, ye) + a.get(ye, ye + 1), M = a.get(ye + 1, ye + 1) - W - ee - H, ee = a.get(ye + 2, ye + 1), H = Math.abs(R) + Math.abs(M) + Math.abs(ee), R = R / H, M = M / H, ee = ee / H, !(ye === Se || Math.abs(a.get(ye, ye - 1)) * (Math.abs(M) + Math.abs(ee)) < m * (Math.abs(R) * (Math.abs(a.get(ye - 1, ye - 1)) + Math.abs(W) + Math.abs(a.get(ye + 1, ye + 1)))))); ) ye--;
          for (S = ye + 2; S <= u; S++) a.set(S, S - 2, 0), S > ye + 2 && a.set(S, S - 3, 0);
          for (pe = ye; pe <= u - 1 && (it = pe !== u - 1, pe !== ye && (R = a.get(pe, pe - 1), M = a.get(pe + 1, pe - 1), ee = it ? a.get(pe + 2, pe - 1) : 0, Re = Math.abs(R) + Math.abs(M) + Math.abs(ee), Re !== 0 && (R = R / Re, M = M / Re, ee = ee / Re)), Re !== 0); pe++) if (H = Math.sqrt(R * R + M * M + ee * ee), R < 0 && (H = -H), H !== 0) {
            for (pe !== ye ? a.set(pe, pe - 1, -H * Re) : Se !== ye && a.set(pe, pe - 1, -a.get(pe, pe - 1)), R = R + H, Re = R / H, $e = M / H, W = ee / H, M = M / R, ee = ee / R, Q = pe; Q < f; Q++) R = a.get(pe, Q) + M * a.get(pe + 1, Q), it && (R = R + ee * a.get(pe + 2, Q), a.set(pe + 2, Q, a.get(pe + 2, Q) - R * W)), a.set(pe, Q, a.get(pe, Q) - R * Re), a.set(pe + 1, Q, a.get(pe + 1, Q) - R * $e);
            for (S = 0; S <= Math.min(u, pe + 3); S++) R = Re * a.get(S, pe) + $e * a.get(S, pe + 1), it && (R = R + W * a.get(S, pe + 2), a.set(S, pe + 2, a.get(S, pe + 2) - R * ee)), a.set(S, pe, a.get(S, pe) - R), a.set(S, pe + 1, a.get(S, pe + 1) - R * M);
            for (S = I; S <= E; S++) R = Re * n.get(S, pe) + $e * n.get(S, pe + 1), it && (R = R + W * n.get(S, pe + 2), n.set(S, pe + 2, n.get(S, pe + 2) - R * ee)), n.set(S, pe, n.get(S, pe) - R), n.set(S, pe + 1, n.get(S, pe + 1) - R * M);
          }
        }
      }
      if (b !== 0) {
        for (u = f - 1; u >= 0; u--) if (R = s[u], M = r[u], M === 0) for (Se = u, a.set(u, u, 1), S = u - 1; S >= 0; S--) {
          for (ge = a.get(S, S) - R, ee = 0, Q = Se; Q <= u; Q++) ee = ee + a.get(S, Q) * a.get(Q, u);
          if (r[S] < 0) W = ge, H = ee;
          else if (Se = S, r[S] === 0 ? a.set(S, u, ge !== 0 ? -ee / ge : -ee / (m * b)) : (Re = a.get(S, S + 1), $e = a.get(S + 1, S), M = (s[S] - R) * (s[S] - R) + r[S] * r[S], tt = (Re * H - W * ee) / M, a.set(S, u, tt), a.set(S + 1, u, Math.abs(Re) > Math.abs(W) ? (-ee - ge * tt) / Re : (-H - $e * tt) / W)), tt = Math.abs(a.get(S, u)), m * tt * tt > 1) for (Q = S; Q <= u; Q++) a.set(Q, u, a.get(Q, u) / tt);
        }
        else if (M < 0) for (Se = u - 1, Math.abs(a.get(u, u - 1)) > Math.abs(a.get(u - 1, u)) ? (a.set(u - 1, u - 1, M / a.get(u, u - 1)), a.set(u - 1, u, -(a.get(u, u) - R) / a.get(u, u - 1))) : (je = ar(0, -a.get(u - 1, u), a.get(u - 1, u - 1) - R, M), a.set(u - 1, u - 1, je[0]), a.set(u - 1, u, je[1])), a.set(u, u - 1, 0), a.set(u, u, 1), S = u - 2; S >= 0; S--) {
          for (N = 0, Y = 0, Q = Se; Q <= u; Q++) N = N + a.get(S, Q) * a.get(Q, u - 1), Y = Y + a.get(S, Q) * a.get(Q, u);
          if (ge = a.get(S, S) - R, r[S] < 0) W = ge, ee = N, H = Y;
          else if (Se = S, r[S] === 0 ? (je = ar(-N, -Y, ge, M), a.set(S, u - 1, je[0]), a.set(S, u, je[1])) : (Re = a.get(S, S + 1), $e = a.get(S + 1, S), le = (s[S] - R) * (s[S] - R) + r[S] * r[S] - M * M, J = (s[S] - R) * 2 * M, le === 0 && J === 0 && (le = m * b * (Math.abs(ge) + Math.abs(M) + Math.abs(Re) + Math.abs($e) + Math.abs(W))), je = ar(Re * ee - W * N + M * Y, Re * H - W * Y - M * N, le, J), a.set(S, u - 1, je[0]), a.set(S, u, je[1]), Math.abs(Re) > Math.abs(W) + Math.abs(M) ? (a.set(S + 1, u - 1, (-N - ge * a.get(S, u - 1) + M * a.get(S, u)) / Re), a.set(S + 1, u, (-Y - ge * a.get(S, u) - M * a.get(S, u - 1)) / Re)) : (je = ar(-ee - $e * a.get(S, u - 1), -H - $e * a.get(S, u), W, M), a.set(S + 1, u - 1, je[0]), a.set(S + 1, u, je[1]))), tt = Math.max(Math.abs(a.get(S, u - 1)), Math.abs(a.get(S, u))), m * tt * tt > 1) for (Q = S; Q <= u; Q++) a.set(Q, u - 1, a.get(Q, u - 1) / tt), a.set(Q, u, a.get(Q, u) / tt);
        }
        for (S = 0; S < f; S++) if (S < I || S > E) for (Q = S; Q < f; Q++) n.set(S, Q, a.get(S, Q));
        for (Q = f - 1; Q >= I; Q--) for (S = I; S <= E; S++) {
          for (W = 0, pe = I; pe <= Math.min(Q, E); pe++) W = W + n.get(S, pe) * a.get(pe, Q);
          n.set(S, Q, W);
        }
      }
    }
    function ar(f, r, s, n) {
      let a, u;
      return Math.abs(s) > Math.abs(n) ? (a = n / s, u = s + a * n, [
        (f + a * r) / u,
        (r - a * f) / u
      ]) : (a = s / n, u = n + a * s, [
        (a * f + r) / u,
        (a * r - f) / u
      ]);
    }
    class fc {
      constructor(r) {
        if (r = Z.checkMatrix(r), !r.isSymmetric()) throw new Error("Matrix is not symmetric");
        let s = r, n = s.rows, a = new re(n, n), u = true, I, E, m;
        for (E = 0; E < n; E++) {
          let g = 0;
          for (m = 0; m < E; m++) {
            let b = 0;
            for (I = 0; I < m; I++) b += a.get(m, I) * a.get(E, I);
            b = (s.get(E, m) - b) / a.get(m, m), a.set(E, m, b), g = g + b * b;
          }
          for (g = s.get(E, E) - g, u && (u = g > 0), a.set(E, E, Math.sqrt(Math.max(g, 0))), m = E + 1; m < n; m++) a.set(E, m, 0);
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
    class pc {
      constructor(r, s = {}) {
        r = Z.checkMatrix(r);
        let { Y: n } = s;
        const { scaleScores: a = false, maxIterations: u = 1e3, terminationCriteria: I = 1e-10 } = s;
        let E;
        if (n) {
          if (e.isAnyArray(n) && typeof n[0] == "number" ? n = re.columnVector(n) : n = Z.checkMatrix(n), n.rows !== r.rows) throw new Error("Y should have the same number of rows as X");
          E = n.getColumnVector(0);
        } else E = r.getColumnVector(0);
        let m = 1, g, b, R, M;
        for (let ee = 0; ee < u && m > I; ee++) R = r.transpose().mmul(E).div(E.transpose().mmul(E).get(0, 0)), R = R.div(R.norm()), g = r.mmul(R).div(R.transpose().mmul(R).get(0, 0)), ee > 0 && (m = g.clone().sub(M).pow(2).sum()), M = g.clone(), n ? (b = n.transpose().mmul(g).div(g.transpose().mmul(g).get(0, 0)), b = b.div(b.norm()), E = n.mmul(b).div(b.transpose().mmul(b).get(0, 0))) : E = g;
        if (n) {
          let ee = r.transpose().mmul(g).div(g.transpose().mmul(g).get(0, 0));
          ee = ee.div(ee.norm());
          let H = r.clone().sub(g.clone().mmul(ee.transpose())), W = E.transpose().mmul(g).div(g.transpose().mmul(g).get(0, 0)), ce = n.clone().sub(g.clone().mulS(W.get(0, 0)).mmul(b.transpose()));
          this.t = g, this.p = ee.transpose(), this.w = R.transpose(), this.q = b, this.u = E, this.s = g.transpose().mmul(g), this.xResidual = H, this.yResidual = ce, this.betas = W;
        } else this.w = R.transpose(), this.s = g.transpose().mmul(g).sqrt(), a ? this.t = g.clone().div(this.s.get(0, 0)) : this.t = g, this.xResidual = r.sub(g.mmul(R.transpose()));
      }
    }
    return Ce.AbstractMatrix = Oe, Ce.CHO = fc, Ce.CholeskyDecomposition = fc, Ce.DistanceMatrix = yi, Ce.EVD = pn, Ce.EigenvalueDecomposition = pn, Ce.LU = z, Ce.LuDecomposition = z, Ce.Matrix = re, Ce.MatrixColumnSelectionView = go, Ce.MatrixColumnView = nr, Ce.MatrixFlipColumnView = dc, Ce.MatrixFlipRowView = A, Ce.MatrixRowSelectionView = F, Ce.MatrixRowView = y, Ce.MatrixSelectionView = q, Ce.MatrixSubView = $, Ce.MatrixTransposeView = X, Ce.NIPALS = pc, Ce.Nipals = pc, Ce.QR = ae, Ce.QrDecomposition = ae, Ce.SVD = me, Ce.SingularValueDecomposition = me, Ce.SymmetricMatrix = _t, Ce.WrapperMatrix1D = se, Ce.WrapperMatrix2D = Z, Ce.correlation = Oo, Ce.covariance = Qt, Ce.default = re, Ce.determinant = _e, Ce.inverse = we, Ce.linearDependencies = Nt, Ce.pseudoInverse = Zt, Ce.solve = Me, Ce.wrap = oe, Ce;
  }
  var bs = jg();
  const kl = Pg(bs), Ye = bs.Matrix;
  kl.Matrix ? kl.Matrix : bs.Matrix;
  const Bl = bs.inverse;
  const _Gn = class _Gn {
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
      this.boundHandleMotionEvent = this.handleMotionEvent.bind(this), this.boundHandleOrientationEvent = this.handleOrientationEvent.bind(this), this.matrixRz = Ye.zeros(3, 3), this.matrixRy = Ye.zeros(3, 3), this.matrixRx = Ye.zeros(3, 3), this.matrixR = Ye.zeros(3, 3), this.matrixRTemp = Ye.zeros(3, 3), this.vectorInput = Ye.zeros(3, 1), this.vectorOutput = Ye.zeros(3, 1), this.gravityENU = new Ye([
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
      if (this.initialized) return _(void 0);
      if (this.initPromise) return this.initPromise;
      this.initPromise = this.doInit(t);
      const i = await this.initPromise;
      return i.isErr() && (this.initPromise = null), i;
    }
    async doInit(t) {
      if (this.disposed) return v(new Ue("IMU provider has been disposed"));
      const i = await this.requestPermissionIfNeeded(t);
      return i.isErr() ? v(i.error) : await this.checkHardwareSupport() ? ("DeviceOrientationEvent" in window && window.addEventListener("deviceorientation", this.boundHandleOrientationEvent), this.initialized = true, _(void 0)) : v(new Ue("Device motion is not supported by this browser"));
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
            if (!await t("prompt", "permission.imu.required")) return v(new Ue("User declined to grant IMU permission"));
            if (await DeviceMotionEvent.requestPermission() !== "granted") return v(new Ue("IMU permission denied"));
          } else return i === "denied" ? v(new Ue("IMU permission denied")) : _(void 0);
        }
        return _(void 0);
      } catch (i) {
        return v(new Ue("Failed to request IMU permission", void 0, i));
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
      if (this.disposed) return v(new Ue("IMU provider has been disposed"));
      if (!this.initialized) {
        const i = await this.init();
        if (i.isErr()) return v(i.error);
      }
      if (this.isAccelerationActive) return _(void 0);
      this.normalizeAccelerationToENU = t.normalizeToENU ?? false, this.accelerationIntervalMs = t.frequency && t.frequency > 0 ? Math.floor(1e3 / t.frequency) : 0, this.accelerationPrevReading = null, this.accelerationAccumulatedX = 0, this.accelerationAccumulatedY = 0, this.accelerationAccumulatedZ = 0, this.accelerationAccumulatedTime = 0, this.accelerationLastEmitTime = 0, this.accelerationTimer !== null && (clearTimeout(this.accelerationTimer), this.accelerationTimer = null);
      try {
        return this.motionEventListenerCount === 0 && window.addEventListener("devicemotion", this.boundHandleMotionEvent, true), this.motionEventListenerCount++, this.isAccelerationActive = true, _(void 0);
      } catch (i) {
        return v(new Ue("Failed to start acceleration monitoring", void 0, i));
      }
    }
    async startGyroscope(t = {}) {
      if (this.disposed) return v(new Ue("IMU provider has been disposed"));
      if (!this.initialized) {
        const i = await this.init();
        if (i.isErr()) return v(i.error);
      }
      if (this.isGyroscopeActive) return _(void 0);
      this.normalizeGyroscopeToENU = t.normalizeToENU ?? false, this.gyroscopeIntervalMs = t.frequency && t.frequency > 0 ? Math.floor(1e3 / t.frequency) : 0, this.gyroscopePrevReading = null, this.gyroscopeAccumulatedX = 0, this.gyroscopeAccumulatedY = 0, this.gyroscopeAccumulatedZ = 0, this.gyroscopeAccumulatedTime = 0, this.gyroscopeLastEmitTime = 0, this.gyroscopeTimer !== null && (clearTimeout(this.gyroscopeTimer), this.gyroscopeTimer = null);
      try {
        return this.motionEventListenerCount === 0 && window.addEventListener("devicemotion", this.boundHandleMotionEvent, true), this.motionEventListenerCount++, this.isGyroscopeActive = true, _(void 0);
      } catch (i) {
        return v(new Ue("Failed to start gyroscope monitoring", void 0, i));
      }
    }
    stopAcceleration() {
      if (!this.isAccelerationActive) return _(void 0);
      try {
        return this.motionEventListenerCount--, this.isAccelerationActive = false, this.lastAccelerationReading = null, this.normalizeAccelerationToENU = false, this.accelerationIntervalMs = 0, this.accelerationPrevReading = null, this.accelerationAccumulatedX = 0, this.accelerationAccumulatedY = 0, this.accelerationAccumulatedZ = 0, this.accelerationAccumulatedTime = 0, this.accelerationLastEmitTime = 0, this.accelerationTimer !== null && (clearTimeout(this.accelerationTimer), this.accelerationTimer = null), this.motionEventListenerCount === 0 && window.removeEventListener("devicemotion", this.boundHandleMotionEvent, true), _(void 0);
      } catch (t) {
        return v(new Ue("Failed to stop acceleration monitoring", void 0, t));
      }
    }
    stopGyroscope() {
      if (!this.isGyroscopeActive) return _(void 0);
      try {
        return this.motionEventListenerCount--, this.isGyroscopeActive = false, this.lastGyroscopeReading = null, this.normalizeGyroscopeToENU = false, this.gyroscopeIntervalMs = 0, this.gyroscopePrevReading = null, this.gyroscopeAccumulatedX = 0, this.gyroscopeAccumulatedY = 0, this.gyroscopeAccumulatedZ = 0, this.gyroscopeAccumulatedTime = 0, this.gyroscopeLastEmitTime = 0, this.gyroscopeTimer !== null && (clearTimeout(this.gyroscopeTimer), this.gyroscopeTimer = null), this.motionEventListenerCount === 0 && window.removeEventListener("devicemotion", this.boundHandleMotionEvent, true), _(void 0);
      } catch (t) {
        return v(new Ue("Failed to stop gyroscope monitoring", void 0, t));
      }
    }
    async getAccelerationReading() {
      if (this.disposed) return v(new Ue("IMU provider has been disposed"));
      if (!this.initialized) {
        const t = await this.init();
        if (t.isErr()) return v(t.error);
      }
      return _(this.lastAccelerationReading);
    }
    async getGyroscopeReading() {
      if (this.disposed) return v(new Ue("IMU provider has been disposed"));
      if (!this.initialized) {
        const t = await this.init();
        if (t.isErr()) return v(t.error);
      }
      return _(this.lastGyroscopeReading);
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
      return this.accelerationListeners.delete(t), this.gyroscopeListeners.delete(t), _(void 0);
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
      if (this.accelerationIntervalMs === 0) {
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
      if (this.gyroscopeIntervalMs === 0) {
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
        const O = this.computeGravityInDeviceFrame(this.deviceOrientation);
        l -= O.x, h -= O.y, d -= O.z;
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
      const i = t.alpha * _Gn.DEG_TO_RAD, o = t.beta * _Gn.DEG_TO_RAD, c = t.gamma * _Gn.DEG_TO_RAD, l = Math.cos(i), h = Math.sin(i), d = Math.cos(o), p = Math.sin(o), O = Math.cos(c), T = Math.sin(c);
      this.matrixRz.set(0, 0, l), this.matrixRz.set(0, 1, -h), this.matrixRz.set(0, 2, 0), this.matrixRz.set(1, 0, h), this.matrixRz.set(1, 1, l), this.matrixRz.set(1, 2, 0), this.matrixRz.set(2, 0, 0), this.matrixRz.set(2, 1, 0), this.matrixRz.set(2, 2, 1), this.matrixRy.set(0, 0, d), this.matrixRy.set(0, 1, 0), this.matrixRy.set(0, 2, p), this.matrixRy.set(1, 0, 0), this.matrixRy.set(1, 1, 1), this.matrixRy.set(1, 2, 0), this.matrixRy.set(2, 0, -p), this.matrixRy.set(2, 1, 0), this.matrixRy.set(2, 2, d), this.matrixRx.set(0, 0, 1), this.matrixRx.set(0, 1, 0), this.matrixRx.set(0, 2, 0), this.matrixRx.set(1, 0, 0), this.matrixRx.set(1, 1, O), this.matrixRx.set(1, 2, -T), this.matrixRx.set(2, 0, 0), this.matrixRx.set(2, 1, T), this.matrixRx.set(2, 2, O), this.multiplyMatricesInPlace(this.matrixRz, this.matrixRy, this.matrixRTemp), this.multiplyMatricesInPlace(this.matrixRTemp, this.matrixRx, this.matrixR);
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
  __publicField(_Gn, "GRAVITY", 9.81);
  __publicField(_Gn, "DEG_TO_RAD", Math.PI / 180);
  let Gn = _Gn;
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
      const i = cc.getPlatformContext(), o = new _ao(i), c = await o.initializeProviders(t);
      return c.isErr() ? v(c.error) : (_ao.instance = o, _(o));
    }
    static getInstance() {
      return _ao.instance ? _(_ao.instance) : v(new bo("Platform services not initialized", to.NOT_INITIALIZED));
    }
    async initializeProviders(t) {
      try {
        this.storageProvider = this.createStorageProvider(t == null ? void 0 : t.storage);
        const i = await Promise.all([
          this.createIMUProvider(t == null ? void 0 : t.imu),
          this.createDeviceOrientationProvider(t == null ? void 0 : t.deviceOrientation)
        ]);
        return this.imuProvider = i[0], this.deviceOrientationProvider = i[1], this.geolocationProvider = await this.createGeolocationProvider(t == null ? void 0 : t.geolocation), this.fileProvider = this.createFileProvider(), this.initialized = true, _(void 0);
      } catch (i) {
        return v(new bo("Failed to initialize platform providers", to.DETECTION_FAILED, i));
      }
    }
    createStorageProvider(t) {
      switch (this.context.environment) {
        case lt.TAURI:
          return new Ng((t == null ? void 0 : t.tauriStorePath) || "user-data.json");
        case lt.WEB:
        case lt.MOBILE_WEB:
        case lt.UNKNOWN:
        default:
          return new Cg((t == null ? void 0 : t.webDbName) || "trackmaker-db", (t == null ? void 0 : t.webStoreName) || "user-data");
      }
    }
    async createGeolocationProvider(t) {
      let i;
      switch (this.context.environment) {
        case lt.TAURI:
          i = new Hg((t == null ? void 0 : t.tauriHandlerName) || "get_geolocation");
          break;
        case lt.WEB:
        case lt.MOBILE_WEB:
        case lt.UNKNOWN:
        default:
          i = new Mg();
          break;
      }
      const o = await i.init(t == null ? void 0 : t.permissionCallback);
      return o.isErr() ? (console.error("Failed to initialize geolocation provider", o.error), null) : i;
    }
    createFileProvider() {
      return {
        init: async () => v(new Ue("File provider not implemented")),
        readFile: async () => v(new Ue("File provider not implemented")),
        writeFile: async () => v(new Ue("File provider not implemented")),
        deleteFile: async () => v(new Ue("File provider not implemented")),
        listFiles: async () => v(new Ue("File provider not implemented")),
        exists: async () => v(new Ue("File provider not implemented")),
        isSupported: () => false
      };
    }
    async createIMUProvider(t) {
      const i = new Gn(), o = await i.init(t == null ? void 0 : t.permissionCallback);
      return o.isErr() ? (console.error("Failed to initialize IMU provider", o.error), null) : i;
    }
    async createDeviceOrientationProvider(t) {
      const i = new Fg(), o = await i.init(t == null ? void 0 : t.permissionCallback);
      return o.isErr() ? (console.error("Failed to initialize device orientation provider", o.error), null) : i;
    }
    getContext() {
      return this.context;
    }
    getStorage() {
      return this.storageProvider ? _(this.storageProvider) : v(new bo("Storage provider not initialized", to.DETECTION_FAILED));
    }
    getGeolocation() {
      return this.geolocationProvider ? _(this.geolocationProvider) : v(new bo("Geolocation provider not initialized", to.DETECTION_FAILED));
    }
    getFile() {
      return this.fileProvider ? _(this.fileProvider) : v(new bo("File provider not initialized", to.DETECTION_FAILED));
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
      return this.imuProvider ? _(this.imuProvider) : v(new bo("IMU provider not initialized", to.DETECTION_FAILED));
    }
    getDeviceOrientation() {
      return this.deviceOrientationProvider ? _(this.deviceOrientationProvider) : v(new bo("Device orientation provider not initialized", to.DETECTION_FAILED));
    }
  };
  __publicField(_ao, "instance", null);
  let ao = _ao;
  Ls = function() {
    return ao.getInstance();
  };
  Vg = function() {
    return typeof navigator > "u" ? false : cc.detectEnvironment() === lt.TAURI;
  };
  class _i {
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
  class zg {
    constructor(t) {
      __publicField(this, "strategies", []);
      __publicField(this, "activeStrategy", null);
      __publicField(this, "watcherCount", 0);
      __publicField(this, "isInitialized", false);
      this.strategies = t;
    }
    async initialise() {
      if (this.isInitialized) return _(void 0);
      for (const t of this.strategies) try {
        if (await t.isAvailable()) {
          if (this.activeStrategy = t, (await this.activeStrategy.initialize()).isErr()) {
            console.info(`[BackendManager] Backend ${t.name} not initialised`);
            continue;
          }
          return this.isInitialized = true, console.info(`[BackendManager] Initialised with ${t.name} backend`), _(void 0);
        } else console.info(`[BackendManager] Fail to initialise with ${t.name} backend, trying fallbacks`);
      } catch (i) {
        console.warn(`[BackendManager] Failed to test ${t.name} backend:`, i);
        continue;
      }
      return v(new ve("No backend available", "BACKEND_NOT_AVAILABLE"));
    }
    async startWatching(t) {
      if (!this.isInitialized) return v(new ve("Backend not initialized", "BACKEND_NOT_INITIALIZED"));
      if (!this.activeStrategy) return v(new ve("No backend available", "BACKEND_NOT_AVAILABLE"));
      if (this.watcherCount === 0) {
        const i = await this.activeStrategy.startWatching(t);
        if (i.isErr()) return console.warn(`[BackendManager] Failed to start ${this.activeStrategy.name} backend:`, i.error), v(i.error);
      } else {
        const i = await this.activeStrategy.startWatching(t);
        if (i.isErr()) return v(i.error);
      }
      return this.watcherCount++, console.info(`[BackendManager] Started watching with ${this.activeStrategy.name} backend (count: ${this.watcherCount})`), _(this.activeStrategy.name);
    }
    async stopWatching() {
      var _a3;
      if (this.watcherCount === 0 || !this.activeStrategy) return _(void 0);
      if (this.watcherCount--, this.watcherCount === 0) {
        const t = await this.activeStrategy.stopWatching();
        if (t.isErr()) return v(new ve(`Failed to stop ${((_a3 = this.activeStrategy) == null ? void 0 : _a3.name) || "unknown"} backend`, "UPDATE_SERVICE_ERROR", t.error));
        console.info("[BackendManager] Stopped watching location");
      } else console.info(`[BackendManager] Decremented watcher count (count: ${this.watcherCount})`);
      return _(void 0);
    }
    async getCurrentPosition() {
      if (!this.isInitialized) return v(new ve("Backend not initialized", "BACKEND_NOT_INITIALIZED"));
      if (!this.activeStrategy) return v(new ve("No backend available for current position", "BACKEND_NOT_AVAILABLE"));
      const t = await this.activeStrategy.getCurrentPosition();
      return t.isErr() ? (console.warn(`[BackendManager] Failed to get location from ${this.activeStrategy.name}:`, t.error), v(t.error)) : t;
    }
    getActiveBackend() {
      var _a3;
      return ((_a3 = this.activeStrategy) == null ? void 0 : _a3.name) || null;
    }
    isWatchingActive() {
      return this.watcherCount > 0;
    }
  }
  class $g {
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
  class Kg {
    constructor() {
      __publicField(this, "currentLocation", null);
      __publicField(this, "currentBackend", null);
      __publicField(this, "eventEmitter");
      this.eventEmitter = new $g();
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
  class qg {
    constructor() {
      __publicField(this, "name", "gps");
      __publicField(this, "provider", null);
      __publicField(this, "watchId", null);
      __publicField(this, "isInitialized", false);
    }
    async initialize() {
      if (this.isInitialized) return _(void 0);
      try {
        const t = Ls();
        if (t.isErr()) return v(new ve("Platform services not available", "BACKEND_NOT_AVAILABLE", t.error));
        const i = t.value.getGeolocationProvider();
        return i ? (this.provider = i, this.isInitialized = true, _(void 0)) : v(new ve("Geolocation provider not available", "BACKEND_NOT_AVAILABLE"));
      } catch (t) {
        return v(new ve("Exception during GPS backend initialization", "UPDATE_SERVICE_ERROR", t));
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
      if (!this.provider) return v(new ve("GPS backend not initialized", "BACKEND_NOT_AVAILABLE"));
      const i = await this.provider.watchPosition((o) => {
        const c = new _i(o.coords.latitude, o.coords.longitude, o.coords.accuracy);
        t(c, "gps");
      });
      return i.isErr() ? v(new ve("Failed to start watching position", "UPDATE_SERVICE_ERROR", i.error)) : (this.watchId = i.value, _(void 0));
    }
    async stopWatching() {
      if (this.watchId !== null && this.provider) {
        const t = this.provider.clearWatch(this.watchId);
        if (t.isErr()) return v(new ve("Failed to stop watching position", "UPDATE_SERVICE_ERROR", t.error));
        this.watchId = null;
      }
      return _(void 0);
    }
    async getCurrentPosition() {
      if (!this.provider) return v(new ve("GPS backend not initialized", "BACKEND_NOT_AVAILABLE"));
      const t = await this.provider.getCurrentPosition();
      if (t.isErr()) return v(new ve("Failed to get current position", "UPDATE_SERVICE_ERROR", t.error));
      const i = t.value;
      return _(new _i(i.coords.latitude, i.coords.longitude, i.coords.accuracy));
    }
  }
  const Yl = "https://ipapi.co/json/";
  class Xg {
    constructor() {
      __publicField(this, "name", "ip");
      __publicField(this, "watchCallbacks", /* @__PURE__ */ new Map());
      __publicField(this, "watchInterval", null);
      __publicField(this, "lastLocation", null);
      __publicField(this, "nextCallbackId", 1);
      __publicField(this, "activeWatcherCount", 0);
    }
    async initialize() {
      return _();
    }
    async isAvailable() {
      try {
        return (await fetch(Yl, {
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
      }, 3e4), this.updateLocation()), _(void 0);
    }
    async stopWatching() {
      try {
        return this.watchCallbacks.clear(), this.activeWatcherCount = 0, this.watchInterval !== null && (clearInterval(this.watchInterval), this.watchInterval = null), this.lastLocation = null, _(void 0);
      } catch (t) {
        return v(new ve("Failed to stop IP location watching", "UPDATE_SERVICE_ERROR", t));
      }
    }
    async getCurrentPosition() {
      try {
        console.info("[IPFallbackBackend] Getting location from IP service");
        const t = await fetch(Yl, {
          signal: AbortSignal.timeout(1e4)
        });
        if (!t.ok) throw new Error(`HTTP error! Status: ${t.status}`);
        const i = await t.json(), o = new _i(i.latitude, i.longitude, 5e4);
        return console.info("[IPFallbackBackend] Successfully retrieved location from IP service"), _(o);
      } catch (t) {
        return v(new ve("Failed to get location from IP service", "POSITION_UNAVAILABLE", t));
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
  let De;
  const od = typeof TextDecoder < "u" ? new TextDecoder("utf-8", {
    ignoreBOM: true,
    fatal: true
  }) : {
    decode: () => {
      throw Error("TextDecoder not available");
    }
  };
  typeof TextDecoder < "u" && od.decode();
  let bn = null;
  function Hr() {
    return (bn === null || bn.byteLength === 0) && (bn = new Uint8Array(De.memory.buffer)), bn;
  }
  function Do(e, t) {
    return e = e >>> 0, od.decode(Hr().subarray(e, e + t));
  }
  let Xr = 0;
  const Dr = typeof TextEncoder < "u" ? new TextEncoder("utf-8") : {
    encode: () => {
      throw Error("TextEncoder not available");
    }
  }, Jg = typeof Dr.encodeInto == "function" ? function(e, t) {
    return Dr.encodeInto(e, t);
  } : function(e, t) {
    const i = Dr.encode(e);
    return t.set(i), {
      read: e.length,
      written: i.length
    };
  };
  function nd(e, t, i) {
    if (i === void 0) {
      const d = Dr.encode(e), p = t(d.length, 1) >>> 0;
      return Hr().subarray(p, p + d.length).set(d), Xr = d.length, p;
    }
    let o = e.length, c = t(o, 1) >>> 0;
    const l = Hr();
    let h = 0;
    for (; h < o; h++) {
      const d = e.charCodeAt(h);
      if (d > 127) break;
      l[c + h] = d;
    }
    if (h !== o) {
      h !== 0 && (e = e.slice(h)), c = i(c, o, o = h + e.length * 3, 1) >>> 0;
      const d = Hr().subarray(c + h, c + o), p = Jg(e, d);
      h += p.written, c = i(c, o, h, 1) >>> 0;
    }
    return Xr = h, c;
  }
  function Zg(e) {
    return e == null;
  }
  let vo = null;
  function xl() {
    return (vo === null || vo.buffer.detached === true || vo.buffer.detached === void 0 && vo.buffer !== De.memory.buffer) && (vo = new DataView(De.memory.buffer)), vo;
  }
  function rd(e) {
    const t = De.__wbindgen_export_0.get(e);
    return De.__externref_table_dealloc(e), t;
  }
  function oa(e, t) {
    if (!(e instanceof t)) throw new Error(`expected instance of ${t.name}`);
  }
  function Ma(e, t, i) {
    oa(e, lo), oa(t, lo), oa(i, Jr);
    const o = De.transform(e.__wbg_ptr, t.__wbg_ptr, i.__wbg_ptr);
    if (o[1]) throw rd(o[0]);
  }
  const jl = typeof FinalizationRegistry > "u" ? {
    register: () => {
    },
    unregister: () => {
    }
  } : new FinalizationRegistry((e) => De.__wbg_point_free(e >>> 0, 1));
  class Jr {
    __destroy_into_raw() {
      const t = this.__wbg_ptr;
      return this.__wbg_ptr = 0, jl.unregister(this), t;
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
      return this.__wbg_ptr = c >>> 0, jl.register(this, this.__wbg_ptr, this), this;
    }
  }
  const Vl = typeof FinalizationRegistry > "u" ? {
    register: () => {
    },
    unregister: () => {
    }
  } : new FinalizationRegistry((e) => De.__wbg_projection_free(e >>> 0, 1));
  class lo {
    __destroy_into_raw() {
      const t = this.__wbg_ptr;
      return this.__wbg_ptr = 0, Vl.unregister(this), t;
    }
    free() {
      const t = this.__destroy_into_raw();
      De.__wbg_projection_free(t, 0);
    }
    constructor(t) {
      const i = nd(t, De.__wbindgen_malloc, De.__wbindgen_realloc), o = Xr, c = De.projection_new(i, o);
      if (c[2]) throw rd(c[1]);
      return this.__wbg_ptr = c[0] >>> 0, Vl.register(this, this.__wbg_ptr, this), this;
    }
    get projName() {
      let t, i;
      try {
        const o = De.projection_projName(this.__wbg_ptr);
        return t = o[0], i = o[1], Do(o[0], o[1]);
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
        return t = o[0], i = o[1], Do(o[0], o[1]);
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
        return t = o[0], i = o[1], Do(o[0], o[1]);
      } finally {
        De.__wbindgen_free(t, i, 1);
      }
    }
  }
  async function Qg(e, t) {
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
  function eO() {
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
      return parseFloat(Do(t, i));
    }, e.wbg.__wbg_parseInt_7deceafc75400ae4 = function(t, i, o) {
      return parseInt(Do(t, i), o);
    }, e.wbg.__wbg_slice_ab0b7e3d75dccdee = function(t, i, o) {
      return t.slice(i >>> 0, o >>> 0);
    }, e.wbg.__wbindgen_error_new = function(t, i) {
      return new Error(Do(t, i));
    }, e.wbg.__wbindgen_init_externref_table = function() {
      const t = De.__wbindgen_export_0, i = t.grow(4);
      t.set(0, void 0), t.set(i + 0, void 0), t.set(i + 1, null), t.set(i + 2, true), t.set(i + 3, false);
    }, e.wbg.__wbindgen_string_get = function(t, i) {
      const o = i, c = typeof o == "string" ? o : void 0;
      var l = Zg(c) ? 0 : nd(c, De.__wbindgen_malloc, De.__wbindgen_realloc), h = Xr;
      xl().setInt32(t + 4, h, true), xl().setInt32(t + 0, l, true);
    }, e.wbg.__wbindgen_throw = function(t, i) {
      throw new Error(Do(t, i));
    }, e;
  }
  function tO(e, t) {
    return De = e.exports, sd.__wbindgen_wasm_module = t, vo = null, bn = null, De.__wbindgen_start(), De;
  }
  async function sd(e) {
    if (De !== void 0) return De;
    typeof e < "u" && (Object.getPrototypeOf(e) === Object.prototype ? { module_or_path: e } = e : console.warn("using deprecated parameters for the initialization function; pass a single object instead")), typeof e > "u" && (e = new URL("" + new URL("proj4rs_bg-Biz-E4lt.wasm", import.meta.url).href, import.meta.url));
    const t = eO();
    (typeof e == "string" || typeof Request == "function" && e instanceof Request || typeof URL == "function" && e instanceof URL) && (e = fetch(e));
    const { instance: i, module: o } = await Qg(await e, t);
    return tO(i, o);
  }
  const iO = "" + new URL("proj4rs_bg-Biz-E4lt.wasm", import.meta.url).href, kn = {
    WGS84: "+proj=longlat +datum=WGS84 +no_defs",
    GRS80: "+proj=latlong +ellps=GRS80 +no_defs",
    UTM_ZONE_50N: "+proj=utm +zone=50 +datum=WGS84 +units=m +no_defs",
    UTM_ZONE_51N: "+proj=utm +zone=51 +datum=WGS84 +units=m +no_defs",
    CGCS2000_3_DEGREE: "+proj=tmerc +lat_0=0 +lon_0=117 +k=1 +x_0=500000 +y_0=0 +ellps=GRS80 +units=m +no_defs",
    BEIJING_1954: "+proj=tmerc +lat_0=0 +lon_0=117 +k=1 +x_0=500000 +y_0=0 +ellps=krass +units=m +no_defs",
    WEB_MERCATOR: "+proj=merc +a=6378137 +b=6378137 +lat_ts=0.0 +lon_0=0.0 +x_0=0.0 +y_0=0 +k=1.0 +units=m +nadgrids=@null +wktext +no_defs"
  };
  let na = false;
  async function ad() {
    if (!na) try {
      console.log("[Proj4WASM] Fetching WASM module..."), await sd({
        module_or_path: iO
      }), na = true, console.log("[Proj4WASM] WASM module loaded successfully.");
    } catch (e) {
      console.warn("[Proj4WASM] Failed to load WASM module, using the JS fallback."), console.error(e), na = true;
    }
  }
  async function zl(e, t, i) {
    try {
      await ad();
      const o = new lo(e), c = new lo(t), l = new Jr(i[0], i[1], 0);
      Ma(o, c, l);
      const h = [
        l.x,
        l.y
      ];
      return o.free(), c.free(), l.free(), h;
    } catch (o) {
      throw new Error(`Failed to transform coordinate: ${o instanceof Error ? o.message : String(o)}`);
    }
  }
  function oO(e, t) {
    const i = t.x - e.x, o = t.y - e.y;
    return Math.sqrt(i * i + o * o);
  }
  $l = function(e, t) {
    const o = e.latitude * Math.PI / 180, c = t.latitude * Math.PI / 180, l = (t.latitude - e.latitude) * Math.PI / 180, h = (t.longitude - e.longitude) * Math.PI / 180, d = Math.sin(l / 2) * Math.sin(l / 2) + Math.cos(o) * Math.cos(c) * Math.sin(h / 2) * Math.sin(h / 2);
    return 6371e3 * (2 * Math.atan2(Math.sqrt(d), Math.sqrt(1 - d)));
  };
  async function nO(e, t, i = {}) {
    const { projection: o = kn.CGCS2000_3_DEGREE, useHaversine: c = false } = i;
    if (c) return $l(e, t);
    try {
      const l = await zl(kn.WGS84, o, [
        e.longitude,
        e.latitude
      ]), h = await zl(kn.WGS84, o, [
        t.longitude,
        t.latitude
      ]);
      return oO({
        x: l[0],
        y: l[1]
      }, {
        x: h[0],
        y: h[1]
      });
    } catch (l) {
      return console.warn("Failed to use proj4 distance calculation, falling back to haversine:", l), $l(e, t);
    }
  }
  yR = async function(e, t = {}) {
    if (e.length < 2) return 0;
    let i = 0;
    for (let o = 1; o < e.length; o++) i += await nO(e[o - 1], e[o], t);
    return i;
  };
  bR = function(e) {
    return e < 1e3 ? `${Math.round(e)} m` : e < 1e4 ? `${(e / 1e3).toFixed(1)} km` : `${Math.round(e / 1e3)} km`;
  };
  const { sin: $t, cos: rO, sqrt: uc, abs: Zr, PI: Wt } = Math, Kl = 6378245, ql = 0.006693421622965823;
  function cd(e, t) {
    return e >= 72.004 && e <= 137.8347 && t >= 0.8293 && t <= 55.8271;
  }
  function sO(e, t) {
    let i = -100 + 2 * e + 3 * t + 0.2 * t * t + 0.1 * e * t + 0.2 * uc(Zr(e));
    return i += (20 * $t(6 * e * Wt) + 20 * $t(2 * e * Wt)) * 2 / 3, i += (20 * $t(t * Wt) + 40 * $t(t / 3 * Wt)) * 2 / 3, i += (160 * $t(t / 12 * Wt) + 320 * $t(t * Wt / 30)) * 2 / 3, i;
  }
  function aO(e, t) {
    let i = 300 + e + 2 * t + 0.1 * e * e + 0.1 * e * t + 0.1 * uc(Zr(e));
    return i += (20 * $t(6 * e * Wt) + 20 * $t(2 * e * Wt)) * 2 / 3, i += (20 * $t(e * Wt) + 40 * $t(e / 3 * Wt)) * 2 / 3, i += (150 * $t(e / 12 * Wt) + 300 * $t(e / 30 * Wt)) * 2 / 3, i;
  }
  function cO(e, t) {
    let i = aO(e - 105, t - 35), o = sO(e - 105, t - 35);
    const c = t / 180 * Wt;
    let l = $t(c);
    l = 1 - ql * l * l;
    const h = uc(l);
    return i = i * 180 / (Kl / h * rO(c) * Wt), o = o * 180 / (Kl * (1 - ql) / (l * h) * Wt), [
      i,
      o
    ];
  }
  function ho(e) {
    const [t, i] = e;
    if (!cd(t, i)) return [
      t,
      i
    ];
    const o = cO(t, i);
    return [
      t + o[0],
      i + o[1]
    ];
  }
  function cn(e) {
    const [t, i] = e;
    if (!cd(t, i)) return [
      t,
      i
    ];
    let [o, c] = [
      t,
      i
    ], l = ho([
      o,
      c
    ]), h = l[0] - t, d = l[1] - i;
    for (; Zr(h) > 1e-6 || Zr(d) > 1e-6; ) o -= h, c -= d, l = ho([
      o,
      c
    ]), h = l[0] - t, d = l[1] - i;
    return [
      o,
      c
    ];
  }
  const { sin: Qr, cos: es, atan2: ld, sqrt: ud, PI: lO } = Math, ts = lO * 3e3 / 180;
  function Jo(e) {
    const [t, i] = e, o = t - 65e-4, c = i - 6e-3, l = ud(o * o + c * c) - 2e-5 * Qr(c * ts), h = ld(c, o) - 3e-6 * es(o * ts), d = l * es(h), p = l * Qr(h);
    return [
      d,
      p
    ];
  }
  function ln(e) {
    const [t, i] = e, o = t, c = i, l = ud(o * o + c * c) + 2e-5 * Qr(c * ts), h = ld(c, o) + 3e-6 * es(o * ts), d = l * es(h) + 65e-4, p = l * Qr(h) + 6e-3;
    return [
      d,
      p
    ];
  }
  const Xl = 180 / Math.PI, Jl = Math.PI / 180, is = 6378137, Zi = 20037508342789244e-9;
  function Or(e) {
    return [
      e[0] * Xl / is,
      (Math.PI * 0.5 - 2 * Math.atan(Math.exp(-e[1] / is))) * Xl
    ];
  }
  function vs(e) {
    const t = Math.abs(e[0]) <= 180 ? e[0] : e[0] - (e[0] < 0 ? -1 : 1) * 360, i = [
      is * t * Jl,
      is * Math.log(Math.tan(Math.PI * 0.25 + 0.5 * e[1] * Jl))
    ];
    return i[0] > Zi && (i[0] = Zi), i[0] < -Zi && (i[0] = -Zi), i[1] > Zi && (i[1] = Zi), i[1] < -Zi && (i[1] = -Zi), i;
  }
  const { abs: os } = Math, Zl = [
    1289059486e-2,
    836237787e-2,
    5591021,
    348198983e-2,
    167804312e-2,
    0
  ], Ql = [
    75,
    60,
    45,
    30,
    15,
    0
  ], uO = [
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
  ], hO = [
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
  function hd(e, t, i) {
    const o = os(t) / i[9];
    let c = i[0] + i[1] * os(e), l = i[2] + i[3] * o + i[4] * Math.pow(o, 2) + i[5] * Math.pow(o, 3) + i[6] * Math.pow(o, 4) + i[7] * Math.pow(o, 5) + i[8] * Math.pow(o, 6);
    return c *= e < 0 ? -1 : 1, l *= t < 0 ? -1 : 1, [
      c,
      l
    ];
  }
  function Cs(e) {
    const [t, i] = e;
    let o = [];
    for (let c = 0; c < Ql.length; c++) if (os(i) > Ql[c]) {
      o = hO[c];
      break;
    }
    return hd(t, i, o);
  }
  function Rr(e) {
    const [t, i] = e;
    let o = [];
    for (let c = 0; c < Zl.length; c++) if (os(i) >= Zl[c]) {
      o = uO[c];
      break;
    }
    return hd(t, i, o);
  }
  function Qi(e, t) {
    if (!e) throw new Error(t);
  }
  function dd(e) {
    return !!e && Object.prototype.toString.call(e) === "[object Array]";
  }
  function eu(e) {
    return !isNaN(Number(e)) && e !== null && !dd(e);
  }
  function ni(...e) {
    const t = e.length - 1;
    return function(...i) {
      let o = t, c = e[t].apply(null, i);
      for (; o--; ) c = e[o].call(null, c);
      return c;
    };
  }
  function fd(e, t, i = false) {
    if (e === null) return;
    let o, c, l, h, d, p, O = 0, T = 0, w, C;
    const { type: L } = e, P = L === "FeatureCollection", D = L === "Feature", de = P ? e.features.length : 1;
    for (let ie = 0; ie < de; ie++) {
      w = P ? e.features[ie].geometry : D ? e.geometry : e, C = w ? w.type === "GeometryCollection" : false, p = C ? w.geometries.length : 1;
      for (let K = 0; K < p; K++) {
        let V = 0, G = 0;
        if (h = C ? w.geometries[K] : w, h === null) continue;
        const ue = h.type;
        switch (O = i && (ue === "Polygon" || ue === "MultiPolygon") ? 1 : 0, ue) {
          case null:
            break;
          case "Point":
            if (d = h.coordinates, t(d, T, ie, V, G) === false) return false;
            T++, V++;
            break;
          case "LineString":
          case "MultiPoint":
            for (d = h.coordinates, o = 0; o < d.length; o++) {
              if (t(d[o], T, ie, V, G) === false) return false;
              T++, ue === "MultiPoint" && V++;
            }
            ue === "LineString" && V++;
            break;
          case "Polygon":
          case "MultiLineString":
            for (d = h.coordinates, o = 0; o < d.length; o++) {
              for (c = 0; c < d[o].length - O; c++) {
                if (t(d[o][c], T, ie, V, G) === false) return false;
                T++;
              }
              ue === "MultiLineString" && V++, ue === "Polygon" && G++;
            }
            ue === "Polygon" && V++;
            break;
          case "MultiPolygon":
            for (d = h.coordinates, o = 0; o < d.length; o++) {
              for (G = 0, c = 0; c < d[o].length; c++) {
                for (l = 0; l < d[o][c].length - O; l++) {
                  if (t(d[o][c][l], T, ie, V, G) === false) return false;
                  T++;
                }
                G++;
              }
              V++;
            }
            break;
          case "GeometryCollection":
            for (o = 0; o < h.geometries.length; o++) if (fd(h.geometries[o], t, i) === false) return false;
            break;
          default:
            throw new Error("Unknown Geometry Type");
        }
      }
    }
  }
  var rt;
  (function(e) {
    e.WGS84 = "WGS84", e.WGS1984 = "WGS84", e.EPSG4326 = "WGS84", e.GCJ02 = "GCJ02", e.AMap = "GCJ02", e.BD09 = "BD09", e.BD09LL = "BD09", e.Baidu = "BD09", e.BMap = "BD09", e.BD09MC = "BD09MC", e.BD09Meter = "BD09MC", e.EPSG3857 = "EPSG3857", e.EPSG900913 = "EPSG3857", e.EPSG102100 = "EPSG3857", e.WebMercator = "EPSG3857", e.WM = "EPSG3857";
  })(rt || (rt = {}));
  const dO = {
    to: {
      [rt.GCJ02]: ho,
      [rt.BD09]: ni(ln, ho),
      [rt.BD09MC]: ni(Cs, ln, ho),
      [rt.EPSG3857]: vs
    }
  }, fO = {
    to: {
      [rt.WGS84]: cn,
      [rt.BD09]: ln,
      [rt.BD09MC]: ni(Cs, ln),
      [rt.EPSG3857]: ni(vs, cn)
    }
  }, pO = {
    to: {
      [rt.WGS84]: ni(cn, Jo),
      [rt.GCJ02]: Jo,
      [rt.EPSG3857]: ni(vs, cn, Jo),
      [rt.BD09MC]: Cs
    }
  }, TO = {
    to: {
      [rt.WGS84]: Or,
      [rt.GCJ02]: ni(ho, Or),
      [rt.BD09]: ni(ln, ho, Or),
      [rt.BD09MC]: ni(Cs, ln, ho, Or)
    }
  }, IO = {
    to: {
      [rt.WGS84]: ni(cn, Jo, Rr),
      [rt.GCJ02]: ni(Jo, Rr),
      [rt.EPSG3857]: ni(vs, cn, Jo, Rr),
      [rt.BD09]: Rr
    }
  }, EO = {
    WGS84: dO,
    GCJ02: fO,
    BD09: pO,
    EPSG3857: TO,
    BD09MC: IO
  };
  var mO = EO;
  function gO(e, t, i) {
    if (Qi(!!e, "The args[0] input coordinate is required"), Qi(!!t, "The args[1] original coordinate system is required"), Qi(!!i, "The args[2] target coordinate system is required"), t === i) return e;
    const o = mO[t];
    Qi(!!o, `Invalid original coordinate system: ${t}`);
    const c = o.to[i];
    Qi(!!c, `Invalid target coordinate system: ${i}`);
    const l = typeof e;
    if (Qi(l === "string" || l === "object", `Invalid input coordinate type: ${l}`), l === "string") try {
      e = JSON.parse(e);
    } catch {
      throw new Error(`Invalid input coordinate: ${e}`);
    }
    let h = false;
    dd(e) && (Qi(e.length >= 2, `Invalid input coordinate: ${e}`), Qi(eu(e[0]) && eu(e[1]), `Invalid input coordinate: ${e}`), e = e.map(Number), h = true);
    const d = c;
    return h ? d(e) : (fd(e, (p) => {
      [p[0], p[1]] = d(p);
    }), e);
  }
  const ra = Object.assign(Object.assign({}, rt), {
    CRSTypes: rt,
    transform: gO
  });
  class pd {
    constructor(t) {
      __publicField(this, "referencePoint", null);
      __publicField(this, "localProjection", null);
      __publicField(this, "geolocationCorrectionEnabled");
      this.geolocationCorrectionEnabled = this.getGeolocationCorrectionSetting(), (t == null ? void 0 : t.referencePoint) && this.setReferencePoint(t.referencePoint, t.projection);
    }
    getGeolocationCorrectionSetting() {
      return Ht("geolocationCorrection") ?? false;
    }
    setReferencePoint(t, i) {
      this.referencePoint = t, this.localProjection = i || `+proj=tmerc +lat_0=${t.latitude} +lon_0=${t.longitude} +k=1 +x_0=0 +y_0=0 +datum=WGS84 +units=m +no_defs`;
    }
    async geographicToLocal(t) {
      if (!this.referencePoint || !this.localProjection) throw new Error("Reference point not set. Call setReferencePoint() first.");
      try {
        const i = new lo(kn.WGS84), o = new lo(this.localProjection), c = new Jr(t.longitude, t.latitude, 0);
        Ma(i, o, c);
        const l = {
          x: c.x,
          y: c.y
        };
        return i.free(), o.free(), c.free(), l;
      } catch {
        return this.geographicToLocalFallback(t);
      }
    }
    async localToGeographic(t) {
      if (!this.referencePoint || !this.localProjection) throw new Error("Reference point not set. Call setReferencePoint() first.");
      try {
        const i = new lo(this.localProjection), o = new lo(kn.WGS84), c = new Jr(t.x, t.y, 0);
        Ma(i, o, c);
        const l = {
          longitude: c.x,
          latitude: c.y
        };
        return i.free(), o.free(), c.free(), l;
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
      const i = 6371e3, o = this.referencePoint.latitude * Math.PI / 180, c = this.referencePoint.longitude * Math.PI / 180, l = (t.y / i + o) * 180 / Math.PI, h = (t.x / (i * Math.cos(o)) + c) * 180 / Math.PI;
      return {
        latitude: l,
        longitude: h
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
  function OO(e) {
    const t = ra.transform([
      e.longitude,
      e.latitude
    ], ra.WGS84, ra.GCJ02);
    return new _i(t[1], t[0]);
  }
  new pd();
  class RO {
    constructor(t) {
      __publicField(this, "state");
      __publicField(this, "config");
      __publicField(this, "coordinateTransformer");
      __publicField(this, "lastKalmanGain", null);
      __publicField(this, "isInitialized", false);
      __publicField(this, "debugEnabled", false);
      this.config = {
        initialAccelerationUncertainty: 2,
        initialPositionUncertainty: 20,
        initialVelocityUncertainty: 10,
        gpsSpeedUncertainty: 4,
        imuAccelerationUncertainty: 0.1,
        ...t
      }, this.coordinateTransformer = new pd(), this.state = this.createInitialState();
    }
    createInitialState() {
      return {
        position: {
          x: 0,
          y: 0
        },
        velocity: {
          x: 0,
          y: 0
        },
        acceleration: {
          x: 0,
          y: 0
        },
        covariance: new Ye([
          [
            Math.pow(this.config.initialPositionUncertainty, 2),
            0,
            0,
            0,
            0,
            0
          ],
          [
            0,
            Math.pow(this.config.initialPositionUncertainty, 2),
            0,
            0,
            0,
            0
          ],
          [
            0,
            0,
            Math.pow(this.config.initialVelocityUncertainty, 2),
            0,
            0,
            0
          ],
          [
            0,
            0,
            0,
            Math.pow(this.config.initialVelocityUncertainty, 2),
            0,
            0
          ],
          [
            0,
            0,
            0,
            0,
            Math.pow(this.config.initialAccelerationUncertainty, 2),
            0
          ],
          [
            0,
            0,
            0,
            0,
            0,
            Math.pow(this.config.initialAccelerationUncertainty, 2)
          ]
        ]),
        timestamp: performance.now()
      };
    }
    async initialize(t) {
      if (t.latitude === 0 && t.longitude === 0) throw new Error("Invalid GPS coordinates: Cannot initialize Kalman filter with (0, 0)");
      this.coordinateTransformer.isInitialized() || this.coordinateTransformer.setReferencePoint({
        longitude: t.longitude,
        latitude: t.latitude
      });
      const i = await this.coordinateTransformer.geographicToLocal({
        longitude: t.longitude,
        latitude: t.latitude
      });
      this.state.position = {
        x: i.x,
        y: i.y
      }, this.state.timestamp = t.timestamp;
      const o = t.speed !== void 0 && t.speed !== null && t.heading !== void 0 && t.heading !== null;
      if (o) {
        const d = this.gpsVelocityToLocal(t.speed, t.heading);
        this.state.velocity = {
          x: d.x,
          y: d.y
        };
      }
      const c = this.gpsAccuracyToSigma(t.accuracy), l = o ? this.config.gpsSpeedUncertainty : this.config.initialVelocityUncertainty, h = this.config.initialAccelerationUncertainty;
      this.state.covariance = new Ye([
        [
          c * c,
          0,
          0,
          0,
          0,
          0
        ],
        [
          0,
          c * c,
          0,
          0,
          0,
          0
        ],
        [
          0,
          0,
          l * l,
          0,
          0,
          0
        ],
        [
          0,
          0,
          0,
          l * l,
          0,
          0
        ],
        [
          0,
          0,
          0,
          0,
          h * h,
          0
        ],
        [
          0,
          0,
          0,
          0,
          0,
          h * h
        ]
      ]), this.debugEnabled && console.log("[KalmanFilter] Initialized:", {
        position: this.state.position,
        velocity: this.state.velocity,
        hasVelocity: o,
        positionUncertainty: c,
        velocityUncertainty: l,
        initialTimestamp: this.state.timestamp,
        gpsTimestamp: t.timestamp
      }), this.isInitialized = true;
    }
    predict(t) {
      this.isInitialized && (this.predictInternal(t), this.state.timestamp += t * 1e3);
    }
    async updateGPS(t) {
      if (!this.isInitialized) return;
      if (t.latitude === 0 && t.longitude === 0) {
        console.warn("[PureKalmanFilter] Ignoring invalid GPS coordinates (0, 0)");
        return;
      }
      const i = (t.timestamp - this.state.timestamp) / 1e3;
      i > 0 && this.predictInternal(i), await this.updateGPSInternal(t), this.state.timestamp = t.timestamp;
    }
    updateIMU(t) {
      if (!this.isInitialized) return;
      const i = (t.timestamp - this.state.timestamp) / 1e3;
      i > 0 ? (this.predictInternal(i), this.state.timestamp = t.timestamp) : i < 0 ? (this.debugEnabled && console.log("[KalmanFilter] IMU reading before state, resetting timestamp:", {
        stateTimestamp: this.state.timestamp,
        imuTimestamp: t.timestamp,
        dt: i
      }), this.state.timestamp = t.timestamp) : this.debugEnabled && console.log("[KalmanFilter] IMU reading at same timestamp"), t.acceleration && this.updateIMUInternal(t.acceleration);
    }
    async getFilteredPosition() {
      if (!this.isInitialized) throw new Error("Kalman filter not initialized - cannot get filtered position");
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
      return this.lastKalmanGain;
    }
    isFilterInitialized() {
      return this.isInitialized;
    }
    predictInternal(t) {
      if (t <= 0) {
        this.debugEnabled && console.warn("[KalmanFilter] predictInternal called with non-positive dt:", t);
        return;
      }
      const i = new Ye([
        [
          1,
          0,
          t,
          0,
          0.5 * t * t,
          0
        ],
        [
          0,
          1,
          0,
          t,
          0,
          0.5 * t * t
        ],
        [
          0,
          0,
          1,
          0,
          t,
          0
        ],
        [
          0,
          0,
          0,
          1,
          0,
          t
        ],
        [
          0,
          0,
          0,
          0,
          1,
          0
        ],
        [
          0,
          0,
          0,
          0,
          0,
          1
        ]
      ]), o = this.config.initialAccelerationUncertainty, c = new Ye([
        [
          Math.pow(t, 4) / 4,
          0,
          Math.pow(t, 3) / 2,
          0,
          Math.pow(t, 2) / 2,
          0
        ],
        [
          0,
          Math.pow(t, 4) / 4,
          0,
          Math.pow(t, 3) / 2,
          0,
          Math.pow(t, 2) / 2
        ],
        [
          Math.pow(t, 3) / 2,
          0,
          t * t,
          0,
          t,
          0
        ],
        [
          0,
          Math.pow(t, 3) / 2,
          0,
          t * t,
          0,
          t
        ],
        [
          Math.pow(t, 2) / 2,
          0,
          t,
          0,
          1,
          0
        ],
        [
          0,
          Math.pow(t, 2) / 2,
          0,
          t,
          0,
          1
        ]
      ]).mul(o * o), l = new Ye([
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
        ],
        [
          this.state.acceleration.x
        ],
        [
          this.state.acceleration.y
        ]
      ]), h = i.mmul(l), d = i.mmul(this.state.covariance).mmul(i.transpose()).add(c);
      if (this.debugEnabled) {
        const p = d.trace(), O = Math.sqrt(d.get(0, 0) + d.get(1, 1)), T = Math.sqrt(d.get(2, 2) + d.get(3, 3)), w = Math.sqrt(d.get(4, 4) + d.get(5, 5));
        console.log("[KalmanFilter] Prediction:", {
          dt: t,
          sigmaA: o,
          covarianceTrace: p,
          positionUncertainty: O,
          velocityUncertainty: T,
          accelerationUncertainty: w,
          position: {
            x: h.get(0, 0),
            y: h.get(1, 0)
          },
          velocity: {
            x: h.get(2, 0),
            y: h.get(3, 0)
          },
          acceleration: {
            x: h.get(4, 0),
            y: h.get(5, 0)
          }
        });
      }
      this.state.position = {
        x: h.get(0, 0),
        y: h.get(1, 0)
      }, this.state.velocity = {
        x: h.get(2, 0),
        y: h.get(3, 0)
      }, this.state.acceleration = {
        x: h.get(4, 0),
        y: h.get(5, 0)
      }, this.state.covariance = d;
    }
    async updateGPSInternal(t) {
      const i = await this.coordinateTransformer.geographicToLocal({
        longitude: t.longitude,
        latitude: t.latitude
      }), o = t.speed !== void 0 && t.speed !== null && t.heading !== void 0 && t.heading !== null;
      let c;
      o ? c = new Ye([
        [
          1,
          0,
          0,
          0,
          0,
          0
        ],
        [
          0,
          1,
          0,
          0,
          0,
          0
        ],
        [
          0,
          0,
          1,
          0,
          0,
          0
        ],
        [
          0,
          0,
          0,
          1,
          0,
          0
        ]
      ]) : c = new Ye([
        [
          1,
          0,
          0,
          0,
          0,
          0
        ],
        [
          0,
          1,
          0,
          0,
          0,
          0
        ]
      ]);
      let l;
      if (o) {
        const V = this.gpsVelocityToLocal(t.speed, t.heading);
        l = new Ye([
          [
            i.x
          ],
          [
            i.y
          ],
          [
            V.x
          ],
          [
            V.y
          ]
        ]);
      } else l = new Ye([
        [
          i.x
        ],
        [
          i.y
        ]
      ]);
      const h = this.gpsAccuracyToSigma(t.accuracy);
      let d;
      if (o) {
        const V = this.config.gpsSpeedUncertainty;
        d = new Ye([
          [
            h * h,
            0,
            0,
            0
          ],
          [
            0,
            h * h,
            0,
            0
          ],
          [
            0,
            0,
            V * V,
            0
          ],
          [
            0,
            0,
            0,
            V * V
          ]
        ]);
      } else d = new Ye([
        [
          h * h,
          0
        ],
        [
          0,
          h * h
        ]
      ]);
      const p = 1e-6, T = c.mmul(this.state.covariance).mmul(c.transpose()).add(d), w = T.add(Ye.identity(T.rows, T.columns).mul(p)), C = this.state.covariance.mmul(c.transpose()).mmul(Bl(w));
      this.lastKalmanGain = C, this.debugEnabled && console.log("[KalmanFilter] GPS update:", {
        hasVelocity: o,
        position: {
          x: i.x,
          y: i.y
        },
        gpsSpeed: t.speed,
        gpsHeading: t.heading,
        kalmanGain: C.to2DArray(),
        gainNorm: Math.sqrt(C.to1DArray().reduce((V, G) => V + G * G, 0))
      });
      const L = new Ye([
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
        ],
        [
          this.state.acceleration.x
        ],
        [
          this.state.acceleration.y
        ]
      ]), P = l.subtract(c.mmul(L)), D = L.add(C.mmul(P)), K = Ye.identity(6, 6).subtract(C.mmul(c)).mmul(this.state.covariance).add(Ye.identity(6, 6).mul(p));
      this.state.position = {
        x: D.get(0, 0),
        y: D.get(1, 0)
      }, this.state.velocity = {
        x: D.get(2, 0),
        y: D.get(3, 0)
      }, this.state.acceleration = {
        x: D.get(4, 0),
        y: D.get(5, 0)
      }, this.state.covariance = K;
    }
    gpsAccuracyToSigma(t) {
      return Math.max(t, 1) / Math.sqrt(2 * Math.log(20));
    }
    gpsVelocityToLocal(t, i) {
      const o = i * Math.PI / 180, c = t * Math.sin(o), l = t * Math.cos(o);
      return {
        x: c,
        y: l
      };
    }
    updateIMUInternal(t) {
      const i = new Ye([
        [
          0,
          0,
          0,
          0,
          1,
          0
        ],
        [
          0,
          0,
          0,
          0,
          0,
          1
        ]
      ]), o = new Ye([
        [
          t.x
        ],
        [
          t.y
        ]
      ]), c = Math.max(this.config.imuAccelerationUncertainty, 0.5), l = 1e-6, h = new Ye([
        [
          c * c,
          0
        ],
        [
          0,
          c * c
        ]
      ]), p = i.mmul(this.state.covariance).mmul(i.transpose()).add(h);
      (p.get(0, 0) < l || p.get(1, 1) < l || Math.abs(p.get(0, 1)) > 0.9 * Math.sqrt(p.get(0, 0) * p.get(1, 1))) && this.debugEnabled && console.warn("[KalmanFilter] Near-singular IMU measurement covariance, adding regularization");
      const O = p.add(Ye.identity(p.rows, p.columns).mul(l)), T = this.state.covariance.mmul(i.transpose()).mmul(Bl(O));
      if (this.lastKalmanGain = T, this.debugEnabled) {
        const ie = Math.sqrt(T.to1DArray().reduce((K, V) => K + V * V, 0));
        console.log("[KalmanFilter] IMU update:", {
          acceleration: {
            x: t.x,
            y: t.y
          },
          kalmanGain: T.to2DArray(),
          gainNorm: ie,
          sigmaAcc: c,
          stateAcceleration: {
            x: this.state.acceleration.x,
            y: this.state.acceleration.y
          }
        });
      }
      const w = new Ye([
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
        ],
        [
          this.state.acceleration.x
        ],
        [
          this.state.acceleration.y
        ]
      ]), C = o.subtract(i.mmul(w)), L = w.add(T.mmul(C)), de = Ye.identity(6, 6).subtract(T.mmul(i)).mmul(this.state.covariance).add(Ye.identity(6, 6).mul(l));
      this.state.position = {
        x: L.get(0, 0),
        y: L.get(1, 0)
      }, this.state.velocity = {
        x: L.get(2, 0),
        y: L.get(3, 0)
      }, this.state.acceleration = {
        x: L.get(4, 0),
        y: L.get(5, 0)
      }, this.state.covariance = de;
    }
  }
  class AO {
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
        if (t.isErr()) return v(new ve("Platform services not available for IMU", "BACKEND_NOT_AVAILABLE", t.error));
        const i = t.value.getIMU();
        return i.isErr() ? v(new ve("IMU provider not available", "BACKEND_NOT_AVAILABLE", i.error)) : (this.imuProvider = i.value, _(void 0));
      } catch (t) {
        return v(new ve("Exception during IMU initialization", "UPDATE_SERVICE_ERROR", t));
      }
    }
    async isAvailable() {
      return !this.imuProvider && (await this.initialize()).isErr() ? false : !!this.imuProvider;
    }
    async startListening(t) {
      if (!this.imuProvider) return v(new ve("IMU not initialized", "BACKEND_NOT_AVAILABLE"));
      if (this.isListening) return this.imuCallbacks.push(t), _(void 0);
      try {
        return this.imuCallbacks.push(t), this.isListening = true, this.startIMUPolling(), console.info("[IMUFusionManager] Started IMU sensor fusion"), _(void 0);
      } catch (i) {
        return v(new ve("Failed to start IMU listening", "UPDATE_SERVICE_ERROR", i));
      }
    }
    async stopListening() {
      if (!this.isListening || !this.imuProvider) return _(void 0);
      try {
        this.imuUpdateInterval && (clearInterval(this.imuUpdateInterval), this.imuUpdateInterval = null);
        const t = this.imuProvider.stopAcceleration();
        t.isErr() && console.warn("[IMUFusionManager] Failed to stop acceleration sensor:", t.error);
        const i = this.imuProvider.stopGyroscope();
        return i.isErr() && console.warn("[IMUFusionManager] Failed to stop gyroscope sensor:", i.error), this.imuCallbacks = [], this.isListening = false, console.info("[IMUFusionManager] Stopped IMU sensor fusion"), _(void 0);
      } catch (t) {
        return v(new ve("Failed to stop IMU listening", "UPDATE_SERVICE_ERROR", t));
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
  class wO {
    constructor(t, i, o = 100) {
      __publicField(this, "kalmanFilter");
      __publicField(this, "imuManager");
      __publicField(this, "callback", null);
      __publicField(this, "isInitialized", false);
      __publicField(this, "lastOutputTime", 0);
      __publicField(this, "lastOutputAccuracy", 0);
      __publicField(this, "debugEnabled", false);
      this.kalmanFilter = new RO(i), this.imuManager = new AO(o), this.callback = t;
    }
    async initialize(t) {
      try {
        (await this.imuManager.initialize()).isErr() && console.warn("[LocationProcessor] IMU not available, using GPS-only mode");
        try {
          await this.kalmanFilter.initialize(t), this.isInitialized = true;
        } catch (o) {
          return v(new ve("Failed to initialize Kalman filter", "UPDATE_SERVICE_ERROR", o));
        }
        return _(void 0);
      } catch (i) {
        return v(new ve("Failed to initialize location processor", "UPDATE_SERVICE_ERROR", i));
      }
    }
    async startGPS() {
      try {
        return await this.imuManager.isAvailable() && (await this.imuManager.startListening((o) => this.processIMUReading(o))).isErr() && console.warn("[LocationProcessor] Failed to start IMU, using GPS-only"), this.isInitialized = true, console.info("[LocationProcessor] Started location processing"), _(void 0);
      } catch (t) {
        return v(new ve("Failed to start GPS processing", "UPDATE_SERVICE_ERROR", t));
      }
    }
    async stopGPS() {
      try {
        const t = await this.imuManager.stopListening();
        return t.isErr() && console.warn("[LocationProcessor] Failed to stop IMU:", t.error), this.isInitialized = false, console.info("[LocationProcessor] Stopped location processing"), _(void 0);
      } catch (t) {
        return v(new ve("Failed to stop GPS processing", "UPDATE_SERVICE_ERROR", t));
      }
    }
    async processGPSLocation(t) {
      if (!this.isInitialized) {
        console.warn("[LocationProcessor] Processor not initialized, ignoring GPS reading");
        return;
      }
      try {
        if (!this.kalmanFilter.isFilterInitialized()) {
          await this.kalmanFilter.initialize(t), this.lastOutputAccuracy = t.accuracy;
          const c = await this.kalmanFilter.getFilteredPosition(), l = new _i(c.latitude, c.longitude, t.accuracy);
          this.notifyCallback(l);
          return;
        }
        await this.kalmanFilter.updateGPS(t), this.lastOutputAccuracy = t.accuracy;
        const i = await this.kalmanFilter.getFilteredPosition(), o = new _i(i.latitude, i.longitude, t.accuracy);
        this.notifyCallback(o);
      } catch (i) {
        console.error("[LocationProcessor] Error processing GPS location:", i);
      }
    }
    processIMUReading(t) {
      if (!this.isInitialized || !this.kalmanFilter.isFilterInitialized()) {
        this.isInitialized && !this.kalmanFilter.isFilterInitialized() && console.log("[LocationProcessor] Kalman filter not yet initialized, buffering IMU reading");
        return;
      }
      try {
        this.debugEnabled && console.log("[LocationProcessor] Processing IMU reading:", {
          timestamp: t.timestamp,
          acceleration: t.acceleration
        }), this.kalmanFilter.updateIMU(t), this.outputPredictedPosition();
      } catch (i) {
        console.error("[LocationProcessor] Error processing IMU reading:", i);
      }
    }
    async outputPredictedPosition() {
      const t = performance.now();
      if (!(t - this.lastOutputTime < 50)) {
        this.lastOutputTime = t;
        try {
          const i = await this.kalmanFilter.getFilteredPosition(), o = new _i(i.latitude, i.longitude, this.lastOutputAccuracy || 10);
          this.notifyCallback(o);
        } catch (i) {
          console.error("[LocationProcessor] Error outputting predicted position:", i);
        }
      }
    }
    async getCurrentFilteredPosition() {
      if (!this.kalmanFilter.isFilterInitialized()) return v(new ve("Kalman filter not initialized", "UPDATE_SERVICE_ERROR"));
      try {
        const t = await this.kalmanFilter.getFilteredPosition(), i = new _i(t.latitude, t.longitude, this.lastOutputAccuracy || 10);
        return _(i);
      } catch (t) {
        return v(new ve("Failed to get filtered position", "UPDATE_SERVICE_ERROR", t));
      }
    }
    getLastKalmanGain() {
      return this.kalmanFilter.getLastKalmanGain();
    }
    getKalmanState() {
      return this.kalmanFilter.getState();
    }
    isProcessorInitialized() {
      return this.isInitialized;
    }
    notifyCallback(t) {
      if (this.callback) try {
        this.callback(t, "kalman");
      } catch (i) {
        console.error("[LocationProcessor] Callback error:", i);
      }
    }
  }
  class SO {
    constructor(t = {
      sigmaAcceleration: 1,
      initialPositionUncertainty: 20,
      initialVelocityUncertainty: 4,
      imuUpdateInterval: 100,
      gpsSpeedUncertainty: 2,
      debugEnabled: false
    }) {
      __publicField(this, "name", "kalman");
      __publicField(this, "provider", null);
      __publicField(this, "processor", null);
      __publicField(this, "watchId", null);
      __publicField(this, "isInitialized", false);
      __publicField(this, "userCallback", null);
      this.config = t;
    }
    async initialize() {
      if (this.isInitialized) return _(void 0);
      try {
        const t = Ls();
        if (t.isErr()) return v(new ve("Platform services not available", "BACKEND_NOT_AVAILABLE", t.error));
        const i = t.value.getGeolocationProvider();
        if (!i) return v(new ve("Geolocation provider not available", "BACKEND_NOT_AVAILABLE"));
        this.provider = i;
        const o = await this.provider.getCurrentPosition();
        if (o.isErr()) return v(new ve("Failed to get the initial geolocation", "UPDATE_SERVICE_ERROR", o.error));
        this.processor = new wO((l, h) => this.handleLocationUpdate(l), {
          initialAccelerationUncertainty: this.config.sigmaAcceleration,
          initialPositionUncertainty: this.config.initialPositionUncertainty,
          initialVelocityUncertainty: this.config.initialVelocityUncertainty,
          gpsSpeedUncertainty: this.config.gpsSpeedUncertainty,
          debugEnabled: this.config.debugEnabled
        }, this.config.imuUpdateInterval);
        const c = await this.processor.initialize({
          latitude: o.value.coords.latitude,
          longitude: o.value.coords.longitude,
          accuracy: o.value.coords.accuracy,
          timestamp: performance.now(),
          speed: o.value.coords.speed ?? void 0,
          heading: o.value.coords.heading ?? void 0
        });
        return c.isErr() ? c : (this.isInitialized = true, _(void 0));
      } catch (t) {
        return v(new ve("Exception during Kalman backend initialization", "UPDATE_SERVICE_ERROR", t));
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
      if (!this.provider || !this.processor) return v(new ve("Kalman backend not properly initialized", "BACKEND_NOT_AVAILABLE"));
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
        if (i.isErr()) return v(new ve("Failed to start watching position", "UPDATE_SERVICE_ERROR", i.error));
        this.watchId = i.value;
        const o = await this.processor.startGPS();
        return o.isErr() ? (this.watchId !== null && this.provider && this.provider.clearWatch(this.watchId), o) : (console.info("[KalmanBackend] Started Kalman-filtered location watching"), _(void 0));
      } catch (i) {
        return v(new ve("Exception during start watching", "UPDATE_SERVICE_ERROR", i));
      }
    }
    async stopWatching() {
      if (!this.provider || !this.processor) return _(void 0);
      try {
        const t = await this.processor.stopGPS();
        if (t.isErr() && console.warn("[KalmanBackend] Failed to stop processor cleanly:", t.error), this.watchId !== null) {
          const i = this.provider.clearWatch(this.watchId);
          i.isErr() && console.warn("[KalmanBackend] Failed to clear watch:", i.error), this.watchId = null;
        }
        return console.info("[KalmanBackend] Stopped Kalman-filtered location watching"), _(void 0);
      } catch (t) {
        return v(new ve("Exception during stop watching", "UPDATE_SERVICE_ERROR", t));
      }
    }
    async getCurrentPosition() {
      if (!this.provider || !this.processor) return v(new ve("Kalman backend not properly initialized", "BACKEND_NOT_AVAILABLE"));
      try {
        const t = await this.provider.getCurrentPosition();
        if (t.isErr()) return v(new ve("Failed to get current position", "UPDATE_SERVICE_ERROR", t.error));
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
        return v(new ve("Exception getting current position", "UPDATE_SERVICE_ERROR", t));
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
  ai = (_a2 = class {
    constructor() {
      __publicField(this, "isInitialized", false);
      __publicField(this, "backendManager");
      __publicField(this, "stateManager");
      __publicField(this, "locationUpdateCallbacks", /* @__PURE__ */ new Map());
      __publicField(this, "nextCallbackId", 1);
      const t = [];
      if (vg()) {
        const i = Da(), o = i > 0 ? Math.floor(1e3 / i) : 50;
        t.push(new SO({
          imuUpdateInterval: o,
          sigmaAcceleration: 1,
          initialPositionUncertainty: 20,
          initialVelocityUncertainty: 4,
          gpsSpeedUncertainty: 2,
          debugEnabled: false
        }));
      }
      t.push(new qg()), t.push(new Xg()), this.backendManager = new zg(t), this.stateManager = new Kg();
    }
    static async getInstance() {
      if (ai.instance || (ai.instance = new ai()), !ai.instance.isInitialized) {
        const t = await ai.instance.initialize();
        if (t.isErr()) return v(t.error);
      }
      return _(ai.instance);
    }
    static getExistingInstance() {
      if (!ai.instance) throw new Error("GeolocationManager not initialized. Call getInstance() first.");
      return ai.instance;
    }
    static reset() {
      ai.instance = null;
    }
    async initialize() {
      if (this.isInitialized) return console.info("[GeolocationManager] Already initialized"), _(void 0);
      console.info("[GeolocationManager] Initializing geolocation services with new architecture");
      try {
        this.stateManager.subscribe((o, c) => {
          this.notifyCallbacks(o);
        });
        const t = await this.backendManager.initialise();
        if (t.isErr()) return console.warn("[GeolocationManager] No backend available for location"), v(new Ci("No geolocation backend available", "no_backend_available", t.error));
        const i = await this.backendManager.getCurrentPosition();
        return i.isOk() ? (this.stateManager.updateLocation(i.value, this.backendManager.getActiveBackend()), this.isInitialized = true, console.info("[GeolocationManager] Geolocation services initialized successfully"), _(void 0)) : v(new Ci("Backend selected fail to obtain geolocation", "backend_error", i.error));
      } catch (t) {
        const i = Tr(t, "Failed to initialize geolocation manager");
        return No(i, "GeolocationManager.initialize"), v(new Ci("Exception during initialization", "initialization_failed", i));
      }
    }
    async getCurrentLocation() {
      if (!this.isInitialized) {
        const t = new Ci("Geolocation manager not initialized", "not_initialized");
        return No(t, "GeolocationManager.getCurrentLocation"), v(t);
      }
      try {
        const t = await this.backendManager.getCurrentPosition();
        return t.isOk() && this.stateManager.updateLocation(t.value, this.backendManager.getActiveBackend() || "gps"), t;
      } catch (t) {
        const i = Tr(t, "Failed to get current location");
        return No(i, "GeolocationManager.getCurrentLocation"), v(new Ci("Failed to get current location", "get_location_failed", i));
      }
    }
    async startLocationUpdates(t) {
      if (!this.isInitialized) {
        const i = new Ci("Geolocation manager not initialized", "not_initialized");
        return No(i, "GeolocationManager.startLocationUpdates"), v(i);
      }
      console.info("[GeolocationManager] Starting location updates");
      try {
        const i = this.nextCallbackId++;
        this.locationUpdateCallbacks.set(i, t);
        const o = await this.backendManager.startWatching((c, l) => {
          this.stateManager.updateLocation(c, l), this.notifyCallbacks(c);
        });
        return o.isErr() ? (this.locationUpdateCallbacks.delete(i), v(o.error)) : (console.info(`[GeolocationManager] Location updates started with handler ${i}`), _(i));
      } catch (i) {
        const o = Tr(i, "Failed to start location updates");
        return No(o, "GeolocationManager.startLocationUpdates"), v(new Ci("Failed to start location updates", "start_updates_failed", o));
      }
    }
    async stopLocationUpdates(t) {
      if (!this.isInitialized) {
        const i = new Ci("Geolocation manager not initialized", "not_initialized");
        return No(i, "GeolocationManager.stopLocationUpdates"), v(i);
      }
      console.info("[GeolocationManager] Stopping location updates");
      try {
        if (this.locationUpdateCallbacks.delete(t), this.locationUpdateCallbacks.size === 0) {
          const i = await this.backendManager.stopWatching();
          if (i.isErr()) return v(i.error);
        }
        return console.info(`[GeolocationManager] Location updates stopped for handler ${t}`), _(void 0);
      } catch (i) {
        const o = Tr(i, "Failed to stop location updates");
        return No(o, "GeolocationManager.stopLocationUpdates"), v(new Ci("Failed to stop location updates", "stop_updates_failed", o));
      }
    }
    isServiceRunning() {
      return this.backendManager.isWatchingActive();
    }
    isUsingGPS() {
      const t = this.backendManager.getActiveBackend();
      return t === "gps" || t === "kalman";
    }
    getCurrentBackend() {
      return this.backendManager.getActiveBackend();
    }
    getLastKnownLocation() {
      const t = this.stateManager.getCurrentLocation();
      return t || (console.warn("[GeolocationManager] No known location available - returning default coordinates (0, 0)"), new _i(0, 0));
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
      return Ht("geolocationCorrection") ? OO(t) : t;
    }
    notifyCallbacks(t) {
      const i = this.applyGeolocationCorrection(t), o = Kh(i);
      for (const c of this.locationUpdateCallbacks.values()) try {
        c(o);
      } catch (l) {
        console.error("[GeolocationManager] Callback error:", l);
      }
    }
    async refreshBackend() {
      return _(void 0);
    }
  }, __publicField(_a2, "instance", null), _a2);
  let Td;
  const Hs = (e) => Td = e, Id = /* @__PURE__ */ Symbol();
  function Fa(e) {
    return e && typeof e == "object" && Object.prototype.toString.call(e) === "[object Object]" && typeof e.toJSON != "function";
  }
  var Bn;
  (function(e) {
    e.direct = "direct", e.patchObject = "patch object", e.patchFunction = "patch function";
  })(Bn || (Bn = {}));
  function Ed() {
    const e = pu(true), t = e.run(() => Gt({}));
    let i = [], o = [];
    const c = za({
      install(l) {
        Hs(c), c._a = l, l.provide(Id, c), l.config.globalProperties.$pinia = c, o.forEach((h) => i.push(h)), o = [];
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
  const md = () => {
  };
  function tu(e, t, i, o = md) {
    e.add(t);
    const c = () => {
      e.delete(t) && o();
    };
    return !i && Tu() && xd(c), c;
  }
  function jo(e, ...t) {
    e.forEach((i) => {
      i(...t);
    });
  }
  const NO = (e) => e(), iu = /* @__PURE__ */ Symbol(), sa = /* @__PURE__ */ Symbol();
  function Pa(e, t) {
    e instanceof Map && t instanceof Map ? t.forEach((i, o) => e.set(o, i)) : e instanceof Set && t instanceof Set && t.forEach(e.add, e);
    for (const i in t) {
      if (!t.hasOwnProperty(i)) continue;
      const o = t[i], c = e[i];
      Fa(c) && Fa(o) && e.hasOwnProperty(i) && !at(o) && !Gi(o) ? e[i] = Pa(c, o) : e[i] = o;
    }
    return e;
  }
  const yO = /* @__PURE__ */ Symbol();
  function bO(e) {
    return !Fa(e) || !Object.prototype.hasOwnProperty.call(e, yO);
  }
  const { assign: io } = Object;
  function LO(e) {
    return !!(at(e) && e.effect);
  }
  function vO(e, t, i, o) {
    const { state: c, actions: l, getters: h } = t, d = i.state.value[e];
    let p;
    function O() {
      d || (i.state.value[e] = c ? c() : {});
      const T = If(i.state.value[e]);
      return io(T, l, Object.keys(h || {}).reduce((w, C) => (w[C] = za(ic(() => {
        Hs(i);
        const L = i._s.get(e);
        return h[C].call(L, L);
      })), w), {}));
    }
    return p = gd(e, O, t, i, o, true), p;
  }
  function gd(e, t, i = {}, o, c, l) {
    let h;
    const d = io({
      actions: {}
    }, i), p = {
      deep: true
    };
    let O, T, w = /* @__PURE__ */ new Set(), C = /* @__PURE__ */ new Set(), L;
    const P = o.state.value[e];
    !l && !P && (o.state.value[e] = {}), Gt({});
    let D;
    function de(he) {
      let te;
      O = T = false, typeof he == "function" ? (he(o.state.value[e]), te = {
        type: Bn.patchFunction,
        storeId: e,
        events: L
      }) : (Pa(o.state.value[e], he), te = {
        type: Bn.patchObject,
        payload: he,
        storeId: e,
        events: L
      });
      const Ie = D = /* @__PURE__ */ Symbol();
      Fu().then(() => {
        D === Ie && (O = true);
      }), T = true, jo(w, te, o.state.value[e]);
    }
    const ie = l ? function() {
      const { state: te } = i, Ie = te ? te() : {};
      this.$patch((Le) => {
        io(Le, Ie);
      });
    } : md;
    function K() {
      h.stop(), w.clear(), C.clear(), o._s.delete(e);
    }
    const V = (he, te = "") => {
      if (iu in he) return he[sa] = te, he;
      const Ie = function() {
        Hs(o);
        const Le = Array.from(arguments), fe = /* @__PURE__ */ new Set(), ke = /* @__PURE__ */ new Set();
        function ht(He) {
          fe.add(He);
        }
        function xt(He) {
          ke.add(He);
        }
        jo(C, {
          args: Le,
          name: Ie[sa],
          store: ue,
          after: ht,
          onError: xt
        });
        let qe;
        try {
          qe = he.apply(this && this.$id === e ? this : ue, Le);
        } catch (He) {
          throw jo(ke, He), He;
        }
        return qe instanceof Promise ? qe.then((He) => (jo(fe, He), He)).catch((He) => (jo(ke, He), Promise.reject(He))) : (jo(fe, qe), qe);
      };
      return Ie[iu] = true, Ie[sa] = te, Ie;
    }, G = {
      _p: o,
      $id: e,
      $onAction: tu.bind(null, C),
      $patch: de,
      $reset: ie,
      $subscribe(he, te = {}) {
        const Ie = tu(w, he, te.detached, () => Le()), Le = h.run(() => Xo(() => o.state.value[e], (fe) => {
          (te.flush === "sync" ? T : O) && he({
            storeId: e,
            type: Bn.direct,
            events: L
          }, fe);
        }, io({}, p, te)));
        return Ie;
      },
      $dispose: K
    }, ue = ds(G);
    o._s.set(e, ue);
    const ne = (o._a && o._a.runWithContext || NO)(() => o._e.run(() => (h = pu()).run(() => t({
      action: V
    }))));
    for (const he in ne) {
      const te = ne[he];
      if (at(te) && !LO(te) || Gi(te)) l || (P && bO(te) && (at(te) ? te.value = P[he] : Pa(te, P[he])), o.state.value[e][he] = te);
      else if (typeof te == "function") {
        const Ie = V(te, he);
        ne[he] = Ie, d.actions[he] = te;
      }
    }
    return io(ue, ne), io(Pe(ue), ne), Object.defineProperty(ue, "$state", {
      get: () => o.state.value[e],
      set: (he) => {
        de((te) => {
          io(te, he);
        });
      }
    }), o._p.forEach((he) => {
      io(ue, h.run(() => he({
        store: ue,
        app: o._a,
        pinia: o,
        options: d
      })));
    }), P && l && i.hydrate && i.hydrate(ue.$state, P), O = true, T = true, ue;
  }
  LR = function(e, t, i) {
    let o;
    const c = typeof t == "function";
    o = c ? i : t;
    function l(h, d) {
      const p = bf();
      return h = h || (p ? Dn(Id, null) : null), h && Hs(h), h = Td, h._s.has(e) || (c ? gd(e, t, o, h) : vO(e, o, h)), h._s.get(e);
    }
    return l.$id = e, l;
  };
  var CO = [
    {
      id: "indoorequal-vue-maplibre-gl",
      name: "@indoorequal/vue-maplibre-gl",
      description: "Vue 3 plugin for maplibre-gl",
      url: "https://github.com/indoorequal/vue-maplibre-gl.git",
      homepage: "",
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
      url: "git+https://github.com/tauri-apps/tauri.git",
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
      homepage: "",
      licenseType: "MIT OR Apache-2.0",
      license: "",
      isDev: false
    },
    {
      id: "tauri-apps-plugin-store",
      name: "@tauri-apps/plugin-store",
      description: "Simple, persistent key-value store.",
      url: "https://github.com/tauri-apps/plugins-workspace",
      homepage: "",
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
      url: "git+https://github.com/vueuse/vueuse.git",
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
      url: "git+https://github.com/wangeditor-team/wangEditor.git",
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
      url: "git+https://github.com/wangeditor-team/wangEditor-for-vue3.git",
      homepage: "http://www.wangeditor.com/",
      licenseType: "MIT",
      license: "",
      isDev: false
    },
    {
      id: "gcoord",
      name: "gcoord",
      description: "geographic coordinate library",
      url: "git+https://github.com/hujiulong/gcoord.git",
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
      url: "lodash/lodash",
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
      url: "git://github.com/maplibre/maplibre-gl-js.git",
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
      url: "git@github.com:revin/markdown-it-task-lists.git",
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
      url: "https://github.com/mljs/matrix.git",
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
      id: "neverthrow",
      name: "neverthrow",
      description: "Stop throwing errors, and instead return Results!",
      url: "git+https://github.com/supermacro/neverthrow.git",
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
      url: "https://github.com/richtr/NoSleep.js.git",
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
      url: "git+https://github.com/vuejs/pinia.git",
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
      url: "git+https://github.com/mdnice/sitdown.git",
      homepage: "https://github.com/mdnice/sitdown#readme",
      licenseType: "MIT",
      license: "",
      isDev: false
    },
    {
      id: "terra-draw",
      name: "terra-draw",
      description: "Frictionless map drawing across mapping provider",
      url: "JamesLMilner/terra-draw",
      homepage: "",
      licenseType: "MIT",
      license: "",
      isDev: false
    },
    {
      id: "terra-draw-maplibre-gl-adapter",
      name: "terra-draw-maplibre-gl-adapter",
      description: "Terra Draw Adapter for Maplibre GL JS",
      url: "JamesLMilner/terra-draw",
      homepage: "",
      licenseType: "MIT",
      license: "",
      isDev: false
    },
    {
      id: "typescript",
      name: "typescript",
      description: "TypeScript is a language for application scale JavaScript development",
      url: "https://github.com/microsoft/TypeScript.git",
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
      url: "https://github.com/faisalman/ua-parser-js.git",
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
      url: "https://github.com/uuidjs/uuid.git",
      homepage: "",
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
      url: "git+https://github.com/vuejs/core.git",
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
      id: "vue-i18n",
      name: "vue-i18n",
      description: "Internationalization plugin for Vue.js",
      url: "git+https://github.com/intlify/vue-i18n.git",
      homepage: "https://github.com/intlify/vue-i18n/tree/master/packages/vue-i18n#readme",
      licenseType: "MIT",
      license: `The MIT License (MIT)

Copyright (c) 2020 kazuya kawaguchi

Permission is hereby granted, free of charge, to any person obtaining a copy of
this software and associated documentation files (the "Software"), to deal in
the Software without restriction, including without limitation the rights to
use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of
the Software, and to permit persons to whom the Software is furnished to do so,
subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS
FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR
COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER
IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN
CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
`,
      isDev: false
    },
    {
      id: "zod",
      name: "zod",
      description: "TypeScript-first schema declaration and validation library with static type inference",
      url: "git+https://github.com/colinhacks/zod.git",
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
      url: "git+https://github.com/tauri-apps/tauri.git",
      homepage: "https://github.com/tauri-apps/tauri#readme",
      licenseType: "Apache-2.0 OR MIT",
      license: "",
      isDev: true
    },
    {
      id: "tsconfig-node-lts",
      name: "@tsconfig/node-lts",
      description: "A base TSConfig for working with Node LTS (22).",
      url: "https://github.com/tsconfig/bases.git",
      homepage: "",
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
      url: "https://github.com/DefinitelyTyped/DefinitelyTyped.git",
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
      url: "https://github.com/DefinitelyTyped/DefinitelyTyped.git",
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
      url: "https://github.com/DefinitelyTyped/DefinitelyTyped.git",
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
      url: "https://github.com/DefinitelyTyped/DefinitelyTyped.git",
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
      url: "https://github.com/DefinitelyTyped/DefinitelyTyped.git",
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
      url: "git+https://github.com/vitejs/vite-plugin-basic-ssl.git",
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
      url: "git+https://github.com/vitejs/vite-plugin-vue.git",
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
      url: "git+https://github.com/vuejs/eslint-config-typescript.git",
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
      url: "git+https://github.com/vuejs/tsconfig.git",
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
      url: "git://github.com/motdotla/dotenv.git",
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
      url: "sindresorhus/globals",
      homepage: "",
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
      url: "git+https://github.com/oxc-project/oxc",
      homepage: "https://oxc.rs",
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
      id: "typedoc",
      name: "typedoc",
      description: "Create api documentation for TypeScript projects.",
      url: "git://github.com/TypeStrong/TypeDoc.git",
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
      url: "git+https://github.com/typedoc2md/typedoc-plugin-markdown.git",
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
      url: "git+https://github.com/vitejs/vite.git",
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
      homepage: "",
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
      homepage: "",
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
    }
  ];
  let ou, Ua, HO, DO, Ar, MO, FO, PO, UO, WO, _O, GO, kO, BO, YO, xO, jO, VO, zO, $O, KO, qO, JO, hc;
  ou = [
    {
      name: "trackmaker",
      displayName: "TrackMaker",
      moduleInit: async () => {
        var _a3;
        const e = vh((await $s(async () => {
          const { default: i } = await import("./App-pCgip8V6.js");
          return {
            default: i
          };
        }, __vite__mapDeps([0,1,2,3,4]), import.meta.url)).default);
        e.use(Ed()), e.use((await $s(async () => {
          const { default: i } = await import("./index-Wr8_Y8Cc.js");
          return {
            default: i
          };
        }, __vite__mapDeps([5,2,1,6]), import.meta.url)).default), e.use((await $s(async () => {
          const { i18n: i } = await import("./index-DOHjoVFI.js");
          return {
            i18n: i
          };
        }, __vite__mapDeps([3,2]), import.meta.url)).i18n), window.splashScreen && window.splashScreen.unmount(), (_a3 = document.getElementById("splash")) == null ? void 0 : _a3.remove();
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
        await ad();
      },
      dependencies: []
    },
    {
      name: "platform-services",
      displayName: "Platform Services",
      moduleInit: async () => {
        let e = false;
        try {
          e = _l();
        } catch {
        }
        try {
          e && console.time("Platform services initialise");
          const t = async (p, O) => Vg() ? false : window.permissionConfirm ? window.permissionConfirm(O) : false, i = await ao.init({
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
              frequency: Da(),
              normalizeToENU: true
            }), await p.startGyroscope({
              frequency: Da(),
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
          e = _l();
        } catch {
        }
        try {
          if (!Ls()) throw new Error("Platform services not initialized");
          e && console.time("Geolocation service initialise");
          const i = await ai.getInstance();
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
  vR = Zm;
  CR = CO;
  Ua = {
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
  HO = () => {
    try {
      const t = localStorage.getItem("interface-language");
      if (t && Ua[t]) return t;
    } catch {
    }
    return navigator.language.startsWith("zh") ? "zh-CN" : "en";
  };
  DO = HO();
  Ar = (e) => Ua[DO][e] || Ua.en[e] || e;
  MO = {
    class: "splash-container"
  };
  FO = {
    class: "splash-content"
  };
  PO = {
    key: 0,
    class: "loading-section"
  };
  UO = {
    class: "progress-container"
  };
  WO = {
    class: "progress-bar"
  };
  _O = {
    class: "progress-text"
  };
  GO = {
    class: "loading-details"
  };
  kO = {
    class: "current-module"
  };
  BO = {
    key: 1,
    class: "error-section"
  };
  YO = {
    class: "error-message"
  };
  xO = {
    key: 0
  };
  jO = {
    key: 1
  };
  VO = {
    key: 2,
    class: "timeout-section"
  };
  zO = {
    key: 3,
    class: "permission-section"
  };
  $O = {
    class: "permission-message"
  };
  KO = {
    class: "permission-buttons"
  };
  qO = Pf({
    __name: "SplashScreen",
    setup(e) {
      const t = Gt(0), i = Gt(""), o = Gt(""), c = Gt(0), l = Gt(0), h = Gt(false), d = Gt(false), p = Gt(""), O = Gt(false), T = Gt("");
      let w = null;
      const C = Gt("light"), L = () => {
        try {
          window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches ? C.value = "dark" : C.value = "light";
        } catch {
          C.value = "light";
        }
      }, P = () => {
        C.value === "dark" ? document.documentElement.setAttribute("data-theme", "dark") : document.documentElement.setAttribute("data-theme", "light"), console.info("[Splash Screen] Theme applied:", C.value);
      }, D = ic(() => Math.round(t.value / 100 * 100)), de = {
        info: (...Te) => {
          const ne = Te.join(" ");
          console.info(ne), i.value = String(ne);
        },
        warn: (...Te) => {
          const ne = Te.join(" ");
          console.warn(ne), i.value = String(ne);
        },
        error: (...Te) => {
          const ne = Te.join(" ");
          console.error(ne), i.value = String(ne), p.value = String(ne);
        },
        debug: (...Te) => {
          console.debug(...Te);
        }
      }, ie = {
        onModuleStart: (Te) => {
          o.value = Te, i.value = `Loading ${Te}...`;
        },
        onModuleComplete: (Te) => {
          l.value++, t.value = Math.min(100, l.value / c.value * 100), i.value = `Loaded ${Te}`;
        },
        onModuleError: (Te, ne) => {
          i.value = `Failed to load ${Te}`, p.value = ne.message;
        },
        onOverallProgress: (Te, ne) => {
          c.value = ne, l.value = Te, t.value = Math.min(100, Te / ne * 100);
        }
      }, K = () => {
        window.location.reload();
      }, V = (Te) => (T.value = Ar(Te), O.value = true, new Promise((ne) => {
        w = (he) => {
          O.value = false, ne(he);
        };
      })), G = () => {
        w == null ? void 0 : w(true);
      }, ue = () => {
        w == null ? void 0 : w(false);
      };
      return window.permissionConfirm = V, er(() => {
        var _a3;
        L(), P(), (_a3 = document.getElementById("pre-splash")) == null ? void 0 : _a3.remove();
        const Te = (ne, he = /* @__PURE__ */ new Set()) => {
          if (he.has(ne)) return 0;
          he.add(ne);
          const te = ou.find((Le) => Le.name === ne);
          if (!te) return 0;
          let Ie = 1;
          if (te.dependencies) for (const Le of te.dependencies) Ie += Te(Le, he);
          return Ie;
        };
        c.value = Te("trackmaker"), console.log("=== Start Loading Modules ==="), qh(ou, "trackmaker", 3e4, {
          logger: de,
          progressReporter: ie,
          printLog: true
        }).then(() => {
          i.value = "All modules loaded successfully", o.value = "TrackMaker", t.value = 100, console.log("=== All Modules Loaded ===");
        }).catch((ne) => {
          const he = String(ne.toString());
          if (he.toLowerCase().includes("timeout")) {
            const te = he.split("Trackback").map((Ie) => Ie.replace(/((^:\s*)|(,\s*$))/g, ""));
            console.table(te.map((Ie) => ({
              Trackback: Ie
            })), [
              "Trackback"
            ]), d.value = true;
          } else p.value = he, h.value = true;
          console.log("=== Failed to initialize all modules ==="), console.error(ne);
        });
      }), (Te, ne) => (oi(), vi("div", MO, [
        Be("div", FO, [
          ne[8] || (ne[8] = Be("div", {
            class: "logo-section"
          }, [
            Be("div", {
              class: "app-logo"
            }, [
              Be("img", {
                src: fT,
                alt: "TrackMaker Logo",
                height: "80",
                width: "80"
              })
            ]),
            Be("h1", {
              class: "app-title"
            }, " TrackMaker ")
          ], -1)),
          !h.value && !d.value ? (oi(), vi("div", PO, [
            Be("div", UO, [
              Be("div", WO, [
                Be("div", {
                  class: "progress-fill",
                  style: ls({
                    width: `${D.value}%`
                  })
                }, null, 4)
              ]),
              Be("div", _O, Hi(D.value) + "% ", 1)
            ]),
            Be("div", GO, [
              Be("p", kO, " Loading: " + Hi(o.value), 1)
            ]),
            ne[0] || (ne[0] = Be("div", {
              class: "loading-animation"
            }, [
              Be("div", {
                class: "spinner"
              })
            ], -1))
          ])) : pr("", true),
          h.value ? (oi(), vi("div", BO, [
            ne[1] || (ne[1] = Be("div", {
              class: "error-icon"
            }, " \u26A0\uFE0F ", -1)),
            ne[2] || (ne[2] = Be("h2", null, "Loading Error", -1)),
            Be("div", YO, [
              (oi(true), vi(Rt, null, $f((p.value ?? "").split(`
`), (he) => (oi(), vi("div", {
                key: he,
                style: {
                  display: "block",
                  "font-family": "monospace",
                  overflow: "auto"
                }
              }, [
                he.toLocaleLowerCase().includes("trackback") ? (oi(), vi("strong", xO, Hi(he), 1)) : (oi(), vi("span", jO, Hi(he), 1))
              ]))), 128))
            ]),
            Be("button", {
              class: "retry-button",
              onClick: K
            }, " Retry ")
          ])) : pr("", true),
          d.value ? (oi(), vi("div", VO, [
            ne[3] || (ne[3] = Be("div", {
              class: "timeout-icon"
            }, " \u23F0 ", -1)),
            ne[4] || (ne[4] = Be("h2", null, "Connection Timeout", -1)),
            ne[5] || (ne[5] = Be("p", null, "Unable to load required modules within the timeout period.", -1)),
            ne[6] || (ne[6] = Be("p", null, "Please check your internet connection and try again.", -1)),
            Be("button", {
              class: "retry-button",
              onClick: K
            }, " Retry ")
          ])) : pr("", true),
          O.value ? (oi(), vi("div", zO, [
            ne[7] || (ne[7] = Be("div", {
              class: "permission-icon"
            }, " \u{1F4CD} ", -1)),
            Be("h2", null, Hi(Ko(Ar)("permission.title")), 1),
            Be("p", $O, Hi(T.value), 1),
            Be("div", KO, [
              Be("button", {
                class: "permission-button deny",
                onClick: ue
              }, Hi(Ko(Ar)("permission.deny")), 1),
              Be("button", {
                class: "permission-button allow",
                onClick: G
              }, Hi(Ko(Ar)("permission.allow")), 1)
            ])
          ])) : pr("", true)
        ])
      ]));
    }
  });
  XO = (e, t) => {
    const i = e.__vccOpts || e;
    for (const [o, c] of t) i[o] = c;
    return i;
  };
  JO = XO(qO, [
    [
      "__scopeId",
      "data-v-d9d60867"
    ]
  ]);
  hc = vh(JO);
  hc.use(Ed());
  hc.mount("#splash");
  window.splashScreen = hc;
})();
export {
  Ls as $,
  fR as A,
  Xo as B,
  hR as C,
  Ia as D,
  rR as E,
  Rt as F,
  Pg as G,
  As as H,
  wi as I,
  uR as J,
  nR as K,
  To as L,
  Wf as M,
  _f as N,
  dR as O,
  Fu as P,
  eR as Q,
  At as R,
  ji as S,
  iR as T,
  If as U,
  ls as V,
  pR as W,
  at as X,
  za as Y,
  hf as Z,
  XO as _,
  __tla,
  Be as a,
  dn as a$,
  No as a0,
  Tr as a1,
  cR as a2,
  lR as a3,
  oR as a4,
  aR as a5,
  $f as a6,
  TR as a7,
  bR as a8,
  IR as a9,
  Mh as aA,
  Ph as aB,
  FI as aC,
  un as aD,
  fl as aE,
  ME as aF,
  Fi as aG,
  _h as aH,
  hn as aI,
  HI as aJ,
  GI as aK,
  Fh as aL,
  tI as aM,
  yE as aN,
  $E as aO,
  IE as aP,
  Dh as aQ,
  pm as aR,
  uf as aS,
  Qo as aT,
  gs as aU,
  Tu as aV,
  xd as aW,
  bf as aX,
  ZO as aY,
  Vi as aZ,
  ER as a_,
  ia as aa,
  Kh as ab,
  Rs as ac,
  Pe as ad,
  sR as ae,
  NR as af,
  RR as ag,
  SR as ah,
  wR as ai,
  gR as aj,
  AR as ak,
  OR as al,
  vR as am,
  CR as an,
  mR as ao,
  ai as ap,
  $s as aq,
  Vg as ar,
  Eo as as,
  Io as at,
  tn as au,
  Qc as av,
  jT as aw,
  $T as ax,
  qT as ay,
  xT as az,
  Gt as b,
  ir as b0,
  _ as b1,
  v as b2,
  $l as b3,
  yR as b4,
  pu as b5,
  vi as c,
  Pf as d,
  kf as e,
  Xa as f,
  ds as g,
  Dp as h,
  Dn as i,
  ic as j,
  er as k,
  Ja as l,
  wp as m,
  ka as n,
  oi as o,
  yf as p,
  LR as q,
  ua as r,
  pr as s,
  QO as t,
  Ct as u,
  Ko as v,
  tR as w,
  Nf as x,
  Ap as y,
  Hi as z
};
