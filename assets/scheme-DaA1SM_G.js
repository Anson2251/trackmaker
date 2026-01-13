var e = `builtin`, t = `comment`, n = `string`, r = `symbol`, i = `atom`, a = `number`, o = `bracket`, s = 2;
function c(e2) {
  for (var t2 = {}, n2 = e2.split(` `), r2 = 0; r2 < n2.length; ++r2) t2[n2[r2]] = true;
  return t2;
}
var l = c(`\u03BB case-lambda call/cc class cond-expand define-class define-values exit-handler field import inherit init-field interface let*-values let-values let/ec mixin opt-lambda override protect provide public rename require require-for-syntax syntax syntax-case syntax-error unit/sig unless when with-syntax and begin call-with-current-continuation call-with-input-file call-with-output-file case cond define define-syntax define-macro defmacro delay do dynamic-wind else for-each if lambda let let* let-syntax letrec letrec-syntax map or syntax-rules abs acos angle append apply asin assoc assq assv atan boolean? caar cadr call-with-input-file call-with-output-file call-with-values car cdddar cddddr cdr ceiling char->integer char-alphabetic? char-ci<=? char-ci<? char-ci=? char-ci>=? char-ci>? char-downcase char-lower-case? char-numeric? char-ready? char-upcase char-upper-case? char-whitespace? char<=? char<? char=? char>=? char>? char? close-input-port close-output-port complex? cons cos current-input-port current-output-port denominator display eof-object? eq? equal? eqv? eval even? exact->inexact exact? exp expt #f floor force gcd imag-part inexact->exact inexact? input-port? integer->char integer? interaction-environment lcm length list list->string list->vector list-ref list-tail list? load log magnitude make-polar make-rectangular make-string make-vector max member memq memv min modulo negative? newline not null-environment null? number->string number? numerator odd? open-input-file open-output-file output-port? pair? peek-char port? positive? procedure? quasiquote quote quotient rational? rationalize read read-char real-part real? remainder reverse round scheme-report-environment set! set-car! set-cdr! sin sqrt string string->list string->number string->symbol string-append string-ci<=? string-ci<? string-ci=? string-ci>=? string-ci>? string-copy string-fill! string-length string-ref string-set! string<=? string<? string=? string>=? string>? string? substring symbol->string symbol? #t tan transcript-off transcript-on truncate values vector vector->list vector-fill! vector-length vector-ref vector-set! with-input-from-file with-output-to-file write write-char zero?`), u = c(`define let letrec let* lambda define-macro defmacro let-syntax letrec-syntax let-values let*-values define-syntax syntax-rules define-values when unless`);
function d(e2, t2, n2) {
  this.indent = e2, this.type = t2, this.prev = n2;
}
function f(e2, t2, n2) {
  e2.indentStack = new d(t2, n2, e2.indentStack);
}
function p(e2) {
  e2.indentStack = e2.indentStack.prev;
}
var m = new RegExp(/^(?:[-+]i|[-+][01]+#*(?:\/[01]+#*)?i|[-+]?[01]+#*(?:\/[01]+#*)?@[-+]?[01]+#*(?:\/[01]+#*)?|[-+]?[01]+#*(?:\/[01]+#*)?[-+](?:[01]+#*(?:\/[01]+#*)?)?i|[-+]?[01]+#*(?:\/[01]+#*)?)(?=[()\s;"]|$)/i), h = new RegExp(/^(?:[-+]i|[-+][0-7]+#*(?:\/[0-7]+#*)?i|[-+]?[0-7]+#*(?:\/[0-7]+#*)?@[-+]?[0-7]+#*(?:\/[0-7]+#*)?|[-+]?[0-7]+#*(?:\/[0-7]+#*)?[-+](?:[0-7]+#*(?:\/[0-7]+#*)?)?i|[-+]?[0-7]+#*(?:\/[0-7]+#*)?)(?=[()\s;"]|$)/i), g = new RegExp(/^(?:[-+]i|[-+][\da-f]+#*(?:\/[\da-f]+#*)?i|[-+]?[\da-f]+#*(?:\/[\da-f]+#*)?@[-+]?[\da-f]+#*(?:\/[\da-f]+#*)?|[-+]?[\da-f]+#*(?:\/[\da-f]+#*)?[-+](?:[\da-f]+#*(?:\/[\da-f]+#*)?)?i|[-+]?[\da-f]+#*(?:\/[\da-f]+#*)?)(?=[()\s;"]|$)/i), _ = new RegExp(/^(?:[-+]i|[-+](?:(?:(?:\d+#+\.?#*|\d+\.\d*#*|\.\d+#*|\d+)(?:[esfdl][-+]?\d+)?)|\d+#*\/\d+#*)i|[-+]?(?:(?:(?:\d+#+\.?#*|\d+\.\d*#*|\.\d+#*|\d+)(?:[esfdl][-+]?\d+)?)|\d+#*\/\d+#*)@[-+]?(?:(?:(?:\d+#+\.?#*|\d+\.\d*#*|\.\d+#*|\d+)(?:[esfdl][-+]?\d+)?)|\d+#*\/\d+#*)|[-+]?(?:(?:(?:\d+#+\.?#*|\d+\.\d*#*|\.\d+#*|\d+)(?:[esfdl][-+]?\d+)?)|\d+#*\/\d+#*)[-+](?:(?:(?:\d+#+\.?#*|\d+\.\d*#*|\.\d+#*|\d+)(?:[esfdl][-+]?\d+)?)|\d+#*\/\d+#*)?i|(?:(?:(?:\d+#+\.?#*|\d+\.\d*#*|\.\d+#*|\d+)(?:[esfdl][-+]?\d+)?)|\d+#*\/\d+#*))(?=[()\s;"]|$)/i);
function v(e2) {
  return e2.match(m);
}
function y(e2) {
  return e2.match(h);
}
function b(e2, t2) {
  return t2 === true && e2.backUp(1), e2.match(_);
}
function x(e2) {
  return e2.match(g);
}
function S(e2, t2) {
  for (var n2, r2 = false; (n2 = e2.next()) != null; ) {
    if (n2 == t2.token && !r2) {
      t2.state.mode = false;
      break;
    }
    r2 = !r2 && n2 == `\\`;
  }
}
const C = { name: `scheme`, startState: function() {
  return { indentStack: null, indentation: 0, mode: false, sExprComment: false, sExprQuote: false };
}, token: function(c2, d2) {
  if (d2.indentStack == null && c2.sol() && (d2.indentation = c2.indentation()), c2.eatSpace()) return null;
  var m2 = null;
  switch (d2.mode) {
    case `string`:
      S(c2, { token: `"`, state: d2 }), m2 = n;
      break;
    case `symbol`:
      S(c2, { token: `|`, state: d2 }), m2 = r;
      break;
    case `comment`:
      for (var h2, g2 = false; (h2 = c2.next()) != null; ) {
        if (h2 == `#` && g2) {
          d2.mode = false;
          break;
        }
        g2 = h2 == `|`;
      }
      m2 = t;
      break;
    case `s-expr-comment`:
      if (d2.mode = false, c2.peek() == `(` || c2.peek() == `[`) d2.sExprComment = 0;
      else {
        c2.eatWhile(/[^\s\(\)\[\]]/), m2 = t;
        break;
      }
    default:
      var _2 = c2.next();
      if (_2 == `"`) d2.mode = `string`, m2 = n;
      else if (_2 == `'`) c2.peek() == `(` || c2.peek() == `[` ? (typeof d2.sExprQuote != `number` && (d2.sExprQuote = 0), m2 = i) : (c2.eatWhile(/[\w_\-!$%&*+\.\/:<=>?@\^~]/), m2 = i);
      else if (_2 == `|`) d2.mode = `symbol`, m2 = r;
      else if (_2 == `#`) if (c2.eat(`|`)) d2.mode = `comment`, m2 = t;
      else if (c2.eat(/[tf]/i)) m2 = i;
      else if (c2.eat(`;`)) d2.mode = `s-expr-comment`, m2 = t;
      else {
        var C2 = null, w = false, T = true;
        c2.eat(/[ei]/i) ? w = true : c2.backUp(1), c2.match(/^#b/i) ? C2 = v : c2.match(/^#o/i) ? C2 = y : c2.match(/^#x/i) ? C2 = x : c2.match(/^#d/i) ? C2 = b : c2.match(/^[-+0-9.]/, false) ? (T = false, C2 = b) : w || c2.eat(`#`), C2 != null && (T && !w && c2.match(/^#[ei]/i), C2(c2) && (m2 = a));
      }
      else if (/^[-+0-9.]/.test(_2) && b(c2, true)) m2 = a;
      else if (_2 == `;`) c2.skipToEnd(), m2 = t;
      else if (_2 == `(` || _2 == `[`) {
        for (var E = ``, D = c2.column(), O; (O = c2.eat(/[^\s\(\[\;\)\]]/)) != null; ) E += O;
        E.length > 0 && u.propertyIsEnumerable(E) ? f(d2, D + s, _2) : (c2.eatSpace(), c2.eol() || c2.peek() == `;` ? f(d2, D + 1, _2) : f(d2, D + c2.current().length, _2)), c2.backUp(c2.current().length - 1), typeof d2.sExprComment == `number` && d2.sExprComment++, typeof d2.sExprQuote == `number` && d2.sExprQuote++, m2 = o;
      } else _2 == `)` || _2 == `]` ? (m2 = o, d2.indentStack != null && d2.indentStack.type == (_2 == `)` ? `(` : `[`) && (p(d2), typeof d2.sExprComment == `number` && --d2.sExprComment == 0 && (m2 = t, d2.sExprComment = false), typeof d2.sExprQuote == `number` && --d2.sExprQuote == 0 && (m2 = i, d2.sExprQuote = false))) : (c2.eatWhile(/[\w_\-!$%&*+\.\/:<=>?@\^~]/), m2 = l && l.propertyIsEnumerable(c2.current()) ? e : `variable`);
  }
  return typeof d2.sExprComment == `number` ? t : typeof d2.sExprQuote == `number` ? i : m2;
}, indent: function(e2) {
  return e2.indentStack == null ? e2.indentation : e2.indentStack.indent;
}, languageData: { closeBrackets: { brackets: [`(`, `[`, `{`, `"`] }, commentTokens: { line: `;;` } } };
export {
  C as scheme
};
