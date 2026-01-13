function e(e2, t2, n2) {
  return n2 === void 0 && (n2 = ``), t2 === void 0 && (t2 = `\\b`), RegExp(`^` + n2 + `((` + e2.join(`)|(`) + `))` + t2);
}
var t = `\\\\[0-7]{1,3}`, n = `\\\\x[A-Fa-f0-9]{1,2}`, r = `\\\\[abefnrtv0%?'"\\\\]`, i = `([^\\u0027\\u005C\\uD800-\\uDFFF]|[\\uD800-\\uDFFF][\\uDC00-\\uDFFF])`, a = [`[<>]:`, `[<>=]=`, `<<=?`, `>>>?=?`, `=>`, `--?>`, `<--[->]?`, `\\/\\/`, `\\.{2,3}`, `[\\.\\\\%*+\\-<>!\\/^|&]=?`, `\\?`, `\\$`, `~`, `:`], o = e(`[<>]:,[<>=]=,[!=]==,<<=?,>>>?=?,=>?,--?>,<--[->]?,\\/\\/,[\\\\%*+\\-<>!\\/^|&\\u00F7\\u22BB]=?,\\?,\\$,~,:,\\u00D7,\\u2208,\\u2209,\\u220B,\\u220C,\\u2218,\\u221A,\\u221B,\\u2229,\\u222A,\\u2260,\\u2264,\\u2265,\\u2286,\\u2288,\\u228A,\\u22C5,\\b(in|isa)\\b(?!.?\\()`.split(`,`), ``), s = /^[;,()[\]{}]/, c = /^[_A-Za-z\u00A1-\u2217\u2219-\uFFFF][\w\u00A1-\u2217\u2219-\uFFFF]*!*/, l = e([t, n, r, i], `'`), u = [`begin`, `function`, `type`, `struct`, `immutable`, `let`, `macro`, `for`, `while`, `quote`, `if`, `else`, `elseif`, `try`, `finally`, `catch`, `do`], d = [`end`, `else`, `elseif`, `catch`, `finally`], f = `if.else.elseif.while.for.begin.let.end.do.try.catch.finally.return.break.continue.global.local.const.export.import.importall.using.function.where.macro.module.baremodule.struct.type.mutable.immutable.quote.typealias.abstract.primitive.bitstype`.split(`.`), p = [`true`, `false`, `nothing`, `NaN`, `Inf`], m = e(u), h = e(d), g = e(f), _ = e(p), v = /^@[_A-Za-z\u00A1-\uFFFF][\w\u00A1-\uFFFF]*!*/, y = /^:[_A-Za-z\u00A1-\uFFFF][\w\u00A1-\uFFFF]*!*/, b = /^(`|([_A-Za-z\u00A1-\uFFFF]*"("")?))/, x = e(a, ``, `@`), S = e(a, ``, `:`);
function C(e2) {
  return e2.nestedArrays > 0;
}
function w(e2) {
  return e2.nestedGenerators > 0;
}
function T(e2, t2) {
  return t2 === void 0 && (t2 = 0), e2.scopes.length <= t2 ? null : e2.scopes[e2.scopes.length - (t2 + 1)];
}
function E(e2, t2) {
  if (e2.match(`#=`, false)) return t2.tokenize = O, t2.tokenize(e2, t2);
  var n2 = t2.leavingExpr;
  if (e2.sol() && (n2 = false), t2.leavingExpr = false, n2 && e2.match(/^'+/)) return `operator`;
  if (e2.match(/\.{4,}/)) return `error`;
  if (e2.match(/\.{1,3}/)) return `operator`;
  if (e2.eatSpace()) return null;
  var r2 = e2.peek();
  if (r2 === `#`) return e2.skipToEnd(), `comment`;
  if (r2 === `[` && (t2.scopes.push(`[`), t2.nestedArrays++), r2 === `(` && (t2.scopes.push(`(`), t2.nestedGenerators++), C(t2) && r2 === `]`) {
    for (; t2.scopes.length && T(t2) !== `[`; ) t2.scopes.pop();
    t2.scopes.pop(), t2.nestedArrays--, t2.leavingExpr = true;
  }
  if (w(t2) && r2 === `)`) {
    for (; t2.scopes.length && T(t2) !== `(`; ) t2.scopes.pop();
    t2.scopes.pop(), t2.nestedGenerators--, t2.leavingExpr = true;
  }
  if (C(t2)) {
    if (t2.lastToken == `end` && e2.match(`:`)) return `operator`;
    if (e2.match(`end`)) return `number`;
  }
  var i2;
  if ((i2 = e2.match(m, false)) && t2.scopes.push(i2[0]), e2.match(h, false) && t2.scopes.pop(), e2.match(/^::(?![:\$])/)) return t2.tokenize = D, t2.tokenize(e2, t2);
  if (!n2 && (e2.match(y) || e2.match(S))) return `builtin`;
  if (e2.match(o)) return `operator`;
  if (e2.match(/^\.?\d/, false)) {
    var a2 = RegExp(/^im\b/), l2 = false;
    if (e2.match(/^0x\.[0-9a-f_]+p[\+\-]?[_\d]+/i) && (l2 = true), e2.match(/^0x[0-9a-f_]+/i) && (l2 = true), e2.match(/^0b[01_]+/i) && (l2 = true), e2.match(/^0o[0-7_]+/i) && (l2 = true), e2.match(/^(?:(?:\d[_\d]*)?\.(?!\.)(?:\d[_\d]*)?|\d[_\d]*\.(?!\.)(?:\d[_\d]*))?([Eef][\+\-]?[_\d]+)?/i) && (l2 = true), e2.match(/^\d[_\d]*(e[\+\-]?\d+)?/i) && (l2 = true), l2) return e2.match(a2), t2.leavingExpr = true, `number`;
  }
  if (e2.match(`'`)) return t2.tokenize = k, t2.tokenize(e2, t2);
  if (e2.match(b)) return t2.tokenize = A(e2.current()), t2.tokenize(e2, t2);
  if (e2.match(v) || e2.match(x)) return `meta`;
  if (e2.match(s)) return null;
  if (e2.match(g)) return `keyword`;
  if (e2.match(_)) return `builtin`;
  var u2 = t2.isDefinition || t2.lastToken == `function` || t2.lastToken == `macro` || t2.lastToken == `type` || t2.lastToken == `struct` || t2.lastToken == `immutable`;
  return e2.match(c) ? u2 ? e2.peek() === `.` ? (t2.isDefinition = true, `variable`) : (t2.isDefinition = false, `def`) : (t2.leavingExpr = true, `variable`) : (e2.next(), `error`);
}
function D(e2, t2) {
  return e2.match(/.*?(?=[,;{}()=\s]|$)/), e2.match(`{`) ? t2.nestedParameters++ : e2.match(`}`) && t2.nestedParameters > 0 && t2.nestedParameters--, t2.nestedParameters > 0 ? e2.match(/.*?(?={|})/) || e2.next() : t2.nestedParameters == 0 && (t2.tokenize = E), `builtin`;
}
function O(e2, t2) {
  return e2.match(`#=`) && t2.nestedComments++, e2.match(/.*?(?=(#=|=#))/) || e2.skipToEnd(), e2.match(`=#`) && (t2.nestedComments--, t2.nestedComments == 0 && (t2.tokenize = E)), `comment`;
}
function k(e2, t2) {
  var n2 = false, r2;
  if (e2.match(l)) n2 = true;
  else if (r2 = e2.match(/\\u([a-f0-9]{1,4})(?=')/i)) {
    var i2 = parseInt(r2[1], 16);
    (i2 <= 55295 || i2 >= 57344) && (n2 = true, e2.next());
  } else if (r2 = e2.match(/\\U([A-Fa-f0-9]{5,8})(?=')/)) {
    var i2 = parseInt(r2[1], 16);
    i2 <= 1114111 && (n2 = true, e2.next());
  }
  return n2 ? (t2.leavingExpr = true, t2.tokenize = E, `string`) : (e2.match(/^[^']+(?=')/) || e2.skipToEnd(), e2.match(`'`) && (t2.tokenize = E), `error`);
}
function A(e2) {
  e2.substr(-3) === `"""` ? e2 = `"""` : e2.substr(-1) === `"` && (e2 = `"`);
  function t2(t3, n2) {
    if (t3.eat(`\\`)) t3.next();
    else if (t3.match(e2)) return n2.tokenize = E, n2.leavingExpr = true, `string`;
    else t3.eat(/[`"]/);
    return t3.eatWhile(/[^\\`"]/), `string`;
  }
  return t2;
}
const j = { name: `julia`, startState: function() {
  return { tokenize: E, scopes: [], lastToken: null, leavingExpr: false, isDefinition: false, nestedArrays: 0, nestedComments: 0, nestedGenerators: 0, nestedParameters: 0, firstParenPos: -1 };
}, token: function(e2, t2) {
  var n2 = t2.tokenize(e2, t2), r2 = e2.current();
  return r2 && n2 && (t2.lastToken = r2), n2;
}, indent: function(e2, t2, n2) {
  var r2 = 0;
  return (t2 === `]` || t2 === `)` || /^end\b/.test(t2) || /^else/.test(t2) || /^catch\b/.test(t2) || /^elseif\b/.test(t2) || /^finally/.test(t2)) && (r2 = -1), (e2.scopes.length + r2) * n2.unit;
}, languageData: { indentOnInput: /^\s*(end|else|catch|finally)\b$/, commentTokens: { line: `#`, block: { open: `#=`, close: `=#` } }, closeBrackets: { brackets: [`(`, `[`, `{`, `"`] }, autocomplete: f.concat(p) } };
export {
  j as julia
};
