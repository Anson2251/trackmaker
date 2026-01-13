function e(e2) {
  for (var t2 = {}, n2 = e2.split(` `), r2 = 0; r2 < n2.length; ++r2) t2[n2[r2]] = true;
  return t2;
}
var t = e(`if elsif else stop require`), n = e(`true false not`);
function r(e2, r2) {
  var s2 = e2.next();
  if (s2 == `/` && e2.eat(`*`)) return r2.tokenize = a, a(e2, r2);
  if (s2 === `#`) return e2.skipToEnd(), `comment`;
  if (s2 == `"`) return r2.tokenize = o(s2), r2.tokenize(e2, r2);
  if (s2 == `(`) return r2._indent.push(`(`), r2._indent.push(`{`), null;
  if (s2 === `{`) return r2._indent.push(`{`), null;
  if (s2 == `)` && (r2._indent.pop(), r2._indent.pop()), s2 === `}`) return r2._indent.pop(), null;
  if (s2 == `,` || s2 == `;` || /[{}\(\),;]/.test(s2)) return null;
  if (/\d/.test(s2)) return e2.eatWhile(/[\d]/), e2.eat(/[KkMmGg]/), `number`;
  if (s2 == `:`) return e2.eatWhile(/[a-zA-Z_]/), e2.eatWhile(/[a-zA-Z0-9_]/), `operator`;
  e2.eatWhile(/\w/);
  var c = e2.current();
  return c == `text` && e2.eat(`:`) ? (r2.tokenize = i, `string`) : t.propertyIsEnumerable(c) ? `keyword` : n.propertyIsEnumerable(c) ? `atom` : null;
}
function i(e2, t2) {
  return t2._multiLineString = true, e2.sol() ? (e2.next() == `.` && e2.eol() && (t2._multiLineString = false, t2.tokenize = r), `string`) : (e2.eatSpace(), e2.peek() == `#` ? (e2.skipToEnd(), `comment`) : (e2.skipToEnd(), `string`));
}
function a(e2, t2) {
  for (var n2 = false, i2; (i2 = e2.next()) != null; ) {
    if (n2 && i2 == `/`) {
      t2.tokenize = r;
      break;
    }
    n2 = i2 == `*`;
  }
  return `comment`;
}
function o(e2) {
  return function(t2, n2) {
    for (var i2 = false, a2; (a2 = t2.next()) != null && !(a2 == e2 && !i2); ) i2 = !i2 && a2 == `\\`;
    return i2 || (n2.tokenize = r), `string`;
  };
}
const s = { name: `sieve`, startState: function(e2) {
  return { tokenize: r, baseIndent: e2 || 0, _indent: [] };
}, token: function(e2, t2) {
  return e2.eatSpace() ? null : (t2.tokenize || r)(e2, t2);
}, indent: function(e2, t2, n2) {
  var r2 = e2._indent.length;
  return t2 && t2[0] == `}` && r2--, r2 < 0 && (r2 = 0), r2 * n2.unit;
}, languageData: { indentOnInput: /^\s*\}$/ } };
export {
  s as sieve
};
