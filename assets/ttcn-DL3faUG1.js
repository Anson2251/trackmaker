function e(e2) {
  for (var t2 = {}, n2 = e2.split(` `), r2 = 0; r2 < n2.length; ++r2) t2[n2[r2]] = true;
  return t2;
}
var t = { name: `ttcn`, keywords: e(`activate address alive all alt altstep and and4b any break case component const continue control deactivate display do else encode enumerated except exception execute extends extension external for from function goto group if import in infinity inout interleave label language length log match message mixed mod modifies module modulepar mtc noblock not not4b nowait of on optional or or4b out override param pattern port procedure record recursive rem repeat return runs select self sender set signature system template testcase to type union value valueof var variant while with xor xor4b`), builtin: e(`bit2hex bit2int bit2oct bit2str char2int char2oct encvalue decomp decvalue float2int float2str hex2bit hex2int hex2oct hex2str int2bit int2char int2float int2hex int2oct int2str int2unichar isbound ischosen ispresent isvalue lengthof log2str oct2bit oct2char oct2hex oct2int oct2str regexp replace rnd sizeof str2bit str2float str2hex str2int str2oct substr unichar2int unichar2char enum2int`), types: e(`anytype bitstring boolean char charstring default float hexstring integer objid octetstring universal verdicttype timer`), timerOps: e(`read running start stop timeout`), portOps: e(`call catch check clear getcall getreply halt raise receive reply send trigger`), configOps: e(`create connect disconnect done kill killed map unmap`), verdictOps: e(`getverdict setverdict`), sutOps: e(`action`), functionOps: e(`apply derefers refers`), verdictConsts: e(`error fail inconc none pass`), booleanConsts: e(`true false`), otherConsts: e(`null NULL omit`), visibilityModifiers: e(`private public friend`), templateMatch: e(`complement ifpresent subset superset permutation`), multiLineStrings: true }, n = [];
function r(e2) {
  if (e2) for (var t2 in e2) e2.hasOwnProperty(t2) && n.push(t2);
}
r(t.keywords), r(t.builtin), r(t.timerOps), r(t.portOps);
var i = t.keywords || {}, a = t.builtin || {}, o = t.timerOps || {}, s = t.portOps || {}, c = t.configOps || {}, l = t.verdictOps || {}, u = t.sutOps || {}, d = t.functionOps || {}, f = t.verdictConsts || {}, p = t.booleanConsts || {}, m = t.otherConsts || {}, h = t.types || {}, g = t.visibilityModifiers || {}, _ = t.templateMatch || {}, v = t.multiLineStrings, y = t.indentStatements !== false, b = /[+\-*&@=<>!\/]/, x;
function S(e2, t2) {
  var n2 = e2.next();
  if (n2 == `"` || n2 == `'`) return t2.tokenize = C(n2), t2.tokenize(e2, t2);
  if (/[\[\]{}\(\),;\\:\?\.]/.test(n2)) return x = n2, `punctuation`;
  if (n2 == `#`) return e2.skipToEnd(), `atom`;
  if (n2 == `%`) return e2.eatWhile(/\b/), `atom`;
  if (/\d/.test(n2)) return e2.eatWhile(/[\w\.]/), `number`;
  if (n2 == `/`) {
    if (e2.eat(`*`)) return t2.tokenize = w, w(e2, t2);
    if (e2.eat(`/`)) return e2.skipToEnd(), `comment`;
  }
  if (b.test(n2)) return n2 == `@` && (e2.match(`try`) || e2.match(`catch`) || e2.match(`lazy`)) ? `keyword` : (e2.eatWhile(b), `operator`);
  e2.eatWhile(/[\w\$_\xa1-\uffff]/);
  var r2 = e2.current();
  return i.propertyIsEnumerable(r2) ? `keyword` : a.propertyIsEnumerable(r2) ? `builtin` : o.propertyIsEnumerable(r2) || c.propertyIsEnumerable(r2) || l.propertyIsEnumerable(r2) || s.propertyIsEnumerable(r2) || u.propertyIsEnumerable(r2) || d.propertyIsEnumerable(r2) ? `def` : f.propertyIsEnumerable(r2) || p.propertyIsEnumerable(r2) || m.propertyIsEnumerable(r2) ? `string` : h.propertyIsEnumerable(r2) ? `typeName.standard` : g.propertyIsEnumerable(r2) ? `modifier` : _.propertyIsEnumerable(r2) ? `atom` : `variable`;
}
function C(e2) {
  return function(t2, n2) {
    for (var r2 = false, i2, a2 = false; (i2 = t2.next()) != null; ) {
      if (i2 == e2 && !r2) {
        var o2 = t2.peek();
        o2 && (o2 = o2.toLowerCase(), (o2 == `b` || o2 == `h` || o2 == `o`) && t2.next()), a2 = true;
        break;
      }
      r2 = !r2 && i2 == `\\`;
    }
    return (a2 || !(r2 || v)) && (n2.tokenize = null), `string`;
  };
}
function w(e2, t2) {
  for (var n2 = false, r2; r2 = e2.next(); ) {
    if (r2 == `/` && n2) {
      t2.tokenize = null;
      break;
    }
    n2 = r2 == `*`;
  }
  return `comment`;
}
function T(e2, t2, n2, r2, i2) {
  this.indented = e2, this.column = t2, this.type = n2, this.align = r2, this.prev = i2;
}
function E(e2, t2, n2) {
  var r2 = e2.indented;
  return e2.context && e2.context.type == `statement` && (r2 = e2.context.indented), e2.context = new T(r2, t2, n2, null, e2.context);
}
function D(e2) {
  var t2 = e2.context.type;
  return (t2 == `)` || t2 == `]` || t2 == `}`) && (e2.indented = e2.context.indented), e2.context = e2.context.prev;
}
const O = { name: `ttcn`, startState: function() {
  return { tokenize: null, context: new T(0, 0, `top`, false), indented: 0, startOfLine: true };
}, token: function(e2, t2) {
  var n2 = t2.context;
  if (e2.sol() && (n2.align ?? (n2.align = false), t2.indented = e2.indentation(), t2.startOfLine = true), e2.eatSpace()) return null;
  x = null;
  var r2 = (t2.tokenize || S)(e2, t2);
  if (r2 == `comment`) return r2;
  if (n2.align ?? (n2.align = true), (x == `;` || x == `:` || x == `,`) && n2.type == `statement`) D(t2);
  else if (x == `{`) E(t2, e2.column(), `}`);
  else if (x == `[`) E(t2, e2.column(), `]`);
  else if (x == `(`) E(t2, e2.column(), `)`);
  else if (x == `}`) {
    for (; n2.type == `statement`; ) n2 = D(t2);
    for (n2.type == `}` && (n2 = D(t2)); n2.type == `statement`; ) n2 = D(t2);
  } else x == n2.type ? D(t2) : y && ((n2.type == `}` || n2.type == `top`) && x != `;` || n2.type == `statement` && x == `newstatement`) && E(t2, e2.column(), `statement`);
  return t2.startOfLine = false, r2;
}, languageData: { indentOnInput: /^\s*[{}]$/, commentTokens: { line: `//`, block: { open: `/*`, close: `*/` } }, autocomplete: n } };
export {
  O as ttcn
};
