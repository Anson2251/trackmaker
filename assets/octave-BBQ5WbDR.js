function e(e2) {
  return RegExp(`^((` + e2.join(`)|(`) + `))\\b`);
}
var t = RegExp(`^[\\+\\-\\*/&|\\^~<>!@'\\\\]`), n = RegExp(`^[\\(\\[\\{\\},:=;\\.]`), r = RegExp(`^((==)|(~=)|(<=)|(>=)|(<<)|(>>)|(\\.[\\+\\-\\*/\\^\\\\]))`), i = RegExp(`^((!=)|(\\+=)|(\\-=)|(\\*=)|(/=)|(&=)|(\\|=)|(\\^=))`), a = RegExp(`^((>>=)|(<<=))`), o = RegExp(`^[\\]\\)]`), s = RegExp(`^[_A-Za-z\xA1-\uFFFF][_A-Za-z0-9\xA1-\uFFFF]*`), c = e(`error.eval.function.abs.acos.atan.asin.cos.cosh.exp.log.prod.sum.log10.max.min.sign.sin.sinh.sqrt.tan.reshape.break.zeros.default.margin.round.ones.rand.syn.ceil.floor.size.clear.zeros.eye.mean.std.cov.det.eig.inv.norm.rank.trace.expm.logm.sqrtm.linspace.plot.title.xlabel.ylabel.legend.text.grid.meshgrid.mesh.num2str.fft.ifft.arrayfun.cellfun.input.fliplr.flipud.ismember`.split(`.`)), l = e(`return.case.switch.else.elseif.end.endif.endfunction.if.otherwise.do.for.while.try.catch.classdef.properties.events.methods.global.persistent.endfor.endwhile.printf.sprintf.disp.until.continue.pkg`.split(`.`));
function u(e2, t2) {
  return !e2.sol() && e2.peek() === `'` ? (e2.next(), t2.tokenize = f, `operator`) : (t2.tokenize = f, f(e2, t2));
}
function d(e2, t2) {
  return e2.match(/^.*%}/) ? (t2.tokenize = f, `comment`) : (e2.skipToEnd(), `comment`);
}
function f(p2, m) {
  if (p2.eatSpace()) return null;
  if (p2.match(`%{`)) return m.tokenize = d, p2.skipToEnd(), `comment`;
  if (p2.match(/^[%#]/)) return p2.skipToEnd(), `comment`;
  if (p2.match(/^[0-9\.+-]/, false)) {
    if (p2.match(/^[+-]?0x[0-9a-fA-F]+[ij]?/)) return p2.tokenize = f, `number`;
    if (p2.match(/^[+-]?\d*\.\d+([EeDd][+-]?\d+)?[ij]?/) || p2.match(/^[+-]?\d+([EeDd][+-]?\d+)?[ij]?/)) return `number`;
  }
  if (p2.match(e([`nan`, `NaN`, `inf`, `Inf`]))) return `number`;
  var h = p2.match(/^"(?:[^"]|"")*("|$)/) || p2.match(/^'(?:[^']|'')*('|$)/);
  return h ? h[1] ? `string` : `error` : p2.match(l) ? `keyword` : p2.match(c) ? `builtin` : p2.match(s) ? `variable` : p2.match(t) || p2.match(r) ? `operator` : p2.match(n) || p2.match(i) || p2.match(a) ? null : p2.match(o) ? (m.tokenize = u, null) : (p2.next(), `error`);
}
const p = { name: `octave`, startState: function() {
  return { tokenize: f };
}, token: function(e2, t2) {
  var n2 = t2.tokenize(e2, t2);
  return (n2 === `number` || n2 === `variable`) && (t2.tokenize = u), n2;
}, languageData: { commentTokens: { line: `%` } } };
export {
  p as octave
};
