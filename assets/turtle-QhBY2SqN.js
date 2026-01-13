var e;
function t(e2) {
  return RegExp(`^(?:` + e2.join(`|`) + `)$`, `i`);
}
t([]);
var n = t([`@prefix`, `@base`, `a`]), r = /[*+\-<>=&|]/;
function i(t2, i2) {
  var o2 = t2.next();
  if (e = null, o2 == `<` && !t2.match(/^[\s\u00a0=]/, false)) return t2.match(/^[^\s\u00a0>]*>?/), `atom`;
  if (o2 == `"` || o2 == `'`) return i2.tokenize = a(o2), i2.tokenize(t2, i2);
  if (/[{}\(\),\.;\[\]]/.test(o2)) return e = o2, null;
  if (o2 == `#`) return t2.skipToEnd(), `comment`;
  if (r.test(o2)) return t2.eatWhile(r), null;
  if (o2 == `:`) return `operator`;
  if (t2.eatWhile(/[_\w\d]/), t2.peek() == `:`) return `variableName.special`;
  var s2 = t2.current();
  return n.test(s2) ? `meta` : o2 >= `A` && o2 <= `Z` ? `comment` : `keyword`;
  var s2;
}
function a(e2) {
  return function(t2, n2) {
    for (var r2 = false, a2; (a2 = t2.next()) != null; ) {
      if (a2 == e2 && !r2) {
        n2.tokenize = i;
        break;
      }
      r2 = !r2 && a2 == `\\`;
    }
    return `string`;
  };
}
function o(e2, t2, n2) {
  e2.context = { prev: e2.context, indent: e2.indent, col: n2, type: t2 };
}
function s(e2) {
  e2.indent = e2.context.indent, e2.context = e2.context.prev;
}
const c = { name: `turtle`, startState: function() {
  return { tokenize: i, context: null, indent: 0, col: 0 };
}, token: function(t2, n2) {
  if (t2.sol() && (n2.context && n2.context.align == null && (n2.context.align = false), n2.indent = t2.indentation()), t2.eatSpace()) return null;
  var r2 = n2.tokenize(t2, n2);
  if (r2 != `comment` && n2.context && n2.context.align == null && n2.context.type != `pattern` && (n2.context.align = true), e == `(`) o(n2, `)`, t2.column());
  else if (e == `[`) o(n2, `]`, t2.column());
  else if (e == `{`) o(n2, `}`, t2.column());
  else if (/[\]\}\)]/.test(e)) {
    for (; n2.context && n2.context.type == `pattern`; ) s(n2);
    n2.context && e == n2.context.type && s(n2);
  } else e == `.` && n2.context && n2.context.type == `pattern` ? s(n2) : /atom|string|variable/.test(r2) && n2.context && (/[\}\]]/.test(n2.context.type) ? o(n2, `pattern`, t2.column()) : n2.context.type == `pattern` && !n2.context.align && (n2.context.align = true, n2.context.col = t2.column()));
  return r2;
}, indent: function(e2, t2, n2) {
  var r2 = t2 && t2.charAt(0), i2 = e2.context;
  if (/[\]\}]/.test(r2)) for (; i2 && i2.type == `pattern`; ) i2 = i2.prev;
  var a2 = i2 && r2 == i2.type;
  return i2 ? i2.type == `pattern` ? i2.col : i2.align ? i2.col + (a2 ? 0 : 1) : i2.indent + (a2 ? 0 : n2.unit) : 0;
}, languageData: { commentTokens: { line: `#` } } };
export {
  c as turtle
};
