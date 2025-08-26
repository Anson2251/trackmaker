import{i as Q,b as S,t as G,d as j,h as B,p as he,g as N,k as ve,c as k,o as c,a as V,F as T,V as E,D as C,z as F,v as P,x as l,y as M,B as pe,_ as ge}from"./index-BFmvDczB.js";import{u as fe}from"./vue-i18n-B-1pvrGH.js";import{u as me}from"./index-DPRPGeau.js";import{o as ye,I as q,u as H,A as J,K as U,Q as ke,x as L,y as x,z as w,v as A,G as K,aD as Re,C as X,B as Ce,D as O,E as xe,$ as _e}from"./Card-tYBwlsoQ.js";import{u as Y}from"./create-BfhT0PJ0.js";import{g as we,N as Se,a as Be}from"./ListItem-Dw0cp0sp.js";import{r as ze}from"./light-JIsAjDAR.js";import{b as W,a as $e}from"./Switch-D8RzuVV2.js";import{N as Ie,a as Ve}from"./AnchorAdapter-CcElew55.js";import"./index-Dez5Nzsd.js";import"./light-79bMPbus.js";import"./Suffix-Fag0l6GG.js";import"./use-locale-BYYoGdQM.js";import"./toNumber-Bx-XjP0R.js";import"./light-BAh68qoW.js";import"./vue-router-DsNp0Iw8.js";const Fe={name:String,value:{type:[String,Number,Boolean],default:"on"},checked:{type:Boolean,default:void 0},defaultChecked:Boolean,disabled:{type:Boolean,default:void 0},label:String,size:String,onUpdateChecked:[Function,Array],"onUpdate:checked":[Function,Array],checkedValue:{type:Boolean,default:void 0}},Z=ye("n-radio-group");function Ne(e){const t=Q(Z,null),s=Y(e,{mergedSize(u){const{size:v}=e;if(v!==void 0)return v;if(t){const{mergedSizeRef:{value:f}}=t;if(f!==void 0)return f}return u?u.mergedSize.value:"medium"},mergedDisabled(u){return!!(e.disabled||t!=null&&t.disabledRef.value||u!=null&&u.disabled.value)}}),{mergedSizeRef:g,mergedDisabledRef:r}=s,b=S(null),a=S(null),h=S(e.defaultChecked),i=G(e,"checked"),y=q(i,h),d=H(()=>t?t.valueRef.value===e.value:y.value),o=H(()=>{const{name:u}=e;if(u!==void 0)return u;if(t)return t.nameRef.value}),n=S(!1);function _(){if(t){const{doUpdateValue:u}=t,{value:v}=e;U(u,v)}else{const{onUpdateChecked:u,"onUpdate:checked":v}=e,{nTriggerFormInput:f,nTriggerFormChange:p}=s;u&&U(u,!0),v&&U(v,!0),f(),p(),h.value=!0}}function R(){r.value||d.value||_()}function z(){R(),b.value&&(b.value.checked=d.value)}function $(){n.value=!1}function I(){n.value=!0}return{mergedClsPrefix:t?t.mergedClsPrefixRef:J(e).mergedClsPrefixRef,inputRef:b,labelRef:a,mergedName:o,mergedDisabled:r,renderSafeChecked:d,focus:n,mergedSize:g,handleRadioInputChange:z,handleRadioInputBlur:$,handleRadioInputFocus:I}}const Ue=j({name:"RadioButton",props:Fe,setup:Ne,render(){const{mergedClsPrefix:e}=this;return B("label",{class:[`${e}-radio-button`,this.mergedDisabled&&`${e}-radio-button--disabled`,this.renderSafeChecked&&`${e}-radio-button--checked`,this.focus&&[`${e}-radio-button--focus`]]},B("input",{ref:"inputRef",type:"radio",class:`${e}-radio-input`,value:this.value,name:this.mergedName,checked:this.renderSafeChecked,disabled:this.mergedDisabled,onChange:this.handleRadioInputChange,onFocus:this.handleRadioInputFocus,onBlur:this.handleRadioInputBlur}),B("div",{class:`${e}-radio-button__state-border`}),ke(this.$slots.default,t=>!t&&!this.label?null:B("div",{ref:"labelRef",class:`${e}-radio__label`},t||this.label)))}}),De=L("radio-group",`
 display: inline-block;
 font-size: var(--n-font-size);
`,[x("splitor",`
 display: inline-block;
 vertical-align: bottom;
 width: 1px;
 transition:
 background-color .3s var(--n-bezier),
 opacity .3s var(--n-bezier);
 background: var(--n-button-border-color);
 `,[w("checked",{backgroundColor:"var(--n-button-border-color-active)"}),w("disabled",{opacity:"var(--n-opacity-disabled)"})]),w("button-group",`
 white-space: nowrap;
 height: var(--n-height);
 line-height: var(--n-height);
 `,[L("radio-button",{height:"var(--n-height)",lineHeight:"var(--n-height)"}),x("splitor",{height:"var(--n-height)"})]),L("radio-button",`
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
 `,[L("radio-input",`
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
 `),x("state-border",`
 z-index: 1;
 pointer-events: none;
 position: absolute;
 box-shadow: var(--n-button-box-shadow);
 transition: box-shadow .3s var(--n-bezier);
 left: -1px;
 bottom: -1px;
 right: -1px;
 top: -1px;
 `),A("&:first-child",`
 border-top-left-radius: var(--n-button-border-radius);
 border-bottom-left-radius: var(--n-button-border-radius);
 border-left: 1px solid var(--n-button-border-color);
 `,[x("state-border",`
 border-top-left-radius: var(--n-button-border-radius);
 border-bottom-left-radius: var(--n-button-border-radius);
 `)]),A("&:last-child",`
 border-top-right-radius: var(--n-button-border-radius);
 border-bottom-right-radius: var(--n-button-border-radius);
 border-right: 1px solid var(--n-button-border-color);
 `,[x("state-border",`
 border-top-right-radius: var(--n-button-border-radius);
 border-bottom-right-radius: var(--n-button-border-radius);
 `)]),K("disabled",`
 cursor: pointer;
 `,[A("&:hover",[x("state-border",`
 transition: box-shadow .3s var(--n-bezier);
 box-shadow: var(--n-button-box-shadow-hover);
 `),K("checked",{color:"var(--n-button-text-color-hover)"})]),w("focus",[A("&:not(:active)",[x("state-border",{boxShadow:"var(--n-button-box-shadow-focus)"})])])]),w("checked",`
 background: var(--n-button-color-active);
 color: var(--n-button-text-color-active);
 border-color: var(--n-button-border-color-active);
 `),w("disabled",`
 cursor: not-allowed;
 opacity: var(--n-opacity-disabled);
 `)])]);function Te(e,t,s){var g;const r=[];let b=!1;for(let a=0;a<e.length;++a){const h=e[a],i=(g=h.type)===null||g===void 0?void 0:g.name;i==="RadioButton"&&(b=!0);const y=h.props;if(i!=="RadioButton"){r.push(h);continue}if(a===0)r.push(h);else{const d=r[r.length-1].props,o=t===d.value,n=d.disabled,_=t===y.value,R=y.disabled,z=(o?2:0)+(n?0:1),$=(_?2:0)+(R?0:1),I={[`${s}-radio-group__splitor--disabled`]:n,[`${s}-radio-group__splitor--checked`]:o},u={[`${s}-radio-group__splitor--disabled`]:R,[`${s}-radio-group__splitor--checked`]:_},v=z<$?u:I;r.push(B("div",{class:[`${s}-radio-group__splitor`,v]}),h)}}return{children:r,isButtonGroup:b}}const Ee=Object.assign(Object.assign({},X.props),{name:String,value:[String,Number,Boolean],defaultValue:{type:[String,Number,Boolean],default:null},size:String,disabled:{type:Boolean,default:void 0},"onUpdate:value":[Function,Array],onUpdateValue:[Function,Array]}),Le=j({name:"RadioGroup",props:Ee,setup(e){const t=S(null),{mergedSizeRef:s,mergedDisabledRef:g,nTriggerFormChange:r,nTriggerFormInput:b,nTriggerFormBlur:a,nTriggerFormFocus:h}=Y(e),{mergedClsPrefixRef:i,inlineThemeDisabled:y,mergedRtlRef:d}=J(e),o=X("Radio","-radio-group",De,ze,e,i),n=S(e.defaultValue),_=G(e,"value"),R=q(_,n);function z(p){const{onUpdateValue:m,"onUpdate:value":D}=e;m&&U(m,p),D&&U(D,p),n.value=p,r(),b()}function $(p){const{value:m}=t;m&&(m.contains(p.relatedTarget)||h())}function I(p){const{value:m}=t;m&&(m.contains(p.relatedTarget)||a())}he(Z,{mergedClsPrefixRef:i,nameRef:G(e,"name"),valueRef:R,disabledRef:g,mergedSizeRef:s,doUpdateValue:z});const u=Ce("Radio",d,i),v=N(()=>{const{value:p}=s,{common:{cubicBezierEaseInOut:m},self:{buttonBorderColor:D,buttonBorderColorActive:ee,buttonBorderRadius:te,buttonBoxShadow:oe,buttonBoxShadowFocus:ne,buttonBoxShadowHover:ae,buttonColor:re,buttonColorActive:ie,buttonTextColor:se,buttonTextColorActive:le,buttonTextColorHover:de,opacityDisabled:ue,[O("buttonHeight",p)]:ce,[O("fontSize",p)]:be}}=o.value;return{"--n-font-size":be,"--n-bezier":m,"--n-button-border-color":D,"--n-button-border-color-active":ee,"--n-button-border-radius":te,"--n-button-box-shadow":oe,"--n-button-box-shadow-focus":ne,"--n-button-box-shadow-hover":ae,"--n-button-color":re,"--n-button-color-active":ie,"--n-button-text-color":se,"--n-button-text-color-hover":de,"--n-button-text-color-active":le,"--n-height":ce,"--n-opacity-disabled":ue}}),f=y?xe("radio-group",N(()=>s.value[0]),v,e):void 0;return{selfElRef:t,rtlEnabled:u,mergedClsPrefix:i,mergedValue:R,handleFocusout:I,handleFocusin:$,cssVars:y?void 0:v,themeClass:f==null?void 0:f.themeClass,onRender:f==null?void 0:f.onRender}},render(){var e;const{mergedValue:t,mergedClsPrefix:s,handleFocusin:g,handleFocusout:r}=this,{children:b,isButtonGroup:a}=Te(Re(we(this)),t,s);return(e=this.onRender)===null||e===void 0||e.call(this),B("div",{onFocusin:g,onFocusout:r,ref:"selfElRef",class:[`${s}-radio-group`,this.rtlEnabled&&`${s}-radio-group--rtl`,this.themeClass,a&&`${s}-radio-group--button-group`],style:this.cssVars},b)}}),Ae={class:"settings-view"},Pe={class:"settings-layout"},Ge={class:"settings-content"},je={style:{display:"flex","flex-direction":"row","justify-content":"space-between","align-items":"center"}},Me={style:{"white-space":"nowrap"}},He={key:0},Ke={key:1},Oe={key:2},We={class:"settings-nav"},Qe=j({__name:"SettingsView",setup(e){const{width:t}=me(),s=N(()=>t.value<640),g=N(()=>t.value<480),{t:r,availableLocales:b}=fe(),a=Q("settings"),h=N(()=>[{title:"appearance",items:[{title:"theme",type:"radio",items:[{value:"light",label:r("settings.appearance.theme.options.light")},{value:"dark",label:r("settings.appearance.theme.options.dark")},{value:"system",label:r("settings.appearance.theme.options.system")}]}]},{title:"geolocation",items:[{title:"watchCompatibilityMode",type:"checkbox"},{title:"geolocationCorrection",type:"checkbox"}]},{title:"language",items:[{title:"interfaceLanguage",type:"select",items:b.map(i=>({value:i,label:r(`settings.language.interfaceLanguage.options.${i}`)}))},{title:"mapLanguage",type:"select",items:b.map(i=>({value:i,label:r(`settings.language.mapLanguage.options.${i}`)})).concat([{value:"interface",label:r("settings.language.mapLanguage.options.interface")}])}]}]);return ve(()=>{a.init()}),(i,y)=>(c(),k("div",Ae,[V("div",Pe,[V("div",Ge,[(c(!0),k(T,null,E(h.value,d=>(c(),C(l(_e),{id:"appearance",key:d.title,title:i.$t(`settings.${d.title}.title`)},{default:F(()=>[P(l(Se),null,{default:F(()=>[(c(!0),k(T,null,E(d.items,o=>(c(),C(l(Be),{key:o.title},{default:F(()=>[V("div",je,[V("div",Me,pe(o.items?i.$t(`settings.${d.title}.${o.title}.title`):i.$t(`settings.${d.title}.${o.title}`)),1),o.type==="radio"?(c(),k("div",He,[s.value?(c(),C(l(W),{key:1,value:l(a).settings[o.title],"onUpdate:value":n=>l(a).settings[o.title]=n,options:o.items,"consistent-menu-width":!1},null,8,["value","onUpdate:value","options"])):(c(),C(l(Le),{key:0,value:l(a).settings[o.title],"onUpdate:value":n=>l(a).settings[o.title]=n},{default:F(()=>[(c(!0),k(T,null,E(o.items,n=>(c(),C(l(Ue),{key:n.value,value:n.value,label:n.label,checked:l(a).settings[o.title]===n.value},null,8,["value","label","checked"]))),128))]),_:2},1032,["value","onUpdate:value"]))])):o.type==="select"?(c(),k("div",Ke,[P(l(W),{value:l(a).settings[o.title],"onUpdate:value":n=>l(a).settings[o.title]=n,options:o.items,"consistent-menu-width":!1},null,8,["value","onUpdate:value","options"])])):o.type==="checkbox"?(c(),k("div",Oe,[P(l($e),{value:l(a).settings[o.title],"onUpdate:value":n=>l(a).settings[o.title]=n},null,8,["value","onUpdate:value"])])):M("",!0)])]),_:2},1024))),128))]),_:2},1024)]),_:2},1032,["title"]))),128))]),V("div",We,[g.value?M("",!0):(c(),C(l(Ve),{key:0,"show-rail":!0,style:{width:"128px"}},{default:F(()=>[(c(!0),k(T,null,E(h.value,d=>(c(),C(l(Ie),{key:d.title,title:i.$t(`settings.${d.title}.title`),href:`#${d.title.toLowerCase()}`},null,8,["title","href"]))),128))]),_:1}))])])]))}}),ct=ge(Qe,[["__scopeId","data-v-7a90f9d2"]]);export{ct as default};
