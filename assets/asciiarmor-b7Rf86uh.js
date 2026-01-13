function e(e2) {
  var t2 = e2.match(/^\s*\S/);
  return e2.skipToEnd(), t2 ? `error` : null;
}
const t = { name: `asciiarmor`, token: function(t2, n) {
  var r;
  if (n.state == `top`) return t2.sol() && (r = t2.match(/^-----BEGIN (.*)?-----\s*$/)) ? (n.state = `headers`, n.type = r[1], `tag`) : e(t2);
  if (n.state == `headers`) {
    if (t2.sol() && t2.match(/^\w+:/)) return n.state = `header`, `atom`;
    var i = e(t2);
    return i && (n.state = `body`), i;
  } else if (n.state == `header`) return t2.skipToEnd(), n.state = `headers`, `string`;
  else if (n.state == `body`) return t2.sol() && (r = t2.match(/^-----END (.*)?-----\s*$/)) ? r[1] == n.type ? (n.state = `end`, `tag`) : `error` : t2.eatWhile(/[A-Za-z0-9+\/=]/) ? null : (t2.next(), `error`);
  else if (n.state == `end`) return e(t2);
}, blankLine: function(e2) {
  e2.state == `headers` && (e2.state = `body`);
}, startState: function() {
  return { state: `top`, type: null };
} };
export {
  t as asciiArmor
};
