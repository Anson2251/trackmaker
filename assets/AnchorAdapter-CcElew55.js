import{x as C,z as $,H as F,A as G,ad as Y,aG as Z,o as Q,u as ee,P as te,az as ne,aZ as oe,G as I,v as _,y as N,q as M,C as K,E as ie}from"./Card-tYBwlsoQ.js";import{ah as re,ai as q,d as P,h as E,b as y,g as w,k as U,f as D,i as le,t as V,s as X,p as ae,J as se}from"./index-BFmvDczB.js";import{d as ce,e as ue,c as fe}from"./ListItem-Dw0cp0sp.js";import{t as W}from"./toNumber-Bx-XjP0R.js";import{a as de}from"./light-BAh68qoW.js";var j=function(){return re.Date.now()},ve="Expected a function",he=Math.max,ge=Math.min;function me(e,l,o){var r,a,u,f,s,d,g=0,B=!1,b=!1,p=!0;if(typeof e!="function")throw new TypeError(ve);l=W(l)||0,q(o)&&(B=!!o.leading,b="maxWait"in o,u=b?he(W(o.maxWait)||0,l):u,p="trailing"in o?!!o.trailing:p);function x(i){var c=r,R=a;return r=a=void 0,g=i,f=e.apply(R,c),f}function v(i){return g=i,s=setTimeout(t,l),B?x(i):f}function h(i){var c=i-d,R=i-g,A=l-c;return b?ge(A,u-R):A}function n(i){var c=i-d,R=i-g;return d===void 0||c>=l||c<0||b&&R>=u}function t(){var i=j();if(n(i))return m(i);s=setTimeout(t,h(i))}function m(i){return s=void 0,p&&r?x(i):(r=a=void 0,f)}function k(){s!==void 0&&clearTimeout(s),g=0,r=d=a=s=void 0}function S(){return s===void 0?f:m(j())}function T(){var i=j(),c=n(i);if(r=arguments,a=this,d=i,c){if(s===void 0)return v(d);if(b)return clearTimeout(s),s=setTimeout(t,l),x(d)}return s===void 0&&(s=setTimeout(t,l)),f}return T.cancel=k,T.flush=S,T}var be="Expected a function";function pe(e,l,o){var r=!0,a=!0;if(typeof e!="function")throw new TypeError(be);return q(o)&&(r="leading"in o?!!o.leading:r,a="trailing"in o?!!o.trailing:a),me(e,l,{leading:r,maxWait:l,trailing:a})}function J(e){return typeof e=="string"?document.querySelector(e):typeof e=="function"?e():e}const xe=C("affix",[$("affixed",{position:"fixed"},[$("absolute-positioned",{position:"absolute"})])]);function ke(e){return e instanceof HTMLElement?e.scrollTop:window.scrollY}function Te(e){return e instanceof HTMLElement?e.getBoundingClientRect():{top:0,bottom:window.innerHeight}}const z={listenTo:[String,Object,Function],top:Number,bottom:Number,triggerTop:Number,triggerBottom:Number,position:{type:String,default:"fixed"},offsetTop:{type:Number,validator:()=>!0,default:void 0},offsetBottom:{type:Number,validator:()=>!0,default:void 0},target:{type:Function,validator:()=>!0,default:void 0}},ye=F(z),Re=P({name:"Affix",props:z,setup(e){const{mergedClsPrefixRef:l}=G(e);Y("-affix",xe,l);let o=null;const r=y(!1),a=y(!1),u=y(null),f=y(null),s=w(()=>a.value||r.value),d=w(()=>{var n,t;return(t=(n=e.triggerTop)!==null&&n!==void 0?n:e.offsetTop)!==null&&t!==void 0?t:e.top}),g=w(()=>{var n,t;return(t=(n=e.top)!==null&&n!==void 0?n:e.triggerTop)!==null&&t!==void 0?t:e.offsetTop}),B=w(()=>{var n,t;return(t=(n=e.bottom)!==null&&n!==void 0?n:e.triggerBottom)!==null&&t!==void 0?t:e.offsetBottom}),b=w(()=>{var n,t;return(t=(n=e.triggerBottom)!==null&&n!==void 0?n:e.offsetBottom)!==null&&t!==void 0?t:e.bottom}),p=y(null),x=()=>{const{target:n,listenTo:t}=e;n?o=n():t?o=J(t):o=document,o&&(o.addEventListener("scroll",v),v())};function v(){Z(h)}function h(){const{value:n}=p;if(!o||!n)return;const t=ke(o);if(s.value){f.value!==null&&t<f.value&&(r.value=!1,f.value=null),u.value!==null&&t>u.value&&(a.value=!1,u.value=null);return}const m=Te(o),k=n.getBoundingClientRect(),S=k.top-m.top,T=m.bottom-k.bottom,i=d.value,c=b.value;i!==void 0&&S<=i?(r.value=!0,f.value=t-(i-S)):(r.value=!1,f.value=null),c!==void 0&&T<=c?(a.value=!0,u.value=t+c-T):(a.value=!1,u.value=null)}return U(()=>{x()}),D(()=>{o&&o.removeEventListener("scroll",v)}),{selfRef:p,affixed:s,mergedClsPrefix:l,mergedstyle:w(()=>{const n={};return r.value&&d.value!==void 0&&g.value!==void 0&&(n.top=`${g.value}px`),a.value&&b.value!==void 0&&B.value!==void 0&&(n.bottom=`${B.value}px`),n})}},render(){const{mergedClsPrefix:e}=this;return E("div",{ref:"selfRef",class:[`${e}-affix`,{[`${e}-affix--affixed`]:this.affixed,[`${e}-affix--absolute-positioned`]:this.position==="absolute"}],style:this.mergedstyle},this.$slots)}}),O=Q("n-anchor"),Ce={title:String,href:String},Ne=P({name:"AnchorLink",props:Ce,slots:Object,setup(e,{slots:l}){const o=y(null),r=le(O),a=V(e,"href"),u=ee(()=>a.value&&a.value===r.activeHref.value);ce(O,"collectedLinkHrefs",a),ue(O,"titleEls",()=>o.value),X(u,s=>{s&&o.value&&r.updateBarPosition(o.value)});function f(){e.href!==void 0&&r.setActiveHref(e.href)}return()=>{var s;const{value:d}=r.mergedClsPrefix;return E("div",{class:[`${d}-anchor-link`,u.value&&`${d}-anchor-link--active`]},E("a",{ref:o,class:[`${d}-anchor-link__title`],href:e.href,title:fe(e.title),onClick:f},{default:()=>te(l.title,()=>[e.title])}),(s=l.default)===null||s===void 0?void 0:s.call(l))}}});function Ee(e,l){const{top:o,height:r}=e.getBoundingClientRect(),a=l instanceof HTMLElement?l.getBoundingClientRect().top:0;return{top:o-a,height:r}}const L={type:{type:String,default:"rail"},showRail:{type:Boolean,default:!0},showBackground:{type:Boolean,default:!0},bound:{type:Number,default:12},internalScrollable:Boolean,ignoreGap:Boolean,offsetTarget:[String,Object,Function]},Be=F(L),we=P({name:"BaseAnchor",props:Object.assign(Object.assign({},L),{mergedClsPrefix:{type:String,required:!0}}),setup(e){const l=[],o=[],r=y(null),a=y(null),u=y(null),f=y(null),s=w(()=>e.type==="block"),d=w(()=>!s.value&&e.showRail);function g(){const{value:v}=u,{value:h}=a;v&&(v.style.transition="none"),h&&(h.style.transition="none"),o&&o.forEach(n=>{n.style.transition="none"}),se(()=>{const{value:n}=u,{value:t}=a;n&&(n.offsetWidth,n.style.transition=""),t&&(t.offsetWidth,t.style.transition=""),o&&o.forEach(m=>{m.offsetWidth,m.style.transition=""})})}function B(v,h=!0){const{value:n}=u,{value:t}=a,{value:m}=f;if(!m||!n)return;h||(n.style.transition="none",t&&(t.style.transition="none"));const{offsetHeight:k,offsetWidth:S}=v,{top:T,left:i}=v.getBoundingClientRect(),{top:c,left:R}=m.getBoundingClientRect(),A=T-c,H=i-R;n.style.top=`${A}px`,n.style.height=`${k}px`,t&&(t.style.top=`${A}px`,t.style.height=`${k}px`,t.style.maxWidth=`${S+H}px`),n.offsetHeight,t&&t.offsetHeight,h||(n.style.transition="",t&&(t.style.transition=""))}const b=pe(()=>{x(!0)},128);function p(v,h=!0){const n=/^#([^#]+)$/.exec(v);if(!n)return;const t=document.getElementById(n[1]);t&&(r.value=v,t.scrollIntoView(),h||g(),b())}function x(v=!0){var h;const n=[],t=J((h=e.offsetTarget)!==null&&h!==void 0?h:document);l.forEach(i=>{const c=/#([^#]+)$/.exec(i);if(!c)return;const R=document.getElementById(c[1]);if(R&&t){const{top:A,height:H}=Ee(R,t);n.push({top:A,height:H,href:i})}}),n.sort((i,c)=>i.top>c.top?1:(i.top===c.top&&i.height<c.height,-1));const m=r.value,{bound:k,ignoreGap:S}=e,T=n.reduce((i,c)=>c.top+c.height<0?S?c:i:c.top<=k?i===null?c:c.top===i.top?c.href===m?c:i:c.top>i.top?c:i:i,null);v||g(),T?r.value=T.href:r.value=null}return ae(O,{activeHref:r,mergedClsPrefix:V(e,"mergedClsPrefix"),updateBarPosition:B,setActiveHref:p,collectedLinkHrefs:l,titleEls:o}),U(()=>{document.addEventListener("scroll",b,!0),p(window.location.hash),x(!1)}),oe(()=>{p(window.location.hash),x(!1)}),D(()=>{document.removeEventListener("scroll",b,!0)}),X(r,v=>{if(v===null){const{value:h}=a;h&&!s.value&&(h.style.maxWidth="0")}}),{selfRef:f,barRef:u,slotRef:a,setActiveHref:p,activeHref:r,isBlockType:s,mergedShowRail:d}},render(){var e;const{mergedClsPrefix:l,mergedShowRail:o,isBlockType:r,$slots:a}=this,u=E("div",{class:[`${l}-anchor`,r&&`${l}-anchor--block`,o&&`${l}-anchor--show-rail`],ref:"selfRef"},o&&this.showBackground?E("div",{ref:"slotRef",class:`${l}-anchor-link-background`}):null,o?E("div",{class:`${l}-anchor-rail`},E("div",{ref:"barRef",class:[`${l}-anchor-rail__bar`,this.activeHref!==null&&`${l}-anchor-rail__bar--active`]})):null,(e=a.default)===null||e===void 0?void 0:e.call(a));return this.internalScrollable?E(ne,null,{default:()=>u}):u}}),Se=C("anchor",`
 position: relative;
`,[I("block",`
 padding-left: var(--n-rail-width);
 `,[C("anchor-link",[_("+, >",[C("anchor-link",`
 margin-top: .5em;
 `)])]),C("anchor-link-background",`
 max-width: 0;
 border-top-right-radius: 10.5px;
 border-bottom-right-radius: 10.5px;
 `),I("show-rail",[_(">",[C("anchor-link","padding-left: 0;")])])]),$("block",[C("anchor-link",`
 margin-bottom: 4px;
 padding: 2px 8px;
 transition: background-color .3s var(--n-bezier);
 background-color: transparent;
 border-radius: var(--n-link-border-radius);
 `,[$("active",`
 background-color: var(--n-link-color);
 `)])]),C("anchor-link-background",`
 position: absolute;
 left: calc(var(--n-rail-width) / 2);
 width: 100%;
 background-color: var(--n-link-color);
 transition:
 top .15s var(--n-bezier),
 max-width .15s var(--n-bezier),
 background-color .3s var(--n-bezier);
 `),C("anchor-rail",`
 position: absolute;
 left: 0;
 top: 0;
 bottom: 0;
 width: var(--n-rail-width);
 border-radius: calc(var(--n-rail-width) / 2);
 overflow: hidden;
 transition: background-color .3s var(--n-bezier);
 background-color: var(--n-rail-color);
 `,[N("bar",`
 position: absolute;
 left: 0;
 width: var(--n-rail-width);
 height: 21px;
 background-color: #0000;
 transition: 
 top .15s var(--n-bezier),
 background-color .3s var(--n-bezier);
 `,[$("active",{backgroundColor:"var(--n-rail-color-active)"})])]),C("anchor-link",`
 padding: var(--n-link-padding);
 position: relative;
 line-height: 1.5;
 font-size: var(--n-link-font-size);
 min-height: 1.5em;
 display: flex;
 flex-direction: column;
 `,[$("active",[_(">",[N("title",`
 color: var(--n-link-text-color-active);
 `)])]),N("title",`
 outline: none;
 max-width: 100%;
 text-decoration: none;
 white-space: nowrap;
 text-overflow: ellipsis;
 overflow: hidden;
 cursor: pointer;
 display: inline-block;
 padding-right: 16px;
 transition: color .3s var(--n-bezier);
 color: var(--n-link-text-color);
 `,[_("&:hover, &:focus",`
 color: var(--n-link-text-color-hover);
 `),_("&:active",`
 color: var(--n-link-text-color-pressed);
 `)])])]),Ae=Object.assign(Object.assign(Object.assign(Object.assign({},K.props),{affix:Boolean}),z),L),je=P({name:"Anchor",props:Ae,setup(e,{slots:l}){const{mergedClsPrefixRef:o,inlineThemeDisabled:r}=G(e),a=K("Anchor","-anchor",Se,de,e,o),u=y(null),f=w(()=>{const{self:{railColor:d,linkColor:g,railColorActive:B,linkTextColor:b,linkTextColorHover:p,linkTextColorPressed:x,linkTextColorActive:v,linkFontSize:h,railWidth:n,linkPadding:t,borderRadius:m},common:{cubicBezierEaseInOut:k}}=a.value;return{"--n-link-border-radius":m,"--n-link-color":g,"--n-link-font-size":h,"--n-link-text-color":b,"--n-link-text-color-hover":p,"--n-link-text-color-active":v,"--n-link-text-color-pressed":x,"--n-link-padding":t,"--n-bezier":k,"--n-rail-color":d,"--n-rail-color-active":B,"--n-rail-width":n}}),s=r?ie("anchor",void 0,f,e):void 0;return{scrollTo(d){var g;(g=u.value)===null||g===void 0||g.setActiveHref(d)},renderAnchor:()=>(s==null||s.onRender(),E(we,Object.assign({ref:u,style:r?void 0:f.value,class:s==null?void 0:s.themeClass.value},M(e,Be),{mergedClsPrefix:o.value}),l))}},render(){return this.affix?E(Re,Object.assign({},M(this,ye)),{default:this.renderAnchor}):this.renderAnchor()}});export{Ne as N,je as a};
