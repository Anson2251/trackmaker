function e(e2) {
  for (var t2 = {}, n2 = e2.split(` `), r2 = 0; r2 < n2.length; ++r2) t2[n2[r2]] = true;
  return t2;
}
var t = `ABS ACOS ARITY ASIN ATAN AVG BAGSIZE BINSTORAGE BLOOM BUILDBLOOM CBRT CEIL CONCAT COR COS COSH COUNT COUNT_STAR COV CONSTANTSIZE CUBEDIMENSIONS DIFF DISTINCT DOUBLEABS DOUBLEAVG DOUBLEBASE DOUBLEMAX DOUBLEMIN DOUBLEROUND DOUBLESUM EXP FLOOR FLOATABS FLOATAVG FLOATMAX FLOATMIN FLOATROUND FLOATSUM GENERICINVOKER INDEXOF INTABS INTAVG INTMAX INTMIN INTSUM INVOKEFORDOUBLE INVOKEFORFLOAT INVOKEFORINT INVOKEFORLONG INVOKEFORSTRING INVOKER ISEMPTY JSONLOADER JSONMETADATA JSONSTORAGE LAST_INDEX_OF LCFIRST LOG LOG10 LOWER LONGABS LONGAVG LONGMAX LONGMIN LONGSUM MAX MIN MAPSIZE MONITOREDUDF NONDETERMINISTIC OUTPUTSCHEMA  PIGSTORAGE PIGSTREAMING RANDOM REGEX_EXTRACT REGEX_EXTRACT_ALL REPLACE ROUND SIN SINH SIZE SQRT STRSPLIT SUBSTRING SUM STRINGCONCAT STRINGMAX STRINGMIN STRINGSIZE TAN TANH TOBAG TOKENIZE TOMAP TOP TOTUPLE TRIM TEXTLOADER TUPLESIZE UCFIRST UPPER UTF8STORAGECONVERTER `, n = `VOID IMPORT RETURNS DEFINE LOAD FILTER FOREACH ORDER CUBE DISTINCT COGROUP JOIN CROSS UNION SPLIT INTO IF OTHERWISE ALL AS BY USING INNER OUTER ONSCHEMA PARALLEL PARTITION GROUP AND OR NOT GENERATE FLATTEN ASC DESC IS STREAM THROUGH STORE MAPREDUCE SHIP CACHE INPUT OUTPUT STDERROR STDIN STDOUT LIMIT SAMPLE LEFT RIGHT FULL EQ GT LT GTE LTE NEQ MATCHES TRUE FALSE DUMP`, r = `BOOLEAN INT LONG FLOAT DOUBLE CHARARRAY BYTEARRAY BAG TUPLE MAP `, i = e(t), a = e(n), o = e(r), s = /[*+\-%<>=&?:\/!|]/;
function c(e2, t2, n2) {
  return t2.tokenize = n2, n2(e2, t2);
}
function l(e2, t2) {
  for (var n2 = false, r2; r2 = e2.next(); ) {
    if (r2 == `/` && n2) {
      t2.tokenize = d;
      break;
    }
    n2 = r2 == `*`;
  }
  return `comment`;
}
function u(e2) {
  return function(t2, n2) {
    for (var r2 = false, i2, a2 = false; (i2 = t2.next()) != null; ) {
      if (i2 == e2 && !r2) {
        a2 = true;
        break;
      }
      r2 = !r2 && i2 == `\\`;
    }
    return (a2 || !r2) && (n2.tokenize = d), `error`;
  };
}
function d(e2, t2) {
  var n2 = e2.next();
  return n2 == `"` || n2 == `'` ? c(e2, t2, u(n2)) : /[\[\]{}\(\),;\.]/.test(n2) ? null : /\d/.test(n2) ? (e2.eatWhile(/[\w\.]/), `number`) : n2 == `/` ? e2.eat(`*`) ? c(e2, t2, l) : (e2.eatWhile(s), `operator`) : n2 == `-` ? e2.eat(`-`) ? (e2.skipToEnd(), `comment`) : (e2.eatWhile(s), `operator`) : s.test(n2) ? (e2.eatWhile(s), `operator`) : (e2.eatWhile(/[\w\$_]/), a && a.propertyIsEnumerable(e2.current().toUpperCase()) && !e2.eat(`)`) && !e2.eat(`.`) ? `keyword` : i && i.propertyIsEnumerable(e2.current().toUpperCase()) ? `builtin` : o && o.propertyIsEnumerable(e2.current().toUpperCase()) ? `type` : `variable`);
}
const f = { name: `pig`, startState: function() {
  return { tokenize: d, startOfLine: true };
}, token: function(e2, t2) {
  return e2.eatSpace() ? null : t2.tokenize(e2, t2);
}, languageData: { autocomplete: (t + r + n).split(` `) } };
export {
  f as pig
};
