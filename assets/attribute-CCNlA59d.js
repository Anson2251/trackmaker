import { Dt as e, Lt as t, Tt as n, ht as r, vt as i } from "./index-XWtbsHgt.js";
function a(e2, a2, o2) {
  var _a;
  let s2 = i(e2, null);
  if (s2 === null) return;
  let c2 = (_a = r()) == null ? void 0 : _a.proxy;
  t(o2, l), l(o2.value), n(() => {
    l(void 0, o2.value);
  });
  function l(e3, t2) {
    if (!s2) return;
    let n2 = s2[a2];
    t2 !== void 0 && u(n2, t2), e3 !== void 0 && d(n2, e3);
  }
  function u(e3, t2) {
    e3[t2] || (e3[t2] = []), e3[t2].splice(e3[t2].findIndex((e4) => e4 === c2), 1);
  }
  function d(e3, t2) {
    e3[t2] || (e3[t2] = []), ~e3[t2].findIndex((e4) => e4 === c2) || e3[t2].push(c2);
  }
}
function o(e2, r2, a2) {
  let o2 = i(e2, null);
  o2 !== null && (r2 in o2 || (o2[r2] = []), o2[r2].push(a2.value), t(a2, (e3, t2) => {
    let n2 = o2[r2], i2 = n2.findIndex((e4) => e4 === t2);
    ~i2 && n2.splice(i2, 1), n2.push(e3);
  }), n(() => {
    let e3 = o2[r2], t2 = e3.findIndex((e4) => e4 === a2.value);
    ~t2 && e3.splice(t2, 1);
  }));
}
function s(t2, r2, a2) {
  let o2 = i(t2, null);
  o2 !== null && (r2 in o2 || (o2[r2] = []), e(() => {
    let e2 = a2();
    e2 && o2[r2].push(e2);
  }), n(() => {
    let e2 = o2[r2], t3 = a2(), n2 = e2.findIndex((e3) => e3 === t3);
    ~n2 && e2.splice(n2, 1);
  }));
}
function c(e2) {
  switch (typeof e2) {
    case `string`:
      return e2 || void 0;
    case `number`:
      return String(e2);
    default:
      return;
  }
}
export {
  a as i,
  o as n,
  s as r,
  c as t
};
