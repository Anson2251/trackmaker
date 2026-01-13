function e(e2) {
  for (var t2 = {}, n2 = e2.split(` `), r2 = 0; r2 < n2.length; ++r2) t2[n2[r2]] = true;
  return t2;
}
function t(e2, t2) {
  return t2.startOfLine ? (e2.skipToEnd(), `meta`) : false;
}
var n = e(`abs acos allnodes ascii asin asstring atan atan2 ave case choose choosen choosesets clustersize combine correlation cos cosh count covariance cron dataset dedup define denormalize distribute distributed distribution ebcdic enth error evaluate event eventextra eventname exists exp failcode failmessage fetch fromunicode getisvalid global graph group hash hash32 hash64 hashcrc hashmd5 having if index intformat isvalid iterate join keyunicode length library limit ln local log loop map matched matchlength matchposition matchtext matchunicode max merge mergejoin min nolocal nonempty normalize parse pipe power preload process project pull random range rank ranked realformat recordof regexfind regexreplace regroup rejected rollup round roundup row rowdiff sample set sin sinh sizeof soapcall sort sorted sqrt stepped stored sum table tan tanh thisnode topn tounicode transfer trim truncate typeof ungroup unicodeorder variance which workunit xmldecode xmlencode xmltext xmlunicode`), r = e(`apply assert build buildindex evaluate fail keydiff keypatch loadxml nothor notify output parallel sequential soapcall wait`), i = e(`__compressed__ all and any as atmost before beginc++ best between case const counter csv descend encrypt end endc++ endmacro except exclusive expire export extend false few first flat from full function group header heading hole ifblock import in interface joined keep keyed last left limit load local locale lookup macro many maxcount maxlength min skew module named nocase noroot noscan nosort not of only opt or outer overwrite packed partition penalty physicallength pipe quote record relationship repeat return right scan self separator service shared skew skip sql store terminator thor threshold token transform trim true type unicodeorder unsorted validate virtual whole wild within xml xpath`), a = e(`ascii big_endian boolean data decimal ebcdic integer pattern qstring real record rule set of string token udecimal unicode unsigned varstring varunicode`), o = e(`checkpoint deprecated failcode failmessage failure global independent onwarning persist priority recovery stored success wait when`), s = e(`catch class do else finally for if switch try while`), c = e(`true false null`), l = { "#": t }, u = /[+\-*&%=<>!?|\/]/, d;
function f(e2, t2) {
  var f2 = e2.next();
  if (l[f2]) {
    var h2 = l[f2](e2, t2);
    if (h2 !== false) return h2;
  }
  if (f2 == `"` || f2 == `'`) return t2.tokenize = p(f2), t2.tokenize(e2, t2);
  if (/[\[\]{}\(\),;\:\.]/.test(f2)) return d = f2, null;
  if (/\d/.test(f2)) return e2.eatWhile(/[\w\.]/), `number`;
  if (f2 == `/`) {
    if (e2.eat(`*`)) return t2.tokenize = m, m(e2, t2);
    if (e2.eat(`/`)) return e2.skipToEnd(), `comment`;
  }
  if (u.test(f2)) return e2.eatWhile(u), `operator`;
  e2.eatWhile(/[\w\$_]/);
  var g2 = e2.current().toLowerCase();
  if (n.propertyIsEnumerable(g2)) return s.propertyIsEnumerable(g2) && (d = `newstatement`), `keyword`;
  if (r.propertyIsEnumerable(g2)) return s.propertyIsEnumerable(g2) && (d = `newstatement`), `variable`;
  if (i.propertyIsEnumerable(g2)) return s.propertyIsEnumerable(g2) && (d = `newstatement`), `modifier`;
  if (a.propertyIsEnumerable(g2)) return s.propertyIsEnumerable(g2) && (d = `newstatement`), `type`;
  if (o.propertyIsEnumerable(g2)) return s.propertyIsEnumerable(g2) && (d = `newstatement`), `builtin`;
  for (var _2 = g2.length - 1; _2 >= 0 && (!isNaN(g2[_2]) || g2[_2] == `_`); ) --_2;
  if (_2 > 0) {
    var v2 = g2.substr(0, _2 + 1);
    if (a.propertyIsEnumerable(v2)) return s.propertyIsEnumerable(v2) && (d = `newstatement`), `type`;
  }
  return c.propertyIsEnumerable(g2) ? `atom` : null;
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
    return (a2 || !r2) && (n2.tokenize = f), `string`;
  };
}
function m(e2, t2) {
  for (var n2 = false, r2; r2 = e2.next(); ) {
    if (r2 == `/` && n2) {
      t2.tokenize = f;
      break;
    }
    n2 = r2 == `*`;
  }
  return `comment`;
}
function h(e2, t2, n2, r2, i2) {
  this.indented = e2, this.column = t2, this.type = n2, this.align = r2, this.prev = i2;
}
function g(e2, t2, n2) {
  return e2.context = new h(e2.indented, t2, n2, null, e2.context);
}
function _(e2) {
  var t2 = e2.context.type;
  return (t2 == `)` || t2 == `]` || t2 == `}`) && (e2.indented = e2.context.indented), e2.context = e2.context.prev;
}
const v = { name: `ecl`, startState: function(e2) {
  return { tokenize: null, context: new h(-e2, 0, `top`, false), indented: 0, startOfLine: true };
}, token: function(e2, t2) {
  var n2 = t2.context;
  if (e2.sol() && (n2.align ?? (n2.align = false), t2.indented = e2.indentation(), t2.startOfLine = true), e2.eatSpace()) return null;
  d = null;
  var r2 = (t2.tokenize || f)(e2, t2);
  if (r2 == `comment` || r2 == `meta`) return r2;
  if (n2.align ?? (n2.align = true), (d == `;` || d == `:`) && n2.type == `statement`) _(t2);
  else if (d == `{`) g(t2, e2.column(), `}`);
  else if (d == `[`) g(t2, e2.column(), `]`);
  else if (d == `(`) g(t2, e2.column(), `)`);
  else if (d == `}`) {
    for (; n2.type == `statement`; ) n2 = _(t2);
    for (n2.type == `}` && (n2 = _(t2)); n2.type == `statement`; ) n2 = _(t2);
  } else d == n2.type ? _(t2) : (n2.type == `}` || n2.type == `top` || n2.type == `statement` && d == `newstatement`) && g(t2, e2.column(), `statement`);
  return t2.startOfLine = false, r2;
}, indent: function(e2, t2, n2) {
  if (e2.tokenize != f && e2.tokenize != null) return 0;
  var r2 = e2.context, i2 = t2 && t2.charAt(0);
  r2.type == `statement` && i2 == `}` && (r2 = r2.prev);
  var a2 = i2 == r2.type;
  return r2.type == `statement` ? r2.indented + (i2 == `{` ? 0 : n2.unit) : r2.align ? r2.column + (a2 ? 0 : 1) : r2.indented + (a2 ? 0 : n2.unit);
}, languageData: { indentOnInput: /^\s*[{}]$/ } };
export {
  v as ecl
};
