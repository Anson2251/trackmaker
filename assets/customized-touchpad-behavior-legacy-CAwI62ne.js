!function(){function e(i){return e="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},e(i)}function i(e,i){if(!(e instanceof i))throw new TypeError("Cannot call a class as a function")}function t(e,i){for(var t=0;t<i.length;t++){var r=i[t];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,c(r.key),r)}}function r(e,i,r){return i&&t(e.prototype,i),r&&t(e,r),Object.defineProperty(e,"prototype",{writable:!1}),e}function o(){"use strict";/*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */o=function(){return t};var i,t={},r=Object.prototype,n=r.hasOwnProperty,a=Object.defineProperty||function(e,i,t){e[i]=t.value},s="function"==typeof Symbol?Symbol:{},c=s.iterator||"@@iterator",u=s.asyncIterator||"@@asyncIterator",l=s.toStringTag||"@@toStringTag";function d(e,i,t){return Object.defineProperty(e,i,{value:t,enumerable:!0,configurable:!0,writable:!0}),e[i]}try{d({},"")}catch(i){d=function(e,i,t){return e[i]=t}}function p(e,i,t,r){var o=i&&i.prototype instanceof g?i:g,n=Object.create(o.prototype),s=new L(r||[]);return a(n,"_invoke",{value:z(e,t,s)}),n}function b(e,i,t){try{return{type:"normal",arg:e.call(i,t)}}catch(e){return{type:"throw",arg:e}}}t.wrap=p;var h="suspendedStart",w="suspendedYield",f="executing",m="completed",v={};function g(){}function y(){}function x(){}var k={};d(k,c,(function(){return this}));var T=Object.getPrototypeOf,P=T&&T(T(C([])));P&&P!==r&&n.call(P,c)&&(k=P);var _=x.prototype=g.prototype=Object.create(k);function E(e){["next","throw","return"].forEach((function(i){d(e,i,(function(e){return this._invoke(i,e)}))}))}function O(i,t){function r(o,a,s,c){var u=b(i[o],i,a);if("throw"!==u.type){var l=u.arg,d=l.value;return d&&"object"==e(d)&&n.call(d,"__await")?t.resolve(d.__await).then((function(e){r("next",e,s,c)}),(function(e){r("throw",e,s,c)})):t.resolve(d).then((function(e){l.value=e,s(l)}),(function(e){return r("throw",e,s,c)}))}c(u.arg)}var o;a(this,"_invoke",{value:function(e,i){function n(){return new t((function(t,o){r(e,i,t,o)}))}return o=o?o.then(n,n):n()}})}function z(e,t,r){var o=h;return function(n,a){if(o===f)throw Error("Generator is already running");if(o===m){if("throw"===n)throw a;return{value:i,done:!0}}for(r.method=n,r.arg=a;;){var s=r.delegate;if(s){var c=M(s,r);if(c){if(c===v)continue;return c}}if("next"===r.method)r.sent=r._sent=r.arg;else if("throw"===r.method){if(o===h)throw o=m,r.arg;r.dispatchException(r.arg)}else"return"===r.method&&r.abrupt("return",r.arg);o=f;var u=b(e,t,r);if("normal"===u.type){if(o=r.done?m:w,u.arg===v)continue;return{value:u.arg,done:r.done}}"throw"===u.type&&(o=m,r.method="throw",r.arg=u.arg)}}}function M(e,t){var r=t.method,o=e.iterator[r];if(o===i)return t.delegate=null,"throw"===r&&e.iterator.return&&(t.method="return",t.arg=i,M(e,t),"throw"===t.method)||"return"!==r&&(t.method="throw",t.arg=new TypeError("The iterator does not provide a '"+r+"' method")),v;var n=b(o,e.iterator,t.arg);if("throw"===n.type)return t.method="throw",t.arg=n.arg,t.delegate=null,v;var a=n.arg;return a?a.done?(t[e.resultName]=a.value,t.next=e.nextLoc,"return"!==t.method&&(t.method="next",t.arg=i),t.delegate=null,v):a:(t.method="throw",t.arg=new TypeError("iterator result is not an object"),t.delegate=null,v)}function S(e){var i={tryLoc:e[0]};1 in e&&(i.catchLoc=e[1]),2 in e&&(i.finallyLoc=e[2],i.afterLoc=e[3]),this.tryEntries.push(i)}function j(e){var i=e.completion||{};i.type="normal",delete i.arg,e.completion=i}function L(e){this.tryEntries=[{tryLoc:"root"}],e.forEach(S,this),this.reset(!0)}function C(t){if(t||""===t){var r=t[c];if(r)return r.call(t);if("function"==typeof t.next)return t;if(!isNaN(t.length)){var o=-1,a=function e(){for(;++o<t.length;)if(n.call(t,o))return e.value=t[o],e.done=!1,e;return e.value=i,e.done=!0,e};return a.next=a}}throw new TypeError(e(t)+" is not iterable")}return y.prototype=x,a(_,"constructor",{value:x,configurable:!0}),a(x,"constructor",{value:y,configurable:!0}),y.displayName=d(x,l,"GeneratorFunction"),t.isGeneratorFunction=function(e){var i="function"==typeof e&&e.constructor;return!!i&&(i===y||"GeneratorFunction"===(i.displayName||i.name))},t.mark=function(e){return Object.setPrototypeOf?Object.setPrototypeOf(e,x):(e.__proto__=x,d(e,l,"GeneratorFunction")),e.prototype=Object.create(_),e},t.awrap=function(e){return{__await:e}},E(O.prototype),d(O.prototype,u,(function(){return this})),t.AsyncIterator=O,t.async=function(e,i,r,o,n){void 0===n&&(n=Promise);var a=new O(p(e,i,r,o),n);return t.isGeneratorFunction(i)?a:a.next().then((function(e){return e.done?e.value:a.next()}))},E(_),d(_,l,"Generator"),d(_,c,(function(){return this})),d(_,"toString",(function(){return"[object Generator]"})),t.keys=function(e){var i=Object(e),t=[];for(var r in i)t.push(r);return t.reverse(),function e(){for(;t.length;){var r=t.pop();if(r in i)return e.value=r,e.done=!1,e}return e.done=!0,e}},t.values=C,L.prototype={constructor:L,reset:function(e){if(this.prev=0,this.next=0,this.sent=this._sent=i,this.done=!1,this.delegate=null,this.method="next",this.arg=i,this.tryEntries.forEach(j),!e)for(var t in this)"t"===t.charAt(0)&&n.call(this,t)&&!isNaN(+t.slice(1))&&(this[t]=i)},stop:function(){this.done=!0;var e=this.tryEntries[0].completion;if("throw"===e.type)throw e.arg;return this.rval},dispatchException:function(e){if(this.done)throw e;var t=this;function r(r,o){return s.type="throw",s.arg=e,t.next=r,o&&(t.method="next",t.arg=i),!!o}for(var o=this.tryEntries.length-1;o>=0;--o){var a=this.tryEntries[o],s=a.completion;if("root"===a.tryLoc)return r("end");if(a.tryLoc<=this.prev){var c=n.call(a,"catchLoc"),u=n.call(a,"finallyLoc");if(c&&u){if(this.prev<a.catchLoc)return r(a.catchLoc,!0);if(this.prev<a.finallyLoc)return r(a.finallyLoc)}else if(c){if(this.prev<a.catchLoc)return r(a.catchLoc,!0)}else{if(!u)throw Error("try statement without catch or finally");if(this.prev<a.finallyLoc)return r(a.finallyLoc)}}}},abrupt:function(e,i){for(var t=this.tryEntries.length-1;t>=0;--t){var r=this.tryEntries[t];if(r.tryLoc<=this.prev&&n.call(r,"finallyLoc")&&this.prev<r.finallyLoc){var o=r;break}}o&&("break"===e||"continue"===e)&&o.tryLoc<=i&&i<=o.finallyLoc&&(o=null);var a=o?o.completion:{};return a.type=e,a.arg=i,o?(this.method="next",this.next=o.finallyLoc,v):this.complete(a)},complete:function(e,i){if("throw"===e.type)throw e.arg;return"break"===e.type||"continue"===e.type?this.next=e.arg:"return"===e.type?(this.rval=this.arg=e.arg,this.method="return",this.next="end"):"normal"===e.type&&i&&(this.next=i),v},finish:function(e){for(var i=this.tryEntries.length-1;i>=0;--i){var t=this.tryEntries[i];if(t.finallyLoc===e)return this.complete(t.completion,t.afterLoc),j(t),v}},catch:function(e){for(var i=this.tryEntries.length-1;i>=0;--i){var t=this.tryEntries[i];if(t.tryLoc===e){var r=t.completion;if("throw"===r.type){var o=r.arg;j(t)}return o}}throw Error("illegal catch attempt")},delegateYield:function(e,t,r){return this.delegate={iterator:C(e),resultName:t,nextLoc:r},"next"===this.method&&(this.arg=i),v}},t}function n(e,i){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);i&&(r=r.filter((function(i){return Object.getOwnPropertyDescriptor(e,i).enumerable}))),t.push.apply(t,r)}return t}function a(e){for(var i=1;i<arguments.length;i++){var t=null!=arguments[i]?arguments[i]:{};i%2?n(Object(t),!0).forEach((function(i){s(e,i,t[i])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):n(Object(t)).forEach((function(i){Object.defineProperty(e,i,Object.getOwnPropertyDescriptor(t,i))}))}return e}function s(e,i,t){return(i=c(i))in e?Object.defineProperty(e,i,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[i]=t,e}function c(i){var t=function(i,t){if("object"!=e(i)||!i)return i;var r=i[Symbol.toPrimitive];if(void 0!==r){var o=r.call(i,t||"default");if("object"!=e(o))return o;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(i)}(i,"string");return"symbol"==e(t)?t:t+""}function u(e,i,t,r,o,n,a){try{var s=e[n](a),c=s.value}catch(e){return void t(e)}s.done?i(c):Promise.resolve(c).then(r,o)}function l(e){return function(){var i=this,t=arguments;return new Promise((function(r,o){var n=e.apply(i,t);function a(e){u(n,r,o,a,s,"next",e)}function s(e){u(n,r,o,a,s,"throw",e)}a(void 0)}))}}System.register(["./Remove-legacy-Dfs7EKnV.js","./index-legacy-BpKOR3xO.js","./Element-legacy-Bfrp7wut.js"],(function(t,n){"use strict";var c,u,d,p,b,h,w,f,m,v,g,y,x,k,T,P,_,E,O,z,M,S,j,L,C;return{setters:[function(e){c=e.u,u=e.I,d=e.A,p=e.B,b=e.R,h=e.N,w=e.c},function(e){f=e.d,m=e.r,v=e.az,g=e.as,y=e.w,x=e.b,k=e.aA,T=e.o,P=e.ak,_=e.ah,E=e.af,O=e.a,z=e.al,M=e.aB,S=e.aC,j=e.aD,L=e.aq},function(e){C=e.N}],execute:function(){var n=document.createElement("style");n.textContent="[data-v-cb1fa2c3]:root{--border-color: inherit;--modal-color: inherit;--border-radius: inherit}.container[data-v-cb1fa2c3]{width:100%;height:100%;position:relative}.bing-map-container[data-v-cb1fa2c3]{width:calc(100% - 2px);height:calc(100% - 2px);border-radius:var(--border-radius);border:1px solid var(--border-color)}.bing-map-container[data-v-cb1fa2c3] *{border-radius:var(--border-radius)}.nav-toolbox[data-v-cb1fa2c3]{position:absolute;top:8px;right:8px;padding:4px;border-radius:var(--border-radius);display:flex;flex-direction:column;flex-wrap:nowrap;justify-content:center;align-items:center;background-color:var(--modal-color);border:1px solid var(--border-color)}.nav-toolbox[data-v-cb1fa2c3]>*{margin:2px}\n",document.head.appendChild(n);var I=["id"],N={class:"nav-toolbox"},D=f({__name:"BingMap",props:{plugin:{},centre:{},viewCentre:{},tracking:{type:Boolean},mapType:{},zoom:{},liteMode:{type:Boolean},forceHiDPI:{type:Boolean},customizedTouchpadBehavior:{type:Boolean},enableInertia:{type:Boolean},showDashboard:{type:Boolean}},emits:["ready","update:zoom","update:centre","update:viewCentre","update:mapType"],setup:function(e,i){var t=i.emit,r=e,n=t,s=m(24),w=c(),f=m("bing-map-".concat(v())),L=m(null),D=m(!!r.tracking),A=void 0,B=[Microsoft.Maps.MapTypeId.road,Microsoft.Maps.MapTypeId.canvasDark,Microsoft.Maps.MapTypeId.canvasLight,Microsoft.Maps.MapTypeId.grayscale];function q(e){if(!L.value)throw new Error("Container ".concat(f.value," is not ready."));var i={centre:e.centre?e.centre:{latitude:0,longitude:0},type:e.mapType||Microsoft.Maps.MapTypeId.road,supportedMapTypes:B,zoom:e.zoom||10,credentials:S,customizedTouchpadBehavior:e.customizedTouchpadBehavior||!0,enableInertia:e.enableInertia||!1,forceHiDPI:e.forceHiDPI||!1,showDashboard:e.showDashboard||!1,liteMode:e.liteMode||!1,minZoom:1,maxZoom:15},t=e.plugin||[];return new j(L.value,i,t)}function R(){var e,i;A&&(D.value?null===(e=A)||void 0===e||e.freezeViewCentre():null===(i=A)||void 0===i||i.unfreezeViewCentre(),D.value&&w.info("You're in tracking mode. The map will only follow your geographical location.",{duration:3e3}))}var U=g(r);return y(r,(function(){A&&(U.centre&&r.centre&&U.centre!==r.centre&&A.setCentre(r.centre||{latitude:0,longitude:0},D.value),U.zoom&&r.zoom&&U.zoom!==r.zoom&&(console.log("zoom changed",U.zoom,r.zoom),A.setZoom(r.zoom||10)),U.viewCentre&&r.viewCentre&&U.viewCentre!==r.viewCentre&&A.setCentre(r.viewCentre||{latitude:0,longitude:0},D.value),U.mapType&&r.mapType&&U.mapType!==r.mapType&&A.map.setMapType(r.mapType||Microsoft.Maps.MapTypeId.road),U=g(r))}),{deep:!0}),x(l(o().mark((function e(){var i;return o().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:k.addListener((function(e){var i,t;r.tracking&&(null===(i=A)||void 0===i||i.setCentre(e,D.value),null===(t=A)||void 0===t||t.gotoCentre(),n("update:centre",a({},e)))})),k.start(),L.value=document.getElementById(f.value),(A=q(r)).addEventHandler("viewchangeend",(function(e){n("update:zoom",e.getZoom()),n("update:viewCentre",a({},e.getCentre()))}),!1),i=setInterval((function(){var e,t;k.isInitialised()&&(clearInterval(i),null===(e=A)||void 0===e||e.setCentre(k.getPresent(),!0),null===(t=A)||void 0===t||t.gotoCentre())})),n("ready",A),R();case 8:case"end":return e.stop()}}),e)})))),function(e,i){return T(),P(z(C),{class:"container"},{default:_((function(){return[E("div",{id:f.value,class:"bing-map-container"},null,8,I),E("div",N,[O(z(p),{strong:"",secondary:"",circle:"",type:"primary",onClick:i[0]||(i[0]=function(){A&&(A.zoomIn()||w.warning("Already at maximum zoom level",{duration:1e3}))})},{default:_((function(){return[O(z(u),{size:z(s)},{default:_((function(){return[O(z(d))]})),_:1},8,["size"])]})),_:1}),O(z(p),{strong:"",secondary:"",circle:"",type:"primary",onClick:i[1]||(i[1]=function(){A&&(A.zoomOut()||w.warning("Already at minimum zoom level",{duration:1e3}))})},{default:_((function(){return[O(z(u),{size:z(s)},{default:_((function(){return[O(z(b))]})),_:1},8,["size"])]})),_:1}),O(z(h),{value:z(D),"onUpdate:value":i[2]||(i[2]=function(e){return M(D)?D.value=e:D=e}),onClick:R,size:"small"},null,8,["value"])])]})),_:1})}}});t("B",L(D,[["__scopeId","data-v-cb1fa2c3"]]));t("a",function(){return r((function e(t){i(this,e),s(this,"host",void 0),s(this,"space","pushPinLayer"),s(this,"pushPins",[]),this.host=t}),[{key:"mount",value:function(){return this.host.plugins[this.space]=this,!0}},{key:"unmount",value:function(){var e=this;try{this.host.plugins[this.space]=null,this.pushPins.forEach((function(i){return e.host.map.entities.remove(i.pin)}))}catch(i){return console.log(i),!1}return!0}},{key:"add",value:function(e,i){var t=this.pushPins.length>0?this.pushPins[this.pushPins.length-1].id+1:0,r=new Microsoft.Maps.Pushpin(e,i);return this.host.map.entities.push(r),this.pushPins.push({id:t,pin:r}),t}},{key:"remove",value:function(e){var i=this.pushPins.findIndex((function(i){return i.id===e}));-1!==i&&(this.host.map.entities.remove(this.pushPins[i].pin),this.pushPins.splice(i,1))}},{key:"setOptions",value:function(e,i){var t=this.pushPins.findIndex((function(i){return i.id===e}));-1!==t&&this.pushPins[t].pin.setOptions(i)}},{key:"setLocation",value:function(e,i){var t=this.pushPins.findIndex((function(i){return i.id===e}));-1!==t&&this.pushPins[t].pin.setLocation(i)}}])}());var A={exports:{}};!function(i,t){!function(r,o){var n="function",a="undefined",s="object",c="string",u="major",l="model",d="name",p="type",b="vendor",h="version",w="architecture",f="console",m="mobile",v="tablet",g="smarttv",y="wearable",x="embedded",k="Amazon",T="Apple",P="ASUS",_="BlackBerry",E="Browser",O="Chrome",z="Firefox",M="Google",S="Huawei",j="LG",L="Microsoft",C="Motorola",I="Opera",N="Samsung",D="Sharp",A="Sony",B="Xiaomi",q="Zebra",R="Facebook",U="Chromium OS",G="Mac OS",V=function(e){for(var i={},t=0;t<e.length;t++)i[e[t].toUpperCase()]=e[t];return i},Z=function(i,t){return e(i)===c&&-1!==F(t).indexOf(F(i))},F=function(e){return e.toLowerCase()},H=function(i,t){if(e(i)===c)return i=i.replace(/^\s\s*/,""),e(t)===a?i:i.substring(0,500)},Y=function(i,t){for(var r,a,c,u,l,d,p=0;p<t.length&&!l;){var b=t[p],h=t[p+1];for(r=a=0;r<b.length&&!l&&b[r];)if(l=b[r++].exec(i))for(c=0;c<h.length;c++)d=l[++a],e(u=h[c])===s&&u.length>0?2===u.length?e(u[1])==n?this[u[0]]=u[1].call(this,d):this[u[0]]=u[1]:3===u.length?e(u[1])!==n||u[1].exec&&u[1].test?this[u[0]]=d?d.replace(u[1],u[2]):o:this[u[0]]=d?u[1].call(this,d,u[2]):o:4===u.length&&(this[u[0]]=d?u[3].call(this,d.replace(u[1],u[2])):o):this[u]=d||o;p+=2}},X=function(i,t){for(var r in t)if(e(t[r])===s&&t[r].length>0){for(var n=0;n<t[r].length;n++)if(Z(t[r][n],i))return"?"===r?o:r}else if(Z(t[r],i))return"?"===r?o:r;return i},W={ME:"4.90","NT 3.11":"NT3.51","NT 4.0":"NT4.0",2e3:"NT 5.0",XP:["NT 5.1","NT 5.2"],Vista:"NT 6.0",7:"NT 6.1",8:"NT 6.2",8.1:"NT 6.3",10:["NT 6.4","NT 10.0"],RT:"ARM"},K={browser:[[/\b(?:crmo|crios)\/([\w\.]+)/i],[h,[d,"Chrome"]],[/edg(?:e|ios|a)?\/([\w\.]+)/i],[h,[d,"Edge"]],[/(opera mini)\/([-\w\.]+)/i,/(opera [mobiletab]{3,6})\b.+version\/([-\w\.]+)/i,/(opera)(?:.+version\/|[\/ ]+)([\w\.]+)/i],[d,h],[/opios[\/ ]+([\w\.]+)/i],[h,[d,I+" Mini"]],[/\bop(?:rg)?x\/([\w\.]+)/i],[h,[d,I+" GX"]],[/\bopr\/([\w\.]+)/i],[h,[d,I]],[/\bb[ai]*d(?:uhd|[ub]*[aekoprswx]{5,6})[\/ ]?([\w\.]+)/i],[h,[d,"Baidu"]],[/(kindle)\/([\w\.]+)/i,/(lunascape|maxthon|netfront|jasmine|blazer)[\/ ]?([\w\.]*)/i,/(avant|iemobile|slim)\s?(?:browser)?[\/ ]?([\w\.]*)/i,/(?:ms|\()(ie) ([\w\.]+)/i,/(flock|rockmelt|midori|epiphany|silk|skyfire|bolt|iron|vivaldi|iridium|phantomjs|bowser|quark|qupzilla|falkon|rekonq|puffin|brave|whale(?!.+naver)|qqbrowserlite|qq|duckduckgo)\/([-\w\.]+)/i,/(heytap|ovi)browser\/([\d\.]+)/i,/(weibo)__([\d\.]+)/i],[d,h],[/\bddg\/([\w\.]+)/i],[h,[d,"DuckDuckGo"]],[/(?:\buc? ?browser|(?:juc.+)ucweb)[\/ ]?([\w\.]+)/i],[h,[d,"UC"+E]],[/microm.+\bqbcore\/([\w\.]+)/i,/\bqbcore\/([\w\.]+).+microm/i,/micromessenger\/([\w\.]+)/i],[h,[d,"WeChat"]],[/konqueror\/([\w\.]+)/i],[h,[d,"Konqueror"]],[/trident.+rv[: ]([\w\.]{1,9})\b.+like gecko/i],[h,[d,"IE"]],[/ya(?:search)?browser\/([\w\.]+)/i],[h,[d,"Yandex"]],[/slbrowser\/([\w\.]+)/i],[h,[d,"Smart Lenovo "+E]],[/(avast|avg)\/([\w\.]+)/i],[[d,/(.+)/,"$1 Secure "+E],h],[/\bfocus\/([\w\.]+)/i],[h,[d,z+" Focus"]],[/\bopt\/([\w\.]+)/i],[h,[d,I+" Touch"]],[/coc_coc\w+\/([\w\.]+)/i],[h,[d,"Coc Coc"]],[/dolfin\/([\w\.]+)/i],[h,[d,"Dolphin"]],[/coast\/([\w\.]+)/i],[h,[d,I+" Coast"]],[/miuibrowser\/([\w\.]+)/i],[h,[d,"MIUI "+E]],[/fxios\/([-\w\.]+)/i],[h,[d,z]],[/\bqihu|(qi?ho?o?|360)browser/i],[[d,"360 "+E]],[/(oculus|sailfish|huawei|vivo)browser\/([\w\.]+)/i],[[d,/(.+)/,"$1 "+E],h],[/samsungbrowser\/([\w\.]+)/i],[h,[d,N+" Internet"]],[/(comodo_dragon)\/([\w\.]+)/i],[[d,/_/g," "],h],[/metasr[\/ ]?([\d\.]+)/i],[h,[d,"Sogou Explorer"]],[/(sogou)mo\w+\/([\d\.]+)/i],[[d,"Sogou Mobile"],h],[/(electron)\/([\w\.]+) safari/i,/(tesla)(?: qtcarbrowser|\/(20\d\d\.[-\w\.]+))/i,/m?(qqbrowser|2345Explorer)[\/ ]?([\w\.]+)/i],[d,h],[/(lbbrowser)/i,/\[(linkedin)app\]/i],[d],[/((?:fban\/fbios|fb_iab\/fb4a)(?!.+fbav)|;fbav\/([\w\.]+);)/i],[[d,R],h],[/(Klarna)\/([\w\.]+)/i,/(kakao(?:talk|story))[\/ ]([\w\.]+)/i,/(naver)\(.*?(\d+\.[\w\.]+).*\)/i,/safari (line)\/([\w\.]+)/i,/\b(line)\/([\w\.]+)\/iab/i,/(alipay)client\/([\w\.]+)/i,/(twitter)(?:and| f.+e\/([\w\.]+))/i,/(chromium|instagram|snapchat)[\/ ]([-\w\.]+)/i],[d,h],[/\bgsa\/([\w\.]+) .*safari\//i],[h,[d,"GSA"]],[/musical_ly(?:.+app_?version\/|_)([\w\.]+)/i],[h,[d,"TikTok"]],[/headlesschrome(?:\/([\w\.]+)| )/i],[h,[d,O+" Headless"]],[/ wv\).+(chrome)\/([\w\.]+)/i],[[d,O+" WebView"],h],[/droid.+ version\/([\w\.]+)\b.+(?:mobile safari|safari)/i],[h,[d,"Android "+E]],[/(chrome|omniweb|arora|[tizenoka]{5} ?browser)\/v?([\w\.]+)/i],[d,h],[/version\/([\w\.\,]+) .*mobile\/\w+ (safari)/i],[h,[d,"Mobile Safari"]],[/version\/([\w(\.|\,)]+) .*(mobile ?safari|safari)/i],[h,d],[/webkit.+?(mobile ?safari|safari)(\/[\w\.]+)/i],[d,[h,X,{"1.0":"/8",1.2:"/1",1.3:"/3","2.0":"/412","2.0.2":"/416","2.0.3":"/417","2.0.4":"/419","?":"/"}]],[/(webkit|khtml)\/([\w\.]+)/i],[d,h],[/(navigator|netscape\d?)\/([-\w\.]+)/i],[[d,"Netscape"],h],[/mobile vr; rv:([\w\.]+)\).+firefox/i],[h,[d,z+" Reality"]],[/ekiohf.+(flow)\/([\w\.]+)/i,/(swiftfox)/i,/(icedragon|iceweasel|camino|chimera|fennec|maemo browser|minimo|conkeror|klar)[\/ ]?([\w\.\+]+)/i,/(seamonkey|k-meleon|icecat|iceape|firebird|phoenix|palemoon|basilisk|waterfox)\/([-\w\.]+)$/i,/(firefox)\/([\w\.]+)/i,/(mozilla)\/([\w\.]+) .+rv\:.+gecko\/\d+/i,/(polaris|lynx|dillo|icab|doris|amaya|w3m|netsurf|sleipnir|obigo|mosaic|(?:go|ice|up)[\. ]?browser)[-\/ ]?v?([\w\.]+)/i,/(links) \(([\w\.]+)/i,/panasonic;(viera)/i],[d,h],[/(cobalt)\/([\w\.]+)/i],[d,[h,/master.|lts./,""]]],cpu:[[/(?:(amd|x(?:(?:86|64)[-_])?|wow|win)64)[;\)]/i],[[w,"amd64"]],[/(ia32(?=;))/i],[[w,F]],[/((?:i[346]|x)86)[;\)]/i],[[w,"ia32"]],[/\b(aarch64|arm(v?8e?l?|_?64))\b/i],[[w,"arm64"]],[/\b(arm(?:v[67])?ht?n?[fl]p?)\b/i],[[w,"armhf"]],[/windows (ce|mobile); ppc;/i],[[w,"arm"]],[/((?:ppc|powerpc)(?:64)?)(?: mac|;|\))/i],[[w,/ower/,"",F]],[/(sun4\w)[;\)]/i],[[w,"sparc"]],[/((?:avr32|ia64(?=;))|68k(?=\))|\barm(?=v(?:[1-7]|[5-7]1)l?|;|eabi)|(?=atmel )avr|(?:irix|mips|sparc)(?:64)?\b|pa-risc)/i],[[w,F]]],device:[[/\b(sch-i[89]0\d|shw-m380s|sm-[ptx]\w{2,4}|gt-[pn]\d{2,4}|sgh-t8[56]9|nexus 10)/i],[l,[b,N],[p,v]],[/\b((?:s[cgp]h|gt|sm)-\w+|sc[g-]?[\d]+a?|galaxy nexus)/i,/samsung[- ]([-\w]+)/i,/sec-(sgh\w+)/i],[l,[b,N],[p,m]],[/(?:\/|\()(ip(?:hone|od)[\w, ]*)(?:\/|;)/i],[l,[b,T],[p,m]],[/\((ipad);[-\w\),; ]+apple/i,/applecoremedia\/[\w\.]+ \((ipad)/i,/\b(ipad)\d\d?,\d\d?[;\]].+ios/i],[l,[b,T],[p,v]],[/(macintosh);/i],[l,[b,T]],[/\b(sh-?[altvz]?\d\d[a-ekm]?)/i],[l,[b,D],[p,m]],[/\b((?:ag[rs][23]?|bah2?|sht?|btv)-a?[lw]\d{2})\b(?!.+d\/s)/i],[l,[b,S],[p,v]],[/(?:huawei|honor)([-\w ]+)[;\)]/i,/\b(nexus 6p|\w{2,4}e?-[atu]?[ln][\dx][012359c][adn]?)\b(?!.+d\/s)/i],[l,[b,S],[p,m]],[/\b(poco[\w ]+|m2\d{3}j\d\d[a-z]{2})(?: bui|\))/i,/\b; (\w+) build\/hm\1/i,/\b(hm[-_ ]?note?[_ ]?(?:\d\w)?) bui/i,/\b(redmi[\-_ ]?(?:note|k)?[\w_ ]+)(?: bui|\))/i,/oid[^\)]+; (m?[12][0-389][01]\w{3,6}[c-y])( bui|; wv|\))/i,/\b(mi[-_ ]?(?:a\d|one|one[_ ]plus|note lte|max|cc)?[_ ]?(?:\d?\w?)[_ ]?(?:plus|se|lite)?)(?: bui|\))/i],[[l,/_/g," "],[b,B],[p,m]],[/oid[^\)]+; (2\d{4}(283|rpbf)[cgl])( bui|\))/i,/\b(mi[-_ ]?(?:pad)(?:[\w_ ]+))(?: bui|\))/i],[[l,/_/g," "],[b,B],[p,v]],[/; (\w+) bui.+ oppo/i,/\b(cph[12]\d{3}|p(?:af|c[al]|d\w|e[ar])[mt]\d0|x9007|a101op)\b/i],[l,[b,"OPPO"],[p,m]],[/\b(opd2\d{3}a?) bui/i],[l,[b,"OPPO"],[p,v]],[/vivo (\w+)(?: bui|\))/i,/\b(v[12]\d{3}\w?[at])(?: bui|;)/i],[l,[b,"Vivo"],[p,m]],[/\b(rmx[1-3]\d{3})(?: bui|;|\))/i],[l,[b,"Realme"],[p,m]],[/\b(milestone|droid(?:[2-4x]| (?:bionic|x2|pro|razr))?:?( 4g)?)\b[\w ]+build\//i,/\bmot(?:orola)?[- ](\w*)/i,/((?:moto[\w\(\) ]+|xt\d{3,4}|nexus 6)(?= bui|\)))/i],[l,[b,C],[p,m]],[/\b(mz60\d|xoom[2 ]{0,2}) build\//i],[l,[b,C],[p,v]],[/((?=lg)?[vl]k\-?\d{3}) bui| 3\.[-\w; ]{10}lg?-([06cv9]{3,4})/i],[l,[b,j],[p,v]],[/(lm(?:-?f100[nv]?|-[\w\.]+)(?= bui|\))|nexus [45])/i,/\blg[-e;\/ ]+((?!browser|netcast|android tv)\w+)/i,/\blg-?([\d\w]+) bui/i],[l,[b,j],[p,m]],[/(ideatab[-\w ]+)/i,/lenovo ?(s[56]000[-\w]+|tab(?:[\w ]+)|yt[-\d\w]{6}|tb[-\d\w]{6})/i],[l,[b,"Lenovo"],[p,v]],[/(?:maemo|nokia).*(n900|lumia \d+)/i,/nokia[-_ ]?([-\w\.]*)/i],[[l,/_/g," "],[b,"Nokia"],[p,m]],[/(pixel c)\b/i],[l,[b,M],[p,v]],[/droid.+; (pixel[\daxl ]{0,6})(?: bui|\))/i],[l,[b,M],[p,m]],[/droid.+ (a?\d[0-2]{2}so|[c-g]\d{4}|so[-gl]\w+|xq-a\w[4-7][12])(?= bui|\).+chrome\/(?![1-6]{0,1}\d\.))/i],[l,[b,A],[p,m]],[/sony tablet [ps]/i,/\b(?:sony)?sgp\w+(?: bui|\))/i],[[l,"Xperia Tablet"],[b,A],[p,v]],[/ (kb2005|in20[12]5|be20[12][59])\b/i,/(?:one)?(?:plus)? (a\d0\d\d)(?: b|\))/i],[l,[b,"OnePlus"],[p,m]],[/(alexa)webm/i,/(kf[a-z]{2}wi|aeo[c-r]{2})( bui|\))/i,/(kf[a-z]+)( bui|\)).+silk\//i],[l,[b,k],[p,v]],[/((?:sd|kf)[0349hijorstuw]+)( bui|\)).+silk\//i],[[l,/(.+)/g,"Fire Phone $1"],[b,k],[p,m]],[/(playbook);[-\w\),; ]+(rim)/i],[l,b,[p,v]],[/\b((?:bb[a-f]|st[hv])100-\d)/i,/\(bb10; (\w+)/i],[l,[b,_],[p,m]],[/(?:\b|asus_)(transfo[prime ]{4,10} \w+|eeepc|slider \w+|nexus 7|padfone|p00[cj])/i],[l,[b,P],[p,v]],[/ (z[bes]6[027][012][km][ls]|zenfone \d\w?)\b/i],[l,[b,P],[p,m]],[/(nexus 9)/i],[l,[b,"HTC"],[p,v]],[/(htc)[-;_ ]{1,2}([\w ]+(?=\)| bui)|\w+)/i,/(zte)[- ]([\w ]+?)(?: bui|\/|\))/i,/(alcatel|geeksphone|nexian|panasonic(?!(?:;|\.))|sony(?!-bra))[-_ ]?([-\w]*)/i],[b,[l,/_/g," "],[p,m]],[/droid.+; ([ab][1-7]-?[0178a]\d\d?)/i],[l,[b,"Acer"],[p,v]],[/droid.+; (m[1-5] note) bui/i,/\bmz-([-\w]{2,})/i],[l,[b,"Meizu"],[p,m]],[/; ((?:power )?armor(?:[\w ]{0,8}))(?: bui|\))/i],[l,[b,"Ulefone"],[p,m]],[/(blackberry|benq|palm(?=\-)|sonyericsson|acer|asus|dell|meizu|motorola|polytron|infinix|tecno)[-_ ]?([-\w]*)/i,/(hp) ([\w ]+\w)/i,/(asus)-?(\w+)/i,/(microsoft); (lumia[\w ]+)/i,/(lenovo)[-_ ]?([-\w]+)/i,/(jolla)/i,/(oppo) ?([\w ]+) bui/i],[b,l,[p,m]],[/(kobo)\s(ereader|touch)/i,/(archos) (gamepad2?)/i,/(hp).+(touchpad(?!.+tablet)|tablet)/i,/(kindle)\/([\w\.]+)/i,/(nook)[\w ]+build\/(\w+)/i,/(dell) (strea[kpr\d ]*[\dko])/i,/(le[- ]+pan)[- ]+(\w{1,9}) bui/i,/(trinity)[- ]*(t\d{3}) bui/i,/(gigaset)[- ]+(q\w{1,9}) bui/i,/(vodafone) ([\w ]+)(?:\)| bui)/i],[b,l,[p,v]],[/(surface duo)/i],[l,[b,L],[p,v]],[/droid [\d\.]+; (fp\du?)(?: b|\))/i],[l,[b,"Fairphone"],[p,m]],[/(u304aa)/i],[l,[b,"AT&T"],[p,m]],[/\bsie-(\w*)/i],[l,[b,"Siemens"],[p,m]],[/\b(rct\w+) b/i],[l,[b,"RCA"],[p,v]],[/\b(venue[\d ]{2,7}) b/i],[l,[b,"Dell"],[p,v]],[/\b(q(?:mv|ta)\w+) b/i],[l,[b,"Verizon"],[p,v]],[/\b(?:barnes[& ]+noble |bn[rt])([\w\+ ]*) b/i],[l,[b,"Barnes & Noble"],[p,v]],[/\b(tm\d{3}\w+) b/i],[l,[b,"NuVision"],[p,v]],[/\b(k88) b/i],[l,[b,"ZTE"],[p,v]],[/\b(nx\d{3}j) b/i],[l,[b,"ZTE"],[p,m]],[/\b(gen\d{3}) b.+49h/i],[l,[b,"Swiss"],[p,m]],[/\b(zur\d{3}) b/i],[l,[b,"Swiss"],[p,v]],[/\b((zeki)?tb.*\b) b/i],[l,[b,"Zeki"],[p,v]],[/\b([yr]\d{2}) b/i,/\b(dragon[- ]+touch |dt)(\w{5}) b/i],[[b,"Dragon Touch"],l,[p,v]],[/\b(ns-?\w{0,9}) b/i],[l,[b,"Insignia"],[p,v]],[/\b((nxa|next)-?\w{0,9}) b/i],[l,[b,"NextBook"],[p,v]],[/\b(xtreme\_)?(v(1[045]|2[015]|[3469]0|7[05])) b/i],[[b,"Voice"],l,[p,m]],[/\b(lvtel\-)?(v1[12]) b/i],[[b,"LvTel"],l,[p,m]],[/\b(ph-1) /i],[l,[b,"Essential"],[p,m]],[/\b(v(100md|700na|7011|917g).*\b) b/i],[l,[b,"Envizen"],[p,v]],[/\b(trio[-\w\. ]+) b/i],[l,[b,"MachSpeed"],[p,v]],[/\btu_(1491) b/i],[l,[b,"Rotor"],[p,v]],[/(shield[\w ]+) b/i],[l,[b,"Nvidia"],[p,v]],[/(sprint) (\w+)/i],[b,l,[p,m]],[/(kin\.[onetw]{3})/i],[[l,/\./g," "],[b,L],[p,m]],[/droid.+; (cc6666?|et5[16]|mc[239][23]x?|vc8[03]x?)\)/i],[l,[b,q],[p,v]],[/droid.+; (ec30|ps20|tc[2-8]\d[kx])\)/i],[l,[b,q],[p,m]],[/smart-tv.+(samsung)/i],[b,[p,g]],[/hbbtv.+maple;(\d+)/i],[[l,/^/,"SmartTV"],[b,N],[p,g]],[/(nux; netcast.+smarttv|lg (netcast\.tv-201\d|android tv))/i],[[b,j],[p,g]],[/(apple) ?tv/i],[b,[l,T+" TV"],[p,g]],[/crkey/i],[[l,O+"cast"],[b,M],[p,g]],[/droid.+aft(\w+)( bui|\))/i],[l,[b,k],[p,g]],[/\(dtv[\);].+(aquos)/i,/(aquos-tv[\w ]+)\)/i],[l,[b,D],[p,g]],[/(bravia[\w ]+)( bui|\))/i],[l,[b,A],[p,g]],[/(mitv-\w{5}) bui/i],[l,[b,B],[p,g]],[/Hbbtv.*(technisat) (.*);/i],[b,l,[p,g]],[/\b(roku)[\dx]*[\)\/]((?:dvp-)?[\d\.]*)/i,/hbbtv\/\d+\.\d+\.\d+ +\([\w\+ ]*; *([\w\d][^;]*);([^;]*)/i],[[b,H],[l,H],[p,g]],[/\b(android tv|smart[- ]?tv|opera tv|tv; rv:)\b/i],[[p,g]],[/(ouya)/i,/(nintendo) ([wids3utch]+)/i],[b,l,[p,f]],[/droid.+; (shield) bui/i],[l,[b,"Nvidia"],[p,f]],[/(playstation [345portablevi]+)/i],[l,[b,A],[p,f]],[/\b(xbox(?: one)?(?!; xbox))[\); ]/i],[l,[b,L],[p,f]],[/((pebble))app/i],[b,l,[p,y]],[/(watch)(?: ?os[,\/]|\d,\d\/)[\d\.]+/i],[l,[b,T],[p,y]],[/droid.+; (glass) \d/i],[l,[b,M],[p,y]],[/droid.+; (wt63?0{2,3})\)/i],[l,[b,q],[p,y]],[/(quest( \d| pro)?)/i],[l,[b,R],[p,y]],[/(tesla)(?: qtcarbrowser|\/[-\w\.]+)/i],[b,[p,x]],[/(aeobc)\b/i],[l,[b,k],[p,x]],[/droid .+?; ([^;]+?)(?: bui|; wv\)|\) applew).+? mobile safari/i],[l,[p,m]],[/droid .+?; ([^;]+?)(?: bui|\) applew).+?(?! mobile) safari/i],[l,[p,v]],[/\b((tablet|tab)[;\/]|focus\/\d(?!.+mobile))/i],[[p,v]],[/(phone|mobile(?:[;\/]| [ \w\/\.]*safari)|pda(?=.+windows ce))/i],[[p,m]],[/(android[-\w\. ]{0,9});.+buil/i],[l,[b,"Generic"]]],engine:[[/windows.+ edge\/([\w\.]+)/i],[h,[d,"EdgeHTML"]],[/webkit\/537\.36.+chrome\/(?!27)([\w\.]+)/i],[h,[d,"Blink"]],[/(presto)\/([\w\.]+)/i,/(webkit|trident|netfront|netsurf|amaya|lynx|w3m|goanna)\/([\w\.]+)/i,/ekioh(flow)\/([\w\.]+)/i,/(khtml|tasman|links)[\/ ]\(?([\w\.]+)/i,/(icab)[\/ ]([23]\.[\d\.]+)/i,/\b(libweb)/i],[d,h],[/rv\:([\w\.]{1,9})\b.+(gecko)/i],[h,d]],os:[[/microsoft (windows) (vista|xp)/i],[d,h],[/(windows (?:phone(?: os)?|mobile))[\/ ]?([\d\.\w ]*)/i],[d,[h,X,W]],[/windows nt 6\.2; (arm)/i,/windows[\/ ]?([ntce\d\. ]+\w)(?!.+xbox)/i,/(?:win(?=3|9|n)|win 9x )([nt\d\.]+)/i],[[h,X,W],[d,"Windows"]],[/ip[honead]{2,4}\b(?:.*os ([\w]+) like mac|; opera)/i,/(?:ios;fbsv\/|iphone.+ios[\/ ])([\d\.]+)/i,/cfnetwork\/.+darwin/i],[[h,/_/g,"."],[d,"iOS"]],[/(mac os x) ?([\w\. ]*)/i,/(macintosh|mac_powerpc\b)(?!.+haiku)/i],[[d,G],[h,/_/g,"."]],[/droid ([\w\.]+)\b.+(android[- ]x86|harmonyos)/i],[h,d],[/(android|webos|qnx|bada|rim tablet os|maemo|meego|sailfish)[-\/ ]?([\w\.]*)/i,/(blackberry)\w*\/([\w\.]*)/i,/(tizen|kaios)[\/ ]([\w\.]+)/i,/\((series40);/i],[d,h],[/\(bb(10);/i],[h,[d,_]],[/(?:symbian ?os|symbos|s60(?=;)|series60)[-\/ ]?([\w\.]*)/i],[h,[d,"Symbian"]],[/mozilla\/[\d\.]+ \((?:mobile|tablet|tv|mobile; [\w ]+); rv:.+ gecko\/([\w\.]+)/i],[h,[d,z+" OS"]],[/web0s;.+rt(tv)/i,/\b(?:hp)?wos(?:browser)?\/([\w\.]+)/i],[h,[d,"webOS"]],[/watch(?: ?os[,\/]|\d,\d\/)([\d\.]+)/i],[h,[d,"watchOS"]],[/crkey\/([\d\.]+)/i],[h,[d,O+"cast"]],[/(cros) [\w]+(?:\)| ([\w\.]+)\b)/i],[[d,U],h],[/panasonic;(viera)/i,/(netrange)mmh/i,/(nettv)\/(\d+\.[\w\.]+)/i,/(nintendo|playstation) ([wids345portablevuch]+)/i,/(xbox); +xbox ([^\);]+)/i,/\b(joli|palm)\b ?(?:os)?\/?([\w\.]*)/i,/(mint)[\/\(\) ]?(\w*)/i,/(mageia|vectorlinux)[; ]/i,/([kxln]?ubuntu|debian|suse|opensuse|gentoo|arch(?= linux)|slackware|fedora|mandriva|centos|pclinuxos|red ?hat|zenwalk|linpus|raspbian|plan 9|minix|risc os|contiki|deepin|manjaro|elementary os|sabayon|linspire)(?: gnu\/linux)?(?: enterprise)?(?:[- ]linux)?(?:-gnu)?[-\/ ]?(?!chrom|package)([-\w\.]*)/i,/(hurd|linux) ?([\w\.]*)/i,/(gnu) ?([\w\.]*)/i,/\b([-frentopcghs]{0,5}bsd|dragonfly)[\/ ]?(?!amd|[ix346]{1,2}86)([\w\.]*)/i,/(haiku) (\w+)/i],[d,h],[/(sunos) ?([\w\.\d]*)/i],[[d,"Solaris"],h],[/((?:open)?solaris)[-\/ ]?([\w\.]*)/i,/(aix) ((\d)(?=\.|\)| )[\w\.])*/i,/\b(beos|os\/2|amigaos|morphos|openvms|fuchsia|hp-ux|serenityos)/i,/(unix) ?([\w\.]*)/i],[d,h]]},$=function(i,t){if(e(i)===s&&(t=i,i=o),!(this instanceof $))return new $(i,t).getResult();var f=e(r)!==a&&r.navigator?r.navigator:o,g=i||(f&&f.userAgent?f.userAgent:""),y=f&&f.userAgentData?f.userAgentData:o,x=t?function(e,i){var t={};for(var r in e)i[r]&&i[r].length%2==0?t[r]=i[r].concat(e[r]):t[r]=e[r];return t}(K,t):K,k=f&&f.userAgent==g;return this.getBrowser=function(){var i,t={};return t[d]=o,t[h]=o,Y.call(t,g,x.browser),t[u]=e(i=t[h])===c?i.replace(/[^\d\.]/g,"").split(".")[0]:o,k&&f&&f.brave&&e(f.brave.isBrave)==n&&(t[d]="Brave"),t},this.getCPU=function(){var e={};return e[w]=o,Y.call(e,g,x.cpu),e},this.getDevice=function(){var i={};return i[b]=o,i[l]=o,i[p]=o,Y.call(i,g,x.device),k&&!i[p]&&y&&y.mobile&&(i[p]=m),k&&"Macintosh"==i[l]&&f&&e(f.standalone)!==a&&f.maxTouchPoints&&f.maxTouchPoints>2&&(i[l]="iPad",i[p]=v),i},this.getEngine=function(){var e={};return e[d]=o,e[h]=o,Y.call(e,g,x.engine),e},this.getOS=function(){var e={};return e[d]=o,e[h]=o,Y.call(e,g,x.os),k&&!e[d]&&y&&y.platform&&"Unknown"!=y.platform&&(e[d]=y.platform.replace(/chrome os/i,U).replace(/macos/i,G)),e},this.getResult=function(){return{ua:this.getUA(),browser:this.getBrowser(),engine:this.getEngine(),os:this.getOS(),device:this.getDevice(),cpu:this.getCPU()}},this.getUA=function(){return g},this.setUA=function(i){return g=e(i)===c&&i.length>500?H(i,500):i,this},this.setUA(g),this};$.VERSION="1.0.38",$.BROWSER=V([d,h,u]),$.CPU=V([w]),$.DEVICE=V([l,b,p,f,m,g,v,y,x]),$.ENGINE=$.OS=V([d,h]),i.exports&&(t=i.exports=$),t.UAParser=$;var Q=e(r)!==a&&(r.jQuery||r.Zepto);if(Q&&!Q.ua){var J=new $;Q.ua=J.getResult(),Q.ua.get=function(){return J.getUA()},Q.ua.set=function(e){J.setUA(e);var i=J.getResult();for(var t in i)Q.ua[t]=i[t]}}}("object"===("undefined"==typeof window?"undefined":e(window))?window:w)}(A,A.exports);var B,q=t("u",A.exports),R=[];function U(){R.forEach((function(e){return e.callback(B.device)}))}!function(e){e.device="touchpad",e.browserEngine=new q.UAParser(navigator.userAgent).getEngine().name||"",document.addEventListener("mousewheel",r),document.addEventListener("DOMMouseScroll",r);var i=0,t=0;function r(r){e.isTouchpad(r)?i+=1:t+=1,t>3&&(i=0,t=0,"mouse"!==e.device&&(e.device="mouse",U())),i>3&&(i=0,t=0,"touchpad"!==e.device&&(e.device="touchpad",U()))}e.updateDeivceType=r,e.addChangeListener=function(e){var i=R.length>0?R[R.length-1].id+1:0;R.push({id:i,callback:e})},e.removeChangeListener=function(e){R=R.filter((function(i){return i.id!==e}))},e.isTouchpad=function(i){if(!i.wheelDeltaY)return 0===i.deltaMode;var t=!1;switch(e.browserEngine){case"Blink":t=Math.abs(i.wheelDeltaY)<120&&0!==i.deltaX;break;case"WebKit":t=Math.abs(i.wheelDeltaY)%12!=0&&0!==i.deltaX;break;case"Gecko":t=Math.abs(i.wheelDeltaY)%48!=0&&0!==i.deltaX}return t}}(B||(B={}));var G=B;window.inputDevicePreferences=B,t("b",function(){return r((function e(t){i(this,e),s(this,"host",void 0),s(this,"space",void 0),s(this,"behaviour",void 0),this.host=t,this.space="customizedTouchpadBehavior"}),[{key:"mount",value:function(){var e,i,t,r,o=this;return this.host.map.setOptions({disableScrollWheelZoom:!0}),this.behaviour=(e=this.host,i=function(e,i){o.host.setViewPort({centre:e,zoom:i})},t=e.properties.liteModeForceHiDPI?window.devicePixelRatio:1,r=[5e3,2500,1e3,500,250,200,100,50,25,10,5,2,1,.4,.25,.2,.15,.12,.05,.025,.01],function(o){G.updateDeivceType(o),o.preventDefault();var n=e.getZoom(),s=5e3/r[Math.round(n)]||1,c=a({},e.getViewCentre());if(o.ctrlKey||o.metaKey){var u=Math.min(Math.max(n-.05*o.deltaY,e.getZoomRange().min),e.getZoomRange().max);i(c,u)}else c.latitude=Math.max(-90,Math.min(90,c.latitude-o.deltaY*t/s)),c.longitude=(c.longitude+o.deltaX*t/s+180)%360-180,i(c,n)}),this.host.container.addEventListener("wheel",this.behaviour,{passive:!1}),!0}},{key:"unmount",value:function(){return this.host.map.setOptions({disableScrollWheelZoom:!1}),this.behaviour&&this.host.container.removeEventListener("wheel",this.behaviour),!0}}])}())}}}))}();
