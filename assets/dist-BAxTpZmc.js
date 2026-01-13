import { C as e, M as t, N as n, g as r, n as i, r as a, s as o, t as s, u as c, v as ee, wt as l, y as u } from "./dist-CQp5Y4zm.js";
var d = 63, f = 64, p = 1, m = 2, h = 3, g = 4, _ = 5, v = 6, y = 7, b = 65, x = 66, te = 8, ne = 9, re = 10, S = 11, C = 12, w = 13, T = 19, E = 20, D = 29, O = 33, ie = 34, k = 47, ae = 0, A = 1, j = 2, M = 3, N = 4, P = class {
  constructor(e2, t2, n2) {
    this.parent = e2, this.depth = t2, this.type = n2, this.hash = (e2 ? e2.hash + e2.hash << 8 : 0) + t2 + (t2 << 4) + n2;
  }
};
P.top = new P(null, -1, ae);
function F(e2, t2) {
  for (let n2 = 0, r2 = t2 - e2.pos - 1; ; r2--, n2++) {
    let t3 = e2.peek(r2);
    if (L(t3) || t3 == -1) return n2;
  }
}
function I(e2) {
  return e2 == 32 || e2 == 9;
}
function L(e2) {
  return e2 == 10 || e2 == 13;
}
function R(e2) {
  return I(e2) || L(e2);
}
function z(e2) {
  return e2 < 0 || R(e2);
}
var B = new s({ start: P.top, reduce(e2, t2) {
  return e2.type == M && (t2 == E || t2 == ie) ? e2.parent : e2;
}, shift(e2, t2, n2, r2) {
  if (t2 == h) return new P(e2, F(r2, r2.pos), A);
  if (t2 == b || t2 == _) return new P(e2, F(r2, r2.pos), j);
  if (t2 == d) return e2.parent;
  if (t2 == T || t2 == O) return new P(e2, 0, M);
  if (t2 == w && e2.type == N) return e2.parent;
  if (t2 == k) {
    let t3 = /[1-9]/.exec(r2.read(r2.pos, n2.pos));
    if (t3) return new P(e2, e2.depth + +t3[0], N);
  }
  return e2;
}, hash(e2) {
  return e2.hash;
} });
function V(e2, t2, n2 = 0) {
  return e2.peek(n2) == t2 && e2.peek(n2 + 1) == t2 && e2.peek(n2 + 2) == t2 && z(e2.peek(n2 + 3));
}
var H = new i((e2, t2) => {
  if (e2.next == -1 && t2.canShift(f)) return e2.acceptToken(f);
  let n2 = e2.peek(-1);
  if ((L(n2) || n2 < 0) && t2.context.type != M) {
    if (V(e2, 45)) if (t2.canShift(d)) e2.acceptToken(d);
    else return e2.acceptToken(p, 3);
    if (V(e2, 46)) if (t2.canShift(d)) e2.acceptToken(d);
    else return e2.acceptToken(m, 3);
    let n3 = 0;
    for (; e2.next == 32; ) n3++, e2.advance();
    (n3 < t2.context.depth || n3 == t2.context.depth && t2.context.type == A && (e2.next != 45 || !z(e2.peek(1)))) && e2.next != -1 && !L(e2.next) && e2.next != 35 && e2.acceptToken(d, -n3);
  }
}, { contextual: true }), U = new i((e2, t2) => {
  if (t2.context.type == M) {
    e2.next == 63 && (e2.advance(), z(e2.next) && e2.acceptToken(y));
    return;
  }
  if (e2.next == 45) e2.advance(), z(e2.next) && e2.acceptToken(t2.context.type == A && t2.context.depth == F(e2, e2.pos - 1) ? g : h);
  else if (e2.next == 63) e2.advance(), z(e2.next) && e2.acceptToken(t2.context.type == j && t2.context.depth == F(e2, e2.pos - 1) ? v : _);
  else {
    let n2 = e2.pos;
    for (; ; ) if (I(e2.next)) {
      if (e2.pos == n2) return;
      e2.advance();
    } else if (e2.next == 33) q(e2);
    else if (e2.next == 38) J(e2);
    else if (e2.next == 42) {
      J(e2);
      break;
    } else if (e2.next == 39 || e2.next == 34) {
      if (Y(e2, true)) break;
      return;
    } else if (e2.next == 91 || e2.next == 123) {
      if (!oe(e2)) return;
      break;
    } else {
      Q(e2, true, false, 0);
      break;
    }
    for (; I(e2.next); ) e2.advance();
    if (e2.next == 58) {
      if (e2.pos == n2 && t2.canShift(D)) return;
      z(e2.peek(1)) && e2.acceptTokenTo(t2.context.type == j && t2.context.depth == F(e2, n2) ? x : b, n2);
    }
  }
}, { contextual: true });
function W(e2) {
  return e2 > 32 && e2 < 127 && e2 != 34 && e2 != 37 && e2 != 44 && e2 != 60 && e2 != 62 && e2 != 92 && e2 != 94 && e2 != 96 && e2 != 123 && e2 != 124 && e2 != 125;
}
function G(e2) {
  return e2 >= 48 && e2 <= 57 || e2 >= 97 && e2 <= 102 || e2 >= 65 && e2 <= 70;
}
function K(e2, t2) {
  return e2.next == 37 ? (e2.advance(), G(e2.next) && e2.advance(), G(e2.next) && e2.advance(), true) : W(e2.next) || t2 && e2.next == 44 ? (e2.advance(), true) : false;
}
function q(e2) {
  if (e2.advance(), e2.next == 60) {
    for (e2.advance(); ; ) if (!K(e2, true)) {
      e2.next == 62 && e2.advance();
      break;
    }
  } else for (; K(e2, false); ) ;
}
function J(e2) {
  for (e2.advance(); !z(e2.next) && X(e2.tag) != `f`; ) e2.advance();
}
function Y(e2, t2) {
  let n2 = e2.next, r2 = false, i2 = e2.pos;
  for (e2.advance(); ; ) {
    let a2 = e2.next;
    if (a2 < 0) break;
    if (e2.advance(), a2 == n2) if (a2 == 39) if (e2.next == 39) e2.advance();
    else break;
    else break;
    else if (a2 == 92 && n2 == 34) e2.next >= 0 && e2.advance();
    else if (L(a2)) {
      if (t2) return false;
      r2 = true;
    } else if (t2 && e2.pos >= i2 + 1024) return false;
  }
  return !r2;
}
function oe(e2) {
  for (let t2 = [], n2 = e2.pos + 1024; ; ) if (e2.next == 91 || e2.next == 123) t2.push(e2.next), e2.advance();
  else if (e2.next == 39 || e2.next == 34) {
    if (!Y(e2, true)) return false;
  } else if (e2.next == 93 || e2.next == 125) {
    if (t2[t2.length - 1] != e2.next - 2) return false;
    if (t2.pop(), e2.advance(), !t2.length) return true;
  } else if (e2.next < 0 || e2.pos > n2 || L(e2.next)) return false;
  else e2.advance();
}
var se = `iiisiiissisfissssssssssssisssiiissssssssssssssssssssssssssfsfssissssssssssssssssssssssssssfif`;
function X(e2) {
  return e2 < 33 ? `u` : e2 > 125 ? `s` : se[e2 - 33];
}
function Z(e2, t2) {
  let n2 = X(e2);
  return n2 != `u` && !(t2 && n2 == `f`);
}
function Q(e2, t2, n2, r2) {
  if (X(e2.next) == `s` || (e2.next == 63 || e2.next == 58 || e2.next == 45) && Z(e2.peek(1), n2)) e2.advance();
  else return false;
  let i2 = e2.pos;
  for (; ; ) {
    let a2 = e2.next, o2 = 0, s2 = r2 + 1;
    for (; R(a2); ) {
      if (L(a2)) {
        if (t2) return false;
        s2 = 0;
      } else s2++;
      a2 = e2.peek(++o2);
    }
    if (!(a2 >= 0 && (a2 == 58 ? Z(e2.peek(o2 + 1), n2) : a2 == 35 ? e2.peek(o2 - 1) != 32 : Z(a2, n2))) || !n2 && s2 <= r2 || s2 == 0 && !n2 && (V(e2, 45, o2) || V(e2, 46, o2))) break;
    if (t2 && X(a2) == `f`) return false;
    for (let t3 = o2; t3 >= 0; t3--) e2.advance();
    if (t2 && e2.pos > i2 + 1024) return false;
  }
  return true;
}
var ce = new i((e2, t2) => {
  if (e2.next == 33) q(e2), e2.acceptToken(C);
  else if (e2.next == 38 || e2.next == 42) {
    let t3 = e2.next == 38 ? re : S;
    J(e2), e2.acceptToken(t3);
  } else e2.next == 39 || e2.next == 34 ? (Y(e2, false), e2.acceptToken(ne)) : Q(e2, false, t2.context.type == M, t2.context.depth) && e2.acceptToken(te);
}), le = new i((e2, t2) => {
  let n2 = t2.context.type == N ? t2.context.depth : -1, r2 = e2.pos;
  scan: for (; ; ) {
    let i2 = 0, a2 = e2.next;
    for (; a2 == 32; ) a2 = e2.peek(++i2);
    if (!i2 && (V(e2, 45, i2) || V(e2, 46, i2)) || !L(a2) && (n2 < 0 && (n2 = Math.max(t2.context.depth + 1, i2)), i2 < n2)) break;
    for (; ; ) {
      if (e2.next < 0) break scan;
      let t3 = L(e2.next);
      if (e2.advance(), t3) continue scan;
      r2 = e2.pos;
    }
  }
  e2.acceptTokenTo(w, r2);
}), ue = t({ DirectiveName: n.keyword, DirectiveContent: n.attributeValue, "DirectiveEnd DocEnd": n.meta, QuotedLiteral: n.string, BlockLiteralHeader: n.special(n.string), BlockLiteralContent: n.content, Literal: n.content, "Key/Literal Key/QuotedLiteral": n.definition(n.propertyName), "Anchor Alias": n.labelName, Tag: n.typeName, Comment: n.lineComment, ": , -": n.separator, "?": n.punctuation, "[ ]": n.squareBracket, "{ }": n.brace }), de = a.deserialize({ version: 14, states: "5lQ!ZQgOOO#PQfO'#CpO#uQfO'#DOOOQR'#Dv'#DvO$qQgO'#DRO%gQdO'#DUO%nQgO'#DUO&ROaO'#D[OOQR'#Du'#DuO&{QgO'#D^O'rQgO'#D`OOQR'#Dt'#DtO(iOqO'#DbOOQP'#Dj'#DjO(zQaO'#CmO)YQgO'#CmOOQP'#Cm'#CmQ)jQaOOQ)uQgOOQ]QgOOO*PQdO'#CrO*nQdO'#CtOOQO'#Dw'#DwO+]Q`O'#CxO+hQdO'#CwO+rQ`O'#CwOOQO'#Cv'#CvO+wQdO'#CvOOQO'#Cq'#CqO,UQ`O,59[O,^QfO,59[OOQR,59[,59[OOQO'#Cx'#CxO,eQ`O'#DPO,pQdO'#DPOOQO'#Dx'#DxO,zQdO'#DxO-XQ`O,59jO-aQfO,59jOOQR,59j,59jOOQR'#DS'#DSO-hQcO,59mO-sQgO'#DVO.TQ`O'#DVO.YQcO,59pOOQR'#DX'#DXO#|QfO'#DWO.hQcO'#DWOOQR,59v,59vO.yOWO,59vO/OOaO,59vO/WOaO,59vO/cQgO'#D_OOQR,59x,59xO0VQgO'#DaOOQR,59z,59zOOQP,59|,59|O0yOaO,59|O1ROaO,59|O1aOqO,59|OOQP-E7h-E7hO1oQgO,59XOOQP,59X,59XO2PQaO'#DeO2_QgO'#DeO2oQgO'#DkOOQP'#Dk'#DkQ)jQaOOO3PQdO'#CsOOQO,59^,59^O3kQdO'#CuOOQO,59`,59`OOQO,59c,59cO4VQdO,59cO4aQdO'#CzO4kQ`O'#CzOOQO,59b,59bOOQU,5:Q,5:QOOQR1G.v1G.vO4pQ`O1G.vOOQU-E7d-E7dO4xQdO,59kOOQO,59k,59kO5SQdO'#DQO5^Q`O'#DQOOQO,5:d,5:dOOQU,5:R,5:ROOQR1G/U1G/UO5cQ`O1G/UOOQU-E7e-E7eO5kQgO'#DhO5xQcO1G/XOOQR1G/X1G/XOOQR,59q,59qO6TQgO,59qO6eQdO'#DiO6lQgO'#DiO7PQcO1G/[OOQR1G/[1G/[OOQR,59r,59rO#|QfO,59rOOQR1G/b1G/bO7_OWO1G/bO7dOaO1G/bOOQR,59y,59yOOQR,59{,59{OOQP1G/h1G/hO7lOaO1G/hO7tOaO1G/hO8POaO1G/hOOQP1G.s1G.sO8_QgO,5:POOQP,5:P,5:POOQP,5:V,5:VOOQP-E7i-E7iOOQO,59_,59_OOQO,59a,59aOOQO1G.}1G.}OOQO,59f,59fO8oQdO,59fOOQR7+$b7+$bP,XQ`O'#DfOOQO1G/V1G/VOOQO,59l,59lO8yQdO,59lOOQR7+$p7+$pP9TQ`O'#DgOOQR'#DT'#DTOOQR,5:S,5:SOOQR-E7f-E7fOOQR7+$s7+$sOOQR1G/]1G/]O9YQgO'#DYO9jQ`O'#DYOOQR,5:T,5:TO#|QfO'#DZO9oQcO'#DZOOQR-E7g-E7gOOQR7+$v7+$vOOQR1G/^1G/^OOQR7+$|7+$|O:QOWO7+$|OOQP7+%S7+%SO:VOaO7+%SO:_OaO7+%SOOQP1G/k1G/kOOQO1G/Q1G/QOOQO1G/W1G/WOOQR,59t,59tO:jQgO,59tOOQR,59u,59uO#|QfO,59uOOQR<<Hh<<HhOOQP<<Hn<<HnO:zOaO<<HnOOQR1G/`1G/`OOQR1G/a1G/aOOQPAN>YAN>Y", stateData: ";S~O!fOS!gOS^OS~OP_OQbORSOTUOWROXROYYOZZO[XOcPOqQO!PVO!V[O!cTO~O`cO~P]OVkOWROXROYeOZfO[dOcPOmhOqQO~OboO~P!bOVtOWROXROYeOZfO[dOcPOmrOqQO~OpwO~P#WORSOTUOWROXROYYOZZO[XOcPOqQO!PVO!cTO~OSvP!avP!bvP~P#|OWROXROYeOZfO[dOcPOqQO~OmzO~P%OOm!OOUzP!azP!bzP!dzP~P#|O^!SO!b!QO!f!TO!g!RO~ORSOTUOWROXROcPOqQO!PVO!cTO~OY!UOP!QXQ!QX!V!QX!`!QXS!QX!a!QX!b!QXU!QXm!QX!d!QX~P&aO[!WOP!SXQ!SX!V!SX!`!SXS!SX!a!SX!b!SXU!SXm!SX!d!SX~P&aO^!ZO!W![O!b!YO!f!]O!g!YO~OP!_O!V[OQaX!`aX~OPaXQaX!VaX!`aX~P#|OP!bOQ!cO!V[O~OP_O!V[O~P#|OWROXROY!fOcPOqQObfXmfXofXpfX~OWROXRO[!hOcPOqQObhXmhXohXphX~ObeXmlXoeX~ObkXokX~P%OOm!kO~Om!lObnPonP~P%OOb!pOo!oO~Ob!pO~P!bOm!sOosXpsX~OosXpsX~P%OOm!uOotPptP~P%OOo!xOp!yO~Op!yO~P#WOS!|O!a#OO!b#OO~OUyX!ayX!byX!dyX~P#|Om#QO~OU#SO!a#UO!b#UO!d#RO~Om#WOUzX!azX!bzX!dzX~O]#XO~O!b#XO!g#YO~O^#ZO!b#XO!g#YO~OP!RXQ!RX!V!RX!`!RXS!RX!a!RX!b!RXU!RXm!RX!d!RX~P&aOP!TXQ!TX!V!TX!`!TXS!TX!a!TX!b!TXU!TXm!TX!d!TX~P&aO!b#^O!g#^O~O^#_O!b#^O!f#`O!g#^O~O^#_O!W#aO!b#^O!g#^O~OPaaQaa!Vaa!`aa~P#|OP#cO!V[OQ!XX!`!XX~OP!XXQ!XX!V!XX!`!XX~P#|OP_O!V[OQ!_X!`!_X~P#|OWROXROcPOqQObgXmgXogXpgX~OWROXROcPOqQObiXmiXoiXpiX~Obkaoka~P%OObnXonX~P%OOm#kO~Ob#lOo!oO~Oosapsa~P%OOotXptX~P%OOm#pO~Oo!xOp#qO~OSwP!awP!bwP~P#|OS!|O!a#vO!b#vO~OUya!aya!bya!dya~P#|Om#xO~P%OOm#{OU}P!a}P!b}P!d}P~P#|OU#SO!a$OO!b$OO!d#RO~O]$QO~O!b$QO!g$RO~O!b$SO!g$SO~O^$TO!b$SO!g$SO~O^$TO!b$SO!f$UO!g$SO~OP!XaQ!Xa!V!Xa!`!Xa~P#|Obnaona~P%OOotapta~P%OOo!xO~OU|X!a|X!b|X!d|X~P#|Om$ZO~Om$]OU}X!a}X!b}X!d}X~O]$^O~O!b$_O!g$_O~O^$`O!b$_O!g$_O~OU|a!a|a!b|a!d|a~P#|O!b$cO!g$cO~O", goto: ",]!mPPPPPPPPPPPPPPPPP!nPP!v#v#|$`#|$c$f$j$nP%VPPP!v%Y%^%a%{&O%a&R&U&X&_&b%aP&e&{&e'O'RPP']'a'g'm's'y(XPPPPPPPP(_)e*X+c,VUaObcR#e!c!{ROPQSTUXY_bcdehknrtvz!O!U!W!_!b!c!f!h!k!l!s!u!|#Q#R#S#W#c#k#p#x#{$Z$]QmPR!qnqfPQThknrtv!k!l!s!u#R#k#pR!gdR!ieTlPnTjPnSiPnSqQvQ{TQ!mkQ!trQ!vtR#y#RR!nkTsQvR!wt!RWOSUXY_bcz!O!U!W!_!b!c!|#Q#S#W#c#x#{$Z$]RySR#t!|R|TR|UQ!PUR#|#SR#z#RR#z#SyZOSU_bcz!O!_!b!c!|#Q#S#W#c#x#{$Z$]R!VXR!XYa]O^abc!a!c!eT!da!eQnPR!rnQvQR!{vQ!}yR#u!}Q#T|R#}#TW^Obc!cS!^^!aT!aa!eQ!eaR#f!eW`Obc!cQxSS}U#SQ!`_Q#PzQ#V!OQ#b!_Q#d!bQ#s!|Q#w#QQ$P#WQ$V#cQ$Y#xQ$[#{Q$a$ZR$b$]xZOSU_bcz!O!_!b!c!|#Q#S#W#c#x#{$Z$]Q!VXQ!XYQ#[!UR#]!W!QWOSUXY_bcz!O!U!W!_!b!c!|#Q#S#W#c#x#{$Z$]pfPQThknrtv!k!l!s!u#R#k#pQ!gdQ!ieQ#g!fR#h!hSgPn^pQTkrtv#RQ!jhQ#i!kQ#j!lQ#n!sQ#o!uQ$W#kR$X#pQuQR!zv", nodeNames: `\u26A0 DirectiveEnd DocEnd - - ? ? ? Literal QuotedLiteral Anchor Alias Tag BlockLiteralContent Comment Stream BOM Document ] [ FlowSequence Item Tagged Anchored Anchored Tagged FlowMapping Pair Key : Pair , } { FlowMapping Pair Pair BlockSequence Item Item BlockMapping Pair Pair Key Pair Pair BlockLiteral BlockLiteralHeader Tagged Anchored Anchored Tagged Directive DirectiveName DirectiveContent Document`, maxTerm: 74, context: B, nodeProps: [[`isolate`, -3, 8, 9, 14, ``], [`openedBy`, 18, `[`, 32, `{`], [`closedBy`, 19, `]`, 33, `}`]], propSources: [ue], skippedNodes: [0], repeatNodeCount: 6, tokenData: "-Y~RnOX#PXY$QYZ$]Z]#P]^$]^p#Ppq$Qqs#Pst$btu#Puv$yv|#P|}&e}![#P![!]'O!]!`#P!`!a'i!a!}#P!}#O*g#O#P#P#P#Q+Q#Q#o#P#o#p+k#p#q'i#q#r,U#r;'S#P;'S;=`#z<%l?HT#P?HT?HU,o?HUO#PQ#UU!WQOY#PZp#Ppq#hq;'S#P;'S;=`#z<%lO#PQ#kTOY#PZs#Pt;'S#P;'S;=`#z<%lO#PQ#}P;=`<%l#P~$VQ!f~XY$Qpq$Q~$bO!g~~$gS^~OY$bZ;'S$b;'S;=`$s<%lO$b~$vP;=`<%l$bR%OX!WQOX%kXY#PZ]%k]^#P^p%kpq#hq;'S%k;'S;=`&_<%lO%kR%rX!WQ!VPOX%kXY#PZ]%k]^#P^p%kpq#hq;'S%k;'S;=`&_<%lO%kR&bP;=`<%l%kR&lUoP!WQOY#PZp#Ppq#hq;'S#P;'S;=`#z<%lO#PR'VUmP!WQOY#PZp#Ppq#hq;'S#P;'S;=`#z<%lO#PR'p[!PP!WQOY#PZp#Ppq#hq{#P{|(f|}#P}!O(f!O!R#P!R![)p![;'S#P;'S;=`#z<%lO#PR(mW!PP!WQOY#PZp#Ppq#hq!R#P!R![)V![;'S#P;'S;=`#z<%lO#PR)^U!PP!WQOY#PZp#Ppq#hq;'S#P;'S;=`#z<%lO#PR)wY!PP!WQOY#PZp#Ppq#hq{#P{|)V|}#P}!O)V!O;'S#P;'S;=`#z<%lO#PR*nUcP!WQOY#PZp#Ppq#hq;'S#P;'S;=`#z<%lO#PR+XUbP!WQOY#PZp#Ppq#hq;'S#P;'S;=`#z<%lO#PR+rUqP!WQOY#PZp#Ppq#hq;'S#P;'S;=`#z<%lO#PR,]UpP!WQOY#PZp#Ppq#hq;'S#P;'S;=`#z<%lO#PR,vU`P!WQOY#PZp#Ppq#hq;'S#P;'S;=`#z<%lO#P", tokenizers: [H, U, ce, le, 0, 1], topRules: { Stream: [0, 15] }, tokenPrec: 0 }), fe = a.deserialize({ version: 14, states: "!vOQOPOOO]OPO'#C_OhOPO'#C^OOOO'#Cc'#CcOpOPO'#CaQOOOOOO{OPOOOOOO'#Cb'#CbO!WOPO'#C`O!`OPO,58xOOOO-E6a-E6aOOOO-E6`-E6`OOOO'#C_'#C_OOOO1G.d1G.d", stateData: `!h~OXPOYROWTP~OWVXXRXYRX~OYVOXSP~OXROYROWTX~OXROYROWTP~OYVOXSX~OX[O~OXY~`, goto: `vWPPX[beioRUOQQOR]XRXQTTOUQWQRZWSSOURYS`, nodeNames: `\u26A0 Document Frontmatter DashLine FrontmatterContent Body`, maxTerm: 10, skippedNodes: [0], repeatNodeCount: 2, tokenData: "$z~RXOYnYZ!^Z]n]^!^^}n}!O!i!O;'Sn;'S;=`!c<%lOn~qXOYnYZ!^Z]n]^!^^;'Sn;'S;=`!c<%l~n~On~~!^~!cOY~~!fP;=`<%ln~!lZOYnYZ!^Z]n]^!^^}n}!O#_!O;'Sn;'S;=`!c<%l~n~On~~!^~#bZOYnYZ!^Z]n]^!^^}n}!O$T!O;'Sn;'S;=`!c<%l~n~On~~!^~$WXOYnYZ$sZ]n]^$s^;'Sn;'S;=`!c<%l~n~On~~$s~$zOX~Y~", tokenizers: [0], topRules: { Document: [0, 1] }, tokenPrec: 67 }), $ = o.define({ name: `yaml`, parser: de.configure({ props: [e.add({ Stream: (e2) => {
  for (let t2 = e2.node.resolve(e2.pos, -1); t2 && t2.to >= e2.pos; t2 = t2.parent) {
    if (t2.name == `BlockLiteralContent` && t2.from < t2.to) return e2.baseIndentFor(t2);
    if (t2.name == `BlockLiteral`) return e2.baseIndentFor(t2) + e2.unit;
    if (t2.name == `BlockSequence` || t2.name == `BlockMapping`) return e2.column(t2.from, 1);
    if (t2.name == `QuotedLiteral`) return null;
    if (t2.name == `Literal`) {
      let n2 = e2.column(t2.from, 1);
      if (n2 == e2.lineIndent(t2.from, 1)) return n2;
      if (t2.to > e2.pos) return null;
    }
  }
  return null;
}, FlowMapping: r({ closing: `}` }), FlowSequence: r({ closing: `]` }) }), u.add({ "FlowMapping FlowSequence": ee, "Item Pair BlockLiteral": (e2, t2) => ({ from: t2.doc.lineAt(e2.from).to, to: e2.to }) })] }), languageData: { commentTokens: { line: `#` }, indentOnInput: /^\s*[\]\}]$/ } });
function pe() {
  return new c($);
}
var me = o.define({ name: `yaml-frontmatter`, parser: fe.configure({ props: [t({ DashLine: n.meta })] }) });
function he(e2) {
  let { language: t2, support: n2 } = e2.content instanceof c ? e2.content : { language: e2.content, support: [] };
  return new c(me.configure({ wrap: l((e3) => e3.name == `FrontmatterContent` ? { parser: $.parser } : e3.name == `Body` ? { parser: t2.parser } : null) }), n2);
}
export {
  pe as yaml,
  he as yamlFrontmatter,
  $ as yamlLanguage
};
