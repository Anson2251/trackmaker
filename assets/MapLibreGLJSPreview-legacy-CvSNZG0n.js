!function(){function e(n){return e="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},e(n)}function n(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}function r(e,n){for(var r=0;r<n.length;r++){var t=n[r];t.enumerable=t.enumerable||!1,t.configurable=!0,"value"in t&&(t.writable=!0),Object.defineProperty(e,a(t.key),t)}}function t(e,n,t){return n&&r(e.prototype,n),t&&r(e,t),Object.defineProperty(e,"prototype",{writable:!1}),e}function o(e,n,r){return(n=a(n))in e?Object.defineProperty(e,n,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[n]=r,e}function a(n){var r=function(n,r){if("object"!=e(n)||!n)return n;var t=n[Symbol.toPrimitive];if(void 0!==t){var o=t.call(n,r||"default");if("object"!=e(o))return o;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===r?String:Number)(n)}(n,"string");return"symbol"==e(r)?r:r+""}function i(e){return function(e){if(Array.isArray(e))return d(e)}(e)||function(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(e)||s(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function l(e,n){return function(e){if(Array.isArray(e))return e}(e)||function(e,n){var r=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=r){var t,o,a,i,l=[],s=!0,d=!1;try{if(a=(r=r.call(e)).next,0===n){if(Object(r)!==r)return;s=!1}else for(;!(s=(t=a.call(r)).done)&&(l.push(t.value),l.length!==n);s=!0);}catch(e){d=!0,o=e}finally{try{if(!s&&null!=r.return&&(i=r.return(),Object(i)!==i))return}finally{if(d)throw o}}return l}}(e,n)||s(e,n)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function s(e,n){if(e){if("string"==typeof e)return d(e,n);var r={}.toString.call(e).slice(8,-1);return"Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r?Array.from(e):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?d(e,n):void 0}}function d(e,n){(null==n||n>e.length)&&(n=e.length);for(var r=0,t=Array(n);r<n;r++)t[r]=e[r];return t}System.register(["./map-manager-legacy-CbHv6y1k.js","./index-legacy-9TNWnU1E.js","./Element-legacy-DIeu1zOx.js"],(function(e,r){"use strict";var a,s,d,u,c,h,v,f,p,m,b,g,y,w,x,k,S,z,C,M,B,T,j,D,R,_,A,I,F,L,H,E,P,O,N,V,U,Y,X,K,$,q,W,G,Z,J,Q,ee,ne,re,te,oe,ae,ie,le,se;return{setters:[function(e){a=e.a,s=e.u,d=e.M,u=e.I,c=e.B,h=e.N},function(e){v=e.aa,f=e.a$,p=e.b0,m=e.s,b=e.p,g=e.E,y=e.q,w=e.aO,x=e.a6,k=e.a7,S=e.d,z=e.t,C=e.v,M=e.r,B=e.A,T=e.$,j=e._,D=e.w,R=e.e,_=e.C,A=e.Y,I=e.b1,F=e.n,L=e.b2,H=e.b3,E=e.ab,P=e.b4,O=e.T,N=e.a3,V=e.ac,U=e.ae,Y=e.b5,X=e.o,K=e.c,$=e.af,q=e.b6,W=e.b,G=e.aP,Z=e.ap,J=e.aU,Q=e.aV,ee=e.aq,ne=e.ay,re=e.ak,te=e.ah,oe=e.al,ae=e.a,ie=e.b7,le=e.b8},function(e){se=e.N}],execute:function(){var r={name:"Slider",common:v,self:function(e){var n=e.railColor,r=e.primaryColor,t=e.baseColor,o=e.cardColor,a=e.modalColor,i=e.popoverColor,l=e.borderRadius,s=e.fontSize,d=e.opacityDisabled;return Object.assign(Object.assign({},f),{fontSize:s,markFontSize:s,railColor:n,railColorHover:n,fillColor:r,fillColorHover:r,opacityDisabled:d,handleColor:"#FFF",dotColor:o,dotColorModal:a,dotColorPopover:i,handleBoxShadow:"0 1px 4px 0 rgba(0, 0, 0, 0.3), inset 0 0 1px 0 rgba(0, 0, 0, 0.05)",handleBoxShadowHover:"0 1px 4px 0 rgba(0, 0, 0, 0.3), inset 0 0 1px 0 rgba(0, 0, 0, 0.05)",handleBoxShadowActive:"0 1px 4px 0 rgba(0, 0, 0, 0.3), inset 0 0 1px 0 rgba(0, 0, 0, 0.05)",handleBoxShadowFocus:"0 1px 4px 0 rgba(0, 0, 0, 0.3), inset 0 0 1px 0 rgba(0, 0, 0, 0.05)",indicatorColor:"rgba(0, 0, 0, .85)",indicatorBoxShadow:"0 2px 8px 0 rgba(0, 0, 0, 0.12)",indicatorTextColor:t,indicatorBorderRadius:l,dotBorder:"2px solid ".concat(n),dotBorderActive:"2px solid ".concat(r),dotBoxShadow:""})}};function de(e){return window.TouchEvent&&e instanceof window.TouchEvent}function ue(){var e=new Map;return p((function(){e.clear()})),[e,function(n){return function(r){e.set(n,r)}}]}var ce=m([b("slider","\n display: block;\n padding: calc((var(--n-handle-size) - var(--n-rail-height)) / 2) 0;\n position: relative;\n z-index: 0;\n width: 100%;\n cursor: pointer;\n user-select: none;\n -webkit-user-select: none;\n ",[g("reverse",[b("slider-handles",[b("slider-handle-wrapper","\n transform: translate(50%, -50%);\n ")]),b("slider-dots",[b("slider-dot","\n transform: translateX(50%, -50%);\n ")]),g("vertical",[b("slider-handles",[b("slider-handle-wrapper","\n transform: translate(-50%, -50%);\n ")]),b("slider-marks",[b("slider-mark","\n transform: translateY(calc(-50% + var(--n-dot-height) / 2));\n ")]),b("slider-dots",[b("slider-dot","\n transform: translateX(-50%) translateY(0);\n ")])])]),g("vertical","\n padding: 0 calc((var(--n-handle-size) - var(--n-rail-height)) / 2);\n width: var(--n-rail-width-vertical);\n height: 100%;\n ",[b("slider-handles","\n top: calc(var(--n-handle-size) / 2);\n right: 0;\n bottom: calc(var(--n-handle-size) / 2);\n left: 0;\n ",[b("slider-handle-wrapper","\n top: unset;\n left: 50%;\n transform: translate(-50%, 50%);\n ")]),b("slider-rail","\n height: 100%;\n ",[y("fill","\n top: unset;\n right: 0;\n bottom: unset;\n left: 0;\n ")]),g("with-mark","\n width: var(--n-rail-width-vertical);\n margin: 0 32px 0 8px;\n "),b("slider-marks","\n top: calc(var(--n-handle-size) / 2);\n right: unset;\n bottom: calc(var(--n-handle-size) / 2);\n left: 22px;\n font-size: var(--n-mark-font-size);\n ",[b("slider-mark","\n transform: translateY(50%);\n white-space: nowrap;\n ")]),b("slider-dots","\n top: calc(var(--n-handle-size) / 2);\n right: unset;\n bottom: calc(var(--n-handle-size) / 2);\n left: 50%;\n ",[b("slider-dot","\n transform: translateX(-50%) translateY(50%);\n ")])]),g("disabled","\n cursor: not-allowed;\n opacity: var(--n-opacity-disabled);\n ",[b("slider-handle","\n cursor: not-allowed;\n ")]),g("with-mark","\n width: 100%;\n margin: 8px 0 32px 0;\n "),m("&:hover",[b("slider-rail",{backgroundColor:"var(--n-rail-color-hover)"},[y("fill",{backgroundColor:"var(--n-fill-color-hover)"})]),b("slider-handle",{boxShadow:"var(--n-handle-box-shadow-hover)"})]),g("active",[b("slider-rail",{backgroundColor:"var(--n-rail-color-hover)"},[y("fill",{backgroundColor:"var(--n-fill-color-hover)"})]),b("slider-handle",{boxShadow:"var(--n-handle-box-shadow-hover)"})]),b("slider-marks","\n position: absolute;\n top: 18px;\n left: calc(var(--n-handle-size) / 2);\n right: calc(var(--n-handle-size) / 2);\n ",[b("slider-mark","\n position: absolute;\n transform: translateX(-50%);\n white-space: nowrap;\n ")]),b("slider-rail","\n width: 100%;\n position: relative;\n height: var(--n-rail-height);\n background-color: var(--n-rail-color);\n transition: background-color .3s var(--n-bezier);\n border-radius: calc(var(--n-rail-height) / 2);\n ",[y("fill","\n position: absolute;\n top: 0;\n bottom: 0;\n border-radius: calc(var(--n-rail-height) / 2);\n transition: background-color .3s var(--n-bezier);\n background-color: var(--n-fill-color);\n ")]),b("slider-handles","\n position: absolute;\n top: 0;\n right: calc(var(--n-handle-size) / 2);\n bottom: 0;\n left: calc(var(--n-handle-size) / 2);\n ",[b("slider-handle-wrapper","\n outline: none;\n position: absolute;\n top: 50%;\n transform: translate(-50%, -50%);\n cursor: pointer;\n display: flex;\n ",[b("slider-handle","\n height: var(--n-handle-size);\n width: var(--n-handle-size);\n border-radius: 50%;\n overflow: hidden;\n transition: box-shadow .2s var(--n-bezier), background-color .3s var(--n-bezier);\n background-color: var(--n-handle-color);\n box-shadow: var(--n-handle-box-shadow);\n ",[m("&:hover","\n box-shadow: var(--n-handle-box-shadow-hover);\n ")]),m("&:focus",[b("slider-handle","\n box-shadow: var(--n-handle-box-shadow-focus);\n ",[m("&:hover","\n box-shadow: var(--n-handle-box-shadow-active);\n ")])])])]),b("slider-dots","\n position: absolute;\n top: 50%;\n left: calc(var(--n-handle-size) / 2);\n right: calc(var(--n-handle-size) / 2);\n ",[g("transition-disabled",[b("slider-dot","transition: none;")]),b("slider-dot","\n transition:\n border-color .3s var(--n-bezier),\n box-shadow .3s var(--n-bezier),\n background-color .3s var(--n-bezier);\n position: absolute;\n transform: translate(-50%, -50%);\n height: var(--n-dot-height);\n width: var(--n-dot-width);\n border-radius: var(--n-dot-border-radius);\n overflow: hidden;\n box-sizing: border-box;\n border: var(--n-dot-border);\n background-color: var(--n-dot-color);\n ",[g("active","border: var(--n-dot-border-active);")])])]),b("slider-handle-indicator","\n font-size: var(--n-font-size);\n padding: 6px 10px;\n border-radius: var(--n-indicator-border-radius);\n color: var(--n-indicator-text-color);\n background-color: var(--n-indicator-color);\n box-shadow: var(--n-indicator-box-shadow);\n ",[w()]),b("slider-handle-indicator","\n font-size: var(--n-font-size);\n padding: 6px 10px;\n border-radius: var(--n-indicator-border-radius);\n color: var(--n-indicator-text-color);\n background-color: var(--n-indicator-color);\n box-shadow: var(--n-indicator-box-shadow);\n ",[g("top","\n margin-bottom: 12px;\n "),g("right","\n margin-left: 12px;\n "),g("bottom","\n margin-top: 12px;\n "),g("left","\n margin-right: 12px;\n "),w()]),x(b("slider",[b("slider-dot","background-color: var(--n-dot-color-modal);")])),k(b("slider",[b("slider-dot","background-color: var(--n-dot-color-popover);")]))]),he=Object.assign(Object.assign({},C.props),{to:I.propTo,defaultValue:{type:[Number,Array],default:0},marks:Object,disabled:{type:Boolean,default:void 0},formatTooltip:Function,keyboard:{type:Boolean,default:!0},min:{type:Number,default:0},max:{type:Number,default:100},step:{type:[Number,String],default:1},range:Boolean,value:[Number,Array],placement:String,showTooltip:{type:Boolean,default:void 0},tooltip:{type:Boolean,default:!0},vertical:Boolean,reverse:Boolean,"onUpdate:value":[Function,Array],onUpdateValue:[Function,Array],onDragstart:[Function],onDragend:[Function]}),ve=S({name:"Slider",props:he,setup:function(e){var n=z(e),t=n.mergedClsPrefixRef,s=n.namespaceRef,d=n.inlineThemeDisabled,u=C("Slider","-slider",ce,r,e,t),c=M(null),h=l(ue(),2),v=h[0],f=h[1],p=l(ue(),2),m=p[0],b=p[1],g=M(new Set),y=a(e),w=y.mergedDisabledRef,x=B((function(){var n=e.step;if(Number(n)<=0||"mark"===n)return 0;var r=n.toString(),t=0;return r.includes(".")&&(t=r.length-r.indexOf(".")-1),t})),k=M(e.defaultValue),S=T(e,"value"),F=j(S,k),L=B((function(){var n=F.value;return(e.range?n:[n]).map(oe)})),H=B((function(){return L.value.length>2})),E=B((function(){return void 0===e.placement?e.vertical?"right":"top":e.placement})),P=B((function(){var n=e.marks;return n?Object.keys(n).map(Number.parseFloat):null})),O=M(-1),X=M(-1),K=M(-1),$=M(!1),q=M(!1),W=B((function(){var n=e.vertical,r=e.reverse;return n?r?"top":"bottom":r?"right":"left"})),G=B((function(){if(!H.value){var n=L.value,r=ae(e.range?Math.min.apply(Math,i(n)):e.min),t=ae(e.range?Math.max.apply(Math,i(n)):n[0]),a=W.value;return e.vertical?o(o({},a,"".concat(r,"%")),"height","".concat(t-r,"%")):o(o({},a,"".concat(r,"%")),"width","".concat(t-r,"%"))}})),Z=B((function(){var n=[],r=e.marks;if(r){var t=L.value.slice();t.sort((function(e,n){return e-n}));for(var a=W.value,i=H.value,l=e.range,s=i?function(){return!1}:function(e){return l?e>=t[0]&&e<=t[t.length-1]:e<=t[0]},d=0,u=Object.keys(r);d<u.length;d++){var c=u[d],h=Number(c);n.push({active:s(h),label:r[c],style:o({},a,"".concat(ae(h),"%"))})}}return n}));function J(n){return e.showTooltip||K.value===n||O.value===n&&$.value}function Q(){m.forEach((function(e,n){J(n)&&e.syncPosition()}))}function ee(n){var r=e["onUpdate:value"],t=e.onUpdateValue,o=y.nTriggerFormInput,a=y.nTriggerFormChange;t&&N(t,n),r&&N(r,n),k.value=n,o(),a()}function ne(n){if(e.range){if(Array.isArray(n)){var r=L.value;n.join()!==r.join()&&ee(n)}}else if(!Array.isArray(n)){L.value[0]!==n&&ee(n)}}function re(n,r){if(e.range){var t=L.value.slice();t.splice(r,1,n),ne(t)}else ne(n)}function te(n,r,t){var o=void 0!==t;t||(t=n-r>0?1:-1);var a=P.value||[],l=e.step;if("mark"===l){var s=ie(n,a.concat(r),o?t:void 0);return s?s.value:r}if(l<=0)return r;var d,u=x.value;if(o){var c=Number((r/l).toFixed(u)),h=Math.floor(c),v=c<h?h:h+1;d=ie(r,[Number(((c>h?h:h-1)*l).toFixed(u)),Number((v*l).toFixed(u))].concat(i(a)),t)}else{var f=function(n){var r=e.step,t=e.min;if(Number(r)<=0||"mark"===r)return n;var o=Math.round((n-t)/r)*r+t;return Number(o.toFixed(x.value))}(n);d=ie(n,[].concat(i(a),[f]))}return d?oe(d.value):r}function oe(n){return Math.min(e.max,Math.max(e.min,n))}function ae(n){var r=e.max,t=e.min;return(n-t)/(r-t)*100}function ie(e){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:P.value,r=arguments.length>2?arguments[2]:void 0;if(!(null==n?void 0:n.length))return null;for(var t=null,o=-1;++o<n.length;){var a=n[o]-e,i=Math.abs(a);(void 0===r||a*r>0)&&(null===t||i<t.distance)&&(t={index:o,distance:i,value:n[o]})}return t}function le(n){var r=c.value;if(r){var t,o=de(n)?n.touches[0]:n,a=r.getBoundingClientRect();return t=e.vertical?(a.bottom-o.clientY)/a.height:(o.clientX-a.left)/a.width,e.reverse&&(t=1-t),function(n){var r=e.max,t=e.min;return t+(r-t)*n}(t)}}function se(n){var r=O.value;if(-1!==r){var t=e.step,o=L.value[r];re(te(Number(t)<=0||"mark"===t?o:o+t*n,o,n>0?1:-1),r)}}function he(){$.value&&($.value=!1,e.onDragend&&N(e.onDragend),U("touchend",document,fe),U("mouseup",document,fe),U("touchmove",document,ve),U("mousemove",document,ve))}function ve(e){var n=O.value;if($.value&&-1!==n){var r=le(e);void 0!==r&&re(te(r,L.value[n]),n)}else he()}function fe(){he()}D(O,(function(e,n){Y((function(){return X.value=n}))})),D(F,(function(){if(e.marks){if(q.value)return;q.value=!0,Y((function(){q.value=!1}))}Y(Q)})),R((function(){he()}));var pe=B((function(){var e=u.value,n=e.self,r=n.markFontSize,t=n.railColor,o=n.railColorHover,a=n.fillColor,i=n.fillColorHover,l=n.handleColor,s=n.opacityDisabled,d=n.dotColor,c=n.dotColorModal,h=n.handleBoxShadow,v=n.handleBoxShadowHover,f=n.handleBoxShadowActive,p=n.handleBoxShadowFocus,m=n.dotBorder,b=n.dotBoxShadow,g=n.railHeight,y=n.railWidthVertical,w=n.handleSize,x=n.dotHeight,k=n.dotWidth,S=n.dotBorderRadius,z=n.fontSize,C=n.dotBorderActive,M=n.dotColorPopover;return{"--n-bezier":e.common.cubicBezierEaseInOut,"--n-dot-border":m,"--n-dot-border-active":C,"--n-dot-border-radius":S,"--n-dot-box-shadow":b,"--n-dot-color":d,"--n-dot-color-modal":c,"--n-dot-color-popover":M,"--n-dot-height":x,"--n-dot-width":k,"--n-fill-color":a,"--n-fill-color-hover":i,"--n-font-size":z,"--n-handle-box-shadow":h,"--n-handle-box-shadow-active":f,"--n-handle-box-shadow-focus":p,"--n-handle-box-shadow-hover":v,"--n-handle-color":l,"--n-handle-size":w,"--n-opacity-disabled":s,"--n-rail-color":t,"--n-rail-color-hover":o,"--n-rail-height":g,"--n-rail-width-vertical":y,"--n-mark-font-size":r}})),me=d?_("slider",void 0,pe,e):void 0,be=B((function(){var e=u.value.self,n=e.fontSize,r=e.indicatorColor,t=e.indicatorBoxShadow,o=e.indicatorTextColor;return{"--n-font-size":n,"--n-indicator-border-radius":e.indicatorBorderRadius,"--n-indicator-box-shadow":t,"--n-indicator-color":r,"--n-indicator-text-color":o}})),ge=d?_("slider-indicator",void 0,be,e):void 0;return{mergedClsPrefix:t,namespace:s,uncontrolledValue:k,mergedValue:F,mergedDisabled:w,mergedPlacement:E,isMounted:A(),adjustedTo:I(e),dotTransitionDisabled:q,markInfos:Z,isShowTooltip:J,shouldKeepTooltipTransition:function(e){return!$.value||!(O.value===e&&X.value===e)},handleRailRef:c,setHandleRefs:f,setFollowerRefs:b,fillStyle:G,getHandleStyle:function(e,n){var r=ae(e);return o(o({},W.value,"".concat(r,"%")),"zIndex",n===O.value?1:0)},activeIndex:O,arrifiedValues:L,followerEnabledIndexSet:g,handleRailMouseDown:function(n){var r,t;if(!w.value&&(de(n)||0===n.button)){var o=le(n);if(void 0!==o){var a=L.value.slice(),i=e.range?null!==(t=null===(r=ie(o,a))||void 0===r?void 0:r.index)&&void 0!==t?t:-1:0;-1!==i&&(n.preventDefault(),function(e){var n;~e&&(O.value=e,null===(n=v.get(e))||void 0===n||n.focus())}(i),$.value||($.value=!0,e.onDragstart&&N(e.onDragstart),V("touchend",document,fe),V("mouseup",document,fe),V("touchmove",document,ve),V("mousemove",document,ve)),re(te(o,L.value[i]),i))}}},handleHandleFocus:function(e){O.value=e,w.value||(K.value=e)},handleHandleBlur:function(e){O.value===e&&(O.value=-1,he()),K.value===e&&(K.value=-1)},handleHandleMouseEnter:function(e){K.value=e},handleHandleMouseLeave:function(e){K.value===e&&(K.value=-1)},handleRailKeyDown:function(n){if(!w.value&&e.keyboard){var r=e.vertical,t=e.reverse;switch(n.key){case"ArrowUp":n.preventDefault(),se(r&&t?-1:1);break;case"ArrowRight":n.preventDefault(),se(!r&&t?-1:1);break;case"ArrowDown":n.preventDefault(),se(r&&t?1:-1);break;case"ArrowLeft":n.preventDefault(),se(!r&&t?1:-1)}}},indicatorCssVars:d?void 0:be,indicatorThemeClass:null==ge?void 0:ge.themeClass,indicatorOnRender:null==ge?void 0:ge.onRender,cssVars:d?void 0:pe,themeClass:null==me?void 0:me.themeClass,onRender:null==me?void 0:me.onRender}},render:function(){var e,n=this,r=this.mergedClsPrefix,t=this.themeClass,a=this.formatTooltip;return null===(e=this.onRender)||void 0===e||e.call(this),F("div",{class:["".concat(r,"-slider"),t,o(o(o(o(o({},"".concat(r,"-slider--disabled"),this.mergedDisabled),"".concat(r,"-slider--active"),-1!==this.activeIndex),"".concat(r,"-slider--with-mark"),this.marks),"".concat(r,"-slider--vertical"),this.vertical),"".concat(r,"-slider--reverse"),this.reverse)],style:this.cssVars,onKeydown:this.handleRailKeyDown,onMousedown:this.handleRailMouseDown,onTouchstart:this.handleRailMouseDown},F("div",{class:"".concat(r,"-slider-rail")},F("div",{class:"".concat(r,"-slider-rail__fill"),style:this.fillStyle}),this.marks?F("div",{class:["".concat(r,"-slider-dots"),this.dotTransitionDisabled&&"".concat(r,"-slider-dots--transition-disabled")]},this.markInfos.map((function(e){return F("div",{key:e.label,class:["".concat(r,"-slider-dot"),o({},"".concat(r,"-slider-dot--active"),e.active)],style:e.style})}))):null,F("div",{ref:"handleRailRef",class:"".concat(r,"-slider-handles")},this.arrifiedValues.map((function(e,t){var o=n.isShowTooltip(t);return F(L,null,{default:function(){return[F(H,null,{default:function(){return F("div",{ref:n.setHandleRefs(t),class:"".concat(r,"-slider-handle-wrapper"),tabindex:n.mergedDisabled?-1:0,role:"slider","aria-valuenow":e,"aria-valuemin":n.min,"aria-valuemax":n.max,"aria-orientation":n.vertical?"vertical":"horizontal","aria-disabled":n.disabled,style:n.getHandleStyle(e,t),onFocus:function(){n.handleHandleFocus(t)},onBlur:function(){n.handleHandleBlur(t)},onMouseenter:function(){n.handleHandleMouseEnter(t)},onMouseleave:function(){n.handleHandleMouseLeave(t)}},E(n.$slots.thumb,(function(){return[F("div",{class:"".concat(r,"-slider-handle")})]})))}}),n.tooltip&&F(P,{ref:n.setFollowerRefs(t),show:o,to:n.adjustedTo,enabled:n.showTooltip&&!n.range||n.followerEnabledIndexSet.has(t),teleportDisabled:n.adjustedTo===I.tdkey,placement:n.mergedPlacement,containerClass:n.namespace},{default:function(){return F(O,{name:"fade-in-scale-up-transition",appear:n.isMounted,css:n.shouldKeepTooltipTransition(t),onEnter:function(){n.followerEnabledIndexSet.add(t)},onAfterLeave:function(){n.followerEnabledIndexSet.delete(t)}},{default:function(){var t;return o?(null===(t=n.indicatorOnRender)||void 0===t||t.call(n),F("div",{class:["".concat(r,"-slider-handle-indicator"),n.indicatorThemeClass,"".concat(r,"-slider-handle-indicator--").concat(n.mergedPlacement)],style:n.indicatorCssVars},"function"==typeof a?a(e):e)):null}})}})]}})}))),this.marks?F("div",{class:"".concat(r,"-slider-marks")},this.markInfos.map((function(e){return F("div",{key:e.label,class:"".concat(r,"-slider-mark"),style:e.style},e.label)}))):null))}}),fe={xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink",viewBox:"0 0 24 24"},pe=[$("g",{fill:"none",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round"},[$("path",{d:"M12 16h4v4"}),$("path",{d:"M19.458 11.042c.86-2.366.722-4.58-.6-5.9c-2.272-2.274-7.185-1.045-10.973 2.743c-3.788 3.788-5.017 8.701-2.744 10.974c2.227 2.226 6.987 1.093 10.74-2.515"})],-1)],me=S({name:"Rotate360",render:function(e,n){return X(),K("svg",fe,pe)}}),be={xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink",viewBox:"0 0 24 24"},ge=[q('<g fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="10" cy="10" r="7"></circle><path d="M7 10h6"></path><path d="M10 7v6"></path><path d="M21 21l-6-6"></path></g>',1)],ye=S({name:"ZoomIn",render:function(e,n){return X(),K("svg",be,ge)}}),we={xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink",viewBox:"0 0 24 24"},xe=[$("g",{fill:"none",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round"},[$("circle",{cx:"10",cy:"10",r:"7"}),$("path",{d:"M7 10h6"}),$("path",{d:"M21 21l-6-6"})],-1)],ke=S({name:"ZoomOut",render:function(e,n){return X(),K("svg",we,xe)}}),Se=function(e){return J("data-v-33182fb1"),e=e(),Q(),e},ze=[Se((function(){return $("div",{class:"pin north-pin"},null,-1)})),Se((function(){return $("div",{class:"pin east-pin"},null,-1)})),Se((function(){return $("div",{class:"pin south-pin"},null,-1)})),Se((function(){return $("div",{class:"pin west-pin"},null,-1)}))],Ce={class:"compass-orientation-text"},Me=ee(S({__name:"MapCompass",props:{bearing:{},pitch:{},size:{}},emits:["update:bearing"],setup:function(e,n){var r=n.emit,t=e,o=r,a=B((function(){return"transform: rotate(".concat(t.bearing,"deg)")})),i=B((function(){return"transform: rotateX(".concat(Math.min(45,t.pitch?t.pitch:0),"deg); transition: all 0.3s ease;")})),l=B((function(){return t.size?"--compass-size: ".concat(t.size,"px"):""})),s=["N","W","S","E"],d=B((function(){var e=t.bearing>0?t.bearing:360+t.bearing;return s[Math.round(e%360/90)%4]}));return W((function(){var e=document.querySelector(".map-compass");e.onclick=function(){return o("update:bearing",0)},e&&e.addEventListener("mousewheel",(function(e){e.preventDefault();var n=(t.bearing+.3*e.deltaY)%360;o("update:bearing",Math.round(n>=0?n:360+n))}))})),function(e,n){return X(),K("div",{style:G(i.value)},[$("div",{class:"map-compass",style:G(l.value)},[$("div",{class:"compass-panel",style:G(a.value)},ze,4),$("span",Ce,Z(d.value),1)],4)],4)}}}),[["__scopeId","data-v-33182fb1"]]),Be=["id"],Te={class:"nav-toolbox"},je={style:{transform:"rotateX(200deg)"}},De={style:{transform:"rotateY(20deg)"}},Re={class:"compass-container"},_e=S({__name:"MapLibreGLView",props:{plugin:{},centre:{},viewCentre:{},tracking:{type:Boolean},mapType:{},zoom:{}},emits:["ready","update:zoom","update:centre","update:viewCentre","update:mapType"],setup:function(e,n){var r=n.emit,t=M(24),o=s(),a=e,i=ne(new d(a,r,{info:function(e,n){return o.info(e,{duration:n})},warning:function(e,n){return o.warning(e,{duration:n})},error:function(e,n){return o.error(e,{duration:n})}},"maplibregl"));return W((function(){i.mount(),i.trackingMode=!!a.tracking})),function(e,n){return X(),re(oe(se),{class:"container"},{default:te((function(){return[$("div",{id:i.id,class:"maplibregl-map-container"},null,8,Be),$("div",Te,[ae(oe(c),{strong:"",secondary:"",circle:"",type:"primary",onClick:n[0]||(n[0]=function(e){return i.zoom+=1})},{default:te((function(){return[ae(oe(u),{size:oe(t)-2},{default:te((function(){return[ae(oe(ye))]})),_:1},8,["size"])]})),_:1}),ae(oe(c),{strong:"",secondary:"",circle:"",type:"primary",onClick:n[1]||(n[1]=function(e){return i.zoom-=1})},{default:te((function(){return[ae(oe(u),{size:oe(t)-2},{default:te((function(){return[ae(oe(ke))]})),_:1},8,["size"])]})),_:1}),ae(oe(ie),{placement:"left",trigger:"hover",class:"mapview-tooltip-popover-input"},{trigger:te((function(){return[ae(oe(c),{strong:"",secondary:"",circle:"",type:"primary"},{default:te((function(){return[ae(oe(u),{size:oe(t)},{default:te((function(){return[$("div",je,[ae(oe(me),{style:{transform:"rotate(225deg)"}})])]})),_:1},8,["size"])]})),_:1})]})),default:te((function(){return[$("div",null,[ae(oe(ve),{vertical:"",value:i.bearing,"onUpdate:value":n[2]||(n[2]=function(e){return i.bearing=e}),min:0,max:360,style:{height:"16em"},tooltip:!0,placement:"left","format-tooltip":function(e){return"".concat(e,"°")}},null,8,["value","format-tooltip"])])]})),_:1}),ae(oe(ie),{placement:"left",trigger:"hover",class:"mapview-tooltip-popover-input"},{trigger:te((function(){return[ae(oe(c),{strong:"",secondary:"",circle:"",type:"primary"},{default:te((function(){return[ae(oe(u),{size:oe(t)},{default:te((function(){return[$("div",De,[ae(oe(me),{style:{transform:"rotate(-45deg)"}})])]})),_:1},8,["size"])]})),_:1})]})),default:te((function(){return[$("div",null,[ae(oe(ve),{value:i.pitch,"onUpdate:value":n[3]||(n[3]=function(e){return i.pitch=e}),min:0,max:60,vertical:"",style:{height:"8em"},tooltip:!0,placement:"left","format-tooltip":function(e){return"".concat(e,"°")}},null,8,["value","format-tooltip"])])]})),_:1}),ae(oe(h),{value:i.trackingMode,"onUpdate:value":n[4]||(n[4]=function(e){return i.trackingMode=e}),size:"small"},null,8,["value"])]),$("div",Re,[ae(Me,{bearing:i.bearing,"onUpdate:bearing":n[5]||(n[5]=function(e){return i.bearing=e}),size:2*oe(t),pitch:i.pitch},null,8,["bearing","size","pitch"])])]})),_:1})}}}),Ae=ee(_e,[["__scopeId","data-v-47e943bc"]]),Ie=function(){return t((function e(r){n(this,e),o(this,"host",void 0),o(this,"space",void 0),o(this,"behaviour",void 0),o(this,"shown",!1),this.host=r,this.space="terrainLayer"}),[{key:"initialise",value:function(){this.host.map.addSource("terrainSource",{type:"raster-dem",url:"https://api.maptiler.com/tiles/terrain-rgb-v2/tiles.json?key=".concat(le),tileSize:256}),this.host.map.addSource("hillshadeSource",{type:"raster-dem",url:"https://api.maptiler.com/tiles/terrain-rgb-v2/tiles.json?key=".concat(le),tileSize:256}),this.host.map.addLayer({id:"hills",type:"hillshade",source:"hillshadeSource",layout:{visibility:"visible"},paint:{"hillshade-shadow-color":"#473B24"}},this.host.getSymbolLayerID()),this.host.map.getLayer("hills").visibility="none"}},{key:"show",value:function(){this.shown||(this.shown=!0,this.host.map.getLayer("hills").visibility="visible",this.host.map.setTerrain({source:"terrainSource",exaggeration:1}))}},{key:"hide",value:function(){this.shown&&(this.shown=!1,this.host.map.getLayer("hills").visibility="none",this.host.map.setTerrain({source:"terrainSource",exaggeration:0}))}},{key:"mount",value:function(){var e=this;return new Promise((function(n){var r=setInterval((function(){if(e.host.map.isStyleLoaded()){e.initialise();var t=function(){e.host.getPitch()>0?e.show():e.hide()};e.host.addEventHandler("pitch",t,!0),e.host.addEventHandler("load",t,!0),clearInterval(r),n(!0)}}))}))}},{key:"unmount",value:function(){return this.host.map.removeLayer("hills"),this.host.map.removeSource("terrainSource"),this.host.map.removeSource("hillshadeSource"),!0}}])}(),Fe=function(){return t((function e(r){n(this,e),o(this,"host",void 0),o(this,"space",void 0),o(this,"behaviour",void 0),o(this,"shown",!1),this.host=r,this.space="terrainLayer"}),[{key:"initialise",value:function(){this.host.map.addSource("maptiler-tiles-building",{url:"https://api.maptiler.com/tiles/v3/tiles.json?key=".concat(le),type:"vector"}),this.host.map.addLayer({id:"3d-buildings",source:"maptiler-tiles-building","source-layer":"building",type:"fill-extrusion",minzoom:15,paint:{"fill-extrusion-color":["interpolate",["linear"],["get","render_height"],0,"lightgray",200,"royalblue",400,"lightblue"],"fill-extrusion-height":["interpolate",["linear"],["zoom"],15,0,16,["get","render_height"]],"fill-extrusion-base":["case",[">=",["get","zoom"],16],["get","render_min_height"],0]}},this.host.getSymbolLayerID()),this.shown=!0}},{key:"show",value:function(){this.shown||(this.shown=!0,this.host.map.getLayer("3d-buildings").visibility="visible")}},{key:"hide",value:function(){this.shown&&(this.shown=!1,this.host.map.getLayer("3d-buildings").visibility="none")}},{key:"mount",value:function(){var e=this;return console.log("Building layer mounted"),new Promise((function(n){var r=setInterval((function(){if(e.host.map.isStyleLoaded()){e.initialise();var t=function(){e.host.getPitch()>0?e.show():e.hide()};e.host.addEventHandler("pitch",t,!0),setTimeout(t,100),clearInterval(r),n(!0)}}))}))}},{key:"unmount",value:function(){return this.host.map.removeLayer("3d-buildings"),this.host.map.removeSource("maptiler-tiles-building"),!0}}])}(),Le={class:"map-layout"};e("default",S({__name:"MapLibreGLJSPreview",setup:function(e){var n=M([Fe,Ie]),r=M("basic"),t=M(10);return function(e,o){return X(),K("div",Le,[ae(Ae,{"map-type":r.value,"lite-mode":!1,plugin:n.value,zoom:t.value,tracking:!0},null,8,["map-type","plugin","zoom"])])}}}))}}}))}();
