import { Ft as e, Jt as t, Lt as n, Ot as r, Tt as i } from "./index-DTVnoW_1.js";
function a(n2, a2, o2) {
  var _a;
  let s2 = r(n2, null);
  if (s2 === null) return;
  let c = (_a = i()) == null ? void 0 : _a.proxy;
  t(o2, l), l(o2.value), e(() => {
    l(void 0, o2.value);
  });
  function l(e2, t2) {
    if (!s2) return;
    let n3 = s2[a2];
    t2 !== void 0 && u(n3, t2), e2 !== void 0 && d(n3, e2);
  }
  function u(e2, t2) {
    e2[t2] || (e2[t2] = []), e2[t2].splice(e2[t2].findIndex((e3) => e3 === c), 1);
  }
  function d(e2, t2) {
    e2[t2] || (e2[t2] = []), ~e2[t2].findIndex((e3) => e3 === c) || e2[t2].push(c);
  }
}
function o(n2, i2, a2) {
  let o2 = r(n2, null);
  o2 !== null && (i2 in o2 || (o2[i2] = []), o2[i2].push(a2.value), t(a2, (e2, t2) => {
    let n3 = o2[i2], r2 = n3.findIndex((e3) => e3 === t2);
    ~r2 && n3.splice(r2, 1), n3.push(e2);
  }), e(() => {
    let e2 = o2[i2], t2 = e2.findIndex((e3) => e3 === a2.value);
    ~t2 && e2.splice(t2, 1);
  }));
}
function s(t2, i2, a2) {
  let o2 = r(t2, null);
  o2 !== null && (i2 in o2 || (o2[i2] = []), n(() => {
    let e2 = a2();
    e2 && o2[i2].push(e2);
  }), e(() => {
    let e2 = o2[i2], t3 = a2(), n2 = e2.findIndex((e3) => e3 === t3);
    ~n2 && e2.splice(n2, 1);
  }));
}
export {
  s as n,
  a as r,
  o as t
};
