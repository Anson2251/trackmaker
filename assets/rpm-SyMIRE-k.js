var e = /^-+$/, t = /^(Mon|Tue|Wed|Thu|Fri|Sat|Sun) (Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec)  ?\d{1,2} \d{2}:\d{2}(:\d{2})? [A-Z]{3,4} \d{4} - /, n = /^[\w+.-]+@[\w.-]+/;
const r = { name: `rpmchanges`, token: function(r2) {
  return r2.sol() && (r2.match(e) || r2.match(t)) ? `tag` : r2.match(n) ? `string` : (r2.next(), null);
} };
var i = /^(i386|i586|i686|x86_64|ppc64le|ppc64|ppc|ia64|s390x|s390|sparc64|sparcv9|sparc|noarch|alphaev6|alpha|hppa|mipsel)/, a = /^[a-zA-Z0-9()]+:/, o = /^%(debug_package|package|description|prep|build|install|files|clean|changelog|preinstall|preun|postinstall|postun|pretrans|posttrans|pre|post|triggerin|triggerun|verifyscript|check|triggerpostun|triggerprein|trigger)/, s = /^%(ifnarch|ifarch|if)/, c = /^%(else|endif)/, l = /^(\!|\?|\<\=|\<|\>\=|\>|\=\=|\&\&|\|\|)/;
const u = { name: `rpmspec`, startState: function() {
  return { controlFlow: false, macroParameters: false, section: false };
}, token: function(e2, t2) {
  if (e2.peek() == `#`) return e2.skipToEnd(), `comment`;
  if (e2.sol()) {
    if (e2.match(a)) return `header`;
    if (e2.match(o)) return `atom`;
  }
  if (e2.match(/^\$\w+/) || e2.match(/^\$\{\w+\}/)) return `def`;
  if (e2.match(c)) return `keyword`;
  if (e2.match(s)) return t2.controlFlow = true, `keyword`;
  if (t2.controlFlow) {
    if (e2.match(l)) return `operator`;
    if (e2.match(/^(\d+)/)) return `number`;
    e2.eol() && (t2.controlFlow = false);
  }
  if (e2.match(i)) return e2.eol() && (t2.controlFlow = false), `number`;
  if (e2.match(/^%[\w]+/)) return e2.match(`(`) && (t2.macroParameters = true), `keyword`;
  if (t2.macroParameters) {
    if (e2.match(/^\d+/)) return `number`;
    if (e2.match(`)`)) return t2.macroParameters = false, `keyword`;
  }
  return e2.match(/^%\{\??[\w \-\:\!]+\}/) ? (e2.eol() && (t2.controlFlow = false), `def`) : (e2.next(), null);
} };
export {
  r as rpmChanges,
  u as rpmSpec
};
