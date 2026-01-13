function e(e2) {
  return { type: e2, style: `keyword` };
}
var t = e(`keyword a`), n = e(`keyword b`), r = e(`keyword c`), i = e(`operator`), a = { type: `atom`, style: `atom` }, o = { type: `attribute`, style: `attribute` }, s = e(`typedef`), c = { if: t, while: t, else: n, do: n, try: n, return: r, break: r, continue: r, new: r, throw: r, var: e(`var`), inline: o, static: o, using: e(`import`), public: o, private: o, cast: e(`cast`), import: e(`import`), macro: e(`macro`), function: e(`function`), catch: e(`catch`), untyped: e(`untyped`), callback: e(`cb`), for: e(`for`), switch: e(`switch`), case: e(`case`), default: e(`default`), in: i, never: e(`property_access`), trace: e(`trace`), class: s, abstract: s, enum: s, interface: s, typedef: s, extends: s, implements: s, dynamic: s, true: a, false: a, null: a }, l = /[+\-*&%=<>!?|]/;
function u(e2, t2, n2) {
  return t2.tokenize = n2, n2(e2, t2);
}
function d(e2, t2) {
  for (var n2 = false, r2; (r2 = e2.next()) != null; ) {
    if (r2 == t2 && !n2) return true;
    n2 = !n2 && r2 == `\\`;
  }
}
var s, f;
function p(e2, t2, n2) {
  return s = e2, f = n2, t2;
}
function m(e2, t2) {
  var n2 = e2.next();
  if (n2 == `"` || n2 == `'`) return u(e2, t2, ee(n2));
  if (/[\[\]{}\(\),;\:\.]/.test(n2)) return p(n2);
  if (n2 == `0` && e2.eat(/x/i)) return e2.eatWhile(/[\da-f]/i), p(`number`, `number`);
  if (/\d/.test(n2) || n2 == `-` && e2.eat(/\d/)) return e2.match(/^\d*(?:\.\d*(?!\.))?(?:[eE][+\-]?\d+)?/), p(`number`, `number`);
  if (t2.reAllowed && n2 == `~` && e2.eat(/\//)) return d(e2, `/`), e2.eatWhile(/[gimsu]/), p(`regexp`, `string.special`);
  if (n2 == `/`) return e2.eat(`*`) ? u(e2, t2, h) : e2.eat(`/`) ? (e2.skipToEnd(), p(`comment`, `comment`)) : (e2.eatWhile(l), p(`operator`, null, e2.current()));
  if (n2 == `#`) return e2.skipToEnd(), p(`conditional`, `meta`);
  if (n2 == `@`) return e2.eat(/:/), e2.eatWhile(/[\w_]/), p(`metadata`, `meta`);
  if (l.test(n2)) return e2.eatWhile(l), p(`operator`, null, e2.current());
  var r2;
  if (/[A-Z]/.test(n2)) return e2.eatWhile(/[\w_<>]/), r2 = e2.current(), p(`type`, `type`, r2);
  e2.eatWhile(/[\w_]/);
  var r2 = e2.current(), i2 = c.propertyIsEnumerable(r2) && c[r2];
  return i2 && t2.kwAllowed ? p(i2.type, i2.style, r2) : p(`variable`, `variable`, r2);
}
function ee(e2) {
  return function(t2, n2) {
    return d(t2, e2) && (n2.tokenize = m), p(`string`, `string`);
  };
}
function h(e2, t2) {
  for (var n2 = false, r2; r2 = e2.next(); ) {
    if (r2 == `/` && n2) {
      t2.tokenize = m;
      break;
    }
    n2 = r2 == `*`;
  }
  return p(`comment`, `comment`);
}
var g = { atom: true, number: true, variable: true, string: true, regexp: true };
function _(e2, t2, n2, r2, i2, a2) {
  this.indented = e2, this.column = t2, this.type = n2, this.prev = i2, this.info = a2, r2 != null && (this.align = r2);
}
function v(e2, t2) {
  for (var n2 = e2.localVars; n2; n2 = n2.next) if (n2.name == t2) return true;
}
function y(e2, t2, n2, r2, i2) {
  var a2 = e2.cc;
  for (S.state = e2, S.stream = i2, S.marked = null, S.cc = a2, e2.lexical.hasOwnProperty(`align`) || (e2.lexical.align = true); ; ) if ((a2.length ? a2.pop() : N)(n2, r2)) {
    for (; a2.length && a2[a2.length - 1].lex; ) a2.pop()();
    return S.marked ? S.marked : n2 == `variable` && v(e2, r2) ? `variableName.local` : n2 == `variable` && b(e2, r2) ? `variableName.special` : t2;
  }
}
function b(e2, t2) {
  if (/[a-z]/.test(t2.charAt(0))) return false;
  for (var n2 = e2.importedtypes.length, r2 = 0; r2 < n2; r2++) if (e2.importedtypes[r2] == t2) return true;
}
function x(e2) {
  for (var t2 = S.state, n2 = t2.importedtypes; n2; n2 = n2.next) if (n2.name == e2) return;
  t2.importedtypes = { name: e2, next: t2.importedtypes };
}
var S = { state: null, column: null, marked: null, cc: null };
function C() {
  for (var e2 = arguments.length - 1; e2 >= 0; e2--) S.cc.push(arguments[e2]);
}
function w() {
  return C.apply(null, arguments), true;
}
function T(e2, t2) {
  for (var n2 = t2; n2; n2 = n2.next) if (n2.name == e2) return true;
  return false;
}
function E(e2) {
  var t2 = S.state;
  if (t2.context) {
    if (S.marked = `def`, T(e2, t2.localVars)) return;
    t2.localVars = { name: e2, next: t2.localVars };
  } else if (t2.globalVars) {
    if (T(e2, t2.globalVars)) return;
    t2.globalVars = { name: e2, next: t2.globalVars };
  }
}
var D = { name: `this`, next: null };
function O() {
  S.state.context || (S.state.localVars = D), S.state.context = { prev: S.state.context, vars: S.state.localVars };
}
function k() {
  S.state.localVars = S.state.context.vars, S.state.context = S.state.context.prev;
}
k.lex = true;
function A(e2, t2) {
  var n2 = function() {
    var n3 = S.state;
    n3.lexical = new _(n3.indented, S.stream.column(), e2, null, n3.lexical, t2);
  };
  return n2.lex = true, n2;
}
function j() {
  var e2 = S.state;
  e2.lexical.prev && (e2.lexical.type == `)` && (e2.indented = e2.lexical.indented), e2.lexical = e2.lexical.prev);
}
j.lex = true;
function M(e2) {
  function t2(n2) {
    return n2 == e2 ? w() : e2 == `;` ? C() : w(t2);
  }
  return t2;
}
function N(e2) {
  return e2 == `@` ? w(R) : e2 == `var` ? w(A(`vardef`), q, M(`;`), j) : e2 == `keyword a` ? w(A(`form`), P, N, j) : e2 == `keyword b` ? w(A(`form`), N, j) : e2 == `{` ? w(A(`}`), O, K, j, k) : e2 == `;` ? w() : e2 == `attribute` ? w(L) : e2 == `function` ? w(Z) : e2 == `for` ? w(A(`form`), M(`(`), A(`)`), Y, M(`)`), j, N, j) : e2 == `variable` ? w(A(`stat`), H) : e2 == `switch` ? w(A(`form`), P, A(`}`, `switch`), M(`{`), K, j, j) : e2 == `case` ? w(P, M(`:`)) : e2 == `default` ? w(M(`:`)) : e2 == `catch` ? w(A(`form`), O, M(`(`), $, M(`)`), N, j, k) : e2 == `import` ? w(B, M(`;`)) : e2 == `typedef` ? w(V) : C(A(`stat`), P, M(`;`), j);
}
function P(e2) {
  return g.hasOwnProperty(e2) || e2 == `type` ? w(I) : e2 == `function` ? w(Z) : e2 == `keyword c` ? w(F) : e2 == `(` ? w(A(`)`), F, M(`)`), j, I) : e2 == `operator` ? w(P) : e2 == `[` ? w(A(`]`), G(F, `]`), j, I) : e2 == `{` ? w(A(`}`), G(W, `}`), j, I) : w();
}
function F(e2) {
  return e2.match(/[;\}\)\],]/) ? C() : C(P);
}
function I(e2, t2) {
  if (e2 == `operator` && /\+\+|--/.test(t2)) return w(I);
  if (e2 == `operator` || e2 == `:`) return w(P);
  if (e2 != `;`) {
    if (e2 == `(`) return w(A(`)`), G(P, `)`), j, I);
    if (e2 == `.`) return w(U, I);
    if (e2 == `[`) return w(A(`]`), P, M(`]`), j, I);
  }
}
function L(e2) {
  if (e2 == `attribute`) return w(L);
  if (e2 == `function`) return w(Z);
  if (e2 == `var`) return w(q);
}
function R(e2) {
  if (e2 == `:` || e2 == `variable`) return w(R);
  if (e2 == `(`) return w(A(`)`), G(z, `)`), j, N);
}
function z(e2) {
  if (e2 == `variable`) return w();
}
function B(e2, t2) {
  if (e2 == `variable` && /[A-Z]/.test(t2.charAt(0))) return x(t2), w();
  if (e2 == `variable` || e2 == `property` || e2 == `.` || t2 == `*`) return w(B);
}
function V(e2, t2) {
  if (e2 == `variable` && /[A-Z]/.test(t2.charAt(0))) return x(t2), w();
  if (e2 == `type` && /[A-Z]/.test(t2.charAt(0))) return w();
}
function H(e2) {
  return e2 == `:` ? w(j, N) : C(I, M(`;`), j);
}
function U(e2) {
  if (e2 == `variable`) return S.marked = `property`, w();
}
function W(e2) {
  if (e2 == `variable` && (S.marked = `property`), g.hasOwnProperty(e2)) return w(M(`:`), P);
}
function G(e2, t2) {
  function n2(r2) {
    return r2 == `,` ? w(e2, n2) : r2 == t2 ? w() : w(M(t2));
  }
  return function(r2) {
    return r2 == t2 ? w() : C(e2, n2);
  };
}
function K(e2) {
  return e2 == `}` ? w() : C(N, K);
}
function q(e2, t2) {
  return e2 == `variable` ? (E(t2), w(Q, J)) : w();
}
function J(e2, t2) {
  if (t2 == `=`) return w(P, J);
  if (e2 == `,`) return w(q);
}
function Y(e2, t2) {
  return e2 == `variable` ? (E(t2), w(X, P)) : C();
}
function X(e2, t2) {
  if (t2 == `in`) return w();
}
function Z(e2, t2) {
  if (e2 == `variable` || e2 == `type`) return E(t2), w(Z);
  if (t2 == `new`) return w(Z);
  if (e2 == `(`) return w(A(`)`), O, G($, `)`), j, Q, N, k);
}
function Q(e2) {
  if (e2 == `:`) return w(te);
}
function te(e2) {
  if (e2 == `type` || e2 == `variable`) return w();
  if (e2 == `{`) return w(A(`}`), G(ne, `}`), j);
}
function ne(e2) {
  if (e2 == `variable`) return w(Q);
}
function $(e2, t2) {
  if (e2 == `variable`) return E(t2), w(Q);
}
const re = { name: `haxe`, startState: function(e2) {
  return { tokenize: m, reAllowed: true, kwAllowed: true, cc: [], lexical: new _(-e2, 0, `block`, false), importedtypes: [`Int`, `Float`, `String`, `Void`, `Std`, `Bool`, `Dynamic`, `Array`], context: null, indented: 0 };
}, token: function(e2, t2) {
  if (e2.sol() && (t2.lexical.hasOwnProperty(`align`) || (t2.lexical.align = false), t2.indented = e2.indentation()), e2.eatSpace()) return null;
  var n2 = t2.tokenize(e2, t2);
  return s == `comment` ? n2 : (t2.reAllowed = !!(s == `operator` || s == `keyword c` || s.match(/^[\[{}\(,;:]$/)), t2.kwAllowed = s != `.`, y(t2, n2, s, f, e2));
}, indent: function(e2, t2, n2) {
  if (e2.tokenize != m) return 0;
  var r2 = t2 && t2.charAt(0), i2 = e2.lexical;
  i2.type == `stat` && r2 == `}` && (i2 = i2.prev);
  var a2 = i2.type, o2 = r2 == a2;
  return a2 == `vardef` ? i2.indented + 4 : a2 == `form` && r2 == `{` ? i2.indented : a2 == `stat` || a2 == `form` ? i2.indented + n2.unit : i2.info == `switch` && !o2 ? i2.indented + (/^(?:case|default)\b/.test(t2) ? n2.unit : 2 * n2.unit) : i2.align ? i2.column + (o2 ? 0 : 1) : i2.indented + (o2 ? 0 : n2.unit);
}, languageData: { indentOnInput: /^\s*[{}]$/, commentTokens: { line: `//`, block: { open: `/*`, close: `*/` } } } }, ie = { name: `hxml`, startState: function() {
  return { define: false, inString: false };
}, token: function(e2, t2) {
  var n2 = e2.peek(), r2 = e2.sol();
  if (n2 == `#`) return e2.skipToEnd(), `comment`;
  if (r2 && n2 == `-`) {
    var i2 = `variable-2`;
    return e2.eat(/-/), e2.peek() == `-` && (e2.eat(/-/), i2 = `keyword a`), e2.peek() == `D` && (e2.eat(/[D]/), i2 = `keyword c`, t2.define = true), e2.eatWhile(/[A-Z]/i), i2;
  }
  var n2 = e2.peek();
  return t2.inString == 0 && n2 == `'` && (t2.inString = true, e2.next()), t2.inString == 1 ? (e2.skipTo(`'`) || e2.skipToEnd(), e2.peek() == `'` && (e2.next(), t2.inString = false), `string`) : (e2.next(), null);
}, languageData: { commentTokens: { line: `#` } } };
export {
  re as haxe,
  ie as hxml
};
