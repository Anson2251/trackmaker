function e(e2) {
  return RegExp(`^((` + e2.join(`)|(`) + `))\\b`, `i`);
}
var t = RegExp(`^[\\+\\-\\*/&#!_?\\\\<>=\\'\\[\\]]`), n = RegExp(`^(('=)|(<=)|(>=)|('>)|('<)|([[)|(]])|(^$))`), r = RegExp(`^[\\.,:]`), i = RegExp(`[()]`), a = RegExp(`^[%A-Za-z][A-Za-z0-9]*`), o = `break.close.do.else.for.goto.halt.hang.if.job.kill.lock.merge.new.open.quit.read.set.tcommit.trollback.tstart.use.view.write.xecute.b.c.d.e.f.g.h.i.j.k.l.m.n.o.q.r.s.tc.tro.ts.u.v.w.x`.split(`.`), s = e(`\\$ascii.\\$char.\\$data.\\$ecode.\\$estack.\\$etrap.\\$extract.\\$find.\\$fnumber.\\$get.\\$horolog.\\$io.\\$increment.\\$job.\\$justify.\\$length.\\$name.\\$next.\\$order.\\$piece.\\$qlength.\\$qsubscript.\\$query.\\$quit.\\$random.\\$reverse.\\$select.\\$stack.\\$test.\\$text.\\$translate.\\$view.\\$x.\\$y.\\$a.\\$c.\\$d.\\$e.\\$ec.\\$es.\\$et.\\$f.\\$fn.\\$g.\\$h.\\$i.\\$j.\\$l.\\$n.\\$na.\\$o.\\$p.\\$q.\\$ql.\\$qs.\\$r.\\$re.\\$s.\\$st.\\$t.\\$tr.\\$v.\\$z`.split(`.`)), c = e(o);
function l(e2, o2) {
  e2.sol() && (o2.label = true, o2.commandMode = 0);
  var l2 = e2.peek();
  return l2 == ` ` || l2 == `	` ? (o2.label = false, o2.commandMode == 0 ? o2.commandMode = 1 : (o2.commandMode < 0 || o2.commandMode == 2) && (o2.commandMode = 0)) : l2 != `.` && o2.commandMode > 0 && (l2 == `:` ? o2.commandMode = -1 : o2.commandMode = 2), (l2 === `(` || l2 === `	`) && (o2.label = false), l2 === `;` ? (e2.skipToEnd(), `comment`) : e2.match(/^[-+]?\d+(\.\d+)?([eE][-+]?\d+)?/) ? `number` : l2 == `"` ? e2.skipTo(`"`) ? (e2.next(), `string`) : (e2.skipToEnd(), `error`) : e2.match(n) || e2.match(t) ? `operator` : e2.match(r) ? null : i.test(l2) ? (e2.next(), `bracket`) : o2.commandMode > 0 && e2.match(c) ? `controlKeyword` : e2.match(s) ? `builtin` : e2.match(a) ? `variable` : l2 === `$` || l2 === `^` ? (e2.next(), `builtin`) : l2 === `@` ? (e2.next(), `string.special`) : /[\w%]/.test(l2) ? (e2.eatWhile(/[\w%]/), `variable`) : (e2.next(), `error`);
}
const u = { name: `mumps`, startState: function() {
  return { label: false, commandMode: 0 };
}, token: function(e2, t2) {
  var n2 = l(e2, t2);
  return t2.label ? `tag` : n2;
} };
export {
  u as mumps
};
