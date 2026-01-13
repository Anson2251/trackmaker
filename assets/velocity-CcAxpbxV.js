function e(e2) {
  for (var t2 = {}, n2 = e2.split(` `), r2 = 0; r2 < n2.length; ++r2) t2[n2[r2]] = true;
  return t2;
}
var t = e(`#end #else #break #stop #[[ #]] #{end} #{else} #{break} #{stop}`), n = e(`#if #elseif #foreach #set #include #parse #macro #define #evaluate #{if} #{elseif} #{foreach} #{set} #{include} #{parse} #{macro} #{define} #{evaluate}`), r = e(`$foreach.count $foreach.hasNext $foreach.first $foreach.last $foreach.topmost $foreach.parent.count $foreach.parent.hasNext $foreach.parent.first $foreach.parent.last $foreach.parent $velocityCount $!bodyContent $bodyContent`), i = /[+\-*&%=<>!?:\/|]/;
function a(e2, t2, n2) {
  return t2.tokenize = n2, n2(e2, t2);
}
function o(e2, o2) {
  var u2 = o2.beforeParams;
  o2.beforeParams = false;
  var d = e2.next();
  if (d == `'` && !o2.inString && o2.inParams) return o2.lastTokenWasBuiltin = false, a(e2, o2, s(d));
  if (d == `"`) {
    if (o2.lastTokenWasBuiltin = false, o2.inString) return o2.inString = false, `string`;
    if (o2.inParams) return a(e2, o2, s(d));
  } else if (/[\[\]{}\(\),;\.]/.test(d)) return d == `(` && u2 ? o2.inParams = true : d == `)` && (o2.inParams = false, o2.lastTokenWasBuiltin = true), null;
  else if (/\d/.test(d)) return o2.lastTokenWasBuiltin = false, e2.eatWhile(/[\w\.]/), `number`;
  else if (d == `#` && e2.eat(`*`)) return o2.lastTokenWasBuiltin = false, a(e2, o2, c);
  else if (d == `#` && e2.match(/ *\[ *\[/)) return o2.lastTokenWasBuiltin = false, a(e2, o2, l);
  else if (d == `#` && e2.eat(`#`)) return o2.lastTokenWasBuiltin = false, e2.skipToEnd(), `comment`;
  else if (d == `$`) return e2.eat(`!`), e2.eatWhile(/[\w\d\$_\.{}-]/), r && r.propertyIsEnumerable(e2.current()) ? `keyword` : (o2.lastTokenWasBuiltin = true, o2.beforeParams = true, `builtin`);
  else if (i.test(d)) return o2.lastTokenWasBuiltin = false, e2.eatWhile(i), `operator`;
  else {
    e2.eatWhile(/[\w\$_{}@]/);
    var f = e2.current();
    return t && t.propertyIsEnumerable(f) ? `keyword` : n && n.propertyIsEnumerable(f) || e2.current().match(/^#@?[a-z0-9_]+ *$/i) && e2.peek() == `(` && !(n && n.propertyIsEnumerable(f.toLowerCase())) ? (o2.beforeParams = true, o2.lastTokenWasBuiltin = false, `keyword`) : o2.inString ? (o2.lastTokenWasBuiltin = false, `string`) : e2.pos > f.length && e2.string.charAt(e2.pos - f.length - 1) == `.` && o2.lastTokenWasBuiltin ? `builtin` : (o2.lastTokenWasBuiltin = false, null);
  }
}
function s(e2) {
  return function(t2, n2) {
    for (var r2 = false, i2, a2 = false; (i2 = t2.next()) != null; ) {
      if (i2 == e2 && !r2) {
        a2 = true;
        break;
      }
      if (e2 == `"` && t2.peek() == `$` && !r2) {
        n2.inString = true, a2 = true;
        break;
      }
      r2 = !r2 && i2 == `\\`;
    }
    return a2 && (n2.tokenize = o), `string`;
  };
}
function c(e2, t2) {
  for (var n2 = false, r2; r2 = e2.next(); ) {
    if (r2 == `#` && n2) {
      t2.tokenize = o;
      break;
    }
    n2 = r2 == `*`;
  }
  return `comment`;
}
function l(e2, t2) {
  for (var n2 = 0, r2; r2 = e2.next(); ) {
    if (r2 == `#` && n2 == 2) {
      t2.tokenize = o;
      break;
    }
    r2 == `]` ? n2++ : r2 != ` ` && (n2 = 0);
  }
  return `meta`;
}
const u = { name: `velocity`, startState: function() {
  return { tokenize: o, beforeParams: false, inParams: false, inString: false, lastTokenWasBuiltin: false };
}, token: function(e2, t2) {
  return e2.eatSpace() ? null : t2.tokenize(e2, t2);
}, languageData: { commentTokens: { line: `##`, block: { open: `#*`, close: `*#` } } } };
export {
  u as velocity
};
