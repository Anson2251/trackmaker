function e(e2) {
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
  e as t
};
