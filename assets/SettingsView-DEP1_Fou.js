import{i as ee,b as x,t as M,d as F,h as R,p as ye,j as T,ab as Re,m as G,P as xe,k as we,c as $,o as m,a as A,x as q,F as L,U as D,C as N,y as z,s as U,v as g,z as J,A as Q,_ as _e}from"./index-xLbIOjt8.js";import{u as Se}from"./vue-i18n-DVukRkeI.js";import{u as $e}from"./index-DFlzuDZe.js";import{i as Be,E as te,C as X,u as oe,G as E,K as Te,m as V,n as I,o as B,l as O,B as H,aJ as ze,q as j,p as Ie,t as Y,v as Ne,a_ as ne,aj as Ue,aO as Ve}from"./light-DYjxfdkN.js";import{N as Ee}from"./Tooltip-B891jx3i.js";import{r as Fe,e as Pe}from"./light-Z_8vsKd9.js";import{u as re}from"./light-GX1bL6Od.js";import{g as Le,a as De,b as Oe}from"./ListItem-CRruVUjr.js";import{b as Z,a as je}from"./Switch-CXhIuJgA.js";import{N as Ae,a as Me}from"./AnchorAdapter-ClmjZ9kr.js";import"./index-BbWr_fEC.js";import"./use-locale-CbJwbhbe.js";import"./Suffix-CHNXJg18.js";import"./vue-router-Cxu2bLBm.js";const Ge={name:String,value:{type:[String,Number,Boolean],default:"on"},checked:{type:Boolean,default:void 0},defaultChecked:Boolean,disabled:{type:Boolean,default:void 0},label:String,size:String,onUpdateChecked:[Function,Array],"onUpdate:checked":[Function,Array],checkedValue:{type:Boolean,default:void 0}},ae=Be("n-radio-group");function He(e){const t=ee(ae,null),a=re(e,{mergedSize(n){const{size:v}=e;if(v!==void 0)return v;if(t){const{mergedSizeRef:{value:k}}=t;if(k!==void 0)return k}return n?n.mergedSize.value:"medium"},mergedDisabled(n){return!!(e.disabled||t!=null&&t.disabledRef.value||n!=null&&n.disabled.value)}}),{mergedSizeRef:i,mergedDisabledRef:c}=a,h=x(null),s=x(null),b=x(e.defaultChecked),l=M(e,"checked"),C=te(l,b),d=X(()=>t?t.valueRef.value===e.value:C.value),w=X(()=>{const{name:n}=e;if(n!==void 0)return n;if(t)return t.nameRef.value}),p=x(!1);function r(){if(t){const{doUpdateValue:n}=t,{value:v}=e;E(n,v)}else{const{onUpdateChecked:n,"onUpdate:checked":v}=e,{nTriggerFormInput:k,nTriggerFormChange:y}=a;n&&E(n,!0),v&&E(v,!0),k(),y(),b.value=!0}}function f(){c.value||d.value||r()}function _(){f(),h.value&&(h.value.checked=d.value)}function o(){p.value=!1}function u(){p.value=!0}return{mergedClsPrefix:t?t.mergedClsPrefixRef:oe(e).mergedClsPrefixRef,inputRef:h,labelRef:s,mergedName:w,mergedDisabled:c,renderSafeChecked:d,focus:p,mergedSize:i,handleRadioInputChange:_,handleRadioInputBlur:o,handleRadioInputFocus:u}}const Ke=F({name:"RadioButton",props:Ge,setup:He,render(){const{mergedClsPrefix:e}=this;return R("label",{class:[`${e}-radio-button`,this.mergedDisabled&&`${e}-radio-button--disabled`,this.renderSafeChecked&&`${e}-radio-button--checked`,this.focus&&[`${e}-radio-button--focus`]]},R("input",{ref:"inputRef",type:"radio",class:`${e}-radio-input`,value:this.value,name:this.mergedName,checked:this.renderSafeChecked,disabled:this.mergedDisabled,onChange:this.handleRadioInputChange,onFocus:this.handleRadioInputFocus,onBlur:this.handleRadioInputBlur}),R("div",{class:`${e}-radio-button__state-border`}),Te(this.$slots.default,t=>!t&&!this.label?null:R("div",{ref:"labelRef",class:`${e}-radio__label`},t||this.label)))}}),We=V("radio-group",`
 display: inline-block;
 font-size: var(--n-font-size);
`,[I("splitor",`
 display: inline-block;
 vertical-align: bottom;
 width: 1px;
 transition:
 background-color .3s var(--n-bezier),
 opacity .3s var(--n-bezier);
 background: var(--n-button-border-color);
 `,[B("checked",{backgroundColor:"var(--n-button-border-color-active)"}),B("disabled",{opacity:"var(--n-opacity-disabled)"})]),B("button-group",`
 white-space: nowrap;
 height: var(--n-height);
 line-height: var(--n-height);
 `,[V("radio-button",{height:"var(--n-height)",lineHeight:"var(--n-height)"}),I("splitor",{height:"var(--n-height)"})]),V("radio-button",`
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
 `,[V("radio-input",`
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
 `),I("state-border",`
 z-index: 1;
 pointer-events: none;
 position: absolute;
 box-shadow: var(--n-button-box-shadow);
 transition: box-shadow .3s var(--n-bezier);
 left: -1px;
 bottom: -1px;
 right: -1px;
 top: -1px;
 `),O("&:first-child",`
 border-top-left-radius: var(--n-button-border-radius);
 border-bottom-left-radius: var(--n-button-border-radius);
 border-left: 1px solid var(--n-button-border-color);
 `,[I("state-border",`
 border-top-left-radius: var(--n-button-border-radius);
 border-bottom-left-radius: var(--n-button-border-radius);
 `)]),O("&:last-child",`
 border-top-right-radius: var(--n-button-border-radius);
 border-bottom-right-radius: var(--n-button-border-radius);
 border-right: 1px solid var(--n-button-border-color);
 `,[I("state-border",`
 border-top-right-radius: var(--n-button-border-radius);
 border-bottom-right-radius: var(--n-button-border-radius);
 `)]),H("disabled",`
 cursor: pointer;
 `,[O("&:hover",[I("state-border",`
 transition: box-shadow .3s var(--n-bezier);
 box-shadow: var(--n-button-box-shadow-hover);
 `),H("checked",{color:"var(--n-button-text-color-hover)"})]),B("focus",[O("&:not(:active)",[I("state-border",{boxShadow:"var(--n-button-box-shadow-focus)"})])])]),B("checked",`
 background: var(--n-button-color-active);
 color: var(--n-button-text-color-active);
 border-color: var(--n-button-border-color-active);
 `),B("disabled",`
 cursor: not-allowed;
 opacity: var(--n-opacity-disabled);
 `)])]);function qe(e,t,a){var i;const c=[];let h=!1;for(let s=0;s<e.length;++s){const b=e[s],l=(i=b.type)===null||i===void 0?void 0:i.name;l==="RadioButton"&&(h=!0);const C=b.props;if(l!=="RadioButton"){c.push(b);continue}if(s===0)c.push(b);else{const d=c[c.length-1].props,w=t===d.value,p=d.disabled,r=t===C.value,f=C.disabled,_=(w?2:0)+(p?0:1),o=(r?2:0)+(f?0:1),u={[`${a}-radio-group__splitor--disabled`]:p,[`${a}-radio-group__splitor--checked`]:w},n={[`${a}-radio-group__splitor--disabled`]:f,[`${a}-radio-group__splitor--checked`]:r},v=_<o?n:u;c.push(R("div",{class:[`${a}-radio-group__splitor`,v]}),b)}}return{children:c,isButtonGroup:h}}const Je=Object.assign(Object.assign({},j.props),{name:String,value:[String,Number,Boolean],defaultValue:{type:[String,Number,Boolean],default:null},size:String,disabled:{type:Boolean,default:void 0},"onUpdate:value":[Function,Array],onUpdateValue:[Function,Array]}),Qe=F({name:"RadioGroup",props:Je,setup(e){const t=x(null),{mergedSizeRef:a,mergedDisabledRef:i,nTriggerFormChange:c,nTriggerFormInput:h,nTriggerFormBlur:s,nTriggerFormFocus:b}=re(e),{mergedClsPrefixRef:l,inlineThemeDisabled:C,mergedRtlRef:d}=oe(e),w=j("Radio","-radio-group",We,Fe,e,l),p=x(e.defaultValue),r=M(e,"value"),f=te(r,p);function _(y){const{onUpdateValue:S,"onUpdate:value":P}=e;S&&E(S,y),P&&E(P,y),p.value=y,c(),h()}function o(y){const{value:S}=t;S&&(S.contains(y.relatedTarget)||b())}function u(y){const{value:S}=t;S&&(S.contains(y.relatedTarget)||s())}ye(ae,{mergedClsPrefixRef:l,nameRef:M(e,"name"),valueRef:f,disabledRef:i,mergedSizeRef:a,doUpdateValue:_});const n=Ie("Radio",d,l),v=T(()=>{const{value:y}=a,{common:{cubicBezierEaseInOut:S},self:{buttonBorderColor:P,buttonBorderColorActive:le,buttonBorderRadius:de,buttonBoxShadow:ue,buttonBoxShadowFocus:ce,buttonBoxShadowHover:pe,buttonColor:fe,buttonColorActive:be,buttonTextColor:ge,buttonTextColorActive:ve,buttonTextColorHover:he,opacityDisabled:me,[Y("buttonHeight",y)]:ke,[Y("fontSize",y)]:Ce}}=w.value;return{"--n-font-size":Ce,"--n-bezier":S,"--n-button-border-color":P,"--n-button-border-color-active":le,"--n-button-border-radius":de,"--n-button-box-shadow":ue,"--n-button-box-shadow-focus":ce,"--n-button-box-shadow-hover":pe,"--n-button-color":fe,"--n-button-color-active":be,"--n-button-text-color":ge,"--n-button-text-color-hover":he,"--n-button-text-color-active":ve,"--n-height":ke,"--n-opacity-disabled":me}}),k=C?Ne("radio-group",T(()=>a.value[0]),v,e):void 0;return{selfElRef:t,rtlEnabled:n,mergedClsPrefix:l,mergedValue:f,handleFocusout:u,handleFocusin:o,cssVars:C?void 0:v,themeClass:k==null?void 0:k.themeClass,onRender:k==null?void 0:k.onRender}},render(){var e;const{mergedValue:t,mergedClsPrefix:a,handleFocusin:i,handleFocusout:c}=this,{children:h,isButtonGroup:s}=qe(ze(Le(this)),t,a);return(e=this.onRender)===null||e===void 0||e.call(this),R("div",{onFocusin:i,onFocusout:c,ref:"selfElRef",class:[`${a}-radio-group`,this.rtlEnabled&&`${a}-radio-group--rtl`,this.themeClass,s&&`${a}-radio-group--button-group`],style:this.cssVars},h)}}),ie=V("ellipsis",{overflow:"hidden"},[H("line-clamp",`
 white-space: nowrap;
 display: inline-block;
 vertical-align: bottom;
 max-width: 100%;
 `),B("line-clamp",`
 display: -webkit-inline-box;
 -webkit-box-orient: vertical;
 `),B("cursor-pointer",`
 cursor: pointer;
 `)]);function K(e){return`${e}-ellipsis--line-clamp`}function W(e,t){return`${e}-ellipsis--cursor-${t}`}const se=Object.assign(Object.assign({},j.props),{expandTrigger:String,lineClamp:[Number,String],tooltip:{type:[Boolean,Object],default:!0}}),Xe=F({name:"Ellipsis",inheritAttrs:!1,props:se,slots:Object,setup(e,{slots:t,attrs:a}){const i=ne(),c=j("Ellipsis","-ellipsis",ie,Pe,e,i),h=x(null),s=x(null),b=x(null),l=x(!1),C=T(()=>{const{lineClamp:o}=e,{value:u}=l;return o!==void 0?{textOverflow:"","-webkit-line-clamp":u?"":o}:{textOverflow:u?"":"ellipsis","-webkit-line-clamp":""}});function d(){let o=!1;const{value:u}=l;if(u)return!0;const{value:n}=h;if(n){const{lineClamp:v}=e;if(r(n),v!==void 0)o=n.scrollHeight<=n.offsetHeight;else{const{value:k}=s;k&&(o=k.getBoundingClientRect().width<=n.getBoundingClientRect().width)}f(n,o)}return o}const w=T(()=>e.expandTrigger==="click"?()=>{var o;const{value:u}=l;u&&((o=b.value)===null||o===void 0||o.setShow(!1)),l.value=!u}:void 0);Re(()=>{var o;e.tooltip&&((o=b.value)===null||o===void 0||o.setShow(!1))});const p=()=>R("span",Object.assign({},G(a,{class:[`${i.value}-ellipsis`,e.lineClamp!==void 0?K(i.value):void 0,e.expandTrigger==="click"?W(i.value,"pointer"):void 0],style:C.value}),{ref:"triggerRef",onClick:w.value,onMouseenter:e.expandTrigger==="click"?d:void 0}),e.lineClamp?t:R("span",{ref:"triggerInnerRef"},t));function r(o){if(!o)return;const u=C.value,n=K(i.value);e.lineClamp!==void 0?_(o,n,"add"):_(o,n,"remove");for(const v in u)o.style[v]!==u[v]&&(o.style[v]=u[v])}function f(o,u){const n=W(i.value,"pointer");e.expandTrigger==="click"&&!u?_(o,n,"add"):_(o,n,"remove")}function _(o,u,n){n==="add"?o.classList.contains(u)||o.classList.add(u):o.classList.contains(u)&&o.classList.remove(u)}return{mergedTheme:c,triggerRef:h,triggerInnerRef:s,tooltipRef:b,handleClick:w,renderTrigger:p,getTooltipDisabled:d}},render(){var e;const{tooltip:t,renderTrigger:a,$slots:i}=this;if(t){const{mergedTheme:c}=this;return R(Ee,Object.assign({ref:"tooltipRef",placement:"top"},t,{getDisabled:this.getTooltipDisabled,theme:c.peers.Tooltip,themeOverrides:c.peerOverrides.Tooltip}),{trigger:a,default:(e=i.tooltip)!==null&&e!==void 0?e:i.default})}else return a()}}),Ye=F({name:"PerformantEllipsis",props:se,inheritAttrs:!1,setup(e,{attrs:t,slots:a}){const i=x(!1),c=ne();return Ue("-ellipsis",ie,c),{mouseEntered:i,renderTrigger:()=>{const{lineClamp:s}=e,b=c.value;return R("span",Object.assign({},G(t,{class:[`${b}-ellipsis`,s!==void 0?K(b):void 0,e.expandTrigger==="click"?W(b,"pointer"):void 0],style:s===void 0?{textOverflow:"ellipsis"}:{"-webkit-line-clamp":s}}),{onMouseenter:()=>{i.value=!0}}),s?a:R("span",null,a))}}},render(){return this.mouseEntered?R(Xe,G({},this.$attrs,this.$props),this.$slots):this.renderTrigger()}}),Ze={class:"settings-view"},et={class:"settings-layout"},tt={class:"settings-content"},ot={style:{display:"flex","flex-direction":"row","justify-content":"space-between","align-items":"center","min-width":"0"}},nt={key:0},rt={key:1},at={key:2},it={key:0,class:"settings-nav"},st=F({__name:"SettingsView",setup(e){const t=new xe,a=T(()=>t.isMobile),{width:i}=$e(),c=T(()=>i.value<800),h=T(()=>i.value<680),{t:s,availableLocales:b}=Se(),l=ee("settings"),C=T(()=>[{title:"appearance",items:[{title:"theme",type:"radio",items:[{value:"light",label:s("settings.appearance.theme.options.light")},{value:"dark",label:s("settings.appearance.theme.options.dark")},{value:"system",label:s("settings.appearance.theme.options.system")}]}]},{title:"geolocation",items:[{title:"watchCompatibilityMode",type:"checkbox"},{title:"geolocationCorrection",type:"checkbox"}]},{title:"language",items:[{title:"interfaceLanguage",type:"select",items:b.map(d=>({value:d,label:s(`settings.language.interfaceLanguage.options.${d}`)}))},{title:"mapLanguage",type:"select",items:b.map(d=>({value:d,label:s(`settings.language.mapLanguage.options.${d}`)})).concat([{value:"interface",label:s("settings.language.mapLanguage.options.interface")}])}]}]);return we(()=>{l.init()}),(d,w)=>(m(),$("div",Ze,[A("div",et,[A("div",tt,[(m(!0),$(L,null,D(C.value,p=>(m(),N(g(Ve),{id:"appearance",key:p.title,title:d.$t(`settings.${p.title}.title`)},{default:z(()=>[U(g(De),null,{default:z(()=>[(m(!0),$(L,null,D(p.items,r=>(m(),N(g(Oe),{key:r.title},{default:z(()=>[A("div",ot,[U(g(Ye),{style:{"white-space":"nowrap"},tooltip:{trigger:a.value?"click":"hover"}},{tooltip:z(()=>[J(Q(r.items?d.$t(`settings.${p.title}.${r.title}.title`):d.$t(`settings.${p.title}.${r.title}`)),1)]),default:z(()=>[J(Q(r.items?d.$t(`settings.${p.title}.${r.title}.title`):d.$t(`settings.${p.title}.${r.title}`))+" ",1)]),_:2},1032,["tooltip"]),r.type==="radio"?(m(),$("div",nt,[c.value?(m(),N(g(Z),{key:1,value:g(l).settings[r.title],"onUpdate:value":f=>g(l).settings[r.title]=f,options:r.items,"consistent-menu-width":!1},null,8,["value","onUpdate:value","options"])):(m(),N(g(Qe),{key:0,value:g(l).settings[r.title],"onUpdate:value":f=>g(l).settings[r.title]=f},{default:z(()=>[(m(!0),$(L,null,D(r.items,f=>(m(),N(g(Ke),{key:f.value,value:f.value,label:f.label,checked:g(l).settings[r.title]===f.value},null,8,["value","label","checked"]))),128))]),_:2},1032,["value","onUpdate:value"]))])):r.type==="select"?(m(),$("div",rt,[U(g(Z),{value:g(l).settings[r.title],"onUpdate:value":f=>g(l).settings[r.title]=f,options:r.items,"consistent-menu-width":!1},null,8,["value","onUpdate:value","options"])])):r.type==="checkbox"?(m(),$("div",at,[U(g(je),{value:g(l).settings[r.title],"onUpdate:value":f=>g(l).settings[r.title]=f},null,8,["value","onUpdate:value"])])):q("",!0)])]),_:2},1024))),128))]),_:2},1024)]),_:2},1032,["title"]))),128))]),h.value?q("",!0):(m(),$("div",it,[U(g(Me),{"show-rail":!0,style:{width:"128px"}},{default:z(()=>[(m(!0),$(L,null,D(C.value,p=>(m(),N(g(Ae),{key:p.title,title:d.$t(`settings.${p.title}.title`),href:`#${p.title.toLowerCase()}`},null,8,["title","href"]))),128))]),_:1})]))])]))}}),Rt=_e(st,[["__scopeId","data-v-eb834239"]]);export{Rt as default};
