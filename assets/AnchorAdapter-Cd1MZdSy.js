import { m as p, o as S, D as I, u as F, aj as J, aM as U, i as Y, C as Q, J as X, aF as Z, aN as ee, B as L, l as A, n as j, k as M, q as W, v as te } from "./light-DfzEfYBd.js";
import { d as O, h as x, b, j as y, k as q, f as K, i as oe, t as D, q as G, p as ne, I as le } from "./index-DSvGlfEm.js";
import { e as ie, f as re, d as ae, t as se } from "./ListItem-88YmMY8q.js";
import { a as ce } from "./Tooltip-DMQY7OZD.js";
function V(e) {
  return typeof e == "string" ? document.querySelector(e) : typeof e == "function" ? e() : e;
}
const fe = p("affix", [S("affixed", { position: "fixed" }, [S("absolute-positioned", { position: "absolute" })])]);
function ue(e) {
  return e instanceof HTMLElement ? e.scrollTop : window.scrollY;
}
function de(e) {
  return e instanceof HTMLElement ? e.getBoundingClientRect() : { top: 0, bottom: window.innerHeight };
}
const N = { listenTo: [String, Object, Function], top: Number, bottom: Number, triggerTop: Number, triggerBottom: Number, position: { type: String, default: "fixed" }, offsetTop: { type: Number, validator: () => true, default: void 0 }, offsetBottom: { type: Number, validator: () => true, default: void 0 }, target: { type: Function, validator: () => true, default: void 0 } }, ve = I(N), he = O({ name: "Affix", props: N, setup(e) {
  const { mergedClsPrefixRef: r } = F(e);
  J("-affix", fe, r);
  let n = null;
  const l = b(false), a = b(false), c = b(null), v = b(null), f = y(() => a.value || l.value), h = y(() => {
    var t, o;
    return (o = (t = e.triggerTop) !== null && t !== void 0 ? t : e.offsetTop) !== null && o !== void 0 ? o : e.top;
  }), m = y(() => {
    var t, o;
    return (o = (t = e.top) !== null && t !== void 0 ? t : e.triggerTop) !== null && o !== void 0 ? o : e.offsetTop;
  }), w = y(() => {
    var t, o;
    return (o = (t = e.bottom) !== null && t !== void 0 ? t : e.triggerBottom) !== null && o !== void 0 ? o : e.offsetBottom;
  }), R = y(() => {
    var t, o;
    return (o = (t = e.triggerBottom) !== null && t !== void 0 ? t : e.offsetBottom) !== null && o !== void 0 ? o : e.bottom;
  }), k = b(null), C = () => {
    const { target: t, listenTo: o } = e;
    t ? n = t() : o ? n = V(o) : n = document, n && (n.addEventListener("scroll", u), u());
  };
  function u() {
    U(d);
  }
  function d() {
    const { value: t } = k;
    if (!n || !t) return;
    const o = ue(n);
    if (f.value) {
      v.value !== null && o < v.value && (l.value = false, v.value = null), c.value !== null && o > c.value && (a.value = false, c.value = null);
      return;
    }
    const g = de(n), T = t.getBoundingClientRect(), E = T.top - g.top, B = g.bottom - T.bottom, s = h.value, i = R.value;
    s !== void 0 && E <= s ? (l.value = true, v.value = o - (s - E)) : (l.value = false, v.value = null), i !== void 0 && B <= i ? (a.value = true, c.value = o + i - B) : (a.value = false, c.value = null);
  }
  return q(() => {
    C();
  }), K(() => {
    n && n.removeEventListener("scroll", u);
  }), { selfRef: k, affixed: f, mergedClsPrefix: r, mergedstyle: y(() => {
    const t = {};
    return l.value && h.value !== void 0 && m.value !== void 0 && (t.top = `${m.value}px`), a.value && R.value !== void 0 && w.value !== void 0 && (t.bottom = `${w.value}px`), t;
  }) };
}, render() {
  const { mergedClsPrefix: e } = this;
  return x("div", { ref: "selfRef", class: [`${e}-affix`, { [`${e}-affix--affixed`]: this.affixed, [`${e}-affix--absolute-positioned`]: this.position === "absolute" }], style: this.mergedstyle }, this.$slots);
} }), H = Y("n-anchor"), ge = { title: String, href: String }, Be = O({ name: "AnchorLink", props: ge, slots: Object, setup(e, { slots: r }) {
  const n = b(null), l = oe(H), a = D(e, "href"), c = Q(() => a.value && a.value === l.activeHref.value);
  ie(H, "collectedLinkHrefs", a), re(H, "titleEls", () => n.value), G(c, (f) => {
    f && n.value && l.updateBarPosition(n.value);
  });
  function v() {
    e.href !== void 0 && l.setActiveHref(e.href);
  }
  return () => {
    var f;
    const { value: h } = l.mergedClsPrefix;
    return x("div", { class: [`${h}-anchor-link`, c.value && `${h}-anchor-link--active`] }, x("a", { ref: n, class: [`${h}-anchor-link__title`], href: e.href, title: ae(e.title), onClick: v }, { default: () => X(r.title, () => [e.title]) }), (f = r.default) === null || f === void 0 ? void 0 : f.call(r));
  };
} });
function me(e, r) {
  const { top: n, height: l } = e.getBoundingClientRect(), a = r instanceof HTMLElement ? r.getBoundingClientRect().top : 0;
  return { top: n - a, height: l };
}
const z = { type: { type: String, default: "rail" }, showRail: { type: Boolean, default: true }, showBackground: { type: Boolean, default: true }, bound: { type: Number, default: 12 }, internalScrollable: Boolean, ignoreGap: Boolean, offsetTarget: [String, Object, Function] }, be = I(z), pe = O({ name: "BaseAnchor", props: Object.assign(Object.assign({}, z), { mergedClsPrefix: { type: String, required: true } }), setup(e) {
  const r = [], n = [], l = b(null), a = b(null), c = b(null), v = b(null), f = y(() => e.type === "block"), h = y(() => !f.value && e.showRail);
  function m() {
    const { value: u } = c, { value: d } = a;
    u && (u.style.transition = "none"), d && (d.style.transition = "none"), n && n.forEach((t) => {
      t.style.transition = "none";
    }), le(() => {
      const { value: t } = c, { value: o } = a;
      t && (t.offsetWidth, t.style.transition = ""), o && (o.offsetWidth, o.style.transition = ""), n && n.forEach((g) => {
        g.offsetWidth, g.style.transition = "";
      });
    });
  }
  function w(u, d = true) {
    const { value: t } = c, { value: o } = a, { value: g } = v;
    if (!g || !t) return;
    d || (t.style.transition = "none", o && (o.style.transition = "none"));
    const { offsetHeight: T, offsetWidth: E } = u, { top: B, left: s } = u.getBoundingClientRect(), { top: i, left: $ } = g.getBoundingClientRect(), P = B - i, _ = s - $;
    t.style.top = `${P}px`, t.style.height = `${T}px`, o && (o.style.top = `${P}px`, o.style.height = `${T}px`, o.style.maxWidth = `${E + _}px`), t.offsetHeight, o && o.offsetHeight, d || (t.style.transition = "", o && (o.style.transition = ""));
  }
  const R = se(() => {
    C(true);
  }, 128);
  function k(u, d = true) {
    const t = /^#([^#]+)$/.exec(u);
    if (!t) return;
    const o = document.getElementById(t[1]);
    o && (l.value = u, o.scrollIntoView(), d || m(), R());
  }
  function C(u = true) {
    var d;
    const t = [], o = V((d = e.offsetTarget) !== null && d !== void 0 ? d : document);
    r.forEach((s) => {
      const i = /#([^#]+)$/.exec(s);
      if (!i) return;
      const $ = document.getElementById(i[1]);
      if ($ && o) {
        const { top: P, height: _ } = me($, o);
        t.push({ top: P, height: _, href: s });
      }
    }), t.sort((s, i) => s.top > i.top ? 1 : (s.top === i.top && s.height < i.height, -1));
    const g = l.value, { bound: T, ignoreGap: E } = e, B = t.reduce((s, i) => i.top + i.height < 0 ? E ? i : s : i.top <= T ? s === null ? i : i.top === s.top ? i.href === g ? i : s : i.top > s.top ? i : s : s, null);
    u || m(), B ? l.value = B.href : l.value = null;
  }
  return ne(H, { activeHref: l, mergedClsPrefix: D(e, "mergedClsPrefix"), updateBarPosition: w, setActiveHref: k, collectedLinkHrefs: r, titleEls: n }), q(() => {
    document.addEventListener("scroll", R, true), k(window.location.hash), C(false);
  }), ee(() => {
    k(window.location.hash), C(false);
  }), K(() => {
    document.removeEventListener("scroll", R, true);
  }), G(l, (u) => {
    if (u === null) {
      const { value: d } = a;
      d && !f.value && (d.style.maxWidth = "0");
    }
  }), { selfRef: v, barRef: c, slotRef: a, setActiveHref: k, activeHref: l, isBlockType: f, mergedShowRail: h };
}, render() {
  var e;
  const { mergedClsPrefix: r, mergedShowRail: n, isBlockType: l, $slots: a } = this, c = x("div", { class: [`${r}-anchor`, l && `${r}-anchor--block`, n && `${r}-anchor--show-rail`], ref: "selfRef" }, n && this.showBackground ? x("div", { ref: "slotRef", class: `${r}-anchor-link-background` }) : null, n ? x("div", { class: `${r}-anchor-rail` }, x("div", { ref: "barRef", class: [`${r}-anchor-rail__bar`, this.activeHref !== null && `${r}-anchor-rail__bar--active`] })) : null, (e = a.default) === null || e === void 0 ? void 0 : e.call(a));
  return this.internalScrollable ? x(Z, null, { default: () => c }) : c;
} }), xe = p("anchor", `
 position: relative;
`, [L("block", `
 padding-left: var(--n-rail-width);
 `, [p("anchor-link", [A("+, >", [p("anchor-link", `
 margin-top: .5em;
 `)])]), p("anchor-link-background", `
 max-width: 0;
 border-top-right-radius: 10.5px;
 border-bottom-right-radius: 10.5px;
 `), L("show-rail", [A(">", [p("anchor-link", "padding-left: 0;")])])]), S("block", [p("anchor-link", `
 margin-bottom: 4px;
 padding: 2px 8px;
 transition: background-color .3s var(--n-bezier);
 background-color: transparent;
 border-radius: var(--n-link-border-radius);
 `, [S("active", `
 background-color: var(--n-link-color);
 `)])]), p("anchor-link-background", `
 position: absolute;
 left: calc(var(--n-rail-width) / 2);
 width: 100%;
 background-color: var(--n-link-color);
 transition:
 top .15s var(--n-bezier),
 max-width .15s var(--n-bezier),
 background-color .3s var(--n-bezier);
 `), p("anchor-rail", `
 position: absolute;
 left: 0;
 top: 0;
 bottom: 0;
 width: var(--n-rail-width);
 border-radius: calc(var(--n-rail-width) / 2);
 overflow: hidden;
 transition: background-color .3s var(--n-bezier);
 background-color: var(--n-rail-color);
 `, [j("bar", `
 position: absolute;
 left: 0;
 width: var(--n-rail-width);
 height: 21px;
 background-color: #0000;
 transition: 
 top .15s var(--n-bezier),
 background-color .3s var(--n-bezier);
 `, [S("active", { backgroundColor: "var(--n-rail-color-active)" })])]), p("anchor-link", `
 padding: var(--n-link-padding);
 position: relative;
 line-height: 1.5;
 font-size: var(--n-link-font-size);
 min-height: 1.5em;
 display: flex;
 flex-direction: column;
 `, [S("active", [A(">", [j("title", `
 color: var(--n-link-text-color-active);
 `)])]), j("title", `
 outline: none;
 max-width: 100%;
 text-decoration: none;
 white-space: nowrap;
 text-overflow: ellipsis;
 overflow: hidden;
 cursor: pointer;
 display: inline-block;
 padding-right: 16px;
 transition: color .3s var(--n-bezier);
 color: var(--n-link-text-color);
 `, [A("&:hover, &:focus", `
 color: var(--n-link-text-color-hover);
 `), A("&:active", `
 color: var(--n-link-text-color-pressed);
 `)])])]), ke = Object.assign(Object.assign(Object.assign(Object.assign({}, W.props), { affix: Boolean }), N), z), we = O({ name: "Anchor", props: ke, setup(e, { slots: r }) {
  const { mergedClsPrefixRef: n, inlineThemeDisabled: l } = F(e), a = W("Anchor", "-anchor", xe, ce, e, n), c = b(null), v = y(() => {
    const { self: { railColor: h, linkColor: m, railColorActive: w, linkTextColor: R, linkTextColorHover: k, linkTextColorPressed: C, linkTextColorActive: u, linkFontSize: d, railWidth: t, linkPadding: o, borderRadius: g }, common: { cubicBezierEaseInOut: T } } = a.value;
    return { "--n-link-border-radius": g, "--n-link-color": m, "--n-link-font-size": d, "--n-link-text-color": R, "--n-link-text-color-hover": k, "--n-link-text-color-active": u, "--n-link-text-color-pressed": C, "--n-link-padding": o, "--n-bezier": T, "--n-rail-color": h, "--n-rail-color-active": w, "--n-rail-width": t };
  }), f = l ? te("anchor", void 0, v, e) : void 0;
  return { scrollTo(h) {
    var m;
    (m = c.value) === null || m === void 0 || m.setActiveHref(h);
  }, renderAnchor: () => (f == null ? void 0 : f.onRender(), x(pe, Object.assign({ ref: c, style: l ? void 0 : v.value, class: f == null ? void 0 : f.themeClass.value }, M(e, be), { mergedClsPrefix: n.value }), r)) };
}, render() {
  return this.affix ? x(he, Object.assign({}, M(this, ve)), { default: this.renderAnchor }) : this.renderAnchor();
} });
export {
  Be as N,
  we as a
};
