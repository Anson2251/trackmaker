function e(e2) {
  for (var t2 = {}, n2 = e2.split(` `), r2 = 0; r2 < n2.length; ++r2) t2[n2[r2]] = true;
  return t2;
}
var t = e(`absolute and array asm begin case const constructor destructor div do downto else end file for function goto if implementation in inherited inline interface label mod nil not object of operator or packed procedure program record reintroduce repeat self set shl shr string then to type unit until uses var while with xor as class dispinterface except exports finalization finally initialization inline is library on out packed property raise resourcestring threadvar try absolute abstract alias assembler bitpacked break cdecl continue cppdecl cvar default deprecated dynamic enumerator experimental export external far far16 forward generic helper implements index interrupt iocheck local message name near nodefault noreturn nostackframe oldfpccall otherwise overload override pascal platform private protected public published read register reintroduce result safecall saveregisters softfloat specialize static stdcall stored strict unaligned unimplemented varargs virtual write`), n = { null: true }, r = /[+\-*&%=<>!?|\/]/;
function i(e2, i2) {
  var c2 = e2.next();
  if (c2 == `#` && i2.startOfLine) return e2.skipToEnd(), `meta`;
  if (c2 == `"` || c2 == `'`) return i2.tokenize = a(c2), i2.tokenize(e2, i2);
  if (c2 == `(` && e2.eat(`*`)) return i2.tokenize = o, o(e2, i2);
  if (c2 == `{`) return i2.tokenize = s, s(e2, i2);
  if (/[\[\]\(\),;\:\.]/.test(c2)) return null;
  if (/\d/.test(c2)) return e2.eatWhile(/[\w\.]/), `number`;
  if (c2 == `/` && e2.eat(`/`)) return e2.skipToEnd(), `comment`;
  if (r.test(c2)) return e2.eatWhile(r), `operator`;
  e2.eatWhile(/[\w\$_]/);
  var l = e2.current().toLowerCase();
  return t.propertyIsEnumerable(l) ? `keyword` : n.propertyIsEnumerable(l) ? `atom` : `variable`;
}
function a(e2) {
  return function(t2, n2) {
    for (var r2 = false, i2, a2 = false; (i2 = t2.next()) != null; ) {
      if (i2 == e2 && !r2) {
        a2 = true;
        break;
      }
      r2 = !r2 && i2 == `\\`;
    }
    return (a2 || !r2) && (n2.tokenize = null), `string`;
  };
}
function o(e2, t2) {
  for (var n2 = false, r2; r2 = e2.next(); ) {
    if (r2 == `)` && n2) {
      t2.tokenize = null;
      break;
    }
    n2 = r2 == `*`;
  }
  return `comment`;
}
function s(e2, t2) {
  for (var n2; n2 = e2.next(); ) if (n2 == `}`) {
    t2.tokenize = null;
    break;
  }
  return `comment`;
}
const c = { name: `pascal`, startState: function() {
  return { tokenize: null };
}, token: function(e2, t2) {
  return e2.eatSpace() ? null : (t2.tokenize || i)(e2, t2);
}, languageData: { indentOnInput: /^\s*[{}]$/, commentTokens: { block: { open: `(*`, close: `*)` } } } };
export {
  c as pascal
};
