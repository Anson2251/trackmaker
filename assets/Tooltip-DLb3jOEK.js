import { A as n, f as l, Y as c, a0 as m, a as d, H as h, u as v, q as a, ab as g } from "./light-Cs_wBr-w.js";
import { d as u, h as b, b as f, j as x } from "./index-C78IAAjf.js";
const C = { linkFontSize: "13px", linkPadding: "0 0 0 16px", railWidth: "4px" };
function O(e) {
  const { borderRadius: s, railColor: r, primaryColor: o, primaryColorHover: i, primaryColorPressed: t, textColor2: p } = e;
  return Object.assign(Object.assign({}, C), { borderRadius: s, railColor: r, railColorActive: o, linkColor: l(o, { alpha: 0.15 }), linkTextColor: p, linkTextColorHover: i, linkTextColorPressed: t, linkTextColorActive: o });
}
const S = { name: "Anchor", common: n, self: O }, T = { padding: "8px 14px" };
function j(e) {
  const { borderRadius: s, boxShadow2: r, baseColor: o } = e;
  return Object.assign(Object.assign({}, T), { borderRadius: s, boxShadow: r, color: d(o, "rgba(0, 0, 0, .85)"), textColor: o });
}
const P = c({ name: "Tooltip", common: n, peers: { Popover: m }, self: j }), k = Object.assign(Object.assign({}, g), a.props), w = u({ name: "Tooltip", props: k, slots: Object, __popover__: true, setup(e) {
  const { mergedClsPrefixRef: s } = v(e), r = a("Tooltip", "-tooltip", void 0, P, e, s), o = f(null);
  return Object.assign(Object.assign({}, { syncPosition() {
    o.value.syncPosition();
  }, setShow(t) {
    o.value.setShow(t);
  } }), { popoverRef: o, mergedTheme: r, popoverThemeOverrides: x(() => r.value.self) });
}, render() {
  const { mergedTheme: e, internalExtraClass: s } = this;
  return b(h, Object.assign(Object.assign({}, this.$props), { theme: e.peers.Popover, themeOverrides: e.peerOverrides.Popover, builtinThemeOverrides: this.popoverThemeOverrides, internalExtraClass: s.concat("tooltip"), ref: "popoverRef" }), this.$slots);
} });
export {
  w as N,
  S as a,
  T as c,
  O as s,
  P as t
};
