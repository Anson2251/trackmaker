function e(e2, t) {
  if (!e2) return;
  let n = document.createElement(`a`);
  n.href = e2, t !== void 0 && (n.download = t), document.body.appendChild(n), n.click(), document.body.removeChild(n);
}
export {
  e as t
};
