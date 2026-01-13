function e(e2) {
  var t2 = [];
  return e2.split(` `).forEach(function(e3) {
    t2.push({ name: e3 });
  }), t2;
}
var t = e(`INVERT AND OR XOR 2* 2/ LSHIFT RSHIFT 0= = 0< < > U< MIN MAX 2DROP 2DUP 2OVER 2SWAP ?DUP DEPTH DROP DUP OVER ROT SWAP >R R> R@ + - 1+ 1- ABS NEGATE S>D * M* UM* FM/MOD SM/REM UM/MOD */ */MOD / /MOD MOD HERE , @ ! CELL+ CELLS C, C@ C! CHARS 2@ 2! ALIGN ALIGNED +! ALLOT CHAR [CHAR] [ ] BL FIND EXECUTE IMMEDIATE COUNT LITERAL STATE ; DOES> >BODY EVALUATE SOURCE >IN <# # #S #> HOLD SIGN BASE >NUMBER HEX DECIMAL FILL MOVE . CR EMIT SPACE SPACES TYPE U. .R U.R ACCEPT TRUE FALSE <> U> 0<> 0> NIP TUCK ROLL PICK 2>R 2R@ 2R> WITHIN UNUSED MARKER I J TO COMPILE, [COMPILE] SAVE-INPUT RESTORE-INPUT PAD ERASE 2LITERAL DNEGATE D- D+ D0< D0= D2* D2/ D< D= DMAX DMIN D>S DABS M+ M*/ D. D.R 2ROT DU< CATCH THROW FREE RESIZE ALLOCATE CS-PICK CS-ROLL GET-CURRENT SET-CURRENT FORTH-WORDLIST GET-ORDER SET-ORDER PREVIOUS SEARCH-WORDLIST WORDLIST FIND ALSO ONLY FORTH DEFINITIONS ORDER -TRAILING /STRING SEARCH COMPARE CMOVE CMOVE> BLANK SLITERAL`), n = e(`IF ELSE THEN BEGIN WHILE REPEAT UNTIL RECURSE [IF] [ELSE] [THEN] ?DO DO LOOP +LOOP UNLOOP LEAVE EXIT AGAIN CASE OF ENDOF ENDCASE`);
function r(e2, t2) {
  var n2;
  for (n2 = e2.length - 1; n2 >= 0; n2--) if (e2[n2].name === t2.toUpperCase()) return e2[n2];
}
const i = { name: `forth`, startState: function() {
  return { state: ``, base: 10, coreWordList: t, immediateWordList: n, wordList: [] };
}, token: function(e2, t2) {
  var n2;
  if (e2.eatSpace()) return null;
  if (t2.state === ``) {
    if (e2.match(/^(\]|:NONAME)(\s|$)/i)) return t2.state = ` compilation`, `builtin`;
    if (n2 = e2.match(/^(\:)\s+(\S+)(\s|$)+/), n2) return t2.wordList.push({ name: n2[2].toUpperCase() }), t2.state = ` compilation`, `def`;
    if (n2 = e2.match(/^(VARIABLE|2VARIABLE|CONSTANT|2CONSTANT|CREATE|POSTPONE|VALUE|WORD)\s+(\S+)(\s|$)+/i), n2) return t2.wordList.push({ name: n2[2].toUpperCase() }), `def`;
    if (n2 = e2.match(/^(\'|\[\'\])\s+(\S+)(\s|$)+/), n2) return `builtin`;
  } else {
    if (e2.match(/^(\;|\[)(\s)/)) return t2.state = ``, e2.backUp(1), `builtin`;
    if (e2.match(/^(\;|\[)($)/)) return t2.state = ``, `builtin`;
    if (e2.match(/^(POSTPONE)\s+\S+(\s|$)+/)) return `builtin`;
  }
  if (n2 = e2.match(/^(\S+)(\s+|$)/), n2) return r(t2.wordList, n2[1]) === void 0 ? n2[1] === `\\` ? (e2.skipToEnd(), `comment`) : r(t2.coreWordList, n2[1]) === void 0 ? r(t2.immediateWordList, n2[1]) === void 0 ? n2[1] === `(` ? (e2.eatWhile(function(e3) {
    return e3 !== `)`;
  }), e2.eat(`)`), `comment`) : n2[1] === `.(` ? (e2.eatWhile(function(e3) {
    return e3 !== `)`;
  }), e2.eat(`)`), `string`) : n2[1] === `S"` || n2[1] === `."` || n2[1] === `C"` ? (e2.eatWhile(function(e3) {
    return e3 !== `"`;
  }), e2.eat(`"`), `string`) : n2[1] - 68719476735 ? `number` : `atom` : `keyword` : `builtin` : `variable`;
} };
export {
  i as forth
};
