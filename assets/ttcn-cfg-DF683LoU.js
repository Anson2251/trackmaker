function e(e2) {
  for (var t2 = {}, n2 = e2.split(` `), r2 = 0; r2 < n2.length; ++r2) t2[n2[r2]] = true;
  return t2;
}
var t = { name: `ttcn-cfg`, keywords: e(`Yes No LogFile FileMask ConsoleMask AppendFile TimeStampFormat LogEventTypes SourceInfoFormat LogEntityName LogSourceInfo DiskFullAction LogFileNumber LogFileSize MatchingHints Detailed Compact SubCategories Stack Single None Seconds DateTime Time Stop Error Retry Delete TCPPort KillTimer NumHCs UnixSocketsEnabled LocalAddress`), fileNCtrlMaskOptions: e(`TTCN_EXECUTOR TTCN_ERROR TTCN_WARNING TTCN_PORTEVENT TTCN_TIMEROP TTCN_VERDICTOP TTCN_DEFAULTOP TTCN_TESTCASE TTCN_ACTION TTCN_USER TTCN_FUNCTION TTCN_STATISTICS TTCN_PARALLEL TTCN_MATCHING TTCN_DEBUG EXECUTOR ERROR WARNING PORTEVENT TIMEROP VERDICTOP DEFAULTOP TESTCASE ACTION USER FUNCTION STATISTICS PARALLEL MATCHING DEBUG LOG_ALL LOG_NOTHING ACTION_UNQUALIFIED DEBUG_ENCDEC DEBUG_TESTPORT DEBUG_UNQUALIFIED DEFAULTOP_ACTIVATE DEFAULTOP_DEACTIVATE DEFAULTOP_EXIT DEFAULTOP_UNQUALIFIED ERROR_UNQUALIFIED EXECUTOR_COMPONENT EXECUTOR_CONFIGDATA EXECUTOR_EXTCOMMAND EXECUTOR_LOGOPTIONS EXECUTOR_RUNTIME EXECUTOR_UNQUALIFIED FUNCTION_RND FUNCTION_UNQUALIFIED MATCHING_DONE MATCHING_MCSUCCESS MATCHING_MCUNSUCC MATCHING_MMSUCCESS MATCHING_MMUNSUCC MATCHING_PCSUCCESS MATCHING_PCUNSUCC MATCHING_PMSUCCESS MATCHING_PMUNSUCC MATCHING_PROBLEM MATCHING_TIMEOUT MATCHING_UNQUALIFIED PARALLEL_PORTCONN PARALLEL_PORTMAP PARALLEL_PTC PARALLEL_UNQUALIFIED PORTEVENT_DUALRECV PORTEVENT_DUALSEND PORTEVENT_MCRECV PORTEVENT_MCSEND PORTEVENT_MMRECV PORTEVENT_MMSEND PORTEVENT_MQUEUE PORTEVENT_PCIN PORTEVENT_PCOUT PORTEVENT_PMIN PORTEVENT_PMOUT PORTEVENT_PQUEUE PORTEVENT_STATE PORTEVENT_UNQUALIFIED STATISTICS_UNQUALIFIED STATISTICS_VERDICT TESTCASE_FINISH TESTCASE_START TESTCASE_UNQUALIFIED TIMEROP_GUARD TIMEROP_READ TIMEROP_START TIMEROP_STOP TIMEROP_TIMEOUT TIMEROP_UNQUALIFIED USER_UNQUALIFIED VERDICTOP_FINAL VERDICTOP_GETVERDICT VERDICTOP_SETVERDICT VERDICTOP_UNQUALIFIED WARNING_UNQUALIFIED`), externalCommands: e(`BeginControlPart EndControlPart BeginTestCase EndTestCase`), multiLineStrings: true }, n = t.keywords, r = t.fileNCtrlMaskOptions, i = t.externalCommands, a = t.multiLineStrings, o = t.indentStatements !== false, s = /[\|]/, c;
function l(e2, t2) {
  var a2 = e2.next();
  if (a2 == `"` || a2 == `'`) return t2.tokenize = u(a2), t2.tokenize(e2, t2);
  if (/[:=]/.test(a2)) return c = a2, `punctuation`;
  if (a2 == `#`) return e2.skipToEnd(), `comment`;
  if (/\d/.test(a2)) return e2.eatWhile(/[\w\.]/), `number`;
  if (s.test(a2)) return e2.eatWhile(s), `operator`;
  if (a2 == `[`) return e2.eatWhile(/[\w_\]]/), `number`;
  e2.eatWhile(/[\w\$_]/);
  var o2 = e2.current();
  return n.propertyIsEnumerable(o2) ? `keyword` : r.propertyIsEnumerable(o2) ? `atom` : i.propertyIsEnumerable(o2) ? `deleted` : `variable`;
}
function u(e2) {
  return function(t2, n2) {
    for (var r2 = false, i2, o2 = false; (i2 = t2.next()) != null; ) {
      if (i2 == e2 && !r2) {
        var s2 = t2.peek();
        s2 && (s2 = s2.toLowerCase(), (s2 == `b` || s2 == `h` || s2 == `o`) && t2.next()), o2 = true;
        break;
      }
      r2 = !r2 && i2 == `\\`;
    }
    return (o2 || !(r2 || a)) && (n2.tokenize = null), `string`;
  };
}
function d(e2, t2, n2, r2, i2) {
  this.indented = e2, this.column = t2, this.type = n2, this.align = r2, this.prev = i2;
}
function f(e2, t2, n2) {
  var r2 = e2.indented;
  return e2.context && e2.context.type == `statement` && (r2 = e2.context.indented), e2.context = new d(r2, t2, n2, null, e2.context);
}
function p(e2) {
  var t2 = e2.context.type;
  return (t2 == `)` || t2 == `]` || t2 == `}`) && (e2.indented = e2.context.indented), e2.context = e2.context.prev;
}
const m = { name: `ttcn`, startState: function() {
  return { tokenize: null, context: new d(0, 0, `top`, false), indented: 0, startOfLine: true };
}, token: function(e2, t2) {
  var n2 = t2.context;
  if (e2.sol() && (n2.align ?? (n2.align = false), t2.indented = e2.indentation(), t2.startOfLine = true), e2.eatSpace()) return null;
  c = null;
  var r2 = (t2.tokenize || l)(e2, t2);
  if (r2 == `comment`) return r2;
  if (n2.align ?? (n2.align = true), (c == `;` || c == `:` || c == `,`) && n2.type == `statement`) p(t2);
  else if (c == `{`) f(t2, e2.column(), `}`);
  else if (c == `[`) f(t2, e2.column(), `]`);
  else if (c == `(`) f(t2, e2.column(), `)`);
  else if (c == `}`) {
    for (; n2.type == `statement`; ) n2 = p(t2);
    for (n2.type == `}` && (n2 = p(t2)); n2.type == `statement`; ) n2 = p(t2);
  } else c == n2.type ? p(t2) : o && ((n2.type == `}` || n2.type == `top`) && c != `;` || n2.type == `statement` && c == `newstatement`) && f(t2, e2.column(), `statement`);
  return t2.startOfLine = false, r2;
}, languageData: { indentOnInput: /^\s*[{}]$/, commentTokens: { line: `#` } } };
export {
  m as ttcnCfg
};
