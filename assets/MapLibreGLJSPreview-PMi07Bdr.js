var ht=Object.defineProperty;var vt=(o,n,r)=>n in o?ht(o,n,{enumerable:!0,configurable:!0,writable:!0,value:r}):o[n]=r;var B=(o,n,r)=>vt(o,typeof n!="symbol"?n+"":n,r);import{a as mt,u as ft,M as pt,I as q,B as W,N as gt}from"./map-manager-CX4LAtcB.js";import{aa as bt,a$ as wt,b0 as yt,s as P,p as i,E as _,q as J,aO as ze,a6 as xt,a7 as kt,d as E,t as _t,v as Ve,r as C,y as k,_ as St,Z as zt,w as Ce,e as Ct,z as Me,Y as Mt,b1 as he,n as x,b2 as Rt,b3 as $t,ab as Tt,b4 as Bt,T as Dt,a3 as Q,ac as ee,ae as te,b5 as ce,o as N,c as A,af as p,b6 as Vt,b as Ie,aP as ue,ap as It,aU as Lt,aV as Et,aq as Le,az as Ft,ak as Ht,ah as S,a as g,al as m,b7 as Re,b8 as ve}from"./index-BaBswcYv.js";import{N as Nt}from"./Element-CTN3kX0_.js";function Pt(o){const n="rgba(0, 0, 0, .85)",r="0 2px 8px 0 rgba(0, 0, 0, 0.12)",{railColor:d,primaryColor:u,baseColor:v,cardColor:$,modalColor:h,popoverColor:z,borderRadius:l,fontSize:f,opacityDisabled:D}=o;return Object.assign(Object.assign({},wt),{fontSize:f,markFontSize:f,railColor:d,railColorHover:d,fillColor:u,fillColorHover:u,opacityDisabled:D,handleColor:"#FFF",dotColor:$,dotColorModal:h,dotColorPopover:z,handleBoxShadow:"0 1px 4px 0 rgba(0, 0, 0, 0.3), inset 0 0 1px 0 rgba(0, 0, 0, 0.05)",handleBoxShadowHover:"0 1px 4px 0 rgba(0, 0, 0, 0.3), inset 0 0 1px 0 rgba(0, 0, 0, 0.05)",handleBoxShadowActive:"0 1px 4px 0 rgba(0, 0, 0, 0.3), inset 0 0 1px 0 rgba(0, 0, 0, 0.05)",handleBoxShadowFocus:"0 1px 4px 0 rgba(0, 0, 0, 0.3), inset 0 0 1px 0 rgba(0, 0, 0, 0.05)",indicatorColor:n,indicatorBoxShadow:r,indicatorTextColor:v,indicatorBorderRadius:l,dotBorder:"2px solid ".concat(d),dotBorderActive:"2px solid ".concat(u),dotBoxShadow:""})}const At={name:"Slider",common:bt,self:Pt};function $e(o){return window.TouchEvent&&o instanceof window.TouchEvent}function Te(){const o=new Map,n=r=>d=>{o.set(r,d)};return yt(()=>{o.clear()}),[o,n]}const jt=P([i("slider","\n display: block;\n padding: calc((var(--n-handle-size) - var(--n-rail-height)) / 2) 0;\n position: relative;\n z-index: 0;\n width: 100%;\n cursor: pointer;\n user-select: none;\n -webkit-user-select: none;\n ",[_("reverse",[i("slider-handles",[i("slider-handle-wrapper","\n transform: translate(50%, -50%);\n ")]),i("slider-dots",[i("slider-dot","\n transform: translateX(50%, -50%);\n ")]),_("vertical",[i("slider-handles",[i("slider-handle-wrapper","\n transform: translate(-50%, -50%);\n ")]),i("slider-marks",[i("slider-mark","\n transform: translateY(calc(-50% + var(--n-dot-height) / 2));\n ")]),i("slider-dots",[i("slider-dot","\n transform: translateX(-50%) translateY(0);\n ")])])]),_("vertical","\n padding: 0 calc((var(--n-handle-size) - var(--n-rail-height)) / 2);\n width: var(--n-rail-width-vertical);\n height: 100%;\n ",[i("slider-handles","\n top: calc(var(--n-handle-size) / 2);\n right: 0;\n bottom: calc(var(--n-handle-size) / 2);\n left: 0;\n ",[i("slider-handle-wrapper","\n top: unset;\n left: 50%;\n transform: translate(-50%, 50%);\n ")]),i("slider-rail","\n height: 100%;\n ",[J("fill","\n top: unset;\n right: 0;\n bottom: unset;\n left: 0;\n ")]),_("with-mark","\n width: var(--n-rail-width-vertical);\n margin: 0 32px 0 8px;\n "),i("slider-marks","\n top: calc(var(--n-handle-size) / 2);\n right: unset;\n bottom: calc(var(--n-handle-size) / 2);\n left: 22px;\n font-size: var(--n-mark-font-size);\n ",[i("slider-mark","\n transform: translateY(50%);\n white-space: nowrap;\n ")]),i("slider-dots","\n top: calc(var(--n-handle-size) / 2);\n right: unset;\n bottom: calc(var(--n-handle-size) / 2);\n left: 50%;\n ",[i("slider-dot","\n transform: translateX(-50%) translateY(50%);\n ")])]),_("disabled","\n cursor: not-allowed;\n opacity: var(--n-opacity-disabled);\n ",[i("slider-handle","\n cursor: not-allowed;\n ")]),_("with-mark","\n width: 100%;\n margin: 8px 0 32px 0;\n "),P("&:hover",[i("slider-rail",{backgroundColor:"var(--n-rail-color-hover)"},[J("fill",{backgroundColor:"var(--n-fill-color-hover)"})]),i("slider-handle",{boxShadow:"var(--n-handle-box-shadow-hover)"})]),_("active",[i("slider-rail",{backgroundColor:"var(--n-rail-color-hover)"},[J("fill",{backgroundColor:"var(--n-fill-color-hover)"})]),i("slider-handle",{boxShadow:"var(--n-handle-box-shadow-hover)"})]),i("slider-marks","\n position: absolute;\n top: 18px;\n left: calc(var(--n-handle-size) / 2);\n right: calc(var(--n-handle-size) / 2);\n ",[i("slider-mark","\n position: absolute;\n transform: translateX(-50%);\n white-space: nowrap;\n ")]),i("slider-rail","\n width: 100%;\n position: relative;\n height: var(--n-rail-height);\n background-color: var(--n-rail-color);\n transition: background-color .3s var(--n-bezier);\n border-radius: calc(var(--n-rail-height) / 2);\n ",[J("fill","\n position: absolute;\n top: 0;\n bottom: 0;\n border-radius: calc(var(--n-rail-height) / 2);\n transition: background-color .3s var(--n-bezier);\n background-color: var(--n-fill-color);\n ")]),i("slider-handles","\n position: absolute;\n top: 0;\n right: calc(var(--n-handle-size) / 2);\n bottom: 0;\n left: calc(var(--n-handle-size) / 2);\n ",[i("slider-handle-wrapper","\n outline: none;\n position: absolute;\n top: 50%;\n transform: translate(-50%, -50%);\n cursor: pointer;\n display: flex;\n ",[i("slider-handle","\n height: var(--n-handle-size);\n width: var(--n-handle-size);\n border-radius: 50%;\n overflow: hidden;\n transition: box-shadow .2s var(--n-bezier), background-color .3s var(--n-bezier);\n background-color: var(--n-handle-color);\n box-shadow: var(--n-handle-box-shadow);\n ",[P("&:hover","\n box-shadow: var(--n-handle-box-shadow-hover);\n ")]),P("&:focus",[i("slider-handle","\n box-shadow: var(--n-handle-box-shadow-focus);\n ",[P("&:hover","\n box-shadow: var(--n-handle-box-shadow-active);\n ")])])])]),i("slider-dots","\n position: absolute;\n top: 50%;\n left: calc(var(--n-handle-size) / 2);\n right: calc(var(--n-handle-size) / 2);\n ",[_("transition-disabled",[i("slider-dot","transition: none;")]),i("slider-dot","\n transition:\n border-color .3s var(--n-bezier),\n box-shadow .3s var(--n-bezier),\n background-color .3s var(--n-bezier);\n position: absolute;\n transform: translate(-50%, -50%);\n height: var(--n-dot-height);\n width: var(--n-dot-width);\n border-radius: var(--n-dot-border-radius);\n overflow: hidden;\n box-sizing: border-box;\n border: var(--n-dot-border);\n background-color: var(--n-dot-color);\n ",[_("active","border: var(--n-dot-border-active);")])])]),i("slider-handle-indicator","\n font-size: var(--n-font-size);\n padding: 6px 10px;\n border-radius: var(--n-indicator-border-radius);\n color: var(--n-indicator-text-color);\n background-color: var(--n-indicator-color);\n box-shadow: var(--n-indicator-box-shadow);\n ",[ze()]),i("slider-handle-indicator","\n font-size: var(--n-font-size);\n padding: 6px 10px;\n border-radius: var(--n-indicator-border-radius);\n color: var(--n-indicator-text-color);\n background-color: var(--n-indicator-color);\n box-shadow: var(--n-indicator-box-shadow);\n ",[_("top","\n margin-bottom: 12px;\n "),_("right","\n margin-left: 12px;\n "),_("bottom","\n margin-top: 12px;\n "),_("left","\n margin-right: 12px;\n "),ze()]),xt(i("slider",[i("slider-dot","background-color: var(--n-dot-color-modal);")])),kt(i("slider",[i("slider-dot","background-color: var(--n-dot-color-popover);")]))]),Ut=0,Ot=Object.assign(Object.assign({},Ve.props),{to:he.propTo,defaultValue:{type:[Number,Array],default:0},marks:Object,disabled:{type:Boolean,default:void 0},formatTooltip:Function,keyboard:{type:Boolean,default:!0},min:{type:Number,default:0},max:{type:Number,default:100},step:{type:[Number,String],default:1},range:Boolean,value:[Number,Array],placement:String,showTooltip:{type:Boolean,default:void 0},tooltip:{type:Boolean,default:!0},vertical:Boolean,reverse:Boolean,"onUpdate:value":[Function,Array],onUpdateValue:[Function,Array],onDragstart:[Function],onDragend:[Function]}),Be=E({name:"Slider",props:Ot,setup(o){const{mergedClsPrefixRef:n,namespaceRef:r,inlineThemeDisabled:d}=_t(o),u=Ve("Slider","-slider",jt,At,o,n),v=C(null),[$,h]=Te(),[z,l]=Te(),f=C(new Set),D=mt(o),{mergedDisabledRef:j}=D,me=k(()=>{const{step:e}=o;if(Number(e)<=0||e==="mark")return 0;const t=e.toString();let a=0;return t.includes(".")&&(a=t.length-t.indexOf(".")-1),a}),ae=C(o.defaultValue),Ee=St(o,"value"),ne=zt(Ee,ae),M=k(()=>{const{value:e}=ne;return(o.range?e:[e]).map(xe)}),fe=k(()=>M.value.length>2),Fe=k(()=>o.placement===void 0?o.vertical?"right":"top":o.placement),pe=k(()=>{const{marks:e}=o;return e?Object.keys(e).map(Number.parseFloat):null}),R=C(-1),ge=C(-1),I=C(-1),L=C(!1),U=C(!1),ie=k(()=>{const{vertical:e,reverse:t}=o;return e?t?"top":"bottom":t?"right":"left"}),He=k(()=>{if(fe.value)return;const e=M.value,t=O(o.range?Math.min(...e):o.min),a=O(o.range?Math.max(...e):e[0]),{value:s}=ie;return o.vertical?{[s]:"".concat(t,"%"),height:"".concat(a-t,"%")}:{[s]:"".concat(t,"%"),width:"".concat(a-t,"%")}}),Ne=k(()=>{const e=[],{marks:t}=o;if(t){const a=M.value.slice();a.sort((w,y)=>w-y);const{value:s}=ie,{value:c}=fe,{range:b}=o,T=c?()=>!1:w=>b?w>=a[0]&&w<=a[a.length-1]:w<=a[0];for(const w of Object.keys(t)){const y=Number(w);e.push({active:T(y),label:t[w],style:{[s]:"".concat(O(y),"%")}})}}return e});function Pe(e,t){const a=O(e),{value:s}=ie;return{[s]:"".concat(a,"%"),zIndex:t===R.value?1:0}}function be(e){return o.showTooltip||I.value===e||R.value===e&&L.value}function Ae(e){return L.value?!(R.value===e&&ge.value===e):!0}function je(e){var t;~e&&(R.value=e,(t=$.get(e))===null||t===void 0||t.focus())}function Ue(){z.forEach((e,t)=>{be(t)&&e.syncPosition()})}function we(e){const{"onUpdate:value":t,onUpdateValue:a}=o,{nTriggerFormInput:s,nTriggerFormChange:c}=D;a&&Q(a,e),t&&Q(t,e),ae.value=e,s(),c()}function ye(e){const{range:t}=o;if(t){if(Array.isArray(e)){const{value:a}=M;e.join()!==a.join()&&we(e)}}else Array.isArray(e)||M.value[0]!==e&&we(e)}function re(e,t){if(o.range){const a=M.value.slice();a.splice(t,1,e),ye(a)}else ye(e)}function se(e,t,a){const s=a!==void 0;a||(a=e-t>0?1:-1);const c=pe.value||[],{step:b}=o;if(b==="mark"){const y=Y(e,c.concat(t),s?a:void 0);return y?y.value:t}if(b<=0)return t;const{value:T}=me;let w;if(s){const y=Number((t/b).toFixed(T)),V=Math.floor(y),le=y>V?V:V-1,de=y<V?V:V+1;w=Y(t,[Number((le*b).toFixed(T)),Number((de*b).toFixed(T)),...c],a)}else{const y=Ye(e);w=Y(e,[...c,y])}return w?xe(w.value):t}function xe(e){return Math.min(o.max,Math.max(o.min,e))}function O(e){const{max:t,min:a}=o;return(e-a)/(t-a)*100}function Oe(e){const{max:t,min:a}=o;return a+(t-a)*e}function Ye(e){const{step:t,min:a}=o;if(Number(t)<=0||t==="mark")return e;const s=Math.round((e-a)/t)*t+a;return Number(s.toFixed(me.value))}function Y(e,t=pe.value,a){if(!(t!=null&&t.length))return null;let s=null,c=-1;for(;++c<t.length;){const b=t[c]-e,T=Math.abs(b);(a===void 0||b*a>0)&&(s===null||T<s.distance)&&(s={index:c,distance:T,value:t[c]})}return s}function ke(e){const t=v.value;if(!t)return;const a=$e(e)?e.touches[0]:e,s=t.getBoundingClientRect();let c;return o.vertical?c=(s.bottom-a.clientY)/s.height:c=(a.clientX-s.left)/s.width,o.reverse&&(c=1-c),Oe(c)}function Xe(e){if(j.value||!o.keyboard)return;const{vertical:t,reverse:a}=o;switch(e.key){case"ArrowUp":e.preventDefault(),X(t&&a?-1:1);break;case"ArrowRight":e.preventDefault(),X(!t&&a?-1:1);break;case"ArrowDown":e.preventDefault(),X(t&&a?1:-1);break;case"ArrowLeft":e.preventDefault(),X(!t&&a?1:-1);break}}function X(e){const t=R.value;if(t===-1)return;const{step:a}=o,s=M.value[t],c=Number(a)<=0||a==="mark"?s:s+a*e;re(se(c,s,e>0?1:-1),t)}function Ke(e){var t,a;if(j.value||!$e(e)&&e.button!==Ut)return;const s=ke(e);if(s===void 0)return;const c=M.value.slice(),b=o.range?(a=(t=Y(s,c))===null||t===void 0?void 0:t.index)!==null&&a!==void 0?a:-1:0;b!==-1&&(e.preventDefault(),je(b),Ge(),re(se(s,M.value[b]),b))}function Ge(){L.value||(L.value=!0,o.onDragstart&&Q(o.onDragstart),ee("touchend",document,Z),ee("mouseup",document,Z),ee("touchmove",document,G),ee("mousemove",document,G))}function K(){L.value&&(L.value=!1,o.onDragend&&Q(o.onDragend),te("touchend",document,Z),te("mouseup",document,Z),te("touchmove",document,G),te("mousemove",document,G))}function G(e){const{value:t}=R;if(!L.value||t===-1){K();return}const a=ke(e);a!==void 0&&re(se(a,M.value[t]),t)}function Z(){K()}function Ze(e){R.value=e,j.value||(I.value=e)}function qe(e){R.value===e&&(R.value=-1,K()),I.value===e&&(I.value=-1)}function We(e){I.value=e}function Je(e){I.value===e&&(I.value=-1)}Ce(R,(e,t)=>void ce(()=>ge.value=t)),Ce(ne,()=>{if(o.marks){if(U.value)return;U.value=!0,ce(()=>{U.value=!1})}ce(Ue)}),Ct(()=>{K()});const _e=k(()=>{const{self:{markFontSize:e,railColor:t,railColorHover:a,fillColor:s,fillColorHover:c,handleColor:b,opacityDisabled:T,dotColor:w,dotColorModal:y,handleBoxShadow:V,handleBoxShadowHover:le,handleBoxShadowActive:de,handleBoxShadowFocus:Qe,dotBorder:et,dotBoxShadow:tt,railHeight:ot,railWidthVertical:at,handleSize:nt,dotHeight:it,dotWidth:rt,dotBorderRadius:st,fontSize:lt,dotBorderActive:dt,dotColorPopover:ct},common:{cubicBezierEaseInOut:ut}}=u.value;return{"--n-bezier":ut,"--n-dot-border":et,"--n-dot-border-active":dt,"--n-dot-border-radius":st,"--n-dot-box-shadow":tt,"--n-dot-color":w,"--n-dot-color-modal":y,"--n-dot-color-popover":ct,"--n-dot-height":it,"--n-dot-width":rt,"--n-fill-color":s,"--n-fill-color-hover":c,"--n-font-size":lt,"--n-handle-box-shadow":V,"--n-handle-box-shadow-active":de,"--n-handle-box-shadow-focus":Qe,"--n-handle-box-shadow-hover":le,"--n-handle-color":b,"--n-handle-size":nt,"--n-opacity-disabled":T,"--n-rail-color":t,"--n-rail-color-hover":a,"--n-rail-height":ot,"--n-rail-width-vertical":at,"--n-mark-font-size":e}}),F=d?Me("slider",void 0,_e,o):void 0,Se=k(()=>{const{self:{fontSize:e,indicatorColor:t,indicatorBoxShadow:a,indicatorTextColor:s,indicatorBorderRadius:c}}=u.value;return{"--n-font-size":e,"--n-indicator-border-radius":c,"--n-indicator-box-shadow":a,"--n-indicator-color":t,"--n-indicator-text-color":s}}),H=d?Me("slider-indicator",void 0,Se,o):void 0;return{mergedClsPrefix:n,namespace:r,uncontrolledValue:ae,mergedValue:ne,mergedDisabled:j,mergedPlacement:Fe,isMounted:Mt(),adjustedTo:he(o),dotTransitionDisabled:U,markInfos:Ne,isShowTooltip:be,shouldKeepTooltipTransition:Ae,handleRailRef:v,setHandleRefs:h,setFollowerRefs:l,fillStyle:He,getHandleStyle:Pe,activeIndex:R,arrifiedValues:M,followerEnabledIndexSet:f,handleRailMouseDown:Ke,handleHandleFocus:Ze,handleHandleBlur:qe,handleHandleMouseEnter:We,handleHandleMouseLeave:Je,handleRailKeyDown:Xe,indicatorCssVars:d?void 0:Se,indicatorThemeClass:H==null?void 0:H.themeClass,indicatorOnRender:H==null?void 0:H.onRender,cssVars:d?void 0:_e,themeClass:F==null?void 0:F.themeClass,onRender:F==null?void 0:F.onRender}},render(){var o;const{mergedClsPrefix:n,themeClass:r,formatTooltip:d}=this;return(o=this.onRender)===null||o===void 0||o.call(this),x("div",{class:["".concat(n,"-slider"),r,{["".concat(n,"-slider--disabled")]:this.mergedDisabled,["".concat(n,"-slider--active")]:this.activeIndex!==-1,["".concat(n,"-slider--with-mark")]:this.marks,["".concat(n,"-slider--vertical")]:this.vertical,["".concat(n,"-slider--reverse")]:this.reverse}],style:this.cssVars,onKeydown:this.handleRailKeyDown,onMousedown:this.handleRailMouseDown,onTouchstart:this.handleRailMouseDown},x("div",{class:"".concat(n,"-slider-rail")},x("div",{class:"".concat(n,"-slider-rail__fill"),style:this.fillStyle}),this.marks?x("div",{class:["".concat(n,"-slider-dots"),this.dotTransitionDisabled&&"".concat(n,"-slider-dots--transition-disabled")]},this.markInfos.map(u=>x("div",{key:u.label,class:["".concat(n,"-slider-dot"),{["".concat(n,"-slider-dot--active")]:u.active}],style:u.style}))):null,x("div",{ref:"handleRailRef",class:"".concat(n,"-slider-handles")},this.arrifiedValues.map((u,v)=>{const $=this.isShowTooltip(v);return x(Rt,null,{default:()=>[x($t,null,{default:()=>x("div",{ref:this.setHandleRefs(v),class:"".concat(n,"-slider-handle-wrapper"),tabindex:this.mergedDisabled?-1:0,role:"slider","aria-valuenow":u,"aria-valuemin":this.min,"aria-valuemax":this.max,"aria-orientation":this.vertical?"vertical":"horizontal","aria-disabled":this.disabled,style:this.getHandleStyle(u,v),onFocus:()=>{this.handleHandleFocus(v)},onBlur:()=>{this.handleHandleBlur(v)},onMouseenter:()=>{this.handleHandleMouseEnter(v)},onMouseleave:()=>{this.handleHandleMouseLeave(v)}},Tt(this.$slots.thumb,()=>[x("div",{class:"".concat(n,"-slider-handle")})]))}),this.tooltip&&x(Bt,{ref:this.setFollowerRefs(v),show:$,to:this.adjustedTo,enabled:this.showTooltip&&!this.range||this.followerEnabledIndexSet.has(v),teleportDisabled:this.adjustedTo===he.tdkey,placement:this.mergedPlacement,containerClass:this.namespace},{default:()=>x(Dt,{name:"fade-in-scale-up-transition",appear:this.isMounted,css:this.shouldKeepTooltipTransition(v),onEnter:()=>{this.followerEnabledIndexSet.add(v)},onAfterLeave:()=>{this.followerEnabledIndexSet.delete(v)}},{default:()=>{var h;return $?((h=this.indicatorOnRender)===null||h===void 0||h.call(this),x("div",{class:["".concat(n,"-slider-handle-indicator"),this.indicatorThemeClass,"".concat(n,"-slider-handle-indicator--").concat(this.mergedPlacement)],style:this.indicatorCssVars},typeof d=="function"?d(u):u)):null}})})]})})),this.marks?x("div",{class:"".concat(n,"-slider-marks")},this.markInfos.map(u=>x("div",{key:u.label,class:"".concat(n,"-slider-mark"),style:u.style},u.label))):null))}}),Yt={xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink",viewBox:"0 0 24 24"},Xt=p("g",{fill:"none",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round"},[p("path",{d:"M12 16h4v4"}),p("path",{d:"M19.458 11.042c.86-2.366.722-4.58-.6-5.9c-2.272-2.274-7.185-1.045-10.973 2.743c-3.788 3.788-5.017 8.701-2.744 10.974c2.227 2.226 6.987 1.093 10.74-2.515"})],-1),Kt=[Xt],De=E({name:"Rotate360",render:function(n,r){return N(),A("svg",Yt,Kt)}}),Gt={xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink",viewBox:"0 0 24 24"},Zt=Vt('<g fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="10" cy="10" r="7"></circle><path d="M7 10h6"></path><path d="M10 7v6"></path><path d="M21 21l-6-6"></path></g>',1),qt=[Zt],Wt=E({name:"ZoomIn",render:function(n,r){return N(),A("svg",Gt,qt)}}),Jt={xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink",viewBox:"0 0 24 24"},Qt=p("g",{fill:"none",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round"},[p("circle",{cx:"10",cy:"10",r:"7"}),p("path",{d:"M7 10h6"}),p("path",{d:"M21 21l-6-6"})],-1),eo=[Qt],to=E({name:"ZoomOut",render:function(n,r){return N(),A("svg",Jt,eo)}}),oe=o=>(Lt("data-v-33182fb1"),o=o(),Et(),o),oo=oe(()=>p("div",{class:"pin north-pin"},null,-1)),ao=oe(()=>p("div",{class:"pin east-pin"},null,-1)),no=oe(()=>p("div",{class:"pin south-pin"},null,-1)),io=oe(()=>p("div",{class:"pin west-pin"},null,-1)),ro=[oo,ao,no,io],so={class:"compass-orientation-text"},lo=.3,co=E({__name:"MapCompass",props:{bearing:{},pitch:{},size:{}},emits:["update:bearing"],setup(o,{emit:n}){const r=o,d=n,u=k(()=>"transform: rotate(".concat(r.bearing,"deg)")),v=k(()=>"transform: rotateX(".concat(Math.min(45,r.pitch?r.pitch:0),"deg); transition: all 0.3s ease;")),$=k(()=>r.size?"--compass-size: ".concat(r.size,"px"):""),h=["N","W","S","E"],z=k(()=>{const l=r.bearing>0?r.bearing:360+r.bearing;return h[Math.round(l%360/90)%4]});return Ie(()=>{const l=document.querySelector(".map-compass");l.onclick=()=>d("update:bearing",0),l&&l.addEventListener("mousewheel",f=>{f.preventDefault();const D=(r.bearing+f.deltaY*lo)%360;d("update:bearing",Math.round(D>=0?D:360+D))})}),(l,f)=>(N(),A("div",{style:ue(v.value)},[p("div",{class:"map-compass",style:ue($.value)},[p("div",{class:"compass-panel",style:ue(u.value)},ro,4),p("span",so,It(z.value),1)],4)],4))}}),uo=Le(co,[["__scopeId","data-v-33182fb1"]]),ho=["id"],vo={class:"nav-toolbox"},mo={style:{transform:"rotateX(200deg)"}},fo={style:{transform:"rotateY(20deg)"}},po={class:"compass-container"},go=E({__name:"MapLibreGLView",props:{plugin:{},centre:{},viewCentre:{},tracking:{type:Boolean},mapType:{},zoom:{}},emits:["ready","update:zoom","update:centre","update:viewCentre","update:mapType"],setup(o,{emit:n}){let r=C(24);const d=ft(),u={info:(z,l)=>d.info(z,{duration:l}),warning:(z,l)=>d.warning(z,{duration:l}),error:(z,l)=>d.error(z,{duration:l})},v=o,$=n,h=Ft(new pt(v,$,u,"maplibregl"));return Ie(()=>{h.mount(),h.trackingMode=!!v.tracking}),(z,l)=>(N(),Ht(m(Nt),{class:"container"},{default:S(()=>[p("div",{id:h.id,class:"maplibregl-map-container"},null,8,ho),p("div",vo,[g(m(W),{strong:"",secondary:"",circle:"",type:"primary",onClick:l[0]||(l[0]=f=>h.zoom+=1)},{default:S(()=>[g(m(q),{size:m(r)-2},{default:S(()=>[g(m(Wt))]),_:1},8,["size"])]),_:1}),g(m(W),{strong:"",secondary:"",circle:"",type:"primary",onClick:l[1]||(l[1]=f=>h.zoom-=1)},{default:S(()=>[g(m(q),{size:m(r)-2},{default:S(()=>[g(m(to))]),_:1},8,["size"])]),_:1}),g(m(Re),{placement:"left",trigger:"hover",class:"mapview-tooltip-popover-input"},{trigger:S(()=>[g(m(W),{strong:"",secondary:"",circle:"",type:"primary"},{default:S(()=>[g(m(q),{size:m(r)},{default:S(()=>[p("div",mo,[g(m(De),{style:{transform:"rotate(225deg)"}})])]),_:1},8,["size"])]),_:1})]),default:S(()=>[p("div",null,[g(m(Be),{vertical:"",value:h.bearing,"onUpdate:value":l[2]||(l[2]=f=>h.bearing=f),min:0,max:360,style:{height:"16em"},tooltip:!0,placement:"left","format-tooltip":f=>"".concat(f,"°")},null,8,["value","format-tooltip"])])]),_:1}),g(m(Re),{placement:"left",trigger:"hover",class:"mapview-tooltip-popover-input"},{trigger:S(()=>[g(m(W),{strong:"",secondary:"",circle:"",type:"primary"},{default:S(()=>[g(m(q),{size:m(r)},{default:S(()=>[p("div",fo,[g(m(De),{style:{transform:"rotate(-45deg)"}})])]),_:1},8,["size"])]),_:1})]),default:S(()=>[p("div",null,[g(m(Be),{value:h.pitch,"onUpdate:value":l[3]||(l[3]=f=>h.pitch=f),min:0,max:60,vertical:"",style:{height:"8em"},tooltip:!0,placement:"left","format-tooltip":f=>"".concat(f,"°")},null,8,["value","format-tooltip"])])]),_:1}),g(m(gt),{value:h.trackingMode,"onUpdate:value":l[4]||(l[4]=f=>h.trackingMode=f),size:"small"},null,8,["value"])]),p("div",po,[g(uo,{bearing:h.bearing,"onUpdate:bearing":l[5]||(l[5]=f=>h.bearing=f),size:m(r)*2,pitch:h.pitch},null,8,["bearing","size","pitch"])])]),_:1}))}}),bo=Le(go,[["__scopeId","data-v-47e943bc"]]);class wo{constructor(n){B(this,"host");B(this,"space");B(this,"behaviour");B(this,"shown",!1);this.host=n,this.space="terrainLayer"}initialise(){this.host.map.addSource("terrainSource",{type:"raster-dem",url:"https://api.maptiler.com/tiles/terrain-rgb-v2/tiles.json?key=".concat(ve),tileSize:256}),this.host.map.addSource("hillshadeSource",{type:"raster-dem",url:"https://api.maptiler.com/tiles/terrain-rgb-v2/tiles.json?key=".concat(ve),tileSize:256}),this.host.map.addLayer({id:"hills",type:"hillshade",source:"hillshadeSource",layout:{visibility:"visible"},paint:{"hillshade-shadow-color":"#473B24"}},this.host.getSymbolLayerID()),this.host.map.getLayer("hills").visibility="none"}show(){this.shown||(this.shown=!0,this.host.map.getLayer("hills").visibility="visible",this.host.map.setTerrain({source:"terrainSource",exaggeration:1}))}hide(){this.shown&&(this.shown=!1,this.host.map.getLayer("hills").visibility="none",this.host.map.setTerrain({source:"terrainSource",exaggeration:0}))}mount(){return new Promise(n=>{const r=setInterval(()=>{if(this.host.map.isStyleLoaded()){this.initialise();const d=()=>{this.host.getPitch()>0?this.show():this.hide()};this.host.addEventHandler("pitch",d,!0),this.host.addEventHandler("load",d,!0),clearInterval(r),n(!0)}})})}unmount(){return this.host.map.removeLayer("hills"),this.host.map.removeSource("terrainSource"),this.host.map.removeSource("hillshadeSource"),!0}}class yo{constructor(n){B(this,"host");B(this,"space");B(this,"behaviour");B(this,"shown",!1);this.host=n,this.space="terrainLayer"}initialise(){this.host.map.addSource("maptiler-tiles-building",{url:"https://api.maptiler.com/tiles/v3/tiles.json?key=".concat(ve),type:"vector"}),this.host.map.addLayer({id:"3d-buildings",source:"maptiler-tiles-building","source-layer":"building",type:"fill-extrusion",minzoom:15,paint:{"fill-extrusion-color":["interpolate",["linear"],["get","render_height"],0,"lightgray",200,"royalblue",400,"lightblue"],"fill-extrusion-height":["interpolate",["linear"],["zoom"],15,0,16,["get","render_height"]],"fill-extrusion-base":["case",[">=",["get","zoom"],16],["get","render_min_height"],0]}},this.host.getSymbolLayerID()),this.shown=!0}show(){this.shown||(this.shown=!0,this.host.map.getLayer("3d-buildings").visibility="visible")}hide(){this.shown&&(this.shown=!1,this.host.map.getLayer("3d-buildings").visibility="none")}mount(){return console.log("Building layer mounted"),new Promise(n=>{const r=setInterval(()=>{if(this.host.map.isStyleLoaded()){this.initialise();const d=()=>{this.host.getPitch()>0?this.show():this.hide()};this.host.addEventHandler("pitch",d,!0),setTimeout(d,100),clearInterval(r),n(!0)}})})}unmount(){return this.host.map.removeLayer("3d-buildings"),this.host.map.removeSource("maptiler-tiles-building"),!0}}const xo={class:"map-layout"},Co=E({__name:"MapLibreGLJSPreview",setup(o){const n=C([yo,wo]),r=C("basic"),d=C(10);return(u,v)=>(N(),A("div",xo,[g(bo,{"map-type":r.value,"lite-mode":!1,plugin:n.value,zoom:d.value,tracking:!0},null,8,["map-type","plugin","zoom"])]))}});export{Co as default};
