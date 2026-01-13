function e(e2) {
  for (var t2 = {}, n2 = 0, r2 = e2.length; n2 < r2; ++n2) t2[e2[n2]] = true;
  return t2;
}
var t = `alias.and.BEGIN.begin.break.case.class.def.defined?.do.else.elsif.END.end.ensure.false.for.if.in.module.next.not.or.redo.rescue.retry.return.self.super.then.true.undef.unless.until.when.while.yield.nil.raise.throw.catch.fail.loop.callcc.caller.lambda.proc.public.protected.private.require.load.require_relative.extend.autoload.__END__.__FILE__.__LINE__.__dir__`.split(`.`), n = e(t), r = e([`def`, `class`, `case`, `for`, `while`, `until`, `module`, `catch`, `loop`, `proc`, `begin`]), i = e([`end`, `until`]), a = { "[": `]`, "{": `}`, "(": `)` }, o = { "]": `[`, "}": `{`, ")": `(` }, s;
function c(e2, t2, n2) {
  return n2.tokenize.push(e2), e2(t2, n2);
}
function l(e2, t2) {
  if (e2.sol() && e2.match(`=begin`) && e2.eol()) return t2.tokenize.push(h), `comment`;
  if (e2.eatSpace()) return null;
  var n2 = e2.next(), r2;
  if (n2 == "`" || n2 == `'` || n2 == `"`) return c(p(n2, `string`, n2 == `"` || n2 == "`"), e2, t2);
  if (n2 == `/`) return u(e2) ? c(p(n2, `string.special`, true), e2, t2) : `operator`;
  if (n2 == `%`) {
    var i2 = `string`, o2 = true;
    e2.eat(`s`) ? i2 = `atom` : e2.eat(/[WQ]/) ? i2 = `string` : e2.eat(/[r]/) ? i2 = `string.special` : e2.eat(/[wxq]/) && (i2 = `string`, o2 = false);
    var l2 = e2.eat(/[^\w\s=]/);
    return l2 ? (a.propertyIsEnumerable(l2) && (l2 = a[l2]), c(p(l2, i2, o2, true), e2, t2)) : `operator`;
  } else if (n2 == `#`) return e2.skipToEnd(), `comment`;
  else if (n2 == `<` && (r2 = e2.match(/^<([-~])[\`\"\']?([a-zA-Z_?]\w*)[\`\"\']?(?:;|$)/))) return c(m(r2[2], r2[1]), e2, t2);
  else if (n2 == `0`) return e2.eat(`x`) ? e2.eatWhile(/[\da-fA-F]/) : e2.eat(`b`) ? e2.eatWhile(/[01]/) : e2.eatWhile(/[0-7]/), `number`;
  else if (/\d/.test(n2)) return e2.match(/^[\d_]*(?:\.[\d_]+)?(?:[eE][+\-]?[\d_]+)?/), `number`;
  else if (n2 == `?`) {
    for (; e2.match(/^\\[CM]-/); ) ;
    return e2.eat(`\\`) ? e2.eatWhile(/\w/) : e2.next(), `string`;
  } else if (n2 == `:`) return e2.eat(`'`) ? c(p(`'`, `atom`, false), e2, t2) : e2.eat(`"`) ? c(p(`"`, `atom`, true), e2, t2) : e2.eat(/[\<\>]/) ? (e2.eat(/[\<\>]/), `atom`) : e2.eat(/[\+\-\*\/\&\|\:\!]/) ? `atom` : e2.eat(/[a-zA-Z$@_\xa1-\uffff]/) ? (e2.eatWhile(/[\w$\xa1-\uffff]/), e2.eat(/[\?\!\=]/), `atom`) : `operator`;
  else if (n2 == `@` && e2.match(/^@?[a-zA-Z_\xa1-\uffff]/)) return e2.eat(`@`), e2.eatWhile(/[\w\xa1-\uffff]/), `propertyName`;
  else if (n2 == `$`) return e2.eat(/[a-zA-Z_]/) ? e2.eatWhile(/[\w]/) : e2.eat(/\d/) ? e2.eat(/\d/) : e2.next(), `variableName.special`;
  else if (/[a-zA-Z_\xa1-\uffff]/.test(n2)) return e2.eatWhile(/[\w\xa1-\uffff]/), e2.eat(/[\?\!]/), e2.eat(`:`) ? `atom` : `variable`;
  else if (n2 == `|` && (t2.varList || t2.lastTok == `{` || t2.lastTok == `do`)) return s = `|`, null;
  else if (/[\(\)\[\]{}\\;]/.test(n2)) return s = n2, null;
  else if (n2 == `-` && e2.eat(`>`)) return `operator`;
  else if (/[=+\-\/*:\.^%<>~|]/.test(n2)) {
    var d2 = e2.eatWhile(/[=+\-\/*:\.^%<>~|]/);
    return n2 == `.` && !d2 && (s = `.`), `operator`;
  } else return null;
}
function u(e2) {
  for (var t2 = e2.pos, n2 = 0, r2, i2 = false, a2 = false; (r2 = e2.next()) != null; ) if (a2) a2 = false;
  else {
    if (`[{(`.indexOf(r2) > -1) n2++;
    else if (`]})`.indexOf(r2) > -1) {
      if (n2--, n2 < 0) break;
    } else if (r2 == `/` && n2 == 0) {
      i2 = true;
      break;
    }
    a2 = r2 == `\\`;
  }
  return e2.backUp(e2.pos - t2), i2;
}
function d(e2) {
  return e2 || (e2 = 1), function(t2, n2) {
    if (t2.peek() == `}`) {
      if (e2 == 1) return n2.tokenize.pop(), n2.tokenize[n2.tokenize.length - 1](t2, n2);
      n2.tokenize[n2.tokenize.length - 1] = d(e2 - 1);
    } else t2.peek() == `{` && (n2.tokenize[n2.tokenize.length - 1] = d(e2 + 1));
    return l(t2, n2);
  };
}
function f() {
  var e2 = false;
  return function(t2, n2) {
    return e2 ? (n2.tokenize.pop(), n2.tokenize[n2.tokenize.length - 1](t2, n2)) : (e2 = true, l(t2, n2));
  };
}
function p(e2, t2, n2, r2) {
  return function(i2, a2) {
    var o2 = false, s2;
    for (a2.context.type === `read-quoted-paused` && (a2.context = a2.context.prev, i2.eat(`}`)); (s2 = i2.next()) != null; ) {
      if (s2 == e2 && (r2 || !o2)) {
        a2.tokenize.pop();
        break;
      }
      if (n2 && s2 == `#` && !o2) {
        if (i2.eat(`{`)) {
          e2 == `}` && (a2.context = { prev: a2.context, type: `read-quoted-paused` }), a2.tokenize.push(d());
          break;
        } else if (/[@\$]/.test(i2.peek())) {
          a2.tokenize.push(f());
          break;
        }
      }
      o2 = !o2 && s2 == `\\`;
    }
    return t2;
  };
}
function m(e2, t2) {
  return function(n2, r2) {
    return t2 && n2.eatSpace(), n2.match(e2) ? r2.tokenize.pop() : n2.skipToEnd(), `string`;
  };
}
function h(e2, t2) {
  return e2.sol() && e2.match(`=end`) && e2.eol() && t2.tokenize.pop(), e2.skipToEnd(), `comment`;
}
const g = { name: `ruby`, startState: function(e2) {
  return { tokenize: [l], indented: 0, context: { type: `top`, indented: -e2 }, continuedLine: false, lastTok: null, varList: false };
}, token: function(e2, t2) {
  s = null, e2.sol() && (t2.indented = e2.indentation());
  var a2 = t2.tokenize[t2.tokenize.length - 1](e2, t2), o2, c2 = s;
  if (a2 == `variable`) {
    var l2 = e2.current();
    a2 = t2.lastTok == `.` ? `property` : n.propertyIsEnumerable(e2.current()) ? `keyword` : /^[A-Z]/.test(l2) ? `tag` : t2.lastTok == `def` || t2.lastTok == `class` || t2.varList ? `def` : `variable`, a2 == `keyword` && (c2 = l2, r.propertyIsEnumerable(l2) ? o2 = `indent` : i.propertyIsEnumerable(l2) ? o2 = `dedent` : ((l2 == `if` || l2 == `unless`) && e2.column() == e2.indentation() || l2 == `do` && t2.context.indented < t2.indented) && (o2 = `indent`));
  }
  return (s || a2 && a2 != `comment`) && (t2.lastTok = c2), s == `|` && (t2.varList = !t2.varList), o2 == `indent` || /[\(\[\{]/.test(s) ? t2.context = { prev: t2.context, type: s || a2, indented: t2.indented } : (o2 == `dedent` || /[\)\]\}]/.test(s)) && t2.context.prev && (t2.context = t2.context.prev), e2.eol() && (t2.continuedLine = s == `\\` || a2 == `operator`), a2;
}, indent: function(e2, t2, n2) {
  if (e2.tokenize[e2.tokenize.length - 1] != l) return null;
  var r2 = t2 && t2.charAt(0), i2 = e2.context, a2 = i2.type == o[r2] || i2.type == `keyword` && /^(?:end|until|else|elsif|when|rescue)\b/.test(t2);
  return i2.indented + (a2 ? 0 : n2.unit) + (e2.continuedLine ? n2.unit : 0);
}, languageData: { indentOnInput: /^\s*(?:end|rescue|elsif|else|\})$/, commentTokens: { line: `#` }, autocomplete: t } };
export {
  g as ruby
};
