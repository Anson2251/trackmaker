import { b as e, dt as t, f as n, ht as r, mt as i, p as a } from "./Card-nhqq8IKa.js";
import { t as o } from "./Tooltip-DGge0ha1.js";
import { Et as s, It as c, an as l, gt as u, jt as d, wt as f } from "./index-DTVnoW_1.js";
import { t as p } from "./light-CRdznqhu.js";
var m = t(`ellipsis`, { overflow: `hidden` }, [r(`line-clamp`, `
 white-space: nowrap;
 display: inline-block;
 vertical-align: bottom;
 max-width: 100%;
 `), i(`line-clamp`, `
 display: -webkit-inline-box;
 -webkit-box-orient: vertical;
 `), i(`cursor-pointer`, `
 cursor: pointer;
 `)]);
function h(e2) {
  return `${e2}-ellipsis--line-clamp`;
}
function g(e2, t2) {
  return `${e2}-ellipsis--cursor-${t2}`;
}
const _ = Object.assign(Object.assign({}, n.props), { expandTrigger: String, lineClamp: [Number, String], tooltip: { type: [Boolean, Object], default: true } });
var v = f({ name: `Ellipsis`, inheritAttrs: false, props: _, slots: Object, setup(t2, { slots: r2, attrs: i2 }) {
  let a2 = e(), o2 = n(`Ellipsis`, `-ellipsis`, m, p, t2, a2), f2 = l(null), _2 = l(null), v2 = l(null), y2 = l(false), b = u(() => {
    let { lineClamp: e2 } = t2, { value: n2 } = y2;
    return e2 === void 0 ? { textOverflow: n2 ? `` : `ellipsis`, "-webkit-line-clamp": `` } : { textOverflow: ``, "-webkit-line-clamp": n2 ? `` : e2 };
  });
  function x() {
    let e2 = false, { value: n2 } = y2;
    if (n2) return true;
    let { value: r3 } = f2;
    if (r3) {
      let { lineClamp: n3 } = t2;
      if (w(r3), n3 !== void 0) e2 = r3.scrollHeight <= r3.offsetHeight;
      else {
        let { value: t3 } = _2;
        t3 && (e2 = t3.getBoundingClientRect().width <= r3.getBoundingClientRect().width);
      }
      T(r3, e2);
    }
    return e2;
  }
  let S = u(() => t2.expandTrigger === `click` ? () => {
    var e2;
    let { value: t3 } = y2;
    t3 && ((e2 = v2.value) == null || e2.setShow(false)), y2.value = !t3;
  } : void 0);
  c(() => {
    var e2;
    t2.tooltip && ((e2 = v2.value) == null || e2.setShow(false));
  });
  let C = () => s(`span`, Object.assign({}, d(i2, { class: [`${a2.value}-ellipsis`, t2.lineClamp === void 0 ? void 0 : h(a2.value), t2.expandTrigger === `click` ? g(a2.value, `pointer`) : void 0], style: b.value }), { ref: `triggerRef`, onClick: S.value, onMouseenter: t2.expandTrigger === `click` ? x : void 0 }), t2.lineClamp ? r2 : s(`span`, { ref: `triggerInnerRef` }, r2));
  function w(e2) {
    if (!e2) return;
    let n2 = b.value, r3 = h(a2.value);
    for (let i3 in t2.lineClamp === void 0 ? E(e2, r3, `remove`) : E(e2, r3, `add`), n2) e2.style[i3] !== n2[i3] && (e2.style[i3] = n2[i3]);
  }
  function T(e2, n2) {
    let r3 = g(a2.value, `pointer`);
    t2.expandTrigger === `click` && !n2 ? E(e2, r3, `add`) : E(e2, r3, `remove`);
  }
  function E(e2, t3, n2) {
    n2 === `add` ? e2.classList.contains(t3) || e2.classList.add(t3) : e2.classList.contains(t3) && e2.classList.remove(t3);
  }
  return { mergedTheme: o2, triggerRef: f2, triggerInnerRef: _2, tooltipRef: v2, handleClick: S, renderTrigger: C, getTooltipDisabled: x };
}, render() {
  let { tooltip: e2, renderTrigger: t2, $slots: n2 } = this;
  if (e2) {
    let { mergedTheme: r2 } = this;
    return s(o, Object.assign({ ref: `tooltipRef`, placement: `top` }, e2, { getDisabled: this.getTooltipDisabled, theme: r2.peers.Tooltip, themeOverrides: r2.peerOverrides.Tooltip }), { trigger: t2, default: n2.tooltip ?? n2.default });
  } else return t2();
} });
const y = f({ name: `PerformantEllipsis`, props: _, inheritAttrs: false, setup(t2, { attrs: n2, slots: r2 }) {
  let i2 = l(false), o2 = e();
  return a(`-ellipsis`, m, o2), { mouseEntered: i2, renderTrigger: () => {
    let { lineClamp: e2 } = t2, a2 = o2.value;
    return s(`span`, Object.assign({}, d(n2, { class: [`${a2}-ellipsis`, e2 === void 0 ? void 0 : h(a2), t2.expandTrigger === `click` ? g(a2, `pointer`) : void 0], style: e2 === void 0 ? { textOverflow: `ellipsis` } : { "-webkit-line-clamp": e2 } }), { onMouseenter: () => {
      i2.value = true;
    } }), e2 ? r2 : s(`span`, null, r2));
  } };
}, render() {
  return this.mouseEntered ? s(v, d({}, this.$attrs, this.$props), this.$slots) : this.renderTrigger();
} });
export {
  v as n,
  y as t
};
