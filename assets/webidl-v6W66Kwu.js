function e(e2) {
  return RegExp(`^((` + e2.join(`)|(`) + `))\\b`);
}
var t = [`Clamp`, `Constructor`, `EnforceRange`, `Exposed`, `ImplicitThis`, `Global`, `PrimaryGlobal`, `LegacyArrayClass`, `LegacyUnenumerableNamedProperties`, `LenientThis`, `NamedConstructor`, `NewObject`, `NoInterfaceObject`, `OverrideBuiltins`, `PutForwards`, `Replaceable`, `SameObject`, `TreatNonObjectAsNull`, `TreatNullAs`, `EmptyString`, `Unforgeable`, `Unscopeable`], n = e(t), r = `unsigned.short.long.unrestricted.float.double.boolean.byte.octet.Promise.ArrayBuffer.DataView.Int8Array.Int16Array.Int32Array.Uint8Array.Uint16Array.Uint32Array.Uint8ClampedArray.Float32Array.Float64Array.ByteString.DOMString.USVString.sequence.object.RegExp.Error.DOMException.FrozenArray.any.void`.split(`.`), i = e(r), a = [`attribute`, `callback`, `const`, `deleter`, `dictionary`, `enum`, `getter`, `implements`, `inherit`, `interface`, `iterable`, `legacycaller`, `maplike`, `partial`, `required`, `serializer`, `setlike`, `setter`, `static`, `stringifier`, `typedef`, `optional`, `readonly`, `or`], o = e(a), s = [`true`, `false`, `Infinity`, `NaN`, `null`], c = e(s), l = e([`callback`, `dictionary`, `enum`, `interface`]), u = e([`typedef`]), d = /^[:<=>?]/, f = /^-?([1-9][0-9]*|0[Xx][0-9A-Fa-f]+|0[0-7]*)/, p = /^-?(([0-9]+\.[0-9]*|[0-9]*\.[0-9]+)([Ee][+-]?[0-9]+)?|[0-9]+[Ee][+-]?[0-9]+)/, m = /^_?[A-Za-z][0-9A-Z_a-z-]*/, h = /^_?[A-Za-z][0-9A-Z_a-z-]*(?=\s*;)/, g = /^"[^"]*"/, _ = /^\/\*.*?\*\//, v = /^\/\*.*/, y = /^.*?\*\//;
function b(e2, t2) {
  if (e2.eatSpace()) return null;
  if (t2.inComment) return e2.match(y) ? (t2.inComment = false, `comment`) : (e2.skipToEnd(), `comment`);
  if (e2.match(`//`)) return e2.skipToEnd(), `comment`;
  if (e2.match(_)) return `comment`;
  if (e2.match(v)) return t2.inComment = true, `comment`;
  if (e2.match(/^-?[0-9\.]/, false) && (e2.match(f) || e2.match(p))) return `number`;
  if (e2.match(g)) return `string`;
  if (t2.startDef && e2.match(m)) return `def`;
  if (t2.endDef && e2.match(h)) return t2.endDef = false, `def`;
  if (e2.match(o)) return `keyword`;
  if (e2.match(i)) {
    var r2 = t2.lastToken, a2 = (e2.match(/^\s*(.+?)\b/, false) || [])[1];
    return r2 === `:` || r2 === `implements` || a2 === `implements` || a2 === `=` ? `builtin` : `type`;
  }
  return e2.match(n) ? `builtin` : e2.match(c) ? `atom` : e2.match(m) ? `variable` : e2.match(d) ? `operator` : (e2.next(), null);
}
const x = { name: `webidl`, startState: function() {
  return { inComment: false, lastToken: ``, startDef: false, endDef: false };
}, token: function(e2, t2) {
  var n2 = b(e2, t2);
  if (n2) {
    var r2 = e2.current();
    t2.lastToken = r2, n2 === `keyword` ? (t2.startDef = l.test(r2), t2.endDef = t2.endDef || u.test(r2)) : t2.startDef = false;
  }
  return n2;
}, languageData: { autocomplete: t.concat(r).concat(a).concat(s) } };
export {
  x as webIDL
};
