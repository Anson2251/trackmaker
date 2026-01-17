const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["./App-BBtXuoke.js","./sketch-store-BdrHLyAN.js","./vue-i18n-Bas0wEtN.js","./index-D8M1YVbb.js","./App-BkoMreV2.css","./index-BXa26r9c.js","./index-BEsE2g4E.css"])))=>i.map(i=>d[i]);
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
let Rs, uv, Yi, lv, ma, tv, Rt, k0, Is, Sn, av, ev, pi, Md, Nd, cv, ku, Zb, Et, Vn, Xb, pd, cs, fv, at, Va, cd, qb, We, ur, Si, go, rv, sv, Qb, iv, Ud, hv, Sv, dv, Cf, Lf, Cm, lr, hc, Pw, Dn, Ff, cr, Mm, Fm, kf, Qg, Sw, Vw, pw, Pf, hy, ld, Xi, bs, pu, Bh, Yd, Yb, Hn, pv, na, qf, Es, De, nv, Iv, yv, Ev, vv, mv, bv, wv, Ov, Av, gv, ln, qs, z0, mi, gi, er, Xl, Bg, Vg, qg, Wg, jt, to, j, M, Tv, du, Nn, Ad, Cd, Ya, hs, Np, Lr, tl, Qr, Ja, Ep, Ua, rn, Kd, _v, ua, po, Jb, Nt, qi, ov, Td, vp, Cn;
let __tla = (async () => {
  var _a2;
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
  function xa(e) {
    const t = /* @__PURE__ */ Object.create(null);
    for (const n of e.split(",")) t[n] = 1;
    return (n) => n in t;
  }
  const Fe = {}, Vi = [], fn = () => {
  }, iu = () => false, rs = (e) => e.charCodeAt(0) === 111 && e.charCodeAt(1) === 110 && (e.charCodeAt(2) > 122 || e.charCodeAt(2) < 97), Fa = (e) => e.startsWith("onUpdate:"), dt = Object.assign, ja = (e, t) => {
    const n = e.indexOf(t);
    n > -1 && e.splice(n, 1);
  }, Rh = Object.prototype.hasOwnProperty, ze = (e, t) => Rh.call(e, t), Ie = Array.isArray, Hi = (e) => Zr(e) === "[object Map]", ru = (e) => Zr(e) === "[object Set]", Mh = (e) => Zr(e) === "[object RegExp]", _e = (e) => typeof e == "function", st = (e) => typeof e == "string", qn = (e) => typeof e == "symbol", Ke = (e) => e !== null && typeof e == "object", ou = (e) => (Ke(e) || _e(e)) && _e(e.then) && _e(e.catch), su = Object.prototype.toString, Zr = (e) => su.call(e), Nh = (e) => Zr(e).slice(8, -1), au = (e) => Zr(e) === "[object Object]", os = (e) => st(e) && e !== "NaN" && e[0] !== "-" && "" + parseInt(e, 10) === e, Ar = xa(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"), ss = (e) => {
    const t = /* @__PURE__ */ Object.create(null);
    return ((n) => t[n] || (t[n] = e(n)));
  }, Ph = /-\w/g, Zt = ss((e) => e.replace(Ph, (t) => t.slice(1).toUpperCase())), Ch = /\B([A-Z])/g, Kn = ss((e) => e.replace(Ch, "-$1").toLowerCase()), as = ss((e) => e.charAt(0).toUpperCase() + e.slice(1)), ks = ss((e) => e ? `on${as(e)}` : ""), Gt = (e, t) => !Object.is(e, t), Rr = (e, ...t) => {
    for (let n = 0; n < e.length; n++) e[n](...t);
  }, lu = (e, t, n, i = false) => {
    Object.defineProperty(e, t, {
      configurable: true,
      enumerable: false,
      writable: i,
      value: n
    });
  }, kh = (e) => {
    const t = parseFloat(e);
    return isNaN(t) ? e : t;
  }, Lh = (e) => {
    const t = st(e) ? Number(e) : NaN;
    return isNaN(t) ? e : t;
  };
  let pl;
  const ls = () => pl || (pl = typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : typeof window < "u" ? window : typeof global < "u" ? global : {});
  cs = function(e) {
    if (Ie(e)) {
      const t = {};
      for (let n = 0; n < e.length; n++) {
        const i = e[n], l = st(i) ? jh(i) : cs(i);
        if (l) for (const c in l) t[c] = l[c];
      }
      return t;
    } else if (st(e) || Ke(e)) return e;
  };
  const Dh = /;(?![^(]*\))/g, xh = /:([^]+)/, Fh = /\/\*[^]*?\*\//g;
  function jh(e) {
    const t = {};
    return e.replace(Fh, "").split(Dh).forEach((n) => {
      if (n) {
        const i = n.split(xh);
        i.length > 1 && (t[i[0].trim()] = i[1].trim());
      }
    }), t;
  }
  Ua = function(e) {
    let t = "";
    if (st(e)) t = e;
    else if (Ie(e)) for (let n = 0; n < e.length; n++) {
      const i = Ua(e[n]);
      i && (t += i + " ");
    }
    else if (Ke(e)) for (const n in e) e[n] && (t += n + " ");
    return t.trim();
  };
  const Uh = "itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly", Gh = xa(Uh);
  function cu(e) {
    return !!e || e === "";
  }
  let uu, fu, Ls;
  uu = (e) => !!(e && e.__v_isRef === true);
  Cn = (e) => st(e) ? e : e == null ? "" : Ie(e) || Ke(e) && (e.toString === su || !_e(e.toString)) ? uu(e) ? Cn(e.value) : JSON.stringify(e, fu, 2) : String(e);
  fu = (e, t) => uu(t) ? fu(e, t.value) : Hi(t) ? {
    [`Map(${t.size})`]: [
      ...t.entries()
    ].reduce((n, [i, l], c) => (n[Ls(i, c) + " =>"] = l, n), {})
  } : ru(t) ? {
    [`Set(${t.size})`]: [
      ...t.values()
    ].map((n) => Ls(n))
  } : qn(t) ? Ls(t) : Ke(t) && !Ie(t) && !au(t) ? String(t) : t;
  Ls = (e, t = "") => {
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
  du = function(e) {
    return new hu(e);
  };
  pu = function() {
    return Ot;
  };
  Bh = function(e, t = false) {
    Ot && Ot.cleanups.push(e);
  };
  let Ze;
  const Ds = /* @__PURE__ */ new WeakSet();
  class gu {
    constructor(t) {
      this.fn = t, this.deps = void 0, this.depsTail = void 0, this.flags = 5, this.next = void 0, this.cleanup = void 0, this.scheduler = void 0, Ot && Ot.active && Ot.effects.push(this);
    }
    pause() {
      this.flags |= 64;
    }
    resume() {
      this.flags & 64 && (this.flags &= -65, Ds.has(this) && (Ds.delete(this), this.trigger()));
    }
    notify() {
      this.flags & 2 && !(this.flags & 32) || this.flags & 8 || wu(this);
    }
    run() {
      if (!(this.flags & 1)) return this.fn();
      this.flags |= 2, gl(this), yu(this);
      const t = Ze, n = hn;
      Ze = this, hn = true;
      try {
        return this.fn();
      } finally {
        bu(this), Ze = t, hn = n, this.flags &= -3;
      }
    }
    stop() {
      if (this.flags & 1) {
        for (let t = this.deps; t; t = t.nextDep) Ba(t);
        this.deps = this.depsTail = void 0, gl(this), this.onStop && this.onStop(), this.flags &= -2;
      }
    }
    trigger() {
      this.flags & 64 ? Ds.add(this) : this.scheduler ? this.scheduler() : this.runIfDirty();
    }
    runIfDirty() {
      aa(this) && this.run();
    }
    get dirty() {
      return aa(this);
    }
  }
  let mu = 0, Mr, Nr;
  function wu(e, t = false) {
    if (e.flags |= 8, t) {
      e.next = Nr, Nr = e;
      return;
    }
    e.next = Mr, Mr = e;
  }
  function Ga() {
    mu++;
  }
  function Wa() {
    if (--mu > 0) return;
    if (Nr) {
      let t = Nr;
      for (Nr = void 0; t; ) {
        const n = t.next;
        t.next = void 0, t.flags &= -9, t = n;
      }
    }
    let e;
    for (; Mr; ) {
      let t = Mr;
      for (Mr = void 0; t; ) {
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
  function yu(e) {
    for (let t = e.deps; t; t = t.nextDep) t.version = -1, t.prevActiveLink = t.dep.activeLink, t.dep.activeLink = t;
  }
  function bu(e) {
    let t, n = e.depsTail, i = n;
    for (; i; ) {
      const l = i.prevDep;
      i.version === -1 ? (i === n && (n = l), Ba(i), zh(i)) : t = i, i.dep.activeLink = i.prevActiveLink, i.prevActiveLink = void 0, i = l;
    }
    e.deps = t, e.depsTail = n;
  }
  function aa(e) {
    for (let t = e.deps; t; t = t.nextDep) if (t.dep.version !== t.version || t.dep.computed && (vu(t.dep.computed) || t.dep.version !== t.version)) return true;
    return !!e._dirty;
  }
  function vu(e) {
    if (e.flags & 4 && !(e.flags & 16) || (e.flags &= -17, e.globalVersion === Wr) || (e.globalVersion = Wr, !e.isSSR && e.flags & 128 && (!e.deps && !e._dirty || !aa(e)))) return;
    e.flags |= 2;
    const t = e.dep, n = Ze, i = hn;
    Ze = e, hn = true;
    try {
      yu(e);
      const l = e.fn(e._value);
      (t.version === 0 || Gt(l, e._value)) && (e.flags |= 128, e._value = l, t.version++);
    } catch (l) {
      throw t.version++, l;
    } finally {
      Ze = n, hn = i, bu(e), e.flags &= -3;
    }
  }
  function Ba(e, t = false) {
    const { dep: n, prevSub: i, nextSub: l } = e;
    if (i && (i.nextSub = l, e.prevSub = void 0), l && (l.prevSub = i, e.nextSub = void 0), n.subs === e && (n.subs = i, !i && n.computed)) {
      n.computed.flags &= -5;
      for (let c = n.computed.deps; c; c = c.nextDep) Ba(c, true);
    }
    !t && !--n.sc && n.map && n.map.delete(n.key);
  }
  function zh(e) {
    const { prevDep: t, nextDep: n } = e;
    t && (t.nextDep = n, e.prevDep = void 0), n && (n.prevDep = t, e.nextDep = void 0);
  }
  let hn = true;
  const Eu = [];
  function Bn() {
    Eu.push(hn), hn = false;
  }
  function zn() {
    const e = Eu.pop();
    hn = e === void 0 ? true : e;
  }
  function gl(e) {
    const { cleanup: t } = e;
    if (e.cleanup = void 0, t) {
      const n = Ze;
      Ze = void 0;
      try {
        t();
      } finally {
        Ze = n;
      }
    }
  }
  let Wr = 0;
  class $h {
    constructor(t, n) {
      this.sub = t, this.dep = n, this.version = n.version, this.nextDep = this.prevDep = this.nextSub = this.prevSub = this.prevActiveLink = void 0;
    }
  }
  class us {
    constructor(t) {
      this.computed = t, this.version = 0, this.activeLink = void 0, this.subs = void 0, this.map = void 0, this.key = void 0, this.sc = 0, this.__v_skip = true;
    }
    track(t) {
      if (!Ze || !hn || Ze === this.computed) return;
      let n = this.activeLink;
      if (n === void 0 || n.sub !== Ze) n = this.activeLink = new $h(Ze, this), Ze.deps ? (n.prevDep = Ze.depsTail, Ze.depsTail.nextDep = n, Ze.depsTail = n) : Ze.deps = Ze.depsTail = n, Iu(n);
      else if (n.version === -1 && (n.version = this.version, n.nextDep)) {
        const i = n.nextDep;
        i.prevDep = n.prevDep, n.prevDep && (n.prevDep.nextDep = i), n.prevDep = Ze.depsTail, n.nextDep = void 0, Ze.depsTail.nextDep = n, Ze.depsTail = n, Ze.deps === n && (Ze.deps = i);
      }
      return n;
    }
    trigger(t) {
      this.version++, Wr++, this.notify(t);
    }
    notify(t) {
      Ga();
      try {
        for (let n = this.subs; n; n = n.prevSub) n.sub.notify() && n.sub.dep.notify();
      } finally {
        Wa();
      }
    }
  }
  function Iu(e) {
    if (e.dep.sc++, e.sub.flags & 4) {
      const t = e.dep.computed;
      if (t && !e.dep.subs) {
        t.flags |= 20;
        for (let i = t.deps; i; i = i.nextDep) Iu(i);
      }
      const n = e.dep.subs;
      n !== e && (e.prevSub = n, n && (n.nextSub = e)), e.dep.subs = e;
    }
  }
  const ko = /* @__PURE__ */ new WeakMap(), Ci = /* @__PURE__ */ Symbol(""), la = /* @__PURE__ */ Symbol(""), Br = /* @__PURE__ */ Symbol("");
  function At(e, t, n) {
    if (hn && Ze) {
      let i = ko.get(e);
      i || ko.set(e, i = /* @__PURE__ */ new Map());
      let l = i.get(n);
      l || (i.set(n, l = new us()), l.map = i, l.key = n), l.track();
    }
  }
  function xn(e, t, n, i, l, c) {
    const f = ko.get(e);
    if (!f) {
      Wr++;
      return;
    }
    const h = (p) => {
      p && p.trigger();
    };
    if (Ga(), t === "clear") f.forEach(h);
    else {
      const p = Ie(e), v = p && os(n);
      if (p && n === "length") {
        const g = Number(i);
        f.forEach((T, N) => {
          (N === "length" || N === Br || !qn(N) && N >= g) && h(T);
        });
      } else switch ((n !== void 0 || f.has(void 0)) && h(f.get(n)), v && h(f.get(Br)), t) {
        case "add":
          p ? v && h(f.get("length")) : (h(f.get(Ci)), Hi(e) && h(f.get(la)));
          break;
        case "delete":
          p || (h(f.get(Ci)), Hi(e) && h(f.get(la)));
          break;
        case "set":
          Hi(e) && h(f.get(Ci));
          break;
      }
    }
    Wa();
  }
  function Vh(e, t) {
    const n = ko.get(e);
    return n && n.get(t);
  }
  function Ui(e) {
    const t = De(e);
    return t === e ? t : (At(t, "iterate", Br), Jt(e) ? t : t.map(dn));
  }
  function fs(e) {
    return At(e = De(e), "iterate", Br), e;
  }
  function ri(e, t) {
    return $n(e) ? Gn(e) ? Zi(dn(t)) : Zi(t) : dn(t);
  }
  const Hh = {
    __proto__: null,
    [Symbol.iterator]() {
      return xs(this, Symbol.iterator, (e) => ri(this, e));
    },
    concat(...e) {
      return Ui(this).concat(...e.map((t) => Ie(t) ? Ui(t) : t));
    },
    entries() {
      return xs(this, "entries", (e) => (e[1] = ri(this, e[1]), e));
    },
    every(e, t) {
      return Mn(this, "every", e, t, void 0, arguments);
    },
    filter(e, t) {
      return Mn(this, "filter", e, t, (n) => n.map((i) => ri(this, i)), arguments);
    },
    find(e, t) {
      return Mn(this, "find", e, t, (n) => ri(this, n), arguments);
    },
    findIndex(e, t) {
      return Mn(this, "findIndex", e, t, void 0, arguments);
    },
    findLast(e, t) {
      return Mn(this, "findLast", e, t, (n) => ri(this, n), arguments);
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
      return Ui(this).join(e);
    },
    lastIndexOf(...e) {
      return Fs(this, "lastIndexOf", e);
    },
    map(e, t) {
      return Mn(this, "map", e, t, void 0, arguments);
    },
    pop() {
      return dr(this, "pop");
    },
    push(...e) {
      return dr(this, "push", e);
    },
    reduce(e, ...t) {
      return ml(this, "reduce", e, t);
    },
    reduceRight(e, ...t) {
      return ml(this, "reduceRight", e, t);
    },
    shift() {
      return dr(this, "shift");
    },
    some(e, t) {
      return Mn(this, "some", e, t, void 0, arguments);
    },
    splice(...e) {
      return dr(this, "splice", e);
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
      return dr(this, "unshift", e);
    },
    values() {
      return xs(this, "values", (e) => ri(this, e));
    }
  };
  function xs(e, t, n) {
    const i = fs(e), l = i[t]();
    return i !== e && !Jt(e) && (l._next = l.next, l.next = () => {
      const c = l._next();
      return c.done || (c.value = n(c.value)), c;
    }), l;
  }
  const qh = Array.prototype;
  function Mn(e, t, n, i, l, c) {
    const f = fs(e), h = f !== e && !Jt(e), p = f[t];
    if (p !== qh[t]) {
      const T = p.apply(e, c);
      return h ? dn(T) : T;
    }
    let v = n;
    f !== e && (h ? v = function(T, N) {
      return n.call(this, ri(e, T), N, e);
    } : n.length > 2 && (v = function(T, N) {
      return n.call(this, T, N, e);
    }));
    const g = p.call(f, v, i);
    return h && l ? l(g) : g;
  }
  function ml(e, t, n, i) {
    const l = fs(e);
    let c = n;
    return l !== e && (Jt(e) ? n.length > 3 && (c = function(f, h, p) {
      return n.call(this, f, h, p, e);
    }) : c = function(f, h, p) {
      return n.call(this, f, ri(e, h), p, e);
    }), l[t](c, ...i);
  }
  function Fs(e, t, n) {
    const i = De(e);
    At(i, "iterate", Br);
    const l = i[t](...n);
    return (l === -1 || l === false) && ds(n[0]) ? (n[0] = De(n[0]), i[t](...n)) : l;
  }
  function dr(e, t, n = []) {
    Bn(), Ga();
    const i = De(e)[t].apply(e, n);
    return Wa(), zn(), i;
  }
  const Kh = xa("__proto__,__v_isRef,__isVue"), Tu = new Set(Object.getOwnPropertyNames(Symbol).filter((e) => e !== "arguments" && e !== "caller").map((e) => Symbol[e]).filter(qn));
  function Yh(e) {
    qn(e) || (e = String(e));
    const t = De(this);
    return At(t, "has", e), t.hasOwnProperty(e);
  }
  class Su {
    constructor(t = false, n = false) {
      this._isReadonly = t, this._isShallow = n;
    }
    get(t, n, i) {
      if (n === "__v_skip") return t.__v_skip;
      const l = this._isReadonly, c = this._isShallow;
      if (n === "__v_isReactive") return !l;
      if (n === "__v_isReadonly") return l;
      if (n === "__v_isShallow") return c;
      if (n === "__v_raw") return i === (l ? c ? od : Ru : c ? Au : Ou).get(t) || Object.getPrototypeOf(t) === Object.getPrototypeOf(i) ? t : void 0;
      const f = Ie(t);
      if (!l) {
        let p;
        if (f && (p = Hh[n])) return p;
        if (n === "hasOwnProperty") return Yh;
      }
      const h = Reflect.get(t, n, at(t) ? t : i);
      if ((qn(n) ? Tu.has(n) : Kh(n)) || (l || At(t, "get", n), c)) return h;
      if (at(h)) {
        const p = f && os(n) ? h : h.value;
        return l && Ke(p) ? ua(p) : p;
      }
      return Ke(h) ? l ? ua(h) : hs(h) : h;
    }
  }
  class _u extends Su {
    constructor(t = false) {
      super(false, t);
    }
    set(t, n, i, l) {
      let c = t[n];
      const f = Ie(t) && os(n);
      if (!this._isShallow) {
        const v = $n(c);
        if (!Jt(i) && !$n(i) && (c = De(c), i = De(i)), !f && at(c) && !at(i)) return v || (c.value = i), true;
      }
      const h = f ? Number(n) < t.length : ze(t, n), p = Reflect.set(t, n, i, at(t) ? t : l);
      return t === De(l) && (h ? Gt(i, c) && xn(t, "set", n, i) : xn(t, "add", n, i)), p;
    }
    deleteProperty(t, n) {
      const i = ze(t, n);
      t[n];
      const l = Reflect.deleteProperty(t, n);
      return l && i && xn(t, "delete", n, void 0), l;
    }
    has(t, n) {
      const i = Reflect.has(t, n);
      return (!qn(n) || !Tu.has(n)) && At(t, "has", n), i;
    }
    ownKeys(t) {
      return At(t, "iterate", Ie(t) ? "length" : Ci), Reflect.ownKeys(t);
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
  const Zh = new _u(), Xh = new Jh(), Qh = new _u(true);
  const ca = (e) => e, ao = (e) => Reflect.getPrototypeOf(e);
  function ed(e, t, n) {
    return function(...i) {
      const l = this.__v_raw, c = De(l), f = Hi(c), h = e === "entries" || e === Symbol.iterator && f, p = e === "keys" && f, v = l[e](...i), g = n ? ca : t ? Zi : dn;
      return !t && At(c, "iterate", p ? la : Ci), {
        next() {
          const { value: T, done: N } = v.next();
          return N ? {
            value: T,
            done: N
          } : {
            value: h ? [
              g(T[0]),
              g(T[1])
            ] : g(T),
            done: N
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
        const { has: p } = ao(f), v = t ? ca : e ? Zi : dn;
        if (p.call(f, l)) return v(c.get(l));
        if (p.call(f, h)) return v(c.get(h));
        c !== f && c.get(l);
      },
      get size() {
        const l = this.__v_raw;
        return !e && At(De(l), "iterate", Ci), l.size;
      },
      has(l) {
        const c = this.__v_raw, f = De(c), h = De(l);
        return e || (Gt(l, h) && At(f, "has", l), At(f, "has", h)), l === h ? c.has(l) : c.has(l) || c.has(h);
      },
      forEach(l, c) {
        const f = this, h = f.__v_raw, p = De(h), v = t ? ca : e ? Zi : dn;
        return !e && At(p, "iterate", Ci), h.forEach((g, T) => l.call(c, v(g), v(T), f));
      }
    };
    return dt(n, e ? {
      add: lo("add"),
      set: lo("set"),
      delete: lo("delete"),
      clear: lo("clear")
    } : {
      add(l) {
        !t && !Jt(l) && !$n(l) && (l = De(l));
        const c = De(this);
        return ao(c).has.call(c, l) || (c.add(l), xn(c, "add", l, l)), this;
      },
      set(l, c) {
        !t && !Jt(c) && !$n(c) && (c = De(c));
        const f = De(this), { has: h, get: p } = ao(f);
        let v = h.call(f, l);
        v || (l = De(l), v = h.call(f, l));
        const g = p.call(f, l);
        return f.set(l, c), v ? Gt(c, g) && xn(f, "set", l, c) : xn(f, "add", l, c), this;
      },
      delete(l) {
        const c = De(this), { has: f, get: h } = ao(c);
        let p = f.call(c, l);
        p || (l = De(l), p = f.call(c, l)), h && h.call(c, l);
        const v = c.delete(l);
        return p && xn(c, "delete", l, void 0), v;
      },
      clear() {
        const l = De(this), c = l.size !== 0, f = l.clear();
        return c && xn(l, "clear", void 0, void 0), f;
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
  function za(e, t) {
    const n = td(e, t);
    return (i, l, c) => l === "__v_isReactive" ? !e : l === "__v_isReadonly" ? e : l === "__v_raw" ? i : Reflect.get(ze(n, l) && l in i ? n : i, l, c);
  }
  const nd = {
    get: za(false, false)
  }, id = {
    get: za(false, true)
  }, rd = {
    get: za(true, false)
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
    return $n(e) ? e : $a(e, false, Zh, nd, Ou);
  };
  ld = function(e) {
    return $a(e, false, Qh, id, Au);
  };
  ua = function(e) {
    return $a(e, true, Xh, rd, Ru);
  };
  function $a(e, t, n, i, l) {
    if (!Ke(e) || e.__v_raw && !(t && e.__v_isReactive)) return e;
    const c = ad(e);
    if (c === 0) return e;
    const f = l.get(e);
    if (f) return f;
    const h = new Proxy(e, c === 2 ? i : n);
    return l.set(e, h), h;
  }
  function Gn(e) {
    return $n(e) ? Gn(e.__v_raw) : !!(e && e.__v_isReactive);
  }
  function $n(e) {
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
  Va = function(e) {
    return !ze(e, "__v_skip") && Object.isExtensible(e) && lu(e, "__v_skip", true), e;
  };
  const dn = (e) => Ke(e) ? hs(e) : e, Zi = (e) => Ke(e) ? ua(e) : e;
  at = function(e) {
    return e ? e.__v_isRef === true : false;
  };
  jt = function(e) {
    return Mu(e, false);
  };
  cd = function(e) {
    return Mu(e, true);
  };
  function Mu(e, t) {
    return at(e) ? e : new ud(e, t);
  }
  class ud {
    constructor(t, n) {
      this.dep = new us(), this.__v_isRef = true, this.__v_isShallow = false, this._rawValue = n ? t : De(t), this._value = n ? t : dn(t), this.__v_isShallow = n;
    }
    get value() {
      return this.dep.track(), this._value;
    }
    set value(t) {
      const n = this._rawValue, i = this.__v_isShallow || Jt(t) || $n(t);
      t = i ? t : De(t), Gt(t, n) && (this._rawValue = t, this._value = i ? t : dn(t), this.dep.trigger());
    }
  }
  qi = function(e) {
    return at(e) ? e.value : e;
  };
  Yb = function(e) {
    return _e(e) ? e() : qi(e);
  };
  const fd = {
    get: (e, t, n) => t === "__v_raw" ? e : qi(Reflect.get(e, t, n)),
    set: (e, t, n, i) => {
      const l = e[t];
      return at(l) && !at(n) ? (l.value = n, true) : Reflect.set(e, t, n, i);
    }
  };
  function Nu(e) {
    return Gn(e) ? e : new Proxy(e, fd);
  }
  class hd {
    constructor(t) {
      this.__v_isRef = true, this._value = void 0;
      const n = this.dep = new us(), { get: i, set: l } = t(n.track.bind(n), n.trigger.bind(n));
      this._get = i, this._set = l;
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
    constructor(t, n, i) {
      this._object = t, this._key = n, this._defaultValue = i, this.__v_isRef = true, this._value = void 0, this._raw = De(t);
      let l = true, c = t;
      if (!Ie(t) || !os(String(n))) do
        l = !ds(c) || Jt(c);
      while (l && (c = c.__v_raw));
      this._shallow = l;
    }
    get value() {
      let t = this._object[this._key];
      return this._shallow && (t = qi(t)), this._value = t === void 0 ? this._defaultValue : t;
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
  Jb = function(e, t, n) {
    return at(e) ? e : _e(e) ? new md(e) : Ke(e) && arguments.length > 1 ? Pu(e, t, n) : jt(e);
  };
  function Pu(e, t, n) {
    return new gd(e, t, n);
  }
  class wd {
    constructor(t, n, i) {
      this.fn = t, this.setter = n, this._value = void 0, this.dep = new us(this), this.__v_isRef = true, this.deps = void 0, this.depsTail = void 0, this.flags = 16, this.globalVersion = Wr - 1, this.next = void 0, this.effect = this, this.__v_isReadonly = !n, this.isSSR = i;
    }
    notify() {
      if (this.flags |= 16, !(this.flags & 8) && Ze !== this) return wu(this, true), true;
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
    let i, l;
    return _e(e) ? i = e : (i = e.get, l = e.set), new wd(i, l, n);
  }
  const co = {}, Lo = /* @__PURE__ */ new WeakMap();
  let Ai;
  function bd(e, t = false, n = Ai) {
    if (n) {
      let i = Lo.get(n);
      i || Lo.set(n, i = []), i.push(e);
    }
  }
  function vd(e, t, n = Fe) {
    const { immediate: i, deep: l, once: c, scheduler: f, augmentJob: h, call: p } = n, v = (U) => l ? U : Jt(U) || l === false || l === 0 ? Fn(U, 1) : Fn(U);
    let g, T, N, R, F = false, C = false;
    if (at(e) ? (T = () => e.value, F = Jt(e)) : Gn(e) ? (T = () => v(e), F = true) : Ie(e) ? (C = true, F = e.some((U) => Gn(U) || Jt(U)), T = () => e.map((U) => {
      if (at(U)) return U.value;
      if (Gn(U)) return v(U);
      if (_e(U)) return p ? p(U, 2) : U();
    })) : _e(e) ? t ? T = p ? () => p(e, 2) : e : T = () => {
      if (N) {
        Bn();
        try {
          N();
        } finally {
          zn();
        }
      }
      const U = Ai;
      Ai = g;
      try {
        return p ? p(e, 3, [
          R
        ]) : e(R);
      } finally {
        Ai = U;
      }
    } : T = fn, t && l) {
      const U = T, ue = l === true ? 1 / 0 : l;
      T = () => Fn(U(), ue);
    }
    const he = pu(), ne = () => {
      g.stop(), he && he.active && ja(he.effects, g);
    };
    if (c && t) {
      const U = t;
      t = (...ue) => {
        U(...ue), ne();
      };
    }
    let H = C ? new Array(e.length).fill(co) : co;
    const Y = (U) => {
      if (!(!(g.flags & 1) || !g.dirty && !U)) if (t) {
        const ue = g.run();
        if (l || F || (C ? ue.some((ge, re) => Gt(ge, H[re])) : Gt(ue, H))) {
          N && N();
          const ge = Ai;
          Ai = g;
          try {
            const re = [
              ue,
              H === co ? void 0 : C && H[0] === co ? [] : H,
              R
            ];
            H = ue, p ? p(t, 3, re) : t(...re);
          } finally {
            Ai = ge;
          }
        }
      } else g.run();
    };
    return h && h(Y), g = new gu(T), g.scheduler = f ? () => f(Y, false) : Y, R = (U) => bd(U, false, g), N = g.onStop = () => {
      const U = Lo.get(g);
      if (U) {
        if (p) p(U, 4);
        else for (const ue of U) ue();
        Lo.delete(g);
      }
    }, t ? i ? Y(true) : H = g.run() : f ? f(Y.bind(null, true), true) : g.run(), ne.pause = g.pause.bind(g), ne.resume = g.resume.bind(g), ne.stop = ne, ne;
  }
  function Fn(e, t = 1 / 0, n) {
    if (t <= 0 || !Ke(e) || e.__v_skip || (n = n || /* @__PURE__ */ new Map(), (n.get(e) || 0) >= t)) return e;
    if (n.set(e, t), t--, at(e)) Fn(e.value, t, n);
    else if (Ie(e)) for (let i = 0; i < e.length; i++) Fn(e[i], t, n);
    else if (ru(e) || Hi(e)) e.forEach((i) => {
      Fn(i, t, n);
    });
    else if (au(e)) {
      for (const i in e) Fn(e[i], t, n);
      for (const i of Object.getOwnPropertySymbols(e)) Object.prototype.propertyIsEnumerable.call(e, i) && Fn(e[i], t, n);
    }
    return e;
  }
  function Xr(e, t, n, i) {
    try {
      return i ? e(...i) : e();
    } catch (l) {
      ps(l, t, n);
    }
  }
  function pn(e, t, n, i) {
    if (_e(e)) {
      const l = Xr(e, t, n, i);
      return l && ou(l) && l.catch((c) => {
        ps(c, t, n);
      }), l;
    }
    if (Ie(e)) {
      const l = [];
      for (let c = 0; c < e.length; c++) l.push(pn(e[c], t, n, i));
      return l;
    }
  }
  function ps(e, t, n, i = true) {
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
        Bn(), Xr(c, null, 10, [
          e,
          p,
          v
        ]), zn();
        return;
      }
    }
    Ed(e, n, l, i, f);
  }
  function Ed(e, t, n, i = true, l = false) {
    if (l) throw e;
    console.error(e);
  }
  const Dt = [];
  let vn = -1;
  const Ki = [];
  let oi = null, $i = 0;
  const Cu = Promise.resolve();
  let Do = null;
  ku = function(e) {
    const t = Do || Cu;
    return e ? t.then(this ? e.bind(this) : e) : t;
  };
  function Id(e) {
    let t = vn + 1, n = Dt.length;
    for (; t < n; ) {
      const i = t + n >>> 1, l = Dt[i], c = zr(l);
      c < e || c === e && l.flags & 2 ? t = i + 1 : n = i;
    }
    return t;
  }
  function Ha(e) {
    if (!(e.flags & 1)) {
      const t = zr(e), n = Dt[Dt.length - 1];
      !n || !(e.flags & 2) && t >= zr(n) ? Dt.push(e) : Dt.splice(Id(t), 0, e), e.flags |= 1, Lu();
    }
  }
  function Lu() {
    Do || (Do = Cu.then(Fu));
  }
  function Du(e) {
    Ie(e) ? Ki.push(...e) : oi && e.id === -1 ? oi.splice($i + 1, 0, e) : e.flags & 1 || (Ki.push(e), e.flags |= 1), Lu();
  }
  function wl(e, t, n = vn + 1) {
    for (; n < Dt.length; n++) {
      const i = Dt[n];
      if (i && i.flags & 2) {
        if (e && i.id !== e.uid) continue;
        Dt.splice(n, 1), n--, i.flags & 4 && (i.flags &= -2), i(), i.flags & 4 || (i.flags &= -2);
      }
    }
  }
  function xu(e) {
    if (Ki.length) {
      const t = [
        ...new Set(Ki)
      ].sort((n, i) => zr(n) - zr(i));
      if (Ki.length = 0, oi) {
        oi.push(...t);
        return;
      }
      for (oi = t, $i = 0; $i < oi.length; $i++) {
        const n = oi[$i];
        n.flags & 4 && (n.flags &= -2), n.flags & 8 || n(), n.flags &= -2;
      }
      oi = null, $i = 0;
    }
  }
  const zr = (e) => e.id == null ? e.flags & 2 ? -1 : 1 / 0 : e.id;
  function Fu(e) {
    try {
      for (vn = 0; vn < Dt.length; vn++) {
        const t = Dt[vn];
        t && !(t.flags & 8) && (t.flags & 4 && (t.flags &= -2), Xr(t, t.i, t.i ? 15 : 14), t.flags & 4 || (t.flags &= -2));
      }
    } finally {
      for (; vn < Dt.length; vn++) {
        const t = Dt[vn];
        t && (t.flags &= -2);
      }
      vn = -1, Dt.length = 0, xu(), Do = null, (Dt.length || Ki.length) && Fu();
    }
  }
  let It = null, ju = null;
  function xo(e) {
    const t = It;
    return It = e, ju = e && e.type.__scopeId || null, t;
  }
  Td = function(e, t = It, n) {
    if (!t || e._n) return e;
    const i = (...l) => {
      i._d && Bo(-1);
      const c = xo(t);
      let f;
      try {
        f = e(...l);
      } finally {
        xo(c), i._d && Bo(1);
      }
      return f;
    };
    return i._n = true, i._c = true, i._d = true, i;
  };
  Zb = function(e, t) {
    if (It === null) return e;
    const n = vs(It), i = e.dirs || (e.dirs = []);
    for (let l = 0; l < t.length; l++) {
      let [c, f, h, p = Fe] = t[l];
      c && (_e(c) && (c = {
        mounted: c,
        updated: c
      }), c.deep && Fn(f), i.push({
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
  function vi(e, t, n, i) {
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
      ]), zn());
    }
  }
  const Uu = /* @__PURE__ */ Symbol("_vte"), Gu = (e) => e.__isTeleport, Pr = (e) => e && (e.disabled || e.disabled === ""), yl = (e) => e && (e.defer || e.defer === ""), bl = (e) => typeof SVGElement < "u" && e instanceof SVGElement, vl = (e) => typeof MathMLElement == "function" && e instanceof MathMLElement, fa = (e, t) => {
    const n = e && e.to;
    return st(n) ? t ? t(n) : null : n;
  }, Wu = {
    name: "Teleport",
    __isTeleport: true,
    process(e, t, n, i, l, c, f, h, p, v) {
      const { mc: g, pc: T, pbc: N, o: { insert: R, querySelector: F, createText: C, createComment: he } } = v, ne = Pr(t.props);
      let { shapeFlag: H, children: Y, dynamicChildren: U } = t;
      if (e == null) {
        const ue = t.el = C(""), ge = t.anchor = C("");
        R(ue, n, i), R(ge, n, i);
        const re = (te, me) => {
          H & 16 && g(Y, te, me, l, c, f, h, p);
        }, fe = () => {
          const te = t.target = fa(t.props, F), me = Bu(te, t, C, R);
          te && (f !== "svg" && bl(te) ? f = "svg" : f !== "mathml" && vl(te) && (f = "mathml"), l && l.isCE && (l.ce._teleportTargets || (l.ce._teleportTargets = /* @__PURE__ */ new Set())).add(te), ne || (re(te, me), To(t, false)));
        };
        ne && (re(n, ge), To(t, true)), yl(t.props) ? (t.el.__isMounted = false, wt(() => {
          fe(), delete t.el.__isMounted;
        }, c)) : fe();
      } else {
        if (yl(t.props) && e.el.__isMounted === false) {
          wt(() => {
            Wu.process(e, t, n, i, l, c, f, h, p, v);
          }, c);
          return;
        }
        t.el = e.el, t.targetStart = e.targetStart;
        const ue = t.anchor = e.anchor, ge = t.target = e.target, re = t.targetAnchor = e.targetAnchor, fe = Pr(e.props), te = fe ? n : ge, me = fe ? ue : re;
        if (f === "svg" || bl(ge) ? f = "svg" : (f === "mathml" || vl(ge)) && (f = "mathml"), U ? (N(e.dynamicChildren, U, te, l, c, f, h), Qa(e, t, true)) : p || T(e, t, te, me, l, c, f, h, false), ne) fe ? t.props && e.props && t.props.to !== e.props.to && (t.props.to = e.props.to) : uo(t, n, ue, v, 1);
        else if ((t.props && t.props.to) !== (e.props && e.props.to)) {
          const Re = t.target = fa(t.props, F);
          Re && uo(t, Re, null, v, 0);
        } else fe && uo(t, ge, re, v, 1);
        To(t, ne);
      }
    },
    remove(e, t, n, { um: i, o: { remove: l } }, c) {
      const { shapeFlag: f, children: h, anchor: p, targetStart: v, targetAnchor: g, target: T, props: N } = e;
      if (T && (l(v), l(g)), c && l(p), f & 16) {
        const R = c || !Pr(N);
        for (let F = 0; F < h.length; F++) {
          const C = h[F];
          i(C, t, n, R, !!C.dynamicChildren);
        }
      }
    },
    move: uo,
    hydrate: Sd
  };
  function uo(e, t, n, { o: { insert: i }, m: l }, c = 2) {
    c === 0 && i(e.targetAnchor, t, n);
    const { el: f, anchor: h, shapeFlag: p, children: v, props: g } = e, T = c === 2;
    if (T && i(f, t, n), (!T || Pr(g)) && p & 16) for (let N = 0; N < v.length; N++) l(v[N], t, n, 2);
    T && i(h, t, n);
  }
  function Sd(e, t, n, i, l, c, { o: { nextSibling: f, parentNode: h, querySelector: p, insert: v, createText: g } }, T) {
    function N(C, he, ne, H) {
      he.anchor = T(f(C), he, h(C), n, i, l, c), he.targetStart = ne, he.targetAnchor = H;
    }
    const R = t.target = fa(t.props, p), F = Pr(t.props);
    if (R) {
      const C = R._lpa || R.firstChild;
      if (t.shapeFlag & 16) if (F) N(e, t, C, C && f(C));
      else {
        t.anchor = f(e);
        let he = C;
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
        t.targetAnchor || Bu(R, t, g, v), T(C && f(C), t, R, n, i, l, c);
      }
      To(t, F);
    } else F && t.shapeFlag & 16 && N(e, t, e, f(e));
    return t.anchor && f(t.anchor);
  }
  Xb = Wu;
  function To(e, t) {
    const n = e.ctx;
    if (n && n.ut) {
      let i, l;
      for (t ? (i = e.el, l = e.anchor) : (i = e.targetStart, l = e.targetAnchor); i && i !== l; ) i.nodeType === 1 && i.setAttribute("data-v-owner", n.uid), i = i.nextSibling;
      n.ut();
    }
  }
  function Bu(e, t, n, i) {
    const l = t.targetStart = n(""), c = t.targetAnchor = n("");
    return l[Uu] = c, e && (i(l, e), i(c, e)), c;
  }
  const Ln = /* @__PURE__ */ Symbol("_leaveCb"), fo = /* @__PURE__ */ Symbol("_enterCb");
  function zu() {
    const e = {
      isMounted: false,
      isLeaving: false,
      isUnmounting: false,
      leavingVNodes: /* @__PURE__ */ new Map()
    };
    return Qr(() => {
      e.isMounted = true;
    }), Ya(() => {
      e.isUnmounting = true;
    }), e;
  }
  const tn = [
    Function,
    Array
  ], $u = {
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
    props: $u,
    setup(e, { slots: t }) {
      const n = pi(), i = zu();
      return () => {
        const l = t.default && qa(t.default(), true);
        if (!l || !l.length) return;
        const c = Hu(l), f = De(e), { mode: h } = f;
        if (i.isLeaving) return js(c);
        const p = El(c);
        if (!p) return js(c);
        let v = $r(p, f, i, n, (T) => v = T);
        p.type !== Et && hi(p, v);
        let g = n.subTree && El(n.subTree);
        if (g && g.type !== Et && !ai(g, p) && Vu(n).type !== Et) {
          let T = $r(g, f, i, n);
          if (hi(g, T), h === "out-in" && p.type !== Et) return i.isLeaving = true, T.afterLeave = () => {
            i.isLeaving = false, n.job.flags & 8 || n.update(), delete T.afterLeave, g = void 0;
          }, js(c);
          h === "in-out" && p.type !== Et ? T.delayLeave = (N, R, F) => {
            const C = qu(i, g);
            C[String(g.key)] = g, N[Ln] = () => {
              R(), N[Ln] = void 0, delete v.delayedLeave, g = void 0;
            }, v.delayedLeave = () => {
              F(), delete v.delayedLeave, g = void 0;
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
    let i = n.get(t.type);
    return i || (i = /* @__PURE__ */ Object.create(null), n.set(t.type, i)), i;
  }
  function $r(e, t, n, i, l) {
    const { appear: c, mode: f, persisted: h = false, onBeforeEnter: p, onEnter: v, onAfterEnter: g, onEnterCancelled: T, onBeforeLeave: N, onLeave: R, onAfterLeave: F, onLeaveCancelled: C, onBeforeAppear: he, onAppear: ne, onAfterAppear: H, onAppearCancelled: Y } = t, U = String(e.key), ue = qu(n, e), ge = (te, me) => {
      te && pn(te, i, 9, me);
    }, re = (te, me) => {
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
        const Re = ue[U];
        Re && ai(e, Re) && Re.el[Ln] && Re.el[Ln](), ge(me, [
          te
        ]);
      },
      enter(te) {
        let me = v, Re = g, de = T;
        if (!n.isMounted) if (c) me = ne || v, Re = H || g, de = Y || T;
        else return;
        let Ge = false;
        const ft = te[fo] = (zt) => {
          Ge || (Ge = true, zt ? ge(de, [
            te
          ]) : ge(Re, [
            te
          ]), fe.delayedLeave && fe.delayedLeave(), te[fo] = void 0);
        };
        me ? re(me, [
          te,
          ft
        ]) : ft();
      },
      leave(te, me) {
        const Re = String(e.key);
        if (te[fo] && te[fo](true), n.isUnmounting) return me();
        ge(N, [
          te
        ]);
        let de = false;
        const Ge = te[Ln] = (ft) => {
          de || (de = true, me(), ft ? ge(C, [
            te
          ]) : ge(F, [
            te
          ]), te[Ln] = void 0, ue[Re] === e && delete ue[Re]);
        };
        ue[Re] = e, R ? re(R, [
          te,
          Ge
        ]) : Ge();
      },
      clone(te) {
        const me = $r(te, t, n, i, l);
        return l && l(me), me;
      }
    };
    return fe;
  }
  function js(e) {
    if (gs(e)) return e = Vn(e), e.children = null, e;
  }
  function El(e) {
    if (!gs(e)) return Gu(e.type) && e.children ? Hu(e.children) : e;
    if (e.component) return e.component.subTree;
    const { shapeFlag: t, children: n } = e;
    if (n) {
      if (t & 16) return n[0];
      if (t & 32 && _e(n.default)) return n.default();
    }
  }
  function hi(e, t) {
    e.shapeFlag & 6 && e.component ? (e.transition = t, hi(e.component.subTree, t)) : e.shapeFlag & 128 ? (e.ssContent.transition = t.clone(e.ssContent), e.ssFallback.transition = t.clone(e.ssFallback)) : e.transition = t;
  }
  function qa(e, t = false, n) {
    let i = [], l = 0;
    for (let c = 0; c < e.length; c++) {
      let f = e[c];
      const h = n == null ? f.key : String(n) + String(f.key != null ? f.key : c);
      f.type === Rt ? (f.patchFlag & 128 && l++, i = i.concat(qa(f.children, t, h))) : (t || f.type !== Et) && i.push(h != null ? Vn(f, {
        key: h
      }) : f);
    }
    if (l > 1) for (let c = 0; c < i.length; c++) i[c].patchFlag = -2;
    return i;
  }
  Ad = function(e, t) {
    return _e(e) ? dt({
      name: e.name
    }, t, {
      setup: e
    }) : e;
  };
  function Ku(e) {
    e.ids = [
      e.ids[0] + e.ids[2]++ + "-",
      0,
      0
    ];
  }
  Qb = function(e) {
    const t = pi(), n = cd(null);
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
  const Fo = /* @__PURE__ */ new WeakMap();
  function Cr(e, t, n, i, l = false) {
    if (Ie(e)) {
      e.forEach((F, C) => Cr(F, t && (Ie(t) ? t[C] : t), n, i, l));
      return;
    }
    if (ki(i) && !l) {
      i.shapeFlag & 512 && i.type.__asyncResolved && i.component.subTree.component && Cr(e, t, n, i.component.subTree);
      return;
    }
    const c = i.shapeFlag & 4 ? vs(i.component) : i.el, f = l ? null : c, { i: h, r: p } = e, v = t && t.r, g = h.refs === Fe ? h.refs = {} : h.refs, T = h.setupState, N = De(T), R = T === Fe ? iu : (F) => ze(N, F);
    if (v != null && v !== p) {
      if (Il(t), st(v)) g[v] = null, R(v) && (T[v] = null);
      else if (at(v)) {
        v.value = null;
        const F = t;
        F.k && (g[F.k] = null);
      }
    }
    if (_e(p)) Xr(p, h, 12, [
      f,
      g
    ]);
    else {
      const F = st(p), C = at(p);
      if (F || C) {
        const he = () => {
          if (e.f) {
            const ne = F ? R(p) ? T[p] : g[p] : p.value;
            if (l) Ie(ne) && ja(ne, c);
            else if (Ie(ne)) ne.includes(c) || ne.push(c);
            else if (F) g[p] = [
              c
            ], R(p) && (T[p] = g[p]);
            else {
              const H = [
                c
              ];
              p.value = H, e.k && (g[e.k] = H);
            }
          } else F ? (g[p] = f, R(p) && (T[p] = f)) : C && (p.value = f, e.k && (g[e.k] = f));
        };
        if (f) {
          const ne = () => {
            he(), Fo.delete(e);
          };
          ne.id = -1, Fo.set(e, ne), wt(ne, n);
        } else Il(e), he();
      }
    }
  }
  function Il(e) {
    const t = Fo.get(e);
    t && (t.flags |= 8, Fo.delete(e));
  }
  ls().requestIdleCallback;
  ls().cancelIdleCallback;
  let ki, gs, Rd;
  ki = (e) => !!e.type.__asyncLoader;
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
      const n = pi(), i = n.ctx;
      if (!i.renderer) return () => {
        const H = t.default && t.default();
        return H && H.length === 1 ? H[0] : H;
      };
      const l = /* @__PURE__ */ new Map(), c = /* @__PURE__ */ new Set();
      let f = null;
      const h = n.suspense, { renderer: { p, m: v, um: g, o: { createElement: T } } } = i, N = T("div");
      i.activate = (H, Y, U, ue, ge) => {
        const re = H.component;
        v(H, Y, U, 0, h), p(re.vnode, H, Y, U, re, h, ue, H.slotScopeIds, ge), wt(() => {
          re.isDeactivated = false, re.a && Rr(re.a);
          const fe = H.props && H.props.onVnodeMounted;
          fe && nn(fe, re.parent, H);
        }, h);
      }, i.deactivate = (H) => {
        const Y = H.component;
        Go(Y.m), Go(Y.a), v(H, N, null, 1, h), wt(() => {
          Y.da && Rr(Y.da);
          const U = H.props && H.props.onVnodeUnmounted;
          U && nn(U, Y.parent, H), Y.isDeactivated = true;
        }, h);
      };
      function R(H) {
        Us(H), g(H, n, h, true);
      }
      function F(H) {
        l.forEach((Y, U) => {
          const ue = ya(Y.type);
          ue && !H(ue) && C(U);
        });
      }
      function C(H) {
        const Y = l.get(H);
        Y && (!f || !ai(Y, f)) ? R(Y) : f && Us(f), l.delete(H), c.delete(H);
      }
      Yi(() => [
        e.include,
        e.exclude
      ], ([H, Y]) => {
        H && F((U) => Tr(H, U)), Y && F((U) => !Tr(Y, U));
      }, {
        flush: "post",
        deep: true
      });
      let he = null;
      const ne = () => {
        he != null && (Wo(n.subTree.type) ? wt(() => {
          l.set(he, ho(n.subTree));
        }, n.subTree.suspense) : l.set(he, ho(n.subTree)));
      };
      return Qr(ne), Ka(ne), Ya(() => {
        l.forEach((H) => {
          const { subTree: Y, suspense: U } = n, ue = ho(Y);
          if (H.type === ue.type && H.key === ue.key) {
            Us(ue);
            const ge = ue.component.da;
            ge && wt(ge, U);
            return;
          }
          R(H);
        });
      }), () => {
        if (he = null, !t.default) return f = null;
        const H = t.default(), Y = H[0];
        if (H.length > 1) return f = null, H;
        if (!Xi(Y) || !(Y.shapeFlag & 4) && !(Y.shapeFlag & 128)) return f = null, Y;
        let U = ho(Y);
        if (U.type === Et) return f = null, U;
        const ue = U.type, ge = ya(ki(U) ? U.type.__asyncResolved || {} : ue), { include: re, exclude: fe, max: te } = e;
        if (re && (!ge || !Tr(re, ge)) || fe && ge && Tr(fe, ge)) return U.shapeFlag &= -257, f = U, Y;
        const me = U.key == null ? ue : U.key, Re = l.get(me);
        return U.el && (U = Vn(U), Y.shapeFlag & 128 && (Y.ssContent = U)), he = me, Re ? (U.el = Re.el, U.component = Re.component, U.transition && hi(U, U.transition), U.shapeFlag |= 512, c.delete(me), c.add(me)) : (c.add(me), te && c.size > parseInt(te, 10) && C(c.values().next().value)), U.shapeFlag |= 256, f = U, Wo(Y.type) ? Y : U;
      };
    }
  };
  ev = Rd;
  function Tr(e, t) {
    return Ie(e) ? e.some((n) => Tr(n, t)) : st(e) ? e.split(",").includes(t) : Mh(e) ? (e.lastIndex = 0, e.test(t)) : false;
  }
  Md = function(e, t) {
    Yu(e, "a", t);
  };
  Nd = function(e, t) {
    Yu(e, "da", t);
  };
  function Yu(e, t, n = Mt) {
    const i = e.__wdc || (e.__wdc = () => {
      let l = n;
      for (; l; ) {
        if (l.isDeactivated) return;
        l = l.parent;
      }
      return e();
    });
    if (ms(t, i, n), n) {
      let l = n.parent;
      for (; l && l.parent; ) gs(l.parent.vnode) && Pd(i, t, n, l), l = l.parent;
    }
  }
  function Pd(e, t, n, i) {
    const l = ms(t, e, i, true);
    Ja(() => {
      ja(i[t], l);
    }, n);
  }
  function Us(e) {
    e.shapeFlag &= -257, e.shapeFlag &= -513;
  }
  function ho(e) {
    return e.shapeFlag & 128 ? e.ssContent : e;
  }
  function ms(e, t, n = Mt, i = false) {
    if (n) {
      const l = n[e] || (n[e] = []), c = t.__weh || (t.__weh = (...f) => {
        Bn();
        const h = eo(n), p = pn(t, n, e, f);
        return h(), zn(), p;
      });
      return i ? l.unshift(c) : l.push(c), c;
    }
  }
  let Yn, Ju, Ka, kd, Ld, Dd;
  Yn = (e) => (t, n = Mt) => {
    (!Hr || e === "sp") && ms(e, (...i) => t(...i), n);
  };
  Cd = Yn("bm");
  Qr = Yn("m");
  Ju = Yn("bu");
  Ka = Yn("u");
  Ya = Yn("bum");
  Ja = Yn("um");
  kd = Yn("sp");
  Ld = Yn("rtg");
  Dd = Yn("rtc");
  function xd(e, t = Mt) {
    ms("ec", e, t);
  }
  const Fd = "components", Zu = /* @__PURE__ */ Symbol.for("v-ndc");
  tv = function(e) {
    return st(e) ? jd(Fd, e, false) || e : e || Zu;
  };
  function jd(e, t, n = true, i = false) {
    const l = It || Mt;
    if (l) {
      const c = l.type;
      {
        const h = ya(c, false);
        if (h && (h === t || h === Zt(t) || h === as(Zt(t)))) return c;
      }
      const f = Tl(l[e] || c[e], t) || Tl(l.appContext[e], t);
      return !f && i ? c : f;
    }
  }
  function Tl(e, t) {
    return e && (e[t] || e[Zt(t)] || e[as(Zt(t))]);
  }
  Ud = function(e, t, n, i) {
    let l;
    const c = n, f = Ie(e);
    if (f || st(e)) {
      const h = f && Gn(e);
      let p = false, v = false;
      h && (p = !Jt(e), v = $n(e), e = fs(e)), l = new Array(e.length);
      for (let g = 0, T = e.length; g < T; g++) l[g] = t(p ? v ? Zi(dn(e[g])) : dn(e[g]) : e[g], g, void 0, c);
    } else if (typeof e == "number") {
      l = new Array(e);
      for (let h = 0; h < e; h++) l[h] = t(h + 1, h, void 0, c);
    } else if (Ke(e)) if (e[Symbol.iterator]) l = Array.from(e, (h, p) => t(h, p, void 0, c));
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
      const i = t[n];
      if (Ie(i)) for (let l = 0; l < i.length; l++) e[i[l].name] = i[l].fn;
      else i && (e[i.name] = i.key ? (...l) => {
        const c = i.fn(...l);
        return c && (c.key = i.key), c;
      } : i.fn);
    }
    return e;
  };
  iv = function(e, t, n = {}, i, l) {
    if (It.ce || It.parent && ki(It.parent) && It.parent.ce) {
      const v = Object.keys(n).length > 0;
      return t !== "default" && (n.name = t), rn(), ma(Rt, null, [
        Nt("slot", n, i && i())
      ], v ? -2 : 64);
    }
    let c = e[t];
    c && c._c && (c._d = false), rn();
    const f = c && Xu(c(n)), h = n.key || f && f.key, p = ma(Rt, {
      key: (h && !qn(h) ? h : `_${t}`) + (!f && i ? "_fb" : "")
    }, f || (i ? i() : []), f && e._ === 1 ? 64 : -2);
    return !l && p.scopeId && (p.slotScopeIds = [
      p.scopeId + "-s"
    ]), c && c._c && (c._d = true), p;
  };
  function Xu(e) {
    return e.some((t) => Xi(t) ? !(t.type === Et || t.type === Rt && !Xu(t.children)) : true) ? e : null;
  }
  const ha = (e) => e ? wf(e) ? vs(e) : ha(e.parent) : null, kr = dt(/* @__PURE__ */ Object.create(null), {
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
    $options: (e) => ef(e),
    $forceUpdate: (e) => e.f || (e.f = () => {
      Ha(e.update);
    }),
    $nextTick: (e) => e.n || (e.n = ku.bind(e.proxy)),
    $watch: (e) => Qd.bind(e)
  }), Gs = (e, t) => e !== Fe && !e.__isScriptSetup && ze(e, t), Gd = {
    get({ _: e }, t) {
      if (t === "__v_skip") return true;
      const { ctx: n, setupState: i, data: l, props: c, accessCache: f, type: h, appContext: p } = e;
      if (t[0] !== "$") {
        const N = f[t];
        if (N !== void 0) switch (N) {
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
          if (Gs(i, t)) return f[t] = 1, i[t];
          if (l !== Fe && ze(l, t)) return f[t] = 2, l[t];
          if (ze(c, t)) return f[t] = 3, c[t];
          if (n !== Fe && ze(n, t)) return f[t] = 4, n[t];
          da && (f[t] = 0);
        }
      }
      const v = kr[t];
      let g, T;
      if (v) return t === "$attrs" && At(e.attrs, "get", ""), v(e);
      if ((g = h.__cssModules) && (g = g[t])) return g;
      if (n !== Fe && ze(n, t)) return f[t] = 4, n[t];
      if (T = p.config.globalProperties, ze(T, t)) return T[t];
    },
    set({ _: e }, t, n) {
      const { data: i, setupState: l, ctx: c } = e;
      return Gs(l, t) ? (l[t] = n, true) : i !== Fe && ze(i, t) ? (i[t] = n, true) : ze(e.props, t) || t[0] === "$" && t.slice(1) in e ? false : (c[t] = n, true);
    },
    has({ _: { data: e, setupState: t, accessCache: n, ctx: i, appContext: l, props: c, type: f } }, h) {
      let p;
      return !!(n[h] || e !== Fe && h[0] !== "$" && ze(e, h) || Gs(t, h) || ze(c, h) || ze(i, h) || ze(kr, h) || ze(l.config.globalProperties, h) || (p = f.__cssModules) && p[h]);
    },
    defineProperty(e, t, n) {
      return n.get != null ? e._.accessCache[t] = 0 : ze(n, "value") && this.set(e, t, n.value, null), Reflect.defineProperty(e, t, n);
    }
  };
  function jo(e) {
    return Ie(e) ? e.reduce((t, n) => (t[n] = null, t), {}) : e;
  }
  rv = function(e, t) {
    return !e || !t ? e || t : Ie(e) && Ie(t) ? e.concat(t) : dt({}, jo(e), jo(t));
  };
  let da = true;
  function Wd(e) {
    const t = ef(e), n = e.proxy, i = e.ctx;
    da = false, t.beforeCreate && Sl(t.beforeCreate, e, "bc");
    const { data: l, computed: c, methods: f, watch: h, provide: p, inject: v, created: g, beforeMount: T, mounted: N, beforeUpdate: R, updated: F, activated: C, deactivated: he, beforeDestroy: ne, beforeUnmount: H, destroyed: Y, unmounted: U, render: ue, renderTracked: ge, renderTriggered: re, errorCaptured: fe, serverPrefetch: te, expose: me, inheritAttrs: Re, components: de, directives: Ge, filters: ft } = t;
    if (v && Bd(v, i, null), f) for (const Pe in f) {
      const Ve = f[Pe];
      _e(Ve) && (i[Pe] = Ve.bind(n));
    }
    if (l) {
      const Pe = l.call(n, n);
      Ke(Pe) && (e.data = hs(Pe));
    }
    if (da = true, c) for (const Pe in c) {
      const Ve = c[Pe], _n = _e(Ve) ? Ve.bind(n, n) : _e(Ve.get) ? Ve.get.bind(n, n) : fn, ji = !_e(Ve) && _e(Ve.set) ? Ve.set.bind(n) : fn, On = tl({
        get: _n,
        set: ji
      });
      Object.defineProperty(i, Pe, {
        enumerable: true,
        configurable: true,
        get: () => On.value,
        set: (ve) => On.value = ve
      });
    }
    if (h) for (const Pe in h) Qu(h[Pe], i, n, Pe);
    if (p) {
      const Pe = _e(p) ? p.call(n) : p;
      Reflect.ownKeys(Pe).forEach((Ve) => {
        Kd(Ve, Pe[Ve]);
      });
    }
    g && Sl(g, e, "c");
    function Ye(Pe, Ve) {
      Ie(Ve) ? Ve.forEach((_n) => Pe(_n.bind(n))) : Ve && Pe(Ve.bind(n));
    }
    if (Ye(Cd, T), Ye(Qr, N), Ye(Ju, R), Ye(Ka, F), Ye(Md, C), Ye(Nd, he), Ye(xd, fe), Ye(Dd, ge), Ye(Ld, re), Ye(Ya, H), Ye(Ja, U), Ye(kd, te), Ie(me)) if (me.length) {
      const Pe = e.exposed || (e.exposed = {});
      me.forEach((Ve) => {
        Object.defineProperty(Pe, Ve, {
          get: () => n[Ve],
          set: (_n) => n[Ve] = _n,
          enumerable: true
        });
      });
    } else e.exposed || (e.exposed = {});
    ue && e.render === fn && (e.render = ue), Re != null && (e.inheritAttrs = Re), de && (e.components = de), Ge && (e.directives = Ge), te && Ku(e);
  }
  function Bd(e, t, n = fn) {
    Ie(e) && (e = pa(e));
    for (const i in e) {
      const l = e[i];
      let c;
      Ke(l) ? "default" in l ? c = Lr(l.from || i, l.default, true) : c = Lr(l.from || i) : c = Lr(l), at(c) ? Object.defineProperty(t, i, {
        enumerable: true,
        configurable: true,
        get: () => c.value,
        set: (f) => c.value = f
      }) : t[i] = c;
    }
  }
  function Sl(e, t, n) {
    pn(Ie(e) ? e.map((i) => i.bind(t.proxy)) : e.bind(t.proxy), t, n);
  }
  function Qu(e, t, n, i) {
    let l = i.includes(".") ? nf(n, i) : () => n[i];
    if (st(e)) {
      const c = t[e];
      _e(c) && Yi(l, c);
    } else if (_e(e)) Yi(l, e.bind(n));
    else if (Ke(e)) if (Ie(e)) e.forEach((c) => Qu(c, t, n, i));
    else {
      const c = _e(e.handler) ? e.handler.bind(n) : t[e.handler];
      _e(c) && Yi(l, c, e);
    }
  }
  function ef(e) {
    const t = e.type, { mixins: n, extends: i } = t, { mixins: l, optionsCache: c, config: { optionMergeStrategies: f } } = e.appContext, h = c.get(t);
    let p;
    return h ? p = h : !l.length && !n && !i ? p = t : (p = {}, l.length && l.forEach((v) => Uo(p, v, f, true)), Uo(p, t, f)), Ke(t) && c.set(t, p), p;
  }
  function Uo(e, t, n, i = false) {
    const { mixins: l, extends: c } = t;
    c && Uo(e, c, n, true), l && l.forEach((f) => Uo(e, f, n, true));
    for (const f in t) if (!(i && f === "expose")) {
      const h = zd[f] || n && n[f];
      e[f] = h ? h(e[f], t[f]) : t[f];
    }
    return e;
  }
  const zd = {
    data: _l,
    props: Ol,
    emits: Ol,
    methods: Sr,
    computed: Sr,
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
    components: Sr,
    directives: Sr,
    watch: Vd,
    provide: _l,
    inject: $d
  };
  function _l(e, t) {
    return t ? e ? function() {
      return dt(_e(e) ? e.call(this, this) : e, _e(t) ? t.call(this, this) : t);
    } : t : e;
  }
  function $d(e, t) {
    return Sr(pa(e), pa(t));
  }
  function pa(e) {
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
  function Sr(e, t) {
    return e ? dt(/* @__PURE__ */ Object.create(null), e, t) : t;
  }
  function Ol(e, t) {
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
    for (const i in t) n[i] = kt(e[i], t[i]);
    return n;
  }
  function tf() {
    return {
      app: null,
      config: {
        isNativeTag: iu,
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
    return function(i, l = null) {
      _e(i) || (i = dt({}, i)), l != null && !Ke(l) && (l = null);
      const c = tf(), f = /* @__PURE__ */ new WeakSet(), h = [];
      let p = false;
      const v = c.app = {
        _uid: Hd++,
        _component: i,
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
        mount(g, T, N) {
          if (!p) {
            const R = v._ceVNode || Nt(i, l);
            return R.appContext = c, N === true ? N = "svg" : N === false && (N = void 0), e(R, g, N), p = true, v._container = g, g.__vue_app__ = v, vs(R.component);
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
          const T = Li;
          Li = v;
          try {
            return g();
          } finally {
            Li = T;
          }
        }
      };
      return v;
    };
  }
  let Li = null;
  Kd = function(e, t) {
    if (Mt) {
      let n = Mt.provides;
      const i = Mt.parent && Mt.parent.provides;
      i === n && (n = Mt.provides = Object.create(i)), n[e] = t;
    }
  };
  Lr = function(e, t, n = false) {
    const i = pi();
    if (i || Li) {
      let l = Li ? Li._context.provides : i ? i.parent == null || i.ce ? i.vnode.appContext && i.vnode.appContext.provides : i.parent.provides : void 0;
      if (l && e in l) return l[e];
      if (arguments.length > 1) return n && _e(t) ? t.call(i && i.proxy) : t;
    }
  };
  Yd = function() {
    return !!(pi() || Li);
  };
  const Jd = /* @__PURE__ */ Symbol.for("v-scx"), Zd = () => Lr(Jd);
  ov = function(e, t) {
    return ws(e, null, t);
  };
  function Xd(e, t) {
    return ws(e, null, {
      flush: "sync"
    });
  }
  Yi = function(e, t, n) {
    return ws(e, t, n);
  };
  function ws(e, t, n = Fe) {
    const { immediate: i, deep: l, flush: c, once: f } = n, h = dt({}, n), p = t && i || !t && c !== "post";
    let v;
    if (Hr) {
      if (c === "sync") {
        const R = Zd();
        v = R.__watcherHandles || (R.__watcherHandles = []);
      } else if (!p) {
        const R = () => {
        };
        return R.stop = fn, R.resume = fn, R.pause = fn, R;
      }
    }
    const g = Mt;
    h.call = (R, F, C) => pn(R, g, F, C);
    let T = false;
    c === "post" ? h.scheduler = (R) => {
      wt(R, g && g.suspense);
    } : c !== "sync" && (T = true, h.scheduler = (R, F) => {
      F ? R() : Ha(R);
    }), h.augmentJob = (R) => {
      t && (R.flags |= 4), T && (R.flags |= 2, g && (R.id = g.uid, R.i = g));
    };
    const N = vd(e, t, h);
    return Hr && (v ? v.push(N) : p && N()), N;
  }
  function Qd(e, t, n) {
    const i = this.proxy, l = st(e) ? e.includes(".") ? nf(i, e) : () => i[e] : e.bind(i, i);
    let c;
    _e(t) ? c = t : (c = t.handler, n = t);
    const f = eo(this), h = ws(l, c.bind(i), n);
    return f(), h;
  }
  function nf(e, t) {
    const n = t.split(".");
    return () => {
      let i = e;
      for (let l = 0; l < n.length && i; l++) i = i[n[l]];
      return i;
    };
  }
  sv = function(e, t, n = Fe) {
    const i = pi(), l = Zt(t), c = Kn(t), f = rf(e, l), h = dd((p, v) => {
      let g, T = Fe, N;
      return Xd(() => {
        const R = e[l];
        Gt(g, R) && (g = R, v());
      }), {
        get() {
          return p(), n.get ? n.get(g) : g;
        },
        set(R) {
          const F = n.set ? n.set(R) : R;
          if (!Gt(F, g) && !(T !== Fe && Gt(R, T))) return;
          const C = i.vnode.props;
          C && (t in C || l in C || c in C) && (`onUpdate:${t}` in C || `onUpdate:${l}` in C || `onUpdate:${c}` in C) || (g = R, v()), i.emit(`update:${t}`, F), Gt(R, F) && Gt(R, T) && !Gt(F, N) && v(), T = R, N = F;
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
  const rf = (e, t) => t === "modelValue" || t === "model-value" ? e.modelModifiers : e[`${t}Modifiers`] || e[`${Zt(t)}Modifiers`] || e[`${Kn(t)}Modifiers`];
  function ep(e, t, ...n) {
    if (e.isUnmounted) return;
    const i = e.vnode.props || Fe;
    let l = n;
    const c = t.startsWith("update:"), f = c && rf(i, t.slice(7));
    f && (f.trim && (l = n.map((g) => st(g) ? g.trim() : g)), f.number && (l = n.map(kh)));
    let h, p = i[h = ks(t)] || i[h = ks(Zt(t))];
    !p && c && (p = i[h = ks(Kn(t))]), p && pn(p, e, 6, l);
    const v = i[h + "Once"];
    if (v) {
      if (!e.emitted) e.emitted = {};
      else if (e.emitted[h]) return;
      e.emitted[h] = true, pn(v, e, 6, l);
    }
  }
  const tp = /* @__PURE__ */ new WeakMap();
  function of(e, t, n = false) {
    const i = n ? tp : t.emitsCache, l = i.get(e);
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
    return !c && !h ? (Ke(e) && i.set(e, null), null) : (Ie(c) ? c.forEach((p) => f[p] = null) : dt(f, c), Ke(e) && i.set(e, f), f);
  }
  function ys(e, t) {
    return !e || !rs(t) ? false : (t = t.slice(2).replace(/Once$/, ""), ze(e, t[0].toLowerCase() + t.slice(1)) || ze(e, Kn(t)) || ze(e, t));
  }
  function Al(e) {
    const { type: t, vnode: n, proxy: i, withProxy: l, propsOptions: [c], slots: f, attrs: h, emit: p, render: v, renderCache: g, props: T, data: N, setupState: R, ctx: F, inheritAttrs: C } = e, he = xo(e);
    let ne, H;
    try {
      if (n.shapeFlag & 4) {
        const U = l || i, ue = U;
        ne = En(v.call(ue, U, g, T, R, N, F)), H = h;
      } else {
        const U = t;
        ne = En(U.length > 1 ? U(T, {
          attrs: h,
          slots: f,
          emit: p
        }) : U(T, null)), H = t.props ? h : np(h);
      }
    } catch (U) {
      xr.length = 0, ps(U, e, 1), ne = Nt(Et);
    }
    let Y = ne;
    if (H && C !== false) {
      const U = Object.keys(H), { shapeFlag: ue } = Y;
      U.length && ue & 7 && (c && U.some(Fa) && (H = ip(H, c)), Y = Vn(Y, H, false, true));
    }
    return n.dirs && (Y = Vn(Y, null, false, true), Y.dirs = Y.dirs ? Y.dirs.concat(n.dirs) : n.dirs), n.transition && hi(Y, n.transition), ne = Y, xo(he), ne;
  }
  const np = (e) => {
    let t;
    for (const n in e) (n === "class" || n === "style" || rs(n)) && ((t || (t = {}))[n] = e[n]);
    return t;
  }, ip = (e, t) => {
    const n = {};
    for (const i in e) (!Fa(i) || !(i.slice(9) in t)) && (n[i] = e[i]);
    return n;
  };
  function rp(e, t, n) {
    const { props: i, children: l, component: c } = e, { props: f, children: h, patchFlag: p } = t, v = c.emitsOptions;
    if (t.dirs || t.transition) return true;
    if (n && p >= 0) {
      if (p & 1024) return true;
      if (p & 16) return i ? Rl(i, f, v) : !!f;
      if (p & 8) {
        const g = t.dynamicProps;
        for (let T = 0; T < g.length; T++) {
          const N = g[T];
          if (f[N] !== i[N] && !ys(v, N)) return true;
        }
      }
    } else return (l || h) && (!h || !h.$stable) ? true : i === f ? false : i ? f ? Rl(i, f, v) : true : !!f;
    return false;
  }
  function Rl(e, t, n) {
    const i = Object.keys(t);
    if (i.length !== Object.keys(e).length) return true;
    for (let l = 0; l < i.length; l++) {
      const c = i[l];
      if (t[c] !== e[c] && !ys(n, c)) return true;
    }
    return false;
  }
  function op({ vnode: e, parent: t }, n) {
    for (; t; ) {
      const i = t.subTree;
      if (i.suspense && i.suspense.activeBranch === e && (i.el = e.el), i === e) (e = t.vnode).el = n, t = t.parent;
      else break;
    }
  }
  const sf = {}, af = () => Object.create(sf), lf = (e) => Object.getPrototypeOf(e) === sf;
  function sp(e, t, n, i = false) {
    const l = {}, c = af();
    e.propsDefaults = /* @__PURE__ */ Object.create(null), cf(e, t, l, c);
    for (const f in e.propsOptions[0]) f in l || (l[f] = void 0);
    n ? e.props = i ? l : ld(l) : e.type.props ? e.props = l : e.props = c, e.attrs = c;
  }
  function ap(e, t, n, i) {
    const { props: l, attrs: c, vnode: { patchFlag: f } } = e, h = De(l), [p] = e.propsOptions;
    let v = false;
    if ((i || f > 0) && !(f & 16)) {
      if (f & 8) {
        const g = e.vnode.dynamicProps;
        for (let T = 0; T < g.length; T++) {
          let N = g[T];
          if (ys(e.emitsOptions, N)) continue;
          const R = t[N];
          if (p) if (ze(c, N)) R !== c[N] && (c[N] = R, v = true);
          else {
            const F = Zt(N);
            l[F] = ga(p, h, F, R, e, false);
          }
          else R !== c[N] && (c[N] = R, v = true);
        }
      }
    } else {
      cf(e, t, l, c) && (v = true);
      let g;
      for (const T in h) (!t || !ze(t, T) && ((g = Kn(T)) === T || !ze(t, g))) && (p ? n && (n[T] !== void 0 || n[g] !== void 0) && (l[T] = ga(p, h, T, void 0, e, true)) : delete l[T]);
      if (c !== h) for (const T in c) (!t || !ze(t, T)) && (delete c[T], v = true);
    }
    v && xn(e.attrs, "set", "");
  }
  function cf(e, t, n, i) {
    const [l, c] = e.propsOptions;
    let f = false, h;
    if (t) for (let p in t) {
      if (Ar(p)) continue;
      const v = t[p];
      let g;
      l && ze(l, g = Zt(p)) ? !c || !c.includes(g) ? n[g] = v : (h || (h = {}))[g] = v : ys(e.emitsOptions, p) || (!(p in i) || v !== i[p]) && (i[p] = v, f = true);
    }
    if (c) {
      const p = De(n), v = h || Fe;
      for (let g = 0; g < c.length; g++) {
        const T = c[g];
        n[T] = ga(l, p, T, v[T], e, !ze(v, T));
      }
    }
    return f;
  }
  function ga(e, t, n, i, l, c) {
    const f = e[n];
    if (f != null) {
      const h = ze(f, "default");
      if (h && i === void 0) {
        const p = f.default;
        if (f.type !== Function && !f.skipFactory && _e(p)) {
          const { propsDefaults: v } = l;
          if (n in v) i = v[n];
          else {
            const g = eo(l);
            i = v[n] = p.call(null, t), g();
          }
        } else i = p;
        l.ce && l.ce._setProp(n, i);
      }
      f[0] && (c && !h ? i = false : f[1] && (i === "" || i === Kn(n)) && (i = true));
    }
    return i;
  }
  const lp = /* @__PURE__ */ new WeakMap();
  function uf(e, t, n = false) {
    const i = n ? lp : t.propsCache, l = i.get(e);
    if (l) return l;
    const c = e.props, f = {}, h = [];
    let p = false;
    if (!_e(e)) {
      const g = (T) => {
        p = true;
        const [N, R] = uf(T, t, true);
        dt(f, N), R && h.push(...R);
      };
      !n && t.mixins.length && t.mixins.forEach(g), e.extends && g(e.extends), e.mixins && e.mixins.forEach(g);
    }
    if (!c && !p) return Ke(e) && i.set(e, Vi), Vi;
    if (Ie(c)) for (let g = 0; g < c.length; g++) {
      const T = Zt(c[g]);
      Ml(T) && (f[T] = Fe);
    }
    else if (c) for (const g in c) {
      const T = Zt(g);
      if (Ml(T)) {
        const N = c[g], R = f[T] = Ie(N) || _e(N) ? {
          type: N
        } : dt({}, N), F = R.type;
        let C = false, he = true;
        if (Ie(F)) for (let ne = 0; ne < F.length; ++ne) {
          const H = F[ne], Y = _e(H) && H.name;
          if (Y === "Boolean") {
            C = true;
            break;
          } else Y === "String" && (he = false);
        }
        else C = _e(F) && F.name === "Boolean";
        R[0] = C, R[1] = he, (C || ze(R, "default")) && h.push(T);
      }
    }
    const v = [
      f,
      h
    ];
    return Ke(e) && i.set(e, v), v;
  }
  function Ml(e) {
    return e[0] !== "$" && !Ar(e);
  }
  const Za = (e) => e === "_" || e === "_ctx" || e === "$stable", Xa = (e) => Ie(e) ? e.map(En) : [
    En(e)
  ], cp = (e, t, n) => {
    if (t._n) return t;
    const i = Td((...l) => Xa(t(...l)), n);
    return i._c = false, i;
  }, ff = (e, t, n) => {
    const i = e._ctx;
    for (const l in e) {
      if (Za(l)) continue;
      const c = e[l];
      if (_e(c)) t[l] = cp(l, c, i);
      else if (c != null) {
        const f = Xa(c);
        t[l] = () => f;
      }
    }
  }, hf = (e, t) => {
    const n = Xa(t);
    e.slots.default = () => n;
  }, df = (e, t, n) => {
    for (const i in t) (n || !Za(i)) && (e[i] = t[i]);
  }, up = (e, t, n) => {
    const i = e.slots = af();
    if (e.vnode.shapeFlag & 32) {
      const l = t._;
      l ? (df(i, t, n), n && lu(i, "_", l, true)) : ff(t, i);
    } else t && hf(e, t);
  }, fp = (e, t, n) => {
    const { vnode: i, slots: l } = e;
    let c = true, f = Fe;
    if (i.shapeFlag & 32) {
      const h = t._;
      h ? n && h === 1 ? c = false : df(l, t, n) : (c = !t.$stable, ff(t, l)), f = t;
    } else t && (hf(e, t), f = {
      default: 1
    });
    if (c) for (const h in l) !Za(h) && f[h] == null && delete l[h];
  }, wt = mp;
  function hp(e) {
    return dp(e);
  }
  function dp(e, t) {
    const n = ls();
    n.__VUE__ = true;
    const { insert: i, remove: l, patchProp: c, createElement: f, createText: h, createComment: p, setText: v, setElementText: g, parentNode: T, nextSibling: N, setScopeId: R = fn, insertStaticContent: F } = e, C = (I, O, L, J = null, q = null, K = null, se = void 0, X = null, ie = !!O.dynamicChildren) => {
      if (I === O) return;
      I && !ai(I, O) && (J = An(I), ve(I, q, K, true), I = null), O.patchFlag === -2 && (ie = false, O.dynamicChildren = null);
      const { type: V, ref: we, shapeFlag: ae } = O;
      switch (V) {
        case bs:
          he(I, O, L, J);
          break;
        case Et:
          ne(I, O, L, J);
          break;
        case Dr:
          I == null && H(O, L, J, se);
          break;
        case Rt:
          de(I, O, L, J, q, K, se, X, ie);
          break;
        default:
          ae & 1 ? ue(I, O, L, J, q, K, se, X, ie) : ae & 6 ? Ge(I, O, L, J, q, K, se, X, ie) : (ae & 64 || ae & 128) && V.process(I, O, L, J, q, K, se, X, ie, yi);
      }
      we != null && q ? Cr(we, I && I.ref, K, O || I, !O) : we == null && I && I.ref != null && Cr(I.ref, null, K, I, true);
    }, he = (I, O, L, J) => {
      if (I == null) i(O.el = h(O.children), L, J);
      else {
        const q = O.el = I.el;
        O.children !== I.children && v(q, O.children);
      }
    }, ne = (I, O, L, J) => {
      I == null ? i(O.el = p(O.children || ""), L, J) : O.el = I.el;
    }, H = (I, O, L, J) => {
      [I.el, I.anchor] = F(I.children, O, L, J, I.el, I.anchor);
    }, Y = ({ el: I, anchor: O }, L, J) => {
      let q;
      for (; I && I !== O; ) q = N(I), i(I, L, J), I = q;
      i(O, L, J);
    }, U = ({ el: I, anchor: O }) => {
      let L;
      for (; I && I !== O; ) L = N(I), l(I), I = L;
      l(O);
    }, ue = (I, O, L, J, q, K, se, X, ie) => {
      if (O.type === "svg" ? se = "svg" : O.type === "math" && (se = "mathml"), I == null) ge(O, L, J, q, K, se, X, ie);
      else {
        const V = I.el && I.el._isVueCE ? I.el : null;
        try {
          V && V._beginPatch(), te(I, O, q, K, se, X, ie);
        } finally {
          V && V._endPatch();
        }
      }
    }, ge = (I, O, L, J, q, K, se, X) => {
      let ie, V;
      const { props: we, shapeFlag: ae, transition: ye, dirs: Te } = I;
      if (ie = I.el = f(I.type, K, we && we.is, we), ae & 8 ? g(ie, I.children) : ae & 16 && fe(I.children, ie, null, J, q, Ws(I, K), se, X), Te && vi(I, null, J, "created"), re(ie, I, I.scopeId, se, J), we) {
        for (const je in we) je !== "value" && !Ar(je) && c(ie, je, null, we[je], K, J);
        "value" in we && c(ie, "value", null, we.value, K), (V = we.onVnodeBeforeMount) && nn(V, J, I);
      }
      Te && vi(I, null, J, "beforeMount");
      const ke = pp(q, ye);
      ke && ye.beforeEnter(ie), i(ie, O, L), ((V = we && we.onVnodeMounted) || ke || Te) && wt(() => {
        V && nn(V, J, I), ke && ye.enter(ie), Te && vi(I, null, J, "mounted");
      }, q);
    }, re = (I, O, L, J, q) => {
      if (L && R(I, L), J) for (let K = 0; K < J.length; K++) R(I, J[K]);
      if (q) {
        let K = q.subTree;
        if (O === K || Wo(K.type) && (K.ssContent === O || K.ssFallback === O)) {
          const se = q.vnode;
          re(I, se, se.scopeId, se.slotScopeIds, q.parent);
        }
      }
    }, fe = (I, O, L, J, q, K, se, X, ie = 0) => {
      for (let V = ie; V < I.length; V++) {
        const we = I[V] = X ? si(I[V]) : En(I[V]);
        C(null, we, O, L, J, q, K, se, X);
      }
    }, te = (I, O, L, J, q, K, se) => {
      const X = O.el = I.el;
      let { patchFlag: ie, dynamicChildren: V, dirs: we } = O;
      ie |= I.patchFlag & 16;
      const ae = I.props || Fe, ye = O.props || Fe;
      let Te;
      if (L && Ei(L, false), (Te = ye.onVnodeBeforeUpdate) && nn(Te, L, O, I), we && vi(O, I, L, "beforeUpdate"), L && Ei(L, true), (ae.innerHTML && ye.innerHTML == null || ae.textContent && ye.textContent == null) && g(X, ""), V ? me(I.dynamicChildren, V, X, L, J, Ws(O, q), K) : se || Ve(I, O, X, null, L, J, Ws(O, q), K, false), ie > 0) {
        if (ie & 16) Re(X, ae, ye, L, q);
        else if (ie & 2 && ae.class !== ye.class && c(X, "class", null, ye.class, q), ie & 4 && c(X, "style", ae.style, ye.style, q), ie & 8) {
          const ke = O.dynamicProps;
          for (let je = 0; je < ke.length; je++) {
            const Ue = ke[je], Tt = ae[Ue], St = ye[Ue];
            (St !== Tt || Ue === "value") && c(X, Ue, Tt, St, q, L);
          }
        }
        ie & 1 && I.children !== O.children && g(X, O.children);
      } else !se && V == null && Re(X, ae, ye, L, q);
      ((Te = ye.onVnodeUpdated) || we) && wt(() => {
        Te && nn(Te, L, O, I), we && vi(O, I, L, "updated");
      }, J);
    }, me = (I, O, L, J, q, K, se) => {
      for (let X = 0; X < O.length; X++) {
        const ie = I[X], V = O[X], we = ie.el && (ie.type === Rt || !ai(ie, V) || ie.shapeFlag & 198) ? T(ie.el) : L;
        C(ie, V, we, null, J, q, K, se, true);
      }
    }, Re = (I, O, L, J, q) => {
      if (O !== L) {
        if (O !== Fe) for (const K in O) !Ar(K) && !(K in L) && c(I, K, O[K], null, q, J);
        for (const K in L) {
          if (Ar(K)) continue;
          const se = L[K], X = O[K];
          se !== X && K !== "value" && c(I, K, X, se, q, J);
        }
        "value" in L && c(I, "value", O.value, L.value, q);
      }
    }, de = (I, O, L, J, q, K, se, X, ie) => {
      const V = O.el = I ? I.el : h(""), we = O.anchor = I ? I.anchor : h("");
      let { patchFlag: ae, dynamicChildren: ye, slotScopeIds: Te } = O;
      Te && (X = X ? X.concat(Te) : Te), I == null ? (i(V, L, J), i(we, L, J), fe(O.children || [], L, we, q, K, se, X, ie)) : ae > 0 && ae & 64 && ye && I.dynamicChildren ? (me(I.dynamicChildren, ye, L, q, K, se, X), (O.key != null || q && O === q.subTree) && Qa(I, O, true)) : Ve(I, O, L, we, q, K, se, X, ie);
    }, Ge = (I, O, L, J, q, K, se, X, ie) => {
      O.slotScopeIds = X, I == null ? O.shapeFlag & 512 ? q.ctx.activate(O, L, J, se, ie) : ft(O, L, J, q, K, se, ie) : zt(I, O, ie);
    }, ft = (I, O, L, J, q, K, se) => {
      const X = I.component = Sp(I, J, q);
      if (gs(I) && (X.ctx.renderer = yi), _p(X, false, se), X.asyncDep) {
        if (q && q.registerDep(X, Ye, se), !I.el) {
          const ie = X.subTree = Nt(Et);
          ne(null, ie, O, L), I.placeholder = ie.el;
        }
      } else Ye(X, I, O, L, q, K, se);
    }, zt = (I, O, L) => {
      const J = O.component = I.component;
      if (rp(I, O, L)) if (J.asyncDep && !J.asyncResolved) {
        Pe(J, O, L);
        return;
      } else J.next = O, J.update();
      else O.el = I.el, J.vnode = O;
    }, Ye = (I, O, L, J, q, K, se) => {
      const X = () => {
        if (I.isMounted) {
          let { next: ae, bu: ye, u: Te, parent: ke, vnode: je } = I;
          {
            const Qt = pf(I);
            if (Qt) {
              ae && (ae.el = je.el, Pe(I, ae, se)), Qt.asyncDep.then(() => {
                I.isUnmounted || X();
              });
              return;
            }
          }
          let Ue = ae, Tt;
          Ei(I, false), ae ? (ae.el = je.el, Pe(I, ae, se)) : ae = je, ye && Rr(ye), (Tt = ae.props && ae.props.onVnodeBeforeUpdate) && nn(Tt, ke, ae, je), Ei(I, true);
          const St = Al(I), Xt = I.subTree;
          I.subTree = St, C(Xt, St, T(Xt.el), An(Xt), I, q, K), ae.el = St.el, Ue === null && op(I, St.el), Te && wt(Te, q), (Tt = ae.props && ae.props.onVnodeUpdated) && wt(() => nn(Tt, ke, ae, je), q);
        } else {
          let ae;
          const { el: ye, props: Te } = O, { bm: ke, m: je, parent: Ue, root: Tt, type: St } = I, Xt = ki(O);
          Ei(I, false), ke && Rr(ke), !Xt && (ae = Te && Te.onVnodeBeforeMount) && nn(ae, Ue, O), Ei(I, true);
          {
            Tt.ce && Tt.ce._def.shadowRoot !== false && Tt.ce._injectChildStyle(St);
            const Qt = I.subTree = Al(I);
            C(null, Qt, L, J, I, q, K), O.el = Qt.el;
          }
          if (je && wt(je, q), !Xt && (ae = Te && Te.onVnodeMounted)) {
            const Qt = O;
            wt(() => nn(ae, Ue, Qt), q);
          }
          (O.shapeFlag & 256 || Ue && ki(Ue.vnode) && Ue.vnode.shapeFlag & 256) && I.a && wt(I.a, q), I.isMounted = true, O = L = J = null;
        }
      };
      I.scope.on();
      const ie = I.effect = new gu(X);
      I.scope.off();
      const V = I.update = ie.run.bind(ie), we = I.job = ie.runIfDirty.bind(ie);
      we.i = I, we.id = I.uid, ie.scheduler = () => Ha(we), Ei(I, true), V();
    }, Pe = (I, O, L) => {
      O.component = I;
      const J = I.vnode.props;
      I.vnode = O, I.next = null, ap(I, O.props, J, L), fp(I, O.children, L), Bn(), wl(I), zn();
    }, Ve = (I, O, L, J, q, K, se, X, ie = false) => {
      const V = I && I.children, we = I ? I.shapeFlag : 0, ae = O.children, { patchFlag: ye, shapeFlag: Te } = O;
      if (ye > 0) {
        if (ye & 128) {
          ji(V, ae, L, J, q, K, se, X, ie);
          return;
        } else if (ye & 256) {
          _n(V, ae, L, J, q, K, se, X, ie);
          return;
        }
      }
      Te & 8 ? (we & 16 && Ft(V, q, K), ae !== V && g(L, ae)) : we & 16 ? Te & 16 ? ji(V, ae, L, J, q, K, se, X, ie) : Ft(V, q, K, true) : (we & 8 && g(L, ""), Te & 16 && fe(ae, L, J, q, K, se, X, ie));
    }, _n = (I, O, L, J, q, K, se, X, ie) => {
      I = I || Vi, O = O || Vi;
      const V = I.length, we = O.length, ae = Math.min(V, we);
      let ye;
      for (ye = 0; ye < ae; ye++) {
        const Te = O[ye] = ie ? si(O[ye]) : En(O[ye]);
        C(I[ye], Te, L, null, q, K, se, X, ie);
      }
      V > we ? Ft(I, q, K, true, false, ae) : fe(O, L, J, q, K, se, X, ie, ae);
    }, ji = (I, O, L, J, q, K, se, X, ie) => {
      let V = 0;
      const we = O.length;
      let ae = I.length - 1, ye = we - 1;
      for (; V <= ae && V <= ye; ) {
        const Te = I[V], ke = O[V] = ie ? si(O[V]) : En(O[V]);
        if (ai(Te, ke)) C(Te, ke, L, null, q, K, se, X, ie);
        else break;
        V++;
      }
      for (; V <= ae && V <= ye; ) {
        const Te = I[ae], ke = O[ye] = ie ? si(O[ye]) : En(O[ye]);
        if (ai(Te, ke)) C(Te, ke, L, null, q, K, se, X, ie);
        else break;
        ae--, ye--;
      }
      if (V > ae) {
        if (V <= ye) {
          const Te = ye + 1, ke = Te < we ? O[Te].el : J;
          for (; V <= ye; ) C(null, O[V] = ie ? si(O[V]) : En(O[V]), L, ke, q, K, se, X, ie), V++;
        }
      } else if (V > ye) for (; V <= ae; ) ve(I[V], q, K, true), V++;
      else {
        const Te = V, ke = V, je = /* @__PURE__ */ new Map();
        for (V = ke; V <= ye; V++) {
          const Pt = O[V] = ie ? si(O[V]) : En(O[V]);
          Pt.key != null && je.set(Pt.key, V);
        }
        let Ue, Tt = 0;
        const St = ye - ke + 1;
        let Xt = false, Qt = 0;
        const bi = new Array(St);
        for (V = 0; V < St; V++) bi[V] = 0;
        for (V = Te; V <= ae; V++) {
          const Pt = I[V];
          if (Tt >= St) {
            ve(Pt, q, K, true);
            continue;
          }
          let en;
          if (Pt.key != null) en = je.get(Pt.key);
          else for (Ue = ke; Ue <= ye; Ue++) if (bi[Ue - ke] === 0 && ai(Pt, O[Ue])) {
            en = Ue;
            break;
          }
          en === void 0 ? ve(Pt, q, K, true) : (bi[en - ke] = V + 1, en >= Qt ? Qt = en : Xt = true, C(Pt, O[en], L, null, q, K, se, X, ie), Tt++);
        }
        const hr = Xt ? gp(bi) : Vi;
        for (Ue = hr.length - 1, V = St - 1; V >= 0; V--) {
          const Pt = ke + V, en = O[Pt], ro = O[Pt + 1], oo = Pt + 1 < we ? ro.el || ro.placeholder : J;
          bi[V] === 0 ? C(null, en, L, oo, q, K, se, X, ie) : Xt && (Ue < 0 || V !== hr[Ue] ? On(en, L, oo, 2) : Ue--);
        }
      }
    }, On = (I, O, L, J, q = null) => {
      const { el: K, type: se, transition: X, children: ie, shapeFlag: V } = I;
      if (V & 6) {
        On(I.component.subTree, O, L, J);
        return;
      }
      if (V & 128) {
        I.suspense.move(O, L, J);
        return;
      }
      if (V & 64) {
        se.move(I, O, L, yi);
        return;
      }
      if (se === Rt) {
        i(K, O, L);
        for (let ae = 0; ae < ie.length; ae++) On(ie[ae], O, L, J);
        i(I.anchor, O, L);
        return;
      }
      if (se === Dr) {
        Y(I, O, L);
        return;
      }
      if (J !== 2 && V & 1 && X) if (J === 0) X.beforeEnter(K), i(K, O, L), wt(() => X.enter(K), q);
      else {
        const { leave: ae, delayLeave: ye, afterLeave: Te } = X, ke = () => {
          I.ctx.isUnmounted ? l(K) : i(K, O, L);
        }, je = () => {
          K._isLeaving && K[Ln](true), ae(K, () => {
            ke(), Te && Te();
          });
        };
        ye ? ye(K, ke, je) : je();
      }
      else i(K, O, L);
    }, ve = (I, O, L, J = false, q = false) => {
      const { type: K, props: se, ref: X, children: ie, dynamicChildren: V, shapeFlag: we, patchFlag: ae, dirs: ye, cacheIndex: Te } = I;
      if (ae === -2 && (q = false), X != null && (Bn(), Cr(X, null, L, I, true), zn()), Te != null && (O.renderCache[Te] = void 0), we & 256) {
        O.ctx.deactivate(I);
        return;
      }
      const ke = we & 1 && ye, je = !ki(I);
      let Ue;
      if (je && (Ue = se && se.onVnodeBeforeUnmount) && nn(Ue, O, I), we & 6) oe(I.component, L, J);
      else {
        if (we & 128) {
          I.suspense.unmount(L, J);
          return;
        }
        ke && vi(I, null, O, "beforeUnmount"), we & 64 ? I.type.remove(I, O, L, yi, J) : V && !V.hasOnce && (K !== Rt || ae > 0 && ae & 64) ? Ft(V, O, L, false, true) : (K === Rt && ae & 384 || !q && we & 16) && Ft(ie, O, L), J && fr(I);
      }
      (je && (Ue = se && se.onVnodeUnmounted) || ke) && wt(() => {
        Ue && nn(Ue, O, I), ke && vi(I, null, O, "unmounted");
      }, L);
    }, fr = (I) => {
      const { type: O, el: L, anchor: J, transition: q } = I;
      if (O === Rt) {
        Cs(L, J);
        return;
      }
      if (O === Dr) {
        U(I);
        return;
      }
      const K = () => {
        l(L), q && !q.persisted && q.afterLeave && q.afterLeave();
      };
      if (I.shapeFlag & 1 && q && !q.persisted) {
        const { leave: se, delayLeave: X } = q, ie = () => se(L, K);
        X ? X(I.el, K, ie) : ie();
      } else K();
    }, Cs = (I, O) => {
      let L;
      for (; I !== O; ) L = N(I), l(I), I = L;
      l(O);
    }, oe = (I, O, L) => {
      const { bum: J, scope: q, job: K, subTree: se, um: X, m: ie, a: V } = I;
      Go(ie), Go(V), J && Rr(J), q.stop(), K && (K.flags |= 8, ve(se, I, O, L)), X && wt(X, O), wt(() => {
        I.isUnmounted = true;
      }, O);
    }, Ft = (I, O, L, J = false, q = false, K = 0) => {
      for (let se = K; se < I.length; se++) ve(I[se], O, L, J, q);
    }, An = (I) => {
      if (I.shapeFlag & 6) return An(I.component.subTree);
      if (I.shapeFlag & 128) return I.suspense.next();
      const O = N(I.anchor || I.el), L = O && O[Uu];
      return L ? N(L) : O;
    };
    let $t = false;
    const io = (I, O, L) => {
      I == null ? O._vnode && ve(O._vnode, null, null, true) : C(O._vnode || null, I, O, null, null, null, L), O._vnode = I, $t || ($t = true, wl(), xu(), $t = false);
    }, yi = {
      p: C,
      um: ve,
      m: On,
      r: fr,
      mt: ft,
      mc: fe,
      pc: Ve,
      pbc: me,
      n: An,
      o: e
    };
    return {
      render: io,
      hydrate: void 0,
      createApp: qd(io)
    };
  }
  function Ws({ type: e, props: t }, n) {
    return n === "svg" && e === "foreignObject" || n === "mathml" && e === "annotation-xml" && t && t.encoding && t.encoding.includes("html") ? void 0 : n;
  }
  function Ei({ effect: e, job: t }, n) {
    n ? (e.flags |= 32, t.flags |= 4) : (e.flags &= -33, t.flags &= -5);
  }
  function pp(e, t) {
    return (!e || e && !e.pendingBranch) && t && !t.persisted;
  }
  function Qa(e, t, n = false) {
    const i = e.children, l = t.children;
    if (Ie(i) && Ie(l)) for (let c = 0; c < i.length; c++) {
      const f = i[c];
      let h = l[c];
      h.shapeFlag & 1 && !h.dynamicChildren && ((h.patchFlag <= 0 || h.patchFlag === 32) && (h = l[c] = si(l[c]), h.el = f.el), !n && h.patchFlag !== -2 && Qa(f, h)), h.type === bs && h.patchFlag !== -1 && (h.el = f.el), h.type === Et && !h.el && (h.el = f.el);
    }
  }
  function gp(e) {
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
  let Dr, xr;
  Rt = /* @__PURE__ */ Symbol.for("v-fgt");
  bs = /* @__PURE__ */ Symbol.for("v-txt");
  Et = /* @__PURE__ */ Symbol.for("v-cmt");
  Dr = /* @__PURE__ */ Symbol.for("v-stc");
  xr = [];
  let Kt = null;
  rn = function(e = false) {
    xr.push(Kt = e ? null : []);
  };
  function wp() {
    xr.pop(), Kt = xr[xr.length - 1] || null;
  }
  let Vr = 1;
  function Bo(e, t = false) {
    Vr += e, e < 0 && Kt && t && (Kt.hasOnce = true);
  }
  function gf(e) {
    return e.dynamicChildren = Vr > 0 ? Kt || Vi : null, wp(), Vr > 0 && Kt && Kt.push(e), e;
  }
  Nn = function(e, t, n, i, l, c) {
    return gf(We(e, t, n, i, l, c, true));
  };
  ma = function(e, t, n, i, l) {
    return gf(Nt(e, t, n, i, l, true));
  };
  Xi = function(e) {
    return e ? e.__v_isVNode === true : false;
  };
  function ai(e, t) {
    return e.type === t.type && e.key === t.key;
  }
  const mf = ({ key: e }) => e ?? null, So = ({ ref: e, ref_key: t, ref_for: n }) => (typeof e == "number" && (e = "" + e), e != null ? st(e) || at(e) || _e(e) ? {
    i: It,
    r: e,
    k: t,
    f: !!n
  } : e : null);
  We = function(e, t = null, n = null, i = 0, l = null, c = e === Rt ? 0 : 1, f = false, h = false) {
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
      patchFlag: i,
      dynamicProps: l,
      dynamicChildren: null,
      appContext: null,
      ctx: It
    };
    return h ? (el(p, n), c & 128 && e.normalize(p)) : n && (p.shapeFlag |= st(n) ? 8 : 16), Vr > 0 && !f && Kt && (p.patchFlag > 0 || c & 6) && p.patchFlag !== 32 && Kt.push(p), p;
  };
  Nt = yp;
  function yp(e, t = null, n = null, i = 0, l = null, c = false) {
    if ((!e || e === Zu) && (e = Et), Xi(e)) {
      const h = Vn(e, t, true);
      return n && el(h, n), Vr > 0 && !c && Kt && (h.shapeFlag & 6 ? Kt[Kt.indexOf(e)] = h : Kt.push(h)), h.patchFlag = -2, h;
    }
    if (Mp(e) && (e = e.__vccOpts), t) {
      t = bp(t);
      let { class: h, style: p } = t;
      h && !st(h) && (t.class = Ua(h)), Ke(p) && (ds(p) && !Ie(p) && (p = dt({}, p)), t.style = cs(p));
    }
    const f = st(e) ? 1 : Wo(e) ? 128 : Gu(e) ? 64 : Ke(e) ? 4 : _e(e) ? 2 : 0;
    return We(e, t, n, i, l, f, c, true);
  }
  function bp(e) {
    return e ? ds(e) || lf(e) ? dt({}, e) : e : null;
  }
  Vn = function(e, t, n = false, i = false) {
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
    return p && i && hi(g, p.clone(g)), g;
  };
  vp = function(e = " ", t = 0) {
    return Nt(bs, null, e, t);
  };
  av = function(e, t) {
    const n = Nt(Dr, null, e);
    return n.staticCount = t, n;
  };
  po = function(e = "", t = false) {
    return t ? (rn(), ma(Et, null, e)) : Nt(Et, null, e);
  };
  function En(e) {
    return e == null || typeof e == "boolean" ? Nt(Et) : Ie(e) ? Nt(Rt, null, e.slice()) : Xi(e) ? si(e) : Nt(bs, null, String(e));
  }
  function si(e) {
    return e.el === null && e.patchFlag !== -1 || e.memo ? e : Vn(e);
  }
  function el(e, t) {
    let n = 0;
    const { shapeFlag: i } = e;
    if (t == null) t = null;
    else if (Ie(t)) n = 16;
    else if (typeof t == "object") if (i & 65) {
      const l = t.default;
      l && (l._c && (l._d = false), el(e, l()), l._c && (l._d = true));
      return;
    } else {
      n = 32;
      const l = t._;
      !l && !lf(t) ? t._ctx = It : l === 3 && It && (It.slots._ === 1 ? t._ = 1 : (t._ = 2, e.patchFlag |= 1024));
    }
    else _e(t) ? (t = {
      default: t,
      _ctx: It
    }, n = 32) : (t = String(t), i & 64 ? (n = 16, t = [
      vp(t)
    ]) : n = 8);
    e.children = t, e.shapeFlag |= n;
  }
  Ep = function(...e) {
    const t = {};
    for (let n = 0; n < e.length; n++) {
      const i = e[n];
      for (const l in i) if (l === "class") t.class !== i.class && (t.class = Ua([
        t.class,
        i.class
      ]));
      else if (l === "style") t.style = cs([
        t.style,
        i.style
      ]);
      else if (rs(l)) {
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
  const Ip = tf();
  let Tp = 0;
  function Sp(e, t, n) {
    const i = e.type, l = (t ? t.appContext : e.appContext) || Ip, c = {
      uid: Tp++,
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
      propsOptions: uf(i, l),
      emitsOptions: of(i, l),
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
    }, c.root = t ? t.root : c, c.emit = ep.bind(null, c), e.ce && e.ce(c), c;
  }
  let Mt = null;
  pi = () => Mt || It;
  let zo, wa;
  {
    const e = ls(), t = (n, i) => {
      let l;
      return (l = e[n]) || (l = e[n] = []), l.push(i), (c) => {
        l.length > 1 ? l.forEach((f) => f(c)) : l[0](c);
      };
    };
    zo = t("__VUE_INSTANCE_SETTERS__", (n) => Mt = n), wa = t("__VUE_SSR_SETTERS__", (n) => Hr = n);
  }
  const eo = (e) => {
    const t = Mt;
    return zo(e), e.scope.on(), () => {
      e.scope.off(), zo(t);
    };
  }, Nl = () => {
    Mt && Mt.scope.off(), zo(null);
  };
  function wf(e) {
    return e.vnode.shapeFlag & 4;
  }
  let Hr = false;
  function _p(e, t = false, n = false) {
    t && wa(t);
    const { props: i, children: l } = e.vnode, c = wf(e);
    sp(e, i, c, t), up(e, l, n || t);
    const f = c ? Op(e, t) : void 0;
    return t && wa(false), f;
  }
  function Op(e, t) {
    const n = e.type;
    e.accessCache = /* @__PURE__ */ Object.create(null), e.proxy = new Proxy(e.ctx, Gd);
    const { setup: i } = n;
    if (i) {
      Bn();
      const l = e.setupContext = i.length > 1 ? Rp(e) : null, c = eo(e), f = Xr(i, e, 0, [
        e.props,
        l
      ]), h = ou(f);
      if (zn(), c(), (h || e.sp) && !ki(e) && Ku(e), h) {
        if (f.then(Nl, Nl), t) return f.then((p) => {
          Pl(e, p);
        }).catch((p) => {
          ps(p, e, 0);
        });
        e.asyncDep = f;
      } else Pl(e, f);
    } else yf(e);
  }
  function Pl(e, t, n) {
    _e(t) ? e.type.__ssrInlineRender ? e.ssrRender = t : e.render = t : Ke(t) && (e.setupState = Nu(t)), yf(e);
  }
  function yf(e, t, n) {
    const i = e.type;
    e.render || (e.render = i.render || fn);
    {
      const l = eo(e);
      Bn();
      try {
        Wd(e);
      } finally {
        zn(), l();
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
    return e.exposed ? e.exposeProxy || (e.exposeProxy = new Proxy(Nu(Va(e.exposed)), {
      get(t, n) {
        if (n in t) return t[n];
        if (n in kr) return kr[n](e);
      },
      has(t, n) {
        return n in t || n in kr;
      }
    })) : e.proxy;
  }
  function ya(e, t = true) {
    return _e(e) ? e.displayName || e.name : e.name || t && e.__name;
  }
  function Mp(e) {
    return _e(e) && "__vccOpts" in e;
  }
  tl = (e, t) => yd(e, t, Hr);
  Np = function(e, t, n) {
    try {
      Bo(-1);
      const i = arguments.length;
      return i === 2 ? Ke(t) && !Ie(t) ? Xi(t) ? Nt(e, null, [
        t
      ]) : Nt(e, t) : Nt(e, null, t) : (i > 3 ? n = Array.prototype.slice.call(arguments, 2) : i === 3 && Xi(n) && (n = [
        n
      ]), Nt(e, t, n));
    } finally {
      Bo(1);
    }
  };
  const Pp = "3.5.25";
  let ba;
  const Cl = typeof window < "u" && window.trustedTypes;
  if (Cl) try {
    ba = Cl.createPolicy("vue", {
      createHTML: (e) => e
    });
  } catch {
  }
  let bf, Cp, kp, kn, kl, Lp, Zn, pr, Qi, vf, Ef, Dp, Ii, Ll;
  bf = ba ? (e) => ba.createHTML(e) : (e) => e;
  Cp = "http://www.w3.org/2000/svg";
  kp = "http://www.w3.org/1998/Math/MathML";
  kn = typeof document < "u" ? document : null;
  kl = kn && kn.createElement("template");
  Lp = {
    insert: (e, t, n) => {
      t.insertBefore(e, n || null);
    },
    remove: (e) => {
      const t = e.parentNode;
      t && t.removeChild(e);
    },
    createElement: (e, t, n, i) => {
      const l = t === "svg" ? kn.createElementNS(Cp, e) : t === "mathml" ? kn.createElementNS(kp, e) : n ? kn.createElement(e, {
        is: n
      }) : kn.createElement(e);
      return e === "select" && i && i.multiple != null && l.setAttribute("multiple", i.multiple), l;
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
    insertStaticContent(e, t, n, i, l, c) {
      const f = n ? n.previousSibling : t.lastChild;
      if (l && (l === c || l.nextSibling)) for (; t.insertBefore(l.cloneNode(true), n), !(l === c || !(l = l.nextSibling)); ) ;
      else {
        kl.innerHTML = bf(i === "svg" ? `<svg>${e}</svg>` : i === "mathml" ? `<math>${e}</math>` : e);
        const h = kl.content;
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
  pr = "animation";
  Qi = /* @__PURE__ */ Symbol("_vtc");
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
  Ef = dt({}, $u, vf);
  Dp = (e) => (e.displayName = "Transition", e.props = Ef, e);
  lv = Dp((e, { slots: t }) => Np(Od, If(e), t));
  Ii = (e, t = []) => {
    Ie(e) ? e.forEach((n) => n(...t)) : e && e(...t);
  };
  Ll = (e) => e ? Ie(e) ? e.some((t) => t.length > 1) : e.length > 1 : false;
  function If(e) {
    const t = {};
    for (const de in e) de in vf || (t[de] = e[de]);
    if (e.css === false) return t;
    const { name: n = "v", type: i, duration: l, enterFromClass: c = `${n}-enter-from`, enterActiveClass: f = `${n}-enter-active`, enterToClass: h = `${n}-enter-to`, appearFromClass: p = c, appearActiveClass: v = f, appearToClass: g = h, leaveFromClass: T = `${n}-leave-from`, leaveActiveClass: N = `${n}-leave-active`, leaveToClass: R = `${n}-leave-to` } = e, F = xp(l), C = F && F[0], he = F && F[1], { onBeforeEnter: ne, onEnter: H, onEnterCancelled: Y, onLeave: U, onLeaveCancelled: ue, onBeforeAppear: ge = ne, onAppear: re = H, onAppearCancelled: fe = Y } = t, te = (de, Ge, ft, zt) => {
      de._enterCancelled = zt, ti(de, Ge ? g : h), ti(de, Ge ? v : f), ft && ft();
    }, me = (de, Ge) => {
      de._isLeaving = false, ti(de, T), ti(de, R), ti(de, N), Ge && Ge();
    }, Re = (de) => (Ge, ft) => {
      const zt = de ? re : H, Ye = () => te(Ge, de, ft);
      Ii(zt, [
        Ge,
        Ye
      ]), Dl(() => {
        ti(Ge, de ? p : c), wn(Ge, de ? g : h), Ll(zt) || xl(Ge, i, C, Ye);
      });
    };
    return dt(t, {
      onBeforeEnter(de) {
        Ii(ne, [
          de
        ]), wn(de, c), wn(de, f);
      },
      onBeforeAppear(de) {
        Ii(ge, [
          de
        ]), wn(de, p), wn(de, v);
      },
      onEnter: Re(false),
      onAppear: Re(true),
      onLeave(de, Ge) {
        de._isLeaving = true;
        const ft = () => me(de, Ge);
        wn(de, T), de._enterCancelled ? (wn(de, N), va(de)) : (va(de), wn(de, N)), Dl(() => {
          de._isLeaving && (ti(de, T), wn(de, R), Ll(U) || xl(de, i, he, ft));
        }), Ii(U, [
          de,
          ft
        ]);
      },
      onEnterCancelled(de) {
        te(de, false, void 0, true), Ii(Y, [
          de
        ]);
      },
      onAppearCancelled(de) {
        te(de, true, void 0, true), Ii(fe, [
          de
        ]);
      },
      onLeaveCancelled(de) {
        me(de), Ii(ue, [
          de
        ]);
      }
    });
  }
  function xp(e) {
    if (e == null) return null;
    if (Ke(e)) return [
      Bs(e.enter),
      Bs(e.leave)
    ];
    {
      const t = Bs(e);
      return [
        t,
        t
      ];
    }
  }
  function Bs(e) {
    return Lh(e);
  }
  function wn(e, t) {
    t.split(/\s+/).forEach((n) => n && e.classList.add(n)), (e[Qi] || (e[Qi] = /* @__PURE__ */ new Set())).add(t);
  }
  function ti(e, t) {
    t.split(/\s+/).forEach((i) => i && e.classList.remove(i));
    const n = e[Qi];
    n && (n.delete(t), n.size || (e[Qi] = void 0));
  }
  function Dl(e) {
    requestAnimationFrame(() => {
      requestAnimationFrame(e);
    });
  }
  let Fp = 0;
  function xl(e, t, n, i) {
    const l = e._endId = ++Fp, c = () => {
      l === e._endId && i();
    };
    if (n != null) return setTimeout(c, n);
    const { type: f, timeout: h, propCount: p } = Tf(e, t);
    if (!f) return i();
    const v = f + "end";
    let g = 0;
    const T = () => {
      e.removeEventListener(v, N), c();
    }, N = (R) => {
      R.target === e && ++g >= p && T();
    };
    setTimeout(() => {
      g < p && T();
    }, h + 1), e.addEventListener(v, N);
  }
  function Tf(e, t) {
    const n = window.getComputedStyle(e), i = (F) => (n[F] || "").split(", "), l = i(`${Zn}Delay`), c = i(`${Zn}Duration`), f = Fl(l, c), h = i(`${pr}Delay`), p = i(`${pr}Duration`), v = Fl(h, p);
    let g = null, T = 0, N = 0;
    t === Zn ? f > 0 && (g = Zn, T = f, N = c.length) : t === pr ? v > 0 && (g = pr, T = v, N = p.length) : (T = Math.max(f, v), g = T > 0 ? f > v ? Zn : pr : null, N = g ? g === Zn ? c.length : p.length : 0);
    const R = g === Zn && /\b(?:transform|all)(?:,|$)/.test(i(`${Zn}Property`).toString());
    return {
      type: g,
      timeout: T,
      propCount: N,
      hasTransform: R
    };
  }
  function Fl(e, t) {
    for (; e.length < t.length; ) e = e.concat(e);
    return Math.max(...t.map((n, i) => jl(n) + jl(e[i])));
  }
  function jl(e) {
    return e === "auto" ? 0 : Number(e.slice(0, -1).replace(",", ".")) * 1e3;
  }
  function va(e) {
    return (e ? e.ownerDocument : document).body.offsetHeight;
  }
  function jp(e, t, n) {
    const i = e[Qi];
    i && (t = (t ? [
      t,
      ...i
    ] : [
      ...i
    ]).join(" ")), t == null ? e.removeAttribute("class") : n ? e.setAttribute("class", t) : e.className = t;
  }
  let $o, Sf;
  $o = /* @__PURE__ */ Symbol("_vod");
  Sf = /* @__PURE__ */ Symbol("_vsh");
  cv = {
    name: "show",
    beforeMount(e, { value: t }, { transition: n }) {
      e[$o] = e.style.display === "none" ? "" : e.style.display, n && t ? n.beforeEnter(e) : gr(e, t);
    },
    mounted(e, { value: t }, { transition: n }) {
      n && t && n.enter(e);
    },
    updated(e, { value: t, oldValue: n }, { transition: i }) {
      !t != !n && (i ? t ? (i.beforeEnter(e), gr(e, true), i.enter(e)) : i.leave(e, () => {
        gr(e, false);
      }) : gr(e, t));
    },
    beforeUnmount(e, { value: t }) {
      gr(e, t);
    }
  };
  function gr(e, t) {
    e.style.display = t ? e[$o] : "none", e[Sf] = !t;
  }
  const _f = /* @__PURE__ */ Symbol("");
  uv = function(e) {
    const t = pi();
    if (!t) return;
    const n = t.ut = (l = e(t.proxy)) => {
      Array.from(document.querySelectorAll(`[data-v-owner="${t.uid}"]`)).forEach((c) => Vo(c, l));
    }, i = () => {
      const l = e(t.proxy);
      t.ce ? Vo(t.ce, l) : Ea(t.subTree, l), n(l);
    };
    Ju(() => {
      Du(i);
    }), Qr(() => {
      Yi(i, fn, {
        flush: "post"
      });
      const l = new MutationObserver(i);
      l.observe(t.subTree.el.parentNode, {
        childList: true
      }), Ja(() => l.disconnect());
    });
  };
  function Ea(e, t) {
    if (e.shapeFlag & 128) {
      const n = e.suspense;
      e = n.activeBranch, n.pendingBranch && !n.isHydrating && n.effects.push(() => {
        Ea(n.activeBranch, t);
      });
    }
    for (; e.component; ) e = e.component.subTree;
    if (e.shapeFlag & 1 && e.el) Vo(e.el, t);
    else if (e.type === Rt) e.children.forEach((n) => Ea(n, t));
    else if (e.type === Dr) {
      let { el: n, anchor: i } = e;
      for (; n && (Vo(n, t), n !== i); ) n = n.nextSibling;
    }
  }
  function Vo(e, t) {
    if (e.nodeType === 1) {
      const n = e.style;
      let i = "";
      for (const l in t) {
        const c = Wh(t[l]);
        n.setProperty(`--${l}`, c), i += `--${l}: ${c};`;
      }
      n[_f] = i;
    }
  }
  const Up = /(?:^|;)\s*display\s*:/;
  function Gp(e, t, n) {
    const i = e.style, l = st(n);
    let c = false;
    if (n && !l) {
      if (t) if (st(t)) for (const f of t.split(";")) {
        const h = f.slice(0, f.indexOf(":")).trim();
        n[h] == null && _o(i, h, "");
      }
      else for (const f in t) n[f] == null && _o(i, f, "");
      for (const f in n) f === "display" && (c = true), _o(i, f, n[f]);
    } else if (l) {
      if (t !== n) {
        const f = i[_f];
        f && (n += ";" + f), i.cssText = n, c = Up.test(n);
      }
    } else t && e.removeAttribute("style");
    $o in e && (e[$o] = c ? i.display : "", e[Sf] && (i.display = "none"));
  }
  const Ul = /\s*!important$/;
  function _o(e, t, n) {
    if (Ie(n)) n.forEach((i) => _o(e, t, i));
    else if (n == null && (n = ""), t.startsWith("--")) e.setProperty(t, n);
    else {
      const i = Wp(e, t);
      Ul.test(n) ? e.setProperty(Kn(i), n.replace(Ul, ""), "important") : e[i] = n;
    }
  }
  const Gl = [
    "Webkit",
    "Moz",
    "ms"
  ], zs = {};
  function Wp(e, t) {
    const n = zs[t];
    if (n) return n;
    let i = Zt(t);
    if (i !== "filter" && i in e) return zs[t] = i;
    i = as(i);
    for (let l = 0; l < Gl.length; l++) {
      const c = Gl[l] + i;
      if (c in e) return zs[t] = c;
    }
    return t;
  }
  const Wl = "http://www.w3.org/1999/xlink";
  function Bl(e, t, n, i, l, c = Gh(t)) {
    i && t.startsWith("xlink:") ? n == null ? e.removeAttributeNS(Wl, t.slice(6, t.length)) : e.setAttributeNS(Wl, t, n) : n == null || c && !cu(n) ? e.removeAttribute(t) : e.setAttribute(t, c ? "" : qn(n) ? String(n) : n);
  }
  function zl(e, t, n, i, l) {
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
  function Bp(e, t, n, i) {
    e.addEventListener(t, n, i);
  }
  function zp(e, t, n, i) {
    e.removeEventListener(t, n, i);
  }
  const $l = /* @__PURE__ */ Symbol("_vei");
  function $p(e, t, n, i, l = null) {
    const c = e[$l] || (e[$l] = {}), f = c[t];
    if (i && f) f.value = i;
    else {
      const [h, p] = Vp(t);
      if (i) {
        const v = c[t] = Kp(i, l);
        Bp(e, h, v, p);
      } else f && (zp(e, h, f, p), c[t] = void 0);
    }
  }
  const Vl = /(?:Once|Passive|Capture)$/;
  function Vp(e) {
    let t;
    if (Vl.test(e)) {
      t = {};
      let i;
      for (; i = e.match(Vl); ) e = e.slice(0, e.length - i[0].length), t[i[0].toLowerCase()] = true;
    }
    return [
      e[2] === ":" ? e.slice(3) : Kn(e.slice(2)),
      t
    ];
  }
  let $s = 0;
  const Hp = Promise.resolve(), qp = () => $s || (Hp.then(() => $s = 0), $s = Date.now());
  function Kp(e, t) {
    const n = (i) => {
      if (!i._vts) i._vts = Date.now();
      else if (i._vts <= n.attached) return;
      pn(Yp(i, n.value), t, 5, [
        i
      ]);
    };
    return n.value = e, n.attached = qp(), n;
  }
  function Yp(e, t) {
    if (Ie(t)) {
      const n = e.stopImmediatePropagation;
      return e.stopImmediatePropagation = () => {
        n.call(e), e._stopped = true;
      }, t.map((i) => (l) => !l._stopped && i && i(l));
    } else return t;
  }
  const Hl = (e) => e.charCodeAt(0) === 111 && e.charCodeAt(1) === 110 && e.charCodeAt(2) > 96 && e.charCodeAt(2) < 123, Jp = (e, t, n, i, l, c) => {
    const f = l === "svg";
    t === "class" ? jp(e, i, f) : t === "style" ? Gp(e, n, i) : rs(t) ? Fa(t) || $p(e, t, n, i, c) : (t[0] === "." ? (t = t.slice(1), true) : t[0] === "^" ? (t = t.slice(1), false) : Zp(e, t, i, f)) ? (zl(e, t, i), !e.tagName.includes("-") && (t === "value" || t === "checked" || t === "selected") && Bl(e, t, i, f, c, t !== "value")) : e._isVueCE && (/[A-Z]/.test(t) || !st(i)) ? zl(e, Zt(t), i, c, t) : (t === "true-value" ? e._trueValue = i : t === "false-value" && (e._falseValue = i), Bl(e, t, i, f));
  };
  function Zp(e, t, n, i) {
    if (i) return !!(t === "innerHTML" || t === "textContent" || t in e && Hl(t) && _e(n));
    if (t === "spellcheck" || t === "draggable" || t === "translate" || t === "autocorrect" || t === "sandbox" && e.tagName === "IFRAME" || t === "form" || t === "list" && e.tagName === "INPUT" || t === "type" && e.tagName === "TEXTAREA") return false;
    if (t === "width" || t === "height") {
      const l = e.tagName;
      if (l === "IMG" || l === "VIDEO" || l === "CANVAS" || l === "SOURCE") return false;
    }
    return Hl(t) && st(n) ? false : t in e;
  }
  let Of, Af, Ho, ql, Xp, Qp;
  Of = /* @__PURE__ */ new WeakMap();
  Af = /* @__PURE__ */ new WeakMap();
  Ho = /* @__PURE__ */ Symbol("_moveCb");
  ql = /* @__PURE__ */ Symbol("_enterCb");
  Xp = (e) => (delete e.props.mode, e);
  Qp = Xp({
    name: "TransitionGroup",
    props: dt({}, Ef, {
      tag: String,
      moveClass: String
    }),
    setup(e, { slots: t }) {
      const n = pi(), i = zu();
      let l, c;
      return Ka(() => {
        if (!l.length) return;
        const f = e.moveClass || `${e.name || "v"}-move`;
        if (!ig(l[0].el, n.vnode.el, f)) {
          l = [];
          return;
        }
        l.forEach(eg), l.forEach(tg);
        const h = l.filter(ng);
        va(n.vnode.el), h.forEach((p) => {
          const v = p.el, g = v.style;
          wn(v, f), g.transform = g.webkitTransform = g.transitionDuration = "";
          const T = v[Ho] = (N) => {
            N && N.target !== v || (!N || N.propertyName.endsWith("transform")) && (v.removeEventListener("transitionend", T), v[Ho] = null, ti(v, f));
          };
          v.addEventListener("transitionend", T);
        }), l = [];
      }), () => {
        const f = De(e), h = If(f);
        let p = f.tag || Rt;
        if (l = [], c) for (let v = 0; v < c.length; v++) {
          const g = c[v];
          g.el && g.el instanceof Element && (l.push(g), hi(g, $r(g, h, i, n)), Of.set(g, {
            left: g.el.offsetLeft,
            top: g.el.offsetTop
          }));
        }
        c = t.default ? qa(t.default()) : [];
        for (let v = 0; v < c.length; v++) {
          const g = c[v];
          g.key != null && hi(g, $r(g, h, i, n));
        }
        return Nt(p, null, c);
      };
    }
  });
  fv = Qp;
  function eg(e) {
    const t = e.el;
    t[Ho] && t[Ho](), t[ql] && t[ql]();
  }
  function tg(e) {
    Af.set(e, {
      left: e.el.offsetLeft,
      top: e.el.offsetTop
    });
  }
  function ng(e) {
    const t = Of.get(e), n = Af.get(e), i = t.left - n.left, l = t.top - n.top;
    if (i || l) {
      const c = e.el.style;
      return c.transform = c.webkitTransform = `translate(${i}px,${l}px)`, c.transitionDuration = "0s", e;
    }
  }
  function ig(e, t, n) {
    const i = e.cloneNode(), l = e[Qi];
    l && l.forEach((h) => {
      h.split(/\s+/).forEach((p) => p && i.classList.remove(p));
    }), n.split(/\s+/).forEach((h) => h && i.classList.add(h)), i.style.display = "none";
    const c = t.nodeType === 1 ? t : t.parentNode;
    c.appendChild(i);
    const { hasTransform: f } = Tf(i);
    return c.removeChild(i), f;
  }
  let rg, og, sg, ag;
  rg = [
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
    exact: (e, t) => rg.some((n) => e[`${n}Key`] && !t.includes(n))
  };
  hv = (e, t) => {
    const n = e._withMods || (e._withMods = {}), i = t.join(".");
    return n[i] || (n[i] = ((l, ...c) => {
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
    const n = e._withKeys || (e._withKeys = {}), i = t.join(".");
    return n[i] || (n[i] = ((l) => {
      if (!("key" in l)) return;
      const c = Kn(l.key);
      if (t.some((f) => f === c || sg[f] === c)) return e(l);
    }));
  };
  ag = dt({
    patchProp: Jp
  }, Lp);
  let Kl;
  function lg() {
    return Kl || (Kl = hp(ag));
  }
  const Rf = ((...e) => {
    const t = lg().createApp(...e), { mount: n } = t;
    return t.mount = (i) => {
      const l = ug(i);
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
    return st(e) ? document.querySelector(e) : e;
  }
  const fg = "" + new URL("../favicon.svg", import.meta.url).href;
  let Mf, hg, Nf, dg, pg, mr;
  Mf = typeof global == "object" && global && global.Object === Object && global;
  hg = typeof self == "object" && self && self.Object === Object && self;
  Sn = Mf || hg || Function("return this")();
  er = Sn.Symbol;
  Nf = Object.prototype;
  dg = Nf.hasOwnProperty;
  pg = Nf.toString;
  mr = er ? er.toStringTag : void 0;
  function gg(e) {
    var t = dg.call(e, mr), n = e[mr];
    try {
      e[mr] = void 0;
      var i = true;
    } catch {
    }
    var l = pg.call(e);
    return i && (t ? e[mr] = n : delete e[mr]), l;
  }
  var mg = Object.prototype, wg = mg.toString;
  function yg(e) {
    return wg.call(e);
  }
  var bg = "[object Null]", vg = "[object Undefined]", Yl = er ? er.toStringTag : void 0;
  gi = function(e) {
    return e == null ? e === void 0 ? vg : bg : Yl && Yl in Object(e) ? gg(e) : yg(e);
  };
  mi = function(e) {
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
    var t = gi(e);
    return t == Ig || t == Tg || t == Eg || t == Sg;
  };
  var Vs = Sn["__core-js_shared__"], Jl = (function() {
    var e = /[^.]+$/.exec(Vs && Vs.keys && Vs.keys.IE_PROTO || "");
    return e ? "Symbol(src)_1." + e : "";
  })();
  function _g(e) {
    return !!Jl && Jl in e;
  }
  var Og = Function.prototype, Ag = Og.toString;
  function xi(e) {
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
    return t.test(xi(e));
  }
  function xg(e, t) {
    return e == null ? void 0 : e[t];
  }
  function Fi(e, t) {
    var n = xg(e, t);
    return Dg(n) ? n : void 0;
  }
  let Ia, Zl, Fg;
  Ia = Fi(Sn, "WeakMap");
  Zl = Object.create;
  Fg = /* @__PURE__ */ (function() {
    function e() {
    }
    return function(t) {
      if (!Is(t)) return {};
      if (Zl) return Zl(t);
      e.prototype = t;
      var n = new e();
      return e.prototype = void 0, n;
    };
  })();
  Xl = (function() {
    try {
      var e = Fi(Object, "defineProperty");
      return e({}, "", {}), e;
    } catch {
    }
  })();
  function jg(e, t) {
    for (var n = -1, i = e == null ? 0 : e.length; ++n < i && t(e[n], n, e) !== false; ) ;
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
  var zg = Object.prototype, $g = zg.hasOwnProperty;
  Vg = function(e, t, n) {
    var i = e[t];
    (!($g.call(e, t) && Cf(i, n)) || n === void 0 && !(t in e)) && Bg(e, t, n);
  };
  var Hg = 9007199254740991;
  kf = function(e) {
    return typeof e == "number" && e > -1 && e % 1 == 0 && e <= Hg;
  };
  qg = function(e) {
    return e != null && kf(e.length) && !Pf(e);
  };
  var Kg = Object.prototype;
  Lf = function(e) {
    var t = e && e.constructor, n = typeof t == "function" && t.prototype || Kg;
    return e === n;
  };
  function Yg(e, t) {
    for (var n = -1, i = Array(e); ++n < e; ) i[n] = t(n);
    return i;
  }
  var Jg = "[object Arguments]";
  function Ql(e) {
    return mi(e) && gi(e) == Jg;
  }
  let Df, Zg, Xg;
  Df = Object.prototype;
  Zg = Df.hasOwnProperty;
  Xg = Df.propertyIsEnumerable;
  Qg = Ql(/* @__PURE__ */ (function() {
    return arguments;
  })()) ? Ql : function(e) {
    return mi(e) && Zg.call(e, "callee") && !Xg.call(e, "callee");
  };
  function em() {
    return false;
  }
  let xf, ec, tm, tc, nm, im, rm, om, sm, am, lm, cm, um, fm, hm, dm, pm, gm, mm, wm, ym, bm, vm, Em, Im, Tm, Sm, _m, Om, Qe;
  xf = typeof exports == "object" && exports && !exports.nodeType && exports;
  ec = xf && typeof module == "object" && module && !module.nodeType && module;
  tm = ec && ec.exports === xf;
  tc = tm ? Sn.Buffer : void 0;
  nm = tc ? tc.isBuffer : void 0;
  Ff = nm || em;
  im = "[object Arguments]";
  rm = "[object Array]";
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
  Qe = {};
  Qe[ym] = Qe[bm] = Qe[vm] = Qe[Em] = Qe[Im] = Qe[Tm] = Qe[Sm] = Qe[_m] = Qe[Om] = true;
  Qe[im] = Qe[rm] = Qe[mm] = Qe[om] = Qe[wm] = Qe[sm] = Qe[am] = Qe[lm] = Qe[cm] = Qe[um] = Qe[fm] = Qe[hm] = Qe[dm] = Qe[pm] = Qe[gm] = false;
  function Am(e) {
    return mi(e) && kf(e.length) && !!Qe[gi(e)];
  }
  function nl(e) {
    return function(t) {
      return e(t);
    };
  }
  let jf, Fr, Rm, Hs, tr, nc, Nm, Pm;
  jf = typeof exports == "object" && exports && !exports.nodeType && exports;
  Fr = jf && typeof module == "object" && module && !module.nodeType && module;
  Rm = Fr && Fr.exports === jf;
  Hs = Rm && Mf.process;
  tr = (function() {
    try {
      var e = Fr && Fr.require && Fr.require("util").types;
      return e || Hs && Hs.binding && Hs.binding("util");
    } catch {
    }
  })();
  nc = tr && tr.isTypedArray;
  Mm = nc ? nl(nc) : Am;
  Nm = Object.prototype;
  Pm = Nm.hasOwnProperty;
  Cm = function(e, t) {
    var n = Es(e), i = !n && Qg(e), l = !n && !i && Ff(e), c = !n && !i && !l && Mm(e), f = n || i || l || c, h = f ? Yg(e.length, String) : [], p = h.length;
    for (var v in e) (t || Pm.call(e, v)) && !(f && (v == "length" || l && (v == "offset" || v == "parent") || c && (v == "buffer" || v == "byteLength" || v == "byteOffset") || Wg(v, p))) && h.push(v);
    return h;
  };
  function Uf(e, t) {
    return function(n) {
      return e(t(n));
    };
  }
  var km = Uf(Object.keys, Object), Lm = Object.prototype, Dm = Lm.hasOwnProperty;
  function xm(e) {
    if (!Lf(e)) return km(e);
    var t = [];
    for (var n in Object(e)) Dm.call(e, n) && n != "constructor" && t.push(n);
    return t;
  }
  Fm = function(e) {
    return qg(e) ? Cm(e) : xm(e);
  };
  var qr = Fi(Object, "create");
  function jm() {
    this.__data__ = qr ? qr(null) : {}, this.size = 0;
  }
  function Um(e) {
    var t = this.has(e) && delete this.__data__[e];
    return this.size -= t ? 1 : 0, t;
  }
  var Gm = "__lodash_hash_undefined__", Wm = Object.prototype, Bm = Wm.hasOwnProperty;
  function zm(e) {
    var t = this.__data__;
    if (qr) {
      var n = t[e];
      return n === Gm ? void 0 : n;
    }
    return Bm.call(t, e) ? t[e] : void 0;
  }
  var $m = Object.prototype, Vm = $m.hasOwnProperty;
  function Hm(e) {
    var t = this.__data__;
    return qr ? t[e] !== void 0 : Vm.call(t, e);
  }
  var qm = "__lodash_hash_undefined__";
  function Km(e, t) {
    var n = this.__data__;
    return this.size += this.has(e) ? 0 : 1, n[e] = qr && t === void 0 ? qm : t, this;
  }
  function Di(e) {
    var t = -1, n = e == null ? 0 : e.length;
    for (this.clear(); ++t < n; ) {
      var i = e[t];
      this.set(i[0], i[1]);
    }
  }
  Di.prototype.clear = jm;
  Di.prototype.delete = Um;
  Di.prototype.get = zm;
  Di.prototype.has = Hm;
  Di.prototype.set = Km;
  function Ym() {
    this.__data__ = [], this.size = 0;
  }
  function Ts(e, t) {
    for (var n = e.length; n--; ) if (Cf(e[n][0], t)) return n;
    return -1;
  }
  var Jm = Array.prototype, Zm = Jm.splice;
  function Xm(e) {
    var t = this.__data__, n = Ts(t, e);
    if (n < 0) return false;
    var i = t.length - 1;
    return n == i ? t.pop() : Zm.call(t, n, 1), --this.size, true;
  }
  function Qm(e) {
    var t = this.__data__, n = Ts(t, e);
    return n < 0 ? void 0 : t[n][1];
  }
  function ew(e) {
    return Ts(this.__data__, e) > -1;
  }
  function tw(e, t) {
    var n = this.__data__, i = Ts(n, e);
    return i < 0 ? (++this.size, n.push([
      e,
      t
    ])) : n[i][1] = t, this;
  }
  function Jn(e) {
    var t = -1, n = e == null ? 0 : e.length;
    for (this.clear(); ++t < n; ) {
      var i = e[t];
      this.set(i[0], i[1]);
    }
  }
  Jn.prototype.clear = Ym;
  Jn.prototype.delete = Xm;
  Jn.prototype.get = Qm;
  Jn.prototype.has = ew;
  Jn.prototype.set = tw;
  var Kr = Fi(Sn, "Map");
  function nw() {
    this.size = 0, this.__data__ = {
      hash: new Di(),
      map: new (Kr || Jn)(),
      string: new Di()
    };
  }
  function iw(e) {
    var t = typeof e;
    return t == "string" || t == "number" || t == "symbol" || t == "boolean" ? e !== "__proto__" : e === null;
  }
  function Ss(e, t) {
    var n = e.__data__;
    return iw(t) ? n[typeof t == "string" ? "string" : "hash"] : n.map;
  }
  function rw(e) {
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
    var n = Ss(this, e), i = n.size;
    return n.set(e, t), this.size += n.size == i ? 0 : 1, this;
  }
  lr = function(e) {
    var t = -1, n = e == null ? 0 : e.length;
    for (this.clear(); ++t < n; ) {
      var i = e[t];
      this.set(i[0], i[1]);
    }
  };
  lr.prototype.clear = nw;
  lr.prototype.delete = rw;
  lr.prototype.get = ow;
  lr.prototype.has = sw;
  lr.prototype.set = aw;
  function lw(e, t) {
    for (var n = -1, i = t.length, l = e.length; ++n < i; ) e[l + n] = t[n];
    return e;
  }
  var Gf = Uf(Object.getPrototypeOf, Object), cw = "[object Object]", uw = Function.prototype, fw = Object.prototype, Wf = uw.toString, hw = fw.hasOwnProperty, dw = Wf.call(Object);
  pw = function(e) {
    if (!mi(e) || gi(e) != cw) return false;
    var t = Gf(e);
    if (t === null) return true;
    var n = hw.call(t, "constructor") && t.constructor;
    return typeof n == "function" && n instanceof n && Wf.call(n) == dw;
  };
  var gw = "[object DOMException]", mw = "[object Error]";
  function Bf(e) {
    if (!mi(e)) return false;
    var t = gi(e);
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
      var i = n.__data__;
      if (!Kr || i.length < Ew - 1) return i.push([
        e,
        t
      ]), this.size = ++n.size, this;
      n = this.__data__ = new lr(i);
    }
    return n.set(e, t), this.size = n.size, this;
  }
  cr = function(e) {
    var t = this.__data__ = new Jn(e);
    this.size = t.size;
  };
  cr.prototype.clear = ww;
  cr.prototype.delete = yw;
  cr.prototype.get = bw;
  cr.prototype.has = vw;
  cr.prototype.set = Iw;
  var zf = typeof exports == "object" && exports && !exports.nodeType && exports, ic = zf && typeof module == "object" && module && !module.nodeType && module, Tw = ic && ic.exports === zf, rc = Tw ? Sn.Buffer : void 0, oc = rc ? rc.allocUnsafe : void 0;
  Sw = function(e, t) {
    if (t) return e.slice();
    var n = e.length, i = oc ? oc(n) : new e.constructor(n);
    return e.copy(i), i;
  };
  function _w(e, t) {
    for (var n = -1, i = e == null ? 0 : e.length, l = 0, c = []; ++n < i; ) {
      var f = e[n];
      t(f, n, e) && (c[l++] = f);
    }
    return c;
  }
  function Ow() {
    return [];
  }
  var Aw = Object.prototype, Rw = Aw.propertyIsEnumerable, sc = Object.getOwnPropertySymbols, Mw = sc ? function(e) {
    return e == null ? [] : (e = Object(e), _w(sc(e), function(t) {
      return Rw.call(e, t);
    }));
  } : Ow;
  function Nw(e, t, n) {
    var i = t(e);
    return Es(e) ? i : lw(i, n(e));
  }
  Pw = function(e) {
    return Nw(e, Fm, Mw);
  };
  let Ta, Sa, _a, ac, Cw, lc, cc, uc, fc, kw, Lw, Dw, xw, Fw;
  Ta = Fi(Sn, "DataView");
  Sa = Fi(Sn, "Promise");
  _a = Fi(Sn, "Set");
  ac = "[object Map]";
  Cw = "[object Object]";
  lc = "[object Promise]";
  cc = "[object Set]";
  uc = "[object WeakMap]";
  fc = "[object DataView]";
  kw = xi(Ta);
  Lw = xi(Kr);
  Dw = xi(Sa);
  xw = xi(_a);
  Fw = xi(Ia);
  Dn = gi;
  (Ta && Dn(new Ta(new ArrayBuffer(1))) != fc || Kr && Dn(new Kr()) != ac || Sa && Dn(Sa.resolve()) != lc || _a && Dn(new _a()) != cc || Ia && Dn(new Ia()) != uc) && (Dn = function(e) {
    var t = gi(e), n = t == Cw ? e.constructor : void 0, i = n ? xi(n) : "";
    if (i) switch (i) {
      case kw:
        return fc;
      case Lw:
        return ac;
      case Dw:
        return lc;
      case xw:
        return cc;
      case Fw:
        return uc;
    }
    return t;
  });
  var jw = Object.prototype, Uw = jw.hasOwnProperty;
  function Gw(e) {
    var t = e.length, n = new e.constructor(t);
    return t && typeof e[0] == "string" && Uw.call(e, "index") && (n.index = e.index, n.input = e.input), n;
  }
  hc = Sn.Uint8Array;
  function il(e) {
    var t = new e.constructor(e.byteLength);
    return new hc(t).set(new hc(e)), t;
  }
  function Ww(e, t) {
    var n = il(e.buffer);
    return new e.constructor(n, e.byteOffset, e.byteLength);
  }
  var Bw = /\w*$/;
  function zw(e) {
    var t = new e.constructor(e.source, Bw.exec(e));
    return t.lastIndex = e.lastIndex, t;
  }
  var dc = er ? er.prototype : void 0, pc = dc ? dc.valueOf : void 0;
  function $w(e) {
    return pc ? Object(pc.call(e)) : {};
  }
  Vw = function(e, t) {
    var n = t ? il(e.buffer) : e.buffer;
    return new e.constructor(n, e.byteOffset, e.length);
  };
  var Hw = "[object Boolean]", qw = "[object Date]", Kw = "[object Map]", Yw = "[object Number]", Jw = "[object RegExp]", Zw = "[object Set]", Xw = "[object String]", Qw = "[object Symbol]", ey = "[object ArrayBuffer]", ty = "[object DataView]", ny = "[object Float32Array]", iy = "[object Float64Array]", ry = "[object Int8Array]", oy = "[object Int16Array]", sy = "[object Int32Array]", ay = "[object Uint8Array]", ly = "[object Uint8ClampedArray]", cy = "[object Uint16Array]", uy = "[object Uint32Array]";
  function fy(e, t, n) {
    var i = e.constructor;
    switch (t) {
      case ey:
        return il(e);
      case Hw:
      case qw:
        return new i(+e);
      case ty:
        return Ww(e);
      case ny:
      case iy:
      case ry:
      case oy:
      case sy:
      case ay:
      case ly:
      case cy:
      case uy:
        return Vw(e, n);
      case Kw:
        return new i();
      case Yw:
      case Xw:
        return new i(e);
      case Jw:
        return zw(e);
      case Zw:
        return new i();
      case Qw:
        return $w(e);
    }
  }
  hy = function(e) {
    return typeof e.constructor == "function" && !Lf(e) ? Fg(Gf(e)) : {};
  };
  var dy = "[object Map]";
  function py(e) {
    return mi(e) && Dn(e) == dy;
  }
  var gc = tr && tr.isMap, gy = gc ? nl(gc) : py, my = "[object Set]";
  function wy(e) {
    return mi(e) && Dn(e) == my;
  }
  var mc = tr && tr.isSet, yy = mc ? nl(mc) : wy, by = 1, $f = "[object Arguments]", vy = "[object Array]", Ey = "[object Boolean]", Iy = "[object Date]", Ty = "[object Error]", Vf = "[object Function]", Sy = "[object GeneratorFunction]", _y = "[object Map]", Oy = "[object Number]", Hf = "[object Object]", Ay = "[object RegExp]", Ry = "[object Set]", My = "[object String]", Ny = "[object Symbol]", Py = "[object WeakMap]", Cy = "[object ArrayBuffer]", ky = "[object DataView]", Ly = "[object Float32Array]", Dy = "[object Float64Array]", xy = "[object Int8Array]", Fy = "[object Int16Array]", jy = "[object Int32Array]", Uy = "[object Uint8Array]", Gy = "[object Uint8ClampedArray]", Wy = "[object Uint16Array]", By = "[object Uint32Array]", Je = {};
  Je[$f] = Je[vy] = Je[Cy] = Je[ky] = Je[Ey] = Je[Iy] = Je[Ly] = Je[Dy] = Je[xy] = Je[Fy] = Je[jy] = Je[_y] = Je[Oy] = Je[Hf] = Je[Ay] = Je[Ry] = Je[My] = Je[Ny] = Je[Uy] = Je[Gy] = Je[Wy] = Je[By] = true;
  Je[Ty] = Je[Vf] = Je[Py] = false;
  function Oo(e, t, n, i, l, c) {
    var f, h = t & by;
    if (f !== void 0) return f;
    if (!Is(e)) return e;
    var p = Es(e);
    if (p) f = Gw(e);
    else {
      var v = Dn(e), g = v == Vf || v == Sy;
      if (Ff(e)) return Sw(e, h);
      if (v == Hf || v == $f || g && !l) f = g ? {} : hy(e);
      else {
        if (!Je[v]) return l ? e : {};
        f = fy(e, v, h);
      }
    }
    c || (c = new cr());
    var T = c.get(e);
    if (T) return T;
    c.set(e, f), yy(e) ? e.forEach(function(F) {
      f.add(Oo(F, t, n, F, e, c));
    }) : gy(e) && e.forEach(function(F, C) {
      f.set(C, Oo(F, t, n, C, e, c));
    });
    var N = Pw, R = p ? void 0 : N(e);
    return jg(R || e, function(F, C) {
      R && (C = F, F = e[C]), Vg(f, C, Oo(F, t, n, C, e, c));
    }), f;
  }
  var zy = 1, $y = 4;
  qf = function(e) {
    return Oo(e, zy | $y);
  };
  var Vy = "[object String]";
  function Oa(e) {
    return typeof e == "string" || !Es(e) && mi(e) && gi(e) == Vy;
  }
  const Ct = (e) => Oa(e) ? e : Bf(e) ? String(e) : JSON.stringify(e), mn = {
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
  async function Kf(e, t, n = 1e4, i = {}, l = 0, c = 0, f = 0) {
    var _a3, _b2, _c2, _d2, _e2, _f2;
    const { logger: h = Hy, progressReporter: p, printLog: v = true } = i, g = e.find((C) => C.name === t);
    if (!g) throw new Error(`cannot exactly find module "${t}" from the library`);
    const T = e.findIndex((C) => C.name === g.name);
    if (e[T].status === "loaded") return v && h.info(mn.alreadyLoaded(g.name)), {
      completed: f,
      total: c
    };
    const N = g.dependencies || [], R = e.filter((C) => N.includes(C.name)), F = N.filter((C) => !e.find((he) => he.name === C));
    if (F.length > 0) {
      const C = mn.missingDependencies(g.name, F.join(", "));
      throw v && h.error(C), new Error(C);
    }
    if (e[T].status === "error") {
      const C = mn.errorDetermined(g.name);
      throw v && h.info(C), new Error(C);
    }
    if (e[T].status === "loading") return v && h.info(mn.alreadyLoading(g.name)), await qy(e, g.name, n, h), {
      completed: f,
      total: c
    };
    try {
      let C = c, he = f;
      if (l === 0) {
        const ne = /* @__PURE__ */ new Set(), H = (Y) => {
          if (ne.has(Y)) return;
          ne.add(Y);
          const U = e.find((ue) => ue.name === Y);
          if (U && U.dependencies) for (const ue of U.dependencies) H(ue);
        };
        H(t), C = ne.size, he = 0;
      }
      if (R.length > 0) {
        h.info(mn.loadDependencies(g.name, R.map((ne) => ne.name)));
        for (const ne of R) {
          const H = await Kf(e, ne.name, n, {
            logger: h,
            progressReporter: p,
            printLog: v
          }, l + 1, C, he);
          he = H.completed, C = H.total, (_a3 = p == null ? void 0 : p.onOverallProgress) == null ? void 0 : _a3.call(p, he, C);
        }
        v && h.info(mn.dependenciesReady(g.name));
      }
      e[T].status = "loading", (_b2 = p == null ? void 0 : p.onModuleStart) == null ? void 0 : _b2.call(p, g.displayName);
      try {
        return v && h.info(mn.loading(g.name)), await g.moduleInit(n), e[T].status = "loaded", he++, (_c2 = p == null ? void 0 : p.onModuleComplete) == null ? void 0 : _c2.call(p, g.displayName), (_d2 = p == null ? void 0 : p.onOverallProgress) == null ? void 0 : _d2.call(p, he, C), v && h.info(mn.loaded(g.name)), {
          completed: he,
          total: C
        };
      } catch (ne) {
        e[T].status = "error";
        const H = mn.error(g.name, Oa(ne) ? ne : Bf(ne) ? ne.message : JSON.stringify(ne));
        throw h.error(H), (_e2 = p == null ? void 0 : p.onModuleError) == null ? void 0 : _e2.call(p, g.displayName, Oa(ne) ? new Error(ne) : ne), new Error(H);
      }
    } catch (C) {
      e[T].status = "error", console.log(C);
      const he = mn.error(g.name, C);
      throw h.error(he), (_f2 = p == null ? void 0 : p.onModuleError) == null ? void 0 : _f2.call(p, g.displayName, C), new Error(he);
    }
  }
  async function qy(e, t, n = 1e4, i) {
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
  let Ky, Yy, wc, Jy, Zy, Xy, Yf;
  Ky = "modulepreload";
  Yy = function(e, t) {
    return new URL(e, t).href;
  };
  wc = {};
  qs = function(t, n, i) {
    let l = Promise.resolve();
    if (n && n.length > 0) {
      let v = function(g) {
        return Promise.all(g.map((T) => Promise.resolve(T).then((N) => ({
          status: "fulfilled",
          value: N
        }), (N) => ({
          status: "rejected",
          reason: N
        }))));
      };
      const f = document.getElementsByTagName("link"), h = document.querySelector("meta[property=csp-nonce]"), p = (h == null ? void 0 : h.nonce) || (h == null ? void 0 : h.getAttribute("nonce"));
      l = v(n.map((g) => {
        if (g = Yy(g, i), g in wc) return;
        wc[g] = true;
        const T = g.endsWith(".css"), N = T ? '[rel="stylesheet"]' : "";
        if (i) for (let F = f.length - 1; F >= 0; F--) {
          const C = f[F];
          if (C.href === g && (!T || C.rel === "stylesheet")) return;
        }
        else if (document.querySelector(`link[href="${g}"]${N}`)) return;
        const R = document.createElement("link");
        if (R.rel = T ? "stylesheet" : Ky, T || (R.as = "script"), R.crossOrigin = "", R.href = g, p && R.setAttribute("nonce", p), document.head.appendChild(R), T) return new Promise((F, C) => {
          R.addEventListener("load", F), R.addEventListener("error", () => C(new Error(`Unable to preload CSS for ${g}`)));
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
  Zy = [
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
  Xy = {
    withStackTrace: false
  };
  Yf = (e, t, n = Xy) => {
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
  function Ti(e, t, n, i) {
    function l(c) {
      return c instanceof n ? c : new n(function(f) {
        f(c);
      });
    }
    return new (n || (n = Promise))(function(c, f) {
      function h(g) {
        try {
          v(i.next(g));
        } catch (T) {
          f(T);
        }
      }
      function p(g) {
        try {
          v(i.throw(g));
        } catch (T) {
          f(T);
        }
      }
      function v(g) {
        g.done ? c(g.value) : l(g.value).then(h, p);
      }
      v((i = i.apply(e, [])).next());
    });
  }
  function yc(e) {
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
  function bc(e, t, n) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var i = n.apply(e, t || []), l, c = [];
    return l = Object.create((typeof AsyncIterator == "function" ? AsyncIterator : Object).prototype), h("next"), h("throw"), h("return", f), l[Symbol.asyncIterator] = function() {
      return this;
    }, l;
    function f(R) {
      return function(F) {
        return Promise.resolve(F).then(R, T);
      };
    }
    function h(R, F) {
      i[R] && (l[R] = function(C) {
        return new Promise(function(he, ne) {
          c.push([
            R,
            C,
            he,
            ne
          ]) > 1 || p(R, C);
        });
      }, F && (l[R] = F(l[R])));
    }
    function p(R, F) {
      try {
        v(i[R](F));
      } catch (C) {
        N(c[0][3], C);
      }
    }
    function v(R) {
      R.value instanceof In ? Promise.resolve(R.value.v).then(g, T) : N(c[0][2], R);
    }
    function g(R) {
      p("next", R);
    }
    function T(R) {
      p("throw", R);
    }
    function N(R, F) {
      R(F), c.shift(), c.length && p(c[0][0], c[0][1]);
    }
  }
  function Qy(e) {
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
  function e0(e) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var t = e[Symbol.asyncIterator], n;
    return t ? t.call(e) : (e = typeof yc == "function" ? yc(e) : e[Symbol.iterator](), n = {}, i("next"), i("throw"), i("return"), n[Symbol.asyncIterator] = function() {
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
      return (...i) => new _t(Ti(this, void 0, void 0, function* () {
        try {
          return new yn(yield t(...i));
        } catch (l) {
          return new an(n ? n(l) : l);
        }
      }));
    }
    static combine(t) {
      return t0(t);
    }
    static combineWithAllErrors(t) {
      return n0(t);
    }
    map(t) {
      return new _t(this._promise.then((n) => Ti(this, void 0, void 0, function* () {
        return n.isErr() ? new an(n.error) : new yn(yield t(n.value));
      })));
    }
    andThrough(t) {
      return new _t(this._promise.then((n) => Ti(this, void 0, void 0, function* () {
        if (n.isErr()) return new an(n.error);
        const i = yield t(n.value);
        return i.isErr() ? new an(i.error) : new yn(n.value);
      })));
    }
    andTee(t) {
      return new _t(this._promise.then((n) => Ti(this, void 0, void 0, function* () {
        if (n.isErr()) return new an(n.error);
        try {
          yield t(n.value);
        } catch {
        }
        return new yn(n.value);
      })));
    }
    orTee(t) {
      return new _t(this._promise.then((n) => Ti(this, void 0, void 0, function* () {
        if (n.isOk()) return new yn(n.value);
        try {
          yield t(n.error);
        } catch {
        }
        return new an(n.error);
      })));
    }
    mapErr(t) {
      return new _t(this._promise.then((n) => Ti(this, void 0, void 0, function* () {
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
      return new _t(this._promise.then((n) => Ti(this, void 0, void 0, function* () {
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
      return bc(this, arguments, function* () {
        return yield In(yield In(yield* Qy(e0(yield In(this._promise.then((n) => n.safeUnwrap()))))));
      });
    }
    then(t, n) {
      return this._promise.then(t, n);
    }
    [Symbol.asyncIterator]() {
      return bc(this, arguments, function* () {
        const n = yield In(this._promise);
        return n.isErr() && (yield yield In(Ao(n.error))), yield In(n.value);
      });
    }
  }
  function Ao(e) {
    return new _t(Promise.resolve(new an(e)));
  }
  const Jf = (e) => {
    let t = j([]);
    for (const n of e) if (n.isErr()) {
      t = M(n.error);
      break;
    } else t.map((i) => i.push(n.value));
    return t;
  }, t0 = (e) => _t.fromSafePromise(Promise.all(e)).andThen(Jf), Zf = (e) => {
    let t = j([]);
    for (const n of e) n.isErr() && t.isErr() ? t.error.push(n.error) : n.isErr() && t.isOk() ? t = M([
      n.error
    ]) : n.isOk() && t.isOk() && t.value.push(n.value);
    return t;
  }, n0 = (e) => _t.fromSafePromise(Promise.all(e)).andThen(Zf);
  var Aa;
  (function(e) {
    function t(l, c) {
      return (...f) => {
        try {
          const h = l(...f);
          return j(h);
        } catch (h) {
          return M(c ? c(h) : h);
        }
      };
    }
    e.fromThrowable = t;
    function n(l) {
      return Jf(l);
    }
    e.combine = n;
    function i(l) {
      return Zf(l);
    }
    e.combineWithAllErrors = i;
  })(Aa || (Aa = {}));
  j = function(e) {
    return new yn(e);
  };
  M = function(e) {
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
      return j(t(this.value));
    }
    mapErr(t) {
      return j(this.value);
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
      return j(this.value);
    }
    orTee(t) {
      return j(this.value);
    }
    orElse(t) {
      return j(this.value);
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
      throw Yf("Called `_unsafeUnwrapErr` on an Ok", this, t);
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
        throw yield M(t), new Error("Do not use this generator out of `safeTry`");
      })();
    }
    _unsafeUnwrap(t) {
      throw Yf("Called `_unsafeUnwrap` on an Err", this, t);
    }
    _unsafeUnwrapErr(t) {
      return this.error;
    }
    *[Symbol.iterator]() {
      const t = this;
      return yield t, t;
    }
  }
  Aa.fromThrowable;
  to = ((e) => (e.GENERIC = "generic", e.VALIDATION = "validation", e.NETWORK = "network", e.GEOLOCATION = "geolocation", e.STORAGE = "storage", e.CONVERSION = "conversion", e.UPDATE_SERVICE = "update_service", e))(to || {});
  ur = class extends Error {
    constructor(t, n) {
      super(t), this.cause = n, this.name = this.constructor.name, n && (this.message = `${t} (caused by: ${n.message})`);
    }
  };
  class xe extends ur {
    constructor(t, n = "GENERIC_ERROR", i) {
      super(t, i);
      __publicField(this, "code");
      __publicField(this, "domain", "generic");
      this.code = n;
    }
  }
  function i0(e) {
    return e instanceof ur;
  }
  go = function(e, t = "Unknown error occurred") {
    return i0(e) ? e : e instanceof Error ? new xe(t, "UNKNOWN_ERROR", e) : new xe(t, "UNKNOWN_ERROR");
  };
  Si = function(e, t) {
    const n = t ? `[${t}] ` : "";
    console.error(`${n}${e.domain}.${e.code}: ${e.message}`, {
      error: e,
      cause: e.cause,
      stack: e.stack
    });
  };
  class Me extends ur {
    constructor(t, n, i) {
      super(t, i);
      __publicField(this, "code");
      __publicField(this, "domain", to.GEOLOCATION);
      this.code = n;
    }
  }
  class Pn extends Me {
    constructor(t = "Geolocation update service error", n, i) {
      super(t, "UPDATE_SERVICE_ERROR", i), this.serviceName = n;
    }
  }
  var r0 = "2.0.7", o0 = 500, vc = "user-agent", nr = "", Ec = "?", ut = {
    FUNCTION: "function",
    OBJECT: "object",
    STRING: "string",
    UNDEFINED: "undefined"
  }, Wt = "browser", Wn = "cpu", Tn = "device", un = "engine", Yt = "os", ir = "result", W = "name", D = "type", z = "vendor", $ = "version", Lt = "architecture", Yr = "major", G = "model", Ro = "console", Ae = "mobile", He = "tablet", ht = "smarttv", bn = "wearable", mo = "xr", _r = "embedded", Gi = "inapp", rl = "brands", Mi = "formFactors", ol = "fullVersionList", rr = "platform", sl = "platformVersion", _s = "bitness", wi = "sec-ch-ua", s0 = wi + "-full-version-list", a0 = wi + "-arch", l0 = wi + "-" + _s, c0 = wi + "-form-factors", u0 = wi + "-" + Ae, f0 = wi + "-" + G, Xf = wi + "-" + rr, h0 = Xf + "-version", Qf = [
    rl,
    ol,
    Ae,
    G,
    rr,
    sl,
    Lt,
    Mi,
    _s
  ], wo = "Amazon", Wi = "Apple", Ic = "ASUS", Tc = "BlackBerry", _i = "Google", Sc = "Huawei", Ks = "Lenovo", _c = "Honor", yo = "LG", Ys = "Microsoft", Js = "Motorola", Oc = "Nvidia", Ac = "OnePlus", Zs = "OPPO", wr = "Samsung", Rc = "Sharp", yr = "Sony", Xs = "Xiaomi", Qs = "Zebra", Mc = "Chrome", Nc = "Chromium", Xn = "Chromecast", Mo = "Edge", br = "Firefox", vr = "Opera", ea = "Facebook", Pc = "Sogou", Bi = "Mobile ", Er = " Browser", Ra = "Windows", d0 = typeof window !== ut.UNDEFINED, Ut = d0 && window.navigator ? window.navigator : void 0, Ni = Ut && Ut.userAgentData ? Ut.userAgentData : void 0, p0 = function(e, t) {
    var n = {}, i = t;
    if (!qo(t)) {
      i = {};
      for (var l in t) for (var c in t[l]) i[c] = t[l][c].concat(i[c] ? i[c] : []);
    }
    for (var f in e) n[f] = i[f] && i[f].length % 2 === 0 ? i[f].concat(e[f]) : e[f];
    return n;
  }, Os = function(e) {
    for (var t = {}, n = 0; n < e.length; n++) t[e[n].toUpperCase()] = e[n];
    return t;
  }, Ma = function(e, t) {
    if (typeof e === ut.OBJECT && e.length > 0) {
      for (var n in e) if (ci(t) == ci(e[n])) return true;
      return false;
    }
    return no(e) ? ci(t) == ci(e) : false;
  }, qo = function(e, t) {
    for (var n in e) return /^(browser|cpu|device|engine|os)$/.test(n) || (t ? qo(e[n]) : false);
  }, no = function(e) {
    return typeof e === ut.STRING;
  }, ta = function(e) {
    if (e) {
      for (var t = [], n = or(/\\?\"/g, e).split(","), i = 0; i < n.length; i++) if (n[i].indexOf(";") > -1) {
        var l = Ko(n[i]).split(";v=");
        t[i] = {
          brand: l[0],
          version: l[1]
        };
      } else t[i] = Ko(n[i]);
      return t;
    }
  }, ci = function(e) {
    return no(e) ? e.toLowerCase() : e;
  }, Na = function(e) {
    return no(e) ? or(/[^\d\.]/g, e).split(".")[0] : void 0;
  }, jn = function(e) {
    for (var t in e) if (e.hasOwnProperty(t)) {
      var n = e[t];
      typeof n == ut.OBJECT && n.length == 2 ? this[n[0]] = n[1] : this[n] = void 0;
    }
    return this;
  }, or = function(e, t) {
    return no(t) ? t.replace(e, nr) : t;
  }, Ir = function(e) {
    return or(/\\?\"/g, e);
  }, Ko = function(e, t) {
    return e = or(/^\s\s*/, String(e)), typeof t === ut.UNDEFINED ? e : e.substring(0, t);
  }, Pa = function(e, t) {
    if (!(!e || !t)) for (var n = 0, i, l, c, f, h, p; n < t.length && !h; ) {
      var v = t[n], g = t[n + 1];
      for (i = l = 0; i < v.length && !h && v[i]; ) if (h = v[i++].exec(e), h) for (c = 0; c < g.length; c++) p = h[++l], f = g[c], typeof f === ut.OBJECT && f.length > 0 ? f.length === 2 ? typeof f[1] == ut.FUNCTION ? this[f[0]] = f[1].call(this, p) : this[f[0]] = f[1] : f.length >= 3 && (typeof f[1] === ut.FUNCTION && !(f[1].exec && f[1].test) ? f.length > 3 ? this[f[0]] = p ? f[1].apply(this, f.slice(2)) : void 0 : this[f[0]] = p ? f[1].call(this, p, f[2]) : void 0 : f.length == 3 ? this[f[0]] = p ? p.replace(f[1], f[2]) : void 0 : f.length == 4 ? this[f[0]] = p ? f[3].call(this, p.replace(f[1], f[2])) : void 0 : f.length > 4 && (this[f[0]] = p ? f[3].apply(this, [
        p.replace(f[1], f[2])
      ].concat(f.slice(4))) : void 0)) : this[f] = p || void 0;
      n += 2;
    }
  }, cn = function(e, t) {
    for (var n in t) if (typeof t[n] === ut.OBJECT && t[n].length > 0) {
      for (var i = 0; i < t[n].length; i++) if (Ma(t[n][i], e)) return n === Ec ? void 0 : n;
    } else if (Ma(t[n], e)) return n === Ec ? void 0 : n;
    return t.hasOwnProperty("*") ? t["*"] : e;
  }, Cc = {
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
  }, kc = {
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
  }, g0 = {
    Chrome: "Google Chrome",
    Edge: "Microsoft Edge",
    "Edge WebView2": "Microsoft Edge WebView2",
    "Chrome WebView": "Android WebView",
    "Chrome Headless": "HeadlessChrome",
    "Huawei Browser": "HuaweiBrowser",
    "MIUI Browser": "Miui Browser",
    "Opera Mobi": "OperaMobile",
    Yandex: "YaBrowser"
  }, Lc = {
    browser: [
      [
        /\b(?:crmo|crios)\/([\w\.]+)/i
      ],
      [
        $,
        [
          W,
          Bi + "Chrome"
        ]
      ],
      [
        /webview.+edge\/([\w\.]+)/i
      ],
      [
        $,
        [
          W,
          Mo + " WebView"
        ]
      ],
      [
        /edg(?:e|ios|a)?\/([\w\.]+)/i
      ],
      [
        $,
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
        $
      ],
      [
        /opios[\/ ]+([\w\.]+)/i
      ],
      [
        $,
        [
          W,
          vr + " Mini"
        ]
      ],
      [
        /\bop(?:rg)?x\/([\w\.]+)/i
      ],
      [
        $,
        [
          W,
          vr + " GX"
        ]
      ],
      [
        /\bopr\/([\w\.]+)/i
      ],
      [
        $,
        [
          W,
          vr
        ]
      ],
      [
        /\bb[ai]*d(?:uhd|[ub]*[aekoprswx]{5,6})[\/ ]?([\w\.]+)/i
      ],
      [
        $,
        [
          W,
          "Baidu"
        ]
      ],
      [
        /\b(?:mxbrowser|mxios|myie2)\/?([-\w\.]*)\b/i
      ],
      [
        $,
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
        $
      ],
      [
        /quark(?:pc)?\/([-\w\.]+)/i
      ],
      [
        $,
        [
          W,
          "Quark"
        ]
      ],
      [
        /\bddg\/([\w\.]+)/i
      ],
      [
        $,
        [
          W,
          "DuckDuckGo"
        ]
      ],
      [
        /(?:\buc? ?browser|(?:juc.+)ucweb)[\/ ]?([\w\.]+)/i
      ],
      [
        $,
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
        $,
        [
          W,
          "WeChat"
        ]
      ],
      [
        /konqueror\/([\w\.]+)/i
      ],
      [
        $,
        [
          W,
          "Konqueror"
        ]
      ],
      [
        /trident.+rv[: ]([\w\.]{1,9})\b.+like gecko/i
      ],
      [
        $,
        [
          W,
          "IE"
        ]
      ],
      [
        /ya(?:search)?browser\/([\w\.]+)/i
      ],
      [
        $,
        [
          W,
          "Yandex"
        ]
      ],
      [
        /slbrowser\/([\w\.]+)/i
      ],
      [
        $,
        [
          W,
          "Smart " + Ks + Er
        ]
      ],
      [
        /(avast|avg)\/([\w\.]+)/i
      ],
      [
        [
          W,
          /(.+)/,
          "$1 Secure" + Er
        ],
        $
      ],
      [
        /\bfocus\/([\w\.]+)/i
      ],
      [
        $,
        [
          W,
          br + " Focus"
        ]
      ],
      [
        /\bopt\/([\w\.]+)/i
      ],
      [
        $,
        [
          W,
          vr + " Touch"
        ]
      ],
      [
        /coc_coc\w+\/([\w\.]+)/i
      ],
      [
        $,
        [
          W,
          "Coc Coc"
        ]
      ],
      [
        /dolfin\/([\w\.]+)/i
      ],
      [
        $,
        [
          W,
          "Dolphin"
        ]
      ],
      [
        /coast\/([\w\.]+)/i
      ],
      [
        $,
        [
          W,
          vr + " Coast"
        ]
      ],
      [
        /miuibrowser\/([\w\.]+)/i
      ],
      [
        $,
        [
          W,
          "MIUI" + Er
        ]
      ],
      [
        /fxios\/([\w\.-]+)/i
      ],
      [
        $,
        [
          W,
          Bi + br
        ]
      ],
      [
        /\bqihoobrowser\/?([\w\.]*)/i
      ],
      [
        $,
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
        $
      ],
      [
        /(oculus|sailfish|huawei|vivo|pico)browser\/([\w\.]+)/i
      ],
      [
        [
          W,
          /(.+)/,
          "$1" + Er
        ],
        $
      ],
      [
        /samsungbrowser\/([\w\.]+)/i
      ],
      [
        $,
        [
          W,
          wr + " Internet"
        ]
      ],
      [
        /metasr[\/ ]?([\d\.]+)/i
      ],
      [
        $,
        [
          W,
          Pc + " Explorer"
        ]
      ],
      [
        /(sogou)mo\w+\/([\d\.]+)/i
      ],
      [
        [
          W,
          Pc + " Mobile"
        ],
        $
      ],
      [
        /(electron)\/([\w\.]+) safari/i,
        /(tesla)(?: qtcarbrowser|\/(20\d\d\.[-\w\.]+))/i,
        /m?(qqbrowser|2345(?=browser|chrome|explorer))\w*[\/ ]?v?([\w\.]+)/i
      ],
      [
        W,
        $
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
        $,
        W
      ],
      [
        /((?:fban\/fbios|fb_iab\/fb4a)(?!.+fbav)|;fbav\/([\w\.]+);)/i
      ],
      [
        [
          W,
          ea
        ],
        $,
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
        $,
        [
          D,
          Gi
        ]
      ],
      [
        /\bgsa\/([\w\.]+) .*safari\//i
      ],
      [
        $,
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
        $,
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
        $,
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
        $
      ],
      [
        /headlesschrome(?:\/([\w\.]+)| )/i
      ],
      [
        $,
        [
          W,
          Mc + " Headless"
        ]
      ],
      [
        /wv\).+chrome\/([\w\.]+).+edgw\//i
      ],
      [
        $,
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
          Mc + " WebView"
        ],
        $
      ],
      [
        /droid.+ version\/([\w\.]+)\b.+(?:mobile safari|safari)/i
      ],
      [
        $,
        [
          W,
          "Android" + Er
        ]
      ],
      [
        /chrome\/([\w\.]+) mobile/i
      ],
      [
        $,
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
        $
      ],
      [
        /version\/([\w\.\,]+) .*mobile(?:\/\w+ | ?)safari/i
      ],
      [
        $,
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
        $,
        W
      ],
      [
        /webkit.+?(mobile ?safari|safari)(\/[\w\.]+)/i
      ],
      [
        W,
        [
          $,
          "1"
        ]
      ],
      [
        /(webkit|khtml)\/([\w\.]+)/i
      ],
      [
        W,
        $
      ],
      [
        /(?:mobile|tablet);.*(firefox)\/([\w\.-]+)/i
      ],
      [
        [
          W,
          Bi + br
        ],
        $
      ],
      [
        /(navigator|netscape\d?)\/([-\w\.]+)/i
      ],
      [
        [
          W,
          "Netscape"
        ],
        $
      ],
      [
        /(wolvic|librewolf)\/([\w\.]+)/i
      ],
      [
        W,
        $
      ],
      [
        /mobile vr; rv:([\w\.]+)\).+firefox/i
      ],
      [
        $,
        [
          W,
          br + " Reality"
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
          $,
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
          $,
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
          nr,
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
        G,
        [
          z,
          wr
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
        G,
        [
          z,
          wr
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
        G,
        [
          z,
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
        G,
        [
          z,
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
        G,
        [
          z,
          Wi
        ]
      ],
      [
        /\b(sh-?[altvz]?\d\d[a-ekm]?)/i
      ],
      [
        G,
        [
          z,
          Rc
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
        G,
        [
          z,
          _c
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
        G,
        [
          z,
          _c
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
        G,
        [
          z,
          Sc
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
        G,
        [
          z,
          Sc
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
          G,
          /_/g,
          " "
        ],
        [
          z,
          Xs
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
          G,
          /_/g,
          " "
        ],
        [
          z,
          Xs
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
        G,
        [
          z,
          Ac
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
        G,
        [
          z,
          Zs
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
        G,
        [
          z,
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
            "*": Zs
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
        G,
        [
          z,
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
        G,
        [
          z,
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
        G,
        [
          z,
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
        G,
        [
          z,
          Ks
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
        G,
        [
          z,
          Ks
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
        G,
        [
          z,
          Js
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
        G,
        [
          z,
          Js
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
        G,
        [
          z,
          yo
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
        G,
        [
          z,
          yo
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
        z,
        G,
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
          G,
          /_/g,
          " "
        ],
        [
          D,
          Ae
        ],
        [
          z,
          "Nokia"
        ]
      ],
      [
        /(pixel (c|tablet))\b/i
      ],
      [
        G,
        [
          z,
          _i
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
        G,
        [
          z,
          _i
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
        z,
        G
      ],
      [
        /droid.+; (a?\d[0-2]{2}so|[c-g]\d{4}|so[-gl]\w+|xq-\w\w\d\d)(?= bui|\).+chrome\/(?![1-6]{0,1}\d\.))/i
      ],
      [
        G,
        [
          z,
          yr
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
          G,
          "Xperia Tablet"
        ],
        [
          z,
          yr
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
        G,
        [
          z,
          wo
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
          G,
          /(.+)/g,
          "Fire Phone $1"
        ],
        [
          z,
          wo
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
        G,
        z,
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
        G,
        [
          z,
          Tc
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
        G,
        [
          z,
          Ic
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
        G,
        [
          z,
          Ic
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
        G,
        [
          z,
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
        z,
        [
          G,
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
        G,
        [
          z,
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
        G,
        [
          z,
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
          z,
          ci
        ],
        G,
        [
          D,
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
        G,
        [
          z,
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
        G,
        [
          z,
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
        G,
        [
          z,
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
        G,
        [
          z,
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
        G,
        [
          z,
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
        G,
        [
          z,
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
        G,
        [
          z,
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
        G,
        [
          z,
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
        G,
        [
          z,
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
        G,
        [
          z,
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
        z,
        G,
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
        z,
        G,
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
        z,
        G,
        [
          D,
          He
        ]
      ],
      [
        /(surface duo)/i
      ],
      [
        G,
        [
          z,
          Ys
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
        G,
        [
          z,
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
        G,
        [
          z,
          Oc
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
        z,
        G,
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
          G,
          /\./g,
          " "
        ],
        [
          z,
          Ys
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
        G,
        [
          z,
          Qs
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
        G,
        [
          z,
          Qs
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
        z,
        [
          D,
          ht
        ]
      ],
      [
        /hbbtv.+maple;(\d+)/i
      ],
      [
        [
          G,
          /^/,
          "SmartTV"
        ],
        [
          z,
          wr
        ],
        [
          D,
          ht
        ]
      ],
      [
        /(vizio)(?: |.+model\/)(\w+-\w+)/i,
        /tcast.+(lg)e?. ([-\w]+)/i
      ],
      [
        z,
        G,
        [
          D,
          ht
        ]
      ],
      [
        /(nux; netcast.+smarttv|lg (netcast\.tv-201\d|android tv))/i
      ],
      [
        [
          z,
          yo
        ],
        [
          D,
          ht
        ]
      ],
      [
        /(apple) ?tv/i
      ],
      [
        z,
        [
          G,
          Wi + " TV"
        ],
        [
          D,
          ht
        ]
      ],
      [
        /crkey.*devicetype\/chromecast/i
      ],
      [
        [
          G,
          Xn + " Third Generation"
        ],
        [
          z,
          _i
        ],
        [
          D,
          ht
        ]
      ],
      [
        /crkey.*devicetype\/([^/]*)/i
      ],
      [
        [
          G,
          /^/,
          "Chromecast "
        ],
        [
          z,
          _i
        ],
        [
          D,
          ht
        ]
      ],
      [
        /fuchsia.*crkey/i
      ],
      [
        [
          G,
          Xn + " Nest Hub"
        ],
        [
          z,
          _i
        ],
        [
          D,
          ht
        ]
      ],
      [
        /crkey/i
      ],
      [
        [
          G,
          Xn
        ],
        [
          z,
          _i
        ],
        [
          D,
          ht
        ]
      ],
      [
        /(portaltv)/i
      ],
      [
        G,
        [
          z,
          ea
        ],
        [
          D,
          ht
        ]
      ],
      [
        /droid.+aft(\w+)( bui|\))/i
      ],
      [
        G,
        [
          z,
          wo
        ],
        [
          D,
          ht
        ]
      ],
      [
        /(shield \w+ tv)/i
      ],
      [
        G,
        [
          z,
          Oc
        ],
        [
          D,
          ht
        ]
      ],
      [
        /\(dtv[\);].+(aquos)/i,
        /(aquos-tv[\w ]+)\)/i
      ],
      [
        G,
        [
          z,
          Rc
        ],
        [
          D,
          ht
        ]
      ],
      [
        /(bravia[\w ]+)( bui|\))/i
      ],
      [
        G,
        [
          z,
          yr
        ],
        [
          D,
          ht
        ]
      ],
      [
        /(mi(tv|box)-?\w+) bui/i
      ],
      [
        G,
        [
          z,
          Xs
        ],
        [
          D,
          ht
        ]
      ],
      [
        /Hbbtv.*(technisat) (.*);/i
      ],
      [
        z,
        G,
        [
          D,
          ht
        ]
      ],
      [
        /\b(roku)[\dx]*[\)\/]((?:dvp-)?[\d\.]*)/i,
        /hbbtv\/\d+\.\d+\.\d+ +\([\w\+ ]*; *([\w\d][^;]*);([^;]*)/i
      ],
      [
        [
          z,
          /.+\/(\w+)/,
          "$1",
          cn,
          {
            LG: "lge"
          }
        ],
        [
          G,
          Ko
        ],
        [
          D,
          ht
        ]
      ],
      [
        /(playstation \w+)/i
      ],
      [
        G,
        [
          z,
          yr
        ],
        [
          D,
          Ro
        ]
      ],
      [
        /\b(xbox(?: one)?(?!; xbox))[\); ]/i
      ],
      [
        G,
        [
          z,
          Ys
        ],
        [
          D,
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
          z,
          cn,
          {
            Nvidia: "Shield",
            Anbernic: "RGCUBE",
            Logitech: "GR0006"
          }
        ],
        G,
        [
          D,
          Ro
        ]
      ],
      [
        /\b(sm-[lr]\d\d[0156][fnuw]?s?|gear live)\b/i
      ],
      [
        G,
        [
          z,
          wr
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
        z,
        G,
        [
          D,
          bn
        ]
      ],
      [
        /(ow(?:19|20)?we?[1-3]{1,3})/i
      ],
      [
        G,
        [
          z,
          Zs
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
        G,
        [
          z,
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
        G,
        [
          z,
          Ac
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
        G,
        [
          z,
          Js
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
        G,
        [
          z,
          yr
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
        G,
        [
          z,
          yo
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
        G,
        [
          z,
          Qs
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
        G,
        [
          z,
          _i
        ],
        [
          D,
          mo
        ]
      ],
      [
        /(pico) ([\w ]+) os\d/i
      ],
      [
        z,
        G,
        [
          D,
          mo
        ]
      ],
      [
        /(quest( \d| pro)?s?).+vr/i
      ],
      [
        G,
        [
          z,
          ea
        ],
        [
          D,
          mo
        ]
      ],
      [
        /mobile vr; rv.+firefox/i
      ],
      [
        [
          D,
          mo
        ]
      ],
      [
        /(tesla)(?: qtcarbrowser|\/[-\w\.]+)/i
      ],
      [
        z,
        [
          D,
          _r
        ]
      ],
      [
        /(aeobc)\b/i
      ],
      [
        G,
        [
          z,
          wo
        ],
        [
          D,
          _r
        ]
      ],
      [
        /(homepod).+mac os/i
      ],
      [
        G,
        [
          z,
          Wi
        ],
        [
          D,
          _r
        ]
      ],
      [
        /windows iot/i
      ],
      [
        [
          D,
          _r
        ]
      ],
      [
        /droid.+; ([\w- ]+) (4k|android|smart|google)[- ]?tv/i
      ],
      [
        G,
        [
          D,
          ht
        ]
      ],
      [
        /\b((4k|android|smart|opera)[- ]?tv|tv; rv:|large screen[\w ]+safari)\b/i
      ],
      [
        [
          D,
          ht
        ]
      ],
      [
        /droid .+?; ([^;]+?)(?: bui|; wv\)|\) applew|; hmsc).+?(mobile|vr|\d) safari/i
      ],
      [
        G,
        [
          D,
          cn,
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
        G,
        [
          z,
          "Generic"
        ]
      ]
    ],
    engine: [
      [
        /windows.+ edge\/([\w\.]+)/i
      ],
      [
        $,
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
        $
      ],
      [
        /webkit\/537\.36.+chrome\/(?!27)([\w\.]+)/i
      ],
      [
        $,
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
        $
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
        $,
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
          $,
          cn,
          Cc
        ]
      ],
      [
        /(windows (?:phone|mobile|iot))(?: os)?[\/ ]?([\d\.]*( se)?)/i,
        /(windows)[\/ ](1[01]|2000|3\.1|7|8(\.1)?|9[58]|me|server 20\d\d( r2)?|vista|xp)/i
      ],
      [
        W,
        $
      ],
      [
        /windows nt ?([\d\.\)]*)(?!.+xbox)/i,
        /\bwin(?=3| ?9|n)(?:nt| 9x )?([\d\.;]*)/i
      ],
      [
        [
          $,
          /(;|\))/g,
          "",
          cn,
          Cc
        ],
        [
          W,
          Ra
        ]
      ],
      [
        /(windows ce)\/?([\d\.]*)/i
      ],
      [
        W,
        $
      ],
      [
        /[adehimnop]{4,7}\b(?:.*os ([\w]+) like mac|; opera)/i,
        /(?:ios;fbsv|ios(?=.+ip(?:ad|hone)|.+apple ?tv)|ip(?:ad|hone)(?: |.+i(?:pad)?)os|apple ?tv.+ios)[\/ ]([\w\.]+)/i,
        /\btvos ?([\w\.]+)/i,
        /cfnetwork\/.+darwin/i
      ],
      [
        [
          $,
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
          $,
          /_/g,
          "."
        ]
      ],
      [
        /android ([\d\.]+).*crkey/i
      ],
      [
        $,
        [
          W,
          Xn + " Android"
        ]
      ],
      [
        /fuchsia.*crkey\/([\d\.]+)/i
      ],
      [
        $,
        [
          W,
          Xn + " Fuchsia"
        ]
      ],
      [
        /crkey\/([\d\.]+).*devicetype\/smartspeaker/i
      ],
      [
        $,
        [
          W,
          Xn + " SmartSpeaker"
        ]
      ],
      [
        /linux.*crkey\/([\d\.]+)/i
      ],
      [
        $,
        [
          W,
          Xn + " Linux"
        ]
      ],
      [
        /crkey\/([\d\.]+)/i
      ],
      [
        $,
        [
          W,
          Xn
        ]
      ],
      [
        /droid ([\w\.]+)\b.+(android[- ]x86)/i
      ],
      [
        $,
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
        $
      ],
      [
        /(harmonyos)[\/ ]?([\d\.]*)/i,
        /(android|bada|blackberry|kaios|maemo|meego|openharmony|qnx|rim tablet os|sailfish|series40|symbian|tizen)\w*[-\/\.; ]?([\d\.]*)/i
      ],
      [
        W,
        $
      ],
      [
        /\(bb(10);/i
      ],
      [
        $,
        [
          W,
          Tc
        ]
      ],
      [
        /(?:symbian ?os|symbos|s60(?=;)|series ?60)[-\/ ]?([\w\.]*)/i
      ],
      [
        $,
        [
          W,
          "Symbian"
        ]
      ],
      [
        /mozilla\/[\d\.]+ \((?:mobile|tablet|tv|mobile; [\w ]+); rv:.+ gecko\/([\w\.]+)/i
      ],
      [
        $,
        [
          W,
          br + " OS"
        ]
      ],
      [
        /\b(?:hp)?wos(?:browser)?\/([\w\.]+)/i,
        /webos(?:[ \/]?|\.tv-20(?=2[2-9]))(\d[\d\.]*)/i
      ],
      [
        $,
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
          $,
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
        $,
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
        $
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
        $
      ],
      [
        /(sunos) ?([\d\.]*)/i
      ],
      [
        [
          W,
          "Solaris"
        ],
        $
      ],
      [
        /\b(beos|os\/2|amigaos|openvms|hp-ux|serenityos)/i,
        /(unix) ?([\w\.]*)/i
      ],
      [
        W,
        $
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
          $,
          Yr,
          D
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
          D,
          G,
          z
        ]
      ],
      [
        un,
        [
          W,
          $
        ]
      ],
      [
        Yt,
        [
          W,
          $
        ]
      ]
    ]), jn.call(e.isIgnore, [
      [
        Wt,
        [
          $,
          Yr
        ]
      ],
      [
        un,
        [
          $
        ]
      ],
      [
        Yt,
        [
          $
        ]
      ]
    ]), jn.call(e.isIgnoreRgx, [
      [
        Wt,
        / ?browser$/i
      ],
      [
        Yt,
        / ?os$/i
      ]
    ]), jn.call(e.toString, [
      [
        Wt,
        [
          W,
          $
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
          z,
          G
        ]
      ],
      [
        un,
        [
          W,
          $
        ]
      ],
      [
        Yt,
        [
          W,
          $
        ]
      ]
    ]), e;
  })(), m0 = function(e, t) {
    var n = bo.init[t], i = bo.isIgnore[t] || 0, l = bo.isIgnoreRgx[t] || 0, c = bo.toString[t] || 0;
    function f() {
      jn.call(this, n);
    }
    return f.prototype.getItem = function() {
      return e;
    }, f.prototype.withClientHints = function() {
      return Ni ? Ni.getHighEntropyValues(Qf).then(function(h) {
        return e.setCH(new eh(h, false)).parseCH().get();
      }) : e.parseCH().get();
    }, f.prototype.withFeatureCheck = function() {
      return e.detectFeature().get();
    }, t != ir && (f.prototype.is = function(h) {
      var p = false;
      for (var v in this) if (this.hasOwnProperty(v) && !Ma(i, v) && ci(l ? or(l, this[v]) : this[v]) == ci(l ? or(l, h) : h)) {
        if (p = true, h != ut.UNDEFINED) break;
      } else if (h == ut.UNDEFINED && p) {
        p = !p;
        break;
      }
      return p;
    }, f.prototype.toString = function() {
      var h = nr;
      for (var p in c) typeof this[c[p]] !== ut.UNDEFINED && (h += (h ? " " : nr) + this[c[p]]);
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
        ta(e[wi])
      ],
      [
        ol,
        ta(e[s0])
      ],
      [
        Ae,
        /\?1/.test(e[u0])
      ],
      [
        G,
        Ir(e[f0])
      ],
      [
        rr,
        Ir(e[Xf])
      ],
      [
        sl,
        Ir(e[h0])
      ],
      [
        Lt,
        Ir(e[a0])
      ],
      [
        Mi,
        ta(e[c0])
      ],
      [
        _s,
        Ir(e[l0])
      ]
    ]);
    else for (var n in e) this.hasOwnProperty(n) && typeof e[n] !== ut.UNDEFINED && (this[n] = e[n]);
  }
  function di(e, t, n, i) {
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
        i
      ],
      [
        "rgxMap",
        n
      ],
      [
        "data",
        m0(this, e)
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
      case Wt:
        Ut.brave && typeof Ut.brave.isBrave == ut.FUNCTION && this.set(W, "Brave");
        break;
      case Tn:
        !this.get(D) && Ni && Ni[Ae] && this.set(D, Ae), this.get(G) == "Macintosh" && Ut && typeof Ut.standalone !== ut.UNDEFINED && Ut.maxTouchPoints && Ut.maxTouchPoints > 2 && this.set(G, "iPad").set(D, He);
        break;
      case Yt:
        !this.get(W) && Ni && Ni[rr] && this.set(W, Ni[rr]);
        break;
      case ir:
        var e = this.data, t = function(n) {
          return e[n].getItem().detectFeature().get();
        };
        this.set(Wt, t(Wt)).set(Wn, t(Wn)).set(Tn, t(Tn)).set(un, t(un)).set(Yt, t(Yt));
    }
    return this;
  };
  di.prototype.parseUA = function() {
    switch (this.itemType != ir && Pa.call(this.data, this.ua, this.rgxMap), this.itemType) {
      case Wt:
        this.set(Yr, Na(this.get($)));
        break;
      case Yt:
        if (this.get(W) == "iOS" && this.get($) == "18.6") {
          var e = /\) Version\/([\d\.]+)/.exec(this.ua);
          e && parseInt(e[1].substring(0, 2), 10) >= 26 && this.set($, e[1]);
        }
        break;
    }
    return this;
  };
  di.prototype.parseCH = function() {
    var e = this.uaCH, t = this.rgxMap;
    switch (this.itemType) {
      case Wt:
      case un:
        var n = e[ol] || e[rl], i;
        if (n) for (var l = 0; l < n.length; l++) {
          var c = n[l].brand || n[l], f = n[l].version;
          this.itemType == Wt && !/not.a.brand/i.test(c) && (!i || /Chrom/.test(i) && c != Nc || i == Mo && /WebView2/.test(c)) && (c = cn(c, g0), i = this.get(W), i && !/Chrom/.test(i) && /Chrom/.test(c) || this.set(W, c).set($, f).set(Yr, Na(f)), i = c), this.itemType == un && c == Nc && this.set($, f);
        }
        break;
      case Wn:
        var h = e[Lt];
        h && (h && e[_s] == "64" && (h += "64"), Pa.call(this.data, h + ";", t));
        break;
      case Tn:
        if (e[Ae] && this.set(D, Ae), e[G] && (this.set(G, e[G]), !this.get(D) || !this.get(z))) {
          var p = {};
          Pa.call(p, "droid 9; " + e[G] + ")", t), !this.get(D) && p.type && this.set(D, p.type), !this.get(z) && p.vendor && this.set(z, p.vendor);
        }
        if (e[Mi]) {
          var v;
          if (typeof e[Mi] != "string") for (var g = 0; !v && g < e[Mi].length; ) v = cn(e[Mi][g++], kc);
          else v = cn(e[Mi], kc);
          this.set(D, v);
        }
        break;
      case Yt:
        var T = e[rr];
        if (T) {
          var N = e[sl];
          T == Ra && (N = parseInt(Na(N), 10) >= 13 ? "11" : "10"), this.set(W, T).set($, N);
        }
        this.get(W) == Ra && e[G] == "Xbox" && this.set(W, "Xbox").set($, void 0);
        break;
      case ir:
        var R = this.data, F = function(C) {
          return R[C].getItem().setCH(e).parseCH().get();
        };
        this.set(Wt, F(Wt)).set(Wn, F(Wn)).set(Tn, F(Tn)).set(un, F(un)).set(Yt, F(Yt));
    }
    return this;
  };
  Hn = function(e, t, n) {
    if (typeof e === ut.OBJECT ? (qo(e, true) ? (typeof t === ut.OBJECT && (n = t), t = e) : (n = e, t = void 0), e = void 0) : typeof e === ut.STRING && !qo(t, true) && (n = t, t = void 0), n) if (typeof n.append === ut.FUNCTION) {
      var i = {};
      n.forEach(function(g, T) {
        i[String(T).toLowerCase()] = g;
      }), n = i;
    } else {
      var l = {};
      for (var c in n) n.hasOwnProperty(c) && (l[String(c).toLowerCase()] = n[c]);
      n = l;
    }
    if (!(this instanceof Hn)) return new Hn(e, t, n).getResult();
    var f = typeof e === ut.STRING ? e : n && n[vc] ? n[vc] : Ut && Ut.userAgent ? Ut.userAgent : nr, h = new eh(n, true), p = t ? p0(Lc, t) : Lc, v = function(g) {
      return g == ir ? function() {
        return new di(g, f, p, h).set("ua", f).set(Wt, this.getBrowser()).set(Wn, this.getCPU()).set(Tn, this.getDevice()).set(un, this.getEngine()).set(Yt, this.getOS()).get();
      } : function() {
        return new di(g, f, p[g], h).parseUA().get();
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
        v(Yt)
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
          return no(g) && (f = Ko(g, o0)), this;
        }
      ]
    ]).setUA(f), this;
  };
  Hn.VERSION = r0;
  Hn.BROWSER = Os([
    W,
    $,
    Yr,
    D
  ]);
  Hn.CPU = Os([
    Lt
  ]);
  Hn.DEVICE = Os([
    G,
    z,
    D,
    Ro,
    Ae,
    ht,
    He,
    bn,
    _r
  ]);
  Hn.ENGINE = Hn.OS = Os([
    W,
    $
  ]);
  var ct = ((e) => (e.TAURI = "tauri", e.WEB = "web", e.MOBILE_WEB = "mobile_web", e.UNKNOWN = "unknown", e))(ct || {});
  class w0 {
    constructor() {
      __publicField(this, "parser");
      const t = typeof navigator < "u" ? navigator.userAgent : "";
      this.parser = new Hn(t);
    }
    detectEnvironment() {
      return this.isTauriEnvironment() ? ct.TAURI : this.parser.getDevice().type === "mobile" ? ct.MOBILE_WEB : ct.WEB;
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
        case ct.TAURI:
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
        case ct.MOBILE_WEB:
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
        case ct.WEB:
        case ct.UNKNOWN:
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
        case ct.TAURI:
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
        case ct.MOBILE_WEB:
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
              enableHighAccuracy: true
            }
          };
        case ct.WEB:
        case ct.UNKNOWN:
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
        return !t.environment || !t.capabilities ? M(new xe("Invalid platform detection results")) : (console.info("[PlatformDetector] Platform detected:", {
          environment: t.environment,
          isMobile: t.isMobile,
          isTablet: t.isTablet,
          browser: t.browser,
          os: t.os
        }), j(true));
      } catch (t) {
        return M(new xe("Platform detection failed", void 0, t));
      }
    }
  }
  const al = new w0();
  pv = function() {
    return al.getPlatformContext();
  };
  function y0(e, t, n, i) {
    if (typeof t == "function" ? e !== t || !i : !t.has(e)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
    return n === "m" ? i : n === "a" ? i.call(e) : i ? i.value : t.get(e);
  }
  function b0(e, t, n, i, l) {
    if (typeof t == "function" ? e !== t || true : !t.has(e)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
    return t.set(e, n), n;
  }
  var No;
  function v0(e, t = false) {
    return window.__TAURI_INTERNALS__.transformCallback(e, t);
  }
  async function mt(e, t = {}, n) {
    return window.__TAURI_INTERNALS__.invoke(e, t, n);
  }
  class E0 {
    get rid() {
      return y0(this, No, "f");
    }
    constructor(t) {
      No.set(this, void 0), b0(this, No, t);
    }
    async close() {
      return mt("plugin:resources|close", {
        rid: this.rid
      });
    }
  }
  No = /* @__PURE__ */ new WeakMap();
  var Dc;
  (function(e) {
    e.WINDOW_RESIZED = "tauri://resize", e.WINDOW_MOVED = "tauri://move", e.WINDOW_CLOSE_REQUESTED = "tauri://close-requested", e.WINDOW_DESTROYED = "tauri://destroyed", e.WINDOW_FOCUS = "tauri://focus", e.WINDOW_BLUR = "tauri://blur", e.WINDOW_SCALE_FACTOR_CHANGED = "tauri://scale-change", e.WINDOW_THEME_CHANGED = "tauri://theme-changed", e.WINDOW_CREATED = "tauri://window-created", e.WEBVIEW_CREATED = "tauri://webview-created", e.DRAG_ENTER = "tauri://drag-enter", e.DRAG_OVER = "tauri://drag-over", e.DRAG_DROP = "tauri://drag-drop", e.DRAG_LEAVE = "tauri://drag-leave";
  })(Dc || (Dc = {}));
  async function I0(e, t) {
    window.__TAURI_EVENT_PLUGIN_INTERNALS__.unregisterListener(e, t), await mt("plugin:event|unlisten", {
      event: e,
      eventId: t
    });
  }
  async function xc(e, t, n) {
    var i;
    const l = (i = void 0) !== null && i !== void 0 ? i : {
      kind: "Any"
    };
    return mt("plugin:event|listen", {
      event: e,
      target: l,
      handler: v0(t)
    }).then((c) => async () => I0(e, c));
  }
  async function T0(e, t) {
    return await Yo.load(e, t);
  }
  class Yo extends E0 {
    constructor(t) {
      super(t);
    }
    static async load(t, n) {
      const i = await mt("plugin:store|load", {
        path: t,
        options: n
      });
      return new Yo(i);
    }
    static async get(t) {
      return await mt("plugin:store|get_store", {
        path: t
      }).then((n) => n ? new Yo(n) : null);
    }
    async set(t, n) {
      await mt("plugin:store|set", {
        rid: this.rid,
        key: t,
        value: n
      });
    }
    async get(t) {
      const [n, i] = await mt("plugin:store|get", {
        rid: this.rid,
        key: t
      });
      return i ? n : void 0;
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
      return await xc("store://change", (i) => {
        i.payload.resourceId === this.rid && i.payload.key === t && n(i.payload.exists ? i.payload.value : void 0);
      });
    }
    async onChange(t) {
      return await xc("store://change", (n) => {
        n.payload.resourceId === this.rid && t(n.payload.key, n.payload.exists ? n.payload.value : void 0);
      });
    }
  }
  class rt extends ur {
    constructor(t, n, i) {
      super(t, i);
      __publicField(this, "domain", to.STORAGE);
      this.code = n;
    }
  }
  var et = ((e) => (e.INITIALIZATION_FAILED = "INITIALIZATION_FAILED", e.NOT_INITIALIZED = "NOT_INITIALIZED", e.SET_FAILED = "SET_FAILED", e.GET_FAILED = "GET_FAILED", e.SAVE_FAILED = "SAVE_FAILED", e.EXPORT_FAILED = "EXPORT_FAILED", e.CLEAR_FAILED = "CLEAR_FAILED", e.REMOVE_FAILED = "REMOVE_FAILED", e))(et || {});
  class vt extends ur {
    constructor(t, n, i) {
      super(t, i);
      __publicField(this, "domain", to.GEOLOCATION);
      this.code = n;
    }
  }
  var lt = ((e) => (e.INITIALIZATION_FAILED = "INITIALIZATION_FAILED", e.NOT_INITIALIZED = "NOT_INITIALIZED", e.PERMISSION_DENIED = "PERMISSION_DENIED", e.POSITION_UNAVAILABLE = "POSITION_UNAVAILABLE", e.TIMEOUT = "TIMEOUT", e.UNSUPPORTED = "UNSUPPORTED", e.WATCH_FAILED = "WATCH_FAILED", e.CLEAR_WATCH_FAILED = "CLEAR_WATCH_FAILED", e))(lt || {});
  class Oi extends ur {
    constructor(t, n, i) {
      super(t, i);
      __publicField(this, "domain", to.GENERIC);
      this.code = n;
    }
  }
  var ni = ((e) => (e.DETECTION_FAILED = "DETECTION_FAILED", e.INVALID_CONTEXT = "INVALID_CONTEXT", e.UNSUPPORTED_PLATFORM = "UNSUPPORTED_PLATFORM", e.NOT_INITIALIZED = "NOT_INITIALIZED", e))(ni || {});
  class S0 {
    constructor(t = "user-data.json") {
      __publicField(this, "store", null);
      __publicField(this, "initialized", false);
      __publicField(this, "storePath");
      this.storePath = t;
    }
    async init() {
      if (this.initialized) return j(void 0);
      try {
        return this.store = await T0(this.storePath, {
          autoSave: false,
          defaults: {}
        }), this.initialized = true, j(void 0);
      } catch (t) {
        return M(new rt("Failed to initialize Tauri storage", et.INITIALIZATION_FAILED, t));
      }
    }
    async set(t, n) {
      if (!this.store) return M(new rt("Tauri store not initialized", et.NOT_INITIALIZED));
      try {
        return await this.store.set(t, n), j(void 0);
      } catch (i) {
        return M(new rt(`Failed to set value for key: ${t}`, et.SET_FAILED, i));
      }
    }
    async get(t) {
      if (!this.store) return M(new rt("Tauri store not initialized", et.NOT_INITIALIZED));
      try {
        const n = await this.store.get(t);
        return j(n ?? null);
      } catch (n) {
        return M(new rt(`Failed to get value for key: ${t}`, et.GET_FAILED, n));
      }
    }
    async save() {
      if (!this.store) return M(new rt("Tauri store not initialized", et.NOT_INITIALIZED));
      try {
        return await this.store.save(), j(void 0);
      } catch (t) {
        return M(new rt("Failed to save store", et.SAVE_FAILED, t));
      }
    }
    async exportToJson() {
      if (!this.store) return M(new rt("Tauri store not initialized", et.NOT_INITIALIZED));
      try {
        const t = await this.store.keys(), n = {};
        for (const i of t) {
          const l = await this.store.get(i);
          n[i] = l;
        }
        return j(JSON.stringify(n, null, 2));
      } catch (t) {
        return M(new rt("Failed to export data to JSON", et.EXPORT_FAILED, t));
      }
    }
    async clear() {
      if (!this.store) return M(new rt("Tauri store not initialized", et.NOT_INITIALIZED));
      try {
        const t = await this.store.keys();
        for (const n of t) await this.store.delete(n);
        return j(void 0);
      } catch (t) {
        return M(new rt("Failed to clear store", et.CLEAR_FAILED, t));
      }
    }
    async remove(t) {
      if (!this.store) return M(new rt("Tauri store not initialized", et.NOT_INITIALIZED));
      try {
        return await this.store.delete(t), j(void 0);
      } catch (n) {
        return M(new rt(`Failed to remove key: ${t}`, et.REMOVE_FAILED, n));
      }
    }
  }
  let _0, O0;
  na = {
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
  _0 = "trackmaker_settings";
  O0 = typeof window < "u" && window.__TAURI_INTERNALS__ !== void 0;
  function Bt(e) {
    try {
      if (typeof localStorage > "u") return na[e];
      const t = localStorage.getItem(_0);
      if (t !== null) return JSON.parse(t)[e] ?? na[e];
    } catch {
    }
    return na[e];
  }
  function Fc() {
    return Bt("debugMode");
  }
  function ll() {
    return Bt("gpsUpdateInterval");
  }
  function A0() {
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
  class R0 {
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
        const i = this.db.transaction(this.storeName, "readwrite"), c = i.objectStore(this.storeName).index("timestamp").openCursor(null, "prev"), f = 100;
        let h = 0;
        c.onsuccess = (p) => {
          const v = p.target.result;
          v && h < f && (v.delete(), h++, v.continue());
        }, i.oncomplete = () => t(), i.onerror = () => n(new Error("Failed to prune cache"));
      });
    }
    async init() {
      if (this.initialized) return j(void 0);
      try {
        return this.db = await this.openDatabase(), this.initialized = true, j(void 0);
      } catch (t) {
        return M(new rt("Failed to initialize Web storage", et.INITIALIZATION_FAILED, t));
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
      if (!this.db) return M(new rt("Database not initialized", et.NOT_INITIALIZED));
      try {
        return await this.shouldPruneCache() && await this.pruneCache(), await this.executeTransaction("readwrite", (i) => new Promise((l, c) => {
          const f = i.put(qf(n), t);
          f.onsuccess = () => l(), f.onerror = () => c(new Error("Failed to set value"));
        })), j(void 0);
      } catch (i) {
        return M(new rt(`Failed to set value for key: ${t}`, et.SET_FAILED, i));
      }
    }
    async get(t) {
      if (!this.db) return M(new rt("Database not initialized", et.NOT_INITIALIZED));
      try {
        const n = await this.executeTransaction("readonly", (i) => new Promise((l, c) => {
          const f = i.get(t);
          f.onsuccess = () => l(f.result), f.onerror = () => c(new Error("Failed to get value"));
        }));
        return j(n);
      } catch (n) {
        return M(new rt(`Failed to get value for key: ${t}`, et.GET_FAILED, n));
      }
    }
    async save() {
      return j(void 0);
    }
    async exportToJson() {
      if (!this.db) return M(new rt("Database not initialized", et.NOT_INITIALIZED));
      try {
        const t = await this.executeTransaction("readonly", (n) => new Promise((i, l) => {
          const c = n.getAll();
          c.onsuccess = () => {
            const h = c.result.reduce((p, v, g) => (p[g] = v, p), {});
            i(h);
          }, c.onerror = () => l(new Error("Failed to export data"));
        }));
        return j(JSON.stringify(t, null, 2));
      } catch (t) {
        return M(new rt("Failed to export data to JSON", et.EXPORT_FAILED, t));
      }
    }
    async clear() {
      if (!this.db) return M(new rt("Database not initialized", et.NOT_INITIALIZED));
      try {
        return await this.executeTransaction("readwrite", (t) => new Promise((n, i) => {
          const l = t.clear();
          l.onsuccess = () => n(), l.onerror = () => i(new Error("Failed to clear store"));
        })), j(void 0);
      } catch (t) {
        return M(new rt("Failed to clear store", et.CLEAR_FAILED, t));
      }
    }
    async remove(t) {
      if (!this.db) return M(new rt("Database not initialized", et.NOT_INITIALIZED));
      try {
        return await this.executeTransaction("readwrite", (n) => new Promise((i, l) => {
          const c = n.delete(t);
          c.onsuccess = () => i(), c.onerror = () => l(new Error("Failed to remove key"));
        })), j(void 0);
      } catch (n) {
        return M(new rt(`Failed to remove key: ${t}`, et.REMOVE_FAILED, n));
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
  class M0 {
    constructor(t = "get_geolocation") {
      __publicField(this, "initialized", false);
      __publicField(this, "tauriHandlerName");
      __publicField(this, "watchCallbacks", /* @__PURE__ */ new Map());
      this.tauriHandlerName = t;
    }
    async init(t) {
      if (this.initialized) return j(void 0);
      const n = await this.getPermissionStatus();
      if (n.isErr()) return M(n.error);
      if (n.value === "prompt" && t) {
        if (!await t(n.value, "permission.location.prompt")) return M(new vt("Geolocation permission denied", lt.PERMISSION_DENIED));
        const l = await this.getPermissionStatus();
        if (l.isErr()) return M(l.error);
        if (l.value === "denied") return M(new vt("Geolocation permission denied", lt.PERMISSION_DENIED));
      }
      try {
        return await this.injectTauriProvider(), this.initialized = true, j(void 0);
      } catch (i) {
        return M(new vt("Failed to initialize Tauri geolocation provider", lt.INITIALIZATION_FAILED, i));
      }
    }
    async injectTauriProvider() {
      if (navigator.geolocation.injected) return;
      const t = new N0(this.tauriHandlerName);
      navigator.geolocation.getCurrentPosition = t.getCurrentPosition.bind(t), navigator.geolocation.watchPosition = t.watchPosition.bind(t), navigator.geolocation.clearWatch = t.clearWatch.bind(t), navigator.geolocation.injected = true;
    }
    async getPermissionStatus() {
      try {
        if (!navigator.permissions) return await this.fallbackPermissionCheck();
        const t = await navigator.permissions.query({
          name: "geolocation"
        });
        return j(t.state);
      } catch (t) {
        return M(new vt("Failed to get permission status", lt.PERMISSION_DENIED, t));
      }
    }
    async fallbackPermissionCheck() {
      return new Promise((t) => {
        navigator.geolocation.getCurrentPosition(() => t(j("granted")), (n) => {
          n.code === n.PERMISSION_DENIED ? t(j("denied")) : t(j("prompt"));
        }, {
          timeout: 5e3,
          maximumAge: 1 / 0,
          enableHighAccuracy: true
        });
      });
    }
    async requestPermission() {
      try {
        return await this.getCurrentPosition(), j("granted");
      } catch (t) {
        return this.isPositionError(t) && t.code === t.PERMISSION_DENIED ? j("denied") : M(new vt("Failed to request permission", lt.PERMISSION_DENIED, t));
      }
    }
    async getCurrentPosition() {
      try {
        const t = await this.locateTauri();
        return j(this.convertToGeolocationPosition(t));
      } catch (t) {
        return M(new vt("Failed to get current position", lt.POSITION_UNAVAILABLE, t));
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
    async watchPosition(t, n) {
      try {
        const i = ll(), l = (n == null ? void 0 : n.highFrequency) ?? false, c = window.setInterval(async () => {
          try {
            const f = await this.getCurrentPosition();
            f.isOk() && t(f.value);
          } catch (f) {
            console.error("Error in watch position:", f);
          }
        }, l ? 100 : i);
        return this.watchCallbacks.set(c, c), j(c);
      } catch (i) {
        return M(new vt("Failed to start watching position", lt.WATCH_FAILED, i));
      }
    }
    clearWatch(t) {
      try {
        return this.watchCallbacks.has(t) && (clearInterval(t), this.watchCallbacks.delete(t)), j(void 0);
      } catch (n) {
        return M(new vt("Failed to clear watch", lt.CLEAR_WATCH_FAILED, n));
      }
    }
    isSupported() {
      return false;
    }
    isPositionError(t) {
      return typeof t == "object" && t !== null && "code" in t && "message" in t && typeof t.code == "number";
    }
  }
  class N0 {
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
      const l = ll(), c = (i == null ? void 0 : i.highFrequency) ?? false;
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
  class P0 {
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
      if (this.initialized) return j(void 0);
      if (this.initPromise) return this.initPromise;
      this.initPromise = this.doInit(t);
      const n = await this.initPromise;
      return n.isErr() && (this.initPromise = null), n;
    }
    async doInit(t) {
      if (this.initialized) return j(void 0);
      if (!this.isSupported()) return M(new vt("Geolocation is not supported by this browser", lt.UNSUPPORTED));
      const n = await this.getPermissionStatus();
      if (n.isErr()) return M(n.error);
      if (n.value === "prompt" && t) {
        if (!await t(n.value, "permission.location.prompt")) return M(new vt("Geolocation permission denied", lt.PERMISSION_DENIED));
        const l = await this.getPermissionStatus();
        if (l.isErr()) return M(l.error);
        if (l.value === "denied") return M(new vt("Geolocation permission denied", lt.PERMISSION_DENIED));
      }
      return this.initialized = true, j(void 0);
    }
    async getPermissionStatus() {
      if (!navigator.permissions) return this.fallbackPermissionCheck();
      try {
        const t = await navigator.permissions.query({
          name: "geolocation"
        });
        return j(t.state);
      } catch (t) {
        return M(new vt("Failed to get permission status", lt.PERMISSION_DENIED, t));
      }
    }
    async fallbackPermissionCheck() {
      return new Promise((t) => {
        navigator.geolocation.getCurrentPosition(() => t(j("granted")), (n) => {
          n.code === n.PERMISSION_DENIED ? t(j("denied")) : t(j("prompt"));
        }, {
          timeout: 5e3,
          maximumAge: 1 / 0,
          enableHighAccuracy: true
        });
      });
    }
    async requestPermission() {
      try {
        return (await this.getCurrentPosition()).isOk() ? j("granted") : j("denied");
      } catch (t) {
        return this.isPositionError(t) ? t.code === t.PERMISSION_DENIED ? j("denied") : j("prompt") : M(new vt("Failed to request permission", lt.PERMISSION_DENIED, t));
      }
    }
    async getCurrentPosition() {
      if (!this.initialized) {
        const t = await this.init();
        if (t.isErr()) return M(t.error);
      }
      return new Promise((t) => {
        navigator.geolocation.getCurrentPosition((n) => {
          t(j(n));
        }, (n) => {
          let i;
          const l = n.message;
          switch (n.code) {
            case n.PERMISSION_DENIED:
              i = lt.PERMISSION_DENIED;
              break;
            case n.POSITION_UNAVAILABLE:
              i = lt.POSITION_UNAVAILABLE;
              break;
            case n.TIMEOUT:
              i = lt.TIMEOUT;
              break;
            default:
              i = lt.POSITION_UNAVAILABLE;
          }
          t(M(new vt(l, i, new Error(n.message))));
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
        if (f.isErr()) return M(f.error);
      }
      const i = ll(), l = Bt("watchCompatibilityMode"), c = (n == null ? void 0 : n.highFrequency) ?? false;
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
              }, g = Date.now();
              if (!(!c && g - this.lastCompatibilityUpdateTime > i) && !c && this.lastCompatibilityPosition && this.lastCompatibilityPosition.lat === v.lat && this.lastCompatibilityPosition.lng === v.lng && this.lastCompatibilityPosition.acc === v.acc) return;
              this.lastCompatibilityPosition = v;
              for (const N of this.compatibilityModeCallbacks.values()) try {
                N(p);
              } catch (R) {
                console.error("[Geolocation] Callback error:", R);
              }
              this.lastCompatibilityUpdateTime = g;
            }
          }, c ? 100 : i)), this.compatibilityModeWatches.set(f, this.compatibilityIntervalId), j(f);
        } catch (f) {
          return M(new vt("Failed to start watching position (compatibility mode)", lt.WATCH_FAILED, f));
        }
      }
      try {
        const f = navigator.geolocation.watchPosition(t, (h) => {
          console.error("Geolocation watch error:", h);
        }, {
          enableHighAccuracy: true,
          timeout: 3e4,
          maximumAge: c ? 0 : i
        });
        return j(f);
      } catch (f) {
        return M(new vt("Failed to start watching position", lt.WATCH_FAILED, f));
      }
    }
    clearWatch(t) {
      try {
        return this.compatibilityModeWatches.has(t) ? (this.compatibilityModeCallbacks.delete(t), this.compatibilityModeWatches.delete(t), this.compatibilityModeCallbacks.size === 0 && this.compatibilityIntervalId !== null && (window.clearInterval(this.compatibilityIntervalId), this.compatibilityIntervalId = null, this.lastCompatibilityPosition = null)) : navigator.geolocation.clearWatch(t), j(void 0);
      } catch (n) {
        return M(new vt("Failed to clear watch", lt.CLEAR_WATCH_FAILED, n));
      }
    }
    isSupported() {
      return "geolocation" in navigator;
    }
    isPositionError(t) {
      return typeof t == "object" && t !== null && "code" in t && "message" in t && typeof t.code == "number";
    }
  }
  class C0 {
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
      if (this.initialized) return j(void 0);
      if (this.initPromise) return this.initPromise;
      this.initPromise = this.doInit(t);
      const n = await this.initPromise;
      return n.isErr() && (this.initPromise = null), n;
    }
    async doInit(t) {
      if (this.disposed) return M(new xe("Device orientation provider has been disposed"));
      const n = await this.requestPermissionIfNeeded(t);
      return n.isErr() ? M(n.error) : await this.checkHardwareSupport() ? (this.initialized = true, j(void 0)) : M(new xe("Device orientation is not supported by this browser"));
    }
    async requestPermissionIfNeeded(t) {
      try {
        if (typeof DeviceOrientationEvent < "u" && typeof DeviceOrientationEvent.requestPermission == "function") {
          let n = "prompt";
          try {
            n = await DeviceOrientationEvent.requestPermission();
          } catch {
          }
          if (t && n === "prompt") {
            if (!await t("prompt", "permission.device-orientation.required")) return M(new xe("User declined to grant device orientation permission"));
            if (await DeviceOrientationEvent.requestPermission() !== "granted") return M(new xe("Device orientation permission denied"));
          } else return n === "denied" ? M(new xe("Device orientation permission denied")) : j(void 0);
        }
        return j(void 0);
      } catch (n) {
        return M(new xe("Failed to request device orientation permission", void 0, n));
      }
    }
    async checkHardwareSupport() {
      return "DeviceOrientationEvent" in window ? new Promise((t) => {
        let n = false;
        const i = () => {
          window.removeEventListener("deviceorientation", f);
        }, l = () => {
          n || (n = true, i(), t(true));
        }, c = () => {
          n || (n = true, i(), t(false));
        }, f = (h) => {
          (h.alpha !== null || h.beta !== null || h.gamma !== null) && l();
        };
        window.addEventListener("deviceorientation", f), setTimeout(c, 1e3);
      }) : false;
    }
    async start() {
      if (this.disposed) return M(new xe("Device orientation provider has been disposed"));
      if (!this.initialized) {
        const t = await this.init();
        if (t.isErr()) return M(t.error);
      }
      if (this.isWatching) return j(void 0);
      try {
        return this.orientationEventListenerCount === 0 && window.addEventListener("deviceorientation", this.boundHandleOrientationEvent, true), this.orientationEventListenerCount++, this.isWatching = true, j(void 0);
      } catch (t) {
        return M(new xe("Failed to start device orientation", void 0, t));
      }
    }
    stop() {
      if (!this.isWatching) return j(void 0);
      try {
        return this.orientationEventListenerCount--, this.isWatching = false, this.lastReading = null, this.orientationEventListenerCount === 0 && window.removeEventListener("deviceorientation", this.boundHandleOrientationEvent, true), j(void 0);
      } catch (t) {
        return M(new xe("Failed to stop device orientation", void 0, t));
      }
    }
    async getCurrentOrientation() {
      if (this.disposed) return M(new xe("Device orientation provider has been disposed"));
      if (!this.initialized) {
        const t = await this.init();
        if (t.isErr()) return M(t.error);
      }
      return j(this.lastReading);
    }
    onOrientationChange(t) {
      const n = this.nextListenerId++;
      return this.listeners.set(n, t), this.lastReading && t(this.lastReading), n;
    }
    removeEventListener(t) {
      return this.listeners.delete(t), j(void 0);
    }
    dispose() {
      this.disposed || (this.disposed = true, this.stop(), this.listeners.clear(), this.initialized = false, this.initPromise = null, this.lastReading = null);
    }
    handleOrientationEvent(t) {
      if (t.alpha === null && t.beta === null && t.gamma === null) return;
      const n = {
        alpha: t.alpha ?? 0,
        beta: t.beta ?? 0,
        gamma: t.gamma ?? 0,
        webkitCompassHeading: t.webkitCompassHeading,
        timestamp: t.timeStamp || performance.now()
      };
      this.lastReading = n;
      for (const i of this.listeners.values()) try {
        i(n);
      } catch (l) {
        console.error("Error in device orientation callback:", l);
      }
    }
  }
  k0 = function(e) {
    return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
  };
  function th(e) {
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
  var Ne = {};
  const L0 = Object.prototype.toString;
  function Jr(e) {
    const t = L0.call(e);
    return t.endsWith("Array]") && !t.includes("Big");
  }
  const D0 = Object.freeze(Object.defineProperty({
    __proto__: null,
    isAnyArray: Jr
  }, Symbol.toStringTag, {
    value: "Module"
  })), x0 = th(D0);
  function F0(e) {
    var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
    if (!Jr(e)) throw new TypeError("input must be an array");
    if (e.length === 0) throw new TypeError("input must not be empty");
    var n = t.fromIndex, i = n === void 0 ? 0 : n, l = t.toIndex, c = l === void 0 ? e.length : l;
    if (i < 0 || i >= e.length || !Number.isInteger(i)) throw new Error("fromIndex must be a positive integer smaller than length");
    if (c <= i || c > e.length || !Number.isInteger(c)) throw new Error("toIndex must be an integer greater than fromIndex and at most equal to length");
    for (var f = e[i], h = i + 1; h < c; h++) e[h] > f && (f = e[h]);
    return f;
  }
  function j0(e) {
    var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
    if (!Jr(e)) throw new TypeError("input must be an array");
    if (e.length === 0) throw new TypeError("input must not be empty");
    var n = t.fromIndex, i = n === void 0 ? 0 : n, l = t.toIndex, c = l === void 0 ? e.length : l;
    if (i < 0 || i >= e.length || !Number.isInteger(i)) throw new Error("fromIndex must be a positive integer smaller than length");
    if (c <= i || c > e.length || !Number.isInteger(c)) throw new Error("toIndex must be an integer greater than fromIndex and at most equal to length");
    for (var f = e[i], h = i + 1; h < c; h++) e[h] < f && (f = e[h]);
    return f;
  }
  function U0(e) {
    var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
    if (Jr(e)) {
      if (e.length === 0) throw new TypeError("input must not be empty");
    } else throw new TypeError("input must be an array");
    var n;
    if (t.output !== void 0) {
      if (!Jr(t.output)) throw new TypeError("output option must be an array if specified");
      n = t.output;
    } else n = new Array(e.length);
    var i = j0(e), l = F0(e);
    if (i === l) throw new RangeError("minimum and maximum input values are equal. Cannot rescale a constant array");
    var c = t.min, f = c === void 0 ? t.autoMinMax ? i : 0 : c, h = t.max, p = h === void 0 ? t.autoMinMax ? l : 1 : h;
    if (f >= p) throw new RangeError("min option must be smaller than max option");
    for (var v = (p - f) / (l - i), g = 0; g < e.length; g++) n[g] = (e[g] - i) * v + f;
    return n;
  }
  const G0 = Object.freeze(Object.defineProperty({
    __proto__: null,
    default: U0
  }, Symbol.toStringTag, {
    value: "Module"
  })), W0 = th(G0);
  var jc;
  function B0() {
    var _oe_instances, e_fn, _e2;
    if (jc) return Ne;
    jc = 1, Object.defineProperty(Ne, "__esModule", {
      value: true
    });
    var e = x0, t = W0;
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
        e: for (let A = 0; A < w; A++) for (let E = 0; E < y; E++) if (d.get(A, E) < 0) {
          a = true;
          break e;
        }
      }
      for (let A = 0; A < w; A++) {
        let E = [];
        for (let k = 0; k < y; k++) E.push(h(d.get(A, k), r, a));
        b.push(`${E.join(" ")}`);
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
    function T(d, o, s) {
      let r = s ? d.columns : d.columns - 1;
      if (o < 0 || o > r) throw new RangeError("Column index out of range");
    }
    function N(d, o) {
      if (o.to1DArray && (o = o.to1DArray()), o.length !== d.columns) throw new RangeError("vector size must be the same as the number of columns");
      return o;
    }
    function R(d, o) {
      if (o.to1DArray && (o = o.to1DArray()), o.length !== d.rows) throw new RangeError("vector size must be the same as the number of rows");
      return o;
    }
    function F(d, o) {
      if (!e.isAnyArray(o)) throw new TypeError("row indices must be an array");
      for (let s = 0; s < o.length; s++) if (o[s] < 0 || o[s] >= d.rows) throw new RangeError("row indices are out of range");
    }
    function C(d, o) {
      if (!e.isAnyArray(o)) throw new TypeError("column indices must be an array");
      for (let s = 0; s < o.length; s++) if (o[s] < 0 || o[s] >= d.columns) throw new RangeError("column indices are out of range");
    }
    function he(d, o, s, r, a) {
      if (arguments.length !== 5) throw new RangeError("expected 4 arguments");
      if (H("startRow", o), H("endRow", s), H("startColumn", r), H("endColumn", a), o > s || r > a || o < 0 || o >= d.rows || s < 0 || s >= d.rows || r < 0 || r >= d.columns || a < 0 || a >= d.columns) throw new RangeError("Submatrix indices are out of range");
    }
    function ne(d, o = 0) {
      let s = [];
      for (let r = 0; r < d; r++) s.push(o);
      return s;
    }
    function H(d, o) {
      if (typeof o != "number") throw new TypeError(`${d} must be a number`);
    }
    function Y(d) {
      if (d.isEmpty()) throw new Error("Empty matrix has no elements to index");
    }
    function U(d) {
      let o = ne(d.rows);
      for (let s = 0; s < d.rows; ++s) for (let r = 0; r < d.columns; ++r) o[s] += d.get(s, r);
      return o;
    }
    function ue(d) {
      let o = ne(d.columns);
      for (let s = 0; s < d.rows; ++s) for (let r = 0; r < d.columns; ++r) o[r] += d.get(s, r);
      return o;
    }
    function ge(d) {
      let o = 0;
      for (let s = 0; s < d.rows; s++) for (let r = 0; r < d.columns; r++) o += d.get(s, r);
      return o;
    }
    function re(d) {
      let o = ne(d.rows, 1);
      for (let s = 0; s < d.rows; ++s) for (let r = 0; r < d.columns; ++r) o[s] *= d.get(s, r);
      return o;
    }
    function fe(d) {
      let o = ne(d.columns, 1);
      for (let s = 0; s < d.rows; ++s) for (let r = 0; r < d.columns; ++r) o[r] *= d.get(s, r);
      return o;
    }
    function te(d) {
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
    function Re(d, o, s) {
      const r = d.rows, a = d.columns, u = [];
      for (let m = 0; m < a; m++) {
        let w = 0, y = 0, b = 0;
        for (let A = 0; A < r; A++) b = d.get(A, m) - s[m], w += b, y += b * b;
        o ? u.push((y - w * w / r) / (r - 1)) : u.push((y - w * w / r) / r);
      }
      return u;
    }
    function de(d, o, s) {
      const r = d.rows, a = d.columns, u = r * a;
      let m = 0, w = 0, y = 0;
      for (let b = 0; b < r; b++) for (let A = 0; A < a; A++) y = d.get(b, A) - s, m += y, w += y * y;
      return o ? (w - m * m / u) / (u - 1) : (w - m * m / u) / u;
    }
    function Ge(d, o) {
      for (let s = 0; s < d.rows; s++) for (let r = 0; r < d.columns; r++) d.set(s, r, d.get(s, r) - o[s]);
    }
    function ft(d, o) {
      for (let s = 0; s < d.rows; s++) for (let r = 0; r < d.columns; r++) d.set(s, r, d.get(s, r) - o[r]);
    }
    function zt(d, o) {
      for (let s = 0; s < d.rows; s++) for (let r = 0; r < d.columns; r++) d.set(s, r, d.get(s, r) - o);
    }
    function Ye(d) {
      const o = [];
      for (let s = 0; s < d.rows; s++) {
        let r = 0;
        for (let a = 0; a < d.columns; a++) r += d.get(s, a) ** 2 / (d.columns - 1);
        o.push(Math.sqrt(r));
      }
      return o;
    }
    function Pe(d, o) {
      for (let s = 0; s < d.rows; s++) for (let r = 0; r < d.columns; r++) d.set(s, r, d.get(s, r) / o[s]);
    }
    function Ve(d) {
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
    function ji(d) {
      const o = d.size - 1;
      let s = 0;
      for (let r = 0; r < d.columns; r++) for (let a = 0; a < d.rows; a++) s += d.get(a, r) ** 2 / o;
      return Math.sqrt(s);
    }
    function On(d, o) {
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
          let E = a + Math.round(m() * w);
          y.set(b, A, E);
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
        g(this, o), s = N(this, s);
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
        T(this, o);
        let s = [];
        for (let r = 0; r < this.rows; r++) s.push(this.get(r, o));
        return s;
      }
      getColumnVector(o) {
        return oe.columnVector(this.getColumn(o));
      }
      setColumn(o, s) {
        T(this, o), s = R(this, s);
        for (let r = 0; r < this.rows; r++) this.set(r, o, s[r]);
        return this;
      }
      swapColumns(o, s) {
        T(this, o), T(this, s);
        for (let r = 0; r < this.rows; r++) {
          let a = this.get(r, o);
          this.set(r, o, this.get(r, s)), this.set(r, s, a);
        }
        return this;
      }
      addRowVector(o) {
        o = N(this, o);
        for (let s = 0; s < this.rows; s++) for (let r = 0; r < this.columns; r++) this.set(s, r, this.get(s, r) + o[r]);
        return this;
      }
      subRowVector(o) {
        o = N(this, o);
        for (let s = 0; s < this.rows; s++) for (let r = 0; r < this.columns; r++) this.set(s, r, this.get(s, r) - o[r]);
        return this;
      }
      mulRowVector(o) {
        o = N(this, o);
        for (let s = 0; s < this.rows; s++) for (let r = 0; r < this.columns; r++) this.set(s, r, this.get(s, r) * o[r]);
        return this;
      }
      divRowVector(o) {
        o = N(this, o);
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
        g(this, o);
        for (let r = 0; r < this.columns; r++) this.set(o, r, this.get(o, r) * s);
        return this;
      }
      mulColumn(o, s) {
        T(this, o);
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
        Y(this);
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
        Y(this);
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
        g(this, o), Y(this);
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
        g(this, o), Y(this);
        let s = this.get(o, 0), r = [
          o,
          0
        ];
        for (let a = 1; a < this.columns; a++) this.get(o, a) < s && (s = this.get(o, a), r[1] = a);
        return r;
      }
      maxColumn(o) {
        if (T(this, o), this.isEmpty()) return NaN;
        let s = this.get(0, o);
        for (let r = 1; r < this.rows; r++) this.get(r, o) > s && (s = this.get(r, o));
        return s;
      }
      maxColumnIndex(o) {
        T(this, o), Y(this);
        let s = this.get(0, o), r = [
          0,
          o
        ];
        for (let a = 1; a < this.rows; a++) this.get(a, o) > s && (s = this.get(a, o), r[0] = a);
        return r;
      }
      minColumn(o) {
        if (T(this, o), this.isEmpty()) return NaN;
        let s = this.get(0, o);
        for (let r = 1; r < this.rows; r++) this.get(r, o) < s && (s = this.get(r, o));
        return s;
      }
      minColumnIndex(o) {
        T(this, o), Y(this);
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
        const r = this.get(0, 0), a = o.get(0, 0), u = this.get(0, 1), m = o.get(0, 1), w = this.get(1, 0), y = o.get(1, 0), b = this.get(1, 1), A = o.get(1, 1), E = (r + b) * (a + A), k = (w + b) * a, ee = r * (m - A), P = b * (y - a), x = (r + u) * A, le = (w - r) * (a + m), S = (u - b) * (y + A), Q = E + P - x + S, pe = ee + x, Se = k + P, Oe = E - k + ee + le;
        return s.set(0, 0, Q), s.set(0, 1, pe), s.set(1, 0, Se), s.set(1, 1, Oe), s;
      }
      strassen3x3(o) {
        o = oe.checkMatrix(o);
        let s = new oe(3, 3);
        const r = this.get(0, 0), a = this.get(0, 1), u = this.get(0, 2), m = this.get(1, 0), w = this.get(1, 1), y = this.get(1, 2), b = this.get(2, 0), A = this.get(2, 1), E = this.get(2, 2), k = o.get(0, 0), ee = o.get(0, 1), P = o.get(0, 2), x = o.get(1, 0), le = o.get(1, 1), S = o.get(1, 2), Q = o.get(2, 0), pe = o.get(2, 1), Se = o.get(2, 2), Oe = (r + a + u - m - w - A - E) * le, tt = (r - m) * (-ee + le), be = w * (-k + ee + x - le - S - Q + Se), Ee = (-r + m + w) * (k - ee + le), qe = (m + w) * (-k + ee), _ = r * k, B = (-r + b + A) * (k - P + S), ce = (-r + b) * (P - S), Z = (b + A) * (-k + P), nt = (r + a + u - w - y - b - A) * S, $e = A * (-k + P + x - le - S - Q + pe), Xe = (-u + A + E) * (le + Q - pe), it = (u - E) * (le - pe), yt = u * Q, sn = (A + E) * (-Q + pe), pt = (-u + w + y) * (S + Q - Se), gn = (u - y) * (S - Se), Rn = (w + y) * (-Q + Se), Le = a * x, bt = y * pe, Vt = m * P, Ht = b * ee, gt = E * Se, bh = _ + yt + Le, vh = Oe + Ee + qe + _ + Xe + yt + sn, Eh = _ + B + Z + nt + yt + pt + Rn, Ih = tt + be + Ee + _ + yt + pt + gn, Th = tt + Ee + qe + _ + bt, Sh = yt + pt + gn + Rn + Vt, _h = _ + B + ce + $e + Xe + it + yt, Oh = Xe + it + yt + sn + Ht, Ah = _ + B + ce + Z + gt;
        return s.set(0, 0, bh), s.set(0, 1, vh), s.set(0, 2, Eh), s.set(1, 0, Ih), s.set(1, 1, Th), s.set(1, 2, Sh), s.set(2, 0, _h), s.set(2, 1, Oh), s.set(2, 2, Ah), s;
      }
      mmulStrassen(o) {
        o = oe.checkMatrix(o);
        let s = this.clone(), r = s.rows, a = s.columns, u = o.rows, m = o.columns;
        a !== u && console.warn(`Multiplying ${r} x ${a} and ${u} x ${m} matrix: dimensions do not match.`);
        function w(E, k, ee) {
          let P = E.rows, x = E.columns;
          if (P === k && x === ee) return E;
          {
            let le = ve.zeros(k, ee);
            return le = le.setSubMatrix(E, 0, 0), le;
          }
        }
        let y = Math.max(r, u), b = Math.max(a, m);
        s = w(s, y, b), o = w(o, y, b);
        function A(E, k, ee, P) {
          if (ee <= 512 || P <= 512) return E.mmul(k);
          ee % 2 === 1 && P % 2 === 1 ? (E = w(E, ee + 1, P + 1), k = w(k, ee + 1, P + 1)) : ee % 2 === 1 ? (E = w(E, ee + 1, P), k = w(k, ee + 1, P)) : P % 2 === 1 && (E = w(E, ee, P + 1), k = w(k, ee, P + 1));
          let x = parseInt(E.rows / 2, 10), le = parseInt(E.columns / 2, 10), S = E.subMatrix(0, x - 1, 0, le - 1), Q = k.subMatrix(0, x - 1, 0, le - 1), pe = E.subMatrix(0, x - 1, le, E.columns - 1), Se = k.subMatrix(0, x - 1, le, k.columns - 1), Oe = E.subMatrix(x, E.rows - 1, 0, le - 1), tt = k.subMatrix(x, k.rows - 1, 0, le - 1), be = E.subMatrix(x, E.rows - 1, le, E.columns - 1), Ee = k.subMatrix(x, k.rows - 1, le, k.columns - 1), qe = A(ve.add(S, be), ve.add(Q, Ee), x, le), _ = A(ve.add(Oe, be), Q, x, le), B = A(S, ve.sub(Se, Ee), x, le), ce = A(be, ve.sub(tt, Q), x, le), Z = A(ve.add(S, pe), Ee, x, le), nt = A(ve.sub(Oe, S), ve.add(Q, Se), x, le), $e = A(ve.sub(pe, be), ve.add(tt, Ee), x, le), Xe = ve.add(qe, ce);
          Xe.sub(Z), Xe.add($e);
          let it = ve.add(B, Z), yt = ve.add(_, ce), sn = ve.sub(qe, _);
          sn.add(B), sn.add(nt);
          let pt = ve.zeros(2 * Xe.rows, 2 * Xe.columns);
          return pt = pt.setSubMatrix(Xe, 0, 0), pt = pt.setSubMatrix(it, Xe.rows, 0), pt = pt.setSubMatrix(yt, 0, Xe.columns), pt = pt.setSubMatrix(sn, Xe.rows, Xe.columns), pt.subMatrix(0, ee - 1, 0, P - 1);
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
      sortRows(o = fr) {
        for (let s = 0; s < this.rows; s++) this.setRow(s, this.getRow(s).sort(o));
        return this;
      }
      sortColumns(o = fr) {
        for (let s = 0; s < this.columns; s++) this.setColumn(s, this.getColumn(s).sort(o));
        return this;
      }
      subMatrix(o, s, r, a) {
        he(this, o, s, r, a);
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
        he(this, s, a, r, u);
        for (let m = 0; m < o.rows; m++) for (let w = 0; w < o.columns; w++) this.set(s + m, r + w, o.get(m, w));
        return this;
      }
      selection(o, s) {
        F(this, o), C(this, s);
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
            return U(this);
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
            return re(this);
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
            return Re(this, r, a);
          }
          case void 0: {
            if (typeof a != "number") throw new TypeError("mean must be a number");
            return de(this, r, a);
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
            return Ge(this, r), this;
          }
          case "column": {
            if (!e.isAnyArray(r)) throw new TypeError("center must be an array");
            return ft(this, r), this;
          }
          case void 0: {
            if (typeof r != "number") throw new TypeError("center must be a number");
            return zt(this, r), this;
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
            if (r === void 0) r = Ye(this);
            else if (!e.isAnyArray(r)) throw new TypeError("scale must be an array");
            return Pe(this, r), this;
          }
          case "column": {
            if (r === void 0) r = Ve(this);
            else if (!e.isAnyArray(r)) throw new TypeError("scale must be an array");
            return _n(this, r), this;
          }
          case void 0: {
            if (r === void 0) r = ji(this);
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
    ve.prototype.klass = "Matrix", typeof Symbol < "u" && (ve.prototype[/* @__PURE__ */ Symbol.for("nodejs.util.inspect.custom")] = l);
    function fr(d, o) {
      return d - o;
    }
    function Cs(d) {
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
            if (!Cs(r[a])) throw new TypeError("Input data contains non-numeric values");
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
        return s === void 0 && (s = o, o = this.rows), g(this, o, true), s = Float64Array.from(N(this, s)), this.data.splice(o, 0, s), this.rows += 1, this;
      }
      removeColumn(o) {
        T(this, o);
        for (let s = 0; s < this.rows; s++) {
          const r = new Float64Array(this.columns - 1);
          for (let a = 0; a < o; a++) r[a] = this.data[s][a];
          for (let a = o + 1; a < this.columns; a++) r[a - 1] = this.data[s][a];
          this.data[s] = r;
        }
        return this.columns -= 1, this;
      }
      addColumn(o, s) {
        typeof s > "u" && (s = o, o = this.columns), T(this, o, true), s = R(this, s);
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
    const _Ft = class _Ft extends ve {
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
        const o = new _Ft(this.diagonalSize);
        for (const [s, r, a] of this.upperRightEntries()) o.set(s, r, a);
        return o;
      }
      toMatrix() {
        return new oe(this);
      }
      get(o, s) {
        return __privateGet(this, _e2).get(o, s);
      }
      set(o, s, r) {
        return __privateGet(this, _e2).set(o, s, r), __privateGet(this, _e2).set(s, o, r), this;
      }
      removeCross(o) {
        return __privateGet(this, _e2).removeRow(o), __privateGet(this, _e2).removeColumn(o), this;
      }
      addCross(o, s) {
        s === void 0 && (s = o, o = this.diagonalSize);
        const r = s.slice();
        return r.splice(o, 1), __privateGet(this, _e2).addRow(o, r), __privateGet(this, _e2).addColumn(o, s), this;
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
        const a = new _Ft(r);
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
    _e2 = new WeakMap();
    let Ft = _Ft;
    Ft.prototype.klassType = "SymmetricMatrix";
    class An extends Ft {
      static isDistanceMatrix(o) {
        return Ft.isSymmetricMatrix(o) && o.klassSubType === "DistanceMatrix";
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
        return new Ft(this);
      }
      clone() {
        const o = new An(this.diagonalSize);
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
    An.prototype.klassSubType = "DistanceMatrix";
    class $t extends ve {
      constructor(o, s, r) {
        super(), this.matrix = o, this.rows = s, this.columns = r;
      }
    }
    class io extends $t {
      constructor(o, s) {
        T(o, s), super(o, o.rows, 1), this.column = s;
      }
      set(o, s, r) {
        return this.matrix.set(o, this.column, r), this;
      }
      get(o) {
        return this.matrix.get(o, this.column);
      }
    }
    class yi extends $t {
      constructor(o, s) {
        C(o, s), super(o, o.rows, s.length), this.columnIndices = s;
      }
      set(o, s, r) {
        return this.matrix.set(o, this.columnIndices[s], r), this;
      }
      get(o, s) {
        return this.matrix.get(o, this.columnIndices[s]);
      }
    }
    class fl extends $t {
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
    class I extends $t {
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
    class L extends $t {
      constructor(o, s) {
        F(o, s), super(o, s.length, o.columns), this.rowIndices = s;
      }
      set(o, s, r) {
        return this.matrix.set(this.rowIndices[o], s, r), this;
      }
      get(o, s) {
        return this.matrix.get(this.rowIndices[o], s);
      }
    }
    class J extends $t {
      constructor(o, s, r) {
        F(o, s), C(o, r), super(o, s.length, r.length), this.rowIndices = s, this.columnIndices = r;
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
        he(o, s, r, a, u), super(o, r - s + 1, u - a + 1), this.startRow = s, this.startColumn = a;
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
    class se extends ve {
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
    function ie(d, o) {
      if (e.isAnyArray(d)) return d[0] && e.isAnyArray(d[0]) ? new X(d) : new se(d, o);
      throw new Error("the argument is not an array");
    }
    class V {
      constructor(o) {
        o = X.checkMatrix(o);
        let s = o.clone(), r = s.rows, a = s.columns, u = new Float64Array(r), m = 1, w, y, b, A, E, k, ee, P, x;
        for (w = 0; w < r; w++) u[w] = w;
        for (P = new Float64Array(r), y = 0; y < a; y++) {
          for (w = 0; w < r; w++) P[w] = s.get(w, y);
          for (w = 0; w < r; w++) {
            for (x = Math.min(w, y), E = 0, b = 0; b < x; b++) E += s.get(w, b) * P[b];
            P[w] -= E, s.set(w, y, P[w]);
          }
          for (A = y, w = y + 1; w < r; w++) Math.abs(P[w]) > Math.abs(P[A]) && (A = w);
          if (A !== y) {
            for (b = 0; b < a; b++) k = s.get(A, b), s.set(A, b, s.get(y, b)), s.set(y, b, k);
            ee = u[A], u[A] = u[y], u[y] = ee, m = -m;
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
    class ae {
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
        let y = !!u, b = !!m, A = false, E;
        if (r < a) if (!w) E = o.clone(), console.warn("Computing SVD on a matrix with more columns than rows. Consider enabling autoTranspose");
        else {
          E = o.transpose(), r = E.rows, a = E.columns, A = true;
          let _ = y;
          y = b, b = _;
        }
        else E = o.clone();
        let k = Math.min(r, a), ee = Math.min(r + 1, a), P = new Float64Array(ee), x = new oe(r, k), le = new oe(a, a), S = new Float64Array(a), Q = new Float64Array(r), pe = new Float64Array(ee);
        for (let _ = 0; _ < ee; _++) pe[_] = _;
        let Se = Math.min(r - 1, a), Oe = Math.max(0, Math.min(a - 2, r)), tt = Math.max(Se, Oe);
        for (let _ = 0; _ < tt; _++) {
          if (_ < Se) {
            P[_] = 0;
            for (let B = _; B < r; B++) P[_] = we(P[_], E.get(B, _));
            if (P[_] !== 0) {
              E.get(_, _) < 0 && (P[_] = -P[_]);
              for (let B = _; B < r; B++) E.set(B, _, E.get(B, _) / P[_]);
              E.set(_, _, E.get(_, _) + 1);
            }
            P[_] = -P[_];
          }
          for (let B = _ + 1; B < a; B++) {
            if (_ < Se && P[_] !== 0) {
              let ce = 0;
              for (let Z = _; Z < r; Z++) ce += E.get(Z, _) * E.get(Z, B);
              ce = -ce / E.get(_, _);
              for (let Z = _; Z < r; Z++) E.set(Z, B, E.get(Z, B) + ce * E.get(Z, _));
            }
            S[B] = E.get(_, B);
          }
          if (y && _ < Se) for (let B = _; B < r; B++) x.set(B, _, E.get(B, _));
          if (_ < Oe) {
            S[_] = 0;
            for (let B = _ + 1; B < a; B++) S[_] = we(S[_], S[B]);
            if (S[_] !== 0) {
              S[_ + 1] < 0 && (S[_] = 0 - S[_]);
              for (let B = _ + 1; B < a; B++) S[B] /= S[_];
              S[_ + 1] += 1;
            }
            if (S[_] = -S[_], _ + 1 < r && S[_] !== 0) {
              for (let B = _ + 1; B < r; B++) Q[B] = 0;
              for (let B = _ + 1; B < r; B++) for (let ce = _ + 1; ce < a; ce++) Q[B] += S[ce] * E.get(B, ce);
              for (let B = _ + 1; B < a; B++) {
                let ce = -S[B] / S[_ + 1];
                for (let Z = _ + 1; Z < r; Z++) E.set(Z, B, E.get(Z, B) + ce * Q[Z]);
              }
            }
            if (b) for (let B = _ + 1; B < a; B++) le.set(B, _, S[B]);
          }
        }
        let be = Math.min(a, r + 1);
        if (Se < a && (P[Se] = E.get(Se, Se)), r < be && (P[be - 1] = 0), Oe + 1 < be && (S[Oe] = E.get(Oe, be - 1)), S[be - 1] = 0, y) {
          for (let _ = Se; _ < k; _++) {
            for (let B = 0; B < r; B++) x.set(B, _, 0);
            x.set(_, _, 1);
          }
          for (let _ = Se - 1; _ >= 0; _--) if (P[_] !== 0) {
            for (let B = _ + 1; B < k; B++) {
              let ce = 0;
              for (let Z = _; Z < r; Z++) ce += x.get(Z, _) * x.get(Z, B);
              ce = -ce / x.get(_, _);
              for (let Z = _; Z < r; Z++) x.set(Z, B, x.get(Z, B) + ce * x.get(Z, _));
            }
            for (let B = _; B < r; B++) x.set(B, _, -x.get(B, _));
            x.set(_, _, 1 + x.get(_, _));
            for (let B = 0; B < _ - 1; B++) x.set(B, _, 0);
          } else {
            for (let B = 0; B < r; B++) x.set(B, _, 0);
            x.set(_, _, 1);
          }
        }
        if (b) for (let _ = a - 1; _ >= 0; _--) {
          if (_ < Oe && S[_] !== 0) for (let B = _ + 1; B < a; B++) {
            let ce = 0;
            for (let Z = _ + 1; Z < a; Z++) ce += le.get(Z, _) * le.get(Z, B);
            ce = -ce / le.get(_ + 1, _);
            for (let Z = _ + 1; Z < a; Z++) le.set(Z, B, le.get(Z, B) + ce * le.get(Z, _));
          }
          for (let B = 0; B < a; B++) le.set(B, _, 0);
          le.set(_, _, 1);
        }
        let Ee = be - 1, qe = Number.EPSILON;
        for (; be > 0; ) {
          let _, B;
          for (_ = be - 2; _ >= -1 && _ !== -1; _--) {
            const ce = Number.MIN_VALUE + qe * Math.abs(P[_] + Math.abs(P[_ + 1]));
            if (Math.abs(S[_]) <= ce || Number.isNaN(S[_])) {
              S[_] = 0;
              break;
            }
          }
          if (_ === be - 2) B = 4;
          else {
            let ce;
            for (ce = be - 1; ce >= _ && ce !== _; ce--) {
              let Z = (ce !== be ? Math.abs(S[ce]) : 0) + (ce !== _ + 1 ? Math.abs(S[ce - 1]) : 0);
              if (Math.abs(P[ce]) <= qe * Z) {
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
              for (let Z = be - 2; Z >= _; Z--) {
                let nt = we(P[Z], ce), $e = P[Z] / nt, Xe = ce / nt;
                if (P[Z] = nt, Z !== _ && (ce = -Xe * S[Z - 1], S[Z - 1] = $e * S[Z - 1]), b) for (let it = 0; it < a; it++) nt = $e * le.get(it, Z) + Xe * le.get(it, be - 1), le.set(it, be - 1, -Xe * le.get(it, Z) + $e * le.get(it, be - 1)), le.set(it, Z, nt);
              }
              break;
            }
            case 2: {
              let ce = S[_ - 1];
              S[_ - 1] = 0;
              for (let Z = _; Z < be; Z++) {
                let nt = we(P[Z], ce), $e = P[Z] / nt, Xe = ce / nt;
                if (P[Z] = nt, ce = -Xe * S[Z], S[Z] = $e * S[Z], y) for (let it = 0; it < r; it++) nt = $e * x.get(it, Z) + Xe * x.get(it, _ - 1), x.set(it, _ - 1, -Xe * x.get(it, Z) + $e * x.get(it, _ - 1)), x.set(it, Z, nt);
              }
              break;
            }
            case 3: {
              const ce = Math.max(Math.abs(P[be - 1]), Math.abs(P[be - 2]), Math.abs(S[be - 2]), Math.abs(P[_]), Math.abs(S[_])), Z = P[be - 1] / ce, nt = P[be - 2] / ce, $e = S[be - 2] / ce, Xe = P[_] / ce, it = S[_] / ce, yt = ((nt + Z) * (nt - Z) + $e * $e) / 2, sn = Z * $e * (Z * $e);
              let pt = 0;
              (yt !== 0 || sn !== 0) && (yt < 0 ? pt = 0 - Math.sqrt(yt * yt + sn) : pt = Math.sqrt(yt * yt + sn), pt = sn / (yt + pt));
              let gn = (Xe + Z) * (Xe - Z) + pt, Rn = Xe * it;
              for (let Le = _; Le < be - 1; Le++) {
                let bt = we(gn, Rn);
                bt === 0 && (bt = Number.MIN_VALUE);
                let Vt = gn / bt, Ht = Rn / bt;
                if (Le !== _ && (S[Le - 1] = bt), gn = Vt * P[Le] + Ht * S[Le], S[Le] = Vt * S[Le] - Ht * P[Le], Rn = Ht * P[Le + 1], P[Le + 1] = Vt * P[Le + 1], b) for (let gt = 0; gt < a; gt++) bt = Vt * le.get(gt, Le) + Ht * le.get(gt, Le + 1), le.set(gt, Le + 1, -Ht * le.get(gt, Le) + Vt * le.get(gt, Le + 1)), le.set(gt, Le, bt);
                if (bt = we(gn, Rn), bt === 0 && (bt = Number.MIN_VALUE), Vt = gn / bt, Ht = Rn / bt, P[Le] = bt, gn = Vt * S[Le] + Ht * P[Le + 1], P[Le + 1] = -Ht * S[Le] + Vt * P[Le + 1], Rn = Ht * S[Le + 1], S[Le + 1] = Vt * S[Le + 1], y && Le < r - 1) for (let gt = 0; gt < r; gt++) bt = Vt * x.get(gt, Le) + Ht * x.get(gt, Le + 1), x.set(gt, Le + 1, -Ht * x.get(gt, Le) + Vt * x.get(gt, Le + 1)), x.set(gt, Le, bt);
              }
              S[be - 2] = gn;
              break;
            }
            case 4: {
              if (P[_] <= 0 && (P[_] = P[_] < 0 ? -P[_] : 0, b)) for (let ce = 0; ce <= Ee; ce++) le.set(ce, _, -le.get(ce, _));
              for (; _ < Ee && !(P[_] >= P[_ + 1]); ) {
                let ce = P[_];
                if (P[_] = P[_ + 1], P[_ + 1] = ce, b && _ < a - 1) for (let Z = 0; Z < a; Z++) ce = le.get(Z, _ + 1), le.set(Z, _ + 1, le.get(Z, _)), le.set(Z, _, ce);
                if (y && _ < r - 1) for (let Z = 0; Z < r; Z++) ce = x.get(Z, _ + 1), x.set(Z, _ + 1, x.get(Z, _)), x.set(Z, _, ce);
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
        this.m = r, this.n = a, this.s = P, this.U = x, this.V = le;
      }
      solve(o) {
        let s = o, r = this.threshold, a = this.s.length, u = oe.zeros(a, a);
        for (let k = 0; k < a; k++) Math.abs(this.s[k]) <= r ? u.set(k, k, 0) : u.set(k, k, 1 / this.s[k]);
        let m = this.U, w = this.rightSingularVectors, y = w.mmul(u), b = w.rows, A = m.rows, E = oe.zeros(b, A);
        for (let k = 0; k < b; k++) for (let ee = 0; ee < A; ee++) {
          let P = 0;
          for (let x = 0; x < a; x++) P += y.get(k, x) * m.get(ee, x);
          E.set(k, ee, P);
        }
        return E.mmul(s);
      }
      solveForDiagonal(o) {
        return this.solve(oe.diag(o));
      }
      inverse() {
        let o = this.V, s = this.threshold, r = o.rows, a = o.columns, u = new oe(r, this.s.length);
        for (let A = 0; A < r; A++) for (let E = 0; E < a; E++) Math.abs(this.s[E]) > s && u.set(A, E, o.get(A, E) / this.s[E]);
        let m = this.U, w = m.rows, y = m.columns, b = new oe(r, w);
        for (let A = 0; A < r; A++) for (let E = 0; E < w; E++) {
          let k = 0;
          for (let ee = 0; ee < y; ee++) k += u.get(A, ee) * m.get(E, ee);
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
    function Te(d, o = false) {
      return d = X.checkMatrix(d), o ? new ye(d).inverse() : ke(d, oe.eye(d.rows));
    }
    function ke(d, o, s = false) {
      return d = X.checkMatrix(d), o = X.checkMatrix(o), s ? new ye(d).solve(o) : d.isSquare() ? new V(d).solve(o) : new ae(d).solve(o);
    }
    function je(d) {
      if (d = oe.checkMatrix(d), d.isSquare()) {
        if (d.columns === 0) return 1;
        let o, s, r, a;
        if (d.columns === 2) return o = d.get(0, 0), s = d.get(0, 1), r = d.get(1, 0), a = d.get(1, 1), o * a - s * r;
        if (d.columns === 3) {
          let u, m, w;
          return u = new J(d, [
            1,
            2
          ], [
            1,
            2
          ]), m = new J(d, [
            1,
            2
          ], [
            0,
            2
          ]), w = new J(d, [
            1,
            2
          ], [
            0,
            1
          ]), o = d.get(0, 0), s = d.get(0, 1), r = d.get(0, 2), o * je(u) - s * je(m) + r * je(w);
        } else return new V(d).determinant;
      } else throw Error("determinant can only be calculated for a square matrix");
    }
    function Ue(d, o) {
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
        for (let m = 0; m < u.rows; m++) Math.abs(u.get(m, 0)) < r && u.set(m, 0, 0);
        return u.to1DArray();
      }
    }
    function St(d, o = {}) {
      const { thresholdValue: s = 1e-9, thresholdError: r = 1e-9 } = o;
      d = oe.checkMatrix(d);
      let a = d.rows, u = new oe(a, a);
      for (let m = 0; m < a; m++) {
        let w = oe.columnVector(d.getRow(m)), y = d.subMatrixRow(Ue(a, m)).transpose(), A = new ye(y).solve(w), E = oe.sub(w, y.mmul(A)).abs().max();
        u.setRow(m, Tt(E, A, m, s, r));
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
    function Qt(d, o = d, s = {}) {
      d = new oe(d);
      let r = false;
      if (typeof o == "object" && !oe.isMatrix(o) && !e.isAnyArray(o) ? (s = o, o = d, r = true) : o = new oe(o), d.rows !== o.rows) throw new TypeError("Both matrices must have the same number of rows");
      const { center: a = true } = s;
      a && (d = d.center("column"), r || (o = o.center("column")));
      const u = d.transpose().mmul(o);
      for (let m = 0; m < u.rows; m++) for (let w = 0; w < u.columns; w++) u.set(m, w, u.get(m, w) * (1 / (d.rows - 1)));
      return u;
    }
    function bi(d, o = d, s = {}) {
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
    class hr {
      constructor(o, s = {}) {
        const { assumeSymmetric: r = false } = s;
        if (o = X.checkMatrix(o), !o.isSquare()) throw new Error("Matrix is not a square matrix");
        if (o.isEmpty()) throw new Error("Matrix must be non-empty");
        let a = o.columns, u = new oe(a, a), m = new Float64Array(a), w = new Float64Array(a), y = o, b, A, E = false;
        if (r ? E = true : E = o.isSymmetric(), E) {
          for (b = 0; b < a; b++) for (A = 0; A < a; A++) u.set(b, A, y.get(b, A));
          Pt(a, w, m, u), en(a, w, m, u);
        } else {
          let k = new oe(a, a), ee = new Float64Array(a);
          for (A = 0; A < a; A++) for (b = 0; b < a; b++) k.set(b, A, y.get(b, A));
          ro(a, k, ee, u), oo(a, w, m, u, k);
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
    function Pt(d, o, s, r) {
      let a, u, m, w, y, b, A, E;
      for (y = 0; y < d; y++) s[y] = r.get(d - 1, y);
      for (w = d - 1; w > 0; w--) {
        for (E = 0, m = 0, b = 0; b < w; b++) E = E + Math.abs(s[b]);
        if (E === 0) for (o[w] = s[w - 1], y = 0; y < w; y++) s[y] = r.get(w - 1, y), r.set(w, y, 0), r.set(y, w, 0);
        else {
          for (b = 0; b < w; b++) s[b] /= E, m += s[b] * s[b];
          for (a = s[w - 1], u = Math.sqrt(m), a > 0 && (u = -u), o[w] = E * u, m = m - a * u, s[w - 1] = a - u, y = 0; y < w; y++) o[y] = 0;
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
    function en(d, o, s, r) {
      let a, u, m, w, y, b, A, E, k, ee, P, x, le, S, Q, pe;
      for (m = 1; m < d; m++) o[m - 1] = o[m];
      o[d - 1] = 0;
      let Se = 0, Oe = 0, tt = Number.EPSILON;
      for (b = 0; b < d; b++) {
        for (Oe = Math.max(Oe, Math.abs(s[b]) + Math.abs(o[b])), A = b; A < d && !(Math.abs(o[A]) <= tt * Oe); ) A++;
        if (A > b) do {
          for (a = s[b], E = (s[b + 1] - a) / (2 * o[b]), k = we(E, 1), E < 0 && (k = -k), s[b] = o[b] / (E + k), s[b + 1] = o[b] * (E + k), ee = s[b + 1], u = a - s[b], m = b + 2; m < d; m++) s[m] -= u;
          for (Se = Se + u, E = s[A], P = 1, x = P, le = P, S = o[b + 1], Q = 0, pe = 0, m = A - 1; m >= b; m--) for (le = x, x = P, pe = Q, a = P * o[m], u = P * E, k = we(E, o[m]), o[m + 1] = Q * k, Q = o[m] / k, P = E / k, E = P * s[m] - Q * a, s[m + 1] = u + Q * (P * a + Q * s[m]), y = 0; y < d; y++) u = r.get(y, m + 1), r.set(y, m + 1, Q * r.get(y, m) + P * u), r.set(y, m, P * r.get(y, m) - Q * u);
          E = -Q * pe * le * S * o[b] / ee, o[b] = Q * E, s[b] = P * E;
        } while (Math.abs(o[b]) > tt * Oe);
        s[b] = s[b] + Se, o[b] = 0;
      }
      for (m = 0; m < d - 1; m++) {
        for (y = m, E = s[m], w = m + 1; w < d; w++) s[w] < E && (y = w, E = s[w]);
        if (y !== m) for (s[y] = s[m], s[m] = E, w = 0; w < d; w++) E = r.get(w, m), r.set(w, m, r.get(w, y)), r.set(w, y, E);
      }
    }
    function ro(d, o, s, r) {
      let a = 0, u = d - 1, m, w, y, b, A, E, k;
      for (E = a + 1; E <= u - 1; E++) {
        for (k = 0, b = E; b <= u; b++) k = k + Math.abs(o.get(b, E - 1));
        if (k !== 0) {
          for (y = 0, b = u; b >= E; b--) s[b] = o.get(b, E - 1) / k, y += s[b] * s[b];
          for (w = Math.sqrt(y), s[E] > 0 && (w = -w), y = y - s[E] * w, s[E] = s[E] - w, A = E; A < d; A++) {
            for (m = 0, b = u; b >= E; b--) m += s[b] * o.get(b, A);
            for (m = m / y, b = E; b <= u; b++) o.set(b, A, o.get(b, A) - m * s[b]);
          }
          for (b = 0; b <= u; b++) {
            for (m = 0, A = u; A >= E; A--) m += s[A] * o.get(b, A);
            for (m = m / y, A = E; A <= u; A++) o.set(b, A, o.get(b, A) - m * s[A]);
          }
          s[E] = k * s[E], o.set(E, E - 1, k * w);
        }
      }
      for (b = 0; b < d; b++) for (A = 0; A < d; A++) r.set(b, A, b === A ? 1 : 0);
      for (E = u - 1; E >= a + 1; E--) if (o.get(E, E - 1) !== 0) {
        for (b = E + 1; b <= u; b++) s[b] = o.get(b, E - 1);
        for (A = E; A <= u; A++) {
          for (w = 0, b = E; b <= u; b++) w += s[b] * r.get(b, A);
          for (w = w / s[E] / o.get(E, E - 1), b = E; b <= u; b++) r.set(b, A, r.get(b, A) + w * s[b]);
        }
      }
    }
    function oo(d, o, s, r, a) {
      let u = d - 1, m = 0, w = d - 1, y = Number.EPSILON, b = 0, A = 0, E = 0, k = 0, ee = 0, P = 0, x = 0, le = 0, S, Q, pe, Se, Oe, tt, be, Ee, qe, _, B, ce, Z, nt, $e;
      for (S = 0; S < d; S++) for ((S < m || S > w) && (s[S] = a.get(S, S), o[S] = 0), Q = Math.max(S - 1, 0); Q < d; Q++) A = A + Math.abs(a.get(S, Q));
      for (; u >= m; ) {
        for (Se = u; Se > m && (P = Math.abs(a.get(Se - 1, Se - 1)) + Math.abs(a.get(Se, Se)), P === 0 && (P = A), !(Math.abs(a.get(Se, Se - 1)) < y * P)); ) Se--;
        if (Se === u) a.set(u, u, a.get(u, u) + b), s[u] = a.get(u, u), o[u] = 0, u--, le = 0;
        else if (Se === u - 1) {
          if (be = a.get(u, u - 1) * a.get(u - 1, u), E = (a.get(u - 1, u - 1) - a.get(u, u)) / 2, k = E * E + be, x = Math.sqrt(Math.abs(k)), a.set(u, u, a.get(u, u) + b), a.set(u - 1, u - 1, a.get(u - 1, u - 1) + b), Ee = a.get(u, u), k >= 0) {
            for (x = E >= 0 ? E + x : E - x, s[u - 1] = Ee + x, s[u] = s[u - 1], x !== 0 && (s[u] = Ee - be / x), o[u - 1] = 0, o[u] = 0, Ee = a.get(u, u - 1), P = Math.abs(Ee) + Math.abs(x), E = Ee / P, k = x / P, ee = Math.sqrt(E * E + k * k), E = E / ee, k = k / ee, Q = u - 1; Q < d; Q++) x = a.get(u - 1, Q), a.set(u - 1, Q, k * x + E * a.get(u, Q)), a.set(u, Q, k * a.get(u, Q) - E * x);
            for (S = 0; S <= u; S++) x = a.get(S, u - 1), a.set(S, u - 1, k * x + E * a.get(S, u)), a.set(S, u, k * a.get(S, u) - E * x);
            for (S = m; S <= w; S++) x = r.get(S, u - 1), r.set(S, u - 1, k * x + E * r.get(S, u)), r.set(S, u, k * r.get(S, u) - E * x);
          } else s[u - 1] = Ee + E, s[u] = Ee + E, o[u - 1] = x, o[u] = -x;
          u = u - 2, le = 0;
        } else {
          if (Ee = a.get(u, u), qe = 0, be = 0, Se < u && (qe = a.get(u - 1, u - 1), be = a.get(u, u - 1) * a.get(u - 1, u)), le === 10) {
            for (b += Ee, S = m; S <= u; S++) a.set(S, S, a.get(S, S) - Ee);
            P = Math.abs(a.get(u, u - 1)) + Math.abs(a.get(u - 1, u - 2)), Ee = qe = 0.75 * P, be = -0.4375 * P * P;
          }
          if (le === 30 && (P = (qe - Ee) / 2, P = P * P + be, P > 0)) {
            for (P = Math.sqrt(P), qe < Ee && (P = -P), P = Ee - be / ((qe - Ee) / 2 + P), S = m; S <= u; S++) a.set(S, S, a.get(S, S) - P);
            b += P, Ee = qe = be = 0.964;
          }
          for (le = le + 1, Oe = u - 2; Oe >= Se && (x = a.get(Oe, Oe), ee = Ee - x, P = qe - x, E = (ee * P - be) / a.get(Oe + 1, Oe) + a.get(Oe, Oe + 1), k = a.get(Oe + 1, Oe + 1) - x - ee - P, ee = a.get(Oe + 2, Oe + 1), P = Math.abs(E) + Math.abs(k) + Math.abs(ee), E = E / P, k = k / P, ee = ee / P, !(Oe === Se || Math.abs(a.get(Oe, Oe - 1)) * (Math.abs(k) + Math.abs(ee)) < y * (Math.abs(E) * (Math.abs(a.get(Oe - 1, Oe - 1)) + Math.abs(x) + Math.abs(a.get(Oe + 1, Oe + 1)))))); ) Oe--;
          for (S = Oe + 2; S <= u; S++) a.set(S, S - 2, 0), S > Oe + 2 && a.set(S, S - 3, 0);
          for (pe = Oe; pe <= u - 1 && (nt = pe !== u - 1, pe !== Oe && (E = a.get(pe, pe - 1), k = a.get(pe + 1, pe - 1), ee = nt ? a.get(pe + 2, pe - 1) : 0, Ee = Math.abs(E) + Math.abs(k) + Math.abs(ee), Ee !== 0 && (E = E / Ee, k = k / Ee, ee = ee / Ee)), Ee !== 0); pe++) if (P = Math.sqrt(E * E + k * k + ee * ee), E < 0 && (P = -P), P !== 0) {
            for (pe !== Oe ? a.set(pe, pe - 1, -P * Ee) : Se !== Oe && a.set(pe, pe - 1, -a.get(pe, pe - 1)), E = E + P, Ee = E / P, qe = k / P, x = ee / P, k = k / E, ee = ee / E, Q = pe; Q < d; Q++) E = a.get(pe, Q) + k * a.get(pe + 1, Q), nt && (E = E + ee * a.get(pe + 2, Q), a.set(pe + 2, Q, a.get(pe + 2, Q) - E * x)), a.set(pe, Q, a.get(pe, Q) - E * Ee), a.set(pe + 1, Q, a.get(pe + 1, Q) - E * qe);
            for (S = 0; S <= Math.min(u, pe + 3); S++) E = Ee * a.get(S, pe) + qe * a.get(S, pe + 1), nt && (E = E + x * a.get(S, pe + 2), a.set(S, pe + 2, a.get(S, pe + 2) - E * ee)), a.set(S, pe, a.get(S, pe) - E), a.set(S, pe + 1, a.get(S, pe + 1) - E * k);
            for (S = m; S <= w; S++) E = Ee * r.get(S, pe) + qe * r.get(S, pe + 1), nt && (E = E + x * r.get(S, pe + 2), r.set(S, pe + 2, r.get(S, pe + 2) - E * ee)), r.set(S, pe, r.get(S, pe) - E), r.set(S, pe + 1, r.get(S, pe + 1) - E * k);
          }
        }
      }
      if (A !== 0) {
        for (u = d - 1; u >= 0; u--) if (E = s[u], k = o[u], k === 0) for (Se = u, a.set(u, u, 1), S = u - 1; S >= 0; S--) {
          for (be = a.get(S, S) - E, ee = 0, Q = Se; Q <= u; Q++) ee = ee + a.get(S, Q) * a.get(Q, u);
          if (o[S] < 0) x = be, P = ee;
          else if (Se = S, o[S] === 0 ? a.set(S, u, be !== 0 ? -ee / be : -ee / (y * A)) : (Ee = a.get(S, S + 1), qe = a.get(S + 1, S), k = (s[S] - E) * (s[S] - E) + o[S] * o[S], tt = (Ee * P - x * ee) / k, a.set(S, u, tt), a.set(S + 1, u, Math.abs(Ee) > Math.abs(x) ? (-ee - be * tt) / Ee : (-P - qe * tt) / x)), tt = Math.abs(a.get(S, u)), y * tt * tt > 1) for (Q = S; Q <= u; Q++) a.set(Q, u, a.get(Q, u) / tt);
        }
        else if (k < 0) for (Se = u - 1, Math.abs(a.get(u, u - 1)) > Math.abs(a.get(u - 1, u)) ? (a.set(u - 1, u - 1, k / a.get(u, u - 1)), a.set(u - 1, u, -(a.get(u, u) - E) / a.get(u, u - 1))) : ($e = so(0, -a.get(u - 1, u), a.get(u - 1, u - 1) - E, k), a.set(u - 1, u - 1, $e[0]), a.set(u - 1, u, $e[1])), a.set(u, u - 1, 0), a.set(u, u, 1), S = u - 2; S >= 0; S--) {
          for (_ = 0, B = 0, Q = Se; Q <= u; Q++) _ = _ + a.get(S, Q) * a.get(Q, u - 1), B = B + a.get(S, Q) * a.get(Q, u);
          if (be = a.get(S, S) - E, o[S] < 0) x = be, ee = _, P = B;
          else if (Se = S, o[S] === 0 ? ($e = so(-_, -B, be, k), a.set(S, u - 1, $e[0]), a.set(S, u, $e[1])) : (Ee = a.get(S, S + 1), qe = a.get(S + 1, S), ce = (s[S] - E) * (s[S] - E) + o[S] * o[S] - k * k, Z = (s[S] - E) * 2 * k, ce === 0 && Z === 0 && (ce = y * A * (Math.abs(be) + Math.abs(k) + Math.abs(Ee) + Math.abs(qe) + Math.abs(x))), $e = so(Ee * ee - x * _ + k * B, Ee * P - x * B - k * _, ce, Z), a.set(S, u - 1, $e[0]), a.set(S, u, $e[1]), Math.abs(Ee) > Math.abs(x) + Math.abs(k) ? (a.set(S + 1, u - 1, (-_ - be * a.get(S, u - 1) + k * a.get(S, u)) / Ee), a.set(S + 1, u, (-B - be * a.get(S, u) - k * a.get(S, u - 1)) / Ee)) : ($e = so(-ee - qe * a.get(S, u - 1), -P - qe * a.get(S, u), x, k), a.set(S + 1, u - 1, $e[0]), a.set(S + 1, u, $e[1]))), tt = Math.max(Math.abs(a.get(S, u - 1)), Math.abs(a.get(S, u))), y * tt * tt > 1) for (Q = S; Q <= u; Q++) a.set(Q, u - 1, a.get(Q, u - 1) / tt), a.set(Q, u, a.get(Q, u) / tt);
        }
        for (S = 0; S < d; S++) if (S < m || S > w) for (Q = S; Q < d; Q++) r.set(S, Q, a.get(S, Q));
        for (Q = d - 1; Q >= m; Q--) for (S = m; S <= w; S++) {
          for (x = 0, pe = m; pe <= Math.min(Q, w); pe++) x = x + r.get(S, pe) * a.get(pe, Q);
          r.set(S, Q, x);
        }
      }
    }
    function so(d, o, s, r) {
      let a, u;
      return Math.abs(s) > Math.abs(r) ? (a = r / s, u = s + a * r, [
        (d + a * o) / u,
        (o - a * d) / u
      ]) : (a = s / r, u = r + a * s, [
        (a * d + o) / u,
        (a * o - d) / u
      ]);
    }
    class hl {
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
    class dl {
      constructor(o, s = {}) {
        o = X.checkMatrix(o);
        let { Y: r } = s;
        const { scaleScores: a = false, maxIterations: u = 1e3, terminationCriteria: m = 1e-10 } = s;
        let w;
        if (r) {
          if (e.isAnyArray(r) && typeof r[0] == "number" ? r = oe.columnVector(r) : r = X.checkMatrix(r), r.rows !== o.rows) throw new Error("Y should have the same number of rows as X");
          w = r.getColumnVector(0);
        } else w = o.getColumnVector(0);
        let y = 1, b, A, E, k;
        for (let ee = 0; ee < u && y > m; ee++) E = o.transpose().mmul(w).div(w.transpose().mmul(w).get(0, 0)), E = E.div(E.norm()), b = o.mmul(E).div(E.transpose().mmul(E).get(0, 0)), ee > 0 && (y = b.clone().sub(k).pow(2).sum()), k = b.clone(), r ? (A = r.transpose().mmul(b).div(b.transpose().mmul(b).get(0, 0)), A = A.div(A.norm()), w = r.mmul(A).div(A.transpose().mmul(A).get(0, 0))) : w = b;
        if (r) {
          let ee = o.transpose().mmul(b).div(b.transpose().mmul(b).get(0, 0));
          ee = ee.div(ee.norm());
          let P = o.clone().sub(b.clone().mmul(ee.transpose())), x = w.transpose().mmul(b).div(b.transpose().mmul(b).get(0, 0)), le = r.clone().sub(b.clone().mulS(x.get(0, 0)).mmul(A.transpose()));
          this.t = b, this.p = ee.transpose(), this.w = E.transpose(), this.q = A, this.u = w, this.s = b.transpose().mmul(b), this.xResidual = P, this.yResidual = le, this.betas = x;
        } else this.w = E.transpose(), this.s = b.transpose().mmul(b).sqrt(), a ? this.t = b.clone().div(this.s.get(0, 0)) : this.t = b, this.xResidual = o.sub(b.mmul(E.transpose()));
      }
    }
    return Ne.AbstractMatrix = ve, Ne.CHO = hl, Ne.CholeskyDecomposition = hl, Ne.DistanceMatrix = An, Ne.EVD = hr, Ne.EigenvalueDecomposition = hr, Ne.LU = V, Ne.LuDecomposition = V, Ne.Matrix = oe, Ne.MatrixColumnSelectionView = yi, Ne.MatrixColumnView = io, Ne.MatrixFlipColumnView = fl, Ne.MatrixFlipRowView = I, Ne.MatrixRowSelectionView = L, Ne.MatrixRowView = O, Ne.MatrixSelectionView = J, Ne.MatrixSubView = q, Ne.MatrixTransposeView = K, Ne.NIPALS = dl, Ne.Nipals = dl, Ne.QR = ae, Ne.QrDecomposition = ae, Ne.SVD = ye, Ne.SingularValueDecomposition = ye, Ne.SymmetricMatrix = Ft, Ne.WrapperMatrix1D = se, Ne.WrapperMatrix2D = X, Ne.correlation = bi, Ne.covariance = Qt, Ne.default = oe, Ne.determinant = je, Ne.inverse = Te, Ne.linearDependencies = St, Ne.pseudoInverse = Xt, Ne.solve = ke, Ne.wrap = ie, Ne;
  }
  var As = B0();
  const Uc = k0(As), Be = As.Matrix;
  Uc.Matrix ? Uc.Matrix : As.Matrix;
  const Gc = As.inverse;
  const _jr = class _jr {
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
      this.boundHandleMotionEvent = this.handleMotionEvent.bind(this), this.boundHandleOrientationEvent = this.handleOrientationEvent.bind(this), this.matrixRz = Be.zeros(3, 3), this.matrixRy = Be.zeros(3, 3), this.matrixRx = Be.zeros(3, 3), this.matrixR = Be.zeros(3, 3), this.matrixRTemp = Be.zeros(3, 3), this.vectorInput = Be.zeros(3, 1), this.vectorOutput = Be.zeros(3, 1), this.gravityENU = new Be([
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
      if (this.initialized) return j(void 0);
      if (this.initPromise) return this.initPromise;
      this.initPromise = this.doInit(t);
      const n = await this.initPromise;
      return n.isErr() && (this.initPromise = null), n;
    }
    async doInit(t) {
      if (this.disposed) return M(new xe("IMU provider has been disposed"));
      const n = await this.requestPermissionIfNeeded(t);
      return n.isErr() ? M(n.error) : await this.checkHardwareSupport() ? ("DeviceOrientationEvent" in window && window.addEventListener("deviceorientation", this.boundHandleOrientationEvent), this.initialized = true, j(void 0)) : M(new xe("Device motion is not supported by this browser"));
    }
    async requestPermissionIfNeeded(t) {
      try {
        if (typeof DeviceMotionEvent < "u" && typeof DeviceMotionEvent.requestPermission == "function") {
          let n = "prompt";
          try {
            n = await DeviceMotionEvent.requestPermission();
          } catch {
          }
          if (t && n === "prompt") {
            if (!await t("prompt", "permission.imu.required")) return M(new xe("User declined to grant IMU permission"));
            if (await DeviceMotionEvent.requestPermission() !== "granted") return M(new xe("IMU permission denied"));
          } else return n === "denied" ? M(new xe("IMU permission denied")) : j(void 0);
        }
        return j(void 0);
      } catch (n) {
        return M(new xe("Failed to request IMU permission", void 0, n));
      }
    }
    async checkHardwareSupport() {
      return !("DeviceOrientationEvent" in window) || !("DeviceMotionEvent" in window) ? false : new Promise((t) => {
        let n = false;
        const i = () => {
          window.removeEventListener("deviceorientation", f), window.removeEventListener("devicemotion", h);
        }, l = () => {
          n || (n = true, i(), t(true));
        }, c = () => {
          n || (n = true, i(), t(false));
        }, f = (p) => {
          (p.alpha !== null || p.beta !== null || p.gamma !== null) && l();
        }, h = (p) => {
          (p.acceleration || p.accelerationIncludingGravity || p.rotationRate) && l();
        };
        window.addEventListener("deviceorientation", f), window.addEventListener("devicemotion", h), setTimeout(c, 1e3);
      });
    }
    async startAcceleration(t = {}) {
      if (this.disposed) return M(new xe("IMU provider has been disposed"));
      if (!this.initialized) {
        const n = await this.init();
        if (n.isErr()) return M(n.error);
      }
      if (this.isAccelerationActive) return j(void 0);
      this.normalizeAccelerationToENU = t.normalizeToENU ?? false;
      try {
        return this.motionEventListenerCount === 0 && window.addEventListener("devicemotion", this.boundHandleMotionEvent, true), this.motionEventListenerCount++, this.isAccelerationActive = true, j(void 0);
      } catch (n) {
        return M(new xe("Failed to start acceleration monitoring", void 0, n));
      }
    }
    async startGyroscope(t = {}) {
      if (this.disposed) return M(new xe("IMU provider has been disposed"));
      if (!this.initialized) {
        const n = await this.init();
        if (n.isErr()) return M(n.error);
      }
      if (this.isGyroscopeActive) return j(void 0);
      this.normalizeGyroscopeToENU = t.normalizeToENU ?? false;
      try {
        return this.motionEventListenerCount === 0 && window.addEventListener("devicemotion", this.boundHandleMotionEvent, true), this.motionEventListenerCount++, this.isGyroscopeActive = true, j(void 0);
      } catch (n) {
        return M(new xe("Failed to start gyroscope monitoring", void 0, n));
      }
    }
    stopAcceleration() {
      if (!this.isAccelerationActive) return j(void 0);
      try {
        return this.motionEventListenerCount--, this.isAccelerationActive = false, this.lastAccelerationReading = null, this.normalizeAccelerationToENU = false, this.motionEventListenerCount === 0 && window.removeEventListener("devicemotion", this.boundHandleMotionEvent, true), j(void 0);
      } catch (t) {
        return M(new xe("Failed to stop acceleration monitoring", void 0, t));
      }
    }
    stopGyroscope() {
      if (!this.isGyroscopeActive) return j(void 0);
      try {
        return this.motionEventListenerCount--, this.isGyroscopeActive = false, this.lastGyroscopeReading = null, this.normalizeGyroscopeToENU = false, this.motionEventListenerCount === 0 && window.removeEventListener("devicemotion", this.boundHandleMotionEvent, true), j(void 0);
      } catch (t) {
        return M(new xe("Failed to stop gyroscope monitoring", void 0, t));
      }
    }
    async getAccelerationReading() {
      if (this.disposed) return M(new xe("IMU provider has been disposed"));
      if (!this.initialized) {
        const t = await this.init();
        if (t.isErr()) return M(t.error);
      }
      return j(this.lastAccelerationReading);
    }
    async getGyroscopeReading() {
      if (this.disposed) return M(new xe("IMU provider has been disposed"));
      if (!this.initialized) {
        const t = await this.init();
        if (t.isErr()) return M(t.error);
      }
      return j(this.lastGyroscopeReading);
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
      return this.accelerationListeners.delete(t), this.gyroscopeListeners.delete(t), j(void 0);
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
      const n = t.timeStamp || performance.now();
      this.isAccelerationActive && this.processAccelerationData(t, n), this.isGyroscopeActive && this.processGyroscopeData(t, n);
    }
    processAccelerationData(t, n) {
      let i = t.acceleration, l = false;
      if ((!i || i.x === null || i.y === null || i.z === null) && (i = t.accelerationIncludingGravity, l = true), !i || i.x === null || i.y === null || i.z === null) return;
      let c = i.x, f = i.y, h = i.z;
      if (l && this.deviceOrientation) {
        const v = this.computeGravityInDeviceFrame(this.deviceOrientation);
        c -= v.x, f -= v.y, h -= v.z;
      }
      let p;
      this.normalizeAccelerationToENU && this.deviceOrientation ? p = this.transformToENU(c, f, h, n, this.deviceOrientation) : p = {
        x: c,
        y: f,
        z: h,
        timestamp: n
      }, this.lastAccelerationReading = p, this.notifyListeners(this.accelerationListeners, p, "acceleration");
    }
    processGyroscopeData(t, n) {
      const i = t.rotationRate;
      if (!i || i.alpha === null || i.beta === null || i.gamma === null) return;
      const l = i.beta, c = i.gamma, f = i.alpha;
      let h;
      this.normalizeGyroscopeToENU && this.deviceOrientation ? h = this.transformToENU(l, c, f, n, this.deviceOrientation) : h = {
        x: l,
        y: c,
        z: f,
        timestamp: n
      }, this.lastGyroscopeReading = h, this.notifyListeners(this.gyroscopeListeners, h, "gyroscope");
    }
    notifyListeners(t, n, i) {
      for (const l of t.values()) try {
        l(n);
      } catch (c) {
        console.error(`Error in ${i} callback:`, c);
      }
    }
    updateRotationMatrices(t) {
      const n = (t.alpha + 270) % 360 * _jr.DEG_TO_RAD, i = t.beta * _jr.DEG_TO_RAD, l = t.gamma * _jr.DEG_TO_RAD, c = Math.cos(n), f = Math.sin(n), h = Math.cos(i), p = Math.sin(i), v = Math.cos(l), g = Math.sin(l);
      this.matrixRz.set(0, 0, c), this.matrixRz.set(0, 1, -f), this.matrixRz.set(0, 2, 0), this.matrixRz.set(1, 0, f), this.matrixRz.set(1, 1, c), this.matrixRz.set(1, 2, 0), this.matrixRz.set(2, 0, 0), this.matrixRz.set(2, 1, 0), this.matrixRz.set(2, 2, 1), this.matrixRy.set(0, 0, h), this.matrixRy.set(0, 1, 0), this.matrixRy.set(0, 2, p), this.matrixRy.set(1, 0, 0), this.matrixRy.set(1, 1, 1), this.matrixRy.set(1, 2, 0), this.matrixRy.set(2, 0, -p), this.matrixRy.set(2, 1, 0), this.matrixRy.set(2, 2, h), this.matrixRx.set(0, 0, 1), this.matrixRx.set(0, 1, 0), this.matrixRx.set(0, 2, 0), this.matrixRx.set(1, 0, 0), this.matrixRx.set(1, 1, v), this.matrixRx.set(1, 2, -g), this.matrixRx.set(2, 0, 0), this.matrixRx.set(2, 1, g), this.matrixRx.set(2, 2, v), this.multiplyMatricesInPlace(this.matrixRz, this.matrixRy, this.matrixRTemp), this.multiplyMatricesInPlace(this.matrixRTemp, this.matrixRx, this.matrixR);
    }
    multiplyMatricesInPlace(t, n, i) {
      for (let l = 0; l < 3; l++) for (let c = 0; c < 3; c++) {
        let f = 0;
        for (let h = 0; h < 3; h++) f += t.get(l, h) * n.get(h, c);
        i.set(l, c, f);
      }
    }
    multiplyMatrixVectorInPlace(t, n, i) {
      for (let l = 0; l < 3; l++) {
        let c = 0;
        for (let f = 0; f < 3; f++) c += t.get(l, f) * n.get(f, 0);
        i.set(l, 0, c);
      }
    }
    transformToENU(t, n, i, l, c) {
      return this.updateRotationMatrices(c), this.vectorInput.set(0, 0, t), this.vectorInput.set(1, 0, n), this.vectorInput.set(2, 0, i), this.multiplyMatrixVectorInPlace(this.matrixR, this.vectorInput, this.vectorOutput), {
        x: this.vectorOutput.get(0, 0),
        y: this.vectorOutput.get(1, 0),
        z: this.vectorOutput.get(2, 0),
        timestamp: l
      };
    }
    computeGravityInDeviceFrame(t) {
      this.updateRotationMatrices(t);
      let n = 0, i = 0, l = 0;
      for (let c = 0; c < 3; c++) {
        const f = this.gravityENU.get(c, 0);
        n += this.matrixR.get(c, 0) * f, i += this.matrixR.get(c, 1) * f, l += this.matrixR.get(c, 2) * f;
      }
      return {
        x: n,
        y: i,
        z: l
      };
    }
  };
  __publicField(_jr, "GRAVITY", 9.81);
  __publicField(_jr, "DEG_TO_RAD", Math.PI / 180);
  let jr = _jr;
  const _li = class _li {
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
      const n = al.getPlatformContext(), i = new _li(n), l = await i.initializeProviders(t);
      return l.isErr() ? M(l.error) : (_li.instance = i, j(i));
    }
    static getInstance() {
      return _li.instance ? j(_li.instance) : M(new Oi("Platform services not initialized", ni.NOT_INITIALIZED));
    }
    async initializeProviders(t) {
      try {
        this.storageProvider = this.createStorageProvider(t == null ? void 0 : t.storage);
        const n = await Promise.all([
          this.createIMUProvider(t == null ? void 0 : t.imu),
          this.createDeviceOrientationProvider(t == null ? void 0 : t.deviceOrientation)
        ]);
        return this.imuProvider = n[0], this.deviceOrientationProvider = n[1], this.geolocationProvider = await this.createGeolocationProvider(t == null ? void 0 : t.geolocation), this.fileProvider = this.createFileProvider(), this.initialized = true, j(void 0);
      } catch (n) {
        return M(new Oi("Failed to initialize platform providers", ni.DETECTION_FAILED, n));
      }
    }
    createStorageProvider(t) {
      switch (this.context.environment) {
        case ct.TAURI:
          return new S0((t == null ? void 0 : t.tauriStorePath) || "user-data.json");
        case ct.WEB:
        case ct.MOBILE_WEB:
        case ct.UNKNOWN:
        default:
          return new R0((t == null ? void 0 : t.webDbName) || "trackmaker-db", (t == null ? void 0 : t.webStoreName) || "user-data");
      }
    }
    async createGeolocationProvider(t) {
      let n;
      switch (this.context.environment) {
        case ct.TAURI:
          n = new M0((t == null ? void 0 : t.tauriHandlerName) || "get_geolocation");
          break;
        case ct.WEB:
        case ct.MOBILE_WEB:
        case ct.UNKNOWN:
        default:
          n = new P0();
          break;
      }
      return await n.init(t == null ? void 0 : t.permissionCallback), n;
    }
    createFileProvider() {
      return {
        init: async () => M(new xe("File provider not implemented")),
        readFile: async () => M(new xe("File provider not implemented")),
        writeFile: async () => M(new xe("File provider not implemented")),
        deleteFile: async () => M(new xe("File provider not implemented")),
        listFiles: async () => M(new xe("File provider not implemented")),
        exists: async () => M(new xe("File provider not implemented")),
        isSupported: () => false
      };
    }
    async createIMUProvider(t) {
      const n = new jr();
      return await n.init(t == null ? void 0 : t.permissionCallback), n;
    }
    async createDeviceOrientationProvider(t) {
      const n = new C0();
      return await n.init(t == null ? void 0 : t.permissionCallback), n;
    }
    getContext() {
      return this.context;
    }
    getStorage() {
      return this.storageProvider ? j(this.storageProvider) : M(new Oi("Storage provider not initialized", ni.DETECTION_FAILED));
    }
    getGeolocation() {
      return this.geolocationProvider ? j(this.geolocationProvider) : M(new Oi("Geolocation provider not initialized", ni.DETECTION_FAILED));
    }
    getFile() {
      return this.fileProvider ? j(this.fileProvider) : M(new Oi("File provider not initialized", ni.DETECTION_FAILED));
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
      return this.imuProvider ? j(this.imuProvider) : M(new Oi("IMU provider not initialized", ni.DETECTION_FAILED));
    }
    getDeviceOrientation() {
      return this.deviceOrientationProvider ? j(this.deviceOrientationProvider) : M(new Oi("Device orientation provider not initialized", ni.DETECTION_FAILED));
    }
  };
  __publicField(_li, "instance", null);
  let li = _li;
  Rs = function() {
    return li.getInstance();
  };
  z0 = function() {
    return typeof navigator > "u" ? false : al.detectEnvironment() === ct.TAURI;
  };
  class Un {
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
  class $0 {
    constructor(t) {
      __publicField(this, "strategies", []);
      __publicField(this, "activeStrategy", null);
      __publicField(this, "watcherCount", 0);
      __publicField(this, "isInitialized", false);
      this.strategies = t;
    }
    async initialise() {
      if (this.isInitialized) return j(void 0);
      for (const t of this.strategies) try {
        if (await t.isAvailable()) {
          if (this.activeStrategy = t, (await this.activeStrategy.initialize()).isErr()) {
            console.info(`[BackendManager] Backend ${t.name} not initialised`);
            continue;
          }
          return this.isInitialized = true, console.info(`[BackendManager] Initialised with ${t.name} backend`), j(void 0);
        } else console.info(`[BackendManager] Fail to initialise with ${t.name} backend, trying fallbacks`);
      } catch (n) {
        console.warn(`[BackendManager] Failed to test ${t.name} backend:`, n);
        continue;
      }
      return M(new Me("No backend available", "BACKEND_NOT_AVAILABLE"));
    }
    async startWatching(t) {
      if (!this.isInitialized) return M(new Me("Backend not initialized", "BACKEND_NOT_INITIALIZED"));
      if (!this.activeStrategy) return M(new Me("No backend available", "BACKEND_NOT_AVAILABLE"));
      if (this.watcherCount === 0) {
        const n = await this.activeStrategy.startWatching(t);
        if (n.isErr()) return console.warn(`[BackendManager] Failed to start ${this.activeStrategy.name} backend:`, n.error), M(n.error);
      } else {
        const n = await this.activeStrategy.startWatching(t);
        if (n.isErr()) return M(n.error);
      }
      return this.watcherCount++, console.info(`[BackendManager] Started watching with ${this.activeStrategy.name} backend (count: ${this.watcherCount})`), j(this.activeStrategy.name);
    }
    async stopWatching() {
      var _a3;
      if (this.watcherCount === 0 || !this.activeStrategy) return j(void 0);
      if (this.watcherCount--, this.watcherCount === 0) {
        const t = await this.activeStrategy.stopWatching();
        if (t.isErr()) return M(new Me(`Failed to stop ${((_a3 = this.activeStrategy) == null ? void 0 : _a3.name) || "unknown"} backend`, "UPDATE_SERVICE_ERROR", t.error));
        console.info("[BackendManager] Stopped watching location");
      } else console.info(`[BackendManager] Decremented watcher count (count: ${this.watcherCount})`);
      return j(void 0);
    }
    async getCurrentPosition() {
      if (!this.isInitialized) return M(new Me("Backend not initialized", "BACKEND_NOT_INITIALIZED"));
      if (!this.activeStrategy) return M(new Me("No backend available for current position", "BACKEND_NOT_AVAILABLE"));
      const t = await this.activeStrategy.getCurrentPosition();
      return t.isErr() ? (console.warn(`[BackendManager] Failed to get location from ${this.activeStrategy.name}:`, t.error), M(t.error)) : t;
    }
    getActiveBackend() {
      var _a3;
      return ((_a3 = this.activeStrategy) == null ? void 0 : _a3.name) || null;
    }
    isWatchingActive() {
      return this.watcherCount > 0;
    }
  }
  class V0 {
    constructor() {
      __publicField(this, "callbacks", /* @__PURE__ */ new Set());
    }
    subscribe(t) {
      return this.callbacks.add(t), () => this.callbacks.delete(t);
    }
    emit(t, n) {
      for (const i of this.callbacks) try {
        i(t, n);
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
  class H0 {
    constructor() {
      __publicField(this, "currentLocation", null);
      __publicField(this, "currentBackend", null);
      __publicField(this, "eventEmitter");
      this.eventEmitter = new V0();
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
  class q0 {
    constructor() {
      __publicField(this, "name", "gps");
      __publicField(this, "provider", null);
      __publicField(this, "watchId", null);
      __publicField(this, "isInitialized", false);
    }
    async initialize() {
      if (this.isInitialized) return j(void 0);
      try {
        const t = Rs();
        if (t.isErr()) return M(new Me("Platform services not available", "BACKEND_NOT_AVAILABLE", t.error));
        const n = t.value.getGeolocationProvider();
        return n ? (this.provider = n, this.isInitialized = true, j(void 0)) : M(new Me("Geolocation provider not available", "BACKEND_NOT_AVAILABLE"));
      } catch (t) {
        return M(new Me("Exception during GPS backend initialization", "UPDATE_SERVICE_ERROR", t));
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
      if (!this.provider) return M(new Me("GPS backend not initialized", "BACKEND_NOT_AVAILABLE"));
      const n = await this.provider.watchPosition((i) => {
        const l = new Un(i.coords.latitude, i.coords.longitude, i.coords.accuracy);
        t(l, "gps");
      });
      return n.isErr() ? M(new Me("Failed to start watching position", "UPDATE_SERVICE_ERROR", n.error)) : (this.watchId = n.value, j(void 0));
    }
    async stopWatching() {
      if (this.watchId !== null && this.provider) {
        const t = this.provider.clearWatch(this.watchId);
        if (t.isErr()) return M(new Me("Failed to stop watching position", "UPDATE_SERVICE_ERROR", t.error));
        this.watchId = null;
      }
      return j(void 0);
    }
    async getCurrentPosition() {
      if (!this.provider) return M(new Me("GPS backend not initialized", "BACKEND_NOT_AVAILABLE"));
      const t = await this.provider.getCurrentPosition();
      if (t.isErr()) return M(new Me("Failed to get current position", "UPDATE_SERVICE_ERROR", t.error));
      const n = t.value;
      return j(new Un(n.coords.latitude, n.coords.longitude, n.coords.accuracy));
    }
  }
  const Wc = "https://ipapi.co/json/";
  class K0 {
    constructor() {
      __publicField(this, "name", "ip");
      __publicField(this, "watchCallbacks", /* @__PURE__ */ new Map());
      __publicField(this, "watchInterval", null);
      __publicField(this, "lastLocation", null);
      __publicField(this, "nextCallbackId", 1);
      __publicField(this, "activeWatcherCount", 0);
    }
    async initialize() {
      return j();
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
      }, 3e4), this.updateLocation()), j(void 0);
    }
    async stopWatching() {
      try {
        return this.watchCallbacks.clear(), this.activeWatcherCount = 0, this.watchInterval !== null && (clearInterval(this.watchInterval), this.watchInterval = null), this.lastLocation = null, j(void 0);
      } catch (t) {
        return M(new Me("Failed to stop IP location watching", "UPDATE_SERVICE_ERROR", t));
      }
    }
    async getCurrentPosition() {
      try {
        console.info("[IPFallbackBackend] Getting location from IP service");
        const t = await fetch(Wc, {
          signal: AbortSignal.timeout(1e4)
        });
        if (!t.ok) throw new Error(`HTTP error! Status: ${t.status}`);
        const n = await t.json(), i = new Un(n.latitude, n.longitude, 5e4);
        return console.info("[IPFallbackBackend] Successfully retrieved location from IP service"), j(i);
      } catch (t) {
        return M(new Me("Failed to get location from IP service", "POSITION_UNAVAILABLE", t));
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
          for (const i of this.watchCallbacks.values()) try {
            i(n, "ip");
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
  let Or = null;
  function Po() {
    return (Or === null || Or.byteLength === 0) && (Or = new Uint8Array(Ce.memory.buffer)), Or;
  }
  function Pi(e, t) {
    return e = e >>> 0, nh.decode(Po().subarray(e, e + t));
  }
  let Jo = 0;
  const Co = typeof TextEncoder < "u" ? new TextEncoder("utf-8") : {
    encode: () => {
      throw Error("TextEncoder not available");
    }
  }, Y0 = typeof Co.encodeInto == "function" ? function(e, t) {
    return Co.encodeInto(e, t);
  } : function(e, t) {
    const n = Co.encode(e);
    return t.set(n), {
      read: e.length,
      written: n.length
    };
  };
  function ih(e, t, n) {
    if (n === void 0) {
      const h = Co.encode(e), p = t(h.length, 1) >>> 0;
      return Po().subarray(p, p + h.length).set(h), Jo = h.length, p;
    }
    let i = e.length, l = t(i, 1) >>> 0;
    const c = Po();
    let f = 0;
    for (; f < i; f++) {
      const h = e.charCodeAt(f);
      if (h > 127) break;
      c[l + f] = h;
    }
    if (f !== i) {
      f !== 0 && (e = e.slice(f)), l = n(l, i, i = f + e.length * 3, 1) >>> 0;
      const h = Po().subarray(l + f, l + i), p = Y0(e, h);
      f += p.written, l = n(l, i, f, 1) >>> 0;
    }
    return Jo = f, l;
  }
  function J0(e) {
    return e == null;
  }
  let Ri = null;
  function Bc() {
    return (Ri === null || Ri.buffer.detached === true || Ri.buffer.detached === void 0 && Ri.buffer !== Ce.memory.buffer) && (Ri = new DataView(Ce.memory.buffer)), Ri;
  }
  function rh(e) {
    const t = Ce.__wbindgen_export_0.get(e);
    return Ce.__externref_table_dealloc(e), t;
  }
  function ia(e, t) {
    if (!(e instanceof t)) throw new Error(`expected instance of ${t.name}`);
  }
  function Ca(e, t, n) {
    ia(e, ui), ia(t, ui), ia(n, Zo);
    const i = Ce.transform(e.__wbg_ptr, t.__wbg_ptr, n.__wbg_ptr);
    if (i[1]) throw rh(i[0]);
  }
  const zc = typeof FinalizationRegistry > "u" ? {
    register: () => {
    },
    unregister: () => {
    }
  } : new FinalizationRegistry((e) => Ce.__wbg_point_free(e >>> 0, 1));
  class Zo {
    __destroy_into_raw() {
      const t = this.__wbg_ptr;
      return this.__wbg_ptr = 0, zc.unregister(this), t;
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
    constructor(t, n, i) {
      const l = Ce.point_new(t, n, i);
      return this.__wbg_ptr = l >>> 0, zc.register(this, this.__wbg_ptr, this), this;
    }
  }
  const $c = typeof FinalizationRegistry > "u" ? {
    register: () => {
    },
    unregister: () => {
    }
  } : new FinalizationRegistry((e) => Ce.__wbg_projection_free(e >>> 0, 1));
  class ui {
    __destroy_into_raw() {
      const t = this.__wbg_ptr;
      return this.__wbg_ptr = 0, $c.unregister(this), t;
    }
    free() {
      const t = this.__destroy_into_raw();
      Ce.__wbg_projection_free(t, 0);
    }
    constructor(t) {
      const n = ih(t, Ce.__wbindgen_malloc, Ce.__wbindgen_realloc), i = Jo, l = Ce.projection_new(n, i);
      if (l[2]) throw rh(l[1]);
      return this.__wbg_ptr = l[0] >>> 0, $c.register(this, this.__wbg_ptr, this), this;
    }
    get projName() {
      let t, n;
      try {
        const i = Ce.projection_projName(this.__wbg_ptr);
        return t = i[0], n = i[1], Pi(i[0], i[1]);
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
        const i = Ce.projection_axis(this.__wbg_ptr);
        return t = i[0], n = i[1], Pi(i[0], i[1]);
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
        const i = Ce.projection_units(this.__wbg_ptr);
        return t = i[0], n = i[1], Pi(i[0], i[1]);
      } finally {
        Ce.__wbindgen_free(t, n, 1);
      }
    }
  }
  async function Z0(e, t) {
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
  function X0() {
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
      return parseFloat(Pi(t, n));
    }, e.wbg.__wbg_parseInt_7deceafc75400ae4 = function(t, n, i) {
      return parseInt(Pi(t, n), i);
    }, e.wbg.__wbg_slice_ab0b7e3d75dccdee = function(t, n, i) {
      return t.slice(n >>> 0, i >>> 0);
    }, e.wbg.__wbindgen_error_new = function(t, n) {
      return new Error(Pi(t, n));
    }, e.wbg.__wbindgen_init_externref_table = function() {
      const t = Ce.__wbindgen_export_0, n = t.grow(4);
      t.set(0, void 0), t.set(n + 0, void 0), t.set(n + 1, null), t.set(n + 2, true), t.set(n + 3, false);
    }, e.wbg.__wbindgen_string_get = function(t, n) {
      const i = n, l = typeof i == "string" ? i : void 0;
      var c = J0(l) ? 0 : ih(l, Ce.__wbindgen_malloc, Ce.__wbindgen_realloc), f = Jo;
      Bc().setInt32(t + 4, f, true), Bc().setInt32(t + 0, c, true);
    }, e.wbg.__wbindgen_throw = function(t, n) {
      throw new Error(Pi(t, n));
    }, e;
  }
  function Q0(e, t) {
    return Ce = e.exports, oh.__wbindgen_wasm_module = t, Ri = null, Or = null, Ce.__wbindgen_start(), Ce;
  }
  async function oh(e) {
    if (Ce !== void 0) return Ce;
    typeof e < "u" && (Object.getPrototypeOf(e) === Object.prototype ? { module_or_path: e } = e : console.warn("using deprecated parameters for the initialization function; pass a single object instead")), typeof e > "u" && (e = new URL("" + new URL("proj4rs_bg-Biz-E4lt.wasm", import.meta.url).href, import.meta.url));
    const t = X0();
    (typeof e == "string" || typeof Request == "function" && e instanceof Request || typeof URL == "function" && e instanceof URL) && (e = fetch(e));
    const { instance: n, module: i } = await Z0(await e, t);
    return Q0(n, i);
  }
  const eb = "" + new URL("proj4rs_bg-Biz-E4lt.wasm", import.meta.url).href, Ur = {
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
        module_or_path: eb
      }), ra = true, console.log("[Proj4WASM] WASM module loaded successfully.");
    } catch (e) {
      console.warn("[Proj4WASM] Failed to load WASM module, using the JS fallback."), console.error(e), ra = true;
    }
  }
  async function Vc(e, t, n) {
    try {
      await sh();
      const i = new ui(e), l = new ui(t), c = new Zo(n[0], n[1], 0);
      Ca(i, l, c);
      const f = [
        c.x,
        c.y
      ];
      return i.free(), l.free(), c.free(), f;
    } catch (i) {
      throw new Error(`Failed to transform coordinate: ${i instanceof Error ? i.message : String(i)}`);
    }
  }
  function tb(e, t) {
    const n = t.x - e.x, i = t.y - e.y;
    return Math.sqrt(n * n + i * i);
  }
  function Hc(e, t) {
    const i = e.latitude * Math.PI / 180, l = t.latitude * Math.PI / 180, c = (t.latitude - e.latitude) * Math.PI / 180, f = (t.longitude - e.longitude) * Math.PI / 180, h = Math.sin(c / 2) * Math.sin(c / 2) + Math.cos(i) * Math.cos(l) * Math.sin(f / 2) * Math.sin(f / 2);
    return 6371e3 * (2 * Math.atan2(Math.sqrt(h), Math.sqrt(1 - h)));
  }
  async function nb(e, t, n = {}) {
    const { projection: i = Ur.CGCS2000_3_DEGREE, useHaversine: l = false } = n;
    if (l) return Hc(e, t);
    try {
      const c = await Vc(Ur.WGS84, i, [
        e.longitude,
        e.latitude
      ]), f = await Vc(Ur.WGS84, i, [
        t.longitude,
        t.latitude
      ]);
      return tb({
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
    for (let i = 1; i < e.length; i++) n += await nb(e[i - 1], e[i], t);
    return n;
  };
  Sv = function(e) {
    return e < 1e3 ? `${Math.round(e)} m` : e < 1e4 ? `${(e / 1e3).toFixed(1)} km` : `${Math.round(e / 1e3)} km`;
  };
  const { sin: qt, cos: ib, sqrt: cl, abs: Xo, PI: xt } = Math, qc = 6378245, Kc = 0.006693421622965823;
  function ah(e, t) {
    return e >= 72.004 && e <= 137.8347 && t >= 0.8293 && t <= 55.8271;
  }
  function rb(e, t) {
    let n = -100 + 2 * e + 3 * t + 0.2 * t * t + 0.1 * e * t + 0.2 * cl(Xo(e));
    return n += (20 * qt(6 * e * xt) + 20 * qt(2 * e * xt)) * 2 / 3, n += (20 * qt(t * xt) + 40 * qt(t / 3 * xt)) * 2 / 3, n += (160 * qt(t / 12 * xt) + 320 * qt(t * xt / 30)) * 2 / 3, n;
  }
  function ob(e, t) {
    let n = 300 + e + 2 * t + 0.1 * e * e + 0.1 * e * t + 0.1 * cl(Xo(e));
    return n += (20 * qt(6 * e * xt) + 20 * qt(2 * e * xt)) * 2 / 3, n += (20 * qt(e * xt) + 40 * qt(e / 3 * xt)) * 2 / 3, n += (150 * qt(e / 12 * xt) + 300 * qt(e / 30 * xt)) * 2 / 3, n;
  }
  function sb(e, t) {
    let n = ob(e - 105, t - 35), i = rb(e - 105, t - 35);
    const l = t / 180 * xt;
    let c = qt(l);
    c = 1 - Kc * c * c;
    const f = cl(c);
    return n = n * 180 / (qc / f * ib(l) * xt), i = i * 180 / (qc * (1 - Kc) / (c * f) * xt), [
      n,
      i
    ];
  }
  function fi(e) {
    const [t, n] = e;
    if (!ah(t, n)) return [
      t,
      n
    ];
    const i = sb(t, n);
    return [
      t + i[0],
      n + i[1]
    ];
  }
  function sr(e) {
    const [t, n] = e;
    if (!ah(t, n)) return [
      t,
      n
    ];
    let [i, l] = [
      t,
      n
    ], c = fi([
      i,
      l
    ]), f = c[0] - t, h = c[1] - n;
    for (; Xo(f) > 1e-6 || Xo(h) > 1e-6; ) i -= f, l -= h, c = fi([
      i,
      l
    ]), f = c[0] - t, h = c[1] - n;
    return [
      i,
      l
    ];
  }
  const { sin: Qo, cos: es, atan2: lh, sqrt: ch, PI: ab } = Math, ts = ab * 3e3 / 180;
  function Ji(e) {
    const [t, n] = e, i = t - 65e-4, l = n - 6e-3, c = ch(i * i + l * l) - 2e-5 * Qo(l * ts), f = lh(l, i) - 3e-6 * es(i * ts), h = c * es(f), p = c * Qo(f);
    return [
      h,
      p
    ];
  }
  function ar(e) {
    const [t, n] = e, i = t, l = n, c = ch(i * i + l * l) + 2e-5 * Qo(l * ts), f = lh(l, i) + 3e-6 * es(i * ts), h = c * es(f) + 65e-4, p = c * Qo(f) + 6e-3;
    return [
      h,
      p
    ];
  }
  const Yc = 180 / Math.PI, Jc = Math.PI / 180, ns = 6378137, Qn = 20037508342789244e-9;
  function vo(e) {
    return [
      e[0] * Yc / ns,
      (Math.PI * 0.5 - 2 * Math.atan(Math.exp(-e[1] / ns))) * Yc
    ];
  }
  function Ms(e) {
    const t = Math.abs(e[0]) <= 180 ? e[0] : e[0] - (e[0] < 0 ? -1 : 1) * 360, n = [
      ns * t * Jc,
      ns * Math.log(Math.tan(Math.PI * 0.25 + 0.5 * e[1] * Jc))
    ];
    return n[0] > Qn && (n[0] = Qn), n[0] < -Qn && (n[0] = -Qn), n[1] > Qn && (n[1] = Qn), n[1] < -Qn && (n[1] = -Qn), n;
  }
  const { abs: is } = Math, Zc = [
    1289059486e-2,
    836237787e-2,
    5591021,
    348198983e-2,
    167804312e-2,
    0
  ], Xc = [
    75,
    60,
    45,
    30,
    15,
    0
  ], lb = [
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
  ], cb = [
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
    const i = is(t) / n[9];
    let l = n[0] + n[1] * is(e), c = n[2] + n[3] * i + n[4] * Math.pow(i, 2) + n[5] * Math.pow(i, 3) + n[6] * Math.pow(i, 4) + n[7] * Math.pow(i, 5) + n[8] * Math.pow(i, 6);
    return l *= e < 0 ? -1 : 1, c *= t < 0 ? -1 : 1, [
      l,
      c
    ];
  }
  function Ns(e) {
    const [t, n] = e;
    let i = [];
    for (let l = 0; l < Xc.length; l++) if (is(n) > Xc[l]) {
      i = cb[l];
      break;
    }
    return uh(t, n, i);
  }
  function Eo(e) {
    const [t, n] = e;
    let i = [];
    for (let l = 0; l < Zc.length; l++) if (is(n) >= Zc[l]) {
      i = lb[l];
      break;
    }
    return uh(t, n, i);
  }
  function ei(e, t) {
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
      let i = t, l = e[t].apply(null, n);
      for (; i--; ) l = e[i].call(null, l);
      return l;
    };
  }
  function hh(e, t, n = false) {
    if (e === null) return;
    let i, l, c, f, h, p, v = 0, g = 0, T, N;
    const { type: R } = e, F = R === "FeatureCollection", C = R === "Feature", he = F ? e.features.length : 1;
    for (let ne = 0; ne < he; ne++) {
      T = F ? e.features[ne].geometry : C ? e.geometry : e, N = T ? T.type === "GeometryCollection" : false, p = N ? T.geometries.length : 1;
      for (let H = 0; H < p; H++) {
        let Y = 0, U = 0;
        if (f = N ? T.geometries[H] : T, f === null) continue;
        const ue = f.type;
        switch (v = n && (ue === "Polygon" || ue === "MultiPolygon") ? 1 : 0, ue) {
          case null:
            break;
          case "Point":
            if (h = f.coordinates, t(h, g, ne, Y, U) === false) return false;
            g++, Y++;
            break;
          case "LineString":
          case "MultiPoint":
            for (h = f.coordinates, i = 0; i < h.length; i++) {
              if (t(h[i], g, ne, Y, U) === false) return false;
              g++, ue === "MultiPoint" && Y++;
            }
            ue === "LineString" && Y++;
            break;
          case "Polygon":
          case "MultiLineString":
            for (h = f.coordinates, i = 0; i < h.length; i++) {
              for (l = 0; l < h[i].length - v; l++) {
                if (t(h[i][l], g, ne, Y, U) === false) return false;
                g++;
              }
              ue === "MultiLineString" && Y++, ue === "Polygon" && U++;
            }
            ue === "Polygon" && Y++;
            break;
          case "MultiPolygon":
            for (h = f.coordinates, i = 0; i < h.length; i++) {
              for (U = 0, l = 0; l < h[i].length; l++) {
                for (c = 0; c < h[i][l].length - v; c++) {
                  if (t(h[i][l][c], g, ne, Y, U) === false) return false;
                  g++;
                }
                U++;
              }
              Y++;
            }
            break;
          case "GeometryCollection":
            for (i = 0; i < f.geometries.length; i++) if (hh(f.geometries[i], t, n) === false) return false;
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
  const ub = {
    to: {
      [ot.GCJ02]: fi,
      [ot.BD09]: on(ar, fi),
      [ot.BD09MC]: on(Ns, ar, fi),
      [ot.EPSG3857]: Ms
    }
  }, fb = {
    to: {
      [ot.WGS84]: sr,
      [ot.BD09]: ar,
      [ot.BD09MC]: on(Ns, ar),
      [ot.EPSG3857]: on(Ms, sr)
    }
  }, hb = {
    to: {
      [ot.WGS84]: on(sr, Ji),
      [ot.GCJ02]: Ji,
      [ot.EPSG3857]: on(Ms, sr, Ji),
      [ot.BD09MC]: Ns
    }
  }, db = {
    to: {
      [ot.WGS84]: vo,
      [ot.GCJ02]: on(fi, vo),
      [ot.BD09]: on(ar, fi, vo),
      [ot.BD09MC]: on(Ns, ar, fi, vo)
    }
  }, pb = {
    to: {
      [ot.WGS84]: on(sr, Ji, Eo),
      [ot.GCJ02]: on(Ji, Eo),
      [ot.EPSG3857]: on(Ms, sr, Ji, Eo),
      [ot.BD09]: Eo
    }
  }, gb = {
    WGS84: ub,
    GCJ02: fb,
    BD09: hb,
    EPSG3857: db,
    BD09MC: pb
  };
  var mb = gb;
  function wb(e, t, n) {
    if (ei(!!e, "The args[0] input coordinate is required"), ei(!!t, "The args[1] original coordinate system is required"), ei(!!n, "The args[2] target coordinate system is required"), t === n) return e;
    const i = mb[t];
    ei(!!i, `Invalid original coordinate system: ${t}`);
    const l = i.to[n];
    ei(!!l, `Invalid target coordinate system: ${n}`);
    const c = typeof e;
    if (ei(c === "string" || c === "object", `Invalid input coordinate type: ${c}`), c === "string") try {
      e = JSON.parse(e);
    } catch {
      throw new Error(`Invalid input coordinate: ${e}`);
    }
    let f = false;
    fh(e) && (ei(e.length >= 2, `Invalid input coordinate: ${e}`), ei(Qc(e[0]) && Qc(e[1]), `Invalid input coordinate: ${e}`), e = e.map(Number), f = true);
    const h = l;
    return f ? h(e) : (hh(e, (p) => {
      [p[0], p[1]] = h(p);
    }), e);
  }
  const oa = Object.assign(Object.assign({}, ot), {
    CRSTypes: ot,
    transform: wb
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
        const n = new ui(Ur.WGS84), i = new ui(this.localProjection), l = new Zo(t.longitude, t.latitude, 0);
        Ca(n, i, l);
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
        const n = new ui(this.localProjection), i = new ui(Ur.WGS84), l = new Zo(t.x, t.y, 0);
        Ca(n, i, l);
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
  function yb(e) {
    const t = oa.transform([
      e.longitude,
      e.latitude
    ], oa.WGS84, oa.GCJ02);
    return new Un(t[1], t[0]);
  }
  new dh();
  class bb {
    constructor(t) {
      __publicField(this, "state");
      __publicField(this, "config");
      __publicField(this, "coordinateTransformer");
      __publicField(this, "lastKalmanGain", null);
      __publicField(this, "isInitialized", false);
      __publicField(this, "debugEnabled", false);
      this.config = {
        sigmaAcceleration: 0.1,
        initialPositionUncertainty: 20,
        initialVelocityUncertainty: 10,
        gpsSpeedUncertainty: 2,
        imuAccelerationUncertainty: 4,
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
        acceleration: {
          x: 0,
          y: 0
        },
        covariance: new Be([
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
            Math.pow(this.config.sigmaAcceleration, 2),
            0
          ],
          [
            0,
            0,
            0,
            0,
            0,
            Math.pow(this.config.sigmaAcceleration, 2)
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
      const i = t.speed !== void 0 && t.speed !== null && t.heading !== void 0 && t.heading !== null;
      if (i) {
        const h = this.gpsVelocityToLocal(t.speed, t.heading);
        this.state.velocity = {
          x: h.x,
          y: h.y
        };
      }
      const l = this.gpsAccuracyToSigma(t.accuracy), c = i ? this.config.gpsSpeedUncertainty : this.config.initialVelocityUncertainty, f = this.config.sigmaAcceleration;
      this.state.covariance = new Be([
        [
          l * l,
          0,
          0,
          0,
          0,
          0
        ],
        [
          0,
          l * l,
          0,
          0,
          0,
          0
        ],
        [
          0,
          0,
          c * c,
          0,
          0,
          0
        ],
        [
          0,
          0,
          0,
          c * c,
          0,
          0
        ],
        [
          0,
          0,
          0,
          0,
          f * f,
          0
        ],
        [
          0,
          0,
          0,
          0,
          0,
          f * f
        ]
      ]), this.debugEnabled && console.log("[KalmanFilter] Initialized:", {
        position: this.state.position,
        velocity: this.state.velocity,
        hasVelocity: i,
        positionUncertainty: l,
        velocityUncertainty: c
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
      const n = (t.timestamp - this.state.timestamp) / 1e3;
      n > 0 && this.predictInternal(n), await this.updateGPSInternal(t), this.state.timestamp = t.timestamp;
    }
    updateIMU(t) {
      if (!this.isInitialized) return;
      const n = (t.timestamp - this.state.timestamp) / 1e3;
      n > 0 && (this.predictInternal(n), this.state.timestamp = t.timestamp), t.acceleration && this.updateIMUInternal(t.acceleration);
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
      const n = new Be([
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
      ]), i = this.config.sigmaAcceleration, l = new Be([
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
      ]).mul(i * i), c = new Be([
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
      ]), f = n.mmul(c), h = n.mmul(this.state.covariance).mmul(n.transpose()).add(l);
      if (this.debugEnabled && t > 0.1) {
        const p = h.trace(), v = Math.sqrt(h.get(0, 0) + h.get(1, 1)), g = Math.sqrt(h.get(2, 2) + h.get(3, 3)), T = Math.sqrt(h.get(4, 4) + h.get(5, 5));
        console.log("[KalmanFilter] Prediction:", {
          dt: t,
          sigmaA: i,
          covarianceTrace: p,
          positionUncertainty: v,
          velocityUncertainty: g,
          accelerationUncertainty: T
        });
      }
      this.state.position = {
        x: f.get(0, 0),
        y: f.get(1, 0)
      }, this.state.velocity = {
        x: f.get(2, 0),
        y: f.get(3, 0)
      }, this.state.acceleration = {
        x: f.get(4, 0),
        y: f.get(5, 0)
      }, this.state.covariance = h;
    }
    async updateGPSInternal(t) {
      const n = await this.coordinateTransformer.geographicToLocal({
        longitude: t.longitude,
        latitude: t.latitude
      }), i = t.speed !== void 0 && t.speed !== null && t.heading !== void 0 && t.heading !== null;
      let l;
      i ? l = new Be([
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
      ]) : l = new Be([
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
      let c;
      if (i) {
        const Y = this.gpsVelocityToLocal(t.speed, t.heading);
        c = new Be([
          [
            n.x
          ],
          [
            n.y
          ],
          [
            Y.x
          ],
          [
            Y.y
          ]
        ]);
      } else c = new Be([
        [
          n.x
        ],
        [
          n.y
        ]
      ]);
      const f = this.gpsAccuracyToSigma(t.accuracy);
      let h;
      if (i) {
        const Y = this.config.gpsSpeedUncertainty;
        h = new Be([
          [
            f * f,
            0,
            0,
            0
          ],
          [
            0,
            f * f,
            0,
            0
          ],
          [
            0,
            0,
            Y * Y,
            0
          ],
          [
            0,
            0,
            0,
            Y * Y
          ]
        ]);
      } else h = new Be([
        [
          f * f,
          0
        ],
        [
          0,
          f * f
        ]
      ]);
      const p = 1e-6, g = l.mmul(this.state.covariance).mmul(l.transpose()).add(h), T = g.add(Be.identity(g.rows, g.columns).mul(p)), N = this.state.covariance.mmul(l.transpose()).mmul(Gc(T));
      this.lastKalmanGain = N, this.debugEnabled && console.log("[KalmanFilter] GPS update:", {
        hasVelocity: i,
        position: {
          x: n.x,
          y: n.y
        },
        gpsSpeed: t.speed,
        gpsHeading: t.heading,
        kalmanGain: N.to2DArray(),
        gainNorm: Math.sqrt(N.to1DArray().reduce((Y, U) => Y + U * U, 0))
      });
      const R = new Be([
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
      ]), F = c.subtract(l.mmul(R)), C = R.add(N.mmul(F)), H = Be.identity(6, 6).subtract(N.mmul(l)).mmul(this.state.covariance).add(Be.identity(6, 6).mul(p));
      this.state.position = {
        x: C.get(0, 0),
        y: C.get(1, 0)
      }, this.state.velocity = {
        x: C.get(2, 0),
        y: C.get(3, 0)
      }, this.state.acceleration = {
        x: C.get(4, 0),
        y: C.get(5, 0)
      }, this.state.covariance = H;
    }
    gpsAccuracyToSigma(t) {
      return Math.max(t, 1) / Math.sqrt(2 * Math.log(20));
    }
    gpsVelocityToLocal(t, n) {
      const i = n * Math.PI / 180, l = t * Math.sin(i), c = t * Math.cos(i);
      return {
        x: l,
        y: c
      };
    }
    updateIMUInternal(t) {
      const n = new Be([
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
      ]), i = new Be([
        [
          t.x
        ],
        [
          t.y
        ]
      ]), l = Math.max(this.config.imuAccelerationUncertainty, 0.1), c = 1e-6, f = new Be([
        [
          l * l,
          0
        ],
        [
          0,
          l * l
        ]
      ]), p = n.mmul(this.state.covariance).mmul(n.transpose()).add(f), v = p.add(Be.identity(p.rows, p.columns).mul(c)), g = this.state.covariance.mmul(n.transpose()).mmul(Gc(v));
      this.lastKalmanGain = g, this.debugEnabled && console.log("[KalmanFilter] IMU update:", {
        acceleration: {
          x: t.x,
          y: t.y
        },
        kalmanGain: g.to2DArray(),
        gainNorm: Math.sqrt(g.to1DArray().reduce((ne, H) => ne + H * H, 0))
      });
      const T = new Be([
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
      ]), N = i.subtract(n.mmul(T)), R = T.add(g.mmul(N)), he = Be.identity(6, 6).subtract(g.mmul(n)).mmul(this.state.covariance).add(Be.identity(6, 6).mul(c));
      this.state.position = {
        x: R.get(0, 0),
        y: R.get(1, 0)
      }, this.state.velocity = {
        x: R.get(2, 0),
        y: R.get(3, 0)
      }, this.state.acceleration = {
        x: R.get(4, 0),
        y: R.get(5, 0)
      }, this.state.covariance = he;
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
        const t = Rs();
        if (t.isErr()) return M(new Me("Platform services not available for IMU", "BACKEND_NOT_AVAILABLE", t.error));
        const n = t.value.getIMU();
        return n.isErr() ? M(new Me("IMU provider not available", "BACKEND_NOT_AVAILABLE", n.error)) : (this.imuProvider = n.value, j(void 0));
      } catch (t) {
        return M(new Me("Exception during IMU initialization", "UPDATE_SERVICE_ERROR", t));
      }
    }
    async isAvailable() {
      return !this.imuProvider && (await this.initialize()).isErr() ? false : !!this.imuProvider;
    }
    async startListening(t) {
      if (!this.imuProvider) return M(new Me("IMU not initialized", "BACKEND_NOT_AVAILABLE"));
      if (this.isListening) return this.imuCallbacks.push(t), j(void 0);
      try {
        const n = await this.imuProvider.startAcceleration({
          frequency: 10,
          normalizeToENU: true
        });
        n.isErr() && console.warn("[IMUFusionManager] Failed to start acceleration sensor:", n.error);
        const i = await this.imuProvider.startGyroscope({
          frequency: 10,
          normalizeToENU: true
        });
        return i.isErr() && console.warn("[IMUFusionManager] Failed to start gyroscope sensor:", i.error), this.imuCallbacks.push(t), this.isListening = true, this.startIMUPolling(), console.info("[IMUFusionManager] Started IMU sensor fusion"), j(void 0);
      } catch (n) {
        return M(new Me("Failed to start IMU listening", "UPDATE_SERVICE_ERROR", n));
      }
    }
    async stopListening() {
      if (!this.isListening || !this.imuProvider) return j(void 0);
      try {
        this.imuUpdateInterval && (clearInterval(this.imuUpdateInterval), this.imuUpdateInterval = null);
        const t = this.imuProvider.stopAcceleration();
        t.isErr() && console.warn("[IMUFusionManager] Failed to stop acceleration sensor:", t.error);
        const n = this.imuProvider.stopGyroscope();
        return n.isErr() && console.warn("[IMUFusionManager] Failed to stop gyroscope sensor:", n.error), this.imuCallbacks = [], this.isListening = false, console.info("[IMUFusionManager] Stopped IMU sensor fusion"), j(void 0);
      } catch (t) {
        return M(new Me("Failed to stop IMU listening", "UPDATE_SERVICE_ERROR", t));
      }
    }
    startIMUPolling() {
      this.imuProvider && (this.imuUpdateInterval = setInterval(async () => {
        try {
          const t = await this.getCombinedIMUReading();
          if (t) for (const n of this.imuCallbacks) try {
            n(t);
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
        const [t, n] = await Promise.all([
          this.imuProvider.getAccelerationReading(),
          this.imuProvider.getGyroscopeReading()
        ]), i = {
          timestamp: performance.now()
        };
        return t.isOk() && t.value && (i.acceleration = {
          x: t.value.x,
          y: t.value.y,
          z: t.value.z
        }), n.isOk() && n.value && (i.gyroscope = {
          x: n.value.x,
          y: n.value.y,
          z: n.value.z
        }), i;
      } catch (t) {
        return console.error("[IMUFusionManager] Error getting combined IMU reading:", t), null;
      }
    }
  }
  class Eb {
    constructor(t, n, i = 100) {
      __publicField(this, "kalmanFilter");
      __publicField(this, "imuManager");
      __publicField(this, "callback", null);
      __publicField(this, "isInitialized", false);
      __publicField(this, "lastOutputTime", 0);
      __publicField(this, "lastOutputAccuracy", 0);
      this.kalmanFilter = new bb(n), this.imuManager = new vb(i), this.callback = t;
    }
    async initialize(t) {
      try {
        (await this.imuManager.initialize()).isErr() && console.warn("[LocationProcessor] IMU not available, using GPS-only mode");
        try {
          await this.kalmanFilter.initialize(t), this.isInitialized = true;
        } catch (i) {
          return M(new Me("Failed to initialize Kalman filter", "UPDATE_SERVICE_ERROR", i));
        }
        return j(void 0);
      } catch (n) {
        return M(new Me("Failed to initialize location processor", "UPDATE_SERVICE_ERROR", n));
      }
    }
    async startGPS() {
      try {
        return await this.imuManager.isAvailable() && (await this.imuManager.startListening((i) => this.processIMUReading(i))).isErr() && console.warn("[LocationProcessor] Failed to start IMU, using GPS-only"), this.isInitialized = true, console.info("[LocationProcessor] Started location processing"), j(void 0);
      } catch (t) {
        return M(new Me("Failed to start GPS processing", "UPDATE_SERVICE_ERROR", t));
      }
    }
    async stopGPS() {
      try {
        const t = await this.imuManager.stopListening();
        return t.isErr() && console.warn("[LocationProcessor] Failed to stop IMU:", t.error), this.isInitialized = false, console.info("[LocationProcessor] Stopped location processing"), j(void 0);
      } catch (t) {
        return M(new Me("Failed to stop GPS processing", "UPDATE_SERVICE_ERROR", t));
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
        const n = await this.kalmanFilter.getFilteredPosition(), i = new Un(n.latitude, n.longitude, t.accuracy);
        this.notifyCallback(i);
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
          const n = await this.kalmanFilter.getFilteredPosition(), i = new Un(n.latitude, n.longitude, this.lastOutputAccuracy || 10);
          this.notifyCallback(i);
        } catch (n) {
          console.error("[LocationProcessor] Error outputting predicted position:", n);
        }
      }
    }
    async getCurrentFilteredPosition() {
      if (!this.kalmanFilter.isFilterInitialized()) return M(new Me("Kalman filter not initialized", "UPDATE_SERVICE_ERROR"));
      try {
        const t = await this.kalmanFilter.getFilteredPosition(), n = new Un(t.latitude, t.longitude, this.lastOutputAccuracy || 10);
        return j(n);
      } catch (t) {
        return M(new Me("Failed to get filtered position", "UPDATE_SERVICE_ERROR", t));
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
      } catch (n) {
        console.error("[LocationProcessor] Callback error:", n);
      }
    }
  }
  class Ib {
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
      if (this.isInitialized) return j(void 0);
      try {
        const t = Rs();
        if (t.isErr()) return M(new Me("Platform services not available", "BACKEND_NOT_AVAILABLE", t.error));
        const n = t.value.getGeolocationProvider();
        if (!n) return M(new Me("Geolocation provider not available", "BACKEND_NOT_AVAILABLE"));
        this.provider = n;
        const i = await this.provider.getCurrentPosition();
        if (i.isErr()) return M(new Me("Failed to get the initial geolocation", "UPDATE_SERVICE_ERROR", i.error));
        this.processor = new Eb((c, f) => this.handleLocationUpdate(c), {
          sigmaAcceleration: this.config.sigmaAcceleration,
          initialPositionUncertainty: this.config.initialPositionUncertainty,
          initialVelocityUncertainty: this.config.initialVelocityUncertainty,
          gpsSpeedUncertainty: this.config.gpsSpeedUncertainty,
          debugEnabled: this.config.debugEnabled
        }, this.config.imuUpdateInterval);
        const l = await this.processor.initialize({
          latitude: i.value.coords.latitude,
          longitude: i.value.coords.longitude,
          accuracy: i.value.coords.accuracy,
          timestamp: performance.now(),
          speed: i.value.coords.speed ?? void 0,
          heading: i.value.coords.heading ?? void 0
        });
        return l.isErr() ? l : (this.isInitialized = true, j(void 0));
      } catch (t) {
        return M(new Me("Exception during Kalman backend initialization", "UPDATE_SERVICE_ERROR", t));
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
      if (!this.provider || !this.processor) return M(new Me("Kalman backend not properly initialized", "BACKEND_NOT_AVAILABLE"));
      try {
        this.userCallback = t;
        const n = await this.provider.watchPosition((l) => {
          var _a3;
          const c = {
            latitude: l.coords.latitude,
            longitude: l.coords.longitude,
            accuracy: l.coords.accuracy,
            timestamp: performance.now(),
            speed: l.coords.speed ?? void 0,
            heading: l.coords.heading ?? void 0
          };
          (_a3 = this.processor) == null ? void 0 : _a3.processGPSLocation(c);
        }, {
          highFrequency: true
        });
        if (n.isErr()) return M(new Me("Failed to start watching position", "UPDATE_SERVICE_ERROR", n.error));
        this.watchId = n.value;
        const i = await this.processor.startGPS();
        return i.isErr() ? (this.watchId !== null && this.provider && this.provider.clearWatch(this.watchId), i) : (console.info("[KalmanBackend] Started Kalman-filtered location watching"), j(void 0));
      } catch (n) {
        return M(new Me("Exception during start watching", "UPDATE_SERVICE_ERROR", n));
      }
    }
    async stopWatching() {
      if (!this.provider || !this.processor) return j(void 0);
      try {
        const t = await this.processor.stopGPS();
        if (t.isErr() && console.warn("[KalmanBackend] Failed to stop processor cleanly:", t.error), this.watchId !== null) {
          const n = this.provider.clearWatch(this.watchId);
          n.isErr() && console.warn("[KalmanBackend] Failed to clear watch:", n.error), this.watchId = null;
        }
        return console.info("[KalmanBackend] Stopped Kalman-filtered location watching"), j(void 0);
      } catch (t) {
        return M(new Me("Exception during stop watching", "UPDATE_SERVICE_ERROR", t));
      }
    }
    async getCurrentPosition() {
      if (!this.provider || !this.processor) return M(new Me("Kalman backend not properly initialized", "BACKEND_NOT_AVAILABLE"));
      try {
        const t = await this.provider.getCurrentPosition();
        if (t.isErr()) return M(new Me("Failed to get current position", "UPDATE_SERVICE_ERROR", t.error));
        const n = t.value, i = {
          latitude: n.coords.latitude,
          longitude: n.coords.longitude,
          accuracy: n.coords.accuracy,
          timestamp: n.timestamp || performance.now(),
          speed: n.coords.speed ?? void 0,
          heading: n.coords.heading ?? void 0
        };
        return await this.processor.processGPSLocation(i), await this.processor.getCurrentFilteredPosition();
      } catch (t) {
        return M(new Me("Exception getting current position", "UPDATE_SERVICE_ERROR", t));
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
      A0() && t.push(new Ib()), t.push(new q0()), t.push(new K0()), this.backendManager = new $0(t), this.stateManager = new H0();
    }
    static async getInstance() {
      if (ln.instance || (ln.instance = new ln()), !ln.instance.isInitialized) {
        const t = await ln.instance.initialize();
        if (t.isErr()) return M(t.error);
      }
      return j(ln.instance);
    }
    static getExistingInstance() {
      if (!ln.instance) throw new Error("GeolocationManager not initialized. Call getInstance() first.");
      return ln.instance;
    }
    static reset() {
      ln.instance = null;
    }
    async initialize() {
      if (this.isInitialized) return console.info("[GeolocationManager] Already initialized"), j(void 0);
      console.info("[GeolocationManager] Initializing geolocation services with new architecture");
      try {
        this.stateManager.subscribe((i, l) => {
          this.notifyCallbacks(i);
        });
        const t = await this.backendManager.initialise();
        if (t.isErr()) return console.warn("[GeolocationManager] No backend available for location"), M(new Pn("No geolocation backend available", "no_backend_available", t.error));
        const n = await this.backendManager.getCurrentPosition();
        return n.isOk() ? (this.stateManager.updateLocation(n.value, this.backendManager.getActiveBackend()), this.isInitialized = true, console.info("[GeolocationManager] Geolocation services initialized successfully"), j(void 0)) : M(new Pn("Backend selected fail to obtain geolocation", "backend_error", n.error));
      } catch (t) {
        const n = go(t, "Failed to initialize geolocation manager");
        return Si(n, "GeolocationManager.initialize"), M(new Pn("Exception during initialization", "initialization_failed", n));
      }
    }
    async getCurrentLocation() {
      if (!this.isInitialized) {
        const t = new Pn("Geolocation manager not initialized", "not_initialized");
        return Si(t, "GeolocationManager.getCurrentLocation"), M(t);
      }
      try {
        const t = await this.backendManager.getCurrentPosition();
        return t.isOk() && this.stateManager.updateLocation(t.value, this.backendManager.getActiveBackend() || "gps"), t;
      } catch (t) {
        const n = go(t, "Failed to get current location");
        return Si(n, "GeolocationManager.getCurrentLocation"), M(new Pn("Failed to get current location", "get_location_failed", n));
      }
    }
    async startLocationUpdates(t) {
      if (!this.isInitialized) {
        const n = new Pn("Geolocation manager not initialized", "not_initialized");
        return Si(n, "GeolocationManager.startLocationUpdates"), M(n);
      }
      console.info("[GeolocationManager] Starting location updates");
      try {
        const n = this.nextCallbackId++;
        this.locationUpdateCallbacks.set(n, t);
        const i = await this.backendManager.startWatching((l, c) => {
          this.stateManager.updateLocation(l, c), this.notifyCallbacks(l);
        });
        return i.isErr() ? (this.locationUpdateCallbacks.delete(n), M(i.error)) : (console.info(`[GeolocationManager] Location updates started with handler ${n}`), j(n));
      } catch (n) {
        const i = go(n, "Failed to start location updates");
        return Si(i, "GeolocationManager.startLocationUpdates"), M(new Pn("Failed to start location updates", "start_updates_failed", i));
      }
    }
    async stopLocationUpdates(t) {
      if (!this.isInitialized) {
        const n = new Pn("Geolocation manager not initialized", "not_initialized");
        return Si(n, "GeolocationManager.stopLocationUpdates"), M(n);
      }
      console.info("[GeolocationManager] Stopping location updates");
      try {
        if (this.locationUpdateCallbacks.delete(t), this.locationUpdateCallbacks.size === 0) {
          const n = await this.backendManager.stopWatching();
          if (n.isErr()) return M(n.error);
        }
        return console.info(`[GeolocationManager] Location updates stopped for handler ${t}`), j(void 0);
      } catch (n) {
        const i = go(n, "Failed to stop location updates");
        return Si(i, "GeolocationManager.stopLocationUpdates"), M(new Pn("Failed to stop location updates", "stop_updates_failed", i));
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
        const n = this.backendManager.strategies.find((i) => i.name === "kalman");
        if (n && "getLastKalmanGain" in n) return n.getLastKalmanGain();
      }
      return null;
    }
    getKalmanState() {
      if (this.backendManager.getActiveBackend() === "kalman") {
        const n = this.backendManager.strategies.find((i) => i.name === "kalman");
        if (n && "getKalmanState" in n) return n.getKalmanState();
      }
      return null;
    }
    applyGeolocationCorrection(t) {
      return Bt("geolocationCorrection") ? yb(t) : t;
    }
    notifyCallbacks(t) {
      const n = this.applyGeolocationCorrection(t), i = qf(n);
      for (const l of this.locationUpdateCallbacks.values()) try {
        l(i);
      } catch (c) {
        console.error("[GeolocationManager] Callback error:", c);
      }
    }
    async refreshBackend() {
      return j(void 0);
    }
  }, __publicField(_a2, "instance", null), _a2);
  let ph;
  const Ps = (e) => ph = e, gh = /* @__PURE__ */ Symbol();
  function ka(e) {
    return e && typeof e == "object" && Object.prototype.toString.call(e) === "[object Object]" && typeof e.toJSON != "function";
  }
  var Gr;
  (function(e) {
    e.direct = "direct", e.patchObject = "patch object", e.patchFunction = "patch function";
  })(Gr || (Gr = {}));
  function mh() {
    const e = du(true), t = e.run(() => jt({}));
    let n = [], i = [];
    const l = Va({
      install(c) {
        Ps(l), l._a = c, c.provide(gh, l), c.config.globalProperties.$pinia = l, i.forEach((f) => n.push(f)), i = [];
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
  const wh = () => {
  };
  function eu(e, t, n, i = wh) {
    e.add(t);
    const l = () => {
      e.delete(t) && i();
    };
    return !n && pu() && Bh(l), l;
  }
  function zi(e, ...t) {
    e.forEach((n) => {
      n(...t);
    });
  }
  const Tb = (e) => e(), tu = /* @__PURE__ */ Symbol(), sa = /* @__PURE__ */ Symbol();
  function La(e, t) {
    e instanceof Map && t instanceof Map ? t.forEach((n, i) => e.set(i, n)) : e instanceof Set && t instanceof Set && t.forEach(e.add, e);
    for (const n in t) {
      if (!t.hasOwnProperty(n)) continue;
      const i = t[n], l = e[n];
      ka(l) && ka(i) && e.hasOwnProperty(n) && !at(i) && !Gn(i) ? e[n] = La(l, i) : e[n] = i;
    }
    return e;
  }
  const Sb = /* @__PURE__ */ Symbol();
  function _b(e) {
    return !ka(e) || !Object.prototype.hasOwnProperty.call(e, Sb);
  }
  const { assign: ii } = Object;
  function Ob(e) {
    return !!(at(e) && e.effect);
  }
  function Ab(e, t, n, i) {
    const { state: l, actions: c, getters: f } = t, h = n.state.value[e];
    let p;
    function v() {
      h || (n.state.value[e] = l ? l() : {});
      const g = pd(n.state.value[e]);
      return ii(g, c, Object.keys(f || {}).reduce((T, N) => (T[N] = Va(tl(() => {
        Ps(n);
        const R = n._s.get(e);
        return f[N].call(R, R);
      })), T), {}));
    }
    return p = yh(e, v, t, n, i, true), p;
  }
  function yh(e, t, n = {}, i, l, c) {
    let f;
    const h = ii({
      actions: {}
    }, n), p = {
      deep: true
    };
    let v, g, T = /* @__PURE__ */ new Set(), N = /* @__PURE__ */ new Set(), R;
    const F = i.state.value[e];
    !c && !F && (i.state.value[e] = {}), jt({});
    let C;
    function he(fe) {
      let te;
      v = g = false, typeof fe == "function" ? (fe(i.state.value[e]), te = {
        type: Gr.patchFunction,
        storeId: e,
        events: R
      }) : (La(i.state.value[e], fe), te = {
        type: Gr.patchObject,
        payload: fe,
        storeId: e,
        events: R
      });
      const me = C = /* @__PURE__ */ Symbol();
      ku().then(() => {
        C === me && (v = true);
      }), g = true, zi(T, te, i.state.value[e]);
    }
    const ne = c ? function() {
      const { state: te } = n, me = te ? te() : {};
      this.$patch((Re) => {
        ii(Re, me);
      });
    } : wh;
    function H() {
      f.stop(), T.clear(), N.clear(), i._s.delete(e);
    }
    const Y = (fe, te = "") => {
      if (tu in fe) return fe[sa] = te, fe;
      const me = function() {
        Ps(i);
        const Re = Array.from(arguments), de = /* @__PURE__ */ new Set(), Ge = /* @__PURE__ */ new Set();
        function ft(Pe) {
          de.add(Pe);
        }
        function zt(Pe) {
          Ge.add(Pe);
        }
        zi(N, {
          args: Re,
          name: me[sa],
          store: ue,
          after: ft,
          onError: zt
        });
        let Ye;
        try {
          Ye = fe.apply(this && this.$id === e ? this : ue, Re);
        } catch (Pe) {
          throw zi(Ge, Pe), Pe;
        }
        return Ye instanceof Promise ? Ye.then((Pe) => (zi(de, Pe), Pe)).catch((Pe) => (zi(Ge, Pe), Promise.reject(Pe))) : (zi(de, Ye), Ye);
      };
      return me[tu] = true, me[sa] = te, me;
    }, U = {
      _p: i,
      $id: e,
      $onAction: eu.bind(null, N),
      $patch: he,
      $reset: ne,
      $subscribe(fe, te = {}) {
        const me = eu(T, fe, te.detached, () => Re()), Re = f.run(() => Yi(() => i.state.value[e], (de) => {
          (te.flush === "sync" ? g : v) && fe({
            storeId: e,
            type: Gr.direct,
            events: R
          }, de);
        }, ii({}, p, te)));
        return me;
      },
      $dispose: H
    }, ue = hs(U);
    i._s.set(e, ue);
    const re = (i._a && i._a.runWithContext || Tb)(() => i._e.run(() => (f = du()).run(() => t({
      action: Y
    }))));
    for (const fe in re) {
      const te = re[fe];
      if (at(te) && !Ob(te) || Gn(te)) c || (F && _b(te) && (at(te) ? te.value = F[fe] : La(te, F[fe])), i.state.value[e][fe] = te);
      else if (typeof te == "function") {
        const me = Y(te, fe);
        re[fe] = me, h.actions[fe] = te;
      }
    }
    return ii(ue, re), ii(De(ue), re), Object.defineProperty(ue, "$state", {
      get: () => i.state.value[e],
      set: (fe) => {
        he((te) => {
          ii(te, fe);
        });
      }
    }), i._p.forEach((fe) => {
      ii(ue, f.run(() => fe({
        store: ue,
        app: i._a,
        pinia: i,
        options: h
      })));
    }), F && c && n.hydrate && n.hydrate(ue.$state, F), v = true, g = true, ue;
  }
  _v = function(e, t, n) {
    let i;
    const l = typeof t == "function";
    i = l ? n : t;
    function c(f, h) {
      const p = Yd();
      return f = f || (p ? Lr(gh, null) : null), f && Ps(f), f = ph, f._s.has(e) || (l ? yh(e, t, i, f) : Ab(e, i, f)), f._s.get(e);
    }
    return c.$id = e, c;
  };
  let nu, Da, Rb, Mb, Io, Nb, Pb, Cb, kb, Lb, Db, xb, Fb, jb, Ub, Gb, Wb, Bb, zb, $b, Vb, Hb, Kb, ul;
  nu = [
    {
      name: "trackmaker",
      displayName: "TrackMaker",
      moduleInit: async () => {
        var _a3;
        const e = Rf((await qs(async () => {
          const { default: n } = await import("./App-BBtXuoke.js");
          return {
            default: n
          };
        }, __vite__mapDeps([0,1,2,3,4]), import.meta.url)).default);
        e.use(mh()), e.use((await qs(async () => {
          const { default: n } = await import("./index-BXa26r9c.js");
          return {
            default: n
          };
        }, __vite__mapDeps([5,2,1,6]), import.meta.url)).default), e.use((await qs(async () => {
          const { i18n: n } = await import("./index-D8M1YVbb.js");
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
          const t = async (p, v) => z0() ? false : window.permissionConfirm ? window.permissionConfirm(v) : false, n = await li.init({
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
          if (n.isErr()) throw n.error;
          const i = n.value, l = i.getStorage();
          if (l.isErr()) throw l.error;
          const c = await l.value.init();
          if (c.isErr()) throw c.error;
          const f = i.getDeviceOrientation();
          if (f.isOk()) {
            const p = f.value;
            (await p.init()).isErr() ? console.warn("[Platform] DeviceOrientation not supported on this platform") : await p.start();
          }
          const h = i.getIMU();
          if (h.isOk()) {
            const p = h.value;
            (await p.init()).isErr() ? console.warn("[Platform] IMU not supported on this platform") : (await p.startAcceleration(), await p.startGyroscope());
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
          e = Fc();
        } catch {
        }
        try {
          if (!Rs()) throw new Error("Platform services not initialized");
          e && console.time("Geolocation service initialise");
          const n = await ln.getInstance();
          if (n.isErr()) throw n.error;
          const i = n.value;
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
  Ov = Zy;
  Av = Jy;
  Da = {
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
  Rb = () => {
    try {
      const t = localStorage.getItem("interface-language");
      if (t && Da[t]) return t;
    } catch {
    }
    return navigator.language.startsWith("zh") ? "zh-CN" : "en";
  };
  Mb = Rb();
  Io = (e) => Da[Mb][e] || Da.en[e] || e;
  Nb = {
    class: "splash-container"
  };
  Pb = {
    class: "splash-content"
  };
  Cb = {
    key: 0,
    class: "loading-section"
  };
  kb = {
    class: "progress-container"
  };
  Lb = {
    class: "progress-bar"
  };
  Db = {
    class: "progress-text"
  };
  xb = {
    class: "loading-details"
  };
  Fb = {
    class: "current-module"
  };
  jb = {
    key: 1,
    class: "error-section"
  };
  Ub = {
    class: "error-message"
  };
  Gb = {
    key: 0
  };
  Wb = {
    key: 1
  };
  Bb = {
    key: 2,
    class: "timeout-section"
  };
  zb = {
    key: 3,
    class: "permission-section"
  };
  $b = {
    class: "permission-message"
  };
  Vb = {
    class: "permission-buttons"
  };
  Hb = Ad({
    __name: "SplashScreen",
    setup(e) {
      const t = jt(0), n = jt(""), i = jt(""), l = jt(0), c = jt(0), f = jt(false), h = jt(false), p = jt(""), v = jt(false), g = jt("");
      let T = null;
      const N = jt("light"), R = () => {
        try {
          window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches ? N.value = "dark" : N.value = "light";
        } catch {
          N.value = "light";
        }
      }, F = () => {
        N.value === "dark" ? document.documentElement.setAttribute("data-theme", "dark") : document.documentElement.setAttribute("data-theme", "light"), console.info("[Splash Screen] Theme applied:", N.value);
      }, C = tl(() => Math.round(t.value / 100 * 100)), he = {
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
      }, ne = {
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
      }, Y = (ge) => (g.value = Io(ge), v.value = true, new Promise((re) => {
        T = (fe) => {
          v.value = false, re(fe);
        };
      })), U = () => {
        T == null ? void 0 : T(true);
      }, ue = () => {
        T == null ? void 0 : T(false);
      };
      return window.permissionConfirm = Y, Qr(() => {
        var _a3;
        R(), F(), (_a3 = document.getElementById("pre-splash")) == null ? void 0 : _a3.remove();
        const ge = (re, fe = /* @__PURE__ */ new Set()) => {
          if (fe.has(re)) return 0;
          fe.add(re);
          const te = nu.find((Re) => Re.name === re);
          if (!te) return 0;
          let me = 1;
          if (te.dependencies) for (const Re of te.dependencies) me += ge(Re, fe);
          return me;
        };
        l.value = ge("trackmaker"), console.log("=== Start Loading Modules ==="), Kf(nu, "trackmaker", 3e4, {
          logger: he,
          progressReporter: ne,
          printLog: true
        }).then(() => {
          n.value = "All modules loaded successfully", i.value = "TrackMaker", t.value = 100, console.log("=== All Modules Loaded ===");
        }).catch((re) => {
          const fe = String(re.toString());
          if (fe.toLowerCase().includes("timeout")) {
            const te = fe.split("Trackback").map((me) => me.replace(/((^:\s*)|(,\s*$))/g, ""));
            console.table(te.map((me) => ({
              Trackback: me
            })), [
              "Trackback"
            ]), h.value = true;
          } else p.value = fe, f.value = true;
          console.log("=== Failed to initialize all modules ==="), console.error(re);
        });
      }), (ge, re) => (rn(), Nn("div", Nb, [
        We("div", Pb, [
          re[8] || (re[8] = We("div", {
            class: "logo-section"
          }, [
            We("div", {
              class: "app-logo"
            }, [
              We("img", {
                src: fg,
                alt: "TrackMaker Logo",
                height: "80",
                width: "80"
              })
            ]),
            We("h1", {
              class: "app-title"
            }, " TrackMaker ")
          ], -1)),
          !f.value && !h.value ? (rn(), Nn("div", Cb, [
            We("div", kb, [
              We("div", Lb, [
                We("div", {
                  class: "progress-fill",
                  style: cs({
                    width: `${C.value}%`
                  })
                }, null, 4)
              ]),
              We("div", Db, Cn(C.value) + "% ", 1)
            ]),
            We("div", xb, [
              We("p", Fb, " Loading: " + Cn(i.value), 1)
            ]),
            re[0] || (re[0] = We("div", {
              class: "loading-animation"
            }, [
              We("div", {
                class: "spinner"
              })
            ], -1))
          ])) : po("", true),
          f.value ? (rn(), Nn("div", jb, [
            re[1] || (re[1] = We("div", {
              class: "error-icon"
            }, " \u26A0\uFE0F ", -1)),
            re[2] || (re[2] = We("h2", null, "Loading Error", -1)),
            We("div", Ub, [
              (rn(true), Nn(Rt, null, Ud((p.value ?? "").split(`
`), (fe) => (rn(), Nn("div", {
                key: fe,
                style: {
                  display: "block",
                  "font-family": "monospace",
                  overflow: "auto"
                }
              }, [
                fe.toLocaleLowerCase().includes("trackback") ? (rn(), Nn("strong", Gb, Cn(fe), 1)) : (rn(), Nn("span", Wb, Cn(fe), 1))
              ]))), 128))
            ]),
            We("button", {
              class: "retry-button",
              onClick: H
            }, " Retry ")
          ])) : po("", true),
          h.value ? (rn(), Nn("div", Bb, [
            re[3] || (re[3] = We("div", {
              class: "timeout-icon"
            }, " \u23F0 ", -1)),
            re[4] || (re[4] = We("h2", null, "Connection Timeout", -1)),
            re[5] || (re[5] = We("p", null, "Unable to load required modules within the timeout period.", -1)),
            re[6] || (re[6] = We("p", null, "Please check your internet connection and try again.", -1)),
            We("button", {
              class: "retry-button",
              onClick: H
            }, " Retry ")
          ])) : po("", true),
          v.value ? (rn(), Nn("div", zb, [
            re[7] || (re[7] = We("div", {
              class: "permission-icon"
            }, " \u{1F4CD} ", -1)),
            We("h2", null, Cn(qi(Io)("permission.title")), 1),
            We("p", $b, Cn(g.value), 1),
            We("div", Vb, [
              We("button", {
                class: "permission-button deny",
                onClick: ue
              }, Cn(qi(Io)("permission.deny")), 1),
              We("button", {
                class: "permission-button allow",
                onClick: U
              }, Cn(qi(Io)("permission.allow")), 1)
            ])
          ])) : po("", true)
        ])
      ]));
    }
  });
  qb = (e, t) => {
    const n = e.__vccOpts || e;
    for (const [i, l] of t) n[i] = l;
    return n;
  };
  Kb = qb(Hb, [
    [
      "__scopeId",
      "data-v-d9d60867"
    ]
  ]);
  ul = Rf(Kb);
  ul.use(mh());
  ul.mount("#splash");
  window.splashScreen = ul;
})();
export {
  Rs as $,
  uv as A,
  Yi as B,
  lv as C,
  ma as D,
  tv as E,
  Rt as F,
  k0 as G,
  Is as H,
  Sn as I,
  av as J,
  ev as K,
  pi as L,
  Md as M,
  Nd as N,
  cv as O,
  ku as P,
  Zb as Q,
  Et as R,
  Vn as S,
  Xb as T,
  pd as U,
  cs as V,
  fv as W,
  at as X,
  Va as Y,
  cd as Z,
  qb as _,
  __tla,
  We as a,
  ur as a$,
  Si as a0,
  go as a1,
  rv as a2,
  sv as a3,
  Qb as a4,
  iv as a5,
  Ud as a6,
  hv as a7,
  Sv as a8,
  dv as a9,
  Cf as aA,
  Lf as aB,
  Cm as aC,
  lr as aD,
  hc as aE,
  Pw as aF,
  Dn as aG,
  Ff as aH,
  cr as aI,
  Mm as aJ,
  Fm as aK,
  kf as aL,
  Qg as aM,
  Sw as aN,
  Vw as aO,
  pw as aP,
  Pf as aQ,
  hy as aR,
  ld as aS,
  Xi as aT,
  bs as aU,
  pu as aV,
  Bh as aW,
  Yd as aX,
  Yb as aY,
  Hn as aZ,
  pv as a_,
  na as aa,
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
  qs as aq,
  z0 as ar,
  mi as as,
  gi as at,
  er as au,
  Xl as av,
  Bg as aw,
  Vg as ax,
  qg as ay,
  Wg as az,
  jt as b,
  to as b0,
  j as b1,
  M as b2,
  Tv as b3,
  du as b4,
  Nn as c,
  Ad as d,
  Cd as e,
  Ya as f,
  hs as g,
  Np as h,
  Lr as i,
  tl as j,
  Qr as k,
  Ja as l,
  Ep as m,
  Ua as n,
  rn as o,
  Kd as p,
  _v as q,
  ua as r,
  po as s,
  Jb as t,
  Nt as u,
  qi as v,
  ov as w,
  Td as x,
  vp as y,
  Cn as z
};
