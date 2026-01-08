import { P as e, d as t, f as n, o as r, v as i } from "./Card-CcG1RIrm.js";
import { a, c as o, o as s } from "./light-DZfyTys9.js";
import { Jt as c, gt as l, mt as u, ot as d } from "./index-BQuUBdbi.js";
var f = { padding: `8px 14px` };
function p(t2) {
  let { borderRadius: n2, boxShadow2: r2, baseColor: i2 } = t2;
  return Object.assign(Object.assign({}, f), { borderRadius: n2, boxShadow: r2, color: e(i2, `rgba(0, 0, 0, .85)`), textColor: i2 });
}
var m = t({ name: `Tooltip`, common: r, peers: { Popover: o }, self: p }), h = u({ name: `Tooltip`, props: Object.assign(Object.assign({}, s), n.props), slots: Object, __popover__: true, setup(e2) {
  let { mergedClsPrefixRef: t2 } = i(e2), r2 = n(`Tooltip`, `-tooltip`, void 0, m, e2, t2), a2 = c(null);
  return Object.assign(Object.assign({}, { syncPosition() {
    a2.value.syncPosition();
  }, setShow(e3) {
    a2.value.setShow(e3);
  } }), { popoverRef: a2, mergedTheme: r2, popoverThemeOverrides: d(() => r2.value.self) });
}, render() {
  let { mergedTheme: e2, internalExtraClass: t2 } = this;
  return l(a, Object.assign(Object.assign({}, this.$props), { theme: e2.peers.Popover, themeOverrides: e2.peerOverrides.Popover, builtinThemeOverrides: this.popoverThemeOverrides, internalExtraClass: t2.concat(`tooltip`), ref: `popoverRef` }), this.$slots);
} });
export {
  m as n,
  f as r,
  h as t
};
