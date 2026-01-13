var e = { "+": [`conjugate`, `add`], "\u2212": [`negate`, `subtract`], "\xD7": [`signOf`, `multiply`], "\xF7": [`reciprocal`, `divide`], "\u2308": [`ceiling`, `greaterOf`], "\u230A": [`floor`, `lesserOf`], "\u2223": [`absolute`, `residue`], "\u2373": [`indexGenerate`, `indexOf`], "?": [`roll`, `deal`], "\u22C6": [`exponentiate`, `toThePowerOf`], "\u235F": [`naturalLog`, `logToTheBase`], "\u25CB": [`piTimes`, `circularFuncs`], "!": [`factorial`, `binomial`], "\u2339": [`matrixInverse`, `matrixDivide`], "<": [null, `lessThan`], "\u2264": [null, `lessThanOrEqual`], "=": [null, `equals`], ">": [null, `greaterThan`], "\u2265": [null, `greaterThanOrEqual`], "\u2260": [null, `notEqual`], "\u2261": [`depth`, `match`], "\u2262": [null, `notMatch`], "\u2208": [`enlist`, `membership`], "\u2377": [null, `find`], "\u222A": [`unique`, `union`], "\u2229": [null, `intersection`], "\u223C": [`not`, `without`], "\u2228": [null, `or`], "\u2227": [null, `and`], "\u2371": [null, `nor`], "\u2372": [null, `nand`], "\u2374": [`shapeOf`, `reshape`], ",": [`ravel`, `catenate`], "\u236A": [null, `firstAxisCatenate`], "\u233D": [`reverse`, `rotate`], "\u2296": [`axis1Reverse`, `axis1Rotate`], "\u2349": [`transpose`, null], "\u2191": [`first`, `take`], "\u2193": [null, `drop`], "\u2282": [`enclose`, `partitionWithAxis`], "\u2283": [`diclose`, `pick`], "\u2337": [null, `index`], "\u234B": [`gradeUp`, null], "\u2352": [`gradeDown`, null], "\u22A4": [`encode`, null], "\u22A5": [`decode`, null], "\u2355": [`format`, `formatByExample`], "\u234E": [`execute`, null], "\u22A3": [`stop`, `left`], "\u22A2": [`pass`, `right`] }, t = /[\.\/⌿⍀¨⍣]/, n = /⍬/, r = /[\+−×÷⌈⌊∣⍳\?⋆⍟○!⌹<≤=>≥≠≡≢∈⍷∪∩∼∨∧⍱⍲⍴,⍪⌽⊖⍉↑↓⊂⊃⌷⍋⍒⊤⊥⍕⍎⊣⊢]/, i = /←/, a = /[⍝#].*$/, o = function(e2) {
  var t2 = false;
  return function(n2) {
    return t2 = n2, n2 === e2 ? t2 === `\\` : true;
  };
};
const s = { name: `apl`, startState: function() {
  return { prev: false, func: false, op: false, string: false, escape: false };
}, token: function(s2, c) {
  var l;
  return s2.eatSpace() ? null : (l = s2.next(), l === `"` || l === `'` ? (s2.eatWhile(o(l)), s2.next(), c.prev = true, `string`) : /[\[{\(]/.test(l) ? (c.prev = false, null) : /[\]}\)]/.test(l) ? (c.prev = true, null) : n.test(l) ? (c.prev = false, `atom`) : /[¯\d]/.test(l) ? (c.func ? (c.func = false, c.prev = false) : c.prev = true, s2.eatWhile(/[\w\.]/), `number`) : t.test(l) || i.test(l) ? `operator` : r.test(l) ? (c.func = true, c.prev = false, e[l] ? `variableName.function.standard` : `variableName.function`) : a.test(l) ? (s2.skipToEnd(), `comment`) : l === `\u2218` && s2.peek() === `.` ? (s2.next(), `variableName.function`) : (s2.eatWhile(/[\w\$_]/), c.prev = true, `keyword`));
} };
export {
  s as apl
};
