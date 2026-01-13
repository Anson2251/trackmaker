const e = { name: `toml`, startState: function() {
  return { inString: false, stringType: ``, lhs: true, inArray: 0 };
}, token: function(e2, t) {
  let n;
  if (!t.inString && (n = e2.match(/^('''|"""|'|")/)) && (t.stringType = n[0], t.inString = true), e2.sol() && !t.inString && t.inArray === 0 && (t.lhs = true), t.inString) {
    for (; t.inString; ) if (e2.match(t.stringType)) t.inString = false;
    else if (e2.peek() === `\\`) e2.next(), e2.next();
    else if (e2.eol()) break;
    else e2.match(/^.[^\\\"\']*/);
    return t.lhs ? `property` : `string`;
  } else if (t.inArray && e2.peek() === `]`) return e2.next(), t.inArray--, `bracket`;
  else if (t.lhs && e2.peek() === `[` && e2.skipTo(`]`)) return e2.next(), e2.peek() === `]` && e2.next(), `atom`;
  else if (e2.peek() === `#`) return e2.skipToEnd(), `comment`;
  else if (e2.eatSpace()) return null;
  else if (t.lhs && e2.eatWhile(function(e3) {
    return e3 != `=` && e3 != ` `;
  })) return `property`;
  else if (t.lhs && e2.peek() === `=`) return e2.next(), t.lhs = false, null;
  else if (!t.lhs && e2.match(/^\d\d\d\d[\d\-\:\.T]*Z/)) return `atom`;
  else if (!t.lhs && (e2.match(`true`) || e2.match(`false`))) return `atom`;
  else if (!t.lhs && e2.peek() === `[`) return t.inArray++, e2.next(), `bracket`;
  else if (!t.lhs && e2.match(/^\-?\d+(?:\.\d+)?/)) return `number`;
  else e2.eatSpace() || e2.next();
  return null;
}, languageData: { commentTokens: { line: `#` } } };
export {
  e as toml
};
