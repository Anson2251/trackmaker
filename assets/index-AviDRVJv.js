const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["./App-t6RSdB9y.js","./sketch-store-BKfUs5gc.js","./vue-i18n-ju1slcEb.js","./index-BZ1p0JCD.js","./App-BkoMreV2.css","./index-D9kuFjmH.js","./index-BXn2F5CC.css"])))=>i.map(i=>d[i]);
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
let Ji, uv, Kr, lv, ga, tv, Rt, Cb, Is, Sn, av, ev, hr, Md, Nd, cv, ku, X0, Et, Vn, Z0, pd, cs, fv, st, za, cd, q0, Ge, ui, Ir, go, iv, sv, Q0, rv, Ud, hv, Sv, dv, Cf, Lf, Cm, li, fc, Pw, Dn, xf, ci, Mm, xm, kf, Qg, Sw, Vw, pw, Pf, hy, ld, Zr, bs, pu, Bh, Kd, K0, Hn, pv, ta, qf, Es, De, nv, Iv, yv, Ev, vv, mv, bv, wv, Ov, Av, gv, ln, Hs, $b, pr, dr, ei, Xl, Bg, Vg, qg, Wg, jt, to, D, N, Tv, du, Nn, Ad, Cd, Ya, hs, Np, Li, el, Qi, Ka, Ep, ja, rn, Yd, _v, ca, po, J0, Nt, qr, ov, Td, vp, Cn;
let __tla = (async () => {
  var _a2;
  (function() {
    const t = document.createElement("link").relList;
    if (t && t.supports && t.supports("modulepreload")) return;
    for (const l of document.querySelectorAll('link[rel="modulepreload"]')) r(l);
    new MutationObserver((l) => {
      for (const c of l) if (c.type === "childList") for (const f of c.addedNodes) f.tagName === "LINK" && f.rel === "modulepreload" && r(f);
    }).observe(document, {
      childList: true,
      subtree: true
    });
    function n(l) {
      const c = {};
      return l.integrity && (c.integrity = l.integrity), l.referrerPolicy && (c.referrerPolicy = l.referrerPolicy), l.crossOrigin === "use-credentials" ? c.credentials = "include" : l.crossOrigin === "anonymous" ? c.credentials = "omit" : c.credentials = "same-origin", c;
    }
    function r(l) {
      if (l.ep) return;
      l.ep = true;
      const c = n(l);
      fetch(l.href, c);
    }
  })();
  function Da(e) {
    const t = /* @__PURE__ */ Object.create(null);
    for (const n of e.split(",")) t[n] = 1;
    return (n) => n in t;
  }
  const Fe = {}, Vr = [], fn = () => {
  }, ru = () => false, is = (e) => e.charCodeAt(0) === 111 && e.charCodeAt(1) === 110 && (e.charCodeAt(2) > 122 || e.charCodeAt(2) < 97), Fa = (e) => e.startsWith("onUpdate:"), dt = Object.assign, xa = (e, t) => {
    const n = e.indexOf(t);
    n > -1 && e.splice(n, 1);
  }, Rh = Object.prototype.hasOwnProperty, We = (e, t) => Rh.call(e, t), Ie = Array.isArray, Hr = (e) => Xi(e) === "[object Map]", iu = (e) => Xi(e) === "[object Set]", Mh = (e) => Xi(e) === "[object RegExp]", _e = (e) => typeof e == "function", ot = (e) => typeof e == "string", qn = (e) => typeof e == "symbol", qe = (e) => e !== null && typeof e == "object", ou = (e) => (qe(e) || _e(e)) && _e(e.then) && _e(e.catch), su = Object.prototype.toString, Xi = (e) => su.call(e), Nh = (e) => Xi(e).slice(8, -1), au = (e) => Xi(e) === "[object Object]", os = (e) => ot(e) && e !== "NaN" && e[0] !== "-" && "" + parseInt(e, 10) === e, Ai = Da(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"), ss = (e) => {
    const t = /* @__PURE__ */ Object.create(null);
    return ((n) => t[n] || (t[n] = e(n)));
  }, Ph = /-\w/g, Xt = ss((e) => e.replace(Ph, (t) => t.slice(1).toUpperCase())), Ch = /\B([A-Z])/g, Yn = ss((e) => e.replace(Ch, "-$1").toLowerCase()), as = ss((e) => e.charAt(0).toUpperCase() + e.slice(1)), Cs = ss((e) => e ? `on${as(e)}` : ""), Gt = (e, t) => !Object.is(e, t), Ri = (e, ...t) => {
    for (let n = 0; n < e.length; n++) e[n](...t);
  }, lu = (e, t, n, r = false) => {
    Object.defineProperty(e, t, {
      configurable: true,
      enumerable: false,
      writable: r,
      value: n
    });
  }, kh = (e) => {
    const t = parseFloat(e);
    return isNaN(t) ? e : t;
  }, Lh = (e) => {
    const t = ot(e) ? Number(e) : NaN;
    return isNaN(t) ? e : t;
  };
  let dl;
  const ls = () => dl || (dl = typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : typeof window < "u" ? window : typeof global < "u" ? global : {});
  cs = function(e) {
    if (Ie(e)) {
      const t = {};
      for (let n = 0; n < e.length; n++) {
        const r = e[n], l = ot(r) ? jh(r) : cs(r);
        if (l) for (const c in l) t[c] = l[c];
      }
      return t;
    } else if (ot(e) || qe(e)) return e;
  };
  const Dh = /;(?![^(]*\))/g, Fh = /:([^]+)/, xh = /\/\*[^]*?\*\//g;
  function jh(e) {
    const t = {};
    return e.replace(xh, "").split(Dh).forEach((n) => {
      if (n) {
        const r = n.split(Fh);
        r.length > 1 && (t[r[0].trim()] = r[1].trim());
      }
    }), t;
  }
  ja = function(e) {
    let t = "";
    if (ot(e)) t = e;
    else if (Ie(e)) for (let n = 0; n < e.length; n++) {
      const r = ja(e[n]);
      r && (t += r + " ");
    }
    else if (qe(e)) for (const n in e) e[n] && (t += n + " ");
    return t.trim();
  };
  const Uh = "itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly", Gh = Da(Uh);
  function cu(e) {
    return !!e || e === "";
  }
  let uu, fu, ks;
  uu = (e) => !!(e && e.__v_isRef === true);
  Cn = (e) => ot(e) ? e : e == null ? "" : Ie(e) || qe(e) && (e.toString === su || !_e(e.toString)) ? uu(e) ? Cn(e.value) : JSON.stringify(e, fu, 2) : String(e);
  fu = (e, t) => uu(t) ? fu(e, t.value) : Hr(t) ? {
    [`Map(${t.size})`]: [
      ...t.entries()
    ].reduce((n, [r, l], c) => (n[ks(r, c) + " =>"] = l, n), {})
  } : iu(t) ? {
    [`Set(${t.size})`]: [
      ...t.values()
    ].map((n) => ks(n))
  } : qn(t) ? ks(t) : qe(t) && !Ie(t) && !au(t) ? String(t) : t;
  ks = (e, t = "") => {
    var n;
    return qn(e) ? `Symbol(${(n = e.description) != null ? n : t})` : e;
  };
  function Wh(e) {
    return e == null ? "initial" : typeof e == "string" ? e === "" ? " " : e : String(e);
  }
  let Ot;
  class hu {
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
        let n, r;
        for (n = 0, r = this.effects.length; n < r; n++) this.effects[n].stop();
        for (this.effects.length = 0, n = 0, r = this.cleanups.length; n < r; n++) this.cleanups[n]();
        if (this.cleanups.length = 0, this.scopes) {
          for (n = 0, r = this.scopes.length; n < r; n++) this.scopes[n].stop(true);
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
  du = function(e) {
    return new hu(e);
  };
  pu = function() {
    return Ot;
  };
  Bh = function(e, t = false) {
    Ot && Ot.cleanups.push(e);
  };
  let Je;
  const Ls = /* @__PURE__ */ new WeakSet();
  class gu {
    constructor(t) {
      this.fn = t, this.deps = void 0, this.depsTail = void 0, this.flags = 5, this.next = void 0, this.cleanup = void 0, this.scheduler = void 0, Ot && Ot.active && Ot.effects.push(this);
    }
    pause() {
      this.flags |= 64;
    }
    resume() {
      this.flags & 64 && (this.flags &= -65, Ls.has(this) && (Ls.delete(this), this.trigger()));
    }
    notify() {
      this.flags & 2 && !(this.flags & 32) || this.flags & 8 || wu(this);
    }
    run() {
      if (!(this.flags & 1)) return this.fn();
      this.flags |= 2, pl(this), yu(this);
      const t = Je, n = hn;
      Je = this, hn = true;
      try {
        return this.fn();
      } finally {
        bu(this), Je = t, hn = n, this.flags &= -3;
      }
    }
    stop() {
      if (this.flags & 1) {
        for (let t = this.deps; t; t = t.nextDep) Wa(t);
        this.deps = this.depsTail = void 0, pl(this), this.onStop && this.onStop(), this.flags &= -2;
      }
    }
    trigger() {
      this.flags & 64 ? Ls.add(this) : this.scheduler ? this.scheduler() : this.runIfDirty();
    }
    runIfDirty() {
      sa(this) && this.run();
    }
    get dirty() {
      return sa(this);
    }
  }
  let mu = 0, Mi, Ni;
  function wu(e, t = false) {
    if (e.flags |= 8, t) {
      e.next = Ni, Ni = e;
      return;
    }
    e.next = Mi, Mi = e;
  }
  function Ua() {
    mu++;
  }
  function Ga() {
    if (--mu > 0) return;
    if (Ni) {
      let t = Ni;
      for (Ni = void 0; t; ) {
        const n = t.next;
        t.next = void 0, t.flags &= -9, t = n;
      }
    }
    let e;
    for (; Mi; ) {
      let t = Mi;
      for (Mi = void 0; t; ) {
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
  function yu(e) {
    for (let t = e.deps; t; t = t.nextDep) t.version = -1, t.prevActiveLink = t.dep.activeLink, t.dep.activeLink = t;
  }
  function bu(e) {
    let t, n = e.depsTail, r = n;
    for (; r; ) {
      const l = r.prevDep;
      r.version === -1 ? (r === n && (n = l), Wa(r), $h(r)) : t = r, r.dep.activeLink = r.prevActiveLink, r.prevActiveLink = void 0, r = l;
    }
    e.deps = t, e.depsTail = n;
  }
  function sa(e) {
    for (let t = e.deps; t; t = t.nextDep) if (t.dep.version !== t.version || t.dep.computed && (vu(t.dep.computed) || t.dep.version !== t.version)) return true;
    return !!e._dirty;
  }
  function vu(e) {
    if (e.flags & 4 && !(e.flags & 16) || (e.flags &= -17, e.globalVersion === Gi) || (e.globalVersion = Gi, !e.isSSR && e.flags & 128 && (!e.deps && !e._dirty || !sa(e)))) return;
    e.flags |= 2;
    const t = e.dep, n = Je, r = hn;
    Je = e, hn = true;
    try {
      yu(e);
      const l = e.fn(e._value);
      (t.version === 0 || Gt(l, e._value)) && (e.flags |= 128, e._value = l, t.version++);
    } catch (l) {
      throw t.version++, l;
    } finally {
      Je = n, hn = r, bu(e), e.flags &= -3;
    }
  }
  function Wa(e, t = false) {
    const { dep: n, prevSub: r, nextSub: l } = e;
    if (r && (r.nextSub = l, e.prevSub = void 0), l && (l.prevSub = r, e.nextSub = void 0), n.subs === e && (n.subs = r, !r && n.computed)) {
      n.computed.flags &= -5;
      for (let c = n.computed.deps; c; c = c.nextDep) Wa(c, true);
    }
    !t && !--n.sc && n.map && n.map.delete(n.key);
  }
  function $h(e) {
    const { prevDep: t, nextDep: n } = e;
    t && (t.nextDep = n, e.prevDep = void 0), n && (n.prevDep = t, e.nextDep = void 0);
  }
  let hn = true;
  const Eu = [];
  function Bn() {
    Eu.push(hn), hn = false;
  }
  function $n() {
    const e = Eu.pop();
    hn = e === void 0 ? true : e;
  }
  function pl(e) {
    const { cleanup: t } = e;
    if (e.cleanup = void 0, t) {
      const n = Je;
      Je = void 0;
      try {
        t();
      } finally {
        Je = n;
      }
    }
  }
  let Gi = 0;
  class zh {
    constructor(t, n) {
      this.sub = t, this.dep = n, this.version = n.version, this.nextDep = this.prevDep = this.nextSub = this.prevSub = this.prevActiveLink = void 0;
    }
  }
  class us {
    constructor(t) {
      this.computed = t, this.version = 0, this.activeLink = void 0, this.subs = void 0, this.map = void 0, this.key = void 0, this.sc = 0, this.__v_skip = true;
    }
    track(t) {
      if (!Je || !hn || Je === this.computed) return;
      let n = this.activeLink;
      if (n === void 0 || n.sub !== Je) n = this.activeLink = new zh(Je, this), Je.deps ? (n.prevDep = Je.depsTail, Je.depsTail.nextDep = n, Je.depsTail = n) : Je.deps = Je.depsTail = n, Iu(n);
      else if (n.version === -1 && (n.version = this.version, n.nextDep)) {
        const r = n.nextDep;
        r.prevDep = n.prevDep, n.prevDep && (n.prevDep.nextDep = r), n.prevDep = Je.depsTail, n.nextDep = void 0, Je.depsTail.nextDep = n, Je.depsTail = n, Je.deps === n && (Je.deps = r);
      }
      return n;
    }
    trigger(t) {
      this.version++, Gi++, this.notify(t);
    }
    notify(t) {
      Ua();
      try {
        for (let n = this.subs; n; n = n.prevSub) n.sub.notify() && n.sub.dep.notify();
      } finally {
        Ga();
      }
    }
  }
  function Iu(e) {
    if (e.dep.sc++, e.sub.flags & 4) {
      const t = e.dep.computed;
      if (t && !e.dep.subs) {
        t.flags |= 20;
        for (let r = t.deps; r; r = r.nextDep) Iu(r);
      }
      const n = e.dep.subs;
      n !== e && (e.prevSub = n, n && (n.nextSub = e)), e.dep.subs = e;
    }
  }
  const ko = /* @__PURE__ */ new WeakMap(), Pr = /* @__PURE__ */ Symbol(""), aa = /* @__PURE__ */ Symbol(""), Wi = /* @__PURE__ */ Symbol("");
  function At(e, t, n) {
    if (hn && Je) {
      let r = ko.get(e);
      r || ko.set(e, r = /* @__PURE__ */ new Map());
      let l = r.get(n);
      l || (r.set(n, l = new us()), l.map = r, l.key = n), l.track();
    }
  }
  function Fn(e, t, n, r, l, c) {
    const f = ko.get(e);
    if (!f) {
      Gi++;
      return;
    }
    const h = (p) => {
      p && p.trigger();
    };
    if (Ua(), t === "clear") f.forEach(h);
    else {
      const p = Ie(e), v = p && os(n);
      if (p && n === "length") {
        const g = Number(r);
        f.forEach((T, M) => {
          (M === "length" || M === Wi || !qn(M) && M >= g) && h(T);
        });
      } else switch ((n !== void 0 || f.has(void 0)) && h(f.get(n)), v && h(f.get(Wi)), t) {
        case "add":
          p ? v && h(f.get("length")) : (h(f.get(Pr)), Hr(e) && h(f.get(aa)));
          break;
        case "delete":
          p || (h(f.get(Pr)), Hr(e) && h(f.get(aa)));
          break;
        case "set":
          Hr(e) && h(f.get(Pr));
          break;
      }
    }
    Ga();
  }
  function Vh(e, t) {
    const n = ko.get(e);
    return n && n.get(t);
  }
  function jr(e) {
    const t = De(e);
    return t === e ? t : (At(t, "iterate", Wi), Jt(e) ? t : t.map(dn));
  }
  function fs(e) {
    return At(e = De(e), "iterate", Wi), e;
  }
  function rr(e, t) {
    return zn(e) ? Gn(e) ? Xr(dn(t)) : Xr(t) : dn(t);
  }
  const Hh = {
    __proto__: null,
    [Symbol.iterator]() {
      return Ds(this, Symbol.iterator, (e) => rr(this, e));
    },
    concat(...e) {
      return jr(this).concat(...e.map((t) => Ie(t) ? jr(t) : t));
    },
    entries() {
      return Ds(this, "entries", (e) => (e[1] = rr(this, e[1]), e));
    },
    every(e, t) {
      return Mn(this, "every", e, t, void 0, arguments);
    },
    filter(e, t) {
      return Mn(this, "filter", e, t, (n) => n.map((r) => rr(this, r)), arguments);
    },
    find(e, t) {
      return Mn(this, "find", e, t, (n) => rr(this, n), arguments);
    },
    findIndex(e, t) {
      return Mn(this, "findIndex", e, t, void 0, arguments);
    },
    findLast(e, t) {
      return Mn(this, "findLast", e, t, (n) => rr(this, n), arguments);
    },
    findLastIndex(e, t) {
      return Mn(this, "findLastIndex", e, t, void 0, arguments);
    },
    forEach(e, t) {
      return Mn(this, "forEach", e, t, void 0, arguments);
    },
    includes(...e) {
      return Fs(this, "includes", e);
    },
    indexOf(...e) {
      return Fs(this, "indexOf", e);
    },
    join(e) {
      return jr(this).join(e);
    },
    lastIndexOf(...e) {
      return Fs(this, "lastIndexOf", e);
    },
    map(e, t) {
      return Mn(this, "map", e, t, void 0, arguments);
    },
    pop() {
      return di(this, "pop");
    },
    push(...e) {
      return di(this, "push", e);
    },
    reduce(e, ...t) {
      return gl(this, "reduce", e, t);
    },
    reduceRight(e, ...t) {
      return gl(this, "reduceRight", e, t);
    },
    shift() {
      return di(this, "shift");
    },
    some(e, t) {
      return Mn(this, "some", e, t, void 0, arguments);
    },
    splice(...e) {
      return di(this, "splice", e);
    },
    toReversed() {
      return jr(this).toReversed();
    },
    toSorted(e) {
      return jr(this).toSorted(e);
    },
    toSpliced(...e) {
      return jr(this).toSpliced(...e);
    },
    unshift(...e) {
      return di(this, "unshift", e);
    },
    values() {
      return Ds(this, "values", (e) => rr(this, e));
    }
  };
  function Ds(e, t, n) {
    const r = fs(e), l = r[t]();
    return r !== e && !Jt(e) && (l._next = l.next, l.next = () => {
      const c = l._next();
      return c.done || (c.value = n(c.value)), c;
    }), l;
  }
  const qh = Array.prototype;
  function Mn(e, t, n, r, l, c) {
    const f = fs(e), h = f !== e && !Jt(e), p = f[t];
    if (p !== qh[t]) {
      const T = p.apply(e, c);
      return h ? dn(T) : T;
    }
    let v = n;
    f !== e && (h ? v = function(T, M) {
      return n.call(this, rr(e, T), M, e);
    } : n.length > 2 && (v = function(T, M) {
      return n.call(this, T, M, e);
    }));
    const g = p.call(f, v, r);
    return h && l ? l(g) : g;
  }
  function gl(e, t, n, r) {
    const l = fs(e);
    let c = n;
    return l !== e && (Jt(e) ? n.length > 3 && (c = function(f, h, p) {
      return n.call(this, f, h, p, e);
    }) : c = function(f, h, p) {
      return n.call(this, f, rr(e, h), p, e);
    }), l[t](c, ...r);
  }
  function Fs(e, t, n) {
    const r = De(e);
    At(r, "iterate", Wi);
    const l = r[t](...n);
    return (l === -1 || l === false) && ds(n[0]) ? (n[0] = De(n[0]), r[t](...n)) : l;
  }
  function di(e, t, n = []) {
    Bn(), Ua();
    const r = De(e)[t].apply(e, n);
    return Ga(), $n(), r;
  }
  const Yh = Da("__proto__,__v_isRef,__isVue"), Tu = new Set(Object.getOwnPropertyNames(Symbol).filter((e) => e !== "arguments" && e !== "caller").map((e) => Symbol[e]).filter(qn));
  function Kh(e) {
    qn(e) || (e = String(e));
    const t = De(this);
    return At(t, "has", e), t.hasOwnProperty(e);
  }
  class Su {
    constructor(t = false, n = false) {
      this._isReadonly = t, this._isShallow = n;
    }
    get(t, n, r) {
      if (n === "__v_skip") return t.__v_skip;
      const l = this._isReadonly, c = this._isShallow;
      if (n === "__v_isReactive") return !l;
      if (n === "__v_isReadonly") return l;
      if (n === "__v_isShallow") return c;
      if (n === "__v_raw") return r === (l ? c ? od : Ru : c ? Au : Ou).get(t) || Object.getPrototypeOf(t) === Object.getPrototypeOf(r) ? t : void 0;
      const f = Ie(t);
      if (!l) {
        let p;
        if (f && (p = Hh[n])) return p;
        if (n === "hasOwnProperty") return Kh;
      }
      const h = Reflect.get(t, n, st(t) ? t : r);
      if ((qn(n) ? Tu.has(n) : Yh(n)) || (l || At(t, "get", n), c)) return h;
      if (st(h)) {
        const p = f && os(n) ? h : h.value;
        return l && qe(p) ? ca(p) : p;
      }
      return qe(h) ? l ? ca(h) : hs(h) : h;
    }
  }
  class _u extends Su {
    constructor(t = false) {
      super(false, t);
    }
    set(t, n, r, l) {
      let c = t[n];
      const f = Ie(t) && os(n);
      if (!this._isShallow) {
        const v = zn(c);
        if (!Jt(r) && !zn(r) && (c = De(c), r = De(r)), !f && st(c) && !st(r)) return v || (c.value = r), true;
      }
      const h = f ? Number(n) < t.length : We(t, n), p = Reflect.set(t, n, r, st(t) ? t : l);
      return t === De(l) && (h ? Gt(r, c) && Fn(t, "set", n, r) : Fn(t, "add", n, r)), p;
    }
    deleteProperty(t, n) {
      const r = We(t, n);
      t[n];
      const l = Reflect.deleteProperty(t, n);
      return l && r && Fn(t, "delete", n, void 0), l;
    }
    has(t, n) {
      const r = Reflect.has(t, n);
      return (!qn(n) || !Tu.has(n)) && At(t, "has", n), r;
    }
    ownKeys(t) {
      return At(t, "iterate", Ie(t) ? "length" : Pr), Reflect.ownKeys(t);
    }
  }
  class Jh extends Su {
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
  const Xh = new _u(), Zh = new Jh(), Qh = new _u(true);
  const la = (e) => e, ao = (e) => Reflect.getPrototypeOf(e);
  function ed(e, t, n) {
    return function(...r) {
      const l = this.__v_raw, c = De(l), f = Hr(c), h = e === "entries" || e === Symbol.iterator && f, p = e === "keys" && f, v = l[e](...r), g = n ? la : t ? Xr : dn;
      return !t && At(c, "iterate", p ? aa : Pr), {
        next() {
          const { value: T, done: M } = v.next();
          return M ? {
            value: T,
            done: M
          } : {
            value: h ? [
              g(T[0]),
              g(T[1])
            ] : g(T),
            done: M
          };
        },
        [Symbol.iterator]() {
          return this;
        }
      };
    };
  }
  function lo(e) {
    return function(...t) {
      return e === "delete" ? false : e === "clear" ? void 0 : this;
    };
  }
  function td(e, t) {
    const n = {
      get(l) {
        const c = this.__v_raw, f = De(c), h = De(l);
        e || (Gt(l, h) && At(f, "get", l), At(f, "get", h));
        const { has: p } = ao(f), v = t ? la : e ? Xr : dn;
        if (p.call(f, l)) return v(c.get(l));
        if (p.call(f, h)) return v(c.get(h));
        c !== f && c.get(l);
      },
      get size() {
        const l = this.__v_raw;
        return !e && At(De(l), "iterate", Pr), l.size;
      },
      has(l) {
        const c = this.__v_raw, f = De(c), h = De(l);
        return e || (Gt(l, h) && At(f, "has", l), At(f, "has", h)), l === h ? c.has(l) : c.has(l) || c.has(h);
      },
      forEach(l, c) {
        const f = this, h = f.__v_raw, p = De(h), v = t ? la : e ? Xr : dn;
        return !e && At(p, "iterate", Pr), h.forEach((g, T) => l.call(c, v(g), v(T), f));
      }
    };
    return dt(n, e ? {
      add: lo("add"),
      set: lo("set"),
      delete: lo("delete"),
      clear: lo("clear")
    } : {
      add(l) {
        !t && !Jt(l) && !zn(l) && (l = De(l));
        const c = De(this);
        return ao(c).has.call(c, l) || (c.add(l), Fn(c, "add", l, l)), this;
      },
      set(l, c) {
        !t && !Jt(c) && !zn(c) && (c = De(c));
        const f = De(this), { has: h, get: p } = ao(f);
        let v = h.call(f, l);
        v || (l = De(l), v = h.call(f, l));
        const g = p.call(f, l);
        return f.set(l, c), v ? Gt(c, g) && Fn(f, "set", l, c) : Fn(f, "add", l, c), this;
      },
      delete(l) {
        const c = De(this), { has: f, get: h } = ao(c);
        let p = f.call(c, l);
        p || (l = De(l), p = f.call(c, l)), h && h.call(c, l);
        const v = c.delete(l);
        return p && Fn(c, "delete", l, void 0), v;
      },
      clear() {
        const l = De(this), c = l.size !== 0, f = l.clear();
        return c && Fn(l, "clear", void 0, void 0), f;
      }
    }), [
      "keys",
      "values",
      "entries",
      Symbol.iterator
    ].forEach((l) => {
      n[l] = ed(l, e, t);
    }), n;
  }
  function Ba(e, t) {
    const n = td(e, t);
    return (r, l, c) => l === "__v_isReactive" ? !e : l === "__v_isReadonly" ? e : l === "__v_raw" ? r : Reflect.get(We(n, l) && l in r ? n : r, l, c);
  }
  const nd = {
    get: Ba(false, false)
  }, rd = {
    get: Ba(false, true)
  }, id = {
    get: Ba(true, false)
  };
  const Ou = /* @__PURE__ */ new WeakMap(), Au = /* @__PURE__ */ new WeakMap(), Ru = /* @__PURE__ */ new WeakMap(), od = /* @__PURE__ */ new WeakMap();
  function sd(e) {
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
  function ad(e) {
    return e.__v_skip || !Object.isExtensible(e) ? 0 : sd(Nh(e));
  }
  hs = function(e) {
    return zn(e) ? e : $a(e, false, Xh, nd, Ou);
  };
  ld = function(e) {
    return $a(e, false, Qh, rd, Au);
  };
  ca = function(e) {
    return $a(e, true, Zh, id, Ru);
  };
  function $a(e, t, n, r, l) {
    if (!qe(e) || e.__v_raw && !(t && e.__v_isReactive)) return e;
    const c = ad(e);
    if (c === 0) return e;
    const f = l.get(e);
    if (f) return f;
    const h = new Proxy(e, c === 2 ? r : n);
    return l.set(e, h), h;
  }
  function Gn(e) {
    return zn(e) ? Gn(e.__v_raw) : !!(e && e.__v_isReactive);
  }
  function zn(e) {
    return !!(e && e.__v_isReadonly);
  }
  function Jt(e) {
    return !!(e && e.__v_isShallow);
  }
  function ds(e) {
    return e ? !!e.__v_raw : false;
  }
  De = function(e) {
    const t = e && e.__v_raw;
    return t ? De(t) : e;
  };
  za = function(e) {
    return !We(e, "__v_skip") && Object.isExtensible(e) && lu(e, "__v_skip", true), e;
  };
  const dn = (e) => qe(e) ? hs(e) : e, Xr = (e) => qe(e) ? ca(e) : e;
  st = function(e) {
    return e ? e.__v_isRef === true : false;
  };
  jt = function(e) {
    return Mu(e, false);
  };
  cd = function(e) {
    return Mu(e, true);
  };
  function Mu(e, t) {
    return st(e) ? e : new ud(e, t);
  }
  class ud {
    constructor(t, n) {
      this.dep = new us(), this.__v_isRef = true, this.__v_isShallow = false, this._rawValue = n ? t : De(t), this._value = n ? t : dn(t), this.__v_isShallow = n;
    }
    get value() {
      return this.dep.track(), this._value;
    }
    set value(t) {
      const n = this._rawValue, r = this.__v_isShallow || Jt(t) || zn(t);
      t = r ? t : De(t), Gt(t, n) && (this._rawValue = t, this._value = r ? t : dn(t), this.dep.trigger());
    }
  }
  qr = function(e) {
    return st(e) ? e.value : e;
  };
  K0 = function(e) {
    return _e(e) ? e() : qr(e);
  };
  const fd = {
    get: (e, t, n) => t === "__v_raw" ? e : qr(Reflect.get(e, t, n)),
    set: (e, t, n, r) => {
      const l = e[t];
      return st(l) && !st(n) ? (l.value = n, true) : Reflect.set(e, t, n, r);
    }
  };
  function Nu(e) {
    return Gn(e) ? e : new Proxy(e, fd);
  }
  class hd {
    constructor(t) {
      this.__v_isRef = true, this._value = void 0;
      const n = this.dep = new us(), { get: r, set: l } = t(n.track.bind(n), n.trigger.bind(n));
      this._get = r, this._set = l;
    }
    get value() {
      return this._value = this._get();
    }
    set value(t) {
      this._set(t);
    }
  }
  function dd(e) {
    return new hd(e);
  }
  pd = function(e) {
    const t = Ie(e) ? new Array(e.length) : {};
    for (const n in e) t[n] = Pu(e, n);
    return t;
  };
  class gd {
    constructor(t, n, r) {
      this._object = t, this._key = n, this._defaultValue = r, this.__v_isRef = true, this._value = void 0, this._raw = De(t);
      let l = true, c = t;
      if (!Ie(t) || !os(String(n))) do
        l = !ds(c) || Jt(c);
      while (l && (c = c.__v_raw));
      this._shallow = l;
    }
    get value() {
      let t = this._object[this._key];
      return this._shallow && (t = qr(t)), this._value = t === void 0 ? this._defaultValue : t;
    }
    set value(t) {
      if (this._shallow && st(this._raw[this._key])) {
        const n = this._object[this._key];
        if (st(n)) {
          n.value = t;
          return;
        }
      }
      this._object[this._key] = t;
    }
    get dep() {
      return Vh(this._raw, this._key);
    }
  }
  class md {
    constructor(t) {
      this._getter = t, this.__v_isRef = true, this.__v_isReadonly = true, this._value = void 0;
    }
    get value() {
      return this._value = this._getter();
    }
  }
  J0 = function(e, t, n) {
    return st(e) ? e : _e(e) ? new md(e) : qe(e) && arguments.length > 1 ? Pu(e, t, n) : jt(e);
  };
  function Pu(e, t, n) {
    return new gd(e, t, n);
  }
  class wd {
    constructor(t, n, r) {
      this.fn = t, this.setter = n, this._value = void 0, this.dep = new us(this), this.__v_isRef = true, this.deps = void 0, this.depsTail = void 0, this.flags = 16, this.globalVersion = Gi - 1, this.next = void 0, this.effect = this, this.__v_isReadonly = !n, this.isSSR = r;
    }
    notify() {
      if (this.flags |= 16, !(this.flags & 8) && Je !== this) return wu(this, true), true;
    }
    get value() {
      const t = this.dep.track();
      return vu(this), t && (t.version = this.dep.version), this._value;
    }
    set value(t) {
      this.setter && this.setter(t);
    }
  }
  function yd(e, t, n = false) {
    let r, l;
    return _e(e) ? r = e : (r = e.get, l = e.set), new wd(r, l, n);
  }
  const co = {}, Lo = /* @__PURE__ */ new WeakMap();
  let Sr;
  function bd(e, t = false, n = Sr) {
    if (n) {
      let r = Lo.get(n);
      r || Lo.set(n, r = []), r.push(e);
    }
  }
  function vd(e, t, n = Fe) {
    const { immediate: r, deep: l, once: c, scheduler: f, augmentJob: h, call: p } = n, v = (G) => l ? G : Jt(G) || l === false || l === 0 ? xn(G, 1) : xn(G);
    let g, T, M, R, j = false, L = false;
    if (st(e) ? (T = () => e.value, j = Jt(e)) : Gn(e) ? (T = () => v(e), j = true) : Ie(e) ? (L = true, j = e.some((G) => Gn(G) || Jt(G)), T = () => e.map((G) => {
      if (st(G)) return G.value;
      if (Gn(G)) return v(G);
      if (_e(G)) return p ? p(G, 2) : G();
    })) : _e(e) ? t ? T = p ? () => p(e, 2) : e : T = () => {
      if (M) {
        Bn();
        try {
          M();
        } finally {
          $n();
        }
      }
      const G = Sr;
      Sr = g;
      try {
        return p ? p(e, 3, [
          R
        ]) : e(R);
      } finally {
        Sr = G;
      }
    } : T = fn, t && l) {
      const G = T, ue = l === true ? 1 / 0 : l;
      T = () => xn(G(), ue);
    }
    const he = pu(), re = () => {
      g.stop(), he && he.active && xa(he.effects, g);
    };
    if (c && t) {
      const G = t;
      t = (...ue) => {
        G(...ue), re();
      };
    }
    let K = L ? new Array(e.length).fill(co) : co;
    const ee = (G) => {
      if (!(!(g.flags & 1) || !g.dirty && !G)) if (t) {
        const ue = g.run();
        if (l || j || (L ? ue.some((ge, ie) => Gt(ge, K[ie])) : Gt(ue, K))) {
          M && M();
          const ge = Sr;
          Sr = g;
          try {
            const ie = [
              ue,
              K === co ? void 0 : L && K[0] === co ? [] : K,
              R
            ];
            K = ue, p ? p(t, 3, ie) : t(...ie);
          } finally {
            Sr = ge;
          }
        }
      } else g.run();
    };
    return h && h(ee), g = new gu(T), g.scheduler = f ? () => f(ee, false) : ee, R = (G) => bd(G, false, g), M = g.onStop = () => {
      const G = Lo.get(g);
      if (G) {
        if (p) p(G, 4);
        else for (const ue of G) ue();
        Lo.delete(g);
      }
    }, t ? r ? ee(true) : K = g.run() : f ? f(ee.bind(null, true), true) : g.run(), re.pause = g.pause.bind(g), re.resume = g.resume.bind(g), re.stop = re, re;
  }
  function xn(e, t = 1 / 0, n) {
    if (t <= 0 || !qe(e) || e.__v_skip || (n = n || /* @__PURE__ */ new Map(), (n.get(e) || 0) >= t)) return e;
    if (n.set(e, t), t--, st(e)) xn(e.value, t, n);
    else if (Ie(e)) for (let r = 0; r < e.length; r++) xn(e[r], t, n);
    else if (iu(e) || Hr(e)) e.forEach((r) => {
      xn(r, t, n);
    });
    else if (au(e)) {
      for (const r in e) xn(e[r], t, n);
      for (const r of Object.getOwnPropertySymbols(e)) Object.prototype.propertyIsEnumerable.call(e, r) && xn(e[r], t, n);
    }
    return e;
  }
  function Zi(e, t, n, r) {
    try {
      return r ? e(...r) : e();
    } catch (l) {
      ps(l, t, n);
    }
  }
  function pn(e, t, n, r) {
    if (_e(e)) {
      const l = Zi(e, t, n, r);
      return l && ou(l) && l.catch((c) => {
        ps(c, t, n);
      }), l;
    }
    if (Ie(e)) {
      const l = [];
      for (let c = 0; c < e.length; c++) l.push(pn(e[c], t, n, r));
      return l;
    }
  }
  function ps(e, t, n, r = true) {
    const l = t ? t.vnode : null, { errorHandler: c, throwUnhandledErrorInProduction: f } = t && t.appContext.config || Fe;
    if (t) {
      let h = t.parent;
      const p = t.proxy, v = `https://vuejs.org/error-reference/#runtime-${n}`;
      for (; h; ) {
        const g = h.ec;
        if (g) {
          for (let T = 0; T < g.length; T++) if (g[T](e, p, v) === false) return;
        }
        h = h.parent;
      }
      if (c) {
        Bn(), Zi(c, null, 10, [
          e,
          p,
          v
        ]), $n();
        return;
      }
    }
    Ed(e, n, l, r, f);
  }
  function Ed(e, t, n, r = true, l = false) {
    if (l) throw e;
    console.error(e);
  }
  const Dt = [];
  let vn = -1;
  const Yr = [];
  let ir = null, zr = 0;
  const Cu = Promise.resolve();
  let Do = null;
  ku = function(e) {
    const t = Do || Cu;
    return e ? t.then(this ? e.bind(this) : e) : t;
  };
  function Id(e) {
    let t = vn + 1, n = Dt.length;
    for (; t < n; ) {
      const r = t + n >>> 1, l = Dt[r], c = Bi(l);
      c < e || c === e && l.flags & 2 ? t = r + 1 : n = r;
    }
    return t;
  }
  function Va(e) {
    if (!(e.flags & 1)) {
      const t = Bi(e), n = Dt[Dt.length - 1];
      !n || !(e.flags & 2) && t >= Bi(n) ? Dt.push(e) : Dt.splice(Id(t), 0, e), e.flags |= 1, Lu();
    }
  }
  function Lu() {
    Do || (Do = Cu.then(xu));
  }
  function Du(e) {
    Ie(e) ? Yr.push(...e) : ir && e.id === -1 ? ir.splice(zr + 1, 0, e) : e.flags & 1 || (Yr.push(e), e.flags |= 1), Lu();
  }
  function ml(e, t, n = vn + 1) {
    for (; n < Dt.length; n++) {
      const r = Dt[n];
      if (r && r.flags & 2) {
        if (e && r.id !== e.uid) continue;
        Dt.splice(n, 1), n--, r.flags & 4 && (r.flags &= -2), r(), r.flags & 4 || (r.flags &= -2);
      }
    }
  }
  function Fu(e) {
    if (Yr.length) {
      const t = [
        ...new Set(Yr)
      ].sort((n, r) => Bi(n) - Bi(r));
      if (Yr.length = 0, ir) {
        ir.push(...t);
        return;
      }
      for (ir = t, zr = 0; zr < ir.length; zr++) {
        const n = ir[zr];
        n.flags & 4 && (n.flags &= -2), n.flags & 8 || n(), n.flags &= -2;
      }
      ir = null, zr = 0;
    }
  }
  const Bi = (e) => e.id == null ? e.flags & 2 ? -1 : 1 / 0 : e.id;
  function xu(e) {
    try {
      for (vn = 0; vn < Dt.length; vn++) {
        const t = Dt[vn];
        t && !(t.flags & 8) && (t.flags & 4 && (t.flags &= -2), Zi(t, t.i, t.i ? 15 : 14), t.flags & 4 || (t.flags &= -2));
      }
    } finally {
      for (; vn < Dt.length; vn++) {
        const t = Dt[vn];
        t && (t.flags &= -2);
      }
      vn = -1, Dt.length = 0, Fu(), Do = null, (Dt.length || Yr.length) && xu();
    }
  }
  let It = null, ju = null;
  function Fo(e) {
    const t = It;
    return It = e, ju = e && e.type.__scopeId || null, t;
  }
  Td = function(e, t = It, n) {
    if (!t || e._n) return e;
    const r = (...l) => {
      r._d && Bo(-1);
      const c = Fo(t);
      let f;
      try {
        f = e(...l);
      } finally {
        Fo(c), r._d && Bo(1);
      }
      return f;
    };
    return r._n = true, r._c = true, r._d = true, r;
  };
  X0 = function(e, t) {
    if (It === null) return e;
    const n = vs(It), r = e.dirs || (e.dirs = []);
    for (let l = 0; l < t.length; l++) {
      let [c, f, h, p = Fe] = t[l];
      c && (_e(c) && (c = {
        mounted: c,
        updated: c
      }), c.deep && xn(f), r.push({
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
  function yr(e, t, n, r) {
    const l = e.dirs, c = t && t.dirs;
    for (let f = 0; f < l.length; f++) {
      const h = l[f];
      c && (h.oldValue = c[f].value);
      let p = h.dir[r];
      p && (Bn(), pn(p, n, 8, [
        e.el,
        h,
        e,
        t
      ]), $n());
    }
  }
  const Uu = /* @__PURE__ */ Symbol("_vte"), Gu = (e) => e.__isTeleport, Pi = (e) => e && (e.disabled || e.disabled === ""), wl = (e) => e && (e.defer || e.defer === ""), yl = (e) => typeof SVGElement < "u" && e instanceof SVGElement, bl = (e) => typeof MathMLElement == "function" && e instanceof MathMLElement, ua = (e, t) => {
    const n = e && e.to;
    return ot(n) ? t ? t(n) : null : n;
  }, Wu = {
    name: "Teleport",
    __isTeleport: true,
    process(e, t, n, r, l, c, f, h, p, v) {
      const { mc: g, pc: T, pbc: M, o: { insert: R, querySelector: j, createText: L, createComment: he } } = v, re = Pi(t.props);
      let { shapeFlag: K, children: ee, dynamicChildren: G } = t;
      if (e == null) {
        const ue = t.el = L(""), ge = t.anchor = L("");
        R(ue, n, r), R(ge, n, r);
        const ie = (te, me) => {
          K & 16 && g(ee, te, me, l, c, f, h, p);
        }, fe = () => {
          const te = t.target = ua(t.props, j), me = Bu(te, t, L, R);
          te && (f !== "svg" && yl(te) ? f = "svg" : f !== "mathml" && bl(te) && (f = "mathml"), l && l.isCE && (l.ce._teleportTargets || (l.ce._teleportTargets = /* @__PURE__ */ new Set())).add(te), re || (ie(te, me), To(t, false)));
        };
        re && (ie(n, ge), To(t, true)), wl(t.props) ? (t.el.__isMounted = false, wt(() => {
          fe(), delete t.el.__isMounted;
        }, c)) : fe();
      } else {
        if (wl(t.props) && e.el.__isMounted === false) {
          wt(() => {
            Wu.process(e, t, n, r, l, c, f, h, p, v);
          }, c);
          return;
        }
        t.el = e.el, t.targetStart = e.targetStart;
        const ue = t.anchor = e.anchor, ge = t.target = e.target, ie = t.targetAnchor = e.targetAnchor, fe = Pi(e.props), te = fe ? n : ge, me = fe ? ue : ie;
        if (f === "svg" || yl(ge) ? f = "svg" : (f === "mathml" || bl(ge)) && (f = "mathml"), G ? (M(e.dynamicChildren, G, te, l, c, f, h), Za(e, t, true)) : p || T(e, t, te, me, l, c, f, h, false), re) fe ? t.props && e.props && t.props.to !== e.props.to && (t.props.to = e.props.to) : uo(t, n, ue, v, 1);
        else if ((t.props && t.props.to) !== (e.props && e.props.to)) {
          const Re = t.target = ua(t.props, j);
          Re && uo(t, Re, null, v, 0);
        } else fe && uo(t, ge, ie, v, 1);
        To(t, re);
      }
    },
    remove(e, t, n, { um: r, o: { remove: l } }, c) {
      const { shapeFlag: f, children: h, anchor: p, targetStart: v, targetAnchor: g, target: T, props: M } = e;
      if (T && (l(v), l(g)), c && l(p), f & 16) {
        const R = c || !Pi(M);
        for (let j = 0; j < h.length; j++) {
          const L = h[j];
          r(L, t, n, R, !!L.dynamicChildren);
        }
      }
    },
    move: uo,
    hydrate: Sd
  };
  function uo(e, t, n, { o: { insert: r }, m: l }, c = 2) {
    c === 0 && r(e.targetAnchor, t, n);
    const { el: f, anchor: h, shapeFlag: p, children: v, props: g } = e, T = c === 2;
    if (T && r(f, t, n), (!T || Pi(g)) && p & 16) for (let M = 0; M < v.length; M++) l(v[M], t, n, 2);
    T && r(h, t, n);
  }
  function Sd(e, t, n, r, l, c, { o: { nextSibling: f, parentNode: h, querySelector: p, insert: v, createText: g } }, T) {
    function M(L, he, re, K) {
      he.anchor = T(f(L), he, h(L), n, r, l, c), he.targetStart = re, he.targetAnchor = K;
    }
    const R = t.target = ua(t.props, p), j = Pi(t.props);
    if (R) {
      const L = R._lpa || R.firstChild;
      if (t.shapeFlag & 16) if (j) M(e, t, L, L && f(L));
      else {
        t.anchor = f(e);
        let he = L;
        for (; he; ) {
          if (he && he.nodeType === 8) {
            if (he.data === "teleport start anchor") t.targetStart = he;
            else if (he.data === "teleport anchor") {
              t.targetAnchor = he, R._lpa = t.targetAnchor && f(t.targetAnchor);
              break;
            }
          }
          he = f(he);
        }
        t.targetAnchor || Bu(R, t, g, v), T(L && f(L), t, R, n, r, l, c);
      }
      To(t, j);
    } else j && t.shapeFlag & 16 && M(e, t, e, f(e));
    return t.anchor && f(t.anchor);
  }
  Z0 = Wu;
  function To(e, t) {
    const n = e.ctx;
    if (n && n.ut) {
      let r, l;
      for (t ? (r = e.el, l = e.anchor) : (r = e.targetStart, l = e.targetAnchor); r && r !== l; ) r.nodeType === 1 && r.setAttribute("data-v-owner", n.uid), r = r.nextSibling;
      n.ut();
    }
  }
  function Bu(e, t, n, r) {
    const l = t.targetStart = n(""), c = t.targetAnchor = n("");
    return l[Uu] = c, e && (r(l, e), r(c, e)), c;
  }
  const Ln = /* @__PURE__ */ Symbol("_leaveCb"), fo = /* @__PURE__ */ Symbol("_enterCb");
  function $u() {
    const e = {
      isMounted: false,
      isLeaving: false,
      isUnmounting: false,
      leavingVNodes: /* @__PURE__ */ new Map()
    };
    return Qi(() => {
      e.isMounted = true;
    }), Ya(() => {
      e.isUnmounting = true;
    }), e;
  }
  const tn = [
    Function,
    Array
  ], zu = {
    mode: String,
    appear: Boolean,
    persisted: Boolean,
    onBeforeEnter: tn,
    onEnter: tn,
    onAfterEnter: tn,
    onEnterCancelled: tn,
    onBeforeLeave: tn,
    onLeave: tn,
    onAfterLeave: tn,
    onLeaveCancelled: tn,
    onBeforeAppear: tn,
    onAppear: tn,
    onAfterAppear: tn,
    onAppearCancelled: tn
  }, Vu = (e) => {
    const t = e.subTree;
    return t.component ? Vu(t.component) : t;
  }, _d = {
    name: "BaseTransition",
    props: zu,
    setup(e, { slots: t }) {
      const n = hr(), r = $u();
      return () => {
        const l = t.default && Ha(t.default(), true);
        if (!l || !l.length) return;
        const c = Hu(l), f = De(e), { mode: h } = f;
        if (r.isLeaving) return xs(c);
        const p = vl(c);
        if (!p) return xs(c);
        let v = $i(p, f, r, n, (T) => v = T);
        p.type !== Et && ur(p, v);
        let g = n.subTree && vl(n.subTree);
        if (g && g.type !== Et && !sr(g, p) && Vu(n).type !== Et) {
          let T = $i(g, f, r, n);
          if (ur(g, T), h === "out-in" && p.type !== Et) return r.isLeaving = true, T.afterLeave = () => {
            r.isLeaving = false, n.job.flags & 8 || n.update(), delete T.afterLeave, g = void 0;
          }, xs(c);
          h === "in-out" && p.type !== Et ? T.delayLeave = (M, R, j) => {
            const L = qu(r, g);
            L[String(g.key)] = g, M[Ln] = () => {
              R(), M[Ln] = void 0, delete v.delayedLeave, g = void 0;
            }, v.delayedLeave = () => {
              j(), delete v.delayedLeave, g = void 0;
            };
          } : g = void 0;
        } else g && (g = void 0);
        return c;
      };
    }
  };
  function Hu(e) {
    let t = e[0];
    if (e.length > 1) {
      for (const n of e) if (n.type !== Et) {
        t = n;
        break;
      }
    }
    return t;
  }
  const Od = _d;
  function qu(e, t) {
    const { leavingVNodes: n } = e;
    let r = n.get(t.type);
    return r || (r = /* @__PURE__ */ Object.create(null), n.set(t.type, r)), r;
  }
  function $i(e, t, n, r, l) {
    const { appear: c, mode: f, persisted: h = false, onBeforeEnter: p, onEnter: v, onAfterEnter: g, onEnterCancelled: T, onBeforeLeave: M, onLeave: R, onAfterLeave: j, onLeaveCancelled: L, onBeforeAppear: he, onAppear: re, onAfterAppear: K, onAppearCancelled: ee } = t, G = String(e.key), ue = qu(n, e), ge = (te, me) => {
      te && pn(te, r, 9, me);
    }, ie = (te, me) => {
      const Re = me[1];
      ge(te, me), Ie(te) ? te.every((de) => de.length <= 1) && Re() : te.length <= 1 && Re();
    }, fe = {
      mode: f,
      persisted: h,
      beforeEnter(te) {
        let me = p;
        if (!n.isMounted) if (c) me = he || p;
        else return;
        te[Ln] && te[Ln](true);
        const Re = ue[G];
        Re && sr(e, Re) && Re.el[Ln] && Re.el[Ln](), ge(me, [
          te
        ]);
      },
      enter(te) {
        let me = v, Re = g, de = T;
        if (!n.isMounted) if (c) me = re || v, Re = K || g, de = ee || T;
        else return;
        let Ue = false;
        const ft = te[fo] = ($t) => {
          Ue || (Ue = true, $t ? ge(de, [
            te
          ]) : ge(Re, [
            te
          ]), fe.delayedLeave && fe.delayedLeave(), te[fo] = void 0);
        };
        me ? ie(me, [
          te,
          ft
        ]) : ft();
      },
      leave(te, me) {
        const Re = String(e.key);
        if (te[fo] && te[fo](true), n.isUnmounting) return me();
        ge(M, [
          te
        ]);
        let de = false;
        const Ue = te[Ln] = (ft) => {
          de || (de = true, me(), ft ? ge(L, [
            te
          ]) : ge(j, [
            te
          ]), te[Ln] = void 0, ue[Re] === e && delete ue[Re]);
        };
        ue[Re] = e, R ? ie(R, [
          te,
          Ue
        ]) : Ue();
      },
      clone(te) {
        const me = $i(te, t, n, r, l);
        return l && l(me), me;
      }
    };
    return fe;
  }
  function xs(e) {
    if (gs(e)) return e = Vn(e), e.children = null, e;
  }
  function vl(e) {
    if (!gs(e)) return Gu(e.type) && e.children ? Hu(e.children) : e;
    if (e.component) return e.component.subTree;
    const { shapeFlag: t, children: n } = e;
    if (n) {
      if (t & 16) return n[0];
      if (t & 32 && _e(n.default)) return n.default();
    }
  }
  function ur(e, t) {
    e.shapeFlag & 6 && e.component ? (e.transition = t, ur(e.component.subTree, t)) : e.shapeFlag & 128 ? (e.ssContent.transition = t.clone(e.ssContent), e.ssFallback.transition = t.clone(e.ssFallback)) : e.transition = t;
  }
  function Ha(e, t = false, n) {
    let r = [], l = 0;
    for (let c = 0; c < e.length; c++) {
      let f = e[c];
      const h = n == null ? f.key : String(n) + String(f.key != null ? f.key : c);
      f.type === Rt ? (f.patchFlag & 128 && l++, r = r.concat(Ha(f.children, t, h))) : (t || f.type !== Et) && r.push(h != null ? Vn(f, {
        key: h
      }) : f);
    }
    if (l > 1) for (let c = 0; c < r.length; c++) r[c].patchFlag = -2;
    return r;
  }
  Ad = function(e, t) {
    return _e(e) ? dt({
      name: e.name
    }, t, {
      setup: e
    }) : e;
  };
  function Yu(e) {
    e.ids = [
      e.ids[0] + e.ids[2]++ + "-",
      0,
      0
    ];
  }
  Q0 = function(e) {
    const t = hr(), n = cd(null);
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
  const xo = /* @__PURE__ */ new WeakMap();
  function Ci(e, t, n, r, l = false) {
    if (Ie(e)) {
      e.forEach((j, L) => Ci(j, t && (Ie(t) ? t[L] : t), n, r, l));
      return;
    }
    if (Cr(r) && !l) {
      r.shapeFlag & 512 && r.type.__asyncResolved && r.component.subTree.component && Ci(e, t, n, r.component.subTree);
      return;
    }
    const c = r.shapeFlag & 4 ? vs(r.component) : r.el, f = l ? null : c, { i: h, r: p } = e, v = t && t.r, g = h.refs === Fe ? h.refs = {} : h.refs, T = h.setupState, M = De(T), R = T === Fe ? ru : (j) => We(M, j);
    if (v != null && v !== p) {
      if (El(t), ot(v)) g[v] = null, R(v) && (T[v] = null);
      else if (st(v)) {
        v.value = null;
        const j = t;
        j.k && (g[j.k] = null);
      }
    }
    if (_e(p)) Zi(p, h, 12, [
      f,
      g
    ]);
    else {
      const j = ot(p), L = st(p);
      if (j || L) {
        const he = () => {
          if (e.f) {
            const re = j ? R(p) ? T[p] : g[p] : p.value;
            if (l) Ie(re) && xa(re, c);
            else if (Ie(re)) re.includes(c) || re.push(c);
            else if (j) g[p] = [
              c
            ], R(p) && (T[p] = g[p]);
            else {
              const K = [
                c
              ];
              p.value = K, e.k && (g[e.k] = K);
            }
          } else j ? (g[p] = f, R(p) && (T[p] = f)) : L && (p.value = f, e.k && (g[e.k] = f));
        };
        if (f) {
          const re = () => {
            he(), xo.delete(e);
          };
          re.id = -1, xo.set(e, re), wt(re, n);
        } else El(e), he();
      }
    }
  }
  function El(e) {
    const t = xo.get(e);
    t && (t.flags |= 8, xo.delete(e));
  }
  ls().requestIdleCallback;
  ls().cancelIdleCallback;
  let Cr, gs, Rd;
  Cr = (e) => !!e.type.__asyncLoader;
  gs = (e) => e.type.__isKeepAlive;
  Rd = {
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
      const n = hr(), r = n.ctx;
      if (!r.renderer) return () => {
        const K = t.default && t.default();
        return K && K.length === 1 ? K[0] : K;
      };
      const l = /* @__PURE__ */ new Map(), c = /* @__PURE__ */ new Set();
      let f = null;
      const h = n.suspense, { renderer: { p, m: v, um: g, o: { createElement: T } } } = r, M = T("div");
      r.activate = (K, ee, G, ue, ge) => {
        const ie = K.component;
        v(K, ee, G, 0, h), p(ie.vnode, K, ee, G, ie, h, ue, K.slotScopeIds, ge), wt(() => {
          ie.isDeactivated = false, ie.a && Ri(ie.a);
          const fe = K.props && K.props.onVnodeMounted;
          fe && nn(fe, ie.parent, K);
        }, h);
      }, r.deactivate = (K) => {
        const ee = K.component;
        Go(ee.m), Go(ee.a), v(K, M, null, 1, h), wt(() => {
          ee.da && Ri(ee.da);
          const G = K.props && K.props.onVnodeUnmounted;
          G && nn(G, ee.parent, K), ee.isDeactivated = true;
        }, h);
      };
      function R(K) {
        js(K), g(K, n, h, true);
      }
      function j(K) {
        l.forEach((ee, G) => {
          const ue = wa(ee.type);
          ue && !K(ue) && L(G);
        });
      }
      function L(K) {
        const ee = l.get(K);
        ee && (!f || !sr(ee, f)) ? R(ee) : f && js(f), l.delete(K), c.delete(K);
      }
      Kr(() => [
        e.include,
        e.exclude
      ], ([K, ee]) => {
        K && j((G) => Ti(K, G)), ee && j((G) => !Ti(ee, G));
      }, {
        flush: "post",
        deep: true
      });
      let he = null;
      const re = () => {
        he != null && (Wo(n.subTree.type) ? wt(() => {
          l.set(he, ho(n.subTree));
        }, n.subTree.suspense) : l.set(he, ho(n.subTree)));
      };
      return Qi(re), qa(re), Ya(() => {
        l.forEach((K) => {
          const { subTree: ee, suspense: G } = n, ue = ho(ee);
          if (K.type === ue.type && K.key === ue.key) {
            js(ue);
            const ge = ue.component.da;
            ge && wt(ge, G);
            return;
          }
          R(K);
        });
      }), () => {
        if (he = null, !t.default) return f = null;
        const K = t.default(), ee = K[0];
        if (K.length > 1) return f = null, K;
        if (!Zr(ee) || !(ee.shapeFlag & 4) && !(ee.shapeFlag & 128)) return f = null, ee;
        let G = ho(ee);
        if (G.type === Et) return f = null, G;
        const ue = G.type, ge = wa(Cr(G) ? G.type.__asyncResolved || {} : ue), { include: ie, exclude: fe, max: te } = e;
        if (ie && (!ge || !Ti(ie, ge)) || fe && ge && Ti(fe, ge)) return G.shapeFlag &= -257, f = G, ee;
        const me = G.key == null ? ue : G.key, Re = l.get(me);
        return G.el && (G = Vn(G), ee.shapeFlag & 128 && (ee.ssContent = G)), he = me, Re ? (G.el = Re.el, G.component = Re.component, G.transition && ur(G, G.transition), G.shapeFlag |= 512, c.delete(me), c.add(me)) : (c.add(me), te && c.size > parseInt(te, 10) && L(c.values().next().value)), G.shapeFlag |= 256, f = G, Wo(ee.type) ? ee : G;
      };
    }
  };
  ev = Rd;
  function Ti(e, t) {
    return Ie(e) ? e.some((n) => Ti(n, t)) : ot(e) ? e.split(",").includes(t) : Mh(e) ? (e.lastIndex = 0, e.test(t)) : false;
  }
  Md = function(e, t) {
    Ku(e, "a", t);
  };
  Nd = function(e, t) {
    Ku(e, "da", t);
  };
  function Ku(e, t, n = Mt) {
    const r = e.__wdc || (e.__wdc = () => {
      let l = n;
      for (; l; ) {
        if (l.isDeactivated) return;
        l = l.parent;
      }
      return e();
    });
    if (ms(t, r, n), n) {
      let l = n.parent;
      for (; l && l.parent; ) gs(l.parent.vnode) && Pd(r, t, n, l), l = l.parent;
    }
  }
  function Pd(e, t, n, r) {
    const l = ms(t, e, r, true);
    Ka(() => {
      xa(r[t], l);
    }, n);
  }
  function js(e) {
    e.shapeFlag &= -257, e.shapeFlag &= -513;
  }
  function ho(e) {
    return e.shapeFlag & 128 ? e.ssContent : e;
  }
  function ms(e, t, n = Mt, r = false) {
    if (n) {
      const l = n[e] || (n[e] = []), c = t.__weh || (t.__weh = (...f) => {
        Bn();
        const h = eo(n), p = pn(t, n, e, f);
        return h(), $n(), p;
      });
      return r ? l.unshift(c) : l.push(c), c;
    }
  }
  let Kn, Ju, qa, kd, Ld, Dd;
  Kn = (e) => (t, n = Mt) => {
    (!Vi || e === "sp") && ms(e, (...r) => t(...r), n);
  };
  Cd = Kn("bm");
  Qi = Kn("m");
  Ju = Kn("bu");
  qa = Kn("u");
  Ya = Kn("bum");
  Ka = Kn("um");
  kd = Kn("sp");
  Ld = Kn("rtg");
  Dd = Kn("rtc");
  function Fd(e, t = Mt) {
    ms("ec", e, t);
  }
  const xd = "components", Xu = /* @__PURE__ */ Symbol.for("v-ndc");
  tv = function(e) {
    return ot(e) ? jd(xd, e, false) || e : e || Xu;
  };
  function jd(e, t, n = true, r = false) {
    const l = It || Mt;
    if (l) {
      const c = l.type;
      {
        const h = wa(c, false);
        if (h && (h === t || h === Xt(t) || h === as(Xt(t)))) return c;
      }
      const f = Il(l[e] || c[e], t) || Il(l.appContext[e], t);
      return !f && r ? c : f;
    }
  }
  function Il(e, t) {
    return e && (e[t] || e[Xt(t)] || e[as(Xt(t))]);
  }
  Ud = function(e, t, n, r) {
    let l;
    const c = n, f = Ie(e);
    if (f || ot(e)) {
      const h = f && Gn(e);
      let p = false, v = false;
      h && (p = !Jt(e), v = zn(e), e = fs(e)), l = new Array(e.length);
      for (let g = 0, T = e.length; g < T; g++) l[g] = t(p ? v ? Xr(dn(e[g])) : dn(e[g]) : e[g], g, void 0, c);
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
  nv = function(e, t) {
    for (let n = 0; n < t.length; n++) {
      const r = t[n];
      if (Ie(r)) for (let l = 0; l < r.length; l++) e[r[l].name] = r[l].fn;
      else r && (e[r.name] = r.key ? (...l) => {
        const c = r.fn(...l);
        return c && (c.key = r.key), c;
      } : r.fn);
    }
    return e;
  };
  rv = function(e, t, n = {}, r, l) {
    if (It.ce || It.parent && Cr(It.parent) && It.parent.ce) {
      const v = Object.keys(n).length > 0;
      return t !== "default" && (n.name = t), rn(), ga(Rt, null, [
        Nt("slot", n, r && r())
      ], v ? -2 : 64);
    }
    let c = e[t];
    c && c._c && (c._d = false), rn();
    const f = c && Zu(c(n)), h = n.key || f && f.key, p = ga(Rt, {
      key: (h && !qn(h) ? h : `_${t}`) + (!f && r ? "_fb" : "")
    }, f || (r ? r() : []), f && e._ === 1 ? 64 : -2);
    return !l && p.scopeId && (p.slotScopeIds = [
      p.scopeId + "-s"
    ]), c && c._c && (c._d = true), p;
  };
  function Zu(e) {
    return e.some((t) => Zr(t) ? !(t.type === Et || t.type === Rt && !Zu(t.children)) : true) ? e : null;
  }
  const fa = (e) => e ? wf(e) ? vs(e) : fa(e.parent) : null, ki = dt(/* @__PURE__ */ Object.create(null), {
    $: (e) => e,
    $el: (e) => e.vnode.el,
    $data: (e) => e.data,
    $props: (e) => e.props,
    $attrs: (e) => e.attrs,
    $slots: (e) => e.slots,
    $refs: (e) => e.refs,
    $parent: (e) => fa(e.parent),
    $root: (e) => fa(e.root),
    $host: (e) => e.ce,
    $emit: (e) => e.emit,
    $options: (e) => ef(e),
    $forceUpdate: (e) => e.f || (e.f = () => {
      Va(e.update);
    }),
    $nextTick: (e) => e.n || (e.n = ku.bind(e.proxy)),
    $watch: (e) => Qd.bind(e)
  }), Us = (e, t) => e !== Fe && !e.__isScriptSetup && We(e, t), Gd = {
    get({ _: e }, t) {
      if (t === "__v_skip") return true;
      const { ctx: n, setupState: r, data: l, props: c, accessCache: f, type: h, appContext: p } = e;
      if (t[0] !== "$") {
        const M = f[t];
        if (M !== void 0) switch (M) {
          case 1:
            return r[t];
          case 2:
            return l[t];
          case 4:
            return n[t];
          case 3:
            return c[t];
        }
        else {
          if (Us(r, t)) return f[t] = 1, r[t];
          if (l !== Fe && We(l, t)) return f[t] = 2, l[t];
          if (We(c, t)) return f[t] = 3, c[t];
          if (n !== Fe && We(n, t)) return f[t] = 4, n[t];
          ha && (f[t] = 0);
        }
      }
      const v = ki[t];
      let g, T;
      if (v) return t === "$attrs" && At(e.attrs, "get", ""), v(e);
      if ((g = h.__cssModules) && (g = g[t])) return g;
      if (n !== Fe && We(n, t)) return f[t] = 4, n[t];
      if (T = p.config.globalProperties, We(T, t)) return T[t];
    },
    set({ _: e }, t, n) {
      const { data: r, setupState: l, ctx: c } = e;
      return Us(l, t) ? (l[t] = n, true) : r !== Fe && We(r, t) ? (r[t] = n, true) : We(e.props, t) || t[0] === "$" && t.slice(1) in e ? false : (c[t] = n, true);
    },
    has({ _: { data: e, setupState: t, accessCache: n, ctx: r, appContext: l, props: c, type: f } }, h) {
      let p;
      return !!(n[h] || e !== Fe && h[0] !== "$" && We(e, h) || Us(t, h) || We(c, h) || We(r, h) || We(ki, h) || We(l.config.globalProperties, h) || (p = f.__cssModules) && p[h]);
    },
    defineProperty(e, t, n) {
      return n.get != null ? e._.accessCache[t] = 0 : We(n, "value") && this.set(e, t, n.value, null), Reflect.defineProperty(e, t, n);
    }
  };
  function jo(e) {
    return Ie(e) ? e.reduce((t, n) => (t[n] = null, t), {}) : e;
  }
  iv = function(e, t) {
    return !e || !t ? e || t : Ie(e) && Ie(t) ? e.concat(t) : dt({}, jo(e), jo(t));
  };
  let ha = true;
  function Wd(e) {
    const t = ef(e), n = e.proxy, r = e.ctx;
    ha = false, t.beforeCreate && Tl(t.beforeCreate, e, "bc");
    const { data: l, computed: c, methods: f, watch: h, provide: p, inject: v, created: g, beforeMount: T, mounted: M, beforeUpdate: R, updated: j, activated: L, deactivated: he, beforeDestroy: re, beforeUnmount: K, destroyed: ee, unmounted: G, render: ue, renderTracked: ge, renderTriggered: ie, errorCaptured: fe, serverPrefetch: te, expose: me, inheritAttrs: Re, components: de, directives: Ue, filters: ft } = t;
    if (v && Bd(v, r, null), f) for (const Pe in f) {
      const ze = f[Pe];
      _e(ze) && (r[Pe] = ze.bind(n));
    }
    if (l) {
      const Pe = l.call(n, n);
      qe(Pe) && (e.data = hs(Pe));
    }
    if (ha = true, c) for (const Pe in c) {
      const ze = c[Pe], _n = _e(ze) ? ze.bind(n, n) : _e(ze.get) ? ze.get.bind(n, n) : fn, xr = !_e(ze) && _e(ze.set) ? ze.set.bind(n) : fn, On = el({
        get: _n,
        set: xr
      });
      Object.defineProperty(r, Pe, {
        enumerable: true,
        configurable: true,
        get: () => On.value,
        set: (ve) => On.value = ve
      });
    }
    if (h) for (const Pe in h) Qu(h[Pe], r, n, Pe);
    if (p) {
      const Pe = _e(p) ? p.call(n) : p;
      Reflect.ownKeys(Pe).forEach((ze) => {
        Yd(ze, Pe[ze]);
      });
    }
    g && Tl(g, e, "c");
    function Ye(Pe, ze) {
      Ie(ze) ? ze.forEach((_n) => Pe(_n.bind(n))) : ze && Pe(ze.bind(n));
    }
    if (Ye(Cd, T), Ye(Qi, M), Ye(Ju, R), Ye(qa, j), Ye(Md, L), Ye(Nd, he), Ye(Fd, fe), Ye(Dd, ge), Ye(Ld, ie), Ye(Ya, K), Ye(Ka, G), Ye(kd, te), Ie(me)) if (me.length) {
      const Pe = e.exposed || (e.exposed = {});
      me.forEach((ze) => {
        Object.defineProperty(Pe, ze, {
          get: () => n[ze],
          set: (_n) => n[ze] = _n,
          enumerable: true
        });
      });
    } else e.exposed || (e.exposed = {});
    ue && e.render === fn && (e.render = ue), Re != null && (e.inheritAttrs = Re), de && (e.components = de), Ue && (e.directives = Ue), te && Yu(e);
  }
  function Bd(e, t, n = fn) {
    Ie(e) && (e = da(e));
    for (const r in e) {
      const l = e[r];
      let c;
      qe(l) ? "default" in l ? c = Li(l.from || r, l.default, true) : c = Li(l.from || r) : c = Li(l), st(c) ? Object.defineProperty(t, r, {
        enumerable: true,
        configurable: true,
        get: () => c.value,
        set: (f) => c.value = f
      }) : t[r] = c;
    }
  }
  function Tl(e, t, n) {
    pn(Ie(e) ? e.map((r) => r.bind(t.proxy)) : e.bind(t.proxy), t, n);
  }
  function Qu(e, t, n, r) {
    let l = r.includes(".") ? nf(n, r) : () => n[r];
    if (ot(e)) {
      const c = t[e];
      _e(c) && Kr(l, c);
    } else if (_e(e)) Kr(l, e.bind(n));
    else if (qe(e)) if (Ie(e)) e.forEach((c) => Qu(c, t, n, r));
    else {
      const c = _e(e.handler) ? e.handler.bind(n) : t[e.handler];
      _e(c) && Kr(l, c, e);
    }
  }
  function ef(e) {
    const t = e.type, { mixins: n, extends: r } = t, { mixins: l, optionsCache: c, config: { optionMergeStrategies: f } } = e.appContext, h = c.get(t);
    let p;
    return h ? p = h : !l.length && !n && !r ? p = t : (p = {}, l.length && l.forEach((v) => Uo(p, v, f, true)), Uo(p, t, f)), qe(t) && c.set(t, p), p;
  }
  function Uo(e, t, n, r = false) {
    const { mixins: l, extends: c } = t;
    c && Uo(e, c, n, true), l && l.forEach((f) => Uo(e, f, n, true));
    for (const f in t) if (!(r && f === "expose")) {
      const h = $d[f] || n && n[f];
      e[f] = h ? h(e[f], t[f]) : t[f];
    }
    return e;
  }
  const $d = {
    data: Sl,
    props: _l,
    emits: _l,
    methods: Si,
    computed: Si,
    beforeCreate: kt,
    created: kt,
    beforeMount: kt,
    mounted: kt,
    beforeUpdate: kt,
    updated: kt,
    beforeDestroy: kt,
    beforeUnmount: kt,
    destroyed: kt,
    unmounted: kt,
    activated: kt,
    deactivated: kt,
    errorCaptured: kt,
    serverPrefetch: kt,
    components: Si,
    directives: Si,
    watch: Vd,
    provide: Sl,
    inject: zd
  };
  function Sl(e, t) {
    return t ? e ? function() {
      return dt(_e(e) ? e.call(this, this) : e, _e(t) ? t.call(this, this) : t);
    } : t : e;
  }
  function zd(e, t) {
    return Si(da(e), da(t));
  }
  function da(e) {
    if (Ie(e)) {
      const t = {};
      for (let n = 0; n < e.length; n++) t[e[n]] = e[n];
      return t;
    }
    return e;
  }
  function kt(e, t) {
    return e ? [
      ...new Set([].concat(e, t))
    ] : t;
  }
  function Si(e, t) {
    return e ? dt(/* @__PURE__ */ Object.create(null), e, t) : t;
  }
  function _l(e, t) {
    return e ? Ie(e) && Ie(t) ? [
      .../* @__PURE__ */ new Set([
        ...e,
        ...t
      ])
    ] : dt(/* @__PURE__ */ Object.create(null), jo(e), jo(t ?? {})) : t;
  }
  function Vd(e, t) {
    if (!e) return t;
    if (!t) return e;
    const n = dt(/* @__PURE__ */ Object.create(null), e);
    for (const r in t) n[r] = kt(e[r], t[r]);
    return n;
  }
  function tf() {
    return {
      app: null,
      config: {
        isNativeTag: ru,
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
  let Hd = 0;
  function qd(e, t) {
    return function(r, l = null) {
      _e(r) || (r = dt({}, r)), l != null && !qe(l) && (l = null);
      const c = tf(), f = /* @__PURE__ */ new WeakSet(), h = [];
      let p = false;
      const v = c.app = {
        _uid: Hd++,
        _component: r,
        _props: l,
        _container: null,
        _context: c,
        _instance: null,
        version: Pp,
        get config() {
          return c.config;
        },
        set config(g) {
        },
        use(g, ...T) {
          return f.has(g) || (g && _e(g.install) ? (f.add(g), g.install(v, ...T)) : _e(g) && (f.add(g), g(v, ...T))), v;
        },
        mixin(g) {
          return c.mixins.includes(g) || c.mixins.push(g), v;
        },
        component(g, T) {
          return T ? (c.components[g] = T, v) : c.components[g];
        },
        directive(g, T) {
          return T ? (c.directives[g] = T, v) : c.directives[g];
        },
        mount(g, T, M) {
          if (!p) {
            const R = v._ceVNode || Nt(r, l);
            return R.appContext = c, M === true ? M = "svg" : M === false && (M = void 0), e(R, g, M), p = true, v._container = g, g.__vue_app__ = v, vs(R.component);
          }
        },
        onUnmount(g) {
          h.push(g);
        },
        unmount() {
          p && (pn(h, v._instance, 16), e(null, v._container), delete v._container.__vue_app__);
        },
        provide(g, T) {
          return c.provides[g] = T, v;
        },
        runWithContext(g) {
          const T = kr;
          kr = v;
          try {
            return g();
          } finally {
            kr = T;
          }
        }
      };
      return v;
    };
  }
  let kr = null;
  Yd = function(e, t) {
    if (Mt) {
      let n = Mt.provides;
      const r = Mt.parent && Mt.parent.provides;
      r === n && (n = Mt.provides = Object.create(r)), n[e] = t;
    }
  };
  Li = function(e, t, n = false) {
    const r = hr();
    if (r || kr) {
      let l = kr ? kr._context.provides : r ? r.parent == null || r.ce ? r.vnode.appContext && r.vnode.appContext.provides : r.parent.provides : void 0;
      if (l && e in l) return l[e];
      if (arguments.length > 1) return n && _e(t) ? t.call(r && r.proxy) : t;
    }
  };
  Kd = function() {
    return !!(hr() || kr);
  };
  const Jd = /* @__PURE__ */ Symbol.for("v-scx"), Xd = () => Li(Jd);
  ov = function(e, t) {
    return ws(e, null, t);
  };
  function Zd(e, t) {
    return ws(e, null, {
      flush: "sync"
    });
  }
  Kr = function(e, t, n) {
    return ws(e, t, n);
  };
  function ws(e, t, n = Fe) {
    const { immediate: r, deep: l, flush: c, once: f } = n, h = dt({}, n), p = t && r || !t && c !== "post";
    let v;
    if (Vi) {
      if (c === "sync") {
        const R = Xd();
        v = R.__watcherHandles || (R.__watcherHandles = []);
      } else if (!p) {
        const R = () => {
        };
        return R.stop = fn, R.resume = fn, R.pause = fn, R;
      }
    }
    const g = Mt;
    h.call = (R, j, L) => pn(R, g, j, L);
    let T = false;
    c === "post" ? h.scheduler = (R) => {
      wt(R, g && g.suspense);
    } : c !== "sync" && (T = true, h.scheduler = (R, j) => {
      j ? R() : Va(R);
    }), h.augmentJob = (R) => {
      t && (R.flags |= 4), T && (R.flags |= 2, g && (R.id = g.uid, R.i = g));
    };
    const M = vd(e, t, h);
    return Vi && (v ? v.push(M) : p && M()), M;
  }
  function Qd(e, t, n) {
    const r = this.proxy, l = ot(e) ? e.includes(".") ? nf(r, e) : () => r[e] : e.bind(r, r);
    let c;
    _e(t) ? c = t : (c = t.handler, n = t);
    const f = eo(this), h = ws(l, c.bind(r), n);
    return f(), h;
  }
  function nf(e, t) {
    const n = t.split(".");
    return () => {
      let r = e;
      for (let l = 0; l < n.length && r; l++) r = r[n[l]];
      return r;
    };
  }
  sv = function(e, t, n = Fe) {
    const r = hr(), l = Xt(t), c = Yn(t), f = rf(e, l), h = dd((p, v) => {
      let g, T = Fe, M;
      return Zd(() => {
        const R = e[l];
        Gt(g, R) && (g = R, v());
      }), {
        get() {
          return p(), n.get ? n.get(g) : g;
        },
        set(R) {
          const j = n.set ? n.set(R) : R;
          if (!Gt(j, g) && !(T !== Fe && Gt(R, T))) return;
          const L = r.vnode.props;
          L && (t in L || l in L || c in L) && (`onUpdate:${t}` in L || `onUpdate:${l}` in L || `onUpdate:${c}` in L) || (g = R, v()), r.emit(`update:${t}`, j), Gt(R, j) && Gt(R, T) && !Gt(j, M) && v(), T = R, M = j;
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
  const rf = (e, t) => t === "modelValue" || t === "model-value" ? e.modelModifiers : e[`${t}Modifiers`] || e[`${Xt(t)}Modifiers`] || e[`${Yn(t)}Modifiers`];
  function ep(e, t, ...n) {
    if (e.isUnmounted) return;
    const r = e.vnode.props || Fe;
    let l = n;
    const c = t.startsWith("update:"), f = c && rf(r, t.slice(7));
    f && (f.trim && (l = n.map((g) => ot(g) ? g.trim() : g)), f.number && (l = n.map(kh)));
    let h, p = r[h = Cs(t)] || r[h = Cs(Xt(t))];
    !p && c && (p = r[h = Cs(Yn(t))]), p && pn(p, e, 6, l);
    const v = r[h + "Once"];
    if (v) {
      if (!e.emitted) e.emitted = {};
      else if (e.emitted[h]) return;
      e.emitted[h] = true, pn(v, e, 6, l);
    }
  }
  const tp = /* @__PURE__ */ new WeakMap();
  function of(e, t, n = false) {
    const r = n ? tp : t.emitsCache, l = r.get(e);
    if (l !== void 0) return l;
    const c = e.emits;
    let f = {}, h = false;
    if (!_e(e)) {
      const p = (v) => {
        const g = of(v, t, true);
        g && (h = true, dt(f, g));
      };
      !n && t.mixins.length && t.mixins.forEach(p), e.extends && p(e.extends), e.mixins && e.mixins.forEach(p);
    }
    return !c && !h ? (qe(e) && r.set(e, null), null) : (Ie(c) ? c.forEach((p) => f[p] = null) : dt(f, c), qe(e) && r.set(e, f), f);
  }
  function ys(e, t) {
    return !e || !is(t) ? false : (t = t.slice(2).replace(/Once$/, ""), We(e, t[0].toLowerCase() + t.slice(1)) || We(e, Yn(t)) || We(e, t));
  }
  function Ol(e) {
    const { type: t, vnode: n, proxy: r, withProxy: l, propsOptions: [c], slots: f, attrs: h, emit: p, render: v, renderCache: g, props: T, data: M, setupState: R, ctx: j, inheritAttrs: L } = e, he = Fo(e);
    let re, K;
    try {
      if (n.shapeFlag & 4) {
        const G = l || r, ue = G;
        re = En(v.call(ue, G, g, T, R, M, j)), K = h;
      } else {
        const G = t;
        re = En(G.length > 1 ? G(T, {
          attrs: h,
          slots: f,
          emit: p
        }) : G(T, null)), K = t.props ? h : np(h);
      }
    } catch (G) {
      Fi.length = 0, ps(G, e, 1), re = Nt(Et);
    }
    let ee = re;
    if (K && L !== false) {
      const G = Object.keys(K), { shapeFlag: ue } = ee;
      G.length && ue & 7 && (c && G.some(Fa) && (K = rp(K, c)), ee = Vn(ee, K, false, true));
    }
    return n.dirs && (ee = Vn(ee, null, false, true), ee.dirs = ee.dirs ? ee.dirs.concat(n.dirs) : n.dirs), n.transition && ur(ee, n.transition), re = ee, Fo(he), re;
  }
  const np = (e) => {
    let t;
    for (const n in e) (n === "class" || n === "style" || is(n)) && ((t || (t = {}))[n] = e[n]);
    return t;
  }, rp = (e, t) => {
    const n = {};
    for (const r in e) (!Fa(r) || !(r.slice(9) in t)) && (n[r] = e[r]);
    return n;
  };
  function ip(e, t, n) {
    const { props: r, children: l, component: c } = e, { props: f, children: h, patchFlag: p } = t, v = c.emitsOptions;
    if (t.dirs || t.transition) return true;
    if (n && p >= 0) {
      if (p & 1024) return true;
      if (p & 16) return r ? Al(r, f, v) : !!f;
      if (p & 8) {
        const g = t.dynamicProps;
        for (let T = 0; T < g.length; T++) {
          const M = g[T];
          if (f[M] !== r[M] && !ys(v, M)) return true;
        }
      }
    } else return (l || h) && (!h || !h.$stable) ? true : r === f ? false : r ? f ? Al(r, f, v) : true : !!f;
    return false;
  }
  function Al(e, t, n) {
    const r = Object.keys(t);
    if (r.length !== Object.keys(e).length) return true;
    for (let l = 0; l < r.length; l++) {
      const c = r[l];
      if (t[c] !== e[c] && !ys(n, c)) return true;
    }
    return false;
  }
  function op({ vnode: e, parent: t }, n) {
    for (; t; ) {
      const r = t.subTree;
      if (r.suspense && r.suspense.activeBranch === e && (r.el = e.el), r === e) (e = t.vnode).el = n, t = t.parent;
      else break;
    }
  }
  const sf = {}, af = () => Object.create(sf), lf = (e) => Object.getPrototypeOf(e) === sf;
  function sp(e, t, n, r = false) {
    const l = {}, c = af();
    e.propsDefaults = /* @__PURE__ */ Object.create(null), cf(e, t, l, c);
    for (const f in e.propsOptions[0]) f in l || (l[f] = void 0);
    n ? e.props = r ? l : ld(l) : e.type.props ? e.props = l : e.props = c, e.attrs = c;
  }
  function ap(e, t, n, r) {
    const { props: l, attrs: c, vnode: { patchFlag: f } } = e, h = De(l), [p] = e.propsOptions;
    let v = false;
    if ((r || f > 0) && !(f & 16)) {
      if (f & 8) {
        const g = e.vnode.dynamicProps;
        for (let T = 0; T < g.length; T++) {
          let M = g[T];
          if (ys(e.emitsOptions, M)) continue;
          const R = t[M];
          if (p) if (We(c, M)) R !== c[M] && (c[M] = R, v = true);
          else {
            const j = Xt(M);
            l[j] = pa(p, h, j, R, e, false);
          }
          else R !== c[M] && (c[M] = R, v = true);
        }
      }
    } else {
      cf(e, t, l, c) && (v = true);
      let g;
      for (const T in h) (!t || !We(t, T) && ((g = Yn(T)) === T || !We(t, g))) && (p ? n && (n[T] !== void 0 || n[g] !== void 0) && (l[T] = pa(p, h, T, void 0, e, true)) : delete l[T]);
      if (c !== h) for (const T in c) (!t || !We(t, T)) && (delete c[T], v = true);
    }
    v && Fn(e.attrs, "set", "");
  }
  function cf(e, t, n, r) {
    const [l, c] = e.propsOptions;
    let f = false, h;
    if (t) for (let p in t) {
      if (Ai(p)) continue;
      const v = t[p];
      let g;
      l && We(l, g = Xt(p)) ? !c || !c.includes(g) ? n[g] = v : (h || (h = {}))[g] = v : ys(e.emitsOptions, p) || (!(p in r) || v !== r[p]) && (r[p] = v, f = true);
    }
    if (c) {
      const p = De(n), v = h || Fe;
      for (let g = 0; g < c.length; g++) {
        const T = c[g];
        n[T] = pa(l, p, T, v[T], e, !We(v, T));
      }
    }
    return f;
  }
  function pa(e, t, n, r, l, c) {
    const f = e[n];
    if (f != null) {
      const h = We(f, "default");
      if (h && r === void 0) {
        const p = f.default;
        if (f.type !== Function && !f.skipFactory && _e(p)) {
          const { propsDefaults: v } = l;
          if (n in v) r = v[n];
          else {
            const g = eo(l);
            r = v[n] = p.call(null, t), g();
          }
        } else r = p;
        l.ce && l.ce._setProp(n, r);
      }
      f[0] && (c && !h ? r = false : f[1] && (r === "" || r === Yn(n)) && (r = true));
    }
    return r;
  }
  const lp = /* @__PURE__ */ new WeakMap();
  function uf(e, t, n = false) {
    const r = n ? lp : t.propsCache, l = r.get(e);
    if (l) return l;
    const c = e.props, f = {}, h = [];
    let p = false;
    if (!_e(e)) {
      const g = (T) => {
        p = true;
        const [M, R] = uf(T, t, true);
        dt(f, M), R && h.push(...R);
      };
      !n && t.mixins.length && t.mixins.forEach(g), e.extends && g(e.extends), e.mixins && e.mixins.forEach(g);
    }
    if (!c && !p) return qe(e) && r.set(e, Vr), Vr;
    if (Ie(c)) for (let g = 0; g < c.length; g++) {
      const T = Xt(c[g]);
      Rl(T) && (f[T] = Fe);
    }
    else if (c) for (const g in c) {
      const T = Xt(g);
      if (Rl(T)) {
        const M = c[g], R = f[T] = Ie(M) || _e(M) ? {
          type: M
        } : dt({}, M), j = R.type;
        let L = false, he = true;
        if (Ie(j)) for (let re = 0; re < j.length; ++re) {
          const K = j[re], ee = _e(K) && K.name;
          if (ee === "Boolean") {
            L = true;
            break;
          } else ee === "String" && (he = false);
        }
        else L = _e(j) && j.name === "Boolean";
        R[0] = L, R[1] = he, (L || We(R, "default")) && h.push(T);
      }
    }
    const v = [
      f,
      h
    ];
    return qe(e) && r.set(e, v), v;
  }
  function Rl(e) {
    return e[0] !== "$" && !Ai(e);
  }
  const Ja = (e) => e === "_" || e === "_ctx" || e === "$stable", Xa = (e) => Ie(e) ? e.map(En) : [
    En(e)
  ], cp = (e, t, n) => {
    if (t._n) return t;
    const r = Td((...l) => Xa(t(...l)), n);
    return r._c = false, r;
  }, ff = (e, t, n) => {
    const r = e._ctx;
    for (const l in e) {
      if (Ja(l)) continue;
      const c = e[l];
      if (_e(c)) t[l] = cp(l, c, r);
      else if (c != null) {
        const f = Xa(c);
        t[l] = () => f;
      }
    }
  }, hf = (e, t) => {
    const n = Xa(t);
    e.slots.default = () => n;
  }, df = (e, t, n) => {
    for (const r in t) (n || !Ja(r)) && (e[r] = t[r]);
  }, up = (e, t, n) => {
    const r = e.slots = af();
    if (e.vnode.shapeFlag & 32) {
      const l = t._;
      l ? (df(r, t, n), n && lu(r, "_", l, true)) : ff(t, r);
    } else t && hf(e, t);
  }, fp = (e, t, n) => {
    const { vnode: r, slots: l } = e;
    let c = true, f = Fe;
    if (r.shapeFlag & 32) {
      const h = t._;
      h ? n && h === 1 ? c = false : df(l, t, n) : (c = !t.$stable, ff(t, l)), f = t;
    } else t && (hf(e, t), f = {
      default: 1
    });
    if (c) for (const h in l) !Ja(h) && f[h] == null && delete l[h];
  }, wt = mp;
  function hp(e) {
    return dp(e);
  }
  function dp(e, t) {
    const n = ls();
    n.__VUE__ = true;
    const { insert: r, remove: l, patchProp: c, createElement: f, createText: h, createComment: p, setText: v, setElementText: g, parentNode: T, nextSibling: M, setScopeId: R = fn, insertStaticContent: j } = e, L = (I, O, k, Y = null, H = null, q = null, se = void 0, X = null, ne = !!O.dynamicChildren) => {
      if (I === O) return;
      I && !sr(I, O) && (Y = An(I), ve(I, H, q, true), I = null), O.patchFlag === -2 && (ne = false, O.dynamicChildren = null);
      const { type: V, ref: we, shapeFlag: ae } = O;
      switch (V) {
        case bs:
          he(I, O, k, Y);
          break;
        case Et:
          re(I, O, k, Y);
          break;
        case Di:
          I == null && K(O, k, Y, se);
          break;
        case Rt:
          de(I, O, k, Y, H, q, se, X, ne);
          break;
        default:
          ae & 1 ? ue(I, O, k, Y, H, q, se, X, ne) : ae & 6 ? Ue(I, O, k, Y, H, q, se, X, ne) : (ae & 64 || ae & 128) && V.process(I, O, k, Y, H, q, se, X, ne, mr);
      }
      we != null && H ? Ci(we, I && I.ref, q, O || I, !O) : we == null && I && I.ref != null && Ci(I.ref, null, q, I, true);
    }, he = (I, O, k, Y) => {
      if (I == null) r(O.el = h(O.children), k, Y);
      else {
        const H = O.el = I.el;
        O.children !== I.children && v(H, O.children);
      }
    }, re = (I, O, k, Y) => {
      I == null ? r(O.el = p(O.children || ""), k, Y) : O.el = I.el;
    }, K = (I, O, k, Y) => {
      [I.el, I.anchor] = j(I.children, O, k, Y, I.el, I.anchor);
    }, ee = ({ el: I, anchor: O }, k, Y) => {
      let H;
      for (; I && I !== O; ) H = M(I), r(I, k, Y), I = H;
      r(O, k, Y);
    }, G = ({ el: I, anchor: O }) => {
      let k;
      for (; I && I !== O; ) k = M(I), l(I), I = k;
      l(O);
    }, ue = (I, O, k, Y, H, q, se, X, ne) => {
      if (O.type === "svg" ? se = "svg" : O.type === "math" && (se = "mathml"), I == null) ge(O, k, Y, H, q, se, X, ne);
      else {
        const V = I.el && I.el._isVueCE ? I.el : null;
        try {
          V && V._beginPatch(), te(I, O, H, q, se, X, ne);
        } finally {
          V && V._endPatch();
        }
      }
    }, ge = (I, O, k, Y, H, q, se, X) => {
      let ne, V;
      const { props: we, shapeFlag: ae, transition: ye, dirs: Te } = I;
      if (ne = I.el = f(I.type, q, we && we.is, we), ae & 8 ? g(ne, I.children) : ae & 16 && fe(I.children, ne, null, Y, H, Gs(I, q), se, X), Te && yr(I, null, Y, "created"), ie(ne, I, I.scopeId, se, Y), we) {
        for (const xe in we) xe !== "value" && !Ai(xe) && c(ne, xe, null, we[xe], q, Y);
        "value" in we && c(ne, "value", null, we.value, q), (V = we.onVnodeBeforeMount) && nn(V, Y, I);
      }
      Te && yr(I, null, Y, "beforeMount");
      const ke = pp(H, ye);
      ke && ye.beforeEnter(ne), r(ne, O, k), ((V = we && we.onVnodeMounted) || ke || Te) && wt(() => {
        V && nn(V, Y, I), ke && ye.enter(ne), Te && yr(I, null, Y, "mounted");
      }, H);
    }, ie = (I, O, k, Y, H) => {
      if (k && R(I, k), Y) for (let q = 0; q < Y.length; q++) R(I, Y[q]);
      if (H) {
        let q = H.subTree;
        if (O === q || Wo(q.type) && (q.ssContent === O || q.ssFallback === O)) {
          const se = H.vnode;
          ie(I, se, se.scopeId, se.slotScopeIds, H.parent);
        }
      }
    }, fe = (I, O, k, Y, H, q, se, X, ne = 0) => {
      for (let V = ne; V < I.length; V++) {
        const we = I[V] = X ? or(I[V]) : En(I[V]);
        L(null, we, O, k, Y, H, q, se, X);
      }
    }, te = (I, O, k, Y, H, q, se) => {
      const X = O.el = I.el;
      let { patchFlag: ne, dynamicChildren: V, dirs: we } = O;
      ne |= I.patchFlag & 16;
      const ae = I.props || Fe, ye = O.props || Fe;
      let Te;
      if (k && br(k, false), (Te = ye.onVnodeBeforeUpdate) && nn(Te, k, O, I), we && yr(O, I, k, "beforeUpdate"), k && br(k, true), (ae.innerHTML && ye.innerHTML == null || ae.textContent && ye.textContent == null) && g(X, ""), V ? me(I.dynamicChildren, V, X, k, Y, Gs(O, H), q) : se || ze(I, O, X, null, k, Y, Gs(O, H), q, false), ne > 0) {
        if (ne & 16) Re(X, ae, ye, k, H);
        else if (ne & 2 && ae.class !== ye.class && c(X, "class", null, ye.class, H), ne & 4 && c(X, "style", ae.style, ye.style, H), ne & 8) {
          const ke = O.dynamicProps;
          for (let xe = 0; xe < ke.length; xe++) {
            const je = ke[xe], Tt = ae[je], St = ye[je];
            (St !== Tt || je === "value") && c(X, je, Tt, St, H, k);
          }
        }
        ne & 1 && I.children !== O.children && g(X, O.children);
      } else !se && V == null && Re(X, ae, ye, k, H);
      ((Te = ye.onVnodeUpdated) || we) && wt(() => {
        Te && nn(Te, k, O, I), we && yr(O, I, k, "updated");
      }, Y);
    }, me = (I, O, k, Y, H, q, se) => {
      for (let X = 0; X < O.length; X++) {
        const ne = I[X], V = O[X], we = ne.el && (ne.type === Rt || !sr(ne, V) || ne.shapeFlag & 198) ? T(ne.el) : k;
        L(ne, V, we, null, Y, H, q, se, true);
      }
    }, Re = (I, O, k, Y, H) => {
      if (O !== k) {
        if (O !== Fe) for (const q in O) !Ai(q) && !(q in k) && c(I, q, O[q], null, H, Y);
        for (const q in k) {
          if (Ai(q)) continue;
          const se = k[q], X = O[q];
          se !== X && q !== "value" && c(I, q, X, se, H, Y);
        }
        "value" in k && c(I, "value", O.value, k.value, H);
      }
    }, de = (I, O, k, Y, H, q, se, X, ne) => {
      const V = O.el = I ? I.el : h(""), we = O.anchor = I ? I.anchor : h("");
      let { patchFlag: ae, dynamicChildren: ye, slotScopeIds: Te } = O;
      Te && (X = X ? X.concat(Te) : Te), I == null ? (r(V, k, Y), r(we, k, Y), fe(O.children || [], k, we, H, q, se, X, ne)) : ae > 0 && ae & 64 && ye && I.dynamicChildren ? (me(I.dynamicChildren, ye, k, H, q, se, X), (O.key != null || H && O === H.subTree) && Za(I, O, true)) : ze(I, O, k, we, H, q, se, X, ne);
    }, Ue = (I, O, k, Y, H, q, se, X, ne) => {
      O.slotScopeIds = X, I == null ? O.shapeFlag & 512 ? H.ctx.activate(O, k, Y, se, ne) : ft(O, k, Y, H, q, se, ne) : $t(I, O, ne);
    }, ft = (I, O, k, Y, H, q, se) => {
      const X = I.component = Sp(I, Y, H);
      if (gs(I) && (X.ctx.renderer = mr), _p(X, false, se), X.asyncDep) {
        if (H && H.registerDep(X, Ye, se), !I.el) {
          const ne = X.subTree = Nt(Et);
          re(null, ne, O, k), I.placeholder = ne.el;
        }
      } else Ye(X, I, O, k, H, q, se);
    }, $t = (I, O, k) => {
      const Y = O.component = I.component;
      if (ip(I, O, k)) if (Y.asyncDep && !Y.asyncResolved) {
        Pe(Y, O, k);
        return;
      } else Y.next = O, Y.update();
      else O.el = I.el, Y.vnode = O;
    }, Ye = (I, O, k, Y, H, q, se) => {
      const X = () => {
        if (I.isMounted) {
          let { next: ae, bu: ye, u: Te, parent: ke, vnode: xe } = I;
          {
            const Qt = pf(I);
            if (Qt) {
              ae && (ae.el = xe.el, Pe(I, ae, se)), Qt.asyncDep.then(() => {
                I.isUnmounted || X();
              });
              return;
            }
          }
          let je = ae, Tt;
          br(I, false), ae ? (ae.el = xe.el, Pe(I, ae, se)) : ae = xe, ye && Ri(ye), (Tt = ae.props && ae.props.onVnodeBeforeUpdate) && nn(Tt, ke, ae, xe), br(I, true);
          const St = Ol(I), Zt = I.subTree;
          I.subTree = St, L(Zt, St, T(Zt.el), An(Zt), I, H, q), ae.el = St.el, je === null && op(I, St.el), Te && wt(Te, H), (Tt = ae.props && ae.props.onVnodeUpdated) && wt(() => nn(Tt, ke, ae, xe), H);
        } else {
          let ae;
          const { el: ye, props: Te } = O, { bm: ke, m: xe, parent: je, root: Tt, type: St } = I, Zt = Cr(O);
          br(I, false), ke && Ri(ke), !Zt && (ae = Te && Te.onVnodeBeforeMount) && nn(ae, je, O), br(I, true);
          {
            Tt.ce && Tt.ce._def.shadowRoot !== false && Tt.ce._injectChildStyle(St);
            const Qt = I.subTree = Ol(I);
            L(null, Qt, k, Y, I, H, q), O.el = Qt.el;
          }
          if (xe && wt(xe, H), !Zt && (ae = Te && Te.onVnodeMounted)) {
            const Qt = O;
            wt(() => nn(ae, je, Qt), H);
          }
          (O.shapeFlag & 256 || je && Cr(je.vnode) && je.vnode.shapeFlag & 256) && I.a && wt(I.a, H), I.isMounted = true, O = k = Y = null;
        }
      };
      I.scope.on();
      const ne = I.effect = new gu(X);
      I.scope.off();
      const V = I.update = ne.run.bind(ne), we = I.job = ne.runIfDirty.bind(ne);
      we.i = I, we.id = I.uid, ne.scheduler = () => Va(we), br(I, true), V();
    }, Pe = (I, O, k) => {
      O.component = I;
      const Y = I.vnode.props;
      I.vnode = O, I.next = null, ap(I, O.props, Y, k), fp(I, O.children, k), Bn(), ml(I), $n();
    }, ze = (I, O, k, Y, H, q, se, X, ne = false) => {
      const V = I && I.children, we = I ? I.shapeFlag : 0, ae = O.children, { patchFlag: ye, shapeFlag: Te } = O;
      if (ye > 0) {
        if (ye & 128) {
          xr(V, ae, k, Y, H, q, se, X, ne);
          return;
        } else if (ye & 256) {
          _n(V, ae, k, Y, H, q, se, X, ne);
          return;
        }
      }
      Te & 8 ? (we & 16 && xt(V, H, q), ae !== V && g(k, ae)) : we & 16 ? Te & 16 ? xr(V, ae, k, Y, H, q, se, X, ne) : xt(V, H, q, true) : (we & 8 && g(k, ""), Te & 16 && fe(ae, k, Y, H, q, se, X, ne));
    }, _n = (I, O, k, Y, H, q, se, X, ne) => {
      I = I || Vr, O = O || Vr;
      const V = I.length, we = O.length, ae = Math.min(V, we);
      let ye;
      for (ye = 0; ye < ae; ye++) {
        const Te = O[ye] = ne ? or(O[ye]) : En(O[ye]);
        L(I[ye], Te, k, null, H, q, se, X, ne);
      }
      V > we ? xt(I, H, q, true, false, ae) : fe(O, k, Y, H, q, se, X, ne, ae);
    }, xr = (I, O, k, Y, H, q, se, X, ne) => {
      let V = 0;
      const we = O.length;
      let ae = I.length - 1, ye = we - 1;
      for (; V <= ae && V <= ye; ) {
        const Te = I[V], ke = O[V] = ne ? or(O[V]) : En(O[V]);
        if (sr(Te, ke)) L(Te, ke, k, null, H, q, se, X, ne);
        else break;
        V++;
      }
      for (; V <= ae && V <= ye; ) {
        const Te = I[ae], ke = O[ye] = ne ? or(O[ye]) : En(O[ye]);
        if (sr(Te, ke)) L(Te, ke, k, null, H, q, se, X, ne);
        else break;
        ae--, ye--;
      }
      if (V > ae) {
        if (V <= ye) {
          const Te = ye + 1, ke = Te < we ? O[Te].el : Y;
          for (; V <= ye; ) L(null, O[V] = ne ? or(O[V]) : En(O[V]), k, ke, H, q, se, X, ne), V++;
        }
      } else if (V > ye) for (; V <= ae; ) ve(I[V], H, q, true), V++;
      else {
        const Te = V, ke = V, xe = /* @__PURE__ */ new Map();
        for (V = ke; V <= ye; V++) {
          const Pt = O[V] = ne ? or(O[V]) : En(O[V]);
          Pt.key != null && xe.set(Pt.key, V);
        }
        let je, Tt = 0;
        const St = ye - ke + 1;
        let Zt = false, Qt = 0;
        const wr = new Array(St);
        for (V = 0; V < St; V++) wr[V] = 0;
        for (V = Te; V <= ae; V++) {
          const Pt = I[V];
          if (Tt >= St) {
            ve(Pt, H, q, true);
            continue;
          }
          let en;
          if (Pt.key != null) en = xe.get(Pt.key);
          else for (je = ke; je <= ye; je++) if (wr[je - ke] === 0 && sr(Pt, O[je])) {
            en = je;
            break;
          }
          en === void 0 ? ve(Pt, H, q, true) : (wr[en - ke] = V + 1, en >= Qt ? Qt = en : Zt = true, L(Pt, O[en], k, null, H, q, se, X, ne), Tt++);
        }
        const hi = Zt ? gp(wr) : Vr;
        for (je = hi.length - 1, V = St - 1; V >= 0; V--) {
          const Pt = ke + V, en = O[Pt], io = O[Pt + 1], oo = Pt + 1 < we ? io.el || io.placeholder : Y;
          wr[V] === 0 ? L(null, en, k, oo, H, q, se, X, ne) : Zt && (je < 0 || V !== hi[je] ? On(en, k, oo, 2) : je--);
        }
      }
    }, On = (I, O, k, Y, H = null) => {
      const { el: q, type: se, transition: X, children: ne, shapeFlag: V } = I;
      if (V & 6) {
        On(I.component.subTree, O, k, Y);
        return;
      }
      if (V & 128) {
        I.suspense.move(O, k, Y);
        return;
      }
      if (V & 64) {
        se.move(I, O, k, mr);
        return;
      }
      if (se === Rt) {
        r(q, O, k);
        for (let ae = 0; ae < ne.length; ae++) On(ne[ae], O, k, Y);
        r(I.anchor, O, k);
        return;
      }
      if (se === Di) {
        ee(I, O, k);
        return;
      }
      if (Y !== 2 && V & 1 && X) if (Y === 0) X.beforeEnter(q), r(q, O, k), wt(() => X.enter(q), H);
      else {
        const { leave: ae, delayLeave: ye, afterLeave: Te } = X, ke = () => {
          I.ctx.isUnmounted ? l(q) : r(q, O, k);
        }, xe = () => {
          q._isLeaving && q[Ln](true), ae(q, () => {
            ke(), Te && Te();
          });
        };
        ye ? ye(q, ke, xe) : xe();
      }
      else r(q, O, k);
    }, ve = (I, O, k, Y = false, H = false) => {
      const { type: q, props: se, ref: X, children: ne, dynamicChildren: V, shapeFlag: we, patchFlag: ae, dirs: ye, cacheIndex: Te } = I;
      if (ae === -2 && (H = false), X != null && (Bn(), Ci(X, null, k, I, true), $n()), Te != null && (O.renderCache[Te] = void 0), we & 256) {
        O.ctx.deactivate(I);
        return;
      }
      const ke = we & 1 && ye, xe = !Cr(I);
      let je;
      if (xe && (je = se && se.onVnodeBeforeUnmount) && nn(je, O, I), we & 6) oe(I.component, k, Y);
      else {
        if (we & 128) {
          I.suspense.unmount(k, Y);
          return;
        }
        ke && yr(I, null, O, "beforeUnmount"), we & 64 ? I.type.remove(I, O, k, mr, Y) : V && !V.hasOnce && (q !== Rt || ae > 0 && ae & 64) ? xt(V, O, k, false, true) : (q === Rt && ae & 384 || !H && we & 16) && xt(ne, O, k), Y && fi(I);
      }
      (xe && (je = se && se.onVnodeUnmounted) || ke) && wt(() => {
        je && nn(je, O, I), ke && yr(I, null, O, "unmounted");
      }, k);
    }, fi = (I) => {
      const { type: O, el: k, anchor: Y, transition: H } = I;
      if (O === Rt) {
        Ps(k, Y);
        return;
      }
      if (O === Di) {
        G(I);
        return;
      }
      const q = () => {
        l(k), H && !H.persisted && H.afterLeave && H.afterLeave();
      };
      if (I.shapeFlag & 1 && H && !H.persisted) {
        const { leave: se, delayLeave: X } = H, ne = () => se(k, q);
        X ? X(I.el, q, ne) : ne();
      } else q();
    }, Ps = (I, O) => {
      let k;
      for (; I !== O; ) k = M(I), l(I), I = k;
      l(O);
    }, oe = (I, O, k) => {
      const { bum: Y, scope: H, job: q, subTree: se, um: X, m: ne, a: V } = I;
      Go(ne), Go(V), Y && Ri(Y), H.stop(), q && (q.flags |= 8, ve(se, I, O, k)), X && wt(X, O), wt(() => {
        I.isUnmounted = true;
      }, O);
    }, xt = (I, O, k, Y = false, H = false, q = 0) => {
      for (let se = q; se < I.length; se++) ve(I[se], O, k, Y, H);
    }, An = (I) => {
      if (I.shapeFlag & 6) return An(I.component.subTree);
      if (I.shapeFlag & 128) return I.suspense.next();
      const O = M(I.anchor || I.el), k = O && O[Uu];
      return k ? M(k) : O;
    };
    let zt = false;
    const ro = (I, O, k) => {
      I == null ? O._vnode && ve(O._vnode, null, null, true) : L(O._vnode || null, I, O, null, null, null, k), O._vnode = I, zt || (zt = true, ml(), Fu(), zt = false);
    }, mr = {
      p: L,
      um: ve,
      m: On,
      r: fi,
      mt: ft,
      mc: fe,
      pc: ze,
      pbc: me,
      n: An,
      o: e
    };
    return {
      render: ro,
      hydrate: void 0,
      createApp: qd(ro)
    };
  }
  function Gs({ type: e, props: t }, n) {
    return n === "svg" && e === "foreignObject" || n === "mathml" && e === "annotation-xml" && t && t.encoding && t.encoding.includes("html") ? void 0 : n;
  }
  function br({ effect: e, job: t }, n) {
    n ? (e.flags |= 32, t.flags |= 4) : (e.flags &= -33, t.flags &= -5);
  }
  function pp(e, t) {
    return (!e || e && !e.pendingBranch) && t && !t.persisted;
  }
  function Za(e, t, n = false) {
    const r = e.children, l = t.children;
    if (Ie(r) && Ie(l)) for (let c = 0; c < r.length; c++) {
      const f = r[c];
      let h = l[c];
      h.shapeFlag & 1 && !h.dynamicChildren && ((h.patchFlag <= 0 || h.patchFlag === 32) && (h = l[c] = or(l[c]), h.el = f.el), !n && h.patchFlag !== -2 && Za(f, h)), h.type === bs && h.patchFlag !== -1 && (h.el = f.el), h.type === Et && !h.el && (h.el = f.el);
    }
  }
  function gp(e) {
    const t = e.slice(), n = [
      0
    ];
    let r, l, c, f, h;
    const p = e.length;
    for (r = 0; r < p; r++) {
      const v = e[r];
      if (v !== 0) {
        if (l = n[n.length - 1], e[l] < v) {
          t[r] = l, n.push(r);
          continue;
        }
        for (c = 0, f = n.length - 1; c < f; ) h = c + f >> 1, e[n[h]] < v ? c = h + 1 : f = h;
        v < e[n[c]] && (c > 0 && (t[r] = n[c - 1]), n[c] = r);
      }
    }
    for (c = n.length, f = n[c - 1]; c-- > 0; ) n[c] = f, f = t[f];
    return n;
  }
  function pf(e) {
    const t = e.subTree.component;
    if (t) return t.asyncDep && !t.asyncResolved ? t : pf(t);
  }
  function Go(e) {
    if (e) for (let t = 0; t < e.length; t++) e[t].flags |= 8;
  }
  const Wo = (e) => e.__isSuspense;
  function mp(e, t) {
    t && t.pendingBranch ? Ie(e) ? t.effects.push(...e) : t.effects.push(e) : Du(e);
  }
  let Di, Fi;
  Rt = /* @__PURE__ */ Symbol.for("v-fgt");
  bs = /* @__PURE__ */ Symbol.for("v-txt");
  Et = /* @__PURE__ */ Symbol.for("v-cmt");
  Di = /* @__PURE__ */ Symbol.for("v-stc");
  Fi = [];
  let Yt = null;
  rn = function(e = false) {
    Fi.push(Yt = e ? null : []);
  };
  function wp() {
    Fi.pop(), Yt = Fi[Fi.length - 1] || null;
  }
  let zi = 1;
  function Bo(e, t = false) {
    zi += e, e < 0 && Yt && t && (Yt.hasOnce = true);
  }
  function gf(e) {
    return e.dynamicChildren = zi > 0 ? Yt || Vr : null, wp(), zi > 0 && Yt && Yt.push(e), e;
  }
  Nn = function(e, t, n, r, l, c) {
    return gf(Ge(e, t, n, r, l, c, true));
  };
  ga = function(e, t, n, r, l) {
    return gf(Nt(e, t, n, r, l, true));
  };
  Zr = function(e) {
    return e ? e.__v_isVNode === true : false;
  };
  function sr(e, t) {
    return e.type === t.type && e.key === t.key;
  }
  const mf = ({ key: e }) => e ?? null, So = ({ ref: e, ref_key: t, ref_for: n }) => (typeof e == "number" && (e = "" + e), e != null ? ot(e) || st(e) || _e(e) ? {
    i: It,
    r: e,
    k: t,
    f: !!n
  } : e : null);
  Ge = function(e, t = null, n = null, r = 0, l = null, c = e === Rt ? 0 : 1, f = false, h = false) {
    const p = {
      __v_isVNode: true,
      __v_skip: true,
      type: e,
      props: t,
      key: t && mf(t),
      ref: t && So(t),
      scopeId: ju,
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
      patchFlag: r,
      dynamicProps: l,
      dynamicChildren: null,
      appContext: null,
      ctx: It
    };
    return h ? (Qa(p, n), c & 128 && e.normalize(p)) : n && (p.shapeFlag |= ot(n) ? 8 : 16), zi > 0 && !f && Yt && (p.patchFlag > 0 || c & 6) && p.patchFlag !== 32 && Yt.push(p), p;
  };
  Nt = yp;
  function yp(e, t = null, n = null, r = 0, l = null, c = false) {
    if ((!e || e === Xu) && (e = Et), Zr(e)) {
      const h = Vn(e, t, true);
      return n && Qa(h, n), zi > 0 && !c && Yt && (h.shapeFlag & 6 ? Yt[Yt.indexOf(e)] = h : Yt.push(h)), h.patchFlag = -2, h;
    }
    if (Mp(e) && (e = e.__vccOpts), t) {
      t = bp(t);
      let { class: h, style: p } = t;
      h && !ot(h) && (t.class = ja(h)), qe(p) && (ds(p) && !Ie(p) && (p = dt({}, p)), t.style = cs(p));
    }
    const f = ot(e) ? 1 : Wo(e) ? 128 : Gu(e) ? 64 : qe(e) ? 4 : _e(e) ? 2 : 0;
    return Ge(e, t, n, r, l, f, c, true);
  }
  function bp(e) {
    return e ? ds(e) || lf(e) ? dt({}, e) : e : null;
  }
  Vn = function(e, t, n = false, r = false) {
    const { props: l, ref: c, patchFlag: f, children: h, transition: p } = e, v = t ? Ep(l || {}, t) : l, g = {
      __v_isVNode: true,
      __v_skip: true,
      type: e.type,
      props: v,
      key: v && mf(v),
      ref: t && t.ref ? n && c ? Ie(c) ? c.concat(So(t)) : [
        c,
        So(t)
      ] : So(t) : c,
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
      ssContent: e.ssContent && Vn(e.ssContent),
      ssFallback: e.ssFallback && Vn(e.ssFallback),
      placeholder: e.placeholder,
      el: e.el,
      anchor: e.anchor,
      ctx: e.ctx,
      ce: e.ce
    };
    return p && r && ur(g, p.clone(g)), g;
  };
  vp = function(e = " ", t = 0) {
    return Nt(bs, null, e, t);
  };
  av = function(e, t) {
    const n = Nt(Di, null, e);
    return n.staticCount = t, n;
  };
  po = function(e = "", t = false) {
    return t ? (rn(), ga(Et, null, e)) : Nt(Et, null, e);
  };
  function En(e) {
    return e == null || typeof e == "boolean" ? Nt(Et) : Ie(e) ? Nt(Rt, null, e.slice()) : Zr(e) ? or(e) : Nt(bs, null, String(e));
  }
  function or(e) {
    return e.el === null && e.patchFlag !== -1 || e.memo ? e : Vn(e);
  }
  function Qa(e, t) {
    let n = 0;
    const { shapeFlag: r } = e;
    if (t == null) t = null;
    else if (Ie(t)) n = 16;
    else if (typeof t == "object") if (r & 65) {
      const l = t.default;
      l && (l._c && (l._d = false), Qa(e, l()), l._c && (l._d = true));
      return;
    } else {
      n = 32;
      const l = t._;
      !l && !lf(t) ? t._ctx = It : l === 3 && It && (It.slots._ === 1 ? t._ = 1 : (t._ = 2, e.patchFlag |= 1024));
    }
    else _e(t) ? (t = {
      default: t,
      _ctx: It
    }, n = 32) : (t = String(t), r & 64 ? (n = 16, t = [
      vp(t)
    ]) : n = 8);
    e.children = t, e.shapeFlag |= n;
  }
  Ep = function(...e) {
    const t = {};
    for (let n = 0; n < e.length; n++) {
      const r = e[n];
      for (const l in r) if (l === "class") t.class !== r.class && (t.class = ja([
        t.class,
        r.class
      ]));
      else if (l === "style") t.style = cs([
        t.style,
        r.style
      ]);
      else if (is(l)) {
        const c = t[l], f = r[l];
        f && c !== f && !(Ie(c) && c.includes(f)) && (t[l] = c ? [].concat(c, f) : f);
      } else l !== "" && (t[l] = r[l]);
    }
    return t;
  };
  function nn(e, t, n, r = null) {
    pn(e, t, 7, [
      n,
      r
    ]);
  }
  const Ip = tf();
  let Tp = 0;
  function Sp(e, t, n) {
    const r = e.type, l = (t ? t.appContext : e.appContext) || Ip, c = {
      uid: Tp++,
      vnode: e,
      type: r,
      parent: t,
      appContext: l,
      root: null,
      next: null,
      subTree: null,
      effect: null,
      update: null,
      job: null,
      scope: new hu(true),
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
      propsOptions: uf(r, l),
      emitsOptions: of(r, l),
      emit: null,
      emitted: null,
      propsDefaults: Fe,
      inheritAttrs: r.inheritAttrs,
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
    }, c.root = t ? t.root : c, c.emit = ep.bind(null, c), e.ce && e.ce(c), c;
  }
  let Mt = null;
  hr = () => Mt || It;
  let $o, ma;
  {
    const e = ls(), t = (n, r) => {
      let l;
      return (l = e[n]) || (l = e[n] = []), l.push(r), (c) => {
        l.length > 1 ? l.forEach((f) => f(c)) : l[0](c);
      };
    };
    $o = t("__VUE_INSTANCE_SETTERS__", (n) => Mt = n), ma = t("__VUE_SSR_SETTERS__", (n) => Vi = n);
  }
  const eo = (e) => {
    const t = Mt;
    return $o(e), e.scope.on(), () => {
      e.scope.off(), $o(t);
    };
  }, Ml = () => {
    Mt && Mt.scope.off(), $o(null);
  };
  function wf(e) {
    return e.vnode.shapeFlag & 4;
  }
  let Vi = false;
  function _p(e, t = false, n = false) {
    t && ma(t);
    const { props: r, children: l } = e.vnode, c = wf(e);
    sp(e, r, c, t), up(e, l, n || t);
    const f = c ? Op(e, t) : void 0;
    return t && ma(false), f;
  }
  function Op(e, t) {
    const n = e.type;
    e.accessCache = /* @__PURE__ */ Object.create(null), e.proxy = new Proxy(e.ctx, Gd);
    const { setup: r } = n;
    if (r) {
      Bn();
      const l = e.setupContext = r.length > 1 ? Rp(e) : null, c = eo(e), f = Zi(r, e, 0, [
        e.props,
        l
      ]), h = ou(f);
      if ($n(), c(), (h || e.sp) && !Cr(e) && Yu(e), h) {
        if (f.then(Ml, Ml), t) return f.then((p) => {
          Nl(e, p);
        }).catch((p) => {
          ps(p, e, 0);
        });
        e.asyncDep = f;
      } else Nl(e, f);
    } else yf(e);
  }
  function Nl(e, t, n) {
    _e(t) ? e.type.__ssrInlineRender ? e.ssrRender = t : e.render = t : qe(t) && (e.setupState = Nu(t)), yf(e);
  }
  function yf(e, t, n) {
    const r = e.type;
    e.render || (e.render = r.render || fn);
    {
      const l = eo(e);
      Bn();
      try {
        Wd(e);
      } finally {
        $n(), l();
      }
    }
  }
  const Ap = {
    get(e, t) {
      return At(e, "get", ""), e[t];
    }
  };
  function Rp(e) {
    const t = (n) => {
      e.exposed = n || {};
    };
    return {
      attrs: new Proxy(e.attrs, Ap),
      slots: e.slots,
      emit: e.emit,
      expose: t
    };
  }
  function vs(e) {
    return e.exposed ? e.exposeProxy || (e.exposeProxy = new Proxy(Nu(za(e.exposed)), {
      get(t, n) {
        if (n in t) return t[n];
        if (n in ki) return ki[n](e);
      },
      has(t, n) {
        return n in t || n in ki;
      }
    })) : e.proxy;
  }
  function wa(e, t = true) {
    return _e(e) ? e.displayName || e.name : e.name || t && e.__name;
  }
  function Mp(e) {
    return _e(e) && "__vccOpts" in e;
  }
  el = (e, t) => yd(e, t, Vi);
  Np = function(e, t, n) {
    try {
      Bo(-1);
      const r = arguments.length;
      return r === 2 ? qe(t) && !Ie(t) ? Zr(t) ? Nt(e, null, [
        t
      ]) : Nt(e, t) : Nt(e, null, t) : (r > 3 ? n = Array.prototype.slice.call(arguments, 2) : r === 3 && Zr(n) && (n = [
        n
      ]), Nt(e, t, n));
    } finally {
      Bo(1);
    }
  };
  const Pp = "3.5.25";
  let ya;
  const Pl = typeof window < "u" && window.trustedTypes;
  if (Pl) try {
    ya = Pl.createPolicy("vue", {
      createHTML: (e) => e
    });
  } catch {
  }
  let bf, Cp, kp, kn, Cl, Lp, Xn, pi, Qr, vf, Ef, Dp, vr, kl;
  bf = ya ? (e) => ya.createHTML(e) : (e) => e;
  Cp = "http://www.w3.org/2000/svg";
  kp = "http://www.w3.org/1998/Math/MathML";
  kn = typeof document < "u" ? document : null;
  Cl = kn && kn.createElement("template");
  Lp = {
    insert: (e, t, n) => {
      t.insertBefore(e, n || null);
    },
    remove: (e) => {
      const t = e.parentNode;
      t && t.removeChild(e);
    },
    createElement: (e, t, n, r) => {
      const l = t === "svg" ? kn.createElementNS(Cp, e) : t === "mathml" ? kn.createElementNS(kp, e) : n ? kn.createElement(e, {
        is: n
      }) : kn.createElement(e);
      return e === "select" && r && r.multiple != null && l.setAttribute("multiple", r.multiple), l;
    },
    createText: (e) => kn.createTextNode(e),
    createComment: (e) => kn.createComment(e),
    setText: (e, t) => {
      e.nodeValue = t;
    },
    setElementText: (e, t) => {
      e.textContent = t;
    },
    parentNode: (e) => e.parentNode,
    nextSibling: (e) => e.nextSibling,
    querySelector: (e) => kn.querySelector(e),
    setScopeId(e, t) {
      e.setAttribute(t, "");
    },
    insertStaticContent(e, t, n, r, l, c) {
      const f = n ? n.previousSibling : t.lastChild;
      if (l && (l === c || l.nextSibling)) for (; t.insertBefore(l.cloneNode(true), n), !(l === c || !(l = l.nextSibling)); ) ;
      else {
        Cl.innerHTML = bf(r === "svg" ? `<svg>${e}</svg>` : r === "mathml" ? `<math>${e}</math>` : e);
        const h = Cl.content;
        if (r === "svg" || r === "mathml") {
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
  Xn = "transition";
  pi = "animation";
  Qr = /* @__PURE__ */ Symbol("_vtc");
  vf = {
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
  Ef = dt({}, zu, vf);
  Dp = (e) => (e.displayName = "Transition", e.props = Ef, e);
  lv = Dp((e, { slots: t }) => Np(Od, If(e), t));
  vr = (e, t = []) => {
    Ie(e) ? e.forEach((n) => n(...t)) : e && e(...t);
  };
  kl = (e) => e ? Ie(e) ? e.some((t) => t.length > 1) : e.length > 1 : false;
  function If(e) {
    const t = {};
    for (const de in e) de in vf || (t[de] = e[de]);
    if (e.css === false) return t;
    const { name: n = "v", type: r, duration: l, enterFromClass: c = `${n}-enter-from`, enterActiveClass: f = `${n}-enter-active`, enterToClass: h = `${n}-enter-to`, appearFromClass: p = c, appearActiveClass: v = f, appearToClass: g = h, leaveFromClass: T = `${n}-leave-from`, leaveActiveClass: M = `${n}-leave-active`, leaveToClass: R = `${n}-leave-to` } = e, j = Fp(l), L = j && j[0], he = j && j[1], { onBeforeEnter: re, onEnter: K, onEnterCancelled: ee, onLeave: G, onLeaveCancelled: ue, onBeforeAppear: ge = re, onAppear: ie = K, onAppearCancelled: fe = ee } = t, te = (de, Ue, ft, $t) => {
      de._enterCancelled = $t, tr(de, Ue ? g : h), tr(de, Ue ? v : f), ft && ft();
    }, me = (de, Ue) => {
      de._isLeaving = false, tr(de, T), tr(de, R), tr(de, M), Ue && Ue();
    }, Re = (de) => (Ue, ft) => {
      const $t = de ? ie : K, Ye = () => te(Ue, de, ft);
      vr($t, [
        Ue,
        Ye
      ]), Ll(() => {
        tr(Ue, de ? p : c), wn(Ue, de ? g : h), kl($t) || Dl(Ue, r, L, Ye);
      });
    };
    return dt(t, {
      onBeforeEnter(de) {
        vr(re, [
          de
        ]), wn(de, c), wn(de, f);
      },
      onBeforeAppear(de) {
        vr(ge, [
          de
        ]), wn(de, p), wn(de, v);
      },
      onEnter: Re(false),
      onAppear: Re(true),
      onLeave(de, Ue) {
        de._isLeaving = true;
        const ft = () => me(de, Ue);
        wn(de, T), de._enterCancelled ? (wn(de, M), ba(de)) : (ba(de), wn(de, M)), Ll(() => {
          de._isLeaving && (tr(de, T), wn(de, R), kl(G) || Dl(de, r, he, ft));
        }), vr(G, [
          de,
          ft
        ]);
      },
      onEnterCancelled(de) {
        te(de, false, void 0, true), vr(ee, [
          de
        ]);
      },
      onAppearCancelled(de) {
        te(de, true, void 0, true), vr(fe, [
          de
        ]);
      },
      onLeaveCancelled(de) {
        me(de), vr(ue, [
          de
        ]);
      }
    });
  }
  function Fp(e) {
    if (e == null) return null;
    if (qe(e)) return [
      Ws(e.enter),
      Ws(e.leave)
    ];
    {
      const t = Ws(e);
      return [
        t,
        t
      ];
    }
  }
  function Ws(e) {
    return Lh(e);
  }
  function wn(e, t) {
    t.split(/\s+/).forEach((n) => n && e.classList.add(n)), (e[Qr] || (e[Qr] = /* @__PURE__ */ new Set())).add(t);
  }
  function tr(e, t) {
    t.split(/\s+/).forEach((r) => r && e.classList.remove(r));
    const n = e[Qr];
    n && (n.delete(t), n.size || (e[Qr] = void 0));
  }
  function Ll(e) {
    requestAnimationFrame(() => {
      requestAnimationFrame(e);
    });
  }
  let xp = 0;
  function Dl(e, t, n, r) {
    const l = e._endId = ++xp, c = () => {
      l === e._endId && r();
    };
    if (n != null) return setTimeout(c, n);
    const { type: f, timeout: h, propCount: p } = Tf(e, t);
    if (!f) return r();
    const v = f + "end";
    let g = 0;
    const T = () => {
      e.removeEventListener(v, M), c();
    }, M = (R) => {
      R.target === e && ++g >= p && T();
    };
    setTimeout(() => {
      g < p && T();
    }, h + 1), e.addEventListener(v, M);
  }
  function Tf(e, t) {
    const n = window.getComputedStyle(e), r = (j) => (n[j] || "").split(", "), l = r(`${Xn}Delay`), c = r(`${Xn}Duration`), f = Fl(l, c), h = r(`${pi}Delay`), p = r(`${pi}Duration`), v = Fl(h, p);
    let g = null, T = 0, M = 0;
    t === Xn ? f > 0 && (g = Xn, T = f, M = c.length) : t === pi ? v > 0 && (g = pi, T = v, M = p.length) : (T = Math.max(f, v), g = T > 0 ? f > v ? Xn : pi : null, M = g ? g === Xn ? c.length : p.length : 0);
    const R = g === Xn && /\b(?:transform|all)(?:,|$)/.test(r(`${Xn}Property`).toString());
    return {
      type: g,
      timeout: T,
      propCount: M,
      hasTransform: R
    };
  }
  function Fl(e, t) {
    for (; e.length < t.length; ) e = e.concat(e);
    return Math.max(...t.map((n, r) => xl(n) + xl(e[r])));
  }
  function xl(e) {
    return e === "auto" ? 0 : Number(e.slice(0, -1).replace(",", ".")) * 1e3;
  }
  function ba(e) {
    return (e ? e.ownerDocument : document).body.offsetHeight;
  }
  function jp(e, t, n) {
    const r = e[Qr];
    r && (t = (t ? [
      t,
      ...r
    ] : [
      ...r
    ]).join(" ")), t == null ? e.removeAttribute("class") : n ? e.setAttribute("class", t) : e.className = t;
  }
  let zo, Sf;
  zo = /* @__PURE__ */ Symbol("_vod");
  Sf = /* @__PURE__ */ Symbol("_vsh");
  cv = {
    name: "show",
    beforeMount(e, { value: t }, { transition: n }) {
      e[zo] = e.style.display === "none" ? "" : e.style.display, n && t ? n.beforeEnter(e) : gi(e, t);
    },
    mounted(e, { value: t }, { transition: n }) {
      n && t && n.enter(e);
    },
    updated(e, { value: t, oldValue: n }, { transition: r }) {
      !t != !n && (r ? t ? (r.beforeEnter(e), gi(e, true), r.enter(e)) : r.leave(e, () => {
        gi(e, false);
      }) : gi(e, t));
    },
    beforeUnmount(e, { value: t }) {
      gi(e, t);
    }
  };
  function gi(e, t) {
    e.style.display = t ? e[zo] : "none", e[Sf] = !t;
  }
  const _f = /* @__PURE__ */ Symbol("");
  uv = function(e) {
    const t = hr();
    if (!t) return;
    const n = t.ut = (l = e(t.proxy)) => {
      Array.from(document.querySelectorAll(`[data-v-owner="${t.uid}"]`)).forEach((c) => Vo(c, l));
    }, r = () => {
      const l = e(t.proxy);
      t.ce ? Vo(t.ce, l) : va(t.subTree, l), n(l);
    };
    Ju(() => {
      Du(r);
    }), Qi(() => {
      Kr(r, fn, {
        flush: "post"
      });
      const l = new MutationObserver(r);
      l.observe(t.subTree.el.parentNode, {
        childList: true
      }), Ka(() => l.disconnect());
    });
  };
  function va(e, t) {
    if (e.shapeFlag & 128) {
      const n = e.suspense;
      e = n.activeBranch, n.pendingBranch && !n.isHydrating && n.effects.push(() => {
        va(n.activeBranch, t);
      });
    }
    for (; e.component; ) e = e.component.subTree;
    if (e.shapeFlag & 1 && e.el) Vo(e.el, t);
    else if (e.type === Rt) e.children.forEach((n) => va(n, t));
    else if (e.type === Di) {
      let { el: n, anchor: r } = e;
      for (; n && (Vo(n, t), n !== r); ) n = n.nextSibling;
    }
  }
  function Vo(e, t) {
    if (e.nodeType === 1) {
      const n = e.style;
      let r = "";
      for (const l in t) {
        const c = Wh(t[l]);
        n.setProperty(`--${l}`, c), r += `--${l}: ${c};`;
      }
      n[_f] = r;
    }
  }
  const Up = /(?:^|;)\s*display\s*:/;
  function Gp(e, t, n) {
    const r = e.style, l = ot(n);
    let c = false;
    if (n && !l) {
      if (t) if (ot(t)) for (const f of t.split(";")) {
        const h = f.slice(0, f.indexOf(":")).trim();
        n[h] == null && _o(r, h, "");
      }
      else for (const f in t) n[f] == null && _o(r, f, "");
      for (const f in n) f === "display" && (c = true), _o(r, f, n[f]);
    } else if (l) {
      if (t !== n) {
        const f = r[_f];
        f && (n += ";" + f), r.cssText = n, c = Up.test(n);
      }
    } else t && e.removeAttribute("style");
    zo in e && (e[zo] = c ? r.display : "", e[Sf] && (r.display = "none"));
  }
  const jl = /\s*!important$/;
  function _o(e, t, n) {
    if (Ie(n)) n.forEach((r) => _o(e, t, r));
    else if (n == null && (n = ""), t.startsWith("--")) e.setProperty(t, n);
    else {
      const r = Wp(e, t);
      jl.test(n) ? e.setProperty(Yn(r), n.replace(jl, ""), "important") : e[r] = n;
    }
  }
  const Ul = [
    "Webkit",
    "Moz",
    "ms"
  ], Bs = {};
  function Wp(e, t) {
    const n = Bs[t];
    if (n) return n;
    let r = Xt(t);
    if (r !== "filter" && r in e) return Bs[t] = r;
    r = as(r);
    for (let l = 0; l < Ul.length; l++) {
      const c = Ul[l] + r;
      if (c in e) return Bs[t] = c;
    }
    return t;
  }
  const Gl = "http://www.w3.org/1999/xlink";
  function Wl(e, t, n, r, l, c = Gh(t)) {
    r && t.startsWith("xlink:") ? n == null ? e.removeAttributeNS(Gl, t.slice(6, t.length)) : e.setAttributeNS(Gl, t, n) : n == null || c && !cu(n) ? e.removeAttribute(t) : e.setAttribute(t, c ? "" : qn(n) ? String(n) : n);
  }
  function Bl(e, t, n, r, l) {
    if (t === "innerHTML" || t === "textContent") {
      n != null && (e[t] = t === "innerHTML" ? bf(n) : n);
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
      h === "boolean" ? n = cu(n) : n == null && h === "string" ? (n = "", f = true) : h === "number" && (n = 0, f = true);
    }
    try {
      e[t] = n;
    } catch {
    }
    f && e.removeAttribute(l || t);
  }
  function Bp(e, t, n, r) {
    e.addEventListener(t, n, r);
  }
  function $p(e, t, n, r) {
    e.removeEventListener(t, n, r);
  }
  const $l = /* @__PURE__ */ Symbol("_vei");
  function zp(e, t, n, r, l = null) {
    const c = e[$l] || (e[$l] = {}), f = c[t];
    if (r && f) f.value = r;
    else {
      const [h, p] = Vp(t);
      if (r) {
        const v = c[t] = Yp(r, l);
        Bp(e, h, v, p);
      } else f && ($p(e, h, f, p), c[t] = void 0);
    }
  }
  const zl = /(?:Once|Passive|Capture)$/;
  function Vp(e) {
    let t;
    if (zl.test(e)) {
      t = {};
      let r;
      for (; r = e.match(zl); ) e = e.slice(0, e.length - r[0].length), t[r[0].toLowerCase()] = true;
    }
    return [
      e[2] === ":" ? e.slice(3) : Yn(e.slice(2)),
      t
    ];
  }
  let $s = 0;
  const Hp = Promise.resolve(), qp = () => $s || (Hp.then(() => $s = 0), $s = Date.now());
  function Yp(e, t) {
    const n = (r) => {
      if (!r._vts) r._vts = Date.now();
      else if (r._vts <= n.attached) return;
      pn(Kp(r, n.value), t, 5, [
        r
      ]);
    };
    return n.value = e, n.attached = qp(), n;
  }
  function Kp(e, t) {
    if (Ie(t)) {
      const n = e.stopImmediatePropagation;
      return e.stopImmediatePropagation = () => {
        n.call(e), e._stopped = true;
      }, t.map((r) => (l) => !l._stopped && r && r(l));
    } else return t;
  }
  const Vl = (e) => e.charCodeAt(0) === 111 && e.charCodeAt(1) === 110 && e.charCodeAt(2) > 96 && e.charCodeAt(2) < 123, Jp = (e, t, n, r, l, c) => {
    const f = l === "svg";
    t === "class" ? jp(e, r, f) : t === "style" ? Gp(e, n, r) : is(t) ? Fa(t) || zp(e, t, n, r, c) : (t[0] === "." ? (t = t.slice(1), true) : t[0] === "^" ? (t = t.slice(1), false) : Xp(e, t, r, f)) ? (Bl(e, t, r), !e.tagName.includes("-") && (t === "value" || t === "checked" || t === "selected") && Wl(e, t, r, f, c, t !== "value")) : e._isVueCE && (/[A-Z]/.test(t) || !ot(r)) ? Bl(e, Xt(t), r, c, t) : (t === "true-value" ? e._trueValue = r : t === "false-value" && (e._falseValue = r), Wl(e, t, r, f));
  };
  function Xp(e, t, n, r) {
    if (r) return !!(t === "innerHTML" || t === "textContent" || t in e && Vl(t) && _e(n));
    if (t === "spellcheck" || t === "draggable" || t === "translate" || t === "autocorrect" || t === "sandbox" && e.tagName === "IFRAME" || t === "form" || t === "list" && e.tagName === "INPUT" || t === "type" && e.tagName === "TEXTAREA") return false;
    if (t === "width" || t === "height") {
      const l = e.tagName;
      if (l === "IMG" || l === "VIDEO" || l === "CANVAS" || l === "SOURCE") return false;
    }
    return Vl(t) && ot(n) ? false : t in e;
  }
  let Of, Af, Ho, Hl, Zp, Qp;
  Of = /* @__PURE__ */ new WeakMap();
  Af = /* @__PURE__ */ new WeakMap();
  Ho = /* @__PURE__ */ Symbol("_moveCb");
  Hl = /* @__PURE__ */ Symbol("_enterCb");
  Zp = (e) => (delete e.props.mode, e);
  Qp = Zp({
    name: "TransitionGroup",
    props: dt({}, Ef, {
      tag: String,
      moveClass: String
    }),
    setup(e, { slots: t }) {
      const n = hr(), r = $u();
      let l, c;
      return qa(() => {
        if (!l.length) return;
        const f = e.moveClass || `${e.name || "v"}-move`;
        if (!rg(l[0].el, n.vnode.el, f)) {
          l = [];
          return;
        }
        l.forEach(eg), l.forEach(tg);
        const h = l.filter(ng);
        ba(n.vnode.el), h.forEach((p) => {
          const v = p.el, g = v.style;
          wn(v, f), g.transform = g.webkitTransform = g.transitionDuration = "";
          const T = v[Ho] = (M) => {
            M && M.target !== v || (!M || M.propertyName.endsWith("transform")) && (v.removeEventListener("transitionend", T), v[Ho] = null, tr(v, f));
          };
          v.addEventListener("transitionend", T);
        }), l = [];
      }), () => {
        const f = De(e), h = If(f);
        let p = f.tag || Rt;
        if (l = [], c) for (let v = 0; v < c.length; v++) {
          const g = c[v];
          g.el && g.el instanceof Element && (l.push(g), ur(g, $i(g, h, r, n)), Of.set(g, {
            left: g.el.offsetLeft,
            top: g.el.offsetTop
          }));
        }
        c = t.default ? Ha(t.default()) : [];
        for (let v = 0; v < c.length; v++) {
          const g = c[v];
          g.key != null && ur(g, $i(g, h, r, n));
        }
        return Nt(p, null, c);
      };
    }
  });
  fv = Qp;
  function eg(e) {
    const t = e.el;
    t[Ho] && t[Ho](), t[Hl] && t[Hl]();
  }
  function tg(e) {
    Af.set(e, {
      left: e.el.offsetLeft,
      top: e.el.offsetTop
    });
  }
  function ng(e) {
    const t = Of.get(e), n = Af.get(e), r = t.left - n.left, l = t.top - n.top;
    if (r || l) {
      const c = e.el.style;
      return c.transform = c.webkitTransform = `translate(${r}px,${l}px)`, c.transitionDuration = "0s", e;
    }
  }
  function rg(e, t, n) {
    const r = e.cloneNode(), l = e[Qr];
    l && l.forEach((h) => {
      h.split(/\s+/).forEach((p) => p && r.classList.remove(p));
    }), n.split(/\s+/).forEach((h) => h && r.classList.add(h)), r.style.display = "none";
    const c = t.nodeType === 1 ? t : t.parentNode;
    c.appendChild(r);
    const { hasTransform: f } = Tf(r);
    return c.removeChild(r), f;
  }
  let ig, og, sg, ag;
  ig = [
    "ctrl",
    "shift",
    "alt",
    "meta"
  ];
  og = {
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
    exact: (e, t) => ig.some((n) => e[`${n}Key`] && !t.includes(n))
  };
  hv = (e, t) => {
    const n = e._withMods || (e._withMods = {}), r = t.join(".");
    return n[r] || (n[r] = ((l, ...c) => {
      for (let f = 0; f < t.length; f++) {
        const h = og[t[f]];
        if (h && h(l, t)) return;
      }
      return e(l, ...c);
    }));
  };
  sg = {
    esc: "escape",
    space: " ",
    up: "arrow-up",
    left: "arrow-left",
    right: "arrow-right",
    down: "arrow-down",
    delete: "backspace"
  };
  dv = (e, t) => {
    const n = e._withKeys || (e._withKeys = {}), r = t.join(".");
    return n[r] || (n[r] = ((l) => {
      if (!("key" in l)) return;
      const c = Yn(l.key);
      if (t.some((f) => f === c || sg[f] === c)) return e(l);
    }));
  };
  ag = dt({
    patchProp: Jp
  }, Lp);
  let ql;
  function lg() {
    return ql || (ql = hp(ag));
  }
  const Rf = ((...e) => {
    const t = lg().createApp(...e), { mount: n } = t;
    return t.mount = (r) => {
      const l = ug(r);
      if (!l) return;
      const c = t._component;
      !_e(c) && !c.render && !c.template && (c.template = l.innerHTML), l.nodeType === 1 && (l.textContent = "");
      const f = n(l, false, cg(l));
      return l instanceof Element && (l.removeAttribute("v-cloak"), l.setAttribute("data-v-app", "")), f;
    }, t;
  });
  function cg(e) {
    if (e instanceof SVGElement) return "svg";
    if (typeof MathMLElement == "function" && e instanceof MathMLElement) return "mathml";
  }
  function ug(e) {
    return ot(e) ? document.querySelector(e) : e;
  }
  const fg = "" + new URL("../favicon.svg", import.meta.url).href;
  let Mf, hg, Nf, dg, pg, mi;
  Mf = typeof global == "object" && global && global.Object === Object && global;
  hg = typeof self == "object" && self && self.Object === Object && self;
  Sn = Mf || hg || Function("return this")();
  ei = Sn.Symbol;
  Nf = Object.prototype;
  dg = Nf.hasOwnProperty;
  pg = Nf.toString;
  mi = ei ? ei.toStringTag : void 0;
  function gg(e) {
    var t = dg.call(e, mi), n = e[mi];
    try {
      e[mi] = void 0;
      var r = true;
    } catch {
    }
    var l = pg.call(e);
    return r && (t ? e[mi] = n : delete e[mi]), l;
  }
  var mg = Object.prototype, wg = mg.toString;
  function yg(e) {
    return wg.call(e);
  }
  var bg = "[object Null]", vg = "[object Undefined]", Yl = ei ? ei.toStringTag : void 0;
  dr = function(e) {
    return e == null ? e === void 0 ? vg : bg : Yl && Yl in Object(e) ? gg(e) : yg(e);
  };
  pr = function(e) {
    return e != null && typeof e == "object";
  };
  Es = Array.isArray;
  Is = function(e) {
    var t = typeof e;
    return e != null && (t == "object" || t == "function");
  };
  var Eg = "[object AsyncFunction]", Ig = "[object Function]", Tg = "[object GeneratorFunction]", Sg = "[object Proxy]";
  Pf = function(e) {
    if (!Is(e)) return false;
    var t = dr(e);
    return t == Ig || t == Tg || t == Eg || t == Sg;
  };
  var zs = Sn["__core-js_shared__"], Kl = (function() {
    var e = /[^.]+$/.exec(zs && zs.keys && zs.keys.IE_PROTO || "");
    return e ? "Symbol(src)_1." + e : "";
  })();
  function _g(e) {
    return !!Kl && Kl in e;
  }
  var Og = Function.prototype, Ag = Og.toString;
  function Dr(e) {
    if (e != null) {
      try {
        return Ag.call(e);
      } catch {
      }
      try {
        return e + "";
      } catch {
      }
    }
    return "";
  }
  var Rg = /[\\^$.*+?()[\]{}|]/g, Mg = /^\[object .+?Constructor\]$/, Ng = Function.prototype, Pg = Object.prototype, Cg = Ng.toString, kg = Pg.hasOwnProperty, Lg = RegExp("^" + Cg.call(kg).replace(Rg, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$");
  function Dg(e) {
    if (!Is(e) || _g(e)) return false;
    var t = Pf(e) ? Lg : Mg;
    return t.test(Dr(e));
  }
  function Fg(e, t) {
    return e == null ? void 0 : e[t];
  }
  function Fr(e, t) {
    var n = Fg(e, t);
    return Dg(n) ? n : void 0;
  }
  let Ea, Jl, xg;
  Ea = Fr(Sn, "WeakMap");
  Jl = Object.create;
  xg = /* @__PURE__ */ (function() {
    function e() {
    }
    return function(t) {
      if (!Is(t)) return {};
      if (Jl) return Jl(t);
      e.prototype = t;
      var n = new e();
      return e.prototype = void 0, n;
    };
  })();
  Xl = (function() {
    try {
      var e = Fr(Object, "defineProperty");
      return e({}, "", {}), e;
    } catch {
    }
  })();
  function jg(e, t) {
    for (var n = -1, r = e == null ? 0 : e.length; ++n < r && t(e[n], n, e) !== false; ) ;
    return e;
  }
  var Ug = 9007199254740991, Gg = /^(?:0|[1-9]\d*)$/;
  Wg = function(e, t) {
    var n = typeof e;
    return t = t ?? Ug, !!t && (n == "number" || n != "symbol" && Gg.test(e)) && e > -1 && e % 1 == 0 && e < t;
  };
  Bg = function(e, t, n) {
    t == "__proto__" && Xl ? Xl(e, t, {
      configurable: true,
      enumerable: true,
      value: n,
      writable: true
    }) : e[t] = n;
  };
  Cf = function(e, t) {
    return e === t || e !== e && t !== t;
  };
  var $g = Object.prototype, zg = $g.hasOwnProperty;
  Vg = function(e, t, n) {
    var r = e[t];
    (!(zg.call(e, t) && Cf(r, n)) || n === void 0 && !(t in e)) && Bg(e, t, n);
  };
  var Hg = 9007199254740991;
  kf = function(e) {
    return typeof e == "number" && e > -1 && e % 1 == 0 && e <= Hg;
  };
  qg = function(e) {
    return e != null && kf(e.length) && !Pf(e);
  };
  var Yg = Object.prototype;
  Lf = function(e) {
    var t = e && e.constructor, n = typeof t == "function" && t.prototype || Yg;
    return e === n;
  };
  function Kg(e, t) {
    for (var n = -1, r = Array(e); ++n < e; ) r[n] = t(n);
    return r;
  }
  var Jg = "[object Arguments]";
  function Zl(e) {
    return pr(e) && dr(e) == Jg;
  }
  let Df, Xg, Zg;
  Df = Object.prototype;
  Xg = Df.hasOwnProperty;
  Zg = Df.propertyIsEnumerable;
  Qg = Zl(/* @__PURE__ */ (function() {
    return arguments;
  })()) ? Zl : function(e) {
    return pr(e) && Xg.call(e, "callee") && !Zg.call(e, "callee");
  };
  function em() {
    return false;
  }
  let Ff, Ql, tm, ec, nm, rm, im, om, sm, am, lm, cm, um, fm, hm, dm, pm, gm, mm, wm, ym, bm, vm, Em, Im, Tm, Sm, _m, Om, Ze;
  Ff = typeof exports == "object" && exports && !exports.nodeType && exports;
  Ql = Ff && typeof module == "object" && module && !module.nodeType && module;
  tm = Ql && Ql.exports === Ff;
  ec = tm ? Sn.Buffer : void 0;
  nm = ec ? ec.isBuffer : void 0;
  xf = nm || em;
  rm = "[object Arguments]";
  im = "[object Array]";
  om = "[object Boolean]";
  sm = "[object Date]";
  am = "[object Error]";
  lm = "[object Function]";
  cm = "[object Map]";
  um = "[object Number]";
  fm = "[object Object]";
  hm = "[object RegExp]";
  dm = "[object Set]";
  pm = "[object String]";
  gm = "[object WeakMap]";
  mm = "[object ArrayBuffer]";
  wm = "[object DataView]";
  ym = "[object Float32Array]";
  bm = "[object Float64Array]";
  vm = "[object Int8Array]";
  Em = "[object Int16Array]";
  Im = "[object Int32Array]";
  Tm = "[object Uint8Array]";
  Sm = "[object Uint8ClampedArray]";
  _m = "[object Uint16Array]";
  Om = "[object Uint32Array]";
  Ze = {};
  Ze[ym] = Ze[bm] = Ze[vm] = Ze[Em] = Ze[Im] = Ze[Tm] = Ze[Sm] = Ze[_m] = Ze[Om] = true;
  Ze[rm] = Ze[im] = Ze[mm] = Ze[om] = Ze[wm] = Ze[sm] = Ze[am] = Ze[lm] = Ze[cm] = Ze[um] = Ze[fm] = Ze[hm] = Ze[dm] = Ze[pm] = Ze[gm] = false;
  function Am(e) {
    return pr(e) && kf(e.length) && !!Ze[dr(e)];
  }
  function tl(e) {
    return function(t) {
      return e(t);
    };
  }
  let jf, xi, Rm, Vs, ti, tc, Nm, Pm;
  jf = typeof exports == "object" && exports && !exports.nodeType && exports;
  xi = jf && typeof module == "object" && module && !module.nodeType && module;
  Rm = xi && xi.exports === jf;
  Vs = Rm && Mf.process;
  ti = (function() {
    try {
      var e = xi && xi.require && xi.require("util").types;
      return e || Vs && Vs.binding && Vs.binding("util");
    } catch {
    }
  })();
  tc = ti && ti.isTypedArray;
  Mm = tc ? tl(tc) : Am;
  Nm = Object.prototype;
  Pm = Nm.hasOwnProperty;
  Cm = function(e, t) {
    var n = Es(e), r = !n && Qg(e), l = !n && !r && xf(e), c = !n && !r && !l && Mm(e), f = n || r || l || c, h = f ? Kg(e.length, String) : [], p = h.length;
    for (var v in e) (t || Pm.call(e, v)) && !(f && (v == "length" || l && (v == "offset" || v == "parent") || c && (v == "buffer" || v == "byteLength" || v == "byteOffset") || Wg(v, p))) && h.push(v);
    return h;
  };
  function Uf(e, t) {
    return function(n) {
      return e(t(n));
    };
  }
  var km = Uf(Object.keys, Object), Lm = Object.prototype, Dm = Lm.hasOwnProperty;
  function Fm(e) {
    if (!Lf(e)) return km(e);
    var t = [];
    for (var n in Object(e)) Dm.call(e, n) && n != "constructor" && t.push(n);
    return t;
  }
  xm = function(e) {
    return qg(e) ? Cm(e) : Fm(e);
  };
  var Hi = Fr(Object, "create");
  function jm() {
    this.__data__ = Hi ? Hi(null) : {}, this.size = 0;
  }
  function Um(e) {
    var t = this.has(e) && delete this.__data__[e];
    return this.size -= t ? 1 : 0, t;
  }
  var Gm = "__lodash_hash_undefined__", Wm = Object.prototype, Bm = Wm.hasOwnProperty;
  function $m(e) {
    var t = this.__data__;
    if (Hi) {
      var n = t[e];
      return n === Gm ? void 0 : n;
    }
    return Bm.call(t, e) ? t[e] : void 0;
  }
  var zm = Object.prototype, Vm = zm.hasOwnProperty;
  function Hm(e) {
    var t = this.__data__;
    return Hi ? t[e] !== void 0 : Vm.call(t, e);
  }
  var qm = "__lodash_hash_undefined__";
  function Ym(e, t) {
    var n = this.__data__;
    return this.size += this.has(e) ? 0 : 1, n[e] = Hi && t === void 0 ? qm : t, this;
  }
  function Lr(e) {
    var t = -1, n = e == null ? 0 : e.length;
    for (this.clear(); ++t < n; ) {
      var r = e[t];
      this.set(r[0], r[1]);
    }
  }
  Lr.prototype.clear = jm;
  Lr.prototype.delete = Um;
  Lr.prototype.get = $m;
  Lr.prototype.has = Hm;
  Lr.prototype.set = Ym;
  function Km() {
    this.__data__ = [], this.size = 0;
  }
  function Ts(e, t) {
    for (var n = e.length; n--; ) if (Cf(e[n][0], t)) return n;
    return -1;
  }
  var Jm = Array.prototype, Xm = Jm.splice;
  function Zm(e) {
    var t = this.__data__, n = Ts(t, e);
    if (n < 0) return false;
    var r = t.length - 1;
    return n == r ? t.pop() : Xm.call(t, n, 1), --this.size, true;
  }
  function Qm(e) {
    var t = this.__data__, n = Ts(t, e);
    return n < 0 ? void 0 : t[n][1];
  }
  function ew(e) {
    return Ts(this.__data__, e) > -1;
  }
  function tw(e, t) {
    var n = this.__data__, r = Ts(n, e);
    return r < 0 ? (++this.size, n.push([
      e,
      t
    ])) : n[r][1] = t, this;
  }
  function Jn(e) {
    var t = -1, n = e == null ? 0 : e.length;
    for (this.clear(); ++t < n; ) {
      var r = e[t];
      this.set(r[0], r[1]);
    }
  }
  Jn.prototype.clear = Km;
  Jn.prototype.delete = Zm;
  Jn.prototype.get = Qm;
  Jn.prototype.has = ew;
  Jn.prototype.set = tw;
  var qi = Fr(Sn, "Map");
  function nw() {
    this.size = 0, this.__data__ = {
      hash: new Lr(),
      map: new (qi || Jn)(),
      string: new Lr()
    };
  }
  function rw(e) {
    var t = typeof e;
    return t == "string" || t == "number" || t == "symbol" || t == "boolean" ? e !== "__proto__" : e === null;
  }
  function Ss(e, t) {
    var n = e.__data__;
    return rw(t) ? n[typeof t == "string" ? "string" : "hash"] : n.map;
  }
  function iw(e) {
    var t = Ss(this, e).delete(e);
    return this.size -= t ? 1 : 0, t;
  }
  function ow(e) {
    return Ss(this, e).get(e);
  }
  function sw(e) {
    return Ss(this, e).has(e);
  }
  function aw(e, t) {
    var n = Ss(this, e), r = n.size;
    return n.set(e, t), this.size += n.size == r ? 0 : 1, this;
  }
  li = function(e) {
    var t = -1, n = e == null ? 0 : e.length;
    for (this.clear(); ++t < n; ) {
      var r = e[t];
      this.set(r[0], r[1]);
    }
  };
  li.prototype.clear = nw;
  li.prototype.delete = iw;
  li.prototype.get = ow;
  li.prototype.has = sw;
  li.prototype.set = aw;
  function lw(e, t) {
    for (var n = -1, r = t.length, l = e.length; ++n < r; ) e[l + n] = t[n];
    return e;
  }
  var Gf = Uf(Object.getPrototypeOf, Object), cw = "[object Object]", uw = Function.prototype, fw = Object.prototype, Wf = uw.toString, hw = fw.hasOwnProperty, dw = Wf.call(Object);
  pw = function(e) {
    if (!pr(e) || dr(e) != cw) return false;
    var t = Gf(e);
    if (t === null) return true;
    var n = hw.call(t, "constructor") && t.constructor;
    return typeof n == "function" && n instanceof n && Wf.call(n) == dw;
  };
  var gw = "[object DOMException]", mw = "[object Error]";
  function Bf(e) {
    if (!pr(e)) return false;
    var t = dr(e);
    return t == mw || t == gw || typeof e.message == "string" && typeof e.name == "string" && !pw(e);
  }
  function ww() {
    this.__data__ = new Jn(), this.size = 0;
  }
  function yw(e) {
    var t = this.__data__, n = t.delete(e);
    return this.size = t.size, n;
  }
  function bw(e) {
    return this.__data__.get(e);
  }
  function vw(e) {
    return this.__data__.has(e);
  }
  var Ew = 200;
  function Iw(e, t) {
    var n = this.__data__;
    if (n instanceof Jn) {
      var r = n.__data__;
      if (!qi || r.length < Ew - 1) return r.push([
        e,
        t
      ]), this.size = ++n.size, this;
      n = this.__data__ = new li(r);
    }
    return n.set(e, t), this.size = n.size, this;
  }
  ci = function(e) {
    var t = this.__data__ = new Jn(e);
    this.size = t.size;
  };
  ci.prototype.clear = ww;
  ci.prototype.delete = yw;
  ci.prototype.get = bw;
  ci.prototype.has = vw;
  ci.prototype.set = Iw;
  var $f = typeof exports == "object" && exports && !exports.nodeType && exports, nc = $f && typeof module == "object" && module && !module.nodeType && module, Tw = nc && nc.exports === $f, rc = Tw ? Sn.Buffer : void 0, ic = rc ? rc.allocUnsafe : void 0;
  Sw = function(e, t) {
    if (t) return e.slice();
    var n = e.length, r = ic ? ic(n) : new e.constructor(n);
    return e.copy(r), r;
  };
  function _w(e, t) {
    for (var n = -1, r = e == null ? 0 : e.length, l = 0, c = []; ++n < r; ) {
      var f = e[n];
      t(f, n, e) && (c[l++] = f);
    }
    return c;
  }
  function Ow() {
    return [];
  }
  var Aw = Object.prototype, Rw = Aw.propertyIsEnumerable, oc = Object.getOwnPropertySymbols, Mw = oc ? function(e) {
    return e == null ? [] : (e = Object(e), _w(oc(e), function(t) {
      return Rw.call(e, t);
    }));
  } : Ow;
  function Nw(e, t, n) {
    var r = t(e);
    return Es(e) ? r : lw(r, n(e));
  }
  Pw = function(e) {
    return Nw(e, xm, Mw);
  };
  let Ia, Ta, Sa, sc, Cw, ac, lc, cc, uc, kw, Lw, Dw, Fw, xw;
  Ia = Fr(Sn, "DataView");
  Ta = Fr(Sn, "Promise");
  Sa = Fr(Sn, "Set");
  sc = "[object Map]";
  Cw = "[object Object]";
  ac = "[object Promise]";
  lc = "[object Set]";
  cc = "[object WeakMap]";
  uc = "[object DataView]";
  kw = Dr(Ia);
  Lw = Dr(qi);
  Dw = Dr(Ta);
  Fw = Dr(Sa);
  xw = Dr(Ea);
  Dn = dr;
  (Ia && Dn(new Ia(new ArrayBuffer(1))) != uc || qi && Dn(new qi()) != sc || Ta && Dn(Ta.resolve()) != ac || Sa && Dn(new Sa()) != lc || Ea && Dn(new Ea()) != cc) && (Dn = function(e) {
    var t = dr(e), n = t == Cw ? e.constructor : void 0, r = n ? Dr(n) : "";
    if (r) switch (r) {
      case kw:
        return uc;
      case Lw:
        return sc;
      case Dw:
        return ac;
      case Fw:
        return lc;
      case xw:
        return cc;
    }
    return t;
  });
  var jw = Object.prototype, Uw = jw.hasOwnProperty;
  function Gw(e) {
    var t = e.length, n = new e.constructor(t);
    return t && typeof e[0] == "string" && Uw.call(e, "index") && (n.index = e.index, n.input = e.input), n;
  }
  fc = Sn.Uint8Array;
  function nl(e) {
    var t = new e.constructor(e.byteLength);
    return new fc(t).set(new fc(e)), t;
  }
  function Ww(e, t) {
    var n = nl(e.buffer);
    return new e.constructor(n, e.byteOffset, e.byteLength);
  }
  var Bw = /\w*$/;
  function $w(e) {
    var t = new e.constructor(e.source, Bw.exec(e));
    return t.lastIndex = e.lastIndex, t;
  }
  var hc = ei ? ei.prototype : void 0, dc = hc ? hc.valueOf : void 0;
  function zw(e) {
    return dc ? Object(dc.call(e)) : {};
  }
  Vw = function(e, t) {
    var n = t ? nl(e.buffer) : e.buffer;
    return new e.constructor(n, e.byteOffset, e.length);
  };
  var Hw = "[object Boolean]", qw = "[object Date]", Yw = "[object Map]", Kw = "[object Number]", Jw = "[object RegExp]", Xw = "[object Set]", Zw = "[object String]", Qw = "[object Symbol]", ey = "[object ArrayBuffer]", ty = "[object DataView]", ny = "[object Float32Array]", ry = "[object Float64Array]", iy = "[object Int8Array]", oy = "[object Int16Array]", sy = "[object Int32Array]", ay = "[object Uint8Array]", ly = "[object Uint8ClampedArray]", cy = "[object Uint16Array]", uy = "[object Uint32Array]";
  function fy(e, t, n) {
    var r = e.constructor;
    switch (t) {
      case ey:
        return nl(e);
      case Hw:
      case qw:
        return new r(+e);
      case ty:
        return Ww(e);
      case ny:
      case ry:
      case iy:
      case oy:
      case sy:
      case ay:
      case ly:
      case cy:
      case uy:
        return Vw(e, n);
      case Yw:
        return new r();
      case Kw:
      case Zw:
        return new r(e);
      case Jw:
        return $w(e);
      case Xw:
        return new r();
      case Qw:
        return zw(e);
    }
  }
  hy = function(e) {
    return typeof e.constructor == "function" && !Lf(e) ? xg(Gf(e)) : {};
  };
  var dy = "[object Map]";
  function py(e) {
    return pr(e) && Dn(e) == dy;
  }
  var pc = ti && ti.isMap, gy = pc ? tl(pc) : py, my = "[object Set]";
  function wy(e) {
    return pr(e) && Dn(e) == my;
  }
  var gc = ti && ti.isSet, yy = gc ? tl(gc) : wy, by = 1, zf = "[object Arguments]", vy = "[object Array]", Ey = "[object Boolean]", Iy = "[object Date]", Ty = "[object Error]", Vf = "[object Function]", Sy = "[object GeneratorFunction]", _y = "[object Map]", Oy = "[object Number]", Hf = "[object Object]", Ay = "[object RegExp]", Ry = "[object Set]", My = "[object String]", Ny = "[object Symbol]", Py = "[object WeakMap]", Cy = "[object ArrayBuffer]", ky = "[object DataView]", Ly = "[object Float32Array]", Dy = "[object Float64Array]", Fy = "[object Int8Array]", xy = "[object Int16Array]", jy = "[object Int32Array]", Uy = "[object Uint8Array]", Gy = "[object Uint8ClampedArray]", Wy = "[object Uint16Array]", By = "[object Uint32Array]", Ke = {};
  Ke[zf] = Ke[vy] = Ke[Cy] = Ke[ky] = Ke[Ey] = Ke[Iy] = Ke[Ly] = Ke[Dy] = Ke[Fy] = Ke[xy] = Ke[jy] = Ke[_y] = Ke[Oy] = Ke[Hf] = Ke[Ay] = Ke[Ry] = Ke[My] = Ke[Ny] = Ke[Uy] = Ke[Gy] = Ke[Wy] = Ke[By] = true;
  Ke[Ty] = Ke[Vf] = Ke[Py] = false;
  function Oo(e, t, n, r, l, c) {
    var f, h = t & by;
    if (f !== void 0) return f;
    if (!Is(e)) return e;
    var p = Es(e);
    if (p) f = Gw(e);
    else {
      var v = Dn(e), g = v == Vf || v == Sy;
      if (xf(e)) return Sw(e, h);
      if (v == Hf || v == zf || g && !l) f = g ? {} : hy(e);
      else {
        if (!Ke[v]) return l ? e : {};
        f = fy(e, v, h);
      }
    }
    c || (c = new ci());
    var T = c.get(e);
    if (T) return T;
    c.set(e, f), yy(e) ? e.forEach(function(j) {
      f.add(Oo(j, t, n, j, e, c));
    }) : gy(e) && e.forEach(function(j, L) {
      f.set(L, Oo(j, t, n, L, e, c));
    });
    var M = Pw, R = p ? void 0 : M(e);
    return jg(R || e, function(j, L) {
      R && (L = j, j = e[L]), Vg(f, L, Oo(j, t, n, L, e, c));
    }), f;
  }
  var $y = 1, zy = 4;
  qf = function(e) {
    return Oo(e, $y | zy);
  };
  var Vy = "[object String]";
  function _a(e) {
    return typeof e == "string" || !Es(e) && pr(e) && dr(e) == Vy;
  }
  const Ct = (e) => _a(e) ? e : Bf(e) ? String(e) : JSON.stringify(e), mn = {
    unloaded: (...e) => `[loadModules] Module "${Ct(e[0])}" has not been loaded yet`,
    loading: (...e) => `[loadModules] Module "${Ct(e[0])}" is loading`,
    loaded: (...e) => `[loadModules] Module "${Ct(e[0])}" has been loaded`,
    error: (...e) => `[loadModules] Module "${Ct(e[0])}" failed to load.
Trackback: 
${Ct(e[1])}`,
    errorDetermined: (...e) => `[loadModules] Module "${Ct(e[0])}" failed to load, asserted by another instance, skip`,
    alreadyLoading: (...e) => `[loadModules] Module "${Ct(e[0])}" is already loading by another instance, skip`,
    alreadyLoaded: (...e) => `[loadModules] Module "${Ct(e[0])}" has been loaded by another instance, skip`,
    missingDependencies: (...e) => `[loadModules] Module "${Ct(e[0])}" is missing the following dependencies: ${Ct(e[1])}`,
    loadDependencies: (...e) => `[loadModules] Module "${Ct(e[0])}" is loading its dependencies (${e.slice(1).map((t) => Ct(t)).join(", ")})`,
    dependenciesReady: (...e) => `[loadModules] Module "${Ct(e[0])}" dependencies are ready`,
    dependenciesFailure: (...e) => `[loadModules] Module "${Ct(e[0])}" dependencies failed to load. 

Trackback: 
${Ct(e[1])}`
  }, Hy = {
    info: console.info,
    warn: console.warn,
    error: console.error,
    debug: console.debug
  };
  async function Yf(e, t, n = 1e4, r = {}, l = 0, c = 0, f = 0) {
    var _a3, _b2, _c2, _d2, _e2, _f2;
    const { logger: h = Hy, progressReporter: p, printLog: v = true } = r, g = e.find((L) => L.name === t);
    if (!g) throw new Error(`cannot exactly find module "${t}" from the library`);
    const T = e.findIndex((L) => L.name === g.name);
    if (e[T].status === "loaded") return v && h.info(mn.alreadyLoaded(g.name)), {
      completed: f,
      total: c
    };
    const M = g.dependencies || [], R = e.filter((L) => M.includes(L.name)), j = M.filter((L) => !e.find((he) => he.name === L));
    if (j.length > 0) {
      const L = mn.missingDependencies(g.name, j.join(", "));
      throw v && h.error(L), new Error(L);
    }
    if (e[T].status === "error") {
      const L = mn.errorDetermined(g.name);
      throw v && h.info(L), new Error(L);
    }
    if (e[T].status === "loading") return v && h.info(mn.alreadyLoading(g.name)), await qy(e, g.name, n, h), {
      completed: f,
      total: c
    };
    try {
      let L = c, he = f;
      if (l === 0) {
        const re = /* @__PURE__ */ new Set(), K = (ee) => {
          if (re.has(ee)) return;
          re.add(ee);
          const G = e.find((ue) => ue.name === ee);
          if (G && G.dependencies) for (const ue of G.dependencies) K(ue);
        };
        K(t), L = re.size, he = 0;
      }
      if (R.length > 0) {
        h.info(mn.loadDependencies(g.name, R.map((re) => re.name)));
        for (const re of R) {
          const K = await Yf(e, re.name, n, {
            logger: h,
            progressReporter: p,
            printLog: v
          }, l + 1, L, he);
          he = K.completed, L = K.total, (_a3 = p == null ? void 0 : p.onOverallProgress) == null ? void 0 : _a3.call(p, he, L);
        }
        v && h.info(mn.dependenciesReady(g.name));
      }
      e[T].status = "loading", (_b2 = p == null ? void 0 : p.onModuleStart) == null ? void 0 : _b2.call(p, g.displayName);
      try {
        return v && h.info(mn.loading(g.name)), await g.moduleInit(n), e[T].status = "loaded", he++, (_c2 = p == null ? void 0 : p.onModuleComplete) == null ? void 0 : _c2.call(p, g.displayName), (_d2 = p == null ? void 0 : p.onOverallProgress) == null ? void 0 : _d2.call(p, he, L), v && h.info(mn.loaded(g.name)), {
          completed: he,
          total: L
        };
      } catch (re) {
        e[T].status = "error";
        const K = mn.error(g.name, _a(re) ? re : Bf(re) ? re.message : JSON.stringify(re));
        throw h.error(K), (_e2 = p == null ? void 0 : p.onModuleError) == null ? void 0 : _e2.call(p, g.displayName, _a(re) ? new Error(re) : re), new Error(K);
      }
    } catch (L) {
      e[T].status = "error", console.log(L);
      const he = mn.error(g.name, L);
      throw h.error(he), (_f2 = p == null ? void 0 : p.onModuleError) == null ? void 0 : _f2.call(p, g.displayName, L), new Error(he);
    }
  }
  async function qy(e, t, n = 1e4, r) {
    const l = Date.now();
    return new Promise((c, f) => {
      const h = setInterval(() => {
        const p = e.find((v) => v.name === t);
        if (p && p.status === "loaded") clearInterval(h), c();
        else if (Date.now() - l > n) {
          clearInterval(h);
          const v = new Error(`Load module ${t} timeout`);
          r == null ? void 0 : r.error(v.message), f(v);
        }
      }, 100);
    });
  }
  let Yy, Ky, mc, Jy, Xy, Zy, Kf;
  Yy = "modulepreload";
  Ky = function(e, t) {
    return new URL(e, t).href;
  };
  mc = {};
  Hs = function(t, n, r) {
    let l = Promise.resolve();
    if (n && n.length > 0) {
      let v = function(g) {
        return Promise.all(g.map((T) => Promise.resolve(T).then((M) => ({
          status: "fulfilled",
          value: M
        }), (M) => ({
          status: "rejected",
          reason: M
        }))));
      };
      const f = document.getElementsByTagName("link"), h = document.querySelector("meta[property=csp-nonce]"), p = (h == null ? void 0 : h.nonce) || (h == null ? void 0 : h.getAttribute("nonce"));
      l = v(n.map((g) => {
        if (g = Ky(g, r), g in mc) return;
        mc[g] = true;
        const T = g.endsWith(".css"), M = T ? '[rel="stylesheet"]' : "";
        if (r) for (let j = f.length - 1; j >= 0; j--) {
          const L = f[j];
          if (L.href === g && (!T || L.rel === "stylesheet")) return;
        }
        else if (document.querySelector(`link[href="${g}"]${M}`)) return;
        const R = document.createElement("link");
        if (R.rel = T ? "stylesheet" : Yy, T || (R.as = "script"), R.crossOrigin = "", R.href = g, p && R.setAttribute("nonce", p), document.head.appendChild(R), T) return new Promise((j, L) => {
          R.addEventListener("load", j), R.addEventListener("error", () => L(new Error(`Unable to preload CSS for ${g}`)));
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
  Jy = JSON.parse(`[{"id":"tauri","name":"Tauri","description":"A framework for building tiny, fast binaries for all major desktop and mobile platforms.","url":"https://github.com/tauri-apps/tauri","homepage":"https://v2.tauri.app/","licenseType":"MIT, Apache-2.0","license":"Code: (c) 2015 - Present - The Tauri Programme within The Commons Conservancy.\\n\\nMIT or MIT/Apache 2.0 where applicable."},{"id":"uuid","name":"uuid","description":"Generate a universally unique identifier (UUID) in JavaScript.","url":"https://github.com/uuidjs/uuid","licenseType":"MIT","license":"The MIT License (MIT)\\n\\n\\t\\tCopyright (c) 2010-2020 Robert Kieffer and other contributors\\n\\n\\t\\tPermission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the \\"Software\\"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:\\n\\n\\t\\tThe above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.\\n\\t\\t\\n\\t\\tTHE SOFTWARE IS PROVIDED \\"AS IS\\", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE."},{"id":"vue","name":"Vue.js","description":"An approachable, performant and versatile framework for building web user interfaces.","url":"https://github.com/vuejs/core","homepage":"https://vuejs.org","licenseType":"MIT","license":"\\n        The MIT License (MIT)\\n\\n\\t\\tCopyright (c) 2018-present, Yuxi (Evan) You and Vue contributors\\n\\n\\t\\tPermission is hereby granted, free of charge, to any person obtaining a copy\\n\\t\\tof this software and associated documentation files (the \\"Software\\"), to deal\\n\\t\\tin the Software without restriction, including without limitation the rights\\n\\t\\tto use, copy, modify, merge, publish, distribute, sublicense, and/or sell\\n\\t\\tcopies of the Software, and to permit persons to whom the Software is\\n\\t\\tfurnished to do so, subject to the following conditions:\\n\\n\\t\\tThe above copyright notice and this permission notice shall be included in\\n\\t\\tall copies or substantial portions of the Software.\\n\\n\\t\\tTHE SOFTWARE IS PROVIDED \\"AS IS\\", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR\\n\\t\\tIMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,\\n\\t\\tFITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE\\n\\t\\tAUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER\\n\\t\\tLIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,\\n\\t\\tOUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN\\n\\t\\tTHE SOFTWARE."},{"id":"vue-router","name":"Vue Router","description":"Expressive, configurable and convenient routing for Vue.js.","url":"https://github.com/vuejs/router","homepage":"https://router.vuejs.org/","licenseType":"MIT","license":"\\n        The MIT License (MIT)\\n\\n        Copyright (c) 2019-present Eduardo San Martin Morote\\n\\n        Permission is hereby granted, free of charge, to any person obtaining a copy\\n        of this software and associated documentation files (the \\"Software\\"), to deal\\n        in the Software without restriction, including without limitation the rights\\n        to use, copy, modify, merge, publish, distribute, sublicense, and/or sell\\n        copies of the Software, and to permit persons to whom the Software is\\n        furnished to do so, subject to the following conditions:\\n\\n        The above copyright notice and this permission notice shall be included in all\\n        copies or substantial portions of the Software.\\n\\n        THE SOFTWARE IS PROVIDED \\"AS IS\\", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR\\n        IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,\\n        FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE\\n        AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER\\n        LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,\\n        OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE\\n        SOFTWARE."},{"id":"naive-ui","name":"Naive UI","description":"A Vue 3 based UI Components Library","url":"https://github.com/tusen-ai/naive-ui","homepage":"https://www.naiveui.com","licenseType":"MIT","license":"\\n        MIT License\\n\\n        Copyright (c) 2021 TuSimple\\n\\n        Permission is hereby granted, free of charge, to any person obtaining a copy\\n        of this software and associated documentation files (the \\"Software\\"), to deal\\n        in the Software without restriction, including without limitation the rights\\n        to use, copy, modify, merge, publish, distribute, sublicense, and/or sell\\n        copies of the Software, and to permit persons to whom the Software is\\n        furnished to do so, subject to the following conditions:\\n\\n        The above copyright notice and this permission notice shall be included in all\\n        copies or substantial portions of the Software.\\n\\n        THE SOFTWARE IS PROVIDED \\"AS IS\\", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR\\n        IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,\\n        FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE\\n        AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER\\n        LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,\\n        OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE\\n        SOFTWARE."},{"id":"uaparser-js","name":"UAParser.js","description":"The most comprehensive, compact, & up-to-date JavaScript library to detect user's Browser.","url":"https://github.com/faisalman/ua-parser-js","homepage":"https://uaparser.js.org/","licenseType":"AGPL-3.0","license":"\\n        GNU AFFERO GENERAL PUBLIC LICENSE\\n\\n        Version 3, 19 November 2007\\n\\nCopyright (C) 2007 Free Software Foundation, Inc. <https://fsf.org/>\\nEveryone is permitted to copy and distribute verbatim copies\\nof this license document, but changing it is not allowed.\\n\\n             Preamble\\n\\nThe GNU Affero General Public License is a free, copyleft license for\\nsoftware and other kinds of works, specifically designed to ensure\\ncooperation with the community in the case of network server software.\\n\\nThe licenses for most software and other practical works are designed\\nto take away your freedom to share and change the works.  By contrast,\\nour General Public Licenses are intended to guarantee your freedom to\\nshare and change all versions of a program--to make sure it remains free\\nsoftware for all its users.\\n\\nWhen we speak of free software, we are referring to freedom, not\\nprice.  Our General Public Licenses are designed to make sure that you\\nhave the freedom to distribute copies of free software (and charge for\\nthem if you wish), that you receive source code or can get it if you\\nwant it, that you can change the software or use pieces of it in new\\nfree programs, and that you know you can do these things.\\n\\nDevelopers that use our General Public Licenses protect your rights\\nwith two steps: (1) assert copyright on the software, and (2) offer\\nyou this License which gives you legal permission to copy, distribute\\nand/or modify the software.\\n\\nA secondary benefit of defending all users' freedom is that\\nimprovements made in alternate versions of the program, if they\\nreceive widespread use, become available for other developers to\\nincorporate.  Many developers of free software are heartened and\\nencouraged by the resulting cooperation.  However, in the case of\\nsoftware used on network servers, this result may fail to come about.\\nThe GNU General Public License permits making a modified version and\\nletting the public access it on a server without ever releasing its\\nsource code to the public.\\n\\nThe GNU Affero General Public License is designed specifically to\\nensure that, in such cases, the modified source code becomes available\\nto the community.  It requires the operator of a network server to\\nprovide the source code of the modified version running there to the\\nusers of that server.  Therefore, public use of a modified version, on\\na publicly accessible server, gives the public access to the source\\ncode of the modified version.\\n\\nAn older license, called the Affero General Public License and\\npublished by Affero, was designed to accomplish similar goals.  This is\\na different license, not a version of the Affero GPL, but Affero has\\nreleased a new version of the Affero GPL which permits relicensing under\\nthis license.\\n\\nThe precise terms and conditions for copying, distribution and\\nmodification follow.\\n\\n        TERMS AND CONDITIONS\\n\\n0. Definitions.\\n\\n\\"This License\\" refers to version 3 of the GNU Affero General Public License.\\n\\n\\"Copyright\\" also means copyright-like laws that apply to other kinds of\\nworks, such as semiconductor masks.\\n\\n\\"The Program\\" refers to any copyrightable work licensed under this\\nLicense.  Each licensee is addressed as \\"you\\".  \\"Licensees\\" and\\n\\"recipients\\" may be individuals or organizations.\\n\\nTo \\"modify\\" a work means to copy from or adapt all or part of the work\\nin a fashion requiring copyright permission, other than the making of an\\nexact copy.  The resulting work is called a \\"modified version\\" of the\\nearlier work or a work \\"based on\\" the earlier work.\\n\\nA \\"covered work\\" means either the unmodified Program or a work based\\non the Program.\\n\\nTo \\"propagate\\" a work means to do anything with it that, without\\npermission, would make you directly or secondarily liable for\\ninfringement under applicable copyright law, except executing it on a\\ncomputer or modifying a private copy.  Propagation includes copying,\\ndistribution (with or without modification), making available to the\\npublic, and in some countries other activities as well.\\n\\nTo \\"convey\\" a work means any kind of propagation that enables other\\nparties to make or receive copies.  Mere interaction with a user through\\na computer network, with no transfer of a copy, is not conveying.\\n\\nAn interactive user interface displays \\"Appropriate Legal Notices\\"\\nto the extent that it includes a convenient and prominently visible\\nfeature that (1) displays an appropriate copyright notice, and (2)\\ntells the user that there is no warranty for the work (except to the\\nextent that warranties are provided), that licensees may convey the\\nwork under this License, and how to view a copy of this License.  If\\nthe interface presents a list of user commands or options, such as a\\nmenu, a prominent item in the list meets this criterion.\\n\\n1. Source Code.\\n\\nThe \\"source code\\" for a work means the preferred form of the work\\nfor making modifications to it.  \\"Object code\\" means any non-source\\nform of a work.\\n\\nA \\"Standard Interface\\" means an interface that either is an official\\nstandard defined by a recognized standards body, or, in the case of\\ninterfaces specified for a particular programming language, one that\\nis widely used among developers working in that language.\\n\\nThe \\"System Libraries\\" of an executable work include anything, other\\nthan the work as a whole, that (a) is included in the normal form of\\npackaging a Major Component, but which is not part of that Major\\nComponent, and (b) serves only to enable use of the work with that\\nMajor Component, or to implement a Standard Interface for which an\\nimplementation is available to the public in source code form.  A\\n\\"Major Component\\", in this context, means a major essential component\\n(kernel, window system, and so on) of the specific operating system\\n(if any) on which the executable work runs, or a compiler used to\\nproduce the work, or an object code interpreter used to run it.\\n\\nThe \\"Corresponding Source\\" for a work in object code form means all\\nthe source code needed to generate, install, and (for an executable\\nwork) run the object code and to modify the work, including scripts to\\ncontrol those activities.  However, it does not include the work's\\nSystem Libraries, or general-purpose tools or generally available free\\nprograms which are used unmodified in performing those activities but\\nwhich are not part of the work.  For example, Corresponding Source\\nincludes interface definition files associated with source files for\\nthe work, and the source code for shared libraries and dynamically\\nlinked subprograms that the work is specifically designed to require,\\nsuch as by intimate data communication or control flow between those\\nsubprograms and other parts of the work.\\n\\nThe Corresponding Source need not include anything that users\\ncan regenerate automatically from other parts of the Corresponding\\nSource.\\n\\nThe Corresponding Source for a work in source code form is that\\nsame work.\\n\\n2. Basic Permissions.\\n\\nAll rights granted under this License are granted for the term of\\ncopyright on the Program, and are irrevocable provided the stated\\nconditions are met.  This License explicitly affirms your unlimited\\npermission to run the unmodified Program.  The output from running a\\ncovered work is covered by this License only if the output, given its\\ncontent, constitutes a covered work.  This License acknowledges your\\nrights of fair use or other equivalent, as provided by copyright law.\\n\\nYou may make, run and propagate covered works that you do not\\nconvey, without conditions so long as your license otherwise remains\\nin force.  You may convey covered works to others for the sole purpose\\nof having them make modifications exclusively for you, or provide you\\nwith facilities for running those works, provided that you comply with\\nthe terms of this License in conveying all material for which you do\\nnot control copyright.  Those thus making or running the covered works\\nfor you must do so exclusively on your behalf, under your direction\\nand control, on terms that prohibit them from making any copies of\\nyour copyrighted material outside their relationship with you.\\n\\nConveying under any other circumstances is permitted solely under\\nthe conditions stated below.  Sublicensing is not allowed; section 10\\nmakes it unnecessary.\\n\\n3. Protecting Users' Legal Rights From Anti-Circumvention Law.\\n\\nNo covered work shall be deemed part of an effective technological\\nmeasure under any applicable law fulfilling obligations under article\\n11 of the WIPO copyright treaty adopted on 20 December 1996, or\\nsimilar laws prohibiting or restricting circumvention of such\\nmeasures.\\n\\nWhen you convey a covered work, you waive any legal power to forbid\\ncircumvention of technological measures to the extent such circumvention\\nis effected by exercising rights under this License with respect to\\nthe covered work, and you disclaim any intention to limit operation or\\nmodification of the work as a means of enforcing, against the work's\\nusers, your or third parties' legal rights to forbid circumvention of\\ntechnological measures.\\n\\n4. Conveying Verbatim Copies.\\n\\nYou may convey verbatim copies of the Program's source code as you\\nreceive it, in any medium, provided that you conspicuously and\\nappropriately publish on each copy an appropriate copyright notice;\\nkeep intact all notices stating that this License and any\\nnon-permissive terms added in accord with section 7 apply to the code;\\nkeep intact all notices of the absence of any warranty; and give all\\nrecipients a copy of this License along with the Program.\\n\\nYou may charge any price or no price for each copy that you convey,\\nand you may offer support or warranty protection for a fee.\\n\\n5. Conveying Modified Source Versions.\\n\\nYou may convey a work based on the Program, or the modifications to\\nproduce it from the Program, in the form of source code under the\\nterms of section 4, provided that you also meet all of these conditions:\\n\\na) The work must carry prominent notices stating that you modified\\nit, and giving a relevant date.\\n\\nb) The work must carry prominent notices stating that it is\\nreleased under this License and any conditions added under section\\n7.  This requirement modifies the requirement in section 4 to\\n\\"keep intact all notices\\".\\n\\nc) You must license the entire work, as a whole, under this\\nLicense to anyone who comes into possession of a copy.  This\\nLicense will therefore apply, along with any applicable section 7\\nadditional terms, to the whole of the work, and all its parts,\\nregardless of how they are packaged.  This License gives no\\npermission to license the work in any other way, but it does not\\ninvalidate such permission if you have separately received it.\\n\\nd) If the work has interactive user interfaces, each must display\\nAppropriate Legal Notices; however, if the Program has interactive\\ninterfaces that do not display Appropriate Legal Notices, your\\nwork need not make them do so.\\n\\nA compilation of a covered work with other separate and independent\\nworks, which are not by their nature extensions of the covered work,\\nand which are not combined with it such as to form a larger program,\\nin or on a volume of a storage or distribution medium, is called an\\n\\"aggregate\\" if the compilation and its resulting copyright are not\\nused to limit the access or legal rights of the compilation's users\\nbeyond what the individual works permit.  Inclusion of a covered work\\nin an aggregate does not cause this License to apply to the other\\nparts of the aggregate.\\n\\n6. Conveying Non-Source Forms.\\n\\nYou may convey a covered work in object code form under the terms\\nof sections 4 and 5, provided that you also convey the\\nmachine-readable Corresponding Source under the terms of this License,\\nin one of these ways:\\n\\na) Convey the object code in, or embodied in, a physical product\\n(including a physical distribution medium), accompanied by the\\nCorresponding Source fixed on a durable physical medium\\ncustomarily used for software interchange.\\n\\nb) Convey the object code in, or embodied in, a physical product\\n(including a physical distribution medium), accompanied by a\\nwritten offer, valid for at least three years and valid for as\\nlong as you offer spare parts or customer support for that product\\nmodel, to give anyone who possesses the object code either (1) a\\ncopy of the Corresponding Source for all the software in the\\nproduct that is covered by this License, on a durable physical\\nmedium customarily used for software interchange, for a price no\\nmore than your reasonable cost of physically performing this\\nconveying of source, or (2) access to copy the\\nCorresponding Source from a network server at no charge.\\n\\nc) Convey individual copies of the object code with a copy of the\\nwritten offer to provide the Corresponding Source.  This\\nalternative is allowed only occasionally and noncommercially, and\\nonly if you received the object code with such an offer, in accord\\nwith subsection 6b.\\n\\nd) Convey the object code by offering access from a designated\\nplace (gratis or for a charge), and offer equivalent access to the\\nCorresponding Source in the same way through the same place at no\\nfurther charge.  You need not require recipients to copy the\\nCorresponding Source along with the object code.  If the place to\\ncopy the object code is a network server, the Corresponding Source\\nmay be on a different server (operated by you or a third party)\\nthat supports equivalent copying facilities, provided you maintain\\nclear directions next to the object code saying where to find the\\nCorresponding Source.  Regardless of what server hosts the\\nCorresponding Source, you remain obligated to ensure that it is\\navailable for as long as needed to satisfy these requirements.\\n\\ne) Convey the object code using peer-to-peer transmission, provided\\nyou inform other peers where the object code and Corresponding\\nSource of the work are being offered to the general public at no\\ncharge under subsection 6d.\\n\\nA separable portion of the object code, whose source code is excluded\\nfrom the Corresponding Source as a System Library, need not be\\nincluded in conveying the object code work.\\n\\nA \\"User Product\\" is either (1) a \\"consumer product\\", which means any\\ntangible personal property which is normally used for personal, family,\\nor household purposes, or (2) anything designed or sold for incorporation\\ninto a dwelling.  In determining whether a product is a consumer product,\\ndoubtful cases shall be resolved in favor of coverage.  For a particular\\nproduct received by a particular user, \\"normally used\\" refers to a\\ntypical or common use of that class of product, regardless of the status\\nof the particular user or of the way in which the particular user\\nactually uses, or expects or is expected to use, the product.  A product\\nis a consumer product regardless of whether the product has substantial\\ncommercial, industrial or non-consumer uses, unless such uses represent\\nthe only significant mode of use of the product.\\n\\n\\"Installation Information\\" for a User Product means any methods,\\nprocedures, authorization keys, or other information required to install\\nand execute modified versions of a covered work in that User Product from\\na modified version of its Corresponding Source.  The information must\\nsuffice to ensure that the continued functioning of the modified object\\ncode is in no case prevented or interfered with solely because\\nmodification has been made.\\n\\nIf you convey an object code work under this section in, or with, or\\nspecifically for use in, a User Product, and the conveying occurs as\\npart of a transaction in which the right of possession and use of the\\nUser Product is transferred to the recipient in perpetuity or for a\\nfixed term (regardless of how the transaction is characterized), the\\nCorresponding Source conveyed under this section must be accompanied\\nby the Installation Information.  But this requirement does not apply\\nif neither you nor any third party retains the ability to install\\nmodified object code on the User Product (for example, the work has\\nbeen installed in ROM).\\n\\nThe requirement to provide Installation Information does not include a\\nrequirement to continue to provide support service, warranty, or updates\\nfor a work that has been modified or installed by the recipient, or for\\nthe User Product in which it has been modified or installed.  Access to a\\nnetwork may be denied when the modification itself materially and\\nadversely affects the operation of the network or violates the rules and\\nprotocols for communication across the network.\\n\\nCorresponding Source conveyed, and Installation Information provided,\\nin accord with this section must be in a format that is publicly\\ndocumented (and with an implementation available to the public in\\nsource code form), and must require no special password or key for\\nunpacking, reading or copying.\\n\\n7. Additional Terms.\\n\\n\\"Additional permissions\\" are terms that supplement the terms of this\\nLicense by making exceptions from one or more of its conditions.\\nAdditional permissions that are applicable to the entire Program shall\\nbe treated as though they were included in this License, to the extent\\nthat they are valid under applicable law.  If additional permissions\\napply only to part of the Program, that part may be used separately\\nunder those permissions, but the entire Program remains governed by\\nthis License without regard to the additional permissions.\\n\\nWhen you convey a copy of a covered work, you may at your option\\nremove any additional permissions from that copy, or from any part of\\nit.  (Additional permissions may be written to require their own\\nremoval in certain cases when you modify the work.)  You may place\\nadditional permissions on material, added by you to a covered work,\\nfor which you have or can give appropriate copyright permission.\\n\\nNotwithstanding any other provision of this License, for material you\\nadd to a covered work, you may (if authorized by the copyright holders of\\nthat material) supplement the terms of this License with terms:\\n\\na) Disclaiming warranty or limiting liability differently from the\\nterms of sections 15 and 16 of this License; or\\n\\nb) Requiring preservation of specified reasonable legal notices or\\nauthor attributions in that material or in the Appropriate Legal\\nNotices displayed by works containing it; or\\n\\nc) Prohibiting misrepresentation of the origin of that material, or\\nrequiring that modified versions of such material be marked in\\nreasonable ways as different from the original version; or\\n\\nd) Limiting the use for publicity purposes of names of licensors or\\nauthors of the material; or\\n\\ne) Declining to grant rights under trademark law for use of some\\ntrade names, trademarks, or service marks; or\\n\\nf) Requiring indemnification of licensors and authors of that\\nmaterial by anyone who conveys the material (or modified versions of\\nit) with contractual assumptions of liability to the recipient, for\\nany liability that these contractual assumptions directly impose on\\nthose licensors and authors.\\n\\nAll other non-permissive additional terms are considered \\"further\\nrestrictions\\" within the meaning of section 10.  If the Program as you\\nreceived it, or any part of it, contains a notice stating that it is\\ngoverned by this License along with a term that is a further\\nrestriction, you may remove that term.  If a license document contains\\na further restriction but permits relicensing or conveying under this\\nLicense, you may add to a covered work material governed by the terms\\nof that license document, provided that the further restriction does\\nnot survive such relicensing or conveying.\\n\\nIf you add terms to a covered work in accord with this section, you\\nmust place, in the relevant source files, a statement of the\\nadditional terms that apply to those files, or a notice indicating\\nwhere to find the applicable terms.\\n\\nAdditional terms, permissive or non-permissive, may be stated in the\\nform of a separately written license, or stated as exceptions;\\nthe above requirements apply either way.\\n\\n8. Termination.\\n\\nYou may not propagate or modify a covered work except as expressly\\nprovided under this License.  Any attempt otherwise to propagate or\\nmodify it is void, and will automatically terminate your rights under\\nthis License (including any patent licenses granted under the third\\nparagraph of section 11).\\n\\nHowever, if you cease all violation of this License, then your\\nlicense from a particular copyright holder is reinstated (a)\\nprovisionally, unless and until the copyright holder explicitly and\\nfinally terminates your license, and (b) permanently, if the copyright\\nholder fails to notify you of the violation by some reasonable means\\nprior to 60 days after the cessation.\\n\\nMoreover, your license from a particular copyright holder is\\nreinstated permanently if the copyright holder notifies you of the\\nviolation by some reasonable means, this is the first time you have\\nreceived notice of violation of this License (for any work) from that\\ncopyright holder, and you cure the violation prior to 30 days after\\nyour receipt of the notice.\\n\\nTermination of your rights under this section does not terminate the\\nlicenses of parties who have received copies or rights from you under\\nthis License.  If your rights have been terminated and not permanently\\nreinstated, you do not qualify to receive new licenses for the same\\nmaterial under section 10.\\n\\n9. Acceptance Not Required for Having Copies.\\n\\nYou are not required to accept this License in order to receive or\\nrun a copy of the Program.  Ancillary propagation of a covered work\\noccurring solely as a consequence of using peer-to-peer transmission\\nto receive a copy likewise does not require acceptance.  However,\\nnothing other than this License grants you permission to propagate or\\nmodify any covered work.  These actions infringe copyright if you do\\nnot accept this License.  Therefore, by modifying or propagating a\\ncovered work, you indicate your acceptance of this License to do so.\\n\\n10. Automatic Licensing of Downstream Recipients.\\n\\nEach time you convey a covered work, the recipient automatically\\nreceives a license from the original licensors, to run, modify and\\npropagate that work, subject to this License.  You are not responsible\\nfor enforcing compliance by third parties with this License.\\n\\nAn \\"entity transaction\\" is a transaction transferring control of an\\norganization, or substantially all assets of one, or subdividing an\\norganization, or merging organizations.  If propagation of a covered\\nwork results from an entity transaction, each party to that\\ntransaction who receives a copy of the work also receives whatever\\nlicenses to the work the party's predecessor in interest had or could\\ngive under the previous paragraph, plus a right to possession of the\\nCorresponding Source of the work from the predecessor in interest, if\\nthe predecessor has it or can get it with reasonable efforts.\\n\\nYou may not impose any further restrictions on the exercise of the\\nrights granted or affirmed under this License.  For example, you may\\nnot impose a license fee, royalty, or other charge for exercise of\\nrights granted under this License, and you may not initiate litigation\\n(including a cross-claim or counterclaim in a lawsuit) alleging that\\nany patent claim is infringed by making, using, selling, offering for\\nsale, or importing the Program or any portion of it.\\n\\n11. Patents.\\n\\nA \\"contributor\\" is a copyright holder who authorizes use under this\\nLicense of the Program or a work on which the Program is based.  The\\nwork thus licensed is called the contributor's \\"contributor version\\".\\n\\nA contributor's \\"essential patent claims\\" are all patent claims\\nowned or controlled by the contributor, whether already acquired or\\nhereafter acquired, that would be infringed by some manner, permitted\\nby this License, of making, using, or selling its contributor version,\\nbut do not include claims that would be infringed only as a\\nconsequence of further modification of the contributor version.  For\\npurposes of this definition, \\"control\\" includes the right to grant\\npatent sublicenses in a manner consistent with the requirements of\\nthis License.\\n\\nEach contributor grants you a non-exclusive, worldwide, royalty-free\\npatent license under the contributor's essential patent claims, to\\nmake, use, sell, offer for sale, import and otherwise run, modify and\\npropagate the contents of its contributor version.\\n\\nIn the following three paragraphs, a \\"patent license\\" is any express\\nagreement or commitment, however denominated, not to enforce a patent\\n(such as an express permission to practice a patent or covenant not to\\nsue for patent infringement).  To \\"grant\\" such a patent license to a\\nparty means to make such an agreement or commitment not to enforce a\\npatent against the party.\\n\\nIf you convey a covered work, knowingly relying on a patent license,\\nand the Corresponding Source of the work is not available for anyone\\nto copy, free of charge and under the terms of this License, through a\\npublicly available network server or other readily accessible means,\\nthen you must either (1) cause the Corresponding Source to be so\\navailable, or (2) arrange to deprive yourself of the benefit of the\\npatent license for this particular work, or (3) arrange, in a manner\\nconsistent with the requirements of this License, to extend the patent\\nlicense to downstream recipients.  \\"Knowingly relying\\" means you have\\nactual knowledge that, but for the patent license, your conveying the\\ncovered work in a country, or your recipient's use of the covered work\\nin a country, would infringe one or more identifiable patents in that\\ncountry that you have reason to believe are valid.\\n\\nIf, pursuant to or in connection with a single transaction or\\narrangement, you convey, or propagate by procuring conveyance of, a\\ncovered work, and grant a patent license to some of the parties\\nreceiving the covered work authorizing them to use, propagate, modify\\nor convey a specific copy of the covered work, then the patent license\\nyou grant is automatically extended to all recipients of the covered\\nwork and works based on it.\\n\\nA patent license is \\"discriminatory\\" if it does not include within\\nthe scope of its coverage, prohibits the exercise of, or is\\nconditioned on the non-exercise of one or more of the rights that are\\nspecifically granted under this License.  You may not convey a covered\\nwork if you are a party to an arrangement with a third party that is\\nin the business of distributing software, under which you make payment\\nto the third party based on the extent of your activity of conveying\\nthe work, and under which the third party grants, to any of the\\nparties who would receive the covered work from you, a discriminatory\\npatent license (a) in connection with copies of the covered work\\nconveyed by you (or copies made from those copies), or (b) primarily\\nfor and in connection with specific products or compilations that\\ncontain the covered work, unless you entered into that arrangement,\\nor that patent license was granted, prior to 28 March 2007.\\n\\nNothing in this License shall be construed as excluding or limiting\\nany implied license or other defenses to infringement that may\\notherwise be available to you under applicable patent law.\\n\\n12. No Surrender of Others' Freedom.\\n\\nIf conditions are imposed on you (whether by court order, agreement or\\notherwise) that contradict the conditions of this License, they do not\\nexcuse you from the conditions of this License.  If you cannot convey a\\ncovered work so as to satisfy simultaneously your obligations under this\\nLicense and any other pertinent obligations, then as a consequence you may\\nnot convey it at all.  For example, if you agree to terms that obligate you\\nto collect a royalty for further conveying from those to whom you convey\\nthe Program, the only way you could satisfy both those terms and this\\nLicense would be to refrain entirely from conveying the Program.\\n\\n13. Remote Network Interaction; Use with the GNU General Public License.\\n\\nNotwithstanding any other provision of this License, if you modify the\\nProgram, your modified version must prominently offer all users\\ninteracting with it remotely through a computer network (if your version\\nsupports such interaction) an opportunity to receive the Corresponding\\nSource of your version by providing access to the Corresponding Source\\nfrom a network server at no charge, through some standard or customary\\nmeans of facilitating copying of software.  This Corresponding Source\\nshall include the Corresponding Source for any work covered by version 3\\nof the GNU General Public License that is incorporated pursuant to the\\nfollowing paragraph.\\n\\nNotwithstanding any other provision of this License, you have\\npermission to link or combine any covered work with a work licensed\\nunder version 3 of the GNU General Public License into a single\\ncombined work, and to convey the resulting work.  The terms of this\\nLicense will continue to apply to the part which is the covered work,\\nbut the work with which it is combined will remain governed by version\\n3 of the GNU General Public License.\\n\\n14. Revised Versions of this License.\\n\\nThe Free Software Foundation may publish revised and/or new versions of\\nthe GNU Affero General Public License from time to time.  Such new versions\\nwill be similar in spirit to the present version, but may differ in detail to\\naddress new problems or concerns.\\n\\nEach version is given a distinguishing version number.  If the\\nProgram specifies that a certain numbered version of the GNU Affero General\\nPublic License \\"or any later version\\" applies to it, you have the\\noption of following the terms and conditions either of that numbered\\nversion or of any later version published by the Free Software\\nFoundation.  If the Program does not specify a version number of the\\nGNU Affero General Public License, you may choose any version ever published\\nby the Free Software Foundation.\\n\\nIf the Program specifies that a proxy can decide which future\\nversions of the GNU Affero General Public License can be used, that proxy's\\npublic statement of acceptance of a version permanently authorizes you\\nto choose that version for the Program.\\n\\nLater license versions may give you additional or different\\npermissions.  However, no additional obligations are imposed on any\\nauthor or copyright holder as a result of your choosing to follow a\\nlater version.\\n\\n15. Disclaimer of Warranty.\\n\\nTHERE IS NO WARRANTY FOR THE PROGRAM, TO THE EXTENT PERMITTED BY\\nAPPLICABLE LAW.  EXCEPT WHEN OTHERWISE STATED IN WRITING THE COPYRIGHT\\nHOLDERS AND/OR OTHER PARTIES PROVIDE THE PROGRAM \\"AS IS\\" WITHOUT WARRANTY\\nOF ANY KIND, EITHER EXPRESSED OR IMPLIED, INCLUDING, BUT NOT LIMITED TO,\\nTHE IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR\\nPURPOSE.  THE ENTIRE RISK AS TO THE QUALITY AND PERFORMANCE OF THE PROGRAM\\nIS WITH YOU.  SHOULD THE PROGRAM PROVE DEFECTIVE, YOU ASSUME THE COST OF\\nALL NECESSARY SERVICING, REPAIR OR CORRECTION.\\n\\n16. Limitation of Liability.\\n\\nIN NO EVENT UNLESS REQUIRED BY APPLICABLE LAW OR AGREED TO IN WRITING\\nWILL ANY COPYRIGHT HOLDER, OR ANY OTHER PARTY WHO MODIFIES AND/OR CONVEYS\\nTHE PROGRAM AS PERMITTED ABOVE, BE LIABLE TO YOU FOR DAMAGES, INCLUDING ANY\\nGENERAL, SPECIAL, INCIDENTAL OR CONSEQUENTIAL DAMAGES ARISING OUT OF THE\\nUSE OR INABILITY TO USE THE PROGRAM (INCLUDING BUT NOT LIMITED TO LOSS OF\\nDATA OR DATA BEING RENDERED INACCURATE OR LOSSES SUSTAINED BY YOU OR THIRD\\nPARTIES OR A FAILURE OF THE PROGRAM TO OPERATE WITH ANY OTHER PROGRAMS),\\nEVEN IF SUCH HOLDER OR OTHER PARTY HAS BEEN ADVISED OF THE POSSIBILITY OF\\nSUCH DAMAGES.\\n\\n17. Interpretation of Sections 15 and 16.\\n\\nIf the disclaimer of warranty and limitation of liability provided\\nabove cannot be given local legal effect according to their terms,\\nreviewing courts shall apply local law that most closely approximates\\nan absolute waiver of all civil liability in connection with the\\nProgram, unless a warranty or assumption of liability accompanies a\\ncopy of the Program in return for a fee.\\n\\n      END OF TERMS AND CONDITIONS\\n\\nHow to Apply These Terms to Your New Programs\\n\\nIf you develop a new program, and you want it to be of the greatest\\npossible use to the public, the best way to achieve this is to make it\\nfree software which everyone can redistribute and change under these terms.\\n\\nTo do so, attach the following notices to the program.  It is safest\\nto attach them to the start of each source file to most effectively\\nstate the exclusion of warranty; and each file should have at least\\nthe \\"copyright\\" line and a pointer to where the full notice is found.\\n\\n<one line to give the program's name and a brief idea of what it does.>\\nCopyright (C) <year>  <name of author>\\n\\nThis program is free software: you can redistribute it and/or modify\\nit under the terms of the GNU Affero General Public License as published by\\nthe Free Software Foundation, either version 3 of the License, or\\n(at your option) any later version.\\n\\nThis program is distributed in the hope that it will be useful,\\nbut WITHOUT ANY WARRANTY; without even the implied warranty of\\nMERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the\\nGNU Affero General Public License for more details.\\n\\nYou should have received a copy of the GNU Affero General Public License\\nalong with this program.  If not, see <https://www.gnu.org/licenses/>.\\n\\nAlso add information on how to contact you by electronic and paper mail.\\n\\nIf your software can interact with users remotely through a computer\\nnetwork, you should also make sure that it provides a way for users to\\nget its source.  For example, if your program is a web application, its\\ninterface could display a \\"Source\\" link that leads users to an archive\\nof the code.  There are many ways you could offer source, and different\\nsolutions will be better for different programs; see section 13 for the\\nspecific requirements.\\n\\nYou should also get your employer (if you work as a programmer) or school,\\nif any, to sign a \\"copyright disclaimer\\" for the program, if necessary.\\nFor more information on this, and how to apply and follow the GNU AGPL, see\\n<https://www.gnu.org/licenses/>."},{"id":"gcoord","name":"gcoord","description":"A coordinates converter","url":"https://github.com/hujiulong/gcoord","licenseType":"MIT","license":"\\n\\t\\tMIT License\\n\\n\\t\\tCopyright (c) 2018-present, Jiulong Hu\\n\\n\\t\\tPermission is hereby granted, free of charge, to any person obtaining a copy\\n\\t\\tof this software and associated documentation files (the \\"Software\\"), to deal\\n\\t\\tin the Software without restriction, including without limitation the rights\\n\\t\\tto use, copy, modify, merge, publish, distribute, sublicense, and/or sell\\n\\t\\tcopies of the Software, and to permit persons to whom the Software is\\n\\t\\tfurnished to do so, subject to the following conditions:\\n\\n\\t\\tThe above copyright notice and this permission notice shall be included in all\\n\\t\\tcopies or substantial portions of the Software.\\n\\n\\t\\tTHE SOFTWARE IS PROVIDED \\"AS IS\\", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR\\n\\t\\tIMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,\\n\\t\\tFITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE\\n\\t\\tAUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER\\n\\t\\tLIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,\\n\\t\\tOUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE\\n\\t\\tSOFTWARE."},{"id":"localforage","name":"localForage","description":"A fast and simple storage library for JavaScript.","url":"https://github.com/localForage/localForage","homepage":"https://localforage.github.io/localForage/","licenseType":"Apache-2.0","license":"\\n        Apache License\\n\\n        Version 2.0, January 2004\\n\\n     http://www.apache.org/licenses/\\n\\nTERMS AND CONDITIONS FOR USE, REPRODUCTION, AND DISTRIBUTION\\n\\n1. Definitions.\\n\\n\\"License\\" shall mean the terms and conditions for use, reproduction,\\nand distribution as defined by Sections 1 through 9 of this document.\\n\\n\\"Licensor\\" shall mean the copyright owner or entity authorized by\\nthe copyright owner that is granting the License.\\n\\n\\"Legal Entity\\" shall mean the union of the acting entity and all\\nother entities that control, are controlled by, or are under common\\ncontrol with that entity. For the purposes of this definition,\\n\\"control\\" means (i) the power, direct or indirect, to cause the\\ndirection or management of such entity, whether by contract or\\notherwise, or (ii) ownership of fifty percent (50%) or more of the\\noutstanding shares, or (iii) beneficial ownership of such entity.\\n\\n\\"You\\" (or \\"Your\\") shall mean an individual or Legal Entity\\nexercising permissions granted by this License.\\n\\n\\"Source\\" form shall mean the preferred form for making modifications,\\nincluding but not limited to software source code, documentation\\nsource, and configuration files.\\n\\n\\"Object\\" form shall mean any form resulting from mechanical\\ntransformation or translation of a Source form, including but\\nnot limited to compiled object code, generated documentation,\\nand conversions to other media types.\\n\\n\\"Work\\" shall mean the work of authorship, whether in Source or\\nObject form, made available under the License, as indicated by a\\ncopyright notice that is included in or attached to the work\\n(an example is provided in the Appendix below).\\n\\n\\"Derivative Works\\" shall mean any work, whether in Source or Object\\nform, that is based on (or derived from) the Work and for which the\\neditorial revisions, annotations, elaborations, or other modifications\\nrepresent, as a whole, an original work of authorship. For the purposes\\nof this License, Derivative Works shall not include works that remain\\nseparable from, or merely link (or bind by name) to the interfaces of,\\nthe Work and Derivative Works thereof.\\n\\n\\"Contribution\\" shall mean any work of authorship, including\\nthe original version of the Work and any modifications or additions\\nto that Work or Derivative Works thereof, that is intentionally\\nsubmitted to Licensor for inclusion in the Work by the copyright owner\\nor by an individual or Legal Entity authorized to submit on behalf of\\nthe copyright owner. For the purposes of this definition, \\"submitted\\"\\nmeans any form of electronic, verbal, or written communication sent\\nto the Licensor or its representatives, including but not limited to\\ncommunication on electronic mailing lists, source code control systems,\\nand issue tracking systems that are managed by, or on behalf of, the\\nLicensor for the purpose of discussing and improving the Work, but\\nexcluding communication that is conspicuously marked or otherwise\\ndesignated in writing by the copyright owner as \\"Not a Contribution.\\"\\n\\n\\"Contributor\\" shall mean Licensor and any individual or Legal Entity\\non behalf of whom a Contribution has been received by Licensor and\\nsubsequently incorporated within the Work.\\n\\n2. Grant of Copyright License. Subject to the terms and conditions of\\nthis License, each Contributor hereby grants to You a perpetual,\\nworldwide, non-exclusive, no-charge, royalty-free, irrevocable\\ncopyright license to reproduce, prepare Derivative Works of,\\npublicly display, publicly perform, sublicense, and distribute the\\nWork and such Derivative Works in Source or Object form.\\n\\n3. Grant of Patent License. Subject to the terms and conditions of\\nthis License, each Contributor hereby grants to You a perpetual,\\nworldwide, non-exclusive, no-charge, royalty-free, irrevocable\\n(except as stated in this section) patent license to make, have made,\\nuse, offer to sell, sell, import, and otherwise transfer the Work,\\nwhere such license applies only to those patent claims licensable\\nby such Contributor that are necessarily infringed by their\\nContribution(s) alone or by combination of their Contribution(s)\\nwith the Work to which such Contribution(s) was submitted. If You\\ninstitute patent litigation against any entity (including a\\ncross-claim or counterclaim in a lawsuit) alleging that the Work\\nor a Contribution incorporated within the Work constitutes direct\\nor contributory patent infringement, then any patent licenses\\ngranted to You under this License for that Work shall terminate\\nas of the date such litigation is filed.\\n\\n4. Redistribution. You may reproduce and distribute copies of the\\nWork or Derivative Works thereof in any medium, with or without\\nmodifications, and in Source or Object form, provided that You\\nmeet the following conditions:\\n\\n(a) You must give any other recipients of the Work or\\nDerivative Works a copy of this License; and\\n\\n(b) You must cause any modified files to carry prominent notices\\nstating that You changed the files; and\\n\\n(c) You must retain, in the Source form of any Derivative Works\\nthat You distribute, all copyright, patent, trademark, and\\nattribution notices from the Source form of the Work,\\nexcluding those notices that do not pertain to any part of\\nthe Derivative Works; and\\n\\n(d) If the Work includes a \\"NOTICE\\" text file as part of its\\ndistribution, then any Derivative Works that You distribute must\\ninclude a readable copy of the attribution notices contained\\nwithin such NOTICE file, excluding those notices that do not\\npertain to any part of the Derivative Works, in at least one\\nof the following places: within a NOTICE text file distributed\\nas part of the Derivative Works; within the Source form or\\ndocumentation, if provided along with the Derivative Works; or,\\nwithin a display generated by the Derivative Works, if and\\nwherever such third-party notices normally appear. The contents\\nof the NOTICE file are for informational purposes only and\\ndo not modify the License. You may add Your own attribution\\nnotices within Derivative Works that You distribute, alongside\\nor as an addendum to the NOTICE text from the Work, provided\\nthat such additional attribution notices cannot be construed\\nas modifying the License.\\n\\nYou may add Your own copyright statement to Your modifications and\\nmay provide additional or different license terms and conditions\\nfor use, reproduction, or distribution of Your modifications, or\\nfor any such Derivative Works as a whole, provided Your use,\\nreproduction, and distribution of the Work otherwise complies with\\nthe conditions stated in this License.\\n\\n5. Submission of Contributions. Unless You explicitly state otherwise,\\nany Contribution intentionally submitted for inclusion in the Work\\nby You to the Licensor shall be under the terms and conditions of\\nthis License, without any additional terms or conditions.\\nNotwithstanding the above, nothing herein shall supersede or modify\\nthe terms of any separate license agreement you may have executed\\nwith Licensor regarding such Contributions.\\n\\n6. Trademarks. This License does not grant permission to use the trade\\nnames, trademarks, service marks, or product names of the Licensor,\\nexcept as required for reasonable and customary use in describing the\\norigin of the Work and reproducing the content of the NOTICE file.\\n\\n7. Disclaimer of Warranty. Unless required by applicable law or\\nagreed to in writing, Licensor provides the Work (and each\\nContributor provides its Contributions) on an \\"AS IS\\" BASIS,\\nWITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or\\nimplied, including, without limitation, any warranties or conditions\\nof TITLE, NON-INFRINGEMENT, MERCHANTABILITY, or FITNESS FOR A\\nPARTICULAR PURPOSE. You are solely responsible for determining the\\nappropriateness of using or redistributing the Work and assume any\\nrisks associated with Your exercise of permissions under this License.\\n\\n8. Limitation of Liability. In no event and under no legal theory,\\nwhether in tort (including negligence), contract, or otherwise,\\nunless required by applicable law (such as deliberate and grossly\\nnegligent acts) or agreed to in writing, shall any Contributor be\\nliable to You for damages, including any direct, indirect, special,\\nincidental, or consequential damages of any character arising as a\\nresult of this License or out of the use or inability to use the\\nWork (including but not limited to damages for loss of goodwill,\\nwork stoppage, computer failure or malfunction, or any and all\\nother commercial damages or losses), even if such Contributor\\nhas been advised of the possibility of such damages.\\n\\n9. Accepting Warranty or Additional Liability. While redistributing\\nthe Work or Derivative Works thereof, You may choose to offer,\\nand charge a fee for, acceptance of support, warranty, indemnity,\\nor other liability obligations and/or rights consistent with this\\nLicense. However, in accepting such obligations, You may act only\\non Your own behalf and on Your sole responsibility, not on behalf\\nof any other Contributor, and only if You agree to indemnify,\\ndefend, and hold each Contributor harmless for any liability\\nincurred by, or claims asserted against, such Contributor by reason\\nof your accepting any such warranty or additional liability.\\n\\nEND OF TERMS AND CONDITIONS\\n\\nAPPENDIX: How to apply the Apache License to your work.\\n\\nTo apply the Apache License to your work, attach the following\\nboilerplate notice, with the fields enclosed by brackets \\"{}\\"\\nreplaced with your own identifying information. (Don't include\\nthe brackets!)  The text should be enclosed in the appropriate\\ncomment syntax for the file format. We also recommend that a\\nfile or class name and description of purpose be included on the\\nsame \\"printed page\\" as the copyright notice for easier\\nidentification within third-party archives.\\n\\nCopyright 2014 Mozilla\\n\\nLicensed under the Apache License, Version 2.0 (the \\"License\\");\\nyou may not use this file except in compliance with the License.\\nYou may obtain a copy of the License at\\n\\nhttp://www.apache.org/licenses/LICENSE-2.0\\n\\nUnless required by applicable law or agreed to in writing, software\\ndistributed under the License is distributed on an \\"AS IS\\" BASIS,\\nWITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.\\nSee the License for the specific language governing permissions and\\nlimitations under the License."},{"id":"lodash-es","name":"Lodash","description":"A modern JavaScript utility library delivering modularity, performance, & extras.","license":"Copyright OpenJS Foundation and other contributors <https://openjsf.org/>\\n\\nBased on Underscore.js, copyright Jeremy Ashkenas,\\nDocumentCloud and Investigative Reporters & Editors <http://underscorejs.org/>\\n\\nThis software consists of voluntary contributions made by many\\nindividuals. For exact contribution history, see the revision history\\navailable at https://github.com/lodash/lodash\\n\\nThe following license applies to all parts of this software except as\\ndocumented below:\\n\\n====\\n\\nPermission is hereby granted, free of charge, to any person obtaining\\na copy of this software and associated documentation files (the\\n\\"Software\\"), to deal in the Software without restriction, including\\nwithout limitation the rights to use, copy, modify, merge, publish,\\ndistribute, sublicense, and/or sell copies of the Software, and to\\npermit persons to whom the Software is furnished to do so, subject to\\nthe following conditions:\\n\\nThe above copyright notice and this permission notice shall be\\nincluded in all copies or substantial portions of the Software.\\n\\nTHE SOFTWARE IS PROVIDED \\"AS IS\\", WITHOUT WARRANTY OF ANY KIND,\\nEXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF\\nMERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND\\nNONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE\\nLIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION\\nOF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION\\nWITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.\\n\\n====\\n\\nCopyright and related rights for sample code are waived via CC0. Sample\\ncode is defined as all source code displayed within the prose of the\\ndocumentation.\\n\\nCC0: http://creativecommons.org/publicdomain/zero/1.0/\\n\\n====\\n\\nFiles located in the node_modules and vendor directories are externally\\nmaintained libraries used by this software which have their own\\nlicenses; we recommend you read them, as their terms may differ from the\\nterms above.","licenseType":"MIT","url":"https://github.com/lodash/lodash","homepage":"https://lodash.com/"},{"id":"terradraw","name":"Terradraw","description":"A library for drawing on maps that supports Mapbox, MapLibre, Google Maps, OpenLayers and Leaflet out the box.","license":"Copyright 2022 James Milner\\n\\nPermission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the \\"Software\\"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:\\n\\nThe above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.\\n\\nTHE SOFTWARE IS PROVIDED \\"AS IS\\", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.","licenseType":"MIT","url":"https://github.com/JamesLMilner/terra-draw","homepage":"https://terradraw.io/"},{"id":"vue-i18n","name":"Vue I18n","description":"Internationalization plugin for Vue.js","license":"The MIT License (MIT)\\n\\nCopyright (c) 2016 kazuya kawaguchi\\n\\nPermission is hereby granted, free of charge, to any person obtaining a copy of\\nthis software and associated documentation files (the \\"Software\\"), to deal in\\nthe Software without restriction, including without limitation the rights to\\nuse, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of\\nthe Software, and to permit persons to whom the Software is furnished to do so,\\nsubject to the following conditions:\\n\\nThe above copyright notice and this permission notice shall be included in all\\ncopies or substantial portions of the Software.\\n\\nTHE SOFTWARE IS PROVIDED \\"AS IS\\", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR\\nIMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS\\nFOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR\\nCOPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER\\nIN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN\\nCONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.","licenseType":"MIT","url":"https://github.com/intlify/vue-i18n","homepage":"https://kazupon.github.io/vue-i18n/"},{"id":"vue-markdown-render","name":"Vue Markdown Render","description":"A simple markdown parser for Vue using markdown-it.","license":"MIT License\\n\\nCopyright (c) 2023 cloudacy OG\\n\\nPermission is hereby granted, free of charge, to any person obtaining a copy\\nof this software and associated documentation files (the \\"Software\\"), to deal\\nin the Software without restriction, including without limitation the rights\\nto use, copy, modify, merge, publish, distribute, sublicense, and/or sell\\ncopies of the Software, and to permit persons to whom the Software is\\nfurnished to do so, subject to the following conditions:\\n\\nThe above copyright notice and this permission notice shall be included in all\\ncopies or substantial portions of the Software.\\n\\nTHE SOFTWARE IS PROVIDED \\"AS IS\\", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR\\nIMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,\\nFITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE\\nAUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER\\nLIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,\\nOUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE\\nSOFTWARE.","licenseType":"MIT","url":"https://github.com/cloudacy/vue-markdown-render"},{"id":"proj4rs","name":"Proj4rs","description":"Rust adaptation of Proj4.","license":"","licenseType":"MIT, Apache-2.0","url":"https://github.com/3liz/proj4rs"}]`);
  Xy = [
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
  Zy = {
    withStackTrace: false
  };
  Kf = (e, t, n = Zy) => {
    const r = t.isOk() ? {
      type: "Ok",
      value: t.value
    } : {
      type: "Err",
      value: t.error
    }, l = n.withStackTrace ? new Error().stack : void 0;
    return {
      data: r,
      message: e,
      stack: l
    };
  };
  function Er(e, t, n, r) {
    function l(c) {
      return c instanceof n ? c : new n(function(f) {
        f(c);
      });
    }
    return new (n || (n = Promise))(function(c, f) {
      function h(g) {
        try {
          v(r.next(g));
        } catch (T) {
          f(T);
        }
      }
      function p(g) {
        try {
          v(r.throw(g));
        } catch (T) {
          f(T);
        }
      }
      function v(g) {
        g.done ? c(g.value) : l(g.value).then(h, p);
      }
      v((r = r.apply(e, [])).next());
    });
  }
  function wc(e) {
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
  function In(e) {
    return this instanceof In ? (this.v = e, this) : new In(e);
  }
  function yc(e, t, n) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var r = n.apply(e, t || []), l, c = [];
    return l = Object.create((typeof AsyncIterator == "function" ? AsyncIterator : Object).prototype), h("next"), h("throw"), h("return", f), l[Symbol.asyncIterator] = function() {
      return this;
    }, l;
    function f(R) {
      return function(j) {
        return Promise.resolve(j).then(R, T);
      };
    }
    function h(R, j) {
      r[R] && (l[R] = function(L) {
        return new Promise(function(he, re) {
          c.push([
            R,
            L,
            he,
            re
          ]) > 1 || p(R, L);
        });
      }, j && (l[R] = j(l[R])));
    }
    function p(R, j) {
      try {
        v(r[R](j));
      } catch (L) {
        M(c[0][3], L);
      }
    }
    function v(R) {
      R.value instanceof In ? Promise.resolve(R.value.v).then(g, T) : M(c[0][2], R);
    }
    function g(R) {
      p("next", R);
    }
    function T(R) {
      p("throw", R);
    }
    function M(R, j) {
      R(j), c.shift(), c.length && p(c[0][0], c[0][1]);
    }
  }
  function Qy(e) {
    var t, n;
    return t = {}, r("next"), r("throw", function(l) {
      throw l;
    }), r("return"), t[Symbol.iterator] = function() {
      return this;
    }, t;
    function r(l, c) {
      t[l] = e[l] ? function(f) {
        return (n = !n) ? {
          value: In(e[l](f)),
          done: false
        } : c ? c(f) : f;
      } : c;
    }
  }
  function eb(e) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var t = e[Symbol.asyncIterator], n;
    return t ? t.call(e) : (e = typeof wc == "function" ? wc(e) : e[Symbol.iterator](), n = {}, r("next"), r("throw"), r("return"), n[Symbol.asyncIterator] = function() {
      return this;
    }, n);
    function r(c) {
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
      const n = t.then((r) => new yn(r));
      return new _t(n);
    }
    static fromPromise(t, n) {
      const r = t.then((l) => new yn(l)).catch((l) => new an(n(l)));
      return new _t(r);
    }
    static fromThrowable(t, n) {
      return (...r) => new _t(Er(this, void 0, void 0, function* () {
        try {
          return new yn(yield t(...r));
        } catch (l) {
          return new an(n ? n(l) : l);
        }
      }));
    }
    static combine(t) {
      return tb(t);
    }
    static combineWithAllErrors(t) {
      return nb(t);
    }
    map(t) {
      return new _t(this._promise.then((n) => Er(this, void 0, void 0, function* () {
        return n.isErr() ? new an(n.error) : new yn(yield t(n.value));
      })));
    }
    andThrough(t) {
      return new _t(this._promise.then((n) => Er(this, void 0, void 0, function* () {
        if (n.isErr()) return new an(n.error);
        const r = yield t(n.value);
        return r.isErr() ? new an(r.error) : new yn(n.value);
      })));
    }
    andTee(t) {
      return new _t(this._promise.then((n) => Er(this, void 0, void 0, function* () {
        if (n.isErr()) return new an(n.error);
        try {
          yield t(n.value);
        } catch {
        }
        return new yn(n.value);
      })));
    }
    orTee(t) {
      return new _t(this._promise.then((n) => Er(this, void 0, void 0, function* () {
        if (n.isOk()) return new yn(n.value);
        try {
          yield t(n.error);
        } catch {
        }
        return new an(n.error);
      })));
    }
    mapErr(t) {
      return new _t(this._promise.then((n) => Er(this, void 0, void 0, function* () {
        return n.isOk() ? new yn(n.value) : new an(yield t(n.error));
      })));
    }
    andThen(t) {
      return new _t(this._promise.then((n) => {
        if (n.isErr()) return new an(n.error);
        const r = t(n.value);
        return r instanceof _t ? r._promise : r;
      }));
    }
    orElse(t) {
      return new _t(this._promise.then((n) => Er(this, void 0, void 0, function* () {
        return n.isErr() ? t(n.error) : new yn(n.value);
      })));
    }
    match(t, n) {
      return this._promise.then((r) => r.match(t, n));
    }
    unwrapOr(t) {
      return this._promise.then((n) => n.unwrapOr(t));
    }
    safeUnwrap() {
      return yc(this, arguments, function* () {
        return yield In(yield In(yield* Qy(eb(yield In(this._promise.then((n) => n.safeUnwrap()))))));
      });
    }
    then(t, n) {
      return this._promise.then(t, n);
    }
    [Symbol.asyncIterator]() {
      return yc(this, arguments, function* () {
        const n = yield In(this._promise);
        return n.isErr() && (yield yield In(Ao(n.error))), yield In(n.value);
      });
    }
  }
  function Ao(e) {
    return new _t(Promise.resolve(new an(e)));
  }
  const Jf = (e) => {
    let t = D([]);
    for (const n of e) if (n.isErr()) {
      t = N(n.error);
      break;
    } else t.map((r) => r.push(n.value));
    return t;
  }, tb = (e) => _t.fromSafePromise(Promise.all(e)).andThen(Jf), Xf = (e) => {
    let t = D([]);
    for (const n of e) n.isErr() && t.isErr() ? t.error.push(n.error) : n.isErr() && t.isOk() ? t = N([
      n.error
    ]) : n.isOk() && t.isOk() && t.value.push(n.value);
    return t;
  }, nb = (e) => _t.fromSafePromise(Promise.all(e)).andThen(Xf);
  var Oa;
  (function(e) {
    function t(l, c) {
      return (...f) => {
        try {
          const h = l(...f);
          return D(h);
        } catch (h) {
          return N(c ? c(h) : h);
        }
      };
    }
    e.fromThrowable = t;
    function n(l) {
      return Jf(l);
    }
    e.combine = n;
    function r(l) {
      return Xf(l);
    }
    e.combineWithAllErrors = r;
  })(Oa || (Oa = {}));
  D = function(e) {
    return new yn(e);
  };
  N = function(e) {
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
      return D(t(this.value));
    }
    mapErr(t) {
      return D(this.value);
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
      throw Kf("Called `_unsafeUnwrapErr` on an Ok", this, t);
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
      return Ao(this.error);
    }
    asyncAndThrough(t) {
      return Ao(this.error);
    }
    asyncMap(t) {
      return Ao(this.error);
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
      throw Kf("Called `_unsafeUnwrap` on an Err", this, t);
    }
    _unsafeUnwrapErr(t) {
      return this.error;
    }
    *[Symbol.iterator]() {
      const t = this;
      return yield t, t;
    }
  }
  Oa.fromThrowable;
  to = ((e) => (e.GENERIC = "generic", e.VALIDATION = "validation", e.NETWORK = "network", e.GEOLOCATION = "geolocation", e.STORAGE = "storage", e.CONVERSION = "conversion", e.UPDATE_SERVICE = "update_service", e))(to || {});
  ui = class extends Error {
    constructor(t, n) {
      super(t), this.cause = n, this.name = this.constructor.name, n && (this.message = `${t} (caused by: ${n.message})`);
    }
  };
  class ct extends ui {
    constructor(t, n = "GENERIC_ERROR", r) {
      super(t, r);
      __publicField(this, "code");
      __publicField(this, "domain", "generic");
      this.code = n;
    }
  }
  function rb(e) {
    return e instanceof ui;
  }
  go = function(e, t = "Unknown error occurred") {
    return rb(e) ? e : e instanceof Error ? new ct(t, "UNKNOWN_ERROR", e) : new ct(t, "UNKNOWN_ERROR");
  };
  Ir = function(e, t) {
    const n = t ? `[${t}] ` : "";
    console.error(`${n}${e.domain}.${e.code}: ${e.message}`, {
      error: e,
      cause: e.cause,
      stack: e.stack
    });
  };
  class Me extends ui {
    constructor(t, n, r) {
      super(t, r);
      __publicField(this, "code");
      __publicField(this, "domain", to.GEOLOCATION);
      this.code = n;
    }
  }
  class Pn extends Me {
    constructor(t = "Geolocation update service error", n, r) {
      super(t, "UPDATE_SERVICE_ERROR", r), this.serviceName = n;
    }
  }
  var ib = "2.0.7", ob = 500, bc = "user-agent", ni = "", vc = "?", ut = {
    FUNCTION: "function",
    OBJECT: "object",
    STRING: "string",
    UNDEFINED: "undefined"
  }, Wt = "browser", Wn = "cpu", Tn = "device", un = "engine", Kt = "os", ri = "result", W = "name", F = "type", $ = "vendor", z = "version", Lt = "architecture", Yi = "major", U = "model", Ro = "console", Ae = "mobile", Ve = "tablet", ht = "smarttv", bn = "wearable", mo = "xr", _i = "embedded", Ur = "inapp", rl = "brands", Ar = "formFactors", il = "fullVersionList", ii = "platform", ol = "platformVersion", _s = "bitness", gr = "sec-ch-ua", sb = gr + "-full-version-list", ab = gr + "-arch", lb = gr + "-" + _s, cb = gr + "-form-factors", ub = gr + "-" + Ae, fb = gr + "-" + U, Zf = gr + "-" + ii, hb = Zf + "-version", Qf = [
    rl,
    il,
    Ae,
    U,
    ii,
    ol,
    Lt,
    Ar,
    _s
  ], wo = "Amazon", Gr = "Apple", Ec = "ASUS", Ic = "BlackBerry", Tr = "Google", Tc = "Huawei", qs = "Lenovo", Sc = "Honor", yo = "LG", Ys = "Microsoft", Ks = "Motorola", _c = "Nvidia", Oc = "OnePlus", Js = "OPPO", wi = "Samsung", Ac = "Sharp", yi = "Sony", Xs = "Xiaomi", Zs = "Zebra", Rc = "Chrome", Mc = "Chromium", Zn = "Chromecast", Mo = "Edge", bi = "Firefox", vi = "Opera", Qs = "Facebook", Nc = "Sogou", Wr = "Mobile ", Ei = " Browser", Aa = "Windows", db = typeof window !== ut.UNDEFINED, Ut = db && window.navigator ? window.navigator : void 0, Rr = Ut && Ut.userAgentData ? Ut.userAgentData : void 0, pb = function(e, t) {
    var n = {}, r = t;
    if (!qo(t)) {
      r = {};
      for (var l in t) for (var c in t[l]) r[c] = t[l][c].concat(r[c] ? r[c] : []);
    }
    for (var f in e) n[f] = r[f] && r[f].length % 2 === 0 ? r[f].concat(e[f]) : e[f];
    return n;
  }, Os = function(e) {
    for (var t = {}, n = 0; n < e.length; n++) t[e[n].toUpperCase()] = e[n];
    return t;
  }, Ra = function(e, t) {
    if (typeof e === ut.OBJECT && e.length > 0) {
      for (var n in e) if (ar(t) == ar(e[n])) return true;
      return false;
    }
    return no(e) ? ar(t) == ar(e) : false;
  }, qo = function(e, t) {
    for (var n in e) return /^(browser|cpu|device|engine|os)$/.test(n) || (t ? qo(e[n]) : false);
  }, no = function(e) {
    return typeof e === ut.STRING;
  }, ea = function(e) {
    if (e) {
      for (var t = [], n = oi(/\\?\"/g, e).split(","), r = 0; r < n.length; r++) if (n[r].indexOf(";") > -1) {
        var l = Yo(n[r]).split(";v=");
        t[r] = {
          brand: l[0],
          version: l[1]
        };
      } else t[r] = Yo(n[r]);
      return t;
    }
  }, ar = function(e) {
    return no(e) ? e.toLowerCase() : e;
  }, Ma = function(e) {
    return no(e) ? oi(/[^\d\.]/g, e).split(".")[0] : void 0;
  }, jn = function(e) {
    for (var t in e) if (e.hasOwnProperty(t)) {
      var n = e[t];
      typeof n == ut.OBJECT && n.length == 2 ? this[n[0]] = n[1] : this[n] = void 0;
    }
    return this;
  }, oi = function(e, t) {
    return no(t) ? t.replace(e, ni) : t;
  }, Ii = function(e) {
    return oi(/\\?\"/g, e);
  }, Yo = function(e, t) {
    return e = oi(/^\s\s*/, String(e)), typeof t === ut.UNDEFINED ? e : e.substring(0, t);
  }, Na = function(e, t) {
    if (!(!e || !t)) for (var n = 0, r, l, c, f, h, p; n < t.length && !h; ) {
      var v = t[n], g = t[n + 1];
      for (r = l = 0; r < v.length && !h && v[r]; ) if (h = v[r++].exec(e), h) for (c = 0; c < g.length; c++) p = h[++l], f = g[c], typeof f === ut.OBJECT && f.length > 0 ? f.length === 2 ? typeof f[1] == ut.FUNCTION ? this[f[0]] = f[1].call(this, p) : this[f[0]] = f[1] : f.length >= 3 && (typeof f[1] === ut.FUNCTION && !(f[1].exec && f[1].test) ? f.length > 3 ? this[f[0]] = p ? f[1].apply(this, f.slice(2)) : void 0 : this[f[0]] = p ? f[1].call(this, p, f[2]) : void 0 : f.length == 3 ? this[f[0]] = p ? p.replace(f[1], f[2]) : void 0 : f.length == 4 ? this[f[0]] = p ? f[3].call(this, p.replace(f[1], f[2])) : void 0 : f.length > 4 && (this[f[0]] = p ? f[3].apply(this, [
        p.replace(f[1], f[2])
      ].concat(f.slice(4))) : void 0)) : this[f] = p || void 0;
      n += 2;
    }
  }, cn = function(e, t) {
    for (var n in t) if (typeof t[n] === ut.OBJECT && t[n].length > 0) {
      for (var r = 0; r < t[n].length; r++) if (Ra(t[n][r], e)) return n === vc ? void 0 : n;
    } else if (Ra(t[n], e)) return n === vc ? void 0 : n;
    return t.hasOwnProperty("*") ? t["*"] : e;
  }, Pc = {
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
  }, Cc = {
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
  }, gb = {
    Chrome: "Google Chrome",
    Edge: "Microsoft Edge",
    "Edge WebView2": "Microsoft Edge WebView2",
    "Chrome WebView": "Android WebView",
    "Chrome Headless": "HeadlessChrome",
    "Huawei Browser": "HuaweiBrowser",
    "MIUI Browser": "Miui Browser",
    "Opera Mobi": "OperaMobile",
    Yandex: "YaBrowser"
  }, kc = {
    browser: [
      [
        /\b(?:crmo|crios)\/([\w\.]+)/i
      ],
      [
        z,
        [
          W,
          Wr + "Chrome"
        ]
      ],
      [
        /webview.+edge\/([\w\.]+)/i
      ],
      [
        z,
        [
          W,
          Mo + " WebView"
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
          vi + " Mini"
        ]
      ],
      [
        /\bop(?:rg)?x\/([\w\.]+)/i
      ],
      [
        z,
        [
          W,
          vi + " GX"
        ]
      ],
      [
        /\bopr\/([\w\.]+)/i
      ],
      [
        z,
        [
          W,
          vi
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
          "Smart " + qs + Ei
        ]
      ],
      [
        /(avast|avg)\/([\w\.]+)/i
      ],
      [
        [
          W,
          /(.+)/,
          "$1 Secure" + Ei
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
          bi + " Focus"
        ]
      ],
      [
        /\bopt\/([\w\.]+)/i
      ],
      [
        z,
        [
          W,
          vi + " Touch"
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
          vi + " Coast"
        ]
      ],
      [
        /miuibrowser\/([\w\.]+)/i
      ],
      [
        z,
        [
          W,
          "MIUI" + Ei
        ]
      ],
      [
        /fxios\/([\w\.-]+)/i
      ],
      [
        z,
        [
          W,
          Wr + bi
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
          "$1" + Ei
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
          wi + " Internet"
        ]
      ],
      [
        /metasr[\/ ]?([\d\.]+)/i
      ],
      [
        z,
        [
          W,
          Nc + " Explorer"
        ]
      ],
      [
        /(sogou)mo\w+\/([\d\.]+)/i
      ],
      [
        [
          W,
          Nc + " Mobile"
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
          Qs
        ],
        z,
        [
          F,
          Ur
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
          F,
          Ur
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
          F,
          Ur
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
          F,
          Ur
        ]
      ],
      [
        /\[(linkedin)app\]/i
      ],
      [
        W,
        [
          F,
          Ur
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
          F,
          Ur
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
          Rc + " Headless"
        ]
      ],
      [
        /wv\).+chrome\/([\w\.]+).+edgw\//i
      ],
      [
        z,
        [
          W,
          Mo + " WebView2"
        ]
      ],
      [
        / wv\).+(chrome)\/([\w\.]+)/i
      ],
      [
        [
          W,
          Rc + " WebView"
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
          "Android" + Ei
        ]
      ],
      [
        /chrome\/([\w\.]+) mobile/i
      ],
      [
        z,
        [
          W,
          Wr + "Chrome"
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
          Wr + "Safari"
        ]
      ],
      [
        /iphone .*mobile(?:\/\w+ | ?)safari/i
      ],
      [
        [
          W,
          Wr + "Safari"
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
          Wr + bi
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
          bi + " Reality"
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
          ni
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
          ni,
          ar
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
        U,
        [
          $,
          wi
        ],
        [
          F,
          Ve
        ]
      ],
      [
        /\b((?:s[cgp]h|gt|sm)-(?![lr])\w+|sc[g-]?[\d]+a?|galaxy nexus)/i,
        /samsung[- ]((?!sm-[lr]|browser)[-\w]+)/i,
        /sec-(sgh\w+)/i
      ],
      [
        U,
        [
          $,
          wi
        ],
        [
          F,
          Ae
        ]
      ],
      [
        /(?:\/|\()(ip(?:hone|od)[\w, ]*)[\/\);]/i
      ],
      [
        U,
        [
          $,
          Gr
        ],
        [
          F,
          Ae
        ]
      ],
      [
        /\b(?:ios|apple\w+)\/.+[\(\/](ipad)/i,
        /\b(ipad)[\d,]*[;\] ].+(mac |i(pad)?)os/i
      ],
      [
        U,
        [
          $,
          Gr
        ],
        [
          F,
          Ve
        ]
      ],
      [
        /(macintosh);/i
      ],
      [
        U,
        [
          $,
          Gr
        ]
      ],
      [
        /\b(sh-?[altvz]?\d\d[a-ekm]?)/i
      ],
      [
        U,
        [
          $,
          Ac
        ],
        [
          F,
          Ae
        ]
      ],
      [
        /\b((?:brt|eln|hey2?|gdi|jdn)-a?[lnw]09|(?:ag[rm]3?|jdn2|kob2)-a?[lw]0[09]hn)(?: bui|\)|;)/i
      ],
      [
        U,
        [
          $,
          Sc
        ],
        [
          F,
          Ve
        ]
      ],
      [
        /honor([-\w ]+)[;\)]/i
      ],
      [
        U,
        [
          $,
          Sc
        ],
        [
          F,
          Ae
        ]
      ],
      [
        /\b((?:ag[rs][2356]?k?|bah[234]?|bg[2o]|bt[kv]|cmr|cpn|db[ry]2?|jdn2|got|kob2?k?|mon|pce|scm|sht?|[tw]gr|vrd)-[ad]?[lw][0125][09]b?|605hw|bg2-u03|(?:gem|fdr|m2|ple|t1)-[7a]0[1-4][lu]|t1-a2[13][lw]|mediapad[\w\. ]*(?= bui|\)))\b(?!.+d\/s)/i
      ],
      [
        U,
        [
          $,
          Tc
        ],
        [
          F,
          Ve
        ]
      ],
      [
        /(?:huawei) ?([-\w ]+)[;\)]/i,
        /\b(nexus 6p|\w{2,4}e?-[atu]?[ln][\dx][\dc][adnt]?)\b(?!.+d\/s)/i
      ],
      [
        U,
        [
          $,
          Tc
        ],
        [
          F,
          Ae
        ]
      ],
      [
        /oid[^\)]+; (2[\dbc]{4}(182|283|rp\w{2})[cgl]|m2105k81a?c)(?: bui|\))/i,
        /\b(?:xiao)?((?:red)?mi[-_ ]?pad[\w- ]*)(?: bui|\))/i
      ],
      [
        [
          U,
          /_/g,
          " "
        ],
        [
          $,
          Xs
        ],
        [
          F,
          Ve
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
          U,
          /_/g,
          " "
        ],
        [
          $,
          Xs
        ],
        [
          F,
          Ae
        ]
      ],
      [
        /droid.+; (cph2[3-6]\d[13579]|((gm|hd)19|(ac|be|in|kb)20|(d[en]|eb|le|mt)21|ne22)[0-2]\d|p[g-k]\w[1m]10)\b/i,
        /(?:one)?(?:plus)? (a\d0\d\d)(?: b|\))/i
      ],
      [
        U,
        [
          $,
          Oc
        ],
        [
          F,
          Ae
        ]
      ],
      [
        /; (\w+) bui.+ oppo/i,
        /\b(cph[12]\d{3}|p(?:af|c[al]|d\w|e[ar])[mt]\d0|x9007|a101op)\b/i
      ],
      [
        U,
        [
          $,
          Js
        ],
        [
          F,
          Ae
        ]
      ],
      [
        /\b(opd2(\d{3}a?))(?: bui|\))/i
      ],
      [
        U,
        [
          $,
          cn,
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
          F,
          Ve
        ]
      ],
      [
        /(vivo (5r?|6|8l?|go|one|s|x[il]?[2-4]?)[\w\+ ]*)(?: bui|\))/i
      ],
      [
        U,
        [
          $,
          "BLU"
        ],
        [
          F,
          Ae
        ]
      ],
      [
        /; vivo (\w+)(?: bui|\))/i,
        /\b(v[12]\d{3}\w?[at])(?: bui|;)/i
      ],
      [
        U,
        [
          $,
          "Vivo"
        ],
        [
          F,
          Ae
        ]
      ],
      [
        /\b(rmx[1-3]\d{3})(?: bui|;|\))/i
      ],
      [
        U,
        [
          $,
          "Realme"
        ],
        [
          F,
          Ae
        ]
      ],
      [
        /(ideatab[-\w ]+|602lv|d-42a|a101lv|a2109a|a3500-hv|s[56]000|pb-6505[my]|tb-?x?\d{3,4}(?:f[cu]|xu|[av])|yt\d?-[jx]?\d+[lfmx])( bui|;|\)|\/)/i,
        /lenovo ?(b[68]0[08]0-?[hf]?|tab(?:[\w- ]+?)|tb[\w-]{6,7})( bui|;|\)|\/)/i
      ],
      [
        U,
        [
          $,
          qs
        ],
        [
          F,
          Ve
        ]
      ],
      [
        /lenovo[-_ ]?([-\w ]+?)(?: bui|\)|\/)/i
      ],
      [
        U,
        [
          $,
          qs
        ],
        [
          F,
          Ae
        ]
      ],
      [
        /\b(milestone|droid(?:[2-4x]| (?:bionic|x2|pro|razr))?:?( 4g)?)\b[\w ]+build\//i,
        /\bmot(?:orola)?[- ]([\w\s]+)(\)| bui)/i,
        /((?:moto(?! 360)[-\w\(\) ]+|xt\d{3,4}[cgkosw\+]?[-\d]*|nexus 6)(?= bui|\)))/i
      ],
      [
        U,
        [
          $,
          Ks
        ],
        [
          F,
          Ae
        ]
      ],
      [
        /\b(mz60\d|xoom[2 ]{0,2}) build\//i
      ],
      [
        U,
        [
          $,
          Ks
        ],
        [
          F,
          Ve
        ]
      ],
      [
        /((?=lg)?[vl]k\-?\d{3}) bui| 3\.[-\w; ]{10}lg?-([06cv9]{3,4})/i
      ],
      [
        U,
        [
          $,
          yo
        ],
        [
          F,
          Ve
        ]
      ],
      [
        /(lm(?:-?f100[nv]?|-[\w\.]+)(?= bui|\))|nexus [45])/i,
        /\blg[-e;\/ ]+(?!.*(?:browser|netcast|android tv|watch|webos))(\w+)/i,
        /\blg-?([\d\w]+) bui/i
      ],
      [
        U,
        [
          $,
          yo
        ],
        [
          F,
          Ae
        ]
      ],
      [
        /(nokia) (t[12][01])/i
      ],
      [
        $,
        U,
        [
          F,
          Ve
        ]
      ],
      [
        /(?:maemo|nokia).*(n900|lumia \d+|rm-\d+)/i,
        /nokia[-_ ]?(([-\w\. ]*?))( bui|\)|;|\/)/i
      ],
      [
        [
          U,
          /_/g,
          " "
        ],
        [
          F,
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
        U,
        [
          $,
          Tr
        ],
        [
          F,
          Ve
        ]
      ],
      [
        /droid.+;(?: google)? (g(01[13]a|020[aem]|025[jn]|1b60|1f8f|2ybb|4s1m|576d|5nz6|8hhn|8vou|a02099|c15s|d1yq|e2ae|ec77|gh2x|kv4x|p4bc|pj41|r83y|tt9q|ur25|wvk6)|pixel[\d ]*a?( pro)?( xl)?( fold)?( \(5g\))?)( bui|\))/i
      ],
      [
        U,
        [
          $,
          Tr
        ],
        [
          F,
          Ae
        ]
      ],
      [
        /(google) (pixelbook( go)?)/i
      ],
      [
        $,
        U
      ],
      [
        /droid.+; (a?\d[0-2]{2}so|[c-g]\d{4}|so[-gl]\w+|xq-\w\w\d\d)(?= bui|\).+chrome\/(?![1-6]{0,1}\d\.))/i
      ],
      [
        U,
        [
          $,
          yi
        ],
        [
          F,
          Ae
        ]
      ],
      [
        /sony tablet [ps]/i,
        /\b(?:sony)?sgp\w+(?: bui|\))/i
      ],
      [
        [
          U,
          "Xperia Tablet"
        ],
        [
          $,
          yi
        ],
        [
          F,
          Ve
        ]
      ],
      [
        /(alexa)webm/i,
        /(kf[a-z]{2}wi|aeo(?!bc)\w\w)( bui|\))/i,
        /(kf[a-z]+)( bui|\)).+silk\//i
      ],
      [
        U,
        [
          $,
          wo
        ],
        [
          F,
          Ve
        ]
      ],
      [
        /((?:sd|kf)[0349hijorstuw]+)( bui|\)).+silk\//i
      ],
      [
        [
          U,
          /(.+)/g,
          "Fire Phone $1"
        ],
        [
          $,
          wo
        ],
        [
          F,
          Ae
        ]
      ],
      [
        /(playbook);[-\w\),; ]+(rim)/i
      ],
      [
        U,
        $,
        [
          F,
          Ve
        ]
      ],
      [
        /\b((?:bb[a-f]|st[hv])100-\d)/i,
        /(?:blackberry|\(bb10;) (\w+)/i
      ],
      [
        U,
        [
          $,
          Ic
        ],
        [
          F,
          Ae
        ]
      ],
      [
        /(?:\b|asus_)(transfo[prime ]{4,10} \w+|eeepc|slider \w+|nexus 7|padfone|p00[cj])/i
      ],
      [
        U,
        [
          $,
          Ec
        ],
        [
          F,
          Ve
        ]
      ],
      [
        / (z[bes]6[027][012][km][ls]|zenfone \d\w?)\b/i
      ],
      [
        U,
        [
          $,
          Ec
        ],
        [
          F,
          Ae
        ]
      ],
      [
        /(nexus 9)/i
      ],
      [
        U,
        [
          $,
          "HTC"
        ],
        [
          F,
          Ve
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
          U,
          /_/g,
          " "
        ],
        [
          F,
          Ae
        ]
      ],
      [
        /tcl (xess p17aa)/i,
        /droid [\w\.]+; ((?:8[14]9[16]|9(?:0(?:48|60|8[01])|1(?:3[27]|66)|2(?:6[69]|9[56])|466))[gqswx])(_\w(\w|\w\w))?(\)| bui)/i
      ],
      [
        U,
        [
          $,
          "TCL"
        ],
        [
          F,
          Ve
        ]
      ],
      [
        /droid [\w\.]+; (418(?:7d|8v)|5087z|5102l|61(?:02[dh]|25[adfh]|27[ai]|56[dh]|59k|65[ah])|a509dl|t(?:43(?:0w|1[adepqu])|50(?:6d|7[adju])|6(?:09dl|10k|12b|71[efho]|76[hjk])|7(?:66[ahju]|67[hw]|7[045][bh]|71[hk]|73o|76[ho]|79w|81[hks]?|82h|90[bhsy]|99b)|810[hs]))(_\w(\w|\w\w))?(\)| bui)/i
      ],
      [
        U,
        [
          $,
          "TCL"
        ],
        [
          F,
          Ae
        ]
      ],
      [
        /(itel) ((\w+))/i
      ],
      [
        [
          $,
          ar
        ],
        U,
        [
          F,
          cn,
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
        U,
        [
          $,
          "Acer"
        ],
        [
          F,
          Ve
        ]
      ],
      [
        /droid.+; (m[1-5] note) bui/i,
        /\bmz-([-\w]{2,})/i
      ],
      [
        U,
        [
          $,
          "Meizu"
        ],
        [
          F,
          Ae
        ]
      ],
      [
        /; ((?:power )?armor(?:[\w ]{0,8}))(?: bui|\))/i
      ],
      [
        U,
        [
          $,
          "Ulefone"
        ],
        [
          F,
          Ae
        ]
      ],
      [
        /; (energy ?\w+)(?: bui|\))/i,
        /; energizer ([\w ]+)(?: bui|\))/i
      ],
      [
        U,
        [
          $,
          "Energizer"
        ],
        [
          F,
          Ae
        ]
      ],
      [
        /; cat (b35);/i,
        /; (b15q?|s22 flip|s48c|s62 pro)(?: bui|\))/i
      ],
      [
        U,
        [
          $,
          "Cat"
        ],
        [
          F,
          Ae
        ]
      ],
      [
        /((?:new )?andromax[\w- ]+)(?: bui|\))/i
      ],
      [
        U,
        [
          $,
          "Smartfren"
        ],
        [
          F,
          Ae
        ]
      ],
      [
        /droid.+; (a(in)?(0(15|59|6[35])|142)p?)/i
      ],
      [
        U,
        [
          $,
          "Nothing"
        ],
        [
          F,
          Ae
        ]
      ],
      [
        /; (x67 5g|tikeasy \w+|ac[1789]\d\w+)( b|\))/i,
        /archos ?(5|gamepad2?|([\w ]*[t1789]|hello) ?\d+[\w ]*)( b|\))/i
      ],
      [
        U,
        [
          $,
          "Archos"
        ],
        [
          F,
          Ve
        ]
      ],
      [
        /archos ([\w ]+)( b|\))/i,
        /; (ac[3-6]\d\w{2,8})( b|\))/i
      ],
      [
        U,
        [
          $,
          "Archos"
        ],
        [
          F,
          Ae
        ]
      ],
      [
        /; (n159v)/i
      ],
      [
        U,
        [
          $,
          "HMD"
        ],
        [
          F,
          Ae
        ]
      ],
      [
        /(imo) (tab \w+)/i,
        /(infinix|tecno) (x1101b?|p904|dp(7c|8d|10a)( pro)?|p70[1-3]a?|p904|t1101)/i
      ],
      [
        $,
        U,
        [
          F,
          Ve
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
        U,
        [
          F,
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
        U,
        [
          F,
          Ve
        ]
      ],
      [
        /(surface duo)/i
      ],
      [
        U,
        [
          $,
          Ys
        ],
        [
          F,
          Ve
        ]
      ],
      [
        /droid [\d\.]+; (fp\du?)(?: b|\))/i
      ],
      [
        U,
        [
          $,
          "Fairphone"
        ],
        [
          F,
          Ae
        ]
      ],
      [
        /((?:tegranote|shield t(?!.+d tv))[\w- ]*?)(?: b|\))/i
      ],
      [
        U,
        [
          $,
          _c
        ],
        [
          F,
          Ve
        ]
      ],
      [
        /(sprint) (\w+)/i
      ],
      [
        $,
        U,
        [
          F,
          Ae
        ]
      ],
      [
        /(kin\.[onetw]{3})/i
      ],
      [
        [
          U,
          /\./g,
          " "
        ],
        [
          $,
          Ys
        ],
        [
          F,
          Ae
        ]
      ],
      [
        /droid.+; ([c6]+|et5[16]|mc[239][23]x?|vc8[03]x?)\)/i
      ],
      [
        U,
        [
          $,
          Zs
        ],
        [
          F,
          Ve
        ]
      ],
      [
        /droid.+; (ec30|ps20|tc[2-8]\d[kx])\)/i
      ],
      [
        U,
        [
          $,
          Zs
        ],
        [
          F,
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
          F,
          ht
        ]
      ],
      [
        /hbbtv.+maple;(\d+)/i
      ],
      [
        [
          U,
          /^/,
          "SmartTV"
        ],
        [
          $,
          wi
        ],
        [
          F,
          ht
        ]
      ],
      [
        /(vizio)(?: |.+model\/)(\w+-\w+)/i,
        /tcast.+(lg)e?. ([-\w]+)/i
      ],
      [
        $,
        U,
        [
          F,
          ht
        ]
      ],
      [
        /(nux; netcast.+smarttv|lg (netcast\.tv-201\d|android tv))/i
      ],
      [
        [
          $,
          yo
        ],
        [
          F,
          ht
        ]
      ],
      [
        /(apple) ?tv/i
      ],
      [
        $,
        [
          U,
          Gr + " TV"
        ],
        [
          F,
          ht
        ]
      ],
      [
        /crkey.*devicetype\/chromecast/i
      ],
      [
        [
          U,
          Zn + " Third Generation"
        ],
        [
          $,
          Tr
        ],
        [
          F,
          ht
        ]
      ],
      [
        /crkey.*devicetype\/([^/]*)/i
      ],
      [
        [
          U,
          /^/,
          "Chromecast "
        ],
        [
          $,
          Tr
        ],
        [
          F,
          ht
        ]
      ],
      [
        /fuchsia.*crkey/i
      ],
      [
        [
          U,
          Zn + " Nest Hub"
        ],
        [
          $,
          Tr
        ],
        [
          F,
          ht
        ]
      ],
      [
        /crkey/i
      ],
      [
        [
          U,
          Zn
        ],
        [
          $,
          Tr
        ],
        [
          F,
          ht
        ]
      ],
      [
        /(portaltv)/i
      ],
      [
        U,
        [
          $,
          Qs
        ],
        [
          F,
          ht
        ]
      ],
      [
        /droid.+aft(\w+)( bui|\))/i
      ],
      [
        U,
        [
          $,
          wo
        ],
        [
          F,
          ht
        ]
      ],
      [
        /(shield \w+ tv)/i
      ],
      [
        U,
        [
          $,
          _c
        ],
        [
          F,
          ht
        ]
      ],
      [
        /\(dtv[\);].+(aquos)/i,
        /(aquos-tv[\w ]+)\)/i
      ],
      [
        U,
        [
          $,
          Ac
        ],
        [
          F,
          ht
        ]
      ],
      [
        /(bravia[\w ]+)( bui|\))/i
      ],
      [
        U,
        [
          $,
          yi
        ],
        [
          F,
          ht
        ]
      ],
      [
        /(mi(tv|box)-?\w+) bui/i
      ],
      [
        U,
        [
          $,
          Xs
        ],
        [
          F,
          ht
        ]
      ],
      [
        /Hbbtv.*(technisat) (.*);/i
      ],
      [
        $,
        U,
        [
          F,
          ht
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
          cn,
          {
            LG: "lge"
          }
        ],
        [
          U,
          Yo
        ],
        [
          F,
          ht
        ]
      ],
      [
        /(playstation \w+)/i
      ],
      [
        U,
        [
          $,
          yi
        ],
        [
          F,
          Ro
        ]
      ],
      [
        /\b(xbox(?: one)?(?!; xbox))[\); ]/i
      ],
      [
        U,
        [
          $,
          Ys
        ],
        [
          F,
          Ro
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
          cn,
          {
            Nvidia: "Shield",
            Anbernic: "RGCUBE",
            Logitech: "GR0006"
          }
        ],
        U,
        [
          F,
          Ro
        ]
      ],
      [
        /\b(sm-[lr]\d\d[0156][fnuw]?s?|gear live)\b/i
      ],
      [
        U,
        [
          $,
          wi
        ],
        [
          F,
          bn
        ]
      ],
      [
        /((pebble))app/i,
        /(asus|google|lg|oppo|xiaomi) ((pixel |zen)?watch[\w ]*)( bui|\))/i
      ],
      [
        $,
        U,
        [
          F,
          bn
        ]
      ],
      [
        /(ow(?:19|20)?we?[1-3]{1,3})/i
      ],
      [
        U,
        [
          $,
          Js
        ],
        [
          F,
          bn
        ]
      ],
      [
        /(watch)(?: ?os[,\/]|\d,\d\/)[\d\.]+/i
      ],
      [
        U,
        [
          $,
          Gr
        ],
        [
          F,
          bn
        ]
      ],
      [
        /(opwwe\d{3})/i
      ],
      [
        U,
        [
          $,
          Oc
        ],
        [
          F,
          bn
        ]
      ],
      [
        /(moto 360)/i
      ],
      [
        U,
        [
          $,
          Ks
        ],
        [
          F,
          bn
        ]
      ],
      [
        /(smartwatch 3)/i
      ],
      [
        U,
        [
          $,
          yi
        ],
        [
          F,
          bn
        ]
      ],
      [
        /(g watch r)/i
      ],
      [
        U,
        [
          $,
          yo
        ],
        [
          F,
          bn
        ]
      ],
      [
        /droid.+; (wt63?0{2,3})\)/i
      ],
      [
        U,
        [
          $,
          Zs
        ],
        [
          F,
          bn
        ]
      ],
      [
        /droid.+; (glass) \d/i
      ],
      [
        U,
        [
          $,
          Tr
        ],
        [
          F,
          mo
        ]
      ],
      [
        /(pico) ([\w ]+) os\d/i
      ],
      [
        $,
        U,
        [
          F,
          mo
        ]
      ],
      [
        /(quest( \d| pro)?s?).+vr/i
      ],
      [
        U,
        [
          $,
          Qs
        ],
        [
          F,
          mo
        ]
      ],
      [
        /mobile vr; rv.+firefox/i
      ],
      [
        [
          F,
          mo
        ]
      ],
      [
        /(tesla)(?: qtcarbrowser|\/[-\w\.]+)/i
      ],
      [
        $,
        [
          F,
          _i
        ]
      ],
      [
        /(aeobc)\b/i
      ],
      [
        U,
        [
          $,
          wo
        ],
        [
          F,
          _i
        ]
      ],
      [
        /(homepod).+mac os/i
      ],
      [
        U,
        [
          $,
          Gr
        ],
        [
          F,
          _i
        ]
      ],
      [
        /windows iot/i
      ],
      [
        [
          F,
          _i
        ]
      ],
      [
        /droid.+; ([\w- ]+) (4k|android|smart|google)[- ]?tv/i
      ],
      [
        U,
        [
          F,
          ht
        ]
      ],
      [
        /\b((4k|android|smart|opera)[- ]?tv|tv; rv:|large screen[\w ]+safari)\b/i
      ],
      [
        [
          F,
          ht
        ]
      ],
      [
        /droid .+?; ([^;]+?)(?: bui|; wv\)|\) applew|; hmsc).+?(mobile|vr|\d) safari/i
      ],
      [
        U,
        [
          F,
          cn,
          {
            mobile: "Mobile",
            xr: "VR",
            "*": Ve
          }
        ]
      ],
      [
        /\b((tablet|tab)[;\/]|focus\/\d(?!.+mobile))/i
      ],
      [
        [
          F,
          Ve
        ]
      ],
      [
        /(phone|mobile(?:[;\/]| [ \w\/\.]*safari)|pda(?=.+windows ce))/i
      ],
      [
        [
          F,
          Ae
        ]
      ],
      [
        /droid .+?; ([\w\. -]+)( bui|\))/i
      ],
      [
        U,
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
          Mo + "HTML"
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
          cn,
          Pc
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
          cn,
          Pc
        ],
        [
          W,
          Aa
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
          Zn + " Android"
        ]
      ],
      [
        /fuchsia.*crkey\/([\d\.]+)/i
      ],
      [
        z,
        [
          W,
          Zn + " Fuchsia"
        ]
      ],
      [
        /crkey\/([\d\.]+).*devicetype\/smartspeaker/i
      ],
      [
        z,
        [
          W,
          Zn + " SmartSpeaker"
        ]
      ],
      [
        /linux.*crkey\/([\d\.]+)/i
      ],
      [
        z,
        [
          W,
          Zn + " Linux"
        ]
      ],
      [
        /crkey\/([\d\.]+)/i
      ],
      [
        z,
        [
          W,
          Zn
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
          Ic
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
          bi + " OS"
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
          cn,
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
  }, bo = (function() {
    var e = {
      init: {},
      isIgnore: {},
      isIgnoreRgx: {},
      toString: {}
    };
    return jn.call(e.init, [
      [
        Wt,
        [
          W,
          z,
          Yi,
          F
        ]
      ],
      [
        Wn,
        [
          Lt
        ]
      ],
      [
        Tn,
        [
          F,
          U,
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
    ]), jn.call(e.isIgnore, [
      [
        Wt,
        [
          z,
          Yi
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
    ]), jn.call(e.isIgnoreRgx, [
      [
        Wt,
        / ?browser$/i
      ],
      [
        Kt,
        / ?os$/i
      ]
    ]), jn.call(e.toString, [
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
          Lt
        ]
      ],
      [
        Tn,
        [
          $,
          U
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
  })(), mb = function(e, t) {
    var n = bo.init[t], r = bo.isIgnore[t] || 0, l = bo.isIgnoreRgx[t] || 0, c = bo.toString[t] || 0;
    function f() {
      jn.call(this, n);
    }
    return f.prototype.getItem = function() {
      return e;
    }, f.prototype.withClientHints = function() {
      return Rr ? Rr.getHighEntropyValues(Qf).then(function(h) {
        return e.setCH(new eh(h, false)).parseCH().get();
      }) : e.parseCH().get();
    }, f.prototype.withFeatureCheck = function() {
      return e.detectFeature().get();
    }, t != ri && (f.prototype.is = function(h) {
      var p = false;
      for (var v in this) if (this.hasOwnProperty(v) && !Ra(r, v) && ar(l ? oi(l, this[v]) : this[v]) == ar(l ? oi(l, h) : h)) {
        if (p = true, h != ut.UNDEFINED) break;
      } else if (h == ut.UNDEFINED && p) {
        p = !p;
        break;
      }
      return p;
    }, f.prototype.toString = function() {
      var h = ni;
      for (var p in c) typeof this[c[p]] !== ut.UNDEFINED && (h += (h ? " " : ni) + this[c[p]]);
      return h || ut.UNDEFINED;
    }), f.prototype.then = function(h) {
      var p = this, v = function() {
        for (var T in p) p.hasOwnProperty(T) && (this[T] = p[T]);
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
  function eh(e, t) {
    if (e = e || {}, jn.call(this, Qf), t) jn.call(this, [
      [
        rl,
        ea(e[gr])
      ],
      [
        il,
        ea(e[sb])
      ],
      [
        Ae,
        /\?1/.test(e[ub])
      ],
      [
        U,
        Ii(e[fb])
      ],
      [
        ii,
        Ii(e[Zf])
      ],
      [
        ol,
        Ii(e[hb])
      ],
      [
        Lt,
        Ii(e[ab])
      ],
      [
        Ar,
        ea(e[cb])
      ],
      [
        _s,
        Ii(e[lb])
      ]
    ]);
    else for (var n in e) this.hasOwnProperty(n) && typeof e[n] !== ut.UNDEFINED && (this[n] = e[n]);
  }
  function fr(e, t, n, r) {
    return jn.call(this, [
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
        mb(this, e)
      ]
    ]), this;
  }
  fr.prototype.get = function(e) {
    return e ? this.data.hasOwnProperty(e) ? this.data[e] : void 0 : this.data;
  };
  fr.prototype.set = function(e, t) {
    return this.data[e] = t, this;
  };
  fr.prototype.setCH = function(e) {
    return this.uaCH = e, this;
  };
  fr.prototype.detectFeature = function() {
    if (Ut && Ut.userAgent == this.ua) switch (this.itemType) {
      case Wt:
        Ut.brave && typeof Ut.brave.isBrave == ut.FUNCTION && this.set(W, "Brave");
        break;
      case Tn:
        !this.get(F) && Rr && Rr[Ae] && this.set(F, Ae), this.get(U) == "Macintosh" && Ut && typeof Ut.standalone !== ut.UNDEFINED && Ut.maxTouchPoints && Ut.maxTouchPoints > 2 && this.set(U, "iPad").set(F, Ve);
        break;
      case Kt:
        !this.get(W) && Rr && Rr[ii] && this.set(W, Rr[ii]);
        break;
      case ri:
        var e = this.data, t = function(n) {
          return e[n].getItem().detectFeature().get();
        };
        this.set(Wt, t(Wt)).set(Wn, t(Wn)).set(Tn, t(Tn)).set(un, t(un)).set(Kt, t(Kt));
    }
    return this;
  };
  fr.prototype.parseUA = function() {
    switch (this.itemType != ri && Na.call(this.data, this.ua, this.rgxMap), this.itemType) {
      case Wt:
        this.set(Yi, Ma(this.get(z)));
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
  fr.prototype.parseCH = function() {
    var e = this.uaCH, t = this.rgxMap;
    switch (this.itemType) {
      case Wt:
      case un:
        var n = e[il] || e[rl], r;
        if (n) for (var l = 0; l < n.length; l++) {
          var c = n[l].brand || n[l], f = n[l].version;
          this.itemType == Wt && !/not.a.brand/i.test(c) && (!r || /Chrom/.test(r) && c != Mc || r == Mo && /WebView2/.test(c)) && (c = cn(c, gb), r = this.get(W), r && !/Chrom/.test(r) && /Chrom/.test(c) || this.set(W, c).set(z, f).set(Yi, Ma(f)), r = c), this.itemType == un && c == Mc && this.set(z, f);
        }
        break;
      case Wn:
        var h = e[Lt];
        h && (h && e[_s] == "64" && (h += "64"), Na.call(this.data, h + ";", t));
        break;
      case Tn:
        if (e[Ae] && this.set(F, Ae), e[U] && (this.set(U, e[U]), !this.get(F) || !this.get($))) {
          var p = {};
          Na.call(p, "droid 9; " + e[U] + ")", t), !this.get(F) && p.type && this.set(F, p.type), !this.get($) && p.vendor && this.set($, p.vendor);
        }
        if (e[Ar]) {
          var v;
          if (typeof e[Ar] != "string") for (var g = 0; !v && g < e[Ar].length; ) v = cn(e[Ar][g++], Cc);
          else v = cn(e[Ar], Cc);
          this.set(F, v);
        }
        break;
      case Kt:
        var T = e[ii];
        if (T) {
          var M = e[ol];
          T == Aa && (M = parseInt(Ma(M), 10) >= 13 ? "11" : "10"), this.set(W, T).set(z, M);
        }
        this.get(W) == Aa && e[U] == "Xbox" && this.set(W, "Xbox").set(z, void 0);
        break;
      case ri:
        var R = this.data, j = function(L) {
          return R[L].getItem().setCH(e).parseCH().get();
        };
        this.set(Wt, j(Wt)).set(Wn, j(Wn)).set(Tn, j(Tn)).set(un, j(un)).set(Kt, j(Kt));
    }
    return this;
  };
  Hn = function(e, t, n) {
    if (typeof e === ut.OBJECT ? (qo(e, true) ? (typeof t === ut.OBJECT && (n = t), t = e) : (n = e, t = void 0), e = void 0) : typeof e === ut.STRING && !qo(t, true) && (n = t, t = void 0), n) if (typeof n.append === ut.FUNCTION) {
      var r = {};
      n.forEach(function(g, T) {
        r[String(T).toLowerCase()] = g;
      }), n = r;
    } else {
      var l = {};
      for (var c in n) n.hasOwnProperty(c) && (l[String(c).toLowerCase()] = n[c]);
      n = l;
    }
    if (!(this instanceof Hn)) return new Hn(e, t, n).getResult();
    var f = typeof e === ut.STRING ? e : n && n[bc] ? n[bc] : Ut && Ut.userAgent ? Ut.userAgent : ni, h = new eh(n, true), p = t ? pb(kc, t) : kc, v = function(g) {
      return g == ri ? function() {
        return new fr(g, f, p, h).set("ua", f).set(Wt, this.getBrowser()).set(Wn, this.getCPU()).set(Tn, this.getDevice()).set(un, this.getEngine()).set(Kt, this.getOS()).get();
      } : function() {
        return new fr(g, f, p[g], h).parseUA().get();
      };
    };
    return jn.call(this, [
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
        v(Tn)
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
        v(ri)
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
          return no(g) && (f = Yo(g, ob)), this;
        }
      ]
    ]).setUA(f), this;
  };
  Hn.VERSION = ib;
  Hn.BROWSER = Os([
    W,
    z,
    Yi,
    F
  ]);
  Hn.CPU = Os([
    Lt
  ]);
  Hn.DEVICE = Os([
    U,
    $,
    F,
    Ro,
    Ae,
    ht,
    Ve,
    bn,
    _i
  ]);
  Hn.ENGINE = Hn.OS = Os([
    W,
    z
  ]);
  var $e = ((e) => (e.TAURI = "tauri", e.WEB = "web", e.MOBILE_WEB = "mobile_web", e.UNKNOWN = "unknown", e))($e || {});
  class wb {
    constructor() {
      __publicField(this, "parser");
      const t = typeof navigator < "u" ? navigator.userAgent : "";
      this.parser = new Hn(t);
    }
    detectEnvironment() {
      return this.isTauriEnvironment() ? $e.TAURI : this.parser.getDevice().type === "mobile" ? $e.MOBILE_WEB : $e.WEB;
    }
    isTauriEnvironment() {
      return false;
    }
    getPlatformContext() {
      const t = this.detectEnvironment(), n = this.parser.getDevice(), r = this.parser.getBrowser(), l = this.parser.getOS();
      return {
        environment: t,
        capabilities: this.getPlatformCapabilities(t),
        configuration: this.getDefaultConfiguration(t),
        userAgent: typeof navigator < "u" ? navigator.userAgent : "",
        isMobile: n.type === "mobile",
        isTablet: n.type === "tablet",
        browser: r.name || void 0,
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
        return !t.environment || !t.capabilities ? N(new ct("Invalid platform detection results")) : (console.info("[PlatformDetector] Platform detected:", {
          environment: t.environment,
          isMobile: t.isMobile,
          isTablet: t.isTablet,
          browser: t.browser,
          os: t.os
        }), D(true));
      } catch (t) {
        return N(new ct("Platform detection failed", void 0, t));
      }
    }
  }
  const sl = new wb();
  pv = function() {
    return sl.getPlatformContext();
  };
  function yb(e, t, n, r) {
    if (typeof t == "function" ? e !== t || !r : !t.has(e)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
    return n === "m" ? r : n === "a" ? r.call(e) : r ? r.value : t.get(e);
  }
  function bb(e, t, n, r, l) {
    if (typeof t == "function" ? e !== t || true : !t.has(e)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
    return t.set(e, n), n;
  }
  var No;
  function vb(e, t = false) {
    return window.__TAURI_INTERNALS__.transformCallback(e, t);
  }
  async function mt(e, t = {}, n) {
    return window.__TAURI_INTERNALS__.invoke(e, t, n);
  }
  class Eb {
    get rid() {
      return yb(this, No, "f");
    }
    constructor(t) {
      No.set(this, void 0), bb(this, No, t);
    }
    async close() {
      return mt("plugin:resources|close", {
        rid: this.rid
      });
    }
  }
  No = /* @__PURE__ */ new WeakMap();
  var Lc;
  (function(e) {
    e.WINDOW_RESIZED = "tauri://resize", e.WINDOW_MOVED = "tauri://move", e.WINDOW_CLOSE_REQUESTED = "tauri://close-requested", e.WINDOW_DESTROYED = "tauri://destroyed", e.WINDOW_FOCUS = "tauri://focus", e.WINDOW_BLUR = "tauri://blur", e.WINDOW_SCALE_FACTOR_CHANGED = "tauri://scale-change", e.WINDOW_THEME_CHANGED = "tauri://theme-changed", e.WINDOW_CREATED = "tauri://window-created", e.WEBVIEW_CREATED = "tauri://webview-created", e.DRAG_ENTER = "tauri://drag-enter", e.DRAG_OVER = "tauri://drag-over", e.DRAG_DROP = "tauri://drag-drop", e.DRAG_LEAVE = "tauri://drag-leave";
  })(Lc || (Lc = {}));
  async function Ib(e, t) {
    window.__TAURI_EVENT_PLUGIN_INTERNALS__.unregisterListener(e, t), await mt("plugin:event|unlisten", {
      event: e,
      eventId: t
    });
  }
  async function Dc(e, t, n) {
    var r;
    const l = (r = void 0) !== null && r !== void 0 ? r : {
      kind: "Any"
    };
    return mt("plugin:event|listen", {
      event: e,
      target: l,
      handler: vb(t)
    }).then((c) => async () => Ib(e, c));
  }
  async function Tb(e, t) {
    return await Ko.load(e, t);
  }
  class Ko extends Eb {
    constructor(t) {
      super(t);
    }
    static async load(t, n) {
      const r = await mt("plugin:store|load", {
        path: t,
        options: n
      });
      return new Ko(r);
    }
    static async get(t) {
      return await mt("plugin:store|get_store", {
        path: t
      }).then((n) => n ? new Ko(n) : null);
    }
    async set(t, n) {
      await mt("plugin:store|set", {
        rid: this.rid,
        key: t,
        value: n
      });
    }
    async get(t) {
      const [n, r] = await mt("plugin:store|get", {
        rid: this.rid,
        key: t
      });
      return r ? n : void 0;
    }
    async has(t) {
      return await mt("plugin:store|has", {
        rid: this.rid,
        key: t
      });
    }
    async delete(t) {
      return await mt("plugin:store|delete", {
        rid: this.rid,
        key: t
      });
    }
    async clear() {
      await mt("plugin:store|clear", {
        rid: this.rid
      });
    }
    async reset() {
      await mt("plugin:store|reset", {
        rid: this.rid
      });
    }
    async keys() {
      return await mt("plugin:store|keys", {
        rid: this.rid
      });
    }
    async values() {
      return await mt("plugin:store|values", {
        rid: this.rid
      });
    }
    async entries() {
      return await mt("plugin:store|entries", {
        rid: this.rid
      });
    }
    async length() {
      return await mt("plugin:store|length", {
        rid: this.rid
      });
    }
    async reload(t) {
      await mt("plugin:store|reload", {
        rid: this.rid,
        ...t
      });
    }
    async save() {
      await mt("plugin:store|save", {
        rid: this.rid
      });
    }
    async onKeyChange(t, n) {
      return await Dc("store://change", (r) => {
        r.payload.resourceId === this.rid && r.payload.key === t && n(r.payload.exists ? r.payload.value : void 0);
      });
    }
    async onChange(t) {
      return await Dc("store://change", (n) => {
        n.payload.resourceId === this.rid && t(n.payload.key, n.payload.exists ? n.payload.value : void 0);
      });
    }
  }
  class rt extends ui {
    constructor(t, n, r) {
      super(t, r);
      __publicField(this, "domain", to.STORAGE);
      this.code = n;
    }
  }
  var Qe = ((e) => (e.INITIALIZATION_FAILED = "INITIALIZATION_FAILED", e.NOT_INITIALIZED = "NOT_INITIALIZED", e.SET_FAILED = "SET_FAILED", e.GET_FAILED = "GET_FAILED", e.SAVE_FAILED = "SAVE_FAILED", e.EXPORT_FAILED = "EXPORT_FAILED", e.CLEAR_FAILED = "CLEAR_FAILED", e.REMOVE_FAILED = "REMOVE_FAILED", e))(Qe || {});
  class vt extends ui {
    constructor(t, n, r) {
      super(t, r);
      __publicField(this, "domain", to.GEOLOCATION);
      this.code = n;
    }
  }
  var lt = ((e) => (e.INITIALIZATION_FAILED = "INITIALIZATION_FAILED", e.NOT_INITIALIZED = "NOT_INITIALIZED", e.PERMISSION_DENIED = "PERMISSION_DENIED", e.POSITION_UNAVAILABLE = "POSITION_UNAVAILABLE", e.TIMEOUT = "TIMEOUT", e.UNSUPPORTED = "UNSUPPORTED", e.WATCH_FAILED = "WATCH_FAILED", e.CLEAR_WATCH_FAILED = "CLEAR_WATCH_FAILED", e))(lt || {});
  class Br extends ui {
    constructor(t, n, r) {
      super(t, r);
      __publicField(this, "domain", to.GENERIC);
      this.code = n;
    }
  }
  var _r = ((e) => (e.DETECTION_FAILED = "DETECTION_FAILED", e.INVALID_CONTEXT = "INVALID_CONTEXT", e.UNSUPPORTED_PLATFORM = "UNSUPPORTED_PLATFORM", e))(_r || {});
  class Sb {
    constructor(t = "user-data.json") {
      __publicField(this, "store", null);
      __publicField(this, "initialized", false);
      __publicField(this, "storePath");
      this.storePath = t;
    }
    async init() {
      if (this.initialized) return D(void 0);
      try {
        return this.store = await Tb(this.storePath, {
          autoSave: false,
          defaults: {}
        }), this.initialized = true, D(void 0);
      } catch (t) {
        return N(new rt("Failed to initialize Tauri storage", Qe.INITIALIZATION_FAILED, t));
      }
    }
    async set(t, n) {
      if (!this.store) return N(new rt("Tauri store not initialized", Qe.NOT_INITIALIZED));
      try {
        return await this.store.set(t, n), D(void 0);
      } catch (r) {
        return N(new rt(`Failed to set value for key: ${t}`, Qe.SET_FAILED, r));
      }
    }
    async get(t) {
      if (!this.store) return N(new rt("Tauri store not initialized", Qe.NOT_INITIALIZED));
      try {
        const n = await this.store.get(t);
        return D(n ?? null);
      } catch (n) {
        return N(new rt(`Failed to get value for key: ${t}`, Qe.GET_FAILED, n));
      }
    }
    async save() {
      if (!this.store) return N(new rt("Tauri store not initialized", Qe.NOT_INITIALIZED));
      try {
        return await this.store.save(), D(void 0);
      } catch (t) {
        return N(new rt("Failed to save store", Qe.SAVE_FAILED, t));
      }
    }
    async exportToJson() {
      if (!this.store) return N(new rt("Tauri store not initialized", Qe.NOT_INITIALIZED));
      try {
        const t = await this.store.keys(), n = {};
        for (const r of t) {
          const l = await this.store.get(r);
          n[r] = l;
        }
        return D(JSON.stringify(n, null, 2));
      } catch (t) {
        return N(new rt("Failed to export data to JSON", Qe.EXPORT_FAILED, t));
      }
    }
    async clear() {
      if (!this.store) return N(new rt("Tauri store not initialized", Qe.NOT_INITIALIZED));
      try {
        const t = await this.store.keys();
        for (const n of t) await this.store.delete(n);
        return D(void 0);
      } catch (t) {
        return N(new rt("Failed to clear store", Qe.CLEAR_FAILED, t));
      }
    }
    async remove(t) {
      if (!this.store) return N(new rt("Tauri store not initialized", Qe.NOT_INITIALIZED));
      try {
        return await this.store.delete(t), D(void 0);
      } catch (n) {
        return N(new rt(`Failed to remove key: ${t}`, Qe.REMOVE_FAILED, n));
      }
    }
  }
  let _b, Ob;
  ta = {
    theme: "system",
    interfaceLanguage: "system",
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
  gv = [
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
  _b = "trackmaker_settings";
  Ob = typeof window < "u" && window.__TAURI_INTERNALS__ !== void 0;
  function Bt(e) {
    try {
      if (typeof localStorage > "u") return ta[e];
      const t = localStorage.getItem(_b);
      if (t !== null) return JSON.parse(t)[e] ?? ta[e];
    } catch {
    }
    return ta[e];
  }
  function Fc() {
    return Bt("debugMode");
  }
  function al() {
    return Bt("gpsUpdateInterval");
  }
  function Ab() {
    return Bt("enableKalmanFilter");
  }
  mv = function() {
    return Bt("mapZoomLevel");
  };
  wv = function() {
    return Bt("keepScreenOn");
  };
  yv = function() {
    return Bt("mapTileServer");
  };
  bv = function() {
    return Bt("showCompass");
  };
  vv = function() {
    return Bt("autoRecenterTimeout");
  };
  Ev = function() {
    return Bt("customMapTileUrl");
  };
  Iv = function() {
    return Bt("mapTilerApiKey");
  };
  class Rb {
    constructor(t = "trackmaker-db", n = "user-data") {
      __publicField(this, "db", null);
      __publicField(this, "initialized", false);
      __publicField(this, "dbName");
      __publicField(this, "storeName");
      this.dbName = t, this.storeName = n;
    }
    getMaxCacheSize() {
      try {
        return Bt("maxCacheSize") || 100;
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
        const r = this.db.transaction(this.storeName, "readwrite"), c = r.objectStore(this.storeName).index("timestamp").openCursor(null, "prev"), f = 100;
        let h = 0;
        c.onsuccess = (p) => {
          const v = p.target.result;
          v && h < f && (v.delete(), h++, v.continue());
        }, r.oncomplete = () => t(), r.onerror = () => n(new Error("Failed to prune cache"));
      });
    }
    async init() {
      if (this.initialized) return D(void 0);
      try {
        return this.db = await this.openDatabase(), this.initialized = true, D(void 0);
      } catch (t) {
        return N(new rt("Failed to initialize Web storage", Qe.INITIALIZATION_FAILED, t));
      }
    }
    openDatabase() {
      return new Promise((t, n) => {
        const r = indexedDB.open(this.dbName, 1);
        r.onupgradeneeded = (l) => {
          const c = l.target.result;
          c.objectStoreNames.contains(this.storeName) || c.createObjectStore(this.storeName);
        }, r.onsuccess = (l) => {
          t(l.target.result);
        }, r.onerror = (l) => {
          n(l.target.error ?? Error("Failed to open database"));
        };
      });
    }
    async set(t, n) {
      if (!this.db) return N(new rt("Database not initialized", Qe.NOT_INITIALIZED));
      try {
        return await this.shouldPruneCache() && await this.pruneCache(), await this.executeTransaction("readwrite", (r) => new Promise((l, c) => {
          const f = r.put(qf(n), t);
          f.onsuccess = () => l(), f.onerror = () => c(new Error("Failed to set value"));
        })), D(void 0);
      } catch (r) {
        return N(new rt(`Failed to set value for key: ${t}`, Qe.SET_FAILED, r));
      }
    }
    async get(t) {
      if (!this.db) return N(new rt("Database not initialized", Qe.NOT_INITIALIZED));
      try {
        const n = await this.executeTransaction("readonly", (r) => new Promise((l, c) => {
          const f = r.get(t);
          f.onsuccess = () => l(f.result), f.onerror = () => c(new Error("Failed to get value"));
        }));
        return D(n);
      } catch (n) {
        return N(new rt(`Failed to get value for key: ${t}`, Qe.GET_FAILED, n));
      }
    }
    async save() {
      return D(void 0);
    }
    async exportToJson() {
      if (!this.db) return N(new rt("Database not initialized", Qe.NOT_INITIALIZED));
      try {
        const t = await this.executeTransaction("readonly", (n) => new Promise((r, l) => {
          const c = n.getAll();
          c.onsuccess = () => {
            const h = c.result.reduce((p, v, g) => (p[g] = v, p), {});
            r(h);
          }, c.onerror = () => l(new Error("Failed to export data"));
        }));
        return D(JSON.stringify(t, null, 2));
      } catch (t) {
        return N(new rt("Failed to export data to JSON", Qe.EXPORT_FAILED, t));
      }
    }
    async clear() {
      if (!this.db) return N(new rt("Database not initialized", Qe.NOT_INITIALIZED));
      try {
        return await this.executeTransaction("readwrite", (t) => new Promise((n, r) => {
          const l = t.clear();
          l.onsuccess = () => n(), l.onerror = () => r(new Error("Failed to clear store"));
        })), D(void 0);
      } catch (t) {
        return N(new rt("Failed to clear store", Qe.CLEAR_FAILED, t));
      }
    }
    async remove(t) {
      if (!this.db) return N(new rt("Database not initialized", Qe.NOT_INITIALIZED));
      try {
        return await this.executeTransaction("readwrite", (n) => new Promise((r, l) => {
          const c = n.delete(t);
          c.onsuccess = () => r(), c.onerror = () => l(new Error("Failed to remove key"));
        })), D(void 0);
      } catch (n) {
        return N(new rt(`Failed to remove key: ${t}`, Qe.REMOVE_FAILED, n));
      }
    }
    executeTransaction(t, n) {
      return new Promise((r, l) => {
        if (!this.db) {
          l(new Error("Database not initialized"));
          return;
        }
        const c = this.db.transaction(this.storeName, t), f = c.objectStore(this.storeName);
        n(f).then(r).catch(l), c.onerror = () => {
          l(new Error("Transaction failed"));
        };
      });
    }
  }
  class Mb {
    constructor(t = "get_geolocation") {
      __publicField(this, "initialized", false);
      __publicField(this, "tauriHandlerName");
      __publicField(this, "watchCallbacks", /* @__PURE__ */ new Map());
      this.tauriHandlerName = t;
    }
    async init(t) {
      if (this.initialized) return D(void 0);
      const n = await this.getPermissionStatus();
      if (n.isErr()) return N(n.error);
      if (n.value === "prompt" && t) {
        if (!await t(n.value, "permission.location.prompt")) return N(new vt("Geolocation permission denied", lt.PERMISSION_DENIED));
        const l = await this.getPermissionStatus();
        if (l.isErr()) return N(l.error);
        if (l.value === "denied") return N(new vt("Geolocation permission denied", lt.PERMISSION_DENIED));
      }
      try {
        return await this.injectTauriProvider(), this.initialized = true, D(void 0);
      } catch (r) {
        return N(new vt("Failed to initialize Tauri geolocation provider", lt.INITIALIZATION_FAILED, r));
      }
    }
    async injectTauriProvider() {
      if (navigator.geolocation.injected) return;
      const t = new Nb(this.tauriHandlerName);
      navigator.geolocation.getCurrentPosition = t.getCurrentPosition.bind(t), navigator.geolocation.watchPosition = t.watchPosition.bind(t), navigator.geolocation.clearWatch = t.clearWatch.bind(t), navigator.geolocation.injected = true;
    }
    async getPermissionStatus() {
      try {
        if (!navigator.permissions) return await this.fallbackPermissionCheck();
        const t = await navigator.permissions.query({
          name: "geolocation"
        });
        return D(t.state);
      } catch (t) {
        return N(new vt("Failed to get permission status", lt.PERMISSION_DENIED, t));
      }
    }
    async fallbackPermissionCheck() {
      return new Promise((t) => {
        navigator.geolocation.getCurrentPosition(() => t(D("granted")), (n) => {
          n.code === n.PERMISSION_DENIED ? t(D("denied")) : t(D("prompt"));
        }, {
          timeout: 5e3,
          maximumAge: 1 / 0,
          enableHighAccuracy: false
        });
      });
    }
    async requestPermission() {
      try {
        return await this.getCurrentPosition(), D("granted");
      } catch (t) {
        return this.isPositionError(t) && t.code === t.PERMISSION_DENIED ? D("denied") : N(new vt("Failed to request permission", lt.PERMISSION_DENIED, t));
      }
    }
    async getCurrentPosition() {
      try {
        const t = await this.locateTauri();
        return D(this.convertToGeolocationPosition(t));
      } catch (t) {
        return N(new vt("Failed to get current position", lt.POSITION_UNAVAILABLE, t));
      }
    }
    async locateTauri() {
      return await mt(this.tauriHandlerName);
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
        timestamp: performance.now()
      };
      return {
        ...r,
        toJSON: () => JSON.stringify(r)
      };
    }
    async watchPosition(t, n) {
      try {
        const r = al(), l = (n == null ? void 0 : n.highFrequency) ?? false, c = window.setInterval(async () => {
          try {
            const f = await this.getCurrentPosition();
            f.isOk() && t(f.value);
          } catch (f) {
            console.error("Error in watch position:", f);
          }
        }, l ? 100 : r);
        return this.watchCallbacks.set(c, c), D(c);
      } catch (r) {
        return N(new vt("Failed to start watching position", lt.WATCH_FAILED, r));
      }
    }
    clearWatch(t) {
      try {
        return this.watchCallbacks.has(t) && (clearInterval(t), this.watchCallbacks.delete(t)), D(void 0);
      } catch (n) {
        return N(new vt("Failed to clear watch", lt.CLEAR_WATCH_FAILED, n));
      }
    }
    isSupported() {
      return false;
    }
    isPositionError(t) {
      return typeof t == "object" && t !== null && "code" in t && "message" in t && typeof t.code == "number";
    }
  }
  class Nb {
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
      const l = al(), c = (r == null ? void 0 : r.highFrequency) ?? false;
      return window.setInterval(() => {
        this.getTauriPosition().then(t).catch((h) => {
          n == null ? void 0 : n(this.createPositionError(h));
        });
      }, c ? 100 : l);
    }
    clearWatch(t) {
      clearInterval(t);
    }
    async getTauriPosition() {
      const t = await mt(this.tauriHandlerName), n = {
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
        timestamp: performance.now()
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
  class Pb {
    constructor() {
      __publicField(this, "initialized", false);
      __publicField(this, "compatibilityModeWatches", /* @__PURE__ */ new Map());
      __publicField(this, "compatibilityModeCallbacks", /* @__PURE__ */ new Map());
      __publicField(this, "lastCompatibilityPosition", null);
      __publicField(this, "compatibilityIntervalId", null);
    }
    async init(t) {
      if (this.initialized) return D(void 0);
      if (!this.isSupported()) return N(new vt("Geolocation is not supported by this browser", lt.UNSUPPORTED));
      const n = await this.getPermissionStatus();
      if (n.isErr()) return N(n.error);
      if (n.value === "prompt" && t) {
        if (!await t(n.value, "permission.location.prompt")) return N(new vt("Geolocation permission denied", lt.PERMISSION_DENIED));
        const l = await this.getPermissionStatus();
        if (l.isErr()) return N(l.error);
        if (l.value === "denied") return N(new vt("Geolocation permission denied", lt.PERMISSION_DENIED));
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
        return N(new vt("Failed to get permission status", lt.PERMISSION_DENIED, t));
      }
    }
    async fallbackPermissionCheck() {
      return new Promise((t) => {
        navigator.geolocation.getCurrentPosition(() => t(D("granted")), (n) => {
          n.code === n.PERMISSION_DENIED ? t(D("denied")) : t(D("prompt"));
        }, {
          timeout: 5e3,
          maximumAge: 1 / 0,
          enableHighAccuracy: false
        });
      });
    }
    async requestPermission() {
      try {
        return (await this.getCurrentPosition()).isOk() ? D("granted") : D("denied");
      } catch (t) {
        return this.isPositionError(t) ? t.code === t.PERMISSION_DENIED ? D("denied") : D("prompt") : N(new vt("Failed to request permission", lt.PERMISSION_DENIED, t));
      }
    }
    async getCurrentPosition() {
      if (!this.initialized) {
        const t = await this.init();
        if (t.isErr()) return N(t.error);
      }
      return new Promise((t) => {
        navigator.geolocation.getCurrentPosition((n) => {
          t(D(n));
        }, (n) => {
          let r;
          const l = n.message;
          switch (n.code) {
            case n.PERMISSION_DENIED:
              r = lt.PERMISSION_DENIED;
              break;
            case n.POSITION_UNAVAILABLE:
              r = lt.POSITION_UNAVAILABLE;
              break;
            case n.TIMEOUT:
              r = lt.TIMEOUT;
              break;
            default:
              r = lt.POSITION_UNAVAILABLE;
          }
          t(N(new vt(l, r, new Error(n.message))));
        }, {
          enableHighAccuracy: true,
          timeout: 3e4,
          maximumAge: 1e4
        });
      });
    }
    async watchPosition(t, n) {
      if (!this.initialized) {
        const f = await this.init();
        if (f.isErr()) return N(f.error);
      }
      const r = al(), l = Bt("watchCompatibilityMode"), c = (n == null ? void 0 : n.highFrequency) ?? false;
      if (l || c) {
        c ? console.log("[Geolocation] High frequency mode enabled") : console.info("[Geolocation] Using compatibility mode for position watch");
        try {
          const f = Date.now();
          return this.compatibilityModeCallbacks.set(f, t), this.compatibilityIntervalId === null && (this.compatibilityIntervalId = window.setInterval(async () => {
            const h = await this.getCurrentPosition();
            if (h.isOk()) {
              const p = h.value, v = {
                lat: p.coords.latitude,
                lng: p.coords.longitude,
                acc: p.coords.accuracy
              };
              if (this.lastCompatibilityPosition && this.lastCompatibilityPosition.lat === v.lat && this.lastCompatibilityPosition.lng === v.lng && this.lastCompatibilityPosition.acc === v.acc) return;
              this.lastCompatibilityPosition = v;
              for (const g of this.compatibilityModeCallbacks.values()) try {
                g(p);
              } catch (T) {
                console.error("[Geolocation] Callback error:", T);
              }
            }
          }, c ? 100 : r)), this.compatibilityModeWatches.set(f, this.compatibilityIntervalId), D(f);
        } catch (f) {
          return N(new vt("Failed to start watching position (compatibility mode)", lt.WATCH_FAILED, f));
        }
      }
      try {
        const f = navigator.geolocation.watchPosition(t, (h) => {
          console.error("Geolocation watch error:", h);
        }, {
          enableHighAccuracy: true,
          timeout: 3e4,
          maximumAge: c ? 0 : r
        });
        return D(f);
      } catch (f) {
        return N(new vt("Failed to start watching position", lt.WATCH_FAILED, f));
      }
    }
    clearWatch(t) {
      try {
        return this.compatibilityModeWatches.has(t) ? (this.compatibilityModeCallbacks.delete(t), this.compatibilityModeWatches.delete(t), this.compatibilityModeCallbacks.size === 0 && this.compatibilityIntervalId !== null && (window.clearInterval(this.compatibilityIntervalId), this.compatibilityIntervalId = null, this.lastCompatibilityPosition = null)) : navigator.geolocation.clearWatch(t), D(void 0);
      } catch (n) {
        return N(new vt("Failed to clear watch", lt.CLEAR_WATCH_FAILED, n));
      }
    }
    isSupported() {
      return "geolocation" in navigator;
    }
    isPositionError(t) {
      return typeof t == "object" && t !== null && "code" in t && "message" in t && typeof t.code == "number";
    }
  }
  class xc {
    constructor() {
      __publicField(this, "initialized", false);
      __publicField(this, "isWatching", false);
      __publicField(this, "listeners", /* @__PURE__ */ new Map());
      __publicField(this, "nextListenerId", 0);
      __publicField(this, "lastReading", null);
      __publicField(this, "boundHandleOrientationEvent");
      this.boundHandleOrientationEvent = this.handleOrientationEvent.bind(this);
    }
    async init(t) {
      if (this.initialized) return D(void 0);
      if (!await this.isSupported()) return N(new ct("Device orientation is not supported by this browser"));
      const r = await this.getPermissionStatus();
      if (r.isErr()) return N(r.error);
      if (r.value === "prompt" && t) {
        await t(r.value);
        const l = await this.getPermissionStatus();
        if (l.isErr()) return N(l.error);
        if (l.value === "denied") return N(new ct("Device orientation permission denied"));
      }
      return this.initialized = true, D(void 0);
    }
    async getPermissionStatus() {
      try {
        if (typeof DeviceOrientationEvent < "u" && typeof DeviceOrientationEvent.requestPermission == "function") {
          const t = await DeviceOrientationEvent.requestPermission();
          return D(t === "granted" ? "granted" : t === "denied" ? "denied" : "prompt");
        }
        return D("granted");
      } catch {
        return D("prompt");
      }
    }
    async start() {
      if (!this.initialized) {
        const t = await this.init();
        if (t.isErr()) return N(t.error);
      }
      if (this.isWatching) return D(void 0);
      try {
        return window.addEventListener("deviceorientation", this.boundHandleOrientationEvent, true), this.isWatching = true, D(void 0);
      } catch (t) {
        return N(new ct("Failed to start device orientation", void 0, t));
      }
    }
    stop() {
      if (!this.isWatching) return D(void 0);
      try {
        return window.removeEventListener("deviceorientation", this.boundHandleOrientationEvent, true), this.isWatching = false, this.lastReading = null, D(void 0);
      } catch (t) {
        return N(new ct("Failed to stop device orientation", void 0, t));
      }
    }
    async getCurrentOrientation() {
      if (!this.initialized) {
        const t = await this.init();
        if (t.isErr()) return N(t.error);
      }
      return D(this.lastReading);
    }
    onOrientationChange(t) {
      const n = this.nextListenerId++;
      return this.listeners.set(n, t), !this.isWatching && this.listeners.size === 1 && this.start().catch(console.error), this.lastReading && t(this.lastReading), n;
    }
    removeEventListener(t) {
      return this.listeners.delete(t) && this.listeners.size === 0 && this.stop(), D(void 0);
    }
    async isSupported() {
      if (!("DeviceOrientationEvent" in window)) return false;
      try {
        const t = new Promise((r) => {
          const l = (c) => {
            (c.alpha !== null || c.beta !== null || c.gamma !== null) && (window.removeEventListener("deviceorientation", l), r(true));
          };
          window.addEventListener("deviceorientation", l);
        }), n = new Promise((r, l) => {
          setTimeout(() => l(new Error("Device orientation detection timeout")), 1e3);
        });
        return await Promise.race([
          t,
          n
        ]);
      } catch {
        return false;
      }
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
      for (const r of this.listeners.values()) try {
        r(n);
      } catch (l) {
        console.error("Error in device orientation callback:", l);
      }
    }
  }
  Cb = function(e) {
    return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
  };
  function th(e) {
    if (Object.prototype.hasOwnProperty.call(e, "__esModule")) return e;
    var t = e.default;
    if (typeof t == "function") {
      var n = function r() {
        var l = false;
        try {
          l = this instanceof r;
        } catch {
        }
        return l ? Reflect.construct(t, arguments, this.constructor) : t.apply(this, arguments);
      };
      n.prototype = t.prototype;
    } else n = {};
    return Object.defineProperty(n, "__esModule", {
      value: true
    }), Object.keys(e).forEach(function(r) {
      var l = Object.getOwnPropertyDescriptor(e, r);
      Object.defineProperty(n, r, l.get ? l : {
        enumerable: true,
        get: function() {
          return e[r];
        }
      });
    }), n;
  }
  var Ne = {};
  const kb = Object.prototype.toString;
  function Ki(e) {
    const t = kb.call(e);
    return t.endsWith("Array]") && !t.includes("Big");
  }
  const Lb = Object.freeze(Object.defineProperty({
    __proto__: null,
    isAnyArray: Ki
  }, Symbol.toStringTag, {
    value: "Module"
  })), Db = th(Lb);
  function Fb(e) {
    var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
    if (!Ki(e)) throw new TypeError("input must be an array");
    if (e.length === 0) throw new TypeError("input must not be empty");
    var n = t.fromIndex, r = n === void 0 ? 0 : n, l = t.toIndex, c = l === void 0 ? e.length : l;
    if (r < 0 || r >= e.length || !Number.isInteger(r)) throw new Error("fromIndex must be a positive integer smaller than length");
    if (c <= r || c > e.length || !Number.isInteger(c)) throw new Error("toIndex must be an integer greater than fromIndex and at most equal to length");
    for (var f = e[r], h = r + 1; h < c; h++) e[h] > f && (f = e[h]);
    return f;
  }
  function xb(e) {
    var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
    if (!Ki(e)) throw new TypeError("input must be an array");
    if (e.length === 0) throw new TypeError("input must not be empty");
    var n = t.fromIndex, r = n === void 0 ? 0 : n, l = t.toIndex, c = l === void 0 ? e.length : l;
    if (r < 0 || r >= e.length || !Number.isInteger(r)) throw new Error("fromIndex must be a positive integer smaller than length");
    if (c <= r || c > e.length || !Number.isInteger(c)) throw new Error("toIndex must be an integer greater than fromIndex and at most equal to length");
    for (var f = e[r], h = r + 1; h < c; h++) e[h] < f && (f = e[h]);
    return f;
  }
  function jb(e) {
    var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
    if (Ki(e)) {
      if (e.length === 0) throw new TypeError("input must not be empty");
    } else throw new TypeError("input must be an array");
    var n;
    if (t.output !== void 0) {
      if (!Ki(t.output)) throw new TypeError("output option must be an array if specified");
      n = t.output;
    } else n = new Array(e.length);
    var r = xb(e), l = Fb(e);
    if (r === l) throw new RangeError("minimum and maximum input values are equal. Cannot rescale a constant array");
    var c = t.min, f = c === void 0 ? t.autoMinMax ? r : 0 : c, h = t.max, p = h === void 0 ? t.autoMinMax ? l : 1 : h;
    if (f >= p) throw new RangeError("min option must be smaller than max option");
    for (var v = (p - f) / (l - r), g = 0; g < e.length; g++) n[g] = (e[g] - r) * v + f;
    return n;
  }
  const Ub = Object.freeze(Object.defineProperty({
    __proto__: null,
    default: jb
  }, Symbol.toStringTag, {
    value: "Module"
  })), Gb = th(Ub);
  var jc;
  function Wb() {
    var _oe_instances, e_fn, _e2;
    if (jc) return Ne;
    jc = 1, Object.defineProperty(Ne, "__esModule", {
      value: true
    });
    var e = Db, t = Gb;
    const n = " ".repeat(2), r = " ".repeat(4);
    function l() {
      return c(this);
    }
    function c(d, o = {}) {
      const { maxRows: s = 15, maxColumns: i = 10, maxNumSize: a = 8, padMinus: u = "auto" } = o;
      return `${d.constructor.name} {
${n}[
${r}${f(d, s, i, a, u)}
${n}]
${n}rows: ${d.rows}
${n}columns: ${d.columns}
}`;
    }
    function f(d, o, s, i, a) {
      const { rows: u, columns: m } = d, w = Math.min(u, o), y = Math.min(m, s), b = [];
      if (a === "auto") {
        a = false;
        e: for (let A = 0; A < w; A++) for (let E = 0; E < y; E++) if (d.get(A, E) < 0) {
          a = true;
          break e;
        }
      }
      for (let A = 0; A < w; A++) {
        let E = [];
        for (let C = 0; C < y; C++) E.push(h(d.get(A, C), i, a));
        b.push(`${E.join(" ")}`);
      }
      return y !== m && (b[b.length - 1] += ` ... ${m - s} more columns`), w !== u && b.push(`... ${u - o} more rows`), b.join(`
${r}`);
    }
    function h(d, o, s) {
      return (d >= 0 && s ? ` ${p(d, o - 1)}` : p(d, o)).padEnd(o);
    }
    function p(d, o) {
      let s = d.toString();
      if (s.length <= o) return s;
      let i = d.toFixed(o);
      if (i.length > o && (i = d.toFixed(Math.max(0, o - (i.length - o)))), i.length <= o && !i.startsWith("0.000") && !i.startsWith("-0.000")) return i;
      let a = d.toExponential(o);
      return a.length > o && (a = d.toExponential(Math.max(0, o - (a.length - o)))), a.slice(0);
    }
    function v(d, o) {
      d.prototype.add = function(i) {
        return typeof i == "number" ? this.addS(i) : this.addM(i);
      }, d.prototype.addS = function(i) {
        for (let a = 0; a < this.rows; a++) for (let u = 0; u < this.columns; u++) this.set(a, u, this.get(a, u) + i);
        return this;
      }, d.prototype.addM = function(i) {
        if (i = o.checkMatrix(i), this.rows !== i.rows || this.columns !== i.columns) throw new RangeError("Matrices dimensions must be equal");
        for (let a = 0; a < this.rows; a++) for (let u = 0; u < this.columns; u++) this.set(a, u, this.get(a, u) + i.get(a, u));
        return this;
      }, d.add = function(i, a) {
        return new o(i).add(a);
      }, d.prototype.sub = function(i) {
        return typeof i == "number" ? this.subS(i) : this.subM(i);
      }, d.prototype.subS = function(i) {
        for (let a = 0; a < this.rows; a++) for (let u = 0; u < this.columns; u++) this.set(a, u, this.get(a, u) - i);
        return this;
      }, d.prototype.subM = function(i) {
        if (i = o.checkMatrix(i), this.rows !== i.rows || this.columns !== i.columns) throw new RangeError("Matrices dimensions must be equal");
        for (let a = 0; a < this.rows; a++) for (let u = 0; u < this.columns; u++) this.set(a, u, this.get(a, u) - i.get(a, u));
        return this;
      }, d.sub = function(i, a) {
        return new o(i).sub(a);
      }, d.prototype.subtract = d.prototype.sub, d.prototype.subtractS = d.prototype.subS, d.prototype.subtractM = d.prototype.subM, d.subtract = d.sub, d.prototype.mul = function(i) {
        return typeof i == "number" ? this.mulS(i) : this.mulM(i);
      }, d.prototype.mulS = function(i) {
        for (let a = 0; a < this.rows; a++) for (let u = 0; u < this.columns; u++) this.set(a, u, this.get(a, u) * i);
        return this;
      }, d.prototype.mulM = function(i) {
        if (i = o.checkMatrix(i), this.rows !== i.rows || this.columns !== i.columns) throw new RangeError("Matrices dimensions must be equal");
        for (let a = 0; a < this.rows; a++) for (let u = 0; u < this.columns; u++) this.set(a, u, this.get(a, u) * i.get(a, u));
        return this;
      }, d.mul = function(i, a) {
        return new o(i).mul(a);
      }, d.prototype.multiply = d.prototype.mul, d.prototype.multiplyS = d.prototype.mulS, d.prototype.multiplyM = d.prototype.mulM, d.multiply = d.mul, d.prototype.div = function(i) {
        return typeof i == "number" ? this.divS(i) : this.divM(i);
      }, d.prototype.divS = function(i) {
        for (let a = 0; a < this.rows; a++) for (let u = 0; u < this.columns; u++) this.set(a, u, this.get(a, u) / i);
        return this;
      }, d.prototype.divM = function(i) {
        if (i = o.checkMatrix(i), this.rows !== i.rows || this.columns !== i.columns) throw new RangeError("Matrices dimensions must be equal");
        for (let a = 0; a < this.rows; a++) for (let u = 0; u < this.columns; u++) this.set(a, u, this.get(a, u) / i.get(a, u));
        return this;
      }, d.div = function(i, a) {
        return new o(i).div(a);
      }, d.prototype.divide = d.prototype.div, d.prototype.divideS = d.prototype.divS, d.prototype.divideM = d.prototype.divM, d.divide = d.div, d.prototype.mod = function(i) {
        return typeof i == "number" ? this.modS(i) : this.modM(i);
      }, d.prototype.modS = function(i) {
        for (let a = 0; a < this.rows; a++) for (let u = 0; u < this.columns; u++) this.set(a, u, this.get(a, u) % i);
        return this;
      }, d.prototype.modM = function(i) {
        if (i = o.checkMatrix(i), this.rows !== i.rows || this.columns !== i.columns) throw new RangeError("Matrices dimensions must be equal");
        for (let a = 0; a < this.rows; a++) for (let u = 0; u < this.columns; u++) this.set(a, u, this.get(a, u) % i.get(a, u));
        return this;
      }, d.mod = function(i, a) {
        return new o(i).mod(a);
      }, d.prototype.modulus = d.prototype.mod, d.prototype.modulusS = d.prototype.modS, d.prototype.modulusM = d.prototype.modM, d.modulus = d.mod, d.prototype.and = function(i) {
        return typeof i == "number" ? this.andS(i) : this.andM(i);
      }, d.prototype.andS = function(i) {
        for (let a = 0; a < this.rows; a++) for (let u = 0; u < this.columns; u++) this.set(a, u, this.get(a, u) & i);
        return this;
      }, d.prototype.andM = function(i) {
        if (i = o.checkMatrix(i), this.rows !== i.rows || this.columns !== i.columns) throw new RangeError("Matrices dimensions must be equal");
        for (let a = 0; a < this.rows; a++) for (let u = 0; u < this.columns; u++) this.set(a, u, this.get(a, u) & i.get(a, u));
        return this;
      }, d.and = function(i, a) {
        return new o(i).and(a);
      }, d.prototype.or = function(i) {
        return typeof i == "number" ? this.orS(i) : this.orM(i);
      }, d.prototype.orS = function(i) {
        for (let a = 0; a < this.rows; a++) for (let u = 0; u < this.columns; u++) this.set(a, u, this.get(a, u) | i);
        return this;
      }, d.prototype.orM = function(i) {
        if (i = o.checkMatrix(i), this.rows !== i.rows || this.columns !== i.columns) throw new RangeError("Matrices dimensions must be equal");
        for (let a = 0; a < this.rows; a++) for (let u = 0; u < this.columns; u++) this.set(a, u, this.get(a, u) | i.get(a, u));
        return this;
      }, d.or = function(i, a) {
        return new o(i).or(a);
      }, d.prototype.xor = function(i) {
        return typeof i == "number" ? this.xorS(i) : this.xorM(i);
      }, d.prototype.xorS = function(i) {
        for (let a = 0; a < this.rows; a++) for (let u = 0; u < this.columns; u++) this.set(a, u, this.get(a, u) ^ i);
        return this;
      }, d.prototype.xorM = function(i) {
        if (i = o.checkMatrix(i), this.rows !== i.rows || this.columns !== i.columns) throw new RangeError("Matrices dimensions must be equal");
        for (let a = 0; a < this.rows; a++) for (let u = 0; u < this.columns; u++) this.set(a, u, this.get(a, u) ^ i.get(a, u));
        return this;
      }, d.xor = function(i, a) {
        return new o(i).xor(a);
      }, d.prototype.leftShift = function(i) {
        return typeof i == "number" ? this.leftShiftS(i) : this.leftShiftM(i);
      }, d.prototype.leftShiftS = function(i) {
        for (let a = 0; a < this.rows; a++) for (let u = 0; u < this.columns; u++) this.set(a, u, this.get(a, u) << i);
        return this;
      }, d.prototype.leftShiftM = function(i) {
        if (i = o.checkMatrix(i), this.rows !== i.rows || this.columns !== i.columns) throw new RangeError("Matrices dimensions must be equal");
        for (let a = 0; a < this.rows; a++) for (let u = 0; u < this.columns; u++) this.set(a, u, this.get(a, u) << i.get(a, u));
        return this;
      }, d.leftShift = function(i, a) {
        return new o(i).leftShift(a);
      }, d.prototype.signPropagatingRightShift = function(i) {
        return typeof i == "number" ? this.signPropagatingRightShiftS(i) : this.signPropagatingRightShiftM(i);
      }, d.prototype.signPropagatingRightShiftS = function(i) {
        for (let a = 0; a < this.rows; a++) for (let u = 0; u < this.columns; u++) this.set(a, u, this.get(a, u) >> i);
        return this;
      }, d.prototype.signPropagatingRightShiftM = function(i) {
        if (i = o.checkMatrix(i), this.rows !== i.rows || this.columns !== i.columns) throw new RangeError("Matrices dimensions must be equal");
        for (let a = 0; a < this.rows; a++) for (let u = 0; u < this.columns; u++) this.set(a, u, this.get(a, u) >> i.get(a, u));
        return this;
      }, d.signPropagatingRightShift = function(i, a) {
        return new o(i).signPropagatingRightShift(a);
      }, d.prototype.rightShift = function(i) {
        return typeof i == "number" ? this.rightShiftS(i) : this.rightShiftM(i);
      }, d.prototype.rightShiftS = function(i) {
        for (let a = 0; a < this.rows; a++) for (let u = 0; u < this.columns; u++) this.set(a, u, this.get(a, u) >>> i);
        return this;
      }, d.prototype.rightShiftM = function(i) {
        if (i = o.checkMatrix(i), this.rows !== i.rows || this.columns !== i.columns) throw new RangeError("Matrices dimensions must be equal");
        for (let a = 0; a < this.rows; a++) for (let u = 0; u < this.columns; u++) this.set(a, u, this.get(a, u) >>> i.get(a, u));
        return this;
      }, d.rightShift = function(i, a) {
        return new o(i).rightShift(a);
      }, d.prototype.zeroFillRightShift = d.prototype.rightShift, d.prototype.zeroFillRightShiftS = d.prototype.rightShiftS, d.prototype.zeroFillRightShiftM = d.prototype.rightShiftM, d.zeroFillRightShift = d.rightShift, d.prototype.not = function() {
        for (let i = 0; i < this.rows; i++) for (let a = 0; a < this.columns; a++) this.set(i, a, ~this.get(i, a));
        return this;
      }, d.not = function(i) {
        return new o(i).not();
      }, d.prototype.abs = function() {
        for (let i = 0; i < this.rows; i++) for (let a = 0; a < this.columns; a++) this.set(i, a, Math.abs(this.get(i, a)));
        return this;
      }, d.abs = function(i) {
        return new o(i).abs();
      }, d.prototype.acos = function() {
        for (let i = 0; i < this.rows; i++) for (let a = 0; a < this.columns; a++) this.set(i, a, Math.acos(this.get(i, a)));
        return this;
      }, d.acos = function(i) {
        return new o(i).acos();
      }, d.prototype.acosh = function() {
        for (let i = 0; i < this.rows; i++) for (let a = 0; a < this.columns; a++) this.set(i, a, Math.acosh(this.get(i, a)));
        return this;
      }, d.acosh = function(i) {
        return new o(i).acosh();
      }, d.prototype.asin = function() {
        for (let i = 0; i < this.rows; i++) for (let a = 0; a < this.columns; a++) this.set(i, a, Math.asin(this.get(i, a)));
        return this;
      }, d.asin = function(i) {
        return new o(i).asin();
      }, d.prototype.asinh = function() {
        for (let i = 0; i < this.rows; i++) for (let a = 0; a < this.columns; a++) this.set(i, a, Math.asinh(this.get(i, a)));
        return this;
      }, d.asinh = function(i) {
        return new o(i).asinh();
      }, d.prototype.atan = function() {
        for (let i = 0; i < this.rows; i++) for (let a = 0; a < this.columns; a++) this.set(i, a, Math.atan(this.get(i, a)));
        return this;
      }, d.atan = function(i) {
        return new o(i).atan();
      }, d.prototype.atanh = function() {
        for (let i = 0; i < this.rows; i++) for (let a = 0; a < this.columns; a++) this.set(i, a, Math.atanh(this.get(i, a)));
        return this;
      }, d.atanh = function(i) {
        return new o(i).atanh();
      }, d.prototype.cbrt = function() {
        for (let i = 0; i < this.rows; i++) for (let a = 0; a < this.columns; a++) this.set(i, a, Math.cbrt(this.get(i, a)));
        return this;
      }, d.cbrt = function(i) {
        return new o(i).cbrt();
      }, d.prototype.ceil = function() {
        for (let i = 0; i < this.rows; i++) for (let a = 0; a < this.columns; a++) this.set(i, a, Math.ceil(this.get(i, a)));
        return this;
      }, d.ceil = function(i) {
        return new o(i).ceil();
      }, d.prototype.clz32 = function() {
        for (let i = 0; i < this.rows; i++) for (let a = 0; a < this.columns; a++) this.set(i, a, Math.clz32(this.get(i, a)));
        return this;
      }, d.clz32 = function(i) {
        return new o(i).clz32();
      }, d.prototype.cos = function() {
        for (let i = 0; i < this.rows; i++) for (let a = 0; a < this.columns; a++) this.set(i, a, Math.cos(this.get(i, a)));
        return this;
      }, d.cos = function(i) {
        return new o(i).cos();
      }, d.prototype.cosh = function() {
        for (let i = 0; i < this.rows; i++) for (let a = 0; a < this.columns; a++) this.set(i, a, Math.cosh(this.get(i, a)));
        return this;
      }, d.cosh = function(i) {
        return new o(i).cosh();
      }, d.prototype.exp = function() {
        for (let i = 0; i < this.rows; i++) for (let a = 0; a < this.columns; a++) this.set(i, a, Math.exp(this.get(i, a)));
        return this;
      }, d.exp = function(i) {
        return new o(i).exp();
      }, d.prototype.expm1 = function() {
        for (let i = 0; i < this.rows; i++) for (let a = 0; a < this.columns; a++) this.set(i, a, Math.expm1(this.get(i, a)));
        return this;
      }, d.expm1 = function(i) {
        return new o(i).expm1();
      }, d.prototype.floor = function() {
        for (let i = 0; i < this.rows; i++) for (let a = 0; a < this.columns; a++) this.set(i, a, Math.floor(this.get(i, a)));
        return this;
      }, d.floor = function(i) {
        return new o(i).floor();
      }, d.prototype.fround = function() {
        for (let i = 0; i < this.rows; i++) for (let a = 0; a < this.columns; a++) this.set(i, a, Math.fround(this.get(i, a)));
        return this;
      }, d.fround = function(i) {
        return new o(i).fround();
      }, d.prototype.log = function() {
        for (let i = 0; i < this.rows; i++) for (let a = 0; a < this.columns; a++) this.set(i, a, Math.log(this.get(i, a)));
        return this;
      }, d.log = function(i) {
        return new o(i).log();
      }, d.prototype.log1p = function() {
        for (let i = 0; i < this.rows; i++) for (let a = 0; a < this.columns; a++) this.set(i, a, Math.log1p(this.get(i, a)));
        return this;
      }, d.log1p = function(i) {
        return new o(i).log1p();
      }, d.prototype.log10 = function() {
        for (let i = 0; i < this.rows; i++) for (let a = 0; a < this.columns; a++) this.set(i, a, Math.log10(this.get(i, a)));
        return this;
      }, d.log10 = function(i) {
        return new o(i).log10();
      }, d.prototype.log2 = function() {
        for (let i = 0; i < this.rows; i++) for (let a = 0; a < this.columns; a++) this.set(i, a, Math.log2(this.get(i, a)));
        return this;
      }, d.log2 = function(i) {
        return new o(i).log2();
      }, d.prototype.round = function() {
        for (let i = 0; i < this.rows; i++) for (let a = 0; a < this.columns; a++) this.set(i, a, Math.round(this.get(i, a)));
        return this;
      }, d.round = function(i) {
        return new o(i).round();
      }, d.prototype.sign = function() {
        for (let i = 0; i < this.rows; i++) for (let a = 0; a < this.columns; a++) this.set(i, a, Math.sign(this.get(i, a)));
        return this;
      }, d.sign = function(i) {
        return new o(i).sign();
      }, d.prototype.sin = function() {
        for (let i = 0; i < this.rows; i++) for (let a = 0; a < this.columns; a++) this.set(i, a, Math.sin(this.get(i, a)));
        return this;
      }, d.sin = function(i) {
        return new o(i).sin();
      }, d.prototype.sinh = function() {
        for (let i = 0; i < this.rows; i++) for (let a = 0; a < this.columns; a++) this.set(i, a, Math.sinh(this.get(i, a)));
        return this;
      }, d.sinh = function(i) {
        return new o(i).sinh();
      }, d.prototype.sqrt = function() {
        for (let i = 0; i < this.rows; i++) for (let a = 0; a < this.columns; a++) this.set(i, a, Math.sqrt(this.get(i, a)));
        return this;
      }, d.sqrt = function(i) {
        return new o(i).sqrt();
      }, d.prototype.tan = function() {
        for (let i = 0; i < this.rows; i++) for (let a = 0; a < this.columns; a++) this.set(i, a, Math.tan(this.get(i, a)));
        return this;
      }, d.tan = function(i) {
        return new o(i).tan();
      }, d.prototype.tanh = function() {
        for (let i = 0; i < this.rows; i++) for (let a = 0; a < this.columns; a++) this.set(i, a, Math.tanh(this.get(i, a)));
        return this;
      }, d.tanh = function(i) {
        return new o(i).tanh();
      }, d.prototype.trunc = function() {
        for (let i = 0; i < this.rows; i++) for (let a = 0; a < this.columns; a++) this.set(i, a, Math.trunc(this.get(i, a)));
        return this;
      }, d.trunc = function(i) {
        return new o(i).trunc();
      }, d.pow = function(i, a) {
        return new o(i).pow(a);
      }, d.prototype.pow = function(i) {
        return typeof i == "number" ? this.powS(i) : this.powM(i);
      }, d.prototype.powS = function(i) {
        for (let a = 0; a < this.rows; a++) for (let u = 0; u < this.columns; u++) this.set(a, u, this.get(a, u) ** i);
        return this;
      }, d.prototype.powM = function(i) {
        if (i = o.checkMatrix(i), this.rows !== i.rows || this.columns !== i.columns) throw new RangeError("Matrices dimensions must be equal");
        for (let a = 0; a < this.rows; a++) for (let u = 0; u < this.columns; u++) this.set(a, u, this.get(a, u) ** i.get(a, u));
        return this;
      };
    }
    function g(d, o, s) {
      let i = s ? d.rows : d.rows - 1;
      if (o < 0 || o > i) throw new RangeError("Row index out of range");
    }
    function T(d, o, s) {
      let i = s ? d.columns : d.columns - 1;
      if (o < 0 || o > i) throw new RangeError("Column index out of range");
    }
    function M(d, o) {
      if (o.to1DArray && (o = o.to1DArray()), o.length !== d.columns) throw new RangeError("vector size must be the same as the number of columns");
      return o;
    }
    function R(d, o) {
      if (o.to1DArray && (o = o.to1DArray()), o.length !== d.rows) throw new RangeError("vector size must be the same as the number of rows");
      return o;
    }
    function j(d, o) {
      if (!e.isAnyArray(o)) throw new TypeError("row indices must be an array");
      for (let s = 0; s < o.length; s++) if (o[s] < 0 || o[s] >= d.rows) throw new RangeError("row indices are out of range");
    }
    function L(d, o) {
      if (!e.isAnyArray(o)) throw new TypeError("column indices must be an array");
      for (let s = 0; s < o.length; s++) if (o[s] < 0 || o[s] >= d.columns) throw new RangeError("column indices are out of range");
    }
    function he(d, o, s, i, a) {
      if (arguments.length !== 5) throw new RangeError("expected 4 arguments");
      if (K("startRow", o), K("endRow", s), K("startColumn", i), K("endColumn", a), o > s || i > a || o < 0 || o >= d.rows || s < 0 || s >= d.rows || i < 0 || i >= d.columns || a < 0 || a >= d.columns) throw new RangeError("Submatrix indices are out of range");
    }
    function re(d, o = 0) {
      let s = [];
      for (let i = 0; i < d; i++) s.push(o);
      return s;
    }
    function K(d, o) {
      if (typeof o != "number") throw new TypeError(`${d} must be a number`);
    }
    function ee(d) {
      if (d.isEmpty()) throw new Error("Empty matrix has no elements to index");
    }
    function G(d) {
      let o = re(d.rows);
      for (let s = 0; s < d.rows; ++s) for (let i = 0; i < d.columns; ++i) o[s] += d.get(s, i);
      return o;
    }
    function ue(d) {
      let o = re(d.columns);
      for (let s = 0; s < d.rows; ++s) for (let i = 0; i < d.columns; ++i) o[i] += d.get(s, i);
      return o;
    }
    function ge(d) {
      let o = 0;
      for (let s = 0; s < d.rows; s++) for (let i = 0; i < d.columns; i++) o += d.get(s, i);
      return o;
    }
    function ie(d) {
      let o = re(d.rows, 1);
      for (let s = 0; s < d.rows; ++s) for (let i = 0; i < d.columns; ++i) o[s] *= d.get(s, i);
      return o;
    }
    function fe(d) {
      let o = re(d.columns, 1);
      for (let s = 0; s < d.rows; ++s) for (let i = 0; i < d.columns; ++i) o[i] *= d.get(s, i);
      return o;
    }
    function te(d) {
      let o = 1;
      for (let s = 0; s < d.rows; s++) for (let i = 0; i < d.columns; i++) o *= d.get(s, i);
      return o;
    }
    function me(d, o, s) {
      const i = d.rows, a = d.columns, u = [];
      for (let m = 0; m < i; m++) {
        let w = 0, y = 0, b = 0;
        for (let A = 0; A < a; A++) b = d.get(m, A) - s[m], w += b, y += b * b;
        o ? u.push((y - w * w / a) / (a - 1)) : u.push((y - w * w / a) / a);
      }
      return u;
    }
    function Re(d, o, s) {
      const i = d.rows, a = d.columns, u = [];
      for (let m = 0; m < a; m++) {
        let w = 0, y = 0, b = 0;
        for (let A = 0; A < i; A++) b = d.get(A, m) - s[m], w += b, y += b * b;
        o ? u.push((y - w * w / i) / (i - 1)) : u.push((y - w * w / i) / i);
      }
      return u;
    }
    function de(d, o, s) {
      const i = d.rows, a = d.columns, u = i * a;
      let m = 0, w = 0, y = 0;
      for (let b = 0; b < i; b++) for (let A = 0; A < a; A++) y = d.get(b, A) - s, m += y, w += y * y;
      return o ? (w - m * m / u) / (u - 1) : (w - m * m / u) / u;
    }
    function Ue(d, o) {
      for (let s = 0; s < d.rows; s++) for (let i = 0; i < d.columns; i++) d.set(s, i, d.get(s, i) - o[s]);
    }
    function ft(d, o) {
      for (let s = 0; s < d.rows; s++) for (let i = 0; i < d.columns; i++) d.set(s, i, d.get(s, i) - o[i]);
    }
    function $t(d, o) {
      for (let s = 0; s < d.rows; s++) for (let i = 0; i < d.columns; i++) d.set(s, i, d.get(s, i) - o);
    }
    function Ye(d) {
      const o = [];
      for (let s = 0; s < d.rows; s++) {
        let i = 0;
        for (let a = 0; a < d.columns; a++) i += d.get(s, a) ** 2 / (d.columns - 1);
        o.push(Math.sqrt(i));
      }
      return o;
    }
    function Pe(d, o) {
      for (let s = 0; s < d.rows; s++) for (let i = 0; i < d.columns; i++) d.set(s, i, d.get(s, i) / o[s]);
    }
    function ze(d) {
      const o = [];
      for (let s = 0; s < d.columns; s++) {
        let i = 0;
        for (let a = 0; a < d.rows; a++) i += d.get(a, s) ** 2 / (d.rows - 1);
        o.push(Math.sqrt(i));
      }
      return o;
    }
    function _n(d, o) {
      for (let s = 0; s < d.rows; s++) for (let i = 0; i < d.columns; i++) d.set(s, i, d.get(s, i) / o[i]);
    }
    function xr(d) {
      const o = d.size - 1;
      let s = 0;
      for (let i = 0; i < d.columns; i++) for (let a = 0; a < d.rows; a++) s += d.get(a, i) ** 2 / o;
      return Math.sqrt(s);
    }
    function On(d, o) {
      for (let s = 0; s < d.rows; s++) for (let i = 0; i < d.columns; i++) d.set(s, i, d.get(s, i) / o);
    }
    class ve {
      static from1DArray(o, s, i) {
        if (o * s !== i.length) throw new RangeError("data length does not match given dimensions");
        let u = new oe(o, s);
        for (let m = 0; m < o; m++) for (let w = 0; w < s; w++) u.set(m, w, i[m * s + w]);
        return u;
      }
      static rowVector(o) {
        let s = new oe(1, o.length);
        for (let i = 0; i < o.length; i++) s.set(0, i, o[i]);
        return s;
      }
      static columnVector(o) {
        let s = new oe(o.length, 1);
        for (let i = 0; i < o.length; i++) s.set(i, 0, o[i]);
        return s;
      }
      static zeros(o, s) {
        return new oe(o, s);
      }
      static ones(o, s) {
        return new oe(o, s).fill(1);
      }
      static rand(o, s, i = {}) {
        if (typeof i != "object") throw new TypeError("options must be an object");
        const { random: a = Math.random } = i;
        let u = new oe(o, s);
        for (let m = 0; m < o; m++) for (let w = 0; w < s; w++) u.set(m, w, a());
        return u;
      }
      static randInt(o, s, i = {}) {
        if (typeof i != "object") throw new TypeError("options must be an object");
        const { min: a = 0, max: u = 1e3, random: m = Math.random } = i;
        if (!Number.isInteger(a)) throw new TypeError("min must be an integer");
        if (!Number.isInteger(u)) throw new TypeError("max must be an integer");
        if (a >= u) throw new RangeError("min must be smaller than max");
        let w = u - a, y = new oe(o, s);
        for (let b = 0; b < o; b++) for (let A = 0; A < s; A++) {
          let E = a + Math.round(m() * w);
          y.set(b, A, E);
        }
        return y;
      }
      static eye(o, s, i) {
        s === void 0 && (s = o), i === void 0 && (i = 1);
        let a = Math.min(o, s), u = this.zeros(o, s);
        for (let m = 0; m < a; m++) u.set(m, m, i);
        return u;
      }
      static diag(o, s, i) {
        let a = o.length;
        s === void 0 && (s = a), i === void 0 && (i = s);
        let u = Math.min(a, s, i), m = this.zeros(s, i);
        for (let w = 0; w < u; w++) m.set(w, w, o[w]);
        return m;
      }
      static min(o, s) {
        o = this.checkMatrix(o), s = this.checkMatrix(s);
        let i = o.rows, a = o.columns, u = new oe(i, a);
        for (let m = 0; m < i; m++) for (let w = 0; w < a; w++) u.set(m, w, Math.min(o.get(m, w), s.get(m, w)));
        return u;
      }
      static max(o, s) {
        o = this.checkMatrix(o), s = this.checkMatrix(s);
        let i = o.rows, a = o.columns, u = new this(i, a);
        for (let m = 0; m < i; m++) for (let w = 0; w < a; w++) u.set(m, w, Math.max(o.get(m, w), s.get(m, w)));
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
        for (let s = 0; s < this.rows; s++) for (let i = 0; i < this.columns; i++) o.call(this, s, i);
        return this;
      }
      to1DArray() {
        let o = [];
        for (let s = 0; s < this.rows; s++) for (let i = 0; i < this.columns; i++) o.push(this.get(s, i));
        return o;
      }
      to2DArray() {
        let o = [];
        for (let s = 0; s < this.rows; s++) {
          o.push([]);
          for (let i = 0; i < this.columns; i++) o[s].push(this.get(s, i));
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
        let o = 0, s = 0, i = -1, a = true, u = false;
        for (; o < this.rows && a; ) {
          for (s = 0, u = false; s < this.columns && u === false; ) this.get(o, s) === 0 ? s++ : this.get(o, s) === 1 && s > i ? (u = true, i = s) : (a = false, u = true);
          o++;
        }
        return a;
      }
      isReducedEchelonForm() {
        let o = 0, s = 0, i = -1, a = true, u = false;
        for (; o < this.rows && a; ) {
          for (s = 0, u = false; s < this.columns && u === false; ) this.get(o, s) === 0 ? s++ : this.get(o, s) === 1 && s > i ? (u = true, i = s) : (a = false, u = true);
          for (let m = s + 1; m < this.rows; m++) this.get(o, m) !== 0 && (a = false);
          o++;
        }
        return a;
      }
      echelonForm() {
        let o = this.clone(), s = 0, i = 0;
        for (; s < o.rows && i < o.columns; ) {
          let a = s;
          for (let u = s; u < o.rows; u++) o.get(u, i) > o.get(a, i) && (a = u);
          if (o.get(a, i) === 0) i++;
          else {
            o.swapRows(s, a);
            let u = o.get(s, i);
            for (let m = i; m < o.columns; m++) o.set(s, m, o.get(s, m) / u);
            for (let m = s + 1; m < o.rows; m++) {
              let w = o.get(m, i) / o.get(s, i);
              o.set(m, i, 0);
              for (let y = i + 1; y < o.columns; y++) o.set(m, y, o.get(m, y) - o.get(s, y) * w);
            }
            s++, i++;
          }
        }
        return o;
      }
      reducedEchelonForm() {
        let o = this.echelonForm(), s = o.columns, i = o.rows, a = i - 1;
        for (; a >= 0; ) if (o.maxRow(a) === 0) a--;
        else {
          let u = 0, m = false;
          for (; u < i && m === false; ) o.get(a, u) === 1 ? m = true : u++;
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
        const { rows: s = 1, columns: i = 1 } = o;
        if (!Number.isInteger(s) || s <= 0) throw new TypeError("rows must be a positive integer");
        if (!Number.isInteger(i) || i <= 0) throw new TypeError("columns must be a positive integer");
        let a = new oe(this.rows * s, this.columns * i);
        for (let u = 0; u < s; u++) for (let m = 0; m < i; m++) a.setSubMatrix(this, this.rows * u, this.columns * m);
        return a;
      }
      fill(o) {
        for (let s = 0; s < this.rows; s++) for (let i = 0; i < this.columns; i++) this.set(s, i, o);
        return this;
      }
      neg() {
        return this.mulS(-1);
      }
      getRow(o) {
        g(this, o);
        let s = [];
        for (let i = 0; i < this.columns; i++) s.push(this.get(o, i));
        return s;
      }
      getRowVector(o) {
        return oe.rowVector(this.getRow(o));
      }
      setRow(o, s) {
        g(this, o), s = M(this, s);
        for (let i = 0; i < this.columns; i++) this.set(o, i, s[i]);
        return this;
      }
      swapRows(o, s) {
        g(this, o), g(this, s);
        for (let i = 0; i < this.columns; i++) {
          let a = this.get(o, i);
          this.set(o, i, this.get(s, i)), this.set(s, i, a);
        }
        return this;
      }
      getColumn(o) {
        T(this, o);
        let s = [];
        for (let i = 0; i < this.rows; i++) s.push(this.get(i, o));
        return s;
      }
      getColumnVector(o) {
        return oe.columnVector(this.getColumn(o));
      }
      setColumn(o, s) {
        T(this, o), s = R(this, s);
        for (let i = 0; i < this.rows; i++) this.set(i, o, s[i]);
        return this;
      }
      swapColumns(o, s) {
        T(this, o), T(this, s);
        for (let i = 0; i < this.rows; i++) {
          let a = this.get(i, o);
          this.set(i, o, this.get(i, s)), this.set(i, s, a);
        }
        return this;
      }
      addRowVector(o) {
        o = M(this, o);
        for (let s = 0; s < this.rows; s++) for (let i = 0; i < this.columns; i++) this.set(s, i, this.get(s, i) + o[i]);
        return this;
      }
      subRowVector(o) {
        o = M(this, o);
        for (let s = 0; s < this.rows; s++) for (let i = 0; i < this.columns; i++) this.set(s, i, this.get(s, i) - o[i]);
        return this;
      }
      mulRowVector(o) {
        o = M(this, o);
        for (let s = 0; s < this.rows; s++) for (let i = 0; i < this.columns; i++) this.set(s, i, this.get(s, i) * o[i]);
        return this;
      }
      divRowVector(o) {
        o = M(this, o);
        for (let s = 0; s < this.rows; s++) for (let i = 0; i < this.columns; i++) this.set(s, i, this.get(s, i) / o[i]);
        return this;
      }
      addColumnVector(o) {
        o = R(this, o);
        for (let s = 0; s < this.rows; s++) for (let i = 0; i < this.columns; i++) this.set(s, i, this.get(s, i) + o[s]);
        return this;
      }
      subColumnVector(o) {
        o = R(this, o);
        for (let s = 0; s < this.rows; s++) for (let i = 0; i < this.columns; i++) this.set(s, i, this.get(s, i) - o[s]);
        return this;
      }
      mulColumnVector(o) {
        o = R(this, o);
        for (let s = 0; s < this.rows; s++) for (let i = 0; i < this.columns; i++) this.set(s, i, this.get(s, i) * o[s]);
        return this;
      }
      divColumnVector(o) {
        o = R(this, o);
        for (let s = 0; s < this.rows; s++) for (let i = 0; i < this.columns; i++) this.set(s, i, this.get(s, i) / o[s]);
        return this;
      }
      mulRow(o, s) {
        g(this, o);
        for (let i = 0; i < this.columns; i++) this.set(o, i, this.get(o, i) * s);
        return this;
      }
      mulColumn(o, s) {
        T(this, o);
        for (let i = 0; i < this.rows; i++) this.set(i, o, this.get(i, o) * s);
        return this;
      }
      max(o) {
        if (this.isEmpty()) return NaN;
        switch (o) {
          case "row": {
            const s = new Array(this.rows).fill(Number.NEGATIVE_INFINITY);
            for (let i = 0; i < this.rows; i++) for (let a = 0; a < this.columns; a++) this.get(i, a) > s[i] && (s[i] = this.get(i, a));
            return s;
          }
          case "column": {
            const s = new Array(this.columns).fill(Number.NEGATIVE_INFINITY);
            for (let i = 0; i < this.rows; i++) for (let a = 0; a < this.columns; a++) this.get(i, a) > s[a] && (s[a] = this.get(i, a));
            return s;
          }
          case void 0: {
            let s = this.get(0, 0);
            for (let i = 0; i < this.rows; i++) for (let a = 0; a < this.columns; a++) this.get(i, a) > s && (s = this.get(i, a));
            return s;
          }
          default:
            throw new Error(`invalid option: ${o}`);
        }
      }
      maxIndex() {
        ee(this);
        let o = this.get(0, 0), s = [
          0,
          0
        ];
        for (let i = 0; i < this.rows; i++) for (let a = 0; a < this.columns; a++) this.get(i, a) > o && (o = this.get(i, a), s[0] = i, s[1] = a);
        return s;
      }
      min(o) {
        if (this.isEmpty()) return NaN;
        switch (o) {
          case "row": {
            const s = new Array(this.rows).fill(Number.POSITIVE_INFINITY);
            for (let i = 0; i < this.rows; i++) for (let a = 0; a < this.columns; a++) this.get(i, a) < s[i] && (s[i] = this.get(i, a));
            return s;
          }
          case "column": {
            const s = new Array(this.columns).fill(Number.POSITIVE_INFINITY);
            for (let i = 0; i < this.rows; i++) for (let a = 0; a < this.columns; a++) this.get(i, a) < s[a] && (s[a] = this.get(i, a));
            return s;
          }
          case void 0: {
            let s = this.get(0, 0);
            for (let i = 0; i < this.rows; i++) for (let a = 0; a < this.columns; a++) this.get(i, a) < s && (s = this.get(i, a));
            return s;
          }
          default:
            throw new Error(`invalid option: ${o}`);
        }
      }
      minIndex() {
        ee(this);
        let o = this.get(0, 0), s = [
          0,
          0
        ];
        for (let i = 0; i < this.rows; i++) for (let a = 0; a < this.columns; a++) this.get(i, a) < o && (o = this.get(i, a), s[0] = i, s[1] = a);
        return s;
      }
      maxRow(o) {
        if (g(this, o), this.isEmpty()) return NaN;
        let s = this.get(o, 0);
        for (let i = 1; i < this.columns; i++) this.get(o, i) > s && (s = this.get(o, i));
        return s;
      }
      maxRowIndex(o) {
        g(this, o), ee(this);
        let s = this.get(o, 0), i = [
          o,
          0
        ];
        for (let a = 1; a < this.columns; a++) this.get(o, a) > s && (s = this.get(o, a), i[1] = a);
        return i;
      }
      minRow(o) {
        if (g(this, o), this.isEmpty()) return NaN;
        let s = this.get(o, 0);
        for (let i = 1; i < this.columns; i++) this.get(o, i) < s && (s = this.get(o, i));
        return s;
      }
      minRowIndex(o) {
        g(this, o), ee(this);
        let s = this.get(o, 0), i = [
          o,
          0
        ];
        for (let a = 1; a < this.columns; a++) this.get(o, a) < s && (s = this.get(o, a), i[1] = a);
        return i;
      }
      maxColumn(o) {
        if (T(this, o), this.isEmpty()) return NaN;
        let s = this.get(0, o);
        for (let i = 1; i < this.rows; i++) this.get(i, o) > s && (s = this.get(i, o));
        return s;
      }
      maxColumnIndex(o) {
        T(this, o), ee(this);
        let s = this.get(0, o), i = [
          0,
          o
        ];
        for (let a = 1; a < this.rows; a++) this.get(a, o) > s && (s = this.get(a, o), i[0] = a);
        return i;
      }
      minColumn(o) {
        if (T(this, o), this.isEmpty()) return NaN;
        let s = this.get(0, o);
        for (let i = 1; i < this.rows; i++) this.get(i, o) < s && (s = this.get(i, o));
        return s;
      }
      minColumnIndex(o) {
        T(this, o), ee(this);
        let s = this.get(0, o), i = [
          0,
          o
        ];
        for (let a = 1; a < this.rows; a++) this.get(a, o) < s && (s = this.get(a, o), i[0] = a);
        return i;
      }
      diag() {
        let o = Math.min(this.rows, this.columns), s = [];
        for (let i = 0; i < o; i++) s.push(this.get(i, i));
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
        for (let s = 0; s < this.rows; s++) for (let i = 0; i < this.columns; i++) o += this.get(s, i), this.set(s, i, o);
        return this;
      }
      dot(o) {
        ve.isMatrix(o) && (o = o.to1DArray());
        let s = this.to1DArray();
        if (s.length !== o.length) throw new RangeError("vectors do not have the same size");
        let i = 0;
        for (let a = 0; a < s.length; a++) i += s[a] * o[a];
        return i;
      }
      mmul(o) {
        o = oe.checkMatrix(o);
        let s = this.rows, i = this.columns, a = o.columns, u = new oe(s, a), m = new Float64Array(i);
        for (let w = 0; w < a; w++) {
          for (let y = 0; y < i; y++) m[y] = o.get(y, w);
          for (let y = 0; y < s; y++) {
            let b = 0;
            for (let A = 0; A < i; A++) b += this.get(y, A) * m[A];
            u.set(y, w, b);
          }
        }
        return u;
      }
      mpow(o) {
        if (!this.isSquare()) throw new RangeError("Matrix must be square");
        if (!Number.isInteger(o) || o < 0) throw new RangeError("Exponent must be a non-negative integer");
        let s = oe.eye(this.rows), i = this;
        for (let a = o; a >= 1; a /= 2) (a & 1) !== 0 && (s = s.mmul(i)), i = i.mmul(i);
        return s;
      }
      strassen2x2(o) {
        o = oe.checkMatrix(o);
        let s = new oe(2, 2);
        const i = this.get(0, 0), a = o.get(0, 0), u = this.get(0, 1), m = o.get(0, 1), w = this.get(1, 0), y = o.get(1, 0), b = this.get(1, 1), A = o.get(1, 1), E = (i + b) * (a + A), C = (w + b) * a, Q = i * (m - A), P = b * (y - a), x = (i + u) * A, le = (w - i) * (a + m), S = (u - b) * (y + A), Z = E + P - x + S, pe = Q + x, Se = C + P, Oe = E - C + Q + le;
        return s.set(0, 0, Z), s.set(0, 1, pe), s.set(1, 0, Se), s.set(1, 1, Oe), s;
      }
      strassen3x3(o) {
        o = oe.checkMatrix(o);
        let s = new oe(3, 3);
        const i = this.get(0, 0), a = this.get(0, 1), u = this.get(0, 2), m = this.get(1, 0), w = this.get(1, 1), y = this.get(1, 2), b = this.get(2, 0), A = this.get(2, 1), E = this.get(2, 2), C = o.get(0, 0), Q = o.get(0, 1), P = o.get(0, 2), x = o.get(1, 0), le = o.get(1, 1), S = o.get(1, 2), Z = o.get(2, 0), pe = o.get(2, 1), Se = o.get(2, 2), Oe = (i + a + u - m - w - A - E) * le, et = (i - m) * (-Q + le), be = w * (-C + Q + x - le - S - Z + Se), Ee = (-i + m + w) * (C - Q + le), He = (m + w) * (-C + Q), _ = i * C, B = (-i + b + A) * (C - P + S), ce = (-i + b) * (P - S), J = (b + A) * (-C + P), tt = (i + a + u - w - y - b - A) * S, Be = A * (-C + P + x - le - S - Z + pe), Xe = (-u + A + E) * (le + Z - pe), nt = (u - E) * (le - pe), yt = u * Z, sn = (A + E) * (-Z + pe), pt = (-u + w + y) * (S + Z - Se), gn = (u - y) * (S - Se), Rn = (w + y) * (-Z + Se), Le = a * x, bt = y * pe, Vt = m * P, Ht = b * Q, gt = E * Se, bh = _ + yt + Le, vh = Oe + Ee + He + _ + Xe + yt + sn, Eh = _ + B + J + tt + yt + pt + Rn, Ih = et + be + Ee + _ + yt + pt + gn, Th = et + Ee + He + _ + bt, Sh = yt + pt + gn + Rn + Vt, _h = _ + B + ce + Be + Xe + nt + yt, Oh = Xe + nt + yt + sn + Ht, Ah = _ + B + ce + J + gt;
        return s.set(0, 0, bh), s.set(0, 1, vh), s.set(0, 2, Eh), s.set(1, 0, Ih), s.set(1, 1, Th), s.set(1, 2, Sh), s.set(2, 0, _h), s.set(2, 1, Oh), s.set(2, 2, Ah), s;
      }
      mmulStrassen(o) {
        o = oe.checkMatrix(o);
        let s = this.clone(), i = s.rows, a = s.columns, u = o.rows, m = o.columns;
        a !== u && console.warn(`Multiplying ${i} x ${a} and ${u} x ${m} matrix: dimensions do not match.`);
        function w(E, C, Q) {
          let P = E.rows, x = E.columns;
          if (P === C && x === Q) return E;
          {
            let le = ve.zeros(C, Q);
            return le = le.setSubMatrix(E, 0, 0), le;
          }
        }
        let y = Math.max(i, u), b = Math.max(a, m);
        s = w(s, y, b), o = w(o, y, b);
        function A(E, C, Q, P) {
          if (Q <= 512 || P <= 512) return E.mmul(C);
          Q % 2 === 1 && P % 2 === 1 ? (E = w(E, Q + 1, P + 1), C = w(C, Q + 1, P + 1)) : Q % 2 === 1 ? (E = w(E, Q + 1, P), C = w(C, Q + 1, P)) : P % 2 === 1 && (E = w(E, Q, P + 1), C = w(C, Q, P + 1));
          let x = parseInt(E.rows / 2, 10), le = parseInt(E.columns / 2, 10), S = E.subMatrix(0, x - 1, 0, le - 1), Z = C.subMatrix(0, x - 1, 0, le - 1), pe = E.subMatrix(0, x - 1, le, E.columns - 1), Se = C.subMatrix(0, x - 1, le, C.columns - 1), Oe = E.subMatrix(x, E.rows - 1, 0, le - 1), et = C.subMatrix(x, C.rows - 1, 0, le - 1), be = E.subMatrix(x, E.rows - 1, le, E.columns - 1), Ee = C.subMatrix(x, C.rows - 1, le, C.columns - 1), He = A(ve.add(S, be), ve.add(Z, Ee), x, le), _ = A(ve.add(Oe, be), Z, x, le), B = A(S, ve.sub(Se, Ee), x, le), ce = A(be, ve.sub(et, Z), x, le), J = A(ve.add(S, pe), Ee, x, le), tt = A(ve.sub(Oe, S), ve.add(Z, Se), x, le), Be = A(ve.sub(pe, be), ve.add(et, Ee), x, le), Xe = ve.add(He, ce);
          Xe.sub(J), Xe.add(Be);
          let nt = ve.add(B, J), yt = ve.add(_, ce), sn = ve.sub(He, _);
          sn.add(B), sn.add(tt);
          let pt = ve.zeros(2 * Xe.rows, 2 * Xe.columns);
          return pt = pt.setSubMatrix(Xe, 0, 0), pt = pt.setSubMatrix(nt, Xe.rows, 0), pt = pt.setSubMatrix(yt, 0, Xe.columns), pt = pt.setSubMatrix(sn, Xe.rows, Xe.columns), pt.subMatrix(0, Q - 1, 0, P - 1);
        }
        return A(s, o, y, b);
      }
      scaleRows(o = {}) {
        if (typeof o != "object") throw new TypeError("options must be an object");
        const { min: s = 0, max: i = 1 } = o;
        if (!Number.isFinite(s)) throw new TypeError("min must be a number");
        if (!Number.isFinite(i)) throw new TypeError("max must be a number");
        if (s >= i) throw new RangeError("min must be smaller than max");
        let a = new oe(this.rows, this.columns);
        for (let u = 0; u < this.rows; u++) {
          const m = this.getRow(u);
          m.length > 0 && t(m, {
            min: s,
            max: i,
            output: m
          }), a.setRow(u, m);
        }
        return a;
      }
      scaleColumns(o = {}) {
        if (typeof o != "object") throw new TypeError("options must be an object");
        const { min: s = 0, max: i = 1 } = o;
        if (!Number.isFinite(s)) throw new TypeError("min must be a number");
        if (!Number.isFinite(i)) throw new TypeError("max must be a number");
        if (s >= i) throw new RangeError("min must be smaller than max");
        let a = new oe(this.rows, this.columns);
        for (let u = 0; u < this.columns; u++) {
          const m = this.getColumn(u);
          m.length && t(m, {
            min: s,
            max: i,
            output: m
          }), a.setColumn(u, m);
        }
        return a;
      }
      flipRows() {
        const o = Math.ceil(this.columns / 2);
        for (let s = 0; s < this.rows; s++) for (let i = 0; i < o; i++) {
          let a = this.get(s, i), u = this.get(s, this.columns - 1 - i);
          this.set(s, i, u), this.set(s, this.columns - 1 - i, a);
        }
        return this;
      }
      flipColumns() {
        const o = Math.ceil(this.rows / 2);
        for (let s = 0; s < this.columns; s++) for (let i = 0; i < o; i++) {
          let a = this.get(i, s), u = this.get(this.rows - 1 - i, s);
          this.set(i, s, u), this.set(this.rows - 1 - i, s, a);
        }
        return this;
      }
      kroneckerProduct(o) {
        o = oe.checkMatrix(o);
        let s = this.rows, i = this.columns, a = o.rows, u = o.columns, m = new oe(s * a, i * u);
        for (let w = 0; w < s; w++) for (let y = 0; y < i; y++) for (let b = 0; b < a; b++) for (let A = 0; A < u; A++) m.set(a * w + b, u * y + A, this.get(w, y) * o.get(b, A));
        return m;
      }
      kroneckerSum(o) {
        if (o = oe.checkMatrix(o), !this.isSquare() || !o.isSquare()) throw new Error("Kronecker Sum needs two Square Matrices");
        let s = this.rows, i = o.rows, a = this.kroneckerProduct(oe.eye(i, i)), u = oe.eye(s, s).kroneckerProduct(o);
        return a.add(u);
      }
      transpose() {
        let o = new oe(this.columns, this.rows);
        for (let s = 0; s < this.rows; s++) for (let i = 0; i < this.columns; i++) o.set(i, s, this.get(s, i));
        return o;
      }
      sortRows(o = fi) {
        for (let s = 0; s < this.rows; s++) this.setRow(s, this.getRow(s).sort(o));
        return this;
      }
      sortColumns(o = fi) {
        for (let s = 0; s < this.columns; s++) this.setColumn(s, this.getColumn(s).sort(o));
        return this;
      }
      subMatrix(o, s, i, a) {
        he(this, o, s, i, a);
        let u = new oe(s - o + 1, a - i + 1);
        for (let m = o; m <= s; m++) for (let w = i; w <= a; w++) u.set(m - o, w - i, this.get(m, w));
        return u;
      }
      subMatrixRow(o, s, i) {
        if (s === void 0 && (s = 0), i === void 0 && (i = this.columns - 1), s > i || s < 0 || s >= this.columns || i < 0 || i >= this.columns) throw new RangeError("Argument out of range");
        let a = new oe(o.length, i - s + 1);
        for (let u = 0; u < o.length; u++) for (let m = s; m <= i; m++) {
          if (o[u] < 0 || o[u] >= this.rows) throw new RangeError(`Row index out of range: ${o[u]}`);
          a.set(u, m - s, this.get(o[u], m));
        }
        return a;
      }
      subMatrixColumn(o, s, i) {
        if (s === void 0 && (s = 0), i === void 0 && (i = this.rows - 1), s > i || s < 0 || s >= this.rows || i < 0 || i >= this.rows) throw new RangeError("Argument out of range");
        let a = new oe(i - s + 1, o.length);
        for (let u = 0; u < o.length; u++) for (let m = s; m <= i; m++) {
          if (o[u] < 0 || o[u] >= this.columns) throw new RangeError(`Column index out of range: ${o[u]}`);
          a.set(m - s, u, this.get(m, o[u]));
        }
        return a;
      }
      setSubMatrix(o, s, i) {
        if (o = oe.checkMatrix(o), o.isEmpty()) return this;
        let a = s + o.rows - 1, u = i + o.columns - 1;
        he(this, s, a, i, u);
        for (let m = 0; m < o.rows; m++) for (let w = 0; w < o.columns; w++) this.set(s + m, i + w, o.get(m, w));
        return this;
      }
      selection(o, s) {
        j(this, o), L(this, s);
        let i = new oe(o.length, s.length);
        for (let a = 0; a < o.length; a++) {
          let u = o[a];
          for (let m = 0; m < s.length; m++) {
            let w = s[m];
            i.set(a, m, this.get(u, w));
          }
        }
        return i;
      }
      trace() {
        let o = Math.min(this.rows, this.columns), s = 0;
        for (let i = 0; i < o; i++) s += this.get(i, i);
        return s;
      }
      clone() {
        return this.constructor.copy(this, new oe(this.rows, this.columns));
      }
      static copy(o, s) {
        for (const [i, a, u] of o.entries()) s.set(i, a, u);
        return s;
      }
      sum(o) {
        switch (o) {
          case "row":
            return G(this);
          case "column":
            return ue(this);
          case void 0:
            return ge(this);
          default:
            throw new Error(`invalid option: ${o}`);
        }
      }
      product(o) {
        switch (o) {
          case "row":
            return ie(this);
          case "column":
            return fe(this);
          case void 0:
            return te(this);
          default:
            throw new Error(`invalid option: ${o}`);
        }
      }
      mean(o) {
        const s = this.sum(o);
        switch (o) {
          case "row": {
            for (let i = 0; i < this.rows; i++) s[i] /= this.columns;
            return s;
          }
          case "column": {
            for (let i = 0; i < this.columns; i++) s[i] /= this.rows;
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
        const { unbiased: i = true, mean: a = this.mean(o) } = s;
        if (typeof i != "boolean") throw new TypeError("unbiased must be a boolean");
        switch (o) {
          case "row": {
            if (!e.isAnyArray(a)) throw new TypeError("mean must be an array");
            return me(this, i, a);
          }
          case "column": {
            if (!e.isAnyArray(a)) throw new TypeError("mean must be an array");
            return Re(this, i, a);
          }
          case void 0: {
            if (typeof a != "number") throw new TypeError("mean must be a number");
            return de(this, i, a);
          }
          default:
            throw new Error(`invalid option: ${o}`);
        }
      }
      standardDeviation(o, s) {
        typeof o == "object" && (s = o, o = void 0);
        const i = this.variance(o, s);
        if (o === void 0) return Math.sqrt(i);
        for (let a = 0; a < i.length; a++) i[a] = Math.sqrt(i[a]);
        return i;
      }
      center(o, s = {}) {
        if (typeof o == "object" && (s = o, o = void 0), typeof s != "object") throw new TypeError("options must be an object");
        const { center: i = this.mean(o) } = s;
        switch (o) {
          case "row": {
            if (!e.isAnyArray(i)) throw new TypeError("center must be an array");
            return Ue(this, i), this;
          }
          case "column": {
            if (!e.isAnyArray(i)) throw new TypeError("center must be an array");
            return ft(this, i), this;
          }
          case void 0: {
            if (typeof i != "number") throw new TypeError("center must be a number");
            return $t(this, i), this;
          }
          default:
            throw new Error(`invalid option: ${o}`);
        }
      }
      scale(o, s = {}) {
        if (typeof o == "object" && (s = o, o = void 0), typeof s != "object") throw new TypeError("options must be an object");
        let i = s.scale;
        switch (o) {
          case "row": {
            if (i === void 0) i = Ye(this);
            else if (!e.isAnyArray(i)) throw new TypeError("scale must be an array");
            return Pe(this, i), this;
          }
          case "column": {
            if (i === void 0) i = ze(this);
            else if (!e.isAnyArray(i)) throw new TypeError("scale must be an array");
            return _n(this, i), this;
          }
          case void 0: {
            if (i === void 0) i = xr(this);
            else if (typeof i != "number") throw new TypeError("scale must be a number");
            return On(this, i), this;
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
    function fi(d, o) {
      return d - o;
    }
    function Ps(d) {
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
          const i = o;
          if (o = i.length, s = o ? i[0].length : 0, typeof s != "number") throw new TypeError("Data must be a 2D array with at least one element");
          this.data = [];
          for (let a = 0; a < o; a++) {
            if (i[a].length !== s) throw new RangeError("Inconsistent array dimensions");
            if (!Ps(i[a])) throw new TypeError("Input data contains non-numeric values");
            this.data.push(Float64Array.from(i[a]));
          }
          this.rows = o, this.columns = s;
        } else throw new TypeError("First argument must be a positive number or an array");
      }
      set(o, s, i) {
        return this.data[o][s] = i, this;
      }
      get(o, s) {
        return this.data[o][s];
      }
      removeRow(o) {
        return g(this, o), this.data.splice(o, 1), this.rows -= 1, this;
      }
      addRow(o, s) {
        return s === void 0 && (s = o, o = this.rows), g(this, o, true), s = Float64Array.from(M(this, s)), this.data.splice(o, 0, s), this.rows += 1, this;
      }
      removeColumn(o) {
        T(this, o);
        for (let s = 0; s < this.rows; s++) {
          const i = new Float64Array(this.columns - 1);
          for (let a = 0; a < o; a++) i[a] = this.data[s][a];
          for (let a = o + 1; a < this.columns; a++) i[a - 1] = this.data[s][a];
          this.data[s] = i;
        }
        return this.columns -= 1, this;
      }
      addColumn(o, s) {
        typeof s > "u" && (s = o, o = this.columns), T(this, o, true), s = R(this, s);
        for (let i = 0; i < this.rows; i++) {
          const a = new Float64Array(this.columns + 1);
          let u = 0;
          for (; u < o; u++) a[u] = this.data[i][u];
          for (a[u++] = s[i]; u < this.columns + 1; u++) a[u] = this.data[i][u - 1];
          this.data[i] = a;
        }
        return this.columns += 1, this;
      }
    };
    _oe_instances = new WeakSet();
    e_fn = function(o, s) {
      if (this.data = [], Number.isInteger(s) && s >= 0) for (let i = 0; i < o; i++) this.data.push(new Float64Array(s));
      else throw new TypeError("nColumns must be a positive integer");
      this.rows = o, this.columns = s;
    };
    let oe = _oe;
    v(ve, oe);
    const _xt = class _xt extends ve {
      constructor(o) {
        super();
        __privateAdd(this, _e2);
        if (oe.isMatrix(o)) {
          if (!o.isSymmetric()) throw new TypeError("not symmetric data");
          __privateSet(this, _e2, oe.copy(o, new oe(o.rows, o.rows)));
        } else if (Number.isInteger(o) && o >= 0) __privateSet(this, _e2, new oe(o, o));
        else if (__privateSet(this, _e2, new oe(o)), !this.isSymmetric()) throw new TypeError("not symmetric data");
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
        for (const [s, i, a] of this.upperRightEntries()) o.set(s, i, a);
        return o;
      }
      toMatrix() {
        return new oe(this);
      }
      get(o, s) {
        return __privateGet(this, _e2).get(o, s);
      }
      set(o, s, i) {
        return __privateGet(this, _e2).set(o, s, i), __privateGet(this, _e2).set(s, o, i), this;
      }
      removeCross(o) {
        return __privateGet(this, _e2).removeRow(o), __privateGet(this, _e2).removeColumn(o), this;
      }
      addCross(o, s) {
        s === void 0 && (s = o, o = this.diagonalSize);
        const i = s.slice();
        return i.splice(o, 1), __privateGet(this, _e2).addRow(o, i), __privateGet(this, _e2).addColumn(o, s), this;
      }
      applyMask(o) {
        if (o.length !== this.diagonalSize) throw new RangeError("Mask size do not match with matrix size");
        const s = [];
        for (const [i, a] of o.entries()) a || s.push(i);
        s.reverse();
        for (const i of s) this.removeCross(i);
        return this;
      }
      toCompact() {
        const { diagonalSize: o } = this, s = new Array(o * (o + 1) / 2);
        for (let i = 0, a = 0, u = 0; u < s.length; u++) s[u] = this.get(a, i), ++i >= o && (i = ++a);
        return s;
      }
      static fromCompact(o) {
        const s = o.length, i = (Math.sqrt(8 * s + 1) - 1) / 2;
        if (!Number.isInteger(i)) throw new TypeError(`This array is not a compact representation of a Symmetric Matrix, ${JSON.stringify(o)}`);
        const a = new _xt(i);
        for (let u = 0, m = 0, w = 0; w < s; w++) a.set(u, m, o[w]), ++u >= i && (u = ++m);
        return a;
      }
      *upperRightEntries() {
        for (let o = 0, s = 0; o < this.diagonalSize; void 0) {
          const i = this.get(o, s);
          yield [
            o,
            s,
            i
          ], ++s >= this.diagonalSize && (s = ++o);
        }
      }
      *upperRightValues() {
        for (let o = 0, s = 0; o < this.diagonalSize; void 0) yield this.get(o, s), ++s >= this.diagonalSize && (s = ++o);
      }
    };
    _e2 = new WeakMap();
    let xt = _xt;
    xt.prototype.klassType = "SymmetricMatrix";
    class An extends xt {
      static isDistanceMatrix(o) {
        return xt.isSymmetricMatrix(o) && o.klassSubType === "DistanceMatrix";
      }
      constructor(o) {
        if (super(o), !this.isDistance()) throw new TypeError("Provided arguments do no produce a distance matrix");
      }
      set(o, s, i) {
        return o === s && (i = 0), super.set(o, s, i);
      }
      addCross(o, s) {
        return s === void 0 && (s = o, o = this.diagonalSize), s = s.slice(), s[o] = 0, super.addCross(o, s);
      }
      toSymmetricMatrix() {
        return new xt(this);
      }
      clone() {
        const o = new An(this.diagonalSize);
        for (const [s, i, a] of this.upperRightEntries()) s !== i && o.set(s, i, a);
        return o;
      }
      toCompact() {
        const { diagonalSize: o } = this, s = (o - 1) * o / 2, i = new Array(s);
        for (let a = 1, u = 0, m = 0; m < i.length; m++) i[m] = this.get(u, a), ++a >= o && (a = ++u + 1);
        return i;
      }
      static fromCompact(o) {
        const s = o.length;
        if (s === 0) return new this(0);
        const i = (Math.sqrt(8 * s + 1) + 1) / 2;
        if (!Number.isInteger(i)) throw new TypeError(`This array is not a compact representation of a DistanceMatrix, ${JSON.stringify(o)}`);
        const a = new this(i);
        for (let u = 1, m = 0, w = 0; w < s; w++) a.set(u, m, o[w]), ++u >= i && (u = ++m + 1);
        return a;
      }
    }
    An.prototype.klassSubType = "DistanceMatrix";
    class zt extends ve {
      constructor(o, s, i) {
        super(), this.matrix = o, this.rows = s, this.columns = i;
      }
    }
    class ro extends zt {
      constructor(o, s) {
        T(o, s), super(o, o.rows, 1), this.column = s;
      }
      set(o, s, i) {
        return this.matrix.set(o, this.column, i), this;
      }
      get(o) {
        return this.matrix.get(o, this.column);
      }
    }
    class mr extends zt {
      constructor(o, s) {
        L(o, s), super(o, o.rows, s.length), this.columnIndices = s;
      }
      set(o, s, i) {
        return this.matrix.set(o, this.columnIndices[s], i), this;
      }
      get(o, s) {
        return this.matrix.get(o, this.columnIndices[s]);
      }
    }
    class ul extends zt {
      constructor(o) {
        super(o, o.rows, o.columns);
      }
      set(o, s, i) {
        return this.matrix.set(o, this.columns - s - 1, i), this;
      }
      get(o, s) {
        return this.matrix.get(o, this.columns - s - 1);
      }
    }
    class I extends zt {
      constructor(o) {
        super(o, o.rows, o.columns);
      }
      set(o, s, i) {
        return this.matrix.set(this.rows - o - 1, s, i), this;
      }
      get(o, s) {
        return this.matrix.get(this.rows - o - 1, s);
      }
    }
    class O extends zt {
      constructor(o, s) {
        g(o, s), super(o, 1, o.columns), this.row = s;
      }
      set(o, s, i) {
        return this.matrix.set(this.row, s, i), this;
      }
      get(o, s) {
        return this.matrix.get(this.row, s);
      }
    }
    class k extends zt {
      constructor(o, s) {
        j(o, s), super(o, s.length, o.columns), this.rowIndices = s;
      }
      set(o, s, i) {
        return this.matrix.set(this.rowIndices[o], s, i), this;
      }
      get(o, s) {
        return this.matrix.get(this.rowIndices[o], s);
      }
    }
    class Y extends zt {
      constructor(o, s, i) {
        j(o, s), L(o, i), super(o, s.length, i.length), this.rowIndices = s, this.columnIndices = i;
      }
      set(o, s, i) {
        return this.matrix.set(this.rowIndices[o], this.columnIndices[s], i), this;
      }
      get(o, s) {
        return this.matrix.get(this.rowIndices[o], this.columnIndices[s]);
      }
    }
    class H extends zt {
      constructor(o, s, i, a, u) {
        he(o, s, i, a, u), super(o, i - s + 1, u - a + 1), this.startRow = s, this.startColumn = a;
      }
      set(o, s, i) {
        return this.matrix.set(this.startRow + o, this.startColumn + s, i), this;
      }
      get(o, s) {
        return this.matrix.get(this.startRow + o, this.startColumn + s);
      }
    }
    class q extends zt {
      constructor(o) {
        super(o, o.columns, o.rows);
      }
      set(o, s, i) {
        return this.matrix.set(s, o, i), this;
      }
      get(o, s) {
        return this.matrix.get(s, o);
      }
    }
    class se extends ve {
      constructor(o, s = {}) {
        const { rows: i = 1 } = s;
        if (o.length % i !== 0) throw new Error("the data length is not divisible by the number of rows");
        super(), this.rows = i, this.columns = o.length / i, this.data = o;
      }
      set(o, s, i) {
        let a = this._calculateIndex(o, s);
        return this.data[a] = i, this;
      }
      get(o, s) {
        let i = this._calculateIndex(o, s);
        return this.data[i];
      }
      _calculateIndex(o, s) {
        return o * this.columns + s;
      }
    }
    class X extends ve {
      constructor(o) {
        super(), this.data = o, this.rows = o.length, this.columns = o[0].length;
      }
      set(o, s, i) {
        return this.data[o][s] = i, this;
      }
      get(o, s) {
        return this.data[o][s];
      }
    }
    function ne(d, o) {
      if (e.isAnyArray(d)) return d[0] && e.isAnyArray(d[0]) ? new X(d) : new se(d, o);
      throw new Error("the argument is not an array");
    }
    class V {
      constructor(o) {
        o = X.checkMatrix(o);
        let s = o.clone(), i = s.rows, a = s.columns, u = new Float64Array(i), m = 1, w, y, b, A, E, C, Q, P, x;
        for (w = 0; w < i; w++) u[w] = w;
        for (P = new Float64Array(i), y = 0; y < a; y++) {
          for (w = 0; w < i; w++) P[w] = s.get(w, y);
          for (w = 0; w < i; w++) {
            for (x = Math.min(w, y), E = 0, b = 0; b < x; b++) E += s.get(w, b) * P[b];
            P[w] -= E, s.set(w, y, P[w]);
          }
          for (A = y, w = y + 1; w < i; w++) Math.abs(P[w]) > Math.abs(P[A]) && (A = w);
          if (A !== y) {
            for (b = 0; b < a; b++) C = s.get(A, b), s.set(A, b, s.get(y, b)), s.set(y, b, C);
            Q = u[A], u[A] = u[y], u[y] = Q, m = -m;
          }
          if (y < i && s.get(y, y) !== 0) for (w = y + 1; w < i; w++) s.set(w, y, s.get(w, y) / s.get(y, y));
        }
        this.LU = s, this.pivotVector = u, this.pivotSign = m;
      }
      isSingular() {
        let o = this.LU, s = o.columns;
        for (let i = 0; i < s; i++) if (o.get(i, i) === 0) return true;
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
        let s = this.pivotSign, i = o.columns;
        for (let a = 0; a < i; a++) s *= o.get(a, a);
        return s;
      }
      get lowerTriangularMatrix() {
        let o = this.LU, s = o.rows, i = o.columns, a = new oe(s, i);
        for (let u = 0; u < s; u++) for (let m = 0; m < i; m++) u > m ? a.set(u, m, o.get(u, m)) : u === m ? a.set(u, m, 1) : a.set(u, m, 0);
        return a;
      }
      get upperTriangularMatrix() {
        let o = this.LU, s = o.rows, i = o.columns, a = new oe(s, i);
        for (let u = 0; u < s; u++) for (let m = 0; m < i; m++) u <= m ? a.set(u, m, o.get(u, m)) : a.set(u, m, 0);
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
    class ae {
      constructor(o) {
        o = X.checkMatrix(o);
        let s = o.clone(), i = o.rows, a = o.columns, u = new Float64Array(a), m, w, y, b;
        for (y = 0; y < a; y++) {
          let A = 0;
          for (m = y; m < i; m++) A = we(A, s.get(m, y));
          if (A !== 0) {
            for (s.get(y, y) < 0 && (A = -A), m = y; m < i; m++) s.set(m, y, s.get(m, y) / A);
            for (s.set(y, y, s.get(y, y) + 1), w = y + 1; w < a; w++) {
              for (b = 0, m = y; m < i; m++) b += s.get(m, y) * s.get(m, w);
              for (b = -b / s.get(y, y), m = y; m < i; m++) s.set(m, w, s.get(m, w) + b * s.get(m, y));
            }
          }
          u[y] = -A;
        }
        this.QR = s, this.Rdiag = u;
      }
      solve(o) {
        o = oe.checkMatrix(o);
        let s = this.QR, i = s.rows;
        if (o.rows !== i) throw new Error("Matrix row dimensions must agree");
        if (!this.isFullRank()) throw new Error("Matrix is rank deficient");
        let a = o.columns, u = o.clone(), m = s.columns, w, y, b, A;
        for (b = 0; b < m; b++) for (y = 0; y < a; y++) {
          for (A = 0, w = b; w < i; w++) A += s.get(w, b) * u.get(w, y);
          for (A = -A / s.get(b, b), w = b; w < i; w++) u.set(w, y, u.get(w, y) + A * s.get(w, b));
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
        let o = this.QR, s = o.columns, i = new oe(s, s), a, u;
        for (a = 0; a < s; a++) for (u = 0; u < s; u++) a < u ? i.set(a, u, o.get(a, u)) : a === u ? i.set(a, u, this.Rdiag[a]) : i.set(a, u, 0);
        return i;
      }
      get orthogonalMatrix() {
        let o = this.QR, s = o.rows, i = o.columns, a = new oe(s, i), u, m, w, y;
        for (w = i - 1; w >= 0; w--) {
          for (u = 0; u < s; u++) a.set(u, w, 0);
          for (a.set(w, w, 1), m = w; m < i; m++) if (o.get(w, w) !== 0) {
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
        let i = o.rows, a = o.columns;
        const { computeLeftSingularVectors: u = true, computeRightSingularVectors: m = true, autoTranspose: w = false } = s;
        let y = !!u, b = !!m, A = false, E;
        if (i < a) if (!w) E = o.clone(), console.warn("Computing SVD on a matrix with more columns than rows. Consider enabling autoTranspose");
        else {
          E = o.transpose(), i = E.rows, a = E.columns, A = true;
          let _ = y;
          y = b, b = _;
        }
        else E = o.clone();
        let C = Math.min(i, a), Q = Math.min(i + 1, a), P = new Float64Array(Q), x = new oe(i, C), le = new oe(a, a), S = new Float64Array(a), Z = new Float64Array(i), pe = new Float64Array(Q);
        for (let _ = 0; _ < Q; _++) pe[_] = _;
        let Se = Math.min(i - 1, a), Oe = Math.max(0, Math.min(a - 2, i)), et = Math.max(Se, Oe);
        for (let _ = 0; _ < et; _++) {
          if (_ < Se) {
            P[_] = 0;
            for (let B = _; B < i; B++) P[_] = we(P[_], E.get(B, _));
            if (P[_] !== 0) {
              E.get(_, _) < 0 && (P[_] = -P[_]);
              for (let B = _; B < i; B++) E.set(B, _, E.get(B, _) / P[_]);
              E.set(_, _, E.get(_, _) + 1);
            }
            P[_] = -P[_];
          }
          for (let B = _ + 1; B < a; B++) {
            if (_ < Se && P[_] !== 0) {
              let ce = 0;
              for (let J = _; J < i; J++) ce += E.get(J, _) * E.get(J, B);
              ce = -ce / E.get(_, _);
              for (let J = _; J < i; J++) E.set(J, B, E.get(J, B) + ce * E.get(J, _));
            }
            S[B] = E.get(_, B);
          }
          if (y && _ < Se) for (let B = _; B < i; B++) x.set(B, _, E.get(B, _));
          if (_ < Oe) {
            S[_] = 0;
            for (let B = _ + 1; B < a; B++) S[_] = we(S[_], S[B]);
            if (S[_] !== 0) {
              S[_ + 1] < 0 && (S[_] = 0 - S[_]);
              for (let B = _ + 1; B < a; B++) S[B] /= S[_];
              S[_ + 1] += 1;
            }
            if (S[_] = -S[_], _ + 1 < i && S[_] !== 0) {
              for (let B = _ + 1; B < i; B++) Z[B] = 0;
              for (let B = _ + 1; B < i; B++) for (let ce = _ + 1; ce < a; ce++) Z[B] += S[ce] * E.get(B, ce);
              for (let B = _ + 1; B < a; B++) {
                let ce = -S[B] / S[_ + 1];
                for (let J = _ + 1; J < i; J++) E.set(J, B, E.get(J, B) + ce * Z[J]);
              }
            }
            if (b) for (let B = _ + 1; B < a; B++) le.set(B, _, S[B]);
          }
        }
        let be = Math.min(a, i + 1);
        if (Se < a && (P[Se] = E.get(Se, Se)), i < be && (P[be - 1] = 0), Oe + 1 < be && (S[Oe] = E.get(Oe, be - 1)), S[be - 1] = 0, y) {
          for (let _ = Se; _ < C; _++) {
            for (let B = 0; B < i; B++) x.set(B, _, 0);
            x.set(_, _, 1);
          }
          for (let _ = Se - 1; _ >= 0; _--) if (P[_] !== 0) {
            for (let B = _ + 1; B < C; B++) {
              let ce = 0;
              for (let J = _; J < i; J++) ce += x.get(J, _) * x.get(J, B);
              ce = -ce / x.get(_, _);
              for (let J = _; J < i; J++) x.set(J, B, x.get(J, B) + ce * x.get(J, _));
            }
            for (let B = _; B < i; B++) x.set(B, _, -x.get(B, _));
            x.set(_, _, 1 + x.get(_, _));
            for (let B = 0; B < _ - 1; B++) x.set(B, _, 0);
          } else {
            for (let B = 0; B < i; B++) x.set(B, _, 0);
            x.set(_, _, 1);
          }
        }
        if (b) for (let _ = a - 1; _ >= 0; _--) {
          if (_ < Oe && S[_] !== 0) for (let B = _ + 1; B < a; B++) {
            let ce = 0;
            for (let J = _ + 1; J < a; J++) ce += le.get(J, _) * le.get(J, B);
            ce = -ce / le.get(_ + 1, _);
            for (let J = _ + 1; J < a; J++) le.set(J, B, le.get(J, B) + ce * le.get(J, _));
          }
          for (let B = 0; B < a; B++) le.set(B, _, 0);
          le.set(_, _, 1);
        }
        let Ee = be - 1, He = Number.EPSILON;
        for (; be > 0; ) {
          let _, B;
          for (_ = be - 2; _ >= -1 && _ !== -1; _--) {
            const ce = Number.MIN_VALUE + He * Math.abs(P[_] + Math.abs(P[_ + 1]));
            if (Math.abs(S[_]) <= ce || Number.isNaN(S[_])) {
              S[_] = 0;
              break;
            }
          }
          if (_ === be - 2) B = 4;
          else {
            let ce;
            for (ce = be - 1; ce >= _ && ce !== _; ce--) {
              let J = (ce !== be ? Math.abs(S[ce]) : 0) + (ce !== _ + 1 ? Math.abs(S[ce - 1]) : 0);
              if (Math.abs(P[ce]) <= He * J) {
                P[ce] = 0;
                break;
              }
            }
            ce === _ ? B = 3 : ce === be - 1 ? B = 1 : (B = 2, _ = ce);
          }
          switch (_++, B) {
            case 1: {
              let ce = S[be - 2];
              S[be - 2] = 0;
              for (let J = be - 2; J >= _; J--) {
                let tt = we(P[J], ce), Be = P[J] / tt, Xe = ce / tt;
                if (P[J] = tt, J !== _ && (ce = -Xe * S[J - 1], S[J - 1] = Be * S[J - 1]), b) for (let nt = 0; nt < a; nt++) tt = Be * le.get(nt, J) + Xe * le.get(nt, be - 1), le.set(nt, be - 1, -Xe * le.get(nt, J) + Be * le.get(nt, be - 1)), le.set(nt, J, tt);
              }
              break;
            }
            case 2: {
              let ce = S[_ - 1];
              S[_ - 1] = 0;
              for (let J = _; J < be; J++) {
                let tt = we(P[J], ce), Be = P[J] / tt, Xe = ce / tt;
                if (P[J] = tt, ce = -Xe * S[J], S[J] = Be * S[J], y) for (let nt = 0; nt < i; nt++) tt = Be * x.get(nt, J) + Xe * x.get(nt, _ - 1), x.set(nt, _ - 1, -Xe * x.get(nt, J) + Be * x.get(nt, _ - 1)), x.set(nt, J, tt);
              }
              break;
            }
            case 3: {
              const ce = Math.max(Math.abs(P[be - 1]), Math.abs(P[be - 2]), Math.abs(S[be - 2]), Math.abs(P[_]), Math.abs(S[_])), J = P[be - 1] / ce, tt = P[be - 2] / ce, Be = S[be - 2] / ce, Xe = P[_] / ce, nt = S[_] / ce, yt = ((tt + J) * (tt - J) + Be * Be) / 2, sn = J * Be * (J * Be);
              let pt = 0;
              (yt !== 0 || sn !== 0) && (yt < 0 ? pt = 0 - Math.sqrt(yt * yt + sn) : pt = Math.sqrt(yt * yt + sn), pt = sn / (yt + pt));
              let gn = (Xe + J) * (Xe - J) + pt, Rn = Xe * nt;
              for (let Le = _; Le < be - 1; Le++) {
                let bt = we(gn, Rn);
                bt === 0 && (bt = Number.MIN_VALUE);
                let Vt = gn / bt, Ht = Rn / bt;
                if (Le !== _ && (S[Le - 1] = bt), gn = Vt * P[Le] + Ht * S[Le], S[Le] = Vt * S[Le] - Ht * P[Le], Rn = Ht * P[Le + 1], P[Le + 1] = Vt * P[Le + 1], b) for (let gt = 0; gt < a; gt++) bt = Vt * le.get(gt, Le) + Ht * le.get(gt, Le + 1), le.set(gt, Le + 1, -Ht * le.get(gt, Le) + Vt * le.get(gt, Le + 1)), le.set(gt, Le, bt);
                if (bt = we(gn, Rn), bt === 0 && (bt = Number.MIN_VALUE), Vt = gn / bt, Ht = Rn / bt, P[Le] = bt, gn = Vt * S[Le] + Ht * P[Le + 1], P[Le + 1] = -Ht * S[Le] + Vt * P[Le + 1], Rn = Ht * S[Le + 1], S[Le + 1] = Vt * S[Le + 1], y && Le < i - 1) for (let gt = 0; gt < i; gt++) bt = Vt * x.get(gt, Le) + Ht * x.get(gt, Le + 1), x.set(gt, Le + 1, -Ht * x.get(gt, Le) + Vt * x.get(gt, Le + 1)), x.set(gt, Le, bt);
              }
              S[be - 2] = gn;
              break;
            }
            case 4: {
              if (P[_] <= 0 && (P[_] = P[_] < 0 ? -P[_] : 0, b)) for (let ce = 0; ce <= Ee; ce++) le.set(ce, _, -le.get(ce, _));
              for (; _ < Ee && !(P[_] >= P[_ + 1]); ) {
                let ce = P[_];
                if (P[_] = P[_ + 1], P[_ + 1] = ce, b && _ < a - 1) for (let J = 0; J < a; J++) ce = le.get(J, _ + 1), le.set(J, _ + 1, le.get(J, _)), le.set(J, _, ce);
                if (y && _ < i - 1) for (let J = 0; J < i; J++) ce = x.get(J, _ + 1), x.set(J, _ + 1, x.get(J, _)), x.set(J, _, ce);
                _++;
              }
              be--;
              break;
            }
          }
        }
        if (A) {
          let _ = le;
          le = x, x = _;
        }
        this.m = i, this.n = a, this.s = P, this.U = x, this.V = le;
      }
      solve(o) {
        let s = o, i = this.threshold, a = this.s.length, u = oe.zeros(a, a);
        for (let C = 0; C < a; C++) Math.abs(this.s[C]) <= i ? u.set(C, C, 0) : u.set(C, C, 1 / this.s[C]);
        let m = this.U, w = this.rightSingularVectors, y = w.mmul(u), b = w.rows, A = m.rows, E = oe.zeros(b, A);
        for (let C = 0; C < b; C++) for (let Q = 0; Q < A; Q++) {
          let P = 0;
          for (let x = 0; x < a; x++) P += y.get(C, x) * m.get(Q, x);
          E.set(C, Q, P);
        }
        return E.mmul(s);
      }
      solveForDiagonal(o) {
        return this.solve(oe.diag(o));
      }
      inverse() {
        let o = this.V, s = this.threshold, i = o.rows, a = o.columns, u = new oe(i, this.s.length);
        for (let A = 0; A < i; A++) for (let E = 0; E < a; E++) Math.abs(this.s[E]) > s && u.set(A, E, o.get(A, E) / this.s[E]);
        let m = this.U, w = m.rows, y = m.columns, b = new oe(i, w);
        for (let A = 0; A < i; A++) for (let E = 0; E < w; E++) {
          let C = 0;
          for (let Q = 0; Q < y; Q++) C += u.get(A, Q) * m.get(E, Q);
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
        let o = Math.max(this.m, this.n) * this.s[0] * Number.EPSILON, s = 0, i = this.s;
        for (let a = 0, u = i.length; a < u; a++) i[a] > o && s++;
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
      return d = X.checkMatrix(d), o = X.checkMatrix(o), s ? new ye(d).solve(o) : d.isSquare() ? new V(d).solve(o) : new ae(d).solve(o);
    }
    function xe(d) {
      if (d = oe.checkMatrix(d), d.isSquare()) {
        if (d.columns === 0) return 1;
        let o, s, i, a;
        if (d.columns === 2) return o = d.get(0, 0), s = d.get(0, 1), i = d.get(1, 0), a = d.get(1, 1), o * a - s * i;
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
          ]), o = d.get(0, 0), s = d.get(0, 1), i = d.get(0, 2), o * xe(u) - s * xe(m) + i * xe(w);
        } else return new V(d).determinant;
      } else throw Error("determinant can only be calculated for a square matrix");
    }
    function je(d, o) {
      let s = [];
      for (let i = 0; i < d; i++) i !== o && s.push(i);
      return s;
    }
    function Tt(d, o, s, i = 1e-9, a = 1e-9) {
      if (d > a) return new Array(o.rows + 1).fill(0);
      {
        let u = o.addRow(s, [
          0
        ]);
        for (let m = 0; m < u.rows; m++) Math.abs(u.get(m, 0)) < i && u.set(m, 0, 0);
        return u.to1DArray();
      }
    }
    function St(d, o = {}) {
      const { thresholdValue: s = 1e-9, thresholdError: i = 1e-9 } = o;
      d = oe.checkMatrix(d);
      let a = d.rows, u = new oe(a, a);
      for (let m = 0; m < a; m++) {
        let w = oe.columnVector(d.getRow(m)), y = d.subMatrixRow(je(a, m)).transpose(), A = new ye(y).solve(w), E = oe.sub(w, y.mmul(A)).abs().max();
        u.setRow(m, Tt(E, A, m, s, i));
      }
      return u;
    }
    function Zt(d, o = Number.EPSILON) {
      if (d = oe.checkMatrix(d), d.isEmpty()) return d.transpose();
      let s = new ye(d, {
        autoTranspose: true
      }), i = s.leftSingularVectors, a = s.rightSingularVectors, u = s.diagonal;
      for (let m = 0; m < u.length; m++) Math.abs(u[m]) > o ? u[m] = 1 / u[m] : u[m] = 0;
      return a.mmul(oe.diag(u).mmul(i.transpose()));
    }
    function Qt(d, o = d, s = {}) {
      d = new oe(d);
      let i = false;
      if (typeof o == "object" && !oe.isMatrix(o) && !e.isAnyArray(o) ? (s = o, o = d, i = true) : o = new oe(o), d.rows !== o.rows) throw new TypeError("Both matrices must have the same number of rows");
      const { center: a = true } = s;
      a && (d = d.center("column"), i || (o = o.center("column")));
      const u = d.transpose().mmul(o);
      for (let m = 0; m < u.rows; m++) for (let w = 0; w < u.columns; w++) u.set(m, w, u.get(m, w) * (1 / (d.rows - 1)));
      return u;
    }
    function wr(d, o = d, s = {}) {
      d = new oe(d);
      let i = false;
      if (typeof o == "object" && !oe.isMatrix(o) && !e.isAnyArray(o) ? (s = o, o = d, i = true) : o = new oe(o), d.rows !== o.rows) throw new TypeError("Both matrices must have the same number of rows");
      const { center: a = true, scale: u = true } = s;
      a && (d.center("column"), i || o.center("column")), u && (d.scale("column"), i || o.scale("column"));
      const m = d.standardDeviation("column", {
        unbiased: true
      }), w = i ? m : o.standardDeviation("column", {
        unbiased: true
      }), y = d.transpose().mmul(o);
      for (let b = 0; b < y.rows; b++) for (let A = 0; A < y.columns; A++) y.set(b, A, y.get(b, A) * (1 / (m[b] * w[A])) * (1 / (d.rows - 1)));
      return y;
    }
    class hi {
      constructor(o, s = {}) {
        const { assumeSymmetric: i = false } = s;
        if (o = X.checkMatrix(o), !o.isSquare()) throw new Error("Matrix is not a square matrix");
        if (o.isEmpty()) throw new Error("Matrix must be non-empty");
        let a = o.columns, u = new oe(a, a), m = new Float64Array(a), w = new Float64Array(a), y = o, b, A, E = false;
        if (i ? E = true : E = o.isSymmetric(), E) {
          for (b = 0; b < a; b++) for (A = 0; A < a; A++) u.set(b, A, y.get(b, A));
          Pt(a, w, m, u), en(a, w, m, u);
        } else {
          let C = new oe(a, a), Q = new Float64Array(a);
          for (A = 0; A < a; A++) for (b = 0; b < a; b++) C.set(b, A, y.get(b, A));
          io(a, C, Q, u), oo(a, w, m, u, C);
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
        let o = this.n, s = this.e, i = this.d, a = new oe(o, o), u, m;
        for (u = 0; u < o; u++) {
          for (m = 0; m < o; m++) a.set(u, m, 0);
          a.set(u, u, i[u]), s[u] > 0 ? a.set(u, u + 1, s[u]) : s[u] < 0 && a.set(u, u - 1, s[u]);
        }
        return a;
      }
    }
    function Pt(d, o, s, i) {
      let a, u, m, w, y, b, A, E;
      for (y = 0; y < d; y++) s[y] = i.get(d - 1, y);
      for (w = d - 1; w > 0; w--) {
        for (E = 0, m = 0, b = 0; b < w; b++) E = E + Math.abs(s[b]);
        if (E === 0) for (o[w] = s[w - 1], y = 0; y < w; y++) s[y] = i.get(w - 1, y), i.set(w, y, 0), i.set(y, w, 0);
        else {
          for (b = 0; b < w; b++) s[b] /= E, m += s[b] * s[b];
          for (a = s[w - 1], u = Math.sqrt(m), a > 0 && (u = -u), o[w] = E * u, m = m - a * u, s[w - 1] = a - u, y = 0; y < w; y++) o[y] = 0;
          for (y = 0; y < w; y++) {
            for (a = s[y], i.set(y, w, a), u = o[y] + i.get(y, y) * a, b = y + 1; b <= w - 1; b++) u += i.get(b, y) * s[b], o[b] += i.get(b, y) * a;
            o[y] = u;
          }
          for (a = 0, y = 0; y < w; y++) o[y] /= m, a += o[y] * s[y];
          for (A = a / (m + m), y = 0; y < w; y++) o[y] -= A * s[y];
          for (y = 0; y < w; y++) {
            for (a = s[y], u = o[y], b = y; b <= w - 1; b++) i.set(b, y, i.get(b, y) - (a * o[b] + u * s[b]));
            s[y] = i.get(w - 1, y), i.set(w, y, 0);
          }
        }
        s[w] = m;
      }
      for (w = 0; w < d - 1; w++) {
        if (i.set(d - 1, w, i.get(w, w)), i.set(w, w, 1), m = s[w + 1], m !== 0) {
          for (b = 0; b <= w; b++) s[b] = i.get(b, w + 1) / m;
          for (y = 0; y <= w; y++) {
            for (u = 0, b = 0; b <= w; b++) u += i.get(b, w + 1) * i.get(b, y);
            for (b = 0; b <= w; b++) i.set(b, y, i.get(b, y) - u * s[b]);
          }
        }
        for (b = 0; b <= w; b++) i.set(b, w + 1, 0);
      }
      for (y = 0; y < d; y++) s[y] = i.get(d - 1, y), i.set(d - 1, y, 0);
      i.set(d - 1, d - 1, 1), o[0] = 0;
    }
    function en(d, o, s, i) {
      let a, u, m, w, y, b, A, E, C, Q, P, x, le, S, Z, pe;
      for (m = 1; m < d; m++) o[m - 1] = o[m];
      o[d - 1] = 0;
      let Se = 0, Oe = 0, et = Number.EPSILON;
      for (b = 0; b < d; b++) {
        for (Oe = Math.max(Oe, Math.abs(s[b]) + Math.abs(o[b])), A = b; A < d && !(Math.abs(o[A]) <= et * Oe); ) A++;
        if (A > b) do {
          for (a = s[b], E = (s[b + 1] - a) / (2 * o[b]), C = we(E, 1), E < 0 && (C = -C), s[b] = o[b] / (E + C), s[b + 1] = o[b] * (E + C), Q = s[b + 1], u = a - s[b], m = b + 2; m < d; m++) s[m] -= u;
          for (Se = Se + u, E = s[A], P = 1, x = P, le = P, S = o[b + 1], Z = 0, pe = 0, m = A - 1; m >= b; m--) for (le = x, x = P, pe = Z, a = P * o[m], u = P * E, C = we(E, o[m]), o[m + 1] = Z * C, Z = o[m] / C, P = E / C, E = P * s[m] - Z * a, s[m + 1] = u + Z * (P * a + Z * s[m]), y = 0; y < d; y++) u = i.get(y, m + 1), i.set(y, m + 1, Z * i.get(y, m) + P * u), i.set(y, m, P * i.get(y, m) - Z * u);
          E = -Z * pe * le * S * o[b] / Q, o[b] = Z * E, s[b] = P * E;
        } while (Math.abs(o[b]) > et * Oe);
        s[b] = s[b] + Se, o[b] = 0;
      }
      for (m = 0; m < d - 1; m++) {
        for (y = m, E = s[m], w = m + 1; w < d; w++) s[w] < E && (y = w, E = s[w]);
        if (y !== m) for (s[y] = s[m], s[m] = E, w = 0; w < d; w++) E = i.get(w, m), i.set(w, m, i.get(w, y)), i.set(w, y, E);
      }
    }
    function io(d, o, s, i) {
      let a = 0, u = d - 1, m, w, y, b, A, E, C;
      for (E = a + 1; E <= u - 1; E++) {
        for (C = 0, b = E; b <= u; b++) C = C + Math.abs(o.get(b, E - 1));
        if (C !== 0) {
          for (y = 0, b = u; b >= E; b--) s[b] = o.get(b, E - 1) / C, y += s[b] * s[b];
          for (w = Math.sqrt(y), s[E] > 0 && (w = -w), y = y - s[E] * w, s[E] = s[E] - w, A = E; A < d; A++) {
            for (m = 0, b = u; b >= E; b--) m += s[b] * o.get(b, A);
            for (m = m / y, b = E; b <= u; b++) o.set(b, A, o.get(b, A) - m * s[b]);
          }
          for (b = 0; b <= u; b++) {
            for (m = 0, A = u; A >= E; A--) m += s[A] * o.get(b, A);
            for (m = m / y, A = E; A <= u; A++) o.set(b, A, o.get(b, A) - m * s[A]);
          }
          s[E] = C * s[E], o.set(E, E - 1, C * w);
        }
      }
      for (b = 0; b < d; b++) for (A = 0; A < d; A++) i.set(b, A, b === A ? 1 : 0);
      for (E = u - 1; E >= a + 1; E--) if (o.get(E, E - 1) !== 0) {
        for (b = E + 1; b <= u; b++) s[b] = o.get(b, E - 1);
        for (A = E; A <= u; A++) {
          for (w = 0, b = E; b <= u; b++) w += s[b] * i.get(b, A);
          for (w = w / s[E] / o.get(E, E - 1), b = E; b <= u; b++) i.set(b, A, i.get(b, A) + w * s[b]);
        }
      }
    }
    function oo(d, o, s, i, a) {
      let u = d - 1, m = 0, w = d - 1, y = Number.EPSILON, b = 0, A = 0, E = 0, C = 0, Q = 0, P = 0, x = 0, le = 0, S, Z, pe, Se, Oe, et, be, Ee, He, _, B, ce, J, tt, Be;
      for (S = 0; S < d; S++) for ((S < m || S > w) && (s[S] = a.get(S, S), o[S] = 0), Z = Math.max(S - 1, 0); Z < d; Z++) A = A + Math.abs(a.get(S, Z));
      for (; u >= m; ) {
        for (Se = u; Se > m && (P = Math.abs(a.get(Se - 1, Se - 1)) + Math.abs(a.get(Se, Se)), P === 0 && (P = A), !(Math.abs(a.get(Se, Se - 1)) < y * P)); ) Se--;
        if (Se === u) a.set(u, u, a.get(u, u) + b), s[u] = a.get(u, u), o[u] = 0, u--, le = 0;
        else if (Se === u - 1) {
          if (be = a.get(u, u - 1) * a.get(u - 1, u), E = (a.get(u - 1, u - 1) - a.get(u, u)) / 2, C = E * E + be, x = Math.sqrt(Math.abs(C)), a.set(u, u, a.get(u, u) + b), a.set(u - 1, u - 1, a.get(u - 1, u - 1) + b), Ee = a.get(u, u), C >= 0) {
            for (x = E >= 0 ? E + x : E - x, s[u - 1] = Ee + x, s[u] = s[u - 1], x !== 0 && (s[u] = Ee - be / x), o[u - 1] = 0, o[u] = 0, Ee = a.get(u, u - 1), P = Math.abs(Ee) + Math.abs(x), E = Ee / P, C = x / P, Q = Math.sqrt(E * E + C * C), E = E / Q, C = C / Q, Z = u - 1; Z < d; Z++) x = a.get(u - 1, Z), a.set(u - 1, Z, C * x + E * a.get(u, Z)), a.set(u, Z, C * a.get(u, Z) - E * x);
            for (S = 0; S <= u; S++) x = a.get(S, u - 1), a.set(S, u - 1, C * x + E * a.get(S, u)), a.set(S, u, C * a.get(S, u) - E * x);
            for (S = m; S <= w; S++) x = i.get(S, u - 1), i.set(S, u - 1, C * x + E * i.get(S, u)), i.set(S, u, C * i.get(S, u) - E * x);
          } else s[u - 1] = Ee + E, s[u] = Ee + E, o[u - 1] = x, o[u] = -x;
          u = u - 2, le = 0;
        } else {
          if (Ee = a.get(u, u), He = 0, be = 0, Se < u && (He = a.get(u - 1, u - 1), be = a.get(u, u - 1) * a.get(u - 1, u)), le === 10) {
            for (b += Ee, S = m; S <= u; S++) a.set(S, S, a.get(S, S) - Ee);
            P = Math.abs(a.get(u, u - 1)) + Math.abs(a.get(u - 1, u - 2)), Ee = He = 0.75 * P, be = -0.4375 * P * P;
          }
          if (le === 30 && (P = (He - Ee) / 2, P = P * P + be, P > 0)) {
            for (P = Math.sqrt(P), He < Ee && (P = -P), P = Ee - be / ((He - Ee) / 2 + P), S = m; S <= u; S++) a.set(S, S, a.get(S, S) - P);
            b += P, Ee = He = be = 0.964;
          }
          for (le = le + 1, Oe = u - 2; Oe >= Se && (x = a.get(Oe, Oe), Q = Ee - x, P = He - x, E = (Q * P - be) / a.get(Oe + 1, Oe) + a.get(Oe, Oe + 1), C = a.get(Oe + 1, Oe + 1) - x - Q - P, Q = a.get(Oe + 2, Oe + 1), P = Math.abs(E) + Math.abs(C) + Math.abs(Q), E = E / P, C = C / P, Q = Q / P, !(Oe === Se || Math.abs(a.get(Oe, Oe - 1)) * (Math.abs(C) + Math.abs(Q)) < y * (Math.abs(E) * (Math.abs(a.get(Oe - 1, Oe - 1)) + Math.abs(x) + Math.abs(a.get(Oe + 1, Oe + 1)))))); ) Oe--;
          for (S = Oe + 2; S <= u; S++) a.set(S, S - 2, 0), S > Oe + 2 && a.set(S, S - 3, 0);
          for (pe = Oe; pe <= u - 1 && (tt = pe !== u - 1, pe !== Oe && (E = a.get(pe, pe - 1), C = a.get(pe + 1, pe - 1), Q = tt ? a.get(pe + 2, pe - 1) : 0, Ee = Math.abs(E) + Math.abs(C) + Math.abs(Q), Ee !== 0 && (E = E / Ee, C = C / Ee, Q = Q / Ee)), Ee !== 0); pe++) if (P = Math.sqrt(E * E + C * C + Q * Q), E < 0 && (P = -P), P !== 0) {
            for (pe !== Oe ? a.set(pe, pe - 1, -P * Ee) : Se !== Oe && a.set(pe, pe - 1, -a.get(pe, pe - 1)), E = E + P, Ee = E / P, He = C / P, x = Q / P, C = C / E, Q = Q / E, Z = pe; Z < d; Z++) E = a.get(pe, Z) + C * a.get(pe + 1, Z), tt && (E = E + Q * a.get(pe + 2, Z), a.set(pe + 2, Z, a.get(pe + 2, Z) - E * x)), a.set(pe, Z, a.get(pe, Z) - E * Ee), a.set(pe + 1, Z, a.get(pe + 1, Z) - E * He);
            for (S = 0; S <= Math.min(u, pe + 3); S++) E = Ee * a.get(S, pe) + He * a.get(S, pe + 1), tt && (E = E + x * a.get(S, pe + 2), a.set(S, pe + 2, a.get(S, pe + 2) - E * Q)), a.set(S, pe, a.get(S, pe) - E), a.set(S, pe + 1, a.get(S, pe + 1) - E * C);
            for (S = m; S <= w; S++) E = Ee * i.get(S, pe) + He * i.get(S, pe + 1), tt && (E = E + x * i.get(S, pe + 2), i.set(S, pe + 2, i.get(S, pe + 2) - E * Q)), i.set(S, pe, i.get(S, pe) - E), i.set(S, pe + 1, i.get(S, pe + 1) - E * C);
          }
        }
      }
      if (A !== 0) {
        for (u = d - 1; u >= 0; u--) if (E = s[u], C = o[u], C === 0) for (Se = u, a.set(u, u, 1), S = u - 1; S >= 0; S--) {
          for (be = a.get(S, S) - E, Q = 0, Z = Se; Z <= u; Z++) Q = Q + a.get(S, Z) * a.get(Z, u);
          if (o[S] < 0) x = be, P = Q;
          else if (Se = S, o[S] === 0 ? a.set(S, u, be !== 0 ? -Q / be : -Q / (y * A)) : (Ee = a.get(S, S + 1), He = a.get(S + 1, S), C = (s[S] - E) * (s[S] - E) + o[S] * o[S], et = (Ee * P - x * Q) / C, a.set(S, u, et), a.set(S + 1, u, Math.abs(Ee) > Math.abs(x) ? (-Q - be * et) / Ee : (-P - He * et) / x)), et = Math.abs(a.get(S, u)), y * et * et > 1) for (Z = S; Z <= u; Z++) a.set(Z, u, a.get(Z, u) / et);
        }
        else if (C < 0) for (Se = u - 1, Math.abs(a.get(u, u - 1)) > Math.abs(a.get(u - 1, u)) ? (a.set(u - 1, u - 1, C / a.get(u, u - 1)), a.set(u - 1, u, -(a.get(u, u) - E) / a.get(u, u - 1))) : (Be = so(0, -a.get(u - 1, u), a.get(u - 1, u - 1) - E, C), a.set(u - 1, u - 1, Be[0]), a.set(u - 1, u, Be[1])), a.set(u, u - 1, 0), a.set(u, u, 1), S = u - 2; S >= 0; S--) {
          for (_ = 0, B = 0, Z = Se; Z <= u; Z++) _ = _ + a.get(S, Z) * a.get(Z, u - 1), B = B + a.get(S, Z) * a.get(Z, u);
          if (be = a.get(S, S) - E, o[S] < 0) x = be, Q = _, P = B;
          else if (Se = S, o[S] === 0 ? (Be = so(-_, -B, be, C), a.set(S, u - 1, Be[0]), a.set(S, u, Be[1])) : (Ee = a.get(S, S + 1), He = a.get(S + 1, S), ce = (s[S] - E) * (s[S] - E) + o[S] * o[S] - C * C, J = (s[S] - E) * 2 * C, ce === 0 && J === 0 && (ce = y * A * (Math.abs(be) + Math.abs(C) + Math.abs(Ee) + Math.abs(He) + Math.abs(x))), Be = so(Ee * Q - x * _ + C * B, Ee * P - x * B - C * _, ce, J), a.set(S, u - 1, Be[0]), a.set(S, u, Be[1]), Math.abs(Ee) > Math.abs(x) + Math.abs(C) ? (a.set(S + 1, u - 1, (-_ - be * a.get(S, u - 1) + C * a.get(S, u)) / Ee), a.set(S + 1, u, (-B - be * a.get(S, u) - C * a.get(S, u - 1)) / Ee)) : (Be = so(-Q - He * a.get(S, u - 1), -P - He * a.get(S, u), x, C), a.set(S + 1, u - 1, Be[0]), a.set(S + 1, u, Be[1]))), et = Math.max(Math.abs(a.get(S, u - 1)), Math.abs(a.get(S, u))), y * et * et > 1) for (Z = S; Z <= u; Z++) a.set(Z, u - 1, a.get(Z, u - 1) / et), a.set(Z, u, a.get(Z, u) / et);
        }
        for (S = 0; S < d; S++) if (S < m || S > w) for (Z = S; Z < d; Z++) i.set(S, Z, a.get(S, Z));
        for (Z = d - 1; Z >= m; Z--) for (S = m; S <= w; S++) {
          for (x = 0, pe = m; pe <= Math.min(Z, w); pe++) x = x + i.get(S, pe) * a.get(pe, Z);
          i.set(S, Z, x);
        }
      }
    }
    function so(d, o, s, i) {
      let a, u;
      return Math.abs(s) > Math.abs(i) ? (a = i / s, u = s + a * i, [
        (d + a * o) / u,
        (o - a * d) / u
      ]) : (a = s / i, u = i + a * s, [
        (a * d + o) / u,
        (a * o - d) / u
      ]);
    }
    class fl {
      constructor(o) {
        if (o = X.checkMatrix(o), !o.isSymmetric()) throw new Error("Matrix is not symmetric");
        let s = o, i = s.rows, a = new oe(i, i), u = true, m, w, y;
        for (w = 0; w < i; w++) {
          let b = 0;
          for (y = 0; y < w; y++) {
            let A = 0;
            for (m = 0; m < y; m++) A += a.get(y, m) * a.get(w, m);
            A = (s.get(w, y) - A) / a.get(y, y), a.set(w, y, A), b = b + A * A;
          }
          for (b = s.get(w, w) - b, u && (u = b > 0), a.set(w, w, Math.sqrt(Math.max(b, 0))), y = w + 1; y < i; y++) a.set(w, y, 0);
        }
        this.L = a, this.positiveDefinite = u;
      }
      isPositiveDefinite() {
        return this.positiveDefinite;
      }
      solve(o) {
        o = X.checkMatrix(o);
        let s = this.L, i = s.rows;
        if (o.rows !== i) throw new Error("Matrix dimensions do not match");
        if (this.isPositiveDefinite() === false) throw new Error("Matrix is not positive definite");
        let a = o.columns, u = o.clone(), m, w, y;
        for (y = 0; y < i; y++) for (w = 0; w < a; w++) {
          for (m = 0; m < y; m++) u.set(y, w, u.get(y, w) - u.get(m, w) * s.get(y, m));
          u.set(y, w, u.get(y, w) / s.get(y, y));
        }
        for (y = i - 1; y >= 0; y--) for (w = 0; w < a; w++) {
          for (m = y + 1; m < i; m++) u.set(y, w, u.get(y, w) - u.get(m, w) * s.get(m, y));
          u.set(y, w, u.get(y, w) / s.get(y, y));
        }
        return u;
      }
      get lowerTriangularMatrix() {
        return this.L;
      }
    }
    class hl {
      constructor(o, s = {}) {
        o = X.checkMatrix(o);
        let { Y: i } = s;
        const { scaleScores: a = false, maxIterations: u = 1e3, terminationCriteria: m = 1e-10 } = s;
        let w;
        if (i) {
          if (e.isAnyArray(i) && typeof i[0] == "number" ? i = oe.columnVector(i) : i = X.checkMatrix(i), i.rows !== o.rows) throw new Error("Y should have the same number of rows as X");
          w = i.getColumnVector(0);
        } else w = o.getColumnVector(0);
        let y = 1, b, A, E, C;
        for (let Q = 0; Q < u && y > m; Q++) E = o.transpose().mmul(w).div(w.transpose().mmul(w).get(0, 0)), E = E.div(E.norm()), b = o.mmul(E).div(E.transpose().mmul(E).get(0, 0)), Q > 0 && (y = b.clone().sub(C).pow(2).sum()), C = b.clone(), i ? (A = i.transpose().mmul(b).div(b.transpose().mmul(b).get(0, 0)), A = A.div(A.norm()), w = i.mmul(A).div(A.transpose().mmul(A).get(0, 0))) : w = b;
        if (i) {
          let Q = o.transpose().mmul(b).div(b.transpose().mmul(b).get(0, 0));
          Q = Q.div(Q.norm());
          let P = o.clone().sub(b.clone().mmul(Q.transpose())), x = w.transpose().mmul(b).div(b.transpose().mmul(b).get(0, 0)), le = i.clone().sub(b.clone().mulS(x.get(0, 0)).mmul(A.transpose()));
          this.t = b, this.p = Q.transpose(), this.w = E.transpose(), this.q = A, this.u = w, this.s = b.transpose().mmul(b), this.xResidual = P, this.yResidual = le, this.betas = x;
        } else this.w = E.transpose(), this.s = b.transpose().mmul(b).sqrt(), a ? this.t = b.clone().div(this.s.get(0, 0)) : this.t = b, this.xResidual = o.sub(b.mmul(E.transpose()));
      }
    }
    return Ne.AbstractMatrix = ve, Ne.CHO = fl, Ne.CholeskyDecomposition = fl, Ne.DistanceMatrix = An, Ne.EVD = hi, Ne.EigenvalueDecomposition = hi, Ne.LU = V, Ne.LuDecomposition = V, Ne.Matrix = oe, Ne.MatrixColumnSelectionView = mr, Ne.MatrixColumnView = ro, Ne.MatrixFlipColumnView = ul, Ne.MatrixFlipRowView = I, Ne.MatrixRowSelectionView = k, Ne.MatrixRowView = O, Ne.MatrixSelectionView = Y, Ne.MatrixSubView = H, Ne.MatrixTransposeView = q, Ne.NIPALS = hl, Ne.Nipals = hl, Ne.QR = ae, Ne.QrDecomposition = ae, Ne.SVD = ye, Ne.SingularValueDecomposition = ye, Ne.SymmetricMatrix = xt, Ne.WrapperMatrix1D = se, Ne.WrapperMatrix2D = X, Ne.correlation = wr, Ne.covariance = Qt, Ne.default = oe, Ne.determinant = xe, Ne.inverse = Te, Ne.linearDependencies = St, Ne.pseudoInverse = Zt, Ne.solve = ke, Ne.wrap = ne, Ne;
  }
  var As = Wb();
  const Uc = Cb(As), at = As.Matrix;
  Uc.Matrix ? Uc.Matrix : As.Matrix;
  const Bb = As.inverse;
  class Gc {
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
      __publicField(this, "boundHandleMotionEvent");
      __publicField(this, "boundHandleOrientationEvent");
      this.boundHandleMotionEvent = this.handleMotionEvent.bind(this), this.boundHandleOrientationEvent = this.handleOrientationEvent.bind(this);
    }
    async init(t) {
      if (this.initialized) return D(void 0);
      const n = await this.getPermissionStatus();
      if (n.isErr()) return N(n.error);
      if (n.value === "prompt" && t) {
        if (!await t(n.value, "permission.imu.required")) return N(new ct("IMU permission denied"));
        const l = await this.getPermissionStatus();
        if (l.isErr()) return N(l.error);
        if (l.value === "denied") return N(new ct("IMU permission denied"));
      }
      return await this.isSupported() ? ("DeviceOrientationEvent" in window && window.addEventListener("deviceorientation", this.boundHandleOrientationEvent), this.initialized = true, D(void 0)) : N(new ct("Device motion is not supported by this browser"));
    }
    async getPermissionStatus() {
      try {
        if (typeof DeviceMotionEvent < "u" && typeof DeviceMotionEvent.requestPermission == "function") {
          const t = await DeviceMotionEvent.requestPermission();
          return D(t === "granted" ? "granted" : t === "denied" ? "denied" : "prompt");
        } else return D("granted");
      } catch {
        return D("prompt");
      }
    }
    async startAcceleration(t = {}) {
      if (!this.initialized) {
        const n = await this.init();
        if (n.isErr()) return N(n.error);
      }
      if (this.isAccelerationActive) return D(void 0);
      this.normalizeAccelerationToENU = t.normalizeToENU ?? false;
      try {
        return this.motionEventListenerCount === 0 && window.addEventListener("devicemotion", this.handleMotionEvent.bind(this), true), this.motionEventListenerCount++, this.isAccelerationActive = true, D(void 0);
      } catch (n) {
        return N(new ct("Failed to start acceleration monitoring", void 0, n));
      }
    }
    async startGyroscope(t = {}) {
      if (!this.initialized) {
        const n = await this.init();
        if (n.isErr()) return N(n.error);
      }
      if (this.isGyroscopeActive) return D(void 0);
      this.normalizeGyroscopeToENU = t.normalizeToENU ?? false;
      try {
        return this.motionEventListenerCount === 0 && window.addEventListener("devicemotion", this.handleMotionEvent.bind(this), true), this.motionEventListenerCount++, this.isGyroscopeActive = true, D(void 0);
      } catch (n) {
        return N(new ct("Failed to start gyroscope monitoring", void 0, n));
      }
    }
    stopAcceleration() {
      if (!this.isAccelerationActive) return D(void 0);
      try {
        return this.motionEventListenerCount--, this.isAccelerationActive = false, this.lastAccelerationReading = null, this.normalizeAccelerationToENU = false, this.motionEventListenerCount === 0 && window.removeEventListener("devicemotion", this.boundHandleMotionEvent, true), D(void 0);
      } catch (t) {
        return N(new ct("Failed to stop acceleration monitoring", void 0, t));
      }
    }
    stopGyroscope() {
      if (!this.isGyroscopeActive) return D(void 0);
      try {
        return this.motionEventListenerCount--, this.isGyroscopeActive = false, this.lastGyroscopeReading = null, this.normalizeGyroscopeToENU = false, this.motionEventListenerCount === 0 && window.removeEventListener("devicemotion", this.boundHandleMotionEvent, true), D(void 0);
      } catch (t) {
        return N(new ct("Failed to stop gyroscope monitoring", void 0, t));
      }
    }
    async getAccelerationReading() {
      if (!this.initialized) {
        const t = await this.init();
        if (t.isErr()) return N(t.error);
      }
      return D(this.lastAccelerationReading);
    }
    async getGyroscopeReading() {
      if (!this.initialized) {
        const t = await this.init();
        if (t.isErr()) return N(t.error);
      }
      return D(this.lastGyroscopeReading);
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
      return this.accelerationListeners.delete(t), this.gyroscopeListeners.delete(t), D(void 0);
    }
    async isSupported() {
      if (!("DeviceOrientationEvent" in window) || !("DeviceMotionEvent" in window)) return false;
      try {
        const t = new Promise((r) => {
          let l = false, c = false;
          const f = () => {
            window.removeEventListener("deviceorientation", h), window.removeEventListener("devicemotion", p);
          }, h = (v) => {
            (v.alpha !== null || v.beta !== null || v.gamma !== null) && (l || (l = true, f(), r(true)));
          }, p = (v) => {
            (v.acceleration || v.accelerationIncludingGravity || v.rotationRate) && (c || (c = true, f(), r(true)));
          };
          window.addEventListener("deviceorientation", h, {
            once: false
          }), window.addEventListener("devicemotion", p, {
            once: false
          });
        }), n = new Promise((r, l) => {
          setTimeout(() => l(new Error("IMU detection timeout")), 1e3);
        });
        return await Promise.race([
          t,
          n
        ]);
      } catch {
        return false;
      }
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
        let n = t.acceleration, r = "linear";
        if ((!n || n.x === null || n.y === null || n.z === null) && (n = t.accelerationIncludingGravity, r = "including_gravity"), n && n.x !== null && n.y !== null && n.z !== null) {
          let l = {
            x: n.x,
            y: n.y,
            z: n.z,
            timestamp: t.timeStamp || performance.now()
          };
          if (r === "including_gravity" && this.deviceOrientation) {
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
          let r = {
            x: n.alpha,
            y: n.beta,
            z: n.gamma,
            timestamp: t.timeStamp || performance.now()
          };
          this.normalizeGyroscopeToENU && this.deviceOrientation && (r = this.normalizeToENU(r, this.deviceOrientation)), this.lastGyroscopeReading = r;
          for (const l of this.gyroscopeListeners.values()) try {
            l(r);
          } catch (c) {
            console.error("Error in gyroscope callback:", c);
          }
        }
      }
    }
    normalizeToENU(t, n) {
      const r = n.alpha * Math.PI / 180, l = n.beta * Math.PI / 180, c = n.gamma * Math.PI / 180, f = new at([
        [
          Math.cos(r),
          -Math.sin(r),
          0
        ],
        [
          Math.sin(r),
          Math.cos(r),
          0
        ],
        [
          0,
          0,
          1
        ]
      ]), h = new at([
        [
          Math.cos(c),
          0,
          Math.sin(c)
        ],
        [
          0,
          1,
          0
        ],
        [
          -Math.sin(c),
          0,
          Math.cos(c)
        ]
      ]), p = new at([
        [
          1,
          0,
          0
        ],
        [
          0,
          Math.cos(l),
          -Math.sin(l)
        ],
        [
          0,
          Math.sin(l),
          Math.cos(l)
        ]
      ]), v = f.mmul(h).mmul(p), g = new at([
        [
          t.x
        ],
        [
          t.y
        ],
        [
          t.z
        ]
      ]), T = v.mmul(g);
      return {
        x: T.get(0, 0),
        y: T.get(1, 0),
        z: T.get(2, 0),
        timestamp: t.timestamp
      };
    }
    estimateGravityVector(t) {
      const n = t.alpha * Math.PI / 180, r = t.beta * Math.PI / 180, l = t.gamma * Math.PI / 180, c = new at([
        [
          Math.cos(n),
          -Math.sin(n),
          0
        ],
        [
          Math.sin(n),
          Math.cos(n),
          0
        ],
        [
          0,
          0,
          1
        ]
      ]), f = new at([
        [
          Math.cos(l),
          0,
          Math.sin(l)
        ],
        [
          0,
          1,
          0
        ],
        [
          -Math.sin(l),
          0,
          Math.cos(l)
        ]
      ]), h = new at([
        [
          1,
          0,
          0
        ],
        [
          0,
          Math.cos(r),
          -Math.sin(r)
        ],
        [
          0,
          Math.sin(r),
          Math.cos(r)
        ]
      ]), p = c.mmul(f).mmul(h), v = new at([
        [
          0
        ],
        [
          0
        ],
        [
          -9.81
        ]
      ]), g = p.transpose().mmul(v);
      return {
        x: g.get(0, 0),
        y: g.get(1, 0),
        z: g.get(2, 0),
        timestamp: performance.now()
      };
    }
  }
  const _Mr = class _Mr {
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
      if (!_Mr.instance) {
        const n = sl.getPlatformContext(), r = new _Mr(n), l = r.initializeProviders(t);
        if (l.isErr()) return N(l.error);
        _Mr.instance = r;
      }
      return D(_Mr.instance);
    }
    initializeProviders(t) {
      try {
        return this.storageProvider = this.createStorageProvider(t == null ? void 0 : t.storage), this.imuProvider = this.createIMUProvider(), this.deviceOrientationProvider = this.createDeviceOrientationProvider(), this.geolocationProvider = this.createGeolocationProvider(t == null ? void 0 : t.geolocation), this.fileProvider = this.createFileProvider(), this.initialized = true, D(void 0);
      } catch (n) {
        return N(new Br("Failed to initialize platform providers", _r.DETECTION_FAILED, n));
      }
    }
    createStorageProvider(t) {
      switch (this.context.environment) {
        case $e.TAURI:
          return new Sb((t == null ? void 0 : t.tauriStorePath) || "user-data.json");
        case $e.WEB:
        case $e.MOBILE_WEB:
        case $e.UNKNOWN:
        default:
          return new Rb((t == null ? void 0 : t.webDbName) || "trackmaker-db", (t == null ? void 0 : t.webStoreName) || "user-data");
      }
    }
    createGeolocationProvider(t) {
      let n;
      switch (this.context.environment) {
        case $e.TAURI:
          n = new Mb((t == null ? void 0 : t.tauriHandlerName) || "get_geolocation");
          break;
        case $e.WEB:
        case $e.MOBILE_WEB:
        case $e.UNKNOWN:
        default:
          n = new Pb();
          break;
      }
      if (t == null ? void 0 : t.permissionCallback) {
        const r = t.permissionCallback;
        n.init(async (l, c) => r(l, c));
      }
      return n;
    }
    createFileProvider() {
      return {
        init: async () => N(new ct("File provider not implemented")),
        readFile: async () => N(new ct("File provider not implemented")),
        writeFile: async () => N(new ct("File provider not implemented")),
        deleteFile: async () => N(new ct("File provider not implemented")),
        listFiles: async () => N(new ct("File provider not implemented")),
        exists: async () => N(new ct("File provider not implemented")),
        isSupported: () => false
      };
    }
    createIMUProvider() {
      switch (this.context.environment) {
        case $e.TAURI:
          return new Gc();
        case $e.WEB:
        case $e.MOBILE_WEB:
        case $e.UNKNOWN:
        default:
          return new Gc();
      }
    }
    createDeviceOrientationProvider() {
      switch (this.context.environment) {
        case $e.TAURI:
          return new xc();
        case $e.WEB:
        case $e.MOBILE_WEB:
        case $e.UNKNOWN:
        default:
          return new xc();
      }
    }
    getContext() {
      return this.context;
    }
    getStorage() {
      return this.storageProvider ? D(this.storageProvider) : N(new Br("Storage provider not initialized", _r.DETECTION_FAILED));
    }
    getGeolocation() {
      return this.geolocationProvider ? D(this.geolocationProvider) : N(new Br("Geolocation provider not initialized", _r.DETECTION_FAILED));
    }
    getFile() {
      return this.fileProvider ? D(this.fileProvider) : N(new Br("File provider not initialized", _r.DETECTION_FAILED));
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
      _Mr.instance = null;
    }
    getGeolocationProvider() {
      return this.geolocationProvider;
    }
    getIMU() {
      return this.imuProvider ? D(this.imuProvider) : N(new Br("IMU provider not initialized", _r.DETECTION_FAILED));
    }
    getDeviceOrientation() {
      return this.deviceOrientationProvider ? D(this.deviceOrientationProvider) : N(new Br("Device orientation provider not initialized", _r.DETECTION_FAILED));
    }
  };
  __publicField(_Mr, "instance", null);
  let Mr = _Mr;
  Ji = function(e) {
    return Mr.getInstance(e);
  };
  $b = function() {
    return typeof navigator > "u" ? false : sl.detectEnvironment() === $e.TAURI;
  };
  class Un {
    constructor(t, n, r = 0) {
      __publicField(this, "latitude");
      __publicField(this, "longitude");
      __publicField(this, "accuracy");
      this.latitude = t, this.longitude = n, this.accuracy = r;
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
  class zb {
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
      } catch (n) {
        console.warn(`[BackendManager] Failed to test ${t.name} backend:`, n);
        continue;
      }
      return N(new Me("No backend available", "BACKEND_NOT_AVAILABLE"));
    }
    async startWatching(t) {
      if (!this.isInitialized) return N(new Me("Backend not initialized", "BACKEND_NOT_INITIALIZED"));
      if (!this.activeStrategy) return N(new Me("No backend available", "BACKEND_NOT_AVAILABLE"));
      if (this.watcherCount === 0) {
        const n = await this.activeStrategy.startWatching(t);
        if (n.isErr()) return console.warn(`[BackendManager] Failed to start ${this.activeStrategy.name} backend:`, n.error), N(n.error);
      } else {
        const n = await this.activeStrategy.startWatching(t);
        if (n.isErr()) return N(n.error);
      }
      return this.watcherCount++, console.info(`[BackendManager] Started watching with ${this.activeStrategy.name} backend (count: ${this.watcherCount})`), D(this.activeStrategy.name);
    }
    async stopWatching() {
      var _a3;
      if (this.watcherCount === 0 || !this.activeStrategy) return D(void 0);
      if (this.watcherCount--, this.watcherCount === 0) {
        const t = await this.activeStrategy.stopWatching();
        if (t.isErr()) return N(new Me(`Failed to stop ${((_a3 = this.activeStrategy) == null ? void 0 : _a3.name) || "unknown"} backend`, "UPDATE_SERVICE_ERROR", t.error));
        console.info("[BackendManager] Stopped watching location");
      } else console.info(`[BackendManager] Decremented watcher count (count: ${this.watcherCount})`);
      return D(void 0);
    }
    async getCurrentPosition() {
      if (!this.isInitialized) return N(new Me("Backend not initialized", "BACKEND_NOT_INITIALIZED"));
      if (!this.activeStrategy) return N(new Me("No backend available for current position", "BACKEND_NOT_AVAILABLE"));
      const t = await this.activeStrategy.getCurrentPosition();
      return t.isErr() ? (console.warn(`[BackendManager] Failed to get location from ${this.activeStrategy.name}:`, t.error), N(t.error)) : t;
    }
    getActiveBackend() {
      var _a3;
      return ((_a3 = this.activeStrategy) == null ? void 0 : _a3.name) || null;
    }
    isWatchingActive() {
      return this.watcherCount > 0;
    }
  }
  class Vb {
    constructor() {
      __publicField(this, "callbacks", /* @__PURE__ */ new Set());
    }
    subscribe(t) {
      return this.callbacks.add(t), () => this.callbacks.delete(t);
    }
    emit(t, n) {
      for (const r of this.callbacks) try {
        r(t, n);
      } catch (l) {
        console.error("[LocationEventEmitter] Callback error:", l);
      }
    }
    clear() {
      this.callbacks.clear();
    }
    get size() {
      return this.callbacks.size;
    }
  }
  class Hb {
    constructor() {
      __publicField(this, "currentLocation", null);
      __publicField(this, "currentBackend", null);
      __publicField(this, "eventEmitter");
      this.eventEmitter = new Vb();
    }
    updateLocation(t, n) {
      this.currentLocation = t, this.currentBackend = n, this.eventEmitter.emit(t, n);
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
  class qb {
    constructor() {
      __publicField(this, "name", "gps");
      __publicField(this, "provider", null);
      __publicField(this, "watchId", null);
      __publicField(this, "isInitialized", false);
    }
    async initialize() {
      if (this.isInitialized) return D(void 0);
      try {
        const t = Ji();
        if (t.isErr()) return N(new Me("Platform services not available", "BACKEND_NOT_AVAILABLE", t.error));
        const n = t.value.getGeolocationProvider();
        return n ? (this.provider = n, this.isInitialized = true, D(void 0)) : N(new Me("Geolocation provider not available", "BACKEND_NOT_AVAILABLE"));
      } catch (t) {
        return N(new Me("Exception during GPS backend initialization", "UPDATE_SERVICE_ERROR", t));
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
      if (!this.provider) return N(new Me("GPS backend not initialized", "BACKEND_NOT_AVAILABLE"));
      const n = await this.provider.watchPosition((r) => {
        const l = new Un(r.coords.latitude, r.coords.longitude, r.coords.accuracy);
        t(l, "gps");
      });
      return n.isErr() ? N(new Me("Failed to start watching position", "UPDATE_SERVICE_ERROR", n.error)) : (this.watchId = n.value, D(void 0));
    }
    async stopWatching() {
      if (this.watchId !== null && this.provider) {
        const t = this.provider.clearWatch(this.watchId);
        if (t.isErr()) return N(new Me("Failed to stop watching position", "UPDATE_SERVICE_ERROR", t.error));
        this.watchId = null;
      }
      return D(void 0);
    }
    async getCurrentPosition() {
      if (!this.provider) return N(new Me("GPS backend not initialized", "BACKEND_NOT_AVAILABLE"));
      const t = await this.provider.getCurrentPosition();
      if (t.isErr()) return N(new Me("Failed to get current position", "UPDATE_SERVICE_ERROR", t.error));
      const n = t.value;
      return D(new Un(n.coords.latitude, n.coords.longitude, n.coords.accuracy));
    }
  }
  const Wc = "https://ipapi.co/json/";
  class Yb {
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
        return (await fetch(Wc, {
          method: "HEAD",
          signal: AbortSignal.timeout(5e3)
        })).ok;
      } catch {
        return false;
      }
    }
    async startWatching(t) {
      const n = this.nextCallbackId++;
      return this.watchCallbacks.set(n, t), this.activeWatcherCount++, this.watchInterval === null && (this.watchInterval = setInterval(() => {
        this.updateLocation();
      }, 3e4), this.updateLocation()), D(void 0);
    }
    async stopWatching() {
      try {
        return this.watchCallbacks.clear(), this.activeWatcherCount = 0, this.watchInterval !== null && (clearInterval(this.watchInterval), this.watchInterval = null), this.lastLocation = null, D(void 0);
      } catch (t) {
        return N(new Me("Failed to stop IP location watching", "UPDATE_SERVICE_ERROR", t));
      }
    }
    async getCurrentPosition() {
      try {
        console.info("[IPFallbackBackend] Getting location from IP service");
        const t = await fetch(Wc, {
          signal: AbortSignal.timeout(1e4)
        });
        if (!t.ok) throw new Error(`HTTP error! Status: ${t.status}`);
        const n = await t.json(), r = new Un(n.latitude, n.longitude, 5e4);
        return console.info("[IPFallbackBackend] Successfully retrieved location from IP service"), D(r);
      } catch (t) {
        return N(new Me("Failed to get location from IP service", "POSITION_UNAVAILABLE", t));
      }
    }
    async updateLocation() {
      try {
        const t = await this.getCurrentPosition();
        if (t.isErr()) {
          console.error("[IPFallbackBackend] Error updating location:", t.error);
          return;
        }
        const n = t.value;
        if (!this.lastLocation || Math.abs(n.latitude - this.lastLocation.latitude) > 1e-4 || Math.abs(n.longitude - this.lastLocation.longitude) > 1e-4) {
          this.lastLocation = n;
          for (const r of this.watchCallbacks.values()) try {
            r(n, "ip");
          } catch (l) {
            console.error("[IPFallbackBackend] Callback error:", l);
          }
        }
      } catch (t) {
        console.error("[IPFallbackBackend] Error updating location:", t);
      }
    }
  }
  let Ce;
  const nh = typeof TextDecoder < "u" ? new TextDecoder("utf-8", {
    ignoreBOM: true,
    fatal: true
  }) : {
    decode: () => {
      throw Error("TextDecoder not available");
    }
  };
  typeof TextDecoder < "u" && nh.decode();
  let Oi = null;
  function Po() {
    return (Oi === null || Oi.byteLength === 0) && (Oi = new Uint8Array(Ce.memory.buffer)), Oi;
  }
  function Nr(e, t) {
    return e = e >>> 0, nh.decode(Po().subarray(e, e + t));
  }
  let Jo = 0;
  const Co = typeof TextEncoder < "u" ? new TextEncoder("utf-8") : {
    encode: () => {
      throw Error("TextEncoder not available");
    }
  }, Kb = typeof Co.encodeInto == "function" ? function(e, t) {
    return Co.encodeInto(e, t);
  } : function(e, t) {
    const n = Co.encode(e);
    return t.set(n), {
      read: e.length,
      written: n.length
    };
  };
  function rh(e, t, n) {
    if (n === void 0) {
      const h = Co.encode(e), p = t(h.length, 1) >>> 0;
      return Po().subarray(p, p + h.length).set(h), Jo = h.length, p;
    }
    let r = e.length, l = t(r, 1) >>> 0;
    const c = Po();
    let f = 0;
    for (; f < r; f++) {
      const h = e.charCodeAt(f);
      if (h > 127) break;
      c[l + f] = h;
    }
    if (f !== r) {
      f !== 0 && (e = e.slice(f)), l = n(l, r, r = f + e.length * 3, 1) >>> 0;
      const h = Po().subarray(l + f, l + r), p = Kb(e, h);
      f += p.written, l = n(l, r, f, 1) >>> 0;
    }
    return Jo = f, l;
  }
  function Jb(e) {
    return e == null;
  }
  let Or = null;
  function Bc() {
    return (Or === null || Or.buffer.detached === true || Or.buffer.detached === void 0 && Or.buffer !== Ce.memory.buffer) && (Or = new DataView(Ce.memory.buffer)), Or;
  }
  function ih(e) {
    const t = Ce.__wbindgen_export_0.get(e);
    return Ce.__externref_table_dealloc(e), t;
  }
  function na(e, t) {
    if (!(e instanceof t)) throw new Error(`expected instance of ${t.name}`);
  }
  function Pa(e, t, n) {
    na(e, lr), na(t, lr), na(n, Xo);
    const r = Ce.transform(e.__wbg_ptr, t.__wbg_ptr, n.__wbg_ptr);
    if (r[1]) throw ih(r[0]);
  }
  const $c = typeof FinalizationRegistry > "u" ? {
    register: () => {
    },
    unregister: () => {
    }
  } : new FinalizationRegistry((e) => Ce.__wbg_point_free(e >>> 0, 1));
  class Xo {
    __destroy_into_raw() {
      const t = this.__wbg_ptr;
      return this.__wbg_ptr = 0, $c.unregister(this), t;
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
    constructor(t, n, r) {
      const l = Ce.point_new(t, n, r);
      return this.__wbg_ptr = l >>> 0, $c.register(this, this.__wbg_ptr, this), this;
    }
  }
  const zc = typeof FinalizationRegistry > "u" ? {
    register: () => {
    },
    unregister: () => {
    }
  } : new FinalizationRegistry((e) => Ce.__wbg_projection_free(e >>> 0, 1));
  class lr {
    __destroy_into_raw() {
      const t = this.__wbg_ptr;
      return this.__wbg_ptr = 0, zc.unregister(this), t;
    }
    free() {
      const t = this.__destroy_into_raw();
      Ce.__wbg_projection_free(t, 0);
    }
    constructor(t) {
      const n = rh(t, Ce.__wbindgen_malloc, Ce.__wbindgen_realloc), r = Jo, l = Ce.projection_new(n, r);
      if (l[2]) throw ih(l[1]);
      return this.__wbg_ptr = l[0] >>> 0, zc.register(this, this.__wbg_ptr, this), this;
    }
    get projName() {
      let t, n;
      try {
        const r = Ce.projection_projName(this.__wbg_ptr);
        return t = r[0], n = r[1], Nr(r[0], r[1]);
      } finally {
        Ce.__wbindgen_free(t, n, 1);
      }
    }
    get isLatlon() {
      return Ce.projection_isLatlon(this.__wbg_ptr) !== 0;
    }
    get isGeocentric() {
      return Ce.projection_isGeocentric(this.__wbg_ptr) !== 0;
    }
    get axis() {
      let t, n;
      try {
        const r = Ce.projection_axis(this.__wbg_ptr);
        return t = r[0], n = r[1], Nr(r[0], r[1]);
      } finally {
        Ce.__wbindgen_free(t, n, 1);
      }
    }
    get isNormalizedAxis() {
      return Ce.projection_isNormalizedAxis(this.__wbg_ptr) !== 0;
    }
    get to_meter() {
      return Ce.projection_to_meter(this.__wbg_ptr);
    }
    get units() {
      let t, n;
      try {
        const r = Ce.projection_units(this.__wbg_ptr);
        return t = r[0], n = r[1], Nr(r[0], r[1]);
      } finally {
        Ce.__wbindgen_free(t, n, 1);
      }
    }
  }
  async function Xb(e, t) {
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
  function Zb() {
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
      return parseFloat(Nr(t, n));
    }, e.wbg.__wbg_parseInt_7deceafc75400ae4 = function(t, n, r) {
      return parseInt(Nr(t, n), r);
    }, e.wbg.__wbg_slice_ab0b7e3d75dccdee = function(t, n, r) {
      return t.slice(n >>> 0, r >>> 0);
    }, e.wbg.__wbindgen_error_new = function(t, n) {
      return new Error(Nr(t, n));
    }, e.wbg.__wbindgen_init_externref_table = function() {
      const t = Ce.__wbindgen_export_0, n = t.grow(4);
      t.set(0, void 0), t.set(n + 0, void 0), t.set(n + 1, null), t.set(n + 2, true), t.set(n + 3, false);
    }, e.wbg.__wbindgen_string_get = function(t, n) {
      const r = n, l = typeof r == "string" ? r : void 0;
      var c = Jb(l) ? 0 : rh(l, Ce.__wbindgen_malloc, Ce.__wbindgen_realloc), f = Jo;
      Bc().setInt32(t + 4, f, true), Bc().setInt32(t + 0, c, true);
    }, e.wbg.__wbindgen_throw = function(t, n) {
      throw new Error(Nr(t, n));
    }, e;
  }
  function Qb(e, t) {
    return Ce = e.exports, oh.__wbindgen_wasm_module = t, Or = null, Oi = null, Ce.__wbindgen_start(), Ce;
  }
  async function oh(e) {
    if (Ce !== void 0) return Ce;
    typeof e < "u" && (Object.getPrototypeOf(e) === Object.prototype ? { module_or_path: e } = e : console.warn("using deprecated parameters for the initialization function; pass a single object instead")), typeof e > "u" && (e = new URL("" + new URL("proj4rs_bg-Biz-E4lt.wasm", import.meta.url).href, import.meta.url));
    const t = Zb();
    (typeof e == "string" || typeof Request == "function" && e instanceof Request || typeof URL == "function" && e instanceof URL) && (e = fetch(e));
    const { instance: n, module: r } = await Xb(await e, t);
    return Qb(n, r);
  }
  const e0 = "" + new URL("proj4rs_bg-Biz-E4lt.wasm", import.meta.url).href, ji = {
    WGS84: "+proj=longlat +datum=WGS84 +no_defs",
    GRS80: "+proj=latlong +ellps=GRS80 +no_defs",
    UTM_ZONE_50N: "+proj=utm +zone=50 +datum=WGS84 +units=m +no_defs",
    UTM_ZONE_51N: "+proj=utm +zone=51 +datum=WGS84 +units=m +no_defs",
    CGCS2000_3_DEGREE: "+proj=tmerc +lat_0=0 +lon_0=117 +k=1 +x_0=500000 +y_0=0 +ellps=GRS80 +units=m +no_defs",
    BEIJING_1954: "+proj=tmerc +lat_0=0 +lon_0=117 +k=1 +x_0=500000 +y_0=0 +ellps=krass +units=m +no_defs",
    WEB_MERCATOR: "+proj=merc +a=6378137 +b=6378137 +lat_ts=0.0 +lon_0=0.0 +x_0=0.0 +y_0=0 +k=1.0 +units=m +nadgrids=@null +wktext +no_defs"
  };
  let ra = false;
  async function sh() {
    if (!ra) try {
      console.log("[Proj4WASM] Fetching WASM module..."), await oh({
        module_or_path: e0
      }), ra = true, console.log("[Proj4WASM] WASM module loaded successfully.");
    } catch (e) {
      console.warn("[Proj4WASM] Failed to load WASM module, using the JS fallback."), console.error(e), ra = true;
    }
  }
  async function Vc(e, t, n) {
    try {
      await sh();
      const r = new lr(e), l = new lr(t), c = new Xo(n[0], n[1], 0);
      Pa(r, l, c);
      const f = [
        c.x,
        c.y
      ];
      return r.free(), l.free(), c.free(), f;
    } catch (r) {
      throw new Error(`Failed to transform coordinate: ${r instanceof Error ? r.message : String(r)}`);
    }
  }
  function t0(e, t) {
    const n = t.x - e.x, r = t.y - e.y;
    return Math.sqrt(n * n + r * r);
  }
  function Hc(e, t) {
    const r = e.latitude * Math.PI / 180, l = t.latitude * Math.PI / 180, c = (t.latitude - e.latitude) * Math.PI / 180, f = (t.longitude - e.longitude) * Math.PI / 180, h = Math.sin(c / 2) * Math.sin(c / 2) + Math.cos(r) * Math.cos(l) * Math.sin(f / 2) * Math.sin(f / 2);
    return 6371e3 * (2 * Math.atan2(Math.sqrt(h), Math.sqrt(1 - h)));
  }
  async function n0(e, t, n = {}) {
    const { projection: r = ji.CGCS2000_3_DEGREE, useHaversine: l = false } = n;
    if (l) return Hc(e, t);
    try {
      const c = await Vc(ji.WGS84, r, [
        e.longitude,
        e.latitude
      ]), f = await Vc(ji.WGS84, r, [
        t.longitude,
        t.latitude
      ]);
      return t0({
        x: c[0],
        y: c[1]
      }, {
        x: f[0],
        y: f[1]
      });
    } catch (c) {
      return console.warn("Failed to use proj4 distance calculation, falling back to haversine:", c), Hc(e, t);
    }
  }
  Tv = async function(e, t = {}) {
    if (e.length < 2) return 0;
    let n = 0;
    for (let r = 1; r < e.length; r++) n += await n0(e[r - 1], e[r], t);
    return n;
  };
  Sv = function(e) {
    return e < 1e3 ? `${Math.round(e)} m` : e < 1e4 ? `${(e / 1e3).toFixed(1)} km` : `${Math.round(e / 1e3)} km`;
  };
  const { sin: qt, cos: r0, sqrt: ll, abs: Zo, PI: Ft } = Math, qc = 6378245, Yc = 0.006693421622965823;
  function ah(e, t) {
    return e >= 72.004 && e <= 137.8347 && t >= 0.8293 && t <= 55.8271;
  }
  function i0(e, t) {
    let n = -100 + 2 * e + 3 * t + 0.2 * t * t + 0.1 * e * t + 0.2 * ll(Zo(e));
    return n += (20 * qt(6 * e * Ft) + 20 * qt(2 * e * Ft)) * 2 / 3, n += (20 * qt(t * Ft) + 40 * qt(t / 3 * Ft)) * 2 / 3, n += (160 * qt(t / 12 * Ft) + 320 * qt(t * Ft / 30)) * 2 / 3, n;
  }
  function o0(e, t) {
    let n = 300 + e + 2 * t + 0.1 * e * e + 0.1 * e * t + 0.1 * ll(Zo(e));
    return n += (20 * qt(6 * e * Ft) + 20 * qt(2 * e * Ft)) * 2 / 3, n += (20 * qt(e * Ft) + 40 * qt(e / 3 * Ft)) * 2 / 3, n += (150 * qt(e / 12 * Ft) + 300 * qt(e / 30 * Ft)) * 2 / 3, n;
  }
  function s0(e, t) {
    let n = o0(e - 105, t - 35), r = i0(e - 105, t - 35);
    const l = t / 180 * Ft;
    let c = qt(l);
    c = 1 - Yc * c * c;
    const f = ll(c);
    return n = n * 180 / (qc / f * r0(l) * Ft), r = r * 180 / (qc * (1 - Yc) / (c * f) * Ft), [
      n,
      r
    ];
  }
  function cr(e) {
    const [t, n] = e;
    if (!ah(t, n)) return [
      t,
      n
    ];
    const r = s0(t, n);
    return [
      t + r[0],
      n + r[1]
    ];
  }
  function si(e) {
    const [t, n] = e;
    if (!ah(t, n)) return [
      t,
      n
    ];
    let [r, l] = [
      t,
      n
    ], c = cr([
      r,
      l
    ]), f = c[0] - t, h = c[1] - n;
    for (; Zo(f) > 1e-6 || Zo(h) > 1e-6; ) r -= f, l -= h, c = cr([
      r,
      l
    ]), f = c[0] - t, h = c[1] - n;
    return [
      r,
      l
    ];
  }
  const { sin: Qo, cos: es, atan2: lh, sqrt: ch, PI: a0 } = Math, ts = a0 * 3e3 / 180;
  function Jr(e) {
    const [t, n] = e, r = t - 65e-4, l = n - 6e-3, c = ch(r * r + l * l) - 2e-5 * Qo(l * ts), f = lh(l, r) - 3e-6 * es(r * ts), h = c * es(f), p = c * Qo(f);
    return [
      h,
      p
    ];
  }
  function ai(e) {
    const [t, n] = e, r = t, l = n, c = ch(r * r + l * l) + 2e-5 * Qo(l * ts), f = lh(l, r) + 3e-6 * es(r * ts), h = c * es(f) + 65e-4, p = c * Qo(f) + 6e-3;
    return [
      h,
      p
    ];
  }
  const Kc = 180 / Math.PI, Jc = Math.PI / 180, ns = 6378137, Qn = 20037508342789244e-9;
  function vo(e) {
    return [
      e[0] * Kc / ns,
      (Math.PI * 0.5 - 2 * Math.atan(Math.exp(-e[1] / ns))) * Kc
    ];
  }
  function Rs(e) {
    const t = Math.abs(e[0]) <= 180 ? e[0] : e[0] - (e[0] < 0 ? -1 : 1) * 360, n = [
      ns * t * Jc,
      ns * Math.log(Math.tan(Math.PI * 0.25 + 0.5 * e[1] * Jc))
    ];
    return n[0] > Qn && (n[0] = Qn), n[0] < -Qn && (n[0] = -Qn), n[1] > Qn && (n[1] = Qn), n[1] < -Qn && (n[1] = -Qn), n;
  }
  const { abs: rs } = Math, Xc = [
    1289059486e-2,
    836237787e-2,
    5591021,
    348198983e-2,
    167804312e-2,
    0
  ], Zc = [
    75,
    60,
    45,
    30,
    15,
    0
  ], l0 = [
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
  ], c0 = [
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
  function uh(e, t, n) {
    const r = rs(t) / n[9];
    let l = n[0] + n[1] * rs(e), c = n[2] + n[3] * r + n[4] * Math.pow(r, 2) + n[5] * Math.pow(r, 3) + n[6] * Math.pow(r, 4) + n[7] * Math.pow(r, 5) + n[8] * Math.pow(r, 6);
    return l *= e < 0 ? -1 : 1, c *= t < 0 ? -1 : 1, [
      l,
      c
    ];
  }
  function Ms(e) {
    const [t, n] = e;
    let r = [];
    for (let l = 0; l < Zc.length; l++) if (rs(n) > Zc[l]) {
      r = c0[l];
      break;
    }
    return uh(t, n, r);
  }
  function Eo(e) {
    const [t, n] = e;
    let r = [];
    for (let l = 0; l < Xc.length; l++) if (rs(n) >= Xc[l]) {
      r = l0[l];
      break;
    }
    return uh(t, n, r);
  }
  function er(e, t) {
    if (!e) throw new Error(t);
  }
  function fh(e) {
    return !!e && Object.prototype.toString.call(e) === "[object Array]";
  }
  function Qc(e) {
    return !isNaN(Number(e)) && e !== null && !fh(e);
  }
  function on(...e) {
    const t = e.length - 1;
    return function(...n) {
      let r = t, l = e[t].apply(null, n);
      for (; r--; ) l = e[r].call(null, l);
      return l;
    };
  }
  function hh(e, t, n = false) {
    if (e === null) return;
    let r, l, c, f, h, p, v = 0, g = 0, T, M;
    const { type: R } = e, j = R === "FeatureCollection", L = R === "Feature", he = j ? e.features.length : 1;
    for (let re = 0; re < he; re++) {
      T = j ? e.features[re].geometry : L ? e.geometry : e, M = T ? T.type === "GeometryCollection" : false, p = M ? T.geometries.length : 1;
      for (let K = 0; K < p; K++) {
        let ee = 0, G = 0;
        if (f = M ? T.geometries[K] : T, f === null) continue;
        const ue = f.type;
        switch (v = n && (ue === "Polygon" || ue === "MultiPolygon") ? 1 : 0, ue) {
          case null:
            break;
          case "Point":
            if (h = f.coordinates, t(h, g, re, ee, G) === false) return false;
            g++, ee++;
            break;
          case "LineString":
          case "MultiPoint":
            for (h = f.coordinates, r = 0; r < h.length; r++) {
              if (t(h[r], g, re, ee, G) === false) return false;
              g++, ue === "MultiPoint" && ee++;
            }
            ue === "LineString" && ee++;
            break;
          case "Polygon":
          case "MultiLineString":
            for (h = f.coordinates, r = 0; r < h.length; r++) {
              for (l = 0; l < h[r].length - v; l++) {
                if (t(h[r][l], g, re, ee, G) === false) return false;
                g++;
              }
              ue === "MultiLineString" && ee++, ue === "Polygon" && G++;
            }
            ue === "Polygon" && ee++;
            break;
          case "MultiPolygon":
            for (h = f.coordinates, r = 0; r < h.length; r++) {
              for (G = 0, l = 0; l < h[r].length; l++) {
                for (c = 0; c < h[r][l].length - v; c++) {
                  if (t(h[r][l][c], g, re, ee, G) === false) return false;
                  g++;
                }
                G++;
              }
              ee++;
            }
            break;
          case "GeometryCollection":
            for (r = 0; r < f.geometries.length; r++) if (hh(f.geometries[r], t, n) === false) return false;
            break;
          default:
            throw new Error("Unknown Geometry Type");
        }
      }
    }
  }
  var it;
  (function(e) {
    e.WGS84 = "WGS84", e.WGS1984 = "WGS84", e.EPSG4326 = "WGS84", e.GCJ02 = "GCJ02", e.AMap = "GCJ02", e.BD09 = "BD09", e.BD09LL = "BD09", e.Baidu = "BD09", e.BMap = "BD09", e.BD09MC = "BD09MC", e.BD09Meter = "BD09MC", e.EPSG3857 = "EPSG3857", e.EPSG900913 = "EPSG3857", e.EPSG102100 = "EPSG3857", e.WebMercator = "EPSG3857", e.WM = "EPSG3857";
  })(it || (it = {}));
  const u0 = {
    to: {
      [it.GCJ02]: cr,
      [it.BD09]: on(ai, cr),
      [it.BD09MC]: on(Ms, ai, cr),
      [it.EPSG3857]: Rs
    }
  }, f0 = {
    to: {
      [it.WGS84]: si,
      [it.BD09]: ai,
      [it.BD09MC]: on(Ms, ai),
      [it.EPSG3857]: on(Rs, si)
    }
  }, h0 = {
    to: {
      [it.WGS84]: on(si, Jr),
      [it.GCJ02]: Jr,
      [it.EPSG3857]: on(Rs, si, Jr),
      [it.BD09MC]: Ms
    }
  }, d0 = {
    to: {
      [it.WGS84]: vo,
      [it.GCJ02]: on(cr, vo),
      [it.BD09]: on(ai, cr, vo),
      [it.BD09MC]: on(Ms, ai, cr, vo)
    }
  }, p0 = {
    to: {
      [it.WGS84]: on(si, Jr, Eo),
      [it.GCJ02]: on(Jr, Eo),
      [it.EPSG3857]: on(Rs, si, Jr, Eo),
      [it.BD09]: Eo
    }
  }, g0 = {
    WGS84: u0,
    GCJ02: f0,
    BD09: h0,
    EPSG3857: d0,
    BD09MC: p0
  };
  var m0 = g0;
  function w0(e, t, n) {
    if (er(!!e, "The args[0] input coordinate is required"), er(!!t, "The args[1] original coordinate system is required"), er(!!n, "The args[2] target coordinate system is required"), t === n) return e;
    const r = m0[t];
    er(!!r, `Invalid original coordinate system: ${t}`);
    const l = r.to[n];
    er(!!l, `Invalid target coordinate system: ${n}`);
    const c = typeof e;
    if (er(c === "string" || c === "object", `Invalid input coordinate type: ${c}`), c === "string") try {
      e = JSON.parse(e);
    } catch {
      throw new Error(`Invalid input coordinate: ${e}`);
    }
    let f = false;
    fh(e) && (er(e.length >= 2, `Invalid input coordinate: ${e}`), er(Qc(e[0]) && Qc(e[1]), `Invalid input coordinate: ${e}`), e = e.map(Number), f = true);
    const h = l;
    return f ? h(e) : (hh(e, (p) => {
      [p[0], p[1]] = h(p);
    }), e);
  }
  const ia = Object.assign(Object.assign({}, it), {
    CRSTypes: it,
    transform: w0
  });
  class dh {
    constructor(t) {
      __publicField(this, "referencePoint", null);
      __publicField(this, "localProjection", null);
      __publicField(this, "geolocationCorrectionEnabled");
      this.geolocationCorrectionEnabled = this.getGeolocationCorrectionSetting(), (t == null ? void 0 : t.referencePoint) && this.setReferencePoint(t.referencePoint, t.projection);
    }
    getGeolocationCorrectionSetting() {
      return Bt("geolocationCorrection") ?? false;
    }
    setReferencePoint(t, n) {
      this.referencePoint = t, this.localProjection = n || `+proj=tmerc +lat_0=${t.latitude} +lon_0=${t.longitude} +k=1 +x_0=0 +y_0=0 +datum=WGS84 +units=m +no_defs`;
    }
    async geographicToLocal(t) {
      if (!this.referencePoint || !this.localProjection) throw new Error("Reference point not set. Call setReferencePoint() first.");
      try {
        const n = new lr(ji.WGS84), r = new lr(this.localProjection), l = new Xo(t.longitude, t.latitude, 0);
        Pa(n, r, l);
        const c = {
          x: l.x,
          y: l.y
        };
        return n.free(), r.free(), l.free(), c;
      } catch {
        return this.geographicToLocalFallback(t);
      }
    }
    async localToGeographic(t) {
      if (!this.referencePoint || !this.localProjection) throw new Error("Reference point not set. Call setReferencePoint() first.");
      try {
        const n = new lr(this.localProjection), r = new lr(ji.WGS84), l = new Xo(t.x, t.y, 0);
        Pa(n, r, l);
        const c = {
          longitude: l.x,
          latitude: l.y
        };
        return n.free(), r.free(), l.free(), c;
      } catch {
        return this.localToGeographicFallback(t);
      }
    }
    geographicToLocalFallback(t) {
      if (!this.referencePoint) throw new Error("Reference point not set");
      const n = 6371e3, r = this.referencePoint.latitude * Math.PI / 180, l = this.referencePoint.longitude * Math.PI / 180, c = t.latitude * Math.PI / 180, f = t.longitude * Math.PI / 180, h = n * (f - l) * Math.cos((r + c) / 2), p = n * (c - r);
      return {
        x: h,
        y: p
      };
    }
    localToGeographicFallback(t) {
      if (!this.referencePoint) throw new Error("Reference point not set");
      const n = 6371e3, r = this.referencePoint.latitude * Math.PI / 180, l = this.referencePoint.longitude * Math.PI / 180, c = (t.y / n + r) * 180 / Math.PI, f = (t.x / (n * Math.cos(r)) + l) * 180 / Math.PI;
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
  function y0(e) {
    const t = ia.transform([
      e.longitude,
      e.latitude
    ], ia.WGS84, ia.GCJ02);
    return new Un(t[1], t[0]);
  }
  new dh();
  class b0 {
    constructor(t) {
      __publicField(this, "state");
      __publicField(this, "config");
      __publicField(this, "coordinateTransformer");
      __publicField(this, "lastKalmanGain", null);
      __publicField(this, "isInitialized", false);
      this.config = {
        sigmaAcceleration: 0.1,
        initialPositionUncertainty: 20,
        initialVelocityUncertainty: 4,
        ...t
      }, this.coordinateTransformer = new dh(), this.state = this.createInitialState();
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
        covariance: new at([
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
      this.coordinateTransformer.isInitialized() || this.coordinateTransformer.setReferencePoint({
        longitude: t.longitude,
        latitude: t.latitude
      });
      const n = await this.coordinateTransformer.geographicToLocal({
        longitude: t.longitude,
        latitude: t.latitude
      });
      this.state.position = {
        x: n.x,
        y: n.y
      }, this.state.timestamp = t.timestamp;
      const r = this.gpsAccuracyToSigma(t.accuracy);
      this.state.covariance = new at([
        [
          r * r,
          0,
          0,
          0
        ],
        [
          0,
          r * r,
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
      ]), this.isInitialized = true;
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
      const n = (t.timestamp - this.state.timestamp) / 1e3;
      n > 0 && this.predictInternal(n), await this.updateGPSInternal(t), this.state.timestamp = t.timestamp;
    }
    updateIMU(t) {
      if (!this.isInitialized) return;
      const n = (t.timestamp - this.state.timestamp) / 1e3;
      n > 0 && t.acceleration && (this.predictInternal(n, t.acceleration), this.state.timestamp = t.timestamp);
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
    predictInternal(t, n) {
      const r = new at([
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
      ]), l = new at([
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
      ]), c = new at([
        [
          n ? n.x : 0
        ],
        [
          n ? n.y : 0
        ]
      ]), f = this.config.sigmaAcceleration, h = new at([
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
      ]).mul(f * f), p = new at([
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
      ]), v = r.mmul(p).add(l.mmul(c)), g = r.mmul(this.state.covariance).mmul(r.transpose()).add(h);
      this.state.position = {
        x: v.get(0, 0),
        y: v.get(1, 0)
      }, this.state.velocity = {
        x: v.get(2, 0),
        y: v.get(3, 0)
      }, this.state.covariance = g;
    }
    async updateGPSInternal(t) {
      const n = await this.coordinateTransformer.geographicToLocal({
        longitude: t.longitude,
        latitude: t.latitude
      }), r = new at([
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
      ]), l = new at([
        [
          n.x
        ],
        [
          n.y
        ]
      ]), c = this.gpsAccuracyToSigma(t.accuracy), f = new at([
        [
          c * c,
          0
        ],
        [
          0,
          c * c
        ]
      ]), p = r.mmul(this.state.covariance).mmul(r.transpose()).add(f), v = this.state.covariance.mmul(r.transpose()).mmul(Bb(p));
      this.lastKalmanGain = v;
      const g = new at([
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
      ]), T = l.subtract(r.mmul(g)), M = g.add(v.mmul(T)), he = at.identity(4, 4).subtract(v.mmul(r)).mmul(this.state.covariance).add(at.identity(4, 4).mul(1e-6));
      this.state.position = {
        x: M.get(0, 0),
        y: M.get(1, 0)
      }, this.state.velocity = {
        x: M.get(2, 0),
        y: M.get(3, 0)
      }, this.state.covariance = he;
    }
    gpsAccuracyToSigma(t) {
      return t / Math.sqrt(2 * Math.log(20));
    }
  }
  class v0 {
    constructor(t = 100) {
      __publicField(this, "imuProvider", null);
      __publicField(this, "isListening", false);
      __publicField(this, "imuCallbacks", []);
      __publicField(this, "imuUpdateInterval", null);
      this.imuUpdateIntervalMs = t;
    }
    async initialize() {
      try {
        const t = Ji();
        if (t.isErr()) return N(new Me("Platform services not available for IMU", "BACKEND_NOT_AVAILABLE", t.error));
        const n = t.value.getIMU();
        return n.isErr() ? N(new Me("IMU provider not available", "BACKEND_NOT_AVAILABLE", n.error)) : (this.imuProvider = n.value, D(void 0));
      } catch (t) {
        return N(new Me("Exception during IMU initialization", "UPDATE_SERVICE_ERROR", t));
      }
    }
    async isAvailable() {
      return !this.imuProvider && (await this.initialize()).isErr() ? false : !!this.imuProvider;
    }
    async startListening(t) {
      if (!this.imuProvider) return N(new Me("IMU not initialized", "BACKEND_NOT_AVAILABLE"));
      if (this.isListening) return this.imuCallbacks.push(t), D(void 0);
      try {
        const n = await this.imuProvider.startAcceleration({
          frequency: 10,
          normalizeToENU: true
        });
        n.isErr() && console.warn("[IMUFusionManager] Failed to start acceleration sensor:", n.error);
        const r = await this.imuProvider.startGyroscope({
          frequency: 10,
          normalizeToENU: true
        });
        return r.isErr() && console.warn("[IMUFusionManager] Failed to start gyroscope sensor:", r.error), this.imuCallbacks.push(t), this.isListening = true, this.startIMUPolling(), console.info("[IMUFusionManager] Started IMU sensor fusion"), D(void 0);
      } catch (n) {
        return N(new Me("Failed to start IMU listening", "UPDATE_SERVICE_ERROR", n));
      }
    }
    async stopListening() {
      if (!this.isListening || !this.imuProvider) return D(void 0);
      try {
        this.imuUpdateInterval && (clearInterval(this.imuUpdateInterval), this.imuUpdateInterval = null);
        const t = this.imuProvider.stopAcceleration();
        t.isErr() && console.warn("[IMUFusionManager] Failed to stop acceleration sensor:", t.error);
        const n = this.imuProvider.stopGyroscope();
        return n.isErr() && console.warn("[IMUFusionManager] Failed to stop gyroscope sensor:", n.error), this.imuCallbacks = [], this.isListening = false, console.info("[IMUFusionManager] Stopped IMU sensor fusion"), D(void 0);
      } catch (t) {
        return N(new Me("Failed to stop IMU listening", "UPDATE_SERVICE_ERROR", t));
      }
    }
    startIMUPolling() {
      this.imuProvider && (this.imuUpdateInterval = setInterval(async () => {
        try {
          const t = await this.getCombinedIMUReading();
          if (t) for (const n of this.imuCallbacks) try {
            n(t);
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
        const [t, n] = await Promise.all([
          this.imuProvider.getAccelerationReading(),
          this.imuProvider.getGyroscopeReading()
        ]), r = {
          timestamp: performance.now()
        };
        return t.isOk() && t.value && (r.acceleration = {
          x: t.value.x,
          y: t.value.y,
          z: t.value.z
        }), n.isOk() && n.value && (r.gyroscope = {
          x: n.value.x,
          y: n.value.y,
          z: n.value.z
        }), r;
      } catch (t) {
        return console.error("[IMUFusionManager] Error getting combined IMU reading:", t), null;
      }
    }
  }
  class E0 {
    constructor(t, n, r = 100) {
      __publicField(this, "kalmanFilter");
      __publicField(this, "imuManager");
      __publicField(this, "callback", null);
      __publicField(this, "isInitialized", false);
      __publicField(this, "lastOutputTime", 0);
      __publicField(this, "lastOutputAccuracy", 0);
      this.kalmanFilter = new b0(n), this.imuManager = new v0(r), this.callback = t;
    }
    async initialize(t) {
      try {
        (await this.imuManager.initialize()).isErr() && console.warn("[LocationProcessor] IMU not available, using GPS-only mode");
        try {
          await this.kalmanFilter.initialize(t), this.isInitialized = true;
        } catch (r) {
          return N(new Me("Failed to initialize Kalman filter", "UPDATE_SERVICE_ERROR", r));
        }
        return D(void 0);
      } catch (n) {
        return N(new Me("Failed to initialize location processor", "UPDATE_SERVICE_ERROR", n));
      }
    }
    async startGPS() {
      try {
        return await this.imuManager.isAvailable() && (await this.imuManager.startListening((r) => this.processIMUReading(r))).isErr() && console.warn("[LocationProcessor] Failed to start IMU, using GPS-only"), this.isInitialized = true, console.info("[LocationProcessor] Started location processing"), D(void 0);
      } catch (t) {
        return N(new Me("Failed to start GPS processing", "UPDATE_SERVICE_ERROR", t));
      }
    }
    async stopGPS() {
      try {
        const t = await this.imuManager.stopListening();
        return t.isErr() && console.warn("[LocationProcessor] Failed to stop IMU:", t.error), this.isInitialized = false, console.info("[LocationProcessor] Stopped location processing"), D(void 0);
      } catch (t) {
        return N(new Me("Failed to stop GPS processing", "UPDATE_SERVICE_ERROR", t));
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
          const l = await this.kalmanFilter.getFilteredPosition(), c = new Un(l.latitude, l.longitude, t.accuracy);
          this.notifyCallback(c);
          return;
        }
        await this.kalmanFilter.updateGPS(t), this.lastOutputAccuracy = t.accuracy;
        const n = await this.kalmanFilter.getFilteredPosition(), r = new Un(n.latitude, n.longitude, t.accuracy);
        this.notifyCallback(r);
      } catch (n) {
        console.error("[LocationProcessor] Error processing GPS location:", n);
      }
    }
    processIMUReading(t) {
      if (!(!this.isInitialized || !this.kalmanFilter.isFilterInitialized())) try {
        this.kalmanFilter.updateIMU(t), this.outputPredictedPosition();
      } catch (n) {
        console.error("[LocationProcessor] Error processing IMU reading:", n);
      }
    }
    async outputPredictedPosition() {
      const t = performance.now();
      if (!(t - this.lastOutputTime < 50)) {
        this.lastOutputTime = t;
        try {
          const n = await this.kalmanFilter.getFilteredPosition(), r = new Un(n.latitude, n.longitude, this.lastOutputAccuracy || 10);
          this.notifyCallback(r);
        } catch (n) {
          console.error("[LocationProcessor] Error outputting predicted position:", n);
        }
      }
    }
    async getCurrentFilteredPosition() {
      if (!this.kalmanFilter.isFilterInitialized()) return N(new Me("Kalman filter not initialized", "UPDATE_SERVICE_ERROR"));
      try {
        const t = await this.kalmanFilter.getFilteredPosition(), n = new Un(t.latitude, t.longitude, this.lastOutputAccuracy || 10);
        return D(n);
      } catch (t) {
        return N(new Me("Failed to get filtered position", "UPDATE_SERVICE_ERROR", t));
      }
    }
    getLastKalmanGain() {
      return this.kalmanFilter.getLastKalmanGain();
    }
    isProcessorInitialized() {
      return this.isInitialized;
    }
    notifyCallback(t) {
      if (this.callback) try {
        this.callback(t, "kalman");
      } catch (n) {
        console.error("[LocationProcessor] Callback error:", n);
      }
    }
  }
  class I0 {
    constructor(t = {
      sigmaAcceleration: 1,
      initialPositionUncertainty: 20,
      initialVelocityUncertainty: 4,
      imuUpdateInterval: 100
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
      if (this.isInitialized) return D(void 0);
      try {
        const t = Ji();
        if (t.isErr()) return N(new Me("Platform services not available", "BACKEND_NOT_AVAILABLE", t.error));
        const n = t.value.getGeolocationProvider();
        if (!n) return N(new Me("Geolocation provider not available", "BACKEND_NOT_AVAILABLE"));
        this.provider = n;
        const r = await this.provider.getCurrentPosition();
        if (r.isErr()) return N(new Me("Failed to get the initial geolocation", "UPDATE_SERVICE_ERROR", r.error));
        this.processor = new E0((c, f) => this.handleLocationUpdate(c), this.config, this.config.imuUpdateInterval);
        const l = await this.processor.initialize({
          latitude: r.value.coords.latitude,
          longitude: r.value.coords.longitude,
          accuracy: r.value.coords.accuracy,
          timestamp: performance.now()
        });
        return l.isErr() ? l : (this.isInitialized = true, D(void 0));
      } catch (t) {
        return N(new Me("Exception during Kalman backend initialization", "UPDATE_SERVICE_ERROR", t));
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
      if (!this.provider || !this.processor) return N(new Me("Kalman backend not properly initialized", "BACKEND_NOT_AVAILABLE"));
      try {
        this.userCallback = t;
        const n = await this.provider.watchPosition((l) => {
          var _a3;
          const c = {
            latitude: l.coords.latitude,
            longitude: l.coords.longitude,
            accuracy: l.coords.accuracy,
            timestamp: performance.now()
          };
          (_a3 = this.processor) == null ? void 0 : _a3.processGPSLocation(c);
        }, {
          highFrequency: true
        });
        if (n.isErr()) return N(new Me("Failed to start watching position", "UPDATE_SERVICE_ERROR", n.error));
        this.watchId = n.value;
        const r = await this.processor.startGPS();
        return r.isErr() ? (this.watchId !== null && this.provider && this.provider.clearWatch(this.watchId), r) : (console.info("[KalmanBackend] Started Kalman-filtered location watching"), D(void 0));
      } catch (n) {
        return N(new Me("Exception during start watching", "UPDATE_SERVICE_ERROR", n));
      }
    }
    async stopWatching() {
      if (!this.provider || !this.processor) return D(void 0);
      try {
        const t = await this.processor.stopGPS();
        if (t.isErr() && console.warn("[KalmanBackend] Failed to stop processor cleanly:", t.error), this.watchId !== null) {
          const n = this.provider.clearWatch(this.watchId);
          n.isErr() && console.warn("[KalmanBackend] Failed to clear watch:", n.error), this.watchId = null;
        }
        return console.info("[KalmanBackend] Stopped Kalman-filtered location watching"), D(void 0);
      } catch (t) {
        return N(new Me("Exception during stop watching", "UPDATE_SERVICE_ERROR", t));
      }
    }
    async getCurrentPosition() {
      if (!this.provider || !this.processor) return N(new Me("Kalman backend not properly initialized", "BACKEND_NOT_AVAILABLE"));
      try {
        const t = await this.provider.getCurrentPosition();
        if (t.isErr()) return N(new Me("Failed to get current position", "UPDATE_SERVICE_ERROR", t.error));
        const n = t.value, r = {
          latitude: n.coords.latitude,
          longitude: n.coords.longitude,
          accuracy: n.coords.accuracy,
          timestamp: n.timestamp || performance.now()
        };
        return await this.processor.processGPSLocation(r), await this.processor.getCurrentFilteredPosition();
      } catch (t) {
        return N(new Me("Exception getting current position", "UPDATE_SERVICE_ERROR", t));
      }
    }
    getLastKalmanGain() {
      return this.processor ? this.processor.getLastKalmanGain() : null;
    }
    handleLocationUpdate(t) {
      if (this.userCallback) try {
        this.userCallback(t, "kalman");
      } catch (n) {
        console.error("[KalmanBackend] User callback error:", n);
      }
    }
  }
  ln = (_a2 = class {
    constructor() {
      __publicField(this, "isInitialized", false);
      __publicField(this, "backendManager");
      __publicField(this, "stateManager");
      __publicField(this, "locationUpdateCallbacks", /* @__PURE__ */ new Map());
      __publicField(this, "nextCallbackId", 1);
      const t = [];
      Ab() && t.push(new I0()), t.push(new qb()), t.push(new Yb()), this.backendManager = new zb(t), this.stateManager = new Hb();
    }
    static async getInstance() {
      if (ln.instance || (ln.instance = new ln()), !ln.instance.isInitialized) {
        const t = await ln.instance.initialize();
        if (t.isErr()) return N(t.error);
      }
      return D(ln.instance);
    }
    static getExistingInstance() {
      if (!ln.instance) throw new Error("GeolocationManager not initialized. Call getInstance() first.");
      return ln.instance;
    }
    static reset() {
      ln.instance = null;
    }
    async initialize() {
      if (this.isInitialized) return console.info("[GeolocationManager] Already initialized"), D(void 0);
      console.info("[GeolocationManager] Initializing geolocation services with new architecture");
      try {
        this.stateManager.subscribe((r, l) => {
          this.notifyCallbacks(r);
        });
        const t = await this.backendManager.initialise();
        if (t.isErr()) return console.warn("[GeolocationManager] No backend available for location"), N(new Pn("No geolocation backend available", "no_backend_available", t.error));
        console.log("initialised");
        const n = await this.backendManager.getCurrentPosition();
        return n.isOk() ? (this.stateManager.updateLocation(n.value, this.backendManager.getActiveBackend()), this.isInitialized = true, console.info("[GeolocationManager] Geolocation services initialized successfully"), D(void 0)) : N(new Pn("Backend selected fail to obtain geolocation", "backend_error", n.error));
      } catch (t) {
        const n = go(t, "Failed to initialize geolocation manager");
        return Ir(n, "GeolocationManager.initialize"), N(new Pn("Exception during initialization", "initialization_failed", n));
      }
    }
    async getCurrentLocation() {
      if (!this.isInitialized) {
        const t = new Pn("Geolocation manager not initialized", "not_initialized");
        return Ir(t, "GeolocationManager.getCurrentLocation"), N(t);
      }
      try {
        const t = await this.backendManager.getCurrentPosition();
        return t.isOk() && this.stateManager.updateLocation(t.value, this.backendManager.getActiveBackend() || "gps"), t;
      } catch (t) {
        const n = go(t, "Failed to get current location");
        return Ir(n, "GeolocationManager.getCurrentLocation"), N(new Pn("Failed to get current location", "get_location_failed", n));
      }
    }
    async startLocationUpdates(t) {
      if (!this.isInitialized) {
        const n = new Pn("Geolocation manager not initialized", "not_initialized");
        return Ir(n, "GeolocationManager.startLocationUpdates"), N(n);
      }
      console.info("[GeolocationManager] Starting location updates");
      try {
        const n = this.nextCallbackId++;
        this.locationUpdateCallbacks.set(n, t);
        const r = await this.backendManager.startWatching((l, c) => {
          this.stateManager.updateLocation(l, c), this.notifyCallbacks(l);
        });
        return r.isErr() ? (this.locationUpdateCallbacks.delete(n), N(r.error)) : (console.info(`[GeolocationManager] Location updates started with handler ${n}`), D(n));
      } catch (n) {
        const r = go(n, "Failed to start location updates");
        return Ir(r, "GeolocationManager.startLocationUpdates"), N(new Pn("Failed to start location updates", "start_updates_failed", r));
      }
    }
    async stopLocationUpdates(t) {
      if (!this.isInitialized) {
        const n = new Pn("Geolocation manager not initialized", "not_initialized");
        return Ir(n, "GeolocationManager.stopLocationUpdates"), N(n);
      }
      console.info("[GeolocationManager] Stopping location updates");
      try {
        if (this.locationUpdateCallbacks.delete(t), this.locationUpdateCallbacks.size === 0) {
          const n = await this.backendManager.stopWatching();
          if (n.isErr()) return N(n.error);
        }
        return console.info(`[GeolocationManager] Location updates stopped for handler ${t}`), D(void 0);
      } catch (n) {
        const r = go(n, "Failed to stop location updates");
        return Ir(r, "GeolocationManager.stopLocationUpdates"), N(new Pn("Failed to stop location updates", "stop_updates_failed", r));
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
      return t || (console.warn("[GeolocationManager] No known location available - returning default coordinates (0, 0)"), new Un(0, 0));
    }
    addLocationListener(t) {
      const n = this.nextCallbackId++;
      return this.locationUpdateCallbacks.set(n, t), n;
    }
    removeLocationListener(t) {
      this.locationUpdateCallbacks.delete(t);
    }
    getLastKalmanGain() {
      if (this.backendManager.getActiveBackend() === "kalman") {
        const n = this.backendManager.strategies.find((r) => r.name === "kalman");
        if (n && "getLastKalmanGain" in n) return n.getLastKalmanGain();
      }
      return null;
    }
    applyGeolocationCorrection(t) {
      return Bt("geolocationCorrection") ? y0(t) : t;
    }
    notifyCallbacks(t) {
      const n = this.applyGeolocationCorrection(t), r = qf(n);
      for (const l of this.locationUpdateCallbacks.values()) try {
        l(r);
      } catch (c) {
        console.error("[GeolocationManager] Callback error:", c);
      }
    }
    async refreshBackend() {
      return D(void 0);
    }
  }, __publicField(_a2, "instance", null), _a2);
  let ph;
  const Ns = (e) => ph = e, gh = /* @__PURE__ */ Symbol();
  function Ca(e) {
    return e && typeof e == "object" && Object.prototype.toString.call(e) === "[object Object]" && typeof e.toJSON != "function";
  }
  var Ui;
  (function(e) {
    e.direct = "direct", e.patchObject = "patch object", e.patchFunction = "patch function";
  })(Ui || (Ui = {}));
  function mh() {
    const e = du(true), t = e.run(() => jt({}));
    let n = [], r = [];
    const l = za({
      install(c) {
        Ns(l), l._a = c, c.provide(gh, l), c.config.globalProperties.$pinia = l, r.forEach((f) => n.push(f)), r = [];
      },
      use(c) {
        return this._a ? n.push(c) : r.push(c), this;
      },
      _p: n,
      _a: null,
      _e: e,
      _s: /* @__PURE__ */ new Map(),
      state: t
    });
    return l;
  }
  const wh = () => {
  };
  function eu(e, t, n, r = wh) {
    e.add(t);
    const l = () => {
      e.delete(t) && r();
    };
    return !n && pu() && Bh(l), l;
  }
  function $r(e, ...t) {
    e.forEach((n) => {
      n(...t);
    });
  }
  const T0 = (e) => e(), tu = /* @__PURE__ */ Symbol(), oa = /* @__PURE__ */ Symbol();
  function ka(e, t) {
    e instanceof Map && t instanceof Map ? t.forEach((n, r) => e.set(r, n)) : e instanceof Set && t instanceof Set && t.forEach(e.add, e);
    for (const n in t) {
      if (!t.hasOwnProperty(n)) continue;
      const r = t[n], l = e[n];
      Ca(l) && Ca(r) && e.hasOwnProperty(n) && !st(r) && !Gn(r) ? e[n] = ka(l, r) : e[n] = r;
    }
    return e;
  }
  const S0 = /* @__PURE__ */ Symbol();
  function _0(e) {
    return !Ca(e) || !Object.prototype.hasOwnProperty.call(e, S0);
  }
  const { assign: nr } = Object;
  function O0(e) {
    return !!(st(e) && e.effect);
  }
  function A0(e, t, n, r) {
    const { state: l, actions: c, getters: f } = t, h = n.state.value[e];
    let p;
    function v() {
      h || (n.state.value[e] = l ? l() : {});
      const g = pd(n.state.value[e]);
      return nr(g, c, Object.keys(f || {}).reduce((T, M) => (T[M] = za(el(() => {
        Ns(n);
        const R = n._s.get(e);
        return f[M].call(R, R);
      })), T), {}));
    }
    return p = yh(e, v, t, n, r, true), p;
  }
  function yh(e, t, n = {}, r, l, c) {
    let f;
    const h = nr({
      actions: {}
    }, n), p = {
      deep: true
    };
    let v, g, T = /* @__PURE__ */ new Set(), M = /* @__PURE__ */ new Set(), R;
    const j = r.state.value[e];
    !c && !j && (r.state.value[e] = {}), jt({});
    let L;
    function he(fe) {
      let te;
      v = g = false, typeof fe == "function" ? (fe(r.state.value[e]), te = {
        type: Ui.patchFunction,
        storeId: e,
        events: R
      }) : (ka(r.state.value[e], fe), te = {
        type: Ui.patchObject,
        payload: fe,
        storeId: e,
        events: R
      });
      const me = L = /* @__PURE__ */ Symbol();
      ku().then(() => {
        L === me && (v = true);
      }), g = true, $r(T, te, r.state.value[e]);
    }
    const re = c ? function() {
      const { state: te } = n, me = te ? te() : {};
      this.$patch((Re) => {
        nr(Re, me);
      });
    } : wh;
    function K() {
      f.stop(), T.clear(), M.clear(), r._s.delete(e);
    }
    const ee = (fe, te = "") => {
      if (tu in fe) return fe[oa] = te, fe;
      const me = function() {
        Ns(r);
        const Re = Array.from(arguments), de = /* @__PURE__ */ new Set(), Ue = /* @__PURE__ */ new Set();
        function ft(Pe) {
          de.add(Pe);
        }
        function $t(Pe) {
          Ue.add(Pe);
        }
        $r(M, {
          args: Re,
          name: me[oa],
          store: ue,
          after: ft,
          onError: $t
        });
        let Ye;
        try {
          Ye = fe.apply(this && this.$id === e ? this : ue, Re);
        } catch (Pe) {
          throw $r(Ue, Pe), Pe;
        }
        return Ye instanceof Promise ? Ye.then((Pe) => ($r(de, Pe), Pe)).catch((Pe) => ($r(Ue, Pe), Promise.reject(Pe))) : ($r(de, Ye), Ye);
      };
      return me[tu] = true, me[oa] = te, me;
    }, G = {
      _p: r,
      $id: e,
      $onAction: eu.bind(null, M),
      $patch: he,
      $reset: re,
      $subscribe(fe, te = {}) {
        const me = eu(T, fe, te.detached, () => Re()), Re = f.run(() => Kr(() => r.state.value[e], (de) => {
          (te.flush === "sync" ? g : v) && fe({
            storeId: e,
            type: Ui.direct,
            events: R
          }, de);
        }, nr({}, p, te)));
        return me;
      },
      $dispose: K
    }, ue = hs(G);
    r._s.set(e, ue);
    const ie = (r._a && r._a.runWithContext || T0)(() => r._e.run(() => (f = du()).run(() => t({
      action: ee
    }))));
    for (const fe in ie) {
      const te = ie[fe];
      if (st(te) && !O0(te) || Gn(te)) c || (j && _0(te) && (st(te) ? te.value = j[fe] : ka(te, j[fe])), r.state.value[e][fe] = te);
      else if (typeof te == "function") {
        const me = ee(te, fe);
        ie[fe] = me, h.actions[fe] = te;
      }
    }
    return nr(ue, ie), nr(De(ue), ie), Object.defineProperty(ue, "$state", {
      get: () => r.state.value[e],
      set: (fe) => {
        he((te) => {
          nr(te, fe);
        });
      }
    }), r._p.forEach((fe) => {
      nr(ue, f.run(() => fe({
        store: ue,
        app: r._a,
        pinia: r,
        options: h
      })));
    }), j && c && n.hydrate && n.hydrate(ue.$state, j), v = true, g = true, ue;
  }
  _v = function(e, t, n) {
    let r;
    const l = typeof t == "function";
    r = l ? n : t;
    function c(f, h) {
      const p = Kd();
      return f = f || (p ? Li(gh, null) : null), f && Ns(f), f = ph, f._s.has(e) || (l ? yh(e, t, r, f) : A0(e, r, f)), f._s.get(e);
    }
    return c.$id = e, c;
  };
  let nu, La, R0, M0, Io, N0, P0, C0, k0, L0, D0, F0, x0, j0, U0, G0, W0, B0, $0, z0, V0, H0, Y0, cl;
  nu = [
    {
      name: "trackmaker",
      displayName: "TrackMaker",
      moduleInit: async () => {
        var _a3;
        const e = Rf((await Hs(async () => {
          const { default: n } = await import("./App-t6RSdB9y.js");
          return {
            default: n
          };
        }, __vite__mapDeps([0,1,2,3,4]), import.meta.url)).default);
        e.use(mh()), e.use((await Hs(async () => {
          const { default: n } = await import("./index-D9kuFjmH.js");
          return {
            default: n
          };
        }, __vite__mapDeps([5,2,1,6]), import.meta.url)).default), e.use((await Hs(async () => {
          const { i18n: n } = await import("./index-BZ1p0JCD.js");
          return {
            i18n: n
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
        await sh();
      },
      dependencies: []
    },
    {
      name: "platform-services",
      displayName: "Platform Services",
      moduleInit: async () => {
        let e = false;
        try {
          e = Fc();
        } catch {
        }
        try {
          e && console.time("Platform services initialise");
          const n = Ji({
            geolocation: {
              permissionCallback: async (p, v) => $b() ? false : window.permissionConfirm ? window.permissionConfirm(v) : false
            }
          });
          if (n.isErr()) throw n.error;
          const r = n.value, l = r.getStorage();
          if (l.isErr()) throw l.error;
          const c = await l.value.init();
          if (c.isErr()) throw c.error;
          const f = r.getDeviceOrientation();
          f.isOk() && (await f.value.init()).isErr() && console.warn("[Platform] DeviceOrientation not supported on this platform");
          const h = r.getIMU();
          h.isOk() && (await h.value.init()).isErr() && console.warn("[Platform] IMU not supported on this platform"), e && console.timeEnd("Platform services initialise"), console.info("[Platform] Platform services initialized successfully");
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
          e = Fc();
        } catch {
        }
        try {
          if (!Ji()) throw new Error("Platform services not initialized");
          e && console.time("Geolocation service initialise");
          const n = await ln.getInstance();
          if (n.isErr()) throw n.error;
          const r = n.value;
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
  Ov = Xy;
  Av = Jy;
  La = {
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
  R0 = () => {
    try {
      const t = localStorage.getItem("interface-language");
      if (t && La[t]) return t;
    } catch {
    }
    return navigator.language.startsWith("zh") ? "zh-CN" : "en";
  };
  M0 = R0();
  Io = (e) => La[M0][e] || La.en[e] || e;
  N0 = {
    class: "splash-container"
  };
  P0 = {
    class: "splash-content"
  };
  C0 = {
    key: 0,
    class: "loading-section"
  };
  k0 = {
    class: "progress-container"
  };
  L0 = {
    class: "progress-bar"
  };
  D0 = {
    class: "progress-text"
  };
  F0 = {
    class: "loading-details"
  };
  x0 = {
    class: "current-module"
  };
  j0 = {
    key: 1,
    class: "error-section"
  };
  U0 = {
    class: "error-message"
  };
  G0 = {
    key: 0
  };
  W0 = {
    key: 1
  };
  B0 = {
    key: 2,
    class: "timeout-section"
  };
  $0 = {
    key: 3,
    class: "permission-section"
  };
  z0 = {
    class: "permission-message"
  };
  V0 = {
    class: "permission-buttons"
  };
  H0 = Ad({
    __name: "SplashScreen",
    setup(e) {
      const t = jt(0), n = jt(""), r = jt(""), l = jt(0), c = jt(0), f = jt(false), h = jt(false), p = jt(""), v = jt(false), g = jt("");
      let T = null;
      const M = jt("light"), R = () => {
        try {
          window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches ? M.value = "dark" : M.value = "light";
        } catch {
          M.value = "light";
        }
      }, j = () => {
        M.value === "dark" ? document.documentElement.setAttribute("data-theme", "dark") : document.documentElement.setAttribute("data-theme", "light"), console.info("[Splash Screen] Theme applied:", M.value);
      }, L = el(() => Math.round(t.value / 100 * 100)), he = {
        info: (...ge) => {
          const ie = ge.join(" ");
          console.info(ie), n.value = String(ie);
        },
        warn: (...ge) => {
          const ie = ge.join(" ");
          console.warn(ie), n.value = String(ie);
        },
        error: (...ge) => {
          const ie = ge.join(" ");
          console.error(ie), n.value = String(ie), p.value = String(ie);
        },
        debug: (...ge) => {
          console.debug(...ge);
        }
      }, re = {
        onModuleStart: (ge) => {
          r.value = ge, n.value = `Loading ${ge}...`;
        },
        onModuleComplete: (ge) => {
          c.value++, t.value = Math.min(100, c.value / l.value * 100), n.value = `Loaded ${ge}`;
        },
        onModuleError: (ge, ie) => {
          n.value = `Failed to load ${ge}`, p.value = ie.message;
        },
        onOverallProgress: (ge, ie) => {
          l.value = ie, c.value = ge, t.value = Math.min(100, ge / ie * 100);
        }
      }, K = () => {
        window.location.reload();
      }, ee = (ge) => (g.value = Io(ge), v.value = true, new Promise((ie) => {
        T = (fe) => {
          v.value = false, ie(fe);
        };
      })), G = () => {
        T == null ? void 0 : T(true);
      }, ue = () => {
        T == null ? void 0 : T(false);
      };
      return window.permissionConfirm = ee, Qi(() => {
        var _a3;
        R(), j(), (_a3 = document.getElementById("pre-splash")) == null ? void 0 : _a3.remove();
        const ge = (ie, fe = /* @__PURE__ */ new Set()) => {
          if (fe.has(ie)) return 0;
          fe.add(ie);
          const te = nu.find((Re) => Re.name === ie);
          if (!te) return 0;
          let me = 1;
          if (te.dependencies) for (const Re of te.dependencies) me += ge(Re, fe);
          return me;
        };
        l.value = ge("trackmaker"), console.log("=== Start Loading Modules ==="), Yf(nu, "trackmaker", 3e4, {
          logger: he,
          progressReporter: re,
          printLog: false
        }).then(() => {
          n.value = "All modules loaded successfully", r.value = "TrackMaker", t.value = 100, console.log("=== All Modules Loaded ===");
        }).catch((ie) => {
          const fe = String(ie.toString());
          if (fe.toLowerCase().includes("timeout")) {
            const te = fe.split("Trackback").map((me) => me.replace(/((^:\s*)|(,\s*$))/g, ""));
            console.table(te.map((me) => ({
              Trackback: me
            })), [
              "Trackback"
            ]), h.value = true;
          } else p.value = fe, f.value = true;
          console.log("=== Failed to initialize all modules ==="), console.error(ie);
        });
      }), (ge, ie) => (rn(), Nn("div", N0, [
        Ge("div", P0, [
          ie[8] || (ie[8] = Ge("div", {
            class: "logo-section"
          }, [
            Ge("div", {
              class: "app-logo"
            }, [
              Ge("img", {
                src: fg,
                alt: "TrackMaker Logo",
                height: "80",
                width: "80"
              })
            ]),
            Ge("h1", {
              class: "app-title"
            }, " TrackMaker ")
          ], -1)),
          !f.value && !h.value ? (rn(), Nn("div", C0, [
            Ge("div", k0, [
              Ge("div", L0, [
                Ge("div", {
                  class: "progress-fill",
                  style: cs({
                    width: `${L.value}%`
                  })
                }, null, 4)
              ]),
              Ge("div", D0, Cn(L.value) + "% ", 1)
            ]),
            Ge("div", F0, [
              Ge("p", x0, " Loading: " + Cn(r.value), 1)
            ]),
            ie[0] || (ie[0] = Ge("div", {
              class: "loading-animation"
            }, [
              Ge("div", {
                class: "spinner"
              })
            ], -1))
          ])) : po("", true),
          f.value ? (rn(), Nn("div", j0, [
            ie[1] || (ie[1] = Ge("div", {
              class: "error-icon"
            }, " \u26A0\uFE0F ", -1)),
            ie[2] || (ie[2] = Ge("h2", null, "Loading Error", -1)),
            Ge("div", U0, [
              (rn(true), Nn(Rt, null, Ud((p.value ?? "").split(`
`), (fe) => (rn(), Nn("div", {
                key: fe,
                style: {
                  display: "block",
                  "font-family": "monospace",
                  overflow: "auto"
                }
              }, [
                fe.toLocaleLowerCase().includes("trackback") ? (rn(), Nn("strong", G0, Cn(fe), 1)) : (rn(), Nn("span", W0, Cn(fe), 1))
              ]))), 128))
            ]),
            Ge("button", {
              class: "retry-button",
              onClick: K
            }, " Retry ")
          ])) : po("", true),
          h.value ? (rn(), Nn("div", B0, [
            ie[3] || (ie[3] = Ge("div", {
              class: "timeout-icon"
            }, " \u23F0 ", -1)),
            ie[4] || (ie[4] = Ge("h2", null, "Connection Timeout", -1)),
            ie[5] || (ie[5] = Ge("p", null, "Unable to load required modules within the timeout period.", -1)),
            ie[6] || (ie[6] = Ge("p", null, "Please check your internet connection and try again.", -1)),
            Ge("button", {
              class: "retry-button",
              onClick: K
            }, " Retry ")
          ])) : po("", true),
          v.value ? (rn(), Nn("div", $0, [
            ie[7] || (ie[7] = Ge("div", {
              class: "permission-icon"
            }, " \u{1F4CD} ", -1)),
            Ge("h2", null, Cn(qr(Io)("permission.title")), 1),
            Ge("p", z0, Cn(g.value), 1),
            Ge("div", V0, [
              Ge("button", {
                class: "permission-button deny",
                onClick: ue
              }, Cn(qr(Io)("permission.deny")), 1),
              Ge("button", {
                class: "permission-button allow",
                onClick: G
              }, Cn(qr(Io)("permission.allow")), 1)
            ])
          ])) : po("", true)
        ])
      ]));
    }
  });
  q0 = (e, t) => {
    const n = e.__vccOpts || e;
    for (const [r, l] of t) n[r] = l;
    return n;
  };
  Y0 = q0(H0, [
    [
      "__scopeId",
      "data-v-d9d60867"
    ]
  ]);
  cl = Rf(Y0);
  cl.use(mh());
  cl.mount("#splash");
  window.splashScreen = cl;
})();
export {
  Ji as $,
  uv as A,
  Kr as B,
  lv as C,
  ga as D,
  tv as E,
  Rt as F,
  Cb as G,
  Is as H,
  Sn as I,
  av as J,
  ev as K,
  hr as L,
  Md as M,
  Nd as N,
  cv as O,
  ku as P,
  X0 as Q,
  Et as R,
  Vn as S,
  Z0 as T,
  pd as U,
  cs as V,
  fv as W,
  st as X,
  za as Y,
  cd as Z,
  q0 as _,
  __tla,
  Ge as a,
  ui as a$,
  Ir as a0,
  go as a1,
  iv as a2,
  sv as a3,
  Q0 as a4,
  rv as a5,
  Ud as a6,
  hv as a7,
  Sv as a8,
  dv as a9,
  Cf as aA,
  Lf as aB,
  Cm as aC,
  li as aD,
  fc as aE,
  Pw as aF,
  Dn as aG,
  xf as aH,
  ci as aI,
  Mm as aJ,
  xm as aK,
  kf as aL,
  Qg as aM,
  Sw as aN,
  Vw as aO,
  pw as aP,
  Pf as aQ,
  hy as aR,
  ld as aS,
  Zr as aT,
  bs as aU,
  pu as aV,
  Bh as aW,
  Kd as aX,
  K0 as aY,
  Hn as aZ,
  pv as a_,
  ta as aa,
  qf as ab,
  Es as ac,
  De as ad,
  nv as ae,
  Iv as af,
  yv as ag,
  Ev as ah,
  vv as ai,
  mv as aj,
  bv as ak,
  wv as al,
  Ov as am,
  Av as an,
  gv as ao,
  ln as ap,
  Hs as aq,
  $b as ar,
  pr as as,
  dr as at,
  ei as au,
  Xl as av,
  Bg as aw,
  Vg as ax,
  qg as ay,
  Wg as az,
  jt as b,
  to as b0,
  D as b1,
  N as b2,
  Tv as b3,
  du as b4,
  Nn as c,
  Ad as d,
  Cd as e,
  Ya as f,
  hs as g,
  Np as h,
  Li as i,
  el as j,
  Qi as k,
  Ka as l,
  Ep as m,
  ja as n,
  rn as o,
  Yd as p,
  _v as q,
  ca as r,
  po as s,
  J0 as t,
  Nt as u,
  qr as v,
  ov as w,
  Td as x,
  vp as y,
  Cn as z
};
