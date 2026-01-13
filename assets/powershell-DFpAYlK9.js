function e(e2, t2) {
  t2 || (t2 = {});
  for (var n2 = t2.prefix === void 0 ? `^` : t2.prefix, r2 = t2.suffix === void 0 ? `\\b` : t2.suffix, i2 = 0; i2 < e2.length; i2++) e2[i2] instanceof RegExp ? e2[i2] = e2[i2].source : e2[i2] = e2[i2].replace(/[-\/\\^$*+?.()|[\]{}]/g, `\\$&`);
  return RegExp(n2 + `(` + e2.join(`|`) + `)` + r2, `i`);
}
var t = `(?=[^A-Za-z\\d\\-_]|$)`, n = /[\w\-:]/, r = { keyword: e([/begin|break|catch|continue|data|default|do|dynamicparam/, /else|elseif|end|exit|filter|finally|for|foreach|from|function|if|in/, /param|process|return|switch|throw|trap|try|until|where|while/], { suffix: t }), number: /^((0x[\da-f]+)|((\d+\.\d+|\d\.|\.\d+|\d+)(e[\+\-]?\d+)?))[ld]?([kmgtp]b)?/i, operator: e([e([`f`, /b?not/, /[ic]?split/, `join`, /is(not)?/, `as`, /[ic]?(eq|ne|[gl][te])/, /[ic]?(not)?(like|match|contains)/, /[ic]?replace/, /b?(and|or|xor)/], { prefix: `-` }), /[+\-*\/%]=|\+\+|--|\.\.|[+\-*&^%:=!|\/]|<(?!#)|(?!#)>/], { suffix: `` }), builtin: e([/[A-Z]:|%|\?/i, e([/Add-(Computer|Content|History|Member|PSSnapin|Type)/, /Checkpoint-Computer/, /Clear-(Content|EventLog|History|Host|Item(Property)?|Variable)/, /Compare-Object/, /Complete-Transaction/, /Connect-PSSession/, /ConvertFrom-(Csv|Json|SecureString|StringData)/, /Convert-Path/, /ConvertTo-(Csv|Html|Json|SecureString|Xml)/, /Copy-Item(Property)?/, /Debug-Process/, /Disable-(ComputerRestore|PSBreakpoint|PSRemoting|PSSessionConfiguration)/, /Disconnect-PSSession/, /Enable-(ComputerRestore|PSBreakpoint|PSRemoting|PSSessionConfiguration)/, /(Enter|Exit)-PSSession/, /Export-(Alias|Clixml|Console|Counter|Csv|FormatData|ModuleMember|PSSession)/, /ForEach-Object/, /Format-(Custom|List|Table|Wide)/, RegExp(`Get-(Acl|Alias|AuthenticodeSignature|ChildItem|Command|ComputerRestorePoint|Content|ControlPanelItem|Counter|Credential|Culture|Date|Event|EventLog|EventSubscriber|ExecutionPolicy|FormatData|Help|History|Host|HotFix|Item|ItemProperty|Job|Location|Member|Module|PfxCertificate|Process|PSBreakpoint|PSCallStack|PSDrive|PSProvider|PSSession|PSSessionConfiguration|PSSnapin|Random|Service|TraceSource|Transaction|TypeData|UICulture|Unique|Variable|Verb|WinEvent|WmiObject)`), /Group-Object/, /Import-(Alias|Clixml|Counter|Csv|LocalizedData|Module|PSSession)/, /ImportSystemModules/, /Invoke-(Command|Expression|History|Item|RestMethod|WebRequest|WmiMethod)/, /Join-Path/, /Limit-EventLog/, /Measure-(Command|Object)/, /Move-Item(Property)?/, RegExp(`New-(Alias|Event|EventLog|Item(Property)?|Module|ModuleManifest|Object|PSDrive|PSSession|PSSessionConfigurationFile|PSSessionOption|PSTransportOption|Service|TimeSpan|Variable|WebServiceProxy|WinEvent)`), /Out-(Default|File|GridView|Host|Null|Printer|String)/, /Pause/, /(Pop|Push)-Location/, /Read-Host/, /Receive-(Job|PSSession)/, /Register-(EngineEvent|ObjectEvent|PSSessionConfiguration|WmiEvent)/, /Remove-(Computer|Event|EventLog|Item(Property)?|Job|Module|PSBreakpoint|PSDrive|PSSession|PSSnapin|TypeData|Variable|WmiObject)/, /Rename-(Computer|Item(Property)?)/, /Reset-ComputerMachinePassword/, /Resolve-Path/, /Restart-(Computer|Service)/, /Restore-Computer/, /Resume-(Job|Service)/, /Save-Help/, /Select-(Object|String|Xml)/, /Send-MailMessage/, RegExp(`Set-(Acl|Alias|AuthenticodeSignature|Content|Date|ExecutionPolicy|Item(Property)?|Location|PSBreakpoint|PSDebug|PSSessionConfiguration|Service|StrictMode|TraceSource|Variable|WmiInstance)`), /Show-(Command|ControlPanelItem|EventLog)/, /Sort-Object/, /Split-Path/, /Start-(Job|Process|Service|Sleep|Transaction|Transcript)/, /Stop-(Computer|Job|Process|Service|Transcript)/, /Suspend-(Job|Service)/, /TabExpansion2/, /Tee-Object/, /Test-(ComputerSecureChannel|Connection|ModuleManifest|Path|PSSessionConfigurationFile)/, /Trace-Command/, /Unblock-File/, /Undo-Transaction/, /Unregister-(Event|PSSessionConfiguration)/, /Update-(FormatData|Help|List|TypeData)/, /Use-Transaction/, /Wait-(Event|Job|Process)/, /Where-Object/, /Write-(Debug|Error|EventLog|Host|Output|Progress|Verbose|Warning)/, /cd|help|mkdir|more|oss|prompt/, /ac|asnp|cat|cd|chdir|clc|clear|clhy|cli|clp|cls|clv|cnsn|compare|copy|cp|cpi|cpp|cvpa|dbp|del|diff|dir|dnsn|ebp/, /echo|epal|epcsv|epsn|erase|etsn|exsn|fc|fl|foreach|ft|fw|gal|gbp|gc|gci|gcm|gcs|gdr|ghy|gi|gjb|gl|gm|gmo|gp|gps/, /group|gsn|gsnp|gsv|gu|gv|gwmi|h|history|icm|iex|ihy|ii|ipal|ipcsv|ipmo|ipsn|irm|ise|iwmi|iwr|kill|lp|ls|man|md/, /measure|mi|mount|move|mp|mv|nal|ndr|ni|nmo|npssc|nsn|nv|ogv|oh|popd|ps|pushd|pwd|r|rbp|rcjb|rcsn|rd|rdr|ren|ri/, /rjb|rm|rmdir|rmo|rni|rnp|rp|rsn|rsnp|rujb|rv|rvpa|rwmi|sajb|sal|saps|sasv|sbp|sc|select|set|shcm|si|sl|sleep|sls/, /sort|sp|spjb|spps|spsv|start|sujb|sv|swmi|tee|trcm|type|where|wjb|write/], { prefix: ``, suffix: `` }), e([/[$?^_]|Args|ConfirmPreference|ConsoleFileName|DebugPreference|Error|ErrorActionPreference|ErrorView|ExecutionContext/, /FormatEnumerationLimit|Home|Host|Input|MaximumAliasCount|MaximumDriveCount|MaximumErrorCount|MaximumFunctionCount/, /MaximumHistoryCount|MaximumVariableCount|MyInvocation|NestedPromptLevel|OutputEncoding|Pid|Profile|ProgressPreference/, /PSBoundParameters|PSCommandPath|PSCulture|PSDefaultParameterValues|PSEmailServer|PSHome|PSScriptRoot|PSSessionApplicationName/, /PSSessionConfigurationName|PSSessionOption|PSUICulture|PSVersionTable|Pwd|ShellId|StackTrace|VerbosePreference/, /WarningPreference|WhatIfPreference/, /Event|EventArgs|EventSubscriber|Sender/, /Matches|Ofs|ForEach|LastExitCode|PSCmdlet|PSItem|PSSenderInfo|This/, /true|false|null/], { prefix: `\\$`, suffix: `` })], { suffix: t }), punctuation: /[\[\]{},;`\\\.]|@[({]/, variable: /^[A-Za-z\_][A-Za-z\-\_\d]*\b/ };
function i(e2, t2) {
  var i2 = t2.returnStack[t2.returnStack.length - 1];
  if (i2 && i2.shouldReturnFrom(t2)) return t2.tokenize = i2.tokenize, t2.returnStack.pop(), t2.tokenize(e2, t2);
  if (e2.eatSpace()) return null;
  if (e2.eat(`(`)) return t2.bracketNesting += 1, `punctuation`;
  if (e2.eat(`)`)) return --t2.bracketNesting, `punctuation`;
  for (var s2 in r) if (e2.match(r[s2])) return s2;
  var c2 = e2.next();
  if (c2 === `'`) return a(e2, t2);
  if (c2 === `$`) return f(e2, t2);
  if (c2 === `"`) return o(e2, t2);
  if (c2 === `<` && e2.eat(`#`)) return t2.tokenize = d, d(e2, t2);
  if (c2 === `#`) return e2.skipToEnd(), `comment`;
  if (c2 === `@`) {
    var l2 = e2.eat(/["']/);
    if (l2 && e2.eol()) return t2.tokenize = m, t2.startQuote = l2[0], m(e2, t2);
    if (e2.eol()) return `error`;
    if (e2.peek().match(/[({]/)) return `punctuation`;
    if (e2.peek().match(n)) return f(e2, t2);
  }
  return `error`;
}
function a(e2, t2) {
  for (var n2; (n2 = e2.peek()) != null; ) if (e2.next(), n2 === `'` && !e2.eat(`'`)) return t2.tokenize = i, `string`;
  return `error`;
}
function o(e2, t2) {
  for (var n2; (n2 = e2.peek()) != null; ) {
    if (n2 === `$`) return t2.tokenize = s, `string`;
    if (e2.next(), n2 === "`") {
      e2.next();
      continue;
    }
    if (n2 === `"` && !e2.eat(`"`)) return t2.tokenize = i, `string`;
  }
  return `error`;
}
function s(e2, t2) {
  return u(e2, t2, o);
}
function c(e2, t2) {
  return t2.tokenize = m, t2.startQuote = `"`, m(e2, t2);
}
function l(e2, t2) {
  return u(e2, t2, c);
}
function u(e2, t2, n2) {
  if (e2.match(`$(`)) {
    var r2 = t2.bracketNesting;
    return t2.returnStack.push({ shouldReturnFrom: function(e3) {
      return e3.bracketNesting === r2;
    }, tokenize: n2 }), t2.tokenize = i, t2.bracketNesting += 1, `punctuation`;
  } else return e2.next(), t2.returnStack.push({ shouldReturnFrom: function() {
    return true;
  }, tokenize: n2 }), t2.tokenize = f, t2.tokenize(e2, t2);
}
function d(e2, t2) {
  for (var n2 = false, r2; (r2 = e2.next()) != null; ) {
    if (n2 && r2 == `>`) {
      t2.tokenize = i;
      break;
    }
    n2 = r2 === `#`;
  }
  return `comment`;
}
function f(e2, t2) {
  var r2 = e2.peek();
  return e2.eat(`{`) ? (t2.tokenize = p, p(e2, t2)) : r2 != null && r2.match(n) ? (e2.eatWhile(n), t2.tokenize = i, `variable`) : (t2.tokenize = i, `error`);
}
function p(e2, t2) {
  for (var n2; (n2 = e2.next()) != null; ) if (n2 === `}`) {
    t2.tokenize = i;
    break;
  }
  return `variable`;
}
function m(e2, t2) {
  var n2 = t2.startQuote;
  if (e2.sol() && e2.match(RegExp(n2 + `@`))) t2.tokenize = i;
  else if (n2 === `"`) for (; !e2.eol(); ) {
    var r2 = e2.peek();
    if (r2 === `$`) return t2.tokenize = l, `string`;
    e2.next(), r2 === "`" && e2.next();
  }
  else e2.skipToEnd();
  return `string`;
}
const h = { name: `powershell`, startState: function() {
  return { returnStack: [], bracketNesting: 0, tokenize: i };
}, token: function(e2, t2) {
  return t2.tokenize(e2, t2);
}, languageData: { commentTokens: { line: `#`, block: { open: `<#`, close: `#>` } } } };
export {
  h as powerShell
};
