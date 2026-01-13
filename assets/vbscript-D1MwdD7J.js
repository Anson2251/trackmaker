function e(e2) {
  var t2 = `error`;
  function n2(e3) {
    return RegExp(`^((` + e3.join(`)|(`) + `))\\b`, `i`);
  }
  var r = RegExp(`^[\\+\\-\\*/&\\\\\\^<>=]`), i = RegExp(`^((<>)|(<=)|(>=))`), a = RegExp(`^[\\.,]`), o = RegExp(`^[\\(\\)]`), s = RegExp(`^[A-Za-z][_A-Za-z0-9]*`), c = [`class`, `sub`, `select`, `while`, `if`, `function`, `property`, `with`, `for`], l = [`else`, `elseif`, `case`], u = [`next`, `loop`, `wend`], d = n2([`and`, `or`, `not`, `xor`, `is`, `mod`, `eqv`, `imp`]), f = [`dim`, `redim`, `then`, `until`, `randomize`, `byval`, `byref`, `new`, `property`, `exit`, `in`, `const`, `private`, `public`, `get`, `set`, `let`, `stop`, `on error resume next`, `on error goto 0`, `option explicit`, `call`, `me`], p = [`true`, `false`, `nothing`, `empty`, `null`], m = `abs.array.asc.atn.cbool.cbyte.ccur.cdate.cdbl.chr.cint.clng.cos.csng.cstr.date.dateadd.datediff.datepart.dateserial.datevalue.day.escape.eval.execute.exp.filter.formatcurrency.formatdatetime.formatnumber.formatpercent.getlocale.getobject.getref.hex.hour.inputbox.instr.instrrev.int.fix.isarray.isdate.isempty.isnull.isnumeric.isobject.join.lbound.lcase.left.len.loadpicture.log.ltrim.rtrim.trim.maths.mid.minute.month.monthname.msgbox.now.oct.replace.rgb.right.rnd.round.scriptengine.scriptenginebuildversion.scriptenginemajorversion.scriptengineminorversion.second.setlocale.sgn.sin.space.split.sqr.strcomp.string.strreverse.tan.time.timer.timeserial.timevalue.typename.ubound.ucase.unescape.vartype.weekday.weekdayname.year`.split(`.`), h = `vbBlack.vbRed.vbGreen.vbYellow.vbBlue.vbMagenta.vbCyan.vbWhite.vbBinaryCompare.vbTextCompare.vbSunday.vbMonday.vbTuesday.vbWednesday.vbThursday.vbFriday.vbSaturday.vbUseSystemDayOfWeek.vbFirstJan1.vbFirstFourDays.vbFirstFullWeek.vbGeneralDate.vbLongDate.vbShortDate.vbLongTime.vbShortTime.vbObjectError.vbOKOnly.vbOKCancel.vbAbortRetryIgnore.vbYesNoCancel.vbYesNo.vbRetryCancel.vbCritical.vbQuestion.vbExclamation.vbInformation.vbDefaultButton1.vbDefaultButton2.vbDefaultButton3.vbDefaultButton4.vbApplicationModal.vbSystemModal.vbOK.vbCancel.vbAbort.vbRetry.vbIgnore.vbYes.vbNo.vbCr.VbCrLf.vbFormFeed.vbLf.vbNewLine.vbNullChar.vbNullString.vbTab.vbVerticalTab.vbUseDefault.vbTrue.vbFalse.vbEmpty.vbNull.vbInteger.vbLong.vbSingle.vbDouble.vbCurrency.vbDate.vbString.vbObject.vbError.vbBoolean.vbVariant.vbDataObject.vbDecimal.vbByte.vbArray`.split(`.`), g = [`WScript`, `err`, `debug`, `RegExp`], _ = [`description`, `firstindex`, `global`, `helpcontext`, `helpfile`, `ignorecase`, `length`, `number`, `pattern`, `source`, `value`, `count`], v = [`clear`, `execute`, `raise`, `replace`, `test`, `write`, `writeline`, `close`, `open`, `state`, `eof`, `update`, `addnew`, `end`, `createobject`, `quit`], y = [`server`, `response`, `request`, `session`, `application`], b = [`buffer`, `cachecontrol`, `charset`, `contenttype`, `expires`, `expiresabsolute`, `isclientconnected`, `pics`, `status`, `clientcertificate`, `cookies`, `form`, `querystring`, `servervariables`, `totalbytes`, `contents`, `staticobjects`, `codepage`, `lcid`, `sessionid`, `timeout`, `scripttimeout`], x = [`addheader`, `appendtolog`, `binarywrite`, `end`, `flush`, `redirect`, `binaryread`, `remove`, `removeall`, `lock`, `unlock`, `abandon`, `getlasterror`, `htmlencode`, `mappath`, `transfer`, `urlencode`], S = v.concat(_);
  g = g.concat(h), e2.isASP && (g = g.concat(y), S = S.concat(x, b));
  var C = n2(f), w = n2(p), T = n2(m), E = n2(g), D = n2(S), O = `"`, k = n2(c), A = n2(l), j = n2(u), M = n2([`end`]), N = n2([`do`]), P = n2([`on error resume next`, `exit`]), F = n2([`rem`]);
  function I(e3, t3) {
    t3.currentIndent++;
  }
  function L(e3, t3) {
    t3.currentIndent--;
  }
  function R(e3, n3) {
    if (e3.eatSpace()) return null;
    if (e3.peek() === `'` || e3.match(F)) return e3.skipToEnd(), `comment`;
    if (e3.match(/^((&H)|(&O))?[0-9\.]/i, false) && !e3.match(/^((&H)|(&O))?[0-9\.]+[a-z_]/i, false)) {
      var c2 = false;
      if ((e3.match(/^\d*\.\d+/i) || e3.match(/^\d+\.\d*/) || e3.match(/^\.\d+/)) && (c2 = true), c2) return e3.eat(/J/i), `number`;
      var l2 = false;
      if (e3.match(/^&H[0-9a-f]+/i) || e3.match(/^&O[0-7]+/i) ? l2 = true : e3.match(/^[1-9]\d*F?/) ? (e3.eat(/J/i), l2 = true) : e3.match(/^0(?![\dx])/i) && (l2 = true), l2) return e3.eat(/L/i), `number`;
    }
    return e3.match(O) ? (n3.tokenize = z(e3.current()), n3.tokenize(e3, n3)) : e3.match(i) || e3.match(r) || e3.match(d) ? `operator` : e3.match(a) ? null : e3.match(o) ? `bracket` : e3.match(P) ? (n3.doInCurrentLine = true, `keyword`) : e3.match(N) ? (I(e3, n3), n3.doInCurrentLine = true, `keyword`) : e3.match(k) ? (n3.doInCurrentLine ? n3.doInCurrentLine = false : I(e3, n3), `keyword`) : e3.match(A) ? `keyword` : e3.match(M) ? (L(e3, n3), L(e3, n3), `keyword`) : e3.match(j) ? (n3.doInCurrentLine ? n3.doInCurrentLine = false : L(e3, n3), `keyword`) : e3.match(C) ? `keyword` : e3.match(w) ? `atom` : e3.match(D) ? `variableName.special` : e3.match(T) || e3.match(E) ? `builtin` : e3.match(s) ? `variable` : (e3.next(), t2);
  }
  function z(e3) {
    var t3 = e3.length == 1, n3 = `string`;
    return function(r2, i2) {
      for (; !r2.eol(); ) {
        if (r2.eatWhile(/[^'"]/), r2.match(e3)) return i2.tokenize = R, n3;
        r2.eat(/['"]/);
      }
      return t3 && (i2.tokenize = R), n3;
    };
  }
  function B(e3, n3) {
    var r2 = n3.tokenize(e3, n3), i2 = e3.current();
    return i2 === `.` ? (r2 = n3.tokenize(e3, n3), i2 = e3.current(), r2 && (r2.substr(0, 8) === `variable` || r2 === `builtin` || r2 === `keyword`) ? ((r2 === `builtin` || r2 === `keyword`) && (r2 = `variable`), S.indexOf(i2.substr(1)) > -1 && (r2 = `keyword`), r2) : t2) : r2;
  }
  return { name: `vbscript`, startState: function() {
    return { tokenize: R, lastToken: null, currentIndent: 0, nextLineIndent: 0, doInCurrentLine: false, ignoreKeyword: false };
  }, token: function(e3, t3) {
    e3.sol() && (t3.currentIndent += t3.nextLineIndent, t3.nextLineIndent = 0, t3.doInCurrentLine = 0);
    var n3 = B(e3, t3);
    return t3.lastToken = { style: n3, content: e3.current() }, n3 === null && (n3 = null), n3;
  }, indent: function(e3, t3, n3) {
    var r2 = t3.replace(/^\s+|\s+$/g, ``);
    return r2.match(j) || r2.match(M) || r2.match(A) ? n3.unit * (e3.currentIndent - 1) : e3.currentIndent < 0 ? 0 : e3.currentIndent * n3.unit;
  } };
}
const t = e({}), n = e({ isASP: true });
export {
  t as vbScript,
  n as vbScriptASP
};
