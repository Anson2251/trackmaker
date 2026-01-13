function e(e2) {
  for (var t2 = {}, n2 = e2.split(` `), r2 = 0; r2 < n2.length; ++r2) t2[n2[r2]] = true;
  return t2;
}
var t = `body catch class do else enum for foreach foreach_reverse if in interface mixin out scope struct switch try union unittest version while with`, n = { keywords: e(`abstract alias align asm assert auto break case cast cdouble cent cfloat const continue debug default delegate delete deprecated export extern final finally function goto immutable import inout invariant is lazy macro module new nothrow override package pragma private protected public pure ref return shared short static super synchronized template this throw typedef typeid typeof volatile __FILE__ __LINE__ __gshared __traits __vector __parameters ` + t), blockKeywords: e(t), builtin: e(`bool byte char creal dchar double float idouble ifloat int ireal long real short ubyte ucent uint ulong ushort wchar wstring void size_t sizediff_t`), atoms: e(`exit failure success true false null`), hooks: { "@": function(e2, t2) {
  return e2.eatWhile(/[\w\$_]/), `meta`;
} } }, r = n.statementIndentUnit, i = n.keywords, a = n.builtin, o = n.blockKeywords, s = n.atoms, c = n.hooks, l = n.multiLineStrings, u = /[+\-*&%=<>!?|\/]/, d;
function f(e2, t2) {
  var n2 = e2.next();
  if (c[n2]) {
    var r2 = c[n2](e2, t2);
    if (r2 !== false) return r2;
  }
  if (n2 == `"` || n2 == `'` || n2 == "`") return t2.tokenize = p(n2), t2.tokenize(e2, t2);
  if (/[\[\]{}\(\),;\:\.]/.test(n2)) return d = n2, null;
  if (/\d/.test(n2)) return e2.eatWhile(/[\w\.]/), `number`;
  if (n2 == `/`) {
    if (e2.eat(`+`)) return t2.tokenize = h, h(e2, t2);
    if (e2.eat(`*`)) return t2.tokenize = m, m(e2, t2);
    if (e2.eat(`/`)) return e2.skipToEnd(), `comment`;
  }
  if (u.test(n2)) return e2.eatWhile(u), `operator`;
  e2.eatWhile(/[\w\$_\xa1-\uffff]/);
  var l2 = e2.current();
  return i.propertyIsEnumerable(l2) ? (o.propertyIsEnumerable(l2) && (d = `newstatement`), `keyword`) : a.propertyIsEnumerable(l2) ? (o.propertyIsEnumerable(l2) && (d = `newstatement`), `builtin`) : s.propertyIsEnumerable(l2) ? `atom` : `variable`;
}
function p(e2) {
  return function(t2, n2) {
    for (var r2 = false, i2, a2 = false; (i2 = t2.next()) != null; ) {
      if (i2 == e2 && !r2) {
        a2 = true;
        break;
      }
      r2 = !r2 && i2 == `\\`;
    }
    return (a2 || !(r2 || l)) && (n2.tokenize = null), `string`;
  };
}
function m(e2, t2) {
  for (var n2 = false, r2; r2 = e2.next(); ) {
    if (r2 == `/` && n2) {
      t2.tokenize = null;
      break;
    }
    n2 = r2 == `*`;
  }
  return `comment`;
}
function h(e2, t2) {
  for (var n2 = false, r2; r2 = e2.next(); ) {
    if (r2 == `/` && n2) {
      t2.tokenize = null;
      break;
    }
    n2 = r2 == `+`;
  }
  return `comment`;
}
function g(e2, t2, n2, r2, i2) {
  this.indented = e2, this.column = t2, this.type = n2, this.align = r2, this.prev = i2;
}
function _(e2, t2, n2) {
  var r2 = e2.indented;
  return e2.context && e2.context.type == `statement` && (r2 = e2.context.indented), e2.context = new g(r2, t2, n2, null, e2.context);
}
function v(e2) {
  var t2 = e2.context.type;
  return (t2 == `)` || t2 == `]` || t2 == `}`) && (e2.indented = e2.context.indented), e2.context = e2.context.prev;
}
const y = { name: `d`, startState: function(e2) {
  return { tokenize: null, context: new g(-e2, 0, `top`, false), indented: 0, startOfLine: true };
}, token: function(e2, t2) {
  var n2 = t2.context;
  if (e2.sol() && (n2.align ?? (n2.align = false), t2.indented = e2.indentation(), t2.startOfLine = true), e2.eatSpace()) return null;
  d = null;
  var r2 = (t2.tokenize || f)(e2, t2);
  if (r2 == `comment` || r2 == `meta`) return r2;
  if (n2.align ?? (n2.align = true), (d == `;` || d == `:` || d == `,`) && n2.type == `statement`) v(t2);
  else if (d == `{`) _(t2, e2.column(), `}`);
  else if (d == `[`) _(t2, e2.column(), `]`);
  else if (d == `(`) _(t2, e2.column(), `)`);
  else if (d == `}`) {
    for (; n2.type == `statement`; ) n2 = v(t2);
    for (n2.type == `}` && (n2 = v(t2)); n2.type == `statement`; ) n2 = v(t2);
  } else d == n2.type ? v(t2) : ((n2.type == `}` || n2.type == `top`) && d != `;` || n2.type == `statement` && d == `newstatement`) && _(t2, e2.column(), `statement`);
  return t2.startOfLine = false, r2;
}, indent: function(e2, t2, n2) {
  if (e2.tokenize != f && e2.tokenize != null) return null;
  var i2 = e2.context, a2 = t2 && t2.charAt(0);
  i2.type == `statement` && a2 == `}` && (i2 = i2.prev);
  var o2 = a2 == i2.type;
  return i2.type == `statement` ? i2.indented + (a2 == `{` ? 0 : r || n2.unit) : i2.align ? i2.column + (o2 ? 0 : 1) : i2.indented + (o2 ? 0 : n2.unit);
}, languageData: { indentOnInput: /^\s*[{}]$/, commentTokens: { line: `//`, block: { open: `/*`, close: `*/` } } } };
export {
  y as d
};
