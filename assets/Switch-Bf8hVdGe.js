import{b as T,g as k,p as dt,d as he,i as ft,h as i,q as cn,k as Ze,ab as un,ac as fn,t as ee,s as Fe,f as Rt,C as Ft,J as Tt,F as hn,w as vn,R as gn,U as bn}from"./index-Dif3EidE.js";import{u as Te,V as vt,aS as pn,aT as nt,aU as mn,aF as fe,Y as xe,aG as wn,aV as ot,x as E,y,v as se,F as kt,A as De,C as pe,D as ie,E as We,aW as ht,z as X,G as Le,aa as zt,Q as me,az as yn,P as xn,B as Ot,R as Ne,a5 as Ae,aX as Cn,aY as Sn,M as Rn,a1 as Fn,a2 as Tn,a3 as kn,au as ct,av as gt,I as ut,J as zn,aw as On,ax as In,K as ue,aJ as it}from"./Card-BAEXTjt4.js";import{a as Mn}from"./Suffix-lA-KlE_x.js";import{b as lt,c as bt}from"./ListItem-BI6Lrncx.js";import{e as Pn,i as _n,V as pt,b as Bn,f as $n,h as En}from"./index-DMrmwAH_.js";import{r as Oe,a as It,b as Vn,c as Nn,u as Mt,m as An,i as mt,N as Ln}from"./create-Dd47qeh4.js";import{u as Pt}from"./use-locale-wwiFD7AO.js";function wt(e){return e&-e}class _t{constructor(n,o){this.l=n,this.min=o;const l=new Array(n+1);for(let r=0;r<n+1;++r)l[r]=0;this.ft=l}add(n,o){if(o===0)return;const{l,ft:r}=this;for(n+=1;n<=l;)r[n]+=o,n+=wt(n)}get(n){return this.sum(n+1)-this.sum(n)}sum(n){if(n===void 0&&(n=this.l),n<=0)return 0;const{ft:o,min:l,l:r}=this;if(n>r)throw new Error("[FinweckTree.sum]: `i` is larger than length.");let u=n*l;for(;n>0;)u+=o[n],n-=wt(n);return u}getBound(n){let o=0,l=this.l;for(;l>o;){const r=Math.floor((o+l)/2),u=this.sum(r);if(u>n){l=r;continue}else if(u<n){if(o===r)return this.sum(o+1)<=n?o+1:r;o=r}else return r}return o}}let Ye;function Dn(){return typeof document>"u"?!1:(Ye===void 0&&("matchMedia"in window?Ye=window.matchMedia("(pointer:coarse)").matches:Ye=!1),Ye)}let rt;function yt(){return typeof document>"u"?1:(rt===void 0&&(rt="chrome"in window?window.devicePixelRatio:1),rt)}const Bt="VVirtualListXScroll";function Wn({columnsRef:e,renderColRef:n,renderItemWithColsRef:o}){const l=T(0),r=T(0),u=k(()=>{const b=e.value;if(b.length===0)return null;const g=new _t(b.length,0);return b.forEach((R,p)=>{g.add(p,R.width)}),g}),h=Te(()=>{const b=u.value;return b!==null?Math.max(b.getBound(r.value)-1,0):0}),a=b=>{const g=u.value;return g!==null?g.sum(b):0},x=Te(()=>{const b=u.value;return b!==null?Math.min(b.getBound(r.value+l.value)+1,e.value.length-1):0});return dt(Bt,{startIndexRef:h,endIndexRef:x,columnsRef:e,renderColRef:n,renderItemWithColsRef:o,getLeft:a}),{listWidthRef:l,scrollLeftRef:r}}const xt=he({name:"VirtualListRow",props:{index:{type:Number,required:!0},item:{type:Object,required:!0}},setup(){const{startIndexRef:e,endIndexRef:n,columnsRef:o,getLeft:l,renderColRef:r,renderItemWithColsRef:u}=ft(Bt);return{startIndex:e,endIndex:n,columns:o,renderCol:r,renderItemWithCols:u,getLeft:l}},render(){const{startIndex:e,endIndex:n,columns:o,renderCol:l,renderItemWithCols:r,getLeft:u,item:h}=this;if(r!=null)return r({itemIndex:this.index,startColIndex:e,endColIndex:n,allColumns:o,item:h,getLeft:u});if(l!=null){const a=[];for(let x=e;x<=n;++x){const b=o[x];a.push(l({column:b,left:u(x),item:h}))}return a}return null}}),jn=nt(".v-vl",{maxHeight:"inherit",height:"100%",overflow:"auto",minWidth:"1px"},[nt("&:not(.v-vl--show-scrollbar)",{scrollbarWidth:"none"},[nt("&::-webkit-scrollbar, &::-webkit-scrollbar-track-piece, &::-webkit-scrollbar-thumb",{width:0,height:0,display:"none"})])]),Hn=he({name:"VirtualList",inheritAttrs:!1,props:{showScrollbar:{type:Boolean,default:!0},columns:{type:Array,default:()=>[]},renderCol:Function,renderItemWithCols:Function,items:{type:Array,default:()=>[]},itemSize:{type:Number,required:!0},itemResizable:Boolean,itemsStyle:[String,Object],visibleItemsTag:{type:[String,Object],default:"div"},visibleItemsProps:Object,ignoreItemResize:Boolean,onScroll:Function,onWheel:Function,onResize:Function,defaultScrollKey:[Number,String],defaultScrollIndex:Number,keyField:{type:String,default:"key"},paddingTop:{type:[Number,String],default:0},paddingBottom:{type:[Number,String],default:0}},setup(e){const n=pn();jn.mount({id:"vueuc/virtual-list",head:!0,anchorMetaName:mn,ssr:n}),Ze(()=>{const{defaultScrollIndex:d,defaultScrollKey:w}=e;d!=null?G({index:d}):w!=null&&G({key:w})});let o=!1,l=!1;un(()=>{if(o=!1,!l){l=!0;return}G({top:C.value,left:h.value})}),fn(()=>{o=!0,l||(l=!0)});const r=Te(()=>{if(e.renderCol==null&&e.renderItemWithCols==null||e.columns.length===0)return;let d=0;return e.columns.forEach(w=>{d+=w.width}),d}),u=k(()=>{const d=new Map,{keyField:w}=e;return e.items.forEach((P,L)=>{d.set(P[w],L)}),d}),{scrollLeftRef:h,listWidthRef:a}=Wn({columnsRef:ee(e,"columns"),renderColRef:ee(e,"renderCol"),renderItemWithColsRef:ee(e,"renderItemWithCols")}),x=T(null),b=T(void 0),g=new Map,R=k(()=>{const{items:d,itemSize:w,keyField:P}=e,L=new _t(d.length,w);return d.forEach((q,_)=>{const H=q[P],N=g.get(H);N!==void 0&&L.add(_,N)}),L}),p=T(0),C=T(0),S=Te(()=>Math.max(R.value.getBound(C.value-fe(e.paddingTop))-1,0)),W=k(()=>{const{value:d}=b;if(d===void 0)return[];const{items:w,itemSize:P}=e,L=S.value,q=Math.min(L+Math.ceil(d/P+1),w.length-1),_=[];for(let H=L;H<=q;++H)_.push(w[H]);return _}),G=(d,w)=>{if(typeof d=="number"){K(d,w,"auto");return}const{left:P,top:L,index:q,key:_,position:H,behavior:N,debounce:D=!0}=d;if(P!==void 0||L!==void 0)K(P,L,N);else if(q!==void 0)j(q,N,D);else if(_!==void 0){const s=u.value.get(_);s!==void 0&&j(s,N,D)}else H==="bottom"?K(0,Number.MAX_SAFE_INTEGER,N):H==="top"&&K(0,0,N)};let O,z=null;function j(d,w,P){const{value:L}=R,q=L.sum(d)+fe(e.paddingTop);if(!P)x.value.scrollTo({left:0,top:q,behavior:w});else{O=d,z!==null&&window.clearTimeout(z),z=window.setTimeout(()=>{O=void 0,z=null},16);const{scrollTop:_,offsetHeight:H}=x.value;if(q>_){const N=L.get(d);q+N<=_+H||x.value.scrollTo({left:0,top:q+N-H,behavior:w})}else x.value.scrollTo({left:0,top:q,behavior:w})}}function K(d,w,P){x.value.scrollTo({left:d,top:w,behavior:P})}function U(d,w){var P,L,q;if(o||e.ignoreItemResize||oe(w.target))return;const{value:_}=R,H=u.value.get(d),N=_.get(H),D=(q=(L=(P=w.borderBoxSize)===null||P===void 0?void 0:P[0])===null||L===void 0?void 0:L.blockSize)!==null&&q!==void 0?q:w.contentRect.height;if(D===N)return;D-e.itemSize===0?g.delete(d):g.set(d,D-e.itemSize);const v=D-N;if(v===0)return;_.add(H,v);const A=x.value;if(A!=null){if(O===void 0){const le=_.sum(H);A.scrollTop>le&&A.scrollBy(0,v)}else if(H<O)A.scrollBy(0,v);else if(H===O){const le=_.sum(H);D+le>A.scrollTop+A.offsetHeight&&A.scrollBy(0,v)}J()}p.value++}const te=!Dn();let Y=!1;function M(d){var w;(w=e.onScroll)===null||w===void 0||w.call(e,d),(!te||!Y)&&J()}function ae(d){var w;if((w=e.onWheel)===null||w===void 0||w.call(e,d),te){const P=x.value;if(P!=null){if(d.deltaX===0&&(P.scrollTop===0&&d.deltaY<=0||P.scrollTop+P.offsetHeight>=P.scrollHeight&&d.deltaY>=0))return;d.preventDefault(),P.scrollTop+=d.deltaY/yt(),P.scrollLeft+=d.deltaX/yt(),J(),Y=!0,wn(()=>{Y=!1})}}}function ne(d){if(o||oe(d.target))return;if(e.renderCol==null&&e.renderItemWithCols==null){if(d.contentRect.height===b.value)return}else if(d.contentRect.height===b.value&&d.contentRect.width===a.value)return;b.value=d.contentRect.height,a.value=d.contentRect.width;const{onResize:w}=e;w!==void 0&&w(d)}function J(){const{value:d}=x;d!=null&&(C.value=d.scrollTop,h.value=d.scrollLeft)}function oe(d){let w=d;for(;w!==null;){if(w.style.display==="none")return!0;w=w.parentElement}return!1}return{listHeight:b,listStyle:{overflow:"auto"},keyToIndex:u,itemsStyle:k(()=>{const{itemResizable:d}=e,w=xe(R.value.sum());return p.value,[e.itemsStyle,{boxSizing:"content-box",width:xe(r.value),height:d?"":w,minHeight:d?w:"",paddingTop:xe(e.paddingTop),paddingBottom:xe(e.paddingBottom)}]}),visibleItemsStyle:k(()=>(p.value,{transform:`translateY(${xe(R.value.sum(S.value))})`})),viewportItems:W,listElRef:x,itemsElRef:T(null),scrollTo:G,handleListResize:ne,handleListScroll:M,handleListWheel:ae,handleItemResize:U}},render(){const{itemResizable:e,keyField:n,keyToIndex:o,visibleItemsTag:l}=this;return i(vt,{onResize:this.handleListResize},{default:()=>{var r,u;return i("div",cn(this.$attrs,{class:["v-vl",this.showScrollbar&&"v-vl--show-scrollbar"],onScroll:this.handleListScroll,onWheel:this.handleListWheel,ref:"listElRef"}),[this.items.length!==0?i("div",{ref:"itemsElRef",class:"v-vl-items",style:this.itemsStyle},[i(l,Object.assign({class:"v-vl-visible-items",style:this.visibleItemsStyle},this.visibleItemsProps),{default:()=>{const{renderCol:h,renderItemWithCols:a}=this;return this.viewportItems.map(x=>{const b=x[n],g=o.get(b),R=h!=null?i(xt,{index:g,item:x}):void 0,p=a!=null?i(xt,{index:g,item:x}):void 0,C=this.$slots.default({item:x,renderedCols:R,renderedItemWithCols:p,index:g})[0];return e?i(vt,{key:b,onResize:S=>this.handleItemResize(b,S)},{default:()=>C}):(C.key=b,C)})}})]):(u=(r=this.$slots).empty)===null||u===void 0?void 0:u.call(r)])}})}});function $t(e,n){n&&(Ze(()=>{const{value:o}=e;o&&ot.registerHandler(o,n)}),Fe(e,(o,l)=>{l&&ot.unregisterHandler(l)},{deep:!1}),Rt(()=>{const{value:o}=e;o&&ot.unregisterHandler(o)}))}function at(e){const n=e.filter(o=>o!==void 0);if(n.length!==0)return n.length===1?n[0]:o=>{e.forEach(l=>{l&&l(o)})}}const Kn=he({name:"Checkmark",render(){return i("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 16 16"},i("g",{fill:"none"},i("path",{d:"M14.046 3.486a.75.75 0 0 1-.032 1.06l-7.93 7.474a.85.85 0 0 1-1.188-.022l-2.68-2.72a.75.75 0 1 1 1.068-1.053l2.234 2.267l7.468-7.038a.75.75 0 0 1 1.06.032z",fill:"currentColor"})))}}),Un=he({name:"Empty",render(){return i("svg",{viewBox:"0 0 28 28",fill:"none",xmlns:"http://www.w3.org/2000/svg"},i("path",{d:"M26 7.5C26 11.0899 23.0899 14 19.5 14C15.9101 14 13 11.0899 13 7.5C13 3.91015 15.9101 1 19.5 1C23.0899 1 26 3.91015 26 7.5ZM16.8536 4.14645C16.6583 3.95118 16.3417 3.95118 16.1464 4.14645C15.9512 4.34171 15.9512 4.65829 16.1464 4.85355L18.7929 7.5L16.1464 10.1464C15.9512 10.3417 15.9512 10.6583 16.1464 10.8536C16.3417 11.0488 16.6583 11.0488 16.8536 10.8536L19.5 8.20711L22.1464 10.8536C22.3417 11.0488 22.6583 11.0488 22.8536 10.8536C23.0488 10.6583 23.0488 10.3417 22.8536 10.1464L20.2071 7.5L22.8536 4.85355C23.0488 4.65829 23.0488 4.34171 22.8536 4.14645C22.6583 3.95118 22.3417 3.95118 22.1464 4.14645L19.5 6.79289L16.8536 4.14645Z",fill:"currentColor"}),i("path",{d:"M25 22.75V12.5991C24.5572 13.0765 24.053 13.4961 23.5 13.8454V16H17.5L17.3982 16.0068C17.0322 16.0565 16.75 16.3703 16.75 16.75C16.75 18.2688 15.5188 19.5 14 19.5C12.4812 19.5 11.25 18.2688 11.25 16.75L11.2432 16.6482C11.1935 16.2822 10.8797 16 10.5 16H4.5V7.25C4.5 6.2835 5.2835 5.5 6.25 5.5H12.2696C12.4146 4.97463 12.6153 4.47237 12.865 4H6.25C4.45507 4 3 5.45507 3 7.25V22.75C3 24.5449 4.45507 26 6.25 26H21.75C23.5449 26 25 24.5449 25 22.75ZM4.5 22.75V17.5H9.81597L9.85751 17.7041C10.2905 19.5919 11.9808 21 14 21L14.215 20.9947C16.2095 20.8953 17.842 19.4209 18.184 17.5H23.5V22.75C23.5 23.7165 22.7165 24.5 21.75 24.5H6.25C5.2835 24.5 4.5 23.7165 4.5 22.75Z",fill:"currentColor"}))}}),qn=he({props:{onFocus:Function,onBlur:Function},setup(e){return()=>i("div",{style:"width: 0; height: 0",tabindex:0,onFocus:e.onFocus,onBlur:e.onBlur})}}),Gn=E("empty",`
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
 `,[se("+",[y("description",`
 margin-top: 8px;
 `)])]),y("description",`
 transition: color .3s var(--n-bezier);
 color: var(--n-text-color);
 `),y("extra",`
 text-align: center;
 transition: color .3s var(--n-bezier);
 margin-top: 12px;
 color: var(--n-extra-text-color);
 `)]),Yn=Object.assign(Object.assign({},pe.props),{description:String,showDescription:{type:Boolean,default:!0},showIcon:{type:Boolean,default:!0},size:{type:String,default:"medium"},renderIcon:Function}),Xn=he({name:"Empty",props:Yn,slots:Object,setup(e){const{mergedClsPrefixRef:n,inlineThemeDisabled:o,mergedComponentPropsRef:l}=De(e),r=pe("Empty","-empty",Gn,Pn,e,n),{localeRef:u}=Pt("Empty"),h=k(()=>{var g,R,p;return(g=e.description)!==null&&g!==void 0?g:(p=(R=l==null?void 0:l.value)===null||R===void 0?void 0:R.Empty)===null||p===void 0?void 0:p.description}),a=k(()=>{var g,R;return((R=(g=l==null?void 0:l.value)===null||g===void 0?void 0:g.Empty)===null||R===void 0?void 0:R.renderIcon)||(()=>i(Un,null))}),x=k(()=>{const{size:g}=e,{common:{cubicBezierEaseInOut:R},self:{[ie("iconSize",g)]:p,[ie("fontSize",g)]:C,textColor:S,iconColor:W,extraTextColor:G}}=r.value;return{"--n-icon-size":p,"--n-font-size":C,"--n-bezier":R,"--n-text-color":S,"--n-icon-color":W,"--n-extra-text-color":G}}),b=o?We("empty",k(()=>{let g="";const{size:R}=e;return g+=R[0],g}),x,e):void 0;return{mergedClsPrefix:n,mergedRenderIcon:a,localizedDescription:k(()=>h.value||u.value.description),cssVars:o?void 0:x,themeClass:b==null?void 0:b.themeClass,onRender:b==null?void 0:b.onRender}},render(){const{$slots:e,mergedClsPrefix:n,onRender:o}=this;return o==null||o(),i("div",{class:[`${n}-empty`,this.themeClass],style:this.cssVars},this.showIcon?i("div",{class:`${n}-empty__icon`},e.icon?e.icon():i(kt,{clsPrefix:n},{default:this.mergedRenderIcon})):null,this.showDescription?i("div",{class:`${n}-empty__description`},e.default?e.default():this.localizedDescription):null,e.extra?i("div",{class:`${n}-empty__extra`},e.extra()):null)}}),Ct=he({name:"NBaseSelectGroupHeader",props:{clsPrefix:{type:String,required:!0},tmNode:{type:Object,required:!0}},setup(){const{renderLabelRef:e,renderOptionRef:n,labelFieldRef:o,nodePropsRef:l}=ft(ht);return{labelField:o,nodeProps:l,renderLabel:e,renderOption:n}},render(){const{clsPrefix:e,renderLabel:n,renderOption:o,nodeProps:l,tmNode:{rawNode:r}}=this,u=l==null?void 0:l(r),h=n?n(r,!1):Oe(r[this.labelField],r,!1),a=i("div",Object.assign({},u,{class:[`${e}-base-select-group-header`,u==null?void 0:u.class]}),h);return r.render?r.render({node:a,option:r}):o?o({node:a,option:r,selected:!1}):a}});function Zn(e,n){return i(Ft,{name:"fade-in-scale-up-transition"},{default:()=>e?i(kt,{clsPrefix:n,class:`${n}-base-select-option__check`},{default:()=>i(Kn)}):null})}const St=he({name:"NBaseSelectOption",props:{clsPrefix:{type:String,required:!0},tmNode:{type:Object,required:!0}},setup(e){const{valueRef:n,pendingTmNodeRef:o,multipleRef:l,valueSetRef:r,renderLabelRef:u,renderOptionRef:h,labelFieldRef:a,valueFieldRef:x,showCheckmarkRef:b,nodePropsRef:g,handleOptionClick:R,handleOptionMouseEnter:p}=ft(ht),C=Te(()=>{const{value:O}=o;return O?e.tmNode.key===O.key:!1});function S(O){const{tmNode:z}=e;z.disabled||R(O,z)}function W(O){const{tmNode:z}=e;z.disabled||p(O,z)}function G(O){const{tmNode:z}=e,{value:j}=C;z.disabled||j||p(O,z)}return{multiple:l,isGrouped:Te(()=>{const{tmNode:O}=e,{parent:z}=O;return z&&z.rawNode.type==="group"}),showCheckmark:b,nodeProps:g,isPending:C,isSelected:Te(()=>{const{value:O}=n,{value:z}=l;if(O===null)return!1;const j=e.tmNode.rawNode[x.value];if(z){const{value:K}=r;return K.has(j)}else return O===j}),labelField:a,renderLabel:u,renderOption:h,handleMouseMove:G,handleMouseEnter:W,handleClick:S}},render(){const{clsPrefix:e,tmNode:{rawNode:n},isSelected:o,isPending:l,isGrouped:r,showCheckmark:u,nodeProps:h,renderOption:a,renderLabel:x,handleClick:b,handleMouseEnter:g,handleMouseMove:R}=this,p=Zn(o,e),C=x?[x(n,o),u&&p]:[Oe(n[this.labelField],n,o),u&&p],S=h==null?void 0:h(n),W=i("div",Object.assign({},S,{class:[`${e}-base-select-option`,n.class,S==null?void 0:S.class,{[`${e}-base-select-option--disabled`]:n.disabled,[`${e}-base-select-option--selected`]:o,[`${e}-base-select-option--grouped`]:r,[`${e}-base-select-option--pending`]:l,[`${e}-base-select-option--show-checkmark`]:u}],style:[(S==null?void 0:S.style)||"",n.style||""],onClick:at([b,S==null?void 0:S.onClick]),onMouseenter:at([g,S==null?void 0:S.onMouseenter]),onMousemove:at([R,S==null?void 0:S.onMousemove])}),i("div",{class:`${e}-base-select-option__content`},C));return n.render?n.render({node:W,option:n,selected:o}):a?a({node:W,option:n,selected:o}):W}}),Jn=E("base-select-menu",`
 line-height: 1.5;
 outline: none;
 z-index: 0;
 position: relative;
 border-radius: var(--n-border-radius);
 transition:
 background-color .3s var(--n-bezier),
 box-shadow .3s var(--n-bezier);
 background-color: var(--n-color);
`,[E("scrollbar",`
 max-height: var(--n-height);
 `),E("virtual-list",`
 max-height: var(--n-height);
 `),E("base-select-option",`
 min-height: var(--n-option-height);
 font-size: var(--n-option-font-size);
 display: flex;
 align-items: center;
 `,[y("content",`
 z-index: 1;
 white-space: nowrap;
 text-overflow: ellipsis;
 overflow: hidden;
 `)]),E("base-select-group-header",`
 min-height: var(--n-option-height);
 font-size: .93em;
 display: flex;
 align-items: center;
 `),E("base-select-menu-option-wrapper",`
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
 `),E("base-select-group-header",`
 position: relative;
 cursor: default;
 padding: var(--n-option-padding);
 color: var(--n-group-header-text-color);
 `),E("base-select-option",`
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
 `),se("&::before",`
 content: "";
 position: absolute;
 left: 4px;
 right: 4px;
 top: 0;
 bottom: 0;
 border-radius: var(--n-border-radius);
 transition: background-color .3s var(--n-bezier);
 `),se("&:active",`
 color: var(--n-option-text-color-pressed);
 `),X("grouped",`
 padding-left: calc(var(--n-option-padding-left) * 1.5);
 `),X("pending",[se("&::before",`
 background-color: var(--n-option-color-pending);
 `)]),X("selected",`
 color: var(--n-option-text-color-active);
 `,[se("&::before",`
 background-color: var(--n-option-color-active);
 `),X("pending",[se("&::before",`
 background-color: var(--n-option-color-active-pending);
 `)])]),X("disabled",`
 cursor: not-allowed;
 `,[Le("selected",`
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
 `,[zt({enterScale:"0.5"})])])]),Qn=he({name:"InternalSelectMenu",props:Object.assign(Object.assign({},pe.props),{clsPrefix:{type:String,required:!0},scrollable:{type:Boolean,default:!0},treeMate:{type:Object,required:!0},multiple:Boolean,size:{type:String,default:"medium"},value:{type:[String,Number,Array],default:null},autoPending:Boolean,virtualScroll:{type:Boolean,default:!0},show:{type:Boolean,default:!0},labelField:{type:String,default:"label"},valueField:{type:String,default:"value"},loading:Boolean,focusable:Boolean,renderLabel:Function,renderOption:Function,nodeProps:Function,showCheckmark:{type:Boolean,default:!0},onMousedown:Function,onScroll:Function,onFocus:Function,onBlur:Function,onKeyup:Function,onKeydown:Function,onTabOut:Function,onMouseenter:Function,onMouseleave:Function,onResize:Function,resetMenuOnOptionsChange:{type:Boolean,default:!0},inlineThemeDisabled:Boolean,onToggle:Function}),setup(e){const{mergedClsPrefixRef:n,mergedRtlRef:o}=De(e),l=Ot("InternalSelectMenu",o,n),r=pe("InternalSelectMenu","-internal-select-menu",Jn,_n,e,ee(e,"clsPrefix")),u=T(null),h=T(null),a=T(null),x=k(()=>e.treeMate.getFlattenedNodes()),b=k(()=>Vn(x.value)),g=T(null);function R(){const{treeMate:s}=e;let v=null;const{value:A}=e;A===null?v=s.getFirstAvailableNode():(e.multiple?v=s.getNode((A||[])[(A||[]).length-1]):v=s.getNode(A),(!v||v.disabled)&&(v=s.getFirstAvailableNode())),w(v||null)}function p(){const{value:s}=g;s&&!e.treeMate.getNode(s.key)&&(g.value=null)}let C;Fe(()=>e.show,s=>{s?C=Fe(()=>e.treeMate,()=>{e.resetMenuOnOptionsChange?(e.autoPending?R():p(),Tt(P)):p()},{immediate:!0}):C==null||C()},{immediate:!0}),Rt(()=>{C==null||C()});const S=k(()=>fe(r.value.self[ie("optionHeight",e.size)])),W=k(()=>Ne(r.value.self[ie("padding",e.size)])),G=k(()=>e.multiple&&Array.isArray(e.value)?new Set(e.value):new Set),O=k(()=>{const s=x.value;return s&&s.length===0});function z(s){const{onToggle:v}=e;v&&v(s)}function j(s){const{onScroll:v}=e;v&&v(s)}function K(s){var v;(v=a.value)===null||v===void 0||v.sync(),j(s)}function U(){var s;(s=a.value)===null||s===void 0||s.sync()}function te(){const{value:s}=g;return s||null}function Y(s,v){v.disabled||w(v,!1)}function M(s,v){v.disabled||z(v)}function ae(s){var v;Ae(s,"action")||(v=e.onKeyup)===null||v===void 0||v.call(e,s)}function ne(s){var v;Ae(s,"action")||(v=e.onKeydown)===null||v===void 0||v.call(e,s)}function J(s){var v;(v=e.onMousedown)===null||v===void 0||v.call(e,s),!e.focusable&&s.preventDefault()}function oe(){const{value:s}=g;s&&w(s.getNext({loop:!0}),!0)}function d(){const{value:s}=g;s&&w(s.getPrev({loop:!0}),!0)}function w(s,v=!1){g.value=s,v&&P()}function P(){var s,v;const A=g.value;if(!A)return;const le=b.value(A.key);le!==null&&(e.virtualScroll?(s=h.value)===null||s===void 0||s.scrollTo({index:le}):(v=a.value)===null||v===void 0||v.scrollTo({index:le,elSize:S.value}))}function L(s){var v,A;!((v=u.value)===null||v===void 0)&&v.contains(s.target)&&((A=e.onFocus)===null||A===void 0||A.call(e,s))}function q(s){var v,A;!((v=u.value)===null||v===void 0)&&v.contains(s.relatedTarget)||(A=e.onBlur)===null||A===void 0||A.call(e,s)}dt(ht,{handleOptionMouseEnter:Y,handleOptionClick:M,valueSetRef:G,pendingTmNodeRef:g,nodePropsRef:ee(e,"nodeProps"),showCheckmarkRef:ee(e,"showCheckmark"),multipleRef:ee(e,"multiple"),valueRef:ee(e,"value"),renderLabelRef:ee(e,"renderLabel"),renderOptionRef:ee(e,"renderOption"),labelFieldRef:ee(e,"labelField"),valueFieldRef:ee(e,"valueField")}),dt(Cn,u),Ze(()=>{const{value:s}=a;s&&s.sync()});const _=k(()=>{const{size:s}=e,{common:{cubicBezierEaseInOut:v},self:{height:A,borderRadius:le,color:ve,groupHeaderTextColor:ge,actionDividerColor:de,optionTextColorPressed:ce,optionTextColor:ke,optionTextColorDisabled:we,optionTextColorActive:Ie,optionOpacityDisabled:Me,optionCheckColor:Pe,actionTextColor:_e,optionColorPending:Ce,optionColorActive:Se,loadingColor:Be,loadingSize:$e,optionColorActivePending:Ee,[ie("optionFontSize",s)]:ze,[ie("optionHeight",s)]:Re,[ie("optionPadding",s)]:re}}=r.value;return{"--n-height":A,"--n-action-divider-color":de,"--n-action-text-color":_e,"--n-bezier":v,"--n-border-radius":le,"--n-color":ve,"--n-option-font-size":ze,"--n-group-header-text-color":ge,"--n-option-check-color":Pe,"--n-option-color-pending":Ce,"--n-option-color-active":Se,"--n-option-color-active-pending":Ee,"--n-option-height":Re,"--n-option-opacity-disabled":Me,"--n-option-text-color":ke,"--n-option-text-color-active":Ie,"--n-option-text-color-disabled":we,"--n-option-text-color-pressed":ce,"--n-option-padding":re,"--n-option-padding-left":Ne(re,"left"),"--n-option-padding-right":Ne(re,"right"),"--n-loading-color":Be,"--n-loading-size":$e}}),{inlineThemeDisabled:H}=e,N=H?We("internal-select-menu",k(()=>e.size[0]),_,e):void 0,D={selfRef:u,next:oe,prev:d,getPendingTmNode:te};return $t(u,e.onResize),Object.assign({mergedTheme:r,mergedClsPrefix:n,rtlEnabled:l,virtualListRef:h,scrollbarRef:a,itemSize:S,padding:W,flattenedNodes:x,empty:O,virtualListContainer(){const{value:s}=h;return s==null?void 0:s.listElRef},virtualListContent(){const{value:s}=h;return s==null?void 0:s.itemsElRef},doScroll:j,handleFocusin:L,handleFocusout:q,handleKeyUp:ae,handleKeyDown:ne,handleMouseDown:J,handleVirtualListResize:U,handleVirtualListScroll:K,cssVars:H?void 0:_,themeClass:N==null?void 0:N.themeClass,onRender:N==null?void 0:N.onRender},D)},render(){const{$slots:e,virtualScroll:n,clsPrefix:o,mergedTheme:l,themeClass:r,onRender:u}=this;return u==null||u(),i("div",{ref:"selfRef",tabindex:this.focusable?0:-1,class:[`${o}-base-select-menu`,this.rtlEnabled&&`${o}-base-select-menu--rtl`,r,this.multiple&&`${o}-base-select-menu--multiple`],style:this.cssVars,onFocusin:this.handleFocusin,onFocusout:this.handleFocusout,onKeyup:this.handleKeyUp,onKeydown:this.handleKeyDown,onMousedown:this.handleMouseDown,onMouseenter:this.onMouseenter,onMouseleave:this.onMouseleave},me(e.header,h=>h&&i("div",{class:`${o}-base-select-menu__header`,"data-header":!0,key:"header"},h)),this.loading?i("div",{class:`${o}-base-select-menu__loading`},i(It,{clsPrefix:o,strokeWidth:20})):this.empty?i("div",{class:`${o}-base-select-menu__empty`,"data-empty":!0},xn(e.empty,()=>[i(Xn,{theme:l.peers.Empty,themeOverrides:l.peerOverrides.Empty,size:this.size})])):i(yn,{ref:"scrollbarRef",theme:l.peers.Scrollbar,themeOverrides:l.peerOverrides.Scrollbar,scrollable:this.scrollable,container:n?this.virtualListContainer:void 0,content:n?this.virtualListContent:void 0,onScroll:n?void 0:this.doScroll},{default:()=>n?i(Hn,{ref:"virtualListRef",class:`${o}-virtual-list`,items:this.flattenedNodes,itemSize:this.itemSize,showScrollbar:!1,paddingTop:this.padding.top,paddingBottom:this.padding.bottom,onResize:this.handleVirtualListResize,onScroll:this.handleVirtualListScroll,itemResizable:!0},{default:({item:h})=>h.isGroup?i(Ct,{key:h.key,clsPrefix:o,tmNode:h}):h.ignored?null:i(St,{clsPrefix:o,key:h.key,tmNode:h})}):i("div",{class:`${o}-base-select-menu-option-wrapper`,style:{paddingTop:this.padding.top,paddingBottom:this.padding.bottom}},this.flattenedNodes.map(h=>h.isGroup?i(Ct,{key:h.key,clsPrefix:o,tmNode:h}):i(St,{clsPrefix:o,key:h.key,tmNode:h})))}),me(e.action,h=>h&&[i("div",{class:`${o}-base-select-menu__action`,"data-action":!0,key:"action"},h),i(qn,{onFocus:this.onTabOut,key:"focus-detector"})]))}}),eo=se([E("base-selection",`
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
 `,[E("base-loading",`
 color: var(--n-loading-color);
 `),E("base-selection-tags","min-height: var(--n-height);"),y("border, state-border",`
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
 `),E("base-suffix",`
 cursor: pointer;
 position: absolute;
 top: 50%;
 transform: translateY(-50%);
 right: 10px;
 `,[y("arrow",`
 font-size: var(--n-arrow-size);
 color: var(--n-arrow-color);
 transition: color .3s var(--n-bezier);
 `)]),E("base-selection-overlay",`
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
 `)]),E("base-selection-placeholder",`
 color: var(--n-placeholder-color);
 `,[y("inner",`
 max-width: 100%;
 overflow: hidden;
 `)]),E("base-selection-tags",`
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
 `),E("base-selection-label",`
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
 `,[E("base-selection-input",`
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
 `)]),Le("disabled",[se("&:hover",[y("state-border",`
 box-shadow: var(--n-box-shadow-hover);
 border: var(--n-border-hover);
 `)]),X("focus",[y("state-border",`
 box-shadow: var(--n-box-shadow-focus);
 border: var(--n-border-focus);
 `)]),X("active",[y("state-border",`
 box-shadow: var(--n-box-shadow-active);
 border: var(--n-border-active);
 `),E("base-selection-label","background-color: var(--n-color-active);"),E("base-selection-tags","background-color: var(--n-color-active);")])]),X("disabled","cursor: not-allowed;",[y("arrow",`
 color: var(--n-arrow-color-disabled);
 `),E("base-selection-label",`
 cursor: not-allowed;
 background-color: var(--n-color-disabled);
 `,[E("base-selection-input",`
 cursor: not-allowed;
 color: var(--n-text-color-disabled);
 `),y("render-label",`
 color: var(--n-text-color-disabled);
 `)]),E("base-selection-tags",`
 cursor: not-allowed;
 background-color: var(--n-color-disabled);
 `),E("base-selection-placeholder",`
 cursor: not-allowed;
 color: var(--n-placeholder-color-disabled);
 `)]),E("base-selection-input-tag",`
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
 `)]),["warning","error"].map(e=>X(`${e}-status`,[y("state-border",`border: var(--n-border-${e});`),Le("disabled",[se("&:hover",[y("state-border",`
 box-shadow: var(--n-box-shadow-hover-${e});
 border: var(--n-border-hover-${e});
 `)]),X("active",[y("state-border",`
 box-shadow: var(--n-box-shadow-active-${e});
 border: var(--n-border-active-${e});
 `),E("base-selection-label",`background-color: var(--n-color-active-${e});`),E("base-selection-tags",`background-color: var(--n-color-active-${e});`)]),X("focus",[y("state-border",`
 box-shadow: var(--n-box-shadow-focus-${e});
 border: var(--n-border-focus-${e});
 `)])])]))]),E("base-selection-popover",`
 margin-bottom: -3px;
 display: flex;
 flex-wrap: wrap;
 margin-right: -8px;
 `),E("base-selection-tag-wrapper",`
 max-width: 100%;
 display: inline-flex;
 padding: 0 7px 3px 0;
 `,[se("&:last-child","padding-right: 0;"),E("tag",`
 font-size: 14px;
 max-width: 100%;
 `,[y("content",`
 line-height: 1.25;
 text-overflow: ellipsis;
 overflow: hidden;
 `)])])]),to=he({name:"InternalSelection",props:Object.assign(Object.assign({},pe.props),{clsPrefix:{type:String,required:!0},bordered:{type:Boolean,default:void 0},active:Boolean,pattern:{type:String,default:""},placeholder:String,selectedOption:{type:Object,default:null},selectedOptions:{type:Array,default:null},labelField:{type:String,default:"label"},valueField:{type:String,default:"value"},multiple:Boolean,filterable:Boolean,clearable:Boolean,disabled:Boolean,size:{type:String,default:"medium"},loading:Boolean,autofocus:Boolean,showArrow:{type:Boolean,default:!0},inputProps:Object,focused:Boolean,renderTag:Function,onKeydown:Function,onClick:Function,onBlur:Function,onFocus:Function,onDeleteOption:Function,maxTagCount:[String,Number],ellipsisTagPopoverProps:Object,onClear:Function,onPatternInput:Function,onPatternFocus:Function,onPatternBlur:Function,renderLabel:Function,status:String,inlineThemeDisabled:Boolean,ignoreComposition:{type:Boolean,default:!0},onResize:Function}),setup(e){const{mergedClsPrefixRef:n,mergedRtlRef:o}=De(e),l=Ot("InternalSelection",o,n),r=T(null),u=T(null),h=T(null),a=T(null),x=T(null),b=T(null),g=T(null),R=T(null),p=T(null),C=T(null),S=T(!1),W=T(!1),G=T(!1),O=pe("InternalSelection","-internal-selection",eo,Bn,e,ee(e,"clsPrefix")),z=k(()=>e.clearable&&!e.disabled&&(G.value||e.active)),j=k(()=>e.selectedOption?e.renderTag?e.renderTag({option:e.selectedOption,handleClose:()=>{}}):e.renderLabel?e.renderLabel(e.selectedOption,!0):Oe(e.selectedOption[e.labelField],e.selectedOption,!0):e.placeholder),K=k(()=>{const c=e.selectedOption;if(c)return c[e.labelField]}),U=k(()=>e.multiple?!!(Array.isArray(e.selectedOptions)&&e.selectedOptions.length):e.selectedOption!==null);function te(){var c;const{value:m}=r;if(m){const{value:Z}=u;Z&&(Z.style.width=`${m.offsetWidth}px`,e.maxTagCount!=="responsive"&&((c=p.value)===null||c===void 0||c.sync({showAllItemsBeforeCalculate:!1})))}}function Y(){const{value:c}=C;c&&(c.style.display="none")}function M(){const{value:c}=C;c&&(c.style.display="inline-block")}Fe(ee(e,"active"),c=>{c||Y()}),Fe(ee(e,"pattern"),()=>{e.multiple&&Tt(te)});function ae(c){const{onFocus:m}=e;m&&m(c)}function ne(c){const{onBlur:m}=e;m&&m(c)}function J(c){const{onDeleteOption:m}=e;m&&m(c)}function oe(c){const{onClear:m}=e;m&&m(c)}function d(c){const{onPatternInput:m}=e;m&&m(c)}function w(c){var m;(!c.relatedTarget||!(!((m=h.value)===null||m===void 0)&&m.contains(c.relatedTarget)))&&ae(c)}function P(c){var m;!((m=h.value)===null||m===void 0)&&m.contains(c.relatedTarget)||ne(c)}function L(c){oe(c)}function q(){G.value=!0}function _(){G.value=!1}function H(c){!e.active||!e.filterable||c.target!==u.value&&c.preventDefault()}function N(c){J(c)}const D=T(!1);function s(c){if(c.key==="Backspace"&&!D.value&&!e.pattern.length){const{selectedOptions:m}=e;m!=null&&m.length&&N(m[m.length-1])}}let v=null;function A(c){const{value:m}=r;if(m){const Z=c.target.value;m.textContent=Z,te()}e.ignoreComposition&&D.value?v=c:d(c)}function le(){D.value=!0}function ve(){D.value=!1,e.ignoreComposition&&d(v),v=null}function ge(c){var m;W.value=!0,(m=e.onPatternFocus)===null||m===void 0||m.call(e,c)}function de(c){var m;W.value=!1,(m=e.onPatternBlur)===null||m===void 0||m.call(e,c)}function ce(){var c,m;if(e.filterable)W.value=!1,(c=b.value)===null||c===void 0||c.blur(),(m=u.value)===null||m===void 0||m.blur();else if(e.multiple){const{value:Z}=a;Z==null||Z.blur()}else{const{value:Z}=x;Z==null||Z.blur()}}function ke(){var c,m,Z;e.filterable?(W.value=!1,(c=b.value)===null||c===void 0||c.focus()):e.multiple?(m=a.value)===null||m===void 0||m.focus():(Z=x.value)===null||Z===void 0||Z.focus()}function we(){const{value:c}=u;c&&(M(),c.focus())}function Ie(){const{value:c}=u;c&&c.blur()}function Me(c){const{value:m}=g;m&&m.setTextContent(`+${c}`)}function Pe(){const{value:c}=R;return c}function _e(){return u.value}let Ce=null;function Se(){Ce!==null&&window.clearTimeout(Ce)}function Be(){e.active||(Se(),Ce=window.setTimeout(()=>{U.value&&(S.value=!0)},100))}function $e(){Se()}function Ee(c){c||(Se(),S.value=!1)}Fe(U,c=>{c||(S.value=!1)}),Ze(()=>{vn(()=>{const c=b.value;c&&(e.disabled?c.removeAttribute("tabindex"):c.tabIndex=W.value?-1:0)})}),$t(h,e.onResize);const{inlineThemeDisabled:ze}=e,Re=k(()=>{const{size:c}=e,{common:{cubicBezierEaseInOut:m},self:{fontWeight:Z,borderRadius:Je,color:Qe,placeholderColor:je,textColor:He,paddingSingle:Ke,paddingMultiple:et,caretColor:tt,colorDisabled:Ue,textColorDisabled:ye,placeholderColorDisabled:t,colorActive:f,boxShadowFocus:F,boxShadowActive:V,boxShadowHover:B,border:I,borderFocus:$,borderHover:Q,borderActive:be,arrowColor:Vt,arrowColorDisabled:Nt,loadingColor:At,colorActiveWarning:Lt,boxShadowFocusWarning:Dt,boxShadowActiveWarning:Wt,boxShadowHoverWarning:jt,borderWarning:Ht,borderFocusWarning:Kt,borderHoverWarning:Ut,borderActiveWarning:qt,colorActiveError:Gt,boxShadowFocusError:Yt,boxShadowActiveError:Xt,boxShadowHoverError:Zt,borderError:Jt,borderFocusError:Qt,borderHoverError:en,borderActiveError:tn,clearColor:nn,clearColorHover:on,clearColorPressed:ln,clearSize:rn,arrowSize:an,[ie("height",c)]:sn,[ie("fontSize",c)]:dn}}=O.value,qe=Ne(Ke),Ge=Ne(et);return{"--n-bezier":m,"--n-border":I,"--n-border-active":be,"--n-border-focus":$,"--n-border-hover":Q,"--n-border-radius":Je,"--n-box-shadow-active":V,"--n-box-shadow-focus":F,"--n-box-shadow-hover":B,"--n-caret-color":tt,"--n-color":Qe,"--n-color-active":f,"--n-color-disabled":Ue,"--n-font-size":dn,"--n-height":sn,"--n-padding-single-top":qe.top,"--n-padding-multiple-top":Ge.top,"--n-padding-single-right":qe.right,"--n-padding-multiple-right":Ge.right,"--n-padding-single-left":qe.left,"--n-padding-multiple-left":Ge.left,"--n-padding-single-bottom":qe.bottom,"--n-padding-multiple-bottom":Ge.bottom,"--n-placeholder-color":je,"--n-placeholder-color-disabled":t,"--n-text-color":He,"--n-text-color-disabled":ye,"--n-arrow-color":Vt,"--n-arrow-color-disabled":Nt,"--n-loading-color":At,"--n-color-active-warning":Lt,"--n-box-shadow-focus-warning":Dt,"--n-box-shadow-active-warning":Wt,"--n-box-shadow-hover-warning":jt,"--n-border-warning":Ht,"--n-border-focus-warning":Kt,"--n-border-hover-warning":Ut,"--n-border-active-warning":qt,"--n-color-active-error":Gt,"--n-box-shadow-focus-error":Yt,"--n-box-shadow-active-error":Xt,"--n-box-shadow-hover-error":Zt,"--n-border-error":Jt,"--n-border-focus-error":Qt,"--n-border-hover-error":en,"--n-border-active-error":tn,"--n-clear-size":rn,"--n-clear-color":nn,"--n-clear-color-hover":on,"--n-clear-color-pressed":ln,"--n-arrow-size":an,"--n-font-weight":Z}}),re=ze?We("internal-selection",k(()=>e.size[0]),Re,e):void 0;return{mergedTheme:O,mergedClearable:z,mergedClsPrefix:n,rtlEnabled:l,patternInputFocused:W,filterablePlaceholder:j,label:K,selected:U,showTagsPanel:S,isComposing:D,counterRef:g,counterWrapperRef:R,patternInputMirrorRef:r,patternInputRef:u,selfRef:h,multipleElRef:a,singleElRef:x,patternInputWrapperRef:b,overflowRef:p,inputTagElRef:C,handleMouseDown:H,handleFocusin:w,handleClear:L,handleMouseEnter:q,handleMouseLeave:_,handleDeleteOption:N,handlePatternKeyDown:s,handlePatternInputInput:A,handlePatternInputBlur:de,handlePatternInputFocus:ge,handleMouseEnterCounter:Be,handleMouseLeaveCounter:$e,handleFocusout:P,handleCompositionEnd:ve,handleCompositionStart:le,onPopoverUpdateShow:Ee,focus:ke,focusInput:we,blur:ce,blurInput:Ie,updateCounter:Me,getCounter:Pe,getTail:_e,renderLabel:e.renderLabel,cssVars:ze?void 0:Re,themeClass:re==null?void 0:re.themeClass,onRender:re==null?void 0:re.onRender}},render(){const{status:e,multiple:n,size:o,disabled:l,filterable:r,maxTagCount:u,bordered:h,clsPrefix:a,ellipsisTagPopoverProps:x,onRender:b,renderTag:g,renderLabel:R}=this;b==null||b();const p=u==="responsive",C=typeof u=="number",S=p||C,W=i(Sn,null,{default:()=>i(Mn,{clsPrefix:a,loading:this.loading,showArrow:this.showArrow,showClear:this.mergedClearable&&this.selected,onClear:this.handleClear},{default:()=>{var O,z;return(z=(O=this.$slots).arrow)===null||z===void 0?void 0:z.call(O)}})});let G;if(n){const{labelField:O}=this,z=d=>i("div",{class:`${a}-base-selection-tag-wrapper`,key:d.value},g?g({option:d,handleClose:()=>{this.handleDeleteOption(d)}}):i(lt,{size:o,closable:!d.disabled,disabled:l,onClose:()=>{this.handleDeleteOption(d)},internalCloseIsButtonTag:!1,internalCloseFocusable:!1},{default:()=>R?R(d,!0):Oe(d[O],d,!0)})),j=()=>(C?this.selectedOptions.slice(0,u):this.selectedOptions).map(z),K=r?i("div",{class:`${a}-base-selection-input-tag`,ref:"inputTagElRef",key:"__input-tag__"},i("input",Object.assign({},this.inputProps,{ref:"patternInputRef",tabindex:-1,disabled:l,value:this.pattern,autofocus:this.autofocus,class:`${a}-base-selection-input-tag__input`,onBlur:this.handlePatternInputBlur,onFocus:this.handlePatternInputFocus,onKeydown:this.handlePatternKeyDown,onInput:this.handlePatternInputInput,onCompositionstart:this.handleCompositionStart,onCompositionend:this.handleCompositionEnd})),i("span",{ref:"patternInputMirrorRef",class:`${a}-base-selection-input-tag__mirror`},this.pattern)):null,U=p?()=>i("div",{class:`${a}-base-selection-tag-wrapper`,ref:"counterWrapperRef"},i(lt,{size:o,ref:"counterRef",onMouseenter:this.handleMouseEnterCounter,onMouseleave:this.handleMouseLeaveCounter,disabled:l})):void 0;let te;if(C){const d=this.selectedOptions.length-u;d>0&&(te=i("div",{class:`${a}-base-selection-tag-wrapper`,key:"__counter__"},i(lt,{size:o,ref:"counterRef",onMouseenter:this.handleMouseEnterCounter,disabled:l},{default:()=>`+${d}`})))}const Y=p?r?i(pt,{ref:"overflowRef",updateCounter:this.updateCounter,getCounter:this.getCounter,getTail:this.getTail,style:{width:"100%",display:"flex",overflow:"hidden"}},{default:j,counter:U,tail:()=>K}):i(pt,{ref:"overflowRef",updateCounter:this.updateCounter,getCounter:this.getCounter,style:{width:"100%",display:"flex",overflow:"hidden"}},{default:j,counter:U}):C&&te?j().concat(te):j(),M=S?()=>i("div",{class:`${a}-base-selection-popover`},p?j():this.selectedOptions.map(z)):void 0,ae=S?Object.assign({show:this.showTagsPanel,trigger:"hover",overlap:!0,placement:"top",width:"trigger",onUpdateShow:this.onPopoverUpdateShow,theme:this.mergedTheme.peers.Popover,themeOverrides:this.mergedTheme.peerOverrides.Popover},x):null,J=(this.selected?!1:this.active?!this.pattern&&!this.isComposing:!0)?i("div",{class:`${a}-base-selection-placeholder ${a}-base-selection-overlay`},i("div",{class:`${a}-base-selection-placeholder__inner`},this.placeholder)):null,oe=r?i("div",{ref:"patternInputWrapperRef",class:`${a}-base-selection-tags`},Y,p?null:K,W):i("div",{ref:"multipleElRef",class:`${a}-base-selection-tags`,tabindex:l?void 0:0},Y,W);G=i(hn,null,S?i(Rn,Object.assign({},ae,{scrollable:!0,style:"max-height: calc(var(--v-target-height) * 6.6);"}),{trigger:()=>oe,default:M}):oe,J)}else if(r){const O=this.pattern||this.isComposing,z=this.active?!O:!this.selected,j=this.active?!1:this.selected;G=i("div",{ref:"patternInputWrapperRef",class:`${a}-base-selection-label`,title:this.patternInputFocused?void 0:bt(this.label)},i("input",Object.assign({},this.inputProps,{ref:"patternInputRef",class:`${a}-base-selection-input`,value:this.active?this.pattern:"",placeholder:"",readonly:l,disabled:l,tabindex:-1,autofocus:this.autofocus,onFocus:this.handlePatternInputFocus,onBlur:this.handlePatternInputBlur,onInput:this.handlePatternInputInput,onCompositionstart:this.handleCompositionStart,onCompositionend:this.handleCompositionEnd})),j?i("div",{class:`${a}-base-selection-label__render-label ${a}-base-selection-overlay`,key:"input"},i("div",{class:`${a}-base-selection-overlay__wrapper`},g?g({option:this.selectedOption,handleClose:()=>{}}):R?R(this.selectedOption,!0):Oe(this.label,this.selectedOption,!0))):null,z?i("div",{class:`${a}-base-selection-placeholder ${a}-base-selection-overlay`,key:"placeholder"},i("div",{class:`${a}-base-selection-overlay__wrapper`},this.filterablePlaceholder)):null,W)}else G=i("div",{ref:"singleElRef",class:`${a}-base-selection-label`,tabindex:this.disabled?void 0:0},this.label!==void 0?i("div",{class:`${a}-base-selection-input`,title:bt(this.label),key:"input"},i("div",{class:`${a}-base-selection-input__content`},g?g({option:this.selectedOption,handleClose:()=>{}}):R?R(this.selectedOption,!0):Oe(this.label,this.selectedOption,!0))):i("div",{class:`${a}-base-selection-placeholder ${a}-base-selection-overlay`,key:"placeholder"},i("div",{class:`${a}-base-selection-placeholder__inner`},this.placeholder)),W);return i("div",{ref:"selfRef",class:[`${a}-base-selection`,this.rtlEnabled&&`${a}-base-selection--rtl`,this.themeClass,e&&`${a}-base-selection--${e}-status`,{[`${a}-base-selection--active`]:this.active,[`${a}-base-selection--selected`]:this.selected||this.active&&this.pattern,[`${a}-base-selection--disabled`]:this.disabled,[`${a}-base-selection--multiple`]:this.multiple,[`${a}-base-selection--focus`]:this.focused}],style:this.cssVars,onClick:this.onClick,onMouseenter:this.handleMouseEnter,onMouseleave:this.handleMouseLeave,onKeydown:this.onKeydown,onFocusin:this.handleFocusin,onFocusout:this.handleFocusout,onMousedown:this.handleMouseDown},G,h?i("div",{class:`${a}-base-selection__border`}):null,h?i("div",{class:`${a}-base-selection__state-border`}):null)}});function Xe(e){return e.type==="group"}function Et(e){return e.type==="ignored"}function st(e,n){try{return!!(1+n.toString().toLowerCase().indexOf(e.trim().toLowerCase()))}catch{return!1}}function no(e,n){return{getIsGroup:Xe,getIgnored:Et,getKey(l){return Xe(l)?l.name||l.key||"key-required":l[e]},getChildren(l){return l[n]}}}function oo(e,n,o,l){if(!n)return e;function r(u){if(!Array.isArray(u))return[];const h=[];for(const a of u)if(Xe(a)){const x=r(a[l]);x.length&&h.push(Object.assign({},a,{[l]:x}))}else{if(Et(a))continue;n(o,a)&&h.push(a)}return h}return r(e)}function io(e,n,o){const l=new Map;return e.forEach(r=>{Xe(r)?r[o].forEach(u=>{l.set(u[n],u)}):l.set(r[n],r)}),l}const lo=se([E("select",`
 z-index: auto;
 outline: none;
 width: 100%;
 position: relative;
 font-weight: var(--n-font-weight);
 `),E("select-menu",`
 margin: 4px 0;
 box-shadow: var(--n-menu-box-shadow);
 `,[zt({originalTransition:"background-color .3s var(--n-bezier), box-shadow .3s var(--n-bezier)"})])]),ro=Object.assign(Object.assign({},pe.props),{to:ct.propTo,bordered:{type:Boolean,default:void 0},clearable:Boolean,clearFilterAfterSelect:{type:Boolean,default:!0},options:{type:Array,default:()=>[]},defaultValue:{type:[String,Number,Array],default:null},keyboard:{type:Boolean,default:!0},value:[String,Number,Array],placeholder:String,menuProps:Object,multiple:Boolean,size:String,menuSize:{type:String},filterable:Boolean,disabled:{type:Boolean,default:void 0},remote:Boolean,loading:Boolean,filter:Function,placement:{type:String,default:"bottom-start"},widthMode:{type:String,default:"trigger"},tag:Boolean,onCreate:Function,fallbackOption:{type:[Function,Boolean],default:void 0},show:{type:Boolean,default:void 0},showArrow:{type:Boolean,default:!0},maxTagCount:[Number,String],ellipsisTagPopoverProps:Object,consistentMenuWidth:{type:Boolean,default:!0},virtualScroll:{type:Boolean,default:!0},labelField:{type:String,default:"label"},valueField:{type:String,default:"value"},childrenField:{type:String,default:"children"},renderLabel:Function,renderOption:Function,renderTag:Function,"onUpdate:value":[Function,Array],inputProps:Object,nodeProps:Function,ignoreComposition:{type:Boolean,default:!0},showOnFocus:Boolean,onUpdateValue:[Function,Array],onBlur:[Function,Array],onClear:[Function,Array],onFocus:[Function,Array],onScroll:[Function,Array],onSearch:[Function,Array],onUpdateShow:[Function,Array],"onUpdate:show":[Function,Array],displayDirective:{type:String,default:"show"},resetMenuOnOptionsChange:{type:Boolean,default:!0},status:String,showCheckmark:{type:Boolean,default:!0},onChange:[Function,Array],items:Array}),po=he({name:"Select",props:ro,slots:Object,setup(e){const{mergedClsPrefixRef:n,mergedBorderedRef:o,namespaceRef:l,inlineThemeDisabled:r}=De(e),u=pe("Select","-select",lo,$n,e,n),h=T(e.defaultValue),a=ee(e,"value"),x=ut(a,h),b=T(!1),g=T(""),R=zn(e,["items","options"]),p=T([]),C=T([]),S=k(()=>C.value.concat(p.value).concat(R.value)),W=k(()=>{const{filter:t}=e;if(t)return t;const{labelField:f,valueField:F}=e;return(V,B)=>{if(!B)return!1;const I=B[f];if(typeof I=="string")return st(V,I);const $=B[F];return typeof $=="string"?st(V,$):typeof $=="number"?st(V,String($)):!1}}),G=k(()=>{if(e.remote)return R.value;{const{value:t}=S,{value:f}=g;return!f.length||!e.filterable?t:oo(t,W.value,f,e.childrenField)}}),O=k(()=>{const{valueField:t,childrenField:f}=e,F=no(t,f);return Nn(G.value,F)}),z=k(()=>io(S.value,e.valueField,e.childrenField)),j=T(!1),K=ut(ee(e,"show"),j),U=T(null),te=T(null),Y=T(null),{localeRef:M}=Pt("Select"),ae=k(()=>{var t;return(t=e.placeholder)!==null&&t!==void 0?t:M.value.placeholder}),ne=[],J=T(new Map),oe=k(()=>{const{fallbackOption:t}=e;if(t===void 0){const{labelField:f,valueField:F}=e;return V=>({[f]:String(V),[F]:V})}return t===!1?!1:f=>Object.assign(t(f),{value:f})});function d(t){const f=e.remote,{value:F}=J,{value:V}=z,{value:B}=oe,I=[];return t.forEach($=>{if(V.has($))I.push(V.get($));else if(f&&F.has($))I.push(F.get($));else if(B){const Q=B($);Q&&I.push(Q)}}),I}const w=k(()=>{if(e.multiple){const{value:t}=x;return Array.isArray(t)?d(t):[]}return null}),P=k(()=>{const{value:t}=x;return!e.multiple&&!Array.isArray(t)?t===null?null:d([t])[0]||null:null}),L=Mt(e),{mergedSizeRef:q,mergedDisabledRef:_,mergedStatusRef:H}=L;function N(t,f){const{onChange:F,"onUpdate:value":V,onUpdateValue:B}=e,{nTriggerFormChange:I,nTriggerFormInput:$}=L;F&&ue(F,t,f),B&&ue(B,t,f),V&&ue(V,t,f),h.value=t,I(),$()}function D(t){const{onBlur:f}=e,{nTriggerFormBlur:F}=L;f&&ue(f,t),F()}function s(){const{onClear:t}=e;t&&ue(t)}function v(t){const{onFocus:f,showOnFocus:F}=e,{nTriggerFormFocus:V}=L;f&&ue(f,t),V(),F&&de()}function A(t){const{onSearch:f}=e;f&&ue(f,t)}function le(t){const{onScroll:f}=e;f&&ue(f,t)}function ve(){var t;const{remote:f,multiple:F}=e;if(f){const{value:V}=J;if(F){const{valueField:B}=e;(t=w.value)===null||t===void 0||t.forEach(I=>{V.set(I[B],I)})}else{const B=P.value;B&&V.set(B[e.valueField],B)}}}function ge(t){const{onUpdateShow:f,"onUpdate:show":F}=e;f&&ue(f,t),F&&ue(F,t),j.value=t}function de(){_.value||(ge(!0),j.value=!0,e.filterable&&Ke())}function ce(){ge(!1)}function ke(){g.value="",C.value=ne}const we=T(!1);function Ie(){e.filterable&&(we.value=!0)}function Me(){e.filterable&&(we.value=!1,K.value||ke())}function Pe(){_.value||(K.value?e.filterable?Ke():ce():de())}function _e(t){var f,F;!((F=(f=Y.value)===null||f===void 0?void 0:f.selfRef)===null||F===void 0)&&F.contains(t.relatedTarget)||(b.value=!1,D(t),ce())}function Ce(t){v(t),b.value=!0}function Se(){b.value=!0}function Be(t){var f;!((f=U.value)===null||f===void 0)&&f.$el.contains(t.relatedTarget)||(b.value=!1,D(t),ce())}function $e(){var t;(t=U.value)===null||t===void 0||t.focus(),ce()}function Ee(t){var f;K.value&&(!((f=U.value)===null||f===void 0)&&f.$el.contains(In(t))||ce())}function ze(t){if(!Array.isArray(t))return[];if(oe.value)return Array.from(t);{const{remote:f}=e,{value:F}=z;if(f){const{value:V}=J;return t.filter(B=>F.has(B)||V.has(B))}else return t.filter(V=>F.has(V))}}function Re(t){re(t.rawNode)}function re(t){if(_.value)return;const{tag:f,remote:F,clearFilterAfterSelect:V,valueField:B}=e;if(f&&!F){const{value:I}=C,$=I[0]||null;if($){const Q=p.value;Q.length?Q.push($):p.value=[$],C.value=ne}}if(F&&J.value.set(t[B],t),e.multiple){const I=ze(x.value),$=I.findIndex(Q=>Q===t[B]);if(~$){if(I.splice($,1),f&&!F){const Q=c(t[B]);~Q&&(p.value.splice(Q,1),V&&(g.value=""))}}else I.push(t[B]),V&&(g.value="");N(I,d(I))}else{if(f&&!F){const I=c(t[B]);~I?p.value=[p.value[I]]:p.value=ne}He(),ce(),N(t[B],t)}}function c(t){return p.value.findIndex(F=>F[e.valueField]===t)}function m(t){K.value||de();const{value:f}=t.target;g.value=f;const{tag:F,remote:V}=e;if(A(f),F&&!V){if(!f){C.value=ne;return}const{onCreate:B}=e,I=B?B(f):{[e.labelField]:f,[e.valueField]:f},{valueField:$,labelField:Q}=e;R.value.some(be=>be[$]===I[$]||be[Q]===I[Q])||p.value.some(be=>be[$]===I[$]||be[Q]===I[Q])?C.value=ne:C.value=[I]}}function Z(t){t.stopPropagation();const{multiple:f}=e;!f&&e.filterable&&ce(),s(),f?N([],[]):N(null,null)}function Je(t){!Ae(t,"action")&&!Ae(t,"empty")&&!Ae(t,"header")&&t.preventDefault()}function Qe(t){le(t)}function je(t){var f,F,V,B,I;if(!e.keyboard){t.preventDefault();return}switch(t.key){case" ":if(e.filterable)break;t.preventDefault();case"Enter":if(!(!((f=U.value)===null||f===void 0)&&f.isComposing)){if(K.value){const $=(F=Y.value)===null||F===void 0?void 0:F.getPendingTmNode();$?Re($):e.filterable||(ce(),He())}else if(de(),e.tag&&we.value){const $=C.value[0];if($){const Q=$[e.valueField],{value:be}=x;e.multiple&&Array.isArray(be)&&be.includes(Q)||re($)}}}t.preventDefault();break;case"ArrowUp":if(t.preventDefault(),e.loading)return;K.value&&((V=Y.value)===null||V===void 0||V.prev());break;case"ArrowDown":if(t.preventDefault(),e.loading)return;K.value?(B=Y.value)===null||B===void 0||B.next():de();break;case"Escape":K.value&&(An(t),ce()),(I=U.value)===null||I===void 0||I.focus();break}}function He(){var t;(t=U.value)===null||t===void 0||t.focus()}function Ke(){var t;(t=U.value)===null||t===void 0||t.focusInput()}function et(){var t;K.value&&((t=te.value)===null||t===void 0||t.syncPosition())}ve(),Fe(ee(e,"options"),ve);const tt={focus:()=>{var t;(t=U.value)===null||t===void 0||t.focus()},focusInput:()=>{var t;(t=U.value)===null||t===void 0||t.focusInput()},blur:()=>{var t;(t=U.value)===null||t===void 0||t.blur()},blurInput:()=>{var t;(t=U.value)===null||t===void 0||t.blurInput()}},Ue=k(()=>{const{self:{menuBoxShadow:t}}=u.value;return{"--n-menu-box-shadow":t}}),ye=r?We("select",void 0,Ue,e):void 0;return Object.assign(Object.assign({},tt),{mergedStatus:H,mergedClsPrefix:n,mergedBordered:o,namespace:l,treeMate:O,isMounted:On(),triggerRef:U,menuRef:Y,pattern:g,uncontrolledShow:j,mergedShow:K,adjustedTo:ct(e),uncontrolledValue:h,mergedValue:x,followerRef:te,localizedPlaceholder:ae,selectedOption:P,selectedOptions:w,mergedSize:q,mergedDisabled:_,focused:b,activeWithoutMenuOpen:we,inlineThemeDisabled:r,onTriggerInputFocus:Ie,onTriggerInputBlur:Me,handleTriggerOrMenuResize:et,handleMenuFocus:Se,handleMenuBlur:Be,handleMenuTabOut:$e,handleTriggerClick:Pe,handleToggle:Re,handleDeleteOption:re,handlePatternInput:m,handleClear:Z,handleTriggerBlur:_e,handleTriggerFocus:Ce,handleKeydown:je,handleMenuAfterLeave:ke,handleMenuClickOutside:Ee,handleMenuScroll:Qe,handleMenuKeydown:je,handleMenuMousedown:Je,mergedTheme:u,cssVars:r?void 0:Ue,themeClass:ye==null?void 0:ye.themeClass,onRender:ye==null?void 0:ye.onRender})},render(){return i("div",{class:`${this.mergedClsPrefix}-select`},i(Fn,null,{default:()=>[i(Tn,null,{default:()=>i(to,{ref:"triggerRef",inlineThemeDisabled:this.inlineThemeDisabled,status:this.mergedStatus,inputProps:this.inputProps,clsPrefix:this.mergedClsPrefix,showArrow:this.showArrow,maxTagCount:this.maxTagCount,ellipsisTagPopoverProps:this.ellipsisTagPopoverProps,bordered:this.mergedBordered,active:this.activeWithoutMenuOpen||this.mergedShow,pattern:this.pattern,placeholder:this.localizedPlaceholder,selectedOption:this.selectedOption,selectedOptions:this.selectedOptions,multiple:this.multiple,renderTag:this.renderTag,renderLabel:this.renderLabel,filterable:this.filterable,clearable:this.clearable,disabled:this.mergedDisabled,size:this.mergedSize,theme:this.mergedTheme.peers.InternalSelection,labelField:this.labelField,valueField:this.valueField,themeOverrides:this.mergedTheme.peerOverrides.InternalSelection,loading:this.loading,focused:this.focused,onClick:this.handleTriggerClick,onDeleteOption:this.handleDeleteOption,onPatternInput:this.handlePatternInput,onClear:this.handleClear,onBlur:this.handleTriggerBlur,onFocus:this.handleTriggerFocus,onKeydown:this.handleKeydown,onPatternBlur:this.onTriggerInputBlur,onPatternFocus:this.onTriggerInputFocus,onResize:this.handleTriggerOrMenuResize,ignoreComposition:this.ignoreComposition},{arrow:()=>{var e,n;return[(n=(e=this.$slots).arrow)===null||n===void 0?void 0:n.call(e)]}})}),i(kn,{ref:"followerRef",show:this.mergedShow,to:this.adjustedTo,teleportDisabled:this.adjustedTo===ct.tdkey,containerClass:this.namespace,width:this.consistentMenuWidth?"target":void 0,minWidth:"target",placement:this.placement},{default:()=>i(Ft,{name:"fade-in-scale-up-transition",appear:this.isMounted,onAfterLeave:this.handleMenuAfterLeave},{default:()=>{var e,n,o;return this.mergedShow||this.displayDirective==="show"?((e=this.onRender)===null||e===void 0||e.call(this),gn(i(Qn,Object.assign({},this.menuProps,{ref:"menuRef",onResize:this.handleTriggerOrMenuResize,inlineThemeDisabled:this.inlineThemeDisabled,virtualScroll:this.consistentMenuWidth&&this.virtualScroll,class:[`${this.mergedClsPrefix}-select-menu`,this.themeClass,(n=this.menuProps)===null||n===void 0?void 0:n.class],clsPrefix:this.mergedClsPrefix,focusable:!0,labelField:this.labelField,valueField:this.valueField,autoPending:!0,nodeProps:this.nodeProps,theme:this.mergedTheme.peers.InternalSelectMenu,themeOverrides:this.mergedTheme.peerOverrides.InternalSelectMenu,treeMate:this.treeMate,multiple:this.multiple,size:this.menuSize,renderOption:this.renderOption,renderLabel:this.renderLabel,value:this.mergedValue,style:[(o=this.menuProps)===null||o===void 0?void 0:o.style,this.cssVars],onToggle:this.handleToggle,onScroll:this.handleMenuScroll,onFocus:this.handleMenuFocus,onBlur:this.handleMenuBlur,onKeydown:this.handleMenuKeydown,onTabOut:this.handleMenuTabOut,onMousedown:this.handleMenuMousedown,show:this.mergedShow,showCheckmark:this.showCheckmark,resetMenuOnOptionsChange:this.resetMenuOnOptionsChange}),{empty:()=>{var l,r;return[(r=(l=this.$slots).empty)===null||r===void 0?void 0:r.call(l)]},header:()=>{var l,r;return[(r=(l=this.$slots).header)===null||r===void 0?void 0:r.call(l)]},action:()=>{var l,r;return[(r=(l=this.$slots).action)===null||r===void 0?void 0:r.call(l)]}}),this.displayDirective==="show"?[[bn,this.mergedShow],[gt,this.handleMenuClickOutside,void 0,{capture:!0}]]:[[gt,this.handleMenuClickOutside,void 0,{capture:!0}]])):null}})})]}))}}),ao=E("switch",`
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
 `),E("base-loading",`
 position: absolute;
 top: 50%;
 left: 50%;
 transform: translateX(-50%) translateY(-50%);
 font-size: calc(var(--n-button-width) - 4px);
 color: var(--n-loading-color);
 transition: color .3s var(--n-bezier);
 `,[mt({left:"50%",top:"50%",originalTransform:"translateX(-50%) translateY(-50%)"})]),y("checked, unchecked",`
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
 `),se("&:focus",[y("rail",`
 box-shadow: var(--n-box-shadow-focus);
 `)]),X("round",[y("rail","border-radius: calc(var(--n-rail-height) / 2);",[y("button","border-radius: calc(var(--n-button-height) / 2);")])]),Le("disabled",[Le("icon",[X("rubber-band",[X("pressed",[y("rail",[y("button","max-width: var(--n-button-width-pressed);")])]),y("rail",[se("&:active",[y("button","max-width: var(--n-button-width-pressed);")])]),X("active",[X("pressed",[y("rail",[y("button","left: calc(100% - var(--n-offset) - var(--n-button-width-pressed));")])]),y("rail",[se("&:active",[y("button","left: calc(100% - var(--n-offset) - var(--n-button-width-pressed));")])])])])])]),X("active",[y("rail",[y("button","left: calc(100% - var(--n-button-width) - var(--n-offset))")])]),y("rail",`
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
 `,[mt()]),y("button",`
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
 `)])]),so=Object.assign(Object.assign({},pe.props),{size:{type:String,default:"medium"},value:{type:[String,Number,Boolean],default:void 0},loading:Boolean,defaultValue:{type:[String,Number,Boolean],default:!1},disabled:{type:Boolean,default:void 0},round:{type:Boolean,default:!0},"onUpdate:value":[Function,Array],onUpdateValue:[Function,Array],checkedValue:{type:[String,Number,Boolean],default:!0},uncheckedValue:{type:[String,Number,Boolean],default:!1},railStyle:Function,rubberBand:{type:Boolean,default:!0},onChange:[Function,Array]});let Ve;const mo=he({name:"Switch",props:so,slots:Object,setup(e){Ve===void 0&&(typeof CSS<"u"?typeof CSS.supports<"u"?Ve=CSS.supports("width","max(1px)"):Ve=!1:Ve=!0);const{mergedClsPrefixRef:n,inlineThemeDisabled:o}=De(e),l=pe("Switch","-switch",ao,En,e,n),r=Mt(e),{mergedSizeRef:u,mergedDisabledRef:h}=r,a=T(e.defaultValue),x=ee(e,"value"),b=ut(x,a),g=k(()=>b.value===e.checkedValue),R=T(!1),p=T(!1),C=k(()=>{const{railStyle:M}=e;if(M)return M({focused:p.value,checked:g.value})});function S(M){const{"onUpdate:value":ae,onChange:ne,onUpdateValue:J}=e,{nTriggerFormInput:oe,nTriggerFormChange:d}=r;ae&&ue(ae,M),J&&ue(J,M),ne&&ue(ne,M),a.value=M,oe(),d()}function W(){const{nTriggerFormFocus:M}=r;M()}function G(){const{nTriggerFormBlur:M}=r;M()}function O(){e.loading||h.value||(b.value!==e.checkedValue?S(e.checkedValue):S(e.uncheckedValue))}function z(){p.value=!0,W()}function j(){p.value=!1,G(),R.value=!1}function K(M){e.loading||h.value||M.key===" "&&(b.value!==e.checkedValue?S(e.checkedValue):S(e.uncheckedValue),R.value=!1)}function U(M){e.loading||h.value||M.key===" "&&(M.preventDefault(),R.value=!0)}const te=k(()=>{const{value:M}=u,{self:{opacityDisabled:ae,railColor:ne,railColorActive:J,buttonBoxShadow:oe,buttonColor:d,boxShadowFocus:w,loadingColor:P,textColor:L,iconColor:q,[ie("buttonHeight",M)]:_,[ie("buttonWidth",M)]:H,[ie("buttonWidthPressed",M)]:N,[ie("railHeight",M)]:D,[ie("railWidth",M)]:s,[ie("railBorderRadius",M)]:v,[ie("buttonBorderRadius",M)]:A},common:{cubicBezierEaseInOut:le}}=l.value;let ve,ge,de;return Ve?(ve=`calc((${D} - ${_}) / 2)`,ge=`max(${D}, ${_})`,de=`max(${s}, calc(${s} + ${_} - ${D}))`):(ve=xe((fe(D)-fe(_))/2),ge=xe(Math.max(fe(D),fe(_))),de=fe(D)>fe(_)?s:xe(fe(s)+fe(_)-fe(D))),{"--n-bezier":le,"--n-button-border-radius":A,"--n-button-box-shadow":oe,"--n-button-color":d,"--n-button-width":H,"--n-button-width-pressed":N,"--n-button-height":_,"--n-height":ge,"--n-offset":ve,"--n-opacity-disabled":ae,"--n-rail-border-radius":v,"--n-rail-color":ne,"--n-rail-color-active":J,"--n-rail-height":D,"--n-rail-width":s,"--n-width":de,"--n-box-shadow-focus":w,"--n-loading-color":P,"--n-text-color":L,"--n-icon-color":q}}),Y=o?We("switch",k(()=>u.value[0]),te,e):void 0;return{handleClick:O,handleBlur:j,handleFocus:z,handleKeyup:K,handleKeydown:U,mergedRailStyle:C,pressed:R,mergedClsPrefix:n,mergedValue:b,checked:g,mergedDisabled:h,cssVars:o?void 0:te,themeClass:Y==null?void 0:Y.themeClass,onRender:Y==null?void 0:Y.onRender}},render(){const{mergedClsPrefix:e,mergedDisabled:n,checked:o,mergedRailStyle:l,onRender:r,$slots:u}=this;r==null||r();const{checked:h,unchecked:a,icon:x,"checked-icon":b,"unchecked-icon":g}=u,R=!(it(x)&&it(b)&&it(g));return i("div",{role:"switch","aria-checked":o,class:[`${e}-switch`,this.themeClass,R&&`${e}-switch--icon`,o&&`${e}-switch--active`,n&&`${e}-switch--disabled`,this.round&&`${e}-switch--round`,this.loading&&`${e}-switch--loading`,this.pressed&&`${e}-switch--pressed`,this.rubberBand&&`${e}-switch--rubber-band`],tabindex:this.mergedDisabled?void 0:0,style:this.cssVars,onClick:this.handleClick,onFocus:this.handleFocus,onBlur:this.handleBlur,onKeyup:this.handleKeyup,onKeydown:this.handleKeydown},i("div",{class:`${e}-switch__rail`,"aria-hidden":"true",style:l},me(h,p=>me(a,C=>p||C?i("div",{"aria-hidden":!0,class:`${e}-switch__children-placeholder`},i("div",{class:`${e}-switch__rail-placeholder`},i("div",{class:`${e}-switch__button-placeholder`}),p),i("div",{class:`${e}-switch__rail-placeholder`},i("div",{class:`${e}-switch__button-placeholder`}),C)):null)),i("div",{class:`${e}-switch__button`},me(x,p=>me(b,C=>me(g,S=>i(Ln,null,{default:()=>this.loading?i(It,{key:"loading",clsPrefix:e,strokeWidth:20}):this.checked&&(C||p)?i("div",{class:`${e}-switch__button-icon`,key:C?"checked-icon":"icon"},C||p):!this.checked&&(S||p)?i("div",{class:`${e}-switch__button-icon`,key:S?"unchecked-icon":"icon"},S||p):null})))),me(h,p=>p&&i("div",{key:"checked",class:`${e}-switch__checked`},p)),me(a,p=>p&&i("div",{key:"unchecked",class:`${e}-switch__unchecked`},p)))))}});export{Xn as N,mo as a,po as b};
