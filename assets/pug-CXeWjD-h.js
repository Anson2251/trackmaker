import { javascript as e } from "./javascript-BHcyjvl3.js";
var t = { "{": `}`, "(": `)`, "[": `]` };
function n(e2) {
  if (typeof e2 != `object`) return e2;
  let t3 = {};
  for (let n2 in e2) {
    let r2 = e2[n2];
    t3[n2] = r2 instanceof Array ? r2.slice() : r2;
  }
  return t3;
}
var r = class t2 {
  constructor(t3) {
    this.indentUnit = t3, this.javaScriptLine = false, this.javaScriptLineExcludesColon = false, this.javaScriptArguments = false, this.javaScriptArgumentsDepth = 0, this.isInterpolating = false, this.interpolationNesting = 0, this.jsState = e.startState(t3), this.restOfLine = ``, this.isIncludeFiltered = false, this.isEach = false, this.lastTag = ``, this.isAttrs = false, this.attrsNest = [], this.inAttributeName = true, this.attributeIsType = false, this.attrValue = ``, this.indentOf = 1 / 0, this.indentToken = ``;
  }
  copy() {
    var r2 = new t2(this.indentUnit);
    return r2.javaScriptLine = this.javaScriptLine, r2.javaScriptLineExcludesColon = this.javaScriptLineExcludesColon, r2.javaScriptArguments = this.javaScriptArguments, r2.javaScriptArgumentsDepth = this.javaScriptArgumentsDepth, r2.isInterpolating = this.isInterpolating, r2.interpolationNesting = this.interpolationNesting, r2.jsState = (e.copyState || n)(this.jsState), r2.restOfLine = this.restOfLine, r2.isIncludeFiltered = this.isIncludeFiltered, r2.isEach = this.isEach, r2.lastTag = this.lastTag, r2.isAttrs = this.isAttrs, r2.attrsNest = this.attrsNest.slice(), r2.inAttributeName = this.inAttributeName, r2.attributeIsType = this.attributeIsType, r2.attrValue = this.attrValue, r2.indentOf = this.indentOf, r2.indentToken = this.indentToken, r2;
  }
};
function i(t3, n2) {
  if (t3.sol() && (n2.javaScriptLine = false, n2.javaScriptLineExcludesColon = false), n2.javaScriptLine) {
    if (n2.javaScriptLineExcludesColon && t3.peek() === `:`) {
      n2.javaScriptLine = false, n2.javaScriptLineExcludesColon = false;
      return;
    }
    var r2 = e.token(t3, n2.jsState);
    return t3.eol() && (n2.javaScriptLine = false), r2 || true;
  }
}
function a(t3, n2) {
  if (n2.javaScriptArguments) {
    if (n2.javaScriptArgumentsDepth === 0 && t3.peek() !== `(`) {
      n2.javaScriptArguments = false;
      return;
    }
    if (t3.peek() === `(` ? n2.javaScriptArgumentsDepth++ : t3.peek() === `)` && n2.javaScriptArgumentsDepth--, n2.javaScriptArgumentsDepth === 0) {
      n2.javaScriptArguments = false;
      return;
    }
    return e.token(t3, n2.jsState) || true;
  }
}
function o(e2) {
  if (e2.match(/^yield\b/)) return `keyword`;
}
function s(e2) {
  if (e2.match(/^(?:doctype) *([^\n]+)?/)) return `meta`;
}
function c(e2, t3) {
  if (e2.match(`#{`)) return t3.isInterpolating = true, t3.interpolationNesting = 0, `punctuation`;
}
function l(t3, n2) {
  if (n2.isInterpolating) {
    if (t3.peek() === `}`) {
      if (n2.interpolationNesting--, n2.interpolationNesting < 0) return t3.next(), n2.isInterpolating = false, `punctuation`;
    } else t3.peek() === `{` && n2.interpolationNesting++;
    return e.token(t3, n2.jsState) || true;
  }
}
function u(e2, t3) {
  if (e2.match(/^case\b/)) return t3.javaScriptLine = true, `keyword`;
}
function d(e2, t3) {
  if (e2.match(/^when\b/)) return t3.javaScriptLine = true, t3.javaScriptLineExcludesColon = true, `keyword`;
}
function f(e2) {
  if (e2.match(/^default\b/)) return `keyword`;
}
function p(e2, t3) {
  if (e2.match(/^extends?\b/)) return t3.restOfLine = `string`, `keyword`;
}
function m(e2, t3) {
  if (e2.match(/^append\b/)) return t3.restOfLine = `variable`, `keyword`;
}
function h(e2, t3) {
  if (e2.match(/^prepend\b/)) return t3.restOfLine = `variable`, `keyword`;
}
function g(e2, t3) {
  if (e2.match(/^block\b *(?:(prepend|append)\b)?/)) return t3.restOfLine = `variable`, `keyword`;
}
function _(e2, t3) {
  if (e2.match(/^include\b/)) return t3.restOfLine = `string`, `keyword`;
}
function v(e2, t3) {
  if (e2.match(/^include:([a-zA-Z0-9\-]+)/, false) && e2.match(`include`)) return t3.isIncludeFiltered = true, `keyword`;
}
function y(e2, t3) {
  if (t3.isIncludeFiltered) {
    var n2 = O(e2, t3);
    return t3.isIncludeFiltered = false, t3.restOfLine = `string`, n2;
  }
}
function b(e2, t3) {
  if (e2.match(/^mixin\b/)) return t3.javaScriptLine = true, `keyword`;
}
function x(e2, t3) {
  if (e2.match(/^\+([-\w]+)/)) return e2.match(/^\( *[-\w]+ *=/, false) || (t3.javaScriptArguments = true, t3.javaScriptArgumentsDepth = 0), `variable`;
  if (e2.match(`+#{`, false)) return e2.next(), t3.mixinCallAfter = true, c(e2, t3);
}
function S(e2, t3) {
  if (t3.mixinCallAfter) return t3.mixinCallAfter = false, e2.match(/^\( *[-\w]+ *=/, false) || (t3.javaScriptArguments = true, t3.javaScriptArgumentsDepth = 0), true;
}
function C(e2, t3) {
  if (e2.match(/^(if|unless|else if|else)\b/)) return t3.javaScriptLine = true, `keyword`;
}
function w(e2, t3) {
  if (e2.match(/^(- *)?(each|for)\b/)) return t3.isEach = true, `keyword`;
}
function T(e2, t3) {
  if (t3.isEach) {
    if (e2.match(/^ in\b/)) return t3.javaScriptLine = true, t3.isEach = false, `keyword`;
    if (e2.sol() || e2.eol()) t3.isEach = false;
    else if (e2.next()) {
      for (; !e2.match(/^ in\b/, false) && e2.next(); ) ;
      return `variable`;
    }
  }
}
function E(e2, t3) {
  if (e2.match(/^while\b/)) return t3.javaScriptLine = true, `keyword`;
}
function D(e2, t3) {
  var n2;
  if (n2 = e2.match(/^(\w(?:[-:\w]*\w)?)\/?/)) return t3.lastTag = n2[1].toLowerCase(), `tag`;
}
function O(e2, t3) {
  if (e2.match(/^:([\w\-]+)/)) return V(e2, t3), `atom`;
}
function k(e2, t3) {
  if (e2.match(/^(!?=|-)/)) return t3.javaScriptLine = true, `punctuation`;
}
function A(e2) {
  if (e2.match(/^#([\w-]+)/)) return `builtin`;
}
function j(e2) {
  if (e2.match(/^\.([\w-]+)/)) return `className`;
}
function M(e2, t3) {
  if (e2.peek() == `(`) return e2.next(), t3.isAttrs = true, t3.attrsNest = [], t3.inAttributeName = true, t3.attrValue = ``, t3.attributeIsType = false, `punctuation`;
}
function N(n2, r2) {
  if (r2.isAttrs) {
    if (t[n2.peek()] && r2.attrsNest.push(t[n2.peek()]), r2.attrsNest[r2.attrsNest.length - 1] === n2.peek()) r2.attrsNest.pop();
    else if (n2.eat(`)`)) return r2.isAttrs = false, `punctuation`;
    if (r2.inAttributeName && n2.match(/^[^=,\)!]+/)) return (n2.peek() === `=` || n2.peek() === `!`) && (r2.inAttributeName = false, r2.jsState = e.startState(2), r2.lastTag === `script` && n2.current().trim().toLowerCase() === `type` ? r2.attributeIsType = true : r2.attributeIsType = false), `attribute`;
    var i2 = e.token(n2, r2.jsState);
    if (r2.attrsNest.length === 0 && (i2 === `string` || i2 === `variable` || i2 === `keyword`)) try {
      return Function(``, `var x ` + r2.attrValue.replace(/,\s*$/, ``).replace(/^!/, ``)), r2.inAttributeName = true, r2.attrValue = ``, n2.backUp(n2.current().length), N(n2, r2);
    } catch {
    }
    return r2.attrValue += n2.current(), i2 || true;
  }
}
function P(e2, t3) {
  if (e2.match(/^&attributes\b/)) return t3.javaScriptArguments = true, t3.javaScriptArgumentsDepth = 0, `keyword`;
}
function F(e2) {
  if (e2.sol() && e2.eatSpace()) return `indent`;
}
function I(e2, t3) {
  if (e2.match(/^ *\/\/(-)?([^\n]*)/)) return t3.indentOf = e2.indentation(), t3.indentToken = `comment`, `comment`;
}
function L(e2) {
  if (e2.match(/^: */)) return `colon`;
}
function R(e2, t3) {
  if (e2.match(/^(?:\| ?| )([^\n]+)/)) return `string`;
  if (e2.match(/^(<[^\n]*)/, false)) return V(e2, t3), e2.skipToEnd(), t3.indentToken;
}
function z(e2, t3) {
  if (e2.eat(`.`)) return V(e2, t3), `dot`;
}
function B(e2) {
  return e2.next(), null;
}
function V(e2, t3) {
  t3.indentOf = e2.indentation(), t3.indentToken = `string`;
}
function H(e2, t3) {
  if (e2.sol() && (t3.restOfLine = ``), t3.restOfLine) {
    e2.skipToEnd();
    var n2 = t3.restOfLine;
    return t3.restOfLine = ``, n2;
  }
}
function U(e2) {
  return new r(e2);
}
function W(e2) {
  return e2.copy();
}
function G(e2, t3) {
  var n2 = H(e2, t3) || l(e2, t3) || y(e2, t3) || T(e2, t3) || N(e2, t3) || i(e2, t3) || a(e2, t3) || S(e2, t3) || o(e2) || s(e2) || c(e2, t3) || u(e2, t3) || d(e2, t3) || f(e2) || p(e2, t3) || m(e2, t3) || h(e2, t3) || g(e2, t3) || _(e2, t3) || v(e2, t3) || b(e2, t3) || x(e2, t3) || C(e2, t3) || w(e2, t3) || E(e2, t3) || D(e2, t3) || O(e2, t3) || k(e2, t3) || A(e2) || j(e2) || M(e2, t3) || P(e2, t3) || F(e2) || R(e2, t3) || I(e2, t3) || L(e2) || z(e2, t3) || B(e2);
  return n2 === true ? null : n2;
}
const K = { startState: U, copyState: W, token: G };
export {
  K as pug
};
