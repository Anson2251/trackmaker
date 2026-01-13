function e(e2) {
  for (var t2 = {}, n2 = 0; n2 < e2.length; ++n2) t2[e2[n2]] = true;
  return t2;
}
var t = [`NULL`, `NA`, `Inf`, `NaN`, `NA_integer_`, `NA_real_`, `NA_complex_`, `NA_character_`, `TRUE`, `FALSE`], n = [`list`, `quote`, `bquote`, `eval`, `return`, `call`, `parse`, `deparse`], r = [`if`, `else`, `repeat`, `while`, `function`, `for`, `in`, `next`, `break`], i = [`if`, `else`, `repeat`, `while`, `function`, `for`], a = e(t), o = e(n), s = e(r), c = e(i), l = /[+\-*\/^<>=!&|~$:]/, u;
function d(e2, t2) {
  u = null;
  var n2 = e2.next();
  if (n2 == `#`) return e2.skipToEnd(), `comment`;
  if (n2 == `0` && e2.eat(`x`)) return e2.eatWhile(/[\da-f]/i), `number`;
  if (n2 == `.` && e2.eat(/\d/)) return e2.match(/\d*(?:e[+\-]?\d+)?/), `number`;
  if (/\d/.test(n2)) return e2.match(/\d*(?:\.\d+)?(?:e[+\-]\d+)?L?/), `number`;
  if (n2 == `'` || n2 == `"`) return t2.tokenize = f(n2), `string`;
  if (n2 == "`") return e2.match(/[^`]+`/), `string.special`;
  if (n2 == `.` && e2.match(/.(?:[.]|\d+)/)) return `keyword`;
  if (/[a-zA-Z\.]/.test(n2)) {
    e2.eatWhile(/[\w\.]/);
    var r2 = e2.current();
    return a.propertyIsEnumerable(r2) ? `atom` : s.propertyIsEnumerable(r2) ? (c.propertyIsEnumerable(r2) && !e2.match(/\s*if(\s+|$)/, false) && (u = `block`), `keyword`) : o.propertyIsEnumerable(r2) ? `builtin` : `variable`;
  } else if (n2 == `%`) return e2.skipTo(`%`) && e2.next(), `variableName.special`;
  else if (n2 == `<` && e2.eat(`-`) || n2 == `<` && e2.match(`<-`) || n2 == `-` && e2.match(/>>?/)) return `operator`;
  else if (n2 == `=` && t2.ctx.argList) return `operator`;
  else if (l.test(n2)) return n2 == `$` || e2.eatWhile(l), `operator`;
  else if (/[\(\){}\[\];]/.test(n2)) return u = n2, n2 == `;` ? `punctuation` : null;
  else return null;
}
function f(e2) {
  return function(t2, n2) {
    if (t2.eat(`\\`)) {
      var r2 = t2.next();
      return r2 == `x` ? t2.match(/^[a-f0-9]{2}/i) : (r2 == `u` || r2 == `U`) && t2.eat(`{`) && t2.skipTo(`}`) ? t2.next() : r2 == `u` ? t2.match(/^[a-f0-9]{4}/i) : r2 == `U` ? t2.match(/^[a-f0-9]{8}/i) : /[0-7]/.test(r2) && t2.match(/^[0-7]{1,2}/), `string.special`;
    } else {
      for (var i2; (i2 = t2.next()) != null; ) {
        if (i2 == e2) {
          n2.tokenize = d;
          break;
        }
        if (i2 == `\\`) {
          t2.backUp(1);
          break;
        }
      }
      return `string`;
    }
  };
}
var p = 1, m = 2, h = 4;
function g(e2, t2, n2) {
  e2.ctx = { type: t2, indent: e2.indent, flags: 0, column: n2.column(), prev: e2.ctx };
}
function _(e2, t2) {
  var n2 = e2.ctx;
  e2.ctx = { type: n2.type, indent: n2.indent, flags: n2.flags | t2, column: n2.column, prev: n2.prev };
}
function v(e2) {
  e2.indent = e2.ctx.indent, e2.ctx = e2.ctx.prev;
}
const y = { name: `r`, startState: function(e2) {
  return { tokenize: d, ctx: { type: `top`, indent: -e2, flags: m }, indent: 0, afterIdent: false };
}, token: function(e2, t2) {
  if (e2.sol() && (t2.ctx.flags & 3 || (t2.ctx.flags |= m), t2.ctx.flags & h && v(t2), t2.indent = e2.indentation()), e2.eatSpace()) return null;
  var n2 = t2.tokenize(e2, t2);
  return n2 != `comment` && (t2.ctx.flags & m) == 0 && _(t2, p), (u == `;` || u == `{` || u == `}`) && t2.ctx.type == `block` && v(t2), u == `{` ? g(t2, `}`, e2) : u == `(` ? (g(t2, `)`, e2), t2.afterIdent && (t2.ctx.argList = true)) : u == `[` ? g(t2, `]`, e2) : u == `block` ? g(t2, `block`, e2) : u == t2.ctx.type ? v(t2) : t2.ctx.type == `block` && n2 != `comment` && _(t2, h), t2.afterIdent = n2 == `variable` || n2 == `keyword`, n2;
}, indent: function(e2, t2, n2) {
  if (e2.tokenize != d) return 0;
  var r2 = t2 && t2.charAt(0), i2 = e2.ctx, a2 = r2 == i2.type;
  return i2.flags & h && (i2 = i2.prev), i2.type == `block` ? i2.indent + (r2 == `{` ? 0 : n2.unit) : i2.flags & p ? i2.column + (a2 ? 0 : 1) : i2.indent + (a2 ? 0 : n2.unit);
}, languageData: { wordChars: `.`, commentTokens: { line: `#` }, autocomplete: t.concat(n, r) } };
export {
  y as r
};
