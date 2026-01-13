var e;
function t(e2) {
  return RegExp(`^(?:` + e2.join(`|`) + `)$`, `i`);
}
var n = t(`str.lang.langmatches.datatype.bound.sameterm.isiri.isuri.iri.uri.bnode.count.sum.min.max.avg.sample.group_concat.rand.abs.ceil.floor.round.concat.substr.strlen.replace.ucase.lcase.encode_for_uri.contains.strstarts.strends.strbefore.strafter.year.month.day.hours.minutes.seconds.timezone.tz.now.uuid.struuid.md5.sha1.sha256.sha384.sha512.coalesce.if.strlang.strdt.isnumeric.regex.exists.isblank.isliteral.a.bind`.split(`.`)), r = t(`base.prefix.select.distinct.reduced.construct.describe.ask.from.named.where.order.limit.offset.filter.optional.graph.by.asc.desc.as.having.undef.values.group.minus.in.not.service.silent.using.insert.delete.union.true.false.with.data.copy.to.move.add.create.drop.clear.load.into`.split(`.`)), i = /[*+\-<>=&|\^\/!\?]/, a = `[A-Za-z_\\-0-9]`, o = RegExp(`[A-Za-z]`), s = RegExp(`((` + a + `|\\.)*(` + a + `))?:`);
function c(t2, a2) {
  var c2 = t2.next();
  if (e = null, c2 == `$` || c2 == `?`) return c2 == `?` && t2.match(/\s/, false) ? `operator` : (t2.match(/^[A-Za-z0-9_\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][A-Za-z0-9_\u00B7\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u037D\u037F-\u1FFF\u200C-\u200D\u203F-\u2040\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD]*/), `variableName.local`);
  if (c2 == `<` && !t2.match(/^[\s\u00a0=]/, false)) return t2.match(/^[^\s\u00a0>]*>?/), `atom`;
  if (c2 == `"` || c2 == `'`) return a2.tokenize = u(c2), a2.tokenize(t2, a2);
  if (/[{}\(\),\.;\[\]]/.test(c2)) return e = c2, `bracket`;
  if (c2 == `#`) return t2.skipToEnd(), `comment`;
  if (i.test(c2)) return `operator`;
  if (c2 == `:`) return l(t2), `atom`;
  if (c2 == `@`) return t2.eatWhile(/[a-z\d\-]/i), `meta`;
  if (o.test(c2) && t2.match(s)) return l(t2), `atom`;
  t2.eatWhile(/[_\w\d]/);
  var d2 = t2.current();
  return n.test(d2) ? `builtin` : r.test(d2) ? `keyword` : `variable`;
}
function l(e2) {
  e2.match(/(\.(?=[\w_\-\\%])|[:\w_-]|\\[-\\_~.!$&'()*+,;=/?#@%]|%[a-f\d][a-f\d])+/i);
}
function u(e2) {
  return function(t2, n2) {
    for (var r2 = false, i2; (i2 = t2.next()) != null; ) {
      if (i2 == e2 && !r2) {
        n2.tokenize = c;
        break;
      }
      r2 = !r2 && i2 == `\\`;
    }
    return `string`;
  };
}
function d(e2, t2, n2) {
  e2.context = { prev: e2.context, indent: e2.indent, col: n2, type: t2 };
}
function f(e2) {
  e2.indent = e2.context.indent, e2.context = e2.context.prev;
}
const p = { name: `sparql`, startState: function() {
  return { tokenize: c, context: null, indent: 0, col: 0 };
}, token: function(t2, n2) {
  if (t2.sol() && (n2.context && n2.context.align == null && (n2.context.align = false), n2.indent = t2.indentation()), t2.eatSpace()) return null;
  var r2 = n2.tokenize(t2, n2);
  if (r2 != `comment` && n2.context && n2.context.align == null && n2.context.type != `pattern` && (n2.context.align = true), e == `(`) d(n2, `)`, t2.column());
  else if (e == `[`) d(n2, `]`, t2.column());
  else if (e == `{`) d(n2, `}`, t2.column());
  else if (/[\]\}\)]/.test(e)) {
    for (; n2.context && n2.context.type == `pattern`; ) f(n2);
    n2.context && e == n2.context.type && (f(n2), e == `}` && n2.context && n2.context.type == `pattern` && f(n2));
  } else e == `.` && n2.context && n2.context.type == `pattern` ? f(n2) : /atom|string|variable/.test(r2) && n2.context && (/[\}\]]/.test(n2.context.type) ? d(n2, `pattern`, t2.column()) : n2.context.type == `pattern` && !n2.context.align && (n2.context.align = true, n2.context.col = t2.column()));
  return r2;
}, indent: function(e2, t2, n2) {
  var r2 = t2 && t2.charAt(0), i2 = e2.context;
  if (/[\]\}]/.test(r2)) for (; i2 && i2.type == `pattern`; ) i2 = i2.prev;
  var a2 = i2 && r2 == i2.type;
  return i2 ? i2.type == `pattern` ? i2.col : i2.align ? i2.col + (a2 ? 0 : 1) : i2.indent + (a2 ? 0 : n2.unit) : 0;
}, languageData: { commentTokens: { line: `#` } } };
export {
  p as sparql
};
