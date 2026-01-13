function e(e2) {
  return RegExp(`^((` + e2.join(`)|(`) + `))\\b`);
}
var t = /[\^@!\|<>#~\.\*\-\+\\/,=]/, n = /(<-)|(:=)|(=<)|(>=)|(<=)|(<:)|(>:)|(=:)|(\\=)|(\\=:)|(!!)|(==)|(::)/, r = /(:::)|(\.\.\.)|(=<:)|(>=:)/, i = [`in`, `then`, `else`, `of`, `elseof`, `elsecase`, `elseif`, `catch`, `finally`, `with`, `require`, `prepare`, `import`, `export`, `define`, `do`], a = [`end`], o = e([`true`, `false`, `nil`, `unit`]), s = e([`andthen`, `at`, `attr`, `declare`, `feat`, `from`, `lex`, `mod`, `div`, `mode`, `orelse`, `parser`, `prod`, `prop`, `scanner`, `self`, `syn`, `token`]), c = e([`local`, `proc`, `fun`, `case`, `class`, `if`, `cond`, `or`, `dis`, `choice`, `not`, `thread`, `try`, `raise`, `lock`, `for`, `suchthat`, `meth`, `functor`]), l = e(i), u = e(a);
function d(e2, i2) {
  if (e2.eatSpace()) return null;
  if (e2.match(/[{}]/)) return `bracket`;
  if (e2.match(`[]`)) return `keyword`;
  if (e2.match(r) || e2.match(n)) return `operator`;
  if (e2.match(o)) return `atom`;
  var a2 = e2.match(c);
  if (a2) return i2.doInCurrentLine ? i2.doInCurrentLine = false : i2.currentIndent++, a2[0] == `proc` || a2[0] == `fun` ? i2.tokenize = m : a2[0] == `class` ? i2.tokenize = f : a2[0] == `meth` && (i2.tokenize = p), `keyword`;
  if (e2.match(l) || e2.match(s)) return `keyword`;
  if (e2.match(u)) return i2.currentIndent--, `keyword`;
  var d2 = e2.next();
  if (d2 == `"` || d2 == `'`) return i2.tokenize = g(d2), i2.tokenize(e2, i2);
  if (/[~\d]/.test(d2)) {
    if (d2 == `~`) if (/^[0-9]/.test(e2.peek())) {
      if (e2.next() == `0` && e2.match(/^[xX][0-9a-fA-F]+/) || e2.match(/^[0-9]*(\.[0-9]+)?([eE][~+]?[0-9]+)?/)) return `number`;
    } else return null;
    return d2 == `0` && e2.match(/^[xX][0-9a-fA-F]+/) || e2.match(/^[0-9]*(\.[0-9]+)?([eE][~+]?[0-9]+)?/) ? `number` : null;
  }
  return d2 == `%` ? (e2.skipToEnd(), `comment`) : d2 == `/` && e2.eat(`*`) ? (i2.tokenize = h, h(e2, i2)) : t.test(d2) ? `operator` : (e2.eatWhile(/\w/), `variable`);
}
function f(e2, t2) {
  return e2.eatSpace() ? null : (e2.match(/([A-Z][A-Za-z0-9_]*)|(`.+`)/), t2.tokenize = d, `type`);
}
function p(e2, t2) {
  return e2.eatSpace() ? null : (e2.match(/([a-zA-Z][A-Za-z0-9_]*)|(`.+`)/), t2.tokenize = d, `def`);
}
function m(e2, t2) {
  return e2.eatSpace() ? null : !t2.hasPassedFirstStage && e2.eat(`{`) ? (t2.hasPassedFirstStage = true, `bracket`) : t2.hasPassedFirstStage ? (e2.match(/([A-Z][A-Za-z0-9_]*)|(`.+`)|\$/), t2.hasPassedFirstStage = false, t2.tokenize = d, `def`) : (t2.tokenize = d, null);
}
function h(e2, t2) {
  for (var n2 = false, r2; r2 = e2.next(); ) {
    if (r2 == `/` && n2) {
      t2.tokenize = d;
      break;
    }
    n2 = r2 == `*`;
  }
  return `comment`;
}
function g(e2) {
  return function(t2, n2) {
    for (var r2 = false, i2, a2 = false; (i2 = t2.next()) != null; ) {
      if (i2 == e2 && !r2) {
        a2 = true;
        break;
      }
      r2 = !r2 && i2 == `\\`;
    }
    return (a2 || !r2) && (n2.tokenize = d), `string`;
  };
}
function _() {
  var e2 = i.concat(a);
  return RegExp(`[\\[\\]]|(` + e2.join(`|`) + `)$`);
}
const v = { name: `oz`, startState: function() {
  return { tokenize: d, currentIndent: 0, doInCurrentLine: false, hasPassedFirstStage: false };
}, token: function(e2, t2) {
  return e2.sol() && (t2.doInCurrentLine = 0), t2.tokenize(e2, t2);
}, indent: function(e2, t2, n2) {
  var r2 = t2.replace(/^\s+|\s+$/g, ``);
  return r2.match(u) || r2.match(l) || r2.match(/(\[])/) ? n2.unit * (e2.currentIndent - 1) : e2.currentIndent < 0 ? 0 : e2.currentIndent * n2.unit;
}, languageData: { indentOnInut: _(), commentTokens: { line: `%`, block: { open: `/*`, close: `*/` } } } };
export {
  v as oz
};
