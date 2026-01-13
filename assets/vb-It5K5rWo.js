var e = `error`;
function t(e2) {
  return RegExp(`^((` + e2.join(`)|(`) + `))\\b`, `i`);
}
var n = RegExp(`^[\\+\\-\\*/%&\\\\|\\^~<>!]`), r = RegExp("^[\\(\\)\\[\\]\\{\\}@,:`=;\\.]"), i = RegExp(`^((==)|(<>)|(<=)|(>=)|(<>)|(<<)|(>>)|(//)|(\\*\\*))`), a = RegExp(`^((\\+=)|(\\-=)|(\\*=)|(%=)|(/=)|(&=)|(\\|=)|(\\^=))`), o = RegExp(`^((//=)|(>>=)|(<<=)|(\\*\\*=))`), s = RegExp(`^[_A-Za-z][_A-Za-z0-9]*`), c = [`class`, `module`, `sub`, `enum`, `select`, `while`, `if`, `function`, `get`, `set`, `property`, `try`, `structure`, `synclock`, `using`, `with`], l = [`else`, `elseif`, `case`, `catch`, `finally`], u = [`next`, `loop`], d = [`and`, `andalso`, `or`, `orelse`, `xor`, `in`, `not`, `is`, `isnot`, `like`], f = t(d), p = `#const.#else.#elseif.#end.#if.#region.addhandler.addressof.alias.as.byref.byval.cbool.cbyte.cchar.cdate.cdbl.cdec.cint.clng.cobj.compare.const.continue.csbyte.cshort.csng.cstr.cuint.culng.cushort.declare.default.delegate.dim.directcast.each.erase.error.event.exit.explicit.false.for.friend.gettype.goto.handles.implements.imports.infer.inherits.interface.isfalse.istrue.lib.me.mod.mustinherit.mustoverride.my.mybase.myclass.namespace.narrowing.new.nothing.notinheritable.notoverridable.of.off.on.operator.option.optional.out.overloads.overridable.overrides.paramarray.partial.private.protected.public.raiseevent.readonly.redim.removehandler.resume.return.shadows.shared.static.step.stop.strict.then.throw.to.true.trycast.typeof.until.until.when.widening.withevents.writeonly`.split(`.`), m = `object.boolean.char.string.byte.sbyte.short.ushort.int16.uint16.integer.uinteger.int32.uint32.long.ulong.int64.uint64.decimal.single.double.float.date.datetime.intptr.uintptr`.split(`.`), h = t(p), g = t(m), _ = `"`, v = t(c), y = t(l), b = t(u), x = t([`end`]), S = t([`do`]), C = null;
function w(e2, t2) {
  t2.currentIndent++;
}
function T(e2, t2) {
  t2.currentIndent--;
}
function E(t2, c2) {
  if (t2.eatSpace()) return null;
  if (t2.peek() === `'`) return t2.skipToEnd(), `comment`;
  if (t2.match(/^((&H)|(&O))?[0-9\.a-f]/i, false)) {
    var l2 = false;
    if ((t2.match(/^\d*\.\d+F?/i) || t2.match(/^\d+\.\d*F?/) || t2.match(/^\.\d+F?/)) && (l2 = true), l2) return t2.eat(/J/i), `number`;
    var u2 = false;
    if (t2.match(/^&H[0-9a-f]+/i) || t2.match(/^&O[0-7]+/i) ? u2 = true : t2.match(/^[1-9]\d*F?/) ? (t2.eat(/J/i), u2 = true) : t2.match(/^0(?![\dx])/i) && (u2 = true), u2) return t2.eat(/L/i), `number`;
  }
  return t2.match(_) ? (c2.tokenize = D(t2.current()), c2.tokenize(t2, c2)) : t2.match(o) || t2.match(a) ? null : t2.match(i) || t2.match(n) || t2.match(f) ? `operator` : t2.match(r) ? null : t2.match(S) ? (w(t2, c2), c2.doInCurrentLine = true, `keyword`) : t2.match(v) ? (c2.doInCurrentLine ? c2.doInCurrentLine = false : w(t2, c2), `keyword`) : t2.match(y) ? `keyword` : t2.match(x) ? (T(t2, c2), T(t2, c2), `keyword`) : t2.match(b) ? (T(t2, c2), `keyword`) : t2.match(g) || t2.match(h) ? `keyword` : t2.match(s) ? `variable` : (t2.next(), e);
}
function D(e2) {
  var t2 = e2.length == 1, n2 = `string`;
  return function(r2, i2) {
    for (; !r2.eol(); ) {
      if (r2.eatWhile(/[^'"]/), r2.match(e2)) return i2.tokenize = E, n2;
      r2.eat(/['"]/);
    }
    return t2 && (i2.tokenize = E), n2;
  };
}
function O(t2, n2) {
  var r2 = n2.tokenize(t2, n2), i2 = t2.current();
  if (i2 === `.`) return r2 = n2.tokenize(t2, n2), r2 === `variable` ? `variable` : e;
  var a2 = `[({`.indexOf(i2);
  return a2 !== -1 && w(t2, n2), C === `dedent` && T(t2, n2) || (a2 = `])}`.indexOf(i2), a2 !== -1 && T(t2, n2)) ? e : r2;
}
const k = { name: `vb`, startState: function() {
  return { tokenize: E, lastToken: null, currentIndent: 0, nextLineIndent: 0, doInCurrentLine: false };
}, token: function(e2, t2) {
  e2.sol() && (t2.currentIndent += t2.nextLineIndent, t2.nextLineIndent = 0, t2.doInCurrentLine = 0);
  var n2 = O(e2, t2);
  return t2.lastToken = { style: n2, content: e2.current() }, n2;
}, indent: function(e2, t2, n2) {
  var r2 = t2.replace(/^\s+|\s+$/g, ``);
  return r2.match(b) || r2.match(x) || r2.match(y) ? n2.unit * (e2.currentIndent - 1) : e2.currentIndent < 0 ? 0 : e2.currentIndent * n2.unit;
}, languageData: { closeBrackets: { brackets: [`(`, `[`, `{`, `"`] }, commentTokens: { line: `'` }, autocomplete: c.concat(l).concat(u).concat(d).concat(p).concat(m) } };
export {
  k as vb
};
