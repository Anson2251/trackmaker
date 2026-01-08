import { S as e, at as t, c as n, ct as r, dt as i, f as a, g as o, h as s, lt as c, ot as l, s as u, tt as d, u as f, v as p, w as m } from "./Card-CcG1RIrm.js";
import { Jt as h, gt as g, mt as _, ot as v, xt as y } from "./index-BQuUBdbi.js";
import { i as b, n as x, r as S, t as C } from "./Warning-CMYkCL83.js";
import { t as w } from "./light-C-B7VC4j.js";
import { t as T } from "./fade-in-height-expand.cssr-CCRBakur.js";
var E = l(`alert`, `
 line-height: var(--n-line-height);
 border-radius: var(--n-border-radius);
 position: relative;
 transition: background-color .3s var(--n-bezier);
 background-color: var(--n-color);
 text-align: start;
 word-break: break-word;
`, [r(`border`, `
 border-radius: inherit;
 position: absolute;
 left: 0;
 right: 0;
 top: 0;
 bottom: 0;
 transition: border-color .3s var(--n-bezier);
 border: var(--n-border);
 pointer-events: none;
 `), c(`closable`, [l(`alert-body`, [r(`title`, `
 padding-right: 24px;
 `)])]), r(`icon`, { color: `var(--n-icon-color)` }), l(`alert-body`, { padding: `var(--n-padding)` }, [r(`title`, { color: `var(--n-title-text-color)` }), r(`content`, { color: `var(--n-content-text-color)` })]), T({ originalTransition: `transform .3s var(--n-bezier)`, enterToProps: { transform: `scale(1)` }, leaveToProps: { transform: `scale(0.9)` } }), r(`icon`, `
 position: absolute;
 left: 0;
 top: 0;
 align-items: center;
 justify-content: center;
 display: flex;
 width: var(--n-icon-size);
 height: var(--n-icon-size);
 font-size: var(--n-icon-size);
 margin: var(--n-icon-margin);
 `), r(`close`, `
 transition:
 color .3s var(--n-bezier),
 background-color .3s var(--n-bezier);
 position: absolute;
 right: 0;
 top: 0;
 margin: var(--n-close-margin);
 `), c(`show-icon`, [l(`alert-body`, { paddingLeft: `calc(var(--n-icon-margin-left) + var(--n-icon-size) + var(--n-icon-margin-right))` })]), c(`right-adjust`, [l(`alert-body`, { paddingRight: `calc(var(--n-close-size) + var(--n-padding) + 2px)` })]), l(`alert-body`, `
 border-radius: var(--n-border-radius);
 transition: border-color .3s var(--n-bezier);
 `, [r(`title`, `
 transition: color .3s var(--n-bezier);
 font-size: 16px;
 line-height: 19px;
 font-weight: var(--n-title-font-weight);
 `, [t(`& +`, [r(`content`, { marginTop: `9px` })])]), r(`content`, { transition: `color .3s var(--n-bezier)`, fontSize: `var(--n-font-size)` })]), r(`icon`, { transition: `color .3s var(--n-bezier)` })]), D = _({ name: `Alert`, inheritAttrs: false, props: Object.assign(Object.assign({}, a.props), { title: String, showIcon: { type: Boolean, default: true }, type: { type: String, default: `default` }, bordered: { type: Boolean, default: true }, closable: Boolean, onClose: Function, onAfterLeave: Function, onAfterHide: Function }), slots: Object, setup(e2) {
  let { mergedClsPrefixRef: t2, mergedBorderedRef: n2, inlineThemeDisabled: r2, mergedRtlRef: c2 } = p(e2), l2 = a(`Alert`, `-alert`, E, w, e2, t2), u2 = s(`Alert`, c2, t2), f2 = v(() => {
    let { common: { cubicBezierEaseInOut: t3 }, self: n3 } = l2.value, { fontSize: r3, borderRadius: a2, titleFontWeight: o2, lineHeight: s2, iconSize: c3, iconMargin: u3, iconMarginRtl: f3, closeIconSize: p2, closeBorderRadius: m3, closeSize: h2, closeMargin: g3, closeMarginRtl: _3, padding: v2 } = n3, { type: y2 } = e2, { left: b2, right: x2 } = d(u3);
    return { "--n-bezier": t3, "--n-color": n3[i(`color`, y2)], "--n-close-icon-size": p2, "--n-close-border-radius": m3, "--n-close-color-hover": n3[i(`closeColorHover`, y2)], "--n-close-color-pressed": n3[i(`closeColorPressed`, y2)], "--n-close-icon-color": n3[i(`closeIconColor`, y2)], "--n-close-icon-color-hover": n3[i(`closeIconColorHover`, y2)], "--n-close-icon-color-pressed": n3[i(`closeIconColorPressed`, y2)], "--n-icon-color": n3[i(`iconColor`, y2)], "--n-border": n3[i(`border`, y2)], "--n-title-text-color": n3[i(`titleTextColor`, y2)], "--n-content-text-color": n3[i(`contentTextColor`, y2)], "--n-line-height": s2, "--n-border-radius": a2, "--n-font-size": r3, "--n-title-font-weight": o2, "--n-icon-size": c3, "--n-icon-margin": u3, "--n-icon-margin-rtl": f3, "--n-close-size": h2, "--n-close-margin": g3, "--n-close-margin-rtl": _3, "--n-padding": v2, "--n-icon-margin-left": b2, "--n-icon-margin-right": x2 };
  }), m2 = r2 ? o(`alert`, v(() => e2.type[0]), f2, e2) : void 0, g2 = h(true), _2 = () => {
    let { onAfterLeave: t3, onAfterHide: n3 } = e2;
    t3 && t3(), n3 && n3();
  };
  return { rtlEnabled: u2, mergedClsPrefix: t2, mergedBordered: n2, visible: g2, handleCloseClick: () => {
    var _a;
    Promise.resolve((_a = e2.onClose) == null ? void 0 : _a.call(e2)).then((e3) => {
      e3 !== false && (g2.value = false);
    });
  }, handleAfterLeave: () => {
    _2();
  }, mergedTheme: l2, cssVars: r2 ? void 0 : f2, themeClass: m2 == null ? void 0 : m2.themeClass, onRender: m2 == null ? void 0 : m2.onRender };
}, render() {
  var t2;
  return (t2 = this.onRender) == null || t2.call(this), g(u, { onAfterLeave: this.handleAfterLeave }, { default: () => {
    let { mergedClsPrefix: t3, $slots: r2 } = this, i2 = { class: [`${t3}-alert`, this.themeClass, this.closable && `${t3}-alert--closable`, this.showIcon && `${t3}-alert--show-icon`, !this.title && this.closable && `${t3}-alert--right-adjust`, this.rtlEnabled && `${t3}-alert--rtl`], style: this.cssVars, role: `alert` };
    return this.visible ? g(`div`, Object.assign({}, y(this.$attrs, i2)), this.closable && g(n, { clsPrefix: t3, class: `${t3}-alert__close`, onClick: this.handleCloseClick }), this.bordered && g(`div`, { class: `${t3}-alert__border` }), this.showIcon && g(`div`, { class: `${t3}-alert__icon`, "aria-hidden": `true` }, e(r2.icon, () => [g(f, { clsPrefix: t3 }, { default: () => {
      switch (this.type) {
        case `success`:
          return g(x, null);
        case `info`:
          return g(S, null);
        case `warning`:
          return g(C, null);
        case `error`:
          return g(b, null);
        default:
          return null;
      }
    } })])), g(`div`, { class: [`${t3}-alert-body`, this.mergedBordered && `${t3}-alert-body--bordered`] }, m(r2.header, (e2) => {
      let n2 = e2 || this.title;
      return n2 ? g(`div`, { class: `${t3}-alert-body__title` }, n2) : null;
    }), r2.default && g(`div`, { class: `${t3}-alert-body__content` }, r2))) : null;
  } });
} });
export {
  D as t
};
