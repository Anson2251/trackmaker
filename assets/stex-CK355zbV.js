function e(e2) {
  function t2(e3, t3) {
    e3.cmdState.push(t3);
  }
  function n2(e3) {
    return e3.cmdState.length > 0 ? e3.cmdState[e3.cmdState.length - 1] : null;
  }
  function r(e3) {
    var t3 = e3.cmdState.pop();
    t3 && t3.closeBracket();
  }
  function i(e3) {
    for (var t3 = e3.cmdState, n3 = t3.length - 1; n3 >= 0; n3--) {
      var r2 = t3[n3];
      if (r2.name != `DEFAULT`) return r2;
    }
    return { styleIdentifier: function() {
      return null;
    } };
  }
  function a(e3, t3, n3) {
    return function() {
      this.name = e3, this.bracketNo = 0, this.style = t3, this.styles = n3, this.argument = null, this.styleIdentifier = function() {
        return this.styles[this.bracketNo - 1] || null;
      }, this.openBracket = function() {
        return this.bracketNo++, `bracket`;
      }, this.closeBracket = function() {
      };
    };
  }
  var o = {};
  o.importmodule = a(`importmodule`, `tag`, [`string`, `builtin`]), o.documentclass = a(`documentclass`, `tag`, [``, `atom`]), o.usepackage = a(`usepackage`, `tag`, [`atom`]), o.begin = a(`begin`, `tag`, [`atom`]), o.end = a(`end`, `tag`, [`atom`]), o.label = a(`label`, `tag`, [`atom`]), o.ref = a(`ref`, `tag`, [`atom`]), o.eqref = a(`eqref`, `tag`, [`atom`]), o.cite = a(`cite`, `tag`, [`atom`]), o.bibitem = a(`bibitem`, `tag`, [`atom`]), o.Bibitem = a(`Bibitem`, `tag`, [`atom`]), o.RBibitem = a(`RBibitem`, `tag`, [`atom`]), o.DEFAULT = function() {
    this.name = `DEFAULT`, this.style = `tag`, this.styleIdentifier = this.openBracket = this.closeBracket = function() {
    };
  };
  function s(e3, t3) {
    e3.f = t3;
  }
  function c(e3, r2) {
    var a2;
    if (e3.match(/^\\[a-zA-Z@\xc0-\u1fff\u2060-\uffff]+/)) {
      var c2 = e3.current().slice(1);
      return a2 = o.hasOwnProperty(c2) ? o[c2] : o.DEFAULT, a2 = new a2(), t2(r2, a2), s(r2, u), a2.style;
    }
    if (e3.match(/^\\[$&%#{}_]/) || e3.match(/^\\[,;!\/\\]/)) return `tag`;
    if (e3.match(`\\[`)) return s(r2, function(e4, t3) {
      return l(e4, t3, `\\]`);
    }), `keyword`;
    if (e3.match(`\\(`)) return s(r2, function(e4, t3) {
      return l(e4, t3, `\\)`);
    }), `keyword`;
    if (e3.match(`$$`)) return s(r2, function(e4, t3) {
      return l(e4, t3, `$$`);
    }), `keyword`;
    if (e3.match(`$`)) return s(r2, function(e4, t3) {
      return l(e4, t3, `$`);
    }), `keyword`;
    var d = e3.next();
    if (d == `%`) return e3.skipToEnd(), `comment`;
    if (d == `}` || d == `]`) {
      if (a2 = n2(r2), a2) a2.closeBracket(d), s(r2, u);
      else return `error`;
      return `bracket`;
    } else if (d == `{` || d == `[`) return a2 = o.DEFAULT, a2 = new a2(), t2(r2, a2), `bracket`;
    else if (/\d/.test(d)) return e3.eatWhile(/[\w.%]/), `atom`;
    else return e3.eatWhile(/[\w\-_]/), a2 = i(r2), a2.name == `begin` && (a2.argument = e3.current()), a2.styleIdentifier();
  }
  function l(e3, t3, n3) {
    if (e3.eatSpace()) return null;
    if (n3 && e3.match(n3)) return s(t3, c), `keyword`;
    if (e3.match(/^\\[a-zA-Z@]+/)) return `tag`;
    if (e3.match(/^[a-zA-Z]+/)) return `variableName.special`;
    if (e3.match(/^\\[$&%#{}_]/) || e3.match(/^\\[,;!\/]/) || e3.match(/^[\^_&]/)) return `tag`;
    if (e3.match(/^[+\-<>|=,\/@!*:;'"`~#?]/)) return null;
    if (e3.match(/^(\d+\.\d*|\d*\.\d+|\d+)/)) return `number`;
    var r2 = e3.next();
    return r2 == `{` || r2 == `}` || r2 == `[` || r2 == `]` || r2 == `(` || r2 == `)` ? `bracket` : r2 == `%` ? (e3.skipToEnd(), `comment`) : `error`;
  }
  function u(e3, t3) {
    var i2 = e3.peek(), a2;
    return i2 == `{` || i2 == `[` ? (a2 = n2(t3), a2.openBracket(i2), e3.eat(i2), s(t3, c), `bracket`) : /[ \t\r]/.test(i2) ? (e3.eat(i2), null) : (s(t3, c), r(t3), c(e3, t3));
  }
  return { name: `stex`, startState: function() {
    return { cmdState: [], f: e2 ? function(e3, t3) {
      return l(e3, t3);
    } : c };
  }, copyState: function(e3) {
    return { cmdState: e3.cmdState.slice(), f: e3.f };
  }, token: function(e3, t3) {
    return t3.f(e3, t3);
  }, blankLine: function(e3) {
    e3.f = c, e3.cmdState.length = 0;
  }, languageData: { commentTokens: { line: `%` } } };
}
const t = e(false), n = e(true);
export {
  t as stex,
  n as stexMath
};
