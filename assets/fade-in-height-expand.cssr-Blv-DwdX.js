import { at as e, m as t } from "./Card-DEA6VsPG.js";
var { cubicBezierEaseInOut: n, cubicBezierEaseOut: r, cubicBezierEaseIn: i } = t;
function a({ overflow: t2 = `hidden`, duration: a2 = `.3s`, originalTransition: o = ``, leavingDelay: s = `0s`, foldPadding: c = false, enterToProps: l = void 0, leaveToProps: u = void 0, reverse: d = false } = {}) {
  let f = d ? `leave` : `enter`, p = d ? `enter` : `leave`;
  return [e(`&.fade-in-height-expand-transition-${p}-from,
 &.fade-in-height-expand-transition-${f}-to`, Object.assign(Object.assign({}, l), { opacity: 1 })), e(`&.fade-in-height-expand-transition-${p}-to,
 &.fade-in-height-expand-transition-${f}-from`, Object.assign(Object.assign({}, u), { opacity: 0, marginTop: `0 !important`, marginBottom: `0 !important`, paddingTop: c ? `0 !important` : void 0, paddingBottom: c ? `0 !important` : void 0 })), e(`&.fade-in-height-expand-transition-${p}-active`, `
 overflow: ${t2};
 transition:
 max-height ${a2} ${n} ${s},
 opacity ${a2} ${r} ${s},
 margin-top ${a2} ${n} ${s},
 margin-bottom ${a2} ${n} ${s},
 padding-top ${a2} ${n} ${s},
 padding-bottom ${a2} ${n} ${s}
 ${o ? `,${o}` : ``}
 `), e(`&.fade-in-height-expand-transition-${f}-active`, `
 overflow: ${t2};
 transition:
 max-height ${a2} ${n},
 opacity ${a2} ${i},
 margin-top ${a2} ${n},
 margin-bottom ${a2} ${n},
 padding-top ${a2} ${n},
 padding-bottom ${a2} ${n}
 ${o ? `,${o}` : ``}
 `)];
}
export {
  a as t
};
