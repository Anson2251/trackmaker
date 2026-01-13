var e = `error`;
function t(e2) {
  return RegExp(`^((` + e2.join(`)|(`) + `))\\b`);
}
var n = /^(?:->|=>|\+[+=]?|-[\-=]?|\*[\*=]?|\/[\/=]?|[=!]=|<[><]?=?|>>?=?|%=?|&=?|\|=?|\^=?|\~|!|\?|(or|and|\|\||&&|\?)=)/, r = /^(?:[()\[\]{},:`=;]|\.\.?\.?)/, i = /^[_A-Za-z$][_A-Za-z$0-9]*/, a = /^@[_A-Za-z$][_A-Za-z$0-9]*/, o = t([`and`, `or`, `not`, `is`, `isnt`, `in`, `instanceof`, `typeof`]), s = [`for`, `while`, `loop`, `if`, `unless`, `else`, `switch`, `try`, `catch`, `finally`, `class`], c = t(s.concat([`break`, `by`, `continue`, `debugger`, `delete`, `do`, `in`, `of`, `new`, `return`, `then`, `this`, `@`, `throw`, `when`, `until`, `extends`]));
s = t(s);
var l = /^('{3}|\"{3}|['\"])/, u = /^(\/{3}|\/)/, d = t([`Infinity`, `NaN`, `undefined`, `null`, `true`, `false`, `on`, `off`, `yes`, `no`]);
function f(t2, s2) {
  if (t2.sol()) {
    s2.scope.align === null && (s2.scope.align = false);
    var f2 = s2.scope.offset;
    if (t2.eatSpace()) {
      var h2 = t2.indentation();
      return h2 > f2 && s2.scope.type == `coffee` ? `indent` : h2 < f2 ? `dedent` : null;
    } else f2 > 0 && g(t2, s2);
  }
  if (t2.eatSpace()) return null;
  var _2 = t2.peek();
  if (t2.match(`####`)) return t2.skipToEnd(), `comment`;
  if (t2.match(`###`)) return s2.tokenize = m, s2.tokenize(t2, s2);
  if (_2 === `#`) return t2.skipToEnd(), `comment`;
  if (t2.match(/^-?[0-9\.]/, false)) {
    var v2 = false;
    if (t2.match(/^-?\d*\.\d+(e[\+\-]?\d+)?/i) && (v2 = true), t2.match(/^-?\d+\.\d*/) && (v2 = true), t2.match(/^-?\.\d+/) && (v2 = true), v2) return t2.peek() == `.` && t2.backUp(1), `number`;
    var y = false;
    if (t2.match(/^-?0x[0-9a-f]+/i) && (y = true), t2.match(/^-?[1-9]\d*(e[\+\-]?\d+)?/) && (y = true), t2.match(/^-?0(?![\dx])/i) && (y = true), y) return `number`;
  }
  if (t2.match(l)) return s2.tokenize = p(t2.current(), false, `string`), s2.tokenize(t2, s2);
  if (t2.match(u)) {
    if (t2.current() != `/` || t2.match(/^.*\//, false)) return s2.tokenize = p(t2.current(), true, `string.special`), s2.tokenize(t2, s2);
    t2.backUp(1);
  }
  return t2.match(n) || t2.match(o) ? `operator` : t2.match(r) ? `punctuation` : t2.match(d) ? `atom` : t2.match(a) || s2.prop && t2.match(i) ? `property` : t2.match(c) ? `keyword` : t2.match(i) ? `variable` : (t2.next(), e);
}
function p(e2, t2, n2) {
  return function(r2, i2) {
    for (; !r2.eol(); ) if (r2.eatWhile(/[^'"\/\\]/), r2.eat(`\\`)) {
      if (r2.next(), t2 && r2.eol()) return n2;
    } else if (r2.match(e2)) return i2.tokenize = f, n2;
    else r2.eat(/['"\/]/);
    return t2 && (i2.tokenize = f), n2;
  };
}
function m(e2, t2) {
  for (; !e2.eol(); ) {
    if (e2.eatWhile(/[^#]/), e2.match(`###`)) {
      t2.tokenize = f;
      break;
    }
    e2.eatWhile(`#`);
  }
  return `comment`;
}
function h(e2, t2, n2 = `coffee`) {
  for (var r2 = 0, i2 = false, a2 = null, o2 = t2.scope; o2; o2 = o2.prev) if (o2.type === `coffee` || o2.type == `}`) {
    r2 = o2.offset + e2.indentUnit;
    break;
  }
  n2 === `coffee` ? t2.scope.align && (t2.scope.align = false) : (i2 = null, a2 = e2.column() + e2.current().length), t2.scope = { offset: r2, type: n2, prev: t2.scope, align: i2, alignOffset: a2 };
}
function g(e2, t2) {
  if (t2.scope.prev) if (t2.scope.type === `coffee`) {
    for (var n2 = e2.indentation(), r2 = false, i2 = t2.scope; i2; i2 = i2.prev) if (n2 === i2.offset) {
      r2 = true;
      break;
    }
    if (!r2) return true;
    for (; t2.scope.prev && t2.scope.offset !== n2; ) t2.scope = t2.scope.prev;
    return false;
  } else return t2.scope = t2.scope.prev, false;
}
function _(t2, n2) {
  var r2 = n2.tokenize(t2, n2), i2 = t2.current();
  i2 === `return` && (n2.dedent = true), ((i2 === `->` || i2 === `=>`) && t2.eol() || r2 === `indent`) && h(t2, n2);
  var a2 = `[({`.indexOf(i2);
  if (a2 !== -1 && h(t2, n2, `])}`.slice(a2, a2 + 1)), s.exec(i2) && h(t2, n2), i2 == `then` && g(t2, n2), r2 === `dedent` && g(t2, n2)) return e;
  if (a2 = `])}`.indexOf(i2), a2 !== -1) {
    for (; n2.scope.type == `coffee` && n2.scope.prev; ) n2.scope = n2.scope.prev;
    n2.scope.type == i2 && (n2.scope = n2.scope.prev);
  }
  return n2.dedent && t2.eol() && (n2.scope.type == `coffee` && n2.scope.prev && (n2.scope = n2.scope.prev), n2.dedent = false), r2 == `indent` || r2 == `dedent` ? null : r2;
}
const v = { name: `coffeescript`, startState: function() {
  return { tokenize: f, scope: { offset: 0, type: `coffee`, prev: null, align: false }, prop: false, dedent: 0 };
}, token: function(e2, t2) {
  var n2 = t2.scope.align === null && t2.scope;
  n2 && e2.sol() && (n2.align = false);
  var r2 = _(e2, t2);
  return r2 && r2 != `comment` && (n2 && (n2.align = true), t2.prop = r2 == `punctuation` && e2.current() == `.`), r2;
}, indent: function(e2, t2) {
  if (e2.tokenize != f) return 0;
  var n2 = e2.scope, r2 = t2 && `])}`.indexOf(t2.charAt(0)) > -1;
  if (r2) for (; n2.type == `coffee` && n2.prev; ) n2 = n2.prev;
  var i2 = r2 && n2.type === t2.charAt(0);
  return n2.align ? n2.alignOffset - (i2 ? 1 : 0) : (i2 ? n2.prev : n2).offset;
}, languageData: { commentTokens: { line: `#` } } };
export {
  v as coffeeScript
};
