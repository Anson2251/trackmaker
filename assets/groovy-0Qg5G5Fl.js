function e(e2) {
  for (var t2 = {}, n2 = e2.split(` `), r2 = 0; r2 < n2.length; ++r2) t2[n2[r2]] = true;
  return t2;
}
var t = e(`abstract as assert boolean break byte case catch char class const continue def default do double else enum extends final finally float for goto if implements import in instanceof int interface long native new package private protected public return short static strictfp super switch synchronized threadsafe throw throws trait transient try void volatile while`), n = e(`catch class def do else enum finally for if interface switch trait try while`), r = e(`return break continue`), i = e(`null true false this`), a;
function o(e2, o2) {
  var c2 = e2.next();
  if (c2 == `"` || c2 == `'`) return s(c2, e2, o2);
  if (/[\[\]{}\(\),;\:\.]/.test(c2)) return a = c2, null;
  if (/\d/.test(c2)) return e2.eatWhile(/[\w\.]/), e2.eat(/eE/) && (e2.eat(/\+\-/), e2.eatWhile(/\d/)), `number`;
  if (c2 == `/`) {
    if (e2.eat(`*`)) return o2.tokenize.push(u), u(e2, o2);
    if (e2.eat(`/`)) return e2.skipToEnd(), `comment`;
    if (d(o2.lastToken, false)) return s(c2, e2, o2);
  }
  if (c2 == `-` && e2.eat(`>`)) return a = `->`, null;
  if (/[+\-*&%=<>!?|\/~]/.test(c2)) return e2.eatWhile(/[+\-*&%=<>|~]/), `operator`;
  if (e2.eatWhile(/[\w\$_]/), c2 == `@`) return e2.eatWhile(/[\w\$_\.]/), `meta`;
  if (o2.lastToken == `.`) return `property`;
  if (e2.eat(`:`)) return a = `proplabel`, `property`;
  var l2 = e2.current();
  return i.propertyIsEnumerable(l2) ? `atom` : t.propertyIsEnumerable(l2) ? (n.propertyIsEnumerable(l2) ? a = `newstatement` : r.propertyIsEnumerable(l2) && (a = `standalone`), `keyword`) : `variable`;
}
o.isBase = true;
function s(e2, t2, n2) {
  var r2 = false;
  if (e2 != `/` && t2.eat(e2)) if (t2.eat(e2)) r2 = true;
  else return `string`;
  function i2(t3, n3) {
    for (var i3 = false, a2, o2 = !r2; (a2 = t3.next()) != null; ) {
      if (a2 == e2 && !i3) {
        if (!r2) break;
        if (t3.match(e2 + e2)) {
          o2 = true;
          break;
        }
      }
      if (e2 == `"` && a2 == `$` && !i3) {
        if (t3.eat(`{`)) return n3.tokenize.push(c()), `string`;
        if (t3.match(/^\w/, false)) return n3.tokenize.push(l), `string`;
      }
      i3 = !i3 && a2 == `\\`;
    }
    return o2 && n3.tokenize.pop(), `string`;
  }
  return n2.tokenize.push(i2), i2(t2, n2);
}
function c() {
  var e2 = 1;
  function t2(t3, n2) {
    if (t3.peek() == `}`) {
      if (e2--, e2 == 0) return n2.tokenize.pop(), n2.tokenize[n2.tokenize.length - 1](t3, n2);
    } else t3.peek() == `{` && e2++;
    return o(t3, n2);
  }
  return t2.isBase = true, t2;
}
function l(e2, t2) {
  var n2 = e2.match(/^(\.|[\w\$_]+)/);
  return (!n2 || !e2.match(n2[0] == `.` ? /^[\w$_]/ : /^\./)) && t2.tokenize.pop(), n2 ? n2[0] == `.` ? null : `variable` : t2.tokenize[t2.tokenize.length - 1](e2, t2);
}
function u(e2, t2) {
  for (var n2 = false, r2; r2 = e2.next(); ) {
    if (r2 == `/` && n2) {
      t2.tokenize.pop();
      break;
    }
    n2 = r2 == `*`;
  }
  return `comment`;
}
function d(e2, t2) {
  return !e2 || e2 == `operator` || e2 == `->` || /[\.\[\{\(,;:]/.test(e2) || e2 == `newstatement` || e2 == `keyword` || e2 == `proplabel` || e2 == `standalone` && !t2;
}
function f(e2, t2, n2, r2, i2) {
  this.indented = e2, this.column = t2, this.type = n2, this.align = r2, this.prev = i2;
}
function p(e2, t2, n2) {
  return e2.context = new f(e2.indented, t2, n2, null, e2.context);
}
function m(e2) {
  var t2 = e2.context.type;
  return (t2 == `)` || t2 == `]` || t2 == `}`) && (e2.indented = e2.context.indented), e2.context = e2.context.prev;
}
const h = { name: `groovy`, startState: function(e2) {
  return { tokenize: [o], context: new f(-e2, 0, `top`, false), indented: 0, startOfLine: true, lastToken: null };
}, token: function(e2, t2) {
  var n2 = t2.context;
  if (e2.sol() && (n2.align ?? (n2.align = false), t2.indented = e2.indentation(), t2.startOfLine = true, n2.type == `statement` && !d(t2.lastToken, true) && (m(t2), n2 = t2.context)), e2.eatSpace()) return null;
  a = null;
  var r2 = t2.tokenize[t2.tokenize.length - 1](e2, t2);
  if (r2 == `comment`) return r2;
  if (n2.align ?? (n2.align = true), (a == `;` || a == `:`) && n2.type == `statement`) m(t2);
  else if (a == `->` && n2.type == `statement` && n2.prev.type == `}`) m(t2), t2.context.align = false;
  else if (a == `{`) p(t2, e2.column(), `}`);
  else if (a == `[`) p(t2, e2.column(), `]`);
  else if (a == `(`) p(t2, e2.column(), `)`);
  else if (a == `}`) {
    for (; n2.type == `statement`; ) n2 = m(t2);
    for (n2.type == `}` && (n2 = m(t2)); n2.type == `statement`; ) n2 = m(t2);
  } else a == n2.type ? m(t2) : (n2.type == `}` || n2.type == `top` || n2.type == `statement` && a == `newstatement`) && p(t2, e2.column(), `statement`);
  return t2.startOfLine = false, t2.lastToken = a || r2, r2;
}, indent: function(e2, t2, n2) {
  if (!e2.tokenize[e2.tokenize.length - 1].isBase) return null;
  var r2 = t2 && t2.charAt(0), i2 = e2.context;
  i2.type == `statement` && !d(e2.lastToken, true) && (i2 = i2.prev);
  var a2 = r2 == i2.type;
  return i2.type == `statement` ? i2.indented + (r2 == `{` ? 0 : n2.unit) : i2.align ? i2.column + (a2 ? 0 : 1) : i2.indented + (a2 ? 0 : n2.unit);
}, languageData: { indentOnInput: /^\s*[{}]$/, commentTokens: { line: `//`, block: { open: `/*`, close: `*/` } }, closeBrackets: { brackets: [`(`, `[`, `{`, `'`, `"`, `'''`, `"""`] } } };
export {
  h as groovy
};
