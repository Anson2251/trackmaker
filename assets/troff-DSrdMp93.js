var e = {};
function t(t2) {
  if (t2.eatSpace()) return null;
  var n2 = t2.sol(), r2 = t2.next();
  if (r2 === `\\`) return t2.match(`fB`) || t2.match(`fR`) || t2.match(`fI`) || t2.match(`u`) || t2.match(`d`) || t2.match(`%`) || t2.match(`&`) ? `string` : t2.match(`m[`) ? (t2.skipTo(`]`), t2.next(), `string`) : t2.match(`s+`) || t2.match(`s-`) ? (t2.eatWhile(/[\d-]/), `string`) : ((t2.match(`(`) || t2.match(`*(`)) && t2.eatWhile(/[\w-]/), `string`);
  if (n2 && (r2 === `.` || r2 === `'`) && t2.eat(`\\`) && t2.eat(`"`)) return t2.skipToEnd(), `comment`;
  if (n2 && r2 === `.`) {
    if (t2.match(`B `) || t2.match(`I `) || t2.match(`R `)) return `attribute`;
    if (t2.match(`TH `) || t2.match(`SH `) || t2.match(`SS `) || t2.match(`HP `)) return t2.skipToEnd(), `quote`;
    if (t2.match(/[A-Z]/) && t2.match(/[A-Z]/) || t2.match(/[a-z]/) && t2.match(/[a-z]/)) return `attribute`;
  }
  t2.eatWhile(/[\w-]/);
  var i = t2.current();
  return e.hasOwnProperty(i) ? e[i] : null;
}
function n(e2, n2) {
  return (n2.tokens[0] || t)(e2, n2);
}
const r = { name: `troff`, startState: function() {
  return { tokens: [] };
}, token: function(e2, t2) {
  return n(e2, t2);
} };
export {
  r as troff
};
