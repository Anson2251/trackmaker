var e = {}, t = /({)?([a-z][a-z0-9_]*)?((::[a-z][a-z0-9_]*)*::)?[a-zA-Z0-9_]+(})?/;
function n(t2, n2) {
  for (var r2 = n2.split(` `), i2 = 0; i2 < r2.length; i2++) e[r2[i2]] = t2;
}
n(`keyword`, `class define site node include import inherits`), n(`keyword`, `case if else in and elsif default or`), n(`atom`, `false true running present absent file directory undef`), n(`builtin`, `action augeas burst chain computer cron destination dport exec file filebucket group host icmp iniface interface jump k5login limit log_level log_prefix macauthorization mailalias maillist mcx mount nagios_command nagios_contact nagios_contactgroup nagios_host nagios_hostdependency nagios_hostescalation nagios_hostextinfo nagios_hostgroup nagios_service nagios_servicedependency nagios_serviceescalation nagios_serviceextinfo nagios_servicegroup nagios_timeperiod name notify outiface package proto reject resources router schedule scheduled_task selboolean selmodule service source sport ssh_authorized_key sshkey stage state table tidy todest toports tosource user vlan yumrepo zfs zone zpool`);
function r(e2, t2) {
  for (var n2, r2, i2 = false; !e2.eol() && (n2 = e2.next()) != t2.pending; ) {
    if (n2 === `$` && r2 != `\\` && t2.pending == `"`) {
      i2 = true;
      break;
    }
    r2 = n2;
  }
  return i2 && e2.backUp(1), n2 == t2.pending ? t2.continueString = false : t2.continueString = true, `string`;
}
function i(n2, i2) {
  var a2 = n2.match(/[\w]+/, false), o = n2.match(/(\s+)?\w+\s+=>.*/, false), s = n2.match(/(\s+)?[\w:_]+(\s+)?{/, false), c = n2.match(/(\s+)?[@]{1,2}[\w:_]+(\s+)?{/, false), l = n2.next();
  if (l === `$`) return n2.match(t) ? i2.continueString ? `variableName.special` : `variable` : `error`;
  if (i2.continueString) return n2.backUp(1), r(n2, i2);
  if (i2.inDefinition) {
    if (n2.match(/(\s+)?[\w:_]+(\s+)?/)) return `def`;
    n2.match(/\s+{/), i2.inDefinition = false;
  }
  return i2.inInclude ? (n2.match(/(\s+)?\S+(\s+)?/), i2.inInclude = false, `def`) : n2.match(/(\s+)?\w+\(/) ? (n2.backUp(1), `def`) : o ? (n2.match(/(\s+)?\w+/), `tag`) : a2 && e.hasOwnProperty(a2) ? (n2.backUp(1), n2.match(/[\w]+/), n2.match(/\s+\S+\s+{/, false) && (i2.inDefinition = true), a2 == `include` && (i2.inInclude = true), e[a2]) : /(^|\s+)[A-Z][\w:_]+/.test(a2) ? (n2.backUp(1), n2.match(/(^|\s+)[A-Z][\w:_]+/), `def`) : s ? (n2.match(/(\s+)?[\w:_]+/), `def`) : c ? (n2.match(/(\s+)?[@]{1,2}/), `atom`) : l == `#` ? (n2.skipToEnd(), `comment`) : l == `'` || l == `"` ? (i2.pending = l, r(n2, i2)) : l == `{` || l == `}` ? `bracket` : l == `/` ? (n2.match(/^[^\/]*\//), `string.special`) : l.match(/[0-9]/) ? (n2.eatWhile(/[0-9]+/), `number`) : l == `=` ? (n2.peek() == `>` && n2.next(), `operator`) : (n2.eatWhile(/[\w-]/), null);
}
const a = { name: `puppet`, startState: function() {
  var e2 = {};
  return e2.inDefinition = false, e2.inInclude = false, e2.continueString = false, e2.pending = false, e2;
}, token: function(e2, t2) {
  return e2.eatSpace() ? null : i(e2, t2);
} };
export {
  a as puppet
};
