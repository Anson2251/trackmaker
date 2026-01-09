import { S as e, at as t, ct as n, l as r, ot as i, p as a, u as o } from "./Card-Dr9B_uZL.js";
import { Zt as s, gt as c, mt as l } from "./index-O8NpUPpF.js";
import { C as u, S as d, w as f } from "./storage-DubEvtUa.js";
var p = l({ name: `ChevronDown`, render() {
  return c(`svg`, { viewBox: `0 0 16 16`, fill: `none`, xmlns: `http://www.w3.org/2000/svg` }, c(`path`, { d: `M3.14645 5.64645C3.34171 5.45118 3.65829 5.45118 3.85355 5.64645L8 9.79289L12.1464 5.64645C12.3417 5.45118 12.6583 5.45118 12.8536 5.64645C13.0488 5.84171 13.0488 6.15829 12.8536 6.35355L8.35355 10.8536C8.15829 11.0488 7.84171 11.0488 7.64645 10.8536L3.14645 6.35355C2.95118 6.15829 2.95118 5.84171 3.14645 5.64645Z`, fill: `currentColor` }));
} }), m = r(`clear`, () => c(`svg`, { viewBox: `0 0 16 16`, version: `1.1`, xmlns: `http://www.w3.org/2000/svg` }, c(`g`, { stroke: `none`, "stroke-width": `1`, fill: `none`, "fill-rule": `evenodd` }, c(`g`, { fill: `currentColor`, "fill-rule": `nonzero` }, c(`path`, { d: `M8,2 C11.3137085,2 14,4.6862915 14,8 C14,11.3137085 11.3137085,14 8,14 C4.6862915,14 2,11.3137085 2,8 C2,4.6862915 4.6862915,2 8,2 Z M6.5343055,5.83859116 C6.33943736,5.70359511 6.07001296,5.72288026 5.89644661,5.89644661 L5.89644661,5.89644661 L5.83859116,5.9656945 C5.70359511,6.16056264 5.72288026,6.42998704 5.89644661,6.60355339 L5.89644661,6.60355339 L7.293,8 L5.89644661,9.39644661 L5.83859116,9.4656945 C5.70359511,9.66056264 5.72288026,9.92998704 5.89644661,10.1035534 L5.89644661,10.1035534 L5.9656945,10.1614088 C6.16056264,10.2964049 6.42998704,10.2771197 6.60355339,10.1035534 L6.60355339,10.1035534 L8,8.707 L9.39644661,10.1035534 L9.4656945,10.1614088 C9.66056264,10.2964049 9.92998704,10.2771197 10.1035534,10.1035534 L10.1035534,10.1035534 L10.1614088,10.0343055 C10.2964049,9.83943736 10.2771197,9.57001296 10.1035534,9.39644661 L10.1035534,9.39644661 L8.707,8 L10.1035534,6.60355339 L10.1614088,6.5343055 C10.2964049,6.33943736 10.2771197,6.07001296 10.1035534,5.89644661 L10.1035534,5.89644661 L10.0343055,5.83859116 C9.83943736,5.70359511 9.57001296,5.72288026 9.39644661,5.89644661 L9.39644661,5.89644661 L8,7.293 L6.60355339,5.89644661 Z` }))))), h = i(`base-clear`, `
 flex-shrink: 0;
 height: 1em;
 width: 1em;
 position: relative;
`, [t(`>`, [n(`clear`, `
 font-size: var(--n-clear-size);
 height: 1em;
 width: 1em;
 cursor: pointer;
 color: var(--n-clear-color);
 transition: color .3s var(--n-bezier);
 display: flex;
 `, [t(`&:hover`, `
 color: var(--n-clear-color-hover)!important;
 `), t(`&:active`, `
 color: var(--n-clear-color-pressed)!important;
 `)]), n(`placeholder`, `
 display: flex;
 `), n(`clear, placeholder`, `
 position: absolute;
 left: 50%;
 top: 50%;
 transform: translateX(-50%) translateY(-50%);
 `, [u({ originalTransform: `translateX(-50%) translateY(-50%)`, left: `50%`, top: `50%` })])])]), g = l({ name: `BaseClear`, props: { clsPrefix: { type: String, required: true }, show: Boolean, onClear: Function }, setup(e2) {
  return a(`-base-clear`, h, s(e2, `clsPrefix`)), { handleMouseDown(e3) {
    e3.preventDefault();
  } };
}, render() {
  let { clsPrefix: t2 } = this;
  return c(`div`, { class: `${t2}-base-clear` }, c(f, null, { default: () => {
    var _a;
    var n2;
    return this.show ? c(`div`, { key: `dismiss`, class: `${t2}-base-clear__clear`, onClick: this.onClear, onMousedown: this.handleMouseDown, "data-clear": true }, e(this.$slots.icon, () => [c(o, { clsPrefix: t2 }, { default: () => c(m, null) })])) : c(`div`, { key: `icon`, class: `${t2}-base-clear__placeholder` }, (_a = (n2 = this.$slots).placeholder) == null ? void 0 : _a.call(n2));
  } }));
} }), _ = l({ name: `InternalSelectionSuffix`, props: { clsPrefix: { type: String, required: true }, showArrow: { type: Boolean, default: void 0 }, showClear: { type: Boolean, default: void 0 }, loading: { type: Boolean, default: false }, onClear: Function }, setup(t2, { slots: n2 }) {
  return () => {
    let { clsPrefix: r2 } = t2;
    return c(d, { clsPrefix: r2, class: `${r2}-base-suffix`, strokeWidth: 24, scale: 0.85, show: t2.loading }, { default: () => t2.showArrow ? c(g, { clsPrefix: r2, show: t2.showClear, onClear: t2.onClear }, { placeholder: () => c(o, { clsPrefix: r2, class: `${r2}-base-suffix__arrow` }, { default: () => e(n2.default, () => [c(p, null)]) }) }) : null });
  };
} });
export {
  g as n,
  _ as t
};
