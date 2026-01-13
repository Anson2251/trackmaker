var e = /[+\-\/\\*~<>=@%|&?!.,:;^]/, t = /true|false|nil|self|super|thisContext/, n = function(e2, t2) {
  this.next = e2, this.parent = t2;
}, r = function(e2, t2, n2) {
  this.name = e2, this.context = t2, this.eos = n2;
}, i = function() {
  this.context = new n(a, null), this.expectVariable = true, this.indentation = 0, this.userIndentationDelta = 0;
};
i.prototype.userIndent = function(e2, t2) {
  this.userIndentationDelta = e2 > 0 ? e2 / t2 - this.indentation : 0;
};
var a = function(i2, a2, u2) {
  var d = new r(null, a2, false), f = i2.next();
  return f === `"` ? d = o(i2, new n(o, a2)) : f === `'` ? d = s(i2, new n(s, a2)) : f === `#` ? i2.peek() === `'` ? (i2.next(), d = c(i2, new n(c, a2))) : i2.eatWhile(/[^\s.{}\[\]()]/) ? d.name = `string.special` : d.name = `meta` : f === `$` ? (i2.next() === `<` && (i2.eatWhile(/[^\s>]/), i2.next()), d.name = `string.special`) : f === `|` && u2.expectVariable ? d.context = new n(l, a2) : /[\[\]{}()]/.test(f) ? (d.name = `bracket`, d.eos = /[\[{(]/.test(f), f === `[` ? u2.indentation++ : f === `]` && (u2.indentation = Math.max(0, u2.indentation - 1))) : e.test(f) ? (i2.eatWhile(e), d.name = `operator`, d.eos = f !== `;`) : /\d/.test(f) ? (i2.eatWhile(/[\w\d]/), d.name = `number`) : /[\w_]/.test(f) ? (i2.eatWhile(/[\w\d_]/), d.name = u2.expectVariable ? t.test(i2.current()) ? `keyword` : `variable` : null) : d.eos = u2.expectVariable, d;
}, o = function(e2, t2) {
  return e2.eatWhile(/[^"]/), new r(`comment`, e2.eat(`"`) ? t2.parent : t2, true);
}, s = function(e2, t2) {
  return e2.eatWhile(/[^']/), new r(`string`, e2.eat(`'`) ? t2.parent : t2, false);
}, c = function(e2, t2) {
  return e2.eatWhile(/[^']/), new r(`string.special`, e2.eat(`'`) ? t2.parent : t2, false);
}, l = function(e2, t2) {
  var n2 = new r(null, t2, false);
  return e2.next() === `|` ? (n2.context = t2.parent, n2.eos = true) : (e2.eatWhile(/[^|]/), n2.name = `variable`), n2;
};
const u = { name: `smalltalk`, startState: function() {
  return new i();
}, token: function(e2, t2) {
  if (t2.userIndent(e2.indentation(), e2.indentUnit), e2.eatSpace()) return null;
  var n2 = t2.context.next(e2, t2.context, t2);
  return t2.context = n2.context, t2.expectVariable = n2.eos, n2.name;
}, blankLine: function(e2, t2) {
  e2.userIndent(0, t2);
}, indent: function(e2, t2, n2) {
  var r2 = e2.context.next === a && t2 && t2.charAt(0) === `]` ? -1 : e2.userIndentationDelta;
  return (e2.indentation + r2) * n2.unit;
}, languageData: { indentOnInput: /^\s*\]$/ } };
export {
  u as smalltalk
};
