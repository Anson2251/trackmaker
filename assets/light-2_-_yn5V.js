import{d as h,h as m,b as v,g as x}from"./index-Dif3EidE.js";import{v as i,c as u,f as $,p as C,g,a as O,M as j,A as T,C as f,ab as w}from"./Card-BAEXTjt4.js";const _=h({name:"ChevronRight",render(){return m("svg",{viewBox:"0 0 16 16",fill:"none",xmlns:"http://www.w3.org/2000/svg"},m("path",{d:"M5.64645 3.14645C5.45118 3.34171 5.45118 3.65829 5.64645 3.85355L9.79289 8L5.64645 12.1464C5.45118 12.3417 5.45118 12.6583 5.64645 12.8536C5.84171 13.0488 6.15829 13.0488 6.35355 12.8536L10.8536 8.35355C11.0488 8.15829 11.0488 7.84171 10.8536 7.64645L6.35355 3.14645C6.15829 2.95118 5.84171 2.95118 5.64645 3.14645Z",fill:"currentColor"}))}}),{cubicBezierEaseInOut:s,cubicBezierEaseOut:B,cubicBezierEaseIn:E}=u;function z({overflow:t="hidden",duration:e=".3s",originalTransition:n="",leavingDelay:o="0s",foldPadding:a=!1,enterToProps:r=void 0,leaveToProps:b=void 0,reverse:d=!1}={}){const p=d?"leave":"enter",c=d?"enter":"leave";return[i(`&.fade-in-height-expand-transition-${c}-from,
 &.fade-in-height-expand-transition-${p}-to`,Object.assign(Object.assign({},r),{opacity:1})),i(`&.fade-in-height-expand-transition-${c}-to,
 &.fade-in-height-expand-transition-${p}-from`,Object.assign(Object.assign({},b),{opacity:0,marginTop:"0 !important",marginBottom:"0 !important",paddingTop:a?"0 !important":void 0,paddingBottom:a?"0 !important":void 0})),i(`&.fade-in-height-expand-transition-${c}-active`,`
 overflow: ${t};
 transition:
 max-height ${e} ${s} ${o},
 opacity ${e} ${B} ${o},
 margin-top ${e} ${s} ${o},
 margin-bottom ${e} ${s} ${o},
 padding-top ${e} ${s} ${o},
 padding-bottom ${e} ${s} ${o}
 ${n?`,${n}`:""}
 `),i(`&.fade-in-height-expand-transition-${p}-active`,`
 overflow: ${t};
 transition:
 max-height ${e} ${s},
 opacity ${e} ${E},
 margin-top ${e} ${s},
 margin-bottom ${e} ${s},
 padding-top ${e} ${s},
 padding-bottom ${e} ${s}
 ${n?`,${n}`:""}
 `)]}const P={padding:"8px 14px"};function R(t){const{borderRadius:e,boxShadow2:n,baseColor:o}=t;return Object.assign(Object.assign({},P),{borderRadius:e,boxShadow:n,color:O(o,"rgba(0, 0, 0, .85)"),textColor:o})}const l=$({name:"Tooltip",common:g,peers:{Popover:C},self:R}),L=Object.assign(Object.assign({},w),f.props),N=h({name:"Tooltip",props:L,slots:Object,__popover__:!0,setup(t){const{mergedClsPrefixRef:e}=T(t),n=f("Tooltip","-tooltip",void 0,l,t,e),o=v(null);return Object.assign(Object.assign({},{syncPosition(){o.value.syncPosition()},setShow(r){o.value.setShow(r)}}),{popoverRef:o,mergedTheme:n,popoverThemeOverrides:x(()=>n.value.self)})},render(){const{mergedTheme:t,internalExtraClass:e}=this;return m(j,Object.assign(Object.assign({},this.$props),{theme:t.peers.Popover,themeOverrides:t.peerOverrides.Popover,builtinThemeOverrides:this.popoverThemeOverrides,internalExtraClass:e.concat("tooltip"),ref:"popoverRef"}),this.$slots)}});function I(){return{toolbarIconColor:"rgba(255, 255, 255, .9)",toolbarColor:"rgba(0, 0, 0, .35)",toolbarBoxShadow:"none",toolbarBorderRadius:"24px"}}const V=$({name:"Image",common:g,peers:{Tooltip:l},self:I});export{_ as C,N,P as c,z as f,V as i,l as t};
