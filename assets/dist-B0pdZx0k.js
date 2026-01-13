import { A as e, C as t, Ct as n, E as r, H as i, I as a, M as o, N as s, St as c, T as l, b as u, bt as d, c as f, d as p, et as m, h, it as ee, j as te, l as ne, mt as g, tt as re, u as ie, vt as _, wt as ae, y as oe, yt as v } from "./dist-CQp5Y4zm.js";
import { n as se, r as ce } from "./dist-DYp_OIFV.js";
import { t as le } from "./dist-aB4XqAU2.js";
var ue = class e2 {
  static create(t2, n2, r2, i2, a2) {
    return new e2(t2, n2, r2, i2 + (i2 << 8) + t2 + (n2 << 4) | 0, a2, [], []);
  }
  constructor(e4, t2, n2, r2, i2, a2, o2) {
    this.type = e4, this.value = t2, this.from = n2, this.hash = r2, this.end = i2, this.children = a2, this.positions = o2, this.hashProp = [[_.contextHash, r2]];
  }
  addChild(e4, t2) {
    e4.prop(_.contextHash) != this.hash && (e4 = new n(e4.type, e4.children, e4.positions, e4.length, this.hashProp)), this.children.push(e4), this.positions.push(t2);
  }
  toTree(e4, t2 = this.end) {
    let r2 = this.children.length - 1;
    return r2 >= 0 && (t2 = Math.max(t2, this.positions[r2] + this.children[r2].length + this.from)), new n(e4.types[this.type], this.children, this.positions, t2 - this.from).balance({ makeTree: (e5, t3, r3) => new n(d.none, e5, t3, r3, this.hashProp) });
  }
}, y;
(function(e4) {
  e4[e4.Document = 1] = `Document`, e4[e4.CodeBlock = 2] = `CodeBlock`, e4[e4.FencedCode = 3] = `FencedCode`, e4[e4.Blockquote = 4] = `Blockquote`, e4[e4.HorizontalRule = 5] = `HorizontalRule`, e4[e4.BulletList = 6] = `BulletList`, e4[e4.OrderedList = 7] = `OrderedList`, e4[e4.ListItem = 8] = `ListItem`, e4[e4.ATXHeading1 = 9] = `ATXHeading1`, e4[e4.ATXHeading2 = 10] = `ATXHeading2`, e4[e4.ATXHeading3 = 11] = `ATXHeading3`, e4[e4.ATXHeading4 = 12] = `ATXHeading4`, e4[e4.ATXHeading5 = 13] = `ATXHeading5`, e4[e4.ATXHeading6 = 14] = `ATXHeading6`, e4[e4.SetextHeading1 = 15] = `SetextHeading1`, e4[e4.SetextHeading2 = 16] = `SetextHeading2`, e4[e4.HTMLBlock = 17] = `HTMLBlock`, e4[e4.LinkReference = 18] = `LinkReference`, e4[e4.Paragraph = 19] = `Paragraph`, e4[e4.CommentBlock = 20] = `CommentBlock`, e4[e4.ProcessingInstructionBlock = 21] = `ProcessingInstructionBlock`, e4[e4.Escape = 22] = `Escape`, e4[e4.Entity = 23] = `Entity`, e4[e4.HardBreak = 24] = `HardBreak`, e4[e4.Emphasis = 25] = `Emphasis`, e4[e4.StrongEmphasis = 26] = `StrongEmphasis`, e4[e4.Link = 27] = `Link`, e4[e4.Image = 28] = `Image`, e4[e4.InlineCode = 29] = `InlineCode`, e4[e4.HTMLTag = 30] = `HTMLTag`, e4[e4.Comment = 31] = `Comment`, e4[e4.ProcessingInstruction = 32] = `ProcessingInstruction`, e4[e4.Autolink = 33] = `Autolink`, e4[e4.HeaderMark = 34] = `HeaderMark`, e4[e4.QuoteMark = 35] = `QuoteMark`, e4[e4.ListMark = 36] = `ListMark`, e4[e4.LinkMark = 37] = `LinkMark`, e4[e4.EmphasisMark = 38] = `EmphasisMark`, e4[e4.CodeMark = 39] = `CodeMark`, e4[e4.CodeText = 40] = `CodeText`, e4[e4.CodeInfo = 41] = `CodeInfo`, e4[e4.LinkTitle = 42] = `LinkTitle`, e4[e4.LinkLabel = 43] = `LinkLabel`, e4[e4.URL = 44] = `URL`;
})(y || (y = {}));
var de = class {
  constructor(e4, t2) {
    this.start = e4, this.content = t2, this.marks = [], this.parsers = [];
  }
}, fe = class {
  constructor() {
    this.text = ``, this.baseIndent = 0, this.basePos = 0, this.depth = 0, this.markers = [], this.pos = 0, this.indent = 0, this.next = -1;
  }
  forward() {
    this.basePos > this.pos && this.forwardInner();
  }
  forwardInner() {
    let e4 = this.skipSpace(this.basePos);
    this.indent = this.countIndent(e4, this.pos, this.indent), this.pos = e4, this.next = e4 == this.text.length ? -1 : this.text.charCodeAt(e4);
  }
  skipSpace(e4) {
    return x(this.text, e4);
  }
  reset(e4) {
    for (this.text = e4, this.baseIndent = this.basePos = this.pos = this.indent = 0, this.forwardInner(), this.depth = 1; this.markers.length; ) this.markers.pop();
  }
  moveBase(e4) {
    this.basePos = e4, this.baseIndent = this.countIndent(e4, this.pos, this.indent);
  }
  moveBaseColumn(e4) {
    this.baseIndent = e4, this.basePos = this.findColumn(e4);
  }
  addMarker(e4) {
    this.markers.push(e4);
  }
  countIndent(e4, t2 = 0, n2 = 0) {
    for (let r2 = t2; r2 < e4; r2++) n2 += this.text.charCodeAt(r2) == 9 ? 4 - n2 % 4 : 1;
    return n2;
  }
  findColumn(e4) {
    let t2 = 0;
    for (let n2 = 0; t2 < this.text.length && n2 < e4; t2++) n2 += this.text.charCodeAt(t2) == 9 ? 4 - n2 % 4 : 1;
    return t2;
  }
  scrub() {
    if (!this.baseIndent) return this.text;
    let e4 = ``;
    for (let t2 = 0; t2 < this.basePos; t2++) e4 += ` `;
    return e4 + this.text.slice(this.basePos);
  }
};
function pe(e4, t2, n2) {
  if (n2.pos == n2.text.length || e4 != t2.block && n2.indent >= t2.stack[n2.depth + 1].value + n2.baseIndent) return true;
  if (n2.indent >= n2.baseIndent + 4) return false;
  let r2 = (e4.type == y.OrderedList ? T : w)(n2, t2, false);
  return r2 > 0 && (e4.type != y.BulletList || C(n2, t2, false) < 0) && n2.text.charCodeAt(n2.pos + r2 - 1) == e4.value;
}
var me = { [y.Blockquote](e4, t2, n2) {
  return n2.next == 62 ? (n2.markers.push(L(y.QuoteMark, t2.lineStart + n2.pos, t2.lineStart + n2.pos + 1)), n2.moveBase(n2.pos + (b(n2.text.charCodeAt(n2.pos + 1)) ? 2 : 1)), e4.end = t2.lineStart + n2.text.length, true) : false;
}, [y.ListItem](e4, t2, n2) {
  return n2.indent < n2.baseIndent + e4.value && n2.next > -1 ? false : (n2.moveBaseColumn(n2.baseIndent + e4.value), true);
}, [y.OrderedList]: pe, [y.BulletList]: pe, [y.Document]() {
  return true;
} };
function b(e4) {
  return e4 == 32 || e4 == 9 || e4 == 10 || e4 == 13;
}
function x(e4, t2 = 0) {
  for (; t2 < e4.length && b(e4.charCodeAt(t2)); ) t2++;
  return t2;
}
function S(e4, t2, n2) {
  for (; t2 > n2 && b(e4.charCodeAt(t2 - 1)); ) t2--;
  return t2;
}
function he(e4) {
  if (e4.next != 96 && e4.next != 126) return -1;
  let t2 = e4.pos + 1;
  for (; t2 < e4.text.length && e4.text.charCodeAt(t2) == e4.next; ) t2++;
  if (t2 < e4.pos + 3) return -1;
  if (e4.next == 96) {
    for (let n2 = t2; n2 < e4.text.length; n2++) if (e4.text.charCodeAt(n2) == 96) return -1;
  }
  return t2;
}
function ge(e4) {
  return e4.next == 62 ? e4.text.charCodeAt(e4.pos + 1) == 32 ? 2 : 1 : -1;
}
function C(e4, t2, n2) {
  if (e4.next != 42 && e4.next != 45 && e4.next != 95) return -1;
  let r2 = 1;
  for (let t3 = e4.pos + 1; t3 < e4.text.length; t3++) {
    let n3 = e4.text.charCodeAt(t3);
    if (n3 == e4.next) r2++;
    else if (!b(n3)) return -1;
  }
  return n2 && e4.next == 45 && ye(e4) > -1 && e4.depth == t2.stack.length && t2.parser.leafBlockParsers.indexOf(Ee.SetextHeading) > -1 || r2 < 3 ? -1 : 1;
}
function _e(e4, t2) {
  for (let n2 = e4.stack.length - 1; n2 >= 0; n2--) if (e4.stack[n2].type == t2) return true;
  return false;
}
function w(e4, t2, n2) {
  return (e4.next == 45 || e4.next == 43 || e4.next == 42) && (e4.pos == e4.text.length - 1 || b(e4.text.charCodeAt(e4.pos + 1))) && (!n2 || _e(t2, y.BulletList) || e4.skipSpace(e4.pos + 2) < e4.text.length) ? 1 : -1;
}
function T(e4, t2, n2) {
  let r2 = e4.pos, i2 = e4.next;
  for (; i2 >= 48 && i2 <= 57; ) {
    if (r2++, r2 == e4.text.length) return -1;
    i2 = e4.text.charCodeAt(r2);
  }
  return r2 == e4.pos || r2 > e4.pos + 9 || i2 != 46 && i2 != 41 || r2 < e4.text.length - 1 && !b(e4.text.charCodeAt(r2 + 1)) || n2 && !_e(t2, y.OrderedList) && (e4.skipSpace(r2 + 1) == e4.text.length || r2 > e4.pos + 1 || e4.next != 49) ? -1 : r2 + 1 - e4.pos;
}
function ve(e4) {
  if (e4.next != 35) return -1;
  let t2 = e4.pos + 1;
  for (; t2 < e4.text.length && e4.text.charCodeAt(t2) == 35; ) t2++;
  if (t2 < e4.text.length && e4.text.charCodeAt(t2) != 32) return -1;
  let n2 = t2 - e4.pos;
  return n2 > 6 ? -1 : n2;
}
function ye(e4) {
  if (e4.next != 45 && e4.next != 61 || e4.indent >= e4.baseIndent + 4) return -1;
  let t2 = e4.pos + 1;
  for (; t2 < e4.text.length && e4.text.charCodeAt(t2) == e4.next; ) t2++;
  let n2 = t2;
  for (; t2 < e4.text.length && b(e4.text.charCodeAt(t2)); ) t2++;
  return t2 == e4.text.length ? n2 : -1;
}
var E = /^[ \t]*$/, be = /-->/, xe = /\?>/, D = [[/^<(?:script|pre|style)(?:\s|>|$)/i, /<\/(?:script|pre|style)>/i], [/^\s*<!--/, be], [/^\s*<\?/, xe], [/^\s*<![A-Z]/, />/], [/^\s*<!\[CDATA\[/, /\]\]>/], [/^\s*<\/?(?:address|article|aside|base|basefont|blockquote|body|caption|center|col|colgroup|dd|details|dialog|dir|div|dl|dt|fieldset|figcaption|figure|footer|form|frame|frameset|h1|h2|h3|h4|h5|h6|head|header|hr|html|iframe|legend|li|link|main|menu|menuitem|nav|noframes|ol|optgroup|option|p|param|section|source|summary|table|tbody|td|tfoot|th|thead|title|tr|track|ul)(?:\s|\/?>|$)/i, E], [/^\s*(?:<\/[a-z][\w-]*\s*>|<[a-z][\w-]*(\s+[a-z:_][\w-.]*(?:\s*=\s*(?:[^\s"'=<>`]+|'[^']*'|"[^"]*"))?)*\s*>)\s*$/i, E]];
function Se(e4, t2, n2) {
  if (e4.next != 60) return -1;
  let r2 = e4.text.slice(e4.pos);
  for (let e5 = 0, t3 = D.length - (n2 ? 1 : 0); e5 < t3; e5++) if (D[e5][0].test(r2)) return e5;
  return -1;
}
function Ce(e4, t2) {
  let n2 = e4.countIndent(t2, e4.pos, e4.indent), r2 = e4.countIndent(e4.skipSpace(t2), t2, n2);
  return r2 >= n2 + 5 ? n2 + 1 : r2;
}
function O(e4, t2, n2) {
  let r2 = e4.length - 1;
  r2 >= 0 && e4[r2].to == t2 && e4[r2].type == y.CodeText ? e4[r2].to = n2 : e4.push(L(y.CodeText, t2, n2));
}
var k = { LinkReference: void 0, IndentedCode(e4, t2) {
  let n2 = t2.baseIndent + 4;
  if (t2.indent < n2) return false;
  let r2 = t2.findColumn(n2), i2 = e4.lineStart + r2, a2 = e4.lineStart + t2.text.length, o2 = [], s2 = [];
  for (O(o2, i2, a2); e4.nextLine() && t2.depth >= e4.stack.length; ) if (t2.pos == t2.text.length) {
    O(s2, e4.lineStart - 1, e4.lineStart);
    for (let e5 of t2.markers) s2.push(e5);
  } else if (t2.indent < n2) break;
  else {
    if (s2.length) {
      for (let e5 of s2) e5.type == y.CodeText ? O(o2, e5.from, e5.to) : o2.push(e5);
      s2 = [];
    }
    O(o2, e4.lineStart - 1, e4.lineStart);
    for (let e5 of t2.markers) o2.push(e5);
    a2 = e4.lineStart + t2.text.length;
    let n3 = e4.lineStart + t2.findColumn(t2.baseIndent + 4);
    n3 < a2 && O(o2, n3, a2);
  }
  return s2.length && (s2 = s2.filter((e5) => e5.type != y.CodeText), s2.length && (t2.markers = s2.concat(t2.markers))), e4.addNode(e4.buffer.writeElements(o2, -i2).finish(y.CodeBlock, a2 - i2), i2), true;
}, FencedCode(e4, t2) {
  let n2 = he(t2);
  if (n2 < 0) return false;
  let r2 = e4.lineStart + t2.pos, i2 = t2.next, a2 = n2 - t2.pos, o2 = t2.skipSpace(n2), s2 = S(t2.text, t2.text.length, o2), c2 = [L(y.CodeMark, r2, r2 + a2)];
  o2 < s2 && c2.push(L(y.CodeInfo, e4.lineStart + o2, e4.lineStart + s2));
  for (let n3 = true, r3 = true, o3 = false; e4.nextLine() && t2.depth >= e4.stack.length; n3 = false) {
    let s3 = t2.pos;
    if (t2.indent - t2.baseIndent < 4) for (; s3 < t2.text.length && t2.text.charCodeAt(s3) == i2; ) s3++;
    if (s3 - t2.pos >= a2 && t2.skipSpace(s3) == t2.text.length) {
      for (let e5 of t2.markers) c2.push(e5);
      r3 && o3 && O(c2, e4.lineStart - 1, e4.lineStart), c2.push(L(y.CodeMark, e4.lineStart + t2.pos, e4.lineStart + s3)), e4.nextLine();
      break;
    } else {
      o3 = true, n3 || (O(c2, e4.lineStart - 1, e4.lineStart), r3 = false);
      for (let e5 of t2.markers) c2.push(e5);
      let i3 = e4.lineStart + t2.basePos, a3 = e4.lineStart + t2.text.length;
      i3 < a3 && (O(c2, i3, a3), r3 = false);
    }
  }
  return e4.addNode(e4.buffer.writeElements(c2, -r2).finish(y.FencedCode, e4.prevLineEnd() - r2), r2), true;
}, Blockquote(e4, t2) {
  let n2 = ge(t2);
  return n2 < 0 ? false : (e4.startContext(y.Blockquote, t2.pos), e4.addNode(y.QuoteMark, e4.lineStart + t2.pos, e4.lineStart + t2.pos + 1), t2.moveBase(t2.pos + n2), null);
}, HorizontalRule(e4, t2) {
  if (C(t2, e4, false) < 0) return false;
  let n2 = e4.lineStart + t2.pos;
  return e4.nextLine(), e4.addNode(y.HorizontalRule, n2), true;
}, BulletList(e4, t2) {
  let n2 = w(t2, e4, false);
  if (n2 < 0) return false;
  e4.block.type != y.BulletList && e4.startContext(y.BulletList, t2.basePos, t2.next);
  let r2 = Ce(t2, t2.pos + 1);
  return e4.startContext(y.ListItem, t2.basePos, r2 - t2.baseIndent), e4.addNode(y.ListMark, e4.lineStart + t2.pos, e4.lineStart + t2.pos + n2), t2.moveBaseColumn(r2), null;
}, OrderedList(e4, t2) {
  let n2 = T(t2, e4, false);
  if (n2 < 0) return false;
  e4.block.type != y.OrderedList && e4.startContext(y.OrderedList, t2.basePos, t2.text.charCodeAt(t2.pos + n2 - 1));
  let r2 = Ce(t2, t2.pos + n2);
  return e4.startContext(y.ListItem, t2.basePos, r2 - t2.baseIndent), e4.addNode(y.ListMark, e4.lineStart + t2.pos, e4.lineStart + t2.pos + n2), t2.moveBaseColumn(r2), null;
}, ATXHeading(e4, t2) {
  let n2 = ve(t2);
  if (n2 < 0) return false;
  let r2 = t2.pos, i2 = e4.lineStart + r2, a2 = S(t2.text, t2.text.length, r2), o2 = a2;
  for (; o2 > r2 && t2.text.charCodeAt(o2 - 1) == t2.next; ) o2--;
  (o2 == a2 || o2 == r2 || !b(t2.text.charCodeAt(o2 - 1))) && (o2 = t2.text.length);
  let s2 = e4.buffer.write(y.HeaderMark, 0, n2).writeElements(e4.parser.parseInline(t2.text.slice(r2 + n2 + 1, o2), i2 + n2 + 1), -i2);
  o2 < t2.text.length && s2.write(y.HeaderMark, o2 - r2, a2 - r2);
  let c2 = s2.finish(y.ATXHeading1 - 1 + n2, t2.text.length - r2);
  return e4.nextLine(), e4.addNode(c2, i2), true;
}, HTMLBlock(e4, t2) {
  let n2 = Se(t2, e4, false);
  if (n2 < 0) return false;
  let r2 = e4.lineStart + t2.pos, i2 = D[n2][1], a2 = [], o2 = i2 != E;
  for (; !i2.test(t2.text) && e4.nextLine(); ) {
    if (t2.depth < e4.stack.length) {
      o2 = false;
      break;
    }
    for (let e5 of t2.markers) a2.push(e5);
  }
  o2 && e4.nextLine();
  let s2 = i2 == be ? y.CommentBlock : i2 == xe ? y.ProcessingInstructionBlock : y.HTMLBlock, c2 = e4.prevLineEnd();
  return e4.addNode(e4.buffer.writeElements(a2, -r2).finish(s2, c2 - r2), r2), true;
}, SetextHeading: void 0 }, we = class {
  constructor(e4) {
    this.stage = 0, this.elts = [], this.pos = 0, this.start = e4.start, this.advance(e4.content);
  }
  nextLine(e4, t2, n2) {
    if (this.stage == -1) return false;
    let r2 = n2.content + `
` + t2.scrub(), i2 = this.advance(r2);
    return i2 > -1 && i2 < r2.length ? this.complete(e4, n2, i2) : false;
  }
  finish(e4, t2) {
    return (this.stage == 2 || this.stage == 3) && x(t2.content, this.pos) == t2.content.length ? this.complete(e4, t2, t2.content.length) : false;
  }
  complete(e4, t2, n2) {
    return e4.addLeafElement(t2, L(y.LinkReference, this.start, this.start + n2, this.elts)), true;
  }
  nextStage(e4) {
    return e4 ? (this.pos = e4.to - this.start, this.elts.push(e4), this.stage++, true) : (e4 === false && (this.stage = -1), false);
  }
  advance(e4) {
    for (; ; ) if (this.stage == -1) return -1;
    else if (this.stage == 0) {
      if (!this.nextStage(ze(e4, this.pos, this.start, true))) return -1;
      if (e4.charCodeAt(this.pos) != 58) return this.stage = -1;
      this.elts.push(L(y.LinkMark, this.pos + this.start, this.pos + this.start + 1)), this.pos++;
    } else if (this.stage == 1) {
      if (!this.nextStage(Re(e4, x(e4, this.pos), this.start))) return -1;
    } else if (this.stage == 2) {
      let t2 = x(e4, this.pos), n2 = 0;
      if (t2 > this.pos) {
        let r2 = U(e4, t2, this.start);
        if (r2) {
          let t3 = A(e4, r2.to - this.start);
          t3 > 0 && (this.nextStage(r2), n2 = t3);
        }
      }
      return n2 || (n2 = A(e4, this.pos)), n2 > 0 && n2 < e4.length ? n2 : -1;
    } else return A(e4, this.pos);
  }
};
function A(e4, t2) {
  for (; t2 < e4.length; t2++) {
    let n2 = e4.charCodeAt(t2);
    if (n2 == 10) break;
    if (!b(n2)) return -1;
  }
  return t2;
}
var Te = class {
  nextLine(e4, t2, n2) {
    let r2 = t2.depth < e4.stack.length ? -1 : ye(t2), i2 = t2.next;
    if (r2 < 0) return false;
    let a2 = L(y.HeaderMark, e4.lineStart + t2.pos, e4.lineStart + r2);
    return e4.nextLine(), e4.addLeafElement(n2, L(i2 == 61 ? y.SetextHeading1 : y.SetextHeading2, n2.start, e4.prevLineEnd(), [...e4.parser.parseInline(n2.content, n2.start), a2])), true;
  }
  finish() {
    return false;
  }
}, Ee = { LinkReference(e4, t2) {
  return t2.content.charCodeAt(0) == 91 ? new we(t2) : null;
}, SetextHeading() {
  return new Te();
} }, De = [(e4, t2) => ve(t2) >= 0, (e4, t2) => he(t2) >= 0, (e4, t2) => ge(t2) >= 0, (e4, t2) => w(t2, e4, true) >= 0, (e4, t2) => T(t2, e4, true) >= 0, (e4, t2) => C(t2, e4, true) >= 0, (e4, t2) => Se(t2, e4, true) >= 0], Oe = { text: ``, end: 0 }, ke = class {
  constructor(e4, t2, n2, r2) {
    this.parser = e4, this.input = t2, this.ranges = r2, this.line = new fe(), this.atEnd = false, this.reusePlaceholders = /* @__PURE__ */ new Map(), this.stoppedAt = null, this.rangeI = 0, this.to = r2[r2.length - 1].to, this.lineStart = this.absoluteLineStart = this.absoluteLineEnd = r2[0].from, this.block = ue.create(y.Document, 0, this.lineStart, 0, 0), this.stack = [this.block], this.fragments = n2.length ? new Ve(n2, t2) : null, this.readLine();
  }
  get parsedPos() {
    return this.absoluteLineStart;
  }
  advance() {
    if (this.stoppedAt != null && this.absoluteLineStart > this.stoppedAt) return this.finish();
    let { line: e4 } = this;
    for (; ; ) {
      for (let t3 = 0; ; ) {
        let n2 = e4.depth < this.stack.length ? this.stack[this.stack.length - 1] : null;
        for (; t3 < e4.markers.length && (!n2 || e4.markers[t3].from < n2.end); ) {
          let n3 = e4.markers[t3++];
          this.addNode(n3.type, n3.from, n3.to);
        }
        if (!n2) break;
        this.finishContext();
      }
      if (e4.pos < e4.text.length) break;
      if (!this.nextLine()) return this.finish();
    }
    if (this.fragments && this.reuseFragment(e4.basePos)) return null;
    start: for (; ; ) {
      for (let t3 of this.parser.blockParsers) if (t3) {
        let n2 = t3(this, e4);
        if (n2 != 0) {
          if (n2 == 1) return null;
          e4.forward();
          continue start;
        }
      }
      break;
    }
    let t2 = new de(this.lineStart + e4.pos, e4.text.slice(e4.pos));
    for (let e5 of this.parser.leafBlockParsers) if (e5) {
      let n2 = e5(this, t2);
      n2 && t2.parsers.push(n2);
    }
    lines: for (; this.nextLine() && e4.pos != e4.text.length; ) {
      if (e4.indent < e4.baseIndent + 4) {
        for (let n2 of this.parser.endLeafBlock) if (n2(this, e4, t2)) break lines;
      }
      for (let n2 of t2.parsers) if (n2.nextLine(this, e4, t2)) return null;
      t2.content += `
` + e4.scrub();
      for (let n2 of e4.markers) t2.marks.push(n2);
    }
    return this.finishLeaf(t2), null;
  }
  stopAt(e4) {
    if (this.stoppedAt != null && this.stoppedAt < e4) throw RangeError(`Can't move stoppedAt forward`);
    this.stoppedAt = e4;
  }
  reuseFragment(e4) {
    if (!this.fragments.moveTo(this.absoluteLineStart + e4, this.absoluteLineStart) || !this.fragments.matches(this.block.hash)) return false;
    let t2 = this.fragments.takeNodes(this);
    return t2 ? (this.absoluteLineStart += t2, this.lineStart = He(this.absoluteLineStart, this.ranges), this.moveRangeI(), this.absoluteLineStart < this.to ? (this.lineStart++, this.absoluteLineStart++, this.readLine()) : (this.atEnd = true, this.readLine()), true) : false;
  }
  get depth() {
    return this.stack.length;
  }
  parentType(e4 = this.depth - 1) {
    return this.parser.nodeSet.types[this.stack[e4].type];
  }
  nextLine() {
    return this.lineStart += this.line.text.length, this.absoluteLineEnd >= this.to ? (this.absoluteLineStart = this.absoluteLineEnd, this.atEnd = true, this.readLine(), false) : (this.lineStart++, this.absoluteLineStart = this.absoluteLineEnd + 1, this.moveRangeI(), this.readLine(), true);
  }
  peekLine() {
    return this.scanLine(this.absoluteLineEnd + 1).text;
  }
  moveRangeI() {
    for (; this.rangeI < this.ranges.length - 1 && this.absoluteLineStart >= this.ranges[this.rangeI].to; ) this.rangeI++, this.absoluteLineStart = Math.max(this.absoluteLineStart, this.ranges[this.rangeI].from);
  }
  scanLine(e4) {
    let t2 = Oe;
    if (t2.end = e4, e4 >= this.to) t2.text = ``;
    else if (t2.text = this.lineChunkAt(e4), t2.end += t2.text.length, this.ranges.length > 1) {
      let e5 = this.absoluteLineStart, n2 = this.rangeI;
      for (; this.ranges[n2].to < t2.end; ) {
        n2++;
        let r2 = this.ranges[n2].from, i2 = this.lineChunkAt(r2);
        t2.end = r2 + i2.length, t2.text = t2.text.slice(0, this.ranges[n2 - 1].to - e5) + i2, e5 = t2.end - t2.text.length;
      }
    }
    return t2;
  }
  readLine() {
    let { line: e4 } = this, { text: t2, end: n2 } = this.scanLine(this.absoluteLineStart);
    for (this.absoluteLineEnd = n2, e4.reset(t2); e4.depth < this.stack.length; e4.depth++) {
      let t3 = this.stack[e4.depth], n3 = this.parser.skipContextMarkup[t3.type];
      if (!n3) throw Error(`Unhandled block context ` + y[t3.type]);
      let r2 = this.line.markers.length;
      if (!n3(t3, this, e4)) {
        this.line.markers.length > r2 && (t3.end = this.line.markers[this.line.markers.length - 1].to), e4.forward();
        break;
      }
      e4.forward();
    }
  }
  lineChunkAt(e4) {
    let t2 = this.input.chunk(e4), n2;
    if (this.input.lineChunks) n2 = t2 == `
` ? `` : t2;
    else {
      let e5 = t2.indexOf(`
`);
      n2 = e5 < 0 ? t2 : t2.slice(0, e5);
    }
    return e4 + n2.length > this.to ? n2.slice(0, this.to - e4) : n2;
  }
  prevLineEnd() {
    return this.atEnd ? this.lineStart : this.lineStart - 1;
  }
  startContext(e4, t2, n2 = 0) {
    this.block = ue.create(e4, n2, this.lineStart + t2, this.block.hash, this.lineStart + this.line.text.length), this.stack.push(this.block);
  }
  startComposite(e4, t2, n2 = 0) {
    this.startContext(this.parser.getNodeType(e4), t2, n2);
  }
  addNode(e4, t2, r2) {
    typeof e4 == `number` && (e4 = new n(this.parser.nodeSet.types[e4], P, P, (r2 ?? this.prevLineEnd()) - t2)), this.block.addChild(e4, t2 - this.block.from);
  }
  addElement(e4) {
    this.block.addChild(e4.toTree(this.parser.nodeSet), e4.from - this.block.from);
  }
  addLeafElement(e4, t2) {
    this.addNode(this.buffer.writeElements(G(t2.children, e4.marks), -t2.from).finish(t2.type, t2.to - t2.from), t2.from);
  }
  finishContext() {
    let e4 = this.stack.pop(), t2 = this.stack[this.stack.length - 1];
    t2.addChild(e4.toTree(this.parser.nodeSet), e4.from - t2.from), this.block = t2;
  }
  finish() {
    for (; this.stack.length > 1; ) this.finishContext();
    return this.addGaps(this.block.toTree(this.parser.nodeSet, this.lineStart));
  }
  addGaps(e4) {
    return this.ranges.length > 1 ? Ae(this.ranges, 0, e4.topNode, this.ranges[0].from, this.reusePlaceholders) : e4;
  }
  finishLeaf(e4) {
    for (let t3 of e4.parsers) if (t3.finish(this, e4)) return;
    let t2 = G(this.parser.parseInline(e4.content, e4.start), e4.marks);
    this.addNode(this.buffer.writeElements(t2, -e4.start).finish(y.Paragraph, e4.content.length), e4.start);
  }
  elt(e4, t2, n2, r2) {
    return typeof e4 == `string` ? L(this.parser.getNodeType(e4), t2, n2, r2) : new Ne(e4, t2);
  }
  get buffer() {
    return new F(this.parser.nodeSet);
  }
};
function Ae(e4, t2, r2, i2, a2) {
  let o2 = e4[t2].to, s2 = [], c2 = [], l2 = r2.from + i2;
  function u2(n2, r3) {
    for (; r3 ? n2 >= o2 : n2 > o2; ) {
      let r4 = e4[t2 + 1].from - o2;
      i2 += r4, n2 += r4, t2++, o2 = e4[t2].to;
    }
  }
  for (let n2 = r2.firstChild; n2; n2 = n2.nextSibling) {
    u2(n2.from + i2, true);
    let r3 = n2.from + i2, d2, f2 = a2.get(n2.tree);
    f2 ? d2 = f2 : n2.to + i2 > o2 ? (d2 = Ae(e4, t2, n2, i2, a2), u2(n2.to + i2, false)) : d2 = n2.toTree(), s2.push(d2), c2.push(r3 - l2);
  }
  return u2(r2.to + i2, false), new n(r2.type, s2, c2, r2.to + i2 - l2, r2.tree ? r2.tree.propValues : void 0);
}
var je = class e3 extends c {
  constructor(e4, t2, n2, r2, i2, a2, o2, s2, c2) {
    super(), this.nodeSet = e4, this.blockParsers = t2, this.leafBlockParsers = n2, this.blockNames = r2, this.endLeafBlock = i2, this.skipContextMarkup = a2, this.inlineParsers = o2, this.inlineNames = s2, this.wrappers = c2, this.nodeTypes = /* @__PURE__ */ Object.create(null);
    for (let t3 of e4.types) this.nodeTypes[t3.name] = t3.id;
  }
  createParse(e4, t2, n2) {
    let r2 = new ke(this, e4, t2, n2);
    for (let i2 of this.wrappers) r2 = i2(r2, e4, t2, n2);
    return r2;
  }
  configure(t2) {
    let n2 = M(t2);
    if (!n2) return this;
    let { nodeSet: r2, skipContextMarkup: i2 } = this, a2 = this.blockParsers.slice(), s2 = this.leafBlockParsers.slice(), c2 = this.blockNames.slice(), l2 = this.inlineParsers.slice(), u2 = this.inlineNames.slice(), f2 = this.endLeafBlock.slice(), p2 = this.wrappers;
    if (j(n2.defineNodes)) {
      i2 = Object.assign({}, i2);
      let e4 = r2.types.slice(), t3;
      for (let r3 of n2.defineNodes) {
        let { name: n3, block: a3, composite: o2, style: s3 } = typeof r3 == `string` ? { name: r3 } : r3;
        if (e4.some((e5) => e5.name == n3)) continue;
        o2 && (i2[e4.length] = (e5, t4, n4) => o2(t4, n4, e5.value));
        let c3 = e4.length, l3 = o2 ? [`Block`, `BlockContext`] : a3 ? c3 >= y.ATXHeading1 && c3 <= y.SetextHeading2 ? [`Block`, `LeafBlock`, `Heading`] : [`Block`, `LeafBlock`] : void 0;
        e4.push(d.define({ id: c3, name: n3, props: l3 && [[_.group, l3]] })), s3 && (t3 || (t3 = {}), Array.isArray(s3) || s3 instanceof te ? t3[n3] = s3 : Object.assign(t3, s3));
      }
      r2 = new v(e4), t3 && (r2 = r2.extend(o(t3)));
    }
    if (j(n2.props) && (r2 = r2.extend(...n2.props)), j(n2.remove)) for (let e4 of n2.remove) {
      let t3 = this.blockNames.indexOf(e4), n3 = this.inlineNames.indexOf(e4);
      t3 > -1 && (a2[t3] = s2[t3] = void 0), n3 > -1 && (l2[n3] = void 0);
    }
    if (j(n2.parseBlock)) for (let e4 of n2.parseBlock) {
      let t3 = c2.indexOf(e4.name);
      if (t3 > -1) a2[t3] = e4.parse, s2[t3] = e4.leaf;
      else {
        let t4 = e4.before ? N(c2, e4.before) : e4.after ? N(c2, e4.after) + 1 : c2.length - 1;
        a2.splice(t4, 0, e4.parse), s2.splice(t4, 0, e4.leaf), c2.splice(t4, 0, e4.name);
      }
      e4.endLeaf && f2.push(e4.endLeaf);
    }
    if (j(n2.parseInline)) for (let e4 of n2.parseInline) {
      let t3 = u2.indexOf(e4.name);
      if (t3 > -1) l2[t3] = e4.parse;
      else {
        let t4 = e4.before ? N(u2, e4.before) : e4.after ? N(u2, e4.after) + 1 : u2.length - 1;
        l2.splice(t4, 0, e4.parse), u2.splice(t4, 0, e4.name);
      }
    }
    return n2.wrap && (p2 = p2.concat(n2.wrap)), new e3(r2, a2, s2, c2, f2, i2, l2, u2, p2);
  }
  getNodeType(e4) {
    let t2 = this.nodeTypes[e4];
    if (t2 == null) throw RangeError(`Unknown node type '${e4}'`);
    return t2;
  }
  parseInline(e4, t2) {
    let n2 = new W(this, e4, t2);
    outer: for (let e5 = t2; e5 < n2.end; ) {
      let t3 = n2.char(e5);
      for (let r2 of this.inlineParsers) if (r2) {
        let i2 = r2(n2, t3, e5);
        if (i2 >= 0) {
          e5 = i2;
          continue outer;
        }
      }
      e5++;
    }
    return n2.resolveMarkers(0);
  }
};
function j(e4) {
  return e4 != null && e4.length > 0;
}
function M(e4) {
  if (!Array.isArray(e4)) return e4;
  if (e4.length == 0) return null;
  let t2 = M(e4[0]);
  if (e4.length == 1) return t2;
  let n2 = M(e4.slice(1));
  if (!n2 || !t2) return t2 || n2;
  let r2 = (e5, t3) => (e5 || P).concat(t3 || P), i2 = t2.wrap, a2 = n2.wrap;
  return { props: r2(t2.props, n2.props), defineNodes: r2(t2.defineNodes, n2.defineNodes), parseBlock: r2(t2.parseBlock, n2.parseBlock), parseInline: r2(t2.parseInline, n2.parseInline), remove: r2(t2.remove, n2.remove), wrap: i2 ? a2 ? (e5, t3, n3, r3) => i2(a2(e5, t3, n3, r3), t3, n3, r3) : i2 : a2 };
}
function N(e4, t2) {
  let n2 = e4.indexOf(t2);
  if (n2 < 0) throw RangeError(`Position specified relative to unknown parser ${t2}`);
  return n2;
}
var Me = [d.none];
for (let e4 = 1, t2; t2 = y[e4]; e4++) Me[e4] = d.define({ id: e4, name: t2, props: e4 >= y.Escape ? [] : [[_.group, e4 in me ? [`Block`, `BlockContext`] : [`Block`, `LeafBlock`]]], top: t2 == `Document` });
var P = [], F = class {
  constructor(e4) {
    this.nodeSet = e4, this.content = [], this.nodes = [];
  }
  write(e4, t2, n2, r2 = 0) {
    return this.content.push(e4, t2, n2, 4 + r2 * 4), this;
  }
  writeElements(e4, t2 = 0) {
    for (let n2 of e4) n2.writeTo(this, t2);
    return this;
  }
  finish(e4, t2) {
    return n.build({ buffer: this.content, nodeSet: this.nodeSet, reused: this.nodes, topID: e4, length: t2 });
  }
}, I = class {
  constructor(e4, t2, n2, r2 = P) {
    this.type = e4, this.from = t2, this.to = n2, this.children = r2;
  }
  writeTo(e4, t2) {
    let n2 = e4.content.length;
    e4.writeElements(this.children, t2), e4.content.push(this.type, this.from + t2, this.to + t2, e4.content.length + 4 - n2);
  }
  toTree(e4) {
    return new F(e4).writeElements(this.children, -this.from).finish(this.type, this.to - this.from);
  }
}, Ne = class {
  constructor(e4, t2) {
    this.tree = e4, this.from = t2;
  }
  get to() {
    return this.from + this.tree.length;
  }
  get type() {
    return this.tree.type.id;
  }
  get children() {
    return P;
  }
  writeTo(e4, t2) {
    e4.nodes.push(this.tree), e4.content.push(e4.nodes.length - 1, this.from + t2, this.to + t2, -1);
  }
  toTree() {
    return this.tree;
  }
};
function L(e4, t2, n2, r2) {
  return new I(e4, t2, n2, r2);
}
var Pe = { resolve: `Emphasis`, mark: `EmphasisMark` }, Fe = { resolve: `Emphasis`, mark: `EmphasisMark` }, R = {}, z = {}, B = class {
  constructor(e4, t2, n2, r2) {
    this.type = e4, this.from = t2, this.to = n2, this.side = r2;
  }
}, Ie = `!"#$%&'()*+,-./:;<=>?@[\\]^_\`{|}~`, V = /[!"#$%&'()*+,\-.\/:;<=>?@\[\\\]^_`{|}~\xA1\u2010-\u2027]/;
try {
  V = RegExp(`[\\p{S}|\\p{P}]`, `u`);
} catch {
}
var H = { Escape(e4, t2, n2) {
  if (t2 != 92 || n2 == e4.end - 1) return -1;
  let r2 = e4.char(n2 + 1);
  for (let t3 = 0; t3 < 32; t3++) if (Ie.charCodeAt(t3) == r2) return e4.append(L(y.Escape, n2, n2 + 2));
  return -1;
}, Entity(e4, t2, n2) {
  if (t2 != 38) return -1;
  let r2 = /^(?:#\d+|#x[a-f\d]+|\w+);/i.exec(e4.slice(n2 + 1, n2 + 31));
  return r2 ? e4.append(L(y.Entity, n2, n2 + 1 + r2[0].length)) : -1;
}, InlineCode(e4, t2, n2) {
  if (t2 != 96 || n2 && e4.char(n2 - 1) == 96) return -1;
  let r2 = n2 + 1;
  for (; r2 < e4.end && e4.char(r2) == 96; ) r2++;
  let i2 = r2 - n2, a2 = 0;
  for (; r2 < e4.end; r2++) if (e4.char(r2) == 96) {
    if (a2++, a2 == i2 && e4.char(r2 + 1) != 96) return e4.append(L(y.InlineCode, n2, r2 + 1, [L(y.CodeMark, n2, n2 + i2), L(y.CodeMark, r2 + 1 - i2, r2 + 1)]));
  } else a2 = 0;
  return -1;
}, HTMLTag(e4, t2, n2) {
  if (t2 != 60 || n2 == e4.end - 1) return -1;
  let r2 = e4.slice(n2 + 1, e4.end), i2 = /^(?:[a-z][-\w+.]+:[^\s>]+|[a-z\d.!#$%&'*+/=?^_`{|}~-]+@[a-z\d](?:[a-z\d-]{0,61}[a-z\d])?(?:\.[a-z\d](?:[a-z\d-]{0,61}[a-z\d])?)*)>/i.exec(r2);
  if (i2) return e4.append(L(y.Autolink, n2, n2 + 1 + i2[0].length, [L(y.LinkMark, n2, n2 + 1), L(y.URL, n2 + 1, n2 + i2[0].length), L(y.LinkMark, n2 + i2[0].length, n2 + 1 + i2[0].length)]));
  let a2 = /^!--[^>](?:-[^-]|[^-])*?-->/i.exec(r2);
  if (a2) return e4.append(L(y.Comment, n2, n2 + 1 + a2[0].length));
  let o2 = /^\?[^]*?\?>/.exec(r2);
  if (o2) return e4.append(L(y.ProcessingInstruction, n2, n2 + 1 + o2[0].length));
  let s2 = /^(?:![A-Z][^]*?>|!\[CDATA\[[^]*?\]\]>|\/\s*[a-zA-Z][\w-]*\s*>|\s*[a-zA-Z][\w-]*(\s+[a-zA-Z:_][\w-.:]*(?:\s*=\s*(?:[^\s"'=<>`]+|'[^']*'|"[^"]*"))?)*\s*(\/\s*)?>)/.exec(r2);
  return s2 ? e4.append(L(y.HTMLTag, n2, n2 + 1 + s2[0].length)) : -1;
}, Emphasis(e4, t2, n2) {
  if (t2 != 95 && t2 != 42) return -1;
  let r2 = n2 + 1;
  for (; e4.char(r2) == t2; ) r2++;
  let i2 = e4.slice(n2 - 1, n2), a2 = e4.slice(r2, r2 + 1), o2 = V.test(i2), s2 = V.test(a2), c2 = /\s|^$/.test(i2), l2 = /\s|^$/.test(a2), u2 = !l2 && (!s2 || c2 || o2), d2 = !c2 && (!o2 || l2 || s2), f2 = u2 && (t2 == 42 || !d2 || o2), p2 = d2 && (t2 == 42 || !u2 || s2);
  return e4.append(new B(t2 == 95 ? Pe : Fe, n2, r2, (f2 ? 1 : 0) | (p2 ? 2 : 0)));
}, HardBreak(e4, t2, n2) {
  if (t2 == 92 && e4.char(n2 + 1) == 10) return e4.append(L(y.HardBreak, n2, n2 + 2));
  if (t2 == 32) {
    let t3 = n2 + 1;
    for (; e4.char(t3) == 32; ) t3++;
    if (e4.char(t3) == 10 && t3 >= n2 + 2) return e4.append(L(y.HardBreak, n2, t3 + 1));
  }
  return -1;
}, Link(e4, t2, n2) {
  return t2 == 91 ? e4.append(new B(R, n2, n2 + 1, 1)) : -1;
}, Image(e4, t2, n2) {
  return t2 == 33 && e4.char(n2 + 1) == 91 ? e4.append(new B(z, n2, n2 + 2, 1)) : -1;
}, LinkEnd(e4, t2, n2) {
  if (t2 != 93) return -1;
  for (let t3 = e4.parts.length - 1; t3 >= 0; t3--) {
    let r2 = e4.parts[t3];
    if (r2 instanceof B && (r2.type == R || r2.type == z)) {
      if (!r2.side || e4.skipSpace(r2.to) == n2 && !/[(\[]/.test(e4.slice(n2 + 1, n2 + 2))) return e4.parts[t3] = null, -1;
      let i2 = e4.takeContent(t3), a2 = e4.parts[t3] = Le(e4, i2, r2.type == R ? y.Link : y.Image, r2.from, n2 + 1);
      if (r2.type == R) for (let n3 = 0; n3 < t3; n3++) {
        let t4 = e4.parts[n3];
        t4 instanceof B && t4.type == R && (t4.side = 0);
      }
      return a2.to;
    }
  }
  return -1;
} };
function Le(e4, t2, n2, r2, i2) {
  let { text: a2 } = e4, o2 = e4.char(i2), s2 = i2;
  if (t2.unshift(L(y.LinkMark, r2, r2 + (n2 == y.Image ? 2 : 1))), t2.push(L(y.LinkMark, i2 - 1, i2)), o2 == 40) {
    let n3 = e4.skipSpace(i2 + 1), r3 = Re(a2, n3 - e4.offset, e4.offset), o3;
    r3 && (n3 = e4.skipSpace(r3.to), n3 != r3.to && (o3 = U(a2, n3 - e4.offset, e4.offset), o3 && (n3 = e4.skipSpace(o3.to)))), e4.char(n3) == 41 && (t2.push(L(y.LinkMark, i2, i2 + 1)), s2 = n3 + 1, r3 && t2.push(r3), o3 && t2.push(o3), t2.push(L(y.LinkMark, n3, s2)));
  } else if (o2 == 91) {
    let n3 = ze(a2, i2 - e4.offset, e4.offset, false);
    n3 && (t2.push(n3), s2 = n3.to);
  }
  return L(n2, r2, s2, t2);
}
function Re(e4, t2, n2) {
  if (e4.charCodeAt(t2) == 60) {
    for (let r2 = t2 + 1; r2 < e4.length; r2++) {
      let i2 = e4.charCodeAt(r2);
      if (i2 == 62) return L(y.URL, t2 + n2, r2 + 1 + n2);
      if (i2 == 60 || i2 == 10) return false;
    }
    return null;
  } else {
    let r2 = 0, i2 = t2;
    for (let t3 = false; i2 < e4.length; i2++) {
      let n3 = e4.charCodeAt(i2);
      if (b(n3)) break;
      if (t3) t3 = false;
      else if (n3 == 40) r2++;
      else if (n3 == 41) {
        if (!r2) break;
        r2--;
      } else n3 == 92 && (t3 = true);
    }
    return i2 > t2 ? L(y.URL, t2 + n2, i2 + n2) : i2 == e4.length ? null : false;
  }
}
function U(e4, t2, n2) {
  let r2 = e4.charCodeAt(t2);
  if (r2 != 39 && r2 != 34 && r2 != 40) return false;
  let i2 = r2 == 40 ? 41 : r2;
  for (let r3 = t2 + 1, a2 = false; r3 < e4.length; r3++) {
    let o2 = e4.charCodeAt(r3);
    if (a2) a2 = false;
    else if (o2 == i2) return L(y.LinkTitle, t2 + n2, r3 + 1 + n2);
    else o2 == 92 && (a2 = true);
  }
  return null;
}
function ze(e4, t2, n2, r2) {
  for (let i2 = false, a2 = t2 + 1, o2 = Math.min(e4.length, a2 + 999); a2 < o2; a2++) {
    let o3 = e4.charCodeAt(a2);
    if (i2) i2 = false;
    else if (o3 == 93) return r2 ? false : L(y.LinkLabel, t2 + n2, a2 + 1 + n2);
    else {
      if (r2 && !b(o3) && (r2 = false), o3 == 91) return false;
      o3 == 92 && (i2 = true);
    }
  }
  return null;
}
var W = class {
  constructor(e4, t2, n2) {
    this.parser = e4, this.text = t2, this.offset = n2, this.parts = [];
  }
  char(e4) {
    return e4 >= this.end ? -1 : this.text.charCodeAt(e4 - this.offset);
  }
  get end() {
    return this.offset + this.text.length;
  }
  slice(e4, t2) {
    return this.text.slice(e4 - this.offset, t2 - this.offset);
  }
  append(e4) {
    return this.parts.push(e4), e4.to;
  }
  addDelimiter(e4, t2, n2, r2, i2) {
    return this.append(new B(e4, t2, n2, (r2 ? 1 : 0) | (i2 ? 2 : 0)));
  }
  get hasOpenLink() {
    for (let e4 = this.parts.length - 1; e4 >= 0; e4--) {
      let t2 = this.parts[e4];
      if (t2 instanceof B && (t2.type == R || t2.type == z)) return true;
    }
    return false;
  }
  addElement(e4) {
    return this.append(e4);
  }
  resolveMarkers(e4) {
    for (let t3 = e4; t3 < this.parts.length; t3++) {
      let n2 = this.parts[t3];
      if (!(n2 instanceof B && n2.type.resolve && n2.side & 2)) continue;
      let r2 = n2.type == Pe || n2.type == Fe, i2 = n2.to - n2.from, a2, o2 = t3 - 1;
      for (; o2 >= e4; o2--) {
        let e5 = this.parts[o2];
        if (e5 instanceof B && e5.side & 1 && e5.type == n2.type && !(r2 && (n2.side & 1 || e5.side & 2) && (e5.to - e5.from + i2) % 3 == 0 && ((e5.to - e5.from) % 3 || i2 % 3))) {
          a2 = e5;
          break;
        }
      }
      if (!a2) continue;
      let s2 = n2.type.resolve, c2 = [], l2 = a2.from, u2 = n2.to;
      if (r2) {
        let e5 = Math.min(2, a2.to - a2.from, i2);
        l2 = a2.to - e5, u2 = n2.from + e5, s2 = e5 == 1 ? `Emphasis` : `StrongEmphasis`;
      }
      a2.type.mark && c2.push(this.elt(a2.type.mark, l2, a2.to));
      for (let e5 = o2 + 1; e5 < t3; e5++) this.parts[e5] instanceof I && c2.push(this.parts[e5]), this.parts[e5] = null;
      n2.type.mark && c2.push(this.elt(n2.type.mark, n2.from, u2));
      let d2 = this.elt(s2, l2, u2, c2);
      this.parts[o2] = r2 && a2.from != l2 ? new B(a2.type, a2.from, l2, a2.side) : null, (this.parts[t3] = r2 && n2.to != u2 ? new B(n2.type, u2, n2.to, n2.side) : null) ? this.parts.splice(t3, 0, d2) : this.parts[t3] = d2;
    }
    let t2 = [];
    for (let n2 = e4; n2 < this.parts.length; n2++) {
      let e5 = this.parts[n2];
      e5 instanceof I && t2.push(e5);
    }
    return t2;
  }
  findOpeningDelimiter(e4) {
    for (let t2 = this.parts.length - 1; t2 >= 0; t2--) {
      let n2 = this.parts[t2];
      if (n2 instanceof B && n2.type == e4 && n2.side & 1) return t2;
    }
    return null;
  }
  takeContent(e4) {
    let t2 = this.resolveMarkers(e4);
    return this.parts.length = e4, t2;
  }
  getDelimiterAt(e4) {
    let t2 = this.parts[e4];
    return t2 instanceof B ? t2 : null;
  }
  skipSpace(e4) {
    return x(this.text, e4 - this.offset) + this.offset;
  }
  elt(e4, t2, n2, r2) {
    return typeof e4 == `string` ? L(this.parser.getNodeType(e4), t2, n2, r2) : new Ne(e4, t2);
  }
};
W.linkStart = R, W.imageStart = z;
function G(e4, t2) {
  if (!t2.length) return e4;
  if (!e4.length) return t2;
  let n2 = e4.slice(), r2 = 0;
  for (let e5 of t2) {
    for (; r2 < n2.length && n2[r2].to < e5.to; ) r2++;
    if (r2 < n2.length && n2[r2].from < e5.from) {
      let t3 = n2[r2];
      t3 instanceof I && (n2[r2] = new I(t3.type, t3.from, t3.to, G(t3.children, [e5])));
    } else n2.splice(r2++, 0, e5);
  }
  return n2;
}
var Be = [y.CodeBlock, y.ListItem, y.OrderedList, y.BulletList], Ve = class {
  constructor(e4, t2) {
    this.fragments = e4, this.input = t2, this.i = 0, this.fragment = null, this.fragmentEnd = -1, this.cursor = null, e4.length && (this.fragment = e4[this.i++]);
  }
  nextFragment() {
    this.fragment = this.i < this.fragments.length ? this.fragments[this.i++] : null, this.cursor = null, this.fragmentEnd = -1;
  }
  moveTo(e4, t2) {
    for (; this.fragment && this.fragment.to <= e4; ) this.nextFragment();
    if (!this.fragment || this.fragment.from > (e4 ? e4 - 1 : 0)) return false;
    if (this.fragmentEnd < 0) {
      let e5 = this.fragment.to;
      for (; e5 > 0 && this.input.read(e5 - 1, e5) != `
`; ) e5--;
      this.fragmentEnd = e5 ? e5 - 1 : 0;
    }
    let n2 = this.cursor;
    n2 || (n2 = this.cursor = this.fragment.tree.cursor(), n2.firstChild());
    let r2 = e4 + this.fragment.offset;
    for (; n2.to <= r2; ) if (!n2.parent()) return false;
    for (; ; ) {
      if (n2.from >= r2) return this.fragment.from <= t2;
      if (!n2.childAfter(r2)) return false;
    }
  }
  matches(e4) {
    let t2 = this.cursor.tree;
    return t2 && t2.prop(_.contextHash) == e4;
  }
  takeNodes(e4) {
    let t2 = this.cursor, r2 = this.fragment.offset, i2 = this.fragmentEnd - (this.fragment.openEnd ? 1 : 0), a2 = e4.absoluteLineStart, o2 = a2, s2 = e4.block.children.length, c2 = o2, l2 = s2;
    for (; ; ) {
      if (t2.to - r2 > i2) {
        if (t2.type.isAnonymous && t2.firstChild()) continue;
        break;
      }
      let a3 = He(t2.from - r2, e4.ranges);
      if (t2.to - r2 <= e4.ranges[e4.rangeI].to) e4.addNode(t2.tree, a3);
      else {
        let r3 = new n(e4.parser.nodeSet.types[y.Paragraph], [], [], 0, e4.block.hashProp);
        e4.reusePlaceholders.set(r3, t2.tree), e4.addNode(r3, a3);
      }
      if (t2.type.is(`Block`) && (Be.indexOf(t2.type.id) < 0 ? (o2 = t2.to - r2, s2 = e4.block.children.length) : (o2 = c2, s2 = l2), c2 = t2.to - r2, l2 = e4.block.children.length), !t2.nextSibling()) break;
    }
    for (; e4.block.children.length > s2; ) e4.block.children.pop(), e4.block.positions.pop();
    return o2 - a2;
  }
};
function He(e4, t2) {
  let n2 = e4;
  for (let r2 = 1; r2 < t2.length; r2++) {
    let i2 = t2[r2 - 1].to, a2 = t2[r2].from;
    i2 < e4 && (n2 -= a2 - i2);
  }
  return n2;
}
var Ue = o({ "Blockquote/...": s.quote, HorizontalRule: s.contentSeparator, "ATXHeading1/... SetextHeading1/...": s.heading1, "ATXHeading2/... SetextHeading2/...": s.heading2, "ATXHeading3/...": s.heading3, "ATXHeading4/...": s.heading4, "ATXHeading5/...": s.heading5, "ATXHeading6/...": s.heading6, "Comment CommentBlock": s.comment, Escape: s.escape, Entity: s.character, "Emphasis/...": s.emphasis, "StrongEmphasis/...": s.strong, "Link/... Image/...": s.link, "OrderedList/... BulletList/...": s.list, "BlockQuote/...": s.quote, "InlineCode CodeText": s.monospace, "URL Autolink": s.url, "HeaderMark HardBreak QuoteMark ListMark LinkMark EmphasisMark CodeMark": s.processingInstruction, "CodeInfo LinkLabel": s.labelName, LinkTitle: s.string, Paragraph: s.content }), We = new je(new v(Me).extend(Ue), Object.keys(k).map((e4) => k[e4]), Object.keys(k).map((e4) => Ee[e4]), Object.keys(k), De, me, Object.keys(H).map((e4) => H[e4]), Object.keys(H), []);
function Ge(e4, t2, n2) {
  let r2 = [];
  for (let i2 = e4.firstChild, a2 = t2; ; i2 = i2.nextSibling) {
    let e5 = i2 ? i2.from : n2;
    if (e5 > a2 && r2.push({ from: a2, to: e5 }), !i2) break;
    a2 = i2.to;
  }
  return r2;
}
function Ke(e4) {
  let { codeParser: t2, htmlParser: n2 } = e4;
  return { wrap: ae((e5, r2) => {
    let i2 = e5.type.id;
    if (t2 && (i2 == y.CodeBlock || i2 == y.FencedCode)) {
      let n3 = ``;
      if (i2 == y.FencedCode) {
        let t3 = e5.node.getChild(y.CodeInfo);
        t3 && (n3 = r2.read(t3.from, t3.to));
      }
      let a2 = t2(n3);
      if (a2) return { parser: a2, overlay: (e6) => e6.type.id == y.CodeText, bracketed: i2 == y.FencedCode };
    } else if (n2 && (i2 == y.HTMLBlock || i2 == y.HTMLTag || i2 == y.CommentBlock)) return { parser: n2, overlay: Ge(e5.node, e5.from, e5.to) };
    return null;
  }) };
}
var qe = { resolve: `Strikethrough`, mark: `StrikethroughMark` }, Je = { defineNodes: [{ name: `Strikethrough`, style: { "Strikethrough/...": s.strikethrough } }, { name: `StrikethroughMark`, style: s.processingInstruction }], parseInline: [{ name: `Strikethrough`, parse(e4, t2, n2) {
  if (t2 != 126 || e4.char(n2 + 1) != 126 || e4.char(n2 + 2) == 126) return -1;
  let r2 = e4.slice(n2 - 1, n2), i2 = e4.slice(n2 + 2, n2 + 3), a2 = /\s|^$/.test(r2), o2 = /\s|^$/.test(i2), s2 = V.test(r2), c2 = V.test(i2);
  return e4.addDelimiter(qe, n2, n2 + 2, !o2 && (!c2 || a2 || s2), !a2 && (!s2 || o2 || c2));
}, after: `Emphasis` }] };
function K(e4, t2, n2 = 0, r2, i2 = 0) {
  let a2 = 0, o2 = true, s2 = -1, c2 = -1, l2 = false, u2 = () => {
    r2.push(e4.elt(`TableCell`, i2 + s2, i2 + c2, e4.parser.parseInline(t2.slice(s2, c2), i2 + s2)));
  };
  for (let d2 = n2; d2 < t2.length; d2++) {
    let n3 = t2.charCodeAt(d2);
    n3 == 124 && !l2 ? ((!o2 || s2 > -1) && a2++, o2 = false, r2 && (s2 > -1 && u2(), r2.push(e4.elt(`TableDelimiter`, d2 + i2, d2 + i2 + 1))), s2 = c2 = -1) : (l2 || n3 != 32 && n3 != 9) && (s2 < 0 && (s2 = d2), c2 = d2 + 1), l2 = !l2 && n3 == 92;
  }
  return s2 > -1 && (a2++, r2 && u2()), a2;
}
function Ye(e4, t2) {
  for (let n2 = t2; n2 < e4.length; n2++) {
    let t3 = e4.charCodeAt(n2);
    if (t3 == 124) return true;
    t3 == 92 && n2++;
  }
  return false;
}
var Xe = /^\|?(\s*:?-+:?\s*\|)+(\s*:?-+:?\s*)?$/, Ze = class {
  constructor() {
    this.rows = null;
  }
  nextLine(e4, t2, n2) {
    if (this.rows == null) {
      this.rows = false;
      let r2;
      if ((t2.next == 45 || t2.next == 58 || t2.next == 124) && Xe.test(r2 = t2.text.slice(t2.pos))) {
        let i2 = [];
        K(e4, n2.content, 0, i2, n2.start) == K(e4, r2, t2.pos) && (this.rows = [e4.elt(`TableHeader`, n2.start, n2.start + n2.content.length, i2), e4.elt(`TableDelimiter`, e4.lineStart + t2.pos, e4.lineStart + t2.text.length)]);
      }
    } else if (this.rows) {
      let n3 = [];
      K(e4, t2.text, t2.pos, n3, e4.lineStart), this.rows.push(e4.elt(`TableRow`, e4.lineStart + t2.pos, e4.lineStart + t2.text.length, n3));
    }
    return false;
  }
  finish(e4, t2) {
    return this.rows ? (e4.addLeafElement(t2, e4.elt(`Table`, t2.start, t2.start + t2.content.length, this.rows)), true) : false;
  }
}, Qe = { defineNodes: [{ name: `Table`, block: true }, { name: `TableHeader`, style: { "TableHeader/...": s.heading } }, `TableRow`, { name: `TableCell`, style: s.content }, { name: `TableDelimiter`, style: s.processingInstruction }], parseBlock: [{ name: `Table`, leaf(e4, t2) {
  return Ye(t2.content, 0) ? new Ze() : null;
}, endLeaf(e4, t2, n2) {
  if (n2.parsers.some((e5) => e5 instanceof Ze) || !Ye(t2.text, t2.basePos)) return false;
  let r2 = e4.peekLine();
  return Xe.test(r2) && K(e4, t2.text, t2.basePos) == K(e4, r2, t2.basePos);
}, before: `SetextHeading` }] }, $e = class {
  nextLine() {
    return false;
  }
  finish(e4, t2) {
    return e4.addLeafElement(t2, e4.elt(`Task`, t2.start, t2.start + t2.content.length, [e4.elt(`TaskMarker`, t2.start, t2.start + 3), ...e4.parser.parseInline(t2.content.slice(3), t2.start + 3)])), true;
  }
}, et = { defineNodes: [{ name: `Task`, block: true, style: s.list }, { name: `TaskMarker`, style: s.atom }], parseBlock: [{ name: `TaskList`, leaf(e4, t2) {
  return /^\[[ xX]\][ \t]/.test(t2.content) && e4.parentType().name == `ListItem` ? new $e() : null;
}, after: `SetextHeading` }] }, tt = /(www\.)|(https?:\/\/)|([\w.+-]{1,100}@)|(mailto:|xmpp:)/gy, nt = /[\w-]+(\.[\w-]+)+(\/[^\s<]*)?/gy, rt = /[\w-]+\.[\w-]+($|\/)/, it = /[\w.+-]+@[\w-]+(\.[\w.-]+)+/gy, at = /\/[a-zA-Z\d@.]+/gy;
function ot(e4, t2, n2, r2) {
  let i2 = 0;
  for (let a2 = t2; a2 < n2; a2++) e4[a2] == r2 && i2++;
  return i2;
}
function st(e4, t2) {
  nt.lastIndex = t2;
  let n2 = nt.exec(e4);
  if (!n2 || rt.exec(n2[0])[0].indexOf(`_`) > -1) return -1;
  let r2 = t2 + n2[0].length;
  for (; ; ) {
    let n3 = e4[r2 - 1], i2;
    if (/[?!.,:*_~]/.test(n3) || n3 == `)` && ot(e4, t2, r2, `)`) > ot(e4, t2, r2, `(`)) r2--;
    else if (n3 == `;` && (i2 = /&(?:#\d+|#x[a-f\d]+|\w+);$/.exec(e4.slice(t2, r2)))) r2 = t2 + i2.index;
    else break;
  }
  return r2;
}
function ct(e4, t2) {
  it.lastIndex = t2;
  let n2 = it.exec(e4);
  if (!n2) return -1;
  let r2 = n2[0][n2[0].length - 1];
  return r2 == `_` || r2 == `-` ? -1 : t2 + n2[0].length - (r2 == `.` ? 1 : 0);
}
var lt = [Qe, et, Je, { parseInline: [{ name: `Autolink`, parse(e4, t2, n2) {
  let r2 = n2 - e4.offset;
  if (r2 && /\w/.test(e4.text[r2 - 1])) return -1;
  tt.lastIndex = r2;
  let i2 = tt.exec(e4.text), a2 = -1;
  return !i2 || (i2[1] || i2[2] ? (a2 = st(e4.text, r2 + i2[0].length), a2 > -1 && e4.hasOpenLink && (a2 = r2 + /([^\[\]]|\[[^\]]*\])*/.exec(e4.text.slice(r2, a2))[0].length)) : i2[3] ? a2 = ct(e4.text, r2) : (a2 = ct(e4.text, r2 + i2[0].length), a2 > -1 && i2[0] == `xmpp:` && (at.lastIndex = a2, i2 = at.exec(e4.text), i2 && (a2 = i2.index + i2[0].length))), a2 < 0) ? -1 : (e4.addElement(e4.elt(`URL`, n2, a2 + e4.offset)), a2 + e4.offset);
} }] }];
function ut(e4, t2, n2) {
  return (r2, i2, a2) => {
    if (i2 != e4 || r2.char(a2 + 1) == e4) return -1;
    let o2 = [r2.elt(n2, a2, a2 + 1)];
    for (let i3 = a2 + 1; i3 < r2.end; i3++) {
      let s2 = r2.char(i3);
      if (s2 == e4) return r2.addElement(r2.elt(t2, a2, i3 + 1, o2.concat(r2.elt(n2, i3, i3 + 1))));
      if (s2 == 92 && o2.push(r2.elt(`Escape`, i3, i3++ + 2)), b(s2)) break;
    }
    return -1;
  };
}
var dt = { defineNodes: [{ name: `Superscript`, style: s.special(s.content) }, { name: `SuperscriptMark`, style: s.processingInstruction }], parseInline: [{ name: `Superscript`, parse: ut(94, `Superscript`, `SuperscriptMark`) }] }, ft = { defineNodes: [{ name: `Subscript`, style: s.special(s.content) }, { name: `SubscriptMark`, style: s.processingInstruction }], parseInline: [{ name: `Subscript`, parse: ut(126, `Subscript`, `SubscriptMark`) }] }, pt = { defineNodes: [{ name: `Emoji`, style: s.character }], parseInline: [{ name: `Emoji`, parse(e4, t2, n2) {
  let r2;
  return t2 != 58 || !(r2 = /^[a-zA-Z_0-9]+:/.exec(e4.slice(n2 + 1, e4.end))) ? -1 : e4.addElement(e4.elt(`Emoji`, n2, n2 + 1 + r2[0].length));
} }] }, mt = h({ commentTokens: { block: { open: `<!--`, close: `-->` } } }), ht = new _(), gt = We.configure({ props: [oe.add((e4) => !e4.is(`Block`) || e4.is(`Document`) || q(e4) != null || _t(e4) ? void 0 : (e5, t2) => ({ from: t2.doc.lineAt(e5.from).to, to: e5.to })), ht.add(q), t.add({ Document: () => null }), r.add({ Document: mt })] });
function q(e4) {
  let t2 = /^(?:ATX|Setext)Heading(\d)$/.exec(e4.name);
  return t2 ? +t2[1] : void 0;
}
function _t(e4) {
  return e4.name == `OrderedList` || e4.name == `BulletList`;
}
function vt(e4, t2) {
  let n2 = e4;
  for (; ; ) {
    let e5 = n2.nextSibling, r2;
    if (!e5 || (r2 = q(e5.type)) != null && r2 <= t2) break;
    n2 = e5;
  }
  return n2.to;
}
var yt = u.of((t2, n2, r2) => {
  for (let i2 = e(t2).resolveInner(r2, -1); i2 && !(i2.from < n2); i2 = i2.parent) {
    let e4 = i2.type.prop(ht);
    if (e4 == null) continue;
    let t3 = vt(i2, e4);
    if (t3 > r2) return { from: r2, to: t3 };
  }
  return null;
});
function J(e4) {
  return new f(mt, e4, [], `markdown`);
}
var bt = J(gt), Y = J(gt.configure([lt, ft, dt, pt, { props: [oe.add({ Table: (e4, t2) => ({ from: t2.doc.lineAt(e4.from).to, to: e4.to }) })] }]));
function xt(e4, t2) {
  return (n2) => {
    if (n2 && e4) {
      let t3 = null;
      if (n2 = /\S*/.exec(n2)[0], t3 = typeof e4 == `function` ? e4(n2) : ne.matchLanguageName(e4, n2, true), t3 instanceof ne) return t3.support ? t3.support.language.parser : p.getSkippingParser(t3.load());
      if (t3) return t3.parser;
    }
    return t2 ? t2.parser : null;
  };
}
var X = class {
  constructor(e4, t2, n2, r2, i2, a2, o2) {
    this.node = e4, this.from = t2, this.to = n2, this.spaceBefore = r2, this.spaceAfter = i2, this.type = a2, this.item = o2;
  }
  blank(e4, t2 = true) {
    let n2 = this.spaceBefore + (this.node.name == `Blockquote` ? `>` : ``);
    if (e4 != null) {
      for (; n2.length < e4; ) n2 += ` `;
      return n2;
    } else {
      for (let e5 = this.to - this.from - n2.length - this.spaceAfter.length; e5 > 0; e5--) n2 += ` `;
      return n2 + (t2 ? this.spaceAfter : ``);
    }
  }
  marker(e4, t2) {
    let n2 = this.node.name == `OrderedList` ? String(+Ct(this.item, e4)[2] + t2) : ``;
    return this.spaceBefore + n2 + this.type + this.spaceAfter;
  }
};
function St(e4, t2) {
  let n2 = [], r2 = [];
  for (let t3 = e4; t3; t3 = t3.parent) {
    if (t3.name == `FencedCode`) return r2;
    (t3.name == `ListItem` || t3.name == `Blockquote`) && n2.push(t3);
  }
  for (let e5 = n2.length - 1; e5 >= 0; e5--) {
    let i2 = n2[e5], a2, o2 = t2.lineAt(i2.from), s2 = i2.from - o2.from;
    if (i2.name == `Blockquote` && (a2 = /^ *>( ?)/.exec(o2.text.slice(s2)))) r2.push(new X(i2, s2, s2 + a2[0].length, ``, a2[1], `>`, null));
    else if (i2.name == `ListItem` && i2.parent.name == `OrderedList` && (a2 = /^( *)\d+([.)])( *)/.exec(o2.text.slice(s2)))) {
      let e6 = a2[3], t3 = a2[0].length;
      e6.length >= 4 && (e6 = e6.slice(0, e6.length - 4), t3 -= 4), r2.push(new X(i2.parent, s2, s2 + t3, a2[1], e6, a2[2], i2));
    } else if (i2.name == `ListItem` && i2.parent.name == `BulletList` && (a2 = /^( *)([-+*])( {1,4}\[[ xX]\])?( +)/.exec(o2.text.slice(s2)))) {
      let e6 = a2[4], t3 = a2[0].length;
      e6.length > 4 && (e6 = e6.slice(0, e6.length - 4), t3 -= 4);
      let n3 = a2[2];
      a2[3] && (n3 += a2[3].replace(/[xX]/, ` `)), r2.push(new X(i2.parent, s2, s2 + t3, a2[1], e6, n3, i2));
    }
  }
  return r2;
}
function Ct(e4, t2) {
  return /^(\s*)(\d+)(?=[.)])/.exec(t2.sliceString(e4.from, e4.from + 10));
}
function Z(e4, t2, n2, r2 = 0) {
  for (let i2 = -1, a2 = e4; ; ) {
    if (a2.name == `ListItem`) {
      let e6 = Ct(a2, t2), o2 = +e6[2];
      if (i2 >= 0) {
        if (o2 != i2 + 1) return;
        n2.push({ from: a2.from + e6[1].length, to: a2.from + e6[0].length, insert: String(i2 + 2 + r2) });
      }
      i2 = o2;
    }
    let e5 = a2.nextSibling;
    if (!e5) break;
    a2 = e5;
  }
}
function Q(e4, t2) {
  let n2 = /^[ \t]*/.exec(e4)[0].length;
  if (!n2 || t2.facet(l) != `	`) return e4;
  let r2 = g(e4, 4, n2), i2 = ``;
  for (let e5 = r2; e5 > 0; ) e5 >= 4 ? (i2 += `	`, e5 -= 4) : (i2 += ` `, e5--);
  return i2 + e4.slice(n2);
}
var wt = (t2 = {}) => ({ state: n2, dispatch: r2 }) => {
  let i2 = e(n2), { doc: a2 } = n2, o2 = null, s2 = n2.changeByRange((e4) => {
    if (!e4.empty || !Y.isActiveAt(n2, e4.from, -1) && !Y.isActiveAt(n2, e4.from, 1)) return o2 = { range: e4 };
    let r3 = e4.from, s3 = a2.lineAt(r3), c2 = St(i2.resolveInner(r3, -1), a2);
    for (; c2.length && c2[c2.length - 1].from > r3 - s3.from; ) c2.pop();
    if (!c2.length) return o2 = { range: e4 };
    let l2 = c2[c2.length - 1];
    if (l2.to - l2.spaceAfter.length > r3 - s3.from) return o2 = { range: e4 };
    let u2 = r3 >= l2.to - l2.spaceAfter.length && !/\S/.test(s3.text.slice(l2.to));
    if (l2.item && u2) {
      let e5 = l2.node.firstChild, i3 = l2.node.getChild(`ListItem`, `ListItem`);
      if (e5.to >= r3 || i3 && i3.to < r3 || s3.from > 0 && !/[^\s>]/.test(a2.lineAt(s3.from - 1).text) || t2.nonTightLists === false) {
        let e6 = c2.length > 1 ? c2[c2.length - 2] : null, t3, n3 = ``;
        e6 && e6.item ? (t3 = s3.from + e6.from, n3 = e6.marker(a2, 1)) : t3 = s3.from + (e6 ? e6.to : 0);
        let i4 = [{ from: t3, to: r3, insert: n3 }];
        return l2.node.name == `OrderedList` && Z(l2.item, a2, i4, -2), e6 && e6.node.name == `OrderedList` && Z(e6.item, a2, i4), { range: m.cursor(t3 + n3.length), changes: i4 };
      } else {
        let e6 = Ot(c2, n2, s3);
        return { range: m.cursor(r3 + e6.length + 1), changes: { from: s3.from, insert: e6 + n2.lineBreak } };
      }
    }
    if (l2.node.name == `Blockquote` && u2 && s3.from) {
      let t3 = a2.lineAt(s3.from - 1), r4 = />\s*$/.exec(t3.text);
      if (r4 && r4.index == l2.from) {
        let i3 = n2.changes([{ from: t3.from + r4.index, to: t3.to }, { from: s3.from + l2.from, to: s3.to }]);
        return { range: e4.map(i3), changes: i3 };
      }
    }
    let d2 = [];
    l2.node.name == `OrderedList` && Z(l2.item, a2, d2);
    let f2 = l2.item && l2.item.from < s3.from, p2 = ``;
    if (!f2 || /^[\s\d.)\-+*>]*/.exec(s3.text)[0].length >= l2.to) for (let e5 = 0, t3 = c2.length - 1; e5 <= t3; e5++) p2 += e5 == t3 && !f2 ? c2[e5].marker(a2, 1) : c2[e5].blank(e5 < t3 ? g(s3.text, 4, c2[e5 + 1].from) - p2.length : null);
    let h2 = r3;
    for (; h2 > s3.from && /\s/.test(s3.text.charAt(h2 - s3.from - 1)); ) h2--;
    return p2 = Q(p2, n2), Dt(l2.node, n2.doc) && (p2 = Ot(c2, n2, s3) + n2.lineBreak + p2), d2.push({ from: h2, to: r3, insert: n2.lineBreak + p2 }), { range: m.cursor(h2 + p2.length + 1), changes: d2 };
  });
  return o2 ? false : (r2(n2.update(s2, { scrollIntoView: true, userEvent: `input` })), true);
}, Tt = wt();
function Et(e4) {
  return e4.name == `QuoteMark` || e4.name == `ListMark`;
}
function Dt(e4, t2) {
  if (e4.name != `OrderedList` && e4.name != `BulletList`) return false;
  let n2 = e4.firstChild, r2 = e4.getChild(`ListItem`, `ListItem`);
  if (!r2) return false;
  let i2 = t2.lineAt(n2.to), a2 = t2.lineAt(r2.from), o2 = /^[\s>]*$/.test(i2.text);
  return i2.number + (o2 ? 0 : 1) < a2.number;
}
function Ot(e4, t2, n2) {
  let r2 = ``;
  for (let t3 = 0, i2 = e4.length - 2; t3 <= i2; t3++) r2 += e4[t3].blank(t3 < i2 ? g(n2.text, 4, e4[t3 + 1].from) - r2.length : null, t3 < i2);
  return Q(r2, t2);
}
function kt(e4, t2) {
  let n2 = e4.resolveInner(t2, -1), r2 = t2;
  Et(n2) && (r2 = n2.from, n2 = n2.parent);
  for (let e5; e5 = n2.childBefore(r2); ) if (Et(e5)) r2 = e5.from;
  else if (e5.name == `OrderedList` || e5.name == `BulletList`) n2 = e5.lastChild, r2 = n2.to;
  else break;
  return n2;
}
var At = ({ state: t2, dispatch: n2 }) => {
  let r2 = e(t2), i2 = null, a2 = t2.changeByRange((e4) => {
    let n3 = e4.from, { doc: a3 } = t2;
    if (e4.empty && Y.isActiveAt(t2, e4.from)) {
      let e5 = a3.lineAt(n3), i3 = St(kt(r2, n3), a3);
      if (i3.length) {
        let r3 = i3[i3.length - 1], a4 = r3.to - r3.spaceAfter.length + (r3.spaceAfter ? 1 : 0);
        if (n3 - e5.from > a4 && !/\S/.test(e5.text.slice(a4, n3 - e5.from))) return { range: m.cursor(e5.from + a4), changes: { from: e5.from + a4, to: n3 } };
        if (n3 - e5.from == a4 && (!r3.item || e5.from <= r3.item.from || !/\S/.test(e5.text.slice(0, r3.to)))) {
          let i4 = e5.from + r3.from;
          if (r3.item && r3.node.from < r3.item.from && /\S/.test(e5.text.slice(r3.from, r3.to))) {
            let n4 = r3.blank(g(e5.text, 4, r3.to) - g(e5.text, 4, r3.from));
            return i4 == e5.from && (n4 = Q(n4, t2)), { range: m.cursor(i4 + n4.length), changes: { from: i4, to: e5.from + r3.to, insert: n4 } };
          }
          if (i4 < n3) return { range: m.cursor(i4), changes: { from: i4, to: n3 } };
        }
      }
    }
    return i2 = { range: e4 };
  });
  return i2 ? false : (n2(t2.update(a2, { scrollIntoView: true, userEvent: `delete` })), true);
}, jt = [{ key: `Enter`, run: Tt }, { key: `Backspace`, run: At }], Mt = se({ matchClosingTags: false });
function Nt(e4 = {}) {
  let { codeLanguages: t2, defaultCodeLanguage: n2, addKeymap: r2 = true, base: { parser: a2 } = bt, completeHTMLTags: o2 = true, pasteURLAsLink: s2 = true, htmlTagLanguage: c2 = Mt } = e4;
  if (!(a2 instanceof je)) throw RangeError("Base parser provided to `markdown` should be a Markdown parser");
  let l2 = e4.extensions ? [e4.extensions] : [], u2 = [c2.support, yt], d2;
  s2 && u2.push(Lt), n2 instanceof ie ? (u2.push(n2.support), d2 = n2.language) : n2 && (d2 = n2);
  let f2 = t2 || d2 ? xt(t2, d2) : void 0;
  l2.push(Ke({ codeParser: f2, htmlParser: c2.language.parser })), r2 && u2.push(ee.high(i.of(jt)));
  let p2 = J(a2.configure(l2));
  return o2 && u2.push(p2.data.of({ autocomplete: Pt })), new ie(p2, u2);
}
function Pt(t2) {
  let { state: n2, pos: r2 } = t2, i2 = /<[:\-\.\w\u00b7-\uffff]*$/.exec(n2.sliceDoc(r2 - 25, r2));
  if (!i2) return null;
  let a2 = e(n2).resolveInner(r2, -1);
  for (; a2 && !a2.type.isTop; ) {
    if (a2.name == `CodeBlock` || a2.name == `FencedCode` || a2.name == `ProcessingInstructionBlock` || a2.name == `CommentBlock` || a2.name == `Link` || a2.name == `Image`) return null;
    a2 = a2.parent;
  }
  return { from: r2 - i2[0].length, to: r2, options: Ft(), validFor: /^<[:\-\.\w\u00b7-\uffff]*$/ };
}
var $ = null;
function Ft() {
  if ($) return $;
  let e4 = ce(new le(re.create({ extensions: Mt }), 0, true));
  return $ = e4 ? e4.options : [];
}
var It = /code|horizontalrule|html|link|comment|processing|escape|entity|image|mark|url/i, Lt = a.domEventHandlers({ paste: (t2, n2) => {
  var _a;
  let { main: r2 } = n2.state.selection;
  if (r2.empty) return false;
  let i2 = (_a = t2.clipboardData) == null ? void 0 : _a.getData(`text/plain`);
  if (!i2 || !/^(https?:\/\/|mailto:|xmpp:|www\.)/.test(i2) || (/^www\./.test(i2) && (i2 = `https://` + i2), !Y.isActiveAt(n2.state, r2.from, 1))) return false;
  let a2 = e(n2.state), o2 = false;
  return a2.iterate({ from: r2.from, to: r2.to, enter: (e4) => {
    (e4.from > r2.from || It.test(e4.name)) && (o2 = true);
  }, leave: (e4) => {
    e4.to < r2.to && (o2 = true);
  } }), o2 ? false : (n2.dispatch({ changes: [{ from: r2.from, insert: `[` }, { from: r2.to, insert: `](${i2})` }], userEvent: `input.paste`, scrollIntoView: true }), true);
} });
export {
  Nt as a,
  Lt as c,
  wt as i,
  At as n,
  jt as o,
  Tt as r,
  Y as s,
  bt as t
};
