import{e as t,l as a,f as _,u as m,i as p,g as l}from"./CsmaOZ4j.js";function v(e){t===null&&a(),_&&t.l!==null?x(t).m.push(e):m(()=>{const n=l(e);if(typeof n=="function")return n})}function b(e){t===null&&a(),v(()=>()=>l(e))}function d(e,n,{bubbles:o=!1,cancelable:s=!1}={}){return new CustomEvent(e,{detail:n,bubbles:o,cancelable:s})}function g(){const e=t;return e===null&&a(),(n,o,s)=>{var u;const c=(u=e.s.$$events)==null?void 0:u[n];if(c){const f=p(c)?c.slice():[c],r=d(n,o,s);for(const i of f)i.call(e.x,r);return!r.defaultPrevented}return!0}}function x(e){var n=e.l;return n.u??(n.u={a:[],b:[],m:[]})}export{b as a,g as c,v as o};
