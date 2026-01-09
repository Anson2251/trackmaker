import { Dt as e, Jt as t, Lt as n, Ot as r, Ut as i, Vt as a, Xt as o, gt as s, ht as c, it as l, mt as u, ot as d, pt as f, tt as p, vt as m, wt as h } from "./index-upUQvnWP.js";
function g(e2, t2) {
  typeof console < `u` && (console.warn(`[intlify] ` + e2), t2 && console.warn(t2.stack));
}
var _ = typeof window < `u`, v = (e2, t2 = false) => t2 ? Symbol.for(e2) : Symbol(e2), y = (e2, t2, n2) => b({ l: e2, k: t2, s: n2 }), b = (e2) => JSON.stringify(e2).replace(/\u2028/g, `\\u2028`).replace(/\u2029/g, `\\u2029`).replace(/\u0027/g, `\\u0027`), x = (e2) => typeof e2 == `number` && isFinite(e2), S = (e2) => re(e2) === `[object Date]`, C = (e2) => re(e2) === `[object RegExp]`, w = (e2) => z(e2) && Object.keys(e2).length === 0, T = Object.assign, E = Object.create, D = (e2 = null) => E(e2), O, k = () => O || (O = typeof globalThis < `u` ? globalThis : typeof self < `u` ? self : typeof window < `u` ? window : typeof global < `u` ? global : D());
function ee(e2) {
  return e2.replace(/&/g, `&amp;`).replace(/</g, `&lt;`).replace(/>/g, `&gt;`).replace(/"/g, `&quot;`).replace(/'/g, `&apos;`).replace(/\//g, `&#x2F;`).replace(/=/g, `&#x3D;`);
}
function te(e2) {
  return e2.replace(/&(?![a-zA-Z0-9#]{2,6};)/g, `&amp;`).replace(/"/g, `&quot;`).replace(/'/g, `&apos;`).replace(/</g, `&lt;`).replace(/>/g, `&gt;`);
}
function A(e2) {
  return e2 = e2.replace(/(\w+)\s*=\s*"([^"]*)"/g, (e3, t2, n2) => `${t2}="${te(n2)}"`), e2 = e2.replace(/(\w+)\s*=\s*'([^']*)'/g, (e3, t2, n2) => `${t2}='${te(n2)}'`), /\s*on\w+\s*=\s*["']?[^"'>]+["']?/gi.test(e2) && (e2 = e2.replace(/(\s+)(on)(\w+\s*=)/gi, `$1&#111;n$3`)), [/(\s+(?:href|src|action|formaction)\s*=\s*["']?)\s*javascript:/gi, /(style\s*=\s*["'][^"']*url\s*\(\s*)javascript:/gi].forEach((t2) => {
    e2 = e2.replace(t2, `$1javascript&#58;`);
  }), e2;
}
var j = Object.prototype.hasOwnProperty;
function M(e2, t2) {
  return j.call(e2, t2);
}
var N = Array.isArray, P = (e2) => typeof e2 == `function`, F = (e2) => typeof e2 == `string`, I = (e2) => typeof e2 == `boolean`, L = (e2) => typeof e2 == `object` && !!e2, ne = (e2) => L(e2) && P(e2.then) && P(e2.catch), R = Object.prototype.toString, re = (e2) => R.call(e2), z = (e2) => {
  if (!L(e2)) return false;
  let t2 = Object.getPrototypeOf(e2);
  return t2 === null || t2.constructor === Object;
}, ie = (e2) => e2 == null ? `` : N(e2) || z(e2) && e2.toString === R ? JSON.stringify(e2, null, 2) : String(e2);
function ae(e2, t2 = ``) {
  return e2.reduce((e3, n2, r2) => r2 === 0 ? e3 + n2 : e3 + t2 + n2, ``);
}
function oe(e2) {
  let t2 = e2;
  return () => ++t2;
}
var se = (e2) => !L(e2) || N(e2);
function ce(e2, t2) {
  if (se(e2) || se(t2)) throw Error(`Invalid value`);
  let n2 = [{ src: e2, des: t2 }];
  for (; n2.length; ) {
    let { src: e3, des: t3 } = n2.pop();
    Object.keys(e3).forEach((r2) => {
      r2 !== `__proto__` && (L(e3[r2]) && !L(t3[r2]) && (t3[r2] = Array.isArray(e3[r2]) ? [] : D()), se(t3[r2]) || se(e3[r2]) ? t3[r2] = e3[r2] : n2.push({ src: e3[r2], des: t3[r2] }));
    });
  }
}
function le(e2, t2, n2) {
  return { line: e2, column: t2, offset: n2 };
}
function ue(e2, t2, n2) {
  let r2 = { start: e2, end: t2 };
  return n2 != null && (r2.source = n2), r2;
}
var de = /\{([0-9a-zA-Z]+)\}/g;
function B(e2, ...t2) {
  return t2.length === 1 && me(t2[0]) && (t2 = t2[0]), (!t2 || !t2.hasOwnProperty) && (t2 = {}), e2.replace(de, (e3, n2) => t2.hasOwnProperty(n2) ? t2[n2] : ``);
}
var fe = Object.assign, pe = (e2) => typeof e2 == `string`, me = (e2) => typeof e2 == `object` && !!e2;
function he(e2, t2 = ``) {
  return e2.reduce((e3, n2, r2) => r2 === 0 ? e3 + n2 : e3 + t2 + n2, ``);
}
var ge = { USE_MODULO_SYNTAX: 1, __EXTEND_POINT__: 2 }, _e = { [ge.USE_MODULO_SYNTAX]: `Use modulo before '{{0}}'.` };
function ve(e2, t2, ...n2) {
  let r2 = B(_e[e2] || ``, ...n2 || []), i2 = { message: String(r2), code: e2 };
  return t2 && (i2.location = t2), i2;
}
var V = { EXPECTED_TOKEN: 1, INVALID_TOKEN_IN_PLACEHOLDER: 2, UNTERMINATED_SINGLE_QUOTE_IN_PLACEHOLDER: 3, UNKNOWN_ESCAPE_SEQUENCE: 4, INVALID_UNICODE_ESCAPE_SEQUENCE: 5, UNBALANCED_CLOSING_BRACE: 6, UNTERMINATED_CLOSING_BRACE: 7, EMPTY_PLACEHOLDER: 8, NOT_ALLOW_NEST_PLACEHOLDER: 9, INVALID_LINKED_FORMAT: 10, MUST_HAVE_MESSAGES_IN_PLURAL: 11, UNEXPECTED_EMPTY_LINKED_MODIFIER: 12, UNEXPECTED_EMPTY_LINKED_KEY: 13, UNEXPECTED_LEXICAL_ANALYSIS: 14, UNHANDLED_CODEGEN_NODE_TYPE: 15, UNHANDLED_MINIFIER_NODE_TYPE: 16, __EXTEND_POINT__: 17 }, ye = { [V.EXPECTED_TOKEN]: `Expected token: '{0}'`, [V.INVALID_TOKEN_IN_PLACEHOLDER]: `Invalid token in placeholder: '{0}'`, [V.UNTERMINATED_SINGLE_QUOTE_IN_PLACEHOLDER]: `Unterminated single quote in placeholder`, [V.UNKNOWN_ESCAPE_SEQUENCE]: `Unknown escape sequence: \\{0}`, [V.INVALID_UNICODE_ESCAPE_SEQUENCE]: `Invalid unicode escape sequence: {0}`, [V.UNBALANCED_CLOSING_BRACE]: `Unbalanced closing brace`, [V.UNTERMINATED_CLOSING_BRACE]: `Unterminated closing brace`, [V.EMPTY_PLACEHOLDER]: `Empty placeholder`, [V.NOT_ALLOW_NEST_PLACEHOLDER]: `Not allowed nest placeholder`, [V.INVALID_LINKED_FORMAT]: `Invalid linked format`, [V.MUST_HAVE_MESSAGES_IN_PLURAL]: `Plural must have messages`, [V.UNEXPECTED_EMPTY_LINKED_MODIFIER]: `Unexpected empty linked modifier`, [V.UNEXPECTED_EMPTY_LINKED_KEY]: `Unexpected empty linked key`, [V.UNEXPECTED_LEXICAL_ANALYSIS]: `Unexpected lexical analysis in token: '{0}'`, [V.UNHANDLED_CODEGEN_NODE_TYPE]: `unhandled codegen node type: '{0}'`, [V.UNHANDLED_MINIFIER_NODE_TYPE]: `unhandled mimifier node type: '{0}'` };
function be(e2, t2, n2 = {}) {
  let { domain: r2, messages: i2, args: a2 } = n2, o2 = B((i2 || ye)[e2] || ``, ...a2 || []), s2 = SyntaxError(String(o2));
  return s2.code = e2, t2 && (s2.location = t2), s2.domain = r2, s2;
}
function xe(e2) {
  throw e2;
}
var H = ` `, Se = `\r`, U = `
`, Ce = `\u2028`, we = `\u2029`;
function Te(e2) {
  let t2 = e2, n2 = 0, r2 = 1, i2 = 1, a2 = 0, o2 = (e3) => t2[e3] === Se && t2[e3 + 1] === U, s2 = (e3) => t2[e3] === U, c2 = (e3) => t2[e3] === we, l2 = (e3) => t2[e3] === Ce, u2 = (e3) => o2(e3) || s2(e3) || c2(e3) || l2(e3), d2 = () => n2, f2 = () => r2, p2 = () => i2, m2 = () => a2, h2 = (e3) => o2(e3) || c2(e3) || l2(e3) ? U : t2[e3], g2 = () => h2(n2), _2 = () => h2(n2 + a2);
  function v2() {
    return a2 = 0, u2(n2) && (r2++, i2 = 0), o2(n2) && n2++, n2++, i2++, t2[n2];
  }
  function y2() {
    return o2(n2 + a2) && a2++, a2++, t2[n2 + a2];
  }
  function b2() {
    n2 = 0, r2 = 1, i2 = 1, a2 = 0;
  }
  function x2(e3 = 0) {
    a2 = e3;
  }
  function S2() {
    let e3 = n2 + a2;
    for (; e3 !== n2; ) v2();
    a2 = 0;
  }
  return { index: d2, line: f2, column: p2, peekOffset: m2, charAt: h2, currentChar: g2, currentPeek: _2, next: v2, peek: y2, reset: b2, resetPeek: x2, skipToPeek: S2 };
}
var Ee = void 0, De = `'`, Oe = `tokenizer`;
function ke(e2, t2 = {}) {
  let n2 = t2.location !== false, r2 = Te(e2), i2 = () => r2.index(), a2 = () => le(r2.line(), r2.column(), r2.index()), o2 = a2(), s2 = i2(), c2 = { currentType: 14, offset: s2, startLoc: o2, endLoc: o2, lastType: 14, lastOffset: s2, lastStartLoc: o2, lastEndLoc: o2, braceNest: 0, inLinked: false, text: `` }, l2 = () => c2, { onError: u2 } = t2;
  function d2(e3, t3, r3, ...i3) {
    let a3 = l2();
    t3.column += r3, t3.offset += r3, u2 && u2(be(e3, n2 ? ue(a3.startLoc, t3) : null, { domain: Oe, args: i3 }));
  }
  function f2(e3, t3, r3) {
    e3.endLoc = a2(), e3.currentType = t3;
    let i3 = { type: t3 };
    return n2 && (i3.loc = ue(e3.startLoc, e3.endLoc)), r3 != null && (i3.value = r3), i3;
  }
  let p2 = (e3) => f2(e3, 14);
  function m2(e3, t3) {
    return e3.currentChar() === t3 ? (e3.next(), t3) : (d2(V.EXPECTED_TOKEN, a2(), 0, t3), ``);
  }
  function h2(e3) {
    let t3 = ``;
    for (; e3.currentPeek() === H || e3.currentPeek() === U; ) t3 += e3.currentPeek(), e3.peek();
    return t3;
  }
  function g2(e3) {
    let t3 = h2(e3);
    return e3.skipToPeek(), t3;
  }
  function _2(e3) {
    if (e3 === Ee) return false;
    let t3 = e3.charCodeAt(0);
    return t3 >= 97 && t3 <= 122 || t3 >= 65 && t3 <= 90 || t3 === 95;
  }
  function v2(e3) {
    if (e3 === Ee) return false;
    let t3 = e3.charCodeAt(0);
    return t3 >= 48 && t3 <= 57;
  }
  function y2(e3, t3) {
    let { currentType: n3 } = t3;
    if (n3 !== 2) return false;
    h2(e3);
    let r3 = _2(e3.currentPeek());
    return e3.resetPeek(), r3;
  }
  function b2(e3, t3) {
    let { currentType: n3 } = t3;
    if (n3 !== 2) return false;
    h2(e3);
    let r3 = v2(e3.currentPeek() === `-` ? e3.peek() : e3.currentPeek());
    return e3.resetPeek(), r3;
  }
  function x2(e3, t3) {
    let { currentType: n3 } = t3;
    if (n3 !== 2) return false;
    h2(e3);
    let r3 = e3.currentPeek() === De;
    return e3.resetPeek(), r3;
  }
  function S2(e3, t3) {
    let { currentType: n3 } = t3;
    if (n3 !== 8) return false;
    h2(e3);
    let r3 = e3.currentPeek() === `.`;
    return e3.resetPeek(), r3;
  }
  function C2(e3, t3) {
    let { currentType: n3 } = t3;
    if (n3 !== 9) return false;
    h2(e3);
    let r3 = _2(e3.currentPeek());
    return e3.resetPeek(), r3;
  }
  function w2(e3, t3) {
    let { currentType: n3 } = t3;
    if (!(n3 === 8 || n3 === 12)) return false;
    h2(e3);
    let r3 = e3.currentPeek() === `:`;
    return e3.resetPeek(), r3;
  }
  function T2(e3, t3) {
    let { currentType: n3 } = t3;
    if (n3 !== 10) return false;
    let r3 = () => {
      let t4 = e3.currentPeek();
      return t4 === `{` ? _2(e3.peek()) : t4 === `@` || t4 === `%` || t4 === `|` || t4 === `:` || t4 === `.` || t4 === H || !t4 ? false : t4 === U ? (e3.peek(), r3()) : O2(e3, false);
    }, i3 = r3();
    return e3.resetPeek(), i3;
  }
  function E2(e3) {
    h2(e3);
    let t3 = e3.currentPeek() === `|`;
    return e3.resetPeek(), t3;
  }
  function D2(e3) {
    let t3 = h2(e3), n3 = e3.currentPeek() === `%` && e3.peek() === `{`;
    return e3.resetPeek(), { isModulo: n3, hasSpace: t3.length > 0 };
  }
  function O2(e3, t3 = true) {
    let n3 = (t4 = false, r4 = ``, i3 = false) => {
      let a3 = e3.currentPeek();
      return a3 === `{` ? r4 === `%` ? false : t4 : a3 === `@` || !a3 ? r4 === `%` ? true : t4 : a3 === `%` ? (e3.peek(), n3(t4, `%`, true)) : a3 === `|` ? r4 === `%` || i3 ? true : !(r4 === H || r4 === U) : a3 === H ? (e3.peek(), n3(true, H, i3)) : a3 === U ? (e3.peek(), n3(true, U, i3)) : true;
    }, r3 = n3();
    return t3 && e3.resetPeek(), r3;
  }
  function k2(e3, t3) {
    let n3 = e3.currentChar();
    return n3 === Ee ? Ee : t3(n3) ? (e3.next(), n3) : null;
  }
  function ee2(e3) {
    let t3 = e3.charCodeAt(0);
    return t3 >= 97 && t3 <= 122 || t3 >= 65 && t3 <= 90 || t3 >= 48 && t3 <= 57 || t3 === 95 || t3 === 36;
  }
  function te2(e3) {
    return k2(e3, ee2);
  }
  function A2(e3) {
    let t3 = e3.charCodeAt(0);
    return t3 >= 97 && t3 <= 122 || t3 >= 65 && t3 <= 90 || t3 >= 48 && t3 <= 57 || t3 === 95 || t3 === 36 || t3 === 45;
  }
  function j2(e3) {
    return k2(e3, A2);
  }
  function M2(e3) {
    let t3 = e3.charCodeAt(0);
    return t3 >= 48 && t3 <= 57;
  }
  function N2(e3) {
    return k2(e3, M2);
  }
  function P2(e3) {
    let t3 = e3.charCodeAt(0);
    return t3 >= 48 && t3 <= 57 || t3 >= 65 && t3 <= 70 || t3 >= 97 && t3 <= 102;
  }
  function F2(e3) {
    return k2(e3, P2);
  }
  function I2(e3) {
    let t3 = ``, n3 = ``;
    for (; t3 = N2(e3); ) n3 += t3;
    return n3;
  }
  function L2(e3) {
    g2(e3);
    let t3 = e3.currentChar();
    return t3 !== `%` && d2(V.EXPECTED_TOKEN, a2(), 0, t3), e3.next(), `%`;
  }
  function ne2(e3) {
    let t3 = ``;
    for (; ; ) {
      let n3 = e3.currentChar();
      if (n3 === `{` || n3 === `}` || n3 === `@` || n3 === `|` || !n3) break;
      if (n3 === `%`) if (O2(e3)) t3 += n3, e3.next();
      else break;
      else if (n3 === H || n3 === U) if (O2(e3)) t3 += n3, e3.next();
      else if (E2(e3)) break;
      else t3 += n3, e3.next();
      else t3 += n3, e3.next();
    }
    return t3;
  }
  function R2(e3) {
    g2(e3);
    let t3 = ``, n3 = ``;
    for (; t3 = j2(e3); ) n3 += t3;
    return e3.currentChar() === Ee && d2(V.UNTERMINATED_CLOSING_BRACE, a2(), 0), n3;
  }
  function re2(e3) {
    g2(e3);
    let t3 = ``;
    return e3.currentChar() === `-` ? (e3.next(), t3 += `-${I2(e3)}`) : t3 += I2(e3), e3.currentChar() === Ee && d2(V.UNTERMINATED_CLOSING_BRACE, a2(), 0), t3;
  }
  function z2(e3) {
    return e3 !== De && e3 !== U;
  }
  function ie2(e3) {
    g2(e3), m2(e3, `'`);
    let t3 = ``, n3 = ``;
    for (; t3 = k2(e3, z2); ) t3 === `\\` ? n3 += ae2(e3) : n3 += t3;
    let r3 = e3.currentChar();
    return r3 === U || r3 === Ee ? (d2(V.UNTERMINATED_SINGLE_QUOTE_IN_PLACEHOLDER, a2(), 0), r3 === U && (e3.next(), m2(e3, `'`)), n3) : (m2(e3, `'`), n3);
  }
  function ae2(e3) {
    let t3 = e3.currentChar();
    switch (t3) {
      case `\\`:
      case `'`:
        return e3.next(), `\\${t3}`;
      case `u`:
        return oe2(e3, t3, 4);
      case `U`:
        return oe2(e3, t3, 6);
      default:
        return d2(V.UNKNOWN_ESCAPE_SEQUENCE, a2(), 0, t3), ``;
    }
  }
  function oe2(e3, t3, n3) {
    m2(e3, t3);
    let r3 = ``;
    for (let i3 = 0; i3 < n3; i3++) {
      let n4 = F2(e3);
      if (!n4) {
        d2(V.INVALID_UNICODE_ESCAPE_SEQUENCE, a2(), 0, `\\${t3}${r3}${e3.currentChar()}`);
        break;
      }
      r3 += n4;
    }
    return `\\${t3}${r3}`;
  }
  function se2(e3) {
    return e3 !== `{` && e3 !== `}` && e3 !== H && e3 !== U;
  }
  function ce2(e3) {
    g2(e3);
    let t3 = ``, n3 = ``;
    for (; t3 = k2(e3, se2); ) n3 += t3;
    return n3;
  }
  function de2(e3) {
    let t3 = ``, n3 = ``;
    for (; t3 = te2(e3); ) n3 += t3;
    return n3;
  }
  function B2(e3) {
    let t3 = (n3) => {
      let r3 = e3.currentChar();
      return r3 === `{` || r3 === `%` || r3 === `@` || r3 === `|` || r3 === `(` || r3 === `)` || !r3 || r3 === H ? n3 : (n3 += r3, e3.next(), t3(n3));
    };
    return t3(``);
  }
  function fe2(e3) {
    g2(e3);
    let t3 = m2(e3, `|`);
    return g2(e3), t3;
  }
  function pe2(e3, t3) {
    let n3 = null;
    switch (e3.currentChar()) {
      case `{`:
        return t3.braceNest >= 1 && d2(V.NOT_ALLOW_NEST_PLACEHOLDER, a2(), 0), e3.next(), n3 = f2(t3, 2, `{`), g2(e3), t3.braceNest++, n3;
      case `}`:
        return t3.braceNest > 0 && t3.currentType === 2 && d2(V.EMPTY_PLACEHOLDER, a2(), 0), e3.next(), n3 = f2(t3, 3, `}`), t3.braceNest--, t3.braceNest > 0 && g2(e3), t3.inLinked && t3.braceNest === 0 && (t3.inLinked = false), n3;
      case `@`:
        return t3.braceNest > 0 && d2(V.UNTERMINATED_CLOSING_BRACE, a2(), 0), n3 = me2(e3, t3) || p2(t3), t3.braceNest = 0, n3;
      default: {
        let r3 = true, i3 = true, o3 = true;
        if (E2(e3)) return t3.braceNest > 0 && d2(V.UNTERMINATED_CLOSING_BRACE, a2(), 0), n3 = f2(t3, 1, fe2(e3)), t3.braceNest = 0, t3.inLinked = false, n3;
        if (t3.braceNest > 0 && (t3.currentType === 5 || t3.currentType === 6 || t3.currentType === 7)) return d2(V.UNTERMINATED_CLOSING_BRACE, a2(), 0), t3.braceNest = 0, he2(e3, t3);
        if (r3 = y2(e3, t3)) return n3 = f2(t3, 5, R2(e3)), g2(e3), n3;
        if (i3 = b2(e3, t3)) return n3 = f2(t3, 6, re2(e3)), g2(e3), n3;
        if (o3 = x2(e3, t3)) return n3 = f2(t3, 7, ie2(e3)), g2(e3), n3;
        if (!r3 && !i3 && !o3) return n3 = f2(t3, 13, ce2(e3)), d2(V.INVALID_TOKEN_IN_PLACEHOLDER, a2(), 0, n3.value), g2(e3), n3;
        break;
      }
    }
    return n3;
  }
  function me2(e3, t3) {
    let { currentType: n3 } = t3, r3 = null, i3 = e3.currentChar();
    switch ((n3 === 8 || n3 === 9 || n3 === 12 || n3 === 10) && (i3 === U || i3 === H) && d2(V.INVALID_LINKED_FORMAT, a2(), 0), i3) {
      case `@`:
        return e3.next(), r3 = f2(t3, 8, `@`), t3.inLinked = true, r3;
      case `.`:
        return g2(e3), e3.next(), f2(t3, 9, `.`);
      case `:`:
        return g2(e3), e3.next(), f2(t3, 10, `:`);
      default:
        return E2(e3) ? (r3 = f2(t3, 1, fe2(e3)), t3.braceNest = 0, t3.inLinked = false, r3) : S2(e3, t3) || w2(e3, t3) ? (g2(e3), me2(e3, t3)) : C2(e3, t3) ? (g2(e3), f2(t3, 12, de2(e3))) : T2(e3, t3) ? (g2(e3), i3 === `{` ? pe2(e3, t3) || r3 : f2(t3, 11, B2(e3))) : (n3 === 8 && d2(V.INVALID_LINKED_FORMAT, a2(), 0), t3.braceNest = 0, t3.inLinked = false, he2(e3, t3));
    }
  }
  function he2(e3, t3) {
    let n3 = { type: 14 };
    if (t3.braceNest > 0) return pe2(e3, t3) || p2(t3);
    if (t3.inLinked) return me2(e3, t3) || p2(t3);
    switch (e3.currentChar()) {
      case `{`:
        return pe2(e3, t3) || p2(t3);
      case `}`:
        return d2(V.UNBALANCED_CLOSING_BRACE, a2(), 0), e3.next(), f2(t3, 3, `}`);
      case `@`:
        return me2(e3, t3) || p2(t3);
      default: {
        if (E2(e3)) return n3 = f2(t3, 1, fe2(e3)), t3.braceNest = 0, t3.inLinked = false, n3;
        let { isModulo: r3, hasSpace: i3 } = D2(e3);
        if (r3) return i3 ? f2(t3, 0, ne2(e3)) : f2(t3, 4, L2(e3));
        if (O2(e3)) return f2(t3, 0, ne2(e3));
        break;
      }
    }
    return n3;
  }
  function ge2() {
    let { currentType: e3, offset: t3, startLoc: n3, endLoc: o3 } = c2;
    return c2.lastType = e3, c2.lastOffset = t3, c2.lastStartLoc = n3, c2.lastEndLoc = o3, c2.offset = i2(), c2.startLoc = a2(), r2.currentChar() === Ee ? f2(c2, 14) : he2(r2, c2);
  }
  return { nextToken: ge2, currentOffset: i2, currentPosition: a2, context: l2 };
}
var Ae = `parser`, W = /(?:\\\\|\\'|\\u([0-9a-fA-F]{4})|\\U([0-9a-fA-F]{6}))/g;
function je(e2, t2, n2) {
  switch (e2) {
    case `\\\\`:
      return `\\`;
    case `\\'`:
      return `'`;
    default: {
      let e3 = parseInt(t2 || n2, 16);
      return e3 <= 55295 || e3 >= 57344 ? String.fromCodePoint(e3) : `\uFFFD`;
    }
  }
}
function Me(e2 = {}) {
  let t2 = e2.location !== false, { onError: n2, onWarn: r2 } = e2;
  function i2(e3, r3, i3, a3, ...o3) {
    let s3 = e3.currentPosition();
    s3.offset += a3, s3.column += a3, n2 && n2(be(r3, t2 ? ue(i3, s3) : null, { domain: Ae, args: o3 }));
  }
  function a2(e3, n3, i3, a3, ...o3) {
    let s3 = e3.currentPosition();
    s3.offset += a3, s3.column += a3, r2 && r2(ve(n3, t2 ? ue(i3, s3) : null, o3));
  }
  function o2(e3, n3, r3) {
    let i3 = { type: e3 };
    return t2 && (i3.start = n3, i3.end = n3, i3.loc = { start: r3, end: r3 }), i3;
  }
  function s2(e3, n3, r3, i3) {
    i3 && (e3.type = i3), t2 && (e3.end = n3, e3.loc && (e3.loc.end = r3));
  }
  function c2(e3, t3) {
    let n3 = e3.context(), r3 = o2(3, n3.offset, n3.startLoc);
    return r3.value = t3, s2(r3, e3.currentOffset(), e3.currentPosition()), r3;
  }
  function l2(e3, t3) {
    let { lastOffset: n3, lastStartLoc: r3 } = e3.context(), i3 = o2(5, n3, r3);
    return i3.index = parseInt(t3, 10), e3.nextToken(), s2(i3, e3.currentOffset(), e3.currentPosition()), i3;
  }
  function u2(e3, t3, n3) {
    let { lastOffset: r3, lastStartLoc: i3 } = e3.context(), a3 = o2(4, r3, i3);
    return a3.key = t3, n3 === true && (a3.modulo = true), e3.nextToken(), s2(a3, e3.currentOffset(), e3.currentPosition()), a3;
  }
  function d2(e3, t3) {
    let { lastOffset: n3, lastStartLoc: r3 } = e3.context(), i3 = o2(9, n3, r3);
    return i3.value = t3.replace(W, je), e3.nextToken(), s2(i3, e3.currentOffset(), e3.currentPosition()), i3;
  }
  function f2(e3) {
    let t3 = e3.nextToken(), n3 = e3.context(), { lastOffset: r3, lastStartLoc: a3 } = n3, c3 = o2(8, r3, a3);
    return t3.type === 12 ? (t3.value ?? i2(e3, V.UNEXPECTED_LEXICAL_ANALYSIS, n3.lastStartLoc, 0, G(t3)), c3.value = t3.value || ``, s2(c3, e3.currentOffset(), e3.currentPosition()), { node: c3 }) : (i2(e3, V.UNEXPECTED_EMPTY_LINKED_MODIFIER, n3.lastStartLoc, 0), c3.value = ``, s2(c3, r3, a3), { nextConsumeToken: t3, node: c3 });
  }
  function p2(e3, t3) {
    let n3 = e3.context(), r3 = o2(7, n3.offset, n3.startLoc);
    return r3.value = t3, s2(r3, e3.currentOffset(), e3.currentPosition()), r3;
  }
  function m2(e3) {
    let t3 = e3.context(), n3 = o2(6, t3.offset, t3.startLoc), r3 = e3.nextToken();
    if (r3.type === 9) {
      let t4 = f2(e3);
      n3.modifier = t4.node, r3 = t4.nextConsumeToken || e3.nextToken();
    }
    switch (r3.type !== 10 && i2(e3, V.UNEXPECTED_LEXICAL_ANALYSIS, t3.lastStartLoc, 0, G(r3)), r3 = e3.nextToken(), r3.type === 2 && (r3 = e3.nextToken()), r3.type) {
      case 11:
        r3.value ?? i2(e3, V.UNEXPECTED_LEXICAL_ANALYSIS, t3.lastStartLoc, 0, G(r3)), n3.key = p2(e3, r3.value || ``);
        break;
      case 5:
        r3.value ?? i2(e3, V.UNEXPECTED_LEXICAL_ANALYSIS, t3.lastStartLoc, 0, G(r3)), n3.key = u2(e3, r3.value || ``);
        break;
      case 6:
        r3.value ?? i2(e3, V.UNEXPECTED_LEXICAL_ANALYSIS, t3.lastStartLoc, 0, G(r3)), n3.key = l2(e3, r3.value || ``);
        break;
      case 7:
        r3.value ?? i2(e3, V.UNEXPECTED_LEXICAL_ANALYSIS, t3.lastStartLoc, 0, G(r3)), n3.key = d2(e3, r3.value || ``);
        break;
      default: {
        i2(e3, V.UNEXPECTED_EMPTY_LINKED_KEY, t3.lastStartLoc, 0);
        let a3 = e3.context(), c3 = o2(7, a3.offset, a3.startLoc);
        return c3.value = ``, s2(c3, a3.offset, a3.startLoc), n3.key = c3, s2(n3, a3.offset, a3.startLoc), { nextConsumeToken: r3, node: n3 };
      }
    }
    return s2(n3, e3.currentOffset(), e3.currentPosition()), { node: n3 };
  }
  function h2(e3) {
    let t3 = e3.context(), n3 = o2(2, t3.currentType === 1 ? e3.currentOffset() : t3.offset, t3.currentType === 1 ? t3.endLoc : t3.startLoc);
    n3.items = [];
    let r3 = null, f3 = null;
    do {
      let o3 = r3 || e3.nextToken();
      switch (r3 = null, o3.type) {
        case 0:
          o3.value ?? i2(e3, V.UNEXPECTED_LEXICAL_ANALYSIS, t3.lastStartLoc, 0, G(o3)), n3.items.push(c2(e3, o3.value || ``));
          break;
        case 6:
          o3.value ?? i2(e3, V.UNEXPECTED_LEXICAL_ANALYSIS, t3.lastStartLoc, 0, G(o3)), n3.items.push(l2(e3, o3.value || ``));
          break;
        case 4:
          f3 = true;
          break;
        case 5:
          o3.value ?? i2(e3, V.UNEXPECTED_LEXICAL_ANALYSIS, t3.lastStartLoc, 0, G(o3)), n3.items.push(u2(e3, o3.value || ``, !!f3)), f3 && (f3 = (a2(e3, ge.USE_MODULO_SYNTAX, t3.lastStartLoc, 0, G(o3)), null));
          break;
        case 7:
          o3.value ?? i2(e3, V.UNEXPECTED_LEXICAL_ANALYSIS, t3.lastStartLoc, 0, G(o3)), n3.items.push(d2(e3, o3.value || ``));
          break;
        case 8: {
          let t4 = m2(e3);
          n3.items.push(t4.node), r3 = t4.nextConsumeToken || null;
          break;
        }
      }
    } while (t3.currentType !== 14 && t3.currentType !== 1);
    return s2(n3, t3.currentType === 1 ? t3.lastOffset : e3.currentOffset(), t3.currentType === 1 ? t3.lastEndLoc : e3.currentPosition()), n3;
  }
  function g2(e3, t3, n3, r3) {
    let a3 = e3.context(), c3 = r3.items.length === 0, l3 = o2(1, t3, n3);
    l3.cases = [], l3.cases.push(r3);
    do {
      let t4 = h2(e3);
      c3 || (c3 = t4.items.length === 0), l3.cases.push(t4);
    } while (a3.currentType !== 14);
    return c3 && i2(e3, V.MUST_HAVE_MESSAGES_IN_PLURAL, n3, 0), s2(l3, e3.currentOffset(), e3.currentPosition()), l3;
  }
  function _2(e3) {
    let t3 = e3.context(), { offset: n3, startLoc: r3 } = t3, i3 = h2(e3);
    return t3.currentType === 14 ? i3 : g2(e3, n3, r3, i3);
  }
  function v2(n3) {
    let r3 = ke(n3, fe({}, e2)), a3 = r3.context(), c3 = o2(0, a3.offset, a3.startLoc);
    return t2 && c3.loc && (c3.loc.source = n3), c3.body = _2(r3), e2.onCacheKey && (c3.cacheKey = e2.onCacheKey(n3)), a3.currentType !== 14 && i2(r3, V.UNEXPECTED_LEXICAL_ANALYSIS, a3.lastStartLoc, 0, n3[a3.offset] || ``), s2(c3, r3.currentOffset(), r3.currentPosition()), c3;
  }
  return { parse: v2 };
}
function G(e2) {
  if (e2.type === 14) return `EOF`;
  let t2 = (e2.value || ``).replace(/\r?\n/gu, `\\n`);
  return t2.length > 10 ? t2.slice(0, 9) + `\u2026` : t2;
}
function Ne(e2, t2 = {}) {
  let n2 = { ast: e2, helpers: /* @__PURE__ */ new Set() };
  return { context: () => n2, helper: (e3) => (n2.helpers.add(e3), e3) };
}
function Pe(e2, t2) {
  for (let n2 = 0; n2 < e2.length; n2++) Fe(e2[n2], t2);
}
function Fe(e2, t2) {
  switch (e2.type) {
    case 1:
      Pe(e2.cases, t2), t2.helper(`plural`);
      break;
    case 2:
      Pe(e2.items, t2);
      break;
    case 6:
      Fe(e2.key, t2), t2.helper(`linked`), t2.helper(`type`);
      break;
    case 5:
      t2.helper(`interpolate`), t2.helper(`list`);
      break;
    case 4:
      t2.helper(`interpolate`), t2.helper(`named`);
      break;
  }
}
function Ie(e2, t2 = {}) {
  let n2 = Ne(e2);
  n2.helper(`normalize`), e2.body && Fe(e2.body, n2);
  let r2 = n2.context();
  e2.helpers = Array.from(r2.helpers);
}
function Le(e2) {
  let t2 = e2.body;
  return t2.type === 2 ? Re(t2) : t2.cases.forEach((e3) => Re(e3)), e2;
}
function Re(e2) {
  if (e2.items.length === 1) {
    let t2 = e2.items[0];
    (t2.type === 3 || t2.type === 9) && (e2.static = t2.value, delete t2.value);
  } else {
    let t2 = [];
    for (let n2 = 0; n2 < e2.items.length; n2++) {
      let r2 = e2.items[n2];
      if (!(r2.type === 3 || r2.type === 9) || r2.value == null) break;
      t2.push(r2.value);
    }
    if (t2.length === e2.items.length) {
      e2.static = he(t2);
      for (let t3 = 0; t3 < e2.items.length; t3++) {
        let n2 = e2.items[t3];
        (n2.type === 3 || n2.type === 9) && delete n2.value;
      }
    }
  }
}
var ze = `minifier`;
function Be(e2) {
  switch (e2.t = e2.type, e2.type) {
    case 0: {
      let t2 = e2;
      Be(t2.body), t2.b = t2.body, delete t2.body;
      break;
    }
    case 1: {
      let t2 = e2, n2 = t2.cases;
      for (let e3 = 0; e3 < n2.length; e3++) Be(n2[e3]);
      t2.c = n2, delete t2.cases;
      break;
    }
    case 2: {
      let t2 = e2, n2 = t2.items;
      for (let e3 = 0; e3 < n2.length; e3++) Be(n2[e3]);
      t2.i = n2, delete t2.items, t2.static && (t2.s = t2.static, delete t2.static);
      break;
    }
    case 3:
    case 9:
    case 8:
    case 7: {
      let t2 = e2;
      t2.value && (t2.v = t2.value, delete t2.value);
      break;
    }
    case 6: {
      let t2 = e2;
      Be(t2.key), t2.k = t2.key, delete t2.key, t2.modifier && (Be(t2.modifier), t2.m = t2.modifier, delete t2.modifier);
      break;
    }
    case 5: {
      let t2 = e2;
      t2.i = t2.index, delete t2.index;
      break;
    }
    case 4: {
      let t2 = e2;
      t2.k = t2.key, delete t2.key;
      break;
    }
    default:
      throw be(V.UNHANDLED_MINIFIER_NODE_TYPE, null, { domain: ze, args: [e2.type] });
  }
  delete e2.type;
}
var Ve = `parser`;
function He(e2, t2) {
  let { sourceMap: n2, filename: r2, breakLineCode: i2, needIndent: a2 } = t2, o2 = t2.location !== false, s2 = { filename: r2, code: ``, column: 1, line: 1, offset: 0, map: void 0, breakLineCode: i2, needIndent: a2, indentLevel: 0 };
  o2 && e2.loc && (s2.source = e2.loc.source);
  let c2 = () => s2;
  function l2(e3, t3) {
    s2.code += e3;
  }
  function u2(e3, t3 = true) {
    let n3 = t3 ? i2 : ``;
    l2(a2 ? n3 + `  `.repeat(e3) : n3);
  }
  function d2(e3 = true) {
    let t3 = ++s2.indentLevel;
    e3 && u2(t3);
  }
  function f2(e3 = true) {
    let t3 = --s2.indentLevel;
    e3 && u2(t3);
  }
  function p2() {
    u2(s2.indentLevel);
  }
  return { context: c2, push: l2, indent: d2, deindent: f2, newline: p2, helper: (e3) => `_${e3}`, needIndent: () => s2.needIndent };
}
function Ue(e2, t2) {
  let { helper: n2 } = e2;
  e2.push(`${n2(`linked`)}(`), qe(e2, t2.key), t2.modifier ? (e2.push(`, `), qe(e2, t2.modifier), e2.push(`, _type`)) : e2.push(`, undefined, _type`), e2.push(`)`);
}
function We(e2, t2) {
  let { helper: n2, needIndent: r2 } = e2;
  e2.push(`${n2(`normalize`)}([`), e2.indent(r2());
  let i2 = t2.items.length;
  for (let n3 = 0; n3 < i2 && (qe(e2, t2.items[n3]), n3 !== i2 - 1); n3++) e2.push(`, `);
  e2.deindent(r2()), e2.push(`])`);
}
function Ge(e2, t2) {
  let { helper: n2, needIndent: r2 } = e2;
  if (t2.cases.length > 1) {
    e2.push(`${n2(`plural`)}([`), e2.indent(r2());
    let i2 = t2.cases.length;
    for (let n3 = 0; n3 < i2 && (qe(e2, t2.cases[n3]), n3 !== i2 - 1); n3++) e2.push(`, `);
    e2.deindent(r2()), e2.push(`])`);
  }
}
function Ke(e2, t2) {
  t2.body ? qe(e2, t2.body) : e2.push(`null`);
}
function qe(e2, t2) {
  let { helper: n2 } = e2;
  switch (t2.type) {
    case 0:
      Ke(e2, t2);
      break;
    case 1:
      Ge(e2, t2);
      break;
    case 2:
      We(e2, t2);
      break;
    case 6:
      Ue(e2, t2);
      break;
    case 8:
      e2.push(JSON.stringify(t2.value), t2);
      break;
    case 7:
      e2.push(JSON.stringify(t2.value), t2);
      break;
    case 5:
      e2.push(`${n2(`interpolate`)}(${n2(`list`)}(${t2.index}))`, t2);
      break;
    case 4:
      e2.push(`${n2(`interpolate`)}(${n2(`named`)}(${JSON.stringify(t2.key)}))`, t2);
      break;
    case 9:
      e2.push(JSON.stringify(t2.value), t2);
      break;
    case 3:
      e2.push(JSON.stringify(t2.value), t2);
      break;
    default:
      throw be(V.UNHANDLED_CODEGEN_NODE_TYPE, null, { domain: Ve, args: [t2.type] });
  }
}
var Je = (e2, t2 = {}) => {
  let n2 = pe(t2.mode) ? t2.mode : `normal`, r2 = pe(t2.filename) ? t2.filename : `message.intl`, i2 = !!t2.sourceMap, a2 = t2.breakLineCode == null ? n2 === `arrow` ? `;` : `
` : t2.breakLineCode, o2 = t2.needIndent ? t2.needIndent : n2 !== `arrow`, s2 = e2.helpers || [], c2 = He(e2, { mode: n2, filename: r2, sourceMap: i2, breakLineCode: a2, needIndent: o2 });
  c2.push(n2 === `normal` ? `function __msg__ (ctx) {` : `(ctx) => {`), c2.indent(o2), s2.length > 0 && (c2.push(`const { ${he(s2.map((e3) => `${e3}: _${e3}`), `, `)} } = ctx`), c2.newline()), c2.push(`return `), qe(c2, e2), c2.deindent(o2), c2.push(`}`), delete e2.helpers;
  let { code: l2, map: u2 } = c2.context();
  return { ast: e2, code: l2, map: u2 ? u2.toJSON() : void 0 };
};
function Ye(e2, t2 = {}) {
  let n2 = fe({}, t2), r2 = !!n2.jit, i2 = !!n2.minify, a2 = n2.optimize == null ? true : n2.optimize, o2 = Me(n2).parse(e2);
  return r2 ? (a2 && Le(o2), i2 && Be(o2), { ast: o2, code: `` }) : (Ie(o2, n2), Je(o2, n2));
}
function Xe() {
  typeof __INTLIFY_PROD_DEVTOOLS__ != `boolean` && (k().__INTLIFY_PROD_DEVTOOLS__ = false), typeof __INTLIFY_JIT_COMPILATION__ != `boolean` && (k().__INTLIFY_JIT_COMPILATION__ = false), typeof __INTLIFY_DROP_MESSAGE_COMPILER__ != `boolean` && (k().__INTLIFY_DROP_MESSAGE_COMPILER__ = false);
}
function K(e2) {
  return L(e2) && ot(e2) === 0 && (M(e2, `b`) || M(e2, `body`));
}
var Ze = [`b`, `body`];
function Qe(e2) {
  return pt(e2, Ze);
}
var $e = [`c`, `cases`];
function et(e2) {
  return pt(e2, $e, []);
}
var tt = [`s`, `static`];
function nt(e2) {
  return pt(e2, tt);
}
var rt = [`i`, `items`];
function it(e2) {
  return pt(e2, rt, []);
}
var at = [`t`, `type`];
function ot(e2) {
  return pt(e2, at);
}
var st = [`v`, `value`];
function ct(e2, t2) {
  let n2 = pt(e2, st);
  if (n2 != null) return n2;
  throw ht(t2);
}
var lt = [`m`, `modifier`];
function ut(e2) {
  return pt(e2, lt);
}
var dt = [`k`, `key`];
function ft(e2) {
  let t2 = pt(e2, dt);
  if (t2) return t2;
  throw ht(6);
}
function pt(e2, t2, n2) {
  for (let n3 = 0; n3 < t2.length; n3++) {
    let r2 = t2[n3];
    if (M(e2, r2) && e2[r2] != null) return e2[r2];
  }
  return n2;
}
var mt = [...Ze, ...$e, ...tt, ...rt, ...dt, ...lt, ...st, ...at];
function ht(e2) {
  return Error(`unhandled node type: ${e2}`);
}
var gt = [];
gt[0] = { w: [0], i: [3, 0], "[": [4], o: [7] }, gt[1] = { w: [1], ".": [2], "[": [4], o: [7] }, gt[2] = { w: [2], i: [3, 0], 0: [3, 0] }, gt[3] = { i: [3, 0], 0: [3, 0], w: [1, 1], ".": [2, 1], "[": [4, 1], o: [7, 1] }, gt[4] = { "'": [5, 0], '"': [6, 0], "[": [4, 2], "]": [1, 3], o: 8, l: [4, 0] }, gt[5] = { "'": [4, 0], o: 8, l: [5, 0] }, gt[6] = { '"': [4, 0], o: 8, l: [6, 0] };
var _t = /^\s?(?:true|false|-?[\d.]+|'[^']*'|"[^"]*")\s?$/;
function vt(e2) {
  return _t.test(e2);
}
function yt(e2) {
  let t2 = e2.charCodeAt(0);
  return t2 === e2.charCodeAt(e2.length - 1) && (t2 === 34 || t2 === 39) ? e2.slice(1, -1) : e2;
}
function bt(e2) {
  if (e2 == null) return `o`;
  switch (e2.charCodeAt(0)) {
    case 91:
    case 93:
    case 46:
    case 34:
    case 39:
      return e2;
    case 95:
    case 36:
    case 45:
      return `i`;
    case 9:
    case 10:
    case 13:
    case 160:
    case 65279:
    case 8232:
    case 8233:
      return `w`;
  }
  return `i`;
}
function xt(e2) {
  let t2 = e2.trim();
  return e2.charAt(0) === `0` && isNaN(parseInt(e2)) ? false : vt(t2) ? yt(t2) : `*` + t2;
}
function St(e2) {
  let t2 = [], n2 = -1, r2 = 0, i2 = 0, a2, o2, s2, c2, l2, u2, d2, f2 = [];
  f2[0] = () => {
    o2 === void 0 ? o2 = s2 : o2 += s2;
  }, f2[1] = () => {
    o2 !== void 0 && (t2.push(o2), o2 = void 0);
  }, f2[2] = () => {
    f2[0](), i2++;
  }, f2[3] = () => {
    if (i2 > 0) i2--, r2 = 4, f2[0]();
    else {
      if (i2 = 0, o2 === void 0 || (o2 = xt(o2), o2 === false)) return false;
      f2[1]();
    }
  };
  function p2() {
    let t3 = e2[n2 + 1];
    if (r2 === 5 && t3 === `'` || r2 === 6 && t3 === `"`) return n2++, s2 = `\\` + t3, f2[0](), true;
  }
  for (; r2 !== null; ) if (n2++, a2 = e2[n2], !(a2 === `\\` && p2())) {
    if (c2 = bt(a2), d2 = gt[r2], l2 = d2[c2] || d2.l || 8, l2 === 8 || (r2 = l2[0], l2[1] !== void 0 && (u2 = f2[l2[1]], u2 && (s2 = a2, u2() === false)))) return;
    if (r2 === 7) return t2;
  }
}
var Ct = /* @__PURE__ */ new Map();
function wt(e2, t2) {
  return L(e2) ? e2[t2] : null;
}
function Tt(e2, t2) {
  if (!L(e2)) return null;
  let n2 = Ct.get(t2);
  if (n2 || (n2 = St(t2), n2 && Ct.set(t2, n2)), !n2) return null;
  let r2 = n2.length, i2 = e2, a2 = 0;
  for (; a2 < r2; ) {
    let e3 = n2[a2];
    if (mt.includes(e3) && K(i2)) return null;
    let t3 = i2[e3];
    if (t3 === void 0 || P(i2)) return null;
    i2 = t3, a2++;
  }
  return i2;
}
var Et = (e2) => e2, Dt = (e2) => ``, Ot = `text`, kt = (e2) => e2.length === 0 ? `` : ae(e2), At = ie;
function jt(e2, t2) {
  return e2 = Math.abs(e2), t2 === 2 ? e2 ? e2 > 1 ? 1 : 0 : 1 : e2 ? Math.min(e2, 2) : 0;
}
function Mt(e2) {
  let t2 = x(e2.pluralIndex) ? e2.pluralIndex : -1;
  return e2.named && (x(e2.named.count) || x(e2.named.n)) ? x(e2.named.count) ? e2.named.count : x(e2.named.n) ? e2.named.n : t2 : t2;
}
function Nt(e2, t2) {
  t2.count || (t2.count = e2), t2.n || (t2.n = e2);
}
function Pt(e2 = {}) {
  let t2 = e2.locale, n2 = Mt(e2), r2 = L(e2.pluralRules) && F(t2) && P(e2.pluralRules[t2]) ? e2.pluralRules[t2] : jt, i2 = L(e2.pluralRules) && F(t2) && P(e2.pluralRules[t2]) ? jt : void 0, a2 = (e3) => e3[r2(n2, e3.length, i2)], o2 = e2.list || [], s2 = (e3) => o2[e3], c2 = e2.named || D();
  x(e2.pluralIndex) && Nt(n2, c2);
  let l2 = (e3) => c2[e3];
  function u2(t3) {
    return (P(e2.messages) ? e2.messages(t3) : L(e2.messages) ? e2.messages[t3] : false) || (e2.parent ? e2.parent.message(t3) : Dt);
  }
  let d2 = (t3) => e2.modifiers ? e2.modifiers[t3] : Et, f2 = z(e2.processor) && P(e2.processor.normalize) ? e2.processor.normalize : kt, p2 = z(e2.processor) && P(e2.processor.interpolate) ? e2.processor.interpolate : At, m2 = { list: s2, named: l2, plural: a2, linked: (e3, ...t3) => {
    let [n3, r3] = t3, i3 = `text`, a3 = ``;
    t3.length === 1 ? L(n3) ? (a3 = n3.modifier || a3, i3 = n3.type || i3) : F(n3) && (a3 = n3 || a3) : t3.length === 2 && (F(n3) && (a3 = n3 || a3), F(r3) && (i3 = r3 || i3));
    let o3 = u2(e3)(m2), s3 = i3 === `vnode` && N(o3) && a3 ? o3[0] : o3;
    return a3 ? d2(a3)(s3, i3) : s3;
  }, message: u2, type: z(e2.processor) && F(e2.processor.type) ? e2.processor.type : Ot, interpolate: p2, normalize: f2, values: T(D(), o2, c2) };
  return m2;
}
var Ft = null;
function It(e2) {
  Ft = e2;
}
function Lt(e2, t2, n2) {
  Ft && Ft.emit(`i18n:init`, { timestamp: Date.now(), i18n: e2, version: t2, meta: n2 });
}
var Rt = zt(`function:translate`);
function zt(e2) {
  return (t2) => Ft && Ft.emit(e2, t2);
}
var Bt = ge.__EXTEND_POINT__, Vt = oe(Bt), Ht = { NOT_FOUND_KEY: Bt, FALLBACK_TO_TRANSLATE: Vt(), CANNOT_FORMAT_NUMBER: Vt(), FALLBACK_TO_NUMBER_FORMAT: Vt(), CANNOT_FORMAT_DATE: Vt(), FALLBACK_TO_DATE_FORMAT: Vt(), EXPERIMENTAL_CUSTOM_MESSAGE_COMPILER: Vt(), __EXTEND_POINT__: Vt() };
Ht.NOT_FOUND_KEY, Ht.FALLBACK_TO_TRANSLATE, Ht.CANNOT_FORMAT_NUMBER, Ht.FALLBACK_TO_NUMBER_FORMAT, Ht.CANNOT_FORMAT_DATE, Ht.FALLBACK_TO_DATE_FORMAT, Ht.EXPERIMENTAL_CUSTOM_MESSAGE_COMPILER;
var Ut = V.__EXTEND_POINT__, Wt = oe(Ut), q = { INVALID_ARGUMENT: Ut, INVALID_DATE_ARGUMENT: Wt(), INVALID_ISO_DATE_ARGUMENT: Wt(), NOT_SUPPORT_NON_STRING_MESSAGE: Wt(), NOT_SUPPORT_LOCALE_PROMISE_VALUE: Wt(), NOT_SUPPORT_LOCALE_ASYNC_FUNCTION: Wt(), NOT_SUPPORT_LOCALE_TYPE: Wt(), __EXTEND_POINT__: Wt() };
function J(e2) {
  return be(e2, null, void 0);
}
q.INVALID_ARGUMENT, q.INVALID_DATE_ARGUMENT, q.INVALID_ISO_DATE_ARGUMENT, q.NOT_SUPPORT_NON_STRING_MESSAGE, q.NOT_SUPPORT_LOCALE_PROMISE_VALUE, q.NOT_SUPPORT_LOCALE_ASYNC_FUNCTION, q.NOT_SUPPORT_LOCALE_TYPE;
function Gt(e2, t2) {
  return t2.locale == null ? qt(e2.locale) : qt(t2.locale);
}
var Kt;
function qt(e2) {
  if (F(e2)) return e2;
  if (P(e2)) {
    if (e2.resolvedOnce && Kt != null) return Kt;
    if (e2.constructor.name === `Function`) {
      let t2 = e2();
      if (ne(t2)) throw J(q.NOT_SUPPORT_LOCALE_PROMISE_VALUE);
      return Kt = t2;
    } else throw J(q.NOT_SUPPORT_LOCALE_ASYNC_FUNCTION);
  } else throw J(q.NOT_SUPPORT_LOCALE_TYPE);
}
function Jt(e2, t2, n2) {
  return [.../* @__PURE__ */ new Set([n2, ...N(t2) ? t2 : L(t2) ? Object.keys(t2) : F(t2) ? [t2] : [n2]])];
}
function Yt(e2, t2, n2) {
  let r2 = F(n2) ? n2 : en, i2 = e2;
  i2.__localeChainCache || (i2.__localeChainCache = /* @__PURE__ */ new Map());
  let a2 = i2.__localeChainCache.get(r2);
  if (!a2) {
    a2 = [];
    let e3 = [n2];
    for (; N(e3); ) e3 = Xt(a2, e3, t2);
    let o2 = N(t2) || !z(t2) ? t2 : t2.default ? t2.default : null;
    e3 = F(o2) ? [o2] : o2, N(e3) && Xt(a2, e3, false), i2.__localeChainCache.set(r2, a2);
  }
  return a2;
}
function Xt(e2, t2, n2) {
  let r2 = true;
  for (let i2 = 0; i2 < t2.length && I(r2); i2++) {
    let a2 = t2[i2];
    F(a2) && (r2 = Zt(e2, t2[i2], n2));
  }
  return r2;
}
function Zt(e2, t2, n2) {
  let r2, i2 = t2.split(`-`);
  do
    r2 = Qt(e2, i2.join(`-`), n2), i2.splice(-1, 1);
  while (i2.length && r2 === true);
  return r2;
}
function Qt(e2, t2, n2) {
  let r2 = false;
  if (!e2.includes(t2) && (r2 = true, t2)) {
    r2 = t2[t2.length - 1] !== `!`;
    let i2 = t2.replace(/!/g, ``);
    e2.push(i2), (N(n2) || z(n2)) && n2[i2] && (r2 = n2[i2]);
  }
  return r2;
}
var $t = `9.14.5`, en = `en-US`, tn = (e2) => `${e2.charAt(0).toLocaleUpperCase()}${e2.substr(1)}`;
function nn() {
  return { upper: (e2, t2) => t2 === `text` && F(e2) ? e2.toUpperCase() : t2 === `vnode` && L(e2) && `__v_isVNode` in e2 ? e2.children.toUpperCase() : e2, lower: (e2, t2) => t2 === `text` && F(e2) ? e2.toLowerCase() : t2 === `vnode` && L(e2) && `__v_isVNode` in e2 ? e2.children.toLowerCase() : e2, capitalize: (e2, t2) => t2 === `text` && F(e2) ? tn(e2) : t2 === `vnode` && L(e2) && `__v_isVNode` in e2 ? tn(e2.children) : e2 };
}
var rn;
function an(e2) {
  rn = e2;
}
var on;
function sn(e2) {
  on = e2;
}
var cn;
function ln(e2) {
  cn = e2;
}
var un = null, dn = () => un, fn = null, pn = (e2) => {
  fn = e2;
}, mn = () => fn, hn = 0;
function gn(e2 = {}) {
  let t2 = P(e2.onWarn) ? e2.onWarn : g, n2 = F(e2.version) ? e2.version : $t, r2 = F(e2.locale) || P(e2.locale) ? e2.locale : en, i2 = P(r2) ? en : r2, a2 = N(e2.fallbackLocale) || z(e2.fallbackLocale) || F(e2.fallbackLocale) || e2.fallbackLocale === false ? e2.fallbackLocale : i2, o2 = z(e2.messages) ? e2.messages : _n(i2), s2 = z(e2.datetimeFormats) ? e2.datetimeFormats : _n(i2), c2 = z(e2.numberFormats) ? e2.numberFormats : _n(i2), l2 = T(D(), e2.modifiers, nn()), u2 = e2.pluralRules || D(), d2 = P(e2.missing) ? e2.missing : null, f2 = I(e2.missingWarn) || C(e2.missingWarn) ? e2.missingWarn : true, p2 = I(e2.fallbackWarn) || C(e2.fallbackWarn) ? e2.fallbackWarn : true, m2 = !!e2.fallbackFormat, h2 = !!e2.unresolving, _2 = P(e2.postTranslation) ? e2.postTranslation : null, v2 = z(e2.processor) ? e2.processor : null, y2 = I(e2.warnHtmlMessage) ? e2.warnHtmlMessage : true, b2 = !!e2.escapeParameter, x2 = P(e2.messageCompiler) ? e2.messageCompiler : rn, S2 = P(e2.messageResolver) ? e2.messageResolver : on || wt, w2 = P(e2.localeFallbacker) ? e2.localeFallbacker : cn || Jt, E2 = L(e2.fallbackContext) ? e2.fallbackContext : void 0, O2 = e2, k2 = L(O2.__datetimeFormatters) ? O2.__datetimeFormatters : /* @__PURE__ */ new Map(), ee2 = L(O2.__numberFormatters) ? O2.__numberFormatters : /* @__PURE__ */ new Map(), te2 = L(O2.__meta) ? O2.__meta : {};
  hn++;
  let A2 = { version: n2, cid: hn, locale: r2, fallbackLocale: a2, messages: o2, modifiers: l2, pluralRules: u2, missing: d2, missingWarn: f2, fallbackWarn: p2, fallbackFormat: m2, unresolving: h2, postTranslation: _2, processor: v2, warnHtmlMessage: y2, escapeParameter: b2, messageCompiler: x2, messageResolver: S2, localeFallbacker: w2, fallbackContext: E2, onWarn: t2, __meta: te2 };
  return A2.datetimeFormats = s2, A2.numberFormats = c2, A2.__datetimeFormatters = k2, A2.__numberFormatters = ee2, __INTLIFY_PROD_DEVTOOLS__ && Lt(A2, n2, te2), A2;
}
var _n = (e2) => ({ [e2]: D() });
function vn(e2, t2, n2, r2, i2) {
  let { missing: a2, onWarn: o2 } = e2;
  if (a2 !== null) {
    let r3 = a2(e2, n2, t2, i2);
    return F(r3) ? r3 : t2;
  } else return t2;
}
function yn(e2, t2, n2) {
  let r2 = e2;
  r2.__localeChainCache = /* @__PURE__ */ new Map(), e2.localeFallbacker(e2, n2, t2);
}
function bn(e2, t2) {
  return e2 === t2 ? false : e2.split(`-`)[0] === t2.split(`-`)[0];
}
function xn(e2, t2) {
  let n2 = t2.indexOf(e2);
  if (n2 === -1) return false;
  for (let r2 = n2 + 1; r2 < t2.length; r2++) if (bn(e2, t2[r2])) return true;
  return false;
}
function Sn(e2) {
  return (t2) => Cn(t2, e2);
}
function Cn(e2, t2) {
  let n2 = Qe(t2);
  if (n2 == null) throw ht(0);
  if (ot(n2) === 1) {
    let t3 = et(n2);
    return e2.plural(t3.reduce((t4, n3) => [...t4, wn(e2, n3)], []));
  } else return wn(e2, n2);
}
function wn(e2, t2) {
  let n2 = nt(t2);
  if (n2 != null) return e2.type === `text` ? n2 : e2.normalize([n2]);
  {
    let n3 = it(t2).reduce((t3, n4) => [...t3, Tn(e2, n4)], []);
    return e2.normalize(n3);
  }
}
function Tn(e2, t2) {
  let n2 = ot(t2);
  switch (n2) {
    case 3:
      return ct(t2, n2);
    case 9:
      return ct(t2, n2);
    case 4: {
      let r2 = t2;
      if (M(r2, `k`) && r2.k) return e2.interpolate(e2.named(r2.k));
      if (M(r2, `key`) && r2.key) return e2.interpolate(e2.named(r2.key));
      throw ht(n2);
    }
    case 5: {
      let r2 = t2;
      if (M(r2, `i`) && x(r2.i)) return e2.interpolate(e2.list(r2.i));
      if (M(r2, `index`) && x(r2.index)) return e2.interpolate(e2.list(r2.index));
      throw ht(n2);
    }
    case 6: {
      let n3 = t2, r2 = ut(n3), i2 = ft(n3);
      return e2.linked(Tn(e2, i2), r2 ? Tn(e2, r2) : void 0, e2.type);
    }
    case 7:
      return ct(t2, n2);
    case 8:
      return ct(t2, n2);
    default:
      throw Error(`unhandled node on format message part: ${n2}`);
  }
}
var En = (e2) => e2, Dn = D();
function On(e2, t2 = {}) {
  let n2 = false, r2 = t2.onError || xe;
  return t2.onError = (e3) => {
    n2 = true, r2(e3);
  }, { ...Ye(e2, t2), detectError: n2 };
}
var kn = (e2, t2) => {
  if (!F(e2)) throw J(q.NOT_SUPPORT_NON_STRING_MESSAGE);
  {
    I(t2.warnHtmlMessage) && t2.warnHtmlMessage;
    let n2 = (t2.onCacheKey || En)(e2), r2 = Dn[n2];
    if (r2) return r2;
    let { code: i2, detectError: a2 } = On(e2, t2), o2 = Function(`return ${i2}`)();
    return a2 ? o2 : Dn[n2] = o2;
  }
};
function An(e2, t2) {
  if (__INTLIFY_JIT_COMPILATION__ && !__INTLIFY_DROP_MESSAGE_COMPILER__ && F(e2)) {
    I(t2.warnHtmlMessage) && t2.warnHtmlMessage;
    let n2 = (t2.onCacheKey || En)(e2), r2 = Dn[n2];
    if (r2) return r2;
    let { ast: i2, detectError: a2 } = On(e2, { ...t2, location: false, jit: true }), o2 = Sn(i2);
    return a2 ? o2 : Dn[n2] = o2;
  } else {
    let t3 = e2.cacheKey;
    return t3 ? Dn[t3] || (Dn[t3] = Sn(e2)) : Sn(e2);
  }
}
var jn = () => ``, Y = (e2) => P(e2);
function Mn(e2, ...t2) {
  let { fallbackFormat: n2, postTranslation: r2, unresolving: i2, messageCompiler: a2, fallbackLocale: o2, messages: s2 } = e2, [c2, l2] = Ln(...t2), u2 = I(l2.missingWarn) ? l2.missingWarn : e2.missingWarn, d2 = I(l2.fallbackWarn) ? l2.fallbackWarn : e2.fallbackWarn, f2 = I(l2.escapeParameter) ? l2.escapeParameter : e2.escapeParameter, p2 = !!l2.resolvedMessage, m2 = F(l2.default) || I(l2.default) ? I(l2.default) ? a2 ? c2 : () => c2 : l2.default : n2 ? a2 ? c2 : () => c2 : ``, h2 = n2 || m2 !== ``, g2 = Gt(e2, l2);
  f2 && Nn(l2);
  let [_2, v2, y2] = p2 ? [c2, g2, s2[g2] || D()] : Pn(e2, c2, g2, o2, d2, u2), b2 = _2, x2 = c2;
  if (!p2 && !(F(b2) || K(b2) || Y(b2)) && h2 && (b2 = m2, x2 = b2), !p2 && (!(F(b2) || K(b2) || Y(b2)) || !F(v2))) return i2 ? -1 : c2;
  let S2 = false, C2 = Y(b2) ? b2 : Fn(e2, c2, v2, b2, x2, () => {
    S2 = true;
  });
  if (S2) return b2;
  let w2 = In(e2, C2, Pt(zn(e2, v2, y2, l2))), E2 = r2 ? r2(w2, c2) : w2;
  if (f2 && F(E2) && (E2 = A(E2)), __INTLIFY_PROD_DEVTOOLS__) {
    let t3 = { timestamp: Date.now(), key: F(c2) ? c2 : Y(b2) ? b2.key : ``, locale: v2 || (Y(b2) ? b2.locale : ``), format: F(b2) ? b2 : Y(b2) ? b2.source : ``, message: E2 };
    t3.meta = T({}, e2.__meta, dn() || {}), Rt(t3);
  }
  return E2;
}
function Nn(e2) {
  N(e2.list) ? e2.list = e2.list.map((e3) => F(e3) ? ee(e3) : e3) : L(e2.named) && Object.keys(e2.named).forEach((t2) => {
    F(e2.named[t2]) && (e2.named[t2] = ee(e2.named[t2]));
  });
}
function Pn(e2, t2, n2, r2, i2, a2) {
  let { messages: o2, onWarn: s2, messageResolver: c2, localeFallbacker: l2 } = e2, u2 = l2(e2, r2, n2), d2 = D(), f2, p2 = null;
  for (let n3 = 0; n3 < u2.length && (f2 = u2[n3], d2 = o2[f2] || D(), (p2 = c2(d2, t2)) === null && (p2 = d2[t2]), !(F(p2) || K(p2) || Y(p2))); n3++) if (!xn(f2, u2)) {
    let n4 = vn(e2, t2, f2, a2, `translate`);
    n4 !== t2 && (p2 = n4);
  }
  return [p2, f2, d2];
}
function Fn(e2, t2, n2, r2, i2, a2) {
  let { messageCompiler: o2, warnHtmlMessage: s2 } = e2;
  if (Y(r2)) {
    let e3 = r2;
    return e3.locale = e3.locale || n2, e3.key = e3.key || t2, e3;
  }
  if (o2 == null) {
    let e3 = (() => r2);
    return e3.locale = n2, e3.key = t2, e3;
  }
  let c2 = o2(r2, Rn(e2, n2, i2, r2, s2, a2));
  return c2.locale = n2, c2.key = t2, c2.source = r2, c2;
}
function In(e2, t2, n2) {
  return t2(n2);
}
function Ln(...e2) {
  let [t2, n2, r2] = e2, i2 = D();
  if (!F(t2) && !x(t2) && !Y(t2) && !K(t2)) throw J(q.INVALID_ARGUMENT);
  let a2 = x(t2) ? String(t2) : (Y(t2), t2);
  return x(n2) ? i2.plural = n2 : F(n2) ? i2.default = n2 : z(n2) && !w(n2) ? i2.named = n2 : N(n2) && (i2.list = n2), x(r2) ? i2.plural = r2 : F(r2) ? i2.default = r2 : z(r2) && T(i2, r2), [a2, i2];
}
function Rn(e2, t2, n2, r2, i2, a2) {
  return { locale: t2, key: n2, warnHtmlMessage: i2, onError: (e3) => {
    throw a2 && a2(e3), e3;
  }, onCacheKey: (e3) => y(t2, n2, e3) };
}
function zn(e2, t2, n2, r2) {
  let { modifiers: i2, pluralRules: a2, messageResolver: o2, fallbackLocale: s2, fallbackWarn: c2, missingWarn: l2, fallbackContext: u2 } = e2, d2 = { locale: t2, modifiers: i2, pluralRules: a2, messages: (r3) => {
    let i3 = o2(n2, r3);
    if (i3 == null && u2) {
      let [, , e3] = Pn(u2, r3, t2, s2, c2, l2);
      i3 = o2(e3, r3);
    }
    if (F(i3) || K(i3)) {
      let n3 = false, a3 = Fn(e2, r3, t2, i3, r3, () => {
        n3 = true;
      });
      return n3 ? jn : a3;
    } else if (Y(i3)) return i3;
    else return jn;
  } };
  return e2.processor && (d2.processor = e2.processor), r2.list && (d2.list = r2.list), r2.named && (d2.named = r2.named), x(r2.plural) && (d2.pluralIndex = r2.plural), d2;
}
var Bn = typeof Intl < `u`;
Bn && Intl.DateTimeFormat, Bn && Intl.NumberFormat;
function Vn(e2, ...t2) {
  let { datetimeFormats: n2, unresolving: r2, fallbackLocale: i2, onWarn: a2, localeFallbacker: o2 } = e2, { __datetimeFormatters: s2 } = e2, [c2, l2, u2, d2] = Un(...t2), f2 = I(u2.missingWarn) ? u2.missingWarn : e2.missingWarn;
  I(u2.fallbackWarn) ? u2.fallbackWarn : e2.fallbackWarn;
  let p2 = !!u2.part, m2 = Gt(e2, u2), h2 = o2(e2, i2, m2);
  if (!F(c2) || c2 === ``) return new Intl.DateTimeFormat(m2, d2).format(l2);
  let g2 = {}, _2, v2 = null;
  for (let t3 = 0; t3 < h2.length && (_2 = h2[t3], g2 = n2[_2] || {}, v2 = g2[c2], !z(v2)); t3++) vn(e2, c2, _2, f2, `datetime format`);
  if (!z(v2) || !F(_2)) return r2 ? -1 : c2;
  let y2 = `${_2}__${c2}`;
  w(d2) || (y2 = `${y2}__${JSON.stringify(d2)}`);
  let b2 = s2.get(y2);
  return b2 || (b2 = new Intl.DateTimeFormat(_2, T({}, v2, d2)), s2.set(y2, b2)), p2 ? b2.formatToParts(l2) : b2.format(l2);
}
var Hn = [`localeMatcher`, `weekday`, `era`, `year`, `month`, `day`, `hour`, `minute`, `second`, `timeZoneName`, `formatMatcher`, `hour12`, `timeZone`, `dateStyle`, `timeStyle`, `calendar`, `dayPeriod`, `numberingSystem`, `hourCycle`, `fractionalSecondDigits`];
function Un(...e2) {
  let [t2, n2, r2, i2] = e2, a2 = D(), o2 = D(), s2;
  if (F(t2)) {
    let e3 = t2.match(/(\d{4}-\d{2}-\d{2})(T|\s)?(.*)/);
    if (!e3) throw J(q.INVALID_ISO_DATE_ARGUMENT);
    let n3 = e3[3] ? e3[3].trim().startsWith(`T`) ? `${e3[1].trim()}${e3[3].trim()}` : `${e3[1].trim()}T${e3[3].trim()}` : e3[1].trim();
    s2 = new Date(n3);
    try {
      s2.toISOString();
    } catch {
      throw J(q.INVALID_ISO_DATE_ARGUMENT);
    }
  } else if (S(t2)) {
    if (isNaN(t2.getTime())) throw J(q.INVALID_DATE_ARGUMENT);
    s2 = t2;
  } else if (x(t2)) s2 = t2;
  else throw J(q.INVALID_ARGUMENT);
  return F(n2) ? a2.key = n2 : z(n2) && Object.keys(n2).forEach((e3) => {
    Hn.includes(e3) ? o2[e3] = n2[e3] : a2[e3] = n2[e3];
  }), F(r2) ? a2.locale = r2 : z(r2) && (o2 = r2), z(i2) && (o2 = i2), [a2.key || ``, s2, a2, o2];
}
function Wn(e2, t2, n2) {
  let r2 = e2;
  for (let e3 in n2) {
    let n3 = `${t2}__${e3}`;
    r2.__datetimeFormatters.has(n3) && r2.__datetimeFormatters.delete(n3);
  }
}
function Gn(e2, ...t2) {
  let { numberFormats: n2, unresolving: r2, fallbackLocale: i2, onWarn: a2, localeFallbacker: o2 } = e2, { __numberFormatters: s2 } = e2, [c2, l2, u2, d2] = qn(...t2), f2 = I(u2.missingWarn) ? u2.missingWarn : e2.missingWarn;
  I(u2.fallbackWarn) ? u2.fallbackWarn : e2.fallbackWarn;
  let p2 = !!u2.part, m2 = Gt(e2, u2), h2 = o2(e2, i2, m2);
  if (!F(c2) || c2 === ``) return new Intl.NumberFormat(m2, d2).format(l2);
  let g2 = {}, _2, v2 = null;
  for (let t3 = 0; t3 < h2.length && (_2 = h2[t3], g2 = n2[_2] || {}, v2 = g2[c2], !z(v2)); t3++) vn(e2, c2, _2, f2, `number format`);
  if (!z(v2) || !F(_2)) return r2 ? -1 : c2;
  let y2 = `${_2}__${c2}`;
  w(d2) || (y2 = `${y2}__${JSON.stringify(d2)}`);
  let b2 = s2.get(y2);
  return b2 || (b2 = new Intl.NumberFormat(_2, T({}, v2, d2)), s2.set(y2, b2)), p2 ? b2.formatToParts(l2) : b2.format(l2);
}
var Kn = [`localeMatcher`, `style`, `currency`, `currencyDisplay`, `currencySign`, `useGrouping`, `minimumIntegerDigits`, `minimumFractionDigits`, `maximumFractionDigits`, `minimumSignificantDigits`, `maximumSignificantDigits`, `compactDisplay`, `notation`, `signDisplay`, `unit`, `unitDisplay`, `roundingMode`, `roundingPriority`, `roundingIncrement`, `trailingZeroDisplay`];
function qn(...e2) {
  let [t2, n2, r2, i2] = e2, a2 = D(), o2 = D();
  if (!x(t2)) throw J(q.INVALID_ARGUMENT);
  let s2 = t2;
  return F(n2) ? a2.key = n2 : z(n2) && Object.keys(n2).forEach((e3) => {
    Kn.includes(e3) ? o2[e3] = n2[e3] : a2[e3] = n2[e3];
  }), F(r2) ? a2.locale = r2 : z(r2) && (o2 = r2), z(i2) && (o2 = i2), [a2.key || ``, s2, a2, o2];
}
function Jn(e2, t2, n2) {
  let r2 = e2;
  for (let e3 in n2) {
    let n3 = `${t2}__${e3}`;
    r2.__numberFormatters.has(n3) && r2.__numberFormatters.delete(n3);
  }
}
Xe();
var Yn = `9.14.5`;
function Xn() {
  typeof __VUE_I18N_FULL_INSTALL__ != `boolean` && (k().__VUE_I18N_FULL_INSTALL__ = true), typeof __VUE_I18N_LEGACY_API__ != `boolean` && (k().__VUE_I18N_LEGACY_API__ = true), typeof __INTLIFY_JIT_COMPILATION__ != `boolean` && (k().__INTLIFY_JIT_COMPILATION__ = false), typeof __INTLIFY_DROP_MESSAGE_COMPILER__ != `boolean` && (k().__INTLIFY_DROP_MESSAGE_COMPILER__ = false), typeof __INTLIFY_PROD_DEVTOOLS__ != `boolean` && (k().__INTLIFY_PROD_DEVTOOLS__ = false);
}
var Zn = Ht.__EXTEND_POINT__, Qn = oe(Zn), X = { FALLBACK_TO_ROOT: Zn, NOT_SUPPORTED_PRESERVE: Qn(), NOT_SUPPORTED_FORMATTER: Qn(), NOT_SUPPORTED_PRESERVE_DIRECTIVE: Qn(), NOT_SUPPORTED_GET_CHOICE_INDEX: Qn(), COMPONENT_NAME_LEGACY_COMPATIBLE: Qn(), NOT_FOUND_PARENT_SCOPE: Qn(), IGNORE_OBJ_FLATTEN: Qn(), NOTICE_DROP_ALLOW_COMPOSITION: Qn(), NOTICE_DROP_TRANSLATE_EXIST_COMPATIBLE_FLAG: Qn() };
X.FALLBACK_TO_ROOT, X.NOT_SUPPORTED_PRESERVE, X.NOT_SUPPORTED_FORMATTER, X.NOT_SUPPORTED_PRESERVE_DIRECTIVE, X.NOT_SUPPORTED_GET_CHOICE_INDEX, X.COMPONENT_NAME_LEGACY_COMPATIBLE, X.NOT_FOUND_PARENT_SCOPE, X.IGNORE_OBJ_FLATTEN, X.NOTICE_DROP_ALLOW_COMPOSITION, X.NOTICE_DROP_TRANSLATE_EXIST_COMPATIBLE_FLAG;
var $n = q.__EXTEND_POINT__, Z = oe($n), Q = { UNEXPECTED_RETURN_TYPE: $n, INVALID_ARGUMENT: Z(), MUST_BE_CALL_SETUP_TOP: Z(), NOT_INSTALLED: Z(), NOT_AVAILABLE_IN_LEGACY_MODE: Z(), REQUIRED_VALUE: Z(), INVALID_VALUE: Z(), CANNOT_SETUP_VUE_DEVTOOLS_PLUGIN: Z(), NOT_INSTALLED_WITH_PROVIDE: Z(), UNEXPECTED_ERROR: Z(), NOT_COMPATIBLE_LEGACY_VUE_I18N: Z(), BRIDGE_SUPPORT_VUE_2_ONLY: Z(), MUST_DEFINE_I18N_OPTION_IN_ALLOW_COMPOSITION: Z(), NOT_AVAILABLE_COMPOSITION_IN_LEGACY: Z(), __EXTEND_POINT__: Z() };
function $(e2, ...t2) {
  return be(e2, null, void 0);
}
Q.UNEXPECTED_RETURN_TYPE, Q.INVALID_ARGUMENT, Q.MUST_BE_CALL_SETUP_TOP, Q.NOT_INSTALLED, Q.UNEXPECTED_ERROR, Q.NOT_AVAILABLE_IN_LEGACY_MODE, Q.REQUIRED_VALUE, Q.INVALID_VALUE, Q.CANNOT_SETUP_VUE_DEVTOOLS_PLUGIN, Q.NOT_INSTALLED_WITH_PROVIDE, Q.NOT_COMPATIBLE_LEGACY_VUE_I18N, Q.BRIDGE_SUPPORT_VUE_2_ONLY, Q.MUST_DEFINE_I18N_OPTION_IN_ALLOW_COMPOSITION, Q.NOT_AVAILABLE_COMPOSITION_IN_LEGACY;
var er = v(`__translateVNode`), tr = v(`__datetimeParts`), nr = v(`__numberParts`), rr = v(`__setPluralRules`);
v(`__intlifyMeta`);
var ir = v(`__injectWithOption`), ar = v(`__dispose`);
function or(e2) {
  if (!L(e2) || K(e2)) return e2;
  for (let t2 in e2) if (M(e2, t2)) if (!t2.includes(`.`)) L(e2[t2]) && or(e2[t2]);
  else {
    let n2 = t2.split(`.`), r2 = n2.length - 1, i2 = e2, a2 = false;
    for (let e3 = 0; e3 < r2; e3++) {
      if (n2[e3] === `__proto__`) throw Error(`unsafe key: ${n2[e3]}`);
      if (n2[e3] in i2 || (i2[n2[e3]] = D()), !L(i2[n2[e3]])) {
        a2 = true;
        break;
      }
      i2 = i2[n2[e3]];
    }
    if (a2 || (K(i2) ? mt.includes(n2[r2]) || delete e2[t2] : (i2[n2[r2]] = e2[t2], delete e2[t2])), !K(i2)) {
      let e3 = i2[n2[r2]];
      L(e3) && or(e3);
    }
  }
  return e2;
}
function sr(e2, t2) {
  let { messages: n2, __i18n: r2, messageResolver: i2, flatJson: a2 } = t2, o2 = z(n2) ? n2 : N(r2) ? D() : { [e2]: D() };
  if (N(r2) && r2.forEach((e3) => {
    if (`locale` in e3 && `resource` in e3) {
      let { locale: t3, resource: n3 } = e3;
      t3 ? (o2[t3] = o2[t3] || D(), ce(n3, o2[t3])) : ce(n3, o2);
    } else F(e3) && ce(JSON.parse(e3), o2);
  }), i2 == null && a2) for (let e3 in o2) M(o2, e3) && or(o2[e3]);
  return o2;
}
function cr(e2) {
  return e2.type;
}
function lr(e2, t2, n2) {
  let r2 = L(t2.messages) ? t2.messages : D();
  `__i18nGlobal` in n2 && (r2 = sr(e2.locale.value, { messages: r2, __i18n: n2.__i18nGlobal }));
  let i2 = Object.keys(r2);
  if (i2.length && i2.forEach((t3) => {
    e2.mergeLocaleMessage(t3, r2[t3]);
  }), L(t2.datetimeFormats)) {
    let n3 = Object.keys(t2.datetimeFormats);
    n3.length && n3.forEach((n4) => {
      e2.mergeDateTimeFormat(n4, t2.datetimeFormats[n4]);
    });
  }
  if (L(t2.numberFormats)) {
    let n3 = Object.keys(t2.numberFormats);
    n3.length && n3.forEach((n4) => {
      e2.mergeNumberFormat(n4, t2.numberFormats[n4]);
    });
  }
}
function ur(e2) {
  return f(l, null, e2, 0);
}
var dr = () => [], fr = () => false, pr = 0;
function mr(e2) {
  return ((t2, n2, r2, i2) => e2(n2, r2, c() || void 0, i2));
}
function hr(e2 = {}, r2) {
  let { __root: i2, __injectWithOption: a2 } = e2, s2 = i2 === void 0, c2 = e2.flatJson, l2 = _ ? t : o, u2 = !!e2.translateExistCompatible, f2 = I(e2.inheritLocale) ? e2.inheritLocale : true, p2 = l2(i2 && f2 ? i2.locale.value : F(e2.locale) ? e2.locale : en), m2 = l2(i2 && f2 ? i2.fallbackLocale.value : F(e2.fallbackLocale) || N(e2.fallbackLocale) || z(e2.fallbackLocale) || e2.fallbackLocale === false ? e2.fallbackLocale : p2.value), h2 = l2(sr(p2.value, e2)), g2 = l2(z(e2.datetimeFormats) ? e2.datetimeFormats : { [p2.value]: {} }), v2 = l2(z(e2.numberFormats) ? e2.numberFormats : { [p2.value]: {} }), y2 = i2 ? i2.missingWarn : I(e2.missingWarn) || C(e2.missingWarn) ? e2.missingWarn : true, b2 = i2 ? i2.fallbackWarn : I(e2.fallbackWarn) || C(e2.fallbackWarn) ? e2.fallbackWarn : true, S2 = i2 ? i2.fallbackRoot : I(e2.fallbackRoot) ? e2.fallbackRoot : true, w2 = !!e2.fallbackFormat, E2 = P(e2.missing) ? e2.missing : null, D2 = P(e2.missing) ? mr(e2.missing) : null, O2 = P(e2.postTranslation) ? e2.postTranslation : null, k2 = i2 ? i2.warnHtmlMessage : I(e2.warnHtmlMessage) ? e2.warnHtmlMessage : true, ee2 = !!e2.escapeParameter, te2 = i2 ? i2.modifiers : z(e2.modifiers) ? e2.modifiers : {}, A2 = e2.pluralRules || i2 && i2.pluralRules, j2;
  j2 = (() => {
    s2 && pn(null);
    let t2 = { version: Yn, locale: p2.value, fallbackLocale: m2.value, messages: h2.value, modifiers: te2, pluralRules: A2, missing: D2 === null ? void 0 : D2, missingWarn: y2, fallbackWarn: b2, fallbackFormat: w2, unresolving: true, postTranslation: O2 === null ? void 0 : O2, warnHtmlMessage: k2, escapeParameter: ee2, messageResolver: e2.messageResolver, messageCompiler: e2.messageCompiler, __meta: { framework: `vue` } };
    t2.datetimeFormats = g2.value, t2.numberFormats = v2.value, t2.__datetimeFormatters = z(j2) ? j2.__datetimeFormatters : void 0, t2.__numberFormatters = z(j2) ? j2.__numberFormatters : void 0;
    let n2 = gn(t2);
    return s2 && pn(n2), n2;
  })(), yn(j2, p2.value, m2.value);
  function ne2() {
    return [p2.value, m2.value, h2.value, g2.value, v2.value];
  }
  let R2 = d({ get: () => p2.value, set: (e3) => {
    p2.value = e3, j2.locale = p2.value;
  } }), re2 = d({ get: () => m2.value, set: (e3) => {
    m2.value = e3, j2.fallbackLocale = m2.value, yn(j2, p2.value, e3);
  } }), ie2 = d(() => h2.value), ae2 = d(() => g2.value), oe2 = d(() => v2.value);
  function se2() {
    return P(O2) ? O2 : null;
  }
  function le2(e3) {
    O2 = e3, j2.postTranslation = e3;
  }
  function ue2() {
    return E2;
  }
  function de2(e3) {
    e3 !== null && (D2 = mr(e3)), E2 = e3, j2.missing = D2;
  }
  let B2 = (e3, t2, n2, r3, a3, o2) => {
    ne2();
    let c3;
    try {
      __INTLIFY_PROD_DEVTOOLS__, s2 || (j2.fallbackContext = i2 ? mn() : void 0), c3 = e3(j2);
    } finally {
      __INTLIFY_PROD_DEVTOOLS__, s2 || (j2.fallbackContext = void 0);
    }
    if (n2 !== `translate exists` && x(c3) && c3 === -1 || n2 === `translate exists` && !c3) {
      let [e4, n3] = t2();
      return i2 && S2 ? r3(i2) : a3(e4);
    } else if (o2(c3)) return c3;
    else throw $(Q.UNEXPECTED_RETURN_TYPE);
  };
  function fe2(...e3) {
    return B2((t2) => Reflect.apply(Mn, null, [t2, ...e3]), () => Ln(...e3), `translate`, (t2) => Reflect.apply(t2.t, t2, [...e3]), (e4) => e4, (e4) => F(e4));
  }
  function pe2(...e3) {
    let [t2, n2, r3] = e3;
    if (r3 && !L(r3)) throw $(Q.INVALID_ARGUMENT);
    return fe2(t2, n2, T({ resolvedMessage: true }, r3 || {}));
  }
  function me2(...e3) {
    return B2((t2) => Reflect.apply(Vn, null, [t2, ...e3]), () => Un(...e3), `datetime format`, (t2) => Reflect.apply(t2.d, t2, [...e3]), () => ``, (e4) => F(e4));
  }
  function he2(...e3) {
    return B2((t2) => Reflect.apply(Gn, null, [t2, ...e3]), () => qn(...e3), `number format`, (t2) => Reflect.apply(t2.n, t2, [...e3]), () => ``, (e4) => F(e4));
  }
  function ge2(e3) {
    return e3.map((e4) => F(e4) || x(e4) || I(e4) ? ur(String(e4)) : e4);
  }
  let _e2 = { normalize: ge2, interpolate: (e3) => e3, type: `vnode` };
  function ve2(...e3) {
    return B2((t2) => {
      let n2, r3 = t2;
      try {
        r3.processor = _e2, n2 = Reflect.apply(Mn, null, [r3, ...e3]);
      } finally {
        r3.processor = null;
      }
      return n2;
    }, () => Ln(...e3), `translate`, (t2) => t2[er](...e3), (e4) => [ur(e4)], (e4) => N(e4));
  }
  function V2(...e3) {
    return B2((t2) => Reflect.apply(Gn, null, [t2, ...e3]), () => qn(...e3), `number format`, (t2) => t2[nr](...e3), dr, (e4) => F(e4) || N(e4));
  }
  function ye2(...e3) {
    return B2((t2) => Reflect.apply(Vn, null, [t2, ...e3]), () => Un(...e3), `datetime format`, (t2) => t2[tr](...e3), dr, (e4) => F(e4) || N(e4));
  }
  function be2(e3) {
    A2 = e3, j2.pluralRules = A2;
  }
  function xe2(e3, t2) {
    return B2(() => {
      if (!e3) return false;
      let n2 = U2(F(t2) ? t2 : p2.value), r3 = j2.messageResolver(n2, e3);
      return u2 ? r3 != null : K(r3) || Y(r3) || F(r3);
    }, () => [e3], `translate exists`, (n2) => Reflect.apply(n2.te, n2, [e3, t2]), fr, (e4) => I(e4));
  }
  function H2(e3) {
    let t2 = null, n2 = Yt(j2, m2.value, p2.value);
    for (let r3 = 0; r3 < n2.length; r3++) {
      let i3 = h2.value[n2[r3]] || {}, a3 = j2.messageResolver(i3, e3);
      if (a3 != null) {
        t2 = a3;
        break;
      }
    }
    return t2;
  }
  function Se2(e3) {
    return H2(e3) ?? (i2 && i2.tm(e3) || {});
  }
  function U2(e3) {
    return h2.value[e3] || {};
  }
  function Ce2(e3, t2) {
    if (c2) {
      let n2 = { [e3]: t2 };
      for (let e4 in n2) M(n2, e4) && or(n2[e4]);
      t2 = n2[e3];
    }
    h2.value[e3] = t2, j2.messages = h2.value;
  }
  function we2(e3, t2) {
    h2.value[e3] = h2.value[e3] || {};
    let n2 = { [e3]: t2 };
    if (c2) for (let e4 in n2) M(n2, e4) && or(n2[e4]);
    t2 = n2[e3], ce(t2, h2.value[e3]), j2.messages = h2.value;
  }
  function Te2(e3) {
    return g2.value[e3] || {};
  }
  function Ee2(e3, t2) {
    g2.value[e3] = t2, j2.datetimeFormats = g2.value, Wn(j2, e3, t2);
  }
  function De2(e3, t2) {
    g2.value[e3] = T(g2.value[e3] || {}, t2), j2.datetimeFormats = g2.value, Wn(j2, e3, t2);
  }
  function Oe2(e3) {
    return v2.value[e3] || {};
  }
  function ke2(e3, t2) {
    v2.value[e3] = t2, j2.numberFormats = v2.value, Jn(j2, e3, t2);
  }
  function Ae2(e3, t2) {
    v2.value[e3] = T(v2.value[e3] || {}, t2), j2.numberFormats = v2.value, Jn(j2, e3, t2);
  }
  pr++, i2 && _ && (n(i2.locale, (e3) => {
    f2 && (p2.value = e3, j2.locale = e3, yn(j2, p2.value, m2.value));
  }), n(i2.fallbackLocale, (e3) => {
    f2 && (m2.value = e3, j2.fallbackLocale = e3, yn(j2, p2.value, m2.value));
  }));
  let W2 = { id: pr, locale: R2, fallbackLocale: re2, get inheritLocale() {
    return f2;
  }, set inheritLocale(e3) {
    f2 = e3, e3 && i2 && (p2.value = i2.locale.value, m2.value = i2.fallbackLocale.value, yn(j2, p2.value, m2.value));
  }, get availableLocales() {
    return Object.keys(h2.value).sort();
  }, messages: ie2, get modifiers() {
    return te2;
  }, get pluralRules() {
    return A2 || {};
  }, get isGlobal() {
    return s2;
  }, get missingWarn() {
    return y2;
  }, set missingWarn(e3) {
    y2 = e3, j2.missingWarn = y2;
  }, get fallbackWarn() {
    return b2;
  }, set fallbackWarn(e3) {
    b2 = e3, j2.fallbackWarn = b2;
  }, get fallbackRoot() {
    return S2;
  }, set fallbackRoot(e3) {
    S2 = e3;
  }, get fallbackFormat() {
    return w2;
  }, set fallbackFormat(e3) {
    w2 = e3, j2.fallbackFormat = w2;
  }, get warnHtmlMessage() {
    return k2;
  }, set warnHtmlMessage(e3) {
    k2 = e3, j2.warnHtmlMessage = e3;
  }, get escapeParameter() {
    return ee2;
  }, set escapeParameter(e3) {
    ee2 = e3, j2.escapeParameter = e3;
  }, t: fe2, getLocaleMessage: U2, setLocaleMessage: Ce2, mergeLocaleMessage: we2, getPostTranslationHandler: se2, setPostTranslationHandler: le2, getMissingHandler: ue2, setMissingHandler: de2, [rr]: be2 };
  return W2.datetimeFormats = ae2, W2.numberFormats = oe2, W2.rt = pe2, W2.te = xe2, W2.tm = Se2, W2.d = me2, W2.n = he2, W2.getDateTimeFormat = Te2, W2.setDateTimeFormat = Ee2, W2.mergeDateTimeFormat = De2, W2.getNumberFormat = Oe2, W2.setNumberFormat = ke2, W2.mergeNumberFormat = Ae2, W2[ir] = a2, W2[er] = ve2, W2[tr] = ye2, W2[nr] = V2, W2;
}
function gr(e2) {
  let t2 = F(e2.locale) ? e2.locale : en, n2 = F(e2.fallbackLocale) || N(e2.fallbackLocale) || z(e2.fallbackLocale) || e2.fallbackLocale === false ? e2.fallbackLocale : t2, r2 = P(e2.missing) ? e2.missing : void 0, i2 = I(e2.silentTranslationWarn) || C(e2.silentTranslationWarn) ? !e2.silentTranslationWarn : true, a2 = I(e2.silentFallbackWarn) || C(e2.silentFallbackWarn) ? !e2.silentFallbackWarn : true, o2 = I(e2.fallbackRoot) ? e2.fallbackRoot : true, s2 = !!e2.formatFallbackMessages, c2 = z(e2.modifiers) ? e2.modifiers : {}, l2 = e2.pluralizationRules, u2 = P(e2.postTranslation) ? e2.postTranslation : void 0, d2 = F(e2.warnHtmlInMessage) ? e2.warnHtmlInMessage !== `off` : true, f2 = !!e2.escapeParameterHtml, p2 = I(e2.sync) ? e2.sync : true, m2 = e2.messages;
  if (z(e2.sharedMessages)) {
    let t3 = e2.sharedMessages;
    m2 = Object.keys(t3).reduce((e3, n3) => (T(e3[n3] || (e3[n3] = {}), t3[n3]), e3), m2 || {});
  }
  let { __i18n: h2, __root: g2, __injectWithOption: _2 } = e2, v2 = e2.datetimeFormats, y2 = e2.numberFormats, b2 = e2.flatJson, x2 = e2.translateExistCompatible;
  return { locale: t2, fallbackLocale: n2, messages: m2, flatJson: b2, datetimeFormats: v2, numberFormats: y2, missing: r2, missingWarn: i2, fallbackWarn: a2, fallbackRoot: o2, fallbackFormat: s2, modifiers: c2, pluralRules: l2, postTranslation: u2, warnHtmlMessage: d2, escapeParameter: f2, messageResolver: e2.messageResolver, inheritLocale: p2, translateExistCompatible: x2, __i18n: h2, __root: g2, __injectWithOption: _2 };
}
function _r(e2 = {}, t2) {
  {
    let t3 = hr(gr(e2)), { __extender: n2 } = e2, r2 = { id: t3.id, get locale() {
      return t3.locale.value;
    }, set locale(e3) {
      t3.locale.value = e3;
    }, get fallbackLocale() {
      return t3.fallbackLocale.value;
    }, set fallbackLocale(e3) {
      t3.fallbackLocale.value = e3;
    }, get messages() {
      return t3.messages.value;
    }, get datetimeFormats() {
      return t3.datetimeFormats.value;
    }, get numberFormats() {
      return t3.numberFormats.value;
    }, get availableLocales() {
      return t3.availableLocales;
    }, get formatter() {
      return { interpolate() {
        return [];
      } };
    }, set formatter(e3) {
    }, get missing() {
      return t3.getMissingHandler();
    }, set missing(e3) {
      t3.setMissingHandler(e3);
    }, get silentTranslationWarn() {
      return I(t3.missingWarn) ? !t3.missingWarn : t3.missingWarn;
    }, set silentTranslationWarn(e3) {
      t3.missingWarn = I(e3) ? !e3 : e3;
    }, get silentFallbackWarn() {
      return I(t3.fallbackWarn) ? !t3.fallbackWarn : t3.fallbackWarn;
    }, set silentFallbackWarn(e3) {
      t3.fallbackWarn = I(e3) ? !e3 : e3;
    }, get modifiers() {
      return t3.modifiers;
    }, get formatFallbackMessages() {
      return t3.fallbackFormat;
    }, set formatFallbackMessages(e3) {
      t3.fallbackFormat = e3;
    }, get postTranslation() {
      return t3.getPostTranslationHandler();
    }, set postTranslation(e3) {
      t3.setPostTranslationHandler(e3);
    }, get sync() {
      return t3.inheritLocale;
    }, set sync(e3) {
      t3.inheritLocale = e3;
    }, get warnHtmlInMessage() {
      return t3.warnHtmlMessage ? `warn` : `off`;
    }, set warnHtmlInMessage(e3) {
      t3.warnHtmlMessage = e3 !== `off`;
    }, get escapeParameterHtml() {
      return t3.escapeParameter;
    }, set escapeParameterHtml(e3) {
      t3.escapeParameter = e3;
    }, get preserveDirectiveContent() {
      return true;
    }, set preserveDirectiveContent(e3) {
    }, get pluralizationRules() {
      return t3.pluralRules || {};
    }, __composer: t3, t(...e3) {
      let [n3, r3, i2] = e3, a2 = {}, o2 = null, s2 = null;
      if (!F(n3)) throw $(Q.INVALID_ARGUMENT);
      let c2 = n3;
      return F(r3) ? a2.locale = r3 : N(r3) ? o2 = r3 : z(r3) && (s2 = r3), N(i2) ? o2 = i2 : z(i2) && (s2 = i2), Reflect.apply(t3.t, t3, [c2, o2 || s2 || {}, a2]);
    }, rt(...e3) {
      return Reflect.apply(t3.rt, t3, [...e3]);
    }, tc(...e3) {
      let [n3, r3, i2] = e3, a2 = { plural: 1 }, o2 = null, s2 = null;
      if (!F(n3)) throw $(Q.INVALID_ARGUMENT);
      let c2 = n3;
      return F(r3) ? a2.locale = r3 : x(r3) ? a2.plural = r3 : N(r3) ? o2 = r3 : z(r3) && (s2 = r3), F(i2) ? a2.locale = i2 : N(i2) ? o2 = i2 : z(i2) && (s2 = i2), Reflect.apply(t3.t, t3, [c2, o2 || s2 || {}, a2]);
    }, te(e3, n3) {
      return t3.te(e3, n3);
    }, tm(e3) {
      return t3.tm(e3);
    }, getLocaleMessage(e3) {
      return t3.getLocaleMessage(e3);
    }, setLocaleMessage(e3, n3) {
      t3.setLocaleMessage(e3, n3);
    }, mergeLocaleMessage(e3, n3) {
      t3.mergeLocaleMessage(e3, n3);
    }, d(...e3) {
      return Reflect.apply(t3.d, t3, [...e3]);
    }, getDateTimeFormat(e3) {
      return t3.getDateTimeFormat(e3);
    }, setDateTimeFormat(e3, n3) {
      t3.setDateTimeFormat(e3, n3);
    }, mergeDateTimeFormat(e3, n3) {
      t3.mergeDateTimeFormat(e3, n3);
    }, n(...e3) {
      return Reflect.apply(t3.n, t3, [...e3]);
    }, getNumberFormat(e3) {
      return t3.getNumberFormat(e3);
    }, setNumberFormat(e3, n3) {
      t3.setNumberFormat(e3, n3);
    }, mergeNumberFormat(e3, n3) {
      t3.mergeNumberFormat(e3, n3);
    }, getChoiceIndex(e3, t4) {
      return -1;
    } };
    return r2.__extender = n2, r2;
  }
}
var vr = { tag: { type: [String, Object] }, locale: { type: String }, scope: { type: String, validator: (e2) => e2 === `parent` || e2 === `global`, default: `parent` }, i18n: { type: Object } };
function yr({ slots: e2 }, t2) {
  return t2.length === 1 && t2[0] === `default` ? (e2.default ? e2.default() : []).reduce((e3, t3) => [...e3, ...t3.type === p ? t3.children : [t3]], []) : t2.reduce((t3, n2) => {
    let r2 = e2[n2];
    return r2 && (t3[n2] = r2()), t3;
  }, D());
}
function br(e2) {
  return p;
}
var xr = u({ name: `i18n-t`, props: T({ keypath: { type: String, required: true }, plural: { type: [Number, String], validator: (e2) => x(e2) || !isNaN(e2) } }, vr), setup(e2, t2) {
  let { slots: n2, attrs: r2 } = t2, i2 = e2.i18n || Fr({ useScope: e2.scope, __useComponent: true });
  return () => {
    let a2 = Object.keys(n2).filter((e3) => e3 !== `_`), o2 = D();
    e2.locale && (o2.locale = e2.locale), e2.plural !== void 0 && (o2.plural = F(e2.plural) ? +e2.plural : e2.plural);
    let c2 = yr(t2, a2), l2 = i2[er](e2.keypath, c2, o2), u2 = T(D(), r2);
    return s(F(e2.tag) || L(e2.tag) ? e2.tag : br(), u2, l2);
  };
} });
function Sr(e2) {
  return N(e2) && !F(e2[0]);
}
function Cr(e2, t2, n2, r2) {
  let { slots: i2, attrs: a2 } = t2;
  return () => {
    let t3 = { part: true }, o2 = D();
    e2.locale && (t3.locale = e2.locale), F(e2.format) ? t3.key = e2.format : L(e2.format) && (F(e2.format.key) && (t3.key = e2.format.key), o2 = Object.keys(e2.format).reduce((t4, r3) => n2.includes(r3) ? T(D(), t4, { [r3]: e2.format[r3] }) : t4, D()));
    let c2 = r2(e2.value, t3, o2), l2 = [t3.key];
    N(c2) ? l2 = c2.map((e3, t4) => {
      let n3 = i2[e3.type], r3 = n3 ? n3({ [e3.type]: e3.value, index: t4, parts: c2 }) : [e3.value];
      return Sr(r3) && (r3[0].key = `${e3.type}-${t4}`), r3;
    }) : F(c2) && (l2 = [c2]);
    let u2 = T(D(), a2);
    return s(F(e2.tag) || L(e2.tag) ? e2.tag : br(), u2, l2);
  };
}
var wr = u({ name: `i18n-n`, props: T({ value: { type: Number, required: true }, format: { type: [String, Object] } }, vr), setup(e2, t2) {
  let n2 = e2.i18n || Fr({ useScope: e2.scope, __useComponent: true });
  return Cr(e2, t2, Kn, (...e3) => n2[nr](...e3));
} }), Tr = u({ name: `i18n-d`, props: T({ value: { type: [Number, Date], required: true }, format: { type: [String, Object] } }, vr), setup(e2, t2) {
  let n2 = e2.i18n || Fr({ useScope: e2.scope, __useComponent: true });
  return Cr(e2, t2, Hn, (...e3) => n2[tr](...e3));
} });
function Er(e2, t2) {
  let n2 = e2;
  if (e2.mode === `composition`) return n2.__getInstance(t2) || e2.global;
  {
    let r2 = n2.__getInstance(t2);
    return r2 == null ? e2.global.__composer : r2.__composer;
  }
}
function Dr(e2) {
  let t2 = (t3) => {
    let { instance: n2, modifiers: r2, value: i2 } = t3;
    if (!n2 || !n2.$) throw $(Q.UNEXPECTED_ERROR);
    let a2 = Er(e2, n2.$), o2 = Or(i2);
    return [Reflect.apply(a2.t, a2, [...kr(o2)]), a2];
  };
  return { created: (r2, i2) => {
    let [a2, o2] = t2(i2);
    _ && e2.global === o2 && (r2.__i18nWatcher = n(o2.locale, () => {
      i2.instance && i2.instance.$forceUpdate();
    })), r2.__composer = o2, r2.textContent = a2;
  }, unmounted: (e3) => {
    _ && e3.__i18nWatcher && (e3.__i18nWatcher(), e3.__i18nWatcher = void 0, delete e3.__i18nWatcher), e3.__composer && (e3.__composer = void 0, delete e3.__composer);
  }, beforeUpdate: (e3, { value: t3 }) => {
    if (e3.__composer) {
      let n2 = e3.__composer, r2 = Or(t3);
      e3.textContent = Reflect.apply(n2.t, n2, [...kr(r2)]);
    }
  }, getSSRProps: (e3) => {
    let [n2] = t2(e3);
    return { textContent: n2 };
  } };
}
function Or(e2) {
  if (F(e2)) return { path: e2 };
  if (z(e2)) {
    if (!(`path` in e2)) throw $(Q.REQUIRED_VALUE, `path`);
    return e2;
  } else throw $(Q.INVALID_VALUE);
}
function kr(e2) {
  let { path: t2, locale: n2, args: r2, choice: i2, plural: a2 } = e2, o2 = {}, s2 = r2 || {};
  return F(n2) && (o2.locale = n2), x(i2) && (o2.plural = i2), x(a2) && (o2.plural = a2), [t2, s2, o2];
}
function Ar(e2, t2, ...n2) {
  let r2 = z(n2[0]) ? n2[0] : {}, i2 = !!r2.useI18nComponentName;
  (!I(r2.globalInstall) || r2.globalInstall) && ([i2 ? `i18n` : xr.name, `I18nT`].forEach((t3) => e2.component(t3, xr)), [wr.name, `I18nN`].forEach((t3) => e2.component(t3, wr)), [Tr.name, `I18nD`].forEach((t3) => e2.component(t3, Tr))), e2.directive(`t`, Dr(t2));
}
function jr(e2, t2, n2) {
  return { beforeCreate() {
    let r2 = c();
    if (!r2) throw $(Q.UNEXPECTED_ERROR);
    let i2 = this.$options;
    if (i2.i18n) {
      let r3 = i2.i18n;
      if (i2.__i18n && (r3.__i18n = i2.__i18n), r3.__root = t2, this === this.$root) this.$i18n = Mr(e2, r3);
      else {
        r3.__injectWithOption = true, r3.__extender = n2.__vueI18nExtend, this.$i18n = _r(r3);
        let e3 = this.$i18n;
        e3.__extender && (e3.__disposer = e3.__extender(this.$i18n));
      }
    } else if (i2.__i18n) if (this === this.$root) this.$i18n = Mr(e2, i2);
    else {
      this.$i18n = _r({ __i18n: i2.__i18n, __injectWithOption: true, __extender: n2.__vueI18nExtend, __root: t2 });
      let e3 = this.$i18n;
      e3.__extender && (e3.__disposer = e3.__extender(this.$i18n));
    }
    else this.$i18n = e2;
    i2.__i18nGlobal && lr(t2, i2, i2), this.$t = (...e3) => this.$i18n.t(...e3), this.$rt = (...e3) => this.$i18n.rt(...e3), this.$tc = (...e3) => this.$i18n.tc(...e3), this.$te = (e3, t3) => this.$i18n.te(e3, t3), this.$d = (...e3) => this.$i18n.d(...e3), this.$n = (...e3) => this.$i18n.n(...e3), this.$tm = (e3) => this.$i18n.tm(e3), n2.__setInstance(r2, this.$i18n);
  }, mounted() {
  }, unmounted() {
    let e3 = c();
    if (!e3) throw $(Q.UNEXPECTED_ERROR);
    let t3 = this.$i18n;
    delete this.$t, delete this.$rt, delete this.$tc, delete this.$te, delete this.$d, delete this.$n, delete this.$tm, t3.__disposer && (t3.__disposer(), delete t3.__disposer, delete t3.__extender), n2.__deleteInstance(e3), delete this.$i18n;
  } };
}
function Mr(e2, t2) {
  e2.locale = t2.locale || e2.locale, e2.fallbackLocale = t2.fallbackLocale || e2.fallbackLocale, e2.missing = t2.missing || e2.missing, e2.silentTranslationWarn = t2.silentTranslationWarn || e2.silentFallbackWarn, e2.silentFallbackWarn = t2.silentFallbackWarn || e2.silentFallbackWarn, e2.formatFallbackMessages = t2.formatFallbackMessages || e2.formatFallbackMessages, e2.postTranslation = t2.postTranslation || e2.postTranslation, e2.warnHtmlInMessage = t2.warnHtmlInMessage || e2.warnHtmlInMessage, e2.escapeParameterHtml = t2.escapeParameterHtml || e2.escapeParameterHtml, e2.sync = t2.sync || e2.sync, e2.__composer[rr](t2.pluralizationRules || e2.pluralizationRules);
  let n2 = sr(e2.locale, { messages: t2.messages, __i18n: t2.__i18n });
  return Object.keys(n2).forEach((t3) => e2.mergeLocaleMessage(t3, n2[t3])), t2.datetimeFormats && Object.keys(t2.datetimeFormats).forEach((n3) => e2.mergeDateTimeFormat(n3, t2.datetimeFormats[n3])), t2.numberFormats && Object.keys(t2.numberFormats).forEach((n3) => e2.mergeNumberFormat(n3, t2.numberFormats[n3])), e2;
}
var Nr = v(`global-vue-i18n`);
function Pr(e2 = {}, t2) {
  let n2 = __VUE_I18N_LEGACY_API__ && I(e2.legacy) ? e2.legacy : __VUE_I18N_LEGACY_API__, r2 = I(e2.globalInjection) ? e2.globalInjection : true, i2 = __VUE_I18N_LEGACY_API__ && n2 ? !!e2.allowComposition : true, a2 = /* @__PURE__ */ new Map(), [o2, s2] = Ir(e2, n2), c2 = v(``);
  function l2(e3) {
    return a2.get(e3) || null;
  }
  function u2(e3, t3) {
    a2.set(e3, t3);
  }
  function d2(e3) {
    a2.delete(e3);
  }
  {
    let e3 = { get mode() {
      return __VUE_I18N_LEGACY_API__ && n2 ? `legacy` : `composition`;
    }, get allowComposition() {
      return i2;
    }, async install(t3, ...i3) {
      if (t3.__VUE_I18N_SYMBOL__ = c2, t3.provide(t3.__VUE_I18N_SYMBOL__, e3), z(i3[0])) {
        let t4 = i3[0];
        e3.__composerExtend = t4.__composerExtend, e3.__vueI18nExtend = t4.__vueI18nExtend;
      }
      let a3 = null;
      !n2 && r2 && (a3 = Kr(t3, e3.global)), __VUE_I18N_FULL_INSTALL__ && Ar(t3, e3, ...i3), __VUE_I18N_LEGACY_API__ && n2 && t3.mixin(jr(s2, s2.__composer, e3));
      let o3 = t3.unmount;
      t3.unmount = () => {
        a3 && a3(), e3.dispose(), o3();
      };
    }, get global() {
      return s2;
    }, dispose() {
      o2.stop();
    }, __instances: a2, __getInstance: l2, __setInstance: u2, __deleteInstance: d2 };
    return e3;
  }
}
function Fr(e2 = {}) {
  let t2 = c();
  if (t2 == null) throw $(Q.MUST_BE_CALL_SETUP_TOP);
  if (!t2.isCE && t2.appContext.app != null && !t2.appContext.app.__VUE_I18N_SYMBOL__) throw $(Q.NOT_INSTALLED);
  let n2 = Lr(t2), r2 = zr(n2), i2 = cr(t2), a2 = Rr(e2, i2);
  if (__VUE_I18N_LEGACY_API__ && n2.mode === `legacy` && !e2.__useComponent) {
    if (!n2.allowComposition) throw $(Q.NOT_AVAILABLE_IN_LEGACY_MODE);
    return Ur(t2, a2, r2, e2);
  }
  if (a2 === `global`) return lr(r2, e2, i2), r2;
  if (a2 === `parent`) {
    let i3 = Br(n2, t2, e2.__useComponent);
    return i3 ?? (i3 = r2), i3;
  }
  let o2 = n2, s2 = o2.__getInstance(t2);
  if (s2 == null) {
    let n3 = T({}, e2);
    `__i18n` in i2 && (n3.__i18n = i2.__i18n), r2 && (n3.__root = r2), s2 = hr(n3), o2.__composerExtend && (s2[ar] = o2.__composerExtend(s2)), Hr(o2, t2, s2), o2.__setInstance(t2, s2);
  }
  return s2;
}
function Ir(e2, t2, n2) {
  let r2 = a();
  {
    let n3 = __VUE_I18N_LEGACY_API__ && t2 ? r2.run(() => _r(e2)) : r2.run(() => hr(e2));
    if (n3 == null) throw $(Q.UNEXPECTED_ERROR);
    return [r2, n3];
  }
}
function Lr(e2) {
  {
    let t2 = m(e2.isCE ? Nr : e2.appContext.app.__VUE_I18N_SYMBOL__);
    if (!t2) throw $(e2.isCE ? Q.NOT_INSTALLED_WITH_PROVIDE : Q.UNEXPECTED_ERROR);
    return t2;
  }
}
function Rr(e2, t2) {
  return w(e2) ? `__i18n` in t2 ? `local` : `global` : e2.useScope ? e2.useScope : `local`;
}
function zr(e2) {
  return e2.mode === `composition` ? e2.global : e2.global.__composer;
}
function Br(e2, t2, n2 = false) {
  let r2 = null, i2 = t2.root, a2 = Vr(t2, n2);
  for (; a2 != null; ) {
    let t3 = e2;
    if (e2.mode === `composition`) r2 = t3.__getInstance(a2);
    else if (__VUE_I18N_LEGACY_API__) {
      let e3 = t3.__getInstance(a2);
      e3 != null && (r2 = e3.__composer, n2 && r2 && !r2[ir] && (r2 = null));
    }
    if (r2 != null || i2 === a2) break;
    a2 = a2.parent;
  }
  return r2;
}
function Vr(e2, t2 = false) {
  return e2 == null ? null : t2 && e2.vnode.ctx || e2.parent;
}
function Hr(t2, n2, i2) {
  e(() => {
  }, n2), r(() => {
    let e2 = i2;
    t2.__deleteInstance(n2);
    let r2 = e2[ar];
    r2 && (r2(), delete e2[ar]);
  }, n2);
}
function Ur(e2, n2, r2, i2 = {}) {
  let a2 = n2 === `local`, s2 = o(null);
  if (a2 && e2.proxy && !(e2.proxy.$options.i18n || e2.proxy.$options.__i18n)) throw $(Q.MUST_DEFINE_I18N_OPTION_IN_ALLOW_COMPOSITION);
  let c2 = I(i2.inheritLocale) ? i2.inheritLocale : !F(i2.locale), l2 = t(!a2 || c2 ? r2.locale.value : F(i2.locale) ? i2.locale : en), u2 = t(!a2 || c2 ? r2.fallbackLocale.value : F(i2.fallbackLocale) || N(i2.fallbackLocale) || z(i2.fallbackLocale) || i2.fallbackLocale === false ? i2.fallbackLocale : l2.value), f2 = t(sr(l2.value, i2)), p2 = t(z(i2.datetimeFormats) ? i2.datetimeFormats : { [l2.value]: {} }), m2 = t(z(i2.numberFormats) ? i2.numberFormats : { [l2.value]: {} }), g2 = a2 ? r2.missingWarn : I(i2.missingWarn) || C(i2.missingWarn) ? i2.missingWarn : true, _2 = a2 ? r2.fallbackWarn : I(i2.fallbackWarn) || C(i2.fallbackWarn) ? i2.fallbackWarn : true, v2 = a2 ? r2.fallbackRoot : I(i2.fallbackRoot) ? i2.fallbackRoot : true, y2 = !!i2.fallbackFormat, b2 = P(i2.missing) ? i2.missing : null, x2 = P(i2.postTranslation) ? i2.postTranslation : null, S2 = a2 ? r2.warnHtmlMessage : I(i2.warnHtmlMessage) ? i2.warnHtmlMessage : true, w2 = !!i2.escapeParameter, T2 = a2 ? r2.modifiers : z(i2.modifiers) ? i2.modifiers : {}, E2 = i2.pluralRules || a2 && r2.pluralRules;
  function D2() {
    return [l2.value, u2.value, f2.value, p2.value, m2.value];
  }
  let O2 = d({ get: () => s2.value ? s2.value.locale.value : l2.value, set: (e3) => {
    s2.value && (s2.value.locale.value = e3), l2.value = e3;
  } }), k2 = d({ get: () => s2.value ? s2.value.fallbackLocale.value : u2.value, set: (e3) => {
    s2.value && (s2.value.fallbackLocale.value = e3), u2.value = e3;
  } }), ee2 = d(() => s2.value ? s2.value.messages.value : f2.value), te2 = d(() => p2.value), A2 = d(() => m2.value);
  function j2() {
    return s2.value ? s2.value.getPostTranslationHandler() : x2;
  }
  function M2(e3) {
    s2.value && s2.value.setPostTranslationHandler(e3);
  }
  function L2() {
    return s2.value ? s2.value.getMissingHandler() : b2;
  }
  function ne2(e3) {
    s2.value && s2.value.setMissingHandler(e3);
  }
  function R2(e3) {
    return D2(), e3();
  }
  function re2(...e3) {
    return s2.value ? R2(() => Reflect.apply(s2.value.t, null, [...e3])) : R2(() => ``);
  }
  function ie2(...e3) {
    return s2.value ? Reflect.apply(s2.value.rt, null, [...e3]) : ``;
  }
  function ae2(...e3) {
    return s2.value ? R2(() => Reflect.apply(s2.value.d, null, [...e3])) : R2(() => ``);
  }
  function oe2(...e3) {
    return s2.value ? R2(() => Reflect.apply(s2.value.n, null, [...e3])) : R2(() => ``);
  }
  function se2(e3) {
    return s2.value ? s2.value.tm(e3) : {};
  }
  function ce2(e3, t2) {
    return s2.value ? s2.value.te(e3, t2) : false;
  }
  function le2(e3) {
    return s2.value ? s2.value.getLocaleMessage(e3) : {};
  }
  function ue2(e3, t2) {
    s2.value && (s2.value.setLocaleMessage(e3, t2), f2.value[e3] = t2);
  }
  function de2(e3, t2) {
    s2.value && s2.value.mergeLocaleMessage(e3, t2);
  }
  function B2(e3) {
    return s2.value ? s2.value.getDateTimeFormat(e3) : {};
  }
  function fe2(e3, t2) {
    s2.value && (s2.value.setDateTimeFormat(e3, t2), p2.value[e3] = t2);
  }
  function pe2(e3, t2) {
    s2.value && s2.value.mergeDateTimeFormat(e3, t2);
  }
  function me2(e3) {
    return s2.value ? s2.value.getNumberFormat(e3) : {};
  }
  function he2(e3, t2) {
    s2.value && (s2.value.setNumberFormat(e3, t2), m2.value[e3] = t2);
  }
  function ge2(e3, t2) {
    s2.value && s2.value.mergeNumberFormat(e3, t2);
  }
  let _e2 = { get id() {
    return s2.value ? s2.value.id : -1;
  }, locale: O2, fallbackLocale: k2, messages: ee2, datetimeFormats: te2, numberFormats: A2, get inheritLocale() {
    return s2.value ? s2.value.inheritLocale : c2;
  }, set inheritLocale(e3) {
    s2.value && (s2.value.inheritLocale = e3);
  }, get availableLocales() {
    return s2.value ? s2.value.availableLocales : Object.keys(f2.value);
  }, get modifiers() {
    return s2.value ? s2.value.modifiers : T2;
  }, get pluralRules() {
    return s2.value ? s2.value.pluralRules : E2;
  }, get isGlobal() {
    return s2.value ? s2.value.isGlobal : false;
  }, get missingWarn() {
    return s2.value ? s2.value.missingWarn : g2;
  }, set missingWarn(e3) {
    s2.value && (s2.value.missingWarn = e3);
  }, get fallbackWarn() {
    return s2.value ? s2.value.fallbackWarn : _2;
  }, set fallbackWarn(e3) {
    s2.value && (s2.value.missingWarn = e3);
  }, get fallbackRoot() {
    return s2.value ? s2.value.fallbackRoot : v2;
  }, set fallbackRoot(e3) {
    s2.value && (s2.value.fallbackRoot = e3);
  }, get fallbackFormat() {
    return s2.value ? s2.value.fallbackFormat : y2;
  }, set fallbackFormat(e3) {
    s2.value && (s2.value.fallbackFormat = e3);
  }, get warnHtmlMessage() {
    return s2.value ? s2.value.warnHtmlMessage : S2;
  }, set warnHtmlMessage(e3) {
    s2.value && (s2.value.warnHtmlMessage = e3);
  }, get escapeParameter() {
    return s2.value ? s2.value.escapeParameter : w2;
  }, set escapeParameter(e3) {
    s2.value && (s2.value.escapeParameter = e3);
  }, t: re2, getPostTranslationHandler: j2, setPostTranslationHandler: M2, getMissingHandler: L2, setMissingHandler: ne2, rt: ie2, d: ae2, n: oe2, tm: se2, te: ce2, getLocaleMessage: le2, setLocaleMessage: ue2, mergeLocaleMessage: de2, getDateTimeFormat: B2, setDateTimeFormat: fe2, mergeDateTimeFormat: pe2, getNumberFormat: me2, setNumberFormat: he2, mergeNumberFormat: ge2 };
  function ve2(e3) {
    e3.locale.value = l2.value, e3.fallbackLocale.value = u2.value, Object.keys(f2.value).forEach((t2) => {
      e3.mergeLocaleMessage(t2, f2.value[t2]);
    }), Object.keys(p2.value).forEach((t2) => {
      e3.mergeDateTimeFormat(t2, p2.value[t2]);
    }), Object.keys(m2.value).forEach((t2) => {
      e3.mergeNumberFormat(t2, m2.value[t2]);
    }), e3.escapeParameter = w2, e3.fallbackFormat = y2, e3.fallbackRoot = v2, e3.fallbackWarn = _2, e3.missingWarn = g2, e3.warnHtmlMessage = S2;
  }
  return h(() => {
    if (e2.proxy == null || e2.proxy.$i18n == null) throw $(Q.NOT_AVAILABLE_COMPOSITION_IN_LEGACY);
    let t2 = s2.value = e2.proxy.$i18n.__composer;
    n2 === `global` ? (l2.value = t2.locale.value, u2.value = t2.fallbackLocale.value, f2.value = t2.messages.value, p2.value = t2.datetimeFormats.value, m2.value = t2.numberFormats.value) : a2 && ve2(t2);
  }), _e2;
}
var Wr = [`locale`, `fallbackLocale`, `availableLocales`], Gr = [`t`, `rt`, `d`, `n`, `tm`, `te`];
function Kr(e2, t2) {
  let n2 = /* @__PURE__ */ Object.create(null);
  return Wr.forEach((e3) => {
    let r2 = Object.getOwnPropertyDescriptor(t2, e3);
    if (!r2) throw $(Q.UNEXPECTED_ERROR);
    let a2 = i(r2.value) ? { get() {
      return r2.value.value;
    }, set(e4) {
      r2.value.value = e4;
    } } : { get() {
      return r2.get && r2.get();
    } };
    Object.defineProperty(n2, e3, a2);
  }), e2.config.globalProperties.$i18n = n2, Gr.forEach((n3) => {
    let r2 = Object.getOwnPropertyDescriptor(t2, n3);
    if (!r2 || !r2.value) throw $(Q.UNEXPECTED_ERROR);
    Object.defineProperty(e2.config.globalProperties, `$${n3}`, r2);
  }), () => {
    delete e2.config.globalProperties.$i18n, Gr.forEach((t3) => {
      delete e2.config.globalProperties[`$${t3}`];
    });
  };
}
if (Xn(), __INTLIFY_JIT_COMPILATION__ ? an(An) : an(kn), sn(Tt), ln(Yt), __INTLIFY_PROD_DEVTOOLS__) {
  let e2 = k();
  e2.__INTLIFY__ = true, It(e2.__INTLIFY_DEVTOOLS_GLOBAL_HOOK__);
}
export {
  Fr as n,
  Pr as t
};
