function e(e2, t2) {
  for (var n2 = 0; n2 < e2.length; n2++) t2(e2[n2], n2);
}
function t(e2, t2) {
  for (var n2 = 0; n2 < e2.length; n2++) if (t2(e2[n2], n2)) return true;
  return false;
}
var n = { unnamedDefinition: [`interface`], namedDefinition: [`module`, `library`, `macro`, `C-struct`, `C-union`, `C-function`, `C-callable-wrapper`], typeParameterizedDefinition: [`class`, `C-subtype`, `C-mapped-subtype`], otherParameterizedDefinition: [`method`, `function`, `C-variable`, `C-address`], constantSimpleDefinition: [`constant`], variableSimpleDefinition: [`variable`], otherSimpleDefinition: [`generic`, `domain`, `C-pointer-type`, `table`], statement: [`if`, `block`, `begin`, `method`, `case`, `for`, `select`, `when`, `unless`, `until`, `while`, `iterate`, `profiling`, `dynamic-bind`], separator: [`finally`, `exception`, `cleanup`, `else`, `elseif`, `afterwards`], other: [`above`, `below`, `by`, `from`, `handler`, `in`, `instance`, `let`, `local`, `otherwise`, `slot`, `subclass`, `then`, `to`, `keyed-by`, `virtual`], signalingCalls: [`signal`, `error`, `cerror`, `break`, `check-type`, `abort`] };
n.otherDefinition = n.unnamedDefinition.concat(n.namedDefinition).concat(n.otherParameterizedDefinition), n.definition = n.typeParameterizedDefinition.concat(n.otherDefinition), n.parameterizedDefinition = n.typeParameterizedDefinition.concat(n.otherParameterizedDefinition), n.simpleDefinition = n.constantSimpleDefinition.concat(n.variableSimpleDefinition).concat(n.otherSimpleDefinition), n.keyword = n.statement.concat(n.separator).concat(n.other);
var r = `[-_a-zA-Z?!*@<>$%]+`, i = RegExp(`^` + r), a = { symbolKeyword: r + `:`, symbolClass: `<` + r + `>`, symbolGlobal: `\\*` + r + `\\*`, symbolConstant: `\\$` + r }, o = { symbolKeyword: `atom`, symbolClass: `tag`, symbolGlobal: `variableName.standard`, symbolConstant: `variableName.constant` };
for (var s in a) a.hasOwnProperty(s) && (a[s] = RegExp(`^` + a[s]));
a.keyword = [/^with(?:out)?-[-_a-zA-Z?!*@<>$%]+/];
var c = {};
c.keyword = `keyword`, c.definition = `def`, c.simpleDefinition = `def`, c.signalingCalls = `builtin`;
var l = {}, u = {};
e([`keyword`, `definition`, `simpleDefinition`, `signalingCalls`], function(t2) {
  e(n[t2], function(e2) {
    l[e2] = t2, u[e2] = c[t2];
  });
});
function d(e2, t2, n2) {
  return t2.tokenize = n2, n2(e2, t2);
}
function f(e2, n2) {
  var r2 = e2.peek();
  if (r2 == `'` || r2 == `"`) return e2.next(), d(e2, n2, m(r2, `string`));
  if (r2 == `/`) {
    if (e2.next(), e2.eat(`*`)) return d(e2, n2, p);
    if (e2.eat(`/`)) return e2.skipToEnd(), `comment`;
    e2.backUp(1);
  } else if (/[+\-\d\.]/.test(r2)) {
    if (e2.match(/^[+-]?[0-9]*\.[0-9]*([esdx][+-]?[0-9]+)?/i) || e2.match(/^[+-]?[0-9]+([esdx][+-]?[0-9]+)/i) || e2.match(/^[+-]?\d+/)) return `number`;
  } else if (r2 == `#`) return e2.next(), r2 = e2.peek(), r2 == `"` ? (e2.next(), d(e2, n2, m(`"`, `string`))) : r2 == `b` ? (e2.next(), e2.eatWhile(/[01]/), `number`) : r2 == `x` ? (e2.next(), e2.eatWhile(/[\da-f]/i), `number`) : r2 == `o` ? (e2.next(), e2.eatWhile(/[0-7]/), `number`) : r2 == `#` ? (e2.next(), `punctuation`) : r2 == `[` || r2 == `(` ? (e2.next(), `bracket`) : e2.match(/f|t|all-keys|include|key|next|rest/i) ? `atom` : (e2.eatWhile(/[-a-zA-Z]/), `error`);
  else if (r2 == `~`) return e2.next(), r2 = e2.peek(), r2 == `=` ? (e2.next(), r2 = e2.peek(), r2 == `=` && e2.next(), `operator`) : `operator`;
  else if (r2 == `:`) {
    if (e2.next(), r2 = e2.peek(), r2 == `=`) return e2.next(), `operator`;
    if (r2 == `:`) return e2.next(), `punctuation`;
  } else if (`[](){}`.indexOf(r2) != -1) return e2.next(), `bracket`;
  else if (`.,`.indexOf(r2) != -1) return e2.next(), `punctuation`;
  else if (e2.match(`end`)) return `keyword`;
  for (var s in a) if (a.hasOwnProperty(s)) {
    var c2 = a[s];
    if (c2 instanceof Array && t(c2, function(t2) {
      return e2.match(t2);
    }) || e2.match(c2)) return o[s];
  }
  return /[+\-*\/^=<>&|]/.test(r2) ? (e2.next(), `operator`) : e2.match(`define`) ? `def` : (e2.eatWhile(/[\w\-]/), l.hasOwnProperty(e2.current()) ? u[e2.current()] : e2.current().match(i) ? `variable` : (e2.next(), `variableName.standard`));
}
function p(e2, t2) {
  for (var n2 = false, r2 = false, i2 = 0, a2; a2 = e2.next(); ) {
    if (a2 == `/` && n2) if (i2 > 0) i2--;
    else {
      t2.tokenize = f;
      break;
    }
    else a2 == `*` && r2 && i2++;
    n2 = a2 == `*`, r2 = a2 == `/`;
  }
  return `comment`;
}
function m(e2, t2) {
  return function(n2, r2) {
    for (var i2 = false, a2, o2 = false; (a2 = n2.next()) != null; ) {
      if (a2 == e2 && !i2) {
        o2 = true;
        break;
      }
      i2 = !i2 && a2 == `\\`;
    }
    return (o2 || !i2) && (r2.tokenize = f), t2;
  };
}
const h = { name: `dylan`, startState: function() {
  return { tokenize: f, currentIndent: 0 };
}, token: function(e2, t2) {
  return e2.eatSpace() ? null : t2.tokenize(e2, t2);
}, languageData: { commentTokens: { block: { open: `/*`, close: `*/` } } } };
export {
  h as dylan
};
