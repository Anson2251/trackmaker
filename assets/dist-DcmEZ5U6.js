import { A as e, C as t, I as n, M as r, N as i, et as a, n as o, p as s, r as c, s as l, t as u, u as d, y as f } from "./dist-CQp5Y4zm.js";
var p = 1, m = 2, h = 3, g = 4, _ = 5, v = 36, y = 37, b = 38, x = 11, S = 13;
function C(e2) {
  return e2 == 45 || e2 == 46 || e2 == 58 || e2 >= 65 && e2 <= 90 || e2 == 95 || e2 >= 97 && e2 <= 122 || e2 >= 161;
}
function w(e2) {
  return e2 == 9 || e2 == 10 || e2 == 13 || e2 == 32;
}
var T = null, E = null, D = 0;
function O(e2, t2) {
  let n2 = e2.pos + t2;
  if (E == e2 && D == n2) return T;
  for (; w(e2.peek(t2)); ) t2++;
  let r2 = ``;
  for (; ; ) {
    let n3 = e2.peek(t2);
    if (!C(n3)) break;
    r2 += String.fromCharCode(n3), t2++;
  }
  return E = e2, D = n2, T = r2 || null;
}
function k(e2, t2) {
  this.name = e2, this.parent = t2;
}
var A = new u({ start: null, shift(e2, t2, n2, r2) {
  return t2 == p ? new k(O(r2, 1) || ``, e2) : e2;
}, reduce(e2, t2) {
  return t2 == x && e2 ? e2.parent : e2;
}, reuse(e2, t2, n2, r2) {
  let i2 = t2.type.id;
  return i2 == p || i2 == S ? new k(O(r2, 1) || ``, e2) : e2;
}, strict: false }), j = new o((e2, t2) => {
  if (e2.next == 60) {
    if (e2.advance(), e2.next == 47) {
      e2.advance();
      let n2 = O(e2, 0);
      if (!n2) return e2.acceptToken(_);
      if (t2.context && n2 == t2.context.name) return e2.acceptToken(m);
      for (let r2 = t2.context; r2; r2 = r2.parent) if (r2.name == n2) return e2.acceptToken(h, -2);
      e2.acceptToken(g);
    } else if (e2.next != 33 && e2.next != 63) return e2.acceptToken(p);
  }
}, { contextual: true });
function M(e2, t2) {
  return new o((n2) => {
    let r2 = 0, i2 = t2.charCodeAt(0);
    scan: for (; !(n2.next < 0); n2.advance(), r2++) if (n2.next == i2) {
      for (let e3 = 1; e3 < t2.length; e3++) if (n2.peek(e3) != t2.charCodeAt(e3)) continue scan;
      break;
    }
    r2 && n2.acceptToken(e2);
  });
}
var N = M(v, `-->`), P = M(y, `?>`), F = M(b, `]]>`), I = r({ Text: i.content, "StartTag StartCloseTag EndTag SelfCloseEndTag": i.angleBracket, TagName: i.tagName, "MismatchedCloseTag/TagName": [i.tagName, i.invalid], AttributeName: i.attributeName, AttributeValue: i.attributeValue, Is: i.definitionOperator, "EntityReference CharacterReference": i.character, Comment: i.blockComment, ProcessingInst: i.processingInstruction, DoctypeDecl: i.documentMeta, Cdata: i.special(i.string) }), L = c.deserialize({ version: 14, states: ",lOQOaOOOrOxO'#CfOzOpO'#CiO!tOaO'#CgOOOP'#Cg'#CgO!{OrO'#CrO#TOtO'#CsO#]OpO'#CtOOOP'#DT'#DTOOOP'#Cv'#CvQQOaOOOOOW'#Cw'#CwO#eOxO,59QOOOP,59Q,59QOOOO'#Cx'#CxO#mOpO,59TO#uO!bO,59TOOOP'#C|'#C|O$TOaO,59RO$[OpO'#CoOOOP,59R,59ROOOQ'#C}'#C}O$dOrO,59^OOOP,59^,59^OOOS'#DO'#DOO$lOtO,59_OOOP,59_,59_O$tOpO,59`O$|OpO,59`OOOP-E6t-E6tOOOW-E6u-E6uOOOP1G.l1G.lOOOO-E6v-E6vO%UO!bO1G.oO%UO!bO1G.oO%dOpO'#CkO%lO!bO'#CyO%zO!bO1G.oOOOP1G.o1G.oOOOP1G.w1G.wOOOP-E6z-E6zOOOP1G.m1G.mO&VOpO,59ZO&_OpO,59ZOOOQ-E6{-E6{OOOP1G.x1G.xOOOS-E6|-E6|OOOP1G.y1G.yO&gOpO1G.zO&gOpO1G.zOOOP1G.z1G.zO&oO!bO7+$ZO&}O!bO7+$ZOOOP7+$Z7+$ZOOOP7+$c7+$cO'YOpO,59VO'bOpO,59VO'mO!bO,59eOOOO-E6w-E6wO'{OpO1G.uO'{OpO1G.uOOOP1G.u1G.uO(TOpO7+$fOOOP7+$f7+$fO(]O!bO<<GuOOOP<<Gu<<GuOOOP<<G}<<G}O'bOpO1G.qO'bOpO1G.qO(hO#tO'#CnO(vO&jO'#CnOOOO1G.q1G.qO)UOpO7+$aOOOP7+$a7+$aOOOP<<HQ<<HQOOOPAN=aAN=aOOOPAN=iAN=iO'bOpO7+$]OOOO7+$]7+$]OOOO'#Cz'#CzO)^O#tO,59YOOOO,59Y,59YOOOO'#C{'#C{O)lO&jO,59YOOOP<<G{<<G{OOOO<<Gw<<GwOOOO-E6x-E6xOOOO1G.t1G.tOOOO-E6y-E6y", stateData: ")z~OPQOSVOTWOVWOWWOXWOiXOyPO!QTO!SUO~OvZOx]O~O^`Oz^O~OPQOQcOSVOTWOVWOWWOXWOyPO!QTO!SUO~ORdO~P!SOteO!PgO~OuhO!RjO~O^lOz^O~OvZOxoO~O^qOz^O~O[vO`sOdwOz^O~ORyO~P!SO^{Oz^O~OteO!P}O~OuhO!R!PO~O^!QOz^O~O[!SOz^O~O[!VO`sOd!WOz^O~Oa!YOz^O~Oz^O[mX`mXdmX~O[!VO`sOd!WO~O^!]Oz^O~O[!_Oz^O~O[!aOz^O~O[!cO`sOd!dOz^O~O[!cO`sOd!dO~Oa!eOz^O~Oz^O{!gO}!hO~Oz^O[ma`madma~O[!kOz^O~O[!lOz^O~O[!mO`sOd!nO~OW!qOX!qO{!sO|!qO~OW!tOX!tO}!sO!O!tO~O[!vOz^O~OW!qOX!qO{!yO|!qO~OW!tOX!tO}!yO!O!tO~O", goto: "%cxPPPPPPPPPPyyP!PP!VPP!`!jP!pyyyP!v!|#S$[$k$q$w$}%TPPPP%ZXWORYbXRORYb_t`qru!T!U!bQ!i!YS!p!e!fR!w!oQdRRybXSORYbQYORmYQ[PRn[Q_QQkVjp_krz!R!T!X!Z!^!`!f!j!oQr`QzcQ!RlQ!TqQ!XsQ!ZtQ!^{Q!`!QQ!f!YQ!j!]R!o!eQu`S!UqrU![u!U!bR!b!TQ!r!gR!x!rQ!u!hR!z!uQbRRxbQfTR|fQiUR!OiSXOYTaRb", nodeNames: `\u26A0 StartTag StartCloseTag MissingCloseTag StartCloseTag StartCloseTag Document Text EntityReference CharacterReference Cdata Element EndTag OpenTag TagName Attribute AttributeName Is AttributeValue CloseTag SelfCloseEndTag SelfClosingTag Comment ProcessingInst MismatchedCloseTag DoctypeDecl`, maxTerm: 50, context: A, nodeProps: [[`closedBy`, 1, `SelfCloseEndTag EndTag`, 13, `CloseTag MissingCloseTag`], [`openedBy`, 12, `StartTag StartCloseTag`, 19, `OpenTag`, 20, `StartTag`], [`isolate`, -6, 13, 18, 19, 21, 22, 24, ``]], propSources: [I], skippedNodes: [0], repeatNodeCount: 9, tokenData: "!)v~R!YOX$qXY)iYZ)iZ]$q]^)i^p$qpq)iqr$qrs*vsv$qvw+fwx/ix}$q}!O0[!O!P$q!P!Q2z!Q![$q![!]4n!]!^$q!^!_8U!_!`!#t!`!a!$l!a!b!%d!b!c$q!c!}4n!}#P$q#P#Q!'W#Q#R$q#R#S4n#S#T$q#T#o4n#o%W$q%W%o4n%o%p$q%p&a4n&a&b$q&b1p4n1p4U$q4U4d4n4d4e$q4e$IS4n$IS$I`$q$I`$Ib4n$Ib$Kh$q$Kh%#t4n%#t&/x$q&/x&Et4n&Et&FV$q&FV;'S4n;'S;:j8O;:j;=`)c<%l?&r$q?&r?Ah4n?Ah?BY$q?BY?Mn4n?MnO$qi$zXVP|W!O`Or$qrs%gsv$qwx'^x!^$q!^!_(o!_;'S$q;'S;=`)c<%lO$qa%nVVP!O`Ov%gwx&Tx!^%g!^!_&o!_;'S%g;'S;=`'W<%lO%gP&YTVPOv&Tw!^&T!_;'S&T;'S;=`&i<%lO&TP&lP;=`<%l&T`&tS!O`Ov&ox;'S&o;'S;=`'Q<%lO&o`'TP;=`<%l&oa'ZP;=`<%l%gX'eWVP|WOr'^rs&Tsv'^w!^'^!^!_'}!_;'S'^;'S;=`(i<%lO'^W(ST|WOr'}sv'}w;'S'};'S;=`(c<%lO'}W(fP;=`<%l'}X(lP;=`<%l'^h(vV|W!O`Or(ors&osv(owx'}x;'S(o;'S;=`)]<%lO(oh)`P;=`<%l(oi)fP;=`<%l$qo)t`VP|W!O`zUOX$qXY)iYZ)iZ]$q]^)i^p$qpq)iqr$qrs%gsv$qwx'^x!^$q!^!_(o!_;'S$q;'S;=`)c<%lO$qk+PV{YVP!O`Ov%gwx&Tx!^%g!^!_&o!_;'S%g;'S;=`'W<%lO%g~+iast,n![!]-r!c!}-r#R#S-r#T#o-r%W%o-r%p&a-r&b1p-r4U4d-r4e$IS-r$I`$Ib-r$Kh%#t-r&/x&Et-r&FV;'S-r;'S;:j/c?&r?Ah-r?BY?Mn-r~,qQ!Q![,w#l#m-V~,zQ!Q![,w!]!^-Q~-VOX~~-YR!Q![-c!c!i-c#T#Z-c~-fS!Q![-c!]!^-Q!c!i-c#T#Z-c~-ug}!O-r!O!P-r!Q![-r![!]-r!]!^/^!c!}-r#R#S-r#T#o-r$}%O-r%W%o-r%p&a-r&b1p-r1p4U-r4U4d-r4e$IS-r$I`$Ib-r$Je$Jg-r$Kh%#t-r&/x&Et-r&FV;'S-r;'S;:j/c?&r?Ah-r?BY?Mn-r~/cOW~~/fP;=`<%l-rk/rW}bVP|WOr'^rs&Tsv'^w!^'^!^!_'}!_;'S'^;'S;=`(i<%lO'^k0eZVP|W!O`Or$qrs%gsv$qwx'^x}$q}!O1W!O!^$q!^!_(o!_;'S$q;'S;=`)c<%lO$qk1aZVP|W!O`Or$qrs%gsv$qwx'^x!^$q!^!_(o!_!`$q!`!a2S!a;'S$q;'S;=`)c<%lO$qk2_X!PQVP|W!O`Or$qrs%gsv$qwx'^x!^$q!^!_(o!_;'S$q;'S;=`)c<%lO$qm3TZVP|W!O`Or$qrs%gsv$qwx'^x!^$q!^!_(o!_!`$q!`!a3v!a;'S$q;'S;=`)c<%lO$qm4RXdSVP|W!O`Or$qrs%gsv$qwx'^x!^$q!^!_(o!_;'S$q;'S;=`)c<%lO$qo4{!P`S^QVP|W!O`Or$qrs%gsv$qwx'^x}$q}!O4n!O!P4n!P!Q$q!Q![4n![!]4n!]!^$q!^!_(o!_!c$q!c!}4n!}#R$q#R#S4n#S#T$q#T#o4n#o$}$q$}%O4n%O%W$q%W%o4n%o%p$q%p&a4n&a&b$q&b1p4n1p4U4n4U4d4n4d4e$q4e$IS4n$IS$I`$q$I`$Ib4n$Ib$Je$q$Je$Jg4n$Jg$Kh$q$Kh%#t4n%#t&/x$q&/x&Et4n&Et&FV$q&FV;'S4n;'S;:j8O;:j;=`)c<%l?&r$q?&r?Ah4n?Ah?BY$q?BY?Mn4n?MnO$qo8RP;=`<%l4ni8]Y|W!O`Oq(oqr8{rs&osv(owx'}x!a(o!a!b!#U!b;'S(o;'S;=`)]<%lO(oi9S_|W!O`Or(ors&osv(owx'}x}(o}!O:R!O!f(o!f!g;e!g!}(o!}#ODh#O#W(o#W#XLp#X;'S(o;'S;=`)]<%lO(oi:YX|W!O`Or(ors&osv(owx'}x}(o}!O:u!O;'S(o;'S;=`)]<%lO(oi;OV!QP|W!O`Or(ors&osv(owx'}x;'S(o;'S;=`)]<%lO(oi;lX|W!O`Or(ors&osv(owx'}x!q(o!q!r<X!r;'S(o;'S;=`)]<%lO(oi<`X|W!O`Or(ors&osv(owx'}x!e(o!e!f<{!f;'S(o;'S;=`)]<%lO(oi=SX|W!O`Or(ors&osv(owx'}x!v(o!v!w=o!w;'S(o;'S;=`)]<%lO(oi=vX|W!O`Or(ors&osv(owx'}x!{(o!{!|>c!|;'S(o;'S;=`)]<%lO(oi>jX|W!O`Or(ors&osv(owx'}x!r(o!r!s?V!s;'S(o;'S;=`)]<%lO(oi?^X|W!O`Or(ors&osv(owx'}x!g(o!g!h?y!h;'S(o;'S;=`)]<%lO(oi@QY|W!O`Or?yrs@psv?yvwA[wxBdx!`?y!`!aCr!a;'S?y;'S;=`Db<%lO?ya@uV!O`Ov@pvxA[x!`@p!`!aAy!a;'S@p;'S;=`B^<%lO@pPA_TO!`A[!`!aAn!a;'SA[;'S;=`As<%lOA[PAsOiPPAvP;=`<%lA[aBQSiP!O`Ov&ox;'S&o;'S;=`'Q<%lO&oaBaP;=`<%l@pXBiX|WOrBdrsA[svBdvwA[w!`Bd!`!aCU!a;'SBd;'S;=`Cl<%lOBdXC]TiP|WOr'}sv'}w;'S'};'S;=`(c<%lO'}XCoP;=`<%lBdiC{ViP|W!O`Or(ors&osv(owx'}x;'S(o;'S;=`)]<%lO(oiDeP;=`<%l?yiDoZ|W!O`Or(ors&osv(owx'}x!e(o!e!fEb!f#V(o#V#WIr#W;'S(o;'S;=`)]<%lO(oiEiX|W!O`Or(ors&osv(owx'}x!f(o!f!gFU!g;'S(o;'S;=`)]<%lO(oiF]X|W!O`Or(ors&osv(owx'}x!c(o!c!dFx!d;'S(o;'S;=`)]<%lO(oiGPX|W!O`Or(ors&osv(owx'}x!v(o!v!wGl!w;'S(o;'S;=`)]<%lO(oiGsX|W!O`Or(ors&osv(owx'}x!c(o!c!dH`!d;'S(o;'S;=`)]<%lO(oiHgX|W!O`Or(ors&osv(owx'}x!}(o!}#OIS#O;'S(o;'S;=`)]<%lO(oiI]V|W!O`yPOr(ors&osv(owx'}x;'S(o;'S;=`)]<%lO(oiIyX|W!O`Or(ors&osv(owx'}x#W(o#W#XJf#X;'S(o;'S;=`)]<%lO(oiJmX|W!O`Or(ors&osv(owx'}x#T(o#T#UKY#U;'S(o;'S;=`)]<%lO(oiKaX|W!O`Or(ors&osv(owx'}x#h(o#h#iK|#i;'S(o;'S;=`)]<%lO(oiLTX|W!O`Or(ors&osv(owx'}x#T(o#T#UH`#U;'S(o;'S;=`)]<%lO(oiLwX|W!O`Or(ors&osv(owx'}x#c(o#c#dMd#d;'S(o;'S;=`)]<%lO(oiMkX|W!O`Or(ors&osv(owx'}x#V(o#V#WNW#W;'S(o;'S;=`)]<%lO(oiN_X|W!O`Or(ors&osv(owx'}x#h(o#h#iNz#i;'S(o;'S;=`)]<%lO(oi! RX|W!O`Or(ors&osv(owx'}x#m(o#m#n! n#n;'S(o;'S;=`)]<%lO(oi! uX|W!O`Or(ors&osv(owx'}x#d(o#d#e!!b#e;'S(o;'S;=`)]<%lO(oi!!iX|W!O`Or(ors&osv(owx'}x#X(o#X#Y?y#Y;'S(o;'S;=`)]<%lO(oi!#_V!SP|W!O`Or(ors&osv(owx'}x;'S(o;'S;=`)]<%lO(ok!$PXaQVP|W!O`Or$qrs%gsv$qwx'^x!^$q!^!_(o!_;'S$q;'S;=`)c<%lO$qo!$wX[UVP|W!O`Or$qrs%gsv$qwx'^x!^$q!^!_(o!_;'S$q;'S;=`)c<%lO$qk!%mZVP|W!O`Or$qrs%gsv$qwx'^x!^$q!^!_(o!_!`$q!`!a!&`!a;'S$q;'S;=`)c<%lO$qk!&kX!RQVP|W!O`Or$qrs%gsv$qwx'^x!^$q!^!_(o!_;'S$q;'S;=`)c<%lO$qk!'aZVP|W!O`Or$qrs%gsv$qwx'^x!^$q!^!_(o!_#P$q#P#Q!(S#Q;'S$q;'S;=`)c<%lO$qk!(]ZVP|W!O`Or$qrs%gsv$qwx'^x!^$q!^!_(o!_!`$q!`!a!)O!a;'S$q;'S;=`)c<%lO$qk!)ZXxQVP|W!O`Or$qrs%gsv$qwx'^x!^$q!^!_(o!_;'S$q;'S;=`)c<%lO$q", tokenizers: [j, N, P, F, 0, 1, 2, 3, 4], topRules: { Document: [0, 6] }, tokenPrec: 0 });
function R(e2, t2) {
  let n2 = t2 && t2.getChild(`TagName`);
  return n2 ? e2.sliceString(n2.from, n2.to) : ``;
}
function z(e2, t2) {
  let n2 = t2 && t2.firstChild;
  return !n2 || n2.name != `OpenTag` ? `` : R(e2, n2);
}
function B(e2, t2, n2) {
  let r2 = t2 && t2.getChildren(`Attribute`).find((e3) => e3.from <= n2 && e3.to >= n2), i2 = r2 && r2.getChild(`AttributeName`);
  return i2 ? e2.sliceString(i2.from, i2.to) : ``;
}
function V(e2) {
  for (let t2 = e2 && e2.parent; t2; t2 = t2.parent) if (t2.name == `Element`) return t2;
  return null;
}
function H(t2, n2) {
  var _a;
  let r2 = e(t2).resolveInner(n2, -1), i2 = null;
  for (let e2 = r2; !i2 && e2.parent; e2 = e2.parent) (e2.name == `OpenTag` || e2.name == `CloseTag` || e2.name == `SelfClosingTag` || e2.name == `MismatchedCloseTag`) && (i2 = e2);
  if (i2 && (i2.to > n2 || i2.lastChild.type.isError)) {
    let e2 = i2.parent;
    if (r2.name == `TagName`) return i2.name == `CloseTag` || i2.name == `MismatchedCloseTag` ? { type: `closeTag`, from: r2.from, context: e2 } : { type: `openTag`, from: r2.from, context: V(e2) };
    if (r2.name == `AttributeName`) return { type: `attrName`, from: r2.from, context: i2 };
    if (r2.name == `AttributeValue`) return { type: `attrValue`, from: r2.from, context: i2 };
    let t3 = r2 == i2 || r2.name == `Attribute` ? r2.childBefore(n2) : r2;
    return (t3 == null ? void 0 : t3.name) == `StartTag` ? { type: `openTag`, from: n2, context: V(e2) } : (t3 == null ? void 0 : t3.name) == `StartCloseTag` && t3.to <= n2 ? { type: `closeTag`, from: n2, context: e2 } : (t3 == null ? void 0 : t3.name) == `Is` ? { type: `attrValue`, from: n2, context: i2 } : t3 ? { type: `attrName`, from: n2, context: i2 } : null;
  } else if (r2.name == `StartCloseTag`) return { type: `closeTag`, from: n2, context: r2.parent };
  for (; r2.parent && r2.to == n2 && !((_a = r2.lastChild) == null ? void 0 : _a.type.isError); ) r2 = r2.parent;
  return r2.name == `Element` || r2.name == `Text` || r2.name == `Document` ? { type: `tag`, from: n2, context: r2.name == `Element` ? r2 : V(r2) } : null;
}
var U = class {
  constructor(e2, t2, n2) {
    this.attrs = t2, this.attrValues = n2, this.children = [], this.name = e2.name, this.completion = Object.assign(Object.assign({ type: `type` }, e2.completion || {}), { label: this.name }), this.openCompletion = Object.assign(Object.assign({}, this.completion), { label: `<` + this.name }), this.closeCompletion = Object.assign(Object.assign({}, this.completion), { label: `</` + this.name + `>`, boost: 2 }), this.closeNameCompletion = Object.assign(Object.assign({}, this.completion), { label: this.name + `>` }), this.text = e2.textContent ? e2.textContent.map((e3) => ({ label: e3, type: `text` })) : [];
  }
}, W = /^[:\-\.\w\u00b7-\uffff]*$/;
function G(e2) {
  return Object.assign(Object.assign({ type: `property` }, e2.completion || {}), { label: e2.name });
}
function K(e2) {
  return typeof e2 == `string` ? { label: `"${e2}"`, type: `constant` } : /^"/.test(e2.label) ? e2 : Object.assign(Object.assign({}, e2), { label: `"${e2.label}"` });
}
function q(e2, t2) {
  let n2 = [], r2 = [], i2 = /* @__PURE__ */ Object.create(null);
  for (let e3 of t2) {
    let t3 = G(e3);
    n2.push(t3), e3.global && r2.push(t3), e3.values && (i2[e3.name] = e3.values.map(K));
  }
  let a2 = [], o2 = [], s2 = /* @__PURE__ */ Object.create(null);
  for (let t3 of e2) {
    let e3 = r2, c2 = i2;
    t3.attributes && (e3 = e3.concat(t3.attributes.map((e4) => typeof e4 == `string` ? n2.find((t4) => t4.label == e4) || { label: e4, type: `property` } : (e4.values && (c2 == i2 && (c2 = Object.create(c2)), c2[e4.name] = e4.values.map(K)), G(e4)))));
    let l2 = new U(t3, e3, c2);
    s2[l2.name] = l2, a2.push(l2), t3.top && o2.push(l2);
  }
  o2.length || (o2 = a2);
  for (let t3 = 0; t3 < a2.length; t3++) {
    let n3 = e2[t3], r3 = a2[t3];
    if (n3.children) for (let e3 of n3.children) s2[e3] && r3.children.push(s2[e3]);
    else r3.children = a2;
  }
  return (e3) => {
    var _a, _b, _c, _d;
    let { doc: t3 } = e3.state, n3 = H(e3.state, e3.pos);
    if (!n3 || n3.type == `tag` && !e3.explicit) return null;
    let { type: c2, from: l2, context: u2 } = n3;
    if (c2 == `openTag`) {
      let e4 = o2, n4 = z(t3, u2);
      return n4 && (e4 = ((_a = s2[n4]) == null ? void 0 : _a.children) || a2), { from: l2, options: e4.map((e5) => e5.completion), validFor: W };
    } else if (c2 == `closeTag`) {
      let n4 = z(t3, u2);
      return n4 ? { from: l2, to: e3.pos + (t3.sliceString(e3.pos, e3.pos + 1) == `>` ? 1 : 0), options: [((_b = s2[n4]) == null ? void 0 : _b.closeNameCompletion) || { label: n4 + `>`, type: `type` }], validFor: W } : null;
    } else if (c2 == `attrName`) return { from: l2, options: ((_c = s2[R(t3, u2)]) == null ? void 0 : _c.attrs) || r2, validFor: W };
    else if (c2 == `attrValue`) {
      let n4 = B(t3, u2, l2);
      if (!n4) return null;
      let r3 = (((_d = s2[R(t3, u2)]) == null ? void 0 : _d.attrValues) || i2)[n4];
      return !r3 || !r3.length ? null : { from: l2, to: e3.pos + (t3.sliceString(e3.pos, e3.pos + 1) == `"` ? 1 : 0), options: r3, validFor: /^"[^"]*"?$/ };
    } else if (c2 == `tag`) {
      let n4 = z(t3, u2), r3 = s2[n4], i3 = [], c3 = u2 && u2.lastChild;
      n4 && (!c3 || c3.name != `CloseTag` || R(t3, c3) != n4) && i3.push(r3 ? r3.closeCompletion : { label: `</` + n4 + `>`, type: `type`, boost: 2 });
      let d2 = i3.concat(((r3 == null ? void 0 : r3.children) || (u2 ? a2 : o2)).map((e4) => e4.openCompletion));
      if (u2 && (r3 == null ? void 0 : r3.text.length)) {
        let t4 = u2.firstChild;
        t4.to > e3.pos - 20 && !/\S/.test(e3.state.sliceDoc(t4.to, e3.pos)) && (d2 = d2.concat(r3.text));
      }
      return { from: l2, options: d2, validFor: /^<\/?[:\-\.\w\u00b7-\uffff]*$/ };
    } else return null;
  };
}
var J = l.define({ name: `xml`, parser: L.configure({ props: [t.add({ Element(e2) {
  let t2 = /^\s*<\//.test(e2.textAfter);
  return e2.lineIndent(e2.node.from) + (t2 ? 0 : e2.unit);
}, "OpenTag CloseTag SelfClosingTag"(e2) {
  return e2.column(e2.node.from) + e2.unit;
} }), f.add({ Element(e2) {
  let t2 = e2.firstChild, n2 = e2.lastChild;
  return !t2 || t2.name != `OpenTag` ? null : { from: t2.to, to: n2.name == `CloseTag` ? n2.from : e2.to };
} }), s.add({ "OpenTag CloseTag": (e2) => e2.getChild(`TagName`) })] }), languageData: { commentTokens: { block: { open: `<!--`, close: `-->` } }, indentOnInput: /^\s*<\/$/ } });
function Y(e2 = {}) {
  let t2 = [J.data.of({ autocomplete: q(e2.elements || [], e2.attributes || []) })];
  return e2.autoCloseTags !== false && t2.push(Z), new d(J, t2);
}
function X(e2, t2, n2 = e2.length) {
  if (!t2) return ``;
  let r2 = t2.firstChild, i2 = r2 && r2.getChild(`TagName`);
  return i2 ? e2.sliceString(i2.from, Math.min(i2.to, n2)) : ``;
}
var Z = n.inputHandler.of((t2, n2, r2, i2, o2) => {
  if (t2.composing || t2.state.readOnly || n2 != r2 || i2 != `>` && i2 != `/` || !J.isActiveAt(t2.state, n2, -1)) return false;
  let s2 = o2(), { state: c2 } = s2, l2 = c2.changeByRange((t3) => {
    var _a, _b, _c;
    let { head: n3 } = t3, r3 = c2.doc.sliceString(n3 - 1, n3) == i2, o3 = e(c2).resolveInner(n3, -1), s3;
    if (r3 && i2 == `>` && o3.name == `EndTag`) {
      let e2 = o3.parent;
      if (((_b = (_a = e2.parent) == null ? void 0 : _a.lastChild) == null ? void 0 : _b.name) != `CloseTag` && (s3 = X(c2.doc, e2.parent, n3))) return { range: t3, changes: { from: n3, to: n3 + (c2.doc.sliceString(n3, n3 + 1) === `>` ? 1 : 0), insert: `</${s3}>` } };
    } else if (r3 && i2 == `/` && o3.name == `StartCloseTag`) {
      let e2 = o3.parent;
      if (o3.from == n3 - 2 && ((_c = e2.lastChild) == null ? void 0 : _c.name) != `CloseTag` && (s3 = X(c2.doc, e2, n3))) {
        let e3 = n3 + (c2.doc.sliceString(n3, n3 + 1) === `>` ? 1 : 0), t4 = `${s3}>`;
        return { range: a.cursor(n3 + t4.length, -1), changes: { from: n3, to: e3, insert: t4 } };
      }
    }
    return { range: t3 };
  });
  return l2.changes.empty ? false : (t2.dispatch([s2, c2.update(l2, { userEvent: `input.complete`, scrollIntoView: true })]), true);
});
export {
  Z as autoCloseTags,
  q as completeFromSchema,
  Y as xml,
  J as xmlLanguage
};
