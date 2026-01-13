var e = { "+": `inserted`, "-": `deleted`, "@": `meta` };
const t = { name: `diff`, token: function(t2) {
  var n = t2.string.search(/[\t ]+?$/);
  if (!t2.sol() || n === 0) return t2.skipToEnd(), (`error ` + (e[t2.string.charAt(0)] || ``)).replace(/ $/, ``);
  var r = e[t2.peek()] || t2.skipToEnd();
  return n === -1 ? t2.skipToEnd() : t2.pos = n, r;
} };
export {
  t as diff
};
