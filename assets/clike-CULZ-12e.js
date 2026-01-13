function e(e2, t2, n2, r2, i2, a2) {
  this.indented = e2, this.column = t2, this.type = n2, this.info = r2, this.align = i2, this.prev = a2;
}
function t(t2, n2, r2, i2) {
  var a2 = t2.indented;
  return t2.context && t2.context.type == `statement` && r2 != `statement` && (a2 = t2.context.indented), t2.context = new e(a2, n2, r2, i2, null, t2.context);
}
function n(e2) {
  var t2 = e2.context.type;
  return (t2 == `)` || t2 == `]` || t2 == `}`) && (e2.indented = e2.context.indented), e2.context = e2.context.prev;
}
function r(e2, t2, n2) {
  if (t2.prevToken == `variable` || t2.prevToken == `type` || /\S(?:[^- ]>|[*\]])\s*$|\*$/.test(e2.string.slice(0, n2)) || t2.typeAtEndOfLine && e2.column() == e2.indentation()) return true;
}
function i(e2) {
  for (; ; ) {
    if (!e2 || e2.type == `top`) return true;
    if (e2.type == `}` && e2.prev.info != `namespace`) return false;
    e2 = e2.prev;
  }
}
function a(a2) {
  var o2 = a2.statementIndentUnit, c2 = a2.dontAlignCalls, l2 = a2.keywords || {}, u2 = a2.types || {}, d2 = a2.builtin || {}, f2 = a2.blockKeywords || {}, p2 = a2.defKeywords || {}, m2 = a2.atoms || {}, h2 = a2.hooks || {}, g2 = a2.multiLineStrings, _2 = a2.indentStatements !== false, v2 = a2.indentSwitch !== false, y2 = a2.namespaceSeparator, b2 = a2.isPunctuationChar || /[\[\]{}\(\),;\:\.]/, x2 = a2.numberStart || /[\d\.]/, S2 = a2.number || /^(?:0x[a-f\d]+|0b[01]+|(?:\d+\.?\d*|\.\d+)(?:e[-+]?\d+)?)(u|ll?|l|f)?/i, C2 = a2.isOperatorChar || /[+\-*&%=<>!?|\/]/, w2 = a2.isIdentifierChar || /[\w\$_\xa1-\uffff]/, T2 = a2.isReservedIdentifier || false, E2, D2;
  function O2(e2, t2) {
    var n2 = e2.next();
    if (h2[n2]) {
      var r2 = h2[n2](e2, t2);
      if (r2 !== false) return r2;
    }
    if (n2 == `"` || n2 == `'`) return t2.tokenize = k2(n2), t2.tokenize(e2, t2);
    if (x2.test(n2)) {
      if (e2.backUp(1), e2.match(S2)) return `number`;
      e2.next();
    }
    if (b2.test(n2)) return E2 = n2, null;
    if (n2 == `/`) {
      if (e2.eat(`*`)) return t2.tokenize = A2, A2(e2, t2);
      if (e2.eat(`/`)) return e2.skipToEnd(), `comment`;
    }
    if (C2.test(n2)) {
      for (; !e2.match(/^\/[\/*]/, false) && e2.eat(C2); ) ;
      return `operator`;
    }
    if (e2.eatWhile(w2), y2) for (; e2.match(y2); ) e2.eatWhile(w2);
    var i2 = e2.current();
    return s(l2, i2) ? (s(f2, i2) && (E2 = `newstatement`), s(p2, i2) && (D2 = true), `keyword`) : s(u2, i2) ? `type` : s(d2, i2) || T2 && T2(i2) ? (s(f2, i2) && (E2 = `newstatement`), `builtin`) : s(m2, i2) ? `atom` : `variable`;
  }
  function k2(e2) {
    return function(t2, n2) {
      for (var r2 = false, i2, a3 = false; (i2 = t2.next()) != null; ) {
        if (i2 == e2 && !r2) {
          a3 = true;
          break;
        }
        r2 = !r2 && i2 == `\\`;
      }
      return (a3 || !(r2 || g2)) && (n2.tokenize = null), `string`;
    };
  }
  function A2(e2, t2) {
    for (var n2 = false, r2; r2 = e2.next(); ) {
      if (r2 == `/` && n2) {
        t2.tokenize = null;
        break;
      }
      n2 = r2 == `*`;
    }
    return `comment`;
  }
  function j2(e2, t2) {
    a2.typeFirstDefinitions && e2.eol() && i(t2.context) && (t2.typeAtEndOfLine = r(e2, t2, e2.pos));
  }
  return { name: a2.name, startState: function(t2) {
    return { tokenize: null, context: new e(-t2, 0, `top`, null, false), indented: 0, startOfLine: true, prevToken: null };
  }, token: function(e2, o3) {
    var s2 = o3.context;
    if (e2.sol() && (s2.align ?? (s2.align = false), o3.indented = e2.indentation(), o3.startOfLine = true), e2.eatSpace()) return j2(e2, o3), null;
    E2 = D2 = null;
    var c3 = (o3.tokenize || O2)(e2, o3);
    if (c3 == `comment` || c3 == `meta`) return c3;
    if (s2.align ?? (s2.align = true), E2 == `;` || E2 == `:` || E2 == `,` && e2.match(/^\s*(?:\/\/.*)?$/, false)) for (; o3.context.type == `statement`; ) n(o3);
    else if (E2 == `{`) t(o3, e2.column(), `}`);
    else if (E2 == `[`) t(o3, e2.column(), `]`);
    else if (E2 == `(`) t(o3, e2.column(), `)`);
    else if (E2 == `}`) {
      for (; s2.type == `statement`; ) s2 = n(o3);
      for (s2.type == `}` && (s2 = n(o3)); s2.type == `statement`; ) s2 = n(o3);
    } else E2 == s2.type ? n(o3) : _2 && ((s2.type == `}` || s2.type == `top`) && E2 != `;` || s2.type == `statement` && E2 == `newstatement`) && t(o3, e2.column(), `statement`, e2.current());
    if (c3 == `variable` && (o3.prevToken == `def` || a2.typeFirstDefinitions && r(e2, o3, e2.start) && i(o3.context) && e2.match(/^\s*\(/, false)) && (c3 = `def`), h2.token) {
      var l3 = h2.token(e2, o3, c3);
      l3 !== void 0 && (c3 = l3);
    }
    return c3 == `def` && a2.styleDefs === false && (c3 = `variable`), o3.startOfLine = false, o3.prevToken = D2 ? `def` : c3 || E2, j2(e2, o3), c3;
  }, indent: function(e2, t2, n2) {
    if (e2.tokenize != O2 && e2.tokenize != null || e2.typeAtEndOfLine && i(e2.context)) return null;
    var r2 = e2.context, s2 = t2 && t2.charAt(0), l3 = s2 == r2.type;
    if (r2.type == `statement` && s2 == `}` && (r2 = r2.prev), a2.dontIndentStatements) for (; r2.type == `statement` && a2.dontIndentStatements.test(r2.info); ) r2 = r2.prev;
    if (h2.indent) {
      var u3 = h2.indent(e2, r2, t2, n2.unit);
      if (typeof u3 == `number`) return u3;
    }
    var d3 = r2.prev && r2.prev.info == `switch`;
    if (a2.allmanIndentation && /[{(]/.test(s2)) {
      for (; r2.type != `top` && r2.type != `}`; ) r2 = r2.prev;
      return r2.indented;
    }
    return r2.type == `statement` ? r2.indented + (s2 == `{` ? 0 : o2 || n2.unit) : r2.align && (!c2 || r2.type != `)`) ? r2.column + (l3 ? 0 : 1) : r2.type == `)` && !l3 ? r2.indented + (o2 || n2.unit) : r2.indented + (l3 ? 0 : n2.unit) + (!l3 && d3 && !/^(?:case|default)\b/.test(t2) ? n2.unit : 0);
  }, languageData: { indentOnInput: v2 ? /^\s*(?:case .*?:|default:|\{\}?|\})$/ : /^\s*[{}]$/, commentTokens: { line: `//`, block: { open: `/*`, close: `*/` } }, autocomplete: Object.keys(l2).concat(Object.keys(u2)).concat(Object.keys(d2)).concat(Object.keys(m2)), ...a2.languageData } };
}
function o(e2) {
  for (var t2 = {}, n2 = e2.split(` `), r2 = 0; r2 < n2.length; ++r2) t2[n2[r2]] = true;
  return t2;
}
function s(e2, t2) {
  return typeof e2 == `function` ? e2(t2) : e2.propertyIsEnumerable(t2);
}
var c = `auto if break case register continue return default do sizeof static else struct switch extern typedef union for goto while enum const volatile inline restrict asm fortran`, l = `alignas alignof and and_eq audit axiom bitand bitor catch class compl concept constexpr const_cast decltype delete dynamic_cast explicit export final friend import module mutable namespace new noexcept not not_eq operator or or_eq override private protected public reinterpret_cast requires static_assert static_cast template this thread_local throw try typeid typename using virtual xor xor_eq`, u = `bycopy byref in inout oneway out self super atomic nonatomic retain copy readwrite readonly strong weak assign typeof nullable nonnull null_resettable _cmd @interface @implementation @end @protocol @encode @property @synthesize @dynamic @class @public @package @private @protected @required @optional @try @catch @finally @import @selector @encode @defs @synchronized @autoreleasepool @compatibility_alias @available`, d = `FOUNDATION_EXPORT FOUNDATION_EXTERN NS_INLINE NS_FORMAT_FUNCTION  NS_RETURNS_RETAINEDNS_ERROR_ENUM NS_RETURNS_NOT_RETAINED NS_RETURNS_INNER_POINTER NS_DESIGNATED_INITIALIZER NS_ENUM NS_OPTIONS NS_REQUIRES_NIL_TERMINATION NS_ASSUME_NONNULL_BEGIN NS_ASSUME_NONNULL_END NS_SWIFT_NAME NS_REFINED_FOR_SWIFT`, f = o(`int long char short double float unsigned signed void bool`), p = o(`SEL instancetype id Class Protocol BOOL`);
function m(e2) {
  return s(f, e2) || /.+_t$/.test(e2);
}
function h(e2) {
  return m(e2) || s(p, e2);
}
var g = `case do else for if switch while struct enum union`, _ = `struct enum union`;
function v(e2, t2) {
  if (!t2.startOfLine) return false;
  for (var n2, r2 = null; n2 = e2.peek(); ) {
    if (n2 == `\\` && e2.match(/^.$/)) {
      r2 = v;
      break;
    } else if (n2 == `/` && e2.match(/^\/[\/\*]/, false)) break;
    e2.next();
  }
  return t2.tokenize = r2, `meta`;
}
function y(e2, t2) {
  return t2.prevToken == `type` ? `type` : false;
}
function b(e2) {
  return !e2 || e2.length < 2 || e2[0] != `_` ? false : e2[1] == `_` || e2[1] !== e2[1].toLowerCase();
}
function x(e2) {
  return e2.eatWhile(/[\w\.']/), `number`;
}
function S(e2, t2) {
  if (e2.backUp(1), e2.match(/^(?:R|u8R|uR|UR|LR)/)) {
    var n2 = e2.match(/^"([^\s\\()]{0,16})\(/);
    return n2 ? (t2.cpp11RawStringDelim = n2[1], t2.tokenize = T, T(e2, t2)) : false;
  }
  return e2.match(/^(?:u8|u|U|L)/) ? e2.match(/^["']/, false) ? `string` : false : (e2.next(), false);
}
function C(e2) {
  var t2 = /(\w+)::~?(\w+)$/.exec(e2);
  return t2 && t2[1] == t2[2];
}
function w(e2, t2) {
  for (var n2; (n2 = e2.next()) != null; ) if (n2 == `"` && !e2.eat(`"`)) {
    t2.tokenize = null;
    break;
  }
  return `string`;
}
function T(e2, t2) {
  var n2 = t2.cpp11RawStringDelim.replace(/[^\w\s]/g, `\\$&`);
  return e2.match(RegExp(`.*?\\)` + n2 + `"`)) ? t2.tokenize = null : e2.skipToEnd(), `string`;
}
const E = a({ name: `c`, keywords: o(c), types: m, blockKeywords: o(g), defKeywords: o(_), typeFirstDefinitions: true, atoms: o(`NULL true false`), isReservedIdentifier: b, hooks: { "#": v, "*": y } }), D = a({ name: `cpp`, keywords: o(c + ` ` + l), types: m, blockKeywords: o(g + ` class try catch`), defKeywords: o(_ + ` class namespace`), typeFirstDefinitions: true, atoms: o(`true false NULL nullptr`), dontIndentStatements: /^template$/, isIdentifierChar: /[\w\$_~\xa1-\uffff]/, isReservedIdentifier: b, hooks: { "#": v, "*": y, u: S, U: S, L: S, R: S, 0: x, 1: x, 2: x, 3: x, 4: x, 5: x, 6: x, 7: x, 8: x, 9: x, token: function(e2, t2, n2) {
  if (n2 == `variable` && e2.peek() == `(` && (t2.prevToken == `;` || t2.prevToken == null || t2.prevToken == `}`) && C(e2.current())) return `def`;
} }, namespaceSeparator: `::` }), O = a({ name: `java`, keywords: o(`abstract assert break case catch class const continue default do else enum extends final finally for goto if implements import instanceof interface native new package private protected public return static strictfp super switch synchronized this throw throws transient try volatile while @interface`), types: o(`var byte short int long float double boolean char void Boolean Byte Character Double Float Integer Long Number Object Short String StringBuffer StringBuilder Void`), blockKeywords: o(`catch class do else finally for if switch try while`), defKeywords: o(`class interface enum @interface`), typeFirstDefinitions: true, atoms: o(`true false null`), number: /^(?:0x[a-f\d_]+|0b[01_]+|(?:[\d_]+\.?\d*|\.\d+)(?:e[-+]?[\d_]+)?)(u|ll?|l|f)?/i, hooks: { "@": function(e2) {
  return e2.match(`interface`, false) ? false : (e2.eatWhile(/[\w\$_]/), `meta`);
}, '"': function(e2, t2) {
  return e2.match(/""$/) ? (t2.tokenize = A, t2.tokenize(e2, t2)) : false;
} } }), k = a({ name: `csharp`, keywords: o(`abstract as async await base break case catch checked class const continue default delegate do else enum event explicit extern finally fixed for foreach goto if implicit in init interface internal is lock namespace new operator out override params private protected public readonly record ref required return sealed sizeof stackalloc static struct switch this throw try typeof unchecked unsafe using virtual void volatile while add alias ascending descending dynamic from get global group into join let orderby partial remove select set value var yield`), types: o(`Action Boolean Byte Char DateTime DateTimeOffset Decimal Double Func Guid Int16 Int32 Int64 Object SByte Single String Task TimeSpan UInt16 UInt32 UInt64 bool byte char decimal double short int long object sbyte float string ushort uint ulong`), blockKeywords: o(`catch class do else finally for foreach if struct switch try while`), defKeywords: o(`class interface namespace record struct var`), typeFirstDefinitions: true, atoms: o(`true false null`), hooks: { "@": function(e2, t2) {
  return e2.eat(`"`) ? (t2.tokenize = w, w(e2, t2)) : (e2.eatWhile(/[\w\$_]/), `meta`);
} } });
function A(e2, t2) {
  for (var n2 = false; !e2.eol(); ) {
    if (!n2 && e2.match(`"""`)) {
      t2.tokenize = null;
      break;
    }
    n2 = e2.next() == `\\` && !n2;
  }
  return `string`;
}
function j(e2) {
  return function(t2, n2) {
    for (var r2; r2 = t2.next(); ) if (r2 == `*` && t2.eat(`/`)) if (e2 == 1) {
      n2.tokenize = null;
      break;
    } else return n2.tokenize = j(e2 - 1), n2.tokenize(t2, n2);
    else if (r2 == `/` && t2.eat(`*`)) return n2.tokenize = j(e2 + 1), n2.tokenize(t2, n2);
    return `comment`;
  };
}
const M = a({ name: `scala`, keywords: o(`abstract case catch class def do else extends final finally for forSome if implicit import lazy match new null object override package private protected return sealed super this throw trait try type val var while with yield _ assert assume require print println printf readLine readBoolean readByte readShort readChar readInt readLong readFloat readDouble`), types: o(`AnyVal App Application Array BufferedIterator BigDecimal BigInt Char Console Either Enumeration Equiv Error Exception Fractional Function IndexedSeq Int Integral Iterable Iterator List Map Numeric Nil NotNull Option Ordered Ordering PartialFunction PartialOrdering Product Proxy Range Responder Seq Serializable Set Specializable Stream StringBuilder StringContext Symbol Throwable Traversable TraversableOnce Tuple Unit Vector Boolean Byte Character CharSequence Class ClassLoader Cloneable Comparable Compiler Double Exception Float Integer Long Math Number Object Package Pair Process Runtime Runnable SecurityManager Short StackTraceElement StrictMath String StringBuffer System Thread ThreadGroup ThreadLocal Throwable Triple Void`), multiLineStrings: true, blockKeywords: o(`catch class enum do else finally for forSome if match switch try while`), defKeywords: o(`class enum def object package trait type val var`), atoms: o(`true false null`), indentStatements: false, indentSwitch: false, isOperatorChar: /[+\-*&%=<>!?|\/#:@]/, hooks: { "@": function(e2) {
  return e2.eatWhile(/[\w\$_]/), `meta`;
}, '"': function(e2, t2) {
  return e2.match(`""`) ? (t2.tokenize = A, t2.tokenize(e2, t2)) : false;
}, "'": function(e2) {
  return e2.match(/^(\\[^'\s]+|[^\\'])'/) ? `character` : (e2.eatWhile(/[\w\$_\xa1-\uffff]/), `atom`);
}, "=": function(t2, n2) {
  var r2 = n2.context;
  return r2.type == `}` && r2.align && t2.eat(`>`) ? (n2.context = new e(r2.indented, r2.column, r2.type, r2.info, null, r2.prev), `operator`) : false;
}, "/": function(e2, t2) {
  return e2.eat(`*`) ? (t2.tokenize = j(1), t2.tokenize(e2, t2)) : false;
} }, languageData: { closeBrackets: { brackets: [`(`, `[`, `{`, `'`, `"`, `"""`] } } });
function N(e2) {
  return function(t2, n2) {
    for (var r2 = false, i2, a2 = false; !t2.eol(); ) {
      if (!e2 && !r2 && t2.match(`"`)) {
        a2 = true;
        break;
      }
      if (e2 && t2.match(`"""`)) {
        a2 = true;
        break;
      }
      i2 = t2.next(), !r2 && i2 == `$` && t2.match(`{`) && t2.skipTo(`}`), r2 = !r2 && i2 == `\\` && !e2;
    }
    return (a2 || !e2) && (n2.tokenize = null), `string`;
  };
}
const P = a({ name: `kotlin`, keywords: o(`package as typealias class interface this super val operator var fun for is in This throw return annotation break continue object if else while do try when !in !is as? file import where by get set abstract enum open inner override private public internal protected catch finally out final vararg reified dynamic companion constructor init sealed field property receiver param sparam lateinit data inline noinline tailrec external annotation crossinline const operator infix suspend actual expect setparam`), types: o(`Boolean Byte Character CharSequence Class ClassLoader Cloneable Comparable Compiler Double Exception Float Integer Long Math Number Object Package Pair Process Runtime Runnable SecurityManager Short StackTraceElement StrictMath String StringBuffer System Thread ThreadGroup ThreadLocal Throwable Triple Void Annotation Any BooleanArray ByteArray Char CharArray DeprecationLevel DoubleArray Enum FloatArray Function Int IntArray Lazy LazyThreadSafetyMode LongArray Nothing ShortArray Unit`), intendSwitch: false, indentStatements: false, multiLineStrings: true, number: /^(?:0x[a-f\d_]+|0b[01_]+|(?:[\d_]+(\.\d+)?|\.\d+)(?:e[-+]?[\d_]+)?)(ul?|l|f)?/i, blockKeywords: o(`catch class do else finally for if where try while enum`), defKeywords: o(`class val var object interface fun`), atoms: o(`true false null this`), hooks: { "@": function(e2) {
  return e2.eatWhile(/[\w\$_]/), `meta`;
}, "*": function(e2, t2) {
  return t2.prevToken == `.` ? `variable` : `operator`;
}, '"': function(e2, t2) {
  return t2.tokenize = N(e2.match(`""`)), t2.tokenize(e2, t2);
}, "/": function(e2, t2) {
  return e2.eat(`*`) ? (t2.tokenize = j(1), t2.tokenize(e2, t2)) : false;
}, indent: function(e2, t2, n2, r2) {
  var i2 = n2 && n2.charAt(0);
  if ((e2.prevToken == `}` || e2.prevToken == `)`) && n2 == ``) return e2.indented;
  if (e2.prevToken == `operator` && n2 != `}` && e2.context.type != `}` || e2.prevToken == `variable` && i2 == `.` || (e2.prevToken == `}` || e2.prevToken == `)`) && i2 == `.`) return r2 * 2 + t2.indented;
  if (t2.align && t2.type == `}`) return t2.indented + (e2.context.type == (n2 || ``).charAt(0) ? 0 : r2);
} }, languageData: { closeBrackets: { brackets: [`(`, `[`, `{`, `'`, `"`, `"""`] } } }), F = a({ name: `shader`, keywords: o(`sampler1D sampler2D sampler3D samplerCube sampler1DShadow sampler2DShadow const attribute uniform varying break continue discard return for while do if else struct in out inout`), types: o(`float int bool void vec2 vec3 vec4 ivec2 ivec3 ivec4 bvec2 bvec3 bvec4 mat2 mat3 mat4`), blockKeywords: o(`for while do if else struct`), builtin: o(`radians degrees sin cos tan asin acos atan pow exp log exp2 sqrt inversesqrt abs sign floor ceil fract mod min max clamp mix step smoothstep length distance dot cross normalize ftransform faceforward reflect refract matrixCompMult lessThan lessThanEqual greaterThan greaterThanEqual equal notEqual any all not texture1D texture1DProj texture1DLod texture1DProjLod texture2D texture2DProj texture2DLod texture2DProjLod texture3D texture3DProj texture3DLod texture3DProjLod textureCube textureCubeLod shadow1D shadow2D shadow1DProj shadow2DProj shadow1DLod shadow2DLod shadow1DProjLod shadow2DProjLod dFdx dFdy fwidth noise1 noise2 noise3 noise4`), atoms: o(`true false gl_FragColor gl_SecondaryColor gl_Normal gl_Vertex gl_MultiTexCoord0 gl_MultiTexCoord1 gl_MultiTexCoord2 gl_MultiTexCoord3 gl_MultiTexCoord4 gl_MultiTexCoord5 gl_MultiTexCoord6 gl_MultiTexCoord7 gl_FogCoord gl_PointCoord gl_Position gl_PointSize gl_ClipVertex gl_FrontColor gl_BackColor gl_FrontSecondaryColor gl_BackSecondaryColor gl_TexCoord gl_FogFragCoord gl_FragCoord gl_FrontFacing gl_FragData gl_FragDepth gl_ModelViewMatrix gl_ProjectionMatrix gl_ModelViewProjectionMatrix gl_TextureMatrix gl_NormalMatrix gl_ModelViewMatrixInverse gl_ProjectionMatrixInverse gl_ModelViewProjectionMatrixInverse gl_TextureMatrixTranspose gl_ModelViewMatrixInverseTranspose gl_ProjectionMatrixInverseTranspose gl_ModelViewProjectionMatrixInverseTranspose gl_TextureMatrixInverseTranspose gl_NormalScale gl_DepthRange gl_ClipPlane gl_Point gl_FrontMaterial gl_BackMaterial gl_LightSource gl_LightModel gl_FrontLightModelProduct gl_BackLightModelProduct gl_TextureColor gl_EyePlaneS gl_EyePlaneT gl_EyePlaneR gl_EyePlaneQ gl_FogParameters gl_MaxLights gl_MaxClipPlanes gl_MaxTextureUnits gl_MaxTextureCoords gl_MaxVertexAttribs gl_MaxVertexUniformComponents gl_MaxVaryingFloats gl_MaxVertexTextureImageUnits gl_MaxTextureImageUnits gl_MaxFragmentUniformComponents gl_MaxCombineTextureImageUnits gl_MaxDrawBuffers`), indentSwitch: false, hooks: { "#": v } }), I = a({ name: `nesc`, keywords: o(c + ` as atomic async call command component components configuration event generic implementation includes interface module new norace nx_struct nx_union post provides signal task uses abstract extends`), types: m, blockKeywords: o(g), atoms: o(`null true false`), hooks: { "#": v } }), L = a({ name: `objectivec`, keywords: o(c + ` ` + u), types: h, builtin: o(d), blockKeywords: o(g + ` @synthesize @try @catch @finally @autoreleasepool @synchronized`), defKeywords: o(_ + ` @interface @implementation @protocol @class`), dontIndentStatements: /^@.*$/, typeFirstDefinitions: true, atoms: o(`YES NO NULL Nil nil true false nullptr`), isReservedIdentifier: b, hooks: { "#": v, "*": y } }), R = a({ name: `objectivecpp`, keywords: o(c + ` ` + u + ` ` + l), types: h, builtin: o(d), blockKeywords: o(g + ` @synthesize @try @catch @finally @autoreleasepool @synchronized class try catch`), defKeywords: o(_ + ` @interface @implementation @protocol @class class namespace`), dontIndentStatements: /^@.*$|^template$/, typeFirstDefinitions: true, atoms: o(`YES NO NULL Nil nil true false nullptr`), isReservedIdentifier: b, hooks: { "#": v, "*": y, u: S, U: S, L: S, R: S, 0: x, 1: x, 2: x, 3: x, 4: x, 5: x, 6: x, 7: x, 8: x, 9: x, token: function(e2, t2, n2) {
  if (n2 == `variable` && e2.peek() == `(` && (t2.prevToken == `;` || t2.prevToken == null || t2.prevToken == `}`) && C(e2.current())) return `def`;
} }, namespaceSeparator: `::` }), z = a({ name: `squirrel`, keywords: o(`base break clone continue const default delete enum extends function in class foreach local resume return this throw typeof yield constructor instanceof static`), types: m, blockKeywords: o(`case catch class else for foreach if switch try while`), defKeywords: o(`function local class`), typeFirstDefinitions: true, atoms: o(`true false null`), hooks: { "#": v } });
var B = null;
function V(e2) {
  return function(t2, n2) {
    for (var r2 = false, i2, a2 = false; !t2.eol(); ) {
      if (!r2 && t2.match(`"`) && (e2 == `single` || t2.match(`""`))) {
        a2 = true;
        break;
      }
      if (!r2 && t2.match("``")) {
        B = V(e2), a2 = true;
        break;
      }
      i2 = t2.next(), r2 = e2 == `single` && !r2 && i2 == `\\`;
    }
    return a2 && (n2.tokenize = null), `string`;
  };
}
const H = a({ name: `ceylon`, keywords: o(`abstracts alias assembly assert assign break case catch class continue dynamic else exists extends finally for function given if import in interface is let module new nonempty object of out outer package return satisfies super switch then this throw try value void while`), types: function(e2) {
  var t2 = e2.charAt(0);
  return t2 === t2.toUpperCase() && t2 !== t2.toLowerCase();
}, blockKeywords: o(`case catch class dynamic else finally for function if interface module new object switch try while`), defKeywords: o(`class dynamic function interface module object package value`), builtin: o(`abstract actual aliased annotation by default deprecated doc final formal late license native optional sealed see serializable shared suppressWarnings tagged throws variable`), isPunctuationChar: /[\[\]{}\(\),;\:\.`]/, isOperatorChar: /[+\-*&%=<>!?|^~:\/]/, numberStart: /[\d#$]/, number: /^(?:#[\da-fA-F_]+|\$[01_]+|[\d_]+[kMGTPmunpf]?|[\d_]+\.[\d_]+(?:[eE][-+]?\d+|[kMGTPmunpf]|)|)/i, multiLineStrings: true, typeFirstDefinitions: true, atoms: o(`true false null larger smaller equal empty finished`), indentSwitch: false, styleDefs: false, hooks: { "@": function(e2) {
  return e2.eatWhile(/[\w\$_]/), `meta`;
}, '"': function(e2, t2) {
  return t2.tokenize = V(e2.match(`""`) ? `triple` : `single`), t2.tokenize(e2, t2);
}, "`": function(e2, t2) {
  return !B || !e2.match("`") ? false : (t2.tokenize = B, B = null, t2.tokenize(e2, t2));
}, "'": function(e2) {
  return e2.match(/^(\\[^'\s]+|[^\\'])'/) ? `string.special` : (e2.eatWhile(/[\w\$_\xa1-\uffff]/), `atom`);
}, token: function(e2, t2, n2) {
  if ((n2 == `variable` || n2 == `type`) && t2.prevToken == `.`) return `variableName.special`;
} }, languageData: { closeBrackets: { brackets: [`(`, `[`, `{`, `'`, `"`, `"""`] } } });
function U(e2) {
  (e2.interpolationStack || (e2.interpolationStack = [])).push(e2.tokenize);
}
function W(e2) {
  return (e2.interpolationStack || (e2.interpolationStack = [])).pop();
}
function G(e2) {
  return e2.interpolationStack ? e2.interpolationStack.length : 0;
}
function K(e2, t2, n2, r2) {
  var i2 = false;
  if (t2.eat(e2)) if (t2.eat(e2)) i2 = true;
  else return `string`;
  function a2(t3, n3) {
    for (var a3 = false; !t3.eol(); ) {
      if (!r2 && !a3 && t3.peek() == `$`) return U(n3), n3.tokenize = q, `string`;
      var o2 = t3.next();
      if (o2 == e2 && !a3 && (!i2 || t3.match(e2 + e2))) {
        n3.tokenize = null;
        break;
      }
      a3 = !r2 && !a3 && o2 == `\\`;
    }
    return `string`;
  }
  return n2.tokenize = a2, a2(t2, n2);
}
function q(e2, t2) {
  return e2.eat(`$`), e2.eat(`{`) ? t2.tokenize = null : t2.tokenize = J, null;
}
function J(e2, t2) {
  return e2.eatWhile(/[\w_]/), t2.tokenize = W(t2), `variable`;
}
const Y = a({ name: `dart`, keywords: o(`this super static final const abstract class extends external factory implements mixin get native set typedef with enum throw rethrow assert break case continue default in return new deferred async await covariant try catch finally do else for if switch while import library export part of show hide is as extension on yield late required sealed base interface when inline`), blockKeywords: o(`try catch finally do else for if switch while`), builtin: o(`void bool num int double dynamic var String Null Never`), atoms: o(`true false null`), number: /^(?:0x[a-f\d_]+|(?:[\d_]+\.?[\d_]*|\.[\d_]+)(?:e[-+]?[\d_]+)?)/i, hooks: { "@": function(e2) {
  return e2.eatWhile(/[\w\$_\.]/), `meta`;
}, "'": function(e2, t2) {
  return K(`'`, e2, t2, false);
}, '"': function(e2, t2) {
  return K(`"`, e2, t2, false);
}, r: function(e2, t2) {
  var n2 = e2.peek();
  return n2 == `'` || n2 == `"` ? K(e2.next(), e2, t2, true) : false;
}, "}": function(e2, t2) {
  return G(t2) > 0 ? (t2.tokenize = W(t2), null) : false;
}, "/": function(e2, t2) {
  return e2.eat(`*`) ? (t2.tokenize = j(1), t2.tokenize(e2, t2)) : false;
}, token: function(e2, t2, n2) {
  if (n2 == `variable` && RegExp(`^[_$]*[A-Z][a-zA-Z0-9_$]*$`, `g`).test(e2.current())) return `type`;
} } });
export {
  E as c,
  H as ceylon,
  a as clike,
  D as cpp,
  k as csharp,
  Y as dart,
  O as java,
  P as kotlin,
  I as nesC,
  L as objectiveC,
  R as objectiveCpp,
  M as scala,
  F as shader,
  z as squirrel
};
