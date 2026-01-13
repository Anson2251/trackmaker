var e = `[a-zA-Z\\$][a-zA-Z0-9\\$]*`, t = `(?:\\d+)`, n = `(?:\\.\\d+|\\d+\\.\\d*|\\d+)`, r = `(?:\\.\\w+|\\w+\\.\\w*|\\w+)`, i = "(?:`(?:`?" + n + `)?)`, a = RegExp(`(?:` + t + `(?:\\^\\^` + r + i + `?(?:\\*\\^[+-]?\\d+)?))`), o = RegExp(`(?:` + n + i + `?(?:\\*\\^[+-]?\\d+)?)`), s = RegExp("(?:`?)(?:" + e + ")(?:`(?:" + e + "))*(?:`?)");
function c(e2, t2) {
  var n2 = e2.next();
  return n2 === `"` ? (t2.tokenize = l, t2.tokenize(e2, t2)) : n2 === `(` && e2.eat(`*`) ? (t2.commentLevel++, t2.tokenize = u, t2.tokenize(e2, t2)) : (e2.backUp(1), e2.match(a, true, false) || e2.match(o, true, false) ? `number` : e2.match(/(?:In|Out)\[[0-9]*\]/, true, false) ? `atom` : e2.match(/([a-zA-Z\$][a-zA-Z0-9\$]*(?:`[a-zA-Z0-9\$]+)*::usage)/, true, false) ? `meta` : e2.match(/([a-zA-Z\$][a-zA-Z0-9\$]*(?:`[a-zA-Z0-9\$]+)*::[a-zA-Z\$][a-zA-Z0-9\$]*):?/, true, false) ? `string.special` : e2.match(/([a-zA-Z\$][a-zA-Z0-9\$]*\s*:)(?:(?:[a-zA-Z\$][a-zA-Z0-9\$]*)|(?:[^:=>~@\^\&\*\)\[\]'\?,\|])).*/, true, false) || e2.match(/[a-zA-Z\$][a-zA-Z0-9\$]*_+[a-zA-Z\$][a-zA-Z0-9\$]*/, true, false) || e2.match(/[a-zA-Z\$][a-zA-Z0-9\$]*_+/, true, false) || e2.match(/_+[a-zA-Z\$][a-zA-Z0-9\$]*/, true, false) ? `variableName.special` : e2.match(/\\\[[a-zA-Z\$][a-zA-Z0-9\$]*\]/, true, false) ? `character` : e2.match(/(?:\[|\]|{|}|\(|\))/, true, false) ? `bracket` : e2.match(/(?:#[a-zA-Z\$][a-zA-Z0-9\$]*|#+[0-9]?)/, true, false) ? `variableName.constant` : e2.match(s, true, false) ? `keyword` : e2.match(/(?:\\|\+|\-|\*|\/|,|;|\.|:|@|~|=|>|<|&|\||_|`|'|\^|\?|!|%)/, true, false) ? `operator` : (e2.next(), `error`));
}
function l(e2, t2) {
  for (var n2, r2 = false, i2 = false; (n2 = e2.next()) != null; ) {
    if (n2 === `"` && !i2) {
      r2 = true;
      break;
    }
    i2 = !i2 && n2 === `\\`;
  }
  return r2 && !i2 && (t2.tokenize = c), `string`;
}
function u(e2, t2) {
  for (var n2, r2; t2.commentLevel > 0 && (r2 = e2.next()) != null; ) n2 === `(` && r2 === `*` && t2.commentLevel++, n2 === `*` && r2 === `)` && t2.commentLevel--, n2 = r2;
  return t2.commentLevel <= 0 && (t2.tokenize = c), `comment`;
}
const d = { name: `mathematica`, startState: function() {
  return { tokenize: c, commentLevel: 0 };
}, token: function(e2, t2) {
  return e2.eatSpace() ? null : t2.tokenize(e2, t2);
}, languageData: { commentTokens: { block: { open: `(*`, close: `*)` } } } };
export {
  d as mathematica
};
