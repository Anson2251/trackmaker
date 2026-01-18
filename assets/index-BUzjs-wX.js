const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["./App-BXj7MuLJ.js","./sketch-store-BZ_vJaai.js","./vue-i18n-BavbX26t.js","./index-CTsMkMb_.js","./App-BkoMreV2.css","./index-4luW4dJB.js","./index-BLky9M9f.css"])))=>i.map(i=>d[i]);
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
let Os, fv, Ji, uv, ma, rv, Et, D0, Is, Sn, lv, iv, gi, Fd, jd, hv, ku, Qb, It, Vn, tv, md, ls, dv, at, Ha, hd, Kb, We, hr, _i, go, av, cv, nv, sv, qd, pv, Av, gv, Lh, Dh, km, lr, dl, Lw, Dn, jh, ur, Nm, Um, kh, tm, Aw, qw, mw, Ch, py, ud, Qi, bs, gu, $f, Rd, Zb, Hn, mv, na, Yh, Es, De, ov, Sv, vv, Tv, Iv, yv, Ev, bv, Ov, Mv, wv, cn, qs, V0, wi, mi, tr, Qc, $g, qg, Kg, Bg, Ut, to, j, M, _v, pu, Pn, Dd, Gd, Ja, fs, Cp, Nr, nc, Qr, Za, Tp, Ga, rn, Ad, Rv, ua, po, Xb, Pt, Yi, ev, _d, Ip, Cn;
let __tla = (async () => {
  var _a2;
  (function() {
    const t = document.createElement("link").relList;
    if (t && t.supports && t.supports("modulepreload")) return;
    for (const c of document.querySelectorAll('link[rel="modulepreload"]')) i(c);
    new MutationObserver((c) => {
      for (const l of c) if (l.type === "childList") for (const h of l.addedNodes) h.tagName === "LINK" && h.rel === "modulepreload" && i(h);
    }).observe(document, {
      childList: true,
      subtree: true
    });
    function n(c) {
      const l = {};
      return c.integrity && (l.integrity = c.integrity), c.referrerPolicy && (l.referrerPolicy = c.referrerPolicy), c.crossOrigin === "use-credentials" ? l.credentials = "include" : c.crossOrigin === "anonymous" ? l.credentials = "omit" : l.credentials = "same-origin", l;
    }
    function i(c) {
      if (c.ep) return;
      c.ep = true;
      const l = n(c);
      fetch(c.href, l);
    }
  })();
  function Fa(e) {
    const t = /* @__PURE__ */ Object.create(null);
    for (const n of e.split(",")) t[n] = 1;
    return (n) => n in t;
  }
  const Fe = {}, Hi = [], hn = () => {
  }, ru = () => false, rs = (e) => e.charCodeAt(0) === 111 && e.charCodeAt(1) === 110 && (e.charCodeAt(2) > 122 || e.charCodeAt(2) < 97), ja = (e) => e.startsWith("onUpdate:"), dt = Object.assign, Ua = (e, t) => {
    const n = e.indexOf(t);
    n > -1 && e.splice(n, 1);
  }, Pf = Object.prototype.hasOwnProperty, Be = (e, t) => Pf.call(e, t), Ie = Array.isArray, qi = (e) => Zr(e) === "[object Map]", ou = (e) => Zr(e) === "[object Set]", Nf = (e) => Zr(e) === "[object RegExp]", _e = (e) => typeof e == "function", st = (e) => typeof e == "string", qn = (e) => typeof e == "symbol", Ye = (e) => e !== null && typeof e == "object", su = (e) => (Ye(e) || _e(e)) && _e(e.then) && _e(e.catch), au = Object.prototype.toString, Zr = (e) => au.call(e), Cf = (e) => Zr(e).slice(8, -1), cu = (e) => Zr(e) === "[object Object]", os = (e) => st(e) && e !== "NaN" && e[0] !== "-" && "" + parseInt(e, 10) === e, Rr = Fa(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"), ss = (e) => {
    const t = /* @__PURE__ */ Object.create(null);
    return ((n) => t[n] || (t[n] = e(n)));
  }, Lf = /-\w/g, Zt = ss((e) => e.replace(Lf, (t) => t.slice(1).toUpperCase())), kf = /\B([A-Z])/g, Yn = ss((e) => e.replace(kf, "-$1").toLowerCase()), as = ss((e) => e.charAt(0).toUpperCase() + e.slice(1)), Ls = ss((e) => e ? `on${as(e)}` : ""), Wt = (e, t) => !Object.is(e, t), Or = (e, ...t) => {
    for (let n = 0; n < e.length; n++) e[n](...t);
  }, lu = (e, t, n, i = false) => {
    Object.defineProperty(e, t, {
      configurable: true,
      enumerable: false,
      writable: i,
      value: n
    });
  }, Df = (e) => {
    const t = parseFloat(e);
    return isNaN(t) ? e : t;
  }, xf = (e) => {
    const t = st(e) ? Number(e) : NaN;
    return isNaN(t) ? e : t;
  };
  let gc;
  const cs = () => gc || (gc = typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : typeof window < "u" ? window : typeof global < "u" ? global : {});
  ls = function(e) {
    if (Ie(e)) {
      const t = {};
      for (let n = 0; n < e.length; n++) {
        const i = e[n], c = st(i) ? Gf(i) : ls(i);
        if (c) for (const l in c) t[l] = c[l];
      }
      return t;
    } else if (st(e) || Ye(e)) return e;
  };
  const Ff = /;(?![^(]*\))/g, jf = /:([^]+)/, Uf = /\/\*[^]*?\*\//g;
  function Gf(e) {
    const t = {};
    return e.replace(Uf, "").split(Ff).forEach((n) => {
      if (n) {
        const i = n.split(jf);
        i.length > 1 && (t[i[0].trim()] = i[1].trim());
      }
    }), t;
  }
  Ga = function(e) {
    let t = "";
    if (st(e)) t = e;
    else if (Ie(e)) for (let n = 0; n < e.length; n++) {
      const i = Ga(e[n]);
      i && (t += i + " ");
    }
    else if (Ye(e)) for (const n in e) e[n] && (t += n + " ");
    return t.trim();
  };
  const Wf = "itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly", zf = Fa(Wf);
  function uu(e) {
    return !!e || e === "";
  }
  let hu, fu, ks;
  hu = (e) => !!(e && e.__v_isRef === true);
  Cn = (e) => st(e) ? e : e == null ? "" : Ie(e) || Ye(e) && (e.toString === au || !_e(e.toString)) ? hu(e) ? Cn(e.value) : JSON.stringify(e, fu, 2) : String(e);
  fu = (e, t) => hu(t) ? fu(e, t.value) : qi(t) ? {
    [`Map(${t.size})`]: [
      ...t.entries()
    ].reduce((n, [i, c], l) => (n[ks(i, l) + " =>"] = c, n), {})
  } : ou(t) ? {
    [`Set(${t.size})`]: [
      ...t.values()
    ].map((n) => ks(n))
  } : qn(t) ? ks(t) : Ye(t) && !Ie(t) && !cu(t) ? String(t) : t;
  ks = (e, t = "") => {
    var n;
    return qn(e) ? `Symbol(${(n = e.description) != null ? n : t})` : e;
  };
  function Bf(e) {
    return e == null ? "initial" : typeof e == "string" ? e === "" ? " " : e : String(e);
  }
  let Rt;
  class du {
    constructor(t = false) {
      this.detached = t, this._active = true, this._on = 0, this.effects = [], this.cleanups = [], this._isPaused = false, this.parent = Rt, !t && Rt && (this.index = (Rt.scopes || (Rt.scopes = [])).push(this) - 1);
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
        const n = Rt;
        try {
          return Rt = this, t();
        } finally {
          Rt = n;
        }
      }
    }
    on() {
      ++this._on === 1 && (this.prevScope = Rt, Rt = this);
    }
    off() {
      this._on > 0 && --this._on === 0 && (Rt = this.prevScope, this.prevScope = void 0);
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
          const c = this.parent.scopes.pop();
          c && c !== this && (this.parent.scopes[this.index] = c, c.index = this.index);
        }
        this.parent = void 0;
      }
    }
  }
  pu = function(e) {
    return new du(e);
  };
  gu = function() {
    return Rt;
  };
  $f = function(e, t = false) {
    Rt && Rt.cleanups.push(e);
  };
  let Ze;
  const Ds = /* @__PURE__ */ new WeakSet();
  class mu {
    constructor(t) {
      this.fn = t, this.deps = void 0, this.depsTail = void 0, this.flags = 5, this.next = void 0, this.cleanup = void 0, this.scheduler = void 0, Rt && Rt.active && Rt.effects.push(this);
    }
    pause() {
      this.flags |= 64;
    }
    resume() {
      this.flags & 64 && (this.flags &= -65, Ds.has(this) && (Ds.delete(this), this.trigger()));
    }
    notify() {
      this.flags & 2 && !(this.flags & 32) || this.flags & 8 || yu(this);
    }
    run() {
      if (!(this.flags & 1)) return this.fn();
      this.flags |= 2, mc(this), bu(this);
      const t = Ze, n = fn;
      Ze = this, fn = true;
      try {
        return this.fn();
      } finally {
        vu(this), Ze = t, fn = n, this.flags &= -3;
      }
    }
    stop() {
      if (this.flags & 1) {
        for (let t = this.deps; t; t = t.nextDep) Ba(t);
        this.deps = this.depsTail = void 0, mc(this), this.onStop && this.onStop(), this.flags &= -2;
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
  let wu = 0, Mr, Pr;
  function yu(e, t = false) {
    if (e.flags |= 8, t) {
      e.next = Pr, Pr = e;
      return;
    }
    e.next = Mr, Mr = e;
  }
  function Wa() {
    wu++;
  }
  function za() {
    if (--wu > 0) return;
    if (Pr) {
      let t = Pr;
      for (Pr = void 0; t; ) {
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
  function bu(e) {
    for (let t = e.deps; t; t = t.nextDep) t.version = -1, t.prevActiveLink = t.dep.activeLink, t.dep.activeLink = t;
  }
  function vu(e) {
    let t, n = e.depsTail, i = n;
    for (; i; ) {
      const c = i.prevDep;
      i.version === -1 ? (i === n && (n = c), Ba(i), Vf(i)) : t = i, i.dep.activeLink = i.prevActiveLink, i.prevActiveLink = void 0, i = c;
    }
    e.deps = t, e.depsTail = n;
  }
  function aa(e) {
    for (let t = e.deps; t; t = t.nextDep) if (t.dep.version !== t.version || t.dep.computed && (Eu(t.dep.computed) || t.dep.version !== t.version)) return true;
    return !!e._dirty;
  }
  function Eu(e) {
    if (e.flags & 4 && !(e.flags & 16) || (e.flags &= -17, e.globalVersion === Wr) || (e.globalVersion = Wr, !e.isSSR && e.flags & 128 && (!e.deps && !e._dirty || !aa(e)))) return;
    e.flags |= 2;
    const t = e.dep, n = Ze, i = fn;
    Ze = e, fn = true;
    try {
      bu(e);
      const c = e.fn(e._value);
      (t.version === 0 || Wt(c, e._value)) && (e.flags |= 128, e._value = c, t.version++);
    } catch (c) {
      throw t.version++, c;
    } finally {
      Ze = n, fn = i, vu(e), e.flags &= -3;
    }
  }
  function Ba(e, t = false) {
    const { dep: n, prevSub: i, nextSub: c } = e;
    if (i && (i.nextSub = c, e.prevSub = void 0), c && (c.prevSub = i, e.nextSub = void 0), n.subs === e && (n.subs = i, !i && n.computed)) {
      n.computed.flags &= -5;
      for (let l = n.computed.deps; l; l = l.nextDep) Ba(l, true);
    }
    !t && !--n.sc && n.map && n.map.delete(n.key);
  }
  function Vf(e) {
    const { prevDep: t, nextDep: n } = e;
    t && (t.nextDep = n, e.prevDep = void 0), n && (n.prevDep = t, e.nextDep = void 0);
  }
  let fn = true;
  const Iu = [];
  function zn() {
    Iu.push(fn), fn = false;
  }
  function Bn() {
    const e = Iu.pop();
    fn = e === void 0 ? true : e;
  }
  function mc(e) {
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
  class Hf {
    constructor(t, n) {
      this.sub = t, this.dep = n, this.version = n.version, this.nextDep = this.prevDep = this.nextSub = this.prevSub = this.prevActiveLink = void 0;
    }
  }
  class us {
    constructor(t) {
      this.computed = t, this.version = 0, this.activeLink = void 0, this.subs = void 0, this.map = void 0, this.key = void 0, this.sc = 0, this.__v_skip = true;
    }
    track(t) {
      if (!Ze || !fn || Ze === this.computed) return;
      let n = this.activeLink;
      if (n === void 0 || n.sub !== Ze) n = this.activeLink = new Hf(Ze, this), Ze.deps ? (n.prevDep = Ze.depsTail, Ze.depsTail.nextDep = n, Ze.depsTail = n) : Ze.deps = Ze.depsTail = n, Tu(n);
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
      Wa();
      try {
        for (let n = this.subs; n; n = n.prevSub) n.sub.notify() && n.sub.dep.notify();
      } finally {
        za();
      }
    }
  }
  function Tu(e) {
    if (e.dep.sc++, e.sub.flags & 4) {
      const t = e.dep.computed;
      if (t && !e.dep.subs) {
        t.flags |= 20;
        for (let i = t.deps; i; i = i.nextDep) Tu(i);
      }
      const n = e.dep.subs;
      n !== e && (e.prevSub = n, n && (n.nextSub = e)), e.dep.subs = e;
    }
  }
  const Lo = /* @__PURE__ */ new WeakMap(), Li = /* @__PURE__ */ Symbol(""), ca = /* @__PURE__ */ Symbol(""), zr = /* @__PURE__ */ Symbol("");
  function Ot(e, t, n) {
    if (fn && Ze) {
      let i = Lo.get(e);
      i || Lo.set(e, i = /* @__PURE__ */ new Map());
      let c = i.get(n);
      c || (i.set(n, c = new us()), c.map = i, c.key = n), c.track();
    }
  }
  function xn(e, t, n, i, c, l) {
    const h = Lo.get(e);
    if (!h) {
      Wr++;
      return;
    }
    const f = (p) => {
      p && p.trigger();
    };
    if (Wa(), t === "clear") h.forEach(f);
    else {
      const p = Ie(e), v = p && os(n);
      if (p && n === "length") {
        const g = Number(i);
        h.forEach((T, P) => {
          (P === "length" || P === zr || !qn(P) && P >= g) && f(T);
        });
      } else switch ((n !== void 0 || h.has(void 0)) && f(h.get(n)), v && f(h.get(zr)), t) {
        case "add":
          p ? v && f(h.get("length")) : (f(h.get(Li)), qi(e) && f(h.get(ca)));
          break;
        case "delete":
          p || (f(h.get(Li)), qi(e) && f(h.get(ca)));
          break;
        case "set":
          qi(e) && f(h.get(Li));
          break;
      }
    }
    za();
  }
  function qf(e, t) {
    const n = Lo.get(e);
    return n && n.get(t);
  }
  function Ui(e) {
    const t = De(e);
    return t === e ? t : (Ot(t, "iterate", zr), Jt(e) ? t : t.map(dn));
  }
  function hs(e) {
    return Ot(e = De(e), "iterate", zr), e;
  }
  function ri(e, t) {
    return $n(e) ? Gn(e) ? Xi(dn(t)) : Xi(t) : dn(t);
  }
  const Yf = {
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
      return pr(this, "pop");
    },
    push(...e) {
      return pr(this, "push", e);
    },
    reduce(e, ...t) {
      return wc(this, "reduce", e, t);
    },
    reduceRight(e, ...t) {
      return wc(this, "reduceRight", e, t);
    },
    shift() {
      return pr(this, "shift");
    },
    some(e, t) {
      return Mn(this, "some", e, t, void 0, arguments);
    },
    splice(...e) {
      return pr(this, "splice", e);
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
      return pr(this, "unshift", e);
    },
    values() {
      return xs(this, "values", (e) => ri(this, e));
    }
  };
  function xs(e, t, n) {
    const i = hs(e), c = i[t]();
    return i !== e && !Jt(e) && (c._next = c.next, c.next = () => {
      const l = c._next();
      return l.done || (l.value = n(l.value)), l;
    }), c;
  }
  const Kf = Array.prototype;
  function Mn(e, t, n, i, c, l) {
    const h = hs(e), f = h !== e && !Jt(e), p = h[t];
    if (p !== Kf[t]) {
      const T = p.apply(e, l);
      return f ? dn(T) : T;
    }
    let v = n;
    h !== e && (f ? v = function(T, P) {
      return n.call(this, ri(e, T), P, e);
    } : n.length > 2 && (v = function(T, P) {
      return n.call(this, T, P, e);
    }));
    const g = p.call(h, v, i);
    return f && c ? c(g) : g;
  }
  function wc(e, t, n, i) {
    const c = hs(e);
    let l = n;
    return c !== e && (Jt(e) ? n.length > 3 && (l = function(h, f, p) {
      return n.call(this, h, f, p, e);
    }) : l = function(h, f, p) {
      return n.call(this, h, ri(e, f), p, e);
    }), c[t](l, ...i);
  }
  function Fs(e, t, n) {
    const i = De(e);
    Ot(i, "iterate", zr);
    const c = i[t](...n);
    return (c === -1 || c === false) && ds(n[0]) ? (n[0] = De(n[0]), i[t](...n)) : c;
  }
  function pr(e, t, n = []) {
    zn(), Wa();
    const i = De(e)[t].apply(e, n);
    return za(), Bn(), i;
  }
  const Jf = Fa("__proto__,__v_isRef,__isVue"), Su = new Set(Object.getOwnPropertyNames(Symbol).filter((e) => e !== "arguments" && e !== "caller").map((e) => Symbol[e]).filter(qn));
  function Zf(e) {
    qn(e) || (e = String(e));
    const t = De(this);
    return Ot(t, "has", e), t.hasOwnProperty(e);
  }
  class _u {
    constructor(t = false, n = false) {
      this._isReadonly = t, this._isShallow = n;
    }
    get(t, n, i) {
      if (n === "__v_skip") return t.__v_skip;
      const c = this._isReadonly, l = this._isShallow;
      if (n === "__v_isReactive") return !c;
      if (n === "__v_isReadonly") return c;
      if (n === "__v_isShallow") return l;
      if (n === "__v_raw") return i === (c ? l ? ad : Mu : l ? Ou : Ru).get(t) || Object.getPrototypeOf(t) === Object.getPrototypeOf(i) ? t : void 0;
      const h = Ie(t);
      if (!c) {
        let p;
        if (h && (p = Yf[n])) return p;
        if (n === "hasOwnProperty") return Zf;
      }
      const f = Reflect.get(t, n, at(t) ? t : i);
      if ((qn(n) ? Su.has(n) : Jf(n)) || (c || Ot(t, "get", n), l)) return f;
      if (at(f)) {
        const p = h && os(n) ? f : f.value;
        return c && Ye(p) ? ua(p) : p;
      }
      return Ye(f) ? c ? ua(f) : fs(f) : f;
    }
  }
  class Au extends _u {
    constructor(t = false) {
      super(false, t);
    }
    set(t, n, i, c) {
      let l = t[n];
      const h = Ie(t) && os(n);
      if (!this._isShallow) {
        const v = $n(l);
        if (!Jt(i) && !$n(i) && (l = De(l), i = De(i)), !h && at(l) && !at(i)) return v || (l.value = i), true;
      }
      const f = h ? Number(n) < t.length : Be(t, n), p = Reflect.set(t, n, i, at(t) ? t : c);
      return t === De(c) && (f ? Wt(i, l) && xn(t, "set", n, i) : xn(t, "add", n, i)), p;
    }
    deleteProperty(t, n) {
      const i = Be(t, n);
      t[n];
      const c = Reflect.deleteProperty(t, n);
      return c && i && xn(t, "delete", n, void 0), c;
    }
    has(t, n) {
      const i = Reflect.has(t, n);
      return (!qn(n) || !Su.has(n)) && Ot(t, "has", n), i;
    }
    ownKeys(t) {
      return Ot(t, "iterate", Ie(t) ? "length" : Li), Reflect.ownKeys(t);
    }
  }
  class Xf extends _u {
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
  const Qf = new Au(), ed = new Xf(), td = new Au(true);
  const la = (e) => e, ao = (e) => Reflect.getPrototypeOf(e);
  function nd(e, t, n) {
    return function(...i) {
      const c = this.__v_raw, l = De(c), h = qi(l), f = e === "entries" || e === Symbol.iterator && h, p = e === "keys" && h, v = c[e](...i), g = n ? la : t ? Xi : dn;
      return !t && Ot(l, "iterate", p ? ca : Li), {
        next() {
          const { value: T, done: P } = v.next();
          return P ? {
            value: T,
            done: P
          } : {
            value: f ? [
              g(T[0]),
              g(T[1])
            ] : g(T),
            done: P
          };
        },
        [Symbol.iterator]() {
          return this;
        }
      };
    };
  }
  function co(e) {
    return function(...t) {
      return e === "delete" ? false : e === "clear" ? void 0 : this;
    };
  }
  function id(e, t) {
    const n = {
      get(c) {
        const l = this.__v_raw, h = De(l), f = De(c);
        e || (Wt(c, f) && Ot(h, "get", c), Ot(h, "get", f));
        const { has: p } = ao(h), v = t ? la : e ? Xi : dn;
        if (p.call(h, c)) return v(l.get(c));
        if (p.call(h, f)) return v(l.get(f));
        l !== h && l.get(c);
      },
      get size() {
        const c = this.__v_raw;
        return !e && Ot(De(c), "iterate", Li), c.size;
      },
      has(c) {
        const l = this.__v_raw, h = De(l), f = De(c);
        return e || (Wt(c, f) && Ot(h, "has", c), Ot(h, "has", f)), c === f ? l.has(c) : l.has(c) || l.has(f);
      },
      forEach(c, l) {
        const h = this, f = h.__v_raw, p = De(f), v = t ? la : e ? Xi : dn;
        return !e && Ot(p, "iterate", Li), f.forEach((g, T) => c.call(l, v(g), v(T), h));
      }
    };
    return dt(n, e ? {
      add: co("add"),
      set: co("set"),
      delete: co("delete"),
      clear: co("clear")
    } : {
      add(c) {
        !t && !Jt(c) && !$n(c) && (c = De(c));
        const l = De(this);
        return ao(l).has.call(l, c) || (l.add(c), xn(l, "add", c, c)), this;
      },
      set(c, l) {
        !t && !Jt(l) && !$n(l) && (l = De(l));
        const h = De(this), { has: f, get: p } = ao(h);
        let v = f.call(h, c);
        v || (c = De(c), v = f.call(h, c));
        const g = p.call(h, c);
        return h.set(c, l), v ? Wt(l, g) && xn(h, "set", c, l) : xn(h, "add", c, l), this;
      },
      delete(c) {
        const l = De(this), { has: h, get: f } = ao(l);
        let p = h.call(l, c);
        p || (c = De(c), p = h.call(l, c)), f && f.call(l, c);
        const v = l.delete(c);
        return p && xn(l, "delete", c, void 0), v;
      },
      clear() {
        const c = De(this), l = c.size !== 0, h = c.clear();
        return l && xn(c, "clear", void 0, void 0), h;
      }
    }), [
      "keys",
      "values",
      "entries",
      Symbol.iterator
    ].forEach((c) => {
      n[c] = nd(c, e, t);
    }), n;
  }
  function $a(e, t) {
    const n = id(e, t);
    return (i, c, l) => c === "__v_isReactive" ? !e : c === "__v_isReadonly" ? e : c === "__v_raw" ? i : Reflect.get(Be(n, c) && c in i ? n : i, c, l);
  }
  const rd = {
    get: $a(false, false)
  }, od = {
    get: $a(false, true)
  }, sd = {
    get: $a(true, false)
  };
  const Ru = /* @__PURE__ */ new WeakMap(), Ou = /* @__PURE__ */ new WeakMap(), Mu = /* @__PURE__ */ new WeakMap(), ad = /* @__PURE__ */ new WeakMap();
  function cd(e) {
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
  function ld(e) {
    return e.__v_skip || !Object.isExtensible(e) ? 0 : cd(Cf(e));
  }
  fs = function(e) {
    return $n(e) ? e : Va(e, false, Qf, rd, Ru);
  };
  ud = function(e) {
    return Va(e, false, td, od, Ou);
  };
  ua = function(e) {
    return Va(e, true, ed, sd, Mu);
  };
  function Va(e, t, n, i, c) {
    if (!Ye(e) || e.__v_raw && !(t && e.__v_isReactive)) return e;
    const l = ld(e);
    if (l === 0) return e;
    const h = c.get(e);
    if (h) return h;
    const f = new Proxy(e, l === 2 ? i : n);
    return c.set(e, f), f;
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
  Ha = function(e) {
    return !Be(e, "__v_skip") && Object.isExtensible(e) && lu(e, "__v_skip", true), e;
  };
  const dn = (e) => Ye(e) ? fs(e) : e, Xi = (e) => Ye(e) ? ua(e) : e;
  at = function(e) {
    return e ? e.__v_isRef === true : false;
  };
  Ut = function(e) {
    return Pu(e, false);
  };
  hd = function(e) {
    return Pu(e, true);
  };
  function Pu(e, t) {
    return at(e) ? e : new fd(e, t);
  }
  class fd {
    constructor(t, n) {
      this.dep = new us(), this.__v_isRef = true, this.__v_isShallow = false, this._rawValue = n ? t : De(t), this._value = n ? t : dn(t), this.__v_isShallow = n;
    }
    get value() {
      return this.dep.track(), this._value;
    }
    set value(t) {
      const n = this._rawValue, i = this.__v_isShallow || Jt(t) || $n(t);
      t = i ? t : De(t), Wt(t, n) && (this._rawValue = t, this._value = i ? t : dn(t), this.dep.trigger());
    }
  }
  Yi = function(e) {
    return at(e) ? e.value : e;
  };
  Zb = function(e) {
    return _e(e) ? e() : Yi(e);
  };
  const dd = {
    get: (e, t, n) => t === "__v_raw" ? e : Yi(Reflect.get(e, t, n)),
    set: (e, t, n, i) => {
      const c = e[t];
      return at(c) && !at(n) ? (c.value = n, true) : Reflect.set(e, t, n, i);
    }
  };
  function Nu(e) {
    return Gn(e) ? e : new Proxy(e, dd);
  }
  class pd {
    constructor(t) {
      this.__v_isRef = true, this._value = void 0;
      const n = this.dep = new us(), { get: i, set: c } = t(n.track.bind(n), n.trigger.bind(n));
      this._get = i, this._set = c;
    }
    get value() {
      return this._value = this._get();
    }
    set value(t) {
      this._set(t);
    }
  }
  function gd(e) {
    return new pd(e);
  }
  md = function(e) {
    const t = Ie(e) ? new Array(e.length) : {};
    for (const n in e) t[n] = Cu(e, n);
    return t;
  };
  class wd {
    constructor(t, n, i) {
      this._object = t, this._key = n, this._defaultValue = i, this.__v_isRef = true, this._value = void 0, this._raw = De(t);
      let c = true, l = t;
      if (!Ie(t) || !os(String(n))) do
        c = !ds(l) || Jt(l);
      while (c && (l = l.__v_raw));
      this._shallow = c;
    }
    get value() {
      let t = this._object[this._key];
      return this._shallow && (t = Yi(t)), this._value = t === void 0 ? this._defaultValue : t;
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
      return qf(this._raw, this._key);
    }
  }
  class yd {
    constructor(t) {
      this._getter = t, this.__v_isRef = true, this.__v_isReadonly = true, this._value = void 0;
    }
    get value() {
      return this._value = this._getter();
    }
  }
  Xb = function(e, t, n) {
    return at(e) ? e : _e(e) ? new yd(e) : Ye(e) && arguments.length > 1 ? Cu(e, t, n) : Ut(e);
  };
  function Cu(e, t, n) {
    return new wd(e, t, n);
  }
  class bd {
    constructor(t, n, i) {
      this.fn = t, this.setter = n, this._value = void 0, this.dep = new us(this), this.__v_isRef = true, this.deps = void 0, this.depsTail = void 0, this.flags = 16, this.globalVersion = Wr - 1, this.next = void 0, this.effect = this, this.__v_isReadonly = !n, this.isSSR = i;
    }
    notify() {
      if (this.flags |= 16, !(this.flags & 8) && Ze !== this) return yu(this, true), true;
    }
    get value() {
      const t = this.dep.track();
      return Eu(this), t && (t.version = this.dep.version), this._value;
    }
    set value(t) {
      this.setter && this.setter(t);
    }
  }
  function vd(e, t, n = false) {
    let i, c;
    return _e(e) ? i = e : (i = e.get, c = e.set), new bd(i, c, n);
  }
  const lo = {}, ko = /* @__PURE__ */ new WeakMap();
  let Oi;
  function Ed(e, t = false, n = Oi) {
    if (n) {
      let i = ko.get(n);
      i || ko.set(n, i = []), i.push(e);
    }
  }
  function Id(e, t, n = Fe) {
    const { immediate: i, deep: c, once: l, scheduler: h, augmentJob: f, call: p } = n, v = (U) => c ? U : Jt(U) || c === false || c === 0 ? Fn(U, 1) : Fn(U);
    let g, T, P, O, F = false, C = false;
    if (at(e) ? (T = () => e.value, F = Jt(e)) : Gn(e) ? (T = () => v(e), F = true) : Ie(e) ? (C = true, F = e.some((U) => Gn(U) || Jt(U)), T = () => e.map((U) => {
      if (at(U)) return U.value;
      if (Gn(U)) return v(U);
      if (_e(U)) return p ? p(U, 2) : U();
    })) : _e(e) ? t ? T = p ? () => p(e, 2) : e : T = () => {
      if (P) {
        zn();
        try {
          P();
        } finally {
          Bn();
        }
      }
      const U = Oi;
      Oi = g;
      try {
        return p ? p(e, 3, [
          O
        ]) : e(O);
      } finally {
        Oi = U;
      }
    } : T = hn, t && c) {
      const U = T, ue = c === true ? 1 / 0 : c;
      T = () => Fn(U(), ue);
    }
    const fe = gu(), ne = () => {
      g.stop(), fe && fe.active && Ua(fe.effects, g);
    };
    if (l && t) {
      const U = t;
      t = (...ue) => {
        U(...ue), ne();
      };
    }
    let H = C ? new Array(e.length).fill(lo) : lo;
    const Y = (U) => {
      if (!(!(g.flags & 1) || !g.dirty && !U)) if (t) {
        const ue = g.run();
        if (c || F || (C ? ue.some((ge, re) => Wt(ge, H[re])) : Wt(ue, H))) {
          P && P();
          const ge = Oi;
          Oi = g;
          try {
            const re = [
              ue,
              H === lo ? void 0 : C && H[0] === lo ? [] : H,
              O
            ];
            H = ue, p ? p(t, 3, re) : t(...re);
          } finally {
            Oi = ge;
          }
        }
      } else g.run();
    };
    return f && f(Y), g = new mu(T), g.scheduler = h ? () => h(Y, false) : Y, O = (U) => Ed(U, false, g), P = g.onStop = () => {
      const U = ko.get(g);
      if (U) {
        if (p) p(U, 4);
        else for (const ue of U) ue();
        ko.delete(g);
      }
    }, t ? i ? Y(true) : H = g.run() : h ? h(Y.bind(null, true), true) : g.run(), ne.pause = g.pause.bind(g), ne.resume = g.resume.bind(g), ne.stop = ne, ne;
  }
  function Fn(e, t = 1 / 0, n) {
    if (t <= 0 || !Ye(e) || e.__v_skip || (n = n || /* @__PURE__ */ new Map(), (n.get(e) || 0) >= t)) return e;
    if (n.set(e, t), t--, at(e)) Fn(e.value, t, n);
    else if (Ie(e)) for (let i = 0; i < e.length; i++) Fn(e[i], t, n);
    else if (ou(e) || qi(e)) e.forEach((i) => {
      Fn(i, t, n);
    });
    else if (cu(e)) {
      for (const i in e) Fn(e[i], t, n);
      for (const i of Object.getOwnPropertySymbols(e)) Object.prototype.propertyIsEnumerable.call(e, i) && Fn(e[i], t, n);
    }
    return e;
  }
  function Xr(e, t, n, i) {
    try {
      return i ? e(...i) : e();
    } catch (c) {
      ps(c, t, n);
    }
  }
  function pn(e, t, n, i) {
    if (_e(e)) {
      const c = Xr(e, t, n, i);
      return c && su(c) && c.catch((l) => {
        ps(l, t, n);
      }), c;
    }
    if (Ie(e)) {
      const c = [];
      for (let l = 0; l < e.length; l++) c.push(pn(e[l], t, n, i));
      return c;
    }
  }
  function ps(e, t, n, i = true) {
    const c = t ? t.vnode : null, { errorHandler: l, throwUnhandledErrorInProduction: h } = t && t.appContext.config || Fe;
    if (t) {
      let f = t.parent;
      const p = t.proxy, v = `https://vuejs.org/error-reference/#runtime-${n}`;
      for (; f; ) {
        const g = f.ec;
        if (g) {
          for (let T = 0; T < g.length; T++) if (g[T](e, p, v) === false) return;
        }
        f = f.parent;
      }
      if (l) {
        zn(), Xr(l, null, 10, [
          e,
          p,
          v
        ]), Bn();
        return;
      }
    }
    Td(e, n, c, i, h);
  }
  function Td(e, t, n, i = true, c = false) {
    if (c) throw e;
    console.error(e);
  }
  const Dt = [];
  let vn = -1;
  const Ki = [];
  let oi = null, Vi = 0;
  const Lu = Promise.resolve();
  let Do = null;
  ku = function(e) {
    const t = Do || Lu;
    return e ? t.then(this ? e.bind(this) : e) : t;
  };
  function Sd(e) {
    let t = vn + 1, n = Dt.length;
    for (; t < n; ) {
      const i = t + n >>> 1, c = Dt[i], l = Br(c);
      l < e || l === e && c.flags & 2 ? t = i + 1 : n = i;
    }
    return t;
  }
  function qa(e) {
    if (!(e.flags & 1)) {
      const t = Br(e), n = Dt[Dt.length - 1];
      !n || !(e.flags & 2) && t >= Br(n) ? Dt.push(e) : Dt.splice(Sd(t), 0, e), e.flags |= 1, Du();
    }
  }
  function Du() {
    Do || (Do = Lu.then(ju));
  }
  function xu(e) {
    Ie(e) ? Ki.push(...e) : oi && e.id === -1 ? oi.splice(Vi + 1, 0, e) : e.flags & 1 || (Ki.push(e), e.flags |= 1), Du();
  }
  function yc(e, t, n = vn + 1) {
    for (; n < Dt.length; n++) {
      const i = Dt[n];
      if (i && i.flags & 2) {
        if (e && i.id !== e.uid) continue;
        Dt.splice(n, 1), n--, i.flags & 4 && (i.flags &= -2), i(), i.flags & 4 || (i.flags &= -2);
      }
    }
  }
  function Fu(e) {
    if (Ki.length) {
      const t = [
        ...new Set(Ki)
      ].sort((n, i) => Br(n) - Br(i));
      if (Ki.length = 0, oi) {
        oi.push(...t);
        return;
      }
      for (oi = t, Vi = 0; Vi < oi.length; Vi++) {
        const n = oi[Vi];
        n.flags & 4 && (n.flags &= -2), n.flags & 8 || n(), n.flags &= -2;
      }
      oi = null, Vi = 0;
    }
  }
  const Br = (e) => e.id == null ? e.flags & 2 ? -1 : 1 / 0 : e.id;
  function ju(e) {
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
      vn = -1, Dt.length = 0, Fu(), Do = null, (Dt.length || Ki.length) && ju();
    }
  }
  let Tt = null, Uu = null;
  function xo(e) {
    const t = Tt;
    return Tt = e, Uu = e && e.type.__scopeId || null, t;
  }
  _d = function(e, t = Tt, n) {
    if (!t || e._n) return e;
    const i = (...c) => {
      i._d && zo(-1);
      const l = xo(t);
      let h;
      try {
        h = e(...c);
      } finally {
        xo(l), i._d && zo(1);
      }
      return h;
    };
    return i._n = true, i._c = true, i._d = true, i;
  };
  Qb = function(e, t) {
    if (Tt === null) return e;
    const n = vs(Tt), i = e.dirs || (e.dirs = []);
    for (let c = 0; c < t.length; c++) {
      let [l, h, f, p = Fe] = t[c];
      l && (_e(l) && (l = {
        mounted: l,
        updated: l
      }), l.deep && Fn(h), i.push({
        dir: l,
        instance: n,
        value: h,
        oldValue: void 0,
        arg: f,
        modifiers: p
      }));
    }
    return e;
  };
  function Ei(e, t, n, i) {
    const c = e.dirs, l = t && t.dirs;
    for (let h = 0; h < c.length; h++) {
      const f = c[h];
      l && (f.oldValue = l[h].value);
      let p = f.dir[i];
      p && (zn(), pn(p, n, 8, [
        e.el,
        f,
        e,
        t
      ]), Bn());
    }
  }
  Ad = function(e, t) {
    if (Mt) {
      let n = Mt.provides;
      const i = Mt.parent && Mt.parent.provides;
      i === n && (n = Mt.provides = Object.create(i)), n[e] = t;
    }
  };
  Nr = function(e, t, n = false) {
    const i = gi();
    if (i || ki) {
      let c = ki ? ki._context.provides : i ? i.parent == null || i.ce ? i.vnode.appContext && i.vnode.appContext.provides : i.parent.provides : void 0;
      if (c && e in c) return c[e];
      if (arguments.length > 1) return n && _e(t) ? t.call(i && i.proxy) : t;
    }
  };
  Rd = function() {
    return !!(gi() || ki);
  };
  const Od = /* @__PURE__ */ Symbol.for("v-scx"), Md = () => Nr(Od);
  ev = function(e, t) {
    return gs(e, null, t);
  };
  function Pd(e, t) {
    return gs(e, null, {
      flush: "sync"
    });
  }
  Ji = function(e, t, n) {
    return gs(e, t, n);
  };
  function gs(e, t, n = Fe) {
    const { immediate: i, deep: c, flush: l, once: h } = n, f = dt({}, n), p = t && i || !t && l !== "post";
    let v;
    if (Hr) {
      if (l === "sync") {
        const O = Md();
        v = O.__watcherHandles || (O.__watcherHandles = []);
      } else if (!p) {
        const O = () => {
        };
        return O.stop = hn, O.resume = hn, O.pause = hn, O;
      }
    }
    const g = Mt;
    f.call = (O, F, C) => pn(O, g, F, C);
    let T = false;
    l === "post" ? f.scheduler = (O) => {
      wt(O, g && g.suspense);
    } : l !== "sync" && (T = true, f.scheduler = (O, F) => {
      F ? O() : qa(O);
    }), f.augmentJob = (O) => {
      t && (O.flags |= 4), T && (O.flags |= 2, g && (O.id = g.uid, O.i = g));
    };
    const P = Id(e, t, f);
    return Hr && (v ? v.push(P) : p && P()), P;
  }
  function Nd(e, t, n) {
    const i = this.proxy, c = st(e) ? e.includes(".") ? Gu(i, e) : () => i[e] : e.bind(i, i);
    let l;
    _e(t) ? l = t : (l = t.handler, n = t);
    const h = eo(this), f = gs(c, l.bind(i), n);
    return h(), f;
  }
  function Gu(e, t) {
    const n = t.split(".");
    return () => {
      let i = e;
      for (let c = 0; c < n.length && i; c++) i = i[n[c]];
      return i;
    };
  }
  const Wu = /* @__PURE__ */ Symbol("_vte"), zu = (e) => e.__isTeleport, Cr = (e) => e && (e.disabled || e.disabled === ""), bc = (e) => e && (e.defer || e.defer === ""), vc = (e) => typeof SVGElement < "u" && e instanceof SVGElement, Ec = (e) => typeof MathMLElement == "function" && e instanceof MathMLElement, ha = (e, t) => {
    const n = e && e.to;
    return st(n) ? t ? t(n) : null : n;
  }, Bu = {
    name: "Teleport",
    __isTeleport: true,
    process(e, t, n, i, c, l, h, f, p, v) {
      const { mc: g, pc: T, pbc: P, o: { insert: O, querySelector: F, createText: C, createComment: fe } } = v, ne = Cr(t.props);
      let { shapeFlag: H, children: Y, dynamicChildren: U } = t;
      if (e == null) {
        const ue = t.el = C(""), ge = t.anchor = C("");
        O(ue, n, i), O(ge, n, i);
        const re = (te, me) => {
          H & 16 && g(Y, te, me, c, l, h, f, p);
        }, he = () => {
          const te = t.target = ha(t.props, F), me = $u(te, t, C, O);
          te && (h !== "svg" && vc(te) ? h = "svg" : h !== "mathml" && Ec(te) && (h = "mathml"), c && c.isCE && (c.ce._teleportTargets || (c.ce._teleportTargets = /* @__PURE__ */ new Set())).add(te), ne || (re(te, me), To(t, false)));
        };
        ne && (re(n, ge), To(t, true)), bc(t.props) ? (t.el.__isMounted = false, wt(() => {
          he(), delete t.el.__isMounted;
        }, l)) : he();
      } else {
        if (bc(t.props) && e.el.__isMounted === false) {
          wt(() => {
            Bu.process(e, t, n, i, c, l, h, f, p, v);
          }, l);
          return;
        }
        t.el = e.el, t.targetStart = e.targetStart;
        const ue = t.anchor = e.anchor, ge = t.target = e.target, re = t.targetAnchor = e.targetAnchor, he = Cr(e.props), te = he ? n : ge, me = he ? ue : re;
        if (h === "svg" || vc(ge) ? h = "svg" : (h === "mathml" || Ec(ge)) && (h = "mathml"), U ? (P(e.dynamicChildren, U, te, c, l, h, f), ec(e, t, true)) : p || T(e, t, te, me, c, l, h, f, false), ne) he ? t.props && e.props && t.props.to !== e.props.to && (t.props.to = e.props.to) : uo(t, n, ue, v, 1);
        else if ((t.props && t.props.to) !== (e.props && e.props.to)) {
          const Oe = t.target = ha(t.props, F);
          Oe && uo(t, Oe, null, v, 0);
        } else he && uo(t, ge, re, v, 1);
        To(t, ne);
      }
    },
    remove(e, t, n, { um: i, o: { remove: c } }, l) {
      const { shapeFlag: h, children: f, anchor: p, targetStart: v, targetAnchor: g, target: T, props: P } = e;
      if (T && (c(v), c(g)), l && c(p), h & 16) {
        const O = l || !Cr(P);
        for (let F = 0; F < f.length; F++) {
          const C = f[F];
          i(C, t, n, O, !!C.dynamicChildren);
        }
      }
    },
    move: uo,
    hydrate: Cd
  };
  function uo(e, t, n, { o: { insert: i }, m: c }, l = 2) {
    l === 0 && i(e.targetAnchor, t, n);
    const { el: h, anchor: f, shapeFlag: p, children: v, props: g } = e, T = l === 2;
    if (T && i(h, t, n), (!T || Cr(g)) && p & 16) for (let P = 0; P < v.length; P++) c(v[P], t, n, 2);
    T && i(f, t, n);
  }
  function Cd(e, t, n, i, c, l, { o: { nextSibling: h, parentNode: f, querySelector: p, insert: v, createText: g } }, T) {
    function P(C, fe, ne, H) {
      fe.anchor = T(h(C), fe, f(C), n, i, c, l), fe.targetStart = ne, fe.targetAnchor = H;
    }
    const O = t.target = ha(t.props, p), F = Cr(t.props);
    if (O) {
      const C = O._lpa || O.firstChild;
      if (t.shapeFlag & 16) if (F) P(e, t, C, C && h(C));
      else {
        t.anchor = h(e);
        let fe = C;
        for (; fe; ) {
          if (fe && fe.nodeType === 8) {
            if (fe.data === "teleport start anchor") t.targetStart = fe;
            else if (fe.data === "teleport anchor") {
              t.targetAnchor = fe, O._lpa = t.targetAnchor && h(t.targetAnchor);
              break;
            }
          }
          fe = h(fe);
        }
        t.targetAnchor || $u(O, t, g, v), T(C && h(C), t, O, n, i, c, l);
      }
      To(t, F);
    } else F && t.shapeFlag & 16 && P(e, t, e, h(e));
    return t.anchor && h(t.anchor);
  }
  tv = Bu;
  function To(e, t) {
    const n = e.ctx;
    if (n && n.ut) {
      let i, c;
      for (t ? (i = e.el, c = e.anchor) : (i = e.targetStart, c = e.targetAnchor); i && i !== c; ) i.nodeType === 1 && i.setAttribute("data-v-owner", n.uid), i = i.nextSibling;
      n.ut();
    }
  }
  function $u(e, t, n, i) {
    const c = t.targetStart = n(""), l = t.targetAnchor = n("");
    return c[Wu] = l, e && (i(c, e), i(l, e)), l;
  }
  const kn = /* @__PURE__ */ Symbol("_leaveCb"), ho = /* @__PURE__ */ Symbol("_enterCb");
  function Vu() {
    const e = {
      isMounted: false,
      isLeaving: false,
      isUnmounting: false,
      leavingVNodes: /* @__PURE__ */ new Map()
    };
    return Qr(() => {
      e.isMounted = true;
    }), Ja(() => {
      e.isUnmounting = true;
    }), e;
  }
  const tn = [
    Function,
    Array
  ], Hu = {
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
  }, qu = (e) => {
    const t = e.subTree;
    return t.component ? qu(t.component) : t;
  }, Ld = {
    name: "BaseTransition",
    props: Hu,
    setup(e, { slots: t }) {
      const n = gi(), i = Vu();
      return () => {
        const c = t.default && Ya(t.default(), true);
        if (!c || !c.length) return;
        const l = Yu(c), h = De(e), { mode: f } = h;
        if (i.isLeaving) return js(l);
        const p = Ic(l);
        if (!p) return js(l);
        let v = $r(p, h, i, n, (T) => v = T);
        p.type !== It && di(p, v);
        let g = n.subTree && Ic(n.subTree);
        if (g && g.type !== It && !ai(g, p) && qu(n).type !== It) {
          let T = $r(g, h, i, n);
          if (di(g, T), f === "out-in" && p.type !== It) return i.isLeaving = true, T.afterLeave = () => {
            i.isLeaving = false, n.job.flags & 8 || n.update(), delete T.afterLeave, g = void 0;
          }, js(l);
          f === "in-out" && p.type !== It ? T.delayLeave = (P, O, F) => {
            const C = Ku(i, g);
            C[String(g.key)] = g, P[kn] = () => {
              O(), P[kn] = void 0, delete v.delayedLeave, g = void 0;
            }, v.delayedLeave = () => {
              F(), delete v.delayedLeave, g = void 0;
            };
          } : g = void 0;
        } else g && (g = void 0);
        return l;
      };
    }
  };
  function Yu(e) {
    let t = e[0];
    if (e.length > 1) {
      for (const n of e) if (n.type !== It) {
        t = n;
        break;
      }
    }
    return t;
  }
  const kd = Ld;
  function Ku(e, t) {
    const { leavingVNodes: n } = e;
    let i = n.get(t.type);
    return i || (i = /* @__PURE__ */ Object.create(null), n.set(t.type, i)), i;
  }
  function $r(e, t, n, i, c) {
    const { appear: l, mode: h, persisted: f = false, onBeforeEnter: p, onEnter: v, onAfterEnter: g, onEnterCancelled: T, onBeforeLeave: P, onLeave: O, onAfterLeave: F, onLeaveCancelled: C, onBeforeAppear: fe, onAppear: ne, onAfterAppear: H, onAppearCancelled: Y } = t, U = String(e.key), ue = Ku(n, e), ge = (te, me) => {
      te && pn(te, i, 9, me);
    }, re = (te, me) => {
      const Oe = me[1];
      ge(te, me), Ie(te) ? te.every((de) => de.length <= 1) && Oe() : te.length <= 1 && Oe();
    }, he = {
      mode: h,
      persisted: f,
      beforeEnter(te) {
        let me = p;
        if (!n.isMounted) if (l) me = fe || p;
        else return;
        te[kn] && te[kn](true);
        const Oe = ue[U];
        Oe && ai(e, Oe) && Oe.el[kn] && Oe.el[kn](), ge(me, [
          te
        ]);
      },
      enter(te) {
        let me = v, Oe = g, de = T;
        if (!n.isMounted) if (l) me = ne || v, Oe = H || g, de = Y || T;
        else return;
        let Ge = false;
        const ht = te[ho] = (Bt) => {
          Ge || (Ge = true, Bt ? ge(de, [
            te
          ]) : ge(Oe, [
            te
          ]), he.delayedLeave && he.delayedLeave(), te[ho] = void 0);
        };
        me ? re(me, [
          te,
          ht
        ]) : ht();
      },
      leave(te, me) {
        const Oe = String(e.key);
        if (te[ho] && te[ho](true), n.isUnmounting) return me();
        ge(P, [
          te
        ]);
        let de = false;
        const Ge = te[kn] = (ht) => {
          de || (de = true, me(), ht ? ge(C, [
            te
          ]) : ge(F, [
            te
          ]), te[kn] = void 0, ue[Oe] === e && delete ue[Oe]);
        };
        ue[Oe] = e, O ? re(O, [
          te,
          Ge
        ]) : Ge();
      },
      clone(te) {
        const me = $r(te, t, n, i, c);
        return c && c(me), me;
      }
    };
    return he;
  }
  function js(e) {
    if (ms(e)) return e = Vn(e), e.children = null, e;
  }
  function Ic(e) {
    if (!ms(e)) return zu(e.type) && e.children ? Yu(e.children) : e;
    if (e.component) return e.component.subTree;
    const { shapeFlag: t, children: n } = e;
    if (n) {
      if (t & 16) return n[0];
      if (t & 32 && _e(n.default)) return n.default();
    }
  }
  function di(e, t) {
    e.shapeFlag & 6 && e.component ? (e.transition = t, di(e.component.subTree, t)) : e.shapeFlag & 128 ? (e.ssContent.transition = t.clone(e.ssContent), e.ssFallback.transition = t.clone(e.ssFallback)) : e.transition = t;
  }
  function Ya(e, t = false, n) {
    let i = [], c = 0;
    for (let l = 0; l < e.length; l++) {
      let h = e[l];
      const f = n == null ? h.key : String(n) + String(h.key != null ? h.key : l);
      h.type === Et ? (h.patchFlag & 128 && c++, i = i.concat(Ya(h.children, t, f))) : (t || h.type !== It) && i.push(f != null ? Vn(h, {
        key: f
      }) : h);
    }
    if (c > 1) for (let l = 0; l < i.length; l++) i[l].patchFlag = -2;
    return i;
  }
  Dd = function(e, t) {
    return _e(e) ? dt({
      name: e.name
    }, t, {
      setup: e
    }) : e;
  };
  function Ju(e) {
    e.ids = [
      e.ids[0] + e.ids[2]++ + "-",
      0,
      0
    ];
  }
  nv = function(e) {
    const t = gi(), n = hd(null);
    if (t) {
      const c = t.refs === Fe ? t.refs = {} : t.refs;
      Object.defineProperty(c, e, {
        enumerable: true,
        get: () => n.value,
        set: (l) => n.value = l
      });
    }
    return n;
  };
  const Fo = /* @__PURE__ */ new WeakMap();
  function Lr(e, t, n, i, c = false) {
    if (Ie(e)) {
      e.forEach((F, C) => Lr(F, t && (Ie(t) ? t[C] : t), n, i, c));
      return;
    }
    if (hi(i) && !c) {
      i.shapeFlag & 512 && i.type.__asyncResolved && i.component.subTree.component && Lr(e, t, n, i.component.subTree);
      return;
    }
    const l = i.shapeFlag & 4 ? vs(i.component) : i.el, h = c ? null : l, { i: f, r: p } = e, v = t && t.r, g = f.refs === Fe ? f.refs = {} : f.refs, T = f.setupState, P = De(T), O = T === Fe ? ru : (F) => Be(P, F);
    if (v != null && v !== p) {
      if (Tc(t), st(v)) g[v] = null, O(v) && (T[v] = null);
      else if (at(v)) {
        v.value = null;
        const F = t;
        F.k && (g[F.k] = null);
      }
    }
    if (_e(p)) Xr(p, f, 12, [
      h,
      g
    ]);
    else {
      const F = st(p), C = at(p);
      if (F || C) {
        const fe = () => {
          if (e.f) {
            const ne = F ? O(p) ? T[p] : g[p] : p.value;
            if (c) Ie(ne) && Ua(ne, l);
            else if (Ie(ne)) ne.includes(l) || ne.push(l);
            else if (F) g[p] = [
              l
            ], O(p) && (T[p] = g[p]);
            else {
              const H = [
                l
              ];
              p.value = H, e.k && (g[e.k] = H);
            }
          } else F ? (g[p] = h, O(p) && (T[p] = h)) : C && (p.value = h, e.k && (g[e.k] = h));
        };
        if (h) {
          const ne = () => {
            fe(), Fo.delete(e);
          };
          ne.id = -1, Fo.set(e, ne), wt(ne, n);
        } else Tc(e), fe();
      }
    }
  }
  function Tc(e) {
    const t = Fo.get(e);
    t && (t.flags |= 8, Fo.delete(e));
  }
  cs().requestIdleCallback;
  cs().cancelIdleCallback;
  let hi, ms, xd;
  hi = (e) => !!e.type.__asyncLoader;
  ms = (e) => e.type.__isKeepAlive;
  xd = {
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
      const n = gi(), i = n.ctx;
      if (!i.renderer) return () => {
        const H = t.default && t.default();
        return H && H.length === 1 ? H[0] : H;
      };
      const c = /* @__PURE__ */ new Map(), l = /* @__PURE__ */ new Set();
      let h = null;
      const f = n.suspense, { renderer: { p, m: v, um: g, o: { createElement: T } } } = i, P = T("div");
      i.activate = (H, Y, U, ue, ge) => {
        const re = H.component;
        v(H, Y, U, 0, f), p(re.vnode, H, Y, U, re, f, ue, H.slotScopeIds, ge), wt(() => {
          re.isDeactivated = false, re.a && Or(re.a);
          const he = H.props && H.props.onVnodeMounted;
          he && nn(he, re.parent, H);
        }, f);
      }, i.deactivate = (H) => {
        const Y = H.component;
        Go(Y.m), Go(Y.a), v(H, P, null, 1, f), wt(() => {
          Y.da && Or(Y.da);
          const U = H.props && H.props.onVnodeUnmounted;
          U && nn(U, Y.parent, H), Y.isDeactivated = true;
        }, f);
      };
      function O(H) {
        Us(H), g(H, n, f, true);
      }
      function F(H) {
        c.forEach((Y, U) => {
          const ue = ya(hi(Y) ? Y.type.__asyncResolved || {} : Y.type);
          ue && !H(ue) && C(U);
        });
      }
      function C(H) {
        const Y = c.get(H);
        Y && (!h || !ai(Y, h)) ? O(Y) : h && Us(h), c.delete(H), l.delete(H);
      }
      Ji(() => [
        e.include,
        e.exclude
      ], ([H, Y]) => {
        H && F((U) => Tr(H, U)), Y && F((U) => !Tr(Y, U));
      }, {
        flush: "post",
        deep: true
      });
      let fe = null;
      const ne = () => {
        fe != null && (Wo(n.subTree.type) ? wt(() => {
          c.set(fe, fo(n.subTree));
        }, n.subTree.suspense) : c.set(fe, fo(n.subTree)));
      };
      return Qr(ne), Ka(ne), Ja(() => {
        c.forEach((H) => {
          const { subTree: Y, suspense: U } = n, ue = fo(Y);
          if (H.type === ue.type && H.key === ue.key) {
            Us(ue);
            const ge = ue.component.da;
            ge && wt(ge, U);
            return;
          }
          O(H);
        });
      }), () => {
        if (fe = null, !t.default) return h = null;
        const H = t.default(), Y = H[0];
        if (H.length > 1) return h = null, H;
        if (!Qi(Y) || !(Y.shapeFlag & 4) && !(Y.shapeFlag & 128)) return h = null, Y;
        let U = fo(Y);
        if (U.type === It) return h = null, U;
        const ue = U.type, ge = ya(hi(U) ? U.type.__asyncResolved || {} : ue), { include: re, exclude: he, max: te } = e;
        if (re && (!ge || !Tr(re, ge)) || he && ge && Tr(he, ge)) return U.shapeFlag &= -257, h = U, Y;
        const me = U.key == null ? ue : U.key, Oe = c.get(me);
        return U.el && (U = Vn(U), Y.shapeFlag & 128 && (Y.ssContent = U)), fe = me, Oe ? (U.el = Oe.el, U.component = Oe.component, U.transition && di(U, U.transition), U.shapeFlag |= 512, l.delete(me), l.add(me)) : (l.add(me), te && l.size > parseInt(te, 10) && C(l.values().next().value)), U.shapeFlag |= 256, h = U, Wo(Y.type) ? Y : U;
      };
    }
  };
  iv = xd;
  function Tr(e, t) {
    return Ie(e) ? e.some((n) => Tr(n, t)) : st(e) ? e.split(",").includes(t) : Nf(e) ? (e.lastIndex = 0, e.test(t)) : false;
  }
  Fd = function(e, t) {
    Zu(e, "a", t);
  };
  jd = function(e, t) {
    Zu(e, "da", t);
  };
  function Zu(e, t, n = Mt) {
    const i = e.__wdc || (e.__wdc = () => {
      let c = n;
      for (; c; ) {
        if (c.isDeactivated) return;
        c = c.parent;
      }
      return e();
    });
    if (ws(t, i, n), n) {
      let c = n.parent;
      for (; c && c.parent; ) ms(c.parent.vnode) && Ud(i, t, n, c), c = c.parent;
    }
  }
  function Ud(e, t, n, i) {
    const c = ws(t, e, i, true);
    Za(() => {
      Ua(i[t], c);
    }, n);
  }
  function Us(e) {
    e.shapeFlag &= -257, e.shapeFlag &= -513;
  }
  function fo(e) {
    return e.shapeFlag & 128 ? e.ssContent : e;
  }
  function ws(e, t, n = Mt, i = false) {
    if (n) {
      const c = n[e] || (n[e] = []), l = t.__weh || (t.__weh = (...h) => {
        zn();
        const f = eo(n), p = pn(t, n, e, h);
        return f(), Bn(), p;
      });
      return i ? c.unshift(l) : c.push(l), l;
    }
  }
  let Kn, Xu, Ka, Wd, zd, Bd;
  Kn = (e) => (t, n = Mt) => {
    (!Hr || e === "sp") && ws(e, (...i) => t(...i), n);
  };
  Gd = Kn("bm");
  Qr = Kn("m");
  Xu = Kn("bu");
  Ka = Kn("u");
  Ja = Kn("bum");
  Za = Kn("um");
  Wd = Kn("sp");
  zd = Kn("rtg");
  Bd = Kn("rtc");
  function $d(e, t = Mt) {
    ws("ec", e, t);
  }
  const Vd = "components", Qu = /* @__PURE__ */ Symbol.for("v-ndc");
  rv = function(e) {
    return st(e) ? Hd(Vd, e, false) || e : e || Qu;
  };
  function Hd(e, t, n = true, i = false) {
    const c = Tt || Mt;
    if (c) {
      const l = c.type;
      {
        const f = ya(l, false);
        if (f && (f === t || f === Zt(t) || f === as(Zt(t)))) return l;
      }
      const h = Sc(c[e] || l[e], t) || Sc(c.appContext[e], t);
      return !h && i ? l : h;
    }
  }
  function Sc(e, t) {
    return e && (e[t] || e[Zt(t)] || e[as(Zt(t))]);
  }
  qd = function(e, t, n, i) {
    let c;
    const l = n, h = Ie(e);
    if (h || st(e)) {
      const f = h && Gn(e);
      let p = false, v = false;
      f && (p = !Jt(e), v = $n(e), e = hs(e)), c = new Array(e.length);
      for (let g = 0, T = e.length; g < T; g++) c[g] = t(p ? v ? Xi(dn(e[g])) : dn(e[g]) : e[g], g, void 0, l);
    } else if (typeof e == "number") {
      c = new Array(e);
      for (let f = 0; f < e; f++) c[f] = t(f + 1, f, void 0, l);
    } else if (Ye(e)) if (e[Symbol.iterator]) c = Array.from(e, (f, p) => t(f, p, void 0, l));
    else {
      const f = Object.keys(e);
      c = new Array(f.length);
      for (let p = 0, v = f.length; p < v; p++) {
        const g = f[p];
        c[p] = t(e[g], g, p, l);
      }
    }
    else c = [];
    return c;
  };
  ov = function(e, t) {
    for (let n = 0; n < t.length; n++) {
      const i = t[n];
      if (Ie(i)) for (let c = 0; c < i.length; c++) e[i[c].name] = i[c].fn;
      else i && (e[i.name] = i.key ? (...c) => {
        const l = i.fn(...c);
        return l && (l.key = i.key), l;
      } : i.fn);
    }
    return e;
  };
  sv = function(e, t, n = {}, i, c) {
    if (Tt.ce || Tt.parent && hi(Tt.parent) && Tt.parent.ce) {
      const v = Object.keys(n).length > 0;
      return t !== "default" && (n.name = t), rn(), ma(Et, null, [
        Pt("slot", n, i && i())
      ], v ? -2 : 64);
    }
    let l = e[t];
    l && l._c && (l._d = false), rn();
    const h = l && eh(l(n)), f = n.key || h && h.key, p = ma(Et, {
      key: (f && !qn(f) ? f : `_${t}`) + (!h && i ? "_fb" : "")
    }, h || (i ? i() : []), h && e._ === 1 ? 64 : -2);
    return !c && p.scopeId && (p.slotScopeIds = [
      p.scopeId + "-s"
    ]), l && l._c && (l._d = true), p;
  };
  function eh(e) {
    return e.some((t) => Qi(t) ? !(t.type === It || t.type === Et && !eh(t.children)) : true) ? e : null;
  }
  const fa = (e) => e ? yh(e) ? vs(e) : fa(e.parent) : null, kr = dt(/* @__PURE__ */ Object.create(null), {
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
    $options: (e) => nh(e),
    $forceUpdate: (e) => e.f || (e.f = () => {
      qa(e.update);
    }),
    $nextTick: (e) => e.n || (e.n = ku.bind(e.proxy)),
    $watch: (e) => Nd.bind(e)
  }), Gs = (e, t) => e !== Fe && !e.__isScriptSetup && Be(e, t), Yd = {
    get({ _: e }, t) {
      if (t === "__v_skip") return true;
      const { ctx: n, setupState: i, data: c, props: l, accessCache: h, type: f, appContext: p } = e;
      if (t[0] !== "$") {
        const P = h[t];
        if (P !== void 0) switch (P) {
          case 1:
            return i[t];
          case 2:
            return c[t];
          case 4:
            return n[t];
          case 3:
            return l[t];
        }
        else {
          if (Gs(i, t)) return h[t] = 1, i[t];
          if (c !== Fe && Be(c, t)) return h[t] = 2, c[t];
          if (Be(l, t)) return h[t] = 3, l[t];
          if (n !== Fe && Be(n, t)) return h[t] = 4, n[t];
          da && (h[t] = 0);
        }
      }
      const v = kr[t];
      let g, T;
      if (v) return t === "$attrs" && Ot(e.attrs, "get", ""), v(e);
      if ((g = f.__cssModules) && (g = g[t])) return g;
      if (n !== Fe && Be(n, t)) return h[t] = 4, n[t];
      if (T = p.config.globalProperties, Be(T, t)) return T[t];
    },
    set({ _: e }, t, n) {
      const { data: i, setupState: c, ctx: l } = e;
      return Gs(c, t) ? (c[t] = n, true) : i !== Fe && Be(i, t) ? (i[t] = n, true) : Be(e.props, t) || t[0] === "$" && t.slice(1) in e ? false : (l[t] = n, true);
    },
    has({ _: { data: e, setupState: t, accessCache: n, ctx: i, appContext: c, props: l, type: h } }, f) {
      let p;
      return !!(n[f] || e !== Fe && f[0] !== "$" && Be(e, f) || Gs(t, f) || Be(l, f) || Be(i, f) || Be(kr, f) || Be(c.config.globalProperties, f) || (p = h.__cssModules) && p[f]);
    },
    defineProperty(e, t, n) {
      return n.get != null ? e._.accessCache[t] = 0 : Be(n, "value") && this.set(e, t, n.value, null), Reflect.defineProperty(e, t, n);
    }
  };
  function jo(e) {
    return Ie(e) ? e.reduce((t, n) => (t[n] = null, t), {}) : e;
  }
  av = function(e, t) {
    return !e || !t ? e || t : Ie(e) && Ie(t) ? e.concat(t) : dt({}, jo(e), jo(t));
  };
  let da = true;
  function Kd(e) {
    const t = nh(e), n = e.proxy, i = e.ctx;
    da = false, t.beforeCreate && _c(t.beforeCreate, e, "bc");
    const { data: c, computed: l, methods: h, watch: f, provide: p, inject: v, created: g, beforeMount: T, mounted: P, beforeUpdate: O, updated: F, activated: C, deactivated: fe, beforeDestroy: ne, beforeUnmount: H, destroyed: Y, unmounted: U, render: ue, renderTracked: ge, renderTriggered: re, errorCaptured: he, serverPrefetch: te, expose: me, inheritAttrs: Oe, components: de, directives: Ge, filters: ht } = t;
    if (v && Jd(v, i, null), h) for (const Ne in h) {
      const Ve = h[Ne];
      _e(Ve) && (i[Ne] = Ve.bind(n));
    }
    if (c) {
      const Ne = c.call(n, n);
      Ye(Ne) && (e.data = fs(Ne));
    }
    if (da = true, l) for (const Ne in l) {
      const Ve = l[Ne], _n = _e(Ve) ? Ve.bind(n, n) : _e(Ve.get) ? Ve.get.bind(n, n) : hn, ji = !_e(Ve) && _e(Ve.set) ? Ve.set.bind(n) : hn, An = nc({
        get: _n,
        set: ji
      });
      Object.defineProperty(i, Ne, {
        enumerable: true,
        configurable: true,
        get: () => An.value,
        set: (ve) => An.value = ve
      });
    }
    if (f) for (const Ne in f) th(f[Ne], i, n, Ne);
    if (p) {
      const Ne = _e(p) ? p.call(n) : p;
      Reflect.ownKeys(Ne).forEach((Ve) => {
        Ad(Ve, Ne[Ve]);
      });
    }
    g && _c(g, e, "c");
    function Ke(Ne, Ve) {
      Ie(Ve) ? Ve.forEach((_n) => Ne(_n.bind(n))) : Ve && Ne(Ve.bind(n));
    }
    if (Ke(Gd, T), Ke(Qr, P), Ke(Xu, O), Ke(Ka, F), Ke(Fd, C), Ke(jd, fe), Ke($d, he), Ke(Bd, ge), Ke(zd, re), Ke(Ja, H), Ke(Za, U), Ke(Wd, te), Ie(me)) if (me.length) {
      const Ne = e.exposed || (e.exposed = {});
      me.forEach((Ve) => {
        Object.defineProperty(Ne, Ve, {
          get: () => n[Ve],
          set: (_n) => n[Ve] = _n,
          enumerable: true
        });
      });
    } else e.exposed || (e.exposed = {});
    ue && e.render === hn && (e.render = ue), Oe != null && (e.inheritAttrs = Oe), de && (e.components = de), Ge && (e.directives = Ge), te && Ju(e);
  }
  function Jd(e, t, n = hn) {
    Ie(e) && (e = pa(e));
    for (const i in e) {
      const c = e[i];
      let l;
      Ye(c) ? "default" in c ? l = Nr(c.from || i, c.default, true) : l = Nr(c.from || i) : l = Nr(c), at(l) ? Object.defineProperty(t, i, {
        enumerable: true,
        configurable: true,
        get: () => l.value,
        set: (h) => l.value = h
      }) : t[i] = l;
    }
  }
  function _c(e, t, n) {
    pn(Ie(e) ? e.map((i) => i.bind(t.proxy)) : e.bind(t.proxy), t, n);
  }
  function th(e, t, n, i) {
    let c = i.includes(".") ? Gu(n, i) : () => n[i];
    if (st(e)) {
      const l = t[e];
      _e(l) && Ji(c, l);
    } else if (_e(e)) Ji(c, e.bind(n));
    else if (Ye(e)) if (Ie(e)) e.forEach((l) => th(l, t, n, i));
    else {
      const l = _e(e.handler) ? e.handler.bind(n) : t[e.handler];
      _e(l) && Ji(c, l, e);
    }
  }
  function nh(e) {
    const t = e.type, { mixins: n, extends: i } = t, { mixins: c, optionsCache: l, config: { optionMergeStrategies: h } } = e.appContext, f = l.get(t);
    let p;
    return f ? p = f : !c.length && !n && !i ? p = t : (p = {}, c.length && c.forEach((v) => Uo(p, v, h, true)), Uo(p, t, h)), Ye(t) && l.set(t, p), p;
  }
  function Uo(e, t, n, i = false) {
    const { mixins: c, extends: l } = t;
    l && Uo(e, l, n, true), c && c.forEach((h) => Uo(e, h, n, true));
    for (const h in t) if (!(i && h === "expose")) {
      const f = Zd[h] || n && n[h];
      e[h] = f ? f(e[h], t[h]) : t[h];
    }
    return e;
  }
  const Zd = {
    data: Ac,
    props: Rc,
    emits: Rc,
    methods: Sr,
    computed: Sr,
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
    components: Sr,
    directives: Sr,
    watch: Qd,
    provide: Ac,
    inject: Xd
  };
  function Ac(e, t) {
    return t ? e ? function() {
      return dt(_e(e) ? e.call(this, this) : e, _e(t) ? t.call(this, this) : t);
    } : t : e;
  }
  function Xd(e, t) {
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
  function Lt(e, t) {
    return e ? [
      ...new Set([].concat(e, t))
    ] : t;
  }
  function Sr(e, t) {
    return e ? dt(/* @__PURE__ */ Object.create(null), e, t) : t;
  }
  function Rc(e, t) {
    return e ? Ie(e) && Ie(t) ? [
      .../* @__PURE__ */ new Set([
        ...e,
        ...t
      ])
    ] : dt(/* @__PURE__ */ Object.create(null), jo(e), jo(t ?? {})) : t;
  }
  function Qd(e, t) {
    if (!e) return t;
    if (!t) return e;
    const n = dt(/* @__PURE__ */ Object.create(null), e);
    for (const i in t) n[i] = Lt(e[i], t[i]);
    return n;
  }
  function ih() {
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
  let ep = 0;
  function tp(e, t) {
    return function(i, c = null) {
      _e(i) || (i = dt({}, i)), c != null && !Ye(c) && (c = null);
      const l = ih(), h = /* @__PURE__ */ new WeakSet(), f = [];
      let p = false;
      const v = l.app = {
        _uid: ep++,
        _component: i,
        _props: c,
        _container: null,
        _context: l,
        _instance: null,
        version: Lp,
        get config() {
          return l.config;
        },
        set config(g) {
        },
        use(g, ...T) {
          return h.has(g) || (g && _e(g.install) ? (h.add(g), g.install(v, ...T)) : _e(g) && (h.add(g), g(v, ...T))), v;
        },
        mixin(g) {
          return l.mixins.includes(g) || l.mixins.push(g), v;
        },
        component(g, T) {
          return T ? (l.components[g] = T, v) : l.components[g];
        },
        directive(g, T) {
          return T ? (l.directives[g] = T, v) : l.directives[g];
        },
        mount(g, T, P) {
          if (!p) {
            const O = v._ceVNode || Pt(i, c);
            return O.appContext = l, P === true ? P = "svg" : P === false && (P = void 0), e(O, g, P), p = true, v._container = g, g.__vue_app__ = v, vs(O.component);
          }
        },
        onUnmount(g) {
          f.push(g);
        },
        unmount() {
          p && (pn(f, v._instance, 16), e(null, v._container), delete v._container.__vue_app__);
        },
        provide(g, T) {
          return l.provides[g] = T, v;
        },
        runWithContext(g) {
          const T = ki;
          ki = v;
          try {
            return g();
          } finally {
            ki = T;
          }
        }
      };
      return v;
    };
  }
  let ki = null;
  cv = function(e, t, n = Fe) {
    const i = gi(), c = Zt(t), l = Yn(t), h = rh(e, c), f = gd((p, v) => {
      let g, T = Fe, P;
      return Pd(() => {
        const O = e[c];
        Wt(g, O) && (g = O, v());
      }), {
        get() {
          return p(), n.get ? n.get(g) : g;
        },
        set(O) {
          const F = n.set ? n.set(O) : O;
          if (!Wt(F, g) && !(T !== Fe && Wt(O, T))) return;
          const C = i.vnode.props;
          C && (t in C || c in C || l in C) && (`onUpdate:${t}` in C || `onUpdate:${c}` in C || `onUpdate:${l}` in C) || (g = O, v()), i.emit(`update:${t}`, F), Wt(O, F) && Wt(O, T) && !Wt(F, P) && v(), T = O, P = F;
        }
      };
    });
    return f[Symbol.iterator] = () => {
      let p = 0;
      return {
        next() {
          return p < 2 ? {
            value: p++ ? h || Fe : f,
            done: false
          } : {
            done: true
          };
        }
      };
    }, f;
  };
  const rh = (e, t) => t === "modelValue" || t === "model-value" ? e.modelModifiers : e[`${t}Modifiers`] || e[`${Zt(t)}Modifiers`] || e[`${Yn(t)}Modifiers`];
  function np(e, t, ...n) {
    if (e.isUnmounted) return;
    const i = e.vnode.props || Fe;
    let c = n;
    const l = t.startsWith("update:"), h = l && rh(i, t.slice(7));
    h && (h.trim && (c = n.map((g) => st(g) ? g.trim() : g)), h.number && (c = n.map(Df)));
    let f, p = i[f = Ls(t)] || i[f = Ls(Zt(t))];
    !p && l && (p = i[f = Ls(Yn(t))]), p && pn(p, e, 6, c);
    const v = i[f + "Once"];
    if (v) {
      if (!e.emitted) e.emitted = {};
      else if (e.emitted[f]) return;
      e.emitted[f] = true, pn(v, e, 6, c);
    }
  }
  const ip = /* @__PURE__ */ new WeakMap();
  function oh(e, t, n = false) {
    const i = n ? ip : t.emitsCache, c = i.get(e);
    if (c !== void 0) return c;
    const l = e.emits;
    let h = {}, f = false;
    if (!_e(e)) {
      const p = (v) => {
        const g = oh(v, t, true);
        g && (f = true, dt(h, g));
      };
      !n && t.mixins.length && t.mixins.forEach(p), e.extends && p(e.extends), e.mixins && e.mixins.forEach(p);
    }
    return !l && !f ? (Ye(e) && i.set(e, null), null) : (Ie(l) ? l.forEach((p) => h[p] = null) : dt(h, l), Ye(e) && i.set(e, h), h);
  }
  function ys(e, t) {
    return !e || !rs(t) ? false : (t = t.slice(2).replace(/Once$/, ""), Be(e, t[0].toLowerCase() + t.slice(1)) || Be(e, Yn(t)) || Be(e, t));
  }
  function Oc(e) {
    const { type: t, vnode: n, proxy: i, withProxy: c, propsOptions: [l], slots: h, attrs: f, emit: p, render: v, renderCache: g, props: T, data: P, setupState: O, ctx: F, inheritAttrs: C } = e, fe = xo(e);
    let ne, H;
    try {
      if (n.shapeFlag & 4) {
        const U = c || i, ue = U;
        ne = En(v.call(ue, U, g, T, O, P, F)), H = f;
      } else {
        const U = t;
        ne = En(U.length > 1 ? U(T, {
          attrs: f,
          slots: h,
          emit: p
        }) : U(T, null)), H = t.props ? f : rp(f);
      }
    } catch (U) {
      xr.length = 0, ps(U, e, 1), ne = Pt(It);
    }
    let Y = ne;
    if (H && C !== false) {
      const U = Object.keys(H), { shapeFlag: ue } = Y;
      U.length && ue & 7 && (l && U.some(ja) && (H = op(H, l)), Y = Vn(Y, H, false, true));
    }
    return n.dirs && (Y = Vn(Y, null, false, true), Y.dirs = Y.dirs ? Y.dirs.concat(n.dirs) : n.dirs), n.transition && di(Y, n.transition), ne = Y, xo(fe), ne;
  }
  const rp = (e) => {
    let t;
    for (const n in e) (n === "class" || n === "style" || rs(n)) && ((t || (t = {}))[n] = e[n]);
    return t;
  }, op = (e, t) => {
    const n = {};
    for (const i in e) (!ja(i) || !(i.slice(9) in t)) && (n[i] = e[i]);
    return n;
  };
  function sp(e, t, n) {
    const { props: i, children: c, component: l } = e, { props: h, children: f, patchFlag: p } = t, v = l.emitsOptions;
    if (t.dirs || t.transition) return true;
    if (n && p >= 0) {
      if (p & 1024) return true;
      if (p & 16) return i ? Mc(i, h, v) : !!h;
      if (p & 8) {
        const g = t.dynamicProps;
        for (let T = 0; T < g.length; T++) {
          const P = g[T];
          if (h[P] !== i[P] && !ys(v, P)) return true;
        }
      }
    } else return (c || f) && (!f || !f.$stable) ? true : i === h ? false : i ? h ? Mc(i, h, v) : true : !!h;
    return false;
  }
  function Mc(e, t, n) {
    const i = Object.keys(t);
    if (i.length !== Object.keys(e).length) return true;
    for (let c = 0; c < i.length; c++) {
      const l = i[c];
      if (t[l] !== e[l] && !ys(n, l)) return true;
    }
    return false;
  }
  function ap({ vnode: e, parent: t }, n) {
    for (; t; ) {
      const i = t.subTree;
      if (i.suspense && i.suspense.activeBranch === e && (i.el = e.el), i === e) (e = t.vnode).el = n, t = t.parent;
      else break;
    }
  }
  const sh = {}, ah = () => Object.create(sh), ch = (e) => Object.getPrototypeOf(e) === sh;
  function cp(e, t, n, i = false) {
    const c = {}, l = ah();
    e.propsDefaults = /* @__PURE__ */ Object.create(null), lh(e, t, c, l);
    for (const h in e.propsOptions[0]) h in c || (c[h] = void 0);
    n ? e.props = i ? c : ud(c) : e.type.props ? e.props = c : e.props = l, e.attrs = l;
  }
  function lp(e, t, n, i) {
    const { props: c, attrs: l, vnode: { patchFlag: h } } = e, f = De(c), [p] = e.propsOptions;
    let v = false;
    if ((i || h > 0) && !(h & 16)) {
      if (h & 8) {
        const g = e.vnode.dynamicProps;
        for (let T = 0; T < g.length; T++) {
          let P = g[T];
          if (ys(e.emitsOptions, P)) continue;
          const O = t[P];
          if (p) if (Be(l, P)) O !== l[P] && (l[P] = O, v = true);
          else {
            const F = Zt(P);
            c[F] = ga(p, f, F, O, e, false);
          }
          else O !== l[P] && (l[P] = O, v = true);
        }
      }
    } else {
      lh(e, t, c, l) && (v = true);
      let g;
      for (const T in f) (!t || !Be(t, T) && ((g = Yn(T)) === T || !Be(t, g))) && (p ? n && (n[T] !== void 0 || n[g] !== void 0) && (c[T] = ga(p, f, T, void 0, e, true)) : delete c[T]);
      if (l !== f) for (const T in l) (!t || !Be(t, T)) && (delete l[T], v = true);
    }
    v && xn(e.attrs, "set", "");
  }
  function lh(e, t, n, i) {
    const [c, l] = e.propsOptions;
    let h = false, f;
    if (t) for (let p in t) {
      if (Rr(p)) continue;
      const v = t[p];
      let g;
      c && Be(c, g = Zt(p)) ? !l || !l.includes(g) ? n[g] = v : (f || (f = {}))[g] = v : ys(e.emitsOptions, p) || (!(p in i) || v !== i[p]) && (i[p] = v, h = true);
    }
    if (l) {
      const p = De(n), v = f || Fe;
      for (let g = 0; g < l.length; g++) {
        const T = l[g];
        n[T] = ga(c, p, T, v[T], e, !Be(v, T));
      }
    }
    return h;
  }
  function ga(e, t, n, i, c, l) {
    const h = e[n];
    if (h != null) {
      const f = Be(h, "default");
      if (f && i === void 0) {
        const p = h.default;
        if (h.type !== Function && !h.skipFactory && _e(p)) {
          const { propsDefaults: v } = c;
          if (n in v) i = v[n];
          else {
            const g = eo(c);
            i = v[n] = p.call(null, t), g();
          }
        } else i = p;
        c.ce && c.ce._setProp(n, i);
      }
      h[0] && (l && !f ? i = false : h[1] && (i === "" || i === Yn(n)) && (i = true));
    }
    return i;
  }
  const up = /* @__PURE__ */ new WeakMap();
  function uh(e, t, n = false) {
    const i = n ? up : t.propsCache, c = i.get(e);
    if (c) return c;
    const l = e.props, h = {}, f = [];
    let p = false;
    if (!_e(e)) {
      const g = (T) => {
        p = true;
        const [P, O] = uh(T, t, true);
        dt(h, P), O && f.push(...O);
      };
      !n && t.mixins.length && t.mixins.forEach(g), e.extends && g(e.extends), e.mixins && e.mixins.forEach(g);
    }
    if (!l && !p) return Ye(e) && i.set(e, Hi), Hi;
    if (Ie(l)) for (let g = 0; g < l.length; g++) {
      const T = Zt(l[g]);
      Pc(T) && (h[T] = Fe);
    }
    else if (l) for (const g in l) {
      const T = Zt(g);
      if (Pc(T)) {
        const P = l[g], O = h[T] = Ie(P) || _e(P) ? {
          type: P
        } : dt({}, P), F = O.type;
        let C = false, fe = true;
        if (Ie(F)) for (let ne = 0; ne < F.length; ++ne) {
          const H = F[ne], Y = _e(H) && H.name;
          if (Y === "Boolean") {
            C = true;
            break;
          } else Y === "String" && (fe = false);
        }
        else C = _e(F) && F.name === "Boolean";
        O[0] = C, O[1] = fe, (C || Be(O, "default")) && f.push(T);
      }
    }
    const v = [
      h,
      f
    ];
    return Ye(e) && i.set(e, v), v;
  }
  function Pc(e) {
    return e[0] !== "$" && !Rr(e);
  }
  const Xa = (e) => e === "_" || e === "_ctx" || e === "$stable", Qa = (e) => Ie(e) ? e.map(En) : [
    En(e)
  ], hp = (e, t, n) => {
    if (t._n) return t;
    const i = _d((...c) => Qa(t(...c)), n);
    return i._c = false, i;
  }, hh = (e, t, n) => {
    const i = e._ctx;
    for (const c in e) {
      if (Xa(c)) continue;
      const l = e[c];
      if (_e(l)) t[c] = hp(c, l, i);
      else if (l != null) {
        const h = Qa(l);
        t[c] = () => h;
      }
    }
  }, fh = (e, t) => {
    const n = Qa(t);
    e.slots.default = () => n;
  }, dh = (e, t, n) => {
    for (const i in t) (n || !Xa(i)) && (e[i] = t[i]);
  }, fp = (e, t, n) => {
    const i = e.slots = ah();
    if (e.vnode.shapeFlag & 32) {
      const c = t._;
      c ? (dh(i, t, n), n && lu(i, "_", c, true)) : hh(t, i);
    } else t && fh(e, t);
  }, dp = (e, t, n) => {
    const { vnode: i, slots: c } = e;
    let l = true, h = Fe;
    if (i.shapeFlag & 32) {
      const f = t._;
      f ? n && f === 1 ? l = false : dh(c, t, n) : (l = !t.$stable, hh(t, c)), h = t;
    } else t && (fh(e, t), h = {
      default: 1
    });
    if (l) for (const f in c) !Xa(f) && h[f] == null && delete c[f];
  }, wt = yp;
  function pp(e) {
    return gp(e);
  }
  function gp(e, t) {
    const n = cs();
    n.__VUE__ = true;
    const { insert: i, remove: c, patchProp: l, createElement: h, createText: f, createComment: p, setText: v, setElementText: g, parentNode: T, nextSibling: P, setScopeId: O = hn, insertStaticContent: F } = e, C = (I, A, k, K = null, q = null, J = null, se = void 0, X = null, ie = !!A.dynamicChildren) => {
      if (I === A) return;
      I && !ai(I, A) && (K = Rn(I), ve(I, q, J, true), I = null), A.patchFlag === -2 && (ie = false, A.dynamicChildren = null);
      const { type: V, ref: we, shapeFlag: ae } = A;
      switch (V) {
        case bs:
          fe(I, A, k, K);
          break;
        case It:
          ne(I, A, k, K);
          break;
        case Dr:
          I == null && H(A, k, K, se);
          break;
        case Et:
          de(I, A, k, K, q, J, se, X, ie);
          break;
        default:
          ae & 1 ? ue(I, A, k, K, q, J, se, X, ie) : ae & 6 ? Ge(I, A, k, K, q, J, se, X, ie) : (ae & 64 || ae & 128) && V.process(I, A, k, K, q, J, se, X, ie, bi);
      }
      we != null && q ? Lr(we, I && I.ref, J, A || I, !A) : we == null && I && I.ref != null && Lr(I.ref, null, J, I, true);
    }, fe = (I, A, k, K) => {
      if (I == null) i(A.el = f(A.children), k, K);
      else {
        const q = A.el = I.el;
        A.children !== I.children && v(q, A.children);
      }
    }, ne = (I, A, k, K) => {
      I == null ? i(A.el = p(A.children || ""), k, K) : A.el = I.el;
    }, H = (I, A, k, K) => {
      [I.el, I.anchor] = F(I.children, A, k, K, I.el, I.anchor);
    }, Y = ({ el: I, anchor: A }, k, K) => {
      let q;
      for (; I && I !== A; ) q = P(I), i(I, k, K), I = q;
      i(A, k, K);
    }, U = ({ el: I, anchor: A }) => {
      let k;
      for (; I && I !== A; ) k = P(I), c(I), I = k;
      c(A);
    }, ue = (I, A, k, K, q, J, se, X, ie) => {
      if (A.type === "svg" ? se = "svg" : A.type === "math" && (se = "mathml"), I == null) ge(A, k, K, q, J, se, X, ie);
      else {
        const V = I.el && I.el._isVueCE ? I.el : null;
        try {
          V && V._beginPatch(), te(I, A, q, J, se, X, ie);
        } finally {
          V && V._endPatch();
        }
      }
    }, ge = (I, A, k, K, q, J, se, X) => {
      let ie, V;
      const { props: we, shapeFlag: ae, transition: ye, dirs: Te } = I;
      if (ie = I.el = h(I.type, J, we && we.is, we), ae & 8 ? g(ie, I.children) : ae & 16 && he(I.children, ie, null, K, q, Ws(I, J), se, X), Te && Ei(I, null, K, "created"), re(ie, I, I.scopeId, se, K), we) {
        for (const je in we) je !== "value" && !Rr(je) && l(ie, je, null, we[je], J, K);
        "value" in we && l(ie, "value", null, we.value, J), (V = we.onVnodeBeforeMount) && nn(V, K, I);
      }
      Te && Ei(I, null, K, "beforeMount");
      const Le = mp(q, ye);
      Le && ye.beforeEnter(ie), i(ie, A, k), ((V = we && we.onVnodeMounted) || Le || Te) && wt(() => {
        V && nn(V, K, I), Le && ye.enter(ie), Te && Ei(I, null, K, "mounted");
      }, q);
    }, re = (I, A, k, K, q) => {
      if (k && O(I, k), K) for (let J = 0; J < K.length; J++) O(I, K[J]);
      if (q) {
        let J = q.subTree;
        if (A === J || Wo(J.type) && (J.ssContent === A || J.ssFallback === A)) {
          const se = q.vnode;
          re(I, se, se.scopeId, se.slotScopeIds, q.parent);
        }
      }
    }, he = (I, A, k, K, q, J, se, X, ie = 0) => {
      for (let V = ie; V < I.length; V++) {
        const we = I[V] = X ? si(I[V]) : En(I[V]);
        C(null, we, A, k, K, q, J, se, X);
      }
    }, te = (I, A, k, K, q, J, se) => {
      const X = A.el = I.el;
      let { patchFlag: ie, dynamicChildren: V, dirs: we } = A;
      ie |= I.patchFlag & 16;
      const ae = I.props || Fe, ye = A.props || Fe;
      let Te;
      if (k && Ii(k, false), (Te = ye.onVnodeBeforeUpdate) && nn(Te, k, A, I), we && Ei(A, I, k, "beforeUpdate"), k && Ii(k, true), (ae.innerHTML && ye.innerHTML == null || ae.textContent && ye.textContent == null) && g(X, ""), V ? me(I.dynamicChildren, V, X, k, K, Ws(A, q), J) : se || Ve(I, A, X, null, k, K, Ws(A, q), J, false), ie > 0) {
        if (ie & 16) Oe(X, ae, ye, k, q);
        else if (ie & 2 && ae.class !== ye.class && l(X, "class", null, ye.class, q), ie & 4 && l(X, "style", ae.style, ye.style, q), ie & 8) {
          const Le = A.dynamicProps;
          for (let je = 0; je < Le.length; je++) {
            const Ue = Le[je], St = ae[Ue], _t = ye[Ue];
            (_t !== St || Ue === "value") && l(X, Ue, St, _t, q, k);
          }
        }
        ie & 1 && I.children !== A.children && g(X, A.children);
      } else !se && V == null && Oe(X, ae, ye, k, q);
      ((Te = ye.onVnodeUpdated) || we) && wt(() => {
        Te && nn(Te, k, A, I), we && Ei(A, I, k, "updated");
      }, K);
    }, me = (I, A, k, K, q, J, se) => {
      for (let X = 0; X < A.length; X++) {
        const ie = I[X], V = A[X], we = ie.el && (ie.type === Et || !ai(ie, V) || ie.shapeFlag & 198) ? T(ie.el) : k;
        C(ie, V, we, null, K, q, J, se, true);
      }
    }, Oe = (I, A, k, K, q) => {
      if (A !== k) {
        if (A !== Fe) for (const J in A) !Rr(J) && !(J in k) && l(I, J, A[J], null, q, K);
        for (const J in k) {
          if (Rr(J)) continue;
          const se = k[J], X = A[J];
          se !== X && J !== "value" && l(I, J, X, se, q, K);
        }
        "value" in k && l(I, "value", A.value, k.value, q);
      }
    }, de = (I, A, k, K, q, J, se, X, ie) => {
      const V = A.el = I ? I.el : f(""), we = A.anchor = I ? I.anchor : f("");
      let { patchFlag: ae, dynamicChildren: ye, slotScopeIds: Te } = A;
      Te && (X = X ? X.concat(Te) : Te), I == null ? (i(V, k, K), i(we, k, K), he(A.children || [], k, we, q, J, se, X, ie)) : ae > 0 && ae & 64 && ye && I.dynamicChildren && I.dynamicChildren.length === ye.length ? (me(I.dynamicChildren, ye, k, q, J, se, X), (A.key != null || q && A === q.subTree) && ec(I, A, true)) : Ve(I, A, k, we, q, J, se, X, ie);
    }, Ge = (I, A, k, K, q, J, se, X, ie) => {
      A.slotScopeIds = X, I == null ? A.shapeFlag & 512 ? q.ctx.activate(A, k, K, se, ie) : ht(A, k, K, q, J, se, ie) : Bt(I, A, ie);
    }, ht = (I, A, k, K, q, J, se) => {
      const X = I.component = Ap(I, K, q);
      if (ms(I) && (X.ctx.renderer = bi), Rp(X, false, se), X.asyncDep) {
        if (q && q.registerDep(X, Ke, se), !I.el) {
          const ie = X.subTree = Pt(It);
          ne(null, ie, A, k), I.placeholder = ie.el;
        }
      } else Ke(X, I, A, k, q, J, se);
    }, Bt = (I, A, k) => {
      const K = A.component = I.component;
      if (sp(I, A, k)) if (K.asyncDep && !K.asyncResolved) {
        Ne(K, A, k);
        return;
      } else K.next = A, K.update();
      else A.el = I.el, K.vnode = A;
    }, Ke = (I, A, k, K, q, J, se) => {
      const X = () => {
        if (I.isMounted) {
          let { next: ae, bu: ye, u: Te, parent: Le, vnode: je } = I;
          {
            const Qt = ph(I);
            if (Qt) {
              ae && (ae.el = je.el, Ne(I, ae, se)), Qt.asyncDep.then(() => {
                I.isUnmounted || X();
              });
              return;
            }
          }
          let Ue = ae, St;
          Ii(I, false), ae ? (ae.el = je.el, Ne(I, ae, se)) : ae = je, ye && Or(ye), (St = ae.props && ae.props.onVnodeBeforeUpdate) && nn(St, Le, ae, je), Ii(I, true);
          const _t = Oc(I), Xt = I.subTree;
          I.subTree = _t, C(Xt, _t, T(Xt.el), Rn(Xt), I, q, J), ae.el = _t.el, Ue === null && ap(I, _t.el), Te && wt(Te, q), (St = ae.props && ae.props.onVnodeUpdated) && wt(() => nn(St, Le, ae, je), q);
        } else {
          let ae;
          const { el: ye, props: Te } = A, { bm: Le, m: je, parent: Ue, root: St, type: _t } = I, Xt = hi(A);
          Ii(I, false), Le && Or(Le), !Xt && (ae = Te && Te.onVnodeBeforeMount) && nn(ae, Ue, A), Ii(I, true);
          {
            St.ce && St.ce._def.shadowRoot !== false && St.ce._injectChildStyle(_t);
            const Qt = I.subTree = Oc(I);
            C(null, Qt, k, K, I, q, J), A.el = Qt.el;
          }
          if (je && wt(je, q), !Xt && (ae = Te && Te.onVnodeMounted)) {
            const Qt = A;
            wt(() => nn(ae, Ue, Qt), q);
          }
          (A.shapeFlag & 256 || Ue && hi(Ue.vnode) && Ue.vnode.shapeFlag & 256) && I.a && wt(I.a, q), I.isMounted = true, A = k = K = null;
        }
      };
      I.scope.on();
      const ie = I.effect = new mu(X);
      I.scope.off();
      const V = I.update = ie.run.bind(ie), we = I.job = ie.runIfDirty.bind(ie);
      we.i = I, we.id = I.uid, ie.scheduler = () => qa(we), Ii(I, true), V();
    }, Ne = (I, A, k) => {
      A.component = I;
      const K = I.vnode.props;
      I.vnode = A, I.next = null, lp(I, A.props, K, k), dp(I, A.children, k), zn(), yc(I), Bn();
    }, Ve = (I, A, k, K, q, J, se, X, ie = false) => {
      const V = I && I.children, we = I ? I.shapeFlag : 0, ae = A.children, { patchFlag: ye, shapeFlag: Te } = A;
      if (ye > 0) {
        if (ye & 128) {
          ji(V, ae, k, K, q, J, se, X, ie);
          return;
        } else if (ye & 256) {
          _n(V, ae, k, K, q, J, se, X, ie);
          return;
        }
      }
      Te & 8 ? (we & 16 && jt(V, q, J), ae !== V && g(k, ae)) : we & 16 ? Te & 16 ? ji(V, ae, k, K, q, J, se, X, ie) : jt(V, q, J, true) : (we & 8 && g(k, ""), Te & 16 && he(ae, k, K, q, J, se, X, ie));
    }, _n = (I, A, k, K, q, J, se, X, ie) => {
      I = I || Hi, A = A || Hi;
      const V = I.length, we = A.length, ae = Math.min(V, we);
      let ye;
      for (ye = 0; ye < ae; ye++) {
        const Te = A[ye] = ie ? si(A[ye]) : En(A[ye]);
        C(I[ye], Te, k, null, q, J, se, X, ie);
      }
      V > we ? jt(I, q, J, true, false, ae) : he(A, k, K, q, J, se, X, ie, ae);
    }, ji = (I, A, k, K, q, J, se, X, ie) => {
      let V = 0;
      const we = A.length;
      let ae = I.length - 1, ye = we - 1;
      for (; V <= ae && V <= ye; ) {
        const Te = I[V], Le = A[V] = ie ? si(A[V]) : En(A[V]);
        if (ai(Te, Le)) C(Te, Le, k, null, q, J, se, X, ie);
        else break;
        V++;
      }
      for (; V <= ae && V <= ye; ) {
        const Te = I[ae], Le = A[ye] = ie ? si(A[ye]) : En(A[ye]);
        if (ai(Te, Le)) C(Te, Le, k, null, q, J, se, X, ie);
        else break;
        ae--, ye--;
      }
      if (V > ae) {
        if (V <= ye) {
          const Te = ye + 1, Le = Te < we ? A[Te].el : K;
          for (; V <= ye; ) C(null, A[V] = ie ? si(A[V]) : En(A[V]), k, Le, q, J, se, X, ie), V++;
        }
      } else if (V > ye) for (; V <= ae; ) ve(I[V], q, J, true), V++;
      else {
        const Te = V, Le = V, je = /* @__PURE__ */ new Map();
        for (V = Le; V <= ye; V++) {
          const Nt = A[V] = ie ? si(A[V]) : En(A[V]);
          Nt.key != null && je.set(Nt.key, V);
        }
        let Ue, St = 0;
        const _t = ye - Le + 1;
        let Xt = false, Qt = 0;
        const vi = new Array(_t);
        for (V = 0; V < _t; V++) vi[V] = 0;
        for (V = Te; V <= ae; V++) {
          const Nt = I[V];
          if (St >= _t) {
            ve(Nt, q, J, true);
            continue;
          }
          let en;
          if (Nt.key != null) en = je.get(Nt.key);
          else for (Ue = Le; Ue <= ye; Ue++) if (vi[Ue - Le] === 0 && ai(Nt, A[Ue])) {
            en = Ue;
            break;
          }
          en === void 0 ? ve(Nt, q, J, true) : (vi[en - Le] = V + 1, en >= Qt ? Qt = en : Xt = true, C(Nt, A[en], k, null, q, J, se, X, ie), St++);
        }
        const dr = Xt ? wp(vi) : Hi;
        for (Ue = dr.length - 1, V = _t - 1; V >= 0; V--) {
          const Nt = Le + V, en = A[Nt], ro = A[Nt + 1], oo = Nt + 1 < we ? ro.el || gh(ro) : K;
          vi[V] === 0 ? C(null, en, k, oo, q, J, se, X, ie) : Xt && (Ue < 0 || V !== dr[Ue] ? An(en, k, oo, 2) : Ue--);
        }
      }
    }, An = (I, A, k, K, q = null) => {
      const { el: J, type: se, transition: X, children: ie, shapeFlag: V } = I;
      if (V & 6) {
        An(I.component.subTree, A, k, K);
        return;
      }
      if (V & 128) {
        I.suspense.move(A, k, K);
        return;
      }
      if (V & 64) {
        se.move(I, A, k, bi);
        return;
      }
      if (se === Et) {
        i(J, A, k);
        for (let ae = 0; ae < ie.length; ae++) An(ie[ae], A, k, K);
        i(I.anchor, A, k);
        return;
      }
      if (se === Dr) {
        Y(I, A, k);
        return;
      }
      if (K !== 2 && V & 1 && X) if (K === 0) X.beforeEnter(J), i(J, A, k), wt(() => X.enter(J), q);
      else {
        const { leave: ae, delayLeave: ye, afterLeave: Te } = X, Le = () => {
          I.ctx.isUnmounted ? c(J) : i(J, A, k);
        }, je = () => {
          J._isLeaving && J[kn](true), ae(J, () => {
            Le(), Te && Te();
          });
        };
        ye ? ye(J, Le, je) : je();
      }
      else i(J, A, k);
    }, ve = (I, A, k, K = false, q = false) => {
      const { type: J, props: se, ref: X, children: ie, dynamicChildren: V, shapeFlag: we, patchFlag: ae, dirs: ye, cacheIndex: Te } = I;
      if (ae === -2 && (q = false), X != null && (zn(), Lr(X, null, k, I, true), Bn()), Te != null && (A.renderCache[Te] = void 0), we & 256) {
        A.ctx.deactivate(I);
        return;
      }
      const Le = we & 1 && ye, je = !hi(I);
      let Ue;
      if (je && (Ue = se && se.onVnodeBeforeUnmount) && nn(Ue, A, I), we & 6) oe(I.component, k, K);
      else {
        if (we & 128) {
          I.suspense.unmount(k, K);
          return;
        }
        Le && Ei(I, null, A, "beforeUnmount"), we & 64 ? I.type.remove(I, A, k, bi, K) : V && !V.hasOnce && (J !== Et || ae > 0 && ae & 64) ? jt(V, A, k, false, true) : (J === Et && ae & 384 || !q && we & 16) && jt(ie, A, k), K && fr(I);
      }
      (je && (Ue = se && se.onVnodeUnmounted) || Le) && wt(() => {
        Ue && nn(Ue, A, I), Le && Ei(I, null, A, "unmounted");
      }, k);
    }, fr = (I) => {
      const { type: A, el: k, anchor: K, transition: q } = I;
      if (A === Et) {
        Cs(k, K);
        return;
      }
      if (A === Dr) {
        U(I);
        return;
      }
      const J = () => {
        c(k), q && !q.persisted && q.afterLeave && q.afterLeave();
      };
      if (I.shapeFlag & 1 && q && !q.persisted) {
        const { leave: se, delayLeave: X } = q, ie = () => se(k, J);
        X ? X(I.el, J, ie) : ie();
      } else J();
    }, Cs = (I, A) => {
      let k;
      for (; I !== A; ) k = P(I), c(I), I = k;
      c(A);
    }, oe = (I, A, k) => {
      const { bum: K, scope: q, job: J, subTree: se, um: X, m: ie, a: V } = I;
      Go(ie), Go(V), K && Or(K), q.stop(), J && (J.flags |= 8, ve(se, I, A, k)), X && wt(X, A), wt(() => {
        I.isUnmounted = true;
      }, A);
    }, jt = (I, A, k, K = false, q = false, J = 0) => {
      for (let se = J; se < I.length; se++) ve(I[se], A, k, K, q);
    }, Rn = (I) => {
      if (I.shapeFlag & 6) return Rn(I.component.subTree);
      if (I.shapeFlag & 128) return I.suspense.next();
      const A = P(I.anchor || I.el), k = A && A[Wu];
      return k ? P(k) : A;
    };
    let $t = false;
    const io = (I, A, k) => {
      let K;
      I == null ? A._vnode && (ve(A._vnode, null, null, true), K = A._vnode.component) : C(A._vnode || null, I, A, null, null, null, k), A._vnode = I, $t || ($t = true, yc(K), Fu(), $t = false);
    }, bi = {
      p: C,
      um: ve,
      m: An,
      r: fr,
      mt: ht,
      mc: he,
      pc: Ve,
      pbc: me,
      n: Rn,
      o: e
    };
    return {
      render: io,
      hydrate: void 0,
      createApp: tp(io)
    };
  }
  function Ws({ type: e, props: t }, n) {
    return n === "svg" && e === "foreignObject" || n === "mathml" && e === "annotation-xml" && t && t.encoding && t.encoding.includes("html") ? void 0 : n;
  }
  function Ii({ effect: e, job: t }, n) {
    n ? (e.flags |= 32, t.flags |= 4) : (e.flags &= -33, t.flags &= -5);
  }
  function mp(e, t) {
    return (!e || e && !e.pendingBranch) && t && !t.persisted;
  }
  function ec(e, t, n = false) {
    const i = e.children, c = t.children;
    if (Ie(i) && Ie(c)) for (let l = 0; l < i.length; l++) {
      const h = i[l];
      let f = c[l];
      f.shapeFlag & 1 && !f.dynamicChildren && ((f.patchFlag <= 0 || f.patchFlag === 32) && (f = c[l] = si(c[l]), f.el = h.el), !n && f.patchFlag !== -2 && ec(h, f)), f.type === bs && (f.patchFlag !== -1 ? f.el = h.el : f.__elIndex = l + (e.type === Et ? 1 : 0)), f.type === It && !f.el && (f.el = h.el);
    }
  }
  function wp(e) {
    const t = e.slice(), n = [
      0
    ];
    let i, c, l, h, f;
    const p = e.length;
    for (i = 0; i < p; i++) {
      const v = e[i];
      if (v !== 0) {
        if (c = n[n.length - 1], e[c] < v) {
          t[i] = c, n.push(i);
          continue;
        }
        for (l = 0, h = n.length - 1; l < h; ) f = l + h >> 1, e[n[f]] < v ? l = f + 1 : h = f;
        v < e[n[l]] && (l > 0 && (t[i] = n[l - 1]), n[l] = i);
      }
    }
    for (l = n.length, h = n[l - 1]; l-- > 0; ) n[l] = h, h = t[h];
    return n;
  }
  function ph(e) {
    const t = e.subTree.component;
    if (t) return t.asyncDep && !t.asyncResolved ? t : ph(t);
  }
  function Go(e) {
    if (e) for (let t = 0; t < e.length; t++) e[t].flags |= 8;
  }
  function gh(e) {
    if (e.placeholder) return e.placeholder;
    const t = e.component;
    return t ? gh(t.subTree) : null;
  }
  const Wo = (e) => e.__isSuspense;
  function yp(e, t) {
    t && t.pendingBranch ? Ie(e) ? t.effects.push(...e) : t.effects.push(e) : xu(e);
  }
  let Dr, xr;
  Et = /* @__PURE__ */ Symbol.for("v-fgt");
  bs = /* @__PURE__ */ Symbol.for("v-txt");
  It = /* @__PURE__ */ Symbol.for("v-cmt");
  Dr = /* @__PURE__ */ Symbol.for("v-stc");
  xr = [];
  let Yt = null;
  rn = function(e = false) {
    xr.push(Yt = e ? null : []);
  };
  function bp() {
    xr.pop(), Yt = xr[xr.length - 1] || null;
  }
  let Vr = 1;
  function zo(e, t = false) {
    Vr += e, e < 0 && Yt && t && (Yt.hasOnce = true);
  }
  function mh(e) {
    return e.dynamicChildren = Vr > 0 ? Yt || Hi : null, bp(), Vr > 0 && Yt && Yt.push(e), e;
  }
  Pn = function(e, t, n, i, c, l) {
    return mh(We(e, t, n, i, c, l, true));
  };
  ma = function(e, t, n, i, c) {
    return mh(Pt(e, t, n, i, c, true));
  };
  Qi = function(e) {
    return e ? e.__v_isVNode === true : false;
  };
  function ai(e, t) {
    return e.type === t.type && e.key === t.key;
  }
  const wh = ({ key: e }) => e ?? null, So = ({ ref: e, ref_key: t, ref_for: n }) => (typeof e == "number" && (e = "" + e), e != null ? st(e) || at(e) || _e(e) ? {
    i: Tt,
    r: e,
    k: t,
    f: !!n
  } : e : null);
  We = function(e, t = null, n = null, i = 0, c = null, l = e === Et ? 0 : 1, h = false, f = false) {
    const p = {
      __v_isVNode: true,
      __v_skip: true,
      type: e,
      props: t,
      key: t && wh(t),
      ref: t && So(t),
      scopeId: Uu,
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
      shapeFlag: l,
      patchFlag: i,
      dynamicProps: c,
      dynamicChildren: null,
      appContext: null,
      ctx: Tt
    };
    return f ? (tc(p, n), l & 128 && e.normalize(p)) : n && (p.shapeFlag |= st(n) ? 8 : 16), Vr > 0 && !h && Yt && (p.patchFlag > 0 || l & 6) && p.patchFlag !== 32 && Yt.push(p), p;
  };
  Pt = vp;
  function vp(e, t = null, n = null, i = 0, c = null, l = false) {
    if ((!e || e === Qu) && (e = It), Qi(e)) {
      const f = Vn(e, t, true);
      return n && tc(f, n), Vr > 0 && !l && Yt && (f.shapeFlag & 6 ? Yt[Yt.indexOf(e)] = f : Yt.push(f)), f.patchFlag = -2, f;
    }
    if (Np(e) && (e = e.__vccOpts), t) {
      t = Ep(t);
      let { class: f, style: p } = t;
      f && !st(f) && (t.class = Ga(f)), Ye(p) && (ds(p) && !Ie(p) && (p = dt({}, p)), t.style = ls(p));
    }
    const h = st(e) ? 1 : Wo(e) ? 128 : zu(e) ? 64 : Ye(e) ? 4 : _e(e) ? 2 : 0;
    return We(e, t, n, i, c, h, l, true);
  }
  function Ep(e) {
    return e ? ds(e) || ch(e) ? dt({}, e) : e : null;
  }
  Vn = function(e, t, n = false, i = false) {
    const { props: c, ref: l, patchFlag: h, children: f, transition: p } = e, v = t ? Tp(c || {}, t) : c, g = {
      __v_isVNode: true,
      __v_skip: true,
      type: e.type,
      props: v,
      key: v && wh(v),
      ref: t && t.ref ? n && l ? Ie(l) ? l.concat(So(t)) : [
        l,
        So(t)
      ] : So(t) : l,
      scopeId: e.scopeId,
      slotScopeIds: e.slotScopeIds,
      children: f,
      target: e.target,
      targetStart: e.targetStart,
      targetAnchor: e.targetAnchor,
      staticCount: e.staticCount,
      shapeFlag: e.shapeFlag,
      patchFlag: t && e.type !== Et ? h === -1 ? 16 : h | 16 : h,
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
    return p && i && di(g, p.clone(g)), g;
  };
  Ip = function(e = " ", t = 0) {
    return Pt(bs, null, e, t);
  };
  lv = function(e, t) {
    const n = Pt(Dr, null, e);
    return n.staticCount = t, n;
  };
  po = function(e = "", t = false) {
    return t ? (rn(), ma(It, null, e)) : Pt(It, null, e);
  };
  function En(e) {
    return e == null || typeof e == "boolean" ? Pt(It) : Ie(e) ? Pt(Et, null, e.slice()) : Qi(e) ? si(e) : Pt(bs, null, String(e));
  }
  function si(e) {
    return e.el === null && e.patchFlag !== -1 || e.memo ? e : Vn(e);
  }
  function tc(e, t) {
    let n = 0;
    const { shapeFlag: i } = e;
    if (t == null) t = null;
    else if (Ie(t)) n = 16;
    else if (typeof t == "object") if (i & 65) {
      const c = t.default;
      c && (c._c && (c._d = false), tc(e, c()), c._c && (c._d = true));
      return;
    } else {
      n = 32;
      const c = t._;
      !c && !ch(t) ? t._ctx = Tt : c === 3 && Tt && (Tt.slots._ === 1 ? t._ = 1 : (t._ = 2, e.patchFlag |= 1024));
    }
    else _e(t) ? (t = {
      default: t,
      _ctx: Tt
    }, n = 32) : (t = String(t), i & 64 ? (n = 16, t = [
      Ip(t)
    ]) : n = 8);
    e.children = t, e.shapeFlag |= n;
  }
  Tp = function(...e) {
    const t = {};
    for (let n = 0; n < e.length; n++) {
      const i = e[n];
      for (const c in i) if (c === "class") t.class !== i.class && (t.class = Ga([
        t.class,
        i.class
      ]));
      else if (c === "style") t.style = ls([
        t.style,
        i.style
      ]);
      else if (rs(c)) {
        const l = t[c], h = i[c];
        h && l !== h && !(Ie(l) && l.includes(h)) && (t[c] = l ? [].concat(l, h) : h);
      } else c !== "" && (t[c] = i[c]);
    }
    return t;
  };
  function nn(e, t, n, i = null) {
    pn(e, t, 7, [
      n,
      i
    ]);
  }
  const Sp = ih();
  let _p = 0;
  function Ap(e, t, n) {
    const i = e.type, c = (t ? t.appContext : e.appContext) || Sp, l = {
      uid: _p++,
      vnode: e,
      type: i,
      parent: t,
      appContext: c,
      root: null,
      next: null,
      subTree: null,
      effect: null,
      update: null,
      job: null,
      scope: new du(true),
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
      propsOptions: uh(i, c),
      emitsOptions: oh(i, c),
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
    return l.ctx = {
      _: l
    }, l.root = t ? t.root : l, l.emit = np.bind(null, l), e.ce && e.ce(l), l;
  }
  let Mt = null;
  gi = () => Mt || Tt;
  let Bo, wa;
  {
    const e = cs(), t = (n, i) => {
      let c;
      return (c = e[n]) || (c = e[n] = []), c.push(i), (l) => {
        c.length > 1 ? c.forEach((h) => h(l)) : c[0](l);
      };
    };
    Bo = t("__VUE_INSTANCE_SETTERS__", (n) => Mt = n), wa = t("__VUE_SSR_SETTERS__", (n) => Hr = n);
  }
  const eo = (e) => {
    const t = Mt;
    return Bo(e), e.scope.on(), () => {
      e.scope.off(), Bo(t);
    };
  }, Nc = () => {
    Mt && Mt.scope.off(), Bo(null);
  };
  function yh(e) {
    return e.vnode.shapeFlag & 4;
  }
  let Hr = false;
  function Rp(e, t = false, n = false) {
    t && wa(t);
    const { props: i, children: c } = e.vnode, l = yh(e);
    cp(e, i, l, t), fp(e, c, n || t);
    const h = l ? Op(e, t) : void 0;
    return t && wa(false), h;
  }
  function Op(e, t) {
    const n = e.type;
    e.accessCache = /* @__PURE__ */ Object.create(null), e.proxy = new Proxy(e.ctx, Yd);
    const { setup: i } = n;
    if (i) {
      zn();
      const c = e.setupContext = i.length > 1 ? Pp(e) : null, l = eo(e), h = Xr(i, e, 0, [
        e.props,
        c
      ]), f = su(h);
      if (Bn(), l(), (f || e.sp) && !hi(e) && Ju(e), f) {
        if (h.then(Nc, Nc), t) return h.then((p) => {
          Cc(e, p);
        }).catch((p) => {
          ps(p, e, 0);
        });
        e.asyncDep = h;
      } else Cc(e, h);
    } else bh(e);
  }
  function Cc(e, t, n) {
    _e(t) ? e.type.__ssrInlineRender ? e.ssrRender = t : e.render = t : Ye(t) && (e.setupState = Nu(t)), bh(e);
  }
  function bh(e, t, n) {
    const i = e.type;
    e.render || (e.render = i.render || hn);
    {
      const c = eo(e);
      zn();
      try {
        Kd(e);
      } finally {
        Bn(), c();
      }
    }
  }
  const Mp = {
    get(e, t) {
      return Ot(e, "get", ""), e[t];
    }
  };
  function Pp(e) {
    const t = (n) => {
      e.exposed = n || {};
    };
    return {
      attrs: new Proxy(e.attrs, Mp),
      slots: e.slots,
      emit: e.emit,
      expose: t
    };
  }
  function vs(e) {
    return e.exposed ? e.exposeProxy || (e.exposeProxy = new Proxy(Nu(Ha(e.exposed)), {
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
  function Np(e) {
    return _e(e) && "__vccOpts" in e;
  }
  nc = (e, t) => vd(e, t, Hr);
  Cp = function(e, t, n) {
    try {
      zo(-1);
      const i = arguments.length;
      return i === 2 ? Ye(t) && !Ie(t) ? Qi(t) ? Pt(e, null, [
        t
      ]) : Pt(e, t) : Pt(e, null, t) : (i > 3 ? n = Array.prototype.slice.call(arguments, 2) : i === 3 && Qi(n) && (n = [
        n
      ]), Pt(e, t, n));
    } finally {
      zo(1);
    }
  };
  const Lp = "3.5.26";
  let ba;
  const Lc = typeof window < "u" && window.trustedTypes;
  if (Lc) try {
    ba = Lc.createPolicy("vue", {
      createHTML: (e) => e
    });
  } catch {
  }
  let vh, kp, Dp, Ln, kc, xp, Zn, gr, er, Eh, Ih, Fp, Ti, Dc;
  vh = ba ? (e) => ba.createHTML(e) : (e) => e;
  kp = "http://www.w3.org/2000/svg";
  Dp = "http://www.w3.org/1998/Math/MathML";
  Ln = typeof document < "u" ? document : null;
  kc = Ln && Ln.createElement("template");
  xp = {
    insert: (e, t, n) => {
      t.insertBefore(e, n || null);
    },
    remove: (e) => {
      const t = e.parentNode;
      t && t.removeChild(e);
    },
    createElement: (e, t, n, i) => {
      const c = t === "svg" ? Ln.createElementNS(kp, e) : t === "mathml" ? Ln.createElementNS(Dp, e) : n ? Ln.createElement(e, {
        is: n
      }) : Ln.createElement(e);
      return e === "select" && i && i.multiple != null && c.setAttribute("multiple", i.multiple), c;
    },
    createText: (e) => Ln.createTextNode(e),
    createComment: (e) => Ln.createComment(e),
    setText: (e, t) => {
      e.nodeValue = t;
    },
    setElementText: (e, t) => {
      e.textContent = t;
    },
    parentNode: (e) => e.parentNode,
    nextSibling: (e) => e.nextSibling,
    querySelector: (e) => Ln.querySelector(e),
    setScopeId(e, t) {
      e.setAttribute(t, "");
    },
    insertStaticContent(e, t, n, i, c, l) {
      const h = n ? n.previousSibling : t.lastChild;
      if (c && (c === l || c.nextSibling)) for (; t.insertBefore(c.cloneNode(true), n), !(c === l || !(c = c.nextSibling)); ) ;
      else {
        kc.innerHTML = vh(i === "svg" ? `<svg>${e}</svg>` : i === "mathml" ? `<math>${e}</math>` : e);
        const f = kc.content;
        if (i === "svg" || i === "mathml") {
          const p = f.firstChild;
          for (; p.firstChild; ) f.appendChild(p.firstChild);
          f.removeChild(p);
        }
        t.insertBefore(f, n);
      }
      return [
        h ? h.nextSibling : t.firstChild,
        n ? n.previousSibling : t.lastChild
      ];
    }
  };
  Zn = "transition";
  gr = "animation";
  er = /* @__PURE__ */ Symbol("_vtc");
  Eh = {
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
  Ih = dt({}, Hu, Eh);
  Fp = (e) => (e.displayName = "Transition", e.props = Ih, e);
  uv = Fp((e, { slots: t }) => Cp(kd, Th(e), t));
  Ti = (e, t = []) => {
    Ie(e) ? e.forEach((n) => n(...t)) : e && e(...t);
  };
  Dc = (e) => e ? Ie(e) ? e.some((t) => t.length > 1) : e.length > 1 : false;
  function Th(e) {
    const t = {};
    for (const de in e) de in Eh || (t[de] = e[de]);
    if (e.css === false) return t;
    const { name: n = "v", type: i, duration: c, enterFromClass: l = `${n}-enter-from`, enterActiveClass: h = `${n}-enter-active`, enterToClass: f = `${n}-enter-to`, appearFromClass: p = l, appearActiveClass: v = h, appearToClass: g = f, leaveFromClass: T = `${n}-leave-from`, leaveActiveClass: P = `${n}-leave-active`, leaveToClass: O = `${n}-leave-to` } = e, F = jp(c), C = F && F[0], fe = F && F[1], { onBeforeEnter: ne, onEnter: H, onEnterCancelled: Y, onLeave: U, onLeaveCancelled: ue, onBeforeAppear: ge = ne, onAppear: re = H, onAppearCancelled: he = Y } = t, te = (de, Ge, ht, Bt) => {
      de._enterCancelled = Bt, ti(de, Ge ? g : f), ti(de, Ge ? v : h), ht && ht();
    }, me = (de, Ge) => {
      de._isLeaving = false, ti(de, T), ti(de, O), ti(de, P), Ge && Ge();
    }, Oe = (de) => (Ge, ht) => {
      const Bt = de ? re : H, Ke = () => te(Ge, de, ht);
      Ti(Bt, [
        Ge,
        Ke
      ]), xc(() => {
        ti(Ge, de ? p : l), wn(Ge, de ? g : f), Dc(Bt) || Fc(Ge, i, C, Ke);
      });
    };
    return dt(t, {
      onBeforeEnter(de) {
        Ti(ne, [
          de
        ]), wn(de, l), wn(de, h);
      },
      onBeforeAppear(de) {
        Ti(ge, [
          de
        ]), wn(de, p), wn(de, v);
      },
      onEnter: Oe(false),
      onAppear: Oe(true),
      onLeave(de, Ge) {
        de._isLeaving = true;
        const ht = () => me(de, Ge);
        wn(de, T), de._enterCancelled ? (wn(de, P), va(de)) : (va(de), wn(de, P)), xc(() => {
          de._isLeaving && (ti(de, T), wn(de, O), Dc(U) || Fc(de, i, fe, ht));
        }), Ti(U, [
          de,
          ht
        ]);
      },
      onEnterCancelled(de) {
        te(de, false, void 0, true), Ti(Y, [
          de
        ]);
      },
      onAppearCancelled(de) {
        te(de, true, void 0, true), Ti(he, [
          de
        ]);
      },
      onLeaveCancelled(de) {
        me(de), Ti(ue, [
          de
        ]);
      }
    });
  }
  function jp(e) {
    if (e == null) return null;
    if (Ye(e)) return [
      zs(e.enter),
      zs(e.leave)
    ];
    {
      const t = zs(e);
      return [
        t,
        t
      ];
    }
  }
  function zs(e) {
    return xf(e);
  }
  function wn(e, t) {
    t.split(/\s+/).forEach((n) => n && e.classList.add(n)), (e[er] || (e[er] = /* @__PURE__ */ new Set())).add(t);
  }
  function ti(e, t) {
    t.split(/\s+/).forEach((i) => i && e.classList.remove(i));
    const n = e[er];
    n && (n.delete(t), n.size || (e[er] = void 0));
  }
  function xc(e) {
    requestAnimationFrame(() => {
      requestAnimationFrame(e);
    });
  }
  let Up = 0;
  function Fc(e, t, n, i) {
    const c = e._endId = ++Up, l = () => {
      c === e._endId && i();
    };
    if (n != null) return setTimeout(l, n);
    const { type: h, timeout: f, propCount: p } = Sh(e, t);
    if (!h) return i();
    const v = h + "end";
    let g = 0;
    const T = () => {
      e.removeEventListener(v, P), l();
    }, P = (O) => {
      O.target === e && ++g >= p && T();
    };
    setTimeout(() => {
      g < p && T();
    }, f + 1), e.addEventListener(v, P);
  }
  function Sh(e, t) {
    const n = window.getComputedStyle(e), i = (F) => (n[F] || "").split(", "), c = i(`${Zn}Delay`), l = i(`${Zn}Duration`), h = jc(c, l), f = i(`${gr}Delay`), p = i(`${gr}Duration`), v = jc(f, p);
    let g = null, T = 0, P = 0;
    t === Zn ? h > 0 && (g = Zn, T = h, P = l.length) : t === gr ? v > 0 && (g = gr, T = v, P = p.length) : (T = Math.max(h, v), g = T > 0 ? h > v ? Zn : gr : null, P = g ? g === Zn ? l.length : p.length : 0);
    const O = g === Zn && /\b(?:transform|all)(?:,|$)/.test(i(`${Zn}Property`).toString());
    return {
      type: g,
      timeout: T,
      propCount: P,
      hasTransform: O
    };
  }
  function jc(e, t) {
    for (; e.length < t.length; ) e = e.concat(e);
    return Math.max(...t.map((n, i) => Uc(n) + Uc(e[i])));
  }
  function Uc(e) {
    return e === "auto" ? 0 : Number(e.slice(0, -1).replace(",", ".")) * 1e3;
  }
  function va(e) {
    return (e ? e.ownerDocument : document).body.offsetHeight;
  }
  function Gp(e, t, n) {
    const i = e[er];
    i && (t = (t ? [
      t,
      ...i
    ] : [
      ...i
    ]).join(" ")), t == null ? e.removeAttribute("class") : n ? e.setAttribute("class", t) : e.className = t;
  }
  let $o, _h;
  $o = /* @__PURE__ */ Symbol("_vod");
  _h = /* @__PURE__ */ Symbol("_vsh");
  hv = {
    name: "show",
    beforeMount(e, { value: t }, { transition: n }) {
      e[$o] = e.style.display === "none" ? "" : e.style.display, n && t ? n.beforeEnter(e) : mr(e, t);
    },
    mounted(e, { value: t }, { transition: n }) {
      n && t && n.enter(e);
    },
    updated(e, { value: t, oldValue: n }, { transition: i }) {
      !t != !n && (i ? t ? (i.beforeEnter(e), mr(e, true), i.enter(e)) : i.leave(e, () => {
        mr(e, false);
      }) : mr(e, t));
    },
    beforeUnmount(e, { value: t }) {
      mr(e, t);
    }
  };
  function mr(e, t) {
    e.style.display = t ? e[$o] : "none", e[_h] = !t;
  }
  const Ah = /* @__PURE__ */ Symbol("");
  fv = function(e) {
    const t = gi();
    if (!t) return;
    const n = t.ut = (c = e(t.proxy)) => {
      Array.from(document.querySelectorAll(`[data-v-owner="${t.uid}"]`)).forEach((l) => Vo(l, c));
    }, i = () => {
      const c = e(t.proxy);
      t.ce ? Vo(t.ce, c) : Ea(t.subTree, c), n(c);
    };
    Xu(() => {
      xu(i);
    }), Qr(() => {
      Ji(i, hn, {
        flush: "post"
      });
      const c = new MutationObserver(i);
      c.observe(t.subTree.el.parentNode, {
        childList: true
      }), Za(() => c.disconnect());
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
    else if (e.type === Et) e.children.forEach((n) => Ea(n, t));
    else if (e.type === Dr) {
      let { el: n, anchor: i } = e;
      for (; n && (Vo(n, t), n !== i); ) n = n.nextSibling;
    }
  }
  function Vo(e, t) {
    if (e.nodeType === 1) {
      const n = e.style;
      let i = "";
      for (const c in t) {
        const l = Bf(t[c]);
        n.setProperty(`--${c}`, l), i += `--${c}: ${l};`;
      }
      n[Ah] = i;
    }
  }
  const Wp = /(?:^|;)\s*display\s*:/;
  function zp(e, t, n) {
    const i = e.style, c = st(n);
    let l = false;
    if (n && !c) {
      if (t) if (st(t)) for (const h of t.split(";")) {
        const f = h.slice(0, h.indexOf(":")).trim();
        n[f] == null && _o(i, f, "");
      }
      else for (const h in t) n[h] == null && _o(i, h, "");
      for (const h in n) h === "display" && (l = true), _o(i, h, n[h]);
    } else if (c) {
      if (t !== n) {
        const h = i[Ah];
        h && (n += ";" + h), i.cssText = n, l = Wp.test(n);
      }
    } else t && e.removeAttribute("style");
    $o in e && (e[$o] = l ? i.display : "", e[_h] && (i.display = "none"));
  }
  const Gc = /\s*!important$/;
  function _o(e, t, n) {
    if (Ie(n)) n.forEach((i) => _o(e, t, i));
    else if (n == null && (n = ""), t.startsWith("--")) e.setProperty(t, n);
    else {
      const i = Bp(e, t);
      Gc.test(n) ? e.setProperty(Yn(i), n.replace(Gc, ""), "important") : e[i] = n;
    }
  }
  const Wc = [
    "Webkit",
    "Moz",
    "ms"
  ], Bs = {};
  function Bp(e, t) {
    const n = Bs[t];
    if (n) return n;
    let i = Zt(t);
    if (i !== "filter" && i in e) return Bs[t] = i;
    i = as(i);
    for (let c = 0; c < Wc.length; c++) {
      const l = Wc[c] + i;
      if (l in e) return Bs[t] = l;
    }
    return t;
  }
  const zc = "http://www.w3.org/1999/xlink";
  function Bc(e, t, n, i, c, l = zf(t)) {
    i && t.startsWith("xlink:") ? n == null ? e.removeAttributeNS(zc, t.slice(6, t.length)) : e.setAttributeNS(zc, t, n) : n == null || l && !uu(n) ? e.removeAttribute(t) : e.setAttribute(t, l ? "" : qn(n) ? String(n) : n);
  }
  function $c(e, t, n, i, c) {
    if (t === "innerHTML" || t === "textContent") {
      n != null && (e[t] = t === "innerHTML" ? vh(n) : n);
      return;
    }
    const l = e.tagName;
    if (t === "value" && l !== "PROGRESS" && !l.includes("-")) {
      const f = l === "OPTION" ? e.getAttribute("value") || "" : e.value, p = n == null ? e.type === "checkbox" ? "on" : "" : String(n);
      (f !== p || !("_value" in e)) && (e.value = p), n == null && e.removeAttribute(t), e._value = n;
      return;
    }
    let h = false;
    if (n === "" || n == null) {
      const f = typeof e[t];
      f === "boolean" ? n = uu(n) : n == null && f === "string" ? (n = "", h = true) : f === "number" && (n = 0, h = true);
    }
    try {
      e[t] = n;
    } catch {
    }
    h && e.removeAttribute(c || t);
  }
  function $p(e, t, n, i) {
    e.addEventListener(t, n, i);
  }
  function Vp(e, t, n, i) {
    e.removeEventListener(t, n, i);
  }
  const Vc = /* @__PURE__ */ Symbol("_vei");
  function Hp(e, t, n, i, c = null) {
    const l = e[Vc] || (e[Vc] = {}), h = l[t];
    if (i && h) h.value = i;
    else {
      const [f, p] = qp(t);
      if (i) {
        const v = l[t] = Jp(i, c);
        $p(e, f, v, p);
      } else h && (Vp(e, f, h, p), l[t] = void 0);
    }
  }
  const Hc = /(?:Once|Passive|Capture)$/;
  function qp(e) {
    let t;
    if (Hc.test(e)) {
      t = {};
      let i;
      for (; i = e.match(Hc); ) e = e.slice(0, e.length - i[0].length), t[i[0].toLowerCase()] = true;
    }
    return [
      e[2] === ":" ? e.slice(3) : Yn(e.slice(2)),
      t
    ];
  }
  let $s = 0;
  const Yp = Promise.resolve(), Kp = () => $s || (Yp.then(() => $s = 0), $s = Date.now());
  function Jp(e, t) {
    const n = (i) => {
      if (!i._vts) i._vts = Date.now();
      else if (i._vts <= n.attached) return;
      pn(Zp(i, n.value), t, 5, [
        i
      ]);
    };
    return n.value = e, n.attached = Kp(), n;
  }
  function Zp(e, t) {
    if (Ie(t)) {
      const n = e.stopImmediatePropagation;
      return e.stopImmediatePropagation = () => {
        n.call(e), e._stopped = true;
      }, t.map((i) => (c) => !c._stopped && i && i(c));
    } else return t;
  }
  const qc = (e) => e.charCodeAt(0) === 111 && e.charCodeAt(1) === 110 && e.charCodeAt(2) > 96 && e.charCodeAt(2) < 123, Xp = (e, t, n, i, c, l) => {
    const h = c === "svg";
    t === "class" ? Gp(e, i, h) : t === "style" ? zp(e, n, i) : rs(t) ? ja(t) || Hp(e, t, n, i, l) : (t[0] === "." ? (t = t.slice(1), true) : t[0] === "^" ? (t = t.slice(1), false) : Qp(e, t, i, h)) ? ($c(e, t, i), !e.tagName.includes("-") && (t === "value" || t === "checked" || t === "selected") && Bc(e, t, i, h, l, t !== "value")) : e._isVueCE && (/[A-Z]/.test(t) || !st(i)) ? $c(e, Zt(t), i, l, t) : (t === "true-value" ? e._trueValue = i : t === "false-value" && (e._falseValue = i), Bc(e, t, i, h));
  };
  function Qp(e, t, n, i) {
    if (i) return !!(t === "innerHTML" || t === "textContent" || t in e && qc(t) && _e(n));
    if (t === "spellcheck" || t === "draggable" || t === "translate" || t === "autocorrect" || t === "sandbox" && e.tagName === "IFRAME" || t === "form" || t === "list" && e.tagName === "INPUT" || t === "type" && e.tagName === "TEXTAREA") return false;
    if (t === "width" || t === "height") {
      const c = e.tagName;
      if (c === "IMG" || c === "VIDEO" || c === "CANVAS" || c === "SOURCE") return false;
    }
    return qc(t) && st(n) ? false : t in e;
  }
  let Rh, Oh, Ho, Yc, eg, tg;
  Rh = /* @__PURE__ */ new WeakMap();
  Oh = /* @__PURE__ */ new WeakMap();
  Ho = /* @__PURE__ */ Symbol("_moveCb");
  Yc = /* @__PURE__ */ Symbol("_enterCb");
  eg = (e) => (delete e.props.mode, e);
  tg = eg({
    name: "TransitionGroup",
    props: dt({}, Ih, {
      tag: String,
      moveClass: String
    }),
    setup(e, { slots: t }) {
      const n = gi(), i = Vu();
      let c, l;
      return Ka(() => {
        if (!c.length) return;
        const h = e.moveClass || `${e.name || "v"}-move`;
        if (!og(c[0].el, n.vnode.el, h)) {
          c = [];
          return;
        }
        c.forEach(ng), c.forEach(ig);
        const f = c.filter(rg);
        va(n.vnode.el), f.forEach((p) => {
          const v = p.el, g = v.style;
          wn(v, h), g.transform = g.webkitTransform = g.transitionDuration = "";
          const T = v[Ho] = (P) => {
            P && P.target !== v || (!P || P.propertyName.endsWith("transform")) && (v.removeEventListener("transitionend", T), v[Ho] = null, ti(v, h));
          };
          v.addEventListener("transitionend", T);
        }), c = [];
      }), () => {
        const h = De(e), f = Th(h);
        let p = h.tag || Et;
        if (c = [], l) for (let v = 0; v < l.length; v++) {
          const g = l[v];
          g.el && g.el instanceof Element && (c.push(g), di(g, $r(g, f, i, n)), Rh.set(g, {
            left: g.el.offsetLeft,
            top: g.el.offsetTop
          }));
        }
        l = t.default ? Ya(t.default()) : [];
        for (let v = 0; v < l.length; v++) {
          const g = l[v];
          g.key != null && di(g, $r(g, f, i, n));
        }
        return Pt(p, null, l);
      };
    }
  });
  dv = tg;
  function ng(e) {
    const t = e.el;
    t[Ho] && t[Ho](), t[Yc] && t[Yc]();
  }
  function ig(e) {
    Oh.set(e, {
      left: e.el.offsetLeft,
      top: e.el.offsetTop
    });
  }
  function rg(e) {
    const t = Rh.get(e), n = Oh.get(e), i = t.left - n.left, c = t.top - n.top;
    if (i || c) {
      const l = e.el.style;
      return l.transform = l.webkitTransform = `translate(${i}px,${c}px)`, l.transitionDuration = "0s", e;
    }
  }
  function og(e, t, n) {
    const i = e.cloneNode(), c = e[er];
    c && c.forEach((f) => {
      f.split(/\s+/).forEach((p) => p && i.classList.remove(p));
    }), n.split(/\s+/).forEach((f) => f && i.classList.add(f)), i.style.display = "none";
    const l = t.nodeType === 1 ? t : t.parentNode;
    l.appendChild(i);
    const { hasTransform: h } = Sh(i);
    return l.removeChild(i), h;
  }
  let sg, ag, cg, lg;
  sg = [
    "ctrl",
    "shift",
    "alt",
    "meta"
  ];
  ag = {
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
    exact: (e, t) => sg.some((n) => e[`${n}Key`] && !t.includes(n))
  };
  pv = (e, t) => {
    const n = e._withMods || (e._withMods = {}), i = t.join(".");
    return n[i] || (n[i] = ((c, ...l) => {
      for (let h = 0; h < t.length; h++) {
        const f = ag[t[h]];
        if (f && f(c, t)) return;
      }
      return e(c, ...l);
    }));
  };
  cg = {
    esc: "escape",
    space: " ",
    up: "arrow-up",
    left: "arrow-left",
    right: "arrow-right",
    down: "arrow-down",
    delete: "backspace"
  };
  gv = (e, t) => {
    const n = e._withKeys || (e._withKeys = {}), i = t.join(".");
    return n[i] || (n[i] = ((c) => {
      if (!("key" in c)) return;
      const l = Yn(c.key);
      if (t.some((h) => h === l || cg[h] === l)) return e(c);
    }));
  };
  lg = dt({
    patchProp: Xp
  }, xp);
  let Kc;
  function ug() {
    return Kc || (Kc = pp(lg));
  }
  const Mh = ((...e) => {
    const t = ug().createApp(...e), { mount: n } = t;
    return t.mount = (i) => {
      const c = fg(i);
      if (!c) return;
      const l = t._component;
      !_e(l) && !l.render && !l.template && (l.template = c.innerHTML), c.nodeType === 1 && (c.textContent = "");
      const h = n(c, false, hg(c));
      return c instanceof Element && (c.removeAttribute("v-cloak"), c.setAttribute("data-v-app", "")), h;
    }, t;
  });
  function hg(e) {
    if (e instanceof SVGElement) return "svg";
    if (typeof MathMLElement == "function" && e instanceof MathMLElement) return "mathml";
  }
  function fg(e) {
    return st(e) ? document.querySelector(e) : e;
  }
  const dg = "" + new URL("../favicon.svg", import.meta.url).href;
  let Ph, pg, Nh, gg, mg, wr;
  Ph = typeof global == "object" && global && global.Object === Object && global;
  pg = typeof self == "object" && self && self.Object === Object && self;
  Sn = Ph || pg || Function("return this")();
  tr = Sn.Symbol;
  Nh = Object.prototype;
  gg = Nh.hasOwnProperty;
  mg = Nh.toString;
  wr = tr ? tr.toStringTag : void 0;
  function wg(e) {
    var t = gg.call(e, wr), n = e[wr];
    try {
      e[wr] = void 0;
      var i = true;
    } catch {
    }
    var c = mg.call(e);
    return i && (t ? e[wr] = n : delete e[wr]), c;
  }
  var yg = Object.prototype, bg = yg.toString;
  function vg(e) {
    return bg.call(e);
  }
  var Eg = "[object Null]", Ig = "[object Undefined]", Jc = tr ? tr.toStringTag : void 0;
  mi = function(e) {
    return e == null ? e === void 0 ? Ig : Eg : Jc && Jc in Object(e) ? wg(e) : vg(e);
  };
  wi = function(e) {
    return e != null && typeof e == "object";
  };
  Es = Array.isArray;
  Is = function(e) {
    var t = typeof e;
    return e != null && (t == "object" || t == "function");
  };
  var Tg = "[object AsyncFunction]", Sg = "[object Function]", _g = "[object GeneratorFunction]", Ag = "[object Proxy]";
  Ch = function(e) {
    if (!Is(e)) return false;
    var t = mi(e);
    return t == Sg || t == _g || t == Tg || t == Ag;
  };
  var Vs = Sn["__core-js_shared__"], Zc = (function() {
    var e = /[^.]+$/.exec(Vs && Vs.keys && Vs.keys.IE_PROTO || "");
    return e ? "Symbol(src)_1." + e : "";
  })();
  function Rg(e) {
    return !!Zc && Zc in e;
  }
  var Og = Function.prototype, Mg = Og.toString;
  function xi(e) {
    if (e != null) {
      try {
        return Mg.call(e);
      } catch {
      }
      try {
        return e + "";
      } catch {
      }
    }
    return "";
  }
  var Pg = /[\\^$.*+?()[\]{}|]/g, Ng = /^\[object .+?Constructor\]$/, Cg = Function.prototype, Lg = Object.prototype, kg = Cg.toString, Dg = Lg.hasOwnProperty, xg = RegExp("^" + kg.call(Dg).replace(Pg, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$");
  function Fg(e) {
    if (!Is(e) || Rg(e)) return false;
    var t = Ch(e) ? xg : Ng;
    return t.test(xi(e));
  }
  function jg(e, t) {
    return e == null ? void 0 : e[t];
  }
  function Fi(e, t) {
    var n = jg(e, t);
    return Fg(n) ? n : void 0;
  }
  let Ia, Xc, Ug;
  Ia = Fi(Sn, "WeakMap");
  Xc = Object.create;
  Ug = /* @__PURE__ */ (function() {
    function e() {
    }
    return function(t) {
      if (!Is(t)) return {};
      if (Xc) return Xc(t);
      e.prototype = t;
      var n = new e();
      return e.prototype = void 0, n;
    };
  })();
  Qc = (function() {
    try {
      var e = Fi(Object, "defineProperty");
      return e({}, "", {}), e;
    } catch {
    }
  })();
  function Gg(e, t) {
    for (var n = -1, i = e == null ? 0 : e.length; ++n < i && t(e[n], n, e) !== false; ) ;
    return e;
  }
  var Wg = 9007199254740991, zg = /^(?:0|[1-9]\d*)$/;
  Bg = function(e, t) {
    var n = typeof e;
    return t = t ?? Wg, !!t && (n == "number" || n != "symbol" && zg.test(e)) && e > -1 && e % 1 == 0 && e < t;
  };
  $g = function(e, t, n) {
    t == "__proto__" && Qc ? Qc(e, t, {
      configurable: true,
      enumerable: true,
      value: n,
      writable: true
    }) : e[t] = n;
  };
  Lh = function(e, t) {
    return e === t || e !== e && t !== t;
  };
  var Vg = Object.prototype, Hg = Vg.hasOwnProperty;
  qg = function(e, t, n) {
    var i = e[t];
    (!(Hg.call(e, t) && Lh(i, n)) || n === void 0 && !(t in e)) && $g(e, t, n);
  };
  var Yg = 9007199254740991;
  kh = function(e) {
    return typeof e == "number" && e > -1 && e % 1 == 0 && e <= Yg;
  };
  Kg = function(e) {
    return e != null && kh(e.length) && !Ch(e);
  };
  var Jg = Object.prototype;
  Dh = function(e) {
    var t = e && e.constructor, n = typeof t == "function" && t.prototype || Jg;
    return e === n;
  };
  function Zg(e, t) {
    for (var n = -1, i = Array(e); ++n < e; ) i[n] = t(n);
    return i;
  }
  var Xg = "[object Arguments]";
  function el(e) {
    return wi(e) && mi(e) == Xg;
  }
  let xh, Qg, em;
  xh = Object.prototype;
  Qg = xh.hasOwnProperty;
  em = xh.propertyIsEnumerable;
  tm = el(/* @__PURE__ */ (function() {
    return arguments;
  })()) ? el : function(e) {
    return wi(e) && Qg.call(e, "callee") && !em.call(e, "callee");
  };
  function nm() {
    return false;
  }
  let Fh, tl, im, nl, rm, om, sm, am, cm, lm, um, hm, fm, dm, pm, gm, mm, wm, ym, bm, vm, Em, Im, Tm, Sm, _m, Am, Rm, Om, Qe;
  Fh = typeof exports == "object" && exports && !exports.nodeType && exports;
  tl = Fh && typeof module == "object" && module && !module.nodeType && module;
  im = tl && tl.exports === Fh;
  nl = im ? Sn.Buffer : void 0;
  rm = nl ? nl.isBuffer : void 0;
  jh = rm || nm;
  om = "[object Arguments]";
  sm = "[object Array]";
  am = "[object Boolean]";
  cm = "[object Date]";
  lm = "[object Error]";
  um = "[object Function]";
  hm = "[object Map]";
  fm = "[object Number]";
  dm = "[object Object]";
  pm = "[object RegExp]";
  gm = "[object Set]";
  mm = "[object String]";
  wm = "[object WeakMap]";
  ym = "[object ArrayBuffer]";
  bm = "[object DataView]";
  vm = "[object Float32Array]";
  Em = "[object Float64Array]";
  Im = "[object Int8Array]";
  Tm = "[object Int16Array]";
  Sm = "[object Int32Array]";
  _m = "[object Uint8Array]";
  Am = "[object Uint8ClampedArray]";
  Rm = "[object Uint16Array]";
  Om = "[object Uint32Array]";
  Qe = {};
  Qe[vm] = Qe[Em] = Qe[Im] = Qe[Tm] = Qe[Sm] = Qe[_m] = Qe[Am] = Qe[Rm] = Qe[Om] = true;
  Qe[om] = Qe[sm] = Qe[ym] = Qe[am] = Qe[bm] = Qe[cm] = Qe[lm] = Qe[um] = Qe[hm] = Qe[fm] = Qe[dm] = Qe[pm] = Qe[gm] = Qe[mm] = Qe[wm] = false;
  function Mm(e) {
    return wi(e) && kh(e.length) && !!Qe[mi(e)];
  }
  function ic(e) {
    return function(t) {
      return e(t);
    };
  }
  let Uh, Fr, Pm, Hs, nr, il, Cm, Lm;
  Uh = typeof exports == "object" && exports && !exports.nodeType && exports;
  Fr = Uh && typeof module == "object" && module && !module.nodeType && module;
  Pm = Fr && Fr.exports === Uh;
  Hs = Pm && Ph.process;
  nr = (function() {
    try {
      var e = Fr && Fr.require && Fr.require("util").types;
      return e || Hs && Hs.binding && Hs.binding("util");
    } catch {
    }
  })();
  il = nr && nr.isTypedArray;
  Nm = il ? ic(il) : Mm;
  Cm = Object.prototype;
  Lm = Cm.hasOwnProperty;
  km = function(e, t) {
    var n = Es(e), i = !n && tm(e), c = !n && !i && jh(e), l = !n && !i && !c && Nm(e), h = n || i || c || l, f = h ? Zg(e.length, String) : [], p = f.length;
    for (var v in e) (t || Lm.call(e, v)) && !(h && (v == "length" || c && (v == "offset" || v == "parent") || l && (v == "buffer" || v == "byteLength" || v == "byteOffset") || Bg(v, p))) && f.push(v);
    return f;
  };
  function Gh(e, t) {
    return function(n) {
      return e(t(n));
    };
  }
  var Dm = Gh(Object.keys, Object), xm = Object.prototype, Fm = xm.hasOwnProperty;
  function jm(e) {
    if (!Dh(e)) return Dm(e);
    var t = [];
    for (var n in Object(e)) Fm.call(e, n) && n != "constructor" && t.push(n);
    return t;
  }
  Um = function(e) {
    return Kg(e) ? km(e) : jm(e);
  };
  var qr = Fi(Object, "create");
  function Gm() {
    this.__data__ = qr ? qr(null) : {}, this.size = 0;
  }
  function Wm(e) {
    var t = this.has(e) && delete this.__data__[e];
    return this.size -= t ? 1 : 0, t;
  }
  var zm = "__lodash_hash_undefined__", Bm = Object.prototype, $m = Bm.hasOwnProperty;
  function Vm(e) {
    var t = this.__data__;
    if (qr) {
      var n = t[e];
      return n === zm ? void 0 : n;
    }
    return $m.call(t, e) ? t[e] : void 0;
  }
  var Hm = Object.prototype, qm = Hm.hasOwnProperty;
  function Ym(e) {
    var t = this.__data__;
    return qr ? t[e] !== void 0 : qm.call(t, e);
  }
  var Km = "__lodash_hash_undefined__";
  function Jm(e, t) {
    var n = this.__data__;
    return this.size += this.has(e) ? 0 : 1, n[e] = qr && t === void 0 ? Km : t, this;
  }
  function Di(e) {
    var t = -1, n = e == null ? 0 : e.length;
    for (this.clear(); ++t < n; ) {
      var i = e[t];
      this.set(i[0], i[1]);
    }
  }
  Di.prototype.clear = Gm;
  Di.prototype.delete = Wm;
  Di.prototype.get = Vm;
  Di.prototype.has = Ym;
  Di.prototype.set = Jm;
  function Zm() {
    this.__data__ = [], this.size = 0;
  }
  function Ts(e, t) {
    for (var n = e.length; n--; ) if (Lh(e[n][0], t)) return n;
    return -1;
  }
  var Xm = Array.prototype, Qm = Xm.splice;
  function ew(e) {
    var t = this.__data__, n = Ts(t, e);
    if (n < 0) return false;
    var i = t.length - 1;
    return n == i ? t.pop() : Qm.call(t, n, 1), --this.size, true;
  }
  function tw(e) {
    var t = this.__data__, n = Ts(t, e);
    return n < 0 ? void 0 : t[n][1];
  }
  function nw(e) {
    return Ts(this.__data__, e) > -1;
  }
  function iw(e, t) {
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
  Jn.prototype.clear = Zm;
  Jn.prototype.delete = ew;
  Jn.prototype.get = tw;
  Jn.prototype.has = nw;
  Jn.prototype.set = iw;
  var Yr = Fi(Sn, "Map");
  function rw() {
    this.size = 0, this.__data__ = {
      hash: new Di(),
      map: new (Yr || Jn)(),
      string: new Di()
    };
  }
  function ow(e) {
    var t = typeof e;
    return t == "string" || t == "number" || t == "symbol" || t == "boolean" ? e !== "__proto__" : e === null;
  }
  function Ss(e, t) {
    var n = e.__data__;
    return ow(t) ? n[typeof t == "string" ? "string" : "hash"] : n.map;
  }
  function sw(e) {
    var t = Ss(this, e).delete(e);
    return this.size -= t ? 1 : 0, t;
  }
  function aw(e) {
    return Ss(this, e).get(e);
  }
  function cw(e) {
    return Ss(this, e).has(e);
  }
  function lw(e, t) {
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
  lr.prototype.clear = rw;
  lr.prototype.delete = sw;
  lr.prototype.get = aw;
  lr.prototype.has = cw;
  lr.prototype.set = lw;
  function uw(e, t) {
    for (var n = -1, i = t.length, c = e.length; ++n < i; ) e[c + n] = t[n];
    return e;
  }
  var Wh = Gh(Object.getPrototypeOf, Object), hw = "[object Object]", fw = Function.prototype, dw = Object.prototype, zh = fw.toString, pw = dw.hasOwnProperty, gw = zh.call(Object);
  mw = function(e) {
    if (!wi(e) || mi(e) != hw) return false;
    var t = Wh(e);
    if (t === null) return true;
    var n = pw.call(t, "constructor") && t.constructor;
    return typeof n == "function" && n instanceof n && zh.call(n) == gw;
  };
  var ww = "[object DOMException]", yw = "[object Error]";
  function Bh(e) {
    if (!wi(e)) return false;
    var t = mi(e);
    return t == yw || t == ww || typeof e.message == "string" && typeof e.name == "string" && !mw(e);
  }
  function bw() {
    this.__data__ = new Jn(), this.size = 0;
  }
  function vw(e) {
    var t = this.__data__, n = t.delete(e);
    return this.size = t.size, n;
  }
  function Ew(e) {
    return this.__data__.get(e);
  }
  function Iw(e) {
    return this.__data__.has(e);
  }
  var Tw = 200;
  function Sw(e, t) {
    var n = this.__data__;
    if (n instanceof Jn) {
      var i = n.__data__;
      if (!Yr || i.length < Tw - 1) return i.push([
        e,
        t
      ]), this.size = ++n.size, this;
      n = this.__data__ = new lr(i);
    }
    return n.set(e, t), this.size = n.size, this;
  }
  ur = function(e) {
    var t = this.__data__ = new Jn(e);
    this.size = t.size;
  };
  ur.prototype.clear = bw;
  ur.prototype.delete = vw;
  ur.prototype.get = Ew;
  ur.prototype.has = Iw;
  ur.prototype.set = Sw;
  var $h = typeof exports == "object" && exports && !exports.nodeType && exports, rl = $h && typeof module == "object" && module && !module.nodeType && module, _w = rl && rl.exports === $h, ol = _w ? Sn.Buffer : void 0, sl = ol ? ol.allocUnsafe : void 0;
  Aw = function(e, t) {
    if (t) return e.slice();
    var n = e.length, i = sl ? sl(n) : new e.constructor(n);
    return e.copy(i), i;
  };
  function Rw(e, t) {
    for (var n = -1, i = e == null ? 0 : e.length, c = 0, l = []; ++n < i; ) {
      var h = e[n];
      t(h, n, e) && (l[c++] = h);
    }
    return l;
  }
  function Ow() {
    return [];
  }
  var Mw = Object.prototype, Pw = Mw.propertyIsEnumerable, al = Object.getOwnPropertySymbols, Nw = al ? function(e) {
    return e == null ? [] : (e = Object(e), Rw(al(e), function(t) {
      return Pw.call(e, t);
    }));
  } : Ow;
  function Cw(e, t, n) {
    var i = t(e);
    return Es(e) ? i : uw(i, n(e));
  }
  Lw = function(e) {
    return Cw(e, Um, Nw);
  };
  let Ta, Sa, _a, cl, kw, ll, ul, hl, fl, Dw, xw, Fw, jw, Uw;
  Ta = Fi(Sn, "DataView");
  Sa = Fi(Sn, "Promise");
  _a = Fi(Sn, "Set");
  cl = "[object Map]";
  kw = "[object Object]";
  ll = "[object Promise]";
  ul = "[object Set]";
  hl = "[object WeakMap]";
  fl = "[object DataView]";
  Dw = xi(Ta);
  xw = xi(Yr);
  Fw = xi(Sa);
  jw = xi(_a);
  Uw = xi(Ia);
  Dn = mi;
  (Ta && Dn(new Ta(new ArrayBuffer(1))) != fl || Yr && Dn(new Yr()) != cl || Sa && Dn(Sa.resolve()) != ll || _a && Dn(new _a()) != ul || Ia && Dn(new Ia()) != hl) && (Dn = function(e) {
    var t = mi(e), n = t == kw ? e.constructor : void 0, i = n ? xi(n) : "";
    if (i) switch (i) {
      case Dw:
        return fl;
      case xw:
        return cl;
      case Fw:
        return ll;
      case jw:
        return ul;
      case Uw:
        return hl;
    }
    return t;
  });
  var Gw = Object.prototype, Ww = Gw.hasOwnProperty;
  function zw(e) {
    var t = e.length, n = new e.constructor(t);
    return t && typeof e[0] == "string" && Ww.call(e, "index") && (n.index = e.index, n.input = e.input), n;
  }
  dl = Sn.Uint8Array;
  function rc(e) {
    var t = new e.constructor(e.byteLength);
    return new dl(t).set(new dl(e)), t;
  }
  function Bw(e, t) {
    var n = rc(e.buffer);
    return new e.constructor(n, e.byteOffset, e.byteLength);
  }
  var $w = /\w*$/;
  function Vw(e) {
    var t = new e.constructor(e.source, $w.exec(e));
    return t.lastIndex = e.lastIndex, t;
  }
  var pl = tr ? tr.prototype : void 0, gl = pl ? pl.valueOf : void 0;
  function Hw(e) {
    return gl ? Object(gl.call(e)) : {};
  }
  qw = function(e, t) {
    var n = t ? rc(e.buffer) : e.buffer;
    return new e.constructor(n, e.byteOffset, e.length);
  };
  var Yw = "[object Boolean]", Kw = "[object Date]", Jw = "[object Map]", Zw = "[object Number]", Xw = "[object RegExp]", Qw = "[object Set]", ey = "[object String]", ty = "[object Symbol]", ny = "[object ArrayBuffer]", iy = "[object DataView]", ry = "[object Float32Array]", oy = "[object Float64Array]", sy = "[object Int8Array]", ay = "[object Int16Array]", cy = "[object Int32Array]", ly = "[object Uint8Array]", uy = "[object Uint8ClampedArray]", hy = "[object Uint16Array]", fy = "[object Uint32Array]";
  function dy(e, t, n) {
    var i = e.constructor;
    switch (t) {
      case ny:
        return rc(e);
      case Yw:
      case Kw:
        return new i(+e);
      case iy:
        return Bw(e);
      case ry:
      case oy:
      case sy:
      case ay:
      case cy:
      case ly:
      case uy:
      case hy:
      case fy:
        return qw(e, n);
      case Jw:
        return new i();
      case Zw:
      case ey:
        return new i(e);
      case Xw:
        return Vw(e);
      case Qw:
        return new i();
      case ty:
        return Hw(e);
    }
  }
  py = function(e) {
    return typeof e.constructor == "function" && !Dh(e) ? Ug(Wh(e)) : {};
  };
  var gy = "[object Map]";
  function my(e) {
    return wi(e) && Dn(e) == gy;
  }
  var ml = nr && nr.isMap, wy = ml ? ic(ml) : my, yy = "[object Set]";
  function by(e) {
    return wi(e) && Dn(e) == yy;
  }
  var wl = nr && nr.isSet, vy = wl ? ic(wl) : by, Ey = 1, Vh = "[object Arguments]", Iy = "[object Array]", Ty = "[object Boolean]", Sy = "[object Date]", _y = "[object Error]", Hh = "[object Function]", Ay = "[object GeneratorFunction]", Ry = "[object Map]", Oy = "[object Number]", qh = "[object Object]", My = "[object RegExp]", Py = "[object Set]", Ny = "[object String]", Cy = "[object Symbol]", Ly = "[object WeakMap]", ky = "[object ArrayBuffer]", Dy = "[object DataView]", xy = "[object Float32Array]", Fy = "[object Float64Array]", jy = "[object Int8Array]", Uy = "[object Int16Array]", Gy = "[object Int32Array]", Wy = "[object Uint8Array]", zy = "[object Uint8ClampedArray]", By = "[object Uint16Array]", $y = "[object Uint32Array]", Je = {};
  Je[Vh] = Je[Iy] = Je[ky] = Je[Dy] = Je[Ty] = Je[Sy] = Je[xy] = Je[Fy] = Je[jy] = Je[Uy] = Je[Gy] = Je[Ry] = Je[Oy] = Je[qh] = Je[My] = Je[Py] = Je[Ny] = Je[Cy] = Je[Wy] = Je[zy] = Je[By] = Je[$y] = true;
  Je[_y] = Je[Hh] = Je[Ly] = false;
  function Ao(e, t, n, i, c, l) {
    var h, f = t & Ey;
    if (h !== void 0) return h;
    if (!Is(e)) return e;
    var p = Es(e);
    if (p) h = zw(e);
    else {
      var v = Dn(e), g = v == Hh || v == Ay;
      if (jh(e)) return Aw(e, f);
      if (v == qh || v == Vh || g && !c) h = g ? {} : py(e);
      else {
        if (!Je[v]) return c ? e : {};
        h = dy(e, v, f);
      }
    }
    l || (l = new ur());
    var T = l.get(e);
    if (T) return T;
    l.set(e, h), vy(e) ? e.forEach(function(F) {
      h.add(Ao(F, t, n, F, e, l));
    }) : wy(e) && e.forEach(function(F, C) {
      h.set(C, Ao(F, t, n, C, e, l));
    });
    var P = Lw, O = p ? void 0 : P(e);
    return Gg(O || e, function(F, C) {
      O && (C = F, F = e[C]), qg(h, C, Ao(F, t, n, C, e, l));
    }), h;
  }
  var Vy = 1, Hy = 4;
  Yh = function(e) {
    return Ao(e, Vy | Hy);
  };
  var qy = "[object String]";
  function Aa(e) {
    return typeof e == "string" || !Es(e) && wi(e) && mi(e) == qy;
  }
  const Ct = (e) => Aa(e) ? e : Bh(e) ? String(e) : JSON.stringify(e), mn = {
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
  }, Yy = {
    info: console.info,
    warn: console.warn,
    error: console.error,
    debug: console.debug
  };
  async function Kh(e, t, n = 1e4, i = {}, c = 0, l = 0, h = 0) {
    var _a3, _b2, _c2, _d2, _e2, _f;
    const { logger: f = Yy, progressReporter: p, printLog: v = true } = i, g = e.find((C) => C.name === t);
    if (!g) throw new Error(`cannot exactly find module "${t}" from the library`);
    const T = e.findIndex((C) => C.name === g.name);
    if (e[T].status === "loaded") return v && f.info(mn.alreadyLoaded(g.name)), {
      completed: h,
      total: l
    };
    const P = g.dependencies || [], O = e.filter((C) => P.includes(C.name)), F = P.filter((C) => !e.find((fe) => fe.name === C));
    if (F.length > 0) {
      const C = mn.missingDependencies(g.name, F.join(", "));
      throw v && f.error(C), new Error(C);
    }
    if (e[T].status === "error") {
      const C = mn.errorDetermined(g.name);
      throw v && f.info(C), new Error(C);
    }
    if (e[T].status === "loading") return v && f.info(mn.alreadyLoading(g.name)), await Ky(e, g.name, n, f), {
      completed: h,
      total: l
    };
    try {
      let C = l, fe = h;
      if (c === 0) {
        const ne = /* @__PURE__ */ new Set(), H = (Y) => {
          if (ne.has(Y)) return;
          ne.add(Y);
          const U = e.find((ue) => ue.name === Y);
          if (U && U.dependencies) for (const ue of U.dependencies) H(ue);
        };
        H(t), C = ne.size, fe = 0;
      }
      if (O.length > 0) {
        f.info(mn.loadDependencies(g.name, O.map((ne) => ne.name)));
        for (const ne of O) {
          const H = await Kh(e, ne.name, n, {
            logger: f,
            progressReporter: p,
            printLog: v
          }, c + 1, C, fe);
          fe = H.completed, C = H.total, (_a3 = p == null ? void 0 : p.onOverallProgress) == null ? void 0 : _a3.call(p, fe, C);
        }
        v && f.info(mn.dependenciesReady(g.name));
      }
      e[T].status = "loading", (_b2 = p == null ? void 0 : p.onModuleStart) == null ? void 0 : _b2.call(p, g.displayName);
      try {
        return v && f.info(mn.loading(g.name)), await g.moduleInit(n), e[T].status = "loaded", fe++, (_c2 = p == null ? void 0 : p.onModuleComplete) == null ? void 0 : _c2.call(p, g.displayName), (_d2 = p == null ? void 0 : p.onOverallProgress) == null ? void 0 : _d2.call(p, fe, C), v && f.info(mn.loaded(g.name)), {
          completed: fe,
          total: C
        };
      } catch (ne) {
        e[T].status = "error";
        const H = mn.error(g.name, Aa(ne) ? ne : Bh(ne) ? ne.message : JSON.stringify(ne));
        throw f.error(H), (_e2 = p == null ? void 0 : p.onModuleError) == null ? void 0 : _e2.call(p, g.displayName, Aa(ne) ? new Error(ne) : ne), new Error(H);
      }
    } catch (C) {
      e[T].status = "error", console.log(C);
      const fe = mn.error(g.name, C);
      throw f.error(fe), (_f = p == null ? void 0 : p.onModuleError) == null ? void 0 : _f.call(p, g.displayName, C), new Error(fe);
    }
  }
  async function Ky(e, t, n = 1e4, i) {
    const c = Date.now();
    return new Promise((l, h) => {
      const f = setInterval(() => {
        const p = e.find((v) => v.name === t);
        if (p && p.status === "loaded") clearInterval(f), l();
        else if (Date.now() - c > n) {
          clearInterval(f);
          const v = new Error(`Load module ${t} timeout`);
          i == null ? void 0 : i.error(v.message), h(v);
        }
      }, 100);
    });
  }
  let Jy, Zy, yl, Xy, Qy, e0, Jh;
  Jy = "modulepreload";
  Zy = function(e, t) {
    return new URL(e, t).href;
  };
  yl = {};
  qs = function(t, n, i) {
    let c = Promise.resolve();
    if (n && n.length > 0) {
      let v = function(g) {
        return Promise.all(g.map((T) => Promise.resolve(T).then((P) => ({
          status: "fulfilled",
          value: P
        }), (P) => ({
          status: "rejected",
          reason: P
        }))));
      };
      const h = document.getElementsByTagName("link"), f = document.querySelector("meta[property=csp-nonce]"), p = (f == null ? void 0 : f.nonce) || (f == null ? void 0 : f.getAttribute("nonce"));
      c = v(n.map((g) => {
        if (g = Zy(g, i), g in yl) return;
        yl[g] = true;
        const T = g.endsWith(".css"), P = T ? '[rel="stylesheet"]' : "";
        if (i) for (let F = h.length - 1; F >= 0; F--) {
          const C = h[F];
          if (C.href === g && (!T || C.rel === "stylesheet")) return;
        }
        else if (document.querySelector(`link[href="${g}"]${P}`)) return;
        const O = document.createElement("link");
        if (O.rel = T ? "stylesheet" : Jy, T || (O.as = "script"), O.crossOrigin = "", O.href = g, p && O.setAttribute("nonce", p), document.head.appendChild(O), T) return new Promise((F, C) => {
          O.addEventListener("load", F), O.addEventListener("error", () => C(new Error(`Unable to preload CSS for ${g}`)));
        });
      }));
    }
    function l(h) {
      const f = new Event("vite:preloadError", {
        cancelable: true
      });
      if (f.payload = h, window.dispatchEvent(f), !f.defaultPrevented) throw h;
    }
    return c.then((h) => {
      for (const f of h || []) f.status === "rejected" && l(f.reason);
      return t().catch(l);
    });
  };
  Xy = JSON.parse(`[{"id":"tauri","name":"Tauri","description":"A framework for building tiny, fast binaries for all major desktop and mobile platforms.","url":"https://github.com/tauri-apps/tauri","homepage":"https://v2.tauri.app/","licenseType":"MIT, Apache-2.0","license":"Code: (c) 2015 - Present - The Tauri Programme within The Commons Conservancy.\\n\\nMIT or MIT/Apache 2.0 where applicable."},{"id":"uuid","name":"uuid","description":"Generate a universally unique identifier (UUID) in JavaScript.","url":"https://github.com/uuidjs/uuid","licenseType":"MIT","license":"The MIT License (MIT)\\n\\n\\t\\tCopyright (c) 2010-2020 Robert Kieffer and other contributors\\n\\n\\t\\tPermission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the \\"Software\\"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:\\n\\n\\t\\tThe above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.\\n\\t\\t\\n\\t\\tTHE SOFTWARE IS PROVIDED \\"AS IS\\", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE."},{"id":"vue","name":"Vue.js","description":"An approachable, performant and versatile framework for building web user interfaces.","url":"https://github.com/vuejs/core","homepage":"https://vuejs.org","licenseType":"MIT","license":"\\n        The MIT License (MIT)\\n\\n\\t\\tCopyright (c) 2018-present, Yuxi (Evan) You and Vue contributors\\n\\n\\t\\tPermission is hereby granted, free of charge, to any person obtaining a copy\\n\\t\\tof this software and associated documentation files (the \\"Software\\"), to deal\\n\\t\\tin the Software without restriction, including without limitation the rights\\n\\t\\tto use, copy, modify, merge, publish, distribute, sublicense, and/or sell\\n\\t\\tcopies of the Software, and to permit persons to whom the Software is\\n\\t\\tfurnished to do so, subject to the following conditions:\\n\\n\\t\\tThe above copyright notice and this permission notice shall be included in\\n\\t\\tall copies or substantial portions of the Software.\\n\\n\\t\\tTHE SOFTWARE IS PROVIDED \\"AS IS\\", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR\\n\\t\\tIMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,\\n\\t\\tFITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE\\n\\t\\tAUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER\\n\\t\\tLIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,\\n\\t\\tOUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN\\n\\t\\tTHE SOFTWARE."},{"id":"vue-router","name":"Vue Router","description":"Expressive, configurable and convenient routing for Vue.js.","url":"https://github.com/vuejs/router","homepage":"https://router.vuejs.org/","licenseType":"MIT","license":"\\n        The MIT License (MIT)\\n\\n        Copyright (c) 2019-present Eduardo San Martin Morote\\n\\n        Permission is hereby granted, free of charge, to any person obtaining a copy\\n        of this software and associated documentation files (the \\"Software\\"), to deal\\n        in the Software without restriction, including without limitation the rights\\n        to use, copy, modify, merge, publish, distribute, sublicense, and/or sell\\n        copies of the Software, and to permit persons to whom the Software is\\n        furnished to do so, subject to the following conditions:\\n\\n        The above copyright notice and this permission notice shall be included in all\\n        copies or substantial portions of the Software.\\n\\n        THE SOFTWARE IS PROVIDED \\"AS IS\\", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR\\n        IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,\\n        FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE\\n        AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER\\n        LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,\\n        OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE\\n        SOFTWARE."},{"id":"naive-ui","name":"Naive UI","description":"A Vue 3 based UI Components Library","url":"https://github.com/tusen-ai/naive-ui","homepage":"https://www.naiveui.com","licenseType":"MIT","license":"\\n        MIT License\\n\\n        Copyright (c) 2021 TuSimple\\n\\n        Permission is hereby granted, free of charge, to any person obtaining a copy\\n        of this software and associated documentation files (the \\"Software\\"), to deal\\n        in the Software without restriction, including without limitation the rights\\n        to use, copy, modify, merge, publish, distribute, sublicense, and/or sell\\n        copies of the Software, and to permit persons to whom the Software is\\n        furnished to do so, subject to the following conditions:\\n\\n        The above copyright notice and this permission notice shall be included in all\\n        copies or substantial portions of the Software.\\n\\n        THE SOFTWARE IS PROVIDED \\"AS IS\\", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR\\n        IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,\\n        FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE\\n        AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER\\n        LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,\\n        OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE\\n        SOFTWARE."},{"id":"uaparser-js","name":"UAParser.js","description":"The most comprehensive, compact, & up-to-date JavaScript library to detect user's Browser.","url":"https://github.com/faisalman/ua-parser-js","homepage":"https://uaparser.js.org/","licenseType":"AGPL-3.0","license":"\\n        GNU AFFERO GENERAL PUBLIC LICENSE\\n\\n        Version 3, 19 November 2007\\n\\nCopyright (C) 2007 Free Software Foundation, Inc. <https://fsf.org/>\\nEveryone is permitted to copy and distribute verbatim copies\\nof this license document, but changing it is not allowed.\\n\\n             Preamble\\n\\nThe GNU Affero General Public License is a free, copyleft license for\\nsoftware and other kinds of works, specifically designed to ensure\\ncooperation with the community in the case of network server software.\\n\\nThe licenses for most software and other practical works are designed\\nto take away your freedom to share and change the works.  By contrast,\\nour General Public Licenses are intended to guarantee your freedom to\\nshare and change all versions of a program--to make sure it remains free\\nsoftware for all its users.\\n\\nWhen we speak of free software, we are referring to freedom, not\\nprice.  Our General Public Licenses are designed to make sure that you\\nhave the freedom to distribute copies of free software (and charge for\\nthem if you wish), that you receive source code or can get it if you\\nwant it, that you can change the software or use pieces of it in new\\nfree programs, and that you know you can do these things.\\n\\nDevelopers that use our General Public Licenses protect your rights\\nwith two steps: (1) assert copyright on the software, and (2) offer\\nyou this License which gives you legal permission to copy, distribute\\nand/or modify the software.\\n\\nA secondary benefit of defending all users' freedom is that\\nimprovements made in alternate versions of the program, if they\\nreceive widespread use, become available for other developers to\\nincorporate.  Many developers of free software are heartened and\\nencouraged by the resulting cooperation.  However, in the case of\\nsoftware used on network servers, this result may fail to come about.\\nThe GNU General Public License permits making a modified version and\\nletting the public access it on a server without ever releasing its\\nsource code to the public.\\n\\nThe GNU Affero General Public License is designed specifically to\\nensure that, in such cases, the modified source code becomes available\\nto the community.  It requires the operator of a network server to\\nprovide the source code of the modified version running there to the\\nusers of that server.  Therefore, public use of a modified version, on\\na publicly accessible server, gives the public access to the source\\ncode of the modified version.\\n\\nAn older license, called the Affero General Public License and\\npublished by Affero, was designed to accomplish similar goals.  This is\\na different license, not a version of the Affero GPL, but Affero has\\nreleased a new version of the Affero GPL which permits relicensing under\\nthis license.\\n\\nThe precise terms and conditions for copying, distribution and\\nmodification follow.\\n\\n        TERMS AND CONDITIONS\\n\\n0. Definitions.\\n\\n\\"This License\\" refers to version 3 of the GNU Affero General Public License.\\n\\n\\"Copyright\\" also means copyright-like laws that apply to other kinds of\\nworks, such as semiconductor masks.\\n\\n\\"The Program\\" refers to any copyrightable work licensed under this\\nLicense.  Each licensee is addressed as \\"you\\".  \\"Licensees\\" and\\n\\"recipients\\" may be individuals or organizations.\\n\\nTo \\"modify\\" a work means to copy from or adapt all or part of the work\\nin a fashion requiring copyright permission, other than the making of an\\nexact copy.  The resulting work is called a \\"modified version\\" of the\\nearlier work or a work \\"based on\\" the earlier work.\\n\\nA \\"covered work\\" means either the unmodified Program or a work based\\non the Program.\\n\\nTo \\"propagate\\" a work means to do anything with it that, without\\npermission, would make you directly or secondarily liable for\\ninfringement under applicable copyright law, except executing it on a\\ncomputer or modifying a private copy.  Propagation includes copying,\\ndistribution (with or without modification), making available to the\\npublic, and in some countries other activities as well.\\n\\nTo \\"convey\\" a work means any kind of propagation that enables other\\nparties to make or receive copies.  Mere interaction with a user through\\na computer network, with no transfer of a copy, is not conveying.\\n\\nAn interactive user interface displays \\"Appropriate Legal Notices\\"\\nto the extent that it includes a convenient and prominently visible\\nfeature that (1) displays an appropriate copyright notice, and (2)\\ntells the user that there is no warranty for the work (except to the\\nextent that warranties are provided), that licensees may convey the\\nwork under this License, and how to view a copy of this License.  If\\nthe interface presents a list of user commands or options, such as a\\nmenu, a prominent item in the list meets this criterion.\\n\\n1. Source Code.\\n\\nThe \\"source code\\" for a work means the preferred form of the work\\nfor making modifications to it.  \\"Object code\\" means any non-source\\nform of a work.\\n\\nA \\"Standard Interface\\" means an interface that either is an official\\nstandard defined by a recognized standards body, or, in the case of\\ninterfaces specified for a particular programming language, one that\\nis widely used among developers working in that language.\\n\\nThe \\"System Libraries\\" of an executable work include anything, other\\nthan the work as a whole, that (a) is included in the normal form of\\npackaging a Major Component, but which is not part of that Major\\nComponent, and (b) serves only to enable use of the work with that\\nMajor Component, or to implement a Standard Interface for which an\\nimplementation is available to the public in source code form.  A\\n\\"Major Component\\", in this context, means a major essential component\\n(kernel, window system, and so on) of the specific operating system\\n(if any) on which the executable work runs, or a compiler used to\\nproduce the work, or an object code interpreter used to run it.\\n\\nThe \\"Corresponding Source\\" for a work in object code form means all\\nthe source code needed to generate, install, and (for an executable\\nwork) run the object code and to modify the work, including scripts to\\ncontrol those activities.  However, it does not include the work's\\nSystem Libraries, or general-purpose tools or generally available free\\nprograms which are used unmodified in performing those activities but\\nwhich are not part of the work.  For example, Corresponding Source\\nincludes interface definition files associated with source files for\\nthe work, and the source code for shared libraries and dynamically\\nlinked subprograms that the work is specifically designed to require,\\nsuch as by intimate data communication or control flow between those\\nsubprograms and other parts of the work.\\n\\nThe Corresponding Source need not include anything that users\\ncan regenerate automatically from other parts of the Corresponding\\nSource.\\n\\nThe Corresponding Source for a work in source code form is that\\nsame work.\\n\\n2. Basic Permissions.\\n\\nAll rights granted under this License are granted for the term of\\ncopyright on the Program, and are irrevocable provided the stated\\nconditions are met.  This License explicitly affirms your unlimited\\npermission to run the unmodified Program.  The output from running a\\ncovered work is covered by this License only if the output, given its\\ncontent, constitutes a covered work.  This License acknowledges your\\nrights of fair use or other equivalent, as provided by copyright law.\\n\\nYou may make, run and propagate covered works that you do not\\nconvey, without conditions so long as your license otherwise remains\\nin force.  You may convey covered works to others for the sole purpose\\nof having them make modifications exclusively for you, or provide you\\nwith facilities for running those works, provided that you comply with\\nthe terms of this License in conveying all material for which you do\\nnot control copyright.  Those thus making or running the covered works\\nfor you must do so exclusively on your behalf, under your direction\\nand control, on terms that prohibit them from making any copies of\\nyour copyrighted material outside their relationship with you.\\n\\nConveying under any other circumstances is permitted solely under\\nthe conditions stated below.  Sublicensing is not allowed; section 10\\nmakes it unnecessary.\\n\\n3. Protecting Users' Legal Rights From Anti-Circumvention Law.\\n\\nNo covered work shall be deemed part of an effective technological\\nmeasure under any applicable law fulfilling obligations under article\\n11 of the WIPO copyright treaty adopted on 20 December 1996, or\\nsimilar laws prohibiting or restricting circumvention of such\\nmeasures.\\n\\nWhen you convey a covered work, you waive any legal power to forbid\\ncircumvention of technological measures to the extent such circumvention\\nis effected by exercising rights under this License with respect to\\nthe covered work, and you disclaim any intention to limit operation or\\nmodification of the work as a means of enforcing, against the work's\\nusers, your or third parties' legal rights to forbid circumvention of\\ntechnological measures.\\n\\n4. Conveying Verbatim Copies.\\n\\nYou may convey verbatim copies of the Program's source code as you\\nreceive it, in any medium, provided that you conspicuously and\\nappropriately publish on each copy an appropriate copyright notice;\\nkeep intact all notices stating that this License and any\\nnon-permissive terms added in accord with section 7 apply to the code;\\nkeep intact all notices of the absence of any warranty; and give all\\nrecipients a copy of this License along with the Program.\\n\\nYou may charge any price or no price for each copy that you convey,\\nand you may offer support or warranty protection for a fee.\\n\\n5. Conveying Modified Source Versions.\\n\\nYou may convey a work based on the Program, or the modifications to\\nproduce it from the Program, in the form of source code under the\\nterms of section 4, provided that you also meet all of these conditions:\\n\\na) The work must carry prominent notices stating that you modified\\nit, and giving a relevant date.\\n\\nb) The work must carry prominent notices stating that it is\\nreleased under this License and any conditions added under section\\n7.  This requirement modifies the requirement in section 4 to\\n\\"keep intact all notices\\".\\n\\nc) You must license the entire work, as a whole, under this\\nLicense to anyone who comes into possession of a copy.  This\\nLicense will therefore apply, along with any applicable section 7\\nadditional terms, to the whole of the work, and all its parts,\\nregardless of how they are packaged.  This License gives no\\npermission to license the work in any other way, but it does not\\ninvalidate such permission if you have separately received it.\\n\\nd) If the work has interactive user interfaces, each must display\\nAppropriate Legal Notices; however, if the Program has interactive\\ninterfaces that do not display Appropriate Legal Notices, your\\nwork need not make them do so.\\n\\nA compilation of a covered work with other separate and independent\\nworks, which are not by their nature extensions of the covered work,\\nand which are not combined with it such as to form a larger program,\\nin or on a volume of a storage or distribution medium, is called an\\n\\"aggregate\\" if the compilation and its resulting copyright are not\\nused to limit the access or legal rights of the compilation's users\\nbeyond what the individual works permit.  Inclusion of a covered work\\nin an aggregate does not cause this License to apply to the other\\nparts of the aggregate.\\n\\n6. Conveying Non-Source Forms.\\n\\nYou may convey a covered work in object code form under the terms\\nof sections 4 and 5, provided that you also convey the\\nmachine-readable Corresponding Source under the terms of this License,\\nin one of these ways:\\n\\na) Convey the object code in, or embodied in, a physical product\\n(including a physical distribution medium), accompanied by the\\nCorresponding Source fixed on a durable physical medium\\ncustomarily used for software interchange.\\n\\nb) Convey the object code in, or embodied in, a physical product\\n(including a physical distribution medium), accompanied by a\\nwritten offer, valid for at least three years and valid for as\\nlong as you offer spare parts or customer support for that product\\nmodel, to give anyone who possesses the object code either (1) a\\ncopy of the Corresponding Source for all the software in the\\nproduct that is covered by this License, on a durable physical\\nmedium customarily used for software interchange, for a price no\\nmore than your reasonable cost of physically performing this\\nconveying of source, or (2) access to copy the\\nCorresponding Source from a network server at no charge.\\n\\nc) Convey individual copies of the object code with a copy of the\\nwritten offer to provide the Corresponding Source.  This\\nalternative is allowed only occasionally and noncommercially, and\\nonly if you received the object code with such an offer, in accord\\nwith subsection 6b.\\n\\nd) Convey the object code by offering access from a designated\\nplace (gratis or for a charge), and offer equivalent access to the\\nCorresponding Source in the same way through the same place at no\\nfurther charge.  You need not require recipients to copy the\\nCorresponding Source along with the object code.  If the place to\\ncopy the object code is a network server, the Corresponding Source\\nmay be on a different server (operated by you or a third party)\\nthat supports equivalent copying facilities, provided you maintain\\nclear directions next to the object code saying where to find the\\nCorresponding Source.  Regardless of what server hosts the\\nCorresponding Source, you remain obligated to ensure that it is\\navailable for as long as needed to satisfy these requirements.\\n\\ne) Convey the object code using peer-to-peer transmission, provided\\nyou inform other peers where the object code and Corresponding\\nSource of the work are being offered to the general public at no\\ncharge under subsection 6d.\\n\\nA separable portion of the object code, whose source code is excluded\\nfrom the Corresponding Source as a System Library, need not be\\nincluded in conveying the object code work.\\n\\nA \\"User Product\\" is either (1) a \\"consumer product\\", which means any\\ntangible personal property which is normally used for personal, family,\\nor household purposes, or (2) anything designed or sold for incorporation\\ninto a dwelling.  In determining whether a product is a consumer product,\\ndoubtful cases shall be resolved in favor of coverage.  For a particular\\nproduct received by a particular user, \\"normally used\\" refers to a\\ntypical or common use of that class of product, regardless of the status\\nof the particular user or of the way in which the particular user\\nactually uses, or expects or is expected to use, the product.  A product\\nis a consumer product regardless of whether the product has substantial\\ncommercial, industrial or non-consumer uses, unless such uses represent\\nthe only significant mode of use of the product.\\n\\n\\"Installation Information\\" for a User Product means any methods,\\nprocedures, authorization keys, or other information required to install\\nand execute modified versions of a covered work in that User Product from\\na modified version of its Corresponding Source.  The information must\\nsuffice to ensure that the continued functioning of the modified object\\ncode is in no case prevented or interfered with solely because\\nmodification has been made.\\n\\nIf you convey an object code work under this section in, or with, or\\nspecifically for use in, a User Product, and the conveying occurs as\\npart of a transaction in which the right of possession and use of the\\nUser Product is transferred to the recipient in perpetuity or for a\\nfixed term (regardless of how the transaction is characterized), the\\nCorresponding Source conveyed under this section must be accompanied\\nby the Installation Information.  But this requirement does not apply\\nif neither you nor any third party retains the ability to install\\nmodified object code on the User Product (for example, the work has\\nbeen installed in ROM).\\n\\nThe requirement to provide Installation Information does not include a\\nrequirement to continue to provide support service, warranty, or updates\\nfor a work that has been modified or installed by the recipient, or for\\nthe User Product in which it has been modified or installed.  Access to a\\nnetwork may be denied when the modification itself materially and\\nadversely affects the operation of the network or violates the rules and\\nprotocols for communication across the network.\\n\\nCorresponding Source conveyed, and Installation Information provided,\\nin accord with this section must be in a format that is publicly\\ndocumented (and with an implementation available to the public in\\nsource code form), and must require no special password or key for\\nunpacking, reading or copying.\\n\\n7. Additional Terms.\\n\\n\\"Additional permissions\\" are terms that supplement the terms of this\\nLicense by making exceptions from one or more of its conditions.\\nAdditional permissions that are applicable to the entire Program shall\\nbe treated as though they were included in this License, to the extent\\nthat they are valid under applicable law.  If additional permissions\\napply only to part of the Program, that part may be used separately\\nunder those permissions, but the entire Program remains governed by\\nthis License without regard to the additional permissions.\\n\\nWhen you convey a copy of a covered work, you may at your option\\nremove any additional permissions from that copy, or from any part of\\nit.  (Additional permissions may be written to require their own\\nremoval in certain cases when you modify the work.)  You may place\\nadditional permissions on material, added by you to a covered work,\\nfor which you have or can give appropriate copyright permission.\\n\\nNotwithstanding any other provision of this License, for material you\\nadd to a covered work, you may (if authorized by the copyright holders of\\nthat material) supplement the terms of this License with terms:\\n\\na) Disclaiming warranty or limiting liability differently from the\\nterms of sections 15 and 16 of this License; or\\n\\nb) Requiring preservation of specified reasonable legal notices or\\nauthor attributions in that material or in the Appropriate Legal\\nNotices displayed by works containing it; or\\n\\nc) Prohibiting misrepresentation of the origin of that material, or\\nrequiring that modified versions of such material be marked in\\nreasonable ways as different from the original version; or\\n\\nd) Limiting the use for publicity purposes of names of licensors or\\nauthors of the material; or\\n\\ne) Declining to grant rights under trademark law for use of some\\ntrade names, trademarks, or service marks; or\\n\\nf) Requiring indemnification of licensors and authors of that\\nmaterial by anyone who conveys the material (or modified versions of\\nit) with contractual assumptions of liability to the recipient, for\\nany liability that these contractual assumptions directly impose on\\nthose licensors and authors.\\n\\nAll other non-permissive additional terms are considered \\"further\\nrestrictions\\" within the meaning of section 10.  If the Program as you\\nreceived it, or any part of it, contains a notice stating that it is\\ngoverned by this License along with a term that is a further\\nrestriction, you may remove that term.  If a license document contains\\na further restriction but permits relicensing or conveying under this\\nLicense, you may add to a covered work material governed by the terms\\nof that license document, provided that the further restriction does\\nnot survive such relicensing or conveying.\\n\\nIf you add terms to a covered work in accord with this section, you\\nmust place, in the relevant source files, a statement of the\\nadditional terms that apply to those files, or a notice indicating\\nwhere to find the applicable terms.\\n\\nAdditional terms, permissive or non-permissive, may be stated in the\\nform of a separately written license, or stated as exceptions;\\nthe above requirements apply either way.\\n\\n8. Termination.\\n\\nYou may not propagate or modify a covered work except as expressly\\nprovided under this License.  Any attempt otherwise to propagate or\\nmodify it is void, and will automatically terminate your rights under\\nthis License (including any patent licenses granted under the third\\nparagraph of section 11).\\n\\nHowever, if you cease all violation of this License, then your\\nlicense from a particular copyright holder is reinstated (a)\\nprovisionally, unless and until the copyright holder explicitly and\\nfinally terminates your license, and (b) permanently, if the copyright\\nholder fails to notify you of the violation by some reasonable means\\nprior to 60 days after the cessation.\\n\\nMoreover, your license from a particular copyright holder is\\nreinstated permanently if the copyright holder notifies you of the\\nviolation by some reasonable means, this is the first time you have\\nreceived notice of violation of this License (for any work) from that\\ncopyright holder, and you cure the violation prior to 30 days after\\nyour receipt of the notice.\\n\\nTermination of your rights under this section does not terminate the\\nlicenses of parties who have received copies or rights from you under\\nthis License.  If your rights have been terminated and not permanently\\nreinstated, you do not qualify to receive new licenses for the same\\nmaterial under section 10.\\n\\n9. Acceptance Not Required for Having Copies.\\n\\nYou are not required to accept this License in order to receive or\\nrun a copy of the Program.  Ancillary propagation of a covered work\\noccurring solely as a consequence of using peer-to-peer transmission\\nto receive a copy likewise does not require acceptance.  However,\\nnothing other than this License grants you permission to propagate or\\nmodify any covered work.  These actions infringe copyright if you do\\nnot accept this License.  Therefore, by modifying or propagating a\\ncovered work, you indicate your acceptance of this License to do so.\\n\\n10. Automatic Licensing of Downstream Recipients.\\n\\nEach time you convey a covered work, the recipient automatically\\nreceives a license from the original licensors, to run, modify and\\npropagate that work, subject to this License.  You are not responsible\\nfor enforcing compliance by third parties with this License.\\n\\nAn \\"entity transaction\\" is a transaction transferring control of an\\norganization, or substantially all assets of one, or subdividing an\\norganization, or merging organizations.  If propagation of a covered\\nwork results from an entity transaction, each party to that\\ntransaction who receives a copy of the work also receives whatever\\nlicenses to the work the party's predecessor in interest had or could\\ngive under the previous paragraph, plus a right to possession of the\\nCorresponding Source of the work from the predecessor in interest, if\\nthe predecessor has it or can get it with reasonable efforts.\\n\\nYou may not impose any further restrictions on the exercise of the\\nrights granted or affirmed under this License.  For example, you may\\nnot impose a license fee, royalty, or other charge for exercise of\\nrights granted under this License, and you may not initiate litigation\\n(including a cross-claim or counterclaim in a lawsuit) alleging that\\nany patent claim is infringed by making, using, selling, offering for\\nsale, or importing the Program or any portion of it.\\n\\n11. Patents.\\n\\nA \\"contributor\\" is a copyright holder who authorizes use under this\\nLicense of the Program or a work on which the Program is based.  The\\nwork thus licensed is called the contributor's \\"contributor version\\".\\n\\nA contributor's \\"essential patent claims\\" are all patent claims\\nowned or controlled by the contributor, whether already acquired or\\nhereafter acquired, that would be infringed by some manner, permitted\\nby this License, of making, using, or selling its contributor version,\\nbut do not include claims that would be infringed only as a\\nconsequence of further modification of the contributor version.  For\\npurposes of this definition, \\"control\\" includes the right to grant\\npatent sublicenses in a manner consistent with the requirements of\\nthis License.\\n\\nEach contributor grants you a non-exclusive, worldwide, royalty-free\\npatent license under the contributor's essential patent claims, to\\nmake, use, sell, offer for sale, import and otherwise run, modify and\\npropagate the contents of its contributor version.\\n\\nIn the following three paragraphs, a \\"patent license\\" is any express\\nagreement or commitment, however denominated, not to enforce a patent\\n(such as an express permission to practice a patent or covenant not to\\nsue for patent infringement).  To \\"grant\\" such a patent license to a\\nparty means to make such an agreement or commitment not to enforce a\\npatent against the party.\\n\\nIf you convey a covered work, knowingly relying on a patent license,\\nand the Corresponding Source of the work is not available for anyone\\nto copy, free of charge and under the terms of this License, through a\\npublicly available network server or other readily accessible means,\\nthen you must either (1) cause the Corresponding Source to be so\\navailable, or (2) arrange to deprive yourself of the benefit of the\\npatent license for this particular work, or (3) arrange, in a manner\\nconsistent with the requirements of this License, to extend the patent\\nlicense to downstream recipients.  \\"Knowingly relying\\" means you have\\nactual knowledge that, but for the patent license, your conveying the\\ncovered work in a country, or your recipient's use of the covered work\\nin a country, would infringe one or more identifiable patents in that\\ncountry that you have reason to believe are valid.\\n\\nIf, pursuant to or in connection with a single transaction or\\narrangement, you convey, or propagate by procuring conveyance of, a\\ncovered work, and grant a patent license to some of the parties\\nreceiving the covered work authorizing them to use, propagate, modify\\nor convey a specific copy of the covered work, then the patent license\\nyou grant is automatically extended to all recipients of the covered\\nwork and works based on it.\\n\\nA patent license is \\"discriminatory\\" if it does not include within\\nthe scope of its coverage, prohibits the exercise of, or is\\nconditioned on the non-exercise of one or more of the rights that are\\nspecifically granted under this License.  You may not convey a covered\\nwork if you are a party to an arrangement with a third party that is\\nin the business of distributing software, under which you make payment\\nto the third party based on the extent of your activity of conveying\\nthe work, and under which the third party grants, to any of the\\nparties who would receive the covered work from you, a discriminatory\\npatent license (a) in connection with copies of the covered work\\nconveyed by you (or copies made from those copies), or (b) primarily\\nfor and in connection with specific products or compilations that\\ncontain the covered work, unless you entered into that arrangement,\\nor that patent license was granted, prior to 28 March 2007.\\n\\nNothing in this License shall be construed as excluding or limiting\\nany implied license or other defenses to infringement that may\\notherwise be available to you under applicable patent law.\\n\\n12. No Surrender of Others' Freedom.\\n\\nIf conditions are imposed on you (whether by court order, agreement or\\notherwise) that contradict the conditions of this License, they do not\\nexcuse you from the conditions of this License.  If you cannot convey a\\ncovered work so as to satisfy simultaneously your obligations under this\\nLicense and any other pertinent obligations, then as a consequence you may\\nnot convey it at all.  For example, if you agree to terms that obligate you\\nto collect a royalty for further conveying from those to whom you convey\\nthe Program, the only way you could satisfy both those terms and this\\nLicense would be to refrain entirely from conveying the Program.\\n\\n13. Remote Network Interaction; Use with the GNU General Public License.\\n\\nNotwithstanding any other provision of this License, if you modify the\\nProgram, your modified version must prominently offer all users\\ninteracting with it remotely through a computer network (if your version\\nsupports such interaction) an opportunity to receive the Corresponding\\nSource of your version by providing access to the Corresponding Source\\nfrom a network server at no charge, through some standard or customary\\nmeans of facilitating copying of software.  This Corresponding Source\\nshall include the Corresponding Source for any work covered by version 3\\nof the GNU General Public License that is incorporated pursuant to the\\nfollowing paragraph.\\n\\nNotwithstanding any other provision of this License, you have\\npermission to link or combine any covered work with a work licensed\\nunder version 3 of the GNU General Public License into a single\\ncombined work, and to convey the resulting work.  The terms of this\\nLicense will continue to apply to the part which is the covered work,\\nbut the work with which it is combined will remain governed by version\\n3 of the GNU General Public License.\\n\\n14. Revised Versions of this License.\\n\\nThe Free Software Foundation may publish revised and/or new versions of\\nthe GNU Affero General Public License from time to time.  Such new versions\\nwill be similar in spirit to the present version, but may differ in detail to\\naddress new problems or concerns.\\n\\nEach version is given a distinguishing version number.  If the\\nProgram specifies that a certain numbered version of the GNU Affero General\\nPublic License \\"or any later version\\" applies to it, you have the\\noption of following the terms and conditions either of that numbered\\nversion or of any later version published by the Free Software\\nFoundation.  If the Program does not specify a version number of the\\nGNU Affero General Public License, you may choose any version ever published\\nby the Free Software Foundation.\\n\\nIf the Program specifies that a proxy can decide which future\\nversions of the GNU Affero General Public License can be used, that proxy's\\npublic statement of acceptance of a version permanently authorizes you\\nto choose that version for the Program.\\n\\nLater license versions may give you additional or different\\npermissions.  However, no additional obligations are imposed on any\\nauthor or copyright holder as a result of your choosing to follow a\\nlater version.\\n\\n15. Disclaimer of Warranty.\\n\\nTHERE IS NO WARRANTY FOR THE PROGRAM, TO THE EXTENT PERMITTED BY\\nAPPLICABLE LAW.  EXCEPT WHEN OTHERWISE STATED IN WRITING THE COPYRIGHT\\nHOLDERS AND/OR OTHER PARTIES PROVIDE THE PROGRAM \\"AS IS\\" WITHOUT WARRANTY\\nOF ANY KIND, EITHER EXPRESSED OR IMPLIED, INCLUDING, BUT NOT LIMITED TO,\\nTHE IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR\\nPURPOSE.  THE ENTIRE RISK AS TO THE QUALITY AND PERFORMANCE OF THE PROGRAM\\nIS WITH YOU.  SHOULD THE PROGRAM PROVE DEFECTIVE, YOU ASSUME THE COST OF\\nALL NECESSARY SERVICING, REPAIR OR CORRECTION.\\n\\n16. Limitation of Liability.\\n\\nIN NO EVENT UNLESS REQUIRED BY APPLICABLE LAW OR AGREED TO IN WRITING\\nWILL ANY COPYRIGHT HOLDER, OR ANY OTHER PARTY WHO MODIFIES AND/OR CONVEYS\\nTHE PROGRAM AS PERMITTED ABOVE, BE LIABLE TO YOU FOR DAMAGES, INCLUDING ANY\\nGENERAL, SPECIAL, INCIDENTAL OR CONSEQUENTIAL DAMAGES ARISING OUT OF THE\\nUSE OR INABILITY TO USE THE PROGRAM (INCLUDING BUT NOT LIMITED TO LOSS OF\\nDATA OR DATA BEING RENDERED INACCURATE OR LOSSES SUSTAINED BY YOU OR THIRD\\nPARTIES OR A FAILURE OF THE PROGRAM TO OPERATE WITH ANY OTHER PROGRAMS),\\nEVEN IF SUCH HOLDER OR OTHER PARTY HAS BEEN ADVISED OF THE POSSIBILITY OF\\nSUCH DAMAGES.\\n\\n17. Interpretation of Sections 15 and 16.\\n\\nIf the disclaimer of warranty and limitation of liability provided\\nabove cannot be given local legal effect according to their terms,\\nreviewing courts shall apply local law that most closely approximates\\nan absolute waiver of all civil liability in connection with the\\nProgram, unless a warranty or assumption of liability accompanies a\\ncopy of the Program in return for a fee.\\n\\n      END OF TERMS AND CONDITIONS\\n\\nHow to Apply These Terms to Your New Programs\\n\\nIf you develop a new program, and you want it to be of the greatest\\npossible use to the public, the best way to achieve this is to make it\\nfree software which everyone can redistribute and change under these terms.\\n\\nTo do so, attach the following notices to the program.  It is safest\\nto attach them to the start of each source file to most effectively\\nstate the exclusion of warranty; and each file should have at least\\nthe \\"copyright\\" line and a pointer to where the full notice is found.\\n\\n<one line to give the program's name and a brief idea of what it does.>\\nCopyright (C) <year>  <name of author>\\n\\nThis program is free software: you can redistribute it and/or modify\\nit under the terms of the GNU Affero General Public License as published by\\nthe Free Software Foundation, either version 3 of the License, or\\n(at your option) any later version.\\n\\nThis program is distributed in the hope that it will be useful,\\nbut WITHOUT ANY WARRANTY; without even the implied warranty of\\nMERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the\\nGNU Affero General Public License for more details.\\n\\nYou should have received a copy of the GNU Affero General Public License\\nalong with this program.  If not, see <https://www.gnu.org/licenses/>.\\n\\nAlso add information on how to contact you by electronic and paper mail.\\n\\nIf your software can interact with users remotely through a computer\\nnetwork, you should also make sure that it provides a way for users to\\nget its source.  For example, if your program is a web application, its\\ninterface could display a \\"Source\\" link that leads users to an archive\\nof the code.  There are many ways you could offer source, and different\\nsolutions will be better for different programs; see section 13 for the\\nspecific requirements.\\n\\nYou should also get your employer (if you work as a programmer) or school,\\nif any, to sign a \\"copyright disclaimer\\" for the program, if necessary.\\nFor more information on this, and how to apply and follow the GNU AGPL, see\\n<https://www.gnu.org/licenses/>."},{"id":"gcoord","name":"gcoord","description":"A coordinates converter","url":"https://github.com/hujiulong/gcoord","licenseType":"MIT","license":"\\n\\t\\tMIT License\\n\\n\\t\\tCopyright (c) 2018-present, Jiulong Hu\\n\\n\\t\\tPermission is hereby granted, free of charge, to any person obtaining a copy\\n\\t\\tof this software and associated documentation files (the \\"Software\\"), to deal\\n\\t\\tin the Software without restriction, including without limitation the rights\\n\\t\\tto use, copy, modify, merge, publish, distribute, sublicense, and/or sell\\n\\t\\tcopies of the Software, and to permit persons to whom the Software is\\n\\t\\tfurnished to do so, subject to the following conditions:\\n\\n\\t\\tThe above copyright notice and this permission notice shall be included in all\\n\\t\\tcopies or substantial portions of the Software.\\n\\n\\t\\tTHE SOFTWARE IS PROVIDED \\"AS IS\\", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR\\n\\t\\tIMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,\\n\\t\\tFITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE\\n\\t\\tAUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER\\n\\t\\tLIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,\\n\\t\\tOUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE\\n\\t\\tSOFTWARE."},{"id":"localforage","name":"localForage","description":"A fast and simple storage library for JavaScript.","url":"https://github.com/localForage/localForage","homepage":"https://localforage.github.io/localForage/","licenseType":"Apache-2.0","license":"\\n        Apache License\\n\\n        Version 2.0, January 2004\\n\\n     http://www.apache.org/licenses/\\n\\nTERMS AND CONDITIONS FOR USE, REPRODUCTION, AND DISTRIBUTION\\n\\n1. Definitions.\\n\\n\\"License\\" shall mean the terms and conditions for use, reproduction,\\nand distribution as defined by Sections 1 through 9 of this document.\\n\\n\\"Licensor\\" shall mean the copyright owner or entity authorized by\\nthe copyright owner that is granting the License.\\n\\n\\"Legal Entity\\" shall mean the union of the acting entity and all\\nother entities that control, are controlled by, or are under common\\ncontrol with that entity. For the purposes of this definition,\\n\\"control\\" means (i) the power, direct or indirect, to cause the\\ndirection or management of such entity, whether by contract or\\notherwise, or (ii) ownership of fifty percent (50%) or more of the\\noutstanding shares, or (iii) beneficial ownership of such entity.\\n\\n\\"You\\" (or \\"Your\\") shall mean an individual or Legal Entity\\nexercising permissions granted by this License.\\n\\n\\"Source\\" form shall mean the preferred form for making modifications,\\nincluding but not limited to software source code, documentation\\nsource, and configuration files.\\n\\n\\"Object\\" form shall mean any form resulting from mechanical\\ntransformation or translation of a Source form, including but\\nnot limited to compiled object code, generated documentation,\\nand conversions to other media types.\\n\\n\\"Work\\" shall mean the work of authorship, whether in Source or\\nObject form, made available under the License, as indicated by a\\ncopyright notice that is included in or attached to the work\\n(an example is provided in the Appendix below).\\n\\n\\"Derivative Works\\" shall mean any work, whether in Source or Object\\nform, that is based on (or derived from) the Work and for which the\\neditorial revisions, annotations, elaborations, or other modifications\\nrepresent, as a whole, an original work of authorship. For the purposes\\nof this License, Derivative Works shall not include works that remain\\nseparable from, or merely link (or bind by name) to the interfaces of,\\nthe Work and Derivative Works thereof.\\n\\n\\"Contribution\\" shall mean any work of authorship, including\\nthe original version of the Work and any modifications or additions\\nto that Work or Derivative Works thereof, that is intentionally\\nsubmitted to Licensor for inclusion in the Work by the copyright owner\\nor by an individual or Legal Entity authorized to submit on behalf of\\nthe copyright owner. For the purposes of this definition, \\"submitted\\"\\nmeans any form of electronic, verbal, or written communication sent\\nto the Licensor or its representatives, including but not limited to\\ncommunication on electronic mailing lists, source code control systems,\\nand issue tracking systems that are managed by, or on behalf of, the\\nLicensor for the purpose of discussing and improving the Work, but\\nexcluding communication that is conspicuously marked or otherwise\\ndesignated in writing by the copyright owner as \\"Not a Contribution.\\"\\n\\n\\"Contributor\\" shall mean Licensor and any individual or Legal Entity\\non behalf of whom a Contribution has been received by Licensor and\\nsubsequently incorporated within the Work.\\n\\n2. Grant of Copyright License. Subject to the terms and conditions of\\nthis License, each Contributor hereby grants to You a perpetual,\\nworldwide, non-exclusive, no-charge, royalty-free, irrevocable\\ncopyright license to reproduce, prepare Derivative Works of,\\npublicly display, publicly perform, sublicense, and distribute the\\nWork and such Derivative Works in Source or Object form.\\n\\n3. Grant of Patent License. Subject to the terms and conditions of\\nthis License, each Contributor hereby grants to You a perpetual,\\nworldwide, non-exclusive, no-charge, royalty-free, irrevocable\\n(except as stated in this section) patent license to make, have made,\\nuse, offer to sell, sell, import, and otherwise transfer the Work,\\nwhere such license applies only to those patent claims licensable\\nby such Contributor that are necessarily infringed by their\\nContribution(s) alone or by combination of their Contribution(s)\\nwith the Work to which such Contribution(s) was submitted. If You\\ninstitute patent litigation against any entity (including a\\ncross-claim or counterclaim in a lawsuit) alleging that the Work\\nor a Contribution incorporated within the Work constitutes direct\\nor contributory patent infringement, then any patent licenses\\ngranted to You under this License for that Work shall terminate\\nas of the date such litigation is filed.\\n\\n4. Redistribution. You may reproduce and distribute copies of the\\nWork or Derivative Works thereof in any medium, with or without\\nmodifications, and in Source or Object form, provided that You\\nmeet the following conditions:\\n\\n(a) You must give any other recipients of the Work or\\nDerivative Works a copy of this License; and\\n\\n(b) You must cause any modified files to carry prominent notices\\nstating that You changed the files; and\\n\\n(c) You must retain, in the Source form of any Derivative Works\\nthat You distribute, all copyright, patent, trademark, and\\nattribution notices from the Source form of the Work,\\nexcluding those notices that do not pertain to any part of\\nthe Derivative Works; and\\n\\n(d) If the Work includes a \\"NOTICE\\" text file as part of its\\ndistribution, then any Derivative Works that You distribute must\\ninclude a readable copy of the attribution notices contained\\nwithin such NOTICE file, excluding those notices that do not\\npertain to any part of the Derivative Works, in at least one\\nof the following places: within a NOTICE text file distributed\\nas part of the Derivative Works; within the Source form or\\ndocumentation, if provided along with the Derivative Works; or,\\nwithin a display generated by the Derivative Works, if and\\nwherever such third-party notices normally appear. The contents\\nof the NOTICE file are for informational purposes only and\\ndo not modify the License. You may add Your own attribution\\nnotices within Derivative Works that You distribute, alongside\\nor as an addendum to the NOTICE text from the Work, provided\\nthat such additional attribution notices cannot be construed\\nas modifying the License.\\n\\nYou may add Your own copyright statement to Your modifications and\\nmay provide additional or different license terms and conditions\\nfor use, reproduction, or distribution of Your modifications, or\\nfor any such Derivative Works as a whole, provided Your use,\\nreproduction, and distribution of the Work otherwise complies with\\nthe conditions stated in this License.\\n\\n5. Submission of Contributions. Unless You explicitly state otherwise,\\nany Contribution intentionally submitted for inclusion in the Work\\nby You to the Licensor shall be under the terms and conditions of\\nthis License, without any additional terms or conditions.\\nNotwithstanding the above, nothing herein shall supersede or modify\\nthe terms of any separate license agreement you may have executed\\nwith Licensor regarding such Contributions.\\n\\n6. Trademarks. This License does not grant permission to use the trade\\nnames, trademarks, service marks, or product names of the Licensor,\\nexcept as required for reasonable and customary use in describing the\\norigin of the Work and reproducing the content of the NOTICE file.\\n\\n7. Disclaimer of Warranty. Unless required by applicable law or\\nagreed to in writing, Licensor provides the Work (and each\\nContributor provides its Contributions) on an \\"AS IS\\" BASIS,\\nWITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or\\nimplied, including, without limitation, any warranties or conditions\\nof TITLE, NON-INFRINGEMENT, MERCHANTABILITY, or FITNESS FOR A\\nPARTICULAR PURPOSE. You are solely responsible for determining the\\nappropriateness of using or redistributing the Work and assume any\\nrisks associated with Your exercise of permissions under this License.\\n\\n8. Limitation of Liability. In no event and under no legal theory,\\nwhether in tort (including negligence), contract, or otherwise,\\nunless required by applicable law (such as deliberate and grossly\\nnegligent acts) or agreed to in writing, shall any Contributor be\\nliable to You for damages, including any direct, indirect, special,\\nincidental, or consequential damages of any character arising as a\\nresult of this License or out of the use or inability to use the\\nWork (including but not limited to damages for loss of goodwill,\\nwork stoppage, computer failure or malfunction, or any and all\\nother commercial damages or losses), even if such Contributor\\nhas been advised of the possibility of such damages.\\n\\n9. Accepting Warranty or Additional Liability. While redistributing\\nthe Work or Derivative Works thereof, You may choose to offer,\\nand charge a fee for, acceptance of support, warranty, indemnity,\\nor other liability obligations and/or rights consistent with this\\nLicense. However, in accepting such obligations, You may act only\\non Your own behalf and on Your sole responsibility, not on behalf\\nof any other Contributor, and only if You agree to indemnify,\\ndefend, and hold each Contributor harmless for any liability\\nincurred by, or claims asserted against, such Contributor by reason\\nof your accepting any such warranty or additional liability.\\n\\nEND OF TERMS AND CONDITIONS\\n\\nAPPENDIX: How to apply the Apache License to your work.\\n\\nTo apply the Apache License to your work, attach the following\\nboilerplate notice, with the fields enclosed by brackets \\"{}\\"\\nreplaced with your own identifying information. (Don't include\\nthe brackets!)  The text should be enclosed in the appropriate\\ncomment syntax for the file format. We also recommend that a\\nfile or class name and description of purpose be included on the\\nsame \\"printed page\\" as the copyright notice for easier\\nidentification within third-party archives.\\n\\nCopyright 2014 Mozilla\\n\\nLicensed under the Apache License, Version 2.0 (the \\"License\\");\\nyou may not use this file except in compliance with the License.\\nYou may obtain a copy of the License at\\n\\nhttp://www.apache.org/licenses/LICENSE-2.0\\n\\nUnless required by applicable law or agreed to in writing, software\\ndistributed under the License is distributed on an \\"AS IS\\" BASIS,\\nWITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.\\nSee the License for the specific language governing permissions and\\nlimitations under the License."},{"id":"lodash-es","name":"Lodash","description":"A modern JavaScript utility library delivering modularity, performance, & extras.","license":"Copyright OpenJS Foundation and other contributors <https://openjsf.org/>\\n\\nBased on Underscore.js, copyright Jeremy Ashkenas,\\nDocumentCloud and Investigative Reporters & Editors <http://underscorejs.org/>\\n\\nThis software consists of voluntary contributions made by many\\nindividuals. For exact contribution history, see the revision history\\navailable at https://github.com/lodash/lodash\\n\\nThe following license applies to all parts of this software except as\\ndocumented below:\\n\\n====\\n\\nPermission is hereby granted, free of charge, to any person obtaining\\na copy of this software and associated documentation files (the\\n\\"Software\\"), to deal in the Software without restriction, including\\nwithout limitation the rights to use, copy, modify, merge, publish,\\ndistribute, sublicense, and/or sell copies of the Software, and to\\npermit persons to whom the Software is furnished to do so, subject to\\nthe following conditions:\\n\\nThe above copyright notice and this permission notice shall be\\nincluded in all copies or substantial portions of the Software.\\n\\nTHE SOFTWARE IS PROVIDED \\"AS IS\\", WITHOUT WARRANTY OF ANY KIND,\\nEXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF\\nMERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND\\nNONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE\\nLIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION\\nOF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION\\nWITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.\\n\\n====\\n\\nCopyright and related rights for sample code are waived via CC0. Sample\\ncode is defined as all source code displayed within the prose of the\\ndocumentation.\\n\\nCC0: http://creativecommons.org/publicdomain/zero/1.0/\\n\\n====\\n\\nFiles located in the node_modules and vendor directories are externally\\nmaintained libraries used by this software which have their own\\nlicenses; we recommend you read them, as their terms may differ from the\\nterms above.","licenseType":"MIT","url":"https://github.com/lodash/lodash","homepage":"https://lodash.com/"},{"id":"terradraw","name":"Terradraw","description":"A library for drawing on maps that supports Mapbox, MapLibre, Google Maps, OpenLayers and Leaflet out the box.","license":"Copyright 2022 James Milner\\n\\nPermission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the \\"Software\\"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:\\n\\nThe above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.\\n\\nTHE SOFTWARE IS PROVIDED \\"AS IS\\", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.","licenseType":"MIT","url":"https://github.com/JamesLMilner/terra-draw","homepage":"https://terradraw.io/"},{"id":"vue-i18n","name":"Vue I18n","description":"Internationalization plugin for Vue.js","license":"The MIT License (MIT)\\n\\nCopyright (c) 2016 kazuya kawaguchi\\n\\nPermission is hereby granted, free of charge, to any person obtaining a copy of\\nthis software and associated documentation files (the \\"Software\\"), to deal in\\nthe Software without restriction, including without limitation the rights to\\nuse, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of\\nthe Software, and to permit persons to whom the Software is furnished to do so,\\nsubject to the following conditions:\\n\\nThe above copyright notice and this permission notice shall be included in all\\ncopies or substantial portions of the Software.\\n\\nTHE SOFTWARE IS PROVIDED \\"AS IS\\", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR\\nIMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS\\nFOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR\\nCOPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER\\nIN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN\\nCONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.","licenseType":"MIT","url":"https://github.com/intlify/vue-i18n","homepage":"https://kazupon.github.io/vue-i18n/"},{"id":"vue-markdown-render","name":"Vue Markdown Render","description":"A simple markdown parser for Vue using markdown-it.","license":"MIT License\\n\\nCopyright (c) 2023 cloudacy OG\\n\\nPermission is hereby granted, free of charge, to any person obtaining a copy\\nof this software and associated documentation files (the \\"Software\\"), to deal\\nin the Software without restriction, including without limitation the rights\\nto use, copy, modify, merge, publish, distribute, sublicense, and/or sell\\ncopies of the Software, and to permit persons to whom the Software is\\nfurnished to do so, subject to the following conditions:\\n\\nThe above copyright notice and this permission notice shall be included in all\\ncopies or substantial portions of the Software.\\n\\nTHE SOFTWARE IS PROVIDED \\"AS IS\\", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR\\nIMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,\\nFITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE\\nAUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER\\nLIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,\\nOUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE\\nSOFTWARE.","licenseType":"MIT","url":"https://github.com/cloudacy/vue-markdown-render"},{"id":"proj4rs","name":"Proj4rs","description":"Rust adaptation of Proj4.","license":"","licenseType":"MIT, Apache-2.0","url":"https://github.com/3liz/proj4rs"}]`);
  Qy = [
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
  e0 = {
    withStackTrace: false
  };
  Jh = (e, t, n = e0) => {
    const i = t.isOk() ? {
      type: "Ok",
      value: t.value
    } : {
      type: "Err",
      value: t.error
    }, c = n.withStackTrace ? new Error().stack : void 0;
    return {
      data: i,
      message: e,
      stack: c
    };
  };
  function Si(e, t, n, i) {
    function c(l) {
      return l instanceof n ? l : new n(function(h) {
        h(l);
      });
    }
    return new (n || (n = Promise))(function(l, h) {
      function f(g) {
        try {
          v(i.next(g));
        } catch (T) {
          h(T);
        }
      }
      function p(g) {
        try {
          v(i.throw(g));
        } catch (T) {
          h(T);
        }
      }
      function v(g) {
        g.done ? l(g.value) : c(g.value).then(f, p);
      }
      v((i = i.apply(e, [])).next());
    });
  }
  function bl(e) {
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
  function vl(e, t, n) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var i = n.apply(e, t || []), c, l = [];
    return c = Object.create((typeof AsyncIterator == "function" ? AsyncIterator : Object).prototype), f("next"), f("throw"), f("return", h), c[Symbol.asyncIterator] = function() {
      return this;
    }, c;
    function h(O) {
      return function(F) {
        return Promise.resolve(F).then(O, T);
      };
    }
    function f(O, F) {
      i[O] && (c[O] = function(C) {
        return new Promise(function(fe, ne) {
          l.push([
            O,
            C,
            fe,
            ne
          ]) > 1 || p(O, C);
        });
      }, F && (c[O] = F(c[O])));
    }
    function p(O, F) {
      try {
        v(i[O](F));
      } catch (C) {
        P(l[0][3], C);
      }
    }
    function v(O) {
      O.value instanceof In ? Promise.resolve(O.value.v).then(g, T) : P(l[0][2], O);
    }
    function g(O) {
      p("next", O);
    }
    function T(O) {
      p("throw", O);
    }
    function P(O, F) {
      O(F), l.shift(), l.length && p(l[0][0], l[0][1]);
    }
  }
  function t0(e) {
    var t, n;
    return t = {}, i("next"), i("throw", function(c) {
      throw c;
    }), i("return"), t[Symbol.iterator] = function() {
      return this;
    }, t;
    function i(c, l) {
      t[c] = e[c] ? function(h) {
        return (n = !n) ? {
          value: In(e[c](h)),
          done: false
        } : l ? l(h) : h;
      } : l;
    }
  }
  function n0(e) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var t = e[Symbol.asyncIterator], n;
    return t ? t.call(e) : (e = typeof bl == "function" ? bl(e) : e[Symbol.iterator](), n = {}, i("next"), i("throw"), i("return"), n[Symbol.asyncIterator] = function() {
      return this;
    }, n);
    function i(l) {
      n[l] = e[l] && function(h) {
        return new Promise(function(f, p) {
          h = e[l](h), c(f, p, h.done, h.value);
        });
      };
    }
    function c(l, h, f, p) {
      Promise.resolve(p).then(function(v) {
        l({
          value: v,
          done: f
        });
      }, h);
    }
  }
  class At {
    constructor(t) {
      this._promise = t;
    }
    static fromSafePromise(t) {
      const n = t.then((i) => new yn(i));
      return new At(n);
    }
    static fromPromise(t, n) {
      const i = t.then((c) => new yn(c)).catch((c) => new an(n(c)));
      return new At(i);
    }
    static fromThrowable(t, n) {
      return (...i) => new At(Si(this, void 0, void 0, function* () {
        try {
          return new yn(yield t(...i));
        } catch (c) {
          return new an(n ? n(c) : c);
        }
      }));
    }
    static combine(t) {
      return i0(t);
    }
    static combineWithAllErrors(t) {
      return r0(t);
    }
    map(t) {
      return new At(this._promise.then((n) => Si(this, void 0, void 0, function* () {
        return n.isErr() ? new an(n.error) : new yn(yield t(n.value));
      })));
    }
    andThrough(t) {
      return new At(this._promise.then((n) => Si(this, void 0, void 0, function* () {
        if (n.isErr()) return new an(n.error);
        const i = yield t(n.value);
        return i.isErr() ? new an(i.error) : new yn(n.value);
      })));
    }
    andTee(t) {
      return new At(this._promise.then((n) => Si(this, void 0, void 0, function* () {
        if (n.isErr()) return new an(n.error);
        try {
          yield t(n.value);
        } catch {
        }
        return new yn(n.value);
      })));
    }
    orTee(t) {
      return new At(this._promise.then((n) => Si(this, void 0, void 0, function* () {
        if (n.isOk()) return new yn(n.value);
        try {
          yield t(n.error);
        } catch {
        }
        return new an(n.error);
      })));
    }
    mapErr(t) {
      return new At(this._promise.then((n) => Si(this, void 0, void 0, function* () {
        return n.isOk() ? new yn(n.value) : new an(yield t(n.error));
      })));
    }
    andThen(t) {
      return new At(this._promise.then((n) => {
        if (n.isErr()) return new an(n.error);
        const i = t(n.value);
        return i instanceof At ? i._promise : i;
      }));
    }
    orElse(t) {
      return new At(this._promise.then((n) => Si(this, void 0, void 0, function* () {
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
      return vl(this, arguments, function* () {
        return yield In(yield In(yield* t0(n0(yield In(this._promise.then((n) => n.safeUnwrap()))))));
      });
    }
    then(t, n) {
      return this._promise.then(t, n);
    }
    [Symbol.asyncIterator]() {
      return vl(this, arguments, function* () {
        const n = yield In(this._promise);
        return n.isErr() && (yield yield In(Ro(n.error))), yield In(n.value);
      });
    }
  }
  function Ro(e) {
    return new At(Promise.resolve(new an(e)));
  }
  const Zh = (e) => {
    let t = j([]);
    for (const n of e) if (n.isErr()) {
      t = M(n.error);
      break;
    } else t.map((i) => i.push(n.value));
    return t;
  }, i0 = (e) => At.fromSafePromise(Promise.all(e)).andThen(Zh), Xh = (e) => {
    let t = j([]);
    for (const n of e) n.isErr() && t.isErr() ? t.error.push(n.error) : n.isErr() && t.isOk() ? t = M([
      n.error
    ]) : n.isOk() && t.isOk() && t.value.push(n.value);
    return t;
  }, r0 = (e) => At.fromSafePromise(Promise.all(e)).andThen(Xh);
  var Ra;
  (function(e) {
    function t(c, l) {
      return (...h) => {
        try {
          const f = c(...h);
          return j(f);
        } catch (f) {
          return M(l ? l(f) : f);
        }
      };
    }
    e.fromThrowable = t;
    function n(c) {
      return Zh(c);
    }
    e.combine = n;
    function i(c) {
      return Xh(c);
    }
    e.combineWithAllErrors = i;
  })(Ra || (Ra = {}));
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
      return At.fromSafePromise(t(this.value));
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
      throw Jh("Called `_unsafeUnwrapErr` on an Ok", this, t);
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
      return Ro(this.error);
    }
    asyncAndThrough(t) {
      return Ro(this.error);
    }
    asyncMap(t) {
      return Ro(this.error);
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
      throw Jh("Called `_unsafeUnwrap` on an Err", this, t);
    }
    _unsafeUnwrapErr(t) {
      return this.error;
    }
    *[Symbol.iterator]() {
      const t = this;
      return yield t, t;
    }
  }
  Ra.fromThrowable;
  to = ((e) => (e.GENERIC = "generic", e.VALIDATION = "validation", e.NETWORK = "network", e.GEOLOCATION = "geolocation", e.STORAGE = "storage", e.CONVERSION = "conversion", e.UPDATE_SERVICE = "update_service", e))(to || {});
  hr = class extends Error {
    constructor(t, n) {
      super(t), this.cause = n, this.name = this.constructor.name, n && (this.message = `${t} (caused by: ${n.message})`);
    }
  };
  class xe extends hr {
    constructor(t, n = "GENERIC_ERROR", i) {
      super(t, i);
      __publicField(this, "code");
      __publicField(this, "domain", "generic");
      this.code = n;
    }
  }
  function o0(e) {
    return e instanceof hr;
  }
  go = function(e, t = "Unknown error occurred") {
    return o0(e) ? e : e instanceof Error ? new xe(t, "UNKNOWN_ERROR", e) : new xe(t, "UNKNOWN_ERROR");
  };
  _i = function(e, t) {
    const n = t ? `[${t}] ` : "";
    console.error(`${n}${e.domain}.${e.code}: ${e.message}`, {
      error: e,
      cause: e.cause,
      stack: e.stack
    });
  };
  class Me extends hr {
    constructor(t, n, i) {
      super(t, i);
      __publicField(this, "code");
      __publicField(this, "domain", to.GEOLOCATION);
      this.code = n;
    }
  }
  class Nn extends Me {
    constructor(t = "Geolocation update service error", n, i) {
      super(t, "UPDATE_SERVICE_ERROR", i), this.serviceName = n;
    }
  }
  var s0 = "2.0.8", a0 = 500, El = "user-agent", ir = "", Il = "?", ut = {
    FUNCTION: "function",
    OBJECT: "object",
    STRING: "string",
    UNDEFINED: "undefined"
  }, zt = "browser", Wn = "cpu", Tn = "device", un = "engine", Kt = "os", rr = "result", W = "name", D = "type", B = "vendor", $ = "version", kt = "architecture", Kr = "major", G = "model", Oo = "console", Re = "mobile", He = "tablet", ft = "smarttv", bn = "wearable", mo = "xr", _r = "embedded", Gi = "inapp", oc = "brands", Pi = "formFactors", sc = "fullVersionList", or = "platform", ac = "platformVersion", _s = "bitness", yi = "sec-ch-ua", c0 = yi + "-full-version-list", l0 = yi + "-arch", u0 = yi + "-" + _s, h0 = yi + "-form-factors", f0 = yi + "-" + Re, d0 = yi + "-" + G, Qh = yi + "-" + or, p0 = Qh + "-version", ef = [
    oc,
    sc,
    Re,
    G,
    or,
    ac,
    kt,
    Pi,
    _s
  ], wo = "Amazon", Wi = "Apple", Tl = "ASUS", Sl = "BlackBerry", Ai = "Google", _l = "Huawei", Ys = "Lenovo", Al = "Honor", yo = "LG", Ks = "Microsoft", Js = "Motorola", Rl = "Nvidia", Ol = "OnePlus", Zs = "OPPO", yr = "Samsung", Ml = "Sharp", br = "Sony", Xs = "Xiaomi", Qs = "Zebra", Pl = "Chrome", Nl = "Chromium", Xn = "Chromecast", Mo = "Edge", vr = "Firefox", zi = "Opera", ea = "Facebook", Cl = "Sogou", Bi = "Mobile ", Er = " Browser", Oa = "Windows", g0 = typeof window !== ut.UNDEFINED, Gt = g0 && window.navigator ? window.navigator : void 0, Ni = Gt && Gt.userAgentData ? Gt.userAgentData : void 0, m0 = function(e, t) {
    var n = {}, i = t;
    if (!qo(t)) {
      i = {};
      for (var c in t) for (var l in t[c]) i[l] = t[c][l].concat(i[l] ? i[l] : []);
    }
    for (var h in e) n[h] = i[h] && i[h].length % 2 === 0 ? i[h].concat(e[h]) : e[h];
    return n;
  }, As = function(e) {
    for (var t = {}, n = 0; n < e.length; n++) t[e[n].toUpperCase()] = e[n];
    return t;
  }, Ma = function(e, t) {
    if (typeof e === ut.OBJECT && e.length > 0) {
      for (var n in e) if (li(t) == li(e[n])) return true;
      return false;
    }
    return no(e) ? li(t) == li(e) : false;
  }, qo = function(e, t) {
    for (var n in e) return /^(browser|cpu|device|engine|os)$/.test(n) || (t ? qo(e[n]) : false);
  }, no = function(e) {
    return typeof e === ut.STRING;
  }, ta = function(e) {
    if (e) {
      for (var t = [], n = sr(/\\?\"/g, e).split(","), i = 0; i < n.length; i++) if (n[i].indexOf(";") > -1) {
        var c = Yo(n[i]).split(";v=");
        t[i] = {
          brand: c[0],
          version: c[1]
        };
      } else t[i] = Yo(n[i]);
      return t;
    }
  }, li = function(e) {
    return no(e) ? e.toLowerCase() : e;
  }, Pa = function(e) {
    return no(e) ? sr(/[^\d\.]/g, e).split(".")[0] : void 0;
  }, jn = function(e) {
    for (var t in e) if (e.hasOwnProperty(t)) {
      var n = e[t];
      typeof n == ut.OBJECT && n.length == 2 ? this[n[0]] = n[1] : this[n] = void 0;
    }
    return this;
  }, sr = function(e, t) {
    return no(t) ? t.replace(e, ir) : t;
  }, Ir = function(e) {
    return sr(/\\?\"/g, e);
  }, Yo = function(e, t) {
    return e = sr(/^\s\s*/, String(e)), typeof t === ut.UNDEFINED ? e : e.substring(0, t);
  }, Na = function(e, t) {
    if (!(!e || !t)) for (var n = 0, i, c, l, h, f, p; n < t.length && !f; ) {
      var v = t[n], g = t[n + 1];
      for (i = c = 0; i < v.length && !f && v[i]; ) if (f = v[i++].exec(e), f) for (l = 0; l < g.length; l++) p = f[++c], h = g[l], typeof h === ut.OBJECT && h.length > 0 ? h.length === 2 ? typeof h[1] == ut.FUNCTION ? this[h[0]] = h[1].call(this, p) : this[h[0]] = h[1] : h.length >= 3 && (typeof h[1] === ut.FUNCTION && !(h[1].exec && h[1].test) ? h.length > 3 ? this[h[0]] = p ? h[1].apply(this, h.slice(2)) : void 0 : this[h[0]] = p ? h[1].call(this, p, h[2]) : void 0 : h.length == 3 ? this[h[0]] = p ? p.replace(h[1], h[2]) : void 0 : h.length == 4 ? this[h[0]] = p ? h[3].call(this, p.replace(h[1], h[2])) : void 0 : h.length > 4 && (this[h[0]] = p ? h[3].apply(this, [
        p.replace(h[1], h[2])
      ].concat(h.slice(4))) : void 0)) : this[h] = p || void 0;
      n += 2;
    }
  }, ln = function(e, t) {
    for (var n in t) if (typeof t[n] === ut.OBJECT && t[n].length > 0) {
      for (var i = 0; i < t[n].length; i++) if (Ma(t[n][i], e)) return n === Il ? void 0 : n;
    } else if (Ma(t[n], e)) return n === Il ? void 0 : n;
    return t.hasOwnProperty("*") ? t["*"] : e;
  }, Ll = {
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
  }, kl = {
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
  }, w0 = {
    Chrome: "Google Chrome",
    Edge: "Microsoft Edge",
    "Edge WebView2": "Microsoft Edge WebView2",
    "Chrome WebView": "Android WebView",
    "Chrome Headless": "HeadlessChrome",
    "Huawei Browser": "HuaweiBrowser",
    "MIUI Browser": "Miui Browser",
    "Opera Mobi": "OperaMobile",
    Yandex: "YaBrowser"
  }, Dl = {
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
          zi + " Mini"
        ]
      ],
      [
        /\bop(?:rg)?x\/([\w\.]+)/i
      ],
      [
        $,
        [
          W,
          zi + " GX"
        ]
      ],
      [
        /\bopr\/([\w\.]+)/i
      ],
      [
        $,
        [
          W,
          zi
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
        /(atlas|flock|rockmelt|midori|epiphany|silk|skyfire|bolt|iron|vivaldi|iridium|phantomjs|bowser|qupzilla|falkon|rekonq|puffin|whale(?!.+naver)|qqbrowserlite|duckduckgo|klar|helio|(?=comodo_)?dragon|otter|dooble|(?:hi|lg |ovi|qute)browser|palemoon)\/v?([-\w\.]+)/i,
        /(brave)(?: chrome)?\/([\d\.]+)/i,
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
          "Smart " + Ys + Er
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
          vr + " Focus"
        ]
      ],
      [
        / mms\/([\w\.]+)$/i
      ],
      [
        $,
        [
          W,
          zi + " Neon"
        ]
      ],
      [
        / opt\/([\w\.]+)$/i
      ],
      [
        $,
        [
          W,
          zi + " Touch"
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
          zi + " Coast"
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
          Bi + vr
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
          yr + " Internet"
        ]
      ],
      [
        /metasr[\/ ]?([\d\.]+)/i
      ],
      [
        $,
        [
          W,
          Cl + " Explorer"
        ]
      ],
      [
        /(sogou)mo\w+\/([\d\.]+)/i
      ],
      [
        [
          W,
          Cl + " Mobile"
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
        /(?:musical_ly|trill)(?:.+app_?version\/|_)([\w\.]+)/i
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
          Pl + " Headless"
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
          Pl + " WebView"
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
          Bi + vr
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
          vr + " Reality"
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
          ir
        ]
      ]
    ],
    cpu: [
      [
        /\b((amd|x|x86[-_]?|wow|win)64)\b/i
      ],
      [
        [
          kt,
          "amd64"
        ]
      ],
      [
        /(ia32(?=;))/i,
        /\b((i[346]|x)86)(pc)?\b/i
      ],
      [
        [
          kt,
          "ia32"
        ]
      ],
      [
        /\b(aarch64|arm(v?[89]e?l?|_?64))\b/i
      ],
      [
        [
          kt,
          "arm64"
        ]
      ],
      [
        /\b(arm(v[67])?ht?n?[fl]p?)\b/i
      ],
      [
        [
          kt,
          "armhf"
        ]
      ],
      [
        /( (ce|mobile); ppc;|\/[\w\.]+arm\b)/i
      ],
      [
        [
          kt,
          "arm"
        ]
      ],
      [
        / sun4\w[;\)]/i
      ],
      [
        [
          kt,
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
          kt,
          /ower/,
          ir,
          li
        ]
      ],
      [
        /mc680.0/i
      ],
      [
        [
          kt,
          "68k"
        ]
      ],
      [
        /winnt.+\[axp/i
      ],
      [
        [
          kt,
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
          B,
          yr
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
          B,
          yr
        ],
        [
          D,
          Re
        ]
      ],
      [
        /(?:\/|\()(ip(?:hone|od)[\w, ]*)[\/\);]/i
      ],
      [
        G,
        [
          B,
          Wi
        ],
        [
          D,
          Re
        ]
      ],
      [
        /\b(?:ios|apple\w+)\/.+[\(\/](ipad)/i,
        /\b(ipad)[\d,]*[;\] ].+(mac |i(pad)?)os/i
      ],
      [
        G,
        [
          B,
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
          B,
          Wi
        ]
      ],
      [
        /\b(sh-?[altvz]?\d\d[a-ekm]?)/i
      ],
      [
        G,
        [
          B,
          Ml
        ],
        [
          D,
          Re
        ]
      ],
      [
        /\b((?:brt|eln|hey2?|gdi|jdn)-a?[lnw]09|(?:ag[rm]3?|jdn2|kob2)-a?[lw]0[09]hn)(?: bui|\)|;)/i
      ],
      [
        G,
        [
          B,
          Al
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
          B,
          Al
        ],
        [
          D,
          Re
        ]
      ],
      [
        /\b((?:ag[rs][2356]?k?|bah[234]?|bg[2o]|bt[kv]|cmr|cpn|db[ry]2?|jdn2|got|kob2?k?|mon|pce|scm|sht?|[tw]gr|vrd)-[ad]?[lw][0125][09]b?|605hw|bg2-u03|(?:gem|fdr|m2|ple|t1)-[7a]0[1-4][lu]|t1-a2[13][lw]|mediapad[\w\. ]*(?= bui|\)))\b(?!.+d\/s)/i
      ],
      [
        G,
        [
          B,
          _l
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
          B,
          _l
        ],
        [
          D,
          Re
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
          B,
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
          B,
          Xs
        ],
        [
          D,
          Re
        ]
      ],
      [
        /droid.+; (cph2[3-6]\d[13579]|((gm|hd)19|(ac|be|in|kb)20|(d[en]|eb|le|mt)21|ne22)[0-2]\d|p[g-l]\w[1m]10)\b/i,
        /(?:one)?(?:plus)? (a\d0\d\d)(?: b|\))/i
      ],
      [
        G,
        [
          B,
          Ol
        ],
        [
          D,
          Re
        ]
      ],
      [
        /; (\w+) bui.+ oppo/i,
        /\b(cph[12]\d{3}|p(?:af|c[al]|d\w|e[ar])[mt]\d0|x9007|a101op)\b/i
      ],
      [
        G,
        [
          B,
          Zs
        ],
        [
          D,
          Re
        ]
      ],
      [
        /\b(opd2(\d{3}a?))(?: bui|\))/i
      ],
      [
        G,
        [
          B,
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
          B,
          "BLU"
        ],
        [
          D,
          Re
        ]
      ],
      [
        /; vivo (\w+)(?: bui|\))/i,
        /\b(v[12]\d{3}\w?[at])(?: bui|;)/i
      ],
      [
        G,
        [
          B,
          "Vivo"
        ],
        [
          D,
          Re
        ]
      ],
      [
        /\b(rmx[1-3]\d{3})(?: bui|;|\))/i
      ],
      [
        G,
        [
          B,
          "Realme"
        ],
        [
          D,
          Re
        ]
      ],
      [
        /(ideatab[-\w ]+|602lv|d-42a|a101lv|a2109a|a3500-hv|s[56]000|pb-6505[my]|tb-?x?\d{3,4}(?:f[cu]|xu|[av])|yt\d?-[jx]?\d+[lfmx])( bui|;|\)|\/)/i,
        /lenovo ?(b[68]0[08]0-?[hf]?|tab(?:[\w- ]+?)|tb[\w-]{6,7})( bui|;|\)|\/)/i
      ],
      [
        G,
        [
          B,
          Ys
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
          B,
          Ys
        ],
        [
          D,
          Re
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
          B,
          Js
        ],
        [
          D,
          Re
        ]
      ],
      [
        /\b(mz60\d|xoom[2 ]{0,2}) build\//i
      ],
      [
        G,
        [
          B,
          Js
        ],
        [
          D,
          He
        ]
      ],
      [
        /\b(?:lg)?([vl]k\-?\d{3}) bui| 3\.[-\w; ]{10}lg?-([06cv9]{3,4})/i
      ],
      [
        G,
        [
          B,
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
          B,
          yo
        ],
        [
          D,
          Re
        ]
      ],
      [
        /(nokia) (t[12][01])/i
      ],
      [
        B,
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
          Re
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
        G,
        [
          B,
          Ai
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
          B,
          Ai
        ],
        [
          D,
          Re
        ]
      ],
      [
        /(google) (pixelbook( go)?)/i
      ],
      [
        B,
        G
      ],
      [
        /droid.+; (a?\d[0-2]{2}so|[c-g]\d{4}|so[-gl]\w+|xq-\w\w\d\d)(?= bui|\).+chrome\/(?![1-6]{0,1}\d\.))/i
      ],
      [
        G,
        [
          B,
          br
        ],
        [
          D,
          Re
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
          B,
          br
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
          B,
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
          B,
          wo
        ],
        [
          D,
          Re
        ]
      ],
      [
        /(playbook);[-\w\),; ]+(rim)/i
      ],
      [
        G,
        B,
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
          B,
          Sl
        ],
        [
          D,
          Re
        ]
      ],
      [
        /(?:\b|asus_)(transfo[prime ]{4,10} \w+|eeepc|slider \w+|nexus 7|padfone|p00[cj])/i
      ],
      [
        G,
        [
          B,
          Tl
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
          B,
          Tl
        ],
        [
          D,
          Re
        ]
      ],
      [
        /(nexus 9)/i
      ],
      [
        G,
        [
          B,
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
        B,
        [
          G,
          /_/g,
          " "
        ],
        [
          D,
          Re
        ]
      ],
      [
        /tcl (xess p17aa)/i,
        /droid [\w\.]+; ((?:8[14]9[16]|9(?:0(?:48|60|8[01])|1(?:3[27]|66)|2(?:6[69]|9[56])|466))[gqswx])(_\w(\w|\w\w))?(\)| bui)/i
      ],
      [
        G,
        [
          B,
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
          B,
          "TCL"
        ],
        [
          D,
          Re
        ]
      ],
      [
        /(itel) ((\w+))/i
      ],
      [
        [
          B,
          li
        ],
        G,
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
        G,
        [
          B,
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
          B,
          "Meizu"
        ],
        [
          D,
          Re
        ]
      ],
      [
        /; ((?:power )?armor(?:[\w ]{0,8}))(?: bui|\))/i
      ],
      [
        G,
        [
          B,
          "Ulefone"
        ],
        [
          D,
          Re
        ]
      ],
      [
        /; (energy ?\w+)(?: bui|\))/i,
        /; energizer ([\w ]+)(?: bui|\))/i
      ],
      [
        G,
        [
          B,
          "Energizer"
        ],
        [
          D,
          Re
        ]
      ],
      [
        /; cat (b35);/i,
        /; (b15q?|s22 flip|s48c|s62 pro)(?: bui|\))/i
      ],
      [
        G,
        [
          B,
          "Cat"
        ],
        [
          D,
          Re
        ]
      ],
      [
        /((?:new )?andromax[\w- ]+)(?: bui|\))/i
      ],
      [
        G,
        [
          B,
          "Smartfren"
        ],
        [
          D,
          Re
        ]
      ],
      [
        /droid.+; (a(in)?(0(15|59|6[35])|142)p?)/i
      ],
      [
        G,
        [
          B,
          "Nothing"
        ],
        [
          D,
          Re
        ]
      ],
      [
        /; (x67 5g|tikeasy \w+|ac[1789]\d\w+)( b|\))/i,
        /archos ?(5|gamepad2?|([\w ]*[t1789]|hello) ?\d+[\w ]*)( b|\))/i
      ],
      [
        G,
        [
          B,
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
          B,
          "Archos"
        ],
        [
          D,
          Re
        ]
      ],
      [
        /; (n159v)/i
      ],
      [
        G,
        [
          B,
          "HMD"
        ],
        [
          D,
          Re
        ]
      ],
      [
        /(imo) (tab \w+)/i,
        /(infinix|tecno) (x1101b?|p904|dp(7c|8d|10a)( pro)?|p70[1-3]a?|p904|t1101)/i
      ],
      [
        B,
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
        B,
        G,
        [
          D,
          Re
        ]
      ],
      [
        /(kobo)\s(ereader|touch)/i,
        /(hp).+(touchpad(?!.+tablet)|tablet)/i,
        /(kindle)\/([\w\.]+)/i
      ],
      [
        B,
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
          B,
          Ks
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
          B,
          "Fairphone"
        ],
        [
          D,
          Re
        ]
      ],
      [
        /((?:tegranote|shield t(?!.+d tv))[\w- ]*?)(?: b|\))/i
      ],
      [
        G,
        [
          B,
          Rl
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
        B,
        G,
        [
          D,
          Re
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
          B,
          Ks
        ],
        [
          D,
          Re
        ]
      ],
      [
        /droid.+; ([c6]+|et5[16]|mc[239][23]x?|vc8[03]x?)\)/i
      ],
      [
        G,
        [
          B,
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
          B,
          Qs
        ],
        [
          D,
          Re
        ]
      ],
      [
        /(philips)[\w ]+tv/i,
        /smart-tv.+(samsung)/i
      ],
      [
        B,
        [
          D,
          ft
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
          B,
          yr
        ],
        [
          D,
          ft
        ]
      ],
      [
        /(vizio)(?: |.+model\/)(\w+-\w+)/i,
        /tcast.+(lg)e?. ([-\w]+)/i
      ],
      [
        B,
        G,
        [
          D,
          ft
        ]
      ],
      [
        /(nux; netcast.+smarttv|lg (netcast\.tv-201\d|android tv))/i
      ],
      [
        [
          B,
          yo
        ],
        [
          D,
          ft
        ]
      ],
      [
        /(apple) ?tv/i
      ],
      [
        B,
        [
          G,
          Wi + " TV"
        ],
        [
          D,
          ft
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
          B,
          Ai
        ],
        [
          D,
          ft
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
          B,
          Ai
        ],
        [
          D,
          ft
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
          B,
          Ai
        ],
        [
          D,
          ft
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
          B,
          Ai
        ],
        [
          D,
          ft
        ]
      ],
      [
        /(portaltv)/i
      ],
      [
        G,
        [
          B,
          ea
        ],
        [
          D,
          ft
        ]
      ],
      [
        /droid.+aft(\w+)( bui|\))/i
      ],
      [
        G,
        [
          B,
          wo
        ],
        [
          D,
          ft
        ]
      ],
      [
        /(shield \w+ tv)/i
      ],
      [
        G,
        [
          B,
          Rl
        ],
        [
          D,
          ft
        ]
      ],
      [
        /\(dtv[\);].+(aquos)/i,
        /(aquos-tv[\w ]+)\)/i
      ],
      [
        G,
        [
          B,
          Ml
        ],
        [
          D,
          ft
        ]
      ],
      [
        /(bravia[\w ]+)( bui|\))/i
      ],
      [
        G,
        [
          B,
          br
        ],
        [
          D,
          ft
        ]
      ],
      [
        /(mi(tv|box)-?\w+) bui/i
      ],
      [
        G,
        [
          B,
          Xs
        ],
        [
          D,
          ft
        ]
      ],
      [
        /Hbbtv.*(technisat) (.*);/i
      ],
      [
        B,
        G,
        [
          D,
          ft
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
          ln,
          {
            LG: "lge"
          }
        ],
        [
          G,
          Yo
        ],
        [
          D,
          ft
        ]
      ],
      [
        /(playstation \w+)/i
      ],
      [
        G,
        [
          B,
          br
        ],
        [
          D,
          Oo
        ]
      ],
      [
        /\b(xbox(?: one)?(?!; xbox))[\); ]/i
      ],
      [
        G,
        [
          B,
          Ks
        ],
        [
          D,
          Oo
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
          B,
          ln,
          {
            Nvidia: "Shield",
            Anbernic: "RGCUBE",
            Logitech: "GR0006"
          }
        ],
        G,
        [
          D,
          Oo
        ]
      ],
      [
        /\b(sm-[lr]\d\d[0156][fnuw]?s?|gear live)\b/i
      ],
      [
        G,
        [
          B,
          yr
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
        B,
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
          B,
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
          B,
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
          B,
          Ol
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
          B,
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
          B,
          br
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
          B,
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
          B,
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
          B,
          Ai
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
        B,
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
          B,
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
        B,
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
          B,
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
          B,
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
          ft
        ]
      ],
      [
        /\b((4k|android|smart|opera)[- ]?tv|tv; rv:|large screen[\w ]+safari)\b/i
      ],
      [
        [
          D,
          ft
        ]
      ],
      [
        /droid .+?; ([^;]+?)(?: bui|; wv\)|\) applew|; hmsc).+?(mobile|vr|\d) safari/i
      ],
      [
        G,
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
          Re
        ]
      ],
      [
        /droid .+?; ([\w\. -]+)( bui|\))/i
      ],
      [
        G,
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
        /(khtml|tasman|links|dillo)[\/ ]\(?([\w\.]+)/i,
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
          ln,
          Ll
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
          ln,
          Ll
        ],
        [
          W,
          Oa
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
          Sl
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
        /mozilla\/[\d\.]+ \((?:mobile[;\w ]*|tablet|tv|[^\)]*(?:viera|lg(?:l25|-d300)|alcatel ?o.+|y300-f1)); rv:([\w\.]+)\).+gecko\//i
      ],
      [
        $,
        [
          W,
          vr + " OS"
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
        zt,
        [
          W,
          $,
          Kr,
          D
        ]
      ],
      [
        Wn,
        [
          kt
        ]
      ],
      [
        Tn,
        [
          D,
          G,
          B
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
        Kt,
        [
          W,
          $
        ]
      ]
    ]), jn.call(e.isIgnore, [
      [
        zt,
        [
          $,
          Kr
        ]
      ],
      [
        un,
        [
          $
        ]
      ],
      [
        Kt,
        [
          $
        ]
      ]
    ]), jn.call(e.isIgnoreRgx, [
      [
        zt,
        / ?browser$/i
      ],
      [
        Kt,
        / ?os$/i
      ]
    ]), jn.call(e.toString, [
      [
        zt,
        [
          W,
          $
        ]
      ],
      [
        Wn,
        [
          kt
        ]
      ],
      [
        Tn,
        [
          B,
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
        Kt,
        [
          W,
          $
        ]
      ]
    ]), e;
  })(), y0 = function(e, t) {
    var n = bo.init[t], i = bo.isIgnore[t] || 0, c = bo.isIgnoreRgx[t] || 0, l = bo.toString[t] || 0;
    function h() {
      jn.call(this, n);
    }
    return h.prototype.getItem = function() {
      return e;
    }, h.prototype.withClientHints = function() {
      return Ni ? Ni.getHighEntropyValues(ef).then(function(f) {
        return e.setCH(new tf(f, false)).parseCH().get();
      }) : e.parseCH().get();
    }, h.prototype.withFeatureCheck = function() {
      return e.detectFeature().get();
    }, t != rr && (h.prototype.is = function(f) {
      var p = false;
      for (var v in this) if (this.hasOwnProperty(v) && !Ma(i, v) && li(c ? sr(c, this[v]) : this[v]) == li(c ? sr(c, f) : f)) {
        if (p = true, f != ut.UNDEFINED) break;
      } else if (f == ut.UNDEFINED && p) {
        p = !p;
        break;
      }
      return p;
    }, h.prototype.toString = function() {
      var f = ir;
      for (var p in l) typeof this[l[p]] !== ut.UNDEFINED && (f += (f ? " " : ir) + this[l[p]]);
      return f || ut.UNDEFINED;
    }), h.prototype.then = function(f) {
      var p = this, v = function() {
        for (var T in p) p.hasOwnProperty(T) && (this[T] = p[T]);
      };
      v.prototype = {
        is: h.prototype.is,
        toString: h.prototype.toString,
        withClientHints: h.prototype.withClientHints,
        withFeatureCheck: h.prototype.withFeatureCheck
      };
      var g = new v();
      return f(g), g;
    }, new h();
  };
  function tf(e, t) {
    if (e = e || {}, jn.call(this, ef), t) jn.call(this, [
      [
        oc,
        ta(e[yi])
      ],
      [
        sc,
        ta(e[c0])
      ],
      [
        Re,
        /\?1/.test(e[f0])
      ],
      [
        G,
        Ir(e[d0])
      ],
      [
        or,
        Ir(e[Qh])
      ],
      [
        ac,
        Ir(e[p0])
      ],
      [
        kt,
        Ir(e[l0])
      ],
      [
        Pi,
        ta(e[h0])
      ],
      [
        _s,
        Ir(e[u0])
      ]
    ]);
    else for (var n in e) this.hasOwnProperty(n) && typeof e[n] !== ut.UNDEFINED && (this[n] = e[n]);
  }
  function pi(e, t, n, i) {
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
        y0(this, e)
      ]
    ]), this;
  }
  pi.prototype.get = function(e) {
    return e ? this.data.hasOwnProperty(e) ? this.data[e] : void 0 : this.data;
  };
  pi.prototype.set = function(e, t) {
    return this.data[e] = t, this;
  };
  pi.prototype.setCH = function(e) {
    return this.uaCH = e, this;
  };
  pi.prototype.detectFeature = function() {
    if (Gt && Gt.userAgent == this.ua) switch (this.itemType) {
      case zt:
        Gt.brave && typeof Gt.brave.isBrave == ut.FUNCTION && this.set(W, "Brave");
        break;
      case Tn:
        !this.get(D) && Ni && Ni[Re] && this.set(D, Re), this.get(G) == "Macintosh" && Gt && typeof Gt.standalone !== ut.UNDEFINED && Gt.maxTouchPoints && Gt.maxTouchPoints > 2 && this.set(G, "iPad").set(D, He);
        break;
      case Kt:
        !this.get(W) && Ni && Ni[or] && this.set(W, Ni[or]);
        break;
      case rr:
        var e = this.data, t = function(n) {
          return e[n].getItem().detectFeature().get();
        };
        this.set(zt, t(zt)).set(Wn, t(Wn)).set(Tn, t(Tn)).set(un, t(un)).set(Kt, t(Kt));
    }
    return this;
  };
  pi.prototype.parseUA = function() {
    switch (this.itemType != rr && Na.call(this.data, this.ua, this.rgxMap), this.itemType) {
      case zt:
        this.set(Kr, Pa(this.get($)));
        break;
      case Kt:
        if (this.get(W) == "iOS" && this.get($) == "18.6") {
          var e = /\) Version\/([\d\.]+)/.exec(this.ua);
          e && parseInt(e[1].substring(0, 2), 10) >= 26 && this.set($, e[1]);
        }
        break;
    }
    return this;
  };
  pi.prototype.parseCH = function() {
    var e = this.uaCH, t = this.rgxMap;
    switch (this.itemType) {
      case zt:
      case un:
        var n = e[sc] || e[oc], i;
        if (n) for (var c = 0; c < n.length; c++) {
          var l = n[c].brand || n[c], h = n[c].version;
          this.itemType == zt && !/not.a.brand/i.test(l) && (!i || /Chrom/.test(i) && l != Nl || i == Mo && /WebView2/.test(l)) && (l = ln(l, w0), i = this.get(W), i && !/Chrom/.test(i) && /Chrom/.test(l) || this.set(W, l).set($, h).set(Kr, Pa(h)), i = l), this.itemType == un && l == Nl && this.set($, h);
        }
        break;
      case Wn:
        var f = e[kt];
        f && (f && e[_s] == "64" && (f += "64"), Na.call(this.data, f + ";", t));
        break;
      case Tn:
        if (e[Re] && this.set(D, Re), e[G] && (this.set(G, e[G]), !this.get(D) || !this.get(B))) {
          var p = {};
          Na.call(p, "droid 9; " + e[G] + ")", t), !this.get(D) && p.type && this.set(D, p.type), !this.get(B) && p.vendor && this.set(B, p.vendor);
        }
        if (e[Pi]) {
          var v;
          if (typeof e[Pi] != "string") for (var g = 0; !v && g < e[Pi].length; ) v = ln(e[Pi][g++], kl);
          else v = ln(e[Pi], kl);
          this.set(D, v);
        }
        break;
      case Kt:
        var T = e[or];
        if (T) {
          var P = e[ac];
          T == Oa && (P = parseInt(Pa(P), 10) >= 13 ? "11" : "10"), this.set(W, T).set($, P);
        }
        this.get(W) == Oa && e[G] == "Xbox" && this.set(W, "Xbox").set($, void 0);
        break;
      case rr:
        var O = this.data, F = function(C) {
          return O[C].getItem().setCH(e).parseCH().get();
        };
        this.set(zt, F(zt)).set(Wn, F(Wn)).set(Tn, F(Tn)).set(un, F(un)).set(Kt, F(Kt));
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
      var c = {};
      for (var l in n) n.hasOwnProperty(l) && (c[String(l).toLowerCase()] = n[l]);
      n = c;
    }
    if (!(this instanceof Hn)) return new Hn(e, t, n).getResult();
    var h = typeof e === ut.STRING ? e : n && n[El] ? n[El] : Gt && Gt.userAgent ? Gt.userAgent : ir, f = new tf(n, true), p = t ? m0(Dl, t) : Dl, v = function(g) {
      return g == rr ? function() {
        return new pi(g, h, p, f).set("ua", h).set(zt, this.getBrowser()).set(Wn, this.getCPU()).set(Tn, this.getDevice()).set(un, this.getEngine()).set(Kt, this.getOS()).get();
      } : function() {
        return new pi(g, h, p[g], f).parseUA().get();
      };
    };
    return jn.call(this, [
      [
        "getBrowser",
        v(zt)
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
        v(rr)
      ],
      [
        "getUA",
        function() {
          return h;
        }
      ],
      [
        "setUA",
        function(g) {
          return no(g) && (h = Yo(g, a0)), this;
        }
      ]
    ]).setUA(h), this;
  };
  Hn.VERSION = s0;
  Hn.BROWSER = As([
    W,
    $,
    Kr,
    D
  ]);
  Hn.CPU = As([
    kt
  ]);
  Hn.DEVICE = As([
    G,
    B,
    D,
    Oo,
    Re,
    ft,
    He,
    bn,
    _r
  ]);
  Hn.ENGINE = Hn.OS = As([
    W,
    $
  ]);
  var lt = ((e) => (e.TAURI = "tauri", e.WEB = "web", e.MOBILE_WEB = "mobile_web", e.UNKNOWN = "unknown", e))(lt || {});
  class b0 {
    constructor() {
      __publicField(this, "parser");
      const t = typeof navigator < "u" ? navigator.userAgent : "";
      this.parser = new Hn(t);
    }
    detectEnvironment() {
      return this.isTauriEnvironment() ? lt.TAURI : this.parser.getDevice().type === "mobile" ? lt.MOBILE_WEB : lt.WEB;
    }
    isTauriEnvironment() {
      return false;
    }
    getPlatformContext() {
      const t = this.detectEnvironment(), n = this.parser.getDevice(), i = this.parser.getBrowser(), c = this.parser.getOS();
      return {
        environment: t,
        capabilities: this.getPlatformCapabilities(t),
        configuration: this.getDefaultConfiguration(t),
        userAgent: typeof navigator < "u" ? navigator.userAgent : "",
        isMobile: n.type === "mobile",
        isTablet: n.type === "tablet",
        browser: i.name || void 0,
        os: c.name || void 0
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
        case lt.TAURI:
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
        case lt.MOBILE_WEB:
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
        case lt.WEB:
        case lt.UNKNOWN:
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
        case lt.TAURI:
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
        case lt.MOBILE_WEB:
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
        case lt.WEB:
        case lt.UNKNOWN:
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
  const cc = new b0();
  mv = function() {
    return cc.getPlatformContext();
  };
  function v0(e, t, n, i) {
    if (typeof t == "function" ? e !== t || !i : !t.has(e)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
    return n === "m" ? i : n === "a" ? i.call(e) : i ? i.value : t.get(e);
  }
  function E0(e, t, n, i, c) {
    if (typeof t == "function" ? e !== t || true : !t.has(e)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
    return t.set(e, n), n;
  }
  var Po;
  function I0(e, t = false) {
    return window.__TAURI_INTERNALS__.transformCallback(e, t);
  }
  async function mt(e, t = {}, n) {
    return window.__TAURI_INTERNALS__.invoke(e, t, n);
  }
  class T0 {
    get rid() {
      return v0(this, Po, "f");
    }
    constructor(t) {
      Po.set(this, void 0), E0(this, Po, t);
    }
    async close() {
      return mt("plugin:resources|close", {
        rid: this.rid
      });
    }
  }
  Po = /* @__PURE__ */ new WeakMap();
  var xl;
  (function(e) {
    e.WINDOW_RESIZED = "tauri://resize", e.WINDOW_MOVED = "tauri://move", e.WINDOW_CLOSE_REQUESTED = "tauri://close-requested", e.WINDOW_DESTROYED = "tauri://destroyed", e.WINDOW_FOCUS = "tauri://focus", e.WINDOW_BLUR = "tauri://blur", e.WINDOW_SCALE_FACTOR_CHANGED = "tauri://scale-change", e.WINDOW_THEME_CHANGED = "tauri://theme-changed", e.WINDOW_CREATED = "tauri://window-created", e.WEBVIEW_CREATED = "tauri://webview-created", e.DRAG_ENTER = "tauri://drag-enter", e.DRAG_OVER = "tauri://drag-over", e.DRAG_DROP = "tauri://drag-drop", e.DRAG_LEAVE = "tauri://drag-leave";
  })(xl || (xl = {}));
  async function S0(e, t) {
    window.__TAURI_EVENT_PLUGIN_INTERNALS__.unregisterListener(e, t), await mt("plugin:event|unlisten", {
      event: e,
      eventId: t
    });
  }
  async function Fl(e, t, n) {
    var i;
    const c = (i = void 0) !== null && i !== void 0 ? i : {
      kind: "Any"
    };
    return mt("plugin:event|listen", {
      event: e,
      target: c,
      handler: I0(t)
    }).then((l) => async () => S0(e, l));
  }
  async function _0(e, t) {
    return await Ko.load(e, t);
  }
  class Ko extends T0 {
    constructor(t) {
      super(t);
    }
    static async load(t, n) {
      const i = await mt("plugin:store|load", {
        path: t,
        options: n
      });
      return new Ko(i);
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
      return await Fl("store://change", (i) => {
        i.payload.resourceId === this.rid && i.payload.key === t && n(i.payload.exists ? i.payload.value : void 0);
      });
    }
    async onChange(t) {
      return await Fl("store://change", (n) => {
        n.payload.resourceId === this.rid && t(n.payload.key, n.payload.exists ? n.payload.value : void 0);
      });
    }
  }
  class rt extends hr {
    constructor(t, n, i) {
      super(t, i);
      __publicField(this, "domain", to.STORAGE);
      this.code = n;
    }
  }
  var et = ((e) => (e.INITIALIZATION_FAILED = "INITIALIZATION_FAILED", e.NOT_INITIALIZED = "NOT_INITIALIZED", e.SET_FAILED = "SET_FAILED", e.GET_FAILED = "GET_FAILED", e.SAVE_FAILED = "SAVE_FAILED", e.EXPORT_FAILED = "EXPORT_FAILED", e.CLEAR_FAILED = "CLEAR_FAILED", e.REMOVE_FAILED = "REMOVE_FAILED", e))(et || {});
  class vt extends hr {
    constructor(t, n, i) {
      super(t, i);
      __publicField(this, "domain", to.GEOLOCATION);
      this.code = n;
    }
  }
  var ct = ((e) => (e.INITIALIZATION_FAILED = "INITIALIZATION_FAILED", e.NOT_INITIALIZED = "NOT_INITIALIZED", e.PERMISSION_DENIED = "PERMISSION_DENIED", e.POSITION_UNAVAILABLE = "POSITION_UNAVAILABLE", e.TIMEOUT = "TIMEOUT", e.UNSUPPORTED = "UNSUPPORTED", e.WATCH_FAILED = "WATCH_FAILED", e.CLEAR_WATCH_FAILED = "CLEAR_WATCH_FAILED", e))(ct || {});
  class Ri extends hr {
    constructor(t, n, i) {
      super(t, i);
      __publicField(this, "domain", to.GENERIC);
      this.code = n;
    }
  }
  var ni = ((e) => (e.DETECTION_FAILED = "DETECTION_FAILED", e.INVALID_CONTEXT = "INVALID_CONTEXT", e.UNSUPPORTED_PLATFORM = "UNSUPPORTED_PLATFORM", e.NOT_INITIALIZED = "NOT_INITIALIZED", e))(ni || {});
  class A0 {
    constructor(t = "user-data.json") {
      __publicField(this, "store", null);
      __publicField(this, "initialized", false);
      __publicField(this, "storePath");
      this.storePath = t;
    }
    async init() {
      if (this.initialized) return j(void 0);
      try {
        return this.store = await _0(this.storePath, {
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
          const c = await this.store.get(i);
          n[i] = c;
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
  let R0, O0;
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
    mapZoomLevel: 15,
    imuUpdateFrequency: 10
  };
  wv = [
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
    },
    {
      key: "imuUpdateFrequency",
      name: "IMU Update Frequency (Hz)",
      type: "number",
      description: "Update frequency for IMU sensors (0 = immediate, 10-20Hz recommended)"
    }
  ];
  R0 = "trackmaker_settings";
  O0 = typeof window < "u" && window.__TAURI_INTERNALS__ !== void 0;
  function Ft(e) {
    try {
      if (typeof localStorage > "u") return na[e];
      const t = localStorage.getItem(R0);
      if (t !== null) return JSON.parse(t)[e] ?? na[e];
    } catch {
    }
    return na[e];
  }
  function jl() {
    return Ft("debugMode");
  }
  function lc() {
    return Ft("gpsUpdateInterval");
  }
  function M0() {
    return Ft("enableKalmanFilter");
  }
  yv = function() {
    return Ft("mapZoomLevel");
  };
  bv = function() {
    return Ft("keepScreenOn");
  };
  vv = function() {
    return Ft("mapTileServer");
  };
  Ev = function() {
    return Ft("showCompass");
  };
  Iv = function() {
    return Ft("autoRecenterTimeout");
  };
  Tv = function() {
    return Ft("customMapTileUrl");
  };
  Sv = function() {
    return Ft("mapTilerApiKey");
  };
  function Ca() {
    return Ft("imuUpdateFrequency");
  }
  class P0 {
    constructor(t = "trackmaker-db", n = "user-data") {
      __publicField(this, "db", null);
      __publicField(this, "initialized", false);
      __publicField(this, "dbName");
      __publicField(this, "storeName");
      this.dbName = t, this.storeName = n;
    }
    getMaxCacheSize() {
      try {
        return Ft("maxCacheSize") || 100;
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
      if (this.db) return new Promise((t, n) => {
        const i = this.db.transaction(this.storeName, "readwrite"), l = i.objectStore(this.storeName).index("timestamp").openCursor(null, "prev"), h = 100;
        let f = 0;
        l.onsuccess = (p) => {
          const v = p.target.result;
          v && f < h && (v.delete(), f++, v.continue());
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
        i.onupgradeneeded = (c) => {
          const l = c.target.result;
          l.objectStoreNames.contains(this.storeName) || l.createObjectStore(this.storeName);
        }, i.onsuccess = (c) => {
          t(c.target.result);
        }, i.onerror = (c) => {
          n(c.target.error ?? Error("Failed to open database"));
        };
      });
    }
    async set(t, n) {
      if (!this.db) return M(new rt("Database not initialized", et.NOT_INITIALIZED));
      try {
        return await this.shouldPruneCache() && await this.pruneCache(), await this.executeTransaction("readwrite", (i) => new Promise((c, l) => {
          const h = i.put(Yh(n), t);
          h.onsuccess = () => c(), h.onerror = () => l(new Error("Failed to set value"));
        })), j(void 0);
      } catch (i) {
        return M(new rt(`Failed to set value for key: ${t}`, et.SET_FAILED, i));
      }
    }
    async get(t) {
      if (!this.db) return M(new rt("Database not initialized", et.NOT_INITIALIZED));
      try {
        const n = await this.executeTransaction("readonly", (i) => new Promise((c, l) => {
          const h = i.get(t);
          h.onsuccess = () => c(h.result), h.onerror = () => l(new Error("Failed to get value"));
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
        const t = await this.executeTransaction("readonly", (n) => new Promise((i, c) => {
          const l = n.getAll();
          l.onsuccess = () => {
            const f = l.result.reduce((p, v, g) => (p[g] = v, p), {});
            i(f);
          }, l.onerror = () => c(new Error("Failed to export data"));
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
          const c = t.clear();
          c.onsuccess = () => n(), c.onerror = () => i(new Error("Failed to clear store"));
        })), j(void 0);
      } catch (t) {
        return M(new rt("Failed to clear store", et.CLEAR_FAILED, t));
      }
    }
    async remove(t) {
      if (!this.db) return M(new rt("Database not initialized", et.NOT_INITIALIZED));
      try {
        return await this.executeTransaction("readwrite", (n) => new Promise((i, c) => {
          const l = n.delete(t);
          l.onsuccess = () => i(), l.onerror = () => c(new Error("Failed to remove key"));
        })), j(void 0);
      } catch (n) {
        return M(new rt(`Failed to remove key: ${t}`, et.REMOVE_FAILED, n));
      }
    }
    executeTransaction(t, n) {
      return new Promise((i, c) => {
        if (!this.db) {
          c(new Error("Database not initialized"));
          return;
        }
        const l = this.db.transaction(this.storeName, t), h = l.objectStore(this.storeName);
        n(h).then(i).catch(c), l.onerror = () => {
          c(new Error("Transaction failed"));
        };
      });
    }
  }
  class N0 {
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
        if (!await t(n.value, "permission.location.prompt")) return M(new vt("Geolocation permission denied", ct.PERMISSION_DENIED));
        const c = await this.getPermissionStatus();
        if (c.isErr()) return M(c.error);
        if (c.value === "denied") return M(new vt("Geolocation permission denied", ct.PERMISSION_DENIED));
      }
      try {
        return await this.injectTauriProvider(), this.initialized = true, j(void 0);
      } catch (i) {
        return M(new vt("Failed to initialize Tauri geolocation provider", ct.INITIALIZATION_FAILED, i));
      }
    }
    async injectTauriProvider() {
      if (navigator.geolocation.injected) return;
      const t = new C0(this.tauriHandlerName);
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
        return M(new vt("Failed to get permission status", ct.PERMISSION_DENIED, t));
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
        return this.isPositionError(t) && t.code === t.PERMISSION_DENIED ? j("denied") : M(new vt("Failed to request permission", ct.PERMISSION_DENIED, t));
      }
    }
    async getCurrentPosition() {
      try {
        const t = await this.locateTauri();
        return j(this.convertToGeolocationPosition(t));
      } catch (t) {
        return M(new vt("Failed to get current position", ct.POSITION_UNAVAILABLE, t));
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
        const i = lc(), c = (n == null ? void 0 : n.highFrequency) ?? false, l = window.setInterval(async () => {
          try {
            const h = await this.getCurrentPosition();
            h.isOk() && t(h.value);
          } catch (h) {
            console.error("Error in watch position:", h);
          }
        }, c ? 100 : i);
        return this.watchCallbacks.set(l, l), j(l);
      } catch (i) {
        return M(new vt("Failed to start watching position", ct.WATCH_FAILED, i));
      }
    }
    clearWatch(t) {
      try {
        return this.watchCallbacks.has(t) && (clearInterval(t), this.watchCallbacks.delete(t)), j(void 0);
      } catch (n) {
        return M(new vt("Failed to clear watch", ct.CLEAR_WATCH_FAILED, n));
      }
    }
    isSupported() {
      return false;
    }
    isPositionError(t) {
      return typeof t == "object" && t !== null && "code" in t && "message" in t && typeof t.code == "number";
    }
  }
  class C0 {
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
      const c = lc(), l = (i == null ? void 0 : i.highFrequency) ?? false;
      return window.setInterval(() => {
        this.getTauriPosition().then(t).catch((f) => {
          n == null ? void 0 : n(this.createPositionError(f));
        });
      }, l ? 100 : c);
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
  class L0 {
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
      if (!this.isSupported()) return M(new vt("Geolocation is not supported by this browser", ct.UNSUPPORTED));
      const n = await this.getPermissionStatus();
      if (n.isErr()) return M(n.error);
      if (n.value === "prompt" && t) {
        if (!await t(n.value, "permission.location.prompt")) return M(new vt("Geolocation permission denied", ct.PERMISSION_DENIED));
        const c = await this.getPermissionStatus();
        if (c.isErr()) return M(c.error);
        if (c.value === "denied") return M(new vt("Geolocation permission denied", ct.PERMISSION_DENIED));
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
        return M(new vt("Failed to get permission status", ct.PERMISSION_DENIED, t));
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
        return this.isPositionError(t) ? t.code === t.PERMISSION_DENIED ? j("denied") : j("prompt") : M(new vt("Failed to request permission", ct.PERMISSION_DENIED, t));
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
          const c = n.message;
          switch (n.code) {
            case n.PERMISSION_DENIED:
              i = ct.PERMISSION_DENIED;
              break;
            case n.POSITION_UNAVAILABLE:
              i = ct.POSITION_UNAVAILABLE;
              break;
            case n.TIMEOUT:
              i = ct.TIMEOUT;
              break;
            default:
              i = ct.POSITION_UNAVAILABLE;
          }
          t(M(new vt(c, i, new Error(n.message))));
        }, {
          enableHighAccuracy: true,
          timeout: 3e4,
          maximumAge: 0
        });
      });
    }
    async watchPosition(t, n) {
      if (!this.initialized) {
        const h = await this.init();
        if (h.isErr()) return M(h.error);
      }
      const i = lc(), c = Ft("watchCompatibilityMode"), l = (n == null ? void 0 : n.highFrequency) ?? false;
      if (c || l) {
        l ? console.log("[Geolocation] High frequency mode enabled") : console.info("[Geolocation] Using compatibility mode for position watch");
        try {
          const h = Date.now();
          return this.compatibilityModeCallbacks.set(h, t), this.compatibilityIntervalId === null && (this.compatibilityIntervalId = window.setInterval(async () => {
            const f = await this.getCurrentPosition();
            if (f.isOk()) {
              const p = f.value, v = {
                lat: p.coords.latitude,
                lng: p.coords.longitude,
                acc: p.coords.accuracy
              }, g = Date.now();
              if (!(!l && g - this.lastCompatibilityUpdateTime > i) && !l && this.lastCompatibilityPosition && this.lastCompatibilityPosition.lat === v.lat && this.lastCompatibilityPosition.lng === v.lng && this.lastCompatibilityPosition.acc === v.acc) return;
              this.lastCompatibilityPosition = v;
              for (const P of this.compatibilityModeCallbacks.values()) try {
                P(p);
              } catch (O) {
                console.error("[Geolocation] Callback error:", O);
              }
              this.lastCompatibilityUpdateTime = g;
            }
          }, l ? 2e3 : i)), this.compatibilityModeWatches.set(h, this.compatibilityIntervalId), j(h);
        } catch (h) {
          return M(new vt("Failed to start watching position (compatibility mode)", ct.WATCH_FAILED, h));
        }
      }
      try {
        const h = navigator.geolocation.watchPosition(t, (f) => {
          console.error("Geolocation watch error:", f);
        }, {
          enableHighAccuracy: true,
          timeout: 3e4,
          maximumAge: l ? 0 : i
        });
        return j(h);
      } catch (h) {
        return M(new vt("Failed to start watching position", ct.WATCH_FAILED, h));
      }
    }
    clearWatch(t) {
      try {
        return this.compatibilityModeWatches.has(t) ? (this.compatibilityModeCallbacks.delete(t), this.compatibilityModeWatches.delete(t), this.compatibilityModeCallbacks.size === 0 && this.compatibilityIntervalId !== null && (window.clearInterval(this.compatibilityIntervalId), this.compatibilityIntervalId = null, this.lastCompatibilityPosition = null)) : navigator.geolocation.clearWatch(t), j(void 0);
      } catch (n) {
        return M(new vt("Failed to clear watch", ct.CLEAR_WATCH_FAILED, n));
      }
    }
    isSupported() {
      return "geolocation" in navigator;
    }
    isPositionError(t) {
      return typeof t == "object" && t !== null && "code" in t && "message" in t && typeof t.code == "number";
    }
  }
  class k0 {
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
          window.removeEventListener("deviceorientation", h);
        }, c = () => {
          n || (n = true, i(), t(true));
        }, l = () => {
          n || (n = true, i(), t(false));
        }, h = (f) => {
          (f.alpha !== null || f.beta !== null || f.gamma !== null) && c();
        };
        window.addEventListener("deviceorientation", h), setTimeout(l, 1e3);
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
      } catch (c) {
        console.error("Error in device orientation callback:", c);
      }
    }
  }
  D0 = function(e) {
    return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
  };
  function nf(e) {
    if (Object.prototype.hasOwnProperty.call(e, "__esModule")) return e;
    var t = e.default;
    if (typeof t == "function") {
      var n = function i() {
        var c = false;
        try {
          c = this instanceof i;
        } catch {
        }
        return c ? Reflect.construct(t, arguments, this.constructor) : t.apply(this, arguments);
      };
      n.prototype = t.prototype;
    } else n = {};
    return Object.defineProperty(n, "__esModule", {
      value: true
    }), Object.keys(e).forEach(function(i) {
      var c = Object.getOwnPropertyDescriptor(e, i);
      Object.defineProperty(n, i, c.get ? c : {
        enumerable: true,
        get: function() {
          return e[i];
        }
      });
    }), n;
  }
  var Pe = {};
  const x0 = Object.prototype.toString;
  function Jr(e) {
    const t = x0.call(e);
    return t.endsWith("Array]") && !t.includes("Big");
  }
  const F0 = Object.freeze(Object.defineProperty({
    __proto__: null,
    isAnyArray: Jr
  }, Symbol.toStringTag, {
    value: "Module"
  })), j0 = nf(F0);
  function U0(e) {
    var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
    if (!Jr(e)) throw new TypeError("input must be an array");
    if (e.length === 0) throw new TypeError("input must not be empty");
    var n = t.fromIndex, i = n === void 0 ? 0 : n, c = t.toIndex, l = c === void 0 ? e.length : c;
    if (i < 0 || i >= e.length || !Number.isInteger(i)) throw new Error("fromIndex must be a positive integer smaller than length");
    if (l <= i || l > e.length || !Number.isInteger(l)) throw new Error("toIndex must be an integer greater than fromIndex and at most equal to length");
    for (var h = e[i], f = i + 1; f < l; f++) e[f] > h && (h = e[f]);
    return h;
  }
  function G0(e) {
    var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
    if (!Jr(e)) throw new TypeError("input must be an array");
    if (e.length === 0) throw new TypeError("input must not be empty");
    var n = t.fromIndex, i = n === void 0 ? 0 : n, c = t.toIndex, l = c === void 0 ? e.length : c;
    if (i < 0 || i >= e.length || !Number.isInteger(i)) throw new Error("fromIndex must be a positive integer smaller than length");
    if (l <= i || l > e.length || !Number.isInteger(l)) throw new Error("toIndex must be an integer greater than fromIndex and at most equal to length");
    for (var h = e[i], f = i + 1; f < l; f++) e[f] < h && (h = e[f]);
    return h;
  }
  function W0(e) {
    var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
    if (Jr(e)) {
      if (e.length === 0) throw new TypeError("input must not be empty");
    } else throw new TypeError("input must be an array");
    var n;
    if (t.output !== void 0) {
      if (!Jr(t.output)) throw new TypeError("output option must be an array if specified");
      n = t.output;
    } else n = new Array(e.length);
    var i = G0(e), c = U0(e);
    if (i === c) throw new RangeError("minimum and maximum input values are equal. Cannot rescale a constant array");
    var l = t.min, h = l === void 0 ? t.autoMinMax ? i : 0 : l, f = t.max, p = f === void 0 ? t.autoMinMax ? c : 1 : f;
    if (h >= p) throw new RangeError("min option must be smaller than max option");
    for (var v = (p - h) / (c - i), g = 0; g < e.length; g++) n[g] = (e[g] - i) * v + h;
    return n;
  }
  const z0 = Object.freeze(Object.defineProperty({
    __proto__: null,
    default: W0
  }, Symbol.toStringTag, {
    value: "Module"
  })), B0 = nf(z0);
  var Ul;
  function $0() {
    var _oe_instances, e_fn, _e2;
    if (Ul) return Pe;
    Ul = 1, Object.defineProperty(Pe, "__esModule", {
      value: true
    });
    var e = j0, t = B0;
    const n = " ".repeat(2), i = " ".repeat(4);
    function c() {
      return l(this);
    }
    function l(d, o = {}) {
      const { maxRows: s = 15, maxColumns: r = 10, maxNumSize: a = 8, padMinus: u = "auto" } = o;
      return `${d.constructor.name} {
${n}[
${i}${h(d, s, r, a, u)}
${n}]
${n}rows: ${d.rows}
${n}columns: ${d.columns}
}`;
    }
    function h(d, o, s, r, a) {
      const { rows: u, columns: m } = d, w = Math.min(u, o), y = Math.min(m, s), b = [];
      if (a === "auto") {
        a = false;
        e: for (let R = 0; R < w; R++) for (let E = 0; E < y; E++) if (d.get(R, E) < 0) {
          a = true;
          break e;
        }
      }
      for (let R = 0; R < w; R++) {
        let E = [];
        for (let L = 0; L < y; L++) E.push(f(d.get(R, L), r, a));
        b.push(`${E.join(" ")}`);
      }
      return y !== m && (b[b.length - 1] += ` ... ${m - s} more columns`), w !== u && b.push(`... ${u - o} more rows`), b.join(`
${i}`);
    }
    function f(d, o, s) {
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
    function P(d, o) {
      if (o.to1DArray && (o = o.to1DArray()), o.length !== d.columns) throw new RangeError("vector size must be the same as the number of columns");
      return o;
    }
    function O(d, o) {
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
    function fe(d, o, s, r, a) {
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
    function he(d) {
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
        for (let R = 0; R < a; R++) b = d.get(m, R) - s[m], w += b, y += b * b;
        o ? u.push((y - w * w / a) / (a - 1)) : u.push((y - w * w / a) / a);
      }
      return u;
    }
    function Oe(d, o, s) {
      const r = d.rows, a = d.columns, u = [];
      for (let m = 0; m < a; m++) {
        let w = 0, y = 0, b = 0;
        for (let R = 0; R < r; R++) b = d.get(R, m) - s[m], w += b, y += b * b;
        o ? u.push((y - w * w / r) / (r - 1)) : u.push((y - w * w / r) / r);
      }
      return u;
    }
    function de(d, o, s) {
      const r = d.rows, a = d.columns, u = r * a;
      let m = 0, w = 0, y = 0;
      for (let b = 0; b < r; b++) for (let R = 0; R < a; R++) y = d.get(b, R) - s, m += y, w += y * y;
      return o ? (w - m * m / u) / (u - 1) : (w - m * m / u) / u;
    }
    function Ge(d, o) {
      for (let s = 0; s < d.rows; s++) for (let r = 0; r < d.columns; r++) d.set(s, r, d.get(s, r) - o[s]);
    }
    function ht(d, o) {
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
    function Ne(d, o) {
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
    function An(d, o) {
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
        for (let b = 0; b < o; b++) for (let R = 0; R < s; R++) {
          let E = a + Math.round(m() * w);
          y.set(b, R, E);
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
              let R = o.get(w, b) - y * o.get(a, b);
              o.set(w, b, R);
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
        T(this, o);
        let s = [];
        for (let r = 0; r < this.rows; r++) s.push(this.get(r, o));
        return s;
      }
      getColumnVector(o) {
        return oe.columnVector(this.getColumn(o));
      }
      setColumn(o, s) {
        T(this, o), s = O(this, s);
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
        o = O(this, o);
        for (let s = 0; s < this.rows; s++) for (let r = 0; r < this.columns; r++) this.set(s, r, this.get(s, r) + o[s]);
        return this;
      }
      subColumnVector(o) {
        o = O(this, o);
        for (let s = 0; s < this.rows; s++) for (let r = 0; r < this.columns; r++) this.set(s, r, this.get(s, r) - o[s]);
        return this;
      }
      mulColumnVector(o) {
        o = O(this, o);
        for (let s = 0; s < this.rows; s++) for (let r = 0; r < this.columns; r++) this.set(s, r, this.get(s, r) * o[s]);
        return this;
      }
      divColumnVector(o) {
        o = O(this, o);
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
            for (let R = 0; R < r; R++) b += this.get(y, R) * m[R];
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
        const r = this.get(0, 0), a = o.get(0, 0), u = this.get(0, 1), m = o.get(0, 1), w = this.get(1, 0), y = o.get(1, 0), b = this.get(1, 1), R = o.get(1, 1), E = (r + b) * (a + R), L = (w + b) * a, ee = r * (m - R), N = b * (y - a), x = (r + u) * R, ce = (w - r) * (a + m), S = (u - b) * (y + R), Q = E + N - x + S, pe = ee + x, Se = L + N, Ae = E - L + ee + ce;
        return s.set(0, 0, Q), s.set(0, 1, pe), s.set(1, 0, Se), s.set(1, 1, Ae), s;
      }
      strassen3x3(o) {
        o = oe.checkMatrix(o);
        let s = new oe(3, 3);
        const r = this.get(0, 0), a = this.get(0, 1), u = this.get(0, 2), m = this.get(1, 0), w = this.get(1, 1), y = this.get(1, 2), b = this.get(2, 0), R = this.get(2, 1), E = this.get(2, 2), L = o.get(0, 0), ee = o.get(0, 1), N = o.get(0, 2), x = o.get(1, 0), ce = o.get(1, 1), S = o.get(1, 2), Q = o.get(2, 0), pe = o.get(2, 1), Se = o.get(2, 2), Ae = (r + a + u - m - w - R - E) * ce, tt = (r - m) * (-ee + ce), be = w * (-L + ee + x - ce - S - Q + Se), Ee = (-r + m + w) * (L - ee + ce), qe = (m + w) * (-L + ee), _ = r * L, z = (-r + b + R) * (L - N + S), le = (-r + b) * (N - S), Z = (b + R) * (-L + N), nt = (r + a + u - w - y - b - R) * S, $e = R * (-L + N + x - ce - S - Q + pe), Xe = (-u + R + E) * (ce + Q - pe), it = (u - E) * (ce - pe), yt = u * Q, sn = (R + E) * (-Q + pe), pt = (-u + w + y) * (S + Q - Se), gn = (u - y) * (S - Se), On = (w + y) * (-Q + Se), ke = a * x, bt = y * pe, Vt = m * N, Ht = b * ee, gt = E * Se, Ef = _ + yt + ke, If = Ae + Ee + qe + _ + Xe + yt + sn, Tf = _ + z + Z + nt + yt + pt + On, Sf = tt + be + Ee + _ + yt + pt + gn, _f = tt + Ee + qe + _ + bt, Af = yt + pt + gn + On + Vt, Rf = _ + z + le + $e + Xe + it + yt, Of = Xe + it + yt + sn + Ht, Mf = _ + z + le + Z + gt;
        return s.set(0, 0, Ef), s.set(0, 1, If), s.set(0, 2, Tf), s.set(1, 0, Sf), s.set(1, 1, _f), s.set(1, 2, Af), s.set(2, 0, Rf), s.set(2, 1, Of), s.set(2, 2, Mf), s;
      }
      mmulStrassen(o) {
        o = oe.checkMatrix(o);
        let s = this.clone(), r = s.rows, a = s.columns, u = o.rows, m = o.columns;
        a !== u && console.warn(`Multiplying ${r} x ${a} and ${u} x ${m} matrix: dimensions do not match.`);
        function w(E, L, ee) {
          let N = E.rows, x = E.columns;
          if (N === L && x === ee) return E;
          {
            let ce = ve.zeros(L, ee);
            return ce = ce.setSubMatrix(E, 0, 0), ce;
          }
        }
        let y = Math.max(r, u), b = Math.max(a, m);
        s = w(s, y, b), o = w(o, y, b);
        function R(E, L, ee, N) {
          if (ee <= 512 || N <= 512) return E.mmul(L);
          ee % 2 === 1 && N % 2 === 1 ? (E = w(E, ee + 1, N + 1), L = w(L, ee + 1, N + 1)) : ee % 2 === 1 ? (E = w(E, ee + 1, N), L = w(L, ee + 1, N)) : N % 2 === 1 && (E = w(E, ee, N + 1), L = w(L, ee, N + 1));
          let x = parseInt(E.rows / 2, 10), ce = parseInt(E.columns / 2, 10), S = E.subMatrix(0, x - 1, 0, ce - 1), Q = L.subMatrix(0, x - 1, 0, ce - 1), pe = E.subMatrix(0, x - 1, ce, E.columns - 1), Se = L.subMatrix(0, x - 1, ce, L.columns - 1), Ae = E.subMatrix(x, E.rows - 1, 0, ce - 1), tt = L.subMatrix(x, L.rows - 1, 0, ce - 1), be = E.subMatrix(x, E.rows - 1, ce, E.columns - 1), Ee = L.subMatrix(x, L.rows - 1, ce, L.columns - 1), qe = R(ve.add(S, be), ve.add(Q, Ee), x, ce), _ = R(ve.add(Ae, be), Q, x, ce), z = R(S, ve.sub(Se, Ee), x, ce), le = R(be, ve.sub(tt, Q), x, ce), Z = R(ve.add(S, pe), Ee, x, ce), nt = R(ve.sub(Ae, S), ve.add(Q, Se), x, ce), $e = R(ve.sub(pe, be), ve.add(tt, Ee), x, ce), Xe = ve.add(qe, le);
          Xe.sub(Z), Xe.add($e);
          let it = ve.add(z, Z), yt = ve.add(_, le), sn = ve.sub(qe, _);
          sn.add(z), sn.add(nt);
          let pt = ve.zeros(2 * Xe.rows, 2 * Xe.columns);
          return pt = pt.setSubMatrix(Xe, 0, 0), pt = pt.setSubMatrix(it, Xe.rows, 0), pt = pt.setSubMatrix(yt, 0, Xe.columns), pt = pt.setSubMatrix(sn, Xe.rows, Xe.columns), pt.subMatrix(0, ee - 1, 0, N - 1);
        }
        return R(s, o, y, b);
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
        for (let w = 0; w < s; w++) for (let y = 0; y < r; y++) for (let b = 0; b < a; b++) for (let R = 0; R < u; R++) m.set(a * w + b, u * y + R, this.get(w, y) * o.get(b, R));
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
        fe(this, o, s, r, a);
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
        fe(this, s, a, r, u);
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
            return he(this);
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
            return Oe(this, r, a);
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
            return ht(this, r), this;
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
            return Ne(this, r), this;
          }
          case "column": {
            if (r === void 0) r = Ve(this);
            else if (!e.isAnyArray(r)) throw new TypeError("scale must be an array");
            return _n(this, r), this;
          }
          case void 0: {
            if (r === void 0) r = ji(this);
            else if (typeof r != "number") throw new TypeError("scale must be a number");
            return An(this, r), this;
          }
          default:
            throw new Error(`invalid option: ${o}`);
        }
      }
      toString(o) {
        return l(this, o);
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
    ve.prototype.klass = "Matrix", typeof Symbol < "u" && (ve.prototype[/* @__PURE__ */ Symbol.for("nodejs.util.inspect.custom")] = c);
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
        return s === void 0 && (s = o, o = this.rows), g(this, o, true), s = Float64Array.from(P(this, s)), this.data.splice(o, 0, s), this.rows += 1, this;
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
        typeof s > "u" && (s = o, o = this.columns), T(this, o, true), s = O(this, s);
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
    const _jt = class _jt extends ve {
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
        const o = new _jt(this.diagonalSize);
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
        const a = new _jt(r);
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
    let jt = _jt;
    jt.prototype.klassType = "SymmetricMatrix";
    class Rn extends jt {
      static isDistanceMatrix(o) {
        return jt.isSymmetricMatrix(o) && o.klassSubType === "DistanceMatrix";
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
        return new jt(this);
      }
      clone() {
        const o = new Rn(this.diagonalSize);
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
    Rn.prototype.klassSubType = "DistanceMatrix";
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
    class bi extends $t {
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
    class fc extends $t {
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
    class A extends $t {
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
    class k extends $t {
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
    class K extends $t {
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
        fe(o, s, r, a, u), super(o, r - s + 1, u - a + 1), this.startRow = s, this.startColumn = a;
      }
      set(o, s, r) {
        return this.matrix.set(this.startRow + o, this.startColumn + s, r), this;
      }
      get(o, s) {
        return this.matrix.get(this.startRow + o, this.startColumn + s);
      }
    }
    class J extends $t {
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
        let s = o.clone(), r = s.rows, a = s.columns, u = new Float64Array(r), m = 1, w, y, b, R, E, L, ee, N, x;
        for (w = 0; w < r; w++) u[w] = w;
        for (N = new Float64Array(r), y = 0; y < a; y++) {
          for (w = 0; w < r; w++) N[w] = s.get(w, y);
          for (w = 0; w < r; w++) {
            for (x = Math.min(w, y), E = 0, b = 0; b < x; b++) E += s.get(w, b) * N[b];
            N[w] -= E, s.set(w, y, N[w]);
          }
          for (R = y, w = y + 1; w < r; w++) Math.abs(N[w]) > Math.abs(N[R]) && (R = w);
          if (R !== y) {
            for (b = 0; b < a; b++) L = s.get(R, b), s.set(R, b, s.get(y, b)), s.set(y, b, L);
            ee = u[R], u[R] = u[y], u[y] = ee, m = -m;
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
          let R = 0;
          for (m = y; m < r; m++) R = we(R, s.get(m, y));
          if (R !== 0) {
            for (s.get(y, y) < 0 && (R = -R), m = y; m < r; m++) s.set(m, y, s.get(m, y) / R);
            for (s.set(y, y, s.get(y, y) + 1), w = y + 1; w < a; w++) {
              for (b = 0, m = y; m < r; m++) b += s.get(m, y) * s.get(m, w);
              for (b = -b / s.get(y, y), m = y; m < r; m++) s.set(m, w, s.get(m, w) + b * s.get(m, y));
            }
          }
          u[y] = -R;
        }
        this.QR = s, this.Rdiag = u;
      }
      solve(o) {
        o = oe.checkMatrix(o);
        let s = this.QR, r = s.rows;
        if (o.rows !== r) throw new Error("Matrix row dimensions must agree");
        if (!this.isFullRank()) throw new Error("Matrix is rank deficient");
        let a = o.columns, u = o.clone(), m = s.columns, w, y, b, R;
        for (b = 0; b < m; b++) for (y = 0; y < a; y++) {
          for (R = 0, w = b; w < r; w++) R += s.get(w, b) * u.get(w, y);
          for (R = -R / s.get(b, b), w = b; w < r; w++) u.set(w, y, u.get(w, y) + R * s.get(w, b));
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
        let y = !!u, b = !!m, R = false, E;
        if (r < a) if (!w) E = o.clone(), console.warn("Computing SVD on a matrix with more columns than rows. Consider enabling autoTranspose");
        else {
          E = o.transpose(), r = E.rows, a = E.columns, R = true;
          let _ = y;
          y = b, b = _;
        }
        else E = o.clone();
        let L = Math.min(r, a), ee = Math.min(r + 1, a), N = new Float64Array(ee), x = new oe(r, L), ce = new oe(a, a), S = new Float64Array(a), Q = new Float64Array(r), pe = new Float64Array(ee);
        for (let _ = 0; _ < ee; _++) pe[_] = _;
        let Se = Math.min(r - 1, a), Ae = Math.max(0, Math.min(a - 2, r)), tt = Math.max(Se, Ae);
        for (let _ = 0; _ < tt; _++) {
          if (_ < Se) {
            N[_] = 0;
            for (let z = _; z < r; z++) N[_] = we(N[_], E.get(z, _));
            if (N[_] !== 0) {
              E.get(_, _) < 0 && (N[_] = -N[_]);
              for (let z = _; z < r; z++) E.set(z, _, E.get(z, _) / N[_]);
              E.set(_, _, E.get(_, _) + 1);
            }
            N[_] = -N[_];
          }
          for (let z = _ + 1; z < a; z++) {
            if (_ < Se && N[_] !== 0) {
              let le = 0;
              for (let Z = _; Z < r; Z++) le += E.get(Z, _) * E.get(Z, z);
              le = -le / E.get(_, _);
              for (let Z = _; Z < r; Z++) E.set(Z, z, E.get(Z, z) + le * E.get(Z, _));
            }
            S[z] = E.get(_, z);
          }
          if (y && _ < Se) for (let z = _; z < r; z++) x.set(z, _, E.get(z, _));
          if (_ < Ae) {
            S[_] = 0;
            for (let z = _ + 1; z < a; z++) S[_] = we(S[_], S[z]);
            if (S[_] !== 0) {
              S[_ + 1] < 0 && (S[_] = 0 - S[_]);
              for (let z = _ + 1; z < a; z++) S[z] /= S[_];
              S[_ + 1] += 1;
            }
            if (S[_] = -S[_], _ + 1 < r && S[_] !== 0) {
              for (let z = _ + 1; z < r; z++) Q[z] = 0;
              for (let z = _ + 1; z < r; z++) for (let le = _ + 1; le < a; le++) Q[z] += S[le] * E.get(z, le);
              for (let z = _ + 1; z < a; z++) {
                let le = -S[z] / S[_ + 1];
                for (let Z = _ + 1; Z < r; Z++) E.set(Z, z, E.get(Z, z) + le * Q[Z]);
              }
            }
            if (b) for (let z = _ + 1; z < a; z++) ce.set(z, _, S[z]);
          }
        }
        let be = Math.min(a, r + 1);
        if (Se < a && (N[Se] = E.get(Se, Se)), r < be && (N[be - 1] = 0), Ae + 1 < be && (S[Ae] = E.get(Ae, be - 1)), S[be - 1] = 0, y) {
          for (let _ = Se; _ < L; _++) {
            for (let z = 0; z < r; z++) x.set(z, _, 0);
            x.set(_, _, 1);
          }
          for (let _ = Se - 1; _ >= 0; _--) if (N[_] !== 0) {
            for (let z = _ + 1; z < L; z++) {
              let le = 0;
              for (let Z = _; Z < r; Z++) le += x.get(Z, _) * x.get(Z, z);
              le = -le / x.get(_, _);
              for (let Z = _; Z < r; Z++) x.set(Z, z, x.get(Z, z) + le * x.get(Z, _));
            }
            for (let z = _; z < r; z++) x.set(z, _, -x.get(z, _));
            x.set(_, _, 1 + x.get(_, _));
            for (let z = 0; z < _ - 1; z++) x.set(z, _, 0);
          } else {
            for (let z = 0; z < r; z++) x.set(z, _, 0);
            x.set(_, _, 1);
          }
        }
        if (b) for (let _ = a - 1; _ >= 0; _--) {
          if (_ < Ae && S[_] !== 0) for (let z = _ + 1; z < a; z++) {
            let le = 0;
            for (let Z = _ + 1; Z < a; Z++) le += ce.get(Z, _) * ce.get(Z, z);
            le = -le / ce.get(_ + 1, _);
            for (let Z = _ + 1; Z < a; Z++) ce.set(Z, z, ce.get(Z, z) + le * ce.get(Z, _));
          }
          for (let z = 0; z < a; z++) ce.set(z, _, 0);
          ce.set(_, _, 1);
        }
        let Ee = be - 1, qe = Number.EPSILON;
        for (; be > 0; ) {
          let _, z;
          for (_ = be - 2; _ >= -1 && _ !== -1; _--) {
            const le = Number.MIN_VALUE + qe * Math.abs(N[_] + Math.abs(N[_ + 1]));
            if (Math.abs(S[_]) <= le || Number.isNaN(S[_])) {
              S[_] = 0;
              break;
            }
          }
          if (_ === be - 2) z = 4;
          else {
            let le;
            for (le = be - 1; le >= _ && le !== _; le--) {
              let Z = (le !== be ? Math.abs(S[le]) : 0) + (le !== _ + 1 ? Math.abs(S[le - 1]) : 0);
              if (Math.abs(N[le]) <= qe * Z) {
                N[le] = 0;
                break;
              }
            }
            le === _ ? z = 3 : le === be - 1 ? z = 1 : (z = 2, _ = le);
          }
          switch (_++, z) {
            case 1: {
              let le = S[be - 2];
              S[be - 2] = 0;
              for (let Z = be - 2; Z >= _; Z--) {
                let nt = we(N[Z], le), $e = N[Z] / nt, Xe = le / nt;
                if (N[Z] = nt, Z !== _ && (le = -Xe * S[Z - 1], S[Z - 1] = $e * S[Z - 1]), b) for (let it = 0; it < a; it++) nt = $e * ce.get(it, Z) + Xe * ce.get(it, be - 1), ce.set(it, be - 1, -Xe * ce.get(it, Z) + $e * ce.get(it, be - 1)), ce.set(it, Z, nt);
              }
              break;
            }
            case 2: {
              let le = S[_ - 1];
              S[_ - 1] = 0;
              for (let Z = _; Z < be; Z++) {
                let nt = we(N[Z], le), $e = N[Z] / nt, Xe = le / nt;
                if (N[Z] = nt, le = -Xe * S[Z], S[Z] = $e * S[Z], y) for (let it = 0; it < r; it++) nt = $e * x.get(it, Z) + Xe * x.get(it, _ - 1), x.set(it, _ - 1, -Xe * x.get(it, Z) + $e * x.get(it, _ - 1)), x.set(it, Z, nt);
              }
              break;
            }
            case 3: {
              const le = Math.max(Math.abs(N[be - 1]), Math.abs(N[be - 2]), Math.abs(S[be - 2]), Math.abs(N[_]), Math.abs(S[_])), Z = N[be - 1] / le, nt = N[be - 2] / le, $e = S[be - 2] / le, Xe = N[_] / le, it = S[_] / le, yt = ((nt + Z) * (nt - Z) + $e * $e) / 2, sn = Z * $e * (Z * $e);
              let pt = 0;
              (yt !== 0 || sn !== 0) && (yt < 0 ? pt = 0 - Math.sqrt(yt * yt + sn) : pt = Math.sqrt(yt * yt + sn), pt = sn / (yt + pt));
              let gn = (Xe + Z) * (Xe - Z) + pt, On = Xe * it;
              for (let ke = _; ke < be - 1; ke++) {
                let bt = we(gn, On);
                bt === 0 && (bt = Number.MIN_VALUE);
                let Vt = gn / bt, Ht = On / bt;
                if (ke !== _ && (S[ke - 1] = bt), gn = Vt * N[ke] + Ht * S[ke], S[ke] = Vt * S[ke] - Ht * N[ke], On = Ht * N[ke + 1], N[ke + 1] = Vt * N[ke + 1], b) for (let gt = 0; gt < a; gt++) bt = Vt * ce.get(gt, ke) + Ht * ce.get(gt, ke + 1), ce.set(gt, ke + 1, -Ht * ce.get(gt, ke) + Vt * ce.get(gt, ke + 1)), ce.set(gt, ke, bt);
                if (bt = we(gn, On), bt === 0 && (bt = Number.MIN_VALUE), Vt = gn / bt, Ht = On / bt, N[ke] = bt, gn = Vt * S[ke] + Ht * N[ke + 1], N[ke + 1] = -Ht * S[ke] + Vt * N[ke + 1], On = Ht * S[ke + 1], S[ke + 1] = Vt * S[ke + 1], y && ke < r - 1) for (let gt = 0; gt < r; gt++) bt = Vt * x.get(gt, ke) + Ht * x.get(gt, ke + 1), x.set(gt, ke + 1, -Ht * x.get(gt, ke) + Vt * x.get(gt, ke + 1)), x.set(gt, ke, bt);
              }
              S[be - 2] = gn;
              break;
            }
            case 4: {
              if (N[_] <= 0 && (N[_] = N[_] < 0 ? -N[_] : 0, b)) for (let le = 0; le <= Ee; le++) ce.set(le, _, -ce.get(le, _));
              for (; _ < Ee && !(N[_] >= N[_ + 1]); ) {
                let le = N[_];
                if (N[_] = N[_ + 1], N[_ + 1] = le, b && _ < a - 1) for (let Z = 0; Z < a; Z++) le = ce.get(Z, _ + 1), ce.set(Z, _ + 1, ce.get(Z, _)), ce.set(Z, _, le);
                if (y && _ < r - 1) for (let Z = 0; Z < r; Z++) le = x.get(Z, _ + 1), x.set(Z, _ + 1, x.get(Z, _)), x.set(Z, _, le);
                _++;
              }
              be--;
              break;
            }
          }
        }
        if (R) {
          let _ = ce;
          ce = x, x = _;
        }
        this.m = r, this.n = a, this.s = N, this.U = x, this.V = ce;
      }
      solve(o) {
        let s = o, r = this.threshold, a = this.s.length, u = oe.zeros(a, a);
        for (let L = 0; L < a; L++) Math.abs(this.s[L]) <= r ? u.set(L, L, 0) : u.set(L, L, 1 / this.s[L]);
        let m = this.U, w = this.rightSingularVectors, y = w.mmul(u), b = w.rows, R = m.rows, E = oe.zeros(b, R);
        for (let L = 0; L < b; L++) for (let ee = 0; ee < R; ee++) {
          let N = 0;
          for (let x = 0; x < a; x++) N += y.get(L, x) * m.get(ee, x);
          E.set(L, ee, N);
        }
        return E.mmul(s);
      }
      solveForDiagonal(o) {
        return this.solve(oe.diag(o));
      }
      inverse() {
        let o = this.V, s = this.threshold, r = o.rows, a = o.columns, u = new oe(r, this.s.length);
        for (let R = 0; R < r; R++) for (let E = 0; E < a; E++) Math.abs(this.s[E]) > s && u.set(R, E, o.get(R, E) / this.s[E]);
        let m = this.U, w = m.rows, y = m.columns, b = new oe(r, w);
        for (let R = 0; R < r; R++) for (let E = 0; E < w; E++) {
          let L = 0;
          for (let ee = 0; ee < y; ee++) L += u.get(R, ee) * m.get(E, ee);
          b.set(R, E, L);
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
      return d = X.checkMatrix(d), o ? new ye(d).inverse() : Le(d, oe.eye(d.rows));
    }
    function Le(d, o, s = false) {
      return d = X.checkMatrix(d), o = X.checkMatrix(o), s ? new ye(d).solve(o) : d.isSquare() ? new V(d).solve(o) : new ae(d).solve(o);
    }
    function je(d) {
      if (d = oe.checkMatrix(d), d.isSquare()) {
        if (d.columns === 0) return 1;
        let o, s, r, a;
        if (d.columns === 2) return o = d.get(0, 0), s = d.get(0, 1), r = d.get(1, 0), a = d.get(1, 1), o * a - s * r;
        if (d.columns === 3) {
          let u, m, w;
          return u = new K(d, [
            1,
            2
          ], [
            1,
            2
          ]), m = new K(d, [
            1,
            2
          ], [
            0,
            2
          ]), w = new K(d, [
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
    function St(d, o, s, r = 1e-9, a = 1e-9) {
      if (d > a) return new Array(o.rows + 1).fill(0);
      {
        let u = o.addRow(s, [
          0
        ]);
        for (let m = 0; m < u.rows; m++) Math.abs(u.get(m, 0)) < r && u.set(m, 0, 0);
        return u.to1DArray();
      }
    }
    function _t(d, o = {}) {
      const { thresholdValue: s = 1e-9, thresholdError: r = 1e-9 } = o;
      d = oe.checkMatrix(d);
      let a = d.rows, u = new oe(a, a);
      for (let m = 0; m < a; m++) {
        let w = oe.columnVector(d.getRow(m)), y = d.subMatrixRow(Ue(a, m)).transpose(), R = new ye(y).solve(w), E = oe.sub(w, y.mmul(R)).abs().max();
        u.setRow(m, St(E, R, m, s, r));
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
    function vi(d, o = d, s = {}) {
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
      for (let b = 0; b < y.rows; b++) for (let R = 0; R < y.columns; R++) y.set(b, R, y.get(b, R) * (1 / (m[b] * w[R])) * (1 / (d.rows - 1)));
      return y;
    }
    class dr {
      constructor(o, s = {}) {
        const { assumeSymmetric: r = false } = s;
        if (o = X.checkMatrix(o), !o.isSquare()) throw new Error("Matrix is not a square matrix");
        if (o.isEmpty()) throw new Error("Matrix must be non-empty");
        let a = o.columns, u = new oe(a, a), m = new Float64Array(a), w = new Float64Array(a), y = o, b, R, E = false;
        if (r ? E = true : E = o.isSymmetric(), E) {
          for (b = 0; b < a; b++) for (R = 0; R < a; R++) u.set(b, R, y.get(b, R));
          Nt(a, w, m, u), en(a, w, m, u);
        } else {
          let L = new oe(a, a), ee = new Float64Array(a);
          for (R = 0; R < a; R++) for (b = 0; b < a; b++) L.set(b, R, y.get(b, R));
          ro(a, L, ee, u), oo(a, w, m, u, L);
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
      let a, u, m, w, y, b, R, E;
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
          for (R = a / (m + m), y = 0; y < w; y++) o[y] -= R * s[y];
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
      let a, u, m, w, y, b, R, E, L, ee, N, x, ce, S, Q, pe;
      for (m = 1; m < d; m++) o[m - 1] = o[m];
      o[d - 1] = 0;
      let Se = 0, Ae = 0, tt = Number.EPSILON;
      for (b = 0; b < d; b++) {
        for (Ae = Math.max(Ae, Math.abs(s[b]) + Math.abs(o[b])), R = b; R < d && !(Math.abs(o[R]) <= tt * Ae); ) R++;
        if (R > b) do {
          for (a = s[b], E = (s[b + 1] - a) / (2 * o[b]), L = we(E, 1), E < 0 && (L = -L), s[b] = o[b] / (E + L), s[b + 1] = o[b] * (E + L), ee = s[b + 1], u = a - s[b], m = b + 2; m < d; m++) s[m] -= u;
          for (Se = Se + u, E = s[R], N = 1, x = N, ce = N, S = o[b + 1], Q = 0, pe = 0, m = R - 1; m >= b; m--) for (ce = x, x = N, pe = Q, a = N * o[m], u = N * E, L = we(E, o[m]), o[m + 1] = Q * L, Q = o[m] / L, N = E / L, E = N * s[m] - Q * a, s[m + 1] = u + Q * (N * a + Q * s[m]), y = 0; y < d; y++) u = r.get(y, m + 1), r.set(y, m + 1, Q * r.get(y, m) + N * u), r.set(y, m, N * r.get(y, m) - Q * u);
          E = -Q * pe * ce * S * o[b] / ee, o[b] = Q * E, s[b] = N * E;
        } while (Math.abs(o[b]) > tt * Ae);
        s[b] = s[b] + Se, o[b] = 0;
      }
      for (m = 0; m < d - 1; m++) {
        for (y = m, E = s[m], w = m + 1; w < d; w++) s[w] < E && (y = w, E = s[w]);
        if (y !== m) for (s[y] = s[m], s[m] = E, w = 0; w < d; w++) E = r.get(w, m), r.set(w, m, r.get(w, y)), r.set(w, y, E);
      }
    }
    function ro(d, o, s, r) {
      let a = 0, u = d - 1, m, w, y, b, R, E, L;
      for (E = a + 1; E <= u - 1; E++) {
        for (L = 0, b = E; b <= u; b++) L = L + Math.abs(o.get(b, E - 1));
        if (L !== 0) {
          for (y = 0, b = u; b >= E; b--) s[b] = o.get(b, E - 1) / L, y += s[b] * s[b];
          for (w = Math.sqrt(y), s[E] > 0 && (w = -w), y = y - s[E] * w, s[E] = s[E] - w, R = E; R < d; R++) {
            for (m = 0, b = u; b >= E; b--) m += s[b] * o.get(b, R);
            for (m = m / y, b = E; b <= u; b++) o.set(b, R, o.get(b, R) - m * s[b]);
          }
          for (b = 0; b <= u; b++) {
            for (m = 0, R = u; R >= E; R--) m += s[R] * o.get(b, R);
            for (m = m / y, R = E; R <= u; R++) o.set(b, R, o.get(b, R) - m * s[R]);
          }
          s[E] = L * s[E], o.set(E, E - 1, L * w);
        }
      }
      for (b = 0; b < d; b++) for (R = 0; R < d; R++) r.set(b, R, b === R ? 1 : 0);
      for (E = u - 1; E >= a + 1; E--) if (o.get(E, E - 1) !== 0) {
        for (b = E + 1; b <= u; b++) s[b] = o.get(b, E - 1);
        for (R = E; R <= u; R++) {
          for (w = 0, b = E; b <= u; b++) w += s[b] * r.get(b, R);
          for (w = w / s[E] / o.get(E, E - 1), b = E; b <= u; b++) r.set(b, R, r.get(b, R) + w * s[b]);
        }
      }
    }
    function oo(d, o, s, r, a) {
      let u = d - 1, m = 0, w = d - 1, y = Number.EPSILON, b = 0, R = 0, E = 0, L = 0, ee = 0, N = 0, x = 0, ce = 0, S, Q, pe, Se, Ae, tt, be, Ee, qe, _, z, le, Z, nt, $e;
      for (S = 0; S < d; S++) for ((S < m || S > w) && (s[S] = a.get(S, S), o[S] = 0), Q = Math.max(S - 1, 0); Q < d; Q++) R = R + Math.abs(a.get(S, Q));
      for (; u >= m; ) {
        for (Se = u; Se > m && (N = Math.abs(a.get(Se - 1, Se - 1)) + Math.abs(a.get(Se, Se)), N === 0 && (N = R), !(Math.abs(a.get(Se, Se - 1)) < y * N)); ) Se--;
        if (Se === u) a.set(u, u, a.get(u, u) + b), s[u] = a.get(u, u), o[u] = 0, u--, ce = 0;
        else if (Se === u - 1) {
          if (be = a.get(u, u - 1) * a.get(u - 1, u), E = (a.get(u - 1, u - 1) - a.get(u, u)) / 2, L = E * E + be, x = Math.sqrt(Math.abs(L)), a.set(u, u, a.get(u, u) + b), a.set(u - 1, u - 1, a.get(u - 1, u - 1) + b), Ee = a.get(u, u), L >= 0) {
            for (x = E >= 0 ? E + x : E - x, s[u - 1] = Ee + x, s[u] = s[u - 1], x !== 0 && (s[u] = Ee - be / x), o[u - 1] = 0, o[u] = 0, Ee = a.get(u, u - 1), N = Math.abs(Ee) + Math.abs(x), E = Ee / N, L = x / N, ee = Math.sqrt(E * E + L * L), E = E / ee, L = L / ee, Q = u - 1; Q < d; Q++) x = a.get(u - 1, Q), a.set(u - 1, Q, L * x + E * a.get(u, Q)), a.set(u, Q, L * a.get(u, Q) - E * x);
            for (S = 0; S <= u; S++) x = a.get(S, u - 1), a.set(S, u - 1, L * x + E * a.get(S, u)), a.set(S, u, L * a.get(S, u) - E * x);
            for (S = m; S <= w; S++) x = r.get(S, u - 1), r.set(S, u - 1, L * x + E * r.get(S, u)), r.set(S, u, L * r.get(S, u) - E * x);
          } else s[u - 1] = Ee + E, s[u] = Ee + E, o[u - 1] = x, o[u] = -x;
          u = u - 2, ce = 0;
        } else {
          if (Ee = a.get(u, u), qe = 0, be = 0, Se < u && (qe = a.get(u - 1, u - 1), be = a.get(u, u - 1) * a.get(u - 1, u)), ce === 10) {
            for (b += Ee, S = m; S <= u; S++) a.set(S, S, a.get(S, S) - Ee);
            N = Math.abs(a.get(u, u - 1)) + Math.abs(a.get(u - 1, u - 2)), Ee = qe = 0.75 * N, be = -0.4375 * N * N;
          }
          if (ce === 30 && (N = (qe - Ee) / 2, N = N * N + be, N > 0)) {
            for (N = Math.sqrt(N), qe < Ee && (N = -N), N = Ee - be / ((qe - Ee) / 2 + N), S = m; S <= u; S++) a.set(S, S, a.get(S, S) - N);
            b += N, Ee = qe = be = 0.964;
          }
          for (ce = ce + 1, Ae = u - 2; Ae >= Se && (x = a.get(Ae, Ae), ee = Ee - x, N = qe - x, E = (ee * N - be) / a.get(Ae + 1, Ae) + a.get(Ae, Ae + 1), L = a.get(Ae + 1, Ae + 1) - x - ee - N, ee = a.get(Ae + 2, Ae + 1), N = Math.abs(E) + Math.abs(L) + Math.abs(ee), E = E / N, L = L / N, ee = ee / N, !(Ae === Se || Math.abs(a.get(Ae, Ae - 1)) * (Math.abs(L) + Math.abs(ee)) < y * (Math.abs(E) * (Math.abs(a.get(Ae - 1, Ae - 1)) + Math.abs(x) + Math.abs(a.get(Ae + 1, Ae + 1)))))); ) Ae--;
          for (S = Ae + 2; S <= u; S++) a.set(S, S - 2, 0), S > Ae + 2 && a.set(S, S - 3, 0);
          for (pe = Ae; pe <= u - 1 && (nt = pe !== u - 1, pe !== Ae && (E = a.get(pe, pe - 1), L = a.get(pe + 1, pe - 1), ee = nt ? a.get(pe + 2, pe - 1) : 0, Ee = Math.abs(E) + Math.abs(L) + Math.abs(ee), Ee !== 0 && (E = E / Ee, L = L / Ee, ee = ee / Ee)), Ee !== 0); pe++) if (N = Math.sqrt(E * E + L * L + ee * ee), E < 0 && (N = -N), N !== 0) {
            for (pe !== Ae ? a.set(pe, pe - 1, -N * Ee) : Se !== Ae && a.set(pe, pe - 1, -a.get(pe, pe - 1)), E = E + N, Ee = E / N, qe = L / N, x = ee / N, L = L / E, ee = ee / E, Q = pe; Q < d; Q++) E = a.get(pe, Q) + L * a.get(pe + 1, Q), nt && (E = E + ee * a.get(pe + 2, Q), a.set(pe + 2, Q, a.get(pe + 2, Q) - E * x)), a.set(pe, Q, a.get(pe, Q) - E * Ee), a.set(pe + 1, Q, a.get(pe + 1, Q) - E * qe);
            for (S = 0; S <= Math.min(u, pe + 3); S++) E = Ee * a.get(S, pe) + qe * a.get(S, pe + 1), nt && (E = E + x * a.get(S, pe + 2), a.set(S, pe + 2, a.get(S, pe + 2) - E * ee)), a.set(S, pe, a.get(S, pe) - E), a.set(S, pe + 1, a.get(S, pe + 1) - E * L);
            for (S = m; S <= w; S++) E = Ee * r.get(S, pe) + qe * r.get(S, pe + 1), nt && (E = E + x * r.get(S, pe + 2), r.set(S, pe + 2, r.get(S, pe + 2) - E * ee)), r.set(S, pe, r.get(S, pe) - E), r.set(S, pe + 1, r.get(S, pe + 1) - E * L);
          }
        }
      }
      if (R !== 0) {
        for (u = d - 1; u >= 0; u--) if (E = s[u], L = o[u], L === 0) for (Se = u, a.set(u, u, 1), S = u - 1; S >= 0; S--) {
          for (be = a.get(S, S) - E, ee = 0, Q = Se; Q <= u; Q++) ee = ee + a.get(S, Q) * a.get(Q, u);
          if (o[S] < 0) x = be, N = ee;
          else if (Se = S, o[S] === 0 ? a.set(S, u, be !== 0 ? -ee / be : -ee / (y * R)) : (Ee = a.get(S, S + 1), qe = a.get(S + 1, S), L = (s[S] - E) * (s[S] - E) + o[S] * o[S], tt = (Ee * N - x * ee) / L, a.set(S, u, tt), a.set(S + 1, u, Math.abs(Ee) > Math.abs(x) ? (-ee - be * tt) / Ee : (-N - qe * tt) / x)), tt = Math.abs(a.get(S, u)), y * tt * tt > 1) for (Q = S; Q <= u; Q++) a.set(Q, u, a.get(Q, u) / tt);
        }
        else if (L < 0) for (Se = u - 1, Math.abs(a.get(u, u - 1)) > Math.abs(a.get(u - 1, u)) ? (a.set(u - 1, u - 1, L / a.get(u, u - 1)), a.set(u - 1, u, -(a.get(u, u) - E) / a.get(u, u - 1))) : ($e = so(0, -a.get(u - 1, u), a.get(u - 1, u - 1) - E, L), a.set(u - 1, u - 1, $e[0]), a.set(u - 1, u, $e[1])), a.set(u, u - 1, 0), a.set(u, u, 1), S = u - 2; S >= 0; S--) {
          for (_ = 0, z = 0, Q = Se; Q <= u; Q++) _ = _ + a.get(S, Q) * a.get(Q, u - 1), z = z + a.get(S, Q) * a.get(Q, u);
          if (be = a.get(S, S) - E, o[S] < 0) x = be, ee = _, N = z;
          else if (Se = S, o[S] === 0 ? ($e = so(-_, -z, be, L), a.set(S, u - 1, $e[0]), a.set(S, u, $e[1])) : (Ee = a.get(S, S + 1), qe = a.get(S + 1, S), le = (s[S] - E) * (s[S] - E) + o[S] * o[S] - L * L, Z = (s[S] - E) * 2 * L, le === 0 && Z === 0 && (le = y * R * (Math.abs(be) + Math.abs(L) + Math.abs(Ee) + Math.abs(qe) + Math.abs(x))), $e = so(Ee * ee - x * _ + L * z, Ee * N - x * z - L * _, le, Z), a.set(S, u - 1, $e[0]), a.set(S, u, $e[1]), Math.abs(Ee) > Math.abs(x) + Math.abs(L) ? (a.set(S + 1, u - 1, (-_ - be * a.get(S, u - 1) + L * a.get(S, u)) / Ee), a.set(S + 1, u, (-z - be * a.get(S, u) - L * a.get(S, u - 1)) / Ee)) : ($e = so(-ee - qe * a.get(S, u - 1), -N - qe * a.get(S, u), x, L), a.set(S + 1, u - 1, $e[0]), a.set(S + 1, u, $e[1]))), tt = Math.max(Math.abs(a.get(S, u - 1)), Math.abs(a.get(S, u))), y * tt * tt > 1) for (Q = S; Q <= u; Q++) a.set(Q, u - 1, a.get(Q, u - 1) / tt), a.set(Q, u, a.get(Q, u) / tt);
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
    class dc {
      constructor(o) {
        if (o = X.checkMatrix(o), !o.isSymmetric()) throw new Error("Matrix is not symmetric");
        let s = o, r = s.rows, a = new oe(r, r), u = true, m, w, y;
        for (w = 0; w < r; w++) {
          let b = 0;
          for (y = 0; y < w; y++) {
            let R = 0;
            for (m = 0; m < y; m++) R += a.get(y, m) * a.get(w, m);
            R = (s.get(w, y) - R) / a.get(y, y), a.set(w, y, R), b = b + R * R;
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
    class pc {
      constructor(o, s = {}) {
        o = X.checkMatrix(o);
        let { Y: r } = s;
        const { scaleScores: a = false, maxIterations: u = 1e3, terminationCriteria: m = 1e-10 } = s;
        let w;
        if (r) {
          if (e.isAnyArray(r) && typeof r[0] == "number" ? r = oe.columnVector(r) : r = X.checkMatrix(r), r.rows !== o.rows) throw new Error("Y should have the same number of rows as X");
          w = r.getColumnVector(0);
        } else w = o.getColumnVector(0);
        let y = 1, b, R, E, L;
        for (let ee = 0; ee < u && y > m; ee++) E = o.transpose().mmul(w).div(w.transpose().mmul(w).get(0, 0)), E = E.div(E.norm()), b = o.mmul(E).div(E.transpose().mmul(E).get(0, 0)), ee > 0 && (y = b.clone().sub(L).pow(2).sum()), L = b.clone(), r ? (R = r.transpose().mmul(b).div(b.transpose().mmul(b).get(0, 0)), R = R.div(R.norm()), w = r.mmul(R).div(R.transpose().mmul(R).get(0, 0))) : w = b;
        if (r) {
          let ee = o.transpose().mmul(b).div(b.transpose().mmul(b).get(0, 0));
          ee = ee.div(ee.norm());
          let N = o.clone().sub(b.clone().mmul(ee.transpose())), x = w.transpose().mmul(b).div(b.transpose().mmul(b).get(0, 0)), ce = r.clone().sub(b.clone().mulS(x.get(0, 0)).mmul(R.transpose()));
          this.t = b, this.p = ee.transpose(), this.w = E.transpose(), this.q = R, this.u = w, this.s = b.transpose().mmul(b), this.xResidual = N, this.yResidual = ce, this.betas = x;
        } else this.w = E.transpose(), this.s = b.transpose().mmul(b).sqrt(), a ? this.t = b.clone().div(this.s.get(0, 0)) : this.t = b, this.xResidual = o.sub(b.mmul(E.transpose()));
      }
    }
    return Pe.AbstractMatrix = ve, Pe.CHO = dc, Pe.CholeskyDecomposition = dc, Pe.DistanceMatrix = Rn, Pe.EVD = dr, Pe.EigenvalueDecomposition = dr, Pe.LU = V, Pe.LuDecomposition = V, Pe.Matrix = oe, Pe.MatrixColumnSelectionView = bi, Pe.MatrixColumnView = io, Pe.MatrixFlipColumnView = fc, Pe.MatrixFlipRowView = I, Pe.MatrixRowSelectionView = k, Pe.MatrixRowView = A, Pe.MatrixSelectionView = K, Pe.MatrixSubView = q, Pe.MatrixTransposeView = J, Pe.NIPALS = pc, Pe.Nipals = pc, Pe.QR = ae, Pe.QrDecomposition = ae, Pe.SVD = ye, Pe.SingularValueDecomposition = ye, Pe.SymmetricMatrix = jt, Pe.WrapperMatrix1D = se, Pe.WrapperMatrix2D = X, Pe.correlation = vi, Pe.covariance = Qt, Pe.default = oe, Pe.determinant = je, Pe.inverse = Te, Pe.linearDependencies = _t, Pe.pseudoInverse = Xt, Pe.solve = Le, Pe.wrap = ie, Pe;
  }
  var Rs = $0();
  const Gl = D0(Rs), ze = Rs.Matrix;
  Gl.Matrix ? Gl.Matrix : Rs.Matrix;
  const Wl = Rs.inverse;
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
      this.boundHandleMotionEvent = this.handleMotionEvent.bind(this), this.boundHandleOrientationEvent = this.handleOrientationEvent.bind(this), this.matrixRz = ze.zeros(3, 3), this.matrixRy = ze.zeros(3, 3), this.matrixRx = ze.zeros(3, 3), this.matrixR = ze.zeros(3, 3), this.matrixRTemp = ze.zeros(3, 3), this.vectorInput = ze.zeros(3, 1), this.vectorOutput = ze.zeros(3, 1), this.gravityENU = new ze([
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
          window.removeEventListener("deviceorientation", h), window.removeEventListener("devicemotion", f);
        }, c = () => {
          n || (n = true, i(), t(true));
        }, l = () => {
          n || (n = true, i(), t(false));
        }, h = (p) => {
          (p.alpha !== null || p.beta !== null || p.gamma !== null) && c();
        }, f = (p) => {
          (p.acceleration || p.accelerationIncludingGravity || p.rotationRate) && c();
        };
        window.addEventListener("deviceorientation", h), window.addEventListener("devicemotion", f), setTimeout(l, 1e3);
      });
    }
    async startAcceleration(t = {}) {
      if (this.disposed) return M(new xe("IMU provider has been disposed"));
      if (!this.initialized) {
        const n = await this.init();
        if (n.isErr()) return M(n.error);
      }
      if (this.isAccelerationActive) return j(void 0);
      this.normalizeAccelerationToENU = t.normalizeToENU ?? false, this.accelerationIntervalMs = t.frequency && t.frequency > 0 ? Math.floor(1e3 / t.frequency) : 0, this.accelerationPrevReading = null, this.accelerationAccumulatedX = 0, this.accelerationAccumulatedY = 0, this.accelerationAccumulatedZ = 0, this.accelerationAccumulatedTime = 0, this.accelerationLastEmitTime = 0, this.accelerationTimer !== null && (clearTimeout(this.accelerationTimer), this.accelerationTimer = null);
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
      this.normalizeGyroscopeToENU = t.normalizeToENU ?? false, this.gyroscopeIntervalMs = t.frequency && t.frequency > 0 ? Math.floor(1e3 / t.frequency) : 0, this.gyroscopePrevReading = null, this.gyroscopeAccumulatedX = 0, this.gyroscopeAccumulatedY = 0, this.gyroscopeAccumulatedZ = 0, this.gyroscopeAccumulatedTime = 0, this.gyroscopeLastEmitTime = 0, this.gyroscopeTimer !== null && (clearTimeout(this.gyroscopeTimer), this.gyroscopeTimer = null);
      try {
        return this.motionEventListenerCount === 0 && window.addEventListener("devicemotion", this.boundHandleMotionEvent, true), this.motionEventListenerCount++, this.isGyroscopeActive = true, j(void 0);
      } catch (n) {
        return M(new xe("Failed to start gyroscope monitoring", void 0, n));
      }
    }
    stopAcceleration() {
      if (!this.isAccelerationActive) return j(void 0);
      try {
        return this.motionEventListenerCount--, this.isAccelerationActive = false, this.lastAccelerationReading = null, this.normalizeAccelerationToENU = false, this.accelerationIntervalMs = 0, this.accelerationPrevReading = null, this.accelerationAccumulatedX = 0, this.accelerationAccumulatedY = 0, this.accelerationAccumulatedZ = 0, this.accelerationAccumulatedTime = 0, this.accelerationLastEmitTime = 0, this.accelerationTimer !== null && (clearTimeout(this.accelerationTimer), this.accelerationTimer = null), this.motionEventListenerCount === 0 && window.removeEventListener("devicemotion", this.boundHandleMotionEvent, true), j(void 0);
      } catch (t) {
        return M(new xe("Failed to stop acceleration monitoring", void 0, t));
      }
    }
    stopGyroscope() {
      if (!this.isGyroscopeActive) return j(void 0);
      try {
        return this.motionEventListenerCount--, this.isGyroscopeActive = false, this.lastGyroscopeReading = null, this.normalizeGyroscopeToENU = false, this.gyroscopeIntervalMs = 0, this.gyroscopePrevReading = null, this.gyroscopeAccumulatedX = 0, this.gyroscopeAccumulatedY = 0, this.gyroscopeAccumulatedZ = 0, this.gyroscopeAccumulatedTime = 0, this.gyroscopeLastEmitTime = 0, this.gyroscopeTimer !== null && (clearTimeout(this.gyroscopeTimer), this.gyroscopeTimer = null), this.motionEventListenerCount === 0 && window.removeEventListener("devicemotion", this.boundHandleMotionEvent, true), j(void 0);
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
    addAccelerationReading(t) {
      if (this.accelerationIntervalMs === 0) {
        this.lastAccelerationReading = t, this.notifyListeners(this.accelerationListeners, t, "acceleration");
        return;
      }
      if (this.accelerationPrevReading === null) {
        this.accelerationPrevReading = t, this.accelerationAccumulatedX = t.x, this.accelerationAccumulatedY = t.y, this.accelerationAccumulatedZ = t.z, this.accelerationAccumulatedTime = 0, this.accelerationLastEmitTime = t.timestamp, this.accelerationTimer === null && (this.accelerationTimer = window.setTimeout(() => this.flushAccelerationReadings(), this.accelerationIntervalMs));
        return;
      }
      const n = t.timestamp - this.accelerationPrevReading.timestamp;
      if (n <= 0) {
        this.accelerationPrevReading = t;
        return;
      }
      this.accelerationAccumulatedX += t.x * n, this.accelerationAccumulatedY += t.y * n, this.accelerationAccumulatedZ += t.z * n, this.accelerationAccumulatedTime += n, t.timestamp - this.accelerationLastEmitTime >= this.accelerationIntervalMs ? (this.flushAccelerationReadings(), this.accelerationPrevReading = t, this.accelerationAccumulatedX = t.x, this.accelerationAccumulatedY = t.y, this.accelerationAccumulatedZ = t.z, this.accelerationAccumulatedTime = 0, this.accelerationLastEmitTime = t.timestamp, this.accelerationTimer !== null && clearTimeout(this.accelerationTimer), this.accelerationTimer = window.setTimeout(() => this.flushAccelerationReadings(), this.accelerationIntervalMs)) : this.accelerationPrevReading = t;
    }
    flushAccelerationReadings() {
      if (this.accelerationPrevReading === null) {
        this.accelerationTimer !== null && (clearTimeout(this.accelerationTimer), this.accelerationTimer = null);
        return;
      }
      let t;
      if (this.accelerationAccumulatedTime === 0) t = this.accelerationPrevReading;
      else {
        const n = this.accelerationAccumulatedX / this.accelerationAccumulatedTime, i = this.accelerationAccumulatedY / this.accelerationAccumulatedTime, c = this.accelerationAccumulatedZ / this.accelerationAccumulatedTime;
        t = {
          x: n,
          y: i,
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
      const n = t.timestamp - this.gyroscopePrevReading.timestamp;
      if (n <= 0) {
        this.gyroscopePrevReading = t;
        return;
      }
      this.gyroscopeAccumulatedX += t.x * n, this.gyroscopeAccumulatedY += t.y * n, this.gyroscopeAccumulatedZ += t.z * n, this.gyroscopeAccumulatedTime += n, t.timestamp - this.gyroscopeLastEmitTime >= this.gyroscopeIntervalMs ? (this.flushGyroscopeReadings(), this.gyroscopePrevReading = t, this.gyroscopeAccumulatedX = t.x, this.gyroscopeAccumulatedY = t.y, this.gyroscopeAccumulatedZ = t.z, this.gyroscopeAccumulatedTime = 0, this.gyroscopeLastEmitTime = t.timestamp, this.gyroscopeTimer !== null && clearTimeout(this.gyroscopeTimer), this.gyroscopeTimer = window.setTimeout(() => this.flushGyroscopeReadings(), this.gyroscopeIntervalMs)) : this.gyroscopePrevReading = t;
    }
    flushGyroscopeReadings() {
      if (this.gyroscopePrevReading === null) {
        this.gyroscopeTimer !== null && (clearTimeout(this.gyroscopeTimer), this.gyroscopeTimer = null);
        return;
      }
      let t;
      if (this.gyroscopeAccumulatedTime === 0) t = this.gyroscopePrevReading;
      else {
        const n = this.gyroscopeAccumulatedX / this.gyroscopeAccumulatedTime, i = this.gyroscopeAccumulatedY / this.gyroscopeAccumulatedTime, c = this.gyroscopeAccumulatedZ / this.gyroscopeAccumulatedTime;
        t = {
          x: n,
          y: i,
          z: c,
          timestamp: this.gyroscopePrevReading.timestamp
        };
      }
      this.lastGyroscopeReading = t, this.notifyListeners(this.gyroscopeListeners, t, "gyroscope"), this.gyroscopePrevReading = null, this.gyroscopeAccumulatedX = 0, this.gyroscopeAccumulatedY = 0, this.gyroscopeAccumulatedZ = 0, this.gyroscopeAccumulatedTime = 0, this.gyroscopeTimer !== null && (clearTimeout(this.gyroscopeTimer), this.gyroscopeTimer = null);
    }
    processAccelerationData(t, n) {
      let i = t.acceleration, c = false;
      if ((!i || i.x === null || i.y === null || i.z === null) && (i = t.accelerationIncludingGravity, c = true), !i || i.x === null || i.y === null || i.z === null) return;
      let l = i.x, h = i.y, f = i.z;
      if (c && this.deviceOrientation) {
        const v = this.computeGravityInDeviceFrame(this.deviceOrientation);
        l -= v.x, h -= v.y, f -= v.z;
      }
      let p;
      this.normalizeAccelerationToENU && this.deviceOrientation ? p = this.transformToENU(l, h, f, n, this.deviceOrientation) : p = {
        x: l,
        y: h,
        z: f,
        timestamp: n
      }, this.addAccelerationReading(p);
    }
    processGyroscopeData(t, n) {
      const i = t.rotationRate;
      if (!i || i.alpha === null || i.beta === null || i.gamma === null) return;
      const c = i.beta, l = i.gamma, h = i.alpha;
      let f;
      this.normalizeGyroscopeToENU && this.deviceOrientation ? f = this.transformToENU(c, l, h, n, this.deviceOrientation) : f = {
        x: c,
        y: l,
        z: h,
        timestamp: n
      }, this.addGyroscopeReading(f);
    }
    notifyListeners(t, n, i) {
      for (const c of t.values()) try {
        c(n);
      } catch (l) {
        console.error(`Error in ${i} callback:`, l);
      }
    }
    updateRotationMatrices(t) {
      const n = t.alpha * _jr.DEG_TO_RAD, i = t.beta * _jr.DEG_TO_RAD, c = t.gamma * _jr.DEG_TO_RAD, l = Math.cos(n), h = Math.sin(n), f = Math.cos(i), p = Math.sin(i), v = Math.cos(c), g = Math.sin(c);
      this.matrixRz.set(0, 0, l), this.matrixRz.set(0, 1, -h), this.matrixRz.set(0, 2, 0), this.matrixRz.set(1, 0, h), this.matrixRz.set(1, 1, l), this.matrixRz.set(1, 2, 0), this.matrixRz.set(2, 0, 0), this.matrixRz.set(2, 1, 0), this.matrixRz.set(2, 2, 1), this.matrixRy.set(0, 0, f), this.matrixRy.set(0, 1, 0), this.matrixRy.set(0, 2, p), this.matrixRy.set(1, 0, 0), this.matrixRy.set(1, 1, 1), this.matrixRy.set(1, 2, 0), this.matrixRy.set(2, 0, -p), this.matrixRy.set(2, 1, 0), this.matrixRy.set(2, 2, f), this.matrixRx.set(0, 0, 1), this.matrixRx.set(0, 1, 0), this.matrixRx.set(0, 2, 0), this.matrixRx.set(1, 0, 0), this.matrixRx.set(1, 1, v), this.matrixRx.set(1, 2, -g), this.matrixRx.set(2, 0, 0), this.matrixRx.set(2, 1, g), this.matrixRx.set(2, 2, v), this.multiplyMatricesInPlace(this.matrixRz, this.matrixRy, this.matrixRTemp), this.multiplyMatricesInPlace(this.matrixRTemp, this.matrixRx, this.matrixR);
    }
    multiplyMatricesInPlace(t, n, i) {
      for (let c = 0; c < 3; c++) for (let l = 0; l < 3; l++) {
        let h = 0;
        for (let f = 0; f < 3; f++) h += t.get(c, f) * n.get(f, l);
        i.set(c, l, h);
      }
    }
    multiplyMatrixVectorInPlace(t, n, i) {
      for (let c = 0; c < 3; c++) {
        let l = 0;
        for (let h = 0; h < 3; h++) l += t.get(c, h) * n.get(h, 0);
        i.set(c, 0, l);
      }
    }
    transformToENU(t, n, i, c, l) {
      return this.updateRotationMatrices(l), this.vectorInput.set(0, 0, t), this.vectorInput.set(1, 0, n), this.vectorInput.set(2, 0, i), this.multiplyMatrixVectorInPlace(this.matrixR, this.vectorInput, this.vectorOutput), {
        x: this.vectorOutput.get(0, 0),
        y: this.vectorOutput.get(1, 0),
        z: this.vectorOutput.get(2, 0),
        timestamp: c
      };
    }
    computeGravityInDeviceFrame(t) {
      this.updateRotationMatrices(t);
      let n = 0, i = 0, c = 0;
      for (let l = 0; l < 3; l++) {
        const h = this.gravityENU.get(l, 0);
        n += this.matrixR.get(l, 0) * h, i += this.matrixR.get(l, 1) * h, c += this.matrixR.get(l, 2) * h;
      }
      return {
        x: n,
        y: i,
        z: c
      };
    }
  };
  __publicField(_jr, "GRAVITY", 9.81);
  __publicField(_jr, "DEG_TO_RAD", Math.PI / 180);
  let jr = _jr;
  const _ci = class _ci {
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
      const n = cc.getPlatformContext(), i = new _ci(n), c = await i.initializeProviders(t);
      return c.isErr() ? M(c.error) : (_ci.instance = i, j(i));
    }
    static getInstance() {
      return _ci.instance ? j(_ci.instance) : M(new Ri("Platform services not initialized", ni.NOT_INITIALIZED));
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
        return M(new Ri("Failed to initialize platform providers", ni.DETECTION_FAILED, n));
      }
    }
    createStorageProvider(t) {
      switch (this.context.environment) {
        case lt.TAURI:
          return new A0((t == null ? void 0 : t.tauriStorePath) || "user-data.json");
        case lt.WEB:
        case lt.MOBILE_WEB:
        case lt.UNKNOWN:
        default:
          return new P0((t == null ? void 0 : t.webDbName) || "trackmaker-db", (t == null ? void 0 : t.webStoreName) || "user-data");
      }
    }
    async createGeolocationProvider(t) {
      let n;
      switch (this.context.environment) {
        case lt.TAURI:
          n = new N0((t == null ? void 0 : t.tauriHandlerName) || "get_geolocation");
          break;
        case lt.WEB:
        case lt.MOBILE_WEB:
        case lt.UNKNOWN:
        default:
          n = new L0();
          break;
      }
      const i = await n.init(t == null ? void 0 : t.permissionCallback);
      return i.isErr() ? (console.error("Failed to initialize geolocation provider", i.error), null) : n;
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
      const n = new jr(), i = await n.init(t == null ? void 0 : t.permissionCallback);
      return i.isErr() ? (console.error("Failed to initialize IMU provider", i.error), null) : n;
    }
    async createDeviceOrientationProvider(t) {
      const n = new k0(), i = await n.init(t == null ? void 0 : t.permissionCallback);
      return i.isErr() ? (console.error("Failed to initialize device orientation provider", i.error), null) : n;
    }
    getContext() {
      return this.context;
    }
    getStorage() {
      return this.storageProvider ? j(this.storageProvider) : M(new Ri("Storage provider not initialized", ni.DETECTION_FAILED));
    }
    getGeolocation() {
      return this.geolocationProvider ? j(this.geolocationProvider) : M(new Ri("Geolocation provider not initialized", ni.DETECTION_FAILED));
    }
    getFile() {
      return this.fileProvider ? j(this.fileProvider) : M(new Ri("File provider not initialized", ni.DETECTION_FAILED));
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
      _ci.instance = null;
    }
    getGeolocationProvider() {
      return this.geolocationProvider;
    }
    getIMU() {
      return this.imuProvider ? j(this.imuProvider) : M(new Ri("IMU provider not initialized", ni.DETECTION_FAILED));
    }
    getDeviceOrientation() {
      return this.deviceOrientationProvider ? j(this.deviceOrientationProvider) : M(new Ri("Device orientation provider not initialized", ni.DETECTION_FAILED));
    }
  };
  __publicField(_ci, "instance", null);
  let ci = _ci;
  Os = function() {
    return ci.getInstance();
  };
  V0 = function() {
    return typeof navigator > "u" ? false : cc.detectEnvironment() === lt.TAURI;
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
  class H0 {
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
  class q0 {
    constructor() {
      __publicField(this, "callbacks", /* @__PURE__ */ new Set());
    }
    subscribe(t) {
      return this.callbacks.add(t), () => this.callbacks.delete(t);
    }
    emit(t, n) {
      for (const i of this.callbacks) try {
        i(t, n);
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
  class Y0 {
    constructor() {
      __publicField(this, "currentLocation", null);
      __publicField(this, "currentBackend", null);
      __publicField(this, "eventEmitter");
      this.eventEmitter = new q0();
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
  class K0 {
    constructor() {
      __publicField(this, "name", "gps");
      __publicField(this, "provider", null);
      __publicField(this, "watchId", null);
      __publicField(this, "isInitialized", false);
    }
    async initialize() {
      if (this.isInitialized) return j(void 0);
      try {
        const t = Os();
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
        const c = new Un(i.coords.latitude, i.coords.longitude, i.coords.accuracy);
        t(c, "gps");
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
  const zl = "https://ipapi.co/json/";
  class J0 {
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
        return (await fetch(zl, {
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
        const t = await fetch(zl, {
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
          } catch (c) {
            console.error("[IPFallbackBackend] Callback error:", c);
          }
        }
      } catch (t) {
        console.error("[IPFallbackBackend] Error updating location:", t);
      }
    }
  }
  let Ce;
  const rf = typeof TextDecoder < "u" ? new TextDecoder("utf-8", {
    ignoreBOM: true,
    fatal: true
  }) : {
    decode: () => {
      throw Error("TextDecoder not available");
    }
  };
  typeof TextDecoder < "u" && rf.decode();
  let Ar = null;
  function No() {
    return (Ar === null || Ar.byteLength === 0) && (Ar = new Uint8Array(Ce.memory.buffer)), Ar;
  }
  function Ci(e, t) {
    return e = e >>> 0, rf.decode(No().subarray(e, e + t));
  }
  let Jo = 0;
  const Co = typeof TextEncoder < "u" ? new TextEncoder("utf-8") : {
    encode: () => {
      throw Error("TextEncoder not available");
    }
  }, Z0 = typeof Co.encodeInto == "function" ? function(e, t) {
    return Co.encodeInto(e, t);
  } : function(e, t) {
    const n = Co.encode(e);
    return t.set(n), {
      read: e.length,
      written: n.length
    };
  };
  function of(e, t, n) {
    if (n === void 0) {
      const f = Co.encode(e), p = t(f.length, 1) >>> 0;
      return No().subarray(p, p + f.length).set(f), Jo = f.length, p;
    }
    let i = e.length, c = t(i, 1) >>> 0;
    const l = No();
    let h = 0;
    for (; h < i; h++) {
      const f = e.charCodeAt(h);
      if (f > 127) break;
      l[c + h] = f;
    }
    if (h !== i) {
      h !== 0 && (e = e.slice(h)), c = n(c, i, i = h + e.length * 3, 1) >>> 0;
      const f = No().subarray(c + h, c + i), p = Z0(e, f);
      h += p.written, c = n(c, i, h, 1) >>> 0;
    }
    return Jo = h, c;
  }
  function X0(e) {
    return e == null;
  }
  let Mi = null;
  function Bl() {
    return (Mi === null || Mi.buffer.detached === true || Mi.buffer.detached === void 0 && Mi.buffer !== Ce.memory.buffer) && (Mi = new DataView(Ce.memory.buffer)), Mi;
  }
  function sf(e) {
    const t = Ce.__wbindgen_export_0.get(e);
    return Ce.__externref_table_dealloc(e), t;
  }
  function ia(e, t) {
    if (!(e instanceof t)) throw new Error(`expected instance of ${t.name}`);
  }
  function La(e, t, n) {
    ia(e, ui), ia(t, ui), ia(n, Zo);
    const i = Ce.transform(e.__wbg_ptr, t.__wbg_ptr, n.__wbg_ptr);
    if (i[1]) throw sf(i[0]);
  }
  const $l = typeof FinalizationRegistry > "u" ? {
    register: () => {
    },
    unregister: () => {
    }
  } : new FinalizationRegistry((e) => Ce.__wbg_point_free(e >>> 0, 1));
  class Zo {
    __destroy_into_raw() {
      const t = this.__wbg_ptr;
      return this.__wbg_ptr = 0, $l.unregister(this), t;
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
      const c = Ce.point_new(t, n, i);
      return this.__wbg_ptr = c >>> 0, $l.register(this, this.__wbg_ptr, this), this;
    }
  }
  const Vl = typeof FinalizationRegistry > "u" ? {
    register: () => {
    },
    unregister: () => {
    }
  } : new FinalizationRegistry((e) => Ce.__wbg_projection_free(e >>> 0, 1));
  class ui {
    __destroy_into_raw() {
      const t = this.__wbg_ptr;
      return this.__wbg_ptr = 0, Vl.unregister(this), t;
    }
    free() {
      const t = this.__destroy_into_raw();
      Ce.__wbg_projection_free(t, 0);
    }
    constructor(t) {
      const n = of(t, Ce.__wbindgen_malloc, Ce.__wbindgen_realloc), i = Jo, c = Ce.projection_new(n, i);
      if (c[2]) throw sf(c[1]);
      return this.__wbg_ptr = c[0] >>> 0, Vl.register(this, this.__wbg_ptr, this), this;
    }
    get projName() {
      let t, n;
      try {
        const i = Ce.projection_projName(this.__wbg_ptr);
        return t = i[0], n = i[1], Ci(i[0], i[1]);
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
        return t = i[0], n = i[1], Ci(i[0], i[1]);
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
        return t = i[0], n = i[1], Ci(i[0], i[1]);
      } finally {
        Ce.__wbindgen_free(t, n, 1);
      }
    }
  }
  async function Q0(e, t) {
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
  function eb() {
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
      return parseFloat(Ci(t, n));
    }, e.wbg.__wbg_parseInt_7deceafc75400ae4 = function(t, n, i) {
      return parseInt(Ci(t, n), i);
    }, e.wbg.__wbg_slice_ab0b7e3d75dccdee = function(t, n, i) {
      return t.slice(n >>> 0, i >>> 0);
    }, e.wbg.__wbindgen_error_new = function(t, n) {
      return new Error(Ci(t, n));
    }, e.wbg.__wbindgen_init_externref_table = function() {
      const t = Ce.__wbindgen_export_0, n = t.grow(4);
      t.set(0, void 0), t.set(n + 0, void 0), t.set(n + 1, null), t.set(n + 2, true), t.set(n + 3, false);
    }, e.wbg.__wbindgen_string_get = function(t, n) {
      const i = n, c = typeof i == "string" ? i : void 0;
      var l = X0(c) ? 0 : of(c, Ce.__wbindgen_malloc, Ce.__wbindgen_realloc), h = Jo;
      Bl().setInt32(t + 4, h, true), Bl().setInt32(t + 0, l, true);
    }, e.wbg.__wbindgen_throw = function(t, n) {
      throw new Error(Ci(t, n));
    }, e;
  }
  function tb(e, t) {
    return Ce = e.exports, af.__wbindgen_wasm_module = t, Mi = null, Ar = null, Ce.__wbindgen_start(), Ce;
  }
  async function af(e) {
    if (Ce !== void 0) return Ce;
    typeof e < "u" && (Object.getPrototypeOf(e) === Object.prototype ? { module_or_path: e } = e : console.warn("using deprecated parameters for the initialization function; pass a single object instead")), typeof e > "u" && (e = new URL("" + new URL("proj4rs_bg-Biz-E4lt.wasm", import.meta.url).href, import.meta.url));
    const t = eb();
    (typeof e == "string" || typeof Request == "function" && e instanceof Request || typeof URL == "function" && e instanceof URL) && (e = fetch(e));
    const { instance: n, module: i } = await Q0(await e, t);
    return tb(n, i);
  }
  const nb = "" + new URL("proj4rs_bg-Biz-E4lt.wasm", import.meta.url).href, Ur = {
    WGS84: "+proj=longlat +datum=WGS84 +no_defs",
    GRS80: "+proj=latlong +ellps=GRS80 +no_defs",
    UTM_ZONE_50N: "+proj=utm +zone=50 +datum=WGS84 +units=m +no_defs",
    UTM_ZONE_51N: "+proj=utm +zone=51 +datum=WGS84 +units=m +no_defs",
    CGCS2000_3_DEGREE: "+proj=tmerc +lat_0=0 +lon_0=117 +k=1 +x_0=500000 +y_0=0 +ellps=GRS80 +units=m +no_defs",
    BEIJING_1954: "+proj=tmerc +lat_0=0 +lon_0=117 +k=1 +x_0=500000 +y_0=0 +ellps=krass +units=m +no_defs",
    WEB_MERCATOR: "+proj=merc +a=6378137 +b=6378137 +lat_ts=0.0 +lon_0=0.0 +x_0=0.0 +y_0=0 +k=1.0 +units=m +nadgrids=@null +wktext +no_defs"
  };
  let ra = false;
  async function cf() {
    if (!ra) try {
      console.log("[Proj4WASM] Fetching WASM module..."), await af({
        module_or_path: nb
      }), ra = true, console.log("[Proj4WASM] WASM module loaded successfully.");
    } catch (e) {
      console.warn("[Proj4WASM] Failed to load WASM module, using the JS fallback."), console.error(e), ra = true;
    }
  }
  async function Hl(e, t, n) {
    try {
      await cf();
      const i = new ui(e), c = new ui(t), l = new Zo(n[0], n[1], 0);
      La(i, c, l);
      const h = [
        l.x,
        l.y
      ];
      return i.free(), c.free(), l.free(), h;
    } catch (i) {
      throw new Error(`Failed to transform coordinate: ${i instanceof Error ? i.message : String(i)}`);
    }
  }
  function ib(e, t) {
    const n = t.x - e.x, i = t.y - e.y;
    return Math.sqrt(n * n + i * i);
  }
  function ql(e, t) {
    const i = e.latitude * Math.PI / 180, c = t.latitude * Math.PI / 180, l = (t.latitude - e.latitude) * Math.PI / 180, h = (t.longitude - e.longitude) * Math.PI / 180, f = Math.sin(l / 2) * Math.sin(l / 2) + Math.cos(i) * Math.cos(c) * Math.sin(h / 2) * Math.sin(h / 2);
    return 6371e3 * (2 * Math.atan2(Math.sqrt(f), Math.sqrt(1 - f)));
  }
  async function rb(e, t, n = {}) {
    const { projection: i = Ur.CGCS2000_3_DEGREE, useHaversine: c = false } = n;
    if (c) return ql(e, t);
    try {
      const l = await Hl(Ur.WGS84, i, [
        e.longitude,
        e.latitude
      ]), h = await Hl(Ur.WGS84, i, [
        t.longitude,
        t.latitude
      ]);
      return ib({
        x: l[0],
        y: l[1]
      }, {
        x: h[0],
        y: h[1]
      });
    } catch (l) {
      return console.warn("Failed to use proj4 distance calculation, falling back to haversine:", l), ql(e, t);
    }
  }
  _v = async function(e, t = {}) {
    if (e.length < 2) return 0;
    let n = 0;
    for (let i = 1; i < e.length; i++) n += await rb(e[i - 1], e[i], t);
    return n;
  };
  Av = function(e) {
    return e < 1e3 ? `${Math.round(e)} m` : e < 1e4 ? `${(e / 1e3).toFixed(1)} km` : `${Math.round(e / 1e3)} km`;
  };
  const { sin: qt, cos: ob, sqrt: uc, abs: Xo, PI: xt } = Math, Yl = 6378245, Kl = 0.006693421622965823;
  function lf(e, t) {
    return e >= 72.004 && e <= 137.8347 && t >= 0.8293 && t <= 55.8271;
  }
  function sb(e, t) {
    let n = -100 + 2 * e + 3 * t + 0.2 * t * t + 0.1 * e * t + 0.2 * uc(Xo(e));
    return n += (20 * qt(6 * e * xt) + 20 * qt(2 * e * xt)) * 2 / 3, n += (20 * qt(t * xt) + 40 * qt(t / 3 * xt)) * 2 / 3, n += (160 * qt(t / 12 * xt) + 320 * qt(t * xt / 30)) * 2 / 3, n;
  }
  function ab(e, t) {
    let n = 300 + e + 2 * t + 0.1 * e * e + 0.1 * e * t + 0.1 * uc(Xo(e));
    return n += (20 * qt(6 * e * xt) + 20 * qt(2 * e * xt)) * 2 / 3, n += (20 * qt(e * xt) + 40 * qt(e / 3 * xt)) * 2 / 3, n += (150 * qt(e / 12 * xt) + 300 * qt(e / 30 * xt)) * 2 / 3, n;
  }
  function cb(e, t) {
    let n = ab(e - 105, t - 35), i = sb(e - 105, t - 35);
    const c = t / 180 * xt;
    let l = qt(c);
    l = 1 - Kl * l * l;
    const h = uc(l);
    return n = n * 180 / (Yl / h * ob(c) * xt), i = i * 180 / (Yl * (1 - Kl) / (l * h) * xt), [
      n,
      i
    ];
  }
  function fi(e) {
    const [t, n] = e;
    if (!lf(t, n)) return [
      t,
      n
    ];
    const i = cb(t, n);
    return [
      t + i[0],
      n + i[1]
    ];
  }
  function ar(e) {
    const [t, n] = e;
    if (!lf(t, n)) return [
      t,
      n
    ];
    let [i, c] = [
      t,
      n
    ], l = fi([
      i,
      c
    ]), h = l[0] - t, f = l[1] - n;
    for (; Xo(h) > 1e-6 || Xo(f) > 1e-6; ) i -= h, c -= f, l = fi([
      i,
      c
    ]), h = l[0] - t, f = l[1] - n;
    return [
      i,
      c
    ];
  }
  const { sin: Qo, cos: es, atan2: uf, sqrt: hf, PI: lb } = Math, ts = lb * 3e3 / 180;
  function Zi(e) {
    const [t, n] = e, i = t - 65e-4, c = n - 6e-3, l = hf(i * i + c * c) - 2e-5 * Qo(c * ts), h = uf(c, i) - 3e-6 * es(i * ts), f = l * es(h), p = l * Qo(h);
    return [
      f,
      p
    ];
  }
  function cr(e) {
    const [t, n] = e, i = t, c = n, l = hf(i * i + c * c) + 2e-5 * Qo(c * ts), h = uf(c, i) + 3e-6 * es(i * ts), f = l * es(h) + 65e-4, p = l * Qo(h) + 6e-3;
    return [
      f,
      p
    ];
  }
  const Jl = 180 / Math.PI, Zl = Math.PI / 180, ns = 6378137, Qn = 20037508342789244e-9;
  function vo(e) {
    return [
      e[0] * Jl / ns,
      (Math.PI * 0.5 - 2 * Math.atan(Math.exp(-e[1] / ns))) * Jl
    ];
  }
  function Ms(e) {
    const t = Math.abs(e[0]) <= 180 ? e[0] : e[0] - (e[0] < 0 ? -1 : 1) * 360, n = [
      ns * t * Zl,
      ns * Math.log(Math.tan(Math.PI * 0.25 + 0.5 * e[1] * Zl))
    ];
    return n[0] > Qn && (n[0] = Qn), n[0] < -Qn && (n[0] = -Qn), n[1] > Qn && (n[1] = Qn), n[1] < -Qn && (n[1] = -Qn), n;
  }
  const { abs: is } = Math, Xl = [
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
  ], ub = [
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
  ], hb = [
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
  function ff(e, t, n) {
    const i = is(t) / n[9];
    let c = n[0] + n[1] * is(e), l = n[2] + n[3] * i + n[4] * Math.pow(i, 2) + n[5] * Math.pow(i, 3) + n[6] * Math.pow(i, 4) + n[7] * Math.pow(i, 5) + n[8] * Math.pow(i, 6);
    return c *= e < 0 ? -1 : 1, l *= t < 0 ? -1 : 1, [
      c,
      l
    ];
  }
  function Ps(e) {
    const [t, n] = e;
    let i = [];
    for (let c = 0; c < Ql.length; c++) if (is(n) > Ql[c]) {
      i = hb[c];
      break;
    }
    return ff(t, n, i);
  }
  function Eo(e) {
    const [t, n] = e;
    let i = [];
    for (let c = 0; c < Xl.length; c++) if (is(n) >= Xl[c]) {
      i = ub[c];
      break;
    }
    return ff(t, n, i);
  }
  function ei(e, t) {
    if (!e) throw new Error(t);
  }
  function df(e) {
    return !!e && Object.prototype.toString.call(e) === "[object Array]";
  }
  function eu(e) {
    return !isNaN(Number(e)) && e !== null && !df(e);
  }
  function on(...e) {
    const t = e.length - 1;
    return function(...n) {
      let i = t, c = e[t].apply(null, n);
      for (; i--; ) c = e[i].call(null, c);
      return c;
    };
  }
  function pf(e, t, n = false) {
    if (e === null) return;
    let i, c, l, h, f, p, v = 0, g = 0, T, P;
    const { type: O } = e, F = O === "FeatureCollection", C = O === "Feature", fe = F ? e.features.length : 1;
    for (let ne = 0; ne < fe; ne++) {
      T = F ? e.features[ne].geometry : C ? e.geometry : e, P = T ? T.type === "GeometryCollection" : false, p = P ? T.geometries.length : 1;
      for (let H = 0; H < p; H++) {
        let Y = 0, U = 0;
        if (h = P ? T.geometries[H] : T, h === null) continue;
        const ue = h.type;
        switch (v = n && (ue === "Polygon" || ue === "MultiPolygon") ? 1 : 0, ue) {
          case null:
            break;
          case "Point":
            if (f = h.coordinates, t(f, g, ne, Y, U) === false) return false;
            g++, Y++;
            break;
          case "LineString":
          case "MultiPoint":
            for (f = h.coordinates, i = 0; i < f.length; i++) {
              if (t(f[i], g, ne, Y, U) === false) return false;
              g++, ue === "MultiPoint" && Y++;
            }
            ue === "LineString" && Y++;
            break;
          case "Polygon":
          case "MultiLineString":
            for (f = h.coordinates, i = 0; i < f.length; i++) {
              for (c = 0; c < f[i].length - v; c++) {
                if (t(f[i][c], g, ne, Y, U) === false) return false;
                g++;
              }
              ue === "MultiLineString" && Y++, ue === "Polygon" && U++;
            }
            ue === "Polygon" && Y++;
            break;
          case "MultiPolygon":
            for (f = h.coordinates, i = 0; i < f.length; i++) {
              for (U = 0, c = 0; c < f[i].length; c++) {
                for (l = 0; l < f[i][c].length - v; l++) {
                  if (t(f[i][c][l], g, ne, Y, U) === false) return false;
                  g++;
                }
                U++;
              }
              Y++;
            }
            break;
          case "GeometryCollection":
            for (i = 0; i < h.geometries.length; i++) if (pf(h.geometries[i], t, n) === false) return false;
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
  const fb = {
    to: {
      [ot.GCJ02]: fi,
      [ot.BD09]: on(cr, fi),
      [ot.BD09MC]: on(Ps, cr, fi),
      [ot.EPSG3857]: Ms
    }
  }, db = {
    to: {
      [ot.WGS84]: ar,
      [ot.BD09]: cr,
      [ot.BD09MC]: on(Ps, cr),
      [ot.EPSG3857]: on(Ms, ar)
    }
  }, pb = {
    to: {
      [ot.WGS84]: on(ar, Zi),
      [ot.GCJ02]: Zi,
      [ot.EPSG3857]: on(Ms, ar, Zi),
      [ot.BD09MC]: Ps
    }
  }, gb = {
    to: {
      [ot.WGS84]: vo,
      [ot.GCJ02]: on(fi, vo),
      [ot.BD09]: on(cr, fi, vo),
      [ot.BD09MC]: on(Ps, cr, fi, vo)
    }
  }, mb = {
    to: {
      [ot.WGS84]: on(ar, Zi, Eo),
      [ot.GCJ02]: on(Zi, Eo),
      [ot.EPSG3857]: on(Ms, ar, Zi, Eo),
      [ot.BD09]: Eo
    }
  }, wb = {
    WGS84: fb,
    GCJ02: db,
    BD09: pb,
    EPSG3857: gb,
    BD09MC: mb
  };
  var yb = wb;
  function bb(e, t, n) {
    if (ei(!!e, "The args[0] input coordinate is required"), ei(!!t, "The args[1] original coordinate system is required"), ei(!!n, "The args[2] target coordinate system is required"), t === n) return e;
    const i = yb[t];
    ei(!!i, `Invalid original coordinate system: ${t}`);
    const c = i.to[n];
    ei(!!c, `Invalid target coordinate system: ${n}`);
    const l = typeof e;
    if (ei(l === "string" || l === "object", `Invalid input coordinate type: ${l}`), l === "string") try {
      e = JSON.parse(e);
    } catch {
      throw new Error(`Invalid input coordinate: ${e}`);
    }
    let h = false;
    df(e) && (ei(e.length >= 2, `Invalid input coordinate: ${e}`), ei(eu(e[0]) && eu(e[1]), `Invalid input coordinate: ${e}`), e = e.map(Number), h = true);
    const f = c;
    return h ? f(e) : (pf(e, (p) => {
      [p[0], p[1]] = f(p);
    }), e);
  }
  const oa = Object.assign(Object.assign({}, ot), {
    CRSTypes: ot,
    transform: bb
  });
  class gf {
    constructor(t) {
      __publicField(this, "referencePoint", null);
      __publicField(this, "localProjection", null);
      __publicField(this, "geolocationCorrectionEnabled");
      this.geolocationCorrectionEnabled = this.getGeolocationCorrectionSetting(), (t == null ? void 0 : t.referencePoint) && this.setReferencePoint(t.referencePoint, t.projection);
    }
    getGeolocationCorrectionSetting() {
      return Ft("geolocationCorrection") ?? false;
    }
    setReferencePoint(t, n) {
      this.referencePoint = t, this.localProjection = n || `+proj=tmerc +lat_0=${t.latitude} +lon_0=${t.longitude} +k=1 +x_0=0 +y_0=0 +datum=WGS84 +units=m +no_defs`;
    }
    async geographicToLocal(t) {
      if (!this.referencePoint || !this.localProjection) throw new Error("Reference point not set. Call setReferencePoint() first.");
      try {
        const n = new ui(Ur.WGS84), i = new ui(this.localProjection), c = new Zo(t.longitude, t.latitude, 0);
        La(n, i, c);
        const l = {
          x: c.x,
          y: c.y
        };
        return n.free(), i.free(), c.free(), l;
      } catch {
        return this.geographicToLocalFallback(t);
      }
    }
    async localToGeographic(t) {
      if (!this.referencePoint || !this.localProjection) throw new Error("Reference point not set. Call setReferencePoint() first.");
      try {
        const n = new ui(this.localProjection), i = new ui(Ur.WGS84), c = new Zo(t.x, t.y, 0);
        La(n, i, c);
        const l = {
          longitude: c.x,
          latitude: c.y
        };
        return n.free(), i.free(), c.free(), l;
      } catch {
        return this.localToGeographicFallback(t);
      }
    }
    geographicToLocalFallback(t) {
      if (!this.referencePoint) throw new Error("Reference point not set");
      const n = 6371e3, i = this.referencePoint.latitude * Math.PI / 180, c = this.referencePoint.longitude * Math.PI / 180, l = t.latitude * Math.PI / 180, h = t.longitude * Math.PI / 180, f = n * (h - c) * Math.cos((i + l) / 2), p = n * (l - i);
      return {
        x: f,
        y: p
      };
    }
    localToGeographicFallback(t) {
      if (!this.referencePoint) throw new Error("Reference point not set");
      const n = 6371e3, i = this.referencePoint.latitude * Math.PI / 180, c = this.referencePoint.longitude * Math.PI / 180, l = (t.y / n + i) * 180 / Math.PI, h = (t.x / (n * Math.cos(i)) + c) * 180 / Math.PI;
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
  function vb(e) {
    const t = oa.transform([
      e.longitude,
      e.latitude
    ], oa.WGS84, oa.GCJ02);
    return new Un(t[1], t[0]);
  }
  new gf();
  class Eb {
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
        imuAccelerationUncertainty: 0.5,
        ...t
      }, this.coordinateTransformer = new gf(), this.state = this.createInitialState();
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
        covariance: new ze([
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
        const f = this.gpsVelocityToLocal(t.speed, t.heading);
        this.state.velocity = {
          x: f.x,
          y: f.y
        };
      }
      const c = this.gpsAccuracyToSigma(t.accuracy), l = i ? this.config.gpsSpeedUncertainty : this.config.initialVelocityUncertainty, h = this.config.initialAccelerationUncertainty;
      this.state.covariance = new ze([
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
        hasVelocity: i,
        positionUncertainty: c,
        velocityUncertainty: l
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
      const n = new ze([
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
      ]), i = this.config.initialAccelerationUncertainty, c = new ze([
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
      ]).mul(i * i), l = new ze([
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
      ]), h = n.mmul(l), f = n.mmul(this.state.covariance).mmul(n.transpose()).add(c);
      if (this.debugEnabled && t > 0.1) {
        const p = f.trace(), v = Math.sqrt(f.get(0, 0) + f.get(1, 1)), g = Math.sqrt(f.get(2, 2) + f.get(3, 3)), T = Math.sqrt(f.get(4, 4) + f.get(5, 5));
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
        x: h.get(0, 0),
        y: h.get(1, 0)
      }, this.state.velocity = {
        x: h.get(2, 0),
        y: h.get(3, 0)
      }, this.state.acceleration = {
        x: h.get(4, 0),
        y: h.get(5, 0)
      }, this.state.covariance = f;
    }
    async updateGPSInternal(t) {
      const n = await this.coordinateTransformer.geographicToLocal({
        longitude: t.longitude,
        latitude: t.latitude
      }), i = t.speed !== void 0 && t.speed !== null && t.heading !== void 0 && t.heading !== null;
      let c;
      i ? c = new ze([
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
      ]) : c = new ze([
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
      if (i) {
        const Y = this.gpsVelocityToLocal(t.speed, t.heading);
        l = new ze([
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
      } else l = new ze([
        [
          n.x
        ],
        [
          n.y
        ]
      ]);
      const h = this.gpsAccuracyToSigma(t.accuracy);
      let f;
      if (i) {
        const Y = this.config.gpsSpeedUncertainty;
        f = new ze([
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
      } else f = new ze([
        [
          h * h,
          0
        ],
        [
          0,
          h * h
        ]
      ]);
      const p = 1e-6, g = c.mmul(this.state.covariance).mmul(c.transpose()).add(f), T = g.add(ze.identity(g.rows, g.columns).mul(p)), P = this.state.covariance.mmul(c.transpose()).mmul(Wl(T));
      this.lastKalmanGain = P, this.debugEnabled && console.log("[KalmanFilter] GPS update:", {
        hasVelocity: i,
        position: {
          x: n.x,
          y: n.y
        },
        gpsSpeed: t.speed,
        gpsHeading: t.heading,
        kalmanGain: P.to2DArray(),
        gainNorm: Math.sqrt(P.to1DArray().reduce((Y, U) => Y + U * U, 0))
      });
      const O = new ze([
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
      ]), F = l.subtract(c.mmul(O)), C = O.add(P.mmul(F)), H = ze.identity(6, 6).subtract(P.mmul(c)).mmul(this.state.covariance).add(ze.identity(6, 6).mul(p));
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
      const i = n * Math.PI / 180, c = t * Math.sin(i), l = t * Math.cos(i);
      return {
        x: c,
        y: l
      };
    }
    updateIMUInternal(t) {
      const n = new ze([
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
      ]), i = new ze([
        [
          t.x
        ],
        [
          t.y
        ]
      ]), c = Math.max(this.config.imuAccelerationUncertainty, 0.1), l = 1e-6, h = new ze([
        [
          c * c,
          0
        ],
        [
          0,
          c * c
        ]
      ]), p = n.mmul(this.state.covariance).mmul(n.transpose()).add(h), v = p.add(ze.identity(p.rows, p.columns).mul(l)), g = this.state.covariance.mmul(n.transpose()).mmul(Wl(v));
      this.lastKalmanGain = g, this.debugEnabled && console.log("[KalmanFilter] IMU update:", {
        acceleration: {
          x: t.x,
          y: t.y
        },
        kalmanGain: g.to2DArray(),
        gainNorm: Math.sqrt(g.to1DArray().reduce((ne, H) => ne + H * H, 0))
      });
      const T = new ze([
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
      ]), P = i.subtract(n.mmul(T)), O = T.add(g.mmul(P)), fe = ze.identity(6, 6).subtract(g.mmul(n)).mmul(this.state.covariance).add(ze.identity(6, 6).mul(l));
      this.state.position = {
        x: O.get(0, 0),
        y: O.get(1, 0)
      }, this.state.velocity = {
        x: O.get(2, 0),
        y: O.get(3, 0)
      }, this.state.acceleration = {
        x: O.get(4, 0),
        y: O.get(5, 0)
      }, this.state.covariance = fe;
    }
  }
  class Ib {
    constructor(t = 100) {
      __publicField(this, "imuProvider", null);
      __publicField(this, "isListening", false);
      __publicField(this, "imuCallbacks", []);
      __publicField(this, "imuUpdateInterval", null);
      this.imuUpdateIntervalMs = t;
    }
    async initialize() {
      try {
        const t = Os();
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
        return this.imuCallbacks.push(t), this.isListening = true, this.startIMUPolling(), console.info("[IMUFusionManager] Started IMU sensor fusion"), j(void 0);
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
  class Tb {
    constructor(t, n, i = 100) {
      __publicField(this, "kalmanFilter");
      __publicField(this, "imuManager");
      __publicField(this, "callback", null);
      __publicField(this, "isInitialized", false);
      __publicField(this, "lastOutputTime", 0);
      __publicField(this, "lastOutputAccuracy", 0);
      this.kalmanFilter = new Eb(n), this.imuManager = new Ib(i), this.callback = t;
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
          const c = await this.kalmanFilter.getFilteredPosition(), l = new Un(c.latitude, c.longitude, t.accuracy);
          this.notifyCallback(l);
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
  class Sb {
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
        const t = Os();
        if (t.isErr()) return M(new Me("Platform services not available", "BACKEND_NOT_AVAILABLE", t.error));
        const n = t.value.getGeolocationProvider();
        if (!n) return M(new Me("Geolocation provider not available", "BACKEND_NOT_AVAILABLE"));
        this.provider = n;
        const i = await this.provider.getCurrentPosition();
        if (i.isErr()) return M(new Me("Failed to get the initial geolocation", "UPDATE_SERVICE_ERROR", i.error));
        this.processor = new Tb((l, h) => this.handleLocationUpdate(l), {
          initialAccelerationUncertainty: this.config.sigmaAcceleration,
          initialPositionUncertainty: this.config.initialPositionUncertainty,
          initialVelocityUncertainty: this.config.initialVelocityUncertainty,
          gpsSpeedUncertainty: this.config.gpsSpeedUncertainty,
          debugEnabled: this.config.debugEnabled
        }, this.config.imuUpdateInterval);
        const c = await this.processor.initialize({
          latitude: i.value.coords.latitude,
          longitude: i.value.coords.longitude,
          accuracy: i.value.coords.accuracy,
          timestamp: performance.now(),
          speed: i.value.coords.speed ?? void 0,
          heading: i.value.coords.heading ?? void 0
        });
        return c.isErr() ? c : (this.isInitialized = true, j(void 0));
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
        const n = await this.provider.watchPosition((c) => {
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
  cn = (_a2 = class {
    constructor() {
      __publicField(this, "isInitialized", false);
      __publicField(this, "backendManager");
      __publicField(this, "stateManager");
      __publicField(this, "locationUpdateCallbacks", /* @__PURE__ */ new Map());
      __publicField(this, "nextCallbackId", 1);
      const t = [];
      if (M0()) {
        const n = Ca(), i = n > 0 ? Math.floor(1e3 / n) : 50;
        t.push(new Sb({
          imuUpdateInterval: i,
          sigmaAcceleration: 1,
          initialPositionUncertainty: 20,
          initialVelocityUncertainty: 4,
          gpsSpeedUncertainty: 2,
          debugEnabled: false
        }));
      }
      t.push(new K0()), t.push(new J0()), this.backendManager = new H0(t), this.stateManager = new Y0();
    }
    static async getInstance() {
      if (cn.instance || (cn.instance = new cn()), !cn.instance.isInitialized) {
        const t = await cn.instance.initialize();
        if (t.isErr()) return M(t.error);
      }
      return j(cn.instance);
    }
    static getExistingInstance() {
      if (!cn.instance) throw new Error("GeolocationManager not initialized. Call getInstance() first.");
      return cn.instance;
    }
    static reset() {
      cn.instance = null;
    }
    async initialize() {
      if (this.isInitialized) return console.info("[GeolocationManager] Already initialized"), j(void 0);
      console.info("[GeolocationManager] Initializing geolocation services with new architecture");
      try {
        this.stateManager.subscribe((i, c) => {
          this.notifyCallbacks(i);
        });
        const t = await this.backendManager.initialise();
        if (t.isErr()) return console.warn("[GeolocationManager] No backend available for location"), M(new Nn("No geolocation backend available", "no_backend_available", t.error));
        const n = await this.backendManager.getCurrentPosition();
        return n.isOk() ? (this.stateManager.updateLocation(n.value, this.backendManager.getActiveBackend()), this.isInitialized = true, console.info("[GeolocationManager] Geolocation services initialized successfully"), j(void 0)) : M(new Nn("Backend selected fail to obtain geolocation", "backend_error", n.error));
      } catch (t) {
        const n = go(t, "Failed to initialize geolocation manager");
        return _i(n, "GeolocationManager.initialize"), M(new Nn("Exception during initialization", "initialization_failed", n));
      }
    }
    async getCurrentLocation() {
      if (!this.isInitialized) {
        const t = new Nn("Geolocation manager not initialized", "not_initialized");
        return _i(t, "GeolocationManager.getCurrentLocation"), M(t);
      }
      try {
        const t = await this.backendManager.getCurrentPosition();
        return t.isOk() && this.stateManager.updateLocation(t.value, this.backendManager.getActiveBackend() || "gps"), t;
      } catch (t) {
        const n = go(t, "Failed to get current location");
        return _i(n, "GeolocationManager.getCurrentLocation"), M(new Nn("Failed to get current location", "get_location_failed", n));
      }
    }
    async startLocationUpdates(t) {
      if (!this.isInitialized) {
        const n = new Nn("Geolocation manager not initialized", "not_initialized");
        return _i(n, "GeolocationManager.startLocationUpdates"), M(n);
      }
      console.info("[GeolocationManager] Starting location updates");
      try {
        const n = this.nextCallbackId++;
        this.locationUpdateCallbacks.set(n, t);
        const i = await this.backendManager.startWatching((c, l) => {
          this.stateManager.updateLocation(c, l), this.notifyCallbacks(c);
        });
        return i.isErr() ? (this.locationUpdateCallbacks.delete(n), M(i.error)) : (console.info(`[GeolocationManager] Location updates started with handler ${n}`), j(n));
      } catch (n) {
        const i = go(n, "Failed to start location updates");
        return _i(i, "GeolocationManager.startLocationUpdates"), M(new Nn("Failed to start location updates", "start_updates_failed", i));
      }
    }
    async stopLocationUpdates(t) {
      if (!this.isInitialized) {
        const n = new Nn("Geolocation manager not initialized", "not_initialized");
        return _i(n, "GeolocationManager.stopLocationUpdates"), M(n);
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
        return _i(i, "GeolocationManager.stopLocationUpdates"), M(new Nn("Failed to stop location updates", "stop_updates_failed", i));
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
      return Ft("geolocationCorrection") ? vb(t) : t;
    }
    notifyCallbacks(t) {
      const n = this.applyGeolocationCorrection(t), i = Yh(n);
      for (const c of this.locationUpdateCallbacks.values()) try {
        c(i);
      } catch (l) {
        console.error("[GeolocationManager] Callback error:", l);
      }
    }
    async refreshBackend() {
      return j(void 0);
    }
  }, __publicField(_a2, "instance", null), _a2);
  let mf;
  const Ns = (e) => mf = e, wf = /* @__PURE__ */ Symbol();
  function ka(e) {
    return e && typeof e == "object" && Object.prototype.toString.call(e) === "[object Object]" && typeof e.toJSON != "function";
  }
  var Gr;
  (function(e) {
    e.direct = "direct", e.patchObject = "patch object", e.patchFunction = "patch function";
  })(Gr || (Gr = {}));
  function yf() {
    const e = pu(true), t = e.run(() => Ut({}));
    let n = [], i = [];
    const c = Ha({
      install(l) {
        Ns(c), c._a = l, l.provide(wf, c), l.config.globalProperties.$pinia = c, i.forEach((h) => n.push(h)), i = [];
      },
      use(l) {
        return this._a ? n.push(l) : i.push(l), this;
      },
      _p: n,
      _a: null,
      _e: e,
      _s: /* @__PURE__ */ new Map(),
      state: t
    });
    return c;
  }
  const bf = () => {
  };
  function tu(e, t, n, i = bf) {
    e.add(t);
    const c = () => {
      e.delete(t) && i();
    };
    return !n && gu() && $f(c), c;
  }
  function $i(e, ...t) {
    e.forEach((n) => {
      n(...t);
    });
  }
  const _b = (e) => e(), nu = /* @__PURE__ */ Symbol(), sa = /* @__PURE__ */ Symbol();
  function Da(e, t) {
    e instanceof Map && t instanceof Map ? t.forEach((n, i) => e.set(i, n)) : e instanceof Set && t instanceof Set && t.forEach(e.add, e);
    for (const n in t) {
      if (!t.hasOwnProperty(n)) continue;
      const i = t[n], c = e[n];
      ka(c) && ka(i) && e.hasOwnProperty(n) && !at(i) && !Gn(i) ? e[n] = Da(c, i) : e[n] = i;
    }
    return e;
  }
  const Ab = /* @__PURE__ */ Symbol();
  function Rb(e) {
    return !ka(e) || !Object.prototype.hasOwnProperty.call(e, Ab);
  }
  const { assign: ii } = Object;
  function Ob(e) {
    return !!(at(e) && e.effect);
  }
  function Mb(e, t, n, i) {
    const { state: c, actions: l, getters: h } = t, f = n.state.value[e];
    let p;
    function v() {
      f || (n.state.value[e] = c ? c() : {});
      const g = md(n.state.value[e]);
      return ii(g, l, Object.keys(h || {}).reduce((T, P) => (T[P] = Ha(nc(() => {
        Ns(n);
        const O = n._s.get(e);
        return h[P].call(O, O);
      })), T), {}));
    }
    return p = vf(e, v, t, n, i, true), p;
  }
  function vf(e, t, n = {}, i, c, l) {
    let h;
    const f = ii({
      actions: {}
    }, n), p = {
      deep: true
    };
    let v, g, T = /* @__PURE__ */ new Set(), P = /* @__PURE__ */ new Set(), O;
    const F = i.state.value[e];
    !l && !F && (i.state.value[e] = {}), Ut({});
    let C;
    function fe(he) {
      let te;
      v = g = false, typeof he == "function" ? (he(i.state.value[e]), te = {
        type: Gr.patchFunction,
        storeId: e,
        events: O
      }) : (Da(i.state.value[e], he), te = {
        type: Gr.patchObject,
        payload: he,
        storeId: e,
        events: O
      });
      const me = C = /* @__PURE__ */ Symbol();
      ku().then(() => {
        C === me && (v = true);
      }), g = true, $i(T, te, i.state.value[e]);
    }
    const ne = l ? function() {
      const { state: te } = n, me = te ? te() : {};
      this.$patch((Oe) => {
        ii(Oe, me);
      });
    } : bf;
    function H() {
      h.stop(), T.clear(), P.clear(), i._s.delete(e);
    }
    const Y = (he, te = "") => {
      if (nu in he) return he[sa] = te, he;
      const me = function() {
        Ns(i);
        const Oe = Array.from(arguments), de = /* @__PURE__ */ new Set(), Ge = /* @__PURE__ */ new Set();
        function ht(Ne) {
          de.add(Ne);
        }
        function Bt(Ne) {
          Ge.add(Ne);
        }
        $i(P, {
          args: Oe,
          name: me[sa],
          store: ue,
          after: ht,
          onError: Bt
        });
        let Ke;
        try {
          Ke = he.apply(this && this.$id === e ? this : ue, Oe);
        } catch (Ne) {
          throw $i(Ge, Ne), Ne;
        }
        return Ke instanceof Promise ? Ke.then((Ne) => ($i(de, Ne), Ne)).catch((Ne) => ($i(Ge, Ne), Promise.reject(Ne))) : ($i(de, Ke), Ke);
      };
      return me[nu] = true, me[sa] = te, me;
    }, U = {
      _p: i,
      $id: e,
      $onAction: tu.bind(null, P),
      $patch: fe,
      $reset: ne,
      $subscribe(he, te = {}) {
        const me = tu(T, he, te.detached, () => Oe()), Oe = h.run(() => Ji(() => i.state.value[e], (de) => {
          (te.flush === "sync" ? g : v) && he({
            storeId: e,
            type: Gr.direct,
            events: O
          }, de);
        }, ii({}, p, te)));
        return me;
      },
      $dispose: H
    }, ue = fs(U);
    i._s.set(e, ue);
    const re = (i._a && i._a.runWithContext || _b)(() => i._e.run(() => (h = pu()).run(() => t({
      action: Y
    }))));
    for (const he in re) {
      const te = re[he];
      if (at(te) && !Ob(te) || Gn(te)) l || (F && Rb(te) && (at(te) ? te.value = F[he] : Da(te, F[he])), i.state.value[e][he] = te);
      else if (typeof te == "function") {
        const me = Y(te, he);
        re[he] = me, f.actions[he] = te;
      }
    }
    return ii(ue, re), ii(De(ue), re), Object.defineProperty(ue, "$state", {
      get: () => i.state.value[e],
      set: (he) => {
        fe((te) => {
          ii(te, he);
        });
      }
    }), i._p.forEach((he) => {
      ii(ue, h.run(() => he({
        store: ue,
        app: i._a,
        pinia: i,
        options: f
      })));
    }), F && l && n.hydrate && n.hydrate(ue.$state, F), v = true, g = true, ue;
  }
  Rv = function(e, t, n) {
    let i;
    const c = typeof t == "function";
    i = c ? n : t;
    function l(h, f) {
      const p = Rd();
      return h = h || (p ? Nr(wf, null) : null), h && Ns(h), h = mf, h._s.has(e) || (c ? vf(e, t, i, h) : Mb(e, i, h)), h._s.get(e);
    }
    return l.$id = e, l;
  };
  let iu, xa, Pb, Nb, Io, Cb, Lb, kb, Db, xb, Fb, jb, Ub, Gb, Wb, zb, Bb, $b, Vb, Hb, qb, Yb, Jb, hc;
  iu = [
    {
      name: "trackmaker",
      displayName: "TrackMaker",
      moduleInit: async () => {
        var _a3;
        const e = Mh((await qs(async () => {
          const { default: n } = await import("./App-BXj7MuLJ.js");
          return {
            default: n
          };
        }, __vite__mapDeps([0,1,2,3,4]), import.meta.url)).default);
        e.use(yf()), e.use((await qs(async () => {
          const { default: n } = await import("./index-4luW4dJB.js");
          return {
            default: n
          };
        }, __vite__mapDeps([5,2,1,6]), import.meta.url)).default), e.use((await qs(async () => {
          const { i18n: n } = await import("./index-CTsMkMb_.js");
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
        await cf();
      },
      dependencies: []
    },
    {
      name: "platform-services",
      displayName: "Platform Services",
      moduleInit: async () => {
        let e = false;
        try {
          e = jl();
        } catch {
        }
        try {
          e && console.time("Platform services initialise");
          const t = async (p, v) => V0() ? false : window.permissionConfirm ? window.permissionConfirm(v) : false, n = await ci.init({
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
          const i = n.value, c = i.getStorage();
          if (c.isErr()) throw c.error;
          const l = await c.value.init();
          if (l.isErr()) throw l.error;
          const h = i.getDeviceOrientation();
          if (h.isOk()) {
            const p = h.value;
            (await p.init()).isErr() ? console.warn("[Platform] DeviceOrientation not supported on this platform") : await p.start();
          }
          const f = i.getIMU();
          if (f.isOk()) {
            const p = f.value;
            (await p.init()).isErr() ? console.warn("[Platform] IMU not supported on this platform") : (await p.startAcceleration({
              frequency: Ca(),
              normalizeToENU: true
            }), await p.startGyroscope({
              frequency: Ca(),
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
          e = jl();
        } catch {
        }
        try {
          if (!Os()) throw new Error("Platform services not initialized");
          e && console.time("Geolocation service initialise");
          const n = await cn.getInstance();
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
  Ov = Qy;
  Mv = Xy;
  xa = {
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
  Pb = () => {
    try {
      const t = localStorage.getItem("interface-language");
      if (t && xa[t]) return t;
    } catch {
    }
    return navigator.language.startsWith("zh") ? "zh-CN" : "en";
  };
  Nb = Pb();
  Io = (e) => xa[Nb][e] || xa.en[e] || e;
  Cb = {
    class: "splash-container"
  };
  Lb = {
    class: "splash-content"
  };
  kb = {
    key: 0,
    class: "loading-section"
  };
  Db = {
    class: "progress-container"
  };
  xb = {
    class: "progress-bar"
  };
  Fb = {
    class: "progress-text"
  };
  jb = {
    class: "loading-details"
  };
  Ub = {
    class: "current-module"
  };
  Gb = {
    key: 1,
    class: "error-section"
  };
  Wb = {
    class: "error-message"
  };
  zb = {
    key: 0
  };
  Bb = {
    key: 1
  };
  $b = {
    key: 2,
    class: "timeout-section"
  };
  Vb = {
    key: 3,
    class: "permission-section"
  };
  Hb = {
    class: "permission-message"
  };
  qb = {
    class: "permission-buttons"
  };
  Yb = Dd({
    __name: "SplashScreen",
    setup(e) {
      const t = Ut(0), n = Ut(""), i = Ut(""), c = Ut(0), l = Ut(0), h = Ut(false), f = Ut(false), p = Ut(""), v = Ut(false), g = Ut("");
      let T = null;
      const P = Ut("light"), O = () => {
        try {
          window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches ? P.value = "dark" : P.value = "light";
        } catch {
          P.value = "light";
        }
      }, F = () => {
        P.value === "dark" ? document.documentElement.setAttribute("data-theme", "dark") : document.documentElement.setAttribute("data-theme", "light"), console.info("[Splash Screen] Theme applied:", P.value);
      }, C = nc(() => Math.round(t.value / 100 * 100)), fe = {
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
          l.value++, t.value = Math.min(100, l.value / c.value * 100), n.value = `Loaded ${ge}`;
        },
        onModuleError: (ge, re) => {
          n.value = `Failed to load ${ge}`, p.value = re.message;
        },
        onOverallProgress: (ge, re) => {
          c.value = re, l.value = ge, t.value = Math.min(100, ge / re * 100);
        }
      }, H = () => {
        window.location.reload();
      }, Y = (ge) => (g.value = Io(ge), v.value = true, new Promise((re) => {
        T = (he) => {
          v.value = false, re(he);
        };
      })), U = () => {
        T == null ? void 0 : T(true);
      }, ue = () => {
        T == null ? void 0 : T(false);
      };
      return window.permissionConfirm = Y, Qr(() => {
        var _a3;
        O(), F(), (_a3 = document.getElementById("pre-splash")) == null ? void 0 : _a3.remove();
        const ge = (re, he = /* @__PURE__ */ new Set()) => {
          if (he.has(re)) return 0;
          he.add(re);
          const te = iu.find((Oe) => Oe.name === re);
          if (!te) return 0;
          let me = 1;
          if (te.dependencies) for (const Oe of te.dependencies) me += ge(Oe, he);
          return me;
        };
        c.value = ge("trackmaker"), console.log("=== Start Loading Modules ==="), Kh(iu, "trackmaker", 3e4, {
          logger: fe,
          progressReporter: ne,
          printLog: true
        }).then(() => {
          n.value = "All modules loaded successfully", i.value = "TrackMaker", t.value = 100, console.log("=== All Modules Loaded ===");
        }).catch((re) => {
          const he = String(re.toString());
          if (he.toLowerCase().includes("timeout")) {
            const te = he.split("Trackback").map((me) => me.replace(/((^:\s*)|(,\s*$))/g, ""));
            console.table(te.map((me) => ({
              Trackback: me
            })), [
              "Trackback"
            ]), f.value = true;
          } else p.value = he, h.value = true;
          console.log("=== Failed to initialize all modules ==="), console.error(re);
        });
      }), (ge, re) => (rn(), Pn("div", Cb, [
        We("div", Lb, [
          re[8] || (re[8] = We("div", {
            class: "logo-section"
          }, [
            We("div", {
              class: "app-logo"
            }, [
              We("img", {
                src: dg,
                alt: "TrackMaker Logo",
                height: "80",
                width: "80"
              })
            ]),
            We("h1", {
              class: "app-title"
            }, " TrackMaker ")
          ], -1)),
          !h.value && !f.value ? (rn(), Pn("div", kb, [
            We("div", Db, [
              We("div", xb, [
                We("div", {
                  class: "progress-fill",
                  style: ls({
                    width: `${C.value}%`
                  })
                }, null, 4)
              ]),
              We("div", Fb, Cn(C.value) + "% ", 1)
            ]),
            We("div", jb, [
              We("p", Ub, " Loading: " + Cn(i.value), 1)
            ]),
            re[0] || (re[0] = We("div", {
              class: "loading-animation"
            }, [
              We("div", {
                class: "spinner"
              })
            ], -1))
          ])) : po("", true),
          h.value ? (rn(), Pn("div", Gb, [
            re[1] || (re[1] = We("div", {
              class: "error-icon"
            }, " \u26A0\uFE0F ", -1)),
            re[2] || (re[2] = We("h2", null, "Loading Error", -1)),
            We("div", Wb, [
              (rn(true), Pn(Et, null, qd((p.value ?? "").split(`
`), (he) => (rn(), Pn("div", {
                key: he,
                style: {
                  display: "block",
                  "font-family": "monospace",
                  overflow: "auto"
                }
              }, [
                he.toLocaleLowerCase().includes("trackback") ? (rn(), Pn("strong", zb, Cn(he), 1)) : (rn(), Pn("span", Bb, Cn(he), 1))
              ]))), 128))
            ]),
            We("button", {
              class: "retry-button",
              onClick: H
            }, " Retry ")
          ])) : po("", true),
          f.value ? (rn(), Pn("div", $b, [
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
          v.value ? (rn(), Pn("div", Vb, [
            re[7] || (re[7] = We("div", {
              class: "permission-icon"
            }, " \u{1F4CD} ", -1)),
            We("h2", null, Cn(Yi(Io)("permission.title")), 1),
            We("p", Hb, Cn(g.value), 1),
            We("div", qb, [
              We("button", {
                class: "permission-button deny",
                onClick: ue
              }, Cn(Yi(Io)("permission.deny")), 1),
              We("button", {
                class: "permission-button allow",
                onClick: U
              }, Cn(Yi(Io)("permission.allow")), 1)
            ])
          ])) : po("", true)
        ])
      ]));
    }
  });
  Kb = (e, t) => {
    const n = e.__vccOpts || e;
    for (const [i, c] of t) n[i] = c;
    return n;
  };
  Jb = Kb(Yb, [
    [
      "__scopeId",
      "data-v-d9d60867"
    ]
  ]);
  hc = Mh(Jb);
  hc.use(yf());
  hc.mount("#splash");
  window.splashScreen = hc;
})();
export {
  Os as $,
  fv as A,
  Ji as B,
  uv as C,
  ma as D,
  rv as E,
  Et as F,
  D0 as G,
  Is as H,
  Sn as I,
  lv as J,
  iv as K,
  gi as L,
  Fd as M,
  jd as N,
  hv as O,
  ku as P,
  Qb as Q,
  It as R,
  Vn as S,
  tv as T,
  md as U,
  ls as V,
  dv as W,
  at as X,
  Ha as Y,
  hd as Z,
  Kb as _,
  __tla,
  We as a,
  hr as a$,
  _i as a0,
  go as a1,
  av as a2,
  cv as a3,
  nv as a4,
  sv as a5,
  qd as a6,
  pv as a7,
  Av as a8,
  gv as a9,
  Lh as aA,
  Dh as aB,
  km as aC,
  lr as aD,
  dl as aE,
  Lw as aF,
  Dn as aG,
  jh as aH,
  ur as aI,
  Nm as aJ,
  Um as aK,
  kh as aL,
  tm as aM,
  Aw as aN,
  qw as aO,
  mw as aP,
  Ch as aQ,
  py as aR,
  ud as aS,
  Qi as aT,
  bs as aU,
  gu as aV,
  $f as aW,
  Rd as aX,
  Zb as aY,
  Hn as aZ,
  mv as a_,
  na as aa,
  Yh as ab,
  Es as ac,
  De as ad,
  ov as ae,
  Sv as af,
  vv as ag,
  Tv as ah,
  Iv as ai,
  yv as aj,
  Ev as ak,
  bv as al,
  Ov as am,
  Mv as an,
  wv as ao,
  cn as ap,
  qs as aq,
  V0 as ar,
  wi as as,
  mi as at,
  tr as au,
  Qc as av,
  $g as aw,
  qg as ax,
  Kg as ay,
  Bg as az,
  Ut as b,
  to as b0,
  j as b1,
  M as b2,
  _v as b3,
  pu as b4,
  Pn as c,
  Dd as d,
  Gd as e,
  Ja as f,
  fs as g,
  Cp as h,
  Nr as i,
  nc as j,
  Qr as k,
  Za as l,
  Tp as m,
  Ga as n,
  rn as o,
  Ad as p,
  Rv as q,
  ua as r,
  po as s,
  Xb as t,
  Pt as u,
  Yi as v,
  ev as w,
  _d as x,
  Ip as y,
  Cn as z
};
