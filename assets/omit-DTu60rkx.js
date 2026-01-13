function e(e2, t = [], n) {
  let r = {};
  return Object.getOwnPropertyNames(e2).forEach((n2) => {
    t.includes(n2) || (r[n2] = e2[n2]);
  }), Object.assign(r, n);
}
export {
  e as t
};
