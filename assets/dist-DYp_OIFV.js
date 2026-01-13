import { A as e, C as t, I as n, M as r, N as i, et as a, n as o, p as s, r as c, s as l, t as ee, u as te, wt as ne, y as re } from "./dist-CQp5Y4zm.js";
import { r as u, t as ie } from "./dist-CjAScDBv.js";
import { a as d, d as ae, i as oe, o as se, u as ce } from "./dist-Doi9LDAp.js";
var le = 55, ue = 1, de = 56, fe = 2, pe = 57, me = 3, f = 4, he = 5, p = 6, ge = 7, m = 8, h = 9, g = 10, _e = 11, ve = 12, ye = 13, _ = 58, be = 14, xe = 15, v = 59, y = 21, Se = 23, b = 24, Ce = 25, x = 27, S = 28, we = 29, Te = 32, Ee = 35, De = 37, Oe = 38, ke = 0, Ae = 1, je = { area: true, base: true, br: true, col: true, command: true, embed: true, frame: true, hr: true, img: true, input: true, keygen: true, link: true, meta: true, param: true, source: true, track: true, wbr: true, menuitem: true }, Me = { dd: true, li: true, optgroup: true, option: true, p: true, rp: true, rt: true, tbody: true, td: true, tfoot: true, th: true, tr: true }, C = { dd: { dd: true, dt: true }, dt: { dd: true, dt: true }, li: { li: true }, option: { option: true, optgroup: true }, optgroup: { optgroup: true }, p: { address: true, article: true, aside: true, blockquote: true, dir: true, div: true, dl: true, fieldset: true, footer: true, form: true, h1: true, h2: true, h3: true, h4: true, h5: true, h6: true, header: true, hgroup: true, hr: true, menu: true, nav: true, ol: true, p: true, pre: true, section: true, table: true, ul: true }, rp: { rp: true, rt: true }, rt: { rp: true, rt: true }, tbody: { tbody: true, tfoot: true }, td: { td: true, th: true }, tfoot: { tbody: true }, th: { td: true, th: true }, thead: { tbody: true, tfoot: true }, tr: { tr: true } };
function Ne(e2) {
  return e2 == 45 || e2 == 46 || e2 == 58 || e2 >= 65 && e2 <= 90 || e2 == 95 || e2 >= 97 && e2 <= 122 || e2 >= 161;
}
var w = null, T = null, E = 0;
function D(e2, t2) {
  let n2 = e2.pos + t2;
  if (E == n2 && T == e2) return w;
  let r2 = e2.peek(t2), i2 = ``;
  for (; Ne(r2); ) i2 += String.fromCharCode(r2), r2 = e2.peek(++t2);
  return T = e2, E = n2, w = i2 ? i2.toLowerCase() : r2 == Pe || r2 == Fe ? void 0 : null;
}
var O = 60, k = 62, A = 47, Pe = 63, Fe = 33, Ie = 45;
function j(e2, t2) {
  this.name = e2, this.parent = t2;
}
var Le = [p, g, ge, m, h], Re = new ee({ start: null, shift(e2, t2, n2, r2) {
  return Le.indexOf(t2) > -1 ? new j(D(r2, 1) || ``, e2) : e2;
}, reduce(e2, t2) {
  return t2 == y && e2 ? e2.parent : e2;
}, reuse(e2, t2, n2, r2) {
  let i2 = t2.type.id;
  return i2 == p || i2 == De ? new j(D(r2, 1) || ``, e2) : e2;
}, strict: false }), ze = new o((e2, t2) => {
  if (e2.next != O) {
    e2.next < 0 && t2.context && e2.acceptToken(_);
    return;
  }
  e2.advance();
  let n2 = e2.next == A;
  n2 && e2.advance();
  let r2 = D(e2, 0);
  if (r2 === void 0) return;
  if (!r2) return e2.acceptToken(n2 ? xe : be);
  let i2 = t2.context ? t2.context.name : null;
  if (n2) {
    if (r2 == i2) return e2.acceptToken(_e);
    if (i2 && Me[i2]) return e2.acceptToken(_, -2);
    if (t2.dialectEnabled(ke)) return e2.acceptToken(ve);
    for (let e3 = t2.context; e3; e3 = e3.parent) if (e3.name == r2) return;
    e2.acceptToken(ye);
  } else {
    if (r2 == `script`) return e2.acceptToken(ge);
    if (r2 == `style`) return e2.acceptToken(m);
    if (r2 == `textarea`) return e2.acceptToken(h);
    if (je.hasOwnProperty(r2)) return e2.acceptToken(g);
    i2 && C[i2] && C[i2][r2] ? e2.acceptToken(_, -1) : e2.acceptToken(p);
  }
}, { contextual: true }), Be = new o((e2) => {
  for (let t2 = 0, n2 = 0; ; n2++) {
    if (e2.next < 0) {
      n2 && e2.acceptToken(v);
      break;
    }
    if (e2.next == Ie) t2++;
    else if (e2.next == k && t2 >= 2) {
      n2 >= 3 && e2.acceptToken(v, -2);
      break;
    } else t2 = 0;
    e2.advance();
  }
});
function Ve(e2) {
  for (; e2; e2 = e2.parent) if (e2.name == `svg` || e2.name == `math`) return true;
  return false;
}
var He = new o((e2, t2) => {
  if (e2.next == A && e2.peek(1) == k) {
    let n2 = t2.dialectEnabled(Ae) || Ve(t2.context);
    e2.acceptToken(n2 ? he : f, 2);
  } else e2.next == k && e2.acceptToken(f, 1);
});
function M(e2, t2, n2) {
  let r2 = 2 + e2.length;
  return new o((i2) => {
    for (let a2 = 0, o2 = 0, s2 = 0; ; s2++) {
      if (i2.next < 0) {
        s2 && i2.acceptToken(t2);
        break;
      }
      if (a2 == 0 && i2.next == O || a2 == 1 && i2.next == A || a2 >= 2 && a2 < r2 && i2.next == e2.charCodeAt(a2 - 2)) a2++, o2++;
      else if (a2 == r2 && i2.next == k) {
        s2 > o2 ? i2.acceptToken(t2, -o2) : i2.acceptToken(n2, -(o2 - 2));
        break;
      } else if ((i2.next == 10 || i2.next == 13) && s2) {
        i2.acceptToken(t2, 1);
        break;
      } else a2 = o2 = 0;
      i2.advance();
    }
  });
}
var Ue = M(`script`, le, ue), We = M(`style`, de, fe), Ge = M(`textarea`, pe, me), Ke = r({ "Text RawText IncompleteTag IncompleteCloseTag": i.content, "StartTag StartCloseTag SelfClosingEndTag EndTag": i.angleBracket, TagName: i.tagName, "MismatchedCloseTag/TagName": [i.tagName, i.invalid], AttributeName: i.attributeName, "AttributeValue UnquotedAttributeValue": i.attributeValue, Is: i.definitionOperator, "EntityReference CharacterReference": i.character, Comment: i.blockComment, ProcessingInst: i.processingInstruction, DoctypeDecl: i.documentMeta }), qe = c.deserialize({ version: 14, states: ",xOVO!rOOO!ZQ#tO'#CrO!`Q#tO'#C{O!eQ#tO'#DOO!jQ#tO'#DRO!oQ#tO'#DTO!tOaO'#CqO#PObO'#CqO#[OdO'#CqO$kO!rO'#CqOOO`'#Cq'#CqO$rO$fO'#DUO$zQ#tO'#DWO%PQ#tO'#DXOOO`'#Dl'#DlOOO`'#DZ'#DZQVO!rOOO%UQ&rO,59^O%aQ&rO,59gO%lQ&rO,59jO%wQ&rO,59mO&SQ&rO,59oOOOa'#D_'#D_O&_OaO'#CyO&jOaO,59]OOOb'#D`'#D`O&rObO'#C|O&}ObO,59]OOOd'#Da'#DaO'VOdO'#DPO'bOdO,59]OOO`'#Db'#DbO'jO!rO,59]O'qQ#tO'#DSOOO`,59],59]OOOp'#Dc'#DcO'vO$fO,59pOOO`,59p,59pO(OQ#|O,59rO(TQ#|O,59sOOO`-E7X-E7XO(YQ&rO'#CtOOQW'#D['#D[O(hQ&rO1G.xOOOa1G.x1G.xOOO`1G/Z1G/ZO(sQ&rO1G/ROOOb1G/R1G/RO)OQ&rO1G/UOOOd1G/U1G/UO)ZQ&rO1G/XOOO`1G/X1G/XO)fQ&rO1G/ZOOOa-E7]-E7]O)qQ#tO'#CzOOO`1G.w1G.wOOOb-E7^-E7^O)vQ#tO'#C}OOOd-E7_-E7_O){Q#tO'#DQOOO`-E7`-E7`O*QQ#|O,59nOOOp-E7a-E7aOOO`1G/[1G/[OOO`1G/^1G/^OOO`1G/_1G/_O*VQ,UO,59`OOQW-E7Y-E7YOOOa7+$d7+$dOOO`7+$u7+$uOOOb7+$m7+$mOOOd7+$p7+$pOOO`7+$s7+$sO*bQ#|O,59fO*gQ#|O,59iO*lQ#|O,59lOOO`1G/Y1G/YO*qO7[O'#CwO+SOMhO'#CwOOQW1G.z1G.zOOO`1G/Q1G/QOOO`1G/T1G/TOOO`1G/W1G/WOOOO'#D]'#D]O+eO7[O,59cOOQW,59c,59cOOOO'#D^'#D^O+vOMhO,59cOOOO-E7Z-E7ZOOQW1G.}1G.}OOOO-E7[-E7[", stateData: `,c~O!_OS~OUSOVPOWQOXROYTO[]O][O^^O_^Oa^Ob^Oc^Od^Oy^O|_O!eZO~OgaO~OgbO~OgcO~OgdO~OgeO~O!XfOPmP![mP~O!YiOQpP![pP~O!ZlORsP![sP~OUSOVPOWQOXROYTOZqO[]O][O^^O_^Oa^Ob^Oc^Od^Oy^O!eZO~O![rO~P#gO!]sO!fuO~OgvO~OgwO~OS|OT}OiyO~OS!POT}OiyO~OS!ROT}OiyO~OS!TOT}OiyO~OS}OT}OiyO~O!XfOPmX![mX~OP!WO![!XO~O!YiOQpX![pX~OQ!ZO![!XO~O!ZlORsX![sX~OR!]O![!XO~O![!XO~P#gOg!_O~O!]sO!f!aO~OS!bO~OS!cO~Oj!dOShXThXihX~OS!fOT!gOiyO~OS!hOT!gOiyO~OS!iOT!gOiyO~OS!jOT!gOiyO~OS!gOT!gOiyO~Og!kO~Og!lO~Og!mO~OS!nO~Ol!qO!a!oO!c!pO~OS!rO~OS!sO~OS!tO~Ob!uOc!uOd!uO!a!wO!b!uO~Ob!xOc!xOd!xO!c!wO!d!xO~Ob!uOc!uOd!uO!a!{O!b!uO~Ob!xOc!xOd!xO!c!{O!d!xO~OT~cbd!ey|!e~`, goto: "%q!aPPPPPPPPPPPPPPPPPPPPP!b!hP!nPP!zP!}#Q#T#Z#^#a#g#j#m#s#y!bP!b!bP$P$V$m$s$y%P%V%]%cPPPPPPPP%iX^OX`pXUOX`pezabcde{!O!Q!S!UR!q!dRhUR!XhXVOX`pRkVR!XkXWOX`pRnWR!XnXXOX`pQrXR!XpXYOX`pQ`ORx`Q{aQ!ObQ!QcQ!SdQ!UeZ!e{!O!Q!S!UQ!v!oR!z!vQ!y!pR!|!yQgUR!VgQjVR!YjQmWR![mQpXR!^pQtZR!`tS_O`ToXp", nodeNames: `\u26A0 StartCloseTag StartCloseTag StartCloseTag EndTag SelfClosingEndTag StartTag StartTag StartTag StartTag StartTag StartCloseTag StartCloseTag StartCloseTag IncompleteTag IncompleteCloseTag Document Text EntityReference CharacterReference InvalidEntity Element OpenTag TagName Attribute AttributeName Is AttributeValue UnquotedAttributeValue ScriptText CloseTag OpenTag StyleText CloseTag OpenTag TextareaText CloseTag OpenTag CloseTag SelfClosingTag Comment ProcessingInst MismatchedCloseTag CloseTag DoctypeDecl`, maxTerm: 68, context: Re, nodeProps: [[`closedBy`, -10, 1, 2, 3, 7, 8, 9, 10, 11, 12, 13, `EndTag`, 6, `EndTag SelfClosingEndTag`, -4, 22, 31, 34, 37, `CloseTag`], [`openedBy`, 4, `StartTag StartCloseTag`, 5, `StartTag`, -4, 30, 33, 36, 38, `OpenTag`], [`group`, -10, 14, 15, 18, 19, 20, 21, 40, 41, 42, 43, `Entity`, 17, `Entity TextContent`, -3, 29, 32, 35, `TextContent Entity`], [`isolate`, -11, 22, 30, 31, 33, 34, 36, 37, 38, 39, 42, 43, `ltr`, -3, 27, 28, 40, ``]], propSources: [Ke], skippedNodes: [0], repeatNodeCount: 9, tokenData: "!<p!aR!YOX$qXY,QYZ,QZ[$q[]&X]^,Q^p$qpq,Qqr-_rs3_sv-_vw3}wxHYx}-_}!OH{!O!P-_!P!Q$q!Q![-_![!]Mz!]!^-_!^!_!$S!_!`!;x!`!a&X!a!c-_!c!}Mz!}#R-_#R#SMz#S#T1k#T#oMz#o#s-_#s$f$q$f%W-_%W%oMz%o%p-_%p&aMz&a&b-_&b1pMz1p4U-_4U4dMz4d4e-_4e$ISMz$IS$I`-_$I`$IbMz$Ib$Kh-_$Kh%#tMz%#t&/x-_&/x&EtMz&Et&FV-_&FV;'SMz;'S;:j!#|;:j;=`3X<%l?&r-_?&r?AhMz?Ah?BY$q?BY?MnMz?MnO$q!Z$|caPlW!b`!dpOX$qXZ&XZ[$q[^&X^p$qpq&Xqr$qrs&}sv$qvw+Pwx(tx!^$q!^!_*V!_!a&X!a#S$q#S#T&X#T;'S$q;'S;=`+z<%lO$q!R&bXaP!b`!dpOr&Xrs&}sv&Xwx(tx!^&X!^!_*V!_;'S&X;'S;=`*y<%lO&Xq'UVaP!dpOv&}wx'kx!^&}!^!_(V!_;'S&};'S;=`(n<%lO&}P'pTaPOv'kw!^'k!_;'S'k;'S;=`(P<%lO'kP(SP;=`<%l'kp([S!dpOv(Vx;'S(V;'S;=`(h<%lO(Vp(kP;=`<%l(Vq(qP;=`<%l&}a({WaP!b`Or(trs'ksv(tw!^(t!^!_)e!_;'S(t;'S;=`*P<%lO(t`)jT!b`Or)esv)ew;'S)e;'S;=`)y<%lO)e`)|P;=`<%l)ea*SP;=`<%l(t!Q*^V!b`!dpOr*Vrs(Vsv*Vwx)ex;'S*V;'S;=`*s<%lO*V!Q*vP;=`<%l*V!R*|P;=`<%l&XW+UYlWOX+PZ[+P^p+Pqr+Psw+Px!^+P!a#S+P#T;'S+P;'S;=`+t<%lO+PW+wP;=`<%l+P!Z+}P;=`<%l$q!a,]`aP!b`!dp!_^OX&XXY,QYZ,QZ]&X]^,Q^p&Xpq,Qqr&Xrs&}sv&Xwx(tx!^&X!^!_*V!_;'S&X;'S;=`*y<%lO&X!_-ljiSaPlW!b`!dpOX$qXZ&XZ[$q[^&X^p$qpq&Xqr-_rs&}sv-_vw/^wx(tx!P-_!P!Q$q!Q!^-_!^!_*V!_!a&X!a#S-_#S#T1k#T#s-_#s$f$q$f;'S-_;'S;=`3X<%l?Ah-_?Ah?BY$q?BY?Mn-_?MnO$q[/ebiSlWOX+PZ[+P^p+Pqr/^sw/^x!P/^!P!Q+P!Q!^/^!a#S/^#S#T0m#T#s/^#s$f+P$f;'S/^;'S;=`1e<%l?Ah/^?Ah?BY+P?BY?Mn/^?MnO+PS0rXiSqr0msw0mx!P0m!Q!^0m!a#s0m$f;'S0m;'S;=`1_<%l?Ah0m?BY?Mn0mS1bP;=`<%l0m[1hP;=`<%l/^!V1vciSaP!b`!dpOq&Xqr1krs&}sv1kvw0mwx(tx!P1k!P!Q&X!Q!^1k!^!_*V!_!a&X!a#s1k#s$f&X$f;'S1k;'S;=`3R<%l?Ah1k?Ah?BY&X?BY?Mn1k?MnO&X!V3UP;=`<%l1k!_3[P;=`<%l-_!Z3hV!ahaP!dpOv&}wx'kx!^&}!^!_(V!_;'S&};'S;=`(n<%lO&}!_4WiiSlWd!ROX5uXZ7SZ[5u[^7S^p5uqr8trs7Sst>]tw8twx7Sx!P8t!P!Q5u!Q!]8t!]!^/^!^!a7S!a#S8t#S#T;{#T#s8t#s$f5u$f;'S8t;'S;=`>V<%l?Ah8t?Ah?BY5u?BY?Mn8t?MnO5u!Z5zblWOX5uXZ7SZ[5u[^7S^p5uqr5urs7Sst+Ptw5uwx7Sx!]5u!]!^7w!^!a7S!a#S5u#S#T7S#T;'S5u;'S;=`8n<%lO5u!R7VVOp7Sqs7St!]7S!]!^7l!^;'S7S;'S;=`7q<%lO7S!R7qOb!R!R7tP;=`<%l7S!Z8OYlWb!ROX+PZ[+P^p+Pqr+Psw+Px!^+P!a#S+P#T;'S+P;'S;=`+t<%lO+P!Z8qP;=`<%l5u!_8{iiSlWOX5uXZ7SZ[5u[^7S^p5uqr8trs7Sst/^tw8twx7Sx!P8t!P!Q5u!Q!]8t!]!^:j!^!a7S!a#S8t#S#T;{#T#s8t#s$f5u$f;'S8t;'S;=`>V<%l?Ah8t?Ah?BY5u?BY?Mn8t?MnO5u!_:sbiSlWb!ROX+PZ[+P^p+Pqr/^sw/^x!P/^!P!Q+P!Q!^/^!a#S/^#S#T0m#T#s/^#s$f+P$f;'S/^;'S;=`1e<%l?Ah/^?Ah?BY+P?BY?Mn/^?MnO+P!V<QciSOp7Sqr;{rs7Sst0mtw;{wx7Sx!P;{!P!Q7S!Q!];{!]!^=]!^!a7S!a#s;{#s$f7S$f;'S;{;'S;=`>P<%l?Ah;{?Ah?BY7S?BY?Mn;{?MnO7S!V=dXiSb!Rqr0msw0mx!P0m!Q!^0m!a#s0m$f;'S0m;'S;=`1_<%l?Ah0m?BY?Mn0m!V>SP;=`<%l;{!_>YP;=`<%l8t!_>dhiSlWOX@OXZAYZ[@O[^AY^p@OqrBwrsAYswBwwxAYx!PBw!P!Q@O!Q!]Bw!]!^/^!^!aAY!a#SBw#S#TE{#T#sBw#s$f@O$f;'SBw;'S;=`HS<%l?AhBw?Ah?BY@O?BY?MnBw?MnO@O!Z@TalWOX@OXZAYZ[@O[^AY^p@Oqr@OrsAYsw@OwxAYx!]@O!]!^Az!^!aAY!a#S@O#S#TAY#T;'S@O;'S;=`Bq<%lO@O!RA]UOpAYq!]AY!]!^Ao!^;'SAY;'S;=`At<%lOAY!RAtOc!R!RAwP;=`<%lAY!ZBRYlWc!ROX+PZ[+P^p+Pqr+Psw+Px!^+P!a#S+P#T;'S+P;'S;=`+t<%lO+P!ZBtP;=`<%l@O!_COhiSlWOX@OXZAYZ[@O[^AY^p@OqrBwrsAYswBwwxAYx!PBw!P!Q@O!Q!]Bw!]!^Dj!^!aAY!a#SBw#S#TE{#T#sBw#s$f@O$f;'SBw;'S;=`HS<%l?AhBw?Ah?BY@O?BY?MnBw?MnO@O!_DsbiSlWc!ROX+PZ[+P^p+Pqr/^sw/^x!P/^!P!Q+P!Q!^/^!a#S/^#S#T0m#T#s/^#s$f+P$f;'S/^;'S;=`1e<%l?Ah/^?Ah?BY+P?BY?Mn/^?MnO+P!VFQbiSOpAYqrE{rsAYswE{wxAYx!PE{!P!QAY!Q!]E{!]!^GY!^!aAY!a#sE{#s$fAY$f;'SE{;'S;=`G|<%l?AhE{?Ah?BYAY?BY?MnE{?MnOAY!VGaXiSc!Rqr0msw0mx!P0m!Q!^0m!a#s0m$f;'S0m;'S;=`1_<%l?Ah0m?BY?Mn0m!VHPP;=`<%lE{!_HVP;=`<%lBw!ZHcW!cxaP!b`Or(trs'ksv(tw!^(t!^!_)e!_;'S(t;'S;=`*P<%lO(t!aIYliSaPlW!b`!dpOX$qXZ&XZ[$q[^&X^p$qpq&Xqr-_rs&}sv-_vw/^wx(tx}-_}!OKQ!O!P-_!P!Q$q!Q!^-_!^!_*V!_!a&X!a#S-_#S#T1k#T#s-_#s$f$q$f;'S-_;'S;=`3X<%l?Ah-_?Ah?BY$q?BY?Mn-_?MnO$q!aK_kiSaPlW!b`!dpOX$qXZ&XZ[$q[^&X^p$qpq&Xqr-_rs&}sv-_vw/^wx(tx!P-_!P!Q$q!Q!^-_!^!_*V!_!`&X!`!aMS!a#S-_#S#T1k#T#s-_#s$f$q$f;'S-_;'S;=`3X<%l?Ah-_?Ah?BY$q?BY?Mn-_?MnO$q!TM_XaP!b`!dp!fQOr&Xrs&}sv&Xwx(tx!^&X!^!_*V!_;'S&X;'S;=`*y<%lO&X!aNZ!ZiSgQaPlW!b`!dpOX$qXZ&XZ[$q[^&X^p$qpq&Xqr-_rs&}sv-_vw/^wx(tx}-_}!OMz!O!PMz!P!Q$q!Q![Mz![!]Mz!]!^-_!^!_*V!_!a&X!a!c-_!c!}Mz!}#R-_#R#SMz#S#T1k#T#oMz#o#s-_#s$f$q$f$}-_$}%OMz%O%W-_%W%oMz%o%p-_%p&aMz&a&b-_&b1pMz1p4UMz4U4dMz4d4e-_4e$ISMz$IS$I`-_$I`$IbMz$Ib$Je-_$Je$JgMz$Jg$Kh-_$Kh%#tMz%#t&/x-_&/x&EtMz&Et&FV-_&FV;'SMz;'S;:j!#|;:j;=`3X<%l?&r-_?&r?AhMz?Ah?BY$q?BY?MnMz?MnO$q!a!$PP;=`<%lMz!R!$ZY!b`!dpOq*Vqr!$yrs(Vsv*Vwx)ex!a*V!a!b!4t!b;'S*V;'S;=`*s<%lO*V!R!%Q]!b`!dpOr*Vrs(Vsv*Vwx)ex}*V}!O!%y!O!f*V!f!g!']!g#W*V#W#X!0`#X;'S*V;'S;=`*s<%lO*V!R!&QX!b`!dpOr*Vrs(Vsv*Vwx)ex}*V}!O!&m!O;'S*V;'S;=`*s<%lO*V!R!&vV!b`!dp!ePOr*Vrs(Vsv*Vwx)ex;'S*V;'S;=`*s<%lO*V!R!'dX!b`!dpOr*Vrs(Vsv*Vwx)ex!q*V!q!r!(P!r;'S*V;'S;=`*s<%lO*V!R!(WX!b`!dpOr*Vrs(Vsv*Vwx)ex!e*V!e!f!(s!f;'S*V;'S;=`*s<%lO*V!R!(zX!b`!dpOr*Vrs(Vsv*Vwx)ex!v*V!v!w!)g!w;'S*V;'S;=`*s<%lO*V!R!)nX!b`!dpOr*Vrs(Vsv*Vwx)ex!{*V!{!|!*Z!|;'S*V;'S;=`*s<%lO*V!R!*bX!b`!dpOr*Vrs(Vsv*Vwx)ex!r*V!r!s!*}!s;'S*V;'S;=`*s<%lO*V!R!+UX!b`!dpOr*Vrs(Vsv*Vwx)ex!g*V!g!h!+q!h;'S*V;'S;=`*s<%lO*V!R!+xY!b`!dpOr!+qrs!,hsv!+qvw!-Swx!.[x!`!+q!`!a!/j!a;'S!+q;'S;=`!0Y<%lO!+qq!,mV!dpOv!,hvx!-Sx!`!,h!`!a!-q!a;'S!,h;'S;=`!.U<%lO!,hP!-VTO!`!-S!`!a!-f!a;'S!-S;'S;=`!-k<%lO!-SP!-kO|PP!-nP;=`<%l!-Sq!-xS!dp|POv(Vx;'S(V;'S;=`(h<%lO(Vq!.XP;=`<%l!,ha!.aX!b`Or!.[rs!-Ssv!.[vw!-Sw!`!.[!`!a!.|!a;'S!.[;'S;=`!/d<%lO!.[a!/TT!b`|POr)esv)ew;'S)e;'S;=`)y<%lO)ea!/gP;=`<%l!.[!R!/sV!b`!dp|POr*Vrs(Vsv*Vwx)ex;'S*V;'S;=`*s<%lO*V!R!0]P;=`<%l!+q!R!0gX!b`!dpOr*Vrs(Vsv*Vwx)ex#c*V#c#d!1S#d;'S*V;'S;=`*s<%lO*V!R!1ZX!b`!dpOr*Vrs(Vsv*Vwx)ex#V*V#V#W!1v#W;'S*V;'S;=`*s<%lO*V!R!1}X!b`!dpOr*Vrs(Vsv*Vwx)ex#h*V#h#i!2j#i;'S*V;'S;=`*s<%lO*V!R!2qX!b`!dpOr*Vrs(Vsv*Vwx)ex#m*V#m#n!3^#n;'S*V;'S;=`*s<%lO*V!R!3eX!b`!dpOr*Vrs(Vsv*Vwx)ex#d*V#d#e!4Q#e;'S*V;'S;=`*s<%lO*V!R!4XX!b`!dpOr*Vrs(Vsv*Vwx)ex#X*V#X#Y!+q#Y;'S*V;'S;=`*s<%lO*V!R!4{Y!b`!dpOr!4trs!5ksv!4tvw!6Vwx!8]x!a!4t!a!b!:]!b;'S!4t;'S;=`!;r<%lO!4tq!5pV!dpOv!5kvx!6Vx!a!5k!a!b!7W!b;'S!5k;'S;=`!8V<%lO!5kP!6YTO!a!6V!a!b!6i!b;'S!6V;'S;=`!7Q<%lO!6VP!6lTO!`!6V!`!a!6{!a;'S!6V;'S;=`!7Q<%lO!6VP!7QOyPP!7TP;=`<%l!6Vq!7]V!dpOv!5kvx!6Vx!`!5k!`!a!7r!a;'S!5k;'S;=`!8V<%lO!5kq!7yS!dpyPOv(Vx;'S(V;'S;=`(h<%lO(Vq!8YP;=`<%l!5ka!8bX!b`Or!8]rs!6Vsv!8]vw!6Vw!a!8]!a!b!8}!b;'S!8];'S;=`!:V<%lO!8]a!9SX!b`Or!8]rs!6Vsv!8]vw!6Vw!`!8]!`!a!9o!a;'S!8];'S;=`!:V<%lO!8]a!9vT!b`yPOr)esv)ew;'S)e;'S;=`)y<%lO)ea!:YP;=`<%l!8]!R!:dY!b`!dpOr!4trs!5ksv!4tvw!6Vwx!8]x!`!4t!`!a!;S!a;'S!4t;'S;=`!;r<%lO!4t!R!;]V!b`!dpyPOr*Vrs(Vsv*Vwx)ex;'S*V;'S;=`*s<%lO*V!R!;uP;=`<%l!4t!V!<TXjSaP!b`!dpOr&Xrs&}sv&Xwx(tx!^&X!^!_*V!_;'S&X;'S;=`*y<%lO&X", tokenizers: [Ue, We, Ge, He, ze, Be, 0, 1, 2, 3, 4, 5], topRules: { Document: [0, 16] }, dialects: { noMatch: 0, selfClosing: 515 }, tokenPrec: 517 });
function N(e2, t2) {
  let n2 = /* @__PURE__ */ Object.create(null);
  for (let r2 of e2.getChildren(b)) {
    let e3 = r2.getChild(Ce), i2 = r2.getChild(x) || r2.getChild(S);
    e3 && (n2[t2.read(e3.from, e3.to)] = i2 ? i2.type.id == x ? t2.read(i2.from + 1, i2.to - 1) : t2.read(i2.from, i2.to) : ``);
  }
  return n2;
}
function P(e2, t2) {
  let n2 = e2.getChild(Se);
  return n2 ? t2.read(n2.from, n2.to) : ` `;
}
function F(e2, t2, n2) {
  let r2;
  for (let i2 of n2) if (!i2.attrs || i2.attrs(r2 || (r2 = N(e2.node.parent.firstChild, t2)))) return { parser: i2.parser, bracketed: true };
  return null;
}
function I(e2 = [], t2 = []) {
  let n2 = [], r2 = [], i2 = [], a2 = [];
  for (let t3 of e2) (t3.tag == `script` ? n2 : t3.tag == `style` ? r2 : t3.tag == `textarea` ? i2 : a2).push(t3);
  let o2 = t2.length ? /* @__PURE__ */ Object.create(null) : null;
  for (let e3 of t2) (o2[e3.name] || (o2[e3.name] = [])).push(e3);
  return ne((e3, t3) => {
    let s2 = e3.type.id;
    if (s2 == we) return F(e3, t3, n2);
    if (s2 == Te) return F(e3, t3, r2);
    if (s2 == Ee) return F(e3, t3, i2);
    if (s2 == y && a2.length) {
      let n3 = e3.node, r3 = n3.firstChild, i3 = r3 && P(r3, t3), o3;
      if (i3) {
        for (let e4 of a2) if (e4.tag == i3 && (!e4.attrs || e4.attrs(o3 || (o3 = N(r3, t3))))) {
          let t4 = n3.lastChild, i4 = t4.type.id == Oe ? t4.from : n3.to;
          if (i4 > r3.to) return { parser: e4.parser, overlay: [{ from: r3.to, to: i4 }] };
        }
      }
    }
    if (o2 && s2 == b) {
      let n3 = e3.node, r3;
      if (r3 = n3.firstChild) {
        let e4 = o2[t3.read(r3.from, r3.to)];
        if (e4) for (let r4 of e4) {
          if (r4.tagName && r4.tagName != P(n3.parent, t3)) continue;
          let e5 = n3.lastChild;
          if (e5.type.id == x) {
            let t4 = e5.from + 1, n4 = e5.lastChild, i3 = e5.to - (n4 && n4.isError ? 0 : 1);
            if (i3 > t4) return { parser: r4.parser, overlay: [{ from: t4, to: i3 }], bracketed: true };
          } else if (e5.type.id == S) return { parser: r4.parser, overlay: [{ from: e5.from, to: e5.to }] };
        }
      }
    }
    return null;
  });
}
var L = [`_blank`, `_self`, `_top`, `_parent`], R = [`ascii`, `utf-8`, `utf-16`, `latin1`, `latin1`], z = [`get`, `post`, `put`, `delete`], B = [`application/x-www-form-urlencoded`, `multipart/form-data`, `text/plain`], V = [`true`, `false`], H = {}, Je = { a: { attrs: { href: null, ping: null, type: null, media: null, target: L, hreflang: null } }, abbr: H, address: H, area: { attrs: { alt: null, coords: null, href: null, target: null, ping: null, media: null, hreflang: null, type: null, shape: [`default`, `rect`, `circle`, `poly`] } }, article: H, aside: H, audio: { attrs: { src: null, mediagroup: null, crossorigin: [`anonymous`, `use-credentials`], preload: [`none`, `metadata`, `auto`], autoplay: [`autoplay`], loop: [`loop`], controls: [`controls`] } }, b: H, base: { attrs: { href: null, target: L } }, bdi: H, bdo: H, blockquote: { attrs: { cite: null } }, body: H, br: H, button: { attrs: { form: null, formaction: null, name: null, value: null, autofocus: [`autofocus`], disabled: [`autofocus`], formenctype: B, formmethod: z, formnovalidate: [`novalidate`], formtarget: L, type: [`submit`, `reset`, `button`] } }, canvas: { attrs: { width: null, height: null } }, caption: H, center: H, cite: H, code: H, col: { attrs: { span: null } }, colgroup: { attrs: { span: null } }, command: { attrs: { type: [`command`, `checkbox`, `radio`], label: null, icon: null, radiogroup: null, command: null, title: null, disabled: [`disabled`], checked: [`checked`] } }, data: { attrs: { value: null } }, datagrid: { attrs: { disabled: [`disabled`], multiple: [`multiple`] } }, datalist: { attrs: { data: null } }, dd: H, del: { attrs: { cite: null, datetime: null } }, details: { attrs: { open: [`open`] } }, dfn: H, div: H, dl: H, dt: H, em: H, embed: { attrs: { src: null, type: null, width: null, height: null } }, eventsource: { attrs: { src: null } }, fieldset: { attrs: { disabled: [`disabled`], form: null, name: null } }, figcaption: H, figure: H, footer: H, form: { attrs: { action: null, name: null, "accept-charset": R, autocomplete: [`on`, `off`], enctype: B, method: z, novalidate: [`novalidate`], target: L } }, h1: H, h2: H, h3: H, h4: H, h5: H, h6: H, head: { children: [`title`, `base`, `link`, `style`, `meta`, `script`, `noscript`, `command`] }, header: H, hgroup: H, hr: H, html: { attrs: { manifest: null } }, i: H, iframe: { attrs: { src: null, srcdoc: null, name: null, width: null, height: null, sandbox: [`allow-top-navigation`, `allow-same-origin`, `allow-forms`, `allow-scripts`], seamless: [`seamless`] } }, img: { attrs: { alt: null, src: null, ismap: null, usemap: null, width: null, height: null, crossorigin: [`anonymous`, `use-credentials`] } }, input: { attrs: { alt: null, dirname: null, form: null, formaction: null, height: null, list: null, max: null, maxlength: null, min: null, name: null, pattern: null, placeholder: null, size: null, src: null, step: null, value: null, width: null, accept: [`audio/*`, `video/*`, `image/*`], autocomplete: [`on`, `off`], autofocus: [`autofocus`], checked: [`checked`], disabled: [`disabled`], formenctype: B, formmethod: z, formnovalidate: [`novalidate`], formtarget: L, multiple: [`multiple`], readonly: [`readonly`], required: [`required`], type: [`hidden`, `text`, `search`, `tel`, `url`, `email`, `password`, `datetime`, `date`, `month`, `week`, `time`, `datetime-local`, `number`, `range`, `color`, `checkbox`, `radio`, `file`, `submit`, `image`, `reset`, `button`] } }, ins: { attrs: { cite: null, datetime: null } }, kbd: H, keygen: { attrs: { challenge: null, form: null, name: null, autofocus: [`autofocus`], disabled: [`disabled`], keytype: [`RSA`] } }, label: { attrs: { for: null, form: null } }, legend: H, li: { attrs: { value: null } }, link: { attrs: { href: null, type: null, hreflang: null, media: null, sizes: [`all`, `16x16`, `16x16 32x32`, `16x16 32x32 64x64`] } }, map: { attrs: { name: null } }, mark: H, menu: { attrs: { label: null, type: [`list`, `context`, `toolbar`] } }, meta: { attrs: { content: null, charset: R, name: [`viewport`, `application-name`, `author`, `description`, `generator`, `keywords`], "http-equiv": [`content-language`, `content-type`, `default-style`, `refresh`] } }, meter: { attrs: { value: null, min: null, low: null, high: null, max: null, optimum: null } }, nav: H, noscript: H, object: { attrs: { data: null, type: null, name: null, usemap: null, form: null, width: null, height: null, typemustmatch: [`typemustmatch`] } }, ol: { attrs: { reversed: [`reversed`], start: null, type: [`1`, `a`, `A`, `i`, `I`] }, children: [`li`, `script`, `template`, `ul`, `ol`] }, optgroup: { attrs: { disabled: [`disabled`], label: null } }, option: { attrs: { disabled: [`disabled`], label: null, selected: [`selected`], value: null } }, output: { attrs: { for: null, form: null, name: null } }, p: H, param: { attrs: { name: null, value: null } }, pre: H, progress: { attrs: { value: null, max: null } }, q: { attrs: { cite: null } }, rp: H, rt: H, ruby: H, samp: H, script: { attrs: { type: [`text/javascript`], src: null, async: [`async`], defer: [`defer`], charset: R } }, section: H, select: { attrs: { form: null, name: null, size: null, autofocus: [`autofocus`], disabled: [`disabled`], multiple: [`multiple`] } }, slot: { attrs: { name: null } }, small: H, source: { attrs: { src: null, type: null, media: null } }, span: H, strong: H, style: { attrs: { type: [`text/css`], media: null, scoped: null } }, sub: H, summary: H, sup: H, table: H, tbody: H, td: { attrs: { colspan: null, rowspan: null, headers: null } }, template: H, textarea: { attrs: { dirname: null, form: null, maxlength: null, name: null, placeholder: null, rows: null, cols: null, autofocus: [`autofocus`], disabled: [`disabled`], readonly: [`readonly`], required: [`required`], wrap: [`soft`, `hard`] } }, tfoot: H, th: { attrs: { colspan: null, rowspan: null, headers: null, scope: [`row`, `col`, `rowgroup`, `colgroup`] } }, thead: H, time: { attrs: { datetime: null } }, title: H, tr: H, track: { attrs: { src: null, label: null, default: null, kind: [`subtitles`, `captions`, `descriptions`, `chapters`, `metadata`], srclang: null } }, ul: { children: [`li`, `script`, `template`, `ul`, `ol`] }, var: H, video: { attrs: { src: null, poster: null, width: null, height: null, crossorigin: [`anonymous`, `use-credentials`], preload: [`auto`, `metadata`, `none`], autoplay: [`autoplay`], mediagroup: [`movie`], muted: [`muted`], controls: [`controls`] } }, wbr: H }, U = { accesskey: null, class: null, contenteditable: V, contextmenu: null, dir: [`ltr`, `rtl`, `auto`], draggable: [`true`, `false`, `auto`], dropzone: [`copy`, `move`, `link`, `string:`, `file:`], hidden: [`hidden`], id: null, inert: [`inert`], itemid: null, itemprop: null, itemref: null, itemscope: [`itemscope`], itemtype: null, lang: [`ar`, `bn`, `de`, `en-GB`, `en-US`, `es`, `fr`, `hi`, `id`, `ja`, `pa`, `pt`, `ru`, `tr`, `zh`], spellcheck: V, autocorrect: V, autocapitalize: V, style: null, tabindex: null, title: null, translate: [`yes`, `no`], rel: [`stylesheet`, `alternate`, `author`, `bookmark`, `help`, `license`, `next`, `nofollow`, `noreferrer`, `prefetch`, `prev`, `search`, `tag`], role: `alert application article banner button cell checkbox complementary contentinfo dialog document feed figure form grid gridcell heading img list listbox listitem main navigation region row rowgroup search switch tab table tabpanel textbox timer`.split(` `), "aria-activedescendant": null, "aria-atomic": V, "aria-autocomplete": [`inline`, `list`, `both`, `none`], "aria-busy": V, "aria-checked": [`true`, `false`, `mixed`, `undefined`], "aria-controls": null, "aria-describedby": null, "aria-disabled": V, "aria-dropeffect": null, "aria-expanded": [`true`, `false`, `undefined`], "aria-flowto": null, "aria-grabbed": [`true`, `false`, `undefined`], "aria-haspopup": V, "aria-hidden": V, "aria-invalid": [`true`, `false`, `grammar`, `spelling`], "aria-label": null, "aria-labelledby": null, "aria-level": null, "aria-live": [`off`, `polite`, `assertive`], "aria-multiline": V, "aria-multiselectable": V, "aria-owns": null, "aria-posinset": null, "aria-pressed": [`true`, `false`, `mixed`, `undefined`], "aria-readonly": V, "aria-relevant": null, "aria-required": V, "aria-selected": [`true`, `false`, `undefined`], "aria-setsize": null, "aria-sort": [`ascending`, `descending`, `none`, `other`], "aria-valuemax": null, "aria-valuemin": null, "aria-valuenow": null, "aria-valuetext": null }, W = `beforeunload copy cut dragstart dragover dragleave dragenter dragend drag paste focus blur change click load mousedown mouseenter mouseleave mouseup keydown keyup resize scroll unload`.split(` `).map((e2) => `on` + e2);
for (let e2 of W) U[e2] = null;
var G = class {
  constructor(e2, t2) {
    this.tags = { ...Je, ...e2 }, this.globalAttrs = { ...U, ...t2 }, this.allTags = Object.keys(this.tags), this.globalAttrNames = Object.keys(this.globalAttrs);
  }
};
G.default = new G();
function K(e2, t2, n2 = e2.length) {
  if (!t2) return ``;
  let r2 = t2.firstChild, i2 = r2 && r2.getChild(`TagName`);
  return i2 ? e2.sliceString(i2.from, Math.min(i2.to, n2)) : ``;
}
function q(e2, t2 = false) {
  for (; e2; e2 = e2.parent) if (e2.name == `Element`) if (t2) t2 = false;
  else return e2;
  return null;
}
function J(e2, t2, n2) {
  var _a;
  return ((_a = n2.tags[K(e2, q(t2))]) == null ? void 0 : _a.children) || n2.allTags;
}
function Y(e2, t2) {
  let n2 = [];
  for (let r2 = q(t2); r2 && !r2.type.isTop; r2 = q(r2.parent)) {
    let i2 = K(e2, r2);
    if (i2 && r2.lastChild.name == `CloseTag`) break;
    i2 && n2.indexOf(i2) < 0 && (t2.name == `EndTag` || t2.from >= r2.firstChild.to) && n2.push(i2);
  }
  return n2;
}
var X = /^[:\-\.\w\u00b7-\uffff]*$/;
function Z(e2, t2, n2, r2, i2) {
  let a2 = /\s*>/.test(e2.sliceDoc(i2, i2 + 5)) ? `` : `>`, o2 = q(n2, n2.name == `StartTag` || n2.name == `TagName`);
  return { from: r2, to: i2, options: J(e2.doc, o2, t2).map((e3) => ({ label: e3, type: `type` })).concat(Y(e2.doc, n2).map((e3, t3) => ({ label: `/` + e3, apply: `/` + e3 + a2, type: `type`, boost: 99 - t3 }))), validFor: /^\/?[:\-\.\w\u00b7-\uffff]*$/ };
}
function Ye(e2, t2, n2, r2) {
  let i2 = /\s*>/.test(e2.sliceDoc(r2, r2 + 5)) ? `` : `>`;
  return { from: n2, to: r2, options: Y(e2.doc, t2).map((e3, t3) => ({ label: e3, apply: e3 + i2, type: `type`, boost: 99 - t3 })), validFor: X };
}
function Xe(e2, t2, n2, r2) {
  let i2 = [], a2 = 0;
  for (let r3 of J(e2.doc, n2, t2)) i2.push({ label: `<` + r3, type: `type` });
  for (let t3 of Y(e2.doc, n2)) i2.push({ label: `</` + t3 + `>`, type: `type`, boost: 99 - a2++ });
  return { from: r2, to: r2, options: i2, validFor: /^<\/?[:\-\.\w\u00b7-\uffff]*$/ };
}
function Ze(e2, t2, n2, r2, i2) {
  let a2 = q(n2), o2 = a2 ? t2.tags[K(e2.doc, a2)] : null, s2 = o2 && o2.attrs ? Object.keys(o2.attrs) : [];
  return { from: r2, to: i2, options: (o2 && o2.globalAttrs === false ? s2 : s2.length ? s2.concat(t2.globalAttrNames) : t2.globalAttrNames).map((e3) => ({ label: e3, type: `property` })), validFor: X };
}
function Qe(e2, t2, n2, r2, i2) {
  var _a;
  let a2 = (_a = n2.parent) == null ? void 0 : _a.getChild(`AttributeName`), o2 = [], s2;
  if (a2) {
    let c2 = e2.sliceDoc(a2.from, a2.to), l2 = t2.globalAttrs[c2];
    if (!l2) {
      let r3 = q(n2), i3 = r3 ? t2.tags[K(e2.doc, r3)] : null;
      l2 = (i3 == null ? void 0 : i3.attrs) && i3.attrs[c2];
    }
    if (l2) {
      let t3 = e2.sliceDoc(r2, i2).toLowerCase(), n3 = `"`, a3 = `"`;
      /^['"]/.test(t3) ? (s2 = t3[0] == `"` ? /^[^"]*$/ : /^[^']*$/, n3 = ``, a3 = e2.sliceDoc(i2, i2 + 1) == t3[0] ? `` : t3[0], t3 = t3.slice(1), r2++) : s2 = /^[^\s<>='"]*$/;
      for (let e3 of l2) o2.push({ label: e3, apply: n3 + e3 + a3, type: `constant` });
    }
  }
  return { from: r2, to: i2, options: o2, validFor: s2 };
}
function Q(t2, n2) {
  let { state: r2, pos: i2 } = n2, a2 = e(r2).resolveInner(i2, -1), o2 = a2.resolve(i2);
  for (let e2 = i2, t3; o2 == a2 && (t3 = a2.childBefore(e2)); ) {
    let n3 = t3.lastChild;
    if (!n3 || !n3.type.isError || n3.from < n3.to) break;
    o2 = a2 = t3, e2 = n3.from;
  }
  return a2.name == `TagName` ? a2.parent && /CloseTag$/.test(a2.parent.name) ? Ye(r2, a2, a2.from, i2) : Z(r2, t2, a2, a2.from, i2) : a2.name == `StartTag` || a2.name == `IncompleteTag` ? Z(r2, t2, a2, i2, i2) : a2.name == `StartCloseTag` || a2.name == `IncompleteCloseTag` ? Ye(r2, a2, i2, i2) : a2.name == `OpenTag` || a2.name == `SelfClosingTag` || a2.name == `AttributeName` ? Ze(r2, t2, a2, a2.name == `AttributeName` ? a2.from : i2, i2) : a2.name == `Is` || a2.name == `AttributeValue` || a2.name == `UnquotedAttributeValue` ? Qe(r2, t2, a2, a2.name == `Is` ? i2 : a2.from, i2) : n2.explicit && (o2.name == `Element` || o2.name == `Text` || o2.name == `Document`) ? Xe(r2, t2, a2, i2) : null;
}
function $e(e2) {
  return Q(G.default, e2);
}
function et(e2) {
  let { extraTags: t2, extraGlobalAttributes: n2 } = e2, r2 = n2 || t2 ? new G(t2, n2) : G.default;
  return (e3) => Q(r2, e3);
}
var tt = d.parser.configure({ top: `SingleExpression` }), nt = [{ tag: `script`, attrs: (e2) => e2.type == `text/typescript` || e2.lang == `ts`, parser: ae.parser }, { tag: `script`, attrs: (e2) => e2.type == `text/babel` || e2.type == `text/jsx`, parser: se.parser }, { tag: `script`, attrs: (e2) => e2.type == `text/typescript-jsx`, parser: ce.parser }, { tag: `script`, attrs(e2) {
  return /^(importmap|speculationrules|application\/(.+\+)?json)$/i.test(e2.type);
}, parser: tt }, { tag: `script`, attrs(e2) {
  return !e2.type || /^(?:text|application)\/(?:x-)?(?:java|ecma)script$|^module$|^$/i.test(e2.type);
}, parser: d.parser }, { tag: `style`, attrs(e2) {
  return (!e2.lang || e2.lang == `css`) && (!e2.type || /^(text\/)?(x-)?(stylesheet|css)$/i.test(e2.type));
}, parser: u.parser }], rt = [{ name: `style`, parser: u.parser.configure({ top: `Styles` }) }].concat(W.map((e2) => ({ name: e2, parser: d.parser }))), it = l.define({ name: `html`, parser: qe.configure({ props: [t.add({ Element(e2) {
  let t2 = /^(\s*)(<\/)?/.exec(e2.textAfter);
  return e2.node.to <= e2.pos + t2[0].length ? e2.continue() : e2.lineIndent(e2.node.from) + (t2[2] ? 0 : e2.unit);
}, "OpenTag CloseTag SelfClosingTag"(e2) {
  return e2.column(e2.node.from) + e2.unit;
}, Document(e2) {
  if (e2.pos + /\s*/.exec(e2.textAfter)[0].length < e2.node.to) return e2.continue();
  let t2 = null, n2;
  for (let n3 = e2.node; ; ) {
    let e3 = n3.lastChild;
    if (!e3 || e3.name != `Element` || e3.to != n3.to) break;
    t2 = n3 = e3;
  }
  return t2 && !((n2 = t2.lastChild) && (n2.name == `CloseTag` || n2.name == `SelfClosingTag`)) ? e2.lineIndent(t2.from) + e2.unit : null;
} }), re.add({ Element(e2) {
  let t2 = e2.firstChild, n2 = e2.lastChild;
  return !t2 || t2.name != `OpenTag` ? null : { from: t2.to, to: n2.name == `CloseTag` ? n2.from : e2.to };
} }), s.add({ "OpenTag CloseTag": (e2) => e2.getChild(`TagName`) })] }), languageData: { commentTokens: { block: { open: `<!--`, close: `-->` } }, indentOnInput: /^\s*<\/\w+\W$/, wordChars: `-_` } }), $ = it.configure({ wrap: I(nt, rt) });
function at(e2 = {}) {
  let t2 = ``, n2;
  return e2.matchClosingTags === false && (t2 = `noMatch`), e2.selfClosingTags === true && (t2 = (t2 ? t2 + ` ` : ``) + `selfClosing`), (e2.nestedLanguages && e2.nestedLanguages.length || e2.nestedAttributes && e2.nestedAttributes.length) && (n2 = I((e2.nestedLanguages || []).concat(nt), (e2.nestedAttributes || []).concat(rt))), new te(n2 ? it.configure({ wrap: n2, dialect: t2 }) : t2 ? $.configure({ dialect: t2 }) : $, [$.data.of({ autocomplete: et(e2) }), e2.autoCloseTags === false ? [] : st, oe().support, ie().support]);
}
var ot = new Set(`area base br col command embed frame hr img input keygen link meta param source track wbr menuitem`.split(` `)), st = n.inputHandler.of((t2, n2, r2, i2, o2) => {
  if (t2.composing || t2.state.readOnly || n2 != r2 || i2 != `>` && i2 != `/` || !$.isActiveAt(t2.state, n2, -1)) return false;
  let s2 = o2(), { state: c2 } = s2, l2 = c2.changeByRange((t3) => {
    var _a, _b, _c;
    let n3 = c2.doc.sliceString(t3.from - 1, t3.to) == i2, { head: r3 } = t3, o3 = e(c2).resolveInner(r3, -1), s3;
    if (n3 && i2 == `>` && o3.name == `EndTag`) {
      let e2 = o3.parent;
      if (((_b = (_a = e2.parent) == null ? void 0 : _a.lastChild) == null ? void 0 : _b.name) != `CloseTag` && (s3 = K(c2.doc, e2.parent, r3)) && !ot.has(s3)) return { range: t3, changes: { from: r3, to: r3 + (c2.doc.sliceString(r3, r3 + 1) === `>` ? 1 : 0), insert: `</${s3}>` } };
    } else if (n3 && i2 == `/` && o3.name == `IncompleteCloseTag`) {
      let e2 = o3.parent;
      if (o3.from == r3 - 2 && ((_c = e2.lastChild) == null ? void 0 : _c.name) != `CloseTag` && (s3 = K(c2.doc, e2, r3)) && !ot.has(s3)) {
        let e3 = r3 + (c2.doc.sliceString(r3, r3 + 1) === `>` ? 1 : 0), t4 = `${s3}>`;
        return { range: a.cursor(r3 + t4.length, -1), changes: { from: r3, to: e3, insert: t4 } };
      }
    }
    return { range: t3 };
  });
  return l2.changes.empty ? false : (t2.dispatch([s2, c2.update(l2, { userEvent: `input.complete`, scrollIntoView: true })]), true);
});
export {
  $ as a,
  et as i,
  at as n,
  $e as r,
  st as t
};
