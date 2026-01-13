import { m as e, ut as t } from "./Card-nhqq8IKa.js";
function n(e2, t2) {
  let { target: n2 } = e2;
  for (; n2; ) {
    if (n2.dataset && n2.dataset[t2] !== void 0) return true;
    n2 = n2.parentElement;
  }
  return false;
}
var { cubicBezierEaseIn: r, cubicBezierEaseOut: i } = e;
function a({ transformOrigin: e2 = `inherit`, duration: n2 = `.2s`, enterScale: a2 = `.9`, originalTransform: o = ``, originalTransition: s = `` } = {}) {
  return [t(`&.fade-in-scale-up-transition-leave-active`, { transformOrigin: e2, transition: `opacity ${n2} ${r}, transform ${n2} ${r} ${s && `,${s}`}` }), t(`&.fade-in-scale-up-transition-enter-active`, { transformOrigin: e2, transition: `opacity ${n2} ${i}, transform ${n2} ${i} ${s && `,${s}`}` }), t(`&.fade-in-scale-up-transition-enter-from, &.fade-in-scale-up-transition-leave-to`, { opacity: 0, transform: `${o} scale(${a2})` }), t(`&.fade-in-scale-up-transition-leave-from, &.fade-in-scale-up-transition-enter-to`, { opacity: 1, transform: `${o} scale(1)` })];
}
export {
  n,
  a as t
};
