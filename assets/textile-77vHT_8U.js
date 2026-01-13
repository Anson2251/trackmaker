var e = { addition: `inserted`, attributes: `propertyName`, bold: `strong`, cite: `keyword`, code: `monospace`, definitionList: `list`, deletion: `deleted`, div: `punctuation`, em: `emphasis`, footnote: `variable`, footCite: `qualifier`, header: `heading`, html: `comment`, image: `atom`, italic: `emphasis`, link: `link`, linkDefinition: `link`, list1: `list`, list2: `list.special`, list3: `list`, notextile: `string.special`, pre: `operator`, p: `content`, quote: `bracket`, span: `quote`, specialChar: `character`, strong: `strong`, sub: `content.special`, sup: `content.special`, table: `variableName.special`, tableHeading: `operator` };
function t(e2, t2) {
  t2.mode = u.newLayout, t2.tableHeading = false, t2.layoutType === `definitionList` && t2.spanningLayout && e2.match(l(`definitionListEnd`), false) && (t2.spanningLayout = false);
}
function n(t2, n2, a2) {
  if (a2 === `_`) return t2.eat(`_`) ? r(t2, n2, `italic`, /__/, 2) : r(t2, n2, `em`, /_/, 1);
  if (a2 === `*`) return t2.eat(`*`) ? r(t2, n2, `bold`, /\*\*/, 2) : r(t2, n2, `strong`, /\*/, 1);
  if (a2 === `[`) return t2.match(/\d+\]/) && (n2.footCite = true), i(n2);
  if (a2 === `(` && t2.match(/^(r|tm|c)\)/)) return e.specialChar;
  if (a2 === `<` && t2.match(/(\w+)[^>]+>[^<]+<\/\1>/)) return e.html;
  if (a2 === `?` && t2.eat(`?`)) return r(t2, n2, `cite`, /\?\?/, 2);
  if (a2 === `=` && t2.eat(`=`)) return r(t2, n2, `notextile`, /==/, 2);
  if (a2 === `-` && !t2.eat(`-`)) return r(t2, n2, `deletion`, /-/, 1);
  if (a2 === `+`) return r(t2, n2, `addition`, /\+/, 1);
  if (a2 === `~`) return r(t2, n2, `sub`, /~/, 1);
  if (a2 === `^`) return r(t2, n2, `sup`, /\^/, 1);
  if (a2 === `%`) return r(t2, n2, `span`, /%/, 1);
  if (a2 === `@`) return r(t2, n2, `code`, /@/, 1);
  if (a2 === `!`) {
    var o2 = r(t2, n2, `image`, /(?:\([^\)]+\))?!/, 1);
    return t2.match(/^:\S+/), o2;
  }
  return i(n2);
}
function r(e2, t2, n2, r2, a2) {
  var o2 = e2.pos > a2 ? e2.string.charAt(e2.pos - a2 - 1) : null, s2 = e2.peek();
  if (t2[n2]) {
    if ((!s2 || /\W/.test(s2)) && o2 && /\S/.test(o2)) {
      var c2 = i(t2);
      return t2[n2] = false, c2;
    }
  } else (!o2 || /\W/.test(o2)) && s2 && /\S/.test(s2) && e2.match(RegExp(`^.*\\S` + r2.source + `(?:\\W|$)`), false) && (t2[n2] = true, t2.mode = u.attributes);
  return i(t2);
}
function i(t2) {
  var n2 = a(t2);
  if (n2) return n2;
  var r2 = [];
  return t2.layoutType && r2.push(e[t2.layoutType]), r2 = r2.concat(o(t2, `addition`, `bold`, `cite`, `code`, `deletion`, `em`, `footCite`, `image`, `italic`, `link`, `span`, `strong`, `sub`, `sup`, `table`, `tableHeading`)), t2.layoutType === `header` && r2.push(e.header + `-` + t2.header), r2.length ? r2.join(` `) : null;
}
function a(t2) {
  var n2 = t2.layoutType;
  switch (n2) {
    case `notextile`:
    case `code`:
    case `pre`:
      return e[n2];
    default:
      return t2.notextile ? e.notextile + (n2 ? ` ` + e[n2] : ``) : null;
  }
}
function o(t2) {
  for (var n2 = [], r2 = 1; r2 < arguments.length; ++r2) t2[arguments[r2]] && n2.push(e[arguments[r2]]);
  return n2;
}
function s(e2) {
  var t2 = e2.spanningLayout, n2 = e2.layoutType;
  for (var r2 in e2) e2.hasOwnProperty(r2) && delete e2[r2];
  e2.mode = u.newLayout, t2 && (e2.layoutType = n2, e2.spanningLayout = true);
}
var c = { cache: {}, single: { bc: `bc`, bq: `bq`, definitionList: /- .*?:=+/, definitionListEnd: /.*=:\s*$/, div: `div`, drawTable: /\|.*\|/, foot: /fn\d+/, header: /h[1-6]/, html: /\s*<(?:\/)?(\w+)(?:[^>]+)?>(?:[^<]+<\/\1>)?/, link: /[^"]+":\S/, linkDefinition: /\[[^\s\]]+\]\S+/, list: /(?:#+|\*+)/, notextile: `notextile`, para: `p`, pre: `pre`, table: `table`, tableCellAttributes: /[\/\\]\d+/, tableHeading: /\|_\./, tableText: /[^"_\*\[\(\?\+~\^%@|-]+/, text: /[^!"_=\*\[\(<\?\+~\^%@-]+/ }, attributes: { align: /(?:<>|<|>|=)/, selector: /\([^\(][^\)]+\)/, lang: /\[[^\[\]]+\]/, pad: /(?:\(+|\)+){1,2}/, css: /\{[^\}]+\}/ }, createRe: function(e2) {
  switch (e2) {
    case `drawTable`:
      return c.makeRe(`^`, c.single.drawTable, `$`);
    case `html`:
      return c.makeRe(`^`, c.single.html, `(?:`, c.single.html, `)*`, `$`);
    case `linkDefinition`:
      return c.makeRe(`^`, c.single.linkDefinition, `$`);
    case `listLayout`:
      return c.makeRe(`^`, c.single.list, l(`allAttributes`), `*\\s+`);
    case `tableCellAttributes`:
      return c.makeRe(`^`, c.choiceRe(c.single.tableCellAttributes, l(`allAttributes`)), `+\\.`);
    case `type`:
      return c.makeRe(`^`, l(`allTypes`));
    case `typeLayout`:
      return c.makeRe(`^`, l(`allTypes`), l(`allAttributes`), `*\\.\\.?`, `(\\s+|$)`);
    case `attributes`:
      return c.makeRe(`^`, l(`allAttributes`), `+`);
    case `allTypes`:
      return c.choiceRe(c.single.div, c.single.foot, c.single.header, c.single.bc, c.single.bq, c.single.notextile, c.single.pre, c.single.table, c.single.para);
    case `allAttributes`:
      return c.choiceRe(c.attributes.selector, c.attributes.css, c.attributes.lang, c.attributes.align, c.attributes.pad);
    default:
      return c.makeRe(`^`, c.single[e2]);
  }
}, makeRe: function() {
  for (var e2 = ``, t2 = 0; t2 < arguments.length; ++t2) {
    var n2 = arguments[t2];
    e2 += typeof n2 == `string` ? n2 : n2.source;
  }
  return new RegExp(e2);
}, choiceRe: function() {
  for (var e2 = [arguments[0]], t2 = 1; t2 < arguments.length; ++t2) e2[t2 * 2 - 1] = `|`, e2[t2 * 2] = arguments[t2];
  return e2.unshift(`(?:`), e2.push(`)`), c.makeRe.apply(null, e2);
} };
function l(e2) {
  return c.cache[e2] || (c.cache[e2] = c.createRe(e2));
}
var u = { newLayout: function(e2, t2) {
  if (e2.match(l(`typeLayout`), false)) return t2.spanningLayout = false, (t2.mode = u.blockType)(e2, t2);
  var n2;
  return a(t2) || (e2.match(l(`listLayout`), false) ? n2 = u.list : e2.match(l(`drawTable`), false) ? n2 = u.table : e2.match(l(`linkDefinition`), false) ? n2 = u.linkDefinition : e2.match(l(`definitionList`)) ? n2 = u.definitionList : e2.match(l(`html`), false) && (n2 = u.html)), (t2.mode = n2 || u.text)(e2, t2);
}, blockType: function(e2, t2) {
  var n2, r2;
  if (t2.layoutType = null, n2 = e2.match(l(`type`))) r2 = n2[0];
  else return (t2.mode = u.text)(e2, t2);
  return (n2 = r2.match(l(`header`))) ? (t2.layoutType = `header`, t2.header = parseInt(n2[0][1])) : r2.match(l(`bq`)) ? t2.layoutType = `quote` : r2.match(l(`bc`)) ? t2.layoutType = `code` : r2.match(l(`foot`)) ? t2.layoutType = `footnote` : r2.match(l(`notextile`)) ? t2.layoutType = `notextile` : r2.match(l(`pre`)) ? t2.layoutType = `pre` : r2.match(l(`div`)) ? t2.layoutType = `div` : r2.match(l(`table`)) && (t2.layoutType = `table`), t2.mode = u.attributes, i(t2);
}, text: function(e2, t2) {
  if (e2.match(l(`text`))) return i(t2);
  var r2 = e2.next();
  return r2 === `"` ? (t2.mode = u.link)(e2, t2) : n(e2, t2, r2);
}, attributes: function(t2, n2) {
  return n2.mode = u.layoutLength, t2.match(l(`attributes`)) ? e.attributes : i(n2);
}, layoutLength: function(e2, t2) {
  return e2.eat(`.`) && e2.eat(`.`) && (t2.spanningLayout = true), t2.mode = u.text, i(t2);
}, list: function(e2, t2) {
  t2.listDepth = e2.match(l(`list`))[0].length;
  var n2 = (t2.listDepth - 1) % 3;
  return n2 ? n2 === 1 ? t2.layoutType = `list2` : t2.layoutType = `list3` : t2.layoutType = `list1`, t2.mode = u.attributes, i(t2);
}, link: function(t2, n2) {
  return n2.mode = u.text, t2.match(l(`link`)) ? (t2.match(/\S+/), e.link) : i(n2);
}, linkDefinition: function(t2) {
  return t2.skipToEnd(), e.linkDefinition;
}, definitionList: function(e2, t2) {
  return e2.match(l(`definitionList`)), t2.layoutType = `definitionList`, e2.match(/\s*$/) ? t2.spanningLayout = true : t2.mode = u.attributes, i(t2);
}, html: function(t2) {
  return t2.skipToEnd(), e.html;
}, table: function(e2, t2) {
  return t2.layoutType = `table`, (t2.mode = u.tableCell)(e2, t2);
}, tableCell: function(e2, t2) {
  return e2.match(l(`tableHeading`)) ? t2.tableHeading = true : e2.eat(`|`), t2.mode = u.tableCellAttributes, i(t2);
}, tableCellAttributes: function(t2, n2) {
  return n2.mode = u.tableText, t2.match(l(`tableCellAttributes`)) ? e.attributes : i(n2);
}, tableText: function(e2, t2) {
  return e2.match(l(`tableText`)) ? i(t2) : e2.peek() === `|` ? (t2.mode = u.tableCell, i(t2)) : n(e2, t2, e2.next());
} };
const d = { name: `textile`, startState: function() {
  return { mode: u.newLayout };
}, token: function(e2, n2) {
  return e2.sol() && t(e2, n2), n2.mode(e2, n2);
}, blankLine: s };
export {
  d as textile
};
