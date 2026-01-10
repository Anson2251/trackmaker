import { At as e, Jt as t, Kt as n, Lt as r, St as i, Xt as a, Yt as o, en as s, gt as c, mt as l, ot as u, vt as d } from "./index-GZymRP-4.js";
var f = typeof document < `u`;
function p(e2) {
  return typeof e2 == `object` || `displayName` in e2 || `props` in e2 || `__vccOpts` in e2;
}
function m(e2) {
  return e2.__esModule || e2[Symbol.toStringTag] === `Module` || e2.default && p(e2.default);
}
var h = Object.assign;
function g(e2, t2) {
  let n2 = {};
  for (let r2 in t2) {
    let i2 = t2[r2];
    n2[r2] = v(i2) ? i2.map(e2) : e2(i2);
  }
  return n2;
}
var _ = () => {
}, v = Array.isArray;
function ee(e2, t2) {
  let n2 = {};
  for (let r2 in e2) n2[r2] = r2 in t2 ? t2[r2] : e2[r2];
  return n2;
}
var y = /#/g, te = /&/g, ne = /\//g, re = /=/g, ie = /\?/g, ae = /\+/g, b = /%5B/g, x = /%5D/g, S = /%5E/g, C = /%60/g, w = /%7B/g, oe = /%7C/g, T = /%7D/g, se = /%20/g;
function E(e2) {
  return e2 == null ? `` : encodeURI(`` + e2).replace(oe, `|`).replace(b, `[`).replace(x, `]`);
}
function ce(e2) {
  return E(e2).replace(w, `{`).replace(T, `}`).replace(S, `^`);
}
function D(e2) {
  return E(e2).replace(ae, `%2B`).replace(se, `+`).replace(y, `%23`).replace(te, `%26`).replace(C, "`").replace(w, `{`).replace(T, `}`).replace(S, `^`);
}
function le(e2) {
  return D(e2).replace(re, `%3D`);
}
function O(e2) {
  return E(e2).replace(y, `%23`).replace(ie, `%3F`);
}
function ue(e2) {
  return O(e2).replace(ne, `%2F`);
}
function k(e2) {
  if (e2 == null) return null;
  try {
    return decodeURIComponent(`` + e2);
  } catch {
  }
  return `` + e2;
}
var A = /\/$/, de = (e2) => e2.replace(A, ``);
function j(e2, t2, n2 = `/`) {
  let r2, i2 = {}, a2 = ``, o2 = ``, s2 = t2.indexOf(`#`), c2 = t2.indexOf(`?`);
  return c2 = s2 >= 0 && c2 > s2 ? -1 : c2, c2 >= 0 && (r2 = t2.slice(0, c2), a2 = t2.slice(c2, s2 > 0 ? s2 : t2.length), i2 = e2(a2.slice(1))), s2 >= 0 && (r2 || (r2 = t2.slice(0, s2)), o2 = t2.slice(s2, t2.length)), r2 = me(r2 ?? t2, n2), { fullPath: r2 + a2 + o2, path: r2, query: i2, hash: k(o2) };
}
function fe(e2, t2) {
  let n2 = t2.query ? e2(t2.query) : ``;
  return t2.path + (n2 && `?`) + n2 + (t2.hash || ``);
}
function pe(e2, t2, n2) {
  let r2 = t2.matched.length - 1, i2 = n2.matched.length - 1;
  return r2 > -1 && r2 === i2 && M(t2.matched[r2], n2.matched[i2]) && N(t2.params, n2.params) && e2(t2.query) === e2(n2.query) && t2.hash === n2.hash;
}
function M(e2, t2) {
  return (e2.aliasOf || e2) === (t2.aliasOf || t2);
}
function N(e2, t2) {
  if (Object.keys(e2).length !== Object.keys(t2).length) return false;
  for (var n2 in e2) if (!P(e2[n2], t2[n2])) return false;
  return true;
}
function P(e2, t2) {
  return v(e2) ? F(e2, t2) : v(t2) ? F(t2, e2) : (e2 == null ? void 0 : e2.valueOf()) === (t2 == null ? void 0 : t2.valueOf());
}
function F(e2, t2) {
  return v(t2) ? e2.length === t2.length && e2.every((e3, n2) => e3 === t2[n2]) : e2.length === 1 && e2[0] === t2;
}
function me(e2, t2) {
  if (e2.startsWith(`/`)) return e2;
  if (!e2) return t2;
  let n2 = t2.split(`/`), r2 = e2.split(`/`), i2 = r2[r2.length - 1];
  (i2 === `..` || i2 === `.`) && r2.push(``);
  let a2 = n2.length - 1, o2, s2;
  for (o2 = 0; o2 < r2.length; o2++) if (s2 = r2[o2], s2 !== `.`) if (s2 === `..`) a2 > 1 && a2--;
  else break;
  return n2.slice(0, a2).join(`/`) + `/` + r2.slice(o2).join(`/`);
}
var I = { path: `/`, name: void 0, params: {}, query: {}, hash: ``, fullPath: `/`, matched: [], meta: {}, redirectedFrom: void 0 }, L = (function(e2) {
  return e2.pop = `pop`, e2.push = `push`, e2;
})({}), R = (function(e2) {
  return e2.back = `back`, e2.forward = `forward`, e2.unknown = ``, e2;
})({});
function z(e2) {
  if (!e2) if (f) {
    let t2 = document.querySelector(`base`);
    e2 = t2 && t2.getAttribute(`href`) || `/`, e2 = e2.replace(/^\w+:\/\/[^\/]+/, ``);
  } else e2 = `/`;
  return e2[0] !== `/` && e2[0] !== `#` && (e2 = `/` + e2), de(e2);
}
var B = /^[^#]+#/;
function V(e2, t2) {
  return e2.replace(B, `#`) + t2;
}
function H(e2, t2) {
  let n2 = document.documentElement.getBoundingClientRect(), r2 = e2.getBoundingClientRect();
  return { behavior: t2.behavior, left: r2.left - n2.left - (t2.left || 0), top: r2.top - n2.top - (t2.top || 0) };
}
var he = () => ({ left: window.scrollX, top: window.scrollY });
function ge(e2) {
  let t2;
  if (`el` in e2) {
    let n2 = e2.el, r2 = typeof n2 == `string` && n2.startsWith(`#`), i2 = typeof n2 == `string` ? r2 ? document.getElementById(n2.slice(1)) : document.querySelector(n2) : n2;
    if (!i2) return;
    t2 = H(i2, e2);
  } else t2 = e2;
  `scrollBehavior` in document.documentElement.style ? window.scrollTo(t2) : window.scrollTo(t2.left == null ? window.scrollX : t2.left, t2.top == null ? window.scrollY : t2.top);
}
function _e(e2, t2) {
  return (history.state ? history.state.position - t2 : -1) + e2;
}
var U = /* @__PURE__ */ new Map();
function ve(e2, t2) {
  U.set(e2, t2);
}
function ye(e2) {
  let t2 = U.get(e2);
  return U.delete(e2), t2;
}
function W(e2) {
  return typeof e2 == `string` || e2 && typeof e2 == `object`;
}
function be(e2) {
  return typeof e2 == `string` || typeof e2 == `symbol`;
}
var G = (function(e2) {
  return e2[e2.MATCHER_NOT_FOUND = 1] = `MATCHER_NOT_FOUND`, e2[e2.NAVIGATION_GUARD_REDIRECT = 2] = `NAVIGATION_GUARD_REDIRECT`, e2[e2.NAVIGATION_ABORTED = 4] = `NAVIGATION_ABORTED`, e2[e2.NAVIGATION_CANCELLED = 8] = `NAVIGATION_CANCELLED`, e2[e2.NAVIGATION_DUPLICATED = 16] = `NAVIGATION_DUPLICATED`, e2;
})({}), xe = Symbol(``);
G.MATCHER_NOT_FOUND, G.NAVIGATION_GUARD_REDIRECT, G.NAVIGATION_ABORTED, G.NAVIGATION_CANCELLED, G.NAVIGATION_DUPLICATED;
function K(e2, t2) {
  return h(Error(), { type: e2, [xe]: true }, t2);
}
function q(e2, t2) {
  return e2 instanceof Error && xe in e2 && (t2 == null || !!(e2.type & t2));
}
function Se(e2) {
  let t2 = {};
  if (e2 === `` || e2 === `?`) return t2;
  let n2 = (e2[0] === `?` ? e2.slice(1) : e2).split(`&`);
  for (let e3 = 0; e3 < n2.length; ++e3) {
    let r2 = n2[e3].replace(ae, ` `), i2 = r2.indexOf(`=`), a2 = k(i2 < 0 ? r2 : r2.slice(0, i2)), o2 = i2 < 0 ? null : k(r2.slice(i2 + 1));
    if (a2 in t2) {
      let e4 = t2[a2];
      v(e4) || (e4 = t2[a2] = [e4]), e4.push(o2);
    } else t2[a2] = o2;
  }
  return t2;
}
function Ce(e2) {
  let t2 = ``;
  for (let n2 in e2) {
    let r2 = e2[n2];
    if (n2 = le(n2), r2 == null) {
      r2 !== void 0 && (t2 += (t2.length ? `&` : ``) + n2);
      continue;
    }
    (v(r2) ? r2.map((e3) => e3 && D(e3)) : [r2 && D(r2)]).forEach((e3) => {
      e3 !== void 0 && (t2 += (t2.length ? `&` : ``) + n2, e3 != null && (t2 += `=` + e3));
    });
  }
  return t2;
}
function we(e2) {
  let t2 = {};
  for (let n2 in e2) {
    let r2 = e2[n2];
    r2 !== void 0 && (t2[n2] = v(r2) ? r2.map((e3) => e3 == null ? null : `` + e3) : r2 == null ? r2 : `` + r2);
  }
  return t2;
}
var Te = Symbol(``), Ee = Symbol(``), J = Symbol(``), De = Symbol(``), Oe = Symbol(``);
function Y() {
  let e2 = [];
  function t2(t3) {
    return e2.push(t3), () => {
      let n3 = e2.indexOf(t3);
      n3 > -1 && e2.splice(n3, 1);
    };
  }
  function n2() {
    e2 = [];
  }
  return { add: t2, list: () => e2.slice(), reset: n2 };
}
function X(e2, t2, n2, r2, i2, a2 = (e3) => e3()) {
  let o2 = r2 && (r2.enterCallbacks[i2] = r2.enterCallbacks[i2] || []);
  return () => new Promise((s2, c2) => {
    let l2 = (e3) => {
      e3 === false ? c2(K(G.NAVIGATION_ABORTED, { from: n2, to: t2 })) : e3 instanceof Error ? c2(e3) : W(e3) ? c2(K(G.NAVIGATION_GUARD_REDIRECT, { from: t2, to: e3 })) : (o2 && r2.enterCallbacks[i2] === o2 && typeof e3 == `function` && o2.push(e3), s2());
    }, u2 = a2(() => e2.call(r2 && r2.instances[i2], t2, n2, l2)), d2 = Promise.resolve(u2);
    e2.length < 3 && (d2 = d2.then(l2)), d2.catch((e3) => c2(e3));
  });
}
function ke(e2, t2, n2, r2, i2 = (e3) => e3()) {
  let a2 = [];
  for (let o2 of e2) for (let e3 in o2.components) {
    let s2 = o2.components[e3];
    if (!(t2 !== `beforeRouteEnter` && !o2.instances[e3])) if (p(s2)) {
      let c2 = (s2.__vccOpts || s2)[t2];
      c2 && a2.push(X(c2, n2, r2, o2, e3, i2));
    } else {
      let c2 = s2();
      a2.push(() => c2.then((a3) => {
        if (!a3) throw Error(`Couldn't resolve component "${e3}" at "${o2.path}"`);
        let s3 = m(a3) ? a3.default : a3;
        o2.mods[e3] = a3, o2.components[e3] = s3;
        let c3 = (s3.__vccOpts || s3)[t2];
        return c3 && X(c3, n2, r2, o2, e3, i2)();
      }));
    }
  }
  return a2;
}
function Ae(e2, t2) {
  let n2 = [], r2 = [], i2 = [], a2 = Math.max(t2.matched.length, e2.matched.length);
  for (let o2 = 0; o2 < a2; o2++) {
    let a3 = t2.matched[o2];
    a3 && (e2.matched.find((e3) => M(e3, a3)) ? r2.push(a3) : n2.push(a3));
    let s2 = e2.matched[o2];
    s2 && (t2.matched.find((e3) => M(e3, s2)) || i2.push(s2));
  }
  return [n2, r2, i2];
}
function je(e2 = ``) {
  let t2 = [], n2 = [[``, {}]], r2 = 0;
  e2 = z(e2);
  function i2(e3, t3 = {}) {
    r2++, r2 !== n2.length && n2.splice(r2), n2.push([e3, t3]);
  }
  function a2(e3, n3, { direction: r3, delta: i3 }) {
    let a3 = { direction: r3, delta: i3, type: L.pop };
    for (let r4 of t2) r4(e3, n3, a3);
  }
  let o2 = { location: ``, state: {}, base: e2, createHref: V.bind(null, e2), replace(e3, t3) {
    n2.splice(r2--, 1), i2(e3, t3);
  }, push(e3, t3) {
    i2(e3, t3);
  }, listen(e3) {
    return t2.push(e3), () => {
      let n3 = t2.indexOf(e3);
      n3 > -1 && t2.splice(n3, 1);
    };
  }, destroy() {
    t2 = [], n2 = [[``, {}]], r2 = 0;
  }, go(e3, t3 = true) {
    let i3 = this.location, o3 = e3 < 0 ? R.back : R.forward;
    r2 = Math.max(0, Math.min(r2 + e3, n2.length - 1)), t3 && a2(this.location, i3, { direction: o3, delta: e3 });
  } };
  return Object.defineProperty(o2, `location`, { enumerable: true, get: () => n2[r2][0] }), Object.defineProperty(o2, `state`, { enumerable: true, get: () => n2[r2][1] }), o2;
}
var Z = (function(e2) {
  return e2[e2.Static = 0] = `Static`, e2[e2.Param = 1] = `Param`, e2[e2.Group = 2] = `Group`, e2;
})({}), Q = (function(e2) {
  return e2[e2.Static = 0] = `Static`, e2[e2.Param = 1] = `Param`, e2[e2.ParamRegExp = 2] = `ParamRegExp`, e2[e2.ParamRegExpEnd = 3] = `ParamRegExpEnd`, e2[e2.EscapeNext = 4] = `EscapeNext`, e2;
})(Q || {}), Me = { type: Z.Static, value: `` }, Ne = /[a-zA-Z0-9_]/;
function Pe(e2) {
  if (!e2) return [[]];
  if (e2 === `/`) return [[Me]];
  if (!e2.startsWith(`/`)) throw Error(`Invalid path "${e2}"`);
  function t2(e3) {
    throw Error(`ERR (${n2})/"${l2}": ${e3}`);
  }
  let n2 = Q.Static, r2 = n2, i2 = [], a2;
  function o2() {
    a2 && i2.push(a2), a2 = [];
  }
  let s2 = 0, c2, l2 = ``, u2 = ``;
  function d2() {
    l2 && (l2 = (n2 === Q.Static ? a2.push({ type: Z.Static, value: l2 }) : n2 === Q.Param || n2 === Q.ParamRegExp || n2 === Q.ParamRegExpEnd ? (a2.length > 1 && (c2 === `*` || c2 === `+`) && t2(`A repeatable param (${l2}) must be alone in its segment. eg: '/:ids+.`), a2.push({ type: Z.Param, value: l2, regexp: u2, repeatable: c2 === `*` || c2 === `+`, optional: c2 === `*` || c2 === `?` })) : t2(`Invalid state to consume buffer`), ``));
  }
  function f2() {
    l2 += c2;
  }
  for (; s2 < e2.length; ) {
    if (c2 = e2[s2++], c2 === `\\` && n2 !== Q.ParamRegExp) {
      r2 = n2, n2 = Q.EscapeNext;
      continue;
    }
    switch (n2) {
      case Q.Static:
        c2 === `/` ? (l2 && d2(), o2()) : c2 === `:` ? (d2(), n2 = Q.Param) : f2();
        break;
      case Q.EscapeNext:
        f2(), n2 = r2;
        break;
      case Q.Param:
        c2 === `(` ? n2 = Q.ParamRegExp : Ne.test(c2) ? f2() : (d2(), n2 = Q.Static, c2 !== `*` && c2 !== `?` && c2 !== `+` && s2--);
        break;
      case Q.ParamRegExp:
        c2 === `)` ? u2[u2.length - 1] == `\\` ? u2 = u2.slice(0, -1) + c2 : n2 = Q.ParamRegExpEnd : u2 += c2;
        break;
      case Q.ParamRegExpEnd:
        d2(), n2 = Q.Static, c2 !== `*` && c2 !== `?` && c2 !== `+` && s2--, u2 = ``;
        break;
      default:
        t2(`Unknown state`);
        break;
    }
  }
  return n2 === Q.ParamRegExp && t2(`Unfinished custom RegExp for param "${l2}"`), d2(), o2(), i2;
}
var Fe = `[^/]+?`, Ie = { sensitive: false, strict: false, start: true, end: true }, $ = (function(e2) {
  return e2[e2._multiplier = 10] = `_multiplier`, e2[e2.Root = 90] = `Root`, e2[e2.Segment = 40] = `Segment`, e2[e2.SubSegment = 30] = `SubSegment`, e2[e2.Static = 40] = `Static`, e2[e2.Dynamic = 20] = `Dynamic`, e2[e2.BonusCustomRegExp = 10] = `BonusCustomRegExp`, e2[e2.BonusWildcard = -50] = `BonusWildcard`, e2[e2.BonusRepeatable = -20] = `BonusRepeatable`, e2[e2.BonusOptional = -8] = `BonusOptional`, e2[e2.BonusStrict = 0.7000000000000001] = `BonusStrict`, e2[e2.BonusCaseSensitive = 0.25] = `BonusCaseSensitive`, e2;
})($ || {}), Le = /[.+*?^${}()[\]/\\]/g;
function Re(e2, t2) {
  let n2 = h({}, Ie, t2), r2 = [], i2 = n2.start ? `^` : ``, a2 = [];
  for (let t3 of e2) {
    let e3 = t3.length ? [] : [$.Root];
    n2.strict && !t3.length && (i2 += `/`);
    for (let r3 = 0; r3 < t3.length; r3++) {
      let o3 = t3[r3], s3 = $.Segment + (n2.sensitive ? $.BonusCaseSensitive : 0);
      if (o3.type === Z.Static) r3 || (i2 += `/`), i2 += o3.value.replace(Le, `\\$&`), s3 += $.Static;
      else if (o3.type === Z.Param) {
        let { value: e4, repeatable: n3, optional: c3, regexp: l2 } = o3;
        a2.push({ name: e4, repeatable: n3, optional: c3 });
        let u2 = l2 || Fe;
        if (u2 !== Fe) {
          s3 += $.BonusCustomRegExp;
          try {
            `${u2}`;
          } catch (t4) {
            throw Error(`Invalid custom RegExp for param "${e4}" (${u2}): ` + t4.message);
          }
        }
        let d2 = n3 ? `((?:${u2})(?:/(?:${u2}))*)` : `(${u2})`;
        r3 || (d2 = c3 && t3.length < 2 ? `(?:/${d2})` : `/` + d2), c3 && (d2 += `?`), i2 += d2, s3 += $.Dynamic, c3 && (s3 += $.BonusOptional), n3 && (s3 += $.BonusRepeatable), u2 === `.*` && (s3 += $.BonusWildcard);
      }
      e3.push(s3);
    }
    r2.push(e3);
  }
  if (n2.strict && n2.end) {
    let e3 = r2.length - 1;
    r2[e3][r2[e3].length - 1] += $.BonusStrict;
  }
  n2.strict || (i2 += `/?`), n2.end ? i2 += `$` : n2.strict && !i2.endsWith(`/`) && (i2 += `(?:/|$)`);
  let o2 = new RegExp(i2, n2.sensitive ? `` : `i`);
  function s2(e3) {
    let t3 = e3.match(o2), n3 = {};
    if (!t3) return null;
    for (let e4 = 1; e4 < t3.length; e4++) {
      let r3 = t3[e4] || ``, i3 = a2[e4 - 1];
      n3[i3.name] = r3 && i3.repeatable ? r3.split(`/`) : r3;
    }
    return n3;
  }
  function c2(t3) {
    let n3 = ``, r3 = false;
    for (let i3 of e2) {
      (!r3 || !n3.endsWith(`/`)) && (n3 += `/`), r3 = false;
      for (let e3 of i3) if (e3.type === Z.Static) n3 += e3.value;
      else if (e3.type === Z.Param) {
        let { value: a3, repeatable: o3, optional: s3 } = e3, c3 = a3 in t3 ? t3[a3] : ``;
        if (v(c3) && !o3) throw Error(`Provided param "${a3}" is an array but it is not repeatable (* or + modifiers)`);
        let l2 = v(c3) ? c3.join(`/`) : c3;
        if (!l2) if (s3) i3.length < 2 && (n3.endsWith(`/`) ? n3 = n3.slice(0, -1) : r3 = true);
        else throw Error(`Missing required param "${a3}"`);
        n3 += l2;
      }
    }
    return n3 || `/`;
  }
  return { re: o2, score: r2, keys: a2, parse: s2, stringify: c2 };
}
function ze(e2, t2) {
  let n2 = 0;
  for (; n2 < e2.length && n2 < t2.length; ) {
    let r2 = t2[n2] - e2[n2];
    if (r2) return r2;
    n2++;
  }
  return e2.length < t2.length ? e2.length === 1 && e2[0] === $.Static + $.Segment ? -1 : 1 : e2.length > t2.length ? t2.length === 1 && t2[0] === $.Static + $.Segment ? 1 : -1 : 0;
}
function Be(e2, t2) {
  let n2 = 0, r2 = e2.score, i2 = t2.score;
  for (; n2 < r2.length && n2 < i2.length; ) {
    let e3 = ze(r2[n2], i2[n2]);
    if (e3) return e3;
    n2++;
  }
  if (Math.abs(i2.length - r2.length) === 1) {
    if (Ve(r2)) return 1;
    if (Ve(i2)) return -1;
  }
  return i2.length - r2.length;
}
function Ve(e2) {
  let t2 = e2[e2.length - 1];
  return e2.length > 0 && t2[t2.length - 1] < 0;
}
var He = { strict: false, end: true, sensitive: false };
function Ue(e2, t2, n2) {
  let r2 = h(Re(Pe(e2.path), n2), { record: e2, parent: t2, children: [], alias: [] });
  return t2 && !r2.record.aliasOf == !t2.record.aliasOf && t2.children.push(r2), r2;
}
function We(e2, t2) {
  let n2 = [], r2 = /* @__PURE__ */ new Map();
  t2 = ee(He, t2);
  function i2(e3) {
    return r2.get(e3);
  }
  function a2(e3, n3, r3) {
    let i3 = !r3, s3 = Ke(e3);
    s3.aliasOf = r3 && r3.record;
    let l3 = ee(t2, e3), u3 = [s3];
    if (`alias` in e3) {
      let t3 = typeof e3.alias == `string` ? [e3.alias] : e3.alias;
      for (let e4 of t3) u3.push(Ke(h({}, s3, { components: r3 ? r3.record.components : s3.components, path: e4, aliasOf: r3 ? r3.record : s3 })));
    }
    let d2, f2;
    for (let t3 of u3) {
      let { path: u4 } = t3;
      if (n3 && u4[0] !== `/`) {
        let e4 = n3.record.path, r4 = e4[e4.length - 1] === `/` ? `` : `/`;
        t3.path = n3.record.path + (u4 && r4 + u4);
      }
      if (d2 = Ue(t3, n3, l3), r3 ? r3.alias.push(d2) : (f2 || (f2 = d2), f2 !== d2 && f2.alias.push(d2), i3 && e3.name && !Je(d2) && o2(e3.name)), Qe(d2) && c2(d2), s3.children) {
        let e4 = s3.children;
        for (let t4 = 0; t4 < e4.length; t4++) a2(e4[t4], d2, r3 && r3.children[t4]);
      }
      r3 || (r3 = d2);
    }
    return f2 ? () => {
      o2(f2);
    } : _;
  }
  function o2(e3) {
    if (be(e3)) {
      let t3 = r2.get(e3);
      t3 && (r2.delete(e3), n2.splice(n2.indexOf(t3), 1), t3.children.forEach(o2), t3.alias.forEach(o2));
    } else {
      let t3 = n2.indexOf(e3);
      t3 > -1 && (n2.splice(t3, 1), e3.record.name && r2.delete(e3.record.name), e3.children.forEach(o2), e3.alias.forEach(o2));
    }
  }
  function s2() {
    return n2;
  }
  function c2(e3) {
    let t3 = Xe(e3, n2);
    n2.splice(t3, 0, e3), e3.record.name && !Je(e3) && r2.set(e3.record.name, e3);
  }
  function l2(e3, t3) {
    let i3, a3 = {}, o3, s3;
    if (`name` in e3 && e3.name) {
      if (i3 = r2.get(e3.name), !i3) throw K(G.MATCHER_NOT_FOUND, { location: e3 });
      s3 = i3.record.name, a3 = h(Ge(t3.params, i3.keys.filter((e4) => !e4.optional).concat(i3.parent ? i3.parent.keys.filter((e4) => e4.optional) : []).map((e4) => e4.name)), e3.params && Ge(e3.params, i3.keys.map((e4) => e4.name))), o3 = i3.stringify(a3);
    } else if (e3.path != null) o3 = e3.path, i3 = n2.find((e4) => e4.re.test(o3)), i3 && (a3 = i3.parse(o3), s3 = i3.record.name);
    else {
      if (i3 = t3.name ? r2.get(t3.name) : n2.find((e4) => e4.re.test(t3.path)), !i3) throw K(G.MATCHER_NOT_FOUND, { location: e3, currentLocation: t3 });
      s3 = i3.record.name, a3 = h({}, t3.params, e3.params), o3 = i3.stringify(a3);
    }
    let c3 = [], l3 = i3;
    for (; l3; ) c3.unshift(l3.record), l3 = l3.parent;
    return { name: s3, path: o3, params: a3, matched: c3, meta: Ye(c3) };
  }
  e2.forEach((e3) => a2(e3));
  function u2() {
    n2.length = 0, r2.clear();
  }
  return { addRoute: a2, resolve: l2, removeRoute: o2, clearRoutes: u2, getRoutes: s2, getRecordMatcher: i2 };
}
function Ge(e2, t2) {
  let n2 = {};
  for (let r2 of t2) r2 in e2 && (n2[r2] = e2[r2]);
  return n2;
}
function Ke(e2) {
  let t2 = { path: e2.path, redirect: e2.redirect, name: e2.name, meta: e2.meta || {}, aliasOf: e2.aliasOf, beforeEnter: e2.beforeEnter, props: qe(e2), children: e2.children || [], instances: {}, leaveGuards: /* @__PURE__ */ new Set(), updateGuards: /* @__PURE__ */ new Set(), enterCallbacks: {}, components: `components` in e2 ? e2.components || null : e2.component && { default: e2.component } };
  return Object.defineProperty(t2, `mods`, { value: {} }), t2;
}
function qe(e2) {
  let t2 = {}, n2 = e2.props || false;
  if (`component` in e2) t2.default = n2;
  else for (let r2 in e2.components) t2[r2] = typeof n2 == `object` ? n2[r2] : n2;
  return t2;
}
function Je(e2) {
  for (; e2; ) {
    if (e2.record.aliasOf) return true;
    e2 = e2.parent;
  }
  return false;
}
function Ye(e2) {
  return e2.reduce((e3, t2) => h(e3, t2.meta), {});
}
function Xe(e2, t2) {
  let n2 = 0, r2 = t2.length;
  for (; n2 !== r2; ) {
    let i3 = n2 + r2 >> 1;
    Be(e2, t2[i3]) < 0 ? r2 = i3 : n2 = i3 + 1;
  }
  let i2 = Ze(e2);
  return i2 && (r2 = t2.lastIndexOf(i2, r2 - 1)), r2;
}
function Ze(e2) {
  let t2 = e2;
  for (; t2 = t2.parent; ) if (Qe(t2) && Be(e2, t2) === 0) return t2;
}
function Qe({ record: e2 }) {
  return !!(e2.name || e2.components && Object.keys(e2.components).length || e2.redirect);
}
function $e(e2) {
  let t2 = d(J), n2 = d(De), r2 = u(() => {
    let n3 = s(e2.to);
    return t2.resolve(n3);
  }), i2 = u(() => {
    let { matched: e3 } = r2.value, { length: t3 } = e3, i3 = e3[t3 - 1], a3 = n2.matched;
    if (!i3 || !a3.length) return -1;
    let o3 = a3.findIndex(M.bind(null, i3));
    if (o3 > -1) return o3;
    let s2 = it(e3[t3 - 2]);
    return t3 > 1 && it(i3) === s2 && a3[a3.length - 1].path !== s2 ? a3.findIndex(M.bind(null, e3[t3 - 2])) : o3;
  }), a2 = u(() => i2.value > -1 && rt(n2.params, r2.value.params)), o2 = u(() => i2.value > -1 && i2.value === n2.matched.length - 1 && N(n2.params, r2.value.params));
  function c2(n3 = {}) {
    if (nt(n3)) {
      let n4 = t2[s(e2.replace) ? `replace` : `push`](s(e2.to)).catch(_);
      return e2.viewTransition && typeof document < `u` && `startViewTransition` in document && document.startViewTransition(() => n4), n4;
    }
    return Promise.resolve();
  }
  return { route: r2, href: u(() => r2.value.href), isActive: a2, isExactActive: o2, navigate: c2 };
}
function et(e2) {
  return e2.length === 1 ? e2[0] : e2;
}
var tt = l({ name: `RouterLink`, compatConfig: { MODE: 3 }, props: { to: { type: [String, Object], required: true }, replace: Boolean, activeClass: String, exactActiveClass: String, custom: Boolean, ariaCurrentValue: { type: String, default: `page` }, viewTransition: Boolean }, useLink: $e, setup(e2, { slots: t2 }) {
  let r2 = n($e(e2)), { options: i2 } = d(J), a2 = u(() => ({ [at(e2.activeClass, i2.linkActiveClass, `router-link-active`)]: r2.isActive, [at(e2.exactActiveClass, i2.linkExactActiveClass, `router-link-exact-active`)]: r2.isExactActive }));
  return () => {
    let n2 = t2.default && et(t2.default(r2));
    return e2.custom ? n2 : c(`a`, { "aria-current": r2.isExactActive ? e2.ariaCurrentValue : null, href: r2.href, onClick: r2.navigate, class: a2.value }, n2);
  };
} });
function nt(e2) {
  if (!(e2.metaKey || e2.altKey || e2.ctrlKey || e2.shiftKey) && !e2.defaultPrevented && !(e2.button !== void 0 && e2.button !== 0)) {
    if (e2.currentTarget && e2.currentTarget.getAttribute) {
      let t2 = e2.currentTarget.getAttribute(`target`);
      if (/\b_blank\b/i.test(t2)) return;
    }
    return e2.preventDefault && e2.preventDefault(), true;
  }
}
function rt(e2, t2) {
  for (let n2 in t2) {
    let r2 = t2[n2], i2 = e2[n2];
    if (typeof r2 == `string`) {
      if (r2 !== i2) return false;
    } else if (!v(i2) || i2.length !== r2.length || r2.some((e3, t3) => e3.valueOf() !== i2[t3].valueOf())) return false;
  }
  return true;
}
function it(e2) {
  return e2 ? e2.aliasOf ? e2.aliasOf.path : e2.path : ``;
}
var at = (e2, t2, n2) => e2 ?? t2 ?? n2, ot = l({ name: `RouterView`, inheritAttrs: false, props: { name: { type: String, default: `default` }, route: Object }, compatConfig: { MODE: 3 }, setup(n2, { attrs: i2, slots: a2 }) {
  let o2 = d(Oe), l2 = u(() => n2.route || o2.value), f2 = d(Ee, 0), p2 = u(() => {
    let e2 = s(f2), { matched: t2 } = l2.value, n3;
    for (; (n3 = t2[e2]) && !n3.components; ) e2++;
    return e2;
  }), m2 = u(() => l2.value.matched[p2.value]);
  e(Ee, u(() => p2.value + 1)), e(Te, m2), e(Oe, l2);
  let g2 = t();
  return r(() => [g2.value, m2.value, n2.name], ([e2, t2, n3], [r2, i3, a3]) => {
    t2 && (t2.instances[n3] = e2, i3 && i3 !== t2 && e2 && e2 === r2 && (t2.leaveGuards.size || (t2.leaveGuards = i3.leaveGuards), t2.updateGuards.size || (t2.updateGuards = i3.updateGuards))), e2 && t2 && (!i3 || !M(t2, i3) || !r2) && (t2.enterCallbacks[n3] || []).forEach((t3) => t3(e2));
  }, { flush: `post` }), () => {
    let e2 = l2.value, t2 = n2.name, r2 = m2.value, o3 = r2 && r2.components[t2];
    if (!o3) return st(a2.default, { Component: o3, route: e2 });
    let s2 = r2.props[t2], u2 = c(o3, h({}, s2 ? s2 === true ? e2.params : typeof s2 == `function` ? s2(e2) : s2 : null, i2, { onVnodeUnmounted: (e3) => {
      e3.component.isUnmounted && (r2.instances[t2] = null);
    }, ref: g2 }));
    return st(a2.default, { Component: u2, route: e2 }) || u2;
  };
} });
function st(e2, t2) {
  if (!e2) return null;
  let n2 = e2(t2);
  return n2.length === 1 ? n2[0] : n2;
}
var ct = ot;
function lt(e2) {
  let t2 = We(e2.routes, e2), n2 = e2.parseQuery || Se, r2 = e2.stringifyQuery || Ce, c2 = e2.history, l2 = Y(), u2 = Y(), d2 = Y(), p2 = a(I), m2 = I;
  f && e2.scrollBehavior && `scrollRestoration` in history && (history.scrollRestoration = `manual`);
  let ee2 = g.bind(null, (e3) => `` + e3), y2 = g.bind(null, ue), te2 = g.bind(null, k);
  function ne2(e3, n3) {
    let r3, i2;
    return be(e3) ? (r3 = t2.getRecordMatcher(e3), i2 = n3) : i2 = e3, t2.addRoute(i2, r3);
  }
  function re2(e3) {
    let n3 = t2.getRecordMatcher(e3);
    n3 && t2.removeRoute(n3);
  }
  function ie2() {
    return t2.getRoutes().map((e3) => e3.record);
  }
  function ae2(e3) {
    return !!t2.getRecordMatcher(e3);
  }
  function b2(e3, i2) {
    if (i2 = h({}, i2 || p2.value), typeof e3 == `string`) {
      let r3 = j(n2, e3, i2.path), a3 = t2.resolve({ path: r3.path }, i2), o3 = c2.createHref(r3.fullPath);
      return h(r3, a3, { params: te2(a3.params), hash: k(r3.hash), redirectedFrom: void 0, href: o3 });
    }
    let a2;
    if (e3.path != null) a2 = h({}, e3, { path: j(n2, e3.path, i2.path).path });
    else {
      let t3 = h({}, e3.params);
      for (let e4 in t3) t3[e4] ?? delete t3[e4];
      a2 = h({}, e3, { params: y2(t3) }), i2.params = y2(i2.params);
    }
    let o2 = t2.resolve(a2, i2), s2 = e3.hash || ``;
    o2.params = ee2(te2(o2.params));
    let l3 = fe(r2, h({}, e3, { hash: ce(s2), path: o2.path })), u3 = c2.createHref(l3);
    return h({ fullPath: l3, hash: s2, query: r2 === Ce ? we(e3.query) : e3.query || {} }, o2, { redirectedFrom: void 0, href: u3 });
  }
  function x2(e3) {
    return typeof e3 == `string` ? j(n2, e3, p2.value.path) : h({}, e3);
  }
  function S2(e3, t3) {
    if (m2 !== e3) return K(G.NAVIGATION_CANCELLED, { from: t3, to: e3 });
  }
  function C2(e3) {
    return T2(e3);
  }
  function w2(e3) {
    return C2(h(x2(e3), { replace: true }));
  }
  function oe2(e3, t3) {
    let n3 = e3.matched[e3.matched.length - 1];
    if (n3 && n3.redirect) {
      let { redirect: r3 } = n3, i2 = typeof r3 == `function` ? r3(e3, t3) : r3;
      return typeof i2 == `string` && (i2 = i2.includes(`?`) || i2.includes(`#`) ? i2 = x2(i2) : { path: i2 }, i2.params = {}), h({ query: e3.query, hash: e3.hash, params: i2.path == null ? e3.params : {} }, i2);
    }
  }
  function T2(e3, t3) {
    let n3 = m2 = b2(e3), i2 = p2.value, a2 = e3.state, o2 = e3.force, s2 = e3.replace === true, c3 = oe2(n3, i2);
    if (c3) return T2(h(x2(c3), { state: typeof c3 == `object` ? h({}, a2, c3.state) : a2, force: o2, replace: s2 }), t3 || n3);
    let l3 = n3;
    l3.redirectedFrom = t3;
    let u3;
    return !o2 && pe(r2, i2, n3) && (u3 = K(G.NAVIGATION_DUPLICATED, { to: l3, from: i2 }), z2(i2, i2, true, false)), (u3 ? Promise.resolve(u3) : D2(l3, i2)).catch((e4) => q(e4) ? q(e4, G.NAVIGATION_GUARD_REDIRECT) ? e4 : R2(e4) : F2(e4, l3, i2)).then((e4) => {
      if (e4) {
        if (q(e4, G.NAVIGATION_GUARD_REDIRECT)) return T2(h({ replace: s2 }, x2(e4.to), { state: typeof e4.to == `object` ? h({}, a2, e4.to.state) : a2, force: o2 }), t3 || l3);
      } else e4 = O2(l3, i2, true, s2, a2);
      return le2(l3, i2, e4), e4;
    });
  }
  function se2(e3, t3) {
    let n3 = S2(e3, t3);
    return n3 ? Promise.reject(n3) : Promise.resolve();
  }
  function E2(e3) {
    let t3 = H2.values().next().value;
    return t3 && typeof t3.runWithContext == `function` ? t3.runWithContext(e3) : e3();
  }
  function D2(e3, t3) {
    let n3, [r3, i2, a2] = Ae(e3, t3);
    n3 = ke(r3.reverse(), `beforeRouteLeave`, e3, t3);
    for (let i3 of r3) i3.leaveGuards.forEach((r4) => {
      n3.push(X(r4, e3, t3));
    });
    let o2 = se2.bind(null, e3, t3);
    return n3.push(o2), W2(n3).then(() => {
      n3 = [];
      for (let r4 of l2.list()) n3.push(X(r4, e3, t3));
      return n3.push(o2), W2(n3);
    }).then(() => {
      n3 = ke(i2, `beforeRouteUpdate`, e3, t3);
      for (let r4 of i2) r4.updateGuards.forEach((r5) => {
        n3.push(X(r5, e3, t3));
      });
      return n3.push(o2), W2(n3);
    }).then(() => {
      n3 = [];
      for (let r4 of a2) if (r4.beforeEnter) if (v(r4.beforeEnter)) for (let i3 of r4.beforeEnter) n3.push(X(i3, e3, t3));
      else n3.push(X(r4.beforeEnter, e3, t3));
      return n3.push(o2), W2(n3);
    }).then(() => (e3.matched.forEach((e4) => e4.enterCallbacks = {}), n3 = ke(a2, `beforeRouteEnter`, e3, t3, E2), n3.push(o2), W2(n3))).then(() => {
      n3 = [];
      for (let r4 of u2.list()) n3.push(X(r4, e3, t3));
      return n3.push(o2), W2(n3);
    }).catch((e4) => q(e4, G.NAVIGATION_CANCELLED) ? e4 : Promise.reject(e4));
  }
  function le2(e3, t3, n3) {
    d2.list().forEach((r3) => E2(() => r3(e3, t3, n3)));
  }
  function O2(e3, t3, n3, r3, i2) {
    let a2 = S2(e3, t3);
    if (a2) return a2;
    let o2 = t3 === I, s2 = f ? history.state : {};
    n3 && (r3 || o2 ? c2.replace(e3.fullPath, h({ scroll: o2 && s2 && s2.scroll }, i2)) : c2.push(e3.fullPath, i2)), p2.value = e3, z2(e3, t3, n3, o2), R2();
  }
  let A2;
  function de2() {
    A2 || (A2 = c2.listen((e3, t3, n3) => {
      if (!U2.listening) return;
      let r3 = b2(e3), i2 = oe2(r3, U2.currentRoute.value);
      if (i2) {
        T2(h(i2, { replace: true, force: true }), r3).catch(_);
        return;
      }
      m2 = r3;
      let a2 = p2.value;
      f && ve(_e(a2.fullPath, n3.delta), he()), D2(r3, a2).catch((e4) => q(e4, G.NAVIGATION_ABORTED | G.NAVIGATION_CANCELLED) ? e4 : q(e4, G.NAVIGATION_GUARD_REDIRECT) ? (T2(h(x2(e4.to), { force: true }), r3).then((e5) => {
        q(e5, G.NAVIGATION_ABORTED | G.NAVIGATION_DUPLICATED) && !n3.delta && n3.type === L.pop && c2.go(-1, false);
      }).catch(_), Promise.reject()) : (n3.delta && c2.go(-n3.delta, false), F2(e4, r3, a2))).then((e4) => {
        e4 || (e4 = O2(r3, a2, false)), e4 && (n3.delta && !q(e4, G.NAVIGATION_CANCELLED) ? c2.go(-n3.delta, false) : n3.type === L.pop && q(e4, G.NAVIGATION_ABORTED | G.NAVIGATION_DUPLICATED) && c2.go(-1, false)), le2(r3, a2, e4);
      }).catch(_);
    }));
  }
  let M2 = Y(), N2 = Y(), P2;
  function F2(e3, t3, n3) {
    R2(e3);
    let r3 = N2.list();
    return r3.length ? r3.forEach((r4) => r4(e3, t3, n3)) : console.error(e3), Promise.reject(e3);
  }
  function me2() {
    return P2 && p2.value !== I ? Promise.resolve() : new Promise((e3, t3) => {
      M2.add([e3, t3]);
    });
  }
  function R2(e3) {
    return P2 || (P2 = !e3, de2(), M2.list().forEach(([t3, n3]) => e3 ? n3(e3) : t3()), M2.reset()), e3;
  }
  function z2(t3, n3, r3, a2) {
    let { scrollBehavior: o2 } = e2;
    if (!f || !o2) return Promise.resolve();
    let s2 = !r3 && ye(_e(t3.fullPath, 0)) || (a2 || !r3) && history.state && history.state.scroll || null;
    return i().then(() => o2(t3, n3, s2)).then((e3) => e3 && ge(e3)).catch((e3) => F2(e3, t3, n3));
  }
  let B2 = (e3) => c2.go(e3), V2, H2 = /* @__PURE__ */ new Set(), U2 = { currentRoute: p2, listening: true, addRoute: ne2, removeRoute: re2, clearRoutes: t2.clearRoutes, hasRoute: ae2, getRoutes: ie2, resolve: b2, options: e2, push: C2, replace: w2, go: B2, back: () => B2(-1), forward: () => B2(1), beforeEach: l2.add, beforeResolve: u2.add, afterEach: d2.add, onError: N2.add, isReady: me2, install(e3) {
    e3.component(`RouterLink`, tt), e3.component(`RouterView`, ct), e3.config.globalProperties.$router = U2, Object.defineProperty(e3.config.globalProperties, `$route`, { enumerable: true, get: () => s(p2) }), f && !V2 && p2.value === I && (V2 = true, C2(c2.location).catch((e4) => {
    }));
    let t3 = {};
    for (let e4 in I) Object.defineProperty(t3, e4, { get: () => p2.value[e4], enumerable: true });
    e3.provide(J, U2), e3.provide(De, o(t3)), e3.provide(Oe, p2);
    let n3 = e3.unmount;
    H2.add(e3), e3.unmount = function() {
      H2.delete(e3), H2.size < 1 && (m2 = I, A2 && A2(), A2 = null, p2.value = I, V2 = false, P2 = false), n3();
    };
  } };
  function W2(e3) {
    return e3.reduce((e4, t3) => e4.then(() => E2(t3)), Promise.resolve());
  }
  return U2;
}
function ut() {
  return d(J);
}
function dt(e2) {
  return d(De);
}
export {
  dt as a,
  lt as i,
  ct as n,
  ut as o,
  je as r,
  tt as t
};
