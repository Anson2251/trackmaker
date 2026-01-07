function e(e2, t = `default`, n = []) {
  let r = e2.$slots[t];
  return r === void 0 ? n : r();
}
export {
  e as t
};
