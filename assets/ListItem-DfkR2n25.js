import{x as C,z as y,H as ne,A as L,U as ze,az as we,y as R,G as j,v as w,Q as ee,N as _e,C as H,B as le,D as z,R as Pe,E as V,a5 as oe,K as Ee,o as q,u as Se,P as Oe,T as Ie,aI as je,q as re,Y as He,Z as Ae,_ as Me}from"./Card-P5UDjXFq.js";import{t as Ne,b as Le,l as Fe}from"./light-CSnFHFCt.js";import{aj as We,ak as ie,i as F,v as G,f as W,k as X,d as I,h as p,b as S,g as E,p as Y,t as D,L as De}from"./index-CevpLSuo.js";import{t as te}from"./use-locale-DujftpOH.js";var U=function(){return We.Date.now()},Ue="Expected a function",Ve=Math.max,qe=Math.min;function Ge(e,r,o){var t,i,u,f,a,h,m=0,T=!1,b=!1,x=!0;if(typeof e!="function")throw new TypeError(Ue);r=te(r)||0,ie(o)&&(T=!!o.leading,b="maxWait"in o,u=b?Ve(te(o.maxWait)||0,r):u,x="trailing"in o?!!o.trailing:x);function c(s){var v=t,P=i;return t=i=void 0,m=s,f=e.apply(P,v),f}function d(s){return m=s,a=setTimeout(l,r),T?c(s):f}function g(s){var v=s-h,P=s-m,O=r-v;return b?qe(O,u-P):O}function n(s){var v=s-h,P=s-m;return h===void 0||v>=r||v<0||b&&P>=u}function l(){var s=U();if(n(s))return k(s);a=setTimeout(l,g(s))}function k(s){return a=void 0,x&&t?c(s):(t=i=void 0,f)}function B(){a!==void 0&&clearTimeout(a),m=0,t=h=i=a=void 0}function _(){return a===void 0?f:k(U())}function $(){var s=U(),v=n(s);if(t=arguments,i=this,h=s,v){if(a===void 0)return d(h);if(b)return clearTimeout(a),a=setTimeout(l,r),c(h)}return a===void 0&&(a=setTimeout(l,r)),f}return $.cancel=B,$.flush=_,$}var Xe="Expected a function";function Ye(e,r,o){var t=!0,i=!0;if(typeof e!="function")throw new TypeError(Xe);return ie(o)&&(t="leading"in o?!!o.leading:t,i="trailing"in o?!!o.trailing:i),Ge(e,r,{leading:t,maxWait:r,trailing:i})}function ae(e){return typeof e=="string"?document.querySelector(e):typeof e=="function"?e():e}function Ke(e,r,o){const t=F(e,null);t!==null&&(r in t||(t[r]=[]),t[r].push(o.value),G(o,(i,u)=>{const f=t[r],a=f.findIndex(h=>h===u);~a&&f.splice(a,1),f.push(i)}),W(()=>{const i=t[r],u=i.findIndex(f=>f===o.value);~u&&i.splice(u,1)}))}function Qe(e,r,o){const t=F(e,null);t!==null&&(r in t||(t[r]=[]),X(()=>{const i=o();i&&t[r].push(i)}),W(()=>{const i=t[r],u=o(),f=i.findIndex(a=>a===u);~f&&i.splice(f,1)}))}function Ze(e){switch(typeof e){case"string":return e||void 0;case"number":return String(e);default:return}}function Co(e,r="default",o=[]){const i=e.$slots[r];return i===void 0?o:i()}const Je=C("affix",[y("affixed",{position:"fixed"},[y("absolute-positioned",{position:"absolute"})])]);function eo(e){return e instanceof HTMLElement?e.scrollTop:window.scrollY}function oo(e){return e instanceof HTMLElement?e.getBoundingClientRect():{top:0,bottom:window.innerHeight}}const K={listenTo:[String,Object,Function],top:Number,bottom:Number,triggerTop:Number,triggerBottom:Number,position:{type:String,default:"fixed"},offsetTop:{type:Number,validator:()=>!0,default:void 0},offsetBottom:{type:Number,validator:()=>!0,default:void 0},target:{type:Function,validator:()=>!0,default:void 0}},ro=ne(K),to=I({name:"Affix",props:K,setup(e){const{mergedClsPrefixRef:r}=L(e);ze("-affix",Je,r);let o=null;const t=S(!1),i=S(!1),u=S(null),f=S(null),a=E(()=>i.value||t.value),h=E(()=>{var n,l;return(l=(n=e.triggerTop)!==null&&n!==void 0?n:e.offsetTop)!==null&&l!==void 0?l:e.top}),m=E(()=>{var n,l;return(l=(n=e.top)!==null&&n!==void 0?n:e.triggerTop)!==null&&l!==void 0?l:e.offsetTop}),T=E(()=>{var n,l;return(l=(n=e.bottom)!==null&&n!==void 0?n:e.triggerBottom)!==null&&l!==void 0?l:e.offsetBottom}),b=E(()=>{var n,l;return(l=(n=e.triggerBottom)!==null&&n!==void 0?n:e.offsetBottom)!==null&&l!==void 0?l:e.bottom}),x=S(null),c=()=>{const{target:n,listenTo:l}=e;n?o=n():l?o=ae(l):o=document,o&&(o.addEventListener("scroll",d),d())};function d(){we(g)}function g(){const{value:n}=x;if(!o||!n)return;const l=eo(o);if(a.value){f.value!==null&&l<f.value&&(t.value=!1,f.value=null),u.value!==null&&l>u.value&&(i.value=!1,u.value=null);return}const k=oo(o),B=n.getBoundingClientRect(),_=B.top-k.top,$=k.bottom-B.bottom,s=h.value,v=b.value;s!==void 0&&_<=s?(t.value=!0,f.value=l-(s-_)):(t.value=!1,f.value=null),v!==void 0&&$<=v?(i.value=!0,u.value=l+v-$):(i.value=!1,u.value=null)}return X(()=>{c()}),W(()=>{o&&o.removeEventListener("scroll",d)}),{selfRef:x,affixed:a,mergedClsPrefix:r,mergedstyle:E(()=>{const n={};return t.value&&h.value!==void 0&&m.value!==void 0&&(n.top=`${m.value}px`),i.value&&b.value!==void 0&&T.value!==void 0&&(n.bottom=`${T.value}px`),n})}},render(){const{mergedClsPrefix:e}=this;return p("div",{ref:"selfRef",class:[`${e}-affix`,{[`${e}-affix--affixed`]:this.affixed,[`${e}-affix--absolute-positioned`]:this.position==="absolute"}],style:this.mergedstyle},this.$slots)}}),no={color:Object,type:{type:String,default:"default"},round:Boolean,size:{type:String,default:"medium"},closable:Boolean,disabled:{type:Boolean,default:void 0}},lo=C("tag",`
 --n-close-margin: var(--n-close-margin-top) var(--n-close-margin-right) var(--n-close-margin-bottom) var(--n-close-margin-left);
 white-space: nowrap;
 position: relative;
 box-sizing: border-box;
 cursor: default;
 display: inline-flex;
 align-items: center;
 flex-wrap: nowrap;
 padding: var(--n-padding);
 border-radius: var(--n-border-radius);
 color: var(--n-text-color);
 background-color: var(--n-color);
 transition: 
 border-color .3s var(--n-bezier),
 background-color .3s var(--n-bezier),
 color .3s var(--n-bezier),
 box-shadow .3s var(--n-bezier),
 opacity .3s var(--n-bezier);
 line-height: 1;
 height: var(--n-height);
 font-size: var(--n-font-size);
`,[y("strong",`
 font-weight: var(--n-font-weight-strong);
 `),R("border",`
 pointer-events: none;
 position: absolute;
 left: 0;
 right: 0;
 top: 0;
 bottom: 0;
 border-radius: inherit;
 border: var(--n-border);
 transition: border-color .3s var(--n-bezier);
 `),R("icon",`
 display: flex;
 margin: 0 4px 0 0;
 color: var(--n-text-color);
 transition: color .3s var(--n-bezier);
 font-size: var(--n-avatar-size-override);
 `),R("avatar",`
 display: flex;
 margin: 0 6px 0 0;
 `),R("close",`
 margin: var(--n-close-margin);
 transition:
 background-color .3s var(--n-bezier),
 color .3s var(--n-bezier);
 `),y("round",`
 padding: 0 calc(var(--n-height) / 3);
 border-radius: calc(var(--n-height) / 2);
 `,[R("icon",`
 margin: 0 4px 0 calc((var(--n-height) - 8px) / -2);
 `),R("avatar",`
 margin: 0 6px 0 calc((var(--n-height) - 8px) / -2);
 `),y("closable",`
 padding: 0 calc(var(--n-height) / 4) 0 calc(var(--n-height) / 3);
 `)]),y("icon, avatar",[y("round",`
 padding: 0 calc(var(--n-height) / 3) 0 calc(var(--n-height) / 2);
 `)]),y("disabled",`
 cursor: not-allowed !important;
 opacity: var(--n-opacity-disabled);
 `),y("checkable",`
 cursor: pointer;
 box-shadow: none;
 color: var(--n-text-color-checkable);
 background-color: var(--n-color-checkable);
 `,[j("disabled",[w("&:hover","background-color: var(--n-color-hover-checkable);",[j("checked","color: var(--n-text-color-hover-checkable);")]),w("&:active","background-color: var(--n-color-pressed-checkable);",[j("checked","color: var(--n-text-color-pressed-checkable);")])]),y("checked",`
 color: var(--n-text-color-checked);
 background-color: var(--n-color-checked);
 `,[j("disabled",[w("&:hover","background-color: var(--n-color-checked-hover);"),w("&:active","background-color: var(--n-color-checked-pressed);")])])])]),io=Object.assign(Object.assign(Object.assign({},H.props),no),{bordered:{type:Boolean,default:void 0},checked:Boolean,checkable:Boolean,strong:Boolean,triggerClickOnClose:Boolean,onClose:[Array,Function],onMouseenter:Function,onMouseleave:Function,"onUpdate:checked":Function,onUpdateChecked:Function,internalCloseFocusable:{type:Boolean,default:!0},internalCloseIsButtonTag:{type:Boolean,default:!0},onCheckedChange:Function}),ao=q("n-tag"),yo=I({name:"Tag",props:io,slots:Object,setup(e){const r=S(null),{mergedBorderedRef:o,mergedClsPrefixRef:t,inlineThemeDisabled:i,mergedRtlRef:u}=L(e),f=H("Tag","-tag",lo,Ne,e,t);Y(ao,{roundRef:D(e,"round")});function a(){if(!e.disabled&&e.checkable){const{checked:c,onCheckedChange:d,onUpdateChecked:g,"onUpdate:checked":n}=e;g&&g(!c),n&&n(!c),d&&d(!c)}}function h(c){if(e.triggerClickOnClose||c.stopPropagation(),!e.disabled){const{onClose:d}=e;d&&Ee(d,c)}}const m={setTextContent(c){const{value:d}=r;d&&(d.textContent=c)}},T=le("Tag",u,t),b=E(()=>{const{type:c,size:d,color:{color:g,textColor:n}={}}=e,{common:{cubicBezierEaseInOut:l},self:{padding:k,closeMargin:B,borderRadius:_,opacityDisabled:$,textColorCheckable:s,textColorHoverCheckable:v,textColorPressedCheckable:P,textColorChecked:O,colorCheckable:A,colorHoverCheckable:ce,colorPressedCheckable:de,colorChecked:ue,colorCheckedHover:fe,colorCheckedPressed:ve,closeBorderRadius:he,fontWeightStrong:ge,[z("colorBordered",c)]:be,[z("closeSize",d)]:me,[z("closeIconSize",d)]:pe,[z("fontSize",d)]:xe,[z("height",d)]:Z,[z("color",c)]:ke,[z("textColor",c)]:Ce,[z("border",c)]:ye,[z("closeIconColor",c)]:J,[z("closeIconColorHover",c)]:Re,[z("closeIconColorPressed",c)]:Te,[z("closeColorHover",c)]:Be,[z("closeColorPressed",c)]:$e}}=f.value,M=Pe(B);return{"--n-font-weight-strong":ge,"--n-avatar-size-override":`calc(${Z} - 8px)`,"--n-bezier":l,"--n-border-radius":_,"--n-border":ye,"--n-close-icon-size":pe,"--n-close-color-pressed":$e,"--n-close-color-hover":Be,"--n-close-border-radius":he,"--n-close-icon-color":J,"--n-close-icon-color-hover":Re,"--n-close-icon-color-pressed":Te,"--n-close-icon-color-disabled":J,"--n-close-margin-top":M.top,"--n-close-margin-right":M.right,"--n-close-margin-bottom":M.bottom,"--n-close-margin-left":M.left,"--n-close-size":me,"--n-color":g||(o.value?be:ke),"--n-color-checkable":A,"--n-color-checked":ue,"--n-color-checked-hover":fe,"--n-color-checked-pressed":ve,"--n-color-hover-checkable":ce,"--n-color-pressed-checkable":de,"--n-font-size":xe,"--n-height":Z,"--n-opacity-disabled":$,"--n-padding":k,"--n-text-color":n||Ce,"--n-text-color-checkable":s,"--n-text-color-checked":O,"--n-text-color-hover-checkable":v,"--n-text-color-pressed-checkable":P}}),x=i?V("tag",E(()=>{let c="";const{type:d,size:g,color:{color:n,textColor:l}={}}=e;return c+=d[0],c+=g[0],n&&(c+=`a${oe(n)}`),l&&(c+=`b${oe(l)}`),o.value&&(c+="c"),c}),b,e):void 0;return Object.assign(Object.assign({},m),{rtlEnabled:T,mergedClsPrefix:t,contentRef:r,mergedBordered:o,handleClick:a,handleCloseClick:h,cssVars:i?void 0:b,themeClass:x==null?void 0:x.themeClass,onRender:x==null?void 0:x.onRender})},render(){var e,r;const{mergedClsPrefix:o,rtlEnabled:t,closable:i,color:{borderColor:u}={},round:f,onRender:a,$slots:h}=this;a==null||a();const m=ee(h.avatar,b=>b&&p("div",{class:`${o}-tag__avatar`},b)),T=ee(h.icon,b=>b&&p("div",{class:`${o}-tag__icon`},b));return p("div",{class:[`${o}-tag`,this.themeClass,{[`${o}-tag--rtl`]:t,[`${o}-tag--strong`]:this.strong,[`${o}-tag--disabled`]:this.disabled,[`${o}-tag--checkable`]:this.checkable,[`${o}-tag--checked`]:this.checkable&&this.checked,[`${o}-tag--round`]:f,[`${o}-tag--avatar`]:m,[`${o}-tag--icon`]:T,[`${o}-tag--closable`]:i}],style:this.cssVars,onClick:this.handleClick,onMouseenter:this.onMouseenter,onMouseleave:this.onMouseleave},T||m,p("span",{class:`${o}-tag__content`,ref:"contentRef"},(r=(e=this.$slots).default)===null||r===void 0?void 0:r.call(e)),!this.checkable&&i?p(_e,{clsPrefix:o,class:`${o}-tag__close`,disabled:this.disabled,onClick:this.handleCloseClick,focusable:this.internalCloseFocusable,round:f,isButtonTag:this.internalCloseIsButtonTag,absolute:!0}):null,!this.checkable&&this.mergedBordered?p("div",{class:`${o}-tag__border`,style:{borderColor:u}}):null)}}),N=q("n-anchor"),so={title:String,href:String},Ro=I({name:"AnchorLink",props:so,slots:Object,setup(e,{slots:r}){const o=S(null),t=F(N),i=D(e,"href"),u=Se(()=>i.value&&i.value===t.activeHref.value);Ke(N,"collectedLinkHrefs",i),Qe(N,"titleEls",()=>o.value),G(u,a=>{a&&o.value&&t.updateBarPosition(o.value)});function f(){e.href!==void 0&&t.setActiveHref(e.href)}return()=>{var a;const{value:h}=t.mergedClsPrefix;return p("div",{class:[`${h}-anchor-link`,u.value&&`${h}-anchor-link--active`]},p("a",{ref:o,class:[`${h}-anchor-link__title`],href:e.href,title:Ze(e.title),onClick:f},{default:()=>Oe(r.title,()=>[e.title])}),(a=r.default)===null||a===void 0?void 0:a.call(r))}}});function co(e,r){const{top:o,height:t}=e.getBoundingClientRect(),i=r instanceof HTMLElement?r.getBoundingClientRect().top:0;return{top:o-i,height:t}}const Q={type:{type:String,default:"rail"},showRail:{type:Boolean,default:!0},showBackground:{type:Boolean,default:!0},bound:{type:Number,default:12},internalScrollable:Boolean,ignoreGap:Boolean,offsetTarget:[String,Object,Function]},uo=ne(Q),fo=I({name:"BaseAnchor",props:Object.assign(Object.assign({},Q),{mergedClsPrefix:{type:String,required:!0}}),setup(e){const r=[],o=[],t=S(null),i=S(null),u=S(null),f=S(null),a=E(()=>e.type==="block"),h=E(()=>!a.value&&e.showRail);function m(){const{value:d}=u,{value:g}=i;d&&(d.style.transition="none"),g&&(g.style.transition="none"),o&&o.forEach(n=>{n.style.transition="none"}),De(()=>{const{value:n}=u,{value:l}=i;n&&(n.offsetWidth,n.style.transition=""),l&&(l.offsetWidth,l.style.transition=""),o&&o.forEach(k=>{k.offsetWidth,k.style.transition=""})})}function T(d,g=!0){const{value:n}=u,{value:l}=i,{value:k}=f;if(!k||!n)return;g||(n.style.transition="none",l&&(l.style.transition="none"));const{offsetHeight:B,offsetWidth:_}=d,{top:$,left:s}=d.getBoundingClientRect(),{top:v,left:P}=k.getBoundingClientRect(),O=$-v,A=s-P;n.style.top=`${O}px`,n.style.height=`${B}px`,l&&(l.style.top=`${O}px`,l.style.height=`${B}px`,l.style.maxWidth=`${_+A}px`),n.offsetHeight,l&&l.offsetHeight,g||(n.style.transition="",l&&(l.style.transition=""))}const b=Ye(()=>{c(!0)},128);function x(d,g=!0){const n=/^#([^#]+)$/.exec(d);if(!n)return;const l=document.getElementById(n[1]);l&&(t.value=d,l.scrollIntoView(),g||m(),b())}function c(d=!0){var g;const n=[],l=ae((g=e.offsetTarget)!==null&&g!==void 0?g:document);r.forEach(s=>{const v=/#([^#]+)$/.exec(s);if(!v)return;const P=document.getElementById(v[1]);if(P&&l){const{top:O,height:A}=co(P,l);n.push({top:O,height:A,href:s})}}),n.sort((s,v)=>s.top>v.top?1:(s.top===v.top&&s.height<v.height,-1));const k=t.value,{bound:B,ignoreGap:_}=e,$=n.reduce((s,v)=>v.top+v.height<0?_?v:s:v.top<=B?s===null?v:v.top===s.top?v.href===k?v:s:v.top>s.top?v:s:s,null);d||m(),$?t.value=$.href:t.value=null}return Y(N,{activeHref:t,mergedClsPrefix:D(e,"mergedClsPrefix"),updateBarPosition:T,setActiveHref:x,collectedLinkHrefs:r,titleEls:o}),X(()=>{document.addEventListener("scroll",b,!0),x(window.location.hash),c(!1)}),je(()=>{x(window.location.hash),c(!1)}),W(()=>{document.removeEventListener("scroll",b,!0)}),G(t,d=>{if(d===null){const{value:g}=i;g&&!a.value&&(g.style.maxWidth="0")}}),{selfRef:f,barRef:u,slotRef:i,setActiveHref:x,activeHref:t,isBlockType:a,mergedShowRail:h}},render(){var e;const{mergedClsPrefix:r,mergedShowRail:o,isBlockType:t,$slots:i}=this,u=p("div",{class:[`${r}-anchor`,t&&`${r}-anchor--block`,o&&`${r}-anchor--show-rail`],ref:"selfRef"},o&&this.showBackground?p("div",{ref:"slotRef",class:`${r}-anchor-link-background`}):null,o?p("div",{class:`${r}-anchor-rail`},p("div",{ref:"barRef",class:[`${r}-anchor-rail__bar`,this.activeHref!==null&&`${r}-anchor-rail__bar--active`]})):null,(e=i.default)===null||e===void 0?void 0:e.call(i));return this.internalScrollable?p(Ie,null,{default:()=>u}):u}}),vo=C("anchor",`
 position: relative;
`,[j("block",`
 padding-left: var(--n-rail-width);
 `,[C("anchor-link",[w("+, >",[C("anchor-link",`
 margin-top: .5em;
 `)])]),C("anchor-link-background",`
 max-width: 0;
 border-top-right-radius: 10.5px;
 border-bottom-right-radius: 10.5px;
 `),j("show-rail",[w(">",[C("anchor-link","padding-left: 0;")])])]),y("block",[C("anchor-link",`
 margin-bottom: 4px;
 padding: 2px 8px;
 transition: background-color .3s var(--n-bezier);
 background-color: transparent;
 border-radius: var(--n-link-border-radius);
 `,[y("active",`
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
 `,[R("bar",`
 position: absolute;
 left: 0;
 width: var(--n-rail-width);
 height: 21px;
 background-color: #0000;
 transition: 
 top .15s var(--n-bezier),
 background-color .3s var(--n-bezier);
 `,[y("active",{backgroundColor:"var(--n-rail-color-active)"})])]),C("anchor-link",`
 padding: var(--n-link-padding);
 position: relative;
 line-height: 1.5;
 font-size: var(--n-link-font-size);
 min-height: 1.5em;
 display: flex;
 flex-direction: column;
 `,[y("active",[w(">",[R("title",`
 color: var(--n-link-text-color-active);
 `)])]),R("title",`
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
 `,[w("&:hover, &:focus",`
 color: var(--n-link-text-color-hover);
 `),w("&:active",`
 color: var(--n-link-text-color-pressed);
 `)])])]),ho=Object.assign(Object.assign(Object.assign(Object.assign({},H.props),{affix:Boolean}),K),Q),To=I({name:"Anchor",props:ho,setup(e,{slots:r}){const{mergedClsPrefixRef:o,inlineThemeDisabled:t}=L(e),i=H("Anchor","-anchor",vo,Le,e,o),u=S(null),f=E(()=>{const{self:{railColor:h,linkColor:m,railColorActive:T,linkTextColor:b,linkTextColorHover:x,linkTextColorPressed:c,linkTextColorActive:d,linkFontSize:g,railWidth:n,linkPadding:l,borderRadius:k},common:{cubicBezierEaseInOut:B}}=i.value;return{"--n-link-border-radius":k,"--n-link-color":m,"--n-link-font-size":g,"--n-link-text-color":b,"--n-link-text-color-hover":x,"--n-link-text-color-active":d,"--n-link-text-color-pressed":c,"--n-link-padding":l,"--n-bezier":B,"--n-rail-color":h,"--n-rail-color-active":T,"--n-rail-width":n}}),a=t?V("anchor",void 0,f,e):void 0;return{scrollTo(h){var m;(m=u.value)===null||m===void 0||m.setActiveHref(h)},renderAnchor:()=>(a==null||a.onRender(),p(fo,Object.assign({ref:u,style:t?void 0:f.value,class:a==null?void 0:a.themeClass.value},re(e,uo),{mergedClsPrefix:o.value}),r))}},render(){return this.affix?p(to,Object.assign({},re(this,ro)),{default:this.renderAnchor}):this.renderAnchor()}}),go=w([C("list",`
 --n-merged-border-color: var(--n-border-color);
 --n-merged-color: var(--n-color);
 --n-merged-color-hover: var(--n-color-hover);
 margin: 0;
 font-size: var(--n-font-size);
 transition:
 background-color .3s var(--n-bezier),
 color .3s var(--n-bezier),
 border-color .3s var(--n-bezier);
 padding: 0;
 list-style-type: none;
 color: var(--n-text-color);
 background-color: var(--n-merged-color);
 `,[y("show-divider",[C("list-item",[w("&:not(:last-child)",[R("divider",`
 background-color: var(--n-merged-border-color);
 `)])])]),y("clickable",[C("list-item",`
 cursor: pointer;
 `)]),y("bordered",`
 border: 1px solid var(--n-merged-border-color);
 border-radius: var(--n-border-radius);
 `),y("hoverable",[C("list-item",`
 border-radius: var(--n-border-radius);
 `,[w("&:hover",`
 background-color: var(--n-merged-color-hover);
 `,[R("divider",`
 background-color: transparent;
 `)])])]),y("bordered, hoverable",[C("list-item",`
 padding: 12px 20px;
 `),R("header, footer",`
 padding: 12px 20px;
 `)]),R("header, footer",`
 padding: 12px 0;
 box-sizing: border-box;
 transition: border-color .3s var(--n-bezier);
 `,[w("&:not(:last-child)",`
 border-bottom: 1px solid var(--n-merged-border-color);
 `)]),C("list-item",`
 position: relative;
 padding: 12px 0; 
 box-sizing: border-box;
 display: flex;
 flex-wrap: nowrap;
 align-items: center;
 transition:
 background-color .3s var(--n-bezier),
 border-color .3s var(--n-bezier);
 `,[R("prefix",`
 margin-right: 20px;
 flex: 0;
 `),R("suffix",`
 margin-left: 20px;
 flex: 0;
 `),R("main",`
 flex: 1;
 `),R("divider",`
 height: 1px;
 position: absolute;
 bottom: 0;
 left: 0;
 right: 0;
 background-color: transparent;
 transition: background-color .3s var(--n-bezier);
 pointer-events: none;
 `)])]),He(C("list",`
 --n-merged-color-hover: var(--n-color-hover-modal);
 --n-merged-color: var(--n-color-modal);
 --n-merged-border-color: var(--n-border-color-modal);
 `)),Ae(C("list",`
 --n-merged-color-hover: var(--n-color-hover-popover);
 --n-merged-color: var(--n-color-popover);
 --n-merged-border-color: var(--n-border-color-popover);
 `))]),bo=Object.assign(Object.assign({},H.props),{size:{type:String,default:"medium"},bordered:Boolean,clickable:Boolean,hoverable:Boolean,showDivider:{type:Boolean,default:!0}}),se=q("n-list"),Bo=I({name:"List",props:bo,slots:Object,setup(e){const{mergedClsPrefixRef:r,inlineThemeDisabled:o,mergedRtlRef:t}=L(e),i=le("List",t,r),u=H("List","-list",go,Fe,e,r);Y(se,{showDividerRef:D(e,"showDivider"),mergedClsPrefixRef:r});const f=E(()=>{const{common:{cubicBezierEaseInOut:h},self:{fontSize:m,textColor:T,color:b,colorModal:x,colorPopover:c,borderColor:d,borderColorModal:g,borderColorPopover:n,borderRadius:l,colorHover:k,colorHoverModal:B,colorHoverPopover:_}}=u.value;return{"--n-font-size":m,"--n-bezier":h,"--n-text-color":T,"--n-color":b,"--n-border-radius":l,"--n-border-color":d,"--n-border-color-modal":g,"--n-border-color-popover":n,"--n-color-modal":x,"--n-color-popover":c,"--n-color-hover":k,"--n-color-hover-modal":B,"--n-color-hover-popover":_}}),a=o?V("list",void 0,f,e):void 0;return{mergedClsPrefix:r,rtlEnabled:i,cssVars:o?void 0:f,themeClass:a==null?void 0:a.themeClass,onRender:a==null?void 0:a.onRender}},render(){var e;const{$slots:r,mergedClsPrefix:o,onRender:t}=this;return t==null||t(),p("ul",{class:[`${o}-list`,this.rtlEnabled&&`${o}-list--rtl`,this.bordered&&`${o}-list--bordered`,this.showDivider&&`${o}-list--show-divider`,this.hoverable&&`${o}-list--hoverable`,this.clickable&&`${o}-list--clickable`,this.themeClass],style:this.cssVars},r.header?p("div",{class:`${o}-list__header`},r.header()):null,(e=r.default)===null||e===void 0?void 0:e.call(r),r.footer?p("div",{class:`${o}-list__footer`},r.footer()):null)}}),$o=I({name:"ListItem",slots:Object,setup(){const e=F(se,null);return e||Me("list-item","`n-list-item` must be placed in `n-list`."),{showDivider:e.showDividerRef,mergedClsPrefix:e.mergedClsPrefixRef}},render(){const{$slots:e,mergedClsPrefix:r}=this;return p("li",{class:`${r}-list-item`},e.prefix?p("div",{class:`${r}-list-item__prefix`},e.prefix()):null,e.default?p("div",{class:`${r}-list-item__main`},e):null,e.suffix?p("div",{class:`${r}-list-item__suffix`},e.suffix()):null,this.showDivider&&p("div",{class:`${r}-list-item__divider`}))}});export{Ro as N,To as a,yo as b,Bo as c,$o as d,Ze as e,Co as g};
