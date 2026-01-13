var e = {}, t = { allTags: true, closeAll: true, list: true, newJournal: true, newTiddler: true, permaview: true, saveChanges: true, search: true, slider: true, tabs: true, tag: true, tagging: true, tags: true, tiddler: true, timeline: true, today: true, version: true, option: true, with: true, filter: true }, n = /[\w_\-]/i, r = /^\-\-\-\-+$/, i = /^\/\*\*\*$/, a = /^\*\*\*\/$/, o = /^<<<$/, s = /^\/\/\{\{\{$/, c = /^\/\/\}\}\}$/, l = /^<!--\{\{\{-->$/, u = /^<!--\}\}\}-->$/, d = /^\{\{\{$/, f = /^\}\}\}$/, p = /.*?\}\}\}/;
function m(e2, t2, n2) {
  return t2.tokenize = n2, n2(e2, t2);
}
function h(t2, f2) {
  var p2 = t2.sol(), h2 = t2.peek();
  if (f2.block = false, p2 && /[<\/\*{}\-]/.test(h2)) {
    if (t2.match(d)) return f2.block = true, m(t2, f2, v);
    if (t2.match(o)) return `quote`;
    if (t2.match(i) || t2.match(a) || t2.match(s) || t2.match(c) || t2.match(l) || t2.match(u)) return `comment`;
    if (t2.match(r)) return `contentSeparator`;
  }
  if (t2.next(), p2 && /[\/\*!#;:>|]/.test(h2)) {
    if (h2 == `!`) return t2.skipToEnd(), `header`;
    if (h2 == `*`) return t2.eatWhile(`*`), `comment`;
    if (h2 == `#`) return t2.eatWhile(`#`), `comment`;
    if (h2 == `;`) return t2.eatWhile(`;`), `comment`;
    if (h2 == `:`) return t2.eatWhile(`:`), `comment`;
    if (h2 == `>`) return t2.eatWhile(`>`), `quote`;
    if (h2 == `|`) return `header`;
  }
  if (h2 == `{` && t2.match(`{{`)) return m(t2, f2, v);
  if (/[hf]/i.test(h2) && /[ti]/i.test(t2.peek()) && t2.match(/\b(ttps?|tp|ile):\/\/[\-A-Z0-9+&@#\/%?=~_|$!:,.;]*[A-Z0-9+&@#\/%=~_|$]/i)) return `link`;
  if (h2 == `"`) return `string`;
  if (h2 == `~` || /[\[\]]/.test(h2) && t2.match(h2)) return `brace`;
  if (h2 == `@`) return t2.eatWhile(n), `link`;
  if (/\d/.test(h2)) return t2.eatWhile(/\d/), `number`;
  if (h2 == `/`) {
    if (t2.eat(`%`)) return m(t2, f2, g);
    if (t2.eat(`/`)) return m(t2, f2, y);
  }
  if (h2 == `_` && t2.eat(`_`)) return m(t2, f2, b);
  if (h2 == `-` && t2.eat(`-`)) {
    if (t2.peek() != ` `) return m(t2, f2, x);
    if (t2.peek() == ` `) return `brace`;
  }
  return h2 == `'` && t2.eat(`'`) ? m(t2, f2, _) : h2 == `<` && t2.eat(`<`) ? m(t2, f2, S) : (t2.eatWhile(/[\w\$_]/), e.propertyIsEnumerable(t2.current()) ? `keyword` : null);
}
function g(e2, t2) {
  for (var n2 = false, r2; r2 = e2.next(); ) {
    if (r2 == `/` && n2) {
      t2.tokenize = h;
      break;
    }
    n2 = r2 == `%`;
  }
  return `comment`;
}
function _(e2, t2) {
  for (var n2 = false, r2; r2 = e2.next(); ) {
    if (r2 == `'` && n2) {
      t2.tokenize = h;
      break;
    }
    n2 = r2 == `'`;
  }
  return `strong`;
}
function v(e2, t2) {
  var n2 = t2.block;
  return n2 && e2.current() ? `comment` : !n2 && e2.match(p) || n2 && e2.sol() && e2.match(f) ? (t2.tokenize = h, `comment`) : (e2.next(), `comment`);
}
function y(e2, t2) {
  for (var n2 = false, r2; r2 = e2.next(); ) {
    if (r2 == `/` && n2) {
      t2.tokenize = h;
      break;
    }
    n2 = r2 == `/`;
  }
  return `emphasis`;
}
function b(e2, t2) {
  for (var n2 = false, r2; r2 = e2.next(); ) {
    if (r2 == `_` && n2) {
      t2.tokenize = h;
      break;
    }
    n2 = r2 == `_`;
  }
  return `link`;
}
function x(e2, t2) {
  for (var n2 = false, r2; r2 = e2.next(); ) {
    if (r2 == `-` && n2) {
      t2.tokenize = h;
      break;
    }
    n2 = r2 == `-`;
  }
  return `deleted`;
}
function S(e2, n2) {
  if (e2.current() == `<<`) return `meta`;
  var r2 = e2.next();
  return r2 ? r2 == `>` && e2.peek() == `>` ? (e2.next(), n2.tokenize = h, `meta`) : (e2.eatWhile(/[\w\$_]/), t.propertyIsEnumerable(e2.current()) ? `keyword` : null) : (n2.tokenize = h, null);
}
const C = { name: `tiddlywiki`, startState: function() {
  return { tokenize: h };
}, token: function(e2, t2) {
  return e2.eatSpace() ? null : t2.tokenize(e2, t2);
} };
export {
  C as tiddlyWiki
};
