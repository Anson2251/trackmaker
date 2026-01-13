function e(e2) {
  for (var t2 = {}, n2 = e2.split(` `), r2 = 0; r2 < n2.length; ++r2) t2[n2[r2]] = true;
  return t2;
}
var t = e(`Assert BackQuote D Defun Deriv For ForEach FromFile FromString Function Integrate InverseTaylor Limit LocalSymbols Macro MacroRule MacroRulePattern NIntegrate Rule RulePattern Subst TD TExplicitSum TSum Taylor Taylor1 Taylor2 Taylor3 ToFile ToStdout ToString TraceRule Until While`), n = `(?:(?:\\.\\d+|\\d+\\.\\d*|\\d+)(?:[eE][+-]?\\d+)?)`, r = `(?:[a-zA-Z\\$'][a-zA-Z0-9\\$']*)`, i = new RegExp(n), a = new RegExp(r), o = RegExp(r + `?_` + r), s = RegExp(r + `\\s*\\(`);
function c(e2, n2) {
  var r2 = e2.next();
  if (r2 === `"`) return n2.tokenize = l, n2.tokenize(e2, n2);
  if (r2 === `/`) {
    if (e2.eat(`*`)) return n2.tokenize = u, n2.tokenize(e2, n2);
    if (e2.eat(`/`)) return e2.skipToEnd(), `comment`;
  }
  e2.backUp(1);
  var c2 = e2.match(/^(\w+)\s*\(/, false);
  c2 !== null && t.hasOwnProperty(c2[1]) && n2.scopes.push(`bodied`);
  var f2 = d(n2);
  if (f2 === `bodied` && r2 === `[` && n2.scopes.pop(), (r2 === `[` || r2 === `{` || r2 === `(`) && n2.scopes.push(r2), f2 = d(n2), (f2 === `[` && r2 === `]` || f2 === `{` && r2 === `}` || f2 === `(` && r2 === `)`) && n2.scopes.pop(), r2 === `;`) for (; f2 === `bodied`; ) n2.scopes.pop(), f2 = d(n2);
  return e2.match(/\d+ *#/, true, false) ? `qualifier` : e2.match(i, true, false) ? `number` : e2.match(o, true, false) ? `variableName.special` : e2.match(/(?:\[|\]|{|}|\(|\))/, true, false) ? `bracket` : e2.match(s, true, false) ? (e2.backUp(1), `variableName.function`) : e2.match(a, true, false) ? `variable` : e2.match(/(?:\\|\+|\-|\*|\/|,|;|\.|:|@|~|=|>|<|&|\||_|`|'|\^|\?|!|%|#)/, true, false) ? `operator` : `error`;
}
function l(e2, t2) {
  for (var n2, r2 = false, i2 = false; (n2 = e2.next()) != null; ) {
    if (n2 === `"` && !i2) {
      r2 = true;
      break;
    }
    i2 = !i2 && n2 === `\\`;
  }
  return r2 && !i2 && (t2.tokenize = c), `string`;
}
function u(e2, t2) {
  for (var n2, r2; (r2 = e2.next()) != null; ) {
    if (n2 === `*` && r2 === `/`) {
      t2.tokenize = c;
      break;
    }
    n2 = r2;
  }
  return `comment`;
}
function d(e2) {
  var t2 = null;
  return e2.scopes.length > 0 && (t2 = e2.scopes[e2.scopes.length - 1]), t2;
}
const f = { name: `yacas`, startState: function() {
  return { tokenize: c, scopes: [] };
}, token: function(e2, t2) {
  return e2.eatSpace() ? null : t2.tokenize(e2, t2);
}, indent: function(e2, t2, n2) {
  if (e2.tokenize !== c && e2.tokenize !== null) return null;
  var r2 = 0;
  return (t2 === `]` || t2 === `];` || t2 === `}` || t2 === `};` || t2 === `);`) && (r2 = -1), (e2.scopes.length + r2) * n2.unit;
}, languageData: { electricInput: /[{}\[\]()\;]/, commentTokens: { line: `//`, block: { open: `/*`, close: `*/` } } } };
export {
  f as yacas
};
