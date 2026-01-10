import { j as e } from "./Card-DEA6VsPG.js";
import { A as t, k as n } from "./light-Blg-TFP8.js";
import { Dt as r, Jt as i, Mt as a, St as o, gt as s, mt as c } from "./index-XWtbsHgt.js";
var l = `v-hidden`, u = n(`[v-hidden]`, { display: `none!important` }), d = c({ name: `Overflow`, props: { getCounter: Function, getTail: Function, updateCounter: Function, onUpdateCount: Function, onUpdateOverflow: Function }, setup(n2, { slots: a2 }) {
  let o2 = i(null), s2 = i(null);
  function c2(e2) {
    let { value: t2 } = o2, { getCounter: r2, getTail: i2 } = n2, c3;
    if (c3 = r2 === void 0 ? s2.value : r2(), !t2 || !c3) return;
    c3.hasAttribute(l) && c3.removeAttribute(l);
    let { children: u2 } = t2;
    if (e2.showAllItemsBeforeCalculate) for (let e3 of u2) e3.hasAttribute(l) && e3.removeAttribute(l);
    let d3 = t2.offsetWidth, f = [], p = a2.tail ? i2 == null ? void 0 : i2() : null, m = p ? p.offsetWidth : 0, h = false, g = t2.children.length - (a2.tail ? 1 : 0);
    for (let e3 = 0; e3 < g - 1; ++e3) {
      if (e3 < 0) continue;
      let t3 = u2[e3];
      if (h) {
        t3.hasAttribute(l) || t3.setAttribute(l, ``);
        continue;
      } else t3.hasAttribute(l) && t3.removeAttribute(l);
      let r3 = t3.offsetWidth;
      if (m += r3, f[e3] = r3, m > d3) {
        let { updateCounter: t4 } = n2;
        for (let r4 = e3; r4 >= 0; --r4) {
          let i3 = g - 1 - r4;
          t4 === void 0 ? c3.textContent = `${i3}` : t4(i3);
          let a3 = c3.offsetWidth;
          if (m -= f[r4], m + a3 <= d3 || r4 === 0) {
            h = true, e3 = r4 - 1, p && (e3 === -1 ? (p.style.maxWidth = `${d3 - a3}px`, p.style.boxSizing = `border-box`) : p.style.maxWidth = ``);
            let { onUpdateCount: t5 } = n2;
            t5 && t5(i3);
            break;
          }
        }
      }
    }
    let { onUpdateOverflow: _ } = n2;
    h ? _ !== void 0 && _(true) : (_ !== void 0 && _(false), c3.setAttribute(l, ``));
  }
  let d2 = e();
  return u.mount({ id: `vueuc/overflow`, head: true, anchorMetaName: t, ssr: d2 }), r(() => c2({ showAllItemsBeforeCalculate: false })), { selfRef: o2, counterRef: s2, sync: c2 };
}, render() {
  let { $slots: e2 } = this;
  return o(() => this.sync({ showAllItemsBeforeCalculate: false })), s(`div`, { class: `v-overflow`, ref: `selfRef` }, [a(e2, `default`), e2.counter ? e2.counter() : s(`span`, { style: { display: `inline-block` }, ref: `counterRef` }), e2.tail ? e2.tail() : null]);
} });
export {
  d as t
};
