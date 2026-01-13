function e(e2) {
  return RegExp(`^((` + e2.join(`)|(`) + `))\\b`);
}
var t = e([`and`, `or`, `not`, `is`]), n = `as.assert.break.class.continue.def.del.elif.else.except.finally.for.from.global.if.import.lambda.pass.raise.return.try.while.with.yield.in.False.True`.split(`.`), r = `abs.all.any.bin.bool.bytearray.callable.chr.classmethod.compile.complex.delattr.dict.dir.divmod.enumerate.eval.filter.float.format.frozenset.getattr.globals.hasattr.hash.help.hex.id.input.int.isinstance.issubclass.iter.len.list.locals.map.max.memoryview.min.next.object.oct.open.ord.pow.property.range.repr.reversed.round.set.setattr.slice.sorted.staticmethod.str.sum.super.tuple.type.vars.zip.__import__.NotImplemented.Ellipsis.__debug__`.split(`.`);
function i(e2) {
  return e2.scopes[e2.scopes.length - 1];
}
function a(a2) {
  for (var o2 = `error`, s2 = a2.delimiters || a2.singleDelimiters || /^[\(\)\[\]\{\}@,:`=;\.\\]/, c2 = [a2.singleOperators, a2.doubleOperators, a2.doubleDelimiters, a2.tripleDelimiters, a2.operators || /^([-+*/%\/&|^]=?|[<>=]+|\/\/=?|\*\*=?|!=|[~!@]|\.\.\.)/], l = 0; l < c2.length; l++) c2[l] || c2.splice(l--, 1);
  var u = a2.hangingIndent, d = n, f = r;
  a2.extra_keywords != null && (d = d.concat(a2.extra_keywords)), a2.extra_builtins != null && (f = f.concat(a2.extra_builtins));
  var p = !(a2.version && Number(a2.version) < 3);
  if (p) {
    var m = a2.identifiers || /^[_A-Za-z\u00A1-\uFFFF][_A-Za-z0-9\u00A1-\uFFFF]*/;
    d = d.concat([`nonlocal`, `None`, `aiter`, `anext`, `async`, `await`, `breakpoint`, `match`, `case`]), f = f.concat([`ascii`, `bytes`, `exec`, `print`]);
    var h = RegExp(`^(([rbuf]|(br)|(rb)|(fr)|(rf))?('{3}|"{3}|['"]))`, `i`);
  } else {
    var m = a2.identifiers || /^[_A-Za-z][_A-Za-z0-9]*/;
    d = d.concat([`exec`, `print`]), f = f.concat([`apply`, `basestring`, `buffer`, `cmp`, `coerce`, `execfile`, `file`, `intern`, `long`, `raw_input`, `reduce`, `reload`, `unichr`, `unicode`, `xrange`, `None`]);
    var h = RegExp(`^(([rubf]|(ur)|(br))?('{3}|"{3}|['"]))`, `i`);
  }
  var g = e(d), _ = e(f);
  function v(e2, t2) {
    var n2 = e2.sol() && t2.lastToken != `\\`;
    if (n2 && (t2.indent = e2.indentation()), n2 && i(t2).type == `py`) {
      var r2 = i(t2).offset;
      if (e2.eatSpace()) {
        var a3 = e2.indentation();
        return a3 > r2 ? S(e2, t2) : a3 < r2 && w(e2, t2) && e2.peek() != `#` && (t2.errorToken = true), null;
      } else {
        var s3 = y(e2, t2);
        return r2 > 0 && w(e2, t2) && (s3 += ` ` + o2), s3;
      }
    }
    return y(e2, t2);
  }
  function y(e2, n2, r2) {
    if (e2.eatSpace()) return null;
    if (!r2 && e2.match(/^#.*/)) return `comment`;
    if (e2.match(/^[0-9\.]/, false)) {
      var i2 = false;
      if (e2.match(/^[\d_]*\.\d+(e[\+\-]?\d+)?/i) && (i2 = true), e2.match(/^[\d_]+\.\d*/) && (i2 = true), e2.match(/^\.\d+/) && (i2 = true), i2) return e2.eat(/J/i), `number`;
      var a3 = false;
      if (e2.match(/^0x[0-9a-f_]+/i) && (a3 = true), e2.match(/^0b[01_]+/i) && (a3 = true), e2.match(/^0o[0-7_]+/i) && (a3 = true), e2.match(/^[1-9][\d_]*(e[\+\-]?[\d_]+)?/) && (e2.eat(/J/i), a3 = true), e2.match(/^0(?![\dx])/i) && (a3 = true), a3) return e2.eat(/L/i), `number`;
    }
    if (e2.match(h)) return e2.current().toLowerCase().indexOf(`f`) === -1 ? (n2.tokenize = x(e2.current(), n2.tokenize), n2.tokenize(e2, n2)) : (n2.tokenize = b(e2.current(), n2.tokenize), n2.tokenize(e2, n2));
    for (var l2 = 0; l2 < c2.length; l2++) if (e2.match(c2[l2])) return `operator`;
    return e2.match(s2) ? `punctuation` : n2.lastToken == `.` && e2.match(m) ? `property` : e2.match(g) || e2.match(t) ? `keyword` : e2.match(_) ? `builtin` : e2.match(/^(self|cls)\b/) ? `self` : e2.match(m) ? n2.lastToken == `def` || n2.lastToken == `class` ? `def` : `variable` : (e2.next(), r2 ? null : o2);
  }
  function b(e2, t2) {
    for (; `rubf`.indexOf(e2.charAt(0).toLowerCase()) >= 0; ) e2 = e2.substr(1);
    var n2 = e2.length == 1, r2 = `string`;
    function i2(e3) {
      return function(t3, n3) {
        var r3 = y(t3, n3, true);
        return r3 == `punctuation` && (t3.current() == `{` ? n3.tokenize = i2(e3 + 1) : t3.current() == `}` && (e3 > 1 ? n3.tokenize = i2(e3 - 1) : n3.tokenize = s3)), r3;
      };
    }
    function s3(s4, c3) {
      for (; !s4.eol(); ) if (s4.eatWhile(/[^'"\{\}\\]/), s4.eat(`\\`)) {
        if (s4.next(), n2 && s4.eol()) return r2;
      } else if (s4.match(e2)) return c3.tokenize = t2, r2;
      else if (s4.match(`{{`)) return r2;
      else if (s4.match(`{`, false)) return c3.tokenize = i2(0), s4.current() ? r2 : c3.tokenize(s4, c3);
      else if (s4.match(`}}`)) return r2;
      else if (s4.match(`}`)) return o2;
      else s4.eat(/['"]/);
      if (n2) {
        if (a2.singleLineStringErrors) return o2;
        c3.tokenize = t2;
      }
      return r2;
    }
    return s3.isString = true, s3;
  }
  function x(e2, t2) {
    for (; `rubf`.indexOf(e2.charAt(0).toLowerCase()) >= 0; ) e2 = e2.substr(1);
    var n2 = e2.length == 1, r2 = `string`;
    function i2(i3, s3) {
      for (; !i3.eol(); ) if (i3.eatWhile(/[^'"\\]/), i3.eat(`\\`)) {
        if (i3.next(), n2 && i3.eol()) return r2;
      } else if (i3.match(e2)) return s3.tokenize = t2, r2;
      else i3.eat(/['"]/);
      if (n2) {
        if (a2.singleLineStringErrors) return o2;
        s3.tokenize = t2;
      }
      return r2;
    }
    return i2.isString = true, i2;
  }
  function S(e2, t2) {
    for (; i(t2).type != `py`; ) t2.scopes.pop();
    t2.scopes.push({ offset: i(t2).offset + e2.indentUnit, type: `py`, align: null });
  }
  function C(e2, t2, n2) {
    var r2 = e2.match(/^[\s\[\{\(]*(?:#|$)/, false) ? null : e2.column() + 1;
    t2.scopes.push({ offset: t2.indent + (u || e2.indentUnit), type: n2, align: r2 });
  }
  function w(e2, t2) {
    for (var n2 = e2.indentation(); t2.scopes.length > 1 && i(t2).offset > n2; ) {
      if (i(t2).type != `py`) return true;
      t2.scopes.pop();
    }
    return i(t2).offset != n2;
  }
  function T(e2, t2) {
    e2.sol() && (t2.beginningOfLine = true, t2.dedent = false);
    var n2 = t2.tokenize(e2, t2), r2 = e2.current();
    if (t2.beginningOfLine && r2 == `@`) return e2.match(m, false) ? `meta` : p ? `operator` : o2;
    if (/\S/.test(r2) && (t2.beginningOfLine = false), (n2 == `variable` || n2 == `builtin`) && t2.lastToken == `meta` && (n2 = `meta`), (r2 == `pass` || r2 == `return`) && (t2.dedent = true), r2 == `lambda` && (t2.lambda = true), r2 == `:` && !t2.lambda && i(t2).type == `py` && e2.match(/^\s*(?:#|$)/, false) && S(e2, t2), r2.length == 1 && !/string|comment/.test(n2)) {
      var a3 = `[({`.indexOf(r2);
      if (a3 != -1 && C(e2, t2, `])}`.slice(a3, a3 + 1)), a3 = `])}`.indexOf(r2), a3 != -1) if (i(t2).type == r2) t2.indent = t2.scopes.pop().offset - (u || e2.indentUnit);
      else return o2;
    }
    return t2.dedent && e2.eol() && i(t2).type == `py` && t2.scopes.length > 1 && t2.scopes.pop(), n2;
  }
  return { name: `python`, startState: function() {
    return { tokenize: v, scopes: [{ offset: 0, type: `py`, align: null }], indent: 0, lastToken: null, lambda: false, dedent: 0 };
  }, token: function(e2, t2) {
    var n2 = t2.errorToken;
    n2 && (t2.errorToken = false);
    var r2 = T(e2, t2);
    return r2 && r2 != `comment` && (t2.lastToken = r2 == `keyword` || r2 == `punctuation` ? e2.current() : r2), r2 == `punctuation` && (r2 = null), e2.eol() && t2.lambda && (t2.lambda = false), n2 ? o2 : r2;
  }, indent: function(e2, t2, n2) {
    if (e2.tokenize != v) return e2.tokenize.isString ? null : 0;
    var r2 = i(e2), a3 = r2.type == t2.charAt(0) || r2.type == `py` && !e2.dedent && /^(else:|elif |except |finally:)/.test(t2);
    return r2.align == null ? r2.offset - (a3 ? u || n2.unit : 0) : r2.align - (a3 ? 1 : 0);
  }, languageData: { autocomplete: n.concat(r).concat([`exec`, `print`]), indentOnInput: /^\s*([\}\]\)]|else:|elif |except |finally:)$/, commentTokens: { line: `#` }, closeBrackets: { brackets: [`(`, `[`, `{`, `'`, `"`, `'''`, `"""`] } } };
}
var o = function(e2) {
  return e2.split(` `);
};
const s = a({}), c = a({ extra_keywords: o(`by cdef cimport cpdef ctypedef enum except extern gil include nogil property public readonly struct union DEF IF ELIF ELSE`) });
export {
  c as cython,
  a as mkPython,
  s as python
};
