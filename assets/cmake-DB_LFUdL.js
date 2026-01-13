var e = /({)?[a-zA-Z0-9_]+(})?/;
function t(e2, t2) {
  for (var n2, r2, i = false; !e2.eol() && (n2 = e2.next()) != t2.pending; ) {
    if (n2 === `$` && r2 != `\\` && t2.pending == `"`) {
      i = true;
      break;
    }
    r2 = n2;
  }
  return i && e2.backUp(1), n2 == t2.pending ? t2.continueString = false : t2.continueString = true, `string`;
}
function n(n2, r2) {
  var i = n2.next();
  return i === `$` ? n2.match(e) ? `variableName.special` : `variable` : r2.continueString ? (n2.backUp(1), t(n2, r2)) : n2.match(/(\s+)?\w+\(/) || n2.match(/(\s+)?\w+\ \(/) ? (n2.backUp(1), `def`) : i == `#` ? (n2.skipToEnd(), `comment`) : i == `'` || i == `"` ? (r2.pending = i, t(n2, r2)) : i == `(` || i == `)` ? `bracket` : i.match(/[0-9]/) ? `number` : (n2.eatWhile(/[\w-]/), null);
}
const r = { name: `cmake`, startState: function() {
  var e2 = {};
  return e2.inDefinition = false, e2.inInclude = false, e2.continueString = false, e2.pending = false, e2;
}, token: function(e2, t2) {
  return e2.eatSpace() ? null : n(e2, t2);
} };
export {
  r as cmake
};
