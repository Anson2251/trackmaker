function e(e2) {
  for (var t2 = {}, n2 = e2.split(` `), r = 0; r < n2.length; ++r) t2[n2[r]] = true;
  return t2;
}
var t = { keywords: e(`DEFINITIONS OBJECTS IF DERIVED INFORMATION ACTION REPLY ANY NAMED CHARACTERIZED BEHAVIOUR REGISTERED WITH AS IDENTIFIED CONSTRAINED BY PRESENT BEGIN IMPORTS FROM UNITS SYNTAX MIN-ACCESS MAX-ACCESS MINACCESS MAXACCESS REVISION STATUS DESCRIPTION SEQUENCE SET COMPONENTS OF CHOICE DistinguishedName ENUMERATED SIZE MODULE END INDEX AUGMENTS EXTENSIBILITY IMPLIED EXPORTS`), cmipVerbs: e(`ACTIONS ADD GET NOTIFICATIONS REPLACE REMOVE`), compareTypes: e(`OPTIONAL DEFAULT MANAGED MODULE-TYPE MODULE_IDENTITY MODULE-COMPLIANCE OBJECT-TYPE OBJECT-IDENTITY OBJECT-COMPLIANCE MODE CONFIRMED CONDITIONAL SUBORDINATE SUPERIOR CLASS TRUE FALSE NULL TEXTUAL-CONVENTION`), status: e(`current deprecated mandatory obsolete`), tags: e(`APPLICATION AUTOMATIC EXPLICIT IMPLICIT PRIVATE TAGS UNIVERSAL`), storage: e(`BOOLEAN INTEGER OBJECT IDENTIFIER BIT OCTET STRING UTCTime InterfaceIndex IANAifType CMIP-Attribute REAL PACKAGE PACKAGES IpAddress PhysAddress NetworkAddress BITS BMPString TimeStamp TimeTicks TruthValue RowStatus DisplayString GeneralString GraphicString IA5String NumericString PrintableString SnmpAdminString TeletexString UTF8String VideotexString VisibleString StringStore ISO646String T61String UniversalString Unsigned32 Integer32 Gauge Gauge32 Counter Counter32 Counter64`), modifier: e(`ATTRIBUTE ATTRIBUTES MANDATORY-GROUP MANDATORY-GROUPS GROUP GROUPS ELEMENTS EQUALITY ORDERING SUBSTRINGS DEFINED`), accessTypes: e(`not-accessible accessible-for-notify read-only read-create read-write`), multiLineStrings: true };
function n(e2) {
  var n2 = e2.keywords || t.keywords, r = e2.cmipVerbs || t.cmipVerbs, i = e2.compareTypes || t.compareTypes, a = e2.status || t.status, o = e2.tags || t.tags, s = e2.storage || t.storage, c = e2.modifier || t.modifier, l = e2.accessTypes || t.accessTypes, u = e2.multiLineStrings || t.multiLineStrings, d = e2.indentStatements !== false, f = /[\|\^]/, p;
  function m(e3, t2) {
    var u2 = e3.next();
    if (u2 == `"` || u2 == `'`) return t2.tokenize = h(u2), t2.tokenize(e3, t2);
    if (/[\[\]\(\){}:=,;]/.test(u2)) return p = u2, `punctuation`;
    if (u2 == `-` && e3.eat(`-`)) return e3.skipToEnd(), `comment`;
    if (/\d/.test(u2)) return e3.eatWhile(/[\w\.]/), `number`;
    if (f.test(u2)) return e3.eatWhile(f), `operator`;
    e3.eatWhile(/[\w\-]/);
    var d2 = e3.current();
    return n2.propertyIsEnumerable(d2) ? `keyword` : r.propertyIsEnumerable(d2) ? `variableName` : i.propertyIsEnumerable(d2) ? `atom` : a.propertyIsEnumerable(d2) ? `comment` : o.propertyIsEnumerable(d2) ? `typeName` : s.propertyIsEnumerable(d2) || c.propertyIsEnumerable(d2) || l.propertyIsEnumerable(d2) ? `modifier` : `variableName`;
  }
  function h(e3) {
    return function(t2, n3) {
      for (var r2 = false, i2, a2 = false; (i2 = t2.next()) != null; ) {
        if (i2 == e3 && !r2) {
          var o2 = t2.peek();
          o2 && (o2 = o2.toLowerCase(), (o2 == `b` || o2 == `h` || o2 == `o`) && t2.next()), a2 = true;
          break;
        }
        r2 = !r2 && i2 == `\\`;
      }
      return (a2 || !(r2 || u)) && (n3.tokenize = null), `string`;
    };
  }
  function g(e3, t2, n3, r2, i2) {
    this.indented = e3, this.column = t2, this.type = n3, this.align = r2, this.prev = i2;
  }
  function _(e3, t2, n3) {
    var r2 = e3.indented;
    return e3.context && e3.context.type == `statement` && (r2 = e3.context.indented), e3.context = new g(r2, t2, n3, null, e3.context);
  }
  function v(e3) {
    var t2 = e3.context.type;
    return (t2 == `)` || t2 == `]` || t2 == `}`) && (e3.indented = e3.context.indented), e3.context = e3.context.prev;
  }
  return { name: `asn1`, startState: function() {
    return { tokenize: null, context: new g(-2, 0, `top`, false), indented: 0, startOfLine: true };
  }, token: function(e3, t2) {
    var n3 = t2.context;
    if (e3.sol() && (n3.align ?? (n3.align = false), t2.indented = e3.indentation(), t2.startOfLine = true), e3.eatSpace()) return null;
    p = null;
    var r2 = (t2.tokenize || m)(e3, t2);
    if (r2 == `comment`) return r2;
    if (n3.align ?? (n3.align = true), (p == `;` || p == `:` || p == `,`) && n3.type == `statement`) v(t2);
    else if (p == `{`) _(t2, e3.column(), `}`);
    else if (p == `[`) _(t2, e3.column(), `]`);
    else if (p == `(`) _(t2, e3.column(), `)`);
    else if (p == `}`) {
      for (; n3.type == `statement`; ) n3 = v(t2);
      for (n3.type == `}` && (n3 = v(t2)); n3.type == `statement`; ) n3 = v(t2);
    } else p == n3.type ? v(t2) : d && ((n3.type == `}` || n3.type == `top`) && p != `;` || n3.type == `statement` && p == `newstatement`) && _(t2, e3.column(), `statement`);
    return t2.startOfLine = false, r2;
  }, languageData: { indentOnInput: /^\s*[{}]$/, commentTokens: { line: `--` } } };
}
export {
  n as asn1
};
