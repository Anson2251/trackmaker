function e(r) {
  return new Worker("" + new URL("worker-D1KNUnmv.js", import.meta.url).href, { name: r == null ? void 0 : r.name });
}
export {
  e as default
};
