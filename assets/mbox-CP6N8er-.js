var e = [`From`, `Sender`, `Reply-To`, `To`, `Cc`, `Bcc`, `Message-ID`, `In-Reply-To`, `References`, `Resent-From`, `Resent-Sender`, `Resent-To`, `Resent-Cc`, `Resent-Bcc`, `Resent-Message-ID`, `Return-Path`, `Received`], t = [`Date`, `Subject`, `Comments`, `Keywords`, `Resent-Date`], n = /^[ \t]/, r = /^From /, i = RegExp(`^(` + e.join(`|`) + `): `), a = RegExp(`^(` + t.join(`|`) + `): `), o = /^[^:]+:/, s = /^[^ ]+@[^ ]+/, c = /^.*?(?=[^ ]+?@[^ ]+)/, l = /^<.*?>/, u = /^.*?(?=<.*>)/;
function d(e2) {
  return e2 === `Subject` ? `header` : `string`;
}
function f(e2, t2) {
  if (e2.sol()) {
    if (t2.inSeparator = false, t2.inHeader && e2.match(n)) return null;
    if (t2.inHeader = false, t2.header = null, e2.match(r)) return t2.inHeaders = true, t2.inSeparator = true, `atom`;
    var f2, p2 = false;
    return (f2 = e2.match(a)) || (p2 = true) && (f2 = e2.match(i)) ? (t2.inHeaders = true, t2.inHeader = true, t2.emailPermitted = p2, t2.header = f2[1], `atom`) : t2.inHeaders && (f2 = e2.match(o)) ? (t2.inHeader = true, t2.emailPermitted = true, t2.header = f2[1], `atom`) : (t2.inHeaders = false, e2.skipToEnd(), null);
  }
  if (t2.inSeparator) return e2.match(s) ? `link` : (e2.match(c) || e2.skipToEnd(), `atom`);
  if (t2.inHeader) {
    var m = d(t2.header);
    if (t2.emailPermitted) {
      if (e2.match(l)) return m + ` link`;
      if (e2.match(u)) return m;
    }
    return e2.skipToEnd(), m;
  }
  return e2.skipToEnd(), null;
}
const p = { name: `mbox`, startState: function() {
  return { inSeparator: false, inHeader: false, emailPermitted: false, header: null, inHeaders: false };
}, token: f, blankLine: function(e2) {
  e2.inHeaders = e2.inSeparator = e2.inHeader = false;
}, languageData: { autocomplete: e.concat(t) } };
export {
  p as mbox
};
