var e = /[^\s\|\!\+\-\*\?\~\^\&\:\(\)\[\]\{\}\"\\]/, t = /[\|\!\+\-\*\?\~\^\&]/, n = /^(OR|AND|NOT|TO)$/;
function r(e2) {
  return parseFloat(e2).toString() === e2;
}
function i(e2) {
  return function(t2, n2) {
    for (var r2 = false, i2; (i2 = t2.next()) != null && !(i2 == e2 && !r2); ) r2 = !r2 && i2 == `\\`;
    return r2 || (n2.tokenize = s), `string`;
  };
}
function a(e2) {
  return function(t2, n2) {
    return e2 == `|` ? t2.eat(/\|/) : e2 == `&` && t2.eat(/\&/), n2.tokenize = s, `operator`;
  };
}
function o(t2) {
  return function(i2, a2) {
    for (var o2 = t2; (t2 = i2.peek()) && t2.match(e) != null; ) o2 += i2.next();
    return a2.tokenize = s, n.test(o2) ? `operator` : r(o2) ? `number` : i2.peek() == `:` ? `propertyName` : `string`;
  };
}
function s(n2, r2) {
  var c2 = n2.next();
  return c2 == `"` ? r2.tokenize = i(c2) : t.test(c2) ? r2.tokenize = a(c2) : e.test(c2) && (r2.tokenize = o(c2)), r2.tokenize == s ? null : r2.tokenize(n2, r2);
}
const c = { name: `solr`, startState: function() {
  return { tokenize: s };
}, token: function(e2, t2) {
  return e2.eatSpace() ? null : t2.tokenize(e2, t2);
} };
export {
  c as solr
};
