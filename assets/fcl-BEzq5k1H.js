var e = { term: true, method: true, accu: true, rule: true, then: true, is: true, and: true, or: true, if: true, default: true }, t = { var_input: true, var_output: true, fuzzify: true, defuzzify: true, function_block: true, ruleblock: true }, n = { end_ruleblock: true, end_defuzzify: true, end_function_block: true, end_fuzzify: true, end_var: true }, r = { true: true, false: true, nan: true, real: true, min: true, max: true, cog: true, cogs: true }, i = /[+\-*&^%:=<>!|\/]/;
function a(a2, s2) {
  var c2 = a2.next();
  if (/[\d\.]/.test(c2)) return c2 == `.` ? a2.match(/^[0-9]+([eE][\-+]?[0-9]+)?/) : c2 == `0` ? a2.match(/^[xX][0-9a-fA-F]+/) || a2.match(/^0[0-7]+/) : a2.match(/^[0-9]*\.?[0-9]*([eE][\-+]?[0-9]+)?/), `number`;
  if (c2 == `/` || c2 == `(`) {
    if (a2.eat(`*`)) return s2.tokenize = o, o(a2, s2);
    if (a2.eat(`/`)) return a2.skipToEnd(), `comment`;
  }
  if (i.test(c2)) return a2.eatWhile(i), `operator`;
  a2.eatWhile(/[\w\$_\xa1-\uffff]/);
  var l2 = a2.current().toLowerCase();
  return e.propertyIsEnumerable(l2) || t.propertyIsEnumerable(l2) || n.propertyIsEnumerable(l2) ? `keyword` : r.propertyIsEnumerable(l2) ? `atom` : `variable`;
}
function o(e2, t2) {
  for (var n2 = false, r2; r2 = e2.next(); ) {
    if ((r2 == `/` || r2 == `)`) && n2) {
      t2.tokenize = a;
      break;
    }
    n2 = r2 == `*`;
  }
  return `comment`;
}
function s(e2, t2, n2, r2, i2) {
  this.indented = e2, this.column = t2, this.type = n2, this.align = r2, this.prev = i2;
}
function c(e2, t2, n2) {
  return e2.context = new s(e2.indented, t2, n2, null, e2.context);
}
function l(e2) {
  if (e2.context.prev) return e2.context.type == `end_block` && (e2.indented = e2.context.indented), e2.context = e2.context.prev;
}
const u = { name: `fcl`, startState: function(e2) {
  return { tokenize: null, context: new s(-e2, 0, `top`, false), indented: 0, startOfLine: true };
}, token: function(e2, r2) {
  var i2 = r2.context;
  if (e2.sol() && (i2.align ?? (i2.align = false), r2.indented = e2.indentation(), r2.startOfLine = true), e2.eatSpace()) return null;
  var o2 = (r2.tokenize || a)(e2, r2);
  if (o2 == `comment`) return o2;
  i2.align ?? (i2.align = true);
  var s2 = e2.current().toLowerCase();
  return t.propertyIsEnumerable(s2) ? c(r2, e2.column(), `end_block`) : n.propertyIsEnumerable(s2) && l(r2), r2.startOfLine = false, o2;
}, indent: function(e2, t2, r2) {
  if (e2.tokenize != a && e2.tokenize != null) return 0;
  var i2 = e2.context, o2 = n.propertyIsEnumerable(t2);
  return i2.align ? i2.column + (o2 ? 0 : 1) : i2.indented + (o2 ? 0 : r2.unit);
}, languageData: { commentTokens: { line: `//`, block: { open: `(*`, close: `*)` } } } };
export {
  u as fcl
};
