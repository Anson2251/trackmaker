function e(e2, t2) {
  return e2.skipToEnd(), t2.cur = o, `error`;
}
function t(t2, r2) {
  return t2.match(/^HTTP\/\d\.\d/) ? (r2.cur = n, `keyword`) : t2.match(/^[A-Z]+/) && /[ \t]/.test(t2.peek()) ? (r2.cur = i, `keyword`) : e(t2, r2);
}
function n(t2, n2) {
  var i2 = t2.match(/^\d+/);
  if (!i2) return e(t2, n2);
  n2.cur = r;
  var a2 = Number(i2[0]);
  return a2 >= 100 && a2 < 400 ? `atom` : `error`;
}
function r(e2, t2) {
  return e2.skipToEnd(), t2.cur = o, null;
}
function i(e2, t2) {
  return e2.eatWhile(/\S/), t2.cur = a, `string.special`;
}
function a(t2, n2) {
  return t2.match(/^HTTP\/\d\.\d$/) ? (n2.cur = o, `keyword`) : e(t2, n2);
}
function o(e2) {
  return e2.sol() && !e2.eat(/[ \t]/) ? e2.match(/^.*?:/) ? `atom` : (e2.skipToEnd(), `error`) : (e2.skipToEnd(), `string`);
}
function s(e2) {
  return e2.skipToEnd(), null;
}
const c = { name: `http`, token: function(e2, t2) {
  var n2 = t2.cur;
  return n2 != o && n2 != s && e2.eatSpace() ? null : n2(e2, t2);
}, blankLine: function(e2) {
  e2.cur = s;
}, startState: function() {
  return { cur: t };
} };
export {
  c as http
};
