import { A as e, C as t, M as n, N as r, m as i, n as a, r as o, s, u as c, y as l } from "./dist-CQp5Y4zm.js";
import { i as u, r as d } from "./dist-aB4XqAU2.js";
var ee = 36, f = 1, p = 2, m = 3, h = 4, te = 5, ne = 6, re = 7, ie = 8, ae = 9, oe = 10, se = 11, g = 12, _ = 13, v = 14, ce = 15, le = 16, ue = 17, y = 18, de = 19, b = 20, x = 21, S = 22, C = 23, w = 24;
function T(e4) {
  return e4 >= 65 && e4 <= 90 || e4 >= 97 && e4 <= 122 || e4 >= 48 && e4 <= 57;
}
function fe(e4) {
  return e4 >= 48 && e4 <= 57 || e4 >= 97 && e4 <= 102 || e4 >= 65 && e4 <= 70;
}
function E(e4, t2, n2) {
  for (let r2 = false; ; ) {
    if (e4.next < 0) return;
    if (e4.next == t2 && !r2) {
      e4.advance();
      return;
    }
    r2 = n2 && !r2 && e4.next == 92, e4.advance();
  }
}
function pe(e4, t2) {
  scan: for (; ; ) {
    if (e4.next < 0) return;
    if (e4.next == 36) {
      e4.advance();
      for (let n2 = 0; n2 < t2.length; n2++) {
        if (e4.next != t2.charCodeAt(n2)) continue scan;
        e4.advance();
      }
      if (e4.next == 36) {
        e4.advance();
        return;
      }
    } else e4.advance();
  }
}
function me(e4, t2) {
  let n2 = `[{<(`.indexOf(String.fromCharCode(t2)), r2 = n2 < 0 ? t2 : `]}>)`.charCodeAt(n2);
  for (; ; ) {
    if (e4.next < 0) return;
    if (e4.next == r2 && e4.peek(1) == 39) {
      e4.advance(2);
      return;
    }
    e4.advance();
  }
}
function D(e4, t2) {
  for (; !(e4.next != 95 && !T(e4.next)); ) t2 != null && (t2 += String.fromCharCode(e4.next)), e4.advance();
  return t2;
}
function he(e4) {
  if (e4.next == 39 || e4.next == 34 || e4.next == 96) {
    let t2 = e4.next;
    e4.advance(), E(e4, t2, false);
  } else D(e4);
}
function O(e4, t2) {
  for (; e4.next == 48 || e4.next == 49; ) e4.advance();
  t2 && e4.next == t2 && e4.advance();
}
function k(e4, t2) {
  for (; ; ) {
    if (e4.next == 46) {
      if (t2) break;
      t2 = true;
    } else if (e4.next < 48 || e4.next > 57) break;
    e4.advance();
  }
  if (e4.next == 69 || e4.next == 101) for (e4.advance(), (e4.next == 43 || e4.next == 45) && e4.advance(); e4.next >= 48 && e4.next <= 57; ) e4.advance();
}
function A(e4) {
  for (; !(e4.next < 0 || e4.next == 10); ) e4.advance();
}
function j(e4, t2) {
  for (let n2 = 0; n2 < t2.length; n2++) if (t2.charCodeAt(n2) == e4) return true;
  return false;
}
var M = ` 	\r
`;
function N(e4, t2, n2) {
  let r2 = /* @__PURE__ */ Object.create(null);
  r2.true = r2.false = te, r2.null = r2.unknown = ne;
  for (let t3 of e4.split(` `)) t3 && (r2[t3] = b);
  for (let e5 of t2.split(` `)) e5 && (r2[e5] = x);
  for (let e5 of (n2 || ``).split(` `)) e5 && (r2[e5] = w);
  return r2;
}
var P = `array binary bit boolean char character clob date decimal double float int integer interval large national nchar nclob numeric object precision real smallint time timestamp varchar varying `, F = `absolute action add after all allocate alter and any are as asc assertion at authorization before begin between both breadth by call cascade cascaded case cast catalog check close collate collation column commit condition connect connection constraint constraints constructor continue corresponding count create cross cube current current_date current_default_transform_group current_transform_group_for_type current_path current_role current_time current_timestamp current_user cursor cycle data day deallocate declare default deferrable deferred delete depth deref desc describe descriptor deterministic diagnostics disconnect distinct do domain drop dynamic each else elseif end end-exec equals escape except exception exec execute exists exit external fetch first for foreign found from free full function general get global go goto grant group grouping handle having hold hour identity if immediate in indicator initially inner inout input insert intersect into is isolation join key language last lateral leading leave left level like limit local localtime localtimestamp locator loop map match method minute modifies module month names natural nesting new next no none not of old on only open option or order ordinality out outer output overlaps pad parameter partial path prepare preserve primary prior privileges procedure public read reads recursive redo ref references referencing relative release repeat resignal restrict result return returns revoke right role rollback rollup routine row rows savepoint schema scroll search second section select session session_user set sets signal similar size some space specific specifictype sql sqlexception sqlstate sqlwarning start state static system_user table temporary then timezone_hour timezone_minute to trailing transaction translation treat trigger under undo union unique unnest until update usage user using value values view when whenever where while with without work write year zone `, I = { backslashEscapes: false, hashComments: false, spaceAfterDashes: false, slashComments: false, doubleQuotedStrings: false, doubleDollarQuotedStrings: false, unquotedBitLiterals: false, treatBitsAsBytes: false, charSetCasts: false, plsqlQuotingMechanism: false, operatorChars: `*+-%<>!=&|~^/`, specialVar: `?`, identifierQuotes: `"`, caseInsensitiveIdentifiers: false, words: N(F, P) };
function L(e4, t2, n2, r2) {
  let i2 = {};
  for (let t3 in I) i2[t3] = (e4.hasOwnProperty(t3) ? e4 : I)[t3];
  return t2 && (i2.words = N(t2, n2 || ``, r2)), i2;
}
function R(e4) {
  return new a((t2) => {
    let { next: n2 } = t2;
    if (t2.advance(), j(n2, M)) {
      for (; j(t2.next, M); ) t2.advance();
      t2.acceptToken(ee);
    } else if (n2 == 36 && e4.doubleDollarQuotedStrings) {
      let e5 = D(t2, ``);
      t2.next == 36 && (t2.advance(), pe(t2, e5), t2.acceptToken(m));
    } else if (n2 == 39 || n2 == 34 && e4.doubleQuotedStrings) E(t2, n2, e4.backslashEscapes), t2.acceptToken(m);
    else if (n2 == 35 && e4.hashComments || n2 == 47 && t2.next == 47 && e4.slashComments) A(t2), t2.acceptToken(f);
    else if (n2 == 45 && t2.next == 45 && (!e4.spaceAfterDashes || t2.peek(1) == 32)) A(t2), t2.acceptToken(f);
    else if (n2 == 47 && t2.next == 42) {
      t2.advance();
      for (let e5 = 1; ; ) {
        let n3 = t2.next;
        if (t2.next < 0) break;
        if (t2.advance(), n3 == 42 && t2.next == 47) {
          if (e5--, t2.advance(), !e5) break;
        } else n3 == 47 && t2.next == 42 && (e5++, t2.advance());
      }
      t2.acceptToken(p);
    } else if ((n2 == 101 || n2 == 69) && t2.next == 39) t2.advance(), E(t2, 39, true), t2.acceptToken(m);
    else if ((n2 == 110 || n2 == 78) && t2.next == 39 && e4.charSetCasts) t2.advance(), E(t2, 39, e4.backslashEscapes), t2.acceptToken(m);
    else if (n2 == 95 && e4.charSetCasts) for (let n3 = 0; ; n3++) {
      if (t2.next == 39 && n3 > 1) {
        t2.advance(), E(t2, 39, e4.backslashEscapes), t2.acceptToken(m);
        break;
      }
      if (!T(t2.next)) break;
      t2.advance();
    }
    else if (e4.plsqlQuotingMechanism && (n2 == 113 || n2 == 81) && t2.next == 39 && t2.peek(1) > 0 && !j(t2.peek(1), M)) {
      let e5 = t2.peek(1);
      t2.advance(2), me(t2, e5), t2.acceptToken(m);
    } else if (j(n2, e4.identifierQuotes)) E(t2, n2 == 91 ? 93 : n2, false), t2.acceptToken(de);
    else if (n2 == 40) t2.acceptToken(re);
    else if (n2 == 41) t2.acceptToken(ie);
    else if (n2 == 123) t2.acceptToken(ae);
    else if (n2 == 125) t2.acceptToken(oe);
    else if (n2 == 91) t2.acceptToken(se);
    else if (n2 == 93) t2.acceptToken(g);
    else if (n2 == 59) t2.acceptToken(_);
    else if (e4.unquotedBitLiterals && n2 == 48 && t2.next == 98) t2.advance(), O(t2), t2.acceptToken(S);
    else if ((n2 == 98 || n2 == 66) && (t2.next == 39 || t2.next == 34)) {
      let n3 = t2.next;
      t2.advance(), e4.treatBitsAsBytes ? (E(t2, n3, e4.backslashEscapes), t2.acceptToken(C)) : (O(t2, n3), t2.acceptToken(S));
    } else if (n2 == 48 && (t2.next == 120 || t2.next == 88) || (n2 == 120 || n2 == 88) && t2.next == 39) {
      let e5 = t2.next == 39;
      for (t2.advance(); fe(t2.next); ) t2.advance();
      e5 && t2.next == 39 && t2.advance(), t2.acceptToken(h);
    } else if (n2 == 46 && t2.next >= 48 && t2.next <= 57) k(t2, true), t2.acceptToken(h);
    else if (n2 == 46) t2.acceptToken(v);
    else if (n2 >= 48 && n2 <= 57) k(t2, false), t2.acceptToken(h);
    else if (j(n2, e4.operatorChars)) {
      for (; j(t2.next, e4.operatorChars); ) t2.advance();
      t2.acceptToken(ce);
    } else if (j(n2, e4.specialVar)) t2.next == n2 && t2.advance(), he(t2), t2.acceptToken(ue);
    else if (n2 == 58 || n2 == 44) t2.acceptToken(le);
    else if (T(n2)) {
      let r2 = D(t2, String.fromCharCode(n2));
      t2.acceptToken(t2.next == 46 || t2.peek(-r2.length - 1) == 46 ? y : e4.words[r2.toLowerCase()] ?? y);
    }
  });
}
var z = R(I), ge = o.deserialize({ version: 14, states: "%vQ]QQOOO#wQRO'#DSO$OQQO'#CwO%eQQO'#CxO%lQQO'#CyO%sQQO'#CzOOQQ'#DS'#DSOOQQ'#C}'#C}O'UQRO'#C{OOQQ'#Cv'#CvOOQQ'#C|'#C|Q]QQOOQOQQOOO'`QQO'#DOO(xQRO,59cO)PQQO,59cO)UQQO'#DSOOQQ,59d,59dO)cQQO,59dOOQQ,59e,59eO)jQQO,59eOOQQ,59f,59fO)qQQO,59fOOQQ-E6{-E6{OOQQ,59b,59bOOQQ-E6z-E6zOOQQ,59j,59jOOQQ-E6|-E6|O+VQRO1G.}O+^QQO,59cOOQQ1G/O1G/OOOQQ1G/P1G/POOQQ1G/Q1G/QP+kQQO'#C}O+rQQO1G.}O)PQQO,59cO,PQQO'#Cw", stateData: ",[~OtOSPOSQOS~ORUOSUOTUOUUOVROXSOZTO]XO^QO_UO`UOaPObPOcPOdUOeUOfUOgUOhUO~O^]ORvXSvXTvXUvXVvXXvXZvX]vX_vX`vXavXbvXcvXdvXevXfvXgvXhvX~OsvX~P!jOa_Ob_Oc_O~ORUOSUOTUOUUOVROXSOZTO^tO_UO`UOa`Ob`Oc`OdUOeUOfUOgUOhUO~OWaO~P$ZOYcO~P$ZO[eO~P$ZORUOSUOTUOUUOVROXSOZTO^QO_UO`UOaPObPOcPOdUOeUOfUOgUOhUO~O]hOsoX~P%zOajObjOcjO~O^]ORkaSkaTkaUkaVkaXkaZka]ka_ka`kaakabkackadkaekafkagkahka~Oska~P'kO^]O~OWvXYvX[vX~P!jOWnO~P$ZOYoO~P$ZO[pO~P$ZO^]ORkiSkiTkiUkiVkiXkiZki]ki_ki`kiakibkickidkiekifkigkihki~Oski~P)xOWkaYka[ka~P'kO]hO~P$ZOWkiYki[ki~P)xOasObsOcsO~O", goto: "#hwPPPPPPPPPPPPPPPPPPPPPPPPPPx||||!Y!^!d!xPPP#[TYOZeUORSTWZbdfqT[OZQZORiZSWOZQbRQdSQfTZgWbdfqQ^PWk^lmrQl_Qm`RrseVORSTWZbdfq", nodeNames: `\u26A0 LineComment BlockComment String Number Bool Null ( ) { } [ ] ; . Operator Punctuation SpecialVar Identifier QuotedIdentifier Keyword Type Bits Bytes Builtin Script Statement CompositeIdentifier Parens Braces Brackets Statement`, maxTerm: 38, nodeProps: [[`isolate`, -4, 1, 2, 3, 19, ``]], skippedNodes: [0, 1, 2], repeatNodeCount: 3, tokenData: `RORO`, tokenizers: [0, z], topRules: { Script: [0, 25] }, tokenPrec: 0 });
function B(e4) {
  let t2 = e4.cursor().moveTo(e4.from, -1);
  for (; /Comment/.test(t2.name); ) t2.moveTo(t2.from, -1);
  return t2.node;
}
function V(e4, t2) {
  let n2 = e4.sliceString(t2.from, t2.to), r2 = /^([`'"\[])(.*)([`'"\]])$/.exec(n2);
  return r2 ? r2[2] : n2;
}
function H(e4) {
  return e4 && (e4.name == `Identifier` || e4.name == `QuotedIdentifier`);
}
function U(e4, t2) {
  if (t2.name == `CompositeIdentifier`) {
    let n2 = [];
    for (let r2 = t2.firstChild; r2; r2 = r2.nextSibling) H(r2) && n2.push(V(e4, r2));
    return n2;
  }
  return [V(e4, t2)];
}
function W(e4, t2) {
  for (let n2 = []; ; ) {
    if (!t2 || t2.name != `.`) return n2;
    let r2 = B(t2);
    if (!H(r2)) return n2;
    n2.unshift(V(e4, r2)), t2 = B(r2);
  }
}
function _e(t2, n2) {
  let r2 = e(t2).resolveInner(n2, -1), i2 = ye(t2.doc, r2);
  return r2.name == `Identifier` || r2.name == `QuotedIdentifier` || r2.name == `Keyword` ? { from: r2.from, quoted: r2.name == `QuotedIdentifier` ? t2.doc.sliceString(r2.from, r2.from + 1) : null, parents: W(t2.doc, B(r2)), aliases: i2 } : r2.name == `.` ? { from: n2, quoted: null, parents: W(t2.doc, r2), aliases: i2 } : { from: n2, quoted: null, parents: [], empty: true, aliases: i2 };
}
var ve = new Set(`where group having order union intersect except all distinct limit offset fetch for`.split(` `));
function ye(e4, t2) {
  let n2;
  for (let e5 = t2; !n2; e5 = e5.parent) {
    if (!e5) return null;
    e5.name == `Statement` && (n2 = e5);
  }
  let r2 = null;
  for (let t3 = n2.firstChild, i2 = false, a2 = null; t3; t3 = t3.nextSibling) {
    let n3 = t3.name == `Keyword` ? e4.sliceString(t3.from, t3.to).toLowerCase() : null, o2 = null;
    if (!i2) i2 = n3 == `from`;
    else if (n3 == `as` && a2 && H(t3.nextSibling)) o2 = V(e4, t3.nextSibling);
    else if (n3 && ve.has(n3)) break;
    else a2 && H(t3) && (o2 = V(e4, t3));
    o2 && (r2 || (r2 = /* @__PURE__ */ Object.create(null)), r2[o2] = U(e4, a2)), a2 = /Identifier$/.test(t3.name) ? t3 : null;
  }
  return r2;
}
function be(e4, t2, n2) {
  return n2.map((n3) => ({ ...n3, label: n3.label[0] == e4 ? n3.label : e4 + n3.label + t2, apply: void 0 }));
}
var xe = /^\w*$/, Se = /^[`'"\[]?\w*[`'"\]]?$/;
function G(e4) {
  return e4.self && typeof e4.self.label == `string`;
}
var Ce = class e2 {
  constructor(e4, t2) {
    this.idQuote = e4, this.idCaseInsensitive = t2, this.list = [], this.children = void 0;
  }
  child(t2) {
    let n2 = this.children || (this.children = /* @__PURE__ */ Object.create(null));
    return n2[t2] || (t2 && !this.list.some((e4) => e4.label == t2) && this.list.push(K(t2, `type`, this.idQuote, this.idCaseInsensitive)), n2[t2] = new e2(this.idQuote, this.idCaseInsensitive));
  }
  maybeChild(e4) {
    return this.children ? this.children[e4] : null;
  }
  addCompletion(e4) {
    let t2 = this.list.findIndex((t3) => t3.label == e4.label);
    t2 > -1 ? this.list[t2] = e4 : this.list.push(e4);
  }
  addCompletions(e4) {
    for (let t2 of e4) this.addCompletion(typeof t2 == `string` ? K(t2, `property`, this.idQuote, this.idCaseInsensitive) : t2);
  }
  addNamespace(e4) {
    Array.isArray(e4) ? this.addCompletions(e4) : G(e4) ? this.addNamespace(e4.children) : this.addNamespaceObject(e4);
  }
  addNamespaceObject(e4) {
    for (let t2 of Object.keys(e4)) {
      let n2 = e4[t2], r2 = null, i2 = t2.replace(/\\?\./g, (e5) => e5 == `.` ? `\0` : e5).split(`\0`), a2 = this;
      G(n2) && (r2 = n2.self, n2 = n2.children);
      for (let e5 = 0; e5 < i2.length; e5++) r2 && e5 == i2.length - 1 && a2.addCompletion(r2), a2 = a2.child(i2[e5].replace(/\\\./g, `.`));
      a2.addNamespace(n2);
    }
  }
};
function K(e4, t2, n2, r2) {
  return RegExp(`^[a-z_][a-z_\\d]*$`, r2 ? `i` : ``).test(e4) ? { label: e4, type: t2 } : { label: e4, type: t2, apply: n2 + e4 + q(n2) };
}
function q(e4) {
  return e4 === `[` ? `]` : e4;
}
function we(e4, t2, n2, r2, i2, a2) {
  var _a;
  let o2 = new Ce(((_a = a2 == null ? void 0 : a2.spec.identifierQuotes) == null ? void 0 : _a[0]) || `"`, !!(a2 == null ? void 0 : a2.spec.caseInsensitiveIdentifiers)), s2 = i2 ? o2.child(i2) : null;
  return o2.addNamespace(e4), t2 && (s2 || o2).addCompletions(t2), n2 && o2.addCompletions(n2), s2 && o2.addCompletions(s2.list), r2 && o2.addCompletions((s2 || o2).child(r2).list), (e5) => {
    let { parents: t3, from: n3, quoted: i3, empty: a3, aliases: c2 } = _e(e5.state, e5.pos);
    if (a3 && !e5.explicit) return null;
    c2 && t3.length == 1 && (t3 = c2[t3[0]] || t3);
    let l2 = o2;
    for (let e6 of t3) {
      for (; !l2.children || !l2.children[e6]; ) if (l2 == o2 && s2) l2 = s2;
      else if (l2 == s2 && r2) l2 = l2.child(r2);
      else return null;
      let t4 = l2.maybeChild(e6);
      if (!t4) return null;
      l2 = t4;
    }
    let u2 = l2.list;
    if (l2 == o2 && c2 && (u2 = u2.concat(Object.keys(c2).map((e6) => ({ label: e6, type: `constant` })))), i3) {
      let t4 = i3[0], r3 = q(t4);
      return { from: n3, to: e5.state.sliceDoc(e5.pos, e5.pos + 1) == r3 ? e5.pos + 1 : void 0, options: be(t4, r3, u2), validFor: Se };
    } else return { from: n3, options: u2, validFor: xe };
  };
}
function Te(e4) {
  return e4 == x ? `type` : e4 == b ? `keyword` : `variable`;
}
function Ee(e4, t2, n2) {
  return u([`QuotedIdentifier`, `String`, `LineComment`, `BlockComment`, `.`], d(Object.keys(e4).map((r2) => n2(t2 ? r2.toUpperCase() : r2, Te(e4[r2])))));
}
var De = ge.configure({ props: [t.add({ Statement: i() }), l.add({ Statement(e4, t2) {
  return { from: Math.min(e4.from + 100, t2.doc.lineAt(e4.from).to), to: e4.to };
}, BlockComment(e4) {
  return { from: e4.from + 2, to: e4.to - 2 };
} }), n({ Keyword: r.keyword, Type: r.typeName, Builtin: r.standard(r.name), Bits: r.number, Bytes: r.string, Bool: r.bool, Null: r.null, Number: r.number, String: r.string, Identifier: r.name, QuotedIdentifier: r.special(r.string), SpecialVar: r.special(r.name), LineComment: r.lineComment, BlockComment: r.blockComment, Operator: r.operator, "Semi Punctuation": r.punctuation, "( )": r.paren, "{ }": r.brace, "[ ]": r.squareBracket })] }), J = class e3 {
  constructor(e4, t2, n2) {
    this.dialect = e4, this.language = t2, this.spec = n2;
  }
  get extension() {
    return this.language.extension;
  }
  configureLanguage(t2, n2) {
    return new e3(this.dialect, this.language.configure(t2, n2), this.spec);
  }
  static define(t2) {
    let n2 = L(t2, t2.keywords, t2.types, t2.builtin);
    return new e3(n2, s.define({ name: `sql`, parser: De.configure({ tokenizers: [{ from: z, to: R(n2) }] }), languageData: { commentTokens: { line: `--`, block: { open: `/*`, close: `*/` } }, closeBrackets: { brackets: [`(`, `[`, `{`, `'`, `"`, "`"] } } }), t2);
  }
};
function Oe(e4, t2) {
  return { label: e4, type: t2, boost: -1 };
}
function Y(e4, t2 = false, n2) {
  return Ee(e4.dialect.words, t2, n2 || Oe);
}
function X(e4) {
  return e4.schema ? we(e4.schema, e4.tables, e4.schemas, e4.defaultTable, e4.defaultSchema, e4.dialect || Z) : () => null;
}
function ke(e4) {
  return e4.schema ? (e4.dialect || Z).language.data.of({ autocomplete: X(e4) }) : [];
}
function Ae(e4 = {}) {
  let t2 = e4.dialect || Z;
  return new c(t2.language, [ke(e4), t2.language.data.of({ autocomplete: Y(t2, e4.upperCaseKeywords, e4.keywordCompletion) })]);
}
var Z = J.define({}), je = J.define({ charSetCasts: true, doubleDollarQuotedStrings: true, operatorChars: "+-*/<>=~!@#%^&|`?", specialVar: ``, keywords: F + `abort abs absent access according ada admin aggregate alias also always analyse analyze array_agg array_max_cardinality asensitive assert assignment asymmetric atomic attach attribute attributes avg backward base64 begin_frame begin_partition bernoulli bit_length blocked bom cache called cardinality catalog_name ceil ceiling chain char_length character_length character_set_catalog character_set_name character_set_schema characteristics characters checkpoint class class_origin cluster coalesce cobol collation_catalog collation_name collation_schema collect column_name columns command_function command_function_code comment comments committed concurrently condition_number configuration conflict connection_name constant constraint_catalog constraint_name constraint_schema contains content control conversion convert copy corr cost covar_pop covar_samp csv cume_dist current_catalog current_row current_schema cursor_name database datalink datatype datetime_interval_code datetime_interval_precision db debug defaults defined definer degree delimiter delimiters dense_rank depends derived detach detail dictionary disable discard dispatch dlnewcopy dlpreviouscopy dlurlcomplete dlurlcompleteonly dlurlcompletewrite dlurlpath dlurlpathonly dlurlpathwrite dlurlscheme dlurlserver dlvalue document dump dynamic_function dynamic_function_code element elsif empty enable encoding encrypted end_frame end_partition endexec enforced enum errcode error event every exclude excluding exclusive exp explain expression extension extract family file filter final first_value flag floor following force foreach fortran forward frame_row freeze fs functions fusion generated granted greatest groups handler header hex hierarchy hint id ignore ilike immediately immutable implementation implicit import include including increment indent index indexes info inherit inherits inline insensitive instance instantiable instead integrity intersection invoker isnull key_member key_type label lag last_value lead leakproof least length library like_regex link listen ln load location lock locked log logged lower mapping matched materialized max max_cardinality maxvalue member merge message message_length message_octet_length message_text min minvalue mod mode more move multiset mumps name namespace nfc nfd nfkc nfkd nil normalize normalized nothing notice notify notnull nowait nth_value ntile nullable nullif nulls number occurrences_regex octet_length octets off offset oids operator options ordering others over overlay overriding owned owner parallel parameter_mode parameter_name parameter_ordinal_position parameter_specific_catalog parameter_specific_name parameter_specific_schema parser partition pascal passing passthrough password percent percent_rank percentile_cont percentile_disc perform period permission pg_context pg_datatype_name pg_exception_context pg_exception_detail pg_exception_hint placing plans pli policy portion position position_regex power precedes preceding prepared print_strict_params procedural procedures program publication query quote raise range rank reassign recheck recovery refresh regr_avgx regr_avgy regr_count regr_intercept regr_r2 regr_slope regr_sxx regr_sxy regr_syy reindex rename repeatable replace replica requiring reset respect restart restore result_oid returned_cardinality returned_length returned_octet_length returned_sqlstate returning reverse routine_catalog routine_name routine_schema routines row_count row_number rowtype rule scale schema_name schemas scope scope_catalog scope_name scope_schema security selective self sensitive sequence sequences serializable server server_name setof share show simple skip slice snapshot source specific_name sqlcode sqlerror sqrt stable stacked standalone statement statistics stddev_pop stddev_samp stdin stdout storage strict strip structure style subclass_origin submultiset subscription substring substring_regex succeeds sum symmetric sysid system system_time table_name tables tablesample tablespace temp template ties token top_level_count transaction_active transactions_committed transactions_rolled_back transform transforms translate translate_regex trigger_catalog trigger_name trigger_schema trim trim_array truncate trusted type types uescape unbounded uncommitted unencrypted unlink unlisten unlogged unnamed untyped upper uri use_column use_variable user_defined_type_catalog user_defined_type_code user_defined_type_name user_defined_type_schema vacuum valid validate validator value_of var_pop var_samp varbinary variable_conflict variadic verbose version versioning views volatile warning whitespace width_bucket window within wrapper xmlagg xmlattributes xmlbinary xmlcast xmlcomment xmlconcat xmldeclaration xmldocument xmlelement xmlexists xmlforest xmliterate xmlnamespaces xmlparse xmlpi xmlquery xmlroot xmlschema xmlserialize xmltable xmltext xmlvalidate yes`, types: P + `bigint int8 bigserial serial8 varbit bool box bytea cidr circle precision float8 inet int4 json jsonb line lseg macaddr macaddr8 money numeric pg_lsn point polygon float4 int2 smallserial serial2 serial serial4 text timetz timestamptz tsquery tsvector txid_snapshot uuid xml` }), Q = P + `bool blob long longblob longtext medium mediumblob mediumint mediumtext tinyblob tinyint tinytext text bigint int1 int2 int3 int4 int8 float4 float8 varbinary varcharacter precision datetime unsigned signed`, $ = `charset clear edit ego help nopager notee nowarning pager print prompt quit rehash source status system tee`, Me = J.define({ operatorChars: `*+-%<>!=&|^`, charSetCasts: true, doubleQuotedStrings: true, unquotedBitLiterals: true, hashComments: true, spaceAfterDashes: true, specialVar: `@?`, identifierQuotes: "`", keywords: F + `group_concat accessible algorithm analyze asensitive authors auto_increment autocommit avg avg_row_length binlog btree cache catalog_name chain change changed checkpoint checksum class_origin client_statistics coalesce code collations columns comment committed completion concurrent consistent contains contributors convert database databases day_hour day_microsecond day_minute day_second delay_key_write delayed delimiter des_key_file dev_pop dev_samp deviance directory disable discard distinctrow div dual dumpfile enable enclosed ends engine engines enum errors escaped even event events every explain extended fast field fields flush force found_rows fulltext grants handler hash high_priority hosts hour_microsecond hour_minute hour_second ignore ignore_server_ids import index index_statistics infile innodb insensitive insert_method install invoker iterate keys kill linear lines list load lock logs low_priority master master_heartbeat_period master_ssl_verify_server_cert masters max max_rows maxvalue message_text middleint migrate min min_rows minute_microsecond minute_second mod mode modify mutex mysql_errno no_write_to_binlog offline offset one online optimize optionally outfile pack_keys parser partition partitions password phase plugin plugins prev processlist profile profiles purge query quick range read_write rebuild recover regexp relaylog remove rename reorganize repair repeatable replace require resume rlike row_format rtree schedule schema_name schemas second_microsecond security sensitive separator serializable server share show slave slow snapshot soname spatial sql_big_result sql_buffer_result sql_cache sql_calc_found_rows sql_no_cache sql_small_result ssl starting starts std stddev stddev_pop stddev_samp storage straight_join subclass_origin sum suspend table_name table_statistics tables tablespace terminated triggers truncate uncommitted uninstall unlock upgrade use use_frm user_resources user_statistics utc_date utc_time utc_timestamp variables views warnings xa xor year_month zerofill`, types: Q, builtin: $ }), Ne = J.define({ operatorChars: `*+-%<>!=&|^`, charSetCasts: true, doubleQuotedStrings: true, unquotedBitLiterals: true, hashComments: true, spaceAfterDashes: true, specialVar: `@?`, identifierQuotes: "`", keywords: F + `always generated groupby_concat hard persistent shutdown soft virtual accessible algorithm analyze asensitive authors auto_increment autocommit avg avg_row_length binlog btree cache catalog_name chain change changed checkpoint checksum class_origin client_statistics coalesce code collations columns comment committed completion concurrent consistent contains contributors convert database databases day_hour day_microsecond day_minute day_second delay_key_write delayed delimiter des_key_file dev_pop dev_samp deviance directory disable discard distinctrow div dual dumpfile enable enclosed ends engine engines enum errors escaped even event events every explain extended fast field fields flush force found_rows fulltext grants handler hash high_priority hosts hour_microsecond hour_minute hour_second ignore ignore_server_ids import index index_statistics infile innodb insensitive insert_method install invoker iterate keys kill linear lines list load lock logs low_priority master master_heartbeat_period master_ssl_verify_server_cert masters max max_rows maxvalue message_text middleint migrate min min_rows minute_microsecond minute_second mod mode modify mutex mysql_errno no_write_to_binlog offline offset one online optimize optionally outfile pack_keys parser partition partitions password phase plugin plugins prev processlist profile profiles purge query quick range read_write rebuild recover regexp relaylog remove rename reorganize repair repeatable replace require resume rlike row_format rtree schedule schema_name schemas second_microsecond security sensitive separator serializable server share show slave slow snapshot soname spatial sql_big_result sql_buffer_result sql_cache sql_calc_found_rows sql_no_cache sql_small_result ssl starting starts std stddev stddev_pop stddev_samp storage straight_join subclass_origin sum suspend table_name table_statistics tables tablespace terminated triggers truncate uncommitted uninstall unlock upgrade use use_frm user_resources user_statistics utc_date utc_time utc_timestamp variables views warnings xa xor year_month zerofill`, types: Q, builtin: $ }), Pe = J.define({ keywords: F + `add external procedure all fetch public alter file raiserror and fillfactor read any for readtext as foreign reconfigure asc freetext references authorization freetexttable replication backup from restore begin full restrict between function return break goto revert browse grant revoke bulk group right by having rollback cascade holdlock rowcount case identity rowguidcol check identity_insert rule checkpoint identitycol save close if schema clustered in securityaudit coalesce index select collate inner semantickeyphrasetable column insert semanticsimilaritydetailstable commit intersect semanticsimilaritytable compute into session_user constraint is set contains join setuser containstable key shutdown continue kill some convert left statistics create like system_user cross lineno table current load tablesample current_date merge textsize current_time national then current_timestamp nocheck to current_user nonclustered top cursor not tran database null transaction dbcc nullif trigger deallocate of truncate declare off try_convert default offsets tsequal delete on union deny open unique desc opendatasource unpivot disk openquery update distinct openrowset updatetext distributed openxml use double option user drop or values dump order varying else outer view end over waitfor errlvl percent when escape pivot where except plan while exec precision with execute primary within group exists print writetext exit proc noexpand index forceseek forcescan holdlock nolock nowait paglock readcommitted readcommittedlock readpast readuncommitted repeatableread rowlock serializable snapshot spatial_window_max_cells tablock tablockx updlock xlock keepidentity keepdefaults ignore_constraints ignore_triggers`, types: P + `smalldatetime datetimeoffset datetime2 datetime bigint smallint smallmoney tinyint money real text nvarchar ntext varbinary image hierarchyid uniqueidentifier sql_variant xml`, builtin: `approx_count_distinct approx_percentile_cont approx_percentile_disc avg checksum_agg count count_big grouping grouping_id max min product stdev stdevp sum var varp ai_generate_embeddings ai_generate_chunks cume_dist first_value lag last_value lead percentile_cont percentile_disc percent_rank left_shift right_shift bit_count get_bit set_bit collationproperty tertiary_weights @@datefirst @@dbts @@langid @@language @@lock_timeout @@max_connections @@max_precision @@nestlevel @@options @@remserver @@servername @@servicename @@spid @@textsize @@version cast convert parse try_cast try_convert try_parse asymkey_id asymkeyproperty certproperty cert_id crypt_gen_random decryptbyasymkey decryptbycert decryptbykey decryptbykeyautoasymkey decryptbykeyautocert decryptbypassphrase encryptbyasymkey encryptbycert encryptbykey encryptbypassphrase hashbytes is_objectsigned key_guid key_id key_name signbyasymkey signbycert symkeyproperty verifysignedbycert verifysignedbyasymkey @@cursor_rows @@fetch_status cursor_status datalength ident_current ident_incr ident_seed identity sql_variant_property @@datefirst current_timestamp current_timezone current_timezone_id date_bucket dateadd datediff datediff_big datefromparts datename datepart datetime2fromparts datetimefromparts datetimeoffsetfromparts datetrunc day eomonth getdate getutcdate isdate month smalldatetimefromparts switchoffset sysdatetime sysdatetimeoffset sysutcdatetime timefromparts todatetimeoffset year edit_distance edit_distance_similarity jaro_winkler_distance jaro_winkler_similarity edge_id_from_parts graph_id_from_edge_id graph_id_from_node_id node_id_from_parts object_id_from_edge_id object_id_from_node_id json isjson json_array json_contains json_modify json_object json_path_exists json_query json_value regexp_like regexp_replace regexp_substr regexp_instr regexp_count regexp_matches regexp_split_to_table abs acos asin atan atn2 ceiling cos cot degrees exp floor log log10 pi power radians rand round sign sin sqrt square tan choose greatest iif least @@procid app_name applock_mode applock_test assemblyproperty col_length col_name columnproperty databasepropertyex db_id db_name file_id file_idex file_name filegroup_id filegroup_name filegroupproperty fileproperty filepropertyex fulltextcatalogproperty fulltextserviceproperty index_col indexkey_property indexproperty next value for object_definition object_id object_name object_schema_name objectproperty objectpropertyex original_db_name parsename schema_id schema_name scope_identity serverproperty stats_date type_id type_name typeproperty dense_rank ntile rank row_number publishingservername certenclosed certprivatekey current_user database_principal_id has_dbaccess has_perms_by_name is_member is_rolemember is_srvrolemember loginproperty original_login permissions pwdencrypt pwdcompare session_user sessionproperty suser_id suser_name suser_sid suser_sname system_user user user_id user_name ascii char charindex concat concat_ws difference format left len lower ltrim nchar patindex quotename replace replicate reverse right rtrim soundex space str string_agg string_escape stuff substring translate trim unicode upper $partition @@error @@identity @@pack_received @@rowcount @@trancount binary_checksum checksum compress connectionproperty context_info current_request_id current_transaction_id decompress error_line error_message error_number error_procedure error_severity error_state formatmessage get_filestream_transaction_context getansinull host_id host_name isnull isnumeric min_active_rowversion newid newsequentialid rowcount_big session_context xact_state @@connections @@cpu_busy @@idle @@io_busy @@pack_sent @@packet_errors @@timeticks @@total_errors @@total_read @@total_write textptr textvalid columns_updated eventdata trigger_nestlevel vector_distance vectorproperty vector_search generate_series opendatasource openjson openquery openrowset openxml predict string_split coalesce nullif apply catch filter force include keep keepfixed modify optimize parameterization parameters partition recompile sequence set`, operatorChars: `*+-%<>!=^&|/`, specialVar: `@`, identifierQuotes: `"[` }), Fe = J.define({ keywords: F + `abort analyze attach autoincrement conflict database detach exclusive fail glob ignore index indexed instead isnull notnull offset plan pragma query raise regexp reindex rename replace temp vacuum virtual`, types: P + `bool blob long longblob longtext medium mediumblob mediumint mediumtext tinyblob tinyint tinytext text bigint int2 int8 unsigned signed real`, builtin: `auth backup bail changes clone databases dbinfo dump echo eqp explain fullschema headers help import imposter indexes iotrace lint load log mode nullvalue once print prompt quit restore save scanstats separator shell show stats system tables testcase timeout timer trace vfsinfo vfslist vfsname width`, operatorChars: `*+-%<>!=&|/~`, identifierQuotes: '`"', specialVar: `@:?$` }), Ie = J.define({ keywords: `add all allow alter and any apply as asc authorize batch begin by clustering columnfamily compact consistency count create custom delete desc distinct drop each_quorum exists filtering from grant if in index insert into key keyspace keyspaces level limit local_one local_quorum modify nan norecursive nosuperuser not of on one order password permission permissions primary quorum rename revoke schema select set storage superuser table three to token truncate ttl two type unlogged update use user users using values where with writetime infinity NaN`, types: P + `ascii bigint blob counter frozen inet list map static text timeuuid tuple uuid varint`, slashComments: true }), Le = J.define({ keywords: F + `abort accept access add all alter and any arraylen as asc assert assign at attributes audit authorization avg base_table begin between binary_integer body by case cast char_base check close cluster clusters colauth column comment commit compress connected constant constraint crash create current currval cursor data_base database dba deallocate debugoff debugon declare default definition delay delete desc digits dispose distinct do drop else elseif elsif enable end entry exception exception_init exchange exclusive exists external fast fetch file for force form from function generic goto grant group having identified if immediate in increment index indexes indicator initial initrans insert interface intersect into is key level library like limited local lock log logging loop master maxextents maxtrans member minextents minus mislabel mode modify multiset new next no noaudit nocompress nologging noparallel not nowait number_base of off offline on online only option or order out package parallel partition pctfree pctincrease pctused pls_integer positive positiven pragma primary prior private privileges procedure public raise range raw rebuild record ref references refresh rename replace resource restrict return returning returns reverse revoke rollback row rowid rowlabel rownum rows run savepoint schema segment select separate set share snapshot some space split sql start statement storage subtype successful synonym tabauth table tables tablespace task terminate then to trigger truncate type union unique unlimited unrecoverable unusable update use using validate value values variable view views when whenever where while with work`, builtin: `appinfo arraysize autocommit autoprint autorecovery autotrace blockterminator break btitle cmdsep colsep compatibility compute concat copycommit copytypecheck define echo editfile embedded feedback flagger flush heading headsep instance linesize lno loboffset logsource longchunksize markup native newpage numformat numwidth pagesize pause pno recsep recsepchar repfooter repheader serveroutput shiftinout show showmode spool sqlblanklines sqlcase sqlcode sqlcontinue sqlnumber sqlpluscompatibility sqlprefix sqlprompt sqlterminator suffix tab term termout timing trimout trimspool ttitle underline verify version wrap`, types: P + `ascii bfile bfilename bigserial bit blob dec long number nvarchar nvarchar2 serial smallint string text uid varchar2 xml`, operatorChars: `*/+-%<>!=~`, doubleQuotedStrings: true, charSetCasts: true, plsqlQuotingMechanism: true });
export {
  Ie as Cassandra,
  Pe as MSSQL,
  Ne as MariaSQL,
  Me as MySQL,
  Le as PLSQL,
  je as PostgreSQL,
  J as SQLDialect,
  Fe as SQLite,
  Z as StandardSQL,
  Y as keywordCompletionSource,
  X as schemaCompletionSource,
  Ae as sql
};
