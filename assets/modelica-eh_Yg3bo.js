function e(e2) {
  for (var t2 = {}, n2 = e2.split(` `), r2 = 0; r2 < n2.length; ++r2) t2[n2[r2]] = true;
  return t2;
}
var t = e(`algorithm and annotation assert block break class connect connector constant constrainedby der discrete each else elseif elsewhen encapsulated end enumeration equation expandable extends external false final flow for function if import impure in initial inner input loop model not operator or outer output package parameter partial protected public pure record redeclare replaceable return stream then true type when while within`), n = e(`abs acos actualStream asin atan atan2 cardinality ceil cos cosh delay div edge exp floor getInstanceName homotopy inStream integer log log10 mod pre reinit rem semiLinear sign sin sinh spatialDistribution sqrt tan tanh`), r = e(`Real Boolean Integer String`), i = [].concat(Object.keys(t), Object.keys(n), Object.keys(r)), a = /[;=\(:\),{}.*<>+\-\/^\[\]]/, o = /(:=|<=|>=|==|<>|\.\+|\.\-|\.\*|\.\/|\.\^)/, s = /[0-9]/, c = /[_a-zA-Z]/;
function l(e2, t2) {
  return e2.skipToEnd(), t2.tokenize = null, `comment`;
}
function u(e2, t2) {
  for (var n2 = false, r2; r2 = e2.next(); ) {
    if (n2 && r2 == `/`) {
      t2.tokenize = null;
      break;
    }
    n2 = r2 == `*`;
  }
  return `comment`;
}
function d(e2, t2) {
  for (var n2 = false, r2; (r2 = e2.next()) != null; ) {
    if (r2 == `"` && !n2) {
      t2.tokenize = null, t2.sol = false;
      break;
    }
    n2 = !n2 && r2 == `\\`;
  }
  return `string`;
}
function f(e2, i2) {
  for (e2.eatWhile(s); e2.eat(s) || e2.eat(c); ) ;
  var a2 = e2.current();
  return i2.sol && (a2 == `package` || a2 == `model` || a2 == `when` || a2 == `connector`) ? i2.level++ : i2.sol && a2 == `end` && i2.level > 0 && i2.level--, i2.tokenize = null, i2.sol = false, t.propertyIsEnumerable(a2) ? `keyword` : n.propertyIsEnumerable(a2) ? `builtin` : r.propertyIsEnumerable(a2) ? `atom` : `variable`;
}
function p(e2, t2) {
  for (; e2.eat(/[^']/); ) ;
  return t2.tokenize = null, t2.sol = false, e2.eat(`'`) ? `variable` : `error`;
}
function m(e2, t2) {
  return e2.eatWhile(s), e2.eat(`.`) && e2.eatWhile(s), (e2.eat(`e`) || e2.eat(`E`)) && (e2.eat(`-`) || e2.eat(`+`), e2.eatWhile(s)), t2.tokenize = null, t2.sol = false, `number`;
}
const h = { name: `modelica`, startState: function() {
  return { tokenize: null, level: 0, sol: true };
}, token: function(e2, t2) {
  if (t2.tokenize != null) return t2.tokenize(e2, t2);
  if (e2.sol() && (t2.sol = true), e2.eatSpace()) return t2.tokenize = null, null;
  var n2 = e2.next();
  if (n2 == `/` && e2.eat(`/`)) t2.tokenize = l;
  else if (n2 == `/` && e2.eat(`*`)) t2.tokenize = u;
  else if (o.test(n2 + e2.peek())) return e2.next(), t2.tokenize = null, `operator`;
  else if (a.test(n2)) return t2.tokenize = null, `operator`;
  else if (c.test(n2)) t2.tokenize = f;
  else if (n2 == `'` && e2.peek() && e2.peek() != `'`) t2.tokenize = p;
  else if (n2 == `"`) t2.tokenize = d;
  else if (s.test(n2)) t2.tokenize = m;
  else return t2.tokenize = null, `error`;
  return t2.tokenize(e2, t2);
}, indent: function(e2, t2, n2) {
  if (e2.tokenize != null) return null;
  var r2 = e2.level;
  return /(algorithm)/.test(t2) && r2--, /(equation)/.test(t2) && r2--, /(initial algorithm)/.test(t2) && r2--, /(initial equation)/.test(t2) && r2--, /(end)/.test(t2) && r2--, r2 > 0 ? n2.unit * r2 : 0;
}, languageData: { commentTokens: { line: `//`, block: { open: `/*`, close: `*/` } }, autocomplete: i } };
export {
  h as modelica
};
