var _a2;
var e = 1024, t = 0, n = class {
  constructor(e63, t3) {
    this.from = e63, this.to = t3;
  }
}, r = class {
  constructor(e63 = {}) {
    this.id = t++, this.perNode = !!e63.perNode, this.deserialize = e63.deserialize || (() => {
      throw Error(`This node type doesn't define a deserialize function`);
    }), this.combine = e63.combine || null;
  }
  add(e63) {
    if (this.perNode) throw RangeError(`Can't add per-node props to node types`);
    return typeof e63 != `function` && (e63 = o.match(e63)), (t3) => {
      let n2 = e63(t3);
      return n2 === void 0 ? null : [this, n2];
    };
  }
};
r.closedBy = new r({ deserialize: (e63) => e63.split(` `) }), r.openedBy = new r({ deserialize: (e63) => e63.split(` `) }), r.group = new r({ deserialize: (e63) => e63.split(` `) }), r.isolate = new r({ deserialize: (e63) => {
  if (e63 && e63 != `rtl` && e63 != `ltr` && e63 != `auto`) throw RangeError(`Invalid value for isolate: ` + e63);
  return e63 || `auto`;
} }), r.contextHash = new r({ perNode: true }), r.lookAhead = new r({ perNode: true }), r.mounted = new r({ perNode: true });
var i = class {
  constructor(e63, t3, n2, r2 = false) {
    this.tree = e63, this.overlay = t3, this.parser = n2, this.bracketed = r2;
  }
  static get(e63) {
    return e63 && e63.props && e63.props[r.mounted.id];
  }
}, a = /* @__PURE__ */ Object.create(null), o = class e2 {
  constructor(e63, t3, n2, r2 = 0) {
    this.name = e63, this.props = t3, this.id = n2, this.flags = r2;
  }
  static define(t3) {
    let n2 = t3.props && t3.props.length ? /* @__PURE__ */ Object.create(null) : a, r2 = (t3.top ? 1 : 0) | (t3.skipped ? 2 : 0) | (t3.error ? 4 : 0) | (t3.name == null ? 8 : 0), i2 = new e2(t3.name || ``, n2, t3.id, r2);
    if (t3.props) {
      for (let e63 of t3.props) if (Array.isArray(e63) || (e63 = e63(i2)), e63) {
        if (e63[0].perNode) throw RangeError(`Can't store a per-node prop on a node type`);
        n2[e63[0].id] = e63[1];
      }
    }
    return i2;
  }
  prop(e63) {
    return this.props[e63.id];
  }
  get isTop() {
    return (this.flags & 1) > 0;
  }
  get isSkipped() {
    return (this.flags & 2) > 0;
  }
  get isError() {
    return (this.flags & 4) > 0;
  }
  get isAnonymous() {
    return (this.flags & 8) > 0;
  }
  is(e63) {
    if (typeof e63 == `string`) {
      if (this.name == e63) return true;
      let t3 = this.prop(r.group);
      return t3 ? t3.indexOf(e63) > -1 : false;
    }
    return this.id == e63;
  }
  static match(e63) {
    let t3 = /* @__PURE__ */ Object.create(null);
    for (let n2 in e63) for (let r2 of n2.split(` `)) t3[r2] = e63[n2];
    return (e64) => {
      for (let n2 = e64.prop(r.group), i2 = -1; i2 < (n2 ? n2.length : 0); i2++) {
        let r2 = t3[i2 < 0 ? e64.name : n2[i2]];
        if (r2) return r2;
      }
    };
  }
};
o.none = new o(``, /* @__PURE__ */ Object.create(null), 0, 8);
var s = class e3 {
  constructor(e63) {
    this.types = e63;
    for (let t3 = 0; t3 < e63.length; t3++) if (e63[t3].id != t3) throw RangeError(`Node type ids should correspond to array positions when creating a node set`);
  }
  extend(...t3) {
    let n2 = [];
    for (let e63 of this.types) {
      let r2 = null;
      for (let n3 of t3) {
        let t4 = n3(e63);
        if (t4) {
          r2 || (r2 = Object.assign({}, e63.props));
          let n4 = t4[1], i2 = t4[0];
          i2.combine && i2.id in r2 && (n4 = i2.combine(r2[i2.id], n4)), r2[i2.id] = n4;
        }
      }
      n2.push(r2 ? new o(e63.name, r2, e63.id, e63.flags) : e63);
    }
    return new e3(n2);
  }
}, c = /* @__PURE__ */ new WeakMap(), l = /* @__PURE__ */ new WeakMap(), u;
(function(e63) {
  e63[e63.ExcludeBuffers = 1] = `ExcludeBuffers`, e63[e63.IncludeAnonymous = 2] = `IncludeAnonymous`, e63[e63.IgnoreMounts = 4] = `IgnoreMounts`, e63[e63.IgnoreOverlays = 8] = `IgnoreOverlays`, e63[e63.EnterBracketed = 16] = `EnterBracketed`;
})(u || (u = {}));
var d = class e4 {
  constructor(e63, t3, n2, r2, i2) {
    if (this.type = e63, this.children = t3, this.positions = n2, this.length = r2, this.props = null, i2 && i2.length) {
      this.props = /* @__PURE__ */ Object.create(null);
      for (let [e64, t4] of i2) this.props[typeof e64 == `number` ? e64 : e64.id] = t4;
    }
  }
  toString() {
    let e63 = i.get(this);
    if (e63 && !e63.overlay) return e63.tree.toString();
    let t3 = ``;
    for (let e64 of this.children) {
      let n2 = e64.toString();
      n2 && (t3 && (t3 += `,`), t3 += n2);
    }
    return this.type.name ? (/\W/.test(this.type.name) && !this.type.isError ? JSON.stringify(this.type.name) : this.type.name) + (t3.length ? `(` + t3 + `)` : ``) : t3;
  }
  cursor(e63 = 0) {
    return new ne(this.topNode, e63);
  }
  cursorAt(e63, t3 = 0, n2 = 0) {
    let r2 = new ne(c.get(this) || this.topNode);
    return r2.moveTo(e63, t3), c.set(this, r2._tree), r2;
  }
  get topNode() {
    return new _(this, 0, 0, null);
  }
  resolve(e63, t3 = 0) {
    let n2 = h(c.get(this) || this.topNode, e63, t3, false);
    return c.set(this, n2), n2;
  }
  resolveInner(e63, t3 = 0) {
    let n2 = h(l.get(this) || this.topNode, e63, t3, true);
    return l.set(this, n2), n2;
  }
  resolveStack(e63, t3 = 0) {
    return te(this, e63, t3);
  }
  iterate(e63) {
    let { enter: t3, leave: n2, from: r2 = 0, to: i2 = this.length } = e63, a2 = e63.mode || 0, o2 = (a2 & u.IncludeAnonymous) > 0;
    for (let e64 = this.cursor(a2 | u.IncludeAnonymous); ; ) {
      let a3 = false;
      if (e64.from <= i2 && e64.to >= r2 && (!o2 && e64.type.isAnonymous || t3(e64) !== false)) {
        if (e64.firstChild()) continue;
        a3 = true;
      }
      for (; a3 && n2 && (o2 || !e64.type.isAnonymous) && n2(e64), !e64.nextSibling(); ) {
        if (!e64.parent()) return;
        a3 = true;
      }
    }
  }
  prop(e63) {
    return e63.perNode ? this.props ? this.props[e63.id] : void 0 : this.type.prop(e63);
  }
  get propValues() {
    let e63 = [];
    if (this.props) for (let t3 in this.props) e63.push([+t3, this.props[t3]]);
    return e63;
  }
  balance(t3 = {}) {
    return this.children.length <= 8 ? this : se(o.none, this.children, this.positions, 0, this.children.length, 0, this.length, (t4, n2, r2) => new e4(this.type, t4, n2, r2, this.propValues), t3.makeTree || ((t4, n2, r2) => new e4(o.none, t4, n2, r2)));
  }
  static build(e63) {
    return ie(e63);
  }
};
d.empty = new d(o.none, [], [], 0);
var f = class e5 {
  constructor(e63, t3) {
    this.buffer = e63, this.index = t3;
  }
  get id() {
    return this.buffer[this.index - 4];
  }
  get start() {
    return this.buffer[this.index - 3];
  }
  get end() {
    return this.buffer[this.index - 2];
  }
  get size() {
    return this.buffer[this.index - 1];
  }
  get pos() {
    return this.index;
  }
  next() {
    this.index -= 4;
  }
  fork() {
    return new e5(this.buffer, this.index);
  }
}, p = class e6 {
  constructor(e63, t3, n2) {
    this.buffer = e63, this.length = t3, this.set = n2;
  }
  get type() {
    return o.none;
  }
  toString() {
    let e63 = [];
    for (let t3 = 0; t3 < this.buffer.length; ) e63.push(this.childString(t3)), t3 = this.buffer[t3 + 3];
    return e63.join(`,`);
  }
  childString(e63) {
    let t3 = this.buffer[e63], n2 = this.buffer[e63 + 3], r2 = this.set.types[t3], i2 = r2.name;
    if (/\W/.test(i2) && !r2.isError && (i2 = JSON.stringify(i2)), e63 += 4, n2 == e63) return i2;
    let a2 = [];
    for (; e63 < n2; ) a2.push(this.childString(e63)), e63 = this.buffer[e63 + 3];
    return i2 + `(` + a2.join(`,`) + `)`;
  }
  findChild(e63, t3, n2, r2, i2) {
    let { buffer: a2 } = this, o2 = -1;
    for (let s2 = e63; s2 != t3 && !(m(i2, r2, a2[s2 + 1], a2[s2 + 2]) && (o2 = s2, n2 > 0)); s2 = a2[s2 + 3]) ;
    return o2;
  }
  slice(t3, n2, r2) {
    let i2 = this.buffer, a2 = new Uint16Array(n2 - t3), o2 = 0;
    for (let e63 = t3, s2 = 0; e63 < n2; ) {
      a2[s2++] = i2[e63++], a2[s2++] = i2[e63++] - r2;
      let n3 = a2[s2++] = i2[e63++] - r2;
      a2[s2++] = i2[e63++] - t3, o2 = Math.max(o2, n3);
    }
    return new e6(a2, o2, this.set);
  }
};
function m(e63, t3, n2, r2) {
  switch (e63) {
    case -2:
      return n2 < t3;
    case -1:
      return r2 >= t3 && n2 < t3;
    case 0:
      return n2 < t3 && r2 > t3;
    case 1:
      return n2 <= t3 && r2 > t3;
    case 2:
      return r2 > t3;
    case 4:
      return true;
  }
}
function h(e63, t3, n2, r2) {
  var _a3;
  for (; e63.from == e63.to || (n2 < 1 ? e63.from >= t3 : e63.from > t3) || (n2 > -1 ? e63.to <= t3 : e63.to < t3); ) {
    let t4 = !r2 && e63 instanceof _ && e63.index < 0 ? null : e63.parent;
    if (!t4) return e63;
    e63 = t4;
  }
  let i2 = r2 ? 0 : u.IgnoreOverlays;
  if (r2) for (let r3 = e63, a2 = r3.parent; a2; r3 = a2, a2 = r3.parent) r3 instanceof _ && r3.index < 0 && ((_a3 = a2.enter(t3, n2, i2)) == null ? void 0 : _a3.from) != r3.from && (e63 = a2);
  for (; ; ) {
    let r3 = e63.enter(t3, n2, i2);
    if (!r3) return e63;
    e63 = r3;
  }
}
var g = class {
  cursor(e63 = 0) {
    return new ne(this, e63);
  }
  getChild(e63, t3 = null, n2 = null) {
    let r2 = v(this, e63, t3, n2);
    return r2.length ? r2[0] : null;
  }
  getChildren(e63, t3 = null, n2 = null) {
    return v(this, e63, t3, n2);
  }
  resolve(e63, t3 = 0) {
    return h(this, e63, t3, false);
  }
  resolveInner(e63, t3 = 0) {
    return h(this, e63, t3, true);
  }
  matchContext(e63) {
    return y(this.parent, e63);
  }
  enterUnfinishedNodesBefore(e63) {
    let t3 = this.childBefore(e63), n2 = this;
    for (; t3; ) {
      let e64 = t3.lastChild;
      if (!e64 || e64.to != t3.to) break;
      e64.type.isError && e64.from == e64.to ? (n2 = t3, t3 = e64.prevSibling) : t3 = e64;
    }
    return n2;
  }
  get node() {
    return this;
  }
  get next() {
    return this.parent;
  }
}, _ = class e7 extends g {
  constructor(e63, t3, n2, r2) {
    super(), this._tree = e63, this.from = t3, this.index = n2, this._parent = r2;
  }
  get type() {
    return this._tree.type;
  }
  get name() {
    return this._tree.type.name;
  }
  get to() {
    return this.from + this._tree.length;
  }
  nextChild(t3, n2, r2, a2, o2 = 0) {
    var _a3;
    for (let s2 = this; ; ) {
      for (let { children: c2, positions: l2 } = s2._tree, f2 = n2 > 0 ? c2.length : -1; t3 != f2; t3 += n2) {
        let f3 = c2[t3], h2 = l2[t3] + s2.from;
        if (!(!(o2 & u.EnterBracketed && f3 instanceof d && ((_a3 = i.get(f3)) == null ? void 0 : _a3.overlay) === null && (h2 >= r2 || h2 + f3.length <= r2)) && !m(a2, r2, h2, h2 + f3.length))) {
          if (f3 instanceof p) {
            if (o2 & u.ExcludeBuffers) continue;
            let e63 = f3.findChild(0, f3.buffer.length, n2, r2 - h2, a2);
            if (e63 > -1) return new b(new ee(s2, f3, t3, h2), null, e63);
          } else if (o2 & u.IncludeAnonymous || !f3.type.isAnonymous || re(f3)) {
            let c3;
            if (!(o2 & u.IgnoreMounts) && (c3 = i.get(f3)) && !c3.overlay) return new e7(c3.tree, h2, t3, s2);
            let l3 = new e7(f3, h2, t3, s2);
            return o2 & u.IncludeAnonymous || !l3.type.isAnonymous ? l3 : l3.nextChild(n2 < 0 ? f3.children.length - 1 : 0, n2, r2, a2, o2);
          }
        }
      }
      if (o2 & u.IncludeAnonymous || !s2.type.isAnonymous || (t3 = s2.index >= 0 ? s2.index + n2 : n2 < 0 ? -1 : s2._parent._tree.children.length, s2 = s2._parent, !s2)) return null;
    }
  }
  get firstChild() {
    return this.nextChild(0, 1, 0, 4);
  }
  get lastChild() {
    return this.nextChild(this._tree.children.length - 1, -1, 0, 4);
  }
  childAfter(e63) {
    return this.nextChild(0, 1, e63, 2);
  }
  childBefore(e63) {
    return this.nextChild(this._tree.children.length - 1, -1, e63, -2);
  }
  prop(e63) {
    return this._tree.prop(e63);
  }
  enter(t3, n2, r2 = 0) {
    let a2;
    if (!(r2 & u.IgnoreOverlays) && (a2 = i.get(this._tree)) && a2.overlay) {
      let i2 = t3 - this.from, o2 = r2 & u.EnterBracketed && a2.bracketed;
      for (let { from: t4, to: r3 } of a2.overlay) if ((n2 > 0 || o2 ? t4 <= i2 : t4 < i2) && (n2 < 0 || o2 ? r3 >= i2 : r3 > i2)) return new e7(a2.tree, a2.overlay[0].from + this.from, -1, this);
    }
    return this.nextChild(0, 1, t3, n2, r2);
  }
  nextSignificantParent() {
    let e63 = this;
    for (; e63.type.isAnonymous && e63._parent; ) e63 = e63._parent;
    return e63;
  }
  get parent() {
    return this._parent ? this._parent.nextSignificantParent() : null;
  }
  get nextSibling() {
    return this._parent && this.index >= 0 ? this._parent.nextChild(this.index + 1, 1, 0, 4) : null;
  }
  get prevSibling() {
    return this._parent && this.index >= 0 ? this._parent.nextChild(this.index - 1, -1, 0, 4) : null;
  }
  get tree() {
    return this._tree;
  }
  toTree() {
    return this._tree;
  }
  toString() {
    return this._tree.toString();
  }
};
function v(e63, t3, n2, r2) {
  let i2 = e63.cursor(), a2 = [];
  if (!i2.firstChild()) return a2;
  if (n2 != null) {
    for (let e64 = false; !e64; ) if (e64 = i2.type.is(n2), !i2.nextSibling()) return a2;
  }
  for (; ; ) {
    if (r2 != null && i2.type.is(r2)) return a2;
    if (i2.type.is(t3) && a2.push(i2.node), !i2.nextSibling()) return r2 == null ? a2 : [];
  }
}
function y(e63, t3, n2 = t3.length - 1) {
  for (let r2 = e63; n2 >= 0; r2 = r2.parent) {
    if (!r2) return false;
    if (!r2.type.isAnonymous) {
      if (t3[n2] && t3[n2] != r2.name) return false;
      n2--;
    }
  }
  return true;
}
var ee = class {
  constructor(e63, t3, n2, r2) {
    this.parent = e63, this.buffer = t3, this.index = n2, this.start = r2;
  }
}, b = class e8 extends g {
  get name() {
    return this.type.name;
  }
  get from() {
    return this.context.start + this.context.buffer.buffer[this.index + 1];
  }
  get to() {
    return this.context.start + this.context.buffer.buffer[this.index + 2];
  }
  constructor(e63, t3, n2) {
    super(), this.context = e63, this._parent = t3, this.index = n2, this.type = e63.buffer.set.types[e63.buffer.buffer[n2]];
  }
  child(t3, n2, r2) {
    let { buffer: i2 } = this.context, a2 = i2.findChild(this.index + 4, i2.buffer[this.index + 3], t3, n2 - this.context.start, r2);
    return a2 < 0 ? null : new e8(this.context, this, a2);
  }
  get firstChild() {
    return this.child(1, 0, 4);
  }
  get lastChild() {
    return this.child(-1, 0, 4);
  }
  childAfter(e63) {
    return this.child(1, e63, 2);
  }
  childBefore(e63) {
    return this.child(-1, e63, -2);
  }
  prop(e63) {
    return this.type.prop(e63);
  }
  enter(t3, n2, r2 = 0) {
    if (r2 & u.ExcludeBuffers) return null;
    let { buffer: i2 } = this.context, a2 = i2.findChild(this.index + 4, i2.buffer[this.index + 3], n2 > 0 ? 1 : -1, t3 - this.context.start, n2);
    return a2 < 0 ? null : new e8(this.context, this, a2);
  }
  get parent() {
    return this._parent || this.context.parent.nextSignificantParent();
  }
  externalSibling(e63) {
    return this._parent ? null : this.context.parent.nextChild(this.context.index + e63, e63, 0, 4);
  }
  get nextSibling() {
    let { buffer: t3 } = this.context, n2 = t3.buffer[this.index + 3];
    return n2 < (this._parent ? t3.buffer[this._parent.index + 3] : t3.buffer.length) ? new e8(this.context, this._parent, n2) : this.externalSibling(1);
  }
  get prevSibling() {
    let { buffer: t3 } = this.context, n2 = this._parent ? this._parent.index + 4 : 0;
    return this.index == n2 ? this.externalSibling(-1) : new e8(this.context, this._parent, t3.findChild(n2, this.index, -1, 0, 4));
  }
  get tree() {
    return null;
  }
  toTree() {
    let e63 = [], t3 = [], { buffer: n2 } = this.context, r2 = this.index + 4, i2 = n2.buffer[this.index + 3];
    if (i2 > r2) {
      let a2 = n2.buffer[this.index + 1];
      e63.push(n2.slice(r2, i2, a2)), t3.push(0);
    }
    return new d(this.type, e63, t3, this.to - this.from);
  }
  toString() {
    return this.context.buffer.childString(this.index);
  }
};
function x(e63) {
  if (!e63.length) return null;
  let t3 = 0, n2 = e63[0];
  for (let r3 = 1; r3 < e63.length; r3++) {
    let i3 = e63[r3];
    (i3.from > n2.from || i3.to < n2.to) && (n2 = i3, t3 = r3);
  }
  let r2 = n2 instanceof _ && n2.index < 0 ? null : n2.parent, i2 = e63.slice();
  return r2 ? i2[t3] = r2 : i2.splice(t3, 1), new S(i2, n2);
}
var S = class {
  constructor(e63, t3) {
    this.heads = e63, this.node = t3;
  }
  get next() {
    return x(this.heads);
  }
};
function te(e63, t3, n2) {
  let r2 = e63.resolveInner(t3, n2), a2 = null;
  for (let e64 = r2 instanceof _ ? r2 : r2.context.parent; e64; e64 = e64.parent) if (e64.index < 0) {
    let i2 = e64.parent;
    (a2 || (a2 = [r2])).push(i2.resolve(t3, n2)), e64 = i2;
  } else {
    let o2 = i.get(e64.tree);
    if (o2 && o2.overlay && o2.overlay[0].from <= t3 && o2.overlay[o2.overlay.length - 1].to >= t3) {
      let i2 = new _(o2.tree, o2.overlay[0].from + e64.from, -1, e64);
      (a2 || (a2 = [r2])).push(h(i2, t3, n2, false));
    }
  }
  return a2 ? x(a2) : r2;
}
var ne = class {
  get name() {
    return this.type.name;
  }
  constructor(e63, t3 = 0) {
    if (this.buffer = null, this.stack = [], this.index = 0, this.bufferNode = null, this.mode = t3 & ~u.EnterBracketed, e63 instanceof _) this.yieldNode(e63);
    else {
      this._tree = e63.context.parent, this.buffer = e63.context;
      for (let t4 = e63._parent; t4; t4 = t4._parent) this.stack.unshift(t4.index);
      this.bufferNode = e63, this.yieldBuf(e63.index);
    }
  }
  yieldNode(e63) {
    return e63 ? (this._tree = e63, this.type = e63.type, this.from = e63.from, this.to = e63.to, true) : false;
  }
  yieldBuf(e63, t3) {
    this.index = e63;
    let { start: n2, buffer: r2 } = this.buffer;
    return this.type = t3 || r2.set.types[r2.buffer[e63]], this.from = n2 + r2.buffer[e63 + 1], this.to = n2 + r2.buffer[e63 + 2], true;
  }
  yield(e63) {
    return e63 ? e63 instanceof _ ? (this.buffer = null, this.yieldNode(e63)) : (this.buffer = e63.context, this.yieldBuf(e63.index, e63.type)) : false;
  }
  toString() {
    return this.buffer ? this.buffer.buffer.childString(this.index) : this._tree.toString();
  }
  enterChild(e63, t3, n2) {
    if (!this.buffer) return this.yield(this._tree.nextChild(e63 < 0 ? this._tree._tree.children.length - 1 : 0, e63, t3, n2, this.mode));
    let { buffer: r2 } = this.buffer, i2 = r2.findChild(this.index + 4, r2.buffer[this.index + 3], e63, t3 - this.buffer.start, n2);
    return i2 < 0 ? false : (this.stack.push(this.index), this.yieldBuf(i2));
  }
  firstChild() {
    return this.enterChild(1, 0, 4);
  }
  lastChild() {
    return this.enterChild(-1, 0, 4);
  }
  childAfter(e63) {
    return this.enterChild(1, e63, 2);
  }
  childBefore(e63) {
    return this.enterChild(-1, e63, -2);
  }
  enter(e63, t3, n2 = this.mode) {
    return this.buffer ? n2 & u.ExcludeBuffers ? false : this.enterChild(1, e63, t3) : this.yield(this._tree.enter(e63, t3, n2));
  }
  parent() {
    if (!this.buffer) return this.yieldNode(this.mode & u.IncludeAnonymous ? this._tree._parent : this._tree.parent);
    if (this.stack.length) return this.yieldBuf(this.stack.pop());
    let e63 = this.mode & u.IncludeAnonymous ? this.buffer.parent : this.buffer.parent.nextSignificantParent();
    return this.buffer = null, this.yieldNode(e63);
  }
  sibling(e63) {
    if (!this.buffer) return this._tree._parent ? this.yield(this._tree.index < 0 ? null : this._tree._parent.nextChild(this._tree.index + e63, e63, 0, 4, this.mode)) : false;
    let { buffer: t3 } = this.buffer, n2 = this.stack.length - 1;
    if (e63 < 0) {
      let e64 = n2 < 0 ? 0 : this.stack[n2] + 4;
      if (this.index != e64) return this.yieldBuf(t3.findChild(e64, this.index, -1, 0, 4));
    } else {
      let e64 = t3.buffer[this.index + 3];
      if (e64 < (n2 < 0 ? t3.buffer.length : t3.buffer[this.stack[n2] + 3])) return this.yieldBuf(e64);
    }
    return n2 < 0 ? this.yield(this.buffer.parent.nextChild(this.buffer.index + e63, e63, 0, 4, this.mode)) : false;
  }
  nextSibling() {
    return this.sibling(1);
  }
  prevSibling() {
    return this.sibling(-1);
  }
  atLastNode(e63) {
    let t3, n2, { buffer: r2 } = this;
    if (r2) {
      if (e63 > 0) {
        if (this.index < r2.buffer.buffer.length) return false;
      } else for (let e64 = 0; e64 < this.index; e64++) if (r2.buffer.buffer[e64 + 3] < this.index) return false;
      ({ index: t3, parent: n2 } = r2);
    } else ({ index: t3, _parent: n2 } = this._tree);
    for (; n2; { index: t3, _parent: n2 } = n2) if (t3 > -1) for (let r3 = t3 + e63, i2 = e63 < 0 ? -1 : n2._tree.children.length; r3 != i2; r3 += e63) {
      let e64 = n2._tree.children[r3];
      if (this.mode & u.IncludeAnonymous || e64 instanceof p || !e64.type.isAnonymous || re(e64)) return false;
    }
    return true;
  }
  move(e63, t3) {
    if (t3 && this.enterChild(e63, 0, 4)) return true;
    for (; ; ) {
      if (this.sibling(e63)) return true;
      if (this.atLastNode(e63) || !this.parent()) return false;
    }
  }
  next(e63 = true) {
    return this.move(1, e63);
  }
  prev(e63 = true) {
    return this.move(-1, e63);
  }
  moveTo(e63, t3 = 0) {
    for (; (this.from == this.to || (t3 < 1 ? this.from >= e63 : this.from > e63) || (t3 > -1 ? this.to <= e63 : this.to < e63)) && this.parent(); ) ;
    for (; this.enterChild(1, e63, t3); ) ;
    return this;
  }
  get node() {
    if (!this.buffer) return this._tree;
    let e63 = this.bufferNode, t3 = null, n2 = 0;
    if (e63 && e63.context == this.buffer) scan: for (let r2 = this.index, i2 = this.stack.length; i2 >= 0; ) {
      for (let a2 = e63; a2; a2 = a2._parent) if (a2.index == r2) {
        if (r2 == this.index) return a2;
        t3 = a2, n2 = i2 + 1;
        break scan;
      }
      r2 = this.stack[--i2];
    }
    for (let e64 = n2; e64 < this.stack.length; e64++) t3 = new b(this.buffer, t3, this.stack[e64]);
    return this.bufferNode = new b(this.buffer, t3, this.index);
  }
  get tree() {
    return this.buffer ? null : this._tree._tree;
  }
  iterate(e63, t3) {
    for (let n2 = 0; ; ) {
      let r2 = false;
      if (this.type.isAnonymous || e63(this) !== false) {
        if (this.firstChild()) {
          n2++;
          continue;
        }
        this.type.isAnonymous || (r2 = true);
      }
      for (; ; ) {
        if (r2 && t3 && t3(this), r2 = this.type.isAnonymous, !n2) return;
        if (this.nextSibling()) break;
        this.parent(), n2--, r2 = true;
      }
    }
  }
  matchContext(e63) {
    if (!this.buffer) return y(this.node.parent, e63);
    let { buffer: t3 } = this.buffer, { types: n2 } = t3.set;
    for (let r2 = e63.length - 1, i2 = this.stack.length - 1; r2 >= 0; i2--) {
      if (i2 < 0) return y(this._tree, e63, r2);
      let a2 = n2[t3.buffer[this.stack[i2]]];
      if (!a2.isAnonymous) {
        if (e63[r2] && e63[r2] != a2.name) return false;
        r2--;
      }
    }
    return true;
  }
};
function re(e63) {
  return e63.children.some((e64) => e64 instanceof p || !e64.type.isAnonymous || re(e64));
}
function ie(t3) {
  let { buffer: n2, nodeSet: i2, maxBufferLength: a2 = e, reused: o2 = [], minRepeatType: s2 = i2.types.length } = t3, c2 = Array.isArray(n2) ? new f(n2, n2.length) : n2, l2 = i2.types, u2 = 0, m2 = 0;
  function h2(e63, t4, n3, r2, d2, f2) {
    let { id: x3, start: S3, end: te3, size: ne2 } = c2, re2 = m2, ie2 = u2;
    if (ne2 < 0) if (c2.next(), ne2 == -1) {
      let t5 = o2[x3];
      n3.push(t5), r2.push(S3 - e63);
      return;
    } else if (ne2 == -3) {
      u2 = x3;
      return;
    } else if (ne2 == -4) {
      m2 = x3;
      return;
    } else throw RangeError(`Unrecognized record size: ${ne2}`);
    let ae2 = l2[x3], oe2, ce2, le2 = S3 - e63;
    if (te3 - S3 <= a2 && (ce2 = ee2(c2.pos - t4, d2))) {
      let t5 = new Uint16Array(ce2.size - ce2.skip), n4 = c2.pos - ce2.size, r3 = t5.length;
      for (; c2.pos > n4; ) r3 = b2(ce2.start, t5, r3);
      oe2 = new p(t5, te3 - ce2.start, i2), le2 = ce2.start - e63;
    } else {
      let e64 = c2.pos - ne2;
      c2.next();
      let t5 = [], n4 = [], r3 = x3 >= s2 ? x3 : -1, i3 = 0, o3 = te3;
      for (; c2.pos > e64; ) r3 >= 0 && c2.id == r3 && c2.size >= 0 ? (c2.end <= o3 - a2 && (v2(t5, n4, S3, i3, c2.end, o3, r3, re2, ie2), i3 = t5.length, o3 = c2.end), c2.next()) : f2 > 2500 ? g2(S3, e64, t5, n4) : h2(S3, e64, t5, n4, r3, f2 + 1);
      if (r3 >= 0 && i3 > 0 && i3 < t5.length && v2(t5, n4, S3, i3, S3, o3, r3, re2, ie2), t5.reverse(), n4.reverse(), r3 > -1 && i3 > 0) {
        let e65 = _2(ae2, ie2);
        oe2 = se(ae2, t5, n4, 0, t5.length, 0, te3 - S3, e65, e65);
      } else oe2 = y2(ae2, t5, n4, te3 - S3, re2 - te3, ie2);
    }
    n3.push(oe2), r2.push(le2);
  }
  function g2(e63, t4, n3, r2) {
    let o3 = [], s3 = 0, l3 = -1;
    for (; c2.pos > t4; ) {
      let { id: e64, start: t5, end: n4, size: r3 } = c2;
      if (r3 > 4) c2.next();
      else if (l3 > -1 && t5 < l3) break;
      else l3 < 0 && (l3 = n4 - a2), o3.push(e64, t5, n4), s3++, c2.next();
    }
    if (s3) {
      let t5 = new Uint16Array(s3 * 4), a3 = o3[o3.length - 2];
      for (let e64 = o3.length - 3, n4 = 0; e64 >= 0; e64 -= 3) t5[n4++] = o3[e64], t5[n4++] = o3[e64 + 1] - a3, t5[n4++] = o3[e64 + 2] - a3, t5[n4++] = n4;
      n3.push(new p(t5, o3[2] - a3, i2)), r2.push(a3 - e63);
    }
  }
  function _2(e63, t4) {
    return (n3, i3, a3) => {
      let o3 = 0, s3 = n3.length - 1, c3, l3;
      if (s3 >= 0 && (c3 = n3[s3]) instanceof d) {
        if (!s3 && c3.type == e63 && c3.length == a3) return c3;
        (l3 = c3.prop(r.lookAhead)) && (o3 = i3[s3] + c3.length + l3);
      }
      return y2(e63, n3, i3, a3, o3, t4);
    };
  }
  function v2(e63, t4, n3, r2, a3, o3, s3, c3, l3) {
    let u3 = [], d2 = [];
    for (; e63.length > r2; ) u3.push(e63.pop()), d2.push(t4.pop() + n3 - a3);
    e63.push(y2(i2.types[s3], u3, d2, o3 - a3, c3 - o3, l3)), t4.push(a3 - n3);
  }
  function y2(e63, t4, n3, i3, a3, o3, s3) {
    if (o3) {
      let e64 = [r.contextHash, o3];
      s3 = s3 ? [e64].concat(s3) : [e64];
    }
    if (a3 > 25) {
      let e64 = [r.lookAhead, a3];
      s3 = s3 ? [e64].concat(s3) : [e64];
    }
    return new d(e63, t4, n3, i3, s3);
  }
  function ee2(e63, t4) {
    let n3 = c2.fork(), r2 = 0, i3 = 0, o3 = 0, l3 = n3.end - a2, u3 = { size: 0, start: 0, skip: 0 };
    scan: for (let a3 = n3.pos - e63; n3.pos > a3; ) {
      let e64 = n3.size;
      if (n3.id == t4 && e64 >= 0) {
        u3.size = r2, u3.start = i3, u3.skip = o3, o3 += 4, r2 += 4, n3.next();
        continue;
      }
      let c3 = n3.pos - e64;
      if (e64 < 0 || c3 < a3 || n3.start < l3) break;
      let d2 = n3.id >= s2 ? 4 : 0, f2 = n3.start;
      for (n3.next(); n3.pos > c3; ) {
        if (n3.size < 0) if (n3.size == -3 || n3.size == -4) d2 += 4;
        else break scan;
        else n3.id >= s2 && (d2 += 4);
        n3.next();
      }
      i3 = f2, r2 += e64, o3 += d2;
    }
    return (t4 < 0 || r2 == e63) && (u3.size = r2, u3.start = i3, u3.skip = o3), u3.size > 4 ? u3 : void 0;
  }
  function b2(e63, t4, n3) {
    let { id: r2, start: i3, end: a3, size: o3 } = c2;
    if (c2.next(), o3 >= 0 && r2 < s2) {
      let s3 = n3;
      if (o3 > 4) {
        let r3 = c2.pos - (o3 - 4);
        for (; c2.pos > r3; ) n3 = b2(e63, t4, n3);
      }
      t4[--n3] = s3, t4[--n3] = a3 - e63, t4[--n3] = i3 - e63, t4[--n3] = r2;
    } else o3 == -3 ? u2 = r2 : o3 == -4 && (m2 = r2);
    return n3;
  }
  let x2 = [], S2 = [];
  for (; c2.pos > 0; ) h2(t3.start || 0, t3.bufferStart || 0, x2, S2, -1, 0);
  let te2 = t3.length ?? (x2.length ? S2[0] + x2[0].length : 0);
  return new d(l2[t3.topID], x2.reverse(), S2.reverse(), te2);
}
var ae = /* @__PURE__ */ new WeakMap();
function oe(e63, t3) {
  if (!e63.isAnonymous || t3 instanceof p || t3.type != e63) return 1;
  let n2 = ae.get(t3);
  if (n2 == null) {
    n2 = 1;
    for (let r2 of t3.children) {
      if (r2.type != e63 || !(r2 instanceof d)) {
        n2 = 1;
        break;
      }
      n2 += oe(e63, r2);
    }
    ae.set(t3, n2);
  }
  return n2;
}
function se(e63, t3, n2, r2, i2, a2, o2, s2, c2) {
  let l2 = 0;
  for (let n3 = r2; n3 < i2; n3++) l2 += oe(e63, t3[n3]);
  let u2 = Math.ceil(l2 * 1.5 / 8), d2 = [], f2 = [];
  function p2(t4, n3, r3, i3, o3) {
    for (let s3 = r3; s3 < i3; ) {
      let r4 = s3, l3 = n3[s3], m2 = oe(e63, t4[s3]);
      for (s3++; s3 < i3; s3++) {
        let n4 = oe(e63, t4[s3]);
        if (m2 + n4 >= u2) break;
        m2 += n4;
      }
      if (s3 == r4 + 1) {
        if (m2 > u2) {
          let e64 = t4[r4];
          p2(e64.children, e64.positions, 0, e64.children.length, n3[r4] + o3);
          continue;
        }
        d2.push(t4[r4]);
      } else {
        let i4 = n3[s3 - 1] + t4[s3 - 1].length - l3;
        d2.push(se(e63, t4, n3, r4, s3, l3, i4, null, c2));
      }
      f2.push(l3 + o3 - a2);
    }
  }
  return p2(t3, n2, r2, i2, 0), (s2 || c2)(d2, f2, o2);
}
var ce = class {
  constructor() {
    this.map = /* @__PURE__ */ new WeakMap();
  }
  setBuffer(e63, t3, n2) {
    let r2 = this.map.get(e63);
    r2 || this.map.set(e63, r2 = /* @__PURE__ */ new Map()), r2.set(t3, n2);
  }
  getBuffer(e63, t3) {
    let n2 = this.map.get(e63);
    return n2 && n2.get(t3);
  }
  set(e63, t3) {
    e63 instanceof b ? this.setBuffer(e63.context.buffer, e63.index, t3) : e63 instanceof _ && this.map.set(e63.tree, t3);
  }
  get(e63) {
    return e63 instanceof b ? this.getBuffer(e63.context.buffer, e63.index) : e63 instanceof _ ? this.map.get(e63.tree) : void 0;
  }
  cursorSet(e63, t3) {
    e63.buffer ? this.setBuffer(e63.buffer.buffer, e63.index, t3) : this.map.set(e63.tree, t3);
  }
  cursorGet(e63) {
    return e63.buffer ? this.getBuffer(e63.buffer.buffer, e63.index) : this.map.get(e63.tree);
  }
}, le = class e9 {
  constructor(e63, t3, n2, r2, i2 = false, a2 = false) {
    this.from = e63, this.to = t3, this.tree = n2, this.offset = r2, this.open = (i2 ? 1 : 0) | (a2 ? 2 : 0);
  }
  get openStart() {
    return (this.open & 1) > 0;
  }
  get openEnd() {
    return (this.open & 2) > 0;
  }
  static addTree(t3, n2 = [], r2 = false) {
    let i2 = [new e9(0, t3.length, t3, 0, false, r2)];
    for (let e63 of n2) e63.to > t3.length && i2.push(e63);
    return i2;
  }
  static applyChanges(t3, n2, r2 = 128) {
    if (!n2.length) return t3;
    let i2 = [], a2 = 1, o2 = t3.length ? t3[0] : null;
    for (let s2 = 0, c2 = 0, l2 = 0; ; s2++) {
      let u2 = s2 < n2.length ? n2[s2] : null, d2 = u2 ? u2.fromA : 1e9;
      if (d2 - c2 >= r2) for (; o2 && o2.from < d2; ) {
        let n3 = o2;
        if (c2 >= n3.from || d2 <= n3.to || l2) {
          let t4 = Math.max(n3.from, c2) - l2, r3 = Math.min(n3.to, d2) - l2;
          n3 = t4 >= r3 ? null : new e9(t4, r3, n3.tree, n3.offset + l2, s2 > 0, !!u2);
        }
        if (n3 && i2.push(n3), o2.to > d2) break;
        o2 = a2 < t3.length ? t3[a2++] : null;
      }
      if (!u2) break;
      c2 = u2.toA, l2 = u2.toA - u2.toB;
    }
    return i2;
  }
}, ue = class {
  startParse(e63, t3, r2) {
    return typeof e63 == `string` && (e63 = new de(e63)), r2 = r2 ? r2.length ? r2.map((e64) => new n(e64.from, e64.to)) : [new n(0, 0)] : [new n(0, e63.length)], this.createParse(e63, t3 || [], r2);
  }
  parse(e63, t3, n2) {
    let r2 = this.startParse(e63, t3, n2);
    for (; ; ) {
      let e64 = r2.advance();
      if (e64) return e64;
    }
  }
}, de = class {
  constructor(e63) {
    this.string = e63;
  }
  get length() {
    return this.string.length;
  }
  chunk(e63) {
    return this.string.slice(e63);
  }
  get lineChunks() {
    return false;
  }
  read(e63, t3) {
    return this.string.slice(e63, t3);
  }
};
function fe(e63) {
  return (t3, n2, r2, i2) => new _e(t3, e63, n2, r2, i2);
}
var pe = class {
  constructor(e63, t3, n2, r2, i2, a2) {
    this.parser = e63, this.parse = t3, this.overlay = n2, this.bracketed = r2, this.target = i2, this.from = a2;
  }
};
function me(e63) {
  if (!e63.length || e63.some((e64) => e64.from >= e64.to)) throw RangeError(`Invalid inner parse ranges given: ` + JSON.stringify(e63));
}
var he = class {
  constructor(e63, t3, n2, r2, i2, a2, o2, s2) {
    this.parser = e63, this.predicate = t3, this.mounts = n2, this.index = r2, this.start = i2, this.bracketed = a2, this.target = o2, this.prev = s2, this.depth = 0, this.ranges = [];
  }
}, ge = new r({ perNode: true }), _e = class {
  constructor(e63, t3, n2, r2, i2) {
    this.nest = t3, this.input = n2, this.fragments = r2, this.ranges = i2, this.inner = [], this.innerDone = 0, this.baseTree = null, this.stoppedAt = null, this.baseParse = e63;
  }
  advance() {
    if (this.baseParse) {
      let e64 = this.baseParse.advance();
      if (!e64) return null;
      if (this.baseParse = null, this.baseTree = e64, this.startInner(), this.stoppedAt != null) for (let e65 of this.inner) e65.parse.stopAt(this.stoppedAt);
    }
    if (this.innerDone == this.inner.length) {
      let e64 = this.baseTree;
      return this.stoppedAt != null && (e64 = new d(e64.type, e64.children, e64.positions, e64.length, e64.propValues.concat([[ge, this.stoppedAt]]))), e64;
    }
    let e63 = this.inner[this.innerDone], t3 = e63.parse.advance();
    if (t3) {
      this.innerDone++;
      let n2 = Object.assign(/* @__PURE__ */ Object.create(null), e63.target.props);
      n2[r.mounted.id] = new i(t3, e63.overlay, e63.parser, e63.bracketed), e63.target.props = n2;
    }
    return null;
  }
  get parsedPos() {
    if (this.baseParse) return 0;
    let e63 = this.input.length;
    for (let t3 = this.innerDone; t3 < this.inner.length; t3++) this.inner[t3].from < e63 && (e63 = Math.min(e63, this.inner[t3].parse.parsedPos));
    return e63;
  }
  stopAt(e63) {
    if (this.stoppedAt = e63, this.baseParse) this.baseParse.stopAt(e63);
    else for (let t3 = this.innerDone; t3 < this.inner.length; t3++) this.inner[t3].parse.stopAt(e63);
  }
  startInner() {
    let e63 = new Se(this.fragments), t3 = null, r2 = null, i2 = new ne(new _(this.baseTree, this.ranges[0].from, 0, null), u.IncludeAnonymous | u.IgnoreMounts);
    scan: for (let a2, o2; ; ) {
      let s2 = true, c2;
      if (this.stoppedAt != null && i2.from >= this.stoppedAt) s2 = false;
      else if (e63.hasNode(i2)) {
        if (t3) {
          let e64 = t3.mounts.find((e65) => e65.frag.from <= i2.from && e65.frag.to >= i2.to && e65.mount.overlay);
          if (e64) for (let n2 of e64.mount.overlay) {
            let r3 = n2.from + e64.pos, a3 = n2.to + e64.pos;
            r3 >= i2.from && a3 <= i2.to && !t3.ranges.some((e65) => e65.from < a3 && e65.to > r3) && t3.ranges.push({ from: r3, to: a3 });
          }
        }
        s2 = false;
      } else if (r2 && (o2 = ve(r2.ranges, i2.from, i2.to))) s2 = o2 != 2;
      else if (!i2.type.isAnonymous && (a2 = this.nest(i2, this.input)) && (i2.from < i2.to || !a2.overlay)) {
        i2.tree || (be(i2), t3 && t3.depth++, r2 && r2.depth++);
        let o3 = e63.findMounts(i2.from, a2.parser);
        if (typeof a2.overlay == `function`) t3 = new he(a2.parser, a2.overlay, o3, this.inner.length, i2.from, !!a2.bracketed, i2.tree, t3);
        else {
          let e64 = Ce(this.ranges, a2.overlay || (i2.from < i2.to ? [new n(i2.from, i2.to)] : []));
          e64.length && me(e64), (e64.length || !a2.overlay) && this.inner.push(new pe(a2.parser, e64.length ? a2.parser.startParse(this.input, Te(o3, e64), e64) : a2.parser.startParse(``), a2.overlay ? a2.overlay.map((e65) => new n(e65.from - i2.from, e65.to - i2.from)) : null, !!a2.bracketed, i2.tree, e64.length ? e64[0].from : i2.from)), a2.overlay ? e64.length && (r2 = { ranges: e64, depth: 0, prev: r2 }) : s2 = false;
        }
      } else if (t3 && (c2 = t3.predicate(i2)) && (c2 === true && (c2 = new n(i2.from, i2.to)), c2.from < c2.to)) {
        let e64 = t3.ranges.length - 1;
        e64 >= 0 && t3.ranges[e64].to == c2.from ? t3.ranges[e64] = { from: t3.ranges[e64].from, to: c2.to } : t3.ranges.push(c2);
      }
      if (s2 && i2.firstChild()) t3 && t3.depth++, r2 && r2.depth++;
      else for (; !i2.nextSibling(); ) {
        if (!i2.parent()) break scan;
        if (t3 && !--t3.depth) {
          let e64 = Ce(this.ranges, t3.ranges);
          e64.length && (me(e64), this.inner.splice(t3.index, 0, new pe(t3.parser, t3.parser.startParse(this.input, Te(t3.mounts, e64), e64), t3.ranges.map((e65) => new n(e65.from - t3.start, e65.to - t3.start)), t3.bracketed, t3.target, e64[0].from))), t3 = t3.prev;
        }
        r2 && !--r2.depth && (r2 = r2.prev);
      }
    }
  }
};
function ve(e63, t3, n2) {
  for (let r2 of e63) {
    if (r2.from >= n2) break;
    if (r2.to > t3) return r2.from <= t3 && r2.to >= n2 ? 2 : 1;
  }
  return 0;
}
function ye(e63, t3, n2, r2, i2, a2) {
  if (t3 < n2) {
    let o2 = e63.buffer[t3 + 1];
    r2.push(e63.slice(t3, n2, o2)), i2.push(o2 - a2);
  }
}
function be(e63) {
  let { node: t3 } = e63, n2 = [], r2 = t3.context.buffer;
  do
    n2.push(e63.index), e63.parent();
  while (!e63.tree);
  let i2 = e63.tree, a2 = i2.children.indexOf(r2), s2 = i2.children[a2], c2 = s2.buffer, l2 = [a2];
  function u2(e64, r3, i3, a3, o2, f2) {
    let p2 = n2[f2], m2 = [], h2 = [];
    ye(s2, e64, p2, m2, h2, a3);
    let g2 = c2[p2 + 1], _2 = c2[p2 + 2];
    l2.push(m2.length);
    let v2 = f2 ? u2(p2 + 4, c2[p2 + 3], s2.set.types[c2[p2]], g2, _2 - g2, f2 - 1) : t3.toTree();
    return m2.push(v2), h2.push(g2 - a3), ye(s2, c2[p2 + 3], r3, m2, h2, a3), new d(i3, m2, h2, o2);
  }
  i2.children[a2] = u2(0, c2.length, o.none, 0, s2.length, n2.length - 1);
  for (let t4 of l2) {
    let n3 = e63.tree.children[t4], r3 = e63.tree.positions[t4];
    e63.yield(new _(n3, r3 + e63.from, t4, e63._tree));
  }
}
var xe = class {
  constructor(e63, t3) {
    this.offset = t3, this.done = false, this.cursor = e63.cursor(u.IncludeAnonymous | u.IgnoreMounts);
  }
  moveTo(e63) {
    let { cursor: t3 } = this, n2 = e63 - this.offset;
    for (; !this.done && t3.from < n2; ) t3.to >= e63 && t3.enter(n2, 1, u.IgnoreOverlays | u.ExcludeBuffers) || t3.next(false) || (this.done = true);
  }
  hasNode(e63) {
    if (this.moveTo(e63.from), !this.done && this.cursor.from + this.offset == e63.from && this.cursor.tree) for (let t3 = this.cursor.tree; ; ) {
      if (t3 == e63.tree) return true;
      if (t3.children.length && t3.positions[0] == 0 && t3.children[0] instanceof d) t3 = t3.children[0];
      else break;
    }
    return false;
  }
}, Se = class {
  constructor(e63) {
    if (this.fragments = e63, this.curTo = 0, this.fragI = 0, e63.length) {
      let t3 = this.curFrag = e63[0];
      this.curTo = t3.tree.prop(ge) ?? t3.to, this.inner = new xe(t3.tree, -t3.offset);
    } else this.curFrag = this.inner = null;
  }
  hasNode(e63) {
    for (; this.curFrag && e63.from >= this.curTo; ) this.nextFrag();
    return this.curFrag && this.curFrag.from <= e63.from && this.curTo >= e63.to && this.inner.hasNode(e63);
  }
  nextFrag() {
    if (this.fragI++, this.fragI == this.fragments.length) this.curFrag = this.inner = null;
    else {
      let e63 = this.curFrag = this.fragments[this.fragI];
      this.curTo = e63.tree.prop(ge) ?? e63.to, this.inner = new xe(e63.tree, -e63.offset);
    }
  }
  findMounts(e63, t3) {
    var _a3;
    let n2 = [];
    if (this.inner) {
      this.inner.cursor.moveTo(e63, 1);
      for (let e64 = this.inner.cursor.node; e64; e64 = e64.parent) {
        let i2 = (_a3 = e64.tree) == null ? void 0 : _a3.prop(r.mounted);
        if (i2 && i2.parser == t3) for (let t4 = this.fragI; t4 < this.fragments.length; t4++) {
          let r2 = this.fragments[t4];
          if (r2.from >= e64.to) break;
          r2.tree == this.curFrag.tree && n2.push({ frag: r2, pos: e64.from - r2.offset, mount: i2 });
        }
      }
    }
    return n2;
  }
};
function Ce(e63, t3) {
  let r2 = null, i2 = t3;
  for (let a2 = 1, o2 = 0; a2 < e63.length; a2++) {
    let s2 = e63[a2 - 1].to, c2 = e63[a2].from;
    for (; o2 < i2.length; o2++) {
      let e64 = i2[o2];
      if (e64.from >= c2) break;
      e64.to <= s2 || (r2 || (i2 = r2 = t3.slice()), e64.from < s2 ? (r2[o2] = new n(e64.from, s2), e64.to > c2 && r2.splice(o2 + 1, 0, new n(c2, e64.to))) : e64.to > c2 ? r2[o2--] = new n(c2, e64.to) : r2.splice(o2--, 1));
    }
  }
  return i2;
}
function we(e63, t3, r2, i2) {
  let a2 = 0, o2 = 0, s2 = false, c2 = false, l2 = -1e9, u2 = [];
  for (; ; ) {
    let d2 = a2 == e63.length ? 1e9 : s2 ? e63[a2].to : e63[a2].from, f2 = o2 == t3.length ? 1e9 : c2 ? t3[o2].to : t3[o2].from;
    if (s2 != c2) {
      let e64 = Math.max(l2, r2), t4 = Math.min(d2, f2, i2);
      e64 < t4 && u2.push(new n(e64, t4));
    }
    if (l2 = Math.min(d2, f2), l2 == 1e9) break;
    d2 == l2 && (s2 ? (s2 = false, a2++) : s2 = true), f2 == l2 && (c2 ? (c2 = false, o2++) : c2 = true);
  }
  return u2;
}
function Te(e63, t3) {
  let r2 = [];
  for (let { pos: i2, mount: a2, frag: o2 } of e63) {
    let e64 = i2 + (a2.overlay ? a2.overlay[0].from : 0), s2 = e64 + a2.tree.length, c2 = Math.max(o2.from, e64), l2 = Math.min(o2.to, s2);
    if (a2.overlay) {
      let s3 = we(t3, a2.overlay.map((e65) => new n(e65.from + i2, e65.to + i2)), c2, l2);
      for (let t4 = 0, n2 = c2; ; t4++) {
        let i3 = t4 == s3.length, c3 = i3 ? l2 : s3[t4].from;
        if (c3 > n2 && r2.push(new le(n2, c3, a2.tree, -e64, o2.from >= n2 || o2.openStart, o2.to <= c3 || o2.openEnd)), i3) break;
        n2 = s3[t4].to;
      }
    } else r2.push(new le(c2, l2, a2.tree, -e64, o2.from >= e64 || o2.openStart, o2.to <= s2 || o2.openEnd));
  }
  return r2;
}
var Ee = [], De = [];
(() => {
  let e63 = `lc,34,7n,7,7b,19,,,,2,,2,,,20,b,1c,l,g,,2t,7,2,6,2,2,,4,z,,u,r,2j,b,1m,9,9,,o,4,,9,,3,,5,17,3,3b,f,,w,1j,,,,4,8,4,,3,7,a,2,t,,1m,,,,2,4,8,,9,,a,2,q,,2,2,1l,,4,2,4,2,2,3,3,,u,2,3,,b,2,1l,,4,5,,2,4,,k,2,m,6,,,1m,,,2,,4,8,,7,3,a,2,u,,1n,,,,c,,9,,14,,3,,1l,3,5,3,,4,7,2,b,2,t,,1m,,2,,2,,3,,5,2,7,2,b,2,s,2,1l,2,,,2,4,8,,9,,a,2,t,,20,,4,,2,3,,,8,,29,,2,7,c,8,2q,,2,9,b,6,22,2,r,,,,,,1j,e,,5,,2,5,b,,10,9,,2u,4,,6,,2,2,2,p,2,4,3,g,4,d,,2,2,6,,f,,jj,3,qa,3,t,3,t,2,u,2,1s,2,,7,8,,2,b,9,,19,3,3b,2,y,,3a,3,4,2,9,,6,3,63,2,2,,1m,,,7,,,,,2,8,6,a,2,,1c,h,1r,4,1c,7,,,5,,14,9,c,2,w,4,2,2,,3,1k,,,2,3,,,3,1m,8,2,2,48,3,,d,,7,4,,6,,3,2,5i,1m,,5,ek,,5f,x,2da,3,3x,,2o,w,fe,6,2x,2,n9w,4,,a,w,2,28,2,7k,,3,,4,,p,2,5,,47,2,q,i,d,,12,8,p,b,1a,3,1c,,2,4,2,2,13,,1v,6,2,2,2,2,c,,8,,1b,,1f,,,3,2,2,5,2,,,16,2,8,,6m,,2,,4,,fn4,,kh,g,g,g,a6,2,gt,,6a,,45,5,1ae,3,,2,5,4,14,3,4,,4l,2,fx,4,ar,2,49,b,4w,,1i,f,1k,3,1d,4,2,2,1x,3,10,5,,8,1q,,c,2,1g,9,a,4,2,,2n,3,2,,,2,6,,4g,,3,8,l,2,1l,2,,,,,m,,e,7,3,5,5f,8,2,3,,,n,,29,,2,6,,,2,,,2,,2,6j,,2,4,6,2,,2,r,2,2d,8,2,,,2,2y,,,,2,6,,,2t,3,2,4,,5,77,9,,2,6t,,a,2,,,4,,40,4,2,2,4,,w,a,14,6,2,4,8,,9,6,2,3,1a,d,,2,ba,7,,6,,,2a,m,2,7,,2,,2,3e,6,3,,,2,,7,,,20,2,3,,,,9n,2,f0b,5,1n,7,t4,,1r,4,29,,f5k,2,43q,,,3,4,5,8,8,2,7,u,4,44,3,1iz,1j,4,1e,8,,e,,m,5,,f,11s,7,,h,2,7,,2,,5,79,7,c5,4,15s,7,31,7,240,5,gx7k,2o,3k,6o`.split(`,`).map((e64) => e64 ? parseInt(e64, 36) : 1);
  for (let t3 = 0, n2 = 0; t3 < e63.length; t3++) (t3 % 2 ? De : Ee).push(n2 += e63[t3]);
})();
function Oe(e63) {
  if (e63 < 768) return false;
  for (let t3 = 0, n2 = Ee.length; ; ) {
    let r2 = t3 + n2 >> 1;
    if (e63 < Ee[r2]) n2 = r2;
    else if (e63 >= De[r2]) t3 = r2 + 1;
    else return true;
    if (t3 == n2) return false;
  }
}
function ke(e63) {
  return e63 >= 127462 && e63 <= 127487;
}
var Ae = 8205;
function je(e63, t3, n2 = true, r2 = true) {
  return (n2 ? Me : Ne)(e63, t3, r2);
}
function Me(e63, t3, n2) {
  if (t3 == e63.length) return t3;
  t3 && Fe(e63.charCodeAt(t3)) && Ie(e63.charCodeAt(t3 - 1)) && t3--;
  let r2 = Pe(e63, t3);
  for (t3 += Le(r2); t3 < e63.length; ) {
    let i2 = Pe(e63, t3);
    if (r2 == Ae || i2 == Ae || n2 && Oe(i2)) t3 += Le(i2), r2 = i2;
    else if (ke(i2)) {
      let n3 = 0, r3 = t3 - 2;
      for (; r3 >= 0 && ke(Pe(e63, r3)); ) n3++, r3 -= 2;
      if (n3 % 2 == 0) break;
      t3 += 2;
    } else break;
  }
  return t3;
}
function Ne(e63, t3, n2) {
  for (; t3 > 0; ) {
    let r2 = Me(e63, t3 - 2, n2);
    if (r2 < t3) return r2;
    t3--;
  }
  return 0;
}
function Pe(e63, t3) {
  let n2 = e63.charCodeAt(t3);
  if (!Ie(n2) || t3 + 1 == e63.length) return n2;
  let r2 = e63.charCodeAt(t3 + 1);
  return Fe(r2) ? (n2 - 55296 << 10) + (r2 - 56320) + 65536 : n2;
}
function Fe(e63) {
  return e63 >= 56320 && e63 < 57344;
}
function Ie(e63) {
  return e63 >= 55296 && e63 < 56320;
}
function Le(e63) {
  return e63 < 65536 ? 1 : 2;
}
var C = class e10 {
  lineAt(e63) {
    if (e63 < 0 || e63 > this.length) throw RangeError(`Invalid position ${e63} in document of length ${this.length}`);
    return this.lineInner(e63, false, 1, 0);
  }
  line(e63) {
    if (e63 < 1 || e63 > this.lines) throw RangeError(`Invalid line number ${e63} in ${this.lines}-line document`);
    return this.lineInner(e63, true, 1, 0);
  }
  replace(e63, t3, n2) {
    [e63, t3] = Ke(this, e63, t3);
    let r2 = [];
    return this.decompose(0, e63, r2, 2), n2.length && n2.decompose(0, n2.length, r2, 3), this.decompose(t3, this.length, r2, 1), Re.from(r2, this.length - (t3 - e63) + n2.length);
  }
  append(e63) {
    return this.replace(this.length, this.length, e63);
  }
  slice(e63, t3 = this.length) {
    [e63, t3] = Ke(this, e63, t3);
    let n2 = [];
    return this.decompose(e63, t3, n2, 0), Re.from(n2, t3 - e63);
  }
  eq(e63) {
    if (e63 == this) return true;
    if (e63.length != this.length || e63.lines != this.lines) return false;
    let t3 = this.scanIdentical(e63, 1), n2 = this.length - this.scanIdentical(e63, -1), r2 = new He(this), i2 = new He(e63);
    for (let e64 = t3, a2 = t3; ; ) {
      if (r2.next(e64), i2.next(e64), e64 = 0, r2.lineBreak != i2.lineBreak || r2.done != i2.done || r2.value != i2.value) return false;
      if (a2 += r2.value.length, r2.done || a2 >= n2) return true;
    }
  }
  iter(e63 = 1) {
    return new He(this, e63);
  }
  iterRange(e63, t3 = this.length) {
    return new Ue(this, e63, t3);
  }
  iterLines(e63, t3) {
    let n2;
    if (e63 == null) n2 = this.iter();
    else {
      t3 ?? (t3 = this.lines + 1);
      let r2 = this.line(e63).from;
      n2 = this.iterRange(r2, Math.max(r2, t3 == this.lines + 1 ? this.length : t3 <= 1 ? 0 : this.line(t3 - 1).to));
    }
    return new We(n2);
  }
  toString() {
    return this.sliceString(0);
  }
  toJSON() {
    let e63 = [];
    return this.flatten(e63), e63;
  }
  constructor() {
  }
  static of(t3) {
    if (t3.length == 0) throw RangeError(`A document must have at least one line`);
    return t3.length == 1 && !t3[0] ? e10.empty : t3.length <= 32 ? new w(t3) : Re.from(w.split(t3, []));
  }
}, w = class e11 extends C {
  constructor(e63, t3 = ze(e63)) {
    super(), this.text = e63, this.length = t3;
  }
  get lines() {
    return this.text.length;
  }
  get children() {
    return null;
  }
  lineInner(e63, t3, n2, r2) {
    for (let i2 = 0; ; i2++) {
      let a2 = this.text[i2], o2 = r2 + a2.length;
      if ((t3 ? n2 : o2) >= e63) return new Ge(r2, o2, n2, a2);
      r2 = o2 + 1, n2++;
    }
  }
  decompose(t3, n2, r2, i2) {
    let a2 = t3 <= 0 && n2 >= this.length ? this : new e11(Ve(this.text, t3, n2), Math.min(n2, this.length) - Math.max(0, t3));
    if (i2 & 1) {
      let t4 = r2.pop(), n3 = Be(a2.text, t4.text.slice(), 0, a2.length);
      if (n3.length <= 32) r2.push(new e11(n3, t4.length + a2.length));
      else {
        let t5 = n3.length >> 1;
        r2.push(new e11(n3.slice(0, t5)), new e11(n3.slice(t5)));
      }
    } else r2.push(a2);
  }
  replace(t3, n2, r2) {
    if (!(r2 instanceof e11)) return super.replace(t3, n2, r2);
    [t3, n2] = Ke(this, t3, n2);
    let i2 = Be(this.text, Be(r2.text, Ve(this.text, 0, t3)), n2), a2 = this.length + r2.length - (n2 - t3);
    return i2.length <= 32 ? new e11(i2, a2) : Re.from(e11.split(i2, []), a2);
  }
  sliceString(e63, t3 = this.length, n2 = `
`) {
    [e63, t3] = Ke(this, e63, t3);
    let r2 = ``;
    for (let i2 = 0, a2 = 0; i2 <= t3 && a2 < this.text.length; a2++) {
      let o2 = this.text[a2], s2 = i2 + o2.length;
      i2 > e63 && a2 && (r2 += n2), e63 < s2 && t3 > i2 && (r2 += o2.slice(Math.max(0, e63 - i2), t3 - i2)), i2 = s2 + 1;
    }
    return r2;
  }
  flatten(e63) {
    for (let t3 of this.text) e63.push(t3);
  }
  scanIdentical() {
    return 0;
  }
  static split(t3, n2) {
    let r2 = [], i2 = -1;
    for (let a2 of t3) r2.push(a2), i2 += a2.length + 1, r2.length == 32 && (n2.push(new e11(r2, i2)), r2 = [], i2 = -1);
    return i2 > -1 && n2.push(new e11(r2, i2)), n2;
  }
}, Re = class e12 extends C {
  constructor(e63, t3) {
    super(), this.children = e63, this.length = t3, this.lines = 0;
    for (let t4 of e63) this.lines += t4.lines;
  }
  lineInner(e63, t3, n2, r2) {
    for (let i2 = 0; ; i2++) {
      let a2 = this.children[i2], o2 = r2 + a2.length, s2 = n2 + a2.lines - 1;
      if ((t3 ? s2 : o2) >= e63) return a2.lineInner(e63, t3, n2, r2);
      r2 = o2 + 1, n2 = s2 + 1;
    }
  }
  decompose(e63, t3, n2, r2) {
    for (let i2 = 0, a2 = 0; a2 <= t3 && i2 < this.children.length; i2++) {
      let o2 = this.children[i2], s2 = a2 + o2.length;
      if (e63 <= s2 && t3 >= a2) {
        let i3 = r2 & ((a2 <= e63 ? 1 : 0) | (s2 >= t3 ? 2 : 0));
        a2 >= e63 && s2 <= t3 && !i3 ? n2.push(o2) : o2.decompose(e63 - a2, t3 - a2, n2, i3);
      }
      a2 = s2 + 1;
    }
  }
  replace(t3, n2, r2) {
    if ([t3, n2] = Ke(this, t3, n2), r2.lines < this.lines) for (let i2 = 0, a2 = 0; i2 < this.children.length; i2++) {
      let o2 = this.children[i2], s2 = a2 + o2.length;
      if (t3 >= a2 && n2 <= s2) {
        let c2 = o2.replace(t3 - a2, n2 - a2, r2), l2 = this.lines - o2.lines + c2.lines;
        if (c2.lines < l2 >> 4 && c2.lines > l2 >> 6) {
          let a3 = this.children.slice();
          return a3[i2] = c2, new e12(a3, this.length - (n2 - t3) + r2.length);
        }
        return super.replace(a2, s2, c2);
      }
      a2 = s2 + 1;
    }
    return super.replace(t3, n2, r2);
  }
  sliceString(e63, t3 = this.length, n2 = `
`) {
    [e63, t3] = Ke(this, e63, t3);
    let r2 = ``;
    for (let i2 = 0, a2 = 0; i2 < this.children.length && a2 <= t3; i2++) {
      let o2 = this.children[i2], s2 = a2 + o2.length;
      a2 > e63 && i2 && (r2 += n2), e63 < s2 && t3 > a2 && (r2 += o2.sliceString(e63 - a2, t3 - a2, n2)), a2 = s2 + 1;
    }
    return r2;
  }
  flatten(e63) {
    for (let t3 of this.children) t3.flatten(e63);
  }
  scanIdentical(t3, n2) {
    if (!(t3 instanceof e12)) return 0;
    let r2 = 0, [i2, a2, o2, s2] = n2 > 0 ? [0, 0, this.children.length, t3.children.length] : [this.children.length - 1, t3.children.length - 1, -1, -1];
    for (; ; i2 += n2, a2 += n2) {
      if (i2 == o2 || a2 == s2) return r2;
      let e63 = this.children[i2], c2 = t3.children[a2];
      if (e63 != c2) return r2 + e63.scanIdentical(c2, n2);
      r2 += e63.length + 1;
    }
  }
  static from(t3, n2 = t3.reduce((e63, t4) => e63 + t4.length + 1, -1)) {
    let r2 = 0;
    for (let e63 of t3) r2 += e63.lines;
    if (r2 < 32) {
      let e63 = [];
      for (let n3 of t3) n3.flatten(e63);
      return new w(e63, n2);
    }
    let i2 = Math.max(32, r2 >> 5), a2 = i2 << 1, o2 = i2 >> 1, s2 = [], c2 = 0, l2 = -1, u2 = [];
    function d2(t4) {
      let n3;
      if (t4.lines > a2 && t4 instanceof e12) for (let e63 of t4.children) d2(e63);
      else t4.lines > o2 && (c2 > o2 || !c2) ? (f2(), s2.push(t4)) : t4 instanceof w && c2 && (n3 = u2[u2.length - 1]) instanceof w && t4.lines + n3.lines <= 32 ? (c2 += t4.lines, l2 += t4.length + 1, u2[u2.length - 1] = new w(n3.text.concat(t4.text), n3.length + 1 + t4.length)) : (c2 + t4.lines > i2 && f2(), c2 += t4.lines, l2 += t4.length + 1, u2.push(t4));
    }
    function f2() {
      c2 != 0 && (s2.push(u2.length == 1 ? u2[0] : e12.from(u2, l2)), l2 = -1, c2 = u2.length = 0);
    }
    for (let e63 of t3) d2(e63);
    return f2(), s2.length == 1 ? s2[0] : new e12(s2, n2);
  }
};
C.empty = new w([``], 0);
function ze(e63) {
  let t3 = -1;
  for (let n2 of e63) t3 += n2.length + 1;
  return t3;
}
function Be(e63, t3, n2 = 0, r2 = 1e9) {
  for (let i2 = 0, a2 = 0, o2 = true; a2 < e63.length && i2 <= r2; a2++) {
    let s2 = e63[a2], c2 = i2 + s2.length;
    c2 >= n2 && (c2 > r2 && (s2 = s2.slice(0, r2 - i2)), i2 < n2 && (s2 = s2.slice(n2 - i2)), o2 ? (t3[t3.length - 1] += s2, o2 = false) : t3.push(s2)), i2 = c2 + 1;
  }
  return t3;
}
function Ve(e63, t3, n2) {
  return Be(e63, [``], t3, n2);
}
var He = class {
  constructor(e63, t3 = 1) {
    this.dir = t3, this.done = false, this.lineBreak = false, this.value = ``, this.nodes = [e63], this.offsets = [t3 > 0 ? 1 : (e63 instanceof w ? e63.text.length : e63.children.length) << 1];
  }
  nextInner(e63, t3) {
    for (this.done = this.lineBreak = false; ; ) {
      let n2 = this.nodes.length - 1, r2 = this.nodes[n2], i2 = this.offsets[n2], a2 = i2 >> 1, o2 = r2 instanceof w ? r2.text.length : r2.children.length;
      if (a2 == (t3 > 0 ? o2 : 0)) {
        if (n2 == 0) return this.done = true, this.value = ``, this;
        t3 > 0 && this.offsets[n2 - 1]++, this.nodes.pop(), this.offsets.pop();
      } else if ((i2 & 1) == (t3 > 0 ? 0 : 1)) {
        if (this.offsets[n2] += t3, e63 == 0) return this.lineBreak = true, this.value = `
`, this;
        e63--;
      } else if (r2 instanceof w) {
        let i3 = r2.text[a2 + (t3 < 0 ? -1 : 0)];
        if (this.offsets[n2] += t3, i3.length > Math.max(0, e63)) return this.value = e63 == 0 ? i3 : t3 > 0 ? i3.slice(e63) : i3.slice(0, i3.length - e63), this;
        e63 -= i3.length;
      } else {
        let i3 = r2.children[a2 + (t3 < 0 ? -1 : 0)];
        e63 > i3.length ? (e63 -= i3.length, this.offsets[n2] += t3) : (t3 < 0 && this.offsets[n2]--, this.nodes.push(i3), this.offsets.push(t3 > 0 ? 1 : (i3 instanceof w ? i3.text.length : i3.children.length) << 1));
      }
    }
  }
  next(e63 = 0) {
    return e63 < 0 && (this.nextInner(-e63, -this.dir), e63 = this.value.length), this.nextInner(e63, this.dir);
  }
}, Ue = class {
  constructor(e63, t3, n2) {
    this.value = ``, this.done = false, this.cursor = new He(e63, t3 > n2 ? -1 : 1), this.pos = t3 > n2 ? e63.length : 0, this.from = Math.min(t3, n2), this.to = Math.max(t3, n2);
  }
  nextInner(e63, t3) {
    if (t3 < 0 ? this.pos <= this.from : this.pos >= this.to) return this.value = ``, this.done = true, this;
    e63 += Math.max(0, t3 < 0 ? this.pos - this.to : this.from - this.pos);
    let n2 = t3 < 0 ? this.pos - this.from : this.to - this.pos;
    e63 > n2 && (e63 = n2), n2 -= e63;
    let { value: r2 } = this.cursor.next(e63);
    return this.pos += (r2.length + e63) * t3, this.value = r2.length <= n2 ? r2 : t3 < 0 ? r2.slice(r2.length - n2) : r2.slice(0, n2), this.done = !this.value, this;
  }
  next(e63 = 0) {
    return e63 < 0 ? e63 = Math.max(e63, this.from - this.pos) : e63 > 0 && (e63 = Math.min(e63, this.to - this.pos)), this.nextInner(e63, this.cursor.dir);
  }
  get lineBreak() {
    return this.cursor.lineBreak && this.value != ``;
  }
}, We = class {
  constructor(e63) {
    this.inner = e63, this.afterBreak = true, this.value = ``, this.done = false;
  }
  next(e63 = 0) {
    let { done: t3, lineBreak: n2, value: r2 } = this.inner.next(e63);
    return t3 && this.afterBreak ? (this.value = ``, this.afterBreak = false) : t3 ? (this.done = true, this.value = ``) : n2 ? this.afterBreak ? this.value = `` : (this.afterBreak = true, this.next()) : (this.value = r2, this.afterBreak = false), this;
  }
  get lineBreak() {
    return false;
  }
};
typeof Symbol < `u` && (C.prototype[Symbol.iterator] = function() {
  return this.iter();
}, He.prototype[Symbol.iterator] = Ue.prototype[Symbol.iterator] = We.prototype[Symbol.iterator] = function() {
  return this;
});
var Ge = class {
  constructor(e63, t3, n2, r2) {
    this.from = e63, this.to = t3, this.number = n2, this.text = r2;
  }
  get length() {
    return this.to - this.from;
  }
};
function Ke(e63, t3, n2) {
  return t3 = Math.max(0, Math.min(e63.length, t3)), [t3, Math.max(t3, Math.min(e63.length, n2))];
}
function T(e63, t3, n2 = true, r2 = true) {
  return je(e63, t3, n2, r2);
}
function qe(e63) {
  return e63 >= 56320 && e63 < 57344;
}
function Je(e63) {
  return e63 >= 55296 && e63 < 56320;
}
function Ye(e63, t3) {
  let n2 = e63.charCodeAt(t3);
  if (!Je(n2) || t3 + 1 == e63.length) return n2;
  let r2 = e63.charCodeAt(t3 + 1);
  return qe(r2) ? (n2 - 55296 << 10) + (r2 - 56320) + 65536 : n2;
}
function Xe(e63) {
  return e63 <= 65535 ? String.fromCharCode(e63) : (e63 -= 65536, String.fromCharCode((e63 >> 10) + 55296, (e63 & 1023) + 56320));
}
function Ze(e63) {
  return e63 < 65536 ? 1 : 2;
}
var Qe = /\r\n?|\n/, E = (function(e63) {
  return e63[e63.Simple = 0] = `Simple`, e63[e63.TrackDel = 1] = `TrackDel`, e63[e63.TrackBefore = 2] = `TrackBefore`, e63[e63.TrackAfter = 3] = `TrackAfter`, e63;
})(E || (E = {})), $e = class e13 {
  constructor(e63) {
    this.sections = e63;
  }
  get length() {
    let e63 = 0;
    for (let t3 = 0; t3 < this.sections.length; t3 += 2) e63 += this.sections[t3];
    return e63;
  }
  get newLength() {
    let e63 = 0;
    for (let t3 = 0; t3 < this.sections.length; t3 += 2) {
      let n2 = this.sections[t3 + 1];
      e63 += n2 < 0 ? this.sections[t3] : n2;
    }
    return e63;
  }
  get empty() {
    return this.sections.length == 0 || this.sections.length == 2 && this.sections[1] < 0;
  }
  iterGaps(e63) {
    for (let t3 = 0, n2 = 0, r2 = 0; t3 < this.sections.length; ) {
      let i2 = this.sections[t3++], a2 = this.sections[t3++];
      a2 < 0 ? (e63(n2, r2, i2), r2 += i2) : r2 += a2, n2 += i2;
    }
  }
  iterChangedRanges(e63, t3 = false) {
    tt(this, e63, t3);
  }
  get invertedDesc() {
    let t3 = [];
    for (let e63 = 0; e63 < this.sections.length; ) {
      let n2 = this.sections[e63++], r2 = this.sections[e63++];
      r2 < 0 ? t3.push(n2, r2) : t3.push(r2, n2);
    }
    return new e13(t3);
  }
  composeDesc(e63) {
    return this.empty ? e63 : e63.empty ? this : rt(this, e63);
  }
  mapDesc(e63, t3 = false) {
    return e63.empty ? this : nt(this, e63, t3);
  }
  mapPos(e63, t3 = -1, n2 = E.Simple) {
    let r2 = 0, i2 = 0;
    for (let a2 = 0; a2 < this.sections.length; ) {
      let o2 = this.sections[a2++], s2 = this.sections[a2++], c2 = r2 + o2;
      if (s2 < 0) {
        if (c2 > e63) return i2 + (e63 - r2);
        i2 += o2;
      } else {
        if (n2 != E.Simple && c2 >= e63 && (n2 == E.TrackDel && r2 < e63 && c2 > e63 || n2 == E.TrackBefore && r2 < e63 || n2 == E.TrackAfter && c2 > e63)) return null;
        if (c2 > e63 || c2 == e63 && t3 < 0 && !o2) return e63 == r2 || t3 < 0 ? i2 : i2 + s2;
        i2 += s2;
      }
      r2 = c2;
    }
    if (e63 > r2) throw RangeError(`Position ${e63} is out of range for changeset of length ${r2}`);
    return i2;
  }
  touchesRange(e63, t3 = e63) {
    for (let n2 = 0, r2 = 0; n2 < this.sections.length && r2 <= t3; ) {
      let i2 = this.sections[n2++], a2 = this.sections[n2++], o2 = r2 + i2;
      if (a2 >= 0 && r2 <= t3 && o2 >= e63) return r2 < e63 && o2 > t3 ? `cover` : true;
      r2 = o2;
    }
    return false;
  }
  toString() {
    let e63 = ``;
    for (let t3 = 0; t3 < this.sections.length; ) {
      let n2 = this.sections[t3++], r2 = this.sections[t3++];
      e63 += (e63 ? ` ` : ``) + n2 + (r2 >= 0 ? `:` + r2 : ``);
    }
    return e63;
  }
  toJSON() {
    return this.sections;
  }
  static fromJSON(t3) {
    if (!Array.isArray(t3) || t3.length % 2 || t3.some((e63) => typeof e63 != `number`)) throw RangeError(`Invalid JSON representation of ChangeDesc`);
    return new e13(t3);
  }
  static create(t3) {
    return new e13(t3);
  }
}, D = class e14 extends $e {
  constructor(e63, t3) {
    super(e63), this.inserted = t3;
  }
  apply(e63) {
    if (this.length != e63.length) throw RangeError(`Applying change set to a document with the wrong length`);
    return tt(this, (t3, n2, r2, i2, a2) => e63 = e63.replace(r2, r2 + (n2 - t3), a2), false), e63;
  }
  mapDesc(e63, t3 = false) {
    return nt(this, e63, t3, true);
  }
  invert(t3) {
    let n2 = this.sections.slice(), r2 = [];
    for (let e63 = 0, i2 = 0; e63 < n2.length; e63 += 2) {
      let a2 = n2[e63], o2 = n2[e63 + 1];
      if (o2 >= 0) {
        n2[e63] = o2, n2[e63 + 1] = a2;
        let s2 = e63 >> 1;
        for (; r2.length < s2; ) r2.push(C.empty);
        r2.push(a2 ? t3.slice(i2, i2 + a2) : C.empty);
      }
      i2 += a2;
    }
    return new e14(n2, r2);
  }
  compose(e63) {
    return this.empty ? e63 : e63.empty ? this : rt(this, e63, true);
  }
  map(e63, t3 = false) {
    return e63.empty ? this : nt(this, e63, t3, true);
  }
  iterChanges(e63, t3 = false) {
    tt(this, e63, t3);
  }
  get desc() {
    return $e.create(this.sections);
  }
  filter(t3) {
    let n2 = [], r2 = [], i2 = [], a2 = new it(this);
    done: for (let e63 = 0, o2 = 0; ; ) {
      let s2 = e63 == t3.length ? 1e9 : t3[e63++];
      for (; o2 < s2 || o2 == s2 && a2.len == 0; ) {
        if (a2.done) break done;
        let e64 = Math.min(a2.len, s2 - o2);
        O(i2, e64, -1);
        let t4 = a2.ins == -1 ? -1 : a2.off == 0 ? a2.ins : 0;
        O(n2, e64, t4), t4 > 0 && et(r2, n2, a2.text), a2.forward(e64), o2 += e64;
      }
      let c2 = t3[e63++];
      for (; o2 < c2; ) {
        if (a2.done) break done;
        let e64 = Math.min(a2.len, c2 - o2);
        O(n2, e64, -1), O(i2, e64, a2.ins == -1 ? -1 : a2.off == 0 ? a2.ins : 0), a2.forward(e64), o2 += e64;
      }
    }
    return { changes: new e14(n2, r2), filtered: $e.create(i2) };
  }
  toJSON() {
    let e63 = [];
    for (let t3 = 0; t3 < this.sections.length; t3 += 2) {
      let n2 = this.sections[t3], r2 = this.sections[t3 + 1];
      r2 < 0 ? e63.push(n2) : r2 == 0 ? e63.push([n2]) : e63.push([n2].concat(this.inserted[t3 >> 1].toJSON()));
    }
    return e63;
  }
  static of(t3, n2, r2) {
    let i2 = [], a2 = [], o2 = 0, s2 = null;
    function c2(t4 = false) {
      if (!t4 && !i2.length) return;
      o2 < n2 && O(i2, n2 - o2, -1);
      let r3 = new e14(i2, a2);
      s2 = s2 ? s2.compose(r3.map(s2)) : r3, i2 = [], a2 = [], o2 = 0;
    }
    function l2(t4) {
      if (Array.isArray(t4)) for (let e63 of t4) l2(e63);
      else if (t4 instanceof e14) {
        if (t4.length != n2) throw RangeError(`Mismatched change set length (got ${t4.length}, expected ${n2})`);
        c2(), s2 = s2 ? s2.compose(t4.map(s2)) : t4;
      } else {
        let { from: e63, to: s3 = e63, insert: l3 } = t4;
        if (e63 > s3 || e63 < 0 || s3 > n2) throw RangeError(`Invalid change range ${e63} to ${s3} (in doc of length ${n2})`);
        let u2 = l3 ? typeof l3 == `string` ? C.of(l3.split(r2 || Qe)) : l3 : C.empty, d2 = u2.length;
        if (e63 == s3 && d2 == 0) return;
        e63 < o2 && c2(), e63 > o2 && O(i2, e63 - o2, -1), O(i2, s3 - e63, d2), et(a2, i2, u2), o2 = s3;
      }
    }
    return l2(t3), c2(!s2), s2;
  }
  static empty(t3) {
    return new e14(t3 ? [t3, -1] : [], []);
  }
  static fromJSON(t3) {
    if (!Array.isArray(t3)) throw RangeError(`Invalid JSON representation of ChangeSet`);
    let n2 = [], r2 = [];
    for (let e63 = 0; e63 < t3.length; e63++) {
      let i2 = t3[e63];
      if (typeof i2 == `number`) n2.push(i2, -1);
      else if (!Array.isArray(i2) || typeof i2[0] != `number` || i2.some((e64, t4) => t4 && typeof e64 != `string`)) throw RangeError(`Invalid JSON representation of ChangeSet`);
      else if (i2.length == 1) n2.push(i2[0], 0);
      else {
        for (; r2.length < e63; ) r2.push(C.empty);
        r2[e63] = C.of(i2.slice(1)), n2.push(i2[0], r2[e63].length);
      }
    }
    return new e14(n2, r2);
  }
  static createSet(t3, n2) {
    return new e14(t3, n2);
  }
};
function O(e63, t3, n2, r2 = false) {
  if (t3 == 0 && n2 <= 0) return;
  let i2 = e63.length - 2;
  i2 >= 0 && n2 <= 0 && n2 == e63[i2 + 1] ? e63[i2] += t3 : i2 >= 0 && t3 == 0 && e63[i2] == 0 ? e63[i2 + 1] += n2 : r2 ? (e63[i2] += t3, e63[i2 + 1] += n2) : e63.push(t3, n2);
}
function et(e63, t3, n2) {
  if (n2.length == 0) return;
  let r2 = t3.length - 2 >> 1;
  if (r2 < e63.length) e63[e63.length - 1] = e63[e63.length - 1].append(n2);
  else {
    for (; e63.length < r2; ) e63.push(C.empty);
    e63.push(n2);
  }
}
function tt(e63, t3, n2) {
  let r2 = e63.inserted;
  for (let i2 = 0, a2 = 0, o2 = 0; o2 < e63.sections.length; ) {
    let s2 = e63.sections[o2++], c2 = e63.sections[o2++];
    if (c2 < 0) i2 += s2, a2 += s2;
    else {
      let l2 = i2, u2 = a2, d2 = C.empty;
      for (; l2 += s2, u2 += c2, c2 && r2 && (d2 = d2.append(r2[o2 - 2 >> 1])), !(n2 || o2 == e63.sections.length || e63.sections[o2 + 1] < 0); ) s2 = e63.sections[o2++], c2 = e63.sections[o2++];
      t3(i2, l2, a2, u2, d2), i2 = l2, a2 = u2;
    }
  }
}
function nt(e63, t3, n2, r2 = false) {
  let i2 = [], a2 = r2 ? [] : null, o2 = new it(e63), s2 = new it(t3);
  for (let e64 = -1; ; ) if (o2.done && s2.len || s2.done && o2.len) throw Error(`Mismatched change set lengths`);
  else if (o2.ins == -1 && s2.ins == -1) {
    let e65 = Math.min(o2.len, s2.len);
    O(i2, e65, -1), o2.forward(e65), s2.forward(e65);
  } else if (s2.ins >= 0 && (o2.ins < 0 || e64 == o2.i || o2.off == 0 && (s2.len < o2.len || s2.len == o2.len && !n2))) {
    let t4 = s2.len;
    for (O(i2, s2.ins, -1); t4; ) {
      let n3 = Math.min(o2.len, t4);
      o2.ins >= 0 && e64 < o2.i && o2.len <= n3 && (O(i2, 0, o2.ins), a2 && et(a2, i2, o2.text), e64 = o2.i), o2.forward(n3), t4 -= n3;
    }
    s2.next();
  } else if (o2.ins >= 0) {
    let t4 = 0, n3 = o2.len;
    for (; n3; ) if (s2.ins == -1) {
      let e65 = Math.min(n3, s2.len);
      t4 += e65, n3 -= e65, s2.forward(e65);
    } else if (s2.ins == 0 && s2.len < n3) n3 -= s2.len, s2.next();
    else break;
    O(i2, t4, e64 < o2.i ? o2.ins : 0), a2 && e64 < o2.i && et(a2, i2, o2.text), e64 = o2.i, o2.forward(o2.len - n3);
  } else if (o2.done && s2.done) return a2 ? D.createSet(i2, a2) : $e.create(i2);
  else throw Error(`Mismatched change set lengths`);
}
function rt(e63, t3, n2 = false) {
  let r2 = [], i2 = n2 ? [] : null, a2 = new it(e63), o2 = new it(t3);
  for (let e64 = false; ; ) if (a2.done && o2.done) return i2 ? D.createSet(r2, i2) : $e.create(r2);
  else if (a2.ins == 0) O(r2, a2.len, 0, e64), a2.next();
  else if (o2.len == 0 && !o2.done) O(r2, 0, o2.ins, e64), i2 && et(i2, r2, o2.text), o2.next();
  else if (a2.done || o2.done) throw Error(`Mismatched change set lengths`);
  else {
    let t4 = Math.min(a2.len2, o2.len), n3 = r2.length;
    if (a2.ins == -1) {
      let n4 = o2.ins == -1 ? -1 : o2.off ? 0 : o2.ins;
      O(r2, t4, n4, e64), i2 && n4 && et(i2, r2, o2.text);
    } else o2.ins == -1 ? (O(r2, a2.off ? 0 : a2.len, t4, e64), i2 && et(i2, r2, a2.textBit(t4))) : (O(r2, a2.off ? 0 : a2.len, o2.off ? 0 : o2.ins, e64), i2 && !o2.off && et(i2, r2, o2.text));
    e64 = (a2.ins > t4 || o2.ins >= 0 && o2.len > t4) && (e64 || r2.length > n3), a2.forward2(t4), o2.forward(t4);
  }
}
var it = class {
  constructor(e63) {
    this.set = e63, this.i = 0, this.next();
  }
  next() {
    let { sections: e63 } = this.set;
    this.i < e63.length ? (this.len = e63[this.i++], this.ins = e63[this.i++]) : (this.len = 0, this.ins = -2), this.off = 0;
  }
  get done() {
    return this.ins == -2;
  }
  get len2() {
    return this.ins < 0 ? this.len : this.ins;
  }
  get text() {
    let { inserted: e63 } = this.set, t3 = this.i - 2 >> 1;
    return t3 >= e63.length ? C.empty : e63[t3];
  }
  textBit(e63) {
    let { inserted: t3 } = this.set, n2 = this.i - 2 >> 1;
    return n2 >= t3.length && !e63 ? C.empty : t3[n2].slice(this.off, e63 == null ? void 0 : this.off + e63);
  }
  forward(e63) {
    e63 == this.len ? this.next() : (this.len -= e63, this.off += e63);
  }
  forward2(e63) {
    this.ins == -1 ? this.forward(e63) : e63 == this.ins ? this.next() : (this.ins -= e63, this.off += e63);
  }
}, at = class e15 {
  constructor(e63, t3, n2) {
    this.from = e63, this.to = t3, this.flags = n2;
  }
  get anchor() {
    return this.flags & 32 ? this.to : this.from;
  }
  get head() {
    return this.flags & 32 ? this.from : this.to;
  }
  get empty() {
    return this.from == this.to;
  }
  get assoc() {
    return this.flags & 8 ? -1 : this.flags & 16 ? 1 : 0;
  }
  get bidiLevel() {
    let e63 = this.flags & 7;
    return e63 == 7 ? null : e63;
  }
  get goalColumn() {
    let e63 = this.flags >> 6;
    return e63 == 16777215 ? void 0 : e63;
  }
  map(t3, n2 = -1) {
    let r2, i2;
    return this.empty ? r2 = i2 = t3.mapPos(this.from, n2) : (r2 = t3.mapPos(this.from, 1), i2 = t3.mapPos(this.to, -1)), r2 == this.from && i2 == this.to ? this : new e15(r2, i2, this.flags);
  }
  extend(e63, t3 = e63) {
    if (e63 <= this.anchor && t3 >= this.anchor) return k.range(e63, t3);
    let n2 = Math.abs(e63 - this.anchor) > Math.abs(t3 - this.anchor) ? e63 : t3;
    return k.range(this.anchor, n2);
  }
  eq(e63, t3 = false) {
    return this.anchor == e63.anchor && this.head == e63.head && (!t3 || !this.empty || this.assoc == e63.assoc);
  }
  toJSON() {
    return { anchor: this.anchor, head: this.head };
  }
  static fromJSON(e63) {
    if (!e63 || typeof e63.anchor != `number` || typeof e63.head != `number`) throw RangeError(`Invalid JSON representation for SelectionRange`);
    return k.range(e63.anchor, e63.head);
  }
  static create(t3, n2, r2) {
    return new e15(t3, n2, r2);
  }
}, k = class e16 {
  constructor(e63, t3) {
    this.ranges = e63, this.mainIndex = t3;
  }
  map(t3, n2 = -1) {
    return t3.empty ? this : e16.create(this.ranges.map((e63) => e63.map(t3, n2)), this.mainIndex);
  }
  eq(e63, t3 = false) {
    if (this.ranges.length != e63.ranges.length || this.mainIndex != e63.mainIndex) return false;
    for (let n2 = 0; n2 < this.ranges.length; n2++) if (!this.ranges[n2].eq(e63.ranges[n2], t3)) return false;
    return true;
  }
  get main() {
    return this.ranges[this.mainIndex];
  }
  asSingle() {
    return this.ranges.length == 1 ? this : new e16([this.main], 0);
  }
  addRange(t3, n2 = true) {
    return e16.create([t3].concat(this.ranges), n2 ? 0 : this.mainIndex + 1);
  }
  replaceRange(t3, n2 = this.mainIndex) {
    let r2 = this.ranges.slice();
    return r2[n2] = t3, e16.create(r2, this.mainIndex);
  }
  toJSON() {
    return { ranges: this.ranges.map((e63) => e63.toJSON()), main: this.mainIndex };
  }
  static fromJSON(t3) {
    if (!t3 || !Array.isArray(t3.ranges) || typeof t3.main != `number` || t3.main >= t3.ranges.length) throw RangeError(`Invalid JSON representation for EditorSelection`);
    return new e16(t3.ranges.map((e63) => at.fromJSON(e63)), t3.main);
  }
  static single(t3, n2 = t3) {
    return new e16([e16.range(t3, n2)], 0);
  }
  static create(t3, n2 = 0) {
    if (t3.length == 0) throw RangeError(`A selection needs at least one range`);
    for (let r2 = 0, i2 = 0; i2 < t3.length; i2++) {
      let a2 = t3[i2];
      if (a2.empty ? a2.from <= r2 : a2.from < r2) return e16.normalized(t3.slice(), n2);
      r2 = a2.to;
    }
    return new e16(t3, n2);
  }
  static cursor(e63, t3 = 0, n2, r2) {
    return at.create(e63, e63, (t3 == 0 ? 0 : t3 < 0 ? 8 : 16) | (n2 == null ? 7 : Math.min(6, n2)) | (r2 ?? 16777215) << 6);
  }
  static range(e63, t3, n2, r2) {
    let i2 = (n2 ?? 16777215) << 6 | (r2 == null ? 7 : Math.min(6, r2));
    return t3 < e63 ? at.create(t3, e63, 48 | i2) : at.create(e63, t3, (t3 > e63 ? 8 : 0) | i2);
  }
  static normalized(t3, n2 = 0) {
    let r2 = t3[n2];
    t3.sort((e63, t4) => e63.from - t4.from), n2 = t3.indexOf(r2);
    for (let r3 = 1; r3 < t3.length; r3++) {
      let i2 = t3[r3], a2 = t3[r3 - 1];
      if (i2.empty ? i2.from <= a2.to : i2.from < a2.to) {
        let o2 = a2.from, s2 = Math.max(i2.to, a2.to);
        r3 <= n2 && n2--, t3.splice(--r3, 2, i2.anchor > i2.head ? e16.range(s2, o2) : e16.range(o2, s2));
      }
    }
    return new e16(t3, n2);
  }
};
function ot(e63, t3) {
  for (let n2 of e63.ranges) if (n2.to > t3) throw RangeError(`Selection points outside of document`);
}
var st = 0, A = class e17 {
  constructor(e63, t3, n2, r2, i2) {
    this.combine = e63, this.compareInput = t3, this.compare = n2, this.isStatic = r2, this.id = st++, this.default = e63([]), this.extensions = typeof i2 == `function` ? i2(this) : i2;
  }
  get reader() {
    return this;
  }
  static define(t3 = {}) {
    return new e17(t3.combine || ((e63) => e63), t3.compareInput || ((e63, t4) => e63 === t4), t3.compare || (t3.combine ? (e63, t4) => e63 === t4 : ct), !!t3.static, t3.enables);
  }
  of(e63) {
    return new lt([], this, 0, e63);
  }
  compute(e63, t3) {
    if (this.isStatic) throw Error(`Can't compute a static facet`);
    return new lt(e63, this, 1, t3);
  }
  computeN(e63, t3) {
    if (this.isStatic) throw Error(`Can't compute a static facet`);
    return new lt(e63, this, 2, t3);
  }
  from(e63, t3) {
    return t3 || (t3 = (e64) => e64), this.compute([e63], (n2) => t3(n2.field(e63)));
  }
};
function ct(e63, t3) {
  return e63 == t3 || e63.length == t3.length && e63.every((e64, n2) => e64 === t3[n2]);
}
var lt = class {
  constructor(e63, t3, n2, r2) {
    this.dependencies = e63, this.facet = t3, this.type = n2, this.value = r2, this.id = st++;
  }
  dynamicSlot(e63) {
    let t3 = this.value, n2 = this.facet.compareInput, r2 = this.id, i2 = e63[r2] >> 1, a2 = this.type == 2, o2 = false, s2 = false, c2 = [];
    for (let t4 of this.dependencies) t4 == `doc` ? o2 = true : t4 == `selection` ? s2 = true : (e63[t4.id] ?? 1) & 1 || c2.push(e63[t4.id]);
    return { create(e64) {
      return e64.values[i2] = t3(e64), 1;
    }, update(e64, r3) {
      if (o2 && r3.docChanged || s2 && (r3.docChanged || r3.selection) || dt(e64, c2)) {
        let r4 = t3(e64);
        if (a2 ? !ut(r4, e64.values[i2], n2) : !n2(r4, e64.values[i2])) return e64.values[i2] = r4, 1;
      }
      return 0;
    }, reconfigure: (e64, o3) => {
      let s3, c3 = o3.config.address[r2];
      if (c3 != null) {
        let r3 = wt(o3, c3);
        if (this.dependencies.every((t4) => t4 instanceof A ? o3.facet(t4) === e64.facet(t4) : t4 instanceof mt ? o3.field(t4, false) == e64.field(t4, false) : true) || (a2 ? ut(s3 = t3(e64), r3, n2) : n2(s3 = t3(e64), r3))) return e64.values[i2] = r3, 0;
      } else s3 = t3(e64);
      return e64.values[i2] = s3, 1;
    } };
  }
};
function ut(e63, t3, n2) {
  if (e63.length != t3.length) return false;
  for (let r2 = 0; r2 < e63.length; r2++) if (!n2(e63[r2], t3[r2])) return false;
  return true;
}
function dt(e63, t3) {
  let n2 = false;
  for (let r2 of t3) Ct(e63, r2) & 1 && (n2 = true);
  return n2;
}
function ft(e63, t3, n2) {
  let r2 = n2.map((t4) => e63[t4.id]), i2 = n2.map((e64) => e64.type), a2 = r2.filter((e64) => !(e64 & 1)), o2 = e63[t3.id] >> 1;
  function s2(e64) {
    let n3 = [];
    for (let t4 = 0; t4 < r2.length; t4++) {
      let a3 = wt(e64, r2[t4]);
      if (i2[t4] == 2) for (let e65 of a3) n3.push(e65);
      else n3.push(a3);
    }
    return t3.combine(n3);
  }
  return { create(e64) {
    for (let t4 of r2) Ct(e64, t4);
    return e64.values[o2] = s2(e64), 1;
  }, update(e64, n3) {
    if (!dt(e64, a2)) return 0;
    let r3 = s2(e64);
    return t3.compare(r3, e64.values[o2]) ? 0 : (e64.values[o2] = r3, 1);
  }, reconfigure(e64, i3) {
    let a3 = dt(e64, r2), c2 = i3.config.facets[t3.id], l2 = i3.facet(t3);
    if (c2 && !a3 && ct(n2, c2)) return e64.values[o2] = l2, 0;
    let u2 = s2(e64);
    return t3.compare(u2, l2) ? (e64.values[o2] = l2, 0) : (e64.values[o2] = u2, 1);
  } };
}
var pt = A.define({ static: true }), mt = class e18 {
  constructor(e63, t3, n2, r2, i2) {
    this.id = e63, this.createF = t3, this.updateF = n2, this.compareF = r2, this.spec = i2, this.provides = void 0;
  }
  static define(t3) {
    let n2 = new e18(st++, t3.create, t3.update, t3.compare || ((e63, t4) => e63 === t4), t3);
    return t3.provide && (n2.provides = t3.provide(n2)), n2;
  }
  create(e63) {
    var _a3;
    return (((_a3 = e63.facet(pt).find((e64) => e64.field == this)) == null ? void 0 : _a3.create) || this.createF)(e63);
  }
  slot(e63) {
    let t3 = e63[this.id] >> 1;
    return { create: (e64) => (e64.values[t3] = this.create(e64), 1), update: (e64, n2) => {
      let r2 = e64.values[t3], i2 = this.updateF(r2, n2);
      return this.compareF(r2, i2) ? 0 : (e64.values[t3] = i2, 1);
    }, reconfigure: (e64, n2) => {
      let r2 = e64.facet(pt), i2 = n2.facet(pt), a2;
      return (a2 = r2.find((e65) => e65.field == this)) && a2 != i2.find((e65) => e65.field == this) ? (e64.values[t3] = a2.create(e64), 1) : n2.config.address[this.id] == null ? (e64.values[t3] = this.create(e64), 1) : (e64.values[t3] = n2.field(this), 0);
    } };
  }
  init(e63) {
    return [this, pt.of({ field: this, create: e63 })];
  }
  get extension() {
    return this;
  }
}, ht = { lowest: 4, low: 3, default: 2, high: 1, highest: 0 };
function gt(e63) {
  return (t3) => new vt(t3, e63);
}
var _t = { highest: gt(ht.highest), high: gt(ht.high), default: gt(ht.default), low: gt(ht.low), lowest: gt(ht.lowest) }, vt = class {
  constructor(e63, t3) {
    this.inner = e63, this.prec = t3;
  }
}, yt = class e19 {
  of(e63) {
    return new bt(this, e63);
  }
  reconfigure(t3) {
    return e19.reconfigure.of({ compartment: this, extension: t3 });
  }
  get(e63) {
    return e63.config.compartments.get(this);
  }
}, bt = class {
  constructor(e63, t3) {
    this.compartment = e63, this.inner = t3;
  }
}, xt = class e20 {
  constructor(e63, t3, n2, r2, i2, a2) {
    for (this.base = e63, this.compartments = t3, this.dynamicSlots = n2, this.address = r2, this.staticValues = i2, this.facets = a2, this.statusTemplate = []; this.statusTemplate.length < n2.length; ) this.statusTemplate.push(0);
  }
  staticFacet(e63) {
    let t3 = this.address[e63.id];
    return t3 == null ? e63.default : this.staticValues[t3 >> 1];
  }
  static resolve(t3, n2, r2) {
    let i2 = [], a2 = /* @__PURE__ */ Object.create(null), o2 = /* @__PURE__ */ new Map();
    for (let e63 of St(t3, n2, o2)) e63 instanceof mt ? i2.push(e63) : (a2[e63.facet.id] || (a2[e63.facet.id] = [])).push(e63);
    let s2 = /* @__PURE__ */ Object.create(null), c2 = [], l2 = [];
    for (let e63 of i2) s2[e63.id] = l2.length << 1, l2.push((t4) => e63.slot(t4));
    let u2 = r2 == null ? void 0 : r2.config.facets;
    for (let e63 in a2) {
      let t4 = a2[e63], n3 = t4[0].facet, i3 = u2 && u2[e63] || [];
      if (t4.every((e64) => e64.type == 0)) if (s2[n3.id] = c2.length << 1 | 1, ct(i3, t4)) c2.push(r2.facet(n3));
      else {
        let e64 = n3.combine(t4.map((e65) => e65.value));
        c2.push(r2 && n3.compare(e64, r2.facet(n3)) ? r2.facet(n3) : e64);
      }
      else {
        for (let e64 of t4) e64.type == 0 ? (s2[e64.id] = c2.length << 1 | 1, c2.push(e64.value)) : (s2[e64.id] = l2.length << 1, l2.push((t5) => e64.dynamicSlot(t5)));
        s2[n3.id] = l2.length << 1, l2.push((e64) => ft(e64, n3, t4));
      }
    }
    return new e20(t3, o2, l2.map((e63) => e63(s2)), s2, c2, a2);
  }
};
function St(e63, t3, n2) {
  let r2 = [[], [], [], [], []], i2 = /* @__PURE__ */ new Map();
  function a2(e64, o2) {
    let s2 = i2.get(e64);
    if (s2 != null) {
      if (s2 <= o2) return;
      let t4 = r2[s2].indexOf(e64);
      t4 > -1 && r2[s2].splice(t4, 1), e64 instanceof bt && n2.delete(e64.compartment);
    }
    if (i2.set(e64, o2), Array.isArray(e64)) for (let t4 of e64) a2(t4, o2);
    else if (e64 instanceof bt) {
      if (n2.has(e64.compartment)) throw RangeError(`Duplicate use of compartment in extensions`);
      let r3 = t3.get(e64.compartment) || e64.inner;
      n2.set(e64.compartment, r3), a2(r3, o2);
    } else if (e64 instanceof vt) a2(e64.inner, e64.prec);
    else if (e64 instanceof mt) r2[o2].push(e64), e64.provides && a2(e64.provides, o2);
    else if (e64 instanceof lt) r2[o2].push(e64), e64.facet.extensions && a2(e64.facet.extensions, ht.default);
    else {
      let t4 = e64.extension;
      if (!t4) throw Error(`Unrecognized extension value in extension set (${e64}). This sometimes happens because multiple instances of @codemirror/state are loaded, breaking instanceof checks.`);
      a2(t4, o2);
    }
  }
  return a2(e63, ht.default), r2.reduce((e64, t4) => e64.concat(t4));
}
function Ct(e63, t3) {
  if (t3 & 1) return 2;
  let n2 = t3 >> 1, r2 = e63.status[n2];
  if (r2 == 4) throw Error(`Cyclic dependency between fields and/or facets`);
  if (r2 & 2) return r2;
  e63.status[n2] = 4;
  let i2 = e63.computeSlot(e63, e63.config.dynamicSlots[n2]);
  return e63.status[n2] = 2 | i2;
}
function wt(e63, t3) {
  return t3 & 1 ? e63.config.staticValues[t3 >> 1] : e63.values[t3 >> 1];
}
var Tt = A.define(), Et = A.define({ combine: (e63) => e63.some((e64) => e64), static: true }), Dt = A.define({ combine: (e63) => e63.length ? e63[0] : void 0, static: true }), Ot = A.define(), kt = A.define(), At = A.define(), jt = A.define({ combine: (e63) => e63.length ? e63[0] : false }), Mt = class {
  constructor(e63, t3) {
    this.type = e63, this.value = t3;
  }
  static define() {
    return new Nt();
  }
}, Nt = class {
  of(e63) {
    return new Mt(this, e63);
  }
}, Pt = class {
  constructor(e63) {
    this.map = e63;
  }
  of(e63) {
    return new j(this, e63);
  }
}, j = class e21 {
  constructor(e63, t3) {
    this.type = e63, this.value = t3;
  }
  map(t3) {
    let n2 = this.type.map(this.value, t3);
    return n2 === void 0 ? void 0 : n2 == this.value ? this : new e21(this.type, n2);
  }
  is(e63) {
    return this.type == e63;
  }
  static define(e63 = {}) {
    return new Pt(e63.map || ((e64) => e64));
  }
  static mapEffects(e63, t3) {
    if (!e63.length) return e63;
    let n2 = [];
    for (let r2 of e63) {
      let e64 = r2.map(t3);
      e64 && n2.push(e64);
    }
    return n2;
  }
};
j.reconfigure = j.define(), j.appendConfig = j.define();
var M = class e22 {
  constructor(t3, n2, r2, i2, a2, o2) {
    this.startState = t3, this.changes = n2, this.selection = r2, this.effects = i2, this.annotations = a2, this.scrollIntoView = o2, this._doc = null, this._state = null, r2 && ot(r2, n2.newLength), a2.some((t4) => t4.type == e22.time) || (this.annotations = a2.concat(e22.time.of(Date.now())));
  }
  static create(t3, n2, r2, i2, a2, o2) {
    return new e22(t3, n2, r2, i2, a2, o2);
  }
  get newDoc() {
    return this._doc || (this._doc = this.changes.apply(this.startState.doc));
  }
  get newSelection() {
    return this.selection || this.startState.selection.map(this.changes);
  }
  get state() {
    return this._state || this.startState.applyTransaction(this), this._state;
  }
  annotation(e63) {
    for (let t3 of this.annotations) if (t3.type == e63) return t3.value;
  }
  get docChanged() {
    return !this.changes.empty;
  }
  get reconfigured() {
    return this.startState.config != this.state.config;
  }
  isUserEvent(t3) {
    let n2 = this.annotation(e22.userEvent);
    return !!(n2 && (n2 == t3 || n2.length > t3.length && n2.slice(0, t3.length) == t3 && n2[t3.length] == `.`));
  }
};
M.time = Mt.define(), M.userEvent = Mt.define(), M.addToHistory = Mt.define(), M.remote = Mt.define();
function Ft(e63, t3) {
  let n2 = [];
  for (let r2 = 0, i2 = 0; ; ) {
    let a2, o2;
    if (r2 < e63.length && (i2 == t3.length || t3[i2] >= e63[r2])) a2 = e63[r2++], o2 = e63[r2++];
    else if (i2 < t3.length) a2 = t3[i2++], o2 = t3[i2++];
    else return n2;
    !n2.length || n2[n2.length - 1] < a2 ? n2.push(a2, o2) : n2[n2.length - 1] < o2 && (n2[n2.length - 1] = o2);
  }
}
function It(e63, t3, n2) {
  var _a3;
  let r2, i2, a2;
  return n2 ? (r2 = t3.changes, i2 = D.empty(t3.changes.length), a2 = e63.changes.compose(t3.changes)) : (r2 = t3.changes.map(e63.changes), i2 = e63.changes.mapDesc(t3.changes, true), a2 = e63.changes.compose(r2)), { changes: a2, selection: t3.selection ? t3.selection.map(i2) : (_a3 = e63.selection) == null ? void 0 : _a3.map(r2), effects: j.mapEffects(e63.effects, r2).concat(j.mapEffects(t3.effects, i2)), annotations: e63.annotations.length ? e63.annotations.concat(t3.annotations) : t3.annotations, scrollIntoView: e63.scrollIntoView || t3.scrollIntoView };
}
function Lt(e63, t3, n2) {
  let r2 = t3.selection, i2 = Ht(t3.annotations);
  return t3.userEvent && (i2 = i2.concat(M.userEvent.of(t3.userEvent))), { changes: t3.changes instanceof D ? t3.changes : D.of(t3.changes || [], n2, e63.facet(Dt)), selection: r2 && (r2 instanceof k ? r2 : k.single(r2.anchor, r2.head)), effects: Ht(t3.effects), annotations: i2, scrollIntoView: !!t3.scrollIntoView };
}
function Rt(e63, t3, n2) {
  let r2 = Lt(e63, t3.length ? t3[0] : {}, e63.doc.length);
  t3.length && t3[0].filter === false && (n2 = false);
  for (let i3 = 1; i3 < t3.length; i3++) {
    t3[i3].filter === false && (n2 = false);
    let a2 = !!t3[i3].sequential;
    r2 = It(r2, Lt(e63, t3[i3], a2 ? r2.changes.newLength : e63.doc.length), a2);
  }
  let i2 = M.create(e63, r2.changes, r2.selection, r2.effects, r2.annotations, r2.scrollIntoView);
  return Bt(n2 ? zt(i2) : i2);
}
function zt(e63) {
  let t3 = e63.startState, n2 = true;
  for (let r3 of t3.facet(Ot)) {
    let t4 = r3(e63);
    if (t4 === false) {
      n2 = false;
      break;
    }
    Array.isArray(t4) && (n2 = n2 === true ? t4 : Ft(n2, t4));
  }
  if (n2 !== true) {
    let r3, i2;
    if (n2 === false) i2 = e63.changes.invertedDesc, r3 = D.empty(t3.doc.length);
    else {
      let t4 = e63.changes.filter(n2);
      r3 = t4.changes, i2 = t4.filtered.mapDesc(t4.changes).invertedDesc;
    }
    e63 = M.create(t3, r3, e63.selection && e63.selection.map(i2), j.mapEffects(e63.effects, i2), e63.annotations, e63.scrollIntoView);
  }
  let r2 = t3.facet(kt);
  for (let n3 = r2.length - 1; n3 >= 0; n3--) {
    let i2 = r2[n3](e63);
    e63 = i2 instanceof M ? i2 : Array.isArray(i2) && i2.length == 1 && i2[0] instanceof M ? i2[0] : Rt(t3, Ht(i2), false);
  }
  return e63;
}
function Bt(e63) {
  let t3 = e63.startState, n2 = t3.facet(At), r2 = e63;
  for (let i2 = n2.length - 1; i2 >= 0; i2--) {
    let a2 = n2[i2](e63);
    a2 && Object.keys(a2).length && (r2 = It(r2, Lt(t3, a2, e63.changes.newLength), true));
  }
  return r2 == e63 ? e63 : M.create(t3, e63.changes, e63.selection, r2.effects, r2.annotations, r2.scrollIntoView);
}
var Vt = [];
function Ht(e63) {
  return e63 == null ? Vt : Array.isArray(e63) ? e63 : [e63];
}
var Ut = (function(e63) {
  return e63[e63.Word = 0] = `Word`, e63[e63.Space = 1] = `Space`, e63[e63.Other = 2] = `Other`, e63;
})(Ut || (Ut = {})), Wt = /[\u00df\u0587\u0590-\u05f4\u0600-\u06ff\u3040-\u309f\u30a0-\u30ff\u3400-\u4db5\u4e00-\u9fcc\uac00-\ud7af]/, Gt;
try {
  Gt = RegExp(`[\\p{Alphabetic}\\p{Number}_]`, `u`);
} catch {
}
function Kt(e63) {
  if (Gt) return Gt.test(e63);
  for (let t3 = 0; t3 < e63.length; t3++) {
    let n2 = e63[t3];
    if (/\w/.test(n2) || n2 > `\x80` && (n2.toUpperCase() != n2.toLowerCase() || Wt.test(n2))) return true;
  }
  return false;
}
function qt(e63) {
  return (t3) => {
    if (!/\S/.test(t3)) return Ut.Space;
    if (Kt(t3)) return Ut.Word;
    for (let n2 = 0; n2 < e63.length; n2++) if (t3.indexOf(e63[n2]) > -1) return Ut.Word;
    return Ut.Other;
  };
}
var N = class e23 {
  constructor(e63, t3, n2, r2, i2, a2) {
    this.config = e63, this.doc = t3, this.selection = n2, this.values = r2, this.status = e63.statusTemplate.slice(), this.computeSlot = i2, a2 && (a2._state = this);
    for (let e64 = 0; e64 < this.config.dynamicSlots.length; e64++) Ct(this, e64 << 1);
    this.computeSlot = null;
  }
  field(e63, t3 = true) {
    let n2 = this.config.address[e63.id];
    if (n2 == null) {
      if (t3) throw RangeError(`Field is not present in this state`);
      return;
    }
    return Ct(this, n2), wt(this, n2);
  }
  update(...e63) {
    return Rt(this, e63, true);
  }
  applyTransaction(t3) {
    let n2 = this.config, { base: r2, compartments: i2 } = n2;
    for (let e63 of t3.effects) e63.is(yt.reconfigure) ? (n2 && (n2 = (i2 = /* @__PURE__ */ new Map(), n2.compartments.forEach((e64, t4) => i2.set(t4, e64)), null)), i2.set(e63.value.compartment, e63.value.extension)) : e63.is(j.reconfigure) ? (n2 = null, r2 = e63.value) : e63.is(j.appendConfig) && (n2 = null, r2 = Ht(r2).concat(e63.value));
    let a2;
    n2 ? a2 = t3.startState.values.slice() : (n2 = xt.resolve(r2, i2, this), a2 = new e23(n2, this.doc, this.selection, n2.dynamicSlots.map(() => null), (e63, t4) => t4.reconfigure(e63, this), null).values);
    let o2 = t3.startState.facet(Et) ? t3.newSelection : t3.newSelection.asSingle();
    new e23(n2, t3.newDoc, o2, a2, (e63, n3) => n3.update(e63, t3), t3);
  }
  replaceSelection(e63) {
    return typeof e63 == `string` && (e63 = this.toText(e63)), this.changeByRange((t3) => ({ changes: { from: t3.from, to: t3.to, insert: e63 }, range: k.cursor(t3.from + e63.length) }));
  }
  changeByRange(e63) {
    let t3 = this.selection, n2 = e63(t3.ranges[0]), r2 = this.changes(n2.changes), i2 = [n2.range], a2 = Ht(n2.effects);
    for (let n3 = 1; n3 < t3.ranges.length; n3++) {
      let o2 = e63(t3.ranges[n3]), s2 = this.changes(o2.changes), c2 = s2.map(r2);
      for (let e64 = 0; e64 < n3; e64++) i2[e64] = i2[e64].map(c2);
      let l2 = r2.mapDesc(s2, true);
      i2.push(o2.range.map(l2)), r2 = r2.compose(c2), a2 = j.mapEffects(a2, c2).concat(j.mapEffects(Ht(o2.effects), l2));
    }
    return { changes: r2, selection: k.create(i2, t3.mainIndex), effects: a2 };
  }
  changes(t3 = []) {
    return t3 instanceof D ? t3 : D.of(t3, this.doc.length, this.facet(e23.lineSeparator));
  }
  toText(t3) {
    return C.of(t3.split(this.facet(e23.lineSeparator) || Qe));
  }
  sliceDoc(e63 = 0, t3 = this.doc.length) {
    return this.doc.sliceString(e63, t3, this.lineBreak);
  }
  facet(e63) {
    let t3 = this.config.address[e63.id];
    return t3 == null ? e63.default : (Ct(this, t3), wt(this, t3));
  }
  toJSON(e63) {
    let t3 = { doc: this.sliceDoc(), selection: this.selection.toJSON() };
    if (e63) for (let n2 in e63) {
      let r2 = e63[n2];
      r2 instanceof mt && this.config.address[r2.id] != null && (t3[n2] = r2.spec.toJSON(this.field(e63[n2]), this));
    }
    return t3;
  }
  static fromJSON(t3, n2 = {}, r2) {
    if (!t3 || typeof t3.doc != `string`) throw RangeError(`Invalid JSON representation for EditorState`);
    let i2 = [];
    if (r2) {
      for (let e63 in r2) if (Object.prototype.hasOwnProperty.call(t3, e63)) {
        let n3 = r2[e63], a2 = t3[e63];
        i2.push(n3.init((e64) => n3.spec.fromJSON(a2, e64)));
      }
    }
    return e23.create({ doc: t3.doc, selection: k.fromJSON(t3.selection), extensions: n2.extensions ? i2.concat([n2.extensions]) : i2 });
  }
  static create(t3 = {}) {
    let n2 = xt.resolve(t3.extensions || [], /* @__PURE__ */ new Map()), r2 = t3.doc instanceof C ? t3.doc : C.of((t3.doc || ``).split(n2.staticFacet(e23.lineSeparator) || Qe)), i2 = t3.selection ? t3.selection instanceof k ? t3.selection : k.single(t3.selection.anchor, t3.selection.head) : k.single(0);
    return ot(i2, r2.length), n2.staticFacet(Et) || (i2 = i2.asSingle()), new e23(n2, r2, i2, n2.dynamicSlots.map(() => null), (e63, t4) => t4.create(e63), null);
  }
  get tabSize() {
    return this.facet(e23.tabSize);
  }
  get lineBreak() {
    return this.facet(e23.lineSeparator) || `
`;
  }
  get readOnly() {
    return this.facet(jt);
  }
  phrase(t3, ...n2) {
    for (let n3 of this.facet(e23.phrases)) if (Object.prototype.hasOwnProperty.call(n3, t3)) {
      t3 = n3[t3];
      break;
    }
    return n2.length && (t3 = t3.replace(/\$(\$|\d*)/g, (e63, t4) => {
      if (t4 == `$`) return `$`;
      let r2 = +(t4 || 1);
      return !r2 || r2 > n2.length ? e63 : n2[r2 - 1];
    })), t3;
  }
  languageDataAt(e63, t3, n2 = -1) {
    let r2 = [];
    for (let i2 of this.facet(Tt)) for (let a2 of i2(this, t3, n2)) Object.prototype.hasOwnProperty.call(a2, e63) && r2.push(a2[e63]);
    return r2;
  }
  charCategorizer(e63) {
    let t3 = this.languageDataAt(`wordChars`, e63);
    return qt(t3.length ? t3[0] : ``);
  }
  wordAt(e63) {
    let { text: t3, from: n2, length: r2 } = this.doc.lineAt(e63), i2 = this.charCategorizer(e63), a2 = e63 - n2, o2 = e63 - n2;
    for (; a2 > 0; ) {
      let e64 = T(t3, a2, false);
      if (i2(t3.slice(e64, a2)) != Ut.Word) break;
      a2 = e64;
    }
    for (; o2 < r2; ) {
      let e64 = T(t3, o2);
      if (i2(t3.slice(o2, e64)) != Ut.Word) break;
      o2 = e64;
    }
    return a2 == o2 ? null : k.range(a2 + n2, o2 + n2);
  }
};
N.allowMultipleSelections = Et, N.tabSize = A.define({ combine: (e63) => e63.length ? e63[0] : 4 }), N.lineSeparator = Dt, N.readOnly = jt, N.phrases = A.define({ compare(e63, t3) {
  let n2 = Object.keys(e63), r2 = Object.keys(t3);
  return n2.length == r2.length && n2.every((n3) => e63[n3] == t3[n3]);
} }), N.languageData = Tt, N.changeFilter = Ot, N.transactionFilter = kt, N.transactionExtender = At, yt.reconfigure = j.define();
function Jt(e63, t3, n2 = {}) {
  let r2 = {};
  for (let t4 of e63) for (let e64 of Object.keys(t4)) {
    let i2 = t4[e64], a2 = r2[e64];
    if (a2 === void 0) r2[e64] = i2;
    else if (!(a2 === i2 || i2 === void 0)) if (Object.hasOwnProperty.call(n2, e64)) r2[e64] = n2[e64](a2, i2);
    else throw Error(`Config merge conflict for field ` + e64);
  }
  for (let e64 in t3) r2[e64] === void 0 && (r2[e64] = t3[e64]);
  return r2;
}
var Yt = class {
  eq(e63) {
    return this == e63;
  }
  range(e63, t3 = e63) {
    return Zt.create(e63, t3, this);
  }
};
Yt.prototype.startSide = Yt.prototype.endSide = 0, Yt.prototype.point = false, Yt.prototype.mapMode = E.TrackDel;
function Xt(e63, t3) {
  return e63 == t3 || e63.constructor == t3.constructor && e63.eq(t3);
}
var Zt = class e24 {
  constructor(e63, t3, n2) {
    this.from = e63, this.to = t3, this.value = n2;
  }
  static create(t3, n2, r2) {
    return new e24(t3, n2, r2);
  }
};
function Qt(e63, t3) {
  return e63.from - t3.from || e63.value.startSide - t3.value.startSide;
}
var $t = class e25 {
  constructor(e63, t3, n2, r2) {
    this.from = e63, this.to = t3, this.value = n2, this.maxPoint = r2;
  }
  get length() {
    return this.to[this.to.length - 1];
  }
  findIndex(e63, t3, n2, r2 = 0) {
    let i2 = n2 ? this.to : this.from;
    for (let a2 = r2, o2 = i2.length; ; ) {
      if (a2 == o2) return a2;
      let r3 = a2 + o2 >> 1, s2 = i2[r3] - e63 || (n2 ? this.value[r3].endSide : this.value[r3].startSide) - t3;
      if (r3 == a2) return s2 >= 0 ? a2 : o2;
      s2 >= 0 ? o2 = r3 : a2 = r3 + 1;
    }
  }
  between(e63, t3, n2, r2) {
    for (let i2 = this.findIndex(t3, -1e9, true), a2 = this.findIndex(n2, 1e9, false, i2); i2 < a2; i2++) if (r2(this.from[i2] + e63, this.to[i2] + e63, this.value[i2]) === false) return false;
  }
  map(t3, n2) {
    let r2 = [], i2 = [], a2 = [], o2 = -1, s2 = -1;
    for (let e63 = 0; e63 < this.value.length; e63++) {
      let c2 = this.value[e63], l2 = this.from[e63] + t3, u2 = this.to[e63] + t3, d2, f2;
      if (l2 == u2) {
        let e64 = n2.mapPos(l2, c2.startSide, c2.mapMode);
        if (e64 == null || (d2 = f2 = e64, c2.startSide != c2.endSide && (f2 = n2.mapPos(l2, c2.endSide), f2 < d2))) continue;
      } else if (d2 = n2.mapPos(l2, c2.startSide), f2 = n2.mapPos(u2, c2.endSide), d2 > f2 || d2 == f2 && c2.startSide > 0 && c2.endSide <= 0) continue;
      (f2 - d2 || c2.endSide - c2.startSide) < 0 || (o2 < 0 && (o2 = d2), c2.point && (s2 = Math.max(s2, f2 - d2)), r2.push(c2), i2.push(d2 - o2), a2.push(f2 - o2));
    }
    return { mapped: r2.length ? new e25(i2, a2, r2, s2) : null, pos: o2 };
  }
}, P = class e26 {
  constructor(e63, t3, n2, r2) {
    this.chunkPos = e63, this.chunk = t3, this.nextLayer = n2, this.maxPoint = r2;
  }
  static create(t3, n2, r2, i2) {
    return new e26(t3, n2, r2, i2);
  }
  get length() {
    let e63 = this.chunk.length - 1;
    return e63 < 0 ? 0 : Math.max(this.chunkEnd(e63), this.nextLayer.length);
  }
  get size() {
    if (this.isEmpty) return 0;
    let e63 = this.nextLayer.size;
    for (let t3 of this.chunk) e63 += t3.value.length;
    return e63;
  }
  chunkEnd(e63) {
    return this.chunkPos[e63] + this.chunk[e63].length;
  }
  update(t3) {
    let { add: n2 = [], sort: r2 = false, filterFrom: i2 = 0, filterTo: a2 = this.length } = t3, o2 = t3.filter;
    if (n2.length == 0 && !o2) return this;
    if (r2 && (n2 = n2.slice().sort(Qt)), this.isEmpty) return n2.length ? e26.of(n2) : this;
    let s2 = new rn(this, null, -1).goto(0), c2 = 0, l2 = [], u2 = new tn();
    for (; s2.value || c2 < n2.length; ) if (c2 < n2.length && (s2.from - n2[c2].from || s2.startSide - n2[c2].value.startSide) >= 0) {
      let e63 = n2[c2++];
      u2.addInner(e63.from, e63.to, e63.value) || l2.push(e63);
    } else s2.rangeIndex == 1 && s2.chunkIndex < this.chunk.length && (c2 == n2.length || this.chunkEnd(s2.chunkIndex) < n2[c2].from) && (!o2 || i2 > this.chunkEnd(s2.chunkIndex) || a2 < this.chunkPos[s2.chunkIndex]) && u2.addChunk(this.chunkPos[s2.chunkIndex], this.chunk[s2.chunkIndex]) ? s2.nextChunk() : ((!o2 || i2 > s2.to || a2 < s2.from || o2(s2.from, s2.to, s2.value)) && (u2.addInner(s2.from, s2.to, s2.value) || l2.push(Zt.create(s2.from, s2.to, s2.value))), s2.next());
    return u2.finishInner(this.nextLayer.isEmpty && !l2.length ? e26.empty : this.nextLayer.update({ add: l2, filter: o2, filterFrom: i2, filterTo: a2 }));
  }
  map(t3) {
    if (t3.empty || this.isEmpty) return this;
    let n2 = [], r2 = [], i2 = -1;
    for (let e63 = 0; e63 < this.chunk.length; e63++) {
      let a3 = this.chunkPos[e63], o2 = this.chunk[e63], s2 = t3.touchesRange(a3, a3 + o2.length);
      if (s2 === false) i2 = Math.max(i2, o2.maxPoint), n2.push(o2), r2.push(t3.mapPos(a3));
      else if (s2 === true) {
        let { mapped: e64, pos: s3 } = o2.map(a3, t3);
        e64 && (i2 = Math.max(i2, e64.maxPoint), n2.push(e64), r2.push(s3));
      }
    }
    let a2 = this.nextLayer.map(t3);
    return n2.length == 0 ? a2 : new e26(r2, n2, a2 || e26.empty, i2);
  }
  between(e63, t3, n2) {
    if (!this.isEmpty) {
      for (let r2 = 0; r2 < this.chunk.length; r2++) {
        let i2 = this.chunkPos[r2], a2 = this.chunk[r2];
        if (t3 >= i2 && e63 <= i2 + a2.length && a2.between(i2, e63 - i2, t3 - i2, n2) === false) return;
      }
      this.nextLayer.between(e63, t3, n2);
    }
  }
  iter(e63 = 0) {
    return an.from([this]).goto(e63);
  }
  get isEmpty() {
    return this.nextLayer == this;
  }
  static iter(e63, t3 = 0) {
    return an.from(e63).goto(t3);
  }
  static compare(e63, t3, n2, r2, i2 = -1) {
    let a2 = e63.filter((e64) => e64.maxPoint > 0 || !e64.isEmpty && e64.maxPoint >= i2), o2 = t3.filter((e64) => e64.maxPoint > 0 || !e64.isEmpty && e64.maxPoint >= i2), s2 = nn(a2, o2, n2), c2 = new sn(a2, s2, i2), l2 = new sn(o2, s2, i2);
    n2.iterGaps((e64, t4, n3) => cn(c2, e64, l2, t4, n3, r2)), n2.empty && n2.length == 0 && cn(c2, 0, l2, 0, 0, r2);
  }
  static eq(e63, t3, n2 = 0, r2) {
    r2 ?? (r2 = 999999999);
    let i2 = e63.filter((e64) => !e64.isEmpty && t3.indexOf(e64) < 0), a2 = t3.filter((t4) => !t4.isEmpty && e63.indexOf(t4) < 0);
    if (i2.length != a2.length) return false;
    if (!i2.length) return true;
    let o2 = nn(i2, a2), s2 = new sn(i2, o2, 0).goto(n2), c2 = new sn(a2, o2, 0).goto(n2);
    for (; ; ) {
      if (s2.to != c2.to || !ln(s2.active, c2.active) || s2.point && (!c2.point || !Xt(s2.point, c2.point))) return false;
      if (s2.to > r2) return true;
      s2.next(), c2.next();
    }
  }
  static spans(e63, t3, n2, r2, i2 = -1) {
    let a2 = new sn(e63, null, i2).goto(t3), o2 = t3, s2 = a2.openStart;
    for (; ; ) {
      let e64 = Math.min(a2.to, n2);
      if (a2.point) {
        let n3 = a2.activeForPoint(a2.to), i3 = a2.pointFrom < t3 ? n3.length + 1 : a2.point.startSide < 0 ? n3.length : Math.min(n3.length, s2);
        r2.point(o2, e64, a2.point, n3, i3, a2.pointRank), s2 = Math.min(a2.openEnd(e64), n3.length);
      } else e64 > o2 && (r2.span(o2, e64, a2.active, s2), s2 = a2.openEnd(e64));
      if (a2.to > n2) return s2 + (a2.point && a2.to > n2 ? 1 : 0);
      o2 = a2.to, a2.next();
    }
  }
  static of(e63, t3 = false) {
    let n2 = new tn();
    for (let r2 of e63 instanceof Zt ? [e63] : t3 ? en(e63) : e63) n2.add(r2.from, r2.to, r2.value);
    return n2.finish();
  }
  static join(t3) {
    if (!t3.length) return e26.empty;
    let n2 = t3[t3.length - 1];
    for (let r2 = t3.length - 2; r2 >= 0; r2--) for (let i2 = t3[r2]; i2 != e26.empty; i2 = i2.nextLayer) n2 = new e26(i2.chunkPos, i2.chunk, n2, Math.max(i2.maxPoint, n2.maxPoint));
    return n2;
  }
};
P.empty = new P([], [], null, -1);
function en(e63) {
  if (e63.length > 1) for (let t3 = e63[0], n2 = 1; n2 < e63.length; n2++) {
    let r2 = e63[n2];
    if (Qt(t3, r2) > 0) return e63.slice().sort(Qt);
    t3 = r2;
  }
  return e63;
}
P.empty.nextLayer = P.empty;
var tn = class e27 {
  finishChunk(e63) {
    this.chunks.push(new $t(this.from, this.to, this.value, this.maxPoint)), this.chunkPos.push(this.chunkStart), this.chunkStart = -1, this.setMaxPoint = Math.max(this.setMaxPoint, this.maxPoint), this.maxPoint = -1, e63 && (this.from = [], this.to = [], this.value = []);
  }
  constructor() {
    this.chunks = [], this.chunkPos = [], this.chunkStart = -1, this.last = null, this.lastFrom = -1e9, this.lastTo = -1e9, this.from = [], this.to = [], this.value = [], this.maxPoint = -1, this.setMaxPoint = -1, this.nextLayer = null;
  }
  add(t3, n2, r2) {
    this.addInner(t3, n2, r2) || (this.nextLayer || (this.nextLayer = new e27())).add(t3, n2, r2);
  }
  addInner(e63, t3, n2) {
    let r2 = e63 - this.lastTo || n2.startSide - this.last.endSide;
    if (r2 <= 0 && (e63 - this.lastFrom || n2.startSide - this.last.startSide) < 0) throw Error("Ranges must be added sorted by `from` position and `startSide`");
    return r2 < 0 ? false : (this.from.length == 250 && this.finishChunk(true), this.chunkStart < 0 && (this.chunkStart = e63), this.from.push(e63 - this.chunkStart), this.to.push(t3 - this.chunkStart), this.last = n2, this.lastFrom = e63, this.lastTo = t3, this.value.push(n2), n2.point && (this.maxPoint = Math.max(this.maxPoint, t3 - e63)), true);
  }
  addChunk(e63, t3) {
    if ((e63 - this.lastTo || t3.value[0].startSide - this.last.endSide) < 0) return false;
    this.from.length && this.finishChunk(true), this.setMaxPoint = Math.max(this.setMaxPoint, t3.maxPoint), this.chunks.push(t3), this.chunkPos.push(e63);
    let n2 = t3.value.length - 1;
    return this.last = t3.value[n2], this.lastFrom = t3.from[n2] + e63, this.lastTo = t3.to[n2] + e63, true;
  }
  finish() {
    return this.finishInner(P.empty);
  }
  finishInner(e63) {
    if (this.from.length && this.finishChunk(false), this.chunks.length == 0) return e63;
    let t3 = P.create(this.chunkPos, this.chunks, this.nextLayer ? this.nextLayer.finishInner(e63) : e63, this.setMaxPoint);
    return this.from = null, t3;
  }
};
function nn(e63, t3, n2) {
  let r2 = /* @__PURE__ */ new Map();
  for (let t4 of e63) for (let e64 = 0; e64 < t4.chunk.length; e64++) t4.chunk[e64].maxPoint <= 0 && r2.set(t4.chunk[e64], t4.chunkPos[e64]);
  let i2 = /* @__PURE__ */ new Set();
  for (let e64 of t3) for (let t4 = 0; t4 < e64.chunk.length; t4++) {
    let a2 = r2.get(e64.chunk[t4]);
    a2 != null && (n2 ? n2.mapPos(a2) : a2) == e64.chunkPos[t4] && !(n2 == null ? void 0 : n2.touchesRange(a2, a2 + e64.chunk[t4].length)) && i2.add(e64.chunk[t4]);
  }
  return i2;
}
var rn = class {
  constructor(e63, t3, n2, r2 = 0) {
    this.layer = e63, this.skip = t3, this.minPoint = n2, this.rank = r2;
  }
  get startSide() {
    return this.value ? this.value.startSide : 0;
  }
  get endSide() {
    return this.value ? this.value.endSide : 0;
  }
  goto(e63, t3 = -1e9) {
    return this.chunkIndex = this.rangeIndex = 0, this.gotoInner(e63, t3, false), this;
  }
  gotoInner(e63, t3, n2) {
    for (; this.chunkIndex < this.layer.chunk.length; ) {
      let t4 = this.layer.chunk[this.chunkIndex];
      if (!(this.skip && this.skip.has(t4) || this.layer.chunkEnd(this.chunkIndex) < e63 || t4.maxPoint < this.minPoint)) break;
      this.chunkIndex++, n2 = false;
    }
    if (this.chunkIndex < this.layer.chunk.length) {
      let r2 = this.layer.chunk[this.chunkIndex].findIndex(e63 - this.layer.chunkPos[this.chunkIndex], t3, true);
      (!n2 || this.rangeIndex < r2) && this.setRangeIndex(r2);
    }
    this.next();
  }
  forward(e63, t3) {
    (this.to - e63 || this.endSide - t3) < 0 && this.gotoInner(e63, t3, true);
  }
  next() {
    for (; ; ) if (this.chunkIndex == this.layer.chunk.length) {
      this.from = this.to = 1e9, this.value = null;
      break;
    } else {
      let e63 = this.layer.chunkPos[this.chunkIndex], t3 = this.layer.chunk[this.chunkIndex];
      if (this.from = e63 + t3.from[this.rangeIndex], this.to = e63 + t3.to[this.rangeIndex], this.value = t3.value[this.rangeIndex], this.setRangeIndex(this.rangeIndex + 1), this.minPoint < 0 || this.value.point && this.to - this.from >= this.minPoint) break;
    }
  }
  setRangeIndex(e63) {
    if (e63 == this.layer.chunk[this.chunkIndex].value.length) {
      if (this.chunkIndex++, this.skip) for (; this.chunkIndex < this.layer.chunk.length && this.skip.has(this.layer.chunk[this.chunkIndex]); ) this.chunkIndex++;
      this.rangeIndex = 0;
    } else this.rangeIndex = e63;
  }
  nextChunk() {
    this.chunkIndex++, this.rangeIndex = 0, this.next();
  }
  compare(e63) {
    return this.from - e63.from || this.startSide - e63.startSide || this.rank - e63.rank || this.to - e63.to || this.endSide - e63.endSide;
  }
}, an = class e28 {
  constructor(e63) {
    this.heap = e63;
  }
  static from(t3, n2 = null, r2 = -1) {
    let i2 = [];
    for (let e63 = 0; e63 < t3.length; e63++) for (let a2 = t3[e63]; !a2.isEmpty; a2 = a2.nextLayer) a2.maxPoint >= r2 && i2.push(new rn(a2, n2, r2, e63));
    return i2.length == 1 ? i2[0] : new e28(i2);
  }
  get startSide() {
    return this.value ? this.value.startSide : 0;
  }
  goto(e63, t3 = -1e9) {
    for (let n2 of this.heap) n2.goto(e63, t3);
    for (let e64 = this.heap.length >> 1; e64 >= 0; e64--) on(this.heap, e64);
    return this.next(), this;
  }
  forward(e63, t3) {
    for (let n2 of this.heap) n2.forward(e63, t3);
    for (let e64 = this.heap.length >> 1; e64 >= 0; e64--) on(this.heap, e64);
    (this.to - e63 || this.value.endSide - t3) < 0 && this.next();
  }
  next() {
    if (this.heap.length == 0) this.from = this.to = 1e9, this.value = null, this.rank = -1;
    else {
      let e63 = this.heap[0];
      this.from = e63.from, this.to = e63.to, this.value = e63.value, this.rank = e63.rank, e63.value && e63.next(), on(this.heap, 0);
    }
  }
};
function on(e63, t3) {
  for (let n2 = e63[t3]; ; ) {
    let r2 = (t3 << 1) + 1;
    if (r2 >= e63.length) break;
    let i2 = e63[r2];
    if (r2 + 1 < e63.length && i2.compare(e63[r2 + 1]) >= 0 && (i2 = e63[r2 + 1], r2++), n2.compare(i2) < 0) break;
    e63[r2] = n2, e63[t3] = i2, t3 = r2;
  }
}
var sn = class {
  constructor(e63, t3, n2) {
    this.minPoint = n2, this.active = [], this.activeTo = [], this.activeRank = [], this.minActive = -1, this.point = null, this.pointFrom = 0, this.pointRank = 0, this.to = -1e9, this.endSide = 0, this.openStart = -1, this.cursor = an.from(e63, t3, n2);
  }
  goto(e63, t3 = -1e9) {
    return this.cursor.goto(e63, t3), this.active.length = this.activeTo.length = this.activeRank.length = 0, this.minActive = -1, this.to = e63, this.endSide = t3, this.openStart = -1, this.next(), this;
  }
  forward(e63, t3) {
    for (; this.minActive > -1 && (this.activeTo[this.minActive] - e63 || this.active[this.minActive].endSide - t3) < 0; ) this.removeActive(this.minActive);
    this.cursor.forward(e63, t3);
  }
  removeActive(e63) {
    un(this.active, e63), un(this.activeTo, e63), un(this.activeRank, e63), this.minActive = fn(this.active, this.activeTo);
  }
  addActive(e63) {
    let t3 = 0, { value: n2, to: r2, rank: i2 } = this.cursor;
    for (; t3 < this.activeRank.length && (i2 - this.activeRank[t3] || r2 - this.activeTo[t3]) > 0; ) t3++;
    dn(this.active, t3, n2), dn(this.activeTo, t3, r2), dn(this.activeRank, t3, i2), e63 && dn(e63, t3, this.cursor.from), this.minActive = fn(this.active, this.activeTo);
  }
  next() {
    let e63 = this.to, t3 = this.point;
    this.point = null;
    let n2 = this.openStart < 0 ? [] : null;
    for (; ; ) {
      let r2 = this.minActive;
      if (r2 > -1 && (this.activeTo[r2] - this.cursor.from || this.active[r2].endSide - this.cursor.startSide) < 0) {
        if (this.activeTo[r2] > e63) {
          this.to = this.activeTo[r2], this.endSide = this.active[r2].endSide;
          break;
        }
        this.removeActive(r2), n2 && un(n2, r2);
      } else if (this.cursor.value) if (this.cursor.from > e63) {
        this.to = this.cursor.from, this.endSide = this.cursor.startSide;
        break;
      } else {
        let e64 = this.cursor.value;
        if (!e64.point) this.addActive(n2), this.cursor.next();
        else if (t3 && this.cursor.to == this.to && this.cursor.from < this.cursor.to) this.cursor.next();
        else {
          this.point = e64, this.pointFrom = this.cursor.from, this.pointRank = this.cursor.rank, this.to = this.cursor.to, this.endSide = e64.endSide, this.cursor.next(), this.forward(this.to, this.endSide);
          break;
        }
      }
      else {
        this.to = this.endSide = 1e9;
        break;
      }
    }
    if (n2) {
      this.openStart = 0;
      for (let t4 = n2.length - 1; t4 >= 0 && n2[t4] < e63; t4--) this.openStart++;
    }
  }
  activeForPoint(e63) {
    if (!this.active.length) return this.active;
    let t3 = [];
    for (let n2 = this.active.length - 1; n2 >= 0 && !(this.activeRank[n2] < this.pointRank); n2--) (this.activeTo[n2] > e63 || this.activeTo[n2] == e63 && this.active[n2].endSide >= this.point.endSide) && t3.push(this.active[n2]);
    return t3.reverse();
  }
  openEnd(e63) {
    let t3 = 0;
    for (let n2 = this.activeTo.length - 1; n2 >= 0 && this.activeTo[n2] > e63; n2--) t3++;
    return t3;
  }
};
function cn(e63, t3, n2, r2, i2, a2) {
  e63.goto(t3), n2.goto(r2);
  let o2 = r2 + i2, s2 = r2, c2 = r2 - t3, l2 = !!a2.boundChange;
  for (let t4 = false; ; ) {
    let r3 = e63.to + c2 - n2.to, i3 = r3 || e63.endSide - n2.endSide, u2 = i3 < 0 ? e63.to + c2 : n2.to, d2 = Math.min(u2, o2);
    if (e63.point || n2.point ? (e63.point && n2.point && Xt(e63.point, n2.point) && ln(e63.activeForPoint(e63.to), n2.activeForPoint(n2.to)) || a2.comparePoint(s2, d2, e63.point, n2.point), t4 = false) : (t4 && a2.boundChange(s2), d2 > s2 && !ln(e63.active, n2.active) && a2.compareRange(s2, d2, e63.active, n2.active), l2 && d2 < o2 && (r3 || e63.openEnd(u2) != n2.openEnd(u2)) && (t4 = true)), u2 > o2) break;
    s2 = u2, i3 <= 0 && e63.next(), i3 >= 0 && n2.next();
  }
}
function ln(e63, t3) {
  if (e63.length != t3.length) return false;
  for (let n2 = 0; n2 < e63.length; n2++) if (e63[n2] != t3[n2] && !Xt(e63[n2], t3[n2])) return false;
  return true;
}
function un(e63, t3) {
  for (let n2 = t3, r2 = e63.length - 1; n2 < r2; n2++) e63[n2] = e63[n2 + 1];
  e63.pop();
}
function dn(e63, t3, n2) {
  for (let n3 = e63.length - 1; n3 >= t3; n3--) e63[n3 + 1] = e63[n3];
  e63[t3] = n2;
}
function fn(e63, t3) {
  let n2 = -1, r2 = 1e9;
  for (let i2 = 0; i2 < t3.length; i2++) (t3[i2] - r2 || e63[i2].endSide - e63[n2].endSide) < 0 && (n2 = i2, r2 = t3[i2]);
  return n2;
}
function pn(e63, t3, n2 = e63.length) {
  let r2 = 0;
  for (let i2 = 0; i2 < n2 && i2 < e63.length; ) e63.charCodeAt(i2) == 9 ? (r2 += t3 - r2 % t3, i2++) : (r2++, i2 = T(e63, i2));
  return r2;
}
function mn(e63, t3, n2, r2) {
  for (let r3 = 0, i2 = 0; ; ) {
    if (i2 >= t3) return r3;
    if (r3 == e63.length) break;
    i2 += e63.charCodeAt(r3) == 9 ? n2 - i2 % n2 : 1, r3 = T(e63, r3);
  }
  return r2 === true ? -1 : e63.length;
}
for (var hn = `\u037C`, gn = typeof Symbol > `u` ? `__` + hn : Symbol.for(hn), _n = typeof Symbol > `u` ? `__styleSet` + Math.floor(Math.random() * 1e8) : Symbol(`styleSet`), vn = typeof globalThis < `u` ? globalThis : typeof window < `u` ? window : {}, yn = class {
  constructor(e63, t3) {
    this.rules = [];
    let { finish: n2 } = t3 || {};
    function r2(e64) {
      return /^@/.test(e64) ? [e64] : e64.split(/,\s*/);
    }
    function i2(e64, t4, a2, o2) {
      let s2 = [], c2 = /^@(\w+)\b/.exec(e64[0]), l2 = c2 && c2[1] == `keyframes`;
      if (c2 && t4 == null) return a2.push(e64[0] + `;`);
      for (let n3 in t4) {
        let o3 = t4[n3];
        if (/&/.test(n3)) i2(n3.split(/,\s*/).map((t5) => e64.map((e65) => t5.replace(/&/, e65))).reduce((e65, t5) => e65.concat(t5)), o3, a2);
        else if (o3 && typeof o3 == `object`) {
          if (!c2) throw RangeError(`The value of a property (` + n3 + `) should be a primitive value.`);
          i2(r2(n3), o3, s2, l2);
        } else o3 != null && s2.push(n3.replace(/_.*/, ``).replace(/[A-Z]/g, (e65) => `-` + e65.toLowerCase()) + `: ` + o3 + `;`);
      }
      (s2.length || l2) && a2.push((n2 && !c2 && !o2 ? e64.map(n2) : e64).join(`, `) + ` {` + s2.join(` `) + `}`);
    }
    for (let t4 in e63) i2(r2(t4), e63[t4], this.rules);
  }
  getRules() {
    return this.rules.join(`
`);
  }
  static newName() {
    let e63 = vn[gn] || 1;
    return vn[gn] = e63 + 1, hn + e63.toString(36);
  }
  static mount(e63, t3, n2) {
    let r2 = e63[_n], i2 = n2 && n2.nonce;
    r2 ? i2 && r2.setNonce(i2) : r2 = new xn(e63, i2), r2.mount(Array.isArray(t3) ? t3 : [t3], e63);
  }
}, bn = /* @__PURE__ */ new Map(), xn = class {
  constructor(e63, t3) {
    let n2 = e63.ownerDocument || e63, r2 = n2.defaultView;
    if (!e63.head && e63.adoptedStyleSheets && r2.CSSStyleSheet) {
      let t4 = bn.get(n2);
      if (t4) return e63[_n] = t4;
      this.sheet = new r2.CSSStyleSheet(), bn.set(n2, this);
    } else this.styleTag = n2.createElement(`style`), t3 && this.styleTag.setAttribute(`nonce`, t3);
    this.modules = [], e63[_n] = this;
  }
  mount(e63, t3) {
    let n2 = this.sheet, r2 = 0, i2 = 0;
    for (let t4 = 0; t4 < e63.length; t4++) {
      let a2 = e63[t4], o2 = this.modules.indexOf(a2);
      if (o2 < i2 && o2 > -1 && (this.modules.splice(o2, 1), i2--, o2 = -1), o2 == -1) {
        if (this.modules.splice(i2++, 0, a2), n2) for (let e64 = 0; e64 < a2.rules.length; e64++) n2.insertRule(a2.rules[e64], r2++);
      } else {
        for (; i2 < o2; ) r2 += this.modules[i2++].rules.length;
        r2 += a2.rules.length, i2++;
      }
    }
    if (n2) t3.adoptedStyleSheets.indexOf(this.sheet) < 0 && (t3.adoptedStyleSheets = [this.sheet, ...t3.adoptedStyleSheets]);
    else {
      let e64 = ``;
      for (let t4 = 0; t4 < this.modules.length; t4++) e64 += this.modules[t4].getRules() + `
`;
      this.styleTag.textContent = e64;
      let n3 = t3.head || t3;
      this.styleTag.parentNode != n3 && n3.insertBefore(this.styleTag, n3.firstChild);
    }
  }
  setNonce(e63) {
    this.styleTag && this.styleTag.getAttribute(`nonce`) != e63 && this.styleTag.setAttribute(`nonce`, e63);
  }
}, Sn = { 8: `Backspace`, 9: `Tab`, 10: `Enter`, 12: `NumLock`, 13: `Enter`, 16: `Shift`, 17: `Control`, 18: `Alt`, 20: `CapsLock`, 27: `Escape`, 32: ` `, 33: `PageUp`, 34: `PageDown`, 35: `End`, 36: `Home`, 37: `ArrowLeft`, 38: `ArrowUp`, 39: `ArrowRight`, 40: `ArrowDown`, 44: `PrintScreen`, 45: `Insert`, 46: `Delete`, 59: `;`, 61: `=`, 91: `Meta`, 92: `Meta`, 106: `*`, 107: `+`, 108: `,`, 109: `-`, 110: `.`, 111: `/`, 144: `NumLock`, 145: `ScrollLock`, 160: `Shift`, 161: `Shift`, 162: `Control`, 163: `Control`, 164: `Alt`, 165: `Alt`, 173: `-`, 186: `;`, 187: `=`, 188: `,`, 189: `-`, 190: `.`, 191: `/`, 192: "`", 219: `[`, 220: `\\`, 221: `]`, 222: `'` }, Cn = { 48: `)`, 49: `!`, 50: `@`, 51: `#`, 52: `$`, 53: `%`, 54: `^`, 55: `&`, 56: `*`, 57: `(`, 59: `:`, 61: `+`, 173: `_`, 186: `:`, 187: `+`, 188: `<`, 189: `_`, 190: `>`, 191: `?`, 192: `~`, 219: `{`, 220: `|`, 221: `}`, 222: `"` }, wn = typeof navigator < `u` && /Mac/.test(navigator.platform), Tn = typeof navigator < `u` && /MSIE \d|Trident\/(?:[7-9]|\d{2,})\..*rv:(\d+)/.exec(navigator.userAgent), F = 0; F < 10; F++) Sn[48 + F] = Sn[96 + F] = String(F);
for (var F = 1; F <= 24; F++) Sn[F + 111] = `F` + F;
for (var F = 65; F <= 90; F++) Sn[F] = String.fromCharCode(F + 32), Cn[F] = String.fromCharCode(F);
for (var En in Sn) Cn.hasOwnProperty(En) || (Cn[En] = Sn[En]);
function Dn(e63) {
  var t3 = !(wn && e63.metaKey && e63.shiftKey && !e63.ctrlKey && !e63.altKey || Tn && e63.shiftKey && e63.key && e63.key.length == 1 || e63.key == `Unidentified`) && e63.key || (e63.shiftKey ? Cn : Sn)[e63.keyCode] || e63.key || `Unidentified`;
  return t3 == `Esc` && (t3 = `Escape`), t3 == `Del` && (t3 = `Delete`), t3 == `Left` && (t3 = `ArrowLeft`), t3 == `Up` && (t3 = `ArrowUp`), t3 == `Right` && (t3 = `ArrowRight`), t3 == `Down` && (t3 = `ArrowDown`), t3;
}
function On() {
  var e63 = arguments[0];
  typeof e63 == `string` && (e63 = document.createElement(e63));
  var t3 = 1, n2 = arguments[1];
  if (n2 && typeof n2 == `object` && n2.nodeType == null && !Array.isArray(n2)) {
    for (var r2 in n2) if (Object.prototype.hasOwnProperty.call(n2, r2)) {
      var i2 = n2[r2];
      typeof i2 == `string` ? e63.setAttribute(r2, i2) : i2 != null && (e63[r2] = i2);
    }
    t3++;
  }
  for (; t3 < arguments.length; t3++) kn(e63, arguments[t3]);
  return e63;
}
function kn(e63, t3) {
  if (typeof t3 == `string`) e63.appendChild(document.createTextNode(t3));
  else if (t3 != null) if (t3.nodeType != null) e63.appendChild(t3);
  else if (Array.isArray(t3)) for (var n2 = 0; n2 < t3.length; n2++) kn(e63, t3[n2]);
  else throw RangeError(`Unsupported child node: ` + t3);
}
var I = typeof navigator < `u` ? navigator : { userAgent: ``, vendor: ``, platform: `` }, An = typeof document < `u` ? document : { documentElement: { style: {} } }, jn = /Edge\/(\d+)/.exec(I.userAgent), Mn = /MSIE \d/.test(I.userAgent), Nn = /Trident\/(?:[7-9]|\d{2,})\..*rv:(\d+)/.exec(I.userAgent), Pn = !!(Mn || Nn || jn), Fn = !Pn && /gecko\/(\d+)/i.test(I.userAgent), In = !Pn && /Chrome\/(\d+)/.exec(I.userAgent), Ln = `webkitFontSmoothing` in An.documentElement.style, Rn = !Pn && /Apple Computer/.test(I.vendor), zn = Rn && (/Mobile\/\w+/.test(I.userAgent) || I.maxTouchPoints > 2), L = { mac: zn || /Mac/.test(I.platform), windows: /Win/.test(I.platform), linux: /Linux|X11/.test(I.platform), ie: Pn, ie_version: Mn ? An.documentMode || 6 : Nn ? +Nn[1] : jn ? +jn[1] : 0, gecko: Fn, gecko_version: Fn ? +(/Firefox\/(\d+)/.exec(I.userAgent) || [0, 0])[1] : 0, chrome: !!In, chrome_version: In ? +In[1] : 0, ios: zn, android: /Android\b/.test(I.userAgent), webkit: Ln, webkit_version: Ln ? +(/\bAppleWebKit\/(\d+)/.exec(I.userAgent) || [0, 0])[1] : 0, safari: Rn, safari_version: Rn ? +(/\bVersion\/(\d+(\.\d+)?)/.exec(I.userAgent) || [0, 0])[1] : 0, tabSize: An.documentElement.style.tabSize == null ? `-moz-tab-size` : `tab-size` };
function Bn(e63, t3) {
  for (let n2 in e63) n2 == `class` && t3.class ? t3.class += ` ` + e63.class : n2 == `style` && t3.style ? t3.style += `;` + e63.style : t3[n2] = e63[n2];
  return t3;
}
var Vn = /* @__PURE__ */ Object.create(null);
function Hn(e63, t3, n2) {
  if (e63 == t3) return true;
  e63 || (e63 = Vn), t3 || (t3 = Vn);
  let r2 = Object.keys(e63), i2 = Object.keys(t3);
  if (r2.length - (n2 && r2.indexOf(n2) > -1 ? 1 : 0) != i2.length - (n2 && i2.indexOf(n2) > -1 ? 1 : 0)) return false;
  for (let a2 of r2) if (a2 != n2 && (i2.indexOf(a2) == -1 || e63[a2] !== t3[a2])) return false;
  return true;
}
function Un(e63, t3) {
  for (let n2 = e63.attributes.length - 1; n2 >= 0; n2--) {
    let r2 = e63.attributes[n2].name;
    t3[r2] ?? e63.removeAttribute(r2);
  }
  for (let n2 in t3) {
    let r2 = t3[n2];
    n2 == `style` ? e63.style.cssText = r2 : e63.getAttribute(n2) != r2 && e63.setAttribute(n2, r2);
  }
}
function Wn(e63, t3, n2) {
  let r2 = false;
  if (t3) for (let i2 in t3) n2 && i2 in n2 || (r2 = true, i2 == `style` ? e63.style.cssText = `` : e63.removeAttribute(i2));
  if (n2) for (let i2 in n2) t3 && t3[i2] == n2[i2] || (r2 = true, i2 == `style` ? e63.style.cssText = n2[i2] : e63.setAttribute(i2, n2[i2]));
  return r2;
}
function Gn(e63) {
  let t3 = /* @__PURE__ */ Object.create(null);
  for (let n2 = 0; n2 < e63.attributes.length; n2++) {
    let r2 = e63.attributes[n2];
    t3[r2.name] = r2.value;
  }
  return t3;
}
var Kn = class {
  eq(e63) {
    return false;
  }
  updateDOM(e63, t3) {
    return false;
  }
  compare(e63) {
    return this == e63 || this.constructor == e63.constructor && this.eq(e63);
  }
  get estimatedHeight() {
    return -1;
  }
  get lineBreaks() {
    return 0;
  }
  ignoreEvent(e63) {
    return true;
  }
  coordsAt(e63, t3, n2) {
    return null;
  }
  get isHidden() {
    return false;
  }
  get editable() {
    return false;
  }
  destroy(e63) {
  }
}, R = (function(e63) {
  return e63[e63.Text = 0] = `Text`, e63[e63.WidgetBefore = 1] = `WidgetBefore`, e63[e63.WidgetAfter = 2] = `WidgetAfter`, e63[e63.WidgetRange = 3] = `WidgetRange`, e63;
})(R || (R = {})), z = class extends Yt {
  constructor(e63, t3, n2, r2) {
    super(), this.startSide = e63, this.endSide = t3, this.widget = n2, this.spec = r2;
  }
  get heightRelevant() {
    return false;
  }
  static mark(e63) {
    return new qn(e63);
  }
  static widget(e63) {
    let t3 = Math.max(-1e4, Math.min(1e4, e63.side || 0)), n2 = !!e63.block;
    return t3 += n2 && !e63.inlineOrder ? t3 > 0 ? 3e8 : -4e8 : t3 > 0 ? 1e8 : -1e8, new Yn(e63, t3, t3, n2, e63.widget || null, false);
  }
  static replace(e63) {
    let t3 = !!e63.block, n2, r2;
    if (e63.isBlockGap) n2 = -5e8, r2 = 4e8;
    else {
      let { start: i2, end: a2 } = Xn(e63, t3);
      n2 = (i2 ? t3 ? -3e8 : -1 : 5e8) - 1, r2 = (a2 ? t3 ? 2e8 : 1 : -6e8) + 1;
    }
    return new Yn(e63, n2, r2, t3, e63.widget || null, true);
  }
  static line(e63) {
    return new Jn(e63);
  }
  static set(e63, t3 = false) {
    return P.of(e63, t3);
  }
  hasHeight() {
    return this.widget ? this.widget.estimatedHeight > -1 : false;
  }
};
z.none = P.empty;
var qn = class e29 extends z {
  constructor(e63) {
    let { start: t3, end: n2 } = Xn(e63);
    super(t3 ? -1 : 5e8, n2 ? 1 : -6e8, null, e63), this.tagName = e63.tagName || `span`, this.attrs = e63.class && e63.attributes ? Bn(e63.attributes, { class: e63.class }) : e63.class ? { class: e63.class } : e63.attributes || Vn;
  }
  eq(t3) {
    return this == t3 || t3 instanceof e29 && this.tagName == t3.tagName && Hn(this.attrs, t3.attrs);
  }
  range(e63, t3 = e63) {
    if (e63 >= t3) throw RangeError(`Mark decorations may not be empty`);
    return super.range(e63, t3);
  }
};
qn.prototype.point = false;
var Jn = class e30 extends z {
  constructor(e63) {
    super(-2e8, -2e8, null, e63);
  }
  eq(t3) {
    return t3 instanceof e30 && this.spec.class == t3.spec.class && Hn(this.spec.attributes, t3.spec.attributes);
  }
  range(e63, t3 = e63) {
    if (t3 != e63) throw RangeError(`Line decoration ranges must be zero-length`);
    return super.range(e63, t3);
  }
};
Jn.prototype.mapMode = E.TrackBefore, Jn.prototype.point = true;
var Yn = class e31 extends z {
  constructor(e63, t3, n2, r2, i2, a2) {
    super(t3, n2, i2, e63), this.block = r2, this.isReplace = a2, this.mapMode = r2 ? t3 <= 0 ? E.TrackBefore : E.TrackAfter : E.TrackDel;
  }
  get type() {
    return this.startSide == this.endSide ? this.startSide <= 0 ? R.WidgetBefore : R.WidgetAfter : R.WidgetRange;
  }
  get heightRelevant() {
    return this.block || !!this.widget && (this.widget.estimatedHeight >= 5 || this.widget.lineBreaks > 0);
  }
  eq(t3) {
    return t3 instanceof e31 && Zn(this.widget, t3.widget) && this.block == t3.block && this.startSide == t3.startSide && this.endSide == t3.endSide;
  }
  range(e63, t3 = e63) {
    if (this.isReplace && (e63 > t3 || e63 == t3 && this.startSide > 0 && this.endSide <= 0)) throw RangeError(`Invalid range for replacement decoration`);
    if (!this.isReplace && t3 != e63) throw RangeError(`Widget decorations can only have zero-length ranges`);
    return super.range(e63, t3);
  }
};
Yn.prototype.point = true;
function Xn(e63, t3 = false) {
  let { inclusiveStart: n2, inclusiveEnd: r2 } = e63;
  return n2 ?? (n2 = e63.inclusive), r2 ?? (r2 = e63.inclusive), { start: n2 ?? t3, end: r2 ?? t3 };
}
function Zn(e63, t3) {
  return e63 == t3 || !!(e63 && t3 && e63.compare(t3));
}
function Qn(e63, t3, n2, r2 = 0) {
  let i2 = n2.length - 1;
  i2 >= 0 && n2[i2] + r2 >= e63 ? n2[i2] = Math.max(n2[i2], t3) : n2.push(e63, t3);
}
var $n = class e32 extends Yt {
  constructor(e63, t3) {
    super(), this.tagName = e63, this.attributes = t3;
  }
  eq(t3) {
    return t3 == this || t3 instanceof e32 && this.tagName == t3.tagName && Hn(this.attributes, t3.attributes);
  }
  static create(t3) {
    return new e32(t3.tagName, t3.attributes || Vn);
  }
  static set(e63, t3 = false) {
    return P.of(e63, t3);
  }
};
$n.prototype.startSide = $n.prototype.endSide = -1;
function er(e63) {
  let t3;
  return t3 = e63.nodeType == 11 ? e63.getSelection ? e63 : e63.ownerDocument : e63, t3.getSelection();
}
function tr(e63, t3) {
  return t3 ? e63 == t3 || e63.contains(t3.nodeType == 1 ? t3 : t3.parentNode) : false;
}
function nr(e63, t3) {
  if (!t3.anchorNode) return false;
  try {
    return tr(e63, t3.anchorNode);
  } catch {
    return false;
  }
}
function rr(e63) {
  return e63.nodeType == 3 ? vr(e63, 0, e63.nodeValue.length).getClientRects() : e63.nodeType == 1 ? e63.getClientRects() : [];
}
function ir(e63, t3, n2, r2) {
  return n2 ? sr(e63, t3, n2, r2, -1) || sr(e63, t3, n2, r2, 1) : false;
}
function ar(e63) {
  for (var t3 = 0; ; t3++) if (e63 = e63.previousSibling, !e63) return t3;
}
function or(e63) {
  return e63.nodeType == 1 && /^(DIV|P|LI|UL|OL|BLOCKQUOTE|DD|DT|H\d|SECTION|PRE)$/.test(e63.nodeName);
}
function sr(e63, t3, n2, r2, i2) {
  for (; ; ) {
    if (e63 == n2 && t3 == r2) return true;
    if (t3 == (i2 < 0 ? 0 : cr(e63))) {
      if (e63.nodeName == `DIV`) return false;
      let n3 = e63.parentNode;
      if (!n3 || n3.nodeType != 1) return false;
      t3 = ar(e63) + (i2 < 0 ? 0 : 1), e63 = n3;
    } else if (e63.nodeType == 1) {
      if (e63 = e63.childNodes[t3 + (i2 < 0 ? -1 : 0)], e63.nodeType == 1 && e63.contentEditable == `false`) return false;
      t3 = i2 < 0 ? cr(e63) : 0;
    } else return false;
  }
}
function cr(e63) {
  return e63.nodeType == 3 ? e63.nodeValue.length : e63.childNodes.length;
}
function lr(e63, t3) {
  let n2 = t3 ? e63.left : e63.right;
  return { left: n2, right: n2, top: e63.top, bottom: e63.bottom };
}
function ur(e63) {
  let t3 = e63.visualViewport;
  return t3 ? { left: 0, right: t3.width, top: 0, bottom: t3.height } : { left: 0, right: e63.innerWidth, top: 0, bottom: e63.innerHeight };
}
function dr(e63, t3) {
  let n2 = t3.width / e63.offsetWidth, r2 = t3.height / e63.offsetHeight;
  return (n2 > 0.995 && n2 < 1.005 || !isFinite(n2) || Math.abs(t3.width - e63.offsetWidth) < 1) && (n2 = 1), (r2 > 0.995 && r2 < 1.005 || !isFinite(r2) || Math.abs(t3.height - e63.offsetHeight) < 1) && (r2 = 1), { scaleX: n2, scaleY: r2 };
}
function fr(e63, t3, n2, r2, i2, a2, o2, s2) {
  let c2 = e63.ownerDocument, l2 = c2.defaultView || window;
  for (let u2 = e63, d2 = false; u2 && !d2; ) if (u2.nodeType == 1) {
    let e64, f2 = u2 == c2.body, p2 = 1, m2 = 1;
    if (f2) e64 = ur(l2);
    else {
      if (/^(fixed|sticky)$/.test(getComputedStyle(u2).position) && (d2 = true), u2.scrollHeight <= u2.clientHeight && u2.scrollWidth <= u2.clientWidth) {
        u2 = u2.assignedSlot || u2.parentNode;
        continue;
      }
      let t4 = u2.getBoundingClientRect();
      ({ scaleX: p2, scaleY: m2 } = dr(u2, t4)), e64 = { left: t4.left, right: t4.left + u2.clientWidth * p2, top: t4.top, bottom: t4.top + u2.clientHeight * m2 };
    }
    let h2 = 0, g2 = 0;
    if (i2 == `nearest`) t3.top < e64.top ? (g2 = t3.top - (e64.top + o2), n2 > 0 && t3.bottom > e64.bottom + g2 && (g2 = t3.bottom - e64.bottom + o2)) : t3.bottom > e64.bottom && (g2 = t3.bottom - e64.bottom + o2, n2 < 0 && t3.top - g2 < e64.top && (g2 = t3.top - (e64.top + o2)));
    else {
      let r3 = t3.bottom - t3.top, a3 = e64.bottom - e64.top;
      g2 = (i2 == `center` && r3 <= a3 ? t3.top + r3 / 2 - a3 / 2 : i2 == `start` || i2 == `center` && n2 < 0 ? t3.top - o2 : t3.bottom - a3 + o2) - e64.top;
    }
    if (r2 == `nearest` ? t3.left < e64.left ? (h2 = t3.left - (e64.left + a2), n2 > 0 && t3.right > e64.right + h2 && (h2 = t3.right - e64.right + a2)) : t3.right > e64.right && (h2 = t3.right - e64.right + a2, n2 < 0 && t3.left < e64.left + h2 && (h2 = t3.left - (e64.left + a2))) : h2 = (r2 == `center` ? t3.left + (t3.right - t3.left) / 2 - (e64.right - e64.left) / 2 : r2 == `start` == s2 ? t3.left - a2 : t3.right - (e64.right - e64.left) + a2) - e64.left, h2 || g2) if (f2) l2.scrollBy(h2, g2);
    else {
      let e65 = 0, n3 = 0;
      if (g2) {
        let e66 = u2.scrollTop;
        u2.scrollTop += g2 / m2, n3 = (u2.scrollTop - e66) * m2;
      }
      if (h2) {
        let t4 = u2.scrollLeft;
        u2.scrollLeft += h2 / p2, e65 = (u2.scrollLeft - t4) * p2;
      }
      t3 = { left: t3.left - e65, top: t3.top - n3, right: t3.right - e65, bottom: t3.bottom - n3 }, e65 && Math.abs(e65 - h2) < 1 && (r2 = `nearest`), n3 && Math.abs(n3 - g2) < 1 && (i2 = `nearest`);
    }
    if (f2) break;
    (t3.top < e64.top || t3.bottom > e64.bottom || t3.left < e64.left || t3.right > e64.right) && (t3 = { left: Math.max(t3.left, e64.left), right: Math.min(t3.right, e64.right), top: Math.max(t3.top, e64.top), bottom: Math.min(t3.bottom, e64.bottom) }), u2 = u2.assignedSlot || u2.parentNode;
  } else if (u2.nodeType == 11) u2 = u2.host;
  else break;
}
function pr(e63) {
  let t3 = e63.ownerDocument, n2, r2;
  for (let i2 = e63.parentNode; i2 && !(i2 == t3.body || n2 && r2); ) if (i2.nodeType == 1) !r2 && i2.scrollHeight > i2.clientHeight && (r2 = i2), !n2 && i2.scrollWidth > i2.clientWidth && (n2 = i2), i2 = i2.assignedSlot || i2.parentNode;
  else if (i2.nodeType == 11) i2 = i2.host;
  else break;
  return { x: n2, y: r2 };
}
var mr = class {
  constructor() {
    this.anchorNode = null, this.anchorOffset = 0, this.focusNode = null, this.focusOffset = 0;
  }
  eq(e63) {
    return this.anchorNode == e63.anchorNode && this.anchorOffset == e63.anchorOffset && this.focusNode == e63.focusNode && this.focusOffset == e63.focusOffset;
  }
  setRange(e63) {
    let { anchorNode: t3, focusNode: n2 } = e63;
    this.set(t3, Math.min(e63.anchorOffset, t3 ? cr(t3) : 0), n2, Math.min(e63.focusOffset, n2 ? cr(n2) : 0));
  }
  set(e63, t3, n2, r2) {
    this.anchorNode = e63, this.anchorOffset = t3, this.focusNode = n2, this.focusOffset = r2;
  }
}, hr = null;
L.safari && L.safari_version >= 26 && (hr = false);
function gr(e63) {
  if (e63.setActive) return e63.setActive();
  if (hr) return e63.focus(hr);
  let t3 = [];
  for (let n2 = e63; n2 && (t3.push(n2, n2.scrollTop, n2.scrollLeft), n2 != n2.ownerDocument); n2 = n2.parentNode) ;
  if (e63.focus(hr == null ? { get preventScroll() {
    return hr = { preventScroll: true }, true;
  } } : void 0), !hr) {
    hr = false;
    for (let e64 = 0; e64 < t3.length; ) {
      let n2 = t3[e64++], r2 = t3[e64++], i2 = t3[e64++];
      n2.scrollTop != r2 && (n2.scrollTop = r2), n2.scrollLeft != i2 && (n2.scrollLeft = i2);
    }
  }
}
var _r;
function vr(e63, t3, n2 = t3) {
  let r2 = _r || (_r = document.createRange());
  return r2.setEnd(e63, n2), r2.setStart(e63, t3), r2;
}
function yr(e63, t3, n2, r2) {
  let i2 = { key: t3, code: t3, keyCode: n2, which: n2, cancelable: true };
  r2 && ({ altKey: i2.altKey, ctrlKey: i2.ctrlKey, shiftKey: i2.shiftKey, metaKey: i2.metaKey } = r2);
  let a2 = new KeyboardEvent(`keydown`, i2);
  a2.synthetic = true, e63.dispatchEvent(a2);
  let o2 = new KeyboardEvent(`keyup`, i2);
  return o2.synthetic = true, e63.dispatchEvent(o2), a2.defaultPrevented || o2.defaultPrevented;
}
function br(e63) {
  for (; e63; ) {
    if (e63 && (e63.nodeType == 9 || e63.nodeType == 11 && e63.host)) return e63;
    e63 = e63.assignedSlot || e63.parentNode;
  }
  return null;
}
function xr(e63, t3) {
  let n2 = t3.focusNode, r2 = t3.focusOffset;
  if (!n2 || t3.anchorNode != n2 || t3.anchorOffset != r2) return false;
  for (r2 = Math.min(r2, cr(n2)); ; ) if (r2) {
    if (n2.nodeType != 1) return false;
    let e64 = n2.childNodes[r2 - 1];
    e64.contentEditable == `false` ? r2-- : (n2 = e64, r2 = cr(n2));
  } else if (n2 == e63) return true;
  else r2 = ar(n2), n2 = n2.parentNode;
}
function Sr(e63) {
  return e63.scrollTop > Math.max(1, e63.scrollHeight - e63.clientHeight - 4);
}
function Cr(e63, t3) {
  for (let n2 = e63, r2 = t3; ; ) if (n2.nodeType == 3 && r2 > 0) return { node: n2, offset: r2 };
  else if (n2.nodeType == 1 && r2 > 0) {
    if (n2.contentEditable == `false`) return null;
    n2 = n2.childNodes[r2 - 1], r2 = cr(n2);
  } else if (n2.parentNode && !or(n2)) r2 = ar(n2), n2 = n2.parentNode;
  else return null;
}
function wr(e63, t3) {
  for (let n2 = e63, r2 = t3; ; ) if (n2.nodeType == 3 && r2 < n2.nodeValue.length) return { node: n2, offset: r2 };
  else if (n2.nodeType == 1 && r2 < n2.childNodes.length) {
    if (n2.contentEditable == `false`) return null;
    n2 = n2.childNodes[r2], r2 = 0;
  } else if (n2.parentNode && !or(n2)) r2 = ar(n2) + 1, n2 = n2.parentNode;
  else return null;
}
var Tr = class e33 {
  constructor(e63, t3, n2 = true) {
    this.node = e63, this.offset = t3, this.precise = n2;
  }
  static before(t3, n2) {
    return new e33(t3.parentNode, ar(t3), n2);
  }
  static after(t3, n2) {
    return new e33(t3.parentNode, ar(t3) + 1, n2);
  }
}, B = (function(e63) {
  return e63[e63.LTR = 0] = `LTR`, e63[e63.RTL = 1] = `RTL`, e63;
})(B || (B = {})), Er = B.LTR, Dr = B.RTL;
function Or(e63) {
  let t3 = [];
  for (let n2 = 0; n2 < e63.length; n2++) t3.push(1 << e63[n2]);
  return t3;
}
var kr = Or(`88888888888888888888888888888888888666888888787833333333337888888000000000000000000000000008888880000000000000000000000000088888888888888888888888888888888888887866668888088888663380888308888800000000000000000000000800000000000000000000000000000008`), Ar = Or(`4444448826627288999999999992222222222222222222222222222222222222222222222229999999999999999999994444444444644222822222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222999999949999999229989999223333333333`), jr = /* @__PURE__ */ Object.create(null), Mr = [];
for (let e63 of [`()`, `[]`, `{}`]) {
  let t3 = e63.charCodeAt(0), n2 = e63.charCodeAt(1);
  jr[t3] = n2, jr[n2] = -t3;
}
function Nr(e63) {
  return e63 <= 247 ? kr[e63] : 1424 <= e63 && e63 <= 1524 ? 2 : 1536 <= e63 && e63 <= 1785 ? Ar[e63 - 1536] : 1774 <= e63 && e63 <= 2220 ? 4 : 8192 <= e63 && e63 <= 8204 ? 256 : 64336 <= e63 && e63 <= 65023 ? 4 : 1;
}
var Pr = /[\u0590-\u05f4\u0600-\u06ff\u0700-\u08ac\ufb50-\ufdff]/, Fr = class {
  get dir() {
    return this.level % 2 ? Dr : Er;
  }
  constructor(e63, t3, n2) {
    this.from = e63, this.to = t3, this.level = n2;
  }
  side(e63, t3) {
    return this.dir == t3 == e63 ? this.to : this.from;
  }
  forward(e63, t3) {
    return e63 == (this.dir == t3);
  }
  static find(e63, t3, n2, r2) {
    let i2 = -1;
    for (let a2 = 0; a2 < e63.length; a2++) {
      let o2 = e63[a2];
      if (o2.from <= t3 && o2.to >= t3) {
        if (o2.level == n2) return a2;
        (i2 < 0 || (r2 == 0 ? e63[i2].level > o2.level : r2 < 0 ? o2.from < t3 : o2.to > t3)) && (i2 = a2);
      }
    }
    if (i2 < 0) throw RangeError(`Index out of range`);
    return i2;
  }
};
function Ir(e63, t3) {
  if (e63.length != t3.length) return false;
  for (let n2 = 0; n2 < e63.length; n2++) {
    let r2 = e63[n2], i2 = t3[n2];
    if (r2.from != i2.from || r2.to != i2.to || r2.direction != i2.direction || !Ir(r2.inner, i2.inner)) return false;
  }
  return true;
}
var V = [];
function Lr(e63, t3, n2, r2, i2) {
  for (let a2 = 0; a2 <= r2.length; a2++) {
    let o2 = a2 ? r2[a2 - 1].to : t3, s2 = a2 < r2.length ? r2[a2].from : n2, c2 = a2 ? 256 : i2;
    for (let t4 = o2, n3 = c2, r3 = c2; t4 < s2; t4++) {
      let i3 = Nr(e63.charCodeAt(t4));
      i3 == 512 ? i3 = n3 : i3 == 8 && r3 == 4 && (i3 = 16), V[t4] = i3 == 4 ? 2 : i3, i3 & 7 && (r3 = i3), n3 = i3;
    }
    for (let e64 = o2, t4 = c2, r3 = c2; e64 < s2; e64++) {
      let i3 = V[e64];
      if (i3 == 128) e64 < s2 - 1 && t4 == V[e64 + 1] && t4 & 24 ? i3 = V[e64] = t4 : V[e64] = 256;
      else if (i3 == 64) {
        let i4 = e64 + 1;
        for (; i4 < s2 && V[i4] == 64; ) i4++;
        let a3 = e64 && t4 == 8 || i4 < n2 && V[i4] == 8 ? r3 == 1 ? 1 : 8 : 256;
        for (let t5 = e64; t5 < i4; t5++) V[t5] = a3;
        e64 = i4 - 1;
      } else i3 == 8 && r3 == 1 && (V[e64] = 1);
      t4 = i3, i3 & 7 && (r3 = i3);
    }
  }
}
function Rr(e63, t3, n2, r2, i2) {
  let a2 = i2 == 1 ? 2 : 1;
  for (let o2 = 0, s2 = 0, c2 = 0; o2 <= r2.length; o2++) {
    let l2 = o2 ? r2[o2 - 1].to : t3, u2 = o2 < r2.length ? r2[o2].from : n2;
    for (let t4 = l2, n3, r3, o3; t4 < u2; t4++) if (r3 = jr[n3 = e63.charCodeAt(t4)]) if (r3 < 0) {
      for (let e64 = s2 - 3; e64 >= 0; e64 -= 3) if (Mr[e64 + 1] == -r3) {
        let n4 = Mr[e64 + 2], r4 = n4 & 2 ? i2 : n4 & 4 ? n4 & 1 ? a2 : i2 : 0;
        r4 && (V[t4] = V[Mr[e64]] = r4), s2 = e64;
        break;
      }
    } else if (Mr.length == 189) break;
    else Mr[s2++] = t4, Mr[s2++] = n3, Mr[s2++] = c2;
    else if ((o3 = V[t4]) == 2 || o3 == 1) {
      let e64 = o3 == i2;
      c2 = e64 ? 0 : 1;
      for (let t5 = s2 - 3; t5 >= 0; t5 -= 3) {
        let n4 = Mr[t5 + 2];
        if (n4 & 2) break;
        if (e64) Mr[t5 + 2] |= 2;
        else {
          if (n4 & 4) break;
          Mr[t5 + 2] |= 4;
        }
      }
    }
  }
}
function zr(e63, t3, n2, r2) {
  for (let i2 = 0, a2 = r2; i2 <= n2.length; i2++) {
    let o2 = i2 ? n2[i2 - 1].to : e63, s2 = i2 < n2.length ? n2[i2].from : t3;
    for (let c2 = o2; c2 < s2; ) {
      let o3 = V[c2];
      if (o3 == 256) {
        let o4 = c2 + 1;
        for (; ; ) if (o4 == s2) {
          if (i2 == n2.length) break;
          o4 = n2[i2++].to, s2 = i2 < n2.length ? n2[i2].from : t3;
        } else if (V[o4] == 256) o4++;
        else break;
        let l2 = a2 == 1, u2 = l2 == ((o4 < t3 ? V[o4] : r2) == 1) ? l2 ? 1 : 2 : r2;
        for (let t4 = o4, r3 = i2, a3 = r3 ? n2[r3 - 1].to : e63; t4 > c2; ) t4 == a3 && (t4 = n2[--r3].from, a3 = r3 ? n2[r3 - 1].to : e63), V[--t4] = u2;
        c2 = o4;
      } else a2 = o3, c2++;
    }
  }
}
function Br(e63, t3, n2, r2, i2, a2, o2) {
  let s2 = r2 % 2 ? 2 : 1;
  if (r2 % 2 == i2 % 2) for (let c2 = t3, l2 = 0; c2 < n2; ) {
    let t4 = true, u2 = false;
    if (l2 == a2.length || c2 < a2[l2].from) {
      let e64 = V[c2];
      e64 != s2 && (t4 = false, u2 = e64 == 16);
    }
    let d2 = !t4 && s2 == 1 ? [] : null, f2 = t4 ? r2 : r2 + 1, p2 = c2;
    run: for (; ; ) if (l2 < a2.length && p2 == a2[l2].from) {
      if (u2) break run;
      let m2 = a2[l2];
      if (!t4) for (let e64 = m2.to, t5 = l2 + 1; ; ) {
        if (e64 == n2) break run;
        if (t5 < a2.length && a2[t5].from == e64) e64 = a2[t5++].to;
        else if (V[e64] == s2) break run;
        else break;
      }
      l2++, d2 ? d2.push(m2) : (m2.from > c2 && o2.push(new Fr(c2, m2.from, f2)), Vr(e63, m2.direction == Er == !(f2 % 2) ? r2 : r2 + 1, i2, m2.inner, m2.from, m2.to, o2), c2 = m2.to), p2 = m2.to;
    } else if (p2 == n2 || (t4 ? V[p2] != s2 : V[p2] == s2)) break;
    else p2++;
    d2 ? Br(e63, c2, p2, r2 + 1, i2, d2, o2) : c2 < p2 && o2.push(new Fr(c2, p2, f2)), c2 = p2;
  }
  else for (let c2 = n2, l2 = a2.length; c2 > t3; ) {
    let n3 = true, u2 = false;
    if (!l2 || c2 > a2[l2 - 1].to) {
      let e64 = V[c2 - 1];
      e64 != s2 && (n3 = false, u2 = e64 == 16);
    }
    let d2 = !n3 && s2 == 1 ? [] : null, f2 = n3 ? r2 : r2 + 1, p2 = c2;
    run: for (; ; ) if (l2 && p2 == a2[l2 - 1].to) {
      if (u2) break run;
      let m2 = a2[--l2];
      if (!n3) for (let e64 = m2.from, n4 = l2; ; ) {
        if (e64 == t3) break run;
        if (n4 && a2[n4 - 1].to == e64) e64 = a2[--n4].from;
        else if (V[e64 - 1] == s2) break run;
        else break;
      }
      d2 ? d2.push(m2) : (m2.to < c2 && o2.push(new Fr(m2.to, c2, f2)), Vr(e63, m2.direction == Er == !(f2 % 2) ? r2 : r2 + 1, i2, m2.inner, m2.from, m2.to, o2), c2 = m2.from), p2 = m2.from;
    } else if (p2 == t3 || (n3 ? V[p2 - 1] != s2 : V[p2 - 1] == s2)) break;
    else p2--;
    d2 ? Br(e63, p2, c2, r2 + 1, i2, d2, o2) : p2 < c2 && o2.push(new Fr(p2, c2, f2)), c2 = p2;
  }
}
function Vr(e63, t3, n2, r2, i2, a2, o2) {
  let s2 = t3 % 2 ? 2 : 1;
  Lr(e63, i2, a2, r2, s2), Rr(e63, i2, a2, r2, s2), zr(i2, a2, r2, s2), Br(e63, i2, a2, t3, n2, r2, o2);
}
function Hr(e63, t3, n2) {
  if (!e63) return [new Fr(0, 0, t3 == Dr ? 1 : 0)];
  if (t3 == Er && !n2.length && !Pr.test(e63)) return Ur(e63.length);
  if (n2.length) for (; e63.length > V.length; ) V[V.length] = 256;
  let r2 = [], i2 = t3 == Er ? 0 : 1;
  return Vr(e63, i2, i2, n2, 0, e63.length, r2), r2;
}
function Ur(e63) {
  return [new Fr(0, e63, 0)];
}
var Wr = ``;
function Gr(e63, t3, n2, r2, i2) {
  let a2 = r2.head - e63.from, o2 = Fr.find(t3, a2, r2.bidiLevel ?? -1, r2.assoc), s2 = t3[o2], c2 = s2.side(i2, n2);
  if (a2 == c2) {
    let e64 = o2 += i2 ? 1 : -1;
    if (e64 < 0 || e64 >= t3.length) return null;
    s2 = t3[o2 = e64], a2 = s2.side(!i2, n2), c2 = s2.side(i2, n2);
  }
  let l2 = T(e63.text, a2, s2.forward(i2, n2));
  (l2 < s2.from || l2 > s2.to) && (l2 = c2), Wr = e63.text.slice(Math.min(a2, l2), Math.max(a2, l2));
  let u2 = o2 == (i2 ? t3.length - 1 : 0) ? null : t3[o2 + (i2 ? 1 : -1)];
  return u2 && l2 == c2 && u2.level + (i2 ? 0 : 1) < s2.level ? k.cursor(u2.side(!i2, n2) + e63.from, u2.forward(i2, n2) ? 1 : -1, u2.level) : k.cursor(l2 + e63.from, s2.forward(i2, n2) ? -1 : 1, s2.level);
}
function Kr(e63, t3, n2) {
  for (let r2 = t3; r2 < n2; r2++) {
    let t4 = Nr(e63.charCodeAt(r2));
    if (t4 == 1) return Er;
    if (t4 == 2 || t4 == 4) return Dr;
  }
  return Er;
}
var qr = A.define(), Jr = A.define(), Yr = A.define(), Xr = A.define(), Zr = A.define(), Qr = A.define(), $r = A.define(), ei = A.define(), ti = A.define(), ni = A.define({ combine: (e63) => e63.some((e64) => e64) }), ri = A.define({ combine: (e63) => e63.some((e64) => e64) }), ii = A.define(), ai = class e34 {
  constructor(e63, t3 = `nearest`, n2 = `nearest`, r2 = 5, i2 = 5, a2 = false) {
    this.range = e63, this.y = t3, this.x = n2, this.yMargin = r2, this.xMargin = i2, this.isSnapshot = a2;
  }
  map(t3) {
    return t3.empty ? this : new e34(this.range.map(t3), this.y, this.x, this.yMargin, this.xMargin, this.isSnapshot);
  }
  clip(t3) {
    return this.range.to <= t3.doc.length ? this : new e34(k.cursor(t3.doc.length), this.y, this.x, this.yMargin, this.xMargin, this.isSnapshot);
  }
}, oi = j.define({ map: (e63, t3) => e63.map(t3) }), si = j.define();
function H(e63, t3, n2) {
  let r2 = e63.facet(Xr);
  r2.length ? r2[0](t3) : window.onerror && window.onerror(String(t3), n2, void 0, void 0, t3) || (n2 ? console.error(n2 + `:`, t3) : console.error(t3));
}
var ci = A.define({ combine: (e63) => e63.length ? e63[0] : true }), li = 0, ui = A.define({ combine(e63) {
  return e63.filter((t3, n2) => {
    for (let r2 = 0; r2 < n2; r2++) if (e63[r2].plugin == t3.plugin) return false;
    return true;
  });
} }), di = class e35 {
  constructor(e63, t3, n2, r2, i2) {
    this.id = e63, this.create = t3, this.domEventHandlers = n2, this.domEventObservers = r2, this.baseExtensions = i2(this), this.extension = this.baseExtensions.concat(ui.of({ plugin: this, arg: void 0 }));
  }
  of(e63) {
    return this.baseExtensions.concat(ui.of({ plugin: this, arg: e63 }));
  }
  static define(t3, n2) {
    let { eventHandlers: r2, eventObservers: i2, provide: a2, decorations: o2 } = n2 || {};
    return new e35(li++, t3, r2, i2, (e63) => {
      let t4 = [];
      return o2 && t4.push(hi.of((t5) => {
        let n3 = t5.plugin(e63);
        return n3 ? o2(n3) : z.none;
      })), a2 && t4.push(a2(e63)), t4;
    });
  }
  static fromClass(t3, n2) {
    return e35.define((e63, n3) => new t3(e63, n3), n2);
  }
}, fi = class {
  constructor(e63) {
    this.spec = e63, this.mustUpdate = null, this.value = null;
  }
  get plugin() {
    return this.spec && this.spec.plugin;
  }
  update(e63) {
    if (this.value) {
      if (this.mustUpdate) {
        let e64 = this.mustUpdate;
        if (this.mustUpdate = null, this.value.update) try {
          this.value.update(e64);
        } catch (t3) {
          if (H(e64.state, t3, `CodeMirror plugin crashed`), this.value.destroy) try {
            this.value.destroy();
          } catch {
          }
          this.deactivate();
        }
      }
    } else if (this.spec) try {
      this.value = this.spec.plugin.create(e63, this.spec.arg);
    } catch (t3) {
      H(e63.state, t3, `CodeMirror plugin crashed`), this.deactivate();
    }
    return this;
  }
  destroy(e63) {
    var _a3;
    if ((_a3 = this.value) == null ? void 0 : _a3.destroy) try {
      this.value.destroy();
    } catch (t3) {
      H(e63.state, t3, `CodeMirror plugin crashed`);
    }
  }
  deactivate() {
    this.spec = this.value = null;
  }
}, pi = A.define(), mi = A.define(), hi = A.define(), gi = A.define(), _i = A.define(), vi = A.define(), yi = A.define();
function bi(e63, t3) {
  let n2 = e63.state.facet(yi);
  if (!n2.length) return n2;
  let r2 = n2.map((t4) => t4 instanceof Function ? t4(e63) : t4), i2 = [];
  return P.spans(r2, t3.from, t3.to, { point() {
  }, span(e64, n3, r3, a2) {
    let o2 = e64 - t3.from, s2 = n3 - t3.from, c2 = i2;
    for (let e65 = r3.length - 1; e65 >= 0; e65--, a2--) {
      let n4 = r3[e65].spec.bidiIsolate, i3;
      if (n4 ?? (n4 = Kr(t3.text, o2, s2)), a2 > 0 && c2.length && (i3 = c2[c2.length - 1]).to == o2 && i3.direction == n4) i3.to = s2, c2 = i3.inner;
      else {
        let e66 = { from: o2, to: s2, direction: n4, inner: [] };
        c2.push(e66), c2 = e66.inner;
      }
    }
  } }), i2;
}
var xi = A.define();
function Si(e63) {
  let t3 = 0, n2 = 0, r2 = 0, i2 = 0;
  for (let a2 of e63.state.facet(xi)) {
    let o2 = a2(e63);
    o2 && (o2.left != null && (t3 = Math.max(t3, o2.left)), o2.right != null && (n2 = Math.max(n2, o2.right)), o2.top != null && (r2 = Math.max(r2, o2.top)), o2.bottom != null && (i2 = Math.max(i2, o2.bottom)));
  }
  return { left: t3, right: n2, top: r2, bottom: i2 };
}
var Ci = A.define(), wi = class e36 {
  constructor(e63, t3, n2, r2) {
    this.fromA = e63, this.toA = t3, this.fromB = n2, this.toB = r2;
  }
  join(t3) {
    return new e36(Math.min(this.fromA, t3.fromA), Math.max(this.toA, t3.toA), Math.min(this.fromB, t3.fromB), Math.max(this.toB, t3.toB));
  }
  addToSet(e63) {
    let t3 = e63.length, n2 = this;
    for (; t3 > 0; t3--) {
      let r2 = e63[t3 - 1];
      if (!(r2.fromA > n2.toA)) {
        if (r2.toA < n2.fromA) break;
        n2 = n2.join(r2), e63.splice(t3 - 1, 1);
      }
    }
    return e63.splice(t3, 0, n2), e63;
  }
  static extendWithRanges(t3, n2) {
    if (n2.length == 0) return t3;
    let r2 = [];
    for (let i2 = 0, a2 = 0, o2 = 0; ; ) {
      let s2 = i2 < t3.length ? t3[i2].fromB : 1e9, c2 = a2 < n2.length ? n2[a2] : 1e9, l2 = Math.min(s2, c2);
      if (l2 == 1e9) break;
      let u2 = l2 + o2, d2 = l2, f2 = u2;
      for (; ; ) if (a2 < n2.length && n2[a2] <= d2) {
        let e63 = n2[a2 + 1];
        a2 += 2, d2 = Math.max(d2, e63);
        for (let e64 = i2; e64 < t3.length && t3[e64].fromB <= d2; e64++) o2 = t3[e64].toA - t3[e64].toB;
        f2 = Math.max(f2, e63 + o2);
      } else if (i2 < t3.length && t3[i2].fromB <= d2) {
        let e63 = t3[i2++];
        d2 = Math.max(d2, e63.toB), f2 = Math.max(f2, e63.toA), o2 = e63.toA - e63.toB;
      } else break;
      r2.push(new e36(u2, f2, l2, d2));
    }
    return r2;
  }
}, Ti = class e37 {
  constructor(e63, t3, n2) {
    this.view = e63, this.state = t3, this.transactions = n2, this.flags = 0, this.startState = e63.state, this.changes = D.empty(this.startState.doc.length);
    for (let e64 of n2) this.changes = this.changes.compose(e64.changes);
    let r2 = [];
    this.changes.iterChangedRanges((e64, t4, n3, i2) => r2.push(new wi(e64, t4, n3, i2))), this.changedRanges = r2;
  }
  static create(t3, n2, r2) {
    return new e37(t3, n2, r2);
  }
  get viewportChanged() {
    return (this.flags & 4) > 0;
  }
  get viewportMoved() {
    return (this.flags & 8) > 0;
  }
  get heightChanged() {
    return (this.flags & 2) > 0;
  }
  get geometryChanged() {
    return this.docChanged || (this.flags & 18) > 0;
  }
  get focusChanged() {
    return (this.flags & 1) > 0;
  }
  get docChanged() {
    return !this.changes.empty;
  }
  get selectionSet() {
    return this.transactions.some((e63) => e63.selection);
  }
  get empty() {
    return this.flags == 0 && this.transactions.length == 0;
  }
}, Ei = [], U = class {
  constructor(e63, t3, n2 = 0) {
    this.dom = e63, this.length = t3, this.flags = n2, this.parent = null, e63.cmTile = this;
  }
  get breakAfter() {
    return this.flags & 1;
  }
  get children() {
    return Ei;
  }
  isWidget() {
    return false;
  }
  get isHidden() {
    return false;
  }
  isComposite() {
    return false;
  }
  isLine() {
    return false;
  }
  isText() {
    return false;
  }
  isBlock() {
    return false;
  }
  get domAttrs() {
    return null;
  }
  sync(e63) {
    if (this.flags |= 2, this.flags & 4) {
      this.flags &= -5;
      let e64 = this.domAttrs;
      e64 && Un(this.dom, e64);
    }
  }
  toString() {
    return this.constructor.name + (this.children.length ? `(${this.children})` : ``) + (this.breakAfter ? `#` : ``);
  }
  destroy() {
    this.parent = null;
  }
  setDOM(e63) {
    this.dom = e63, e63.cmTile = this;
  }
  get posAtStart() {
    return this.parent ? this.parent.posBefore(this) : 0;
  }
  get posAtEnd() {
    return this.posAtStart + this.length;
  }
  posBefore(e63, t3 = this.posAtStart) {
    let n2 = t3;
    for (let t4 of this.children) {
      if (t4 == e63) return n2;
      n2 += t4.length + t4.breakAfter;
    }
    throw RangeError(`Invalid child in posBefore`);
  }
  posAfter(e63) {
    return this.posBefore(e63) + e63.length;
  }
  covers(e63) {
    return true;
  }
  coordsIn(e63, t3) {
    return null;
  }
  domPosFor(e63, t3) {
    let n2 = ar(this.dom), r2 = this.length ? e63 > 0 : t3 > 0;
    return new Tr(this.parent.dom, n2 + (r2 ? 1 : 0), e63 == 0 || e63 == this.length);
  }
  markDirty(e63) {
    this.flags &= -3, e63 && (this.flags |= 4), this.parent && this.parent.flags & 2 && this.parent.markDirty(false);
  }
  get overrideDOMText() {
    return null;
  }
  get root() {
    for (let e63 = this; e63; e63 = e63.parent) if (e63 instanceof ki) return e63;
    return null;
  }
  static get(e63) {
    return e63.cmTile;
  }
}, Di = class extends U {
  constructor(e63) {
    super(e63, 0), this._children = [];
  }
  isComposite() {
    return true;
  }
  get children() {
    return this._children;
  }
  get lastChild() {
    return this.children.length ? this.children[this.children.length - 1] : null;
  }
  append(e63) {
    this.children.push(e63), e63.parent = this;
  }
  sync(e63) {
    if (this.flags & 2) return;
    super.sync(e63);
    let t3 = this.dom, n2 = null, r2, i2 = (e63 == null ? void 0 : e63.node) == t3 ? e63 : null, a2 = 0;
    for (let o2 of this.children) {
      if (o2.sync(e63), a2 += o2.length + o2.breakAfter, r2 = n2 ? n2.nextSibling : t3.firstChild, i2 && r2 != o2.dom && (i2.written = true), o2.dom.parentNode == t3) for (; r2 && r2 != o2.dom; ) r2 = Oi(r2);
      else t3.insertBefore(o2.dom, r2);
      n2 = o2.dom;
    }
    for (r2 = n2 ? n2.nextSibling : t3.firstChild, i2 && r2 && (i2.written = true); r2; ) r2 = Oi(r2);
    this.length = a2;
  }
};
function Oi(e63) {
  let t3 = e63.nextSibling;
  return e63.parentNode.removeChild(e63), t3;
}
var ki = class extends Di {
  constructor(e63, t3) {
    super(t3), this.view = e63;
  }
  owns(e63) {
    for (; e63; e63 = e63.parent) if (e63 == this) return true;
    return false;
  }
  isBlock() {
    return true;
  }
  nearest(e63) {
    for (; ; ) {
      if (!e63) return null;
      let t3 = U.get(e63);
      if (t3 && this.owns(t3)) return t3;
      e63 = e63.parentNode;
    }
  }
  blockTiles(e63) {
    for (let t3 = [], n2 = this, r2 = 0, i2 = 0; ; ) if (r2 == n2.children.length) {
      if (!t3.length) return;
      n2 = n2.parent, n2.breakAfter && i2++, r2 = t3.pop();
    } else {
      let a2 = n2.children[r2++];
      if (a2 instanceof Ai) t3.push(r2), n2 = a2, r2 = 0;
      else {
        let t4 = i2 + a2.length, n3 = e63(a2, i2);
        if (n3 !== void 0) return n3;
        i2 = t4 + a2.breakAfter;
      }
    }
  }
  resolveBlock(e63, t3) {
    let n2, r2 = -1, i2, a2 = -1;
    if (this.blockTiles((o2, s2) => {
      let c2 = s2 + o2.length;
      if (e63 >= s2 && e63 <= c2) {
        if (o2.isWidget() && t3 >= -1 && t3 <= 1) {
          if (o2.flags & 32) return true;
          o2.flags & 16 && (n2 = void 0);
        }
        (s2 < e63 || e63 == c2 && (t3 < -1 ? o2.length : o2.covers(1))) && (!n2 || !o2.isWidget() && n2.isWidget()) && (n2 = o2, r2 = e63 - s2), (c2 > e63 || e63 == s2 && (t3 > 1 ? o2.length : o2.covers(-1))) && (!i2 || !o2.isWidget() && i2.isWidget()) && (i2 = o2, a2 = e63 - s2);
      }
    }), !n2 && !i2) throw Error(`No tile at position ` + e63);
    return n2 && t3 < 0 || !i2 ? { tile: n2, offset: r2 } : { tile: i2, offset: a2 };
  }
}, Ai = class e38 extends Di {
  constructor(e63, t3) {
    super(e63), this.wrapper = t3;
  }
  isBlock() {
    return true;
  }
  covers(e63) {
    return this.children.length ? e63 < 0 ? this.children[0].covers(-1) : this.lastChild.covers(1) : false;
  }
  get domAttrs() {
    return this.wrapper.attributes;
  }
  static of(t3, n2) {
    let r2 = new e38(n2 || document.createElement(t3.tagName), t3);
    return n2 || (r2.flags |= 4), r2;
  }
}, ji = class e39 extends Di {
  constructor(e63, t3) {
    super(e63), this.attrs = t3;
  }
  isLine() {
    return true;
  }
  static start(t3, n2, r2) {
    let i2 = new e39(n2 || document.createElement(`div`), t3);
    return (!n2 || !r2) && (i2.flags |= 4), i2;
  }
  get domAttrs() {
    return this.attrs;
  }
  resolveInline(e63, t3, n2) {
    let r2 = null, i2 = -1, a2 = null, o2 = -1;
    function s2(e64, c3) {
      for (let l2 = 0, u2 = 0; l2 < e64.children.length && u2 <= c3; l2++) {
        let d2 = e64.children[l2], f2 = u2 + d2.length;
        f2 >= c3 && (d2.isComposite() ? s2(d2, c3 - u2) : (!a2 || a2.isHidden && (t3 > 0 || n2 && Ni(a2, d2))) && (f2 > c3 || d2.flags & 32) ? (a2 = d2, o2 = c3 - u2) : (u2 < c3 || d2.flags & 16 && !d2.isHidden) && (r2 = d2, i2 = c3 - u2)), u2 = f2;
      }
    }
    s2(this, e63);
    let c2 = (t3 < 0 ? r2 : a2) || r2 || a2;
    return c2 ? { tile: c2, offset: c2 == r2 ? i2 : o2 } : null;
  }
  coordsIn(e63, t3) {
    let n2 = this.resolveInline(e63, t3, true);
    return n2 ? n2.tile.coordsIn(Math.max(0, n2.offset), t3) : Mi(this);
  }
  domIn(e63, t3) {
    let n2 = this.resolveInline(e63, t3);
    if (n2) {
      let { tile: e64, offset: r2 } = n2;
      if (this.dom.contains(e64.dom)) return e64.isText() ? new Tr(e64.dom, Math.min(e64.dom.nodeValue.length, r2)) : e64.domPosFor(r2, e64.flags & 16 ? 1 : e64.flags & 32 ? -1 : t3);
      let i2 = n2.tile.parent, a2 = false;
      for (let e65 of i2.children) {
        if (a2) return new Tr(e65.dom, 0);
        e65 == n2.tile && (a2 = true);
      }
    }
    return new Tr(this.dom, 0);
  }
};
function Mi(e63) {
  let t3 = e63.dom.lastChild;
  if (!t3) return e63.dom.getBoundingClientRect();
  let n2 = rr(t3);
  return n2[n2.length - 1] || null;
}
function Ni(e63, t3) {
  let n2 = e63.coordsIn(0, 1), r2 = t3.coordsIn(0, 1);
  return n2 && r2 && r2.top < n2.bottom;
}
var W = class e40 extends Di {
  constructor(e63, t3) {
    super(e63), this.mark = t3;
  }
  get domAttrs() {
    return this.mark.attrs;
  }
  static of(t3, n2) {
    let r2 = new e40(n2 || document.createElement(t3.tagName), t3);
    return n2 || (r2.flags |= 4), r2;
  }
}, Pi = class e41 extends U {
  constructor(e63, t3) {
    super(e63, t3.length), this.text = t3;
  }
  sync(e63) {
    this.flags & 2 || (super.sync(e63), this.dom.nodeValue != this.text && (e63 && e63.node == this.dom && (e63.written = true), this.dom.nodeValue = this.text));
  }
  isText() {
    return true;
  }
  toString() {
    return JSON.stringify(this.text);
  }
  coordsIn(e63, t3) {
    let n2 = this.dom.nodeValue.length;
    e63 > n2 && (e63 = n2);
    let r2 = e63, i2 = e63, a2 = 0;
    e63 == 0 && t3 < 0 || e63 == n2 && t3 >= 0 ? L.chrome || L.gecko || (e63 ? (r2--, a2 = 1) : i2 < n2 && (i2++, a2 = -1)) : t3 < 0 ? r2-- : i2 < n2 && i2++;
    let o2 = vr(this.dom, r2, i2).getClientRects();
    if (!o2.length) return null;
    let s2 = o2[(a2 ? a2 < 0 : t3 >= 0) ? 0 : o2.length - 1];
    return L.safari && !a2 && s2.width == 0 && (s2 = Array.prototype.find.call(o2, (e64) => e64.width) || s2), a2 ? lr(s2, a2 < 0) : s2 || null;
  }
  static of(t3, n2) {
    let r2 = new e41(n2 || document.createTextNode(t3), t3);
    return n2 || (r2.flags |= 2), r2;
  }
}, Fi = class e42 extends U {
  constructor(e63, t3, n2, r2) {
    super(e63, t3, r2), this.widget = n2;
  }
  isWidget() {
    return true;
  }
  get isHidden() {
    return this.widget.isHidden;
  }
  covers(e63) {
    return this.flags & 48 ? false : (this.flags & (e63 < 0 ? 64 : 128)) > 0;
  }
  coordsIn(e63, t3) {
    return this.coordsInWidget(e63, t3, false);
  }
  coordsInWidget(e63, t3, n2) {
    let r2 = this.widget.coordsAt(this.dom, e63, t3);
    if (r2) return r2;
    if (n2) return lr(this.dom.getBoundingClientRect(), this.length ? e63 == 0 : t3 <= 0);
    {
      let t4 = this.dom.getClientRects(), n3 = null;
      if (!t4.length) return null;
      let r3 = this.flags & 16 ? true : this.flags & 32 ? false : e63 > 0;
      for (let i2 = r3 ? t4.length - 1 : 0; n3 = t4[i2], !(e63 > 0 ? i2 == 0 : i2 == t4.length - 1 || n3.top < n3.bottom); i2 += r3 ? -1 : 1) ;
      return lr(n3, !r3);
    }
  }
  get overrideDOMText() {
    if (!this.length) return C.empty;
    let { root: e63 } = this;
    if (!e63) return C.empty;
    let t3 = this.posAtStart;
    return e63.view.state.doc.slice(t3, t3 + this.length);
  }
  destroy() {
    super.destroy(), this.widget.destroy(this.dom);
  }
  static of(t3, n2, r2, i2, a2) {
    return a2 || (a2 = t3.toDOM(n2), t3.editable || (a2.contentEditable = `false`)), new e42(a2, r2, t3, i2);
  }
}, Ii = class extends U {
  constructor(e63) {
    let t3 = document.createElement(`img`);
    t3.className = `cm-widgetBuffer`, t3.setAttribute(`aria-hidden`, `true`), super(t3, 0, e63);
  }
  get isHidden() {
    return true;
  }
  get overrideDOMText() {
    return C.empty;
  }
  coordsIn(e63) {
    return this.dom.getBoundingClientRect();
  }
}, Li = class {
  constructor(e63) {
    this.index = 0, this.beforeBreak = false, this.parents = [], this.tile = e63;
  }
  advance(e63, t3, n2) {
    let { tile: r2, index: i2, beforeBreak: a2, parents: o2 } = this;
    for (; e63 || t3 > 0; ) if (r2.isComposite()) if (a2) {
      if (!e63) break;
      n2 && n2.break(), e63--, a2 = false;
    } else if (i2 == r2.children.length) {
      if (!e63 && !o2.length) break;
      n2 && n2.leave(r2), a2 = !!r2.breakAfter, { tile: r2, index: i2 } = o2.pop(), i2++;
    } else {
      let s2 = r2.children[i2], c2 = s2.breakAfter;
      (t3 > 0 ? s2.length <= e63 : s2.length < e63) && (!n2 || n2.skip(s2, 0, s2.length) !== false || !s2.isComposite) ? (a2 = !!c2, i2++, e63 -= s2.length) : (o2.push({ tile: r2, index: i2 }), r2 = s2, i2 = 0, n2 && s2.isComposite() && n2.enter(s2));
    }
    else if (i2 == r2.length) a2 = !!r2.breakAfter, { tile: r2, index: i2 } = o2.pop(), i2++;
    else if (e63) {
      let t4 = Math.min(e63, r2.length - i2);
      n2 && n2.skip(r2, i2, i2 + t4), e63 -= t4, i2 += t4;
    } else break;
    return this.tile = r2, this.index = i2, this.beforeBreak = a2, this;
  }
  get root() {
    return this.parents.length ? this.parents[0].tile : this.tile;
  }
}, Ri = class {
  constructor(e63, t3, n2, r2) {
    this.from = e63, this.to = t3, this.wrapper = n2, this.rank = r2;
  }
}, zi = class {
  constructor(e63, t3, n2) {
    this.cache = e63, this.root = t3, this.blockWrappers = n2, this.curLine = null, this.lastBlock = null, this.afterWidget = null, this.pos = 0, this.wrappers = [], this.wrapperPos = 0;
  }
  addText(e63, t3, n2, r2) {
    var _a3;
    this.flushBuffer();
    let i2 = this.ensureMarks(t3, n2), a2 = i2.lastChild;
    if (a2 && a2.isText() && !(a2.flags & 8)) {
      this.cache.reused.set(a2, 2);
      let t4 = i2.children[i2.children.length - 1] = new Pi(a2.dom, a2.text + e63);
      t4.parent = i2;
    } else i2.append(r2 || Pi.of(e63, (_a3 = this.cache.find(Pi)) == null ? void 0 : _a3.dom));
    this.pos += e63.length, this.afterWidget = null;
  }
  addComposition(e63, t3) {
    let n2 = this.curLine;
    n2.dom != t3.line.dom && (n2.setDOM(this.cache.reused.has(t3.line) ? Yi(t3.line.dom) : t3.line.dom), this.cache.reused.set(t3.line, 2));
    let r2 = n2;
    for (let e64 = t3.marks.length - 1; e64 >= 0; e64--) {
      let n3 = t3.marks[e64], i3 = r2.lastChild;
      if (i3 instanceof W && i3.mark.eq(n3.mark)) i3.dom != n3.dom && i3.setDOM(Yi(n3.dom)), r2 = i3;
      else {
        if (this.cache.reused.get(n3)) {
          let e66 = U.get(n3.dom);
          e66 && e66.setDOM(Yi(n3.dom));
        }
        let e65 = W.of(n3.mark, n3.dom);
        r2.append(e65), r2 = e65;
      }
      this.cache.reused.set(n3, 2);
    }
    let i2 = U.get(e63.text);
    i2 && this.cache.reused.set(i2, 2);
    let a2 = new Pi(e63.text, e63.text.nodeValue);
    a2.flags |= 8, r2.append(a2);
  }
  addInlineWidget(e63, t3, n2) {
    let r2 = this.afterWidget && e63.flags & 48 && (this.afterWidget.flags & 48) == (e63.flags & 48);
    r2 || this.flushBuffer();
    let i2 = this.ensureMarks(t3, n2);
    !r2 && !(e63.flags & 16) && i2.append(this.getBuffer(1)), i2.append(e63), this.pos += e63.length, this.afterWidget = e63;
  }
  addMark(e63, t3, n2) {
    this.flushBuffer(), this.ensureMarks(t3, n2).append(e63), this.pos += e63.length, this.afterWidget = null;
  }
  addBlockWidget(e63) {
    this.getBlockPos().append(e63), this.pos += e63.length, this.lastBlock = e63, this.endLine();
  }
  continueWidget(e63) {
    let t3 = this.afterWidget || this.lastBlock;
    t3.length += e63, this.pos += e63;
  }
  addLineStart(e63, t3) {
    var _a3;
    e63 || (e63 = Ki);
    let n2 = ji.start(e63, t3 || ((_a3 = this.cache.find(ji)) == null ? void 0 : _a3.dom), !!t3);
    this.getBlockPos().append(this.lastBlock = this.curLine = n2);
  }
  addLine(e63) {
    this.getBlockPos().append(e63), this.pos += e63.length, this.lastBlock = e63, this.endLine();
  }
  addBreak() {
    this.lastBlock.flags |= 1, this.endLine(), this.pos++;
  }
  addLineStartIfNotCovered(e63) {
    this.blockPosCovered() || this.addLineStart(e63);
  }
  ensureLine(e63) {
    this.curLine || this.addLineStart(e63);
  }
  ensureMarks(e63, t3) {
    var _a3;
    let n2 = this.curLine;
    for (let r2 = e63.length - 1; r2 >= 0; r2--) {
      let i2 = e63[r2], a2;
      if (t3 > 0 && (a2 = n2.lastChild) && a2 instanceof W && a2.mark.eq(i2)) n2 = a2, t3--;
      else {
        let e64 = W.of(i2, (_a3 = this.cache.find(W, (e65) => e65.mark.eq(i2))) == null ? void 0 : _a3.dom);
        n2.append(e64), n2 = e64, t3 = 0;
      }
    }
    return n2;
  }
  endLine() {
    if (this.curLine) {
      this.flushBuffer();
      let e63 = this.curLine.lastChild;
      (!e63 || !Wi(this.curLine, false) || e63.dom.nodeName != `BR` && e63.isWidget() && !(L.ios && Wi(this.curLine, true))) && this.curLine.append(this.cache.findWidget(Zi, 0, 32) || new Fi(Zi.toDOM(), 0, Zi, 32)), this.curLine = this.afterWidget = null;
    }
  }
  updateBlockWrappers() {
    this.wrapperPos > this.pos + 1e4 && (this.blockWrappers.goto(this.pos), this.wrappers.length = 0);
    for (let e63 = this.wrappers.length - 1; e63 >= 0; e63--) this.wrappers[e63].to < this.pos && this.wrappers.splice(e63, 1);
    for (let e63 = this.blockWrappers; e63.value && e63.from <= this.pos; e63.next()) if (e63.to >= this.pos) {
      let t3 = new Ri(e63.from, e63.to, e63.value, e63.rank), n2 = this.wrappers.length;
      for (; n2 > 0 && (this.wrappers[n2 - 1].rank - t3.rank || this.wrappers[n2 - 1].to - t3.to) < 0; ) n2--;
      this.wrappers.splice(n2, 0, t3);
    }
    this.wrapperPos = this.pos;
  }
  getBlockPos() {
    var _a3;
    this.updateBlockWrappers();
    let e63 = this.root;
    for (let t3 of this.wrappers) {
      let n2 = e63.lastChild;
      if (t3.from < this.pos && n2 instanceof Ai && n2.wrapper.eq(t3.wrapper)) e63 = n2;
      else {
        let n3 = Ai.of(t3.wrapper, (_a3 = this.cache.find(Ai, (e64) => e64.wrapper.eq(t3.wrapper))) == null ? void 0 : _a3.dom);
        e63.append(n3), e63 = n3;
      }
    }
    return e63;
  }
  blockPosCovered() {
    let e63 = this.lastBlock;
    return e63 != null && !e63.breakAfter && (!e63.isWidget() || (e63.flags & 160) > 0);
  }
  getBuffer(e63) {
    let t3 = 2 | (e63 < 0 ? 16 : 32), n2 = this.cache.find(Ii, void 0, 1);
    return n2 && (n2.flags = t3), n2 || new Ii(t3);
  }
  flushBuffer() {
    this.afterWidget && !(this.afterWidget.flags & 32) && (this.afterWidget.parent.append(this.getBuffer(-1)), this.afterWidget = null);
  }
}, Bi = class {
  constructor(e63) {
    this.skipCount = 0, this.text = ``, this.textOff = 0, this.cursor = e63.iter();
  }
  skip(e63) {
    this.textOff + e63 <= this.text.length ? this.textOff += e63 : (this.skipCount += e63 - (this.text.length - this.textOff), this.text = ``, this.textOff = 0);
  }
  next(e63) {
    if (this.textOff == this.text.length) {
      let { value: t4, lineBreak: n3, done: r2 } = this.cursor.next(this.skipCount);
      if (this.skipCount = 0, r2) throw Error(`Ran out of text content when drawing inline views`);
      this.text = t4;
      let i2 = this.textOff = Math.min(e63, t4.length);
      return n3 ? null : t4.slice(0, i2);
    }
    let t3 = Math.min(this.text.length, this.textOff + e63), n2 = this.text.slice(this.textOff, t3);
    return this.textOff = t3, n2;
  }
}, Vi = [Fi, ji, Pi, W, Ii, Ai, ki];
for (let e63 = 0; e63 < Vi.length; e63++) Vi[e63].bucket = e63;
var Hi = class {
  constructor(e63) {
    this.view = e63, this.buckets = Vi.map(() => []), this.index = Vi.map(() => 0), this.reused = /* @__PURE__ */ new Map();
  }
  add(e63) {
    e63.demo && console.log(`Add widget to cache`);
    let t3 = e63.constructor.bucket, n2 = this.buckets[t3];
    n2.length < 6 ? n2.push(e63) : n2[this.index[t3] = (this.index[t3] + 1) % 6] = e63;
  }
  find(e63, t3, n2 = 2) {
    let r2 = e63.bucket, i2 = this.buckets[r2], a2 = this.index[r2];
    for (let e64 = i2.length - 1; e64 >= 0; e64--) {
      let o2 = (e64 + a2) % i2.length, s2 = i2[o2];
      if ((!t3 || t3(s2)) && !this.reused.has(s2)) return i2.splice(o2, 1), o2 < a2 && this.index[r2]--, this.reused.set(s2, n2), s2;
    }
    return null;
  }
  findWidget(e63, t3, n2) {
    let r2 = this.buckets[0];
    if (e63.demo && console.log(`looking for widget`, e63, `in cache`, r2.slice()), r2.length) for (let i2 = 0, a2 = 0; ; i2++) {
      if (i2 == r2.length) {
        if (a2) return null;
        a2 = 1, i2 = 0;
      }
      let o2 = r2[i2];
      if (!this.reused.has(o2) && (a2 == 0 ? o2.widget.compare(e63) : o2.widget.constructor == e63.constructor && e63.updateDOM(o2.dom, this.view))) return r2.splice(i2, 1), i2 < this.index[0] && this.index[0]--, o2.length == t3 && (o2.flags & 497) == n2 ? (this.reused.set(o2, 1), o2) : (this.reused.set(o2, 2), new Fi(o2.dom, t3, e63, o2.flags & -498 | n2));
    }
  }
  reuse(e63) {
    return this.reused.set(e63, 1), e63;
  }
  maybeReuse(e63, t3 = 2) {
    if (!this.reused.has(e63)) return this.reused.set(e63, t3), e63.dom;
  }
  clear() {
    for (let e63 = 0; e63 < this.buckets.length; e63++) this.buckets[e63].length = this.index[e63] = 0;
  }
}, Ui = class {
  constructor(e63, t3, n2, r2, i2) {
    this.view = e63, this.decorations = r2, this.disallowBlockEffectsFor = i2, this.openWidget = false, this.openMarks = 0, this.cache = new Hi(e63), this.text = new Bi(e63.state.doc), this.builder = new zi(this.cache, new ki(e63, e63.contentDOM), P.iter(n2)), this.cache.reused.set(t3, 2), this.old = new Li(t3), this.reuseWalker = { skip: (e64, t4, n3) => {
      if (this.cache.add(e64), e64.isComposite()) return false;
    }, enter: (e64) => this.cache.add(e64), leave: () => {
    }, break: () => {
    } };
  }
  run(e63, t3) {
    let n2 = t3 && this.getCompositionContext(t3.text);
    for (let r2 = 0, i2 = 0, a2 = 0; ; ) {
      let o2 = a2 < e63.length ? e63[a2++] : null, s2 = o2 ? o2.fromA : this.old.root.length;
      if (s2 > r2) {
        let e64 = s2 - r2;
        this.preserve(e64, !a2, !o2), r2 = s2, i2 += e64;
      }
      if (!o2) break;
      t3 && o2.fromA <= t3.range.fromA && o2.toA >= t3.range.toA ? (this.forward(o2.fromA, t3.range.fromA), this.emit(i2, t3.range.fromB), this.cache.clear(), this.builder.addComposition(t3, n2), this.text.skip(t3.range.toB - t3.range.fromB), this.forward(t3.range.fromA, o2.toA), this.emit(t3.range.toB, o2.toB)) : (this.forward(o2.fromA, o2.toA), this.emit(i2, o2.toB)), i2 = o2.toB, r2 = o2.toA;
    }
    return this.builder.curLine && this.builder.endLine(), this.builder.root;
  }
  preserve(e63, t3, n2) {
    let r2 = Ji(this.old), i2 = this.openMarks;
    this.old.advance(e63, n2 ? 1 : -1, { skip: (e64, t4, n3) => {
      if (e64.isWidget()) if (this.openWidget) this.builder.continueWidget(n3 - t4);
      else {
        let a2 = n3 > 0 || t4 < e64.length ? Fi.of(e64.widget, this.view, n3 - t4, e64.flags & 496, this.cache.maybeReuse(e64)) : this.cache.reuse(e64);
        a2.flags & 256 ? (a2.flags &= -2, this.builder.addBlockWidget(a2)) : (this.builder.ensureLine(null), this.builder.addInlineWidget(a2, r2, i2), i2 = r2.length);
      }
      else if (e64.isText()) this.builder.ensureLine(null), !t4 && n3 == e64.length ? this.builder.addText(e64.text, r2, i2, this.cache.reuse(e64)) : (this.cache.add(e64), this.builder.addText(e64.text.slice(t4, n3), r2, i2)), i2 = r2.length;
      else if (e64.isLine()) e64.flags &= -2, this.cache.reused.set(e64, 1), this.builder.addLine(e64);
      else if (e64 instanceof Ii) this.cache.add(e64);
      else if (e64 instanceof W) this.builder.ensureLine(null), this.builder.addMark(e64, r2, i2), this.cache.reused.set(e64, 1), i2 = r2.length;
      else return false;
      this.openWidget = false;
    }, enter: (e64) => {
      e64.isLine() ? this.builder.addLineStart(e64.attrs, this.cache.maybeReuse(e64)) : (this.cache.add(e64), e64 instanceof W && r2.unshift(e64.mark)), this.openWidget = false;
    }, leave: (e64) => {
      e64.isLine() ? r2.length && (r2.length = i2 = 0) : e64 instanceof W && (r2.shift(), i2 = Math.min(i2, r2.length));
    }, break: () => {
      this.builder.addBreak(), this.openWidget = false;
    } }), this.text.skip(e63);
  }
  emit(e63, t3) {
    let n2 = null, r2 = this.builder, i2 = 0, a2 = P.spans(this.decorations, e63, t3, { point: (e64, t4, a3, o2, s2, c2) => {
      if (a3 instanceof Yn) {
        if (this.disallowBlockEffectsFor[c2]) {
          if (a3.block) throw RangeError(`Block decorations may not be specified via plugins`);
          if (t4 > this.view.state.doc.lineAt(e64).to) throw RangeError(`Decorations that replace line breaks may not be specified via plugins`);
        }
        if (i2 = o2.length, s2 > o2.length) r2.continueWidget(t4 - e64);
        else {
          let i3 = a3.widget || (a3.block ? Xi.block : Xi.inline), c3 = Gi(a3), l2 = this.cache.findWidget(i3, t4 - e64, c3) || Fi.of(i3, this.view, t4 - e64, c3);
          a3.block ? (a3.startSide > 0 && r2.addLineStartIfNotCovered(n2), r2.addBlockWidget(l2)) : (r2.ensureLine(n2), r2.addInlineWidget(l2, o2, s2));
        }
        n2 = null;
      } else n2 = qi(n2, a3);
      t4 > e64 && this.text.skip(t4 - e64);
    }, span: (e64, t4, i3, a3) => {
      for (let o2 = e64; o2 < t4; ) {
        let e65 = this.text.next(Math.min(512, t4 - o2));
        e65 == null ? (r2.addLineStartIfNotCovered(n2), r2.addBreak(), o2++) : (r2.ensureLine(n2), r2.addText(e65, i3, a3), o2 += e65.length), n2 = null;
      }
    } });
    r2.addLineStartIfNotCovered(n2), this.openWidget = a2 > i2, this.openMarks = a2;
  }
  forward(e63, t3) {
    t3 - e63 <= 10 ? this.old.advance(t3 - e63, 1, this.reuseWalker) : (this.old.advance(5, -1, this.reuseWalker), this.old.advance(t3 - e63 - 10, -1), this.old.advance(5, 1, this.reuseWalker));
  }
  getCompositionContext(e63) {
    let t3 = [], n2 = null;
    for (let r2 = e63.parentNode; ; r2 = r2.parentNode) {
      let e64 = U.get(r2);
      if (r2 == this.view.contentDOM) break;
      e64 instanceof W ? t3.push(e64) : (e64 == null ? void 0 : e64.isLine()) ? n2 = e64 : r2.nodeName == `DIV` && !n2 && r2 != this.view.contentDOM ? n2 = new ji(r2, Ki) : t3.push(W.of(new qn({ tagName: r2.nodeName.toLowerCase(), attributes: Gn(r2) }), r2));
    }
    return { line: n2, marks: t3 };
  }
};
function Wi(e63, t3) {
  let n2 = (e64) => {
    for (let r2 of e64.children) if ((t3 ? r2.isText() : r2.length) || n2(r2)) return true;
    return false;
  };
  return n2(e63);
}
function Gi(e63) {
  let t3 = e63.isReplace ? (e63.startSide < 0 ? 64 : 0) | (e63.endSide > 0 ? 128 : 0) : e63.startSide > 0 ? 32 : 16;
  return e63.block && (t3 |= 256), t3;
}
var Ki = { class: `cm-line` };
function qi(e63, t3) {
  let n2 = t3.spec.attributes, r2 = t3.spec.class;
  return !n2 && !r2 ? e63 : (e63 || (e63 = { class: `cm-line` }), n2 && Bn(n2, e63), r2 && (e63.class += ` ` + r2), e63);
}
function Ji(e63) {
  let t3 = [];
  for (let n2 = e63.parents.length; n2 > 1; n2--) {
    let r2 = n2 == e63.parents.length ? e63.tile : e63.parents[n2].tile;
    r2 instanceof W && t3.push(r2.mark);
  }
  return t3;
}
function Yi(e63) {
  let t3 = U.get(e63);
  return t3 && t3.setDOM(e63.cloneNode()), e63;
}
var Xi = class extends Kn {
  constructor(e63) {
    super(), this.tag = e63;
  }
  eq(e63) {
    return e63.tag == this.tag;
  }
  toDOM() {
    return document.createElement(this.tag);
  }
  updateDOM(e63) {
    return e63.nodeName.toLowerCase() == this.tag;
  }
  get isHidden() {
    return true;
  }
};
Xi.inline = new Xi(`span`), Xi.block = new Xi(`div`);
var Zi = new class extends Kn {
  toDOM() {
    return document.createElement(`br`);
  }
  get isHidden() {
    return true;
  }
  get editable() {
    return true;
  }
}(), Qi = class {
  constructor(e63) {
    this.view = e63, this.decorations = [], this.blockWrappers = [], this.dynamicDecorationMap = [false], this.domChanged = null, this.hasComposition = null, this.editContextFormatting = z.none, this.lastCompositionAfterCursor = false, this.minWidth = 0, this.minWidthFrom = 0, this.minWidthTo = 0, this.impreciseAnchor = null, this.impreciseHead = null, this.forceSelection = false, this.lastUpdate = Date.now(), this.updateDeco(), this.tile = new ki(e63, e63.contentDOM), this.updateInner([new wi(0, 0, 0, e63.state.doc.length)], null);
  }
  update(e63) {
    var _a3;
    let t3 = e63.changedRanges;
    this.minWidth > 0 && t3.length && (t3.every(({ fromA: e64, toA: t4 }) => t4 < this.minWidthFrom || e64 > this.minWidthTo) ? (this.minWidthFrom = e63.changes.mapPos(this.minWidthFrom, 1), this.minWidthTo = e63.changes.mapPos(this.minWidthTo, 1)) : this.minWidth = this.minWidthFrom = this.minWidthTo = 0), this.updateEditContextFormatting(e63);
    let n2 = -1;
    this.view.inputState.composing >= 0 && !this.view.observer.editContext && (((_a3 = this.domChanged) == null ? void 0 : _a3.newSel) ? n2 = this.domChanged.newSel.head : !la(e63.changes, this.hasComposition) && !e63.selectionSet && (n2 = e63.state.selection.main.head));
    let r2 = n2 > -1 ? na(this.view, e63.changes, n2) : null;
    if (this.domChanged = null, this.hasComposition) {
      let { from: n3, to: r3 } = this.hasComposition;
      t3 = new wi(n3, r3, e63.changes.mapPos(n3, -1), e63.changes.mapPos(r3, 1)).addToSet(t3.slice());
    }
    this.hasComposition = r2 ? { from: r2.range.fromB, to: r2.range.toB } : null, (L.ie || L.chrome) && !r2 && e63 && e63.state.doc.lines != e63.startState.doc.lines && (this.forceSelection = true);
    let i2 = this.decorations, a2 = this.blockWrappers;
    this.updateDeco();
    let o2 = aa(i2, this.decorations, e63.changes);
    o2.length && (t3 = wi.extendWithRanges(t3, o2));
    let s2 = sa(a2, this.blockWrappers, e63.changes);
    return s2.length && (t3 = wi.extendWithRanges(t3, s2)), r2 && !t3.some((e64) => e64.fromA <= r2.range.fromA && e64.toA >= r2.range.toA) && (t3 = r2.range.addToSet(t3.slice())), this.tile.flags & 2 && t3.length == 0 ? false : (this.updateInner(t3, r2), e63.transactions.length && (this.lastUpdate = Date.now()), true);
  }
  updateInner(e63, t3) {
    this.view.viewState.mustMeasureContent = true;
    let { observer: n2 } = this.view;
    n2.ignore(() => {
      if (t3 || e63.length) {
        let n3 = this.tile, r4 = new Ui(this.view, n3, this.blockWrappers, this.decorations, this.dynamicDecorationMap);
        this.tile = r4.run(e63, t3), $i(n3, r4.cache.reused);
      }
      this.tile.dom.style.height = this.view.viewState.contentHeight / this.view.scaleY + `px`, this.tile.dom.style.flexBasis = this.minWidth ? this.minWidth + `px` : ``;
      let r3 = L.chrome || L.ios ? { node: n2.selectionRange.focusNode, written: false } : void 0;
      this.tile.sync(r3), r3 && (r3.written || n2.selectionRange.focusNode != r3.node || !this.tile.dom.contains(r3.node)) && (this.forceSelection = true), this.tile.dom.style.height = ``;
    });
    let r2 = [];
    if (this.view.viewport.from || this.view.viewport.to < this.view.state.doc.length) for (let e64 of this.tile.children) e64.isWidget() && e64.widget instanceof ua && r2.push(e64.dom);
    n2.updateGaps(r2);
  }
  updateEditContextFormatting(e63) {
    this.editContextFormatting = this.editContextFormatting.map(e63.changes);
    for (let t3 of e63.transactions) for (let e64 of t3.effects) e64.is(si) && (this.editContextFormatting = e64.value);
  }
  updateSelection(e63 = false, t3 = false) {
    (e63 || !this.view.observer.selectionRange.focusNode) && this.view.observer.readSelectionRange();
    let { dom: n2 } = this.tile, r2 = this.view.root.activeElement, i2 = r2 == n2, a2 = !i2 && !(this.view.state.facet(ci) || n2.tabIndex > -1) && nr(n2, this.view.observer.selectionRange) && !(r2 && n2.contains(r2));
    if (!(i2 || t3 || a2)) return;
    let o2 = this.forceSelection;
    this.forceSelection = false;
    let s2 = this.view.state.selection.main, c2, l2;
    if (s2.empty ? l2 = c2 = this.inlineDOMNearPos(s2.anchor, s2.assoc || 1) : (l2 = this.inlineDOMNearPos(s2.head, s2.head == s2.from ? 1 : -1), c2 = this.inlineDOMNearPos(s2.anchor, s2.anchor == s2.from ? 1 : -1)), L.gecko && s2.empty && !this.hasComposition && ea(c2)) {
      let e64 = document.createTextNode(``);
      this.view.observer.ignore(() => c2.node.insertBefore(e64, c2.node.childNodes[c2.offset] || null)), c2 = l2 = new Tr(e64, 0), o2 = true;
    }
    let u2 = this.view.observer.selectionRange;
    (o2 || !u2.focusNode || (!ir(c2.node, c2.offset, u2.anchorNode, u2.anchorOffset) || !ir(l2.node, l2.offset, u2.focusNode, u2.focusOffset)) && !this.suppressWidgetCursorChange(u2, s2)) && (this.view.observer.ignore(() => {
      L.android && L.chrome && n2.contains(u2.focusNode) && ca(u2.focusNode, n2) && (n2.blur(), n2.focus({ preventScroll: true }));
      let e64 = er(this.view.root);
      if (e64) if (s2.empty) {
        if (L.gecko) {
          let e65 = ra(c2.node, c2.offset);
          if (e65 && e65 != 3) {
            let t4 = (e65 == 1 ? Cr : wr)(c2.node, c2.offset);
            t4 && (c2 = new Tr(t4.node, t4.offset));
          }
        }
        e64.collapse(c2.node, c2.offset), s2.bidiLevel != null && e64.caretBidiLevel !== void 0 && (e64.caretBidiLevel = s2.bidiLevel);
      } else if (e64.extend) {
        e64.collapse(c2.node, c2.offset);
        try {
          e64.extend(l2.node, l2.offset);
        } catch {
        }
      } else {
        let t4 = document.createRange();
        s2.anchor > s2.head && ([c2, l2] = [l2, c2]), t4.setEnd(l2.node, l2.offset), t4.setStart(c2.node, c2.offset), e64.removeAllRanges(), e64.addRange(t4);
      }
      a2 && this.view.root.activeElement == n2 && (n2.blur(), r2 && r2.focus());
    }), this.view.observer.setSelectionRange(c2, l2)), this.impreciseAnchor = c2.precise ? null : new Tr(u2.anchorNode, u2.anchorOffset), this.impreciseHead = l2.precise ? null : new Tr(u2.focusNode, u2.focusOffset);
  }
  suppressWidgetCursorChange(e63, t3) {
    return this.hasComposition && t3.empty && ir(e63.focusNode, e63.focusOffset, e63.anchorNode, e63.anchorOffset) && this.posFromDOM(e63.focusNode, e63.focusOffset) == t3.head;
  }
  enforceCursorAssoc() {
    if (this.hasComposition) return;
    let { view: e63 } = this, t3 = e63.state.selection.main, n2 = er(e63.root), { anchorNode: r2, anchorOffset: i2 } = e63.observer.selectionRange;
    if (!n2 || !t3.empty || !t3.assoc || !n2.modify) return;
    let a2 = this.lineAt(t3.head, t3.assoc);
    if (!a2) return;
    let o2 = a2.posAtStart;
    if (t3.head == o2 || t3.head == o2 + a2.length) return;
    let s2 = this.coordsAt(t3.head, -1), c2 = this.coordsAt(t3.head, 1);
    if (!s2 || !c2 || s2.bottom > c2.top) return;
    let l2 = this.domAtPos(t3.head + t3.assoc, t3.assoc);
    n2.collapse(l2.node, l2.offset), n2.modify(`move`, t3.assoc < 0 ? `forward` : `backward`, `lineboundary`), e63.observer.readSelectionRange();
    let u2 = e63.observer.selectionRange;
    e63.docView.posFromDOM(u2.anchorNode, u2.anchorOffset) != t3.from && n2.collapse(r2, i2);
  }
  posFromDOM(e63, t3) {
    let n2 = this.tile.nearest(e63);
    if (!n2) return this.tile.dom.compareDocumentPosition(e63) & 2 ? 0 : this.view.state.doc.length;
    let r2 = n2.posAtStart;
    if (n2.isComposite()) {
      let i2;
      if (e63 == n2.dom) i2 = n2.dom.childNodes[t3];
      else {
        let r3 = cr(e63) == 0 ? 0 : t3 == 0 ? -1 : 1;
        for (; ; ) {
          let t4 = e63.parentNode;
          if (t4 == n2.dom) break;
          r3 == 0 && t4.firstChild != t4.lastChild && (r3 = e63 == t4.firstChild ? -1 : 1), e63 = t4;
        }
        i2 = r3 < 0 ? e63 : e63.nextSibling;
      }
      if (i2 == n2.dom.firstChild) return r2;
      for (; i2 && !U.get(i2); ) i2 = i2.nextSibling;
      if (!i2) return r2 + n2.length;
      for (let e64 = 0, t4 = r2; ; e64++) {
        let r3 = n2.children[e64];
        if (r3.dom == i2) return t4;
        t4 += r3.length + r3.breakAfter;
      }
    } else if (n2.isText()) return e63 == n2.dom ? r2 + t3 : r2 + (t3 ? n2.length : 0);
    else return r2;
  }
  domAtPos(e63, t3) {
    let { tile: n2, offset: r2 } = this.tile.resolveBlock(e63, t3);
    return n2.isWidget() ? n2.domPosFor(e63, t3) : n2.domIn(r2, t3);
  }
  inlineDOMNearPos(e63, t3) {
    let n2, r2 = -1, i2 = false, a2, o2 = -1, s2 = false;
    return this.tile.blockTiles((t4, c2) => {
      if (t4.isWidget()) {
        if (t4.flags & 32 && c2 >= e63) return true;
        t4.flags & 16 && (i2 = true);
      } else {
        let l2 = c2 + t4.length;
        if (c2 <= e63 && (n2 = t4, r2 = e63 - c2, i2 = l2 < e63), l2 >= e63 && !a2 && (a2 = t4, o2 = e63 - c2, s2 = c2 > e63), c2 > e63 && a2) return true;
      }
    }), !n2 && !a2 ? this.domAtPos(e63, t3) : (i2 && a2 ? n2 = null : s2 && n2 && (a2 = null), n2 && t3 < 0 || !a2 ? n2.domIn(r2, t3) : a2.domIn(o2, t3));
  }
  coordsAt(e63, t3) {
    let { tile: n2, offset: r2 } = this.tile.resolveBlock(e63, t3);
    return n2.isWidget() ? n2.widget instanceof ua ? null : n2.coordsInWidget(r2, t3, true) : n2.coordsIn(r2, t3);
  }
  lineAt(e63, t3) {
    let { tile: n2 } = this.tile.resolveBlock(e63, t3);
    return n2.isLine() ? n2 : null;
  }
  coordsForChar(e63) {
    let { tile: t3, offset: n2 } = this.tile.resolveBlock(e63, 1);
    if (!t3.isLine()) return null;
    function r2(e64, t4) {
      if (e64.isComposite()) for (let n3 of e64.children) {
        if (n3.length >= t4) {
          let e65 = r2(n3, t4);
          if (e65) return e65;
        }
        if (t4 -= n3.length, t4 < 0) break;
      }
      else if (e64.isText() && t4 < e64.length) {
        let n3 = T(e64.text, t4);
        if (n3 == t4) return null;
        let r3 = vr(e64.dom, t4, n3).getClientRects();
        for (let e65 = 0; e65 < r3.length; e65++) {
          let t5 = r3[e65];
          if (e65 == r3.length - 1 || t5.top < t5.bottom && t5.left < t5.right) return t5;
        }
      }
      return null;
    }
    return r2(t3, n2);
  }
  measureVisibleLineHeights(e63) {
    let t3 = [], { from: n2, to: r2 } = e63, i2 = this.view.contentDOM.clientWidth, a2 = i2 > Math.max(this.view.scrollDOM.clientWidth, this.minWidth) + 1, o2 = -1, s2 = this.view.textDirection == B.LTR, c2 = 0, l2 = (e64, u2, d2) => {
      for (let f2 = 0; f2 < e64.children.length && !(u2 > r2); f2++) {
        let r3 = e64.children[f2], p2 = u2 + r3.length, m2 = r3.dom.getBoundingClientRect(), { height: h2 } = m2;
        if (d2 && !f2 && (c2 += m2.top - d2.top), r3 instanceof Ai) p2 > n2 && l2(r3, u2, m2);
        else if (u2 >= n2 && (c2 > 0 && t3.push(-c2), t3.push(h2 + c2), c2 = 0, a2)) {
          let e65 = r3.dom.lastChild, t4 = e65 ? rr(e65) : [];
          if (t4.length) {
            let e66 = t4[t4.length - 1], n3 = s2 ? e66.right - m2.left : m2.right - e66.left;
            n3 > o2 && (o2 = n3, this.minWidth = i2, this.minWidthFrom = u2, this.minWidthTo = p2);
          }
        }
        d2 && f2 == e64.children.length - 1 && (c2 += d2.bottom - m2.bottom), u2 = p2 + r3.breakAfter;
      }
    };
    return l2(this.tile, 0, null), t3;
  }
  textDirectionAt(e63) {
    let { tile: t3 } = this.tile.resolveBlock(e63, 1);
    return getComputedStyle(t3.dom).direction == `rtl` ? B.RTL : B.LTR;
  }
  measureTextSize() {
    let e63 = this.tile.blockTiles((e64) => {
      if (e64.isLine() && e64.children.length && e64.length <= 20) {
        let t4 = 0, n3;
        for (let r3 of e64.children) {
          if (!r3.isText() || /[^ -~]/.test(r3.text)) return;
          let e65 = rr(r3.dom);
          if (e65.length != 1) return;
          t4 += e65[0].width, n3 = e65[0].height;
        }
        if (t4) return { lineHeight: e64.dom.getBoundingClientRect().height, charWidth: t4 / e64.length, textHeight: n3 };
      }
    });
    if (e63) return e63;
    let t3 = document.createElement(`div`), n2, r2, i2;
    return t3.className = `cm-line`, t3.style.width = `99999px`, t3.style.position = `absolute`, t3.textContent = `abc def ghi jkl mno pqr stu`, this.view.observer.ignore(() => {
      this.tile.dom.appendChild(t3);
      let e64 = rr(t3.firstChild)[0];
      n2 = t3.getBoundingClientRect().height, r2 = e64 && e64.width ? e64.width / 27 : 7, i2 = e64 && e64.height ? e64.height : n2, t3.remove();
    }), { lineHeight: n2, charWidth: r2, textHeight: i2 };
  }
  computeBlockGapDeco() {
    let e63 = [], t3 = this.view.viewState;
    for (let n2 = 0, r2 = 0; ; r2++) {
      let i2 = r2 == t3.viewports.length ? null : t3.viewports[r2], a2 = i2 ? i2.from - 1 : this.view.state.doc.length;
      if (a2 > n2) {
        let r3 = (t3.lineBlockAt(a2).bottom - t3.lineBlockAt(n2).top) / this.view.scaleY;
        e63.push(z.replace({ widget: new ua(r3), block: true, inclusive: true, isBlockGap: true }).range(n2, a2));
      }
      if (!i2) break;
      n2 = i2.to + 1;
    }
    return z.set(e63);
  }
  updateDeco() {
    let e63 = 1, t3 = this.view.state.facet(hi).map((t4) => (this.dynamicDecorationMap[e63++] = typeof t4 == `function`) ? t4(this.view) : t4), n2 = false, r2 = this.view.state.facet(_i).map((e64, t4) => {
      let r3 = typeof e64 == `function`;
      return r3 && (n2 = true), r3 ? e64(this.view) : e64;
    });
    for (r2.length && (this.dynamicDecorationMap[e63++] = n2, t3.push(P.join(r2))), this.decorations = [this.editContextFormatting, ...t3, this.computeBlockGapDeco(), this.view.viewState.lineGapDeco]; e63 < this.decorations.length; ) this.dynamicDecorationMap[e63++] = false;
    this.blockWrappers = this.view.state.facet(gi).map((e64) => typeof e64 == `function` ? e64(this.view) : e64);
  }
  scrollIntoView(e63) {
    if (e63.isSnapshot) {
      let t4 = this.view.viewState.lineBlockAt(e63.range.head);
      this.view.scrollDOM.scrollTop = t4.top - e63.yMargin, this.view.scrollDOM.scrollLeft = e63.xMargin;
      return;
    }
    for (let t4 of this.view.state.facet(ii)) try {
      if (t4(this.view, e63.range, e63)) return true;
    } catch (e64) {
      H(this.view.state, e64, `scroll handler`);
    }
    let { range: t3 } = e63, n2 = this.coordsAt(t3.head, t3.empty ? t3.assoc : t3.head > t3.anchor ? -1 : 1), r2;
    if (!n2) return;
    !t3.empty && (r2 = this.coordsAt(t3.anchor, t3.anchor > t3.head ? -1 : 1)) && (n2 = { left: Math.min(n2.left, r2.left), top: Math.min(n2.top, r2.top), right: Math.max(n2.right, r2.right), bottom: Math.max(n2.bottom, r2.bottom) });
    let i2 = Si(this.view), a2 = { left: n2.left - i2.left, top: n2.top - i2.top, right: n2.right + i2.right, bottom: n2.bottom + i2.bottom }, { offsetWidth: o2, offsetHeight: s2 } = this.view.scrollDOM;
    fr(this.view.scrollDOM, a2, t3.head < t3.anchor ? -1 : 1, e63.x, e63.y, Math.max(Math.min(e63.xMargin, o2), -o2), Math.max(Math.min(e63.yMargin, s2), -s2), this.view.textDirection == B.LTR);
  }
  lineHasWidget(e63) {
    let t3 = (e64) => e64.isWidget() || e64.children.some(t3);
    return t3(this.tile.resolveBlock(e63, 1).tile);
  }
  destroy() {
    $i(this.tile);
  }
};
function $i(e63, t3) {
  let n2 = t3 == null ? void 0 : t3.get(e63);
  if (n2 != 1) {
    n2 ?? e63.destroy();
    for (let n3 of e63.children) $i(n3, t3);
  }
}
function ea(e63) {
  return e63.node.nodeType == 1 && e63.node.firstChild && (e63.offset == 0 || e63.node.childNodes[e63.offset - 1].contentEditable == `false`) && (e63.offset == e63.node.childNodes.length || e63.node.childNodes[e63.offset].contentEditable == `false`);
}
function ta(e63, t3) {
  let n2 = e63.observer.selectionRange;
  if (!n2.focusNode) return null;
  let r2 = Cr(n2.focusNode, n2.focusOffset), i2 = wr(n2.focusNode, n2.focusOffset), a2 = r2 || i2;
  if (i2 && r2 && i2.node != r2.node) {
    let t4 = U.get(i2.node);
    if (!t4 || t4.isText() && t4.text != i2.node.nodeValue) a2 = i2;
    else if (e63.docView.lastCompositionAfterCursor) {
      let e64 = U.get(r2.node);
      !e64 || e64.isText() && e64.text != r2.node.nodeValue || (a2 = i2);
    }
  }
  if (e63.docView.lastCompositionAfterCursor = a2 != r2, !a2) return null;
  let o2 = t3 - a2.offset;
  return { from: o2, to: o2 + a2.node.nodeValue.length, node: a2.node };
}
function na(e63, t3, n2) {
  let r2 = ta(e63, n2);
  if (!r2) return null;
  let { node: i2, from: a2, to: o2 } = r2, s2 = i2.nodeValue;
  if (/[\n\r]/.test(s2) || e63.state.doc.sliceString(r2.from, r2.to) != s2) return null;
  let c2 = t3.invertedDesc;
  return { range: new wi(c2.mapPos(a2), c2.mapPos(o2), a2, o2), text: i2 };
}
function ra(e63, t3) {
  return e63.nodeType == 1 ? (t3 && e63.childNodes[t3 - 1].contentEditable == `false` ? 1 : 0) | (t3 < e63.childNodes.length && e63.childNodes[t3].contentEditable == `false` ? 2 : 0) : 0;
}
var ia = class {
  constructor() {
    this.changes = [];
  }
  compareRange(e63, t3) {
    Qn(e63, t3, this.changes);
  }
  comparePoint(e63, t3) {
    Qn(e63, t3, this.changes);
  }
  boundChange(e63) {
    Qn(e63, e63, this.changes);
  }
};
function aa(e63, t3, n2) {
  let r2 = new ia();
  return P.compare(e63, t3, n2, r2), r2.changes;
}
var oa = class {
  constructor() {
    this.changes = [];
  }
  compareRange(e63, t3) {
    Qn(e63, t3, this.changes);
  }
  comparePoint() {
  }
  boundChange(e63) {
    Qn(e63, e63, this.changes);
  }
};
function sa(e63, t3, n2) {
  let r2 = new oa();
  return P.compare(e63, t3, n2, r2), r2.changes;
}
function ca(e63, t3) {
  for (let n2 = e63; n2 && n2 != t3; n2 = n2.assignedSlot || n2.parentNode) if (n2.nodeType == 1 && n2.contentEditable == `false`) return true;
  return false;
}
function la(e63, t3) {
  let n2 = false;
  return t3 && e63.iterChangedRanges((e64, r2) => {
    e64 < t3.to && r2 > t3.from && (n2 = true);
  }), n2;
}
var ua = class extends Kn {
  constructor(e63) {
    super(), this.height = e63;
  }
  toDOM() {
    let e63 = document.createElement(`div`);
    return e63.className = `cm-gap`, this.updateDOM(e63), e63;
  }
  eq(e63) {
    return e63.height == this.height;
  }
  updateDOM(e63) {
    return e63.style.height = this.height + `px`, true;
  }
  get editable() {
    return true;
  }
  get estimatedHeight() {
    return this.height;
  }
  ignoreEvent() {
    return false;
  }
};
function da(e63, t3, n2 = 1) {
  let r2 = e63.charCategorizer(t3), i2 = e63.doc.lineAt(t3), a2 = t3 - i2.from;
  if (i2.length == 0) return k.cursor(t3);
  a2 == 0 ? n2 = 1 : a2 == i2.length && (n2 = -1);
  let o2 = a2, s2 = a2;
  n2 < 0 ? o2 = T(i2.text, a2, false) : s2 = T(i2.text, a2);
  let c2 = r2(i2.text.slice(o2, s2));
  for (; o2 > 0; ) {
    let e64 = T(i2.text, o2, false);
    if (r2(i2.text.slice(e64, o2)) != c2) break;
    o2 = e64;
  }
  for (; s2 < i2.length; ) {
    let e64 = T(i2.text, s2);
    if (r2(i2.text.slice(s2, e64)) != c2) break;
    s2 = e64;
  }
  return k.range(o2 + i2.from, s2 + i2.from);
}
function fa(e63, t3, n2, r2, i2) {
  let a2 = Math.round((r2 - t3.left) * e63.defaultCharacterWidth);
  if (e63.lineWrapping && n2.height > e63.defaultLineHeight * 1.5) {
    let t4 = e63.viewState.heightOracle.textHeight, r3 = Math.floor((i2 - n2.top - (e63.defaultLineHeight - t4) * 0.5) / t4);
    a2 += r3 * e63.viewState.heightOracle.lineLength;
  }
  let o2 = e63.state.sliceDoc(n2.from, n2.to);
  return n2.from + mn(o2, a2, e63.state.tabSize);
}
function pa(e63, t3, n2) {
  let r2 = e63.lineBlockAt(t3);
  if (Array.isArray(r2.type)) {
    let e64;
    for (let i2 of r2.type) {
      if (i2.from > t3) break;
      if (!(i2.to < t3)) {
        if (i2.from < t3 && i2.to > t3) return i2;
        (!e64 || i2.type == R.Text && (e64.type != i2.type || (n2 < 0 ? i2.from < t3 : i2.to > t3))) && (e64 = i2);
      }
    }
    return e64 || r2;
  }
  return r2;
}
function ma(e63, t3, n2, r2) {
  let i2 = pa(e63, t3.head, t3.assoc || -1), a2 = !r2 || i2.type != R.Text || !(e63.lineWrapping || i2.widgetLineBreaks) ? null : e63.coordsAtPos(t3.assoc < 0 && t3.head > i2.from ? t3.head - 1 : t3.head);
  if (a2) {
    let t4 = e63.dom.getBoundingClientRect(), r3 = e63.textDirectionAt(i2.from), o2 = e63.posAtCoords({ x: n2 == (r3 == B.LTR) ? t4.right - 1 : t4.left + 1, y: (a2.top + a2.bottom) / 2 });
    if (o2 != null) return k.cursor(o2, n2 ? -1 : 1);
  }
  return k.cursor(n2 ? i2.to : i2.from, n2 ? -1 : 1);
}
function ha(e63, t3, n2, r2) {
  let i2 = e63.state.doc.lineAt(t3.head), a2 = e63.bidiSpans(i2), o2 = e63.textDirectionAt(i2.from);
  for (let s2 = t3, c2 = null; ; ) {
    let t4 = Gr(i2, a2, o2, s2, n2), l2 = Wr;
    if (!t4) {
      if (i2.number == (n2 ? e63.state.doc.lines : 1)) return s2;
      l2 = `
`, i2 = e63.state.doc.line(i2.number + (n2 ? 1 : -1)), a2 = e63.bidiSpans(i2), t4 = e63.visualLineSide(i2, !n2);
    }
    if (c2) {
      if (!c2(l2)) return s2;
    } else {
      if (!r2) return t4;
      c2 = r2(l2);
    }
    s2 = t4;
  }
}
function ga(e63, t3, n2) {
  let r2 = e63.state.charCategorizer(t3), i2 = r2(n2);
  return (e64) => {
    let t4 = r2(e64);
    return i2 == Ut.Space && (i2 = t4), i2 == t4;
  };
}
function _a(e63, t3, n2, r2) {
  let i2 = t3.head, a2 = n2 ? 1 : -1;
  if (i2 == (n2 ? e63.state.doc.length : 0)) return k.cursor(i2, t3.assoc);
  let o2 = t3.goalColumn, s2, c2 = e63.contentDOM.getBoundingClientRect(), l2 = e63.coordsAtPos(i2, t3.assoc || -1), u2 = e63.documentTop;
  if (l2) o2 ?? (o2 = l2.left - c2.left), s2 = a2 < 0 ? l2.top : l2.bottom;
  else {
    let t4 = e63.viewState.lineBlockAt(i2);
    o2 ?? (o2 = Math.min(c2.right - c2.left, e63.defaultCharacterWidth * (i2 - t4.from))), s2 = (a2 < 0 ? t4.top : t4.bottom) + u2;
  }
  let d2 = c2.left + o2, f2 = r2 ?? e63.viewState.heightOracle.textHeight >> 1;
  for (let t4 = 0; ; t4 += 10) {
    let n3 = Sa(e63, { x: d2, y: s2 + (f2 + t4) * a2 }, false, a2);
    return k.cursor(n3.pos, n3.assoc, void 0, o2);
  }
}
function va(e63, t3, n2) {
  for (; ; ) {
    let r2 = 0;
    for (let i2 of e63) i2.between(t3 - 1, t3 + 1, (e64, i3, a2) => {
      if (t3 > e64 && t3 < i3) {
        let a3 = r2 || n2 || (t3 - e64 < i3 - t3 ? -1 : 1);
        t3 = a3 < 0 ? e64 : i3, r2 = a3;
      }
    });
    if (!r2) return t3;
  }
}
function ya(e63, t3) {
  let n2 = null;
  for (let r2 = 0; r2 < t3.ranges.length; r2++) {
    let i2 = t3.ranges[r2], a2 = null;
    if (i2.empty) {
      let t4 = va(e63, i2.from, 0);
      t4 != i2.from && (a2 = k.cursor(t4, -1));
    } else {
      let t4 = va(e63, i2.from, -1), n3 = va(e63, i2.to, 1);
      (t4 != i2.from || n3 != i2.to) && (a2 = k.range(i2.from == i2.anchor ? t4 : n3, i2.from == i2.head ? t4 : n3));
    }
    a2 && (n2 || (n2 = t3.ranges.slice()), n2[r2] = a2);
  }
  return n2 ? k.create(n2, t3.mainIndex) : t3;
}
function ba(e63, t3, n2) {
  let r2 = va(e63.state.facet(vi).map((t4) => t4(e63)), n2.from, t3.head > n2.from ? -1 : 1);
  return r2 == n2.from ? n2 : k.cursor(r2, r2 < n2.from ? 1 : -1);
}
var xa = class {
  constructor(e63, t3) {
    this.pos = e63, this.assoc = t3;
  }
};
function Sa(e63, t3, n2, r2) {
  let i2 = e63.contentDOM.getBoundingClientRect(), a2 = i2.top + e63.viewState.paddingTop, { x: o2, y: s2 } = t3, c2 = s2 - a2, l2;
  for (; ; ) {
    if (c2 < 0) return new xa(0, 1);
    if (c2 > e63.viewState.docHeight) return new xa(e63.state.doc.length, -1);
    if (l2 = e63.elementAtHeight(c2), r2 == null) break;
    if (l2.type == R.Text) {
      let t5 = e63.docView.coordsAt(r2 < 0 ? l2.from : l2.to, r2);
      if (t5 && (r2 < 0 ? t5.top <= c2 + a2 : t5.bottom >= c2 + a2)) break;
    }
    let t4 = e63.viewState.heightOracle.textHeight / 2;
    c2 = r2 > 0 ? l2.bottom + t4 : l2.top - t4;
  }
  if (e63.viewport.from >= l2.to || e63.viewport.to <= l2.from) {
    if (n2) return null;
    if (l2.type == R.Text) {
      let t4 = fa(e63, i2, l2, o2, s2);
      return new xa(t4, t4 == l2.from ? 1 : -1);
    }
  }
  if (l2.type != R.Text) return c2 < (l2.top + l2.bottom) / 2 ? new xa(l2.from, 1) : new xa(l2.to, -1);
  let u2 = e63.docView.lineAt(l2.from, 2);
  return (!u2 || u2.length != l2.length) && (u2 = e63.docView.lineAt(l2.from, -2)), Ca(e63, u2, l2.from, o2, s2);
}
function Ca(e63, t3, n2, r2, i2) {
  let a2 = -1, o2 = null, s2 = 1e9, c2 = 1e9, l2 = i2, u2 = i2, d2 = (e64, t4) => {
    for (let n3 = 0; n3 < e64.length; n3++) {
      let d3 = e64[n3];
      if (d3.top == d3.bottom) continue;
      let f2 = d3.left > r2 ? d3.left - r2 : d3.right < r2 ? r2 - d3.right : 0, p2 = d3.top > i2 ? d3.top - i2 : d3.bottom < i2 ? i2 - d3.bottom : 0;
      d3.top <= u2 && d3.bottom >= l2 && (l2 = Math.min(d3.top, l2), u2 = Math.max(d3.bottom, u2), p2 = 0), (a2 < 0 || (p2 - c2 || f2 - s2) < 0) && (a2 >= 0 && c2 && s2 < f2 && o2.top <= u2 - 2 && o2.bottom >= l2 + 2 ? c2 = 0 : (a2 = t4, s2 = f2, c2 = p2, o2 = d3));
    }
  };
  if (t3.isText()) {
    for (let e64 = 0; e64 < t3.length; ) {
      let n3 = T(t3.text, e64);
      if (d2(vr(t3.dom, e64, n3).getClientRects(), e64), !s2 && !c2) break;
      e64 = n3;
    }
    return r2 > (o2.left + o2.right) / 2 == (wa(e63, a2 + n2) == B.LTR) ? new xa(n2 + T(t3.text, a2), -1) : new xa(n2 + a2, 1);
  } else {
    if (!t3.length) return new xa(n2, 1);
    for (let e64 = 0; e64 < t3.children.length; e64++) {
      let n3 = t3.children[e64];
      if (!(n3.flags & 48) && (d2((n3.dom.nodeType == 1 ? n3.dom : vr(n3.dom, 0, n3.length)).getClientRects(), e64), !s2 && !c2)) break;
    }
    let l3 = t3.children[a2], u3 = t3.posBefore(l3, n2);
    return l3.isComposite() || l3.isText() ? Ca(e63, l3, u3, Math.max(o2.left, Math.min(o2.right, r2)), i2) : r2 > (o2.left + o2.right) / 2 == (wa(e63, a2 + n2) == B.LTR) ? new xa(u3 + l3.length, -1) : new xa(u3, 1);
  }
}
function wa(e63, t3) {
  let n2 = e63.state.doc.lineAt(t3);
  return e63.bidiSpans(n2)[Fr.find(e63.bidiSpans(n2), t3 - n2.from, -1, 1)].dir;
}
var Ta = `\uFFFF`, Ea = class {
  constructor(e63, t3) {
    this.points = e63, this.view = t3, this.text = ``, this.lineSeparator = t3.state.facet(N.lineSeparator);
  }
  append(e63) {
    this.text += e63;
  }
  lineBreak() {
    this.text += Ta;
  }
  readRange(e63, t3) {
    if (!e63) return this;
    let n2 = e63.parentNode;
    for (let r2 = e63; ; ) {
      this.findPointBefore(n2, r2);
      let e64 = this.text.length;
      this.readNode(r2);
      let i2 = U.get(r2), a2 = r2.nextSibling;
      if (a2 == t3) {
        (i2 == null ? void 0 : i2.breakAfter) && !a2 && n2 != this.view.contentDOM && this.lineBreak();
        break;
      }
      let o2 = U.get(a2);
      (i2 && o2 ? i2.breakAfter : (i2 ? i2.breakAfter : or(r2)) || or(a2) && (r2.nodeName != `BR` || (i2 == null ? void 0 : i2.isWidget())) && this.text.length > e64) && !Oa(a2, t3) && this.lineBreak(), r2 = a2;
    }
    return this.findPointBefore(n2, t3), this;
  }
  readTextNode(e63) {
    let t3 = e63.nodeValue;
    for (let n2 of this.points) n2.node == e63 && (n2.pos = this.text.length + Math.min(n2.offset, t3.length));
    for (let n2 = 0, r2 = this.lineSeparator ? null : /\r\n?|\n/g; ; ) {
      let i2 = -1, a2 = 1, o2;
      if (this.lineSeparator ? (i2 = t3.indexOf(this.lineSeparator, n2), a2 = this.lineSeparator.length) : (o2 = r2.exec(t3)) && (i2 = o2.index, a2 = o2[0].length), this.append(t3.slice(n2, i2 < 0 ? t3.length : i2)), i2 < 0) break;
      if (this.lineBreak(), a2 > 1) for (let t4 of this.points) t4.node == e63 && t4.pos > this.text.length && (t4.pos -= a2 - 1);
      n2 = i2 + a2;
    }
  }
  readNode(e63) {
    let t3 = U.get(e63), n2 = t3 && t3.overrideDOMText;
    if (n2 != null) {
      this.findPointInside(e63, n2.length);
      for (let e64 = n2.iter(); !e64.next().done; ) e64.lineBreak ? this.lineBreak() : this.append(e64.value);
    } else e63.nodeType == 3 ? this.readTextNode(e63) : e63.nodeName == `BR` ? e63.nextSibling && this.lineBreak() : e63.nodeType == 1 && this.readRange(e63.firstChild, null);
  }
  findPointBefore(e63, t3) {
    for (let n2 of this.points) n2.node == e63 && e63.childNodes[n2.offset] == t3 && (n2.pos = this.text.length);
  }
  findPointInside(e63, t3) {
    for (let n2 of this.points) (e63.nodeType == 3 ? n2.node == e63 : e63.contains(n2.node)) && (n2.pos = this.text.length + (Da(e63, n2.node, n2.offset) ? t3 : 0));
  }
};
function Da(e63, t3, n2) {
  for (; ; ) {
    if (!t3 || n2 < cr(t3)) return false;
    if (t3 == e63) return true;
    n2 = ar(t3) + 1, t3 = t3.parentNode;
  }
}
function Oa(e63, t3) {
  var _a3;
  let n2;
  for (; !(e63 == t3 || !e63); e63 = e63.nextSibling) {
    let t4 = U.get(e63);
    if (!(t4 == null ? void 0 : t4.isWidget())) return false;
    t4 && (n2 || (n2 = [])).push(t4);
  }
  if (n2) {
    for (let e64 of n2) if ((_a3 = e64.overrideDOMText) == null ? void 0 : _a3.length) return false;
  }
  return true;
}
var ka = class {
  constructor(e63, t3) {
    this.node = e63, this.offset = t3, this.pos = -1;
  }
}, Aa = class {
  constructor(e63, t3, n2, r2) {
    this.typeOver = r2, this.bounds = null, this.text = ``, this.domChanged = t3 > -1;
    let { impreciseHead: i2, impreciseAnchor: a2 } = e63.docView;
    if (e63.state.readOnly && t3 > -1) this.newSel = null;
    else if (t3 > -1 && (this.bounds = ja(e63.docView.tile, t3, n2, 0))) {
      let t4 = i2 || a2 ? [] : Ia(e63), n3 = new Ea(t4, e63);
      n3.readRange(this.bounds.startDOM, this.bounds.endDOM), this.text = n3.text, this.newSel = La(t4, this.bounds.from);
    } else {
      let t4 = e63.observer.selectionRange, n3 = i2 && i2.node == t4.focusNode && i2.offset == t4.focusOffset || !tr(e63.contentDOM, t4.focusNode) ? e63.state.selection.main.head : e63.docView.posFromDOM(t4.focusNode, t4.focusOffset), r3 = a2 && a2.node == t4.anchorNode && a2.offset == t4.anchorOffset || !tr(e63.contentDOM, t4.anchorNode) ? e63.state.selection.main.anchor : e63.docView.posFromDOM(t4.anchorNode, t4.anchorOffset), o2 = e63.viewport;
      if ((L.ios || L.chrome) && e63.state.selection.main.empty && n3 != r3 && (o2.from > 0 || o2.to < e63.state.doc.length)) {
        let t5 = Math.min(n3, r3), i3 = Math.max(n3, r3), a3 = o2.from - t5, s2 = o2.to - i3;
        (a3 == 0 || a3 == 1 || t5 == 0) && (s2 == 0 || s2 == -1 || i3 == e63.state.doc.length) && (n3 = 0, r3 = e63.state.doc.length);
      }
      e63.inputState.composing > -1 && e63.state.selection.ranges.length > 1 ? this.newSel = e63.state.selection.replaceRange(k.range(r3, n3)) : this.newSel = k.single(r3, n3);
    }
  }
};
function ja(e63, t3, n2, r2) {
  if (e63.isComposite()) {
    let i2 = -1, a2 = -1, o2 = -1, s2 = -1;
    for (let c2 = 0, l2 = r2, u2 = r2; c2 < e63.children.length; c2++) {
      let r3 = e63.children[c2], d2 = l2 + r3.length;
      if (l2 < t3 && d2 > n2) return ja(r3, t3, n2, l2);
      if (d2 >= t3 && i2 == -1 && (i2 = c2, a2 = l2), l2 > n2 && r3.dom.parentNode == e63.dom) {
        o2 = c2, s2 = u2;
        break;
      }
      u2 = d2, l2 = d2 + r3.breakAfter;
    }
    return { from: a2, to: s2 < 0 ? r2 + e63.length : s2, startDOM: (i2 ? e63.children[i2 - 1].dom.nextSibling : null) || e63.dom.firstChild, endDOM: o2 < e63.children.length && o2 >= 0 ? e63.children[o2].dom : null };
  } else if (e63.isText()) return { from: r2, to: r2 + e63.length, startDOM: e63.dom, endDOM: e63.dom.nextSibling };
  else return null;
}
function Ma(e63, t3) {
  let n2, { newSel: r2 } = t3, i2 = e63.state.selection.main, a2 = e63.inputState.lastKeyTime > Date.now() - 100 ? e63.inputState.lastKeyCode : -1;
  if (t3.bounds) {
    let { from: r3, to: o2 } = t3.bounds, s2 = i2.from, c2 = null;
    (a2 === 8 || L.android && t3.text.length < o2 - r3) && (s2 = i2.to, c2 = `end`);
    let l2 = Fa(e63.state.doc.sliceString(r3, o2, Ta), t3.text, s2 - r3, c2);
    l2 && (L.chrome && a2 == 13 && l2.toB == l2.from + 2 && t3.text.slice(l2.from, l2.toB) == Ta + Ta && l2.toB--, n2 = { from: r3 + l2.from, to: r3 + l2.toA, insert: C.of(t3.text.slice(l2.from, l2.toB).split(Ta)) });
  } else r2 && (!e63.hasFocus && e63.state.facet(ci) || r2.main.eq(i2)) && (r2 = null);
  if (!n2 && !r2) return false;
  if (!n2 && t3.typeOver && !i2.empty && r2 && r2.main.empty ? n2 = { from: i2.from, to: i2.to, insert: e63.state.doc.slice(i2.from, i2.to) } : (L.mac || L.android) && n2 && n2.from == n2.to && n2.from == i2.head - 1 && /^\. ?$/.test(n2.insert.toString()) && e63.contentDOM.getAttribute(`autocorrect`) == `off` ? (r2 && n2.insert.length == 2 && (r2 = k.single(r2.main.anchor - 1, r2.main.head - 1)), n2 = { from: n2.from, to: n2.to, insert: C.of([n2.insert.toString().replace(`.`, ` `)]) }) : n2 && n2.from >= i2.from && n2.to <= i2.to && (n2.from != i2.from || n2.to != i2.to) && i2.to - i2.from - (n2.to - n2.from) <= 4 ? n2 = { from: i2.from, to: i2.to, insert: e63.state.doc.slice(i2.from, n2.from).append(n2.insert).append(e63.state.doc.slice(n2.to, i2.to)) } : e63.state.doc.lineAt(i2.from).to < i2.to && e63.docView.lineHasWidget(i2.to) && e63.inputState.insertingTextAt > Date.now() - 50 ? n2 = { from: i2.from, to: i2.to, insert: e63.state.toText(e63.inputState.insertingText) } : L.chrome && n2 && n2.from == n2.to && n2.from == i2.head && n2.insert.toString() == `
 ` && e63.lineWrapping && (r2 && (r2 = k.single(r2.main.anchor - 1, r2.main.head - 1)), n2 = { from: i2.from, to: i2.to, insert: C.of([` `]) }), n2) return Na(e63, n2, r2, a2);
  if (r2 && !r2.main.eq(i2)) {
    let t4 = false, n3 = `select`;
    return e63.inputState.lastSelectionTime > Date.now() - 50 && (e63.inputState.lastSelectionOrigin == `select` && (t4 = true), n3 = e63.inputState.lastSelectionOrigin, n3 == `select.pointer` && (r2 = ya(e63.state.facet(vi).map((t5) => t5(e63)), r2))), e63.dispatch({ selection: r2, scrollIntoView: t4, userEvent: n3 }), true;
  } else return false;
}
function Na(e63, t3, n2, r2 = -1) {
  if (L.ios && e63.inputState.flushIOSKey(t3)) return true;
  let i2 = e63.state.selection.main;
  if (L.android && (t3.to == i2.to && (t3.from == i2.from || t3.from == i2.from - 1 && e63.state.sliceDoc(t3.from, i2.from) == ` `) && t3.insert.length == 1 && t3.insert.lines == 2 && yr(e63.contentDOM, `Enter`, 13) || (t3.from == i2.from - 1 && t3.to == i2.to && t3.insert.length == 0 || r2 == 8 && t3.insert.length < t3.to - t3.from && t3.to > i2.head) && yr(e63.contentDOM, `Backspace`, 8) || t3.from == i2.from && t3.to == i2.to + 1 && t3.insert.length == 0 && yr(e63.contentDOM, `Delete`, 46))) return true;
  let a2 = t3.insert.toString();
  e63.inputState.composing >= 0 && e63.inputState.composing++;
  let o2, s2 = () => o2 || (o2 = Pa(e63, t3, n2));
  return e63.state.facet(Qr).some((n3) => n3(e63, t3.from, t3.to, a2, s2)) || e63.dispatch(s2()), true;
}
function Pa(e63, t3, n2) {
  let r2, i2 = e63.state, a2 = i2.selection.main, o2 = -1;
  if (t3.from == t3.to && t3.from < a2.from || t3.from > a2.to) {
    let n3 = t3.from < a2.from ? -1 : 1, r3 = n3 < 0 ? a2.from : a2.to, s3 = va(i2.facet(vi).map((t4) => t4(e63)), r3, n3);
    t3.from == s3 && (o2 = s3);
  }
  if (o2 > -1) r2 = { changes: t3, selection: k.cursor(t3.from + t3.insert.length, -1) };
  else if (t3.from >= a2.from && t3.to <= a2.to && t3.to - t3.from >= (a2.to - a2.from) / 3 && (!n2 || n2.main.empty && n2.main.from == t3.from + t3.insert.length) && e63.inputState.composing < 0) {
    let n3 = a2.from < t3.from ? i2.sliceDoc(a2.from, t3.from) : ``, o3 = a2.to > t3.to ? i2.sliceDoc(t3.to, a2.to) : ``;
    r2 = i2.replaceSelection(e63.state.toText(n3 + t3.insert.sliceString(0, void 0, e63.state.lineBreak) + o3));
  } else {
    let o3 = i2.changes(t3), s3 = n2 && n2.main.to <= o3.newLength ? n2.main : void 0;
    if (i2.selection.ranges.length > 1 && (e63.inputState.composing >= 0 || e63.inputState.compositionPendingChange) && t3.to <= a2.to + 10 && t3.to >= a2.to - 10) {
      let c2 = e63.state.sliceDoc(t3.from, t3.to), l2, u2 = n2 && ta(e63, n2.main.head);
      if (u2) {
        let e64 = t3.insert.length - (t3.to - t3.from);
        l2 = { from: u2.from, to: u2.to - e64 };
      } else l2 = e63.state.doc.lineAt(a2.head);
      let d2 = a2.to - t3.to;
      r2 = i2.changeByRange((n3) => {
        if (n3.from == a2.from && n3.to == a2.to) return { changes: o3, range: s3 || n3.map(o3) };
        let r3 = n3.to - d2, u3 = r3 - c2.length;
        if (e63.state.sliceDoc(u3, r3) != c2 || r3 >= l2.from && u3 <= l2.to) return { range: n3 };
        let f2 = i2.changes({ from: u3, to: r3, insert: t3.insert }), p2 = n3.to - a2.to;
        return { changes: f2, range: s3 ? k.range(Math.max(0, s3.anchor + p2), Math.max(0, s3.head + p2)) : n3.map(f2) };
      });
    } else r2 = { changes: o3, selection: s3 && i2.selection.replaceRange(s3) };
  }
  let s2 = `input.type`;
  return (e63.composing || e63.inputState.compositionPendingChange && e63.inputState.compositionEndedAt > Date.now() - 50) && (e63.inputState.compositionPendingChange = false, s2 += `.compose`, e63.inputState.compositionFirstChange && (s2 += `.start`, e63.inputState.compositionFirstChange = false)), i2.update(r2, { userEvent: s2, scrollIntoView: true });
}
function Fa(e63, t3, n2, r2) {
  let i2 = Math.min(e63.length, t3.length), a2 = 0;
  for (; a2 < i2 && e63.charCodeAt(a2) == t3.charCodeAt(a2); ) a2++;
  if (a2 == i2 && e63.length == t3.length) return null;
  let o2 = e63.length, s2 = t3.length;
  for (; o2 > 0 && s2 > 0 && e63.charCodeAt(o2 - 1) == t3.charCodeAt(s2 - 1); ) o2--, s2--;
  if (r2 == `end`) {
    let e64 = Math.max(0, a2 - Math.min(o2, s2));
    n2 -= o2 + e64 - a2;
  }
  if (o2 < a2 && e63.length < t3.length) {
    let e64 = n2 <= a2 && n2 >= o2 ? a2 - n2 : 0;
    a2 -= e64, s2 = a2 + (s2 - o2), o2 = a2;
  } else if (s2 < a2) {
    let e64 = n2 <= a2 && n2 >= s2 ? a2 - n2 : 0;
    a2 -= e64, o2 = a2 + (o2 - s2), s2 = a2;
  }
  return { from: a2, toA: o2, toB: s2 };
}
function Ia(e63) {
  let t3 = [];
  if (e63.root.activeElement != e63.contentDOM) return t3;
  let { anchorNode: n2, anchorOffset: r2, focusNode: i2, focusOffset: a2 } = e63.observer.selectionRange;
  return n2 && (t3.push(new ka(n2, r2)), (i2 != n2 || a2 != r2) && t3.push(new ka(i2, a2))), t3;
}
function La(e63, t3) {
  if (e63.length == 0) return null;
  let n2 = e63[0].pos, r2 = e63.length == 2 ? e63[1].pos : n2;
  return n2 > -1 && r2 > -1 ? k.single(n2 + t3, r2 + t3) : null;
}
var Ra = class {
  setSelectionOrigin(e63) {
    this.lastSelectionOrigin = e63, this.lastSelectionTime = Date.now();
  }
  constructor(e63) {
    this.view = e63, this.lastKeyCode = 0, this.lastKeyTime = 0, this.lastTouchTime = 0, this.lastFocusTime = 0, this.lastScrollTop = 0, this.lastScrollLeft = 0, this.pendingIOSKey = void 0, this.tabFocusMode = -1, this.lastSelectionOrigin = null, this.lastSelectionTime = 0, this.lastContextMenu = 0, this.scrollHandlers = [], this.handlers = /* @__PURE__ */ Object.create(null), this.composing = -1, this.compositionFirstChange = null, this.compositionEndedAt = 0, this.compositionPendingKey = false, this.compositionPendingChange = false, this.insertingText = ``, this.insertingTextAt = 0, this.mouseSelection = null, this.draggedContent = null, this.handleEvent = this.handleEvent.bind(this), this.notifiedFocused = e63.hasFocus, L.safari && e63.contentDOM.addEventListener(`input`, () => null), L.gecko && yo(e63.contentDOM.ownerDocument);
  }
  handleEvent(e63) {
    !Za(this.view, e63) || this.ignoreDuringComposition(e63) || e63.type == `keydown` && this.keydown(e63) || (this.view.updateState == 0 ? this.runHandlers(e63.type, e63) : Promise.resolve().then(() => this.runHandlers(e63.type, e63)));
  }
  runHandlers(e63, t3) {
    let n2 = this.handlers[e63];
    if (n2) {
      for (let e64 of n2.observers) e64(this.view, t3);
      for (let e64 of n2.handlers) {
        if (t3.defaultPrevented) break;
        if (e64(this.view, t3)) {
          t3.preventDefault();
          break;
        }
      }
    }
  }
  ensureHandlers(e63) {
    let t3 = Ba(e63), n2 = this.handlers, r2 = this.view.contentDOM;
    for (let e64 in t3) if (e64 != `scroll`) {
      let i2 = !t3[e64].handlers.length, a2 = n2[e64];
      a2 && i2 != !a2.handlers.length && (r2.removeEventListener(e64, this.handleEvent), a2 = null), a2 || r2.addEventListener(e64, this.handleEvent, { passive: i2 });
    }
    for (let e64 in n2) e64 != `scroll` && !t3[e64] && r2.removeEventListener(e64, this.handleEvent);
    this.handlers = t3;
  }
  keydown(e63) {
    if (this.lastKeyCode = e63.keyCode, this.lastKeyTime = Date.now(), e63.keyCode == 9 && this.tabFocusMode > -1 && (!this.tabFocusMode || Date.now() <= this.tabFocusMode)) return true;
    if (this.tabFocusMode > 0 && e63.keyCode != 27 && Ua.indexOf(e63.keyCode) < 0 && (this.tabFocusMode = -1), L.android && L.chrome && !e63.synthetic && (e63.keyCode == 13 || e63.keyCode == 8)) return this.view.observer.delayAndroidKey(e63.key, e63.keyCode), true;
    let t3;
    return L.ios && !e63.synthetic && !e63.altKey && !e63.metaKey && ((t3 = Va.find((t4) => t4.keyCode == e63.keyCode)) && !e63.ctrlKey || Ha.indexOf(e63.key) > -1 && e63.ctrlKey && !e63.shiftKey) ? (this.pendingIOSKey = t3 || e63, setTimeout(() => this.flushIOSKey(), 250), true) : (e63.keyCode != 229 && this.view.observer.forceFlush(), false);
  }
  flushIOSKey(e63) {
    let t3 = this.pendingIOSKey;
    return !t3 || t3.key == `Enter` && e63 && e63.from < e63.to && /^\S+$/.test(e63.insert.toString()) ? false : (this.pendingIOSKey = void 0, yr(this.view.contentDOM, t3.key, t3.keyCode, t3 instanceof KeyboardEvent ? t3 : void 0));
  }
  ignoreDuringComposition(e63) {
    return !/^key/.test(e63.type) || e63.synthetic ? false : this.composing > 0 ? true : L.safari && !L.ios && this.compositionPendingKey && Date.now() - this.compositionEndedAt < 100 ? (this.compositionPendingKey = false, true) : false;
  }
  startMouseSelection(e63) {
    this.mouseSelection && this.mouseSelection.destroy(), this.mouseSelection = e63;
  }
  update(e63) {
    this.view.observer.update(e63), this.mouseSelection && this.mouseSelection.update(e63), this.draggedContent && e63.docChanged && (this.draggedContent = this.draggedContent.map(e63.changes)), e63.transactions.length && (this.lastKeyCode = this.lastSelectionTime = 0);
  }
  destroy() {
    this.mouseSelection && this.mouseSelection.destroy();
  }
};
function za(e63, t3) {
  return (n2, r2) => {
    try {
      return t3.call(e63, r2, n2);
    } catch (e64) {
      H(n2.state, e64);
    }
  };
}
function Ba(e63) {
  let t3 = /* @__PURE__ */ Object.create(null);
  function n2(e64) {
    return t3[e64] || (t3[e64] = { observers: [], handlers: [] });
  }
  for (let t4 of e63) {
    let e64 = t4.spec, r2 = e64 && e64.plugin.domEventHandlers, i2 = e64 && e64.plugin.domEventObservers;
    if (r2) for (let e65 in r2) {
      let i3 = r2[e65];
      i3 && n2(e65).handlers.push(za(t4.value, i3));
    }
    if (i2) for (let e65 in i2) {
      let r3 = i2[e65];
      r3 && n2(e65).observers.push(za(t4.value, r3));
    }
  }
  for (let e64 in G) n2(e64).handlers.push(G[e64]);
  for (let e64 in K) n2(e64).observers.push(K[e64]);
  return t3;
}
var Va = [{ key: `Backspace`, keyCode: 8, inputType: `deleteContentBackward` }, { key: `Enter`, keyCode: 13, inputType: `insertParagraph` }, { key: `Enter`, keyCode: 13, inputType: `insertLineBreak` }, { key: `Delete`, keyCode: 46, inputType: `deleteContentForward` }], Ha = `dthko`, Ua = [16, 17, 18, 20, 91, 92, 224, 225], Wa = 6;
function Ga(e63) {
  return Math.max(0, e63) * 0.7 + 8;
}
function Ka(e63, t3) {
  return Math.max(Math.abs(e63.clientX - t3.clientX), Math.abs(e63.clientY - t3.clientY));
}
var qa = class {
  constructor(e63, t3, n2, r2) {
    this.view = e63, this.startEvent = t3, this.style = n2, this.mustSelect = r2, this.scrollSpeed = { x: 0, y: 0 }, this.scrolling = -1, this.lastEvent = t3, this.scrollParents = pr(e63.contentDOM), this.atoms = e63.state.facet(vi).map((t4) => t4(e63));
    let i2 = e63.contentDOM.ownerDocument;
    i2.addEventListener(`mousemove`, this.move = this.move.bind(this)), i2.addEventListener(`mouseup`, this.up = this.up.bind(this)), this.extend = t3.shiftKey, this.multiple = e63.state.facet(N.allowMultipleSelections) && Ja(e63, t3), this.dragging = Xa(e63, t3) && so(t3) == 1 ? null : false;
  }
  start(e63) {
    this.dragging === false && this.select(e63);
  }
  move(e63) {
    if (e63.buttons == 0) return this.destroy();
    if (this.dragging || this.dragging == null && Ka(this.startEvent, e63) < 10) return;
    this.select(this.lastEvent = e63);
    let t3 = 0, n2 = 0, r2 = 0, i2 = 0, a2 = this.view.win.innerWidth, o2 = this.view.win.innerHeight;
    this.scrollParents.x && ({ left: r2, right: a2 } = this.scrollParents.x.getBoundingClientRect()), this.scrollParents.y && ({ top: i2, bottom: o2 } = this.scrollParents.y.getBoundingClientRect());
    let s2 = Si(this.view);
    e63.clientX - s2.left <= r2 + Wa ? t3 = -Ga(r2 - e63.clientX) : e63.clientX + s2.right >= a2 - Wa && (t3 = Ga(e63.clientX - a2)), e63.clientY - s2.top <= i2 + Wa ? n2 = -Ga(i2 - e63.clientY) : e63.clientY + s2.bottom >= o2 - Wa && (n2 = Ga(e63.clientY - o2)), this.setScrollSpeed(t3, n2);
  }
  up(e63) {
    this.dragging ?? this.select(this.lastEvent), this.dragging || e63.preventDefault(), this.destroy();
  }
  destroy() {
    this.setScrollSpeed(0, 0);
    let e63 = this.view.contentDOM.ownerDocument;
    e63.removeEventListener(`mousemove`, this.move), e63.removeEventListener(`mouseup`, this.up), this.view.inputState.mouseSelection = this.view.inputState.draggedContent = null;
  }
  setScrollSpeed(e63, t3) {
    this.scrollSpeed = { x: e63, y: t3 }, e63 || t3 ? this.scrolling < 0 && (this.scrolling = setInterval(() => this.scroll(), 50)) : this.scrolling > -1 && (clearInterval(this.scrolling), this.scrolling = -1);
  }
  scroll() {
    let { x: e63, y: t3 } = this.scrollSpeed;
    e63 && this.scrollParents.x && (this.scrollParents.x.scrollLeft += e63, e63 = 0), t3 && this.scrollParents.y && (this.scrollParents.y.scrollTop += t3, t3 = 0), (e63 || t3) && this.view.win.scrollBy(e63, t3), this.dragging === false && this.select(this.lastEvent);
  }
  select(e63) {
    let { view: t3 } = this, n2 = ya(this.atoms, this.style.get(e63, this.extend, this.multiple));
    (this.mustSelect || !n2.eq(t3.state.selection, this.dragging === false)) && this.view.dispatch({ selection: n2, userEvent: `select.pointer` }), this.mustSelect = false;
  }
  update(e63) {
    e63.transactions.some((e64) => e64.isUserEvent(`input.type`)) ? this.destroy() : this.style.update(e63) && setTimeout(() => this.select(this.lastEvent), 20);
  }
};
function Ja(e63, t3) {
  let n2 = e63.state.facet(qr);
  return n2.length ? n2[0](t3) : L.mac ? t3.metaKey : t3.ctrlKey;
}
function Ya(e63, t3) {
  let n2 = e63.state.facet(Jr);
  return n2.length ? n2[0](t3) : L.mac ? !t3.altKey : !t3.ctrlKey;
}
function Xa(e63, t3) {
  let { main: n2 } = e63.state.selection;
  if (n2.empty) return false;
  let r2 = er(e63.root);
  if (!r2 || r2.rangeCount == 0) return true;
  let i2 = r2.getRangeAt(0).getClientRects();
  for (let e64 = 0; e64 < i2.length; e64++) {
    let n3 = i2[e64];
    if (n3.left <= t3.clientX && n3.right >= t3.clientX && n3.top <= t3.clientY && n3.bottom >= t3.clientY) return true;
  }
  return false;
}
function Za(e63, t3) {
  if (!t3.bubbles) return true;
  if (t3.defaultPrevented) return false;
  for (let n2 = t3.target, r2; n2 != e63.contentDOM; n2 = n2.parentNode) if (!n2 || n2.nodeType == 11 || (r2 = U.get(n2)) && r2.isWidget() && !r2.isHidden && r2.widget.ignoreEvent(t3)) return false;
  return true;
}
var G = /* @__PURE__ */ Object.create(null), K = /* @__PURE__ */ Object.create(null), Qa = L.ie && L.ie_version < 15 || L.ios && L.webkit_version < 604;
function $a(e63) {
  let t3 = e63.dom.parentNode;
  if (!t3) return;
  let n2 = t3.appendChild(document.createElement(`textarea`));
  n2.style.cssText = `position: fixed; left: -10000px; top: 10px`, n2.focus(), setTimeout(() => {
    e63.focus(), n2.remove(), to(e63, n2.value);
  }, 50);
}
function eo(e63, t3, n2) {
  for (let r2 of e63.facet(t3)) n2 = r2(n2, e63);
  return n2;
}
function to(e63, t3) {
  t3 = eo(e63.state, ei, t3);
  let { state: n2 } = e63, r2, i2 = 1, a2 = n2.toText(t3), o2 = a2.lines == n2.selection.ranges.length;
  if (mo != null && n2.selection.ranges.every((e64) => e64.empty) && mo == a2.toString()) {
    let e64 = -1;
    r2 = n2.changeByRange((r3) => {
      let s2 = n2.doc.lineAt(r3.from);
      if (s2.from == e64) return { range: r3 };
      e64 = s2.from;
      let c2 = n2.toText((o2 ? a2.line(i2++).text : t3) + n2.lineBreak);
      return { changes: { from: s2.from, insert: c2 }, range: k.cursor(r3.from + c2.length) };
    });
  } else r2 = o2 ? n2.changeByRange((e64) => {
    let t4 = a2.line(i2++);
    return { changes: { from: e64.from, to: e64.to, insert: t4.text }, range: k.cursor(e64.from + t4.length) };
  }) : n2.replaceSelection(a2);
  e63.dispatch(r2, { userEvent: `input.paste`, scrollIntoView: true });
}
K.scroll = (e63) => {
  e63.inputState.lastScrollTop = e63.scrollDOM.scrollTop, e63.inputState.lastScrollLeft = e63.scrollDOM.scrollLeft;
}, G.keydown = (e63, t3) => (e63.inputState.setSelectionOrigin(`select`), t3.keyCode == 27 && e63.inputState.tabFocusMode != 0 && (e63.inputState.tabFocusMode = Date.now() + 2e3), false), K.touchstart = (e63, t3) => {
  e63.inputState.lastTouchTime = Date.now(), e63.inputState.setSelectionOrigin(`select.pointer`);
}, K.touchmove = (e63) => {
  e63.inputState.setSelectionOrigin(`select.pointer`);
}, G.mousedown = (e63, t3) => {
  if (e63.observer.flush(), e63.inputState.lastTouchTime > Date.now() - 2e3) return false;
  let n2 = null;
  for (let r2 of e63.state.facet(Yr)) if (n2 = r2(e63, t3), n2) break;
  if (!n2 && t3.button == 0 && (n2 = co(e63, t3)), n2) {
    let r2 = !e63.hasFocus;
    e63.inputState.startMouseSelection(new qa(e63, t3, n2, r2)), r2 && e63.observer.ignore(() => {
      gr(e63.contentDOM);
      let t4 = e63.root.activeElement;
      t4 && !t4.contains(e63.contentDOM) && t4.blur();
    });
    let i2 = e63.inputState.mouseSelection;
    if (i2) return i2.start(t3), i2.dragging === false;
  } else e63.inputState.setSelectionOrigin(`select.pointer`);
  return false;
};
function no(e63, t3, n2, r2) {
  if (r2 == 1) return k.cursor(t3, n2);
  if (r2 == 2) return da(e63.state, t3, n2);
  {
    let r3 = e63.docView.lineAt(t3, n2), i2 = e63.state.doc.lineAt(r3 ? r3.posAtEnd : t3), a2 = r3 ? r3.posAtStart : i2.from, o2 = r3 ? r3.posAtEnd : i2.to;
    return o2 < e63.state.doc.length && o2 == i2.to && o2++, k.range(a2, o2);
  }
}
var ro = L.ie && L.ie_version <= 11, io = null, ao = 0, oo = 0;
function so(e63) {
  if (!ro) return e63.detail;
  let t3 = io, n2 = oo;
  return io = e63, oo = Date.now(), ao = !t3 || n2 > Date.now() - 400 && Math.abs(t3.clientX - e63.clientX) < 2 && Math.abs(t3.clientY - e63.clientY) < 2 ? (ao + 1) % 3 : 1;
}
function co(e63, t3) {
  let n2 = e63.posAndSideAtCoords({ x: t3.clientX, y: t3.clientY }, false), r2 = so(t3), i2 = e63.state.selection;
  return { update(e64) {
    e64.docChanged && (n2.pos = e64.changes.mapPos(n2.pos), i2 = i2.map(e64.changes));
  }, get(t4, a2, o2) {
    let s2 = e63.posAndSideAtCoords({ x: t4.clientX, y: t4.clientY }, false), c2, l2 = no(e63, s2.pos, s2.assoc, r2);
    if (n2.pos != s2.pos && !a2) {
      let t5 = no(e63, n2.pos, n2.assoc, r2), i3 = Math.min(t5.from, l2.from), a3 = Math.max(t5.to, l2.to);
      l2 = i3 < l2.from ? k.range(i3, a3) : k.range(a3, i3);
    }
    return a2 ? i2.replaceRange(i2.main.extend(l2.from, l2.to)) : o2 && r2 == 1 && i2.ranges.length > 1 && (c2 = lo(i2, s2.pos)) ? c2 : o2 ? i2.addRange(l2) : k.create([l2]);
  } };
}
function lo(e63, t3) {
  for (let n2 = 0; n2 < e63.ranges.length; n2++) {
    let { from: r2, to: i2 } = e63.ranges[n2];
    if (r2 <= t3 && i2 >= t3) return k.create(e63.ranges.slice(0, n2).concat(e63.ranges.slice(n2 + 1)), e63.mainIndex == n2 ? 0 : e63.mainIndex - (e63.mainIndex > n2 ? 1 : 0));
  }
  return null;
}
G.dragstart = (e63, t3) => {
  let { selection: { main: n2 } } = e63.state;
  if (t3.target.draggable) {
    let r3 = e63.docView.tile.nearest(t3.target);
    if (r3 && r3.isWidget()) {
      let e64 = r3.posAtStart, t4 = e64 + r3.length;
      (e64 >= n2.to || t4 <= n2.from) && (n2 = k.range(e64, t4));
    }
  }
  let { inputState: r2 } = e63;
  return r2.mouseSelection && (r2.mouseSelection.dragging = true), r2.draggedContent = n2, t3.dataTransfer && (t3.dataTransfer.setData(`Text`, eo(e63.state, ti, e63.state.sliceDoc(n2.from, n2.to))), t3.dataTransfer.effectAllowed = `copyMove`), false;
}, G.dragend = (e63) => (e63.inputState.draggedContent = null, false);
function uo(e63, t3, n2, r2) {
  if (n2 = eo(e63.state, ei, n2), !n2) return;
  let i2 = e63.posAtCoords({ x: t3.clientX, y: t3.clientY }, false), { draggedContent: a2 } = e63.inputState, o2 = r2 && a2 && Ya(e63, t3) ? { from: a2.from, to: a2.to } : null, s2 = { from: i2, insert: n2 }, c2 = e63.state.changes(o2 ? [o2, s2] : s2);
  e63.focus(), e63.dispatch({ changes: c2, selection: { anchor: c2.mapPos(i2, -1), head: c2.mapPos(i2, 1) }, userEvent: o2 ? `move.drop` : `input.drop` }), e63.inputState.draggedContent = null;
}
G.drop = (e63, t3) => {
  if (!t3.dataTransfer) return false;
  if (e63.state.readOnly) return true;
  let n2 = t3.dataTransfer.files;
  if (n2 && n2.length) {
    let r2 = Array(n2.length), i2 = 0, a2 = () => {
      ++i2 == n2.length && uo(e63, t3, r2.filter((e64) => e64 != null).join(e63.state.lineBreak), false);
    };
    for (let e64 = 0; e64 < n2.length; e64++) {
      let t4 = new FileReader();
      t4.onerror = a2, t4.onload = () => {
        /[\x00-\x08\x0e-\x1f]{2}/.test(t4.result) || (r2[e64] = t4.result), a2();
      }, t4.readAsText(n2[e64]);
    }
    return true;
  } else {
    let n3 = t3.dataTransfer.getData(`Text`);
    if (n3) return uo(e63, t3, n3, true), true;
  }
  return false;
}, G.paste = (e63, t3) => {
  if (e63.state.readOnly) return true;
  e63.observer.flush();
  let n2 = Qa ? null : t3.clipboardData;
  return n2 ? (to(e63, n2.getData(`text/plain`) || n2.getData(`text/uri-list`)), true) : ($a(e63), false);
};
function fo(e63, t3) {
  let n2 = e63.dom.parentNode;
  if (!n2) return;
  let r2 = n2.appendChild(document.createElement(`textarea`));
  r2.style.cssText = `position: fixed; left: -10000px; top: 10px`, r2.value = t3, r2.focus(), r2.selectionEnd = t3.length, r2.selectionStart = 0, setTimeout(() => {
    r2.remove(), e63.focus();
  }, 50);
}
function po(e63) {
  let t3 = [], n2 = [], r2 = false;
  for (let r3 of e63.selection.ranges) r3.empty || (t3.push(e63.sliceDoc(r3.from, r3.to)), n2.push(r3));
  if (!t3.length) {
    let i2 = -1;
    for (let { from: r3 } of e63.selection.ranges) {
      let a2 = e63.doc.lineAt(r3);
      a2.number > i2 && (t3.push(a2.text), n2.push({ from: a2.from, to: Math.min(e63.doc.length, a2.to + 1) })), i2 = a2.number;
    }
    r2 = true;
  }
  return { text: eo(e63, ti, t3.join(e63.lineBreak)), ranges: n2, linewise: r2 };
}
var mo = null;
G.copy = G.cut = (e63, t3) => {
  let { text: n2, ranges: r2, linewise: i2 } = po(e63.state);
  if (!n2 && !i2) return false;
  mo = i2 ? n2 : null, t3.type == `cut` && !e63.state.readOnly && e63.dispatch({ changes: r2, scrollIntoView: true, userEvent: `delete.cut` });
  let a2 = Qa ? null : t3.clipboardData;
  return a2 ? (a2.clearData(), a2.setData(`text/plain`, n2), true) : (fo(e63, n2), false);
};
var ho = Mt.define();
function go(e63, t3) {
  let n2 = [];
  for (let r2 of e63.facet($r)) {
    let i2 = r2(e63, t3);
    i2 && n2.push(i2);
  }
  return n2.length ? e63.update({ effects: n2, annotations: ho.of(true) }) : null;
}
function _o(e63) {
  setTimeout(() => {
    let t3 = e63.hasFocus;
    if (t3 != e63.inputState.notifiedFocused) {
      let n2 = go(e63.state, t3);
      n2 ? e63.dispatch(n2) : e63.update([]);
    }
  }, 10);
}
K.focus = (e63) => {
  e63.inputState.lastFocusTime = Date.now(), !e63.scrollDOM.scrollTop && (e63.inputState.lastScrollTop || e63.inputState.lastScrollLeft) && (e63.scrollDOM.scrollTop = e63.inputState.lastScrollTop, e63.scrollDOM.scrollLeft = e63.inputState.lastScrollLeft), _o(e63);
}, K.blur = (e63) => {
  e63.observer.clearSelectionRange(), _o(e63);
}, K.compositionstart = K.compositionupdate = (e63) => {
  e63.observer.editContext || (e63.inputState.compositionFirstChange ?? (e63.inputState.compositionFirstChange = true), e63.inputState.composing < 0 && (e63.inputState.composing = 0));
}, K.compositionend = (e63) => {
  e63.observer.editContext || (e63.inputState.composing = -1, e63.inputState.compositionEndedAt = Date.now(), e63.inputState.compositionPendingKey = true, e63.inputState.compositionPendingChange = e63.observer.pendingRecords().length > 0, e63.inputState.compositionFirstChange = null, L.chrome && L.android ? e63.observer.flushSoon() : e63.inputState.compositionPendingChange ? Promise.resolve().then(() => e63.observer.flush()) : setTimeout(() => {
    e63.inputState.composing < 0 && e63.docView.hasComposition && e63.update([]);
  }, 50));
}, K.contextmenu = (e63) => {
  e63.inputState.lastContextMenu = Date.now();
}, G.beforeinput = (e63, t3) => {
  var _a3, _b;
  if ((t3.inputType == `insertText` || t3.inputType == `insertCompositionText`) && (e63.inputState.insertingText = t3.data, e63.inputState.insertingTextAt = Date.now()), t3.inputType == `insertReplacementText` && e63.observer.editContext) {
    let n3 = (_a3 = t3.dataTransfer) == null ? void 0 : _a3.getData(`text/plain`), r2 = t3.getTargetRanges();
    if (n3 && r2.length) {
      let t4 = r2[0];
      return Na(e63, { from: e63.posAtDOM(t4.startContainer, t4.startOffset), to: e63.posAtDOM(t4.endContainer, t4.endOffset), insert: e63.state.toText(n3) }, null), true;
    }
  }
  let n2;
  if (L.chrome && L.android && (n2 = Va.find((e64) => e64.inputType == t3.inputType)) && (e63.observer.delayAndroidKey(n2.key, n2.keyCode), n2.key == `Backspace` || n2.key == `Delete`)) {
    let t4 = ((_b = window.visualViewport) == null ? void 0 : _b.height) || 0;
    setTimeout(() => {
      var _a4;
      (((_a4 = window.visualViewport) == null ? void 0 : _a4.height) || 0) > t4 + 10 && e63.hasFocus && (e63.contentDOM.blur(), e63.focus());
    }, 100);
  }
  return L.ios && t3.inputType == `deleteContentForward` && e63.observer.flushSoon(), L.safari && t3.inputType == `insertText` && e63.inputState.composing >= 0 && setTimeout(() => K.compositionend(e63, t3), 20), false;
};
var vo = /* @__PURE__ */ new Set();
function yo(e63) {
  vo.has(e63) || (vo.add(e63), e63.addEventListener(`copy`, () => {
  }), e63.addEventListener(`cut`, () => {
  }));
}
var bo = [`pre-wrap`, `normal`, `pre-line`, `break-spaces`], xo = false;
function So() {
  xo = false;
}
var Co = class {
  constructor(e63) {
    this.lineWrapping = e63, this.doc = C.empty, this.heightSamples = {}, this.lineHeight = 14, this.charWidth = 7, this.textHeight = 14, this.lineLength = 30;
  }
  heightForGap(e63, t3) {
    let n2 = this.doc.lineAt(t3).number - this.doc.lineAt(e63).number + 1;
    return this.lineWrapping && (n2 += Math.max(0, Math.ceil((t3 - e63 - n2 * this.lineLength * 0.5) / this.lineLength))), this.lineHeight * n2;
  }
  heightForLine(e63) {
    return this.lineWrapping ? (1 + Math.max(0, Math.ceil((e63 - this.lineLength) / Math.max(1, this.lineLength - 5)))) * this.lineHeight : this.lineHeight;
  }
  setDoc(e63) {
    return this.doc = e63, this;
  }
  mustRefreshForWrapping(e63) {
    return bo.indexOf(e63) > -1 != this.lineWrapping;
  }
  mustRefreshForHeights(e63) {
    let t3 = false;
    for (let n2 = 0; n2 < e63.length; n2++) {
      let r2 = e63[n2];
      r2 < 0 ? n2++ : this.heightSamples[Math.floor(r2 * 10)] || (t3 = true, this.heightSamples[Math.floor(r2 * 10)] = true);
    }
    return t3;
  }
  refresh(e63, t3, n2, r2, i2, a2) {
    let o2 = bo.indexOf(e63) > -1, s2 = Math.round(t3) != Math.round(this.lineHeight) || this.lineWrapping != o2;
    if (this.lineWrapping = o2, this.lineHeight = t3, this.charWidth = n2, this.textHeight = r2, this.lineLength = i2, s2) {
      this.heightSamples = {};
      for (let e64 = 0; e64 < a2.length; e64++) {
        let t4 = a2[e64];
        t4 < 0 ? e64++ : this.heightSamples[Math.floor(t4 * 10)] = true;
      }
    }
    return s2;
  }
}, wo = class {
  constructor(e63, t3) {
    this.from = e63, this.heights = t3, this.index = 0;
  }
  get more() {
    return this.index < this.heights.length;
  }
}, To = class e43 {
  constructor(e63, t3, n2, r2, i2) {
    this.from = e63, this.length = t3, this.top = n2, this.height = r2, this._content = i2;
  }
  get type() {
    return typeof this._content == `number` ? R.Text : Array.isArray(this._content) ? this._content : this._content.type;
  }
  get to() {
    return this.from + this.length;
  }
  get bottom() {
    return this.top + this.height;
  }
  get widget() {
    return this._content instanceof Yn ? this._content.widget : null;
  }
  get widgetLineBreaks() {
    return typeof this._content == `number` ? this._content : 0;
  }
  join(t3) {
    let n2 = (Array.isArray(this._content) ? this._content : [this]).concat(Array.isArray(t3._content) ? t3._content : [t3]);
    return new e43(this.from, this.length + t3.length, this.top, this.height + t3.height, n2);
  }
}, q = (function(e63) {
  return e63[e63.ByPos = 0] = `ByPos`, e63[e63.ByHeight = 1] = `ByHeight`, e63[e63.ByPosNoHeight = 2] = `ByPosNoHeight`, e63;
})(q || (q = {})), Eo = 1e-3, J = class e44 {
  constructor(e63, t3, n2 = 2) {
    this.length = e63, this.height = t3, this.flags = n2;
  }
  get outdated() {
    return (this.flags & 2) > 0;
  }
  set outdated(e63) {
    this.flags = (e63 ? 2 : 0) | this.flags & -3;
  }
  setHeight(e63) {
    this.height != e63 && (Math.abs(this.height - e63) > Eo && (xo = true), this.height = e63);
  }
  replace(t3, n2, r2) {
    return e44.of(r2);
  }
  decomposeLeft(e63, t3) {
    t3.push(this);
  }
  decomposeRight(e63, t3) {
    t3.push(this);
  }
  applyChanges(e63, t3, n2, r2) {
    let i2 = this, a2 = n2.doc;
    for (let o2 = r2.length - 1; o2 >= 0; o2--) {
      let { fromA: s2, toA: c2, fromB: l2, toB: u2 } = r2[o2], d2 = i2.lineAt(s2, q.ByPosNoHeight, n2.setDoc(t3), 0, 0), f2 = d2.to >= c2 ? d2 : i2.lineAt(c2, q.ByPosNoHeight, n2, 0, 0);
      for (u2 += f2.to - c2, c2 = f2.to; o2 > 0 && d2.from <= r2[o2 - 1].toA; ) s2 = r2[o2 - 1].fromA, l2 = r2[o2 - 1].fromB, o2--, s2 < d2.from && (d2 = i2.lineAt(s2, q.ByPosNoHeight, n2, 0, 0));
      l2 += d2.from - s2, s2 = d2.from;
      let p2 = Fo.build(n2.setDoc(a2), e63, l2, u2);
      i2 = Do(i2, i2.replace(s2, c2, p2));
    }
    return i2.updateHeight(n2, 0);
  }
  static empty() {
    return new Ao(0, 0, 0);
  }
  static of(t3) {
    if (t3.length == 1) return t3[0];
    let n2 = 0, r2 = t3.length, i2 = 0, a2 = 0;
    for (; ; ) if (n2 == r2) if (i2 > a2 * 2) {
      let e63 = t3[n2 - 1];
      e63.break ? t3.splice(--n2, 1, e63.left, null, e63.right) : t3.splice(--n2, 1, e63.left, e63.right), r2 += 1 + e63.break, i2 -= e63.size;
    } else if (a2 > i2 * 2) {
      let e63 = t3[r2];
      e63.break ? t3.splice(r2, 1, e63.left, null, e63.right) : t3.splice(r2, 1, e63.left, e63.right), r2 += 2 + e63.break, a2 -= e63.size;
    } else break;
    else if (i2 < a2) {
      let e63 = t3[n2++];
      e63 && (i2 += e63.size);
    } else {
      let e63 = t3[--r2];
      e63 && (a2 += e63.size);
    }
    let o2 = 0;
    return t3[n2 - 1] == null ? (o2 = 1, n2--) : t3[n2] ?? (o2 = 1, r2++), new Mo(e44.of(t3.slice(0, n2)), o2, e44.of(t3.slice(r2)));
  }
};
function Do(e63, t3) {
  return e63 == t3 ? e63 : (e63.constructor != t3.constructor && (xo = true), t3);
}
J.prototype.size = 1;
var Oo = z.replace({}), ko = class extends J {
  constructor(e63, t3, n2) {
    super(e63, t3), this.deco = n2, this.spaceAbove = 0;
  }
  mainBlock(e63, t3) {
    return new To(t3, this.length, e63 + this.spaceAbove, this.height - this.spaceAbove, this.deco || 0);
  }
  blockAt(e63, t3, n2, r2) {
    return this.spaceAbove && e63 < n2 + this.spaceAbove ? new To(r2, 0, n2, this.spaceAbove, Oo) : this.mainBlock(n2, r2);
  }
  lineAt(e63, t3, n2, r2, i2) {
    let a2 = this.mainBlock(r2, i2);
    return this.spaceAbove ? this.blockAt(0, n2, r2, i2).join(a2) : a2;
  }
  forEachLine(e63, t3, n2, r2, i2, a2) {
    e63 <= i2 + this.length && t3 >= i2 && a2(this.lineAt(0, q.ByPos, n2, r2, i2));
  }
  setMeasuredHeight(e63) {
    let t3 = e63.heights[e63.index++];
    t3 < 0 ? (this.spaceAbove = -t3, t3 = e63.heights[e63.index++]) : this.spaceAbove = 0, this.setHeight(t3);
  }
  updateHeight(e63, t3 = 0, n2 = false, r2) {
    return r2 && r2.from <= t3 && r2.more && this.setMeasuredHeight(r2), this.outdated = false, this;
  }
  toString() {
    return `block(${this.length})`;
  }
}, Ao = class e45 extends ko {
  constructor(e63, t3, n2) {
    super(e63, t3, null), this.collapsed = 0, this.widgetHeight = 0, this.breaks = 0, this.spaceAbove = n2;
  }
  mainBlock(e63, t3) {
    return new To(t3, this.length, e63 + this.spaceAbove, this.height - this.spaceAbove, this.breaks);
  }
  replace(t3, n2, r2) {
    let i2 = r2[0];
    return r2.length == 1 && (i2 instanceof e45 || i2 instanceof jo && i2.flags & 4) && Math.abs(this.length - i2.length) < 10 ? (i2 instanceof jo ? i2 = new e45(i2.length, this.height, this.spaceAbove) : i2.height = this.height, this.outdated || (i2.outdated = false), i2) : J.of(r2);
  }
  updateHeight(e63, t3 = 0, n2 = false, r2) {
    return r2 && r2.from <= t3 && r2.more ? this.setMeasuredHeight(r2) : (n2 || this.outdated) && (this.spaceAbove = 0, this.setHeight(Math.max(this.widgetHeight, e63.heightForLine(this.length - this.collapsed)) + this.breaks * e63.lineHeight)), this.outdated = false, this;
  }
  toString() {
    return `line(${this.length}${this.collapsed ? -this.collapsed : ``}${this.widgetHeight ? `:` + this.widgetHeight : ``})`;
  }
}, jo = class e46 extends J {
  constructor(e63) {
    super(e63, 0);
  }
  heightMetrics(e63, t3) {
    let n2 = e63.doc.lineAt(t3).number, r2 = e63.doc.lineAt(t3 + this.length).number, i2 = r2 - n2 + 1, a2, o2 = 0;
    if (e63.lineWrapping) {
      let t4 = Math.min(this.height, e63.lineHeight * i2);
      a2 = t4 / i2, this.length > i2 + 1 && (o2 = (this.height - t4) / (this.length - i2 - 1));
    } else a2 = this.height / i2;
    return { firstLine: n2, lastLine: r2, perLine: a2, perChar: o2 };
  }
  blockAt(e63, t3, n2, r2) {
    let { firstLine: i2, lastLine: a2, perLine: o2, perChar: s2 } = this.heightMetrics(t3, r2);
    if (t3.lineWrapping) {
      let i3 = r2 + (e63 < t3.lineHeight ? 0 : Math.round(Math.max(0, Math.min(1, (e63 - n2) / this.height)) * this.length)), a3 = t3.doc.lineAt(i3), c2 = o2 + a3.length * s2, l2 = Math.max(n2, e63 - c2 / 2);
      return new To(a3.from, a3.length, l2, c2, 0);
    } else {
      let r3 = Math.max(0, Math.min(a2 - i2, Math.floor((e63 - n2) / o2))), { from: s3, length: c2 } = t3.doc.line(i2 + r3);
      return new To(s3, c2, n2 + o2 * r3, o2, 0);
    }
  }
  lineAt(e63, t3, n2, r2, i2) {
    if (t3 == q.ByHeight) return this.blockAt(e63, n2, r2, i2);
    if (t3 == q.ByPosNoHeight) {
      let { from: t4, to: r3 } = n2.doc.lineAt(e63);
      return new To(t4, r3 - t4, 0, 0, 0);
    }
    let { firstLine: a2, perLine: o2, perChar: s2 } = this.heightMetrics(n2, i2), c2 = n2.doc.lineAt(e63), l2 = o2 + c2.length * s2, u2 = c2.number - a2, d2 = r2 + o2 * u2 + s2 * (c2.from - i2 - u2);
    return new To(c2.from, c2.length, Math.max(r2, Math.min(d2, r2 + this.height - l2)), l2, 0);
  }
  forEachLine(e63, t3, n2, r2, i2, a2) {
    e63 = Math.max(e63, i2), t3 = Math.min(t3, i2 + this.length);
    let { firstLine: o2, perLine: s2, perChar: c2 } = this.heightMetrics(n2, i2);
    for (let l2 = e63, u2 = r2; l2 <= t3; ) {
      let t4 = n2.doc.lineAt(l2);
      if (l2 == e63) {
        let n3 = t4.number - o2;
        u2 += s2 * n3 + c2 * (e63 - i2 - n3);
      }
      let r3 = s2 + c2 * t4.length;
      a2(new To(t4.from, t4.length, u2, r3, 0)), u2 += r3, l2 = t4.to + 1;
    }
  }
  replace(t3, n2, r2) {
    let i2 = this.length - n2;
    if (i2 > 0) {
      let t4 = r2[r2.length - 1];
      t4 instanceof e46 ? r2[r2.length - 1] = new e46(t4.length + i2) : r2.push(null, new e46(i2 - 1));
    }
    if (t3 > 0) {
      let n3 = r2[0];
      n3 instanceof e46 ? r2[0] = new e46(t3 + n3.length) : r2.unshift(new e46(t3 - 1), null);
    }
    return J.of(r2);
  }
  decomposeLeft(t3, n2) {
    n2.push(new e46(t3 - 1), null);
  }
  decomposeRight(t3, n2) {
    n2.push(null, new e46(this.length - t3 - 1));
  }
  updateHeight(t3, n2 = 0, r2 = false, i2) {
    let a2 = n2 + this.length;
    if (i2 && i2.from <= n2 + this.length && i2.more) {
      let r3 = [], o2 = Math.max(n2, i2.from), s2 = -1;
      for (i2.from > n2 && r3.push(new e46(i2.from - n2 - 1).updateHeight(t3, n2)); o2 <= a2 && i2.more; ) {
        let e63 = t3.doc.lineAt(o2).length;
        r3.length && r3.push(null);
        let n3 = i2.heights[i2.index++], a3 = 0;
        n3 < 0 && (a3 = -n3, n3 = i2.heights[i2.index++]), s2 == -1 ? s2 = n3 : Math.abs(n3 - s2) >= Eo && (s2 = -2);
        let c3 = new Ao(e63, n3, a3);
        c3.outdated = false, r3.push(c3), o2 += e63 + 1;
      }
      o2 <= a2 && r3.push(null, new e46(a2 - o2).updateHeight(t3, o2));
      let c2 = J.of(r3);
      return (s2 < 0 || Math.abs(c2.height - this.height) >= Eo || Math.abs(s2 - this.heightMetrics(t3, n2).perLine) >= Eo) && (xo = true), Do(this, c2);
    } else (r2 || this.outdated) && (this.setHeight(t3.heightForGap(n2, n2 + this.length)), this.outdated = false);
    return this;
  }
  toString() {
    return `gap(${this.length})`;
  }
}, Mo = class extends J {
  constructor(e63, t3, n2) {
    super(e63.length + t3 + n2.length, e63.height + n2.height, t3 | (e63.outdated || n2.outdated ? 2 : 0)), this.left = e63, this.right = n2, this.size = e63.size + n2.size;
  }
  get break() {
    return this.flags & 1;
  }
  blockAt(e63, t3, n2, r2) {
    let i2 = n2 + this.left.height;
    return e63 < i2 ? this.left.blockAt(e63, t3, n2, r2) : this.right.blockAt(e63, t3, i2, r2 + this.left.length + this.break);
  }
  lineAt(e63, t3, n2, r2, i2) {
    let a2 = r2 + this.left.height, o2 = i2 + this.left.length + this.break, s2 = t3 == q.ByHeight ? e63 < a2 : e63 < o2, c2 = s2 ? this.left.lineAt(e63, t3, n2, r2, i2) : this.right.lineAt(e63, t3, n2, a2, o2);
    if (this.break || (s2 ? c2.to < o2 : c2.from > o2)) return c2;
    let l2 = t3 == q.ByPosNoHeight ? q.ByPosNoHeight : q.ByPos;
    return s2 ? c2.join(this.right.lineAt(o2, l2, n2, a2, o2)) : this.left.lineAt(o2, l2, n2, r2, i2).join(c2);
  }
  forEachLine(e63, t3, n2, r2, i2, a2) {
    let o2 = r2 + this.left.height, s2 = i2 + this.left.length + this.break;
    if (this.break) e63 < s2 && this.left.forEachLine(e63, t3, n2, r2, i2, a2), t3 >= s2 && this.right.forEachLine(e63, t3, n2, o2, s2, a2);
    else {
      let c2 = this.lineAt(s2, q.ByPos, n2, r2, i2);
      e63 < c2.from && this.left.forEachLine(e63, c2.from - 1, n2, r2, i2, a2), c2.to >= e63 && c2.from <= t3 && a2(c2), t3 > c2.to && this.right.forEachLine(c2.to + 1, t3, n2, o2, s2, a2);
    }
  }
  replace(e63, t3, n2) {
    let r2 = this.left.length + this.break;
    if (t3 < r2) return this.balanced(this.left.replace(e63, t3, n2), this.right);
    if (e63 > this.left.length) return this.balanced(this.left, this.right.replace(e63 - r2, t3 - r2, n2));
    let i2 = [];
    e63 > 0 && this.decomposeLeft(e63, i2);
    let a2 = i2.length;
    for (let e64 of n2) i2.push(e64);
    if (e63 > 0 && No(i2, a2 - 1), t3 < this.length) {
      let e64 = i2.length;
      this.decomposeRight(t3, i2), No(i2, e64);
    }
    return J.of(i2);
  }
  decomposeLeft(e63, t3) {
    let n2 = this.left.length;
    if (e63 <= n2) return this.left.decomposeLeft(e63, t3);
    t3.push(this.left), this.break && (n2++, e63 >= n2 && t3.push(null)), e63 > n2 && this.right.decomposeLeft(e63 - n2, t3);
  }
  decomposeRight(e63, t3) {
    let n2 = this.left.length, r2 = n2 + this.break;
    if (e63 >= r2) return this.right.decomposeRight(e63 - r2, t3);
    e63 < n2 && this.left.decomposeRight(e63, t3), this.break && e63 < r2 && t3.push(null), t3.push(this.right);
  }
  balanced(e63, t3) {
    return e63.size > 2 * t3.size || t3.size > 2 * e63.size ? J.of(this.break ? [e63, null, t3] : [e63, t3]) : (this.left = Do(this.left, e63), this.right = Do(this.right, t3), this.setHeight(e63.height + t3.height), this.outdated = e63.outdated || t3.outdated, this.size = e63.size + t3.size, this.length = e63.length + this.break + t3.length, this);
  }
  updateHeight(e63, t3 = 0, n2 = false, r2) {
    let { left: i2, right: a2 } = this, o2 = t3 + i2.length + this.break, s2 = null;
    return r2 && r2.from <= t3 + i2.length && r2.more ? s2 = i2 = i2.updateHeight(e63, t3, n2, r2) : i2.updateHeight(e63, t3, n2), r2 && r2.from <= o2 + a2.length && r2.more ? s2 = a2 = a2.updateHeight(e63, o2, n2, r2) : a2.updateHeight(e63, o2, n2), s2 ? this.balanced(i2, a2) : (this.height = this.left.height + this.right.height, this.outdated = false, this);
  }
  toString() {
    return this.left + (this.break ? ` ` : `-`) + this.right;
  }
};
function No(e63, t3) {
  let n2, r2;
  e63[t3] == null && (n2 = e63[t3 - 1]) instanceof jo && (r2 = e63[t3 + 1]) instanceof jo && e63.splice(t3 - 1, 3, new jo(n2.length + 1 + r2.length));
}
var Po = 5, Fo = class e47 {
  constructor(e63, t3) {
    this.pos = e63, this.oracle = t3, this.nodes = [], this.lineStart = -1, this.lineEnd = -1, this.covering = null, this.writtenTo = e63;
  }
  get isCovered() {
    return this.covering && this.nodes[this.nodes.length - 1] == this.covering;
  }
  span(e63, t3) {
    if (this.lineStart > -1) {
      let e64 = Math.min(t3, this.lineEnd), n2 = this.nodes[this.nodes.length - 1];
      n2 instanceof Ao ? n2.length += e64 - this.pos : (e64 > this.pos || !this.isCovered) && this.nodes.push(new Ao(e64 - this.pos, -1, 0)), this.writtenTo = e64, t3 > e64 && (this.nodes.push(null), this.writtenTo++, this.lineStart = -1);
    }
    this.pos = t3;
  }
  point(e63, t3, n2) {
    if (e63 < t3 || n2.heightRelevant) {
      let r2 = n2.widget ? n2.widget.estimatedHeight : 0, i2 = n2.widget ? n2.widget.lineBreaks : 0;
      r2 < 0 && (r2 = this.oracle.lineHeight);
      let a2 = t3 - e63;
      n2.block ? this.addBlock(new ko(a2, r2, n2)) : (a2 || i2 || r2 >= Po) && this.addLineDeco(r2, i2, a2);
    } else t3 > e63 && this.span(e63, t3);
    this.lineEnd > -1 && this.lineEnd < this.pos && (this.lineEnd = this.oracle.doc.lineAt(this.pos).to);
  }
  enterLine() {
    if (this.lineStart > -1) return;
    let { from: e63, to: t3 } = this.oracle.doc.lineAt(this.pos);
    this.lineStart = e63, this.lineEnd = t3, this.writtenTo < e63 && ((this.writtenTo < e63 - 1 || this.nodes[this.nodes.length - 1] == null) && this.nodes.push(this.blankContent(this.writtenTo, e63 - 1)), this.nodes.push(null)), this.pos > e63 && this.nodes.push(new Ao(this.pos - e63, -1, 0)), this.writtenTo = this.pos;
  }
  blankContent(e63, t3) {
    let n2 = new jo(t3 - e63);
    return this.oracle.doc.lineAt(e63).to == t3 && (n2.flags |= 4), n2;
  }
  ensureLine() {
    this.enterLine();
    let e63 = this.nodes.length ? this.nodes[this.nodes.length - 1] : null;
    if (e63 instanceof Ao) return e63;
    let t3 = new Ao(0, -1, 0);
    return this.nodes.push(t3), t3;
  }
  addBlock(e63) {
    this.enterLine();
    let t3 = e63.deco;
    t3 && t3.startSide > 0 && !this.isCovered && this.ensureLine(), this.nodes.push(e63), this.writtenTo = this.pos += e63.length, t3 && t3.endSide > 0 && (this.covering = e63);
  }
  addLineDeco(e63, t3, n2) {
    let r2 = this.ensureLine();
    r2.length += n2, r2.collapsed += n2, r2.widgetHeight = Math.max(r2.widgetHeight, e63), r2.breaks += t3, this.writtenTo = this.pos += n2;
  }
  finish(e63) {
    let t3 = this.nodes.length == 0 ? null : this.nodes[this.nodes.length - 1];
    this.lineStart > -1 && !(t3 instanceof Ao) && !this.isCovered ? this.nodes.push(new Ao(0, -1, 0)) : (this.writtenTo < this.pos || t3 == null) && this.nodes.push(this.blankContent(this.writtenTo, this.pos));
    let n2 = e63;
    for (let e64 of this.nodes) e64 instanceof Ao && e64.updateHeight(this.oracle, n2), n2 += e64 ? e64.length : 1;
    return this.nodes;
  }
  static build(t3, n2, r2, i2) {
    let a2 = new e47(r2, t3);
    return P.spans(n2, r2, i2, a2, 0), a2.finish(r2);
  }
};
function Io(e63, t3, n2) {
  let r2 = new Lo();
  return P.compare(e63, t3, n2, r2, 0), r2.changes;
}
var Lo = class {
  constructor() {
    this.changes = [];
  }
  compareRange() {
  }
  comparePoint(e63, t3, n2, r2) {
    (e63 < t3 || n2 && n2.heightRelevant || r2 && r2.heightRelevant) && Qn(e63, t3, this.changes, 5);
  }
};
function Ro(e63, t3) {
  let n2 = e63.getBoundingClientRect(), r2 = e63.ownerDocument, i2 = r2.defaultView || window, a2 = Math.max(0, n2.left), o2 = Math.min(i2.innerWidth, n2.right), s2 = Math.max(0, n2.top), c2 = Math.min(i2.innerHeight, n2.bottom);
  for (let t4 = e63.parentNode; t4 && t4 != r2.body; ) if (t4.nodeType == 1) {
    let n3 = t4, r3 = window.getComputedStyle(n3);
    if ((n3.scrollHeight > n3.clientHeight || n3.scrollWidth > n3.clientWidth) && r3.overflow != `visible`) {
      let r4 = n3.getBoundingClientRect();
      a2 = Math.max(a2, r4.left), o2 = Math.min(o2, r4.right), s2 = Math.max(s2, r4.top), c2 = Math.min(t4 == e63.parentNode ? i2.innerHeight : c2, r4.bottom);
    }
    t4 = r3.position == `absolute` || r3.position == `fixed` ? n3.offsetParent : n3.parentNode;
  } else if (t4.nodeType == 11) t4 = t4.host;
  else break;
  return { left: a2 - n2.left, right: Math.max(a2, o2) - n2.left, top: s2 - (n2.top + t3), bottom: Math.max(s2, c2) - (n2.top + t3) };
}
function zo(e63) {
  let t3 = e63.getBoundingClientRect(), n2 = e63.ownerDocument.defaultView || window;
  return t3.left < n2.innerWidth && t3.right > 0 && t3.top < n2.innerHeight && t3.bottom > 0;
}
function Bo(e63, t3) {
  let n2 = e63.getBoundingClientRect();
  return { left: 0, right: n2.right - n2.left, top: t3, bottom: n2.bottom - (n2.top + t3) };
}
var Vo = class {
  constructor(e63, t3, n2, r2) {
    this.from = e63, this.to = t3, this.size = n2, this.displaySize = r2;
  }
  static same(e63, t3) {
    if (e63.length != t3.length) return false;
    for (let n2 = 0; n2 < e63.length; n2++) {
      let r2 = e63[n2], i2 = t3[n2];
      if (r2.from != i2.from || r2.to != i2.to || r2.size != i2.size) return false;
    }
    return true;
  }
  draw(e63, t3) {
    return z.replace({ widget: new Ho(this.displaySize * (t3 ? e63.scaleY : e63.scaleX), t3) }).range(this.from, this.to);
  }
}, Ho = class extends Kn {
  constructor(e63, t3) {
    super(), this.size = e63, this.vertical = t3;
  }
  eq(e63) {
    return e63.size == this.size && e63.vertical == this.vertical;
  }
  toDOM() {
    let e63 = document.createElement(`div`);
    return this.vertical ? e63.style.height = this.size + `px` : (e63.style.width = this.size + `px`, e63.style.height = `2px`, e63.style.display = `inline-block`), e63;
  }
  get estimatedHeight() {
    return this.vertical ? this.size : -1;
  }
}, Uo = class {
  constructor(e63) {
    this.state = e63, this.pixelViewport = { left: 0, right: window.innerWidth, top: 0, bottom: 0 }, this.inView = true, this.paddingTop = 0, this.paddingBottom = 0, this.contentDOMWidth = 0, this.contentDOMHeight = 0, this.editorHeight = 0, this.editorWidth = 0, this.scrollTop = 0, this.scrolledToBottom = false, this.scaleX = 1, this.scaleY = 1, this.scrollAnchorPos = 0, this.scrollAnchorHeight = -1, this.scaler = Yo, this.scrollTarget = null, this.printing = false, this.mustMeasureContent = true, this.defaultTextDirection = B.LTR, this.visibleRanges = [], this.mustEnforceCursorAssoc = false, this.heightOracle = new Co(e63.facet(mi).some((e64) => typeof e64 != `function` && e64.class == `cm-lineWrapping`)), this.stateDeco = Xo(e63), this.heightMap = J.empty().applyChanges(this.stateDeco, C.empty, this.heightOracle.setDoc(e63.doc), [new wi(0, 0, 0, e63.doc.length)]);
    for (let e64 = 0; e64 < 2 && (this.viewport = this.getViewport(0, null), this.updateForViewport()); e64++) ;
    this.updateViewportLines(), this.lineGaps = this.ensureLineGaps([]), this.lineGapDeco = z.set(this.lineGaps.map((e64) => e64.draw(this, false))), this.computeVisibleRanges();
  }
  updateForViewport() {
    let e63 = [this.viewport], { main: t3 } = this.state.selection;
    for (let n2 = 0; n2 <= 1; n2++) {
      let r2 = n2 ? t3.head : t3.anchor;
      if (!e63.some(({ from: e64, to: t4 }) => r2 >= e64 && r2 <= t4)) {
        let { from: t4, to: n3 } = this.lineBlockAt(r2);
        e63.push(new Wo(t4, n3));
      }
    }
    return this.viewports = e63.sort((e64, t4) => e64.from - t4.from), this.updateScaler();
  }
  updateScaler() {
    let e63 = this.scaler;
    return this.scaler = this.heightMap.height <= 7e6 ? Yo : new Zo(this.heightOracle, this.heightMap, this.viewports), e63.eq(this.scaler) ? 0 : 2;
  }
  updateViewportLines() {
    this.viewportLines = [], this.heightMap.forEachLine(this.viewport.from, this.viewport.to, this.heightOracle.setDoc(this.state.doc), 0, 0, (e63) => {
      this.viewportLines.push(Qo(e63, this.scaler));
    });
  }
  update(e63, t3 = null) {
    this.state = e63.state;
    let n2 = this.stateDeco;
    this.stateDeco = Xo(this.state);
    let r2 = e63.changedRanges, i2 = wi.extendWithRanges(r2, Io(n2, this.stateDeco, e63 ? e63.changes : D.empty(this.state.doc.length))), a2 = this.heightMap.height, o2 = this.scrolledToBottom ? null : this.scrollAnchorAt(this.scrollTop);
    So(), this.heightMap = this.heightMap.applyChanges(this.stateDeco, e63.startState.doc, this.heightOracle.setDoc(this.state.doc), i2), (this.heightMap.height != a2 || xo) && (e63.flags |= 2), o2 ? (this.scrollAnchorPos = e63.changes.mapPos(o2.from, -1), this.scrollAnchorHeight = o2.top) : (this.scrollAnchorPos = -1, this.scrollAnchorHeight = a2);
    let s2 = i2.length ? this.mapViewport(this.viewport, e63.changes) : this.viewport;
    (t3 && (t3.range.head < s2.from || t3.range.head > s2.to) || !this.viewportIsAppropriate(s2)) && (s2 = this.getViewport(0, t3));
    let c2 = s2.from != this.viewport.from || s2.to != this.viewport.to;
    this.viewport = s2, e63.flags |= this.updateForViewport(), (c2 || !e63.changes.empty || e63.flags & 2) && this.updateViewportLines(), (this.lineGaps.length || this.viewport.to - this.viewport.from > 4e3) && this.updateLineGaps(this.ensureLineGaps(this.mapLineGaps(this.lineGaps, e63.changes))), e63.flags |= this.computeVisibleRanges(e63.changes), t3 && (this.scrollTarget = t3), !this.mustEnforceCursorAssoc && (e63.selectionSet || e63.focusChanged) && e63.view.lineWrapping && e63.state.selection.main.empty && e63.state.selection.main.assoc && !e63.state.facet(ri) && (this.mustEnforceCursorAssoc = true);
  }
  measure(e63) {
    let t3 = e63.contentDOM, n2 = window.getComputedStyle(t3), r2 = this.heightOracle, i2 = n2.whiteSpace;
    this.defaultTextDirection = n2.direction == `rtl` ? B.RTL : B.LTR;
    let a2 = this.heightOracle.mustRefreshForWrapping(i2), o2 = t3.getBoundingClientRect(), s2 = a2 || this.mustMeasureContent || this.contentDOMHeight != o2.height;
    this.contentDOMHeight = o2.height, this.mustMeasureContent = false;
    let c2 = 0, l2 = 0;
    if (o2.width && o2.height) {
      let { scaleX: e64, scaleY: n3 } = dr(t3, o2);
      (e64 > 5e-3 && Math.abs(this.scaleX - e64) > 5e-3 || n3 > 5e-3 && Math.abs(this.scaleY - n3) > 5e-3) && (this.scaleX = e64, this.scaleY = n3, c2 |= 16, a2 = s2 = true);
    }
    let u2 = (parseInt(n2.paddingTop) || 0) * this.scaleY, d2 = (parseInt(n2.paddingBottom) || 0) * this.scaleY;
    (this.paddingTop != u2 || this.paddingBottom != d2) && (this.paddingTop = u2, this.paddingBottom = d2, c2 |= 18), this.editorWidth != e63.scrollDOM.clientWidth && (r2.lineWrapping && (s2 = true), this.editorWidth = e63.scrollDOM.clientWidth, c2 |= 16);
    let f2 = e63.scrollDOM.scrollTop * this.scaleY;
    this.scrollTop != f2 && (this.scrollAnchorHeight = -1, this.scrollTop = f2), this.scrolledToBottom = Sr(e63.scrollDOM);
    let p2 = (this.printing ? Bo : Ro)(t3, this.paddingTop), m2 = p2.top - this.pixelViewport.top, h2 = p2.bottom - this.pixelViewport.bottom;
    this.pixelViewport = p2;
    let g2 = this.pixelViewport.bottom > this.pixelViewport.top && this.pixelViewport.right > this.pixelViewport.left;
    if (g2 != this.inView && (this.inView = g2, g2 && (s2 = true)), !this.inView && !this.scrollTarget && !zo(e63.dom)) return 0;
    let _2 = o2.width;
    if ((this.contentDOMWidth != _2 || this.editorHeight != e63.scrollDOM.clientHeight) && (this.contentDOMWidth = o2.width, this.editorHeight = e63.scrollDOM.clientHeight, c2 |= 16), s2) {
      let t4 = e63.docView.measureVisibleLineHeights(this.viewport);
      if (r2.mustRefreshForHeights(t4) && (a2 = true), a2 || r2.lineWrapping && Math.abs(_2 - this.contentDOMWidth) > r2.charWidth) {
        let { lineHeight: n3, charWidth: o3, textHeight: s3 } = e63.docView.measureTextSize();
        a2 = n3 > 0 && r2.refresh(i2, n3, o3, s3, Math.max(5, _2 / o3), t4), a2 && (e63.docView.minWidth = 0, c2 |= 16);
      }
      m2 > 0 && h2 > 0 ? l2 = Math.max(m2, h2) : m2 < 0 && h2 < 0 && (l2 = Math.min(m2, h2)), So();
      for (let n3 of this.viewports) {
        let i3 = n3.from == this.viewport.from ? t4 : e63.docView.measureVisibleLineHeights(n3);
        this.heightMap = (a2 ? J.empty().applyChanges(this.stateDeco, C.empty, this.heightOracle, [new wi(0, 0, 0, e63.state.doc.length)]) : this.heightMap).updateHeight(r2, 0, a2, new wo(n3.from, i3));
      }
      xo && (c2 |= 2);
    }
    let v2 = !this.viewportIsAppropriate(this.viewport, l2) || this.scrollTarget && (this.scrollTarget.range.head < this.viewport.from || this.scrollTarget.range.head > this.viewport.to);
    return v2 && (c2 & 2 && (c2 |= this.updateScaler()), this.viewport = this.getViewport(l2, this.scrollTarget), c2 |= this.updateForViewport()), (c2 & 2 || v2) && this.updateViewportLines(), (this.lineGaps.length || this.viewport.to - this.viewport.from > 4e3) && this.updateLineGaps(this.ensureLineGaps(a2 ? [] : this.lineGaps, e63)), c2 |= this.computeVisibleRanges(), this.mustEnforceCursorAssoc && (this.mustEnforceCursorAssoc = false, e63.docView.enforceCursorAssoc()), c2;
  }
  get visibleTop() {
    return this.scaler.fromDOM(this.pixelViewport.top);
  }
  get visibleBottom() {
    return this.scaler.fromDOM(this.pixelViewport.bottom);
  }
  getViewport(e63, t3) {
    let n2 = 0.5 - Math.max(-0.5, Math.min(0.5, e63 / 1e3 / 2)), r2 = this.heightMap, i2 = this.heightOracle, { visibleTop: a2, visibleBottom: o2 } = this, s2 = new Wo(r2.lineAt(a2 - n2 * 1e3, q.ByHeight, i2, 0, 0).from, r2.lineAt(o2 + (1 - n2) * 1e3, q.ByHeight, i2, 0, 0).to);
    if (t3) {
      let { head: e64 } = t3.range;
      if (e64 < s2.from || e64 > s2.to) {
        let n3 = Math.min(this.editorHeight, this.pixelViewport.bottom - this.pixelViewport.top), a3 = r2.lineAt(e64, q.ByPos, i2, 0, 0), o3;
        o3 = t3.y == `center` ? (a3.top + a3.bottom) / 2 - n3 / 2 : t3.y == `start` || t3.y == `nearest` && e64 < s2.from ? a3.top : a3.bottom - n3, s2 = new Wo(r2.lineAt(o3 - 1e3 / 2, q.ByHeight, i2, 0, 0).from, r2.lineAt(o3 + n3 + 1e3 / 2, q.ByHeight, i2, 0, 0).to);
      }
    }
    return s2;
  }
  mapViewport(e63, t3) {
    let n2 = t3.mapPos(e63.from, -1), r2 = t3.mapPos(e63.to, 1);
    return new Wo(this.heightMap.lineAt(n2, q.ByPos, this.heightOracle, 0, 0).from, this.heightMap.lineAt(r2, q.ByPos, this.heightOracle, 0, 0).to);
  }
  viewportIsAppropriate({ from: e63, to: t3 }, n2 = 0) {
    if (!this.inView) return true;
    let { top: r2 } = this.heightMap.lineAt(e63, q.ByPos, this.heightOracle, 0, 0), { bottom: i2 } = this.heightMap.lineAt(t3, q.ByPos, this.heightOracle, 0, 0), { visibleTop: a2, visibleBottom: o2 } = this;
    return (e63 == 0 || r2 <= a2 - Math.max(10, Math.min(-n2, 250))) && (t3 == this.state.doc.length || i2 >= o2 + Math.max(10, Math.min(n2, 250))) && r2 > a2 - 2 * 1e3 && i2 < o2 + 2 * 1e3;
  }
  mapLineGaps(e63, t3) {
    if (!e63.length || t3.empty) return e63;
    let n2 = [];
    for (let r2 of e63) t3.touchesRange(r2.from, r2.to) || n2.push(new Vo(t3.mapPos(r2.from), t3.mapPos(r2.to), r2.size, r2.displaySize));
    return n2;
  }
  ensureLineGaps(e63, t3) {
    let n2 = this.heightOracle.lineWrapping, r2 = n2 ? 1e4 : 2e3, i2 = r2 >> 1, a2 = r2 << 1;
    if (this.defaultTextDirection != B.LTR && !n2) return [];
    let o2 = [], s2 = (r3, a3, c3, l2) => {
      if (a3 - r3 < i2) return;
      let u2 = this.state.selection.main, d2 = [u2.from];
      u2.empty || d2.push(u2.to);
      for (let e64 of d2) if (e64 > r3 && e64 < a3) {
        s2(r3, e64 - 10, c3, l2), s2(e64 + 10, a3, c3, l2);
        return;
      }
      let f2 = Jo(e63, (e64) => e64.from >= c3.from && e64.to <= c3.to && Math.abs(e64.from - r3) < i2 && Math.abs(e64.to - a3) < i2 && !d2.some((t4) => e64.from < t4 && e64.to > t4));
      if (!f2) {
        if (a3 < c3.to && t3 && n2 && t3.visibleRanges.some((e65) => e65.from <= a3 && e65.to >= a3)) {
          let e65 = t3.moveToLineBoundary(k.cursor(a3), false, true).head;
          e65 > r3 && (a3 = e65);
        }
        let e64 = this.gapSize(c3, r3, a3, l2);
        f2 = new Vo(r3, a3, e64, n2 || e64 < 2e6 ? e64 : 2e6);
      }
      o2.push(f2);
    }, c2 = (t4) => {
      if (t4.length < a2 || t4.type != R.Text) return;
      let i3 = Go(t4.from, t4.to, this.stateDeco);
      if (i3.total < a2) return;
      let o3 = this.scrollTarget ? this.scrollTarget.range.head : null, c3, l2;
      if (n2) {
        let e64 = r2 / this.heightOracle.lineLength * this.heightOracle.lineHeight, n3, a3;
        if (o3 != null) {
          let r3 = qo(i3, o3), s3 = ((this.visibleBottom - this.visibleTop) / 2 + e64) / t4.height;
          n3 = r3 - s3, a3 = r3 + s3;
        } else n3 = (this.visibleTop - t4.top - e64) / t4.height, a3 = (this.visibleBottom - t4.top + e64) / t4.height;
        c3 = Ko(i3, n3), l2 = Ko(i3, a3);
      } else {
        let n3 = i3.total * this.heightOracle.charWidth, a3 = r2 * this.heightOracle.charWidth, s3 = 0;
        if (n3 > 2e6) for (let n4 of e63) n4.from >= t4.from && n4.from < t4.to && n4.size != n4.displaySize && n4.from * this.heightOracle.charWidth + s3 < this.pixelViewport.left && (s3 = n4.size - n4.displaySize);
        let u2 = this.pixelViewport.left + s3, d2 = this.pixelViewport.right + s3, f2, p2;
        if (o3 != null) {
          let e64 = qo(i3, o3), t5 = ((d2 - u2) / 2 + a3) / n3;
          f2 = e64 - t5, p2 = e64 + t5;
        } else f2 = (u2 - a3) / n3, p2 = (d2 + a3) / n3;
        c3 = Ko(i3, f2), l2 = Ko(i3, p2);
      }
      c3 > t4.from && s2(t4.from, c3, t4, i3), l2 < t4.to && s2(l2, t4.to, t4, i3);
    };
    for (let e64 of this.viewportLines) Array.isArray(e64.type) ? e64.type.forEach(c2) : c2(e64);
    return o2;
  }
  gapSize(e63, t3, n2, r2) {
    let i2 = qo(r2, n2) - qo(r2, t3);
    return this.heightOracle.lineWrapping ? e63.height * i2 : r2.total * this.heightOracle.charWidth * i2;
  }
  updateLineGaps(e63) {
    Vo.same(e63, this.lineGaps) || (this.lineGaps = e63, this.lineGapDeco = z.set(e63.map((e64) => e64.draw(this, this.heightOracle.lineWrapping))));
  }
  computeVisibleRanges(e63) {
    let t3 = this.stateDeco;
    this.lineGaps.length && (t3 = t3.concat(this.lineGapDeco));
    let n2 = [];
    P.spans(t3, this.viewport.from, this.viewport.to, { span(e64, t4) {
      n2.push({ from: e64, to: t4 });
    }, point() {
    } }, 20);
    let r2 = 0;
    if (n2.length != this.visibleRanges.length) r2 = 12;
    else for (let t4 = 0; t4 < n2.length && !(r2 & 8); t4++) {
      let i2 = this.visibleRanges[t4], a2 = n2[t4];
      (i2.from != a2.from || i2.to != a2.to) && (r2 |= 4, e63 && e63.mapPos(i2.from, -1) == a2.from && e63.mapPos(i2.to, 1) == a2.to || (r2 |= 8));
    }
    return this.visibleRanges = n2, r2;
  }
  lineBlockAt(e63) {
    return e63 >= this.viewport.from && e63 <= this.viewport.to && this.viewportLines.find((t3) => t3.from <= e63 && t3.to >= e63) || Qo(this.heightMap.lineAt(e63, q.ByPos, this.heightOracle, 0, 0), this.scaler);
  }
  lineBlockAtHeight(e63) {
    return e63 >= this.viewportLines[0].top && e63 <= this.viewportLines[this.viewportLines.length - 1].bottom && this.viewportLines.find((t3) => t3.top <= e63 && t3.bottom >= e63) || Qo(this.heightMap.lineAt(this.scaler.fromDOM(e63), q.ByHeight, this.heightOracle, 0, 0), this.scaler);
  }
  scrollAnchorAt(e63) {
    let t3 = this.lineBlockAtHeight(e63 + 8);
    return t3.from >= this.viewport.from || this.viewportLines[0].top - e63 > 200 ? t3 : this.viewportLines[0];
  }
  elementAtHeight(e63) {
    return Qo(this.heightMap.blockAt(this.scaler.fromDOM(e63), this.heightOracle, 0, 0), this.scaler);
  }
  get docHeight() {
    return this.scaler.toDOM(this.heightMap.height);
  }
  get contentHeight() {
    return this.docHeight + this.paddingTop + this.paddingBottom;
  }
}, Wo = class {
  constructor(e63, t3) {
    this.from = e63, this.to = t3;
  }
};
function Go(e63, t3, n2) {
  let r2 = [], i2 = e63, a2 = 0;
  return P.spans(n2, e63, t3, { span() {
  }, point(e64, t4) {
    e64 > i2 && (r2.push({ from: i2, to: e64 }), a2 += e64 - i2), i2 = t4;
  } }, 20), i2 < t3 && (r2.push({ from: i2, to: t3 }), a2 += t3 - i2), { total: a2, ranges: r2 };
}
function Ko({ total: e63, ranges: t3 }, n2) {
  if (n2 <= 0) return t3[0].from;
  if (n2 >= 1) return t3[t3.length - 1].to;
  let r2 = Math.floor(e63 * n2);
  for (let e64 = 0; ; e64++) {
    let { from: n3, to: i2 } = t3[e64], a2 = i2 - n3;
    if (r2 <= a2) return n3 + r2;
    r2 -= a2;
  }
}
function qo(e63, t3) {
  let n2 = 0;
  for (let { from: r2, to: i2 } of e63.ranges) {
    if (t3 <= i2) {
      n2 += t3 - r2;
      break;
    }
    n2 += i2 - r2;
  }
  return n2 / e63.total;
}
function Jo(e63, t3) {
  for (let n2 of e63) if (t3(n2)) return n2;
}
var Yo = { toDOM(e63) {
  return e63;
}, fromDOM(e63) {
  return e63;
}, scale: 1, eq(e63) {
  return e63 == this;
} };
function Xo(e63) {
  let t3 = e63.facet(hi).filter((e64) => typeof e64 != `function`), n2 = e63.facet(_i).filter((e64) => typeof e64 != `function`);
  return n2.length && t3.push(P.join(n2)), t3;
}
var Zo = class e48 {
  constructor(e63, t3, n2) {
    let r2 = 0, i2 = 0, a2 = 0;
    this.viewports = n2.map(({ from: n3, to: i3 }) => {
      let a3 = t3.lineAt(n3, q.ByPos, e63, 0, 0).top, o2 = t3.lineAt(i3, q.ByPos, e63, 0, 0).bottom;
      return r2 += o2 - a3, { from: n3, to: i3, top: a3, bottom: o2, domTop: 0, domBottom: 0 };
    }), this.scale = (7e6 - r2) / (t3.height - r2);
    for (let e64 of this.viewports) e64.domTop = a2 + (e64.top - i2) * this.scale, a2 = e64.domBottom = e64.domTop + (e64.bottom - e64.top), i2 = e64.bottom;
  }
  toDOM(e63) {
    for (let t3 = 0, n2 = 0, r2 = 0; ; t3++) {
      let i2 = t3 < this.viewports.length ? this.viewports[t3] : null;
      if (!i2 || e63 < i2.top) return r2 + (e63 - n2) * this.scale;
      if (e63 <= i2.bottom) return i2.domTop + (e63 - i2.top);
      n2 = i2.bottom, r2 = i2.domBottom;
    }
  }
  fromDOM(e63) {
    for (let t3 = 0, n2 = 0, r2 = 0; ; t3++) {
      let i2 = t3 < this.viewports.length ? this.viewports[t3] : null;
      if (!i2 || e63 < i2.domTop) return n2 + (e63 - r2) / this.scale;
      if (e63 <= i2.domBottom) return i2.top + (e63 - i2.domTop);
      n2 = i2.bottom, r2 = i2.domBottom;
    }
  }
  eq(t3) {
    return t3 instanceof e48 ? this.scale == t3.scale && this.viewports.length == t3.viewports.length && this.viewports.every((e63, n2) => e63.from == t3.viewports[n2].from && e63.to == t3.viewports[n2].to) : false;
  }
};
function Qo(e63, t3) {
  if (t3.scale == 1) return e63;
  let n2 = t3.toDOM(e63.top), r2 = t3.toDOM(e63.bottom);
  return new To(e63.from, e63.length, n2, r2 - n2, Array.isArray(e63._content) ? e63._content.map((e64) => Qo(e64, t3)) : e63._content);
}
var $o = A.define({ combine: (e63) => e63.join(` `) }), es = A.define({ combine: (e63) => e63.indexOf(true) > -1 }), ts = yn.newName(), ns = yn.newName(), rs = yn.newName(), is = { "&light": `.` + ns, "&dark": `.` + rs };
function as(e63, t3, n2) {
  return new yn(t3, { finish(t4) {
    return /&/.test(t4) ? t4.replace(/&\w*/, (t5) => {
      if (t5 == `&`) return e63;
      if (!n2 || !n2[t5]) throw RangeError(`Unsupported selector: ${t5}`);
      return n2[t5];
    }) : e63 + ` ` + t4;
  } });
}
var os = as(`.` + ts, { "&": { position: `relative !important`, boxSizing: `border-box`, "&.cm-focused": { outline: `1px dotted #212121` }, display: `flex !important`, flexDirection: `column` }, ".cm-scroller": { display: `flex !important`, alignItems: `flex-start !important`, fontFamily: `monospace`, lineHeight: 1.4, height: `100%`, overflowX: `auto`, position: `relative`, zIndex: 0, overflowAnchor: `none` }, ".cm-content": { margin: 0, flexGrow: 2, flexShrink: 0, display: `block`, whiteSpace: `pre`, wordWrap: `normal`, boxSizing: `border-box`, minHeight: `100%`, padding: `4px 0`, outline: `none`, "&[contenteditable=true]": { WebkitUserModify: `read-write-plaintext-only` } }, ".cm-lineWrapping": { whiteSpace_fallback: `pre-wrap`, whiteSpace: `break-spaces`, wordBreak: `break-word`, overflowWrap: `anywhere`, flexShrink: 1 }, "&light .cm-content": { caretColor: `black` }, "&dark .cm-content": { caretColor: `white` }, ".cm-line": { display: `block`, padding: `0 2px 0 6px` }, ".cm-layer": { position: `absolute`, left: 0, top: 0, contain: `size style`, "& > *": { position: `absolute` } }, "&light .cm-selectionBackground": { background: `#d9d9d9` }, "&dark .cm-selectionBackground": { background: `#222` }, "&light.cm-focused > .cm-scroller > .cm-selectionLayer .cm-selectionBackground": { background: `#d7d4f0` }, "&dark.cm-focused > .cm-scroller > .cm-selectionLayer .cm-selectionBackground": { background: `#233` }, ".cm-cursorLayer": { pointerEvents: `none` }, "&.cm-focused > .cm-scroller > .cm-cursorLayer": { animation: `steps(1) cm-blink 1.2s infinite` }, "@keyframes cm-blink": { "0%": {}, "50%": { opacity: 0 }, "100%": {} }, "@keyframes cm-blink2": { "0%": {}, "50%": { opacity: 0 }, "100%": {} }, ".cm-cursor, .cm-dropCursor": { borderLeft: `1.2px solid black`, marginLeft: `-0.6px`, pointerEvents: `none` }, ".cm-cursor": { display: `none` }, "&dark .cm-cursor": { borderLeftColor: `#ddd` }, ".cm-dropCursor": { position: `absolute` }, "&.cm-focused > .cm-scroller > .cm-cursorLayer .cm-cursor": { display: `block` }, ".cm-iso": { unicodeBidi: `isolate` }, ".cm-announced": { position: `fixed`, top: `-10000px` }, "@media print": { ".cm-announced": { display: `none` } }, "&light .cm-activeLine": { backgroundColor: `#cceeff44` }, "&dark .cm-activeLine": { backgroundColor: `#99eeff33` }, "&light .cm-specialChar": { color: `red` }, "&dark .cm-specialChar": { color: `#f78` }, ".cm-gutters": { flexShrink: 0, display: `flex`, height: `100%`, boxSizing: `border-box`, zIndex: 200 }, ".cm-gutters-before": { insetInlineStart: 0 }, ".cm-gutters-after": { insetInlineEnd: 0 }, "&light .cm-gutters": { backgroundColor: `#f5f5f5`, color: `#6c6c6c`, border: `0px solid #ddd`, "&.cm-gutters-before": { borderRightWidth: `1px` }, "&.cm-gutters-after": { borderLeftWidth: `1px` } }, "&dark .cm-gutters": { backgroundColor: `#333338`, color: `#ccc` }, ".cm-gutter": { display: `flex !important`, flexDirection: `column`, flexShrink: 0, boxSizing: `border-box`, minHeight: `100%`, overflow: `hidden` }, ".cm-gutterElement": { boxSizing: `border-box` }, ".cm-lineNumbers .cm-gutterElement": { padding: `0 3px 0 5px`, minWidth: `20px`, textAlign: `right`, whiteSpace: `nowrap` }, "&light .cm-activeLineGutter": { backgroundColor: `#e2f2ff` }, "&dark .cm-activeLineGutter": { backgroundColor: `#222227` }, ".cm-panels": { boxSizing: `border-box`, position: `sticky`, left: 0, right: 0, zIndex: 300 }, "&light .cm-panels": { backgroundColor: `#f5f5f5`, color: `black` }, "&light .cm-panels-top": { borderBottom: `1px solid #ddd` }, "&light .cm-panels-bottom": { borderTop: `1px solid #ddd` }, "&dark .cm-panels": { backgroundColor: `#333338`, color: `white` }, ".cm-dialog": { padding: `2px 19px 4px 6px`, position: `relative`, "& label": { fontSize: `80%` } }, ".cm-dialog-close": { position: `absolute`, top: `3px`, right: `4px`, backgroundColor: `inherit`, border: `none`, font: `inherit`, fontSize: `14px`, padding: `0` }, ".cm-tab": { display: `inline-block`, overflow: `hidden`, verticalAlign: `bottom` }, ".cm-widgetBuffer": { verticalAlign: `text-top`, height: `1em`, width: 0, display: `inline` }, ".cm-placeholder": { color: `#888`, display: `inline-block`, verticalAlign: `top`, userSelect: `none` }, ".cm-highlightSpace": { backgroundImage: `radial-gradient(circle at 50% 55%, #aaa 20%, transparent 5%)`, backgroundPosition: `center` }, ".cm-highlightTab": { backgroundImage: `url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" width="200" height="20"><path stroke="%23888" stroke-width="1" fill="none" d="M1 10H196L190 5M190 15L196 10M197 4L197 16"/></svg>')`, backgroundSize: `auto 100%`, backgroundPosition: `right 90%`, backgroundRepeat: `no-repeat` }, ".cm-trailingSpace": { backgroundColor: `#ff332255` }, ".cm-button": { verticalAlign: `middle`, color: `inherit`, fontSize: `70%`, padding: `.2em 1em`, borderRadius: `1px` }, "&light .cm-button": { backgroundImage: `linear-gradient(#eff1f5, #d9d9df)`, border: `1px solid #888`, "&:active": { backgroundImage: `linear-gradient(#b4b4b4, #d0d3d6)` } }, "&dark .cm-button": { backgroundImage: `linear-gradient(#393939, #111)`, border: `1px solid #888`, "&:active": { backgroundImage: `linear-gradient(#111, #333)` } }, ".cm-textfield": { verticalAlign: `middle`, color: `inherit`, fontSize: `70%`, border: `1px solid silver`, padding: `.2em .5em` }, "&light .cm-textfield": { backgroundColor: `white` }, "&dark .cm-textfield": { border: `1px solid #555`, backgroundColor: `inherit` } }, is), ss = { childList: true, characterData: true, subtree: true, attributes: true, characterDataOldValue: true }, cs = L.ie && L.ie_version <= 11, ls = class {
  constructor(e63) {
    this.view = e63, this.active = false, this.editContext = null, this.selectionRange = new mr(), this.selectionChanged = false, this.delayedFlush = -1, this.resizeTimeout = -1, this.queue = [], this.delayedAndroidKey = null, this.flushingAndroidKey = -1, this.lastChange = 0, this.scrollTargets = [], this.intersection = null, this.resizeScroll = null, this.intersecting = false, this.gapIntersection = null, this.gaps = [], this.printQuery = null, this.parentCheck = -1, this.dom = e63.contentDOM, this.observer = new MutationObserver((t3) => {
      for (let e64 of t3) this.queue.push(e64);
      (L.ie && L.ie_version <= 11 || L.ios && e63.composing) && t3.some((e64) => e64.type == `childList` && e64.removedNodes.length || e64.type == `characterData` && e64.oldValue.length > e64.target.nodeValue.length) ? this.flushSoon() : this.flush();
    }), window.EditContext && L.android && e63.constructor.EDIT_CONTEXT !== false && !(L.chrome && L.chrome_version < 126) && (this.editContext = new ps(e63), e63.state.facet(ci) && (e63.contentDOM.editContext = this.editContext.editContext)), cs && (this.onCharData = (e64) => {
      this.queue.push({ target: e64.target, type: `characterData`, oldValue: e64.prevValue }), this.flushSoon();
    }), this.onSelectionChange = this.onSelectionChange.bind(this), this.onResize = this.onResize.bind(this), this.onPrint = this.onPrint.bind(this), this.onScroll = this.onScroll.bind(this), window.matchMedia && (this.printQuery = window.matchMedia(`print`)), typeof ResizeObserver == `function` && (this.resizeScroll = new ResizeObserver(() => {
      var _a3;
      ((_a3 = this.view.docView) == null ? void 0 : _a3.lastUpdate) < Date.now() - 75 && this.onResize();
    }), this.resizeScroll.observe(e63.scrollDOM)), this.addWindowListeners(this.win = e63.win), this.start(), typeof IntersectionObserver == `function` && (this.intersection = new IntersectionObserver((e64) => {
      this.parentCheck < 0 && (this.parentCheck = setTimeout(this.listenForScroll.bind(this), 1e3)), e64.length > 0 && e64[e64.length - 1].intersectionRatio > 0 != this.intersecting && (this.intersecting = !this.intersecting, this.intersecting != this.view.inView && this.onScrollChanged(document.createEvent(`Event`)));
    }, { threshold: [0, 1e-3] }), this.intersection.observe(this.dom), this.gapIntersection = new IntersectionObserver((e64) => {
      e64.length > 0 && e64[e64.length - 1].intersectionRatio > 0 && this.onScrollChanged(document.createEvent(`Event`));
    }, {})), this.listenForScroll(), this.readSelectionRange();
  }
  onScrollChanged(e63) {
    this.view.inputState.runHandlers(`scroll`, e63), this.intersecting && this.view.measure();
  }
  onScroll(e63) {
    this.intersecting && this.flush(false), this.editContext && this.view.requestMeasure(this.editContext.measureReq), this.onScrollChanged(e63);
  }
  onResize() {
    this.resizeTimeout < 0 && (this.resizeTimeout = setTimeout(() => {
      this.resizeTimeout = -1, this.view.requestMeasure();
    }, 50));
  }
  onPrint(e63) {
    (e63.type == `change` || !e63.type) && !e63.matches || (this.view.viewState.printing = true, this.view.measure(), setTimeout(() => {
      this.view.viewState.printing = false, this.view.requestMeasure();
    }, 500));
  }
  updateGaps(e63) {
    if (this.gapIntersection && (e63.length != this.gaps.length || this.gaps.some((t3, n2) => t3 != e63[n2]))) {
      this.gapIntersection.disconnect();
      for (let t3 of e63) this.gapIntersection.observe(t3);
      this.gaps = e63;
    }
  }
  onSelectionChange(e63) {
    let t3 = this.selectionChanged;
    if (!this.readSelectionRange() || this.delayedAndroidKey) return;
    let { view: n2 } = this, r2 = this.selectionRange;
    if (n2.state.facet(ci) ? n2.root.activeElement != this.dom : !nr(this.dom, r2)) return;
    let i2 = r2.anchorNode && n2.docView.tile.nearest(r2.anchorNode);
    if (i2 && i2.isWidget() && i2.widget.ignoreEvent(e63)) {
      t3 || (this.selectionChanged = false);
      return;
    }
    (L.ie && L.ie_version <= 11 || L.android && L.chrome) && !n2.state.selection.main.empty && r2.focusNode && ir(r2.focusNode, r2.focusOffset, r2.anchorNode, r2.anchorOffset) ? this.flushSoon() : this.flush(false);
  }
  readSelectionRange() {
    let { view: e63 } = this, t3 = er(e63.root);
    if (!t3) return false;
    let n2 = L.safari && e63.root.nodeType == 11 && e63.root.activeElement == this.dom && fs(this.view, t3) || t3;
    if (!n2 || this.selectionRange.eq(n2)) return false;
    let r2 = nr(this.dom, n2);
    return r2 && !this.selectionChanged && e63.inputState.lastFocusTime > Date.now() - 200 && e63.inputState.lastTouchTime < Date.now() - 300 && xr(this.dom, n2) ? (this.view.inputState.lastFocusTime = 0, e63.docView.updateSelection(), false) : (this.selectionRange.setRange(n2), r2 && (this.selectionChanged = true), true);
  }
  setSelectionRange(e63, t3) {
    this.selectionRange.set(e63.node, e63.offset, t3.node, t3.offset), this.selectionChanged = false;
  }
  clearSelectionRange() {
    this.selectionRange.set(null, 0, null, 0);
  }
  listenForScroll() {
    this.parentCheck = -1;
    let e63 = 0, t3 = null;
    for (let n2 = this.dom; n2; ) if (n2.nodeType == 1) !t3 && e63 < this.scrollTargets.length && this.scrollTargets[e63] == n2 ? e63++ : t3 || (t3 = this.scrollTargets.slice(0, e63)), t3 && t3.push(n2), n2 = n2.assignedSlot || n2.parentNode;
    else if (n2.nodeType == 11) n2 = n2.host;
    else break;
    if (e63 < this.scrollTargets.length && !t3 && (t3 = this.scrollTargets.slice(0, e63)), t3) {
      for (let e64 of this.scrollTargets) e64.removeEventListener(`scroll`, this.onScroll);
      for (let e64 of this.scrollTargets = t3) e64.addEventListener(`scroll`, this.onScroll);
    }
  }
  ignore(e63) {
    if (!this.active) return e63();
    try {
      return this.stop(), e63();
    } finally {
      this.start(), this.clear();
    }
  }
  start() {
    this.active || (this.active = (this.observer.observe(this.dom, ss), cs && this.dom.addEventListener(`DOMCharacterDataModified`, this.onCharData), true));
  }
  stop() {
    this.active && (this.active = false, this.observer.disconnect(), cs && this.dom.removeEventListener(`DOMCharacterDataModified`, this.onCharData));
  }
  clear() {
    this.processRecords(), this.queue.length = 0, this.selectionChanged = false;
  }
  delayAndroidKey(e63, t3) {
    var _a3;
    this.delayedAndroidKey || (this.flushingAndroidKey = this.view.win.requestAnimationFrame(() => {
      let e64 = this.delayedAndroidKey;
      e64 && (this.clearDelayedAndroidKey(), this.view.inputState.lastKeyCode = e64.keyCode, this.view.inputState.lastKeyTime = Date.now(), !this.flush() && e64.force && yr(this.dom, e64.key, e64.keyCode));
    })), (!this.delayedAndroidKey || e63 == `Enter`) && (this.delayedAndroidKey = { key: e63, keyCode: t3, force: this.lastChange < Date.now() - 50 || !!((_a3 = this.delayedAndroidKey) == null ? void 0 : _a3.force) });
  }
  clearDelayedAndroidKey() {
    this.win.cancelAnimationFrame(this.flushingAndroidKey), this.delayedAndroidKey = null, this.flushingAndroidKey = -1;
  }
  flushSoon() {
    this.delayedFlush < 0 && (this.delayedFlush = this.view.win.requestAnimationFrame(() => {
      this.delayedFlush = -1, this.flush();
    }));
  }
  forceFlush() {
    this.delayedFlush >= 0 && (this.view.win.cancelAnimationFrame(this.delayedFlush), this.delayedFlush = -1), this.flush();
  }
  pendingRecords() {
    for (let e63 of this.observer.takeRecords()) this.queue.push(e63);
    return this.queue;
  }
  processRecords() {
    let e63 = this.pendingRecords();
    e63.length && (this.queue = []);
    let t3 = -1, n2 = -1, r2 = false;
    for (let i2 of e63) {
      let e64 = this.readMutation(i2);
      e64 && (e64.typeOver && (r2 = true), t3 == -1 ? { from: t3, to: n2 } = e64 : (t3 = Math.min(e64.from, t3), n2 = Math.max(e64.to, n2)));
    }
    return { from: t3, to: n2, typeOver: r2 };
  }
  readChange() {
    let { from: e63, to: t3, typeOver: n2 } = this.processRecords(), r2 = this.selectionChanged && nr(this.dom, this.selectionRange);
    if (e63 < 0 && !r2) return null;
    e63 > -1 && (this.lastChange = Date.now()), this.view.inputState.lastFocusTime = 0, this.selectionChanged = false;
    let i2 = new Aa(this.view, e63, t3, n2);
    return this.view.docView.domChanged = { newSel: i2.newSel ? i2.newSel.main : null }, i2;
  }
  flush(e63 = true) {
    if (this.delayedFlush >= 0 || this.delayedAndroidKey) return false;
    e63 && this.readSelectionRange();
    let t3 = this.readChange();
    if (!t3) return this.view.requestMeasure(), false;
    let n2 = this.view.state, r2 = Ma(this.view, t3);
    return this.view.state == n2 && (t3.domChanged || t3.newSel && !t3.newSel.main.eq(this.view.state.selection.main)) && this.view.update([]), r2;
  }
  readMutation(e63) {
    let t3 = this.view.docView.tile.nearest(e63.target);
    if (!t3 || t3.isWidget()) return null;
    if (t3.markDirty(e63.type == `attributes`), e63.type == `childList`) {
      let n2 = us(t3, e63.previousSibling || e63.target.previousSibling, -1), r2 = us(t3, e63.nextSibling || e63.target.nextSibling, 1);
      return { from: n2 ? t3.posAfter(n2) : t3.posAtStart, to: r2 ? t3.posBefore(r2) : t3.posAtEnd, typeOver: false };
    } else if (e63.type == `characterData`) return { from: t3.posAtStart, to: t3.posAtEnd, typeOver: e63.target.nodeValue == e63.oldValue };
    else return null;
  }
  setWindow(e63) {
    e63 != this.win && (this.removeWindowListeners(this.win), this.win = e63, this.addWindowListeners(this.win));
  }
  addWindowListeners(e63) {
    e63.addEventListener(`resize`, this.onResize), this.printQuery ? this.printQuery.addEventListener ? this.printQuery.addEventListener(`change`, this.onPrint) : this.printQuery.addListener(this.onPrint) : e63.addEventListener(`beforeprint`, this.onPrint), e63.addEventListener(`scroll`, this.onScroll), e63.document.addEventListener(`selectionchange`, this.onSelectionChange);
  }
  removeWindowListeners(e63) {
    e63.removeEventListener(`scroll`, this.onScroll), e63.removeEventListener(`resize`, this.onResize), this.printQuery ? this.printQuery.removeEventListener ? this.printQuery.removeEventListener(`change`, this.onPrint) : this.printQuery.removeListener(this.onPrint) : e63.removeEventListener(`beforeprint`, this.onPrint), e63.document.removeEventListener(`selectionchange`, this.onSelectionChange);
  }
  update(e63) {
    this.editContext && (this.editContext.update(e63), e63.startState.facet(ci) != e63.state.facet(ci) && (e63.view.contentDOM.editContext = e63.state.facet(ci) ? this.editContext.editContext : null));
  }
  destroy() {
    var e63, t3, n2;
    this.stop(), (e63 = this.intersection) == null || e63.disconnect(), (t3 = this.gapIntersection) == null || t3.disconnect(), (n2 = this.resizeScroll) == null || n2.disconnect();
    for (let e64 of this.scrollTargets) e64.removeEventListener(`scroll`, this.onScroll);
    this.removeWindowListeners(this.win), clearTimeout(this.parentCheck), clearTimeout(this.resizeTimeout), this.win.cancelAnimationFrame(this.delayedFlush), this.win.cancelAnimationFrame(this.flushingAndroidKey), this.editContext && (this.view.contentDOM.editContext = null, this.editContext.destroy());
  }
};
function us(e63, t3, n2) {
  for (; t3; ) {
    let r2 = U.get(t3);
    if (r2 && r2.parent == e63) return r2;
    let i2 = t3.parentNode;
    t3 = i2 == e63.dom ? n2 > 0 ? t3.nextSibling : t3.previousSibling : i2;
  }
  return null;
}
function ds(e63, t3) {
  let n2 = t3.startContainer, r2 = t3.startOffset, i2 = t3.endContainer, a2 = t3.endOffset, o2 = e63.docView.domAtPos(e63.state.selection.main.anchor, 1);
  return ir(o2.node, o2.offset, i2, a2) && ([n2, r2, i2, a2] = [i2, a2, n2, r2]), { anchorNode: n2, anchorOffset: r2, focusNode: i2, focusOffset: a2 };
}
function fs(e63, t3) {
  if (t3.getComposedRanges) {
    let n3 = t3.getComposedRanges(e63.root)[0];
    if (n3) return ds(e63, n3);
  }
  let n2 = null;
  function r2(e64) {
    e64.preventDefault(), e64.stopImmediatePropagation(), n2 = e64.getTargetRanges()[0];
  }
  return e63.contentDOM.addEventListener(`beforeinput`, r2, true), e63.dom.ownerDocument.execCommand(`indent`), e63.contentDOM.removeEventListener(`beforeinput`, r2, true), n2 ? ds(e63, n2) : null;
}
var ps = class {
  constructor(e63) {
    this.from = 0, this.to = 0, this.pendingContextChange = null, this.handlers = /* @__PURE__ */ Object.create(null), this.composing = null, this.resetRange(e63.state);
    let t3 = this.editContext = new window.EditContext({ text: e63.state.doc.sliceString(this.from, this.to), selectionStart: this.toContextPos(Math.max(this.from, Math.min(this.to, e63.state.selection.main.anchor))), selectionEnd: this.toContextPos(e63.state.selection.main.head) });
    for (let n2 in this.handlers.textupdate = (n3) => {
      let r2 = e63.state.selection.main, { anchor: i2, head: a2 } = r2, o2 = this.toEditorPos(n3.updateRangeStart), s2 = this.toEditorPos(n3.updateRangeEnd);
      e63.inputState.composing >= 0 && !this.composing && (this.composing = { contextBase: n3.updateRangeStart, editorBase: o2, drifted: false });
      let c2 = s2 - o2 > n3.text.length;
      o2 == this.from && i2 < this.from ? o2 = i2 : s2 == this.to && i2 > this.to && (s2 = i2);
      let l2 = Fa(e63.state.sliceDoc(o2, s2), n3.text, (c2 ? r2.from : r2.to) - o2, c2 ? `end` : null);
      if (!l2) {
        let t4 = k.single(this.toEditorPos(n3.selectionStart), this.toEditorPos(n3.selectionEnd));
        t4.main.eq(r2) || e63.dispatch({ selection: t4, userEvent: `select` });
        return;
      }
      let u2 = { from: l2.from + o2, to: l2.toA + o2, insert: C.of(n3.text.slice(l2.from, l2.toB).split(`
`)) };
      if ((L.mac || L.android) && u2.from == a2 - 1 && /^\. ?$/.test(n3.text) && e63.contentDOM.getAttribute(`autocorrect`) == `off` && (u2 = { from: o2, to: s2, insert: C.of([n3.text.replace(`.`, ` `)]) }), this.pendingContextChange = u2, !e63.state.readOnly) {
        let t4 = this.to - this.from + (u2.to - u2.from + u2.insert.length);
        Na(e63, u2, k.single(this.toEditorPos(n3.selectionStart, t4), this.toEditorPos(n3.selectionEnd, t4)));
      }
      this.pendingContextChange && (this.revertPending(e63.state), this.setSelection(e63.state)), u2.from < u2.to && !u2.insert.length && e63.inputState.composing >= 0 && !/[\\p{Alphabetic}\\p{Number}_]/.test(t3.text.slice(Math.max(0, n3.updateRangeStart - 1), Math.min(t3.text.length, n3.updateRangeStart + 1))) && this.handlers.compositionend(n3);
    }, this.handlers.characterboundsupdate = (n3) => {
      let r2 = [], i2 = null;
      for (let t4 = this.toEditorPos(n3.rangeStart), a2 = this.toEditorPos(n3.rangeEnd); t4 < a2; t4++) {
        let n4 = e63.coordsForChar(t4);
        i2 = n4 && new DOMRect(n4.left, n4.top, n4.right - n4.left, n4.bottom - n4.top) || i2 || new DOMRect(), r2.push(i2);
      }
      t3.updateCharacterBounds(n3.rangeStart, r2);
    }, this.handlers.textformatupdate = (t4) => {
      let n3 = [];
      for (let e64 of t4.getTextFormats()) {
        let t5 = e64.underlineStyle, r2 = e64.underlineThickness;
        if (!/none/i.test(t5) && !/none/i.test(r2)) {
          let i2 = this.toEditorPos(e64.rangeStart), a2 = this.toEditorPos(e64.rangeEnd);
          if (i2 < a2) {
            let e65 = `text-decoration: underline ${/^[a-z]/.test(t5) ? t5 + ` ` : t5 == `Dashed` ? `dashed ` : t5 == `Squiggle` ? `wavy ` : ``}${/thin/i.test(r2) ? 1 : 2}px`;
            n3.push(z.mark({ attributes: { style: e65 } }).range(i2, a2));
          }
        }
      }
      e63.dispatch({ effects: si.of(z.set(n3)) });
    }, this.handlers.compositionstart = () => {
      e63.inputState.composing < 0 && (e63.inputState.composing = 0, e63.inputState.compositionFirstChange = true);
    }, this.handlers.compositionend = () => {
      if (e63.inputState.composing = -1, e63.inputState.compositionFirstChange = null, this.composing) {
        let { drifted: t4 } = this.composing;
        this.composing = null, t4 && this.reset(e63.state);
      }
    }, this.handlers) t3.addEventListener(n2, this.handlers[n2]);
    this.measureReq = { read: (e64) => {
      this.editContext.updateControlBounds(e64.contentDOM.getBoundingClientRect());
      let t4 = er(e64.root);
      t4 && t4.rangeCount && this.editContext.updateSelectionBounds(t4.getRangeAt(0).getBoundingClientRect());
    } };
  }
  applyEdits(e63) {
    let t3 = 0, n2 = false, r2 = this.pendingContextChange;
    return e63.changes.iterChanges((i2, a2, o2, s2, c2) => {
      if (n2) return;
      let l2 = c2.length - (a2 - i2);
      if (r2 && a2 >= r2.to) if (r2.from == i2 && r2.to == a2 && r2.insert.eq(c2)) {
        r2 = this.pendingContextChange = null, t3 += l2, this.to += l2;
        return;
      } else r2 = null, this.revertPending(e63.state);
      if (i2 += t3, a2 += t3, a2 <= this.from) this.from += l2, this.to += l2;
      else if (i2 < this.to) {
        if (i2 < this.from || a2 > this.to || this.to - this.from + c2.length > 3e4) {
          n2 = true;
          return;
        }
        this.editContext.updateText(this.toContextPos(i2), this.toContextPos(a2), c2.toString()), this.to += l2;
      }
      t3 += l2;
    }), r2 && !n2 && this.revertPending(e63.state), !n2;
  }
  update(e63) {
    let t3 = this.pendingContextChange, n2 = e63.startState.selection.main;
    this.composing && (this.composing.drifted || !e63.changes.touchesRange(n2.from, n2.to) && e63.transactions.some((e64) => !e64.isUserEvent(`input.type`) && e64.changes.touchesRange(this.from, this.to))) ? (this.composing.drifted = true, this.composing.editorBase = e63.changes.mapPos(this.composing.editorBase)) : !this.applyEdits(e63) || !this.rangeIsValid(e63.state) ? (this.pendingContextChange = null, this.reset(e63.state)) : (e63.docChanged || e63.selectionSet || t3) && this.setSelection(e63.state), (e63.geometryChanged || e63.docChanged || e63.selectionSet) && e63.view.requestMeasure(this.measureReq);
  }
  resetRange(e63) {
    let { head: t3 } = e63.selection.main;
    this.from = Math.max(0, t3 - 1e4), this.to = Math.min(e63.doc.length, t3 + 1e4);
  }
  reset(e63) {
    this.resetRange(e63), this.editContext.updateText(0, this.editContext.text.length, e63.doc.sliceString(this.from, this.to)), this.setSelection(e63);
  }
  revertPending(e63) {
    let t3 = this.pendingContextChange;
    this.pendingContextChange = null, this.editContext.updateText(this.toContextPos(t3.from), this.toContextPos(t3.from + t3.insert.length), e63.doc.sliceString(t3.from, t3.to));
  }
  setSelection(e63) {
    let { main: t3 } = e63.selection, n2 = this.toContextPos(Math.max(this.from, Math.min(this.to, t3.anchor))), r2 = this.toContextPos(t3.head);
    (this.editContext.selectionStart != n2 || this.editContext.selectionEnd != r2) && this.editContext.updateSelection(n2, r2);
  }
  rangeIsValid(e63) {
    let { head: t3 } = e63.selection.main;
    return !(this.from > 0 && t3 - this.from < 500 || this.to < e63.doc.length && this.to - t3 < 500 || this.to - this.from > 1e4 * 3);
  }
  toEditorPos(e63, t3 = this.to - this.from) {
    e63 = Math.min(e63, t3);
    let n2 = this.composing;
    return n2 && n2.drifted ? n2.editorBase + (e63 - n2.contextBase) : e63 + this.from;
  }
  toContextPos(e63) {
    let t3 = this.composing;
    return t3 && t3.drifted ? t3.contextBase + (e63 - t3.editorBase) : e63 - this.from;
  }
  destroy() {
    for (let e63 in this.handlers) this.editContext.removeEventListener(e63, this.handlers[e63]);
  }
}, Y = class e49 {
  get state() {
    return this.viewState.state;
  }
  get viewport() {
    return this.viewState.viewport;
  }
  get visibleRanges() {
    return this.viewState.visibleRanges;
  }
  get inView() {
    return this.viewState.inView;
  }
  get composing() {
    return !!this.inputState && this.inputState.composing > 0;
  }
  get compositionStarted() {
    return !!this.inputState && this.inputState.composing >= 0;
  }
  get root() {
    return this._root;
  }
  get win() {
    return this.dom.ownerDocument.defaultView || window;
  }
  constructor(e63 = {}) {
    var _a3;
    this.plugins = [], this.pluginMap = /* @__PURE__ */ new Map(), this.editorAttrs = {}, this.contentAttrs = {}, this.bidiCache = [], this.destroyed = false, this.updateState = 2, this.measureScheduled = -1, this.measureRequests = [], this.contentDOM = document.createElement(`div`), this.scrollDOM = document.createElement(`div`), this.scrollDOM.tabIndex = -1, this.scrollDOM.className = `cm-scroller`, this.scrollDOM.appendChild(this.contentDOM), this.announceDOM = document.createElement(`div`), this.announceDOM.className = `cm-announced`, this.announceDOM.setAttribute(`aria-live`, `polite`), this.dom = document.createElement(`div`), this.dom.appendChild(this.announceDOM), this.dom.appendChild(this.scrollDOM), e63.parent && e63.parent.appendChild(this.dom);
    let { dispatch: t3 } = e63;
    this.dispatchTransactions = e63.dispatchTransactions || t3 && ((e64) => e64.forEach((e65) => t3(e65, this))) || ((e64) => this.update(e64)), this.dispatch = this.dispatch.bind(this), this._root = e63.root || br(e63.parent) || document, this.viewState = new Uo(e63.state || N.create(e63)), e63.scrollTo && e63.scrollTo.is(oi) && (this.viewState.scrollTarget = e63.scrollTo.value.clip(this.viewState.state)), this.plugins = this.state.facet(ui).map((e64) => new fi(e64));
    for (let e64 of this.plugins) e64.update(this);
    this.observer = new ls(this), this.inputState = new Ra(this), this.inputState.ensureHandlers(this.plugins), this.docView = new Qi(this), this.mountStyles(), this.updateAttrs(), this.updateState = 0, this.requestMeasure(), ((_a3 = document.fonts) == null ? void 0 : _a3.ready) && document.fonts.ready.then(() => this.requestMeasure());
  }
  dispatch(...e63) {
    let t3 = e63.length == 1 && e63[0] instanceof M ? e63 : e63.length == 1 && Array.isArray(e63[0]) ? e63[0] : [this.state.update(...e63)];
    this.dispatchTransactions(t3, this);
  }
  update(e63) {
    if (this.updateState != 0) throw Error(`Calls to EditorView.update are not allowed while an update is in progress`);
    let t3 = false, n2 = false, r2, i2 = this.state;
    for (let t4 of e63) {
      if (t4.startState != i2) throw RangeError(`Trying to update state with a transaction that doesn't start from the previous state.`);
      i2 = t4.state;
    }
    if (this.destroyed) {
      this.viewState.state = i2;
      return;
    }
    let a2 = this.hasFocus, o2 = 0, s2 = null;
    e63.some((e64) => e64.annotation(ho)) ? (this.inputState.notifiedFocused = a2, o2 = 1) : a2 != this.inputState.notifiedFocused && (this.inputState.notifiedFocused = a2, s2 = go(i2, a2), s2 || (o2 = 1));
    let c2 = this.observer.delayedAndroidKey, l2 = null;
    if (c2 ? (this.observer.clearDelayedAndroidKey(), l2 = this.observer.readChange(), (l2 && !this.state.doc.eq(i2.doc) || !this.state.selection.eq(i2.selection)) && (l2 = null)) : this.observer.clear(), i2.facet(N.phrases) != this.state.facet(N.phrases)) return this.setState(i2);
    r2 = Ti.create(this, i2, e63), r2.flags |= o2;
    let u2 = this.viewState.scrollTarget;
    try {
      this.updateState = 2;
      for (let t4 of e63) {
        if (u2 && (u2 = u2.map(t4.changes)), t4.scrollIntoView) {
          let { main: e64 } = t4.state.selection;
          u2 = new ai(e64.empty ? e64 : k.cursor(e64.head, e64.head > e64.anchor ? -1 : 1));
        }
        for (let e64 of t4.effects) e64.is(oi) && (u2 = e64.value.clip(this.state));
      }
      this.viewState.update(r2, u2), this.bidiCache = gs.update(this.bidiCache, r2.changes), r2.empty || (this.updatePlugins(r2), this.inputState.update(r2)), t3 = this.docView.update(r2), this.state.facet(Ci) != this.styleModules && this.mountStyles(), n2 = this.updateAttrs(), this.showAnnouncements(e63), this.docView.updateSelection(t3, e63.some((e64) => e64.isUserEvent(`select.pointer`)));
    } finally {
      this.updateState = 0;
    }
    if (r2.startState.facet($o) != r2.state.facet($o) && (this.viewState.mustMeasureContent = true), (t3 || n2 || u2 || this.viewState.mustEnforceCursorAssoc || this.viewState.mustMeasureContent) && this.requestMeasure(), t3 && this.docViewUpdate(), !r2.empty) for (let e64 of this.state.facet(Zr)) try {
      e64(r2);
    } catch (e65) {
      H(this.state, e65, `update listener`);
    }
    (s2 || l2) && Promise.resolve().then(() => {
      s2 && this.state == s2.startState && this.dispatch(s2), l2 && !Ma(this, l2) && c2.force && yr(this.contentDOM, c2.key, c2.keyCode);
    });
  }
  setState(e63) {
    if (this.updateState != 0) throw Error(`Calls to EditorView.setState are not allowed while an update is in progress`);
    if (this.destroyed) {
      this.viewState.state = e63;
      return;
    }
    this.updateState = 2;
    let t3 = this.hasFocus;
    try {
      for (let e64 of this.plugins) e64.destroy(this);
      this.viewState = new Uo(e63), this.plugins = e63.facet(ui).map((e64) => new fi(e64)), this.pluginMap.clear();
      for (let e64 of this.plugins) e64.update(this);
      this.docView.destroy(), this.docView = new Qi(this), this.inputState.ensureHandlers(this.plugins), this.mountStyles(), this.updateAttrs(), this.bidiCache = [];
    } finally {
      this.updateState = 0;
    }
    t3 && this.focus(), this.requestMeasure();
  }
  updatePlugins(e63) {
    let t3 = e63.startState.facet(ui), n2 = e63.state.facet(ui);
    if (t3 != n2) {
      let r2 = [];
      for (let i2 of n2) {
        let n3 = t3.indexOf(i2);
        if (n3 < 0) r2.push(new fi(i2));
        else {
          let t4 = this.plugins[n3];
          t4.mustUpdate = e63, r2.push(t4);
        }
      }
      for (let t4 of this.plugins) t4.mustUpdate != e63 && t4.destroy(this);
      this.plugins = r2, this.pluginMap.clear();
    } else for (let t4 of this.plugins) t4.mustUpdate = e63;
    for (let e64 = 0; e64 < this.plugins.length; e64++) this.plugins[e64].update(this);
    t3 != n2 && this.inputState.ensureHandlers(this.plugins);
  }
  docViewUpdate() {
    for (let e63 of this.plugins) {
      let t3 = e63.value;
      if (t3 && t3.docViewUpdate) try {
        t3.docViewUpdate(this);
      } catch (e64) {
        H(this.state, e64, `doc view update listener`);
      }
    }
  }
  measure(e63 = true) {
    if (this.destroyed) return;
    if (this.measureScheduled > -1 && this.win.cancelAnimationFrame(this.measureScheduled), this.observer.delayedAndroidKey) {
      this.measureScheduled = -1, this.requestMeasure();
      return;
    }
    this.measureScheduled = 0, e63 && this.observer.forceFlush();
    let t3 = null, n2 = this.scrollDOM, r2 = n2.scrollTop * this.scaleY, { scrollAnchorPos: i2, scrollAnchorHeight: a2 } = this.viewState;
    Math.abs(r2 - this.viewState.scrollTop) > 1 && (a2 = -1), this.viewState.scrollAnchorHeight = -1;
    try {
      for (let e64 = 0; ; e64++) {
        if (a2 < 0) if (Sr(n2)) i2 = -1, a2 = this.viewState.heightMap.height;
        else {
          let e65 = this.viewState.scrollAnchorAt(r2);
          i2 = e65.from, a2 = e65.top;
        }
        this.updateState = 1;
        let o2 = this.viewState.measure(this);
        if (!o2 && !this.measureRequests.length && this.viewState.scrollTarget == null) break;
        if (e64 > 5) {
          console.warn(this.measureRequests.length ? `Measure loop restarted more than 5 times` : `Viewport failed to stabilize`);
          break;
        }
        let s2 = [];
        o2 & 4 || ([this.measureRequests, s2] = [s2, this.measureRequests]);
        let c2 = s2.map((e65) => {
          try {
            return e65.read(this);
          } catch (e66) {
            return H(this.state, e66), hs;
          }
        }), l2 = Ti.create(this, this.state, []), u2 = false;
        l2.flags |= o2, t3 ? t3.flags |= o2 : t3 = l2, this.updateState = 2, l2.empty || (this.updatePlugins(l2), this.inputState.update(l2), this.updateAttrs(), u2 = this.docView.update(l2), u2 && this.docViewUpdate());
        for (let e65 = 0; e65 < s2.length; e65++) if (c2[e65] != hs) try {
          let t4 = s2[e65];
          t4.write && t4.write(c2[e65], this);
        } catch (e66) {
          H(this.state, e66);
        }
        if (u2 && this.docView.updateSelection(true), !l2.viewportChanged && this.measureRequests.length == 0) {
          if (this.viewState.editorHeight) if (this.viewState.scrollTarget) {
            this.docView.scrollIntoView(this.viewState.scrollTarget), this.viewState.scrollTarget = null, a2 = -1;
            continue;
          } else {
            let e65 = (i2 < 0 ? this.viewState.heightMap.height : this.viewState.lineBlockAt(i2).top) - a2;
            if (e65 > 1 || e65 < -1) {
              r2 += e65, n2.scrollTop = r2 / this.scaleY, a2 = -1;
              continue;
            }
          }
          break;
        }
      }
    } finally {
      this.updateState = 0, this.measureScheduled = -1;
    }
    if (t3 && !t3.empty) for (let e64 of this.state.facet(Zr)) e64(t3);
  }
  get themeClasses() {
    return ts + ` ` + (this.state.facet(es) ? rs : ns) + ` ` + this.state.facet($o);
  }
  updateAttrs() {
    let e63 = _s(this, pi, { class: `cm-editor` + (this.hasFocus ? ` cm-focused ` : ` `) + this.themeClasses }), t3 = { spellcheck: `false`, autocorrect: `off`, autocapitalize: `off`, writingsuggestions: `false`, translate: `no`, contenteditable: this.state.facet(ci) ? `true` : `false`, class: `cm-content`, style: `${L.tabSize}: ${this.state.tabSize}`, role: `textbox`, "aria-multiline": `true` };
    this.state.readOnly && (t3[`aria-readonly`] = `true`), _s(this, mi, t3);
    let n2 = this.observer.ignore(() => {
      let n3 = Wn(this.contentDOM, this.contentAttrs, t3), r2 = Wn(this.dom, this.editorAttrs, e63);
      return n3 || r2;
    });
    return this.editorAttrs = e63, this.contentAttrs = t3, n2;
  }
  showAnnouncements(t3) {
    let n2 = true;
    for (let r2 of t3) for (let t4 of r2.effects) if (t4.is(e49.announce)) {
      n2 && (this.announceDOM.textContent = ``), n2 = false;
      let e63 = this.announceDOM.appendChild(document.createElement(`div`));
      e63.textContent = t4.value;
    }
  }
  mountStyles() {
    this.styleModules = this.state.facet(Ci);
    let t3 = this.state.facet(e49.cspNonce);
    yn.mount(this.root, this.styleModules.concat(os).reverse(), t3 ? { nonce: t3 } : void 0);
  }
  readMeasured() {
    if (this.updateState == 2) throw Error(`Reading the editor layout isn't allowed during an update`);
    this.updateState == 0 && this.measureScheduled > -1 && this.measure(false);
  }
  requestMeasure(e63) {
    if (this.measureScheduled < 0 && (this.measureScheduled = this.win.requestAnimationFrame(() => this.measure())), e63) {
      if (this.measureRequests.indexOf(e63) > -1) return;
      if (e63.key != null) {
        for (let t3 = 0; t3 < this.measureRequests.length; t3++) if (this.measureRequests[t3].key === e63.key) {
          this.measureRequests[t3] = e63;
          return;
        }
      }
      this.measureRequests.push(e63);
    }
  }
  plugin(e63) {
    let t3 = this.pluginMap.get(e63);
    return (t3 === void 0 || t3 && t3.plugin != e63) && this.pluginMap.set(e63, t3 = this.plugins.find((t4) => t4.plugin == e63) || null), t3 && t3.update(this).value;
  }
  get documentTop() {
    return this.contentDOM.getBoundingClientRect().top + this.viewState.paddingTop;
  }
  get documentPadding() {
    return { top: this.viewState.paddingTop, bottom: this.viewState.paddingBottom };
  }
  get scaleX() {
    return this.viewState.scaleX;
  }
  get scaleY() {
    return this.viewState.scaleY;
  }
  elementAtHeight(e63) {
    return this.readMeasured(), this.viewState.elementAtHeight(e63);
  }
  lineBlockAtHeight(e63) {
    return this.readMeasured(), this.viewState.lineBlockAtHeight(e63);
  }
  get viewportLineBlocks() {
    return this.viewState.viewportLines;
  }
  lineBlockAt(e63) {
    return this.viewState.lineBlockAt(e63);
  }
  get contentHeight() {
    return this.viewState.contentHeight;
  }
  moveByChar(e63, t3, n2) {
    return ba(this, e63, ha(this, e63, t3, n2));
  }
  moveByGroup(e63, t3) {
    return ba(this, e63, ha(this, e63, t3, (t4) => ga(this, e63.head, t4)));
  }
  visualLineSide(e63, t3) {
    let n2 = this.bidiSpans(e63), r2 = this.textDirectionAt(e63.from), i2 = n2[t3 ? n2.length - 1 : 0];
    return k.cursor(i2.side(t3, r2) + e63.from, i2.forward(!t3, r2) ? 1 : -1);
  }
  moveToLineBoundary(e63, t3, n2 = true) {
    return ma(this, e63, t3, n2);
  }
  moveVertically(e63, t3, n2) {
    return ba(this, e63, _a(this, e63, t3, n2));
  }
  domAtPos(e63, t3 = 1) {
    return this.docView.domAtPos(e63, t3);
  }
  posAtDOM(e63, t3 = 0) {
    return this.docView.posFromDOM(e63, t3);
  }
  posAtCoords(e63, t3 = true) {
    this.readMeasured();
    let n2 = Sa(this, e63, t3);
    return n2 && n2.pos;
  }
  posAndSideAtCoords(e63, t3 = true) {
    return this.readMeasured(), Sa(this, e63, t3);
  }
  coordsAtPos(e63, t3 = 1) {
    this.readMeasured();
    let n2 = this.docView.coordsAt(e63, t3);
    if (!n2 || n2.left == n2.right) return n2;
    let r2 = this.state.doc.lineAt(e63), i2 = this.bidiSpans(r2), a2 = i2[Fr.find(i2, e63 - r2.from, -1, t3)];
    return lr(n2, a2.dir == B.LTR == t3 > 0);
  }
  coordsForChar(e63) {
    return this.readMeasured(), this.docView.coordsForChar(e63);
  }
  get defaultCharacterWidth() {
    return this.viewState.heightOracle.charWidth;
  }
  get defaultLineHeight() {
    return this.viewState.heightOracle.lineHeight;
  }
  get textDirection() {
    return this.viewState.defaultTextDirection;
  }
  textDirectionAt(e63) {
    return !this.state.facet(ni) || e63 < this.viewport.from || e63 > this.viewport.to ? this.textDirection : (this.readMeasured(), this.docView.textDirectionAt(e63));
  }
  get lineWrapping() {
    return this.viewState.heightOracle.lineWrapping;
  }
  bidiSpans(e63) {
    if (e63.length > ms) return Ur(e63.length);
    let t3 = this.textDirectionAt(e63.from), n2;
    for (let r3 of this.bidiCache) if (r3.from == e63.from && r3.dir == t3 && (r3.fresh || Ir(r3.isolates, n2 = bi(this, e63)))) return r3.order;
    n2 || (n2 = bi(this, e63));
    let r2 = Hr(e63.text, t3, n2);
    return this.bidiCache.push(new gs(e63.from, e63.to, t3, n2, true, r2)), r2;
  }
  get hasFocus() {
    var _a3;
    return (this.dom.ownerDocument.hasFocus() || L.safari && ((_a3 = this.inputState) == null ? void 0 : _a3.lastContextMenu) > Date.now() - 3e4) && this.root.activeElement == this.contentDOM;
  }
  focus() {
    this.observer.ignore(() => {
      gr(this.contentDOM), this.docView.updateSelection();
    });
  }
  setRoot(e63) {
    this._root != e63 && (this._root = e63, this.observer.setWindow((e63.nodeType == 9 ? e63 : e63.ownerDocument).defaultView || window), this.mountStyles());
  }
  destroy() {
    this.root.activeElement == this.contentDOM && this.contentDOM.blur();
    for (let e63 of this.plugins) e63.destroy(this);
    this.plugins = [], this.inputState.destroy(), this.docView.destroy(), this.dom.remove(), this.observer.destroy(), this.measureScheduled > -1 && this.win.cancelAnimationFrame(this.measureScheduled), this.destroyed = true;
  }
  static scrollIntoView(e63, t3 = {}) {
    return oi.of(new ai(typeof e63 == `number` ? k.cursor(e63) : e63, t3.y, t3.x, t3.yMargin, t3.xMargin));
  }
  scrollSnapshot() {
    let { scrollTop: e63, scrollLeft: t3 } = this.scrollDOM, n2 = this.viewState.scrollAnchorAt(e63);
    return oi.of(new ai(k.cursor(n2.from), `start`, `start`, n2.top - e63, t3, true));
  }
  setTabFocusMode(e63) {
    e63 == null ? this.inputState.tabFocusMode = this.inputState.tabFocusMode < 0 ? 0 : -1 : typeof e63 == `boolean` ? this.inputState.tabFocusMode = e63 ? 0 : -1 : this.inputState.tabFocusMode != 0 && (this.inputState.tabFocusMode = Date.now() + e63);
  }
  static domEventHandlers(e63) {
    return di.define(() => ({}), { eventHandlers: e63 });
  }
  static domEventObservers(e63) {
    return di.define(() => ({}), { eventObservers: e63 });
  }
  static theme(e63, t3) {
    let n2 = yn.newName(), r2 = [$o.of(n2), Ci.of(as(`.${n2}`, e63))];
    return t3 && t3.dark && r2.push(es.of(true)), r2;
  }
  static baseTheme(e63) {
    return _t.lowest(Ci.of(as(`.` + ts, e63, is)));
  }
  static findFromDOM(e63) {
    var _a3, _b;
    let t3 = e63.querySelector(`.cm-content`);
    return ((_b = (_a3 = t3 && U.get(t3) || U.get(e63)) == null ? void 0 : _a3.root) == null ? void 0 : _b.view) || null;
  }
};
Y.styleModule = Ci, Y.inputHandler = Qr, Y.clipboardInputFilter = ei, Y.clipboardOutputFilter = ti, Y.scrollHandler = ii, Y.focusChangeEffect = $r, Y.perLineTextDirection = ni, Y.exceptionSink = Xr, Y.updateListener = Zr, Y.editable = ci, Y.mouseSelectionStyle = Yr, Y.dragMovesSelection = Jr, Y.clickAddsSelectionRange = qr, Y.decorations = hi, Y.blockWrappers = gi, Y.outerDecorations = _i, Y.atomicRanges = vi, Y.bidiIsolatedRanges = yi, Y.scrollMargins = xi, Y.darkTheme = es, Y.cspNonce = A.define({ combine: (e63) => e63.length ? e63[0] : `` }), Y.contentAttributes = mi, Y.editorAttributes = pi, Y.lineWrapping = Y.contentAttributes.of({ class: `cm-lineWrapping` }), Y.announce = j.define();
var ms = 4096, hs = {}, gs = class e50 {
  constructor(e63, t3, n2, r2, i2, a2) {
    this.from = e63, this.to = t3, this.dir = n2, this.isolates = r2, this.fresh = i2, this.order = a2;
  }
  static update(t3, n2) {
    if (n2.empty && !t3.some((e63) => e63.fresh)) return t3;
    let r2 = [], i2 = t3.length ? t3[t3.length - 1].dir : B.LTR;
    for (let a2 = Math.max(0, t3.length - 10); a2 < t3.length; a2++) {
      let o2 = t3[a2];
      o2.dir == i2 && !n2.touchesRange(o2.from, o2.to) && r2.push(new e50(n2.mapPos(o2.from, 1), n2.mapPos(o2.to, -1), o2.dir, o2.isolates, false, o2.order));
    }
    return r2;
  }
};
function _s(e63, t3, n2) {
  for (let r2 = e63.state.facet(t3), i2 = r2.length - 1; i2 >= 0; i2--) {
    let t4 = r2[i2], a2 = typeof t4 == `function` ? t4(e63) : t4;
    a2 && Bn(a2, n2);
  }
  return n2;
}
var vs = L.mac ? `mac` : L.windows ? `win` : L.linux ? `linux` : `key`;
function ys(e63, t3) {
  let n2 = e63.split(/-(?!$)/), r2 = n2[n2.length - 1];
  r2 == `Space` && (r2 = ` `);
  let i2, a2, o2, s2;
  for (let e64 = 0; e64 < n2.length - 1; ++e64) {
    let r3 = n2[e64];
    if (/^(cmd|meta|m)$/i.test(r3)) s2 = true;
    else if (/^a(lt)?$/i.test(r3)) i2 = true;
    else if (/^(c|ctrl|control)$/i.test(r3)) a2 = true;
    else if (/^s(hift)?$/i.test(r3)) o2 = true;
    else if (/^mod$/i.test(r3)) t3 == `mac` ? s2 = true : a2 = true;
    else throw Error(`Unrecognized modifier name: ` + r3);
  }
  return i2 && (r2 = `Alt-` + r2), a2 && (r2 = `Ctrl-` + r2), s2 && (r2 = `Meta-` + r2), o2 && (r2 = `Shift-` + r2), r2;
}
function bs(e63, t3, n2) {
  return t3.altKey && (e63 = `Alt-` + e63), t3.ctrlKey && (e63 = `Ctrl-` + e63), t3.metaKey && (e63 = `Meta-` + e63), n2 !== false && t3.shiftKey && (e63 = `Shift-` + e63), e63;
}
var xs = _t.default(Y.domEventHandlers({ keydown(e63, t3) {
  return As(ws(t3.state), e63, t3, `editor`);
} })), Ss = A.define({ enables: xs }), Cs = /* @__PURE__ */ new WeakMap();
function ws(e63) {
  let t3 = e63.facet(Ss), n2 = Cs.get(t3);
  return n2 || Cs.set(t3, n2 = Os(t3.reduce((e64, t4) => e64.concat(t4), []))), n2;
}
function Ts(e63, t3, n2) {
  return As(ws(e63.state), t3, e63, n2);
}
var Es = null, Ds = 4e3;
function Os(e63, t3 = vs) {
  let n2 = /* @__PURE__ */ Object.create(null), r2 = /* @__PURE__ */ Object.create(null), i2 = (e64, t4) => {
    let n3 = r2[e64];
    if (n3 == null) r2[e64] = t4;
    else if (n3 != t4) throw Error(`Key binding ` + e64 + ` is used both as a regular binding and as a multi-stroke prefix`);
  }, a2 = (e64, r3, a3, o2, s2) => {
    var _a3, _b;
    let c2 = n2[e64] || (n2[e64] = /* @__PURE__ */ Object.create(null)), l2 = r3.split(/ (?!$)/).map((e65) => ys(e65, t3));
    for (let t4 = 1; t4 < l2.length; t4++) {
      let n3 = l2.slice(0, t4).join(` `);
      i2(n3, true), c2[n3] || (c2[n3] = { preventDefault: true, stopPropagation: false, run: [(t5) => {
        let r4 = Es = { view: t5, prefix: n3, scope: e64 };
        return setTimeout(() => {
          Es == r4 && (Es = null);
        }, Ds), true;
      }] });
    }
    let u2 = l2.join(` `);
    i2(u2, false);
    let d2 = c2[u2] || (c2[u2] = { preventDefault: false, stopPropagation: false, run: ((_b = (_a3 = c2._any) == null ? void 0 : _a3.run) == null ? void 0 : _b.slice()) || [] });
    a3 && d2.run.push(a3), o2 && (d2.preventDefault = true), s2 && (d2.stopPropagation = true);
  };
  for (let r3 of e63) {
    let e64 = r3.scope ? r3.scope.split(` `) : [`editor`];
    if (r3.any) for (let t4 of e64) {
      let e65 = n2[t4] || (n2[t4] = /* @__PURE__ */ Object.create(null));
      e65._any || (e65._any = { preventDefault: false, stopPropagation: false, run: [] });
      let { any: i4 } = r3;
      for (let t5 in e65) e65[t5].run.push((e66) => i4(e66, ks));
    }
    let i3 = r3[t3] || r3.key;
    if (i3) for (let t4 of e64) a2(t4, i3, r3.run, r3.preventDefault, r3.stopPropagation), r3.shift && a2(t4, `Shift-` + i3, r3.shift, r3.preventDefault, r3.stopPropagation);
  }
  return n2;
}
var ks = null;
function As(e63, t3, n2, r2) {
  ks = t3;
  let i2 = Dn(t3), a2 = Ze(Ye(i2, 0)) == i2.length && i2 != ` `, o2 = ``, s2 = false, c2 = false, l2 = false;
  Es && Es.view == n2 && Es.scope == r2 && (o2 = Es.prefix + ` `, Ua.indexOf(t3.keyCode) < 0 && (c2 = true, Es = null));
  let u2 = /* @__PURE__ */ new Set(), d2 = (e64) => {
    if (e64) {
      for (let t4 of e64.run) if (!u2.has(t4) && (u2.add(t4), t4(n2))) return e64.stopPropagation && (l2 = true), true;
      e64.preventDefault && (e64.stopPropagation && (l2 = true), c2 = true);
    }
    return false;
  }, f2 = e63[r2], p2, m2;
  return f2 && (d2(f2[o2 + bs(i2, t3, !a2)]) ? s2 = true : a2 && (t3.altKey || t3.metaKey || t3.ctrlKey) && !(L.windows && t3.ctrlKey && t3.altKey) && !(L.mac && t3.altKey && !(t3.ctrlKey || t3.metaKey)) && (p2 = Sn[t3.keyCode]) && p2 != i2 ? (d2(f2[o2 + bs(p2, t3, true)]) || t3.shiftKey && (m2 = Cn[t3.keyCode]) != i2 && m2 != p2 && d2(f2[o2 + bs(m2, t3, false)])) && (s2 = true) : a2 && t3.shiftKey && d2(f2[o2 + bs(i2, t3, true)]) && (s2 = true), !s2 && d2(f2._any) && (s2 = true)), c2 && (s2 = true), s2 && l2 && t3.stopPropagation(), ks = null, s2;
}
var js = class e51 {
  constructor(e63, t3, n2, r2, i2) {
    this.className = e63, this.left = t3, this.top = n2, this.width = r2, this.height = i2;
  }
  draw() {
    let e63 = document.createElement(`div`);
    return e63.className = this.className, this.adjust(e63), e63;
  }
  update(e63, t3) {
    return t3.className == this.className ? (this.adjust(e63), true) : false;
  }
  adjust(e63) {
    e63.style.left = this.left + `px`, e63.style.top = this.top + `px`, this.width != null && (e63.style.width = this.width + `px`), e63.style.height = this.height + `px`;
  }
  eq(e63) {
    return this.left == e63.left && this.top == e63.top && this.width == e63.width && this.height == e63.height && this.className == e63.className;
  }
  static forRange(t3, n2, r2) {
    if (r2.empty) {
      let i2 = t3.coordsAtPos(r2.head, r2.assoc || 1);
      if (!i2) return [];
      let a2 = Ms(t3);
      return [new e51(n2, i2.left - a2.left, i2.top - a2.top, null, i2.bottom - i2.top)];
    } else return Ps(t3, n2, r2);
  }
};
function Ms(e63) {
  let t3 = e63.scrollDOM.getBoundingClientRect();
  return { left: (e63.textDirection == B.LTR ? t3.left : t3.right - e63.scrollDOM.clientWidth * e63.scaleX) - e63.scrollDOM.scrollLeft * e63.scaleX, top: t3.top - e63.scrollDOM.scrollTop * e63.scaleY };
}
function Ns(e63, t3, n2, r2) {
  let i2 = e63.coordsAtPos(t3, n2 * 2);
  if (!i2) return r2;
  let a2 = e63.dom.getBoundingClientRect(), o2 = (i2.top + i2.bottom) / 2, s2 = e63.posAtCoords({ x: a2.left + 1, y: o2 }), c2 = e63.posAtCoords({ x: a2.right - 1, y: o2 });
  return s2 == null || c2 == null ? r2 : { from: Math.max(r2.from, Math.min(s2, c2)), to: Math.min(r2.to, Math.max(s2, c2)) };
}
function Ps(e63, t3, n2) {
  if (n2.to <= e63.viewport.from || n2.from >= e63.viewport.to) return [];
  let r2 = Math.max(n2.from, e63.viewport.from), i2 = Math.min(n2.to, e63.viewport.to), a2 = e63.textDirection == B.LTR, o2 = e63.contentDOM, s2 = o2.getBoundingClientRect(), c2 = Ms(e63), l2 = o2.querySelector(`.cm-line`), u2 = l2 && window.getComputedStyle(l2), d2 = s2.left + (u2 ? parseInt(u2.paddingLeft) + Math.min(0, parseInt(u2.textIndent)) : 0), f2 = s2.right - (u2 ? parseInt(u2.paddingRight) : 0), p2 = pa(e63, r2, 1), m2 = pa(e63, i2, -1), h2 = p2.type == R.Text ? p2 : null, g2 = m2.type == R.Text ? m2 : null;
  if (h2 && (e63.lineWrapping || p2.widgetLineBreaks) && (h2 = Ns(e63, r2, 1, h2)), g2 && (e63.lineWrapping || m2.widgetLineBreaks) && (g2 = Ns(e63, i2, -1, g2)), h2 && g2 && h2.from == g2.from && h2.to == g2.to) return v2(y2(n2.from, n2.to, h2));
  {
    let t4 = h2 ? y2(n2.from, null, h2) : ee2(p2, false), r3 = g2 ? y2(null, n2.to, g2) : ee2(m2, true), i3 = [];
    return (h2 || p2).to < (g2 || m2).from - (h2 && g2 ? 1 : 0) || p2.widgetLineBreaks > 1 && t4.bottom + e63.defaultLineHeight / 2 < r3.top ? i3.push(_2(d2, t4.bottom, f2, r3.top)) : t4.bottom < r3.top && e63.elementAtHeight((t4.bottom + r3.top) / 2).type == R.Text && (t4.bottom = r3.top = (t4.bottom + r3.top) / 2), v2(t4).concat(i3).concat(v2(r3));
  }
  function _2(e64, n3, r3, i3) {
    return new js(t3, e64 - c2.left, n3 - c2.top, r3 - e64, i3 - n3);
  }
  function v2({ top: e64, bottom: t4, horizontal: n3 }) {
    let r3 = [];
    for (let i3 = 0; i3 < n3.length; i3 += 2) r3.push(_2(n3[i3], e64, n3[i3 + 1], t4));
    return r3;
  }
  function y2(t4, n3, r3) {
    let i3 = 1e9, o3 = -1e9, s3 = [];
    function c3(t5, n4, c4, l4, u4) {
      let p3 = e63.coordsAtPos(t5, t5 == r3.to ? -2 : 2), m3 = e63.coordsAtPos(c4, c4 == r3.from ? 2 : -2);
      !p3 || !m3 || (i3 = Math.min(p3.top, m3.top, i3), o3 = Math.max(p3.bottom, m3.bottom, o3), u4 == B.LTR ? s3.push(a2 && n4 ? d2 : p3.left, a2 && l4 ? f2 : m3.right) : s3.push(!a2 && l4 ? d2 : m3.left, !a2 && n4 ? f2 : p3.right));
    }
    let l3 = t4 ?? r3.from, u3 = n3 ?? r3.to;
    for (let r4 of e63.visibleRanges) if (r4.to > l3 && r4.from < u3) for (let i4 = Math.max(r4.from, l3), a3 = Math.min(r4.to, u3); ; ) {
      let r5 = e63.state.doc.lineAt(i4);
      for (let o4 of e63.bidiSpans(r5)) {
        let e64 = o4.from + r5.from, s4 = o4.to + r5.from;
        if (e64 >= a3) break;
        s4 > i4 && c3(Math.max(e64, i4), t4 == null && e64 <= l3, Math.min(s4, a3), n3 == null && s4 >= u3, o4.dir);
      }
      if (i4 = r5.to + 1, i4 >= a3) break;
    }
    return s3.length == 0 && c3(l3, t4 == null, u3, n3 == null, e63.textDirection), { top: i3, bottom: o3, horizontal: s3 };
  }
  function ee2(e64, t4) {
    let n3 = s2.top + (t4 ? e64.top : e64.bottom);
    return { top: n3, bottom: n3, horizontal: [] };
  }
}
function Fs(e63, t3) {
  return e63.constructor == t3.constructor && e63.eq(t3);
}
var Is = class {
  constructor(e63, t3) {
    this.view = e63, this.layer = t3, this.drawn = [], this.scaleX = 1, this.scaleY = 1, this.measureReq = { read: this.measure.bind(this), write: this.draw.bind(this) }, this.dom = e63.scrollDOM.appendChild(document.createElement(`div`)), this.dom.classList.add(`cm-layer`), t3.above && this.dom.classList.add(`cm-layer-above`), t3.class && this.dom.classList.add(t3.class), this.scale(), this.dom.setAttribute(`aria-hidden`, `true`), this.setOrder(e63.state), e63.requestMeasure(this.measureReq), t3.mount && t3.mount(this.dom, e63);
  }
  update(e63) {
    e63.startState.facet(Ls) != e63.state.facet(Ls) && this.setOrder(e63.state), (this.layer.update(e63, this.dom) || e63.geometryChanged) && (this.scale(), e63.view.requestMeasure(this.measureReq));
  }
  docViewUpdate(e63) {
    this.layer.updateOnDocViewUpdate !== false && e63.requestMeasure(this.measureReq);
  }
  setOrder(e63) {
    let t3 = 0, n2 = e63.facet(Ls);
    for (; t3 < n2.length && n2[t3] != this.layer; ) t3++;
    this.dom.style.zIndex = String((this.layer.above ? 150 : -1) - t3);
  }
  measure() {
    return this.layer.markers(this.view);
  }
  scale() {
    let { scaleX: e63, scaleY: t3 } = this.view;
    (e63 != this.scaleX || t3 != this.scaleY) && (this.scaleX = e63, this.scaleY = t3, this.dom.style.transform = `scale(${1 / e63}, ${1 / t3})`);
  }
  draw(e63) {
    if (e63.length != this.drawn.length || e63.some((e64, t3) => !Fs(e64, this.drawn[t3]))) {
      let t3 = this.dom.firstChild, n2 = 0;
      for (let r2 of e63) r2.update && t3 && r2.constructor && this.drawn[n2].constructor && r2.update(t3, this.drawn[n2]) ? (t3 = t3.nextSibling, n2++) : this.dom.insertBefore(r2.draw(), t3);
      for (; t3; ) {
        let e64 = t3.nextSibling;
        t3.remove(), t3 = e64;
      }
      this.drawn = e63, L.safari && L.safari_version >= 26 && (this.dom.style.display = this.dom.firstChild ? `` : `none`);
    }
  }
  destroy() {
    this.layer.destroy && this.layer.destroy(this.dom, this.view), this.dom.remove();
  }
}, Ls = A.define();
function Rs(e63) {
  return [di.define((t3) => new Is(t3, e63)), Ls.of(e63)];
}
var zs = A.define({ combine(e63) {
  return Jt(e63, { cursorBlinkRate: 1200, drawRangeCursor: true }, { cursorBlinkRate: (e64, t3) => Math.min(e64, t3), drawRangeCursor: (e64, t3) => e64 || t3 });
} });
function Bs(e63 = {}) {
  return [zs.of(e63), Hs, Ws, Gs, ri.of(true)];
}
function Vs(e63) {
  return e63.startState.facet(zs) != e63.state.facet(zs);
}
var Hs = Rs({ above: true, markers(e63) {
  let { state: t3 } = e63, n2 = t3.facet(zs), r2 = [];
  for (let i2 of t3.selection.ranges) {
    let a2 = i2 == t3.selection.main;
    if (i2.empty || n2.drawRangeCursor) {
      let t4 = a2 ? `cm-cursor cm-cursor-primary` : `cm-cursor cm-cursor-secondary`, n3 = i2.empty ? i2 : k.cursor(i2.head, i2.head > i2.anchor ? -1 : 1);
      for (let i3 of js.forRange(e63, t4, n3)) r2.push(i3);
    }
  }
  return r2;
}, update(e63, t3) {
  e63.transactions.some((e64) => e64.selection) && (t3.style.animationName = t3.style.animationName == `cm-blink` ? `cm-blink2` : `cm-blink`);
  let n2 = Vs(e63);
  return n2 && Us(e63.state, t3), e63.docChanged || e63.selectionSet || n2;
}, mount(e63, t3) {
  Us(t3.state, e63);
}, class: `cm-cursorLayer` });
function Us(e63, t3) {
  t3.style.animationDuration = e63.facet(zs).cursorBlinkRate + `ms`;
}
var Ws = Rs({ above: false, markers(e63) {
  return e63.state.selection.ranges.map((t3) => t3.empty ? [] : js.forRange(e63, `cm-selectionBackground`, t3)).reduce((e64, t3) => e64.concat(t3));
}, update(e63, t3) {
  return e63.docChanged || e63.selectionSet || e63.viewportChanged || Vs(e63);
}, class: `cm-selectionLayer` }), Gs = _t.highest(Y.theme({ ".cm-line": { "& ::selection, &::selection": { backgroundColor: `transparent !important` }, caretColor: `transparent !important` }, ".cm-content": { caretColor: `transparent !important`, "& :focus": { caretColor: `initial !important`, "&::selection, & ::selection": { backgroundColor: `Highlight !important` } } } }));
/x/.unicode;
var Ks = class extends Kn {
  constructor(e63) {
    super(), this.content = e63;
  }
  toDOM(e63) {
    let t3 = document.createElement(`span`);
    return t3.className = `cm-placeholder`, t3.style.pointerEvents = `none`, t3.appendChild(typeof this.content == `string` ? document.createTextNode(this.content) : typeof this.content == `function` ? this.content(e63) : this.content.cloneNode(true)), t3.setAttribute(`aria-hidden`, `true`), t3;
  }
  coordsAt(e63) {
    let t3 = e63.firstChild ? rr(e63.firstChild) : [];
    if (!t3.length) return null;
    let n2 = window.getComputedStyle(e63.parentNode), r2 = lr(t3[0], n2.direction != `rtl`), i2 = parseInt(n2.lineHeight);
    return r2.bottom - r2.top > i2 * 1.5 ? { left: r2.left, right: r2.right, top: r2.top, bottom: r2.top + i2 } : r2;
  }
  ignoreEvent() {
    return false;
  }
};
function qs(e63) {
  let t3 = di.fromClass(class {
    constructor(t4) {
      this.view = t4, this.placeholder = e63 ? z.set([z.widget({ widget: new Ks(e63), side: 1 }).range(0)]) : z.none;
    }
    get decorations() {
      return this.view.state.doc.length ? z.none : this.placeholder;
    }
  }, { decorations: (e64) => e64.decorations });
  return typeof e63 == `string` ? [t3, Y.contentAttributes.of({ "aria-placeholder": e63 })] : t3;
}
var Js = `-10000px`, Ys = class {
  constructor(e63, t3, n2, r2) {
    this.facet = t3, this.createTooltipView = n2, this.removeTooltipView = r2, this.input = e63.state.facet(t3), this.tooltips = this.input.filter((e64) => e64);
    let i2 = null;
    this.tooltipViews = this.tooltips.map((e64) => i2 = n2(e64, i2));
  }
  update(e63, t3) {
    var n2;
    let r2 = e63.state.facet(this.facet), i2 = r2.filter((e64) => e64);
    if (r2 === this.input) {
      for (let t4 of this.tooltipViews) t4.update && t4.update(e63);
      return false;
    }
    let a2 = [], o2 = t3 ? [] : null;
    for (let n3 = 0; n3 < i2.length; n3++) {
      let r3 = i2[n3], s2 = -1;
      if (r3) {
        for (let e64 = 0; e64 < this.tooltips.length; e64++) {
          let t4 = this.tooltips[e64];
          t4 && t4.create == r3.create && (s2 = e64);
        }
        if (s2 < 0) a2[n3] = this.createTooltipView(r3, n3 ? a2[n3 - 1] : null), o2 && (o2[n3] = !!r3.above);
        else {
          let r4 = a2[n3] = this.tooltipViews[s2];
          o2 && (o2[n3] = t3[s2]), r4.update && r4.update(e63);
        }
      }
    }
    for (let e64 of this.tooltipViews) a2.indexOf(e64) < 0 && (this.removeTooltipView(e64), (n2 = e64.destroy) == null || n2.call(e64));
    return t3 && (o2.forEach((e64, n3) => t3[n3] = e64), t3.length = o2.length), this.input = r2, this.tooltips = i2, this.tooltipViews = a2, true;
  }
};
function Xs(e63) {
  let t3 = e63.dom.ownerDocument.documentElement;
  return { top: 0, left: 0, bottom: t3.clientHeight, right: t3.clientWidth };
}
var Zs = A.define({ combine: (e63) => {
  var _a3, _b, _c2;
  return { position: L.ios ? `absolute` : ((_a3 = e63.find((e64) => e64.position)) == null ? void 0 : _a3.position) || `fixed`, parent: ((_b = e63.find((e64) => e64.parent)) == null ? void 0 : _b.parent) || null, tooltipSpace: ((_c2 = e63.find((e64) => e64.tooltipSpace)) == null ? void 0 : _c2.tooltipSpace) || Xs };
} }), Qs = /* @__PURE__ */ new WeakMap(), $s = di.fromClass(class {
  constructor(e63) {
    this.view = e63, this.above = [], this.inView = true, this.madeAbsolute = false, this.lastTransaction = 0, this.measureTimeout = -1;
    let t3 = e63.state.facet(Zs);
    this.position = t3.position, this.parent = t3.parent, this.classes = e63.themeClasses, this.createContainer(), this.measureReq = { read: this.readMeasure.bind(this), write: this.writeMeasure.bind(this), key: this }, this.resizeObserver = typeof ResizeObserver == `function` ? new ResizeObserver(() => this.measureSoon()) : null, this.manager = new Ys(e63, rc, (e64, t4) => this.createTooltip(e64, t4), (e64) => {
      this.resizeObserver && this.resizeObserver.unobserve(e64.dom), e64.dom.remove();
    }), this.above = this.manager.tooltips.map((e64) => !!e64.above), this.intersectionObserver = typeof IntersectionObserver == `function` ? new IntersectionObserver((e64) => {
      Date.now() > this.lastTransaction - 50 && e64.length > 0 && e64[e64.length - 1].intersectionRatio < 1 && this.measureSoon();
    }, { threshold: [1] }) : null, this.observeIntersection(), e63.win.addEventListener(`resize`, this.measureSoon = this.measureSoon.bind(this)), this.maybeMeasure();
  }
  createContainer() {
    this.parent ? (this.container = document.createElement(`div`), this.container.style.position = `relative`, this.container.className = this.view.themeClasses, this.parent.appendChild(this.container)) : this.container = this.view.dom;
  }
  observeIntersection() {
    if (this.intersectionObserver) {
      this.intersectionObserver.disconnect();
      for (let e63 of this.manager.tooltipViews) this.intersectionObserver.observe(e63.dom);
    }
  }
  measureSoon() {
    this.measureTimeout < 0 && (this.measureTimeout = setTimeout(() => {
      this.measureTimeout = -1, this.maybeMeasure();
    }, 50));
  }
  update(e63) {
    e63.transactions.length && (this.lastTransaction = Date.now());
    let t3 = this.manager.update(e63, this.above);
    t3 && this.observeIntersection();
    let n2 = t3 || e63.geometryChanged, r2 = e63.state.facet(Zs);
    if (r2.position != this.position && !this.madeAbsolute) {
      this.position = r2.position;
      for (let e64 of this.manager.tooltipViews) e64.dom.style.position = this.position;
      n2 = true;
    }
    if (r2.parent != this.parent) {
      this.parent && this.container.remove(), this.parent = r2.parent, this.createContainer();
      for (let e64 of this.manager.tooltipViews) this.container.appendChild(e64.dom);
      n2 = true;
    } else this.parent && this.view.themeClasses != this.classes && (this.classes = this.container.className = this.view.themeClasses);
    n2 && this.maybeMeasure();
  }
  createTooltip(e63, t3) {
    let n2 = e63.create(this.view), r2 = t3 ? t3.dom : null;
    if (n2.dom.classList.add(`cm-tooltip`), e63.arrow && !n2.dom.querySelector(`.cm-tooltip > .cm-tooltip-arrow`)) {
      let e64 = document.createElement(`div`);
      e64.className = `cm-tooltip-arrow`, n2.dom.appendChild(e64);
    }
    return n2.dom.style.position = this.position, n2.dom.style.top = Js, n2.dom.style.left = `0px`, this.container.insertBefore(n2.dom, r2), n2.mount && n2.mount(this.view), this.resizeObserver && this.resizeObserver.observe(n2.dom), n2;
  }
  destroy() {
    var e63, t3, n2;
    this.view.win.removeEventListener(`resize`, this.measureSoon);
    for (let t4 of this.manager.tooltipViews) t4.dom.remove(), (e63 = t4.destroy) == null || e63.call(t4);
    this.parent && this.container.remove(), (t3 = this.resizeObserver) == null || t3.disconnect(), (n2 = this.intersectionObserver) == null || n2.disconnect(), clearTimeout(this.measureTimeout);
  }
  readMeasure() {
    let e63 = 1, t3 = 1, n2 = false;
    if (this.position == `fixed` && this.manager.tooltipViews.length) {
      let { dom: e64 } = this.manager.tooltipViews[0];
      if (L.safari) {
        let t4 = e64.getBoundingClientRect();
        n2 = Math.abs(t4.top + 1e4) > 1 || Math.abs(t4.left) > 1;
      } else n2 = !!e64.offsetParent && e64.offsetParent != this.container.ownerDocument.body;
    }
    if (n2 || this.position == `absolute`) if (this.parent) {
      let n3 = this.parent.getBoundingClientRect();
      n3.width && n3.height && (e63 = n3.width / this.parent.offsetWidth, t3 = n3.height / this.parent.offsetHeight);
    } else ({ scaleX: e63, scaleY: t3 } = this.view.viewState);
    let r2 = this.view.scrollDOM.getBoundingClientRect(), i2 = Si(this.view);
    return { visible: { left: r2.left + i2.left, top: r2.top + i2.top, right: r2.right - i2.right, bottom: r2.bottom - i2.bottom }, parent: this.parent ? this.container.getBoundingClientRect() : this.view.dom.getBoundingClientRect(), pos: this.manager.tooltips.map((e64, t4) => {
      let n3 = this.manager.tooltipViews[t4];
      return n3.getCoords ? n3.getCoords(e64.pos) : this.view.coordsAtPos(e64.pos);
    }), size: this.manager.tooltipViews.map(({ dom: e64 }) => e64.getBoundingClientRect()), space: this.view.state.facet(Zs).tooltipSpace(this.view), scaleX: e63, scaleY: t3, makeAbsolute: n2 };
  }
  writeMeasure(e63) {
    if (e63.makeAbsolute) {
      this.madeAbsolute = true, this.position = `absolute`;
      for (let e64 of this.manager.tooltipViews) e64.dom.style.position = `absolute`;
    }
    let { visible: t3, space: n2, scaleX: r2, scaleY: i2 } = e63, a2 = [];
    for (let o2 = 0; o2 < this.manager.tooltips.length; o2++) {
      let s2 = this.manager.tooltips[o2], c2 = this.manager.tooltipViews[o2], { dom: l2 } = c2, u2 = e63.pos[o2], d2 = e63.size[o2];
      if (!u2 || s2.clip !== false && (u2.bottom <= Math.max(t3.top, n2.top) || u2.top >= Math.min(t3.bottom, n2.bottom) || u2.right < Math.max(t3.left, n2.left) - 0.1 || u2.left > Math.min(t3.right, n2.right) + 0.1)) {
        l2.style.top = Js;
        continue;
      }
      let f2 = s2.arrow ? c2.dom.querySelector(`.cm-tooltip-arrow`) : null, p2 = f2 ? 7 : 0, m2 = d2.right - d2.left, h2 = Qs.get(c2) ?? d2.bottom - d2.top, g2 = c2.offset || nc, _2 = this.view.textDirection == B.LTR, v2 = d2.width > n2.right - n2.left ? _2 ? n2.left : n2.right - d2.width : _2 ? Math.max(n2.left, Math.min(u2.left - (f2 ? 14 : 0) + g2.x, n2.right - m2)) : Math.min(Math.max(n2.left, u2.left - m2 + (f2 ? 14 : 0) - g2.x), n2.right - m2), y2 = this.above[o2];
      !s2.strictSide && (y2 ? u2.top - h2 - p2 - g2.y < n2.top : u2.bottom + h2 + p2 + g2.y > n2.bottom) && y2 == n2.bottom - u2.bottom > u2.top - n2.top && (y2 = this.above[o2] = !y2);
      let ee2 = (y2 ? u2.top - n2.top : n2.bottom - u2.bottom) - p2;
      if (ee2 < h2 && c2.resize !== false) {
        if (ee2 < this.view.defaultLineHeight) {
          l2.style.top = Js;
          continue;
        }
        Qs.set(c2, h2), l2.style.height = (h2 = ee2) / i2 + `px`;
      } else l2.style.height && (l2.style.height = ``);
      let b2 = y2 ? u2.top - h2 - p2 - g2.y : u2.bottom + p2 + g2.y, x2 = v2 + m2;
      if (c2.overlap !== true) for (let e64 of a2) e64.left < x2 && e64.right > v2 && e64.top < b2 + h2 && e64.bottom > b2 && (b2 = y2 ? e64.top - h2 - 2 - p2 : e64.bottom + p2 + 2);
      if (this.position == `absolute` ? (l2.style.top = (b2 - e63.parent.top) / i2 + `px`, ec(l2, (v2 - e63.parent.left) / r2)) : (l2.style.top = b2 / i2 + `px`, ec(l2, v2 / r2)), f2) {
        let e64 = u2.left + (_2 ? g2.x : -g2.x) - (v2 + 14 - 7);
        f2.style.left = e64 / r2 + `px`;
      }
      c2.overlap !== true && a2.push({ left: v2, top: b2, right: x2, bottom: b2 + h2 }), l2.classList.toggle(`cm-tooltip-above`, y2), l2.classList.toggle(`cm-tooltip-below`, !y2), c2.positioned && c2.positioned(e63.space);
    }
  }
  maybeMeasure() {
    if (this.manager.tooltips.length && (this.view.inView && this.view.requestMeasure(this.measureReq), this.inView != this.view.inView && (this.inView = this.view.inView, !this.inView))) for (let e63 of this.manager.tooltipViews) e63.dom.style.top = Js;
  }
}, { eventObservers: { scroll() {
  this.maybeMeasure();
} } });
function ec(e63, t3) {
  let n2 = parseInt(e63.style.left, 10);
  (isNaN(n2) || Math.abs(t3 - n2) > 1) && (e63.style.left = t3 + `px`);
}
var tc = Y.baseTheme({ ".cm-tooltip": { zIndex: 500, boxSizing: `border-box` }, "&light .cm-tooltip": { border: `1px solid #bbb`, backgroundColor: `#f5f5f5` }, "&light .cm-tooltip-section:not(:first-child)": { borderTop: `1px solid #bbb` }, "&dark .cm-tooltip": { backgroundColor: `#333338`, color: `white` }, ".cm-tooltip-arrow": { height: `7px`, width: `14px`, position: `absolute`, zIndex: -1, overflow: `hidden`, "&:before, &:after": { content: `''`, position: `absolute`, width: 0, height: 0, borderLeft: `7px solid transparent`, borderRight: `7px solid transparent` }, ".cm-tooltip-above &": { bottom: `-7px`, "&:before": { borderTop: `7px solid #bbb` }, "&:after": { borderTop: `7px solid #f5f5f5`, bottom: `1px` } }, ".cm-tooltip-below &": { top: `-7px`, "&:before": { borderBottom: `7px solid #bbb` }, "&:after": { borderBottom: `7px solid #f5f5f5`, top: `1px` } } }, "&dark .cm-tooltip .cm-tooltip-arrow": { "&:before": { borderTopColor: `#333338`, borderBottomColor: `#333338` }, "&:after": { borderTopColor: `transparent`, borderBottomColor: `transparent` } } }), nc = { x: 0, y: 0 }, rc = A.define({ enables: [$s, tc] });
function ic(e63, t3) {
  let n2 = e63.plugin($s);
  if (!n2) return null;
  let r2 = n2.manager.tooltips.indexOf(t3);
  return r2 < 0 ? null : n2.manager.tooltipViews[r2];
}
var ac = A.define({ combine(e63) {
  let t3, n2;
  for (let r2 of e63) t3 || (t3 = r2.topContainer), n2 || (n2 = r2.bottomContainer);
  return { topContainer: t3, bottomContainer: n2 };
} });
function oc(e63, t3) {
  let n2 = e63.plugin(sc), r2 = n2 ? n2.specs.indexOf(t3) : -1;
  return r2 > -1 ? n2.panels[r2] : null;
}
var sc = di.fromClass(class {
  constructor(e63) {
    this.input = e63.state.facet(uc), this.specs = this.input.filter((e64) => e64), this.panels = this.specs.map((t4) => t4(e63));
    let t3 = e63.state.facet(ac);
    this.top = new cc(e63, true, t3.topContainer), this.bottom = new cc(e63, false, t3.bottomContainer), this.top.sync(this.panels.filter((e64) => e64.top)), this.bottom.sync(this.panels.filter((e64) => !e64.top));
    for (let e64 of this.panels) e64.dom.classList.add(`cm-panel`), e64.mount && e64.mount();
  }
  update(e63) {
    let t3 = e63.state.facet(ac);
    this.top.container != t3.topContainer && (this.top.sync([]), this.top = new cc(e63.view, true, t3.topContainer)), this.bottom.container != t3.bottomContainer && (this.bottom.sync([]), this.bottom = new cc(e63.view, false, t3.bottomContainer)), this.top.syncClasses(), this.bottom.syncClasses();
    let n2 = e63.state.facet(uc);
    if (n2 != this.input) {
      let t4 = n2.filter((e64) => e64), r2 = [], i2 = [], a2 = [], o2 = [];
      for (let n3 of t4) {
        let t5 = this.specs.indexOf(n3), s2;
        t5 < 0 ? (s2 = n3(e63.view), o2.push(s2)) : (s2 = this.panels[t5], s2.update && s2.update(e63)), r2.push(s2), (s2.top ? i2 : a2).push(s2);
      }
      this.specs = t4, this.panels = r2, this.top.sync(i2), this.bottom.sync(a2);
      for (let e64 of o2) e64.dom.classList.add(`cm-panel`), e64.mount && e64.mount();
    } else for (let t4 of this.panels) t4.update && t4.update(e63);
  }
  destroy() {
    this.top.sync([]), this.bottom.sync([]);
  }
}, { provide: (e63) => Y.scrollMargins.of((t3) => {
  let n2 = t3.plugin(e63);
  return n2 && { top: n2.top.scrollMargin(), bottom: n2.bottom.scrollMargin() };
}) }), cc = class {
  constructor(e63, t3, n2) {
    this.view = e63, this.top = t3, this.container = n2, this.dom = void 0, this.classes = ``, this.panels = [], this.syncClasses();
  }
  sync(e63) {
    for (let t3 of this.panels) t3.destroy && e63.indexOf(t3) < 0 && t3.destroy();
    this.panels = e63, this.syncDOM();
  }
  syncDOM() {
    if (this.panels.length == 0) {
      this.dom && (this.dom = (this.dom.remove(), void 0));
      return;
    }
    if (!this.dom) {
      this.dom = document.createElement(`div`), this.dom.className = this.top ? `cm-panels cm-panels-top` : `cm-panels cm-panels-bottom`, this.dom.style[this.top ? `top` : `bottom`] = `0`;
      let e64 = this.container || this.view.dom;
      e64.insertBefore(this.dom, this.top ? e64.firstChild : null);
    }
    let e63 = this.dom.firstChild;
    for (let t3 of this.panels) if (t3.dom.parentNode == this.dom) {
      for (; e63 != t3.dom; ) e63 = lc(e63);
      e63 = e63.nextSibling;
    } else this.dom.insertBefore(t3.dom, e63);
    for (; e63; ) e63 = lc(e63);
  }
  scrollMargin() {
    return !this.dom || this.container ? 0 : Math.max(0, this.top ? this.dom.getBoundingClientRect().bottom - Math.max(0, this.view.scrollDOM.getBoundingClientRect().top) : Math.min(innerHeight, this.view.scrollDOM.getBoundingClientRect().bottom) - this.dom.getBoundingClientRect().top);
  }
  syncClasses() {
    if (!(!this.container || this.classes == this.view.themeClasses)) {
      for (let e63 of this.classes.split(` `)) e63 && this.container.classList.remove(e63);
      for (let e63 of (this.classes = this.view.themeClasses).split(` `)) e63 && this.container.classList.add(e63);
    }
  }
};
function lc(e63) {
  let t3 = e63.nextSibling;
  return e63.remove(), t3;
}
var uc = A.define({ enables: sc }), dc = class extends Yt {
  compare(e63) {
    return this == e63 || this.constructor == e63.constructor && this.eq(e63);
  }
  eq(e63) {
    return false;
  }
  destroy(e63) {
  }
};
dc.prototype.elementClass = ``, dc.prototype.toDOM = void 0, dc.prototype.mapMode = E.TrackBefore, dc.prototype.startSide = dc.prototype.endSide = -1, dc.prototype.point = true;
var fc = 0, pc = class e52 {
  constructor(e63, t3, n2, r2) {
    this.name = e63, this.set = t3, this.base = n2, this.modified = r2, this.id = fc++;
  }
  toString() {
    let { name: e63 } = this;
    for (let t3 of this.modified) t3.name && (e63 = `${t3.name}(${e63})`);
    return e63;
  }
  static define(t3, n2) {
    let r2 = typeof t3 == `string` ? t3 : `?`;
    if (t3 instanceof e52 && (n2 = t3), n2 == null ? void 0 : n2.base) throw Error(`Can not derive from a modified tag`);
    let i2 = new e52(r2, [], null, []);
    if (i2.set.push(i2), n2) for (let e63 of n2.set) i2.set.push(e63);
    return i2;
  }
  static defineModifier(e63) {
    let t3 = new hc(e63);
    return (e64) => e64.modified.indexOf(t3) > -1 ? e64 : hc.get(e64.base || e64, e64.modified.concat(t3).sort((e65, t4) => e65.id - t4.id));
  }
}, mc = 0, hc = class e53 {
  constructor(e63) {
    this.name = e63, this.instances = [], this.id = mc++;
  }
  static get(t3, n2) {
    if (!n2.length) return t3;
    let r2 = n2[0].instances.find((e63) => e63.base == t3 && gc(n2, e63.modified));
    if (r2) return r2;
    let i2 = [], a2 = new pc(t3.name, i2, t3, n2);
    for (let e63 of n2) e63.instances.push(a2);
    let o2 = _c(n2);
    for (let n3 of t3.set) if (!n3.modified.length) for (let t4 of o2) i2.push(e53.get(n3, t4));
    return a2;
  }
};
function gc(e63, t3) {
  return e63.length == t3.length && e63.every((e64, n2) => e64 == t3[n2]);
}
function _c(e63) {
  let t3 = [[]];
  for (let n2 = 0; n2 < e63.length; n2++) for (let r2 = 0, i2 = t3.length; r2 < i2; r2++) t3.push(t3[r2].concat(e63[n2]));
  return t3.sort((e64, t4) => t4.length - e64.length);
}
function vc(e63) {
  let t3 = /* @__PURE__ */ Object.create(null);
  for (let n2 in e63) {
    let r2 = e63[n2];
    Array.isArray(r2) || (r2 = [r2]);
    for (let e64 of n2.split(` `)) if (e64) {
      let n3 = [], i2 = 2, a2 = e64;
      for (let t4 = 0; ; ) {
        if (a2 == `...` && t4 > 0 && t4 + 3 == e64.length) {
          i2 = 1;
          break;
        }
        let r3 = /^"(?:[^"\\]|\\.)*?"|[^\/!]+/.exec(a2);
        if (!r3) throw RangeError(`Invalid path: ` + e64);
        if (n3.push(r3[0] == `*` ? `` : r3[0][0] == `"` ? JSON.parse(r3[0]) : r3[0]), t4 += r3[0].length, t4 == e64.length) break;
        let o3 = e64[t4++];
        if (t4 == e64.length && o3 == `!`) {
          i2 = 0;
          break;
        }
        if (o3 != `/`) throw RangeError(`Invalid path: ` + e64);
        a2 = e64.slice(t4);
      }
      let o2 = n3.length - 1, s2 = n3[o2];
      if (!s2) throw RangeError(`Invalid path: ` + e64);
      t3[s2] = new bc(r2, i2, o2 > 0 ? n3.slice(0, o2) : null).sort(t3[s2]);
    }
  }
  return yc.add(t3);
}
var yc = new r({ combine(e63, t3) {
  let n2, r2, i2;
  for (; e63 || t3; ) {
    if (!e63 || t3 && e63.depth >= t3.depth ? (i2 = t3, t3 = t3.next) : (i2 = e63, e63 = e63.next), n2 && n2.mode == i2.mode && !i2.context && !n2.context) continue;
    let a2 = new bc(i2.tags, i2.mode, i2.context);
    n2 ? n2.next = a2 : r2 = a2, n2 = a2;
  }
  return r2;
} }), bc = class {
  constructor(e63, t3, n2, r2) {
    this.tags = e63, this.mode = t3, this.context = n2, this.next = r2;
  }
  get opaque() {
    return this.mode == 0;
  }
  get inherit() {
    return this.mode == 1;
  }
  sort(e63) {
    return !e63 || e63.depth < this.depth ? (this.next = e63, this) : (e63.next = this.sort(e63.next), e63);
  }
  get depth() {
    return this.context ? this.context.length : 0;
  }
};
bc.empty = new bc([], 2, null);
function xc(e63, t3) {
  let n2 = /* @__PURE__ */ Object.create(null);
  for (let t4 of e63) if (!Array.isArray(t4.tag)) n2[t4.tag.id] = t4.class;
  else for (let e64 of t4.tag) n2[e64.id] = t4.class;
  let { scope: r2, all: i2 = null } = t3 || {};
  return { style: (e64) => {
    let t4 = i2;
    for (let r3 of e64) for (let e65 of r3.set) {
      let r4 = n2[e65.id];
      if (r4) {
        t4 = t4 ? t4 + ` ` + r4 : r4;
        break;
      }
    }
    return t4;
  }, scope: r2 };
}
function Sc(e63, t3) {
  let n2 = null;
  for (let r2 of e63) {
    let e64 = r2.style(t3);
    e64 && (n2 = n2 ? n2 + ` ` + e64 : e64);
  }
  return n2;
}
function Cc(e63, t3, n2, r2 = 0, i2 = e63.length) {
  let a2 = new wc(r2, Array.isArray(t3) ? t3 : [t3], n2);
  a2.highlightRange(e63.cursor(), r2, i2, ``, a2.highlighters), a2.flush(i2);
}
var wc = class {
  constructor(e63, t3, n2) {
    this.at = e63, this.highlighters = t3, this.span = n2, this.class = ``;
  }
  startSpan(e63, t3) {
    t3 != this.class && (this.flush(e63), e63 > this.at && (this.at = e63), this.class = t3);
  }
  flush(e63) {
    e63 > this.at && this.class && this.span(this.at, e63, this.class);
  }
  highlightRange(e63, t3, n2, i2, a2) {
    let { type: o2, from: s2, to: c2 } = e63;
    if (s2 >= n2 || c2 <= t3) return;
    o2.isTop && (a2 = this.highlighters.filter((e64) => !e64.scope || e64.scope(o2)));
    let l2 = i2, u2 = Tc(e63) || bc.empty, d2 = Sc(a2, u2.tags);
    if (d2 && (l2 && (l2 += ` `), l2 += d2, u2.mode == 1 && (i2 += (i2 ? ` ` : ``) + d2)), this.startSpan(Math.max(t3, s2), l2), u2.opaque) return;
    let f2 = e63.tree && e63.tree.prop(r.mounted);
    if (f2 && f2.overlay) {
      let r2 = e63.node.enter(f2.overlay[0].from + s2, 1), o3 = this.highlighters.filter((e64) => !e64.scope || e64.scope(f2.tree.type)), u3 = e63.firstChild();
      for (let d3 = 0, p2 = s2; ; d3++) {
        let m2 = d3 < f2.overlay.length ? f2.overlay[d3] : null, h2 = m2 ? m2.from + s2 : c2, g2 = Math.max(t3, p2), _2 = Math.min(n2, h2);
        if (g2 < _2 && u3) for (; e63.from < _2 && (this.highlightRange(e63, g2, _2, i2, a2), this.startSpan(Math.min(_2, e63.to), l2), !(e63.to >= h2 || !e63.nextSibling())); ) ;
        if (!m2 || h2 > n2) break;
        p2 = m2.to + s2, p2 > t3 && (this.highlightRange(r2.cursor(), Math.max(t3, m2.from + s2), Math.min(n2, p2), ``, o3), this.startSpan(Math.min(n2, p2), l2));
      }
      u3 && e63.parent();
    } else if (e63.firstChild()) {
      f2 && (i2 = ``);
      do {
        if (e63.to <= t3) continue;
        if (e63.from >= n2) break;
        this.highlightRange(e63, t3, n2, i2, a2), this.startSpan(Math.min(n2, e63.to), l2);
      } while (e63.nextSibling());
      e63.parent();
    }
  }
};
function Tc(e63) {
  let t3 = e63.type.prop(yc);
  for (; t3 && t3.context && !e63.matchContext(t3.context); ) t3 = t3.next;
  return t3 || null;
}
var X = pc.define, Ec = X(), Dc = X(), Oc = X(Dc), kc = X(Dc), Ac = X(), jc = X(Ac), Mc = X(Ac), Nc = X(), Pc = X(Nc), Fc = X(), Ic = X(), Lc = X(), Rc = X(Lc), zc = X(), Z = { comment: Ec, lineComment: X(Ec), blockComment: X(Ec), docComment: X(Ec), name: Dc, variableName: X(Dc), typeName: Oc, tagName: X(Oc), propertyName: kc, attributeName: X(kc), className: X(Dc), labelName: X(Dc), namespace: X(Dc), macroName: X(Dc), literal: Ac, string: jc, docString: X(jc), character: X(jc), attributeValue: X(jc), number: Mc, integer: X(Mc), float: X(Mc), bool: X(Ac), regexp: X(Ac), escape: X(Ac), color: X(Ac), url: X(Ac), keyword: Fc, self: X(Fc), null: X(Fc), atom: X(Fc), unit: X(Fc), modifier: X(Fc), operatorKeyword: X(Fc), controlKeyword: X(Fc), definitionKeyword: X(Fc), moduleKeyword: X(Fc), operator: Ic, derefOperator: X(Ic), arithmeticOperator: X(Ic), logicOperator: X(Ic), bitwiseOperator: X(Ic), compareOperator: X(Ic), updateOperator: X(Ic), definitionOperator: X(Ic), typeOperator: X(Ic), controlOperator: X(Ic), punctuation: Lc, separator: X(Lc), bracket: Rc, angleBracket: X(Rc), squareBracket: X(Rc), paren: X(Rc), brace: X(Rc), content: Nc, heading: Pc, heading1: X(Pc), heading2: X(Pc), heading3: X(Pc), heading4: X(Pc), heading5: X(Pc), heading6: X(Pc), contentSeparator: X(Nc), list: X(Nc), quote: X(Nc), emphasis: X(Nc), strong: X(Nc), link: X(Nc), monospace: X(Nc), strikethrough: X(Nc), inserted: X(), deleted: X(), changed: X(), invalid: X(), meta: zc, documentMeta: X(zc), annotation: X(zc), processingInstruction: X(zc), definition: pc.defineModifier(`definition`), constant: pc.defineModifier(`constant`), function: pc.defineModifier(`function`), standard: pc.defineModifier(`standard`), local: pc.defineModifier(`local`), special: pc.defineModifier(`special`) };
for (let e63 in Z) {
  let t3 = Z[e63];
  t3 instanceof pc && (t3.name = e63);
}
xc([{ tag: Z.link, class: `tok-link` }, { tag: Z.heading, class: `tok-heading` }, { tag: Z.emphasis, class: `tok-emphasis` }, { tag: Z.strong, class: `tok-strong` }, { tag: Z.keyword, class: `tok-keyword` }, { tag: Z.atom, class: `tok-atom` }, { tag: Z.bool, class: `tok-bool` }, { tag: Z.url, class: `tok-url` }, { tag: Z.labelName, class: `tok-labelName` }, { tag: Z.inserted, class: `tok-inserted` }, { tag: Z.deleted, class: `tok-deleted` }, { tag: Z.literal, class: `tok-literal` }, { tag: Z.string, class: `tok-string` }, { tag: Z.number, class: `tok-number` }, { tag: [Z.regexp, Z.escape, Z.special(Z.string)], class: `tok-string2` }, { tag: Z.variableName, class: `tok-variableName` }, { tag: Z.local(Z.variableName), class: `tok-variableName tok-local` }, { tag: Z.definition(Z.variableName), class: `tok-variableName tok-definition` }, { tag: Z.special(Z.variableName), class: `tok-variableName2` }, { tag: Z.definition(Z.propertyName), class: `tok-propertyName tok-definition` }, { tag: Z.typeName, class: `tok-typeName` }, { tag: Z.namespace, class: `tok-namespace` }, { tag: Z.className, class: `tok-className` }, { tag: Z.macroName, class: `tok-macroName` }, { tag: Z.propertyName, class: `tok-propertyName` }, { tag: Z.operator, class: `tok-operator` }, { tag: Z.comment, class: `tok-comment` }, { tag: Z.meta, class: `tok-meta` }, { tag: Z.invalid, class: `tok-invalid` }, { tag: Z.punctuation, class: `tok-punctuation` }]);
var Bc = new r();
function Vc(e63) {
  return A.define({ combine: e63 ? (t3) => t3.concat(e63) : void 0 });
}
var Hc = new r(), Q = class {
  constructor(e63, t3, n2 = [], r2 = ``) {
    this.data = e63, this.name = r2, N.prototype.hasOwnProperty(`tree`) || Object.defineProperty(N.prototype, `tree`, { get() {
      return Gc(this);
    } }), this.parser = t3, this.extension = [el.of(this), N.languageData.of((e64, t4, n3) => {
      let r3 = Uc(e64, t4, n3), i2 = r3.type.prop(Bc);
      if (!i2) return [];
      let a2 = e64.facet(i2), o2 = r3.type.prop(Hc);
      if (o2) {
        let i3 = r3.resolve(t4 - r3.from, n3);
        for (let t5 of o2) if (t5.test(i3, e64)) {
          let n4 = e64.facet(t5.facet);
          return t5.type == `replace` ? n4 : n4.concat(a2);
        }
      }
      return a2;
    })].concat(n2);
  }
  isActiveAt(e63, t3, n2 = -1) {
    return Uc(e63, t3, n2).type.prop(Bc) == this.data;
  }
  findRegions(e63) {
    let t3 = e63.facet(el);
    if ((t3 == null ? void 0 : t3.data) == this.data) return [{ from: 0, to: e63.doc.length }];
    if (!t3 || !t3.allowsNesting) return [];
    let n2 = [], i2 = (e64, t4) => {
      if (e64.prop(Bc) == this.data) {
        n2.push({ from: t4, to: t4 + e64.length });
        return;
      }
      let a2 = e64.prop(r.mounted);
      if (a2) {
        if (a2.tree.prop(Bc) == this.data) {
          if (a2.overlay) for (let e65 of a2.overlay) n2.push({ from: e65.from + t4, to: e65.to + t4 });
          else n2.push({ from: t4, to: t4 + e64.length });
          return;
        } else if (a2.overlay) {
          let e65 = n2.length;
          if (i2(a2.tree, a2.overlay[0].from + t4), n2.length > e65) return;
        }
      }
      for (let n3 = 0; n3 < e64.children.length; n3++) {
        let r2 = e64.children[n3];
        r2 instanceof d && i2(r2, e64.positions[n3] + t4);
      }
    };
    return i2(Gc(e63), 0), n2;
  }
  get allowsNesting() {
    return true;
  }
};
Q.setState = j.define();
function Uc(e63, t3, n2) {
  let r2 = e63.facet(el), i2 = Gc(e63).topNode;
  if (!r2 || r2.allowsNesting) for (let e64 = i2; e64; e64 = e64.enter(t3, n2, u.ExcludeBuffers | u.EnterBracketed)) e64.type.isTop && (i2 = e64);
  return i2;
}
var Wc = class e54 extends Q {
  constructor(e63, t3, n2) {
    super(e63, t3, [], n2), this.parser = t3;
  }
  static define(t3) {
    let n2 = Vc(t3.languageData);
    return new e54(n2, t3.parser.configure({ props: [Bc.add((e63) => e63.isTop ? n2 : void 0)] }), t3.name);
  }
  configure(t3, n2) {
    return new e54(this.data, this.parser.configure(t3), n2 || this.name);
  }
  get allowsNesting() {
    return this.parser.hasWrappers();
  }
};
function Gc(e63) {
  let t3 = e63.field(Q.state, false);
  return t3 ? t3.tree : d.empty;
}
var Kc = class {
  constructor(e63) {
    this.doc = e63, this.cursorPos = 0, this.string = ``, this.cursor = e63.iter();
  }
  get length() {
    return this.doc.length;
  }
  syncTo(e63) {
    return this.string = this.cursor.next(e63 - this.cursorPos).value, this.cursorPos = e63 + this.string.length, this.cursorPos - this.string.length;
  }
  chunk(e63) {
    return this.syncTo(e63), this.string;
  }
  get lineChunks() {
    return true;
  }
  read(e63, t3) {
    let n2 = this.cursorPos - this.string.length;
    return e63 < n2 || t3 >= this.cursorPos ? this.doc.sliceString(e63, t3) : this.string.slice(e63 - n2, t3 - n2);
  }
}, qc = null, Jc = class e55 {
  constructor(e63, t3, n2 = [], r2, i2, a2, o2, s2) {
    this.parser = e63, this.state = t3, this.fragments = n2, this.tree = r2, this.treeLen = i2, this.viewport = a2, this.skipped = o2, this.scheduleOn = s2, this.parse = null, this.tempSkipped = [];
  }
  static create(t3, n2, r2) {
    return new e55(t3, n2, [], d.empty, 0, r2, [], null);
  }
  startParse() {
    return this.parser.startParse(new Kc(this.state.doc), this.fragments);
  }
  work(e63, t3) {
    return t3 != null && t3 >= this.state.doc.length && (t3 = void 0), this.tree != d.empty && this.isDone(t3 ?? this.state.doc.length) ? (this.takeTree(), true) : this.withContext(() => {
      if (typeof e63 == `number`) {
        let t4 = Date.now() + e63;
        e63 = () => Date.now() > t4;
      }
      for (this.parse || (this.parse = this.startParse()), t3 != null && (this.parse.stoppedAt == null || this.parse.stoppedAt > t3) && t3 < this.state.doc.length && this.parse.stopAt(t3); ; ) {
        let n2 = this.parse.advance();
        if (n2) if (this.fragments = this.withoutTempSkipped(le.addTree(n2, this.fragments, this.parse.stoppedAt != null)), this.treeLen = this.parse.stoppedAt ?? this.state.doc.length, this.tree = n2, this.parse = null, this.treeLen < (t3 ?? this.state.doc.length)) this.parse = this.startParse();
        else return true;
        if (e63()) return false;
      }
    });
  }
  takeTree() {
    let e63, t3;
    this.parse && (e63 = this.parse.parsedPos) >= this.treeLen && ((this.parse.stoppedAt == null || this.parse.stoppedAt > e63) && this.parse.stopAt(e63), this.withContext(() => {
      for (; !(t3 = this.parse.advance()); ) ;
    }), this.treeLen = e63, this.tree = t3, this.fragments = this.withoutTempSkipped(le.addTree(this.tree, this.fragments, true)), this.parse = null);
  }
  withContext(e63) {
    let t3 = qc;
    qc = this;
    try {
      return e63();
    } finally {
      qc = t3;
    }
  }
  withoutTempSkipped(e63) {
    for (let t3; t3 = this.tempSkipped.pop(); ) e63 = Yc(e63, t3.from, t3.to);
    return e63;
  }
  changes(t3, n2) {
    let { fragments: r2, tree: i2, treeLen: a2, viewport: o2, skipped: s2 } = this;
    if (this.takeTree(), !t3.empty) {
      let e63 = [];
      if (t3.iterChangedRanges((t4, n3, r3, i3) => e63.push({ fromA: t4, toA: n3, fromB: r3, toB: i3 })), r2 = le.applyChanges(r2, e63), i2 = d.empty, a2 = 0, o2 = { from: t3.mapPos(o2.from, -1), to: t3.mapPos(o2.to, 1) }, this.skipped.length) {
        s2 = [];
        for (let e64 of this.skipped) {
          let n3 = t3.mapPos(e64.from, 1), r3 = t3.mapPos(e64.to, -1);
          n3 < r3 && s2.push({ from: n3, to: r3 });
        }
      }
    }
    return new e55(this.parser, n2, r2, i2, a2, o2, s2, this.scheduleOn);
  }
  updateViewport(e63) {
    if (this.viewport.from == e63.from && this.viewport.to == e63.to) return false;
    this.viewport = e63;
    let t3 = this.skipped.length;
    for (let t4 = 0; t4 < this.skipped.length; t4++) {
      let { from: n2, to: r2 } = this.skipped[t4];
      n2 < e63.to && r2 > e63.from && (this.fragments = Yc(this.fragments, n2, r2), this.skipped.splice(t4--, 1));
    }
    return this.skipped.length >= t3 ? false : (this.reset(), true);
  }
  reset() {
    this.parse && (this.parse = (this.takeTree(), null));
  }
  skipUntilInView(e63, t3) {
    this.skipped.push({ from: e63, to: t3 });
  }
  static getSkippingParser(e63) {
    return new class extends ue {
      createParse(t3, n2, r2) {
        let i2 = r2[0].from, a2 = r2[r2.length - 1].to;
        return { parsedPos: i2, advance() {
          let t4 = qc;
          if (t4) {
            for (let e64 of r2) t4.tempSkipped.push(e64);
            e63 && (t4.scheduleOn = t4.scheduleOn ? Promise.all([t4.scheduleOn, e63]) : e63);
          }
          return this.parsedPos = a2, new d(o.none, [], [], a2 - i2);
        }, stoppedAt: null, stopAt() {
        } };
      }
    }();
  }
  isDone(e63) {
    e63 = Math.min(e63, this.state.doc.length);
    let t3 = this.fragments;
    return this.treeLen >= e63 && t3.length && t3[0].from == 0 && t3[0].to >= e63;
  }
  static get() {
    return qc;
  }
};
function Yc(e63, t3, n2) {
  return le.applyChanges(e63, [{ fromA: t3, toA: n2, fromB: t3, toB: n2 }]);
}
var Xc = class e56 {
  constructor(e63) {
    this.context = e63, this.tree = e63.tree;
  }
  apply(t3) {
    if (!t3.docChanged && this.tree == this.context.tree) return this;
    let n2 = this.context.changes(t3.changes, t3.state), r2 = this.context.treeLen == t3.startState.doc.length ? void 0 : Math.max(t3.changes.mapPos(this.context.treeLen), n2.viewport.to);
    return n2.work(20, r2) || n2.takeTree(), new e56(n2);
  }
  static init(t3) {
    let n2 = Math.min(3e3, t3.doc.length), r2 = Jc.create(t3.facet(el).parser, t3, { from: 0, to: n2 });
    return r2.work(20, n2) || r2.takeTree(), new e56(r2);
  }
};
Q.state = mt.define({ create: Xc.init, update(e63, t3) {
  for (let e64 of t3.effects) if (e64.is(Q.setState)) return e64.value;
  return t3.startState.facet(el) == t3.state.facet(el) ? e63.apply(t3) : Xc.init(t3.state);
} });
var Zc = (e63) => {
  let t3 = setTimeout(() => e63(), 500);
  return () => clearTimeout(t3);
};
typeof requestIdleCallback < `u` && (Zc = (e63) => {
  let t3 = -1, n2 = setTimeout(() => {
    t3 = requestIdleCallback(e63, { timeout: 400 });
  }, 100);
  return () => t3 < 0 ? clearTimeout(n2) : cancelIdleCallback(t3);
});
var Qc = typeof navigator < `u` && ((_a2 = navigator.scheduling) == null ? void 0 : _a2.isInputPending) ? () => navigator.scheduling.isInputPending() : null, $c = di.fromClass(class {
  constructor(e63) {
    this.view = e63, this.working = null, this.workScheduled = 0, this.chunkEnd = -1, this.chunkBudget = -1, this.work = this.work.bind(this), this.scheduleWork();
  }
  update(e63) {
    let t3 = this.view.state.field(Q.state).context;
    (t3.updateViewport(e63.view.viewport) || this.view.viewport.to > t3.treeLen) && this.scheduleWork(), (e63.docChanged || e63.selectionSet) && (this.view.hasFocus && (this.chunkBudget += 50), this.scheduleWork()), this.checkAsyncSchedule(t3);
  }
  scheduleWork() {
    if (this.working) return;
    let { state: e63 } = this.view, t3 = e63.field(Q.state);
    (t3.tree != t3.context.tree || !t3.context.isDone(e63.doc.length)) && (this.working = Zc(this.work));
  }
  work(e63) {
    this.working = null;
    let t3 = Date.now();
    if (this.chunkEnd < t3 && (this.chunkEnd < 0 || this.view.hasFocus) && (this.chunkEnd = t3 + 3e4, this.chunkBudget = 3e3), this.chunkBudget <= 0) return;
    let { state: n2, viewport: { to: r2 } } = this.view, i2 = n2.field(Q.state);
    if (i2.tree == i2.context.tree && i2.context.isDone(r2 + 1e5)) return;
    let a2 = Date.now() + Math.min(this.chunkBudget, 100, e63 && !Qc ? Math.max(25, e63.timeRemaining() - 5) : 1e9), o2 = i2.context.treeLen < r2 && n2.doc.length > r2 + 1e3, s2 = i2.context.work(() => Qc && Qc() || Date.now() > a2, r2 + (o2 ? 0 : 1e5));
    this.chunkBudget -= Date.now() - t3, (s2 || this.chunkBudget <= 0) && (i2.context.takeTree(), this.view.dispatch({ effects: Q.setState.of(new Xc(i2.context)) })), this.chunkBudget > 0 && !(s2 && !o2) && this.scheduleWork(), this.checkAsyncSchedule(i2.context);
  }
  checkAsyncSchedule(e63) {
    e63.scheduleOn && (e63.scheduleOn = (this.workScheduled++, e63.scheduleOn.then(() => this.scheduleWork()).catch((e64) => H(this.view.state, e64)).then(() => this.workScheduled--), null));
  }
  destroy() {
    this.working && this.working();
  }
  isWorking() {
    return !!(this.working || this.workScheduled > 0);
  }
}, { eventHandlers: { focus() {
  this.scheduleWork();
} } }), el = A.define({ combine(e63) {
  return e63.length ? e63[0] : null;
}, enables: (e63) => [Q.state, $c, Y.contentAttributes.compute([e63], (t3) => {
  let n2 = t3.facet(e63);
  return n2 && n2.name ? { "data-language": n2.name } : {};
})] }), tl = class {
  constructor(e63, t3 = []) {
    this.language = e63, this.support = t3, this.extension = [e63, t3];
  }
}, nl = class e57 {
  constructor(e63, t3, n2, r2, i2, a2 = void 0) {
    this.name = e63, this.alias = t3, this.extensions = n2, this.filename = r2, this.loadFunc = i2, this.support = a2, this.loading = null;
  }
  load() {
    return this.loading || (this.loading = this.loadFunc().then((e63) => this.support = e63, (e63) => {
      throw this.loading = null, e63;
    }));
  }
  static of(t3) {
    let { load: n2, support: r2 } = t3;
    if (!n2) {
      if (!r2) throw RangeError(`Must pass either 'load' or 'support' to LanguageDescription.of`);
      n2 = () => Promise.resolve(r2);
    }
    return new e57(t3.name, (t3.alias || []).concat(t3.name).map((e63) => e63.toLowerCase()), t3.extensions || [], t3.filename, n2, r2);
  }
  static matchFilename(e63, t3) {
    for (let n3 of e63) if (n3.filename && n3.filename.test(t3)) return n3;
    let n2 = /\.([^.]+)$/.exec(t3);
    if (n2) {
      for (let t4 of e63) if (t4.extensions.indexOf(n2[1]) > -1) return t4;
    }
    return null;
  }
  static matchLanguageName(e63, t3, n2 = true) {
    t3 = t3.toLowerCase();
    for (let n3 of e63) if (n3.alias.some((e64) => e64 == t3)) return n3;
    if (n2) for (let n3 of e63) for (let e64 of n3.alias) {
      let r2 = t3.indexOf(e64);
      if (r2 > -1 && (e64.length > 2 || !/\w/.test(t3[r2 - 1]) && !/\w/.test(t3[r2 + e64.length]))) return n3;
    }
    return null;
  }
}, rl = A.define(), il = A.define({ combine: (e63) => {
  if (!e63.length) return `  `;
  let t3 = e63[0];
  if (!t3 || /\S/.test(t3) || Array.from(t3).some((e64) => e64 != t3[0])) throw Error(`Invalid indent unit: ` + JSON.stringify(e63[0]));
  return t3;
} });
function al(e63) {
  let t3 = e63.facet(il);
  return t3.charCodeAt(0) == 9 ? e63.tabSize * t3.length : t3.length;
}
function ol(e63, t3) {
  let n2 = ``, r2 = e63.tabSize, i2 = e63.facet(il)[0];
  if (i2 == `	`) {
    for (; t3 >= r2; ) n2 += `	`, t3 -= r2;
    i2 = ` `;
  }
  for (let e64 = 0; e64 < t3; e64++) n2 += i2;
  return n2;
}
function sl(e63, t3) {
  e63 instanceof N && (e63 = new cl(e63));
  for (let n3 of e63.state.facet(rl)) {
    let r2 = n3(e63, t3);
    if (r2 !== void 0) return r2;
  }
  let n2 = Gc(e63.state);
  return n2.length >= t3 ? ul(e63, n2, t3) : null;
}
var cl = class {
  constructor(e63, t3 = {}) {
    this.state = e63, this.options = t3, this.unit = al(e63);
  }
  lineAt(e63, t3 = 1) {
    let n2 = this.state.doc.lineAt(e63), { simulateBreak: r2, simulateDoubleBreak: i2 } = this.options;
    return r2 != null && r2 >= n2.from && r2 <= n2.to ? i2 && r2 == e63 ? { text: ``, from: e63 } : (t3 < 0 ? r2 < e63 : r2 <= e63) ? { text: n2.text.slice(r2 - n2.from), from: r2 } : { text: n2.text.slice(0, r2 - n2.from), from: n2.from } : n2;
  }
  textAfterPos(e63, t3 = 1) {
    if (this.options.simulateDoubleBreak && e63 == this.options.simulateBreak) return ``;
    let { text: n2, from: r2 } = this.lineAt(e63, t3);
    return n2.slice(e63 - r2, Math.min(n2.length, e63 + 100 - r2));
  }
  column(e63, t3 = 1) {
    let { text: n2, from: r2 } = this.lineAt(e63, t3), i2 = this.countColumn(n2, e63 - r2), a2 = this.options.overrideIndentation ? this.options.overrideIndentation(r2) : -1;
    return a2 > -1 && (i2 += a2 - this.countColumn(n2, n2.search(/\S|$/))), i2;
  }
  countColumn(e63, t3 = e63.length) {
    return pn(e63, this.state.tabSize, t3);
  }
  lineIndent(e63, t3 = 1) {
    let { text: n2, from: r2 } = this.lineAt(e63, t3), i2 = this.options.overrideIndentation;
    if (i2) {
      let e64 = i2(r2);
      if (e64 > -1) return e64;
    }
    return this.countColumn(n2, n2.search(/\S|$/));
  }
  get simulatedBreak() {
    return this.options.simulateBreak || null;
  }
}, ll = new r();
function ul(e63, t3, n2) {
  let r2 = t3.resolveStack(n2), i2 = t3.resolveInner(n2, -1).resolve(n2, 0).enterUnfinishedNodesBefore(n2);
  if (i2 != r2.node) {
    let e64 = [];
    for (let t4 = i2; t4 && !(t4.from < r2.node.from || t4.to > r2.node.to || t4.from == r2.node.from && t4.type == r2.node.type); t4 = t4.parent) e64.push(t4);
    for (let t4 = e64.length - 1; t4 >= 0; t4--) r2 = { node: e64[t4], next: r2 };
  }
  return dl(r2, e63, n2);
}
function dl(e63, t3, n2) {
  for (let r2 = e63; r2; r2 = r2.next) {
    let e64 = pl(r2.node);
    if (e64) return e64(hl.create(t3, n2, r2));
  }
  return 0;
}
function fl(e63) {
  return e63.pos == e63.options.simulateBreak && e63.options.simulateDoubleBreak;
}
function pl(e63) {
  let t3 = e63.type.prop(ll);
  if (t3) return t3;
  let n2 = e63.firstChild, i2;
  if (n2 && (i2 = n2.type.prop(r.closedBy))) {
    let t4 = e63.lastChild, n3 = t4 && i2.indexOf(t4.name) > -1;
    return (e64) => yl(e64, true, 1, void 0, n3 && !fl(e64) ? t4.from : void 0);
  }
  return e63.parent == null ? ml : null;
}
function ml() {
  return 0;
}
var hl = class e58 extends cl {
  constructor(e63, t3, n2) {
    super(e63.state, e63.options), this.base = e63, this.pos = t3, this.context = n2;
  }
  get node() {
    return this.context.node;
  }
  static create(t3, n2, r2) {
    return new e58(t3, n2, r2);
  }
  get textAfter() {
    return this.textAfterPos(this.pos);
  }
  get baseIndent() {
    return this.baseIndentFor(this.node);
  }
  baseIndentFor(e63) {
    let t3 = this.state.doc.lineAt(e63.from);
    for (; ; ) {
      let n2 = e63.resolve(t3.from);
      for (; n2.parent && n2.parent.from == n2.from; ) n2 = n2.parent;
      if (gl(n2, e63)) break;
      t3 = this.state.doc.lineAt(n2.from);
    }
    return this.lineIndent(t3.from);
  }
  continue() {
    return dl(this.context.next, this.base, this.pos);
  }
};
function gl(e63, t3) {
  for (let n2 = t3; n2; n2 = n2.parent) if (e63 == n2) return true;
  return false;
}
function _l(e63) {
  let t3 = e63.node, n2 = t3.childAfter(t3.from), r2 = t3.lastChild;
  if (!n2) return null;
  let i2 = e63.options.simulateBreak, a2 = e63.state.doc.lineAt(n2.from), o2 = i2 == null || i2 <= a2.from ? a2.to : Math.min(a2.to, i2);
  for (let e64 = n2.to; ; ) {
    let i3 = t3.childAfter(e64);
    if (!i3 || i3 == r2) return null;
    if (!i3.type.isSkipped) {
      if (i3.from >= o2) return null;
      let e65 = /^ */.exec(a2.text.slice(n2.to - a2.from))[0].length;
      return { from: n2.from, to: n2.to + e65 };
    }
    e64 = i3.to;
  }
}
function vl({ closing: e63, align: t3 = true, units: n2 = 1 }) {
  return (r2) => yl(r2, t3, n2, e63);
}
function yl(e63, t3, n2, r2, i2) {
  let a2 = e63.textAfter, o2 = a2.match(/^\s*/)[0].length, s2 = r2 && a2.slice(o2, o2 + r2.length) == r2 || i2 == e63.pos + o2, c2 = t3 ? _l(e63) : null;
  return c2 ? s2 ? e63.column(c2.from) : e63.column(c2.to) : e63.baseIndent + (s2 ? 0 : e63.unit * n2);
}
var bl = (e63) => e63.baseIndent;
function xl({ except: e63, units: t3 = 1 } = {}) {
  return (n2) => {
    let r2 = e63 && e63.test(n2.textAfter);
    return n2.baseIndent + (r2 ? 0 : t3 * n2.unit);
  };
}
var Sl = A.define(), Cl = new r();
function wl(e63) {
  let t3 = e63.firstChild, n2 = e63.lastChild;
  return t3 && t3.to < n2.from ? { from: t3.to, to: n2.type.isError ? e63.to : n2.from } : null;
}
var Tl = class e59 {
  constructor(e63, t3) {
    this.specs = e63;
    let n2;
    function r2(e64) {
      let t4 = yn.newName();
      return (n2 || (n2 = /* @__PURE__ */ Object.create(null)))[`.` + t4] = e64, t4;
    }
    let i2 = typeof t3.all == `string` ? t3.all : t3.all ? r2(t3.all) : void 0, a2 = t3.scope;
    this.scope = a2 instanceof Q ? (e64) => e64.prop(Bc) == a2.data : a2 ? (e64) => e64 == a2 : void 0, this.style = xc(e63.map((e64) => ({ tag: e64.tag, class: e64.class || r2(Object.assign({}, e64, { tag: null })) })), { all: i2 }).style, this.module = n2 ? new yn(n2) : null, this.themeType = t3.themeType;
  }
  static define(t3, n2) {
    return new e59(t3, n2 || {});
  }
}, El = A.define(), Dl = A.define({ combine(e63) {
  return e63.length ? [e63[0]] : null;
} });
function Ol(e63) {
  let t3 = e63.facet(El);
  return t3.length ? t3 : e63.facet(Dl);
}
function kl(e63, t3) {
  let n2 = [jl], r2;
  return e63 instanceof Tl && (e63.module && n2.push(Y.styleModule.of(e63.module)), r2 = e63.themeType), (t3 == null ? void 0 : t3.fallback) ? n2.push(Dl.of(e63)) : r2 ? n2.push(El.computeN([Y.darkTheme], (t4) => t4.facet(Y.darkTheme) == (r2 == `dark`) ? [e63] : [])) : n2.push(El.of(e63)), n2;
}
var Al = class {
  constructor(e63) {
    this.markCache = /* @__PURE__ */ Object.create(null), this.tree = Gc(e63.state), this.decorations = this.buildDeco(e63, Ol(e63.state)), this.decoratedTo = e63.viewport.to;
  }
  update(e63) {
    let t3 = Gc(e63.state), n2 = Ol(e63.state), r2 = n2 != Ol(e63.startState), { viewport: i2 } = e63.view, a2 = e63.changes.mapPos(this.decoratedTo, 1);
    t3.length < i2.to && !r2 && t3.type == this.tree.type && a2 >= i2.to ? (this.decorations = this.decorations.map(e63.changes), this.decoratedTo = a2) : (t3 != this.tree || e63.viewportChanged || r2) && (this.tree = t3, this.decorations = this.buildDeco(e63.view, n2), this.decoratedTo = i2.to);
  }
  buildDeco(e63, t3) {
    if (!t3 || !this.tree.length) return z.none;
    let n2 = new tn();
    for (let { from: r2, to: i2 } of e63.visibleRanges) Cc(this.tree, t3, (e64, t4, r3) => {
      n2.add(e64, t4, this.markCache[r3] || (this.markCache[r3] = z.mark({ class: r3 })));
    }, r2, i2);
    return n2.finish();
  }
}, jl = _t.high(di.fromClass(Al, { decorations: (e63) => e63.decorations }));
Z.meta, Z.link, Z.heading, Z.emphasis, Z.strong, Z.strikethrough, Z.keyword, Z.atom, Z.bool, Z.url, Z.contentSeparator, Z.labelName, Z.literal, Z.inserted, Z.string, Z.deleted, Z.regexp, Z.escape, Z.string, Z.variableName, Z.variableName, Z.typeName, Z.namespace, Z.className, Z.variableName, Z.macroName, Z.propertyName, Z.comment, Z.invalid;
var Ml = 1e4, Nl = `()[]{}`, Pl = new r();
function Fl(e63, t3, n2) {
  let i2 = e63.prop(t3 < 0 ? r.openedBy : r.closedBy);
  if (i2) return i2;
  if (e63.name.length == 1) {
    let r2 = n2.indexOf(e63.name);
    if (r2 > -1 && r2 % 2 == (t3 < 0 ? 1 : 0)) return [n2[r2 + t3]];
  }
  return null;
}
function Il(e63) {
  let t3 = e63.type.prop(Pl);
  return t3 ? t3(e63.node) : e63;
}
function Ll(e63, t3, n2, r2 = {}) {
  let i2 = r2.maxScanDistance || Ml, a2 = r2.brackets || Nl, o2 = Gc(e63), s2 = o2.resolveInner(t3, n2);
  for (let r3 = s2; r3; r3 = r3.parent) {
    let i3 = Fl(r3.type, n2, a2);
    if (i3 && r3.from < r3.to) {
      let o3 = Il(r3);
      if (o3 && (n2 > 0 ? t3 >= o3.from && t3 < o3.to : t3 > o3.from && t3 <= o3.to)) return Rl(e63, t3, n2, r3, o3, i3, a2);
    }
  }
  return zl(e63, t3, n2, o2, s2.type, i2, a2);
}
function Rl(e63, t3, n2, r2, i2, a2, o2) {
  let s2 = r2.parent, c2 = { from: i2.from, to: i2.to }, l2 = 0, u2 = s2 == null ? void 0 : s2.cursor();
  if (u2 && (n2 < 0 ? u2.childBefore(r2.from) : u2.childAfter(r2.to))) do
    if (n2 < 0 ? u2.to <= r2.from : u2.from >= r2.to) {
      if (l2 == 0 && a2.indexOf(u2.type.name) > -1 && u2.from < u2.to) {
        let e64 = Il(u2);
        return { start: c2, end: e64 ? { from: e64.from, to: e64.to } : void 0, matched: true };
      } else if (Fl(u2.type, n2, o2)) l2++;
      else if (Fl(u2.type, -n2, o2)) {
        if (l2 == 0) {
          let e64 = Il(u2);
          return { start: c2, end: e64 && e64.from < e64.to ? { from: e64.from, to: e64.to } : void 0, matched: false };
        }
        l2--;
      }
    }
  while (n2 < 0 ? u2.prevSibling() : u2.nextSibling());
  return { start: c2, matched: false };
}
function zl(e63, t3, n2, r2, i2, a2, o2) {
  let s2 = n2 < 0 ? e63.sliceDoc(t3 - 1, t3) : e63.sliceDoc(t3, t3 + 1), c2 = o2.indexOf(s2);
  if (c2 < 0 || c2 % 2 == 0 != n2 > 0) return null;
  let l2 = { from: n2 < 0 ? t3 - 1 : t3, to: n2 > 0 ? t3 + 1 : t3 }, u2 = e63.doc.iterRange(t3, n2 > 0 ? e63.doc.length : 0), d2 = 0;
  for (let e64 = 0; !u2.next().done && e64 <= a2; ) {
    let a3 = u2.value;
    n2 < 0 && (e64 += a3.length);
    let s3 = t3 + e64 * n2;
    for (let e65 = n2 > 0 ? 0 : a3.length - 1, t4 = n2 > 0 ? a3.length : -1; e65 != t4; e65 += n2) {
      let t5 = o2.indexOf(a3[e65]);
      if (!(t5 < 0 || r2.resolveInner(s3 + e65, 1).type != i2)) if (t5 % 2 == 0 == n2 > 0) d2++;
      else if (d2 == 1) return { start: l2, end: { from: s3 + e65, to: s3 + e65 + 1 }, matched: t5 >> 1 == c2 >> 1 };
      else d2--;
    }
    n2 > 0 && (e64 += a3.length);
  }
  return u2.done ? { start: l2, matched: false } : null;
}
function Bl(e63, t3, n2, r2 = 0, i2 = 0) {
  t3 ?? (t3 = e63.search(/[^\s\u00a0]/), t3 == -1 && (t3 = e63.length));
  let a2 = i2;
  for (let i3 = r2; i3 < t3; i3++) e63.charCodeAt(i3) == 9 ? a2 += n2 - a2 % n2 : a2++;
  return a2;
}
var Vl = class {
  constructor(e63, t3, n2, r2) {
    this.string = e63, this.tabSize = t3, this.indentUnit = n2, this.overrideIndent = r2, this.pos = 0, this.start = 0, this.lastColumnPos = 0, this.lastColumnValue = 0;
  }
  eol() {
    return this.pos >= this.string.length;
  }
  sol() {
    return this.pos == 0;
  }
  peek() {
    return this.string.charAt(this.pos) || void 0;
  }
  next() {
    if (this.pos < this.string.length) return this.string.charAt(this.pos++);
  }
  eat(e63) {
    let t3 = this.string.charAt(this.pos), n2;
    if (n2 = typeof e63 == `string` ? t3 == e63 : t3 && (e63 instanceof RegExp ? e63.test(t3) : e63(t3)), n2) return ++this.pos, t3;
  }
  eatWhile(e63) {
    let t3 = this.pos;
    for (; this.eat(e63); ) ;
    return this.pos > t3;
  }
  eatSpace() {
    let e63 = this.pos;
    for (; /[\s\u00a0]/.test(this.string.charAt(this.pos)); ) ++this.pos;
    return this.pos > e63;
  }
  skipToEnd() {
    this.pos = this.string.length;
  }
  skipTo(e63) {
    let t3 = this.string.indexOf(e63, this.pos);
    if (t3 > -1) return this.pos = t3, true;
  }
  backUp(e63) {
    this.pos -= e63;
  }
  column() {
    return this.lastColumnPos < this.start && (this.lastColumnValue = Bl(this.string, this.start, this.tabSize, this.lastColumnPos, this.lastColumnValue), this.lastColumnPos = this.start), this.lastColumnValue;
  }
  indentation() {
    return this.overrideIndent ?? Bl(this.string, null, this.tabSize);
  }
  match(e63, t3, n2) {
    if (typeof e63 == `string`) {
      let r2 = (e64) => n2 ? e64.toLowerCase() : e64;
      return r2(this.string.substr(this.pos, e63.length)) == r2(e63) ? (t3 !== false && (this.pos += e63.length), true) : null;
    } else {
      let n3 = this.string.slice(this.pos).match(e63);
      return n3 && n3.index > 0 ? null : (n3 && t3 !== false && (this.pos += n3[0].length), n3);
    }
  }
  current() {
    return this.string.slice(this.start, this.pos);
  }
};
function Hl(e63) {
  return { name: e63.name || ``, token: e63.token, blankLine: e63.blankLine || (() => {
  }), startState: e63.startState || (() => true), copyState: e63.copyState || Ul, indent: e63.indent || (() => null), languageData: e63.languageData || {}, tokenTable: e63.tokenTable || Zl, mergeTokens: e63.mergeTokens !== false };
}
function Ul(e63) {
  if (typeof e63 != `object`) return e63;
  let t3 = {};
  for (let n2 in e63) {
    let r2 = e63[n2];
    t3[n2] = r2 instanceof Array ? r2.slice() : r2;
  }
  return t3;
}
var Wl = /* @__PURE__ */ new WeakMap(), Gl = class e60 extends Q {
  constructor(e63) {
    let t3 = Vc(e63.languageData), n2 = Hl(e63), i2, a2 = new class extends ue {
      createParse(e64, t4, n3) {
        return new Yl(i2, e64, t4, n3);
      }
    }();
    super(t3, a2, [], e63.name), this.topNode = su(t3, this), i2 = this, this.streamParser = n2, this.stateAfter = new r({ perNode: true }), this.tokenTable = e63.tokenTable ? new ru(n2.tokenTable) : iu;
  }
  static define(t3) {
    return new e60(t3);
  }
  getIndent(e63) {
    let t3, { overrideIndentation: n2 } = e63.options;
    n2 && (t3 = Wl.get(e63.state), t3 != null && t3 < e63.pos - 1e4 && (t3 = void 0));
    let r2 = Kl(this, e63.node.tree, e63.node.from, e63.node.from, t3 ?? e63.pos), i2, a2;
    if (r2 ? (a2 = r2.state, i2 = r2.pos + 1) : (a2 = this.streamParser.startState(e63.unit), i2 = e63.node.from), e63.pos - i2 > 1e4) return null;
    for (; i2 < e63.pos; ) {
      let t4 = e63.state.doc.lineAt(i2), r3 = Math.min(e63.pos, t4.to);
      if (t4.length) {
        let i3 = n2 ? n2(t4.from) : -1, o3 = new Vl(t4.text, e63.state.tabSize, e63.unit, i3 < 0 ? void 0 : i3);
        for (; o3.pos < r3 - t4.from; ) Xl(this.streamParser.token, o3, a2);
      } else this.streamParser.blankLine(a2, e63.unit);
      if (r3 == e63.pos) break;
      i2 = t4.to + 1;
    }
    let o2 = e63.lineAt(e63.pos);
    return n2 && t3 == null && Wl.set(e63.state, o2.from), this.streamParser.indent(a2, /^\s*(.*)/.exec(o2.text)[1], e63);
  }
  get allowsNesting() {
    return false;
  }
};
function Kl(e63, t3, n2, r2, i2) {
  let a2 = n2 >= r2 && n2 + t3.length <= i2 && t3.prop(e63.stateAfter);
  if (a2) return { state: e63.streamParser.copyState(a2), pos: n2 + t3.length };
  for (let a3 = t3.children.length - 1; a3 >= 0; a3--) {
    let o2 = t3.children[a3], s2 = n2 + t3.positions[a3], c2 = o2 instanceof d && s2 < i2 && Kl(e63, o2, s2, r2, i2);
    if (c2) return c2;
  }
  return null;
}
function ql(e63, t3, n2, r2, i2) {
  if (i2 && n2 <= 0 && r2 >= t3.length) return t3;
  !i2 && n2 == 0 && t3.type == e63.topNode && (i2 = true);
  for (let a2 = t3.children.length - 1; a2 >= 0; a2--) {
    let o2 = t3.positions[a2], s2 = t3.children[a2], c2;
    if (o2 < r2 && s2 instanceof d) {
      if (!(c2 = ql(e63, s2, n2 - o2, r2 - o2, i2))) break;
      return i2 ? new d(t3.type, t3.children.slice(0, a2).concat(c2), t3.positions.slice(0, a2 + 1), o2 + c2.length) : c2;
    }
  }
  return null;
}
function Jl(e63, t3, n2, r2, i2) {
  for (let i3 of t3) {
    let t4 = i3.from + (i3.openStart ? 25 : 0), a2 = i3.to - (i3.openEnd ? 25 : 0), o2 = t4 <= n2 && a2 > n2 && Kl(e63, i3.tree, 0 - i3.offset, n2, a2), s2;
    if (o2 && o2.pos <= r2 && (s2 = ql(e63, i3.tree, n2 + i3.offset, o2.pos + i3.offset, false))) return { state: o2.state, tree: s2 };
  }
  return { state: e63.streamParser.startState(i2 ? al(i2) : 4), tree: d.empty };
}
var Yl = class {
  constructor(e63, t3, n2, r2) {
    this.lang = e63, this.input = t3, this.fragments = n2, this.ranges = r2, this.stoppedAt = null, this.chunks = [], this.chunkPos = [], this.chunk = [], this.chunkReused = void 0, this.rangeIndex = 0, this.to = r2[r2.length - 1].to;
    let i2 = Jc.get(), a2 = r2[0].from, { state: o2, tree: s2 } = Jl(e63, n2, a2, this.to, i2 == null ? void 0 : i2.state);
    this.state = o2, this.parsedPos = this.chunkStart = a2 + s2.length;
    for (let e64 = 0; e64 < s2.children.length; e64++) this.chunks.push(s2.children[e64]), this.chunkPos.push(s2.positions[e64]);
    i2 && this.parsedPos < i2.viewport.from - 1e5 && r2.some((e64) => e64.from <= i2.viewport.from && e64.to >= i2.viewport.from) && (this.state = this.lang.streamParser.startState(al(i2.state)), i2.skipUntilInView(this.parsedPos, i2.viewport.from), this.parsedPos = i2.viewport.from), this.moveRangeIndex();
  }
  advance() {
    let e63 = Jc.get(), t3 = this.stoppedAt == null ? this.to : Math.min(this.to, this.stoppedAt), n2 = Math.min(t3, this.chunkStart + 512);
    for (e63 && (n2 = Math.min(n2, e63.viewport.to)); this.parsedPos < n2; ) this.parseLine(e63);
    return this.chunkStart < this.parsedPos && this.finishChunk(), this.parsedPos >= t3 ? this.finish() : e63 && this.parsedPos >= e63.viewport.to ? (e63.skipUntilInView(this.parsedPos, t3), this.finish()) : null;
  }
  stopAt(e63) {
    this.stoppedAt = e63;
  }
  lineAfter(e63) {
    let t3 = this.input.chunk(e63);
    if (this.input.lineChunks) t3 == `
` && (t3 = ``);
    else {
      let e64 = t3.indexOf(`
`);
      e64 > -1 && (t3 = t3.slice(0, e64));
    }
    return e63 + t3.length <= this.to ? t3 : t3.slice(0, this.to - e63);
  }
  nextLine() {
    let e63 = this.parsedPos, t3 = this.lineAfter(e63), n2 = e63 + t3.length;
    for (let e64 = this.rangeIndex; ; ) {
      let r2 = this.ranges[e64].to;
      if (r2 >= n2 || (t3 = t3.slice(0, r2 - (n2 - t3.length)), e64++, e64 == this.ranges.length)) break;
      let i2 = this.ranges[e64].from, a2 = this.lineAfter(i2);
      t3 += a2, n2 = i2 + a2.length;
    }
    return { line: t3, end: n2 };
  }
  skipGapsTo(e63, t3, n2) {
    for (; ; ) {
      let r2 = this.ranges[this.rangeIndex].to, i2 = e63 + t3;
      if (n2 > 0 ? r2 > i2 : r2 >= i2) break;
      let a2 = this.ranges[++this.rangeIndex].from;
      t3 += a2 - r2;
    }
    return t3;
  }
  moveRangeIndex() {
    for (; this.ranges[this.rangeIndex].to < this.parsedPos; ) this.rangeIndex++;
  }
  emitToken(e63, t3, n2, r2) {
    let i2 = 4;
    if (this.ranges.length > 1) {
      r2 = this.skipGapsTo(t3, r2, 1), t3 += r2;
      let e64 = this.chunk.length;
      r2 = this.skipGapsTo(n2, r2, -1), n2 += r2, i2 += this.chunk.length - e64;
    }
    let a2 = this.chunk.length - 4;
    return this.lang.streamParser.mergeTokens && i2 == 4 && a2 >= 0 && this.chunk[a2] == e63 && this.chunk[a2 + 2] == t3 ? this.chunk[a2 + 2] = n2 : this.chunk.push(e63, t3, n2, i2), r2;
  }
  parseLine(e63) {
    let { line: t3, end: n2 } = this.nextLine(), r2 = 0, { streamParser: i2 } = this.lang, a2 = new Vl(t3, e63 ? e63.state.tabSize : 4, e63 ? al(e63.state) : 2);
    if (a2.eol()) i2.blankLine(this.state, a2.indentUnit);
    else for (; !a2.eol(); ) {
      let e64 = Xl(i2.token, a2, this.state);
      if (e64 && (r2 = this.emitToken(this.lang.tokenTable.resolve(e64), this.parsedPos + a2.start, this.parsedPos + a2.pos, r2)), a2.start > 1e4) break;
    }
    this.parsedPos = n2, this.moveRangeIndex(), this.parsedPos < this.to && this.parsedPos++;
  }
  finishChunk() {
    let e63 = d.build({ buffer: this.chunk, start: this.chunkStart, length: this.parsedPos - this.chunkStart, nodeSet: $l, topID: 0, maxBufferLength: 512, reused: this.chunkReused });
    e63 = new d(e63.type, e63.children, e63.positions, e63.length, [[this.lang.stateAfter, this.lang.streamParser.copyState(this.state)]]), this.chunks.push(e63), this.chunkPos.push(this.chunkStart - this.ranges[0].from), this.chunk = [], this.chunkReused = void 0, this.chunkStart = this.parsedPos;
  }
  finish() {
    return new d(this.lang.topNode, this.chunks, this.chunkPos, this.parsedPos - this.ranges[0].from).balance();
  }
};
function Xl(e63, t3, n2) {
  t3.start = t3.pos;
  for (let r2 = 0; r2 < 10; r2++) {
    let r3 = e63(t3, n2);
    if (t3.pos > t3.start) return r3;
  }
  throw Error(`Stream parser failed to advance stream.`);
}
var Zl = /* @__PURE__ */ Object.create(null), Ql = [o.none], $l = new s(Ql), eu = [], tu = /* @__PURE__ */ Object.create(null), nu = /* @__PURE__ */ Object.create(null);
for (let [e63, t3] of [[`variable`, `variableName`], [`variable-2`, `variableName.special`], [`string-2`, `string.special`], [`def`, `variableName.definition`], [`tag`, `tagName`], [`attribute`, `attributeName`], [`type`, `typeName`], [`builtin`, `variableName.standard`], [`qualifier`, `modifier`], [`error`, `invalid`], [`header`, `heading`], [`property`, `propertyName`]]) nu[e63] = ou(Zl, t3);
var ru = class {
  constructor(e63) {
    this.extra = e63, this.table = Object.assign(/* @__PURE__ */ Object.create(null), nu);
  }
  resolve(e63) {
    return e63 ? this.table[e63] || (this.table[e63] = ou(this.extra, e63)) : 0;
  }
}, iu = new ru(Zl);
function au(e63, t3) {
  eu.indexOf(e63) > -1 || (eu.push(e63), console.warn(t3));
}
function ou(e63, t3) {
  let n2 = [];
  for (let r3 of t3.split(` `)) {
    let t4 = [];
    for (let n3 of r3.split(`.`)) {
      let r4 = e63[n3] || Z[n3];
      r4 ? typeof r4 == `function` ? t4.length ? t4 = t4.map(r4) : au(n3, `Modifier ${n3} used at start of tag`) : t4.length ? au(n3, `Tag ${n3} used as modifier`) : t4 = Array.isArray(r4) ? r4 : [r4] : au(n3, `Unknown highlighting tag ${n3}`);
    }
    for (let e64 of t4) n2.push(e64);
  }
  if (!n2.length) return 0;
  let r2 = t3.replace(/ /g, `_`), i2 = r2 + ` ` + n2.map((e64) => e64.id), a2 = tu[i2];
  if (a2) return a2.id;
  let s2 = tu[i2] = o.define({ id: Ql.length, name: r2, props: [vc({ [r2]: n2 })] });
  return Ql.push(s2), s2.id;
}
function su(e63, t3) {
  let n2 = o.define({ id: Ql.length, name: `Document`, props: [Bc.add(() => e63), ll.add(() => (e64) => t3.getIndent(e64))], top: true });
  return Ql.push(n2), n2;
}
B.RTL, B.LTR;
var cu = class e61 {
  constructor(e63, t3, n2, r2, i2, a2, o2, s2, c2, l2 = 0, u2) {
    this.p = e63, this.stack = t3, this.state = n2, this.reducePos = r2, this.pos = i2, this.score = a2, this.buffer = o2, this.bufferBase = s2, this.curContext = c2, this.lookAhead = l2, this.parent = u2;
  }
  toString() {
    return `[${this.stack.filter((e63, t3) => t3 % 3 == 0).concat(this.state)}]@${this.pos}${this.score ? `!` + this.score : ``}`;
  }
  static start(t3, n2, r2 = 0) {
    let i2 = t3.parser.context;
    return new e61(t3, [], n2, r2, r2, 0, [], 0, i2 ? new lu(i2, i2.start) : null, 0, null);
  }
  get context() {
    return this.curContext ? this.curContext.context : null;
  }
  pushState(e63, t3) {
    this.stack.push(this.state, t3, this.bufferBase + this.buffer.length), this.state = e63;
  }
  reduce(e63) {
    var _a3;
    let t3 = e63 >> 19, n2 = e63 & 65535, { parser: r2 } = this.p, i2 = this.reducePos < this.pos - 25 && this.setLookAhead(this.pos), a2 = r2.dynamicPrecedence(n2);
    if (a2 && (this.score += a2), t3 == 0) {
      this.pushState(r2.getGoto(this.state, n2, true), this.reducePos), n2 < r2.minRepeatTerm && this.storeNode(n2, this.reducePos, this.reducePos, i2 ? 8 : 4, true), this.reduceContext(n2, this.reducePos);
      return;
    }
    let o2 = this.stack.length - (t3 - 1) * 3 - (e63 & 262144 ? 6 : 0), s2 = o2 ? this.stack[o2 - 2] : this.p.ranges[0].from, c2 = this.reducePos - s2;
    c2 >= 2e3 && !((_a3 = this.p.parser.nodeSet.types[n2]) == null ? void 0 : _a3.isAnonymous) && (s2 == this.p.lastBigReductionStart ? (this.p.bigReductionCount++, this.p.lastBigReductionSize = c2) : this.p.lastBigReductionSize < c2 && (this.p.bigReductionCount = 1, this.p.lastBigReductionStart = s2, this.p.lastBigReductionSize = c2));
    let l2 = o2 ? this.stack[o2 - 1] : 0, u2 = this.bufferBase + this.buffer.length - l2;
    if (n2 < r2.minRepeatTerm || e63 & 131072) {
      let e64 = r2.stateFlag(this.state, 1) ? this.pos : this.reducePos;
      this.storeNode(n2, s2, e64, u2 + 4, true);
    }
    if (e63 & 262144) this.state = this.stack[o2];
    else {
      let e64 = this.stack[o2 - 3];
      this.state = r2.getGoto(e64, n2, true);
    }
    for (; this.stack.length > o2; ) this.stack.pop();
    this.reduceContext(n2, s2);
  }
  storeNode(e63, t3, n2, r2 = 4, i2 = false) {
    if (e63 == 0 && (!this.stack.length || this.stack[this.stack.length - 1] < this.buffer.length + this.bufferBase)) {
      let e64 = this, r3 = this.buffer.length;
      if (r3 == 0 && e64.parent && (r3 = e64.bufferBase - e64.parent.bufferBase, e64 = e64.parent), r3 > 0 && e64.buffer[r3 - 4] == 0 && e64.buffer[r3 - 1] > -1) {
        if (t3 == n2) return;
        if (e64.buffer[r3 - 2] >= t3) {
          e64.buffer[r3 - 2] = n2;
          return;
        }
      }
    }
    if (!i2 || this.pos == n2) this.buffer.push(e63, t3, n2, r2);
    else {
      let i3 = this.buffer.length;
      if (i3 > 0 && (this.buffer[i3 - 4] != 0 || this.buffer[i3 - 1] < 0)) {
        let e64 = false;
        for (let t4 = i3; t4 > 0 && this.buffer[t4 - 2] > n2; t4 -= 4) if (this.buffer[t4 - 1] >= 0) {
          e64 = true;
          break;
        }
        if (e64) for (; i3 > 0 && this.buffer[i3 - 2] > n2; ) this.buffer[i3] = this.buffer[i3 - 4], this.buffer[i3 + 1] = this.buffer[i3 - 3], this.buffer[i3 + 2] = this.buffer[i3 - 2], this.buffer[i3 + 3] = this.buffer[i3 - 1], i3 -= 4, r2 > 4 && (r2 -= 4);
      }
      this.buffer[i3] = e63, this.buffer[i3 + 1] = t3, this.buffer[i3 + 2] = n2, this.buffer[i3 + 3] = r2;
    }
  }
  shift(e63, t3, n2, r2) {
    if (e63 & 131072) this.pushState(e63 & 65535, this.pos);
    else if (e63 & 262144) this.pos = r2, this.shiftContext(t3, n2), t3 <= this.p.parser.maxNode && this.buffer.push(t3, n2, r2, 4);
    else {
      let i2 = e63, { parser: a2 } = this.p;
      this.pos = r2, !a2.stateFlag(i2, 1) && (r2 > n2 || t3 <= a2.maxNode) && (this.reducePos = r2), this.pushState(i2, Math.min(n2, this.reducePos)), this.shiftContext(t3, n2), t3 <= a2.maxNode && this.buffer.push(t3, n2, r2, 4);
    }
  }
  apply(e63, t3, n2, r2) {
    e63 & 65536 ? this.reduce(e63) : this.shift(e63, t3, n2, r2);
  }
  useNode(e63, t3) {
    let n2 = this.p.reused.length - 1;
    (n2 < 0 || this.p.reused[n2] != e63) && (this.p.reused.push(e63), n2++);
    let r2 = this.pos;
    this.reducePos = this.pos = r2 + e63.length, this.pushState(t3, r2), this.buffer.push(n2, r2, this.reducePos, -1), this.curContext && this.updateContext(this.curContext.tracker.reuse(this.curContext.context, e63, this, this.p.stream.reset(this.pos - e63.length)));
  }
  split() {
    let t3 = this, n2 = t3.buffer.length;
    for (; n2 > 0 && t3.buffer[n2 - 2] > t3.reducePos; ) n2 -= 4;
    let r2 = t3.buffer.slice(n2), i2 = t3.bufferBase + n2;
    for (; t3 && i2 == t3.bufferBase; ) t3 = t3.parent;
    return new e61(this.p, this.stack.slice(), this.state, this.reducePos, this.pos, this.score, r2, i2, this.curContext, this.lookAhead, t3);
  }
  recoverByDelete(e63, t3) {
    let n2 = e63 <= this.p.parser.maxNode;
    n2 && this.storeNode(e63, this.pos, t3, 4), this.storeNode(0, this.pos, t3, n2 ? 8 : 4), this.pos = this.reducePos = t3, this.score -= 190;
  }
  canShift(e63) {
    for (let t3 = new uu(this); ; ) {
      let n2 = this.p.parser.stateSlot(t3.state, 4) || this.p.parser.hasAction(t3.state, e63);
      if (n2 == 0) return false;
      if (!(n2 & 65536)) return true;
      t3.reduce(n2);
    }
  }
  recoverByInsert(e63) {
    if (this.stack.length >= 300) return [];
    let t3 = this.p.parser.nextStates(this.state);
    if (t3.length > 8 || this.stack.length >= 120) {
      let n3 = [];
      for (let r2 = 0, i2; r2 < t3.length; r2 += 2) (i2 = t3[r2 + 1]) != this.state && this.p.parser.hasAction(i2, e63) && n3.push(t3[r2], i2);
      if (this.stack.length < 120) for (let e64 = 0; n3.length < 8 && e64 < t3.length; e64 += 2) {
        let r2 = t3[e64 + 1];
        n3.some((e65, t4) => t4 & 1 && e65 == r2) || n3.push(t3[e64], r2);
      }
      t3 = n3;
    }
    let n2 = [];
    for (let e64 = 0; e64 < t3.length && n2.length < 4; e64 += 2) {
      let r2 = t3[e64 + 1];
      if (r2 == this.state) continue;
      let i2 = this.split();
      i2.pushState(r2, this.pos), i2.storeNode(0, i2.pos, i2.pos, 4, true), i2.shiftContext(t3[e64], this.pos), i2.reducePos = this.pos, i2.score -= 200, n2.push(i2);
    }
    return n2;
  }
  forceReduce() {
    let { parser: e63 } = this.p, t3 = e63.stateSlot(this.state, 5);
    if (!(t3 & 65536)) return false;
    if (!e63.validAction(this.state, t3)) {
      let n2 = t3 >> 19, r2 = t3 & 65535, i2 = this.stack.length - n2 * 3;
      if (i2 < 0 || e63.getGoto(this.stack[i2], r2, false) < 0) {
        let e64 = this.findForcedReduction();
        if (e64 == null) return false;
        t3 = e64;
      }
      this.storeNode(0, this.pos, this.pos, 4, true), this.score -= 100;
    }
    return this.reducePos = this.pos, this.reduce(t3), true;
  }
  findForcedReduction() {
    let { parser: e63 } = this.p, t3 = [], n2 = (r2, i2) => {
      if (!t3.includes(r2)) return t3.push(r2), e63.allActions(r2, (t4) => {
        if (!(t4 & 393216)) if (t4 & 65536) {
          let n3 = (t4 >> 19) - i2;
          if (n3 > 1) {
            let r3 = t4 & 65535, i3 = this.stack.length - n3 * 3;
            if (i3 >= 0 && e63.getGoto(this.stack[i3], r3, false) >= 0) return n3 << 19 | 65536 | r3;
          }
        } else {
          let e64 = n2(t4, i2 + 1);
          if (e64 != null) return e64;
        }
      });
    };
    return n2(this.state, 0);
  }
  forceAll() {
    for (; !this.p.parser.stateFlag(this.state, 2); ) if (!this.forceReduce()) {
      this.storeNode(0, this.pos, this.pos, 4, true);
      break;
    }
    return this;
  }
  get deadEnd() {
    if (this.stack.length != 3) return false;
    let { parser: e63 } = this.p;
    return e63.data[e63.stateSlot(this.state, 1)] == 65535 && !e63.stateSlot(this.state, 4);
  }
  restart() {
    this.storeNode(0, this.pos, this.pos, 4, true), this.state = this.stack[0], this.stack.length = 0;
  }
  sameState(e63) {
    if (this.state != e63.state || this.stack.length != e63.stack.length) return false;
    for (let t3 = 0; t3 < this.stack.length; t3 += 3) if (this.stack[t3] != e63.stack[t3]) return false;
    return true;
  }
  get parser() {
    return this.p.parser;
  }
  dialectEnabled(e63) {
    return this.p.parser.dialect.flags[e63];
  }
  shiftContext(e63, t3) {
    this.curContext && this.updateContext(this.curContext.tracker.shift(this.curContext.context, e63, this, this.p.stream.reset(t3)));
  }
  reduceContext(e63, t3) {
    this.curContext && this.updateContext(this.curContext.tracker.reduce(this.curContext.context, e63, this, this.p.stream.reset(t3)));
  }
  emitContext() {
    let e63 = this.buffer.length - 1;
    (e63 < 0 || this.buffer[e63] != -3) && this.buffer.push(this.curContext.hash, this.pos, this.pos, -3);
  }
  emitLookAhead() {
    let e63 = this.buffer.length - 1;
    (e63 < 0 || this.buffer[e63] != -4) && this.buffer.push(this.lookAhead, this.pos, this.pos, -4);
  }
  updateContext(e63) {
    if (e63 != this.curContext.context) {
      let t3 = new lu(this.curContext.tracker, e63);
      t3.hash != this.curContext.hash && this.emitContext(), this.curContext = t3;
    }
  }
  setLookAhead(e63) {
    return e63 <= this.lookAhead ? false : (this.emitLookAhead(), this.lookAhead = e63, true);
  }
  close() {
    this.curContext && this.curContext.tracker.strict && this.emitContext(), this.lookAhead > 0 && this.emitLookAhead();
  }
}, lu = class {
  constructor(e63, t3) {
    this.tracker = e63, this.context = t3, this.hash = e63.strict ? e63.hash(t3) : 0;
  }
}, uu = class {
  constructor(e63) {
    this.start = e63, this.state = e63.state, this.stack = e63.stack, this.base = this.stack.length;
  }
  reduce(e63) {
    let t3 = e63 & 65535, n2 = e63 >> 19;
    n2 == 0 ? (this.stack == this.start.stack && (this.stack = this.stack.slice()), this.stack.push(this.state, 0, 0), this.base += 3) : this.base -= (n2 - 1) * 3, this.state = this.start.p.parser.getGoto(this.stack[this.base - 3], t3, true);
  }
}, du = class e62 {
  constructor(e63, t3, n2) {
    this.stack = e63, this.pos = t3, this.index = n2, this.buffer = e63.buffer, this.index == 0 && this.maybeNext();
  }
  static create(t3, n2 = t3.bufferBase + t3.buffer.length) {
    return new e62(t3, n2, n2 - t3.bufferBase);
  }
  maybeNext() {
    let e63 = this.stack.parent;
    e63 != null && (this.index = this.stack.bufferBase - e63.bufferBase, this.stack = e63, this.buffer = e63.buffer);
  }
  get id() {
    return this.buffer[this.index - 4];
  }
  get start() {
    return this.buffer[this.index - 3];
  }
  get end() {
    return this.buffer[this.index - 2];
  }
  get size() {
    return this.buffer[this.index - 1];
  }
  next() {
    this.index -= 4, this.pos -= 4, this.index == 0 && this.maybeNext();
  }
  fork() {
    return new e62(this.stack, this.pos, this.index);
  }
};
function fu(e63, t3 = Uint16Array) {
  if (typeof e63 != `string`) return e63;
  let n2 = null;
  for (let r2 = 0, i2 = 0; r2 < e63.length; ) {
    let a2 = 0;
    for (; ; ) {
      let t4 = e63.charCodeAt(r2++), n3 = false;
      if (t4 == 126) {
        a2 = 65535;
        break;
      }
      t4 >= 92 && t4--, t4 >= 34 && t4--;
      let i3 = t4 - 32;
      if (i3 >= 46 && (i3 -= 46, n3 = true), a2 += i3, n3) break;
      a2 *= 46;
    }
    n2 ? n2[i2++] = a2 : n2 = new t3(a2);
  }
  return n2;
}
var pu = class {
  constructor() {
    this.start = -1, this.value = -1, this.end = -1, this.extended = -1, this.lookAhead = 0, this.mask = 0, this.context = 0;
  }
}, mu = new pu(), hu = class {
  constructor(e63, t3) {
    this.input = e63, this.ranges = t3, this.chunk = ``, this.chunkOff = 0, this.chunk2 = ``, this.chunk2Pos = 0, this.next = -1, this.token = mu, this.rangeIndex = 0, this.pos = this.chunkPos = t3[0].from, this.range = t3[0], this.end = t3[t3.length - 1].to, this.readNext();
  }
  resolveOffset(e63, t3) {
    let n2 = this.range, r2 = this.rangeIndex, i2 = this.pos + e63;
    for (; i2 < n2.from; ) {
      if (!r2) return null;
      let e64 = this.ranges[--r2];
      i2 -= n2.from - e64.to, n2 = e64;
    }
    for (; t3 < 0 ? i2 > n2.to : i2 >= n2.to; ) {
      if (r2 == this.ranges.length - 1) return null;
      let e64 = this.ranges[++r2];
      i2 += e64.from - n2.to, n2 = e64;
    }
    return i2;
  }
  clipPos(e63) {
    if (e63 >= this.range.from && e63 < this.range.to) return e63;
    for (let t3 of this.ranges) if (t3.to > e63) return Math.max(e63, t3.from);
    return this.end;
  }
  peek(e63) {
    let t3 = this.chunkOff + e63, n2, r2;
    if (t3 >= 0 && t3 < this.chunk.length) n2 = this.pos + e63, r2 = this.chunk.charCodeAt(t3);
    else {
      let t4 = this.resolveOffset(e63, 1);
      if (t4 == null) return -1;
      if (n2 = t4, n2 >= this.chunk2Pos && n2 < this.chunk2Pos + this.chunk2.length) r2 = this.chunk2.charCodeAt(n2 - this.chunk2Pos);
      else {
        let e64 = this.rangeIndex, t5 = this.range;
        for (; t5.to <= n2; ) t5 = this.ranges[++e64];
        this.chunk2 = this.input.chunk(this.chunk2Pos = n2), n2 + this.chunk2.length > t5.to && (this.chunk2 = this.chunk2.slice(0, t5.to - n2)), r2 = this.chunk2.charCodeAt(0);
      }
    }
    return n2 >= this.token.lookAhead && (this.token.lookAhead = n2 + 1), r2;
  }
  acceptToken(e63, t3 = 0) {
    let n2 = t3 ? this.resolveOffset(t3, -1) : this.pos;
    if (n2 == null || n2 < this.token.start) throw RangeError(`Token end out of bounds`);
    this.token.value = e63, this.token.end = n2;
  }
  acceptTokenTo(e63, t3) {
    this.token.value = e63, this.token.end = t3;
  }
  getChunk() {
    if (this.pos >= this.chunk2Pos && this.pos < this.chunk2Pos + this.chunk2.length) {
      let { chunk: e63, chunkPos: t3 } = this;
      this.chunk = this.chunk2, this.chunkPos = this.chunk2Pos, this.chunk2 = e63, this.chunk2Pos = t3, this.chunkOff = this.pos - this.chunkPos;
    } else {
      this.chunk2 = this.chunk, this.chunk2Pos = this.chunkPos;
      let e63 = this.input.chunk(this.pos);
      this.chunk = this.pos + e63.length > this.range.to ? e63.slice(0, this.range.to - this.pos) : e63, this.chunkPos = this.pos, this.chunkOff = 0;
    }
  }
  readNext() {
    return this.chunkOff >= this.chunk.length && (this.getChunk(), this.chunkOff == this.chunk.length) ? this.next = -1 : this.next = this.chunk.charCodeAt(this.chunkOff);
  }
  advance(e63 = 1) {
    for (this.chunkOff += e63; this.pos + e63 >= this.range.to; ) {
      if (this.rangeIndex == this.ranges.length - 1) return this.setDone();
      e63 -= this.range.to - this.pos, this.range = this.ranges[++this.rangeIndex], this.pos = this.range.from;
    }
    return this.pos += e63, this.pos >= this.token.lookAhead && (this.token.lookAhead = this.pos + 1), this.readNext();
  }
  setDone() {
    return this.pos = this.chunkPos = this.end, this.range = this.ranges[this.rangeIndex = this.ranges.length - 1], this.chunk = ``, this.next = -1;
  }
  reset(e63, t3) {
    if (t3 ? (this.token = t3, t3.start = e63, t3.lookAhead = e63 + 1, t3.value = t3.extended = -1) : this.token = mu, this.pos != e63) {
      if (this.pos = e63, e63 == this.end) return this.setDone(), this;
      for (; e63 < this.range.from; ) this.range = this.ranges[--this.rangeIndex];
      for (; e63 >= this.range.to; ) this.range = this.ranges[++this.rangeIndex];
      e63 >= this.chunkPos && e63 < this.chunkPos + this.chunk.length ? this.chunkOff = e63 - this.chunkPos : (this.chunk = ``, this.chunkOff = 0), this.readNext();
    }
    return this;
  }
  read(e63, t3) {
    if (e63 >= this.chunkPos && t3 <= this.chunkPos + this.chunk.length) return this.chunk.slice(e63 - this.chunkPos, t3 - this.chunkPos);
    if (e63 >= this.chunk2Pos && t3 <= this.chunk2Pos + this.chunk2.length) return this.chunk2.slice(e63 - this.chunk2Pos, t3 - this.chunk2Pos);
    if (e63 >= this.range.from && t3 <= this.range.to) return this.input.read(e63, t3);
    let n2 = ``;
    for (let r2 of this.ranges) {
      if (r2.from >= t3) break;
      r2.to > e63 && (n2 += this.input.read(Math.max(r2.from, e63), Math.min(r2.to, t3)));
    }
    return n2;
  }
}, gu = class {
  constructor(e63, t3) {
    this.data = e63, this.id = t3;
  }
  token(e63, t3) {
    let { parser: n2 } = t3.p;
    yu(this.data, e63, t3, this.id, n2.data, n2.tokenPrecTable);
  }
};
gu.prototype.contextual = gu.prototype.fallback = gu.prototype.extend = false;
var _u = class {
  constructor(e63, t3, n2) {
    this.precTable = t3, this.elseToken = n2, this.data = typeof e63 == `string` ? fu(e63) : e63;
  }
  token(e63, t3) {
    let n2 = e63.pos, r2 = 0;
    for (; ; ) {
      let n3 = e63.next < 0, i2 = e63.resolveOffset(1, 1);
      if (yu(this.data, e63, t3, 0, this.data, this.precTable), e63.token.value > -1) break;
      if (this.elseToken == null) return;
      if (n3 || r2++, i2 == null) break;
      e63.reset(i2, e63.token);
    }
    r2 && (e63.reset(n2, e63.token), e63.acceptToken(this.elseToken, r2));
  }
};
_u.prototype.contextual = gu.prototype.fallback = gu.prototype.extend = false;
var vu = class {
  constructor(e63, t3 = {}) {
    this.token = e63, this.contextual = !!t3.contextual, this.fallback = !!t3.fallback, this.extend = !!t3.extend;
  }
};
function yu(e63, t3, n2, r2, i2, a2) {
  let o2 = 0, s2 = 1 << r2, { dialect: c2 } = n2.p.parser;
  scan: for (; (s2 & e63[o2]) != 0; ) {
    let n3 = e63[o2 + 1];
    for (let r4 = o2 + 3; r4 < n3; r4 += 2) if ((e63[r4 + 1] & s2) > 0) {
      let n4 = e63[r4];
      if (c2.allows(n4) && (t3.token.value == -1 || t3.token.value == n4 || xu(n4, t3.token.value, i2, a2))) {
        t3.acceptToken(n4);
        break;
      }
    }
    let r3 = t3.next, l2 = 0, u2 = e63[o2 + 2];
    if (t3.next < 0 && u2 > l2 && e63[n3 + u2 * 3 - 3] == 65535) {
      o2 = e63[n3 + u2 * 3 - 1];
      continue scan;
    }
    for (; l2 < u2; ) {
      let i3 = l2 + u2 >> 1, a3 = n3 + i3 + (i3 << 1), s3 = e63[a3], c3 = e63[a3 + 1] || 65536;
      if (r3 < s3) u2 = i3;
      else if (r3 >= c3) l2 = i3 + 1;
      else {
        o2 = e63[a3 + 2], t3.advance();
        continue scan;
      }
    }
    break;
  }
}
function bu(e63, t3, n2) {
  for (let r2 = t3, i2; (i2 = e63[r2]) != 65535; r2++) if (i2 == n2) return r2 - t3;
  return -1;
}
function xu(e63, t3, n2, r2) {
  let i2 = bu(n2, r2, t3);
  return i2 < 0 || bu(n2, r2, e63) < i2;
}
var $ = typeof process < `u` && /\bparse\b/.test({}.LOG), Su = null;
function Cu(e63, t3, n2) {
  let r2 = e63.cursor(u.IncludeAnonymous);
  for (r2.moveTo(t3); ; ) if (!(n2 < 0 ? r2.childBefore(t3) : r2.childAfter(t3))) for (; ; ) {
    if ((n2 < 0 ? r2.to < t3 : r2.from > t3) && !r2.type.isError) return n2 < 0 ? Math.max(0, Math.min(r2.to - 1, t3 - 25)) : Math.min(e63.length, Math.max(r2.from + 1, t3 + 25));
    if (n2 < 0 ? r2.prevSibling() : r2.nextSibling()) break;
    if (!r2.parent()) return n2 < 0 ? 0 : e63.length;
  }
}
var wu = class {
  constructor(e63, t3) {
    this.fragments = e63, this.nodeSet = t3, this.i = 0, this.fragment = null, this.safeFrom = -1, this.safeTo = -1, this.trees = [], this.start = [], this.index = [], this.nextFragment();
  }
  nextFragment() {
    let e63 = this.fragment = this.i == this.fragments.length ? null : this.fragments[this.i++];
    if (e63) {
      for (this.safeFrom = e63.openStart ? Cu(e63.tree, e63.from + e63.offset, 1) - e63.offset : e63.from, this.safeTo = e63.openEnd ? Cu(e63.tree, e63.to + e63.offset, -1) - e63.offset : e63.to; this.trees.length; ) this.trees.pop(), this.start.pop(), this.index.pop();
      this.trees.push(e63.tree), this.start.push(-e63.offset), this.index.push(0), this.nextStart = this.safeFrom;
    } else this.nextStart = 1e9;
  }
  nodeAt(e63) {
    if (e63 < this.nextStart) return null;
    for (; this.fragment && this.safeTo <= e63; ) this.nextFragment();
    if (!this.fragment) return null;
    for (; ; ) {
      let t3 = this.trees.length - 1;
      if (t3 < 0) return this.nextFragment(), null;
      let n2 = this.trees[t3], i2 = this.index[t3];
      if (i2 == n2.children.length) {
        this.trees.pop(), this.start.pop(), this.index.pop();
        continue;
      }
      let a2 = n2.children[i2], o2 = this.start[t3] + n2.positions[i2];
      if (o2 > e63) return this.nextStart = o2, null;
      if (a2 instanceof d) {
        if (o2 == e63) {
          if (o2 < this.safeFrom) return null;
          let e64 = o2 + a2.length;
          if (e64 <= this.safeTo) {
            let t4 = a2.prop(r.lookAhead);
            if (!t4 || e64 + t4 < this.fragment.to) return a2;
          }
        }
        this.index[t3]++, o2 + a2.length >= Math.max(this.safeFrom, e63) && (this.trees.push(a2), this.start.push(o2), this.index.push(0));
      } else this.index[t3]++, this.nextStart = o2 + a2.length;
    }
  }
}, Tu = class {
  constructor(e63, t3) {
    this.stream = t3, this.tokens = [], this.mainToken = null, this.actions = [], this.tokens = e63.tokenizers.map((e64) => new pu());
  }
  getActions(e63) {
    let t3 = 0, n2 = null, { parser: r2 } = e63.p, { tokenizers: i2 } = r2, a2 = r2.stateSlot(e63.state, 3), o2 = e63.curContext ? e63.curContext.hash : 0, s2 = 0;
    for (let r3 = 0; r3 < i2.length; r3++) {
      if (!(1 << r3 & a2)) continue;
      let c2 = i2[r3], l2 = this.tokens[r3];
      if (!(n2 && !c2.fallback) && ((c2.contextual || l2.start != e63.pos || l2.mask != a2 || l2.context != o2) && (this.updateCachedToken(l2, c2, e63), l2.mask = a2, l2.context = o2), l2.lookAhead > l2.end + 25 && (s2 = Math.max(l2.lookAhead, s2)), l2.value != 0)) {
        let r4 = t3;
        if (l2.extended > -1 && (t3 = this.addActions(e63, l2.extended, l2.end, t3)), t3 = this.addActions(e63, l2.value, l2.end, t3), !c2.extend && (n2 = l2, t3 > r4)) break;
      }
    }
    for (; this.actions.length > t3; ) this.actions.pop();
    return s2 && e63.setLookAhead(s2), !n2 && e63.pos == this.stream.end && (n2 = new pu(), n2.value = e63.p.parser.eofTerm, n2.start = n2.end = e63.pos, t3 = this.addActions(e63, n2.value, n2.end, t3)), this.mainToken = n2, this.actions;
  }
  getMainToken(e63) {
    if (this.mainToken) return this.mainToken;
    let t3 = new pu(), { pos: n2, p: r2 } = e63;
    return t3.start = n2, t3.end = Math.min(n2 + 1, r2.stream.end), t3.value = n2 == r2.stream.end ? r2.parser.eofTerm : 0, t3;
  }
  updateCachedToken(e63, t3, n2) {
    let r2 = this.stream.clipPos(n2.pos);
    if (t3.token(this.stream.reset(r2, e63), n2), e63.value > -1) {
      let { parser: t4 } = n2.p;
      for (let r3 = 0; r3 < t4.specialized.length; r3++) if (t4.specialized[r3] == e63.value) {
        let i2 = t4.specializers[r3](this.stream.read(e63.start, e63.end), n2);
        if (i2 >= 0 && n2.p.parser.dialect.allows(i2 >> 1)) {
          i2 & 1 ? e63.extended = i2 >> 1 : e63.value = i2 >> 1;
          break;
        }
      }
    } else e63.value = 0, e63.end = this.stream.clipPos(r2 + 1);
  }
  putAction(e63, t3, n2, r2) {
    for (let t4 = 0; t4 < r2; t4 += 3) if (this.actions[t4] == e63) return r2;
    return this.actions[r2++] = e63, this.actions[r2++] = t3, this.actions[r2++] = n2, r2;
  }
  addActions(e63, t3, n2, r2) {
    let { state: i2 } = e63, { parser: a2 } = e63.p, { data: o2 } = a2;
    for (let e64 = 0; e64 < 2; e64++) for (let s2 = a2.stateSlot(i2, e64 ? 2 : 1); ; s2 += 3) {
      if (o2[s2] == 65535) if (o2[s2 + 1] == 1) s2 = Mu(o2, s2 + 2);
      else {
        r2 == 0 && o2[s2 + 1] == 2 && (r2 = this.putAction(Mu(o2, s2 + 2), t3, n2, r2));
        break;
      }
      o2[s2] == t3 && (r2 = this.putAction(Mu(o2, s2 + 1), t3, n2, r2));
    }
    return r2;
  }
}, Eu = class {
  constructor(e63, t3, n2, r2) {
    this.parser = e63, this.input = t3, this.ranges = r2, this.recovering = 0, this.nextStackID = 9812, this.minStackPos = 0, this.reused = [], this.stoppedAt = null, this.lastBigReductionStart = -1, this.lastBigReductionSize = 0, this.bigReductionCount = 0, this.stream = new hu(t3, r2), this.tokens = new Tu(e63, this.stream), this.topTerm = e63.top[1];
    let { from: i2 } = r2[0];
    this.stacks = [cu.start(this, e63.top[0], i2)], this.fragments = n2.length && this.stream.end - i2 > e63.bufferLength * 4 ? new wu(n2, e63.nodeSet) : null;
  }
  get parsedPos() {
    return this.minStackPos;
  }
  advance() {
    let e63 = this.stacks, t3 = this.minStackPos, n2 = this.stacks = [], r2, i2;
    if (this.bigReductionCount > 300 && e63.length == 1) {
      let [t4] = e63;
      for (; t4.forceReduce() && t4.stack.length && t4.stack[t4.stack.length - 2] >= this.lastBigReductionStart; ) ;
      this.bigReductionCount = this.lastBigReductionSize = 0;
    }
    for (let a2 = 0; a2 < e63.length; a2++) {
      let o2 = e63[a2];
      for (; ; ) {
        if (this.tokens.mainToken = null, o2.pos > t3) n2.push(o2);
        else if (this.advanceStack(o2, n2, e63)) continue;
        else {
          r2 || (r2 = [], i2 = []), r2.push(o2);
          let e64 = this.tokens.getMainToken(o2);
          i2.push(e64.value, e64.end);
        }
        break;
      }
    }
    if (!n2.length) {
      let e64 = r2 && Nu(r2);
      if (e64) return $ && console.log(`Finish with ` + this.stackID(e64)), this.stackToTree(e64);
      if (this.parser.strict) throw $ && r2 && console.log(`Stuck with token ` + (this.tokens.mainToken ? this.parser.getName(this.tokens.mainToken.value) : `none`)), SyntaxError(`No parse at ` + t3);
      this.recovering || (this.recovering = 5);
    }
    if (this.recovering && r2) {
      let e64 = this.stoppedAt != null && r2[0].pos > this.stoppedAt ? r2[0] : this.runRecovery(r2, i2, n2);
      if (e64) return $ && console.log(`Force-finish ` + this.stackID(e64)), this.stackToTree(e64.forceAll());
    }
    if (this.recovering) {
      let e64 = this.recovering == 1 ? 1 : this.recovering * 3;
      if (n2.length > e64) for (n2.sort((e65, t4) => t4.score - e65.score); n2.length > e64; ) n2.pop();
      n2.some((e65) => e65.reducePos > t3) && this.recovering--;
    } else if (n2.length > 1) {
      outer: for (let e64 = 0; e64 < n2.length - 1; e64++) {
        let t4 = n2[e64];
        for (let r3 = e64 + 1; r3 < n2.length; r3++) {
          let i3 = n2[r3];
          if (t4.sameState(i3) || t4.buffer.length > 500 && i3.buffer.length > 500) if ((t4.score - i3.score || t4.buffer.length - i3.buffer.length) > 0) n2.splice(r3--, 1);
          else {
            n2.splice(e64--, 1);
            continue outer;
          }
        }
      }
      n2.length > 12 && (n2.sort((e64, t4) => t4.score - e64.score), n2.splice(12, n2.length - 12));
    }
    this.minStackPos = n2[0].pos;
    for (let e64 = 1; e64 < n2.length; e64++) n2[e64].pos < this.minStackPos && (this.minStackPos = n2[e64].pos);
    return null;
  }
  stopAt(e63) {
    if (this.stoppedAt != null && this.stoppedAt < e63) throw RangeError(`Can't move stoppedAt forward`);
    this.stoppedAt = e63;
  }
  advanceStack(e63, t3, n2) {
    let i2 = e63.pos, { parser: a2 } = this, o2 = $ ? this.stackID(e63) + ` -> ` : ``;
    if (this.stoppedAt != null && i2 > this.stoppedAt) return e63.forceReduce() ? e63 : null;
    if (this.fragments) {
      let t4 = e63.curContext && e63.curContext.tracker.strict, n3 = t4 ? e63.curContext.hash : 0;
      for (let s3 = this.fragments.nodeAt(i2); s3; ) {
        let i3 = this.parser.nodeSet.types[s3.type.id] == s3.type ? a2.getGoto(e63.state, s3.type.id) : -1;
        if (i3 > -1 && s3.length && (!t4 || (s3.prop(r.contextHash) || 0) == n3)) return e63.useNode(s3, i3), $ && console.log(o2 + this.stackID(e63) + ` (via reuse of ${a2.getName(s3.type.id)})`), true;
        if (!(s3 instanceof d) || s3.children.length == 0 || s3.positions[0] > 0) break;
        let c3 = s3.children[0];
        if (c3 instanceof d && s3.positions[0] == 0) s3 = c3;
        else break;
      }
    }
    let s2 = a2.stateSlot(e63.state, 4);
    if (s2 > 0) return e63.reduce(s2), $ && console.log(o2 + this.stackID(e63) + ` (via always-reduce ${a2.getName(s2 & 65535)})`), true;
    if (e63.stack.length >= 8400) for (; e63.stack.length > 6e3 && e63.forceReduce(); ) ;
    let c2 = this.tokens.getActions(e63);
    for (let r2 = 0; r2 < c2.length; ) {
      let s3 = c2[r2++], l2 = c2[r2++], u2 = c2[r2++], d2 = r2 == c2.length || !n2, f2 = d2 ? e63 : e63.split(), p2 = this.tokens.mainToken;
      if (f2.apply(s3, l2, p2 ? p2.start : f2.pos, u2), $ && console.log(o2 + this.stackID(f2) + ` (via ${s3 & 65536 ? `reduce of ${a2.getName(s3 & 65535)}` : `shift`} for ${a2.getName(l2)} @ ${i2}${f2 == e63 ? `` : `, split`})`), d2) return true;
      f2.pos > i2 ? t3.push(f2) : n2.push(f2);
    }
    return false;
  }
  advanceFully(e63, t3) {
    let n2 = e63.pos;
    for (; ; ) {
      if (!this.advanceStack(e63, null, null)) return false;
      if (e63.pos > n2) return Du(e63, t3), true;
    }
  }
  runRecovery(e63, t3, n2) {
    let r2 = null, i2 = false;
    for (let a2 = 0; a2 < e63.length; a2++) {
      let o2 = e63[a2], s2 = t3[a2 << 1], c2 = t3[(a2 << 1) + 1], l2 = $ ? this.stackID(o2) + ` -> ` : ``;
      if (o2.deadEnd && (i2 || (i2 = true, o2.restart(), $ && console.log(l2 + this.stackID(o2) + ` (restarted)`), this.advanceFully(o2, n2)))) continue;
      let u2 = o2.split(), d2 = l2;
      for (let e64 = 0; e64 < 10 && u2.forceReduce() && ($ && console.log(d2 + this.stackID(u2) + ` (via force-reduce)`), !this.advanceFully(u2, n2)); e64++) $ && (d2 = this.stackID(u2) + ` -> `);
      for (let e64 of o2.recoverByInsert(s2)) $ && console.log(l2 + this.stackID(e64) + ` (via recover-insert)`), this.advanceFully(e64, n2);
      this.stream.end > o2.pos ? (c2 == o2.pos && (c2++, s2 = 0), o2.recoverByDelete(s2, c2), $ && console.log(l2 + this.stackID(o2) + ` (via recover-delete ${this.parser.getName(s2)})`), Du(o2, n2)) : (!r2 || r2.score < u2.score) && (r2 = u2);
    }
    return r2;
  }
  stackToTree(e63) {
    return e63.close(), d.build({ buffer: du.create(e63), nodeSet: this.parser.nodeSet, topID: this.topTerm, maxBufferLength: this.parser.bufferLength, reused: this.reused, start: this.ranges[0].from, length: e63.pos - this.ranges[0].from, minRepeatType: this.parser.minRepeatTerm });
  }
  stackID(e63) {
    let t3 = (Su || (Su = /* @__PURE__ */ new WeakMap())).get(e63);
    return t3 || Su.set(e63, t3 = String.fromCodePoint(this.nextStackID++)), t3 + e63;
  }
};
function Du(e63, t3) {
  for (let n2 = 0; n2 < t3.length; n2++) {
    let r2 = t3[n2];
    if (r2.pos == e63.pos && r2.sameState(e63)) {
      t3[n2].score < e63.score && (t3[n2] = e63);
      return;
    }
  }
  t3.push(e63);
}
var Ou = class {
  constructor(e63, t3, n2) {
    this.source = e63, this.flags = t3, this.disabled = n2;
  }
  allows(e63) {
    return !this.disabled || this.disabled[e63] == 0;
  }
}, ku = (e63) => e63, Au = class {
  constructor(e63) {
    this.start = e63.start, this.shift = e63.shift || ku, this.reduce = e63.reduce || ku, this.reuse = e63.reuse || ku, this.hash = e63.hash || (() => 0), this.strict = e63.strict !== false;
  }
}, ju = class t2 extends ue {
  constructor(t3) {
    if (super(), this.wrappers = [], t3.version != 14) throw RangeError(`Parser version (${t3.version}) doesn't match runtime version (14)`);
    let n2 = t3.nodeNames.split(` `);
    this.minRepeatTerm = n2.length;
    for (let e63 = 0; e63 < t3.repeatNodeCount; e63++) n2.push(``);
    let i2 = Object.keys(t3.topRules).map((e63) => t3.topRules[e63][1]), a2 = [];
    for (let e63 = 0; e63 < n2.length; e63++) a2.push([]);
    function c2(e63, t4, n3) {
      a2[e63].push([t4, t4.deserialize(String(n3))]);
    }
    if (t3.nodeProps) for (let e63 of t3.nodeProps) {
      let t4 = e63[0];
      typeof t4 == `string` && (t4 = r[t4]);
      for (let n3 = 1; n3 < e63.length; ) {
        let r2 = e63[n3++];
        if (r2 >= 0) c2(r2, t4, e63[n3++]);
        else {
          let i3 = e63[n3 + -r2];
          for (let a3 = -r2; a3 > 0; a3--) c2(e63[n3++], t4, i3);
          n3++;
        }
      }
    }
    this.nodeSet = new s(n2.map((e63, n3) => o.define({ name: n3 >= this.minRepeatTerm ? void 0 : e63, id: n3, props: a2[n3], top: i2.indexOf(n3) > -1, error: n3 == 0, skipped: t3.skippedNodes && t3.skippedNodes.indexOf(n3) > -1 }))), t3.propSources && (this.nodeSet = this.nodeSet.extend(...t3.propSources)), this.strict = false, this.bufferLength = e;
    let l2 = fu(t3.tokenData);
    this.context = t3.context, this.specializerSpecs = t3.specialized || [], this.specialized = new Uint16Array(this.specializerSpecs.length);
    for (let e63 = 0; e63 < this.specializerSpecs.length; e63++) this.specialized[e63] = this.specializerSpecs[e63].term;
    this.specializers = this.specializerSpecs.map(Pu), this.states = fu(t3.states, Uint32Array), this.data = fu(t3.stateData), this.goto = fu(t3.goto), this.maxTerm = t3.maxTerm, this.tokenizers = t3.tokenizers.map((e63) => typeof e63 == `number` ? new gu(l2, e63) : e63), this.topRules = t3.topRules, this.dialects = t3.dialects || {}, this.dynamicPrecedences = t3.dynamicPrecedences || null, this.tokenPrecTable = t3.tokenPrec, this.termNames = t3.termNames || null, this.maxNode = this.nodeSet.types.length - 1, this.dialect = this.parseDialect(), this.top = this.topRules[Object.keys(this.topRules)[0]];
  }
  createParse(e63, t3, n2) {
    let r2 = new Eu(this, e63, t3, n2);
    for (let i2 of this.wrappers) r2 = i2(r2, e63, t3, n2);
    return r2;
  }
  getGoto(e63, t3, n2 = false) {
    let r2 = this.goto;
    if (t3 >= r2[0]) return -1;
    for (let i2 = r2[t3 + 1]; ; ) {
      let t4 = r2[i2++], a2 = t4 & 1, o2 = r2[i2++];
      if (a2 && n2) return o2;
      for (let n3 = i2 + (t4 >> 1); i2 < n3; i2++) if (r2[i2] == e63) return o2;
      if (a2) return -1;
    }
  }
  hasAction(e63, t3) {
    let n2 = this.data;
    for (let r2 = 0; r2 < 2; r2++) for (let i2 = this.stateSlot(e63, r2 ? 2 : 1), a2; ; i2 += 3) {
      if ((a2 = n2[i2]) == 65535) if (n2[i2 + 1] == 1) a2 = n2[i2 = Mu(n2, i2 + 2)];
      else if (n2[i2 + 1] == 2) return Mu(n2, i2 + 2);
      else break;
      if (a2 == t3 || a2 == 0) return Mu(n2, i2 + 1);
    }
    return 0;
  }
  stateSlot(e63, t3) {
    return this.states[e63 * 6 + t3];
  }
  stateFlag(e63, t3) {
    return (this.stateSlot(e63, 0) & t3) > 0;
  }
  validAction(e63, t3) {
    return !!this.allActions(e63, (e64) => e64 == t3 ? true : null);
  }
  allActions(e63, t3) {
    let n2 = this.stateSlot(e63, 4), r2 = n2 ? t3(n2) : void 0;
    for (let n3 = this.stateSlot(e63, 1); r2 == null; n3 += 3) {
      if (this.data[n3] == 65535) if (this.data[n3 + 1] == 1) n3 = Mu(this.data, n3 + 2);
      else break;
      r2 = t3(Mu(this.data, n3 + 1));
    }
    return r2;
  }
  nextStates(e63) {
    let t3 = [];
    for (let n2 = this.stateSlot(e63, 1); ; n2 += 3) {
      if (this.data[n2] == 65535) if (this.data[n2 + 1] == 1) n2 = Mu(this.data, n2 + 2);
      else break;
      if (!(this.data[n2 + 2] & 1)) {
        let e64 = this.data[n2 + 1];
        t3.some((t4, n3) => n3 & 1 && t4 == e64) || t3.push(this.data[n2], e64);
      }
    }
    return t3;
  }
  configure(e63) {
    let n2 = Object.assign(Object.create(t2.prototype), this);
    if (e63.props && (n2.nodeSet = this.nodeSet.extend(...e63.props)), e63.top) {
      let t3 = this.topRules[e63.top];
      if (!t3) throw RangeError(`Invalid top rule name ${e63.top}`);
      n2.top = t3;
    }
    return e63.tokenizers && (n2.tokenizers = this.tokenizers.map((t3) => {
      let n3 = e63.tokenizers.find((e64) => e64.from == t3);
      return n3 ? n3.to : t3;
    })), e63.specializers && (n2.specializers = this.specializers.slice(), n2.specializerSpecs = this.specializerSpecs.map((t3, r2) => {
      let i2 = e63.specializers.find((e64) => e64.from == t3.external);
      if (!i2) return t3;
      let a2 = Object.assign(Object.assign({}, t3), { external: i2.to });
      return n2.specializers[r2] = Pu(a2), a2;
    })), e63.contextTracker && (n2.context = e63.contextTracker), e63.dialect && (n2.dialect = this.parseDialect(e63.dialect)), e63.strict != null && (n2.strict = e63.strict), e63.wrap && (n2.wrappers = n2.wrappers.concat(e63.wrap)), e63.bufferLength != null && (n2.bufferLength = e63.bufferLength), n2;
  }
  hasWrappers() {
    return this.wrappers.length > 0;
  }
  getName(e63) {
    return this.termNames ? this.termNames[e63] : String(e63 <= this.maxNode && this.nodeSet.types[e63].name || e63);
  }
  get eofTerm() {
    return this.maxNode + 1;
  }
  get topNode() {
    return this.nodeSet.types[this.top[1]];
  }
  dynamicPrecedence(e63) {
    let t3 = this.dynamicPrecedences;
    return t3 == null ? 0 : t3[e63] || 0;
  }
  parseDialect(e63) {
    let t3 = Object.keys(this.dialects), n2 = t3.map(() => false);
    if (e63) for (let r3 of e63.split(` `)) {
      let e64 = t3.indexOf(r3);
      e64 >= 0 && (n2[e64] = true);
    }
    let r2 = null;
    for (let e64 = 0; e64 < t3.length; e64++) if (!n2[e64]) for (let n3 = this.dialects[t3[e64]], i2; (i2 = this.data[n3++]) != 65535; ) (r2 || (r2 = new Uint8Array(this.maxTerm + 1)))[i2] = 1;
    return new Ou(e63, n2, r2);
  }
  static deserialize(e63) {
    return new t2(e63);
  }
};
function Mu(e63, t3) {
  return e63[t3] | e63[t3 + 1] << 16;
}
function Nu(e63) {
  let t3 = null;
  for (let n2 of e63) {
    let e64 = n2.p.stoppedAt;
    (n2.pos == n2.p.stream.end || e64 != null && n2.pos > e64) && n2.p.parser.stateFlag(n2.state, 2) && (!t3 || t3.score < n2.score) && (t3 = n2);
  }
  return t3;
}
function Pu(e63) {
  if (e63.external) {
    let t3 = e63.extend ? 1 : 0;
    return (n2, r2) => e63.external(n2, r2) << 1 | t3;
  }
  return e63.get;
}
export {
  yt as $,
  Gc as A,
  oc as B,
  ll as C,
  d as Ct,
  Ll as D,
  Bc as E,
  B as F,
  Ts as G,
  Ss as H,
  Y as I,
  On as J,
  uc as K,
  di as L,
  vc as M,
  Z as N,
  Hc as O,
  z as P,
  Ut as Q,
  Kn as R,
  sl as S,
  ue as St,
  il as T,
  H as U,
  ic as V,
  qs as W,
  $e as X,
  Mt as Y,
  D as Z,
  bl as _,
  u as _t,
  Tl as a,
  tn as at,
  Sl as b,
  o as bt,
  Q as c,
  mt as ct,
  Jc as d,
  Ye as dt,
  k as et,
  Gl as f,
  Ze as ft,
  vl as g,
  Xe as gt,
  Vc as h,
  T as ht,
  _u as i,
  _t as it,
  pc as j,
  kl as k,
  nl as l,
  C as lt,
  xl as m,
  pn as mt,
  vu as n,
  A as nt,
  cl as o,
  Yt as ot,
  Pl as p,
  Jt as pt,
  rc as q,
  ju as r,
  E as rt,
  Wc as s,
  j as st,
  Au as t,
  N as tt,
  tl as u,
  M as ut,
  wl as v,
  r as vt,
  ol as w,
  fe as wt,
  al as x,
  ce as xt,
  Cl as y,
  s as yt,
  Bs as z
};
