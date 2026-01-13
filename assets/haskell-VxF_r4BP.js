function e(e2, t2, n2) {
  return t2(n2), n2(e2, t2);
}
var t = /[a-z_]/, n = /[A-Z]/, r = /\d/, i = /[0-9A-Fa-f]/, a = /[0-7]/, o = /[a-z_A-Z0-9'\xa1-\uffff]/, s = /[-!#$%&*+.\/<=>?@\\^|~:]/, c = /[(),;[\]`{}]/, l = /[ \t\v\f]/;
function u(u2, p2) {
  if (u2.eatWhile(l)) return null;
  var m2 = u2.next();
  if (c.test(m2)) {
    if (m2 == `{` && u2.eat(`-`)) {
      var h2 = `comment`;
      return u2.eat(`#`) && (h2 = `meta`), e(u2, p2, d(h2, 1));
    }
    return null;
  }
  if (m2 == `'`) return u2.eat(`\\`), u2.next(), u2.eat(`'`) ? `string` : `error`;
  if (m2 == `"`) return e(u2, p2, f);
  if (n.test(m2)) return u2.eatWhile(o), u2.eat(`.`) ? `qualifier` : `type`;
  if (t.test(m2)) return u2.eatWhile(o), `variable`;
  if (r.test(m2)) {
    if (m2 == `0`) {
      if (u2.eat(/[xX]/)) return u2.eatWhile(i), `integer`;
      if (u2.eat(/[oO]/)) return u2.eatWhile(a), `number`;
    }
    u2.eatWhile(r);
    var h2 = `number`;
    return u2.match(/^\.\d+/) && (h2 = `number`), u2.eat(/[eE]/) && (h2 = `number`, u2.eat(/[-+]/), u2.eatWhile(r)), h2;
  }
  return m2 == `.` && u2.eat(`.`) ? `keyword` : s.test(m2) ? m2 == `-` && u2.eat(/-/) && (u2.eatWhile(/-/), !u2.eat(s)) ? (u2.skipToEnd(), `comment`) : (u2.eatWhile(s), `variable`) : `error`;
}
function d(e2, t2) {
  return t2 == 0 ? u : function(n2, r2) {
    for (var i2 = t2; !n2.eol(); ) {
      var a2 = n2.next();
      if (a2 == `{` && n2.eat(`-`)) ++i2;
      else if (a2 == `-` && n2.eat(`}`) && (--i2, i2 == 0)) return r2(u), e2;
    }
    return r2(d(e2, i2)), e2;
  };
}
function f(e2, t2) {
  for (; !e2.eol(); ) {
    var n2 = e2.next();
    if (n2 == `"`) return t2(u), `string`;
    if (n2 == `\\`) {
      if (e2.eol() || e2.eat(l)) return t2(p), `string`;
      e2.eat(`&`) || e2.next();
    }
  }
  return t2(u), `error`;
}
function p(t2, n2) {
  return t2.eat(`\\`) ? e(t2, n2, f) : (t2.next(), n2(u), `error`);
}
var m = (function() {
  var e2 = {};
  function t2(t3) {
    return function() {
      for (var n2 = 0; n2 < arguments.length; n2++) e2[arguments[n2]] = t3;
    };
  }
  return t2(`keyword`)(`case`, `class`, `data`, `default`, `deriving`, `do`, `else`, `foreign`, `if`, `import`, `in`, `infix`, `infixl`, `infixr`, `instance`, `let`, `module`, `newtype`, `of`, `then`, `type`, `where`, `_`), t2(`keyword`)(`..`, `:`, `::`, `=`, `\\`, `<-`, `->`, `@`, `~`, `=>`), t2(`builtin`)(`!!`, `$!`, `$`, `&&`, `+`, `++`, `-`, `.`, `/`, `/=`, `<`, `<*`, `<=`, `<$>`, `<*>`, `=<<`, `==`, `>`, `>=`, `>>`, `>>=`, `^`, `^^`, `||`, `*`, `*>`, `**`), t2(`builtin`)(`Applicative`, `Bool`, `Bounded`, `Char`, `Double`, `EQ`, `Either`, `Enum`, `Eq`, `False`, `FilePath`, `Float`, `Floating`, `Fractional`, `Functor`, `GT`, `IO`, `IOError`, `Int`, `Integer`, `Integral`, `Just`, `LT`, `Left`, `Maybe`, `Monad`, `Nothing`, `Num`, `Ord`, `Ordering`, `Rational`, `Read`, `ReadS`, `Real`, `RealFloat`, `RealFrac`, `Right`, `Show`, `ShowS`, `String`, `True`), t2(`builtin`)(`abs`, `acos`, `acosh`, `all`, `and`, `any`, `appendFile`, `asTypeOf`, `asin`, `asinh`, `atan`, `atan2`, `atanh`, `break`, `catch`, `ceiling`, `compare`, `concat`, `concatMap`, `const`, `cos`, `cosh`, `curry`, `cycle`, `decodeFloat`, `div`, `divMod`, `drop`, `dropWhile`, `either`, `elem`, `encodeFloat`, `enumFrom`, `enumFromThen`, `enumFromThenTo`, `enumFromTo`, `error`, `even`, `exp`, `exponent`, `fail`, `filter`, `flip`, `floatDigits`, `floatRadix`, `floatRange`, `floor`, `fmap`, `foldl`, `foldl1`, `foldr`, `foldr1`, `fromEnum`, `fromInteger`, `fromIntegral`, `fromRational`, `fst`, `gcd`, `getChar`, `getContents`, `getLine`, `head`, `id`, `init`, `interact`, `ioError`, `isDenormalized`, `isIEEE`, `isInfinite`, `isNaN`, `isNegativeZero`, `iterate`, `last`, `lcm`, `length`, `lex`, `lines`, `log`, `logBase`, `lookup`, `map`, `mapM`, `mapM_`, `max`, `maxBound`, `maximum`, `maybe`, `min`, `minBound`, `minimum`, `mod`, `negate`, `not`, `notElem`, `null`, `odd`, `or`, `otherwise`, `pi`, `pred`, `print`, `product`, `properFraction`, `pure`, `putChar`, `putStr`, `putStrLn`, `quot`, `quotRem`, `read`, `readFile`, `readIO`, `readList`, `readLn`, `readParen`, `reads`, `readsPrec`, `realToFrac`, `recip`, `rem`, `repeat`, `replicate`, `return`, `reverse`, `round`, `scaleFloat`, `scanl`, `scanl1`, `scanr`, `scanr1`, `seq`, `sequence`, `sequence_`, `show`, `showChar`, `showList`, `showParen`, `showString`, `shows`, `showsPrec`, `significand`, `signum`, `sin`, `sinh`, `snd`, `span`, `splitAt`, `sqrt`, `subtract`, `succ`, `sum`, `tail`, `take`, `takeWhile`, `tan`, `tanh`, `toEnum`, `toInteger`, `toRational`, `truncate`, `uncurry`, `undefined`, `unlines`, `until`, `unwords`, `unzip`, `unzip3`, `userError`, `words`, `writeFile`, `zip`, `zip3`, `zipWith`, `zipWith3`), e2;
})();
const h = { name: `haskell`, startState: function() {
  return { f: u };
}, copyState: function(e2) {
  return { f: e2.f };
}, token: function(e2, t2) {
  var n2 = t2.f(e2, function(e3) {
    t2.f = e3;
  }), r2 = e2.current();
  return m.hasOwnProperty(r2) ? m[r2] : n2;
}, languageData: { commentTokens: { line: `--`, block: { open: `{-`, close: `-}` } } } };
export {
  h as haskell
};
