const e = { name: `properties`, token: function(e2, t) {
  var n = e2.sol() || t.afterSection, r = e2.eol();
  if (t.afterSection = false, n && (t.nextMultiline ? (t.inMultiline = true, t.nextMultiline = false) : t.position = `def`), r && !t.nextMultiline && (t.inMultiline = false, t.position = `def`), n) for (; e2.eatSpace(); ) ;
  var i = e2.next();
  return n && (i === `#` || i === `!` || i === `;`) ? (t.position = `comment`, e2.skipToEnd(), `comment`) : n && i === `[` ? (t.afterSection = true, e2.skipTo(`]`), e2.eat(`]`), `header`) : i === `=` || i === `:` ? (t.position = `quote`, null) : (i === `\\` && t.position === `quote` && e2.eol() && (t.nextMultiline = true), t.position);
}, startState: function() {
  return { position: `def`, nextMultiline: false, inMultiline: false, afterSection: false };
} };
export {
  e as properties
};
