import { i as Qe } from "./light-DXHUwBlv.js";
import { a9 as me, h as r, d as j, F as U, Q as ue, B as V, S as eo, t as J, b as P, q as oo, f as pe, i as xe, j as to, W as ro, p as Ce, a2 as no, k as de, w as ce } from "./index-CFhMVeLy.js";
import { I as D, i as be, q as Se, l as Y, m as z, R as fe, aa as io, B as ao, w as R, aI as so, aH as lo, P as X, X as $, u as K, v as uo, aC as co, aM as fo, j as ho, J as vo } from "./light-BiBhEq9V.js";
import { i as go } from "./light-Bv8ty0Js.js";
import { u as wo } from "./use-locale-DI1b3V3E.js";
import { N as mo } from "./Tooltip-D64Zfrhx.js";
function po(e, s, i, c) {
  for (var l = -1, f = e == null ? 0 : e.length; ++l < f; ) i = s(i, e[l], l, e);
  return i;
}
function xo(e) {
  return function(s) {
    return e == null ? void 0 : e[s];
  };
}
var Co = { \u00C0: "A", \u00C1: "A", \u00C2: "A", \u00C3: "A", \u00C4: "A", \u00C5: "A", \u00E0: "a", \u00E1: "a", \u00E2: "a", \u00E3: "a", \u00E4: "a", \u00E5: "a", \u00C7: "C", \u00E7: "c", \u00D0: "D", \u00F0: "d", \u00C8: "E", \u00C9: "E", \u00CA: "E", \u00CB: "E", \u00E8: "e", \u00E9: "e", \u00EA: "e", \u00EB: "e", \u00CC: "I", \u00CD: "I", \u00CE: "I", \u00CF: "I", \u00EC: "i", \u00ED: "i", \u00EE: "i", \u00EF: "i", \u00D1: "N", \u00F1: "n", \u00D2: "O", \u00D3: "O", \u00D4: "O", \u00D5: "O", \u00D6: "O", \u00D8: "O", \u00F2: "o", \u00F3: "o", \u00F4: "o", \u00F5: "o", \u00F6: "o", \u00F8: "o", \u00D9: "U", \u00DA: "U", \u00DB: "U", \u00DC: "U", \u00F9: "u", \u00FA: "u", \u00FB: "u", \u00FC: "u", \u00DD: "Y", \u00FD: "y", \u00FF: "y", \u00C6: "Ae", \u00E6: "ae", \u00DE: "Th", \u00FE: "th", \u00DF: "ss", \u0100: "A", \u0102: "A", \u0104: "A", \u0101: "a", \u0103: "a", \u0105: "a", \u0106: "C", \u0108: "C", \u010A: "C", \u010C: "C", \u0107: "c", \u0109: "c", \u010B: "c", \u010D: "c", \u010E: "D", \u0110: "D", \u010F: "d", \u0111: "d", \u0112: "E", \u0114: "E", \u0116: "E", \u0118: "E", \u011A: "E", \u0113: "e", \u0115: "e", \u0117: "e", \u0119: "e", \u011B: "e", \u011C: "G", \u011E: "G", \u0120: "G", \u0122: "G", \u011D: "g", \u011F: "g", \u0121: "g", \u0123: "g", \u0124: "H", \u0126: "H", \u0125: "h", \u0127: "h", \u0128: "I", \u012A: "I", \u012C: "I", \u012E: "I", \u0130: "I", \u0129: "i", \u012B: "i", \u012D: "i", \u012F: "i", \u0131: "i", \u0134: "J", \u0135: "j", \u0136: "K", \u0137: "k", \u0138: "k", \u0139: "L", \u013B: "L", \u013D: "L", \u013F: "L", \u0141: "L", \u013A: "l", \u013C: "l", \u013E: "l", \u0140: "l", \u0142: "l", \u0143: "N", \u0145: "N", \u0147: "N", \u014A: "N", \u0144: "n", \u0146: "n", \u0148: "n", \u014B: "n", \u014C: "O", \u014E: "O", \u0150: "O", \u014D: "o", \u014F: "o", \u0151: "o", \u0154: "R", \u0156: "R", \u0158: "R", \u0155: "r", \u0157: "r", \u0159: "r", \u015A: "S", \u015C: "S", \u015E: "S", \u0160: "S", \u015B: "s", \u015D: "s", \u015F: "s", \u0161: "s", \u0162: "T", \u0164: "T", \u0166: "T", \u0163: "t", \u0165: "t", \u0167: "t", \u0168: "U", \u016A: "U", \u016C: "U", \u016E: "U", \u0170: "U", \u0172: "U", \u0169: "u", \u016B: "u", \u016D: "u", \u016F: "u", \u0171: "u", \u0173: "u", \u0174: "W", \u0175: "w", \u0176: "Y", \u0177: "y", \u0178: "Y", \u0179: "Z", \u017B: "Z", \u017D: "Z", \u017A: "z", \u017C: "z", \u017E: "z", \u0132: "IJ", \u0133: "ij", \u0152: "Oe", \u0153: "oe", \u0149: "'n", \u017F: "s" }, bo = xo(Co), So = /[\xc0-\xd6\xd8-\xf6\xf8-\xff\u0100-\u017f]/g, Oo = "\\u0300-\\u036f", Lo = "\\ufe20-\\ufe2f", Io = "\\u20d0-\\u20ff", Mo = Oo + Lo + Io, Po = "[" + Mo + "]", Ro = RegExp(Po, "g");
function ko(e) {
  return e = me(e), e && e.replace(So, bo).replace(Ro, "");
}
var zo = /[^\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\x7f]+/g;
function yo(e) {
  return e.match(zo) || [];
}
var To = /[a-z][A-Z]|[A-Z]{2}[a-z]|[0-9][a-zA-Z]|[a-zA-Z][0-9]|[^a-zA-Z0-9 ]/;
function Ao(e) {
  return To.test(e);
}
var Oe = "\\ud800-\\udfff", Eo = "\\u0300-\\u036f", No = "\\ufe20-\\ufe2f", Do = "\\u20d0-\\u20ff", $o = Eo + No + Do, Le = "\\u2700-\\u27bf", Ie = "a-z\\xdf-\\xf6\\xf8-\\xff", Ho = "\\xac\\xb1\\xd7\\xf7", jo = "\\x00-\\x2f\\x3a-\\x40\\x5b-\\x60\\x7b-\\xbf", Zo = "\\u2000-\\u206f", _o = " \\t\\x0b\\f\\xa0\\ufeff\\n\\r\\u2028\\u2029\\u1680\\u180e\\u2000\\u2001\\u2002\\u2003\\u2004\\u2005\\u2006\\u2007\\u2008\\u2009\\u200a\\u202f\\u205f\\u3000", Me = "A-Z\\xc0-\\xd6\\xd8-\\xde", Bo = "\\ufe0e\\ufe0f", Pe = Ho + jo + Zo + _o, Re = "['\u2019]", he = "[" + Pe + "]", Wo = "[" + $o + "]", ke = "\\d+", Uo = "[" + Le + "]", ze = "[" + Ie + "]", ye = "[^" + Oe + Pe + ke + Le + Ie + Me + "]", Vo = "\\ud83c[\\udffb-\\udfff]", Yo = "(?:" + Wo + "|" + Vo + ")", Xo = "[^" + Oe + "]", Te = "(?:\\ud83c[\\udde6-\\uddff]){2}", Ae = "[\\ud800-\\udbff][\\udc00-\\udfff]", N = "[" + Me + "]", Fo = "\\u200d", ve = "(?:" + ze + "|" + ye + ")", Go = "(?:" + N + "|" + ye + ")", ge = "(?:" + Re + "(?:d|ll|m|re|s|t|ve))?", we = "(?:" + Re + "(?:D|LL|M|RE|S|T|VE))?", Ee = Yo + "?", Ne = "[" + Bo + "]?", qo = "(?:" + Fo + "(?:" + [Xo, Te, Ae].join("|") + ")" + Ne + Ee + ")*", Jo = "\\d*(?:1st|2nd|3rd|(?![123])\\dth)(?=\\b|[A-Z_])", Ko = "\\d*(?:1ST|2ND|3RD|(?![123])\\dTH)(?=\\b|[a-z_])", Qo = Ne + Ee + qo, et = "(?:" + [Uo, Te, Ae].join("|") + ")" + Qo, ot = RegExp([N + "?" + ze + "+" + ge + "(?=" + [he, N, "$"].join("|") + ")", Go + "+" + we + "(?=" + [he, N + ve, "$"].join("|") + ")", N + "?" + ve + "+" + ge, N + "+" + we, Ko, Jo, ke, et].join("|"), "g");
function tt(e) {
  return e.match(ot) || [];
}
function rt(e, s, i) {
  return e = me(e), s = s, s === void 0 ? Ao(e) ? tt(e) : yo(e) : e.match(s) || [];
}
var nt = "['\u2019]", it = RegExp(nt, "g");
function at(e) {
  return function(s) {
    return po(rt(ko(s).replace(it, "")), e, "");
  };
}
var st = at(function(e, s, i) {
  return e + (i ? "-" : "") + s.toLowerCase();
});
function lt(e, s) {
  if (!e) return;
  const i = document.createElement("a");
  i.href = e, s !== void 0 && (i.download = s), document.body.appendChild(i), i.click(), document.body.removeChild(i);
}
const ut = D("download", () => r("svg", { viewBox: "0 0 16 16", version: "1.1", xmlns: "http://www.w3.org/2000/svg" }, r("g", { stroke: "none", "stroke-width": "1", fill: "none", "fill-rule": "evenodd" }, r("g", { fill: "currentColor", "fill-rule": "nonzero" }, r("path", { d: "M3.5,13 L12.5,13 C12.7761424,13 13,13.2238576 13,13.5 C13,13.7454599 12.8231248,13.9496084 12.5898756,13.9919443 L12.5,14 L3.5,14 C3.22385763,14 3,13.7761424 3,13.5 C3,13.2545401 3.17687516,13.0503916 3.41012437,13.0080557 L3.5,13 L12.5,13 L3.5,13 Z M7.91012437,1.00805567 L8,1 C8.24545989,1 8.44960837,1.17687516 8.49194433,1.41012437 L8.5,1.5 L8.5,10.292 L11.1819805,7.6109127 C11.3555469,7.43734635 11.6249713,7.4180612 11.8198394,7.55305725 L11.8890873,7.6109127 C12.0626536,7.78447906 12.0819388,8.05390346 11.9469427,8.2487716 L11.8890873,8.31801948 L8.35355339,11.8535534 C8.17998704,12.0271197 7.91056264,12.0464049 7.7156945,11.9114088 L7.64644661,11.8535534 L4.1109127,8.31801948 C3.91565056,8.12275734 3.91565056,7.80617485 4.1109127,7.6109127 C4.28447906,7.43734635 4.55390346,7.4180612 4.7487716,7.55305725 L4.81801948,7.6109127 L7.5,10.292 L7.5,1.5 C7.5,1.25454011 7.67687516,1.05039163 7.91012437,1.00805567 L8,1 L7.91012437,1.00805567 Z" }))))), dt = j({ name: "ResizeSmall", render() {
  return r("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 20 20" }, r("g", { fill: "none" }, r("path", { d: "M5.5 4A1.5 1.5 0 0 0 4 5.5v1a.5.5 0 0 1-1 0v-1A2.5 2.5 0 0 1 5.5 3h1a.5.5 0 0 1 0 1h-1zM16 5.5A1.5 1.5 0 0 0 14.5 4h-1a.5.5 0 0 1 0-1h1A2.5 2.5 0 0 1 17 5.5v1a.5.5 0 0 1-1 0v-1zm0 9a1.5 1.5 0 0 1-1.5 1.5h-1a.5.5 0 0 0 0 1h1a2.5 2.5 0 0 0 2.5-2.5v-1a.5.5 0 0 0-1 0v1zm-12 0A1.5 1.5 0 0 0 5.5 16h1.25a.5.5 0 0 1 0 1H5.5A2.5 2.5 0 0 1 3 14.5v-1.25a.5.5 0 0 1 1 0v1.25zM8.5 7A1.5 1.5 0 0 0 7 8.5v3A1.5 1.5 0 0 0 8.5 13h3a1.5 1.5 0 0 0 1.5-1.5v-3A1.5 1.5 0 0 0 11.5 7h-3zM8 8.5a.5.5 0 0 1 .5-.5h3a.5.5 0 0 1 .5.5v3a.5.5 0 0 1-.5.5h-3a.5.5 0 0 1-.5-.5v-3z", fill: "currentColor" })));
} }), ct = D("rotateClockwise", () => r("svg", { viewBox: "0 0 20 20", fill: "none", xmlns: "http://www.w3.org/2000/svg" }, r("path", { d: "M3 10C3 6.13401 6.13401 3 10 3C13.866 3 17 6.13401 17 10C17 12.7916 15.3658 15.2026 13 16.3265V14.5C13 14.2239 12.7761 14 12.5 14C12.2239 14 12 14.2239 12 14.5V17.5C12 17.7761 12.2239 18 12.5 18H15.5C15.7761 18 16 17.7761 16 17.5C16 17.2239 15.7761 17 15.5 17H13.8758C16.3346 15.6357 18 13.0128 18 10C18 5.58172 14.4183 2 10 2C5.58172 2 2 5.58172 2 10C2 10.2761 2.22386 10.5 2.5 10.5C2.77614 10.5 3 10.2761 3 10Z", fill: "currentColor" }), r("path", { d: "M10 12C11.1046 12 12 11.1046 12 10C12 8.89543 11.1046 8 10 8C8.89543 8 8 8.89543 8 10C8 11.1046 8.89543 12 10 12ZM10 11C9.44772 11 9 10.5523 9 10C9 9.44772 9.44772 9 10 9C10.5523 9 11 9.44772 11 10C11 10.5523 10.5523 11 10 11Z", fill: "currentColor" }))), ft = D("rotateClockwise", () => r("svg", { viewBox: "0 0 20 20", fill: "none", xmlns: "http://www.w3.org/2000/svg" }, r("path", { d: "M17 10C17 6.13401 13.866 3 10 3C6.13401 3 3 6.13401 3 10C3 12.7916 4.63419 15.2026 7 16.3265V14.5C7 14.2239 7.22386 14 7.5 14C7.77614 14 8 14.2239 8 14.5V17.5C8 17.7761 7.77614 18 7.5 18H4.5C4.22386 18 4 17.7761 4 17.5C4 17.2239 4.22386 17 4.5 17H6.12422C3.66539 15.6357 2 13.0128 2 10C2 5.58172 5.58172 2 10 2C14.4183 2 18 5.58172 18 10C18 10.2761 17.7761 10.5 17.5 10.5C17.2239 10.5 17 10.2761 17 10Z", fill: "currentColor" }), r("path", { d: "M10 12C8.89543 12 8 11.1046 8 10C8 8.89543 8.89543 8 10 8C11.1046 8 12 8.89543 12 10C12 11.1046 11.1046 12 10 12ZM10 11C10.5523 11 11 10.5523 11 10C11 9.44772 10.5523 9 10 9C9.44772 9 9 9.44772 9 10C9 10.5523 9.44772 11 10 11Z", fill: "currentColor" }))), ht = D("zoomIn", () => r("svg", { viewBox: "0 0 20 20", fill: "none", xmlns: "http://www.w3.org/2000/svg" }, r("path", { d: "M11.5 8.5C11.5 8.22386 11.2761 8 11 8H9V6C9 5.72386 8.77614 5.5 8.5 5.5C8.22386 5.5 8 5.72386 8 6V8H6C5.72386 8 5.5 8.22386 5.5 8.5C5.5 8.77614 5.72386 9 6 9H8V11C8 11.2761 8.22386 11.5 8.5 11.5C8.77614 11.5 9 11.2761 9 11V9H11C11.2761 9 11.5 8.77614 11.5 8.5Z", fill: "currentColor" }), r("path", { d: "M8.5 3C11.5376 3 14 5.46243 14 8.5C14 9.83879 13.5217 11.0659 12.7266 12.0196L16.8536 16.1464C17.0488 16.3417 17.0488 16.6583 16.8536 16.8536C16.68 17.0271 16.4106 17.0464 16.2157 16.9114L16.1464 16.8536L12.0196 12.7266C11.0659 13.5217 9.83879 14 8.5 14C5.46243 14 3 11.5376 3 8.5C3 5.46243 5.46243 3 8.5 3ZM8.5 4C6.01472 4 4 6.01472 4 8.5C4 10.9853 6.01472 13 8.5 13C10.9853 13 13 10.9853 13 8.5C13 6.01472 10.9853 4 8.5 4Z", fill: "currentColor" }))), vt = D("zoomOut", () => r("svg", { viewBox: "0 0 20 20", fill: "none", xmlns: "http://www.w3.org/2000/svg" }, r("path", { d: "M11 8C11.2761 8 11.5 8.22386 11.5 8.5C11.5 8.77614 11.2761 9 11 9H6C5.72386 9 5.5 8.77614 5.5 8.5C5.5 8.22386 5.72386 8 6 8H11Z", fill: "currentColor" }), r("path", { d: "M14 8.5C14 5.46243 11.5376 3 8.5 3C5.46243 3 3 5.46243 3 8.5C3 11.5376 5.46243 14 8.5 14C9.83879 14 11.0659 13.5217 12.0196 12.7266L16.1464 16.8536L16.2157 16.9114C16.4106 17.0464 16.68 17.0271 16.8536 16.8536C17.0488 16.6583 17.0488 16.3417 16.8536 16.1464L12.7266 12.0196C13.5217 11.0659 14 9.83879 14 8.5ZM4 8.5C4 6.01472 6.01472 4 8.5 4C10.9853 4 13 6.01472 13 8.5C13 10.9853 10.9853 13 8.5 13C6.01472 13 4 10.9853 4 8.5Z", fill: "currentColor" }))), gt = Qe && "loading" in document.createElement("img");
function wt(e = {}) {
  var s;
  const { root: i = null } = e;
  return { hash: `${e.rootMargin || "0px 0px 0px 0px"}-${Array.isArray(e.threshold) ? e.threshold.join(",") : (s = e.threshold) !== null && s !== void 0 ? s : "0"}`, options: Object.assign(Object.assign({}, e), { root: (typeof i == "string" ? document.querySelector(i) : i) || document.documentElement }) };
}
const F = /* @__PURE__ */ new WeakMap(), G = /* @__PURE__ */ new WeakMap(), q = /* @__PURE__ */ new WeakMap(), mt = (e, s, i) => {
  if (!e) return () => {
  };
  const c = wt(s), { root: l } = c.options;
  let f;
  const w = F.get(l);
  w ? f = w : (f = /* @__PURE__ */ new Map(), F.set(l, f));
  let g, d;
  f.has(c.hash) ? (d = f.get(c.hash), d[1].has(e) || (g = d[0], d[1].add(e), g.observe(e))) : (g = new IntersectionObserver((m) => {
    m.forEach((p) => {
      if (p.isIntersecting) {
        const x = G.get(p.target), C = q.get(p.target);
        x && x(), C && (C.value = true);
      }
    });
  }, c.options), g.observe(e), d = [g, /* @__PURE__ */ new Set([e])], f.set(c.hash, d));
  let n = false;
  const u = () => {
    n || (G.delete(e), q.delete(e), n = true, d[1].has(e) && (d[0].unobserve(e), d[1].delete(e)), d[1].size <= 0 && f.delete(c.hash), f.size || F.delete(l));
  };
  return G.set(e, u), q.set(e, i), u;
};
function pt() {
  return r("svg", { viewBox: "0 0 20 20", fill: "none", xmlns: "http://www.w3.org/2000/svg" }, r("path", { d: "M6 5C5.75454 5 5.55039 5.17688 5.50806 5.41012L5.5 5.5V14.5C5.5 14.7761 5.72386 15 6 15C6.24546 15 6.44961 14.8231 6.49194 14.5899L6.5 14.5V5.5C6.5 5.22386 6.27614 5 6 5ZM13.8536 5.14645C13.68 4.97288 13.4106 4.9536 13.2157 5.08859L13.1464 5.14645L8.64645 9.64645C8.47288 9.82001 8.4536 10.0894 8.58859 10.2843L8.64645 10.3536L13.1464 14.8536C13.3417 15.0488 13.6583 15.0488 13.8536 14.8536C14.0271 14.68 14.0464 14.4106 13.9114 14.2157L13.8536 14.1464L9.70711 10L13.8536 5.85355C14.0488 5.65829 14.0488 5.34171 13.8536 5.14645Z", fill: "currentColor" }));
}
function xt() {
  return r("svg", { viewBox: "0 0 20 20", fill: "none", xmlns: "http://www.w3.org/2000/svg" }, r("path", { d: "M13.5 5C13.7455 5 13.9496 5.17688 13.9919 5.41012L14 5.5V14.5C14 14.7761 13.7761 15 13.5 15C13.2545 15 13.0504 14.8231 13.0081 14.5899L13 14.5V5.5C13 5.22386 13.2239 5 13.5 5ZM5.64645 5.14645C5.82001 4.97288 6.08944 4.9536 6.28431 5.08859L6.35355 5.14645L10.8536 9.64645C11.0271 9.82001 11.0464 10.0894 10.9114 10.2843L10.8536 10.3536L6.35355 14.8536C6.15829 15.0488 5.84171 15.0488 5.64645 14.8536C5.47288 14.68 5.4536 14.4106 5.58859 14.2157L5.64645 14.1464L9.79289 10L5.64645 5.85355C5.45118 5.65829 5.45118 5.34171 5.64645 5.14645Z", fill: "currentColor" }));
}
function Ct() {
  return r("svg", { viewBox: "0 0 20 20", fill: "none", xmlns: "http://www.w3.org/2000/svg" }, r("path", { d: "M4.089 4.216l.057-.07a.5.5 0 0 1 .638-.057l.07.057L10 9.293l5.146-5.147a.5.5 0 0 1 .638-.057l.07.057a.5.5 0 0 1 .057.638l-.057.07L10.707 10l5.147 5.146a.5.5 0 0 1 .057.638l-.057.07a.5.5 0 0 1-.638.057l-.07-.057L10 10.707l-5.146 5.147a.5.5 0 0 1-.638.057l-.07-.057a.5.5 0 0 1-.057-.638l.057-.07L9.293 10L4.146 4.854a.5.5 0 0 1-.057-.638l.057-.07l-.057.07z", fill: "currentColor" }));
}
const Q = Object.assign(Object.assign({}, Se.props), { onPreviewPrev: Function, onPreviewNext: Function, showToolbar: { type: Boolean, default: true }, showToolbarTooltip: Boolean, renderToolbar: Function }), De = be("n-image"), bt = Y([Y("body >", [z("image-container", "position: fixed;")]), z("image-preview-container", `
 position: fixed;
 left: 0;
 right: 0;
 top: 0;
 bottom: 0;
 display: flex;
 `), z("image-preview-overlay", `
 z-index: -1;
 position: absolute;
 left: 0;
 right: 0;
 top: 0;
 bottom: 0;
 background: rgba(0, 0, 0, .3);
 `, [fe()]), z("image-preview-toolbar", `
 z-index: 1;
 position: absolute;
 left: 50%;
 transform: translateX(-50%);
 border-radius: var(--n-toolbar-border-radius);
 height: 48px;
 bottom: 40px;
 padding: 0 12px;
 background: var(--n-toolbar-color);
 box-shadow: var(--n-toolbar-box-shadow);
 color: var(--n-toolbar-icon-color);
 transition: color .3s var(--n-bezier);
 display: flex;
 align-items: center;
 `, [z("base-icon", `
 padding: 0 8px;
 font-size: 28px;
 cursor: pointer;
 `), fe()]), z("image-preview-wrapper", `
 position: absolute;
 left: 0;
 right: 0;
 top: 0;
 bottom: 0;
 display: flex;
 pointer-events: none;
 `, [io()]), z("image-preview", `
 user-select: none;
 -webkit-user-select: none;
 pointer-events: all;
 margin: auto;
 max-height: calc(100vh - 32px);
 max-width: calc(100vw - 32px);
 transition: transform .3s var(--n-bezier);
 `), z("image", `
 display: inline-flex;
 max-height: 100%;
 max-width: 100%;
 `, [ao("preview-disabled", `
 cursor: pointer;
 `), Y("img", `
 border-radius: inherit;
 `)])]), H = 32, $e = j({ name: "ImagePreview", props: Object.assign(Object.assign({}, Q), { onNext: Function, onPrev: Function, clsPrefix: { type: String, required: true } }), setup(e) {
  const s = Se("Image", "-image", bt, go, e, J(e, "clsPrefix"));
  let i = null;
  const c = P(null), l = P(null), f = P(void 0), w = P(false), g = P(false), { localeRef: d } = wo("Image");
  function n() {
    const { value: o } = l;
    if (!i || !o) return;
    const { style: a } = o, t = i.getBoundingClientRect(), h = t.left + t.width / 2, v = t.top + t.height / 2;
    a.transformOrigin = `${h}px ${v}px`;
  }
  function u(o) {
    var a, t;
    switch (o.key) {
      case " ":
        o.preventDefault();
        break;
      case "ArrowLeft":
        (a = e.onPrev) === null || a === void 0 || a.call(e);
        break;
      case "ArrowRight":
        (t = e.onNext) === null || t === void 0 || t.call(e);
        break;
      case "Escape":
        ae();
        break;
    }
  }
  oo(w, (o) => {
    o ? X("keydown", document, u) : $("keydown", document, u);
  }), pe(() => {
    $("keydown", document, u);
  });
  let m = 0, p = 0, x = 0, C = 0, y = 0, Z = 0, ee = 0, oe = 0, _ = false;
  function te(o) {
    const { clientX: a, clientY: t } = o;
    x = a - m, C = t - p, fo(I);
  }
  function je(o) {
    const { mouseUpClientX: a, mouseUpClientY: t, mouseDownClientX: h, mouseDownClientY: v } = o, O = h - a, L = v - t, M = `vertical${L > 0 ? "Top" : "Bottom"}`, k = `horizontal${O > 0 ? "Left" : "Right"}`;
    return { moveVerticalDirection: M, moveHorizontalDirection: k, deltaHorizontal: O, deltaVertical: L };
  }
  function re(o) {
    const { value: a } = c;
    if (!a) return { offsetX: 0, offsetY: 0 };
    const t = a.getBoundingClientRect(), { moveVerticalDirection: h, moveHorizontalDirection: v, deltaHorizontal: O, deltaVertical: L } = o || {};
    let M = 0, k = 0;
    return t.width <= window.innerWidth ? M = 0 : t.left > 0 ? M = (t.width - window.innerWidth) / 2 : t.right < window.innerWidth ? M = -(t.width - window.innerWidth) / 2 : v === "horizontalRight" ? M = Math.min((t.width - window.innerWidth) / 2, y - (O ?? 0)) : M = Math.max(-((t.width - window.innerWidth) / 2), y - (O ?? 0)), t.height <= window.innerHeight ? k = 0 : t.top > 0 ? k = (t.height - window.innerHeight) / 2 : t.bottom < window.innerHeight ? k = -(t.height - window.innerHeight) / 2 : h === "verticalBottom" ? k = Math.min((t.height - window.innerHeight) / 2, Z - (L ?? 0)) : k = Math.max(-((t.height - window.innerHeight) / 2), Z - (L ?? 0)), { offsetX: M, offsetY: k };
  }
  function ne(o) {
    $("mousemove", document, te), $("mouseup", document, ne);
    const { clientX: a, clientY: t } = o;
    _ = false;
    const h = je({ mouseUpClientX: a, mouseUpClientY: t, mouseDownClientX: ee, mouseDownClientY: oe }), v = re(h);
    x = v.offsetX, C = v.offsetY, I();
  }
  const b = xe(De, null);
  function Ze(o) {
    var a, t;
    if ((t = (a = b == null ? void 0 : b.previewedImgPropsRef.value) === null || a === void 0 ? void 0 : a.onMousedown) === null || t === void 0 || t.call(a, o), o.button !== 0) return;
    const { clientX: h, clientY: v } = o;
    _ = true, m = h - x, p = v - C, y = x, Z = C, ee = h, oe = v, I(), X("mousemove", document, te), X("mouseup", document, ne);
  }
  const B = 1.5;
  let T = 0, S = 1, A = 0;
  function _e(o) {
    var a, t;
    (t = (a = b == null ? void 0 : b.previewedImgPropsRef.value) === null || a === void 0 ? void 0 : a.onDblclick) === null || t === void 0 || t.call(a, o);
    const h = ie();
    S = S === h ? 1 : h, I();
  }
  function W() {
    S = 1, T = 0;
  }
  function Be() {
    var o;
    W(), A = 0, (o = e.onPrev) === null || o === void 0 || o.call(e);
  }
  function We() {
    var o;
    W(), A = 0, (o = e.onNext) === null || o === void 0 || o.call(e);
  }
  function Ue() {
    A -= 90, I();
  }
  function Ve() {
    A += 90, I();
  }
  function Ye() {
    const { value: o } = c;
    if (!o) return 1;
    const { innerWidth: a, innerHeight: t } = window, h = Math.max(1, o.naturalHeight / (t - H)), v = Math.max(1, o.naturalWidth / (a - H));
    return Math.max(3, h * 2, v * 2);
  }
  function ie() {
    const { value: o } = c;
    if (!o) return 1;
    const { innerWidth: a, innerHeight: t } = window, h = o.naturalHeight / (t - H), v = o.naturalWidth / (a - H);
    return h < 1 && v < 1 ? 1 : Math.max(h, v);
  }
  function Xe() {
    const o = Ye();
    S < o && (T += 1, S = Math.min(o, Math.pow(B, T)), I());
  }
  function Fe() {
    if (S > 0.5) {
      const o = S;
      T -= 1, S = Math.max(0.5, Math.pow(B, T));
      const a = o - S;
      I(false);
      const t = re();
      S += a, I(false), S -= a, x = t.offsetX, C = t.offsetY, I();
    }
  }
  function Ge() {
    const o = f.value;
    o && lt(o, void 0);
  }
  function I(o = true) {
    var a;
    const { value: t } = c;
    if (!t) return;
    const { style: h } = t, v = ro((a = b == null ? void 0 : b.previewedImgPropsRef.value) === null || a === void 0 ? void 0 : a.style);
    let O = "";
    if (typeof v == "string") O = `${v};`;
    else for (const M in v) O += `${st(M)}: ${v[M]};`;
    const L = `transform-origin: center; transform: translateX(${x}px) translateY(${C}px) rotate(${A}deg) scale(${S});`;
    _ ? h.cssText = `${O}cursor: grabbing; transition: none;${L}` : h.cssText = `${O}cursor: grab;${L}${o ? "" : "transition: none;"}`, o || t.offsetHeight;
  }
  function ae() {
    w.value = !w.value, g.value = true;
  }
  function qe() {
    S = ie(), T = Math.ceil(Math.log(S) / Math.log(B)), x = 0, C = 0, I();
  }
  const Je = { setPreviewSrc: (o) => {
    f.value = o;
  }, setThumbnailEl: (o) => {
    i = o;
  }, toggleShow: ae };
  function Ke(o, a) {
    if (e.showToolbarTooltip) {
      const { value: t } = s;
      return r(mo, { to: false, theme: t.peers.Tooltip, themeOverrides: t.peerOverrides.Tooltip, keepAliveOnHover: false }, { default: () => d.value[a], trigger: () => o });
    } else return o;
  }
  const se = to(() => {
    const { common: { cubicBezierEaseInOut: o }, self: { toolbarIconColor: a, toolbarBorderRadius: t, toolbarBoxShadow: h, toolbarColor: v } } = s.value;
    return { "--n-bezier": o, "--n-toolbar-icon-color": a, "--n-toolbar-color": v, "--n-toolbar-border-radius": t, "--n-toolbar-box-shadow": h };
  }), { inlineThemeDisabled: le } = K(), E = le ? uo("image-preview", void 0, se, e) : void 0;
  return Object.assign({ previewRef: c, previewWrapperRef: l, previewSrc: f, show: w, appear: co(), displayed: g, previewedImgProps: b == null ? void 0 : b.previewedImgPropsRef, handleWheel(o) {
    o.preventDefault();
  }, handlePreviewMousedown: Ze, handlePreviewDblclick: _e, syncTransformOrigin: n, handleAfterLeave: () => {
    W(), A = 0, g.value = false;
  }, handleDragStart: (o) => {
    var a, t;
    (t = (a = b == null ? void 0 : b.previewedImgPropsRef.value) === null || a === void 0 ? void 0 : a.onDragstart) === null || t === void 0 || t.call(a, o), o.preventDefault();
  }, zoomIn: Xe, zoomOut: Fe, handleDownloadClick: Ge, rotateCounterclockwise: Ue, rotateClockwise: Ve, handleSwitchPrev: Be, handleSwitchNext: We, withTooltip: Ke, resizeToOrignalImageSize: qe, cssVars: le ? void 0 : se, themeClass: E == null ? void 0 : E.themeClass, onRender: E == null ? void 0 : E.onRender }, Je);
}, render() {
  var e, s;
  const { clsPrefix: i, renderToolbar: c, withTooltip: l } = this, f = l(r(R, { clsPrefix: i, onClick: this.handleSwitchPrev }, { default: pt }), "tipPrevious"), w = l(r(R, { clsPrefix: i, onClick: this.handleSwitchNext }, { default: xt }), "tipNext"), g = l(r(R, { clsPrefix: i, onClick: this.rotateCounterclockwise }, { default: () => r(ft, null) }), "tipCounterclockwise"), d = l(r(R, { clsPrefix: i, onClick: this.rotateClockwise }, { default: () => r(ct, null) }), "tipClockwise"), n = l(r(R, { clsPrefix: i, onClick: this.resizeToOrignalImageSize }, { default: () => r(dt, null) }), "tipOriginalSize"), u = l(r(R, { clsPrefix: i, onClick: this.zoomOut }, { default: () => r(vt, null) }), "tipZoomOut"), m = l(r(R, { clsPrefix: i, onClick: this.handleDownloadClick }, { default: () => r(ut, null) }), "tipDownload"), p = l(r(R, { clsPrefix: i, onClick: this.toggleShow }, { default: Ct }), "tipClose"), x = l(r(R, { clsPrefix: i, onClick: this.zoomIn }, { default: () => r(ht, null) }), "tipZoomIn");
  return r(U, null, (s = (e = this.$slots).default) === null || s === void 0 ? void 0 : s.call(e), r(so, { show: this.show }, { default: () => {
    var C;
    return this.show || this.displayed ? ((C = this.onRender) === null || C === void 0 || C.call(this), ue(r("div", { class: [`${i}-image-preview-container`, this.themeClass], style: this.cssVars, onWheel: this.handleWheel }, r(V, { name: "fade-in-transition", appear: this.appear }, { default: () => this.show ? r("div", { class: `${i}-image-preview-overlay`, onClick: this.toggleShow }) : null }), this.showToolbar ? r(V, { name: "fade-in-transition", appear: this.appear }, { default: () => this.show ? r("div", { class: `${i}-image-preview-toolbar` }, c ? c({ nodes: { prev: f, next: w, rotateCounterclockwise: g, rotateClockwise: d, resizeToOriginalSize: n, zoomOut: u, zoomIn: x, download: m, close: p } }) : r(U, null, this.onPrev ? r(U, null, f, w) : null, g, d, n, u, x, m, p)) : null }) : null, r(V, { name: "fade-in-scale-up-transition", onAfterLeave: this.handleAfterLeave, appear: this.appear, onEnter: this.syncTransformOrigin, onBeforeLeave: this.syncTransformOrigin }, { default: () => {
      const { previewedImgProps: y = {} } = this;
      return ue(r("div", { class: `${i}-image-preview-wrapper`, ref: "previewWrapperRef" }, r("img", Object.assign({}, y, { draggable: false, onMousedown: this.handlePreviewMousedown, onDblclick: this.handlePreviewDblclick, class: [`${i}-image-preview`, y.class], key: this.previewSrc, src: this.previewSrc, ref: "previewRef", onDragstart: this.handleDragStart }))), [[eo, this.show]]);
    } })), [[lo, { enabled: this.show }]])) : null;
  } }));
} }), He = be("n-image-group"), St = Q, zt = j({ name: "ImageGroup", props: St, setup(e) {
  let s;
  const { mergedClsPrefixRef: i } = K(e), c = `c${ho()}`, l = no(), f = P(null), w = (d) => {
    var n;
    s = d, (n = f.value) === null || n === void 0 || n.setPreviewSrc(d);
  };
  function g(d) {
    var n, u;
    if (!(l == null ? void 0 : l.proxy)) return;
    const p = l.proxy.$el.parentElement.querySelectorAll(`[data-group-id=${c}]:not([data-error=true])`);
    if (!p.length) return;
    const x = Array.from(p).findIndex((C) => C.dataset.previewSrc === s);
    ~x ? w(p[(x + d + p.length) % p.length].dataset.previewSrc) : w(p[0].dataset.previewSrc), d === 1 ? (n = e.onPreviewNext) === null || n === void 0 || n.call(e) : (u = e.onPreviewPrev) === null || u === void 0 || u.call(e);
  }
  return Ce(He, { mergedClsPrefixRef: i, setPreviewSrc: w, setThumbnailEl: (d) => {
    var n;
    (n = f.value) === null || n === void 0 || n.setThumbnailEl(d);
  }, toggleShow: () => {
    var d;
    (d = f.value) === null || d === void 0 || d.toggleShow();
  }, groupId: c, renderToolbarRef: J(e, "renderToolbar") }), { mergedClsPrefix: i, previewInstRef: f, next: () => {
    g(1);
  }, prev: () => {
    g(-1);
  } };
}, render() {
  return r($e, { theme: this.theme, themeOverrides: this.themeOverrides, clsPrefix: this.mergedClsPrefix, ref: "previewInstRef", onPrev: this.prev, onNext: this.next, showToolbar: this.showToolbar, showToolbarTooltip: this.showToolbarTooltip, renderToolbar: this.renderToolbar }, this.$slots);
} }), Ot = Object.assign({ alt: String, height: [String, Number], imgProps: Object, previewedImgProps: Object, lazy: Boolean, intersectionObserverOptions: Object, objectFit: { type: String, default: "fill" }, previewSrc: String, fallbackSrc: String, width: [String, Number], src: String, previewDisabled: Boolean, loadDescription: String, onError: Function, onLoad: Function }, Q), yt = j({ name: "Image", props: Ot, slots: Object, inheritAttrs: false, setup(e) {
  const s = P(null), i = P(false), c = P(null), l = xe(He, null), { mergedClsPrefixRef: f } = l || K(e), w = { click: () => {
    if (e.previewDisabled || i.value) return;
    const n = e.previewSrc || e.src;
    if (l) {
      l.setPreviewSrc(n), l.setThumbnailEl(s.value), l.toggleShow();
      return;
    }
    const { value: u } = c;
    u && (u.setPreviewSrc(n), u.setThumbnailEl(s.value), u.toggleShow());
  } }, g = P(!e.lazy);
  de(() => {
    var n;
    (n = s.value) === null || n === void 0 || n.setAttribute("data-group-id", (l == null ? void 0 : l.groupId) || "");
  }), de(() => {
    if (e.lazy && e.intersectionObserverOptions) {
      let n;
      const u = ce(() => {
        n == null ? void 0 : n(), n = void 0, n = mt(s.value, e.intersectionObserverOptions, g);
      });
      pe(() => {
        u(), n == null ? void 0 : n();
      });
    }
  }), ce(() => {
    var n;
    e.src || ((n = e.imgProps) === null || n === void 0 || n.src), i.value = false;
  });
  const d = P(false);
  return Ce(De, { previewedImgPropsRef: J(e, "previewedImgProps") }), Object.assign({ mergedClsPrefix: f, groupId: l == null ? void 0 : l.groupId, previewInstRef: c, imageRef: s, showError: i, shouldStartLoading: g, loaded: d, mergedOnClick: (n) => {
    var u, m;
    w.click(), (m = (u = e.imgProps) === null || u === void 0 ? void 0 : u.onClick) === null || m === void 0 || m.call(u, n);
  }, mergedOnError: (n) => {
    if (!g.value) return;
    i.value = true;
    const { onError: u, imgProps: { onError: m } = {} } = e;
    u == null ? void 0 : u(n), m == null ? void 0 : m(n);
  }, mergedOnLoad: (n) => {
    const { onLoad: u, imgProps: { onLoad: m } = {} } = e;
    u == null ? void 0 : u(n), m == null ? void 0 : m(n), d.value = true;
  } }, w);
}, render() {
  var e, s;
  const { mergedClsPrefix: i, imgProps: c = {}, loaded: l, $attrs: f, lazy: w } = this, g = vo(this.$slots.error, () => []), d = (s = (e = this.$slots).placeholder) === null || s === void 0 ? void 0 : s.call(e), n = this.src || c.src, u = this.showError && g.length ? g : r("img", Object.assign(Object.assign({}, c), { ref: "imageRef", width: this.width || c.width, height: this.height || c.height, src: this.showError ? this.fallbackSrc : w && this.intersectionObserverOptions ? this.shouldStartLoading ? n : void 0 : n, alt: this.alt || c.alt, "aria-label": this.alt || c.alt, onClick: this.mergedOnClick, onError: this.mergedOnError, onLoad: this.mergedOnLoad, loading: gt && w && !this.intersectionObserverOptions ? "lazy" : "eager", style: [c.style || "", d && !l ? { height: "0", width: "0", visibility: "hidden" } : "", { objectFit: this.objectFit }], "data-error": this.showError, "data-preview-src": this.previewSrc || this.src }));
  return r("div", Object.assign({}, f, { role: "none", class: [f.class, `${i}-image`, (this.previewDisabled || this.showError) && `${i}-image--preview-disabled`] }), this.groupId ? u : r($e, { theme: this.theme, themeOverrides: this.themeOverrides, clsPrefix: i, ref: "previewInstRef", showToolbar: this.showToolbar, showToolbarTooltip: this.showToolbarTooltip, renderToolbar: this.renderToolbar }, { default: () => u }), !l && d);
} });
export {
  ut as D,
  yt as N,
  zt as a,
  lt as d
};
