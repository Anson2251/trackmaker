function e(e2) {
  var t2 = e2.statementIndent, n2 = e2.jsonld, r2 = e2.json || n2, i2 = e2.typescript, a = e2.wordCharacters || /[\w$\xa1-\uffff]/, o = (function() {
    function e3(e4) {
      return { type: e4, style: `keyword` };
    }
    var t3 = e3(`keyword a`), n3 = e3(`keyword b`), r3 = e3(`keyword c`), i3 = e3(`keyword d`), a2 = e3(`operator`), o2 = { type: `atom`, style: `atom` };
    return { if: e3(`if`), while: t3, with: t3, else: n3, do: n3, try: n3, finally: n3, return: i3, break: i3, continue: i3, new: e3(`new`), delete: r3, void: r3, throw: r3, debugger: e3(`debugger`), var: e3(`var`), const: e3(`var`), let: e3(`var`), function: e3(`function`), catch: e3(`catch`), for: e3(`for`), switch: e3(`switch`), case: e3(`case`), default: e3(`default`), in: a2, typeof: a2, instanceof: a2, true: o2, false: o2, null: o2, undefined: o2, NaN: o2, Infinity: o2, this: e3(`this`), class: e3(`class`), super: e3(`atom`), yield: r3, export: e3(`export`), import: e3(`import`), extends: r3, await: r3 };
  })(), s = /[+\-*&%=<>!?|~^@]/, c = /^@(context|id|value|language|type|container|list|set|reverse|index|base|vocab|graph)"/;
  function l(e3) {
    for (var t3 = false, n3, r3 = false; (n3 = e3.next()) != null; ) {
      if (!t3) {
        if (n3 == `/` && !r3) return;
        n3 == `[` ? r3 = true : r3 && n3 == `]` && (r3 = false);
      }
      t3 = !t3 && n3 == `\\`;
    }
  }
  var u, d;
  function f(e3, t3, n3) {
    return u = e3, d = n3, t3;
  }
  function p(e3, t3) {
    var n3 = e3.next();
    if (n3 == `"` || n3 == `'`) return t3.tokenize = ee(n3), t3.tokenize(e3, t3);
    if (n3 == `.` && e3.match(/^\d[\d_]*(?:[eE][+\-]?[\d_]+)?/)) return f(`number`, `number`);
    if (n3 == `.` && e3.match(`..`)) return f(`spread`, `meta`);
    if (/[\[\]{}\(\),;\:\.]/.test(n3)) return f(n3);
    if (n3 == `=` && e3.eat(`>`)) return f(`=>`, `operator`);
    if (n3 == `0` && e3.match(/^(?:x[\dA-Fa-f_]+|o[0-7_]+|b[01_]+)n?/)) return f(`number`, `number`);
    if (/\d/.test(n3)) return e3.match(/^[\d_]*(?:n|(?:\.[\d_]*)?(?:[eE][+\-]?[\d_]+)?)?/), f(`number`, `number`);
    if (n3 == `/`) return e3.eat(`*`) ? (t3.tokenize = m, m(e3, t3)) : e3.eat(`/`) ? (e3.skipToEnd(), f(`comment`, `comment`)) : et(e3, t3, 1) ? (l(e3), e3.match(/^\b(([gimyus])(?![gimyus]*\2))+\b/), f(`regexp`, `string.special`)) : (e3.eat(`=`), f(`operator`, `operator`, e3.current()));
    if (n3 == "`") return t3.tokenize = h, h(e3, t3);
    if (n3 == `#` && e3.peek() == `!`) return e3.skipToEnd(), f(`meta`, `meta`);
    if (n3 == `#` && e3.eatWhile(a)) return f(`variable`, `property`);
    if (n3 == `<` && e3.match(`!--`) || n3 == `-` && e3.match(`->`) && !/\S/.test(e3.string.slice(0, e3.start))) return e3.skipToEnd(), f(`comment`, `comment`);
    if (s.test(n3)) return (n3 != `>` || !t3.lexical || t3.lexical.type != `>`) && (e3.eat(`=`) ? (n3 == `!` || n3 == `=`) && e3.eat(`=`) : /[<>*+\-|&?]/.test(n3) && (e3.eat(n3), n3 == `>` && e3.eat(n3))), n3 == `?` && e3.eat(`.`) ? f(`.`) : f(`operator`, `operator`, e3.current());
    if (a.test(n3)) {
      e3.eatWhile(a);
      var r3 = e3.current();
      if (t3.lastType != `.`) {
        if (o.propertyIsEnumerable(r3)) {
          var i3 = o[r3];
          return f(i3.type, i3.style, r3);
        }
        if (r3 == `async` && e3.match(/^(\s|\/\*([^*]|\*(?!\/))*?\*\/)*[\[\(\w]/, false)) return f(`async`, `keyword`, r3);
      }
      return f(`variable`, `variable`, r3);
    }
  }
  function ee(e3) {
    return function(t3, r3) {
      var i3 = false, a2;
      if (n2 && t3.peek() == `@` && t3.match(c)) return r3.tokenize = p, f(`jsonld-keyword`, `meta`);
      for (; (a2 = t3.next()) != null && !(a2 == e3 && !i3); ) i3 = !i3 && a2 == `\\`;
      return i3 || (r3.tokenize = p), f(`string`, `string`);
    };
  }
  function m(e3, t3) {
    for (var n3 = false, r3; r3 = e3.next(); ) {
      if (r3 == `/` && n3) {
        t3.tokenize = p;
        break;
      }
      n3 = r3 == `*`;
    }
    return f(`comment`, `comment`);
  }
  function h(e3, t3) {
    for (var n3 = false, r3; (r3 = e3.next()) != null; ) {
      if (!n3 && (r3 == "`" || r3 == `$` && e3.eat(`{`))) {
        t3.tokenize = p;
        break;
      }
      n3 = !n3 && r3 == `\\`;
    }
    return f(`quasi`, `string.special`, e3.current());
  }
  var te = `([{}])`;
  function ne(e3, t3) {
    t3.fatArrowAt && (t3.fatArrowAt = null);
    var n3 = e3.string.indexOf(`=>`, e3.start);
    if (!(n3 < 0)) {
      if (i2) {
        var r3 = /:\s*(?:\w+(?:<[^>]*>|\[\])?|\{[^}]*\})\s*$/.exec(e3.string.slice(e3.start, n3));
        r3 && (n3 = r3.index);
      }
      for (var o2 = 0, s2 = false, c2 = n3 - 1; c2 >= 0; --c2) {
        var l2 = e3.string.charAt(c2), u2 = te.indexOf(l2);
        if (u2 >= 0 && u2 < 3) {
          if (!o2) {
            ++c2;
            break;
          }
          if (--o2 == 0) {
            l2 == `(` && (s2 = true);
            break;
          }
        } else if (u2 >= 3 && u2 < 6) ++o2;
        else if (a.test(l2)) s2 = true;
        else if (/["'\/`]/.test(l2)) for (; ; --c2) {
          if (c2 == 0) return;
          if (e3.string.charAt(c2 - 1) == l2 && e3.string.charAt(c2 - 2) != `\\`) {
            c2--;
            break;
          }
        }
        else if (s2 && !o2) {
          ++c2;
          break;
        }
      }
      s2 && !o2 && (t3.fatArrowAt = c2);
    }
  }
  var re = { atom: true, number: true, variable: true, string: true, regexp: true, this: true, import: true, "jsonld-keyword": true };
  function ie(e3, t3, n3, r3, i3, a2) {
    this.indented = e3, this.column = t3, this.type = n3, this.prev = i3, this.info = a2, r3 != null && (this.align = r3);
  }
  function ae(e3, t3) {
    for (var n3 = e3.localVars; n3; n3 = n3.next) if (n3.name == t3) return true;
    for (var r3 = e3.context; r3; r3 = r3.prev) for (var n3 = r3.vars; n3; n3 = n3.next) if (n3.name == t3) return true;
  }
  function oe(e3, t3, n3, i3, a2) {
    var o2 = e3.cc;
    for (g.state = e3, g.stream = a2, g.marked = null, g.cc = o2, g.style = t3, e3.lexical.hasOwnProperty(`align`) || (e3.lexical.align = true); ; ) if ((o2.length ? o2.pop() : r2 ? A : k)(n3, i3)) {
      for (; o2.length && o2[o2.length - 1].lex; ) o2.pop()();
      return g.marked ? g.marked : n3 == `variable` && ae(e3, i3) ? `variableName.local` : t3;
    }
  }
  var g = { state: null, column: null, marked: null, cc: null };
  function _() {
    for (var e3 = arguments.length - 1; e3 >= 0; e3--) g.cc.push(arguments[e3]);
  }
  function v() {
    return _.apply(null, arguments), true;
  }
  function se(e3, t3) {
    for (var n3 = t3; n3; n3 = n3.next) if (n3.name == e3) return true;
    return false;
  }
  function y(t3) {
    var n3 = g.state;
    if (g.marked = `def`, n3.context) {
      if (n3.lexical.info == `var` && n3.context && n3.context.block) {
        var r3 = ce(t3, n3.context);
        if (r3 != null) {
          n3.context = r3;
          return;
        }
      } else if (!se(t3, n3.localVars)) {
        n3.localVars = new S(t3, n3.localVars);
        return;
      }
    }
    e2.globalVars && !se(t3, n3.globalVars) && (n3.globalVars = new S(t3, n3.globalVars));
  }
  function ce(e3, t3) {
    if (t3) if (t3.block) {
      var n3 = ce(e3, t3.prev);
      return n3 ? n3 == t3.prev ? t3 : new x(n3, t3.vars, true) : null;
    } else if (se(e3, t3.vars)) return t3;
    else return new x(t3.prev, new S(e3, t3.vars), false);
    else return null;
  }
  function b(e3) {
    return e3 == `public` || e3 == `private` || e3 == `protected` || e3 == `abstract` || e3 == `readonly`;
  }
  function x(e3, t3, n3) {
    this.prev = e3, this.vars = t3, this.block = n3;
  }
  function S(e3, t3) {
    this.name = e3, this.next = t3;
  }
  var le = new S(`this`, new S(`arguments`, null));
  function C() {
    g.state.context = new x(g.state.context, g.state.localVars, false), g.state.localVars = le;
  }
  function w() {
    g.state.context = new x(g.state.context, g.state.localVars, true), g.state.localVars = null;
  }
  C.lex = w.lex = true;
  function T() {
    g.state.localVars = g.state.context.vars, g.state.context = g.state.context.prev;
  }
  T.lex = true;
  function E(e3, t3) {
    var n3 = function() {
      var n4 = g.state, r3 = n4.indented;
      if (n4.lexical.type == `stat`) r3 = n4.lexical.indented;
      else for (var i3 = n4.lexical; i3 && i3.type == `)` && i3.align; i3 = i3.prev) r3 = i3.indented;
      n4.lexical = new ie(r3, g.stream.column(), e3, null, n4.lexical, t3);
    };
    return n3.lex = true, n3;
  }
  function D() {
    var e3 = g.state;
    e3.lexical.prev && (e3.lexical.type == `)` && (e3.indented = e3.lexical.indented), e3.lexical = e3.lexical.prev);
  }
  D.lex = true;
  function O(e3) {
    function t3(n3) {
      return n3 == e3 ? v() : e3 == `;` || n3 == `}` || n3 == `)` || n3 == `]` ? _() : v(t3);
    }
    return t3;
  }
  function k(e3, t3) {
    return e3 == `var` ? v(E(`vardef`, t3), Me, O(`;`), D) : e3 == `keyword a` ? v(E(`form`), de, k, D) : e3 == `keyword b` ? v(E(`form`), k, D) : e3 == `keyword d` ? g.stream.match(/^\s*$/, false) ? v() : v(E(`stat`), M, O(`;`), D) : e3 == `debugger` ? v(O(`;`)) : e3 == `{` ? v(E(`}`), w, B, D, T) : e3 == `;` ? v() : e3 == `if` ? (g.state.lexical.info == `else` && g.state.cc[g.state.cc.length - 1] == D && g.state.cc.pop()(), v(E(`form`), de, k, D, Ie)) : e3 == `function` ? v(Y) : e3 == `for` ? v(E(`form`), w, Le, k, T, D) : e3 == `class` || i2 && t3 == `interface` ? (g.marked = `keyword`, v(E(`form`, e3 == `class` ? e3 : t3), Ve, D)) : e3 == `variable` ? i2 && t3 == `declare` ? (g.marked = `keyword`, v(k)) : i2 && (t3 == `module` || t3 == `enum` || t3 == `type`) && g.stream.match(/^\s*\w/, false) ? (g.marked = `keyword`, t3 == `enum` ? v(Ze) : t3 == `type` ? v(ze, O(`operator`), H, O(`;`)) : v(E(`form`), K, O(`{`), E(`}`), B, D, D)) : i2 && t3 == `namespace` ? (g.marked = `keyword`, v(E(`form`), A, k, D)) : i2 && t3 == `abstract` ? (g.marked = `keyword`, v(k)) : v(E(`stat`), ye) : e3 == `switch` ? v(E(`form`), de, O(`{`), E(`}`, `switch`), w, B, D, D, T) : e3 == `case` ? v(A, O(`:`)) : e3 == `default` ? v(O(`:`)) : e3 == `catch` ? v(E(`form`), C, ue, k, D, T) : e3 == `export` ? v(E(`stat`), Ue, D) : e3 == `import` ? v(E(`stat`), Ge, D) : e3 == `async` ? v(k) : t3 == `@` ? v(A, k) : _(E(`stat`), A, O(`;`), D);
  }
  function ue(e3) {
    if (e3 == `(`) return v(Z, O(`)`));
  }
  function A(e3, t3) {
    return fe(e3, t3, false);
  }
  function j(e3, t3) {
    return fe(e3, t3, true);
  }
  function de(e3) {
    return e3 == `(` ? v(E(`)`), M, O(`)`), D) : _();
  }
  function fe(e3, t3, n3) {
    if (g.state.fatArrowAt == g.stream.start) {
      var r3 = n3 ? he : me;
      if (e3 == `(`) return v(C, E(`)`), R(Z, `)`), D, O(`=>`), r3, T);
      if (e3 == `variable`) return _(C, K, O(`=>`), r3, T);
    }
    var a2 = n3 ? P : N;
    return re.hasOwnProperty(e3) ? v(a2) : e3 == `function` ? v(Y, a2) : e3 == `class` || i2 && t3 == `interface` ? (g.marked = `keyword`, v(E(`form`), Be, D)) : e3 == `keyword c` || e3 == `async` ? v(n3 ? j : A) : e3 == `(` ? v(E(`)`), M, O(`)`), D, a2) : e3 == `operator` || e3 == `spread` ? v(n3 ? j : A) : e3 == `[` ? v(E(`]`), Xe, D, a2) : e3 == `{` ? z(I, `}`, null, a2) : e3 == `quasi` ? _(F, a2) : e3 == `new` ? v(ge(n3)) : v();
  }
  function M(e3) {
    return e3.match(/[;\}\)\],]/) ? _() : _(A);
  }
  function N(e3, t3) {
    return e3 == `,` ? v(M) : P(e3, t3, false);
  }
  function P(e3, t3, n3) {
    var r3 = n3 == 0 ? N : P, a2 = n3 == 0 ? A : j;
    if (e3 == `=>`) return v(C, n3 ? he : me, T);
    if (e3 == `operator`) return /\+\+|--/.test(t3) || i2 && t3 == `!` ? v(r3) : i2 && t3 == `<` && g.stream.match(/^([^<>]|<[^<>]*>)*>\s*\(/, false) ? v(E(`>`), R(H, `>`), D, r3) : t3 == `?` ? v(A, O(`:`), a2) : v(a2);
    if (e3 == `quasi`) return _(F, r3);
    if (e3 != `;`) {
      if (e3 == `(`) return z(j, `)`, `call`, r3);
      if (e3 == `.`) return v(be, r3);
      if (e3 == `[`) return v(E(`]`), M, O(`]`), D, r3);
      if (i2 && t3 == `as`) return g.marked = `keyword`, v(H, r3);
      if (e3 == `regexp`) return g.state.lastType = g.marked = `operator`, g.stream.backUp(g.stream.pos - g.stream.start - 1), v(a2);
    }
  }
  function F(e3, t3) {
    return e3 == `quasi` ? t3.slice(t3.length - 2) == "${" ? v(M, pe) : v(F) : _();
  }
  function pe(e3) {
    if (e3 == `}`) return g.marked = `string.special`, g.state.tokenize = h, v(F);
  }
  function me(e3) {
    return ne(g.stream, g.state), _(e3 == `{` ? k : A);
  }
  function he(e3) {
    return ne(g.stream, g.state), _(e3 == `{` ? k : j);
  }
  function ge(e3) {
    return function(t3) {
      return t3 == `.` ? v(e3 ? ve : _e) : t3 == `variable` && i2 ? v(Ae, e3 ? P : N) : _(e3 ? j : A);
    };
  }
  function _e(e3, t3) {
    if (t3 == `target`) return g.marked = `keyword`, v(N);
  }
  function ve(e3, t3) {
    if (t3 == `target`) return g.marked = `keyword`, v(P);
  }
  function ye(e3) {
    return e3 == `:` ? v(D, k) : _(N, O(`;`), D);
  }
  function be(e3) {
    if (e3 == `variable`) return g.marked = `property`, v();
  }
  function I(e3, t3) {
    if (e3 == `async`) return g.marked = `property`, v(I);
    if (e3 == `variable` || g.style == `keyword`) {
      if (g.marked = `property`, t3 == `get` || t3 == `set`) return v(xe);
      var r3;
      return i2 && g.state.fatArrowAt == g.stream.start && (r3 = g.stream.match(/^\s*:\s*/, false)) && (g.state.fatArrowAt = g.stream.pos + r3[0].length), v(L);
    } else if (e3 == `number` || e3 == `string`) return g.marked = n2 ? `property` : g.style + ` property`, v(L);
    else if (e3 == `jsonld-keyword`) return v(L);
    else if (i2 && b(t3)) return g.marked = `keyword`, v(I);
    else if (e3 == `[`) return v(A, V, O(`]`), L);
    else if (e3 == `spread`) return v(j, L);
    else if (t3 == `*`) return g.marked = `keyword`, v(I);
    else if (e3 == `:`) return _(L);
  }
  function xe(e3) {
    return e3 == `variable` ? (g.marked = `property`, v(Y)) : _(L);
  }
  function L(e3) {
    if (e3 == `:`) return v(j);
    if (e3 == `(`) return _(Y);
  }
  function R(e3, t3, n3) {
    function r3(i3, a2) {
      if (n3 ? n3.indexOf(i3) > -1 : i3 == `,`) {
        var o2 = g.state.lexical;
        return o2.info == `call` && (o2.pos = (o2.pos || 0) + 1), v(function(n4, r4) {
          return n4 == t3 || r4 == t3 ? _() : _(e3);
        }, r3);
      }
      return i3 == t3 || a2 == t3 ? v() : n3 && n3.indexOf(`;`) > -1 ? _(e3) : v(O(t3));
    }
    return function(n4, i3) {
      return n4 == t3 || i3 == t3 ? v() : _(e3, r3);
    };
  }
  function z(e3, t3, n3) {
    for (var r3 = 3; r3 < arguments.length; r3++) g.cc.push(arguments[r3]);
    return v(E(t3, n3), R(e3, t3), D);
  }
  function B(e3) {
    return e3 == `}` ? v() : _(k, B);
  }
  function V(e3, t3) {
    if (i2) {
      if (e3 == `:`) return v(H);
      if (t3 == `?`) return v(V);
    }
  }
  function Se(e3, t3) {
    if (i2 && (e3 == `:` || t3 == `in`)) return v(H);
  }
  function Ce(e3) {
    if (i2 && e3 == `:`) return g.stream.match(/^\s*\w+\s+is\b/, false) ? v(A, we, H) : v(H);
  }
  function we(e3, t3) {
    if (t3 == `is`) return g.marked = `keyword`, v();
  }
  function H(e3, t3) {
    if (t3 == `keyof` || t3 == `typeof` || t3 == `infer` || t3 == `readonly`) return g.marked = `keyword`, v(t3 == `typeof` ? j : H);
    if (e3 == `variable` || t3 == `void`) return g.marked = `type`, v(W);
    if (t3 == `|` || t3 == `&`) return v(H);
    if (e3 == `string` || e3 == `number` || e3 == `atom`) return v(W);
    if (e3 == `[`) return v(E(`]`), R(H, `]`, `,`), D, W);
    if (e3 == `{`) return v(E(`}`), Ee, D, W);
    if (e3 == `(`) return v(R(ke, `)`), Te, W);
    if (e3 == `<`) return v(R(H, `>`), H);
    if (e3 == `quasi`) return _(De, W);
  }
  function Te(e3) {
    if (e3 == `=>`) return v(H);
  }
  function Ee(e3) {
    return e3.match(/[\}\)\]]/) ? v() : e3 == `,` || e3 == `;` ? v(Ee) : _(U, Ee);
  }
  function U(e3, t3) {
    if (e3 == `variable` || g.style == `keyword`) return g.marked = `property`, v(U);
    if (t3 == `?` || e3 == `number` || e3 == `string`) return v(U);
    if (e3 == `:`) return v(H);
    if (e3 == `[`) return v(O(`variable`), Se, O(`]`), U);
    if (e3 == `(`) return _(X, U);
    if (!e3.match(/[;\}\)\],]/)) return v();
  }
  function De(e3, t3) {
    return e3 == `quasi` ? t3.slice(t3.length - 2) == "${" ? v(H, Oe) : v(De) : _();
  }
  function Oe(e3) {
    if (e3 == `}`) return g.marked = `string.special`, g.state.tokenize = h, v(De);
  }
  function ke(e3, t3) {
    return e3 == `variable` && g.stream.match(/^\s*[?:]/, false) || t3 == `?` ? v(ke) : e3 == `:` ? v(H) : e3 == `spread` ? v(ke) : _(H);
  }
  function W(e3, t3) {
    if (t3 == `<`) return v(E(`>`), R(H, `>`), D, W);
    if (t3 == `|` || e3 == `.` || t3 == `&`) return v(H);
    if (e3 == `[`) return v(H, O(`]`), W);
    if (t3 == `extends` || t3 == `implements`) return g.marked = `keyword`, v(H);
    if (t3 == `?`) return v(H, O(`:`), H);
  }
  function Ae(e3, t3) {
    if (t3 == `<`) return v(E(`>`), R(H, `>`), D, W);
  }
  function G() {
    return _(H, je);
  }
  function je(e3, t3) {
    if (t3 == `=`) return v(H);
  }
  function Me(e3, t3) {
    return t3 == `enum` ? (g.marked = `keyword`, v(Ze)) : _(K, V, q, Fe);
  }
  function K(e3, t3) {
    if (i2 && b(t3)) return g.marked = `keyword`, v(K);
    if (e3 == `variable`) return y(t3), v();
    if (e3 == `spread`) return v(K);
    if (e3 == `[`) return z(Pe, `]`);
    if (e3 == `{`) return z(Ne, `}`);
  }
  function Ne(e3, t3) {
    return e3 == `variable` && !g.stream.match(/^\s*:/, false) ? (y(t3), v(q)) : (e3 == `variable` && (g.marked = `property`), e3 == `spread` ? v(K) : e3 == `}` ? _() : e3 == `[` ? v(A, O(`]`), O(`:`), Ne) : v(O(`:`), K, q));
  }
  function Pe() {
    return _(K, q);
  }
  function q(e3, t3) {
    if (t3 == `=`) return v(j);
  }
  function Fe(e3) {
    if (e3 == `,`) return v(Me);
  }
  function Ie(e3, t3) {
    if (e3 == `keyword b` && t3 == `else`) return v(E(`form`, `else`), k, D);
  }
  function Le(e3, t3) {
    if (t3 == `await`) return v(Le);
    if (e3 == `(`) return v(E(`)`), Re, D);
  }
  function Re(e3) {
    return e3 == `var` ? v(Me, J) : e3 == `variable` ? v(J) : _(J);
  }
  function J(e3, t3) {
    return e3 == `)` ? v() : e3 == `;` ? v(J) : t3 == `in` || t3 == `of` ? (g.marked = `keyword`, v(A, J)) : _(A, J);
  }
  function Y(e3, t3) {
    if (t3 == `*`) return g.marked = `keyword`, v(Y);
    if (e3 == `variable`) return y(t3), v(Y);
    if (e3 == `(`) return v(C, E(`)`), R(Z, `)`), D, Ce, k, T);
    if (i2 && t3 == `<`) return v(E(`>`), R(G, `>`), D, Y);
  }
  function X(e3, t3) {
    if (t3 == `*`) return g.marked = `keyword`, v(X);
    if (e3 == `variable`) return y(t3), v(X);
    if (e3 == `(`) return v(C, E(`)`), R(Z, `)`), D, Ce, T);
    if (i2 && t3 == `<`) return v(E(`>`), R(G, `>`), D, X);
  }
  function ze(e3, t3) {
    if (e3 == `keyword` || e3 == `variable`) return g.marked = `type`, v(ze);
    if (t3 == `<`) return v(E(`>`), R(G, `>`), D);
  }
  function Z(e3, t3) {
    return t3 == `@` && v(A, Z), e3 == `spread` ? v(Z) : i2 && b(t3) ? (g.marked = `keyword`, v(Z)) : i2 && e3 == `this` ? v(V, q) : _(K, V, q);
  }
  function Be(e3, t3) {
    return e3 == `variable` ? Ve(e3, t3) : Q(e3, t3);
  }
  function Ve(e3, t3) {
    if (e3 == `variable`) return y(t3), v(Q);
  }
  function Q(e3, t3) {
    if (t3 == `<`) return v(E(`>`), R(G, `>`), D, Q);
    if (t3 == `extends` || t3 == `implements` || i2 && e3 == `,`) return t3 == `implements` && (g.marked = `keyword`), v(i2 ? H : A, Q);
    if (e3 == `{`) return v(E(`}`), $, D);
  }
  function $(e3, t3) {
    if (e3 == `async` || e3 == `variable` && (t3 == `static` || t3 == `get` || t3 == `set` || i2 && b(t3)) && g.stream.match(/^\s+#?[\w$\xa1-\uffff]/, false)) return g.marked = `keyword`, v($);
    if (e3 == `variable` || g.style == `keyword`) return g.marked = `property`, v(He, $);
    if (e3 == `number` || e3 == `string`) return v(He, $);
    if (e3 == `[`) return v(A, V, O(`]`), He, $);
    if (t3 == `*`) return g.marked = `keyword`, v($);
    if (i2 && e3 == `(`) return _(X, $);
    if (e3 == `;` || e3 == `,`) return v($);
    if (e3 == `}`) return v();
    if (t3 == `@`) return v(A, $);
  }
  function He(e3, t3) {
    if (t3 == `!` || t3 == `?`) return v(He);
    if (e3 == `:`) return v(H, q);
    if (t3 == `=`) return v(j);
    var n3 = g.state.lexical.prev;
    return _(n3 && n3.info == `interface` ? X : Y);
  }
  function Ue(e3, t3) {
    return t3 == `*` ? (g.marked = `keyword`, v(Ye, O(`;`))) : t3 == `default` ? (g.marked = `keyword`, v(A, O(`;`))) : e3 == `{` ? v(R(We, `}`), Ye, O(`;`)) : _(k);
  }
  function We(e3, t3) {
    if (t3 == `as`) return g.marked = `keyword`, v(O(`variable`));
    if (e3 == `variable`) return _(j, We);
  }
  function Ge(e3) {
    return e3 == `string` ? v() : e3 == `(` ? _(A) : e3 == `.` ? _(N) : _(Ke, qe, Ye);
  }
  function Ke(e3, t3) {
    return e3 == `{` ? z(Ke, `}`) : (e3 == `variable` && y(t3), t3 == `*` && (g.marked = `keyword`), v(Je));
  }
  function qe(e3) {
    if (e3 == `,`) return v(Ke, qe);
  }
  function Je(e3, t3) {
    if (t3 == `as`) return g.marked = `keyword`, v(Ke);
  }
  function Ye(e3, t3) {
    if (t3 == `from`) return g.marked = `keyword`, v(A);
  }
  function Xe(e3) {
    return e3 == `]` ? v() : _(R(j, `]`));
  }
  function Ze() {
    return _(E(`form`), K, O(`{`), E(`}`), R(Qe, `}`), D, D);
  }
  function Qe() {
    return _(K, q);
  }
  function $e(e3, t3) {
    return e3.lastType == `operator` || e3.lastType == `,` || s.test(t3.charAt(0)) || /[,.]/.test(t3.charAt(0));
  }
  function et(e3, t3, n3) {
    return t3.tokenize == p && /^(?:operator|sof|keyword [bcd]|case|new|export|default|spread|[\[{}\(,;:]|=>)$/.test(t3.lastType) || t3.lastType == `quasi` && /\{\s*$/.test(e3.string.slice(0, e3.pos - (n3 || 0)));
  }
  return { name: e2.name, startState: function(t3) {
    var n3 = { tokenize: p, lastType: `sof`, cc: [], lexical: new ie(-t3, 0, `block`, false), localVars: e2.localVars, context: e2.localVars && new x(null, null, false), indented: 0 };
    return e2.globalVars && typeof e2.globalVars == `object` && (n3.globalVars = e2.globalVars), n3;
  }, token: function(e3, t3) {
    if (e3.sol() && (t3.lexical.hasOwnProperty(`align`) || (t3.lexical.align = false), t3.indented = e3.indentation(), ne(e3, t3)), t3.tokenize != m && e3.eatSpace()) return null;
    var n3 = t3.tokenize(e3, t3);
    return u == `comment` ? n3 : (t3.lastType = u == `operator` && (d == `++` || d == `--`) ? `incdec` : u, oe(t3, n3, u, d, e3));
  }, indent: function(n3, r3, i3) {
    if (n3.tokenize == m || n3.tokenize == h) return null;
    if (n3.tokenize != p) return 0;
    var a2 = r3 && r3.charAt(0), o2 = n3.lexical, s2;
    if (!/^\s*else\b/.test(r3)) for (var c2 = n3.cc.length - 1; c2 >= 0; --c2) {
      var l2 = n3.cc[c2];
      if (l2 == D) o2 = o2.prev;
      else if (l2 != Ie && l2 != T) break;
    }
    for (; (o2.type == `stat` || o2.type == `form`) && (a2 == `}` || (s2 = n3.cc[n3.cc.length - 1]) && (s2 == N || s2 == P) && !/^[,\.=+\-*:?[\(]/.test(r3)); ) o2 = o2.prev;
    t2 && o2.type == `)` && o2.prev.type == `stat` && (o2 = o2.prev);
    var u2 = o2.type, d2 = a2 == u2;
    return u2 == `vardef` ? o2.indented + (n3.lastType == `operator` || n3.lastType == `,` ? o2.info.length + 1 : 0) : u2 == `form` && a2 == `{` ? o2.indented : u2 == `form` ? o2.indented + i3.unit : u2 == `stat` ? o2.indented + ($e(n3, r3) ? t2 || i3.unit : 0) : o2.info == `switch` && !d2 && e2.doubleIndentSwitch != 0 ? o2.indented + (/^(?:case|default)\b/.test(r3) ? i3.unit : 2 * i3.unit) : o2.align ? o2.column + (d2 ? 0 : 1) : o2.indented + (d2 ? 0 : i3.unit);
  }, languageData: { indentOnInput: /^\s*(?:case .*?:|default:|\{|\})$/, commentTokens: r2 ? void 0 : { line: `//`, block: { open: `/*`, close: `*/` } }, closeBrackets: { brackets: [`(`, `[`, `{`, `'`, `"`, "`"] }, wordChars: `$` } };
}
const t = e({ name: `javascript` }), n = e({ name: `json`, json: true }), r = e({ name: `json`, jsonld: true }), i = e({ name: `typescript`, typescript: true });
export {
  t as javascript,
  n as json,
  r as jsonld,
  i as typescript
};
