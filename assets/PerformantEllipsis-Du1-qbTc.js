import { f as e, lt as t, ot as n, p as r, ut as i, y as a } from "./Card-wTK5VWgg.js";
import { r as o } from "./light-DcazuQOY.js";
import { Dt as s, St as c, Xt as l, _t as u, ht as d, st as f } from "./index-C4uc8sCV.js";
import { t as p } from "./light-B0RSJa3-.js";
var m = n(`ellipsis`, { overflow: `hidden` }, [i(`line-clamp`, `
 white-space: nowrap;
 display: inline-block;
 vertical-align: bottom;
 max-width: 100%;
 `), t(`line-clamp`, `
 display: -webkit-inline-box;
 -webkit-box-orient: vertical;
 `), t(`cursor-pointer`, `
 cursor: pointer;
 `)]);
function h(e2) {
  return `${e2}-ellipsis--line-clamp`;
}
function g(e2, t2) {
  return `${e2}-ellipsis--cursor-${t2}`;
}
const _ = Object.assign(Object.assign({}, e.props), { expandTrigger: String, lineClamp: [Number, String], tooltip: { type: [Boolean, Object], default: true } });
var v = d({ name: `Ellipsis`, inheritAttrs: false, props: _, slots: Object, setup(t2, { slots: n2, attrs: r2 }) {
  let i2 = a(), o2 = e(`Ellipsis`, `-ellipsis`, m, p, t2, i2), d2 = l(null), _2 = l(null), v2 = l(null), y2 = l(false), b = f(() => {
    let { lineClamp: e2 } = t2, { value: n3 } = y2;
    return e2 === void 0 ? { textOverflow: n3 ? `` : `ellipsis`, "-webkit-line-clamp": `` } : { textOverflow: ``, "-webkit-line-clamp": n3 ? `` : e2 };
  });
  function x() {
    let e2 = false, { value: n3 } = y2;
    if (n3) return true;
    let { value: r3 } = d2;
    if (r3) {
      let { lineClamp: n4 } = t2;
      if (w(r3), n4 !== void 0) e2 = r3.scrollHeight <= r3.offsetHeight;
      else {
        let { value: t3 } = _2;
        t3 && (e2 = t3.getBoundingClientRect().width <= r3.getBoundingClientRect().width);
      }
      T(r3, e2);
    }
    return e2;
  }
  let S = f(() => t2.expandTrigger === `click` ? () => {
    var e2;
    let { value: t3 } = y2;
    t3 && ((e2 = v2.value) == null || e2.setShow(false)), y2.value = !t3;
  } : void 0);
  s(() => {
    var e2;
    t2.tooltip && ((e2 = v2.value) == null || e2.setShow(false));
  });
  let C = () => u(`span`, Object.assign({}, c(r2, { class: [`${i2.value}-ellipsis`, t2.lineClamp === void 0 ? void 0 : h(i2.value), t2.expandTrigger === `click` ? g(i2.value, `pointer`) : void 0], style: b.value }), { ref: `triggerRef`, onClick: S.value, onMouseenter: t2.expandTrigger === `click` ? x : void 0 }), t2.lineClamp ? n2 : u(`span`, { ref: `triggerInnerRef` }, n2));
  function w(e2) {
    if (!e2) return;
    let n3 = b.value, r3 = h(i2.value);
    for (let i3 in t2.lineClamp === void 0 ? E(e2, r3, `remove`) : E(e2, r3, `add`), n3) e2.style[i3] !== n3[i3] && (e2.style[i3] = n3[i3]);
  }
  function T(e2, n3) {
    let r3 = g(i2.value, `pointer`);
    t2.expandTrigger === `click` && !n3 ? E(e2, r3, `add`) : E(e2, r3, `remove`);
  }
  function E(e2, t3, n3) {
    n3 === `add` ? e2.classList.contains(t3) || e2.classList.add(t3) : e2.classList.contains(t3) && e2.classList.remove(t3);
  }
  return { mergedTheme: o2, triggerRef: d2, triggerInnerRef: _2, tooltipRef: v2, handleClick: S, renderTrigger: C, getTooltipDisabled: x };
}, render() {
  let { tooltip: e2, renderTrigger: t2, $slots: n2 } = this;
  if (e2) {
    let { mergedTheme: r2 } = this;
    return u(o, Object.assign({ ref: `tooltipRef`, placement: `top` }, e2, { getDisabled: this.getTooltipDisabled, theme: r2.peers.Tooltip, themeOverrides: r2.peerOverrides.Tooltip }), { trigger: t2, default: n2.tooltip ?? n2.default });
  } else return t2();
} });
const y = d({ name: `PerformantEllipsis`, props: _, inheritAttrs: false, setup(e2, { attrs: t2, slots: n2 }) {
  let i2 = l(false), o2 = a();
  return r(`-ellipsis`, m, o2), { mouseEntered: i2, renderTrigger: () => {
    let { lineClamp: r2 } = e2, a2 = o2.value;
    return u(`span`, Object.assign({}, c(t2, { class: [`${a2}-ellipsis`, r2 === void 0 ? void 0 : h(a2), e2.expandTrigger === `click` ? g(a2, `pointer`) : void 0], style: r2 === void 0 ? { textOverflow: `ellipsis` } : { "-webkit-line-clamp": r2 } }), { onMouseenter: () => {
      i2.value = true;
    } }), r2 ? n2 : u(`span`, null, n2));
  } };
}, render() {
  return this.mouseEntered ? u(v, c({}, this.$attrs, this.$props), this.$slots) : this.renderTrigger();
} });
export {
  y as t
};
