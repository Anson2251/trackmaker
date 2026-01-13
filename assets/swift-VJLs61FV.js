function e(e2) {
  for (var t2 = {}, n2 = 0; n2 < e2.length; n2++) t2[e2[n2]] = true;
  return t2;
}
var t = e(`_.var.let.actor.class.enum.extension.import.protocol.struct.func.typealias.associatedtype.open.public.internal.fileprivate.private.deinit.init.new.override.self.subscript.super.convenience.dynamic.final.indirect.lazy.required.static.unowned.unowned(safe).unowned(unsafe).weak.as.is.break.case.continue.default.else.fallthrough.for.guard.if.in.repeat.switch.where.while.defer.return.inout.mutating.nonmutating.isolated.nonisolated.catch.do.rethrows.throw.throws.async.await.try.didSet.get.set.willSet.assignment.associativity.infix.left.none.operator.postfix.precedence.precedencegroup.prefix.right.Any.AnyObject.Type.dynamicType.Self.Protocol.__COLUMN__.__FILE__.__FUNCTION__.__LINE__`.split(`.`)), n = e([`var`, `let`, `actor`, `class`, `enum`, `extension`, `import`, `protocol`, `struct`, `func`, `typealias`, `associatedtype`, `for`]), r = e([`true`, `false`, `nil`, `self`, `super`, `_`]), i = e([`Array`, `Bool`, `Character`, `Dictionary`, `Double`, `Float`, `Int`, `Int8`, `Int16`, `Int32`, `Int64`, `Never`, `Optional`, `Set`, `String`, `UInt8`, `UInt16`, `UInt32`, `UInt64`, `Void`]), a = `+-/*%=|&<>~^?!`, o = `:;,.(){}[]`, s = /^\-?0b[01][01_]*/, c = /^\-?0o[0-7][0-7_]*/, l = /^\-?0x[\dA-Fa-f][\dA-Fa-f_]*(?:(?:\.[\dA-Fa-f][\dA-Fa-f_]*)?[Pp]\-?\d[\d_]*)?/, u = /^\-?\d[\d_]*(?:\.\d[\d_]*)?(?:[Ee]\-?\d[\d_]*)?/, d = /^\$\d+|(`?)[_A-Za-z][_A-Za-z$0-9]*\1/, f = /^\.(?:\$\d+|(`?)[_A-Za-z][_A-Za-z$0-9]*\1)/, p = /^\#[A-Za-z]+/, m = /^@(?:\$\d+|(`?)[_A-Za-z][_A-Za-z$0-9]*\1)/;
function h(e2, h2, g2) {
  if (e2.sol() && (h2.indented = e2.indentation()), e2.eatSpace()) return null;
  var y2 = e2.peek();
  if (y2 == `/`) {
    if (e2.match(`//`)) return e2.skipToEnd(), `comment`;
    if (e2.match(`/*`)) return h2.tokenize.push(v), v(e2, h2);
  }
  if (e2.match(p)) return `builtin`;
  if (e2.match(m)) return `attribute`;
  if (e2.match(s) || e2.match(c) || e2.match(l) || e2.match(u)) return `number`;
  if (e2.match(f)) return `property`;
  if (a.indexOf(y2) > -1) return e2.next(), `operator`;
  if (o.indexOf(y2) > -1) return e2.next(), e2.match(`..`), `punctuation`;
  var b2;
  if (b2 = e2.match(/("""|"|')/)) {
    var x2 = _.bind(null, b2[0]);
    return h2.tokenize.push(x2), x2(e2, h2);
  }
  if (e2.match(d)) {
    var S2 = e2.current();
    return i.hasOwnProperty(S2) ? `type` : r.hasOwnProperty(S2) ? `atom` : t.hasOwnProperty(S2) ? (n.hasOwnProperty(S2) && (h2.prev = `define`), `keyword`) : g2 == `define` ? `def` : `variable`;
  }
  return e2.next(), null;
}
function g() {
  var e2 = 0;
  return function(t2, n2, r2) {
    var i2 = h(t2, n2, r2);
    if (i2 == `punctuation`) {
      if (t2.current() == `(`) ++e2;
      else if (t2.current() == `)`) {
        if (e2 == 0) return t2.backUp(1), n2.tokenize.pop(), n2.tokenize[n2.tokenize.length - 1](t2, n2);
        --e2;
      }
    }
    return i2;
  };
}
function _(e2, t2, n2) {
  for (var r2 = e2.length == 1, i2, a2 = false; i2 = t2.peek(); ) if (a2) {
    if (t2.next(), i2 == `(`) return n2.tokenize.push(g()), `string`;
    a2 = false;
  } else if (t2.match(e2)) return n2.tokenize.pop(), `string`;
  else t2.next(), a2 = i2 == `\\`;
  return r2 && n2.tokenize.pop(), `string`;
}
function v(e2, t2) {
  for (var n2; n2 = e2.next(); ) if (n2 === `/` && e2.eat(`*`)) t2.tokenize.push(v);
  else if (n2 === `*` && e2.eat(`/`)) {
    t2.tokenize.pop();
    break;
  }
  return `comment`;
}
function y(e2, t2, n2) {
  this.prev = e2, this.align = t2, this.indented = n2;
}
function b(e2, t2) {
  var n2 = t2.match(/^\s*($|\/[\/\*]|[)}\]])/, false) ? null : t2.column() + 1;
  e2.context = new y(e2.context, n2, e2.indented);
}
function x(e2) {
  e2.context && (e2.context = (e2.indented = e2.context.indented, e2.context.prev));
}
const S = { name: `swift`, startState: function() {
  return { prev: null, context: null, indented: 0, tokenize: [] };
}, token: function(e2, t2) {
  var n2 = t2.prev;
  t2.prev = null;
  var r2 = (t2.tokenize[t2.tokenize.length - 1] || h)(e2, t2, n2);
  if (!r2 || r2 == `comment` ? t2.prev = n2 : t2.prev || (t2.prev = r2), r2 == `punctuation`) {
    var i2 = /[\(\[\{]|([\]\)\}])/.exec(e2.current());
    i2 && (i2[1] ? x : b)(t2, e2);
  }
  return r2;
}, indent: function(e2, t2, n2) {
  var r2 = e2.context;
  if (!r2) return 0;
  var i2 = /^[\]\}\)]/.test(t2);
  return r2.align == null ? r2.indented + (i2 ? 0 : n2.unit) : r2.align - (i2 ? 1 : 0);
}, languageData: { indentOnInput: /^\s*[\)\}\]]$/, commentTokens: { line: `//`, block: { open: `/*`, close: `*/` } }, closeBrackets: { brackets: [`(`, `[`, `{`, `'`, `"`, "`"] } } };
export {
  S as swift
};
