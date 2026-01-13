var e;
function t(t2, n2) {
  return e = n2, t2;
}
function n(e2, n2) {
  var o2 = e2.next();
  if (o2 == `<` && e2.eat(`!`)) {
    if (e2.eatWhile(/[\-]/)) return n2.tokenize = r, r(e2, n2);
    if (e2.eatWhile(/[\w]/)) return t(`keyword`, `doindent`);
  } else if (o2 == `<` && e2.eat(`?`)) return n2.tokenize = a(`meta`, `?>`), t(`meta`, o2);
  else if (o2 == `#` && e2.eatWhile(/[\w]/)) return t(`atom`, `tag`);
  else if (o2 == `|`) return t(`keyword`, `separator`);
  else if (o2.match(/[\(\)\[\]\-\.,\+\?>]/)) return t(null, o2);
  else if (o2.match(/[\[\]]/)) return t(`rule`, o2);
  else if (o2 == `"` || o2 == `'`) return n2.tokenize = i(o2), n2.tokenize(e2, n2);
  else if (e2.eatWhile(/[a-zA-Z\?\+\d]/)) {
    var s = e2.current();
    return s.substr(s.length - 1, s.length).match(/\?|\+/) !== null && e2.backUp(1), t(`tag`, `tag`);
  } else if (o2 == `%` || o2 == `*`) return t(`number`, `number`);
  else return e2.eatWhile(/[\w\\\-_%.{,]/), t(null, null);
}
function r(e2, r2) {
  for (var i2 = 0, a2; (a2 = e2.next()) != null; ) {
    if (i2 >= 2 && a2 == `>`) {
      r2.tokenize = n;
      break;
    }
    i2 = a2 == `-` ? i2 + 1 : 0;
  }
  return t(`comment`, `comment`);
}
function i(e2) {
  return function(r2, i2) {
    for (var a2 = false, o2; (o2 = r2.next()) != null; ) {
      if (o2 == e2 && !a2) {
        i2.tokenize = n;
        break;
      }
      a2 = !a2 && o2 == `\\`;
    }
    return t(`string`, `tag`);
  };
}
function a(e2, t2) {
  return function(r2, i2) {
    for (; !r2.eol(); ) {
      if (r2.match(t2)) {
        i2.tokenize = n;
        break;
      }
      r2.next();
    }
    return e2;
  };
}
const o = { name: `dtd`, startState: function() {
  return { tokenize: n, baseIndent: 0, stack: [] };
}, token: function(t2, n2) {
  if (t2.eatSpace()) return null;
  var r2 = n2.tokenize(t2, n2), i2 = n2.stack[n2.stack.length - 1];
  return t2.current() == `[` || e === `doindent` || e == `[` ? n2.stack.push(`rule`) : e === `endtag` ? n2.stack[n2.stack.length - 1] = `endtag` : t2.current() == `]` || e == `]` || e == `>` && i2 == `rule` ? n2.stack.pop() : e == `[` && n2.stack.push(`[`), r2;
}, indent: function(t2, n2, r2) {
  var i2 = t2.stack.length;
  return n2.charAt(0) === `]` ? i2-- : n2.substr(n2.length - 1, n2.length) === `>` && (n2.substr(0, 1) === `<` || e == `doindent` && n2.length > 1 || (e == `doindent` ? i2-- : e == `>` && n2.length > 1 || e == `tag` && n2 !== `>` || (e == `tag` && t2.stack[t2.stack.length - 1] == `rule` ? i2-- : e == `tag` ? i2++ : n2 === `>` && t2.stack[t2.stack.length - 1] == `rule` && e === `>` ? i2-- : n2 === `>` && t2.stack[t2.stack.length - 1] == `rule` || (n2.substr(0, 1) !== `<` && n2.substr(0, 1) === `>` ? --i2 : n2 === `>` || --i2))), (e == null || e == `]`) && i2--), t2.baseIndent + i2 * r2.unit;
}, languageData: { indentOnInput: /^\s*[\]>]$/ } };
export {
  o as dtd
};
