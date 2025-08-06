import{b as F,g as z,p as at,d as he,i as Xe,h as r,q as Cn,k as Ze,aa as Rn,ab as Sn,t as J,s as Oe,f as Et,C as Nt,J as Lt,F as Ke,w as kn,Y as Fn,$ as zn,c as Se,o as ce,a as it,D as _e,y as kt,a0 as lt,z as He,v as vt,x as oe,B as Tn,_ as _n}from"./index-luhucIo7.js";import{u as On}from"./vue-i18n-B9LBAg3E.js";import{e as In,i as Bn,V as Ft,b as Pn,f as Mn,r as $n,j as Vn,u as En}from"./index-BUneAqZc.js";import{u as xe,V as zt,aA as Nn,aB as bt,aC as Ln,ay as be,a1 as ke,az as An,aD as gt,x as P,y,v as ae,F as At,A as Be,C as ge,D as re,E as Ve,aE as Rt,z as X,G as Ie,ag as Dt,Q as ye,T as Dn,P as Wn,B as St,R as Ge,ab as qe,aF as jn,aG as Hn,M as Un,a7 as Kn,a8 as Gn,a9 as qn,aH as Ct,am as Tt,I as Ye,J as Yn,ar as Xn,at as Zn,K as le,o as Jn,aw as Qn,a6 as pt,a3 as eo}from"./Card-UckbG4bk.js";import{r as $e,a as Wt,b as to,c as no,u as dt,m as oo,i as _t,N as io}from"./create-CpHkX45w.js";import{b as mt,e as Ot,g as lo,c as ro,d as ao,N as so,a as uo}from"./ListItem-Bync71HU.js";import{a as co}from"./Suffix-MqUeb7Om.js";import{u as jt}from"./use-locale-UMwzhk36.js";import"./index-BfIO-SGg.js";import"./light-Rsl4KK1x.js";import"./vue-router-HzT7GYJ4.js";function It(e){return e&-e}class Ht{constructor(t,o){this.l=t,this.min=o;const l=new Array(t+1);for(let i=0;i<t+1;++i)l[i]=0;this.ft=l}add(t,o){if(o===0)return;const{l,ft:i}=this;for(t+=1;t<=l;)i[t]+=o,t+=It(t)}get(t){return this.sum(t+1)-this.sum(t)}sum(t){if(t===void 0&&(t=this.l),t<=0)return 0;const{ft:o,min:l,l:i}=this;if(t>i)throw new Error("[FinweckTree.sum]: `i` is larger than length.");let d=t*l;for(;t>0;)d+=o[t],t-=It(t);return d}getBound(t){let o=0,l=this.l;for(;l>o;){const i=Math.floor((o+l)/2),d=this.sum(i);if(d>t){l=i;continue}else if(d<t){if(o===i)return this.sum(o+1)<=t?o+1:i;o=i}else return i}return o}}let rt;function ho(){return typeof document>"u"?!1:(rt===void 0&&("matchMedia"in window?rt=window.matchMedia("(pointer:coarse)").matches:rt=!1),rt)}let wt;function Bt(){return typeof document>"u"?1:(wt===void 0&&(wt="chrome"in window?window.devicePixelRatio:1),wt)}const Ut="VVirtualListXScroll";function fo({columnsRef:e,renderColRef:t,renderItemWithColsRef:o}){const l=F(0),i=F(0),d=z(()=>{const p=e.value;if(p.length===0)return null;const h=new Ht(p.length,0);return p.forEach((b,f)=>{h.add(f,b.width)}),h}),s=xe(()=>{const p=d.value;return p!==null?Math.max(p.getBound(i.value)-1,0):0}),a=p=>{const h=d.value;return h!==null?h.sum(p):0},g=xe(()=>{const p=d.value;return p!==null?Math.min(p.getBound(i.value+l.value)+1,e.value.length-1):0});return at(Ut,{startIndexRef:s,endIndexRef:g,columnsRef:e,renderColRef:t,renderItemWithColsRef:o,getLeft:a}),{listWidthRef:l,scrollLeftRef:i}}const Pt=he({name:"VirtualListRow",props:{index:{type:Number,required:!0},item:{type:Object,required:!0}},setup(){const{startIndexRef:e,endIndexRef:t,columnsRef:o,getLeft:l,renderColRef:i,renderItemWithColsRef:d}=Xe(Ut);return{startIndex:e,endIndex:t,columns:o,renderCol:i,renderItemWithCols:d,getLeft:l}},render(){const{startIndex:e,endIndex:t,columns:o,renderCol:l,renderItemWithCols:i,getLeft:d,item:s}=this;if(i!=null)return i({itemIndex:this.index,startColIndex:e,endColIndex:t,allColumns:o,item:s,getLeft:d});if(l!=null){const a=[];for(let g=e;g<=t;++g){const p=o[g];a.push(l({column:p,left:d(g),item:s}))}return a}return null}}),vo=bt(".v-vl",{maxHeight:"inherit",height:"100%",overflow:"auto",minWidth:"1px"},[bt("&:not(.v-vl--show-scrollbar)",{scrollbarWidth:"none"},[bt("&::-webkit-scrollbar, &::-webkit-scrollbar-track-piece, &::-webkit-scrollbar-thumb",{width:0,height:0,display:"none"})])]),bo=he({name:"VirtualList",inheritAttrs:!1,props:{showScrollbar:{type:Boolean,default:!0},columns:{type:Array,default:()=>[]},renderCol:Function,renderItemWithCols:Function,items:{type:Array,default:()=>[]},itemSize:{type:Number,required:!0},itemResizable:Boolean,itemsStyle:[String,Object],visibleItemsTag:{type:[String,Object],default:"div"},visibleItemsProps:Object,ignoreItemResize:Boolean,onScroll:Function,onWheel:Function,onResize:Function,defaultScrollKey:[Number,String],defaultScrollIndex:Number,keyField:{type:String,default:"key"},paddingTop:{type:[Number,String],default:0},paddingBottom:{type:[Number,String],default:0}},setup(e){const t=Nn();vo.mount({id:"vueuc/virtual-list",head:!0,anchorMetaName:Ln,ssr:t}),Ze(()=>{const{defaultScrollIndex:u,defaultScrollKey:x}=e;u!=null?U({index:u}):x!=null&&U({key:x})});let o=!1,l=!1;Rn(()=>{if(o=!1,!l){l=!0;return}U({top:S.value,left:s.value})}),Sn(()=>{o=!0,l||(l=!0)});const i=xe(()=>{if(e.renderCol==null&&e.renderItemWithCols==null||e.columns.length===0)return;let u=0;return e.columns.forEach(x=>{u+=x.width}),u}),d=z(()=>{const u=new Map,{keyField:x}=e;return e.items.forEach(($,H)=>{u.set($[x],H)}),u}),{scrollLeftRef:s,listWidthRef:a}=fo({columnsRef:J(e,"columns"),renderColRef:J(e,"renderCol"),renderItemWithColsRef:J(e,"renderItemWithCols")}),g=F(null),p=F(void 0),h=new Map,b=z(()=>{const{items:u,itemSize:x,keyField:$}=e,H=new Ht(u.length,x);return u.forEach((Z,V)=>{const K=Z[$],D=h.get(K);D!==void 0&&H.add(V,D)}),H}),f=F(0),S=F(0),C=xe(()=>Math.max(b.value.getBound(S.value-be(e.paddingTop))-1,0)),A=z(()=>{const{value:u}=p;if(u===void 0)return[];const{items:x,itemSize:$}=e,H=C.value,Z=Math.min(H+Math.ceil(u/$+1),x.length-1),V=[];for(let K=H;K<=Z;++K)V.push(x[K]);return V}),U=(u,x)=>{if(typeof u=="number"){I(u,x,"auto");return}const{left:$,top:H,index:Z,key:V,position:K,behavior:D,debounce:Y=!0}=u;if($!==void 0||H!==void 0)I($,H,D);else if(Z!==void 0)O(Z,D,Y);else if(V!==void 0){const c=d.value.get(V);c!==void 0&&O(c,D,Y)}else K==="bottom"?I(0,Number.MAX_SAFE_INTEGER,D):K==="top"&&I(0,0,D)};let _,k=null;function O(u,x,$){const{value:H}=b,Z=H.sum(u)+be(e.paddingTop);if(!$)g.value.scrollTo({left:0,top:Z,behavior:x});else{_=u,k!==null&&window.clearTimeout(k),k=window.setTimeout(()=>{_=void 0,k=null},16);const{scrollTop:V,offsetHeight:K}=g.value;if(Z>V){const D=H.get(u);Z+D<=V+K||g.value.scrollTo({left:0,top:Z+D-K,behavior:x})}else g.value.scrollTo({left:0,top:Z,behavior:x})}}function I(u,x,$){g.value.scrollTo({left:u,top:x,behavior:$})}function B(u,x){var $,H,Z;if(o||e.ignoreItemResize||ie(x.target))return;const{value:V}=b,K=d.value.get(u),D=V.get(K),Y=(Z=(H=($=x.borderBoxSize)===null||$===void 0?void 0:$[0])===null||H===void 0?void 0:H.blockSize)!==null&&Z!==void 0?Z:x.contentRect.height;if(Y===D)return;Y-e.itemSize===0?h.delete(u):h.set(u,Y-e.itemSize);const w=Y-D;if(w===0)return;V.add(K,w);const j=g.value;if(j!=null){if(_===void 0){const de=V.sum(K);j.scrollTop>de&&j.scrollBy(0,w)}else if(K<_)j.scrollBy(0,w);else if(K===_){const de=V.sum(K);Y+de>j.scrollTop+j.offsetHeight&&j.scrollBy(0,w)}Q()}f.value++}const G=!ho();let q=!1;function M(u){var x;(x=e.onScroll)===null||x===void 0||x.call(e,u),(!G||!q)&&Q()}function se(u){var x;if((x=e.onWheel)===null||x===void 0||x.call(e,u),G){const $=g.value;if($!=null){if(u.deltaX===0&&($.scrollTop===0&&u.deltaY<=0||$.scrollTop+$.offsetHeight>=$.scrollHeight&&u.deltaY>=0))return;u.preventDefault(),$.scrollTop+=u.deltaY/Bt(),$.scrollLeft+=u.deltaX/Bt(),Q(),q=!0,An(()=>{q=!1})}}}function te(u){if(o||ie(u.target))return;if(e.renderCol==null&&e.renderItemWithCols==null){if(u.contentRect.height===p.value)return}else if(u.contentRect.height===p.value&&u.contentRect.width===a.value)return;p.value=u.contentRect.height,a.value=u.contentRect.width;const{onResize:x}=e;x!==void 0&&x(u)}function Q(){const{value:u}=g;u!=null&&(S.value=u.scrollTop,s.value=u.scrollLeft)}function ie(u){let x=u;for(;x!==null;){if(x.style.display==="none")return!0;x=x.parentElement}return!1}return{listHeight:p,listStyle:{overflow:"auto"},keyToIndex:d,itemsStyle:z(()=>{const{itemResizable:u}=e,x=ke(b.value.sum());return f.value,[e.itemsStyle,{boxSizing:"content-box",width:ke(i.value),height:u?"":x,minHeight:u?x:"",paddingTop:ke(e.paddingTop),paddingBottom:ke(e.paddingBottom)}]}),visibleItemsStyle:z(()=>(f.value,{transform:`translateY(${ke(b.value.sum(C.value))})`})),viewportItems:A,listElRef:g,itemsElRef:F(null),scrollTo:U,handleListResize:te,handleListScroll:M,handleListWheel:se,handleItemResize:B}},render(){const{itemResizable:e,keyField:t,keyToIndex:o,visibleItemsTag:l}=this;return r(zt,{onResize:this.handleListResize},{default:()=>{var i,d;return r("div",Cn(this.$attrs,{class:["v-vl",this.showScrollbar&&"v-vl--show-scrollbar"],onScroll:this.handleListScroll,onWheel:this.handleListWheel,ref:"listElRef"}),[this.items.length!==0?r("div",{ref:"itemsElRef",class:"v-vl-items",style:this.itemsStyle},[r(l,Object.assign({class:"v-vl-visible-items",style:this.visibleItemsStyle},this.visibleItemsProps),{default:()=>{const{renderCol:s,renderItemWithCols:a}=this;return this.viewportItems.map(g=>{const p=g[t],h=o.get(p),b=s!=null?r(Pt,{index:h,item:g}):void 0,f=a!=null?r(Pt,{index:h,item:g}):void 0,S=this.$slots.default({item:g,renderedCols:b,renderedItemWithCols:f,index:h})[0];return e?r(zt,{key:p,onResize:C=>this.handleItemResize(p,C)},{default:()=>S}):(S.key=p,S)})}})]):(d=(i=this.$slots).empty)===null||d===void 0?void 0:d.call(i)])}})}});function Kt(e,t){t&&(Ze(()=>{const{value:o}=e;o&&gt.registerHandler(o,t)}),Oe(e,(o,l)=>{l&&gt.unregisterHandler(l)},{deep:!1}),Et(()=>{const{value:o}=e;o&&gt.unregisterHandler(o)}))}function yt(e){const t=e.filter(o=>o!==void 0);if(t.length!==0)return t.length===1?t[0]:o=>{e.forEach(l=>{l&&l(o)})}}const go=he({name:"Checkmark",render(){return r("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 16 16"},r("g",{fill:"none"},r("path",{d:"M14.046 3.486a.75.75 0 0 1-.032 1.06l-7.93 7.474a.85.85 0 0 1-1.188-.022l-2.68-2.72a.75.75 0 1 1 1.068-1.053l2.234 2.267l7.468-7.038a.75.75 0 0 1 1.06.032z",fill:"currentColor"})))}}),po=he({name:"Empty",render(){return r("svg",{viewBox:"0 0 28 28",fill:"none",xmlns:"http://www.w3.org/2000/svg"},r("path",{d:"M26 7.5C26 11.0899 23.0899 14 19.5 14C15.9101 14 13 11.0899 13 7.5C13 3.91015 15.9101 1 19.5 1C23.0899 1 26 3.91015 26 7.5ZM16.8536 4.14645C16.6583 3.95118 16.3417 3.95118 16.1464 4.14645C15.9512 4.34171 15.9512 4.65829 16.1464 4.85355L18.7929 7.5L16.1464 10.1464C15.9512 10.3417 15.9512 10.6583 16.1464 10.8536C16.3417 11.0488 16.6583 11.0488 16.8536 10.8536L19.5 8.20711L22.1464 10.8536C22.3417 11.0488 22.6583 11.0488 22.8536 10.8536C23.0488 10.6583 23.0488 10.3417 22.8536 10.1464L20.2071 7.5L22.8536 4.85355C23.0488 4.65829 23.0488 4.34171 22.8536 4.14645C22.6583 3.95118 22.3417 3.95118 22.1464 4.14645L19.5 6.79289L16.8536 4.14645Z",fill:"currentColor"}),r("path",{d:"M25 22.75V12.5991C24.5572 13.0765 24.053 13.4961 23.5 13.8454V16H17.5L17.3982 16.0068C17.0322 16.0565 16.75 16.3703 16.75 16.75C16.75 18.2688 15.5188 19.5 14 19.5C12.4812 19.5 11.25 18.2688 11.25 16.75L11.2432 16.6482C11.1935 16.2822 10.8797 16 10.5 16H4.5V7.25C4.5 6.2835 5.2835 5.5 6.25 5.5H12.2696C12.4146 4.97463 12.6153 4.47237 12.865 4H6.25C4.45507 4 3 5.45507 3 7.25V22.75C3 24.5449 4.45507 26 6.25 26H21.75C23.5449 26 25 24.5449 25 22.75ZM4.5 22.75V17.5H9.81597L9.85751 17.7041C10.2905 19.5919 11.9808 21 14 21L14.215 20.9947C16.2095 20.8953 17.842 19.4209 18.184 17.5H23.5V22.75C23.5 23.7165 22.7165 24.5 21.75 24.5H6.25C5.2835 24.5 4.5 23.7165 4.5 22.75Z",fill:"currentColor"}))}}),mo=he({props:{onFocus:Function,onBlur:Function},setup(e){return()=>r("div",{style:"width: 0; height: 0",tabindex:0,onFocus:e.onFocus,onBlur:e.onBlur})}}),wo=P("empty",`
 display: flex;
 flex-direction: column;
 align-items: center;
 font-size: var(--n-font-size);
`,[y("icon",`
 width: var(--n-icon-size);
 height: var(--n-icon-size);
 font-size: var(--n-icon-size);
 line-height: var(--n-icon-size);
 color: var(--n-icon-color);
 transition:
 color .3s var(--n-bezier);
 `,[ae("+",[y("description",`
 margin-top: 8px;
 `)])]),y("description",`
 transition: color .3s var(--n-bezier);
 color: var(--n-text-color);
 `),y("extra",`
 text-align: center;
 transition: color .3s var(--n-bezier);
 margin-top: 12px;
 color: var(--n-extra-text-color);
 `)]),yo=Object.assign(Object.assign({},ge.props),{description:String,showDescription:{type:Boolean,default:!0},showIcon:{type:Boolean,default:!0},size:{type:String,default:"medium"},renderIcon:Function}),xo=he({name:"Empty",props:yo,slots:Object,setup(e){const{mergedClsPrefixRef:t,inlineThemeDisabled:o,mergedComponentPropsRef:l}=Be(e),i=ge("Empty","-empty",wo,In,e,t),{localeRef:d}=jt("Empty"),s=z(()=>{var h,b,f;return(h=e.description)!==null&&h!==void 0?h:(f=(b=l==null?void 0:l.value)===null||b===void 0?void 0:b.Empty)===null||f===void 0?void 0:f.description}),a=z(()=>{var h,b;return((b=(h=l==null?void 0:l.value)===null||h===void 0?void 0:h.Empty)===null||b===void 0?void 0:b.renderIcon)||(()=>r(po,null))}),g=z(()=>{const{size:h}=e,{common:{cubicBezierEaseInOut:b},self:{[re("iconSize",h)]:f,[re("fontSize",h)]:S,textColor:C,iconColor:A,extraTextColor:U}}=i.value;return{"--n-icon-size":f,"--n-font-size":S,"--n-bezier":b,"--n-text-color":C,"--n-icon-color":A,"--n-extra-text-color":U}}),p=o?Ve("empty",z(()=>{let h="";const{size:b}=e;return h+=b[0],h}),g,e):void 0;return{mergedClsPrefix:t,mergedRenderIcon:a,localizedDescription:z(()=>s.value||d.value.description),cssVars:o?void 0:g,themeClass:p==null?void 0:p.themeClass,onRender:p==null?void 0:p.onRender}},render(){const{$slots:e,mergedClsPrefix:t,onRender:o}=this;return o==null||o(),r("div",{class:[`${t}-empty`,this.themeClass],style:this.cssVars},this.showIcon?r("div",{class:`${t}-empty__icon`},e.icon?e.icon():r(At,{clsPrefix:t},{default:this.mergedRenderIcon})):null,this.showDescription?r("div",{class:`${t}-empty__description`},e.default?e.default():this.localizedDescription):null,e.extra?r("div",{class:`${t}-empty__extra`},e.extra()):null)}}),Mt=he({name:"NBaseSelectGroupHeader",props:{clsPrefix:{type:String,required:!0},tmNode:{type:Object,required:!0}},setup(){const{renderLabelRef:e,renderOptionRef:t,labelFieldRef:o,nodePropsRef:l}=Xe(Rt);return{labelField:o,nodeProps:l,renderLabel:e,renderOption:t}},render(){const{clsPrefix:e,renderLabel:t,renderOption:o,nodeProps:l,tmNode:{rawNode:i}}=this,d=l==null?void 0:l(i),s=t?t(i,!1):$e(i[this.labelField],i,!1),a=r("div",Object.assign({},d,{class:[`${e}-base-select-group-header`,d==null?void 0:d.class]}),s);return i.render?i.render({node:a,option:i}):o?o({node:a,option:i,selected:!1}):a}});function Co(e,t){return r(Nt,{name:"fade-in-scale-up-transition"},{default:()=>e?r(At,{clsPrefix:t,class:`${t}-base-select-option__check`},{default:()=>r(go)}):null})}const $t=he({name:"NBaseSelectOption",props:{clsPrefix:{type:String,required:!0},tmNode:{type:Object,required:!0}},setup(e){const{valueRef:t,pendingTmNodeRef:o,multipleRef:l,valueSetRef:i,renderLabelRef:d,renderOptionRef:s,labelFieldRef:a,valueFieldRef:g,showCheckmarkRef:p,nodePropsRef:h,handleOptionClick:b,handleOptionMouseEnter:f}=Xe(Rt),S=xe(()=>{const{value:_}=o;return _?e.tmNode.key===_.key:!1});function C(_){const{tmNode:k}=e;k.disabled||b(_,k)}function A(_){const{tmNode:k}=e;k.disabled||f(_,k)}function U(_){const{tmNode:k}=e,{value:O}=S;k.disabled||O||f(_,k)}return{multiple:l,isGrouped:xe(()=>{const{tmNode:_}=e,{parent:k}=_;return k&&k.rawNode.type==="group"}),showCheckmark:p,nodeProps:h,isPending:S,isSelected:xe(()=>{const{value:_}=t,{value:k}=l;if(_===null)return!1;const O=e.tmNode.rawNode[g.value];if(k){const{value:I}=i;return I.has(O)}else return _===O}),labelField:a,renderLabel:d,renderOption:s,handleMouseMove:U,handleMouseEnter:A,handleClick:C}},render(){const{clsPrefix:e,tmNode:{rawNode:t},isSelected:o,isPending:l,isGrouped:i,showCheckmark:d,nodeProps:s,renderOption:a,renderLabel:g,handleClick:p,handleMouseEnter:h,handleMouseMove:b}=this,f=Co(o,e),S=g?[g(t,o),d&&f]:[$e(t[this.labelField],t,o),d&&f],C=s==null?void 0:s(t),A=r("div",Object.assign({},C,{class:[`${e}-base-select-option`,t.class,C==null?void 0:C.class,{[`${e}-base-select-option--disabled`]:t.disabled,[`${e}-base-select-option--selected`]:o,[`${e}-base-select-option--grouped`]:i,[`${e}-base-select-option--pending`]:l,[`${e}-base-select-option--show-checkmark`]:d}],style:[(C==null?void 0:C.style)||"",t.style||""],onClick:yt([p,C==null?void 0:C.onClick]),onMouseenter:yt([h,C==null?void 0:C.onMouseenter]),onMousemove:yt([b,C==null?void 0:C.onMousemove])}),r("div",{class:`${e}-base-select-option__content`},S));return t.render?t.render({node:A,option:t,selected:o}):a?a({node:A,option:t,selected:o}):A}}),Ro=P("base-select-menu",`
 line-height: 1.5;
 outline: none;
 z-index: 0;
 position: relative;
 border-radius: var(--n-border-radius);
 transition:
 background-color .3s var(--n-bezier),
 box-shadow .3s var(--n-bezier);
 background-color: var(--n-color);
`,[P("scrollbar",`
 max-height: var(--n-height);
 `),P("virtual-list",`
 max-height: var(--n-height);
 `),P("base-select-option",`
 min-height: var(--n-option-height);
 font-size: var(--n-option-font-size);
 display: flex;
 align-items: center;
 `,[y("content",`
 z-index: 1;
 white-space: nowrap;
 text-overflow: ellipsis;
 overflow: hidden;
 `)]),P("base-select-group-header",`
 min-height: var(--n-option-height);
 font-size: .93em;
 display: flex;
 align-items: center;
 `),P("base-select-menu-option-wrapper",`
 position: relative;
 width: 100%;
 `),y("loading, empty",`
 display: flex;
 padding: 12px 32px;
 flex: 1;
 justify-content: center;
 `),y("loading",`
 color: var(--n-loading-color);
 font-size: var(--n-loading-size);
 `),y("header",`
 padding: 8px var(--n-option-padding-left);
 font-size: var(--n-option-font-size);
 transition: 
 color .3s var(--n-bezier),
 border-color .3s var(--n-bezier);
 border-bottom: 1px solid var(--n-action-divider-color);
 color: var(--n-action-text-color);
 `),y("action",`
 padding: 8px var(--n-option-padding-left);
 font-size: var(--n-option-font-size);
 transition: 
 color .3s var(--n-bezier),
 border-color .3s var(--n-bezier);
 border-top: 1px solid var(--n-action-divider-color);
 color: var(--n-action-text-color);
 `),P("base-select-group-header",`
 position: relative;
 cursor: default;
 padding: var(--n-option-padding);
 color: var(--n-group-header-text-color);
 `),P("base-select-option",`
 cursor: pointer;
 position: relative;
 padding: var(--n-option-padding);
 transition:
 color .3s var(--n-bezier),
 opacity .3s var(--n-bezier);
 box-sizing: border-box;
 color: var(--n-option-text-color);
 opacity: 1;
 `,[X("show-checkmark",`
 padding-right: calc(var(--n-option-padding-right) + 20px);
 `),ae("&::before",`
 content: "";
 position: absolute;
 left: 4px;
 right: 4px;
 top: 0;
 bottom: 0;
 border-radius: var(--n-border-radius);
 transition: background-color .3s var(--n-bezier);
 `),ae("&:active",`
 color: var(--n-option-text-color-pressed);
 `),X("grouped",`
 padding-left: calc(var(--n-option-padding-left) * 1.5);
 `),X("pending",[ae("&::before",`
 background-color: var(--n-option-color-pending);
 `)]),X("selected",`
 color: var(--n-option-text-color-active);
 `,[ae("&::before",`
 background-color: var(--n-option-color-active);
 `),X("pending",[ae("&::before",`
 background-color: var(--n-option-color-active-pending);
 `)])]),X("disabled",`
 cursor: not-allowed;
 `,[Ie("selected",`
 color: var(--n-option-text-color-disabled);
 `),X("selected",`
 opacity: var(--n-option-opacity-disabled);
 `)]),y("check",`
 font-size: 16px;
 position: absolute;
 right: calc(var(--n-option-padding-right) - 4px);
 top: calc(50% - 7px);
 color: var(--n-option-check-color);
 transition: color .3s var(--n-bezier);
 `,[Dt({enterScale:"0.5"})])])]),So=he({name:"InternalSelectMenu",props:Object.assign(Object.assign({},ge.props),{clsPrefix:{type:String,required:!0},scrollable:{type:Boolean,default:!0},treeMate:{type:Object,required:!0},multiple:Boolean,size:{type:String,default:"medium"},value:{type:[String,Number,Array],default:null},autoPending:Boolean,virtualScroll:{type:Boolean,default:!0},show:{type:Boolean,default:!0},labelField:{type:String,default:"label"},valueField:{type:String,default:"value"},loading:Boolean,focusable:Boolean,renderLabel:Function,renderOption:Function,nodeProps:Function,showCheckmark:{type:Boolean,default:!0},onMousedown:Function,onScroll:Function,onFocus:Function,onBlur:Function,onKeyup:Function,onKeydown:Function,onTabOut:Function,onMouseenter:Function,onMouseleave:Function,onResize:Function,resetMenuOnOptionsChange:{type:Boolean,default:!0},inlineThemeDisabled:Boolean,onToggle:Function}),setup(e){const{mergedClsPrefixRef:t,mergedRtlRef:o}=Be(e),l=St("InternalSelectMenu",o,t),i=ge("InternalSelectMenu","-internal-select-menu",Ro,Bn,e,J(e,"clsPrefix")),d=F(null),s=F(null),a=F(null),g=z(()=>e.treeMate.getFlattenedNodes()),p=z(()=>to(g.value)),h=F(null);function b(){const{treeMate:c}=e;let w=null;const{value:j}=e;j===null?w=c.getFirstAvailableNode():(e.multiple?w=c.getNode((j||[])[(j||[]).length-1]):w=c.getNode(j),(!w||w.disabled)&&(w=c.getFirstAvailableNode())),x(w||null)}function f(){const{value:c}=h;c&&!e.treeMate.getNode(c.key)&&(h.value=null)}let S;Oe(()=>e.show,c=>{c?S=Oe(()=>e.treeMate,()=>{e.resetMenuOnOptionsChange?(e.autoPending?b():f(),Lt($)):f()},{immediate:!0}):S==null||S()},{immediate:!0}),Et(()=>{S==null||S()});const C=z(()=>be(i.value.self[re("optionHeight",e.size)])),A=z(()=>Ge(i.value.self[re("padding",e.size)])),U=z(()=>e.multiple&&Array.isArray(e.value)?new Set(e.value):new Set),_=z(()=>{const c=g.value;return c&&c.length===0});function k(c){const{onToggle:w}=e;w&&w(c)}function O(c){const{onScroll:w}=e;w&&w(c)}function I(c){var w;(w=a.value)===null||w===void 0||w.sync(),O(c)}function B(){var c;(c=a.value)===null||c===void 0||c.sync()}function G(){const{value:c}=h;return c||null}function q(c,w){w.disabled||x(w,!1)}function M(c,w){w.disabled||k(w)}function se(c){var w;qe(c,"action")||(w=e.onKeyup)===null||w===void 0||w.call(e,c)}function te(c){var w;qe(c,"action")||(w=e.onKeydown)===null||w===void 0||w.call(e,c)}function Q(c){var w;(w=e.onMousedown)===null||w===void 0||w.call(e,c),!e.focusable&&c.preventDefault()}function ie(){const{value:c}=h;c&&x(c.getNext({loop:!0}),!0)}function u(){const{value:c}=h;c&&x(c.getPrev({loop:!0}),!0)}function x(c,w=!1){h.value=c,w&&$()}function $(){var c,w;const j=h.value;if(!j)return;const de=p.value(j.key);de!==null&&(e.virtualScroll?(c=s.value)===null||c===void 0||c.scrollTo({index:de}):(w=a.value)===null||w===void 0||w.scrollTo({index:de,elSize:C.value}))}function H(c){var w,j;!((w=d.value)===null||w===void 0)&&w.contains(c.target)&&((j=e.onFocus)===null||j===void 0||j.call(e,c))}function Z(c){var w,j;!((w=d.value)===null||w===void 0)&&w.contains(c.relatedTarget)||(j=e.onBlur)===null||j===void 0||j.call(e,c)}at(Rt,{handleOptionMouseEnter:q,handleOptionClick:M,valueSetRef:U,pendingTmNodeRef:h,nodePropsRef:J(e,"nodeProps"),showCheckmarkRef:J(e,"showCheckmark"),multipleRef:J(e,"multiple"),valueRef:J(e,"value"),renderLabelRef:J(e,"renderLabel"),renderOptionRef:J(e,"renderOption"),labelFieldRef:J(e,"labelField"),valueFieldRef:J(e,"valueField")}),at(jn,d),Ze(()=>{const{value:c}=a;c&&c.sync()});const V=z(()=>{const{size:c}=e,{common:{cubicBezierEaseInOut:w},self:{height:j,borderRadius:de,color:pe,groupHeaderTextColor:me,actionDividerColor:fe,optionTextColorPressed:ve,optionTextColor:Pe,optionTextColorDisabled:Ce,optionTextColorActive:Ee,optionOpacityDisabled:Ne,optionCheckColor:Le,actionTextColor:Ae,optionColorPending:Fe,optionColorActive:ze,loadingColor:De,loadingSize:We,optionColorActivePending:je,[re("optionFontSize",c)]:Me,[re("optionHeight",c)]:Te,[re("optionPadding",c)]:ue}}=i.value;return{"--n-height":j,"--n-action-divider-color":fe,"--n-action-text-color":Ae,"--n-bezier":w,"--n-border-radius":de,"--n-color":pe,"--n-option-font-size":Me,"--n-group-header-text-color":me,"--n-option-check-color":Le,"--n-option-color-pending":Fe,"--n-option-color-active":ze,"--n-option-color-active-pending":je,"--n-option-height":Te,"--n-option-opacity-disabled":Ne,"--n-option-text-color":Pe,"--n-option-text-color-active":Ee,"--n-option-text-color-disabled":Ce,"--n-option-text-color-pressed":ve,"--n-option-padding":ue,"--n-option-padding-left":Ge(ue,"left"),"--n-option-padding-right":Ge(ue,"right"),"--n-loading-color":De,"--n-loading-size":We}}),{inlineThemeDisabled:K}=e,D=K?Ve("internal-select-menu",z(()=>e.size[0]),V,e):void 0,Y={selfRef:d,next:ie,prev:u,getPendingTmNode:G};return Kt(d,e.onResize),Object.assign({mergedTheme:i,mergedClsPrefix:t,rtlEnabled:l,virtualListRef:s,scrollbarRef:a,itemSize:C,padding:A,flattenedNodes:g,empty:_,virtualListContainer(){const{value:c}=s;return c==null?void 0:c.listElRef},virtualListContent(){const{value:c}=s;return c==null?void 0:c.itemsElRef},doScroll:O,handleFocusin:H,handleFocusout:Z,handleKeyUp:se,handleKeyDown:te,handleMouseDown:Q,handleVirtualListResize:B,handleVirtualListScroll:I,cssVars:K?void 0:V,themeClass:D==null?void 0:D.themeClass,onRender:D==null?void 0:D.onRender},Y)},render(){const{$slots:e,virtualScroll:t,clsPrefix:o,mergedTheme:l,themeClass:i,onRender:d}=this;return d==null||d(),r("div",{ref:"selfRef",tabindex:this.focusable?0:-1,class:[`${o}-base-select-menu`,this.rtlEnabled&&`${o}-base-select-menu--rtl`,i,this.multiple&&`${o}-base-select-menu--multiple`],style:this.cssVars,onFocusin:this.handleFocusin,onFocusout:this.handleFocusout,onKeyup:this.handleKeyUp,onKeydown:this.handleKeyDown,onMousedown:this.handleMouseDown,onMouseenter:this.onMouseenter,onMouseleave:this.onMouseleave},ye(e.header,s=>s&&r("div",{class:`${o}-base-select-menu__header`,"data-header":!0,key:"header"},s)),this.loading?r("div",{class:`${o}-base-select-menu__loading`},r(Wt,{clsPrefix:o,strokeWidth:20})):this.empty?r("div",{class:`${o}-base-select-menu__empty`,"data-empty":!0},Wn(e.empty,()=>[r(xo,{theme:l.peers.Empty,themeOverrides:l.peerOverrides.Empty,size:this.size})])):r(Dn,{ref:"scrollbarRef",theme:l.peers.Scrollbar,themeOverrides:l.peerOverrides.Scrollbar,scrollable:this.scrollable,container:t?this.virtualListContainer:void 0,content:t?this.virtualListContent:void 0,onScroll:t?void 0:this.doScroll},{default:()=>t?r(bo,{ref:"virtualListRef",class:`${o}-virtual-list`,items:this.flattenedNodes,itemSize:this.itemSize,showScrollbar:!1,paddingTop:this.padding.top,paddingBottom:this.padding.bottom,onResize:this.handleVirtualListResize,onScroll:this.handleVirtualListScroll,itemResizable:!0},{default:({item:s})=>s.isGroup?r(Mt,{key:s.key,clsPrefix:o,tmNode:s}):s.ignored?null:r($t,{clsPrefix:o,key:s.key,tmNode:s})}):r("div",{class:`${o}-base-select-menu-option-wrapper`,style:{paddingTop:this.padding.top,paddingBottom:this.padding.bottom}},this.flattenedNodes.map(s=>s.isGroup?r(Mt,{key:s.key,clsPrefix:o,tmNode:s}):r($t,{clsPrefix:o,key:s.key,tmNode:s})))}),ye(e.action,s=>s&&[r("div",{class:`${o}-base-select-menu__action`,"data-action":!0,key:"action"},s),r(mo,{onFocus:this.onTabOut,key:"focus-detector"})]))}}),ko=ae([P("base-selection",`
 --n-padding-single: var(--n-padding-single-top) var(--n-padding-single-right) var(--n-padding-single-bottom) var(--n-padding-single-left);
 --n-padding-multiple: var(--n-padding-multiple-top) var(--n-padding-multiple-right) var(--n-padding-multiple-bottom) var(--n-padding-multiple-left);
 position: relative;
 z-index: auto;
 box-shadow: none;
 width: 100%;
 max-width: 100%;
 display: inline-block;
 vertical-align: bottom;
 border-radius: var(--n-border-radius);
 min-height: var(--n-height);
 line-height: 1.5;
 font-size: var(--n-font-size);
 `,[P("base-loading",`
 color: var(--n-loading-color);
 `),P("base-selection-tags","min-height: var(--n-height);"),y("border, state-border",`
 position: absolute;
 left: 0;
 right: 0;
 top: 0;
 bottom: 0;
 pointer-events: none;
 border: var(--n-border);
 border-radius: inherit;
 transition:
 box-shadow .3s var(--n-bezier),
 border-color .3s var(--n-bezier);
 `),y("state-border",`
 z-index: 1;
 border-color: #0000;
 `),P("base-suffix",`
 cursor: pointer;
 position: absolute;
 top: 50%;
 transform: translateY(-50%);
 right: 10px;
 `,[y("arrow",`
 font-size: var(--n-arrow-size);
 color: var(--n-arrow-color);
 transition: color .3s var(--n-bezier);
 `)]),P("base-selection-overlay",`
 display: flex;
 align-items: center;
 white-space: nowrap;
 pointer-events: none;
 position: absolute;
 top: 0;
 right: 0;
 bottom: 0;
 left: 0;
 padding: var(--n-padding-single);
 transition: color .3s var(--n-bezier);
 `,[y("wrapper",`
 flex-basis: 0;
 flex-grow: 1;
 overflow: hidden;
 text-overflow: ellipsis;
 `)]),P("base-selection-placeholder",`
 color: var(--n-placeholder-color);
 `,[y("inner",`
 max-width: 100%;
 overflow: hidden;
 `)]),P("base-selection-tags",`
 cursor: pointer;
 outline: none;
 box-sizing: border-box;
 position: relative;
 z-index: auto;
 display: flex;
 padding: var(--n-padding-multiple);
 flex-wrap: wrap;
 align-items: center;
 width: 100%;
 vertical-align: bottom;
 background-color: var(--n-color);
 border-radius: inherit;
 transition:
 color .3s var(--n-bezier),
 box-shadow .3s var(--n-bezier),
 background-color .3s var(--n-bezier);
 `),P("base-selection-label",`
 height: var(--n-height);
 display: inline-flex;
 width: 100%;
 vertical-align: bottom;
 cursor: pointer;
 outline: none;
 z-index: auto;
 box-sizing: border-box;
 position: relative;
 transition:
 color .3s var(--n-bezier),
 box-shadow .3s var(--n-bezier),
 background-color .3s var(--n-bezier);
 border-radius: inherit;
 background-color: var(--n-color);
 align-items: center;
 `,[P("base-selection-input",`
 font-size: inherit;
 line-height: inherit;
 outline: none;
 cursor: pointer;
 box-sizing: border-box;
 border:none;
 width: 100%;
 padding: var(--n-padding-single);
 background-color: #0000;
 color: var(--n-text-color);
 transition: color .3s var(--n-bezier);
 caret-color: var(--n-caret-color);
 `,[y("content",`
 text-overflow: ellipsis;
 overflow: hidden;
 white-space: nowrap; 
 `)]),y("render-label",`
 color: var(--n-text-color);
 `)]),Ie("disabled",[ae("&:hover",[y("state-border",`
 box-shadow: var(--n-box-shadow-hover);
 border: var(--n-border-hover);
 `)]),X("focus",[y("state-border",`
 box-shadow: var(--n-box-shadow-focus);
 border: var(--n-border-focus);
 `)]),X("active",[y("state-border",`
 box-shadow: var(--n-box-shadow-active);
 border: var(--n-border-active);
 `),P("base-selection-label","background-color: var(--n-color-active);"),P("base-selection-tags","background-color: var(--n-color-active);")])]),X("disabled","cursor: not-allowed;",[y("arrow",`
 color: var(--n-arrow-color-disabled);
 `),P("base-selection-label",`
 cursor: not-allowed;
 background-color: var(--n-color-disabled);
 `,[P("base-selection-input",`
 cursor: not-allowed;
 color: var(--n-text-color-disabled);
 `),y("render-label",`
 color: var(--n-text-color-disabled);
 `)]),P("base-selection-tags",`
 cursor: not-allowed;
 background-color: var(--n-color-disabled);
 `),P("base-selection-placeholder",`
 cursor: not-allowed;
 color: var(--n-placeholder-color-disabled);
 `)]),P("base-selection-input-tag",`
 height: calc(var(--n-height) - 6px);
 line-height: calc(var(--n-height) - 6px);
 outline: none;
 display: none;
 position: relative;
 margin-bottom: 3px;
 max-width: 100%;
 vertical-align: bottom;
 `,[y("input",`
 font-size: inherit;
 font-family: inherit;
 min-width: 1px;
 padding: 0;
 background-color: #0000;
 outline: none;
 border: none;
 max-width: 100%;
 overflow: hidden;
 width: 1em;
 line-height: inherit;
 cursor: pointer;
 color: var(--n-text-color);
 caret-color: var(--n-caret-color);
 `),y("mirror",`
 position: absolute;
 left: 0;
 top: 0;
 white-space: pre;
 visibility: hidden;
 user-select: none;
 -webkit-user-select: none;
 opacity: 0;
 `)]),["warning","error"].map(e=>X(`${e}-status`,[y("state-border",`border: var(--n-border-${e});`),Ie("disabled",[ae("&:hover",[y("state-border",`
 box-shadow: var(--n-box-shadow-hover-${e});
 border: var(--n-border-hover-${e});
 `)]),X("active",[y("state-border",`
 box-shadow: var(--n-box-shadow-active-${e});
 border: var(--n-border-active-${e});
 `),P("base-selection-label",`background-color: var(--n-color-active-${e});`),P("base-selection-tags",`background-color: var(--n-color-active-${e});`)]),X("focus",[y("state-border",`
 box-shadow: var(--n-box-shadow-focus-${e});
 border: var(--n-border-focus-${e});
 `)])])]))]),P("base-selection-popover",`
 margin-bottom: -3px;
 display: flex;
 flex-wrap: wrap;
 margin-right: -8px;
 `),P("base-selection-tag-wrapper",`
 max-width: 100%;
 display: inline-flex;
 padding: 0 7px 3px 0;
 `,[ae("&:last-child","padding-right: 0;"),P("tag",`
 font-size: 14px;
 max-width: 100%;
 `,[y("content",`
 line-height: 1.25;
 text-overflow: ellipsis;
 overflow: hidden;
 `)])])]),Fo=he({name:"InternalSelection",props:Object.assign(Object.assign({},ge.props),{clsPrefix:{type:String,required:!0},bordered:{type:Boolean,default:void 0},active:Boolean,pattern:{type:String,default:""},placeholder:String,selectedOption:{type:Object,default:null},selectedOptions:{type:Array,default:null},labelField:{type:String,default:"label"},valueField:{type:String,default:"value"},multiple:Boolean,filterable:Boolean,clearable:Boolean,disabled:Boolean,size:{type:String,default:"medium"},loading:Boolean,autofocus:Boolean,showArrow:{type:Boolean,default:!0},inputProps:Object,focused:Boolean,renderTag:Function,onKeydown:Function,onClick:Function,onBlur:Function,onFocus:Function,onDeleteOption:Function,maxTagCount:[String,Number],ellipsisTagPopoverProps:Object,onClear:Function,onPatternInput:Function,onPatternFocus:Function,onPatternBlur:Function,renderLabel:Function,status:String,inlineThemeDisabled:Boolean,ignoreComposition:{type:Boolean,default:!0},onResize:Function}),setup(e){const{mergedClsPrefixRef:t,mergedRtlRef:o}=Be(e),l=St("InternalSelection",o,t),i=F(null),d=F(null),s=F(null),a=F(null),g=F(null),p=F(null),h=F(null),b=F(null),f=F(null),S=F(null),C=F(!1),A=F(!1),U=F(!1),_=ge("InternalSelection","-internal-selection",ko,Pn,e,J(e,"clsPrefix")),k=z(()=>e.clearable&&!e.disabled&&(U.value||e.active)),O=z(()=>e.selectedOption?e.renderTag?e.renderTag({option:e.selectedOption,handleClose:()=>{}}):e.renderLabel?e.renderLabel(e.selectedOption,!0):$e(e.selectedOption[e.labelField],e.selectedOption,!0):e.placeholder),I=z(()=>{const v=e.selectedOption;if(v)return v[e.labelField]}),B=z(()=>e.multiple?!!(Array.isArray(e.selectedOptions)&&e.selectedOptions.length):e.selectedOption!==null);function G(){var v;const{value:R}=i;if(R){const{value:ee}=d;ee&&(ee.style.width=`${R.offsetWidth}px`,e.maxTagCount!=="responsive"&&((v=f.value)===null||v===void 0||v.sync({showAllItemsBeforeCalculate:!1})))}}function q(){const{value:v}=S;v&&(v.style.display="none")}function M(){const{value:v}=S;v&&(v.style.display="inline-block")}Oe(J(e,"active"),v=>{v||q()}),Oe(J(e,"pattern"),()=>{e.multiple&&Lt(G)});function se(v){const{onFocus:R}=e;R&&R(v)}function te(v){const{onBlur:R}=e;R&&R(v)}function Q(v){const{onDeleteOption:R}=e;R&&R(v)}function ie(v){const{onClear:R}=e;R&&R(v)}function u(v){const{onPatternInput:R}=e;R&&R(v)}function x(v){var R;(!v.relatedTarget||!(!((R=s.value)===null||R===void 0)&&R.contains(v.relatedTarget)))&&se(v)}function $(v){var R;!((R=s.value)===null||R===void 0)&&R.contains(v.relatedTarget)||te(v)}function H(v){ie(v)}function Z(){U.value=!0}function V(){U.value=!1}function K(v){!e.active||!e.filterable||v.target!==d.value&&v.preventDefault()}function D(v){Q(v)}const Y=F(!1);function c(v){if(v.key==="Backspace"&&!Y.value&&!e.pattern.length){const{selectedOptions:R}=e;R!=null&&R.length&&D(R[R.length-1])}}let w=null;function j(v){const{value:R}=i;if(R){const ee=v.target.value;R.textContent=ee,G()}e.ignoreComposition&&Y.value?w=v:u(v)}function de(){Y.value=!0}function pe(){Y.value=!1,e.ignoreComposition&&u(w),w=null}function me(v){var R;A.value=!0,(R=e.onPatternFocus)===null||R===void 0||R.call(e,v)}function fe(v){var R;A.value=!1,(R=e.onPatternBlur)===null||R===void 0||R.call(e,v)}function ve(){var v,R;if(e.filterable)A.value=!1,(v=p.value)===null||v===void 0||v.blur(),(R=d.value)===null||R===void 0||R.blur();else if(e.multiple){const{value:ee}=a;ee==null||ee.blur()}else{const{value:ee}=g;ee==null||ee.blur()}}function Pe(){var v,R,ee;e.filterable?(A.value=!1,(v=p.value)===null||v===void 0||v.focus()):e.multiple?(R=a.value)===null||R===void 0||R.focus():(ee=g.value)===null||ee===void 0||ee.focus()}function Ce(){const{value:v}=d;v&&(M(),v.focus())}function Ee(){const{value:v}=d;v&&v.blur()}function Ne(v){const{value:R}=h;R&&R.setTextContent(`+${v}`)}function Le(){const{value:v}=b;return v}function Ae(){return d.value}let Fe=null;function ze(){Fe!==null&&window.clearTimeout(Fe)}function De(){e.active||(ze(),Fe=window.setTimeout(()=>{B.value&&(C.value=!0)},100))}function We(){ze()}function je(v){v||(ze(),C.value=!1)}Oe(B,v=>{v||(C.value=!1)}),Ze(()=>{kn(()=>{const v=p.value;v&&(e.disabled?v.removeAttribute("tabindex"):v.tabIndex=A.value?-1:0)})}),Kt(s,e.onResize);const{inlineThemeDisabled:Me}=e,Te=z(()=>{const{size:v}=e,{common:{cubicBezierEaseInOut:R},self:{fontWeight:ee,borderRadius:ut,color:ct,placeholderColor:Je,textColor:Qe,paddingSingle:et,paddingMultiple:ht,caretColor:ft,colorDisabled:tt,textColorDisabled:Re,placeholderColorDisabled:n,colorActive:m,boxShadowFocus:T,boxShadowActive:W,boxShadowHover:N,border:E,borderFocus:L,borderHover:ne,borderActive:we,arrowColor:Yt,arrowColorDisabled:Xt,loadingColor:Zt,colorActiveWarning:Jt,boxShadowFocusWarning:Qt,boxShadowActiveWarning:en,boxShadowHoverWarning:tn,borderWarning:nn,borderFocusWarning:on,borderHoverWarning:ln,borderActiveWarning:rn,colorActiveError:an,boxShadowFocusError:sn,boxShadowActiveError:dn,boxShadowHoverError:un,borderError:cn,borderFocusError:hn,borderHoverError:fn,borderActiveError:vn,clearColor:bn,clearColorHover:gn,clearColorPressed:pn,clearSize:mn,arrowSize:wn,[re("height",v)]:yn,[re("fontSize",v)]:xn}}=_.value,nt=Ge(et),ot=Ge(ht);return{"--n-bezier":R,"--n-border":E,"--n-border-active":we,"--n-border-focus":L,"--n-border-hover":ne,"--n-border-radius":ut,"--n-box-shadow-active":W,"--n-box-shadow-focus":T,"--n-box-shadow-hover":N,"--n-caret-color":ft,"--n-color":ct,"--n-color-active":m,"--n-color-disabled":tt,"--n-font-size":xn,"--n-height":yn,"--n-padding-single-top":nt.top,"--n-padding-multiple-top":ot.top,"--n-padding-single-right":nt.right,"--n-padding-multiple-right":ot.right,"--n-padding-single-left":nt.left,"--n-padding-multiple-left":ot.left,"--n-padding-single-bottom":nt.bottom,"--n-padding-multiple-bottom":ot.bottom,"--n-placeholder-color":Je,"--n-placeholder-color-disabled":n,"--n-text-color":Qe,"--n-text-color-disabled":Re,"--n-arrow-color":Yt,"--n-arrow-color-disabled":Xt,"--n-loading-color":Zt,"--n-color-active-warning":Jt,"--n-box-shadow-focus-warning":Qt,"--n-box-shadow-active-warning":en,"--n-box-shadow-hover-warning":tn,"--n-border-warning":nn,"--n-border-focus-warning":on,"--n-border-hover-warning":ln,"--n-border-active-warning":rn,"--n-color-active-error":an,"--n-box-shadow-focus-error":sn,"--n-box-shadow-active-error":dn,"--n-box-shadow-hover-error":un,"--n-border-error":cn,"--n-border-focus-error":hn,"--n-border-hover-error":fn,"--n-border-active-error":vn,"--n-clear-size":mn,"--n-clear-color":bn,"--n-clear-color-hover":gn,"--n-clear-color-pressed":pn,"--n-arrow-size":wn,"--n-font-weight":ee}}),ue=Me?Ve("internal-selection",z(()=>e.size[0]),Te,e):void 0;return{mergedTheme:_,mergedClearable:k,mergedClsPrefix:t,rtlEnabled:l,patternInputFocused:A,filterablePlaceholder:O,label:I,selected:B,showTagsPanel:C,isComposing:Y,counterRef:h,counterWrapperRef:b,patternInputMirrorRef:i,patternInputRef:d,selfRef:s,multipleElRef:a,singleElRef:g,patternInputWrapperRef:p,overflowRef:f,inputTagElRef:S,handleMouseDown:K,handleFocusin:x,handleClear:H,handleMouseEnter:Z,handleMouseLeave:V,handleDeleteOption:D,handlePatternKeyDown:c,handlePatternInputInput:j,handlePatternInputBlur:fe,handlePatternInputFocus:me,handleMouseEnterCounter:De,handleMouseLeaveCounter:We,handleFocusout:$,handleCompositionEnd:pe,handleCompositionStart:de,onPopoverUpdateShow:je,focus:Pe,focusInput:Ce,blur:ve,blurInput:Ee,updateCounter:Ne,getCounter:Le,getTail:Ae,renderLabel:e.renderLabel,cssVars:Me?void 0:Te,themeClass:ue==null?void 0:ue.themeClass,onRender:ue==null?void 0:ue.onRender}},render(){const{status:e,multiple:t,size:o,disabled:l,filterable:i,maxTagCount:d,bordered:s,clsPrefix:a,ellipsisTagPopoverProps:g,onRender:p,renderTag:h,renderLabel:b}=this;p==null||p();const f=d==="responsive",S=typeof d=="number",C=f||S,A=r(Hn,null,{default:()=>r(co,{clsPrefix:a,loading:this.loading,showArrow:this.showArrow,showClear:this.mergedClearable&&this.selected,onClear:this.handleClear},{default:()=>{var _,k;return(k=(_=this.$slots).arrow)===null||k===void 0?void 0:k.call(_)}})});let U;if(t){const{labelField:_}=this,k=u=>r("div",{class:`${a}-base-selection-tag-wrapper`,key:u.value},h?h({option:u,handleClose:()=>{this.handleDeleteOption(u)}}):r(mt,{size:o,closable:!u.disabled,disabled:l,onClose:()=>{this.handleDeleteOption(u)},internalCloseIsButtonTag:!1,internalCloseFocusable:!1},{default:()=>b?b(u,!0):$e(u[_],u,!0)})),O=()=>(S?this.selectedOptions.slice(0,d):this.selectedOptions).map(k),I=i?r("div",{class:`${a}-base-selection-input-tag`,ref:"inputTagElRef",key:"__input-tag__"},r("input",Object.assign({},this.inputProps,{ref:"patternInputRef",tabindex:-1,disabled:l,value:this.pattern,autofocus:this.autofocus,class:`${a}-base-selection-input-tag__input`,onBlur:this.handlePatternInputBlur,onFocus:this.handlePatternInputFocus,onKeydown:this.handlePatternKeyDown,onInput:this.handlePatternInputInput,onCompositionstart:this.handleCompositionStart,onCompositionend:this.handleCompositionEnd})),r("span",{ref:"patternInputMirrorRef",class:`${a}-base-selection-input-tag__mirror`},this.pattern)):null,B=f?()=>r("div",{class:`${a}-base-selection-tag-wrapper`,ref:"counterWrapperRef"},r(mt,{size:o,ref:"counterRef",onMouseenter:this.handleMouseEnterCounter,onMouseleave:this.handleMouseLeaveCounter,disabled:l})):void 0;let G;if(S){const u=this.selectedOptions.length-d;u>0&&(G=r("div",{class:`${a}-base-selection-tag-wrapper`,key:"__counter__"},r(mt,{size:o,ref:"counterRef",onMouseenter:this.handleMouseEnterCounter,disabled:l},{default:()=>`+${u}`})))}const q=f?i?r(Ft,{ref:"overflowRef",updateCounter:this.updateCounter,getCounter:this.getCounter,getTail:this.getTail,style:{width:"100%",display:"flex",overflow:"hidden"}},{default:O,counter:B,tail:()=>I}):r(Ft,{ref:"overflowRef",updateCounter:this.updateCounter,getCounter:this.getCounter,style:{width:"100%",display:"flex",overflow:"hidden"}},{default:O,counter:B}):S&&G?O().concat(G):O(),M=C?()=>r("div",{class:`${a}-base-selection-popover`},f?O():this.selectedOptions.map(k)):void 0,se=C?Object.assign({show:this.showTagsPanel,trigger:"hover",overlap:!0,placement:"top",width:"trigger",onUpdateShow:this.onPopoverUpdateShow,theme:this.mergedTheme.peers.Popover,themeOverrides:this.mergedTheme.peerOverrides.Popover},g):null,Q=(this.selected?!1:this.active?!this.pattern&&!this.isComposing:!0)?r("div",{class:`${a}-base-selection-placeholder ${a}-base-selection-overlay`},r("div",{class:`${a}-base-selection-placeholder__inner`},this.placeholder)):null,ie=i?r("div",{ref:"patternInputWrapperRef",class:`${a}-base-selection-tags`},q,f?null:I,A):r("div",{ref:"multipleElRef",class:`${a}-base-selection-tags`,tabindex:l?void 0:0},q,A);U=r(Ke,null,C?r(Un,Object.assign({},se,{scrollable:!0,style:"max-height: calc(var(--v-target-height) * 6.6);"}),{trigger:()=>ie,default:M}):ie,Q)}else if(i){const _=this.pattern||this.isComposing,k=this.active?!_:!this.selected,O=this.active?!1:this.selected;U=r("div",{ref:"patternInputWrapperRef",class:`${a}-base-selection-label`,title:this.patternInputFocused?void 0:Ot(this.label)},r("input",Object.assign({},this.inputProps,{ref:"patternInputRef",class:`${a}-base-selection-input`,value:this.active?this.pattern:"",placeholder:"",readonly:l,disabled:l,tabindex:-1,autofocus:this.autofocus,onFocus:this.handlePatternInputFocus,onBlur:this.handlePatternInputBlur,onInput:this.handlePatternInputInput,onCompositionstart:this.handleCompositionStart,onCompositionend:this.handleCompositionEnd})),O?r("div",{class:`${a}-base-selection-label__render-label ${a}-base-selection-overlay`,key:"input"},r("div",{class:`${a}-base-selection-overlay__wrapper`},h?h({option:this.selectedOption,handleClose:()=>{}}):b?b(this.selectedOption,!0):$e(this.label,this.selectedOption,!0))):null,k?r("div",{class:`${a}-base-selection-placeholder ${a}-base-selection-overlay`,key:"placeholder"},r("div",{class:`${a}-base-selection-overlay__wrapper`},this.filterablePlaceholder)):null,A)}else U=r("div",{ref:"singleElRef",class:`${a}-base-selection-label`,tabindex:this.disabled?void 0:0},this.label!==void 0?r("div",{class:`${a}-base-selection-input`,title:Ot(this.label),key:"input"},r("div",{class:`${a}-base-selection-input__content`},h?h({option:this.selectedOption,handleClose:()=>{}}):b?b(this.selectedOption,!0):$e(this.label,this.selectedOption,!0))):r("div",{class:`${a}-base-selection-placeholder ${a}-base-selection-overlay`,key:"placeholder"},r("div",{class:`${a}-base-selection-placeholder__inner`},this.placeholder)),A);return r("div",{ref:"selfRef",class:[`${a}-base-selection`,this.rtlEnabled&&`${a}-base-selection--rtl`,this.themeClass,e&&`${a}-base-selection--${e}-status`,{[`${a}-base-selection--active`]:this.active,[`${a}-base-selection--selected`]:this.selected||this.active&&this.pattern,[`${a}-base-selection--disabled`]:this.disabled,[`${a}-base-selection--multiple`]:this.multiple,[`${a}-base-selection--focus`]:this.focused}],style:this.cssVars,onClick:this.onClick,onMouseenter:this.handleMouseEnter,onMouseleave:this.handleMouseLeave,onKeydown:this.onKeydown,onFocusin:this.handleFocusin,onFocusout:this.handleFocusout,onMousedown:this.handleMouseDown},U,s?r("div",{class:`${a}-base-selection__border`}):null,s?r("div",{class:`${a}-base-selection__state-border`}):null)}});function st(e){return e.type==="group"}function Gt(e){return e.type==="ignored"}function xt(e,t){try{return!!(1+t.toString().toLowerCase().indexOf(e.trim().toLowerCase()))}catch{return!1}}function zo(e,t){return{getIsGroup:st,getIgnored:Gt,getKey(l){return st(l)?l.name||l.key||"key-required":l[e]},getChildren(l){return l[t]}}}function To(e,t,o,l){if(!t)return e;function i(d){if(!Array.isArray(d))return[];const s=[];for(const a of d)if(st(a)){const g=i(a[l]);g.length&&s.push(Object.assign({},a,{[l]:g}))}else{if(Gt(a))continue;t(o,a)&&s.push(a)}return s}return i(e)}function _o(e,t,o){const l=new Map;return e.forEach(i=>{st(i)?i[o].forEach(d=>{l.set(d[t],d)}):l.set(i[t],i)}),l}const Oo=ae([P("select",`
 z-index: auto;
 outline: none;
 width: 100%;
 position: relative;
 font-weight: var(--n-font-weight);
 `),P("select-menu",`
 margin: 4px 0;
 box-shadow: var(--n-menu-box-shadow);
 `,[Dt({originalTransition:"background-color .3s var(--n-bezier), box-shadow .3s var(--n-bezier)"})])]),Io=Object.assign(Object.assign({},ge.props),{to:Ct.propTo,bordered:{type:Boolean,default:void 0},clearable:Boolean,clearFilterAfterSelect:{type:Boolean,default:!0},options:{type:Array,default:()=>[]},defaultValue:{type:[String,Number,Array],default:null},keyboard:{type:Boolean,default:!0},value:[String,Number,Array],placeholder:String,menuProps:Object,multiple:Boolean,size:String,menuSize:{type:String},filterable:Boolean,disabled:{type:Boolean,default:void 0},remote:Boolean,loading:Boolean,filter:Function,placement:{type:String,default:"bottom-start"},widthMode:{type:String,default:"trigger"},tag:Boolean,onCreate:Function,fallbackOption:{type:[Function,Boolean],default:void 0},show:{type:Boolean,default:void 0},showArrow:{type:Boolean,default:!0},maxTagCount:[Number,String],ellipsisTagPopoverProps:Object,consistentMenuWidth:{type:Boolean,default:!0},virtualScroll:{type:Boolean,default:!0},labelField:{type:String,default:"label"},valueField:{type:String,default:"value"},childrenField:{type:String,default:"children"},renderLabel:Function,renderOption:Function,renderTag:Function,"onUpdate:value":[Function,Array],inputProps:Object,nodeProps:Function,ignoreComposition:{type:Boolean,default:!0},showOnFocus:Boolean,onUpdateValue:[Function,Array],onBlur:[Function,Array],onClear:[Function,Array],onFocus:[Function,Array],onScroll:[Function,Array],onSearch:[Function,Array],onUpdateShow:[Function,Array],"onUpdate:show":[Function,Array],displayDirective:{type:String,default:"show"},resetMenuOnOptionsChange:{type:Boolean,default:!0},status:String,showCheckmark:{type:Boolean,default:!0},onChange:[Function,Array],items:Array}),Vt=he({name:"Select",props:Io,slots:Object,setup(e){const{mergedClsPrefixRef:t,mergedBorderedRef:o,namespaceRef:l,inlineThemeDisabled:i}=Be(e),d=ge("Select","-select",Oo,Mn,e,t),s=F(e.defaultValue),a=J(e,"value"),g=Ye(a,s),p=F(!1),h=F(""),b=Yn(e,["items","options"]),f=F([]),S=F([]),C=z(()=>S.value.concat(f.value).concat(b.value)),A=z(()=>{const{filter:n}=e;if(n)return n;const{labelField:m,valueField:T}=e;return(W,N)=>{if(!N)return!1;const E=N[m];if(typeof E=="string")return xt(W,E);const L=N[T];return typeof L=="string"?xt(W,L):typeof L=="number"?xt(W,String(L)):!1}}),U=z(()=>{if(e.remote)return b.value;{const{value:n}=C,{value:m}=h;return!m.length||!e.filterable?n:To(n,A.value,m,e.childrenField)}}),_=z(()=>{const{valueField:n,childrenField:m}=e,T=zo(n,m);return no(U.value,T)}),k=z(()=>_o(C.value,e.valueField,e.childrenField)),O=F(!1),I=Ye(J(e,"show"),O),B=F(null),G=F(null),q=F(null),{localeRef:M}=jt("Select"),se=z(()=>{var n;return(n=e.placeholder)!==null&&n!==void 0?n:M.value.placeholder}),te=[],Q=F(new Map),ie=z(()=>{const{fallbackOption:n}=e;if(n===void 0){const{labelField:m,valueField:T}=e;return W=>({[m]:String(W),[T]:W})}return n===!1?!1:m=>Object.assign(n(m),{value:m})});function u(n){const m=e.remote,{value:T}=Q,{value:W}=k,{value:N}=ie,E=[];return n.forEach(L=>{if(W.has(L))E.push(W.get(L));else if(m&&T.has(L))E.push(T.get(L));else if(N){const ne=N(L);ne&&E.push(ne)}}),E}const x=z(()=>{if(e.multiple){const{value:n}=g;return Array.isArray(n)?u(n):[]}return null}),$=z(()=>{const{value:n}=g;return!e.multiple&&!Array.isArray(n)?n===null?null:u([n])[0]||null:null}),H=dt(e),{mergedSizeRef:Z,mergedDisabledRef:V,mergedStatusRef:K}=H;function D(n,m){const{onChange:T,"onUpdate:value":W,onUpdateValue:N}=e,{nTriggerFormChange:E,nTriggerFormInput:L}=H;T&&le(T,n,m),N&&le(N,n,m),W&&le(W,n,m),s.value=n,E(),L()}function Y(n){const{onBlur:m}=e,{nTriggerFormBlur:T}=H;m&&le(m,n),T()}function c(){const{onClear:n}=e;n&&le(n)}function w(n){const{onFocus:m,showOnFocus:T}=e,{nTriggerFormFocus:W}=H;m&&le(m,n),W(),T&&fe()}function j(n){const{onSearch:m}=e;m&&le(m,n)}function de(n){const{onScroll:m}=e;m&&le(m,n)}function pe(){var n;const{remote:m,multiple:T}=e;if(m){const{value:W}=Q;if(T){const{valueField:N}=e;(n=x.value)===null||n===void 0||n.forEach(E=>{W.set(E[N],E)})}else{const N=$.value;N&&W.set(N[e.valueField],N)}}}function me(n){const{onUpdateShow:m,"onUpdate:show":T}=e;m&&le(m,n),T&&le(T,n),O.value=n}function fe(){V.value||(me(!0),O.value=!0,e.filterable&&et())}function ve(){me(!1)}function Pe(){h.value="",S.value=te}const Ce=F(!1);function Ee(){e.filterable&&(Ce.value=!0)}function Ne(){e.filterable&&(Ce.value=!1,I.value||Pe())}function Le(){V.value||(I.value?e.filterable?et():ve():fe())}function Ae(n){var m,T;!((T=(m=q.value)===null||m===void 0?void 0:m.selfRef)===null||T===void 0)&&T.contains(n.relatedTarget)||(p.value=!1,Y(n),ve())}function Fe(n){w(n),p.value=!0}function ze(){p.value=!0}function De(n){var m;!((m=B.value)===null||m===void 0)&&m.$el.contains(n.relatedTarget)||(p.value=!1,Y(n),ve())}function We(){var n;(n=B.value)===null||n===void 0||n.focus(),ve()}function je(n){var m;I.value&&(!((m=B.value)===null||m===void 0)&&m.$el.contains(Zn(n))||ve())}function Me(n){if(!Array.isArray(n))return[];if(ie.value)return Array.from(n);{const{remote:m}=e,{value:T}=k;if(m){const{value:W}=Q;return n.filter(N=>T.has(N)||W.has(N))}else return n.filter(W=>T.has(W))}}function Te(n){ue(n.rawNode)}function ue(n){if(V.value)return;const{tag:m,remote:T,clearFilterAfterSelect:W,valueField:N}=e;if(m&&!T){const{value:E}=S,L=E[0]||null;if(L){const ne=f.value;ne.length?ne.push(L):f.value=[L],S.value=te}}if(T&&Q.value.set(n[N],n),e.multiple){const E=Me(g.value),L=E.findIndex(ne=>ne===n[N]);if(~L){if(E.splice(L,1),m&&!T){const ne=v(n[N]);~ne&&(f.value.splice(ne,1),W&&(h.value=""))}}else E.push(n[N]),W&&(h.value="");D(E,u(E))}else{if(m&&!T){const E=v(n[N]);~E?f.value=[f.value[E]]:f.value=te}Qe(),ve(),D(n[N],n)}}function v(n){return f.value.findIndex(T=>T[e.valueField]===n)}function R(n){I.value||fe();const{value:m}=n.target;h.value=m;const{tag:T,remote:W}=e;if(j(m),T&&!W){if(!m){S.value=te;return}const{onCreate:N}=e,E=N?N(m):{[e.labelField]:m,[e.valueField]:m},{valueField:L,labelField:ne}=e;b.value.some(we=>we[L]===E[L]||we[ne]===E[ne])||f.value.some(we=>we[L]===E[L]||we[ne]===E[ne])?S.value=te:S.value=[E]}}function ee(n){n.stopPropagation();const{multiple:m}=e;!m&&e.filterable&&ve(),c(),m?D([],[]):D(null,null)}function ut(n){!qe(n,"action")&&!qe(n,"empty")&&!qe(n,"header")&&n.preventDefault()}function ct(n){de(n)}function Je(n){var m,T,W,N,E;if(!e.keyboard){n.preventDefault();return}switch(n.key){case" ":if(e.filterable)break;n.preventDefault();case"Enter":if(!(!((m=B.value)===null||m===void 0)&&m.isComposing)){if(I.value){const L=(T=q.value)===null||T===void 0?void 0:T.getPendingTmNode();L?Te(L):e.filterable||(ve(),Qe())}else if(fe(),e.tag&&Ce.value){const L=S.value[0];if(L){const ne=L[e.valueField],{value:we}=g;e.multiple&&Array.isArray(we)&&we.includes(ne)||ue(L)}}}n.preventDefault();break;case"ArrowUp":if(n.preventDefault(),e.loading)return;I.value&&((W=q.value)===null||W===void 0||W.prev());break;case"ArrowDown":if(n.preventDefault(),e.loading)return;I.value?(N=q.value)===null||N===void 0||N.next():fe();break;case"Escape":I.value&&(oo(n),ve()),(E=B.value)===null||E===void 0||E.focus();break}}function Qe(){var n;(n=B.value)===null||n===void 0||n.focus()}function et(){var n;(n=B.value)===null||n===void 0||n.focusInput()}function ht(){var n;I.value&&((n=G.value)===null||n===void 0||n.syncPosition())}pe(),Oe(J(e,"options"),pe);const ft={focus:()=>{var n;(n=B.value)===null||n===void 0||n.focus()},focusInput:()=>{var n;(n=B.value)===null||n===void 0||n.focusInput()},blur:()=>{var n;(n=B.value)===null||n===void 0||n.blur()},blurInput:()=>{var n;(n=B.value)===null||n===void 0||n.blurInput()}},tt=z(()=>{const{self:{menuBoxShadow:n}}=d.value;return{"--n-menu-box-shadow":n}}),Re=i?Ve("select",void 0,tt,e):void 0;return Object.assign(Object.assign({},ft),{mergedStatus:K,mergedClsPrefix:t,mergedBordered:o,namespace:l,treeMate:_,isMounted:Xn(),triggerRef:B,menuRef:q,pattern:h,uncontrolledShow:O,mergedShow:I,adjustedTo:Ct(e),uncontrolledValue:s,mergedValue:g,followerRef:G,localizedPlaceholder:se,selectedOption:$,selectedOptions:x,mergedSize:Z,mergedDisabled:V,focused:p,activeWithoutMenuOpen:Ce,inlineThemeDisabled:i,onTriggerInputFocus:Ee,onTriggerInputBlur:Ne,handleTriggerOrMenuResize:ht,handleMenuFocus:ze,handleMenuBlur:De,handleMenuTabOut:We,handleTriggerClick:Le,handleToggle:Te,handleDeleteOption:ue,handlePatternInput:R,handleClear:ee,handleTriggerBlur:Ae,handleTriggerFocus:Fe,handleKeydown:Je,handleMenuAfterLeave:Pe,handleMenuClickOutside:je,handleMenuScroll:ct,handleMenuKeydown:Je,handleMenuMousedown:ut,mergedTheme:d,cssVars:i?void 0:tt,themeClass:Re==null?void 0:Re.themeClass,onRender:Re==null?void 0:Re.onRender})},render(){return r("div",{class:`${this.mergedClsPrefix}-select`},r(Kn,null,{default:()=>[r(Gn,null,{default:()=>r(Fo,{ref:"triggerRef",inlineThemeDisabled:this.inlineThemeDisabled,status:this.mergedStatus,inputProps:this.inputProps,clsPrefix:this.mergedClsPrefix,showArrow:this.showArrow,maxTagCount:this.maxTagCount,ellipsisTagPopoverProps:this.ellipsisTagPopoverProps,bordered:this.mergedBordered,active:this.activeWithoutMenuOpen||this.mergedShow,pattern:this.pattern,placeholder:this.localizedPlaceholder,selectedOption:this.selectedOption,selectedOptions:this.selectedOptions,multiple:this.multiple,renderTag:this.renderTag,renderLabel:this.renderLabel,filterable:this.filterable,clearable:this.clearable,disabled:this.mergedDisabled,size:this.mergedSize,theme:this.mergedTheme.peers.InternalSelection,labelField:this.labelField,valueField:this.valueField,themeOverrides:this.mergedTheme.peerOverrides.InternalSelection,loading:this.loading,focused:this.focused,onClick:this.handleTriggerClick,onDeleteOption:this.handleDeleteOption,onPatternInput:this.handlePatternInput,onClear:this.handleClear,onBlur:this.handleTriggerBlur,onFocus:this.handleTriggerFocus,onKeydown:this.handleKeydown,onPatternBlur:this.onTriggerInputBlur,onPatternFocus:this.onTriggerInputFocus,onResize:this.handleTriggerOrMenuResize,ignoreComposition:this.ignoreComposition},{arrow:()=>{var e,t;return[(t=(e=this.$slots).arrow)===null||t===void 0?void 0:t.call(e)]}})}),r(qn,{ref:"followerRef",show:this.mergedShow,to:this.adjustedTo,teleportDisabled:this.adjustedTo===Ct.tdkey,containerClass:this.namespace,width:this.consistentMenuWidth?"target":void 0,minWidth:"target",placement:this.placement},{default:()=>r(Nt,{name:"fade-in-scale-up-transition",appear:this.isMounted,onAfterLeave:this.handleMenuAfterLeave},{default:()=>{var e,t,o;return this.mergedShow||this.displayDirective==="show"?((e=this.onRender)===null||e===void 0||e.call(this),Fn(r(So,Object.assign({},this.menuProps,{ref:"menuRef",onResize:this.handleTriggerOrMenuResize,inlineThemeDisabled:this.inlineThemeDisabled,virtualScroll:this.consistentMenuWidth&&this.virtualScroll,class:[`${this.mergedClsPrefix}-select-menu`,this.themeClass,(t=this.menuProps)===null||t===void 0?void 0:t.class],clsPrefix:this.mergedClsPrefix,focusable:!0,labelField:this.labelField,valueField:this.valueField,autoPending:!0,nodeProps:this.nodeProps,theme:this.mergedTheme.peers.InternalSelectMenu,themeOverrides:this.mergedTheme.peerOverrides.InternalSelectMenu,treeMate:this.treeMate,multiple:this.multiple,size:this.menuSize,renderOption:this.renderOption,renderLabel:this.renderLabel,value:this.mergedValue,style:[(o=this.menuProps)===null||o===void 0?void 0:o.style,this.cssVars],onToggle:this.handleToggle,onScroll:this.handleMenuScroll,onFocus:this.handleMenuFocus,onBlur:this.handleMenuBlur,onKeydown:this.handleMenuKeydown,onTabOut:this.handleMenuTabOut,onMousedown:this.handleMenuMousedown,show:this.mergedShow,showCheckmark:this.showCheckmark,resetMenuOnOptionsChange:this.resetMenuOnOptionsChange}),{empty:()=>{var l,i;return[(i=(l=this.$slots).empty)===null||i===void 0?void 0:i.call(l)]},header:()=>{var l,i;return[(i=(l=this.$slots).header)===null||i===void 0?void 0:i.call(l)]},action:()=>{var l,i;return[(i=(l=this.$slots).action)===null||i===void 0?void 0:i.call(l)]}}),this.displayDirective==="show"?[[zn,this.mergedShow],[Tt,this.handleMenuClickOutside,void 0,{capture:!0}]]:[[Tt,this.handleMenuClickOutside,void 0,{capture:!0}]])):null}})})]}))}}),Bo={name:String,value:{type:[String,Number,Boolean],default:"on"},checked:{type:Boolean,default:void 0},defaultChecked:Boolean,disabled:{type:Boolean,default:void 0},label:String,size:String,onUpdateChecked:[Function,Array],"onUpdate:checked":[Function,Array],checkedValue:{type:Boolean,default:void 0}},qt=Jn("n-radio-group");function Po(e){const t=Xe(qt,null),o=dt(e,{mergedSize(k){const{size:O}=e;if(O!==void 0)return O;if(t){const{mergedSizeRef:{value:I}}=t;if(I!==void 0)return I}return k?k.mergedSize.value:"medium"},mergedDisabled(k){return!!(e.disabled||t!=null&&t.disabledRef.value||k!=null&&k.disabled.value)}}),{mergedSizeRef:l,mergedDisabledRef:i}=o,d=F(null),s=F(null),a=F(e.defaultChecked),g=J(e,"checked"),p=Ye(g,a),h=xe(()=>t?t.valueRef.value===e.value:p.value),b=xe(()=>{const{name:k}=e;if(k!==void 0)return k;if(t)return t.nameRef.value}),f=F(!1);function S(){if(t){const{doUpdateValue:k}=t,{value:O}=e;le(k,O)}else{const{onUpdateChecked:k,"onUpdate:checked":O}=e,{nTriggerFormInput:I,nTriggerFormChange:B}=o;k&&le(k,!0),O&&le(O,!0),I(),B(),a.value=!0}}function C(){i.value||h.value||S()}function A(){C(),d.value&&(d.value.checked=h.value)}function U(){f.value=!1}function _(){f.value=!0}return{mergedClsPrefix:t?t.mergedClsPrefixRef:Be(e).mergedClsPrefixRef,inputRef:d,labelRef:s,mergedName:b,mergedDisabled:i,renderSafeChecked:h,focus:f,mergedSize:l,handleRadioInputChange:A,handleRadioInputBlur:U,handleRadioInputFocus:_}}const Mo=he({name:"RadioButton",props:Bo,setup:Po,render(){const{mergedClsPrefix:e}=this;return r("label",{class:[`${e}-radio-button`,this.mergedDisabled&&`${e}-radio-button--disabled`,this.renderSafeChecked&&`${e}-radio-button--checked`,this.focus&&[`${e}-radio-button--focus`]]},r("input",{ref:"inputRef",type:"radio",class:`${e}-radio-input`,value:this.value,name:this.mergedName,checked:this.renderSafeChecked,disabled:this.mergedDisabled,onChange:this.handleRadioInputChange,onFocus:this.handleRadioInputFocus,onBlur:this.handleRadioInputBlur}),r("div",{class:`${e}-radio-button__state-border`}),ye(this.$slots.default,t=>!t&&!this.label?null:r("div",{ref:"labelRef",class:`${e}-radio__label`},t||this.label)))}}),$o=P("radio-group",`
 display: inline-block;
 font-size: var(--n-font-size);
`,[y("splitor",`
 display: inline-block;
 vertical-align: bottom;
 width: 1px;
 transition:
 background-color .3s var(--n-bezier),
 opacity .3s var(--n-bezier);
 background: var(--n-button-border-color);
 `,[X("checked",{backgroundColor:"var(--n-button-border-color-active)"}),X("disabled",{opacity:"var(--n-opacity-disabled)"})]),X("button-group",`
 white-space: nowrap;
 height: var(--n-height);
 line-height: var(--n-height);
 `,[P("radio-button",{height:"var(--n-height)",lineHeight:"var(--n-height)"}),y("splitor",{height:"var(--n-height)"})]),P("radio-button",`
 vertical-align: bottom;
 outline: none;
 position: relative;
 user-select: none;
 -webkit-user-select: none;
 display: inline-block;
 box-sizing: border-box;
 padding-left: 14px;
 padding-right: 14px;
 white-space: nowrap;
 transition:
 background-color .3s var(--n-bezier),
 opacity .3s var(--n-bezier),
 border-color .3s var(--n-bezier),
 color .3s var(--n-bezier);
 background: var(--n-button-color);
 color: var(--n-button-text-color);
 border-top: 1px solid var(--n-button-border-color);
 border-bottom: 1px solid var(--n-button-border-color);
 `,[P("radio-input",`
 pointer-events: none;
 position: absolute;
 border: 0;
 border-radius: inherit;
 left: 0;
 right: 0;
 top: 0;
 bottom: 0;
 opacity: 0;
 z-index: 1;
 `),y("state-border",`
 z-index: 1;
 pointer-events: none;
 position: absolute;
 box-shadow: var(--n-button-box-shadow);
 transition: box-shadow .3s var(--n-bezier);
 left: -1px;
 bottom: -1px;
 right: -1px;
 top: -1px;
 `),ae("&:first-child",`
 border-top-left-radius: var(--n-button-border-radius);
 border-bottom-left-radius: var(--n-button-border-radius);
 border-left: 1px solid var(--n-button-border-color);
 `,[y("state-border",`
 border-top-left-radius: var(--n-button-border-radius);
 border-bottom-left-radius: var(--n-button-border-radius);
 `)]),ae("&:last-child",`
 border-top-right-radius: var(--n-button-border-radius);
 border-bottom-right-radius: var(--n-button-border-radius);
 border-right: 1px solid var(--n-button-border-color);
 `,[y("state-border",`
 border-top-right-radius: var(--n-button-border-radius);
 border-bottom-right-radius: var(--n-button-border-radius);
 `)]),Ie("disabled",`
 cursor: pointer;
 `,[ae("&:hover",[y("state-border",`
 transition: box-shadow .3s var(--n-bezier);
 box-shadow: var(--n-button-box-shadow-hover);
 `),Ie("checked",{color:"var(--n-button-text-color-hover)"})]),X("focus",[ae("&:not(:active)",[y("state-border",{boxShadow:"var(--n-button-box-shadow-focus)"})])])]),X("checked",`
 background: var(--n-button-color-active);
 color: var(--n-button-text-color-active);
 border-color: var(--n-button-border-color-active);
 `),X("disabled",`
 cursor: not-allowed;
 opacity: var(--n-opacity-disabled);
 `)])]);function Vo(e,t,o){var l;const i=[];let d=!1;for(let s=0;s<e.length;++s){const a=e[s],g=(l=a.type)===null||l===void 0?void 0:l.name;g==="RadioButton"&&(d=!0);const p=a.props;if(g!=="RadioButton"){i.push(a);continue}if(s===0)i.push(a);else{const h=i[i.length-1].props,b=t===h.value,f=h.disabled,S=t===p.value,C=p.disabled,A=(b?2:0)+(f?0:1),U=(S?2:0)+(C?0:1),_={[`${o}-radio-group__splitor--disabled`]:f,[`${o}-radio-group__splitor--checked`]:b},k={[`${o}-radio-group__splitor--disabled`]:C,[`${o}-radio-group__splitor--checked`]:S},O=A<U?k:_;i.push(r("div",{class:[`${o}-radio-group__splitor`,O]}),a)}}return{children:i,isButtonGroup:d}}const Eo=Object.assign(Object.assign({},ge.props),{name:String,value:[String,Number,Boolean],defaultValue:{type:[String,Number,Boolean],default:null},size:String,disabled:{type:Boolean,default:void 0},"onUpdate:value":[Function,Array],onUpdateValue:[Function,Array]}),No=he({name:"RadioGroup",props:Eo,setup(e){const t=F(null),{mergedSizeRef:o,mergedDisabledRef:l,nTriggerFormChange:i,nTriggerFormInput:d,nTriggerFormBlur:s,nTriggerFormFocus:a}=dt(e),{mergedClsPrefixRef:g,inlineThemeDisabled:p,mergedRtlRef:h}=Be(e),b=ge("Radio","-radio-group",$o,$n,e,g),f=F(e.defaultValue),S=J(e,"value"),C=Ye(S,f);function A(B){const{onUpdateValue:G,"onUpdate:value":q}=e;G&&le(G,B),q&&le(q,B),f.value=B,i(),d()}function U(B){const{value:G}=t;G&&(G.contains(B.relatedTarget)||a())}function _(B){const{value:G}=t;G&&(G.contains(B.relatedTarget)||s())}at(qt,{mergedClsPrefixRef:g,nameRef:J(e,"name"),valueRef:C,disabledRef:l,mergedSizeRef:o,doUpdateValue:A});const k=St("Radio",h,g),O=z(()=>{const{value:B}=o,{common:{cubicBezierEaseInOut:G},self:{buttonBorderColor:q,buttonBorderColorActive:M,buttonBorderRadius:se,buttonBoxShadow:te,buttonBoxShadowFocus:Q,buttonBoxShadowHover:ie,buttonColor:u,buttonColorActive:x,buttonTextColor:$,buttonTextColorActive:H,buttonTextColorHover:Z,opacityDisabled:V,[re("buttonHeight",B)]:K,[re("fontSize",B)]:D}}=b.value;return{"--n-font-size":D,"--n-bezier":G,"--n-button-border-color":q,"--n-button-border-color-active":M,"--n-button-border-radius":se,"--n-button-box-shadow":te,"--n-button-box-shadow-focus":Q,"--n-button-box-shadow-hover":ie,"--n-button-color":u,"--n-button-color-active":x,"--n-button-text-color":$,"--n-button-text-color-hover":Z,"--n-button-text-color-active":H,"--n-height":K,"--n-opacity-disabled":V}}),I=p?Ve("radio-group",z(()=>o.value[0]),O,e):void 0;return{selfElRef:t,rtlEnabled:k,mergedClsPrefix:g,mergedValue:C,handleFocusout:_,handleFocusin:U,cssVars:p?void 0:O,themeClass:I==null?void 0:I.themeClass,onRender:I==null?void 0:I.onRender}},render(){var e;const{mergedValue:t,mergedClsPrefix:o,handleFocusin:l,handleFocusout:i}=this,{children:d,isButtonGroup:s}=Vo(Qn(lo(this)),t,o);return(e=this.onRender)===null||e===void 0||e.call(this),r("div",{onFocusin:l,onFocusout:i,ref:"selfElRef",class:[`${o}-radio-group`,this.rtlEnabled&&`${o}-radio-group--rtl`,this.themeClass,s&&`${o}-radio-group--button-group`],style:this.cssVars},d)}}),Lo=P("switch",`
 height: var(--n-height);
 min-width: var(--n-width);
 vertical-align: middle;
 user-select: none;
 -webkit-user-select: none;
 display: inline-flex;
 outline: none;
 justify-content: center;
 align-items: center;
`,[y("children-placeholder",`
 height: var(--n-rail-height);
 display: flex;
 flex-direction: column;
 overflow: hidden;
 pointer-events: none;
 visibility: hidden;
 `),y("rail-placeholder",`
 display: flex;
 flex-wrap: none;
 `),y("button-placeholder",`
 width: calc(1.75 * var(--n-rail-height));
 height: var(--n-rail-height);
 `),P("base-loading",`
 position: absolute;
 top: 50%;
 left: 50%;
 transform: translateX(-50%) translateY(-50%);
 font-size: calc(var(--n-button-width) - 4px);
 color: var(--n-loading-color);
 transition: color .3s var(--n-bezier);
 `,[_t({left:"50%",top:"50%",originalTransform:"translateX(-50%) translateY(-50%)"})]),y("checked, unchecked",`
 transition: color .3s var(--n-bezier);
 color: var(--n-text-color);
 box-sizing: border-box;
 position: absolute;
 white-space: nowrap;
 top: 0;
 bottom: 0;
 display: flex;
 align-items: center;
 line-height: 1;
 `),y("checked",`
 right: 0;
 padding-right: calc(1.25 * var(--n-rail-height) - var(--n-offset));
 `),y("unchecked",`
 left: 0;
 justify-content: flex-end;
 padding-left: calc(1.25 * var(--n-rail-height) - var(--n-offset));
 `),ae("&:focus",[y("rail",`
 box-shadow: var(--n-box-shadow-focus);
 `)]),X("round",[y("rail","border-radius: calc(var(--n-rail-height) / 2);",[y("button","border-radius: calc(var(--n-button-height) / 2);")])]),Ie("disabled",[Ie("icon",[X("rubber-band",[X("pressed",[y("rail",[y("button","max-width: var(--n-button-width-pressed);")])]),y("rail",[ae("&:active",[y("button","max-width: var(--n-button-width-pressed);")])]),X("active",[X("pressed",[y("rail",[y("button","left: calc(100% - var(--n-offset) - var(--n-button-width-pressed));")])]),y("rail",[ae("&:active",[y("button","left: calc(100% - var(--n-offset) - var(--n-button-width-pressed));")])])])])])]),X("active",[y("rail",[y("button","left: calc(100% - var(--n-button-width) - var(--n-offset))")])]),y("rail",`
 overflow: hidden;
 height: var(--n-rail-height);
 min-width: var(--n-rail-width);
 border-radius: var(--n-rail-border-radius);
 cursor: pointer;
 position: relative;
 transition:
 opacity .3s var(--n-bezier),
 background .3s var(--n-bezier),
 box-shadow .3s var(--n-bezier);
 background-color: var(--n-rail-color);
 `,[y("button-icon",`
 color: var(--n-icon-color);
 transition: color .3s var(--n-bezier);
 font-size: calc(var(--n-button-height) - 4px);
 position: absolute;
 left: 0;
 right: 0;
 top: 0;
 bottom: 0;
 display: flex;
 justify-content: center;
 align-items: center;
 line-height: 1;
 `,[_t()]),y("button",`
 align-items: center; 
 top: var(--n-offset);
 left: var(--n-offset);
 height: var(--n-button-height);
 width: var(--n-button-width-pressed);
 max-width: var(--n-button-width);
 border-radius: var(--n-button-border-radius);
 background-color: var(--n-button-color);
 box-shadow: var(--n-button-box-shadow);
 box-sizing: border-box;
 cursor: inherit;
 content: "";
 position: absolute;
 transition:
 background-color .3s var(--n-bezier),
 left .3s var(--n-bezier),
 opacity .3s var(--n-bezier),
 max-width .3s var(--n-bezier),
 box-shadow .3s var(--n-bezier);
 `)]),X("active",[y("rail","background-color: var(--n-rail-color-active);")]),X("loading",[y("rail",`
 cursor: wait;
 `)]),X("disabled",[y("rail",`
 cursor: not-allowed;
 opacity: .5;
 `)])]),Ao=Object.assign(Object.assign({},ge.props),{size:{type:String,default:"medium"},value:{type:[String,Number,Boolean],default:void 0},loading:Boolean,defaultValue:{type:[String,Number,Boolean],default:!1},disabled:{type:Boolean,default:void 0},round:{type:Boolean,default:!0},"onUpdate:value":[Function,Array],onUpdateValue:[Function,Array],checkedValue:{type:[String,Number,Boolean],default:!0},uncheckedValue:{type:[String,Number,Boolean],default:!1},railStyle:Function,rubberBand:{type:Boolean,default:!0},onChange:[Function,Array]});let Ue;const Do=he({name:"Switch",props:Ao,slots:Object,setup(e){Ue===void 0&&(typeof CSS<"u"?typeof CSS.supports<"u"?Ue=CSS.supports("width","max(1px)"):Ue=!1:Ue=!0);const{mergedClsPrefixRef:t,inlineThemeDisabled:o}=Be(e),l=ge("Switch","-switch",Lo,Vn,e,t),i=dt(e),{mergedSizeRef:d,mergedDisabledRef:s}=i,a=F(e.defaultValue),g=J(e,"value"),p=Ye(g,a),h=z(()=>p.value===e.checkedValue),b=F(!1),f=F(!1),S=z(()=>{const{railStyle:M}=e;if(M)return M({focused:f.value,checked:h.value})});function C(M){const{"onUpdate:value":se,onChange:te,onUpdateValue:Q}=e,{nTriggerFormInput:ie,nTriggerFormChange:u}=i;se&&le(se,M),Q&&le(Q,M),te&&le(te,M),a.value=M,ie(),u()}function A(){const{nTriggerFormFocus:M}=i;M()}function U(){const{nTriggerFormBlur:M}=i;M()}function _(){e.loading||s.value||(p.value!==e.checkedValue?C(e.checkedValue):C(e.uncheckedValue))}function k(){f.value=!0,A()}function O(){f.value=!1,U(),b.value=!1}function I(M){e.loading||s.value||M.key===" "&&(p.value!==e.checkedValue?C(e.checkedValue):C(e.uncheckedValue),b.value=!1)}function B(M){e.loading||s.value||M.key===" "&&(M.preventDefault(),b.value=!0)}const G=z(()=>{const{value:M}=d,{self:{opacityDisabled:se,railColor:te,railColorActive:Q,buttonBoxShadow:ie,buttonColor:u,boxShadowFocus:x,loadingColor:$,textColor:H,iconColor:Z,[re("buttonHeight",M)]:V,[re("buttonWidth",M)]:K,[re("buttonWidthPressed",M)]:D,[re("railHeight",M)]:Y,[re("railWidth",M)]:c,[re("railBorderRadius",M)]:w,[re("buttonBorderRadius",M)]:j},common:{cubicBezierEaseInOut:de}}=l.value;let pe,me,fe;return Ue?(pe=`calc((${Y} - ${V}) / 2)`,me=`max(${Y}, ${V})`,fe=`max(${c}, calc(${c} + ${V} - ${Y}))`):(pe=ke((be(Y)-be(V))/2),me=ke(Math.max(be(Y),be(V))),fe=be(Y)>be(V)?c:ke(be(c)+be(V)-be(Y))),{"--n-bezier":de,"--n-button-border-radius":j,"--n-button-box-shadow":ie,"--n-button-color":u,"--n-button-width":K,"--n-button-width-pressed":D,"--n-button-height":V,"--n-height":me,"--n-offset":pe,"--n-opacity-disabled":se,"--n-rail-border-radius":w,"--n-rail-color":te,"--n-rail-color-active":Q,"--n-rail-height":Y,"--n-rail-width":c,"--n-width":fe,"--n-box-shadow-focus":x,"--n-loading-color":$,"--n-text-color":H,"--n-icon-color":Z}}),q=o?Ve("switch",z(()=>d.value[0]),G,e):void 0;return{handleClick:_,handleBlur:O,handleFocus:k,handleKeyup:I,handleKeydown:B,mergedRailStyle:S,pressed:b,mergedClsPrefix:t,mergedValue:p,checked:h,mergedDisabled:s,cssVars:o?void 0:G,themeClass:q==null?void 0:q.themeClass,onRender:q==null?void 0:q.onRender}},render(){const{mergedClsPrefix:e,mergedDisabled:t,checked:o,mergedRailStyle:l,onRender:i,$slots:d}=this;i==null||i();const{checked:s,unchecked:a,icon:g,"checked-icon":p,"unchecked-icon":h}=d,b=!(pt(g)&&pt(p)&&pt(h));return r("div",{role:"switch","aria-checked":o,class:[`${e}-switch`,this.themeClass,b&&`${e}-switch--icon`,o&&`${e}-switch--active`,t&&`${e}-switch--disabled`,this.round&&`${e}-switch--round`,this.loading&&`${e}-switch--loading`,this.pressed&&`${e}-switch--pressed`,this.rubberBand&&`${e}-switch--rubber-band`],tabindex:this.mergedDisabled?void 0:0,style:this.cssVars,onClick:this.handleClick,onFocus:this.handleFocus,onBlur:this.handleBlur,onKeyup:this.handleKeyup,onKeydown:this.handleKeydown},r("div",{class:`${e}-switch__rail`,"aria-hidden":"true",style:l},ye(s,f=>ye(a,S=>f||S?r("div",{"aria-hidden":!0,class:`${e}-switch__children-placeholder`},r("div",{class:`${e}-switch__rail-placeholder`},r("div",{class:`${e}-switch__button-placeholder`}),f),r("div",{class:`${e}-switch__rail-placeholder`},r("div",{class:`${e}-switch__button-placeholder`}),S)):null)),r("div",{class:`${e}-switch__button`},ye(g,f=>ye(p,S=>ye(h,C=>r(io,null,{default:()=>this.loading?r(Wt,{key:"loading",clsPrefix:e,strokeWidth:20}):this.checked&&(S||f)?r("div",{class:`${e}-switch__button-icon`,key:S?"checked-icon":"icon"},S||f):!this.checked&&(C||f)?r("div",{class:`${e}-switch__button-icon`,key:C?"unchecked-icon":"icon"},C||f):null})))),ye(s,f=>f&&r("div",{key:"checked",class:`${e}-switch__checked`},f)),ye(a,f=>f&&r("div",{key:"unchecked",class:`${e}-switch__unchecked`},f)))))}}),Wo={class:"settings-view"},jo={class:"settings-layout"},Ho={class:"settings-content"},Uo={style:{display:"flex","flex-direction":"row","justify-content":"space-between","align-items":"center"}},Ko={style:{"white-space":"nowrap"}},Go={key:0},qo={key:1},Yo={key:2},Xo=he({__name:"SettingsView",setup(e){const{width:t}=En(),o=z(()=>t.value<640),l=z(()=>t.value<480),{t:i,availableLocales:d}=On(),s=Xe("settings"),a=z(()=>[{title:"appearance",items:[{title:"theme",type:"radio",items:[{value:"light",label:i("settings.appearance.theme.options.light")},{value:"dark",label:i("settings.appearance.theme.options.dark")},{value:"system",label:i("settings.appearance.theme.options.system")}]}]},{title:"geolocation",items:[{title:"watchCompatibilityMode",type:"checkbox"},{title:"geolocationCorrection",type:"checkbox"}]},{title:"language",items:[{title:"interfaceLanguage",type:"select",items:d.map(g=>({value:g,label:i(`settings.language.interfaceLanguage.options.${g}`)}))},{title:"mapLanguage",type:"select",items:d.map(g=>({value:g,label:i(`settings.language.mapLanguage.options.${g}`)})).concat([{value:"interface",label:i("settings.language.mapLanguage.options.interface")}])}]}]);return Ze(()=>{s.init()}),(g,p)=>(ce(),Se("div",Wo,[it("div",jo,[it("div",Ho,[(ce(!0),Se(Ke,null,lt(a.value,h=>(ce(),_e(oe(eo),{id:"appearance",key:h.title,title:g.$t(`settings.${h.title}.title`)},{default:He(()=>[vt(oe(ro),null,{default:He(()=>[(ce(!0),Se(Ke,null,lt(h.items,b=>(ce(),_e(oe(ao),{key:b.title},{default:He(()=>[it("div",Uo,[it("div",Ko,Tn(b.items?g.$t(`settings.${h.title}.${b.title}.title`):g.$t(`settings.${h.title}.${b.title}`)),1),b.type==="radio"?(ce(),Se("div",Go,[o.value?(ce(),_e(oe(Vt),{key:1,value:oe(s).settings[b.title],"onUpdate:value":f=>oe(s).settings[b.title]=f,options:b.items,"consistent-menu-width":!1},null,8,["value","onUpdate:value","options"])):(ce(),_e(oe(No),{key:0,value:oe(s).settings[b.title],"onUpdate:value":f=>oe(s).settings[b.title]=f},{default:He(()=>[(ce(!0),Se(Ke,null,lt(b.items,f=>(ce(),_e(oe(Mo),{key:f.value,value:f.value,label:f.label,checked:oe(s).settings[b.title]===f.value},null,8,["value","label","checked"]))),128))]),_:2},1032,["value","onUpdate:value"]))])):b.type==="select"?(ce(),Se("div",qo,[vt(oe(Vt),{value:oe(s).settings[b.title],"onUpdate:value":f=>oe(s).settings[b.title]=f,options:b.items,"consistent-menu-width":!1},null,8,["value","onUpdate:value","options"])])):b.type==="checkbox"?(ce(),Se("div",Yo,[vt(oe(Do),{value:oe(s).settings[b.title],"onUpdate:value":f=>oe(s).settings[b.title]=f},null,8,["value","onUpdate:value"])])):kt("",!0)])]),_:2},1024))),128))]),_:2},1024)]),_:2},1032,["title"]))),128))]),l.value?kt("",!0):(ce(),_e(oe(uo),{key:0,"show-rail":!0,class:"settings-nav",style:{width:"128px"}},{default:He(()=>[(ce(!0),Se(Ke,null,lt(a.value,h=>(ce(),_e(oe(so),{key:h.title,title:g.$t(`settings.${h.title}.title`),href:`#${h.title.toLowerCase()}`},null,8,["title","href"]))),128))]),_:1}))])]))}}),si=_n(Xo,[["__scopeId","data-v-c291783a"]]);export{si as default};
