import { $ as e, dt as t, et as n, f as r, h as i, v as a } from "./Card-wTK5VWgg.js";
import { I as o, x as s } from "./light-DcazuQOY.js";
import { _t as c, ht as l, st as u, tt as d } from "./index-C4uc8sCV.js";
import { a as f } from "./ListItem-CojxfxaX.js";
import { t as p } from "./light-BJk0FjVD.js";
var m;
function h() {
  if (!o) return true;
  if (m === void 0) {
    let e2 = document.createElement(`div`);
    e2.style.display = `flex`, e2.style.flexDirection = `column`, e2.style.rowGap = `1px`, e2.appendChild(document.createElement(`div`)), e2.appendChild(document.createElement(`div`)), document.body.appendChild(e2);
    let t2 = e2.scrollHeight === 1;
    return document.body.removeChild(e2), m = t2;
  }
  return m;
}
var g = l({ name: `Space`, props: Object.assign(Object.assign({}, r.props), { align: String, justify: { type: String, default: `start` }, inline: Boolean, vertical: Boolean, reverse: Boolean, size: { type: [String, Number, Array], default: `medium` }, wrapItem: { type: Boolean, default: true }, itemClass: String, itemStyle: [String, Object], wrap: { type: Boolean, default: true }, internalUseGap: { type: Boolean, default: void 0 } }), setup(o2) {
  let { mergedClsPrefixRef: s2, mergedRtlRef: c2 } = a(o2), l2 = r(`Space`, `-space`, void 0, p, o2, s2), d2 = i(`Space`, c2, s2);
  return { useGap: h(), rtlEnabled: d2, mergedClsPrefix: s2, margin: u(() => {
    let { size: r2 } = o2;
    if (Array.isArray(r2)) return { horizontal: r2[0], vertical: r2[1] };
    if (typeof r2 == `number`) return { horizontal: r2, vertical: r2 };
    let { self: { [t(`gap`, r2)]: i2 } } = l2.value, { row: a2, col: s3 } = n(i2);
    return { horizontal: e(s3), vertical: e(a2) };
  }) };
}, render() {
  let { vertical: e2, reverse: t2, align: n2, inline: r2, justify: i2, itemClass: a2, itemStyle: o2, margin: l2, wrap: u2, mergedClsPrefix: p2, rtlEnabled: m2, useGap: h2, wrapItem: g2, internalUseGap: _ } = this, v = s(f(this), false);
  if (!v.length) return null;
  let y = `${l2.horizontal}px`, b = `${l2.horizontal / 2}px`, x = `${l2.vertical}px`, S = `${l2.vertical / 2}px`, C = v.length - 1, w = i2.startsWith(`space-`);
  return c(`div`, { role: `none`, class: [`${p2}-space`, m2 && `${p2}-space--rtl`], style: { display: r2 ? `inline-flex` : `flex`, flexDirection: /* @__PURE__ */ (() => e2 && !t2 ? `column` : e2 && t2 ? `column-reverse` : !e2 && t2 ? `row-reverse` : `row`)(), justifyContent: [`start`, `end`].includes(i2) ? `flex-${i2}` : i2, flexWrap: !u2 || e2 ? `nowrap` : `wrap`, marginTop: h2 || e2 ? `` : `-${S}`, marginBottom: h2 || e2 ? `` : `-${S}`, alignItems: n2, gap: h2 ? `${l2.vertical}px ${l2.horizontal}px` : `` } }, !g2 && (h2 || _) ? v : v.map((t3, n3) => t3.type === d ? t3 : c(`div`, { role: `none`, class: a2, style: [o2, { maxWidth: `100%` }, h2 ? `` : e2 ? { marginBottom: n3 === C ? `` : x } : m2 ? { marginLeft: w ? i2 === `space-between` && n3 === C ? `` : b : n3 === C ? `` : y, marginRight: w ? i2 === `space-between` && n3 === 0 ? `` : b : ``, paddingTop: S, paddingBottom: S } : { marginRight: w ? i2 === `space-between` && n3 === C ? `` : b : n3 === C ? `` : y, marginLeft: w ? i2 === `space-between` && n3 === 0 ? `` : b : ``, paddingTop: S, paddingBottom: S }] }, t3)));
} });
export {
  g as t
};
