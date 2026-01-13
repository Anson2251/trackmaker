function e(e2, t2) {
  return RegExp((t2 ? `` : `^`) + `(?:` + e2.join(`|`) + `)` + (t2 ? `$` : `\\b`));
}
function t(e2, t2, n2) {
  return n2.tokenize.push(e2), e2(t2, n2);
}
var n = /^(?:[-+/%|&^]|\*\*?|[<>]{2})/, r = /^(?:[=!]~|===|<=>|[<>=!]=?|[|&]{2}|~)/, i = /^(?:\[\][?=]?)/, a = /^(?:\.(?:\.{2})?|->|[?:])/, o = /^[a-z_\u009F-\uFFFF][a-zA-Z0-9_\u009F-\uFFFF]*/, s = /^[A-Z_\u009F-\uFFFF][a-zA-Z0-9_\u009F-\uFFFF]*/, c = e(`abstract.alias.as.asm.begin.break.case.class.def.do.else.elsif.end.ensure.enum.extend.for.fun.if.include.instance_sizeof.lib.macro.module.next.of.out.pointerof.private.protected.rescue.return.require.select.sizeof.struct.super.then.type.typeof.uninitialized.union.unless.until.when.while.with.yield.__DIR__.__END_LINE__.__FILE__.__LINE__`.split(`.`)), l = e([`true`, `false`, `nil`, `self`]), u = e([`def`, `fun`, `macro`, `class`, `module`, `struct`, `lib`, `enum`, `union`, `do`, `for`]), d = e([`if`, `unless`, `case`, `while`, `until`, `begin`, `then`]), f = [`end`, `else`, `elsif`, `rescue`, `ensure`], p = e(f), m = [`\\)`, `\\}`, `\\]`], h = RegExp(`^(?:` + m.join(`|`) + `)$`), g = { def: S, fun: S, macro: x, class: C, module: C, struct: C, lib: C, enum: C, union: C }, _ = { "[": `]`, "{": `}`, "(": `)`, "<": `>` };
function v(e2, f2) {
  if (e2.eatSpace()) return null;
  if (f2.lastToken != `\\` && e2.match(`{%`, false)) return t(b(`%`, `%`), e2, f2);
  if (f2.lastToken != `\\` && e2.match(`{{`, false)) return t(b(`{`, `}`), e2, f2);
  if (e2.peek() == `#`) return e2.skipToEnd(), `comment`;
  var p2;
  if (e2.match(o)) return e2.eat(/[?!]/), p2 = e2.current(), e2.eat(`:`) ? `atom` : f2.lastToken == `.` ? `property` : c.test(p2) ? (u.test(p2) ? !(p2 == `fun` && f2.blocks.indexOf(`lib`) >= 0) && !(p2 == `def` && f2.lastToken == `abstract`) && (f2.blocks.push(p2), f2.currentIndent += 1) : (f2.lastStyle == `operator` || !f2.lastStyle) && d.test(p2) ? (f2.blocks.push(p2), f2.currentIndent += 1) : p2 == `end` && (f2.blocks.pop(), --f2.currentIndent), g.hasOwnProperty(p2) && f2.tokenize.push(g[p2]), `keyword`) : l.test(p2) ? `atom` : `variable`;
  if (e2.eat(`@`)) return e2.peek() == `[` ? t(y(`[`, `]`, `meta`), e2, f2) : (e2.eat(`@`), e2.match(o) || e2.match(s), `propertyName`);
  if (e2.match(s)) return `tag`;
  if (e2.eat(`:`)) return e2.eat(`"`) ? t(w(`"`, `atom`, false), e2, f2) : e2.match(o) || e2.match(s) || e2.match(n) || e2.match(r) || e2.match(i) ? `atom` : (e2.eat(`:`), `operator`);
  if (e2.eat(`"`)) return t(w(`"`, `string`, true), e2, f2);
  if (e2.peek() == `%`) {
    var m2 = `string`, h2 = true, v2;
    if (e2.match(`%r`)) m2 = `string.special`, v2 = e2.next();
    else if (e2.match(`%w`)) h2 = false, v2 = e2.next();
    else if (e2.match(`%q`)) h2 = false, v2 = e2.next();
    else if (v2 = e2.match(/^%([^\w\s=])/)) v2 = v2[1];
    else if (e2.match(/^%[a-zA-Z_\u009F-\uFFFF][\w\u009F-\uFFFF]*/)) return `meta`;
    else if (e2.eat(`%`)) return `operator`;
    return _.hasOwnProperty(v2) && (v2 = _[v2]), t(w(v2, m2, h2), e2, f2);
  }
  return (p2 = e2.match(/^<<-('?)([A-Z]\w*)\1/)) ? t(T(p2[2], !p2[1]), e2, f2) : e2.eat(`'`) ? (e2.match(/^(?:[^']|\\(?:[befnrtv0'"]|[0-7]{3}|u(?:[0-9a-fA-F]{4}|\{[0-9a-fA-F]{1,6}\})))/), e2.eat(`'`), `atom`) : e2.eat(`0`) ? (e2.eat(`x`) ? e2.match(/^[0-9a-fA-F_]+/) : e2.eat(`o`) ? e2.match(/^[0-7_]+/) : e2.eat(`b`) && e2.match(/^[01_]+/), `number`) : e2.eat(/^\d/) ? (e2.match(/^[\d_]*(?:\.[\d_]+)?(?:[eE][+-]?\d+)?/), `number`) : e2.match(n) ? (e2.eat(`=`), `operator`) : e2.match(r) || e2.match(a) ? `operator` : (p2 = e2.match(/[({[]/, false)) ? (p2 = p2[0], t(y(p2, _[p2], null), e2, f2)) : e2.eat(`\\`) ? (e2.next(), `meta`) : (e2.next(), null);
}
function y(e2, t2, n2, r2) {
  return function(i2, a2) {
    if (!r2 && i2.match(e2)) return a2.tokenize[a2.tokenize.length - 1] = y(e2, t2, n2, true), a2.currentIndent += 1, n2;
    var o2 = v(i2, a2);
    return i2.current() === t2 && (a2.tokenize.pop(), --a2.currentIndent, o2 = n2), o2;
  };
}
function b(e2, t2, n2) {
  return function(r2, i2) {
    return !n2 && r2.match(`{` + e2) ? (i2.currentIndent += 1, i2.tokenize[i2.tokenize.length - 1] = b(e2, t2, true), `meta`) : r2.match(t2 + `}`) ? (--i2.currentIndent, i2.tokenize.pop(), `meta`) : v(r2, i2);
  };
}
function x(e2, t2) {
  if (e2.eatSpace()) return null;
  var n2;
  if (n2 = e2.match(o)) {
    if (n2 == `def`) return `keyword`;
    e2.eat(/[?!]/);
  }
  return t2.tokenize.pop(), `def`;
}
function S(e2, t2) {
  return e2.eatSpace() ? null : (e2.match(o) ? e2.eat(/[!?]/) : e2.match(n) || e2.match(r) || e2.match(i), t2.tokenize.pop(), `def`);
}
function C(e2, t2) {
  return e2.eatSpace() ? null : (e2.match(s), t2.tokenize.pop(), `def`);
}
function w(e2, t2, n2) {
  return function(r2, i2) {
    for (var a2 = false; r2.peek(); ) if (a2) r2.next(), a2 = false;
    else {
      if (r2.match(`{%`, false)) return i2.tokenize.push(b(`%`, `%`)), t2;
      if (r2.match(`{{`, false)) return i2.tokenize.push(b(`{`, `}`)), t2;
      if (n2 && r2.match(`#{`, false)) return i2.tokenize.push(y(`#{`, `}`, `meta`)), t2;
      var o2 = r2.next();
      if (o2 == e2) return i2.tokenize.pop(), t2;
      a2 = n2 && o2 == `\\`;
    }
    return t2;
  };
}
function T(e2, t2) {
  return function(n2, r2) {
    if (n2.sol() && (n2.eatSpace(), n2.match(e2))) return r2.tokenize.pop(), `string`;
    for (var i2 = false; n2.peek(); ) if (i2) n2.next(), i2 = false;
    else {
      if (n2.match(`{%`, false)) return r2.tokenize.push(b(`%`, `%`)), `string`;
      if (n2.match(`{{`, false)) return r2.tokenize.push(b(`{`, `}`)), `string`;
      if (t2 && n2.match(`#{`, false)) return r2.tokenize.push(y(`#{`, `}`, `meta`)), `string`;
      i2 = n2.next() == `\\` && t2;
    }
    return `string`;
  };
}
const E = { name: `crystal`, startState: function() {
  return { tokenize: [v], currentIndent: 0, lastToken: null, lastStyle: null, blocks: [] };
}, token: function(e2, t2) {
  var n2 = t2.tokenize[t2.tokenize.length - 1](e2, t2), r2 = e2.current();
  return n2 && n2 != `comment` && (t2.lastToken = r2, t2.lastStyle = n2), n2;
}, indent: function(e2, t2, n2) {
  return t2 = t2.replace(/^\s*(?:\{%)?\s*|\s*(?:%\})?\s*$/g, ``), p.test(t2) || h.test(t2) ? n2.unit * (e2.currentIndent - 1) : n2.unit * e2.currentIndent;
}, languageData: { indentOnInput: e(m.concat(f), true), commentTokens: { line: `#` } } };
export {
  E as crystal
};
