var e = /^(block|let*|return-from|catch|load-time-value|setq|eval-when|locally|symbol-macrolet|flet|macrolet|tagbody|function|multiple-value-call|the|go|multiple-value-prog1|throw|if|progn|unwind-protect|labels|progv|let|quote)$/, t = /^with|^def|^do|^prog|case$|^cond$|bind$|when$|unless$/, n = /^(?:[+\-]?(?:\d+|\d*\.\d+)(?:[efd][+\-]?\d+)?|[+\-]?\d+(?:\/[+\-]?\d+)?|#b[+\-]?[01]+|#o[+\-]?[0-7]+|#x[+\-]?[\da-f]+)/, r = /[^\s'`,@()\[\]";]/, i;
function a(e2) {
  for (var t2; t2 = e2.next(); ) if (t2 == `\\`) e2.next();
  else if (!r.test(t2)) {
    e2.backUp(1);
    break;
  }
  return e2.current();
}
function o(r2, o2) {
  if (r2.eatSpace()) return i = `ws`, null;
  if (r2.match(n)) return `number`;
  var l2 = r2.next();
  if (l2 == `\\` && (l2 = r2.next()), l2 == `"`) return (o2.tokenize = s)(r2, o2);
  if (l2 == `(`) return i = `open`, `bracket`;
  if (l2 == `)`) return i = `close`, `bracket`;
  if (l2 == `;`) return r2.skipToEnd(), i = `ws`, `comment`;
  if (/['`,@]/.test(l2)) return null;
  if (l2 == `|`) return r2.skipTo(`|`) ? (r2.next(), `variableName`) : (r2.skipToEnd(), `error`);
  if (l2 == `#`) {
    var l2 = r2.next();
    return l2 == `(` ? (i = `open`, `bracket`) : /[+\-=\.']/.test(l2) || /\d/.test(l2) && r2.match(/^\d*#/) ? null : l2 == `|` ? (o2.tokenize = c)(r2, o2) : l2 == `:` ? (a(r2), `meta`) : l2 == `\\` ? (r2.next(), a(r2), `string.special`) : `error`;
  } else {
    var u = a(r2);
    return u == `.` ? null : (i = `symbol`, u == `nil` || u == `t` || u.charAt(0) == `:` ? `atom` : o2.lastType == `open` && (e.test(u) || t.test(u)) ? `keyword` : u.charAt(0) == `&` ? `variableName.special` : `variableName`);
  }
}
function s(e2, t2) {
  for (var n2 = false, r2; r2 = e2.next(); ) {
    if (r2 == `"` && !n2) {
      t2.tokenize = o;
      break;
    }
    n2 = !n2 && r2 == `\\`;
  }
  return `string`;
}
function c(e2, t2) {
  for (var n2, r2; n2 = e2.next(); ) {
    if (n2 == `#` && r2 == `|`) {
      t2.tokenize = o;
      break;
    }
    r2 = n2;
  }
  return i = `ws`, `comment`;
}
const l = { name: `commonlisp`, startState: function() {
  return { ctx: { prev: null, start: 0, indentTo: 0 }, lastType: null, tokenize: o };
}, token: function(e2, n2) {
  e2.sol() && typeof n2.ctx.indentTo != `number` && (n2.ctx.indentTo = n2.ctx.start + 1), i = null;
  var r2 = n2.tokenize(e2, n2);
  return i != `ws` && (n2.ctx.indentTo == null ? i == `symbol` && t.test(e2.current()) ? n2.ctx.indentTo = n2.ctx.start + e2.indentUnit : n2.ctx.indentTo = `next` : n2.ctx.indentTo == `next` && (n2.ctx.indentTo = e2.column()), n2.lastType = i), i == `open` ? n2.ctx = { prev: n2.ctx, start: e2.column(), indentTo: null } : i == `close` && (n2.ctx = n2.ctx.prev || n2.ctx), r2;
}, indent: function(e2) {
  var t2 = e2.ctx.indentTo;
  return typeof t2 == `number` ? t2 : e2.ctx.start + 1;
}, languageData: { commentTokens: { line: `;;`, block: { open: `#|`, close: `|#` } }, closeBrackets: { brackets: [`(`, `[`, `{`, `"`] } } };
export {
  l as commonLisp
};
