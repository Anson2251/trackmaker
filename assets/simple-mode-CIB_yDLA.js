function e(e2) {
  t(e2, `start`);
  var n2 = {}, r2 = e2.languageData || {}, s = false;
  for (var c in e2) if (c != r2 && e2.hasOwnProperty(c)) for (var l = n2[c] = [], u = e2[c], d = 0; d < u.length; d++) {
    var f = u[d];
    l.push(new i(f, e2)), (f.indent || f.dedent) && (s = true);
  }
  return { name: r2.name, startState: function() {
    return { state: `start`, pending: null, indent: s ? [] : null };
  }, copyState: function(e3) {
    var t2 = { state: e3.state, pending: e3.pending, indent: e3.indent && e3.indent.slice(0) };
    return e3.stack && (t2.stack = e3.stack.slice(0)), t2;
  }, token: a(n2), indent: o(n2, r2), mergeTokens: r2.mergeTokens, languageData: r2 };
}
function t(e2, t2) {
  if (!e2.hasOwnProperty(t2)) throw Error(`Undefined state ` + t2 + ` in simple mode`);
}
function n(e2, t2) {
  if (!e2) return /(?:)/;
  var n2 = ``;
  return e2 instanceof RegExp ? (e2.ignoreCase && (n2 = `i`), e2.unicode && (n2 += `u`), e2 = e2.source) : e2 = String(e2), RegExp((t2 === false ? `` : `^`) + `(?:` + e2 + `)`, n2);
}
function r(e2) {
  if (!e2) return null;
  if (e2.apply) return e2;
  if (typeof e2 == `string`) return e2.replace(/\./g, ` `);
  for (var t2 = [], n2 = 0; n2 < e2.length; n2++) t2.push(e2[n2] && e2[n2].replace(/\./g, ` `));
  return t2;
}
function i(e2, i2) {
  (e2.next || e2.push) && t(i2, e2.next || e2.push), this.regex = n(e2.regex), this.token = r(e2.token), this.data = e2;
}
function a(e2) {
  return function(t2, n2) {
    if (n2.pending) {
      var r2 = n2.pending.shift();
      return n2.pending.length == 0 && (n2.pending = null), t2.pos += r2.text.length, r2.token;
    }
    for (var i2 = e2[n2.state], a2 = 0; a2 < i2.length; a2++) {
      var o2 = i2[a2], s = (!o2.data.sol || t2.sol()) && t2.match(o2.regex);
      if (s) {
        o2.data.next ? n2.state = o2.data.next : o2.data.push ? ((n2.stack || (n2.stack = [])).push(n2.state), n2.state = o2.data.push) : o2.data.pop && n2.stack && n2.stack.length && (n2.state = n2.stack.pop()), o2.data.indent && n2.indent.push(t2.indentation() + t2.indentUnit), o2.data.dedent && n2.indent.pop();
        var c = o2.token;
        if (c && c.apply && (c = c(s)), s.length > 2 && o2.token && typeof o2.token != `string`) {
          n2.pending = [];
          for (var l = 2; l < s.length; l++) s[l] && n2.pending.push({ text: s[l], token: o2.token[l - 1] });
          return t2.backUp(s[0].length - (s[1] ? s[1].length : 0)), c[0];
        } else if (c && c.join) return c[0];
        else return c;
      }
    }
    return t2.next(), null;
  };
}
function o(e2, t2) {
  return function(n2, r2) {
    if (n2.indent == null || t2.dontIndentStates && t2.dontIndentStates.indexOf(n2.state) > -1) return null;
    var i2 = n2.indent.length - 1, a2 = e2[n2.state];
    scan: for (; ; ) {
      for (var o2 = 0; o2 < a2.length; o2++) {
        var s = a2[o2];
        if (s.data.dedent && s.data.dedentIfLineStart !== false) {
          var c = s.regex.exec(r2);
          if (c && c[0]) {
            i2--, (s.next || s.push) && (a2 = e2[s.next || s.push]), r2 = r2.slice(c[0].length);
            continue scan;
          }
        }
      }
      break;
    }
    return i2 < 0 ? 0 : n2.indent[i2];
  };
}
export {
  e as t
};
