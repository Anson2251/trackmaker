var e = function(e2) {
  return RegExp(`^(?:` + e2.join(`|`) + `)$`, `i`);
}, t = function(e2) {
  i = null;
  var t2 = e2.next();
  if (t2 === `"`) return e2.match(/^.*?"/), `string`;
  if (t2 === `'`) return e2.match(/^.*?'/), `string`;
  if (/[{}\(\),\.;\[\]]/.test(t2)) return i = t2, `punctuation`;
  if (t2 === `/` && e2.eat(`/`)) return e2.skipToEnd(), `comment`;
  if (l.test(t2)) return e2.eatWhile(l), null;
  if (e2.eatWhile(/[_\w\d]/), e2.eat(`:`)) return e2.eatWhile(/[\w\d_\-]/), `atom`;
  var n2 = e2.current();
  return a.test(n2) ? `builtin` : o.test(n2) ? `def` : s.test(n2) || c.test(n2) ? `keyword` : `variable`;
}, n = function(e2, t2, n2) {
  return e2.context = { prev: e2.context, indent: e2.indent, col: n2, type: t2 };
}, r = function(e2) {
  return e2.indent = e2.context.indent, e2.context = e2.context.prev;
}, i, a = e(`abs.acos.allShortestPaths.asin.atan.atan2.avg.ceil.coalesce.collect.cos.cot.count.degrees.e.endnode.exp.extract.filter.floor.haversin.head.id.keys.labels.last.left.length.log.log10.lower.ltrim.max.min.node.nodes.percentileCont.percentileDisc.pi.radians.rand.range.reduce.rel.relationship.relationships.replace.reverse.right.round.rtrim.shortestPath.sign.sin.size.split.sqrt.startnode.stdev.stdevp.str.substring.sum.tail.tan.timestamp.toFloat.toInt.toString.trim.type.upper`.split(`.`)), o = e([`all`, `and`, `any`, `contains`, `exists`, `has`, `in`, `none`, `not`, `or`, `single`, `xor`]), s = e(`as.asc.ascending.assert.by.case.commit.constraint.create.csv.cypher.delete.desc.descending.detach.distinct.drop.else.end.ends.explain.false.fieldterminator.foreach.from.headers.in.index.is.join.limit.load.match.merge.null.on.optional.order.periodic.profile.remove.return.scan.set.skip.start.starts.then.true.union.unique.unwind.using.when.where.with.call.yield`.split(`.`)), c = e(`access.active.assign.all.alter.as.catalog.change.copy.create.constraint.constraints.current.database.databases.dbms.default.deny.drop.element.elements.exists.from.grant.graph.graphs.if.index.indexes.label.labels.management.match.name.names.new.node.nodes.not.of.on.or.password.populated.privileges.property.read.relationship.relationships.remove.replace.required.revoke.role.roles.set.show.start.status.stop.suspended.to.traverse.type.types.user.users.with.write`.split(`.`)), l = /[*+\-<>=&|~%^]/;
const u = { name: `cypher`, startState: function() {
  return { tokenize: t, context: null, indent: 0, col: 0 };
}, token: function(e2, t2) {
  if (e2.sol() && (t2.context && t2.context.align == null && (t2.context.align = false), t2.indent = e2.indentation()), e2.eatSpace()) return null;
  var a2 = t2.tokenize(e2, t2);
  if (a2 !== `comment` && t2.context && t2.context.align == null && t2.context.type !== `pattern` && (t2.context.align = true), i === `(`) n(t2, `)`, e2.column());
  else if (i === `[`) n(t2, `]`, e2.column());
  else if (i === `{`) n(t2, `}`, e2.column());
  else if (/[\]\}\)]/.test(i)) {
    for (; t2.context && t2.context.type === `pattern`; ) r(t2);
    t2.context && i === t2.context.type && r(t2);
  } else i === `.` && t2.context && t2.context.type === `pattern` ? r(t2) : /atom|string|variable/.test(a2) && t2.context && (/[\}\]]/.test(t2.context.type) ? n(t2, `pattern`, e2.column()) : t2.context.type === `pattern` && !t2.context.align && (t2.context.align = true, t2.context.col = e2.column()));
  return a2;
}, indent: function(e2, t2, n2) {
  var r2 = t2 && t2.charAt(0), i2 = e2.context;
  if (/[\]\}]/.test(r2)) for (; i2 && i2.type === `pattern`; ) i2 = i2.prev;
  var a2 = i2 && r2 === i2.type;
  return i2 ? i2.type === `keywords` ? null : i2.align ? i2.col + (a2 ? 0 : 1) : i2.indent + (a2 ? 0 : n2.unit) : 0;
} };
export {
  u as cypher
};
