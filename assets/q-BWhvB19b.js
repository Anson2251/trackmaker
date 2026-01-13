var e, t = r(`abs.acos.aj.aj0.all.and.any.asc.asin.asof.atan.attr.avg.avgs.bin.by.ceiling.cols.cor.cos.count.cov.cross.csv.cut.delete.deltas.desc.dev.differ.distinct.div.do.each.ej.enlist.eval.except.exec.exit.exp.fby.fills.first.fkeys.flip.floor.from.get.getenv.group.gtime.hclose.hcount.hdel.hopen.hsym.iasc.idesc.if.ij.in.insert.inter.inv.key.keys.last.like.list.lj.load.log.lower.lsq.ltime.ltrim.mavg.max.maxs.mcount.md5.mdev.med.meta.min.mins.mmax.mmin.mmu.mod.msum.neg.next.not.null.or.over.parse.peach.pj.plist.prd.prds.prev.prior.rand.rank.ratios.raze.read0.read1.reciprocal.reverse.rload.rotate.rsave.rtrim.save.scan.select.set.setenv.show.signum.sin.sqrt.ss.ssr.string.sublist.sum.sums.sv.system.tables.tan.til.trim.txf.type.uj.ungroup.union.update.upper.upsert.value.var.view.views.vs.wavg.where.where.while.within.wj.wj1.wsum.xasc.xbar.xcol.xcols.xdesc.xexp.xgroup.xkey.xlog.xprev.xrank`.split(`.`)), n = /[|/&^!+:\\\-*%$=~#;@><,?_\'\"\[\(\]\)\s{}]/;
function r(e2) {
  return RegExp(`^(` + e2.join(`|`) + `)$`);
}
function i(r2, o2) {
  var l2 = r2.sol(), u2 = r2.next();
  if (e = null, l2) {
    if (u2 == `/`) return (o2.tokenize = a)(r2, o2);
    if (u2 == `\\`) return r2.eol() || /\s/.test(r2.peek()) ? (r2.skipToEnd(), /^\\\s*$/.test(r2.current()) ? (o2.tokenize = s)(r2) : o2.tokenize = i, `comment`) : (o2.tokenize = i, `builtin`);
  }
  if (/\s/.test(u2)) return r2.peek() == `/` ? (r2.skipToEnd(), `comment`) : `null`;
  if (u2 == `"`) return (o2.tokenize = c)(r2, o2);
  if (u2 == "`") return r2.eatWhile(/[A-Za-z\d_:\/.]/), `macroName`;
  if (u2 == `.` && /\d/.test(r2.peek()) || /\d/.test(u2)) {
    var d2 = null;
    return r2.backUp(1), r2.match(/^\d{4}\.\d{2}(m|\.\d{2}([DT](\d{2}(:\d{2}(:\d{2}(\.\d{1,9})?)?)?)?)?)/) || r2.match(/^\d+D(\d{2}(:\d{2}(:\d{2}(\.\d{1,9})?)?)?)/) || r2.match(/^\d{2}:\d{2}(:\d{2}(\.\d{1,9})?)?/) || r2.match(/^\d+[ptuv]{1}/) ? d2 = `temporal` : (r2.match(/^0[NwW]{1}/) || r2.match(/^0x[\da-fA-F]*/) || r2.match(/^[01]+[b]{1}/) || r2.match(/^\d+[chijn]{1}/) || r2.match(/-?\d*(\.\d*)?(e[+\-]?\d+)?(e|f)?/)) && (d2 = `number`), d2 && (!(u2 = r2.peek()) || n.test(u2)) ? d2 : (r2.next(), `error`);
  }
  return /[A-Za-z]|\./.test(u2) ? (r2.eatWhile(/[A-Za-z._\d]/), t.test(r2.current()) ? `keyword` : `variable`) : /[|/&^!+:\\\-*%$=~#;@><\.,?_\']/.test(u2) || /[{}\(\[\]\)]/.test(u2) ? null : `error`;
}
function a(e2, t2) {
  return e2.skipToEnd(), /^\/\s*$/.test(e2.current()) ? (t2.tokenize = o)(e2, t2) : t2.tokenize = i, `comment`;
}
function o(e2, t2) {
  var n2 = e2.sol() && e2.peek() == `\\`;
  return e2.skipToEnd(), n2 && /^\\\s*$/.test(e2.current()) && (t2.tokenize = i), `comment`;
}
function s(e2) {
  return e2.skipToEnd(), `comment`;
}
function c(e2, t2) {
  for (var n2 = false, r2, a2 = false; r2 = e2.next(); ) {
    if (r2 == `"` && !n2) {
      a2 = true;
      break;
    }
    n2 = !n2 && r2 == `\\`;
  }
  return a2 && (t2.tokenize = i), `string`;
}
function l(e2, t2, n2) {
  e2.context = { prev: e2.context, indent: e2.indent, col: n2, type: t2 };
}
function u(e2) {
  e2.indent = e2.context.indent, e2.context = e2.context.prev;
}
const d = { name: `q`, startState: function() {
  return { tokenize: i, context: null, indent: 0, col: 0 };
}, token: function(t2, n2) {
  t2.sol() && (n2.context && n2.context.align == null && (n2.context.align = false), n2.indent = t2.indentation());
  var r2 = n2.tokenize(t2, n2);
  if (r2 != `comment` && n2.context && n2.context.align == null && n2.context.type != `pattern` && (n2.context.align = true), e == `(`) l(n2, `)`, t2.column());
  else if (e == `[`) l(n2, `]`, t2.column());
  else if (e == `{`) l(n2, `}`, t2.column());
  else if (/[\]\}\)]/.test(e)) {
    for (; n2.context && n2.context.type == `pattern`; ) u(n2);
    n2.context && e == n2.context.type && u(n2);
  } else e == `.` && n2.context && n2.context.type == `pattern` ? u(n2) : /atom|string|variable/.test(r2) && n2.context && (/[\}\]]/.test(n2.context.type) ? l(n2, `pattern`, t2.column()) : n2.context.type == `pattern` && !n2.context.align && (n2.context.align = true, n2.context.col = t2.column()));
  return r2;
}, indent: function(e2, t2, n2) {
  var r2 = t2 && t2.charAt(0), i2 = e2.context;
  if (/[\]\}]/.test(r2)) for (; i2 && i2.type == `pattern`; ) i2 = i2.prev;
  var a2 = i2 && r2 == i2.type;
  return i2 ? i2.type == `pattern` ? i2.col : i2.align ? i2.col + (a2 ? 0 : 1) : i2.indent + (a2 ? 0 : n2.unit) : 0;
}, languageData: { commentTokens: { line: `/` } } };
export {
  d as q
};
