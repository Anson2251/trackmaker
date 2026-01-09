import { E as e, M as t, S as n, at as r, ct as i, f as a, g as o, lt as s, ot as c, p as l, ut as u, v as d } from "./Card-DQ5bMbwc.js";
import { K as f, Y as p, g as m, tt as h, u as g } from "./light-BrQV3A_S.js";
import { At as _, Dt as v, Jt as y, Lt as b, St as x, Tt as S, Zt as C, gt as w, mt as T, ot as E, vt as D } from "./index-zntWl1j2.js";
import { n as O, r as k, t as A } from "./attribute-BP4wg2CU.js";
import { t as j } from "./light-v92wIMrn.js";
function M(e2) {
  return typeof e2 == `string` ? document.querySelector(e2) : typeof e2 == `function` ? e2() : e2;
}
var N = c(`affix`, [s(`affixed`, { position: `fixed` }, [s(`absolute-positioned`, { position: `absolute` })])]);
function P(e2) {
  return e2 instanceof HTMLElement ? e2.scrollTop : window.scrollY;
}
function F(e2) {
  return e2 instanceof HTMLElement ? e2.getBoundingClientRect() : { top: 0, bottom: window.innerHeight };
}
const I = { listenTo: [String, Object, Function], top: Number, bottom: Number, triggerTop: Number, triggerBottom: Number, position: { type: String, default: `fixed` }, offsetTop: { type: Number, validator: () => true, default: void 0 }, offsetBottom: { type: Number, validator: () => true, default: void 0 }, target: { type: Function, validator: () => true, default: void 0 } }, L = e(I);
var R = T({ name: `Affix`, props: I, setup(e2) {
  let { mergedClsPrefixRef: t2 } = d(e2);
  l(`-affix`, N, t2);
  let n2 = null, r2 = y(false), i2 = y(false), a2 = y(null), o2 = y(null), s2 = E(() => i2.value || r2.value), c2 = E(() => e2.triggerTop ?? e2.offsetTop ?? e2.top), u2 = E(() => e2.top ?? e2.triggerTop ?? e2.offsetTop), f2 = E(() => e2.bottom ?? e2.triggerBottom ?? e2.offsetBottom), p2 = E(() => e2.triggerBottom ?? e2.offsetBottom ?? e2.bottom), m2 = y(null), g2 = () => {
    let { target: t3, listenTo: r3 } = e2;
    n2 = t3 ? t3() : r3 ? M(r3) : document, n2 && (n2.addEventListener(`scroll`, _2), _2());
  };
  function _2() {
    h(b2);
  }
  function b2() {
    let { value: e3 } = m2;
    if (!n2 || !e3) return;
    let t3 = P(n2);
    if (s2.value) {
      o2.value !== null && t3 < o2.value && (r2.value = false, o2.value = null), a2.value !== null && t3 > a2.value && (i2.value = false, a2.value = null);
      return;
    }
    let l2 = F(n2), u3 = e3.getBoundingClientRect(), d2 = u3.top - l2.top, f3 = l2.bottom - u3.bottom, h2 = c2.value, g3 = p2.value;
    h2 !== void 0 && d2 <= h2 ? (r2.value = true, o2.value = t3 - (h2 - d2)) : (r2.value = false, o2.value = null), g3 !== void 0 && f3 <= g3 ? (i2.value = true, a2.value = t3 + g3 - f3) : (i2.value = false, a2.value = null);
  }
  return v(() => {
    g2();
  }), S(() => {
    n2 && n2.removeEventListener(`scroll`, _2);
  }), { selfRef: m2, affixed: s2, mergedClsPrefix: t2, mergedstyle: E(() => {
    let e3 = {};
    return r2.value && c2.value !== void 0 && u2.value !== void 0 && (e3.top = `${u2.value}px`), i2.value && p2.value !== void 0 && f2.value !== void 0 && (e3.bottom = `${f2.value}px`), e3;
  }) };
}, render() {
  let { mergedClsPrefix: e2 } = this;
  return w(`div`, { ref: `selfRef`, class: [`${e2}-affix`, { [`${e2}-affix--affixed`]: this.affixed, [`${e2}-affix--absolute-positioned`]: this.position === `absolute` }], style: this.mergedstyle }, this.$slots);
} });
const z = t(`n-anchor`);
var B = T({ name: `AnchorLink`, props: { title: String, href: String }, slots: Object, setup(e2, { slots: t2 }) {
  let r2 = y(null), i2 = D(z), a2 = C(e2, `href`), o2 = p(() => a2.value && a2.value === i2.activeHref.value);
  O(z, `collectedLinkHrefs`, a2), k(z, `titleEls`, () => r2.value), b(o2, (e3) => {
    e3 && r2.value && i2.updateBarPosition(r2.value);
  });
  function s2() {
    e2.href !== void 0 && i2.setActiveHref(e2.href);
  }
  return () => {
    var _a;
    let { value: a3 } = i2.mergedClsPrefix;
    return w(`div`, { class: [`${a3}-anchor-link`, o2.value && `${a3}-anchor-link--active`] }, w(`a`, { ref: r2, class: [`${a3}-anchor-link__title`], href: e2.href, title: A(e2.title), onClick: s2 }, { default: () => n(t2.title, () => [e2.title]) }), (_a = t2.default) == null ? void 0 : _a.call(t2));
  };
} });
function V(e2, t2) {
  let { top: n2, height: r2 } = e2.getBoundingClientRect();
  return { top: n2 - (t2 instanceof HTMLElement ? t2.getBoundingClientRect().top : 0), height: r2 };
}
const H = { type: { type: String, default: `rail` }, showRail: { type: Boolean, default: true }, showBackground: { type: Boolean, default: true }, bound: { type: Number, default: 12 }, internalScrollable: Boolean, ignoreGap: Boolean, offsetTarget: [String, Object, Function] }, U = e(H);
var W = T({ name: `BaseAnchor`, props: Object.assign(Object.assign({}, H), { mergedClsPrefix: { type: String, required: true } }), setup(e2) {
  let t2 = [], n2 = [], r2 = y(null), i2 = y(null), a2 = y(null), o2 = y(null), s2 = false, c2 = E(() => e2.type === `block`), l2 = E(() => !c2.value && e2.showRail);
  function u2() {
    let { value: e3 } = a2, { value: t3 } = i2;
    e3 && (e3.style.transition = `none`), t3 && (t3.style.transition = `none`), n2 && n2.forEach((e4) => {
      e4.style.transition = `none`;
    }), x(() => {
      let { value: e4 } = a2, { value: t4 } = i2;
      e4 && (e4.offsetWidth, e4.style.transition = ``), t4 && (t4.offsetWidth, t4.style.transition = ``), n2 && n2.forEach((e5) => {
        e5.offsetWidth, e5.style.transition = ``;
      });
    });
  }
  function d2(e3, t3 = true) {
    let { value: n3 } = a2, { value: r3 } = i2, { value: s3 } = o2;
    if (!s3 || !n3) return;
    t3 || (n3.style.transition = `none`, r3 && (r3.style.transition = `none`));
    let { offsetHeight: c3, offsetWidth: l3 } = e3, { top: u3, left: d3 } = e3.getBoundingClientRect(), { top: f2, left: p3 } = s3.getBoundingClientRect(), m3 = u3 - f2, h3 = d3 - p3;
    n3.style.top = `${m3}px`, n3.style.height = `${c3}px`, r3 && (r3.style.top = `${m3}px`, r3.style.height = `${c3}px`, r3.style.maxWidth = `${l3 + h3}px`), n3.offsetHeight, r3 && r3.offsetHeight, t3 || (n3.style.transition = ``, r3 && (r3.style.transition = ``));
  }
  let p2, m2 = false, h2 = false, g2 = () => {
    if (h2) m2 = true;
    else {
      if (s2) return;
      T2(true), h2 = true, clearTimeout(p2), p2 = setTimeout(() => {
        h2 = false, m2 && (m2 = false, g2());
      }, 128);
    }
  };
  function w2(e3, t3 = true) {
    let n3 = /^#([^#]+)$/.exec(e3);
    if (!n3) return;
    let i3 = document.getElementById(n3[1]);
    i3 && (s2 = true, r2.value = e3, i3.scrollIntoView(), t3 || u2(), m2 = false, setTimeout(() => {
      s2 = false;
    }, 0));
  }
  function T2(n3 = true) {
    let i3 = [], a3 = M(e2.offsetTarget ?? document);
    t2.forEach((e3) => {
      let t3 = /#([^#]+)$/.exec(e3);
      if (!t3) return;
      let n4 = document.getElementById(t3[1]);
      if (n4 && a3) {
        let { top: t4, height: r3 } = V(n4, a3);
        i3.push({ top: t4, height: r3, href: e3 });
      }
    }), i3.sort((e3, t3) => e3.top > t3.top ? 1 : (e3.top === t3.top && (e3.height, t3.height), -1));
    let o3 = r2.value, { bound: s3, ignoreGap: c3 } = e2, l3 = i3.reduce((e3, t3) => t3.top + t3.height < 0 ? c3 ? t3 : e3 : t3.top <= s3 ? e3 === null ? t3 : t3.top === e3.top ? t3.href === o3 ? t3 : e3 : t3.top > e3.top ? t3 : e3 : e3, null);
    n3 || u2(), l3 ? r2.value = l3.href : r2.value = null;
  }
  return _(z, { activeHref: r2, mergedClsPrefix: C(e2, `mergedClsPrefix`), updateBarPosition: d2, setActiveHref: w2, collectedLinkHrefs: t2, titleEls: n2 }), v(() => {
    document.addEventListener(`scroll`, g2, true), w2(window.location.hash), T2(false);
  }), f(() => {
    w2(window.location.hash), T2(false);
  }), S(() => {
    clearTimeout(p2), document.removeEventListener(`scroll`, g2, true);
  }), b(r2, (e3) => {
    if (e3 === null) {
      let { value: e4 } = i2;
      e4 && !c2.value && (e4.style.maxWidth = `0`);
    }
  }), { selfRef: o2, barRef: a2, slotRef: i2, setActiveHref: w2, activeHref: r2, isBlockType: c2, mergedShowRail: l2 };
}, render() {
  var _a;
  let { mergedClsPrefix: e2, mergedShowRail: t2, isBlockType: n2, $slots: r2 } = this, i2 = w(`div`, { class: [`${e2}-anchor`, n2 && `${e2}-anchor--block`, t2 && `${e2}-anchor--show-rail`], ref: `selfRef` }, t2 && this.showBackground ? w(`div`, { ref: `slotRef`, class: `${e2}-anchor-link-background` }) : null, t2 ? w(`div`, { class: `${e2}-anchor-rail` }, w(`div`, { ref: `barRef`, class: [`${e2}-anchor-rail__bar`, this.activeHref !== null && `${e2}-anchor-rail__bar--active`] })) : null, (_a = r2.default) == null ? void 0 : _a.call(r2));
  return this.internalScrollable ? w(g, null, { default: () => i2 }) : i2;
} }), G = c(`anchor`, `
 position: relative;
`, [u(`block`, `
 padding-left: var(--n-rail-width);
 `, [c(`anchor-link`, [r(`+, >`, [c(`anchor-link`, `
 margin-top: .5em;
 `)])]), c(`anchor-link-background`, `
 max-width: 0;
 border-top-right-radius: 10.5px;
 border-bottom-right-radius: 10.5px;
 `), u(`show-rail`, [r(`>`, [c(`anchor-link`, `padding-left: 0;`)])])]), s(`block`, [c(`anchor-link`, `
 margin-bottom: 4px;
 padding: 2px 8px;
 transition: background-color .3s var(--n-bezier);
 background-color: transparent;
 border-radius: var(--n-link-border-radius);
 `, [s(`active`, `
 background-color: var(--n-link-color);
 `)])]), c(`anchor-link-background`, `
 position: absolute;
 left: calc(var(--n-rail-width) / 2);
 width: 100%;
 background-color: var(--n-link-color);
 transition:
 top .15s var(--n-bezier),
 max-width .15s var(--n-bezier),
 background-color .3s var(--n-bezier);
 `), c(`anchor-rail`, `
 position: absolute;
 left: 0;
 top: 0;
 bottom: 0;
 width: var(--n-rail-width);
 border-radius: calc(var(--n-rail-width) / 2);
 overflow: hidden;
 transition: background-color .3s var(--n-bezier);
 background-color: var(--n-rail-color);
 `, [i(`bar`, `
 position: absolute;
 left: 0;
 width: var(--n-rail-width);
 height: 21px;
 background-color: #0000;
 transition: 
 top .15s var(--n-bezier),
 background-color .3s var(--n-bezier);
 `, [s(`active`, { backgroundColor: `var(--n-rail-color-active)` })])]), c(`anchor-link`, `
 padding: var(--n-link-padding);
 position: relative;
 line-height: 1.5;
 font-size: var(--n-link-font-size);
 min-height: 1.5em;
 display: flex;
 flex-direction: column;
 `, [s(`active`, [r(`>`, [i(`title`, `
 color: var(--n-link-text-color-active);
 `)])]), i(`title`, `
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
 `, [r(`&:hover, &:focus`, `
 color: var(--n-link-text-color-hover);
 `), r(`&:active`, `
 color: var(--n-link-text-color-pressed);
 `)])])]), K = T({ name: `Anchor`, props: Object.assign(Object.assign(Object.assign(Object.assign({}, a.props), { affix: Boolean }), I), H), setup(e2, { slots: t2 }) {
  let { mergedClsPrefixRef: n2, inlineThemeDisabled: r2 } = d(e2), i2 = a(`Anchor`, `-anchor`, G, j, e2, n2), s2 = y(null), c2 = E(() => {
    let { self: { railColor: e3, linkColor: t3, railColorActive: n3, linkTextColor: r3, linkTextColorHover: a2, linkTextColorPressed: o2, linkTextColorActive: s3, linkFontSize: c3, railWidth: l3, linkPadding: u2, borderRadius: d2 }, common: { cubicBezierEaseInOut: f2 } } = i2.value;
    return { "--n-link-border-radius": d2, "--n-link-color": t3, "--n-link-font-size": c3, "--n-link-text-color": r3, "--n-link-text-color-hover": a2, "--n-link-text-color-active": s3, "--n-link-text-color-pressed": o2, "--n-link-padding": u2, "--n-bezier": f2, "--n-rail-color": e3, "--n-rail-color-active": n3, "--n-rail-width": l3 };
  }), l2 = r2 ? o(`anchor`, void 0, c2, e2) : void 0;
  return { scrollTo(e3) {
    var t3;
    (t3 = s2.value) == null || t3.setActiveHref(e3);
  }, renderAnchor: () => (l2 == null ? void 0 : l2.onRender(), w(W, Object.assign({ ref: s2, style: r2 ? void 0 : c2.value, class: l2 == null ? void 0 : l2.themeClass.value }, m(e2, U), { mergedClsPrefix: n2.value }), t2)) };
}, render() {
  return this.affix ? w(R, Object.assign({}, m(this, L)), { default: this.renderAnchor }) : this.renderAnchor();
} });
export {
  B as n,
  K as t
};
