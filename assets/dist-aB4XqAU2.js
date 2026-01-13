import { A as e, F as t, H as n, I as r, L as i, P as a, R as o, T as s, U as c, V as l, Y as u, ct as d, dt as f, et as p, ft as m, gt as h, it as g, lt as _, nt as v, ot as y, pt as b, q as x, rt as S, st as C, ut as ee } from "./dist-CQp5Y4zm.js";
var w = class {
  constructor(e9, t2, n2, r2) {
    this.state = e9, this.pos = t2, this.explicit = n2, this.view = r2, this.abortListeners = [], this.abortOnDocChange = false;
  }
  tokenBefore(t2) {
    let n2 = e(this.state).resolveInner(this.pos, -1);
    for (; n2 && t2.indexOf(n2.name) < 0; ) n2 = n2.parent;
    return n2 ? { from: n2.from, to: this.pos, text: this.state.sliceDoc(n2.from, this.pos), type: n2.type } : null;
  }
  matchBefore(e9) {
    let t2 = this.state.doc.lineAt(this.pos), n2 = Math.max(t2.from, this.pos - 250), r2 = t2.text.slice(n2 - t2.from, this.pos - t2.from), i2 = r2.search(k(e9, false));
    return i2 < 0 ? null : { from: n2 + i2, to: this.pos, text: r2.slice(i2) };
  }
  get aborted() {
    return this.abortListeners == null;
  }
  addEventListener(e9, t2, n2) {
    e9 == `abort` && this.abortListeners && (this.abortListeners.push(t2), n2 && n2.onDocChange && (this.abortOnDocChange = true));
  }
};
function T(e9) {
  let t2 = Object.keys(e9).join(``), n2 = /\w/.test(t2);
  return n2 && (t2 = t2.replace(/\w/g, ``)), `[${n2 ? `\\w` : ``}${t2.replace(/[^\w\s]/g, `\\$&`)}]`;
}
function te(e9) {
  let t2 = /* @__PURE__ */ Object.create(null), n2 = /* @__PURE__ */ Object.create(null);
  for (let { label: r3 } of e9) {
    t2[r3[0]] = true;
    for (let e10 = 1; e10 < r3.length; e10++) n2[r3[e10]] = true;
  }
  let r2 = T(t2) + T(n2) + `*$`;
  return [RegExp(`^` + r2), new RegExp(r2)];
}
function E(e9) {
  let t2 = e9.map((e10) => typeof e10 == `string` ? { label: e10 } : e10), [n2, r2] = t2.every((e10) => /^\w+$/.test(e10.label)) ? [/\w*$/, /\w+$/] : te(t2);
  return (e10) => {
    let i2 = e10.matchBefore(r2);
    return i2 || e10.explicit ? { from: i2 ? i2.from : e10.pos, options: t2, validFor: n2 } : null;
  };
}
function ne(t2, n2) {
  return (r2) => {
    for (let n3 = e(r2.state).resolveInner(r2.pos, -1); n3; n3 = n3.parent) {
      if (t2.indexOf(n3.name) > -1) return null;
      if (n3.type.isTop) break;
    }
    return n2(r2);
  };
}
var D = class {
  constructor(e9, t2, n2, r2) {
    this.completion = e9, this.source = t2, this.match = n2, this.score = r2;
  }
};
function O(e9) {
  return e9.selection.main.from;
}
function k(e9, t2) {
  let { source: n2 } = e9, r2 = t2 && n2[0] != `^`, i2 = n2[n2.length - 1] != `$`;
  return !r2 && !i2 ? e9 : RegExp(`${r2 ? `^` : ``}(?:${n2})${i2 ? `$` : ``}`, e9.flags ?? (e9.ignoreCase ? `i` : ``));
}
var A = u.define();
function re(e9, t2, n2, r2) {
  let { main: i2 } = e9.selection, a2 = n2 - i2.from, o2 = r2 - i2.from;
  return { ...e9.changeByRange((s2) => {
    if (s2 != i2 && n2 != r2 && e9.sliceDoc(s2.from + a2, s2.from + o2) != e9.sliceDoc(n2, r2)) return { range: s2 };
    let c2 = e9.toText(t2);
    return { changes: { from: s2.from + a2, to: r2 == i2.from ? s2.to : s2.from + o2, insert: c2 }, range: p.cursor(s2.from + a2 + c2.length) };
  }), scrollIntoView: true, userEvent: `input.complete` };
}
var j = /* @__PURE__ */ new WeakMap();
function ie(e9) {
  if (!Array.isArray(e9)) return e9;
  let t2 = j.get(e9);
  return t2 || j.set(e9, t2 = E(e9)), t2;
}
var M = C.define(), N = C.define(), ae = class {
  constructor(e9) {
    this.pattern = e9, this.chars = [], this.folded = [], this.any = [], this.precise = [], this.byWord = [], this.score = 0, this.matched = [];
    for (let t2 = 0; t2 < e9.length; ) {
      let n2 = f(e9, t2), r2 = m(n2);
      this.chars.push(n2);
      let i2 = e9.slice(t2, t2 + r2), a2 = i2.toUpperCase();
      this.folded.push(f(a2 == i2 ? i2.toLowerCase() : a2, 0)), t2 += r2;
    }
    this.astral = e9.length != this.chars.length;
  }
  ret(e9, t2) {
    return this.score = e9, this.matched = t2, this;
  }
  match(e9) {
    if (this.pattern.length == 0) return this.ret(-100, []);
    if (e9.length < this.pattern.length) return null;
    let { chars: t2, folded: n2, any: r2, precise: i2, byWord: a2 } = this;
    if (t2.length == 1) {
      let r3 = f(e9, 0), i3 = m(r3), a3 = i3 == e9.length ? 0 : -100;
      if (r3 != t2[0]) if (r3 == n2[0]) a3 += -200;
      else return null;
      return this.ret(a3, [0, i3]);
    }
    let o2 = e9.indexOf(this.pattern);
    if (o2 == 0) return this.ret(e9.length == this.pattern.length ? 0 : -100, [0, this.pattern.length]);
    let s2 = t2.length, c2 = 0;
    if (o2 < 0) {
      for (let i3 = 0, a3 = Math.min(e9.length, 200); i3 < a3 && c2 < s2; ) {
        let a4 = f(e9, i3);
        (a4 == t2[c2] || a4 == n2[c2]) && (r2[c2++] = i3), i3 += m(a4);
      }
      if (c2 < s2) return null;
    }
    let l2 = 0, u2 = 0, d2 = false, p2 = 0, g2 = -1, _2 = -1, v2 = /[a-z]/.test(e9), y2 = true;
    for (let r3 = 0, c3 = Math.min(e9.length, 200), b2 = 0; r3 < c3 && u2 < s2; ) {
      let c4 = f(e9, r3);
      o2 < 0 && (l2 < s2 && c4 == t2[l2] && (i2[l2++] = r3), p2 < s2 && (c4 == t2[p2] || c4 == n2[p2] ? (p2 == 0 && (g2 = r3), _2 = r3 + 1, p2++) : p2 = 0));
      let x2, S2 = c4 < 255 ? c4 >= 48 && c4 <= 57 || c4 >= 97 && c4 <= 122 ? 2 : c4 >= 65 && c4 <= 90 ? 1 : 0 : (x2 = h(c4)) == x2.toLowerCase() ? x2 == x2.toUpperCase() ? 0 : 2 : 1;
      (!r3 || S2 == 1 && v2 || b2 == 0 && S2 != 0) && (t2[u2] == c4 || n2[u2] == c4 && (d2 = true) ? a2[u2++] = r3 : a2.length && (y2 = false)), b2 = S2, r3 += m(c4);
    }
    return u2 == s2 && a2[0] == 0 && y2 ? this.result(-100 + (d2 ? -200 : 0), a2, e9) : p2 == s2 && g2 == 0 ? this.ret(-200 - e9.length + (_2 == e9.length ? 0 : -100), [0, _2]) : o2 > -1 ? this.ret(-700 - e9.length, [o2, o2 + this.pattern.length]) : p2 == s2 ? this.ret(-900 - e9.length, [g2, _2]) : u2 == s2 ? this.result(-100 + (d2 ? -200 : 0) + -700 + (y2 ? 0 : -1100), a2, e9) : t2.length == 2 ? null : this.result((r2[0] ? -700 : 0) + -200 + -1100, r2, e9);
  }
  result(e9, t2, n2) {
    let r2 = [], i2 = 0;
    for (let e10 of t2) {
      let t3 = e10 + (this.astral ? m(f(n2, e10)) : 1);
      i2 && r2[i2 - 1] == e10 ? r2[i2 - 1] = t3 : (r2[i2++] = e10, r2[i2++] = t3);
    }
    return this.ret(e9 - n2.length, r2);
  }
}, oe = class {
  constructor(e9) {
    this.pattern = e9, this.matched = [], this.score = 0, this.folded = e9.toLowerCase();
  }
  match(e9) {
    if (e9.length < this.pattern.length) return null;
    let t2 = e9.slice(0, this.pattern.length), n2 = t2 == this.pattern ? 0 : t2.toLowerCase() == this.folded ? -200 : null;
    return n2 == null ? null : (this.matched = [0, t2.length], this.score = n2 + (e9.length == this.pattern.length ? 0 : -100), this);
  }
}, P = v.define({ combine(e9) {
  return b(e9, { activateOnTyping: true, activateOnCompletion: () => false, activateOnTypingDelay: 100, selectOnOpen: true, override: null, closeOnBlur: true, maxRenderedOptions: 100, defaultKeymap: true, tooltipClass: () => ``, optionClass: () => ``, aboveCursor: false, icons: true, addToOptions: [], positionInfo: ce, filterStrict: false, compareCompletions: (e10, t2) => (e10.sortText || e10.label).localeCompare(t2.sortText || t2.label), interactionDelay: 75, updateSyncTime: 100 }, { defaultKeymap: (e10, t2) => e10 && t2, closeOnBlur: (e10, t2) => e10 && t2, icons: (e10, t2) => e10 && t2, tooltipClass: (e10, t2) => (n2) => se(e10(n2), t2(n2)), optionClass: (e10, t2) => (n2) => se(e10(n2), t2(n2)), addToOptions: (e10, t2) => e10.concat(t2), filterStrict: (e10, t2) => e10 || t2 });
} });
function se(e9, t2) {
  return e9 ? t2 ? e9 + ` ` + t2 : e9 : t2;
}
function ce(e9, n2, r2, i2, a2, o2) {
  let s2 = e9.textDirection == t.RTL, c2 = s2, l2 = false, u2 = `top`, d2, f2, p2 = n2.left - a2.left, m2 = a2.right - n2.right, h2 = i2.right - i2.left, g2 = i2.bottom - i2.top;
  if (c2 && p2 < Math.min(h2, m2) ? c2 = false : !c2 && m2 < Math.min(h2, p2) && (c2 = true), h2 <= (c2 ? p2 : m2)) d2 = Math.max(a2.top, Math.min(r2.top, a2.bottom - g2)) - n2.top, f2 = Math.min(400, c2 ? p2 : m2);
  else {
    l2 = true, f2 = Math.min(400, (s2 ? n2.right : a2.right - n2.left) - 30);
    let e10 = a2.bottom - n2.bottom;
    e10 >= g2 || e10 > n2.top ? d2 = r2.bottom - n2.top : (u2 = `bottom`, d2 = n2.bottom - r2.top);
  }
  let _2 = (n2.bottom - n2.top) / o2.offsetHeight, v2 = (n2.right - n2.left) / o2.offsetWidth;
  return { style: `${u2}: ${d2 / _2}px; max-width: ${f2 / v2}px`, class: `cm-completionInfo-` + (l2 ? s2 ? `left-narrow` : `right-narrow` : c2 ? `left` : `right`) };
}
function le(e9) {
  let t2 = e9.addToOptions.slice();
  return e9.icons && t2.push({ render(e10) {
    let t3 = document.createElement(`div`);
    return t3.classList.add(`cm-completionIcon`), e10.type && t3.classList.add(...e10.type.split(/\s+/g).map((e11) => `cm-completionIcon-` + e11)), t3.setAttribute(`aria-hidden`, `true`), t3;
  }, position: 20 }), t2.push({ render(e10, t3, n2, r2) {
    let i2 = document.createElement(`span`);
    i2.className = `cm-completionLabel`;
    let a2 = e10.displayLabel || e10.label, o2 = 0;
    for (let e11 = 0; e11 < r2.length; ) {
      let t4 = r2[e11++], n3 = r2[e11++];
      t4 > o2 && i2.appendChild(document.createTextNode(a2.slice(o2, t4)));
      let s2 = i2.appendChild(document.createElement(`span`));
      s2.appendChild(document.createTextNode(a2.slice(t4, n3))), s2.className = `cm-completionMatchedText`, o2 = n3;
    }
    return o2 < a2.length && i2.appendChild(document.createTextNode(a2.slice(o2))), i2;
  }, position: 50 }, { render(e10) {
    if (!e10.detail) return null;
    let t3 = document.createElement(`span`);
    return t3.className = `cm-completionDetail`, t3.textContent = e10.detail, t3;
  }, position: 80 }), t2.sort((e10, t3) => e10.position - t3.position).map((e10) => e10.render);
}
function F(e9, t2, n2) {
  if (e9 <= n2) return { from: 0, to: e9 };
  if (t2 < 0 && (t2 = 0), t2 <= e9 >> 1) {
    let e10 = Math.floor(t2 / n2);
    return { from: e10 * n2, to: (e10 + 1) * n2 };
  }
  let r2 = Math.floor((e9 - t2) / n2);
  return { from: e9 - (r2 + 1) * n2, to: e9 - r2 * n2 };
}
var ue = class {
  constructor(e9, t2, n2) {
    this.view = e9, this.stateField = t2, this.applyCompletion = n2, this.info = null, this.infoDestroy = null, this.placeInfoReq = { read: () => this.measureInfo(), write: (e10) => this.placeInfo(e10), key: this }, this.space = null, this.currentClass = ``;
    let r2 = e9.state.field(t2), { options: i2, selected: a2 } = r2.open, o2 = e9.state.facet(P);
    this.optionContent = le(o2), this.optionClass = o2.optionClass, this.tooltipClass = o2.tooltipClass, this.range = F(i2.length, a2, o2.maxRenderedOptions), this.dom = document.createElement(`div`), this.dom.className = `cm-tooltip-autocomplete`, this.updateTooltipClass(e9.state), this.dom.addEventListener(`mousedown`, (n3) => {
      let { options: r3 } = e9.state.field(t2).open;
      for (let t3 = n3.target, i3; t3 && t3 != this.dom; t3 = t3.parentNode) if (t3.nodeName == `LI` && (i3 = /-(\d+)$/.exec(t3.id)) && +i3[1] < r3.length) {
        this.applyCompletion(e9, r3[+i3[1]]), n3.preventDefault();
        return;
      }
    }), this.dom.addEventListener(`focusout`, (t3) => {
      let n3 = e9.state.field(this.stateField, false);
      n3 && n3.tooltip && e9.state.facet(P).closeOnBlur && t3.relatedTarget != e9.contentDOM && e9.dispatch({ effects: N.of(null) });
    }), this.showOptions(i2, r2.id);
  }
  mount() {
    this.updateSel();
  }
  showOptions(e9, t2) {
    this.list && this.list.remove(), this.list = this.dom.appendChild(this.createListBox(e9, t2, this.range)), this.list.addEventListener(`scroll`, () => {
      this.info && this.view.requestMeasure(this.placeInfoReq);
    });
  }
  update(e9) {
    var _a;
    let t2 = e9.state.field(this.stateField), n2 = e9.startState.field(this.stateField);
    if (this.updateTooltipClass(e9.state), t2 != n2) {
      let { options: r2, selected: i2, disabled: a2 } = t2.open;
      (!n2.open || n2.open.options != r2) && (this.range = F(r2.length, i2, e9.state.facet(P).maxRenderedOptions), this.showOptions(r2, t2.id)), this.updateSel(), a2 != ((_a = n2.open) == null ? void 0 : _a.disabled) && this.dom.classList.toggle(`cm-tooltip-autocomplete-disabled`, !!a2);
    }
  }
  updateTooltipClass(e9) {
    let t2 = this.tooltipClass(e9);
    if (t2 != this.currentClass) {
      for (let e10 of this.currentClass.split(` `)) e10 && this.dom.classList.remove(e10);
      for (let e10 of t2.split(` `)) e10 && this.dom.classList.add(e10);
      this.currentClass = t2;
    }
  }
  positioned(e9) {
    this.space = e9, this.info && this.view.requestMeasure(this.placeInfoReq);
  }
  updateSel() {
    let e9 = this.view.state.field(this.stateField), t2 = e9.open;
    (t2.selected > -1 && t2.selected < this.range.from || t2.selected >= this.range.to) && (this.range = F(t2.options.length, t2.selected, this.view.state.facet(P).maxRenderedOptions), this.showOptions(t2.options, e9.id));
    let n2 = this.updateSelectedOption(t2.selected);
    if (n2) {
      this.destroyInfo();
      let { completion: r2 } = t2.options[t2.selected], { info: i2 } = r2;
      if (!i2) return;
      let a2 = typeof i2 == `string` ? document.createTextNode(i2) : i2(r2);
      if (!a2) return;
      `then` in a2 ? a2.then((t3) => {
        t3 && this.view.state.field(this.stateField, false) == e9 && this.addInfoPane(t3, r2);
      }).catch((e10) => c(this.view.state, e10, `completion info`)) : (this.addInfoPane(a2, r2), n2.setAttribute(`aria-describedby`, this.info.id));
    }
  }
  addInfoPane(e9, t2) {
    this.destroyInfo();
    let n2 = this.info = document.createElement(`div`);
    if (n2.className = `cm-tooltip cm-completionInfo`, n2.id = `cm-completionInfo-` + Math.floor(Math.random() * 65535).toString(16), e9.nodeType != null) n2.appendChild(e9), this.infoDestroy = null;
    else {
      let { dom: t3, destroy: r2 } = e9;
      n2.appendChild(t3), this.infoDestroy = r2 || null;
    }
    this.dom.appendChild(n2), this.view.requestMeasure(this.placeInfoReq);
  }
  updateSelectedOption(e9) {
    let t2 = null;
    for (let n2 = this.list.firstChild, r2 = this.range.from; n2; n2 = n2.nextSibling, r2++) n2.nodeName != `LI` || !n2.id ? r2-- : r2 == e9 ? n2.hasAttribute(`aria-selected`) || (n2.setAttribute(`aria-selected`, `true`), t2 = n2) : n2.hasAttribute(`aria-selected`) && (n2.removeAttribute(`aria-selected`), n2.removeAttribute(`aria-describedby`));
    return t2 && fe(this.list, t2), t2;
  }
  measureInfo() {
    let e9 = this.dom.querySelector(`[aria-selected]`);
    if (!e9 || !this.info) return null;
    let t2 = this.dom.getBoundingClientRect(), n2 = this.info.getBoundingClientRect(), r2 = e9.getBoundingClientRect(), i2 = this.space;
    if (!i2) {
      let e10 = this.dom.ownerDocument.documentElement;
      i2 = { left: 0, top: 0, right: e10.clientWidth, bottom: e10.clientHeight };
    }
    return r2.top > Math.min(i2.bottom, t2.bottom) - 10 || r2.bottom < Math.max(i2.top, t2.top) + 10 ? null : this.view.state.facet(P).positionInfo(this.view, t2, r2, n2, i2, this.dom);
  }
  placeInfo(e9) {
    this.info && (e9 ? (e9.style && (this.info.style.cssText = e9.style), this.info.className = `cm-tooltip cm-completionInfo ` + (e9.class || ``)) : this.info.style.cssText = `top: -1e6px`);
  }
  createListBox(e9, t2, n2) {
    let r2 = document.createElement(`ul`);
    r2.id = t2, r2.setAttribute(`role`, `listbox`), r2.setAttribute(`aria-expanded`, `true`), r2.setAttribute(`aria-label`, this.view.state.phrase(`Completions`)), r2.addEventListener(`mousedown`, (e10) => {
      e10.target == r2 && e10.preventDefault();
    });
    let i2 = null;
    for (let a2 = n2.from; a2 < n2.to; a2++) {
      let { completion: o2, match: s2 } = e9[a2], { section: c2 } = o2;
      if (c2) {
        let e10 = typeof c2 == `string` ? c2 : c2.name;
        if (e10 != i2 && (a2 > n2.from || n2.from == 0)) if (i2 = e10, typeof c2 != `string` && c2.header) r2.appendChild(c2.header(c2));
        else {
          let t3 = r2.appendChild(document.createElement(`completion-section`));
          t3.textContent = e10;
        }
      }
      let l2 = r2.appendChild(document.createElement(`li`));
      l2.id = t2 + `-` + a2, l2.setAttribute(`role`, `option`);
      let u2 = this.optionClass(o2);
      u2 && (l2.className = u2);
      for (let e10 of this.optionContent) {
        let t3 = e10(o2, this.view.state, this.view, s2);
        t3 && l2.appendChild(t3);
      }
    }
    return n2.from && r2.classList.add(`cm-completionListIncompleteTop`), n2.to < e9.length && r2.classList.add(`cm-completionListIncompleteBottom`), r2;
  }
  destroyInfo() {
    this.info && (this.info = (this.infoDestroy && this.infoDestroy(), this.info.remove(), null));
  }
  destroy() {
    this.destroyInfo();
  }
};
function de(e9, t2) {
  return (n2) => new ue(n2, e9, t2);
}
function fe(e9, t2) {
  let n2 = e9.getBoundingClientRect(), r2 = t2.getBoundingClientRect(), i2 = n2.height / e9.offsetHeight;
  r2.top < n2.top ? e9.scrollTop -= (n2.top - r2.top) / i2 : r2.bottom > n2.bottom && (e9.scrollTop += (r2.bottom - n2.bottom) / i2);
}
function I(e9) {
  return (e9.boost || 0) * 100 + (e9.apply ? 10 : 0) + (e9.info ? 5 : 0) + (e9.type ? 1 : 0);
}
function pe(e9, t2) {
  let n2 = [], r2 = null, i2 = null, a2 = (e10) => {
    n2.push(e10);
    let { section: t3 } = e10.completion;
    if (t3) {
      r2 || (r2 = []);
      let e11 = typeof t3 == `string` ? t3 : t3.name;
      r2.some((t4) => t4.name == e11) || r2.push(typeof t3 == `string` ? { name: e11 } : t3);
    }
  }, o2 = t2.facet(P);
  for (let r3 of e9) if (r3.hasResult()) {
    let e10 = r3.result.getMatch;
    if (r3.result.filter === false) for (let t3 of r3.result.options) a2(new D(t3, r3.source, e10 ? e10(t3) : [], 1e9 - n2.length));
    else {
      let n3 = t2.sliceDoc(r3.from, r3.to), s3, c3 = o2.filterStrict ? new oe(n3) : new ae(n3);
      for (let t3 of r3.result.options) if (s3 = c3.match(t3.label)) {
        let n4 = t3.displayLabel ? e10 ? e10(t3, s3.matched) : [] : s3.matched, o3 = s3.score + (t3.boost || 0);
        if (a2(new D(t3, r3.source, n4, o3)), typeof t3.section == `object` && t3.section.rank === `dynamic`) {
          let { name: e11 } = t3.section;
          i2 || (i2 = /* @__PURE__ */ Object.create(null)), i2[e11] = Math.max(o3, i2[e11] || -1e9);
        }
      }
    }
  }
  if (r2) {
    let e10 = /* @__PURE__ */ Object.create(null), t3 = 0, a3 = (e11, t4) => (e11.rank === `dynamic` && t4.rank === `dynamic` ? i2[t4.name] - i2[e11.name] : 0) || (typeof e11.rank == `number` ? e11.rank : 1e9) - (typeof t4.rank == `number` ? t4.rank : 1e9) || (e11.name < t4.name ? -1 : 1);
    for (let n3 of r2.sort(a3)) t3 -= 1e5, e10[n3.name] = t3;
    for (let t4 of n2) {
      let { section: n3 } = t4.completion;
      n3 && (t4.score += e10[typeof n3 == `string` ? n3 : n3.name]);
    }
  }
  let s2 = [], c2 = null, l2 = o2.compareCompletions;
  for (let e10 of n2.sort((e11, t3) => t3.score - e11.score || l2(e11.completion, t3.completion))) {
    let t3 = e10.completion;
    !c2 || c2.label != t3.label || c2.detail != t3.detail || c2.type != null && t3.type != null && c2.type != t3.type || c2.apply != t3.apply || c2.boost != t3.boost ? s2.push(e10) : I(e10.completion) > I(c2) && (s2[s2.length - 1] = e10), c2 = e10.completion;
  }
  return s2;
}
var me = class e2 {
  constructor(e9, t2, n2, r2, i2, a2) {
    this.options = e9, this.attrs = t2, this.tooltip = n2, this.timestamp = r2, this.selected = i2, this.disabled = a2;
  }
  setSelected(t2, n2) {
    return t2 == this.selected || t2 >= this.options.length ? this : new e2(this.options, L(n2, t2), this.tooltip, this.timestamp, t2, this.disabled);
  }
  static build(t2, n2, r2, i2, a2, o2) {
    if (i2 && !o2 && t2.some((e9) => e9.isPending)) return i2.setDisabled();
    let s2 = pe(t2, n2);
    if (!s2.length) return i2 && t2.some((e9) => e9.isPending) ? i2.setDisabled() : null;
    let c2 = n2.facet(P).selectOnOpen ? 0 : -1;
    if (i2 && i2.selected != c2 && i2.selected != -1) {
      let e9 = i2.options[i2.selected].completion;
      for (let t3 = 0; t3 < s2.length; t3++) if (s2[t3].completion == e9) {
        c2 = t3;
        break;
      }
    }
    return new e2(s2, L(r2, c2), { pos: t2.reduce((e9, t3) => t3.hasResult() ? Math.min(e9, t3.from) : e9, 1e8), create: xe, above: a2.aboveCursor }, i2 ? i2.timestamp : Date.now(), c2, false);
  }
  map(t2) {
    return new e2(this.options, this.attrs, { ...this.tooltip, pos: t2.mapPos(this.tooltip.pos) }, this.timestamp, this.selected, this.disabled);
  }
  setDisabled() {
    return new e2(this.options, this.attrs, this.tooltip, this.timestamp, this.selected, true);
  }
}, he = class e3 {
  constructor(e9, t2, n2) {
    this.active = e9, this.id = t2, this.open = n2;
  }
  static start() {
    return new e3(ye, `cm-ac-` + Math.floor(Math.random() * 2e6).toString(36), null);
  }
  update(t2) {
    let { state: n2 } = t2, r2 = n2.facet(P), i2 = (r2.override || n2.languageDataAt(`autocomplete`, O(n2)).map(ie)).map((e9) => (this.active.find((t3) => t3.source == e9) || new z(e9, this.active.some((e10) => e10.state != 0) ? 1 : 0)).update(t2, r2));
    i2.length == this.active.length && i2.every((e9, t3) => e9 == this.active[t3]) && (i2 = this.active);
    let a2 = this.open, o2 = t2.effects.some((e9) => e9.is(V));
    a2 && t2.docChanged && (a2 = a2.map(t2.changes)), t2.selection || i2.some((e9) => e9.hasResult() && t2.changes.touchesRange(e9.from, e9.to)) || !ge(i2, this.active) || o2 ? a2 = me.build(i2, n2, this.id, a2, r2, o2) : a2 && a2.disabled && !i2.some((e9) => e9.isPending) && (a2 = null), !a2 && i2.every((e9) => !e9.isPending) && i2.some((e9) => e9.hasResult()) && (i2 = i2.map((e9) => e9.hasResult() ? new z(e9.source, 0) : e9));
    for (let e9 of t2.effects) e9.is(H) && (a2 && (a2 = a2.setSelected(e9.value, this.id)));
    return i2 == this.active && a2 == this.open ? this : new e3(i2, this.id, a2);
  }
  get tooltip() {
    return this.open ? this.open.tooltip : null;
  }
  get attrs() {
    return this.open ? this.open.attrs : this.active.length ? _e : ve;
  }
};
function ge(e9, t2) {
  if (e9 == t2) return true;
  for (let n2 = 0, r2 = 0; ; ) {
    for (; n2 < e9.length && !e9[n2].hasResult(); ) n2++;
    for (; r2 < t2.length && !t2[r2].hasResult(); ) r2++;
    let i2 = n2 == e9.length, a2 = r2 == t2.length;
    if (i2 || a2) return i2 == a2;
    if (e9[n2++].result != t2[r2++].result) return false;
  }
}
var _e = { "aria-autocomplete": `list` }, ve = {};
function L(e9, t2) {
  let n2 = { "aria-autocomplete": `list`, "aria-haspopup": `listbox`, "aria-controls": e9 };
  return t2 > -1 && (n2[`aria-activedescendant`] = e9 + `-` + t2), n2;
}
var ye = [];
function R(e9, t2) {
  if (e9.isUserEvent(`input.complete`)) {
    let n3 = e9.annotation(A);
    if (n3 && t2.activateOnCompletion(n3)) return 12;
  }
  let n2 = e9.isUserEvent(`input.type`);
  return n2 && t2.activateOnTyping ? 5 : n2 ? 1 : e9.isUserEvent(`delete.backward`) ? 2 : e9.selection ? 8 : e9.docChanged ? 16 : 0;
}
var z = class e4 {
  constructor(e9, t2, n2 = false) {
    this.source = e9, this.state = t2, this.explicit = n2;
  }
  hasResult() {
    return false;
  }
  get isPending() {
    return this.state == 1;
  }
  update(t2, n2) {
    let r2 = R(t2, n2), i2 = this;
    (r2 & 8 || r2 & 16 && this.touches(t2)) && (i2 = new e4(i2.source, 0)), r2 & 4 && i2.state == 0 && (i2 = new e4(this.source, 1)), i2 = i2.updateFor(t2, r2);
    for (let n3 of t2.effects) if (n3.is(M)) i2 = new e4(i2.source, 1, n3.value);
    else if (n3.is(N)) i2 = new e4(i2.source, 0);
    else if (n3.is(V)) for (let e9 of n3.value) e9.source == i2.source && (i2 = e9);
    return i2;
  }
  updateFor(e9, t2) {
    return this.map(e9.changes);
  }
  map(e9) {
    return this;
  }
  touches(e9) {
    return e9.changes.touchesRange(O(e9.state));
  }
}, B = class e5 extends z {
  constructor(e9, t2, n2, r2, i2, a2) {
    super(e9, 3, t2), this.limit = n2, this.result = r2, this.from = i2, this.to = a2;
  }
  hasResult() {
    return true;
  }
  updateFor(t2, n2) {
    if (!(n2 & 3)) return this.map(t2.changes);
    let r2 = this.result;
    r2.map && !t2.changes.empty && (r2 = r2.map(r2, t2.changes));
    let i2 = t2.changes.mapPos(this.from), a2 = t2.changes.mapPos(this.to, 1), o2 = O(t2.state);
    if (o2 > a2 || !r2 || n2 & 2 && (O(t2.startState) == this.from || o2 < this.limit)) return new z(this.source, n2 & 4 ? 1 : 0);
    let s2 = t2.changes.mapPos(this.limit);
    return be(r2.validFor, t2.state, i2, a2) ? new e5(this.source, this.explicit, s2, r2, i2, a2) : r2.update && (r2 = r2.update(r2, i2, a2, new w(t2.state, o2, false))) ? new e5(this.source, this.explicit, s2, r2, r2.from, r2.to ?? O(t2.state)) : new z(this.source, 1, this.explicit);
  }
  map(t2) {
    return t2.empty ? this : (this.result.map ? this.result.map(this.result, t2) : this.result) ? new e5(this.source, this.explicit, t2.mapPos(this.limit), this.result, t2.mapPos(this.from), t2.mapPos(this.to, 1)) : new z(this.source, 0);
  }
  touches(e9) {
    return e9.changes.touchesRange(this.from, this.to);
  }
};
function be(e9, t2, n2, r2) {
  if (!e9) return false;
  let i2 = t2.sliceDoc(n2, r2);
  return typeof e9 == `function` ? e9(i2, n2, r2, t2) : k(e9, true).test(i2);
}
var V = C.define({ map(e9, t2) {
  return e9.map((e10) => e10.map(t2));
} }), H = C.define(), U = d.define({ create() {
  return he.start();
}, update(e9, t2) {
  return e9.update(t2);
}, provide: (e9) => [x.from(e9, (e10) => e10.tooltip), r.contentAttributes.from(e9, (e10) => e10.attrs)] });
function W(e9, t2) {
  let n2 = t2.completion.apply || t2.completion.label, r2 = e9.state.field(U).active.find((e10) => e10.source == t2.source);
  return r2 instanceof B ? (typeof n2 == `string` ? e9.dispatch({ ...re(e9.state, n2, r2.from, r2.to), annotations: A.of(t2.completion) }) : n2(e9, t2.completion, r2.from, r2.to), true) : false;
}
var xe = de(U, W);
function G(e9, t2 = `option`) {
  return (n2) => {
    let r2 = n2.state.field(U, false);
    if (!r2 || !r2.open || r2.open.disabled || Date.now() - r2.open.timestamp < n2.state.facet(P).interactionDelay) return false;
    let i2 = 1, a2;
    t2 == `page` && (a2 = l(n2, r2.open.tooltip)) && (i2 = Math.max(2, Math.floor(a2.dom.offsetHeight / a2.dom.querySelector(`li`).offsetHeight) - 1));
    let { length: o2 } = r2.open.options, s2 = r2.open.selected > -1 ? r2.open.selected + i2 * (e9 ? 1 : -1) : e9 ? 0 : o2 - 1;
    return s2 < 0 ? s2 = t2 == `page` ? 0 : o2 - 1 : s2 >= o2 && (s2 = t2 == `page` ? o2 - 1 : 0), n2.dispatch({ effects: H.of(s2) }), true;
  };
}
var Se = (e9) => {
  let t2 = e9.state.field(U, false);
  return e9.state.readOnly || !t2 || !t2.open || t2.open.selected < 0 || t2.open.disabled || Date.now() - t2.open.timestamp < e9.state.facet(P).interactionDelay ? false : W(e9, t2.open.options[t2.open.selected]);
}, K = (e9) => e9.state.field(U, false) ? (e9.dispatch({ effects: M.of(true) }), true) : false, Ce = (e9) => {
  let t2 = e9.state.field(U, false);
  return !t2 || !t2.active.some((e10) => e10.state != 0) ? false : (e9.dispatch({ effects: N.of(null) }), true);
}, we = class {
  constructor(e9, t2) {
    this.active = e9, this.context = t2, this.time = Date.now(), this.updates = [], this.done = void 0;
  }
}, Te = 50, Ee = 1e3, De = i.fromClass(class {
  constructor(e9) {
    this.view = e9, this.debounceUpdate = -1, this.running = [], this.debounceAccept = -1, this.pendingStart = false, this.composing = 0;
    for (let t2 of e9.state.field(U).active) t2.isPending && this.startQuery(t2);
  }
  update(e9) {
    let t2 = e9.state.field(U), n2 = e9.state.facet(P);
    if (!e9.selectionSet && !e9.docChanged && e9.startState.field(U) == t2) return;
    let r2 = e9.transactions.some((e10) => {
      let t3 = R(e10, n2);
      return t3 & 8 || (e10.selection || e10.docChanged) && !(t3 & 3);
    });
    for (let t3 = 0; t3 < this.running.length; t3++) {
      let n3 = this.running[t3];
      if (r2 || n3.context.abortOnDocChange && e9.docChanged || n3.updates.length + e9.transactions.length > Te && Date.now() - n3.time > Ee) {
        for (let e10 of n3.context.abortListeners) try {
          e10();
        } catch (e11) {
          c(this.view.state, e11);
        }
        n3.context.abortListeners = null, this.running.splice(t3--, 1);
      } else n3.updates.push(...e9.transactions);
    }
    this.debounceUpdate > -1 && clearTimeout(this.debounceUpdate), e9.transactions.some((e10) => e10.effects.some((e11) => e11.is(M))) && (this.pendingStart = true);
    let i2 = this.pendingStart ? 50 : n2.activateOnTypingDelay;
    if (this.debounceUpdate = t2.active.some((e10) => e10.isPending && !this.running.some((t3) => t3.active.source == e10.source)) ? setTimeout(() => this.startUpdate(), i2) : -1, this.composing != 0) for (let t3 of e9.transactions) t3.isUserEvent(`input.type`) ? this.composing = 2 : this.composing == 2 && t3.selection && (this.composing = 3);
  }
  startUpdate() {
    this.debounceUpdate = -1, this.pendingStart = false;
    let { state: e9 } = this.view, t2 = e9.field(U);
    for (let e10 of t2.active) e10.isPending && !this.running.some((t3) => t3.active.source == e10.source) && this.startQuery(e10);
    this.running.length && t2.open && t2.open.disabled && (this.debounceAccept = setTimeout(() => this.accept(), this.view.state.facet(P).updateSyncTime));
  }
  startQuery(e9) {
    let { state: t2 } = this.view, n2 = new w(t2, O(t2), e9.explicit, this.view), r2 = new we(e9, n2);
    this.running.push(r2), Promise.resolve(e9.source(n2)).then((e10) => {
      r2.context.aborted || (r2.done = e10 || null, this.scheduleAccept());
    }, (e10) => {
      this.view.dispatch({ effects: N.of(null) }), c(this.view.state, e10);
    });
  }
  scheduleAccept() {
    this.running.every((e9) => e9.done !== void 0) ? this.accept() : this.debounceAccept < 0 && (this.debounceAccept = setTimeout(() => this.accept(), this.view.state.facet(P).updateSyncTime));
  }
  accept() {
    this.debounceAccept > -1 && clearTimeout(this.debounceAccept), this.debounceAccept = -1;
    let e9 = [], t2 = this.view.state.facet(P), n2 = this.view.state.field(U);
    for (let r2 = 0; r2 < this.running.length; r2++) {
      let i2 = this.running[r2];
      if (i2.done === void 0) continue;
      if (this.running.splice(r2--, 1), i2.done) {
        let n3 = O(i2.updates.length ? i2.updates[0].startState : this.view.state), r3 = Math.min(n3, i2.done.from + (i2.active.explicit ? 0 : 1)), a3 = new B(i2.active.source, i2.active.explicit, r3, i2.done, i2.done.from, i2.done.to ?? n3);
        for (let e10 of i2.updates) a3 = a3.update(e10, t2);
        if (a3.hasResult()) {
          e9.push(a3);
          continue;
        }
      }
      let a2 = n2.active.find((e10) => e10.source == i2.active.source);
      if (a2 && a2.isPending) if (i2.done == null) {
        let n3 = new z(i2.active.source, 0);
        for (let e10 of i2.updates) n3 = n3.update(e10, t2);
        n3.isPending || e9.push(n3);
      } else this.startQuery(a2);
    }
    (e9.length || n2.open && n2.open.disabled) && this.view.dispatch({ effects: V.of(e9) });
  }
}, { eventHandlers: { blur(e9) {
  let t2 = this.view.state.field(U, false);
  if (t2 && t2.tooltip && this.view.state.facet(P).closeOnBlur) {
    let n2 = t2.open && l(this.view, t2.open.tooltip);
    (!n2 || !n2.dom.contains(e9.relatedTarget)) && setTimeout(() => this.view.dispatch({ effects: N.of(null) }), 10);
  }
}, compositionstart() {
  this.composing = 1;
}, compositionend() {
  this.composing == 3 && setTimeout(() => this.view.dispatch({ effects: M.of(false) }), 20), this.composing = 0;
} } }), Oe = typeof navigator == `object` && /Win/.test(navigator.platform), ke = g.highest(r.domEventHandlers({ keydown(e9, t2) {
  let n2 = t2.state.field(U, false);
  if (!n2 || !n2.open || n2.open.disabled || n2.open.selected < 0 || e9.key.length > 1 || e9.ctrlKey && !(Oe && e9.altKey) || e9.metaKey) return false;
  let r2 = n2.open.options[n2.open.selected], i2 = n2.active.find((e10) => e10.source == r2.source), a2 = r2.completion.commitCharacters || i2.result.commitCharacters;
  return a2 && a2.indexOf(e9.key) > -1 && W(t2, r2), false;
} })), q = r.baseTheme({ ".cm-tooltip.cm-tooltip-autocomplete": { "& > ul": { fontFamily: `monospace`, whiteSpace: `nowrap`, overflow: `hidden auto`, maxWidth_fallback: `700px`, maxWidth: `min(700px, 95vw)`, minWidth: `250px`, maxHeight: `10em`, height: `100%`, listStyle: `none`, margin: 0, padding: 0, "& > li, & > completion-section": { padding: `1px 3px`, lineHeight: 1.2 }, "& > li": { overflowX: `hidden`, textOverflow: `ellipsis`, cursor: `pointer` }, "& > completion-section": { display: `list-item`, borderBottom: `1px solid silver`, paddingLeft: `0.5em`, opacity: 0.7 } } }, "&light .cm-tooltip-autocomplete ul li[aria-selected]": { background: `#17c`, color: `white` }, "&light .cm-tooltip-autocomplete-disabled ul li[aria-selected]": { background: `#777` }, "&dark .cm-tooltip-autocomplete ul li[aria-selected]": { background: `#347`, color: `white` }, "&dark .cm-tooltip-autocomplete-disabled ul li[aria-selected]": { background: `#444` }, ".cm-completionListIncompleteTop:before, .cm-completionListIncompleteBottom:after": { content: `"\xB7\xB7\xB7"`, opacity: 0.5, display: `block`, textAlign: `center` }, ".cm-tooltip.cm-completionInfo": { position: `absolute`, padding: `3px 9px`, width: `max-content`, maxWidth: `400px`, boxSizing: `border-box`, whiteSpace: `pre-line` }, ".cm-completionInfo.cm-completionInfo-left": { right: `100%` }, ".cm-completionInfo.cm-completionInfo-right": { left: `100%` }, ".cm-completionInfo.cm-completionInfo-left-narrow": { right: `30px` }, ".cm-completionInfo.cm-completionInfo-right-narrow": { left: `30px` }, "&light .cm-snippetField": { backgroundColor: `#00000022` }, "&dark .cm-snippetField": { backgroundColor: `#ffffff22` }, ".cm-snippetFieldPosition": { verticalAlign: `text-top`, width: 0, height: `1.15em`, display: `inline-block`, margin: `0 -0.7px -.7em`, borderLeft: `1.4px dotted #888` }, ".cm-completionMatchedText": { textDecoration: `underline` }, ".cm-completionDetail": { marginLeft: `0.5em`, fontStyle: `italic` }, ".cm-completionIcon": { fontSize: `90%`, width: `.8em`, display: `inline-block`, textAlign: `center`, paddingRight: `.6em`, opacity: `0.6`, boxSizing: `content-box` }, ".cm-completionIcon-function, .cm-completionIcon-method": { "&:after": { content: `'\u0192'` } }, ".cm-completionIcon-class": { "&:after": { content: `'\u25CB'` } }, ".cm-completionIcon-interface": { "&:after": { content: `'\u25CC'` } }, ".cm-completionIcon-variable": { "&:after": { content: `'\u{1D465}'` } }, ".cm-completionIcon-constant": { "&:after": { content: `'\u{1D436}'` } }, ".cm-completionIcon-type": { "&:after": { content: `'\u{1D461}'` } }, ".cm-completionIcon-enum": { "&:after": { content: `'\u222A'` } }, ".cm-completionIcon-property": { "&:after": { content: `'\u25A1'` } }, ".cm-completionIcon-keyword": { "&:after": { content: `'\u{1F511}\uFE0E'` } }, ".cm-completionIcon-namespace": { "&:after": { content: `'\u25A2'` } }, ".cm-completionIcon-text": { "&:after": { content: `'abc'`, fontSize: `50%`, verticalAlign: `middle` } } }), Ae = class {
  constructor(e9, t2, n2, r2) {
    this.field = e9, this.line = t2, this.from = n2, this.to = r2;
  }
}, je = class e6 {
  constructor(e9, t2, n2) {
    this.field = e9, this.from = t2, this.to = n2;
  }
  map(t2) {
    let n2 = t2.mapPos(this.from, -1, S.TrackDel), r2 = t2.mapPos(this.to, 1, S.TrackDel);
    return n2 == null || r2 == null ? null : new e6(this.field, n2, r2);
  }
}, Me = class e7 {
  constructor(e9, t2) {
    this.lines = e9, this.fieldPositions = t2;
  }
  instantiate(e9, t2) {
    let n2 = [], r2 = [t2], i2 = e9.doc.lineAt(t2), a2 = /^\s*/.exec(i2.text)[0];
    for (let i3 of this.lines) {
      if (n2.length) {
        let n3 = a2, o2 = /^\t*/.exec(i3)[0].length;
        for (let t3 = 0; t3 < o2; t3++) n3 += e9.facet(s);
        r2.push(t2 + n3.length - o2), i3 = n3 + i3.slice(o2);
      }
      n2.push(i3), t2 += i3.length + 1;
    }
    return { text: n2, ranges: this.fieldPositions.map((e10) => new je(e10.field, r2[e10.line] + e10.from, r2[e10.line] + e10.to)) };
  }
  static parse(t2) {
    let n2 = [], r2 = [], i2 = [], a2;
    for (let e9 of t2.split(/\r\n?|\n/)) {
      for (; a2 = /[#$]\{(?:(\d+)(?::([^{}]*))?|((?:\\[{}]|[^{}])*))\}/.exec(e9); ) {
        let t3 = a2[1] ? +a2[1] : null, o2 = a2[2] || a2[3] || ``, s2 = -1, c2 = o2.replace(/\\[{}]/g, (e10) => e10[1]);
        for (let e10 = 0; e10 < n2.length; e10++) (t3 == null ? c2 && n2[e10].name == c2 : n2[e10].seq == t3) && (s2 = e10);
        if (s2 < 0) {
          let e10 = 0;
          for (; e10 < n2.length && (t3 == null || n2[e10].seq != null && n2[e10].seq < t3); ) e10++;
          n2.splice(e10, 0, { seq: t3, name: c2 }), s2 = e10;
          for (let e11 of i2) e11.field >= s2 && e11.field++;
        }
        for (let e10 of i2) if (e10.line == r2.length && e10.from > a2.index) {
          let t4 = a2[2] ? 3 + (a2[1] || ``).length : 2;
          e10.from -= t4, e10.to -= t4;
        }
        i2.push(new Ae(s2, r2.length, a2.index, a2.index + c2.length)), e9 = e9.slice(0, a2.index) + o2 + e9.slice(a2.index + a2[0].length);
      }
      e9 = e9.replace(/\\([{}])/g, (e10, t3, n3) => {
        for (let e11 of i2) e11.line == r2.length && e11.from > n3 && (e11.from--, e11.to--);
        return t3;
      }), r2.push(e9);
    }
    return new e7(r2, i2);
  }
}, Ne = a.widget({ widget: new class extends o {
  toDOM() {
    let e9 = document.createElement(`span`);
    return e9.className = `cm-snippetFieldPosition`, e9;
  }
  ignoreEvent() {
    return false;
  }
}() }), Pe = a.mark({ class: `cm-snippetField` }), J = class e8 {
  constructor(e9, t2) {
    this.ranges = e9, this.active = t2, this.deco = a.set(e9.map((e10) => (e10.from == e10.to ? Ne : Pe).range(e10.from, e10.to)), true);
  }
  map(t2) {
    let n2 = [];
    for (let e9 of this.ranges) {
      let r2 = e9.map(t2);
      if (!r2) return null;
      n2.push(r2);
    }
    return new e8(n2, this.active);
  }
  selectionInsideField(e9) {
    return e9.ranges.every((e10) => this.ranges.some((t2) => t2.field == this.active && t2.from <= e10.from && t2.to >= e10.to));
  }
}, Y = C.define({ map(e9, t2) {
  return e9 && e9.map(t2);
} }), Fe = C.define(), X = d.define({ create() {
  return null;
}, update(e9, t2) {
  for (let n2 of t2.effects) {
    if (n2.is(Y)) return n2.value;
    if (n2.is(Fe) && e9) return new J(e9.ranges, n2.value);
  }
  return e9 && t2.docChanged && (e9 = e9.map(t2.changes)), e9 && t2.selection && !e9.selectionInsideField(t2.selection) && (e9 = null), e9;
}, provide: (e9) => r.decorations.from(e9, (e10) => e10 ? e10.deco : a.none) });
function Z(e9, t2) {
  return p.create(e9.filter((e10) => e10.field == t2).map((e10) => p.range(e10.from, e10.to)));
}
function Ie(e9) {
  let t2 = Me.parse(e9);
  return (e10, n2, r2, i2) => {
    let { text: a2, ranges: o2 } = t2.instantiate(e10.state, r2), { main: s2 } = e10.state.selection, c2 = { changes: { from: r2, to: i2 == s2.from ? s2.to : i2, insert: _.of(a2) }, scrollIntoView: true, annotations: n2 ? [A.of(n2), ee.userEvent.of(`input.complete`)] : void 0 };
    if (o2.length && (c2.selection = Z(o2, 0)), o2.some((e11) => e11.field > 0)) {
      let t3 = new J(o2, 0), n3 = c2.effects = [Y.of(t3)];
      e10.state.field(X, false) === void 0 && n3.push(C.appendConfig.of([X, ze, Ve, q]));
    }
    e10.dispatch(e10.state.update(c2));
  };
}
function Le(e9) {
  return ({ state: t2, dispatch: n2 }) => {
    let r2 = t2.field(X, false);
    if (!r2 || e9 < 0 && r2.active == 0) return false;
    let i2 = r2.active + e9, a2 = e9 > 0 && !r2.ranges.some((t3) => t3.field == i2 + e9);
    return n2(t2.update({ selection: Z(r2.ranges, i2), effects: Y.of(a2 ? null : new J(r2.ranges, i2)), scrollIntoView: true })), true;
  };
}
var Re = [{ key: `Tab`, run: Le(1), shift: Le(-1) }, { key: `Escape`, run: ({ state: e9, dispatch: t2 }) => e9.field(X, false) ? (t2(e9.update({ effects: Y.of(null) })), true) : false }], Q = v.define({ combine(e9) {
  return e9.length ? e9[0] : Re;
} }), ze = g.highest(n.compute([Q], (e9) => e9.facet(Q)));
function Be(e9, t2) {
  return { ...t2, apply: Ie(e9) };
}
var Ve = r.domEventHandlers({ mousedown(e9, t2) {
  let n2 = t2.state.field(X, false), r2;
  if (!n2 || (r2 = t2.posAtCoords({ x: e9.clientX, y: e9.clientY })) == null) return false;
  let i2 = n2.ranges.find((e10) => e10.from <= r2 && e10.to >= r2);
  return !i2 || i2.field == n2.active ? false : (t2.dispatch({ selection: Z(n2.ranges, i2.field), effects: Y.of(n2.ranges.some((e10) => e10.field > i2.field) ? new J(n2.ranges, i2.field) : null), scrollIntoView: true }), true);
} }), $ = new class extends y {
}();
$.startSide = 1, $.endSide = -1, typeof navigator == `object` && navigator.userAgent;
function He(e9 = {}) {
  return [ke, U, P.of(e9), De, We, q];
}
var Ue = [{ key: `Ctrl-Space`, run: K }, { mac: "Alt-`", run: K }, { mac: `Alt-i`, run: K }, { key: `Escape`, run: Ce }, { key: `ArrowDown`, run: G(true) }, { key: `ArrowUp`, run: G(false) }, { key: `PageDown`, run: G(true, `page`) }, { key: `PageUp`, run: G(false, `page`) }, { key: `Enter`, run: Se }], We = g.highest(n.computeN([P], (e9) => e9.facet(P).defaultKeymap ? [Ue] : []));
export {
  Be as a,
  ne as i,
  He as n,
  E as r,
  w as t
};
