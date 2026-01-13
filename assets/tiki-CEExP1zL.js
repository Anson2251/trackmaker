function e(e2, t2, r2) {
  return function(i2, a2) {
    for (; !i2.eol(); ) {
      if (i2.match(t2)) {
        a2.tokenize = n;
        break;
      }
      i2.next();
    }
    return r2 && (a2.tokenize = r2), e2;
  };
}
function t(e2) {
  return function(t2, r2) {
    for (; !t2.eol(); ) t2.next();
    return r2.tokenize = n, e2;
  };
}
function n(r2, i2) {
  function o2(e2) {
    return i2.tokenize = e2, e2(r2, i2);
  }
  var s2 = r2.sol(), c2 = r2.next();
  switch (c2) {
    case `{`:
      return r2.eat(`/`), r2.eatSpace(), r2.eatWhile(/[^\s\u00a0=\"\'\/?(}]/), i2.tokenize = a, `tag`;
    case `_`:
      if (r2.eat(`_`)) return o2(e(`strong`, `__`, n));
      break;
    case `'`:
      if (r2.eat(`'`)) return o2(e(`em`, `''`, n));
      break;
    case `(`:
      if (r2.eat(`(`)) return o2(e(`link`, `))`, n));
      break;
    case `[`:
      return o2(e(`url`, `]`, n));
    case `|`:
      if (r2.eat(`|`)) return o2(e(`comment`, `||`));
      break;
    case `-`:
      if (r2.eat(`=`)) return o2(e(`header string`, `=-`, n));
      if (r2.eat(`-`)) return o2(e(`error tw-deleted`, `--`, n));
      break;
    case `=`:
      if (r2.match(`==`)) return o2(e(`tw-underline`, `===`, n));
      break;
    case `:`:
      if (r2.eat(`:`)) return o2(e(`comment`, `::`));
      break;
    case `^`:
      return o2(e(`tw-box`, `^`));
    case `~`:
      if (r2.match(`np~`)) return o2(e(`meta`, `~/np~`));
      break;
  }
  if (s2) switch (c2) {
    case `!`:
      return r2.match(`!!!!!`) || r2.match(`!!!!`) || r2.match(`!!!`) || r2.match(`!!`), o2(t(`header string`));
    case `*`:
    case `#`:
    case `+`:
      return o2(t(`tw-listitem bracket`));
  }
  return null;
}
var r, i;
function a(e2, t2) {
  var r2 = e2.next(), a2 = e2.peek();
  return r2 == `}` ? (t2.tokenize = n, `tag`) : r2 == `(` || r2 == `)` ? `bracket` : r2 == `=` ? (i = `equals`, a2 == `>` && (e2.next(), a2 = e2.peek()), /[\'\"]/.test(a2) || (t2.tokenize = s()), `operator`) : /[\'\"]/.test(r2) ? (t2.tokenize = o(r2), t2.tokenize(e2, t2)) : (e2.eatWhile(/[^\s\u00a0=\"\'\/?]/), `keyword`);
}
function o(e2) {
  return function(t2, n2) {
    for (; !t2.eol(); ) if (t2.next() == e2) {
      n2.tokenize = a;
      break;
    }
    return `string`;
  };
}
function s() {
  return function(e2, t2) {
    for (; !e2.eol(); ) {
      var n2 = e2.next(), r2 = e2.peek();
      if (n2 == ` ` || n2 == `,` || /[ )}]/.test(r2)) {
        t2.tokenize = a;
        break;
      }
    }
    return `string`;
  };
}
var c, l;
function u() {
  for (var e2 = arguments.length - 1; e2 >= 0; e2--) c.cc.push(arguments[e2]);
}
function d() {
  return u.apply(null, arguments), true;
}
function f(e2, t2) {
  var n2 = c.context && c.context.noIndent;
  c.context = { prev: c.context, pluginName: e2, indent: c.indented, startOfLine: t2, noIndent: n2 };
}
function p() {
  c.context && (c.context = c.context.prev);
}
function m(e2) {
  if (e2 == `openPlugin`) return c.pluginName = r, d(_, h(c.startOfLine));
  if (e2 == `closePlugin`) {
    var t2 = false;
    return c.context ? (t2 = c.context.pluginName != r, p()) : t2 = true, t2 && (l = `error`), d(g(t2));
  } else if (e2 == `string`) return (!c.context || c.context.name != `!cdata`) && f(`!cdata`), c.tokenize == n && p(), d();
  else return d();
}
function h(e2) {
  return function(t2) {
    return t2 == `selfclosePlugin` || t2 == `endPlugin` || t2 == `endPlugin` && f(c.pluginName, e2), d();
  };
}
function g(e2) {
  return function(t2) {
    return e2 && (l = `error`), t2 == `endPlugin` ? d() : u();
  };
}
function _(e2) {
  return e2 == `keyword` ? (l = `attribute`, d(_)) : e2 == `equals` ? d(v, _) : u();
}
function v(e2) {
  return e2 == `keyword` ? (l = `string`, d()) : e2 == `string` ? d(y) : u();
}
function y(e2) {
  return e2 == `string` ? d(y) : u();
}
const b = { name: `tiki`, startState: function() {
  return { tokenize: n, cc: [], indented: 0, startOfLine: true, pluginName: null, context: null };
}, token: function(e2, t2) {
  if (e2.sol() && (t2.startOfLine = true, t2.indented = e2.indentation()), e2.eatSpace()) return null;
  l = i = r = null;
  var n2 = t2.tokenize(e2, t2);
  if ((n2 || i) && n2 != `comment`) for (c = t2; !(t2.cc.pop() || m)(i || n2); ) ;
  return t2.startOfLine = false, l || n2;
}, indent: function(e2, t2, n2) {
  var r2 = e2.context;
  if (r2 && r2.noIndent) return 0;
  for (r2 && /^{\//.test(t2) && (r2 = r2.prev); r2 && !r2.startOfLine; ) r2 = r2.prev;
  return r2 ? r2.indent + n2.unit : 0;
} };
export {
  b as tiki
};
