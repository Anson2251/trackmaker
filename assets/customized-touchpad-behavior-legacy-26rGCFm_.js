!function(){function e(t){return e="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},e(t)}function t(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function n(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function i(e,t){for(var n=0;n<t.length;n++){var i=t[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,u(i.key),i)}}function o(e,t,n){return t&&i(e.prototype,t),n&&i(e,n),Object.defineProperty(e,"prototype",{writable:!1}),e}function r(e,t,n){return(t=u(t))in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function u(t){var n=function(t,n){if("object"!=e(t)||!t)return t;var i=t[Symbol.toPrimitive];if(void 0!==i){var o=i.call(t,n||"default");if("object"!=e(o))return o;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===n?String:Number)(t)}(t,"string");return"symbol"==e(n)?n:n+""}System.register(["./map-manager-legacy-DVNUD_kB.js","./index-legacy-BGO79n4u.js","./Element-legacy-B50xcIkM.js"],(function(e,i){"use strict";var u,s,a,c,l,p,h,f,d,v,m,y,b,g,w,k,P,O;return{setters:[function(e){u=e.u,s=e.M,a=e.I,c=e.B,l=e.N},function(e){p=e.d,h=e.o,f=e.c,d=e.af,v=e.r,m=e.b,y=e.ak,b=e.al,g=e.ah,w=e.a,k=e.aq,P=e.ay},function(e){O=e.N}],execute:function(){var i={xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink",viewBox:"0 0 512 512"},j=[d("path",{fill:"none",stroke:"currentColor","stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"32",d:"M256 112v288"},null,-1),d("path",{fill:"none",stroke:"currentColor","stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"32",d:"M400 256H112"},null,-1)],x=p({name:"Add",render:function(e,t){return h(),f("svg",i,j)}}),M={xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink",viewBox:"0 0 512 512"},B=[d("path",{fill:"none",stroke:"currentColor","stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"32",d:"M400 256H112"},null,-1)],z=p({name:"Remove",render:function(e,t){return h(),f("svg",M,B)}}),S=["id"],C={class:"nav-toolbox"},D=p({__name:"BingMapView",props:{plugin:{},centre:{},viewCentre:{},tracking:{type:Boolean},mapType:{},zoom:{},liteMode:{type:Boolean},forceHiDPI:{type:Boolean},customizedTouchpadBehavior:{type:Boolean},enableInertia:{type:Boolean},showDashboard:{type:Boolean}},emits:["ready","update:zoom","update:centre","update:viewCentre","update:mapType"],setup:function(e,t){var n=t.emit,i=v(24),o=u(),r=e,p=new s(r,n,{info:function(e,t){return o.info(e,{duration:t})},warning:function(e,t){return o.warning(e,{duration:t})},error:function(e,t){return o.error(e,{duration:t})}},"bing");return m((function(){p.mount(),p.trackingMode.value=!!r.tracking})),function(e,t){return h(),y(b(O),{class:"container"},{default:g((function(){return[d("div",{id:b(p).id,class:"bing-map-container"},null,8,S),d("div",C,[w(b(c),{strong:"",secondary:"",circle:"",type:"primary",onClick:t[0]||(t[0]=function(e){return b(p).zoom.value+=1})},{default:g((function(){return[w(b(a),{size:b(i)},{default:g((function(){return[w(b(x))]})),_:1},8,["size"])]})),_:1}),w(b(c),{strong:"",secondary:"",circle:"",type:"primary",onClick:t[1]||(t[1]=function(e){return b(p).zoom.value-=1})},{default:g((function(){return[w(b(a),{size:b(i)},{default:g((function(){return[w(b(z))]})),_:1},8,["size"])]})),_:1}),w(b(l),{value:b(p).trackingMode.value,"onUpdate:value":t[2]||(t[2]=function(e){return b(p).trackingMode.value=e}),size:"small"},null,8,["value"])])]})),_:1})}}});e("B",k(D,[["__scopeId","data-v-36f17cb0"]]));e("a",function(){return o((function e(t){n(this,e),r(this,"host",void 0),r(this,"space","pushPinLayer"),r(this,"pushPins",[]),this.host=t}),[{key:"mount",value:function(){return this.host.plugins[this.space]=this,!0}},{key:"unmount",value:function(){var e=this;try{this.host.plugins[this.space]=null,this.pushPins.forEach((function(t){return e.host.map.entities.remove(t.pin)}))}catch(t){return console.log(t),!1}return!0}},{key:"add",value:function(e,t){var n=this.pushPins.length>0?this.pushPins[this.pushPins.length-1].id+1:0,i=new Microsoft.Maps.Pushpin(e,t);return this.host.map.entities.push(i),this.pushPins.push({id:n,pin:i}),n}},{key:"remove",value:function(e){var t=this.pushPins.findIndex((function(t){return t.id===e}));-1!==t&&(this.host.map.entities.remove(this.pushPins[t].pin),this.pushPins.splice(t,1))}},{key:"setOptions",value:function(e,t){var n=this.pushPins.findIndex((function(t){return t.id===e}));-1!==n&&this.pushPins[n].pin.setOptions(t)}},{key:"setLocation",value:function(e,t){var n=this.pushPins.findIndex((function(t){return t.id===e}));-1!==n&&this.pushPins[n].pin.setLocation(t)}}])}());var _=function(){return o((function e(t){n(this,e),r(this,"host",void 0),r(this,"space",void 0),r(this,"behaviour",void 0),this.host=t,this.space="customizedTouchpadBehavior"}),[{key:"mount",value:function(){var e,n,i,o,u=this;return this.host.map.setOptions({disableScrollWheelZoom:!0}),this.behaviour=(e=this.host,n=function(e,t){u.host.setViewPort({centre:e,zoom:t})},i=e.properties.liteModeForceHiDPI?window.devicePixelRatio:1,o=[5e3,2500,1e3,500,250,200,100,50,25,10,5,2,1,.4,.25,.2,.15,.12,.05,.025,.01],function(u){P.updateDeivceType(u),u.preventDefault();var s=e.getZoom(),a=5e3/o[Math.round(s)]||1,c=function(e){for(var n=1;n<arguments.length;n++){var i=null!=arguments[n]?arguments[n]:{};n%2?t(Object(i),!0).forEach((function(t){r(e,t,i[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(i)):t(Object(i)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(i,t))}))}return e}({},e.getViewCentre());if(u.ctrlKey||u.metaKey){var l=Math.min(Math.max(s-.05*u.deltaY,e.getZoomRange().min),e.getZoomRange().max);n(c,l)}else c.latitude=Math.max(-90,Math.min(90,c.latitude-u.deltaY*i/a)),c.longitude=(c.longitude+u.deltaX*i/a+180)%360-180,n(c,s)}),this.host.container.addEventListener("wheel",this.behaviour,{passive:!1}),!0}},{key:"unmount",value:function(){return this.host.map.setOptions({disableScrollWheelZoom:!1}),this.behaviour&&this.host.container.removeEventListener("wheel",this.behaviour),!0}}])}();e("b",_)}}}))}();
