function e(e2) {
  for (var t2 = {}, n2 = e2.split(` `), r2 = 0; r2 < n2.length; ++r2) t2[n2[r2]] = true;
  return t2;
}
var t = e(`Tcl safe after append array auto_execok auto_import auto_load auto_mkindex auto_mkindex_old auto_qualify auto_reset bgerror binary break catch cd close concat continue dde eof encoding error eval exec exit expr fblocked fconfigure fcopy file fileevent filename filename flush for foreach format gets glob global history http if incr info interp join lappend lindex linsert list llength load lrange lreplace lsearch lset lsort memory msgcat namespace open package parray pid pkg::create pkg_mkIndex proc puts pwd re_syntax read regex regexp registry regsub rename resource return scan seek set socket source split string subst switch tcl_endOfWord tcl_findLibrary tcl_startOfNextWord tcl_wordBreakAfter tcl_startOfPreviousWord tcl_wordBreakBefore tcltest tclvars tell time trace unknown unset update uplevel upvar variable vwait`), n = e(`if elseif else and not or eq ne in ni for foreach while switch`), r = /[+\-*&%=<>!?^\/\|]/;
function i(e2, t2, n2) {
  return t2.tokenize = n2, n2(e2, t2);
}
function a(e2, a2) {
  var l2 = a2.beforeParams;
  a2.beforeParams = false;
  var u = e2.next();
  if ((u == `"` || u == `'`) && a2.inParams) return i(e2, a2, o(u));
  if (/[\[\]{}\(\),;\.]/.test(u)) return u == `(` && l2 ? a2.inParams = true : u == `)` && (a2.inParams = false), null;
  if (/\d/.test(u)) return e2.eatWhile(/[\w\.]/), `number`;
  if (u == `#`) return e2.eat(`*`) ? i(e2, a2, s) : u == `#` && e2.match(/ *\[ *\[/) ? i(e2, a2, c) : (e2.skipToEnd(), `comment`);
  if (u == `"`) return e2.skipTo(/"/), `comment`;
  if (u == `$`) return e2.eatWhile(/[$_a-z0-9A-Z\.{:]/), e2.eatWhile(/}/), a2.beforeParams = true, `builtin`;
  if (r.test(u)) return e2.eatWhile(r), `comment`;
  e2.eatWhile(/[\w\$_{}\xa1-\uffff]/);
  var d = e2.current().toLowerCase();
  return t && t.propertyIsEnumerable(d) ? `keyword` : n && n.propertyIsEnumerable(d) ? (a2.beforeParams = true, `keyword`) : null;
}
function o(e2) {
  return function(t2, n2) {
    for (var r2 = false, i2, o2 = false; (i2 = t2.next()) != null; ) {
      if (i2 == e2 && !r2) {
        o2 = true;
        break;
      }
      r2 = !r2 && i2 == `\\`;
    }
    return o2 && (n2.tokenize = a), `string`;
  };
}
function s(e2, t2) {
  for (var n2 = false, r2; r2 = e2.next(); ) {
    if (r2 == `#` && n2) {
      t2.tokenize = a;
      break;
    }
    n2 = r2 == `*`;
  }
  return `comment`;
}
function c(e2, t2) {
  for (var n2 = 0, r2; r2 = e2.next(); ) {
    if (r2 == `#` && n2 == 2) {
      t2.tokenize = a;
      break;
    }
    r2 == `]` ? n2++ : r2 != ` ` && (n2 = 0);
  }
  return `meta`;
}
const l = { name: `tcl`, startState: function() {
  return { tokenize: a, beforeParams: false, inParams: false };
}, token: function(e2, t2) {
  return e2.eatSpace() ? null : t2.tokenize(e2, t2);
}, languageData: { commentTokens: { line: `#` } } };
export {
  l as tcl
};
