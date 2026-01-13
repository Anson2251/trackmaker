import { M as e } from "./Card-wTK5VWgg.js";
import { At as t, ct as n, dt as r, ht as i } from "./index-C4uc8sCV.js";
var a = { xmlns: `http://www.w3.org/2000/svg`, "xmlns:xlink": `http://www.w3.org/1999/xlink`, viewBox: `0 0 24 24` }, o = i({ name: `InfoCircle`, render: function(e2, i2) {
  return t(), r(`svg`, a, i2[0] || (i2[0] = [n(`g`, { fill: `none`, stroke: `currentColor`, "stroke-width": `2`, "stroke-linecap": `round`, "stroke-linejoin": `round` }, [n(`circle`, { cx: `12`, cy: `12`, r: `9` }), n(`path`, { d: `M12 8h.01` }), n(`path`, { d: `M11 12h1v4h1` })], -1)]));
} }), s = { xmlns: `http://www.w3.org/2000/svg`, "xmlns:xlink": `http://www.w3.org/1999/xlink`, viewBox: `0 0 24 24` }, c = i({ name: `Map`, render: function(e2, i2) {
  return t(), r(`svg`, s, i2[0] || (i2[0] = [n(`g`, { fill: `none`, stroke: `currentColor`, "stroke-width": `2`, "stroke-linecap": `round`, "stroke-linejoin": `round` }, [n(`path`, { d: `M3 7l6-3l6 3l6-3v13l-6 3l-6-3l-6 3V7` }), n(`path`, { d: `M9 4v13` }), n(`path`, { d: `M15 7v13` })], -1)]));
} }), l = { xmlns: `http://www.w3.org/2000/svg`, "xmlns:xlink": `http://www.w3.org/1999/xlink`, viewBox: `0 0 24 24` }, u = i({ name: `Settings`, render: function(e2, i2) {
  return t(), r(`svg`, l, i2[0] || (i2[0] = [n(`g`, { fill: `none`, stroke: `currentColor`, "stroke-width": `2`, "stroke-linecap": `round`, "stroke-linejoin": `round` }, [n(`path`, { d: `M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 0 0 2.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 0 0 1.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 0 0-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 0 0-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 0 0-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 0 0-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 0 0 1.066-2.573c-.94-1.543.826-3.31 2.37-2.37c1 .608 2.296.07 2.572-1.065z` }), n(`circle`, { cx: `12`, cy: `12`, r: `3` })], -1)]));
} });
function d(e2, t2 = [], n2) {
  let r2 = {};
  return Object.getOwnPropertyNames(e2).forEach((n3) => {
    t2.includes(n3) || (r2[n3] = e2[n3]);
  }), Object.assign(r2, n2);
}
const f = e(`n-layout-sider`), p = { type: String, default: `static` };
export {
  c as a,
  u as i,
  p as n,
  o,
  d as r,
  f as t
};
