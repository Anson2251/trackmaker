function e(e2, t2, n2) {
  return t2(n2), n2(e2, t2);
}
var t = /[a-z]/, n = /[A-Z]/, r = /[a-zA-Z0-9_]/, i = /[0-9]/, a = /[0-9A-Fa-f]/, o = /[-&*+.\\/<>=?^|:]/, s = /[(),[\]{}]/, c = /[ \v\f]/;
function l() {
  return function(l2, h2) {
    if (l2.eatWhile(c)) return null;
    var g2 = l2.next();
    if (s.test(g2)) return g2 === `{` && l2.eat(`-`) ? e(l2, h2, u(1)) : g2 === `[` && l2.match(`glsl|`) ? e(l2, h2, m) : `builtin`;
    if (g2 === `'`) return e(l2, h2, p);
    if (g2 === `"`) return l2.eat(`"`) ? l2.eat(`"`) ? e(l2, h2, d) : `string` : e(l2, h2, f);
    if (n.test(g2)) return l2.eatWhile(r), `type`;
    if (t.test(g2)) {
      var _ = l2.pos === 1;
      return l2.eatWhile(r), _ ? `def` : `variable`;
    }
    if (i.test(g2)) {
      if (g2 === `0`) {
        if (l2.eat(/[xX]/)) return l2.eatWhile(a), `number`;
      } else l2.eatWhile(i);
      return l2.eat(`.`) && l2.eatWhile(i), l2.eat(/[eE]/) && (l2.eat(/[-+]/), l2.eatWhile(i)), `number`;
    }
    return o.test(g2) ? g2 === `-` && l2.eat(`-`) ? (l2.skipToEnd(), `comment`) : (l2.eatWhile(o), `keyword`) : g2 === `_` ? `keyword` : `error`;
  };
}
function u(e2) {
  return e2 == 0 ? l() : function(t2, n2) {
    for (; !t2.eol(); ) {
      var r2 = t2.next();
      if (r2 == `{` && t2.eat(`-`)) ++e2;
      else if (r2 == `-` && t2.eat(`}`) && (--e2, e2 === 0)) return n2(l()), `comment`;
    }
    return n2(u(e2)), `comment`;
  };
}
function d(e2, t2) {
  for (; !e2.eol(); ) if (e2.next() === `"` && e2.eat(`"`) && e2.eat(`"`)) return t2(l()), `string`;
  return `string`;
}
function f(e2, t2) {
  for (; e2.skipTo(`\\"`); ) e2.next(), e2.next();
  return e2.skipTo(`"`) ? (e2.next(), t2(l()), `string`) : (e2.skipToEnd(), t2(l()), `error`);
}
function p(e2, t2) {
  for (; e2.skipTo(`\\'`); ) e2.next(), e2.next();
  return e2.skipTo(`'`) ? (e2.next(), t2(l()), `string`) : (e2.skipToEnd(), t2(l()), `error`);
}
function m(e2, t2) {
  for (; !e2.eol(); ) if (e2.next() === `|` && e2.eat(`]`)) return t2(l()), `string`;
  return `string`;
}
var h = { case: 1, of: 1, as: 1, if: 1, then: 1, else: 1, let: 1, in: 1, type: 1, alias: 1, module: 1, where: 1, import: 1, exposing: 1, port: 1 };
const g = { name: `elm`, startState: function() {
  return { f: l() };
}, copyState: function(e2) {
  return { f: e2.f };
}, token: function(e2, t2) {
  var n2 = t2.f(e2, function(e3) {
    t2.f = e3;
  }), r2 = e2.current();
  return h.hasOwnProperty(r2) ? `keyword` : n2;
}, languageData: { commentTokens: { line: `--` } } };
export {
  g as elm
};
